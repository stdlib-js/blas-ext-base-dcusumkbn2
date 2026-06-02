"use strict";var l=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var p=l(function(L,y){
var b=require('@stdlib/math-base-special-abs/dist');function A(e,r,o,c,q,v,j,z){var d,s,f,n,k,a,i,t,u;if(e<=0)return v;if(s=q,f=z,r===0)for(u=0;u<e&&(a=o[s],a===0);u++)r+=a,v[f]=r,s+=c,f+=j;else u=0;for(d=0,n=0;u<e;u++)a=o[s],i=r+a,b(r)>=b(a)?t=r-i+a:t=a-i+r,r=i,i=n+t,b(n)>=b(t)?k=n-i+t:k=t-i+n,n=i,d+=k,v[f]=r+n+d,s+=c,f+=j;return v}y.exports=A
});var E=l(function(M,_){
var R=require('@stdlib/strided-base-stride2offset/dist'),B=p();function C(e,r,o,c,q,v){return B(e,r,o,c,R(e,c),q,v,R(e,v)),q}_.exports=C
});var h=l(function(P,g){
var D=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),O=E(),F=p();D(O,"ndarray",F);g.exports=O
});var G=require("path").join,H=require('@stdlib/utils-try-require/dist'),I=require('@stdlib/assert-is-error/dist'),J=h(),x,w=H(G(__dirname,"./native.js"));I(w)?x=J:x=w;module.exports=x;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
