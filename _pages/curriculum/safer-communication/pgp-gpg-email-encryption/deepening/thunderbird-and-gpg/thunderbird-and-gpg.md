---
layout: content-page
title: 
author: DJ, Carol Waters
summary: In this Deepening session, participants will learn how to use Thunderbird, Enigmail, and GnuPG to create a PGP/GPG key pair, share and upload public keys, authenticate others' keys, send encrypted and signed emails, and decrypt encrypted emails that they receive.
permalink: /curriculum/safer-communication/pgp-gpg-email-encryption/deepening/thunderbird-and-gpg
date: 2013-03
adids: Deepening
parent: PGP/GPG Email Encryption
breadcrumb: Thunderbird and GPG
duration: 120+ minutes
---
##### *Trainer's Note*
This hands-on Deepening session can be quite long and intensive - the suggested duration provided is quite likely the bare minimum amount of time that will be required to complete it thoroughly. Consider taking a break if the session goes long - especially if you're also installing and configuring a mail account in Thunderbird - and be sure to build in time for questions from participants.

# Materials to Prepare
- Projector and computer, prepped to walkthrough all installation and practice steps alongside participants
- Flipchart and whiteboard with markers

### Prepare either of the following combinations of Thunderbird, GnuPG, and Enigmail:

#### Portable Apps versions on USB (if participants are *not* using their own devices):
- Portable Apps version of [Thunderbird](http://portableapps.com/apps/internet/thunderbird_portable)
- Portable Apps version of [GnuPG](http://portableapps.com/apps/security/gpg-plugin-portable) *with* the [Enigmail](http://www.enigmail.net/index.php/en/) add-on included

#### Downloaded Versions on USB (if participants *are* using their own devices):
- [Thunderbird](https://www.mozilla.org/en-US/thunderbird/)
- [GnuPG](https://www.gnupg.org/) *with* the [Enigmail](http://www.enigmail.net/index.php/en/) add-on included

##### *Trainer's Note*
In either case, have the newest versions of these tools downloaded, checked, and available for participants on USB drives. The Portable Apps version of GnuPG is a bit behind the installable version of GnuPG. It is fine to use as of the time of writing - *but keep an eye on the Portable Apps version.*

### Because of differences in interfaces and usability across platforms, included below are individual Deepenings for Windows/Linux and OSX.
<br><br>

# Deepening - Windows and Linux

## Step 1: Prepare Tools as Needed
Depending on whether you're using portable apps or installing the necessary apps, make sure participants have what they need, and show them where to access Thunderbird. Budget for the additional time this may take.
<br><br>

## Step 2: Register an Email Account in Thunderbird
In order to send and receive emails using PGP/GPG, participants will need to register the email account they would like to use in Thunderbird. Follow the current steps for registering an account in Thunderbird, using either:
- Thunderbird's Account Configuration [3]
- Security-in-a-Box hands-on guide [4]

Once all participants have successfully registered an email account within the Thunderbird client, walkthrough some or all (depending on time) of the various features and securtiy settings in Thunderbird [5] for the group.

##### Participants should be asked to wait until the process is completed before attempting to repeat it themselves - for now, ask them to follow along as you walk them through these steps:
<br><br>

## Step 3: Setup for Encryption Keypair Creation
Demonstrate for participants how to make a **keypair** – this comprises the unique public and private keys that will be associated with their registered email acccount, and are respectively the equivalents of a lockbox (public key) and the key that opens it (private key).

##### See the [Romeo and Juliet - An Encrypted Love Story](/levelup/curriculum/safer-communication/pgp-gpg-email-encryption/activity-discussion/romeo-and-juliet/) Activity & Discussion for reference, if needed.

Launch Thunderbird, with GnuPG and Enigmail installed on the same computer. Open the Key Management window - in the upper right-hand menu, go to **Enigmail** -> **Key Management**.

From the menu, choose **Generate** -> **New Key Pair**; select an email address for which you’d like to generate the keypair. Make sure participants are using the same email address they've registered in Thunderbird for now, and remind them they can add additional email addresses to the same key.

### Passphrases
Users will be asked to create a **passphrase** for this keypair – this passphrase is what helps ensure that only the owner of the key pair's private key is able to use it to decrypt and sign emails.

You may choose to check the box marked **No Passphrase** in the interest of time - however, this *must be acknowledged* to the group during the demonstration. Participants will need to set a passphrase for their keys, and they should enter it into their [Password Manager](/levelup/curriculum/protecting-data/creating-and-managing-strong-passwords/deepening/using-a-password-manager/) - *if they forget it, there is no way of recovering it.*

### Key Expiration and Strength
Expiration for keys are set as a **failsafe** safety feature; users can change the **expiration date** of their keys, setting them to expire at a later date or *never*, and set reminders to extend the expiration date as needed. Setting an expiration date is a good feature to have enabled, in case you lose your key revocation certificate.

Before generating your keypair, go to the **Advanced** tab and point out that the key pair is set at the current recommended minimum encryption strengeth of **2048 RSA**. Participants can also choose to make a "stronger" key of **4096 RSA** which adds a very small amount of time during key generation, and regular decryption and encryption.
<br><br>

## Step 4: Generating an Encryption Key Pair
Now, you can click **Generate Key**. This process can take several minutes - during that time, and before the trainer asks participants to try this on their own, two points can be made:
- You can use the same key for more than one email address.
- Everyone should protect their key with a (preferably encrypted) backup.

##### For the first point
...explain that even though this key pair was seemingly created specifically for one email address, it is in fact possible to go back and add additional email addresses (or *identities*) to this key pair once it has been created. 

##### For the second point
...explain that backing up is important as email encrypted to them using their public key is impossible to decrypt without its associated private key - therefore, protecting these is crucial!
<br><br>

### Creating a Revocation Certificate
Now that your key pair has been created, click **Generate Revocation Certificate** on the next screen and save this to the desktop.

Explain that the revocation key is an “emergency” tool that is used to invalidate your public key, in the event that its private key is lost or stolen. *Just like the private key, the revocation key needs to be protected*. Remember to help participants identify *where* their private key and revocation certficare are currently stored on their device.
<br><br>

## Step 5: Participants Repeat the Process

##### At this point, every participant should to be asked to repeat the above steps themselves to get a feel for the process.
To reinforce the steps of creating a keypair and sending it to someone, the trainer may wish to ask for a volunteer to try the process in front of the class (with helpful coaching from classmates), *or* you can demonstrate from the front of the classroom again while participants simultaneously follow along. Be sure to budget extra time for this session if participants need more 1:1 assistance.

##### Congratulations!
Once everyone has generated a passphrase-protected key pair and a revocation certificate, congratulate the participants for having accomplished the most difficult part of the exercise!
<br><br>

##### *Trainer's Note*
At this point, you may want to consider stopping the session for a break, with possibly an activity or energizer to follow. Get a sense of how participants are feeling at this point, taking your decision from there - if the group seems excited and eager to advance, definitely take advantage of this momentum!
<br><br>

## Step 6: Share Your Public Key
At this stage, participants may now send one another their public keys – *ONLY their public keys*. The private key must **never** be shared or emailed. Alternatively, if the trainer has created a mailing list for the training event, public keys can be sent to that address to reach everyone at once. 

### Sharing Keys By Hand
In Thunderbird, launch the Key Management window - highlight the email address for which a new key pair was generated in the previous steps. Right-click the address and select **Export Keys to File**, making sure to select **Export Public Keys Only** - then, export to a USB flash drive or other external drive for sharing.

You may wish to point out that an in-person exchange of keys is the most secure method because both parties have control of their keys and can plainly see each other. However, that is not always possible.

### Sharing Keys by Email
Follow the same steps as above for Sharing Keys by Hand, except instead of selecting **Export Keys to File** -> **Send Public Keys by Email**.

Fill in the "To:" address field of your email and then hit Send; for the purpose of the exercise, you can either send your key to yourself, or send it to the group’s mailing list for participants to access, if one has been created. Once you're done, have participants repeat the process. 

At this point, explain that these are just two ways for users to share their public keys - mention that public keys can be pasted into the text of an email, or shared via an array of trusted public keyservers (public "directories" into which users upload their public keys for other users to locate and download).
<br><br>

## Step 7: Import a Public Key
This last exercise will have participants add each others' public keys to their “library” of other users' keys - this is also known as a **keyring** or **keychain**. Demonstrate this step first before having participants replicate it, and remind the group not to accidentally share their private keys!

### Import a Public Key by Hand
In Thunderbird, launch the Key Management window; then, receive a USB flash drive with a participant’s public key on it. Within Key Management, choose **File** -> **Import Keys from File**. 

A pop-up window will ask the user to point to the public key(s) that are to be imported - select the public key file saved on the USB flash drive.

### Import a Public Key by Email
In Thunderbird, launch the Key Management window; find an email sent by someone wanting to share their public key, and save that key file somewhere easy to find in the demonstration, such as the Desktop.

Within Key Management, choose **File** -> **Import Keys from File**. A pop-up window will ask the user to point to the public key(s) that were downloaded - select the public key file saved on the Desktop.

Ask participants to repeat the sharing and importing process, until everyone in the group has received everyone else’s public key.
<br><br>

## Step 8: Validate and Sign a Public Key
This exercise emphasizes the importance of confirming the *authenticity* of public keys. Trainers can refer to Security-in-a-Box's [How to Use Enigmail with GnuPG in Thunderbird](https://securityinabox.org/en/guide/thunderbird/windows) hand-on guide, and follow the steps described there.

First, using your own key, demonstrate an example with another particpant; then ask participants to replicate that demonstration *one other participant* to whom they will send a signed and encrypted email during this session. This is in order to save time during this already time intensive, hands-on deepening session.

Don't forget to explain the difference between a traditional (public) signature of a public key versus a "local signature" of someone's key, and the trade-offs of each option:

### Public Signatures
PGP relies on a concept called a **Web of Trust**. This means that when looking for someone's key online, you can see whom else has signed their key as well as the date it was signed. 

While this can help users to make a decision as to whether or not to that key is "trustworthy" before they download it, it also reveals *who else* is authenticating that key as truly belonging to the person indicated as the owner. 

##### It also tells you who knows this person, as well as the date they signed their key.

### Local Signatures
Because public signatures are visible for keys shared online or downloaded, this can raise some issues. If people are signing someone's key publicly, it reveals a certain amount of information about them based on who they know, and the date they signed a given key. 

##### We generally recommend that high-risk participants at a training do local signatures of each others' keys, and that they consider whose signatures they're comfortable having publicly visible on their own keys.
<br><br>

## Step 9: Use Your Keys!
If the previous exercises have been completed and you've confirmed that each step has been followed, participants can send test messages, either to the trainer or to a partner in the group.

As before, you should first demonstrate the process. Explain the difference between signing and encrypting, and explain the features and use cases for each option. Demonstrate and then have participants try the following:
- Composing an email.
- Selecting a recipient whose key has already been imported.
- Choosing the OpenPGP button on that email.
- Selecting “Sign Message.”
- Selecting “Encrypt Message.”
- Sending the message.

After some time, ask the participants to stop for a moment to report whether they have succeeded. It is likely that some participants will find that they have sent or received email that was not encrypted.

If so, the trainer should now review these key messages. If time allows, the trainer can demonstrate the process of creating a per-recipient rule.
<br><br>

## Step 10: Uploading Public Keys
Now that participants have created their key pair, they need to upload them to a public keyserver so others can find and use their public keys. Explain that keyservers are designed to sync with one another on a regular basis, so you don't need to upload your key to every keyserver available online.

### Uploading to Keyservers
Within Key Management, select your key from the list of keys; the follow **Keyserver** -> **Upload Public Keys**.

A pop-up will allow you to confirm that you are uploading your **public key**, as opposed to your private key, which should *not* be uploaded, to a selected server (if you want to upload to a particular server).

If you are training a mixed group of participants using OSX and Windows or Linux, have them upload their key to [pool.sks-keyservers.net](https://sks-keyservers.net/), since this is the only keyserver shared in the defaults of *both* Enigmail and OSX GPGKeychain Access.
<br><br>

## Step 11: Final Wrap-Up and Points

##### Important Point: These applications (Thunderbird, Enigmail and GnuPG) will not encrypt email by default unless directed to do so.

### Default Encryption
You can encrypt all email from an address by default, by viewing that address’s settings in Thunderbird, selecting **OpenPGP Security**, and then checking the box to **Encrypt Messages By Default**. However, your email will not be encrypted unless you have the public key of your recipient. Enigmail will ask you to supply it.

### Per-Recipient Rules
You can also encrypt email to a specific person’s address by default by creating a **per-recipient rule**. To get started, open an email from the person for whom you want to create the rule, right click their address in the From field and select **Create OpenPGP Rule from Address...**

### Full-Disk Encryption
Participants should only store and use PGP/GPG keys on devices they can enable full-disk encryption for; otherwise, their key can be physically accessed by others.

### Attachments
Remind participants that the **titles** of any attachments they send are visible when they send an encrypted email using *Inline PGP*. If they don't want the name of an attachment to be seen by anyone but the recipient, they can either **change the name of the attachment** into something innocuous, or **use MIME/PGP** keeping in mind that it currently works reliably with Mail on OSX, and with Thunderbird & Enigmail on Windows, OSX, and Linux.
<br><br>

# Deepening - OSX

### OSX users will download the [GPG Tools Suite]() which includes...
- MacGPG (GnuPG for OSX)
- GPG Services (a plug-in for using GPG for apps in OSX)
- GPG Keychain
- GPG for Mail.app. 

OSX users can choose to use **Mail.app** or **Thunderbird and Enigmail** for OSX.
<br><br>

## Step 1: Registering an Email Account and Creating a Keypair
If participants choose to use Thunderbird for the first time, use the same steps as the above [Deepening for Windows and Linux](/levelup/curriculum/safer-communication/pgp-gpg-email-encryption/deepening/thunderbird-and-gpg/thunderbird-and-gpg/#Step-1-Prepare-Tools-as-Needed/). If they already have an account in Mail, they can move to the next step. 

- To add a new account to Mail, open it up and follow the instructions. If you need further help, [go here](https://www2.suresupport.com/faq.php/103/634) for screenshots.

### To Create a Keypair...
Participants can do this in Enigmail, but to get them familiar with the GPG Keychain (which has a much nicer interface), we recommend [following these steps](http://support.gpgtools.org/kb/how-to/first-steps-where-do-i-start-where-do-i-begin) to generate a keypair.
<br><br>

## Step 2: Sharing Your Key

### To share via email in Thunderbird, the steps are the same as for Windows and Linux users.
Similar to Enigmail and Thunderbird in Windows and Linux, select the key and either right-click and select **Export...** or select the key and select **File > Export** in the menu. The typical Finder window pops up with the short key ID as the file title, and ASCII as the default format option (in addition to Binary).

Under this, you'll see a box that says **Allow secret key export** which is *not* checked by default. Mention to users that the only time they would select this is if they were backing up their key in an encrypted drive. Participants can then save the file to a USB and [follow the steps above](/levelup/curriculum/safer-communication/pgp-gpg-email-encryption/deepening/thunderbird-and-gpg/thunderbird-and-gpg/#Step-1-Prepare-Tools-as-Needed/).
<br><br>

## Step 3: Importing a Public Key
Similar to Enigmail and Thunderbird in Windows and Linux, go to **File > Import** and select the key you want to import your desktop or external drive - a USB in this case.

### To import from an email attachment in Thunderbird... 
Choose **Save** next to the attachment in the decrypted email, and save it to the desktop, or elsewhere as preferred. Then, go to **File** -> **Import** in GPGTools.

### To import from an email attachment in Mail...
Choose either **File > Save Attachments** in the menu, or right-click on the attached public key and choose **Save Attachment**.
<br><br>

## Step 4: Validating and Signing Keys
To see the fingerprint of a key, either click on the **Info** button at the top of the GPG Keychain window, or right-click and choose **Info**. Walk participants through the various pieces of information in here, including the key fingerprint under the **Key** tab.

### To Sign a Key...
Right-click on the key in the GPG Keychain window, or select **Key** -> **Sign** in the menu. Then follow the directions from the [Windows and Linux Deepening](/levelup/curriculum/safer-communication/pgp-gpg-email-encryption/deepening/thunderbird-and-gpg/thunderbird-and-gpg/#Step-1-Prepare-Tools-as-Needed/) section above about signing, setting an expiration date, and the tradeoffs between local and public key signatures.

##### Tell participants that you will not be able to send mail in either Thunderbird or Mail if keys are not signed!
<br><br>

## Step 5: Use it!
Sending signed and encrypted emails in Thunderbird is the same as the directions for [Windows and Linux]() above.

### To send signed and encrypted emails in Mail... 
Describe the GPG options in a new message. In the top right corner of a new message, there will be two options: **OpenGPG** and **S/MIME**. Describe the differences between these, and suggest that they use OpenGPG unless they are communicating with someone they know uses S/MIME only, since many mail clients have issues with S/MIME emails.

Under the **Subject line**, participants will see a small unlocked lock and a certificate symbol with a checkmark in it:
- Click on the lock to send an *encrypted* email.
- Click on the "cert" icon to send a *signed* email.
<br><br>

## Step 6: Uploading Your Public Key
To upload participants' public keys, have them either either right-click on their key and choose **Send Public Key to Keyserver** or select **Key** -> **Send Public Key to Keyserver** in the menu.

If you are having participants practice locating each others' keys in keyservers, have participants take this step *before* uploading participants' public keys to a Keyserver. Go to **Preferences**, and select [pool.sks-keyservers.net](https://sks-keyservers.net/) as the top keyserver - this is the only default keyserver shared between Enigmail and OpenGPG Keychain.
<br><br>




