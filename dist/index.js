"use strict";var x=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var k=x(function(K,j){
var c=require('@stdlib/math-base-special-abs/dist');function z(e,r,o,n,s,u,h,w){var q,f,d,i,b,t,a,v,p;if(e<=0)return u;for(f=s,d=w,q=0,i=0,p=0;p<e;p++)t=o[f],a=r+t,c(r)>=c(t)?v=r-a+t:v=t-a+r,r=a,a=i+v,c(i)>=c(v)?b=i-a+v:b=v-a+i,i=a,q+=b,u[d]=r+i+q,f+=n,d+=h;return u}j.exports=z
});var R=x(function(L,m){
var y=require('@stdlib/strided-base-stride2offset/dist'),A=k();function B(e,r,o,n,s,u){return A(e,r,o,n,y(e,n),s,u,y(e,u)),s}m.exports=B
});var O=x(function(M,E){
var C=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),_=R(),D=k();C(_,"ndarray",D);E.exports=_
});var F=require("path").join,G=require('@stdlib/utils-try-require/dist'),H=require('@stdlib/assert-is-error/dist'),I=O(),l,g=G(F(__dirname,"./native.js"));H(g)?l=I:l=g;module.exports=l;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
