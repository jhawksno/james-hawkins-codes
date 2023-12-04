---
layout: default
path: /categories/
title: SharePoint
---

<h2>SharePoint:</h2>

<ul>
  {% for post in site.categories['SharePoint'] %}
  <li>
    <a href="{{ post.url }}">{{ post.title }}</a>
  </li>
  {% endfor %}
</ul>
