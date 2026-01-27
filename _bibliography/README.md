# Publications Guide

This folder contains the publications data in BibTeX format.

## Adding a New Publication

1. Open `papers.bib`
2. Add a new BibTeX entry

Example entry:

```bibtex
@article{AuthorYear2024titlekeyword,
  abbr = {Computational Design},
  author = {First Author and Second Author and Cheng Chen},
  title = {Your Paper Title Here},
  journal = {Journal Name},
  year = {2024},
  doi = {10.1234/example},
  url = {https://link-to-paper.com},
  preview = {thumbnail-image.jpg},
  pdf = {paper-file.pdf}
}
```

## Filter Tags (abbr field)

The `abbr` field controls which filter tab a publication appears under.

Current filter categories:
- Computational Design
- Manufacturing
- Education

To add a filter tag to a publication, set the abbr field:

```bibtex
abbr = {Manufacturing},
```

## Adding a New Filter Tab

To add a new filter category:

1. Open `assets/js/publication-filters.js`
2. Find the `orderedLabels` array (around line 49):

```javascript
const orderedLabels = ["Computational Design", "Manufacturing", "Education"];
```

3. Add your new category to the array:

```javascript
const orderedLabels = ["Computational Design", "Manufacturing", "Education", "New Category"];
```

4. Use that exact name in the `abbr` field of your BibTeX entries

## Optional Fields

These fields add buttons and features to publication entries:

- `abbr` - Filter tag shown as badge (appears in filter tabs)
- `preview` - Thumbnail image (put in assets/img/publication_preview/)
- `pdf` - PDF link or filename (put files in assets/pdf/)
- `abstract` - Shows Abstract button with expandable text
- `code` - Link to code repository
- `website` - Link to project website
- `video` - Link to video (YouTube embed URL)
- `slides` - Link to slides file
- `poster` - Link to poster file
- `doi` - Digital Object Identifier
- `altmetric` - Set to true to show Altmetric badge
- `dimensions` - Set to true to show Dimensions badge
- `google_scholar_id` - Google Scholar ID for citation tracking
- `selected` - Set to true to feature on homepage

## File Locations

- PDF files: `assets/pdf/`
- Preview images: `assets/img/publication_preview/`
- Poster files: `assets/pdf/`
- Slides files: `assets/pdf/`

