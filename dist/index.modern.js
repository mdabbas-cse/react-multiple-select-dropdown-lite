import e,{useState as t,useRef as n,useEffect as l}from"react";function a(){return(a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var l in n)Object.prototype.hasOwnProperty.call(n,l)&&(e[l]=n[l])}return e}).apply(this,arguments)}function r(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,l=new Array(t);n<t;n++)l[n]=e[n];return l}function o(){return e.createElement("svg",{viewBox:"0 0 10 10",className:"msl-close-icn"},e.createElement("line",{stroke:"currentColor",strokeLinecap:"round",x1:"0",y1:"0",x2:"10",y2:"10"}),e.createElement("line",{stroke:"currentColor",strokeLinecap:"round",x1:"0",y1:"10",x2:"10",y2:"0"}))}function i(t){var n,l=t.deleteAction;return e.createElement("div",{clickable:"true",className:"msl-chip"},"object"==typeof(n=t.value).label?(null==n?void 0:n.title)||n.value:n.label,e.createElement("div",{role:"button",clickable:"true","aria-label":"delete-value",onClick:l,onKeyPress:l,tabIndex:"0",className:"msl-btn msl-chip-delete msl-flx"},e.createElement(o,null)),e.createElement("span",null))}function c(){return e.createElement("svg",{viewBox:"0 0 20 20",className:"msl-arrow-icn"},e.createElement("line",{stroke:"currentColor",strokeLinecap:"round",x1:"10",y1:"14",x2:"4",y2:"8"}),e.createElement("line",{stroke:"currentColor",strokeLinecap:"round",x1:"16",y1:"8",x2:"10",y2:"14"}))}function s(t){var n=t.singleSelect,l=t.addValue,o=t.checkValueExist,i=t.value;if(t.largeData&&!t.menuOpen)return null;var c=[];return function t(s){for(var u,d=function(){var r=u.value,s=r[0],d=r[1];"group"===d.type?(c.push(e.createElement("div",{key:d.title+s,"data-msl":!0,className:"msl-grp-title"},d.title)),d.childs.length>0?t(d.childs):c.push(e.createElement("option",{className:"msl-option msl-option-disable"},d.emptyDataLabel||"No Data Found"))):c.push(e.createElement("div",a({tabIndex:"0",key:d.value+d.label+s+10},!n&&{"data-msl":!0},{style:a({},d.style&&d.style),onClick:function(){!d.disabled&&l(d)},onKeyPress:function(e){"Enter"===e.key&&!d.disabled&&l(d)},title:"object"==typeof d.label?null==d?void 0:d.title:d.label,className:"msl-option "+(o(d,i)?"msl-option-active":"")+" "+(d.disabled?"msl-option-disable":"")+" "+(void 0!==d.classes?d.classes:""),value:d.value}),d.label))},m=function(e,t){var n;if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(n=function(e,t){if(e){if("string"==typeof e)return r(e,void 0);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(e,void 0):void 0}}(e))){n&&(e=n);var l=0;return function(){return l>=e.length?{done:!0}:{done:!1,value:e[l++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}return(n=e[Symbol.iterator]()).next.bind(n)}(s.entries());!(u=m()).done;)d()}(t.opts),e.createElement("div",null,c)}function u(r){var u=r.options,d=r.downArrowIcon,m=r.closeIcon,p=r.clearable,v=r.downArrow,f=r.onChange,b=r.singleSelect,h=r.jsonValue,y=r.defaultValue,g=r.className,E=r.placeholder,k=r.disableChip,x=r.name,w=r.style,N=r.attr,C=r.largeData,A=r.disabled,V=r.limit,j=r.emptyDataLabel,I=r.customValue,S=r.onMenuOpen,L=r.onMenuClose,O=r.chipAlternateText,D=r.closeOnSelect,M=t([]),P=M[0],K=M[1],R=t(u||[]),T=R[0],B=R[1],H=t(null),F=H[0],U=H[1],$=n(null),q=function(e){var a=e.onClickOutside,r=t(e.initialIsVisible),o=r[0],i=r[1],c=n(null),s=function(e){"Escape"===e.key&&i(!1)},u=function e(t){c.current&&!c.current.contains(t.target)&&(document.removeEventListener("keydown",s,!0),document.removeEventListener("click",e,!0),i(!1),a())};return l(function(){return document.addEventListener("keydown",s,!0),document.addEventListener("click",u,!0),function(){document.removeEventListener("keydown",s,!0),document.removeEventListener("click",u,!0)}}),{ref:c,isComponentVisible:o,setIsComponentVisible:i}}({initialIsVisible:!1,onClickOutside:L}),z=q.ref,G=q.isComponentVisible,J=q.setIsComponentVisible,Q="calc(100% - "+(p&&v?60:v||p?40:5)+"px)";l(function(){B(u)},[u]),l(function(){var e=function(e,t){if(!e)return[];var n=e,l=[],a=[];"string"==typeof e&&(n=e.split(","));for(var r=function(e){if("string"==typeof e)l.push({label:e,value:e});else if("object"==typeof e){var t={label:e,value:e};"label"in e&&"string"==typeof e.label?t.label=e.label:"title"in e&&(t.label=e.title),l.push(t)}},o=0;o<n.length;o++)if("string"==typeof n[o]){var i=te(n[o],t,!0,"value");i.length>0?a.push(i[0]):I&&r(n[o])}else if("object"==typeof n[o]){var c=te(n[o].value,t,!0,"value");c.length>0?a.push(c[0]):I&&r(n[o])}var s=[];return l.length&&(s=ne(l)),B([].concat(t,s)),[].concat(a,l)}(y,T);b&&e.length>0&&(e=[e[0]]),K(e),D&&b&&J(!1)},[y]);var W,X,Y=function(e){if(K(e),h)f(e);else{var t="";t+=e.map(function(e){return e.value}),f(t)}},Z=function(e,t){return t.some(function(t){return t.value===e.value})},_=function(e){var t=[].concat(P);b?t=Z(e,P)?[]:[e]:Z(e,P)?t=t.filter(function(t){return t.value!==e.value}):(null===V||V>P.length)&&t.push(e),Y(t),U(null),$.current&&($.current.innerHTML="")},ee=function(){Y([])},te=function(e,t,n,l){var a=[],r=[];return function t(o){for(var i=0;i<o.length;i++){var c;if("group"===(null===(c=o[i])||void 0===c?void 0:c.type))t(o[i].childs);else if(n)n&&o[i][l]===e&&a.push(o[i]);else{var s,u;"object"!=typeof o[i].label&&o[i].label.match(new RegExp(""+e,"gi"))||"object"==typeof o[i].label&&(null===(s=o[i])||void 0===s||null===(u=s.title)||void 0===u?void 0:u.match(new RegExp(""+e,"gi")))?a.push(o[i]):o[i].value.match(new RegExp(""+e,"gi"))&&r.push(o[i])}"object"!=typeof o[i].label||"title"in o[i]||console.warn("[multiselect] you must provide a title property as typeof string, if you want to render jsx in option label")}}(t),[].concat(a,r)},ne=function(e){var t=[],n=T.findIndex(function(e){return"group"===(null==e?void 0:e.type)&&"Custom Values"===(null==e?void 0:e.title)});return-1===n?t.push({title:"Custom Values",type:"group",childs:[].concat(e)}):Array.isArray(e)?e.map(function(e){return T[n].childs.push(e)}):"object"==typeof e&&T[n].childs.push(e),B([].concat(T,t)),t},le=function(e){var t=e.target;(function(e){return!(e.hasAttribute("clickable")||e.parentNode.hasAttribute("clickable")||e.parentNode.parentNode.hasAttribute("clickable")||e.parentNode.parentNode.parentNode.hasAttribute("clickable"))})(t)&&(function(e){if(e.hasAttribute("dropdown-handle")||e.parentNode.hasAttribute("dropdown-handle")||e.parentNode.parentNode.hasAttribute("dropdown-handle"))return!0}(t)&&G?(J(!1),L()):(J(!0),S(),$.current&&$.current.focus()))},ae=function(e){return"object"==typeof e.label?(null==e?void 0:e.title)||e.value:e.label};return e.createElement("div",a({ref:z},N,{onClick:le,tabIndex:"0",onKeyPress:le,style:a({},w),className:"msl-wrp msl-vars "+g+" "+(A?"msl-disabled":"")}),e.createElement("input",{name:x,type:"hidden",value:null==P?void 0:P.map(function(e){return e.value})}),e.createElement("div",{"data-msl":!0,className:"msl "+(G&&(W=z.current,X=W.getBoundingClientRect(),window.innerHeight-(X.top+W.clientHeight)<200?"msl-active-up":"msl-active"))+" "},e.createElement("div",{"data-msl":!0,className:"msl-input-wrp",style:{width:Q}},!b&&!k&&P.map(function(t,n){return e.createElement(i,{key:"msl-chip-"+(n+11),value:t,deleteAction:function(){return function(e){var t=[].concat(P);t.splice(e,1),Y(t)}(n)}})}),!b&&k&&P.length>0&&e.createElement("span",{className:"msl-single-value","data-msl":!0},1===P.length?ae(P[0]):P.length+" "+O),b&&1===P.length&&e.createElement("span",{className:"msl-single-value","data-msl":!0},ae(P[0])),(!b&&!k||!(!b||P.length)||!(b||!k||P.length))&&e.createElement("div",{"data-msl":!0,"data-placeholder":E,className:"msl-input",contentEditable:!A,onKeyUp:function(e){var t=e.target.textContent.trim().replace(/,+/g,"");if(t){var n={label:'Create "'+t+'"',value:t},l=te(t,T);l.length?(I&&!te(t,T,!0,"value").length&&l.push(n),U(l)):U(I?[n]:[]);var a=function(e){var t=e.label,n=e.value;return"object"!=typeof t&&t.match(/Create "|"+/g)&&(t=t.replace(/Create "|"+/g,"")),{label:t,value:n}}(n);"Enter"!==e.key&&","!==e.key||(!I||l.length||Z(a,P)?F.length>0&&_(F[0]):(ne(a),_(n)))}else U(null)},ref:$})),(p||v)&&e.createElement("div",{className:"msl-actions msl-flx"},p&&P.length>0&&e.createElement("div",{role:"button",clickable:"true","aria-label":"close-menu",onClick:ee,onKeyPress:ee,tabIndex:"0",className:"msl-btn msl-clear-btn msl-flx"},m||e.createElement(o,null)),v&&e.createElement("div",{role:"button",tabIndex:"0","dropdown-handle":"true",className:"msl-btn msl-arrow-btn msl-flx",style:a({},G&&{transform:"rotate(180deg)"})},d||e.createElement(c,null)))),e.createElement("div",{className:"msl-options"},!F&&T.length?e.createElement(s,a({opts:T},{singleSelect:b,addValue:_,checkValueExist:Z,value:P,largeData:C,menuOpen:G})):F&&F.length?e.createElement(s,a({opts:F},{singleSelect:b,addValue:_,checkValueExist:Z,value:P,largeData:C,menuOpen:G})):(F&&!F.length||T&&!T.length)&&e.createElement("option",{className:"msl-option msl-option-disable"},j)))}u.defaultProps={clearable:!0,downArrow:!0,singleSelect:!1,jsonValue:!1,defaultValue:"",disableChip:!1,name:"",style:{},disabled:!1,limit:null,emptyDataLabel:"No Data Found",placeholder:"Select...",onChange:function(){},onMenuOpen:function(){},onMenuClose:function(){},options:[{label:"Empty",value:"",disabled:!0,style:{textAlign:"center"}}],customValue:!1,chipAlternateText:"Item Selected",closeOnSelect:!0};export default u;
//# sourceMappingURL=index.modern.js.map
