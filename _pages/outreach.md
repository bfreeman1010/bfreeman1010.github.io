---
layout: page
permalink: /outreach/
title: Outreach
description: Outreach activities and highlights.
nav: true
nav_order: 9
---

{% for item in site.data.outreach.outreach %}
  <div class="outreach-item">
    <h2 class="category">
      <a href="{{ item.url }}" target="_blank" rel="noopener">{{ item.title }}</a>
    </h2>
    <div class="outreach-images">
      {% for image in item.images %}
        {% assign image_path = image.path %}
        {% if item.image_folder %}
          {% assign image_path = item.image_folder | append: "/" | append: image.file %}
        {% endif %}
        <div class="outreach-image">
          {% assign image_class = "rounded" %}
          {% if image.no_border %}
            {% assign image_class = image_class | append: " no-outline" %}
          {% endif %}
          {% if image.width or image.height %}
            {% assign max_width = image.width | default: "" | append: "px" %}
            {% assign max_height = image.height | default: "" | append: "px" %}
            {% include figure.liquid path=image_path class=image_class alt=image.alt width=image.width height=image.height max-width=max_width max-height=max_height %}
          {% else %}
            {% include figure.liquid path=image_path class=image_class alt=image.alt %}
          {% endif %}
          {% if image.description %}
            <div class="outreach-image-text">{{ image.description }}</div>
          {% endif %}
        </div>
      {% endfor %}
    </div>
  </div>
{% endfor %}
