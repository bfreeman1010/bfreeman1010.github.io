# Repository Transfer Guide

This guide explains how to transfer ownership of this website and what needs to be updated for it to work under a new GitHub account.

## After Receiving the Repository

### Step 1: Rename the Repository

The repository must be renamed to match your GitHub username for GitHub Pages to work.

In GitHub: Settings, then General, then Repository name

Change from `USERNAME.github.io` to `YOURUSERNAME.github.io`

### Step 2: Update Configuration Files

#### _config.yml (Main Settings)

Open `_config.yml` and update these settings:

- Line 6-8: Change `first_name`, `middle_name`, `last_name` to your name
- Line 20: Change `url` to `https://YOURUSERNAME.github.io`
- Line 79: Change `google_analytics` to your Google Analytics ID (or delete the line)
- Line 283-284: Change `scholar: last_name/first_name` to your name (for publication highlighting)

#### edit/data/socials.yml (Contact and Social Links)

Open `edit/data/socials.yml` and update:

- `cv_pdf` - Path to your CV PDF
- `email` - Your email
- `facebook_id` - Your Facebook (or delete)
- `github_username` - Your GitHub username
- `linkedin_username` - Your LinkedIn username
- `orcid_id` - Your ORCID ID
- `research_gate_profile` - Your ResearchGate profile
- `scholar_userid` - Your Google Scholar ID

#### _pages/about.md (Homepage)

Open `_pages/about.md` and update:

- `subtitle` - Your title/position
- `institution` - Your institution
- `email` - Your email
- `profile: image` - Your profile image filename

### Step 3: Replace Personal Content

- `theme/includes/about_content.md` - Your biography text
- `edit/data/people.yml` - Team member information
- `edit/data/cv.yml` - Your CV data
- `edit/data/experience.yaml` - Your work experience
- `assets/img/prof_pic*.png` - Your profile photo
- `assets/pdf/` - Your CV PDF and other documents
- `_bibliography/papers.bib` - Your publications
- `_news/` - Your news/announcements

### Step 4: Enable GitHub Pages

1. Go to repository Settings, then Pages
2. Under Source, select GitHub Actions
3. The site will build and deploy automatically

## Site Structure Overview

- `_pages/` - Page files (Markdown with front matter)
- `edit/data/` - Editable content (YAML files)
- `theme/layouts/` - Page templates (Liquid files)
- `theme/includes/` - Reusable components
- `assets/img/` - Images
- `assets/pdf/` - PDF files
- `_bibliography/` - Publications (BibTeX)
- `_config.yml` - Main site configuration

## How to Edit Content

See `edit/README.md` for a quick reference on which files to edit for each page.

See `edit/PAGE_HOWTO.md` for instructions on creating new pages.

## Custom Domain (Optional)

If you have a custom domain:

1. Create a file named `CNAME` in the repository root
2. Add your domain (example: yourname.com)
3. Configure your DNS to point to GitHub Pages with these A records:
   - 185.199.108.153
   - 185.199.109.153
   - 185.199.110.153
   - 185.199.111.153
4. Update `url` in `_config.yml` to `https://yourname.com`

## Need Help?

- Al-folio Documentation: https://github.com/alshedivat/al-folio
- Jekyll Documentation: https://jekyllrb.com/docs/
- GitHub Pages Documentation: https://docs.github.com/en/pages
