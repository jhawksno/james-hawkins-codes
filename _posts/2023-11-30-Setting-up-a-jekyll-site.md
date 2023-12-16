---
layout: post
title: Building a Website with Jekyll
author: James
date: 2023-11-30
categories: [Jekyll]
---

## Jekyll Command Line Commands

### Working with Ruby Gems

Find your Gem path and environment information:

~~~bash
gem environment
~~~

Install a gem:

~~~bash
gem install gem_name
~~~

Example usage:

~~~bash
gem install jeykll
~~~

Install a specific version (Optional):

~~~bash
gem install jeykll -v 4.3.2
~~~

Check to see if a gem has been installed correctly:

~~~bash
gem list gem_name
~~~

## Working with Bundler

If you find you do not have vender/bundle configured for your Jekyll build, you can install and configure it using the following command:

~~~Bash
bundle config set --local path vendor/bundle
~~~
