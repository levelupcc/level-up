---
layout: adids
title: "Deepening: Installing, Launching, and Replicating Tails"
author: Michael Carbone, Nick Sera-Leyva
parent: "Safer, Anonymous Workspaces using Tails"
summary: "Participants learn how to download Tails, confirm the authenticity of the Tails .iso file (the original file that must be downloaded from the Tails website), install Tails on external media, and create a new Tails USB stick or DVD from an existing Tails installation."
permalink: /curriculum/safer-workspaces/tails/deepening/install-boot-clone/
breadcrumb: "D: Installing, Launching, and Replicating Tails"
date: 2015-05-00
adids: Deepening
duration: 60 minutes
platform: Linux, Mac OS, Windows
---
## Materials to Prepare ##

- USB or DVD with Tails pre-installed.
- External DVD reader if necessary.
- Laptop and projector for demonstration.
- Blank DVDs or USB flash drives of at least 2GB (4GB if you intend to discuss the persistence feature in Tails; you will need at least 1 DVD and 1 USB, or 2 USBs, per participant)
- Pre-downloaded Tails disk image (.iso) file to distribute to participants ([https://tails.boum.org/download/index.en.html#download_iso](https://tails.boum.org/download/index.en.html#download_iso)); this file is quite large and may take awhile to download.
<br><br>

## Installing Tails ##

### Step 1: Background ###

**To start, you may want to explain the following:**



- The purpose of these exercises is to show you how to download and install Tails, verify a Tails .iso file so that you can authenticate a download of a new version of Tails in the future, and create new Tails disks and USB drives for friends and colleagues.



- Distribute either the blank DVDs or USB flash drives, and the pre-downloaded Tails .iso images, to the group. Begin by explaining that Tails, as a live operating system, can be run from an external media device - however, in order for this to work properly, dragging and dropping Tails like regular file won't work.



- If you're working with DVDs, the Tails image must be burned to the DVD; if you're using USB flash drives, the image must be installed on the drive using a third-party application such as **Universal USB Installer** ([http://www.pendrivelinux.com/universal-usb-installer-easy-as-1-2-3/](http://www.pendrivelinux.com/universal-usb-installer-easy-as-1-2-3/)).

**Note:** It is important that any USBs or DVDs used during these exercises be *blank*, or at the very least contain **no information that is not backed up elsewhere.** Installing Tails on a media device deletes *all* data on that device; however, this deletion is not 100% secure and can potentially be recovered.
<br><br>

### Step 2: Installing Tails ###

Walk participants through the relevant installation process(es) for the external media provided and their computer's operating system.

#### Installing Tails on DVD (Windows & Mac) ####
#### Windows: ####



- Ask participants to find the Tails .iso on their machine; have them right-click on the Tails image and select **'Burn disc image'**.

- Participants will then need to select the drive on their machine to which the disc image will be burnt from a dropdown menu.

- Once they've selected it, ask them to also check the box for **'Verify disc after burning'** to ensure that it's been burned correctly.

- Once this has been done, ask everyone to click **'Burn'** and wait for the process to complete.

#### Mac OSX: ####

- Ask participants to launch Disk Utility (which can be found by going to **Applications -> Utilities -> Disk Utility**), and then to insert their blank DVDs into the drive.

- Particpants will the need to locate the **Tails .iso image** on their machines, dragging and dropping it into the left pane of the Disk utility window directly beneath the section displaying the drive with the blank DVD.

- With the Tails image highlighted, have everyone click on the **'Burn'** icon in the toolbar above.

- On the next pop-up window, have participants check the **'Verify burned data'** box beneath **'After Burning'** - then, everyone will click on the "Burn" button.

- Once burning is complete, the data will be verified to ensure that the burning process completed correctly.
<br><br>


#### Installing Tails on a USB Flash Drive (Windows) ####


- Distribute blank USB flash drives to the group, and have everyone insert them into their computer's USB port.

- **Remember** - the blank drives must have at least 2GB of storage space, and at least 4GB if you plan to discuss and demonstrate setting up a persistent volume within Tails.

- Have participants download and install **Universal USB Installer** ([http://www.pendrivelinux.com/universal-usb-installer-easy-as-1-2-3/](http://www.pendrivelinux.com/universal-usb-installer-easy-as-1-2-3/)), ensuring that they are downloading and installing version 1.9.5.4 or later.

- Mention to the group that this application will allow them to properly install and mount the Tails .iso so they can be run directly from their USB drives, **reminding them that dragging and dropping the .iso like a normal file won't allow for this.**

- Once the installation process has completed, have participants launch **Universal USB Installer:**


	- **Step 1** on the first screen will prompt users to select a Linux Distribution from a dropdown - Tails will appear in this list (probably as T(A)ILS), which should be selected.

	- **Step 2** will prompt users to select an applicable .iso - everyone should use Browse to locate the Tails .iso on their computer and Open it.

	- **Step 3** will ask for a USB drive to be selected - everyone should select the drive containing their blank USB from the dropdown.

Once the above steps have been completed, have participants click **'Create'** - this will format the USB drive and mount the Tails disc image, allowing it to be booted directly from USB.

Once the process has been completed, have the group safely eject their formatted USBs.

**Note:** these steps are also outlined, with helpful screenshots, on the **Tails website:** [https://tails.boum.org/doc/first_steps/installation/manual/windows/index.en.html](https://tails.boum.org/doc/first_steps/installation/manual/windows/index.en.html)
<br><br>

## Launching (or Booting) Tails: ##

Now that participants each have a DVD or USB with Tails properly mounted and configured, walk through the process of launching Tails for the first time.

### Step 1: Background ###


**Before beginning, however, it may be useful to explain some basics about Live DVDs & USBs, and Tails in particular:**

- While a computer has an operating system (likely Windows or Mac OS X) installed on the hard drive that boots every time you start your computer, you can actually boot into another operating system using specially configured "live" USB memory sticks or DVDs that you plug into the computer.

- These external operating systems do not install anything onto the hard drive of a computer, but just run in memory.

- Sometimes, computers require a little help before they are able to boot an operating system from a USB drive or DVD.

- Windows and Linux computers may need the user to access the BIOS or Boot Menu when starting up; Apple computers will require the user to press the shortcut key to enter the Startup Manager at boot.

### Step 2: Launching (or Booting) Tails ###

#### Launching Tails from a Live DVD or USB (Windows) ####

Because many manufacturers make Windows PCs (and several models, as well), it’s not possible to provide one set of instructions that applies to all variations.

- In many cases, the manufacturer will explicitly say which key to press during the boot process on the **“splash screen”** – the very first screen with the company’s logo.

- However, if that is not the case for some participants, they should be able to find instructions for their specific make and model on the manufacturer’s website.

- There are also a handful of websites that try to provide a comprehensive list for many manufacturers, such as **CraftedFlash** ([https://craftedflash.com/info/how-boot-computer-from-usb-flash-drive](https://craftedflash.com/info/how-boot-computer-from-usb-flash-drive)).

- If for some reason the USB stick is not visible in the Boot Menu, trainers may need to help participants access the BIOS on their PC to enable USB booting.

- The method for accessing a PC’s BIOS is as varied as PCs themselves, and trainers should consult the manufacturer’s website.

**In the event that the manufacturer’s website cannot be reached, we offer the following, general guidelines:**

#### Windows XP, Vista, 7: ####

- Turn off computer, and insert Tails USB/DVD once it has completely shut down.

- Turn on the computer.

- During boot up there should be a notice displayed where one can press a key to enter the BIOS. Which key this is depends on your computer's manufacturer, but is often either **F2, F12, Delete, Esc or Enter**. *If the Windows logo appears, you have missed the opportunity to enter BIOS and will need to restart your computer and try again.*

- Once in BIOS, navigate through the settings to find **"Boot order"**, **"Boot settings"**, or similar.

- Following the on-screen instructions, move your USB/DVD to first priority for booting.

- Save and exit BIOS, which will restart your computer.

- Your computer should boot from USB/DVD after BIOS (rather than your hard drive), and a new screen should appear asking you to select Tails to boot, also providing you the option to boot Tails in safe mode.

- After 5 seconds it will automatically boot Tails normally.

- After loading, you will find yourself on the Tails Greeter page.

#### Windows 8, 8.1 (8.x): ####

Windows 8.x (8.1 or later versions) users may need to disable **“Fast Boot”** to access the device’s BIOS:

- To do this, while running Windows, navigate to the Power menu option, hold Shift, and select Restart.

- This will load The **Advanced Startup Option** Menu, select **Troubleshoot** and under Advanced Options select **UEFI Firmware Settings**.

- Your computer will now reboot into the BIOS.

**Once you are in the BIOS, you should be able to change the boot order as outlined above in Steps 4 through 8.**

- You may also need to disable **Secure Boot, disable UEFI, or enable BIOS Legacy** for the computer to successfully boot from the USB/DVD. (Try to reboot at least once without changing these settings).

- While in the BIOS, you may wish to point out to participants that they can set passwords to prevent tampering in the future.

- Of course, password settings should not be enabled unless the participant is using their own equipment.
<br><br>


#### Launching Tails from a Live DVD or USB (Mac OSX) ####

Some versions of Mac computers have known issues with booting from Tails USB/DVDs, please see the following list on the **Tails website:**
[https://tails.boum.org/support/known_issues/index.en.html#index13h2](https://tails.boum.org/support/known_issues/index.en.html#index13h2)

#### To boot a Mac from a USB/DVD: ####

- Turn off computer, and insert Tails USB/DVD once it has completely shut down.

- Turn on computer, holding the Option key - **do not release the key until Startup Manager has appeared.**

- Within Startup Manager, you should see your USB stick or DVD device included among the choices.

- Select the USB stick or DVD with Tails.

- A new screen should appear asking you if you would like to boot to Tails normally (**“Live”**) or in **Safe Mode**.

- After 5 seconds it will automatically boot Tails normally.

- After loading, you will find yourself on the Tails Greeter.
<br><br>

#### Step 3: Tails Desktop and User Interface ####

Once participants successfully boot into Tails from their live devices, review the **User Interface** and location of key features before proceeding.

**Some topline interface features and menu to highlight for the group include:**

- **Top Navigation Bar**
	- Applications menu
	- Places menu
	- Application Shortcuts for Tor Browser, Claws Mail, Pidgin, KeePassX
	- Notifications area
- **Bottom Panel**
	- Desktop Shortcuts for Computer, amnesia's Home, Trash, Tails Documentation, Report an Error
- **Nautilus File Manager** (via Places menu or Desktop shortcut)

**Note:** An overview of the basic Tails desktop user interface can be found on the **Tails website:**
[https://tails.boum.org/doc/first_steps/introduction_to_gnome_and_the_tails_desktop/index.en.html](https://tails.boum.org/doc/first_steps/introduction_to_gnome_and_the_tails_desktop/index.en.html)
<br><br>

## Replicating (or Cloning) Tails ##

Participants will create a new Tails USB from their existing installation. This exercise will make use of **Tails Installer**, an application available only within Tails that allows for an easier method of formatting and installing on USB drives or SD cards - this process is known as **'cloning'**.

### Step 1: Background ###

**Begin by explaining the following:**

Cloning using Tails Installer is the easiest way for users to replicate and share Tails with their colleagues and contacts. Tails Installer also allows users to create persistent volumes in cloned copies of their original Tails installation.

**Note:** Creating persistent volumes is covered in the **Storing Confidential Information in Tails [LINK]** Deepening section.
<br><br>

### Step 2: Replicating (or Cloning) Tails ###

**Remember:** any USB drive onto which Tails will be installed requires *at least* **2GB** of free space, or **4GB** if you plan to create a **persistent volume** within Tails on that device. **Any data on the device onto which Tails is being installed will be deleted.**

#### Using Tails Installer to Clone Tails onto a USB Drive: ####

- If participants are not still booted into Tails from the previous step, have everyone re-launch and pause when they arrive at the Tails desktop.

- From the Tails Desktop, direct the group towards the Applications menu in the upper-left hand corner; from there, go to Tails and then to Tails Installer (**Applications -> Tails -> Tails Installer**).

- Have participants click the **Clone & Install** button, and then insert their USB drives into their machines.

- In the **Target Device** dropdown menu, the USB drives participants have inserted will now appear - select this device and then click Install Tails, clicking Yes on the following warning screen.

- Tails can now be launched from this new USB drive once installation completes.

**Note:** Persistent volumes can only be created on Tails installations cloned using Tails Installer; any persistent volumes within installations of Tails being cloned to other devices will not be copied.
<br><br>


##Additional Resources##

- **Tails Website** to download [Tails .iso disk image](https://tails.boum.org/download/index.en.html#download_iso)

- **Tails Website** for known issues with [booting from Apple/Mac](https://tails.boum.org/support/known_issues/index.en.html#index13h2)

- **Tails Website** for a [visual guide to the Tails UEFI desktop](https://tails.boum.org/doc/first_steps/introduction_to_gnome_and_the_tails_desktop/index.en.html)

- **Universal USB Installer** for [creating live USBs with Tails](http://www.pendrivelinux.com/universal-usb-installer-easy-as-1-2-3/)

- **CraftedFlash** for instructions by computer manufacturer [to boot from live USBs](https://craftedflash.com/info/how-boot-computer-from-usb-flash-drive)
