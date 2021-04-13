!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t(require("react")):"function"==typeof define&&define.amd?define(["react"],t):(e=e||self).reactMultipleSelectDropdownLite=t(e.react)}(this,function(e){var t="default"in e?e.default:e;function n(){return(n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var l in n)Object.prototype.hasOwnProperty.call(n,l)&&(e[l]=n[l])}return e}).apply(this,arguments)}function l(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,l=new Array(t);n<t;n++)l[n]=e[n];return l}function a(){return t.createElement("svg",{viewBox:"0 0 10 10",className:"msl-close-icn"},t.createElement("line",{stroke:"currentColor",strokeLinecap:"round",x1:"0",y1:"0",x2:"10",y2:"10"}),t.createElement("line",{stroke:"currentColor",strokeLinecap:"round",x1:"0",y1:"10",x2:"10",y2:"0"}))}function r(e){var n,l=e.deleteAction;return t.createElement("div",{clickable:"true",className:"msl-chip"},"object"==typeof(n=e.value).label?(null==n?void 0:n.title)||n.value:n.label,t.createElement("div",{role:"button",clickable:"true","aria-label":"delete-value",onClick:l,onKeyPress:l,tabIndex:"0",className:"msl-btn msl-chip-delete msl-flx"},t.createElement(a,null)),t.createElement("span",null))}function o(){return t.createElement("svg",{viewBox:"0 0 20 20",className:"msl-arrow-icn"},t.createElement("line",{stroke:"currentColor",strokeLinecap:"round",x1:"10",y1:"14",x2:"4",y2:"8"}),t.createElement("line",{stroke:"currentColor",strokeLinecap:"round",x1:"16",y1:"8",x2:"10",y2:"14"}))}function i(e){var a=e.singleSelect,r=e.addValue,o=e.checkValueExist,i=e.value;if(e.largeData&&!e.menuOpen)return null;var c=[];return function e(s){for(var u,d=function(){var l=u.value,s=l[0],d=l[1];"group"===d.type?(c.push(t.createElement("div",{key:d.title+s,"data-msl":!0,className:"msl-grp-title"},d.title)),d.childs.length>0?e(d.childs):c.push(t.createElement("option",{className:"msl-option msl-option-disable"},d.emptyDataLabel||"No Data Found"))):c.push(t.createElement("div",n({tabIndex:"0",key:d.value+d.label+s+10},!a&&{"data-msl":!0},{style:n({},d.style&&d.style),onClick:function(){!d.disabled&&r(d)},onKeyPress:function(e){"Enter"===e.key&&!d.disabled&&r(d)},title:"object"==typeof d.label?null==d?void 0:d.title:d.label,className:"msl-option "+(o(d,i)?"msl-option-active":"")+" "+(d.disabled?"msl-option-disable":"")+" "+(void 0!==d.classes?d.classes:""),value:d.value}),d.label))},m=function(e,t){var n;if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(n=function(e,t){if(e){if("string"==typeof e)return l(e,void 0);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?l(e,void 0):void 0}}(e))){n&&(e=n);var a=0;return function(){return a>=e.length?{done:!0}:{done:!1,value:e[a++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}return(n=e[Symbol.iterator]()).next.bind(n)}(s.entries());!(u=m()).done;)d()}(e.opts),t.createElement("div",null,c)}function c(l){var c=l.options,s=l.downArrowIcon,u=l.closeIcon,d=l.clearable,m=l.clearAll,p=l.downArrow,f=l.onChange,v=l.singleSelect,b=l.jsonValue,h=l.defaultValue,y=l.className,g=l.placeholder,E=l.disableChip,k=l.name,x=l.style,w=l.attr,N=l.largeData,C=l.disabled,A=l.limit,S=l.emptyDataLabel,V=l.customValue,j=l.onMenuOpen,I=l.onMenuClose,L=l.chipAlternateText,O=l.closeOnSelect,D=e.useState([]),M=D[0],P=D[1],R=e.useState(c||[]),K=R[0],T=R[1],B=e.useState(null),H=B[0],F=B[1],U=e.useRef(null),q=function(t){var n=t.onClickOutside,l=e.useState(t.initialIsVisible),a=l[0],r=l[1],o=e.useRef(null),i=function(e){"Escape"===e.key&&r(!1)},c=function e(t){o.current&&!o.current.contains(t.target)&&(document.removeEventListener("keydown",i,!0),document.removeEventListener("click",e,!0),r(!1),n())};return e.useEffect(function(){return document.addEventListener("keydown",i,!0),document.addEventListener("click",c,!0),function(){document.removeEventListener("keydown",i,!0),document.removeEventListener("click",c,!0)}}),{ref:o,isComponentVisible:a,setIsComponentVisible:r}}({initialIsVisible:!1,onClickOutside:I}),$=q.ref,z=q.isComponentVisible,G=q.setIsComponentVisible,J="calc(100% - "+(d&&p?60:p||d?40:5)+"px)";e.useEffect(function(){m&&M.length>0&&_()},[m]),e.useEffect(function(){T(c)},[c]),e.useEffect(function(){var e=function(e,t){if(!e)return[];var n=e,l=[],a=[];"string"==typeof e&&(n=e.split(","));for(var r=function(e){if("string"==typeof e)l.push({label:e,value:e});else if("object"==typeof e){var t={label:e,value:e};"label"in e&&"string"==typeof e.label?t.label=e.label:"title"in e&&(t.label=e.title),l.push(t)}},o=0;o<n.length;o++)if("string"==typeof n[o]){var i=ee(n[o],t,!0,"value");i.length>0?a.push(i[0]):V&&r(n[o])}else if("object"==typeof n[o]){var c=ee(n[o].value,t,!0,"value");c.length>0?a.push(c[0]):V&&r(n[o])}var s=[];return l.length&&(s=te(l)),T([].concat(t,s)),[].concat(a,l)}(h,K);v&&e.length>0&&(e=[e[0]]),P(e),O&&v&&G(!1)},[h]);var Q,W,X=function(e){if(P(e),b)f(e);else{var t="";t+=e.map(function(e){return e.value}),f(t)}},Y=function(e,t){return t.some(function(t){return t.value===e.value})},Z=function(e){var t=[].concat(M);v?t=Y(e,M)?[]:[e]:Y(e,M)?t=t.filter(function(t){return t.value!==e.value}):(null===A||A>M.length)&&t.push(e),X(t),F(null),U.current&&(U.current.innerHTML="")},_=function(){X([])},ee=function(e,t,n,l){var a=[],r=[];return function t(o){for(var i=0;i<o.length;i++){var c;if("group"===(null===(c=o[i])||void 0===c?void 0:c.type))t(o[i].childs);else if(n)n&&o[i][l]===e&&a.push(o[i]);else{var s,u;"object"!=typeof o[i].label&&o[i].label.match(new RegExp(""+e,"gi"))||"object"==typeof o[i].label&&(null===(s=o[i])||void 0===s||null===(u=s.title)||void 0===u?void 0:u.match(new RegExp(""+e,"gi")))?a.push(o[i]):o[i].value.match(new RegExp(""+e,"gi"))&&r.push(o[i])}"object"!=typeof o[i].label||"title"in o[i]||console.warn("[multiselect] you must provide a title property as typeof string, if you want to render jsx in option label")}}(t),[].concat(a,r)},te=function(e){var t=[],n=K.findIndex(function(e){return"group"===(null==e?void 0:e.type)&&"Custom Values"===(null==e?void 0:e.title)});return-1===n?t.push({title:"Custom Values",type:"group",childs:[].concat(e)}):Array.isArray(e)?e.map(function(e){return K[n].childs.push(e)}):"object"==typeof e&&K[n].childs.push(e),T([].concat(K,t)),t},ne=function(e){var t=e.target;(function(e){return!(e.hasAttribute("clickable")||e.parentNode.hasAttribute("clickable")||e.parentNode.parentNode.hasAttribute("clickable")||e.parentNode.parentNode.parentNode.hasAttribute("clickable"))})(t)&&(function(e){if(e.hasAttribute("dropdown-handle")||e.parentNode.hasAttribute("dropdown-handle")||e.parentNode.parentNode.hasAttribute("dropdown-handle"))return!0}(t)&&z?(G(!1),I()):(G(!0),j(),U.current&&U.current.focus()))},le=function(e){return"object"==typeof e.label?(null==e?void 0:e.title)||e.value:e.label};return t.createElement("div",n({ref:$},w,{onClick:ne,tabIndex:"0",onKeyPress:ne,style:n({},x),className:"msl-wrp msl-vars "+y+" "+(C?"msl-disabled":"")}),t.createElement("input",{name:k,type:"hidden",value:null==M?void 0:M.map(function(e){return e.value})}),t.createElement("div",{"data-msl":!0,className:"msl "+(z&&(Q=$.current,W=Q.getBoundingClientRect(),window.innerHeight-(W.top+Q.clientHeight)<200?"msl-active-up":"msl-active"))+" "},t.createElement("div",{"data-msl":!0,className:"msl-input-wrp",style:{width:J}},!v&&!E&&M.map(function(e,n){return t.createElement(r,{key:"msl-chip-"+(n+11),value:e,deleteAction:function(){return function(e){var t=[].concat(M);t.splice(e,1),X(t)}(n)}})}),!v&&E&&M.length>0&&t.createElement("span",{className:"msl-single-value","data-msl":!0},1===M.length?le(M[0]):M.length+" "+L),v&&1===M.length&&t.createElement("span",{className:"msl-single-value","data-msl":!0},le(M[0])),(!v&&!E||!(!v||M.length)||!(v||!E||M.length))&&t.createElement("div",{"data-msl":!0,"data-placeholder":g,className:"msl-input",contentEditable:!C,onKeyUp:function(e){var t=e.target.textContent.trim().replace(/,+/g,"");if(t){var n={label:'Create "'+t+'"',value:t},l=ee(t,K);l.length?(V&&!ee(t,K,!0,"value").length&&l.push(n),F(l)):F(V?[n]:[]);var a=function(e){var t=e.label,n=e.value;return"object"!=typeof t&&t.match(/Create "|"+/g)&&(t=t.replace(/Create "|"+/g,"")),{label:t,value:n}}(n);"Enter"!==e.key&&","!==e.key||(!V||l.length||Y(a,M)?H.length>0&&Z(H[0]):(te(a),Z(n)))}else F(null)},ref:U})),(d||p)&&t.createElement("div",{className:"msl-actions msl-flx"},d&&M.length>0&&t.createElement("div",{role:"button",clickable:"true","aria-label":"close-menu",onClick:_,onKeyPress:_,tabIndex:"0",className:"msl-btn msl-clear-btn msl-flx"},u||t.createElement(a,null)),p&&t.createElement("div",{role:"button",tabIndex:"0","dropdown-handle":"true",className:"msl-btn msl-arrow-btn msl-flx",style:n({},z&&{transform:"rotate(180deg)"})},s||t.createElement(o,null)))),t.createElement("div",{className:"msl-options"},!H&&K.length?t.createElement(i,n({opts:K},{singleSelect:v,addValue:Z,checkValueExist:Y,value:M,largeData:N,menuOpen:z})):H&&H.length?t.createElement(i,n({opts:H},{singleSelect:v,addValue:Z,checkValueExist:Y,value:M,largeData:N,menuOpen:z})):(H&&!H.length||K&&!K.length)&&t.createElement("option",{className:"msl-option msl-option-disable"},S)))}return c.defaultProps={clearable:!0,clearAll:!1,downArrow:!0,singleSelect:!1,jsonValue:!1,defaultValue:"",disableChip:!1,name:"",style:{},disabled:!1,limit:null,emptyDataLabel:"No Data Found",placeholder:"Select...",onChange:function(){},onMenuOpen:function(){},onMenuClose:function(){},options:[{label:"Empty",value:"",disabled:!0,style:{textAlign:"center"}}],customValue:!1,chipAlternateText:"Item Selected",closeOnSelect:!0},c});
//# sourceMappingURL=index.umd.js.map
