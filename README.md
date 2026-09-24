# Technical Portfolio

Personal portfolio site for PhD applications, built with [Jekyll](https://jekyllrb.com/) and hosted on GitHub Pages.

**Live site:** https://tystowell.github.io/TechnicalPortfolio/

## Publishing (one-time setup)

1. Push this repo to GitHub.
2. On GitHub, go to **Settings → Pages**.
3. Under **Build and deployment**, set **Source** to *Deploy from a branch*, then pick branch `main` and folder `/ (root)`.
4. Wait a minute. The site builds itself on every push after that.

> Want the shorter URL `https://tystowell.github.io/`? Rename the repo to `tystowell.github.io`
> and set `baseurl: ""` in `_config.yml`.

## Adding a project

1. Copy `_templates/project.md` to `_projects/<short-name>.md`. The file name becomes the URL (`/work/<short-name>/`).
2. Fill in the front matter (`title`, `summary`, `category` and `date` are required) and write the page in Markdown.
3. Put images in `assets/img/projects/` and reference them as `/assets/img/projects/foo.png` in `thumbnail:` / `hero:`.
   Inside Markdown, write `![caption]({{ '/assets/img/projects/foo.png' | relative_url }})`.
4. Commit and push.

The project then shows up automatically in:
- the **Index of work** on the home page (grouped by category),
- the filterable grid on **/work/**,
- the **Jump to…** sidebar and **Previous / Next** links on every project page,
- **Highlights** on the home page, if you set `featured: true`.

Useful front matter:

| Field | What it does |
|---|---|
| `featured: true` | Show as a large card in Highlights on the home page |
| `order: 1` | Manual sort position (lower first) within Highlights and within its category |
| `math: true` | Enables LaTeX via MathJax: `$inline$` and `$$display$$` |
| `embed: <url>` | Embeds an iframe at the top of the page. Good for games hosted on GitHub Pages |
| `links:` | Buttons under the title (`icon:` can be `github`, `file`, `play`, `external`) |
| `tools:` | Tag pills on cards and the page |

## Customizing

| File | Controls |
|---|---|
| `_config.yml` | Name, tagline, intro text, contact links, CV path |
| `_data/categories.yml` | Categories, their groups (Research / Personal Projects) and colors |
| `_data/navigation.yml` | Top navigation links |
| `_data/publications.yml` | Papers, posters and talks on the About page |
| `_data/news.yml` | Dated updates on the home page |
| `about.md` | About page (bio, education, skills) |
| `assets/css/main.css` | All styling. Colors and fonts are CSS variables at the top |

**CV:** drop your PDF at `assets/files/cv.pdf` and set `cv: /assets/files/cv.pdf` in `_config.yml`.

## Previewing locally (optional)

You need Ruby 3.x (macOS ships 2.6, which is too old; install a newer one with `brew install ruby`):

```sh
bundle install
bundle exec jekyll serve --livereload
# open http://localhost:4000/TechnicalPortfolio/
```
