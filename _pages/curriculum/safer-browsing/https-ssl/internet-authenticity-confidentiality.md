---
layout: content-page
title: How the Internet Handles Authenticity and Confidentiality
author: Mallory Knodel
summary: In this Input session, participants are introduced to HTTPS and SSL connections and how they maintain confidentiality between a user and a server over a network connection.
permalink: /curriculum/safer-browsing/https-ssl/input/internet-authenticity-confidentiality
breadcrumb: How the Internet Handles Authenticity and Confidentiality
date: 2015-04
adids: Input
parent: HTTPS and SSL
duration: 30-45 minutes
---

## Materials to Prepare ##


- Whiteboard, chart paper or slides to capture participant responses.
- (Optional) Salient points presented on paper or slides.
- (Optional) A separate hand-out that includes the glossary of words included below in “Defining terms”.

## Input Session 

The purpose of this session is emphasize the importance of HTTPS/SSL because of its ability to reliably authenticate and maintain confidentiality when a user communicates with a website.

### Defining Terms

#### HTTP

HTTP is the HyperText Transfer Protocol. It is the way that a web server communicates information to your browser.

#### HTTPS

HTTPS is the Secure HyperText Transfer Protocol. It uses a strong encryption system called SSL (Secure Sockets Layer) to create a special encoded connection between your computer and the web server that no one can see inside. HTTPS preserves confidentiality.

#### Man-in-the-Middle attack (MITM)

A Man-in-the-middle attack is where a malicious individual intercepts your communications and pretends to be your intended destination. This individual will see all your traffic before handing it off to your intended target. MITM spoofs an authentic website in order to violate your confidentiality.

#### SSL Certificate

An SSL certificate is a special type of file that a computer like a web server can use to identify itself uniquely. Certificates can be issued by “Certificate Authorities” which are a strong proof that a web server is in fact who it says it is. “Self-signed certificate” are those certificates which are verified by the entity who owns the web address. SSL certificates establish authenticity.

#### Certificate Error

A certificate error is when your browser detects some sort of problem in the certificate identifying a web site; this can indicate that the server is not who it says it is. Certificate errors indicate a website is inauthentic.

#### "SSL Pinning"

"SSL pinning" is a term for certificates your browser trusts in advance without needing to ask a Certificate Authority for its validity.

### What happens when a connection is not confidential?

- Someone can capture, search and read all of the text and images on all of webpages you *get* from websites.
- Someone can capture, search and read all of the text and images that you upload and *send* to websites.

### What happens when the website you're visiting is not authenticated?

 - A malicious person could intercept your encrypted web traffic by masquerading as a trusted server.

### So what's the worst that could happen?

- Someone could passively or actively collect, read, publish or sell information contained in or attached to all of your sent and received emails if you're connecting with HTTP.
- Someone could passively or actively collect your passwords and account information sent via HTTP, use them now or later to “pwn” your account, download your personal information (or that of your contacts), attempt to pwn your other accounts, sell your account information and data online.
- Someone could masquerade as HTTPS-protected website and trick you into sharing sensitive information.

### Some real-world scenarios:

1. Using a public access point or an Internet café, you log into a web service that is not protected by HTTPS. Someone on the same network is running Wireshark and sees your username and password as they travel up to the website. The hacker takes the opportunity to log in as you, changing your password and pwn-ing your account.
2. Your email service provider encrypts your login using SSL (HTTPS), but removes that protection after you have logged in. Government authorities have tapped into the connection at your local service provider or elsewhere, capturing all the traffic and can read the messages you write or receive. The NSA’s XKeyscore system is one example of massive network surveillance that scoops up Internet traffic for analysis.
3. You visit your bank's website using https://. As the page loads, you see a certificate error. This is unusual, but you decide to click through anyway and arrive on a page that appears to be authentic. You enter your login information for your account. Later, however, you find out that a malicious organization was running a “man in the middle attack” to capture login credentials of users before sending them to the real bank site. With your information, they can now login to steal your money or they can sell your login details to criminals who will.
<br><br>

## Resources
- Video: [“SSL explained”](https://www.youtube.com/watch?v=a72fHRr6MRU) (by Google)
- Browser add-on: [HTTPS Everywhere](https://www.eff.org/https-everywhere) (by EFF.org)
- Slides: [The SSL Observatory](https://www.eff.org/observatory) (by EFF.org)
- Article: [All About HTTPS](https://en.wikipedia.org/wiki/HTTPS) (Wikipedia)
- Article: [Vulnerabilities in the Certificate Authority System](https://www.eff.org/deeplinks/2011/12/2011-review-ever-clearer-vulnerabilities-certificate-authority-system)

