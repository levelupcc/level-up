---
layout: content-page
title: "Input: Why Email Encryption Matters"
author:
summary:
permalink: /curriculum/safer-communication/pgp-gpg-email-encryption/input/why-email-encryption-matters/
breadcrumb: "Why Email encryption Matters"
date: 2013-03
adids: Input
parent: "PGP/GPG Email Encryption"
duration: 30-45 minutes
---
# Materials to Prepare
- Flipchart or whiteboard with markers
- Projector and screen
- Have examples of *ciphertext* and *plaintext* on hand (as part of your core input, or in case a participant asks for an example).
- Have a copy of an encrypted email, with an attachment, available to show participants what is still visible in the header, as well as the title of the encrypted attachment.
- Have a copy of a public and private key available (for an example of published private keys you can find the public key to, [see this](http://r6.ca/privatekeys.html)).
<br><br>

# Input Session
PGP is one of the more difficult digital safety topics to train on effectively, especially if faced with time constraints. How you ultimately decide to sequence this section is up to you, but we've outlined the following points as elements of understanding the basics of PGP.

## Step 1: Introduction Options

### A) Familiar Case Study
You may choose to use the story of Glen Greenwald being contacted by Edward Snowden, and then asked to use PGP in their subsequent communications, as an example of:
- How PGP can be daunting;
- How it was crucial for communications;
- How effective it is if used correctly.

This may or may not be a "case study" that is very persuasive for your audience and illustrates some of the common issues with PGP. If so, ask participants what they know about this aspect of the story, and then add more context to segue into further information about PGP.

### B) Take the Temperature
You can also start by asking participants general knowledge and/or awareness questions, such as:
- What they already know about PGP/GPG and encryption in general?
- If they want to be sure that they keep a message absolutely secret, what do they do?
- Have you ever worried that your emails and chats were being intercepted?
- What steps have you taken to learn about protecting your communications?

If you conducted the [Romeo and Juliet - An Encrypted Love Story](/curriculum/safer-communication/pgp-gpg-email-encryption/activity-discussion/romeo-and-juliet/) activity, you can reiterate various aspects from the story and pair them with what you're about to cover, including private key, public key ("lockbox"), keyserver ("lockbox-tree"), etc.

### C) Defining Loaded Terms
A third option is asking participants what, in their opinion, makes something "secure." Document their responses in order to illustrate how their answers illustrate concepts associated with making something indeed "secure" or "more secure":
- Define **Confidentiality**, **Integrity, **Availability**, and **Authenticity**, using their answers as illustrations of each.
- If you conducted the [How Does Email Work?]() activity, ask the group as a means of review who could read their emails, and under which circumstances they were able to do so?
- Referring once more to the [How Does Email Work?](/curriculum/safer-communication/pgp-gpg-email-encryption/activity-discussion/how-email-works/) activity, could any contents of the email, or the identity of the sender, have been spoofed or tampered with (while using HTTP or HTTPS)?

Keep the answers to these questions documented on flipchart paper. Re-visit them after you've gone over PGP, in order to highlight how "regular email" cannot reliably provide **Confidentiality, Integrity, or Authenticity** because of who can access it, whether or not you use SSL. Compare this to PGP, when used correctly by both parties, and illustrate how it can provide **Confidentiality, Integrity, and Authenticity.**
<br><br>

## Step 2: Main Points to Cover

### HTTP vs HTTPS
Define HTTPS and SSL if you haven't done so already in the training or during the previous activity - you may consider covering the basics of HTTPS & SSL with the [We Are The Internet](/curriculum/safer-browsing/https-ssl/activity-discussion/we-are-the-internet/) activity if you have not done so already:
- Mention how some free webmail providers provide SSL/HTTPS throughout a browser-based session (from login through logout, such as Gmail), but others don't.
- Those that don't leave our identities, passwords, and other potentially sensitive information vulnerable to capture.
- This holds true even if the login process is initially HTTPS, but then then turns into HTTP once we've logged in.

In addition, everything we do once we login can be "seen" between us and the webmail server, including emails we read and write, contact information, and more.
- Whether or not a free webmail service uses HTTPS throughout a session, that webmail service can read all of your emails and account information, and usually do so in order to conduct market research or to serve you advertisements.
- Also know that that same webmail provider may give your communications and information to others, particularly the government of the country where it is located, if requested.

### State of Personal Communications Online
Emails, chat conversations and instant messages always go through someone we don’t know because of how the Internet works.
- Some people have this access by design in order to manage it, such as our ISP or mobile service provider.
- Others may have it due to high-level access, which can be through legal or "less legal" means, such as a publicly court-ordered supoena, or intelligence services.
- Others can access it due to weaknesses in the systems used, such as hackers.

### What SSL *Cannot* Do
Even a “secure connection” to an email service (for example, utilizing HTTPS with SSL) cannot protect the content of your email from the person or company who runs that email service.

### End-to-End Encryption
The most secure way to protect your communications is through **end-to-end encryption**:
- This means that a message or email is encrypted ***before*** it leaves your PC or mobile device, and can only be **decrypted** by an intended recipient who uses PGP correctly.
- If a recipient's private key is obtained by others and ***not revoked***, or you have not authenticated their public key properly and are sending to someone pretending to be them, this would ***not*** hold true.

But you can table these issues for now, to then highlight their importance later on.
<br><br>

## Step 3: So, What are PGP and GPG?

##### PGP stands for "Pretty Good Privacy" - also known by its free version name, *GnuPG* or *GPG*, which stands for "Gnu Privacy Guard".
This protocol is interchangably called PGP *or* GPG - the prime difference is that **PGP** was formally sold to [Symantec](https://www.symantec.com/), who now licenses its use as a paid platform, so most people use the free version called **GPG**.

We recommend not using **PGP** unless you completely trust Symantec, and anyone who Symantec may give your private key to - the use of GPG, as a free equivalent with the same functionality, is highly advisable.
<br><br>

### How Does PGP/GPG Work?
PGP/GPG is based on [Public Key Cryptography](https://en.wikipedia.org/wiki/Public-key_cryptography), which is also known as **Asymmetric Cryptography**.
- This means it requires *two* keys in order to work: one to *encrypt*, and another to *decrypt*.
- This is different from **Symmetric Crytography**, which requires both sender and receiver to use the **same key**.

Symmetric Cryptography is much more challenging and harder to secure, since both sender and receiver need to be able to share their common key to each other. This can be a special challenge if both sender and receiver cannot communicate securely with each other in the first place.

##### When a key is created, it has two parts: a *public* key and a *private* key:
- A **public key** is used to **encrypt** the plaintext (standard, legible, unencrypted content) of a message, or to verify that it was sent by the person who that key belongs to (such as "signing" an email sent as plaintext, or other types of data).
- A **private key** is used to decrypt an encrypted message back into plaintext so it can be read, and to create a digital signature to verify that they are the sender (this is especially useful if a passphrase is associated with a private key).

Part of the "magic" of Public Key Cryptography is that it allows users to publicly publish their public keys for others to use, to send them messages or other types of data, since anything encrypted with that public key can only be decrypted and read by the person who has that private key.
<br><br>

### Confidentiality with PGP/GPG
**Confidentiality** is similar to something being "secret." It means that only you and the sender have access to it; in the case of PGP, it means only you (the recipient) and the sender can read the **plaintext, unencrypted** version of an encrypted email. How do we know this?
- Assuming you've used PGP/GPG correctly, only the recipient could decrypt and read the email sent to them - that message was encrypted using their **public key**, and anything encrypted with a user's public key can be decrypted *only* using the **private key** assocoiated with it.
<br><br>

### Authenticity with PGP/GPG
**Authenticity** means that something is verified to be from or by whom it says it is from. In the case of PGP, this means that a message, document, or anything else signed or sent encrypted using PGP, has been sent by the person claiming to have sent it.
- Similar to confidentiality, authenticity only works if PGP is implented and used correctly; if you haven't authenticated that a key belongs to the person it claims to belong to, you do *not* have authenticity.
- This is why **keysigning**, the act of signing someone else's public key with your own PGP signature is important - it's a way of saying that you acknowledge the authenticity of their key, which can in turn be important for the *trust of other PGP/GPG users* in your shared network.
<br><br>

### Fingerprints and Authentication with PGP/GPG
Not confirming that the identity of the sender or receiver is authentic is another error that PGP cannot fully prevent on its own, which is why authenticating others' keys via the **fingerprints** of their keys is crucial.

Explain that the full **Key Fingerprint** is a unique identifying string that is generated with each new keypair, and consists of 10 sets of 4 alphanumeric characters each; the Key ID is a shorter version of this (containing 0x and then the last 8 characters of the full key ID).

#### For example, the Public Key for LevelUp's main email address has the following *Key Fingerprint*:
8EF3 5BB8 8738 1EEB 87D8 CA4C 207B FB95 91A6 38BE (10 sets of 4 characters)

#### The *Public Key ID* for LevelUp's main email address, therefore, is the following:
0x91A638BE (0x plus the last 8 characters of the full Key Fingerprint)

People's identities can be spoofed by creating a key for an email address that looks like (but is not the same as) the person its pretending to be, using their name or other identifying features. This is usually a hostile third party who has **a)** gotten a copy of that recipient's private key, or **b)** has spoofed the recipient's identity and fooled the sender who did not authenticate that recipient's private key correctly.
<br><br>

### A Brief History (Optional)
PGP was invented by **Phil Zimmerman** in 1991, so that he and others could securely access and send information over the internet using end-to-end encryption. This meant that even if it was intercepted, it could not be read without a users' **private key**. Until this point, robust end-to-end encryption was **proprietary and secret**, primarily used and controlled by large companies and governments in order to communicate and send information securely.

Since the 1970s, there had been struggles between governments, academia, and companies about who could and who should be able to use encryption aside from governments. Robust encryption was not widely available for the average citizen, and the export of cryptographic systems was tightly regulated and controlled. Zimmerman made PGP available online for anyone to use, and published the source code so anyone could see how it worked. He also made it free.

In 1993, Zimmerman was targeted in a criminal case by the US Government for **"exporting munitions without a license"**. This is because PGP was a tool for communicating secretly, and high-quality cryptographic systems were considered weapons of war in the eyes of the US Government (as well other governments). Robust cryptography that could not be "broken" by governments was a very valuable commodity, and governments liked being able to access any communications they could. Allowing PGP to be freely available to anyone in the world was considered threatening the the US government, who were constantly trying to break other country's cryptography systems and build stronger versions of their own.

##### Zimmerman had made it possible for average people to encrypt their communications with the same level of cryptography that governments used and considered secure.

The investigation into Zimmerman continued throughout the 1990s in the US, with the criminal investigation officially ending in 1996. The US export regulations regarding cryptography were substantially liberalized through a number of court cases and changes to the regulations - Zimmerman's case was **one of many** during the **"Crypto Wars"** in the US during this time. The freedom for the average citizen to use "government-grade" cryptography to encrypt their communications was a crucial step for civil liberties online.

Related capabilities involving encryption, such as encrypting hard drives and encrypting connections to servers (such as when using online banking or other services), **expanded the possiblities of what could be done online without the fear of having one's sensitive information intercepted or accessed without authorization.**
<br><br>

## Step 4: What PGP/GPG *Cannot* Do For Users
For the sake of demonstration, you may want to show participants the header of an unencrypted or encrypted email to show what it looks like and contains.

#### PGP/GPG *cannot* fix human error - if someone using PGP/GPG does not use it correctly, it cannot offer the full extent of security and privacy measures it otherwise might. Simple errors can include:
- Forgetting the password for your private key;
- Not uploading your public key to a keyserver for others to find;
- Losing your private key;
- Not configuring your email client and connected PGP/GPG tools correctly.

#### PGP/GPG *can* encrypt the body or content of your email message and attachments; however, PGP/GPG *cannot* encrypt the metadata associated with your email - this means:
- The sender and recipient;
- The time and date sent;
- The subject line;
- Any other information in the email header.

#### PGP/GPG *cannot* encrypt the title of attachments - unless:
- You are using what is known as **MIME**, or [PGP/MIME](https://enigmail.wiki/Signature_and_Encryption), a more dynamic encryption standard that supports email HTML, attachment encryption, and other useful features;
- We recommend using PGP/MIME (which Enigmail uses by default), instead of Inline PGP;
- Show an email with an attachment using Inline PGP and MIME to demonstrate the name of the attachment as visible.

#### PGP/GPG *cannot* allow you to send encrypted emails to someone who doesn't use PGP - although:
- You *can* suggest that they use it and offer to help them set it up!
<br><br>

## Step 5: In Closing
Even though PGP take some practice and assistance to use at first, everyone can learn to use it. It is the only way to ensure that the emails (and any attachments) are truly encrypted end-to-end, so that they cannot be read even if they are intercepted by a hostile third party or are accessed by a mail service provider.
<br><br>
