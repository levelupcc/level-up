---
layout: news
title: Improvements to the Level Up backend
date: 2022-09-25
author: Jon Camfield, Tin Geber
summary: Improvements to the Level Up build process
published: true
category: news
permalink: /news/2023-09-25-levelup-backend/
breadcrumb: Improvements to the Level Up backend 
---

First off, thanks to everyone who joined the LevelUp call at RightsCon yesterday - some really great and actionable feedback came out of it, from a more welcoming github intro to a clearer "what and how content gets added" process.

In addition to those improvements, Tin Geber and Jon Camfield have made some signficant backend improvements to the site - removing the Travis CI dependency to focus on Github Actions, and significantly reducing build time (by 3190%). You might have also noticed additional minor tweaks to the site yesterday as well, including a "last commit" image in the footer to close a long-open issue.

## Moving to Github Actions

- no external VPS or CI needed anymore: our stack is reduced to 1 element, without losing functionality or features
- the Actions .yaml is almost unchanged from default, so fairly easy to maintain
- it’s a good bet that Github will keep our (super simple) workflow features free for a long time
- if one day we want to migrate to Gitlab, Gitea, or another self-hosted repo, they usually have decent feature parity with Github Actions, so this will make the migration easier

Due to github hosting settings, this meant a few more changes to ensure the test and dev sites also work, and changing how we host the live site.  It is now fully and only on github, and not also behind Deflect.ca. The Level Up Matomo statistics server will live on (via GreenHost), (and it can serve as a backup host if needed in a pinch).

One final note on stats, however - matomo is generally tracking **over 10x hits LESS** than the server-visible actual traffic, per Deflect's stats (and this was also seen importing raw apache stats from the Very Old webserver years ago).  This is likely because Level Up visitors block javascript/image-based statistics trackers (privacy training works!), whereas server logs capture all hits on the server.  We lost these Deflect stats when we switched over, so I wanted to document this discrepancy in the community's consciousness as a specific limitation of LevelUp stats, and a general limitation of using most analytics/tracking tools to track digisec practitioners.

## Site theme cleanup

This work underscored how ... well, unpleasant it is to update content even for those  comfortable working with github and jekyll. Currently each minor change (even just a text change in one file) you make on a local machine takes 3 minutes on a powerful CPU, due to some of our theme choices - mainly highlighting the top navigation item for the section you're in. 

By removing that highlight logic and caching the navigation and footer (using https://github.com/benbalter/jekyll-include-cache), we can reduce build time down to **5 seconds** - a 3190% improvement (!!).  The "cache" is per-rebuild, so new content will still show up, but instead of custom-rebuilding the navigation and footer for every single page, it is built once and then re-used. 

These are now live and preserve working breadcrumbs, and we have also been able to restore the highlighting without impacting the build times.
