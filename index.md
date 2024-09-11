---
layout: default
title: Home
---

Hi! I'm **BenjaTK**. I make **fun little games**.


# Featured Projects

<div class="game-grid">
    {% for item in site.data.featured-projects %}
    <div class="game-thumb">
        <a class="game-link" href="{{ item.link }}" target="_blank"><img height="200" width="252" src="{{ item.image }}"></a>
    </div>
    {% endfor %}
</div>

# Latest Posts

<ul class="homepage-blog-list">
  {% for post in site.posts limit:3 %}
    {% if post.hidden != true %}
    <li>
      <a href="{{ post.url }}">{{ post.title }}</a>
      <p class="excerpt unimportant">{{ post.excerpt }}</p>
    </li>
    {% endif %}
  {% endfor %}
</ul>

# Other Blogs

Some blogs I recommend!

{% include blogroll.html limit=3 %}
[More...](/blogroll/)


This website is always a WIP!

<br>
<br>
<br>

{% include links.html %}