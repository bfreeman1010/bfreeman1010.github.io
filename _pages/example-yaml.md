---
layout: page
title: Example YAML Page
permalink: /example-yaml/
description: Example page driven by YAML content.
nav: false
---

{% assign page_data = site.data.example_page %}
{% for section in page_data.sections %}
<h2 class="category">{{ section.title | downcase }}</h2>
{{ section.body | markdownify }}
{% endfor %}
