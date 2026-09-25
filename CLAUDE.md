# Portfolio site: working notes for Claude

Jekyll site on GitHub Pages (`tystowell.github.io`, `baseurl: ""`). Tyler uses it for PhD
applications, so accuracy and polish matter more than speed. See `README.md` for the
front-matter fields and file layout.

## Adding images to a project (the usual request)

When Tyler says "I added photos/figures for X", do all of this:

1. **Find the new files.** They're usually under `assets/img/projects/<something>/`, and may
   use a folder name that doesn't match the project slug. `git status --short` lists
   untracked ones. Look at every image before deciding how to use it.
2. **Decide which images to use and where.** Say so if an image isn't worth including (too
   small, blurry, or redundant), and explain why.
3. **Make web copies with clear lowercase names** (`chip.jpg`, `beam-path.png`), then
   **delete the originals** so every image in the repo is used by a page.
   - Photos: JPEG, quality about 85, at most about 2000 px wide.
   - Diagrams and plots: PNG. **Flatten transparency onto white**, because transparent PNGs
     become unreadable in dark mode.
   - Never upscale a small image to fill a banner. Use `figure-row` or `figure-inset` instead
     (see below).
   - Crop off slide numbers, panel letters ("b") and debug legends (data file names).
4. **Always set `thumbnail:`.** This is the card image on the home page and `/work/`. It's
   the step most often forgotten. Cards are cropped to **16:10** with `object-fit: cover`.
   - If a plain crop would cut off the important part (a wide diagram, a subject near the
     edge), make a card-specific image at **1120×700** (`card.png`): either crop centered on
     the subject, or fit the whole figure and pad with its background color.
   - Don't use someone else's image (credited on the page) as the card. Prefer Tyler's own
     photos or figures.
5. **Set `hero:`** (the banner at the top of the page) when an image is large and strong
   enough. Give it `hero_alt` and `hero_caption`.
6. **Place the rest in the body** next to the text they illustrate, each with a caption.
7. **Remove any `TODO` that asked for the image.**
8. **Build and look at it**, including the card. Check that no page references a missing
   image and that no image is left unused.

### Figure layouts (CSS in `assets/css/main.css`)

```html
<!-- Two images side by side; they stack on phones -->
<div class="figure-row">
  <figure><img src="{{ '/assets/img/projects/x/a.png' | relative_url }}" alt="…"><figcaption>…</figcaption></figure>
  <figure><img src="{{ '/assets/img/projects/x/b.png' | relative_url }}" alt="…"><figcaption>…</figcaption></figure>
</div>

<!-- Small or low-resolution image with its caption beside it -->
<figure class="figure-inset">
  <img src="{{ '/assets/img/projects/x/small.png' | relative_url }}" alt="…">
  <figcaption>…</figcaption>
</figure>
```

**Videos:** convert phone `.mov` files (often HEVC, which not every browser plays) to H.264
MP4 with `avconvert --source in.mov --preset Preset1280x720 --output out.mp4`, and delete the
`.mov`. Add a poster frame (`poster=`), and use `autoplay muted loop playsinline controls`.
`<video>` works inside `figure-inset` and `figure-row`.

In Markdown, a full-width image is `![alt]({{ '/assets/…' | relative_url }})` followed by an
italic `*caption*` line. For a wide image with small text, wrap it in a link to itself so a
click opens it full size.

## Writing content

- **Only state what Tyler told you or what the figure clearly shows.** Don't invent results,
  roles, dates or achievements. When unsure, write it cautiously and ask Tyler to check it,
  or leave a `TODO`.
- Voice: first person, plain and understated. Leave the specifics to make the impression.
- Sensitive or pre-publication work (for example the Quiver simulator) stays as described.
  Don't add unpublished details.

## Structure

- Categories and their groups (Research / Work Experience / Student Teams / Coursework /
  Personal Projects) live in `_data/categories.yml`.
- `date:` is the **start** date and drives every sort, newest first. `period:` is the text
  that gets displayed.
- Quote any `title:` that contains a colon, or the YAML breaks.
- Project URLs are `/work/<file-name>/`. When renaming a file, check for links to the old URL.
- The home page's top section is configured by `hero_photo:` in `_config.yml`.

## Previewing

macOS system Ruby (2.6) can't run `bundle install` for `github-pages`. Either install a newer
Ruby (`brew install ruby`) or, to just check the build, push and check the repo's **Actions**
tab. After a push, GitHub Pages takes about a minute to rebuild, and browsers can keep the old
CSS for up to 10 minutes. Hard-refresh before assuming something broke.
