(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{"/+cc":function(e,t,n){
/*!
 * Fuse.js v3.6.1 - Lightweight fuzzy-search (http://fusejs.io)
 * 
 * Copyright (c) 2012-2017 Kirollos Risk (http://kiro.me)
 * All Rights Reserved. Apache Software License 2.0
 * 
 * http://www.apache.org/licenses/LICENSE-2.0
 */
e.exports=function(e){var t={};function n(a){if(t[a])return t[a].exports;var o=t[a]={i:a,l:!1,exports:{}};return e[a].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,a){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(n.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(a,o,function(t){return e[t]}.bind(null,o));return a},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){function a(e){return(a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function o(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}var i=n(1),r=n(7),s=r.get,c=(r.deepValue,r.isArray),l=function(){function e(t,n){var a=n.location,o=void 0===a?0:a,i=n.distance,r=void 0===i?100:i,c=n.threshold,l=void 0===c?.6:c,d=n.maxPatternLength,h=void 0===d?32:d,u=n.caseSensitive,p=void 0!==u&&u,g=n.tokenSeparator,f=void 0===g?/ +/g:g,v=n.findAllMatches,m=void 0!==v&&v,b=n.minMatchCharLength,y=void 0===b?1:b,x=n.id,w=void 0===x?null:x,k=n.keys,S=void 0===k?[]:k,_=n.shouldSort,C=void 0===_||_,M=n.getFn,P=void 0===M?s:M,I=n.sortFn,j=void 0===I?function(e,t){return e.score-t.score}:I,A=n.tokenize,O=void 0!==A&&A,E=n.matchAllTokens,L=void 0!==E&&E,F=n.includeMatches,D=void 0!==F&&F,T=n.includeScore,N=void 0!==T&&T,W=n.verbose,B=void 0!==W&&W;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.options={location:o,distance:r,threshold:l,maxPatternLength:h,isCaseSensitive:p,tokenSeparator:f,findAllMatches:m,minMatchCharLength:y,id:w,keys:S,includeMatches:D,includeScore:N,shouldSort:C,getFn:P,sortFn:j,verbose:B,tokenize:O,matchAllTokens:L},this.setCollection(t),this._processKeys(S)}var t,n;return t=e,(n=[{key:"setCollection",value:function(e){return this.list=e,e}},{key:"_processKeys",value:function(e){if(this._keyWeights={},this._keyNames=[],e.length&&"string"==typeof e[0])for(var t=0,n=e.length;t<n;t+=1){var a=e[t];this._keyWeights[a]=1,this._keyNames.push(a)}else{for(var o=null,i=null,r=0,s=0,c=e.length;s<c;s+=1){var l=e[s];if(!l.hasOwnProperty("name"))throw new Error('Missing "name" property in key object');var d=l.name;if(this._keyNames.push(d),!l.hasOwnProperty("weight"))throw new Error('Missing "weight" property in key object');var h=l.weight;if(h<0||h>1)throw new Error('"weight" property in key must bein the range of [0, 1)');i=null==i?h:Math.max(i,h),o=null==o?h:Math.min(o,h),this._keyWeights[d]=h,r+=h}if(r>1)throw new Error("Total of weights cannot exceed 1")}}},{key:"search",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{limit:!1};this._log('---------\nSearch pattern: "'.concat(e,'"'));var n=this._prepareSearchers(e),a=n.tokenSearchers,o=n.fullSearcher,i=this._search(a,o);return this._computeScore(i),this.options.shouldSort&&this._sort(i),t.limit&&"number"==typeof t.limit&&(i=i.slice(0,t.limit)),this._format(i)}},{key:"_prepareSearchers",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=[];if(this.options.tokenize)for(var n=e.split(this.options.tokenSeparator),a=0,o=n.length;a<o;a+=1)t.push(new i(n[a],this.options));return{tokenSearchers:t,fullSearcher:new i(e,this.options)}}},{key:"_search",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0,n=this.list,a={},o=[];if("string"==typeof n[0]){for(var i=0,r=n.length;i<r;i+=1)this._analyze({key:"",value:n[i],record:i,index:i},{resultMap:a,results:o,tokenSearchers:e,fullSearcher:t});return o}for(var s=0,c=n.length;s<c;s+=1)for(var l=n[s],d=0,h=this._keyNames.length;d<h;d+=1){var u=this._keyNames[d];this._analyze({key:u,value:this.options.getFn(l,u),record:l,index:s},{resultMap:a,results:o,tokenSearchers:e,fullSearcher:t})}return o}},{key:"_analyze",value:function(e,t){var n=this,a=e.key,o=e.arrayIndex,i=void 0===o?-1:o,r=e.value,s=e.record,l=e.index,d=t.tokenSearchers,h=void 0===d?[]:d,u=t.fullSearcher,p=t.resultMap,g=void 0===p?{}:p,f=t.results,v=void 0===f?[]:f;!function e(t,o,i,r){if(null!=o)if("string"==typeof o){var s=!1,l=-1,d=0;n._log("\nKey: ".concat(""===a?"--":a));var p=u.search(o);if(n._log('Full text: "'.concat(o,'", score: ').concat(p.score)),n.options.tokenize){for(var f=o.split(n.options.tokenSeparator),m=f.length,b=[],y=0,x=h.length;y<x;y+=1){var w=h[y];n._log('\nPattern: "'.concat(w.pattern,'"'));for(var k=!1,S=0;S<m;S+=1){var _=f[S],C=w.search(_),M={};C.isMatch?(M[_]=C.score,s=!0,k=!0,b.push(C.score)):(M[_]=1,n.options.matchAllTokens||b.push(1)),n._log('Token: "'.concat(_,'", score: ').concat(M[_]))}k&&(d+=1)}l=b[0];for(var P=b.length,I=1;I<P;I+=1)l+=b[I];l/=P,n._log("Token score average:",l)}var j=p.score;l>-1&&(j=(j+l)/2),n._log("Score average:",j);var A=!n.options.tokenize||!n.options.matchAllTokens||d>=h.length;if(n._log("\nCheck Matches: ".concat(A)),(s||p.isMatch)&&A){var O={key:a,arrayIndex:t,value:o,score:j};n.options.includeMatches&&(O.matchedIndices=p.matchedIndices);var E=g[r];E?E.output.push(O):(g[r]={item:i,output:[O]},v.push(g[r]))}}else if(c(o))for(var L=0,F=o.length;L<F;L+=1)e(L,o[L],i,r)}(i,r,s,l)}},{key:"_computeScore",value:function(e){this._log("\n\nComputing score:\n");for(var t=this._keyWeights,n=!!Object.keys(t).length,a=0,o=e.length;a<o;a+=1){for(var i=e[a],r=i.output,s=r.length,c=1,l=0;l<s;l+=1){var d=r[l],h=d.key,u=n?t[h]:1,p=0===d.score&&t&&t[h]>0?Number.EPSILON:d.score;c*=Math.pow(p,u)}i.score=c,this._log(i)}}},{key:"_sort",value:function(e){this._log("\n\nSorting...."),e.sort(this.options.sortFn)}},{key:"_format",value:function(e){var t=[];if(this.options.verbose){var n=[];this._log("\n\nOutput:\n\n",JSON.stringify(e,(function(e,t){if("object"===a(t)&&null!==t){if(-1!==n.indexOf(t))return;n.push(t)}return t}),2)),n=null}var o=[];this.options.includeMatches&&o.push((function(e,t){var n=e.output;t.matches=[];for(var a=0,o=n.length;a<o;a+=1){var i=n[a];if(0!==i.matchedIndices.length){var r={indices:i.matchedIndices,value:i.value};i.key&&(r.key=i.key),i.hasOwnProperty("arrayIndex")&&i.arrayIndex>-1&&(r.arrayIndex=i.arrayIndex),t.matches.push(r)}}})),this.options.includeScore&&o.push((function(e,t){t.score=e.score}));for(var i=0,r=e.length;i<r;i+=1){var s=e[i];if(this.options.id&&(s.item=this.options.getFn(s.item,this.options.id)[0]),o.length){for(var c={item:s.item},l=0,d=o.length;l<d;l+=1)o[l](s,c);t.push(c)}else t.push(s.item)}return t}},{key:"_log",value:function(){var e;this.options.verbose&&(e=console).log.apply(e,arguments)}}])&&o(t.prototype,n),e}();e.exports=l},function(e,t,n){function a(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}var o=n(2),i=n(3),r=n(6),s=function(){function e(t,n){var a=n.location,o=void 0===a?0:a,i=n.distance,s=void 0===i?100:i,c=n.threshold,l=void 0===c?.6:c,d=n.maxPatternLength,h=void 0===d?32:d,u=n.isCaseSensitive,p=void 0!==u&&u,g=n.tokenSeparator,f=void 0===g?/ +/g:g,v=n.findAllMatches,m=void 0!==v&&v,b=n.minMatchCharLength,y=void 0===b?1:b,x=n.includeMatches,w=void 0!==x&&x;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.options={location:o,distance:s,threshold:l,maxPatternLength:h,isCaseSensitive:p,tokenSeparator:f,findAllMatches:m,includeMatches:w,minMatchCharLength:y},this.pattern=p?t:t.toLowerCase(),this.pattern.length<=h&&(this.patternAlphabet=r(this.pattern))}var t,n;return t=e,(n=[{key:"search",value:function(e){var t=this.options,n=t.isCaseSensitive,a=t.includeMatches;if(n||(e=e.toLowerCase()),this.pattern===e){var r={isMatch:!0,score:0};return a&&(r.matchedIndices=[[0,e.length-1]]),r}var s=this.options,c=s.maxPatternLength,l=s.tokenSeparator;if(this.pattern.length>c)return o(e,this.pattern,l);var d=this.options,h=d.location,u=d.distance,p=d.threshold,g=d.findAllMatches,f=d.minMatchCharLength;return i(e,this.pattern,this.patternAlphabet,{location:h,distance:u,threshold:p,findAllMatches:g,minMatchCharLength:f,includeMatches:a})}}])&&a(t.prototype,n),e}();e.exports=s},function(e,t){var n=/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g;e.exports=function(e,t){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:/ +/g,o=new RegExp(t.replace(n,"\\$&").replace(a,"|")),i=e.match(o),r=!!i,s=[];if(r)for(var c=0,l=i.length;c<l;c+=1){var d=i[c];s.push([e.indexOf(d),d.length-1])}return{score:r?.5:1,isMatch:r,matchedIndices:s}}},function(e,t,n){var a=n(4),o=n(5);e.exports=function(e,t,n,i){for(var r=i.location,s=void 0===r?0:r,c=i.distance,l=void 0===c?100:c,d=i.threshold,h=void 0===d?.6:d,u=i.findAllMatches,p=void 0!==u&&u,g=i.minMatchCharLength,f=void 0===g?1:g,v=i.includeMatches,m=void 0!==v&&v,b=s,y=e.length,x=h,w=e.indexOf(t,b),k=t.length,S=[],_=0;_<y;_+=1)S[_]=0;if(-1!==w){var C=a(t,{errors:0,currentLocation:w,expectedLocation:b,distance:l});if(x=Math.min(C,x),-1!==(w=e.lastIndexOf(t,b+k))){var M=a(t,{errors:0,currentLocation:w,expectedLocation:b,distance:l});x=Math.min(M,x)}}w=-1;for(var P=[],I=1,j=k+y,A=1<<(k<=31?k-1:30),O=0;O<k;O+=1){for(var E=0,L=j;E<L;)a(t,{errors:O,currentLocation:b+L,expectedLocation:b,distance:l})<=x?E=L:j=L,L=Math.floor((j-E)/2+E);j=L;var F=Math.max(1,b-L+1),D=p?y:Math.min(b+L,y)+k,T=Array(D+2);T[D+1]=(1<<O)-1;for(var N=D;N>=F;N-=1){var W=N-1,B=n[e.charAt(W)];if(B&&(S[W]=1),T[N]=(T[N+1]<<1|1)&B,0!==O&&(T[N]|=(P[N+1]|P[N])<<1|1|P[N+1]),T[N]&A&&(I=a(t,{errors:O,currentLocation:W,expectedLocation:b,distance:l}))<=x){if(x=I,(w=W)<=b)break;F=Math.max(1,2*b-w)}}if(a(t,{errors:O+1,currentLocation:b,expectedLocation:b,distance:l})>x)break;P=T}var R={isMatch:w>=0,score:0===I?.001:I};return m&&(R.matchedIndices=o(S,f)),R}},function(e,t){e.exports=function(e,t){var n=t.errors,a=void 0===n?0:n,o=t.currentLocation,i=void 0===o?0:o,r=t.expectedLocation,s=void 0===r?0:r,c=t.distance,l=void 0===c?100:c,d=a/e.length,h=Math.abs(s-i);return l?d+h/l:h?1:d}},function(e,t){e.exports=function(){for(var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,n=[],a=-1,o=-1,i=0,r=e.length;i<r;i+=1){var s=e[i];s&&-1===a?a=i:s||-1===a||((o=i-1)-a+1>=t&&n.push([a,o]),a=-1)}return e[i-1]&&i-a>=t&&n.push([a,i-1]),n}},function(e,t){e.exports=function(e){for(var t={},n=e.length,a=0;a<n;a+=1)t[e.charAt(a)]=0;for(var o=0;o<n;o+=1)t[e.charAt(o)]|=1<<n-o-1;return t}},function(e,t){var n=function(e){return Array.isArray?Array.isArray(e):"[object Array]"===Object.prototype.toString.call(e)},a=function(e){return null==e?"":function(e){if("string"==typeof e)return e;var t=e+"";return"0"==t&&1/e==-1/0?"-0":t}(e)},o=function(e){return"string"==typeof e},i=function(e){return"number"==typeof e};e.exports={get:function(e,t){var r=[];return function e(t,s){if(s){var c=s.indexOf("."),l=s,d=null;-1!==c&&(l=s.slice(0,c),d=s.slice(c+1));var h=t[l];if(null!=h)if(d||!o(h)&&!i(h))if(n(h))for(var u=0,p=h.length;u<p;u+=1)e(h[u],d);else d&&e(h,d);else r.push(a(h))}else r.push(t)}(e,t),r},isArray:n,isString:o,isNum:i,toString:a}}])},GKVU:function(e,t,n){"use strict";var a=n("I+eb"),o=n("hXpO");a({target:"String",proto:!0,forced:n("rwPt")("anchor")},{anchor:function(e){return o(this,"a","name",e)}})},wQbG:function(e,t,n){"use strict";n.r(t);n("QWBl"),n("2B1R"),n("+2oP"),n("rB9j"),n("hByQ"),n("GKVU"),n("FZtP");var a=n("VTBJ"),o=n("/+cc"),i=n.n(o),r=n("CjXH"),s={components:{ChevronRightIcon:r.c,SearchIcon:r.j},data:function(){return{query:"",focusIndex:-1,focused:!1}},computed:{results:function(){return new i.a(this.headings,{keys:["value"],threshold:.25}).search(this.query).slice(0,15)},headings:function(){var e=[];return this.$static.allMarkdownPage.edges.map((function(e){return e.node})).forEach((function(t){t.headings.forEach((function(n){e.push(Object(a.a)(Object(a.a)({},n),{},{path:t.path,title:t.title}))}))})),e},showResult:function(){return this.focused&&this.query.length>0}},methods:{increment:function(){this.focusIndex<this.results.length-1&&this.focusIndex++},decrement:function(){this.focusIndex>=0&&this.focusIndex--},go:function(){var e;0!==this.results.length&&(e=-1===this.focusIndex?this.results[0]:this.results[this.focusIndex],this.$router.push(e.path+e.anchor),this.$refs.input.blur(),this.query="")}}},c=n("KHd+"),l=n("Kw5r"),d=l.a.config.optionMergeStrategies.computed,h={allMarkdownPage:{edges:[{node:{id:"42fc0d03d6dfc528fbc73f5a0a2795a6",path:"/plugin-docs/other/default-file-types/",title:"Default File Types",headings:[{depth:1,value:"Default File Types",anchor:"#default-file-types"},{depth:2,value:"BP",anchor:"#bp"},{depth:2,value:"Single Instance BP Files",anchor:"#single-instance-bp-files"},{depth:2,value:"RP",anchor:"#rp"},{depth:2,value:"Single Instance RP Files",anchor:"#single-instance-rp-files"},{depth:2,value:"Other",anchor:"#other"}]}},{node:{id:"8dedb1120cb8076d31ee916649e12850",path:"/plugin-docs/modules/windows/",title:"@bridge/windows",headings:[{depth:1,value:"@bridge/windows",anchor:"#bridgewindows"},{depth:3,value:"createInformationWindow(displayName: string, displayContent: string): IBridgeWindow",anchor:"#createinformationwindowdisplayname-string-displaycontent-string-ibridgewindow"},{depth:3,value:"createInputWindow(displayName: string, inputLabel: string, defaultValue: string, expandText: string, onConfirm: (input: string) => void): IBridgeWindow",anchor:"#createinputwindowdisplayname-string-inputlabel-string-defaultvalue-string-expandtext-string-onconfirm-input-string--void-ibridgewindow"},{depth:3,value:"createDropdownWindow(displayName: string, placeholderText: string, options: Array, defaultSelected: string, onConfirm: (input: string) => void): IBridgeWindow",anchor:"#createdropdownwindowdisplayname-string-placeholdertext-string-options-arraystring-defaultselected-string-onconfirm-input-string--void-ibridgewindow"},{depth:3,value:"createConfirmWindow(displayContent: string, confirmText: string, cancelText: string, onConfirm: () => void, onCancel: () => void): IBridgeWindow",anchor:"#createconfirmwindowdisplaycontent-string-confirmtext-string-canceltext-string-onconfirm---void-oncancel---void-ibridgewindow"},{depth:3,value:"createWindow(vueComponent: VueComponent, state: Record): IBridgeWindow",anchor:"#createwindowvuecomponent-vuecomponent-state-recordstring-any-ibridgewindow"},{depth:4,value:"Example Component:",anchor:"#example-component"}]}},{node:{id:"c6e1c45ca385a06d6bfbbf0e7763a149",path:"/plugin-docs/modules/utils/",title:"@bridge/utils",headings:[{depth:1,value:"@bridge/utils",anchor:"#bridgeutils"},{depth:3,value:"openExternal(url: string): Promise",anchor:"#openexternalurl-string-promisevoid"}]}},{node:{id:"79274f2bb2349268584ff521299b8cbe",path:"/plugin-docs/modules/ui/",title:"@bridge/ui",headings:[{depth:1,value:"@bridge/ui",anchor:"#bridgeui"},{depth:2,value:"UI.BuiltIn",anchor:"#uibuiltin"},{depth:3,value:"BuiltIn.BaseWindow",anchor:"#builtinbasewindow"},{depth:4,value:"Props:",anchor:"#props"},{depth:3,value:"Events:",anchor:"#events"},{depth:4,value:"Example Usage:",anchor:"#example-usage"}]}},{node:{id:"9e4900b9e26fb1d45265f7d1ec315cf9",path:"/plugin-docs/modules/sidebar/",title:"@bridge/sidebar",headings:[{depth:1,value:"@bridge/sidebar",anchor:"#bridgesidebar"}]}},{node:{id:"5fea1ca66cd584fbcda2d94c858b84df",path:"/plugin-docs/modules/path/",title:"@bridge/path",headings:[{depth:1,value:"@bridge/path",anchor:"#bridgepath"},{depth:2,value:"Node Path Module",anchor:"#node-path-module"}]}},{node:{id:"7839a531a727832d02532c0b6b6eee70",path:"/plugin-docs/modules/",title:"Plugin Modules",headings:[{depth:1,value:"Plugin Modules",anchor:"#plugin-modules"},{depth:2,value:"Usage Examples:",anchor:"#usage-examples"}]}},{node:{id:"c189bf4a8befbefa4bcd425de8bfb3f1",path:"/plugin-docs/modules/globals/",title:"@bridge/globals",headings:[{depth:1,value:"@bridge/globals",anchor:"#bridgeglobals"}]}},{node:{id:"f1e93b01cc8df182ba3070bb11a1eaa8",path:"/plugin-docs/modules/fs/",title:"@bridge/fs",headings:[{depth:1,value:"@bridge/fs",anchor:"#bridgefs"},{depth:2,value:"Node FS Module",anchor:"#node-fs-module"},{depth:2,value:"Additional Functions",anchor:"#additional-functions"},{depth:3,value:"writeJSON(filePath: string, data: any, beautify = false, fileVersion?: number): Promise",anchor:"#writejsonfilepath-string-data-any-beautify--false-fileversion-number-promisevoid"},{depth:3,value:"readJSON(filePath: string): Promise",anchor:"#readjsonfilepath-string-promiseany"}]}},{node:{id:"a81dabda7e174f9e7ddc5a516f24f531",path:"/plugin-docs/modules/footer/",title:"@bridge/notification",headings:[{depth:1,value:"@bridge/notification",anchor:"#bridgenotification"},{depth:3,value:"create({icon?: string, message?: string, color?: string, textColor?: string, disposeOnMiddleClick?: boolean, onClick?: () => void, onMiddleClick?: () => void})",anchor:"#createicon-string-message-string-color-string-textcolor-string-disposeonmiddleclick-boolean-onclick---void-onmiddleclick---void"},{depth:3,value:"createError(error: Error)",anchor:"#createerrorerror-error"}]}},{node:{id:"4454307db58514516379acf649fe822d",path:"/plugin-docs/modules/fetch-definition/",title:"@bridge/fetch-definition",headings:[{depth:1,value:"@bridge/fetch-definition",anchor:"#bridgefetch-definition"},{depth:2,value:"fetchDefinition(fileType: string, fetchDefs: string[], fetchSearch: string, fetchAll = false): Promise",anchor:"#fetchdefinitionfiletype-string-fetchdefs-string-fetchsearch-string-fetchall--false-promisestring"},{depth:3,value:"Example:",anchor:"#example"}]}},{node:{id:"72dc6129b253e8f955bf75f3dd87bb31",path:"/plugin-docs/modules/env/",title:"@bridge/env",headings:[{depth:1,value:"@bridge/env",anchor:"#bridgeenv"},{depth:2,value:"getCurrentBP(): string",anchor:"#getcurrentbp-string"},{depth:2,value:"getCurrentRP(): string",anchor:"#getcurrentrp-string"},{depth:2,value:"getProjectPrefix(): string",anchor:"#getprojectprefix-string"},{depth:2,value:"getProjectTargetVersion(): string",anchor:"#getprojecttargetversion-string"},{depth:2,value:"getContext(): Object",anchor:"#getcontext-object"}]}},{node:{id:"b7b6b042442c85f29654510355f9e5bf",path:"/plugin-docs/json/themes/",title:"Themes",headings:[{depth:1,value:"Themes",anchor:"#themes"},{depth:2,value:"General",anchor:"#general"},{depth:2,value:"Plugin Integration",anchor:"#plugin-integration"},{depth:2,value:"Loading Behavior",anchor:"#loading-behavior"},{depth:2,value:"Format",anchor:"#format"},{depth:3,value:"Main",anchor:"#main"},{depth:3,value:"OptionObject",anchor:"#optionobject"},{depth:3,value:"ThemeDefinition",anchor:"#themedefinition"},{depth:3,value:"ThemeVariant",anchor:"#themevariant"},{depth:3,value:"HighlighterDefinition",anchor:"#highlighterdefinition"},{depth:3,value:"StyleObject",anchor:"#styleobject"},{depth:2,value:"Example",anchor:"#example"},{depth:3,value:"More Examples: ",anchor:"https://github.com/solvedDev/bridge./tree/master/static/themes"}]}},{node:{id:"c477b0e9a0f02c91c9326ef7619c76c3",path:"/plugin-docs/json/snippets/",title:"Snippets",headings:[{depth:1,value:"Snippets",anchor:"#snippets"},{depth:2,value:"General",anchor:"#general"},{depth:2,value:"Plugin Integration",anchor:"#plugin-integration"},{depth:2,value:"Format",anchor:"#format"},{depth:3,value:"Main",anchor:"#main"},{depth:3,value:"SnippetTemplate",anchor:"#snippettemplate"},{depth:2,value:"Example",anchor:"#example"},{depth:3,value:"More Examples: ",anchor:"https://github.com/solvedDev/bridge./tree/master/static/snippets"}]}},{node:{id:"f0d329441021c744e9321150bb905fcb",path:"/plugin-docs/json/presets/",title:"Presets",headings:[{depth:1,value:"Presets",anchor:"#presets"},{depth:2,value:"General",anchor:"#general"},{depth:2,value:"Plugin Integration",anchor:"#plugin-integration"},{depth:2,value:"Manifest Format",anchor:"#manifest-format"},{depth:3,value:"Main",anchor:"#main"},{depth:3,value:"FileFolderMap",anchor:"#filefoldermap"},{depth:3,value:"FileFolderMap",anchor:"#filefoldermap-1"},{depth:3,value:"FileFolderMap",anchor:"#filefoldermap-2"},{depth:2,value:"Manifest Example",anchor:"#manifest-example"},{depth:2,value:"File Syntax",anchor:"#file-syntax"},{depth:2,value:"Variable Example",anchor:"#variable-example"},{depth:3,value:"More Examples: ",anchor:"https://github.com/solvedDev/bridge./tree/master/static/presets"}]}},{node:{id:"e97564356cd0cab5da3379308ab3df4b",path:"/plugin-docs/json/lightning-cache/",title:"Lightning Cache",headings:[{depth:1,value:"Lightning Cache",anchor:"#lightning-cache"}]}},{node:{id:"3028ab41cf6c97fc075e301e97bb62c1",path:"/editor/projects/",title:"Projects",headings:[{depth:1,value:"Projects",anchor:"#projects"},{depth:2,value:"Advanced Mining",anchor:"#advanced-mining"},{depth:2,value:"PAC-MAN",anchor:"#pac-man"}]}},{node:{id:"cc748fef663c1bb302fbe0108ce315a2",path:"/plugin-docs/auto-completions/",title:"Auto-Completions",headings:[{depth:1,value:"Auto-Completions",anchor:"#auto-completions"},{depth:2,value:"Basics",anchor:"#basics"},{depth:2,value:"Folder Structure",anchor:"#folder-structure"},{depth:3,value:"Example",anchor:"#example"},{depth:4,value:"File 1: static/auto_completions/my_file_type/main",anchor:"#file-1-staticauto_completionsmy_file_typemain"},{depth:4,value:"File 1: static/auto_completions/reference/main",anchor:"#file-1-staticauto_completionsreferencemain"},{depth:2,value:"File Structure",anchor:"#file-structure"},{depth:3,value:"Example 1 from static/auto_completions/recipe/main",anchor:"#example-1-from-staticauto_completionsrecipemain"},{depth:3,value:"Example 2 from static/auto_completions/recipe/general",anchor:"#example-2-from-staticauto_completionsrecipegeneral"}]}},{node:{id:"5bf728950e8ffec40e715c3d469ac2b1",path:"/plugin-docs/auto-completions/dynamic-references/",title:"Dynamic References",headings:[{depth:1,value:"Dynamic References",anchor:"#dynamic-references"},{depth:3,value:"Lightning Cache References",anchor:"#lightning-cache-references"},{depth:3,value:"Built-in References",anchor:"#built-in-references"}]}},{node:{id:"a4e54308df7820d3166035756bf440e5",path:"/editor/getting-started/",title:"Getting Started",headings:[{depth:1,value:"Getting Started",anchor:"#getting-started"},{depth:2,value:"Creating a project",anchor:"#creating-a-project"},{depth:2,value:"Creating a resource pack",anchor:"#creating-a-resource-pack"},{depth:2,value:"Creating files",anchor:"#creating-files"},{depth:2,value:"Editing files",anchor:"#editing-files"},{depth:3,value:"JSON",anchor:"#json"},{depth:3,value:"Other file types",anchor:"#other-file-types"},{depth:3,value:".mcfunction",anchor:"#mcfunction"},{depth:3,value:".js",anchor:"#js"},{depth:3,value:".lang",anchor:"#lang"},{depth:2,value:"Unique editing features",anchor:"#unique-editing-features"},{depth:3,value:"Presets",anchor:"#presets"},{depth:3,value:"Snippets",anchor:"#snippets"},{depth:3,value:"Custom syntax",anchor:"#custom-syntax"},{depth:2,value:"Customizing bridge.",anchor:"#customizing-bridge"},{depth:2,value:"Need Help?",anchor:"#need-help"}]}},{node:{id:"ac9405b7ebc110bb454334eb2786f531",path:"/editor/faq/",title:"FAQ",headings:[{depth:1,value:"FAQ",anchor:"#faq"},{depth:2,value:"How do I use custom commands in game?",anchor:"#how-do-i-use-custom-commands-in-game"},{depth:2,value:"After editing an animation in bridge., it stopped working. Why?",anchor:"#after-editing-an-animation-in-bridge-it-stopped-working-why"},{depth:2,value:"Something isn’t behaving properly with bridge. behavior. What should I do?",anchor:"#something-isnt-behaving-properly-with-bridge-behavior-what-should-i-do"},{depth:2,value:"Something is wrong with the bridge. auto completions.",anchor:"#something-is-wrong-with-the-bridge-auto-completions"},{depth:2,value:"My entity exists in game, but is invisible.",anchor:"#my-entity-exists-in-game-but-is-invisible"},{depth:2,value:"My addon isn’t working. Why?",anchor:"#my-addon-isnt-working-why"},{depth:2,value:"How do I turn on content logs?",anchor:"#how-do-i-turn-on-content-logs"},{depth:2,value:"How do I make a scripting GUI?",anchor:"#how-do-i-make-a-scripting-gui"},{depth:2,value:"Is there a tutorial for…?",anchor:"#is-there-a-tutorial-for"},{depth:2,value:"Do I need experimental gameplay for…?",anchor:"#do-i-need-experimental-gameplay-for"},{depth:2,value:"My entity's texture is black where there should be transparency.",anchor:"#my-entitys-texture-is-black-where-there-should-be-transparency"}]}},{node:{id:"b7bb40acd1683d73918e409c274b62f6",path:"/plugin-docs/",title:"Plugin API",headings:[{depth:1,value:"Plugin API",anchor:"#plugin-api"},{depth:2,value:"General",anchor:"#general"},{depth:2,value:"Getting Started",anchor:"#getting-started"},{depth:2,value:"Plugin Manifest",anchor:"#plugin-manifest"},{depth:3,value:"Example Manifest",anchor:"#example-manifest"},{depth:2,value:"Scripts",anchor:"#scripts"},{depth:2,value:"Old JavaScript API Docs:",anchor:"#old-javascript-api-docs"},{depth:3,value:"Script API v1:",anchor:"#script-api-v1"}]}},{node:{id:"befef3b5800a0d51da0ef9d31aac9870",path:"/editor/",title:"Editor",headings:[{depth:1,value:"Editor",anchor:"#editor"},{depth:2,value:"About",anchor:"#about"},{depth:2,value:"Latest Release",anchor:"#latest-release"},{depth:2,value:"Why  should use bridge.",anchor:"#why-you-should-use-bridge"},{depth:2,value:"Plugins",anchor:"#plugins"},{depth:3,value:"Documentation",anchor:"#documentation"},{depth:3,value:"Library",anchor:"#library"},{depth:2,value:"Contributing to bridge.",anchor:"#contributing-to-bridge"}]}},{node:{id:"1fd116beda218cb1894d044bc05047e4",path:"/plugin-docs/custom-components/",title:"Custom Components",headings:[{depth:1,value:"Custom Components",anchor:"#custom-components"},{depth:3,value:"Execution Scope",anchor:"#execution-scope"},{depth:3,value:"onApply(component_data, location)",anchor:"#onapplycomponent_data-location"},{depth:3,value:"onPropose()",anchor:"#onpropose"},{depth:3,value:"Example",anchor:"#example"}]}},{node:{id:"7524df866c87a74af6f133bd6af5eb87",path:"/plugin-docs/custom-commands/",title:"Custom Commands",headings:[{depth:1,value:"Custom Commands",anchor:"#custom-commands"},{depth:3,value:"Execution Scope",anchor:"#execution-scope"},{depth:3,value:"onApply(commandArgs: string[]): string | string[]",anchor:"#onapplycommandargs-string-string--string"},{depth:3,value:"onPropose(): JSONObject",anchor:"#onpropose-jsonobject"},{depth:3,value:"onCacheHook(commandArgs: string[]): [[string, [string]]]",anchor:"#oncachehookcommandargs-string-string-string"},{depth:3,value:"Example",anchor:"#example"}]}},{node:{id:"5adc406275ca103611048b353f7ab641",path:"/editor/features/",title:"Feature Overview",headings:[{depth:1,value:"Feature Overview",anchor:"#feature-overview"},{depth:2,value:"General",anchor:"#general"},{depth:2,value:"Editor",anchor:"#editor"},{depth:2,value:"Auto-Completions",anchor:"#auto-completions"},{depth:2,value:"Debug Log Explorer",anchor:"#debug-log-explorer"},{depth:2,value:"Documentation",anchor:"#documentation"},{depth:2,value:"Settings",anchor:"#settings"},{depth:2,value:"JavaScript Plugins",anchor:"#javascript-plugins"}]}}]}},u=function(e){var t=e.options;t.__staticData?t.__staticData.data=h:(t.__staticData=l.a.observable({data:h}),t.computed=d({$static:function(){return t.__staticData.data}},t.computed))},p=Object(c.a)(s,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"relative",on:{keydown:[function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"down",40,t.key,["Down","ArrowDown"])?null:e.increment(t)},function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"up",38,t.key,["Up","ArrowUp"])?null:e.decrement(t)},function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.go(t)}]}},[n("label",{staticClass:"relative block"},[n("span",{staticClass:"sr-only"},[e._v("Search Documentation")]),n("div",{staticClass:"absolute inset-y-0 left-0 flex items-center justify-center px-3 py-2 opacity-50"},[n("SearchIcon",{staticClass:"text-ui-typo",attrs:{size:"1.25x"}})],1),n("input",{ref:"input",staticClass:"block w-full py-2 pl-10 pr-4 border-2 rounded-lg bg-ui-sidebar border-ui-sidebar focus:bg-ui-background",class:{"rounded-b-none":e.showResult},attrs:{type:"search",placeholder:"Search Documentation..."},domProps:{value:e.query},on:{focus:function(t){e.focused=!0},blur:function(t){e.focused=!1},input:function(t){e.focusIndex=-1,e.query=t.target.value},change:function(t){e.query=t.target.value}}})]),e.showResult?n("div",{staticClass:"fixed inset-x-0 z-50 overflow-y-auto border-2 border-t-0 rounded-lg rounded-t-none shadow-lg results bg-ui-background bottom:0 sm:bottom-auto sm:absolute border-ui-sidebar",staticStyle:{"max-height":"calc(100vh - 120px)"}},[n("ul",{staticClass:"px-4 py-2 m-0"},[0===e.results.length?n("li",{staticClass:"px-2"},[e._v("\n\t\t\t\tNo results for "),n("span",{staticClass:"font-bold"},[e._v(e._s(e.query))]),e._v(".\n\t\t\t")]):e._l(e.results,(function(t,a){return n("li",{key:t.path+t.anchor,staticClass:"border-ui-sidebar",class:{"border-b":a+1!==e.results.length},on:{mouseenter:function(t){e.focusIndex=a},mousedown:e.go}},[n("g-link",{staticClass:"block p-2 -mx-2 text-base font-bold rounded-lg",class:{"bg-ui-sidebar text-ui-primary":e.focusIndex===a},attrs:{to:t.path+t.anchor}},[t.value===t.title?n("span",[e._v("\n\t\t\t\t\t\t"+e._s(t.value)+"\n\t\t\t\t\t")]):n("span",{staticClass:"flex items-center"},[e._v("\n\t\t\t\t\t\t"+e._s(t.title)+"\n\t\t\t\t\t\t"),n("ChevronRightIcon",{staticClass:"mx-1",attrs:{size:"1x"}}),n("span",{staticClass:"font-normal opacity-75"},[e._v(e._s(t.value))])],1)])],1)}))],2)]):e._e()])}),[],!1,null,null,null);"function"==typeof u&&u(p);t.default=p.exports}}]);