---
layout: page
title: Integrated Computing Lab
permalink: /integrated-computing-lab/
description: An interdisciplinary lab focused on AI, design, and manufacturing systems.
nav: true
nav_order: 7
---

{% for section in site.data.icl.sections %}
<h2 class="icl-section-title">{{ section.title }}</h2>
{{ section.body | markdownify }}
{% endfor %}
