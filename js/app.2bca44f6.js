(function(e){function t(t){for(var c,l,r=t[0],u=t[1],o=t[2],b=0,f=[];b<r.length;b++)l=r[b],Object.prototype.hasOwnProperty.call(i,l)&&i[l]&&f.push(i[l][0]),i[l]=0;for(c in u)Object.prototype.hasOwnProperty.call(u,c)&&(e[c]=u[c]);s&&s(t);while(f.length)f.shift()();return a.push.apply(a,o||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],c=!0,r=1;r<n.length;r++){var u=n[r];0!==i[u]&&(c=!1)}c&&(a.splice(t--,1),e=l(l.s=n[0]))}return e}var c={},i={app:0},a=[];function l(t){if(c[t])return c[t].exports;var n=c[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,l),n.l=!0,n.exports}l.m=e,l.c=c,l.d=function(e,t,n){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},l.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(l.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var c in e)l.d(n,c,function(t){return e[t]}.bind(null,c));return n},l.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="/Portfolio-with-vue-js-3/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],u=r.push.bind(r);r.push=t,r=r.slice();for(var o=0;o<r.length;o++)t(r[o]);var s=u;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},1895:function(e,t,n){},"1de5":function(e,t,n){"use strict";n("87ec")},"4f1d":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var c=n("7a23");function i(e,t,n,i,a,l){var r=Object(c["x"])("navBar"),u=Object(c["x"])("router-view");return Object(c["q"])(),Object(c["e"])(c["a"],null,[Object(c["h"])(r),Object(c["h"])(u)],64)}var a=function(e){return Object(c["t"])("data-v-60993939"),e=e(),Object(c["r"])(),e},l={class:"desk-nav"},r={class:"nav-right"},u=Object(c["g"])("logo Ayoub"),o={class:"nav-center"},s=Object(c["g"])("Blogs"),b=Object(c["g"])("About"),f=Object(c["g"])("Contact"),d={class:"nav-left"},j=a((function(){return Object(c["f"])("img",{class:"icon",src:"github.png",alt:""},null,-1)})),m=a((function(){return Object(c["f"])("img",{src:"twitter-sign.png",alt:"",class:"icon"},null,-1)})),O=a((function(){return Object(c["f"])("img",{src:"linkedin.png",alt:"",class:"icon"},null,-1)})),p=a((function(){return Object(c["f"])("span",null,null,-1)})),v=a((function(){return Object(c["f"])("span",null,null,-1)})),h=a((function(){return Object(c["f"])("span",null,null,-1)})),g=[p,v,h],q={class:"mobile",ref:"mobile"},_={class:"mobile-list"},x=Object(c["g"])("Blogs"),y=Object(c["g"])("About"),k=Object(c["g"])("Contact"),E={class:"mobile-reseau"},L=a((function(){return Object(c["f"])("img",{class:"icon",src:"github.png",alt:""},null,-1)})),w=a((function(){return Object(c["f"])("img",{src:"twitter-sign.png",alt:"",class:"icon"},null,-1)})),I=a((function(){return Object(c["f"])("img",{src:"linkedin.png",alt:"",class:"icon"},null,-1)}));function V(e,t,n,i,a,p){var v=Object(c["x"])("router-link");return Object(c["q"])(),Object(c["e"])("nav",null,[Object(c["f"])("ul",l,[Object(c["f"])("div",r,[Object(c["f"])("li",null,[Object(c["h"])(v,{to:"/"},{default:Object(c["E"])((function(){return[u]})),_:1})])]),Object(c["f"])("div",o,[Object(c["f"])("li",null,[Object(c["h"])(v,{to:"/blog"},{default:Object(c["E"])((function(){return[s]})),_:1})]),Object(c["f"])("li",null,[Object(c["h"])(v,{to:"/about"},{default:Object(c["E"])((function(){return[b]})),_:1})]),Object(c["f"])("li",null,[Object(c["h"])(v,{to:"/contact"},{default:Object(c["E"])((function(){return[f]})),_:1})])]),Object(c["f"])("div",d,[Object(c["f"])("li",null,[Object(c["h"])(v,{target:"_blank",to:"/github"},{default:Object(c["E"])((function(){return[j]})),_:1})]),Object(c["f"])("li",null,[Object(c["h"])(v,{target:"_blank",to:"/twitter"},{default:Object(c["E"])((function(){return[m]})),_:1})]),Object(c["f"])("li",null,[Object(c["h"])(v,{target:"_blank",to:"/linkedin"},{default:Object(c["E"])((function(){return[O]})),_:1})])]),Object(c["f"])("div",{class:"humbarger",ref:"humbarger",onClick:t[0]||(t[0]=function(e){return p.humbarger()})},g,512)]),Object(c["f"])("div",q,[Object(c["f"])("ul",_,[Object(c["f"])("li",null,[Object(c["h"])(v,{to:"/blog"},{default:Object(c["E"])((function(){return[x]})),_:1})]),Object(c["f"])("li",null,[Object(c["h"])(v,{to:"/about"},{default:Object(c["E"])((function(){return[y]})),_:1})]),Object(c["f"])("li",null,[Object(c["h"])(v,{to:"/contact"},{default:Object(c["E"])((function(){return[k]})),_:1})])]),Object(c["f"])("ul",E,[Object(c["f"])("li",null,[Object(c["h"])(v,{target:"_blank",to:"/github"},{default:Object(c["E"])((function(){return[L]})),_:1})]),Object(c["f"])("li",null,[Object(c["h"])(v,{target:"_blank",to:"/twitter"},{default:Object(c["E"])((function(){return[w]})),_:1})]),Object(c["f"])("li",null,[Object(c["h"])(v,{target:"_blank",to:"/linkedin"},{default:Object(c["E"])((function(){return[I]})),_:1})])])],512)])}var T={methods:{humbarger:function(){var e=this.$refs.mobile,t=this.$refs.humbarger;t.classList.toggle("open"),e.classList.contains("fad-in")?(e.classList.remove("fad-in"),document.body.classList.remove("noscroll"),e.classList.add("fad-out")):(e.classList.add("fad-in"),document.body.classList.add("noscroll"),e.classList.remove("fad-out"))}}},S=(n("a61f"),n("6b0d")),M=n.n(S);const C=M()(T,[["render",V],["__scopeId","data-v-60993939"]]);var P=C,F={components:{navBar:P}};n("5ec0");const A=M()(F,[["render",i]]);var B=A,U=n("6c02"),J=function(e){return Object(c["t"])("data-v-3c25e9e3"),e=e(),Object(c["r"])(),e},H=J((function(){return Object(c["f"])("div",{class:"home"},[Object(c["f"])("div",{class:"hero container"},[Object(c["f"])("div",{class:"hero-img"},[Object(c["f"])("img",{class:"ImgProfil",src:"user.jpg",alt:""})]),Object(c["f"])("div",{class:"hero-text"},[Object(c["f"])("h2",{class:"hero-title"},"Hi, I'm Ayoub, a FullStack developper Laravel-Vuejs"),Object(c["f"])("p",null," Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum doloremque quas autem animi pariatur dignissimos ipsam, officiis rem non totam. Beatae natus odit nostrum illo, fuga quidem voluptatem sit atque. "),Object(c["f"])("button",{to:"/profil",class:"btn btn-primary"},"Learn More")])]),Object(c["f"])("section",{class:"box-1 container-sm"},[Object(c["f"])("div",{class:"container-sm"},[Object(c["f"])("h1",null," I can help you with ")]),Object(c["f"])("div",{class:"helping container-sm"},[Object(c["f"])("div",{class:"help fix-bugs"},[Object(c["f"])("h3",null,"fix bugs"),Object(c["f"])("img",{src:"icon-api.svg",alt:""})]),Object(c["f"])("div",{class:"help design-ui"},[Object(c["f"])("h3",null,"design ui"),Object(c["f"])("img",{src:"icon-api.svg",alt:""})]),Object(c["f"])("div",{class:"help design-full-app"},[Object(c["f"])("h3",null,"full app"),Object(c["f"])("img",{src:"icon-api.svg",alt:""})]),Object(c["f"])("div",{class:"help backend"},[Object(c["f"])("h3",null,"backend"),Object(c["f"])("img",{src:"icon-api.svg",alt:""})])])]),Object(c["f"])("section",{class:"box-2 container"},[Object(c["f"])("h1",{class:"container-sm"},"Librairies, Technologies and FrameWorks I use "),Object(c["f"])("div",{class:"technologies"},[Object(c["f"])("ul",{class:"liste"},[Object(c["f"])("li",null,"Html5"),Object(c["f"])("li",null,"Css3"),Object(c["f"])("li",null,"Bootstrap5"),Object(c["f"])("li",null,"JavaScript"),Object(c["f"])("li",null,"Jquery"),Object(c["f"])("li",null,"Ajax"),Object(c["f"])("li",null,"VueJS3"),Object(c["f"])("li",null,"Laravel8")])])]),Object(c["f"])("section",{class:"lastest-blogs"},[Object(c["f"])("div",null,[Object(c["f"])("h1",null,"Lastest Blog")]),Object(c["f"])("div",{class:"last-blog container"},[Object(c["f"])("div",{class:"article"},[Object(c["f"])("div",{class:"title"},[Object(c["f"])("img",{class:"article-img",src:"image-product-2.jpg",alt:""})]),Object(c["f"])("div",{class:"content"},[Object(c["f"])("h2",null,"The title"),Object(c["f"])("p",null," Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae quod ratione deserunt, vitae nobis eos. Voluptatibus minima pariatur harum voluptatum beatae reprehenderit ad, consectetur magni quod, esse ab deserunt repellat. "),Object(c["f"])("span",null," 01-01-2021 ")])]),Object(c["f"])("div",{class:"article"},[Object(c["f"])("div",{class:"title"},[Object(c["f"])("img",{class:"article-img",src:"image-product-2.jpg",alt:""})]),Object(c["f"])("div",{class:"content"},[Object(c["f"])("h2",null,"The title"),Object(c["f"])("p",null," Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae quod ratione deserunt, vitae nobis eos. Voluptatibus minima pariatur harum voluptatum beatae reprehenderit ad, consectetur magni quod, esse ab deserunt repellat. "),Object(c["f"])("span",null," 01-01-2021 ")])])])])],-1)}));function N(e,t,n,i,a,l){var r=Object(c["x"])("Footer");return Object(c["q"])(),Object(c["e"])(c["a"],null,[H,Object(c["h"])(r)],64)}var $=function(e){return Object(c["t"])("data-v-df46d3dc"),e=e(),Object(c["r"])(),e},z={class:"footer"},D=$((function(){return Object(c["f"])("div",{class:"footer-1 container"},[Object(c["f"])("div",{class:"right-footer"},[Object(c["f"])("h3",null,"Wanna know more about me "),Object(c["f"])("p",null," Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa amet illo excepturi libero aut dolorum minus odio enim totam perferendis. ")]),Object(c["f"])("div",{class:"left-footer"},[Object(c["f"])("h3",null,"Projects and opportunities I am interested in"),Object(c["f"])("ul",null,[Object(c["f"])("li",null,"Fixing bugs"),Object(c["f"])("li",null,"Frontend with vuejs"),Object(c["f"])("li",null,"backend with laravel")])])],-1)})),G=$((function(){return Object(c["f"])("div",{class:"footer-2"},[Object(c["f"])("p",null," designed and built with lots of love. ")],-1)})),W=[D,G];function Y(e,t,n,i,a,l){return Object(c["q"])(),Object(c["e"])("div",z,W)}var R={};n("6eb9");const Z=M()(R,[["render",Y],["__scopeId","data-v-df46d3dc"]]);var K=Z,Q={name:"Home",components:{Footer:K}};n("fd83");const X=M()(Q,[["render",N],["__scopeId","data-v-3c25e9e3"]]);var ee=X,te=function(e){return Object(c["t"])("data-v-20b15e2a"),e=e(),Object(c["r"])(),e},ne={class:"contact container"},ce=te((function(){return Object(c["f"])("h2",null,"Contact me here for more informations ",-1)}));function ie(e,t,n,i,a,l){var r=Object(c["x"])("Input");return Object(c["q"])(),Object(c["e"])("div",ne,[ce,Object(c["f"])("form",{ref:"form",onSubmit:t[4]||(t[4]=Object(c["G"])((function(){return l.sendEmail&&l.sendEmail.apply(l,arguments)}),["prevent"]))},[Object(c["h"])(r,{name:"email",type:"email",placeholder:"Your Email",modelValue:a.email,"onUpdate:modelValue":t[0]||(t[0]=function(e){return a.email=e})},null,8,["modelValue"]),Object(c["h"])(r,{name:"subject",type:"text",placeholder:"Subject",modelValue:a.subject,"onUpdate:modelValue":t[1]||(t[1]=function(e){return a.subject=e})},null,8,["modelValue"]),Object(c["F"])(Object(c["f"])("textarea",{name:"message",placeholder:"Your message","onUpdate:modelValue":t[2]||(t[2]=function(e){return a.message=e})},null,512),[[c["C"],a.message]]),Object(c["f"])("button",{class:"btn btn-submit",onClick:t[3]||(t[3]=Object(c["G"])((function(){return l.sendEmail&&l.sendEmail.apply(l,arguments)}),["prevent"])),type:"submit"},"submit")],544)])}n("b0c0");var ae={class:"fome-input"},le=["name","type","placeholder"];function re(e,t,n,i,a,l){return Object(c["q"])(),Object(c["e"])("div",ae,[Object(c["f"])("label",null,[Object(c["g"])(Object(c["z"])(n.name)+" ",1),Object(c["F"])(Object(c["f"])("input",{name:n.name,type:n.type,placeholder:n.placeholder,"onUpdate:modelValue":t[0]||(t[0]=function(e){return l.InputValue=e})},null,8,le),[[c["B"],l.InputValue]])])])}var ue={computed:{InputValue:{get:function(){return this.modelValue},set:function(e){this.$emit("update:modelValue",e)}}},props:["name","type","placeholder","modelValue"]};n("c310");const oe=M()(ue,[["render",re],["__scopeId","data-v-12b8b1d1"]]);var se=oe,be=n("9d6e"),fe={data:function(){return{email:"",subject:"",message:""}},components:{Input:se},methods:{sendEmail:function(){be["a"].sendForm("service_9aq690q","template_mr56an9",this.$refs.form,"VrbZFy8PUO1oDa3_O").then((function(e){console.log("SUCCESS!",e.text)}),(function(e){console.log("FAILED...",e.text)}))}}};n("615c");const de=M()(fe,[["render",ie],["__scopeId","data-v-20b15e2a"]]);var je=de,me=function(e){return Object(c["t"])("data-v-389103d4"),e=e(),Object(c["r"])(),e},Oe={class:"blog container"},pe=me((function(){return Object(c["f"])("div",{class:"articles"},[Object(c["f"])("h2",null,"check all my articles")],-1)})),ve={class:"article"},he=me((function(){return Object(c["f"])("h1",{class:"title"},"The title of article",-1)})),ge={class:"content"},qe=me((function(){return Object(c["f"])("video",{src:"video.mp4",controls:"",muted:""},null,-1)})),_e={class:""},xe=Object(c["g"])(" Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt, ipsam a voluptate earum similique, quisquam ducimus nisi eius quos cumque beatae id. Molestias facere dicta asperiores consequatur maxime, earum repudiandae. "),ye=Object(c["g"])("Learn More..");function ke(e,t,n,i,a,l){var r=Object(c["x"])("Article"),u=Object(c["x"])("router-link");return Object(c["q"])(),Object(c["e"])("div",Oe,[pe,Object(c["f"])("section",null,[(Object(c["q"])(!0),Object(c["e"])(c["a"],null,Object(c["w"])(a.articles,(function(e,t){return Object(c["q"])(),Object(c["d"])(r,{key:t,Title:e.Title,src:e.src,text:e.text},null,8,["Title","src","text"])})),128)),Object(c["f"])("div",ve,[he,Object(c["f"])("div",ge,[qe,Object(c["f"])("p",_e,[xe,Object(c["h"])(u,{to:"#",class:"btn btn-blog"},{default:Object(c["E"])((function(){return[ye]})),_:1})])])])])])}var Ee={class:"article"},Le={class:"title"},we={class:"content"},Ie=["src"],Ve={class:""},Te=Object(c["g"])("Learn More..");function Se(e,t,n,i,a,l){var r=Object(c["x"])("router-link");return Object(c["q"])(),Object(c["e"])("div",Ee,[Object(c["f"])("h1",Le,Object(c["z"])(n.Title),1),Object(c["f"])("div",we,[Object(c["f"])("img",{src:n.src,alt:""},null,8,Ie),Object(c["f"])("p",Ve,[Object(c["g"])(Object(c["z"])(n.text)+" ",1),Object(c["h"])(r,{to:"#",class:"btn btn-blog"},{default:Object(c["E"])((function(){return[Te]})),_:1})])])])}var Me={props:["Title","src","text","link"]};n("1de5");const Ce=M()(Me,[["render",Se],["__scopeId","data-v-544a68cd"]]);var Pe=Ce,Fe={components:{Article:Pe},data:function(){return{articles:{1:{Title:"The third title",src:"image-confetti.jpg",text:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt, ipsam a voluptate  earum   similique, quisquam ducimus nisi eius quos cumque beatae id. Molestias facere dicta  asperiores   consequatur maxime, earum repudiandae.",link:""},2:{Title:"The first title",src:"image-product-1.jpg",text:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt, ipsam a voluptate   earum similique, quisquam ducimus nisi eius quos cumque beatae id. Molestias facere dicta   asperiores consequatur maxime, earum repudiandae.",link:""},3:{Title:"The second title",src:"image-product-2.jpg",text:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt, ipsam a voluptate earum   similique, quisquam ducimus nisi eius quos cumque beatae id. Molestias facere dicta asperiores   consequatur maxime, earum repudiandae.",link:""}}}}};n("fff2");const Ae=M()(Fe,[["render",ke],["__scopeId","data-v-389103d4"]]);var Be=Ae,Ue=Object(c["f"])("h2",null,"Shop",-1),Je=[Ue];function He(e,t){return Object(c["q"])(),Object(c["e"])("div",null,Je)}const Ne={},$e=M()(Ne,[["render",He]]);var ze=$e,De=function(e){return Object(c["t"])("data-v-a778fcd8"),e=e(),Object(c["r"])(),e},Ge={class:"about container"},We={class:""},Ye=De((function(){return Object(c["f"])("h1",null,"This is an about page",-1)})),Re=De((function(){return Object(c["f"])("p",null," Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum ea quam obcaecati ducimus asperiores pariatur! Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit porro pariatur provident autem, sit temporibus eum, veniam culpa inventore molestiae impedit quos dignissimos aliquam blanditiis at eos tenetur, ad laborum? ",-1)})),Ze=Object(c["g"])(" Contact Me");function Ke(e,t){var n=Object(c["x"])("router-link");return Object(c["q"])(),Object(c["e"])("div",Ge,[Object(c["f"])("div",We,[Ye,Re,Object(c["h"])(n,{to:"/contact",class:"btn btn-primary"},{default:Object(c["E"])((function(){return[Ze]})),_:1})])])}n("fee3");const Qe={},Xe=M()(Qe,[["render",Ke],["__scopeId","data-v-a778fcd8"]]);var et=Xe,tt=[{path:"/",name:"Home",component:ee},{path:"/about",name:"About",component:et},{path:"/contact",name:"Contact",component:je},{path:"/blog",name:"Blog",component:Be},{path:"/shop",name:"Shop",component:ze},{path:"/github",beforeEnter:function(){location.href="http://github.com/el-mardi"}},{path:"/twitter",beforeEnter:function(){location.href="http://twitter.com"}},{path:"/linkedin",beforeEnter:function(){location.href="http://linkedin.com"}}],nt=Object(U["a"])({history:Object(U["b"])("/Portfolio-with-vue-js-3/"),routes:tt}),ct=nt;Object(c["c"])(B).use(ct).mount("#app")},"5ec0":function(e,t,n){"use strict";n("7cb4")},"615c":function(e,t,n){"use strict";n("1895")},"6eb9":function(e,t,n){"use strict";n("bfa8")},7650:function(e,t,n){},"7cb4":function(e,t,n){},"87ec":function(e,t,n){},"9c9c":function(e,t,n){},a61f:function(e,t,n){"use strict";n("9c9c")},b72f:function(e,t,n){},bfa8:function(e,t,n){},c310:function(e,t,n){"use strict";n("f47e")},f47e:function(e,t,n){},fd83:function(e,t,n){"use strict";n("4f1d")},fee3:function(e,t,n){"use strict";n("7650")},fff2:function(e,t,n){"use strict";n("b72f")}});
//# sourceMappingURL=app.2bca44f6.js.map