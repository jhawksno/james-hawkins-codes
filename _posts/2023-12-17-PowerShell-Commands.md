---
layout: post
title: PowerShell Commands
sidebar: powershellsidebar
author: James
date: 2023-12-17
categories: [PowerShell]
---

The recommended way to install PowerShell is to use **Winget**.

To check for the latest PowerShell and PowerShell Preview versions:

~~~powershell
winget search Microsoft.PowerShell
~~~

Example output:

{% highlight powershell %}
Name               Id                           Version   Source
-----------------------------------------------------------------

PowerShell         Microsoft.PowerShell         7.4.0.0   winget
PowerShell Preview Microsoft.PowerShell.Preview 7.4.0.101 winget
{% endhighlight %}

Install PowerShell or PowerShell Preview using the _id_ parameter:

~~~powershell
winget install --id Microsoft.Powershell --source winget
winget install --id Microsoft.Powershell.Preview --source winget
~~~
