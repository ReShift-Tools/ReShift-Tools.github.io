"use strict";(self.webpackChunkreshift_tools=self.webpackChunkreshift_tools||[]).push([[643],{1465:(s,i,e)=>{e.r(i),e.d(i,{assets:()=>a,contentTitle:()=>r,default:()=>h,frontMatter:()=>o,metadata:()=>c,toc:()=>l});var n=e(4848),t=e(8453);const o={title:"Mission Subsystem",sidebar_position:1},r=void 0,c={id:"QADE-Basics/Subsystem/MissionSubsystem",title:"Mission Subsystem",description:"Banner",source:"@site/docs/QADE-Basics/Subsystem/MissionSubsystem.md",sourceDirName:"QADE-Basics/Subsystem",slug:"/QADE-Basics/Subsystem/MissionSubsystem",permalink:"/docs/QADE-Basics/Subsystem/MissionSubsystem",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Mission Subsystem",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Creating Custom Nodes",permalink:"/docs/QADE-Basics/Missions/Creating Custom Nodes"},next:{title:"Dialogue Subsystem",permalink:"/docs/QADE-Basics/Subsystem/DialogueSubsystem"}},a={},l=[{value:"Accessing the Mission Subsystem",id:"accessing-the-mission-subsystem",level:2},{value:"Subsystem Mission Functionality",id:"subsystem-mission-functionality",level:2},{value:"Start Mission",id:"start-mission",level:3},{value:"Stop Mission",id:"stop-mission",level:3},{value:"Cancel Mission",id:"cancel-mission",level:3},{value:"Restart Mission",id:"restart-mission",level:3},{value:"Changed Selected Mission",id:"changed-selected-mission",level:3}];function d(s){const i={admonition:"admonition",em:"em",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...(0,t.R)(),...s.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("hr",{}),"\n",(0,n.jsx)(i.p,{children:(0,n.jsx)(i.img,{alt:"Banner",src:e(8289).A+"",width:"1864",height:"380"})}),"\n",(0,n.jsx)(i.h2,{id:"accessing-the-mission-subsystem",children:"Accessing the Mission Subsystem"}),"\n",(0,n.jsx)("hr",{}),"\n",(0,n.jsxs)(i.p,{children:["The ",(0,n.jsx)(i.strong,{children:"Mission Subsystem"})," can be accessed from anywhere.\r\nRight-click in a blueprint graph and search 'Get MissionSubsystem'.\r\n",(0,n.jsx)(i.img,{alt:"GetMissionSubsystem",src:e(342).A+"",width:"425",height:"247"})]}),"\n",(0,n.jsx)(i.admonition,{type:"info",children:(0,n.jsxs)(i.p,{children:["No Manual setup for the ",(0,n.jsx)(i.strong,{children:"Mission Subsystem"})," is required."]})}),"\n",(0,n.jsx)(i.h2,{id:"subsystem-mission-functionality",children:"Subsystem Mission Functionality"}),"\n",(0,n.jsx)("hr",{}),"\n",(0,n.jsx)(i.h3,{id:"start-mission",children:"Start Mission"}),"\n",(0,n.jsxs)(i.p,{children:["You can start a mission from anywhere at anytime, drag out from the ",(0,n.jsx)(i.strong,{children:"Mission Subsystem"})," and search for 'Start Mission' or look under Qade>Mission Subsystem."]}),"\n",(0,n.jsx)(i.p,{children:(0,n.jsx)(i.img,{alt:"StartMission",src:e(5443).A+"",width:"601",height:"384"})}),"\n",(0,n.jsxs)(i.p,{children:[(0,n.jsx)(i.strong,{children:"Start Mission"})," has 3 arguments:"]}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.em,{children:"Target"})," is the ",(0,n.jsx)(i.strong,{children:"Mission Subsystem"}),"."]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.em,{children:"Mission to Start"})," is a ",(0,n.jsx)(i.strong,{children:"Mission Graph"})," that can be chosen in the node or through a reference in the blueprint."]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.em,{children:"Select Mission"})," is a bool, when true it will automatically change the new mission to the ",(0,n.jsx)(i.strong,{children:"Selected Mission"}),"."]}),"\n"]}),"\n",(0,n.jsx)(i.h3,{id:"stop-mission",children:"Stop Mission"}),"\n",(0,n.jsxs)(i.p,{children:["Using the ",(0,n.jsx)(i.strong,{children:"Stop Mission"})," function, you choose to ",(0,n.jsx)(i.em,{children:"Finish"})," or ",(0,n.jsx)(i.em,{children:"Fail"})," a mission. The mission will be added to the ",(0,n.jsx)(i.em,{children:"Completed Missions"})," or ",(0,n.jsx)(i.em,{children:"Failed Missions"})," list respectively."]}),"\n",(0,n.jsx)(i.p,{children:(0,n.jsx)(i.img,{alt:"StopMission",src:e(7075).A+"",width:"546",height:"370"})}),"\n",(0,n.jsxs)(i.p,{children:[(0,n.jsx)(i.strong,{children:"Stop Mission"})," has 3 arguments:"]}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.em,{children:"Target"})," is the ",(0,n.jsx)(i.strong,{children:"Mission Subsystem"}),"."]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.em,{children:"Mission to Stop"})," is the mission that you wish to stop."]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.em,{children:"Is Finished"})," is a bool, when true the mission is considered ",(0,n.jsx)(i.em,{children:"finished"}),", when false the mission is considered ",(0,n.jsx)(i.em,{children:"failed"}),"."]}),"\n"]}),"\n",(0,n.jsx)(i.h3,{id:"cancel-mission",children:"Cancel Mission"}),"\n",(0,n.jsxs)(i.p,{children:["When you want to cancel a mission entirely and not have it listed as failed or complete. you can use the ",(0,n.jsx)(i.strong,{children:"Cancel Mission"})," Functions."]}),"\n",(0,n.jsx)(i.p,{children:(0,n.jsx)(i.img,{alt:"CancelMission",src:e(1245).A+"",width:"532",height:"346"})}),"\n",(0,n.jsxs)(i.p,{children:[(0,n.jsx)(i.strong,{children:"Cancel Mission"})," has 2 arguments:"]}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.em,{children:"Target"})," is the ",(0,n.jsx)(i.strong,{children:"Mission Subsystem"}),"."]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.em,{children:"Mission to Stop"})," is the mission you wish to cancel."]}),"\n"]}),"\n",(0,n.jsx)(i.h3,{id:"restart-mission",children:"Restart Mission"}),"\n",(0,n.jsxs)(i.p,{children:["To restart a mission you just stopped or cancelled. You call the ",(0,n.jsx)(i.strong,{children:"Restart Mission"})," function right after ",(0,n.jsx)(i.strong,{children:"Stop mission"})," or ",(0,n.jsx)(i.strong,{children:"Cancel Mission"}),".\r\n",(0,n.jsx)(i.img,{alt:"RestartMission",src:e(2028).A+"",width:"800",height:"374"}),"\r\n",(0,n.jsx)(i.strong,{children:"Restart Mission"})," restarts the last stopped mission."]}),"\n",(0,n.jsx)(i.admonition,{type:"warning",children:(0,n.jsxs)(i.p,{children:[(0,n.jsx)(i.strong,{children:"Restart Mission"})," only restarts the last stopped mission."]})}),"\n",(0,n.jsx)(i.h3,{id:"changed-selected-mission",children:"Changed Selected Mission"}),"\n",(0,n.jsxs)(i.p,{children:["The ",(0,n.jsx)(i.strong,{children:"Selected Mission"})," is just like an active mission but the player can have focus on that specific mission. It has extra functions to get information about the mission easier and faster. ",(0,n.jsx)(i.strong,{children:"Change Selected Mission"})," changes the ",(0,n.jsx)(i.strong,{children:"Selected Mission"})," and sends out events to update relevant information."]}),"\n",(0,n.jsx)(i.p,{children:(0,n.jsx)(i.img,{alt:"ChangeSelectedMission",src:e(9034).A+"",width:"582",height:"419"})}),"\n",(0,n.jsxs)(i.p,{children:[(0,n.jsx)(i.strong,{children:"Change Selected Mission"})," has 2 arguments:"]}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.em,{children:"Target"})," is the ",(0,n.jsx)(i.strong,{children:"Mission Subsystem"}),"."]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.em,{children:"Mission to Select"})," is the mission you wish to be the ",(0,n.jsx)(i.strong,{children:"Selected Mission"}),"."]}),"\n"]})]})}function h(s={}){const{wrapper:i}={...(0,t.R)(),...s.components};return i?(0,n.jsx)(i,{...s,children:(0,n.jsx)(d,{...s})}):d(s)}},8289:(s,i,e)=>{e.d(i,{A:()=>n});const n=e.p+"assets/images/QadeBanner-1094b1c11918eb2af6a8bffcea92dc6c.png"},1245:(s,i,e)=>{e.d(i,{A:()=>n});const n=e.p+"assets/images/CancelMission-c7f0b22e2ae331bd682c1f710089e8e4.png"},9034:(s,i,e)=>{e.d(i,{A:()=>n});const n=e.p+"assets/images/ChangeSelectedMission-ca9939a1db5f8e743e96414dda510f5e.png"},342:(s,i,e)=>{e.d(i,{A:()=>n});const n=e.p+"assets/images/GetMissionSubsystem-0a834ffa93c46590013bc746318b7246.png"},2028:(s,i,e)=>{e.d(i,{A:()=>n});const n=e.p+"assets/images/RestartMission-acc7f085edab6de6fd5127d914d4dbf1.png"},5443:(s,i,e)=>{e.d(i,{A:()=>n});const n=e.p+"assets/images/StartMission-bb16c7c57462b24700ba982e1ca70d27.png"},7075:(s,i,e)=>{e.d(i,{A:()=>n});const n=e.p+"assets/images/StopMission-4a3460047d37bbc8cb3b78c61b5ca42e.png"},8453:(s,i,e)=>{e.d(i,{R:()=>r,x:()=>c});var n=e(6540);const t={},o=n.createContext(t);function r(s){const i=n.useContext(o);return n.useMemo((function(){return"function"==typeof s?s(i):{...i,...s}}),[i,s])}function c(s){let i;return i=s.disableParentContext?"function"==typeof s.components?s.components(t):s.components||t:r(s.components),n.createElement(o.Provider,{value:i},s.children)}}}]);