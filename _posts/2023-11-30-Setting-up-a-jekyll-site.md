---
layout: post
title: Jekyll Command Line Reference
sidebar: jekyllsidebar
author: James
date: 2023-12-16
categories: [Jekyll]
---

## Working with Ruby Gems

Find your gem path and enironment information:

~~~bash
gem environment
~~~

Install a gem:

~~~bash
gem install gem_name
~~~

Example:

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

## Using Bundler with Jekyll

If you find you do not have vender/bundle configured for your Jekyll build, you can install and configure it using the following command:

~~~bash
bundle config set --local path vendor/bundle
~~~
