"use strict";(self.webpackChunkreshift_tools=self.webpackChunkreshift_tools||[]).push([[643],{1465:(e,s,i)=>{i.r(s),i.d(s,{assets:()=>l,contentTitle:()=>r,default:()=>h,frontMatter:()=>d,metadata:()=>c,toc:()=>o});var n=i(4848),t=i(8453);const d={title:"Mission Subsystem",sidebar_position:1},r=void 0,c={id:"QADE-Basics/Subsystem/MissionSubsystem",title:"Mission Subsystem",description:"Banner",source:"@site/docs/QADE-Basics/Subsystem/MissionSubsystem.md",sourceDirName:"QADE-Basics/Subsystem",slug:"/QADE-Basics/Subsystem/MissionSubsystem",permalink:"/docs/QADE-Basics/Subsystem/MissionSubsystem",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Mission Subsystem",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Creating Custom Nodes",permalink:"/docs/QADE-Basics/Missions/Creating Custom Nodes"},next:{title:"Dialogue Subsystem",permalink:"/docs/QADE-Basics/Subsystem/DialogueSubsystem"}},l={},o=[{value:"Accessing the Mission Subsystem",id:"accessing-the-mission-subsystem",level:2},{value:"Mission Subsystem Functionality",id:"mission-subsystem-functionality",level:2},{value:"Start Mission",id:"start-mission",level:3},{value:"Stop Mission",id:"stop-mission",level:3},{value:"Cancel Mission",id:"cancel-mission",level:3},{value:"Restart Mission",id:"restart-mission",level:3},{value:"Changed Selected Mission",id:"changed-selected-mission",level:3},{value:"Mission Subsystem Functions",id:"mission-subsystem-functions",level:2},{value:"Get Selected Mission",id:"get-selected-mission",level:3},{value:"Get Active Missions",id:"get-active-missions",level:3},{value:"Get Completed Missions",id:"get-completed-missions",level:3},{value:"Get Failed Missions",id:"get-failed-missions",level:3},{value:"Get Cancelled Missions",id:"get-cancelled-missions",level:3},{value:"Dialogue Subsystem Objective Functions",id:"dialogue-subsystem-objective-functions",level:2},{value:"Get All Selected Objectives",id:"get-all-selected-objectives",level:3},{value:"Get Selected Objectives of State",id:"get-selected-objectives-of-state",level:3},{value:"Get Selected Objectives of any State",id:"get-selected-objectives-of-any-state",level:3},{value:"Get All Objectives",id:"get-all-objectives",level:3},{value:"Get Objectives of state",id:"get-objectives-of-state",level:3},{value:"Mission Subsystem Delegate Events",id:"mission-subsystem-delegate-events",level:2},{value:"On Mission Started",id:"on-mission-started",level:3},{value:"On Mission Completed",id:"on-mission-completed",level:3},{value:"On Mission Aborted",id:"on-mission-aborted",level:3},{value:"On Mission Failed",id:"on-mission-failed",level:3},{value:"On Selected Changed",id:"on-selected-changed",level:3},{value:"On Objective Started",id:"on-objective-started",level:3},{value:"On Objective Ended",id:"on-objective-ended",level:3},{value:"On Active Updated",id:"on-active-updated",level:3},{value:"On Checkpoint Updated",id:"on-checkpoint-updated",level:3},{value:"Global Database",id:"global-database",level:2}];function a(e){const s={admonition:"admonition",em:"em",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...(0,t.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("hr",{}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.img,{alt:"Banner",src:i(8289).A+"",width:"1864",height:"380"})}),"\n",(0,n.jsx)(s.h2,{id:"accessing-the-mission-subsystem",children:"Accessing the Mission Subsystem"}),"\n",(0,n.jsx)("hr",{}),"\n",(0,n.jsxs)(s.p,{children:["The ",(0,n.jsx)(s.strong,{children:"Mission Subsystem"})," can be accessed from anywhere.\r\nRight-click in a blueprint graph and search 'Get MissionSubsystem'. ",(0,n.jsx)("br",{}),"\r\n",(0,n.jsx)(s.img,{alt:"GetMissionSubsystem",src:i(342).A+"",width:"425",height:"247"})," ",(0,n.jsx)("br",{})]}),"\n",(0,n.jsx)(s.admonition,{type:"info",children:(0,n.jsxs)(s.p,{children:["No Manual setup for the ",(0,n.jsx)(s.strong,{children:"Mission Subsystem"})," is required."]})}),"\n",(0,n.jsx)(s.h2,{id:"mission-subsystem-functionality",children:"Mission Subsystem Functionality"}),"\n",(0,n.jsx)("hr",{}),"\n",(0,n.jsx)(s.h3,{id:"start-mission",children:"Start Mission"}),"\n",(0,n.jsxs)(s.p,{children:["You can start a mission from anywhere at anytime, drag out from the ",(0,n.jsx)(s.strong,{children:"Mission Subsystem"})," and search for 'Start Mission' or look under Qade>Mission Subsystem. ",(0,n.jsx)("br",{}),"\r\n",(0,n.jsx)(s.img,{alt:"StartMission",src:i(5443).A+"",width:"601",height:"384"})," ",(0,n.jsx)("br",{}),"\r\n",(0,n.jsx)(s.strong,{children:"Start Mission"})," has 3 arguments:"]}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.em,{children:"Target"})," is the ",(0,n.jsx)(s.strong,{children:"Mission Subsystem"}),"."]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.em,{children:"Mission to Start"})," is a ",(0,n.jsx)(s.strong,{children:"Mission Graph"})," that can be chosen in the node or through a reference in the blueprint."]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.em,{children:"Select Mission"})," is a bool, when true it will automatically change the new mission to the ",(0,n.jsx)(s.strong,{children:"Selected Mission"}),"."]}),"\n"]}),"\n",(0,n.jsx)(s.h3,{id:"stop-mission",children:"Stop Mission"}),"\n",(0,n.jsxs)(s.p,{children:["Using the ",(0,n.jsx)(s.strong,{children:"Stop Mission"})," function, you choose to ",(0,n.jsx)(s.em,{children:"Finish"})," or ",(0,n.jsx)(s.em,{children:"Fail"})," a mission. The mission will be added to the ",(0,n.jsx)(s.em,{children:"Completed Missions"})," or ",(0,n.jsx)(s.em,{children:"Failed Missions"})," list respectively. ",(0,n.jsx)("br",{}),"\r\n",(0,n.jsx)(s.img,{alt:"StopMission",src:i(7075).A+"",width:"546",height:"370"})," ",(0,n.jsx)("br",{}),"\r\n",(0,n.jsx)(s.strong,{children:"Stop Mission"})," has 3 arguments:"]}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.em,{children:"Target"})," is the ",(0,n.jsx)(s.strong,{children:"Mission Subsystem"}),"."]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.em,{children:"Mission to Stop"})," is the mission that you wish to stop."]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.em,{children:"Is Finished"})," is a bool, when true the mission is considered ",(0,n.jsx)(s.em,{children:"finished"}),", when false the mission is considered ",(0,n.jsx)(s.em,{children:"failed"}),"."]}),"\n"]}),"\n",(0,n.jsx)(s.h3,{id:"cancel-mission",children:"Cancel Mission"}),"\n",(0,n.jsxs)(s.p,{children:["When you want to cancel a mission entirely and not have it listed as failed or complete. you can use the ",(0,n.jsx)(s.strong,{children:"Cancel Mission"})," Functions. ",(0,n.jsx)("br",{}),"\r\n",(0,n.jsx)(s.img,{alt:"CancelMission",src:i(1245).A+"",width:"532",height:"346"})," ",(0,n.jsx)("br",{}),"\r\n",(0,n.jsx)(s.strong,{children:"Cancel Mission"})," has 2 arguments:"]}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.em,{children:"Target"})," is the ",(0,n.jsx)(s.strong,{children:"Mission Subsystem"}),"."]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.em,{children:"Mission to Stop"})," is the mission you wish to cancel."]}),"\n"]}),"\n",(0,n.jsx)(s.h3,{id:"restart-mission",children:"Restart Mission"}),"\n",(0,n.jsxs)(s.p,{children:["To restart a mission you just stopped or cancelled. You call the ",(0,n.jsx)(s.strong,{children:"Restart Mission"})," function right after ",(0,n.jsx)(s.strong,{children:"Stop mission"})," or ",(0,n.jsx)(s.strong,{children:"Cancel Mission"}),". ",(0,n.jsx)("br",{}),"\r\n",(0,n.jsx)(s.img,{alt:"RestartMission",src:i(2028).A+"",width:"800",height:"374"})," ",(0,n.jsx)("br",{}),"\r\n",(0,n.jsx)(s.strong,{children:"Restart Mission"})," restarts the last stopped mission."]}),"\n",(0,n.jsx)(s.admonition,{type:"warning",children:(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.strong,{children:"Restart Mission"})," only restarts the last stopped mission."]})}),"\n",(0,n.jsx)(s.h3,{id:"changed-selected-mission",children:"Changed Selected Mission"}),"\n",(0,n.jsxs)(s.p,{children:["The ",(0,n.jsx)(s.strong,{children:"Selected Mission"})," is just like an active mission but the player can have focus on that specific mission. It has extra functions to get information about the mission easier and faster. ",(0,n.jsx)(s.strong,{children:"Change Selected Mission"})," changes the ",(0,n.jsx)(s.strong,{children:"Selected Mission"})," and sends out  events to update relevant information. ",(0,n.jsx)("br",{}),"\r\n",(0,n.jsx)(s.img,{alt:"ChangeSelectedMission",src:i(9034).A+"",width:"582",height:"419"})," ",(0,n.jsx)("br",{}),"\r\n",(0,n.jsx)(s.strong,{children:"Change Selected Mission"})," has 2 arguments:"]}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.em,{children:"Target"})," is the ",(0,n.jsx)(s.strong,{children:"Mission Subsystem"}),"."]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.em,{children:"Mission to Select"})," is the mission you wish to be the ",(0,n.jsx)(s.strong,{children:"Selected Mission"}),"."]}),"\n"]}),"\n",(0,n.jsx)(s.h2,{id:"mission-subsystem-functions",children:"Mission Subsystem Functions"}),"\n",(0,n.jsx)("hr",{}),"\n",(0,n.jsx)(s.h3,{id:"get-selected-mission",children:"Get Selected Mission"}),"\n",(0,n.jsxs)(s.p,{children:["The ",(0,n.jsx)(s.strong,{children:"Selected Mission"})," is a normal ",(0,n.jsx)(s.strong,{children:"Active Mission"})," that has some more direct access so it can be used easily by called the ",(0,n.jsx)(s.strong,{children:"Selected Mission"})," specific functions. ",(0,n.jsx)("br",{}),"\r\n",(0,n.jsx)(s.img,{alt:"GetSelectedMission",src:i(1298).A+"",width:"532",height:"323"})," ",(0,n.jsx)("br",{}),"\r\nReturns the currently ",(0,n.jsx)(s.strong,{children:"selected mission"}),"."]}),"\n",(0,n.jsx)(s.h3,{id:"get-active-missions",children:"Get Active Missions"}),"\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.strong,{children:"Active Missions"})," are all accepted and ongoing missions that can currently be completed. ",(0,n.jsx)("br",{}),"\r\n",(0,n.jsx)(s.img,{alt:"GetActiveMission",src:i(8154).A+"",width:"534",height:"331"})," ",(0,n.jsx)("br",{}),"\r\nReturns an array of ",(0,n.jsx)(s.strong,{children:"Active Missions"}),"."]}),"\n",(0,n.jsx)(s.h3,{id:"get-completed-missions",children:"Get Completed Missions"}),"\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.strong,{children:"Completed Missions"})," Are the successfully finished missions. ",(0,n.jsx)("br",{}),"\r\n",(0,n.jsx)(s.img,{alt:"GetCompletedMission",src:i(4327).A+"",width:"529",height:"306"})," ",(0,n.jsx)("br",{}),"\r\nReturns an array of ",(0,n.jsx)(s.strong,{children:"Completed Missions"}),"."]}),"\n",(0,n.jsx)(s.h3,{id:"get-failed-missions",children:"Get Failed Missions"}),"\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.strong,{children:"Failed Missions"})," are missions that finished in a failed state. This can happen because of choices made during the mission, failing an objective or not finishing an objective in time. ",(0,n.jsx)("br",{}),"\r\n",(0,n.jsx)(s.img,{alt:"GetFailedMission",src:i(5259).A+"",width:"531",height:"308"})," ",(0,n.jsx)("br",{}),"\r\nReturns an array of ",(0,n.jsx)(s.strong,{children:"Failed Missions"}),"."]}),"\n",(0,n.jsx)(s.h3,{id:"get-cancelled-missions",children:"Get Cancelled Missions"}),"\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.strong,{children:"Cancelled Missions"})," are missions that did not finish or fail, but got forcibly stopped. ",(0,n.jsx)("br",{}),"\r\n",(0,n.jsx)(s.img,{alt:"GetCancelledMission",src:i(3209).A+"",width:"530",height:"306"})," ",(0,n.jsx)("br",{}),"\r\nReturns an array of ",(0,n.jsx)(s.strong,{children:"Cancelled Missions"}),"."]}),"\n",(0,n.jsx)(s.h2,{id:"dialogue-subsystem-objective-functions",children:"Dialogue Subsystem Objective Functions"}),"\n",(0,n.jsx)("hr",{}),"\n",(0,n.jsx)(s.h3,{id:"get-all-selected-objectives",children:"Get All Selected Objectives"}),"\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.strong,{children:"Get All Selected Objectives"})," returns all ",(0,n.jsx)(s.em,{children:"objectives"})," of the currently ",(0,n.jsx)(s.strong,{children:"Selected Mission"}),". ",(0,n.jsx)("br",{}),"\r\n",(0,n.jsx)(s.img,{alt:"GetAllSelectedObjectives",src:i(1403).A+"",width:"535",height:"322"})," ",(0,n.jsx)("br",{}),"\r\nReturns an array of all ",(0,n.jsx)(s.em,{children:"Objectives"})," of the ",(0,n.jsx)(s.strong,{children:"Selected Mission"}),"."]}),"\n",(0,n.jsx)(s.h3,{id:"get-selected-objectives-of-state",children:"Get Selected Objectives of State"}),"\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.strong,{children:"Get Selected Objectives of State"})," returns all ",(0,n.jsx)(s.em,{children:"Objectives"})," of a specified state from the ",(0,n.jsx)(s.strong,{children:"Selected Mission"}),". ",(0,n.jsx)("br",{}),"\r\n",(0,n.jsx)(s.img,{alt:"GetSelectedObjectivesOfState",src:i(5126).A+"",width:"676",height:"340"})," ",(0,n.jsx)("br",{}),"\r\nReturns an array of all ",(0,n.jsx)(s.em,{children:"Objectives of a specific state"})," of the ",(0,n.jsx)(s.strong,{children:"Selected Mission"}),"."]}),"\n",(0,n.jsx)(s.h3,{id:"get-selected-objectives-of-any-state",children:"Get Selected Objectives of any State"}),"\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.strong,{children:"Get Selected Objectives of any State"})," returns all ",(0,n.jsx)(s.em,{children:"Objectives"})," that are currently ",(0,n.jsx)(s.em,{children:"Active"}),", ",(0,n.jsx)(s.em,{children:"Completed"})," or ",(0,n.jsx)(s.em,{children:"Failed"}),", and are currently relevant to the mission. ",(0,n.jsx)("br",{}),"\r\n",(0,n.jsx)(s.img,{alt:"GetSelectedObjectivesOfAnyState",src:i(4384).A+"",width:"582",height:"323"})," ",(0,n.jsx)("br",{}),"\r\nReturns an array of all ",(0,n.jsx)(s.em,{children:"Objectives"})," that are or have been active at the same time regardless of their state."]}),"\n",(0,n.jsx)(s.h3,{id:"get-all-objectives",children:"Get All Objectives"}),"\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.strong,{children:"Get All Objectives"})," returns all objectives of the ",(0,n.jsx)(s.strong,{children:"Active Mission"})," of you choosing. ",(0,n.jsx)("br",{}),"\r\n",(0,n.jsx)(s.img,{alt:"GetAllObjectives",src:i(4492).A+"",width:"599",height:"323"})," ",(0,n.jsx)("br",{}),"\r\nReturns an array of all ",(0,n.jsx)(s.em,{children:"Objectives"})," from the given ",(0,n.jsx)(s.em,{children:"Mission"}),". ",(0,n.jsx)("br",{}),"\r\n",(0,n.jsx)(s.strong,{children:"Get All Objectives"})," has 2 arguments:"]}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.em,{children:"Target"})," is the ",(0,n.jsx)(s.strong,{children:"Mission Subsystem"}),"."]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.em,{children:"Mission"})," is the mission to get the ",(0,n.jsx)(s.em,{children:"Objectives"})," from."]}),"\n"]}),"\n",(0,n.jsx)(s.admonition,{type:"info",children:(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.strong,{children:"Get All Objectives"})," will give you all the ",(0,n.jsx)(s.em,{children:"Objectives"})," regardless of whether the mission is not started, started or finished."]})}),"\n",(0,n.jsx)(s.h3,{id:"get-objectives-of-state",children:"Get Objectives of state"}),"\n",(0,n.jsxs)(s.p,{children:["Get Objectives of State returns all ",(0,n.jsx)(s.em,{children:"Objectives"})," of a specific state from a ",(0,n.jsx)(s.em,{children:"Mission"})," of your choosing. ",(0,n.jsx)("br",{}),"\r\n",(0,n.jsx)(s.img,{alt:"GetAllObjectivesOfState",src:i(6820).A+"",width:"663",height:"389"})," ",(0,n.jsx)("br",{}),"\r\nReturns an array Objectives of a specifiec state from the ",(0,n.jsx)(s.em,{children:"Mission"})," of your choosing. ",(0,n.jsx)("br",{}),"\r\n",(0,n.jsx)(s.strong,{children:"Get Objectives Of State"})," has 3 arguments:"]}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.em,{children:"Target"})," is the ",(0,n.jsx)(s.strong,{children:"Mission Subsystem"}),"."]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.em,{children:"Mission"})," is the mission to get the ",(0,n.jsx)(s.em,{children:"Objectives"})," from."]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.em,{children:"State"})," is the state of the ",(0,n.jsx)(s.em,{children:"Objectives"})," to get."]}),"\n"]}),"\n",(0,n.jsx)(s.h2,{id:"mission-subsystem-delegate-events",children:"Mission Subsystem Delegate Events"}),"\n",(0,n.jsx)("hr",{}),"\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.em,{children:"Delegate Events"})," are dispatchers that you can subscribe events to. When the dispatcher is broadcasted all events subscribed to that dispatcher will be executed."]}),"\n",(0,n.jsx)(s.admonition,{type:"info",children:(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.em,{children:"Delegate Events"})," are mainly used UI interactions."]})}),"\n",(0,n.jsx)(s.h3,{id:"on-mission-started",children:"On Mission Started"}),"\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.strong,{children:"On Mission Started"})," delegate is broadcasted when a new ",(0,n.jsx)(s.em,{children:"Mission"})," has started through the ",(0,n.jsx)(s.strong,{children:"Mission Subsystem"})," ",(0,n.jsx)(s.strong,{children:"Start Mission"})," function. ",(0,n.jsx)("br",{}),"\r\n",(0,n.jsx)(s.img,{alt:"OnMissionStarted",src:i(3025).A+"",width:"580",height:"365"})," ",(0,n.jsx)("br",{}),"\r\n",(0,n.jsx)(s.em,{children:"Bound event"})," returns the ",(0,n.jsx)(s.em,{children:"Mission"})," that was started."]}),"\n",(0,n.jsx)(s.admonition,{type:"info",children:(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.em,{children:"Assign"})," and ",(0,n.jsx)(s.em,{children:"Bind"})," create the same ",(0,n.jsx)(s.em,{children:"Bind"})," function, but ",(0,n.jsx)(s.em,{children:"Assign"})," creates an ",(0,n.jsx)(s.em,{children:"Event"})," as well."]})}),"\n",(0,n.jsx)(s.h3,{id:"on-mission-completed",children:"On Mission Completed"}),"\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.strong,{children:"On Mission Completed"})," delegate is broadcasted when a ",(0,n.jsx)(s.em,{children:"Mission"})," has successfully ",(0,n.jsx)(s.em,{children:"Finished"})," on its own, or forcefully through the ",(0,n.jsx)(s.strong,{children:"Mission Subsystem"})," ",(0,n.jsx)(s.strong,{children:"Stop Mission"})," function. ",(0,n.jsx)("br",{}),"\r\n",(0,n.jsx)(s.img,{alt:"OnMissionCompleted",src:i(8493).A+"",width:"609",height:"365"})," ",(0,n.jsx)("br",{}),"\r\n",(0,n.jsx)(s.em,{children:"Bound event"})," returns the ",(0,n.jsx)(s.em,{children:"Mission"})," that was completed."]}),"\n",(0,n.jsx)(s.admonition,{type:"info",children:(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.em,{children:"Assign"})," and ",(0,n.jsx)(s.em,{children:"Bind"})," create the same ",(0,n.jsx)(s.em,{children:"Bind"})," function, but ",(0,n.jsx)(s.em,{children:"Assign"})," creates an ",(0,n.jsx)(s.em,{children:"Event"})," as well."]})}),"\n",(0,n.jsx)(s.h3,{id:"on-mission-aborted",children:"On Mission Aborted"}),"\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.strong,{children:"On Mission Aborted"})," delegate is broadcasted when a ",(0,n.jsx)(s.em,{children:"Mission"})," has been ",(0,n.jsx)(s.em,{children:"Cancelled"})," on its own or forcefully through the ",(0,n.jsx)(s.strong,{children:"Mission Subsystem"})," ",(0,n.jsx)(s.strong,{children:"Cancel Mission"})," function. ",(0,n.jsx)("br",{}),"\r\n",(0,n.jsx)(s.img,{alt:"OnMissionAborted",src:i(3507).A+"",width:"574",height:"360"})," ",(0,n.jsx)("br",{}),"\r\n",(0,n.jsx)(s.em,{children:"Bound event"})," returns the ",(0,n.jsx)(s.em,{children:"Mission"})," that was aborted."]}),"\n",(0,n.jsx)(s.admonition,{type:"info",children:(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.em,{children:"Assign"})," and ",(0,n.jsx)(s.em,{children:"Bind"})," create the same ",(0,n.jsx)(s.em,{children:"Bind"})," function, but ",(0,n.jsx)(s.em,{children:"Assign"})," creates an ",(0,n.jsx)(s.em,{children:"Event"})," as well."]})}),"\n",(0,n.jsx)(s.h3,{id:"on-mission-failed",children:"On Mission Failed"}),"\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.strong,{children:"On Mission Failed"})," delegate is broadcasted when a ",(0,n.jsx)(s.em,{children:"Mission"})," has failed on its own or forcefully through the ",(0,n.jsx)(s.strong,{children:"Mission Subsystem"})," ",(0,n.jsx)(s.strong,{children:"Stop Mission"})," function. ",(0,n.jsx)("br",{}),"\r\n",(0,n.jsx)(s.img,{alt:"OnMissionFailed",src:i(9571).A+"",width:"561",height:"360"})," ",(0,n.jsx)("br",{}),"\r\n",(0,n.jsx)(s.em,{children:"Bound event"})," returns the ",(0,n.jsx)(s.em,{children:"Mission"})," that was failed."]}),"\n",(0,n.jsx)(s.admonition,{type:"info",children:(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.em,{children:"Assign"})," and ",(0,n.jsx)(s.em,{children:"Bind"})," create the same ",(0,n.jsx)(s.em,{children:"Bind"})," function, but ",(0,n.jsx)(s.em,{children:"Assign"})," creates an ",(0,n.jsx)(s.em,{children:"Event"})," as well."]})}),"\n",(0,n.jsx)(s.h3,{id:"on-selected-changed",children:"On Selected Changed"}),"\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.strong,{children:"On Selected Changed"})," delegate is broadcasted when the ",(0,n.jsx)(s.strong,{children:"Selected Mission"})," has changed to a different ",(0,n.jsx)(s.em,{children:"Mission"})," by using the ",(0,n.jsx)(s.strong,{children:"Change Selected Mission"})," function. ",(0,n.jsx)("br",{}),"\r\n",(0,n.jsx)(s.img,{alt:"OnSelectedChanged",src:i(1185).A+"",width:"595",height:"328"})," ",(0,n.jsx)("br",{})]}),"\n",(0,n.jsx)(s.admonition,{type:"info",children:(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.em,{children:"Assign"})," and ",(0,n.jsx)(s.em,{children:"Bind"})," create the same ",(0,n.jsx)(s.em,{children:"Bind"})," function, but ",(0,n.jsx)(s.em,{children:"Assign"})," creates an ",(0,n.jsx)(s.em,{children:"Event"})," as well."]})}),"\n",(0,n.jsx)(s.h3,{id:"on-objective-started",children:"On Objective Started"}),"\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.strong,{children:"On Objective Started"})," delegate is broadcasted when an ",(0,n.jsx)(s.em,{children:"Objective"})," has started in any ",(0,n.jsx)(s.strong,{children:"Active Mission"}),". ",(0,n.jsx)("br",{}),"\r\n",(0,n.jsx)(s.img,{alt:"OnObjectiveStarted",src:i(7610).A+"",width:"585",height:"362"})," ",(0,n.jsx)("br",{}),"\r\n",(0,n.jsx)(s.em,{children:"Bound event"})," returns the ",(0,n.jsx)(s.em,{children:"Objective"})," that was started."]}),"\n",(0,n.jsx)(s.admonition,{type:"info",children:(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.em,{children:"Assign"})," and ",(0,n.jsx)(s.em,{children:"Bind"})," create the same ",(0,n.jsx)(s.em,{children:"Bind"})," function, but ",(0,n.jsx)(s.em,{children:"Assign"})," creates an ",(0,n.jsx)(s.em,{children:"Event"})," as well."]})}),"\n",(0,n.jsx)(s.h3,{id:"on-objective-ended",children:"On Objective Ended"}),"\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.strong,{children:"On Objective Ended"})," delegate is broadcasted when an ",(0,n.jsx)(s.em,{children:"Objective"})," has ended in any ",(0,n.jsx)(s.strong,{children:"Active Mission"}),". ",(0,n.jsx)("br",{}),"\r\n",(0,n.jsx)(s.img,{alt:"OnObjectiveEnded",src:i(9911).A+"",width:"577",height:"355"})," ",(0,n.jsx)("br",{}),"\r\n",(0,n.jsx)(s.em,{children:"Bound event"})," returns the ",(0,n.jsx)(s.em,{children:"Objective"})," that was ended."]}),"\n",(0,n.jsx)(s.admonition,{type:"info",children:(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.em,{children:"Assign"})," and ",(0,n.jsx)(s.em,{children:"Bind"})," create the same ",(0,n.jsx)(s.em,{children:"Bind"})," function, but ",(0,n.jsx)(s.em,{children:"Assign"})," creates an ",(0,n.jsx)(s.em,{children:"Event"})," as well."]})}),"\n",(0,n.jsx)(s.h3,{id:"on-active-updated",children:"On Active Updated"}),"\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.strong,{children:"On Active Updated"})," delegate is broadcasted when any ",(0,n.jsx)(s.strong,{children:"Active Mission"})," has been updated."]}),"\n",(0,n.jsxs)(s.admonition,{type:"info",children:[(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.strong,{children:"On Active Updated"})," can be used to notify the player on ",(0,n.jsx)(s.em,{children:"Mission"})," updates that are not the ",(0,n.jsx)(s.strong,{children:"Selected Mission"}),"\r\n::: ",(0,n.jsx)("br",{}),"\r\n",(0,n.jsx)(s.img,{alt:"OnActiveUpdated",src:i(7217).A+"",width:"578",height:"358"})," ",(0,n.jsx)("br",{}),"\r\n",(0,n.jsx)(s.em,{children:"Bound event"})," returns the ",(0,n.jsx)(s.em,{children:"Mission"})," that was updated."]}),(0,n.jsx)(s.admonition,{type:"info",children:(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.em,{children:"Assign"})," and ",(0,n.jsx)(s.em,{children:"Bind"})," create the same ",(0,n.jsx)(s.em,{children:"Bind"})," function, but ",(0,n.jsx)(s.em,{children:"Assign"})," creates an ",(0,n.jsx)(s.em,{children:"Event"})," as well."]})})]}),"\n",(0,n.jsx)(s.h3,{id:"on-checkpoint-updated",children:"On Checkpoint Updated"}),"\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.strong,{children:"On Checkpoint Updated"})," delegate is broadcasted when a ",(0,n.jsx)(s.em,{children:"Checkpoint"})," is set or updated. ",(0,n.jsx)("br",{}),"\r\n",(0,n.jsx)(s.img,{alt:"OnCheckpointUpdated",src:i(8189).A+"",width:"614",height:"325"})," ",(0,n.jsx)("br",{})]}),"\n",(0,n.jsx)(s.admonition,{type:"info",children:(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.em,{children:"Assign"})," and ",(0,n.jsx)(s.em,{children:"Bind"})," create the same ",(0,n.jsx)(s.em,{children:"Bind"})," function, but ",(0,n.jsx)(s.em,{children:"Assign"})," creates an ",(0,n.jsx)(s.em,{children:"Event"})," as well."]})}),"\n",(0,n.jsx)(s.admonition,{type:"info",children:(0,n.jsxs)(s.p,{children:["In Qade 2.1 use ",(0,n.jsx)(s.strong,{children:"Get Active Checkpoint"})," to get the ",(0,n.jsx)(s.em,{children:"Checkpoint"}),"."]})}),"\n",(0,n.jsx)(s.h2,{id:"global-database",children:"Global Database"}),"\n",(0,n.jsx)("hr",{}),"\n",(0,n.jsxs)(s.p,{children:["The ",(0,n.jsx)(s.strong,{children:"Mission Subsystem"})," has a function to get the ",(0,n.jsx)(s.em,{children:"Global Data Asset"}),". the ",(0,n.jsx)(s.em,{children:"Global Data Asset"})," can be set in the ",(0,n.jsx)(s.em,{children:(0,n.jsx)(s.strong,{children:"Project settings"})}),". ",(0,n.jsx)("br",{}),"\r\n",(0,n.jsx)(s.img,{alt:"GetGlobalDataAsset",src:i(1538).A+"",width:"522",height:"277"})," ",(0,n.jsx)("br",{}),"\r\nReturns the currenly active ",(0,n.jsx)(s.em,{children:"Checkpoint"}),"."]})]})}function h(e={}){const{wrapper:s}={...(0,t.R)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(a,{...e})}):a(e)}},8289:(e,s,i)=>{i.d(s,{A:()=>n});const n=i.p+"assets/images/QadeBanner-1094b1c11918eb2af6a8bffcea92dc6c.png"},1245:(e,s,i)=>{i.d(s,{A:()=>n});const n=i.p+"assets/images/CancelMission-c7f0b22e2ae331bd682c1f710089e8e4.png"},9034:(e,s,i)=>{i.d(s,{A:()=>n});const n=i.p+"assets/images/ChangeSelectedMission-ca9939a1db5f8e743e96414dda510f5e.png"},8154:(e,s,i)=>{i.d(s,{A:()=>n});const n=i.p+"assets/images/GetActiveMissions-6b40d33fe21505916172aa051fea0934.png"},4492:(e,s,i)=>{i.d(s,{A:()=>n});const n=i.p+"assets/images/GetAllObjectives-e88789a9f4de0ce9de4d0776e90d9095.png"},6820:(e,s,i)=>{i.d(s,{A:()=>n});const n=i.p+"assets/images/GetAllObjectivesOfState-1b3166bcd75da73e5c2dfb470a05ab5a.png"},1403:(e,s,i)=>{i.d(s,{A:()=>n});const n=i.p+"assets/images/GetAllSelectedObjectives-24501464fb8f12454f9be6de9d5dd9bd.png"},3209:(e,s,i)=>{i.d(s,{A:()=>n});const n=i.p+"assets/images/GetCancelledMissions-7fe2a993deedd30aec261fed8b44acf4.png"},4327:(e,s,i)=>{i.d(s,{A:()=>n});const n=i.p+"assets/images/GetCompletedMissions-58df778822d7c4d179ca081405b1b960.png"},5259:(e,s,i)=>{i.d(s,{A:()=>n});const n=i.p+"assets/images/GetFailedMissions-3ef097295134b0514e08c6392e132117.png"},1538:(e,s,i)=>{i.d(s,{A:()=>n});const n=i.p+"assets/images/GetGlobalDataAsset-a80228366c0b18e1461e407d93e9d23c.png"},342:(e,s,i)=>{i.d(s,{A:()=>n});const n=i.p+"assets/images/GetMissionSubsystem-0a834ffa93c46590013bc746318b7246.png"},1298:(e,s,i)=>{i.d(s,{A:()=>n});const n=i.p+"assets/images/GetSelectedMission-5c7781fb4820f9c85e978d151e2351e6.png"},4384:(e,s,i)=>{i.d(s,{A:()=>n});const n=i.p+"assets/images/GetSelectedObjectivesOfAnyState-e5b1596057b2f50d2cae76e9a52c7fd3.png"},5126:(e,s,i)=>{i.d(s,{A:()=>n});const n=i.p+"assets/images/GetSelectedObjectivesOfState-a01db7d8e66a72eb5ff4589a7772553f.png"},7217:(e,s,i)=>{i.d(s,{A:()=>n});const n=i.p+"assets/images/OnActiveUpdated_Delegate-d06df3ae93c534eadb5e3c2eab560c38.png"},8189:(e,s,i)=>{i.d(s,{A:()=>n});const n=i.p+"assets/images/OnCheckpointUpdated_Delegate-debd6352e2c040eefcdb9ea3c36fff65.png"},3507:(e,s,i)=>{i.d(s,{A:()=>n});const n=i.p+"assets/images/OnMissionAborted_Delegate-c909e0462431f0673e521c2b45dfaa8d.png"},8493:(e,s,i)=>{i.d(s,{A:()=>n});const n=i.p+"assets/images/OnMissionCompleted_Delegate-7a6826b268808176b14d7c31c73f89ea.png"},9571:(e,s,i)=>{i.d(s,{A:()=>n});const n=i.p+"assets/images/OnMissionFailed_Delegate-4cc80d66f16e012ca248d33c57811af7.png"},3025:(e,s,i)=>{i.d(s,{A:()=>n});const n=i.p+"assets/images/OnMissionStarted_Delegate-169114253f6e6fdb6c1ea88be3114155.png"},9911:(e,s,i)=>{i.d(s,{A:()=>n});const n=i.p+"assets/images/OnObjectiveEnded_Delegate-09b2b212197339deacc2d27a39cab52c.png"},7610:(e,s,i)=>{i.d(s,{A:()=>n});const n=i.p+"assets/images/OnObjectiveStarted_Delegate-d9c13374655fad8aed1cdd7e23688552.png"},1185:(e,s,i)=>{i.d(s,{A:()=>n});const n=i.p+"assets/images/OnSelectedChanged_Delegate-8e89d1d3ac8bc809f566e5b974ca66e8.png"},2028:(e,s,i)=>{i.d(s,{A:()=>n});const n=i.p+"assets/images/RestartMission-acc7f085edab6de6fd5127d914d4dbf1.png"},5443:(e,s,i)=>{i.d(s,{A:()=>n});const n=i.p+"assets/images/StartMission-bb16c7c57462b24700ba982e1ca70d27.png"},7075:(e,s,i)=>{i.d(s,{A:()=>n});const n=i.p+"assets/images/StopMission-4a3460047d37bbc8cb3b78c61b5ca42e.png"},8453:(e,s,i)=>{i.d(s,{R:()=>r,x:()=>c});var n=i(6540);const t={},d=n.createContext(t);function r(e){const s=n.useContext(d);return n.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function c(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:r(e.components),n.createElement(d.Provider,{value:s},e.children)}}}]);