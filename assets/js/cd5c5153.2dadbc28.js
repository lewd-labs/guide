"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[809],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return g}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=s(n),g=o,m=p["".concat(c,".").concat(g)]||p[g]||d[g]||i;return n?r.createElement(m,a(a({ref:t},u),{},{components:n})):r.createElement(m,a({ref:t},u))}));function g(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=p;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var s=2;s<i;s++)a[s]=n[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},4332:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return s},toc:function(){return u},default:function(){return p}});var r=n(7462),o=n(3366),i=(n(7294),n(3905)),a=["components"],l={sidebar_position:3,title:"Information",tags:["Economy"]},c="Utilities",s={unversionedId:"eco-pkg/utilities/util",id:"eco-pkg/utilities/util",title:"Information",description:"Logger",source:"@site/docs/eco-pkg/utilities/util.md",sourceDirName:"eco-pkg/utilities",slug:"/eco-pkg/utilities/util",permalink:"/guide/docs/eco-pkg/utilities/util",editUrl:"https://github.com/lewd-labs/xyz/edit/main/website/docs/eco-pkg/utilities/util.md",tags:[{label:"Economy",permalink:"/guide/docs/tags/economy"}],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,title:"Information",tags:["Economy"]},sidebar:"tutorialSidebar",previous:{title:"Information",permalink:"/guide/docs/eco-pkg/class/classes"}},u=[{value:"Logger",id:"logger",children:[{value:"disable or enable",id:"disable-or-enable",children:[],level:3},{value:"log",id:"log",children:[],level:3},{value:"info",id:"info",children:[],level:3},{value:"warn",id:"warn",children:[],level:3},{value:"error",id:"error",children:[],level:3},{value:"Using the logger in your code",id:"using-the-logger-in-your-code",children:[],level:3}],level:2}],d={toc:u};function p(e){var t=e.components,n=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"utilities"},"Utilities"),(0,i.kt)("h2",{id:"logger"},"Logger"),(0,i.kt)("p",null,"The logger is a simple utility that can be used to log messages to the console with coloring."),(0,i.kt)("p",null,"Is used as a Utility class, but can be exported from the package and used yourself. You can find the logger files ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/lewd-labs/discord-ts-economy/tree/main/lib/util/logger"},"here"),"."),(0,i.kt)("h3",{id:"disable-or-enable"},"disable or enable"),(0,i.kt)("p",null,"To disable or enable the logger, you must enable ",(0,i.kt)("inlineCode",{parentName:"p"},"debug")," in the economy config settings."),(0,i.kt)("p",null,"example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts",metastring:"{6}","{6}":!0},'const eco = new Economy({\n    currency: "$",\n    defaultBankLimit: 23000,\n    robEnabled: true,\n    shopEnabled: false,\n    debug: true, // default: false\n});\n')),(0,i.kt)("h3",{id:"log"},"log"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Returns a console log with a value and color GREEN")),(0,i.kt)("h3",{id:"info"},"info"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Returns a console log with a value and color CYAN")),(0,i.kt)("h3",{id:"warn"},"warn"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Returns a console log with a value and color YELLOW")),(0,i.kt)("h3",{id:"error"},"error"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Returns a console log with a value and color RED")),(0,i.kt)("h3",{id:"using-the-logger-in-your-code"},"Using the logger in your code"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},'import { Logger } from "discord-ts-economy";\n\nLogger.info(`This is an info message about from test data: ${testData}`);\n// your code...\n')),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("pre",{parentName:"div"},(0,i.kt)("code",{parentName:"pre"},"You don't have to use new Logger() Because we already export a new Instance.\n")))))}p.isMDXComponent=!0}}]);