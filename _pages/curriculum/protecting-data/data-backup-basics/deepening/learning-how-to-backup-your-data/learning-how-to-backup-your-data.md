---
layout: content-page
title: "Learning How to Backup Your Data"
summary: In this Deepening element, trainers will guide participants through how to use data backup tools, referencing once again the elements that should be considered when designing a backup policy, and practices for how to create a backup policy.
permalink: /curriculum/protecting-data/data-backup-basics/deepening/learning-how-to-backup-your-data/
breadcrumb: "Learning How to Backup Your Data"
date: 2016-05
adids: Deepening
parent: Data Backup Basics
duration: 60-90 minutes
---
##### *Trainer's Note*
You may only have time for either a **hands-on for tools** *or* a **hands-on for designing a policy** session; otherwise, you may have time to go over each briefly. If you only have time to focus on either the tool(s) *or* the policy creation, make sure to provide participants with a basic introduction to the other element and give them resources to take home and digest on their own time. Walkthrough instructions for either of these options are provided within this Deepening session.

# Materials to Prepare
- Projector and laptop, with the chosen backup tool ready to demonstrate
- USB drives with software (portable apps or relevant OSX apps) pre-downloaded for participants

## Optional
Pre-printed Backup Policy Form (<a href="/assets/files/backup_policy-blank.pdf">found here</a>) if covering policy creation during the session
<br><br>

### Selecting a Backup Tool
There are a number of tools which can be used for backups. Choose a tool (or tools, if training on different operating systems) and prepare a hands-on walkthrough that works for the majority of your participants.

Remember that it can take a **substantial amount of time** to back up an **entire drive of data**. For the purposes of illustrating how various backup systems work, have users choose one file to back up to illustrate a tool and the process of backing up during the session. Some options to consider, by operating system, are included below:

#### For Windows
[Cobian Backup](http://www.cobiansoft.com/cobianbackup.htm) or [BitLocker](https://support.microsoft.com/en-us/products/windows)
- For Windows users with admin/install rights on their device, these are good tool options if their version of Windows is licensed. 
- While Cobian Backup also gives users the option to “encrypt” their backup, it is **not recommended** to use Cobian for this function.   - For users based on Windows using [PortableApps](http://portableapps.com/download), the PortableApps Platform includes a backup function.

#### For OSX
[Time Machine](https://support.apple.com/en-us/HT201250) 
- This OSX-native utility, built into MacBooks to backup to an encrypted external drive or a trusted cloud storage system, is a popular option because it allows users to “fix it and forget it” for most set-ups.

##### For Linux
[LUKS](https://guardianproject.info/code/luks/)
- Otherwise called the **Linux Unified Key Setup**, this is a disk encryption utility native to distributions of Linux. A benefit of LUKS, compared to other full-disk encryption, utilities is its platform-independent, cross-compatible protocol for encrypting and storing data.
<br><br>

# Deepening (Introduction)
Before moving forward with a Deepening option (see **Deepenings A and B** below), either review or hand out the Backup Policy Form that includes definitions below - these are covered as well in both the **Input** section and the second page of the Backup Policy Form, but are useful for review nonetheless.

## Key Definitions

#### Data Type
As seen during the **Activity**, a data type can be many things (point to the matrices for examples). Many users decide to back up an entire device instead of having tailored backup plans for different data types; others may need to create specialized backup policies. Specialized policies are especially important for particular data types due to issues related to the sensitivity of the data, travel (particularly crossing borders), and the amount of changes to one data type versus another over time (e.g., a large volume of video editing or sound recordings, an organization's email database).

#### Master Copies
Master copies are the "original" version of the data - for example, the original photo or video taken, the first version of a document, etc. For most people, this would be whatever is on their laptop or their mobile device.

#### Duplicates
Duplicates are a **backup** version of the master, or original, copy of the data in question.

#### Backup Location
This is where a data backup is physically located - this can refer to everything from a laptop hard drive or USB drive to an email account or cloud storage account.

#### Storage Device
What type of storage device are you using? This could be an external hard drive, a corporate cloud service (Google Drive, Dropbox), your own online server (ownCloud), or a small portable storage device like a USB flash drive.

#### Types of Backup
There are four common backup types which are generally used in most backup programs and protocols - these are a **Full Backup**, a **Differential Backup**, an **Incremental Backup** and a **Mirror Backup**:

#### Full Backup
The starting point for all other types of backup, containing *all the data in the selected folders and files*.  Because full backup stores all files and folders, frequently enacting full backups results in faster and simpler restore operations.

#### Differential Backup
This backup type contains *all files that have changed* since the last **Full Backup**. The advantage of a differential backup is that it shortens restore time compared to a full backup or an incremental backup, as it works only with data that has been altered.

#### Incremental Backup
Stores all files that have changed since the last **Full *or* Differential, *or* previous Incremental Backup**. The advantage of an incremental backup is that it takes the least time to complete. This can also make historical versions of your data available - OSX's **Time Machine** is an example of a popular Incremental Backup tool.

#### Mirror Backup
Identical to a full backup, with the exception that the files are *not compressed* in .zip files (as they might normally be) and they cannot be protected with a password. A mirror backup is most frequently used to create an exact, mirror-image copy of the source data.
<br><br>

# Deepening A (*Backup Tool* Hands-on Session)

## Step 1: What, Where, Why, When, and Which
Begin this session by referring back to the **What, Where, Why, When, and Which** questions covered in the structure of the previous Input session on this topic:
- *What* is a data backup policy?
- *Where* might important data be found?
- *Why* or *why not* use the cloud?
- *When* should backups take place?
- *Which* backup type is best?

These will be valuable framing questions as we look at the tool (or tools, if training on different tools for various operating systems) we'll be covering in the Deepening. It will be useful to take these questions into consideration, with participants configuring the chosen tool(s) according to the "answers" to these questions we've identified already.
<br><br>

## Step 2: The Initial Backup
Have participants install or open whichever tool they'll be configuring for their device and/or operating system. Introduce them to the basic features, and demonstrate how to conduct a backup, remembering (due to timing) to start with backing up a sample file as opposed to an entire drive. 

Give everyone enough time to make their first, test backup, and to get a feel for the interface and features. Once everyone has successfully made their first backup, review the various settings for the backup tool(s), and discuss the option of scheduling backups regularly. If there are other key features for the tool, review these now as well.

Explain that backups, especially for a very full hard drive, can take a substantial amount of time, so are best done when the computer is stationary for a long period of time (for laptops) in a safe place.

If participants are backing up data to external hard drives, they should also encrypt those drives. If encryption has already been covered with participants, trainers may wish to review what their options are for local disk encryption; if it has not, trainers should refer to backups (the same backups even) when leading a session on encryption.
<br><br>

## Step 3: Backup Locations

### How Many Locations Should You Backup To?
Discuss options for at least **two backups**, and how to design a backup policy and plan that has considered what the various "worst case scenarios" might be given their particular circumstances, such as:
- Office raids (by law enforcement or otherwise)
- Confiscation of devices
- Loss of password or access control (forgotten, departing staff, etc.)
- Natural disasters (floods, fire, earthquake, etc.)

Base your recommendations on the concerns raised by participants for their particular situations and environments. Mention that you'll be focusing on these also during the wrap-up for the session, to help solidify strategies for using the selected tool(s) for this session in the implementation of their backup policies.

##### *Trainer's Note*
Consider that for one or more particular data types (e.g., videos or photos) they may also need to have multiple backups in different locations, at least one of which is accessible without a network connection of some kind. Participants should be aware that hard drives can fail or be lost, and having only one backup can be risky in case something happens to that drive (especially for a large amount of valuable data, like an organization's databases, or a large volume of videos or photographs).
<br><br>

## Step 4: Timing and Frequency of Backups

### How Often Should You Backup?
Go through the trade-offs of backing up on a daily basis, a weekly basis and a monthly basis - important for considering these tradeoffs are questions such as:

##### How much data could potentially be lost with each of these options?
Consider that, if data is lost, the data recovered would be only as recent as the last time it was backed up.

##### How much time would each backup take to complete?
Generally, the more frequently backups occur, the less data there will be to save each time, making for shorter times.

##### Can backups be scheduled for a device isn't being used?
If not, consider the impact of more frequent backups on participant's ability to carry out day-to-day activities on their device(s).

##### How much storage space will be required?
The more data, the more storage space needed - at a certain point, larger amounts of required storage space will become increasingly expensive to procure and maintain.

##### Where should the backups be physically located?
Remember that, the more backup media or locations that exist for an individual data type, the more varied and less physically proximate they are to one another, the better.

##### How fast and in which way would you need to access your backup?
For example, if traveling to document an event and your laptop dies, do you want to be able to access your backup on the cloud or on a portable hard drive? What are the trade-offs in this scenario?

##### *Optional*
If leading a mobile-focused training, or if using mobile to illustrate backup is preferable for your training, trainers might choose to demonstrate backing up an iPhone or Android device (depending on the most common device among participants). This would also be a key opportunity to have a discussion about the **advantages and disadvantages** of backing up to Apple’s servers and/or Google’s servers, and the usability, access and privacy tradeoffs involved. This also presents a valuable opportunity to discuss whether or not this choice reflects participants' respective **acceptable amount of risk**, in particular when making choices about whether their data can be stored in the cloud on the servers of third-parties vs. locally on devices and servers under their own control.
<br><br>

# Deepening B (*Backup Policy* Hands-on Session)
If leading a backup policy hands-on session, either in supplement to or in place of a tool-focused session, there are a few different approaches trainers can take - below are included several such options:

## Option 1
Go through each of the elements in a backup policy and the definitions involved, building off of the background established during the previous **Input** section. Depending on the group, you may want them to create either **personal** or **organizational** back-up policies, keeping in mind that sometimes an organizational policy might also include individual policies as well.

### Have participants either...
1. Break up into small groups, to work on polcities collaboratively - especially useful for organizational policies;

2. Work alone to start drafting a policy; however. if crafting individual policies, either collaborative or individual can be encouraged.

When participants regroup, trainers may choose to have them share and discuss what they've come up with (preferable); however, if time is short, wrapping up with questions during the **Synthesis** part of the module is another option.
<br><br>
 
## Option 2
If you are limited for time, hand out the **Backup Policy Form** and list of definitions above. Ask them to work on it either *after* the workshop - be available to answer any questions they have, especially if the group will not be re-convening following this session.

If you do this, you should follow up remotely to ask how their Backup Policy is coming along, be encouraging and remind them of the benefits of backing up, and answer any questions they may have. 

If participants are able to send encrypted attachments, the circumstances or context call for it, and there is sufficient trust between trainers and participants, trainers may also provide feedback directly to participants' drafted policies.
<br><br>

