/**
 * Ayham portfolio — page behavior.
 * Reads PROJECTS from js/projects.js and renders the work grid,
 * wires up category filtering, and handles the mobile nav toggle.
 * No build step, no dependencies.
 */

(function () {
  "use strict";

  const CATEGORY_LABELS = {
    identity: "Identity & Print",
    packaging: "Packaging",
    social: "Social Media",
    motion: "Motion / Video",
    photo: "Photography"
  };

  function createCard(project) {
    const card = document.createElement("article");
    card.className = "card";
    card.dataset.category = project.category;

    const media = document.createElement("div");
    media.className = "card-media";

    if (project.image) {
      const img = document.createElement("img");
      img.src = project.image;
      img.alt = project.title;
      img.loading = "lazy";
      media.appendChild(img);
    } else {
      const placeholder = document.createElement("div");
      placeholder.className = "card-media-placeholder";
      placeholder.textContent = "Add cover image";
      media.appendChild(placeholder);
    }

    const body = document.createElement("div");
    body.className = "card-body";

    const category = document.createElement("span");
    category.className = "card-category";
    category.textContent = CATEGORY_LABELS[project.category] || project.category;

    const title = document.createElement("h3");
    title.className = "card-title";
    title.textContent = project.title;

    const desc = document.createElement("p");
    desc.className = "card-desc";
    desc.textContent = project.description;

    body.appendChild(category);
    body.appendChild(title);
    body.appendChild(desc);

    if (project.videoEmbedUrl) {
      const reelLink = document.createElement("a");
      reelLink.className = "card-reel-link";
      reelLink.href = project.videoEmbedUrl;
      reelLink.target = "_blank";
      reelLink.rel = "noopener";
      reelLink.textContent = "Watch reel →";
      body.appendChild(reelLink);
    }

    if (Array.isArray(project.tags) && project.tags.length) {
      const tagList = document.createElement("ul");
      tagList.className = "card-tags";
      project.tags.forEach((tag) => {
        const li = document.createElement("li");
        li.textContent = tag;
        tagList.appendChild(li);
      });
      body.appendChild(tagList);
    }

    card.appendChild(media);
    card.appendChild(body);
    return card;
  }

  function renderProjects() {
    const grid = document.getElementById("project-grid");
    const emptyMsg = document.getElementById("project-grid-empty");
    if (!grid) return;

    const projects = Array.isArray(window.PROJECTS) ? window.PROJECTS : [];

    projects.forEach((project) => {
      grid.appendChild(createCard(project));
    });

    if (!projects.length && emptyMsg) {
      emptyMsg.hidden = false;
    }
  }

  function setupFilters() {
    const filterBar = document.getElementById("filter-bar");
    const grid = document.getElementById("project-grid");
    const emptyMsg = document.getElementById("project-grid-empty");
    if (!filterBar || !grid) return;

    filterBar.addEventListener("click", (event) => {
      const button = event.target.closest(".filter-btn");
      if (!button) return;

      filterBar.querySelectorAll(".filter-btn").forEach((btn) => {
        btn.classList.toggle("is-active", btn === button);
      });

      const filter = button.dataset.filter;
      const cards = grid.querySelectorAll(".card");
      let visibleCount = 0;

      cards.forEach((card) => {
        const matches = filter === "all" || card.dataset.category === filter;
        card.classList.toggle("is-hidden", !matches);
        if (matches) visibleCount += 1;
      });

      if (emptyMsg) {
        emptyMsg.hidden = visibleCount !== 0;
      }
    });
  }

  function setupNavToggle() {
    const toggle = document.getElementById("nav-toggle");
    const links = document.getElementById("nav-links");
    if (!toggle || !links) return;

    toggle.addEventListener("click", () => {
      const isOpen = links.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", String(isOpen));
    });

    links.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        links.classList.remove("is-open");
        toggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  function setupFooterYear() {
    const yearEl = document.getElementById("year");
    if (yearEl) {
      yearEl.textContent = String(new Date().getFullYear());
    }
  }

  document.addEventListener("DOMContentLoaded", () => {
    renderProjects();
    setupFilters();
    setupNavToggle();
    setupFooterYear();
  });
})();
