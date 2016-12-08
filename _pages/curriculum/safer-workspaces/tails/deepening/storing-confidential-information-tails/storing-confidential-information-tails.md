---
layout: content-page
title: "Deepening: Storing Confidential Information in Tails"
author: Michael Carbone, Nick Sera-Leyva
parent: Using Tails
summary: "Participants learn to enable persistence, and/or create and access an encrypted USB in order to save settings and store documents within Tails."
permalink: /curriculum/safer-workspaces/tails/deepening/storing-confidential-information-tails/
breadcrumb: "Storing Confidential Information in Tails"
date: 2015-05
adids: Deepening
duration: 45-60 minutes
platform: Linux, Mac OS, Windows
---
# Materials to Prepare
- Live USB or DVD with Tails
- External DVD reader if necessary
- Laptop and projector for demonstration
- Blank USB flash drives (or SD cards)
<br><br>

# Deepening
Tails is a relatively easy-to-use and hard-to-misuse workspace for handling confidential documents. By enabling a feature called persistence, users can configure Tails to save created data within the operating system in what's called a persistent folder.

## Step 1: Safe Storage within Tails?
As participants get prepared, you may wish to set the stage for this Deepening exercise by explaining that there are **two methods** of securely storing confidential data in Tails:
- **Enabling a persistent volume** with your Tails USB (Tails DVDs cannot implement this feature);
- **Creating a separate, encrypted, removable disk** such as a USB or SD card that you use in conjunction with Tails.

Before beginning, you may wish to remind the participants that an initial installation of Tails from an image file **cannot** be updated and files cannot be saved to it; however, by enabling a feature called **persistence**, users can configure Tails to save created data within the operating system in what's called a **persistent folder**.
- Creating a second-generation installation of Tails allows the user to create a persistence folder.
- This is where some settings and documents can be remembered.
- Installing Tails to a writeable USB flash memory stick also allows Tails to update the operating system, without requiring a fresh installation.
<br><br>

## Step 2: Enabling Persistence and Persistent Folders on a Tails USB
Begin by demonstrating to the group how to enable persistence within Tails, with participants following along on their own machines with their own live Tails USBs.

### Creating and Configuring a Persistent Folder
- Boot Tails from a live USB on your laptop and projector setup;
- Go to **Applications Menu -> Tails -> Configure Persistent Volume**.

Explain that the persistent volume is an encrypted partition within a Tails instance, and that partition is further protected by a passphrase of the user's choosing.

- Specify a **passphrase** of your choice in both the **Passphrase** and **Verify Passphrase** text boxes - then click **Create**.
- Once the creation wizard is complete, select the persistence features you would like to enable - in this case, select **Personal Data**. - This will ensure that files in the **Places** -> **Home** -> **Persistent Folder** remain present across multiple Tails sessions.

Once complete, restart Tails to apply the changes. When you arrive at the Tails Greeter, make sure to enable persistence as prompted by inputting your persistence passphrase.
<br><br>

### Opening and Testing a Persistent Folder
Now when you are in Tails, you can navigate to the Persistent folder, where any file you store will be locally encrypted on the USB and accessible across Tails sessions *as long as you activate persistence in the Tails Greeter*.

After completing the above steps demonstrating the process for creating a Persistent folder within Tails to the group, you can now demonstrate the difference in functionality between the **new Persistent folder** and the regular Tails **amnesiac's home folder**. Have participants do the following:
- Create and add a dummy file to their **Persistent folder**.
- Create and add a dummy file to their **amnesiac's home folder**.
- Shutdown Tails, then boot Tails again, this time activating persistence and entering the passphrase.
- Confirm that the amnesiac folder file is *gone*, while the Persistence folder file *remains*.
<br><br>

## Step 3: Creating an Encrypted, Removable USB Drive Accessible via Tails
In this step, explain that participants will learn how to create a **separate, encrypted USB drive** that can be used for storing documents without altering Tails.

#### The encrypted drives which participants will create can *only* be decrypted and accessed via Tails:
- While this is a potential disadvantage in convenience, it provides an added safeguard and barrier against unwanted access to sensitive information.
- A benefit of this feature and method of handling sensitive documents is that it works with Tails DVDs as well, as there’s no need to write to Tails itself.
- The encrypted drive is not created within Tails, but rather encrypted and decrypted using Tails.
<br><br>

### Creating and Formatting an Encrypted USB

#### Begin the exercise by asking participants to do the following:
- Boot to Tails, but this time *without* persistence.
- Tails' built-in utility for creating encrypted volumes is called **GNOME Disk Utility**.
- Launch it by going to **Applications menu -> Accessories -> Disk Utility**.

Once Disk Utility has been launched, have participants insert their blank USB into their computers.
- On the left side of the Disk Utility screen, under **Storage Devices**, the inserted device should now appear.
- Click on the device to proceed.
- On the next screen, participants will erase any existing partitions and/or data on their selected device by clicking Format Drive.

Disk Utility will ask about the desired partitioning scheme for this newly formatted device - leaving the default option of **Master Boot Record** selected should suffice for this exercise. Take a pause here to remind participants of the definitions of *scheme* and *partition* (from the [Staying Anonymous with Tails](/curriculum/safer-workspaces/tails/input/staying-anonymous-using-tails/) Input).

Participants should now see a screen showing the total memory of their USB device, which will be 100% empty. In the lower left-hand corner, click the "plus" symbol next to **Create Partition**.
- On the next screen, a user can configure the size of the encrypted partition they'd like to create within their USB device using a sliding scale.
- This can be part of the memory, or use the total available memory on the device.
- Participants can also **Name** the partition (only visible when the partition is open); for **Type**, the **default value of Ext4** can be left selected.

Ensure that both **Take Ownership of Filesystem** and **Encrypt Underlying Device** are *both* selected; the latter ensures that the partition created on the USB is also encrypted when it is created.
- Click the **Create** button; on the next screen, instruct participants to select a passphrase that they will use to decrypt their partition.
- Once the process completes, users will be able to see the newly created partition within the volume of their USB device.
<br><br>

### Mounting and Testing the Encrypted USB
In this next part of the exercise, walk participants through the process of accessing their encrypted USB within Tails, identifying the device in subsequent Tails sessions, and testing that the encrypted partition and device are working properly.

Once the encrypted device has been created, have participants go to the Tails desktop and find the encrypted partition under the **Places** menu. It should appear under the name that was given to it during the creation process.
- Now, have participants create a dummy file and save it to the encrypted external volume.
- Back within the **Places** menu, go to **Computer -> right-click on the device -> Safely Remove Drive** to safely eject the device.
- Shutdown Tails, and then reboot again (without persistence).
- Once back in the Tails desktop, have the group go to the **Places** menu and locate their encrypted device.

Note that it will **not appear** at first using the name that was originally given to it, but rather as **"[Size of encrypted partition] Encrypted".** If there are multiple encrypted devices present on a machine while using Tails, users will need to remember which is which by the *size of the partition*.
- Have participants mount their encrypted device using their passphrase, at which point it will revert to its originally given name and be open for use.
- Confirm that the dummy file created earlier is still present on the encrypted external volume.
<br><br>

## Step 4: Conclusion and Summary
Wrap this section of the module, reviewing that these are two methods in which Tails can be used to store sensitive documents in a protected manner.

### A few notes to end the session with are below:

##### Tails USBs with persistence enabled are forensically distinct from Tails USBs without persistence enabled.
Tails USBs with persistence enabled carry additional data from session to session in a way that Tails USBs without persistence will not, and thus will have differing data "fingerprints".

##### Only the *contents* of an encrypted volume are hidden.
Both within Tails using an encrypted external drive and on an encrypted drive itself, the presence of an encrypted volume itself is not hidden; however, the data within is only accessible via a passphrase. Participants should protect this passphrase the same way they might protect any other.

##### Opening encrypted volumes on external devices is possible with operating systems other than Linux-based ones like Tails.
However, is not advisable to do so as it may compromise the device's security.
<br><br>
