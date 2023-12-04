source "https://rubygems.org"
ruby '3.2.2'

gem "github-pages", group: :jekyll_plugins
gem 'bootstrap', '~> 5.3.2'

group :jekyll_plugins do
  gem "jekyll-feed"
  gem "jekyll-seo-tag"
end

platforms :mingw, :x64_mingw, :mswin, :x86_64-linux :jruby do
    gem "tzinfo", ">= 1", "< 3"
    gem "tzinfo-data"
  end

  gem 'wdm', '~> 0.1.1', :install_if => Gem.win_platform?
  gem "webrick"