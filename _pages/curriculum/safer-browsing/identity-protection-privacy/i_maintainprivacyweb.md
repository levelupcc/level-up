---
layout: content-page
title: Maintaining Privacy While Browsing the Web
author: Mallory Knodel, Nick Sera-Leyva
summary: In this session, participants learn that advertisers (and others) may know more about us than we think, due to the data that we produce when surfing the web.
permalink: /curriculum/safer-browsing/identity-protection-privacy/input/maintaining-privacy-while-browsing-web
breadcrumb: Maintaining Privacy While Browsing the Web
date: 2016-06-00
adids: Input
parent: Identity Protection and Privacy
duration: 45-60 minutes
---

##### Trainer's Note
This Input offers the opportunity to continue onward with several different Deepenings, depending on the needs and circumstances of trainees - the legal status of encryption where your participants live and work is important to be aware of. For some participants, it may be more appropriate to look at using an HTTPS browser plug-in like [HTTPS Everywhere](); for others, looking at [Tor Browser Bundle]() may be a better option.

*Alternatively, if there is sufficient time and interest, you may choose to look at both.*
<br><br>

## Materials to Prepare ##

- Flipchart paper, markers, adhesive for flipchart paper.
- Wall space for the "What your browser says about you" section (below).
- Create a slide with the table showing the benefits and disadvantages of each mitigation tactic.
- Confirm you can reach the Panopticlick (https://panopticlick.eff.org) test page.
- Be able to demonstrate how to tweak various browser settings as prescribed below.
<br><br>

## Input Session ##

### Step 1: Defining Terms
As with many digital security topics, it's important to make sure everyone has a common language before moving forward. Definitions also indicate some of the risks and mitigations that you'll go into more detail later.

**To avoid presenting the content solely as a lecture,** and to get a better sense of your participants' knowledge, you can present this section by asking participants how they would define the following terms, then correct their definitions as needed.

##### Browser
A web browser is software that navigates websites - Firefox and Chrome are examples.

##### Cookies
Designed to be a mechanism for websites to remember useful information about a user's current session on a website, their functionality can be over-extended to remember all kinds of information about users, across individual sessions and entire sites.

##### Plug-in
These are a kind of software designed to add functionality to an existing web browser. They are also referred to as browser "extensions" or "add-ons".

##### Data
Refers to any information that is retrieved, sent, stored or can be accessed using a web browser or plug-in software.

##### Content
Refers to the entire content of a web page, including the URL, text, images, and any hidden content.

##### Tracking
Also known as **website visitor tracking (WVT)**, this is the monitoring of visitor behavior on a website - for example, page views, duration of visit, clicks, and referral sources. This can also extend across other sites, multiple sessions, and even long periods of time depending on how the tracking is done. Tracking for advertising purposes seeks to build user identity profiles (age, gender, race, income, location, etc.) in order to refine user targeting.

##### Browser and Environment Characteristics
This includes information about a browser’s software, including version, configuration and plugins. Additionally, this can extend to data on system fonts, installed applications, operating system, preferred languages, etc.

##### Account Information
Usernames, passwords and sometimes mobile numbers and other authentication information that is associated with a user's online account with a given service, company, or other entity.

##### Browsing History
The detailed log of the websites you have visited and when, often maintained by a browser unless directed to do otherwise via configuring its settings.

##### GPS
Stands for **Global Positioning System**, which offers precise location information gathered by a global positioning system device - this is what powers the functionality of many websites, apps, and devices known as **geo-location**.

##### IP Address
*~~Each Internet-connected device has a public IP address, assigned by its ISP, that it uses to request and receive data. Approximate geolocation and ISP information is implicit.~~*
<br><br>

### Step 2: What Does Your Browser Say About You?
Now that some key terminology has been defined it would be a good time to check in with the group, to see what they know about what is really going on behind the scenes when they browse the Web. Set up some flipchart paper and ask participants what kind of data is available to the websites they view. You can also add things they may have missed.

**As a user, here is the various data that you create and potentially share each time you open your web browser:**

- Browser characteristics
- Stored information: Any information you allow the browser to store such as passwords, addresses or credit card information
- Browsing history: all of the websites you have visited in the past
- Content: URL, text and images, and hidden content of past and current browsing
- Your precise, physical location
- IP address of the device being used to connect
<br><br>

### Step 3: What Else Are We Sharing?
When you visit a website, your intention is to have confidential communication with the server that hosts the website -- and only that server. You might also intend to share webpages with social media when you click a button that says "like" or "share".

**However, there are many hidden ways that you share your browsing data without your explicit consent.**

Refer back to your notes on the type of data created while browsing. Connect and explain these vulnerabilities - the table below outlines some of the vulnerabilities and how they connect back to certain types of data.

[TABLE]

At this point, you may wish to demonstrate some of these vulnerabilities by opening a browser and visiting **Panopticlick **(https://panopticlick.eff.org) and an IP query site such as **What Is My IP** (https://www.whatismyip.com).
<br><br>

### Step 4: So, What Can We Do?
Because of the way web browsers are designed to work with website code to improve user experience, it is surprisingly difficult to protect our privacy. The diversity of this data we've mentioned, and the diversity of techniques that can be used to capture it, calls for a diversity of mitigation tactics. There are a variety of fixes for each kind of vulnerability.

##### *Trainer's Note*
The number of countries where the use of encryption is illegal has decreased, but legal concerns are still very real for some participants. Before a training, review the laws of where your participants live and work, as well as the laws of where you're conducting the training, to confirm that the use of technologies highlighted in this section and in Deepening sessions, including the Tor Browser Bundle, is allowed.
<br><br>

##### Tor Browser Bundle
Because browser fingerprinting is made easier by customizations to browser settings, the simplest solution is to use Tor Browser without additional plugins and using default configurations.

At this point, you may wish to demonstrate the benefit of using the Tor Browser Bundle. Open the Tor Browser Bundle and re-visit Panopticlick (https://panopticlick.eff.org) and What Is My IP (https://www.whatismyip.com) to illustrate that the browser is no longer leaking information.

This can also serve as a segue into the Deepening session **Using the Tor Browser Bundle [LINK].**

**If using the Tor Browser, don't use other plugins or change the default settings to prevent unique browser fingerprinting!**
<br><br>

##### HTTPS Everywhere
**HTTPS** (Secure HyperText Transfer Protocol) ensures that a connection between a user and a website is **authenticated and confidential**. It uses a strong encryption system called **SSL** (Secure Sockets Layer) to create a special encoded connection between a computer and the web server, into which nobody can see. 

It may also be worth noting here to participants that HTTPS only encrypts the *channel* through which data is travelling - *not* the data itself.

Some websites *always* provide a protected SSL (HTTPS) connection; for instance, Google services offer session-wide (from log-in to log-out) HTTPS. However, some websites will have a SSL connection available but won’t force users to connect through it – it may very well not even be obvious that it’s there.

To demonstrate, visit a website that provides both an HTTP and HTTPS connection, but does not force that HTTPS protected connection. An illustrative and relatively recognizeable example is Microsoft.com.

This can also serve as a segue into the Deepening session **Using HTTPS Everywhere [LINK].**
<br><br>

### Step 5: Other Solutions
##### Browser History
Advise participants that in order to prevent someone from reading their browser history, they  can change their browser settings to **not store** browsing history, **clear existing** browsing history, or browse in an "incognito" tab or mode where **history is not recorded.**

##### Stored Information
Change your browser settings to never allow your browser to store sensitive information like passwords, addresses or credit card details. (In Chrome, for instance, this setting is located under Settings -> Show advanced settings -> Passwords and forms.)

##### Do Not Track
Change your browser settings to enable "Do Not Track", in order to notify websites you don't want to be tracked for (strictly) advertising purposes. It's modeled after "do not call" lists for telemarketers in some countries.

##### Clear Cookies
Change your browser settings to clear cookies after you end a session, block cookies from specific websites or even disallow cookies completely.

If you find that certain websites require your browser to accept a cookie in order to log into an account, you can give those sites permission just for your current session. (In Firefox, for instance, this Exception list is located under Tools->Options->Privacy (tab)->Exceptions.)
GPS and Location: Turn off GPS capability on your mobile device, or restrict applications' access to this data.

##### Disable Certain Data Collection
**Privacy Badger**, developed by Electronic Frontier Foundation (EFF), is a browser plug-in (https://www.eff.org/privacybadger) that can be used to block user data from being sent to a number of known, third-party servers.

##### Disable Javascript
Configuring browser settings to disable javascript from running on all sites by default can be accomplished through the use of one of several browser plug-ins. Javascript is a widely used protocol for generating web-based content, that can also gather potentially identifying information from users.
- The **NoScript** extension for Firefox
- The **ScriptSafe** extension in Chrome

##### Update Browsers
Keeping browser software up to date prevents malicious code embedded in websites from collecting data. See **Malware Protection: Safer Software Updating [LINK]** here on LevelUp for supporting training material on this topic.

## Additional Resources ##

- Article - Privacy Tricks for Activist Web Developers by Micah Lee
- Website - BrowserSpy categorizes all of the information and characteristics a browser can disclose.
- Website - Do Not Track contains information about the policy in the United States.

