---
layout: curriculum

title: Creating and Managing Strong Passwords
author: CC
updated: 2016-03-00

activity: Password Reverse Race
input: Safer Password practices
input-url: "https://www.level-up.cc/leading-trainings/training-curriculum/input/safer-passwords"
deepening: Using a Password Manager
deepening-url: "https://www.level-up.cc/leading-trainings/training-curriculum/deepening/password-manager"
synthesis: Secure Password Synthesis
synthesis-url: "https://www.level-up.cc/leading-trainings/training-curriculum/synthesis/passwords"

permalink: /curriculum/creating-and-managing-strong-passwords/
weight: 3.4
---

## Why are passwords important? ##
Access to a number of crucial and less important accounts: Email, banking accounts, social networking sites, etc.
These accounts can have our sensitive information and allow us to "be ourselves" using various digital services (e.g., sending a social networking message, sending an email, making an online purchase, etc.) They may also allow us to appear to be others.

They also allow us to access a number of other things, like wifi access points, unlock our phones, log in to our computers, and more.

## What are the implications of having your password divulged? ##
- Important information or files stolen (copied) or deleted; if they are stolen, you may or may not realize it. This can range from sensitve documents and files to your address book.
- Theft of funds (via credit cards or various types of account credit).
- Accounts being use to send spam or (even worse) used to impersonate you to friends, family, and colleagues.
- Your accounts being held in exchange for a form of ransom (example of the ransom being a valuable Twitter account).
- Adversaries using access to your account in order to monitor your communications and activities without your knowledge.
- Access to your email can enable a domino affect: it can be used to reset passwords to your other accounts by requesting reset links, locking you out of not just your email, but a number of your accounts.

## How are passwords commonly compromised? ##
- You’ve shared them with others or stored them in an easily discoverable way.
- Someone has see your password when you entered it.
- Using mail clients that don’t have SSL session-wide (only at login page, leaving your information vulnerable as the site logs in from an SSL encrypted login page to the site’s resources, like your webmail.)
(Optional: this is a useful thing to illustrate with (In)security demos or other tools like Wireshark.)
Using social engineering is a tactic to exploit human vulnerabilities. This can include impersonating you to a company to have your password reset (Mat Honan and others are examples you can use alongside any of your own).
- Phishing is an example of social engineering. Being able to reset a password by correctly answering the "privacy questions" for an account using personal information available online. (This is how a number of celebrities and other high-profile accounts have been "hacked" in recent years. But you don't need to be a celebrity to have enough of your "answers" available online.)
- A device is physically accessed and passwords are able to obtained (especially if full-disk encryption isn't used, or more advanced exploits are used).

An example of this is being able to access the data on an unencrypted phone, including passwords to all the accounts you access on the phone. Or—even worse—an adversary with less technical skills being able to obtain a phone without a passlock of any kind. Many mobile and desktop operating systems are designed to make this difficult, but it is still a vulnerability, particularly if you don't use full-disk encryption on your devices.
Malware (e.g., a keylogger).

"You've had your account hacked." Explain how this can mean a number of things. Sometimes it's completely out of your control and a service or a company has been compromised and your user , password, and (sometimes) other information has been obtained (examples of LinkedIn, Twitter, and just about every other major company or service online). It can also mean that you've been specifically targeted because someone with enough incentive and resources values access to your account(s) enough to try to break into them or hire someone to do so. One term for this is called "brute-forcing" a password, and it's also how other passwords (e.g., to wifi) are compromised. Knowing a bit about how this is done can be useful in creating a strong password.

(Optional -- more in-depth description of how passwords are strategically guessed or brute-forced.)
People trying to brute-force passwords use a number of tools to try to either access many passwords at once, or just one. Two important tools are word lists (or "dictionaries") used to create guesses, making brute-forcing more efficient, and computing power to run as many guesses per second as possible. As word lists improve and the cost of computing power becomes cheaper, effective passwords need to become longer and complex in different ways. Most of the advice on passwords will have to do with the complexity of characters involved and how to avoid a combination of words and letters that are more easily guessed with word lists and dictionary attacks. But equally crucial is the length of a password, because no matter how complex a password is, if it's short, it can be guessed in a relatively short period of time no matter how complex it is. Therefore, the longer it is, the better.
A few words on word lists / dictionary attacks: Those that are competent at compromising passwords will first try the most common passwords used by most people in the world (show current list of most common passwrods) as entries on their word list. They will also customize their word lists to whomever they are targeting to include words in their language, relevant places, names, and dates. They will also include guesses that substitute common numbers and symbols often used in passwords for partiular letters (e.g., zero as the letter o, 4 for the letter a, $ for s, and so forth). A lot of time is spent on a strong word list (or "dictionary list"), and they are available for free, or sold online.

## Common myths and misconceptions: ##
- Lockouts protect me!
    Many systems -- primarily online accounts for most average users, along with PIN codes -- will lock out after 3+ attemps. Whereas this can add some protection for those trying to access your account, this isn’t full protection. Adversaries can obtain an encrypted version of your password (called a hash) and then decrypt it offline (by conducting billions of of mathematical comparisons/guesses per hour depending on the amount of computing resources they have available), then log into your account with a pre-cracked password without getting locked out.
- Using non-English words will make my password secure.
    If an adversary has enough of an incentive and the resources to target you for your password to access your accounts, they will probably know quite a bit about you, including what language(s) you speak. When they (or someone they hire) attempts to brute-force your password, they will put words relevant to you in the word list they use to "guess" your password. This is likely to include words in your primary language and words particularly relevant to you, such as names of family members, locations (where you were born, where you've lived or traveled), and dates (e.g., your date of birth, when your child was born, when you were married).
- ​Using non-English words will make my password secure.
    If an adversary has enough of an incentive and the resources to target you for your password to access your accounts, they will probably know quite a bit about you, including what language(s) you speak. When they (or someone they hire) attempts to brute-force your password, they will put words relevant to you in the word list they use to "guess" your password. This is likely to include words in your primary language and words particularly relevant to you, such as names of family members, locations (where you were born, where you've lived or traveled), and dates (your date of birth, when your child was born, when you were married).

## What constitutes a secure password? ##
**Length:** We are still often told that a password needs to have at least 8, but 12 is a strongly suggested minimum, and 20 characters is even better.

**Complexity:** We are told to use a password that's alpha-numeric, using upper and lower cases, with special characters. This is one approach for creating a 12 character password.
Think pass-phrase, not password! (We suggest using the XKCD comic on Password Strength to illustrate this point, with the quote "Through 20 years of effort, we've successfully trained humans to use passwords that are hard for humans to remember, but easy for computers to guess.")​ (May also want to mention that they should not use "correct horse battery staple" as a password due to this comic : )

Walk them through the comic, noting that the "Tr0b4dor&3" password is only 11 characters. Note how it uses common symbol-letter replacements, which good brute-force word lists will include. Also note that adding a random character and a number to a dictionary word (even if it has symbols substituted for letters!) helps, but can still be guessed in 3 days with the right word list and enough computing power for 1000 guesses/second.

(Optional) Explain how "correct horse battery staple" can be considered an example of a "diceware" passphrase, where words are chosen at random based on dice rolls. If you go into depth on diceware-generated passwords, keep in mind that six words are now recommended or "five words with one extra character chosen and placed at random."
For passphrases, try not using words that are commonly found together. A new trend in password cracking is pulling words that commonly found together in phrases from wikipedia and other sites (in various languages) as word list content for cracking long passphrases.

Another technique is to use a sentence and pull the first letter from each word in a long phrase or sentence.
(Bruce Schneier's example of turning "This little piggy went to market" to "tlpWENT2m," although longer than 9 letters would make a passphrase using this method stronger.)

Don’t use the most common passwords. These are the first thing that an adversary will try to use on your account.
Find an up-to-date list for this to show to class and show them the top 20 (2013 example).

Typos can be your friend! In a passphrase, if a password dictionary used to guess passwords is using correct spellings, a typo in a word can help reduce the chances of it being guessed.

Don’t reuse passwords, especially for your most important accounts

Get participants to name the accounts that are most sensitive/valuable/important to them. Ask if they share that password with any other account. (Don't push them to answer if they are embarassed, and you may mention that this is very common and they are by no means alone. Many people have had their accounts compromised because of this, including CEOs,professsionals, etc.)

Change them regularly, particularly for your most sensitive accounts. Definitely change them if you get an authenticated (not phishing) email telling you that a particular service has had user accounts and passwords compromised, and check the news to confirm.

Ask participants how often they’ve changed the passwords on the accounts they identified as being most sensitive/important to them. Ask them how hard it is to remember this without a reminder.

Don't use any sort of "online password generator," since these can be sites that simply document the passwords you generate. Similarly, don't enter your actual passwords into online sites that promise to "test the strength of your password."

## Reasons why most people don’t use secure passwords ##
Users are being told that the best passwords they can create are also the hardest to remember.
You can refer back to the XKCD comic on Password Strength to illustrate this point.
...in addition, we now have a lot of passwords, and are adding more every day. How are we supposed to remember all of these passwords that are particularly difficult to remember?!??
When participants get to “too many to remember!” then identify password managers as a crucial tool… because we’re only going to be increasing the number of passwords as time goes on.

### Miscellaneous ###
Passwords are primarily tools for accessing information from the point of view of the services you use them for, which is one of the most fundamental properties of information security. This is often confused with authentication (proving that you are indeed the same person who owns the account). Because your password can be given or taken and used by someone else, this means they are a weak form of authentication.

Two-factor authentication is a powerful at reducing compromised accounts. If you are at high-risk of being targeted by an adversary with resources who wants to access your account, using two-factor authentication for services that offer it is highly recommended. Google has stated that the use of two-factor authentication has drastically reduced the number of compromised accounts. Other services that offer two-factor authentication include Facebook, Dropbox, and Twitter. Be careful of two-factor authentication systems that rely on text messages if you travel often and change your phone number when you do. Otherwise you may become locked out of your own account.

When you are asked to provide answers to personal "privacy questions" that are used to authenticate you as well as allow you to reset your password, consider not answering them truthfully. You may devise a system for how you answer these that is memorable, or a recommended step is to also store them in your password manager, particularly for you most sensitive accounts.
