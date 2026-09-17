---
layout: content-page
title: "Input : Learning about Hashes and their Limits" # name your lesson unit
author: Jon Camfield, Robert J. Hansen  #The public names / pseudonyms of the authors
parent: "Hashes" #The titles of pages this links from
summary: "" #A 1 P summary that will go on listing pages and at the top of this page
permalink: /curriculum/crypto-fundamentals/hashes/input/whats-a-hash/ #The full URL of this, for its primary parent page, e.g. /curriculum/safer-browsing/anonymity-and-circumvention/activity-discussion/offline-circumvention/
breadcrumb: "Learning about Hashes and their Limits" #The name of this lesson
date: 2026-08 #Last updateddate in YYYY-MM
adids: Input # ADIDS element(s): Activity and Discussion, Input, Deepening, Synthesis
duration: 45 minutes #free form duration/time field
platforms: #Where relevant, what mobile or computing platforms does this apply to: Linux, Mac OS, Windows, Android, iOS
---


# Input 

## What are Hashes?

Hashes provide "one-way" algorithms that create a unique numerical code from any specific input, from a password to a file. That unique code is only created from the specific input you gave it, with no modifications allowed, and using the same hash function on the same input will always create the same unique code as output.  BUT - and this is the one-way part of it, you cannot "go backwards" and take that unique code and figure out the original input.

Breaking this apart a bit, a hash is (1) an algorithm that (2) unpredictably, and (3) irreversibly, (4) maps its input onto a (very) large number. Let's go through what these mean a bit:

1) **"An algorithm"** is important because formal computer science has tons of tools to use to analyze algorithms: since it's an algorithm it can be studied rigorously by experts. Hash functions are some of the most-studied, most-trusted algorithms in computer science.

2) **"Unpredictably"** means that a tiny, single-bit difference in the input will change the entire output. If a very small change in the input only made a very small change in the output, we would be able to make predictions about the hash function's output based on how we'd already seen it operate.

3) **"Irreversibly"** means given an output it is unreasonably difficult to find an input that would yield it.

4) **"Maps its input onto a (very) large integer"** The output of a hash function is effectively "just" a number. That means that it is possible that numbers could repeat - but it's important to keep in mind that when using SHA-256 (for example) the number in question has *77 digits* when expressed in base 10. We will discuss collisions, as this is called, later.

As we go through the rest of the lesson, we'll find a few exceptions to these rules, but this is the theoretical goal of a hash function.

## Everyday uses for hashes

Let's dig in to a few common places hashes are used, and what work they are doing for us.

### Credit cards

As you explored in the activity, credit cards use a basic form of hashing, called a checksum.  These are not resilient against malicious attacks, but provide simple ways to detect accidental errors - like a typo on a credit card payment form, or a file that has an error in it.

### Downloading software

When you want to be extra sure that the file you downloaded is the same one you got, you can (and are often encouraged to) "check the hash" or "review the checksum" - these are hashes provided on the download side which you can also then run a local hash program on the file, and check that they match.  If they don't, something's gone very wrong. 

Common: Software! This is the mechanism behind “checksums” in downloading software
Ubuntu provides hashes and PGP https://ubuntu.com/tutorials/tutorial-how-to-verify-ubuntu#1-overview
Tor goes a step further and uses PGP: https://support.torproject.org/tbb/how-to-verify-signature/


### PGP signatures

When you choose to "sign" an email or create a signature on a file with PGP, you're actually using a hash as well.  The program creates a hash of the document as it exists, and then you essentially reverse-encrypt that hash. As you learned in [Asymmetric Encryption](/curriculum/crypto-fundamentals/asymmetric-encryption/), normal PGP encrypts using the recipient's public key, guaranteeing that only the person with that corresponding private key can decrypt it.  Signing in PGP instead encrypts using *your* *private* key (don't worry, it's safe!), so that anyone with your *public* key can "decrypt" it. 

Obviously that's useless for confidentiality, but if you wanted to be able to, say, prove that a document was exactly as you intended it to be, and to guarantee that exactly and only you were claiming that proof, a combination of a hash (to verify the exact state of a document and its contents) with an encryption system flipped over such that anyone could verify that the owner of a specific private key had encrypted that hash - becomes oddly powerful and useful.


### Passwords

Hashes are - or at least should be - fundamental to websites and passwords. Websites don't actually store your password; as doing so opens up a ton of risk from bad employees to huge problems if their password database gets stolen.  What they actually store is a secure hash of the password. This lets them store a code that's not easily reversible back to your real password, but also lets them re-run the same hash on the password you provide when logging in, and make sure it matches the hash they have stored. (Additional detail on the use of hashing in passwords follows under the *Attacks against Hashes* section)

Additional resources on passwords an hashing: 

* [Hashing vs encryption and password breaches](https://www.troyhunt.com/we-didnt-encrypt-your-password-we-hashed-it-heres-what-that-means/)
* This is notably how [HaveIBeenPwned](https://haveibeenpwned.com/) is able to safely track and correlate password breaches and their impact.

## Attacks against Hashes

We started with defining hashes as (1) one way - you cannot discover the original value from the hash of it, and (2) unique - exactly one input creates exactly one output.  These are only ... mostly true. Let's talk about a few of the attacks against hashes. 

As with most security, the important question is what is being attacked? Is an attacker trying to create a collision to deploy malware or undermine the veracity of a document? Are they trying to discover passwords from a collection of hashed passwords? While there are many commonalities on the defense side, some approaches are more focused on dramatically slowing down brute force attacks (to reveal passwords), while most simple "hash" functions are more focused on collision prevention.

### Collisions

In the world of hashes, a collision means two **different** inputs create the same 'unique' hash output.  Obviously that can be very dangerous if you're relying on the hash to guarantee, for example, that you provided a specific document like a contract where you refused to sign, and someone can create a different document with the same hash that looks like you did sign.

Collisions are - thankfully - rare, and using recent hashing algorithms dramatically reduces the possibility of a collision being created to effectively zero. Older hashes, even md5 (which is still commonly used) has been found to be vulnerable to (complicated) collision based attacks - you can see a [demonstration and code here](https://www.mscs.dal.ca/~selinger/md5collision/).

### Rainbow Tables

As we discussed in the password section above, if you can guess the input to the hash, you can verify you "got" the right answer if hashing your guess matches the stored hash value. 

In fact, people have essentially "brute forced" many common passwords and made extensive lists, called [Rainbow Tables](https://en.wikipedia.org/wiki/Rainbow_table). Luckily, most websites add what's called a "salt" to each password, which adds a non-secret value to the password, rendering pre-computed rainbow tables useless by changing the hashed value and thereby changing the hash itself.

### Attacks against password hashes

Hashes for passwords are great, but insufficient by themselves for "common" passwords. 

Common and obvious passwords - not just password1, 12345, and so on, but also the most obvious substitutions like P@assw0rd - have all been exhaustively explored.  As mentioned in the article below, if you take a hash (using md5) of P@ssword (it's 382e0360e4eb7b70034fbaa69bec5786) and google search it, you get hundreds of results from "reverse" hash databases which have pre-compiled hashes for known common passwords -- the rainbow tables mentioned above, making simple hashes less secure for common passwords. If you've already gone through the [Entropy](/curriculum/crypto-fundamentals/entropy/) lesson, you'll know just how common common password are. 

Further, just like with encryption, different hashing algorithms have different levels of security and resilience - md5 is very basic, and is (comparably) easy reverse using pre-compiled tables of known hashes as well as simply brute-force guessing. 

Modern password "hashing" systems use significantly stronger variations of this concept, with tricks to block using these pre-compiled tables (adding additional characters to each password before hashing the combination, that are unique to that user on that system, called a *salt*), and by using algorithms specifically designed to make large-scale attacks slow and costly, even if the adversary has custom-built hardware. Most advanced tools are called [Key Derivation Functions](https://en.wikipedia.org/wiki/Key_derivation_function), but similarly provide a one-way path from a password to a safer, consistent, but even harder to reverse string.


### A note on image hashes

Hashing is intentionally fragile, so simple edits to complex media will "trigger" completely different hash results, resulting in a mismatch. For most use cases, this is the ideal functionality.  However, this means in cases where changes have no discernible impact to the meaning of a file, this creates a different type of risk.

Images (and other media) are particularly challenging to "hash" in the same way we use hashes for absolute precise matching of other types of files. Changing a pixel in an image can be completely indistinguishable to the eye, but would cause a completely different hash result.

If you are trying to use hashing to match images, any adversary (as well as innocent image processing/resizing tools) can create a totally different hash for, perceptually, the same image.  Researchers have built creative tools called [perceptual hashing](https://en.wikipedia.org/wiki/Perceptual_hashing) to better "hash" an image based on how it looks rather than the much more fragile file architecture hiding behind it.  

Images hashes provide a way to track the spread of abusive imagery including NCII and CSAM -- but these "fuzzy" hash algorithms are also subject to collision attacks and weaknesses, and researchers are finding potential ways to "reverse" perceptual hashes so cannot be used as absolute guarantees.
