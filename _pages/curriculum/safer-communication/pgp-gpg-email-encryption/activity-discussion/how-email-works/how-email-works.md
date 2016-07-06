---
layout: content-page
title: "Activity & Discussion: How Does Email Work?"
author: DJ, Ali Ravi, Samir Nassar, Dan O'Clunaigh, Carol Waters
summary: "Using props and the participants as nodes in the Internet, this activity walks through the delivery of email, both with and without encryption, while describing the nuances of packet data as it passes through a network. This can also serve as an activity to help illustrate the concepts of a country-level ISP, Deep Packet Inspection (DPI), gateways, email content filtering, non web-based emails (enterprise servers), and encryption (PGP/GPG)."
permalink: /curriculum/safer-communication/pgp-gpg-email-encryption/activity-discussion/how-email-works/
breadcrumb: How Does Email Work?
date: 2013-03
adids: Activity and Discussion
parent: PGP/GPG Email Encryption
duration: 30-60 minutes
---
# Materials to Prepare
- Large post-its or index cards titled with roles in the activity (listed below)
- Markers or pens
- Blank postcards or index cards for messages
- Envelopes (two sizes)
- Pre-drafted PGP-encrypted email drafts with "attachment," leaving To/From blank for participants to fill in; entitle the attachment with a sensitive descriptive title, like "tax returns" or something similar.
- A lockbox or sealable container more robust than an envelope to illustrate PGP.

## Optional
This activity can also be adjusted to illustrate routing in a more in-depth way for other kinds of data being sent over the Internet, in order to highlight the roles of: of a country-level ISP, Deep Packet Inspection (DPI), gateways, email content filtering, non web-based emails (enterprise servers), and encryption (PGP/GPG).
<br><br>

# Running the Activity

## Step 1. Setting Up a Scenario
Either before the training or before this particular session, choose email exchange scenarios for this activity that will provide the best illustration per your participants and their context, including local popular mail services. Be sure to have large index cards or post-its prepared beforehand with the different roles required for your given scenario.

##### Examples of roles include:
- Email Sender
- Home router / Wifi access point
- Local ISP
- National ISP
- 2-3 mail servers on different email providers, to illustrate mail being routed (Gmail, Yahoo!, Hotmail, etc.)
- National ISP
- Local ISP
- Home router / Wifi access point
- Email Recipient

For example, one routing could be sending email from mail server to mail server within one country, then across a border, with mail services that provide SSL throughout the session. However, the steps included above can be used as-is to demonstrate a basic exchange and routing of email data that will adequately illustrate the basic steps involved.
<br><br>

## Step 2. Arranging the Demonstration
Set up the participants in a "U" shape - this works best for up to 10 participants, or sub-groups of that size. Identify two participants at the ends of the U to be the correspondents (i.e. one as the **email "Sender"** and the other as the **email "Recipient"**):
- Along the "U", assign roles to the remaining participants, handing each a card or post-it with the role written visibly on it.
- Distribute the cards/post-its in such a way that the mail servers will be at the "bottom" of the U (i.e. two participants in the middle of the "line" who are standing next to each other)
- Ensure that the roles are logically assigned according to their proximity and sequence to/from the sender and recipient.

Provide a brief explanation of what each role does along the delivery route. Remind participants that routing on the Internet can be more complex, but the concepts are the same. You may choose to add roles along the route gradually over several delivery scenarios, to build up comprehension and illustrate different elements with each scenario.

##### *Optional* 
Depending on your participant group, the location of your event, and how sensitive a discussion of this might or might not be, it could be useful to simulate an email exchange in a location where internet restrictions and possible surveillance are in place. You may choose to start with this, or work up with it to illustrate how differences between countries can affect webmail.
<br><br>

## Step 3. Demonstrating Webmail over HTTP
You can start this demonstration by asking the group "Which is safer to use, regular webmail or HTTPS-enabled webmail?” and then leaving the question open to come back to after the next two parts of the activity. 

To begin the demonstration itself, announce that the email Sender and Recipient will be emailing to each other from one webmail client to another webmail client, *neither of them offering HTTPS*.

The email **Sender** will demonstrate their message using a postcard. Make sure they write:
- **To:** (recipient)
- **From:** (sender)
- **Time Sent** (00:00)
- **Message content** (can be anything)
- **Address** of the sender; this would normally be an IP address, but to save time, make up an address that would denote similar information (a made-up or real street, city, and country)

Ask the **Sender** to pass this message onward to the next person on the U-shape web, and along the way, ask the participants to note any/all information they can gather from the message as it passes from person to person. Help explain what the various points along the delivery route do and what they can see as needed:

- When the email reaches the other webmail server, make a point about this path being the explicit result of sending the email, as opposed to the message automatically arriving at the receiver.
- Then, ask the email **Recipient** to browse to their webmail client and then **login to their account**, thereby initiating any new emails they might have received to be sent to their webmail client, and thus, their *browser*.
- Again, ask the other half of the "U" to note what information they can see as the email passes through. 

##### When the message reaches the destination, ask for a show of hands of everyone who was privy to the following information:
- Message content
- Sender email address/identity
- Recipient email address/identity
- Sender "Address"

Count the hands and make a public announcement of the number who could read the email content (i.e., every person along the way).
<br><br>

## Step 4. HTTP to HTTPS Combination
Repeat the same above process, but this time with one of the recipients having a Gmail account, **which has HTTPS enabled session-wide and by default**, and the other keeping the same, non-HTTPS webmail account. Have the **Sender** send from the non-HTTPS account this time, and the **Recipient** logging into and receiving email via their Gmail account.

- Stop the process momentarily when the non-HTTPS webmail server delivers the **Sender's** message to the Gmail server. 
- Introduce the HTTPS concept as an envelope.
- The person playing the role of the Gmail server should then put the message into the envelope, then write the sender/receiver info on the envelope and pass it onward.

##### When the envelope reaches the recipient, repeat the show of hands for who had access to:
- Sender/Receiver (should be same as above)
- Content (the Gmail/HTTPS side should not have been able to see any of this)

##### Now return to the question: *"Which is safer to use, regular webmail or HTTPS-enabled webmail?”* What do participants think and why?
<br><br>

## Step 5. HTTPS to HTTPS (or HTTPS Only)
In the previous scenario, seeing that the HTTPS side of the room (sent to Gmail from Yahoo!) didn't have access to the content along the way, ask participants: *what would they recommend doing so the other half will also be precluded from seeing the content?*

##### You are seeking the suggested answers:
- Getting the Yahoo! mail user to switch over to using Gmail
- Turn on HTTPS on for the Yahoo! user's mail account

Repeat the same process as in **Step 4**; however, switch the non-HTTPS enabled user into a Gmail user so that both **Sender** and **Recipient** are using webmail clients with by-default, session-wide HTTPS enabled.

Take the same poll of who can see the content and note the fact that the mail server(s) can still have access to the content. You can have the "mail servers" open up and read the email when delivered to illustrate this. Use this to segue into the advantage of PGP/GPG-encryption:
- HTTPS provides one kind of email encryption, with the vulnerability gap lying in the fact that all content is still visible to Gmail/Google; 
- PGP/GPG encryption permits a similarly encrypted exchange, however one that is *encrypted from end-to-end*.
<br><br>

## Step 6. Sending PGP-Encrypted Email
Now tell the participants that the **Sender** and **Recipient** have learned how to send **PGP-encrypted** email. Define this as "end-to-end encryption" and have a sealable container at the ready to illustrate this concept.

Send a PGP-encrypted email between users who use **HTTP** (not **HTTPS**) webmail accounts in order to illustrate what PGP-encrypted emails look like if accessed between the sender and recipient:
- Provide them with pre-written "PGP-encrypted" messages (to save time), having them fill in the To/From fields. 
- Draft each message to include an attachment with a title that describes a sensitive attachment, like "company addresses" or "tax return," followed by the file type extension and ".pgp.
- Make it clear that the headers (to/from/IP address of sender) **are still in plaintext**.

As before, have each participant examine the email as it is passed around to be "delivered" to the recipient. Ask them to describe what they observed in the email. Highlight the takeaway that whereas the body of the email is encrypted, titles of attachments are not, and the headers ("metadata") are also not, and can tell a certain amount of information.
<br><br>

# Leading the Discussion
Prompt responses from participants to the following questions, supplying takeaways and lessons learned as needed from the above activity portion:
- What did they think of the activity? Did they learn anything they didn't know before?
- How is logging in with SSL different from the entire email session being encrypted?
- Let's say you use the Outlook desktop email client at work - might you need to take an extra step to ensure that your mail is HTTPS protected?
- What did they think of the end-to-end encryption of PGP-encrypted email? 
- What does it keep secret? What can be observed? 
- What does using PGP-encrypted email and SSL do in combination?
<br><br>

