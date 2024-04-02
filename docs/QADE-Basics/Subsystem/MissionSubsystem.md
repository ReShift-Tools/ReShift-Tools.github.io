---
title: Mission Subsystem
sidebar_position: 1
---
<hr  /> 

![Banner](/img/QadeBanner.png)


## Accessing the Mission Subsystem
<hr  />

The **Mission Subsystem** can be accessed from anywhere.
Right-click in a blueprint graph and search 'Get MissionSubsystem'.

![GetMissionSubsystem](/img/QadeBasics/MissionSubsystem/GetMissionSubsystem.png)

:::info
No Manual setup for the **Mission Subsystem** is required.
:::

## Subsystem Mission Functionality
<hr  />

### Start Mission
You can start a mission from anywhere at anytime, drag out from the **Mission Subsystem** and search for 'Start Mission' or look under Qade>Mission Subsystem.

![StartMission](/img/QadeBasics/MissionSubsystem/StartMission.png)

**Start Mission** has 3 arguments:
    * *Target* is the **Mission Subsystem**.
    * *Mission to Start* is a **Mission Graph** that can be chosen in the node or through a reference in the blueprint.
    * *Select Mission* is a bool, when true it will automatically change the new mission to the **Selected Mission**.

### Stop Mission
Using the **Stop Mission** function, you choose to *Finish* or *Fail* a mission. The mission will be added to the *Completed Missions* or *Failed Missions* list respectively.

![StopMission](/img/QadeBasics/MissionSubsystem/StopMission.png)

**Stop Mission** has 3 arguments:
    * *Target* is the **Mission Subsystem**.
    * *Mission to Stop* is the mission that you wish to stop.
    * *Is Finished* is a bool, when true the mission is considered *finished*, when false the mission is considered *failed*.

### Cancel Mission
When you want to cancel a mission entirely and not have it listed as failed or complete. you can use the **Cancel Mission** Functions.

![CancelMission](/img/QadeBasics/MissionSubsystem/CancelMission.png)

**Cancel Mission** has 2 arguments:
    * *Target* is the **Mission Subsystem**.
    * *Mission to Stop* is the mission you wish to cancel.

### Restart Mission
To restart a mission you just stopped or cancelled. You call the **Restart Mission** function right after **Stop mission** or **Cancel Mission**.

![RestartMission](/img/QadeBasics/MissionSubsystem/RestartMission.png)

**Restart Mission** restarts the last stopped mission.
:::warning
**Restart Mission** only restarts the last stopped mission.
:::

### Changed Selected Mission
The **Selected Mission** is just like an active mission but the player can have focus on that specific mission. It has extra functions to get information about the mission easier and faster. **Change Selected Mission** changes the **Selected Mission** and sends out events to update relevant information.

![ChangeSelectedMission](/img/QadeBasics/MissionSubsystem/ChangeSelectedMission.png)

**Change Selected Mission** has 2 arguments:
    * *Target* is the **Mission Subsystem**.
    * *Mission to Select* is the mission you wish to be the **Selected Mission**.