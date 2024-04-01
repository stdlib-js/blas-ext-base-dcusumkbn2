"use strict";var j=function(n,r){return function(){return r||n((r={exports:{}}).exports,r),r.exports}};var _=j(function(K,R){
var x=require('@stdlib/math-base-special-abs/dist');function A(n,r,d,q,l,s){var b,f,t,c,u,e,a,i,v;if(n<=0)return l;for(q<0?f=(1-n)*q:f=0,s<0?t=(1-n)*s:t=0,b=0,c=0,v=0;v<n;v++)e=d[f],a=r+e,x(r)>=x(e)?i=r-a+e:i=e-a+r,r=a,a=c+i,x(c)>=x(i)?u=c-a+i:u=i-a+c,c=a,b+=u,l[t]=r+c+b,f+=q,t+=s;return l}R.exports=A
});var O=j(function(L,E){
var p=require('@stdlib/math-base-special-abs/dist');function B(n,r,d,q,l,s,b,f){var t,c,u,e,a,i,v,o,k;if(n<=0)return s;for(c=l,u=f,t=0,e=0,k=0;k<n;k++)i=d[c],v=r+i,p(r)>=p(i)?o=r-v+i:o=i-v+r,r=v,v=e+o,p(e)>=p(o)?a=e-v+o:a=o-v+e,e=v,t+=a,s[u]=r+e+t,c+=q,u+=b;return s}E.exports=B
});var w=j(function(M,h){
var C=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),g=_(),D=O();C(g,"ndarray",D);h.exports=g
});var F=require("path").join,G=require('@stdlib/utils-try-require/dist'),H=require('@stdlib/assert-is-error/dist'),I=w(),y,z=G(F(__dirname,"./native.js"));H(z)?y=I:y=z;module.exports=y;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
