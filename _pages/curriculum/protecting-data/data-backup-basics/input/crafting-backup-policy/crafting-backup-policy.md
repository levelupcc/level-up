---
layout: content-page
title: "Crafting a Backup Policy"
author: 
summary: Each new method of storing or transferring digital information tends to introduce several new ways in which the information in question can be lost, taken or destroyed. It is extremely important that users maintain an up-to-date backup of their important and/or sensitive data, and a well-tested means of restoring such data in the event it is lost. However, formulating an effective backup policy is not as simple as it sounds - this Input element will help trainers begin a conversation about this with training participants.
permalink: /curriculum/protecting-data/data-backup-basics/input/crafting-backup-policy
breadcrumb: "Crafting a Backup Policy"
date: 2016-05-00
adids: Input
parent: Data Backup Basics
duration: 30-45 minutes
---
## Materials to Prepare
Whiteboard or large sheet of paper

Participant-created matrices from the [Data Backup Matrix](/levelup/curriculum/protecting-data/data-backup-basics/activity-discussion/data-backup-matrix-information-map/) Activity & Discussion, for reference

Prepared data backup matrix based off of participant matrices from the [Data Backup Matrix](/levelup/curriculum/protecting-data/data-backup-basics/activity-discussion/data-backup-matrix-information-map/) Activity & Discussion
<br><br>

## Input Session

### Step 1: *What* is a Data Backup Policy?
While anti-virus, firewalls, encryption, and all the various steps we take to ensure the safety of our data are valuable and fantastic ideas, it's still not a question of *if* you are going to lose data, but rather a question of *when*. There are simply too many variables at play that could cause things to go wrong.

Preparing for "the worst" is just as important as defending against it; that is to say, you need to have a data backup policy as part of your own security plan. But what might a backup policy look like? What are its dimensions?

The first step to crafting an effective a backup policy is getting a sense of what data you have, and where it is. The [Data Backup Matrix](/levelup/curriculum/protecting-data/data-backup-basics/activity-discussion/data-backup-matrix-information-map/) Activity & Discussion is one way of doing this; however, another way would be by making a list of the different kinds of data you maintain and where you store each kind.
<br><br>

### Step 2: *Where* Might Important Data Be Found?
Essentially, a backup means having your information stored in at least two locations. Elicit or share some of the ways that different kinds of (digital and physical) information can be backed up:

**Electronic documents** - can be backed up using software such as Cobian Backup

**Program databases** - these can be backed up in the same way, once you have determined their location

**Email** - this can be backed up using an email client like Thunderbird

**Mobile phones** - these will usually come with software installed on a phone

**Printed documents** - these should be scanned and backed up as electronic documents where possible.

Where should we back up our digital documents? Elicit the possibilities, which should have already been covered in the **Activity & Discussion**:

- USB memory sticks & flash drives
- CDs/DVDs
- External hard drives
- Separate accounts with different passwords
- Remote Server(s)
<br><br>

### Step 3: *Why* or *Why Not* Use the Cloud?
The topic of cloud-based storage solutions may very well arise during this session, which can kick off a discussion about the security of sensitive information on the cloud. Given both the popularity and array of options available for cloud storage services, this discussion on the advantages and disadvantages has been included as a separate step.

**In general**, using various cloud options to store sensitive data should be avoided if a) users can’t get clear details on how a cloud service provider manages and handles their data, or b) the information they do obtain about a given cloud service make storing sensitive data there risky or unsafe.

Emphasise the need to have a physical distance between the devices storing master copies and backups of files. You may elicit examples for this, such as if there's a fire, natural disaster, office raid, etc.

#### Questions to ask during this discussion can include:
Can the cloud service provider or others access your data or read your information?

Is your data encrypted as you upload and download it? What kind of encryption is used to store it?

If they do store it encrypted, do only you have the ability to decrypt the data, or does the company hosting it also have this ability?

If a cloud service provider can access your data and read your information, do you trust them not to? Do you trust them not to be accessed by a hostile third party?

Is it hosted in a country that can legally request (or forcefully compel) that company to provide your information to them?

If backing up to the cloud is your only backup, are you confident you will always have internet access available in case you need to access that backup? (e.g., If you don't have internet access, you don't have a backup.)

#### This can turn into a larger conversation about tradeoffs, such as:
The comparative security between a backup with a trusted cloud service and a local encrypted hard drive if local threats are more acute - for example, raids, acts of nature that can cause damage, failing local backup disks, etc.

In addition, using trusted cloud services can be a crucial tool to use when having to cross a border with sensitive material.

#### Recommending Cloud Storage Providers to Participants:

Almost inevitably, you will be asked what your recommendation is for cloud service providers. You can use this opportunity to discuss topics such as the [concerning security architecture](http://www.techrepublic.com/article/dropbox-and-box-leak-files-in-security-through-obscurity-nightmare/) of **DropBox**, [whether or not users trust](http://www.zdnet.com/article/do-you-trust-google-is-the-wrong-question/) **Google** services with their data, and others.

#### In addition, the following recommendations have come from other trainers and security advisors, and may be of use when considering how to go about this discussion yourself:**

**[ownCloud](https://owncloud.org/)** is an open source option that participants, and particularly their organizations, can use, which is very similar to Dropbox and has more functionalities such as shared calendars, contacts, bookmarks, and more.

**[SpiderOak](https://spideroak.com/)** is, among the corporate cloud services available, one of the few that meets a comparitively higher standard of “zero-knowledge” and access to user data.

**[CrashPlan](https://www.crashplan.com/en-us/)** allows users to create store encrypted backups on trusted contacts’ devices or in the cloud, including CrashPlan’s servers if they so choose. It can be a powerful option for users who do not trust, or cannot afford, paid cloud services but want to have backups stored offsite in case of raids or other threats to their home or office. It also allows users to use trusted human networks for off-site backups - it's important to mention here that users should consider their trust in other users (as they would with a cloud service provider) when considering this option.
<br><br>

### Step 4: *When* Should Backups Take Place?
**When or how often** one should backup their data depends on a number of personal and organisational dynamics; however, a good question to kick off this conversation and guide the decision-making process is: 

#### How much work can I afford to lose and have to repeat?
It's also worth mentioning that some types of data may need to be backed up more frequently than others. Considering a **layered** approach, wherein **a)** **all** of your data is regularly backed up on a recurring basis, with **b)** more frequent backup taking place for certain **more important or sensitive** kinds of information between larger backups, could be useful.

This is also an opportunity to mention that while certain organizational structures, or individual activities, may require a more tailored approach to regular data backup, it can regardless be a good practice to backup your important data **at least once per week**.
<br><br>

### Step 5: *Which* Backup Type is Best?
There are **four common backup types** which are generally used in most backup programs and protocols - these are a **Full Backup**, a **Differential Backup**, an **Incremental Backup** and a **Mirror Backup**.

A type of backup actually defines **how data is copied** from source to destination, and lays the groundwork for a data repository model (or, how the backup is stored and structured on the chosen medium or storage location). Here below are basic explanations for each of the four common data backup types, which you may walk your participants through:

##### Full Backup
The starting point for all other types of backup, containing *all the data in the selected folders and files*.  Because full backup stores all files and folders, frequently enacting full backups results in faster and simpler restore operations.

##### Differential Backup
This backup type contains *all files that have changed* since the last **Full Backup**. The advantage of a differential backup is that it shortens restore time compared to a full backup or an incremental backup, as it works only with data that has been altered.

##### Incremental Backup
Stores all files that have changed since the last **Full *or* Differential, *or* previous Incremental Backup**. The advantage of an incremental backup is that it takes the least time to complete. This can also make historical versions of your data available - OSX's **Time Machine** is an example of a popular Incremental Backup tool.

##### Mirror Backup
Identical to a full backup, with the exception that the files are *not compressed* in .zip files (as they might normally be) and they cannot be protected with a password. A mirror backup is most frequently used to create an exact, mirror-image copy of the source data.
<br><br>

