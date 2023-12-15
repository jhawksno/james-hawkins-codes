---
layout: post
title: SharePoint Development
author: James
categories: [SharePoint]
---
This area is for SharePoint development posts.

## SharePoint SPFx Releases

You can find a list of all official SPFx versions here: [SharePoint Framework Releases](https://learn.microsoft.com/en-us/sharepoint/dev/spfx/roadmap)

The latest version is currently [SPFx v1.18.2](https://learn.microsoft.com/en-us/sharepoint/dev/spfx/release-1.18.2) - November 21, 2023.

## Install the Lastest Version

Install the latest release of the SharePoint Framework (SPFx) by including the @latest tag:

~~~
npm install @microsoft/generator-sharepoint@latest --global
~~~

## Upgrading projects from v1.18 to v1.18.2

In the project's package.json file, identify all SPFx packages. For each SPFx package:

1. Uninstall the existing packages:

~~~Node
npm uninstall @microsoft/{spfx-package-name}
~~~

2. Install the new v1.18.2 packages:

<kdb>
npm install @microsoft/{spfx-package-name}@latest --save --save-exact
</kdb>
