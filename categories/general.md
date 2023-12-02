---
layout: default
path: /categories/
title: General
---

<h2>General:</h2>

<ul>
  {% for post in site.categories['General'] %}
  <li>
    <a href="{{ post.url }}">{{ post.title }}</a>
  </li>
  {% endfor %}
</ul>
