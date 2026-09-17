---
layout: content-page
title: "Deepening : Hashes" # name your lesson unit
author: Jon Camfield, Robert J. Hansen #The public names / pseudonyms of the authors
parent: "Entropy and Password Security" #The titles of pages this links from
summary: "" #A 1 P summary that will go on listing pages and at the top of this page
permalink: /curriculum/crypto-fundamentals/hashes/deepening/using-hashes/ #The full URL of this, for its primary parent page, e.g. /curriculum/safer-browsing/anonymity-and-circumvention/activity-discussion/offline-circumvention/
breadcrumb: "Working with Entropy" #The name of this lesson
date: 2026-08 #Last updateddate in YYYY-MM
adids: Deepening # ADIDS element(s): Activity and Discussion, Input, Deepening, Synthesis
duration: 60-90 minutes #free form duration/time field
platforms: #Where relevant, what mobile or computing platforms does this apply to: Linux, Mac OS, Windows, Android, iOS

---


# Materials 

* Participants should download and install [QuickerHah](https://github.com/rjhansen/quickerhash/releases).  Participants who don't want to install any new software can reference the command line tool guidance below on all platforms.

# Deepening

All modern operating systems have built in hash creation/verification tools, but they are command-line based. In this session, we will use a graphical tool called QuickerHash, but we will also provide command-line options for users who are willing to use the command line and/or don't want to download additional software.

## Hash Functions

First off, as soon as you start playing with these tools, you full find that there are tons of different hashes you can choose from.

For normal files, passwords, and text, the most common hash algorithms you'll see are likely MD, SHA-1, and SHA-256, and more recently, SHA-384.  Of these, MD5 as mentioned suffers from (relatively) easy collisions, and SHA-1 has been more recently [found vulnerable](https://www.zdnet.com/article/sha-1-collision-attacks-are-now-actually-practical-and-a-looming-danger/) to some collision attacks. *Note: You may also see "SHA-2", which is a family of hashing algorithms of which SHA-256 and SHA-384 are the most 'popular' specific algorithms. To make things even more clear, there is also SHA-3, which similarly has a variety of bit length, like SHA3-384.*

Looking at hashing algorithms for password security, the more advanced tools (classed as Key Derivation Functions), are used - these combine multiple technologies to ensure a baseline of entropy and are built to be very slow to brute force at scale. Examples include bcrypt and scrypt.

[Wikipedia](https://en.wikipedia.org/wiki/Secure_Hash_Algorithms) maintains an article with a chart of the security of these most used hash algorithms, and a similar one for [Key Derivation Functions](https://en.wikipedia.org/wiki/Key_derivation_function)


## Hashing using QuickerHash

Quickerhash was explicitly created for digital safety trainers by Robert J. Hansen. Feedback, suggestions, and requests for changes or improvements are strongly encouraged via adding a [github issue](https://github.com/rjhansen/quickerhash/issues/). 
{: .notice}

[Downloads](https://github.com/rjhansen/quickerhash/releases) are available for MacOS (.dmg files), Windows (.msi) and Linux (.rpm). See [the readme](https://github.com/rjhansen/quickerhash#using-pre-built-binaries) for additional installation instructions.



<!--
To install the rpm on Debian/Ubuntu, you can use `alien` - install it with `sudo apt install alien` and then you can directly install the rpm package with `sudo alien -i RPM PACKAGE`. To uninstall, simply `sudo apt remove quickerhash`. After installing, you will have to run it from /opt/quickerhash/bin/QuickerHash

-->

Let’s get hands on and create and verify some hashes - first up, we'll verify the hash of the quickerhash download file itself!

QuickerHash will start up with a small selection of very common hash algorithms pre-loaded. You can use the drop down menu for Hashes to select additional classes of hashes to experiment with.  

### Hashing Files

* On the QuickerHash [Releases](https://github.com/rjhansen/quickerhash/releases) page, each file has a sha256: with the beginning of a sha256 hash showing, and a "copy" button. Click the copy button for the download you're using (or download a new copy to do this test with).
* Open QuickerHash
* Select the Hash a File tab
* Select the quickerhash file you have downloaded
* Choose which hash you want to compute - in this case, the quickerhash releases use SHA-256
* Compare the hash it created with the hash from the website - you can review it manually, or for better accuracy, paste in the value from the website in the "expected value" field  and see if they match.

Hopefully the values matched! If not, verify you used the same hash algorithm, and are comparing the same downloaded file for both the operating system (Linux, MacOS, Windows) AND version that you downloaded. 

### Text Hashing

* Open QuickerHash
* Select the Hash Text tab
* Choose which hash you want to compute
* Type in text to the text box
* See the hash value in the the grey box below.
* Try a few common strings like Password vs password vs Password! and see how different the hash values are.
* Try a few different algorithms to see how they look, and how long they are (independent of how long your text is!)


<!--
## File Hashing with quickhash

QuickHash is a now-unmaintained tool which will cause some installation challenges. Guide is kept here in hidden text for reference if useful: 

[Download Link](https://www.quickhash-gui.org/downloads/) [Source Code](https://github.com/tedsmith/quickhash). QuickHash provides a [quick guide for installation](https://www.quickhash-gui.org/about-quickhash-gui/faqs/#qaef-1643) across the different platforms.

Let’s get hands on and create and verify some hashes - first up, we'll verify the hash of the quickhash download file itself!

*Note that ideally, you'd use one of the built-in tools below to verify QuickHash, as you're functionally trusting quickhash to verify itself here*

* On the QuickHash [Downloads](https://www.quickhash-gui.org/downloads/) page, click the name (not the download button) of the version you're using, which should take you to a page [like this Windows download page](https://www.quickhash-gui.org/download/quickhash-gui-v3-3-4-for-windows/).
* Find the hash values at the bottom of the page. 
* Open QuickHash
* Select the File tab
* Choose which hash you want to compute - in this case, the quickhash downloads pages provide SHA-1 and SHA-256 hashes, so choose one of those.
 Select the quickhash zip file download
* Compare the hash it created with the hash from the website - you can review it manually, or for better accuracy, paste in the value from the website in the "expected value" field (replacing the '…')

Hopefully the values matched! If not, verify you used the same hash algorithm, and are on the download page for both the operating system (Linux, MacOS, Windows) AND version that you downloaded.

## Text Hashing

* Open QuickHash
* Select the Text tab
* Choose which hash you want to compute
* Type in text to the text box (*if you constantly get errors, type ... in the Expected Hash box or restart QuickHash*)
* See the hash value in the the dark grey box below.
* Try a few common strings like Password vs password vs Password! and see how different the hash values are.
* Try a few different algorithms to see how they look, and how long they are (independent of how long your text is!)

-->

## Command Line Tools

### Windows

In Powershell (v4 or above), you can use the Get-FileHash 'cmdlet' for producing hash values.  For files: 

`Get-FileHash C:\Users\user1\Downloads\Contoso8_1_ENT.iso -Algorithm SHA384 | Format-List`


Powershell unfortunately does not provide a simple way to compute a hash for a string.  With a little work, you can get this set up however: 

 Within PowerShell, type:

```powershell
> $profile
```

… and it will give you back the name of your PowerShell startup file. This file gets executed every time you start PowerShell. Open it in your preferred text editor, add this block of code, save, and exit.

```powershell
function Get-StringHash
{
  param(
    [Parameter(Mandatory=$true)]
    [string] $Text,
    [ValidateSet("MD5", "SHA1", "SHA256", "SHA384", "SHA512")]
    [string] $Algorithm = "SHA256"
  )
  $stream = [System.IO.MemoryStream]::new()
  $writer = [System.IO.StreamWriter]::new($stream)
  $writer.write($Text)
  $writer.flush()
  $stream.position = 0
  return Get-FileHash -InputStream $stream -Algorithm $Algorithm
}
```

You now have a `Get-StringHash` cmdlet that works pretty much identically to `Get-FileHash`. E.g.,

```powershell
> Get-FileHash C:\Users\user1\Downloads\disk_image.iso -Algorithm SHA256
> Get-StringHash "Hello, world!" -Algorithm SHA256
```

<!-- Alt workaround by setting a string as a variable in what Microsoft calls a "stream":

```
$stringAsStream = [System.IO.MemoryStream]::new()
$writer = [System.IO.StreamWriter]::new($stringAsStream)
$writer.write("FOOBAR")
$writer.Flush()
$stringAsStream.Position = 0
Get-FileHash -InputStream $stringAsStream -Algorithm SHA384 | Select-Object Has
```

Microsoft provides [PowerShell GetHash documentation](https://learn.microsoft.com/en-us/powershell/module/microsoft.powershell.utility/get-filehash?view=powershell-7.4)

-->

### MacOS and Linux

In your Terminal program or directly in a command line, you have a variety of options in both OSX and Linux to check hashes. The most flexible is the openssl tool (it can also do a wide variety of other cryptographic tricks!).

You can get a list of all the hash functions openssl supports with

`openssl dgst -list`

To get a hash of a short text string, use this command, replacing FOOBAR with your text (and selecting the hash, here using SHA-3)

`printf FOOBAR | openssl dgst -sha3-256`

To get a hash of a file, use this command, replacing FILENAME with the path to the file you want to hash (and selecting the hash, here using SHA-3):

`openssl dgst -md5 FILENAME`

*Of note, in Ubuntu, you can also install **nautilus-gtkhash** (in Ubuntu 22 and before) or [Quick File Hasher](https://github.com/dd-se/nautilus-extension-quick-file-hasher) to add a right-click menu tab that will generate hashes for you in the file manager GUI.*
