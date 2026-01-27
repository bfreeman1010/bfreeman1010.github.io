---
layout: page
title: Example YAML Page
permalink: /example-yaml/
description: example page driven by YAML content.
nav: false
---

{% assign page_data = site.data.example_page %}
{% if page_data.intro %}
{{ page_data.intro | markdownify }}
{% endif %}
{% for section in page_data.sections %}
{% assign title_class = section.title_class | default: "category" %}
<h2 class="{{ title_class }}">
  {% if section.title_link %}
    <a href="{{ section.title_link | relative_url }}">{{ section.title }}</a>
  {% else %}
    {{ section.title }}
  {% endif %}
</h2>
{% if section.body %}
{{ section.body | markdownify }}
{% endif %}
{% if section.note %}
{{ section.note | markdownify }}
{% endif %}
{% if section.links %}
<ul>
  {% for link in section.links %}
  <li><a href="{{ link.url }}" target="_blank" rel="noopener">{{ link.label }}</a></li>
  {% endfor %}
</ul>
{% endif %}
{% if section.images %}
<div class="row">
  {% for image in section.images %}
  <div class="col-md-6">
    {% include figure.liquid
      path=image.path
      caption=image.caption
      class="img-fluid z-depth-1 rounded"
      zoomable=image.zoom
      width=image.width
      height=image.height
      max-width=image.max_width
    %}
    {% if image.text_after %}
    <p>{{ image.text_after | markdownify }}</p>
    {% endif %}
  </div>
  {% endfor %}
</div>
{% endif %}
{% if section.wrap_images %}
  {% for image in section.wrap_images %}
  <div class="clearfix">
    {% assign wrap_class = "" %}
    {% if image.wrap == "left" %}
      {% assign wrap_class = "float-left mr-3 mb-3" %}
    {% elsif image.wrap == "right" %}
      {% assign wrap_class = "float-right ml-3 mb-3" %}
    {% elsif image.wrap == "center" %}
      {% assign wrap_class = "mx-auto d-block mb-3" %}
    {% endif %}
    {% include figure.liquid
      path=image.path
      caption=image.caption
      class=wrap_class
      zoomable=image.zoom
      width=image.width
      height=image.height
      max-width=image.max_width
    %}
    {% if image.text %}
    <p>{{ image.text | markdownify }}</p>
    {% endif %}
  </div>
  {% endfor %}
{% endif %}
{% endfor %}
