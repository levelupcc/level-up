---
layout: content-page
title: "Using a Password Manager"
author: CC, Carol, Megan
summary: "This Deepening session covers hands-on installation and use of a password manager - in this case, KeePass or KeePassX - for your training participants. These can be used for the secure administration and storage of multiple different passwords, across as many different user accounts."
permalink: /curriculum/protecting-data/creating-and-managing-strong-passwords/deepening/using-a-password-manager/
updated: 2016-05
adids: Deepening
parent: Creating and Managing Strong Passwords
duration: 45-60 minutes
platforms: Linux, Mac OS, Windows
---

## Materials to Prepare
- USB flash drive for each participant, loaded with Portable Apps version of [KeePass](http://keepass.info/) for Windows users, [KeePassX](https://www.keepassx.org/) for OSX and Linux users - you may also have participants simply download and install any of these directly from the developer websites, instead of using the Portable Apps version, if needed
- Relevant Hands-On Guides for users from Tactical Tech's **Security-in-a-Box** resource: [KeePass for Windows](https://securityinabox.org/en/guide/keepass/windows), [KeePassX for OSX](https://securityinabox.org/en/guide/keepassx/os-x), [KeePassX for Linux](https://securityinabox.org/en/guide/keepassx/linux)
- Whiteboard or flipchart and markers; display the notes describing features of a strong password from the [Safer Password Practices Input]() for reference
- Projector to demonstrate hands-on steps

##### Trainer's Note
Testing any new versions available of KeePass/KeePassX before your workshop is recomended, to reduce potential challenges either you or paricipants could potentially encounter. Check for updated Hands-On Guides for KeePass Windows, and other up-to-date, step-by-step installation and use guides for OSX and Linux as available, if you know ahead of time that you'll be included this tool in your training.

Also recommended for this session - have a KeePass or KeePassX database pre-made, populated with a number of dummy entries, to show participants how they can organize their own databases. This also helps illustrate the utility of using a password database by showing how many entries an average user has.
<br><br>

## Deepening

### Step 1: Getting Started
Walk participants through the installation and/or launch process for either tool, depending on whether they are using a Portable Apps version already provided on USB (launching) or downloading a .exe directly from the developer website (installing). You are ready to move on once every participant has the initial screen up for creating their Master Password.

Explain that with KeePass/KeePassX, users can create one or more "databases" for storing their passwords - think of each database as an individual container holding many different passwords, and each container requires its own "master" password in order to be opened. Users might have multiple databases for different reasons, such as separate databases for passwords related to different projects, different kinds of user accounts, "work" and "personal" account passwords, etc. 

A created database is saved individually as a *.kdb* file - these can be transferred to and re-opened on other devices with KeePass or KeePassX installed. One of the crucial features of KeePass is that the databases are *encrypted*. This means that even if someone else gets a copy of a user's database .kdb file, they cannot open it without its Master Password.
<br><br>

### Step 2: Creating a Master Password
Now ask that each participant create a Master Password for their first password database - ideally, this will be a dummy or "test" database for practice purposes. Have partipants use the techniques and practices from the [Safer Password Practices Input]() to make a strong password, as this will be the password that protects all other passwords in that same database.

If participants *forget* the Master Password they've set for the first database they create, remind them they can create another database. <br><br>

### Step 3: Creating a New Entry
Once inside their first database, briefly explain the features and layout of the database screen - this includes the larger pane where each entry will be displayed (Title, Username, Passwords, URL, etc.) and the smaller pane where users can create different folders within the database for different passwords or categories of passwords. 

Next, have the group navigate to "Add Entry" and demonstrate the entry screen and data fields included within it - review the data fields available and the main ones used (Title, Username, Password, URL, etc.). 

Explain how users can input the password to be saved into the Password field, or how they can use KeePass/KeePassX auto-generate new, unique passwords. Explain that, in order for the feature to auto-generate a more randomized, and thus stronger, password, the more **entropy** that needs to be fed into it as the new password is created - be sure to explain what [entropy](https://en.wikipedia.org/wiki/Entropy_(computing)) is in the process.
<br><br>

### Step 4: Saving a New Entry and Saving a Database
Once each participant has created a **new entry** for their database, ask everyone to click OK to save it - once done, the new entry should appear in the larger pane of their main database screen, with all the relevant information they included displayed in each column. Now, explain that since they've made a change to their new database, that database must *also* now be saved in order to maintain the updated information. 

Some versions (KeePass for Windows) require saving the entire database before closing it - in this case, the name of the database (e.g. "filename.kdb") will be displayed in the upper left-hand corner with an asterisk (e.g. "filename.kdb*") indicating that the database hasn't been saved since the last change was made to it; others (KeePassX) will auto-save the database before closing it. Be sure to clearly note any differences between versions you're training on.

For practice, once each participant has created and saved a new entry, have them close the database after saving it as well - then, they can practice inputting their Master Password by re-opening this database.
<br><br>

### Step 5: Further Options and Features
Time permitting, or depending on the particular needs of the group, you can review the further options and features of KeePass/KeePassX that are available to users, including:
- Organizing passwords within a database into groups and subgroups, and assigning each a different icon as desired.
- Copying passwords, usernames, and URLs, by right-clicking on an entry and then pasting this information when and where needed, all without opening the entry itself.
- Changing the amount of time passwords, usernames, and URLs remain available to be pasted after copying them - it's highly recommended that participants set a time limit for these.
- Enabling the Auto-locking feature for the database after a period of inactivity, and the ability to auto-lock the database when the window is minimized.
- Setting up reminders to change passwords - it's highly recommended that users change their most important passwords every 3-6 months.
- Using the "Notes" section in a given entry for storing any useful information relevant to that password or account, such as storing the answers to "security questions" for various accounts.
<br><br>

### Step 6: Changing Account Passwords 
Note to participants that, while worthwhile in the long run, making a shift to password managers takes an investment of time and effort upfront; however, emphasize that it will save them time overall and make their passwords and accounts much safer.

Devote some time in the session for participants to add several of their most important passwords to their databases. If they have passwords they know they should change based on the advice in this training session - especially any passwords shared between multiple sensitive accounts, or passwords that are one of the top 25 most common passwords - they may choose to start with those.
<br><br>

### Step 7: Password Database Backup
As briefly mentioned in Step 1, one of the key features of KeePass/KeePassX is that users can control where their databases are stored and who can access them - database .kdb files can be moved between devices, and opened using the Master Password on any of these devices where KeePass/KeePassX is also installed. Note that the version of the KeePass/KeePassX that was used to create the database may limit which version you need to reopen your database on another computer.

Remind participants that one of the crucial features of KeePass is that the databases are *encrypted*. This means that even if someone else gets a copy of a user's database .kdb file, they cannot open it without its Master Password. Highlight that users can make multiple copies to save in various locations - they can be stored on a USB or external hard drive, backed up cloud storage, sent to oneself via email, or saved on a mobile device.

Backing up passwords databases allows them to be accessed elsewhere, in the event that your laptop or computer is damaged or lost. To do this, users need to be sure to back up their databases on a regular basis - they can set up reminders for themselves to do this regularly, if they wish. 

##### Trainer's Note
If you would like to address the topic of data backups more in-depth, either during this session or in a later session of your workshop, refer to the [Protecting Data: Data Backup Basics]() module on LevelUp for more detailed exercises and talking points.
<br><br>

### Step 8: Other Password Management Systems
It's reasonable to expect that in the course of this session, participants may raise the subject of other password management tools that they have used in past, or have heard about from their friends or colleagues. In addressing this topic, there are some key points to ensure that you cover when discussing the pros and cons of other options (either [LastPass](https://lastpass.com/) or [1Password](https://1password.com/) are likely to be mentioned, for example) versus KeePass/KeePassX:

**Do these solutions provide any kind of encryption, or any other option for protecting password data?**
<br>
For example, The built-in Keychain utility for OSX is an excellent password manager, although it lacks some of the features of KeePassX, such as areas for Notes, an option for creating identical encrypted backups, "change password" reminders, syncing features, etc.

**Are these tools open source? If not, how can we be certain of how safe our data will be with them?**
<br>
Because their source code is available for anyone capable of reading it to review or audit, the transparency of open source software and tools permits them a greater degree of trustworthiness when it comes to how safe data shared with them is (or isn't).

**If they're cloud-based, are you confident that the company who owns the service cannot access any password data?**
<br>
This would also mean that they would not be able to disclose your passwords if their systems become compromised. It may be effective to mention that compromises have occurred with some of these cloud-based managers. One such example can be found [here](http://arstechnica.com/security/2015/06/hack-of-cloud-based-lastpass-exposes-encrypted-master-passwords/). This can also provide you with an opportunity to cover the qualities of KeePassX that make it more trustworthy that a company's cloud-based system.

**What is the participant(s)' level of tolerable risk for using these applications?**
<br>
This is important to discuss - in some cases, neither the real nor perceived risk(s) could be severe enough to rule out one of these other options.


