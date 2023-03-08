"use strict";(self.webpackChunkgatsby_portfolio=self.webpackChunkgatsby_portfolio||[]).push([[691],{6084:function(e,t,n){n.d(t,{Rw:function(){return r},_H:function(){return l},cS:function(){return o},pT:function(){return a}});var i=n(2788);const r=i.default.div.withConfig({displayName:"StyledCommon__StyledBannerTitle",componentId:"sc-ec3wzj-0"})(['display:flex;justify-content:center;z-index:999;height:100%;position:inherit;align-items:center;font-family:"Barbra";font-size:6rem;.main{color:',";}.subTitle{color:whitesmoke;}","{font-size:4rem;}","{font-size:3rem;}"],(e=>{var t;return null===(t=e.theme.colors)||void 0===t?void 0:t.pointColor}),(e=>{var t;return null===(t=e.theme.device)||void 0===t?void 0:t.tablet}),(e=>{var t;return null===(t=e.theme.device)||void 0===t?void 0:t.mobileS})),o=i.default.img.withConfig({displayName:"StyledCommon__StarDivLeft",componentId:"sc-ec3wzj-1"})(["width:50px;height:50px;","{width:25px;height:25px;}"],(e=>{var t;return null===(t=e.theme.device)||void 0===t?void 0:t.mobile})),l=(0,i.default)(o).withConfig({displayName:"StyledCommon__StarDivRight",componentId:"sc-ec3wzj-2"})(["transform:rotate(180deg);"]),a=(0,i.keyframes)(["0%{opacity:0;}100%{opacity:1;}"])},2839:function(e,t,n){n.d(t,{Z:function(){return o}});var i=n(7294);const r=n(2788).default.main.withConfig({displayName:"StyledLayout",componentId:"sc-1536vtl-0"})(["display:flex;flex-direction:column;width:100%;background:",";height:auto;"],(e=>{var t;return null===(t=e.theme.colors)||void 0===t?void 0:t.background}));var o=e=>{let{children:t}=e;return i.createElement(r,null,t)}},4873:function(e,t,n){n.r(t),n.d(t,{Head:function(){return me},default:function(){return ce}});var i=n(7294),r=n(2788);const o=r.default.div.withConfig({displayName:"StyledHeader__HeaderStyled",componentId:"sc-wd9g38-0"})(["width:100%;color:",";display:flex;height:70px;background:",";justify-content:space-between;padding:0 2rem;div{align-self:center;font-size:1rem;font-weight:800;","{font-size:13px;}}"],(e=>{var t;return null===(t=e.theme.colors)||void 0===t?void 0:t.fontColor}),(e=>{var t;return null===(t=e.theme.colors)||void 0===t?void 0:t.background}),(e=>{var t;return null===(t=e.theme.device)||void 0===t?void 0:t.tablet}));var l=()=>i.createElement(o,null,i.createElement("div",null,"SUWON BAEK"),i.createElement("div",null,"WEB DEVELOPER")),a=n(2839),d=n.p+"static/subject-72560a75cdf6df47a581b268af1222c8.png",s=n(2612);const c=r.default.div.withConfig({displayName:"StyledIntro__IntroWrap",componentId:"sc-14s15hf-0"})(["display:flex;width:80%;margin:50px auto;","{flex-direction:column-reverse;justify-content:center;}","{margin:10px auto;}"],(e=>{var t;return null===(t=e.theme.device)||void 0===t?void 0:t.tablet}),(e=>{var t;return null===(t=e.theme.device)||void 0===t?void 0:t.mobileS})),m=r.default.div.withConfig({displayName:"StyledIntro__IntroTitle",componentId:"sc-14s15hf-1"})(['font-family:"Barbra";font-size:3rem;color:',";padding-bottom:20px;"],(e=>{var t;return null===(t=e.theme.colors)||void 0===t?void 0:t.pointColor})),u=r.default.div.withConfig({displayName:"StyledIntro__IntroLeft",componentId:"sc-14s15hf-2"})(["flex:1;"]),p=r.default.div.withConfig({displayName:"StyledIntro__IntroRight",componentId:"sc-14s15hf-3"})(["flex:1;justify-content:end;display:flex;padding-right:30px;div{width:300px;height:300px;position:relative;background:",";border-radius:27px;","{width:200px;height:200px;}}","{margin-bottom:120px;justify-content:center;}"],(e=>{var t;return null===(t=e.theme.colors)||void 0===t?void 0:t.pointColor}),(e=>{var t;return null===(t=e.theme.device)||void 0===t?void 0:t.mobile}),(e=>{var t;return null===(t=e.theme.device)||void 0===t?void 0:t.mobile})),v=r.default.img.withConfig({displayName:"StyledIntro__ProfileImg",componentId:"sc-14s15hf-4"})(["width:300px;position:absolute;right:15px;bottom:0;","{width:200px;}"],(e=>{var t;return null===(t=e.theme.device)||void 0===t?void 0:t.mobile})),f=r.default.img.withConfig({displayName:"StyledIntro__ProfileStar",componentId:"sc-14s15hf-5"})(["position:absolute;top:",";right:",";width:32px;"],(e=>e.top),(e=>e.right)),h=r.default.div.withConfig({displayName:"StyledIntro__IntroContent",componentId:"sc-14s15hf-6"})(["font-size:18px;line-height:30px;color:",";"],(e=>{var t;return null===(t=e.theme.colors)||void 0===t?void 0:t.fontColor}));var g=n(1883);var A=(e,t,n)=>{const r=(0,i.useRef)(null),o=(0,i.useCallback)((e=>{let[i]=e;const{current:o}=r;i.isIntersecting&&o&&(o.style.transitionProperty="opacity transform",o.style.transitionDuration=t+"s",o.style.transitionTimingFunction="cubic-bezier(0, 0, 0.2, 1)",o.style.transitionDelay=n+"s",o.style.opacity="1",o.style.transform="translate3d(0, 0, 0)")}),[]);return(0,i.useEffect)((()=>{let e;const{current:t}=r;if(t)return e=new IntersectionObserver(o,{threshold:.5}),e.observe(t),()=>e&&e.disconnect()}),[n,t]),{ref:r,style:{opacity:0,transform:(e=>{switch(e){case"up":return"translate3d(0, 50%, 0)";case"down":return"translate3d(0, -50%, 0)";case"left":return"translate3d(50%, 0, 0)";case"right":return"translate3d(-50%, 0, 0)";default:return}})(e)}}};var y=e=>{let{lan:t}=e;const n=(()=>{const{site:e}=(0,g.K2)("1946546325"),{hello:t}=e.siteMetadata;return t})(),r=A("right",2,0),o=A("left",2,.5);return(0,i.useEffect)((()=>{}),[t]),i.createElement(c,null,i.createElement(u,r,i.createElement(m,null,"Hello"),i.createElement(h,null,"en"===t?n.en:n.jp)),i.createElement(p,o,i.createElement("div",null,i.createElement(f,{top:"-60px",right:"0px",src:s.Z}),i.createElement(f,{top:"-31px",right:"-20px",src:s.Z}),i.createElement(v,{src:d}))))},b=n(6084);const x=r.default.div.withConfig({displayName:"StyledBanner",componentId:"sc-8u56gg-0"})(["height:500px;width:80%;margin:0 auto;position:relative;animation:"," 2s forwards;"],b.pT),C=r.default.div.withConfig({displayName:"StyledBanner__StyledBannerImg",componentId:"sc-8u56gg-1"})(['width:250px;border-radius:50%;height:60%;position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);display:flex;justify-content:center;align-items:center;background-position:bottom;background-image:url("https://img.freepik.com/free-photo/fluffy-clouds-on-a-blue-sky_23-2148824915.jpg");',"{width:190px;height:55%;}"],(e=>{var t;return null===(t=e.theme.device)||void 0===t?void 0:t.mobile}));var w=()=>i.createElement(x,null,i.createElement(b.Rw,null,i.createElement(b.cS,{src:s.Z}),i.createElement("div",{className:"main"},"Portfolio"),i.createElement(b._H,{src:s.Z})),i.createElement(C,null));var E=n.p+"static/smile-207b5dced86c6555821890cfb789dda1.png";const I=r.default.div.withConfig({displayName:"StyledSkill__SkillsWrap",componentId:"sc-nqf6fb-0"})(["width:80%;margin:100px auto;"]),S=r.default.div.withConfig({displayName:"StyledSkill__SkillsContent",componentId:"sc-nqf6fb-1"})(["width:100%;display:grid;grid-template-columns:repeat(2,1fr);grid-template-rows:repeat(2,1fr);gap:30px;","{grid-template-columns:repeat(1,1fr);}"],(e=>{var t;return null===(t=e.theme.device)||void 0===t?void 0:t.mobile})),j=r.default.div.withConfig({displayName:"StyledSkill__SkillsTitle",componentId:"sc-nqf6fb-2"})(['font-size:4rem;font-family:"Barbra";color:',";position:relative;div{position:absolute;z-index:1;}img{height:200px;width:200px;position:absolute;right:20%;top:10%;right:20%;top:10%;transform:rotate(-45deg);}"],(e=>{var t;return null===(t=e.theme.colors)||void 0===t?void 0:t.pointColor})),N=r.default.div.withConfig({displayName:"StyledSkill__SkillsCard",componentId:"sc-nqf6fb-3"})(["width:100%;padding:20px;border:1px solid ",";border-radius:15px;color:",";","{height:350px;}"],(e=>{var t;return null===(t=e.theme.colors)||void 0===t?void 0:t.fontColor}),(e=>{var t;return null===(t=e.theme.colors)||void 0===t?void 0:t.fontColor}),(e=>{var t;return null===(t=e.theme.device)||void 0===t?void 0:t.mobile})),k=r.default.div.withConfig({displayName:"StyledSkill__SkillCardTitle",componentId:"sc-nqf6fb-4"})(["font-size:20px;padding-bottom:10px;font-weight:600;"]),B=r.default.div.withConfig({displayName:"StyledSkill__SkillsCardBody",componentId:"sc-nqf6fb-5"})(["display:flex;height:150px;flex-wrap:wrap;flex-direction:column;p{padding:10px 0;}","{flex-wrap:nowrap;}"],(e=>{var t;return null===(t=e.theme.device)||void 0===t?void 0:t.mobile}));var _=()=>{const e=(()=>{const{site:e}=(0,g.K2)("680877875"),{skills:t}=e.siteMetadata;return t})();return i.createElement(I,null,i.createElement(S,null,i.createElement(j,null,i.createElement("div",null,"My Skills"),i.createElement("img",{src:E})),e.map(((e,t)=>i.createElement(N,Object.assign({key:t},A("down",2,t/2)),i.createElement(k,null,e.title),i.createElement(B,null,e.content.map(((e,t)=>i.createElement("p",{key:t},e)))))))))};var P=(e,t)=>{const n=(0,i.useRef)(null),r=(0,i.useCallback)((i=>{let[r]=i;const{current:o}=n;r.isIntersecting&&o&&(""!==e?(o.classList.remove("small"),o.classList.add("left")):(o.classList.contains("left")&&o.classList.remove("left"),o.classList.remove("small")),o.style.transitionTimingFunction="cubic-bezier(0, 0, 0.2, 1)",o.style.transitionDelay=t+"s")}),[e]);return(0,i.useEffect)((()=>{let e;const{current:t}=n;if(t)return e=new IntersectionObserver(r,{threshold:.5}),e.observe(t),()=>e&&e.disconnect()}),[e]),{ref:n}};var R=(e,t)=>{const n=(0,i.useRef)(null),r=(0,i.useCallback)((i=>{let[r]=i;const{current:o}=n;r.isIntersecting&&o&&t(e)}),[e]);return(0,i.useEffect)((()=>{let e;const{current:t}=n;if(t)return e=new IntersectionObserver(r,{threshold:.7}),e.observe(t),()=>e&&e.disconnect()}),[e]),{ref:n}};const L=(0,r.keyframes)(["from{transform:rotate(0deg);}to{transform:rotate(360deg);}"]),z=r.default.div.withConfig({displayName:"StyledMyStrengths__RoundWrap",componentId:"sc-1rmss0v-0"})(["position:sticky;top:100px;","{width:100%;height:50vh;display:flex;position:sticky;z-index:999;top:0%;background-color:",";}"],(e=>{var t;return null===(t=e.theme.device)||void 0===t?void 0:t.tablet}),(e=>{var t;return null===(t=e.theme.colors)||void 0===t?void 0:t.background})),Z=(0,r.keyframes)(["from{transform:rotate(-0deg);}to{transform:rotate(-360deg);}"]),W=r.default.div.withConfig({displayName:"StyledMyStrengths__Strength",componentId:"sc-1rmss0v-1"})(["position:absolute;width:150px;"]),M=r.default.div.withConfig({displayName:"StyledMyStrengths__StrengthRound",componentId:"sc-1rmss0v-2"})(["width:70px;height:70px;background:white;border-radius:50%;position:absolute;&.active{background:#ff7400;transition:1s;}"]),O=r.default.div.withConfig({displayName:"StyledMyStrengths__AboutMeRoundOutside",componentId:"sc-1rmss0v-3"})(["width:600px;height:600px;border-radius:50%;margin:0 auto;display:flex;align-items:center;justify-content:center;position:relative;border:1px solid ",";animation:"," 25s infinite;",":first-child{top:-35px;transform:translate(0,-50%);transform-origin:center;animation:"," 25s infinite;}",":nth-child(2){right:-35px;transform:translate(50%,0px);animation:"," 25s infinite;}",":nth-child(3){bottom:-35px;transform:translate(0,-50%);animation:"," 25s infinite;}",":nth-child(4){left:-35px;transform:translate(-50%,0);animation:"," 25s infinite;","{right:0;transform:translate(40%,0px);}}","{width:400px;height:400px;}"],(e=>{var t;return null===(t=e.theme.colors)||void 0===t?void 0:t.fontColor}),L,M,Z,M,Z,M,Z,M,Z,W,(e=>{var t;return null===(t=e.theme.device)||void 0===t?void 0:t.tablet})),T=r.default.div.withConfig({displayName:"StyledMyStrengths__AboutMeRoundInside",componentId:"sc-1rmss0v-4"})(["width:300px;background:",';height:300px;border-radius:50%;font-family:"Barbra";top:0%;position:absolute;left:50%;transform:translate(-50%,50%);display:flex;justify-content:center;align-items:center;font-size:3rem;color:',";text-align:center;","{top:-50px;width:250px;height:250px;font-size:2rem;}","{width:200px;height:200px;transform:translate(-50%,70%);}"],(e=>{var t;return null===(t=e.theme.colors)||void 0===t?void 0:t.fontColor}),(e=>{var t;return null===(t=e.theme.colors)||void 0===t?void 0:t.background}),(e=>{var t;return null===(t=e.theme.device)||void 0===t?void 0:t.tablet}),(e=>{var t;return null===(t=e.theme.device)||void 0===t?void 0:t.mobile})),G=r.default.div.withConfig({displayName:"StyledMyStrengths__AboutMeWrap",componentId:"sc-1rmss0v-5"})(["width:100%;margin:200px auto;","{position:relative;height:500vh;margin-bottom:500px;}"],(e=>{var t;return null===(t=e.theme.device)||void 0===t?void 0:t.tablet})),F=(r.default.div.withConfig({displayName:"StyledMyStrengths__AboutMeContentWrap",componentId:"sc-1rmss0v-6"})(["width:100%;flex-direction:column;height:4000px;transform:cubic-bezier(0,0,0.2,1);"]),r.default.div.withConfig({displayName:"StyledMyStrengths__AboutMeRoundWrap",componentId:"sc-1rmss0v-7"})(["position:relative;width:800px;height:800px;margin:0 auto;position:sticky;transition:0.5s;top:100px;","{transform:scale(0.8);margin:0;height:0;top:20%;}","{transform:scale(0.5);}&.left{transition:0.5s;transform:scale(0.5) translateX(60%);","{transform:scale(0.5);margin:0;}","{transform:scale(0.5);margin:0;}}&.small{transition:0.5s;transform:scale(0.6) translateX(60%);","{transform:scale(0.4) translateX(-50%) translateY(150%);}","{transform:scale(0.4) translateX(-50%) translateY(150%);}}"],(e=>{var t;return null===(t=e.theme.device)||void 0===t?void 0:t.tablet}),(e=>{var t;return null===(t=e.theme.device)||void 0===t?void 0:t.mobile}),(e=>{var t;return null===(t=e.theme.device)||void 0===t?void 0:t.tablet}),(e=>{var t;return null===(t=e.theme.device)||void 0===t?void 0:t.mobile}),(e=>{var t;return null===(t=e.theme.device)||void 0===t?void 0:t.tablet}),(e=>{var t;return null===(t=e.theme.device)||void 0===t?void 0:t.mobile}))),X=r.default.div.withConfig({displayName:"StyledMyStrengths__AboutMeStrenth",componentId:"sc-1rmss0v-8"})(["height:500px;width:45%;","{width:100%;margin-bottom:200px;padding:20px;}","{padding:20px;}&.fadeOut{opacity:0;transition-delay:0.2s;transition-duration:1s;","{opacity:1;}}&.fadeIn{opacity:1;transition:cubic-bezier(0,0,0.2,1);transition-delay:0.1s;transition-duration:1s;transform:translate3d(0,0,0);","{transition-delay:0.1s;}}"],(e=>{var t;return null===(t=e.theme.device)||void 0===t?void 0:t.tablet}),(e=>{var t;return null===(t=e.theme.device)||void 0===t?void 0:t.mobile}),(e=>{var t;return null===(t=e.theme.device)||void 0===t?void 0:t.mobile}),(e=>{var t;return null===(t=e.theme.device)||void 0===t?void 0:t.mobile})),Y=r.default.div.withConfig({displayName:"StyledMyStrengths__AboutMeStrengWrap",componentId:"sc-1rmss0v-9"})(["padding:200px;transform:translateY(-30%);","{padding:120px;transform:translateY(10%);}","{padding:10px;}"],(e=>{var t;return null===(t=e.theme.device)||void 0===t?void 0:t.tablet}),(e=>{var t;return null===(t=e.theme.device)||void 0===t?void 0:t.mobile})),Q=r.default.div.withConfig({displayName:"StyledMyStrengths__AboutMeEnd",componentId:"sc-1rmss0v-10"})(["width:100%;height:200px;margin-top:500px;","{margin-top:0px;}"],(e=>{var t;return null===(t=e.theme.device)||void 0===t?void 0:t.mobile})),H=r.default.div.withConfig({displayName:"StyledMyStrengths__AboutMeStart",componentId:"sc-1rmss0v-11"})(["width:100%;height:500px;","{height:200px;}"],(e=>{var t;return null===(t=e.theme.device)||void 0===t?void 0:t.mobile})),U=r.default.div.withConfig({displayName:"StyledMyStrengths__StrengthTitle",componentId:"sc-1rmss0v-12"})(['font-family:"Barbra";color:',";font-size:3rem;padding-bottom:20px;","{font-size:2rem;}"],(e=>{var t;return null===(t=e.theme.colors)||void 0===t?void 0:t.pointColor}),(e=>{var t;return null===(t=e.theme.device)||void 0===t?void 0:t.tablet})),V=r.default.div.withConfig({displayName:"StyledMyStrengths__StrengthContent",componentId:"sc-1rmss0v-13"})(["line-height:30px;color:",";"],(e=>{var t;return null===(t=e.theme.colors)||void 0===t?void 0:t.fontColor}));var J=e=>{let{lan:t}=e;const n=(()=>{const{site:e}=(0,g.K2)("412430261"),{keyPoint:t}=e.siteMetadata;return t})(),{0:r,1:o}=(0,i.useState)("");return(0,i.useEffect)((()=>{}),[r,t]),i.createElement(i.Fragment,null,i.createElement(G,null,i.createElement(z,null,i.createElement(F,Object.assign({className:"roundWrap"},P(r,.2)),i.createElement(O,{className:""!==r?"left":""},n.map(((e,t)=>i.createElement(M,{key:t,className:(e.title.replace(" ",""),e.title.replace(" ","")===r?"active":"")},i.createElement(W,{key:t},e.title))))),i.createElement(T,{className:""!==r?"left":""},i.createElement("div",null,"These are my strengths")))),i.createElement(Y,null,i.createElement(H,R("",o)),n.map(((e,n)=>i.createElement(X,Object.assign({key:n,className:r!==e.title.replace(" ","")?"fadeOut":"fadeIn"},R(e.title.replace(" ",""),o)),i.createElement(U,null,e.title),i.createElement(V,null,"en"===t?e.content.en:e.content.jp)))),i.createElement(Q,R("",o)))))};var K=e=>{const{allMarkdownRemark:t}=(0,g.K2)("680958743"),{nodes:n}=t;return n.filter((t=>t.frontmatter.group===e))};const D=r.default.div.withConfig({displayName:"StyledProjectList__ProjectWrap",componentId:"sc-uczxia-0"})(["width:100%;margin-top:100px;height:100vh;position:relative;"]),q=r.default.div.withConfig({displayName:"StyledProjectList__ProjectBackground",componentId:"sc-uczxia-1"})(['height:50%;font-size:3rem;position:relative;overflow:hidden;font-family:"Barbra";color:',";p{position:absolute;width:2000px;}p:first-child{transform:translateX(-20%);top:50px;}p:nth-child(2){transform:translateX(-20%);top:200px;}p:nth-child(3){transform:translateX(-40%);top:100px;}"],(e=>{var t;return null===(t=e.theme.colors)||void 0===t?void 0:t.pointColor})),$=r.default.div.withConfig({displayName:"StyledProjectList__ProjectListContainer",componentId:"sc-uczxia-2"})(["width:80%;margin:0 auto;background:white;display:flex;align-items:center;transform:translateY(-50%);height:50%;","{height:80%;transform:translateY(-45%);}"],(e=>{var t;return null===(t=e.theme.device)||void 0===t?void 0:t.tablet})),ee=r.default.div.withConfig({displayName:"StyledProjectList__ProjectListCard",componentId:"sc-uczxia-3"})(["width:250px;height:80%;border:1px solid;padding:20px;flex-direction:column;justify-content:space-around;display:flex;&:hover{background:#404040;border:1px solid #404040;color:#f5f5f5;transition:0.6s;}","{height:30%;}"],(e=>{var t;return null===(t=e.theme.device)||void 0===t?void 0:t.tablet})),te=r.default.div.withConfig({displayName:"StyledProjectList__ProjectListView",componentId:"sc-uczxia-4"})(["width:60%;height:80%;margin:0 auto;display:flex;align-items:center;overflow:hidden;justify-content:center;",":nth-child(2){border-left:0px;border-right:0px;","{border-top:0px;border-bottom:0px;border-left:1px solid;border-right:1px solid;}}",":last-child{border:1px solid;}","{height:90%;flex-wrap:wrap;align-content:center;}"],ee,(e=>{var t;return null===(t=e.theme.device)||void 0===t?void 0:t.tablet}),ee,(e=>{var t;return null===(t=e.theme.device)||void 0===t?void 0:t.tablet})),ne=r.default.div.withConfig({displayName:"StyledProjectList__LeanMore",componentId:"sc-uczxia-5"})(["text-align:end;cursor:pointer;","{font-size:12px;}"],(e=>{var t;return null===(t=e.theme.device)||void 0===t?void 0:t.mobile})),ie=r.default.div.withConfig({displayName:"StyledProjectList__CardSummary",componentId:"sc-uczxia-6"})(["flex:1;padding-top:50px;line-height:20px;","{font-size:12px;padding:0;}"],(e=>{var t;return null===(t=e.theme.device)||void 0===t?void 0:t.mobile})),re=r.default.div.withConfig({displayName:"StyledProjectList__ProjectListTitle",componentId:"sc-uczxia-7"})(["font-size:1.5rem;font-weight:600;","{font-size:15px;padding-bottom:10px;}"],(e=>{var t;return null===(t=e.theme.device)||void 0===t?void 0:t.mobile})),oe=r.default.div.withConfig({displayName:"StyledProjectList__ProjectArrow",componentId:"sc-uczxia-8"})(['font-family:"Barbra";font-size:5rem;font-weight:600;margin:0 auto;:hover{cursor:pointer;color:#404040;transition:0.3s;}']);var le=e=>{let{lan:t}=e;const{0:n,1:r}=(0,i.useState)(1),{0:o,1:l}=(0,i.useState)([]),a=K(t),d=Math.ceil(a.length/3);new Array(10);return(0,i.useEffect)((()=>{console.log(a),(()=>{const e=3*(n-1),t=a.slice(e,e+3);l(t)})()}),[n,t]),i.createElement(D,{id:"projectList"},i.createElement(q,null,[1,2].map((e=>i.createElement("p",null,"Here are my Projects * Here are my Projects * Here are my Projects * Here are my Projects * Here are my Projects * Here are my Projects * Here are my Projects * Here are my Projects * Here are my Projects * Here are my Projects * Here are my Projects * Here are my Projects")))),i.createElement($,null,i.createElement(oe,{onClick:()=>{n>1&&r(n-1)}},"<"),i.createElement(te,null,o.length>0?o.map(((e,t)=>{var n;return i.createElement(ee,{key:t},i.createElement(re,null,null===(n=e.frontmatter)||void 0===n?void 0:n.title),i.createElement(ie,null,e.frontmatter.summary),i.createElement(ne,null,i.createElement(g.rU,{to:"/projcet/"+e.id},"Learn More")))})):i.createElement(i.Fragment,null)),i.createElement(oe,{onClick:()=>{n<d&&r(n+1)}},">")))};const ae="undefined"!=typeof window;var de=()=>{let e="en";if(ae){const t=window.localStorage.getItem("lan");t&&(e=t)}const{0:t,1:n}=(0,i.useState)(e);return[()=>{(e=>{window.localStorage.setItem("lan",e),n(e)})("en"==t?"jp":"en")},t]};const se=r.default.div.withConfig({displayName:"pages__LanguageBtn",componentId:"sc-1dyb5uh-0"})(["height:50px;width:50px;background:",";color:",";position:fixed;bottom:20;padding:10px;bottom:20px;left:20px;border-radius:50%;display:flex;justify-content:center;align-items:center;"],(e=>{var t;return null===(t=e.theme.colors)||void 0===t?void 0:t.fontColor}),(e=>{var t;return null===(t=e.theme.colors)||void 0===t?void 0:t.background}));var ce=()=>{const[e,t]=de(),{0:n,1:r}=(0,i.useState)("");return(0,i.useEffect)((()=>{r(t)}),[t]),i.createElement(i.Fragment,null,i.createElement(l,null),i.createElement(a.Z,null,i.createElement(w,null),i.createElement(y,{lan:n}),i.createElement(_,null),i.createElement(J,{lan:n}),i.createElement(le,{lan:n}),i.createElement(se,{onClick:e},"en"===n?"en":"jp")))};const me=()=>i.createElement("title",null,"Portfolio")},2612:function(e,t){t.Z="data:image/png;base64,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"}}]);
//# sourceMappingURL=component---src-pages-index-tsx-2124b465fe766464ff19.js.map