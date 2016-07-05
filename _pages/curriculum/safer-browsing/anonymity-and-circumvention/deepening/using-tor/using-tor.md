---
layout: content-page
title: "Deepening: Using the Tor Browser Bundle"
author: Lindsay Beck, Chris Walker
summary: In this Deepening session, participants will learn how to use the Tor Browser Bundle for anonymity and circumvention, to conduct safer browsing actions while accessing sensitive or blocked content online. Participants will use the Tor Browser Bundle to create an anonymous connection, confirm that it is working, and change their Tor exit relay.
permalink: /curriculum/safer-browsing/anonymity-and-circumvention/deepening/using-tor/
breadcrumb: "Using the Tor Browser Bundle"
date: 2016-05
adids: Deepening
parent: "Safer Browsing - Anonymity & Circumvention; Safer Browsing - Identity Protection and Privacy"
duration: 45-60 minutes
platforms: Linux, Mac OS, Windows
---
# Materials to Prepare
- Projector
- Laptop to visualize demos
- Tor Browser Bundle, installed on the trainer's device
- A copy of the [Tor Browser Bundle installer](https://www.torproject.org/download/download-easy.html.en) (a self-extracting archive) for distribution to participants.

##### *Trainer's Note* 
The Tor Browser Bundle is quite large, so it's a good idea to prepare this ahead of time, especially if you have a slow Internet connection in the training room.
<br><br>

# Deepening

## Step 1. Public IP Address of the Training Site
In a browser, visit either [What Is My IP?](http://whatismyip.com) or [What Is My IP Address](http://www.whatismyipaddress.com), which includes a map to show perceived location.
- Explain the concept of sites like these, which is to show users by which IP address their device and its current location are being identified - in the case of this step, the location indicated on either website should align with the actual location of your training.
- Invite participants to visit the site themselves, using their own devices. Unless any of the participants are using VPN clients or any other kind of proxy tool, the IP Address and location for everybody should appear to be the same.
<br><br>

## Step 2. Public IP Address of the Tor Exit Relay
Demonstrating for the group, close all web browsers and launch the Tor Browser Bundle, either by running "Start Tor Browser.exe" or clicking on a desktop/toolbar icon, and then clicking "Connect".

Wait until a Tor connection is established and a new browser window has opened - note that this could take several minutes. Tor Browser should load a page that says: "Congratulations. This browser is configured to use Tor.” If for some reason your Tor connection fails, it will say: "Something Went Wrong! Tor is not working in this browser."

Using the Tor Browser window, again visit either [What Is My IP?](http://whatismyip.com) or [What Is My IP Address](http://www.whatismyipaddress.com) and show how the IP Address detected has now changed, and if using What Is My IP Address, point out the changed geographic location on the map.
<br><br>

## Step 3. Selecting a New Path through the Tor Network
Explain that Tor could conceivably select an **Exit Relay** in the same country as the user. Define for participants that an **Exit Relay** is the Tor server from which one's outgoing traffic leaves the Tor network, and through which one's incoming traffic enters it. **This is not good for anonymity** - it is also one reason why a Tor Browser user might want to select a new exit relay. This can be done by clicking on the **green onion** icon to the left of the browser's address field and clicking “New Identity”.

Request a new identity, then refresh the webpage for [What Is My IP?](http://whatismyip.com) or [What Is My IP Address](http://www.whatismyipaddress.com). Note that the IP address should have now changed, and highlight this to participants.
<br><br>

## Step 4. Replicate the Process with Participants
Once participants have in turn downloaded and installed the Tor Browser bundle (either before the workshop, or during time allotted during this session) ask them to repeat this exercise themselves on their own devices, until they demonstrate that they can use the Tor Browser Bundle successfully. Then, explain the following:
- Though Tor encrypts your traffic on its way to the *first* Tor Relay, and while it travels through the Tor *network*, it **cannot** automatically encrypt your connection between the *Exit Relay* and the website you are visiting.
- Therefore, if you are visiting a site that **does not** support HTTPS, the Exit Relay operator (who could be anybody) can potentially see everything you send and receive. They might not know *who* you are, unless there are hints in the traffic itself (which is not uncommon), but they can see everything else.
- So, it is still important to use secured HTTPS web services, even while using the Tor Browser or otherwise connecting to the Tor Network. 

##### *Trainer's Note*
Here, you might want to use [*this visualization*](https://www.eff.org/pages/tor-and-https)from [Electronic Frontier Foundation](https://www.eff.org/) on Tor and HTTPS traffic.
<br><br>

#### Step 5. What the Tor Browser Bundle *Can* and *Cannot* Do
In order to take advantage of Tor's **anonymity and circumvention** properties, you must launch the Tor Browser Bundle and *use the browser client* that comes packaged with it - this is special version of Firefox that is specifically configured to relay traffic via the Tor Network. 
- Other installed browsers, such as Google Chrome, *regular* Firefox, or Internet Explorer, will **not** automatically use the Tor network.
- Explain that **unlike with a VPN**, non-browser Internet traffic such as that from email clients like Thunderbird and Outlook, or instant messaging programs like Pidgin and Adium, will **not** benefit from Tor's anonymity or circumvention properties.
- When using Tor Browser, you might want to visit [check.torproject.org](https://check.torproject.org) and verify that Tor is indeed functioning as you might expect it to.

##### *Trainer's Note*
As with all security software, it is important that you use the [*latest version*](https://www.torproject.org/download/download-easy.html.en) of the Tor Browser Bundle. When Tor Browser opens, the page it displays will tell you if a newer version is available; however, it will not update itself automatically. Any updates will will have to be done manually by the user - see the [Safer Software Updating](/levelup/curriculum/malware-protection/safer-software-updating/) module here on LevelUp for supporting training material on this topic.
