"use strict";(self.webpackChunkSouthDhakaCyclists=self.webpackChunkSouthDhakaCyclists||[]).push([[849],{908:(k,h,c)=>{c.r(h),c.d(h,{MessgesModule:()=>$});var _=c(4466),g=c(6895),m=c(2019),p=c(2347),f=c(5041),u=c(1446),e=c(8256),x=c(529);let C=(()=>{const o=class{constructor(t){this.http=t,this.url=p.N.apiUrl+"/messege"}getMesseges(t,n=0,r=100){return this.http.get(this.url+`/chat/${t}?page=${n}&size=${r}`)}getChats(t=0,n=20){return this.http.get(this.url+`?page=${t}&size=${n}`)}sendMessage(t){return this.http.post(this.url,t)}getSuggestions(t,n=0,r=20){return this.http.get(this.url+`/newChatSuggestions/${t}?page=${n}&size=${r}`)}createChat(t,n){return this.http.get(this.url+`/newChat?name=${t}&ids=${n}`)}};let s=o;return o.\u0275fac=function(n){return new(n||o)(e.LFG(x.eN))},o.\u0275prov=e.Yz7({token:o,factory:o.\u0275fac,providedIn:"root"}),s})();var d=c(433),v=c(2541);function T(s,o){if(1&s&&(e.TgZ(0,"span",32),e._uU(1),e.qZA()),2&s){const i=e.oxw().$implicit,t=e.oxw(2);e.xp6(1),e.Oqu(t.hasNew(i))}}function Z(s,o){if(1&s){const i=e.EpF();e.TgZ(0,"div",26),e.NdJ("click",function(){const r=e.CHM(i).$implicit,a=e.oxw(2);return e.KtG(a.selectChat(r))}),e.TgZ(1,"div",27),e._UZ(2,"img",28),e.TgZ(3,"div")(4,"strong"),e._uU(5),e.qZA(),e.TgZ(6,"small",29),e._uU(7),e.qZA()(),e.TgZ(8,"div",30),e.YNc(9,T,2,1,"span",31),e.qZA()()()}if(2&s){const i=o.$implicit,t=e.oxw(2);e.xp6(2),e.s9C("src",t.getImageUrl(i),e.LSH),e.xp6(3),e.Oqu(i.name),e.xp6(2),e.Oqu(i.lastMessage),e.xp6(2),e.Q6J("ngIf",t.hasNew(i)>0)}}function U(s,o){if(1&s&&(e.TgZ(0,"div")(1,"h4"),e._uU(2,"Searched Chats"),e.qZA(),e.TgZ(3,"div",7),e.YNc(4,Z,10,4,"div",8),e.qZA()()),2&s){const i=e.oxw();e.xp6(4),e.Q6J("ngForOf",i.filteredChats)}}function b(s,o){if(1&s&&(e.TgZ(0,"span",32),e._uU(1),e.qZA()),2&s){const i=e.oxw().$implicit,t=e.oxw();e.xp6(1),e.Oqu(t.hasNew(i))}}function M(s,o){if(1&s){const i=e.EpF();e.TgZ(0,"div",26),e.NdJ("click",function(){const r=e.CHM(i).$implicit,a=e.oxw();return e.KtG(a.selectChat(r))}),e.TgZ(1,"div",27),e._UZ(2,"img",28),e.TgZ(3,"div")(4,"strong"),e._uU(5),e.qZA(),e.TgZ(6,"small",29),e._uU(7),e.qZA()(),e.TgZ(8,"div",30),e.YNc(9,b,2,1,"span",31),e.qZA()()()}if(2&s){const i=o.$implicit,t=e.oxw();e.xp6(2),e.s9C("src",t.getImageUrl(i),e.LSH),e.xp6(3),e.Oqu(i.name),e.xp6(2),e.Oqu(i.lastMessage),e.xp6(2),e.Q6J("ngIf",t.hasNew(i)>0)}}function w(s,o){if(1&s&&(e.ynx(0,45),e.TgZ(1,"div",46)(2,"div",47),e._UZ(3,"img",48),e.TgZ(4,"span",49)(5,"span",50),e._uU(6),e.qZA()()(),e.TgZ(7,"span",51),e._uU(8),e.ALo(9,"timeAgo"),e.qZA()(),e.BQk()),2&s){const i=e.oxw().$implicit,t=e.oxw(2);e.xp6(3),e.s9C("src",t.getImageUrl(i.sender),e.LSH),e.xp6(3),e.hij(" ",i.message," "),e.xp6(2),e.Oqu(e.lcZ(9,3,i.createdAt))}}function y(s,o){if(1&s&&(e.TgZ(0,"div",46)(1,"span",52),e._uU(2),e.ALo(3,"timeAgo"),e.qZA(),e.TgZ(4,"div",53)(5,"span",49)(6,"span",50),e._uU(7),e.qZA()(),e._UZ(8,"img",54),e.qZA()()),2&s){const i=e.oxw().$implicit,t=e.oxw(2);e.xp6(2),e.Oqu(e.lcZ(3,3,i.createdAt)),e.xp6(5),e.hij(" ",i.message," "),e.xp6(1),e.s9C("src",t.getImageUrl(i.sender),e.LSH)}}function A(s,o){if(1&s&&(e.TgZ(0,"div",41),e.YNc(1,w,10,5,"ng-container",42),e.YNc(2,y,9,5,"ng-template",43,44,e.W1O),e.qZA()),2&s){const i=o.$implicit,t=e.MAs(3),n=e.oxw(2);e.xp6(1),e.Q6J("ngIf",i.sender.id!==n.currentUserId)("ngIfElse",t)}}function q(s,o){if(1&s){const i=e.EpF();e.TgZ(0,"div",33)(1,"div",34)(2,"h5"),e._uU(3),e.qZA()(),e.TgZ(4,"div",35),e.YNc(5,A,4,2,"div",36),e.qZA(),e.TgZ(6,"div",37)(7,"div",38)(8,"input",39),e.NdJ("ngModelChange",function(n){e.CHM(i);const r=e.oxw();return e.KtG(r.messageText=n)})("keydown.enter",function(){e.CHM(i);const n=e.oxw();return e.KtG(n.sendMessage())}),e.qZA(),e.TgZ(9,"button",40),e.NdJ("click",function(){e.CHM(i);const n=e.oxw();return e.KtG(n.sendMessage())}),e._uU(10,"Send"),e.qZA()()()()}if(2&s){const i=e.oxw();e.xp6(3),e.Oqu(i.selectedChat.name),e.xp6(2),e.Q6J("ngForOf",i.messeges),e.xp6(3),e.Q6J("ngModel",i.messageText)}}function I(s,o){1&s&&(e.TgZ(0,"div",55)(1,"h5"),e._uU(2,"Select a chat to start messaging"),e.qZA()())}function N(s,o){if(1&s){const i=e.EpF();e.TgZ(0,"li",56)(1,"div",57),e.NdJ("click",function(){const r=e.CHM(i).$implicit,a=e.oxw();return e.KtG(a.removeUser(r))}),e._UZ(2,"img",28),e.TgZ(3,"div")(4,"strong"),e._uU(5),e.qZA(),e.TgZ(6,"small",29),e._uU(7),e.qZA()(),e.TgZ(8,"button",58),e._uU(9,"Remove"),e.qZA()()()}if(2&s){const i=o.$implicit,t=e.oxw();e.xp6(2),e.s9C("src",t.getImageUrl(i),e.LSH),e.xp6(3),e.Oqu(i.fullName),e.xp6(2),e.Oqu(i.email)}}function O(s,o){if(1&s){const i=e.EpF();e.TgZ(0,"li",56)(1,"div",57),e.NdJ("click",function(){const r=e.CHM(i).$implicit,a=e.oxw();return e.KtG(a.selectUser(r))}),e._UZ(2,"img",28),e.TgZ(3,"div")(4,"strong"),e._uU(5),e.qZA(),e.TgZ(6,"small",29),e._uU(7),e.qZA()()()()}if(2&s){const i=o.$implicit,t=e.oxw();e.xp6(2),e.s9C("src",t.getImageUrl(i),e.LSH),e.xp6(3),e.Oqu(i.fullName),e.xp6(2),e.Oqu(i.email)}}const J=[{path:"",redirectTo:"messegeLists",pathMatch:"full"},{path:"messegeLists",component:(()=>{const o=class{constructor(t){this.messegeService=t,this.apiUrl=p.N.apiUrl,this.currentUserId=f.y.getUser().id,this.messeges=[],this.interval=null,this.searchText="",this.messageText="",this.selectedChat=null,this.chats=[],this.filteredChats=[],this.oldChats=[],this.chatName="",this.searchTerm="",this.suggestedUsers=[],this.selectedUsers=[]}ngOnDestroy(){clearInterval(this.interval)}ngOnInit(){this.messegeService.getChats().subscribe(t=>{this.chats=t.content,this.oldChats=this.chats,this.startInterval()})}startInterval(){this.interval=setInterval(()=>{this.refreshChats()},2e3)}refreshChats(){this.messegeService.getChats().subscribe(t=>{this.chats=t.content}),this.selectedChat&&this.selectChat(this.selectedChat)}hasNew(t){let n=t.id,r=this.oldChats.find(l=>l.id===n).messegeCount;return t.messegeCount-r}selectChat(t){this.selectedChat=t,this.messegeService.getMesseges(t.id).subscribe(r=>{this.messeges=r.content,setTimeout(()=>{this.scrollToBottom()},100)});let n=this.oldChats.find(r=>r.id===t.id);n&&this.oldChats.splice(this.oldChats.indexOf(n),1),this.oldChats.push(t)}scrollToBottom(){const t=document.querySelector(".chat-body");t&&(t.scrollTop=t.scrollHeight)}sendMessage(){""!==this.messageText.trim()&&this.messegeService.sendMessage({messege:this.messageText,chatId:this.selectedChat.id}).subscribe(t=>{this.messeges.push(t),this.messageText="",setTimeout(()=>{this.scrollToBottom()},100)})}filterChats(){this.filteredChats=""!==this.searchText?this.chats.filter(t=>t.name.toLowerCase().includes(this.searchText.toLowerCase())):[]}getImageUrl(t){return t.groupImage?this.apiUrl+t.groupImage?.url:"assets/logo/pigeon.webp"}searchUsers(){this.messegeService.getSuggestions(this.searchTerm).subscribe(t=>{let n=t.content;n=n.filter(r=>r.id!==this.currentUserId),this.suggestedUsers=n.filter(r=>!this.selectedUsers.find(a=>a.id===r.id))})}selectUser(t){this.selectedUsers.find(n=>n.id===t.id)||(this.selectedUsers.push(t),this.suggestedUsers=this.suggestedUsers.filter(n=>n.id!==t.id))}removeUser(t){this.selectedUsers=this.selectedUsers.filter(n=>n.id!==t.id),this.suggestedUsers.push(t)}createChat(){this.messegeService.createChat(this.chatName,this.selectedUsers.map(t=>t.id)).subscribe(t=>{this.chats.push(t),this.filteredChats.push(t),this.selectedUsers=[],this.chatName="",this.searchTerm="",this.suggestedUsers=[],this.selectedChat=t;const n=document.getElementById("modalId");if(n){(u.u_.getInstance(n)||new u.u_(n)).hide();const a=document.querySelector(".modal-backdrop");a&&a.remove(),document.body.classList.remove("modal-open")}})}};let s=o;return o.\u0275fac=function(n){return new(n||o)(e.Y36(C))},o.\u0275cmp=e.Xpm({type:o,selectors:[["app-messges"]],decls:36,vars:9,consts:[[1,"container-fluid"],[1,"row"],[1,"col-md-4","p-3","border","shadow",2,"height","100vh"],[1,"mb-3"],["type","text","placeholder","Search chats...",1,"form-control",3,"ngModel","ngModelChange","input"],[4,"ngIf"],["data-bs-toggle","modal","data-bs-target","#modalId",1,"btn","btn-outline-info"],[1,"list-group"],["class","list-group-item list-group-item-action",3,"click",4,"ngFor","ngForOf"],[1,"col-md-8","p-3"],["class","border rounded-3","style","height: 90vh;",4,"ngIf"],["class","text-center","style","height: 100%;",4,"ngIf"],["id","modalId","tabindex","-1","role","dialog","aria-labelledby","modalTitleId","aria-hidden","true",1,"modal","fade"],["role","document",1,"modal-dialog","modal-dialog-scrollable","modal-dialog-centered","modal-lg"],[1,"modal-content"],[1,"modal-header"],["id","modalTitleId",1,"modal-title"],["type","button","data-bs-dismiss","modal","aria-label","Close",1,"btn-close"],[1,"modal-body"],[1,"input-group","my-3"],["type","text","placeholder","Enter chat name",1,"form-control",3,"ngModel","ngModelChange"],["class","list-group-item",4,"ngFor","ngForOf"],["type","text","placeholder","Search for a user",1,"form-control",3,"ngModel","ngModelChange","input"],[1,"modal-footer"],["type","button","data-bs-dismiss","modal",1,"btn","btn-secondary"],["type","button",1,"btn","btn-primary",3,"click"],[1,"list-group-item","list-group-item-action",3,"click"],[1,"d-flex","justify-content-between","align-items-center"],["alt","",1,"rounded-circle","me-2",2,"width","40px","height","40px",3,"src"],[1,"d-block","text-muted"],[1,"ms-auto"],["class","badge bg-info h-100 rounded rounded-circle",4,"ngIf"],[1,"badge","bg-info","h-100","rounded","rounded-circle"],[1,"border","rounded-3",2,"height","90vh"],[1,"chat-header","p-3"],[1,"chat-body","p-3",2,"height","75%","overflow-y","auto"],["class","message",4,"ngFor","ngForOf"],[1,"chat-footer","p-3"],[1,"input-group"],["type","text","placeholder","Type a message...",1,"form-control",3,"ngModel","ngModelChange","keydown.enter"],[1,"btn","btn-primary",3,"click"],[1,"message"],["class","w-100",4,"ngIf","ngIfElse"],["class","w-100"],["elseBlock",""],[1,"w-100"],[1,"d-flex","align-items-center","mb-2"],[1,"d-flex","bg-success","rounded-pill",2,"width","fit-content"],["alt","",1,"rounded-circle",2,"width","40px","height","40px",3,"src"],[1,"py-2"],[1,"message-text"],[1,"text-muted","small","ms-2"],[1,"text-muted","small","ms-auto"],[1,"d-flex","bg-primary","rounded-pill","ms-2",2,"width","fit-content"],["alt","",1,"rounded-circle","ms-2",2,"width","40px","height","40px",3,"src"],[1,"text-center",2,"height","100%"],[1,"list-group-item"],[1,"d-flex","align-items-center",3,"click"],["type","button",1,"btn","btn-outline-danger","btn-sm","ms-auto"]],template:function(n,r){1&n&&(e.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"input",4),e.NdJ("ngModelChange",function(l){return r.searchText=l})("input",function(){return r.filterChats()}),e.qZA()(),e.YNc(5,U,5,1,"div",5),e.TgZ(6,"h4"),e._uU(7,"Inbox "),e.TgZ(8,"button",6),e._uU(9,"New"),e.qZA()(),e.TgZ(10,"div",7),e.YNc(11,M,10,4,"div",8),e.qZA()(),e.TgZ(12,"div",9),e.YNc(13,q,11,3,"div",10),e.YNc(14,I,3,0,"div",11),e.qZA()()(),e.TgZ(15,"div",12)(16,"div",13)(17,"div",14)(18,"div",15)(19,"h5",16),e._uU(20," New Chat "),e.qZA(),e._UZ(21,"button",17),e.qZA(),e.TgZ(22,"div",18)(23,"div",19)(24,"input",20),e.NdJ("ngModelChange",function(l){return r.chatName=l}),e.qZA()(),e.TgZ(25,"ul",7),e.YNc(26,N,10,3,"li",21),e.qZA(),e.TgZ(27,"div",19)(28,"input",22),e.NdJ("ngModelChange",function(l){return r.searchTerm=l})("input",function(){return r.searchUsers()}),e.qZA()(),e.TgZ(29,"ul",7),e.YNc(30,O,8,3,"li",21),e.qZA()(),e.TgZ(31,"div",23)(32,"button",24),e._uU(33," Close "),e.qZA(),e.TgZ(34,"button",25),e.NdJ("click",function(){return r.createChat()}),e._uU(35,"Save"),e.qZA()()()()()),2&n&&(e.xp6(4),e.Q6J("ngModel",r.searchText),e.xp6(1),e.Q6J("ngIf",r.filteredChats.length>0),e.xp6(6),e.Q6J("ngForOf",r.chats),e.xp6(2),e.Q6J("ngIf",r.selectedChat),e.xp6(1),e.Q6J("ngIf",!r.selectedChat),e.xp6(10),e.Q6J("ngModel",r.chatName),e.xp6(2),e.Q6J("ngForOf",r.selectedUsers),e.xp6(2),e.Q6J("ngModel",r.searchTerm),e.xp6(2),e.Q6J("ngForOf",r.suggestedUsers))},dependencies:[g.sg,g.O5,d.Fj,d.JJ,d.On,v.e],styles:[".chat-body[_ngcontent-%COMP%]{max-height:75vh;overflow-y:scroll}.message-text[_ngcontent-%COMP%]{border-radius:12px;padding:10px;margin:5px;max-width:75%;word-wrap:break-word}input.form-control[_ngcontent-%COMP%]{border-radius:30px}"]}),s})()}];let S=(()=>{const o=class{};let s=o;return o.\u0275fac=function(n){return new(n||o)},o.\u0275mod=e.oAB({type:o}),o.\u0275inj=e.cJS({imports:[m.Bz.forChild(J),m.Bz]}),s})(),$=(()=>{const o=class{};let s=o;return o.\u0275fac=function(n){return new(n||o)},o.\u0275mod=e.oAB({type:o}),o.\u0275inj=e.cJS({imports:[g.ez,S,d.u5,d.UX,_.m]}),s})()}}]);