---
layout: content-page
title: "Synthesis : Password Security in a New Light" # name your lesson unit
author: Jon Camfield, Robert J. Hansen (Reviewer) #The public names / pseudonyms of the authors
parent: "Entropy and Password Security" #The titles of pages this links from
summary: "" #A 1 P summary that will go on listing pages and at the top of this page
permalink: /curriculum/crypto-fundamentals/entropy/synthesis/entropy-and-security/ #The full URL of this, for its primary parent page, e.g. /curriculum/safer-browsing/anonymity-and-circumvention/activity-discussion/offline-circumvention/
breadcrumb: "Password Security in a New Light" #The name of this lesson
date: 2026-08 #Last updateddate in YYYY-MM
adids: Synthesis # ADIDS element(s): Activity and Discussion, Input, Deepening, Synthesis
duration: 30-60 minutes #free form duration/time field

---

# Synthesis

## Some useful calculations - bits of entropy

In information theory, these guesses have been turned into powers of two and called "bits" of entropy to make them a bit more flexible across more types of data.  A digit, with 10 possible guesses, has just over 3.32 "bits" of entropy (2^3.32 = 10 (ish)). 

The calculation here in log2, which mathematically answers the question, "two to *what power* equals this number?" It is this number that entropy is measured in: the logarithm (base two) of different possibilities that must be considered. 

For example - throwing a die yields one of six results: six possibilities must be considered, and log2 of six is about 2.6. Before the die is thrown it has 2.6 bits of entropy. Once you see it you can stop considering the five faces that didn't show up and focus on the one that did. To you, it now has one state to be considered, and log2 of one is zero — it has no entropy any more. But to others who didn't see the die, it still has 2.6 bits of entropy.

This makes for some fun math, as you can simply add the entropy bit calculation when adding more numbers, so your average 4-digit PIN is 3.32+3.32+3.32+3.32 or 13.28, or 2^13.28 - which gets us back to 10,000 (OK, technically that's 9946, but we rounded off some numbers early on, so it should be 2^3.3219281...). 

## But What About Passwords

We spent a lot of time talking about PIN codes. I am sorry to inform you that words - and passwords - are even worse.

Rewinding waaaaay back to where we started, language is not remotely random. We would think a letter would have 26 guesses, or 4.7 bits of entropy, what Shannon actually found is that when looking at language, it's closer to just 2.62 bits - less than a random number!

Entropy will forever drive how easy it is to guess a password.  It is the reason behind traditional guidance about super hard to remember passwords like "&Gs3a9(A"  The entropy of that is high, as the potential character set is 95 potential options per character (26 lower case, plus 26 upper case, plus 10 numbers, plus 33 symbols), or 6.57 potential bits of entropy per character, but that depends on each letter being **truly** random.

That's a lot (2^(6.57×8) = 6.63×10¹⁵ (6 *quadrillion*) guesses packed into a relatively short password. But there are more ways to generate entropy than just randomness -- length works also! 

*So yes, this lesson is really just a way to painfully [explain at length](https://www.explainxkcd.com/wiki/index.php/936:_Password_Strength) and with math you can use at home the famous ["Password Security" comic by xkcd](https://xkcd.com/936/) that suggest "Correct Horse Battery Staple" as a password*

Play around with what password lengths (presuming random character selection) look like with entropy and different character combinations here: https://silverhammermba.github.io/password/

For a more technical exercise on password security, [SAFETAG's Password Strength Activity](https://safetag.org/activities/password_strength/) walks you through real-world password cracking tools.

## Real World Impacts

It's important to close on a note of feasibility - both on what attackers can actually do, and how easy it is to dramatically up the difficulty for even the most powerful adversaries.

Cracking a password depends on being able to know when you've cracked the code.  That feels obvious, but you can't actually just go around trying thousands of passwords at a time on modern websites.

**So, that means a lot of this insane scale really depends on exactly what is going on in terms of "cracking" the password.** A powerful, dedicated computer with unfettered access to try and break a password can make hundreds of thousands of guesses per second. But, using most of these tricks directly against a modern online service will both take a very, very long time, and generally get the attacked blocked and the account locked down due to the number of failed password attempts.

So, how does this happen in real life?  The attacker needs direct access to a stolen or leaked database of passwords (these are generally just the hashes of the password, but can still be tested against rapidly). These breaches do happen quite often, and you can read about breaches as well as search them for your username to see if you've been impacted at https://haveibeenpwned.com/ .

## Defense against password hacking

**Avoid Password re-use**

It's worth noting that this breach model is also a **huge reason to avoid password re-use**.  Once a password associated with a username or email has been discovered from one leak, attackers will rapidly try that same combination across other popular services.  

**Use 2-factor authentication**

2-Factor authentication is of course another critical protection here, as it adds another requirement beyond just guessing a password, for account access.  This severely limits access by remote attackers, forcing them to try and trick the victim into giving away the 2-factor code, or requiring some access to their second factor.

**Password managers**

With the miracle of password managers, you can get strong and unique passwords wherever the websites allow it! They can make passwords like this:

	4jRjz@7Mb8z2wH$ne*Wc8CcSD6QTq#p6T*^H!*x$$$NqZp7\ 7qsbrho78ruLNKFfQsu#Jtuev4\ hPXaVgAVR6u6Gcq$xfmgzmm

Which you never have to remember or even type in, and you get ridiculous amounts of randomness for free. 

Consider using all of these approaches - use long but memorable passphrases for the things you **must** keep in your head, and use a password manager (and 2-factor!) for everything else.


## Further reading

[Entropy and Password Strength](https://en.wikipedia.org/wiki/Password_strength#Entropy_as_a_measure_of_password_strength) 

[Information Theory and Entropy](https://en.wikipedia.org/wiki/Entropy_(information_theory)).

[SAFETAG Activity on password strength](https://safetag.org/activities/password_strength)

[The "Milksad" vulnerability provides a real-world example](https://milksad.info/)

