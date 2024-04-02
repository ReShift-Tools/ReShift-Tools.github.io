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

## Subsystem Functionality
<hr  />

### Start Dialogue
You can start a Dialogue from anywhere at anytime, drag out from the **Dialogue Subsystem** and search for 'Start Dialogue' or look under Qade>Dialogue Subsystem.

![StartDialogue](/img/QadeBasics/DialogueSubsystem/StartDialogue.png)

**Start Dialogue** has 2 arguments:
    * *Target* is the **Dialgoue Subsystem**.
    * *Dialogue to Start* is a **Dialgoue Graph** that can be chosen in the node or through a reference in the blueprint.

**has 1 return value**
    * *Return Value* is a bool, when true it means that the dialogue succesfully has started.

### Skip Current Dialogue
Using the **Skip Current Dialogue** function, will skip/stop the current selected dialogue.

![Skip Dialogue](/img/QadeBasics/DialogueSubsystem/SkipDialogue.png)

**Skip Current Dialogue** has 1 arguments:
    * *Target* is the **Dialgoue Subsystem**.

**has 1 return value**
    * *Return Value* is a bool, when true it means that the dialogue succesfully has started.