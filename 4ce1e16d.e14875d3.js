/*! For license information please see 4ce1e16d.e14875d3.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{123:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return a})),r.d(t,"metadata",(function(){return c})),r.d(t,"rightToc",(function(){return s})),r.d(t,"default",(function(){return l}));var n=r(1),o=r(6),i=(r(0),r(150)),a=(r(152),r(156),r(155),{id:"communityResources",title:"Community Resources",sidebar_label:"Community Resources"}),c={id:"communityResources",title:"Community Resources",description:"import useBaseUrl from '@docusaurus/useBaseUrl'; // Add to the top of the file below the front matter.",source:"@site/docs/communityResources.mdx",permalink:"/website/docs/communityResources",editUrl:"https://github.com/aracred/website/edit/master/docs/communityResources.mdx",sidebar_label:"Community Resources",sidebar:"someSidebar",previous:{title:"Frequently Asked Questions",permalink:"/website/docs/faq"},next:{title:"Contributing",permalink:"/website/docs/contributing"}},s=[{value:"Video explaining how the token minting process works",id:"video-explaining-how-the-token-minting-process-works",children:[]}],u={rightToc:s};function l(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},u,r,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"video-explaining-how-the-token-minting-process-works"},"Video explaining how the token minting process works"),Object(i.b)("iframe",{width:"560",height:"315",src:"https://www.youtube-nocookie.com/embed/XwJ48-Og2VA",frameborder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0}),Object(i.b)("p",null,"This explains a lot about how the Aragon CLI is spun up in the background, however, it does so within the context of EstoniaDAO."),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"This walkthrough is based on the April 2020 MVP of AraCred, however by the time you read this things may have changed.")))}l.isMDXComponent=!0},150:function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return m}));var n=r(0),o=r.n(n);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=o.a.createContext({}),l=function(e){var t=o.a.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):c({},t,{},e)),r},p=function(e){var t=l(e.components);return o.a.createElement(u.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},b=Object(n.forwardRef)((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,a=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=l(r),b=n,m=p["".concat(a,".").concat(b)]||p[b]||f[b]||i;return r?o.a.createElement(m,c({ref:t},u,{components:r})):o.a.createElement(m,c({ref:t},u))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,a=new Array(i);a[0]=b;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:n,a[1]=c;for(var u=2;u<i;u++)a[u]=r[u];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,r)}b.displayName="MDXCreateElement"},151:function(e,t,r){"use strict";var n=r(0),o=r(35);t.a=function(){return Object(n.useContext)(o.a)}},152:function(e,t,r){"use strict";r.d(t,"a",(function(){return o}));var n=r(151);function o(e){const{siteConfig:t}=Object(n.a)(),{baseUrl:r="/"}=t||{};if(!e)return e;return/^(https?:|\/\/)/.test(e)?e:e.startsWith("/")?r+e.slice(1):r+e}},153:function(e,t,r){var n;!function(){"use strict";var r={}.hasOwnProperty;function o(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var i=typeof n;if("string"===i||"number"===i)e.push(n);else if(Array.isArray(n)&&n.length){var a=o.apply(null,n);a&&e.push(a)}else if("object"===i)for(var c in n)r.call(n,c)&&n[c]&&e.push(c)}}return e.join(" ")}e.exports?(o.default=o,e.exports=o):void 0===(n=function(){return o}.apply(t,[]))||(e.exports=n)}()},154:function(e,t,r){"use strict";var n=r(0);const o=Object(n.createContext)({tabGroupChoices:{},setTabGroupChoices:()=>{}});t.a=o},155:function(e,t,r){"use strict";var n=r(0),o=r.n(n);t.a=function(e){return o.a.createElement("div",null,e.children)}},156:function(e,t,r){"use strict";var n=r(0),o=r.n(n),i=r(154);var a=function(){return Object(n.useContext)(i.a)},c=r(153),s=r.n(c),u=r(93),l=r.n(u);const p=37,f=39;t.a=function(e){const{block:t,children:r,defaultValue:i,values:c,groupId:u}=e,{tabGroupChoices:b,setTabGroupChoices:m}=a(),[d,h]=Object(n.useState)(i);if(null!=u){const e=b[u];null!=e&&e!==d&&h(e)}const y=e=>{h(e),null!=u&&m(u,e)},v=[];return o.a.createElement("div",null,o.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:s()("tabs",{"tabs--block":t})},c.map(({value:e,label:t})=>o.a.createElement("li",{role:"tab",tabIndex:"0","aria-selected":d===e,className:s()("tab-item",l.a.tabItem,{"tab-item--active":d===e}),key:e,ref:e=>v.push(e),onKeyDown:e=>((e,t,r)=>{switch(r.keyCode){case f:((e,t)=>{const r=e.indexOf(t)+1;e[r]?e[r].focus():e[0].focus()})(e,t);break;case p:((e,t)=>{const r=e.indexOf(t)-1;e[r]?e[r].focus():e[e.length-1].focus()})(e,t)}})(v,e.target,e),onFocus:()=>y(e),onClick:()=>y(e)},t))),o.a.createElement("div",{role:"tabpanel",className:"margin-vert--md"},n.Children.toArray(r).filter(e=>e.props.value===d)[0]))}}}]);