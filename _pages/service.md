---
layout: page
permalink: /service/
title: Service
description: service activities and highlights.
nav: true
nav_order: 9
---

<!-- Research Horizons Posters Section -->
{% if site.data.service.research_horizons %}
  <div class="service-item">
    <h2 class="category">
      <a href="https://louis.uah.edu/research-horizons/" target="_blank" rel="noopener">UAH Research Horizons Posters</a>
    </h2>
    <div class="service-images research-horizons-posters">
      {% for poster in site.data.service.research_horizons %}
        <div class="service-image">
          {% if poster.width or poster.height %}
            {% assign max_width = poster.width | default: "" | append: "px" %}
            {% assign max_height = poster.height | default: "" | append: "px" %}
            {% include figure.liquid path=poster.image class="rounded poster-thumbnail" alt=poster.title width=poster.width height=poster.height max-width=max_width max-height=max_height zoomable=true %}
          {% else %}
            {% include figure.liquid path=poster.image class="rounded poster-thumbnail" alt=poster.title zoomable=true %}
          {% endif %}
          <div class="service-image-text">
            <strong>{% if poster.url %}<a href="{{ poster.url }}" target="_blank" rel="noopener">{{ poster.title }}</a>{% else %}{{ poster.title }}{% endif %}</strong>
          </div>
        </div>
      {% endfor %}
    </div>
  </div>
{% endif %}

{% for item in site.data.service.service %}
  <div class="service-item">
    <h2 class="category">
      <a href="{{ item.url }}" target="_blank" rel="noopener">{{ item.title }}</a>
    </h2>
    <div class="service-images">
      {% for image in item.images %}
        {% assign image_path = image.path %}
        {% if item.image_folder %}
          {% assign image_path = item.image_folder | append: "/" | append: image.file %}
        {% endif %}
        <div class="service-image">
          {% assign image_class = "rounded" %}
          {% if image.no_border %}
            {% assign image_class = image_class | append: " no-outline" %}
          {% endif %}
          {% if image.width or image.height %}
            {% assign max_width = image.width | default: "" | append: "px" %}
            {% assign max_height = image.height | default: "" | append: "px" %}
            {% include figure.liquid path=image_path class=image_class alt=image.alt width=image.width height=image.height max-width=max_width max-height=max_height zoomable=true %}
          {% else %}
            {% include figure.liquid path=image_path class=image_class alt=image.alt zoomable=true %}
          {% endif %}
          {% if image.description %}
            <div class="service-image-text">{{ image.description }}</div>
          {% endif %}
        </div>
      {% endfor %}
    </div>
  </div>
{% endfor %}
