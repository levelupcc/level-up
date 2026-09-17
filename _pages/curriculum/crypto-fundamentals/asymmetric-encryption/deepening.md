---
layout: content-page
title: "Deepening : Encrypting Messages with RSA" # name your lesson unit
author: Jon Camfield #The public names / pseudonyms of the authors
parent: "Asymmetric Encryption" #The titles of pages this links from
summary: "" #A 1 P summary that will go on listing pages and at the top of this page
permalink: /curriculum/crypto-fundamentals/asymmetric-encryption/deepening/encrypting-messages/ #The full URL of this, for its primary parent page, e.g. /curriculum/safer-browsing/anonymity-and-circumvention/activity-discussion/offline-circumvention/
breadcrumb: "Encrypting Messages" #The name of this lesson
date: 2026-09 #Last updateddate in YYYY-MM
adids: Deepening # ADIDS element(s): Activity and Discussion, Input, Deepening, Synthesis
duration: 120 minutes #free form duration/time field
platforms: #Where relevant, what mobile or computing platforms does this apply to: Linux, Mac OS, Windows, Android, iOS

---

# Materials 

- Whiteboard or flipchart
- Participants will need calculators - the simple calculator app on phones or laptops is sufficient.
- **Work through this yourself in advance** to make sure you're comfortable with the process. It's useful to have a set of numbers you know work as an example. To ground this exercise a bit, we have some pre-selected numbers we'll be using throughout, but these instructions give you the tools to choose and build your own. Revisit these notes after working through the process below, and don't worry about the wonky information in parentheses for now, but they will be useful if you read external material about the RSA public key cryptosystem and asymmetric encryption!).
  * **p** = 11 (first prime)
  * **q** = 13 (second prime)
  * **n** = 143 (the modulus, equal to p×q)
  * **ϕn** = 120 (the totient, equal to (p-1)×(q-1) )
  * **e** = 7 (public exponent, another prime that does *not* divide evenly into (is not a factor of) ϕn)
  * **d** = 103 (private exponent, the *modular inverse* of n) 
- **Note** Because we're using such small numbers to make the math simple, this example is also limited to encoding only one letter at a time - or, more specifically, numerical values under n. This is because if what you're encoding goes over the size of the modulus, it is cancelled out by modular arithmetic (this will make sense at step 6 below). So, if you're trying to encode 145, you'll get the same result as if you were encoding 2 (145-143 = 2, 145 mod 143 = 2). This does impose real-world limits which the Synthesis module discusses!

This lesson first goes through the encryption and decryption process with pre-selected numbers, and then follows with a short explanation of how you can independently create the "right" numbers that work in this situation.

*This lesson builds off of "Secrets Held, Secrets Revealed" in [Coincidences, Chaos, and all that Math Jazz](https://www.google.com/books/edition/Coincidences_Chaos_and_All_that_Math_Jaz/x-uQ2aiDveUC?hl=en&gbpv=1&dq=michael+starbird+secrets&pg=PA65&printsec=frontcover
) by Edward Burger and Michael Starbird.  If you want to diver deeper into this, I highly recommend it.*

# Deepening

We are going to actually encode and messages, and learn a few bits of the math behind how public/private key cryptography actually works. 

The private and public keys in asymmetric cryptography - be that PGP, TLS certificates, or other places you'll find it - are numbers.  Very -- very large numbers.  And specifically, they are numbers with some very weird inter-connections, based on prime numbers (numbers which can only be evenly divided by themselves and the number 1, like 11, but unlike 25) multiplication, and a calculation called "modular" arithmetic. 

To do this by hand, we are going to use very small numbers.  In real life applications, these are numbers with **hundreds** or even **thousands** of digits. (you can explore this with a few tools like pgpdump https://github.com/kazu-yamamoto/pgpdump !)


## RSA By Hand

### Creating Public and Private Keys


1. First off, we are going to select two small prime numbers. We will call these two primes **p** and **q**. 
2. Multiply p and q together, note down the result. We will call this number **n**, and it will be part of both the public and the private key. 
3. With the same two primes p and q, subtract 1 from each prime and multiply together the result. So: (p-1)×(q-1). We will call the result of this **phi n** (or **ϕn**).
4. Select a third prime (we'll call it **e**), but it has to be one which doesn't divide evenly into ϕn from the previous step. (so, if the result was 65, 5, while itself a prime, is a bad choice). This third prime will be the other part of your private key and will also be used to compute your public key. 
5. This is the hard step! We need to find what we'll call **d**, which will be the "modular multiplicative inverse" of n. The "official" way to find this is called the [Extended Euclidean algorithm](https://en.wikipedia.org/wiki/Extended_Euclidean_algorithm). However, this is when we remind ourselves that we're not becoming cryptographers today - there is a ton of number theory behind how this works, where it doesn't, and more.  BUT - it is all actual math, with steps one can follow by hand - that underpins all of this.
  * For today we're taking a shortcut, but still involving a core piece of the math used in encryption - **modular arithmetic**.  Perhaps you remember when you were first learning division, and had "remainders"? When you divide 10 by 7 on a calculator, and you'd get 1.428571..., but if you  use remainders instead, you'd get *1r3* - 7 goes into 10 once, with 3 remaining.  With modular arithmetic, this remainder value is what we are trying to find - so 10 mod 7 is 3. 17 mod 7 (10+7) is also 3 - 7 goes into 17 twice (14), and the remainder is still 3.  It's also true that 13 mod 10 is 3. 103 mod 100 is 3 - it's kinda a funny tool, useful for thinking about 12 vs 24hr clock time (3pm is 15:00 mod 12!) and, in this case, incredibly useful for security.
  * ANYHOW - to find the modular multiplicative inverse, we are going to look for an integer - a number with no decimals - that multiplies with e, that ϕn - the number from step 3 -  modulo this is 1. 
    * Take ϕn,  and add 1
    * Divide that by e. If we get a simple integer, that's our answer.  The "add 1" step here is to ensure that we find the mod = 1 result.
    * If we got a number with decimals, we keep going - each step from here multiplies ϕn incrementally - 2x, 3x, 4x, etc., then adds 1, and then divides by e - until we get a plain integer.  With the numbers e=7 and ϕn=120, here is the process:
```
	Try 1: (120×1 +1) / 7 = 121/7 = 17.285714...
	Try 2: (120×2 +1) / 7 = 241/7 = 34.428571...
	Try 3: (120×3 +1) / 7 = 361/7 = 51.571428...
	Try 4: (120×4 +1) / 7 = 481/7 = 68.714285...
	Try 5: (120×5 +1) / 7 = 601/7 = 85.857142...
	Try 6: (120×6 +1) / 7 = 721/7 = 103
```

  * **BINGO! The number we're looking for is 103.**  This number will also always itself be smaller than the number we are dividing in to, because that would simply cause us to loop over again - so if you kept going, you will find more numbers that work, but it is this first one, which is less than the number you're dividing in to, which is the one that successfully completes the math.

Now we (finally!) have all the pieces to build our public and private keys. It's worth noting that technically and mathematically, either of these keys could be either the public or private key - they are effectively mirrors of each other - which unlocks some super fun tricks we'll get to soon. 

Traditionally with RSA, we use e and n for the public key, and d and n for the private key, and this is usually written like this: Public Key: (e,n) , Private Key: (d,n).  In fact, you can use pgpdump's web interface on a sample or public key and see it provide the n and e values of the key! It's worth noting that in most cases, e is set to 65537 (01 00 01 in hex) as a default.


### Public and Private Keys; Encrypting and Decrypting

OK - that was a lot of work. In comparison, now that we have all those numbers chosen and calculated, the actual encryption / decryption part is relatively simple! To encrypt, you take the message (in numerical form, and remember it has to be less than n ), raise it to the power of e, and then take the modulo n of the result.  You can then take the result of that, as your encrypted message, and decrypt it by taking the encrypted message, raising it to the power of d, and again taking the modulo n of that. In slightly more formulaic terms:

* encrypted = ( (message)^_e_ ) mod _n_  
* decrypted = ( (encrypted) ^_d_ ) mod _n_ 

Let's start with a super simple, one-letter message - "y", and translate that letter into a number - 25, and use the values we have been using throughout:

* p,q = 11, 13 (the primes)
* n = 143 (the modulus)
* ϕn = 120 (the totient)
* e = 7 (public exponent)
* d = modular inverse (n)  = 103  (the private exponent) 

So, to encrypt and then decrypt:

* 25^7 mod 143 = 64
* 64^103 mod 143 = 25

After all of this, it feels a bit anticlimactic that this just kinda ... works, and honestly without that much fanfare or complication. But that's also the magic!

--

# Further reading and references

These materials were crucial in building and cross-checking this resource, and provide further depth on relevant topics.

* [Coincidences, Chaos, and all that Math Jazz](https://www.google.com/books/edition/Coincidences_Chaos_and_All_that_Math_Jaz/x-uQ2aiDveUC?hl=en&gbpv=1&dq=michael+starbird+secrets&pg=PA65&printsec=frontcover) by Edward Burger and Michael Starbird.  
* [Doctrina: How RSA Works](https://doctrina.org/How-RSA-Works-With-Examples.html)
* [ Humberto Ortiz-Zuazaga, A very small RSA encryption example](https://ccom.uprrp.edu/~humberto/very-small-rsa-example.html)
* [Wikipedia, The Extended Euclidean Algorithm](https://en.wikipedia.org/wiki/Extended_Euclidean_algorithm#Example)
* [Euclidean algorithms (Basic and Extended)](https://www.geeksforgeeks.org/euclidean-algorithms-basic-and-extended/)
* [Modular arithmetic](https://nhoyle-unsw.github.io/learn-encryption-with-python/Modular-arithmetic.html)
* [A History of Cryptography From the Spartans to the FBI](https://thereader.mitpress.mit.edu/a-history-of-cryptography-from-the-spartans-to-the-fbi/)
