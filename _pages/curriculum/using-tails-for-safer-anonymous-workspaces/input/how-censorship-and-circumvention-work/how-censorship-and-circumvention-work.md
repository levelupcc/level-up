---
layout: content-page
title: How Censorship and Circumvention Work
date: 03/00/2014
author: "Chris Walker, Lindsay Beck, Carol"

summary: "Many tools and strategies to circumvent Internet restrictions are in existence today. However, some tools offer more security features than others, and may be better for your unique needs for security than others. Thus, it’s important to know the difference between the most common types of circumvention technologies.
"

duration: 30-60 minutes
platforms: Linux, Mac OS, Windows

permalink: /curriculum/using-tails-for-safer-anonymous-workspaces/input/how-censorship-and-circumvention-work/
---
## Materials to Prepare ##

- Flipchart or whiteboard with markers (flipchart preferable)
- Projector for any videos you choose to show

## Input Session ##

Explain that you will begin by describing a typical Internet transaction or, if you've already offered a general session on how the internet works using the **We Are The Internet [LINK] activity**, then a brief review should suffice.

After that, you will address how requests for certain content can be blocked. Finally, you will explain how to bypass Internet censorship using proxies and other tools.

### How the Internet is *Supposed* to Work: ###
Explain that you will begin by describing a typical Internet transaction. We suggest using the whiteboard to draw out the process by which a browser requests a webpage; however, if you prefer, you can show a favorite video, discuss a pre-made diagram, etc. Regardless, it is not uncommon for participants to have questions about this introductory material.

The example below starts with a computer on a local area network (LAN), but applies equally well to any Internet-connected device. If your training is focused on mobiles, you should probably use a smartphone in your example - you can either explain that the device is connecting through WiFi, or modify a few of the terms below to account for the differences between mobile data services (3G, Edge, GPRS, etc.) and traditional ISP connections.

#### What's Happening on your Device  ####
In this scenario, you are requesting a webpage with your browser. You click on a link and wait for the page to load. Meanwhile, your request is "routed" to the webserver that "hosts" the page you've requested. The server then sends you the content of that webpage, and your browser displays it for you.

#### Internet Protocol (IP) Addresses  ####
Each Internet-connected device has a public IP address, assigned by its ISP, that it uses to send and receive data. This includes personal computers, Internet-connected smartphones, printers, game consoles, webpages and online services such as email providers and social networking sites.

- The ISPs that most *people* use hand out new public IP addresses from time to time (but they also maintain records of who had which address at any given moment).

- The ISPs that most *servers *use, on the other hand, assign public IP addresses for longer periods, which makes them easier to find.

That said, you will rarely request content using a server's IP address directly. Instead, your Web browser will typically ask a domain name service (DNS) server to look up the domain name of the URL in the link you clicked (say, level-up.cc) and translate it into a public IP address (say, 88.80.189.190). Your browser will then request the specific content you want (say, "leading-training/training-curriculum/input/circumvention") from the server at that public IP address.

#### Local Area Networks & Local IP Addresses  ####
Most of the devices you will use directly, such as laptops and smartphones, have *local* IP addresses that are unreachable from the public Internet. Devices on the same Local Area Network (LAN) frequently share the same public IP address.



- The *router* (sometimes called a gateway or an access point) in your home (or office, school, internet cafe, etc.) hands out local IP addresses, sends your devices' requests off to the Internet, and then manages the process of directing each response to the appropriate device.

- Your local IP addresses is a little bit like your name, as it appears on the first line of an envelope that someone has mailed to you. It is the rest of the address that allows the postal service to deliver your envelope to the right house. (After all, your delivery person woudn't know what to do with a letter addressed simply to "Alice.")

Assuming you share a home with other people, however, your name becomes important once the envelope arrives at your door.

#### Your Internet Traffic  ####
Depending on where you live and what type of Internet connection you have, both your request and the corresponding response will pass through a number of different computers along their respective "routes."



- Internet traffic makes its way from one IP address to another as a series of "packets," which are small units of data that travel according to a physical path determined by the various routers they encounter along the way.

Different packets may travel along different routes even if they are part of the same request, response or data submission (such as a when you submit a Web search or an email message).

#### Routing ####
These routes will vary depending on where you live and where the webpage you're requesting is located, among other factors. Your request will typically pass through your local *router*, then on to your *ISP*. After that, things get a bit complicated.



- Your local ISP can talk to other ISPs, any one of which might provide Internet connectivity for the server hosting the webpage at the IP address you have requested.

- Most likely, your request will pass through several ISP networks before reaching its destination. And, if that server is located outside of your country, then your request might even pass through an undersea cable to a large ISP in another country. It might then be routed through a number of smaller ISPs before arriving at the IP address you requested.

- Assuming all goes according to plan, the server at that IP address will then answer your request by sending the specified webpage back to your public IP address (by way of one or more equally complex paths).

When it arrives at your local router, it will be forwarded to your local IP address, then  (finally) displayed in your Web browser.
<br><br>


### When the Internet is *Censored*: ###

Your access to information online may be blocked for a variety of reasons. Parents and school administrators frequently try to control the material to which children are exposed; companies have regulations about acceptable use of the Internet in the workplace; countries pass laws and establish policies that not only criminalize the publication of certain content within their jurisdiction, but that prohibit access to similar content published elsewhere.

***Increasingly, technical means are being used to enforce these controls.***

Your employer might block requests to gaming sites and social media platforms from within the corporate firewall, and your government might require that your ISP return a "Page not Found Error" in place of an opposition website or a podcast produced by independent media. Because governments, ISPs, and administrators of public and private access points can monitor at least some aspects of your online activity, they can limit access to content they find objectionable.

**Blocking** and **Filtering** are the two terms most frequently used to describe the different mechanisms through which internet censorship takes place.

- Blocking refers to the banning or blacklisting of certain webpages, types of content, access channels, or protocols;

- Filtering refers to the process of analyzing traffic data in order to determine whether or not it is attempting to access anything that has been banned or blacklisted.


#### *Where* Internet Censorship Happens ####

Internet filtering usually takes place at one of five locations:


1. On the device you are using;
- At the access point through which you are connecting to the Internet;
- Somewhere within your ISP's network;
- At the point where your Internet traffic leaves the country;
- On the server from which you are requesting content.

A national censorship regime might have influence over any of these, though we typically focus on (3) and (4) when discussing **state-level** filtering.

#### What's Happening on Your Device ####
Many comptuers in schools, libraries and Internet cafes (and even some in homes and businesses) contain software that directly prohibits requests for certain content. This sort of filtering is often associated with shared, publicly accessible devices or personal devices that are administered by someone in a position of authority (such as a parent or a corporate IT department).

#### At Public or Private Internet Access Points ####
There could be locally installed internet filtering software at your workplace, library, Internet cafe, etc. Technically, such software could be installed on any of the routers between you and the server you are trying to access, but we typically associate access point filtering with businesses, shared computers and publicly accessible (freely available or for-fee) Intenet connections.

#### At ISP and Country Level ####
Your ISP, which naturally has the ability to see any direct requests you make online, can implement filtering either by preventing your request from reaching its destination, or (less frequently) by preventing the response from reaching you.

- Some countries take a more hands-on approach, requiring that certain types of Internet traffic be routed through servers that are under the direct control of a particular government agency.

- This technique is sometimes applied specifically to requests for international content, as governments often take a more direct approach to the censorship of material that is hosted on servers located within their borders.

Many national filtering policies are implemented at the ISP level - in fact, many ISPs are government-owned and operated.

#### On the Server You're Attempting to Access ####
Online services are sometimes "defaced," in order to prevent them from responding to requests for content, regardless of where those requests might be coming from.

- The most frequently used form of such 'defacing' is when a site is overloaded by denial of service (DoS) attacks, that weigh down a site's servers with 'fake' requests to the point that it cannot serve content to 'real' user requests.

- Such attacks can be carried out by anyone with access to the right software and a large enough network of computers (or who can afford to "rent" the necessary resources).

Finally, while we don't usually think of it as a "blocking" or "filtering," a service can prevent you from accessing its own content based on any number of things: your IP address, the country from which your request was sent, the preferred language specified by your browser, etc.


### *How* Internet Censorship Happens: ###

Besides using legal or socio-cultural means to curtail access to particular types of information online, the following are common technical methods used to prevent access to online content.

#### Internet Protocol (IP) Address Blocking ####
**Access to a particular IP address is denied.** When information is sent over the Internet, it is broken up into a number of packets. In addition to the actual data being sent, each packet contains information about how to route the packet itself.



- This information contains both the IP address from which the packet was sent and that of its destination. Filtering software installed along the route taken by this packet can monitor for blocked IP addresses.

- If it recognizes a blocked IP address, it can replace the original packets with a request for an "access denied" page (or it can simply "drop" them).

If the target is on a "shared hosting" server (one of the more affordable ways to put up a website), then **all** sites on that server will be blocked. Similarly, IP blocking **cannot** be used to filter a particular video or Facebook profile.

#### Domain Name System (DNS) Filtering  ####
**If a DNS server is configured to filter content, it consults a "blacklist" of blocked domain names.** When you enter a URL in a Web browser, the first thing the Web browser does is ask a DNS server to look up the domain name referenced in the URL and supply the corresponding IP address.  


- When a browser requests the IP address for one of these 'blacklisted' domain names, the DNS server can give an answer that actually points to an "access denied" page, or it can give no answer at all.

- Becuase DNS traffic is rarely sent in a secure manner, even using an international DNS server does not prevent this form of filtering, as your requests (and the corresponding responses) can be modified in transit.

DNS filtering has limitations similar to those of IP filtering, and also tends toward unintentional *over-blocking*.

#### Uniform Resource Locator (URL) Filtering ####
**When requesting content over HTTP, versus encrypted HTTPS, the entire URL can be scanned for banned keywords.** Regardless of the actual domain name or IP address you are trying to reach, filtering software can prevent access based on the presence of these keywords.

- This technique may be used to block access to an entire domain, to one particular website on a "shared hosting" server, or to a specific piece of content such as a video or Twitter profile.

- Keyword filtering can be applied to more than just URLs. With the right infrastructure, an ISP or governent can inspect all unencrypted packets and block those containing certain keywords.

This process is often called "deep packet inspection" and refers to the process of monitoring traffic and censoring requests for banned content by performing a "deep inspection" of the content of individual data packets sent as part of a request.

#### Port Blocking  ####
**Servers listen on different numbered "ports" in order to provide different services.** Ports are infrastructure within the larger communication framework of the internet, that serve as channels for different protocols or traffic types - each is referred to by a number.

- One port (typically 465) might allow users to send emails securely, and another to receive them (993).

- Another port is commonly used to communicate with HTTP websites (80), and yet another for encrypted Web traffic (443), etc.

These ports are generally consistent, so blacklisting a given port number will block a particular type of traffic, regardless of the actual server to which a request is being sent.

#### Portal Censorship  ####
Major international Web platforms that serve content to people all over the world—such as Google's search engine, YouTube, Twitter and Facebook—have at times complied with requests from governments to remove certain content from their portals.

This renders content invisible to people who do not know where else to find it. Unfortunately, censorship circumvention tools are generally unable to get around this sort of blocking.

#### Internet Shutdown ####
In extreme cases, such as during a popular uprising, some governments have been known to disable their citizens' access to the Internet entirely. Once again, there is little that traditional circumvention solutions can do to address this form of censorship.

Fortunately, such blockades tend to be extremely unpopular, and are rarely left in place for long.
<br><br>


### Bypassing Censorship using 'Proxies' ###

To get around technical website filters, most circumvention tools simply ask a server in some other country to fetch blocked websites for them. This server is known as a **proxy**.

As long as the censorship software you are trying to bypass has not added your proxy to its blacklist, in addition to the blocked content itself, this technique works quite well.

***That said, there are a few other considerations to keep in mind when choosing circumvention software.***

#### Choosing a Proxy ####
Before choosing a proxy, it is important make sure that it meets the following critieria:

1. **You must trust the provider.** While the ISP may not be able to see the full scope of your internet activity when you use a proxy, *whoever is running the proxy server can.*

	Because you are relying on this server to relay your requests to the desired website (and deliver its responses back to you), it is important that you trust the tool provider to not submit your Internet activity to a third party. *The proxy provider’s Terms of Service or Privacy Policy might be a good place to start.*

2. **It should provide an encrypted connection for your traffic.** When you use a tool to proxy your Internet traffic, it is important that your connection to the proxy server be encrypted. In addition, you must ensure that the connection *between your proxy server and the destination site is also encrypted.*

	This assumes that you are requesting content from a secure server, such as an HTTPS website; not all website-based proxies provide this level of security.

3. **It should provide an encrypted connection for other sensitive data.** Furthermore, even a website-based proxy that does encrypt both ends of the proxied connection may itself be able to access your sensitive content (including your passwords).

	This generally presents an unacceptable risk, so you are almost certainly better off using a technology that is known to provide a single, encrypted tunnel all the way from your device, through one or more proxies, to the content you are trying to access. Examples include VPNs and Tor, as discussed below.

#### Types of Proxies ####

1. **Virtual Private Networks (VPNs)**
<br>
VPN software, which you may have to install on your PC or mobile device, provides a secure tunnel between you and a VPN server on the Internet. All of your Internet traffic will be sent through that tunnel before being routed to its destination.

	As long as your VPN server is located somewhere that is not subject to filtering, this will allow you to access blocked content. Trust is still important, as your VPN provider could easily maintain a list of the websites you visit, but at least they will not be able to access the traffic send to (or receive from) encrypted services like HTTPS websites.

	***Important Points to Highlight for VPNs:***

	- As with all proxies, **your connection is not fully secure unless you are visiting a secure service**, such as an HTTPS-encrypted website.

	- **Your connection is not anonymous.** Your VPN service can see and record what you are requesting.
<br><br>



2. **Anonymizing Proxies**
<br>
Anonymity networks typically "bounce" your Internet traffic between various secure proxies in order to disguise where you are coming from and what you are trying to access.

	**Tor is the most well tested and widely used anonymizing proxy network.** By tunneling your traffic through a randomly selected series of encrypted relays, Tor offers a secure, reliable, publicly accessible means of circumvention that saves you from having to worry quite so much about the extent to which you trust your ISP, the organization that runs your proxy servers, or the the filtered websites themselves.

	***Important Points to Highlight for Anonymizing Proxies include:***

	- You must still ensure that you have an encrypted, HTTPS connection to a secure website before exchanging sensitive information, *even if you are using Tor.*

	- Unfortunately, in countries where Internet speeds are slow to begin with, some users find that Tor has a *significant impact on the performance of complex websites* and other Internet services.
<br><br>



## Additional Resources ##

-  [Electronic Frontier Foundation](http://www.eff.org)'s resource on using [Tor vs. HTTPS](https://www.eff.org/pages/tor-and-https)
-  [MIT](http://www.mit.edu)’s video resource on [How Tor Works](http://video.mit.edu/watch/how-tor-works-502/)
- [VPN Tutorial](https://www.youtube.com/watch?v=B41vCC4KLkY&feature=youtu.be) from [Google Privacy](https://privacy.google.com/)
