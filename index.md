---
layout: default
title: Home
---

Hi! I'm **BenjaTK**. I make **fun little games**.


# Featured Projects

<div class="game-grid">
    {% for item in site.data.featured-projects %}
    <div class="game-thumb">
        <a class="game-link" href="{{ item.link }}"><img height="200" width="252" src="{{ item.image }}"></a>
    </div>
    {% endfor %}
</div>

# Latest Posts

<ul class="blog-list">
  {% for post in site.posts limit:3 %}
    <li>
      <a href="{{ post.url }}">{{ post.title }}</a><span class="post-date float-right">{{ post.date | date_to_string }}</span>
      <span class="excerpt">{{ post.excerpt }}</span>
    </li>
  {% endfor %}
</ul>


<img width="32" decoding="async" src="assets/images/icons/hammer.svg" style="vertical-align:middle">This website is always a WIP! <img width="32" decoding="async" src="assets/images/icons/hammer.svg" style="vertical-align:middle">


{% include links.html %}