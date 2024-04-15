"use strict";(self.webpackChunkreshift_tools=self.webpackChunkreshift_tools||[]).push([[434],{1755:(e,s,i)=>{i.r(s),i.d(s,{assets:()=>o,contentTitle:()=>a,default:()=>h,frontMatter:()=>n,metadata:()=>r,toc:()=>d});var t=i(4848),l=i(8453);const n={title:"Dialogue Subsystem",sidebar_position:2},a=void 0,r={id:"QADE-Basics/Subsystem/DialogueSubsystem",title:"Dialogue Subsystem",description:"Banner",source:"@site/docs/QADE-Basics/Subsystem/DialogueSubsystem.md",sourceDirName:"QADE-Basics/Subsystem",slug:"/QADE-Basics/Subsystem/DialogueSubsystem",permalink:"/docs/QADE-Basics/Subsystem/DialogueSubsystem",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"Dialogue Subsystem",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Mission Subsystem",permalink:"/docs/QADE-Basics/Subsystem/MissionSubsystem"},next:{title:"Node Conditions",permalink:"/docs/QADE-Advanced/NodeConditions"}},o={},d=[{value:"Accessing the Dialogue Subsystem",id:"accessing-the-dialogue-subsystem",level:2},{value:"Dialogue Subsystem Functionality",id:"dialogue-subsystem-functionality",level:2},{value:"Start Dialogue",id:"start-dialogue",level:3},{value:"Abort Active Dialogue",id:"abort-active-dialogue",level:3},{value:"Abort Dialogue",id:"abort-dialogue",level:3},{value:"Skip Current Dialogue",id:"skip-current-dialogue",level:3},{value:"Pick choice",id:"pick-choice",level:3},{value:"Toggle auto skip",id:"toggle-auto-skip",level:3},{value:"Dialogue Subsystem Getters",id:"dialogue-subsystem-getters",level:2},{value:"Get Active Dialogue",id:"get-active-dialogue",level:3},{value:"Get Active Node",id:"get-active-node",level:3},{value:"Get Active Response",id:"get-active-response",level:3},{value:"Get All Player Choices",id:"get-all-player-choices",level:3},{value:"Get All Choices Text",id:"get-all-choices-text",level:3},{value:"Get All Choices States",id:"get-all-choices-states",level:3},{value:"Dialogue Subsystem Delegate Events",id:"dialogue-subsystem-delegate-events",level:2},{value:"Started Dialogue",id:"started-dialogue",level:3},{value:"Ended Dialogue",id:"ended-dialogue",level:3},{value:"Aborted Dialogue",id:"aborted-dialogue",level:3},{value:"Dialogue Started Subtitle",id:"dialogue-started-subtitle",level:3},{value:"Dialogue Ended Subtitle",id:"dialogue-ended-subtitle",level:3},{value:"Update Subtitle Dialogue",id:"update-subtitle-dialogue",level:3},{value:"Pick A choice Dialogue",id:"pick-a-choice-dialogue",level:3}];function c(e){const s={admonition:"admonition",em:"em",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...(0,l.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("hr",{}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.img,{alt:"Banner",src:i(8289).A+"",width:"1864",height:"380"})}),"\n",(0,t.jsx)(s.h2,{id:"accessing-the-dialogue-subsystem",children:"Accessing the Dialogue Subsystem"}),"\n",(0,t.jsx)("hr",{}),"\n",(0,t.jsxs)(s.p,{children:["The ",(0,t.jsx)(s.strong,{children:"Dialogue Subsystem"})," can be accessed from anywhere.\r\nRight-click in a blueprint graph and search 'Get DialogueSubsystem'."]}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.img,{alt:"GetDialogueSubsystem",src:i(728).A+"",width:"471",height:"282"})}),"\n",(0,t.jsx)(s.admonition,{type:"info",children:(0,t.jsxs)(s.p,{children:["No Manual setup for the ",(0,t.jsx)(s.strong,{children:"Dialogue Subsystem"})," is required."]})}),"\n",(0,t.jsx)(s.h2,{id:"dialogue-subsystem-functionality",children:"Dialogue Subsystem Functionality"}),"\n",(0,t.jsx)("hr",{}),"\n",(0,t.jsx)(s.h3,{id:"start-dialogue",children:"Start Dialogue"}),"\n",(0,t.jsxs)(s.p,{children:["You can start a Dialogue from anywhere at anytime, drag out from the ",(0,t.jsx)(s.strong,{children:"Dialogue Subsystem"})," ",(0,t.jsx)("br",{})," and search for 'Start Dialogue' or look under Qade>Dialogue System."]}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.img,{alt:"StartDialogue",src:i(527).A+"",width:"628",height:"455"})}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.strong,{children:"Start Dialogue"})," has 2 arguments:"]}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.em,{children:"Target"})," is the ",(0,t.jsx)(s.strong,{children:"Dialgoue Subsystem"}),"."]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.em,{children:"Dialogue to Start"})," is a ",(0,t.jsx)(s.strong,{children:"Dialgoue Graph"})," that can be chosen in the node or through a reference in the blueprint."]}),"\n"]}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.strong,{children:"has 1 return value"})}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.em,{children:"Return Value"})," is a bool, when true it means that the dialogue succesfully has started."]}),"\n"]}),"\n",(0,t.jsx)(s.h3,{id:"abort-active-dialogue",children:"Abort Active Dialogue"}),"\n",(0,t.jsxs)(s.p,{children:["You Abort the active dialogue, drag out from the ",(0,t.jsx)(s.strong,{children:"Dialogue Subsystem"})," ",(0,t.jsx)("br",{})," and search for 'Abort Active Dialogue' or look under Qade>Dialogue System."]}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.img,{alt:"Skip Dialogue",src:i(3042).A+"",width:"562",height:"363"})}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.strong,{children:"Abort Active Dialogue"})," has 1 arguments:"]}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.em,{children:"Target"})," is the ",(0,t.jsx)(s.strong,{children:"Dialgoue Subsystem"}),"."]}),"\n"]}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.strong,{children:"has 1 return value"})}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.em,{children:"Return Value"})," is a bool, when true it means that the dialogue node has succesfully Aborted."]}),"\n"]}),"\n",(0,t.jsx)(s.h3,{id:"abort-dialogue",children:"Abort Dialogue"}),"\n",(0,t.jsxs)(s.p,{children:["You will reset the Dialogue graph you have selected, ",(0,t.jsx)("br",{})," drag out from the ",(0,t.jsx)(s.strong,{children:"Dialogue Subsystem"}),"  and search for 'Abort Dialogue' or look under Qade>Dialogue System."]}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.img,{alt:"Skip Dialogue",src:i(6891).A+"",width:"716",height:"380"})}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.strong,{children:"Abort Dialogue"})," has 1 arguments:"]}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.em,{children:"Target"})," is the ",(0,t.jsx)(s.strong,{children:"Dialgoue Subsystem"}),"."]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.em,{children:"Dialogue to abort"})," is the ",(0,t.jsx)(s.strong,{children:"Dialgoue graph"}),", this reset the graph."]}),"\n"]}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.strong,{children:"has 1 return value"})}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.em,{children:"Return Value"})," is a bool, when true it means that the dialogue node has succesfully Aborted."]}),"\n"]}),"\n",(0,t.jsx)(s.h3,{id:"skip-current-dialogue",children:"Skip Current Dialogue"}),"\n",(0,t.jsxs)(s.p,{children:["Using the ",(0,t.jsx)(s.strong,{children:"Skip Current Dialogue"})," function, will skip the current active node inside the active dialogue."]}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.img,{alt:"Skip Dialogue",src:i(3138).A+"",width:"532",height:"409"})}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.strong,{children:"Skip Current Dialogue"})," has 1 arguments:"]}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.em,{children:"Target"})," is the ",(0,t.jsx)(s.strong,{children:"Dialgoue Subsystem"}),"."]}),"\n"]}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.strong,{children:"has 1 return value"})}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.em,{children:"Return Value"})," is a bool, when true it means that the dialogue node has succesfully skipped."]}),"\n"]}),"\n",(0,t.jsx)(s.h3,{id:"pick-choice",children:"Pick choice"}),"\n",(0,t.jsxs)(s.p,{children:["Using the ",(0,t.jsx)(s.strong,{children:"Pick choice"})," function, will skip the current active node inside the active dialogue."]}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.img,{alt:"Skip Dialogue",src:i(3079).A+"",width:"583",height:"434"})}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.strong,{children:"Pick choice"})," has 2 arguments:"]}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.em,{children:"Target"})," is the ",(0,t.jsx)(s.strong,{children:"Dialgoue Subsystem"}),"."]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.em,{children:"Qade Node"}),", is an int, that is used as index for which ",(0,t.jsx)(s.strong,{children:"Player Response Node"})," has been selected"]}),"\n"]}),"\n",(0,t.jsx)(s.admonition,{type:"info",children:(0,t.jsx)(s.p,{children:"You would need to setup a system to send the correct index. You can get the list of all the player choices that are active."})}),"\n",(0,t.jsx)(s.h3,{id:"toggle-auto-skip",children:"Toggle auto skip"}),"\n",(0,t.jsx)(s.admonition,{type:"warning",children:(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.strong,{children:"Toggle auto skip"})," is still work in progress. it doesn't do anything"]})}),"\n",(0,t.jsx)(s.h2,{id:"dialogue-subsystem-getters",children:"Dialogue Subsystem Getters"}),"\n",(0,t.jsx)("hr",{}),"\n",(0,t.jsx)(s.h3,{id:"get-active-dialogue",children:"Get Active Dialogue"}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.strong,{children:"Dialogue Graph"})," Returns the active dialogue graph."]}),"\n",(0,t.jsx)(s.h3,{id:"get-active-node",children:"Get Active Node"}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.strong,{children:"Dialogue node"})," Returns the active dialogue node"]}),"\n",(0,t.jsx)(s.admonition,{type:"warning",children:(0,t.jsx)(s.p,{children:"Only gets the first node that is active. We will resolve this issue later"})}),"\n",(0,t.jsx)(s.h3,{id:"get-active-response",children:"Get Active Response"}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.strong,{children:"Response_Node"})," Returns the current active response"]}),"\n",(0,t.jsx)(s.h3,{id:"get-all-player-choices",children:"Get All Player Choices"}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.strong,{children:"Array Player Response Nodes"})," Returns all the player reponse nodes."]}),"\n",(0,t.jsx)(s.h3,{id:"get-all-choices-text",children:"Get All Choices Text"}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.strong,{children:"Array Text"})," Returns all the player choices text as an example ",(0,t.jsx)(s.em,{children:'["I am skipping this dialoge", "I want to continue this mission"]'})]}),"\n",(0,t.jsx)(s.h3,{id:"get-all-choices-states",children:"Get All Choices States"}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.strong,{children:"Array Node States"})," Returns all the player respones states."]}),"\n",(0,t.jsx)(s.h2,{id:"dialogue-subsystem-delegate-events",children:"Dialogue Subsystem Delegate Events"}),"\n",(0,t.jsx)("hr",{}),"\n",(0,t.jsx)(s.h3,{id:"started-dialogue",children:"Started Dialogue"}),"\n",(0,t.jsxs)(s.p,{children:["This Delegate will be called whenever a ",(0,t.jsx)(s.strong,{children:"dialogue has Started"}),"."]}),"\n",(0,t.jsx)(s.h3,{id:"ended-dialogue",children:"Ended Dialogue"}),"\n",(0,t.jsxs)(s.p,{children:["This Delegate will be called whenever a ",(0,t.jsx)(s.strong,{children:"dialogue has Ended"}),"."]}),"\n",(0,t.jsx)(s.h3,{id:"aborted-dialogue",children:"Aborted Dialogue"}),"\n",(0,t.jsxs)(s.p,{children:["This Delegate will be called whenever a ",(0,t.jsx)(s.strong,{children:"dialogue has Aborted"}),"."]}),"\n",(0,t.jsx)(s.h3,{id:"dialogue-started-subtitle",children:"Dialogue Started Subtitle"}),"\n",(0,t.jsx)(s.p,{children:"This Delegate will be called whenever a response node needs the subtitle."}),"\n",(0,t.jsx)(s.h3,{id:"dialogue-ended-subtitle",children:"Dialogue Ended Subtitle"}),"\n",(0,t.jsx)(s.p,{children:"This Delegate will be called whenever the response node is done with the subtitle."}),"\n",(0,t.jsx)(s.h3,{id:"update-subtitle-dialogue",children:"Update Subtitle Dialogue"}),"\n",(0,t.jsx)(s.p,{children:"This Delegate will be called whenever a new line needs to be updated in the subtitle."}),"\n",(0,t.jsx)(s.h3,{id:"pick-a-choice-dialogue",children:"Pick A choice Dialogue"}),"\n",(0,t.jsx)(s.p,{children:"This Delegate will be called whenever you get the option to pick a choice in the dialogue."})]})}function h(e={}){const{wrapper:s}={...(0,l.R)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},8289:(e,s,i)=>{i.d(s,{A:()=>t});const t=i.p+"assets/images/QadeBanner-1094b1c11918eb2af6a8bffcea92dc6c.png"},6891:(e,s,i)=>{i.d(s,{A:()=>t});const t=i.p+"assets/images/Abort-3b7893e972183feaabf0d7fc6814c20e.png"},3042:(e,s,i)=>{i.d(s,{A:()=>t});const t=i.p+"assets/images/AbortActive-55ff0c22ba366cd198e270bebf467cfb.png"},728:(e,s,i)=>{i.d(s,{A:()=>t});const t=i.p+"assets/images/GetSubsystem-99481ee2edf106a5916ad1f0f68e3eb6.png"},3079:(e,s,i)=>{i.d(s,{A:()=>t});const t=i.p+"assets/images/Pickchoice-3e5da2a1b6359506b7338644a7ca33d3.png"},3138:(e,s,i)=>{i.d(s,{A:()=>t});const t=i.p+"assets/images/SkipDialogue-813c7e3d96f52352c4a1c56420cf0ce7.png"},527:(e,s,i)=>{i.d(s,{A:()=>t});const t=i.p+"assets/images/StartDialogue-644398dd6e01195d85d2c11e5b67c6c9.png"},8453:(e,s,i)=>{i.d(s,{R:()=>a,x:()=>r});var t=i(6540);const l={},n=t.createContext(l);function a(e){const s=t.useContext(n);return t.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function r(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:a(e.components),t.createElement(n.Provider,{value:s},e.children)}}}]);