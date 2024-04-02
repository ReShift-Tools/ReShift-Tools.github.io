---
title: Player Response Node
sidebar_position: 3
---
<hr  /> 

![Banner](/img/QadeBanner.png)

<img align="right" src="/img/QadeBasics/ResponseNodes/PlayerResponse.png"> </img>
## What is it?
A ***Player Reponse Node*** is a reponse from a Player to the NPC during dialogue, basically it contains what the Player is going to tell the player.
And who that Player is. <br/>
Furthermore, when connected to a **sequence node** with other player response nodes also connected to that **sequence node** you will be able to let the player choose an option. 

<br/>

## Properties

**Character**
* **Character Profile**:  This is the profile asset for the character that should talk.

**Audio** (Can be disabled if you don't need it)
* **Sound**: This would be the audio of what the character is going to say.
* **Volume**: The volume level of the audio.
* **Auto Continue**: If enabled it will automatically go to the next node.

**Dialogue**
* **Use Custom Subtitles**: This gives you the option to add subtitles in the node instead of taking it from the audio asset (Only if Audio Is Enabled).
* **Manual Dialogue**: If Enabled, the node will wait for player input before continuing to the next line. (Only if Audio is Disabled).
* **Subtitles/Dialogue**: The text that will appear in the dialogue box or subtitle box below on the screen. 

**Default**
* **PlayerChoice**: This is the text that will show up as a option for the player to choose from.

<img align="Left" width="50%" src="/img/QadeBasics/ResponseNodes/PRManualSettings.png"> </img>
<img align="right" width="50%" src="/img/QadeBasics/ResponseNodes/PRAudioSettings.png"> </img>