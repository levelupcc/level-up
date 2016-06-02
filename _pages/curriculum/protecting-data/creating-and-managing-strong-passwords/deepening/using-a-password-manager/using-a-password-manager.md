---
layout: content-page
title: "Deepening: Using a Password Manager"
author: CC, Carol, Megan
summary: "Hands-on installation and use of a password manager (in this case, KeePass or KeePassX)."
permalink: /curriculum/protecting-data/creating-and-managing-strong-passwords/deepening/using-a-password-manager/
updated: 2016-05-31
adids: Deepening
parent: Secure Passwords
duration: 45-60 minutes
platforms: Linux, Mac OS, Windows
---

## Materials to Prepare:
- USB for each participant with Portable Apps version of KeePass (for Windows users), or KeePassX for OSX and Linux users. Can also include the relevants Hands-On Guides if they are up-to-date on the USB drive as well. TTC's Security in a Box: Portable Apps KeePass for Windows, KeePass for Windows; Ubuntu (may not be updated);
- Whiteboard or flipchart and markers.
- Display the notes describing features of a strong password (from the Safer Password Practices Input section) for reference.
- Projector to demonstrate hands-on steps.
- (Optional, but recommended: Have a database with a number of entries available to show participants how they can organize their own databases. This also helps illustrate the utility of using a password database by showing how many entries an average user has. This could be your database or a database you've realistically created for trainings.)

## Keepass Hands-On Steps
Testing new versions before a training is recomended to reduce potential challenges in the training room. Check for updated Hands-On Guides for KeePass Windows (both Portable Apps and desktop), and other available up-to-date, step-by-step installation and use guides for OSX and Linux as available.

### Step One: Install (OSX and Linux) or open KeePass (Windows, Portable Apps version).

### Step Two: Create a new Keepass Database
- Creating a Master Password for the database. Have partipants use the best practices from the input section to make a strong password, as this will be the password that protects all of your passwords. This password shouldn't be the same as any previous password you've used, and you shouldn't use it elsewhere.
- If participants *forget* the Master Password they've set for the first database they create, remind them they can create another database. Optional: You may want to have them close the database after the "save an entry" and potential saving of the entire database step below so they can practice inputting their Master Password.

### Step Three: How to create a new entry
- Review the data fields available and the main ones used.
- How to add or auto-generate passwords.
- Explain what "entropy" is if asked.
- (Optional: Have them enter their Master Password as their first entry and review the password before saving and closing the entry and database in the next step.)

### Step Four: Saving
- An entry, whether it's a new entry or an updated entry.
- Saving a database -- some versions require saving the entire database before closing it, others (KeePassX) will auto-save the database before closing it.Be sure to clearly note any differences between versions you're training on.

### Step Five: Other options and features
- Organizing passwords into groups and subgroups and assigning icons as desired.
- Being able to copy and paste passwords, user names, and URLs by right-clicking on an entry without opening it.
- Changing the amount of time passwords, user names, and URLs remain available in the clipboard after x amount of time. (Suggest that they set a time limit for clearing the clipboard.)
- Auto-locking feature for the database after inactivity, and the ability to auto-lock the database when minimized.
- Setting up reminders to change passwords. Advice from experts vary, but many suggest that users change their most important passwords every 3-6 months.
- The notes section can be used for a number of things -- one is storing the answers to "security questions" for various accounts.

### Step Six: Changing passwords on the different services the participants use
- Note that making a shift to password managers takes some upfront time, but it will save them time and make their passwords safer overall.
- Devote some time in the session for participants to add several of their most important passwords to their databases.
- If they have passwords they know they should change based on the advice in this training session (especially passwords shared between multiple sensitive accounts, or passwords that are one of the top 25 most common passwords), they may choose to start with those.

### Step Seven: Backing up their database
- One of the crucial features of KeePass is that the databases are encrypted. This means that even if someone else gets a copy of your database, they cannot open it without your Master Password.
- One of the other features of KeePass is that you control where your database is stored and who can access it.
- You can make multiple copies to save in various locations. You can store it on a USB, back it up to any cloud storage you use, send to yourself via email, or save it on your mobile phone. This way, if you lose your computer or it is damaged in some way, you can still access your database.
- To do this, you need to be sure to back up your database on a regular basis. You can set up reminders for yourself to do this regularly.
- Note that the version of the KeePass(X) that was used to create the database may limit which version you need to reopen your database on another computer.
- (Optional: If you have time, have participants

### Step Eight: If other password management systems come up, you will probably have to discuss:
- Are those solutions are encrypted?
- Are they open source? If not, are you certain they're secure?
- If they're cloud-based, are you confident that that company cannot access them? This would also mean that they would not be able to disclose your passwords if their systems become compromised.
- Discuss convenience vs. security as a real trade-off which each participant needs to answer per their own situation (level of risk, trust of a company, usability, etc.)
	- You may want to discuss how having a cloud-based solution is certainly more convenient, as it backs up your database and syncs across devices. However, it may be effective to mention compromises have occurred with some of these cloud-based managers. One such example can be found [here](http://arstechnica.com/security/2015/06/hack-of-cloud-based-lastpass-exposes-encrypted-master-passwords/). This can provide the trainer with an opportunity to cover the qualities of KeePassX that make it more trustworthy that a company's cloud-based system.
- The built-in Keychain utility for OSX is an excellent password manager, although it lacks some of the features of KeePassX (no areas for "notes," creating identical encrypted backups, no "change password" reminders, no syncing feature, etc.)
