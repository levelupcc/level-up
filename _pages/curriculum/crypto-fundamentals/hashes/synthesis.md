---
layout: content-page
title: "Synthesis : Hashing" # name your lesson unit
author: Jon Camfield, Robert J. Hansen  #The public names / pseudonyms of the authors
parent: "Hashes" #The titles of pages this links from
summary: "A review of hashes and discussion of other creative uses for them." #A 1 P summary that will go on listing pages and at the top of this page
permalink: /curriculum/crypto-fundamentals/hashes/synthesis/hashing-together/ #The full URL of this, for its primary parent page, e.g. /curriculum/safer-browsing/anonymity-and-circumvention/activity-discussion/offline-circumvention/
breadcrumb: "Other Uses for Hashes" #The name of this lesson
date: 2026-08 #Last updateddate in YYYY-MM
adids: Synthesis # ADIDS element(s): Activity and Discussion, Input, Deepening, Synthesis
duration: 15-30 minutes #free form duration/time field

---

# Synthesis

We've gone through many of the most visible uses of hashes, but it's worth taking a pause to reflect on the unique values of hash tools, specifically for the digital rights community.

## Verification

We've focused a lot of our lesson time on the verification of a hash to double check the integrity of a document or downloaded file - useful to ensure you downloaded the software you intended to download, or making sure a document is the same one that was sent. Using hashes for verification is central to digital "signing" of content, including in PGP, where the hashed value is encrypted, as opposed to encrypting the entire contents again (separately from encrypting them to send of course) just for the signature function -- but there are some other notable uses.

## Private Secret Sharing

The most important one is a privacy-preserving way to check if someone else knows the same secret that you do - but in a way that doesn't give that secret away unnecessarily!

If you suspect you and someone (or some service) share knowledge about something sensitive, you can provide a hash of that secret to the other person.  If they know the secret, they can hash the same thing, get the same result, and then share back to you whatever that secret was, knowing for sure that you also know it and proving to you that they know it.  

That feels very abstract, so let's discuss two real-world uses there.  

### Threat Research

First, if you receive a suspicious file and think that it might be, for example, a phishing attempt by a powerful adversary, you might want to get more information about it -- has that file been seen before, is anyone else researching it, etc.  One place to do this is at VirusTotal, an open database of information about malicious actors.  

However - uploading the file can reveal to such an adversary that they have triggered suspicion, which might lead them to move or hide their phishing websites and change tactics.  You can instead take a hash of that file and use [VirusTotal's "Search" function](https://www.virustotal.com/gui/home/search).  This only gives you results if someone else has already flagged the file, and if not, it preserves your ability to work with groups like [RaReNet members](https://www.rarenet.org/), [CiviCERT](https://www.civicert.org/), [Amnesty Tech](https://www.amnesty.org/en/tech/) or [CitizenLab](https://citizenlab.ca/) to do further analysis without revealing anything to the adversary.

### Threat Sharing

An unfortunately common problem has been bad actors inside the digital rights community, and a need to coordinate a community-wide response without abusing the privacy of the alleged bad actor, any potentially unwilling collaborates, and definitely not their victims.  A powerful, public example of this use case is seen in this [blog post](https://blog.patternsinthevoid.net/the-ccc-men-who-hate-women.html) (***Content Warning**: rape, sexual assault, whistleblower retaliation*).  In this post, people who know and/or have a very informed guess can verify using the hash who the person being discussed is without this person's identity, and potential ability to more fully change their ways, being widely harmed.  It's worth noting that you may have to give some hints (like firstname lastname all lowercase) to ensure you are both hashing the same string and not failing to match because someone's using capitals and the other isn't).

## "I Told You So"

Another use is future proofing a statement without necessarily making the statement public.  If you want to make a prediction, or simply state something you know in the present time and might want to be able to, in the future, absolutely prove that you knew it at that specific time, posting a hashed value of that statement to a public location where edits are visible (such as on your social media page, or on a website), provides a path.  At whatever moment you're willing to reveal this piece of knowledge, you can refer to that earlier hashed value and provide the original string (which you must remember exactly, like a password, for this to work).  The timestamp records from wherever you posted the hash, plus the verification of the hash with the original value, provides proof that you wrote that specific original value and hashed it at that moment in time.

## What other creative or protective uses might hashes help with?

Can participants come up with other creative applications of hashing tools?

For a fun final activity, XKCD has a great example of a poorly implemented hash system for passwords with their [password crossword](https://www.explainxkcd.com/wiki/index.php/1286:_Encryptic) - which someone made into a [playable game](https://zed0.co.uk/crossword/) based on an Adobe password leak, with the password hints people used matched to the hashes of the most common passwords.
