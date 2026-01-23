---
layout: page
title: Mission Statement
permalink: /integrated-computing-lab/
description: An interdisciplinary lab focused on AI, design, and manufacturing systems.
nav: false
---

{% for section in site.data.icl.sections %}
<h2 class="icl-section-title">{{ section.title }}</h2>
{{ section.body | markdownify }}
{% endfor %}
