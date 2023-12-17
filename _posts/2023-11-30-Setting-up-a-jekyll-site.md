---
layout: post
title: Jekyll Command Line Reference
author: James
date: 2023-12-16
categories: [Jekyll]
---

<div class="container mt-5">

<h2 class="h5">Working with Ruby Gems</h2>

<p class="mt-3">
    Find your Gem path and environment information:
<br/>
 <div class="card text-bg-dark">
    <div class="card-header">
        Find your gem path and enironment information:</div>
      <div class="card-body">
        <code>gem environment</code>
        </div>
      </div>
</p>

<p class="mt-3">
    Install a gem:<br/>
<code>gem install gem_name</code>
</p>

<p class="mt-3">
    Example:
<br/>

<code>gem install jeykll</code>
</p>

<p class="mt-3">
    Install a specific version (Optional):
</p>
<p>
<code>gem install jeykll -v 4.3.2</code>
</p>

<p class="mt-3">
    Check to see if a gem has been installed correctly:
</p>
<p>
    <code>gem list gem_name</code>
</p>
</div>

<div class="mt-5">

<h2 class="h5">Using Bundler with Jekyll</h2>

<p class="mt-3">
If you find you do not have vender/bundle configured for your Jekyll build, you can install and configure it using the following command:
<br/>

<code>bundle config set --local path vendor/bundle</code>
</p>
</div>
