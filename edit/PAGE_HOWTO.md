1) Create a new page file in `_pages/`
Example: `_pages/my-new-page.md`

2) Add front matter at the top
Use this template:

---
layout: page
title: My New Page
permalink: /my-new-page/
description: Short summary for search and previews.
nav: true
nav_order: 11
---

Notes:
- `nav: true` puts the page in the navbar.
- `nav_order` controls the order (lower numbers appear first).
- Search is enabled site-wide; pages are indexed automatically.

3) Add content below the front matter
Use Markdown or HTML. Example:

## Section Title
Write your content here.

4) Save, build, and refresh
If you run a local server, refresh the browser to see changes.
