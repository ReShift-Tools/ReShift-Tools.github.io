---
title: Dialogue Subsystem
sidebar_position: 2
---
<hr  /> 

![Banner](/img/QadeBanner.png)

## Accessing the Dialogue Subsystem
<hr  />

The **Dialogue Subsystem** can be accessed from anywhere.
Right-click in a blueprint graph and search 'Get DialogueSubsystem'.

![GetDialogueSubsystem](/img/QadeBasics/DialogueSubsystem/GetSubsystem.png)
:::info
No Manual setup for the **Dialogue Subsystem** is required.
:::

## Dialogue Subsystem Functionality
<hr  />

### Start Dialogue
You can start a Dialogue from anywhere at anytime, drag out from the **Dialogue Subsystem** <br /> and search for 'Start Dialogue' or look under Qade>Dialogue System.

![StartDialogue](/img/QadeBasics/DialogueSubsystem/StartDialogue.png)

**Start Dialogue** has 2 arguments:
    * *Target* is the **Dialgoue Subsystem**.
    * *Dialogue to Start* is a **Dialgoue Graph** that can be chosen in the node or through a reference in the blueprint.

**has 1 return value**
    * *Return Value* is a bool, when true it means that the dialogue succesfully has started.

### Abort Active Dialogue
You Abort the active dialogue, drag out from the **Dialogue Subsystem** <br /> and search for 'Abort Active Dialogue' or look under Qade>Dialogue System.

![Skip Dialogue](/img/QadeBasics/DialogueSubsystem/AbortActive.png)

**Abort Active Dialogue** has 1 arguments:
    * *Target* is the **Dialgoue Subsystem**.

**has 1 return value**
    * *Return Value* is a bool, when true it means that the dialogue node has succesfully Aborted.

### Abort Dialogue
You will reset the Dialogue graph you have selected, <br /> drag out from the **Dialogue Subsystem**  and search for 'Abort Dialogue' or look under Qade>Dialogue System.

![Skip Dialogue](/img/QadeBasics/DialogueSubsystem/Abort.png)

**Abort Dialogue** has 1 arguments:
    * *Target* is the **Dialgoue Subsystem**.
    * *Dialogue to abort* is the **Dialgoue graph**, this reset the graph.

**has 1 return value**
    * *Return Value* is a bool, when true it means that the dialogue node has succesfully Aborted.

### Skip Current Dialogue
Using the **Skip Current Dialogue** function, will skip the current active node inside the active dialogue.

![Skip Dialogue](/img/QadeBasics/DialogueSubsystem/SkipDialogue.png)

**Skip Current Dialogue** has 1 arguments:
    * *Target* is the **Dialgoue Subsystem**.

**has 1 return value**
    * *Return Value* is a bool, when true it means that the dialogue node has succesfully skipped.

### Pick choice
Using the **Pick choice** function, will skip the current active node inside the active dialogue.

![Skip Dialogue](/img/QadeBasics/DialogueSubsystem/Pickchoice.png)

**Pick choice** has 2 arguments:
    * *Target* is the **Dialgoue Subsystem**.
    * *Qade Node*, is an int, that is used as index for which **Player Response Node** has been selected
:::info
You would need to setup a system to send the correct index. You can get the list of all the player choices that are active.
:::  


### Toggle auto skip
:::warning
**Toggle auto skip** is still work in progress. it doesn't do anything
:::

## Dialogue Subsystem Getters
<hr />

### Get Active Dialogue
**Dialogue Graph** Returns the active dialogue graph.
### Get Active Node 
**Dialogue node** Returns the active dialogue node 
:::warning
Only gets the first node that is active. We will resolve this issue later
:::  
### Get Active Response
**Response_Node** Returns the current active response
### Get All Player Choices 
**Array Player Response Nodes** Returns all the player reponse nodes.
### Get All Choices Text  
**Array Text** Returns all the player choices text as an example *["I am skipping this dialoge", "I want to continue this mission"]*
### Get All Choices States 
**Array Node States** Returns all the player respones states.

## Dialogue Subsystem Delegate Events
<hr />

### Started Dialogue 
This Delegate will be called whenever a **dialogue has Started**.
### Ended Dialogue 
This Delegate will be called whenever a **dialogue has Ended**.
### Aborted Dialogue
This Delegate will be called whenever a **dialogue has Aborted**.
### Dialogue Started Subtitle
This Delegate will be called whenever a response node needs the subtitle.
### Dialogue Ended Subtitle
This Delegate will be called whenever the response node is done with the subtitle.
### Update Subtitle Dialogue
This Delegate will be called whenever a new line needs to be updated in the subtitle. 
### Pick A choice Dialogue
This Delegate will be called whenever you get the option to pick a choice in the dialogue.
