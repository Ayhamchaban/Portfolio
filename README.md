# Ayham — Portfolio Site

A one-page portfolio site. No installation, no build tools — it's just
HTML, CSS and JavaScript files that any web browser can open.

This guide is written for someone who isn't a developer. It covers three
things:

1. Adding a new project
2. Replacing the placeholder logo with a real one
3. Publishing the site on GitHub Pages so you have a live link to share

---

## 1. Adding a new project

All the projects shown in the "Work" section live in one file:

```
js/projects.js
```

Open that file in any text editor (even Notepad or TextEdit works, but a
free editor like [VS Code](https://code.visualstudio.com/) makes it easier
to avoid typos).

You'll see a list of projects that looks like this:

```js
{
  title: "Marram & Co. Identity",
  category: "identity",
  description: "Full brand identity and print system for a Dubai-based hospitality group.",
  image: "",
  videoEmbedUrl: "",
  tags: ["branding", "print", "guidelines"]
},
```

To add a new project:

1. Copy one whole block, from the opening `{` to the closing `},`
2. Paste it just before the closing `];` at the bottom of the file
3. Edit the values between the quotes:
   - **title** — the project name
   - **category** — must be exactly one of: `identity`, `packaging`, `social`, `motion`, `photo`
     (these match the filter buttons on the site — anything else won't show up)
   - **description** — a sentence or two about the project
   - **image** — the path to a cover photo, e.g. `"assets/projects/my-project.jpg"`.
     If you leave it as `""` (empty), the site will show a neat
     "Add cover image" placeholder box instead of a broken image, so it's
     safe to add projects before you have final images.
   - **videoEmbedUrl** — only used for Motion/Video projects. Paste a link
     to the video (e.g. a Vimeo or YouTube URL). Leave as `""` if not needed.
   - **tags** — a short list of keywords in quotes, separated by commas

4. Save the file.

That's it — no need to touch `index.html`. The site reads this file
automatically and builds the project card for you, including the filter
buttons.

**To add the actual image file:** put your photo in the `assets/projects/`
folder, then reference it as `"assets/projects/your-file-name.jpg"` in the
`image` field above.

---

## 2. Replacing the placeholder logo

Right now the top-left corner of the site shows a simple text monogram
("A/H") standing in for a real logo.

To swap it for a real logo image:

1. Save your logo file into the `assets/logo/` folder (e.g. `assets/logo/logo.svg` or `logo.png`)
2. Open `index.html` in a text editor
3. Find this section near the top (look for the comment `LOGO PLACEHOLDER`):

   ```html
   <span class="logo-mark" aria-hidden="true">A/H</span>
   ```

4. Replace that one line with:

   ```html
   <img src="assets/logo/logo.svg" alt="Ayham logo" class="logo-mark-img" />
   ```

   (adjust the file name to match whatever you saved)

5. Save the file and refresh the page in your browser to check it looks right.

---

## 3. Publishing on GitHub Pages (getting a live link)

GitHub Pages turns a GitHub repository into a free, live website — perfect
for a site like this with no build step.

1. **Create a GitHub account** if you don't already have one, at github.com.
2. **Create a new repository** (e.g. named `portfolio`) and upload all the
   files in this project to it (drag-and-drop works fine on github.com, or
   use `git push` if you're comfortable with git).
3. In your repository, go to **Settings → Pages** (in the left sidebar).
4. Under "Build and deployment", set **Source** to "Deploy from a branch".
5. Set **Branch** to `main` (or whichever branch has your files) and the
   folder to `/ (root)`, then click **Save**.
6. Wait a minute or two, then refresh the Pages settings screen — GitHub
   will show you a live URL, something like:

   ```
   https://your-username.github.io/portfolio/
   ```

7. That's your live link. Any time you edit `js/projects.js` (or anything
   else) and push the change to the same branch, the live site updates
   automatically within a minute or two.

---

## Project structure (for reference)

```
index.html          The page structure/markup
css/styles.css       All visual styling
js/projects.js       Your project list — edit this to add/remove work
js/main.js           Page behavior (renders cards, filters, mobile menu)
assets/logo/          Put your real logo file here
assets/projects/      Put project cover images here
```

Anywhere you see a comment containing **"REPLACE ME"** in the code (in
`index.html`), it marks placeholder text — like the bio, email, LinkedIn
and Instagram links — that should be swapped for the real details.
