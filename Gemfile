source "https://rubygems.org"
ruby '3.2.2'

gem 'github-pages', '~> 228'
gem 'bootstrap', '~> 5.3.2'

group :jekyll_plugins do
  gem "jekyll-feed"
  gem "jekyll-seo-tag"
  gem 'jekyll-paginate', '~> 1.1'
  gem 'jekyll-sitemap', '~> 1.4'
end

platforms :mingw, :x64_mingw, :mswin, :jruby do
    gem "tzinfo", ">= 1", "< 3"
    gem "tzinfo-data"
  end

  gem 'wdm', '~> 0.1.1', :install_if => Gem.win_platform?
  gem "webrick"