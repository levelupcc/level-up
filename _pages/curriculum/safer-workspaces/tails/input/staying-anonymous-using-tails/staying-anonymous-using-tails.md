---
layout: content-page
title: "Input: Staying Anonymous with Tails"
author: Michael Carbone, Nick Sera-Leyva
parent: "Anonymous Workspaces using Tails"
summary: "Participants learn how to use Tails features properly in order to stay anonymous, beginning with the essential terminology of Tails, machine booting, and system partition schemes."
permalink: /curriculum/safer-workspaces/tails/input/staying-anonymous-using-tails/
breadcrumb: "I: Staying Anonymous with Tails"
date: 2015-05-00
adids: Input
duration: 30-45 minutes
platform: Linux, Mac OS, Windows
---
## Materials to Prepare ##

- Laptop and projector for showing webpages below.
- **Optional**: Handout with defined terms and links to resources mentioned below.

## Input Session ##

### Anonymity & Endpoint Security ###

Being anonymous can mean different things depending on who or what you want to be anonymous **from**:

- Depending on the adversary, simply creating a new identity (on email, chat, or social media) may be sufficient.
- Combining that with using the Tor Browser or a Tor-ified chat or email application is a great way to protect one's identity against eavesdroppers or passive adversaries.
- For active adversaries, though, security of your workspace becomes more important - this is called endpoint security.
- There are a number of ways of improving your endpoint security and protecting against potential threats, such as **Safer Software Updating [LINK]** and understanding **Malware and Antivirus Essentials [LINK]**.

Three operating system platforms currently exist that provide robust, built-in endpoint security and anonymity features for users in different ways:

- Tails ([https://Tails.boum.org](https://Tails.boum.org))
- Whonix ([https://www.whonix.org](https://www.whonix.org))
- Qubes OS ([https://wiki.qubes-os.org/wiki/UserDoc/TorVM](https://wiki.qubes-os.org/wiki/UserDoc/TorVM))

### Defining Terms ###

This training session will focus on **Tails**, which stands for **T**he **A**mnesic **I**ncognito **L**ive **S**ystem - *what does this name mean?*

- **Live System:** Tails itself is a live operating system, or an operating system which can be run directly from an external media storage device such as a USB stick or SD card.

- **Amnesic:** In addition to being portable, Tails leaves no trace of itself, or any activity performed while using it, once disconnected from a machine.

- **Incognito:** In order to preserve anonymity, Tails automatically routes all network traffic through the Tor network, and includes Tor Browser as its default browsing application; any attempt by any application running on Tails to connect to the internet directly is blocked.

***Essentially, Tails provides pre-configured secure communications applications, hides your hardware network address from local networks, and routes all your operating system's network traffic through the Tor network.***

Explain to participants that Tails is different from other digital security tools they may already be familiar with, in that it offers many of the same protections and capabilities of those tools but is also an entire operating system environment.

**In order to understand how Tails functions, and to use it properly, it will be useful to define some further vocabulary for the group:**

#### Linux ####
Linux is an operating system similar to Windows or Mac, the major difference being that it is distributed as free and open-source software. Because of this, there are many different adapted distributions of Linux available - Debian, one of the more popular distributions, forms the foundation for Tails.

#### Boot(able) Device ####
A Boot (or Bootable) Device is a device or drive from which a computer loads files in order to actually start. For example, on many computers the hard drive is the boot device from which an operating system (such as Windows) is loaded when you turn a computer on. Aside from hard drives, media like CDs, DVDs, SD Cards, and USB flash drives are also boot(able) devices.

#### BIOS ####
BIOS (Basic Input/Output System) is the first software many computers run when they are switched on, used to run self-tests on systems and hardware to ensure they are working properly, and to initiate the load sequence for software (like an operating system) located on available bootable devices. BIOS has an interface, but users cannot access it unless they take specific action during startup to access it directly.

#### UEFI ####
UEFI (Unified Extensible Firmware Interface) is a newer and more flexible version of BIOS, increasingly available on many newer computers, that functions in much the same way.

#### Boot Sequence ####
The boot sequence, which can be accessed through BIOS (or UEFI) during startup on a computer, is a list of the bootable devices on a computer - it is used to determine the order in which a computer attempts to load information from these devices. Normally, a computer's hard drive is the first device in the boot sequence, from which the operating system is loaded. However, the boot sequence can be changed to first load information from external, removeable devices like DVDs or USBs.

#### RAM ####
RAM (Random Access Memory) is the most commoly used type of computer memory, and allows for any one unit of information within that memory to be accessed without affecting any of the others. It is the memory which software and applications occupy in order to run while a computer is in use, and is erased each time a computer is shut down.

#### Partition ####
On a given device, such as a hard drive or USB flash drive with a set amount of memory, users have the option of dividing the total memory into smaller, divided containers. These containers, known as partitions, can be used to store data, applications, or even whole operating systems. A partition can also be the entire device memory - in that case, a device would have only one partition.

#### Partition Scheme ####
When a device has one or more partitions, it still needs to have a way to actually load or boot those partitions and allow them to be accessed and used. There are several different ways that devices can do this, and these are each called partition schemes. Partition schemes (similar to a boot sequence) are essentially an index of all the partitions on a device, as well as code required to start each one up, like the keys to a car.
<br><br>

### What does this have to do with Tails? ###
Remind the group, after going through the above terms, that live operating systems such as Tails run off of external media like DVDs and USBs - but how does a computer know when to run Tails and when to run its normally installed operating system?

Explain that during this session, participants will learn how to make use of their computer's BIOS and boot sequence to automatically load Tails if it detects that a bootable device (such as USB drive) containing Tails is inserted into the machine. Again, remind the group that Tails leaves no trace of itself, or any activity performed while using it, once disconnected from a machine - this is because it runs on a computer's RAM which, as they've just learned, is automatically erased whenever a computer shuts down.
<br><br>

## Next Steps for Trainers ##

If participants have never encountered Tails before, and will be installing and using it for the first time, the Installing, Launching, and Replicating Tails Deepening is required material before moving on to any of the other more topic-specific Deepening sessions.

The other Deepening sessions available for Tails, which are also relevant to other topics and sub-topics within the LevelUp training curriculum, are largely built around a specific use case for Tails. To aid in structuring your training session, the relevant sub-topics are listed below with the appropriate Deepening(s) included for each:

#### Private Communications ####

- **Deepening:** **Private Communications with Tails (Basic) [LINK]**
<br>
- **Deepening:** **Private Communications with Tails (Advanced) [LINK]**

#### Malware ####

- **Deepening:** **Using Tails to Test Suspicious Files [LINK]**

#### Secure Data Storage ####

- **Deepening:** **Storing Confidential Information in Tails [LINK]**

#### Destroying Data ####

- **Deepening: Viewing and Deleting Metadata in Tails with MAT [LINK]**
