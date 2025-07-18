import{r as c}from"./index.BVOCwoKb.js";var x={exports:{}},e={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var a;function v(){if(a)return e;a=1;var s=Symbol.for("react.transitional.element"),u=Symbol.for("react.fragment");function n(d,r,t){var o=null;if(t!==void 0&&(o=""+t),r.key!==void 0&&(o=""+r.key),"key"in r){t={};for(var i in r)i!=="key"&&(t[i]=r[i])}else t=r;return r=t.ref,{$$typeof:s,type:d,key:o,ref:r!==void 0?r:null,props:t}}return e.Fragment=u,e.jsx=n,e.jsxs=n,e}var l;function p(){return l||(l=1,x.exports=v()),x.exports}var R=p();const k=()=>{const[s,u]=c.useState(0);return R.jsx("div",{children:R.jsxs("button",{onClick:()=>{u(n=>n+1)},children:["click ",s]})})};export{k as default};
