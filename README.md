# Level-Up

This is the source code for the https://level-up.cc website. 

[![Build Status](https://travis-ci.org/levelupcc/level-up.svg?branch=gh-pages)](https://travis-ci.org/levelupcc/level-up)

In 2016, all Level Up content was added to Github in an effort to make the content accessible for remixing and sharing.

All content on this site is available under a Creative Commons Attribution-Share Alike Unported 3.0 license by multiple authors.

Explore advice from fellow digital safety trainers and experienced facilitators, customize curriculum keyed to how adults learn, learn more from experts on the Psychology of Security Trainings and self-care (including how stress and trauma affect the ability to learn as well as train effectively), get ideas from icebreakers and activities to start your workshops and make them fun, check out guides on developing trainings and crafting agendas, and more. All made for trainers by their fellow trainers.

### Who built the site?

The website was built by [the engine room](www.theengineroom.org) in the spring of 2016.

User Experience - Julie Lorch

Designer - Dimitris Stamatis

Developer - Hannah Edrosa

### How can I contribute?

If you want to contribute:
- email the community maintainer
- fork the repo, edit and submit a pull request

[See the wiki for instructions for adding content.](https://github.com/levelupcc/level-up/wiki)

### Building the source code

First you need to install the following tools. The instructions depend on the operating system you use.

- Install [Ruby 2.1 or above](https://www.ruby-lang.org/en/documentation/installation/)
- Install [RubyGems](https://rubygems.org/pages/download)
- Install [Jekyll 3](https://jekyllrb.com/docs/installation/)
- Install [Git](https://git-scm.com/downloads)
- Clone the repo

```
git clone git@github.com:levelupcc/level-up.git

```

The compiled code can be found in the _site folder. If you want to build it with a different baseurl, change the baseurl value in _config.yml.

```
# Site settings
title: LevelUp
description: Resources for the global digital safety training community.
baseurl: "" # the subpath of your site, e.g. /blog
url: "" # the base hostname & protocol for your site

```

Once you've added the baseurl you want, run the build command.

```
jekyll build
```


Or change it on the fly when you run the serve command with the baseurl of your choosing.

```
jekyll serve --baseurl '' --watch
```

# Deployment

## Main site
Level-Up uses Github Actions to automatically deploy the site on Github Pages whenever there is a change to the repository. The Action it uses is `.github/workflows/publish-to-gh-pages.yml`. It is based on Jekyll's recommended Action configuration: https://jekyllrb.com/docs/continuous-integration/github-actions/. 

## Dev site
The dev site also uses Github Actions to build whenever there is a change to the `dev` repository, in a slightly more complicated manner:
- Github Actions runs the `.github/workflows/publish-to-dev.yml` Action that first builds the site, then transfers the directory with static files to another repo, `level-up-dev`
- `level-up-dev` runs its own Github Action to publish the static files.  
