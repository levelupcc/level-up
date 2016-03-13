---
layout: page
title: News and Updates
permalink: /news/
weight: 7
---
{% for post in site.posts %}
  <section class="section-block">
    <h2>
    <a class="post-link" href="{{ post.url | prepend: site.baseurl }}">{{ post.title }}</a>
    <span class="post-meta">{{ post.date | date: "%b %-d, %Y" }}</span>
    </h2>
  </section>
{% endfor %}
