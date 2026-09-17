---
layout: content-page
title: "Synthesis : Asymmetric Encryption Everywhere" # name your lesson unit
author: #The public names / pseudonyms of the authors
parent: "Asymmetric Encryption" #The titles of pages this links from
summary: "" #A 1 P summary that will go on listing pages and at the top of this page
permalink: /curriculum/crypto-fundamentals/asymmetric-encryption/synthesis/everywhere/ #The full URL of this, for its primary parent page, e.g. /curriculum/safer-browsing/anonymity-and-circumvention/activity-discussion/offline-circumvention/
breadcrumb: "Asymmetric Encryption Everywhere" #The name of this lesson
date: 2026-09 #Last updateddate in YYYY-MM
adids: Synthesis # ADIDS element(s): Activity and Discussion, Input, Deepening, Synthesis
duration: 30 minutes #free form duration/time field

---

# Synthesis

The most amazing part about asymmetric encryption is that versions of it are everywhere, and it all essentially boils down to what we've just worked out by hand:

* TLS/HTTPS - The cryptography protecting your connections to websites, uses certificates, which are functionally fancy public keys.
* PGP and S/MIME, ways to encrypt email - same deal.  PGP uses keys more directly, and S/MIME also uses certificates, which contain a key within them.

These are all using the same core concepts. There absolutely are important implementation differences, and they all **also** use symmetric encryption as part of their process. Fundamentally, however, they use asymmetric, public/private key exchange, as the core part of how they verify you're talking with who you think you are, and to jumpstart the encryption process. Understanding the universality of how public/private keys work and how they are part of not just PGP, but Certificates, code signing keys, and all parts of modern encryption.


## How do these different tools actually use asymmetric encryption?

### PGP

We've already covered how you can use pgptool to directly track the math we learned with the parts of PGP keys.  One additional, optional, part of a PGP key is it's **signatures**.

#### Key Signatures
One of the challenges with PGP, is ensuring you actually have the right PGP key for the right person. For the longest time, we used the 'web of trust' in PGP, where people would **sign** other peoples' keys where they had met them in person or otherwise verified their identity, and as more and more people did this, theoretically, anyone could, once they trusted one person who was well-connected here, could trust a large web of connections.  

But let's talk about the **signature** part, as that's actually super important. What does a signature on a key ... mean, anyhow?  If you recall from the [PGP Hotel](/curriculum/crypto-fundamentals/asymmetric-encryption/activity/pgphotel/), signatures guarantee that only a specific person (whoever signed it) had the ability to do that.  In the PGP key land, that means some other PGP key holder reviewed this current key, and made a signature using their key, and then the key owner attached that signature inside the public key they send around.

This is how this web of trust was supposed to work.  You get enough people saying that they trust a key enough to put their reputation on the line (in the form of proving that they reviewed and signed it), and you have a peer-to-peer model of shared agreements on identity, based on PGP keys.

This... was a brilliant and wonderful idea, which avoiding having some central authority. Given the risks around a centralized source of identity, this seemed like a perfect match.  It unfortunately was quite complicated (surprising perhaps no one) and,  well, never worked out beyond a core community. Finally, some people found a way to abuse the "key servers" which were critical to maintaining it, and it all fell apart.  Nowadays, the best setup is using [http://keys.openpgp.org/](http://keys.openpgp.org/), which verifies email addresses (only!) and lists keys.

#### PGP Emails

A common presumption is that PGP encrypted email is simply taking the relevant public keys, encrypting the email to them, and sending it. In fact, this is generally how it's taught in guides and explained in presentations.

The reality is a bit more complicated.  Imagine, with what you now know, sending a PGP-encrypted email to 10 people with a 1 megabyte attachment.  How would that actually work?  You'd have to create 10 separate copies, independently encrypted to each recipients' key! You're now sending 10MB. What if the attachment was 10MB? 20? 

So; cool fact! PGP emails actually encrypt the message and any attachments to a "session" (per email) key, and then that (much smaller!) key is encrypted to each of the recipients.  So each recipient decrypts the session key, and then uses that to open one single encrypted attachment that everyone received.


### S/MIME 

S/MIME is another form of encrypted email, more often used in very large companies and governments.

S/MIME (and HTTPS) takes an important, different approach to the identity problem, which is to make it dependent on an organization and a broader structure to maintain. Instead of a PGP Key, S/MIME uses a "certificate" structure, which at the end of the day is just another standard file structure to capture the parts of all the relevant keys together. Certificates generally use the [x.509 standard](https://en.wikipedia.org/wiki/X.509) - and these are for most intents and purposes the same structures you also find in HTTPS certificates!

Everything about asymmetric encryption, and PGP keys, flows into S/MIME "certificates" as well.  A "Certificate" is simply the public key, descriptions of who or what it is connected to, plus organizational information, and a section on what authority has signed off proving that this key information is accurate for this organization and person (or website).

That last bit is the key difference.

### Certificates, root certificates, and the PKI

Where PGP relies on a peer model, S/MIME, and the web, use what's called the Public Key Infrastructure.  Each Certificate, in addition to the key material, gives a map of keys which have signed it, which are organized hierarchically. 

A small number of companies are entrusted with what are called "Root Certificates". Root certificates are built in to most modern browsers and email clients, and are the core, trusted source.  These certificates are then used to sign intermediary certificates, and it goes on down from there until you get to the specific, user certificate being used for S/MIME. That map is the line of certificates all the way from that S/MIME certificate up to the root certificate.

This is powerful, as you can now simply trust those root certificates, and anyone using them is automatically trusted.  The flip side of course is that (a) this is generally costly, and (b) relies on these root certificates.  

As of the time of this writing, there are no free S/MIME certificate providers, but of course [LetsEncrypt](https://letsencrypt.org/) has revolutionized this for website certificates, which operate in much the same way, trust-wise.

Back in S/MIME land, you may specifically want to set up an independent infrastructure if you're a large enough organization, if only to have complete control over the keys within it - the [US Federal PKI graph](https://www.idmanagement.gov/fpki/notifications/#fpki-graph) is a great example of a massive, independent structure.

### HTTPS (TLS, SSL, etc.)

Structurally, HTTPS (now TLS, previously SSL) is the same as with S/MIME above - each browser has a set of root certificates it inherently trusts (which you can add more to at your own risk, as well are remove some from!) 

With HTTPS being significantly more widely used than S/MIME, trust of the root certificates is incredibly important, as any root certificate is granted the ability to sign off on any website domain anywhere!

Browsers provide a default list of trustworthy root certificates, and so far have been very clear that abuse of a root certificate is a path to removal from browsers - this of course has its own risks as the diversity of the web browser market shrinks, putting significant pressure on a few vendors who have to [stand up against conflicting market pressure and state influence](https://www.computerworld.com/article/1645564/googles-cert-sanction-may-hamper-browsing-trigger-china-retaliation.html). In addition to that pressure, it is no simple thing to remove a root certificate, as thousands of websites may rely on it.  You can read about this [2018 incident resulting in Symantec's certificate being removed](https://blog.mozilla.org/security/2018/03/12/distrust-symantec-tls-certificates/), as well as [Mozilla's Certificate Program](https://wiki.mozilla.org/CA)


## Signal

At the risk of grossly simplifying a lot of incredible work under the hood, Signal also uses an asymmetric key exchange to bootstrap it's "[Double Ratchet](https://signal.org/docs/specifications/doubleratchet/#double-ratchet)" protocol.  

Even though Signal users similar cryptographic concepts, how it implements these concepts improves mightily on the security that PGP provides. Once a PGP key is compromised, it can be used to read any message the malicious actor has access to which was encrypted using it.

Signal, on the other hand, is constantly changing its keys in the background, such that access to any one key only provides access to the specific message it encrypted.  That said, the "identity" key is critical in ensuring you're having this super-secure conversation with who you think you are, which is why it's important to take note whenever you get that "Safety Number with ... has changed" message!
