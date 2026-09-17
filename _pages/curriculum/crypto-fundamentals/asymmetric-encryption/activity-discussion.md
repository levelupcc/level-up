---
layout: content-page
title: "Activity-Discussion : The PGP Hotel" # name your lesson unit
author: #The public names / pseudonyms of the authors
parent: "Asymmetric Encryption" #The titles of pages this links from
summary: "This activity uses a hotel metaphor to explain PGP with more support of public/private key encryption/decryption and hash/signature functions." #A 1 P summary that will go on listing pages and at the top of this page
permalink: /curriculum/crypto-fundamentals/asymmetric-encryption/activity/pgphotel/ #The full URL of this, for its primary parent page, e.g. /curriculum/safer-browsing/anonymity-and-circumvention/activity-discussion/offline-circumvention/
breadcrumb: "The PGP Hotel" #The name of this lesson
date: 2026-09 #Last updated date in YYYY-MM
adids: Activity and Discussion # ADIDS element(s)
duration: 30 minutes #free form duration/time field

---

https://www.joncamfield.com/blog/2017.01/lets-talk-about-pgp

# Materials to Prepare

There are a ton of ways people have described PGP in specific and public key cryptography more generally - from mixing paint (http://gizmodo.com/5888567/how-to-understand-encryption-using-paint-and-clocks, http://maths.straylight.co.uk/archives/108) to magic lock-boxes and Romeo and Juliet (https://www.level-up.cc/leading-trainings/training-curriculum/activity/love-story). There are even dances (https://ooooo.be/cryptodance/) and a 3D printable box (https://conexionsegura.org/box)!

This approach uses the experience of a hotel (or, alternatively, apartment buildings with front desk staff) as an analogy which can stretch to cover not just PGP-style asymmetric cryptography, but also digital signatures.  This is written to explain PGP, but can be adapted for S/MIME and other public key crypto approaches.

# Running the Activity


# The PGP Hotel

You and your friend are attending an event and staying at different hotels - you're at the Hilliot and she's at the Marilton.  You're trying to deliver a message, so let's review how you might do this.

## Call Your hotel's Front Desk (Normal Email)

Without knowing much other than your friend's name and the hotel they're staying at, you could call you the front desk of your hotel (the Hilliot), and ask them to call Alice's hotel (the Marilton) and pass along the message. Of course, now both front desks at both the Hilliot and Marilton know your message.

If your message is totally innocent, this may be acceptable to you - it's certainly very easy. This is (almost exactly) how email works today.

## Directly call their hotel's Front Desk (Internal or "TLS" protected email e.g. gmail-to-gmail, internal emails)

If you happen to be staying in the same hotel, you could simplify this a lot - only the front desk would know, with no risk of a random courier or other hotel staff also knowing the message.

This is more akin to emailing within your own company, or from one gmail account to another, and also applies to a lot of messaging tools like Slack.

## Delivering the message securely (PGP or S/MIME)

Of course, if the message is more sensitive, you want to have even more control over who has access to it...  If you know the room number of whoever you want to send a message to, you can physically go to that room and slide the message under the door.  In this case, you have to know not only Alice@Marilton, but also another piece of information - her room number.  

### Room Numbers and Keys (Encrypting the message)

Now, Alice can give this room number our to anyone; it's not sensitive in any way. Knowing that number doesn't give anyone access to her room - only Alice has the key to open the door itself and get in the room.

By knowing this room number and slipping your message under the door, you have securely delivered a message to Alice.  

*In PGP-land, the room number is akin to your public key - you can share it widely.  The key to the door itself is your "private key" - it's important to keep this secure, and have an equally secure backup, but you should never share it.*

### Messages from under the door (Message Signing)

It's important to note that as of now, Alice has received a very secure message - she sees the message at her door and knows that only she has the key to get inside the door.  While you may have put your name -- and even your room number -- in the message, Alice doesn't *really* know for sure who sent it.

The specific physics gets a bit unwieldly here, but let's consider what happens if you're standing outside Alice's room and you see a message pushed out from under the door.  The message is just sitting there in the open hallway, so anyone could read it, but you'd know that only the person who has the key to that room could have pushed that message out.  

In PGP-land, this is message signing - to make sense of it, you have to know both the sender's identity (Alice@Marilton) and their room number (their public key) to know that it came from them.  

You can sign a message to guarantee it's authenticity without encrypting it, and you can encrypt it without signing it.  You can also of course encrypt *and* sign.

# Leading the Discussion


### Quick review


* What do you need to send an encrypted message to Alice?
	(Alice's Name, Hotel, Room number == email address, public key)
	Discuss: What /don't/ you need?  You don't need Alice's key, you don't even need your own hotel room/number/key!!)
* What does Alice need to send you an encrypted message?
	(same)
* How can Alice prove the message came from you?  What information would she need?
	(Your  Name, Hotel, Room number == email address, public key)
	Discuss: What /doesn't/ Alice need?  She does not need a hotel room/number/key herself!
* How can you prove the message came from Alice? What information would you need?
	(Alice's Name, Hotel, Room number == email address, public key)

## Unsolved challenges

### Endpoint Security

Anyone who can break into the room has a chance at accessing the message -- don't share your room key or open the door to strangers.  

PGP-encrypted emails by default are stored encrypted even on your laptop, but if someone has ongoing access, they can capture your PGP password and use that to decrypt the message!  The best way to defend against this is to make sure you keep your system up to date, keep an anti-virus system running and updated, and most importantly don't click on weird links or download unexpected attachments!

### meta-data

None of this prevents the hotels and even people on the street from tracking you coming in and out of the hotel.  Who you're communicating with, and how often you're doing so, are not protected by this.  Importantly, PGP specifically does not hide the subject of your email, so it's important to choose something that does not reveal any risky or sensitive content.


## Advanced PGP topics using the same metaphor collection

### Key Exchange

If you think of the hotel more like an apartment building, it could even be listed on a public directory.  In PGP land, these were key servers - now it's largely https://keys.openpgp.org/.  

It's worth nothing that anyone could go and post up a fake listing on the directory, so it's best to not just refer to that listing, but to also confirm it directly with the person. Keys.openpgp.org takes an additional step that requires a working email account to share a key.

### Web of Trust

If you really want to get crazy, you can apply the same concepts of "message signing" to the public directory.  You can "sign" other people's keys and post your signature publicly, to help others choose the correct information on a public directory.  

