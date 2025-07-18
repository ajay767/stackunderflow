import{r as d}from"./index.BVOCwoKb.js";var x={exports:{}},e={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var a;function v(){if(a)return e;a=1;var n=Symbol.for("react.transitional.element"),o=Symbol.for("react.fragment");function u(R,r,t){var s=null;if(t!==void 0&&(s=""+t),r.key!==void 0&&(s=""+r.key),"key"in r){t={};for(var i in r)i!=="key"&&(t[i]=r[i])}else t=r;return r=t.ref,{$$typeof:n,type:R,key:s,ref:r!==void 0?r:null,props:t}}return e.Fragment=o,e.jsx=u,e.jsxs=u,e}var l;function p(){return l||(l=1,x.exports=v()),x.exports}var c=p();const k=()=>{const[n,o]=d.useState(0);return console.log({counter_count:n}),c.jsx("div",{children:c.jsxs("button",{onClick:()=>{o(u=>u+1)},children:["click ",n]})})};export{k as default};
