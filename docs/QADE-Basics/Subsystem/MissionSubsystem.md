---
title: Mission Subsystem
sidebar_position: 1
---
<hr  /> 

![Banner](/img/QadeBanner.png)


## Accessing the Mission Subsystem
<hr  />

The **Mission Subsystem** can be accessed from anywhere.
Right-click in a blueprint graph and search 'Get MissionSubsystem'. <br  />
![GetMissionSubsystem](/img/QadeBasics/MissionSubsystem/GetMissionSubsystem.png) <br  />
:::info
No Manual setup for the **Mission Subsystem** is required.
:::


## Mission Subsystem Functionality
<hr  />

 ### Start Mission
 You can start a mission from anywhere at anytime, drag out from the **Mission Subsystem** and search for 'Start Mission' or look under Qade>Mission Subsystem. <br  />
 ![StartMission](/img/QadeBasics/MissionSubsystem/StartMission.png) <br  />
 **Start Mission** has 3 arguments:
     * *Target* is the **Mission Subsystem**.
     * *Mission to Start* is a **Mission Graph** that can be chosen in the node or through a reference in the blueprint.
     * *Select Mission* is a bool, when true it will automatically change the new mission to the **Selected Mission**.

 ### Stop Mission
 Using the **Stop Mission** function, you choose to *Finish* or *Fail* a mission. The mission will be added to the *Completed Missions* or *Failed Missions* list respectively. <br  />
 ![StopMission](/img/QadeBasics/MissionSubsystem/StopMission.png) <br  />
 **Stop Mission** has 3 arguments:
     * *Target* is the **Mission Subsystem**.
     * *Mission to Stop* is the mission that you wish to stop.
     * *Is Finished* is a bool, when true the mission is considered *finished*, when false the mission is considered *failed*.

 ### Cancel Mission
 When you want to cancel a mission entirely and not have it listed as failed or complete. you can use the **Cancel Mission** Functions. <br  />
 ![CancelMission](/img/QadeBasics/MissionSubsystem/CancelMission.png) <br  />
 **Cancel Mission** has 2 arguments:
     * *Target* is the **Mission Subsystem**.
     * *Mission to Stop* is the mission you wish to cancel.

 ### Restart Mission
 To restart a mission you just stopped or cancelled. You call the **Restart Mission** function right after **Stop mission** or **Cancel Mission**. <br  />
 ![RestartMission](/img/QadeBasics/MissionSubsystem/RestartMission.png) <br  />
 **Restart Mission** restarts the last stopped mission.
 :::warning
 **Restart Mission** only restarts the last stopped mission.
 :::

 ### Changed Selected Mission
 The **Selected Mission** is just like an active mission but the player can have focus on that specific mission. It has extra functions to get information about the mission easier and faster. **Change Selected Mission** changes the **Selected Mission** and sends out  events to update relevant information. <br  />
 ![ChangeSelectedMission](/img/QadeBasics/MissionSubsystem/ChangeSelectedMission.png) <br  />
 **Change Selected Mission** has 2 arguments:
     * *Target* is the **Mission Subsystem**.
     * *Mission to Select* is the mission you wish to be the **Selected Mission**.


## Mission Subsystem Functions
<hr  />
 
 ### Get Selected Mission
 The **Selected Mission** is a normal **Active Mission** that has some more direct access so it can be used easily by called the **Selected Mission** specific functions. <br  />
 ![GetSelectedMission](/img/QadeBasics/MissionSubsystem/GetSelectedMission.png) <br  />
 Returns the currently **selected mission**.

 ### Get Active Missions
 **Active Missions** are all accepted and ongoing missions that can currently be completed. <br  />
 ![GetActiveMission](/img/QadeBasics/MissionSubsystem/GetActiveMissions.png) <br  />
 Returns an array of **Active Missions**.

 ### Get Completed Missions
 **Completed Missions** Are the successfully finished missions. <br  />
 ![GetCompletedMission](/img/QadeBasics/MissionSubsystem/GetCompletedMissions.png) <br  />
 Returns an array of **Completed Missions**.

 ### Get Failed Missions
 **Failed Missions** are missions that finished in a failed state. This can happen because of choices made during the mission, failing an objective or not finishing an objective in time. <br  />
 ![GetFailedMission](/img/QadeBasics/MissionSubsystem/GetFailedMissions.png) <br  />
 Returns an array of **Failed Missions**.

 ### Get Cancelled Missions
 **Cancelled Missions** are missions that did not finish or fail, but got forcibly stopped. <br  />
 ![GetCancelledMission](/img/QadeBasics/MissionSubsystem/GetCancelledMissions.png) <br  />
 Returns an array of **Cancelled Missions**.


## Dialogue Subsystem Objective Functions
<hr  />
 
 ### Get All Selected Objectives
 **Get All Selected Objectives** returns all *objectives* of the currently **Selected Mission**. <br  />
 ![GetAllSelectedObjectives](/img/QadeBasics/MissionSubsystem/GetAllSelectedObjectives.png) <br  />
 Returns an array of all *Objectives* of the **Selected Mission**.
 
 ### Get Selected Objectives of State
 **Get Selected Objectives of State** returns all *Objectives* of a specified state from the **Selected Mission**. <br  />
 ![GetSelectedObjectivesOfState](/img/QadeBasics/MissionSubsystem/GetSelectedObjectivesOfState.png) <br  />
 Returns an array of all *Objectives of a specific state* of the **Selected Mission**.

 ### Get Selected Objectives of any State
 **Get Selected Objectives of any State** returns all *Objectives* that are currently *Active*, *Completed* or *Failed*, and are currently relevant to the mission. <br  />
 ![GetSelectedObjectivesOfAnyState](/img/QadeBasics/MissionSubsystem/GetSelectedObjectivesOfAnyState.png) <br  />
 Returns an array of all *Objectives* that are or have been active at the same time regardless of their state.

 ### Get All Objectives
 **Get All Objectives** returns all objectives of the **Active Mission** of you choosing. <br  />
 ![GetAllObjectives](/img/QadeBasics/MissionSubsystem/GetAllObjectives.png) <br  />
 Returns an array of all *Objectives* from the given *Mission*. <br  />
 **Get All Objectives** has 2 arguments:
     * *Target* is the **Mission Subsystem**.
     * *Mission* is the mission to get the *Objectives* from.
 :::info
**Get All Objectives** will give you all the *Objectives* regardless of whether the mission is not started, started or finished.
 :::
 
 ### Get Objectives of state
 Get Objectives of State returns all *Objectives* of a specific state from a *Mission* of your choosing. <br  />
 ![GetAllObjectivesOfState](/img/QadeBasics/MissionSubsystem/GetAllObjectivesOfState.png) <br  />
 Returns an array Objectives of a specifiec state from the *Mission* of your choosing. <br  />
 **Get Objectives Of State** has 3 arguments:
     * *Target* is the **Mission Subsystem**.
     * *Mission* is the mission to get the *Objectives* from.
     * *State* is the state of the *Objectives* to get.


## Mission Subsystem Delegate Events
<hr  />

 *Delegate Events* are dispatchers that you can subscribe events to. When the dispatcher is broadcasted all events subscribed to that dispatcher will be executed.
 :::info
 *Delegate Events* are mainly used UI interactions.
 :::

 ### On Mission Started
 **On Mission Started** delegate is broadcasted when a new *Mission* has started through the **Mission Subsystem** **Start Mission** function. <br  />
 ![OnMissionStarted](/img/QadeBasics/MissionSubsystem/OnMissionStarted_Delegate.png) <br  />
 *Bound event* returns the *Mission* that was started.
 :::info
 *Assign* and *Bind* create the same *Bind* function, but *Assign* creates an *Event* as well.
 :::

 ### On Mission Completed
 **On Mission Completed** delegate is broadcasted when a *Mission* has successfully *Finished* on its own, or forcefully through the **Mission Subsystem** **Stop Mission** function. <br  />
 ![OnMissionCompleted](/img/QadeBasics/MissionSubsystem/OnMissionCompleted_Delegate.png) <br  />
 *Bound event* returns the *Mission* that was completed.
 :::info
 *Assign* and *Bind* create the same *Bind* function, but *Assign* creates an *Event* as well.
 :::

 ### On Mission Aborted
 **On Mission Aborted** delegate is broadcasted when a *Mission* has been *Cancelled* on its own or forcefully through the **Mission Subsystem** **Cancel Mission** function. <br  />
 ![OnMissionAborted](/img/QadeBasics/MissionSubsystem/OnMissionAborted_Delegate.png) <br  />
 *Bound event* returns the *Mission* that was aborted.
 :::info
 *Assign* and *Bind* create the same *Bind* function, but *Assign* creates an *Event* as well.
 :::

 ### On Mission Failed
 **On Mission Failed** delegate is broadcasted when a *Mission* has failed on its own or forcefully through the **Mission Subsystem** **Stop Mission** function. <br  />
 ![OnMissionFailed](/img/QadeBasics/MissionSubsystem/OnMissionFailed_Delegate.png) <br  />
 *Bound event* returns the *Mission* that was failed.
 :::info
 *Assign* and *Bind* create the same *Bind* function, but *Assign* creates an *Event* as well.
 :::
 
 ### On Selected Changed
 **On Selected Changed** delegate is broadcasted when the **Selected Mission** has changed to a different *Mission* by using the **Change Selected Mission** function. <br  />
 ![OnSelectedChanged](/img/QadeBasics/MissionSubsystem/OnSelectedChanged_Delegate.png) <br  />
 :::info
 *Assign* and *Bind* create the same *Bind* function, but *Assign* creates an *Event* as well.
 :::

 ### On Objective Started
 **On Objective Started** delegate is broadcasted when an *Objective* has started in any **Active Mission**. <br  />
 ![OnObjectiveStarted](/img/QadeBasics/MissionSubsystem/OnObjectiveStarted_Delegate.png) <br  />
 *Bound event* returns the *Objective* that was started.
 :::info
 *Assign* and *Bind* create the same *Bind* function, but *Assign* creates an *Event* as well.
 :::

  ### On Objective Ended
 **On Objective Ended** delegate is broadcasted when an *Objective* has ended in any **Active Mission**. <br  />
 ![OnObjectiveEnded](/img/QadeBasics/MissionSubsystem/OnObjectiveEnded_Delegate.png) <br  />
 *Bound event* returns the *Objective* that was ended.
 :::info
 *Assign* and *Bind* create the same *Bind* function, but *Assign* creates an *Event* as well.
 :::

 ### On Active Updated
 **On Active Updated** delegate is broadcasted when any **Active Mission** has been updated.
 :::info
 **On Active Updated** can be used to notify the player on *Mission* updates that are not the **Selected Mission**
 ::: <br  />
 ![OnActiveUpdated](/img/QadeBasics/MissionSubsystem/OnActiveUpdated_Delegate.png) <br  />
 *Bound event* returns the *Mission* that was updated.
 :::info
 *Assign* and *Bind* create the same *Bind* function, but *Assign* creates an *Event* as well.
 :::

 ### On Checkpoint Updated
 **On Checkpoint Updated** delegate is broadcasted when a *Checkpoint* is set or updated. <br  />
 ![OnCheckpointUpdated](/img/QadeBasics/MissionSubsystem/OnCheckpointUpdated_Delegate.png) <br  />
 :::info
 *Assign* and *Bind* create the same *Bind* function, but *Assign* creates an *Event* as well.
 :::
 :::info
 In Qade 2.1 use **Get Active Checkpoint** to get the *Checkpoint*.
 :::


## Global Database
<hr  />

The **Mission Subsystem** has a function to get the *Global Data Asset*. the *Global Data Asset* can be set in the ***Project settings***. <br  />
 ![GetGlobalDataAsset](/img/QadeBasics/MissionSubsystem/GetGlobalDataAsset.png) <br  />
 Returns the currenly active *Checkpoint*.