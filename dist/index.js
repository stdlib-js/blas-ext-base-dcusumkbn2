"use strict";var l=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var p=l(function(K,y){
var b=require('@stdlib/math-base-special-abs/dist');function z(e,r,o,s,q,v,j,w){var d,c,f,u,k,a,i,n,t;if(e<=0)return v;if(c=q,f=w,r===0)for(t=0;t<e&&(a=o[c],a===0);t++)v[f]=r+a,c+=s,f+=j;else t=0;for(d=0,u=0;t<e;t++)a=o[c],i=r+a,b(r)>=b(a)?n=r-i+a:n=a-i+r,r=i,i=u+n,b(u)>=b(n)?k=u-i+n:k=n-i+u,u=i,d+=k,v[f]=r+u+d,c+=s,f+=j;return v}y.exports=z
});var E=l(function(L,_){
var R=require('@stdlib/strided-base-stride2offset/dist'),A=p();function B(e,r,o,s,q,v){return A(e,r,o,s,R(e,s),q,v,R(e,v)),q}_.exports=B
});var h=l(function(M,g){
var C=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),O=E(),D=p();C(O,"ndarray",D);g.exports=O
});var F=require("path").join,G=require('@stdlib/utils-try-require/dist'),H=require('@stdlib/assert-is-error/dist'),I=h(),x,m=G(F(__dirname,"./native.js"));H(m)?x=I:x=m;module.exports=x;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
