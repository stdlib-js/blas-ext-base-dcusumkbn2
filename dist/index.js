"use strict";var l=function(e,r){return function(){try{return r||e((r={exports:{}}).exports,r),r.exports}catch(t){throw (r=0, t)}};};var p=l(function(L,y){
var b=require('@stdlib/math-base-special-abs/dist');function A(e,r,t,s,q,v,j,z){var d,f,o,n,k,a,i,u,c;if(e<=0)return v;if(f=q,o=z,r===0)for(c=0;c<e&&(a=t[f],a===0);c++)r+=a,v[o]=r,f+=s,o+=j;else c=0;for(d=0,n=0;c<e;c++)a=t[f],i=r+a,b(r)>=b(a)?u=r-i+a:u=a-i+r,r=i,i=n+u,b(n)>=b(u)?k=n-i+u:k=u-i+n,n=i,d+=k,v[o]=r+n+d,f+=s,o+=j;return v}y.exports=A
});var E=l(function(M,_){
var R=require('@stdlib/strided-base-stride2offset/dist'),B=p();function C(e,r,t,s,q,v){return B(e,r,t,s,R(e,s),q,v,R(e,v)),q}_.exports=C
});var h=l(function(P,g){
var D=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),O=E(),F=p();D(O,"ndarray",F);g.exports=O
});var G=require("path").join,H=require('@stdlib/utils-try-require/dist'),I=require('@stdlib/assert-is-error/dist'),J=h(),x,w=H(G(__dirname,"./native.js"));I(w)?x=J:x=w;module.exports=x;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
