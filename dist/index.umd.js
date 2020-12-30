!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t(require("react")):"function"==typeof define&&define.amd?define(["react"],t):(e=e||self).reactMultipleSelectDropdownLite=t(e.react)}(this,function(e){var t="default"in e?e.default:e;function n(){return(n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var l in n)Object.prototype.hasOwnProperty.call(n,l)&&(e[l]=n[l])}return e}).apply(this,arguments)}function l(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,l=new Array(t);n<t;n++)l[n]=e[n];return l}function a(){return t.createElement("svg",{viewBox:"0 0 10 10",className:"msl-close-icn"},t.createElement("line",{stroke:"currentColor",strokeLinecap:"round",x1:"0",y1:"0",x2:"10",y2:"10"}),t.createElement("line",{stroke:"currentColor",strokeLinecap:"round",x1:"0",y1:"10",x2:"10",y2:"0"}))}function r(e){var n,l=e.deleteAction;return t.createElement("div",{clickable:"true",className:"msl-chip"},"object"==typeof(n=e.value).label?(null==n?void 0:n.title)||n.value:n.label,t.createElement("div",{role:"button",clickable:"true","aria-label":"delete-value",onClick:l,onKeyPress:l,tabIndex:"0",className:"msl-btn msl-chip-delete msl-flx"},t.createElement(a,null)),t.createElement("span",null))}function o(){return t.createElement("svg",{viewBox:"0 0 20 20",className:"msl-arrow-icn"},t.createElement("line",{stroke:"currentColor",strokeLinecap:"round",x1:"10",y1:"14",x2:"4",y2:"8"}),t.createElement("line",{stroke:"currentColor",strokeLinecap:"round",x1:"16",y1:"8",x2:"10",y2:"14"}))}function i(e){var a=e.singleSelect,r=e.addValue,o=e.checkValueExist,i=e.value;if(e.largeData&&!e.menuOpen)return null;var c=[];return function e(s){for(var u,d=function(){var l=u.value,s=l[0],d=l[1];"group"===d.type?(c.push(t.createElement("div",{key:d.title+s,"data-msl":!0,className:"msl-grp-title"},d.title)),d.childs.length>0?e(d.childs):c.push(t.createElement("option",{className:"msl-option msl-option-disable"},d.emptyDataLabel||"No Data Found"))):c.push(t.createElement("div",n({tabIndex:"0",key:d.value+d.label+s+10},!a&&{"data-msl":!0},{style:n({},d.style&&d.style),onClick:function(){!d.disabled&&r(d)},onKeyPress:function(e){"Enter"===e.key&&!d.disabled&&r(d)},title:"object"==typeof d.label?null==d?void 0:d.title:d.label,className:"msl-option "+(o(d,i)?"msl-option-active":"")+" "+(d.disabled?"msl-option-disable":"")+" "+(void 0!==d.classes?d.classes:""),value:d.value}),d.label))},m=function(e,t){var n;if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(n=function(e,t){if(e){if("string"==typeof e)return l(e,void 0);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?l(e,void 0):void 0}}(e))){n&&(e=n);var a=0;return function(){return a>=e.length?{done:!0}:{done:!1,value:e[a++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}return(n=e[Symbol.iterator]()).next.bind(n)}(s.entries());!(u=m()).done;)d()}(e.opts),t.createElement("div",null,c)}function c(l){var c=l.options,s=l.downArrowIcon,u=l.closeIcon,d=l.clearable,m=l.downArrow,p=l.onChange,f=l.singleSelect,v=l.jsonValue,b=l.defaultValue,h=l.className,y=l.placeholder,g=l.disableChip,E=l.name,k=l.style,x=l.attr,w=l.largeData,N=l.disabled,C=l.limit,A=l.emptyDataLabel,S=l.customValue,V=l.onMenuOpen,j=l.onMenuClose,I=l.chipAlternateText,L=l.closeOnSelect,O=e.useState([]),D=O[0],M=O[1],P=e.useState(c||[]),R=P[0],K=P[1],T=e.useState(null),B=T[0],H=T[1],F=e.useRef(null),U=function(t){var n=t.onClickOutside,l=e.useState(t.initialIsVisible),a=l[0],r=l[1],o=e.useRef(null),i=function(e){"Escape"===e.key&&r(!1)},c=function e(t){o.current&&!o.current.contains(t.target)&&(document.removeEventListener("keydown",i,!0),document.removeEventListener("click",e,!0),r(!1),n())};return e.useEffect(function(){return document.addEventListener("keydown",i,!0),document.addEventListener("click",c,!0),function(){document.removeEventListener("keydown",i,!0),document.removeEventListener("click",c,!0)}}),{ref:o,isComponentVisible:a,setIsComponentVisible:r}}({initialIsVisible:!1,onClickOutside:j}),q=U.ref,$=U.isComponentVisible,z=U.setIsComponentVisible,G="calc(100% - "+(d&&m?60:m||d?40:5)+"px)";e.useEffect(function(){K(c)},[c]),e.useEffect(function(){var e=function(e,t){if(!e)return[];var n=e,l=[],a=[];"string"==typeof e&&(n=e.split(","));for(var r=function(e){if("string"==typeof e)l.push({label:e,value:e});else if("object"==typeof e){var t={label:e,value:e};"label"in e&&"string"==typeof e.label?t.label=e.label:"title"in e&&(t.label=e.title),l.push(t)}},o=0;o<n.length;o++)if("string"==typeof n[o]){var i=_(n[o],t,!0,"value");i.length>0?a.push(i[0]):S&&r(n[o])}else if("object"==typeof n[o]){var c=_(n[o].value,t,!0,"value");c.length>0?a.push(c[0]):S&&r(n[o])}var s=[];return l.length&&(s=ee(l)),K([].concat(t,s)),[].concat(a,l)}(b,R);f&&e.length>0&&(e=[e[0]]),M(e),L&&f&&z(!1)},[b]);var J,Q,W=function(e){if(M(e),v)p(e);else{var t="";t+=e.map(function(e){return e.value}),p(t)}},X=function(e,t){return t.some(function(t){return t.value===e.value})},Y=function(e){var t=[].concat(D);f?t=X(e,D)?[]:[e]:X(e,D)?t=t.filter(function(t){return t.value!==e.value}):(null===C||C>D.length)&&t.push(e),W(t),H(null),F.current&&(F.current.innerHTML="")},Z=function(){W([])},_=function(e,t,n,l){var a=[],r=[];return function t(o){for(var i=0;i<o.length;i++){var c;if("group"===(null===(c=o[i])||void 0===c?void 0:c.type))t(o[i].childs);else if(n)n&&o[i][l]===e&&a.push(o[i]);else{var s,u;"object"!=typeof o[i].label&&o[i].label.match(new RegExp(""+e,"gi"))||"object"==typeof o[i].label&&(null===(s=o[i])||void 0===s||null===(u=s.title)||void 0===u?void 0:u.match(new RegExp(""+e,"gi")))?a.push(o[i]):o[i].value.match(new RegExp(""+e,"gi"))&&r.push(o[i])}"object"!=typeof o[i].label||"title"in o[i]||console.warn("[multiselect] you must provide a title property as typeof string, if you want to render jsx in option label")}}(t),[].concat(a,r)},ee=function(e){var t=[],n=R.findIndex(function(e){return"group"===(null==e?void 0:e.type)&&"Custom Values"===(null==e?void 0:e.title)});return-1===n?t.push({title:"Custom Values",type:"group",childs:[].concat(e)}):Array.isArray(e)?e.map(function(e){return R[n].childs.push(e)}):"object"==typeof e&&R[n].childs.push(e),K([].concat(R,t)),t},te=function(e){var t=e.target;(function(e){return!(e.hasAttribute("clickable")||e.parentNode.hasAttribute("clickable")||e.parentNode.parentNode.hasAttribute("clickable")||e.parentNode.parentNode.parentNode.hasAttribute("clickable"))})(t)&&(function(e){if(e.hasAttribute("dropdown-handle")||e.parentNode.hasAttribute("dropdown-handle")||e.parentNode.parentNode.hasAttribute("dropdown-handle"))return!0}(t)&&$?(z(!1),j()):(z(!0),V(),F.current&&F.current.focus()))},ne=function(e){return"object"==typeof e.label?(null==e?void 0:e.title)||e.value:e.label};return t.createElement("div",n({ref:q},x,{onClick:te,tabIndex:"0",onKeyPress:te,style:n({},k),className:"msl-wrp msl-vars "+h+" "+(N?"msl-disabled":"")}),t.createElement("input",{name:E,type:"hidden",value:null==D?void 0:D.map(function(e){return e.value})}),t.createElement("div",{"data-msl":!0,className:"msl "+($&&(J=q.current,Q=J.getBoundingClientRect(),window.innerHeight-(Q.top+J.clientHeight)<200?"msl-active-up":"msl-active"))+" "},t.createElement("div",{"data-msl":!0,className:"msl-input-wrp",style:{width:G}},!f&&!g&&D.map(function(e,n){return t.createElement(r,{key:"msl-chip-"+(n+11),value:e,deleteAction:function(){return function(e){var t=[].concat(D);t.splice(e,1),W(t)}(n)}})}),!f&&g&&D.length>0&&t.createElement("span",{className:"msl-single-value","data-msl":!0},1===D.length?ne(D[0]):D.length+" "+I),f&&1===D.length&&t.createElement("span",{className:"msl-single-value","data-msl":!0},ne(D[0])),(!f&&!g||!(!f||D.length)||!(f||!g||D.length))&&t.createElement("div",{"data-msl":!0,"data-placeholder":y,className:"msl-input",contentEditable:!N,onKeyUp:function(e){var t=e.target.textContent.trim().replace(/,+/g,"");if(t){var n={label:'Create "'+t+'"',value:t},l=_(t,R);l.length?(S&&!_(t,R,!0,"value").length&&l.push(n),H(l)):H(S?[n]:[]);var a=function(e){var t=e.label,n=e.value;return"object"!=typeof t&&t.match(/Create "|"+/g)&&(t=t.replace(/Create "|"+/g,"")),{label:t,value:n}}(n);"Enter"!==e.key&&","!==e.key||(!S||l.length||X(a,D)?B.length>0&&Y(B[0]):(ee(a),Y(n)))}else H(null)},ref:F})),(d||m)&&t.createElement("div",{className:"msl-actions msl-flx"},d&&D.length>0&&t.createElement("div",{role:"button",clickable:"true","aria-label":"close-menu",onClick:Z,onKeyPress:Z,tabIndex:"0",className:"msl-btn msl-clear-btn msl-flx"},u||t.createElement(a,null)),m&&t.createElement("div",{role:"button",tabIndex:"0","dropdown-handle":"true",className:"msl-btn msl-arrow-btn msl-flx",style:n({},$&&{transform:"rotate(180deg)"})},s||t.createElement(o,null)))),t.createElement("div",{className:"msl-options"},!B&&R.length?t.createElement(i,n({opts:R},{singleSelect:f,addValue:Y,checkValueExist:X,value:D,largeData:w,menuOpen:$})):B&&B.length?t.createElement(i,n({opts:B},{singleSelect:f,addValue:Y,checkValueExist:X,value:D,largeData:w,menuOpen:$})):(B&&!B.length||R&&!R.length)&&t.createElement("option",{className:"msl-option msl-option-disable"},A)))}return c.defaultProps={clearable:!0,downArrow:!0,singleSelect:!1,jsonValue:!1,defaultValue:"",disableChip:!1,name:"",style:{},disabled:!1,limit:null,emptyDataLabel:"No Data Found",placeholder:"Select...",onChange:function(){},onMenuOpen:function(){},onMenuClose:function(){},options:[{label:"Empty",value:"",disabled:!0,style:{textAlign:"center"}}],customValue:!1,chipAlternateText:"Item Selected",closeOnSelect:!0},c});
//# sourceMappingURL=index.umd.js.map
