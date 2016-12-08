---
layout: content-page
title: "Activity & Discussion: The Encrypted (HTTPS) vs. Unencrypted (HTTP) Internet"
author: Mallory Knodel
summary: This demonstration is intended to illustrate for participants that some information they exchange, over a network connection to a website or other server, is exposed along the way if they use unprotected connections.
permalink: /curriculum/safer-browsing/https-ssl/activity-discussion/encrypted-vs-unencrypted-internet/
breadcrumb: The Encrypted (HTTPS) vs. Unencrypted (HTTP) Internet
date: 2015-03
adids: Activity and Discussion
parent: HTTPS and SSL
duration: 20-30 minutes
---
# Materials to Prepare
- [Wireshark](https://www.wireshark.org/), a free application, should be downloaded from the following website and installed on the trainer’s PC.
- If you have not used Wireshark previously, you will want to read the [User Guide](https://www.wireshark.org/docs/wsug_html_chunked/) and the [list of filters](https://wiki.wireshark.org/CaptureFilters) available if you wish simplify the information displayed in the demonstration.
- An LCD projector or other display that the participants can see.
<br><br>

# Running the Activity
The purpose of this Activity is to show participants that unencrypted HTTP traffic can be monitored and  captured. Some participants may already understand that their Internet connections are not always protected, but seeing this technique and software in action can provide an ah-ha moment.

This demonstration will show traffic between your own PC and a website you choose. We strongly recommend avoiding the temptation to use Wireshark on the router used by participants. Capturing their traffic might sound like an effective illustration, but it also can erode the trust you have built up.

#### *The goal, as always, is to illuminate and not to frighten!*

## Step 1: Getting Started
Open Wireshark, and explain that the application is one of many that can be used to monitor network traffic – the bits we send and receive when we connect to the Internet. Move or resize the Wireshark window so that it is visible but does not take up all of the screen.
- Open a browser and move or resize the window so that Wireshark is still visible alongside it.
- Navigate to an insecure website – any site that begins with “HTTP” in the address, rather than “HTTPS”. For instance: Microsoft.com. You start to see information being logged in the Wireshark window.
- Once on [Microsoft.com](http://www.microsoft.com), confirm that the connection is unprotected (HTTP) and type a search term in the Search field at the top of the page -- for instance, “clear text” – and press Enter.

Returning to Wireshark, use the HTTP filter to locate one of the words you typed. For instance, if you typed the words, “clear text”, you can use the HTTP filter to search for the word “clear”. (In the Filter field, type: http contains "clear"). This will immediately highlight packets that contained your search query.
- Scroll through the search results and point out where your text is visible. Explain to participants that this strange language you are showing them in the Wireshark display, full of symbols and unusual characters, is one of the ways that your PC communicates with the Internet and, when we use an unprotected connection, the information we send and receive – including text, can be visible on the network among the characters. Explain that other items may be visible, such as photographs, as well.
- Explain that many websites have a more secure way for users to connect called HTTPS.  Returning to your browser, highlight the address field and point out that the address currently begins with “HTTP”. Then type an “s” at the end. Reload the page and confirm that you are now seeing the HTTPS version of the site.

Repeat the steps above, noting that Wireshark is still able to see that you are connected to Microsoft.com. When you search for the words you’ve typed this time, however, Wireshark should no longer return a result.
<br><br>

## Leading the Discussion
Learn the participants’ reactions to the visibility of HTTP traffic. Reactions commonly range from shock ("I didn't know how easy it was to see everything") to unimpressed ("Yeah, but what's the big deal?"). Some additional observations to keep the discussion going:
- Because the information can be read, captured and indexed, it’s accessible to surveillance.
- XKeyscore, for example, is a NSA system that is believed to allow agents to retroactively search through massive amounts of data, cross referencing an IP address (you) with traffic (what you're reading). Read more about XKeyscore [here](https://en.wikipedia.org/wiki/XKeyscore).

While you might not think your browsing habits will get you into trouble, there's an awful lot of information contained in web pages and some of it you can't even see. So while you are actually browsing cat videos, the pages you visit or the tweets in your feed might link you to content that will get you into trouble.
- Your browsing habits can tell strangers a lot about you, making social engineering easier. Do you really want your neighbor, whose open Wi-Fi network you share, to know what kind of cat videos you prefer?
- See [Safer Browsing - Anonymity & Circumvention](/curriculum/anonymity-circumvention) if you choose to pull more discussion material but aren't planning to cover Anonymity & Circumvention for Input or elsewhere during the training.

### Optional - Further Discussion
If time allows, you may want to ask some basic questions to get a sense of participants’ knowledge. Answers to these questions will be covered in the Input:
- What is HTTP?
- What does the S in HTTPS stand for?
- What is the difference between authentication and confidentiality?
- Does HTTPS mean you can trust the person on the “other side”? Why or why not? 
- What is a SSL certificate?
- When should you always use the HTTPS version of a site?
- Are you safe if you rely on sites to enforce HTTPS?
<br><br>
