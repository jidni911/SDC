"use strict";(self.webpackChunkSouthDhakaCyclists=self.webpackChunkSouthDhakaCyclists||[]).push([[135],{9135:(rt,f,l)=>{l.r(f),l.d(f,{HomeModule:()=>ct});var b=l(4466),u=l(6895),d=l(2019),Z=l(5041),m=l(2347),t=l(8256),v=l(7569),g=l(262),_=l(2843),T=l(529);let C=(()=>{const s=class{constructor(o){this.http=o,this.commentUrl=m.N.apiUrl+"/comment"}getAllCommentsByPostId(o){return this.http.get(`${this.commentUrl}/post/${o}`).pipe((0,g.K)(i=>(console.log(i),(0,_._)(i))))}addComment(o){return this.http.post(this.commentUrl,o)}updateComment(o,i){return this.http.put(`${this.commentUrl}/${o}`,i).pipe((0,g.K)(c=>(console.log(c),(0,_._)(c))))}deleteComment(o){return this.http.delete(`${this.commentUrl}/${o}`).pipe((0,g.K)(i=>(console.log(i),(0,_._)(i))))}};let n=s;return s.\u0275fac=function(i){return new(i||s)(t.LFG(T.eN))},s.\u0275prov=t.Yz7({token:s,factory:s.\u0275fac,providedIn:"root"}),n})();var P=l(2541);function A(n,s){if(1&n){const e=t.EpF();t.TgZ(0,"button",14),t.NdJ("click",function(){t.CHM(e);const i=t.oxw().index,c=t.oxw(2);return t.KtG(c.onPageChange(i))}),t._uU(1),t.qZA()}if(2&n){const e=t.oxw().index;t.xp6(1),t.Oqu(e+1)}}function U(n,s){if(1&n&&(t.TgZ(0,"button",15),t._uU(1),t.qZA()),2&n){const e=t.oxw().index;t.xp6(1),t.Oqu(e+1)}}function y(n,s){if(1&n&&(t.TgZ(0,"span"),t.YNc(1,A,2,1,"button",12),t.YNc(2,U,2,1,"button",13),t.qZA()),2&n){const e=s.index,o=t.oxw(2);t.xp6(1),t.Q6J("ngIf",o.page.pageable.pageNumber!==e),t.xp6(1),t.Q6J("ngIf",o.page.pageable.pageNumber===e)}}const h=function(){return[]};function N(n,s){if(1&n){const e=t.EpF();t.TgZ(0,"div",8)(1,"div",9)(2,"button",10),t.NdJ("click",function(){t.CHM(e);const i=t.oxw();return t.KtG(i.onPageChange(i.page.pageable.pageNumber-1))}),t._uU(3,"Previous"),t.qZA(),t.YNc(4,y,3,2,"span",11),t.TgZ(5,"button",10),t.NdJ("click",function(){t.CHM(e);const i=t.oxw();return t.KtG(i.onPageChange(i.page.pageable.pageNumber+1))}),t._uU(6,"Next"),t.qZA()()()}if(2&n){const e=t.oxw();t.xp6(2),t.Q6J("disabled",0===e.page.pageable.pageNumber),t.xp6(2),t.Q6J("ngForOf",t.DdM(3,h).constructor(e.page.totalPages)),t.xp6(1),t.Q6J("disabled",e.page.pageable.pageNumber===e.page.totalPages-1)}}function q(n,s){if(1&n){const e=t.EpF();t.ynx(0),t.TgZ(1,"div",43)(2,"button",44),t.NdJ("click",function(){t.CHM(e);const i=t.oxw().$implicit,c=t.oxw();return t.KtG(c.delete(i.id))}),t._uU(3," Delete "),t.qZA()(),t.BQk()}}function I(n,s){if(1&n){const e=t.EpF();t.TgZ(0,"div",43)(1,"button",45),t.NdJ("click",function(){t.CHM(e);const i=t.oxw().$implicit,c=t.oxw();return t.KtG(c.report(i.id))}),t._uU(2," Report "),t.qZA()()}}function J(n,s){if(1&n&&t._UZ(0,"img",48),2&n){const e=s.$implicit,o=t.oxw(3);t.Q6J("src",o.apiUrl+e.url,t.LSH)}}function w(n,s){if(1&n&&(t.TgZ(0,"div",46),t.YNc(1,J,1,1,"img",47),t.qZA()),2&n){const e=t.oxw().$implicit;t.xp6(1),t.Q6J("ngForOf",e.postImage)}}function k(n,s){if(1&n&&t._UZ(0,"video",50),2&n){const e=s.$implicit,o=t.oxw(3);t.Q6J("src",o.apiUrl+e.url,t.LSH)}}function H(n,s){if(1&n&&(t.TgZ(0,"div",46),t.YNc(1,k,1,1,"video",49),t.qZA()),2&n){const e=t.oxw().$implicit;t.xp6(1),t.Q6J("ngForOf",e.postVideo)}}function L(n,s){if(1&n){const e=t.EpF();t.TgZ(0,"button",51),t.NdJ("click",function(){t.CHM(e);const i=t.oxw().$implicit,c=t.oxw();return t.KtG(c.likePost(i.id))}),t._UZ(1,"i",52),t._uU(2," Like "),t.qZA()}}function F(n,s){if(1&n){const e=t.EpF();t.TgZ(0,"button",53),t.NdJ("click",function(){t.CHM(e);const i=t.oxw().$implicit,c=t.oxw();return t.KtG(c.likePost(i.id))}),t._UZ(1,"i",52),t._uU(2," Liked "),t.qZA()}}function Q(n,s){if(1&n&&(t.TgZ(0,"div")(1,"div",56),t._UZ(2,"img",57),t.TgZ(3,"div")(4,"strong"),t._uU(5),t.qZA(),t.TgZ(6,"p",58),t._uU(7),t.qZA()(),t.TgZ(8,"div",59)(9,"div")(10,"i"),t._uU(11),t.ALo(12,"timeAgo"),t.qZA()()()()()),2&n){const e=s.$implicit,o=t.oxw(4);t.xp6(2),t.s9C("src",o.apiUrl+(null==e.user.profilePicture?null:e.user.profilePicture.url),t.LSH),t.xp6(3),t.hij("",e.user.fullName,":"),t.xp6(2),t.Oqu(e.commentText),t.xp6(4),t.Oqu(t.lcZ(12,4,e.createdAt))}}function O(n,s){if(1&n){const e=t.EpF();t.TgZ(0,"div",55)(1,"div",56),t._UZ(2,"img",57),t.TgZ(3,"div")(4,"strong"),t._uU(5),t.qZA(),t.TgZ(6,"p",58),t._uU(7),t.qZA()(),t.TgZ(8,"div",59)(9,"div")(10,"i"),t._uU(11),t.ALo(12,"timeAgo"),t.qZA()(),t.TgZ(13,"small",21),t._uU(14),t.qZA(),t.TgZ(15,"a",60),t._uU(16," Reply "),t.qZA()()(),t.TgZ(17,"div",39)(18,"div",61),t.YNc(19,Q,13,6,"div",11),t.qZA(),t.TgZ(20,"div",62),t._UZ(21,"input",63),t.TgZ(22,"button",64),t.NdJ("click",function(){const c=t.CHM(e).$implicit,r=t.oxw(3);return t.KtG(r.addCommentReply(c.id))}),t._uU(23,"Reply"),t.qZA()()(),t._UZ(24,"hr"),t.qZA()}if(2&n){const e=s.$implicit,o=t.oxw(3);t.xp6(2),t.s9C("src",o.apiUrl+(null==e.user.profilePicture?null:e.user.profilePicture.url),t.LSH),t.xp6(3),t.hij("",e.user.fullName,":"),t.xp6(2),t.Oqu(e.commentText),t.xp6(4),t.Oqu(t.lcZ(12,9,e.createdAt)),t.xp6(3),t.hij("",e.replies?e.replies.length:0," Replies"),t.xp6(1),t.uIk("data-bs-target","#collapseReply"+e.id),t.xp6(2),t.Q6J("id","collapseReply"+e.id),t.xp6(2),t.Q6J("ngForOf",e.replies),t.xp6(2),t.s9C("id","commentReply"+e.id)}}function S(n,s){if(1&n&&(t.TgZ(0,"div"),t.YNc(1,O,25,11,"div",54),t.qZA()),2&n){const e=t.oxw().$implicit;t.xp6(1),t.Q6J("ngForOf",e.comments)}}function M(n,s){1&n&&(t.TgZ(0,"p"),t._uU(1,"No comments yet."),t.qZA())}function Y(n,s){1&n&&(t.TgZ(0,"h5",65),t._uU(1,"Suggested products : "),t.qZA())}function $(n,s){if(1&n&&(t.TgZ(0,"div")(1,"div",67)(2,"div",20),t._UZ(3,"img",68),t.qZA(),t.TgZ(4,"div",69)(5,"p",70),t._uU(6),t.qZA(),t.TgZ(7,"p",70),t._uU(8),t.qZA()()()()),2&n){const e=s.$implicit,o=t.oxw(3);t.xp6(2),t.Q6J("routerLink","/products/productDetails/"+e.id),t.xp6(1),t.Q6J("src",o.apiUrl+e.mainImage.url,t.LSH),t.xp6(3),t.Oqu(e.name),t.xp6(2),t.hij("by ",e.seller.fullName,"")}}function E(n,s){if(1&n&&(t.TgZ(0,"div",66),t.YNc(1,$,9,4,"div",11),t.qZA()),2&n){const e=t.oxw().$implicit;t.xp6(1),t.Q6J("ngForOf",e.products)}}function j(n,s){if(1&n){const e=t.EpF();t.TgZ(0,"div",16)(1,"div",17),t._UZ(2,"img",18),t.TgZ(3,"div")(4,"h5",19)(5,"a",20),t._uU(6),t.qZA()(),t.TgZ(7,"small",21),t._uU(8),t.ALo(9,"timeAgo"),t.qZA()(),t.TgZ(10,"div",22),t._uU(11),t.YNc(12,q,4,0,"ng-container",23),t.YNc(13,I,3,0,"ng-template",null,24,t.W1O),t.qZA()(),t.TgZ(15,"div",25)(16,"p",26),t._uU(17),t.qZA(),t.YNc(18,w,2,1,"div",27),t.YNc(19,H,2,1,"div",27),t.qZA(),t.TgZ(20,"div",28)(21,"div",29)(22,"div"),t.YNc(23,L,3,0,"button",30),t.YNc(24,F,3,0,"button",31),t.TgZ(25,"button",32),t._UZ(26,"i",33),t._uU(27," Comment "),t.qZA(),t.TgZ(28,"button",34),t.NdJ("click",function(){const c=t.CHM(e).$implicit,r=t.oxw();return t.KtG(r.sharePsot(c.id))}),t._UZ(29,"i",35),t._uU(30," Share "),t.qZA()(),t.TgZ(31,"small",21),t._uU(32),t.qZA()(),t.TgZ(33,"div",36),t._UZ(34,"input",37),t.TgZ(35,"button",38),t.NdJ("click",function(){const c=t.CHM(e).$implicit,r=t.oxw();return t.KtG(r.addComment(c.id))}),t._uU(36,"Post"),t.qZA()()(),t.TgZ(37,"div",39)(38,"div",28),t.YNc(39,S,2,1,"div",23),t.YNc(40,M,2,0,"ng-template",null,40,t.W1O),t.qZA()(),t.YNc(42,Y,2,0,"h5",41),t.YNc(43,E,2,1,"div",42),t.qZA()}if(2&n){const e=s.$implicit,o=t.MAs(14),i=t.MAs(41),c=t.oxw();t.xp6(2),t.Q6J("src",c.getProfilePic(e.creator),t.LSH),t.xp6(3),t.MGl("routerLink","/people/profile/",e.creator.id,""),t.xp6(1),t.Oqu(e.creator.fullName),t.xp6(2),t.Oqu(t.lcZ(9,22,e.createdAt)),t.xp6(3),t.hij(" Report Count : ",e.reporter.length," "),t.xp6(1),t.Q6J("ngIf",e.creator.id==(null==c.user?null:c.user.id))("ngIfElse",o),t.xp6(5),t.Oqu(e.postText),t.xp6(1),t.Q6J("ngIf",e.postImage.length>0),t.xp6(1),t.Q6J("ngIf",e.postVideo.length>0),t.xp6(4),t.Q6J("ngIf",!c.isLiked(e.id)),t.xp6(1),t.Q6J("ngIf",c.isLiked(e.id)),t.xp6(1),t.uIk("data-bs-target","#commentCollapse"+e.id)("aria-controls","commentCollapse"+e.id),t.xp6(7),t.AsE("",e.likers.length," Likes \u2022 ",e.comments.length," Comments"),t.xp6(2),t.s9C("id","comment"+e.id),t.xp6(3),t.Q6J("id","commentCollapse"+e.id),t.xp6(2),t.Q6J("ngIf",e.comments.length>0)("ngIfElse",i),t.xp6(3),t.Q6J("ngIf",e.products.length>0),t.xp6(1),t.Q6J("ngIf",e.products.length>0)}}function G(n,s){if(1&n){const e=t.EpF();t.TgZ(0,"button",14),t.NdJ("click",function(){t.CHM(e);const i=t.oxw().index,c=t.oxw(2);return t.KtG(c.onPageChange(i))}),t._uU(1),t.qZA()}if(2&n){const e=t.oxw().index;t.xp6(1),t.Oqu(e+1)}}function K(n,s){if(1&n&&(t.TgZ(0,"button",15),t._uU(1),t.qZA()),2&n){const e=t.oxw().index;t.xp6(1),t.Oqu(e+1)}}function R(n,s){if(1&n&&(t.TgZ(0,"span"),t.YNc(1,G,2,1,"button",12),t.YNc(2,K,2,1,"button",13),t.qZA()),2&n){const e=s.index,o=t.oxw(2);t.xp6(1),t.Q6J("ngIf",o.page.pageable.pageNumber!==e),t.xp6(1),t.Q6J("ngIf",o.page.pageable.pageNumber===e)}}function B(n,s){if(1&n){const e=t.EpF();t.TgZ(0,"div",8)(1,"div",9)(2,"button",10),t.NdJ("click",function(){t.CHM(e);const i=t.oxw();return t.KtG(i.onPageChange(i.page.pageable.pageNumber-1))}),t._uU(3,"Previous"),t.qZA(),t.YNc(4,R,3,2,"span",11),t.TgZ(5,"button",10),t.NdJ("click",function(){t.CHM(e);const i=t.oxw();return t.KtG(i.onPageChange(i.page.pageable.pageNumber+1))}),t._uU(6,"Next"),t.qZA()()()}if(2&n){const e=t.oxw();t.xp6(2),t.Q6J("disabled",0===e.page.pageable.pageNumber),t.xp6(2),t.Q6J("ngForOf",t.DdM(3,h).constructor(e.page.totalPages)),t.xp6(1),t.Q6J("disabled",e.page.pageable.pageNumber===e.page.totalPages-1)}}let V=(()=>{const s=class{getProfilePic(o){return o.profilePicture?this.apiUrl+o.profilePicture?.url:"assets/logo/logo2.png"}constructor(o,i){this.postService=o,this.commentService=i,this.apiUrl=m.N.apiUrl,this.user=Z.y.getUser(),this.posts=[],this.products=[]}ngOnInit(){this.loadPosts(0)}getProductById(o){return this.products.filter(i=>i.id==o)[0]}addComment(o){let i=document.getElementById("comment"+o);i.value&&this.commentService.addComment({commentText:i.value,imageIds:[],videoIds:[],parentId:null,postId:o}).subscribe(r=>{this.posts.filter(p=>p.id==o)[0].comments.push(r),i.value=""})}addCommentReply(o){let i=document.getElementById("commentReply"+o);i.value&&this.commentService.addComment({commentText:i.value,imageIds:[],videoIds:[],parentId:o,postId:null}).subscribe(r=>{t:for(let p of this.posts)for(let x of p.comments)if(x.id==o){x.replies.push(r);break t}i.value=""})}likePost(o){this.postService.likePost(o).subscribe(i=>{this.posts.filter(c=>c.id==o)[0].likers=i.likers})}sharePsot(o){}onPageChange(o){this.loadPosts(o)}loadPosts(o){this.postService.getPosts(o).subscribe(i=>{this.page=i,this.posts=this.page.content})}isLiked(o){return!!this.user&&this.posts.filter(i=>i.id==o)[0].likers.map(i=>i.id).includes(this.user.id)}delete(o){this.postService.delete(o).subscribe(i=>{this.ngOnInit()})}report(o){this.postService.report(o).subscribe(i=>{this.ngOnInit()})}};let n=s;return s.\u0275fac=function(i){return new(i||s)(t.Y36(v.P),t.Y36(C))},s.\u0275cmp=t.Xpm({type:s,selectors:[["app-home-page"]],decls:9,vars:3,consts:[[1,"my-5"],[1,"row","justify-content-center"],[1,"col-md-10"],["class","d-flex justify-content-center mt-2",4,"ngIf"],["class","card my-4 shadow-sm",4,"ngFor","ngForOf"],[2,"position","fixed","bottom","20px","right","20px"],["routerLink","/home/createPost",1,"btn","btn-success","btn-floating","rounded-circle"],[1,"bi","bi-plus"],[1,"d-flex","justify-content-center","mt-2"],["role","group",1,"btn-group"],["type","button",1,"btn","btn-outline-success",3,"disabled","click"],[4,"ngFor","ngForOf"],["type","button","class","btn btn-outline-success",3,"click",4,"ngIf"],["type","button","class","btn btn-success","disabled","",4,"ngIf"],["type","button",1,"btn","btn-outline-success",3,"click"],["type","button","disabled","",1,"btn","btn-success"],[1,"card","my-4","shadow-sm"],[1,"card-header","d-flex"],["width","50","height","50","alt","User profile picture",1,"rounded-circle","me-3",3,"src"],[1,"mb-0"],[3,"routerLink"],[1,"text-muted"],[1,"ms-auto"],[4,"ngIf","ngIfElse"],["elseBlock",""],[1,"card-body"],[1,"mb-3"],["class","d-flex justify-content-around row mb-3",4,"ngIf"],[1,"card-footer","align-items-center"],[1,"d-flex","justify-content-between","align-items-center"],["class","btn btn-outline-primary btn-sm me-2",3,"click",4,"ngIf"],["class","btn btn-primary btn-sm me-2",3,"click",4,"ngIf"],["type","button","data-bs-toggle","collapse","aria-expanded","false",1,"btn","btn-outline-secondary","btn-sm","me-2"],[1,"bi","bi-chat"],[1,"btn","btn-outline-secondary","btn-sm",3,"click"],[1,"bi","bi-share"],[1,"input-group","my-3"],["type","text","placeholder","Write a comment...",1,"form-control",3,"id"],["type","button",1,"btn","btn-primary",3,"click"],[1,"collapse",3,"id"],["noComment",""],["class","card-footer",4,"ngIf"],["class","d-flex justify-content-around",4,"ngIf"],[1,"d-grid","gap-2"],["type","button",1,"btn","btn-danger",3,"click"],["type","button",1,"btn","btn-warning",3,"click"],[1,"d-flex","justify-content-around","row","mb-3"],["class","img-fluid rounded col-3 h-100","alt","Post image",3,"src",4,"ngFor","ngForOf"],["alt","Post image",1,"img-fluid","rounded","col-3","h-100",3,"src"],["class","img-fluid rounded col-3 h-100","controls","",3,"src",4,"ngFor","ngForOf"],["controls","",1,"img-fluid","rounded","col-3","h-100",3,"src"],[1,"btn","btn-outline-primary","btn-sm","me-2",3,"click"],[1,"bi","bi-hand-thumbs-up"],[1,"btn","btn-primary","btn-sm","me-2",3,"click"],["class","mb-2",4,"ngFor","ngForOf"],[1,"mb-2"],[1,"d-flex","align-items-center"],["height","30","alt","",1,"rounded-circle","me-2",3,"src"],[1,"mb-1"],[1,"text-end","ms-auto"],["data-bs-toggle","collapse","aria-expanded","false","aria-controls","collapseReply",1,"btn","btn-link"],[1,"ms-5"],[1,"input-group","my-2"],["type","text","placeholder","Write a reply...","aria-label","Reply input",1,"form-control",3,"id"],["type","button",1,"btn","btn-outline-primary",3,"click"],[1,"card-footer"],[1,"d-flex","justify-content-around"],[1,"card","shadow-sm","m-2"],["alt","",1,"card-img-top",2,"height","100px","object-fit","content",3,"src"],[1,"card-body","p-2"],[1,"card-text"]],template:function(i,c){1&i&&(t.TgZ(0,"div",0)(1,"div",1)(2,"div",2),t.YNc(3,N,7,4,"div",3),t.YNc(4,j,44,24,"div",4),t.YNc(5,B,7,4,"div",3),t.qZA()()(),t.TgZ(6,"div",5)(7,"a",6),t._UZ(8,"i",7),t.qZA()()),2&i&&(t.xp6(3),t.Q6J("ngIf",c.page),t.xp6(1),t.Q6J("ngForOf",c.posts),t.xp6(1),t.Q6J("ngIf",c.page))},dependencies:[u.sg,u.O5,d.rH,P.e]}),n})();var a=l(433),D=l(610),W=l(6658);function z(n,s){if(1&n&&(t.TgZ(0,"div",30),t._UZ(1,"img",31),t.qZA()),2&n){const e=s.$implicit,o=s.index,i=t.oxw(2);t.xp6(1),t.MGl("alt","Image ",o+1,""),t.Q6J("src",i.apiURL+e.url,t.LSH)}}function X(n,s){if(1&n&&(t.TgZ(0,"div"),t.YNc(1,z,2,2,"div",29),t.qZA()),2&n){const e=t.oxw();t.xp6(1),t.Q6J("ngForOf",e.imageList)}}function tt(n,s){if(1&n&&(t.TgZ(0,"div",30),t._UZ(1,"video",32),t.qZA()),2&n){const e=s.$implicit,o=t.oxw(2);t.xp6(1),t.Q6J("src",o.apiURL+e.url,t.LSH)}}function et(n,s){if(1&n&&(t.TgZ(0,"div"),t.YNc(1,tt,2,1,"div",29),t.qZA()),2&n){const e=t.oxw();t.xp6(1),t.Q6J("ngForOf",e.videoList)}}function ot(n,s){if(1&n&&(t.TgZ(0,"div",33)(1,"div",34),t._UZ(2,"img",35),t.TgZ(3,"div",36)(4,"h6",37),t._uU(5),t.qZA(),t.TgZ(6,"p",38),t._uU(7),t.qZA()()()()),2&n){const e=s.$implicit,o=t.oxw();t.xp6(2),t.s9C("src",o.apiURL+e.mainImage.url,t.LSH),t.xp6(3),t.Oqu(e.name),t.xp6(2),t.Oqu(e.seller.fullName)}}function nt(n,s){if(1&n){const e=t.EpF();t.TgZ(0,"button",39),t.NdJ("click",function(){const c=t.CHM(e).$implicit,r=t.oxw();return t.KtG(r.addProductToList(c))}),t.TgZ(1,"div",40),t._UZ(2,"img",41),t.TgZ(3,"div")(4,"h6",42),t._uU(5),t.qZA(),t.TgZ(6,"small"),t._uU(7),t.qZA()(),t._UZ(8,"img",43),t.qZA()()}if(2&n){const e=s.$implicit,o=t.oxw();t.xp6(2),t.s9C("src",o.apiURL+e.mainImage.url,t.LSH),t.xp6(3),t.Oqu(e.name),t.xp6(2),t.hij("by ",e.seller.fullName,""),t.xp6(1),t.s9C("src",o.apiURL+e.seller.profilePicture.url,t.LSH)}}const it=[{path:"",redirectTo:"homePage",pathMatch:"full"},{path:"homePage",component:V},{path:"createPost",component:(()=>{const s=class{constructor(o,i,c,r){this.postService=o,this.productService=i,this.filesService=c,this.router=r,this.apiURL=m.N.apiUrl,this.postText="",this.imageList=[],this.videoList=[],this.productList=[],this.privacy="public",this.location="",this.postTag="",this.productSuggestionnList=[]}ngOnInit(){}onSubmit(){let o=new a.cw({postText:new a.NI(this.postText),location:new a.NI(this.location),isPublic:new a.NI("public"==this.privacy),sharedPostId:new a.NI(this.postTag),postImage:new a.NI(this.imageList.map(i=>i.id)),postVideo:new a.NI(this.videoList.map(i=>i.id)),products:new a.NI(this.productList.map(i=>i.id))});this.postService.createPost(o.value).subscribe(i=>{alert("Post created successfully!"),this.router.navigate(["/home"])})}handleImageInput(){const o=document.getElementById("image");if(o.files&&o.files.length>0)for(let i=0;i<o.files.length;i++)this.filesService.uploadImage(o.files[i]).subscribe(r=>{setTimeout(()=>{this.imageList.push({id:r.id,url:r.url}),o.value=""},1e3)})}handleVideoInput(){const o=document.getElementById("video");if(o.files&&o.files.length>0)for(let i=0;i<o.files.length;i++)this.filesService.uploadVideo(o.files[i]).subscribe(r=>{setTimeout(()=>{this.videoList.push({id:r.id,url:r.url}),o.value=""},1e3)})}handleProductInput(o){let c=o.target.value;""!=c?this.productService.searchProducts(c).subscribe(r=>{this.productSuggestionnList=r.content,console.log(this.productSuggestionnList)}):this.productSuggestionnList=[]}addProductToList(o){this.productList.push(o),document.getElementById("productInput").value="",this.productSuggestionnList=[]}};let n=s;return s.\u0275fac=function(i){return new(i||s)(t.Y36(v.P),t.Y36(D.s),t.Y36(W.n),t.Y36(d.F0))},s.\u0275cmp=t.Xpm({type:s,selectors:[["app-create-post"]],decls:57,vars:8,consts:[[1,"m-5","shadow","p-5"],[1,"text-center","text-primary"],[1,"mb-3"],["for","content",1,"form-label","h4"],["id","content","rows","4","placeholder","What's on your mind?",1,"form-control",3,"ngModel","ngModelChange"],[1,"row"],[1,"col"],["for","imageList",1,"form-label","h4"],[4,"ngIf"],["for","image",1,"form-label"],["type","file","id","image","accept","image/*","multiple","",1,"form-control",3,"change"],["for","videoList h4",1,"form-label","h4"],["for","video",1,"form-label"],["type","file","id","video","accept","video/*","multiple","",1,"form-control",3,"change"],[1,"row","mb-3"],["class","col-4",4,"ngFor","ngForOf"],["type","text","placeholder","Enter product","id","productInput",1,"form-control",3,"input"],[1,"list-group"],["class","list-group-item list-group-item-action",3,"click",4,"ngFor","ngForOf"],["for","privacy",1,"form-label","h4"],[1,"form-select",3,"ngModel","ngModelChange"],["value","public"],["value","private"],["for","location",1,"form-label","h4"],["type","text","id","location","placeholder","Enter location",1,"form-control",3,"ngModel","ngModelChange"],[1,"h4"],["type","text","placeholder","Enter post tag","aria-label","Post Tag",1,"form-control",3,"ngModel","ngModelChange"],[1,"text-center"],["type","button",1,"btn","btn-outline-success","w-50",3,"click"],["class","mb-2",4,"ngFor","ngForOf"],[1,"mb-2"],[1,"img-fluid","rounded",3,"src","alt"],["controls","",1,"img-fluid","rounded",3,"src"],[1,"col-4"],[1,"card","shadow-sm","mb-3"],["alt","...",1,"card-img-top",3,"src"],[1,"card-body"],[1,"card-title"],[1,"card-text"],[1,"list-group-item","list-group-item-action",3,"click"],[1,"d-flex","w-100","justify-content-between"],["alt","","height","50",1,"rounded","me-2",3,"src"],[1,"mb-1"],["alt","","height","50",1,"rounded","ms-2",3,"src"]],template:function(i,c){1&i&&(t.TgZ(0,"div",0)(1,"h1",1),t._uU(2,"Create a Post"),t.qZA(),t.TgZ(3,"div")(4,"div",2)(5,"label",3),t._uU(6,"Post Content"),t.qZA(),t.TgZ(7,"textarea",4),t.NdJ("ngModelChange",function(p){return c.postText=p}),t.qZA()(),t.TgZ(8,"div",5)(9,"div",6)(10,"div",2)(11,"label",7),t._uU(12,"Image List"),t.qZA(),t.YNc(13,X,2,1,"div",8),t.qZA(),t.TgZ(14,"div",2)(15,"label",9),t._uU(16,"Image"),t.qZA(),t.TgZ(17,"input",10),t.NdJ("change",function(){return c.handleImageInput()}),t.qZA()()(),t.TgZ(18,"div",6)(19,"div",2)(20,"label",11),t._uU(21,"Video List"),t.qZA(),t.YNc(22,et,2,1,"div",8),t.qZA(),t.TgZ(23,"div",2)(24,"label",12),t._uU(25,"Video"),t.qZA(),t.TgZ(26,"input",13),t.NdJ("change",function(){return c.handleVideoInput()}),t.qZA()()()(),t.TgZ(27,"div",2)(28,"h4"),t._uU(29,"Products"),t.qZA(),t.TgZ(30,"div",14),t.YNc(31,ot,8,3,"div",15),t.qZA(),t.TgZ(32,"div",2)(33,"label",12),t._uU(34,"Product"),t.qZA(),t.TgZ(35,"input",16),t.NdJ("input",function(p){return c.handleProductInput(p)}),t.qZA(),t.TgZ(36,"div",17),t.YNc(37,nt,9,4,"button",18),t.qZA()()(),t.TgZ(38,"div",2)(39,"label",19),t._uU(40,"Privacy"),t.qZA(),t.TgZ(41,"select",20),t.NdJ("ngModelChange",function(p){return c.privacy=p}),t.TgZ(42,"option",21),t._uU(43,"Public"),t.qZA(),t.TgZ(44,"option",22),t._uU(45,"Private"),t.qZA()()(),t.TgZ(46,"div",2)(47,"label",23),t._uU(48,"Location"),t.qZA(),t.TgZ(49,"input",24),t.NdJ("ngModelChange",function(p){return c.location=p}),t.qZA()(),t.TgZ(50,"div",2)(51,"p",25),t._uU(52,"Tag another post:"),t.qZA(),t.TgZ(53,"input",26),t.NdJ("ngModelChange",function(p){return c.postTag=p}),t.qZA()(),t.TgZ(54,"div",27)(55,"button",28),t.NdJ("click",function(){return c.onSubmit()}),t._uU(56,"Submit"),t.qZA()()()()),2&i&&(t.xp6(7),t.Q6J("ngModel",c.postText),t.xp6(6),t.Q6J("ngIf",c.imageList&&c.imageList.length>0),t.xp6(9),t.Q6J("ngIf",c.videoList&&c.videoList.length>0),t.xp6(9),t.Q6J("ngForOf",c.productList),t.xp6(6),t.Q6J("ngForOf",c.productSuggestionnList),t.xp6(4),t.Q6J("ngModel",c.privacy),t.xp6(8),t.Q6J("ngModel",c.location),t.xp6(4),t.Q6J("ngModel",c.postTag))},dependencies:[u.sg,u.O5,a.YN,a.Kr,a.Fj,a.EJ,a.JJ,a.On]}),n})()}];let st=(()=>{const s=class{};let n=s;return s.\u0275fac=function(i){return new(i||s)},s.\u0275mod=t.oAB({type:s}),s.\u0275inj=t.cJS({imports:[d.Bz.forChild(it),d.Bz]}),n})(),ct=(()=>{const s=class{};let n=s;return s.\u0275fac=function(i){return new(i||s)},s.\u0275mod=t.oAB({type:s}),s.\u0275inj=t.cJS({imports:[u.ez,st,a.u5,a.UX,b.m]}),n})()}}]);