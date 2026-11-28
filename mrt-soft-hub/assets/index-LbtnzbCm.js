(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const r of o.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&i(r)}).observe(document,{childList:!0,subtree:!0});function e(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerPolicy&&(o.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?o.credentials="include":s.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(s){if(s.ep)return;s.ep=!0;const o=e(s);fetch(s.href,o)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Ul="170",ls={ROTATE:0,DOLLY:1,PAN:2},ss={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Xu=0,uc=1,Yu=2,td=1,ed=2,Fn=3,ci=0,Ze=1,sn=2,ai=0,cs=1,ka=2,fc=3,pc=4,qu=5,bi=100,ju=101,Ku=102,Zu=103,Ju=104,Qu=200,tf=201,ef=202,nf=203,Fa=204,za=205,sf=206,of=207,rf=208,af=209,lf=210,cf=211,hf=212,df=213,uf=214,Ha=0,Ga=1,Va=2,_s=3,Wa=4,$a=5,Xa=6,Ya=7,nd=0,ff=1,pf=2,li=0,mf=1,gf=2,vf=3,id=4,_f=5,yf=6,xf=7,sd=300,ys=301,xs=302,qa=303,ja=304,Rr=306,on=1e3,wi=1001,Ka=1002,Tn=1003,Mf=1004,To=1005,Pn=1006,Or=1007,Ai=1008,Wn=1009,od=1010,rd=1011,ro=1012,Bl=1013,Ri=1014,zn=1015,ho=1016,Ol=1017,kl=1018,Ms=1020,ad=35902,ld=1021,cd=1022,En=1023,hd=1024,dd=1025,hs=1026,bs=1027,ud=1028,Fl=1029,fd=1030,zl=1031,Hl=1033,rr=33776,ar=33777,lr=33778,cr=33779,Za=35840,Ja=35841,Qa=35842,tl=35843,el=36196,nl=37492,il=37496,sl=37808,ol=37809,rl=37810,al=37811,ll=37812,cl=37813,hl=37814,dl=37815,ul=37816,fl=37817,pl=37818,ml=37819,gl=37820,vl=37821,hr=36492,_l=36494,yl=36495,pd=36283,xl=36284,Ml=36285,bl=36286,bf=3200,Sf=3201,md=0,Ef=1,ii="",fe="srgb",ws="srgb-linear",Pr="linear",de="srgb",Fi=7680,mc=519,Tf=512,wf=513,Af=514,gd=515,Cf=516,Rf=517,Pf=518,If=519,Sl=35044,gc="300 es",Hn=2e3,pr=2001;class Di{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const i=this._listeners;return i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const s=this._listeners[t];if(s!==void 0){const o=s.indexOf(e);o!==-1&&s.splice(o,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const i=this._listeners[t.type];if(i!==void 0){t.target=this;const s=i.slice(0);for(let o=0,r=s.length;o<r;o++)s[o].call(this,t);t.target=null}}}const He=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let vc=1234567;const eo=Math.PI/180,ao=180/Math.PI;function Gn(){const n=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(He[n&255]+He[n>>8&255]+He[n>>16&255]+He[n>>24&255]+"-"+He[t&255]+He[t>>8&255]+"-"+He[t>>16&15|64]+He[t>>24&255]+"-"+He[e&63|128]+He[e>>8&255]+"-"+He[e>>16&255]+He[e>>24&255]+He[i&255]+He[i>>8&255]+He[i>>16&255]+He[i>>24&255]).toLowerCase()}function we(n,t,e){return Math.max(t,Math.min(e,n))}function Gl(n,t){return(n%t+t)%t}function Lf(n,t,e,i,s){return i+(n-t)*(s-i)/(e-t)}function Df(n,t,e){return n!==t?(e-n)/(t-n):0}function no(n,t,e){return(1-e)*n+e*t}function Nf(n,t,e,i){return no(n,t,1-Math.exp(-e*i))}function Uf(n,t=1){return t-Math.abs(Gl(n,t*2)-t)}function Bf(n,t,e){return n<=t?0:n>=e?1:(n=(n-t)/(e-t),n*n*(3-2*n))}function Of(n,t,e){return n<=t?0:n>=e?1:(n=(n-t)/(e-t),n*n*n*(n*(n*6-15)+10))}function kf(n,t){return n+Math.floor(Math.random()*(t-n+1))}function Ff(n,t){return n+Math.random()*(t-n)}function zf(n){return n*(.5-Math.random())}function Hf(n){n!==void 0&&(vc=n);let t=vc+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Gf(n){return n*eo}function Vf(n){return n*ao}function Wf(n){return(n&n-1)===0&&n!==0}function $f(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function Xf(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function Yf(n,t,e,i,s){const o=Math.cos,r=Math.sin,a=o(e/2),l=r(e/2),c=o((t+i)/2),h=r((t+i)/2),d=o((t-i)/2),u=r((t-i)/2),p=o((i-t)/2),v=r((i-t)/2);switch(s){case"XYX":n.set(a*h,l*d,l*u,a*c);break;case"YZY":n.set(l*u,a*h,l*d,a*c);break;case"ZXZ":n.set(l*d,l*u,a*h,a*c);break;case"XZX":n.set(a*h,l*v,l*p,a*c);break;case"YXY":n.set(l*p,a*h,l*v,a*c);break;case"ZYZ":n.set(l*v,l*p,a*h,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function xn(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function ce(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const Xt={DEG2RAD:eo,RAD2DEG:ao,generateUUID:Gn,clamp:we,euclideanModulo:Gl,mapLinear:Lf,inverseLerp:Df,lerp:no,damp:Nf,pingpong:Uf,smoothstep:Bf,smootherstep:Of,randInt:kf,randFloat:Ff,randFloatSpread:zf,seededRandom:Hf,degToRad:Gf,radToDeg:Vf,isPowerOfTwo:Wf,ceilPowerOfTwo:$f,floorPowerOfTwo:Xf,setQuaternionFromProperEuler:Yf,normalize:ce,denormalize:xn};class Et{constructor(t=0,e=0){Et.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,i=this.y,s=t.elements;return this.x=s[0]*e+s[3]*i+s[6],this.y=s[1]*e+s[4]*i+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(we(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const i=Math.cos(e),s=Math.sin(e),o=this.x-t.x,r=this.y-t.y;return this.x=o*i-r*s+t.x,this.y=o*s+r*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Kt{constructor(t,e,i,s,o,r,a,l,c){Kt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,s,o,r,a,l,c)}set(t,e,i,s,o,r,a,l,c){const h=this.elements;return h[0]=t,h[1]=s,h[2]=a,h[3]=e,h[4]=o,h[5]=l,h[6]=i,h[7]=r,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,s=e.elements,o=this.elements,r=i[0],a=i[3],l=i[6],c=i[1],h=i[4],d=i[7],u=i[2],p=i[5],v=i[8],M=s[0],m=s[3],f=s[6],b=s[1],x=s[4],g=s[7],T=s[2],A=s[5],w=s[8];return o[0]=r*M+a*b+l*T,o[3]=r*m+a*x+l*A,o[6]=r*f+a*g+l*w,o[1]=c*M+h*b+d*T,o[4]=c*m+h*x+d*A,o[7]=c*f+h*g+d*w,o[2]=u*M+p*b+v*T,o[5]=u*m+p*x+v*A,o[8]=u*f+p*g+v*w,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[1],s=t[2],o=t[3],r=t[4],a=t[5],l=t[6],c=t[7],h=t[8];return e*r*h-e*a*c-i*o*h+i*a*l+s*o*c-s*r*l}invert(){const t=this.elements,e=t[0],i=t[1],s=t[2],o=t[3],r=t[4],a=t[5],l=t[6],c=t[7],h=t[8],d=h*r-a*c,u=a*l-h*o,p=c*o-r*l,v=e*d+i*u+s*p;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);const M=1/v;return t[0]=d*M,t[1]=(s*c-h*i)*M,t[2]=(a*i-s*r)*M,t[3]=u*M,t[4]=(h*e-s*l)*M,t[5]=(s*o-a*e)*M,t[6]=p*M,t[7]=(i*l-c*e)*M,t[8]=(r*e-i*o)*M,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,s,o,r,a){const l=Math.cos(o),c=Math.sin(o);return this.set(i*l,i*c,-i*(l*r+c*a)+r+t,-s*c,s*l,-s*(-c*r+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(kr.makeScale(t,e)),this}rotate(t){return this.premultiply(kr.makeRotation(-t)),this}translate(t,e){return this.premultiply(kr.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,i=t.elements;for(let s=0;s<9;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const kr=new Kt;function vd(n){for(let t=n.length-1;t>=0;--t)if(n[t]>=65535)return!0;return!1}function mr(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function qf(){const n=mr("canvas");return n.style.display="block",n}const _c={};function Ks(n){n in _c||(_c[n]=!0,console.warn(n))}function jf(n,t,e){return new Promise(function(i,s){function o(){switch(n.clientWaitSync(t,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(o,e);break;default:i()}}setTimeout(o,e)})}function Kf(n){const t=n.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function Zf(n){const t=n.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const ne={enabled:!0,workingColorSpace:ws,spaces:{},convert:function(n,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===de&&(n.r=Vn(n.r),n.g=Vn(n.g),n.b=Vn(n.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(n.applyMatrix3(this.spaces[t].toXYZ),n.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===de&&(n.r=ds(n.r),n.g=ds(n.g),n.b=ds(n.b))),n},fromWorkingColorSpace:function(n,t){return this.convert(n,this.workingColorSpace,t)},toWorkingColorSpace:function(n,t){return this.convert(n,t,this.workingColorSpace)},getPrimaries:function(n){return this.spaces[n].primaries},getTransfer:function(n){return n===ii?Pr:this.spaces[n].transfer},getLuminanceCoefficients:function(n,t=this.workingColorSpace){return n.fromArray(this.spaces[t].luminanceCoefficients)},define:function(n){Object.assign(this.spaces,n)},_getMatrix:function(n,t,e){return n.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(n){return this.spaces[n].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(n=this.workingColorSpace){return this.spaces[n].workingColorSpaceConfig.unpackColorSpace}};function Vn(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function ds(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}const yc=[.64,.33,.3,.6,.15,.06],xc=[.2126,.7152,.0722],Mc=[.3127,.329],bc=new Kt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Sc=new Kt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);ne.define({[ws]:{primaries:yc,whitePoint:Mc,transfer:Pr,toXYZ:bc,fromXYZ:Sc,luminanceCoefficients:xc,workingColorSpaceConfig:{unpackColorSpace:fe},outputColorSpaceConfig:{drawingBufferColorSpace:fe}},[fe]:{primaries:yc,whitePoint:Mc,transfer:de,toXYZ:bc,fromXYZ:Sc,luminanceCoefficients:xc,outputColorSpaceConfig:{drawingBufferColorSpace:fe}}});let zi;class Jf{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{zi===void 0&&(zi=mr("canvas")),zi.width=t.width,zi.height=t.height;const i=zi.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),e=zi}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=mr("canvas");e.width=t.width,e.height=t.height;const i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);const s=i.getImageData(0,0,t.width,t.height),o=s.data;for(let r=0;r<o.length;r++)o[r]=Vn(o[r]/255)*255;return i.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(Vn(e[i]/255)*255):e[i]=Vn(e[i]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Qf=0;class _d{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Qf++}),this.uuid=Gn(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let o;if(Array.isArray(s)){o=[];for(let r=0,a=s.length;r<a;r++)s[r].isDataTexture?o.push(Fr(s[r].image)):o.push(Fr(s[r]))}else o=Fr(s);i.url=o}return e||(t.images[this.uuid]=i),i}}function Fr(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Jf.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let tp=0;class qe extends Di{constructor(t=qe.DEFAULT_IMAGE,e=qe.DEFAULT_MAPPING,i=wi,s=wi,o=Pn,r=Ai,a=En,l=Wn,c=qe.DEFAULT_ANISOTROPY,h=ii){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:tp++}),this.uuid=Gn(),this.name="",this.source=new _d(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=o,this.minFilter=r,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Et(0,0),this.repeat=new Et(1,1),this.center=new Et(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Kt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==sd)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case on:t.x=t.x-Math.floor(t.x);break;case wi:t.x=t.x<0?0:1;break;case Ka:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case on:t.y=t.y-Math.floor(t.y);break;case wi:t.y=t.y<0?0:1;break;case Ka:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}qe.DEFAULT_IMAGE=null;qe.DEFAULT_MAPPING=sd;qe.DEFAULT_ANISOTROPY=1;class pe{constructor(t=0,e=0,i=0,s=1){pe.prototype.isVector4=!0,this.x=t,this.y=e,this.z=i,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,s){return this.x=t,this.y=e,this.z=i,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,i=this.y,s=this.z,o=this.w,r=t.elements;return this.x=r[0]*e+r[4]*i+r[8]*s+r[12]*o,this.y=r[1]*e+r[5]*i+r[9]*s+r[13]*o,this.z=r[2]*e+r[6]*i+r[10]*s+r[14]*o,this.w=r[3]*e+r[7]*i+r[11]*s+r[15]*o,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,s,o;const l=t.elements,c=l[0],h=l[4],d=l[8],u=l[1],p=l[5],v=l[9],M=l[2],m=l[6],f=l[10];if(Math.abs(h-u)<.01&&Math.abs(d-M)<.01&&Math.abs(v-m)<.01){if(Math.abs(h+u)<.1&&Math.abs(d+M)<.1&&Math.abs(v+m)<.1&&Math.abs(c+p+f-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const x=(c+1)/2,g=(p+1)/2,T=(f+1)/2,A=(h+u)/4,w=(d+M)/4,S=(v+m)/4;return x>g&&x>T?x<.01?(i=0,s=.707106781,o=.707106781):(i=Math.sqrt(x),s=A/i,o=w/i):g>T?g<.01?(i=.707106781,s=0,o=.707106781):(s=Math.sqrt(g),i=A/s,o=S/s):T<.01?(i=.707106781,s=.707106781,o=0):(o=Math.sqrt(T),i=w/o,s=S/o),this.set(i,s,o,e),this}let b=Math.sqrt((m-v)*(m-v)+(d-M)*(d-M)+(u-h)*(u-h));return Math.abs(b)<.001&&(b=1),this.x=(m-v)/b,this.y=(d-M)/b,this.z=(u-h)/b,this.w=Math.acos((c+p+f-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class ep extends Di{constructor(t=1,e=1,i={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new pe(0,0,t,e),this.scissorTest=!1,this.viewport=new pe(0,0,t,e);const s={width:t,height:e,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Pn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const o=new qe(s,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);o.flipY=!1,o.generateMipmaps=i.generateMipmaps,o.internalFormat=i.internalFormat,this.textures=[];const r=i.count;for(let a=0;a<r;a++)this.textures[a]=o.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,i=1){if(this.width!==t||this.height!==e||this.depth!==i){this.width=t,this.height=e,this.depth=i;for(let s=0,o=this.textures.length;s<o;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=i;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let i=0,s=t.textures.length;i<s;i++)this.textures[i]=t.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new _d(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Pi extends ep{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}}class yd extends qe{constructor(t=null,e=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=Tn,this.minFilter=Tn,this.wrapR=wi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class np extends qe{constructor(t=null,e=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=Tn,this.minFilter=Tn,this.wrapR=wi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ii{constructor(t=0,e=0,i=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=s}static slerpFlat(t,e,i,s,o,r,a){let l=i[s+0],c=i[s+1],h=i[s+2],d=i[s+3];const u=o[r+0],p=o[r+1],v=o[r+2],M=o[r+3];if(a===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=d;return}if(a===1){t[e+0]=u,t[e+1]=p,t[e+2]=v,t[e+3]=M;return}if(d!==M||l!==u||c!==p||h!==v){let m=1-a;const f=l*u+c*p+h*v+d*M,b=f>=0?1:-1,x=1-f*f;if(x>Number.EPSILON){const T=Math.sqrt(x),A=Math.atan2(T,f*b);m=Math.sin(m*A)/T,a=Math.sin(a*A)/T}const g=a*b;if(l=l*m+u*g,c=c*m+p*g,h=h*m+v*g,d=d*m+M*g,m===1-a){const T=1/Math.sqrt(l*l+c*c+h*h+d*d);l*=T,c*=T,h*=T,d*=T}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=d}static multiplyQuaternionsFlat(t,e,i,s,o,r){const a=i[s],l=i[s+1],c=i[s+2],h=i[s+3],d=o[r],u=o[r+1],p=o[r+2],v=o[r+3];return t[e]=a*v+h*d+l*p-c*u,t[e+1]=l*v+h*u+c*d-a*p,t[e+2]=c*v+h*p+a*u-l*d,t[e+3]=h*v-a*d-l*u-c*p,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,s){return this._x=t,this._y=e,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const i=t._x,s=t._y,o=t._z,r=t._order,a=Math.cos,l=Math.sin,c=a(i/2),h=a(s/2),d=a(o/2),u=l(i/2),p=l(s/2),v=l(o/2);switch(r){case"XYZ":this._x=u*h*d+c*p*v,this._y=c*p*d-u*h*v,this._z=c*h*v+u*p*d,this._w=c*h*d-u*p*v;break;case"YXZ":this._x=u*h*d+c*p*v,this._y=c*p*d-u*h*v,this._z=c*h*v-u*p*d,this._w=c*h*d+u*p*v;break;case"ZXY":this._x=u*h*d-c*p*v,this._y=c*p*d+u*h*v,this._z=c*h*v+u*p*d,this._w=c*h*d-u*p*v;break;case"ZYX":this._x=u*h*d-c*p*v,this._y=c*p*d+u*h*v,this._z=c*h*v-u*p*d,this._w=c*h*d+u*p*v;break;case"YZX":this._x=u*h*d+c*p*v,this._y=c*p*d+u*h*v,this._z=c*h*v-u*p*d,this._w=c*h*d-u*p*v;break;case"XZY":this._x=u*h*d-c*p*v,this._y=c*p*d-u*h*v,this._z=c*h*v+u*p*d,this._w=c*h*d+u*p*v;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+r)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const i=e/2,s=Math.sin(i);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,i=e[0],s=e[4],o=e[8],r=e[1],a=e[5],l=e[9],c=e[2],h=e[6],d=e[10],u=i+a+d;if(u>0){const p=.5/Math.sqrt(u+1);this._w=.25/p,this._x=(h-l)*p,this._y=(o-c)*p,this._z=(r-s)*p}else if(i>a&&i>d){const p=2*Math.sqrt(1+i-a-d);this._w=(h-l)/p,this._x=.25*p,this._y=(s+r)/p,this._z=(o+c)/p}else if(a>d){const p=2*Math.sqrt(1+a-i-d);this._w=(o-c)/p,this._x=(s+r)/p,this._y=.25*p,this._z=(l+h)/p}else{const p=2*Math.sqrt(1+d-i-a);this._w=(r-s)/p,this._x=(o+c)/p,this._y=(l+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<Number.EPSILON?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(we(this.dot(t),-1,1)))}rotateTowards(t,e){const i=this.angleTo(t);if(i===0)return this;const s=Math.min(1,e/i);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const i=t._x,s=t._y,o=t._z,r=t._w,a=e._x,l=e._y,c=e._z,h=e._w;return this._x=i*h+r*a+s*c-o*l,this._y=s*h+r*l+o*a-i*c,this._z=o*h+r*c+i*l-s*a,this._w=r*h-i*a-s*l-o*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const i=this._x,s=this._y,o=this._z,r=this._w;let a=r*t._w+i*t._x+s*t._y+o*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=r,this._x=i,this._y=s,this._z=o,this;const l=1-a*a;if(l<=Number.EPSILON){const p=1-e;return this._w=p*r+e*this._w,this._x=p*i+e*this._x,this._y=p*s+e*this._y,this._z=p*o+e*this._z,this.normalize(),this}const c=Math.sqrt(l),h=Math.atan2(c,a),d=Math.sin((1-e)*h)/c,u=Math.sin(e*h)/c;return this._w=r*d+this._w*u,this._x=i*d+this._x*u,this._y=s*d+this._y*u,this._z=o*d+this._z*u,this._onChangeCallback(),this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),o=Math.sqrt(i);return this.set(s*Math.sin(t),s*Math.cos(t),o*Math.sin(e),o*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class I{constructor(t=0,e=0,i=0){I.prototype.isVector3=!0,this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Ec.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Ec.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,i=this.y,s=this.z,o=t.elements;return this.x=o[0]*e+o[3]*i+o[6]*s,this.y=o[1]*e+o[4]*i+o[7]*s,this.z=o[2]*e+o[5]*i+o[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,i=this.y,s=this.z,o=t.elements,r=1/(o[3]*e+o[7]*i+o[11]*s+o[15]);return this.x=(o[0]*e+o[4]*i+o[8]*s+o[12])*r,this.y=(o[1]*e+o[5]*i+o[9]*s+o[13])*r,this.z=(o[2]*e+o[6]*i+o[10]*s+o[14])*r,this}applyQuaternion(t){const e=this.x,i=this.y,s=this.z,o=t.x,r=t.y,a=t.z,l=t.w,c=2*(r*s-a*i),h=2*(a*e-o*s),d=2*(o*i-r*e);return this.x=e+l*c+r*d-a*h,this.y=i+l*h+a*c-o*d,this.z=s+l*d+o*h-r*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,i=this.y,s=this.z,o=t.elements;return this.x=o[0]*e+o[4]*i+o[8]*s,this.y=o[1]*e+o[5]*i+o[9]*s,this.z=o[2]*e+o[6]*i+o[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const i=t.x,s=t.y,o=t.z,r=e.x,a=e.y,l=e.z;return this.x=s*l-o*a,this.y=o*r-i*l,this.z=i*a-s*r,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return zr.copy(this).projectOnVector(t),this.sub(zr)}reflect(t){return this.sub(zr.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(we(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y,s=this.z-t.z;return e*e+i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){const s=Math.sin(e)*t;return this.x=s*Math.sin(i),this.y=Math.cos(e)*t,this.z=s*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,i=Math.sqrt(1-e*e);return this.x=i*Math.cos(t),this.y=e,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const zr=new I,Ec=new Ii;class uo{constructor(t=new I(1/0,1/0,1/0),e=new I(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(gn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(gn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const i=gn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const i=t.geometry;if(i!==void 0){const o=i.getAttribute("position");if(e===!0&&o!==void 0&&t.isInstancedMesh!==!0)for(let r=0,a=o.count;r<a;r++)t.isMesh===!0?t.getVertexPosition(r,gn):gn.fromBufferAttribute(o,r),gn.applyMatrix4(t.matrixWorld),this.expandByPoint(gn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),wo.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),wo.copy(i.boundingBox)),wo.applyMatrix4(t.matrixWorld),this.union(wo)}const s=t.children;for(let o=0,r=s.length;o<r;o++)this.expandByObject(s[o],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,gn),gn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Bs),Ao.subVectors(this.max,Bs),Hi.subVectors(t.a,Bs),Gi.subVectors(t.b,Bs),Vi.subVectors(t.c,Bs),Kn.subVectors(Gi,Hi),Zn.subVectors(Vi,Gi),pi.subVectors(Hi,Vi);let e=[0,-Kn.z,Kn.y,0,-Zn.z,Zn.y,0,-pi.z,pi.y,Kn.z,0,-Kn.x,Zn.z,0,-Zn.x,pi.z,0,-pi.x,-Kn.y,Kn.x,0,-Zn.y,Zn.x,0,-pi.y,pi.x,0];return!Hr(e,Hi,Gi,Vi,Ao)||(e=[1,0,0,0,1,0,0,0,1],!Hr(e,Hi,Gi,Vi,Ao))?!1:(Co.crossVectors(Kn,Zn),e=[Co.x,Co.y,Co.z],Hr(e,Hi,Gi,Vi,Ao))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,gn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(gn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Nn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Nn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Nn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Nn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Nn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Nn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Nn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Nn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Nn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const Nn=[new I,new I,new I,new I,new I,new I,new I,new I],gn=new I,wo=new uo,Hi=new I,Gi=new I,Vi=new I,Kn=new I,Zn=new I,pi=new I,Bs=new I,Ao=new I,Co=new I,mi=new I;function Hr(n,t,e,i,s){for(let o=0,r=n.length-3;o<=r;o+=3){mi.fromArray(n,o);const a=s.x*Math.abs(mi.x)+s.y*Math.abs(mi.y)+s.z*Math.abs(mi.z),l=t.dot(mi),c=e.dot(mi),h=i.dot(mi);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}const ip=new uo,Os=new I,Gr=new I;class Ir{constructor(t=new I,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const i=this.center;e!==void 0?i.copy(e):ip.setFromPoints(t).getCenter(i);let s=0;for(let o=0,r=t.length;o<r;o++)s=Math.max(s,i.distanceToSquared(t[o]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Os.subVectors(t,this.center);const e=Os.lengthSq();if(e>this.radius*this.radius){const i=Math.sqrt(e),s=(i-this.radius)*.5;this.center.addScaledVector(Os,s/i),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Gr.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Os.copy(t.center).add(Gr)),this.expandByPoint(Os.copy(t.center).sub(Gr))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Un=new I,Vr=new I,Ro=new I,Jn=new I,Wr=new I,Po=new I,$r=new I;class Lr{constructor(t=new I,e=new I(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Un)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Un.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Un.copy(this.origin).addScaledVector(this.direction,e),Un.distanceToSquared(t))}distanceSqToSegment(t,e,i,s){Vr.copy(t).add(e).multiplyScalar(.5),Ro.copy(e).sub(t).normalize(),Jn.copy(this.origin).sub(Vr);const o=t.distanceTo(e)*.5,r=-this.direction.dot(Ro),a=Jn.dot(this.direction),l=-Jn.dot(Ro),c=Jn.lengthSq(),h=Math.abs(1-r*r);let d,u,p,v;if(h>0)if(d=r*l-a,u=r*a-l,v=o*h,d>=0)if(u>=-v)if(u<=v){const M=1/h;d*=M,u*=M,p=d*(d+r*u+2*a)+u*(r*d+u+2*l)+c}else u=o,d=Math.max(0,-(r*u+a)),p=-d*d+u*(u+2*l)+c;else u=-o,d=Math.max(0,-(r*u+a)),p=-d*d+u*(u+2*l)+c;else u<=-v?(d=Math.max(0,-(-r*o+a)),u=d>0?-o:Math.min(Math.max(-o,-l),o),p=-d*d+u*(u+2*l)+c):u<=v?(d=0,u=Math.min(Math.max(-o,-l),o),p=u*(u+2*l)+c):(d=Math.max(0,-(r*o+a)),u=d>0?o:Math.min(Math.max(-o,-l),o),p=-d*d+u*(u+2*l)+c);else u=r>0?-o:o,d=Math.max(0,-(r*u+a)),p=-d*d+u*(u+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(Vr).addScaledVector(Ro,u),p}intersectSphere(t,e){Un.subVectors(t.center,this.origin);const i=Un.dot(this.direction),s=Un.dot(Un)-i*i,o=t.radius*t.radius;if(s>o)return null;const r=Math.sqrt(o-s),a=i-r,l=i+r;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){const i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,s,o,r,a,l;const c=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,u=this.origin;return c>=0?(i=(t.min.x-u.x)*c,s=(t.max.x-u.x)*c):(i=(t.max.x-u.x)*c,s=(t.min.x-u.x)*c),h>=0?(o=(t.min.y-u.y)*h,r=(t.max.y-u.y)*h):(o=(t.max.y-u.y)*h,r=(t.min.y-u.y)*h),i>r||o>s||((o>i||isNaN(i))&&(i=o),(r<s||isNaN(s))&&(s=r),d>=0?(a=(t.min.z-u.z)*d,l=(t.max.z-u.z)*d):(a=(t.max.z-u.z)*d,l=(t.min.z-u.z)*d),i>l||a>s)||((a>i||i!==i)&&(i=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,e)}intersectsBox(t){return this.intersectBox(t,Un)!==null}intersectTriangle(t,e,i,s,o){Wr.subVectors(e,t),Po.subVectors(i,t),$r.crossVectors(Wr,Po);let r=this.direction.dot($r),a;if(r>0){if(s)return null;a=1}else if(r<0)a=-1,r=-r;else return null;Jn.subVectors(this.origin,t);const l=a*this.direction.dot(Po.crossVectors(Jn,Po));if(l<0)return null;const c=a*this.direction.dot(Wr.cross(Jn));if(c<0||l+c>r)return null;const h=-a*Jn.dot($r);return h<0?null:this.at(h/r,o)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class me{constructor(t,e,i,s,o,r,a,l,c,h,d,u,p,v,M,m){me.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,s,o,r,a,l,c,h,d,u,p,v,M,m)}set(t,e,i,s,o,r,a,l,c,h,d,u,p,v,M,m){const f=this.elements;return f[0]=t,f[4]=e,f[8]=i,f[12]=s,f[1]=o,f[5]=r,f[9]=a,f[13]=l,f[2]=c,f[6]=h,f[10]=d,f[14]=u,f[3]=p,f[7]=v,f[11]=M,f[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new me().fromArray(this.elements)}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){const e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,i=t.elements,s=1/Wi.setFromMatrixColumn(t,0).length(),o=1/Wi.setFromMatrixColumn(t,1).length(),r=1/Wi.setFromMatrixColumn(t,2).length();return e[0]=i[0]*s,e[1]=i[1]*s,e[2]=i[2]*s,e[3]=0,e[4]=i[4]*o,e[5]=i[5]*o,e[6]=i[6]*o,e[7]=0,e[8]=i[8]*r,e[9]=i[9]*r,e[10]=i[10]*r,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,i=t.x,s=t.y,o=t.z,r=Math.cos(i),a=Math.sin(i),l=Math.cos(s),c=Math.sin(s),h=Math.cos(o),d=Math.sin(o);if(t.order==="XYZ"){const u=r*h,p=r*d,v=a*h,M=a*d;e[0]=l*h,e[4]=-l*d,e[8]=c,e[1]=p+v*c,e[5]=u-M*c,e[9]=-a*l,e[2]=M-u*c,e[6]=v+p*c,e[10]=r*l}else if(t.order==="YXZ"){const u=l*h,p=l*d,v=c*h,M=c*d;e[0]=u+M*a,e[4]=v*a-p,e[8]=r*c,e[1]=r*d,e[5]=r*h,e[9]=-a,e[2]=p*a-v,e[6]=M+u*a,e[10]=r*l}else if(t.order==="ZXY"){const u=l*h,p=l*d,v=c*h,M=c*d;e[0]=u-M*a,e[4]=-r*d,e[8]=v+p*a,e[1]=p+v*a,e[5]=r*h,e[9]=M-u*a,e[2]=-r*c,e[6]=a,e[10]=r*l}else if(t.order==="ZYX"){const u=r*h,p=r*d,v=a*h,M=a*d;e[0]=l*h,e[4]=v*c-p,e[8]=u*c+M,e[1]=l*d,e[5]=M*c+u,e[9]=p*c-v,e[2]=-c,e[6]=a*l,e[10]=r*l}else if(t.order==="YZX"){const u=r*l,p=r*c,v=a*l,M=a*c;e[0]=l*h,e[4]=M-u*d,e[8]=v*d+p,e[1]=d,e[5]=r*h,e[9]=-a*h,e[2]=-c*h,e[6]=p*d+v,e[10]=u-M*d}else if(t.order==="XZY"){const u=r*l,p=r*c,v=a*l,M=a*c;e[0]=l*h,e[4]=-d,e[8]=c*h,e[1]=u*d+M,e[5]=r*h,e[9]=p*d-v,e[2]=v*d-p,e[6]=a*h,e[10]=M*d+u}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(sp,t,op)}lookAt(t,e,i){const s=this.elements;return tn.subVectors(t,e),tn.lengthSq()===0&&(tn.z=1),tn.normalize(),Qn.crossVectors(i,tn),Qn.lengthSq()===0&&(Math.abs(i.z)===1?tn.x+=1e-4:tn.z+=1e-4,tn.normalize(),Qn.crossVectors(i,tn)),Qn.normalize(),Io.crossVectors(tn,Qn),s[0]=Qn.x,s[4]=Io.x,s[8]=tn.x,s[1]=Qn.y,s[5]=Io.y,s[9]=tn.y,s[2]=Qn.z,s[6]=Io.z,s[10]=tn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,s=e.elements,o=this.elements,r=i[0],a=i[4],l=i[8],c=i[12],h=i[1],d=i[5],u=i[9],p=i[13],v=i[2],M=i[6],m=i[10],f=i[14],b=i[3],x=i[7],g=i[11],T=i[15],A=s[0],w=s[4],S=s[8],_=s[12],y=s[1],R=s[5],L=s[9],D=s[13],U=s[2],H=s[6],V=s[10],z=s[14],O=s[3],X=s[7],J=s[11],q=s[15];return o[0]=r*A+a*y+l*U+c*O,o[4]=r*w+a*R+l*H+c*X,o[8]=r*S+a*L+l*V+c*J,o[12]=r*_+a*D+l*z+c*q,o[1]=h*A+d*y+u*U+p*O,o[5]=h*w+d*R+u*H+p*X,o[9]=h*S+d*L+u*V+p*J,o[13]=h*_+d*D+u*z+p*q,o[2]=v*A+M*y+m*U+f*O,o[6]=v*w+M*R+m*H+f*X,o[10]=v*S+M*L+m*V+f*J,o[14]=v*_+M*D+m*z+f*q,o[3]=b*A+x*y+g*U+T*O,o[7]=b*w+x*R+g*H+T*X,o[11]=b*S+x*L+g*V+T*J,o[15]=b*_+x*D+g*z+T*q,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[4],s=t[8],o=t[12],r=t[1],a=t[5],l=t[9],c=t[13],h=t[2],d=t[6],u=t[10],p=t[14],v=t[3],M=t[7],m=t[11],f=t[15];return v*(+o*l*d-s*c*d-o*a*u+i*c*u+s*a*p-i*l*p)+M*(+e*l*p-e*c*u+o*r*u-s*r*p+s*c*h-o*l*h)+m*(+e*c*d-e*a*p-o*r*d+i*r*p+o*a*h-i*c*h)+f*(-s*a*h-e*l*d+e*a*u+s*r*d-i*r*u+i*l*h)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=i),this}invert(){const t=this.elements,e=t[0],i=t[1],s=t[2],o=t[3],r=t[4],a=t[5],l=t[6],c=t[7],h=t[8],d=t[9],u=t[10],p=t[11],v=t[12],M=t[13],m=t[14],f=t[15],b=d*m*c-M*u*c+M*l*p-a*m*p-d*l*f+a*u*f,x=v*u*c-h*m*c-v*l*p+r*m*p+h*l*f-r*u*f,g=h*M*c-v*d*c+v*a*p-r*M*p-h*a*f+r*d*f,T=v*d*l-h*M*l-v*a*u+r*M*u+h*a*m-r*d*m,A=e*b+i*x+s*g+o*T;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const w=1/A;return t[0]=b*w,t[1]=(M*u*o-d*m*o-M*s*p+i*m*p+d*s*f-i*u*f)*w,t[2]=(a*m*o-M*l*o+M*s*c-i*m*c-a*s*f+i*l*f)*w,t[3]=(d*l*o-a*u*o-d*s*c+i*u*c+a*s*p-i*l*p)*w,t[4]=x*w,t[5]=(h*m*o-v*u*o+v*s*p-e*m*p-h*s*f+e*u*f)*w,t[6]=(v*l*o-r*m*o-v*s*c+e*m*c+r*s*f-e*l*f)*w,t[7]=(r*u*o-h*l*o+h*s*c-e*u*c-r*s*p+e*l*p)*w,t[8]=g*w,t[9]=(v*d*o-h*M*o-v*i*p+e*M*p+h*i*f-e*d*f)*w,t[10]=(r*M*o-v*a*o+v*i*c-e*M*c-r*i*f+e*a*f)*w,t[11]=(h*a*o-r*d*o-h*i*c+e*d*c+r*i*p-e*a*p)*w,t[12]=T*w,t[13]=(h*M*s-v*d*s+v*i*u-e*M*u-h*i*m+e*d*m)*w,t[14]=(v*a*s-r*M*s-v*i*l+e*M*l+r*i*m-e*a*m)*w,t[15]=(r*d*s-h*a*s+h*i*l-e*d*l-r*i*u+e*a*u)*w,this}scale(t){const e=this.elements,i=t.x,s=t.y,o=t.z;return e[0]*=i,e[4]*=s,e[8]*=o,e[1]*=i,e[5]*=s,e[9]*=o,e[2]*=i,e[6]*=s,e[10]*=o,e[3]*=i,e[7]*=s,e[11]*=o,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,s))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const i=Math.cos(e),s=Math.sin(e),o=1-i,r=t.x,a=t.y,l=t.z,c=o*r,h=o*a;return this.set(c*r+i,c*a-s*l,c*l+s*a,0,c*a+s*l,h*a+i,h*l-s*r,0,c*l-s*a,h*l+s*r,o*l*l+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,s,o,r){return this.set(1,i,o,0,t,1,r,0,e,s,1,0,0,0,0,1),this}compose(t,e,i){const s=this.elements,o=e._x,r=e._y,a=e._z,l=e._w,c=o+o,h=r+r,d=a+a,u=o*c,p=o*h,v=o*d,M=r*h,m=r*d,f=a*d,b=l*c,x=l*h,g=l*d,T=i.x,A=i.y,w=i.z;return s[0]=(1-(M+f))*T,s[1]=(p+g)*T,s[2]=(v-x)*T,s[3]=0,s[4]=(p-g)*A,s[5]=(1-(u+f))*A,s[6]=(m+b)*A,s[7]=0,s[8]=(v+x)*w,s[9]=(m-b)*w,s[10]=(1-(u+M))*w,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,i){const s=this.elements;let o=Wi.set(s[0],s[1],s[2]).length();const r=Wi.set(s[4],s[5],s[6]).length(),a=Wi.set(s[8],s[9],s[10]).length();this.determinant()<0&&(o=-o),t.x=s[12],t.y=s[13],t.z=s[14],vn.copy(this);const c=1/o,h=1/r,d=1/a;return vn.elements[0]*=c,vn.elements[1]*=c,vn.elements[2]*=c,vn.elements[4]*=h,vn.elements[5]*=h,vn.elements[6]*=h,vn.elements[8]*=d,vn.elements[9]*=d,vn.elements[10]*=d,e.setFromRotationMatrix(vn),i.x=o,i.y=r,i.z=a,this}makePerspective(t,e,i,s,o,r,a=Hn){const l=this.elements,c=2*o/(e-t),h=2*o/(i-s),d=(e+t)/(e-t),u=(i+s)/(i-s);let p,v;if(a===Hn)p=-(r+o)/(r-o),v=-2*r*o/(r-o);else if(a===pr)p=-r/(r-o),v=-r*o/(r-o);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=h,l[9]=u,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=v,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,i,s,o,r,a=Hn){const l=this.elements,c=1/(e-t),h=1/(i-s),d=1/(r-o),u=(e+t)*c,p=(i+s)*h;let v,M;if(a===Hn)v=(r+o)*d,M=-2*d;else if(a===pr)v=o*d,M=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-u,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=M,l[14]=-v,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,i=t.elements;for(let s=0;s<16;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}}const Wi=new I,vn=new me,sp=new I(0,0,0),op=new I(1,1,1),Qn=new I,Io=new I,tn=new I,Tc=new me,wc=new Ii;class In{constructor(t=0,e=0,i=0,s=In.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,s=this._order){return this._x=t,this._y=e,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){const s=t.elements,o=s[0],r=s[4],a=s[8],l=s[1],c=s[5],h=s[9],d=s[2],u=s[6],p=s[10];switch(e){case"XYZ":this._y=Math.asin(we(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-r,o)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-we(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,o),this._z=0);break;case"ZXY":this._x=Math.asin(we(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-d,p),this._z=Math.atan2(-r,c)):(this._y=0,this._z=Math.atan2(l,o));break;case"ZYX":this._y=Math.asin(-we(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(u,p),this._z=Math.atan2(l,o)):(this._x=0,this._z=Math.atan2(-r,c));break;case"YZX":this._z=Math.asin(we(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-d,o)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-we(r,-1,1)),Math.abs(r)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(a,o)):(this._x=Math.atan2(-h,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return Tc.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Tc,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return wc.setFromEuler(this),this.setFromQuaternion(wc,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}In.DEFAULT_ORDER="XYZ";class Vl{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let rp=0;const Ac=new I,$i=new Ii,Bn=new me,Lo=new I,ks=new I,ap=new I,lp=new Ii,Cc=new I(1,0,0),Rc=new I(0,1,0),Pc=new I(0,0,1),Ic={type:"added"},cp={type:"removed"},Xi={type:"childadded",child:null},Xr={type:"childremoved",child:null};class Ie extends Di{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:rp++}),this.uuid=Gn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ie.DEFAULT_UP.clone();const t=new I,e=new In,i=new Ii,s=new I(1,1,1);function o(){i.setFromEuler(e,!1)}function r(){e.setFromQuaternion(i,void 0,!1)}e._onChange(o),i._onChange(r),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new me},normalMatrix:{value:new Kt}}),this.matrix=new me,this.matrixWorld=new me,this.matrixAutoUpdate=Ie.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ie.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Vl,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return $i.setFromAxisAngle(t,e),this.quaternion.multiply($i),this}rotateOnWorldAxis(t,e){return $i.setFromAxisAngle(t,e),this.quaternion.premultiply($i),this}rotateX(t){return this.rotateOnAxis(Cc,t)}rotateY(t){return this.rotateOnAxis(Rc,t)}rotateZ(t){return this.rotateOnAxis(Pc,t)}translateOnAxis(t,e){return Ac.copy(t).applyQuaternion(this.quaternion),this.position.add(Ac.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Cc,t)}translateY(t){return this.translateOnAxis(Rc,t)}translateZ(t){return this.translateOnAxis(Pc,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Bn.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?Lo.copy(t):Lo.set(t,e,i);const s=this.parent;this.updateWorldMatrix(!0,!1),ks.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Bn.lookAt(ks,Lo,this.up):Bn.lookAt(Lo,ks,this.up),this.quaternion.setFromRotationMatrix(Bn),s&&(Bn.extractRotation(s.matrixWorld),$i.setFromRotationMatrix(Bn),this.quaternion.premultiply($i.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Ic),Xi.child=t,this.dispatchEvent(Xi),Xi.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(cp),Xr.child=t,this.dispatchEvent(Xr),Xr.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Bn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Bn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Bn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Ic),Xi.child=t,this.dispatchEvent(Xi),Xi.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,s=this.children.length;i<s;i++){const r=this.children[i].getObjectByProperty(t,e);if(r!==void 0)return r}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);const s=this.children;for(let o=0,r=s.length;o<r;o++)s[o].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ks,t,ap),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ks,lp,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].updateMatrixWorld(t)}updateWorldMatrix(t,e){const i=this.parent;if(t===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const s=this.children;for(let o=0,r=s.length;o<r;o++)s[o].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function o(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=o(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const d=l[c];o(t.shapes,d)}else o(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(o(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(o(t.materials,this.material[l]));s.material=a}else s.material=o(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];s.animations.push(o(t.animations,l))}}if(e){const a=r(t.geometries),l=r(t.materials),c=r(t.textures),h=r(t.images),d=r(t.shapes),u=r(t.skeletons),p=r(t.animations),v=r(t.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),d.length>0&&(i.shapes=d),u.length>0&&(i.skeletons=u),p.length>0&&(i.animations=p),v.length>0&&(i.nodes=v)}return i.object=s,i;function r(a){const l=[];for(const c in a){const h=a[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){const s=t.children[i];this.add(s.clone())}return this}}Ie.DEFAULT_UP=new I(0,1,0);Ie.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ie.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const _n=new I,On=new I,Yr=new I,kn=new I,Yi=new I,qi=new I,Lc=new I,qr=new I,jr=new I,Kr=new I,Zr=new pe,Jr=new pe,Qr=new pe;class hn{constructor(t=new I,e=new I,i=new I){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,s){s.subVectors(i,e),_n.subVectors(t,e),s.cross(_n);const o=s.lengthSq();return o>0?s.multiplyScalar(1/Math.sqrt(o)):s.set(0,0,0)}static getBarycoord(t,e,i,s,o){_n.subVectors(s,e),On.subVectors(i,e),Yr.subVectors(t,e);const r=_n.dot(_n),a=_n.dot(On),l=_n.dot(Yr),c=On.dot(On),h=On.dot(Yr),d=r*c-a*a;if(d===0)return o.set(0,0,0),null;const u=1/d,p=(c*l-a*h)*u,v=(r*h-a*l)*u;return o.set(1-p-v,v,p)}static containsPoint(t,e,i,s){return this.getBarycoord(t,e,i,s,kn)===null?!1:kn.x>=0&&kn.y>=0&&kn.x+kn.y<=1}static getInterpolation(t,e,i,s,o,r,a,l){return this.getBarycoord(t,e,i,s,kn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(o,kn.x),l.addScaledVector(r,kn.y),l.addScaledVector(a,kn.z),l)}static getInterpolatedAttribute(t,e,i,s,o,r){return Zr.setScalar(0),Jr.setScalar(0),Qr.setScalar(0),Zr.fromBufferAttribute(t,e),Jr.fromBufferAttribute(t,i),Qr.fromBufferAttribute(t,s),r.setScalar(0),r.addScaledVector(Zr,o.x),r.addScaledVector(Jr,o.y),r.addScaledVector(Qr,o.z),r}static isFrontFacing(t,e,i,s){return _n.subVectors(i,e),On.subVectors(t,e),_n.cross(On).dot(s)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,s){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,i,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return _n.subVectors(this.c,this.b),On.subVectors(this.a,this.b),_n.cross(On).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return hn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return hn.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,i,s,o){return hn.getInterpolation(t,this.a,this.b,this.c,e,i,s,o)}containsPoint(t){return hn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return hn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const i=this.a,s=this.b,o=this.c;let r,a;Yi.subVectors(s,i),qi.subVectors(o,i),qr.subVectors(t,i);const l=Yi.dot(qr),c=qi.dot(qr);if(l<=0&&c<=0)return e.copy(i);jr.subVectors(t,s);const h=Yi.dot(jr),d=qi.dot(jr);if(h>=0&&d<=h)return e.copy(s);const u=l*d-h*c;if(u<=0&&l>=0&&h<=0)return r=l/(l-h),e.copy(i).addScaledVector(Yi,r);Kr.subVectors(t,o);const p=Yi.dot(Kr),v=qi.dot(Kr);if(v>=0&&p<=v)return e.copy(o);const M=p*c-l*v;if(M<=0&&c>=0&&v<=0)return a=c/(c-v),e.copy(i).addScaledVector(qi,a);const m=h*v-p*d;if(m<=0&&d-h>=0&&p-v>=0)return Lc.subVectors(o,s),a=(d-h)/(d-h+(p-v)),e.copy(s).addScaledVector(Lc,a);const f=1/(m+M+u);return r=M*f,a=u*f,e.copy(i).addScaledVector(Yi,r).addScaledVector(qi,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const xd={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ti={h:0,s:0,l:0},Do={h:0,s:0,l:0};function ta(n,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?n+(t-n)*6*e:e<1/2?t:e<2/3?n+(t-n)*6*(2/3-e):n}class Gt{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=fe){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ne.toWorkingColorSpace(this,e),this}setRGB(t,e,i,s=ne.workingColorSpace){return this.r=t,this.g=e,this.b=i,ne.toWorkingColorSpace(this,s),this}setHSL(t,e,i,s=ne.workingColorSpace){if(t=Gl(t,1),e=we(e,0,1),i=we(i,0,1),e===0)this.r=this.g=this.b=i;else{const o=i<=.5?i*(1+e):i+e-i*e,r=2*i-o;this.r=ta(r,o,t+1/3),this.g=ta(r,o,t),this.b=ta(r,o,t-1/3)}return ne.toWorkingColorSpace(this,s),this}setStyle(t,e=fe){function i(o){o!==void 0&&parseFloat(o)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let o;const r=s[1],a=s[2];switch(r){case"rgb":case"rgba":if(o=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(o[4]),this.setRGB(Math.min(255,parseInt(o[1],10))/255,Math.min(255,parseInt(o[2],10))/255,Math.min(255,parseInt(o[3],10))/255,e);if(o=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(o[4]),this.setRGB(Math.min(100,parseInt(o[1],10))/100,Math.min(100,parseInt(o[2],10))/100,Math.min(100,parseInt(o[3],10))/100,e);break;case"hsl":case"hsla":if(o=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(o[4]),this.setHSL(parseFloat(o[1])/360,parseFloat(o[2])/100,parseFloat(o[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const o=s[1],r=o.length;if(r===3)return this.setRGB(parseInt(o.charAt(0),16)/15,parseInt(o.charAt(1),16)/15,parseInt(o.charAt(2),16)/15,e);if(r===6)return this.setHex(parseInt(o,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=fe){const i=xd[t.toLowerCase()];return i!==void 0?this.setHex(i,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Vn(t.r),this.g=Vn(t.g),this.b=Vn(t.b),this}copyLinearToSRGB(t){return this.r=ds(t.r),this.g=ds(t.g),this.b=ds(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=fe){return ne.fromWorkingColorSpace(Ge.copy(this),t),Math.round(we(Ge.r*255,0,255))*65536+Math.round(we(Ge.g*255,0,255))*256+Math.round(we(Ge.b*255,0,255))}getHexString(t=fe){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=ne.workingColorSpace){ne.fromWorkingColorSpace(Ge.copy(this),e);const i=Ge.r,s=Ge.g,o=Ge.b,r=Math.max(i,s,o),a=Math.min(i,s,o);let l,c;const h=(a+r)/2;if(a===r)l=0,c=0;else{const d=r-a;switch(c=h<=.5?d/(r+a):d/(2-r-a),r){case i:l=(s-o)/d+(s<o?6:0);break;case s:l=(o-i)/d+2;break;case o:l=(i-s)/d+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=ne.workingColorSpace){return ne.fromWorkingColorSpace(Ge.copy(this),e),t.r=Ge.r,t.g=Ge.g,t.b=Ge.b,t}getStyle(t=fe){ne.fromWorkingColorSpace(Ge.copy(this),t);const e=Ge.r,i=Ge.g,s=Ge.b;return t!==fe?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(t,e,i){return this.getHSL(ti),this.setHSL(ti.h+t,ti.s+e,ti.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(ti),t.getHSL(Do);const i=no(ti.h,Do.h,e),s=no(ti.s,Do.s,e),o=no(ti.l,Do.l,e);return this.setHSL(i,s,o),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,i=this.g,s=this.b,o=t.elements;return this.r=o[0]*e+o[3]*i+o[6]*s,this.g=o[1]*e+o[4]*i+o[7]*s,this.b=o[2]*e+o[5]*i+o[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ge=new Gt;Gt.NAMES=xd;let hp=0;class Ni extends Di{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:hp++}),this.uuid=Gn(),this.name="",this.blending=cs,this.side=ci,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Fa,this.blendDst=za,this.blendEquation=bi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Gt(0,0,0),this.blendAlpha=0,this.depthFunc=_s,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=mc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Fi,this.stencilZFail=Fi,this.stencilZPass=Fi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const i=t[e];if(i===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[e]=i}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==cs&&(i.blending=this.blending),this.side!==ci&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Fa&&(i.blendSrc=this.blendSrc),this.blendDst!==za&&(i.blendDst=this.blendDst),this.blendEquation!==bi&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==_s&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==mc&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Fi&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Fi&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Fi&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(o){const r=[];for(const a in o){const l=o[a];delete l.metadata,r.push(l)}return r}if(e){const o=s(t.textures),r=s(t.images);o.length>0&&(i.textures=o),r.length>0&&(i.images=r)}return i}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let i=null;if(e!==null){const s=e.length;i=new Array(s);for(let o=0;o!==s;++o)i[o]=e[o].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class xe extends Ni{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new Gt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new In,this.combine=nd,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Ee=new I,No=new Et;class dn{constructor(t,e,i=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=Sl,this.updateRanges=[],this.gpuType=zn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let s=0,o=this.itemSize;s<o;s++)this.array[t+s]=e.array[i+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)No.fromBufferAttribute(this,e),No.applyMatrix3(t),this.setXY(e,No.x,No.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)Ee.fromBufferAttribute(this,e),Ee.applyMatrix3(t),this.setXYZ(e,Ee.x,Ee.y,Ee.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)Ee.fromBufferAttribute(this,e),Ee.applyMatrix4(t),this.setXYZ(e,Ee.x,Ee.y,Ee.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)Ee.fromBufferAttribute(this,e),Ee.applyNormalMatrix(t),this.setXYZ(e,Ee.x,Ee.y,Ee.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)Ee.fromBufferAttribute(this,e),Ee.transformDirection(t),this.setXYZ(e,Ee.x,Ee.y,Ee.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=xn(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=ce(i,this.array)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=xn(e,this.array)),e}setX(t,e){return this.normalized&&(e=ce(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=xn(e,this.array)),e}setY(t,e){return this.normalized&&(e=ce(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=xn(e,this.array)),e}setZ(t,e){return this.normalized&&(e=ce(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=xn(e,this.array)),e}setW(t,e){return this.normalized&&(e=ce(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=ce(e,this.array),i=ce(i,this.array)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,s){return t*=this.itemSize,this.normalized&&(e=ce(e,this.array),i=ce(i,this.array),s=ce(s,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this}setXYZW(t,e,i,s,o){return t*=this.itemSize,this.normalized&&(e=ce(e,this.array),i=ce(i,this.array),s=ce(s,this.array),o=ce(o,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this.array[t+3]=o,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Sl&&(t.usage=this.usage),t}}class Md extends dn{constructor(t,e,i){super(new Uint16Array(t),e,i)}}class bd extends dn{constructor(t,e,i){super(new Uint32Array(t),e,i)}}class he extends dn{constructor(t,e,i){super(new Float32Array(t),e,i)}}let dp=0;const ln=new me,ea=new Ie,ji=new I,en=new uo,Fs=new uo,Ue=new I;class ze extends Di{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:dp++}),this.uuid=Gn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(vd(t)?bd:Md)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const o=new Kt().getNormalMatrix(t);i.applyNormalMatrix(o),i.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return ln.makeRotationFromQuaternion(t),this.applyMatrix4(ln),this}rotateX(t){return ln.makeRotationX(t),this.applyMatrix4(ln),this}rotateY(t){return ln.makeRotationY(t),this.applyMatrix4(ln),this}rotateZ(t){return ln.makeRotationZ(t),this.applyMatrix4(ln),this}translate(t,e,i){return ln.makeTranslation(t,e,i),this.applyMatrix4(ln),this}scale(t,e,i){return ln.makeScale(t,e,i),this.applyMatrix4(ln),this}lookAt(t){return ea.lookAt(t),ea.updateMatrix(),this.applyMatrix4(ea.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ji).negate(),this.translate(ji.x,ji.y,ji.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const i=[];for(let s=0,o=t.length;s<o;s++){const r=t[s];i.push(r.x,r.y,r.z||0)}this.setAttribute("position",new he(i,3))}else{for(let i=0,s=e.count;i<s;i++){const o=t[i];e.setXYZ(i,o.x,o.y,o.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new uo);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new I(-1/0,-1/0,-1/0),new I(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,s=e.length;i<s;i++){const o=e[i];en.setFromBufferAttribute(o),this.morphTargetsRelative?(Ue.addVectors(this.boundingBox.min,en.min),this.boundingBox.expandByPoint(Ue),Ue.addVectors(this.boundingBox.max,en.max),this.boundingBox.expandByPoint(Ue)):(this.boundingBox.expandByPoint(en.min),this.boundingBox.expandByPoint(en.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ir);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new I,1/0);return}if(t){const i=this.boundingSphere.center;if(en.setFromBufferAttribute(t),e)for(let o=0,r=e.length;o<r;o++){const a=e[o];Fs.setFromBufferAttribute(a),this.morphTargetsRelative?(Ue.addVectors(en.min,Fs.min),en.expandByPoint(Ue),Ue.addVectors(en.max,Fs.max),en.expandByPoint(Ue)):(en.expandByPoint(Fs.min),en.expandByPoint(Fs.max))}en.getCenter(i);let s=0;for(let o=0,r=t.count;o<r;o++)Ue.fromBufferAttribute(t,o),s=Math.max(s,i.distanceToSquared(Ue));if(e)for(let o=0,r=e.length;o<r;o++){const a=e[o],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)Ue.fromBufferAttribute(a,c),l&&(ji.fromBufferAttribute(t,c),Ue.add(ji)),s=Math.max(s,i.distanceToSquared(Ue))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.position,s=e.normal,o=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new dn(new Float32Array(4*i.count),4));const r=this.getAttribute("tangent"),a=[],l=[];for(let S=0;S<i.count;S++)a[S]=new I,l[S]=new I;const c=new I,h=new I,d=new I,u=new Et,p=new Et,v=new Et,M=new I,m=new I;function f(S,_,y){c.fromBufferAttribute(i,S),h.fromBufferAttribute(i,_),d.fromBufferAttribute(i,y),u.fromBufferAttribute(o,S),p.fromBufferAttribute(o,_),v.fromBufferAttribute(o,y),h.sub(c),d.sub(c),p.sub(u),v.sub(u);const R=1/(p.x*v.y-v.x*p.y);isFinite(R)&&(M.copy(h).multiplyScalar(v.y).addScaledVector(d,-p.y).multiplyScalar(R),m.copy(d).multiplyScalar(p.x).addScaledVector(h,-v.x).multiplyScalar(R),a[S].add(M),a[_].add(M),a[y].add(M),l[S].add(m),l[_].add(m),l[y].add(m))}let b=this.groups;b.length===0&&(b=[{start:0,count:t.count}]);for(let S=0,_=b.length;S<_;++S){const y=b[S],R=y.start,L=y.count;for(let D=R,U=R+L;D<U;D+=3)f(t.getX(D+0),t.getX(D+1),t.getX(D+2))}const x=new I,g=new I,T=new I,A=new I;function w(S){T.fromBufferAttribute(s,S),A.copy(T);const _=a[S];x.copy(_),x.sub(T.multiplyScalar(T.dot(_))).normalize(),g.crossVectors(A,_);const R=g.dot(l[S])<0?-1:1;r.setXYZW(S,x.x,x.y,x.z,R)}for(let S=0,_=b.length;S<_;++S){const y=b[S],R=y.start,L=y.count;for(let D=R,U=R+L;D<U;D+=3)w(t.getX(D+0)),w(t.getX(D+1)),w(t.getX(D+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new dn(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let u=0,p=i.count;u<p;u++)i.setXYZ(u,0,0,0);const s=new I,o=new I,r=new I,a=new I,l=new I,c=new I,h=new I,d=new I;if(t)for(let u=0,p=t.count;u<p;u+=3){const v=t.getX(u+0),M=t.getX(u+1),m=t.getX(u+2);s.fromBufferAttribute(e,v),o.fromBufferAttribute(e,M),r.fromBufferAttribute(e,m),h.subVectors(r,o),d.subVectors(s,o),h.cross(d),a.fromBufferAttribute(i,v),l.fromBufferAttribute(i,M),c.fromBufferAttribute(i,m),a.add(h),l.add(h),c.add(h),i.setXYZ(v,a.x,a.y,a.z),i.setXYZ(M,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let u=0,p=e.count;u<p;u+=3)s.fromBufferAttribute(e,u+0),o.fromBufferAttribute(e,u+1),r.fromBufferAttribute(e,u+2),h.subVectors(r,o),d.subVectors(s,o),h.cross(d),i.setXYZ(u+0,h.x,h.y,h.z),i.setXYZ(u+1,h.x,h.y,h.z),i.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)Ue.fromBufferAttribute(t,e),Ue.normalize(),t.setXYZ(e,Ue.x,Ue.y,Ue.z)}toNonIndexed(){function t(a,l){const c=a.array,h=a.itemSize,d=a.normalized,u=new c.constructor(l.length*h);let p=0,v=0;for(let M=0,m=l.length;M<m;M++){a.isInterleavedBufferAttribute?p=l[M]*a.data.stride+a.offset:p=l[M]*h;for(let f=0;f<h;f++)u[v++]=c[p++]}return new dn(u,h,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new ze,i=this.index.array,s=this.attributes;for(const a in s){const l=s[a],c=t(l,i);e.setAttribute(a,c)}const o=this.morphAttributes;for(const a in o){const l=[],c=o[a];for(let h=0,d=c.length;h<d;h++){const u=c[h],p=t(u,i);l.push(p)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;const r=this.groups;for(let a=0,l=r.length;a<l;a++){const c=r[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const i=this.attributes;for(const l in i){const c=i[l];t.data.attributes[l]=c.toJSON(t.data)}const s={};let o=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let d=0,u=c.length;d<u;d++){const p=c[d];h.push(p.toJSON(t.data))}h.length>0&&(s[l]=h,o=!0)}o&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const r=this.groups;r.length>0&&(t.data.groups=JSON.parse(JSON.stringify(r)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const i=t.index;i!==null&&this.setIndex(i.clone(e));const s=t.attributes;for(const c in s){const h=s[c];this.setAttribute(c,h.clone(e))}const o=t.morphAttributes;for(const c in o){const h=[],d=o[c];for(let u=0,p=d.length;u<p;u++)h.push(d[u].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;const r=t.groups;for(let c=0,h=r.length;c<h;c++){const d=r[c];this.addGroup(d.start,d.count,d.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Dc=new me,gi=new Lr,Uo=new Ir,Nc=new I,Bo=new I,Oo=new I,ko=new I,na=new I,Fo=new I,Uc=new I,zo=new I;class B extends Ie{constructor(t=new ze,e=new xe){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,r=s.length;o<r;o++){const a=s[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=o}}}}getVertexPosition(t,e){const i=this.geometry,s=i.attributes.position,o=i.morphAttributes.position,r=i.morphTargetsRelative;e.fromBufferAttribute(s,t);const a=this.morphTargetInfluences;if(o&&a){Fo.set(0,0,0);for(let l=0,c=o.length;l<c;l++){const h=a[l],d=o[l];h!==0&&(na.fromBufferAttribute(d,t),r?Fo.addScaledVector(na,h):Fo.addScaledVector(na.sub(e),h))}e.add(Fo)}return e}raycast(t,e){const i=this.geometry,s=this.material,o=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Uo.copy(i.boundingSphere),Uo.applyMatrix4(o),gi.copy(t.ray).recast(t.near),!(Uo.containsPoint(gi.origin)===!1&&(gi.intersectSphere(Uo,Nc)===null||gi.origin.distanceToSquared(Nc)>(t.far-t.near)**2))&&(Dc.copy(o).invert(),gi.copy(t.ray).applyMatrix4(Dc),!(i.boundingBox!==null&&gi.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,gi)))}_computeIntersections(t,e,i){let s;const o=this.geometry,r=this.material,a=o.index,l=o.attributes.position,c=o.attributes.uv,h=o.attributes.uv1,d=o.attributes.normal,u=o.groups,p=o.drawRange;if(a!==null)if(Array.isArray(r))for(let v=0,M=u.length;v<M;v++){const m=u[v],f=r[m.materialIndex],b=Math.max(m.start,p.start),x=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let g=b,T=x;g<T;g+=3){const A=a.getX(g),w=a.getX(g+1),S=a.getX(g+2);s=Ho(this,f,t,i,c,h,d,A,w,S),s&&(s.faceIndex=Math.floor(g/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const v=Math.max(0,p.start),M=Math.min(a.count,p.start+p.count);for(let m=v,f=M;m<f;m+=3){const b=a.getX(m),x=a.getX(m+1),g=a.getX(m+2);s=Ho(this,r,t,i,c,h,d,b,x,g),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(r))for(let v=0,M=u.length;v<M;v++){const m=u[v],f=r[m.materialIndex],b=Math.max(m.start,p.start),x=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let g=b,T=x;g<T;g+=3){const A=g,w=g+1,S=g+2;s=Ho(this,f,t,i,c,h,d,A,w,S),s&&(s.faceIndex=Math.floor(g/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const v=Math.max(0,p.start),M=Math.min(l.count,p.start+p.count);for(let m=v,f=M;m<f;m+=3){const b=m,x=m+1,g=m+2;s=Ho(this,r,t,i,c,h,d,b,x,g),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}}function up(n,t,e,i,s,o,r,a){let l;if(t.side===Ze?l=i.intersectTriangle(r,o,s,!0,a):l=i.intersectTriangle(s,o,r,t.side===ci,a),l===null)return null;zo.copy(a),zo.applyMatrix4(n.matrixWorld);const c=e.ray.origin.distanceTo(zo);return c<e.near||c>e.far?null:{distance:c,point:zo.clone(),object:n}}function Ho(n,t,e,i,s,o,r,a,l,c){n.getVertexPosition(a,Bo),n.getVertexPosition(l,Oo),n.getVertexPosition(c,ko);const h=up(n,t,e,i,Bo,Oo,ko,Uc);if(h){const d=new I;hn.getBarycoord(Uc,Bo,Oo,ko,d),s&&(h.uv=hn.getInterpolatedAttribute(s,a,l,c,d,new Et)),o&&(h.uv1=hn.getInterpolatedAttribute(o,a,l,c,d,new Et)),r&&(h.normal=hn.getInterpolatedAttribute(r,a,l,c,d,new I),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));const u={a,b:l,c,normal:new I,materialIndex:0};hn.getNormal(Bo,Oo,ko,u.normal),h.face=u,h.barycoord=d}return h}class st extends ze{constructor(t=1,e=1,i=1,s=1,o=1,r=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:s,heightSegments:o,depthSegments:r};const a=this;s=Math.floor(s),o=Math.floor(o),r=Math.floor(r);const l=[],c=[],h=[],d=[];let u=0,p=0;v("z","y","x",-1,-1,i,e,t,r,o,0),v("z","y","x",1,-1,i,e,-t,r,o,1),v("x","z","y",1,1,t,i,e,s,r,2),v("x","z","y",1,-1,t,i,-e,s,r,3),v("x","y","z",1,-1,t,e,i,s,o,4),v("x","y","z",-1,-1,t,e,-i,s,o,5),this.setIndex(l),this.setAttribute("position",new he(c,3)),this.setAttribute("normal",new he(h,3)),this.setAttribute("uv",new he(d,2));function v(M,m,f,b,x,g,T,A,w,S,_){const y=g/w,R=T/S,L=g/2,D=T/2,U=A/2,H=w+1,V=S+1;let z=0,O=0;const X=new I;for(let J=0;J<V;J++){const q=J*R-D;for(let gt=0;gt<H;gt++){const K=gt*y-L;X[M]=K*b,X[m]=q*x,X[f]=U,c.push(X.x,X.y,X.z),X[M]=0,X[m]=0,X[f]=A>0?1:-1,h.push(X.x,X.y,X.z),d.push(gt/w),d.push(1-J/S),z+=1}}for(let J=0;J<S;J++)for(let q=0;q<w;q++){const gt=u+q+H*J,K=u+q+H*(J+1),F=u+(q+1)+H*(J+1),nt=u+(q+1)+H*J;l.push(gt,K,nt),l.push(K,F,nt),O+=6}a.addGroup(p,O,_),p+=O,u+=z}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new st(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Ss(n){const t={};for(const e in n){t[e]={};for(const i in n[e]){const s=n[e][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=s.clone():Array.isArray(s)?t[e][i]=s.slice():t[e][i]=s}}return t}function Ye(n){const t={};for(let e=0;e<n.length;e++){const i=Ss(n[e]);for(const s in i)t[s]=i[s]}return t}function fp(n){const t=[];for(let e=0;e<n.length;e++)t.push(n[e].clone());return t}function Sd(n){const t=n.getRenderTarget();return t===null?n.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:ne.workingColorSpace}const pp={clone:Ss,merge:Ye};var mp=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,gp=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class hi extends Ni{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=mp,this.fragmentShader=gp,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Ss(t.uniforms),this.uniformsGroups=fp(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const r=this.uniforms[s].value;r&&r.isTexture?e.uniforms[s]={type:"t",value:r.toJSON(t).uuid}:r&&r.isColor?e.uniforms[s]={type:"c",value:r.getHex()}:r&&r.isVector2?e.uniforms[s]={type:"v2",value:r.toArray()}:r&&r.isVector3?e.uniforms[s]={type:"v3",value:r.toArray()}:r&&r.isVector4?e.uniforms[s]={type:"v4",value:r.toArray()}:r&&r.isMatrix3?e.uniforms[s]={type:"m3",value:r.toArray()}:r&&r.isMatrix4?e.uniforms[s]={type:"m4",value:r.toArray()}:e.uniforms[s]={value:r}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const i={};for(const s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}}class Ed extends Ie{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new me,this.projectionMatrix=new me,this.projectionMatrixInverse=new me,this.coordinateSystem=Hn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const ei=new I,Bc=new Et,Oc=new Et;class nn extends Ed{constructor(t=50,e=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=ao*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(eo*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return ao*2*Math.atan(Math.tan(eo*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,i){ei.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(ei.x,ei.y).multiplyScalar(-t/ei.z),ei.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(ei.x,ei.y).multiplyScalar(-t/ei.z)}getViewSize(t,e){return this.getViewBounds(t,Bc,Oc),e.subVectors(Oc,Bc)}setViewOffset(t,e,i,s,o,r){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=o,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(eo*.5*this.fov)/this.zoom,i=2*e,s=this.aspect*i,o=-.5*s;const r=this.view;if(this.view!==null&&this.view.enabled){const l=r.fullWidth,c=r.fullHeight;o+=r.offsetX*s/l,e-=r.offsetY*i/c,s*=r.width/l,i*=r.height/c}const a=this.filmOffset;a!==0&&(o+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(o,o+s,e,e-i,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const Ki=-90,Zi=1;class vp extends Ie{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new nn(Ki,Zi,t,e);s.layers=this.layers,this.add(s);const o=new nn(Ki,Zi,t,e);o.layers=this.layers,this.add(o);const r=new nn(Ki,Zi,t,e);r.layers=this.layers,this.add(r);const a=new nn(Ki,Zi,t,e);a.layers=this.layers,this.add(a);const l=new nn(Ki,Zi,t,e);l.layers=this.layers,this.add(l);const c=new nn(Ki,Zi,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[i,s,o,r,a,l]=e;for(const c of e)this.remove(c);if(t===Hn)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),o.up.set(0,0,-1),o.lookAt(0,1,0),r.up.set(0,0,1),r.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===pr)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),o.up.set(0,0,1),o.lookAt(0,1,0),r.up.set(0,0,-1),r.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[o,r,a,l,c,h]=this.children,d=t.getRenderTarget(),u=t.getActiveCubeFace(),p=t.getActiveMipmapLevel(),v=t.xr.enabled;t.xr.enabled=!1;const M=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,t.setRenderTarget(i,0,s),t.render(e,o),t.setRenderTarget(i,1,s),t.render(e,r),t.setRenderTarget(i,2,s),t.render(e,a),t.setRenderTarget(i,3,s),t.render(e,l),t.setRenderTarget(i,4,s),t.render(e,c),i.texture.generateMipmaps=M,t.setRenderTarget(i,5,s),t.render(e,h),t.setRenderTarget(d,u,p),t.xr.enabled=v,i.texture.needsPMREMUpdate=!0}}class Td extends qe{constructor(t,e,i,s,o,r,a,l,c,h){t=t!==void 0?t:[],e=e!==void 0?e:ys,super(t,e,i,s,o,r,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class _p extends Pi{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const i={width:t,height:t,depth:1},s=[i,i,i,i,i,i];this.texture=new Td(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:Pn}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new st(5,5,5),o=new hi({name:"CubemapFromEquirect",uniforms:Ss(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Ze,blending:ai});o.uniforms.tEquirect.value=e;const r=new B(s,o),a=e.minFilter;return e.minFilter===Ai&&(e.minFilter=Pn),new vp(1,10,this).update(t,r),e.minFilter=a,r.geometry.dispose(),r.material.dispose(),this}clear(t,e,i,s){const o=t.getRenderTarget();for(let r=0;r<6;r++)t.setRenderTarget(this,r),t.clear(e,i,s);t.setRenderTarget(o)}}const ia=new I,yp=new I,xp=new Kt;class ni{constructor(t=new I(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,s){return this.normal.set(t,e,i),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){const s=ia.subVectors(i,e).cross(yp.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const i=t.delta(ia),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const o=-(t.start.dot(this.normal)+this.constant)/s;return o<0||o>1?null:e.copy(t.start).addScaledVector(i,o)}intersectsLine(t){const e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const i=e||xp.getNormalMatrix(t),s=this.coplanarPoint(ia).applyMatrix4(t),o=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(o),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const vi=new Ir,Go=new I;class Wl{constructor(t=new ni,e=new ni,i=new ni,s=new ni,o=new ni,r=new ni){this.planes=[t,e,i,s,o,r]}set(t,e,i,s,o,r){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(i),a[3].copy(s),a[4].copy(o),a[5].copy(r),this}copy(t){const e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=Hn){const i=this.planes,s=t.elements,o=s[0],r=s[1],a=s[2],l=s[3],c=s[4],h=s[5],d=s[6],u=s[7],p=s[8],v=s[9],M=s[10],m=s[11],f=s[12],b=s[13],x=s[14],g=s[15];if(i[0].setComponents(l-o,u-c,m-p,g-f).normalize(),i[1].setComponents(l+o,u+c,m+p,g+f).normalize(),i[2].setComponents(l+r,u+h,m+v,g+b).normalize(),i[3].setComponents(l-r,u-h,m-v,g-b).normalize(),i[4].setComponents(l-a,u-d,m-M,g-x).normalize(),e===Hn)i[5].setComponents(l+a,u+d,m+M,g+x).normalize();else if(e===pr)i[5].setComponents(a,d,M,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),vi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),vi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(vi)}intersectsSprite(t){return vi.center.set(0,0,0),vi.radius=.7071067811865476,vi.applyMatrix4(t.matrixWorld),this.intersectsSphere(vi)}intersectsSphere(t){const e=this.planes,i=t.center,s=-t.radius;for(let o=0;o<6;o++)if(e[o].distanceToPoint(i)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let i=0;i<6;i++){const s=e[i];if(Go.x=s.normal.x>0?t.max.x:t.min.x,Go.y=s.normal.y>0?t.max.y:t.min.y,Go.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Go)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function wd(){let n=null,t=!1,e=null,i=null;function s(o,r){e(o,r),i=n.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(i=n.requestAnimationFrame(s),t=!0)},stop:function(){n.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(o){e=o},setContext:function(o){n=o}}}function Mp(n){const t=new WeakMap;function e(a,l){const c=a.array,h=a.usage,d=c.byteLength,u=n.createBuffer();n.bindBuffer(l,u),n.bufferData(l,c,h),a.onUploadCallback();let p;if(c instanceof Float32Array)p=n.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?p=n.HALF_FLOAT:p=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=n.SHORT;else if(c instanceof Uint32Array)p=n.UNSIGNED_INT;else if(c instanceof Int32Array)p=n.INT;else if(c instanceof Int8Array)p=n.BYTE;else if(c instanceof Uint8Array)p=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:d}}function i(a,l,c){const h=l.array,d=l.updateRanges;if(n.bindBuffer(c,a),d.length===0)n.bufferSubData(c,0,h);else{d.sort((p,v)=>p.start-v.start);let u=0;for(let p=1;p<d.length;p++){const v=d[u],M=d[p];M.start<=v.start+v.count+1?v.count=Math.max(v.count,M.start+M.count-v.start):(++u,d[u]=M)}d.length=u+1;for(let p=0,v=d.length;p<v;p++){const M=d[p];n.bufferSubData(c,M.start*h.BYTES_PER_ELEMENT,h,M.start,M.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function o(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=t.get(a);l&&(n.deleteBuffer(l.buffer),t.delete(a))}function r(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:s,remove:o,update:r}}class Se extends ze{constructor(t=1,e=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:s};const o=t/2,r=e/2,a=Math.floor(i),l=Math.floor(s),c=a+1,h=l+1,d=t/a,u=e/l,p=[],v=[],M=[],m=[];for(let f=0;f<h;f++){const b=f*u-r;for(let x=0;x<c;x++){const g=x*d-o;v.push(g,-b,0),M.push(0,0,1),m.push(x/a),m.push(1-f/l)}}for(let f=0;f<l;f++)for(let b=0;b<a;b++){const x=b+c*f,g=b+c*(f+1),T=b+1+c*(f+1),A=b+1+c*f;p.push(x,g,A),p.push(g,T,A)}this.setIndex(p),this.setAttribute("position",new he(v,3)),this.setAttribute("normal",new he(M,3)),this.setAttribute("uv",new he(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Se(t.width,t.height,t.widthSegments,t.heightSegments)}}var bp=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Sp=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Ep=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Tp=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,wp=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Ap=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Cp=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Rp=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Pp=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,Ip=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Lp=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Dp=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Np=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Up=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Bp=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Op=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,kp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Fp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,zp=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Hp=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Gp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Vp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Wp=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,$p=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Xp=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Yp=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,qp=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,jp=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Kp=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Zp=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Jp="gl_FragColor = linearToOutputTexel( gl_FragColor );",Qp=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,tm=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,em=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,nm=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,im=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,sm=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,om=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,rm=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,am=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,lm=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,cm=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,hm=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,dm=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,um=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,fm=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,pm=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,mm=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,gm=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,vm=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,_m=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,ym=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,xm=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Mm=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,bm=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Sm=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Em=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Tm=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,wm=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Am=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Cm=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Rm=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Pm=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Im=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Lm=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Dm=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Nm=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Um=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Bm=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Om=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,km=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Fm=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,zm=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Hm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Gm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Vm=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Wm=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,$m=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Xm=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Ym=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,qm=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,jm=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Km=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Zm=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Jm=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Qm=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,tg=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,eg=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,ng=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,ig=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,sg=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,og=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,rg=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,ag=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,lg=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,cg=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,hg=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,dg=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,ug=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,fg=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,pg=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,mg=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,gg=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,vg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,_g=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,yg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,xg=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Mg=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,bg=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Sg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Eg=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Tg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,wg=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ag=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Cg=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Rg=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Pg=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Ig=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Lg=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Dg=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Ng=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Ug=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Bg=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Og=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,kg=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Fg=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,zg=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Hg=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Gg=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Vg=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Wg=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,$g=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Xg=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Yg=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,qg=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,jg=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Kg=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Zg=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Jg=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Qg=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,t0=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Zt={alphahash_fragment:bp,alphahash_pars_fragment:Sp,alphamap_fragment:Ep,alphamap_pars_fragment:Tp,alphatest_fragment:wp,alphatest_pars_fragment:Ap,aomap_fragment:Cp,aomap_pars_fragment:Rp,batching_pars_vertex:Pp,batching_vertex:Ip,begin_vertex:Lp,beginnormal_vertex:Dp,bsdfs:Np,iridescence_fragment:Up,bumpmap_pars_fragment:Bp,clipping_planes_fragment:Op,clipping_planes_pars_fragment:kp,clipping_planes_pars_vertex:Fp,clipping_planes_vertex:zp,color_fragment:Hp,color_pars_fragment:Gp,color_pars_vertex:Vp,color_vertex:Wp,common:$p,cube_uv_reflection_fragment:Xp,defaultnormal_vertex:Yp,displacementmap_pars_vertex:qp,displacementmap_vertex:jp,emissivemap_fragment:Kp,emissivemap_pars_fragment:Zp,colorspace_fragment:Jp,colorspace_pars_fragment:Qp,envmap_fragment:tm,envmap_common_pars_fragment:em,envmap_pars_fragment:nm,envmap_pars_vertex:im,envmap_physical_pars_fragment:pm,envmap_vertex:sm,fog_vertex:om,fog_pars_vertex:rm,fog_fragment:am,fog_pars_fragment:lm,gradientmap_pars_fragment:cm,lightmap_pars_fragment:hm,lights_lambert_fragment:dm,lights_lambert_pars_fragment:um,lights_pars_begin:fm,lights_toon_fragment:mm,lights_toon_pars_fragment:gm,lights_phong_fragment:vm,lights_phong_pars_fragment:_m,lights_physical_fragment:ym,lights_physical_pars_fragment:xm,lights_fragment_begin:Mm,lights_fragment_maps:bm,lights_fragment_end:Sm,logdepthbuf_fragment:Em,logdepthbuf_pars_fragment:Tm,logdepthbuf_pars_vertex:wm,logdepthbuf_vertex:Am,map_fragment:Cm,map_pars_fragment:Rm,map_particle_fragment:Pm,map_particle_pars_fragment:Im,metalnessmap_fragment:Lm,metalnessmap_pars_fragment:Dm,morphinstance_vertex:Nm,morphcolor_vertex:Um,morphnormal_vertex:Bm,morphtarget_pars_vertex:Om,morphtarget_vertex:km,normal_fragment_begin:Fm,normal_fragment_maps:zm,normal_pars_fragment:Hm,normal_pars_vertex:Gm,normal_vertex:Vm,normalmap_pars_fragment:Wm,clearcoat_normal_fragment_begin:$m,clearcoat_normal_fragment_maps:Xm,clearcoat_pars_fragment:Ym,iridescence_pars_fragment:qm,opaque_fragment:jm,packing:Km,premultiplied_alpha_fragment:Zm,project_vertex:Jm,dithering_fragment:Qm,dithering_pars_fragment:tg,roughnessmap_fragment:eg,roughnessmap_pars_fragment:ng,shadowmap_pars_fragment:ig,shadowmap_pars_vertex:sg,shadowmap_vertex:og,shadowmask_pars_fragment:rg,skinbase_vertex:ag,skinning_pars_vertex:lg,skinning_vertex:cg,skinnormal_vertex:hg,specularmap_fragment:dg,specularmap_pars_fragment:ug,tonemapping_fragment:fg,tonemapping_pars_fragment:pg,transmission_fragment:mg,transmission_pars_fragment:gg,uv_pars_fragment:vg,uv_pars_vertex:_g,uv_vertex:yg,worldpos_vertex:xg,background_vert:Mg,background_frag:bg,backgroundCube_vert:Sg,backgroundCube_frag:Eg,cube_vert:Tg,cube_frag:wg,depth_vert:Ag,depth_frag:Cg,distanceRGBA_vert:Rg,distanceRGBA_frag:Pg,equirect_vert:Ig,equirect_frag:Lg,linedashed_vert:Dg,linedashed_frag:Ng,meshbasic_vert:Ug,meshbasic_frag:Bg,meshlambert_vert:Og,meshlambert_frag:kg,meshmatcap_vert:Fg,meshmatcap_frag:zg,meshnormal_vert:Hg,meshnormal_frag:Gg,meshphong_vert:Vg,meshphong_frag:Wg,meshphysical_vert:$g,meshphysical_frag:Xg,meshtoon_vert:Yg,meshtoon_frag:qg,points_vert:jg,points_frag:Kg,shadow_vert:Zg,shadow_frag:Jg,sprite_vert:Qg,sprite_frag:t0},Rt={common:{diffuse:{value:new Gt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Kt},alphaMap:{value:null},alphaMapTransform:{value:new Kt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Kt}},envmap:{envMap:{value:null},envMapRotation:{value:new Kt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Kt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Kt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Kt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Kt},normalScale:{value:new Et(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Kt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Kt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Kt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Kt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Gt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Gt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Kt},alphaTest:{value:0},uvTransform:{value:new Kt}},sprite:{diffuse:{value:new Gt(16777215)},opacity:{value:1},center:{value:new Et(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Kt},alphaMap:{value:null},alphaMapTransform:{value:new Kt},alphaTest:{value:0}}},Cn={basic:{uniforms:Ye([Rt.common,Rt.specularmap,Rt.envmap,Rt.aomap,Rt.lightmap,Rt.fog]),vertexShader:Zt.meshbasic_vert,fragmentShader:Zt.meshbasic_frag},lambert:{uniforms:Ye([Rt.common,Rt.specularmap,Rt.envmap,Rt.aomap,Rt.lightmap,Rt.emissivemap,Rt.bumpmap,Rt.normalmap,Rt.displacementmap,Rt.fog,Rt.lights,{emissive:{value:new Gt(0)}}]),vertexShader:Zt.meshlambert_vert,fragmentShader:Zt.meshlambert_frag},phong:{uniforms:Ye([Rt.common,Rt.specularmap,Rt.envmap,Rt.aomap,Rt.lightmap,Rt.emissivemap,Rt.bumpmap,Rt.normalmap,Rt.displacementmap,Rt.fog,Rt.lights,{emissive:{value:new Gt(0)},specular:{value:new Gt(1118481)},shininess:{value:30}}]),vertexShader:Zt.meshphong_vert,fragmentShader:Zt.meshphong_frag},standard:{uniforms:Ye([Rt.common,Rt.envmap,Rt.aomap,Rt.lightmap,Rt.emissivemap,Rt.bumpmap,Rt.normalmap,Rt.displacementmap,Rt.roughnessmap,Rt.metalnessmap,Rt.fog,Rt.lights,{emissive:{value:new Gt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Zt.meshphysical_vert,fragmentShader:Zt.meshphysical_frag},toon:{uniforms:Ye([Rt.common,Rt.aomap,Rt.lightmap,Rt.emissivemap,Rt.bumpmap,Rt.normalmap,Rt.displacementmap,Rt.gradientmap,Rt.fog,Rt.lights,{emissive:{value:new Gt(0)}}]),vertexShader:Zt.meshtoon_vert,fragmentShader:Zt.meshtoon_frag},matcap:{uniforms:Ye([Rt.common,Rt.bumpmap,Rt.normalmap,Rt.displacementmap,Rt.fog,{matcap:{value:null}}]),vertexShader:Zt.meshmatcap_vert,fragmentShader:Zt.meshmatcap_frag},points:{uniforms:Ye([Rt.points,Rt.fog]),vertexShader:Zt.points_vert,fragmentShader:Zt.points_frag},dashed:{uniforms:Ye([Rt.common,Rt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Zt.linedashed_vert,fragmentShader:Zt.linedashed_frag},depth:{uniforms:Ye([Rt.common,Rt.displacementmap]),vertexShader:Zt.depth_vert,fragmentShader:Zt.depth_frag},normal:{uniforms:Ye([Rt.common,Rt.bumpmap,Rt.normalmap,Rt.displacementmap,{opacity:{value:1}}]),vertexShader:Zt.meshnormal_vert,fragmentShader:Zt.meshnormal_frag},sprite:{uniforms:Ye([Rt.sprite,Rt.fog]),vertexShader:Zt.sprite_vert,fragmentShader:Zt.sprite_frag},background:{uniforms:{uvTransform:{value:new Kt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Zt.background_vert,fragmentShader:Zt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Kt}},vertexShader:Zt.backgroundCube_vert,fragmentShader:Zt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Zt.cube_vert,fragmentShader:Zt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Zt.equirect_vert,fragmentShader:Zt.equirect_frag},distanceRGBA:{uniforms:Ye([Rt.common,Rt.displacementmap,{referencePosition:{value:new I},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Zt.distanceRGBA_vert,fragmentShader:Zt.distanceRGBA_frag},shadow:{uniforms:Ye([Rt.lights,Rt.fog,{color:{value:new Gt(0)},opacity:{value:1}}]),vertexShader:Zt.shadow_vert,fragmentShader:Zt.shadow_frag}};Cn.physical={uniforms:Ye([Cn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Kt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Kt},clearcoatNormalScale:{value:new Et(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Kt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Kt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Kt},sheen:{value:0},sheenColor:{value:new Gt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Kt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Kt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Kt},transmissionSamplerSize:{value:new Et},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Kt},attenuationDistance:{value:0},attenuationColor:{value:new Gt(0)},specularColor:{value:new Gt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Kt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Kt},anisotropyVector:{value:new Et},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Kt}}]),vertexShader:Zt.meshphysical_vert,fragmentShader:Zt.meshphysical_frag};const Vo={r:0,b:0,g:0},_i=new In,e0=new me;function n0(n,t,e,i,s,o,r){const a=new Gt(0);let l=o===!0?0:1,c,h,d=null,u=0,p=null;function v(b){let x=b.isScene===!0?b.background:null;return x&&x.isTexture&&(x=(b.backgroundBlurriness>0?e:t).get(x)),x}function M(b){let x=!1;const g=v(b);g===null?f(a,l):g&&g.isColor&&(f(g,1),x=!0);const T=n.xr.getEnvironmentBlendMode();T==="additive"?i.buffers.color.setClear(0,0,0,1,r):T==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,r),(n.autoClear||x)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function m(b,x){const g=v(x);g&&(g.isCubeTexture||g.mapping===Rr)?(h===void 0&&(h=new B(new st(1,1,1),new hi({name:"BackgroundCubeMaterial",uniforms:Ss(Cn.backgroundCube.uniforms),vertexShader:Cn.backgroundCube.vertexShader,fragmentShader:Cn.backgroundCube.fragmentShader,side:Ze,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(T,A,w){this.matrixWorld.copyPosition(w.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),_i.copy(x.backgroundRotation),_i.x*=-1,_i.y*=-1,_i.z*=-1,g.isCubeTexture&&g.isRenderTargetTexture===!1&&(_i.y*=-1,_i.z*=-1),h.material.uniforms.envMap.value=g,h.material.uniforms.flipEnvMap.value=g.isCubeTexture&&g.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(e0.makeRotationFromEuler(_i)),h.material.toneMapped=ne.getTransfer(g.colorSpace)!==de,(d!==g||u!==g.version||p!==n.toneMapping)&&(h.material.needsUpdate=!0,d=g,u=g.version,p=n.toneMapping),h.layers.enableAll(),b.unshift(h,h.geometry,h.material,0,0,null)):g&&g.isTexture&&(c===void 0&&(c=new B(new Se(2,2),new hi({name:"BackgroundMaterial",uniforms:Ss(Cn.background.uniforms),vertexShader:Cn.background.vertexShader,fragmentShader:Cn.background.fragmentShader,side:ci,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=g,c.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,c.material.toneMapped=ne.getTransfer(g.colorSpace)!==de,g.matrixAutoUpdate===!0&&g.updateMatrix(),c.material.uniforms.uvTransform.value.copy(g.matrix),(d!==g||u!==g.version||p!==n.toneMapping)&&(c.material.needsUpdate=!0,d=g,u=g.version,p=n.toneMapping),c.layers.enableAll(),b.unshift(c,c.geometry,c.material,0,0,null))}function f(b,x){b.getRGB(Vo,Sd(n)),i.buffers.color.setClear(Vo.r,Vo.g,Vo.b,x,r)}return{getClearColor:function(){return a},setClearColor:function(b,x=1){a.set(b),l=x,f(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(b){l=b,f(a,l)},render:M,addToRenderList:m}}function i0(n,t){const e=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=u(null);let o=s,r=!1;function a(y,R,L,D,U){let H=!1;const V=d(D,L,R);o!==V&&(o=V,c(o.object)),H=p(y,D,L,U),H&&v(y,D,L,U),U!==null&&t.update(U,n.ELEMENT_ARRAY_BUFFER),(H||r)&&(r=!1,g(y,R,L,D),U!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(U).buffer))}function l(){return n.createVertexArray()}function c(y){return n.bindVertexArray(y)}function h(y){return n.deleteVertexArray(y)}function d(y,R,L){const D=L.wireframe===!0;let U=i[y.id];U===void 0&&(U={},i[y.id]=U);let H=U[R.id];H===void 0&&(H={},U[R.id]=H);let V=H[D];return V===void 0&&(V=u(l()),H[D]=V),V}function u(y){const R=[],L=[],D=[];for(let U=0;U<e;U++)R[U]=0,L[U]=0,D[U]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:R,enabledAttributes:L,attributeDivisors:D,object:y,attributes:{},index:null}}function p(y,R,L,D){const U=o.attributes,H=R.attributes;let V=0;const z=L.getAttributes();for(const O in z)if(z[O].location>=0){const J=U[O];let q=H[O];if(q===void 0&&(O==="instanceMatrix"&&y.instanceMatrix&&(q=y.instanceMatrix),O==="instanceColor"&&y.instanceColor&&(q=y.instanceColor)),J===void 0||J.attribute!==q||q&&J.data!==q.data)return!0;V++}return o.attributesNum!==V||o.index!==D}function v(y,R,L,D){const U={},H=R.attributes;let V=0;const z=L.getAttributes();for(const O in z)if(z[O].location>=0){let J=H[O];J===void 0&&(O==="instanceMatrix"&&y.instanceMatrix&&(J=y.instanceMatrix),O==="instanceColor"&&y.instanceColor&&(J=y.instanceColor));const q={};q.attribute=J,J&&J.data&&(q.data=J.data),U[O]=q,V++}o.attributes=U,o.attributesNum=V,o.index=D}function M(){const y=o.newAttributes;for(let R=0,L=y.length;R<L;R++)y[R]=0}function m(y){f(y,0)}function f(y,R){const L=o.newAttributes,D=o.enabledAttributes,U=o.attributeDivisors;L[y]=1,D[y]===0&&(n.enableVertexAttribArray(y),D[y]=1),U[y]!==R&&(n.vertexAttribDivisor(y,R),U[y]=R)}function b(){const y=o.newAttributes,R=o.enabledAttributes;for(let L=0,D=R.length;L<D;L++)R[L]!==y[L]&&(n.disableVertexAttribArray(L),R[L]=0)}function x(y,R,L,D,U,H,V){V===!0?n.vertexAttribIPointer(y,R,L,U,H):n.vertexAttribPointer(y,R,L,D,U,H)}function g(y,R,L,D){M();const U=D.attributes,H=L.getAttributes(),V=R.defaultAttributeValues;for(const z in H){const O=H[z];if(O.location>=0){let X=U[z];if(X===void 0&&(z==="instanceMatrix"&&y.instanceMatrix&&(X=y.instanceMatrix),z==="instanceColor"&&y.instanceColor&&(X=y.instanceColor)),X!==void 0){const J=X.normalized,q=X.itemSize,gt=t.get(X);if(gt===void 0)continue;const K=gt.buffer,F=gt.type,nt=gt.bytesPerElement,Mt=F===n.INT||F===n.UNSIGNED_INT||X.gpuType===Bl;if(X.isInterleavedBufferAttribute){const lt=X.data,Ct=lt.stride,Pt=X.offset;if(lt.isInstancedInterleavedBuffer){for(let Ht=0;Ht<O.locationSize;Ht++)f(O.location+Ht,lt.meshPerAttribute);y.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=lt.meshPerAttribute*lt.count)}else for(let Ht=0;Ht<O.locationSize;Ht++)m(O.location+Ht);n.bindBuffer(n.ARRAY_BUFFER,K);for(let Ht=0;Ht<O.locationSize;Ht++)x(O.location+Ht,q/O.locationSize,F,J,Ct*nt,(Pt+q/O.locationSize*Ht)*nt,Mt)}else{if(X.isInstancedBufferAttribute){for(let lt=0;lt<O.locationSize;lt++)f(O.location+lt,X.meshPerAttribute);y.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=X.meshPerAttribute*X.count)}else for(let lt=0;lt<O.locationSize;lt++)m(O.location+lt);n.bindBuffer(n.ARRAY_BUFFER,K);for(let lt=0;lt<O.locationSize;lt++)x(O.location+lt,q/O.locationSize,F,J,q*nt,q/O.locationSize*lt*nt,Mt)}}else if(V!==void 0){const J=V[z];if(J!==void 0)switch(J.length){case 2:n.vertexAttrib2fv(O.location,J);break;case 3:n.vertexAttrib3fv(O.location,J);break;case 4:n.vertexAttrib4fv(O.location,J);break;default:n.vertexAttrib1fv(O.location,J)}}}}b()}function T(){S();for(const y in i){const R=i[y];for(const L in R){const D=R[L];for(const U in D)h(D[U].object),delete D[U];delete R[L]}delete i[y]}}function A(y){if(i[y.id]===void 0)return;const R=i[y.id];for(const L in R){const D=R[L];for(const U in D)h(D[U].object),delete D[U];delete R[L]}delete i[y.id]}function w(y){for(const R in i){const L=i[R];if(L[y.id]===void 0)continue;const D=L[y.id];for(const U in D)h(D[U].object),delete D[U];delete L[y.id]}}function S(){_(),r=!0,o!==s&&(o=s,c(o.object))}function _(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:S,resetDefaultState:_,dispose:T,releaseStatesOfGeometry:A,releaseStatesOfProgram:w,initAttributes:M,enableAttribute:m,disableUnusedAttributes:b}}function s0(n,t,e){let i;function s(c){i=c}function o(c,h){n.drawArrays(i,c,h),e.update(h,i,1)}function r(c,h,d){d!==0&&(n.drawArraysInstanced(i,c,h,d),e.update(h,i,d))}function a(c,h,d){if(d===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,h,0,d);let p=0;for(let v=0;v<d;v++)p+=h[v];e.update(p,i,1)}function l(c,h,d,u){if(d===0)return;const p=t.get("WEBGL_multi_draw");if(p===null)for(let v=0;v<c.length;v++)r(c[v],h[v],u[v]);else{p.multiDrawArraysInstancedWEBGL(i,c,0,h,0,u,0,d);let v=0;for(let M=0;M<d;M++)v+=h[M]*u[M];e.update(v,i,1)}}this.setMode=s,this.render=o,this.renderInstances=r,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function o0(n,t,e,i){let s;function o(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const w=t.get("EXT_texture_filter_anisotropic");s=n.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function r(w){return!(w!==En&&i.convert(w)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(w){const S=w===ho&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(w!==Wn&&i.convert(w)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&w!==zn&&!S)}function l(w){if(w==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const d=e.logarithmicDepthBuffer===!0,u=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),p=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),v=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),M=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),f=n.getParameter(n.MAX_VERTEX_ATTRIBS),b=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),x=n.getParameter(n.MAX_VARYING_VECTORS),g=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),T=v>0,A=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:o,getMaxPrecision:l,textureFormatReadable:r,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:d,reverseDepthBuffer:u,maxTextures:p,maxVertexTextures:v,maxTextureSize:M,maxCubemapSize:m,maxAttributes:f,maxVertexUniforms:b,maxVaryings:x,maxFragmentUniforms:g,vertexTextures:T,maxSamples:A}}function r0(n){const t=this;let e=null,i=0,s=!1,o=!1;const r=new ni,a=new Kt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,u){const p=d.length!==0||u||i!==0||s;return s=u,i=d.length,p},this.beginShadows=function(){o=!0,h(null)},this.endShadows=function(){o=!1},this.setGlobalState=function(d,u){e=h(d,u,0)},this.setState=function(d,u,p){const v=d.clippingPlanes,M=d.clipIntersection,m=d.clipShadows,f=n.get(d);if(!s||v===null||v.length===0||o&&!m)o?h(null):c();else{const b=o?0:i,x=b*4;let g=f.clippingState||null;l.value=g,g=h(v,u,x,p);for(let T=0;T!==x;++T)g[T]=e[T];f.clippingState=g,this.numIntersection=M?this.numPlanes:0,this.numPlanes+=b}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function h(d,u,p,v){const M=d!==null?d.length:0;let m=null;if(M!==0){if(m=l.value,v!==!0||m===null){const f=p+M*4,b=u.matrixWorldInverse;a.getNormalMatrix(b),(m===null||m.length<f)&&(m=new Float32Array(f));for(let x=0,g=p;x!==M;++x,g+=4)r.copy(d[x]).applyMatrix4(b,a),r.normal.toArray(m,g),m[g+3]=r.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=M,t.numIntersection=0,m}}function a0(n){let t=new WeakMap;function e(r,a){return a===qa?r.mapping=ys:a===ja&&(r.mapping=xs),r}function i(r){if(r&&r.isTexture){const a=r.mapping;if(a===qa||a===ja)if(t.has(r)){const l=t.get(r).texture;return e(l,r.mapping)}else{const l=r.image;if(l&&l.height>0){const c=new _p(l.height);return c.fromEquirectangularTexture(n,r),t.set(r,c),r.addEventListener("dispose",s),e(c.texture,r.mapping)}else return null}}return r}function s(r){const a=r.target;a.removeEventListener("dispose",s);const l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function o(){t=new WeakMap}return{get:i,dispose:o}}class Ad extends Ed{constructor(t=-1,e=1,i=1,s=-1,o=.1,r=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=s,this.near=o,this.far=r,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,s,o,r){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=o,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let o=i-t,r=i+t,a=s+e,l=s-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;o+=c*this.view.offsetX,r=o+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(o,r,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const os=4,kc=[.125,.215,.35,.446,.526,.582],Si=20,sa=new Ad,Fc=new Gt;let oa=null,ra=0,aa=0,la=!1;const xi=(1+Math.sqrt(5))/2,Ji=1/xi,zc=[new I(-xi,Ji,0),new I(xi,Ji,0),new I(-Ji,0,xi),new I(Ji,0,xi),new I(0,xi,-Ji),new I(0,xi,Ji),new I(-1,1,-1),new I(1,1,-1),new I(-1,1,1),new I(1,1,1)];class Hc{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,i=.1,s=100){oa=this._renderer.getRenderTarget(),ra=this._renderer.getActiveCubeFace(),aa=this._renderer.getActiveMipmapLevel(),la=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const o=this._allocateTargets();return o.depthBuffer=!0,this._sceneToCubeUV(t,i,s,o),e>0&&this._blur(o,0,0,e),this._applyPMREM(o),this._cleanup(o),o}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Wc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Vc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(oa,ra,aa),this._renderer.xr.enabled=la,t.scissorTest=!1,Wo(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===ys||t.mapping===xs?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),oa=this._renderer.getRenderTarget(),ra=this._renderer.getActiveCubeFace(),aa=this._renderer.getActiveMipmapLevel(),la=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=e||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:Pn,minFilter:Pn,generateMipmaps:!1,type:ho,format:En,colorSpace:ws,depthBuffer:!1},s=Gc(t,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Gc(t,e,i);const{_lodMax:o}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=l0(o)),this._blurMaterial=c0(o,t,e)}return s}_compileMaterial(t){const e=new B(this._lodPlanes[0],t);this._renderer.compile(e,sa)}_sceneToCubeUV(t,e,i,s){const a=new nn(90,1,e,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,d=h.autoClear,u=h.toneMapping;h.getClearColor(Fc),h.toneMapping=li,h.autoClear=!1;const p=new xe({name:"PMREM.Background",side:Ze,depthWrite:!1,depthTest:!1}),v=new B(new st,p);let M=!1;const m=t.background;m?m.isColor&&(p.color.copy(m),t.background=null,M=!0):(p.color.copy(Fc),M=!0);for(let f=0;f<6;f++){const b=f%3;b===0?(a.up.set(0,l[f],0),a.lookAt(c[f],0,0)):b===1?(a.up.set(0,0,l[f]),a.lookAt(0,c[f],0)):(a.up.set(0,l[f],0),a.lookAt(0,0,c[f]));const x=this._cubeSize;Wo(s,b*x,f>2?x:0,x,x),h.setRenderTarget(s),M&&h.render(v,a),h.render(t,a)}v.geometry.dispose(),v.material.dispose(),h.toneMapping=u,h.autoClear=d,t.background=m}_textureToCubeUV(t,e){const i=this._renderer,s=t.mapping===ys||t.mapping===xs;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Wc()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Vc());const o=s?this._cubemapMaterial:this._equirectMaterial,r=new B(this._lodPlanes[0],o),a=o.uniforms;a.envMap.value=t;const l=this._cubeSize;Wo(e,0,0,3*l,2*l),i.setRenderTarget(e),i.render(r,sa)}_applyPMREM(t){const e=this._renderer,i=e.autoClear;e.autoClear=!1;const s=this._lodPlanes.length;for(let o=1;o<s;o++){const r=Math.sqrt(this._sigmas[o]*this._sigmas[o]-this._sigmas[o-1]*this._sigmas[o-1]),a=zc[(s-o-1)%zc.length];this._blur(t,o-1,o,r,a)}e.autoClear=i}_blur(t,e,i,s,o){const r=this._pingPongRenderTarget;this._halfBlur(t,r,e,i,s,"latitudinal",o),this._halfBlur(r,t,i,i,s,"longitudinal",o)}_halfBlur(t,e,i,s,o,r,a){const l=this._renderer,c=this._blurMaterial;r!=="latitudinal"&&r!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,d=new B(this._lodPlanes[s],c),u=c.uniforms,p=this._sizeLods[i]-1,v=isFinite(o)?Math.PI/(2*p):2*Math.PI/(2*Si-1),M=o/v,m=isFinite(o)?1+Math.floor(h*M):Si;m>Si&&console.warn(`sigmaRadians, ${o}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Si}`);const f=[];let b=0;for(let w=0;w<Si;++w){const S=w/M,_=Math.exp(-S*S/2);f.push(_),w===0?b+=_:w<m&&(b+=2*_)}for(let w=0;w<f.length;w++)f[w]=f[w]/b;u.envMap.value=t.texture,u.samples.value=m,u.weights.value=f,u.latitudinal.value=r==="latitudinal",a&&(u.poleAxis.value=a);const{_lodMax:x}=this;u.dTheta.value=v,u.mipInt.value=x-i;const g=this._sizeLods[s],T=3*g*(s>x-os?s-x+os:0),A=4*(this._cubeSize-g);Wo(e,T,A,3*g,2*g),l.setRenderTarget(e),l.render(d,sa)}}function l0(n){const t=[],e=[],i=[];let s=n;const o=n-os+1+kc.length;for(let r=0;r<o;r++){const a=Math.pow(2,s);e.push(a);let l=1/a;r>n-os?l=kc[r-n+os-1]:r===0&&(l=0),i.push(l);const c=1/(a-2),h=-c,d=1+c,u=[h,h,d,h,d,d,h,h,d,d,h,d],p=6,v=6,M=3,m=2,f=1,b=new Float32Array(M*v*p),x=new Float32Array(m*v*p),g=new Float32Array(f*v*p);for(let A=0;A<p;A++){const w=A%3*2/3-1,S=A>2?0:-1,_=[w,S,0,w+2/3,S,0,w+2/3,S+1,0,w,S,0,w+2/3,S+1,0,w,S+1,0];b.set(_,M*v*A),x.set(u,m*v*A);const y=[A,A,A,A,A,A];g.set(y,f*v*A)}const T=new ze;T.setAttribute("position",new dn(b,M)),T.setAttribute("uv",new dn(x,m)),T.setAttribute("faceIndex",new dn(g,f)),t.push(T),s>os&&s--}return{lodPlanes:t,sizeLods:e,sigmas:i}}function Gc(n,t,e){const i=new Pi(n,t,e);return i.texture.mapping=Rr,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Wo(n,t,e,i,s){n.viewport.set(t,e,i,s),n.scissor.set(t,e,i,s)}function c0(n,t,e){const i=new Float32Array(Si),s=new I(0,1,0);return new hi({name:"SphericalGaussianBlur",defines:{n:Si,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:$l(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:ai,depthTest:!1,depthWrite:!1})}function Vc(){return new hi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:$l(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:ai,depthTest:!1,depthWrite:!1})}function Wc(){return new hi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:$l(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ai,depthTest:!1,depthWrite:!1})}function $l(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function h0(n){let t=new WeakMap,e=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===qa||l===ja,h=l===ys||l===xs;if(c||h){let d=t.get(a);const u=d!==void 0?d.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==u)return e===null&&(e=new Hc(n)),d=c?e.fromEquirectangular(a,d):e.fromCubemap(a,d),d.texture.pmremVersion=a.pmremVersion,t.set(a,d),d.texture;if(d!==void 0)return d.texture;{const p=a.image;return c&&p&&p.height>0||h&&p&&s(p)?(e===null&&(e=new Hc(n)),d=c?e.fromEquirectangular(a):e.fromCubemap(a),d.texture.pmremVersion=a.pmremVersion,t.set(a,d),a.addEventListener("dispose",o),d.texture):null}}}return a}function s(a){let l=0;const c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function o(a){const l=a.target;l.removeEventListener("dispose",o);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function r(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:i,dispose:r}}function d0(n){const t={};function e(i){if(t[i]!==void 0)return t[i];let s;switch(i){case"WEBGL_depth_texture":s=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=n.getExtension(i)}return t[i]=s,s}return{has:function(i){return e(i)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(i){const s=e(i);return s===null&&Ks("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function u0(n,t,e,i){const s={},o=new WeakMap;function r(d){const u=d.target;u.index!==null&&t.remove(u.index);for(const v in u.attributes)t.remove(u.attributes[v]);for(const v in u.morphAttributes){const M=u.morphAttributes[v];for(let m=0,f=M.length;m<f;m++)t.remove(M[m])}u.removeEventListener("dispose",r),delete s[u.id];const p=o.get(u);p&&(t.remove(p),o.delete(u)),i.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,e.memory.geometries--}function a(d,u){return s[u.id]===!0||(u.addEventListener("dispose",r),s[u.id]=!0,e.memory.geometries++),u}function l(d){const u=d.attributes;for(const v in u)t.update(u[v],n.ARRAY_BUFFER);const p=d.morphAttributes;for(const v in p){const M=p[v];for(let m=0,f=M.length;m<f;m++)t.update(M[m],n.ARRAY_BUFFER)}}function c(d){const u=[],p=d.index,v=d.attributes.position;let M=0;if(p!==null){const b=p.array;M=p.version;for(let x=0,g=b.length;x<g;x+=3){const T=b[x+0],A=b[x+1],w=b[x+2];u.push(T,A,A,w,w,T)}}else if(v!==void 0){const b=v.array;M=v.version;for(let x=0,g=b.length/3-1;x<g;x+=3){const T=x+0,A=x+1,w=x+2;u.push(T,A,A,w,w,T)}}else return;const m=new(vd(u)?bd:Md)(u,1);m.version=M;const f=o.get(d);f&&t.remove(f),o.set(d,m)}function h(d){const u=o.get(d);if(u){const p=d.index;p!==null&&u.version<p.version&&c(d)}else c(d);return o.get(d)}return{get:a,update:l,getWireframeAttribute:h}}function f0(n,t,e){let i;function s(u){i=u}let o,r;function a(u){o=u.type,r=u.bytesPerElement}function l(u,p){n.drawElements(i,p,o,u*r),e.update(p,i,1)}function c(u,p,v){v!==0&&(n.drawElementsInstanced(i,p,o,u*r,v),e.update(p,i,v))}function h(u,p,v){if(v===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,p,0,o,u,0,v);let m=0;for(let f=0;f<v;f++)m+=p[f];e.update(m,i,1)}function d(u,p,v,M){if(v===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let f=0;f<u.length;f++)c(u[f]/r,p[f],M[f]);else{m.multiDrawElementsInstancedWEBGL(i,p,0,o,u,0,M,0,v);let f=0;for(let b=0;b<v;b++)f+=p[b]*M[b];e.update(f,i,1)}}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=d}function p0(n){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(o,r,a){switch(e.calls++,r){case n.TRIANGLES:e.triangles+=a*(o/3);break;case n.LINES:e.lines+=a*(o/2);break;case n.LINE_STRIP:e.lines+=a*(o-1);break;case n.LINE_LOOP:e.lines+=a*o;break;case n.POINTS:e.points+=a*o;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",r);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:i}}function m0(n,t,e){const i=new WeakMap,s=new pe;function o(r,a,l){const c=r.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=h!==void 0?h.length:0;let u=i.get(a);if(u===void 0||u.count!==d){let y=function(){S.dispose(),i.delete(a),a.removeEventListener("dispose",y)};var p=y;u!==void 0&&u.texture.dispose();const v=a.morphAttributes.position!==void 0,M=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,f=a.morphAttributes.position||[],b=a.morphAttributes.normal||[],x=a.morphAttributes.color||[];let g=0;v===!0&&(g=1),M===!0&&(g=2),m===!0&&(g=3);let T=a.attributes.position.count*g,A=1;T>t.maxTextureSize&&(A=Math.ceil(T/t.maxTextureSize),T=t.maxTextureSize);const w=new Float32Array(T*A*4*d),S=new yd(w,T,A,d);S.type=zn,S.needsUpdate=!0;const _=g*4;for(let R=0;R<d;R++){const L=f[R],D=b[R],U=x[R],H=T*A*4*R;for(let V=0;V<L.count;V++){const z=V*_;v===!0&&(s.fromBufferAttribute(L,V),w[H+z+0]=s.x,w[H+z+1]=s.y,w[H+z+2]=s.z,w[H+z+3]=0),M===!0&&(s.fromBufferAttribute(D,V),w[H+z+4]=s.x,w[H+z+5]=s.y,w[H+z+6]=s.z,w[H+z+7]=0),m===!0&&(s.fromBufferAttribute(U,V),w[H+z+8]=s.x,w[H+z+9]=s.y,w[H+z+10]=s.z,w[H+z+11]=U.itemSize===4?s.w:1)}}u={count:d,texture:S,size:new Et(T,A)},i.set(a,u),a.addEventListener("dispose",y)}if(r.isInstancedMesh===!0&&r.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",r.morphTexture,e);else{let v=0;for(let m=0;m<c.length;m++)v+=c[m];const M=a.morphTargetsRelative?1:1-v;l.getUniforms().setValue(n,"morphTargetBaseInfluence",M),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",u.texture,e),l.getUniforms().setValue(n,"morphTargetsTextureSize",u.size)}return{update:o}}function g0(n,t,e,i){let s=new WeakMap;function o(l){const c=i.render.frame,h=l.geometry,d=t.get(l,h);if(s.get(d)!==c&&(t.update(d),s.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(e.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,n.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){const u=l.skeleton;s.get(u)!==c&&(u.update(),s.set(u,c))}return d}function r(){s=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:o,dispose:r}}class Cd extends qe{constructor(t,e,i,s,o,r,a,l,c,h=hs){if(h!==hs&&h!==bs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&h===hs&&(i=Ri),i===void 0&&h===bs&&(i=Ms),super(null,s,o,r,a,l,h,i,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:Tn,this.minFilter=l!==void 0?l:Tn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const Rd=new qe,$c=new Cd(1,1),Pd=new yd,Id=new np,Ld=new Td,Xc=[],Yc=[],qc=new Float32Array(16),jc=new Float32Array(9),Kc=new Float32Array(4);function As(n,t,e){const i=n[0];if(i<=0||i>0)return n;const s=t*e;let o=Xc[s];if(o===void 0&&(o=new Float32Array(s),Xc[s]=o),t!==0){i.toArray(o,0);for(let r=1,a=0;r!==t;++r)a+=e,n[r].toArray(o,a)}return o}function Le(n,t){if(n.length!==t.length)return!1;for(let e=0,i=n.length;e<i;e++)if(n[e]!==t[e])return!1;return!0}function De(n,t){for(let e=0,i=t.length;e<i;e++)n[e]=t[e]}function Dr(n,t){let e=Yc[t];e===void 0&&(e=new Int32Array(t),Yc[t]=e);for(let i=0;i!==t;++i)e[i]=n.allocateTextureUnit();return e}function v0(n,t){const e=this.cache;e[0]!==t&&(n.uniform1f(this.addr,t),e[0]=t)}function _0(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Le(e,t))return;n.uniform2fv(this.addr,t),De(e,t)}}function y0(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(n.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Le(e,t))return;n.uniform3fv(this.addr,t),De(e,t)}}function x0(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Le(e,t))return;n.uniform4fv(this.addr,t),De(e,t)}}function M0(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(Le(e,t))return;n.uniformMatrix2fv(this.addr,!1,t),De(e,t)}else{if(Le(e,i))return;Kc.set(i),n.uniformMatrix2fv(this.addr,!1,Kc),De(e,i)}}function b0(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(Le(e,t))return;n.uniformMatrix3fv(this.addr,!1,t),De(e,t)}else{if(Le(e,i))return;jc.set(i),n.uniformMatrix3fv(this.addr,!1,jc),De(e,i)}}function S0(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(Le(e,t))return;n.uniformMatrix4fv(this.addr,!1,t),De(e,t)}else{if(Le(e,i))return;qc.set(i),n.uniformMatrix4fv(this.addr,!1,qc),De(e,i)}}function E0(n,t){const e=this.cache;e[0]!==t&&(n.uniform1i(this.addr,t),e[0]=t)}function T0(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Le(e,t))return;n.uniform2iv(this.addr,t),De(e,t)}}function w0(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Le(e,t))return;n.uniform3iv(this.addr,t),De(e,t)}}function A0(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Le(e,t))return;n.uniform4iv(this.addr,t),De(e,t)}}function C0(n,t){const e=this.cache;e[0]!==t&&(n.uniform1ui(this.addr,t),e[0]=t)}function R0(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Le(e,t))return;n.uniform2uiv(this.addr,t),De(e,t)}}function P0(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Le(e,t))return;n.uniform3uiv(this.addr,t),De(e,t)}}function I0(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Le(e,t))return;n.uniform4uiv(this.addr,t),De(e,t)}}function L0(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let o;this.type===n.SAMPLER_2D_SHADOW?($c.compareFunction=gd,o=$c):o=Rd,e.setTexture2D(t||o,s)}function D0(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture3D(t||Id,s)}function N0(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTextureCube(t||Ld,s)}function U0(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture2DArray(t||Pd,s)}function B0(n){switch(n){case 5126:return v0;case 35664:return _0;case 35665:return y0;case 35666:return x0;case 35674:return M0;case 35675:return b0;case 35676:return S0;case 5124:case 35670:return E0;case 35667:case 35671:return T0;case 35668:case 35672:return w0;case 35669:case 35673:return A0;case 5125:return C0;case 36294:return R0;case 36295:return P0;case 36296:return I0;case 35678:case 36198:case 36298:case 36306:case 35682:return L0;case 35679:case 36299:case 36307:return D0;case 35680:case 36300:case 36308:case 36293:return N0;case 36289:case 36303:case 36311:case 36292:return U0}}function O0(n,t){n.uniform1fv(this.addr,t)}function k0(n,t){const e=As(t,this.size,2);n.uniform2fv(this.addr,e)}function F0(n,t){const e=As(t,this.size,3);n.uniform3fv(this.addr,e)}function z0(n,t){const e=As(t,this.size,4);n.uniform4fv(this.addr,e)}function H0(n,t){const e=As(t,this.size,4);n.uniformMatrix2fv(this.addr,!1,e)}function G0(n,t){const e=As(t,this.size,9);n.uniformMatrix3fv(this.addr,!1,e)}function V0(n,t){const e=As(t,this.size,16);n.uniformMatrix4fv(this.addr,!1,e)}function W0(n,t){n.uniform1iv(this.addr,t)}function $0(n,t){n.uniform2iv(this.addr,t)}function X0(n,t){n.uniform3iv(this.addr,t)}function Y0(n,t){n.uniform4iv(this.addr,t)}function q0(n,t){n.uniform1uiv(this.addr,t)}function j0(n,t){n.uniform2uiv(this.addr,t)}function K0(n,t){n.uniform3uiv(this.addr,t)}function Z0(n,t){n.uniform4uiv(this.addr,t)}function J0(n,t,e){const i=this.cache,s=t.length,o=Dr(e,s);Le(i,o)||(n.uniform1iv(this.addr,o),De(i,o));for(let r=0;r!==s;++r)e.setTexture2D(t[r]||Rd,o[r])}function Q0(n,t,e){const i=this.cache,s=t.length,o=Dr(e,s);Le(i,o)||(n.uniform1iv(this.addr,o),De(i,o));for(let r=0;r!==s;++r)e.setTexture3D(t[r]||Id,o[r])}function tv(n,t,e){const i=this.cache,s=t.length,o=Dr(e,s);Le(i,o)||(n.uniform1iv(this.addr,o),De(i,o));for(let r=0;r!==s;++r)e.setTextureCube(t[r]||Ld,o[r])}function ev(n,t,e){const i=this.cache,s=t.length,o=Dr(e,s);Le(i,o)||(n.uniform1iv(this.addr,o),De(i,o));for(let r=0;r!==s;++r)e.setTexture2DArray(t[r]||Pd,o[r])}function nv(n){switch(n){case 5126:return O0;case 35664:return k0;case 35665:return F0;case 35666:return z0;case 35674:return H0;case 35675:return G0;case 35676:return V0;case 5124:case 35670:return W0;case 35667:case 35671:return $0;case 35668:case 35672:return X0;case 35669:case 35673:return Y0;case 5125:return q0;case 36294:return j0;case 36295:return K0;case 36296:return Z0;case 35678:case 36198:case 36298:case 36306:case 35682:return J0;case 35679:case 36299:case 36307:return Q0;case 35680:case 36300:case 36308:case 36293:return tv;case 36289:case 36303:case 36311:case 36292:return ev}}class iv{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=B0(e.type)}}class sv{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=nv(e.type)}}class ov{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){const s=this.seq;for(let o=0,r=s.length;o!==r;++o){const a=s[o];a.setValue(t,e[a.id],i)}}}const ca=/(\w+)(\])?(\[|\.)?/g;function Zc(n,t){n.seq.push(t),n.map[t.id]=t}function rv(n,t,e){const i=n.name,s=i.length;for(ca.lastIndex=0;;){const o=ca.exec(i),r=ca.lastIndex;let a=o[1];const l=o[2]==="]",c=o[3];if(l&&(a=a|0),c===void 0||c==="["&&r+2===s){Zc(e,c===void 0?new iv(a,n,t):new sv(a,n,t));break}else{let d=e.map[a];d===void 0&&(d=new ov(a),Zc(e,d)),e=d}}}class dr{constructor(t,e){this.seq=[],this.map={};const i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){const o=t.getActiveUniform(e,s),r=t.getUniformLocation(e,o.name);rv(o,r,this)}}setValue(t,e,i,s){const o=this.map[e];o!==void 0&&o.setValue(t,i,s)}setOptional(t,e,i){const s=e[i];s!==void 0&&this.setValue(t,i,s)}static upload(t,e,i,s){for(let o=0,r=e.length;o!==r;++o){const a=e[o],l=i[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,s)}}static seqWithValue(t,e){const i=[];for(let s=0,o=t.length;s!==o;++s){const r=t[s];r.id in e&&i.push(r)}return i}}function Jc(n,t,e){const i=n.createShader(t);return n.shaderSource(i,e),n.compileShader(i),i}const av=37297;let lv=0;function cv(n,t){const e=n.split(`
`),i=[],s=Math.max(t-6,0),o=Math.min(t+6,e.length);for(let r=s;r<o;r++){const a=r+1;i.push(`${a===t?">":" "} ${a}: ${e[r]}`)}return i.join(`
`)}const Qc=new Kt;function hv(n){ne._getMatrix(Qc,ne.workingColorSpace,n);const t=`mat3( ${Qc.elements.map(e=>e.toFixed(4))} )`;switch(ne.getTransfer(n)){case Pr:return[t,"LinearTransferOETF"];case de:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[t,"LinearTransferOETF"]}}function th(n,t,e){const i=n.getShaderParameter(t,n.COMPILE_STATUS),s=n.getShaderInfoLog(t).trim();if(i&&s==="")return"";const o=/ERROR: 0:(\d+)/.exec(s);if(o){const r=parseInt(o[1]);return e.toUpperCase()+`

`+s+`

`+cv(n.getShaderSource(t),r)}else return s}function dv(n,t){const e=hv(t);return[`vec4 ${n}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function uv(n,t){let e;switch(t){case mf:e="Linear";break;case gf:e="Reinhard";break;case vf:e="Cineon";break;case id:e="ACESFilmic";break;case yf:e="AgX";break;case xf:e="Neutral";break;case _f:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+n+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const $o=new I;function fv(){ne.getLuminanceCoefficients($o);const n=$o.x.toFixed(4),t=$o.y.toFixed(4),e=$o.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function pv(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Zs).join(`
`)}function mv(n){const t=[];for(const e in n){const i=n[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function gv(n,t){const e={},i=n.getProgramParameter(t,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){const o=n.getActiveAttrib(t,s),r=o.name;let a=1;o.type===n.FLOAT_MAT2&&(a=2),o.type===n.FLOAT_MAT3&&(a=3),o.type===n.FLOAT_MAT4&&(a=4),e[r]={type:o.type,location:n.getAttribLocation(t,r),locationSize:a}}return e}function Zs(n){return n!==""}function eh(n,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function nh(n,t){return n.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const vv=/^[ \t]*#include +<([\w\d./]+)>/gm;function El(n){return n.replace(vv,yv)}const _v=new Map;function yv(n,t){let e=Zt[t];if(e===void 0){const i=_v.get(t);if(i!==void 0)e=Zt[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("Can not resolve #include <"+t+">")}return El(e)}const xv=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function ih(n){return n.replace(xv,Mv)}function Mv(n,t,e,i){let s="";for(let o=parseInt(t);o<parseInt(e);o++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+o+" ]").replace(/UNROLLED_LOOP_INDEX/g,o);return s}function sh(n){let t=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?t+=`
#define HIGH_PRECISION`:n.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function bv(n){let t="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===td?t="SHADOWMAP_TYPE_PCF":n.shadowMapType===ed?t="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===Fn&&(t="SHADOWMAP_TYPE_VSM"),t}function Sv(n){let t="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case ys:case xs:t="ENVMAP_TYPE_CUBE";break;case Rr:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Ev(n){let t="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case xs:t="ENVMAP_MODE_REFRACTION";break}return t}function Tv(n){let t="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case nd:t="ENVMAP_BLENDING_MULTIPLY";break;case ff:t="ENVMAP_BLENDING_MIX";break;case pf:t="ENVMAP_BLENDING_ADD";break}return t}function wv(n){const t=n.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:i,maxMip:e}}function Av(n,t,e,i){const s=n.getContext(),o=e.defines;let r=e.vertexShader,a=e.fragmentShader;const l=bv(e),c=Sv(e),h=Ev(e),d=Tv(e),u=wv(e),p=pv(e),v=mv(o),M=s.createProgram();let m,f,b=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,v].filter(Zs).join(`
`),m.length>0&&(m+=`
`),f=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,v].filter(Zs).join(`
`),f.length>0&&(f+=`
`)):(m=[sh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,v,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Zs).join(`
`),f=[sh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,v,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+d:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==li?"#define TONE_MAPPING":"",e.toneMapping!==li?Zt.tonemapping_pars_fragment:"",e.toneMapping!==li?uv("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Zt.colorspace_pars_fragment,dv("linearToOutputTexel",e.outputColorSpace),fv(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Zs).join(`
`)),r=El(r),r=eh(r,e),r=nh(r,e),a=El(a),a=eh(a,e),a=nh(a,e),r=ih(r),a=ih(a),e.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,f=["#define varying in",e.glslVersion===gc?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===gc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);const x=b+m+r,g=b+f+a,T=Jc(s,s.VERTEX_SHADER,x),A=Jc(s,s.FRAGMENT_SHADER,g);s.attachShader(M,T),s.attachShader(M,A),e.index0AttributeName!==void 0?s.bindAttribLocation(M,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(M,0,"position"),s.linkProgram(M);function w(R){if(n.debug.checkShaderErrors){const L=s.getProgramInfoLog(M).trim(),D=s.getShaderInfoLog(T).trim(),U=s.getShaderInfoLog(A).trim();let H=!0,V=!0;if(s.getProgramParameter(M,s.LINK_STATUS)===!1)if(H=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,M,T,A);else{const z=th(s,T,"vertex"),O=th(s,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(M,s.VALIDATE_STATUS)+`

Material Name: `+R.name+`
Material Type: `+R.type+`

Program Info Log: `+L+`
`+z+`
`+O)}else L!==""?console.warn("THREE.WebGLProgram: Program Info Log:",L):(D===""||U==="")&&(V=!1);V&&(R.diagnostics={runnable:H,programLog:L,vertexShader:{log:D,prefix:m},fragmentShader:{log:U,prefix:f}})}s.deleteShader(T),s.deleteShader(A),S=new dr(s,M),_=gv(s,M)}let S;this.getUniforms=function(){return S===void 0&&w(this),S};let _;this.getAttributes=function(){return _===void 0&&w(this),_};let y=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return y===!1&&(y=s.getProgramParameter(M,av)),y},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(M),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=lv++,this.cacheKey=t,this.usedTimes=1,this.program=M,this.vertexShader=T,this.fragmentShader=A,this}let Cv=0;class Rv{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,i=t.fragmentShader,s=this._getShaderStage(e),o=this._getShaderStage(i),r=this._getShaderCacheForMaterial(t);return r.has(s)===!1&&(r.add(s),s.usedTimes++),r.has(o)===!1&&(r.add(o),o.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){const e=this.shaderCache;let i=e.get(t);return i===void 0&&(i=new Pv(t),e.set(t,i)),i}}class Pv{constructor(t){this.id=Cv++,this.code=t,this.usedTimes=0}}function Iv(n,t,e,i,s,o,r){const a=new Vl,l=new Rv,c=new Set,h=[],d=s.logarithmicDepthBuffer,u=s.vertexTextures;let p=s.precision;const v={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function M(_){return c.add(_),_===0?"uv":`uv${_}`}function m(_,y,R,L,D){const U=L.fog,H=D.geometry,V=_.isMeshStandardMaterial?L.environment:null,z=(_.isMeshStandardMaterial?e:t).get(_.envMap||V),O=z&&z.mapping===Rr?z.image.height:null,X=v[_.type];_.precision!==null&&(p=s.getMaxPrecision(_.precision),p!==_.precision&&console.warn("THREE.WebGLProgram.getParameters:",_.precision,"not supported, using",p,"instead."));const J=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,q=J!==void 0?J.length:0;let gt=0;H.morphAttributes.position!==void 0&&(gt=1),H.morphAttributes.normal!==void 0&&(gt=2),H.morphAttributes.color!==void 0&&(gt=3);let K,F,nt,Mt;if(X){const te=Cn[X];K=te.vertexShader,F=te.fragmentShader}else K=_.vertexShader,F=_.fragmentShader,l.update(_),nt=l.getVertexShaderID(_),Mt=l.getFragmentShaderID(_);const lt=n.getRenderTarget(),Ct=n.state.buffers.depth.getReversed(),Pt=D.isInstancedMesh===!0,Ht=D.isBatchedMesh===!0,$t=!!_.map,pt=!!_.matcap,ht=!!z,N=!!_.aoMap,Bt=!!_.lightMap,Y=!!_.bumpMap,yt=!!_.normalMap,ut=!!_.displacementMap,Nt=!!_.emissiveMap,At=!!_.metalnessMap,P=!!_.roughnessMap,E=_.anisotropy>0,G=_.clearcoat>0,Z=_.dispersion>0,rt=_.iridescence>0,et=_.sheen>0,mt=_.transmission>0,at=E&&!!_.anisotropyMap,_t=G&&!!_.clearcoatMap,Ut=G&&!!_.clearcoatNormalMap,it=G&&!!_.clearcoatRoughnessMap,bt=rt&&!!_.iridescenceMap,ft=rt&&!!_.iridescenceThicknessMap,xt=et&&!!_.sheenColorMap,vt=et&&!!_.sheenRoughnessMap,Dt=!!_.specularMap,Vt=!!_.specularColorMap,ct=!!_.specularIntensityMap,k=mt&&!!_.transmissionMap,dt=mt&&!!_.thicknessMap,j=!!_.gradientMap,ot=!!_.alphaMap,Tt=_.alphaTest>0,wt=!!_.alphaHash,Yt=!!_.extensions;let oe=li;_.toneMapped&&(lt===null||lt.isXRRenderTarget===!0)&&(oe=n.toneMapping);const be={shaderID:X,shaderType:_.type,shaderName:_.name,vertexShader:K,fragmentShader:F,defines:_.defines,customVertexShaderID:nt,customFragmentShaderID:Mt,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:p,batching:Ht,batchingColor:Ht&&D._colorsTexture!==null,instancing:Pt,instancingColor:Pt&&D.instanceColor!==null,instancingMorph:Pt&&D.morphTexture!==null,supportsVertexTextures:u,outputColorSpace:lt===null?n.outputColorSpace:lt.isXRRenderTarget===!0?lt.texture.colorSpace:ws,alphaToCoverage:!!_.alphaToCoverage,map:$t,matcap:pt,envMap:ht,envMapMode:ht&&z.mapping,envMapCubeUVHeight:O,aoMap:N,lightMap:Bt,bumpMap:Y,normalMap:yt,displacementMap:u&&ut,emissiveMap:Nt,normalMapObjectSpace:yt&&_.normalMapType===Ef,normalMapTangentSpace:yt&&_.normalMapType===md,metalnessMap:At,roughnessMap:P,anisotropy:E,anisotropyMap:at,clearcoat:G,clearcoatMap:_t,clearcoatNormalMap:Ut,clearcoatRoughnessMap:it,dispersion:Z,iridescence:rt,iridescenceMap:bt,iridescenceThicknessMap:ft,sheen:et,sheenColorMap:xt,sheenRoughnessMap:vt,specularMap:Dt,specularColorMap:Vt,specularIntensityMap:ct,transmission:mt,transmissionMap:k,thicknessMap:dt,gradientMap:j,opaque:_.transparent===!1&&_.blending===cs&&_.alphaToCoverage===!1,alphaMap:ot,alphaTest:Tt,alphaHash:wt,combine:_.combine,mapUv:$t&&M(_.map.channel),aoMapUv:N&&M(_.aoMap.channel),lightMapUv:Bt&&M(_.lightMap.channel),bumpMapUv:Y&&M(_.bumpMap.channel),normalMapUv:yt&&M(_.normalMap.channel),displacementMapUv:ut&&M(_.displacementMap.channel),emissiveMapUv:Nt&&M(_.emissiveMap.channel),metalnessMapUv:At&&M(_.metalnessMap.channel),roughnessMapUv:P&&M(_.roughnessMap.channel),anisotropyMapUv:at&&M(_.anisotropyMap.channel),clearcoatMapUv:_t&&M(_.clearcoatMap.channel),clearcoatNormalMapUv:Ut&&M(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:it&&M(_.clearcoatRoughnessMap.channel),iridescenceMapUv:bt&&M(_.iridescenceMap.channel),iridescenceThicknessMapUv:ft&&M(_.iridescenceThicknessMap.channel),sheenColorMapUv:xt&&M(_.sheenColorMap.channel),sheenRoughnessMapUv:vt&&M(_.sheenRoughnessMap.channel),specularMapUv:Dt&&M(_.specularMap.channel),specularColorMapUv:Vt&&M(_.specularColorMap.channel),specularIntensityMapUv:ct&&M(_.specularIntensityMap.channel),transmissionMapUv:k&&M(_.transmissionMap.channel),thicknessMapUv:dt&&M(_.thicknessMap.channel),alphaMapUv:ot&&M(_.alphaMap.channel),vertexTangents:!!H.attributes.tangent&&(yt||E),vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,pointsUvs:D.isPoints===!0&&!!H.attributes.uv&&($t||ot),fog:!!U,useFog:_.fog===!0,fogExp2:!!U&&U.isFogExp2,flatShading:_.flatShading===!0,sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:d,reverseDepthBuffer:Ct,skinning:D.isSkinnedMesh===!0,morphTargets:H.morphAttributes.position!==void 0,morphNormals:H.morphAttributes.normal!==void 0,morphColors:H.morphAttributes.color!==void 0,morphTargetsCount:q,morphTextureStride:gt,numDirLights:y.directional.length,numPointLights:y.point.length,numSpotLights:y.spot.length,numSpotLightMaps:y.spotLightMap.length,numRectAreaLights:y.rectArea.length,numHemiLights:y.hemi.length,numDirLightShadows:y.directionalShadowMap.length,numPointLightShadows:y.pointShadowMap.length,numSpotLightShadows:y.spotShadowMap.length,numSpotLightShadowsWithMaps:y.numSpotLightShadowsWithMaps,numLightProbes:y.numLightProbes,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:_.dithering,shadowMapEnabled:n.shadowMap.enabled&&R.length>0,shadowMapType:n.shadowMap.type,toneMapping:oe,decodeVideoTexture:$t&&_.map.isVideoTexture===!0&&ne.getTransfer(_.map.colorSpace)===de,decodeVideoTextureEmissive:Nt&&_.emissiveMap.isVideoTexture===!0&&ne.getTransfer(_.emissiveMap.colorSpace)===de,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===sn,flipSided:_.side===Ze,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:Yt&&_.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Yt&&_.extensions.multiDraw===!0||Ht)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return be.vertexUv1s=c.has(1),be.vertexUv2s=c.has(2),be.vertexUv3s=c.has(3),c.clear(),be}function f(_){const y=[];if(_.shaderID?y.push(_.shaderID):(y.push(_.customVertexShaderID),y.push(_.customFragmentShaderID)),_.defines!==void 0)for(const R in _.defines)y.push(R),y.push(_.defines[R]);return _.isRawShaderMaterial===!1&&(b(y,_),x(y,_),y.push(n.outputColorSpace)),y.push(_.customProgramCacheKey),y.join()}function b(_,y){_.push(y.precision),_.push(y.outputColorSpace),_.push(y.envMapMode),_.push(y.envMapCubeUVHeight),_.push(y.mapUv),_.push(y.alphaMapUv),_.push(y.lightMapUv),_.push(y.aoMapUv),_.push(y.bumpMapUv),_.push(y.normalMapUv),_.push(y.displacementMapUv),_.push(y.emissiveMapUv),_.push(y.metalnessMapUv),_.push(y.roughnessMapUv),_.push(y.anisotropyMapUv),_.push(y.clearcoatMapUv),_.push(y.clearcoatNormalMapUv),_.push(y.clearcoatRoughnessMapUv),_.push(y.iridescenceMapUv),_.push(y.iridescenceThicknessMapUv),_.push(y.sheenColorMapUv),_.push(y.sheenRoughnessMapUv),_.push(y.specularMapUv),_.push(y.specularColorMapUv),_.push(y.specularIntensityMapUv),_.push(y.transmissionMapUv),_.push(y.thicknessMapUv),_.push(y.combine),_.push(y.fogExp2),_.push(y.sizeAttenuation),_.push(y.morphTargetsCount),_.push(y.morphAttributeCount),_.push(y.numDirLights),_.push(y.numPointLights),_.push(y.numSpotLights),_.push(y.numSpotLightMaps),_.push(y.numHemiLights),_.push(y.numRectAreaLights),_.push(y.numDirLightShadows),_.push(y.numPointLightShadows),_.push(y.numSpotLightShadows),_.push(y.numSpotLightShadowsWithMaps),_.push(y.numLightProbes),_.push(y.shadowMapType),_.push(y.toneMapping),_.push(y.numClippingPlanes),_.push(y.numClipIntersection),_.push(y.depthPacking)}function x(_,y){a.disableAll(),y.supportsVertexTextures&&a.enable(0),y.instancing&&a.enable(1),y.instancingColor&&a.enable(2),y.instancingMorph&&a.enable(3),y.matcap&&a.enable(4),y.envMap&&a.enable(5),y.normalMapObjectSpace&&a.enable(6),y.normalMapTangentSpace&&a.enable(7),y.clearcoat&&a.enable(8),y.iridescence&&a.enable(9),y.alphaTest&&a.enable(10),y.vertexColors&&a.enable(11),y.vertexAlphas&&a.enable(12),y.vertexUv1s&&a.enable(13),y.vertexUv2s&&a.enable(14),y.vertexUv3s&&a.enable(15),y.vertexTangents&&a.enable(16),y.anisotropy&&a.enable(17),y.alphaHash&&a.enable(18),y.batching&&a.enable(19),y.dispersion&&a.enable(20),y.batchingColor&&a.enable(21),_.push(a.mask),a.disableAll(),y.fog&&a.enable(0),y.useFog&&a.enable(1),y.flatShading&&a.enable(2),y.logarithmicDepthBuffer&&a.enable(3),y.reverseDepthBuffer&&a.enable(4),y.skinning&&a.enable(5),y.morphTargets&&a.enable(6),y.morphNormals&&a.enable(7),y.morphColors&&a.enable(8),y.premultipliedAlpha&&a.enable(9),y.shadowMapEnabled&&a.enable(10),y.doubleSided&&a.enable(11),y.flipSided&&a.enable(12),y.useDepthPacking&&a.enable(13),y.dithering&&a.enable(14),y.transmission&&a.enable(15),y.sheen&&a.enable(16),y.opaque&&a.enable(17),y.pointsUvs&&a.enable(18),y.decodeVideoTexture&&a.enable(19),y.decodeVideoTextureEmissive&&a.enable(20),y.alphaToCoverage&&a.enable(21),_.push(a.mask)}function g(_){const y=v[_.type];let R;if(y){const L=Cn[y];R=pp.clone(L.uniforms)}else R=_.uniforms;return R}function T(_,y){let R;for(let L=0,D=h.length;L<D;L++){const U=h[L];if(U.cacheKey===y){R=U,++R.usedTimes;break}}return R===void 0&&(R=new Av(n,y,_,o),h.push(R)),R}function A(_){if(--_.usedTimes===0){const y=h.indexOf(_);h[y]=h[h.length-1],h.pop(),_.destroy()}}function w(_){l.remove(_)}function S(){l.dispose()}return{getParameters:m,getProgramCacheKey:f,getUniforms:g,acquireProgram:T,releaseProgram:A,releaseShaderCache:w,programs:h,dispose:S}}function Lv(){let n=new WeakMap;function t(r){return n.has(r)}function e(r){let a=n.get(r);return a===void 0&&(a={},n.set(r,a)),a}function i(r){n.delete(r)}function s(r,a,l){n.get(r)[a]=l}function o(){n=new WeakMap}return{has:t,get:e,remove:i,update:s,dispose:o}}function Dv(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.material.id!==t.material.id?n.material.id-t.material.id:n.z!==t.z?n.z-t.z:n.id-t.id}function oh(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.z!==t.z?t.z-n.z:n.id-t.id}function rh(){const n=[];let t=0;const e=[],i=[],s=[];function o(){t=0,e.length=0,i.length=0,s.length=0}function r(d,u,p,v,M,m){let f=n[t];return f===void 0?(f={id:d.id,object:d,geometry:u,material:p,groupOrder:v,renderOrder:d.renderOrder,z:M,group:m},n[t]=f):(f.id=d.id,f.object=d,f.geometry=u,f.material=p,f.groupOrder=v,f.renderOrder=d.renderOrder,f.z=M,f.group=m),t++,f}function a(d,u,p,v,M,m){const f=r(d,u,p,v,M,m);p.transmission>0?i.push(f):p.transparent===!0?s.push(f):e.push(f)}function l(d,u,p,v,M,m){const f=r(d,u,p,v,M,m);p.transmission>0?i.unshift(f):p.transparent===!0?s.unshift(f):e.unshift(f)}function c(d,u){e.length>1&&e.sort(d||Dv),i.length>1&&i.sort(u||oh),s.length>1&&s.sort(u||oh)}function h(){for(let d=t,u=n.length;d<u;d++){const p=n[d];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:e,transmissive:i,transparent:s,init:o,push:a,unshift:l,finish:h,sort:c}}function Nv(){let n=new WeakMap;function t(i,s){const o=n.get(i);let r;return o===void 0?(r=new rh,n.set(i,[r])):s>=o.length?(r=new rh,o.push(r)):r=o[s],r}function e(){n=new WeakMap}return{get:t,dispose:e}}function Uv(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new I,color:new Gt};break;case"SpotLight":e={position:new I,direction:new I,color:new Gt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new I,color:new Gt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new I,skyColor:new Gt,groundColor:new Gt};break;case"RectAreaLight":e={color:new Gt,position:new I,halfWidth:new I,halfHeight:new I};break}return n[t.id]=e,e}}}function Bv(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Et};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Et};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Et,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[t.id]=e,e}}}let Ov=0;function kv(n,t){return(t.castShadow?2:0)-(n.castShadow?2:0)+(t.map?1:0)-(n.map?1:0)}function Fv(n){const t=new Uv,e=Bv(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new I);const s=new I,o=new me,r=new me;function a(c){let h=0,d=0,u=0;for(let _=0;_<9;_++)i.probe[_].set(0,0,0);let p=0,v=0,M=0,m=0,f=0,b=0,x=0,g=0,T=0,A=0,w=0;c.sort(kv);for(let _=0,y=c.length;_<y;_++){const R=c[_],L=R.color,D=R.intensity,U=R.distance,H=R.shadow&&R.shadow.map?R.shadow.map.texture:null;if(R.isAmbientLight)h+=L.r*D,d+=L.g*D,u+=L.b*D;else if(R.isLightProbe){for(let V=0;V<9;V++)i.probe[V].addScaledVector(R.sh.coefficients[V],D);w++}else if(R.isDirectionalLight){const V=t.get(R);if(V.color.copy(R.color).multiplyScalar(R.intensity),R.castShadow){const z=R.shadow,O=e.get(R);O.shadowIntensity=z.intensity,O.shadowBias=z.bias,O.shadowNormalBias=z.normalBias,O.shadowRadius=z.radius,O.shadowMapSize=z.mapSize,i.directionalShadow[p]=O,i.directionalShadowMap[p]=H,i.directionalShadowMatrix[p]=R.shadow.matrix,b++}i.directional[p]=V,p++}else if(R.isSpotLight){const V=t.get(R);V.position.setFromMatrixPosition(R.matrixWorld),V.color.copy(L).multiplyScalar(D),V.distance=U,V.coneCos=Math.cos(R.angle),V.penumbraCos=Math.cos(R.angle*(1-R.penumbra)),V.decay=R.decay,i.spot[M]=V;const z=R.shadow;if(R.map&&(i.spotLightMap[T]=R.map,T++,z.updateMatrices(R),R.castShadow&&A++),i.spotLightMatrix[M]=z.matrix,R.castShadow){const O=e.get(R);O.shadowIntensity=z.intensity,O.shadowBias=z.bias,O.shadowNormalBias=z.normalBias,O.shadowRadius=z.radius,O.shadowMapSize=z.mapSize,i.spotShadow[M]=O,i.spotShadowMap[M]=H,g++}M++}else if(R.isRectAreaLight){const V=t.get(R);V.color.copy(L).multiplyScalar(D),V.halfWidth.set(R.width*.5,0,0),V.halfHeight.set(0,R.height*.5,0),i.rectArea[m]=V,m++}else if(R.isPointLight){const V=t.get(R);if(V.color.copy(R.color).multiplyScalar(R.intensity),V.distance=R.distance,V.decay=R.decay,R.castShadow){const z=R.shadow,O=e.get(R);O.shadowIntensity=z.intensity,O.shadowBias=z.bias,O.shadowNormalBias=z.normalBias,O.shadowRadius=z.radius,O.shadowMapSize=z.mapSize,O.shadowCameraNear=z.camera.near,O.shadowCameraFar=z.camera.far,i.pointShadow[v]=O,i.pointShadowMap[v]=H,i.pointShadowMatrix[v]=R.shadow.matrix,x++}i.point[v]=V,v++}else if(R.isHemisphereLight){const V=t.get(R);V.skyColor.copy(R.color).multiplyScalar(D),V.groundColor.copy(R.groundColor).multiplyScalar(D),i.hemi[f]=V,f++}}m>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Rt.LTC_FLOAT_1,i.rectAreaLTC2=Rt.LTC_FLOAT_2):(i.rectAreaLTC1=Rt.LTC_HALF_1,i.rectAreaLTC2=Rt.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=d,i.ambient[2]=u;const S=i.hash;(S.directionalLength!==p||S.pointLength!==v||S.spotLength!==M||S.rectAreaLength!==m||S.hemiLength!==f||S.numDirectionalShadows!==b||S.numPointShadows!==x||S.numSpotShadows!==g||S.numSpotMaps!==T||S.numLightProbes!==w)&&(i.directional.length=p,i.spot.length=M,i.rectArea.length=m,i.point.length=v,i.hemi.length=f,i.directionalShadow.length=b,i.directionalShadowMap.length=b,i.pointShadow.length=x,i.pointShadowMap.length=x,i.spotShadow.length=g,i.spotShadowMap.length=g,i.directionalShadowMatrix.length=b,i.pointShadowMatrix.length=x,i.spotLightMatrix.length=g+T-A,i.spotLightMap.length=T,i.numSpotLightShadowsWithMaps=A,i.numLightProbes=w,S.directionalLength=p,S.pointLength=v,S.spotLength=M,S.rectAreaLength=m,S.hemiLength=f,S.numDirectionalShadows=b,S.numPointShadows=x,S.numSpotShadows=g,S.numSpotMaps=T,S.numLightProbes=w,i.version=Ov++)}function l(c,h){let d=0,u=0,p=0,v=0,M=0;const m=h.matrixWorldInverse;for(let f=0,b=c.length;f<b;f++){const x=c[f];if(x.isDirectionalLight){const g=i.directional[d];g.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),g.direction.sub(s),g.direction.transformDirection(m),d++}else if(x.isSpotLight){const g=i.spot[p];g.position.setFromMatrixPosition(x.matrixWorld),g.position.applyMatrix4(m),g.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),g.direction.sub(s),g.direction.transformDirection(m),p++}else if(x.isRectAreaLight){const g=i.rectArea[v];g.position.setFromMatrixPosition(x.matrixWorld),g.position.applyMatrix4(m),r.identity(),o.copy(x.matrixWorld),o.premultiply(m),r.extractRotation(o),g.halfWidth.set(x.width*.5,0,0),g.halfHeight.set(0,x.height*.5,0),g.halfWidth.applyMatrix4(r),g.halfHeight.applyMatrix4(r),v++}else if(x.isPointLight){const g=i.point[u];g.position.setFromMatrixPosition(x.matrixWorld),g.position.applyMatrix4(m),u++}else if(x.isHemisphereLight){const g=i.hemi[M];g.direction.setFromMatrixPosition(x.matrixWorld),g.direction.transformDirection(m),M++}}}return{setup:a,setupView:l,state:i}}function ah(n){const t=new Fv(n),e=[],i=[];function s(h){c.camera=h,e.length=0,i.length=0}function o(h){e.push(h)}function r(h){i.push(h)}function a(){t.setup(e)}function l(h){t.setupView(e,h)}const c={lightsArray:e,shadowsArray:i,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:a,setupLightsView:l,pushLight:o,pushShadow:r}}function zv(n){let t=new WeakMap;function e(s,o=0){const r=t.get(s);let a;return r===void 0?(a=new ah(n),t.set(s,[a])):o>=r.length?(a=new ah(n),r.push(a)):a=r[o],a}function i(){t=new WeakMap}return{get:e,dispose:i}}class Hv extends Ni{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=bf,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class Gv extends Ni{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const Vv=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Wv=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function $v(n,t,e){let i=new Wl;const s=new Et,o=new Et,r=new pe,a=new Hv({depthPacking:Sf}),l=new Gv,c={},h=e.maxTextureSize,d={[ci]:Ze,[Ze]:ci,[sn]:sn},u=new hi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Et},radius:{value:4}},vertexShader:Vv,fragmentShader:Wv}),p=u.clone();p.defines.HORIZONTAL_PASS=1;const v=new ze;v.setAttribute("position",new dn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const M=new B(v,u),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=td;let f=this.type;this.render=function(A,w,S){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||A.length===0)return;const _=n.getRenderTarget(),y=n.getActiveCubeFace(),R=n.getActiveMipmapLevel(),L=n.state;L.setBlending(ai),L.buffers.color.setClear(1,1,1,1),L.buffers.depth.setTest(!0),L.setScissorTest(!1);const D=f!==Fn&&this.type===Fn,U=f===Fn&&this.type!==Fn;for(let H=0,V=A.length;H<V;H++){const z=A[H],O=z.shadow;if(O===void 0){console.warn("THREE.WebGLShadowMap:",z,"has no shadow.");continue}if(O.autoUpdate===!1&&O.needsUpdate===!1)continue;s.copy(O.mapSize);const X=O.getFrameExtents();if(s.multiply(X),o.copy(O.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(o.x=Math.floor(h/X.x),s.x=o.x*X.x,O.mapSize.x=o.x),s.y>h&&(o.y=Math.floor(h/X.y),s.y=o.y*X.y,O.mapSize.y=o.y)),O.map===null||D===!0||U===!0){const q=this.type!==Fn?{minFilter:Tn,magFilter:Tn}:{};O.map!==null&&O.map.dispose(),O.map=new Pi(s.x,s.y,q),O.map.texture.name=z.name+".shadowMap",O.camera.updateProjectionMatrix()}n.setRenderTarget(O.map),n.clear();const J=O.getViewportCount();for(let q=0;q<J;q++){const gt=O.getViewport(q);r.set(o.x*gt.x,o.y*gt.y,o.x*gt.z,o.y*gt.w),L.viewport(r),O.updateMatrices(z,q),i=O.getFrustum(),g(w,S,O.camera,z,this.type)}O.isPointLightShadow!==!0&&this.type===Fn&&b(O,S),O.needsUpdate=!1}f=this.type,m.needsUpdate=!1,n.setRenderTarget(_,y,R)};function b(A,w){const S=t.update(M);u.defines.VSM_SAMPLES!==A.blurSamples&&(u.defines.VSM_SAMPLES=A.blurSamples,p.defines.VSM_SAMPLES=A.blurSamples,u.needsUpdate=!0,p.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new Pi(s.x,s.y)),u.uniforms.shadow_pass.value=A.map.texture,u.uniforms.resolution.value=A.mapSize,u.uniforms.radius.value=A.radius,n.setRenderTarget(A.mapPass),n.clear(),n.renderBufferDirect(w,null,S,u,M,null),p.uniforms.shadow_pass.value=A.mapPass.texture,p.uniforms.resolution.value=A.mapSize,p.uniforms.radius.value=A.radius,n.setRenderTarget(A.map),n.clear(),n.renderBufferDirect(w,null,S,p,M,null)}function x(A,w,S,_){let y=null;const R=S.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(R!==void 0)y=R;else if(y=S.isPointLight===!0?l:a,n.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0){const L=y.uuid,D=w.uuid;let U=c[L];U===void 0&&(U={},c[L]=U);let H=U[D];H===void 0&&(H=y.clone(),U[D]=H,w.addEventListener("dispose",T)),y=H}if(y.visible=w.visible,y.wireframe=w.wireframe,_===Fn?y.side=w.shadowSide!==null?w.shadowSide:w.side:y.side=w.shadowSide!==null?w.shadowSide:d[w.side],y.alphaMap=w.alphaMap,y.alphaTest=w.alphaTest,y.map=w.map,y.clipShadows=w.clipShadows,y.clippingPlanes=w.clippingPlanes,y.clipIntersection=w.clipIntersection,y.displacementMap=w.displacementMap,y.displacementScale=w.displacementScale,y.displacementBias=w.displacementBias,y.wireframeLinewidth=w.wireframeLinewidth,y.linewidth=w.linewidth,S.isPointLight===!0&&y.isMeshDistanceMaterial===!0){const L=n.properties.get(y);L.light=S}return y}function g(A,w,S,_,y){if(A.visible===!1)return;if(A.layers.test(w.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&y===Fn)&&(!A.frustumCulled||i.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(S.matrixWorldInverse,A.matrixWorld);const D=t.update(A),U=A.material;if(Array.isArray(U)){const H=D.groups;for(let V=0,z=H.length;V<z;V++){const O=H[V],X=U[O.materialIndex];if(X&&X.visible){const J=x(A,X,_,y);A.onBeforeShadow(n,A,w,S,D,J,O),n.renderBufferDirect(S,null,D,J,A,O),A.onAfterShadow(n,A,w,S,D,J,O)}}}else if(U.visible){const H=x(A,U,_,y);A.onBeforeShadow(n,A,w,S,D,H,null),n.renderBufferDirect(S,null,D,H,A,null),A.onAfterShadow(n,A,w,S,D,H,null)}}const L=A.children;for(let D=0,U=L.length;D<U;D++)g(L[D],w,S,_,y)}function T(A){A.target.removeEventListener("dispose",T);for(const S in c){const _=c[S],y=A.target.uuid;y in _&&(_[y].dispose(),delete _[y])}}}const Xv={[Ha]:Ga,[Va]:Xa,[Wa]:Ya,[_s]:$a,[Ga]:Ha,[Xa]:Va,[Ya]:Wa,[$a]:_s};function Yv(n,t){function e(){let k=!1;const dt=new pe;let j=null;const ot=new pe(0,0,0,0);return{setMask:function(Tt){j!==Tt&&!k&&(n.colorMask(Tt,Tt,Tt,Tt),j=Tt)},setLocked:function(Tt){k=Tt},setClear:function(Tt,wt,Yt,oe,be){be===!0&&(Tt*=oe,wt*=oe,Yt*=oe),dt.set(Tt,wt,Yt,oe),ot.equals(dt)===!1&&(n.clearColor(Tt,wt,Yt,oe),ot.copy(dt))},reset:function(){k=!1,j=null,ot.set(-1,0,0,0)}}}function i(){let k=!1,dt=!1,j=null,ot=null,Tt=null;return{setReversed:function(wt){if(dt!==wt){const Yt=t.get("EXT_clip_control");dt?Yt.clipControlEXT(Yt.LOWER_LEFT_EXT,Yt.ZERO_TO_ONE_EXT):Yt.clipControlEXT(Yt.LOWER_LEFT_EXT,Yt.NEGATIVE_ONE_TO_ONE_EXT);const oe=Tt;Tt=null,this.setClear(oe)}dt=wt},getReversed:function(){return dt},setTest:function(wt){wt?lt(n.DEPTH_TEST):Ct(n.DEPTH_TEST)},setMask:function(wt){j!==wt&&!k&&(n.depthMask(wt),j=wt)},setFunc:function(wt){if(dt&&(wt=Xv[wt]),ot!==wt){switch(wt){case Ha:n.depthFunc(n.NEVER);break;case Ga:n.depthFunc(n.ALWAYS);break;case Va:n.depthFunc(n.LESS);break;case _s:n.depthFunc(n.LEQUAL);break;case Wa:n.depthFunc(n.EQUAL);break;case $a:n.depthFunc(n.GEQUAL);break;case Xa:n.depthFunc(n.GREATER);break;case Ya:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}ot=wt}},setLocked:function(wt){k=wt},setClear:function(wt){Tt!==wt&&(dt&&(wt=1-wt),n.clearDepth(wt),Tt=wt)},reset:function(){k=!1,j=null,ot=null,Tt=null,dt=!1}}}function s(){let k=!1,dt=null,j=null,ot=null,Tt=null,wt=null,Yt=null,oe=null,be=null;return{setTest:function(te){k||(te?lt(n.STENCIL_TEST):Ct(n.STENCIL_TEST))},setMask:function(te){dt!==te&&!k&&(n.stencilMask(te),dt=te)},setFunc:function(te,Be,pn){(j!==te||ot!==Be||Tt!==pn)&&(n.stencilFunc(te,Be,pn),j=te,ot=Be,Tt=pn)},setOp:function(te,Be,pn){(wt!==te||Yt!==Be||oe!==pn)&&(n.stencilOp(te,Be,pn),wt=te,Yt=Be,oe=pn)},setLocked:function(te){k=te},setClear:function(te){be!==te&&(n.clearStencil(te),be=te)},reset:function(){k=!1,dt=null,j=null,ot=null,Tt=null,wt=null,Yt=null,oe=null,be=null}}}const o=new e,r=new i,a=new s,l=new WeakMap,c=new WeakMap;let h={},d={},u=new WeakMap,p=[],v=null,M=!1,m=null,f=null,b=null,x=null,g=null,T=null,A=null,w=new Gt(0,0,0),S=0,_=!1,y=null,R=null,L=null,D=null,U=null;const H=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let V=!1,z=0;const O=n.getParameter(n.VERSION);O.indexOf("WebGL")!==-1?(z=parseFloat(/^WebGL (\d)/.exec(O)[1]),V=z>=1):O.indexOf("OpenGL ES")!==-1&&(z=parseFloat(/^OpenGL ES (\d)/.exec(O)[1]),V=z>=2);let X=null,J={};const q=n.getParameter(n.SCISSOR_BOX),gt=n.getParameter(n.VIEWPORT),K=new pe().fromArray(q),F=new pe().fromArray(gt);function nt(k,dt,j,ot){const Tt=new Uint8Array(4),wt=n.createTexture();n.bindTexture(k,wt),n.texParameteri(k,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(k,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Yt=0;Yt<j;Yt++)k===n.TEXTURE_3D||k===n.TEXTURE_2D_ARRAY?n.texImage3D(dt,0,n.RGBA,1,1,ot,0,n.RGBA,n.UNSIGNED_BYTE,Tt):n.texImage2D(dt+Yt,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,Tt);return wt}const Mt={};Mt[n.TEXTURE_2D]=nt(n.TEXTURE_2D,n.TEXTURE_2D,1),Mt[n.TEXTURE_CUBE_MAP]=nt(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),Mt[n.TEXTURE_2D_ARRAY]=nt(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),Mt[n.TEXTURE_3D]=nt(n.TEXTURE_3D,n.TEXTURE_3D,1,1),o.setClear(0,0,0,1),r.setClear(1),a.setClear(0),lt(n.DEPTH_TEST),r.setFunc(_s),Y(!1),yt(uc),lt(n.CULL_FACE),N(ai);function lt(k){h[k]!==!0&&(n.enable(k),h[k]=!0)}function Ct(k){h[k]!==!1&&(n.disable(k),h[k]=!1)}function Pt(k,dt){return d[k]!==dt?(n.bindFramebuffer(k,dt),d[k]=dt,k===n.DRAW_FRAMEBUFFER&&(d[n.FRAMEBUFFER]=dt),k===n.FRAMEBUFFER&&(d[n.DRAW_FRAMEBUFFER]=dt),!0):!1}function Ht(k,dt){let j=p,ot=!1;if(k){j=u.get(dt),j===void 0&&(j=[],u.set(dt,j));const Tt=k.textures;if(j.length!==Tt.length||j[0]!==n.COLOR_ATTACHMENT0){for(let wt=0,Yt=Tt.length;wt<Yt;wt++)j[wt]=n.COLOR_ATTACHMENT0+wt;j.length=Tt.length,ot=!0}}else j[0]!==n.BACK&&(j[0]=n.BACK,ot=!0);ot&&n.drawBuffers(j)}function $t(k){return v!==k?(n.useProgram(k),v=k,!0):!1}const pt={[bi]:n.FUNC_ADD,[ju]:n.FUNC_SUBTRACT,[Ku]:n.FUNC_REVERSE_SUBTRACT};pt[Zu]=n.MIN,pt[Ju]=n.MAX;const ht={[Qu]:n.ZERO,[tf]:n.ONE,[ef]:n.SRC_COLOR,[Fa]:n.SRC_ALPHA,[lf]:n.SRC_ALPHA_SATURATE,[rf]:n.DST_COLOR,[sf]:n.DST_ALPHA,[nf]:n.ONE_MINUS_SRC_COLOR,[za]:n.ONE_MINUS_SRC_ALPHA,[af]:n.ONE_MINUS_DST_COLOR,[of]:n.ONE_MINUS_DST_ALPHA,[cf]:n.CONSTANT_COLOR,[hf]:n.ONE_MINUS_CONSTANT_COLOR,[df]:n.CONSTANT_ALPHA,[uf]:n.ONE_MINUS_CONSTANT_ALPHA};function N(k,dt,j,ot,Tt,wt,Yt,oe,be,te){if(k===ai){M===!0&&(Ct(n.BLEND),M=!1);return}if(M===!1&&(lt(n.BLEND),M=!0),k!==qu){if(k!==m||te!==_){if((f!==bi||g!==bi)&&(n.blendEquation(n.FUNC_ADD),f=bi,g=bi),te)switch(k){case cs:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case ka:n.blendFunc(n.ONE,n.ONE);break;case fc:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case pc:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",k);break}else switch(k){case cs:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case ka:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case fc:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case pc:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",k);break}b=null,x=null,T=null,A=null,w.set(0,0,0),S=0,m=k,_=te}return}Tt=Tt||dt,wt=wt||j,Yt=Yt||ot,(dt!==f||Tt!==g)&&(n.blendEquationSeparate(pt[dt],pt[Tt]),f=dt,g=Tt),(j!==b||ot!==x||wt!==T||Yt!==A)&&(n.blendFuncSeparate(ht[j],ht[ot],ht[wt],ht[Yt]),b=j,x=ot,T=wt,A=Yt),(oe.equals(w)===!1||be!==S)&&(n.blendColor(oe.r,oe.g,oe.b,be),w.copy(oe),S=be),m=k,_=!1}function Bt(k,dt){k.side===sn?Ct(n.CULL_FACE):lt(n.CULL_FACE);let j=k.side===Ze;dt&&(j=!j),Y(j),k.blending===cs&&k.transparent===!1?N(ai):N(k.blending,k.blendEquation,k.blendSrc,k.blendDst,k.blendEquationAlpha,k.blendSrcAlpha,k.blendDstAlpha,k.blendColor,k.blendAlpha,k.premultipliedAlpha),r.setFunc(k.depthFunc),r.setTest(k.depthTest),r.setMask(k.depthWrite),o.setMask(k.colorWrite);const ot=k.stencilWrite;a.setTest(ot),ot&&(a.setMask(k.stencilWriteMask),a.setFunc(k.stencilFunc,k.stencilRef,k.stencilFuncMask),a.setOp(k.stencilFail,k.stencilZFail,k.stencilZPass)),Nt(k.polygonOffset,k.polygonOffsetFactor,k.polygonOffsetUnits),k.alphaToCoverage===!0?lt(n.SAMPLE_ALPHA_TO_COVERAGE):Ct(n.SAMPLE_ALPHA_TO_COVERAGE)}function Y(k){y!==k&&(k?n.frontFace(n.CW):n.frontFace(n.CCW),y=k)}function yt(k){k!==Xu?(lt(n.CULL_FACE),k!==R&&(k===uc?n.cullFace(n.BACK):k===Yu?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Ct(n.CULL_FACE),R=k}function ut(k){k!==L&&(V&&n.lineWidth(k),L=k)}function Nt(k,dt,j){k?(lt(n.POLYGON_OFFSET_FILL),(D!==dt||U!==j)&&(n.polygonOffset(dt,j),D=dt,U=j)):Ct(n.POLYGON_OFFSET_FILL)}function At(k){k?lt(n.SCISSOR_TEST):Ct(n.SCISSOR_TEST)}function P(k){k===void 0&&(k=n.TEXTURE0+H-1),X!==k&&(n.activeTexture(k),X=k)}function E(k,dt,j){j===void 0&&(X===null?j=n.TEXTURE0+H-1:j=X);let ot=J[j];ot===void 0&&(ot={type:void 0,texture:void 0},J[j]=ot),(ot.type!==k||ot.texture!==dt)&&(X!==j&&(n.activeTexture(j),X=j),n.bindTexture(k,dt||Mt[k]),ot.type=k,ot.texture=dt)}function G(){const k=J[X];k!==void 0&&k.type!==void 0&&(n.bindTexture(k.type,null),k.type=void 0,k.texture=void 0)}function Z(){try{n.compressedTexImage2D.apply(n,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function rt(){try{n.compressedTexImage3D.apply(n,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function et(){try{n.texSubImage2D.apply(n,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function mt(){try{n.texSubImage3D.apply(n,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function at(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function _t(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Ut(){try{n.texStorage2D.apply(n,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function it(){try{n.texStorage3D.apply(n,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function bt(){try{n.texImage2D.apply(n,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function ft(){try{n.texImage3D.apply(n,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function xt(k){K.equals(k)===!1&&(n.scissor(k.x,k.y,k.z,k.w),K.copy(k))}function vt(k){F.equals(k)===!1&&(n.viewport(k.x,k.y,k.z,k.w),F.copy(k))}function Dt(k,dt){let j=c.get(dt);j===void 0&&(j=new WeakMap,c.set(dt,j));let ot=j.get(k);ot===void 0&&(ot=n.getUniformBlockIndex(dt,k.name),j.set(k,ot))}function Vt(k,dt){const ot=c.get(dt).get(k);l.get(dt)!==ot&&(n.uniformBlockBinding(dt,ot,k.__bindingPointIndex),l.set(dt,ot))}function ct(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),r.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),h={},X=null,J={},d={},u=new WeakMap,p=[],v=null,M=!1,m=null,f=null,b=null,x=null,g=null,T=null,A=null,w=new Gt(0,0,0),S=0,_=!1,y=null,R=null,L=null,D=null,U=null,K.set(0,0,n.canvas.width,n.canvas.height),F.set(0,0,n.canvas.width,n.canvas.height),o.reset(),r.reset(),a.reset()}return{buffers:{color:o,depth:r,stencil:a},enable:lt,disable:Ct,bindFramebuffer:Pt,drawBuffers:Ht,useProgram:$t,setBlending:N,setMaterial:Bt,setFlipSided:Y,setCullFace:yt,setLineWidth:ut,setPolygonOffset:Nt,setScissorTest:At,activeTexture:P,bindTexture:E,unbindTexture:G,compressedTexImage2D:Z,compressedTexImage3D:rt,texImage2D:bt,texImage3D:ft,updateUBOMapping:Dt,uniformBlockBinding:Vt,texStorage2D:Ut,texStorage3D:it,texSubImage2D:et,texSubImage3D:mt,compressedTexSubImage2D:at,compressedTexSubImage3D:_t,scissor:xt,viewport:vt,reset:ct}}function lh(n,t,e,i){const s=qv(i);switch(e){case ld:return n*t;case hd:return n*t;case dd:return n*t*2;case ud:return n*t/s.components*s.byteLength;case Fl:return n*t/s.components*s.byteLength;case fd:return n*t*2/s.components*s.byteLength;case zl:return n*t*2/s.components*s.byteLength;case cd:return n*t*3/s.components*s.byteLength;case En:return n*t*4/s.components*s.byteLength;case Hl:return n*t*4/s.components*s.byteLength;case rr:case ar:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case lr:case cr:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Ja:case tl:return Math.max(n,16)*Math.max(t,8)/4;case Za:case Qa:return Math.max(n,8)*Math.max(t,8)/2;case el:case nl:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case il:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case sl:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case ol:return Math.floor((n+4)/5)*Math.floor((t+3)/4)*16;case rl:return Math.floor((n+4)/5)*Math.floor((t+4)/5)*16;case al:return Math.floor((n+5)/6)*Math.floor((t+4)/5)*16;case ll:return Math.floor((n+5)/6)*Math.floor((t+5)/6)*16;case cl:return Math.floor((n+7)/8)*Math.floor((t+4)/5)*16;case hl:return Math.floor((n+7)/8)*Math.floor((t+5)/6)*16;case dl:return Math.floor((n+7)/8)*Math.floor((t+7)/8)*16;case ul:return Math.floor((n+9)/10)*Math.floor((t+4)/5)*16;case fl:return Math.floor((n+9)/10)*Math.floor((t+5)/6)*16;case pl:return Math.floor((n+9)/10)*Math.floor((t+7)/8)*16;case ml:return Math.floor((n+9)/10)*Math.floor((t+9)/10)*16;case gl:return Math.floor((n+11)/12)*Math.floor((t+9)/10)*16;case vl:return Math.floor((n+11)/12)*Math.floor((t+11)/12)*16;case hr:case _l:case yl:return Math.ceil(n/4)*Math.ceil(t/4)*16;case pd:case xl:return Math.ceil(n/4)*Math.ceil(t/4)*8;case Ml:case bl:return Math.ceil(n/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function qv(n){switch(n){case Wn:case od:return{byteLength:1,components:1};case ro:case rd:case ho:return{byteLength:2,components:1};case Ol:case kl:return{byteLength:2,components:4};case Ri:case Bl:case zn:return{byteLength:4,components:1};case ad:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}function jv(n,t,e,i,s,o,r){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Et,h=new WeakMap;let d;const u=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(P,E){return p?new OffscreenCanvas(P,E):mr("canvas")}function M(P,E,G){let Z=1;const rt=At(P);if((rt.width>G||rt.height>G)&&(Z=G/Math.max(rt.width,rt.height)),Z<1)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap||typeof VideoFrame<"u"&&P instanceof VideoFrame){const et=Math.floor(Z*rt.width),mt=Math.floor(Z*rt.height);d===void 0&&(d=v(et,mt));const at=E?v(et,mt):d;return at.width=et,at.height=mt,at.getContext("2d").drawImage(P,0,0,et,mt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+rt.width+"x"+rt.height+") to ("+et+"x"+mt+")."),at}else return"data"in P&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+rt.width+"x"+rt.height+")."),P;return P}function m(P){return P.generateMipmaps}function f(P){n.generateMipmap(P)}function b(P){return P.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:P.isWebGL3DRenderTarget?n.TEXTURE_3D:P.isWebGLArrayRenderTarget||P.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function x(P,E,G,Z,rt=!1){if(P!==null){if(n[P]!==void 0)return n[P];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let et=E;if(E===n.RED&&(G===n.FLOAT&&(et=n.R32F),G===n.HALF_FLOAT&&(et=n.R16F),G===n.UNSIGNED_BYTE&&(et=n.R8)),E===n.RED_INTEGER&&(G===n.UNSIGNED_BYTE&&(et=n.R8UI),G===n.UNSIGNED_SHORT&&(et=n.R16UI),G===n.UNSIGNED_INT&&(et=n.R32UI),G===n.BYTE&&(et=n.R8I),G===n.SHORT&&(et=n.R16I),G===n.INT&&(et=n.R32I)),E===n.RG&&(G===n.FLOAT&&(et=n.RG32F),G===n.HALF_FLOAT&&(et=n.RG16F),G===n.UNSIGNED_BYTE&&(et=n.RG8)),E===n.RG_INTEGER&&(G===n.UNSIGNED_BYTE&&(et=n.RG8UI),G===n.UNSIGNED_SHORT&&(et=n.RG16UI),G===n.UNSIGNED_INT&&(et=n.RG32UI),G===n.BYTE&&(et=n.RG8I),G===n.SHORT&&(et=n.RG16I),G===n.INT&&(et=n.RG32I)),E===n.RGB_INTEGER&&(G===n.UNSIGNED_BYTE&&(et=n.RGB8UI),G===n.UNSIGNED_SHORT&&(et=n.RGB16UI),G===n.UNSIGNED_INT&&(et=n.RGB32UI),G===n.BYTE&&(et=n.RGB8I),G===n.SHORT&&(et=n.RGB16I),G===n.INT&&(et=n.RGB32I)),E===n.RGBA_INTEGER&&(G===n.UNSIGNED_BYTE&&(et=n.RGBA8UI),G===n.UNSIGNED_SHORT&&(et=n.RGBA16UI),G===n.UNSIGNED_INT&&(et=n.RGBA32UI),G===n.BYTE&&(et=n.RGBA8I),G===n.SHORT&&(et=n.RGBA16I),G===n.INT&&(et=n.RGBA32I)),E===n.RGB&&G===n.UNSIGNED_INT_5_9_9_9_REV&&(et=n.RGB9_E5),E===n.RGBA){const mt=rt?Pr:ne.getTransfer(Z);G===n.FLOAT&&(et=n.RGBA32F),G===n.HALF_FLOAT&&(et=n.RGBA16F),G===n.UNSIGNED_BYTE&&(et=mt===de?n.SRGB8_ALPHA8:n.RGBA8),G===n.UNSIGNED_SHORT_4_4_4_4&&(et=n.RGBA4),G===n.UNSIGNED_SHORT_5_5_5_1&&(et=n.RGB5_A1)}return(et===n.R16F||et===n.R32F||et===n.RG16F||et===n.RG32F||et===n.RGBA16F||et===n.RGBA32F)&&t.get("EXT_color_buffer_float"),et}function g(P,E){let G;return P?E===null||E===Ri||E===Ms?G=n.DEPTH24_STENCIL8:E===zn?G=n.DEPTH32F_STENCIL8:E===ro&&(G=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===Ri||E===Ms?G=n.DEPTH_COMPONENT24:E===zn?G=n.DEPTH_COMPONENT32F:E===ro&&(G=n.DEPTH_COMPONENT16),G}function T(P,E){return m(P)===!0||P.isFramebufferTexture&&P.minFilter!==Tn&&P.minFilter!==Pn?Math.log2(Math.max(E.width,E.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?E.mipmaps.length:1}function A(P){const E=P.target;E.removeEventListener("dispose",A),S(E),E.isVideoTexture&&h.delete(E)}function w(P){const E=P.target;E.removeEventListener("dispose",w),y(E)}function S(P){const E=i.get(P);if(E.__webglInit===void 0)return;const G=P.source,Z=u.get(G);if(Z){const rt=Z[E.__cacheKey];rt.usedTimes--,rt.usedTimes===0&&_(P),Object.keys(Z).length===0&&u.delete(G)}i.remove(P)}function _(P){const E=i.get(P);n.deleteTexture(E.__webglTexture);const G=P.source,Z=u.get(G);delete Z[E.__cacheKey],r.memory.textures--}function y(P){const E=i.get(P);if(P.depthTexture&&(P.depthTexture.dispose(),i.remove(P.depthTexture)),P.isWebGLCubeRenderTarget)for(let Z=0;Z<6;Z++){if(Array.isArray(E.__webglFramebuffer[Z]))for(let rt=0;rt<E.__webglFramebuffer[Z].length;rt++)n.deleteFramebuffer(E.__webglFramebuffer[Z][rt]);else n.deleteFramebuffer(E.__webglFramebuffer[Z]);E.__webglDepthbuffer&&n.deleteRenderbuffer(E.__webglDepthbuffer[Z])}else{if(Array.isArray(E.__webglFramebuffer))for(let Z=0;Z<E.__webglFramebuffer.length;Z++)n.deleteFramebuffer(E.__webglFramebuffer[Z]);else n.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&n.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&n.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let Z=0;Z<E.__webglColorRenderbuffer.length;Z++)E.__webglColorRenderbuffer[Z]&&n.deleteRenderbuffer(E.__webglColorRenderbuffer[Z]);E.__webglDepthRenderbuffer&&n.deleteRenderbuffer(E.__webglDepthRenderbuffer)}const G=P.textures;for(let Z=0,rt=G.length;Z<rt;Z++){const et=i.get(G[Z]);et.__webglTexture&&(n.deleteTexture(et.__webglTexture),r.memory.textures--),i.remove(G[Z])}i.remove(P)}let R=0;function L(){R=0}function D(){const P=R;return P>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+P+" texture units while this GPU supports only "+s.maxTextures),R+=1,P}function U(P){const E=[];return E.push(P.wrapS),E.push(P.wrapT),E.push(P.wrapR||0),E.push(P.magFilter),E.push(P.minFilter),E.push(P.anisotropy),E.push(P.internalFormat),E.push(P.format),E.push(P.type),E.push(P.generateMipmaps),E.push(P.premultiplyAlpha),E.push(P.flipY),E.push(P.unpackAlignment),E.push(P.colorSpace),E.join()}function H(P,E){const G=i.get(P);if(P.isVideoTexture&&ut(P),P.isRenderTargetTexture===!1&&P.version>0&&G.__version!==P.version){const Z=P.image;if(Z===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Z.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{F(G,P,E);return}}e.bindTexture(n.TEXTURE_2D,G.__webglTexture,n.TEXTURE0+E)}function V(P,E){const G=i.get(P);if(P.version>0&&G.__version!==P.version){F(G,P,E);return}e.bindTexture(n.TEXTURE_2D_ARRAY,G.__webglTexture,n.TEXTURE0+E)}function z(P,E){const G=i.get(P);if(P.version>0&&G.__version!==P.version){F(G,P,E);return}e.bindTexture(n.TEXTURE_3D,G.__webglTexture,n.TEXTURE0+E)}function O(P,E){const G=i.get(P);if(P.version>0&&G.__version!==P.version){nt(G,P,E);return}e.bindTexture(n.TEXTURE_CUBE_MAP,G.__webglTexture,n.TEXTURE0+E)}const X={[on]:n.REPEAT,[wi]:n.CLAMP_TO_EDGE,[Ka]:n.MIRRORED_REPEAT},J={[Tn]:n.NEAREST,[Mf]:n.NEAREST_MIPMAP_NEAREST,[To]:n.NEAREST_MIPMAP_LINEAR,[Pn]:n.LINEAR,[Or]:n.LINEAR_MIPMAP_NEAREST,[Ai]:n.LINEAR_MIPMAP_LINEAR},q={[Tf]:n.NEVER,[If]:n.ALWAYS,[wf]:n.LESS,[gd]:n.LEQUAL,[Af]:n.EQUAL,[Pf]:n.GEQUAL,[Cf]:n.GREATER,[Rf]:n.NOTEQUAL};function gt(P,E){if(E.type===zn&&t.has("OES_texture_float_linear")===!1&&(E.magFilter===Pn||E.magFilter===Or||E.magFilter===To||E.magFilter===Ai||E.minFilter===Pn||E.minFilter===Or||E.minFilter===To||E.minFilter===Ai)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(P,n.TEXTURE_WRAP_S,X[E.wrapS]),n.texParameteri(P,n.TEXTURE_WRAP_T,X[E.wrapT]),(P===n.TEXTURE_3D||P===n.TEXTURE_2D_ARRAY)&&n.texParameteri(P,n.TEXTURE_WRAP_R,X[E.wrapR]),n.texParameteri(P,n.TEXTURE_MAG_FILTER,J[E.magFilter]),n.texParameteri(P,n.TEXTURE_MIN_FILTER,J[E.minFilter]),E.compareFunction&&(n.texParameteri(P,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(P,n.TEXTURE_COMPARE_FUNC,q[E.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===Tn||E.minFilter!==To&&E.minFilter!==Ai||E.type===zn&&t.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||i.get(E).__currentAnisotropy){const G=t.get("EXT_texture_filter_anisotropic");n.texParameterf(P,G.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,s.getMaxAnisotropy())),i.get(E).__currentAnisotropy=E.anisotropy}}}function K(P,E){let G=!1;P.__webglInit===void 0&&(P.__webglInit=!0,E.addEventListener("dispose",A));const Z=E.source;let rt=u.get(Z);rt===void 0&&(rt={},u.set(Z,rt));const et=U(E);if(et!==P.__cacheKey){rt[et]===void 0&&(rt[et]={texture:n.createTexture(),usedTimes:0},r.memory.textures++,G=!0),rt[et].usedTimes++;const mt=rt[P.__cacheKey];mt!==void 0&&(rt[P.__cacheKey].usedTimes--,mt.usedTimes===0&&_(E)),P.__cacheKey=et,P.__webglTexture=rt[et].texture}return G}function F(P,E,G){let Z=n.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(Z=n.TEXTURE_2D_ARRAY),E.isData3DTexture&&(Z=n.TEXTURE_3D);const rt=K(P,E),et=E.source;e.bindTexture(Z,P.__webglTexture,n.TEXTURE0+G);const mt=i.get(et);if(et.version!==mt.__version||rt===!0){e.activeTexture(n.TEXTURE0+G);const at=ne.getPrimaries(ne.workingColorSpace),_t=E.colorSpace===ii?null:ne.getPrimaries(E.colorSpace),Ut=E.colorSpace===ii||at===_t?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,E.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,E.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ut);let it=M(E.image,!1,s.maxTextureSize);it=Nt(E,it);const bt=o.convert(E.format,E.colorSpace),ft=o.convert(E.type);let xt=x(E.internalFormat,bt,ft,E.colorSpace,E.isVideoTexture);gt(Z,E);let vt;const Dt=E.mipmaps,Vt=E.isVideoTexture!==!0,ct=mt.__version===void 0||rt===!0,k=et.dataReady,dt=T(E,it);if(E.isDepthTexture)xt=g(E.format===bs,E.type),ct&&(Vt?e.texStorage2D(n.TEXTURE_2D,1,xt,it.width,it.height):e.texImage2D(n.TEXTURE_2D,0,xt,it.width,it.height,0,bt,ft,null));else if(E.isDataTexture)if(Dt.length>0){Vt&&ct&&e.texStorage2D(n.TEXTURE_2D,dt,xt,Dt[0].width,Dt[0].height);for(let j=0,ot=Dt.length;j<ot;j++)vt=Dt[j],Vt?k&&e.texSubImage2D(n.TEXTURE_2D,j,0,0,vt.width,vt.height,bt,ft,vt.data):e.texImage2D(n.TEXTURE_2D,j,xt,vt.width,vt.height,0,bt,ft,vt.data);E.generateMipmaps=!1}else Vt?(ct&&e.texStorage2D(n.TEXTURE_2D,dt,xt,it.width,it.height),k&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,it.width,it.height,bt,ft,it.data)):e.texImage2D(n.TEXTURE_2D,0,xt,it.width,it.height,0,bt,ft,it.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){Vt&&ct&&e.texStorage3D(n.TEXTURE_2D_ARRAY,dt,xt,Dt[0].width,Dt[0].height,it.depth);for(let j=0,ot=Dt.length;j<ot;j++)if(vt=Dt[j],E.format!==En)if(bt!==null)if(Vt){if(k)if(E.layerUpdates.size>0){const Tt=lh(vt.width,vt.height,E.format,E.type);for(const wt of E.layerUpdates){const Yt=vt.data.subarray(wt*Tt/vt.data.BYTES_PER_ELEMENT,(wt+1)*Tt/vt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,j,0,0,wt,vt.width,vt.height,1,bt,Yt)}E.clearLayerUpdates()}else e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,j,0,0,0,vt.width,vt.height,it.depth,bt,vt.data)}else e.compressedTexImage3D(n.TEXTURE_2D_ARRAY,j,xt,vt.width,vt.height,it.depth,0,vt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Vt?k&&e.texSubImage3D(n.TEXTURE_2D_ARRAY,j,0,0,0,vt.width,vt.height,it.depth,bt,ft,vt.data):e.texImage3D(n.TEXTURE_2D_ARRAY,j,xt,vt.width,vt.height,it.depth,0,bt,ft,vt.data)}else{Vt&&ct&&e.texStorage2D(n.TEXTURE_2D,dt,xt,Dt[0].width,Dt[0].height);for(let j=0,ot=Dt.length;j<ot;j++)vt=Dt[j],E.format!==En?bt!==null?Vt?k&&e.compressedTexSubImage2D(n.TEXTURE_2D,j,0,0,vt.width,vt.height,bt,vt.data):e.compressedTexImage2D(n.TEXTURE_2D,j,xt,vt.width,vt.height,0,vt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Vt?k&&e.texSubImage2D(n.TEXTURE_2D,j,0,0,vt.width,vt.height,bt,ft,vt.data):e.texImage2D(n.TEXTURE_2D,j,xt,vt.width,vt.height,0,bt,ft,vt.data)}else if(E.isDataArrayTexture)if(Vt){if(ct&&e.texStorage3D(n.TEXTURE_2D_ARRAY,dt,xt,it.width,it.height,it.depth),k)if(E.layerUpdates.size>0){const j=lh(it.width,it.height,E.format,E.type);for(const ot of E.layerUpdates){const Tt=it.data.subarray(ot*j/it.data.BYTES_PER_ELEMENT,(ot+1)*j/it.data.BYTES_PER_ELEMENT);e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,ot,it.width,it.height,1,bt,ft,Tt)}E.clearLayerUpdates()}else e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,it.width,it.height,it.depth,bt,ft,it.data)}else e.texImage3D(n.TEXTURE_2D_ARRAY,0,xt,it.width,it.height,it.depth,0,bt,ft,it.data);else if(E.isData3DTexture)Vt?(ct&&e.texStorage3D(n.TEXTURE_3D,dt,xt,it.width,it.height,it.depth),k&&e.texSubImage3D(n.TEXTURE_3D,0,0,0,0,it.width,it.height,it.depth,bt,ft,it.data)):e.texImage3D(n.TEXTURE_3D,0,xt,it.width,it.height,it.depth,0,bt,ft,it.data);else if(E.isFramebufferTexture){if(ct)if(Vt)e.texStorage2D(n.TEXTURE_2D,dt,xt,it.width,it.height);else{let j=it.width,ot=it.height;for(let Tt=0;Tt<dt;Tt++)e.texImage2D(n.TEXTURE_2D,Tt,xt,j,ot,0,bt,ft,null),j>>=1,ot>>=1}}else if(Dt.length>0){if(Vt&&ct){const j=At(Dt[0]);e.texStorage2D(n.TEXTURE_2D,dt,xt,j.width,j.height)}for(let j=0,ot=Dt.length;j<ot;j++)vt=Dt[j],Vt?k&&e.texSubImage2D(n.TEXTURE_2D,j,0,0,bt,ft,vt):e.texImage2D(n.TEXTURE_2D,j,xt,bt,ft,vt);E.generateMipmaps=!1}else if(Vt){if(ct){const j=At(it);e.texStorage2D(n.TEXTURE_2D,dt,xt,j.width,j.height)}k&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,bt,ft,it)}else e.texImage2D(n.TEXTURE_2D,0,xt,bt,ft,it);m(E)&&f(Z),mt.__version=et.version,E.onUpdate&&E.onUpdate(E)}P.__version=E.version}function nt(P,E,G){if(E.image.length!==6)return;const Z=K(P,E),rt=E.source;e.bindTexture(n.TEXTURE_CUBE_MAP,P.__webglTexture,n.TEXTURE0+G);const et=i.get(rt);if(rt.version!==et.__version||Z===!0){e.activeTexture(n.TEXTURE0+G);const mt=ne.getPrimaries(ne.workingColorSpace),at=E.colorSpace===ii?null:ne.getPrimaries(E.colorSpace),_t=E.colorSpace===ii||mt===at?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,E.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,E.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,_t);const Ut=E.isCompressedTexture||E.image[0].isCompressedTexture,it=E.image[0]&&E.image[0].isDataTexture,bt=[];for(let ot=0;ot<6;ot++)!Ut&&!it?bt[ot]=M(E.image[ot],!0,s.maxCubemapSize):bt[ot]=it?E.image[ot].image:E.image[ot],bt[ot]=Nt(E,bt[ot]);const ft=bt[0],xt=o.convert(E.format,E.colorSpace),vt=o.convert(E.type),Dt=x(E.internalFormat,xt,vt,E.colorSpace),Vt=E.isVideoTexture!==!0,ct=et.__version===void 0||Z===!0,k=rt.dataReady;let dt=T(E,ft);gt(n.TEXTURE_CUBE_MAP,E);let j;if(Ut){Vt&&ct&&e.texStorage2D(n.TEXTURE_CUBE_MAP,dt,Dt,ft.width,ft.height);for(let ot=0;ot<6;ot++){j=bt[ot].mipmaps;for(let Tt=0;Tt<j.length;Tt++){const wt=j[Tt];E.format!==En?xt!==null?Vt?k&&e.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ot,Tt,0,0,wt.width,wt.height,xt,wt.data):e.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ot,Tt,Dt,wt.width,wt.height,0,wt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Vt?k&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ot,Tt,0,0,wt.width,wt.height,xt,vt,wt.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ot,Tt,Dt,wt.width,wt.height,0,xt,vt,wt.data)}}}else{if(j=E.mipmaps,Vt&&ct){j.length>0&&dt++;const ot=At(bt[0]);e.texStorage2D(n.TEXTURE_CUBE_MAP,dt,Dt,ot.width,ot.height)}for(let ot=0;ot<6;ot++)if(it){Vt?k&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ot,0,0,0,bt[ot].width,bt[ot].height,xt,vt,bt[ot].data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ot,0,Dt,bt[ot].width,bt[ot].height,0,xt,vt,bt[ot].data);for(let Tt=0;Tt<j.length;Tt++){const Yt=j[Tt].image[ot].image;Vt?k&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ot,Tt+1,0,0,Yt.width,Yt.height,xt,vt,Yt.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ot,Tt+1,Dt,Yt.width,Yt.height,0,xt,vt,Yt.data)}}else{Vt?k&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ot,0,0,0,xt,vt,bt[ot]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ot,0,Dt,xt,vt,bt[ot]);for(let Tt=0;Tt<j.length;Tt++){const wt=j[Tt];Vt?k&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ot,Tt+1,0,0,xt,vt,wt.image[ot]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ot,Tt+1,Dt,xt,vt,wt.image[ot])}}}m(E)&&f(n.TEXTURE_CUBE_MAP),et.__version=rt.version,E.onUpdate&&E.onUpdate(E)}P.__version=E.version}function Mt(P,E,G,Z,rt,et){const mt=o.convert(G.format,G.colorSpace),at=o.convert(G.type),_t=x(G.internalFormat,mt,at,G.colorSpace),Ut=i.get(E),it=i.get(G);if(it.__renderTarget=E,!Ut.__hasExternalTextures){const bt=Math.max(1,E.width>>et),ft=Math.max(1,E.height>>et);rt===n.TEXTURE_3D||rt===n.TEXTURE_2D_ARRAY?e.texImage3D(rt,et,_t,bt,ft,E.depth,0,mt,at,null):e.texImage2D(rt,et,_t,bt,ft,0,mt,at,null)}e.bindFramebuffer(n.FRAMEBUFFER,P),yt(E)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,Z,rt,it.__webglTexture,0,Y(E)):(rt===n.TEXTURE_2D||rt>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&rt<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,Z,rt,it.__webglTexture,et),e.bindFramebuffer(n.FRAMEBUFFER,null)}function lt(P,E,G){if(n.bindRenderbuffer(n.RENDERBUFFER,P),E.depthBuffer){const Z=E.depthTexture,rt=Z&&Z.isDepthTexture?Z.type:null,et=g(E.stencilBuffer,rt),mt=E.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,at=Y(E);yt(E)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,at,et,E.width,E.height):G?n.renderbufferStorageMultisample(n.RENDERBUFFER,at,et,E.width,E.height):n.renderbufferStorage(n.RENDERBUFFER,et,E.width,E.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,mt,n.RENDERBUFFER,P)}else{const Z=E.textures;for(let rt=0;rt<Z.length;rt++){const et=Z[rt],mt=o.convert(et.format,et.colorSpace),at=o.convert(et.type),_t=x(et.internalFormat,mt,at,et.colorSpace),Ut=Y(E);G&&yt(E)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Ut,_t,E.width,E.height):yt(E)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Ut,_t,E.width,E.height):n.renderbufferStorage(n.RENDERBUFFER,_t,E.width,E.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Ct(P,E){if(E&&E.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(n.FRAMEBUFFER,P),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const Z=i.get(E.depthTexture);Z.__renderTarget=E,(!Z.__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),H(E.depthTexture,0);const rt=Z.__webglTexture,et=Y(E);if(E.depthTexture.format===hs)yt(E)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,rt,0,et):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,rt,0);else if(E.depthTexture.format===bs)yt(E)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,rt,0,et):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,rt,0);else throw new Error("Unknown depthTexture format")}function Pt(P){const E=i.get(P),G=P.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==P.depthTexture){const Z=P.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),Z){const rt=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,Z.removeEventListener("dispose",rt)};Z.addEventListener("dispose",rt),E.__depthDisposeCallback=rt}E.__boundDepthTexture=Z}if(P.depthTexture&&!E.__autoAllocateDepthBuffer){if(G)throw new Error("target.depthTexture not supported in Cube render targets");Ct(E.__webglFramebuffer,P)}else if(G){E.__webglDepthbuffer=[];for(let Z=0;Z<6;Z++)if(e.bindFramebuffer(n.FRAMEBUFFER,E.__webglFramebuffer[Z]),E.__webglDepthbuffer[Z]===void 0)E.__webglDepthbuffer[Z]=n.createRenderbuffer(),lt(E.__webglDepthbuffer[Z],P,!1);else{const rt=P.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,et=E.__webglDepthbuffer[Z];n.bindRenderbuffer(n.RENDERBUFFER,et),n.framebufferRenderbuffer(n.FRAMEBUFFER,rt,n.RENDERBUFFER,et)}}else if(e.bindFramebuffer(n.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=n.createRenderbuffer(),lt(E.__webglDepthbuffer,P,!1);else{const Z=P.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,rt=E.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,rt),n.framebufferRenderbuffer(n.FRAMEBUFFER,Z,n.RENDERBUFFER,rt)}e.bindFramebuffer(n.FRAMEBUFFER,null)}function Ht(P,E,G){const Z=i.get(P);E!==void 0&&Mt(Z.__webglFramebuffer,P,P.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),G!==void 0&&Pt(P)}function $t(P){const E=P.texture,G=i.get(P),Z=i.get(E);P.addEventListener("dispose",w);const rt=P.textures,et=P.isWebGLCubeRenderTarget===!0,mt=rt.length>1;if(mt||(Z.__webglTexture===void 0&&(Z.__webglTexture=n.createTexture()),Z.__version=E.version,r.memory.textures++),et){G.__webglFramebuffer=[];for(let at=0;at<6;at++)if(E.mipmaps&&E.mipmaps.length>0){G.__webglFramebuffer[at]=[];for(let _t=0;_t<E.mipmaps.length;_t++)G.__webglFramebuffer[at][_t]=n.createFramebuffer()}else G.__webglFramebuffer[at]=n.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){G.__webglFramebuffer=[];for(let at=0;at<E.mipmaps.length;at++)G.__webglFramebuffer[at]=n.createFramebuffer()}else G.__webglFramebuffer=n.createFramebuffer();if(mt)for(let at=0,_t=rt.length;at<_t;at++){const Ut=i.get(rt[at]);Ut.__webglTexture===void 0&&(Ut.__webglTexture=n.createTexture(),r.memory.textures++)}if(P.samples>0&&yt(P)===!1){G.__webglMultisampledFramebuffer=n.createFramebuffer(),G.__webglColorRenderbuffer=[],e.bindFramebuffer(n.FRAMEBUFFER,G.__webglMultisampledFramebuffer);for(let at=0;at<rt.length;at++){const _t=rt[at];G.__webglColorRenderbuffer[at]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,G.__webglColorRenderbuffer[at]);const Ut=o.convert(_t.format,_t.colorSpace),it=o.convert(_t.type),bt=x(_t.internalFormat,Ut,it,_t.colorSpace,P.isXRRenderTarget===!0),ft=Y(P);n.renderbufferStorageMultisample(n.RENDERBUFFER,ft,bt,P.width,P.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+at,n.RENDERBUFFER,G.__webglColorRenderbuffer[at])}n.bindRenderbuffer(n.RENDERBUFFER,null),P.depthBuffer&&(G.__webglDepthRenderbuffer=n.createRenderbuffer(),lt(G.__webglDepthRenderbuffer,P,!0)),e.bindFramebuffer(n.FRAMEBUFFER,null)}}if(et){e.bindTexture(n.TEXTURE_CUBE_MAP,Z.__webglTexture),gt(n.TEXTURE_CUBE_MAP,E);for(let at=0;at<6;at++)if(E.mipmaps&&E.mipmaps.length>0)for(let _t=0;_t<E.mipmaps.length;_t++)Mt(G.__webglFramebuffer[at][_t],P,E,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+at,_t);else Mt(G.__webglFramebuffer[at],P,E,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+at,0);m(E)&&f(n.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(mt){for(let at=0,_t=rt.length;at<_t;at++){const Ut=rt[at],it=i.get(Ut);e.bindTexture(n.TEXTURE_2D,it.__webglTexture),gt(n.TEXTURE_2D,Ut),Mt(G.__webglFramebuffer,P,Ut,n.COLOR_ATTACHMENT0+at,n.TEXTURE_2D,0),m(Ut)&&f(n.TEXTURE_2D)}e.unbindTexture()}else{let at=n.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(at=P.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(at,Z.__webglTexture),gt(at,E),E.mipmaps&&E.mipmaps.length>0)for(let _t=0;_t<E.mipmaps.length;_t++)Mt(G.__webglFramebuffer[_t],P,E,n.COLOR_ATTACHMENT0,at,_t);else Mt(G.__webglFramebuffer,P,E,n.COLOR_ATTACHMENT0,at,0);m(E)&&f(at),e.unbindTexture()}P.depthBuffer&&Pt(P)}function pt(P){const E=P.textures;for(let G=0,Z=E.length;G<Z;G++){const rt=E[G];if(m(rt)){const et=b(P),mt=i.get(rt).__webglTexture;e.bindTexture(et,mt),f(et),e.unbindTexture()}}}const ht=[],N=[];function Bt(P){if(P.samples>0){if(yt(P)===!1){const E=P.textures,G=P.width,Z=P.height;let rt=n.COLOR_BUFFER_BIT;const et=P.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,mt=i.get(P),at=E.length>1;if(at)for(let _t=0;_t<E.length;_t++)e.bindFramebuffer(n.FRAMEBUFFER,mt.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+_t,n.RENDERBUFFER,null),e.bindFramebuffer(n.FRAMEBUFFER,mt.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+_t,n.TEXTURE_2D,null,0);e.bindFramebuffer(n.READ_FRAMEBUFFER,mt.__webglMultisampledFramebuffer),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,mt.__webglFramebuffer);for(let _t=0;_t<E.length;_t++){if(P.resolveDepthBuffer&&(P.depthBuffer&&(rt|=n.DEPTH_BUFFER_BIT),P.stencilBuffer&&P.resolveStencilBuffer&&(rt|=n.STENCIL_BUFFER_BIT)),at){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,mt.__webglColorRenderbuffer[_t]);const Ut=i.get(E[_t]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Ut,0)}n.blitFramebuffer(0,0,G,Z,0,0,G,Z,rt,n.NEAREST),l===!0&&(ht.length=0,N.length=0,ht.push(n.COLOR_ATTACHMENT0+_t),P.depthBuffer&&P.resolveDepthBuffer===!1&&(ht.push(et),N.push(et),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,N)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,ht))}if(e.bindFramebuffer(n.READ_FRAMEBUFFER,null),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),at)for(let _t=0;_t<E.length;_t++){e.bindFramebuffer(n.FRAMEBUFFER,mt.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+_t,n.RENDERBUFFER,mt.__webglColorRenderbuffer[_t]);const Ut=i.get(E[_t]).__webglTexture;e.bindFramebuffer(n.FRAMEBUFFER,mt.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+_t,n.TEXTURE_2D,Ut,0)}e.bindFramebuffer(n.DRAW_FRAMEBUFFER,mt.__webglMultisampledFramebuffer)}else if(P.depthBuffer&&P.resolveDepthBuffer===!1&&l){const E=P.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[E])}}}function Y(P){return Math.min(s.maxSamples,P.samples)}function yt(P){const E=i.get(P);return P.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function ut(P){const E=r.render.frame;h.get(P)!==E&&(h.set(P,E),P.update())}function Nt(P,E){const G=P.colorSpace,Z=P.format,rt=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||G!==ws&&G!==ii&&(ne.getTransfer(G)===de?(Z!==En||rt!==Wn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",G)),E}function At(P){return typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement?(c.width=P.naturalWidth||P.width,c.height=P.naturalHeight||P.height):typeof VideoFrame<"u"&&P instanceof VideoFrame?(c.width=P.displayWidth,c.height=P.displayHeight):(c.width=P.width,c.height=P.height),c}this.allocateTextureUnit=D,this.resetTextureUnits=L,this.setTexture2D=H,this.setTexture2DArray=V,this.setTexture3D=z,this.setTextureCube=O,this.rebindTextures=Ht,this.setupRenderTarget=$t,this.updateRenderTargetMipmap=pt,this.updateMultisampleRenderTarget=Bt,this.setupDepthRenderbuffer=Pt,this.setupFrameBufferTexture=Mt,this.useMultisampledRTT=yt}function Kv(n,t){function e(i,s=ii){let o;const r=ne.getTransfer(s);if(i===Wn)return n.UNSIGNED_BYTE;if(i===Ol)return n.UNSIGNED_SHORT_4_4_4_4;if(i===kl)return n.UNSIGNED_SHORT_5_5_5_1;if(i===ad)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===od)return n.BYTE;if(i===rd)return n.SHORT;if(i===ro)return n.UNSIGNED_SHORT;if(i===Bl)return n.INT;if(i===Ri)return n.UNSIGNED_INT;if(i===zn)return n.FLOAT;if(i===ho)return n.HALF_FLOAT;if(i===ld)return n.ALPHA;if(i===cd)return n.RGB;if(i===En)return n.RGBA;if(i===hd)return n.LUMINANCE;if(i===dd)return n.LUMINANCE_ALPHA;if(i===hs)return n.DEPTH_COMPONENT;if(i===bs)return n.DEPTH_STENCIL;if(i===ud)return n.RED;if(i===Fl)return n.RED_INTEGER;if(i===fd)return n.RG;if(i===zl)return n.RG_INTEGER;if(i===Hl)return n.RGBA_INTEGER;if(i===rr||i===ar||i===lr||i===cr)if(r===de)if(o=t.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(i===rr)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===ar)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===lr)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===cr)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=t.get("WEBGL_compressed_texture_s3tc"),o!==null){if(i===rr)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===ar)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===lr)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===cr)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Za||i===Ja||i===Qa||i===tl)if(o=t.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(i===Za)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Ja)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Qa)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===tl)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===el||i===nl||i===il)if(o=t.get("WEBGL_compressed_texture_etc"),o!==null){if(i===el||i===nl)return r===de?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(i===il)return r===de?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===sl||i===ol||i===rl||i===al||i===ll||i===cl||i===hl||i===dl||i===ul||i===fl||i===pl||i===ml||i===gl||i===vl)if(o=t.get("WEBGL_compressed_texture_astc"),o!==null){if(i===sl)return r===de?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===ol)return r===de?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===rl)return r===de?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===al)return r===de?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===ll)return r===de?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===cl)return r===de?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===hl)return r===de?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===dl)return r===de?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===ul)return r===de?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===fl)return r===de?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===pl)return r===de?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===ml)return r===de?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===gl)return r===de?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===vl)return r===de?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===hr||i===_l||i===yl)if(o=t.get("EXT_texture_compression_bptc"),o!==null){if(i===hr)return r===de?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===_l)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===yl)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===pd||i===xl||i===Ml||i===bl)if(o=t.get("EXT_texture_compression_rgtc"),o!==null){if(i===hr)return o.COMPRESSED_RED_RGTC1_EXT;if(i===xl)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Ml)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===bl)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Ms?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:e}}class Zv extends nn{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class Lt extends Ie{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Jv={type:"move"};class ha{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Lt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Lt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new I,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new I),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Lt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new I,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new I),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let s=null,o=null,r=null;const a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){r=!0;for(const M of t.hand.values()){const m=e.getJointPose(M,i),f=this._getHandJoint(c,M);m!==null&&(f.matrix.fromArray(m.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=m.radius),f.visible=m!==null}const h=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],u=h.position.distanceTo(d.position),p=.02,v=.005;c.inputState.pinching&&u>p+v?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&u<=p-v&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(o=e.getPose(t.gripSpace,i),o!==null&&(l.matrix.fromArray(o.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,o.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(o.linearVelocity)):l.hasLinearVelocity=!1,o.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(o.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=e.getPose(t.targetRaySpace,i),s===null&&o!==null&&(s=o),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Jv)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=o!==null),c!==null&&(c.visible=r!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const i=new Lt;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}}const Qv=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,t_=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class e_{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,i){if(this.texture===null){const s=new qe,o=t.properties.get(s);o.__webglTexture=e.texture,(e.depthNear!=i.depthNear||e.depthFar!=i.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,i=new hi({vertexShader:Qv,fragmentShader:t_,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new B(new Se(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class n_ extends Di{constructor(t,e){super();const i=this;let s=null,o=1,r=null,a="local-floor",l=1,c=null,h=null,d=null,u=null,p=null,v=null;const M=new e_,m=e.getContextAttributes();let f=null,b=null;const x=[],g=[],T=new Et;let A=null;const w=new nn;w.viewport=new pe;const S=new nn;S.viewport=new pe;const _=[w,S],y=new Zv;let R=null,L=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(F){let nt=x[F];return nt===void 0&&(nt=new ha,x[F]=nt),nt.getTargetRaySpace()},this.getControllerGrip=function(F){let nt=x[F];return nt===void 0&&(nt=new ha,x[F]=nt),nt.getGripSpace()},this.getHand=function(F){let nt=x[F];return nt===void 0&&(nt=new ha,x[F]=nt),nt.getHandSpace()};function D(F){const nt=g.indexOf(F.inputSource);if(nt===-1)return;const Mt=x[nt];Mt!==void 0&&(Mt.update(F.inputSource,F.frame,c||r),Mt.dispatchEvent({type:F.type,data:F.inputSource}))}function U(){s.removeEventListener("select",D),s.removeEventListener("selectstart",D),s.removeEventListener("selectend",D),s.removeEventListener("squeeze",D),s.removeEventListener("squeezestart",D),s.removeEventListener("squeezeend",D),s.removeEventListener("end",U),s.removeEventListener("inputsourceschange",H);for(let F=0;F<x.length;F++){const nt=g[F];nt!==null&&(g[F]=null,x[F].disconnect(nt))}R=null,L=null,M.reset(),t.setRenderTarget(f),p=null,u=null,d=null,s=null,b=null,K.stop(),i.isPresenting=!1,t.setPixelRatio(A),t.setSize(T.width,T.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(F){o=F,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(F){a=F,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||r},this.setReferenceSpace=function(F){c=F},this.getBaseLayer=function(){return u!==null?u:p},this.getBinding=function(){return d},this.getFrame=function(){return v},this.getSession=function(){return s},this.setSession=async function(F){if(s=F,s!==null){if(f=t.getRenderTarget(),s.addEventListener("select",D),s.addEventListener("selectstart",D),s.addEventListener("selectend",D),s.addEventListener("squeeze",D),s.addEventListener("squeezestart",D),s.addEventListener("squeezeend",D),s.addEventListener("end",U),s.addEventListener("inputsourceschange",H),m.xrCompatible!==!0&&await e.makeXRCompatible(),A=t.getPixelRatio(),t.getSize(T),s.renderState.layers===void 0){const nt={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:o};p=new XRWebGLLayer(s,e,nt),s.updateRenderState({baseLayer:p}),t.setPixelRatio(1),t.setSize(p.framebufferWidth,p.framebufferHeight,!1),b=new Pi(p.framebufferWidth,p.framebufferHeight,{format:En,type:Wn,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil})}else{let nt=null,Mt=null,lt=null;m.depth&&(lt=m.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,nt=m.stencil?bs:hs,Mt=m.stencil?Ms:Ri);const Ct={colorFormat:e.RGBA8,depthFormat:lt,scaleFactor:o};d=new XRWebGLBinding(s,e),u=d.createProjectionLayer(Ct),s.updateRenderState({layers:[u]}),t.setPixelRatio(1),t.setSize(u.textureWidth,u.textureHeight,!1),b=new Pi(u.textureWidth,u.textureHeight,{format:En,type:Wn,depthTexture:new Cd(u.textureWidth,u.textureHeight,Mt,void 0,void 0,void 0,void 0,void 0,void 0,nt),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1})}b.isXRRenderTarget=!0,this.setFoveation(l),c=null,r=await s.requestReferenceSpace(a),K.setContext(s),K.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return M.getDepthTexture()};function H(F){for(let nt=0;nt<F.removed.length;nt++){const Mt=F.removed[nt],lt=g.indexOf(Mt);lt>=0&&(g[lt]=null,x[lt].disconnect(Mt))}for(let nt=0;nt<F.added.length;nt++){const Mt=F.added[nt];let lt=g.indexOf(Mt);if(lt===-1){for(let Pt=0;Pt<x.length;Pt++)if(Pt>=g.length){g.push(Mt),lt=Pt;break}else if(g[Pt]===null){g[Pt]=Mt,lt=Pt;break}if(lt===-1)break}const Ct=x[lt];Ct&&Ct.connect(Mt)}}const V=new I,z=new I;function O(F,nt,Mt){V.setFromMatrixPosition(nt.matrixWorld),z.setFromMatrixPosition(Mt.matrixWorld);const lt=V.distanceTo(z),Ct=nt.projectionMatrix.elements,Pt=Mt.projectionMatrix.elements,Ht=Ct[14]/(Ct[10]-1),$t=Ct[14]/(Ct[10]+1),pt=(Ct[9]+1)/Ct[5],ht=(Ct[9]-1)/Ct[5],N=(Ct[8]-1)/Ct[0],Bt=(Pt[8]+1)/Pt[0],Y=Ht*N,yt=Ht*Bt,ut=lt/(-N+Bt),Nt=ut*-N;if(nt.matrixWorld.decompose(F.position,F.quaternion,F.scale),F.translateX(Nt),F.translateZ(ut),F.matrixWorld.compose(F.position,F.quaternion,F.scale),F.matrixWorldInverse.copy(F.matrixWorld).invert(),Ct[10]===-1)F.projectionMatrix.copy(nt.projectionMatrix),F.projectionMatrixInverse.copy(nt.projectionMatrixInverse);else{const At=Ht+ut,P=$t+ut,E=Y-Nt,G=yt+(lt-Nt),Z=pt*$t/P*At,rt=ht*$t/P*At;F.projectionMatrix.makePerspective(E,G,Z,rt,At,P),F.projectionMatrixInverse.copy(F.projectionMatrix).invert()}}function X(F,nt){nt===null?F.matrixWorld.copy(F.matrix):F.matrixWorld.multiplyMatrices(nt.matrixWorld,F.matrix),F.matrixWorldInverse.copy(F.matrixWorld).invert()}this.updateCamera=function(F){if(s===null)return;let nt=F.near,Mt=F.far;M.texture!==null&&(M.depthNear>0&&(nt=M.depthNear),M.depthFar>0&&(Mt=M.depthFar)),y.near=S.near=w.near=nt,y.far=S.far=w.far=Mt,(R!==y.near||L!==y.far)&&(s.updateRenderState({depthNear:y.near,depthFar:y.far}),R=y.near,L=y.far),w.layers.mask=F.layers.mask|2,S.layers.mask=F.layers.mask|4,y.layers.mask=w.layers.mask|S.layers.mask;const lt=F.parent,Ct=y.cameras;X(y,lt);for(let Pt=0;Pt<Ct.length;Pt++)X(Ct[Pt],lt);Ct.length===2?O(y,w,S):y.projectionMatrix.copy(w.projectionMatrix),J(F,y,lt)};function J(F,nt,Mt){Mt===null?F.matrix.copy(nt.matrixWorld):(F.matrix.copy(Mt.matrixWorld),F.matrix.invert(),F.matrix.multiply(nt.matrixWorld)),F.matrix.decompose(F.position,F.quaternion,F.scale),F.updateMatrixWorld(!0),F.projectionMatrix.copy(nt.projectionMatrix),F.projectionMatrixInverse.copy(nt.projectionMatrixInverse),F.isPerspectiveCamera&&(F.fov=ao*2*Math.atan(1/F.projectionMatrix.elements[5]),F.zoom=1)}this.getCamera=function(){return y},this.getFoveation=function(){if(!(u===null&&p===null))return l},this.setFoveation=function(F){l=F,u!==null&&(u.fixedFoveation=F),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=F)},this.hasDepthSensing=function(){return M.texture!==null},this.getDepthSensingMesh=function(){return M.getMesh(y)};let q=null;function gt(F,nt){if(h=nt.getViewerPose(c||r),v=nt,h!==null){const Mt=h.views;p!==null&&(t.setRenderTargetFramebuffer(b,p.framebuffer),t.setRenderTarget(b));let lt=!1;Mt.length!==y.cameras.length&&(y.cameras.length=0,lt=!0);for(let Pt=0;Pt<Mt.length;Pt++){const Ht=Mt[Pt];let $t=null;if(p!==null)$t=p.getViewport(Ht);else{const ht=d.getViewSubImage(u,Ht);$t=ht.viewport,Pt===0&&(t.setRenderTargetTextures(b,ht.colorTexture,u.ignoreDepthValues?void 0:ht.depthStencilTexture),t.setRenderTarget(b))}let pt=_[Pt];pt===void 0&&(pt=new nn,pt.layers.enable(Pt),pt.viewport=new pe,_[Pt]=pt),pt.matrix.fromArray(Ht.transform.matrix),pt.matrix.decompose(pt.position,pt.quaternion,pt.scale),pt.projectionMatrix.fromArray(Ht.projectionMatrix),pt.projectionMatrixInverse.copy(pt.projectionMatrix).invert(),pt.viewport.set($t.x,$t.y,$t.width,$t.height),Pt===0&&(y.matrix.copy(pt.matrix),y.matrix.decompose(y.position,y.quaternion,y.scale)),lt===!0&&y.cameras.push(pt)}const Ct=s.enabledFeatures;if(Ct&&Ct.includes("depth-sensing")){const Pt=d.getDepthInformation(Mt[0]);Pt&&Pt.isValid&&Pt.texture&&M.init(t,Pt,s.renderState)}}for(let Mt=0;Mt<x.length;Mt++){const lt=g[Mt],Ct=x[Mt];lt!==null&&Ct!==void 0&&Ct.update(lt,nt,c||r)}q&&q(F,nt),nt.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:nt}),v=null}const K=new wd;K.setAnimationLoop(gt),this.setAnimationLoop=function(F){q=F},this.dispose=function(){}}}const yi=new In,i_=new me;function s_(n,t){function e(m,f){m.matrixAutoUpdate===!0&&m.updateMatrix(),f.value.copy(m.matrix)}function i(m,f){f.color.getRGB(m.fogColor.value,Sd(n)),f.isFog?(m.fogNear.value=f.near,m.fogFar.value=f.far):f.isFogExp2&&(m.fogDensity.value=f.density)}function s(m,f,b,x,g){f.isMeshBasicMaterial||f.isMeshLambertMaterial?o(m,f):f.isMeshToonMaterial?(o(m,f),d(m,f)):f.isMeshPhongMaterial?(o(m,f),h(m,f)):f.isMeshStandardMaterial?(o(m,f),u(m,f),f.isMeshPhysicalMaterial&&p(m,f,g)):f.isMeshMatcapMaterial?(o(m,f),v(m,f)):f.isMeshDepthMaterial?o(m,f):f.isMeshDistanceMaterial?(o(m,f),M(m,f)):f.isMeshNormalMaterial?o(m,f):f.isLineBasicMaterial?(r(m,f),f.isLineDashedMaterial&&a(m,f)):f.isPointsMaterial?l(m,f,b,x):f.isSpriteMaterial?c(m,f):f.isShadowMaterial?(m.color.value.copy(f.color),m.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function o(m,f){m.opacity.value=f.opacity,f.color&&m.diffuse.value.copy(f.color),f.emissive&&m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(m.map.value=f.map,e(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.bumpMap&&(m.bumpMap.value=f.bumpMap,e(f.bumpMap,m.bumpMapTransform),m.bumpScale.value=f.bumpScale,f.side===Ze&&(m.bumpScale.value*=-1)),f.normalMap&&(m.normalMap.value=f.normalMap,e(f.normalMap,m.normalMapTransform),m.normalScale.value.copy(f.normalScale),f.side===Ze&&m.normalScale.value.negate()),f.displacementMap&&(m.displacementMap.value=f.displacementMap,e(f.displacementMap,m.displacementMapTransform),m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias),f.emissiveMap&&(m.emissiveMap.value=f.emissiveMap,e(f.emissiveMap,m.emissiveMapTransform)),f.specularMap&&(m.specularMap.value=f.specularMap,e(f.specularMap,m.specularMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);const b=t.get(f),x=b.envMap,g=b.envMapRotation;x&&(m.envMap.value=x,yi.copy(g),yi.x*=-1,yi.y*=-1,yi.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(yi.y*=-1,yi.z*=-1),m.envMapRotation.value.setFromMatrix4(i_.makeRotationFromEuler(yi)),m.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=f.reflectivity,m.ior.value=f.ior,m.refractionRatio.value=f.refractionRatio),f.lightMap&&(m.lightMap.value=f.lightMap,m.lightMapIntensity.value=f.lightMapIntensity,e(f.lightMap,m.lightMapTransform)),f.aoMap&&(m.aoMap.value=f.aoMap,m.aoMapIntensity.value=f.aoMapIntensity,e(f.aoMap,m.aoMapTransform))}function r(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,f.map&&(m.map.value=f.map,e(f.map,m.mapTransform))}function a(m,f){m.dashSize.value=f.dashSize,m.totalSize.value=f.dashSize+f.gapSize,m.scale.value=f.scale}function l(m,f,b,x){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.size.value=f.size*b,m.scale.value=x*.5,f.map&&(m.map.value=f.map,e(f.map,m.uvTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function c(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.rotation.value=f.rotation,f.map&&(m.map.value=f.map,e(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function h(m,f){m.specular.value.copy(f.specular),m.shininess.value=Math.max(f.shininess,1e-4)}function d(m,f){f.gradientMap&&(m.gradientMap.value=f.gradientMap)}function u(m,f){m.metalness.value=f.metalness,f.metalnessMap&&(m.metalnessMap.value=f.metalnessMap,e(f.metalnessMap,m.metalnessMapTransform)),m.roughness.value=f.roughness,f.roughnessMap&&(m.roughnessMap.value=f.roughnessMap,e(f.roughnessMap,m.roughnessMapTransform)),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)}function p(m,f,b){m.ior.value=f.ior,f.sheen>0&&(m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),m.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(m.sheenColorMap.value=f.sheenColorMap,e(f.sheenColorMap,m.sheenColorMapTransform)),f.sheenRoughnessMap&&(m.sheenRoughnessMap.value=f.sheenRoughnessMap,e(f.sheenRoughnessMap,m.sheenRoughnessMapTransform))),f.clearcoat>0&&(m.clearcoat.value=f.clearcoat,m.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(m.clearcoatMap.value=f.clearcoatMap,e(f.clearcoatMap,m.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,e(f.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(m.clearcoatNormalMap.value=f.clearcoatNormalMap,e(f.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===Ze&&m.clearcoatNormalScale.value.negate())),f.dispersion>0&&(m.dispersion.value=f.dispersion),f.iridescence>0&&(m.iridescence.value=f.iridescence,m.iridescenceIOR.value=f.iridescenceIOR,m.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(m.iridescenceMap.value=f.iridescenceMap,e(f.iridescenceMap,m.iridescenceMapTransform)),f.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=f.iridescenceThicknessMap,e(f.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),f.transmission>0&&(m.transmission.value=f.transmission,m.transmissionSamplerMap.value=b.texture,m.transmissionSamplerSize.value.set(b.width,b.height),f.transmissionMap&&(m.transmissionMap.value=f.transmissionMap,e(f.transmissionMap,m.transmissionMapTransform)),m.thickness.value=f.thickness,f.thicknessMap&&(m.thicknessMap.value=f.thicknessMap,e(f.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=f.attenuationDistance,m.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(m.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(m.anisotropyMap.value=f.anisotropyMap,e(f.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=f.specularIntensity,m.specularColor.value.copy(f.specularColor),f.specularColorMap&&(m.specularColorMap.value=f.specularColorMap,e(f.specularColorMap,m.specularColorMapTransform)),f.specularIntensityMap&&(m.specularIntensityMap.value=f.specularIntensityMap,e(f.specularIntensityMap,m.specularIntensityMapTransform))}function v(m,f){f.matcap&&(m.matcap.value=f.matcap)}function M(m,f){const b=t.get(f).light;m.referencePosition.value.setFromMatrixPosition(b.matrixWorld),m.nearDistance.value=b.shadow.camera.near,m.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function o_(n,t,e,i){let s={},o={},r=[];const a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(b,x){const g=x.program;i.uniformBlockBinding(b,g)}function c(b,x){let g=s[b.id];g===void 0&&(v(b),g=h(b),s[b.id]=g,b.addEventListener("dispose",m));const T=x.program;i.updateUBOMapping(b,T);const A=t.render.frame;o[b.id]!==A&&(u(b),o[b.id]=A)}function h(b){const x=d();b.__bindingPointIndex=x;const g=n.createBuffer(),T=b.__size,A=b.usage;return n.bindBuffer(n.UNIFORM_BUFFER,g),n.bufferData(n.UNIFORM_BUFFER,T,A),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,x,g),g}function d(){for(let b=0;b<a;b++)if(r.indexOf(b)===-1)return r.push(b),b;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(b){const x=s[b.id],g=b.uniforms,T=b.__cache;n.bindBuffer(n.UNIFORM_BUFFER,x);for(let A=0,w=g.length;A<w;A++){const S=Array.isArray(g[A])?g[A]:[g[A]];for(let _=0,y=S.length;_<y;_++){const R=S[_];if(p(R,A,_,T)===!0){const L=R.__offset,D=Array.isArray(R.value)?R.value:[R.value];let U=0;for(let H=0;H<D.length;H++){const V=D[H],z=M(V);typeof V=="number"||typeof V=="boolean"?(R.__data[0]=V,n.bufferSubData(n.UNIFORM_BUFFER,L+U,R.__data)):V.isMatrix3?(R.__data[0]=V.elements[0],R.__data[1]=V.elements[1],R.__data[2]=V.elements[2],R.__data[3]=0,R.__data[4]=V.elements[3],R.__data[5]=V.elements[4],R.__data[6]=V.elements[5],R.__data[7]=0,R.__data[8]=V.elements[6],R.__data[9]=V.elements[7],R.__data[10]=V.elements[8],R.__data[11]=0):(V.toArray(R.__data,U),U+=z.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,L,R.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function p(b,x,g,T){const A=b.value,w=x+"_"+g;if(T[w]===void 0)return typeof A=="number"||typeof A=="boolean"?T[w]=A:T[w]=A.clone(),!0;{const S=T[w];if(typeof A=="number"||typeof A=="boolean"){if(S!==A)return T[w]=A,!0}else if(S.equals(A)===!1)return S.copy(A),!0}return!1}function v(b){const x=b.uniforms;let g=0;const T=16;for(let w=0,S=x.length;w<S;w++){const _=Array.isArray(x[w])?x[w]:[x[w]];for(let y=0,R=_.length;y<R;y++){const L=_[y],D=Array.isArray(L.value)?L.value:[L.value];for(let U=0,H=D.length;U<H;U++){const V=D[U],z=M(V),O=g%T,X=O%z.boundary,J=O+X;g+=X,J!==0&&T-J<z.storage&&(g+=T-J),L.__data=new Float32Array(z.storage/Float32Array.BYTES_PER_ELEMENT),L.__offset=g,g+=z.storage}}}const A=g%T;return A>0&&(g+=T-A),b.__size=g,b.__cache={},this}function M(b){const x={boundary:0,storage:0};return typeof b=="number"||typeof b=="boolean"?(x.boundary=4,x.storage=4):b.isVector2?(x.boundary=8,x.storage=8):b.isVector3||b.isColor?(x.boundary=16,x.storage=12):b.isVector4?(x.boundary=16,x.storage=16):b.isMatrix3?(x.boundary=48,x.storage=48):b.isMatrix4?(x.boundary=64,x.storage=64):b.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",b),x}function m(b){const x=b.target;x.removeEventListener("dispose",m);const g=r.indexOf(x.__bindingPointIndex);r.splice(g,1),n.deleteBuffer(s[x.id]),delete s[x.id],delete o[x.id]}function f(){for(const b in s)n.deleteBuffer(s[b]);r=[],s={},o={}}return{bind:l,update:c,dispose:f}}class r_{constructor(t={}){const{canvas:e=qf(),context:i=null,depth:s=!0,stencil:o=!1,alpha:r=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1,reverseDepthBuffer:u=!1}=t;this.isWebGLRenderer=!0;let p;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=i.getContextAttributes().alpha}else p=r;const v=new Uint32Array(4),M=new Int32Array(4);let m=null,f=null;const b=[],x=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=fe,this.toneMapping=li,this.toneMappingExposure=1;const g=this;let T=!1,A=0,w=0,S=null,_=-1,y=null;const R=new pe,L=new pe;let D=null;const U=new Gt(0);let H=0,V=e.width,z=e.height,O=1,X=null,J=null;const q=new pe(0,0,V,z),gt=new pe(0,0,V,z);let K=!1;const F=new Wl;let nt=!1,Mt=!1;const lt=new me,Ct=new me,Pt=new I,Ht=new pe,$t={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let pt=!1;function ht(){return S===null?O:1}let N=i;function Bt(C,W){return e.getContext(C,W)}try{const C={alpha:!0,depth:s,stencil:o,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Ul}`),e.addEventListener("webglcontextlost",ot,!1),e.addEventListener("webglcontextrestored",Tt,!1),e.addEventListener("webglcontextcreationerror",wt,!1),N===null){const W="webgl2";if(N=Bt(W,C),N===null)throw Bt(W)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(C){throw console.error("THREE.WebGLRenderer: "+C.message),C}let Y,yt,ut,Nt,At,P,E,G,Z,rt,et,mt,at,_t,Ut,it,bt,ft,xt,vt,Dt,Vt,ct,k;function dt(){Y=new d0(N),Y.init(),Vt=new Kv(N,Y),yt=new o0(N,Y,t,Vt),ut=new Yv(N,Y),yt.reverseDepthBuffer&&u&&ut.buffers.depth.setReversed(!0),Nt=new p0(N),At=new Lv,P=new jv(N,Y,ut,At,yt,Vt,Nt),E=new a0(g),G=new h0(g),Z=new Mp(N),ct=new i0(N,Z),rt=new u0(N,Z,Nt,ct),et=new g0(N,rt,Z,Nt),xt=new m0(N,yt,P),it=new r0(At),mt=new Iv(g,E,G,Y,yt,ct,it),at=new s_(g,At),_t=new Nv,Ut=new zv(Y),ft=new n0(g,E,G,ut,et,p,l),bt=new $v(g,et,yt),k=new o_(N,Nt,yt,ut),vt=new s0(N,Y,Nt),Dt=new f0(N,Y,Nt),Nt.programs=mt.programs,g.capabilities=yt,g.extensions=Y,g.properties=At,g.renderLists=_t,g.shadowMap=bt,g.state=ut,g.info=Nt}dt();const j=new n_(g,N);this.xr=j,this.getContext=function(){return N},this.getContextAttributes=function(){return N.getContextAttributes()},this.forceContextLoss=function(){const C=Y.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){const C=Y.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return O},this.setPixelRatio=function(C){C!==void 0&&(O=C,this.setSize(V,z,!1))},this.getSize=function(C){return C.set(V,z)},this.setSize=function(C,W,Q=!0){if(j.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}V=C,z=W,e.width=Math.floor(C*O),e.height=Math.floor(W*O),Q===!0&&(e.style.width=C+"px",e.style.height=W+"px"),this.setViewport(0,0,C,W)},this.getDrawingBufferSize=function(C){return C.set(V*O,z*O).floor()},this.setDrawingBufferSize=function(C,W,Q){V=C,z=W,O=Q,e.width=Math.floor(C*Q),e.height=Math.floor(W*Q),this.setViewport(0,0,C,W)},this.getCurrentViewport=function(C){return C.copy(R)},this.getViewport=function(C){return C.copy(q)},this.setViewport=function(C,W,Q,tt){C.isVector4?q.set(C.x,C.y,C.z,C.w):q.set(C,W,Q,tt),ut.viewport(R.copy(q).multiplyScalar(O).round())},this.getScissor=function(C){return C.copy(gt)},this.setScissor=function(C,W,Q,tt){C.isVector4?gt.set(C.x,C.y,C.z,C.w):gt.set(C,W,Q,tt),ut.scissor(L.copy(gt).multiplyScalar(O).round())},this.getScissorTest=function(){return K},this.setScissorTest=function(C){ut.setScissorTest(K=C)},this.setOpaqueSort=function(C){X=C},this.setTransparentSort=function(C){J=C},this.getClearColor=function(C){return C.copy(ft.getClearColor())},this.setClearColor=function(){ft.setClearColor.apply(ft,arguments)},this.getClearAlpha=function(){return ft.getClearAlpha()},this.setClearAlpha=function(){ft.setClearAlpha.apply(ft,arguments)},this.clear=function(C=!0,W=!0,Q=!0){let tt=0;if(C){let $=!1;if(S!==null){const St=S.texture.format;$=St===Hl||St===zl||St===Fl}if($){const St=S.texture.type,It=St===Wn||St===Ri||St===ro||St===Ms||St===Ol||St===kl,Ot=ft.getClearColor(),kt=ft.getClearAlpha(),qt=Ot.r,jt=Ot.g,Ft=Ot.b;It?(v[0]=qt,v[1]=jt,v[2]=Ft,v[3]=kt,N.clearBufferuiv(N.COLOR,0,v)):(M[0]=qt,M[1]=jt,M[2]=Ft,M[3]=kt,N.clearBufferiv(N.COLOR,0,M))}else tt|=N.COLOR_BUFFER_BIT}W&&(tt|=N.DEPTH_BUFFER_BIT),Q&&(tt|=N.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),N.clear(tt)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",ot,!1),e.removeEventListener("webglcontextrestored",Tt,!1),e.removeEventListener("webglcontextcreationerror",wt,!1),_t.dispose(),Ut.dispose(),At.dispose(),E.dispose(),G.dispose(),et.dispose(),ct.dispose(),k.dispose(),mt.dispose(),j.dispose(),j.removeEventListener("sessionstart",bo),j.removeEventListener("sessionend",Ds),fi.stop()};function ot(C){C.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),T=!0}function Tt(){console.log("THREE.WebGLRenderer: Context Restored."),T=!1;const C=Nt.autoReset,W=bt.enabled,Q=bt.autoUpdate,tt=bt.needsUpdate,$=bt.type;dt(),Nt.autoReset=C,bt.enabled=W,bt.autoUpdate=Q,bt.needsUpdate=tt,bt.type=$}function wt(C){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function Yt(C){const W=C.target;W.removeEventListener("dispose",Yt),oe(W)}function oe(C){be(C),At.remove(C)}function be(C){const W=At.get(C).programs;W!==void 0&&(W.forEach(function(Q){mt.releaseProgram(Q)}),C.isShaderMaterial&&mt.releaseShaderCache(C))}this.renderBufferDirect=function(C,W,Q,tt,$,St){W===null&&(W=$t);const It=$.isMesh&&$.matrixWorld.determinant()<0,Ot=Vu(C,W,Q,tt,$);ut.setMaterial(tt,It);let kt=Q.index,qt=1;if(tt.wireframe===!0){if(kt=rt.getWireframeAttribute(Q),kt===void 0)return;qt=2}const jt=Q.drawRange,Ft=Q.attributes.position;let se=jt.start*qt,ge=(jt.start+jt.count)*qt;St!==null&&(se=Math.max(se,St.start*qt),ge=Math.min(ge,(St.start+St.count)*qt)),kt!==null?(se=Math.max(se,0),ge=Math.min(ge,kt.count)):Ft!=null&&(se=Math.max(se,0),ge=Math.min(ge,Ft.count));const _e=ge-se;if(_e<0||_e===1/0)return;ct.setup($,tt,Ot,Q,kt);let je,ae=vt;if(kt!==null&&(je=Z.get(kt),ae=Dt,ae.setIndex(je)),$.isMesh)tt.wireframe===!0?(ut.setLineWidth(tt.wireframeLinewidth*ht()),ae.setMode(N.LINES)):ae.setMode(N.TRIANGLES);else if($.isLine){let zt=tt.linewidth;zt===void 0&&(zt=1),ut.setLineWidth(zt*ht()),$.isLineSegments?ae.setMode(N.LINES):$.isLineLoop?ae.setMode(N.LINE_LOOP):ae.setMode(N.LINE_STRIP)}else $.isPoints?ae.setMode(N.POINTS):$.isSprite&&ae.setMode(N.TRIANGLES);if($.isBatchedMesh)if($._multiDrawInstances!==null)ae.renderMultiDrawInstances($._multiDrawStarts,$._multiDrawCounts,$._multiDrawCount,$._multiDrawInstances);else if(Y.get("WEBGL_multi_draw"))ae.renderMultiDraw($._multiDrawStarts,$._multiDrawCounts,$._multiDrawCount);else{const zt=$._multiDrawStarts,Dn=$._multiDrawCounts,le=$._multiDrawCount,mn=kt?Z.get(kt).bytesPerElement:1,ki=At.get(tt).currentProgram.getUniforms();for(let Qe=0;Qe<le;Qe++)ki.setValue(N,"_gl_DrawID",Qe),ae.render(zt[Qe]/mn,Dn[Qe])}else if($.isInstancedMesh)ae.renderInstances(se,_e,$.count);else if(Q.isInstancedBufferGeometry){const zt=Q._maxInstanceCount!==void 0?Q._maxInstanceCount:1/0,Dn=Math.min(Q.instanceCount,zt);ae.renderInstances(se,_e,Dn)}else ae.render(se,_e)};function te(C,W,Q){C.transparent===!0&&C.side===sn&&C.forceSinglePass===!1?(C.side=Ze,C.needsUpdate=!0,Eo(C,W,Q),C.side=ci,C.needsUpdate=!0,Eo(C,W,Q),C.side=sn):Eo(C,W,Q)}this.compile=function(C,W,Q=null){Q===null&&(Q=C),f=Ut.get(Q),f.init(W),x.push(f),Q.traverseVisible(function($){$.isLight&&$.layers.test(W.layers)&&(f.pushLight($),$.castShadow&&f.pushShadow($))}),C!==Q&&C.traverseVisible(function($){$.isLight&&$.layers.test(W.layers)&&(f.pushLight($),$.castShadow&&f.pushShadow($))}),f.setupLights();const tt=new Set;return C.traverse(function($){if(!($.isMesh||$.isPoints||$.isLine||$.isSprite))return;const St=$.material;if(St)if(Array.isArray(St))for(let It=0;It<St.length;It++){const Ot=St[It];te(Ot,Q,$),tt.add(Ot)}else te(St,Q,$),tt.add(St)}),x.pop(),f=null,tt},this.compileAsync=function(C,W,Q=null){const tt=this.compile(C,W,Q);return new Promise($=>{function St(){if(tt.forEach(function(It){At.get(It).currentProgram.isReady()&&tt.delete(It)}),tt.size===0){$(C);return}setTimeout(St,10)}Y.get("KHR_parallel_shader_compile")!==null?St():setTimeout(St,10)})};let Be=null;function pn(C){Be&&Be(C)}function bo(){fi.stop()}function Ds(){fi.start()}const fi=new wd;fi.setAnimationLoop(pn),typeof self<"u"&&fi.setContext(self),this.setAnimationLoop=function(C){Be=C,j.setAnimationLoop(C),C===null?fi.stop():fi.start()},j.addEventListener("sessionstart",bo),j.addEventListener("sessionend",Ds),this.render=function(C,W){if(W!==void 0&&W.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(T===!0)return;if(C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),W.parent===null&&W.matrixWorldAutoUpdate===!0&&W.updateMatrixWorld(),j.enabled===!0&&j.isPresenting===!0&&(j.cameraAutoUpdate===!0&&j.updateCamera(W),W=j.getCamera()),C.isScene===!0&&C.onBeforeRender(g,C,W,S),f=Ut.get(C,x.length),f.init(W),x.push(f),Ct.multiplyMatrices(W.projectionMatrix,W.matrixWorldInverse),F.setFromProjectionMatrix(Ct),Mt=this.localClippingEnabled,nt=it.init(this.clippingPlanes,Mt),m=_t.get(C,b.length),m.init(),b.push(m),j.enabled===!0&&j.isPresenting===!0){const St=g.xr.getDepthSensingMesh();St!==null&&Br(St,W,-1/0,g.sortObjects)}Br(C,W,0,g.sortObjects),m.finish(),g.sortObjects===!0&&m.sort(X,J),pt=j.enabled===!1||j.isPresenting===!1||j.hasDepthSensing()===!1,pt&&ft.addToRenderList(m,C),this.info.render.frame++,nt===!0&&it.beginShadows();const Q=f.state.shadowsArray;bt.render(Q,C,W),nt===!0&&it.endShadows(),this.info.autoReset===!0&&this.info.reset();const tt=m.opaque,$=m.transmissive;if(f.setupLights(),W.isArrayCamera){const St=W.cameras;if($.length>0)for(let It=0,Ot=St.length;It<Ot;It++){const kt=St[It];ac(tt,$,C,kt)}pt&&ft.render(C);for(let It=0,Ot=St.length;It<Ot;It++){const kt=St[It];rc(m,C,kt,kt.viewport)}}else $.length>0&&ac(tt,$,C,W),pt&&ft.render(C),rc(m,C,W);S!==null&&(P.updateMultisampleRenderTarget(S),P.updateRenderTargetMipmap(S)),C.isScene===!0&&C.onAfterRender(g,C,W),ct.resetDefaultState(),_=-1,y=null,x.pop(),x.length>0?(f=x[x.length-1],nt===!0&&it.setGlobalState(g.clippingPlanes,f.state.camera)):f=null,b.pop(),b.length>0?m=b[b.length-1]:m=null};function Br(C,W,Q,tt){if(C.visible===!1)return;if(C.layers.test(W.layers)){if(C.isGroup)Q=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(W);else if(C.isLight)f.pushLight(C),C.castShadow&&f.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||F.intersectsSprite(C)){tt&&Ht.setFromMatrixPosition(C.matrixWorld).applyMatrix4(Ct);const It=et.update(C),Ot=C.material;Ot.visible&&m.push(C,It,Ot,Q,Ht.z,null)}}else if((C.isMesh||C.isLine||C.isPoints)&&(!C.frustumCulled||F.intersectsObject(C))){const It=et.update(C),Ot=C.material;if(tt&&(C.boundingSphere!==void 0?(C.boundingSphere===null&&C.computeBoundingSphere(),Ht.copy(C.boundingSphere.center)):(It.boundingSphere===null&&It.computeBoundingSphere(),Ht.copy(It.boundingSphere.center)),Ht.applyMatrix4(C.matrixWorld).applyMatrix4(Ct)),Array.isArray(Ot)){const kt=It.groups;for(let qt=0,jt=kt.length;qt<jt;qt++){const Ft=kt[qt],se=Ot[Ft.materialIndex];se&&se.visible&&m.push(C,It,se,Q,Ht.z,Ft)}}else Ot.visible&&m.push(C,It,Ot,Q,Ht.z,null)}}const St=C.children;for(let It=0,Ot=St.length;It<Ot;It++)Br(St[It],W,Q,tt)}function rc(C,W,Q,tt){const $=C.opaque,St=C.transmissive,It=C.transparent;f.setupLightsView(Q),nt===!0&&it.setGlobalState(g.clippingPlanes,Q),tt&&ut.viewport(R.copy(tt)),$.length>0&&So($,W,Q),St.length>0&&So(St,W,Q),It.length>0&&So(It,W,Q),ut.buffers.depth.setTest(!0),ut.buffers.depth.setMask(!0),ut.buffers.color.setMask(!0),ut.setPolygonOffset(!1)}function ac(C,W,Q,tt){if((Q.isScene===!0?Q.overrideMaterial:null)!==null)return;f.state.transmissionRenderTarget[tt.id]===void 0&&(f.state.transmissionRenderTarget[tt.id]=new Pi(1,1,{generateMipmaps:!0,type:Y.has("EXT_color_buffer_half_float")||Y.has("EXT_color_buffer_float")?ho:Wn,minFilter:Ai,samples:4,stencilBuffer:o,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ne.workingColorSpace}));const St=f.state.transmissionRenderTarget[tt.id],It=tt.viewport||R;St.setSize(It.z,It.w);const Ot=g.getRenderTarget();g.setRenderTarget(St),g.getClearColor(U),H=g.getClearAlpha(),H<1&&g.setClearColor(16777215,.5),g.clear(),pt&&ft.render(Q);const kt=g.toneMapping;g.toneMapping=li;const qt=tt.viewport;if(tt.viewport!==void 0&&(tt.viewport=void 0),f.setupLightsView(tt),nt===!0&&it.setGlobalState(g.clippingPlanes,tt),So(C,Q,tt),P.updateMultisampleRenderTarget(St),P.updateRenderTargetMipmap(St),Y.has("WEBGL_multisampled_render_to_texture")===!1){let jt=!1;for(let Ft=0,se=W.length;Ft<se;Ft++){const ge=W[Ft],_e=ge.object,je=ge.geometry,ae=ge.material,zt=ge.group;if(ae.side===sn&&_e.layers.test(tt.layers)){const Dn=ae.side;ae.side=Ze,ae.needsUpdate=!0,lc(_e,Q,tt,je,ae,zt),ae.side=Dn,ae.needsUpdate=!0,jt=!0}}jt===!0&&(P.updateMultisampleRenderTarget(St),P.updateRenderTargetMipmap(St))}g.setRenderTarget(Ot),g.setClearColor(U,H),qt!==void 0&&(tt.viewport=qt),g.toneMapping=kt}function So(C,W,Q){const tt=W.isScene===!0?W.overrideMaterial:null;for(let $=0,St=C.length;$<St;$++){const It=C[$],Ot=It.object,kt=It.geometry,qt=tt===null?It.material:tt,jt=It.group;Ot.layers.test(Q.layers)&&lc(Ot,W,Q,kt,qt,jt)}}function lc(C,W,Q,tt,$,St){C.onBeforeRender(g,W,Q,tt,$,St),C.modelViewMatrix.multiplyMatrices(Q.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),$.onBeforeRender(g,W,Q,tt,C,St),$.transparent===!0&&$.side===sn&&$.forceSinglePass===!1?($.side=Ze,$.needsUpdate=!0,g.renderBufferDirect(Q,W,tt,$,C,St),$.side=ci,$.needsUpdate=!0,g.renderBufferDirect(Q,W,tt,$,C,St),$.side=sn):g.renderBufferDirect(Q,W,tt,$,C,St),C.onAfterRender(g,W,Q,tt,$,St)}function Eo(C,W,Q){W.isScene!==!0&&(W=$t);const tt=At.get(C),$=f.state.lights,St=f.state.shadowsArray,It=$.state.version,Ot=mt.getParameters(C,$.state,St,W,Q),kt=mt.getProgramCacheKey(Ot);let qt=tt.programs;tt.environment=C.isMeshStandardMaterial?W.environment:null,tt.fog=W.fog,tt.envMap=(C.isMeshStandardMaterial?G:E).get(C.envMap||tt.environment),tt.envMapRotation=tt.environment!==null&&C.envMap===null?W.environmentRotation:C.envMapRotation,qt===void 0&&(C.addEventListener("dispose",Yt),qt=new Map,tt.programs=qt);let jt=qt.get(kt);if(jt!==void 0){if(tt.currentProgram===jt&&tt.lightsStateVersion===It)return hc(C,Ot),jt}else Ot.uniforms=mt.getUniforms(C),C.onBeforeCompile(Ot,g),jt=mt.acquireProgram(Ot,kt),qt.set(kt,jt),tt.uniforms=Ot.uniforms;const Ft=tt.uniforms;return(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(Ft.clippingPlanes=it.uniform),hc(C,Ot),tt.needsLights=$u(C),tt.lightsStateVersion=It,tt.needsLights&&(Ft.ambientLightColor.value=$.state.ambient,Ft.lightProbe.value=$.state.probe,Ft.directionalLights.value=$.state.directional,Ft.directionalLightShadows.value=$.state.directionalShadow,Ft.spotLights.value=$.state.spot,Ft.spotLightShadows.value=$.state.spotShadow,Ft.rectAreaLights.value=$.state.rectArea,Ft.ltc_1.value=$.state.rectAreaLTC1,Ft.ltc_2.value=$.state.rectAreaLTC2,Ft.pointLights.value=$.state.point,Ft.pointLightShadows.value=$.state.pointShadow,Ft.hemisphereLights.value=$.state.hemi,Ft.directionalShadowMap.value=$.state.directionalShadowMap,Ft.directionalShadowMatrix.value=$.state.directionalShadowMatrix,Ft.spotShadowMap.value=$.state.spotShadowMap,Ft.spotLightMatrix.value=$.state.spotLightMatrix,Ft.spotLightMap.value=$.state.spotLightMap,Ft.pointShadowMap.value=$.state.pointShadowMap,Ft.pointShadowMatrix.value=$.state.pointShadowMatrix),tt.currentProgram=jt,tt.uniformsList=null,jt}function cc(C){if(C.uniformsList===null){const W=C.currentProgram.getUniforms();C.uniformsList=dr.seqWithValue(W.seq,C.uniforms)}return C.uniformsList}function hc(C,W){const Q=At.get(C);Q.outputColorSpace=W.outputColorSpace,Q.batching=W.batching,Q.batchingColor=W.batchingColor,Q.instancing=W.instancing,Q.instancingColor=W.instancingColor,Q.instancingMorph=W.instancingMorph,Q.skinning=W.skinning,Q.morphTargets=W.morphTargets,Q.morphNormals=W.morphNormals,Q.morphColors=W.morphColors,Q.morphTargetsCount=W.morphTargetsCount,Q.numClippingPlanes=W.numClippingPlanes,Q.numIntersection=W.numClipIntersection,Q.vertexAlphas=W.vertexAlphas,Q.vertexTangents=W.vertexTangents,Q.toneMapping=W.toneMapping}function Vu(C,W,Q,tt,$){W.isScene!==!0&&(W=$t),P.resetTextureUnits();const St=W.fog,It=tt.isMeshStandardMaterial?W.environment:null,Ot=S===null?g.outputColorSpace:S.isXRRenderTarget===!0?S.texture.colorSpace:ws,kt=(tt.isMeshStandardMaterial?G:E).get(tt.envMap||It),qt=tt.vertexColors===!0&&!!Q.attributes.color&&Q.attributes.color.itemSize===4,jt=!!Q.attributes.tangent&&(!!tt.normalMap||tt.anisotropy>0),Ft=!!Q.morphAttributes.position,se=!!Q.morphAttributes.normal,ge=!!Q.morphAttributes.color;let _e=li;tt.toneMapped&&(S===null||S.isXRRenderTarget===!0)&&(_e=g.toneMapping);const je=Q.morphAttributes.position||Q.morphAttributes.normal||Q.morphAttributes.color,ae=je!==void 0?je.length:0,zt=At.get(tt),Dn=f.state.lights;if(nt===!0&&(Mt===!0||C!==y)){const an=C===y&&tt.id===_;it.setState(tt,C,an)}let le=!1;tt.version===zt.__version?(zt.needsLights&&zt.lightsStateVersion!==Dn.state.version||zt.outputColorSpace!==Ot||$.isBatchedMesh&&zt.batching===!1||!$.isBatchedMesh&&zt.batching===!0||$.isBatchedMesh&&zt.batchingColor===!0&&$.colorTexture===null||$.isBatchedMesh&&zt.batchingColor===!1&&$.colorTexture!==null||$.isInstancedMesh&&zt.instancing===!1||!$.isInstancedMesh&&zt.instancing===!0||$.isSkinnedMesh&&zt.skinning===!1||!$.isSkinnedMesh&&zt.skinning===!0||$.isInstancedMesh&&zt.instancingColor===!0&&$.instanceColor===null||$.isInstancedMesh&&zt.instancingColor===!1&&$.instanceColor!==null||$.isInstancedMesh&&zt.instancingMorph===!0&&$.morphTexture===null||$.isInstancedMesh&&zt.instancingMorph===!1&&$.morphTexture!==null||zt.envMap!==kt||tt.fog===!0&&zt.fog!==St||zt.numClippingPlanes!==void 0&&(zt.numClippingPlanes!==it.numPlanes||zt.numIntersection!==it.numIntersection)||zt.vertexAlphas!==qt||zt.vertexTangents!==jt||zt.morphTargets!==Ft||zt.morphNormals!==se||zt.morphColors!==ge||zt.toneMapping!==_e||zt.morphTargetsCount!==ae)&&(le=!0):(le=!0,zt.__version=tt.version);let mn=zt.currentProgram;le===!0&&(mn=Eo(tt,W,$));let ki=!1,Qe=!1,Ns=!1;const ye=mn.getUniforms(),wn=zt.uniforms;if(ut.useProgram(mn.program)&&(ki=!0,Qe=!0,Ns=!0),tt.id!==_&&(_=tt.id,Qe=!0),ki||y!==C){ut.buffers.depth.getReversed()?(lt.copy(C.projectionMatrix),Kf(lt),Zf(lt),ye.setValue(N,"projectionMatrix",lt)):ye.setValue(N,"projectionMatrix",C.projectionMatrix),ye.setValue(N,"viewMatrix",C.matrixWorldInverse);const qn=ye.map.cameraPosition;qn!==void 0&&qn.setValue(N,Pt.setFromMatrixPosition(C.matrixWorld)),yt.logarithmicDepthBuffer&&ye.setValue(N,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),(tt.isMeshPhongMaterial||tt.isMeshToonMaterial||tt.isMeshLambertMaterial||tt.isMeshBasicMaterial||tt.isMeshStandardMaterial||tt.isShaderMaterial)&&ye.setValue(N,"isOrthographic",C.isOrthographicCamera===!0),y!==C&&(y=C,Qe=!0,Ns=!0)}if($.isSkinnedMesh){ye.setOptional(N,$,"bindMatrix"),ye.setOptional(N,$,"bindMatrixInverse");const an=$.skeleton;an&&(an.boneTexture===null&&an.computeBoneTexture(),ye.setValue(N,"boneTexture",an.boneTexture,P))}$.isBatchedMesh&&(ye.setOptional(N,$,"batchingTexture"),ye.setValue(N,"batchingTexture",$._matricesTexture,P),ye.setOptional(N,$,"batchingIdTexture"),ye.setValue(N,"batchingIdTexture",$._indirectTexture,P),ye.setOptional(N,$,"batchingColorTexture"),$._colorsTexture!==null&&ye.setValue(N,"batchingColorTexture",$._colorsTexture,P));const Us=Q.morphAttributes;if((Us.position!==void 0||Us.normal!==void 0||Us.color!==void 0)&&xt.update($,Q,mn),(Qe||zt.receiveShadow!==$.receiveShadow)&&(zt.receiveShadow=$.receiveShadow,ye.setValue(N,"receiveShadow",$.receiveShadow)),tt.isMeshGouraudMaterial&&tt.envMap!==null&&(wn.envMap.value=kt,wn.flipEnvMap.value=kt.isCubeTexture&&kt.isRenderTargetTexture===!1?-1:1),tt.isMeshStandardMaterial&&tt.envMap===null&&W.environment!==null&&(wn.envMapIntensity.value=W.environmentIntensity),Qe&&(ye.setValue(N,"toneMappingExposure",g.toneMappingExposure),zt.needsLights&&Wu(wn,Ns),St&&tt.fog===!0&&at.refreshFogUniforms(wn,St),at.refreshMaterialUniforms(wn,tt,O,z,f.state.transmissionRenderTarget[C.id]),dr.upload(N,cc(zt),wn,P)),tt.isShaderMaterial&&tt.uniformsNeedUpdate===!0&&(dr.upload(N,cc(zt),wn,P),tt.uniformsNeedUpdate=!1),tt.isSpriteMaterial&&ye.setValue(N,"center",$.center),ye.setValue(N,"modelViewMatrix",$.modelViewMatrix),ye.setValue(N,"normalMatrix",$.normalMatrix),ye.setValue(N,"modelMatrix",$.matrixWorld),tt.isShaderMaterial||tt.isRawShaderMaterial){const an=tt.uniformsGroups;for(let qn=0,jn=an.length;qn<jn;qn++){const dc=an[qn];k.update(dc,mn),k.bind(dc,mn)}}return mn}function Wu(C,W){C.ambientLightColor.needsUpdate=W,C.lightProbe.needsUpdate=W,C.directionalLights.needsUpdate=W,C.directionalLightShadows.needsUpdate=W,C.pointLights.needsUpdate=W,C.pointLightShadows.needsUpdate=W,C.spotLights.needsUpdate=W,C.spotLightShadows.needsUpdate=W,C.rectAreaLights.needsUpdate=W,C.hemisphereLights.needsUpdate=W}function $u(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return A},this.getActiveMipmapLevel=function(){return w},this.getRenderTarget=function(){return S},this.setRenderTargetTextures=function(C,W,Q){At.get(C.texture).__webglTexture=W,At.get(C.depthTexture).__webglTexture=Q;const tt=At.get(C);tt.__hasExternalTextures=!0,tt.__autoAllocateDepthBuffer=Q===void 0,tt.__autoAllocateDepthBuffer||Y.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),tt.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(C,W){const Q=At.get(C);Q.__webglFramebuffer=W,Q.__useDefaultFramebuffer=W===void 0},this.setRenderTarget=function(C,W=0,Q=0){S=C,A=W,w=Q;let tt=!0,$=null,St=!1,It=!1;if(C){const kt=At.get(C);if(kt.__useDefaultFramebuffer!==void 0)ut.bindFramebuffer(N.FRAMEBUFFER,null),tt=!1;else if(kt.__webglFramebuffer===void 0)P.setupRenderTarget(C);else if(kt.__hasExternalTextures)P.rebindTextures(C,At.get(C.texture).__webglTexture,At.get(C.depthTexture).__webglTexture);else if(C.depthBuffer){const Ft=C.depthTexture;if(kt.__boundDepthTexture!==Ft){if(Ft!==null&&At.has(Ft)&&(C.width!==Ft.image.width||C.height!==Ft.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");P.setupDepthRenderbuffer(C)}}const qt=C.texture;(qt.isData3DTexture||qt.isDataArrayTexture||qt.isCompressedArrayTexture)&&(It=!0);const jt=At.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(Array.isArray(jt[W])?$=jt[W][Q]:$=jt[W],St=!0):C.samples>0&&P.useMultisampledRTT(C)===!1?$=At.get(C).__webglMultisampledFramebuffer:Array.isArray(jt)?$=jt[Q]:$=jt,R.copy(C.viewport),L.copy(C.scissor),D=C.scissorTest}else R.copy(q).multiplyScalar(O).floor(),L.copy(gt).multiplyScalar(O).floor(),D=K;if(ut.bindFramebuffer(N.FRAMEBUFFER,$)&&tt&&ut.drawBuffers(C,$),ut.viewport(R),ut.scissor(L),ut.setScissorTest(D),St){const kt=At.get(C.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_CUBE_MAP_POSITIVE_X+W,kt.__webglTexture,Q)}else if(It){const kt=At.get(C.texture),qt=W||0;N.framebufferTextureLayer(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,kt.__webglTexture,Q||0,qt)}_=-1},this.readRenderTargetPixels=function(C,W,Q,tt,$,St,It){if(!(C&&C.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ot=At.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&It!==void 0&&(Ot=Ot[It]),Ot){ut.bindFramebuffer(N.FRAMEBUFFER,Ot);try{const kt=C.texture,qt=kt.format,jt=kt.type;if(!yt.textureFormatReadable(qt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!yt.textureTypeReadable(jt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}W>=0&&W<=C.width-tt&&Q>=0&&Q<=C.height-$&&N.readPixels(W,Q,tt,$,Vt.convert(qt),Vt.convert(jt),St)}finally{const kt=S!==null?At.get(S).__webglFramebuffer:null;ut.bindFramebuffer(N.FRAMEBUFFER,kt)}}},this.readRenderTargetPixelsAsync=async function(C,W,Q,tt,$,St,It){if(!(C&&C.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ot=At.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&It!==void 0&&(Ot=Ot[It]),Ot){const kt=C.texture,qt=kt.format,jt=kt.type;if(!yt.textureFormatReadable(qt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!yt.textureTypeReadable(jt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(W>=0&&W<=C.width-tt&&Q>=0&&Q<=C.height-$){ut.bindFramebuffer(N.FRAMEBUFFER,Ot);const Ft=N.createBuffer();N.bindBuffer(N.PIXEL_PACK_BUFFER,Ft),N.bufferData(N.PIXEL_PACK_BUFFER,St.byteLength,N.STREAM_READ),N.readPixels(W,Q,tt,$,Vt.convert(qt),Vt.convert(jt),0);const se=S!==null?At.get(S).__webglFramebuffer:null;ut.bindFramebuffer(N.FRAMEBUFFER,se);const ge=N.fenceSync(N.SYNC_GPU_COMMANDS_COMPLETE,0);return N.flush(),await jf(N,ge,4),N.bindBuffer(N.PIXEL_PACK_BUFFER,Ft),N.getBufferSubData(N.PIXEL_PACK_BUFFER,0,St),N.deleteBuffer(Ft),N.deleteSync(ge),St}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(C,W=null,Q=0){C.isTexture!==!0&&(Ks("WebGLRenderer: copyFramebufferToTexture function signature has changed."),W=arguments[0]||null,C=arguments[1]);const tt=Math.pow(2,-Q),$=Math.floor(C.image.width*tt),St=Math.floor(C.image.height*tt),It=W!==null?W.x:0,Ot=W!==null?W.y:0;P.setTexture2D(C,0),N.copyTexSubImage2D(N.TEXTURE_2D,Q,0,0,It,Ot,$,St),ut.unbindTexture()},this.copyTextureToTexture=function(C,W,Q=null,tt=null,$=0){C.isTexture!==!0&&(Ks("WebGLRenderer: copyTextureToTexture function signature has changed."),tt=arguments[0]||null,C=arguments[1],W=arguments[2],$=arguments[3]||0,Q=null);let St,It,Ot,kt,qt,jt,Ft,se,ge;const _e=C.isCompressedTexture?C.mipmaps[$]:C.image;Q!==null?(St=Q.max.x-Q.min.x,It=Q.max.y-Q.min.y,Ot=Q.isBox3?Q.max.z-Q.min.z:1,kt=Q.min.x,qt=Q.min.y,jt=Q.isBox3?Q.min.z:0):(St=_e.width,It=_e.height,Ot=_e.depth||1,kt=0,qt=0,jt=0),tt!==null?(Ft=tt.x,se=tt.y,ge=tt.z):(Ft=0,se=0,ge=0);const je=Vt.convert(W.format),ae=Vt.convert(W.type);let zt;W.isData3DTexture?(P.setTexture3D(W,0),zt=N.TEXTURE_3D):W.isDataArrayTexture||W.isCompressedArrayTexture?(P.setTexture2DArray(W,0),zt=N.TEXTURE_2D_ARRAY):(P.setTexture2D(W,0),zt=N.TEXTURE_2D),N.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,W.flipY),N.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,W.premultiplyAlpha),N.pixelStorei(N.UNPACK_ALIGNMENT,W.unpackAlignment);const Dn=N.getParameter(N.UNPACK_ROW_LENGTH),le=N.getParameter(N.UNPACK_IMAGE_HEIGHT),mn=N.getParameter(N.UNPACK_SKIP_PIXELS),ki=N.getParameter(N.UNPACK_SKIP_ROWS),Qe=N.getParameter(N.UNPACK_SKIP_IMAGES);N.pixelStorei(N.UNPACK_ROW_LENGTH,_e.width),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,_e.height),N.pixelStorei(N.UNPACK_SKIP_PIXELS,kt),N.pixelStorei(N.UNPACK_SKIP_ROWS,qt),N.pixelStorei(N.UNPACK_SKIP_IMAGES,jt);const Ns=C.isDataArrayTexture||C.isData3DTexture,ye=W.isDataArrayTexture||W.isData3DTexture;if(C.isRenderTargetTexture||C.isDepthTexture){const wn=At.get(C),Us=At.get(W),an=At.get(wn.__renderTarget),qn=At.get(Us.__renderTarget);ut.bindFramebuffer(N.READ_FRAMEBUFFER,an.__webglFramebuffer),ut.bindFramebuffer(N.DRAW_FRAMEBUFFER,qn.__webglFramebuffer);for(let jn=0;jn<Ot;jn++)Ns&&N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,At.get(C).__webglTexture,$,jt+jn),C.isDepthTexture?(ye&&N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,At.get(W).__webglTexture,$,ge+jn),N.blitFramebuffer(kt,qt,St,It,Ft,se,St,It,N.DEPTH_BUFFER_BIT,N.NEAREST)):ye?N.copyTexSubImage3D(zt,$,Ft,se,ge+jn,kt,qt,St,It):N.copyTexSubImage2D(zt,$,Ft,se,ge+jn,kt,qt,St,It);ut.bindFramebuffer(N.READ_FRAMEBUFFER,null),ut.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else ye?C.isDataTexture||C.isData3DTexture?N.texSubImage3D(zt,$,Ft,se,ge,St,It,Ot,je,ae,_e.data):W.isCompressedArrayTexture?N.compressedTexSubImage3D(zt,$,Ft,se,ge,St,It,Ot,je,_e.data):N.texSubImage3D(zt,$,Ft,se,ge,St,It,Ot,je,ae,_e):C.isDataTexture?N.texSubImage2D(N.TEXTURE_2D,$,Ft,se,St,It,je,ae,_e.data):C.isCompressedTexture?N.compressedTexSubImage2D(N.TEXTURE_2D,$,Ft,se,_e.width,_e.height,je,_e.data):N.texSubImage2D(N.TEXTURE_2D,$,Ft,se,St,It,je,ae,_e);N.pixelStorei(N.UNPACK_ROW_LENGTH,Dn),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,le),N.pixelStorei(N.UNPACK_SKIP_PIXELS,mn),N.pixelStorei(N.UNPACK_SKIP_ROWS,ki),N.pixelStorei(N.UNPACK_SKIP_IMAGES,Qe),$===0&&W.generateMipmaps&&N.generateMipmap(zt),ut.unbindTexture()},this.copyTextureToTexture3D=function(C,W,Q=null,tt=null,$=0){return C.isTexture!==!0&&(Ks("WebGLRenderer: copyTextureToTexture3D function signature has changed."),Q=arguments[0]||null,tt=arguments[1]||null,C=arguments[2],W=arguments[3],$=arguments[4]||0),Ks('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(C,W,Q,tt,$)},this.initRenderTarget=function(C){At.get(C).__webglFramebuffer===void 0&&P.setupRenderTarget(C)},this.initTexture=function(C){C.isCubeTexture?P.setTextureCube(C,0):C.isData3DTexture?P.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?P.setTexture2DArray(C,0):P.setTexture2D(C,0),ut.unbindTexture()},this.resetState=function(){A=0,w=0,S=null,ut.reset(),ct.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Hn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorspace=ne._getDrawingBufferColorSpace(t),e.unpackColorSpace=ne._getUnpackColorSpace()}}class a_ extends Ie{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new In,this.environmentIntensity=1,this.environmentRotation=new In,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class l_{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=Sl,this.updateRanges=[],this.version=0,this.uuid=Gn()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,i){t*=this.stride,i*=e.stride;for(let s=0,o=this.stride;s<o;s++)this.array[t+s]=e.array[i+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Gn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(e,this.stride);return i.setUsage(this.usage),i}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Gn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Xe=new I;class gr{constructor(t,e,i,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=i,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,i=this.data.count;e<i;e++)Xe.fromBufferAttribute(this,e),Xe.applyMatrix4(t),this.setXYZ(e,Xe.x,Xe.y,Xe.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)Xe.fromBufferAttribute(this,e),Xe.applyNormalMatrix(t),this.setXYZ(e,Xe.x,Xe.y,Xe.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)Xe.fromBufferAttribute(this,e),Xe.transformDirection(t),this.setXYZ(e,Xe.x,Xe.y,Xe.z);return this}getComponent(t,e){let i=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(i=xn(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=ce(i,this.array)),this.data.array[t*this.data.stride+this.offset+e]=i,this}setX(t,e){return this.normalized&&(e=ce(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=ce(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=ce(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=ce(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=xn(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=xn(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=xn(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=xn(e,this.array)),e}setXY(t,e,i){return t=t*this.data.stride+this.offset,this.normalized&&(e=ce(e,this.array),i=ce(i,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this}setXYZ(t,e,i,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=ce(e,this.array),i=ce(i,this.array),s=ce(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=s,this}setXYZW(t,e,i,s,o){return t=t*this.data.stride+this.offset,this.normalized&&(e=ce(e,this.array),i=ce(i,this.array),s=ce(s,this.array),o=ce(o,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=s,this.data.array[t+3]=o,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let i=0;i<this.count;i++){const s=i*this.data.stride+this.offset;for(let o=0;o<this.itemSize;o++)e.push(this.data.array[s+o])}return new dn(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new gr(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let i=0;i<this.count;i++){const s=i*this.data.stride+this.offset;for(let o=0;o<this.itemSize;o++)e.push(this.data.array[s+o])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class Xl extends Ni{static get type(){return"SpriteMaterial"}constructor(t){super(),this.isSpriteMaterial=!0,this.color=new Gt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}let Qi;const zs=new I,ts=new I,es=new I,ns=new Et,Hs=new Et,Dd=new me,Xo=new I,Gs=new I,Yo=new I,ch=new Et,da=new Et,hh=new Et;class Nd extends Ie{constructor(t=new Xl){if(super(),this.isSprite=!0,this.type="Sprite",Qi===void 0){Qi=new ze;const e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new l_(e,5);Qi.setIndex([0,1,2,0,2,3]),Qi.setAttribute("position",new gr(i,3,0,!1)),Qi.setAttribute("uv",new gr(i,2,3,!1))}this.geometry=Qi,this.material=t,this.center=new Et(.5,.5)}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),ts.setFromMatrixScale(this.matrixWorld),Dd.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),es.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&ts.multiplyScalar(-es.z);const i=this.material.rotation;let s,o;i!==0&&(o=Math.cos(i),s=Math.sin(i));const r=this.center;qo(Xo.set(-.5,-.5,0),es,r,ts,s,o),qo(Gs.set(.5,-.5,0),es,r,ts,s,o),qo(Yo.set(.5,.5,0),es,r,ts,s,o),ch.set(0,0),da.set(1,0),hh.set(1,1);let a=t.ray.intersectTriangle(Xo,Gs,Yo,!1,zs);if(a===null&&(qo(Gs.set(-.5,.5,0),es,r,ts,s,o),da.set(0,1),a=t.ray.intersectTriangle(Xo,Yo,Gs,!1,zs),a===null))return;const l=t.ray.origin.distanceTo(zs);l<t.near||l>t.far||e.push({distance:l,point:zs.clone(),uv:hn.getInterpolation(zs,Xo,Gs,Yo,ch,da,hh,new Et),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}}function qo(n,t,e,i,s,o){ns.subVectors(n,e).addScalar(.5).multiply(i),s!==void 0?(Hs.x=o*ns.x-s*ns.y,Hs.y=s*ns.x+o*ns.y):Hs.copy(ns),n.copy(t),n.x+=Hs.x,n.y+=Hs.y,n.applyMatrix4(Dd)}class Ud extends Ni{static get type(){return"LineBasicMaterial"}constructor(t){super(),this.isLineBasicMaterial=!0,this.color=new Gt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const vr=new I,_r=new I,dh=new me,Vs=new Lr,jo=new Ir,ua=new I,uh=new I;class c_ extends Ie{constructor(t=new ze,e=new Ud){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,i=[0];for(let s=1,o=e.count;s<o;s++)vr.fromBufferAttribute(e,s-1),_r.fromBufferAttribute(e,s),i[s]=i[s-1],i[s]+=vr.distanceTo(_r);t.setAttribute("lineDistance",new he(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const i=this.geometry,s=this.matrixWorld,o=t.params.Line.threshold,r=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),jo.copy(i.boundingSphere),jo.applyMatrix4(s),jo.radius+=o,t.ray.intersectsSphere(jo)===!1)return;dh.copy(s).invert(),Vs.copy(t.ray).applyMatrix4(dh);const a=o/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,h=i.index,u=i.attributes.position;if(h!==null){const p=Math.max(0,r.start),v=Math.min(h.count,r.start+r.count);for(let M=p,m=v-1;M<m;M+=c){const f=h.getX(M),b=h.getX(M+1),x=Ko(this,t,Vs,l,f,b);x&&e.push(x)}if(this.isLineLoop){const M=h.getX(v-1),m=h.getX(p),f=Ko(this,t,Vs,l,M,m);f&&e.push(f)}}else{const p=Math.max(0,r.start),v=Math.min(u.count,r.start+r.count);for(let M=p,m=v-1;M<m;M+=c){const f=Ko(this,t,Vs,l,M,M+1);f&&e.push(f)}if(this.isLineLoop){const M=Ko(this,t,Vs,l,v-1,p);M&&e.push(M)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,r=s.length;o<r;o++){const a=s[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=o}}}}}function Ko(n,t,e,i,s,o){const r=n.geometry.attributes.position;if(vr.fromBufferAttribute(r,s),_r.fromBufferAttribute(r,o),e.distanceSqToSegment(vr,_r,ua,uh)>i)return;ua.applyMatrix4(n.matrixWorld);const l=t.ray.origin.distanceTo(ua);if(!(l<t.near||l>t.far))return{distance:l,point:uh.clone().applyMatrix4(n.matrixWorld),index:s,face:null,faceIndex:null,barycoord:null,object:n}}class Ne extends qe{constructor(t,e,i,s,o,r,a,l,c){super(t,e,i,s,o,r,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Ln{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){const i=this.getUtoTmapping(t);return this.getPoint(i,e)}getPoints(t=5){const e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return e}getSpacedPoints(t=5){const e=[];for(let i=0;i<=t;i++)e.push(this.getPointAt(i/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let i,s=this.getPoint(0),o=0;e.push(0);for(let r=1;r<=t;r++)i=this.getPoint(r/t),o+=i.distanceTo(s),e.push(o),s=i;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){const i=this.getLengths();let s=0;const o=i.length;let r;e?r=e:r=t*i[o-1];let a=0,l=o-1,c;for(;a<=l;)if(s=Math.floor(a+(l-a)/2),c=i[s]-r,c<0)a=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,i[s]===r)return s/(o-1);const h=i[s],u=i[s+1]-h,p=(r-h)/u;return(s+p)/(o-1)}getTangent(t,e){let s=t-1e-4,o=t+1e-4;s<0&&(s=0),o>1&&(o=1);const r=this.getPoint(s),a=this.getPoint(o),l=e||(r.isVector2?new Et:new I);return l.copy(a).sub(r).normalize(),l}getTangentAt(t,e){const i=this.getUtoTmapping(t);return this.getTangent(i,e)}computeFrenetFrames(t,e){const i=new I,s=[],o=[],r=[],a=new I,l=new me;for(let p=0;p<=t;p++){const v=p/t;s[p]=this.getTangentAt(v,new I)}o[0]=new I,r[0]=new I;let c=Number.MAX_VALUE;const h=Math.abs(s[0].x),d=Math.abs(s[0].y),u=Math.abs(s[0].z);h<=c&&(c=h,i.set(1,0,0)),d<=c&&(c=d,i.set(0,1,0)),u<=c&&i.set(0,0,1),a.crossVectors(s[0],i).normalize(),o[0].crossVectors(s[0],a),r[0].crossVectors(s[0],o[0]);for(let p=1;p<=t;p++){if(o[p]=o[p-1].clone(),r[p]=r[p-1].clone(),a.crossVectors(s[p-1],s[p]),a.length()>Number.EPSILON){a.normalize();const v=Math.acos(we(s[p-1].dot(s[p]),-1,1));o[p].applyMatrix4(l.makeRotationAxis(a,v))}r[p].crossVectors(s[p],o[p])}if(e===!0){let p=Math.acos(we(o[0].dot(o[t]),-1,1));p/=t,s[0].dot(a.crossVectors(o[0],o[t]))>0&&(p=-p);for(let v=1;v<=t;v++)o[v].applyMatrix4(l.makeRotationAxis(s[v],p*v)),r[v].crossVectors(s[v],o[v])}return{tangents:s,normals:o,binormals:r}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class Yl extends Ln{constructor(t=0,e=0,i=1,s=1,o=0,r=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=i,this.yRadius=s,this.aStartAngle=o,this.aEndAngle=r,this.aClockwise=a,this.aRotation=l}getPoint(t,e=new Et){const i=e,s=Math.PI*2;let o=this.aEndAngle-this.aStartAngle;const r=Math.abs(o)<Number.EPSILON;for(;o<0;)o+=s;for(;o>s;)o-=s;o<Number.EPSILON&&(r?o=0:o=s),this.aClockwise===!0&&!r&&(o===s?o=-s:o=o-s);const a=this.aStartAngle+t*o;let l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const h=Math.cos(this.aRotation),d=Math.sin(this.aRotation),u=l-this.aX,p=c-this.aY;l=u*h-p*d+this.aX,c=u*d+p*h+this.aY}return i.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class h_ extends Yl{constructor(t,e,i,s,o,r){super(t,e,i,i,s,o,r),this.isArcCurve=!0,this.type="ArcCurve"}}function ql(){let n=0,t=0,e=0,i=0;function s(o,r,a,l){n=o,t=a,e=-3*o+3*r-2*a-l,i=2*o-2*r+a+l}return{initCatmullRom:function(o,r,a,l,c){s(r,a,c*(a-o),c*(l-r))},initNonuniformCatmullRom:function(o,r,a,l,c,h,d){let u=(r-o)/c-(a-o)/(c+h)+(a-r)/h,p=(a-r)/h-(l-r)/(h+d)+(l-a)/d;u*=h,p*=h,s(r,a,u,p)},calc:function(o){const r=o*o,a=r*o;return n+t*o+e*r+i*a}}}const Zo=new I,fa=new ql,pa=new ql,ma=new ql;class d_ extends Ln{constructor(t=[],e=!1,i="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=i,this.tension=s}getPoint(t,e=new I){const i=e,s=this.points,o=s.length,r=(o-(this.closed?0:1))*t;let a=Math.floor(r),l=r-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/o)+1)*o:l===0&&a===o-1&&(a=o-2,l=1);let c,h;this.closed||a>0?c=s[(a-1)%o]:(Zo.subVectors(s[0],s[1]).add(s[0]),c=Zo);const d=s[a%o],u=s[(a+1)%o];if(this.closed||a+2<o?h=s[(a+2)%o]:(Zo.subVectors(s[o-1],s[o-2]).add(s[o-1]),h=Zo),this.curveType==="centripetal"||this.curveType==="chordal"){const p=this.curveType==="chordal"?.5:.25;let v=Math.pow(c.distanceToSquared(d),p),M=Math.pow(d.distanceToSquared(u),p),m=Math.pow(u.distanceToSquared(h),p);M<1e-4&&(M=1),v<1e-4&&(v=M),m<1e-4&&(m=M),fa.initNonuniformCatmullRom(c.x,d.x,u.x,h.x,v,M,m),pa.initNonuniformCatmullRom(c.y,d.y,u.y,h.y,v,M,m),ma.initNonuniformCatmullRom(c.z,d.z,u.z,h.z,v,M,m)}else this.curveType==="catmullrom"&&(fa.initCatmullRom(c.x,d.x,u.x,h.x,this.tension),pa.initCatmullRom(c.y,d.y,u.y,h.y,this.tension),ma.initCatmullRom(c.z,d.z,u.z,h.z,this.tension));return i.set(fa.calc(l),pa.calc(l),ma.calc(l)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){const s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const s=t.points[e];this.points.push(new I().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function fh(n,t,e,i,s){const o=(i-t)*.5,r=(s-e)*.5,a=n*n,l=n*a;return(2*e-2*i+o+r)*l+(-3*e+3*i-2*o-r)*a+o*n+e}function u_(n,t){const e=1-n;return e*e*t}function f_(n,t){return 2*(1-n)*n*t}function p_(n,t){return n*n*t}function io(n,t,e,i){return u_(n,t)+f_(n,e)+p_(n,i)}function m_(n,t){const e=1-n;return e*e*e*t}function g_(n,t){const e=1-n;return 3*e*e*n*t}function v_(n,t){return 3*(1-n)*n*n*t}function __(n,t){return n*n*n*t}function so(n,t,e,i,s){return m_(n,t)+g_(n,e)+v_(n,i)+__(n,s)}class Bd extends Ln{constructor(t=new Et,e=new Et,i=new Et,s=new Et){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=i,this.v3=s}getPoint(t,e=new Et){const i=e,s=this.v0,o=this.v1,r=this.v2,a=this.v3;return i.set(so(t,s.x,o.x,r.x,a.x),so(t,s.y,o.y,r.y,a.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class y_ extends Ln{constructor(t=new I,e=new I,i=new I,s=new I){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=i,this.v3=s}getPoint(t,e=new I){const i=e,s=this.v0,o=this.v1,r=this.v2,a=this.v3;return i.set(so(t,s.x,o.x,r.x,a.x),so(t,s.y,o.y,r.y,a.y),so(t,s.z,o.z,r.z,a.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Od extends Ln{constructor(t=new Et,e=new Et){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new Et){const i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new Et){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class x_ extends Ln{constructor(t=new I,e=new I){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new I){const i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new I){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class kd extends Ln{constructor(t=new Et,e=new Et,i=new Et){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new Et){const i=e,s=this.v0,o=this.v1,r=this.v2;return i.set(io(t,s.x,o.x,r.x),io(t,s.y,o.y,r.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Fd extends Ln{constructor(t=new I,e=new I,i=new I){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new I){const i=e,s=this.v0,o=this.v1,r=this.v2;return i.set(io(t,s.x,o.x,r.x),io(t,s.y,o.y,r.y),io(t,s.z,o.z,r.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class zd extends Ln{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new Et){const i=e,s=this.points,o=(s.length-1)*t,r=Math.floor(o),a=o-r,l=s[r===0?r:r-1],c=s[r],h=s[r>s.length-2?s.length-1:r+1],d=s[r>s.length-3?s.length-1:r+2];return i.set(fh(a,l.x,c.x,h.x,d.x),fh(a,l.y,c.y,h.y,d.y)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const s=t.points[e];this.points.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){const s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const s=t.points[e];this.points.push(new Et().fromArray(s))}return this}}var ph=Object.freeze({__proto__:null,ArcCurve:h_,CatmullRomCurve3:d_,CubicBezierCurve:Bd,CubicBezierCurve3:y_,EllipseCurve:Yl,LineCurve:Od,LineCurve3:x_,QuadraticBezierCurve:kd,QuadraticBezierCurve3:Fd,SplineCurve:zd});class M_ extends Ln{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const i=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new ph[i](e,t))}return this}getPoint(t,e){const i=t*this.getLength(),s=this.getCurveLengths();let o=0;for(;o<s.length;){if(s[o]>=i){const r=s[o]-i,a=this.curves[o],l=a.getLength(),c=l===0?0:1-r/l;return a.getPointAt(c,e)}o++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let i=0,s=this.curves.length;i<s;i++)e+=this.curves[i].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let i;for(let s=0,o=this.curves;s<o.length;s++){const r=o[s],a=r.isEllipseCurve?t*2:r.isLineCurve||r.isLineCurve3?1:r.isSplineCurve?t*r.points.length:t,l=r.getPoints(a);for(let c=0;c<l.length;c++){const h=l[c];i&&i.equals(h)||(e.push(h),i=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,i=t.curves.length;e<i;e++){const s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,i=this.curves.length;e<i;e++){const s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,i=t.curves.length;e<i;e++){const s=t.curves[e];this.curves.push(new ph[s.type]().fromJSON(s))}return this}}class b_ extends M_{constructor(t){super(),this.type="Path",this.currentPoint=new Et,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,i=t.length;e<i;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const i=new Od(this.currentPoint.clone(),new Et(t,e));return this.curves.push(i),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,i,s){const o=new kd(this.currentPoint.clone(),new Et(t,e),new Et(i,s));return this.curves.push(o),this.currentPoint.set(i,s),this}bezierCurveTo(t,e,i,s,o,r){const a=new Bd(this.currentPoint.clone(),new Et(t,e),new Et(i,s),new Et(o,r));return this.curves.push(a),this.currentPoint.set(o,r),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),i=new zd(e);return this.curves.push(i),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,i,s,o,r){const a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+a,e+l,i,s,o,r),this}absarc(t,e,i,s,o,r){return this.absellipse(t,e,i,i,s,o,r),this}ellipse(t,e,i,s,o,r,a,l){const c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+c,e+h,i,s,o,r,a,l),this}absellipse(t,e,i,s,o,r,a,l){const c=new Yl(t,e,i,s,o,r,a,l);if(this.curves.length>0){const d=c.getPoint(0);d.equals(this.currentPoint)||this.lineTo(d.x,d.y)}this.curves.push(c);const h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class jl extends ze{constructor(t=[new Et(0,-.5),new Et(.5,0),new Et(0,.5)],e=12,i=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:i,phiLength:s},e=Math.floor(e),s=we(s,0,Math.PI*2);const o=[],r=[],a=[],l=[],c=[],h=1/e,d=new I,u=new Et,p=new I,v=new I,M=new I;let m=0,f=0;for(let b=0;b<=t.length-1;b++)switch(b){case 0:m=t[b+1].x-t[b].x,f=t[b+1].y-t[b].y,p.x=f*1,p.y=-m,p.z=f*0,M.copy(p),p.normalize(),l.push(p.x,p.y,p.z);break;case t.length-1:l.push(M.x,M.y,M.z);break;default:m=t[b+1].x-t[b].x,f=t[b+1].y-t[b].y,p.x=f*1,p.y=-m,p.z=f*0,v.copy(p),p.x+=M.x,p.y+=M.y,p.z+=M.z,p.normalize(),l.push(p.x,p.y,p.z),M.copy(v)}for(let b=0;b<=e;b++){const x=i+b*h*s,g=Math.sin(x),T=Math.cos(x);for(let A=0;A<=t.length-1;A++){d.x=t[A].x*g,d.y=t[A].y,d.z=t[A].x*T,r.push(d.x,d.y,d.z),u.x=b/e,u.y=A/(t.length-1),a.push(u.x,u.y);const w=l[3*A+0]*g,S=l[3*A+1],_=l[3*A+0]*T;c.push(w,S,_)}}for(let b=0;b<e;b++)for(let x=0;x<t.length-1;x++){const g=x+b*t.length,T=g,A=g+t.length,w=g+t.length+1,S=g+1;o.push(T,A,S),o.push(w,S,A)}this.setIndex(o),this.setAttribute("position",new he(r,3)),this.setAttribute("uv",new he(a,2)),this.setAttribute("normal",new he(c,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new jl(t.points,t.segments,t.phiStart,t.phiLength)}}class Mn extends jl{constructor(t=1,e=1,i=4,s=8){const o=new b_;o.absarc(0,-e/2,t,Math.PI*1.5,0),o.absarc(0,e/2,t,0,Math.PI*.5),super(o.getPoints(i),s),this.type="CapsuleGeometry",this.parameters={radius:t,length:e,capSegments:i,radialSegments:s}}static fromJSON(t){return new Mn(t.radius,t.length,t.capSegments,t.radialSegments)}}class Es extends ze{constructor(t=1,e=32,i=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:i,thetaLength:s},e=Math.max(3,e);const o=[],r=[],a=[],l=[],c=new I,h=new Et;r.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let d=0,u=3;d<=e;d++,u+=3){const p=i+d/e*s;c.x=t*Math.cos(p),c.y=t*Math.sin(p),r.push(c.x,c.y,c.z),a.push(0,0,1),h.x=(r[u]/t+1)/2,h.y=(r[u+1]/t+1)/2,l.push(h.x,h.y)}for(let d=1;d<=e;d++)o.push(d,d+1,0);this.setIndex(o),this.setAttribute("position",new he(r,3)),this.setAttribute("normal",new he(a,3)),this.setAttribute("uv",new he(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Es(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class Qt extends ze{constructor(t=1,e=1,i=1,s=32,o=1,r=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:i,radialSegments:s,heightSegments:o,openEnded:r,thetaStart:a,thetaLength:l};const c=this;s=Math.floor(s),o=Math.floor(o);const h=[],d=[],u=[],p=[];let v=0;const M=[],m=i/2;let f=0;b(),r===!1&&(t>0&&x(!0),e>0&&x(!1)),this.setIndex(h),this.setAttribute("position",new he(d,3)),this.setAttribute("normal",new he(u,3)),this.setAttribute("uv",new he(p,2));function b(){const g=new I,T=new I;let A=0;const w=(e-t)/i;for(let S=0;S<=o;S++){const _=[],y=S/o,R=y*(e-t)+t;for(let L=0;L<=s;L++){const D=L/s,U=D*l+a,H=Math.sin(U),V=Math.cos(U);T.x=R*H,T.y=-y*i+m,T.z=R*V,d.push(T.x,T.y,T.z),g.set(H,w,V).normalize(),u.push(g.x,g.y,g.z),p.push(D,1-y),_.push(v++)}M.push(_)}for(let S=0;S<s;S++)for(let _=0;_<o;_++){const y=M[_][S],R=M[_+1][S],L=M[_+1][S+1],D=M[_][S+1];(t>0||_!==0)&&(h.push(y,R,D),A+=3),(e>0||_!==o-1)&&(h.push(R,L,D),A+=3)}c.addGroup(f,A,0),f+=A}function x(g){const T=v,A=new Et,w=new I;let S=0;const _=g===!0?t:e,y=g===!0?1:-1;for(let L=1;L<=s;L++)d.push(0,m*y,0),u.push(0,y,0),p.push(.5,.5),v++;const R=v;for(let L=0;L<=s;L++){const U=L/s*l+a,H=Math.cos(U),V=Math.sin(U);w.x=_*V,w.y=m*y,w.z=_*H,d.push(w.x,w.y,w.z),u.push(0,y,0),A.x=H*.5+.5,A.y=V*.5*y+.5,p.push(A.x,A.y),v++}for(let L=0;L<s;L++){const D=T+L,U=R+L;g===!0?h.push(U,U+1,D):h.push(U+1,U,D),S+=3}c.addGroup(f,S,g===!0?1:2),f+=S}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Qt(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Kl extends Qt{constructor(t=1,e=1,i=32,s=1,o=!1,r=0,a=Math.PI*2){super(0,t,e,i,s,o,r,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:i,heightSegments:s,openEnded:o,thetaStart:r,thetaLength:a}}static fromJSON(t){return new Kl(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Zl extends ze{constructor(t=[],e=[],i=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:i,detail:s};const o=[],r=[];a(s),c(i),h(),this.setAttribute("position",new he(o,3)),this.setAttribute("normal",new he(o.slice(),3)),this.setAttribute("uv",new he(r,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(b){const x=new I,g=new I,T=new I;for(let A=0;A<e.length;A+=3)p(e[A+0],x),p(e[A+1],g),p(e[A+2],T),l(x,g,T,b)}function l(b,x,g,T){const A=T+1,w=[];for(let S=0;S<=A;S++){w[S]=[];const _=b.clone().lerp(g,S/A),y=x.clone().lerp(g,S/A),R=A-S;for(let L=0;L<=R;L++)L===0&&S===A?w[S][L]=_:w[S][L]=_.clone().lerp(y,L/R)}for(let S=0;S<A;S++)for(let _=0;_<2*(A-S)-1;_++){const y=Math.floor(_/2);_%2===0?(u(w[S][y+1]),u(w[S+1][y]),u(w[S][y])):(u(w[S][y+1]),u(w[S+1][y+1]),u(w[S+1][y]))}}function c(b){const x=new I;for(let g=0;g<o.length;g+=3)x.x=o[g+0],x.y=o[g+1],x.z=o[g+2],x.normalize().multiplyScalar(b),o[g+0]=x.x,o[g+1]=x.y,o[g+2]=x.z}function h(){const b=new I;for(let x=0;x<o.length;x+=3){b.x=o[x+0],b.y=o[x+1],b.z=o[x+2];const g=m(b)/2/Math.PI+.5,T=f(b)/Math.PI+.5;r.push(g,1-T)}v(),d()}function d(){for(let b=0;b<r.length;b+=6){const x=r[b+0],g=r[b+2],T=r[b+4],A=Math.max(x,g,T),w=Math.min(x,g,T);A>.9&&w<.1&&(x<.2&&(r[b+0]+=1),g<.2&&(r[b+2]+=1),T<.2&&(r[b+4]+=1))}}function u(b){o.push(b.x,b.y,b.z)}function p(b,x){const g=b*3;x.x=t[g+0],x.y=t[g+1],x.z=t[g+2]}function v(){const b=new I,x=new I,g=new I,T=new I,A=new Et,w=new Et,S=new Et;for(let _=0,y=0;_<o.length;_+=9,y+=6){b.set(o[_+0],o[_+1],o[_+2]),x.set(o[_+3],o[_+4],o[_+5]),g.set(o[_+6],o[_+7],o[_+8]),A.set(r[y+0],r[y+1]),w.set(r[y+2],r[y+3]),S.set(r[y+4],r[y+5]),T.copy(b).add(x).add(g).divideScalar(3);const R=m(T);M(A,y+0,b,R),M(w,y+2,x,R),M(S,y+4,g,R)}}function M(b,x,g,T){T<0&&b.x===1&&(r[x]=b.x-1),g.x===0&&g.z===0&&(r[x]=T/2/Math.PI+.5)}function m(b){return Math.atan2(b.z,-b.x)}function f(b){return Math.atan2(-b.y,Math.sqrt(b.x*b.x+b.z*b.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Zl(t.vertices,t.indices,t.radius,t.details)}}class Li extends Zl{constructor(t=1,e=0){const i=(1+Math.sqrt(5))/2,s=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],o=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,o,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new Li(t.radius,t.detail)}}class fo extends ze{constructor(t=.5,e=1,i=32,s=1,o=0,r=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:i,phiSegments:s,thetaStart:o,thetaLength:r},i=Math.max(3,i),s=Math.max(1,s);const a=[],l=[],c=[],h=[];let d=t;const u=(e-t)/s,p=new I,v=new Et;for(let M=0;M<=s;M++){for(let m=0;m<=i;m++){const f=o+m/i*r;p.x=d*Math.cos(f),p.y=d*Math.sin(f),l.push(p.x,p.y,p.z),c.push(0,0,1),v.x=(p.x/e+1)/2,v.y=(p.y/e+1)/2,h.push(v.x,v.y)}d+=u}for(let M=0;M<s;M++){const m=M*(i+1);for(let f=0;f<i;f++){const b=f+m,x=b,g=b+i+1,T=b+i+2,A=b+1;a.push(x,g,A),a.push(g,T,A)}}this.setIndex(a),this.setAttribute("position",new he(l,3)),this.setAttribute("normal",new he(c,3)),this.setAttribute("uv",new he(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new fo(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}class rn extends ze{constructor(t=1,e=32,i=16,s=0,o=Math.PI*2,r=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:i,phiStart:s,phiLength:o,thetaStart:r,thetaLength:a},e=Math.max(3,Math.floor(e)),i=Math.max(2,Math.floor(i));const l=Math.min(r+a,Math.PI);let c=0;const h=[],d=new I,u=new I,p=[],v=[],M=[],m=[];for(let f=0;f<=i;f++){const b=[],x=f/i;let g=0;f===0&&r===0?g=.5/e:f===i&&l===Math.PI&&(g=-.5/e);for(let T=0;T<=e;T++){const A=T/e;d.x=-t*Math.cos(s+A*o)*Math.sin(r+x*a),d.y=t*Math.cos(r+x*a),d.z=t*Math.sin(s+A*o)*Math.sin(r+x*a),v.push(d.x,d.y,d.z),u.copy(d).normalize(),M.push(u.x,u.y,u.z),m.push(A+g,1-x),b.push(c++)}h.push(b)}for(let f=0;f<i;f++)for(let b=0;b<e;b++){const x=h[f][b+1],g=h[f][b],T=h[f+1][b],A=h[f+1][b+1];(f!==0||r>0)&&p.push(x,g,A),(f!==i-1||l<Math.PI)&&p.push(g,T,A)}this.setIndex(p),this.setAttribute("position",new he(v,3)),this.setAttribute("normal",new he(M,3)),this.setAttribute("uv",new he(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new rn(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class po extends ze{constructor(t=1,e=.4,i=12,s=48,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:i,tubularSegments:s,arc:o},i=Math.floor(i),s=Math.floor(s);const r=[],a=[],l=[],c=[],h=new I,d=new I,u=new I;for(let p=0;p<=i;p++)for(let v=0;v<=s;v++){const M=v/s*o,m=p/i*Math.PI*2;d.x=(t+e*Math.cos(m))*Math.cos(M),d.y=(t+e*Math.cos(m))*Math.sin(M),d.z=e*Math.sin(m),a.push(d.x,d.y,d.z),h.x=t*Math.cos(M),h.y=t*Math.sin(M),u.subVectors(d,h).normalize(),l.push(u.x,u.y,u.z),c.push(v/s),c.push(p/i)}for(let p=1;p<=i;p++)for(let v=1;v<=s;v++){const M=(s+1)*p+v-1,m=(s+1)*(p-1)+v-1,f=(s+1)*(p-1)+v,b=(s+1)*p+v;r.push(M,m,b),r.push(m,f,b)}this.setIndex(r),this.setAttribute("position",new he(a,3)),this.setAttribute("normal",new he(l,3)),this.setAttribute("uv",new he(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new po(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class Wt extends Ni{static get type(){return"MeshStandardMaterial"}constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new Gt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Gt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=md,this.normalScale=new Et(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new In,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Tl extends Wt{static get type(){return"MeshPhysicalMaterial"}constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Et(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return we(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Gt(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Gt(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Gt(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}}class Jl extends Ie{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Gt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}class S_ extends Jl{constructor(t,e,i){super(t,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ie.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Gt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const ga=new me,mh=new I,gh=new I;class Hd{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Et(512,512),this.map=null,this.mapPass=null,this.matrix=new me,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Wl,this._frameExtents=new Et(1,1),this._viewportCount=1,this._viewports=[new pe(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,i=this.matrix;mh.setFromMatrixPosition(t.matrixWorld),e.position.copy(mh),gh.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(gh),e.updateMatrixWorld(),ga.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ga),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(ga)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const vh=new me,Ws=new I,va=new I;class E_ extends Hd{constructor(){super(new nn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Et(4,2),this._viewportCount=6,this._viewports=[new pe(2,1,1,1),new pe(0,1,1,1),new pe(3,1,1,1),new pe(1,1,1,1),new pe(3,0,1,1),new pe(1,0,1,1)],this._cubeDirections=[new I(1,0,0),new I(-1,0,0),new I(0,0,1),new I(0,0,-1),new I(0,1,0),new I(0,-1,0)],this._cubeUps=[new I(0,1,0),new I(0,1,0),new I(0,1,0),new I(0,1,0),new I(0,0,1),new I(0,0,-1)]}updateMatrices(t,e=0){const i=this.camera,s=this.matrix,o=t.distance||i.far;o!==i.far&&(i.far=o,i.updateProjectionMatrix()),Ws.setFromMatrixPosition(t.matrixWorld),i.position.copy(Ws),va.copy(i.position),va.add(this._cubeDirections[e]),i.up.copy(this._cubeUps[e]),i.lookAt(va),i.updateMatrixWorld(),s.makeTranslation(-Ws.x,-Ws.y,-Ws.z),vh.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(vh)}}class Cs extends Jl{constructor(t,e,i=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=s,this.shadow=new E_}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class T_ extends Hd{constructor(){super(new Ad(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class w_ extends Jl{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ie.DEFAULT_UP),this.updateMatrix(),this.target=new Ie,this.shadow=new T_}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class A_{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=_h(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=_h();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}function _h(){return performance.now()}const yh=new me;class C_{constructor(t,e,i=0,s=1/0){this.ray=new Lr(t,e),this.near=i,this.far=s,this.camera=null,this.layers=new Vl,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return yh.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(yh),this}intersectObject(t,e=!0,i=[]){return wl(t,this,i,e),i.sort(xh),i}intersectObjects(t,e=!0,i=[]){for(let s=0,o=t.length;s<o;s++)wl(t[s],this,i,e);return i.sort(xh),i}}function xh(n,t){return n.distance-t.distance}function wl(n,t,e,i){let s=!0;if(n.layers.test(t.layers)&&n.raycast(t,e)===!1&&(s=!1),s===!0&&i===!0){const o=n.children;for(let r=0,a=o.length;r<a;r++)wl(o[r],t,e,!0)}}class Mh{constructor(t=1,e=0,i=0){return this.radius=t,this.phi=e,this.theta=i,this}set(t,e,i){return this.radius=t,this.phi=e,this.theta=i,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,i){return this.radius=Math.sqrt(t*t+e*e+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,i),this.phi=Math.acos(we(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class R_ extends Di{constructor(t,e=null){super(),this.object=t,this.domElement=e,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(){}disconnect(){}dispose(){}update(){}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Ul}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Ul);const bh={type:"change"},Ql={type:"start"},Gd={type:"end"},Jo=new Lr,Sh=new ni,P_=Math.cos(70*Xt.DEG2RAD),Re=new I,Ke=2*Math.PI,ue={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},_a=1e-6;class I_ extends R_{constructor(t,e=null){super(t,e),this.state=ue.NONE,this.enabled=!0,this.target=new I,this.cursor=new I,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:ls.ROTATE,MIDDLE:ls.DOLLY,RIGHT:ls.PAN},this.touches={ONE:ss.ROTATE,TWO:ss.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new I,this._lastQuaternion=new Ii,this._lastTargetPosition=new I,this._quat=new Ii().setFromUnitVectors(t.up,new I(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Mh,this._sphericalDelta=new Mh,this._scale=1,this._panOffset=new I,this._rotateStart=new Et,this._rotateEnd=new Et,this._rotateDelta=new Et,this._panStart=new Et,this._panEnd=new Et,this._panDelta=new Et,this._dollyStart=new Et,this._dollyEnd=new Et,this._dollyDelta=new Et,this._dollyDirection=new I,this._mouse=new Et,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=D_.bind(this),this._onPointerDown=L_.bind(this),this._onPointerUp=N_.bind(this),this._onContextMenu=H_.bind(this),this._onMouseWheel=O_.bind(this),this._onKeyDown=k_.bind(this),this._onTouchStart=F_.bind(this),this._onTouchMove=z_.bind(this),this._onMouseDown=U_.bind(this),this._onMouseMove=B_.bind(this),this._interceptControlDown=G_.bind(this),this._interceptControlUp=V_.bind(this),this.domElement!==null&&this.connect(),this.update()}connect(){this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(bh),this.update(),this.state=ue.NONE}update(t=null){const e=this.object.position;Re.copy(e).sub(this.target),Re.applyQuaternion(this._quat),this._spherical.setFromVector3(Re),this.autoRotate&&this.state===ue.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let i=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(i)&&isFinite(s)&&(i<-Math.PI?i+=Ke:i>Math.PI&&(i-=Ke),s<-Math.PI?s+=Ke:s>Math.PI&&(s-=Ke),i<=s?this._spherical.theta=Math.max(i,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(i+s)/2?Math.max(i,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let o=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const r=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),o=r!=this._spherical.radius}if(Re.setFromSpherical(this._spherical),Re.applyQuaternion(this._quatInverse),e.copy(this.target).add(Re),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let r=null;if(this.object.isPerspectiveCamera){const a=Re.length();r=this._clampDistance(a*this._scale);const l=a-r;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),o=!!l}else if(this.object.isOrthographicCamera){const a=new I(this._mouse.x,this._mouse.y,0);a.unproject(this.object);const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),o=l!==this.object.zoom;const c=new I(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(a),this.object.updateMatrixWorld(),r=Re.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;r!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(r).add(this.object.position):(Jo.origin.copy(this.object.position),Jo.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Jo.direction))<P_?this.object.lookAt(this.target):(Sh.setFromNormalAndCoplanarPoint(this.object.up,this.target),Jo.intersectPlane(Sh,this.target))))}else if(this.object.isOrthographicCamera){const r=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),r!==this.object.zoom&&(this.object.updateProjectionMatrix(),o=!0)}return this._scale=1,this._performCursorZoom=!1,o||this._lastPosition.distanceToSquared(this.object.position)>_a||8*(1-this._lastQuaternion.dot(this.object.quaternion))>_a||this._lastTargetPosition.distanceToSquared(this.target)>_a?(this.dispatchEvent(bh),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?Ke/60*this.autoRotateSpeed*t:Ke/60/60*this.autoRotateSpeed}_getZoomScale(t){const e=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*e)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,e){Re.setFromMatrixColumn(e,0),Re.multiplyScalar(-t),this._panOffset.add(Re)}_panUp(t,e){this.screenSpacePanning===!0?Re.setFromMatrixColumn(e,1):(Re.setFromMatrixColumn(e,0),Re.crossVectors(this.object.up,Re)),Re.multiplyScalar(t),this._panOffset.add(Re)}_pan(t,e){const i=this.domElement;if(this.object.isPerspectiveCamera){const s=this.object.position;Re.copy(s).sub(this.target);let o=Re.length();o*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*o/i.clientHeight,this.object.matrix),this._panUp(2*e*o/i.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/i.clientWidth,this.object.matrix),this._panUp(e*(this.object.top-this.object.bottom)/this.object.zoom/i.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,e){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const i=this.domElement.getBoundingClientRect(),s=t-i.left,o=e-i.top,r=i.width,a=i.height;this._mouse.x=s/r*2-1,this._mouse.y=-(o/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(Ke*this._rotateDelta.x/e.clientHeight),this._rotateUp(Ke*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let e=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateUp(Ke*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,this.keyPanSpeed),e=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateUp(-Ke*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,-this.keyPanSpeed),e=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateLeft(Ke*this.rotateSpeed/this.domElement.clientHeight):this._pan(this.keyPanSpeed,0),e=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateLeft(-Ke*this.rotateSpeed/this.domElement.clientHeight):this._pan(-this.keyPanSpeed,0),e=!0;break}e&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),i=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._rotateStart.set(i,s)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),i=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panStart.set(i,s)}}_handleTouchStartDolly(t){const e=this._getSecondPointerPosition(t),i=t.pageX-e.x,s=t.pageY-e.y,o=Math.sqrt(i*i+s*s);this._dollyStart.set(0,o)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{const i=this._getSecondPointerPosition(t),s=.5*(t.pageX+i.x),o=.5*(t.pageY+i.y);this._rotateEnd.set(s,o)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(Ke*this._rotateDelta.x/e.clientHeight),this._rotateUp(Ke*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),i=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panEnd.set(i,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){const e=this._getSecondPointerPosition(t),i=t.pageX-e.x,s=t.pageY-e.y,o=Math.sqrt(i*i+s*s);this._dollyEnd.set(0,o),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const r=(t.pageX+e.x)*.5,a=(t.pageY+e.y)*.5;this._updateZoomParameters(r,a)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId){this._pointers.splice(e,1);return}}_isTrackingPointer(t){for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId)return!0;return!1}_trackPointer(t){let e=this._pointerPositions[t.pointerId];e===void 0&&(e=new Et,this._pointerPositions[t.pointerId]=e),e.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){const e=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[e]}_customWheelEvent(t){const e=t.deltaMode,i={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(e){case 1:i.deltaY*=16;break;case 2:i.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(i.deltaY*=10),i}}function L_(n){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(n.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(n)&&(this._addPointer(n),n.pointerType==="touch"?this._onTouchStart(n):this._onMouseDown(n)))}function D_(n){this.enabled!==!1&&(n.pointerType==="touch"?this._onTouchMove(n):this._onMouseMove(n))}function N_(n){switch(this._removePointer(n),this._pointers.length){case 0:this.domElement.releasePointerCapture(n.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Gd),this.state=ue.NONE;break;case 1:const t=this._pointers[0],e=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:e.x,pageY:e.y});break}}function U_(n){let t;switch(n.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case ls.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(n),this.state=ue.DOLLY;break;case ls.ROTATE:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=ue.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=ue.ROTATE}break;case ls.PAN:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=ue.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=ue.PAN}break;default:this.state=ue.NONE}this.state!==ue.NONE&&this.dispatchEvent(Ql)}function B_(n){switch(this.state){case ue.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(n);break;case ue.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(n);break;case ue.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(n);break}}function O_(n){this.enabled===!1||this.enableZoom===!1||this.state!==ue.NONE||(n.preventDefault(),this.dispatchEvent(Ql),this._handleMouseWheel(this._customWheelEvent(n)),this.dispatchEvent(Gd))}function k_(n){this.enabled===!1||this.enablePan===!1||this._handleKeyDown(n)}function F_(n){switch(this._trackPointer(n),this._pointers.length){case 1:switch(this.touches.ONE){case ss.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(n),this.state=ue.TOUCH_ROTATE;break;case ss.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(n),this.state=ue.TOUCH_PAN;break;default:this.state=ue.NONE}break;case 2:switch(this.touches.TWO){case ss.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(n),this.state=ue.TOUCH_DOLLY_PAN;break;case ss.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(n),this.state=ue.TOUCH_DOLLY_ROTATE;break;default:this.state=ue.NONE}break;default:this.state=ue.NONE}this.state!==ue.NONE&&this.dispatchEvent(Ql)}function z_(n){switch(this._trackPointer(n),this.state){case ue.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(n),this.update();break;case ue.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(n),this.update();break;case ue.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(n),this.update();break;case ue.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(n),this.update();break;default:this.state=ue.NONE}}function H_(n){this.enabled!==!1&&n.preventDefault()}function G_(n){n.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function V_(n){n.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function di(n,t){const e=document.createElement("canvas");return e.width=n,e.height=t,e}function tc(n){let t=n%2147483647;return t<=0&&(t+=2147483646),()=>(t=t*16807%2147483647,(t-1)/2147483646)}function Eh(){const t=di(1024,1024),e=di(1024,1024),i=t.getContext("2d"),s=e.getContext("2d"),o=tc(4207);i.fillStyle="#eceff3",i.fillRect(0,0,1024,1024),s.fillStyle="#808080",s.fillRect(0,0,1024,1024);for(let h=0;h<200;h++){const d=o()*1024,u=o()*1024,p=35+o()*115,v=Math.floor(228+o()*20),M=.04+o()*.04;i.fillStyle=`rgba(${v}, ${v+2}, ${v+4}, ${M})`,i.beginPath(),i.arc(d,u,p,0,Math.PI*2),i.fill()}for(let h=0;h<4200;h++){const d=o()*1024,u=o()*1024,p=1+o()*1.8,v=o()>.5?246:214;i.fillStyle=`rgba(${v}, ${v+1}, ${v+2}, 0.055)`,i.fillRect(d,u,p,p);const M=o()>.5?142:112;s.fillStyle=`rgba(${M}, ${M}, ${M}, 0.08)`,s.fillRect(d,u,p,p)}const r=4,a=2;i.strokeStyle="rgba(182, 190, 200, 0.72)",i.lineWidth=2.5,s.strokeStyle="rgb(44, 44, 44)",s.lineWidth=3;for(let h=1;h<r;h++){const d=1024/r*h;i.beginPath(),i.moveTo(d,0),i.lineTo(d,1024),i.stroke(),s.beginPath(),s.moveTo(d,0),s.lineTo(d,1024),s.stroke()}for(let h=1;h<a;h++){const d=1024/a*h;i.beginPath(),i.moveTo(0,d),i.lineTo(1024,d),i.stroke(),s.beginPath(),s.moveTo(0,d),s.lineTo(1024,d),s.stroke()}const l=new Ne(t);l.colorSpace=fe,l.wrapS=on,l.wrapT=on,l.anisotropy=8;const c=new Ne(e);return c.wrapS=on,c.wrapT=on,c.anisotropy=4,{map:l,bumpMap:c}}function W_(){const t=di(1024,1024),e=di(1024,1024),i=t.getContext("2d"),s=e.getContext("2d"),o=tc(9131);i.fillStyle="#e8edf2",i.fillRect(0,0,1024,1024),s.fillStyle="#686868",s.fillRect(0,0,1024,1024);const r=4,a=1024/r;for(let d=0;d<r;d++)for(let u=0;u<r;u++){const v=232+Math.floor((o()-.5)*6);i.fillStyle=`rgb(${v}, ${v+3}, ${v+6})`,i.fillRect(u*a,d*a,a,a);const M=96+Math.floor(o()*20);s.fillStyle=`rgb(${M}, ${M}, ${M})`,s.fillRect(u*a,d*a,a,a)}const l=["#cbd5e1","#d6ccc2","#94a3b8","#a7c4b5","#e2d9ce"];for(let d=0;d<1600;d++){const u=o()*1024,p=o()*1024,v=1.2+o()*3.2;i.fillStyle=l[Math.floor(o()*l.length)],i.globalAlpha=.25+o()*.25,i.beginPath(),i.arc(u,p,v,0,Math.PI*2),i.fill()}i.globalAlpha=1,i.strokeStyle="rgba(186, 195, 206, 0.72)",i.lineWidth=2.5,s.strokeStyle="rgb(190, 190, 190)",s.lineWidth=3;for(let d=0;d<=r;d++){const u=d*a;i.beginPath(),i.moveTo(u,0),i.lineTo(u,1024),i.stroke(),i.beginPath(),i.moveTo(0,u),i.lineTo(1024,u),i.stroke(),s.beginPath(),s.moveTo(u,0),s.lineTo(u,1024),s.stroke(),s.beginPath(),s.moveTo(0,u),s.lineTo(1024,u),s.stroke()}const c=new Ne(t);c.colorSpace=fe,c.wrapS=on,c.wrapT=on,c.repeat.set(4.5,3.75),c.anisotropy=8;const h=new Ne(e);return h.wrapS=on,h.wrapT=on,h.repeat.set(4.5,3.75),{map:c,roughnessMap:h}}function $_(){const t=di(512,512),e=t.getContext("2d"),i=tc(5519);e.fillStyle="#d4a373",e.fillRect(0,0,512,512);for(let o=0;o<240;o++){const r=i()*512,a=1+i()*3.5,l=i()>.5?"#c6925e":"#e0b487";e.fillStyle=l,e.globalAlpha=.14+i()*.16,e.fillRect(r,0,a,512)}e.globalAlpha=1;const s=new Ne(t);return s.colorSpace=fe,s.wrapS=on,s.wrapT=on,s.anisotropy=4,s}function X_(){const t=di(512,512),e=di(512,512),i=t.getContext("2d"),s=e.getContext("2d"),o=10,r=512/o;for(let c=0;c<o;c++){const h=c*r,d=i.createLinearGradient(0,h,0,h+r);d.addColorStop(0,"#181d25"),d.addColorStop(.18,"#28303d"),d.addColorStop(.5,"#313a49"),d.addColorStop(.82,"#242b37"),d.addColorStop(1,"#141920"),i.fillStyle=d,i.fillRect(0,h,512,r);const u=s.createLinearGradient(0,h,0,h+r);u.addColorStop(0,"#262626"),u.addColorStop(.25,"#c8c8c8"),u.addColorStop(.5,"#f2f2f2"),u.addColorStop(.75,"#c8c8c8"),u.addColorStop(1,"#262626"),s.fillStyle=u,s.fillRect(0,h,512,r)}const a=new Ne(t);a.colorSpace=fe,a.anisotropy=4;const l=new Ne(e);return l.anisotropy=4,{map:a,bumpMap:l}}function Y_(){const t=di(512,512),e=t.getContext("2d");e.clearRect(0,0,512,512);const i=e.createLinearGradient(0,0,512,512);i.addColorStop(0,"rgba(255, 255, 255, 0.22)"),i.addColorStop(.18,"rgba(224, 247, 255, 0.04)"),i.addColorStop(.45,"rgba(255, 255, 255, 0.16)"),i.addColorStop(.65,"rgba(224, 247, 255, 0.02)"),i.addColorStop(1,"rgba(255, 255, 255, 0.14)"),e.fillStyle=i,e.fillRect(0,0,512,512);const s=Math.round(512*.52),o=Math.round(512*.12),r=e.createLinearGradient(0,s,0,s+o);r.addColorStop(0,"rgba(255, 255, 255, 0.0)"),r.addColorStop(.2,"rgba(241, 248, 255, 0.34)"),r.addColorStop(.5,"rgba(255, 255, 255, 0.44)"),r.addColorStop(.8,"rgba(241, 248, 255, 0.34)"),r.addColorStop(1,"rgba(255, 255, 255, 0.0)"),e.fillStyle=r,e.fillRect(0,s,512,o),e.fillStyle="rgba(255, 255, 255, 0.52)",e.fillRect(0,s+Math.round(o*.22),512,2),e.fillRect(0,s+Math.round(o*.5),512,3),e.fillRect(0,s+Math.round(o*.78),512,2);const a=e.createLinearGradient(0,0,26,0);a.addColorStop(0,"rgba(224, 247, 255, 0.45)"),a.addColorStop(1,"rgba(224, 247, 255, 0)"),e.fillStyle=a,e.fillRect(0,0,26,512);const l=e.createLinearGradient(486,0,512,0);l.addColorStop(0,"rgba(224, 247, 255, 0)"),l.addColorStop(1,"rgba(224, 247, 255, 0.45)"),e.fillStyle=l,e.fillRect(486,0,26,512);const c=new Ne(t);return c.colorSpace=fe,c.anisotropy=4,c}function q_(){const n=Eh();n.map.repeat.set(3,1.5),n.bumpMap.repeat.set(3,1.5);const t=Eh();t.map.repeat.set(2.5,1.5),t.bumpMap.repeat.set(2.5,1.5);const e=W_(),i=$_(),s=X_(),o=Y_();return{concreteWallBack:new Wt({map:n.map,bumpMap:n.bumpMap,bumpScale:.008,roughness:.82,metalness:.02}),concreteWallSide:new Wt({map:t.map,bumpMap:t.bumpMap,bumpScale:.008,roughness:.82,metalness:.02}),floor:new Wt({map:e.map,roughnessMap:e.roughnessMap,roughness:.42,metalness:.04}),oakWood:new Wt({map:i,roughness:.56,metalness:.04}),chrome:new Wt({color:15133682,metalness:.9,roughness:.15}),deskTop:new Wt({color:15988474,roughness:.38,metalness:.05}),deskEdge:new Wt({color:13935475,roughness:.52,metalness:.05}),coveSlate:new Wt({color:2831942,roughness:.55,metalness:.18}),matteBlack:new Wt({color:1975600,roughness:.62,metalness:.14}),darkMetal:new Wt({color:3884116,roughness:.4,metalness:.68}),leather:new Wt({map:s.map,bumpMap:s.bumpMap,bumpScale:.022,roughness:.52,metalness:.06}),luminousCeiling:new Wt({color:16777215,emissive:16383231,emissiveIntensity:1.15,roughness:.22,metalness:0}),downlightGlow:new Wt({color:16777215,emissive:15531775,emissiveIntensity:1.5,roughness:.2}),ceramicWhite:new Wt({color:16317180,roughness:.28,metalness:.04}),soilDark:new Wt({color:4140577,roughness:.92,metalness:0}),leafDark:new Wt({color:1409085,roughness:.68,metalness:.02}),leafMid:new Wt({color:2278750,roughness:.62,metalness:.02}),leafLight:new Wt({color:4906624,roughness:.58,metalness:.02}),champagneGold:new Wt({color:14268538,metalness:.88,roughness:.22}),luxuryGlass:new Tl({color:15661567,transparent:!0,opacity:.2,roughness:.03,metalness:.08,clearcoat:1,clearcoatRoughness:.04,ior:1.52,reflectivity:1,specularIntensity:1,depthWrite:!1,side:sn}),luxuryGlassEdge:new Tl({color:12248829,emissive:8246268,emissiveIntensity:.16,transparent:!0,opacity:.48,roughness:.06,metalness:.1,depthWrite:!1}),luxuryGlassSheen:new xe({map:o,transparent:!0,opacity:.42,depthWrite:!1,side:sn})}}function Vd(n){let t=n%2147483647;return t<=0&&(t+=2147483646),()=>(t=t*16807%2147483647,(t-1)/2147483646)}function j_(n,t=1,e=101){const i=new Lt,s=Vd(e),o=.52*t,r=.28*t,a=.21*t,l=new B(new Qt(r,a,o,20),n.ceramicWhite);l.position.y=o/2,l.castShadow=!0,l.receiveShadow=!0,i.add(l);const c=new B(new po(r*.96,.018*t,8,24),n.oakWood);c.rotation.x=Math.PI/2,c.position.y=o-.02*t,i.add(c);const h=new B(new Es(r*.9,16),n.soilDark);h.rotation.x=-Math.PI/2,h.position.y=o-.03*t,i.add(h);const d=n.oakWood,u=new B(new Qt(.032*t,.048*t,.95*t,8),d);u.position.y=o+.42*t,u.castShadow=!0,i.add(u);const p=[n.leafDark,n.leafMid,n.leafLight],v=[{angle:0,tilt:.35,h:.55,yOff:.72},{angle:2.1,tilt:.42,h:.62,yOff:.85},{angle:4.3,tilt:.38,h:.52,yOff:.95}];for(const M of v){const m=new Lt;m.position.y=o+M.yOff*t,m.rotation.y=M.angle;const f=new B(new Qt(.016*t,.026*t,M.h*t,7),d);f.position.set(0,M.h*t/2,.08*t),f.rotation.x=M.tilt,m.add(f);for(let b=0;b<5;b++){const x=(.14+s()*.1)*t,g=new B(new Li(x,1),p[b%p.length]);g.position.set((s()-.5)*.24*t,(M.h+(s()-.3)*.25)*t,(.18+(s()-.5)*.22)*t),g.scale.set(1.15,.82,1.15),g.castShadow=!0,m.add(g)}i.add(m)}for(let M=0;M<5;M++){const m=new B(new Li((.18+s()*.08)*t,1),p[(M+1)%p.length]);m.position.set((s()-.5)*.22*t,o+(1.32+s()*.24)*t,(s()-.5)*.22*t),m.scale.set(1.2,.8,1.2),m.castShadow=!0,i.add(m)}return i}function K_(n,t,e,i=303){const s=new Lt,o=Vd(i),r=new B(new st(n,t,.04),new Wt({color:1323805,roughness:.9}));s.add(r);const a=.065,l=.085,c=new B(new st(n+a*2,a,l),e.oakWood);c.position.y=t/2+a/2;const h=new B(new st(n+a*2,a,l),e.oakWood);h.position.y=-t/2-a/2;const d=new B(new st(a,t,l),e.oakWood);d.position.x=-n/2-a/2;const u=new B(new st(a,t,l),e.oakWood);u.position.x=n/2+a/2,s.add(c,h,d,u);const p=[e.leafDark,e.leafMid,e.leafLight],v=Math.max(5,Math.round(n*4.5)),M=Math.max(6,Math.round(t*4.2)),m=new Li(.13,1);for(let f=0;f<M;f++)for(let b=0;b<v;b++){const x=-n/2+.14+b/Math.max(1,v-1)*(n-.28)+(o()-.5)*.06,g=-t/2+.14+f/Math.max(1,M-1)*(t-.28)+(o()-.5)*.06,T=new B(m,p[Math.floor(o()*p.length)]);T.position.set(x,g,.045+o()*.035);const A=.72+o()*.55;T.scale.set(A,A*.88,.55+o()*.35),s.add(T)}return s}function Th(n,t,e,i){const s=n.createLinearGradient(0,0,0,e),o=new Gt("#38bdf8"),r=new Gt("#bae6fd"),a=new Gt("#fef9c3"),l=new Gt("#091326"),c=new Gt("#172554"),h=new Gt("#1e3a5f"),d=o.clone().lerp(l,i),u=r.clone().lerp(c,i),p=a.clone().lerp(h,i);if(s.addColorStop(0,`#${d.getHexString()}`),s.addColorStop(.58,`#${u.getHexString()}`),s.addColorStop(1,`#${p.getHexString()}`),n.fillStyle=s,n.fillRect(0,0,t,e),i<.65){const m=(1-i/.65)*.85,f=n.createRadialGradient(t*.72,e*.32,10,t*.72,e*.32,220);f.addColorStop(0,`rgba(255, 253, 224, ${m})`),f.addColorStop(.4,`rgba(254, 240, 138, ${m*.45})`),f.addColorStop(1,"rgba(255, 255, 255, 0)"),n.fillStyle=f,n.fillRect(0,0,t,e),n.fillStyle=`rgba(255, 255, 255, ${m*.82})`;const b=[[180,115,78,28],[230,102,58,24],[520,145,92,30],[575,132,62,24],[810,95,75,26]];for(const[x,g,T,A]of b)n.beginPath(),n.ellipse(x,g,T,A,0,0,Math.PI*2),n.fill()}else{n.fillStyle="rgba(226, 232, 240, 0.75)";for(let m=0;m<45;m++){const f=m*197%(t-40)+20,b=m*89%(e*.55)+15;n.fillRect(f,b,2.5,2.5)}}const v=i>.5?"#0f172a":"#94a3b8",M=[[20,120,88],[118,175,102],[232,140,82],[328,210,115],[458,155,94],[568,230,110],[694,148,88],[796,185,116],[926,132,84]];for(const[m,f,b]of M)if(n.fillStyle=v,n.fillRect(m,e-f,b,f),i>.35){n.fillStyle=`rgba(253, 224, 71, ${(i-.35)*.8})`;for(let x=e-f+14;x<e-18;x+=20)for(let g=m+12;g<m+b-14;g+=18)(g+x)%3!==0&&n.fillRect(g,x,7,9)}}function Z_(n){const t=new Lt,e=new Wt({color:1976635,roughness:.9}),i=[{xStart:-8.68,xEnd:-7.02},{xStart:7.02,xEnd:8.68}],s=4.92,o=new st(.058,s,.042);for(const w of i){const S=w.xEnd-w.xStart,_=(w.xStart+w.xEnd)/2,y=new B(new st(S,s,.016),e);y.position.set(_,.1+s/2,-6.985),t.add(y);for(let R=w.xStart+.06;R<=w.xEnd-.04;R+=.125){const L=new B(o,n.oakWood);L.position.set(R,.1+s/2,-6.96),L.castShadow=!0,L.receiveShadow=!0,t.add(L)}}const r=[[-8.05,0,-6.05,1.05,11],[8.05,0,-6.05,1.05,22],[-8.05,0,6.95,1.12,33],[8.05,0,6.95,1.12,44]];for(const[w,S,_,y,R]of r){const L=j_(n,y,R);L.position.set(w,S,_),t.add(L)}const a=[{x:-8.94,y:2.38,z:1.05,rotY:Math.PI/2,w:1.72,h:2.35,seed:105},{x:8.94,y:2.38,z:-.82,rotY:-Math.PI/2,w:2.05,h:2.35,seed:207},{x:8.94,y:2.38,z:4.75,rotY:-Math.PI/2,w:2.35,h:2.35,seed:309}];for(const w of a){const S=K_(w.w,w.h,n,w.seed);S.position.set(w.x,w.y,w.z),S.rotation.y=w.rotY,t.add(S)}const l=3.5,c=3,h=document.createElement("canvas");h.width=1024,h.height=600;const d=h.getContext("2d");Th(d,h.width,h.height,0);const u=new Ne(h);u.colorSpace=fe;const p=new Lt;p.position.set(-8.94,2.55,4.65),p.rotation.y=Math.PI/2;const v=new Wt({map:u,emissiveMap:u,emissive:new Gt(16777215),emissiveIntensity:.92,roughness:.15}),M=new B(new Se(l,c),v);p.add(M);const m=.08,f=new B(new st(l+.12,.07,m),n.coveSlate);f.position.y=c/2+.03;const b=new B(new st(l+.12,.09,m+.04),n.oakWood);b.position.y=-c/2-.04;const x=new B(new st(.07,c,m),n.coveSlate);x.position.x=-l/2-.03;const g=new B(new st(.07,c,m),n.coveSlate);g.position.x=l/2+.03,p.add(f,b,x,g);for(const w of[-l/6,l/6]){const S=new B(new st(.045,c,.05),n.coveSlate);S.position.set(w,0,.02),p.add(S)}t.add(p);let T=-1;function A(w){v.emissiveIntensity=Xt.lerp(.95,.52,w);const S=Math.round(w*20);S!==T&&(T=S,Th(d,h.width,h.height,S/20),u.needsUpdate=!0)}return{group:t,setLightingMode:A}}function $s(n,t,e,i,s){const a=document.createElement("canvas");a.width=512,a.height=340;const l=a.getContext("2d"),c=l.createLinearGradient(0,0,512,340);c.addColorStop(0,e),c.addColorStop(1,i),l.fillStyle=c,l.fillRect(0,0,512,340),l.strokeStyle=s,l.globalAlpha=.28,l.lineWidth=3;for(let d=42;d<=140;d+=32)l.beginPath(),l.arc(512*.78,340*.42,d,0,Math.PI*2),l.stroke();l.globalAlpha=1,l.strokeStyle="rgba(255, 255, 255, 0.25)",l.lineWidth=2,l.strokeRect(18,18,476,304),l.fillStyle=s,l.fillRect(36,98,56,5),l.fillStyle="#f8fafc",l.font="bold 34px Segoe UI, sans-serif",l.fillText(n,36,152),l.fillStyle="#cbd5e1",l.font="600 18px Consolas, monospace",l.fillText(t,36,194);const h=new Ne(a);return h.colorSpace=fe,h.anisotropy=4,h}function J_(n){const t=new Lt,e=new Lt,i=new Wt({color:1976635,roughness:.92,metalness:.02}),s=new B(new Qt(1.62,1.62,.008,40),i);s.position.set(0,.004,-4.15),s.receiveShadow=!0;const o=new B(new fo(1.56,1.63,40),n.champagneGold);o.rotation.x=-Math.PI/2,o.position.set(0,.009,-4.15);const r=new B(new st(8.6,.008,2.8),i);r.position.set(0,.004,6),r.receiveShadow=!0;const a=new B(new st(8.64,.01,.045),n.champagneGold);a.position.set(0,.006,4.6);const l=new B(new st(8.64,.01,.045),n.champagneGold);l.position.set(0,.006,7.4),e.add(s,o,r,a,l),t.add(e);const c=new Lt,h=new Lt;h.position.set(-3.6,0,6.25);const d=new B(new st(2.46,.08,.86),n.champagneGold);d.position.y=.14,d.castShadow=!0,h.add(d);for(const K of[-1.14,1.14])for(const F of[-.36,.36]){const nt=new B(new Qt(.025,.02,.11,10),n.champagneGold);nt.position.set(K,.055,F),h.add(nt)}for(let K=-1;K<=1;K++){const F=new B(new st(.76,.22,.78),n.leather);F.position.set(K*.78,.29,-.02),F.castShadow=!0,F.receiveShadow=!0,h.add(F)}const u=new B(new st(2.44,.56,.22),n.leather);u.position.set(0,.52,.34),u.castShadow=!0,h.add(u);for(const K of[-1.22,1.22]){const F=new B(new st(.18,.44,.88),n.leather);F.position.set(K,.38,0),F.castShadow=!0,h.add(F)}const p=new Wt({color:959977,roughness:.75});for(const K of[-.88,.88]){const F=new B(new st(.32,.28,.11),p);F.position.set(K,.48,.16),F.rotation.z=K<0?.14:-.14,F.rotation.x=-.18,h.add(F)}c.add(h);const v=new Lt;v.position.set(-3.6,0,5.15);const M=new B(new st(1.38,.035,.68),n.oakWood);M.position.y=.18,M.castShadow=!0;const m=new B(new st(1.42,.022,.72),n.luxuryGlass);m.position.y=.42,m.renderOrder=2;const f=new B(new st(1.45,.028,.75),n.champagneGold);f.position.y=.395;for(const K of[-.64,.64])for(const F of[-.3,.3]){const nt=new B(new Qt(.02,.02,.4,10),n.champagneGold);nt.position.set(K,.2,F),v.add(nt)}const b=new B(new Qt(.055,.075,.16,14),n.ceramicWhite);b.position.set(-.28,.51,0),b.castShadow=!0;const x=new B(new Li(.09,1),n.leafMid);x.position.set(-.28,.63,0);const g=new B(new st(.26,.014,.19),n.matteBlack);g.position.set(.25,.44,.04),g.rotation.y=.22,v.add(M,f,m,b,x,g),c.add(v),t.add(c);const T=new Lt,A=[{pos:[-4.2,2.65,7.93],rotY:Math.PI,w:1.95,h:1.25,tex:$s("MRT VISION","AI SOFTWARE FACTORY","#0f172a","#1e3a5f","#38bdf8")},{pos:[0,2.65,7.93],rotY:Math.PI,w:2.25,h:1.35,tex:$s("INNOVATE 24/7","ANDROID • WINDOWS • CLOUD","#111827","#064e3b","#10b981")},{pos:[4.2,2.65,7.93],rotY:Math.PI,w:1.95,h:1.25,tex:$s("SLA 99.98%","ENGINEERING EXCELLENCE","#1c1917","#451a03","#f59e0b")},{pos:[-8.94,3.45,-5.85],rotY:Math.PI/2,w:1.65,h:1.05,tex:$s("SHIP FAST","CI/CD • CODE SIGNING","#0f172a","#312e81","#818cf8")},{pos:[8.94,3.45,-5.65],rotY:-Math.PI/2,w:1.65,h:1.05,tex:$s("ZERO BUGS","AUTOMATED E2E QA","#042f2e","#0f172a","#2dd4bf")}];for(const K of A){const F=new Lt;F.position.set(...K.pos),F.rotation.y=K.rotY;const nt=new B(new st(K.w+.09,K.h+.09,.036),n.champagneGold);nt.castShadow=!0;const Mt=new B(new Se(K.w,K.h),new Wt({map:K.tex,roughness:.32,metalness:.06}));Mt.position.z=.022,F.add(nt,Mt),T.add(F)}t.add(T);const w=new Lt,S=new xe({color:3718648}),_=new B(new st(15.6,.024,.03),S);_.position.set(0,5.12,-5.84);const y=new B(new st(15.6,.024,.03),S);y.position.set(0,5.12,6.84);const R=new B(new st(.03,.024,12.6),S);R.position.set(-7.84,5.12,.5);const L=new B(new st(.03,.024,12.6),S);L.position.set(7.84,5.12,.5),w.add(_,y,R,L),t.add(w);const D=new Lt,U=[];for(let K=0;K<2;K++){const F=new Lt;F.position.set(4.65+K*1,0,6.55),F.rotation.y=Math.PI;const nt=new B(new st(.78,2.15,.84),n.matteBlack);nt.position.y=1.075,nt.castShadow=!0,nt.receiveShadow=!0,F.add(nt);const Mt=new B(new st(.7,2.02,.02),n.luxuryGlass);Mt.position.set(0,1.08,.43),Mt.renderOrder=2,F.add(Mt);for(const lt of[-.37,.37]){const Ct=new B(new st(.025,2.12,.03),n.champagneGold);Ct.position.set(lt,1.07,.425),F.add(Ct)}for(let lt=0;lt<8;lt++){const Ct=.28+lt*.22,Pt=new B(new st(.64,.14,.03),n.darkMetal);Pt.position.set(0,Ct,.415),F.add(Pt);const Ht=new xe({color:lt%3===0?2278750:3718648}),$t=new B(new st(.055,.018,.01),Ht);$t.position.set(-.24+lt%2*.08,Ct,.435),F.add($t),U.push({mat:Ht,phase:K*2.1+lt*.75})}D.add(F)}t.add(D);const H=new Lt;H.position.set(1.55,0,6.55),H.rotation.y=Math.PI;const V=new B(new st(1.85,.96,.68),n.oakWood);V.position.y=.48,V.castShadow=!0,V.receiveShadow=!0;const z=new B(new st(1.92,.05,.74),n.ceramicWhite);z.position.y=.985,z.castShadow=!0;const O=new B(new st(1.88,.024,.71),n.champagneGold);O.position.y=.94;const X=new B(new st(.46,.42,.34),n.chrome);X.position.set(-.35,1.22,0),X.castShadow=!0;const J=new B(new Qt(.08,.1,.34,14),n.matteBlack);J.position.set(.18,1.18,.02),J.castShadow=!0;for(let K=0;K<3;K++){const F=new B(new Qt(.036,.03,.08,12),n.ceramicWhite);F.position.set(.52+K*.11,1.05,.06),H.add(F)}H.add(V,O,z,X,J),t.add(H);function q(K={}){var F;typeof K.showCarpet=="boolean"&&(e.visible=K.showCarpet),typeof K.showLounge=="boolean"&&(c.visible=K.showLounge),typeof K.showWallArt=="boolean"&&(T.visible=K.showWallArt),typeof K.showAmbientStrips=="boolean"&&(w.visible=K.showAmbientStrips),typeof K.showServerRack=="boolean"&&(D.visible=K.showServerRack),typeof K.showCoffeeBar=="boolean"&&(H.visible=K.showCoffeeBar),K.accent&&S.color.set(K.accent),(F=K.themeCfg)!=null&&F.coveColor&&i.color.setHex(K.themeCfg.isLightHud?3359061:1976635)}function gt(K){if(D.visible)for(const F of U){const nt=Math.sin(K*4.5+F.phase);F.mat.color.setHex(nt>.2?2278750:nt<-.55?16096779:3718648)}}return{group:t,setDecorConfig:q,update:gt}}function Q_(){const t=document.createElement("canvas");t.width=256,t.height=256;const e=t.getContext("2d"),i=256/2,s=256/2,o=256*.46;e.fillStyle="#f8fafc",e.beginPath(),e.arc(i,s,256/2,0,Math.PI*2),e.fill();const r=e.createRadialGradient(i,s,o*.78,i,s,o);r.addColorStop(0,"rgba(255,255,255,0)"),r.addColorStop(1,"rgba(15,23,42,0.08)"),e.fillStyle=r,e.beginPath(),e.arc(i,s,o,0,Math.PI*2),e.fill();for(let l=0;l<60;l++){const c=l/60*Math.PI*2,h=l%5===0,d=h?o*.8:o*.88,u=o*.94;e.strokeStyle=h?"#1e293b":"#94a3b8",e.lineWidth=h?3.5:1.5,e.beginPath(),e.moveTo(i+Math.cos(c)*d,s+Math.sin(c)*d),e.lineTo(i+Math.cos(c)*u,s+Math.sin(c)*u),e.stroke()}const a=new Ne(t);return a.colorSpace=fe,a}function ty(n,t){const e=document.createElement("canvas");e.width=256,e.height=64;const i=e.getContext("2d");i.fillStyle="#1e242d",i.fillRect(0,0,256,64),i.strokeStyle="#475569",i.lineWidth=2,i.strokeRect(2,2,252,60),i.fillStyle="#e2e8f0",i.font="bold 22px Segoe UI, sans-serif",i.textAlign="center",i.textBaseline="middle",i.fillText(n,128,23),i.fillStyle="#38bdf8",i.font="600 15px Segoe UI, sans-serif",i.fillText(t,128,46);const s=new Ne(e);return s.colorSpace=fe,s}function ey(n){const t=new Lt,e=18,i=15,s=5.4,o=.5,r=new Se(e,i),a=new B(r,n.floor);a.rotation.x=-Math.PI/2,a.position.set(0,0,o),a.receiveShadow=!0,t.add(a);const l=new B(new Se(e,s),n.concreteWallBack);l.position.set(0,s/2,-7),l.receiveShadow=!0,t.add(l);const c=new B(new Se(e,s),n.concreteWallBack);c.rotation.y=Math.PI,c.position.set(0,s/2,8),t.add(c);const h=new B(new Se(i,s),n.concreteWallSide);h.rotation.y=Math.PI/2,h.position.set(-9,s/2,o),h.receiveShadow=!0,t.add(h);const d=new B(new Se(i,s),n.concreteWallSide);d.rotation.y=-Math.PI/2,d.position.set(9,s/2,o),d.receiveShadow=!0,t.add(d);const u=.1,p=n.coveSlate,v=new B(new st(e,u,.04),p);v.position.set(0,u/2,-6.98);const M=new B(new st(e,u,.04),p);M.position.set(0,u/2,7.98);const m=new B(new st(.04,u,i),p);m.position.set(-8.98,u/2,o);const f=new B(new st(.04,u,i),p);f.position.set(8.98,u/2,o),t.add(v,M,m,f);const b=15.8,x=12.8,g=.5,T=new B(new Se(b,x),n.luminousCeiling);T.rotation.x=Math.PI/2,T.position.set(0,5.36,g),t.add(T);const A=5,w=4,S=.055,_=.06;for(let ct=1;ct<A;ct++){const k=-b/2+b/A*ct,dt=new B(new st(S,_,x),n.coveSlate);dt.position.set(k,5.33,g),t.add(dt)}for(let ct=1;ct<w;ct++){const k=g-x/2+x/w*ct,dt=new B(new st(b,_,S),n.coveSlate);dt.position.set(0,5.33,k),t.add(dt)}const y=.28,R=s-y/2,L=1.15,D=new B(new st(L,y,i),n.coveSlate);D.position.set(-9+L/2,R,o);const U=new B(new st(L,y,i),n.coveSlate);U.position.set(9-L/2,R,o);const H=new B(new st(e,y,L),n.coveSlate);H.position.set(0,R,-7+L/2);const V=new B(new st(e,y,L),n.coveSlate);V.position.set(0,R,8-L/2),t.add(D,U,H,V);const z=new Es(.085,20),O=new fo(.085,.115,20),X=(ct,k)=>{const dt=new B(z,n.downlightGlow);dt.rotation.x=Math.PI/2,dt.position.set(ct,s-y-.004,k);const j=new B(O,n.darkMetal);j.rotation.x=Math.PI/2,j.position.set(ct,s-y-.003,k),t.add(dt,j)};for(let ct=0;ct<5;ct++){const k=-5.2+ct*2.85;X(-8.42,k),X(8.42,k)}for(let ct=0;ct<5;ct++){const k=-6+ct*3;X(k,-6.42)}const J=Q_(),q=new Wt({map:J,roughness:.35,metalness:.05}),gt=[{z:-4.3,city:"HÀ NỘI",tz:"UTC +7",offsetHours:7},{z:-2.5,city:"TOKYO",tz:"UTC +9",offsetHours:9},{z:-.7,city:"SAN FRANCISCO",tz:"UTC -8",offsetHours:-8}],K=[],F=new Lt;for(const ct of gt){const k=new Lt;k.position.set(-8.93,2.28,ct.z),k.rotation.y=Math.PI/2;const dt=new B(new Qt(.36,.36,.05,36),n.chrome);dt.rotation.x=Math.PI/2,dt.castShadow=!0,k.add(dt);const j=new B(new Es(.335,36),q);j.position.z=.027,k.add(j);const ot=new Lt;ot.position.z=.032;const Tt=new B(new st(.018,.17,.005),n.matteBlack);Tt.position.y=.075,ot.add(Tt);const wt=new Lt;wt.position.z=.036;const Yt=new B(new st(.012,.24,.005),n.matteBlack);Yt.position.y=.105,wt.add(Yt);const oe=new Lt;oe.position.z=.04;const be=new xe({color:959977}),te=new B(new st(.006,.26,.004),be);te.position.y=.1,oe.add(te);const Be=new B(new Qt(.014,.014,.015,16),n.matteBlack);Be.rotation.x=Math.PI/2,Be.position.z=.042,k.add(ot,wt,oe,Be);const pn=ty(ct.city,ct.tz),bo=new Wt({map:pn,roughness:.45,metalness:.3}),Ds=new B(new st(.46,.115,.018),bo);Ds.position.set(0,-.49,.01),k.add(Ds),F.add(k),K.push({hourPivot:ot,minPivot:wt,secPivot:oe,offsetHours:ct.offsetHours})}t.add(F);const nt=new Lt;nt.position.set(8.72,0,-3.55);const Mt=.52,lt=1.56,Ct=2.05,Pt=new B(new st(Mt,lt,Ct),n.darkMetal);Pt.position.y=lt/2,Pt.castShadow=!0,Pt.receiveShadow=!0,nt.add(Pt);const Ht=6,$t=4,pt=(Ct-.14)/Ht,ht=(lt-.14)/$t,N=new Wt({color:6583435,roughness:.36,metalness:.52}),Bt=new B(new st(Mt+.04,.035,Ct+.04),n.oakWood);Bt.position.set(-.01,lt+.018,0),Bt.castShadow=!0,nt.add(Bt);for(let ct=0;ct<Ht;ct++)for(let k=0;k<$t;k++){const dt=-Ct/2+.07+pt*(ct+.5),j=.07+ht*(k+.5),ot=new B(new st(.02,ht-.025,pt-.025),N);ot.position.set(-Mt/2-.008,j,dt),nt.add(ot);const Tt=new B(new st(.015,.055,.016),n.chrome);Tt.position.set(-Mt/2-.022,j,dt+pt*.28),nt.add(Tt)}t.add(nt);const Y=new Lt;Y.position.set(8.94,0,1.8),Y.rotation.y=-Math.PI/2;const yt=1.75,ut=2.75,Nt=.09,At=new B(new st(Nt,ut,.14),n.matteBlack);At.position.set(-yt/2,ut/2,0);const P=new B(new st(Nt,ut,.14),n.matteBlack);P.position.set(yt/2,ut/2,0);const E=new B(new st(yt+Nt,Nt,.14),n.matteBlack);E.position.set(0,ut-Nt/2,0);const G=new Tl({color:2503232,roughness:.12,metalness:.1,transmission:.35,transparent:!0,opacity:.88,reflectivity:.85}),Z=new B(new st(yt-Nt,ut-Nt,.03),G);Z.position.set(0,(ut-Nt)/2,0);const rt=new B(new Qt(.016,.016,.72,16),n.chrome);rt.position.set(-.55,1.15,.055);const et=new B(new Se(yt-Nt,ut-Nt),new xe({color:3885400}));et.position.set(0,(ut-Nt)/2,-.025),Y.add(et,Z,At,P,E,rt),t.add(Y);const mt=Z_(n);t.add(mt.group);const at=J_(n);t.add(at.group);let _t=new Gt(16383231),Ut=0;function it(ct){const k=ct.getTime()+ct.getTimezoneOffset()*6e4;for(const dt of K){const j=new Date(k+dt.offsetHours*36e5),ot=j.getSeconds()+j.getMilliseconds()/1e3,Tt=j.getMinutes()+ot/60,wt=j.getHours()%12+Tt/60;dt.secPivot.rotation.z=-(ot/60)*Math.PI*2,dt.minPivot.rotation.z=-(Tt/60)*Math.PI*2,dt.hourPivot.rotation.z=-(wt/12)*Math.PI*2}}function bt(ct){Ut=ct,n.luminousCeiling.emissiveIntensity=Xt.lerp(1.15,.07,ct);const k=new Gt(1976635);n.luminousCeiling.emissive.copy(_t).lerp(k,ct),n.downlightGlow.emissiveIntensity=Xt.lerp(1.5,2.2,ct);const dt=new Gt(15531775),j=new Gt(3718648);n.downlightGlow.emissive.copy(dt).lerp(j,ct),mt.setLightingMode(ct)}function ft(ct){mt.group.visible=!!ct}function xt(ct){ct&&(n.concreteWallBack.color.setHex(ct.wallTint),n.concreteWallSide.color.setHex(ct.wallTint),n.floor.color.setHex(ct.floorTint),n.coveSlate.color.setHex(ct.coveColor))}function vt(ct){ct&&(ct.wallColor&&(n.concreteWallBack.color.set(ct.wallColor),n.concreteWallSide.color.set(ct.wallColor)),ct.floorColor&&n.floor.color.set(ct.floorColor),ct.deskColor&&n.deskTop.color.set(ct.deskColor),ct.chairColor&&n.leather.color.set(ct.chairColor),ct.trimColor&&n.champagneGold.color.set(ct.trimColor),ct.ceilingGlowColor&&(_t.set(ct.ceilingGlowColor),bt(Ut)))}function Dt(ct){ct&&(at.setDecorConfig(ct),typeof ct.showLockers=="boolean"&&(nt.visible=ct.showLockers),typeof ct.showClocks=="boolean"&&(F.visible=ct.showClocks))}function Vt(ct){at.update(ct)}return{group:t,updateClocks:it,setLightingMode:bt,setBiophilicVisible:ft,applySpaceTheme:xt,applyCustomColors:vt,applyDecorConfig:Dt,updateDecor:Vt}}const Ae=[{id:"intake",index:0,shortName:"1. Yêu cầu",name:"1. Yêu cầu & BA",badgeLabel:"1. YÊU CẦU & BA",color:"#38bdf8",colorHex:3718648,stations:[0,1,2],summary:"Tiếp nhận mô tả, phân tích nghiệp vụ & thiết kế wireframe UX/UI"},{id:"planning",index:1,shortName:"2. Kế hoạch",name:"2. Kế hoạch & Kiến trúc",badgeLabel:"2. KẾ HOẠCH & KIẾN TRÚC",color:"#818cf8",colorHex:8490232,stations:[3,4,5],summary:"Thiết kế kiến trúc đa nền tảng, chia Sprint & dự trù tài nguyên"},{id:"build",index:2,shortName:"3. Xây dựng",name:"3. Xây dựng & Code",badgeLabel:"3. XÂY DỰNG & CODE",color:"#3b82f6",colorHex:3900150,stations:[9,10,11],summary:"Phát triển mã nguồn Android, Windows, Web/API & tích hợp CI"},{id:"testing",index:3,shortName:"4. Kiểm thử",name:"4. Kiểm thử & QA",badgeLabel:"4. KIỂM THỬ & QA",color:"#f59e0b",colorHex:16096779,stations:[12,13,14],summary:"Kiểm thử tự động E2E, bảo mật OWASP & hiệu năng đa thiết bị"},{id:"release",index:4,shortName:"5. Phân phối",name:"5. Đóng gói & Phân phối",badgeLabel:"5. ĐÓNG GÓI & PHÂN PHỐI",color:"#10b981",colorHex:1096065,stations:[6,7,8],summary:"Ký số bản cài đặt (.AAB, .MSIX/.EXE) & phát hành lên Store/CDN"},{id:"warranty",index:5,shortName:"6. Bảo hành",name:"6. Vận hành & Bảo hành",badgeLabel:"6. VẬN HÀNH & BẢO HÀNH",color:"#14b8a6",colorHex:1357990,stations:[15,16,17],summary:"Giám sát SLA 24/7, tiếp nhận ticket khách hàng & vá lỗi Hotfix"}],yr=[{stationIndex:0,name:"Trang Bùi",role:"Product Owner",deptId:"intake",shirt:1981023,hair:"bob",skin:15843995,glasses:!0,headset:!1},{stationIndex:1,name:"Minh Thư",role:"Business Analyst",deptId:"intake",shirt:1002588,hair:"bun",skin:15119759,glasses:!1,headset:!0},{stationIndex:2,name:"Quốc Anh",role:"UX/UI Researcher",deptId:"intake",shirt:2503224,hair:"short",skin:14395003,glasses:!0,headset:!1},{stationIndex:3,name:"Huy Hoàng",role:"Solution Architect",deptId:"planning",shirt:2635155,hair:"side",skin:14922122,glasses:!0,headset:!1},{stationIndex:4,name:"Tuấn Kiệt",role:"Tech Lead",deptId:"planning",shirt:2042167,hair:"short",skin:14262646,glasses:!1,headset:!0},{stationIndex:5,name:"Hà My",role:"Scrum Master",deptId:"planning",shirt:3223169,hair:"bob",skin:15976096,glasses:!1,headset:!1},{stationIndex:6,name:"Hải Yến",role:"Release Manager",deptId:"release",shirt:413243,hair:"bun",skin:15515804,glasses:!0,headset:!1},{stationIndex:7,name:"Minh Nguyễn",role:"DevOps / CI-CD Eng",deptId:"release",shirt:1120295,hair:"short",skin:14065268,glasses:!1,headset:!0},{stationIndex:8,name:"Đức Võ",role:"Store & Code-Sign Eng",deptId:"release",shirt:417606,hair:"side",skin:14856072,glasses:!1,headset:!1},{stationIndex:9,name:"Phúc Thịnh",role:"Android / Kotlin Lead",deptId:"build",shirt:1982639,hair:"short",skin:14657920,glasses:!1,headset:!0},{stationIndex:10,name:"Bảo Long",role:"Windows / C# Desktop Lead",deptId:"build",shirt:1516884,hair:"side",skin:15251860,glasses:!0,headset:!1},{stationIndex:11,name:"Linh Trần",role:"Backend / Core Lead",deptId:"build",shirt:1920728,hair:"bob",skin:15843995,glasses:!1,headset:!0},{stationIndex:12,name:"Khang Đỗ",role:"QA Automation Lead",deptId:"testing",shirt:4528643,hair:"short",skin:14262904,glasses:!0,headset:!1},{stationIndex:13,name:"Quỳnh Anh",role:"Security / PenTest Eng",deptId:"testing",shirt:3878686,hair:"bun",skin:15910304,glasses:!1,headset:!0},{stationIndex:14,name:"Tài Ngô",role:"Performance QA",deptId:"testing",shirt:7877903,hair:"side",skin:14724228,glasses:!0,headset:!1},{stationIndex:15,name:"Nam Phan",role:"SRE Support Lead",deptId:"warranty",shirt:1265226,hair:"short",skin:14395004,glasses:!1,headset:!0},{stationIndex:16,name:"Vy Trương",role:"Customer Warranty Eng",deptId:"warranty",shirt:1138265,hair:"bob",skin:15778202,glasses:!0,headset:!0},{stationIndex:17,name:"An Phạm",role:"Hotfix & Patch Specialist",deptId:"warranty",shirt:1013358,hair:"side",skin:14922121,glasses:!1,headset:!1}],mo=[{id:"smartpos",label:"SmartPOS Bán Hàng",name:"SmartPOS Bán Hàng Đa Chi Nhánh",platforms:["android","windows"],warrantyMonths:24,description:"Quản lý bán hàng tại quầy trên máy Windows (.EXE) và máy POS cầm tay Android (.APK); đồng bộ tồn kho thời gian thực, in hóa đơn nhiệt ESC/POS và quét mã QR thanh toán offline-first."},{id:"delivery",label:"App Android Giao Hàng",name:"ExpressShip Giao Hàng Tức Thời",platforms:["android","web"],warrantyMonths:12,description:"Ứng dụng tài xế Android theo dõi GPS nền, chụp ảnh POD giao hàng, tối ưu lộ trình và trang quản trị điều phối Web Dashboard thời gian thực."},{id:"win-erp",label:"Windows Kế Toán ERP",name:"VietLedger ERP Desktop",platforms:["windows"],warrantyMonths:24,description:"Phần mềm kế toán nội bộ trên Windows 11 (.NET 8 WinUI 3), xuất hóa đơn điện tử, ký số USB Token, phân quyền chi tiết và sao lưu SQLite/PostgreSQL tự động."},{id:"ai-cskh",label:"AI CSKH Đa Nền Tảng",name:"OmniCare AI Assistant Suite",platforms:["android","windows","web","ios"],warrantyMonths:24,description:"Trợ lý CSKH AI đa kênh đồng bộ trên Android, Windows Desktop, iOS và Web; định tuyến ticket tự động, gợi ý câu trả lời RAG và báo cáo SLA theo thời gian thực."}],An={android:{label:"Android",stack:"Kotlin + Jetpack Compose + Room DB",buildCmd:"gradle bundleRelease",qaSuite:"Android 14 Emulator E2E + UI Automator",packageExt:".aab / .apk",channel:"Google Play Console & Enterprise MDM",ticketSamples:["Sửa lỗi crash CameraX trên Android 14 Samsung OneUI","Tối ưu thời lượng pin dịch vụ đồng bộ nền WorkManager","Cập nhật SDK thanh toán QR ngân hàng v2.4"]},windows:{label:"Windows",stack:"C# .NET 8 + WinUI 3 / WPF + SQLite",buildCmd:"dotnet publish -c Release -r win-x64",qaSuite:"Windows 11 High-DPI & Print Spooler QA",packageExt:".msix / .exe",channel:"Microsoft Store & Signed Auto-Updater",ticketSamples:["Vá lỗi in hóa đơn khổ 80mm trên Windows 11 24H2","Khắc phục rò rỉ bộ nhớ khi mở nhiều tab báo cáo WinUI","Cập nhật chứng chỉ ký số EV Code Signing"]},web:{label:"Web / Cloud",stack:"TypeScript + Vite + Go/Node API + PostgreSQL",buildCmd:"vite build && docker build",qaSuite:"Playwright E2E + k6 Load + OWASP ZAP",packageExt:"Docker Image",channel:"Kubernetes Production + Global CDN",ticketSamples:["Tối ưu truy vấn báo cáo tồn kho giảm p95 từ 220ms xuống 34ms","Bổ sung giới hạn tốc độ WAF chống spam webhook"]},ios:{label:"iOS",stack:"SwiftUI + CoreData + BackgroundTasks",buildCmd:"xcodebuild -scheme Release archive",qaSuite:"iOS 18 Simulator + XCTest Suite",packageExt:".ipa",channel:"App Store Connect & TestFlight",ticketSamples:["Sửa lỗi bố cục Dynamic Island trên iPhone 16 Pro","Cập nhật quyền thông báo đẩy APNs silent push"]}};function ny(n){return(n||"software-app").normalize("NFD").replace(/[\u0300-\u036f]/g,"").replace(/[^a-zA-Z0-9]+/g,"-").replace(/^-+|-+$/g,"").toLowerCase().slice(0,28)||"software-app"}function iy(n,t){const e=(n||"").split(/[;.\n,]+/).map(s=>s.trim()).filter(s=>s.length>=6);return e.length>=3?e.slice(0,4):[`Nghiệp vụ cốt lõi đa nền tảng (${t.map(s=>{var o;return((o=An[s])==null?void 0:o.label)||s}).join(" + ")})`,"Đồng bộ dữ liệu thời gian thực & cơ chế offline-first","Phân quyền bảo mật, nhật ký kiểm toán & báo cáo SLA"]}function wh(n){const t=Array.isArray(n.platforms)&&n.platforms.length>0?n.platforms.filter(v=>An[v]):["android","windows"],e=(n.name||"SmartPOS Bán Hàng").trim(),i=ny(e),s=Number(n.warrantyMonths)||24,o=(n.description||mo[0].description).trim(),r=iy(o,t),a=t.map(v=>An[v].label),l=t.map(v=>`${An[v].label}: ${An[v].stack}`),c=t.map(v=>An[v].buildCmd),h=t.map(v=>An[v].qaSuite),d=t.map(v=>An[v].channel),u=[{name:`${i}-SRS-v1.pdf`,stage:0,platform:"Docs"},{name:`${i}-Arch-Blueprint.fig`,stage:1,platform:"Design"}];t.includes("android")&&(u.push({name:`${i}-v1.0.0.aab`,stage:4,platform:"Android"}),u.push({name:`${i}-pos-v1.0.0.apk`,stage:4,platform:"Android"})),t.includes("windows")&&(u.push({name:`${i}-win-x64.msix`,stage:4,platform:"Windows"}),u.push({name:`${i}-Setup-x64.exe`,stage:4,platform:"Windows"})),t.includes("web")&&u.push({name:`${i}-web:1.0.0`,stage:4,platform:"Web"}),t.includes("ios")&&u.push({name:`${i}-v1.0.0.ipa`,stage:4,platform:"iOS"}),u.push({name:`${i}-QA-Report.html`,stage:3,platform:"QA"}),u.push({name:`${i}-Warranty-SLA-${s}M.pdf`,stage:5,platform:"SLA"});const p=[{index:0,title:"Tiếp nhận Yêu cầu & Phân tích BA",summary:`Thu thập mô tả cho "${e}" trên ${a.join(" + ")}, tách ${r.length} module nghiệp vụ chính.`,deliverables:[`Tài liệu đặc tả ${i}-SRS-v1.pdf`,...r.map(v=>`User Story: ${v}`)],logs:[`[BA] Khởi tạo hồ sơ dự án: "${e}"`,`[PO] Xác định nền tảng mục tiêu: ${a.join(", ")}`,"[UX] Hoàn thiện wireframe luồng màn hình chính & bảng màu hệ thống"]},{index:1,title:"Lên Kế hoạch & Kiến trúc Hệ thống",summary:`Chọn tech stack (${a.join(" / ")}), lập lịch Sprint & thiết kế DB/API Sync.`,deliverables:[...l,"Biểu đồ kiến trúc Event-Driven & Offline Sync","Kế hoạch 4 Sprint + Ma trận rủi ro kỹ thuật"],logs:[`[ARCH] Chốt kiến trúc: ${l[0]}`,...l[1]?[`[ARCH] Chốt client thứ 2: ${l[1]}`]:[],"[SCRUM] Phân rã backlog 48 story points cho đội Xây dựng & QA"]},{index:2,title:"Xây dựng & Lập trình Đa Nền Tảng",summary:`Biên dịch đồng thời mã nguồn ${a.join(" & ")} với pipeline CI tích hợp liên tục.`,deliverables:[...c.map(v=>`Build Pipeline: ${v}`),"Module đồng bộ API Real-time & mã hóa lưu trữ cục bộ"],logs:[...c.map(v=>`[DEV] Đang chạy: ${v} -> SUCCESS`),"[CORE] Tích hợp Auth SSO & Telemetry Agent hoàn tất"]},{index:3,title:"Kiểm thử Tự động, Bảo mật & Hiệu năng",summary:"Chạy toàn bộ test suite trên giả lập Android/Windows/Web, kiểm tra bảo mật & tải cao.",deliverables:[...h,`Báo cáo chất lượng ${i}-QA-Report.html (Coverage 94.6%)`,"Kiểm định lỗ hổng OWASP Top 10: 0 Critical"],logs:[...h.map(v=>`[QA] ${v} -> 148/148 PASSED`),"[SEC] Quét bảo mật & hiệu năng p95 đạt ngưỡng phát hành"]},{index:4,title:"Đóng gói, Ký số & Phân phối Sản phẩm",summary:`Ký số chứng chỉ phát hành và đẩy gói cài đặt lên ${d.join(" + ")}.`,deliverables:[...u.filter(v=>v.stage===4).map(v=>`Gói phát hành: ${v.name}`),...d.map(v=>`Kênh phân phối: ${v}`)],logs:["[REL] Ký số chứng chỉ doanh nghiệp & kiểm tra checksum SHA-256",...d.map(v=>`[DIST] Xuất bản thành công tới ${v}`)]},{index:5,title:`Vận hành 24/7 & Bảo hành (${s} tháng)`,summary:"Theo dõi sức khỏe production theo SLA 99.98%, tiếp nhận ticket khách hàng và phát hành Hotfix tự động.",deliverables:[`Hợp đồng bảo hành ${s} tháng (SLA 99.98%)`,"Kênh tiếp nhận lỗi 24/7 & cảnh báo Crashlytics/Sentry","Quy trình vá lỗi nóng Hotfix OTA / Auto-Updater < 2 giờ"],logs:[`[SRE] Kích hoạt giám sát Production & bảo hành ${s} tháng`,"[SLA] Uptime 99.98% • Chế độ hỗ trợ khách hàng đang hoạt động"]}];return{name:e,slug:i,platforms:t,platformLabels:a,warrantyMonths:s,description:o,features:r,artifacts:u,stageDetails:p}}function sy(n=mo[0]){let t=wh(n),e=0,i=.08,s=1,o=!1,r=0,a=[],l=[...t.stageDetails[0].logs];const c=9.5;function h(b){l.push(b),l.length>14&&(l=l.slice(l.length-14))}function d(b){return t=wh(b),e=0,i=.05,o=!1,r=0,a=[],l=[...t.stageDetails[0].logs],f()}function u(b){const x=Math.max(0,Math.min(5,b));e=x,i=x===5?.5:.12,l=[];for(let g=0;g<=x;g++)for(const T of t.stageDetails[g].logs)h(T);return f()}function p(){e<5&&u(5),r+=1;const b=t.platforms[(r-1)%t.platforms.length],x=An[b]||An.android,g=x.ticketSamples[(r-1)%x.ticketSamples.length],T=`WAR-${String(100+r)}`,A=`v1.0.${r}`,w={id:T,platform:x.label,title:g,version:A,status:"ĐÃ VÁ HOTFIX",eta:"28 phút"};return a=[w,...a].slice(0,5),h(`[TICKET ${T}] ${x.label}: ${g}`),h(`[HOTFIX ${A}] Đã kiểm thử & đẩy bản vá OTA/Updater thành công`),w}function v(b){o=!!b}function M(b){s=[1,2,4].includes(b)?b:1}function m(b){if(o)return!1;let x=!1;if(e<5){if(i+=b*s/c,i>=1){e+=1,i=e===5?.2:.02,x=!0;for(const g of t.stageDetails[e].logs)h(g)}}else i=Math.min(1,i+b*s/(c*1.5));return x}function f(){const b=e===5&&i>=.99?1:Math.min(1,(e+i)/6),x=Ae.map((g,T)=>T<e?"done":T===e?(T===5&&i>=.99,"active"):"pending");return{project:t,stageIndex:e,stageProgress:i,overallProgress:b,stageStatus:x,currentDept:Ae[e],currentStageDetail:t.stageDetails[e],activeLogs:[...l],artifacts:t.artifacts.map(g=>({...g,ready:e>g.stage||e===g.stage&&i>=.65})),warrantyTickets:[...a],version:`v1.0.${r}`,paused:o,speed:s}}return{startProject:d,jumpToStage:u,triggerWarrantyTicket:p,setPaused:v,setSpeed:M,update:m,getState:f}}function go(n,t,e,i,s,o,r=18,a=2.5){n.strokeStyle=o,n.lineWidth=a,n.beginPath(),n.moveTo(t,e+r),n.lineTo(t,e),n.lineTo(t+r,e),n.moveTo(t+i-r,e),n.lineTo(t+i,e),n.lineTo(t+i,e+r),n.moveTo(t,e+s-r),n.lineTo(t,e+s),n.lineTo(t+r,e+s),n.moveTo(t+i-r,e+s),n.lineTo(t+i,e+s),n.lineTo(t+i,e+s-r),n.stroke()}function Rn(n,t,e,i,s,o="#38bdf8",r="rgba(8, 17, 31, 0.92)"){n.fillStyle=r,n.fillRect(t,e,i,s),n.strokeStyle="rgba(56, 189, 248, 0.25)",n.lineWidth=1.5,n.strokeRect(t,e,i,s),go(n,t,e,i,s,o,12,2)}function oy(n,t,e,i,s,o,r){var g;const a=s?"#fb7185":((g=o==null?void 0:o.currentDept)==null?void 0:g.color)||"#38bdf8",l=o==null?void 0:o.project,c=(l==null?void 0:l.name)||"SmartPOS Bán Hàng",h=(l==null?void 0:l.platforms)||["android","windows"];n.fillStyle="#040914",n.fillRect(0,0,t,e),n.strokeStyle="rgba(56, 189, 248, 0.35)",n.lineWidth=2,n.strokeRect(10,10,t-20,e-20),go(n,10,10,t-20,e-20,a,26,3.5);const d=22,u=t-d*2;Rn(n,d,d,u,118,a),n.fillStyle="#7dd3fc",n.font="bold 12px Consolas, monospace",n.fillText("ACTIVE SOFTWARE PROJECT",d+14,d+24),n.fillStyle="#f8fafc",n.font="bold 19px Segoe UI, sans-serif",n.fillText(c.slice(0,32),d+14,d+54);let p=d+14;h.forEach(T=>{const A=T.toUpperCase(),w=A.length*10+18;n.fillStyle="rgba(56, 189, 248, 0.16)",n.fillRect(p,d+72,w,28),n.strokeStyle=a,n.lineWidth=1.5,n.strokeRect(p,d+72,w,28),n.fillStyle="#e0f2fe",n.font="bold 12px Consolas, monospace",n.fillText(A,p+9,d+90),p+=w+8});const v=d+132,M=310;Rn(n,d,v,u,M,a),n.fillStyle="#7dd3fc",n.font="bold 13px Segoe UI, sans-serif",n.fillText("QUY TRÌNH 6 GIAI ĐOẠN (SDLC PIPELINE)",d+14,v+24),Ae.forEach((T,A)=>{const w=v+42+A*43,S=o?o.stageStatus[A]:A===0?"active":"pending",_=S==="done"?1:S==="active"?(o==null?void 0:o.stageProgress)||.3:0,y=S==="done"?"#10b981":S==="active"?T.color:"#475569";n.fillStyle=S==="active"?"rgba(56, 189, 248, 0.12)":"rgba(15, 23, 42, 0.7)",n.fillRect(d+14,w,u-28,36),n.strokeStyle=y,n.lineWidth=S==="active"?2:1,n.strokeRect(d+14,w,u-28,36),n.fillStyle="#f8fafc",n.font="bold 13px Segoe UI, sans-serif",n.fillText(T.name,d+24,w+18),n.fillStyle=y,n.font="bold 11px Consolas, monospace";const R=S==="done"?"DONE 100%":S==="active"?`${Math.round(_*100)}%`:"WAIT";n.fillText(R,d+u-94,w+18),n.fillStyle="#0f172a",n.fillRect(d+24,w+25,u-48,5),n.fillStyle=y,n.fillRect(d+24,w+25,(u-48)*_,5)});const m=v+M+14,f=e-m-d;Rn(n,d,m,u,f,a),n.fillStyle="#7dd3fc",n.font="bold 13px Segoe UI, sans-serif",n.fillText("LIVE EXECUTION CONSOLE",d+14,m+24),((o==null?void 0:o.activeLogs)||[]).slice(-5).forEach((T,A)=>{const w=T.includes("TICKET")||s;n.fillStyle=w?"#fbbf24":"#cbd5e1",n.font="11.5px Consolas, monospace",n.fillText(T.slice(0,56),d+14,m+46+A*22)});const x=r==null?void 0:r.latestMessage;x&&(n.fillStyle="#38bdf8",n.font="bold 11.5px Segoe UI, sans-serif",n.fillText(`[AI ${x.fromName} -> ${x.toName}]: ${x.text.slice(0,42)}`,d+14,m+f-14))}function ry(n,t,e,i,s,o,r,a){var Nt,At,P;const l=((Nt=o==null?void 0:o.currentDept)==null?void 0:Nt.color)||"#38bdf8",c=s?"#fb7185":l,h=o==null?void 0:o.project,d=(h==null?void 0:h.name)||"SmartPOS Bán Hàng",u=(o==null?void 0:o.stageIndex)??0,p=Math.round(((o==null?void 0:o.overallProgress)??.1)*100);n.fillStyle="#030812",n.fillRect(0,0,t,e),n.strokeStyle="rgba(56, 189, 248, 0.32)",n.lineWidth=3,n.strokeRect(14,14,t-28,e-28),go(n,14,14,t-28,e-28,c,38,5),n.fillStyle="rgba(8, 19, 36, 0.92)",n.fillRect(28,26,t-56,52),n.strokeStyle="rgba(56, 189, 248, 0.25)",n.strokeRect(28,26,t-56,52),n.strokeStyle=c,n.lineWidth=3,n.beginPath(),n.arc(68,52,16,0,Math.PI*2),n.stroke(),n.fillStyle=c,n.beginPath(),n.arc(68,52,6,0,Math.PI*2),n.fill(),n.fillStyle="#f8fafc",n.font="bold 20px Segoe UI, sans-serif",n.fillText(`MRT SOFT HUB // ${d.toUpperCase().slice(0,32)}`,98,60);const v=820;n.fillStyle=s?"rgba(244, 63, 94, 0.28)":"rgba(6, 182, 212, 0.22)",n.fillRect(v,34,340,36),n.strokeStyle=c,n.strokeRect(v,34,340,36),n.fillStyle=s?"#fecdd3":"#e0f2fe",n.font="bold 16px Consolas, monospace",n.fillText(s?"● ALERT P1 DETECTED":`● BƯỚC ${u+1}/6: ${(((At=o==null?void 0:o.currentDept)==null?void 0:At.shortName)||"").toUpperCase()}`,v+18,58),n.fillStyle="#94a3b8",n.font="15px Consolas, monospace",a!=null&&a.prompt?(n.fillStyle="rgba(245, 158, 11, 0.2)",n.fillRect(1180,34,700,36),n.strokeStyle="#f59e0b",n.strokeRect(1180,34,700,36),n.fillStyle="#fde68a",n.font="bold 15px Segoe UI, sans-serif",n.fillText(`★ LỆNH TỐI CAO: ${a.prompt.slice(0,56)}`,1196,58)):n.fillText(`18 NHÂN SỰ  |  PHIÊN BẢN: ${(o==null?void 0:o.version)||"v1.0.0"}  |  BẢO HÀNH: ${(h==null?void 0:h.warrantyMonths)||24} THÁNG`,1185,58);const M=30,m=92,f=790,b=400;Rn(n,M,m,f,b,c,"#040c1a"),n.strokeStyle="rgba(56, 189, 248, 0.09)",n.lineWidth=1;for(let E=M+40;E<M+f;E+=48)n.beginPath(),n.moveTo(E,m),n.lineTo(E,m+b),n.stroke();for(let E=m+40;E<m+b;E+=48)n.beginPath(),n.moveTo(M,E),n.lineTo(M+f,E),n.stroke();const x=M+395,g=m+204;for(let E=50;E<=170;E+=40)n.strokeStyle=`rgba(56, 189, 248, ${.38-E*.0016})`,n.lineWidth=2,n.beginPath(),n.arc(x,g,E,0,Math.PI*2),n.stroke();const T=i*1.1%(Math.PI*2);n.save(),n.translate(x,g),n.rotate(T);const A=n.createRadialGradient(0,0,10,0,0,170);A.addColorStop(0,s?"rgba(244,63,94,0.42)":"rgba(34,211,238,0.38)"),A.addColorStop(1,"rgba(34,211,238,0)"),n.fillStyle=A,n.beginPath(),n.moveTo(0,0),n.arc(0,0,170,-.45,0),n.closePath(),n.fill(),n.restore();const w=Ae.map((E,G)=>{const Z=-Math.PI/2+G/6*Math.PI*2;return{dept:E,x:x+Math.cos(Z)*235,y:g+Math.sin(Z)*142}});for(let E=0;E<w.length;E++){const G=w[E],Z=w[(E+1)%w.length];n.strokeStyle=E<u?"rgba(16, 185, 129, 0.55)":"rgba(56, 189, 248, 0.25)",n.lineWidth=2,n.beginPath(),n.moveTo(G.x,G.y),n.lineTo(Z.x,Z.y),n.stroke(),n.strokeStyle=E===u?G.dept.color:"rgba(56, 189, 248, 0.18)",n.lineWidth=E===u?3:1.2,n.beginPath(),n.moveTo(x,g),n.lineTo(G.x,G.y),n.stroke()}const S=w[u],_=w[Math.min(5,u+1)],y=i*.85%1;n.fillStyle="#ffffff",n.beginPath(),n.arc(S.x+(_.x-S.x)*y,S.y+(_.y-S.y)*y,5.5,0,Math.PI*2),n.fill(),n.fillStyle=c,n.beginPath(),n.arc(x,g,16,0,Math.PI*2),n.fill(),n.strokeStyle="#ffffff",n.lineWidth=2,n.stroke(),n.fillStyle="#f8fafc",n.font="bold 12px Consolas, monospace",n.textAlign="center",n.fillText("SDLC HUB",x,g+32),w.forEach((E,G)=>{const Z=o?o.stageStatus[G]:"pending",rt=Z==="done"?"#10b981":Z==="active"?E.dept.color:"#475569";n.fillStyle=rt,n.beginPath(),n.arc(E.x,E.y,Z==="active"?12:8,0,Math.PI*2),n.fill(),n.strokeStyle="#ffffff",n.lineWidth=1.5,n.stroke(),n.fillStyle=Z==="active"?"#ffffff":"#cbd5e1",n.font="bold 13px Segoe UI, sans-serif",n.fillText(E.dept.shortName.toUpperCase(),E.x,E.y-16)}),n.textAlign="left";const R=836,L=92,D=340,U=265;n.fillStyle="#e8eef5",n.fillRect(R,L,D,U),n.strokeStyle=c,n.lineWidth=2.5,n.strokeRect(R,L,D,U),n.fillStyle="#0f172a",n.fillRect(R,L,D,32),n.fillStyle="#f8fafc",n.font="bold 13px Segoe UI, sans-serif",n.fillText(`GIAI ĐOẠN ${u+1}: ${(((P=o==null?void 0:o.currentDept)==null?void 0:P.name)||"").toUpperCase()}`,R+12,L+21);const H=o==null?void 0:o.currentStageDetail;n.fillStyle="#0f172a",n.font="bold 14px Segoe UI, sans-serif",n.fillText(((H==null?void 0:H.title)||"").slice(0,34),R+14,L+60),((H==null?void 0:H.deliverables)||[]).slice(0,5).forEach((E,G)=>{n.fillStyle="#0284c7",n.fillRect(R+14,L+82+G*34,8,8),n.fillStyle="#1e293b",n.font="12.5px Segoe UI, sans-serif",n.fillText(E.slice(0,42),R+30,L+90+G*34)});const z=1192,O=92,X=696,J=335,q=10,gt=(X-q)/2,K=(J-q*2)/3;Ae.forEach((E,G)=>{const Z=G%2,rt=Math.floor(G/2),et=z+Z*(gt+q),mt=O+rt*(K+q),at=o?o.stageStatus[G]:"pending",_t=at==="done"?100:at==="active"?Math.round(((o==null?void 0:o.stageProgress)||.2)*100):0,Ut=at==="active";n.fillStyle=Ut?"#f0f9ff":"#dce7f2",n.fillRect(et,mt,gt,K),n.strokeStyle=Ut?E.color:at==="done"?"#10b981":"#64748b",n.lineWidth=Ut?3.5:1.8,n.strokeRect(et,mt,gt,K),n.fillStyle=Ut?"#0f172a":"#1e293b",n.fillRect(et,mt,gt,25),n.fillStyle="#f8fafc",n.font="bold 11.5px Consolas, monospace",n.fillText(E.badgeLabel,et+8,mt+17),n.fillStyle=Ut?E.color:at==="done"?"#34d399":"#94a3b8",n.fillText(`${_t}%`,et+gt-44,mt+17),n.strokeStyle=at==="done"?"#10b981":E.color,n.lineWidth=2.4,n.beginPath();for(let it=0;it<=16;it++){const bt=et+12+it/16*(gt-24),ft=Ut?18:7,xt=mt+66+Math.sin(i*(Ut?3.2:1.1)+it*.6+G)*ft;it===0?n.moveTo(bt,xt):n.lineTo(bt,xt)}n.stroke(),n.fillStyle="#334155",n.font="11px Segoe UI, sans-serif",n.fillText("3 nhân sự đang phụ trách",et+12,mt+K-10)});const F=506,nt=142;Rn(n,30,F,540,nt,c),n.fillStyle="#7dd3fc",n.font="bold 14px Segoe UI, sans-serif",n.fillText("ENGINEERING VELOCITY & CI/CD THROUGHPUT",46,F+24),n.strokeStyle=c,n.lineWidth=2.5,n.beginPath();for(let E=0;E<=50;E++){const G=46+E/50*508,Z=F+84+Math.sin(i*2.8+E*.35)*26+Math.cos(i*1.4+E*.7)*10;E===0?n.moveTo(G,Z):n.lineTo(G,Z)}n.stroke(),Rn(n,586,F,234,nt,c),n.fillStyle="#7dd3fc",n.font="bold 13px Segoe UI, sans-serif",n.fillText("RELEASE VERSION",600,F+24),n.fillStyle="#f8fafc",n.font="bold 34px Consolas, monospace",n.fillText((o==null?void 0:o.version)||"v1.0.0",600,F+76),n.fillStyle="#34d399",n.font="13px Consolas, monospace",n.fillText(`Speed: ${(o==null?void 0:o.speed)||1}x ${o!=null&&o.paused?"(PAUSED)":"(LIVE)"}`,600,F+114),Rn(n,836,371,340,277,c),n.fillStyle="#7dd3fc",n.font="bold 13px Segoe UI, sans-serif",n.fillText("TRAO ĐỔI GIỮA CÁC AI AGENT (VI)",852,396);const Mt=((r==null?void 0:r.messages)||[]).slice(-4);Mt.length>0?Mt.forEach((E,G)=>{const Z=420+G*56;n.fillStyle=E.fromColor||"#38bdf8",n.font="bold 11.5px Segoe UI, sans-serif",n.fillText(`${E.fromName} → ${E.toName}`,852,Z),n.fillStyle="#e2e8f0",n.font="11.5px Segoe UI, sans-serif";const rt=E.text||"";n.fillText(rt.slice(0,44),852,Z+17),rt.length>44&&n.fillText(rt.slice(44,86),852,Z+33)}):((o==null?void 0:o.activeLogs)||[]).slice(-7).forEach((G,Z)=>{n.fillStyle=G.includes("TICKET")?"#fbbf24":"#cbd5e1",n.font="11.5px Consolas, monospace",n.fillText(G.slice(0,40),852,424+Z*28)});const lt=1192,Ct=440;Rn(n,lt,Ct,285,208,c);const $t=lt+142,pt=Ct+108;n.strokeStyle="rgba(56, 189, 248, 0.22)",n.lineWidth=14,n.beginPath(),n.arc($t,pt,66,0,Math.PI*2),n.stroke(),n.strokeStyle=p>=99?"#10b981":c,n.lineWidth=11,n.beginPath(),n.arc($t,pt,66,-Math.PI/2,-Math.PI/2+p/100*Math.PI*2),n.stroke(),n.fillStyle="#f8fafc",n.font="bold 24px Consolas, monospace",n.textAlign="center",n.fillText(`${p}%`,$t,pt+6),n.font="11px Segoe UI, sans-serif",n.fillStyle="#94a3b8",n.fillText("TIẾN ĐỘ TỔNG",$t,pt+26),n.textAlign="left";const ht=1492,N=440,Bt=396,Y=208;n.fillStyle="#e8f0f7",n.fillRect(ht,N,Bt,Y),n.strokeStyle=c,n.lineWidth=2.5,n.strokeRect(ht,N,Bt,Y),n.fillStyle="#0f172a",n.fillRect(ht,N,Bt,28),n.fillStyle="#f8fafc",n.font="bold 12px Segoe UI, sans-serif",n.fillText("ĐẦU RA NỀN TẢNG MỤC TIÊU",ht+12,N+19);const yt=(h==null?void 0:h.platforms)||["android","windows"],ut={android:["ANDROID",".AAB / .APK (Google Play)"],windows:["WINDOWS",".MSIX / .EXE (Win 11 x64)"],web:["WEB / CLOUD","Docker + Kubernetes CDN"],ios:["IOS",".IPA (App Store Connect)"]};yt.slice(0,4).forEach((E,G)=>{const[Z,rt]=ut[E]||[E.toUpperCase(),"Package"],et=N+46+G*38;n.fillStyle="#ffffff",n.fillRect(ht+14,et,Bt-28,30),n.strokeStyle=u>=4?"#10b981":"#94a3b8",n.strokeRect(ht+14,et,Bt-28,30),n.fillStyle="#0f172a",n.font="bold 12px Consolas, monospace",n.fillText(Z,ht+24,et+19),n.fillStyle="#334155",n.font="12px Segoe UI, sans-serif",n.fillText(rt,ht+122,et+19)})}function ay(n,t,e,i,s,o){var b,x;const r=s?"#fb7185":((b=o==null?void 0:o.currentDept)==null?void 0:b.color)||"#38bdf8";n.fillStyle="#040914",n.fillRect(0,0,t,e),n.strokeStyle="rgba(56, 189, 248, 0.35)",n.lineWidth=2,n.strokeRect(10,10,t-20,e-20),go(n,10,10,t-20,e-20,r,26,3.5);const a=22,l=t-a*2,c=14,h=(e-a*2-c*2)/3;let d=a;n.fillStyle="#e5eef6",n.fillRect(a,d,l,h),n.strokeStyle=r,n.lineWidth=2,n.strokeRect(a,d,l,h),n.fillStyle="#0f172a",n.fillRect(a,d,l,30),n.fillStyle="#f8fafc",n.font="bold 14px Segoe UI, sans-serif",n.fillText("SẢN PHẨM ĐẦU RA & GÓI PHÂN PHỐI",a+14,d+20),((o==null?void 0:o.artifacts)||[]).slice(0,5).forEach((g,T)=>{const A=d+44+T*30;n.fillStyle=g.ready?"#059669":"#64748b",n.font="bold 12px Consolas, monospace",n.fillText(g.ready?"[READY]":"[WAIT ]",a+16,A+12),n.fillStyle="#0f172a",n.font="13px Consolas, monospace",n.fillText(g.name,a+86,A+12),n.fillStyle="#0284c7",n.fillText(g.platform,a+l-92,A+12)}),d+=h+c,Rn(n,a,d,l,h,r),n.fillStyle="#7dd3fc",n.font="bold 14px Segoe UI, sans-serif",n.fillText("BẢNG KANBAN VẬN HÀNH CÔNG TY PHẦN MỀM",a+14,d+24);const p=(l-28-30)/6;Ae.forEach((g,T)=>{const A=a+14+T*(p+6),w=d+40,S=o?o.stageStatus[T]:"pending";n.fillStyle="#0f172a",n.fillRect(A,w,p,h-54),n.strokeStyle=S==="active"?g.color:"rgba(56, 189, 248, 0.2)",n.strokeRect(A,w,p,h-54),n.fillStyle="#e2e8f0",n.font="bold 10.5px Consolas, monospace",n.fillText(g.shortName.slice(0,10),A+6,w+18);const _=S==="done"?"#065f46":S==="active"?"#0369a1":"#1e293b";for(let y=0;y<3;y++)n.fillStyle=_,n.fillRect(A+6,w+28+y*28,p-12,20)}),d+=h+c,Rn(n,a,d,l,h,r),n.fillStyle="#7dd3fc",n.font="bold 14px Segoe UI, sans-serif",n.fillText("TRUNG TÂM BẢO HÀNH & CHĂM SÓC KHÁCH HÀNG",a+14,d+24);const v=(o==null?void 0:o.warrantyTickets)||[],M=[["THỜI HẠN BẢO HÀNH",`${((x=o==null?void 0:o.project)==null?void 0:x.warrantyMonths)||24} THÁNG`,"#34d399"],["PHIÊN BẢN PATCH",(o==null?void 0:o.version)||"v1.0.0","#38bdf8"],["TICKET ĐÃ XỬ LÝ",`${v.length} HOTFIX`,v.length>0?"#fbbf24":"#34d399"]],m=(l-28-16)/3;M.forEach(([g,T,A],w)=>{const S=a+14+w*(m+8),_=d+42;n.fillStyle="#0b1526",n.fillRect(S,_,m,74),n.strokeStyle="rgba(56, 189, 248, 0.22)",n.strokeRect(S,_,m,74),n.fillStyle="#94a3b8",n.font="11px Consolas, monospace",n.fillText(g,S+10,_+24),n.fillStyle=A,n.font="bold 16px Consolas, monospace",n.fillText(T,S+10,_+52)});const f=v[0];n.fillStyle=f?"#fde68a":"#94a3b8",n.font="12px Consolas, monospace",n.fillText(f?`Mới nhất: [${f.id}] ${f.title.slice(0,52)}`:"SLA 99.98% • Sẵn sàng tiếp nhận yêu cầu bảo hành & vá lỗi nóng 24/7",a+14,d+h-18)}function ly(n){const t=new Lt,e=[],i=-6.82,s=2.8,o=2.85,r=[{id:"led-left",title:"Màn hình LED Trái — Quy trình 6 Giai đoạn",role:"SDLC Pipeline & Live Execution Console",x:-5.65,w:2.15,cw:512,ch:680,render:oy,focusPos:new I(-5.65,2.75,-2.5),focusTarget:new I(-5.65,2.8,i),desc:"Theo dõi tên phần mềm, nền tảng mục tiêu (Android/Windows/Web/iOS), tiến độ 6 bước từ Yêu cầu đến Bảo hành và log thực thi trực tiếp.",getMetrics:(D,U)=>{var H,V,z,O,X;return[{label:"Dự án",value:((V=(H=U==null?void 0:U.project)==null?void 0:H.name)==null?void 0:V.slice(0,20))||"SmartPOS",tone:"good"},{label:"Bước hiện tại",value:((z=U==null?void 0:U.currentDept)==null?void 0:z.shortName)||"1. Yêu cầu",tone:"warn"},{label:"Nền tảng",value:((X=(O=U==null?void 0:U.project)==null?void 0:O.platformLabels)==null?void 0:X.join(", "))||"Android, Win",tone:"good"},{label:"Trạng thái",value:D?"Cảnh báo P1":"Ổn định",tone:D?"crit":"good"}]}},{id:"led-center",title:"Màn hình LED Trung Tâm — Software Factory Core",role:"Điều phối 6 bộ phận & Sản lượng phát triển",x:-.38,w:8.1,cw:1920,ch:675,render:ry,focusPos:new I(-.38,2.78,-.5),focusTarget:new I(-.38,2.8,i),desc:"Radar điều phối 6 bộ phận (18 nhân sự), danh sách đầu ra của giai đoạn hiện tại, tiến độ tổng thể và mục tiêu build Android/Windows/Web.",getMetrics:(D,U)=>{var H,V;return[{label:"Tiến độ tổng",value:`${Math.round(((U==null?void 0:U.overallProgress)||0)*100)}%`,tone:"good"},{label:"Phiên bản",value:(U==null?void 0:U.version)||"v1.0.0",tone:"good"},{label:"Bộ phận xử lý",value:((H=U==null?void 0:U.currentDept)==null?void 0:H.name)||"1. Yêu cầu & BA",tone:"warn"},{label:"Bảo hành SLA",value:`${((V=U==null?void 0:U.project)==null?void 0:V.warrantyMonths)||24} tháng`,tone:"good"}]}},{id:"led-right",title:"Màn hình LED Phải — Đóng gói, Kanban & Bảo hành",role:"Release Artifacts & Customer Warranty Desk",x:5.3,w:2.95,cw:700,ch:680,render:ay,focusPos:new I(5.3,2.75,-2.1),focusTarget:new I(5.3,2.8,i),desc:"Danh sách các gói sản phẩm được tạo ra (.AAB, .MSIX, .EXE, SRS, QA Report), bảng Kanban 6 bước và trung tâm bảo hành 24/7.",getMetrics:(D,U)=>[{label:"Gói sẵn sàng",value:`${((U==null?void 0:U.artifacts)||[]).filter(H=>H.ready).length}/${((U==null?void 0:U.artifacts)||[]).length}`,tone:"good"},{label:"Ticket bảo hành",value:`${((U==null?void 0:U.warrantyTickets)||[]).length} đã vá`,tone:"good"},{label:"Hotfix version",value:(U==null?void 0:U.version)||"v1.0.0",tone:"good"},{label:"SLA Uptime",value:D?"97.20%":"99.98%",tone:D?"crit":"good"}]}],a=[];let l="MRT SOFT HUB",c="#38bdf8";const h=document.createElement("canvas");h.width=1400,h.height=160;const d=h.getContext("2d"),u=new Ne(h);u.colorSpace=fe,u.anisotropy=8;const p=6.2,v=.62,M=4.66,m=-.38,f=new B(new st(p+.14,v+.1,.1),n.matteBlack);f.position.set(m,M,i-.04),f.castShadow=!0,t.add(f);const b=new xe({color:3718648}),x=new B(new st(p+.14,.018,.11),b);x.position.set(m,M+v/2+.048,i-.036);const g=new B(new st(p+.14,.018,.11),b);g.position.set(m,M-v/2-.048,i-.036),t.add(x,g);const T=new Wt({map:u,emissiveMap:u,emissive:new Gt(16777215),emissiveIntensity:1.38,roughness:.2,metalness:.1}),A=new B(new Se(p,v),T);A.position.set(m,M,i+.014),t.add(A);const w=new Cs(3718648,.35,6,1.5);w.position.set(m,M,i+.65),t.add(w);function S(D,U){l=(D||"MRT SOFT HUB").toUpperCase().slice(0,22),c=U||"#38bdf8",d.fillStyle="#060c18",d.fillRect(0,0,1400,160),d.fillStyle="rgba(56, 189, 248, 0.08)";for(let V=16;V<1400;V+=16)for(let z=12;z<160;z+=16)d.fillRect(V,z,3,3);go(d,18,14,1364,132,c,28,4),d.save(),d.textAlign="center",d.textBaseline="middle";const H=l.length>14?66:84;d.font=`900 ${H}px Segoe UI, system-ui, sans-serif`,d.shadowColor=c,d.shadowBlur=26,d.fillStyle=c,d.fillText(l,700,82),d.shadowBlur=10,d.fillStyle="#f8fafc",d.fillText(l,700,82),d.restore(),u.needsUpdate=!0,b.color.set(c),w.color.set(c)}S(l,c);for(const D of r){const U=document.createElement("canvas");U.width=D.cw,U.height=D.ch;const H=U.getContext("2d");D.render(H,D.cw,D.ch,0,!1,null);const V=new Ne(U);V.colorSpace=fe,V.anisotropy=8;const z=.14,O=D.w+.1,X=o+.1,J=new B(new st(O,X,z),n.matteBlack);J.position.set(D.x,s,i-z/2),J.castShadow=!0,t.add(J);const q=new Wt({map:V,emissiveMap:V,emissive:new Gt(16777215),emissiveIntensity:1.12,roughness:.25,metalness:.05}),gt=new B(new Se(D.w,o),q);gt.position.set(D.x,s,i+.006),gt.userData={interactable:!0,kind:"LED VIDEO WALL",id:D.id,title:D.title,role:D.role,desc:D.desc,canvas:U,focusPos:D.focusPos,focusTarget:D.focusTarget,getMetrics:D.getMetrics},t.add(gt),e.push(gt),a.push({cfg:D,ctx:H,texture:V,screenMat:q})}let _=0;function y(D,U,H,V,z,O=null){if(_+=U,!(_<1/15)){_=0;for(const X of a)X.cfg.render(X.ctx,X.cfg.cw,X.cfg.ch,D,H,V,z,O),X.texture.needsUpdate=!0}}function R(D){const U=Xt.lerp(1.12,1.45,D);for(const H of a)H.screenMat.emissiveIntensity=U;T.emissiveIntensity=Xt.lerp(1.38,2.2,D),w.intensity=Xt.lerp(.35,1.4,D)}function L(D,U){S(D,U)}return{group:t,interactables:e,update:y,setLightingMode:R,setBrandSign:L}}const Wd="mrt_agent_model_voice_v1",Nr=[{id:"gemini-2.5-pro",name:"Gemini 2.5 Pro",provider:"Google",color:"#38bdf8"},{id:"claude-3.7-sonnet",name:"Claude 3.7 Sonnet",provider:"Anthropic",color:"#f59e0b"},{id:"gpt-4.1",name:"GPT-4.1",provider:"OpenAI",color:"#10b981"},{id:"gpt-4o",name:"GPT-4o",provider:"OpenAI",color:"#22d3ee"},{id:"deepseek-r1",name:"DeepSeek-R1",provider:"DeepSeek",color:"#818cf8"},{id:"deepseek-v3",name:"DeepSeek-V3",provider:"DeepSeek",color:"#6366f1"},{id:"qwen-2.5-coder",name:"Qwen2.5-Coder 32B",provider:"Alibaba",color:"#3b82f6"},{id:"gemini-2.5-flash",name:"Gemini 2.5 Flash",provider:"Google",color:"#14b8a6"},{id:"o3-mini",name:"o3-mini",provider:"OpenAI",color:"#a78bfa"},{id:"llama-3.3-70b",name:"Llama 3.3 70B",provider:"Meta",color:"#fb7185"}],Ah={18:{gender:"male",modelId:"gemini-2.5-pro",voiceId:"Hải Đăng",mission:"Điều phối tổng thể 6 phòng ban, duyệt mốc bàn giao & thực thi lệnh tối cao"},0:{gender:"female",modelId:"gemini-2.5-pro",voiceId:"Mai Anh",mission:"Phân tích mục tiêu kinh doanh, chốt phạm vi & User Story"},1:{gender:"female",modelId:"claude-3.7-sonnet",voiceId:"Trúc Ly",mission:"Soạn đặc tả SRS, sơ đồ nghiệp vụ & hợp đồng API"},2:{gender:"male",modelId:"gpt-4o",voiceId:"Quốc Tuấn",mission:"Thiết kế Wireframe, UI/UX đa màn hình & Design System"},3:{gender:"male",modelId:"o3-mini",voiceId:"Minh Đức",mission:"Thiết kế kiến trúc hệ thống, Offline-First Sync & Database"},4:{gender:"male",modelId:"deepseek-r1",voiceId:"Thiện Minh",mission:"Phân rã module kỹ thuật, chuẩn code & review kiến trúc"},5:{gender:"female",modelId:"gpt-4.1",voiceId:"Đoan Trang",mission:"Lập kế hoạch 4 Sprint, điều phối Kanban & gỡ điểm nghẽn"},6:{gender:"female",modelId:"gemini-2.5-flash",voiceId:"Thùy Dung",mission:"Phê duyệt checklist phát hành, Release Notes & Store rollout"},7:{gender:"male",modelId:"qwen-2.5-coder",voiceId:"Phạm Tuyên",mission:"Vận hành CI/CD tự động build APK/EXE & tối ưu pipeline"},8:{gender:"male",modelId:"llama-3.3-70b",voiceId:"Đức Trí",mission:"Ký số chứng chỉ EV Code Signing, kiểm tra SHA-256 & bảo toàn gói cài"},9:{gender:"male",modelId:"claude-3.7-sonnet",voiceId:"Minh Triết",mission:"Lập trình Android Kotlin + Jetpack Compose + SQLite"},10:{gender:"male",modelId:"gpt-4.1",voiceId:"Quang Sơn",mission:"Lập trình Windows Desktop .NET 10 C# & đóng gói .EXE/.MSIX"},11:{gender:"female",modelId:"deepseek-v3",voiceId:"Ngọc Linh",mission:"Xây dựng Backend API, xác thực JWT & đồng bộ dữ liệu thời gian thực"},12:{gender:"male",modelId:"qwen-2.5-coder",voiceId:"Xuân Vĩnh",mission:"Viết & chạy kiểm thử tự động E2E đa thiết bị Android & Windows"},13:{gender:"female",modelId:"claude-3.7-sonnet",voiceId:"Quỳnh Anh",mission:"Kiểm định bảo mật OWASP, rà soát lỗ hổng API & phân quyền"},14:{gender:"male",modelId:"deepseek-r1",voiceId:"Thái Sơn",mission:"Đo tải hiệu năng 10k RPS, tối ưu độ trễ p95 & bộ nhớ RAM/CPU"},15:{gender:"male",modelId:"gemini-2.5-flash",voiceId:"Thanh Bình",mission:"Giám sát Production SLA 99.98% 24/7, log & cảnh báo sớm"},16:{gender:"female",modelId:"gpt-4o",voiceId:"Ngọc Huyền",mission:"Tiếp nhận ticket bảo hành, chăm sóc khách hàng & phân loại lỗi"},17:{gender:"male",modelId:"claude-3.7-sonnet",voiceId:"Adam",mission:"Phát triển bản vá nóng Hotfix & phát hành cập nhật OTA"}},$d=Object.fromEntries(Nr.map(n=>[n.id,n])),Al=new Set;function cy(){if(typeof localStorage>"u")return{};try{const n=localStorage.getItem(Wd);return n?JSON.parse(n):{}}catch{return{}}}let us=cy();function Xd(){if(!(typeof localStorage>"u"))try{localStorage.setItem(Wd,JSON.stringify(us))}catch{}}function Yd(n){for(const t of Al)try{t(n)}catch{}}function hy(n){return $d[n]||Nr[0]}function Je(n){const t=Number(n),e=Ah[t]||Ah[0],i=us[String(t)]||{},s=i.gender==="female"||i.gender==="male"?i.gender:e.gender,o=i.modelId&&$d[i.modelId]?i.modelId:e.modelId,r=i.voiceId||e.voiceId,a=i.mission||e.mission;return{stationIndex:t,gender:s,genderLabel:s==="female"?"Nữ":"Nam",modelId:o,model:hy(o),voiceId:r,mission:a}}function xr(n,t={}){const e=String(Number(n)),i=us[e]||{};return us={...us,[e]:{...i,...t}},Xd(),Yd(Number(n)),Je(n)}function dy(){us={},Xd(),Yd(-1)}function qd(n){return typeof n!="function"?()=>{}:(Al.add(n),()=>Al.delete(n))}function jd(n,t){if(!n)return!1;const e=String(n.gender||"").toLowerCase(),i=String(n.description||"").toLowerCase();return t==="female"?e==="female"||e==="nữ"||i.startsWith("nữ"):e==="male"||e==="nam"||i.startsWith("nam")}function ec(n,t){if(!Array.isArray(n)||n.length===0)return[];const e=n.filter(i=>jd(i,t));return e.length>0?e:n}function ur(n,t){const e=Je(n);if(!Array.isArray(t)||t.length===0)return e.voiceId;const i=t.find(r=>r.id===e.voiceId||r.name===e.voiceId);if(i&&jd(i,e.gender))return i.id;const s=ec(t,e.gender);if(s.length===0)return e.voiceId;const o=Math.abs(Number(n)||0)%s.length;return s[o].id}function uy(n,t,e){const i=document.createElement("canvas");i.width=512,i.height=120;const s=i.getContext("2d"),o=new Ne(i);o.colorSpace=fe,o.anisotropy=4;const r={canvas:i,ctx:s,tex:o};return Kd(r,n,t,e),r}function Kd(n,t,e,i){const{ctx:s,canvas:o,tex:r}=n;s.clearRect(0,0,o.width,o.height),s.fillStyle="#ffffff",s.beginPath(),s.roundRect(6,6,500,108,16),s.fill();const a=e==="active",l=e==="done";s.strokeStyle="#dc2626",s.lineWidth=a?5:3,s.stroke(),s.textAlign="center",s.textBaseline="middle",s.fillStyle="#dc2626",s.font="bold 27px Segoe UI, sans-serif",s.fillText(t.badgeLabel,256,46);const c=l?100:a?Math.round(i*100):0,h=l?"HOÀN TẤT 100%":a?`ĐANG XỬ LÝ • ${c}%`:"CHỜ BÀN GIAO";s.fillStyle="#b91c1c",s.font="bold 19px Consolas, monospace",s.fillText(h,256,86),s.textAlign="left",s.textBaseline="alphabetic",r.needsUpdate=!0}function fy(n,t,e,i=2){const s=(t||"").split(/\s+/),o=[];let r="";for(const a of s){const l=r?`${r} ${a}`:a;if(n.measureText(l).width>e&&r){if(o.push(r),r=a,o.length===i-1)break}else r=l}if(r&&o.length<i&&o.push(r),o.length===i&&s.join(" ").length>o.join(" ").length){const a=o[i-1];o[i-1]=a.length>3?`${a.slice(0,-3)}...`:`${a}...`}return o}function py(n,t,e,i){const s=n.width,o=n.height;t.clearRect(0,0,s,o),t.fillStyle="rgba(7, 13, 24, 0.94)",t.beginPath(),t.roundRect(8,6,s-16,o-22,16),t.fill(),t.strokeStyle=i.color||"#38bdf8",t.lineWidth=3,t.stroke(),t.fillStyle=i.color||"#38bdf8",t.fillRect(14,14,7,o-38),t.fillStyle="rgba(7, 13, 24, 0.94)",t.beginPath(),t.moveTo(s/2-12,o-16),t.lineTo(s/2+12,o-16),t.lineTo(s/2,o-2),t.closePath(),t.fill(),t.fillStyle=i.color||"#7dd3fc",t.font="bold 20px Segoe UI, sans-serif",t.fillText(`${i.name} • ${i.modelName||`AI (${i.role})`}`,32,34),t.fillStyle="#f8fafc",t.font="19px Segoe UI, sans-serif",fy(t,i.text,s-52,2).forEach((a,l)=>{t.fillText(a,32,64+l*26)}),e.needsUpdate=!0}function my(n,t){const e=new Lt,i=n.stationIndex*.85,s=new Wt({color:n.skin,roughness:.65,metalness:.02}),o=new Wt({color:n.shirt,roughness:.72,metalness:.05}),r=new Wt({color:1975340,roughness:.78,metalness:.04}),a=new Wt({color:1710623,roughness:.8}),l=new Wt({color:t,emissive:t,emissiveIntensity:.8,roughness:.3}),c=new B(new st(.28,.1,.22),r);c.position.set(0,.53,.63),c.castShadow=!0,e.add(c);for(const T of[-.085,.085]){const A=new B(new Mn(.056,.24,6,10),r);A.rotation.x=Math.PI/2,A.position.set(T,.53,.45),A.castShadow=!0,e.add(A);const w=new B(new Mn(.046,.29,6,10),r);w.position.set(T,.27,.31),w.castShadow=!0,e.add(w);const S=new B(new st(.085,.055,.16),r);S.position.set(T,.03,.27),S.castShadow=!0,e.add(S)}const h=new Lt;h.position.set(0,.57,.64),h.rotation.x=-.08;const d=new B(new Qt(.145,.125,.4,12),o);d.position.y=.2,d.scale.set(1.12,1,.72),d.castShadow=!0,h.add(d);const u=new B(new st(.042,.06,.012),l);u.position.set(.055,.26,-.095),h.add(u);const p=new Lt;p.position.set(0,.44,-.01);const v=new B(new Qt(.042,.048,.08,10),s);v.position.y=.02,p.add(v);const M=new B(new rn(.105,16,14),s);M.position.y=.115,M.scale.set(.95,1.05,.98),M.castShadow=!0,p.add(M);const m=new B(new rn(.112,14,12,0,Math.PI*2,0,Math.PI*.58),a);if(m.position.set(0,.126,.008),m.rotation.x=.22,p.add(m),n.hair==="bob"){const T=new B(new st(.21,.16,.1),a);T.position.set(0,.07,.065),p.add(T)}else if(n.hair==="bun"){const T=new B(new rn(.048,10,10),a);T.position.set(0,.16,.115),p.add(T)}if(n.glasses){const T=new Wt({color:988970,roughness:.2,metalness:.6}),A=new B(new st(.145,.028,.014),T);A.position.set(0,.118,-.1),p.add(A)}if(n.headset){const T=new Wt({color:1976635,roughness:.4,metalness:.5}),A=new B(new po(.115,.012,8,18,Math.PI),T);A.position.set(0,.13,0),p.add(A);for(const w of[-.112,.112]){const S=new B(new Qt(.032,.032,.025,12),T);S.rotation.z=Math.PI/2,S.position.set(w,.115,0),p.add(S)}}h.add(p);const f=T=>{const A=new Lt;A.position.set(T*.175,.36,0);const w=new B(new Mn(.038,.2,6,8),o);w.position.set(0,-.1,-.06),w.rotation.x=.55,w.castShadow=!0,A.add(w);const S=new Lt;S.position.set(0,-.19,-.13);const _=new B(new Mn(.032,.2,6,8),s);return _.rotation.x=Math.PI/2-.12,_.position.set(-T*.02,-.01,-.12),_.castShadow=!0,S.add(_),A.add(S),h.add(A),S},b=f(-1),x=f(1);e.add(h);const g=new B(new st(.46,.85,.52),new xe({visible:!1}));return g.position.set(0,.88,.55),e.add(g),{group:e,hitMesh:g,torsoGroup:h,headGroup:p,leftForearm:b,rightForearm:x,badgeMat:l,empSpec:n,phase:i}}function gy(n,t,e){const i=new Lt,s=[],o=[],r=new I(-.38,2.75,-6.5);for(const w of n){const{dept:S,positions:_}=w,y=new I;_.forEach(O=>y.add(O)),y.divideScalar(_.length);const R=_[0].distanceTo(_[_.length-1])+1.45,L=new I().subVectors(_[_.length-1],_[0]).normalize(),D=Math.atan2(-L.z,L.x),U=new xe({color:S.colorHex,transparent:!0,opacity:.22}),H=new B(new Se(R,.1),U);H.rotation.x=-Math.PI/2,H.rotation.z=D,H.position.set(y.x,.008,y.z+.52),i.add(H);const V=new xe({color:S.colorHex,transparent:!0,opacity:.05}),z=new B(new Se(R,1.65),V);z.rotation.x=-Math.PI/2,z.rotation.z=D,z.position.set(y.x,.005,y.z+.15),i.add(z),s.push({dept:S,stripMat:U,padMat:V,center:y.clone()})}const a=new rn(.05,10,10);for(let w=0;w<18;w++){const S=new xe({color:3718648,transparent:!0,opacity:.85}),_=new B(a,S);_.visible=!1,i.add(_),o.push({mesh:_,mat:S,offset:w/18})}const l=[0,1].map(()=>{const w=document.createElement("canvas");w.width=560,w.height=128;const S=w.getContext("2d"),_=new Ne(w);_.colorSpace=fe;const y=new Xl({map:_,transparent:!0,depthWrite:!1}),R=new Nd(y);return R.scale.set(2.15,.5,1),R.visible=!1,i.add(R),{canvas:w,ctx:S,tex:_,sprite:R,mat:y,lastKey:""}}),c=24,h=new ze;h.setAttribute("position",new dn(new Float32Array(c*3),3));const d=new Ud({color:3718648,transparent:!0,opacity:.85}),u=new c_(h,d);u.visible=!1,i.add(u);const p=[0,1,2,3].map(w=>{const S=new xe({color:16777215,transparent:!0,opacity:.95}),_=new B(new rn(.06,10,10),S);return _.visible=!1,i.add(_),{mesh:_,mat:S,offset:w/4}}),v=new I,M=new I,m=new I,f=new I,b=new I,x=new Fd(m,b,f);let g=!0;function T(w){if(g=!!w,!g)for(const S of l)S.sprite.visible=!1}function A(w,S,_){const y=S.stageIndex,R=S.currentDept,L=new Set(((_==null?void 0:_.activeBubbles)||[]).map(z=>z.stationIndex));for(const z of t){const O=z.empSpec.deptId===R.id,X=L.has(z.empSpec.stationIndex),q=w*(O?2.4:1)+z.phase;z.torsoGroup.rotation.x=-.08+Math.sin(q*1.1)*.025,z.leftForearm.rotation.x=Math.sin(q*6.5)*(O?.09:.035),z.rightForearm.rotation.x=Math.cos(q*7.1)*(O?.09:.035);const gt=Math.sin(w*.45+z.phase);z.headGroup.rotation.x=X?-.1:gt>.72?-.16:.04,z.headGroup.rotation.y=X?Math.sin(w*4.5+z.phase)*.22:Math.sin(w*.55+z.phase)*.08,z.badgeMat.emissiveIntensity=X?2.6:O?1.8:.45}for(let z=0;z<s.length;z++){const O=s[z],X=S.stageStatus[z];if(X==="active"){const J=.55+Math.sin(w*4.2)*.25;O.stripMat.color.setHex(O.dept.colorHex),O.stripMat.opacity=J,O.padMat.color.setHex(O.dept.colorHex),O.padMat.opacity=.14+Math.sin(w*4.2)*.05}else X==="done"?(O.stripMat.color.setHex(1096065),O.stripMat.opacity=.32,O.padMat.color.setHex(1096065),O.padMat.opacity=.04):(O.stripMat.color.setHex(O.dept.colorHex),O.stripMat.opacity=.12,O.padMat.opacity=.015)}const D=n[y],U=n[Math.min(5,y+1)];if(D)for(let z=0;z<o.length;z++){const O=o[z];if(O.mesh.visible=!S.paused,S.paused)continue;const X=(w*.55+O.offset)%1,J=z%D.positions.length,q=D.positions[J],gt=z%3===0&&y<5,K=gt?U.positions[J]:r;M.lerpVectors(q,K,.5),M.y+=gt?1.85:2.35;const F=1-X;v.set(0,0,0).addScaledVector(q,F*F).addScaledVector(M,2*F*X).addScaledVector(K,X*X),O.mesh.position.copy(v),O.mesh.position.y+=.95*F,O.mat.color.setHex(R.colorHex),O.mat.opacity=Math.sin(X*Math.PI)*.95}const H=g?(_==null?void 0:_.activeBubbles)||[]:[];for(let z=0;z<l.length;z++){const O=l[z],X=H[z];if(!X||!e[X.stationIndex]){O.sprite.visible=!1;continue}const J=`${X.stationIndex}:${X.text}`;O.lastKey!==J&&(O.lastKey=J,py(O.canvas,O.ctx,O.tex,X));const q=e[X.stationIndex],gt=X.stationIndex===18?q.y+2.54:1.64;O.sprite.visible=!0,O.sprite.position.set(q.x,gt+Math.sin(w*3+z)*.03,q.z+(X.stationIndex===18?.05:.35)),O.mat.opacity=Math.min(1,X.ttl*1.4)}const V=_==null?void 0:_.activeLink;if(V&&e[V.fromStation]&&e[V.toStation]){m.copy(e[V.fromStation]).add(new I(0,1.25,.4)),f.copy(e[V.toStation]).add(new I(0,1.25,.4)),b.lerpVectors(m,f,.5),b.y+=1.35;const z=x.getPoints(c-1),O=h.getAttribute("position");for(let J=0;J<z.length;J++)O.setXYZ(J,z[J].x,z[J].y,z[J].z);O.needsUpdate=!0;const X=Math.min(1,V.ttl/.6);d.color.setHex(V.colorHex),d.opacity=.72*X,u.visible=!0;for(const J of p){const q=(w*1.45+J.offset)%1;x.getPoint(q,J.mesh.position),J.mat.color.setHex(V.colorHex),J.mat.opacity=Math.sin(q*Math.PI)*X,J.mesh.visible=!0}}else{u.visible=!1;for(const z of p)z.mesh.visible=!1}}return{group:i,update:A,setBubblesVisible:T}}const vy=Object.fromEntries(Ae.map(n=>[n.id,n]));function Ch(n,t,e,i,s,o,r,a,l){var b;const c=o==null?void 0:o.project,h=c?c.name:"SmartPOS Bán Hàng",d=c?c.platformLabels.join(" + "):"Android + Windows",u=o?o.stageStatus[s.index]:"active",p=u==="done"?100:u==="active"?Math.round(((o==null?void 0:o.stageProgress)||.2)*100):0,v=(b=c==null?void 0:c.stageDetails)==null?void 0:b[s.index],M=(r==null?void 0:r.currentAction)||s.summary,m=Je(i.stationIndex);if(s.id==="intake"||s.id==="planning"&&i.stationIndex===5){n.fillStyle="#f1f5f9",n.fillRect(0,0,t,e),n.fillStyle="#0f172a",n.fillRect(0,0,t,34),n.fillStyle=s.color,n.fillRect(12,10,14,14),n.fillStyle="#f8fafc",n.font="bold 13px Segoe UI, sans-serif",n.fillText(`${s.shortName} • ${i.name}`,34,22),n.fillStyle="#ffffff",n.fillRect(14,46,t-28,e-60),n.strokeStyle="#cbd5e1",n.strokeRect(14,46,t-28,e-60),n.fillStyle="#0f172a",n.font="bold 14px Segoe UI, sans-serif",n.fillText(h.slice(0,34),26,72),n.fillStyle="#0284c7",n.font="bold 12px Consolas, monospace",n.fillText(`Nền tảng: ${d} | ${p}%`,26,94),(v?v.deliverables:[s.summary]).slice(0,3).forEach((g,T)=>{n.fillStyle=u==="done"?"#059669":"#334155",n.font="12px Segoe UI, sans-serif",n.fillText(`• ${g.slice(0,48)}`,26,126+T*32)}),n.fillStyle="#0f172a",n.fillRect(14,e-38,t-28,24),n.fillStyle=s.color,n.font="bold 11px Segoe UI, sans-serif",n.fillText(`${m.model.name}: ${M.slice(0,44)}`,22,e-22);return}if(n.fillStyle="#0b1120",n.fillRect(0,0,t,e),n.fillStyle="#131c31",n.fillRect(0,0,t,30),n.fillStyle=s.color,n.fillRect(0,0,6,30),n.fillStyle="#e2e8f0",n.font="bold 12px Consolas, monospace",n.fillText(`${i.role} (${i.name})`,14,19),n.fillStyle=u==="done"?"#34d399":u==="active"?s.color:"#64748b",n.fillText(`${p}%`,t-48,19),s.id==="planning"){n.fillStyle="#94a3b8",n.font="bold 12px Segoe UI, sans-serif",n.fillText(`KIẾN TRÚC: ${h.slice(0,32)}`,16,52);const x=[[34,84,118,52,"UI / Client",d.split("+")[0].trim()],[194,84,124,52,"Core API","Auth & Sync"],[358,84,120,52,"Cloud DB","Offline Cache"],[194,178,124,52,"CI / CD","Auto Sign"]];n.strokeStyle="#38bdf8",n.lineWidth=2,n.beginPath(),n.moveTo(152,110),n.lineTo(194,110),n.moveTo(318,110),n.lineTo(358,110),n.moveTo(256,136),n.lineTo(256,178),n.stroke();for(const[g,T,A,w,S,_]of x)n.fillStyle="#111c33",n.fillRect(g,T,A,w),n.strokeStyle=s.color,n.strokeRect(g,T,A,w),n.fillStyle="#f8fafc",n.font="bold 12px Segoe UI, sans-serif",n.fillText(S,g+10,T+22),n.fillStyle="#94a3b8",n.font="11px Consolas, monospace",n.fillText(_.slice(0,14),g+10,T+40)}else if(s.id==="build"){const x=i.stationIndex===10,g=i.stationIndex===9,T=g?"MainActivity.kt":x?"PosShellWindow.cs":"SyncService.ts";n.fillStyle="#0f172a",n.fillRect(0,30,108,e-30),n.fillStyle="#38bdf8",n.font="11px Consolas, monospace",["src/",`  ${T}`,"  api.ts","  store.db"].forEach((w,S)=>{n.fillStyle=S===1?"#f8fafc":"#64748b",n.fillText(w,8,54+S*20)}),(g?["@Composable fun PosScreen() {","  val state by vm.uiState.collect()","  Scaffold(topBar = { AppBar() }) {","    QrScannerCard(onPay = vm::pay)","  }","}"]:x?["public sealed partial class MainWin {","  private readonly PosSync _sync;","  public async Task PrintReceipt() {","    await EscPosPrinter.FlushAsync();","  }","}"]:["export async function syncOrder(dto) {","  await db.tx(async (trx) => {","    return trx.upsert(dto);","  });","}"]).forEach((w,S)=>{n.fillStyle=S%2===0?"#7dd3fc":"#a7f3d0",n.font="12px Consolas, monospace",n.fillText(w,120,62+S*26)}),n.fillStyle="#1e293b",n.fillRect(120,e-42,t-140,14),n.fillStyle=s.color,n.fillRect(120,e-42,(t-140)*p/100,14),Math.floor(a*2)%2===0&&(n.fillStyle="#38bdf8",n.fillRect(390,174,3,14))}else if(s.id==="testing")n.fillStyle="#fbbf24",n.font="bold 13px Consolas, monospace",n.fillText(`QA SUITE // ${h.slice(0,28)}`,16,54),(v?v.deliverables:["Android E2E","Windows Installer QA"]).slice(0,4).forEach((g,T)=>{const A=u==="done"||u==="active"&&p>=(T+1)*22;n.fillStyle=A?"#10b981":"#f59e0b",n.font="bold 12px Consolas, monospace",n.fillText(A?"[PASS]":"[RUN ]",16,90+T*34),n.fillStyle="#e2e8f0",n.font="12px Segoe UI, sans-serif",n.fillText(g.slice(0,44),76,90+T*34)}),n.fillStyle=l?"#fb7185":"#34d399",n.font="bold 13px Consolas, monospace",n.fillText(l?"BUG ALERT: CHECKING TRACE...":"COVERAGE: 94.6% • 0 CRITICAL",16,e-24);else if(s.id==="release")n.fillStyle="#34d399",n.font="bold 13px Consolas, monospace",n.fillText(`RELEASE & SIGNING // ${(o==null?void 0:o.version)||"v1.0.0"}`,16,54),((o==null?void 0:o.artifacts)||[]).filter(g=>g.stage===4).slice(0,4).forEach((g,T)=>{n.fillStyle="#111c33",n.fillRect(16,74+T*42,t-32,34),n.strokeStyle=g.ready?"#10b981":"#334155",n.strokeRect(16,74+T*42,t-32,34),n.fillStyle="#f8fafc",n.font="12px Consolas, monospace",n.fillText(g.name,26,95+T*42),n.fillStyle=g.ready?"#34d399":"#fbbf24",n.fillText(g.ready?"SIGNED":"BUILDING",t-92,95+T*42)});else{n.fillStyle="#2dd4bf",n.font="bold 13px Consolas, monospace",n.fillText(`BẢO HÀNH & SLA // ${(c==null?void 0:c.warrantyMonths)||24} THÁNG`,16,54);const x=(o==null?void 0:o.warrantyTickets)||[];x.length>0?x.slice(0,3).forEach((g,T)=>{n.fillStyle="#11222b",n.fillRect(16,76+T*48,t-32,40),n.strokeStyle="#14b8a6",n.strokeRect(16,76+T*48,t-32,40),n.fillStyle="#5eead4",n.font="bold 11px Consolas, monospace",n.fillText(`${g.id} • ${g.version} • ${g.status}`,24,93+T*48),n.fillStyle="#e2e8f0",n.font="11px Segoe UI, sans-serif",n.fillText(g.title.slice(0,48),24,110+T*48)}):(n.fillStyle="#34d399",n.font="bold 26px Consolas, monospace",n.fillText("SLA 99.98% HEALTHY",16,120),n.fillStyle="#94a3b8",n.font="12px Segoe UI, sans-serif",n.fillText("Đang giám sát Crashlytics, Sentry & Auto-Updater",16,155),n.fillText(`Phiên bản đang chạy: ${(o==null?void 0:o.version)||"v1.0.0"}`,16,182)),n.strokeStyle=l?"#fb7185":"#2dd4bf",n.lineWidth=2,n.beginPath();for(let g=0;g<=20;g++){const T=16+g/20*(t-32),A=e-42+Math.sin(a*2.5+g*.6)*8;g===0?n.moveTo(T,A):n.lineTo(T,A)}n.stroke()}n.fillStyle="rgba(15, 23, 42, 0.94)",n.fillRect(0,e-26,t,26),n.fillStyle=s.color,n.fillRect(0,e-26,4,26),n.fillStyle="#e2e8f0",n.font="bold 11px Segoe UI, sans-serif",n.fillText(`${m.model.name}: ${M.slice(0,45)}`,12,e-9)}function _y(n){const t=new Lt,e=new B(new Qt(.032,.038,.06,12),n.chrome);e.position.y=.09,t.add(e);const i=new st(.024,.022,.3),s=new Qt(.024,.024,.024,12);for(let c=0;c<5;c++){const h=c/5*Math.PI*2,d=new Lt;d.rotation.y=h;const u=new B(i,n.chrome);u.position.set(0,.065,.14),u.rotation.x=.14,u.castShadow=!0,d.add(u);const p=new B(s,n.matteBlack);p.rotation.z=Math.PI/2,p.position.set(0,.024,.27),d.add(p),t.add(d)}const o=new B(new Qt(.022,.026,.36,14),n.chrome);o.position.y=.26,o.castShadow=!0,t.add(o);const r=.46,a=new B(new st(.49,.052,.46),n.leather);a.position.set(0,r,.02),a.rotation.x=-.04,a.castShadow=!0,a.receiveShadow=!0,t.add(a);const l=new B(new st(.47,.56,.045),n.leather);l.position.set(0,.75,.22),l.rotation.x=.14,l.castShadow=!0,l.receiveShadow=!0,t.add(l);for(const c of[-.255,.255]){const h=new B(new st(.018,.56,.036),n.chrome);h.position.set(c,.75,.22),h.rotation.x=.14,h.castShadow=!0,t.add(h);const d=new B(new st(.018,.034,.46),n.chrome);d.position.set(c,r,.02),d.rotation.x=-.04,t.add(d);const u=new B(new st(.032,.022,.34),n.chrome);u.position.set(c,.65,.05),u.castShadow=!0,t.add(u);const p=new B(new st(.022,.19,.022),n.chrome);p.position.set(c,.56,-.11),p.rotation.x=.16,t.add(p)}return t}function Rh(n,t,e,i){const s=new Lt,o=n-.06,r=t-.09,a=new B(new st(o,r,.014),i.luxuryGlass);a.position.y=t/2+.012,a.renderOrder=2,s.add(a);const l=new Se(o-.01,r-.01);for(const f of[.008,-.008]){const b=new B(l,i.luxuryGlassSheen);b.position.set(0,t/2+.012,f),f<0&&(b.rotation.y=Math.PI),b.renderOrder=3,s.add(b)}const c=new B(new st(o,.012,.016),i.luxuryGlassEdge);c.position.set(0,t/2+.012+r/2-.006,0),c.renderOrder=3,s.add(c);const h=new B(new st(n,.05,.048),i.matteBlack);h.position.y=.025,h.castShadow=!0;const d=new B(new st(n,.012,.052),i.champagneGold);d.position.y=.054;const u=new B(new st(n,.032,.036),i.champagneGold);u.position.y=t-.014,u.castShadow=!0;const p=new B(new st(.028,t,.036),i.champagneGold);p.position.set(-n/2+.014,t/2,0),p.castShadow=!0;const v=new B(new st(.028,t,.036),i.champagneGold);v.position.set(n/2-.014,t/2,0),v.castShadow=!0;const M=new Qt(.024,.024,.034,16);for(const f of[-n/2+.055,n/2-.055])for(const b of[.16,t-.16]){const x=new B(M,i.champagneGold);x.rotation.x=Math.PI/2,x.position.set(f,b,0),s.add(x)}const m=new B(new st(n-.08,.008,.04),new xe({color:e,transparent:!0,opacity:.88}));return m.position.y=t+.005,s.add(h,d,u,p,v,m),s}function yy(n,t,e){const i=new Lt;for(const p of[-.48,.48]){const v=new B(new st(.048,.09,.052),e.champagneGold);v.position.set(p,t+.035,0),v.castShadow=!0,i.add(v);const M=new B(new Qt(.014,.014,.062,12),e.champagneGold);M.rotation.x=Math.PI/2,M.position.set(p,t+.035,0),i.add(M)}const s=new B(new st(1.64,.4,.032),e.champagneGold);s.position.set(0,t+.235,0),s.castShadow=!0,i.add(s);const o=new B(new st(1.62,.38,.038),e.matteBlack);o.position.set(0,t+.235,0),o.castShadow=!0,i.add(o);const r=new xe({color:14427686}),a=new B(new st(1.62,.014,.044),r);a.position.set(0,t+.436,0),i.add(a);const l=uy(n,"pending",0),c=new Wt({map:l.tex,emissiveMap:l.tex,emissive:new Gt(16777215),emissiveIntensity:.42,roughness:.32,metalness:.06}),h=new Se(1.56,.34),d=new B(h,c);d.position.set(0,t+.235,.021),i.add(d);const u=new B(h,c);return u.position.set(0,t+.235,-.021),u.rotation.y=Math.PI,i.add(u),{group:i,badgeData:l,faceMat:c,accentMat:r,dept:n,lastKey:""}}function xy(n,t=null){const e=new Lt,i=[],s=[],o=[],r=new Array(19);t&&(r[18]=t.clone());const a=[{name:"Dãy Sau",zCenter:-1.15,segW:1.48,wingAngle:Xt.degToRad(14.5)},{name:"Dãy Trước",zCenter:2.35,segW:1.62,wingAngle:Xt.degToRad(15)}],l=.74,c=.036,h=.82;let d=0;for(const S of a){const _=new Lt,y=new B(new st(S.segW*.42,c,h*.98),n.deskTop);y.position.set(0,l-c/2-.001,S.zCenter),y.receiveShadow=!0,_.add(y);for(let R=-4;R<=4;R++){const L=d++,D=yr[L],U=vy[D.deptId],H=Math.abs(R),V=R===0?0:Math.sign(R),z=H*S.segW,O=V*z*Math.cos(S.wingAngle),X=S.zCenter-z*Math.sin(S.wingAngle),J=R===0?0:V*S.wingAngle,q=new Lt;q.position.set(O,0,X),q.rotation.y=J,r[L]=new I(O,0,X);const gt=S.segW+(R===0?.04:.08),K=new B(new st(gt,c,h),n.deskTop);K.position.y=l-c/2,K.castShadow=!0,K.receiveShadow=!0,q.add(K);const F=new B(new st(gt,c*.88,.022),n.oakWood);F.position.set(0,l-c/2,h/2+.008),q.add(F);const nt=new B(new st(gt*.92,.045,.06),n.darkMetal);nt.position.set(0,l-.06,.06),q.add(nt);const Mt=R===-4?[-gt*.42,gt*.42]:[gt*.42];for(const mt of Mt){const at=new B(new Qt(.022,.022,l-.06,10),n.chrome);at.position.set(mt,(l-.06)/2+.02,.06),at.castShadow=!0,q.add(at);const _t=new B(new st(.04,.026,.64),n.chrome);_t.position.set(mt,.013,.04),_t.castShadow=!0,q.add(_t)}const lt=new Lt;lt.position.set(0,l,-.2);const Ct=new B(new st(.22,.012,.16),n.darkMetal);Ct.position.set(0,.006,0);const Pt=new B(new st(.045,.16,.03),n.darkMetal);Pt.position.set(0,.08,-.04),lt.add(Ct,Pt);const Ht=.64,$t=.37,pt=new B(new st(Ht+.022,$t+.022,.026),n.matteBlack);pt.position.set(0,.28,0),pt.castShadow=!0,lt.add(pt);const ht=document.createElement("canvas");ht.width=512,ht.height=296;const N=ht.getContext("2d");Ch(N,512,296,D,U,null,null,L*.7,!1);const Bt=new Ne(ht);Bt.colorSpace=fe,Bt.anisotropy=4;const Y=new Wt({map:Bt,emissiveMap:Bt,emissive:new Gt(16777215),emissiveIntensity:.92,roughness:.22,metalness:.05}),yt=new B(new Se(Ht,$t),Y);yt.position.set(0,.28,.015),lt.add(yt),q.add(lt);const ut=new B(new st(.58,.004,.28),n.matteBlack);ut.position.set(.02,l+.002,.14);const Nt=new B(new st(.36,.01,.12),n.darkMetal);Nt.position.set(-.03,l+.009,.14);const At=new B(new st(.055,.016,.09),n.darkMetal);if(At.position.set(.22,l+.01,.15),q.add(ut,Nt,At),L===9){const mt=new B(new st(.22,.28,.24),new Wt({color:2450411,roughness:.45}));mt.position.set(.46,l+.14,-.05),mt.castShadow=!0,q.add(mt)}else if(L%3===0){const mt=new B(new Qt(.036,.032,.095,14),new Wt({color:959977,roughness:.35}));mt.position.set(-.36,l+.048,.08),mt.castShadow=!0,q.add(mt)}if([0,4,8,10,13,16].includes(L)){const mt=new Lt;mt.position.set(.42,l,-.18);const at=new B(new Qt(.046,.036,.075,12),n.ceramicWhite);at.position.y=.0375,at.castShadow=!0,mt.add(at);const _t=new B(new Li(.056,1),n.leafMid);_t.position.y=.095,_t.scale.set(1.1,.9,1.1),mt.add(_t),q.add(mt)}const P=_y(n);P.position.set(0,0,.66),q.add(P);const E=my(D,U.colorHex);q.add(E.group),o.push(E),q.updateMatrixWorld(!0);const G=new I;yt.getWorldPosition(G);const Z=new I(0,0,1).applyAxisAngle(new I(0,1,0),J),rt=G.clone().addScaledVector(Z,1.35).add(new I(.32,.38,0)),et={interactable:!0,isAgent:!0,stationIndex:L,kind:`AI AGENT • ${U.shortName.toUpperCase()}`,id:`dev-${L+1}`,title:`${D.name} — ${D.role}`,role:`Bộ phận: ${U.name} • Bàn #${String(L+1).padStart(2,"0")} (${S.name})`,desc:U.summary,canvas:ht,deptIndex:U.index,focusPos:rt,focusTarget:G.clone(),getMetrics:(mt,at,_t)=>{var ft,xt,vt,Dt;const Ut=_t==null?void 0:_t.getAgentStatus(L,at);if(Ut)return[{label:"Model AI",value:Ut.modelName,tone:"good"},{label:"Giọng CIT",value:`${Ut.voiceId} (${Ut.genderLabel})`,tone:"good"},{label:"Trạng thái",value:Ut.stateLabel,tone:Ut.deptStatus==="done"?"good":Ut.deptStatus==="active"?"warn":""},{label:"Nhiệm vụ",value:Ut.role,tone:mt?"crit":"good"}];const it=at?at.stageStatus[U.index]:"active",bt=it==="done"?"100%":it==="active"?`${Math.round(((at==null?void 0:at.stageProgress)||.2)*100)}%`:"Đang chờ";return[{label:"Dự án đang chạy",value:((xt=(ft=at==null?void 0:at.project)==null?void 0:ft.name)==null?void 0:xt.slice(0,20))||"SmartPOS",tone:"good"},{label:"Tiến độ giai đoạn",value:bt,tone:it==="done"?"good":it==="active"?"warn":""},{label:"Nền tảng",value:((Dt=(vt=at==null?void 0:at.project)==null?void 0:vt.platformLabels)==null?void 0:Dt.join(", "))||"Android, Win",tone:"good"},{label:"Vai trò",value:D.role,tone:mt?"crit":"good"}]}};yt.userData={...et},E.hitMesh.userData={...et},i.push(yt,E.hitMesh),s.push({idx:L,ctx:N,tex:Bt,emp:D,dept:U,screenMat:Y,offset:L*.9}),_.add(q)}e.add(_)}const u=Ae.map(S=>{const _=S.stations.map(D=>r[D].clone()),y=new I;_.forEach(D=>y.add(D)),y.divideScalar(_.length);const R=y.z<0?new I(0,2.35,3.65):new I(0,2.25,3.45),L=y.clone().add(R);return L.x=Xt.clamp(L.x,-7.2,7.2),L.z=Xt.clamp(L.z,-5,7.2),{dept:S,positions:_,center:y,focusPos:L,focusTarget:y.clone().add(new I(0,.95,-.35))}}),p=gy(u,o,r);e.add(p.group);const v=new Lt,M=[{zCenter:-1.15,segW:1.48,wingAngle:Xt.degToRad(14.5),iMid:-1.5,color:3718648},{zCenter:-1.15,segW:1.48,wingAngle:Xt.degToRad(14.5),iMid:1.5,color:1096065},{zCenter:2.35,segW:1.62,wingAngle:Xt.degToRad(15),iMid:-1.5,color:3900150},{zCenter:2.35,segW:1.62,wingAngle:Xt.degToRad(15),iMid:1.5,color:1357990}];for(const S of M){const _=Math.sign(S.iMid),y=Math.abs(S.iMid)*S.segW,R=_*y*Math.cos(S.wingAngle),L=S.zCenter-y*Math.sin(S.wingAngle),D=_*S.wingAngle,U=new Lt;U.position.set(R,0,L),U.rotation.y=D;const H=Rh(1.66,1.72,S.color,n);H.rotation.y=Math.PI/2,H.position.set(0,0,.16),U.add(H),v.add(U)}const m=[{deptIndex:0,x:-4.45,z:-.32,width:3.05,rotY:-Xt.degToRad(14.8)},{deptIndex:1,x:0,z:.85,width:3.15,rotY:0},{deptIndex:4,x:4.45,z:-.32,width:3.05,rotY:Xt.degToRad(14.8)},{deptIndex:2,x:-4.82,z:2.35,width:3.1,rotY:-Xt.degToRad(15)},{deptIndex:3,x:0,z:3.45,width:3.2,rotY:0},{deptIndex:5,x:4.82,z:2.35,width:3.1,rotY:Xt.degToRad(15)}],f=[];for(const S of m){const _=Ae[S.deptIndex],y=Rh(S.width,1.46,_.colorHex,n),R=yy(_,1.46,n);y.add(R.group),y.position.set(S.x,0,S.z),y.rotation.y=S.rotY,v.add(y),f.push(R)}e.add(v);let b=0,x=0;function g(S,_,y,R,L,D){p.update(S,R,L);const U=Xt.lerp(.42,.78,x);for(const H of f){const V=H.dept.index,z=R.stageStatus[V],O=z==="done"?100:z==="active"?Math.round(R.stageProgress*100):0,X=`${z}:${O}`;H.lastKey!==X&&(H.lastKey=X,Kd(H.badgeData,H.dept,z,R.stageProgress)),H.accentMat.color.setHex(14427686),z==="active"?H.faceMat.emissiveIntensity=U+Math.sin(S*3.6)*.08:z==="done"?H.faceMat.emissiveIntensity=U*.94:H.faceMat.emissiveIntensity=U*.85}if(b+=_,!(b<.35)){b=0;for(const H of s){const V=D?D.getAgentStatus(H.idx,R):null;Ch(H.ctx,512,296,H.emp,H.dept,R,V,S+H.offset,y),H.tex.needsUpdate=!0}}}function T(S){x=S;for(const y of s)y.screenMat.emissiveIntensity=Xt.lerp(.88,1.25,S);const _=Xt.lerp(.42,.78,S);for(const y of f)y.faceMat.emissiveIntensity=_}function A(S){v.visible=!!S}function w(S){p.setBubblesVisible(S)}return{group:e,interactables:i,deptAnchors:u,update:g,setLightingMode:T,setGlassVisible:A,setBubblesVisible:w}}function My(n){const t=new Lt,e=new B(new Qt(.09,.09,.025,16),n.matteBlack);e.position.y=-.012,t.add(e);const i=new B(new Qt(.022,.022,.16,12),n.darkMetal);i.position.y=-.09,t.add(i);const s=new Lt;s.position.y=-.18;const o=new B(new st(.06,.06,.08),n.darkMetal);s.add(o);const r=new Lt;r.rotation.x=.42;const a=new B(new Qt(.058,.065,.24,16),n.deskTop);a.rotation.x=Math.PI/2,a.position.z=.08,a.castShadow=!0,r.add(a);const l=new B(new st(.13,.04,.25),n.matteBlack);l.position.set(0,.055,.08),r.add(l);const c=new B(new Qt(.048,.048,.025,16),n.matteBlack);c.rotation.x=Math.PI/2,c.position.z=.205,r.add(c);const h=new B(new Es(.036,16),new Wt({color:726310,roughness:.1,metalness:.8}));h.position.z=.219,r.add(h);const d=new xe({color:16720452}),u=new B(new rn(.011,8,8),d);return u.position.set(.042,.035,.19),r.add(u),s.add(r),t.add(s),{root:t,swivel:s,recMat:d}}function by(n){const t=new Lt,e=new B(new st(.24,.075,.3),n.deskTop);e.castShadow=!0,t.add(e);const i=new B(new st(.18,.035,.24),n.darkMetal);i.position.y=.048,t.add(i);const s=new xe({color:3718648}),o=new B(new st(.246,.016,.22),s);o.position.y=.01,t.add(o);const r=[],a=[[-.22,-.22,Math.PI/4,2278750],[.22,-.22,-Math.PI/4,2278750],[-.22,.22,-Math.PI/4,15680580],[.22,.22,Math.PI/4,15680580]],l=new xe({color:13358561,transparent:!0,opacity:.38,side:sn,depthWrite:!1});for(const[f,b,x,g]of a){const T=new B(new st(.032,.02,.34),n.matteBlack);T.position.set(f*.55,.01,b*.55),T.rotation.y=x,T.castShadow=!0,t.add(T);const A=new B(new Qt(.032,.035,.042,12),n.darkMetal);A.position.set(f,.025,b),t.add(A);const w=new B(new rn(.012,8,8),new xe({color:g}));w.position.set(f,.004,b),t.add(w);const S=new Lt;S.position.set(f,.052,b);const _=new B(new fo(.03,.145,20),l);_.rotation.x=-Math.PI/2,S.add(_);const y=new B(new st(.28,.004,.022),n.matteBlack);S.add(y),t.add(S),r.push(S)}const c=new Lt;c.position.set(0,-.058,-.08);const h=new B(new rn(.044,14,12),n.matteBlack);c.add(h);const d=new B(new Qt(.024,.024,.03,12),n.chrome);d.rotation.x=Math.PI/2,d.position.z=-.038,c.add(d);const u=new xe({color:16720452}),p=new B(new rn(.009,8,8),u);p.position.set(.028,.02,-.036),c.add(p),t.add(c);const v=new xe({color:3718648,transparent:!0,opacity:.07,side:sn,depthWrite:!1,blending:ka}),M=new B(new Kl(.75,2.2,20,1,!0),v);M.position.set(0,-1.16,-.08),t.add(M);const m=new B(new st(.72,.35,.72),new xe({visible:!1}));return m.userData={interactable:!0,isFlycam:!0,kind:"FLYCAM GIÁM SÁT",id:"flycam-01",title:"Flycam Tuần Tra Tự Động (FLYCAM-01)",role:"Giám sát không gian văn phòng & an ninh 3D"},t.add(m),{drone:t,rotors:r,gimbal:c,droneRecMat:u,scanMat:v,hitMesh:m}}function Sy(n){const t=new Lt,e=[],i=[{pos:[-8.35,5.08,5.8],baseYaw:Math.PI*.78},{pos:[8.35,5.08,5.8],baseYaw:-Math.PI*.78},{pos:[-8.35,5.08,-5.8],baseYaw:Math.PI*.24},{pos:[8.35,5.08,-5.8],baseYaw:-Math.PI*.24}],s=new Lt,o=i.map((m,f)=>{const b=My(n);return b.root.position.set(...m.pos),b.swivel.rotation.y=m.baseYaw,s.add(b.root),{...b,baseYaw:m.baseYaw,phase:f*1.4}});t.add(s);const r=by(n);t.add(r.drone),e.push(r.hitMesh);const a=new I(0,3.7,1.5),l=new I,c=new I(0,1.4,-2.5),h=new I;function d(m,f){const b=Math.sin(m*.28)*5.6,x=.55+Math.sin(m*.56)*3.1,g=3.65+Math.cos(m*.45)*.26;f.set(b,g,x)}function u(m,f,b,x=0){const g=Math.floor(m*2)%2===0;for(const y of o)y.swivel.rotation.y=y.baseYaw+Math.sin(m*.42+y.phase)*.42,y.recMat.color.setHex(g?16720452:5572628);for(let y=0;y<r.rotors.length;y++)r.rotors[y].rotation.y+=f*(y%2===0?38:-38);d(m,a),d(m+.08,l),r.drone.position.copy(a);const T=l.x-a.x,A=l.z-a.z,w=Math.atan2(-T,-A);r.drone.rotation.y=w,r.drone.rotation.x=-.06,r.drone.rotation.z=Xt.clamp(-T*.4,-.14,.14),r.droneRecMat.color.setHex(g?16720452:5572628),r.scanMat.opacity=Xt.lerp(.055,.13,x);const _=(((b==null?void 0:b.stageIndex)??0)%3-1)*3.6;c.set(Xt.lerp(_,0,.45)+Math.sin(m*.35)*1.4,1.35,-2.2+Math.cos(m*.25)*1.1)}function p(m,f){h.set(0,-.14,-.18).applyEuler(r.drone.rotation),m.copy(r.drone.position).add(h),f.copy(c)}function v(){return{x:a.x.toFixed(1),y:a.y.toFixed(2),z:a.z.toFixed(1)}}function M(m={}){typeof m.showCctv=="boolean"&&(s.visible=m.showCctv),typeof m.showFlycam=="boolean"&&(r.drone.visible=m.showFlycam)}return{group:t,interactables:e,update:u,getFlycamView:p,getTelemetry:v,setEquipmentVisible:M}}const bn={home:{id:"home",x:0,z:-4.11,y:.08,lookAt:[0,0]},northHub:{id:"northHub",x:0,z:-3.45,y:0},dept0:{id:"dept0",x:-4.1,z:-3.25,y:0,lookAt:[-4.1,-2]},dept1:{id:"dept1",x:0,z:-2.45,y:0,lookAt:[0,-1.15]},dept4:{id:"dept4",x:4.1,z:-3.25,y:0,lookAt:[4.1,-2]},nwCorner:{id:"nwCorner",x:-7.55,z:-3.45,y:0},neCorner:{id:"neCorner",x:7.55,z:-3.45,y:0},swCorner:{id:"swCorner",x:-7.55,z:3.7,y:0},seCorner:{id:"seCorner",x:7.55,z:3.7,y:0},dept2:{id:"dept2",x:-4.55,z:3.75,y:0,lookAt:[-4.4,1.5]},dept3:{id:"dept3",x:0,z:4.18,y:0,lookAt:[0,2.35]},dept5:{id:"dept5",x:4.55,z:3.75,y:0,lookAt:[4.4,1.5]}},Zd=["dept0","dept1","dept2","dept3","dept4","dept5"],Ey=[["home","northHub"],["northHub","dept1"],["northHub","dept0"],["northHub","dept4"],["dept0","nwCorner"],["nwCorner","swCorner"],["swCorner","dept2"],["dept2","dept3"],["dept3","dept5"],["dept5","seCorner"],["seCorner","neCorner"],["neCorner","dept4"]],Mr={};for(const n of Object.keys(bn))Mr[n]=[];for(const[n,t]of Ey)Mr[n].push(t),Mr[t].push(n);function Ty(n,t){const e=bn[n]?n:"home",i=bn[t]?t:"home";if(e===i)return[bn[i]];const s=[[e]],o=new Set([e]);for(;s.length>0;){const r=s.shift(),a=r[r.length-1];for(const l of Mr[a]||[]){if(o.has(l))continue;const c=[...r,l];if(l===i)return c.slice(1).map(h=>bn[h]);o.add(l),s.push(c)}}return[bn[i]]}function Ph(n){const t=Zd[n],e=bn[t]||bn.home;return e.lookAt?Math.atan2(e.lookAt[0]-e.x,e.lookAt[1]-e.z):0}const ya=18,wy=new I(0,0,-4.15);function Ih(n,t,e,i,s,o,r,a=null){var v;const l=i==null?void 0:i.project,c=(l==null?void 0:l.name)||"SmartPOS Bán Hàng",h=Math.round(((i==null?void 0:i.overallProgress)??.1)*100),d=((v=i==null?void 0:i.currentDept)==null?void 0:v.name)||"1. Yêu cầu & BA",u=s==null?void 0:s.latestMessage;n.fillStyle="#050c1a",n.fillRect(0,0,t,e),n.strokeStyle=o?"#fb7185":"#f59e0b",n.lineWidth=3,n.strokeRect(8,8,t-16,e-16),n.fillStyle="#0f172a",n.fillRect(10,10,t-20,42),n.fillStyle="#f59e0b",n.font="bold 16px Segoe UI, sans-serif",n.fillText("★ LEADER MRT // BẢNG ĐIỀU HÀNH TRUNG TÂM",22,37),n.fillStyle="#f8fafc",n.font="bold 18px Segoe UI, sans-serif",n.fillText(c.slice(0,34),22,82),n.fillStyle="#38bdf8",n.font="bold 14px Consolas, monospace",n.fillText(`TIẾN ĐỘ TỔNG: ${h}%  |  PHIÊN BẢN: ${(i==null?void 0:i.version)||"v1.0.0"}`,22,110),n.fillStyle="#1e293b",n.fillRect(22,124,t-44,14),n.fillStyle=h>=99?"#10b981":"#f59e0b",n.fillRect(22,124,(t-44)*h/100,14),n.fillStyle="#cbd5e1",n.font="bold 14px Segoe UI, sans-serif",n.fillText(`Bộ phận đang xử lý: ${d}`,22,168),a!=null&&a.prompt?(n.fillStyle="rgba(245, 158, 11, 0.2)",n.fillRect(22,186,t-44,72),n.strokeStyle="#f59e0b",n.lineWidth=2,n.strokeRect(22,186,t-44,72),n.fillStyle="#fde68a",n.font="bold 12.5px Segoe UI, sans-serif",n.fillText("★ LỆNH TỐI CAO ĐANG THỰC THI:",32,208),n.fillStyle="#ffffff",n.font="bold 12.5px Segoe UI, sans-serif",n.fillText(a.prompt.slice(0,52),32,232)):u&&(n.fillStyle="rgba(245, 158, 11, 0.14)",n.fillRect(22,186,t-44,72),n.strokeStyle="rgba(245, 158, 11, 0.5)",n.lineWidth=1.5,n.strokeRect(22,186,t-44,72),n.fillStyle="#fbbf24",n.font="bold 12.5px Segoe UI, sans-serif",n.fillText(`${u.fromName} → ${u.toName}:`,32,208),n.fillStyle="#f8fafc",n.font="12.5px Segoe UI, sans-serif",n.fillText((u.text||"").slice(0,54),32,232));const p=.5+.5*Math.sin(r*4);n.fillStyle=`rgba(245, 158, 11, ${.4+p*.6})`,n.beginPath(),n.arc(t-30,31,7,0,Math.PI*2),n.fill()}function Ay(){const n=document.createElement("canvas");n.width=460,n.height=96;const t=n.getContext("2d");t.fillStyle="rgba(11, 17, 29, 0.92)",t.beginPath(),t.roundRect(6,6,448,84,16),t.fill(),t.strokeStyle="#f59e0b",t.lineWidth=3.5,t.stroke(),t.fillStyle="#fbbf24",t.font="bold 24px Segoe UI, sans-serif",t.textAlign="center",t.fillText("★ LEADER MRT — ĐIỀU HÀNH",230,44),t.fillStyle="#7dd3fc",t.font="bold 16px Consolas, monospace",t.fillText("EXECUTIVE AI COMMANDER • 6 PHÒNG BAN",230,72);const e=new Ne(n);return e.colorSpace=fe,e}function Lh(n,t,e){let i=(t-n+Math.PI)%(Math.PI*2)-Math.PI;return i<-Math.PI&&(i+=Math.PI*2),n+i*e}function Cy(n){const t=new Lt,e=new Lt;e.position.copy(wy);const i=new B(new Qt(1.12,1.2,.08,36),n.coveSlate);i.position.y=.04,i.receiveShadow=!0,i.castShadow=!0,e.add(i);const s=new xe({color:16096779}),o=new B(new po(1.13,.015,8,48),s);o.rotation.x=Math.PI/2,o.position.y=.075,e.add(o);const r=new Lt;r.position.set(0,.08,.56);const a=new B(new st(.42,.98,.18),n.oakWood);a.position.y=.49,a.castShadow=!0,a.receiveShadow=!0,r.add(a);const l=new B(new st(.96,.94,.022),n.luxuryGlass);l.position.set(0,.49,.12),l.renderOrder=2,r.add(l);const c=new B(new st(.98,.022,.032),n.champagneGold);c.position.set(0,.96,.12);const h=new B(new st(.98,.026,.034),n.champagneGold);h.position.set(0,.02,.12),r.add(c,h);const d=new Lt;d.position.set(0,1,.03),d.rotation.x=-.38;const u=new B(new st(.92,.032,.52),n.matteBlack);u.castShadow=!0,d.add(u);const p=document.createElement("canvas");p.width=512,p.height=296;const v=p.getContext("2d");Ih(v,512,296,null,null,!1,0);const M=new Ne(p);M.colorSpace=fe;const m=new Wt({map:M,emissiveMap:M,emissive:new Gt(16777215),emissiveIntensity:1,roughness:.22}),f=new B(new Se(.84,.46),m);f.rotation.x=-Math.PI/2,f.position.y=.018,d.add(f),r.add(d),e.add(r),t.add(e);const b=new Lt;b.position.set(bn.home.x,bn.home.y,bn.home.z);const x=new Wt({color:988970,roughness:.65,metalness:.08}),g=new Wt({color:16317180,roughness:.55}),T=new Wt({color:16096779,emissive:14251782,emissiveIntensity:.35,roughness:.35}),A=new Wt({color:15119500,roughness:.62}),w=new Wt({color:1447967,roughness:.78}),S=new Wt({color:16498468,emissive:16096779,emissiveIntensity:1.4,roughness:.25}),_=ft=>{const xt=new Lt;xt.position.set(ft,.82,0);const vt=new B(new Mn(.062,.68,6,12),x);vt.position.y=-.4,vt.castShadow=!0,xt.add(vt);const Dt=new B(new st(.095,.06,.19),n.matteBlack);return Dt.position.set(0,-.79,.04),Dt.castShadow=!0,xt.add(Dt),b.add(xt),xt},y=_(-.095),R=_(.095),L=new Lt;L.position.set(0,.82,0);const D=new B(new Qt(.165,.14,.52,14),x);D.position.y=.26,D.scale.set(1.16,1,.72),D.castShadow=!0,L.add(D);const U=new B(new st(.1,.32,.025),g);U.position.set(0,.34,.105),L.add(U);const H=new B(new st(.042,.28,.018),T);H.position.set(0,.3,.118),L.add(H);const V=new B(new st(.048,.055,.014),S);V.position.set(.085,.38,.114),L.add(V);const z=new Lt;z.position.set(0,.56,0);const O=new B(new Qt(.045,.052,.08,10),A);O.position.y=.02,z.add(O);const X=new B(new rn(.114,18,16),A);X.position.y=.13,X.scale.set(.95,1.06,.98),X.castShadow=!0,z.add(X);const J=new B(new rn(.12,16,14,0,Math.PI*2,0,Math.PI*.56),w);J.position.set(0,.142,-.008),J.rotation.x=-.2,z.add(J);const q=new B(new st(.155,.03,.014),new Wt({color:988970,roughness:.2,metalness:.7}));q.position.set(0,.135,.108),z.add(q),L.add(z);const gt=new Lt;gt.position.set(-.205,.46,0);const K=new B(new Mn(.042,.24,6,8),x);K.position.set(0,-.12,.04),K.rotation.x=-.35,K.castShadow=!0;const F=new B(new Mn(.034,.22,6,8),x);F.position.set(.02,-.24,.18),F.rotation.x=-1.08;const nt=new B(new st(.16,.014,.22),n.matteBlack);nt.position.set(.04,-.25,.3),nt.rotation.x=.42;const Mt=new B(new Se(.135,.19),new xe({color:3718648}));Mt.rotation.x=-Math.PI/2,Mt.position.y=.009,nt.add(Mt),gt.add(K,F,nt),L.add(gt);const lt=new Lt;lt.position.set(.205,.46,0);const Ct=new B(new Mn(.042,.24,6,8),x);Ct.position.set(0,-.12,.02),Ct.rotation.x=-.18,Ct.castShadow=!0;const Pt=new B(new Mn(.034,.22,6,8),x);Pt.position.set(-.02,-.27,.08),Pt.rotation.x=-.55,lt.add(Ct,Pt),L.add(lt),b.add(L);const Ht=Ay(),$t=new Nd(new Xl({map:Ht,transparent:!0,depthWrite:!1}));$t.position.set(0,2.1,0),$t.scale.set(1.85,.39,1),b.add($t);const pt=new I(.65,1.88,-1.75),ht=new I(0,1.38,-4.11),N=new B(new st(.95,2,.95),new xe({visible:!1}));N.position.set(0,1,0),N.userData={interactable:!0,isAgent:!0,isLeader:!0,stationIndex:ya,kind:"EXECUTIVE LEADER • AI",id:"leader-mrt",title:"MRT — Leader Điều Hành",role:"CEO AI & Điều phối 6 phòng ban (18 AI Agents)",desc:"Leader MRT trực tiếp đi tới từng phòng ban để giao việc, kiểm tra tiến độ, duyệt chuyển giai đoạn và đảm bảo chất lượng bàn giao.",canvas:p,focusPos:pt,focusTarget:ht,getMetrics:(ft,xt)=>{var Dt;const vt=Je(ya);return[{label:"Model AI",value:vt.model.name,tone:"good"},{label:"Giọng CIT",value:`${vt.voiceId} (${vt.genderLabel})`,tone:"good"},{label:"Di chuyển",value:Nt?"Đang đi tới phòng ban":yt===null?"Tại bục chỉ huy":`Giao việc B${yt+1}`,tone:"warn"},{label:"Bộ phận phụ trách",value:((Dt=xt==null?void 0:xt.currentDept)==null?void 0:Dt.shortName)||"1. Yêu cầu",tone:ft?"crit":"good"}]}},b.add(N),t.add(b);const Bt=b.position;let Y="home",yt=null,ut=[],Nt=!1,At=0,P=0,E=!0,G=1;function Z(ft,xt){if(Y===ft&&ut.length===0){yt=xt,At=xt!==null?Ph(xt):0;return}ut=Ty(Y,ft),yt=xt,Nt=ut.length>0}function rt(ft){const xt=Zd[ft];xt&&Z(xt,ft)}function et(){Z("home",null)}function mt(ft){E=!!ft}function at(){return E}function _t(ft){G=ft}function Ut(ft,xt){const vt=b.rotation.y,Dt=Math.sin(vt),Vt=Math.cos(vt),ct=Math.cos(vt),k=-Math.sin(vt);ft.set(Xt.clamp(b.position.x+Dt*2.15+ct*.75,-8.1,8.1),1.92,Xt.clamp(b.position.z+Vt*2.15+k*.75,-6.1,7.4)),xt.set(b.position.x,b.position.y+1.32,b.position.z)}let it=0;function bt(ft,xt,vt,Dt,Vt,ct,k=null){const dt=((Vt==null?void 0:Vt.activeBubbles)||[]).some(j=>j.stationIndex===ya);if(Nt&&ut.length>0){const j=ut[0],ot=j.x-b.position.x,Tt=j.z-b.position.z,wt=Math.hypot(ot,Tt),oe=2.35*G*(1+(((Dt==null?void 0:Dt.speed)||1)-1)*.35)*xt;if(wt<=oe+.03)b.position.x=j.x,b.position.z=j.z,b.position.y=j.y,Y=j.id,ut.shift(),ut.length===0&&(Nt=!1,At=yt!==null?Ph(yt):0);else{const te=ot/wt,Be=Tt/wt;b.position.x+=te*oe,b.position.z+=Be*oe,b.position.y=Xt.lerp(b.position.y,j.y,Math.min(1,xt*8)),At=Math.atan2(ot,Tt)}P+=xt*8.5*G;const be=Math.sin(P)*.48;y.rotation.x=be,R.rotation.x=-be,gt.rotation.x=-be*.55,lt.rotation.x=be*.72,L.position.y=.82+Math.abs(Math.sin(P))*.032,b.rotation.y=Lh(b.rotation.y,At,Math.min(1,xt*9))}else{if(y.rotation.x=Xt.lerp(y.rotation.x,0,Math.min(1,xt*10)),R.rotation.x=Xt.lerp(R.rotation.x,0,Math.min(1,xt*10)),yt===null&&(ct!=null&&ct[(Dt==null?void 0:Dt.stageIndex)??0])){const ot=ct[Dt.stageIndex];At=Xt.clamp(Math.atan2(ot.center.x-b.position.x,ot.center.z-b.position.z),-.95,.95)}b.rotation.y=Lh(b.rotation.y,At,Math.min(1,xt*5)),L.position.y=.82+Math.sin(ft*2.1)*.008;const j=dt||yt!==null;gt.rotation.x=j?-.22+Math.cos(ft*3.2)*.06:0,lt.rotation.x=dt?-.45+Math.sin(ft*5.2)*.22:yt!==null?-.28+Math.sin(ft*2.6)*.12:0}z.rotation.y=dt?Math.sin(ft*4.2)*.16:Math.sin(ft*.7)*.07,S.emissiveIntensity=dt?2.4:1.1,$t.position.y=2.1+Math.sin(ft*2)*.02,Ut(pt,ht),it+=xt,it>=.35&&(it=0,Ih(v,512,296,Dt,Vt,vt,ft,k),M.needsUpdate=!0)}return{group:t,interactables:[N],worldPos:Bt,walkToDepartment:rt,returnToPodium:et,setAutoWalk:mt,isAutoWalkEnabled:at,setWalkSpeed:_t,getLiveCameraView:Ut,update:bt}}const Ry=Object.fromEntries(Ae.map(n=>[n.id,n])),Py=["AGENT-PO-01","AGENT-BA-02","AGENT-UX-03","AGENT-ARC-04","AGENT-TL-05","AGENT-SM-06","AGENT-REL-07","AGENT-OPS-08","AGENT-SIG-09","AGENT-AND-10","AGENT-WIN-11","AGENT-BE-12","AGENT-QA-13","AGENT-SEC-14","AGENT-PRF-15","AGENT-SRE-16","AGENT-WAR-17","AGENT-FIX-18"],Iy=[[1,2,3],[0,2,4],[0,1,9],[4,5,9,10],[3,5,11],[3,4,12],[7,8,12,15],[6,8,11],[6,7,9,10],[10,11,12,2],[9,11,12,3],[9,10,4,14],[13,14,9,10],[12,14,11,6],[12,13,11],[16,17,6,7],[15,17,12],[15,16,9,10]],ve=18,Ei=yr.map((n,t)=>({...n,code:Py[t],dept:Ry[n.deptId],peers:Iy[t]})),Ve={stationIndex:ve,code:"AGENT-CEO-MRT",name:"MRT",role:"Leader Điều Hành",deptId:"executive",dept:{id:"executive",index:-1,shortName:"Leader MRT",name:"Ban Điều Hành MRT",color:"#f59e0b",colorHex:16096779},peers:[0,3,9,12,6,15]};function yn(n){return n===ve?Ve:Ei[n]}function Qo(n=new Date){const t=String(n.getHours()).padStart(2,"0"),e=String(n.getMinutes()).padStart(2,"0"),i=String(n.getSeconds()).padStart(2,"0");return`${t}:${e}:${i}`}function is(n){var t;return(t=n==null?void 0:n.platformLabels)!=null&&t.length?n.platformLabels.join(" + "):"Android + Windows"}function Ly(n,t){const e=(t==null?void 0:t.name)||"SmartPOS Bán Hàng",i=is(t),s=(t==null?void 0:t.features)||["Nghiệp vụ lõi","Đồng bộ dữ liệu","Bảo mật"],o=s[0]||"Nghiệp vụ cốt lõi",r=s[1]||"Đồng bộ thời gian thực",a=(t==null?void 0:t.warrantyMonths)||24;switch(n){case 0:return{assignedTask:`Chốt phạm vi sản phẩm "${e}" cho ${i}`,activeAction:`Đang phân rã User Story cho "${o}"`,standbyAction:`Đang rà soát tiêu chí nghiệm thu của "${e}"`};case 1:return{assignedTask:`Viết tài liệu đặc tả SRS & luồng nghiệp vụ "${e}"`,activeAction:`Đang chuẩn hóa đặc tả API & luồng "${r}"`,standbyAction:"Đang cập nhật ma trận yêu cầu cho đội Dev & QA"};case 2:return{assignedTask:`Thiết kế Wireframe & UI/UX đa màn hình (${i})`,activeAction:"Đang vẽ prototype giao diện cảm ứng & desktop",standbyAction:"Đang bàn giao Design Tokens cho Android & Windows"};case 3:return{assignedTask:`Thiết kế kiến trúc hệ thống & đồng bộ dữ liệu "${e}"`,activeAction:"Đang dựng sơ đồ Event-Driven & Offline Sync DB",standbyAction:"Đang review chuẩn kết nối giữa client và server"};case 4:return{assignedTask:`Phân chia module code & chuẩn kỹ thuật cho ${i}`,activeAction:"Đang chia backlog Sprint và giao task cho đội Xây dựng",standbyAction:"Đang hỗ trợ gỡ vướng kỹ thuật cho các AI Dev"};case 5:return{assignedTask:"Điều phối tiến độ 4 Sprint & loại bỏ điểm nghẽn",activeAction:"Đang cân bằng tải công việc giữa 6 bộ phận AI",standbyAction:"Đang theo dõi tốc độ hoàn thành Sprint trên Kanban"};case 6:return{assignedTask:`Quản lý phát hành & phê duyệt bản dựng "${e}"`,activeAction:"Đang kiểm tra checklist phát hành lên Store/CDN",standbyAction:"Đang chuẩn bị ghi chú phát hành Release Notes"};case 7:return{assignedTask:`Vận hành pipeline CI/CD đóng gói tự động (${i})`,activeAction:"Đang chạy build & xuất bản gói cài đặt tự động",standbyAction:"Đang tối ưu cache Docker & thời gian build CI"};case 8:return{assignedTask:"Ký số chứng chỉ doanh nghiệp (.AAB, .MSIX, .EXE)",activeAction:"Đang ký số EV Code Signing & kiểm tra SHA-256",standbyAction:"Đang quản lý kho chứng chỉ Google Play & Windows"};case 9:return{assignedTask:"Lập trình ứng dụng Android (Kotlin + Jetpack Compose)",activeAction:`Đang code màn hình Android & tích hợp "${o}"`,standbyAction:"Đang tối ưu Room DB và xử lý build .APK/.AAB"};case 10:return{assignedTask:"Lập trình phần mềm Windows Desktop (.NET 8 WinUI 3)",activeAction:`Đang code giao diện Windows x64 & module "${r}"`,standbyAction:"Đang tối ưu bộ cài .MSIX/.EXE và in ấn ngoại vi"};case 11:return{assignedTask:"Phát triển Backend API & đồng bộ dữ liệu thời gian thực",activeAction:"Đang viết endpoint đồng bộ & xác thực bảo mật JWT",standbyAction:"Đang tinh chỉnh kết nối PostgreSQL & Redis Cache"};case 12:return{assignedTask:`Chạy kiểm thử tự động E2E cho ${i}`,activeAction:"Đang chạy bộ test giả lập Android 14 & Windows 11",standbyAction:"Đang kiểm tra hồi quy các ca kiểm thử chức năng"};case 13:return{assignedTask:"Kiểm định bảo mật OWASP & phân quyền dữ liệu",activeAction:"Đang quét lỗ hổng API, mã hóa token & quyền truy cập",standbyAction:"Đang rà soát chứng chỉ bảo mật trước khi phát hành"};case 14:return{assignedTask:"Đo kiểm hiệu năng chịu tải & độ trễ p95 hệ thống",activeAction:"Đang bắn tải 10.000 request/s kiểm tra độ ổn định",standbyAction:"Đang phân tích mức tiêu thụ RAM/CPU trên thiết bị"};case 15:return{assignedTask:"Giám sát vận hành production SLA 99.98% 24/7",activeAction:"Đang theo dõi telemetry & log lỗi thời gian thực",standbyAction:"Đang giám sát độ sẵn sàng máy chủ & cảnh báo sớm"};case 16:return{assignedTask:`Tiếp nhận phản hồi & hỗ trợ bảo hành ${a} tháng`,activeAction:"Đang xử lý yêu cầu khách hàng & phân loại ticket",standbyAction:"Đang trực tổng đài chăm sóc khách hàng sau bàn giao"};case 17:default:return{assignedTask:"Phát triển bản vá Hotfix & cập nhật OTA / Auto-Updater",activeAction:"Đang đóng gói bản vá nóng & kiểm tra tương thích ngược",standbyAction:"Đang sẵn sàng vá lỗi khẩn cấp dưới 2 giờ theo SLA"}}}function Dy(n){let t=[],e=[],i=null,s=0,o=0,r=0;function a(x,g,T,A="peer",w=4.6){const S=yn(x),_=yn(g);if(!S||!_)return null;const y=Je(x),R={id:`msg-${++s}`,timeStr:Qo(),fromStation:x,fromCode:S.code,fromName:S.name,fromRole:S.role,fromModelName:y.model.name,fromGender:y.gender,fromVoiceId:y.voiceId,fromColor:S.dept.color,toStation:g,toCode:_.code,toName:_.name,toRole:_.role,toColor:_.dept.color,text:T,kind:A};return t=[...t,R].slice(-40),e=[{stationIndex:x,name:S.name,role:S.role,modelName:y.model.name,color:S.dept.color,text:T,ttl:w}],i={fromStation:x,toStation:g,colorHex:S.dept.colorHex,ttl:Math.min(3.6,w),maxTtl:Math.min(3.6,w)},R}function l(x,g,T=4.2){const A=yn(x);if(!A)return;const w=Je(x);e=[...e.filter(_=>_.stationIndex!==x).slice(0,1),{stationIndex:x,name:A.name,role:A.role,modelName:w.model.name,color:A.dept.color,text:g,ttl:T}]}function c(x,g){const T=Je(x);if(x===ve){const H=g==null?void 0:g.project,V=(H==null?void 0:H.name)||"SmartPOS Bán Hàng",z=is(H),O=Math.round(((g==null?void 0:g.overallProgress)??.1)*100),X=(g==null?void 0:g.currentDept)||Ae[0],J=Ve.peers.map(q=>{const gt=Ei[q];return`${gt.name} (${gt.dept.shortName})`});return{stationIndex:ve,code:Ve.code,name:Ve.name,role:Ve.role,gender:T.gender,genderLabel:T.genderLabel,modelId:T.modelId,modelName:T.model.name,modelProvider:T.model.provider,modelColor:T.model.color,voiceId:T.voiceId,concreteMission:T.mission,deptId:Ve.deptId,deptName:Ve.dept.name,deptColor:Ve.dept.color,deptColorHex:Ve.dept.colorHex,stageIndex:(g==null?void 0:g.stageIndex)??0,deptStatus:"active",progressPct:O,stateLabel:`Đang điều hành tổng thể (${O}%)`,assignedTask:`Điều phối 6 phòng ban (18 AI Agent) hoàn thiện "${V}" (${z})`,currentAction:`Đang chỉ đạo ${X.name} triển khai "${V}" (${O}%)`,workingWith:J.join(", "),peers:Ve.peers}}const A=Ei[x]||Ei[0],w=g==null?void 0:g.project,S=(g==null?void 0:g.stageIndex)??0,_=g?g.stageStatus[A.dept.index]:"active",y=_==="done"?100:_==="active"?Math.round(((g==null?void 0:g.stageProgress)??.1)*100):0,R=Ly(x,w),L=_==="active"?`Đang thực thi (${y}%)`:_==="done"?"Đã hoàn tất bàn giao (100%)":"Đang chuẩn bị tiếp nhận",D=_==="active"?R.activeAction:_==="done"?`Đã xong phần việc giai đoạn ${A.dept.shortName}, sẵn sàng hỗ trợ chéo`:R.standbyAction,U=A.peers.map(H=>{const V=Ei[H];return`${V.name} (${V.role})`});return{stationIndex:x,code:A.code,name:A.name,role:A.role,gender:T.gender,genderLabel:T.genderLabel,modelId:T.modelId,modelName:T.model.name,modelProvider:T.model.provider,modelColor:T.model.color,voiceId:T.voiceId,concreteMission:T.mission,deptId:A.deptId,deptName:A.dept.name,deptColor:A.dept.color,deptColorHex:A.dept.colorHex,stageIndex:S,deptStatus:_,progressPct:y,stateLabel:L,assignedTask:R.assignedTask,currentAction:D,workingWith:U.join(", "),peers:A.peers}}function h(x){var y,R;const g=x==null?void 0:x.project,T=(g==null?void 0:g.name)||"SmartPOS",A=is(g),w=(y=g==null?void 0:g.platforms)==null?void 0:y.includes("android"),S=(R=g==null?void 0:g.platforms)==null?void 0:R.includes("windows"),_=(x==null?void 0:x.stageIndex)??0;if(_===0)return[[0,1,`Minh Thư ơi, chốt giúp mình danh sách tính năng cốt lõi cho "${T}" (${A}) nhé.`],[1,2,"Quốc Anh kiểm tra luồng màn hình chính, mình đã tách xong 3 module nghiệp vụ trong SRS."],[2,3,"Anh Huy Hoàng xem trước wireframe nhé, em thiết kế tương thích cả cảm ứng lẫn desktop."]];if(_===1)return[[3,4,`Tuấn Kiệt, mình chốt kiến trúc Offline-First Sync cho "${T}", cậu chia task Sprint nhé.`],[4,9,"Phúc Thịnh chuẩn bị base Kotlin Compose cho bản Android, nhớ đồng bộ API với Linh Trần."],[4,10,"Bảo Long chuẩn bị cấu trúc .NET 8 WinUI 3 cho bản Windows x64 nhé."],[5,12,"Khang Đỗ xem trước kế hoạch 4 Sprint để chuẩn bị bộ test case sớm."]];if(_===2){const L=[[11,9,"Phúc Thịnh ơi, API đồng bộ đơn hàng xong rồi, cậu ghép vào app Android nhé."],[11,10,"Bảo Long kéo endpoint mới về tích hợp cho client Windows desktop luôn nha."],[9,10,"Mình xong luồng quét QR trên Android rồi, đang đối chiếu payload JSON với bản Windows."]];return w||(L[0]=[4,11,`Linh Trần kiểm tra lại tối ưu truy vấn DB cho "${T}" giúp team nhé.`]),S||(L[1]=[9,11,"Bản Android gọi API ổn định ở 18ms rồi, mình đẩy commit lên nhánh chính đây."]),L}return _===3?[[12,9,"Phúc Thịnh ơi, bộ test E2E Android 14 pass 100%, không còn lỗi crash giao diện."],[12,10,"Bảo Long kiểm tra giúp case DPI 150% trên Windows 11, QA vừa xác nhận đạt chuẩn."],[13,11,"Linh Trần yên tâm nhé, mình quét bảo mật OWASP và JWT token đều an toàn."],[14,6,"Chị Hải Yến ơi, hiệu năng p95 đạt 18ms ở mức 10k RPS — sẵn sàng đóng gói phát hành!"]]:_===4?[[6,7,`Minh Nguyễn kích hoạt pipeline đóng gói ${w&&S?".AAB và .MSIX/.EXE":w?".AAB/.APK":".MSIX/.EXE"} cho "${T}" ${x.version} nhé.`],[7,8,"Build xanh 100% rồi Đức Võ ơi, sang bước ký số chứng chỉ phát hành ngay."],[8,6,"Đã ký số EV Code Signing & kiểm tra SHA-256 xong, sẵn sàng đẩy lên Store/CDN."],[6,15,"Nam Phan chuẩn bị tiếp nhận bàn giao bản phát hành để giám sát Production 24/7 nhé."]]:[[15,16,`Hệ thống "${T}" ${x.version} đang chạy ổn định SLA 99.98%, chưa ghi nhận lỗi P1.`],[16,17,`An Phạm giữ sẵn nhánh Hotfix nhé, mình đang trực kênh bảo hành ${(g==null?void 0:g.warrantyMonths)||24} tháng.`],[17,12,"Khang Đỗ hỗ trợ chạy regression nhanh mỗi khi có bản vá bảo hành OTA nha."]]}function d(x,g,T){var S;const A=((S=T==null?void 0:T.project)==null?void 0:S.name)||"SmartPOS";return{1:[ve,3,`Tốt lắm đội BA! Leader MRT duyệt SRS "${A}" — Huy Hoàng bắt đầu Kiến trúc & Sprint nhé.`],2:[ve,9,"Kiến trúc xong! Leader MRT lệnh đội Xây dựng (Android, Windows, Backend) tăng tốc code ngay."],3:[ve,12,"Hoàn tất build! Leader MRT chuyển giao sang Khang Đỗ & đội QA kiểm thử tự động & bảo mật."],4:[ve,6,`QA đạt 100%! Leader MRT phê duyệt Hải Yến đóng gói & ký số phân phối "${A}".`],5:[ve,15,`Chính thức phát hành "${A}" ${T.version}! Nam Phan & đội Bảo hành trực SLA 24/7.`]}[g]||[ve,g*3,`Leader MRT chuyển giai đoạn "${A}".`]}function u(x){var A;t=[],e=[],i=null,o=0,r=0;const g=((A=x==null?void 0:x.project)==null?void 0:A.name)||"SmartPOS",T=is(x==null?void 0:x.project);a(ve,0,`Leader MRT phát lệnh khởi động "${g}" (${T})! Trang Bùi và đội BA bắt đầu phân tích yêu cầu ngay.`,"handoff",5.2)}function p(x,g,T){if(e=e.map(A=>({...A,ttl:A.ttl-x})).filter(A=>A.ttl>0),i&&(i.ttl-=x,i.ttl<=0&&(i=null)),!(g!=null&&g.paused)){if(T){const A=g.stageIndex,w=Math.max(0,A-1),[S,_,y]=d(w,A,g);a(S,_,y,"handoff",4.8),o=0;return}if(o+=x*((g==null?void 0:g.speed)||1),o>=3.2){o=0;const A=h(g),[w,S,_]=A[r%A.length];r+=1,a(w,S,_,"peer",4.2)}}}function v(x,g,T){var z,O,X;const A=c(x,T),w=yn(x),S=(g||"").trim().toLowerCase(),_=((z=T==null?void 0:T.project)==null?void 0:z.name)||"SmartPOS",y=is(T==null?void 0:T.project),R=(T==null?void 0:T.currentDept)||Ae[0];let L="",D=x===ve?R.stations[0]:w.peers[0];if(x===ve){const J=Math.round(((T==null?void 0:T.overallProgress)??0)*100);S.includes("nhiệm vụ")||S.includes("vai trò")||S.includes("phụ trách")?L=`Mình là Leader MRT (${w.code}) — người điều hành chung toàn công ty MRT SOFT HUB: điều phối 6 phòng ban, duyệt từng giai đoạn từ Yêu cầu đến Bảo hành.`:S.includes("trao đổi")||S.includes("phối hợp")||S.includes("ai")?L=`Leader MRT đang trao đổi trực tiếp với ${Ei[R.stations[0]].name} (${R.name}) và giám sát đồng bộ cả 6 bộ phận cho "${_}".`:S.includes("qa")||S.includes("kiểm thử")||S.includes("lỗi")?(D=12,L=`Leader MRT đã yêu cầu Khang Đỗ (QA Lead) siết chặt test tự động & bảo mật OWASP cho "${_}" trước khi phát hành.`):S.includes("android")?(D=9,L=`Leader MRT báo cáo mảng Android của "${_}" do Phúc Thịnh dẫn dắt, build .AAB/.APK theo đúng chuẩn Google Play.`):S.includes("windows")?(D=10,L=`Leader MRT báo cáo mảng Windows Desktop (.MSIX/.EXE) của "${_}" do Bảo Long phụ trách, tiến độ đang đồng bộ.`):S.includes("bảo hành")||S.includes("sla")?(D=16,L=`Leader MRT cam kết gói bảo hành ${((O=T==null?void 0:T.project)==null?void 0:O.warrantyMonths)||24} tháng (SLA 99.98%) do Nam Phan & Vy Trương trực 24/7.`):L=`Leader MRT báo cáo tổng thể: Dự án "${_}" (${y}) đã đạt ${J}%, đang ở bước ${R.name} (${(T==null?void 0:T.version)||"v1.0.0"}).`}else if(!S||S.includes("làm gì")||S.includes("đang làm")||S.includes("việc"))L=`Mình là ${w.name} (${w.role} • ${w.code}). Hiện tại mình ${A.currentAction.toLowerCase()} cho dự án "${_}" (${A.stateLabel}).`;else if(S.includes("nhiệm vụ")||S.includes("vai trò")||S.includes("phụ trách"))L=`Nhiệm vụ chính của mình tại bộ phận ${A.deptName} là: ${A.assignedTask}. Đầu ra phối hợp với ${yn(D).name}.`;else if(S.includes("qa")||S.includes("kiểm thử")||S.includes("lỗi")||S.includes("bug"))D=12,L=`Mình vừa nhắn kiểm tra nhanh với Khang Đỗ (QA Automation Lead) về chất lượng "${_}" — các ca test chính đều đang được theo dõi chặt chẽ.`;else if(S.includes("android"))D=9,L=`Phần Android của "${_}" do Phúc Thịnh phụ trách bằng Kotlin + Jetpack Compose, đang đồng bộ luồng dữ liệu với đội mình.`;else if(S.includes("windows")||S.includes("desktop"))D=10,L="Phần Windows Desktop (.NET 8 WinUI 3 / .MSIX/.EXE) do Bảo Long phụ trách, mình đang phối hợp đồng bộ API & định dạng dữ liệu.";else if(S.includes("bảo hành")||S.includes("sla")||S.includes("hotfix"))D=16,L=`Sau khi phát hành, Vy Trương và An Phạm ở bộ phận Bảo hành (${((X=T==null?void 0:T.project)==null?void 0:X.warrantyMonths)||24} tháng) sẽ trực 24/7 và vá lỗi Hotfix dưới 2 giờ.`;else if(S.includes("trao đổi")||S.includes("phối hợp")||S.includes("ai")||S.includes("team")){const J=yn(w.peers[0]),q=yn(w.peers[1]??w.peers[0]);L=`Mình đang trao đổi trực tiếp với ${J.name} (${J.role}) và ${q.name} (${q.role}) để đồng bộ tiến độ "${_}" trên ${y}.`}else L=`Đã rõ yêu cầu "${g.trim()}"! Mình (${w.name} — ${w.role}) đang ${A.currentAction.toLowerCase()} và sẽ báo lại cho ${yn(D).name}.`;const U={id:`msg-${++s}`,timeStr:Qo(),fromStation:-1,fromCode:"USER",fromName:"Bạn (Quản lý)",fromRole:"Chỉ đạo trực tiếp",fromColor:"#f8fafc",toStation:x,toCode:w.code,toName:w.name,toRole:w.role,toColor:w.dept.color,text:(g==null?void 0:g.trim())||"Hỏi trạng thái công việc",kind:"user"},H={id:`msg-${++s}`,timeStr:Qo(),fromStation:x,fromCode:w.code,fromName:w.name,fromRole:w.role,fromColor:w.dept.color,toStation:-1,toCode:"USER",toName:"Bạn",toRole:"Phản hồi tiếng Việt",toColor:"#f8fafc",text:L,kind:"reply"};t=[...t,U,H].slice(-40);let V=null;if(D!==x){const J=yn(D);V=a(x,D,x===ve?`Leader MRT chỉ đạo @${J.name}: kiểm tra & cập nhật tiến độ "${_}" ngay nhé!`:`@${J.name}, vừa nhận câu hỏi từ quản lý về "${_}" — xác nhận tiến độ giúp mình nhé!`,"peer",4.5)}return l(x,L,5),{reply:L,userMsg:U,replyMsg:H,peerMessage:V,status:A}}function M(x,g){var R;const T=(x||"").trim();if(!T)return null;const A=(g==null?void 0:g.currentDept)||Ae[0],w=A.stations[0],S=yn(w),_={id:`msg-${++s}`,timeStr:Qo(),fromStation:-1,fromCode:"USER",fromName:"Bạn (Giám đốc)",fromRole:"Chỉ đạo qua Leader MRT",fromColor:"#f8fafc",toStation:ve,toCode:Ve.code,toName:"Leader MRT",toRole:Ve.role,toColor:Ve.dept.color,text:T,kind:"user"};t=[...t,_].slice(-40);const y=a(ve,w,`Leader MRT tiếp nhận chỉ đạo "${T}"! ${S.name} (${A.shortName}) triển khai ngay cho "${((R=g==null?void 0:g.project)==null?void 0:R.name)||"dự án"}" nhé.`,"directive",5);return{userMsg:_,followUp:y}}function m(x,g){const T=a(ve,16,`Leader MRT kích hoạt ưu tiên SLA cho ${x.id} (${x.platform}): Vy Trương điều phối vá lỗi gấp!`,"warranty",5),A=a(17,12,`An Phạm đã build xong Hotfix ${x.version} cho ${x.id}, Khang Đỗ verify trước khi đẩy OTA!`,"warranty",5.2);return l(ve,`Đang chỉ đạo xử lý khẩn ${x.id} (${x.version})`,4.8),{first:T,second:A}}function f(x,g){var U,H,V,z,O,X,J;const T=c(x,g),A=yn(x),w=g==null?void 0:g.project,S=(w==null?void 0:w.name)||"SmartPOS Bán Hàng",_=is(w),y=((z=(V=(H=w==null?void 0:w.stageDetails)==null?void 0:H[((U=T.dept)==null?void 0:U.index)??(g==null?void 0:g.stageIndex)??0])==null?void 0:V.deliverables)==null?void 0:z[0])||T.assignedTask,R=`[${T.modelName}] ${T.name} (${T.role}) đang thực thi nhiệm vụ "${T.concreteMission}" cho dự án ${S} (${_}). Đầu ra trọng tâm: ${y}.`,L=`Xin báo cáo, tôi là ${T.name}, dùng mô hình ${T.modelName}. Hiện tôi đang thực hiện nhiệm vụ ${T.concreteMission} cho dự án ${S}.`,D=x===ve?((X=(O=g==null?void 0:g.currentDept)==null?void 0:O.stations)==null?void 0:X[0])??0:((J=A.peers)==null?void 0:J[0])??0;return a(x,D,R,"task",5.2),l(x,R,5.2),{stationIndex:x,agentName:T.name,role:T.role,gender:T.gender,modelName:T.modelName,voiceId:T.voiceId,report:R,speechText:L}}u(n);function b(){return{messages:[...t],activeBubbles:[...e],activeLink:i?{...i}:null,latestMessage:t[t.length-1]||null}}return{getAgentStatus:c,update:p,askAgent:v,runAgentTask:f,broadcastDirective:M,onWarrantyTicket:m,resetForProject:u,getState:b}}const Ny=["Tạo phần mềm Android và Windows quản lý kho thông minh, bảo hành 24 tháng","Chuyển sang bước Xây dựng và tăng tốc 4x","Kích hoạt ticket bảo hành và vá lỗi Hotfix ngay","Bật chế độ Ban đêm và khởi động Flycam tuần tra","Gọi Leader MRT báo cáo tổng thể dự án","Bật nhạc YouTube Lofi giải trí cho cả văn phòng"];function Uy(n=new Date){const t=String(n.getHours()).padStart(2,"0"),e=String(n.getMinutes()).padStart(2,"0"),i=String(n.getSeconds()).padStart(2,"0");return`${t}:${e}:${i}`}function By(n){const t=[];return(n.includes("android")||n.includes("apk")||n.includes("aab")||n.includes("di động"))&&t.push("android"),(n.includes("windows")||n.includes("win")||n.includes("exe")||n.includes("msix")||n.includes("desktop")||n.includes("pc"))&&t.push("windows"),(n.includes("web")||n.includes("cloud")||n.includes("website")||n.includes("saas"))&&t.push("web"),(n.includes("ios")||n.includes("iphone")||n.includes("ipad")||n.includes("ipa"))&&t.push("ios"),t.length>0?t:["android","windows"]}function Oy(n){const t=n.match(/(\d{1,2})\s*tháng/i);if(t){const e=Number(t[1]);if(e>=6&&e<=60)return e}return 24}function ky(n){let t=n.replace(/(yêu cầu|tạo|làm|xây dựng|phát triển|khởi tạo|thiết kế|viết|build)\s*(dự án|phần mềm|app|ứng dụng|hệ thống)?/gi," ").replace(/(?:^|[\s,.;:]+)(?:android|windows|web|ios|đa nền tảng)(?=$|[\s,.;:]+)/gi," ").replace(/(?:bảo hành\s*\d+\s*tháng)/gi," ").replace(/(?:^|[\s,.;:]+)(?:và|cho|bằng|với|mới|ngay)(?=$|[\s,.;:]+)/gi," ").replace(/[,.;:]+/g," ").replace(/\s+/g," ").trim();return t=t.replace(/^(?:và|cho|bằng|với|mới|ngay)\s+/i,"").trim(),t.length<4?"Dự Án Phần Mềm Tối Cao":t.charAt(0).toUpperCase()+t.slice(1,46)}function Fy(n){const t=n.match(/(https?:\/\/(?:www\.)?(?:youtube\.com|youtu\.be|m\.youtube\.com)\/[^\s]+)/i);return t?t[1]:null}let zy=0;function Hy(n,t){var c,h,d,u,p,v,M,m,f,b,x,g,T,A,w,S,_,y,R,L,D,U,H,V,z,O;const e=(n||"").trim();if(!e)return null;const i=e.toLowerCase(),s=[];let o=null;const r=/(tạo|khởi tạo|phát triển|xây dựng phần mềm|làm phần mềm|làm app|tạo app|dự án mới|yêu cầu làm|yêu cầu tạo|viết phần mềm|viết app|build phần mềm|build app|tạo mới)/i.test(i);if(r){const X=By(i),J=Oy(e),q=ky(e);(c=t.startProject)==null||c.call(t,{name:q,platforms:X,description:e,warrantyMonths:J}),s.push(`Khởi chạy dự án "${q}" (${X.map(gt=>gt.toUpperCase()).join(" + ")}, bảo hành ${J} tháng)`),o=0}const a=/(chuyển|nhảy|sang bước|sang giai đoạn|tới bước|bước \d|giai đoạn \d|mở bước)/i.test(i);if(!r||a){let X=null;/(bước 1|giai đoạn 1|yêu cầu|phân tích|\bba\b)/i.test(i)&&a?X=0:/(bước 2|giai đoạn 2|kế hoạch|kiến trúc|sprint)/i.test(i)?X=1:/(bước 3|giai đoạn 3|xây dựng|lập trình|\bcode\b)/i.test(i)&&a?X=2:/(bước 4|giai đoạn 4|kiểm thử|\bqa\b|test)/i.test(i)?X=3:/(bước 5|giai đoạn 5|phân phối|đóng gói|release|xuất bản)/i.test(i)?X=4:/(bước 6|giai đoạn 6)/i.test(i)&&(X=5),X!==null&&((h=t.jumpToStage)==null||h.call(t,X),s.push(`Chuyển quy trình sang giai đoạn ${X+1}/6`),o=X)}if(!r&&/(ticket|báo lỗi|vá lỗi|hotfix|kích hoạt bảo hành|xử lý bảo hành)/i.test(i)){const X=(d=t.triggerWarranty)==null?void 0:d.call(t);s.push(`Kích hoạt xử lý bảo hành ${(X==null?void 0:X.id)||""} & vá lỗi Hotfix ${(X==null?void 0:X.version)||""}`.trim()),o=5}if(/(4x|tốc độ 4|tối đa|chạy nhanh|nhanh nhất|tăng tốc)/i.test(i)?((u=t.setSpeed)==null||u.call(t,4),s.push("Đặt tốc độ vận hành 4x")):/(2x|tốc độ 2)/i.test(i)?((p=t.setSpeed)==null||p.call(t,2),s.push("Đặt tốc độ vận hành 2x")):/(1x|tốc độ 1|tốc độ chuẩn)/i.test(i)&&((v=t.setSpeed)==null||v.call(t,1),s.push("Đặt tốc độ vận hành 1x")),/(tạm dừng|ngưng|dừng lại)/i.test(i)?((M=t.setPaused)==null||M.call(t,!0),s.push("Tạm dừng tiến trình mô phỏng")):/(tiếp tục|chạy tiếp|khởi chạy lại)/i.test(i)&&((m=t.setPaused)==null||m.call(t,!1),s.push("Tiếp tục chạy mô phỏng")),/(tắt cảnh báo|hết sự cố|trở lại bình thường|bình thường hóa)/i.test(i)?((f=t.setAlertMode)==null||f.call(t,!1),s.push("Khôi phục trạng thái SYSTEM HEALTHY")):/(bật cảnh báo|cảnh báo p1|báo động|mô phỏng sự cố)/i.test(i)&&((b=t.setAlertMode)==null||b.call(t,!0),s.push("Kích hoạt trạng thái CẢNH BÁO P1 toàn tường LED")),/(ban đêm|tắt đèn|chế độ đêm|ánh sáng đêm)/i.test(i)?((x=t.setNightMode)==null||x.call(t,!0),s.push("Chuyển phòng điều hành sang ánh sáng Ban đêm")):/(ban ngày|bật đèn|chế độ ngày|sáng lên)/i.test(i)&&((g=t.setNightMode)==null||g.call(t,!1),s.push("Chuyển phòng điều hành sang ánh sáng Ban ngày")),/(tắt flycam|thoát flycam|dừng flycam)/i.test(i)?((T=t.setFlycam)==null||T.call(t,!1),s.push("Thoát góc nhìn Flycam về điều khiển tự do")):/(flycam|tuần tra|drone)/i.test(i)&&((A=t.setFlycam)==null||A.call(t,!0),s.push("Bật góc nhìn trực tiếp từ Flycam tuần tra")),/(tắt youtube|đóng youtube|tắt nhạc)/i.test(i))(w=t.closeYoutube)==null||w.call(t),s.push("Đóng trình phát YouTube Mini");else if(/(youtube|nghe nhạc|bật nhạc|lofi|giải trí|synthwave|piano)/i.test(i)){let J=Fy(e);J||(i.includes("synthwave")?J="4xDzrJKXOOY":i.includes("piano")?J="lCOF9LN_Zxs":i.includes("thiên nhiên")?J="BHACKCNDMW8":J="jfKfPfyJRdk"),(S=t.openYoutube)==null||S.call(t,J),s.push("Mở trình phát giải trí YouTube Mini")}(!/(flycam|tuần tra|drone)/i.test(i)||/(tắt flycam|thoát flycam)/i.test(i))&&(/(gọi leader|gọi mrt|leader mrt|báo cáo tổng thể|xem mrt)/i.test(i)?((_=t.applyPreset)==null||_.call(t,"mrt"),s.push("Đưa camera tới Leader MRT & mở báo cáo")):/(màn hình led|tường led|xem led)/i.test(i)?((y=t.applyPreset)==null||y.call(t,"led"),s.push("Đưa camera tới tường LED MRT SOFT HUB")):/(toàn cảnh|quay lại phòng)/i.test(i)?((R=t.applyPreset)==null||R.call(t,"overview"),s.push("Đưa camera về góc nhìn Toàn cảnh")):/(bàn dev|nhân viên|phòng ban)/i.test(i)?((L=t.applyPreset)==null||L.call(t,"devs"),s.push("Đưa camera tới khu vực Bàn Dev")):/(trên cao|từ trên)/i.test(i)&&((D=t.applyPreset)==null||D.call(t,"top"),s.push("Đưa camera lên góc nhìn Trên cao"))),/(tắt giọng nói|tắt cit voice|im lặng|ngừng đọc)/i.test(i)?((U=t.setVoiceEnabled)==null||U.call(t,!1),s.push("Tắt tự động đọc giọng nói AI")):/(bật giọng nói|kết nối cit voice|mở cit voice|bật cit voice|khởi động giọng nói)/i.test(i)&&((H=t.openVoice)==null||H.call(t,!0),s.push("Mở & kết nối CIT Voice Studio")),/(đóng báo cáo|tắt báo cáo|ẩn báo cáo)/i.test(i)?((V=t.toggleReport)==null||V.call(t,!1),s.push("Đóng màn hình Báo cáo Tiến độ")):/(mở báo cáo|màn hình báo cáo|màn hình tiến độ|xem tiến độ|bảng báo cáo)/i.test(i)&&((z=t.toggleReport)==null||z.call(t,!0),s.push("Mở màn hình Báo cáo Tiến độ"));const l=(O=t.dispatchViaMrt)==null?void 0:O.call(t,e,s,o);return s.length===0&&s.push("Truyền lệnh trực tiếp qua Leader MRT tới bộ phận đang vận hành"),{id:`cmd-${++zy}`,timeStr:Uy(),prompt:e,executedSteps:s,mrtReply:(l==null?void 0:l.text)||`Leader MRT đã tiếp nhận & thực thi lệnh tối cao: "${e}".`}}function tr(n,t){if(!n||!t)return;let e=null;t.addEventListener("pointerdown",s=>{if(s.target.closest("button"))return;const o=n.getBoundingClientRect();n.style.left=`${o.left}px`,n.style.top=`${o.top}px`,n.style.right="auto",n.style.bottom="auto",n.style.transform="none",e={offsetX:s.clientX-o.left,offsetY:s.clientY-o.top},t.setPointerCapture(s.pointerId)}),t.addEventListener("pointermove",s=>{if(!e)return;const o=n.getBoundingClientRect(),r=Math.max(12,window.innerWidth-o.width-12),a=Math.max(12,window.innerHeight-o.height-12),l=Math.min(r,Math.max(12,s.clientX-e.offsetX)),c=Math.min(a,Math.max(12,s.clientY-e.offsetY));n.style.left=`${l}px`,n.style.top=`${c}px`});const i=()=>{e=null};t.addEventListener("pointerup",i),t.addEventListener("pointercancel",i)}function Gy(){const n=[{el:document.querySelector(".hud-header"),btn:document.getElementById("btn-min-header"),collapseTitle:"Thu nhỏ thanh tiêu đề",expandTitle:"Mở rộng thanh tiêu đề"},{el:document.getElementById("pipeline-bar"),btn:document.getElementById("btn-min-pipeline"),collapseTitle:"Thu nhỏ thanh quy trình 6 bước",expandTitle:"Mở rộng thanh quy trình 6 bước"},{el:document.getElementById("studio-drawer"),btn:document.getElementById("btn-min-studio"),collapseTitle:"Thu nhỏ Studio",expandTitle:"Mở rộng Studio"},{el:document.getElementById("inspector"),btn:document.getElementById("btn-min-inspector"),collapseTitle:"Thu nhỏ bảng chi tiết",expandTitle:"Mở rộng bảng chi tiết"},{el:document.getElementById("supreme-window"),btn:document.getElementById("btn-min-supreme"),collapseTitle:"Thu nhỏ bảng Chỉ đạo tối cao",expandTitle:"Mở rộng bảng Chỉ đạo tối cao"},{el:document.getElementById("settings-window"),btn:document.getElementById("btn-min-settings"),collapseTitle:"Thu nhỏ Tùy chỉnh hệ thống",expandTitle:"Mở rộng Tùy chỉnh hệ thống"},{el:document.getElementById("voice-window"),btn:document.getElementById("btn-min-voice"),collapseTitle:"Thu nhỏ CIT Voice Studio",expandTitle:"Mở rộng CIT Voice Studio"},{el:document.getElementById("report-window"),btn:document.getElementById("btn-min-report"),collapseTitle:"Thu nhỏ Màn hình Báo cáo Tiến độ",expandTitle:"Mở rộng Màn hình Báo cáo Tiến độ"},{el:document.querySelector(".hud-controls"),btn:document.getElementById("btn-min-controls"),collapseTitle:"Thu nhỏ thanh điều khiển",expandTitle:"Mở rộng thanh điều khiển"}];for(const u of n)!u.el||!u.btn||u.btn.addEventListener("click",p=>{p.stopPropagation();const v=u.el.classList.toggle("minimized");u.btn.textContent=v?"+":"–",u.btn.title=v?u.expandTitle:u.collapseTitle});const t=document.getElementById("supreme-window"),e=t==null?void 0:t.querySelector(".supreme-header");t&&e&&tr(t,e);const i=document.getElementById("settings-window"),s=i==null?void 0:i.querySelector(".settings-header");i&&s&&tr(i,s);const o=document.getElementById("voice-window"),r=o==null?void 0:o.querySelector(".voice-header");o&&r&&tr(o,r);const a=document.getElementById("report-window"),l=a==null?void 0:a.querySelector(".report-header");a&&l&&tr(a,l);const c=document.getElementById("agent-ticker"),h=document.getElementById("btn-close-ticker");c&&h&&h.addEventListener("click",u=>{u.stopPropagation(),c.classList.add("hidden")});function d(u,p){u&&(u.classList.remove("minimized"),p&&(p.textContent="–"))}return{unminimize:d}}const er=[{id:"jfKfPfyJRdk",label:"Lofi Coding Chill"},{id:"4xDzrJKXOOY",label:"Synthwave Radio"},{id:"lCOF9LN_Zxs",label:"Piano Thư Giãn"},{id:"BHACKCNDMW8",label:"Thiên nhiên 4K"}],nr=/^[a-zA-Z0-9_-]{11}$/;function Dh(n){const t=(n||"").trim();if(!t)return null;let e=null;if(nr.test(t))e=t;else try{const i=/^https?:\/\//i.test(t)?t:`https://${t}`,s=new URL(i),o=s.hostname.replace(/^www\./,"").toLowerCase();if(o==="youtu.be"){const r=s.pathname.split("/").filter(Boolean)[0];r&&nr.test(r)&&(e=r)}else if(o==="youtube.com"||o==="m.youtube.com"||o==="music.youtube.com"||o==="youtube-nocookie.com"){const r=s.searchParams.get("v");if(r&&nr.test(r))e=r;else{const a=s.pathname.split("/").filter(Boolean);a.length>=2&&["shorts","live","embed","v"].includes(a[0])&&nr.test(a[1])&&(e=a[1])}}}catch{return null}return e?{videoId:e,embedUrl:`https://www.youtube-nocookie.com/embed/${e}?autoplay=1&rel=0`}:null}function Vy({windowEl:n,onStateChange:t}){const e=n.querySelector(".yt-header"),i=n.querySelector("#btn-min-yt"),s=n.querySelector("#btn-resize-yt"),o=n.querySelector("#btn-close-yt"),r=n.querySelector("#yt-presets"),a=n.querySelector("#yt-url-form"),l=n.querySelector("#yt-url-input"),c=n.querySelector("#yt-status"),h=n.querySelector("#yt-iframe");let d=er[0].id,u=!1;function p(g,T=""){d=g,h.src=`https://www.youtube-nocookie.com/embed/${g}?autoplay=1&rel=0`,c.textContent=T?`Đang phát: ${T}`:`Đang phát video: ${g}`,c.classList.remove("yt-err");for(const A of r.querySelectorAll(".yt-chip"))A.classList.toggle("active",A.dataset.ytId===g)}er.forEach(g=>{const T=document.createElement("button");T.type="button",T.className="yt-chip",T.dataset.ytId=g.id,T.textContent=g.label,T.addEventListener("click",()=>{p(g.id,g.label)}),r.appendChild(T)});function v(g){if(u=!0,n.classList.remove("hidden"),n.classList.remove("minimized"),i.textContent="–",g){const T=Dh(g);T&&p(T.videoId)}else if(!h.src){const T=er.find(A=>A.id===d)||er[0];p(T.id,T.label)}t==null||t(!0)}function M(){u=!1,n.classList.add("hidden"),h.src="",t==null||t(!1)}function m(){u?M():v()}function f(){return u}i.addEventListener("click",g=>{g.stopPropagation();const T=n.classList.toggle("minimized");i.textContent=T?"+":"–",i.title=T?"Mở rộng YouTube Mini":"Thu nhỏ (vẫn phát nhạc)"}),s.addEventListener("click",g=>{g.stopPropagation();const T=n.classList.toggle("yt-large");s.textContent=T?"Nhỏ":"Vừa"}),o.addEventListener("click",g=>{g.stopPropagation(),M()}),a.addEventListener("submit",g=>{g.preventDefault();const T=Dh(l.value);if(!T){c.textContent="Link hoặc ID YouTube chưa hợp lệ (hỗ trợ watch?v=, youtu.be/, shorts/, ID 11 ký tự).",c.classList.add("yt-err");return}l.value="",p(T.videoId)});let b=null;e.addEventListener("pointerdown",g=>{if(g.target.closest("button"))return;const T=n.getBoundingClientRect();n.style.left=`${T.left}px`,n.style.top=`${T.top}px`,n.style.right="auto",n.style.bottom="auto",b={offsetX:g.clientX-T.left,offsetY:g.clientY-T.top},e.setPointerCapture(g.pointerId)}),e.addEventListener("pointermove",g=>{if(!b)return;const T=n.getBoundingClientRect(),A=Math.max(12,window.innerWidth-T.width-12),w=Math.max(12,window.innerHeight-T.height-12),S=Math.min(A,Math.max(12,g.clientX-b.offsetX)),_=Math.min(w,Math.max(12,g.clientY-b.offsetY));n.style.left=`${S}px`,n.style.top=`${_}px`});const x=()=>{b=null};return e.addEventListener("pointerup",x),e.addEventListener("pointercancel",x),{open:v,close:M,toggle:m,isOpen:f}}const Js={fresh:{id:"fresh",label:"Tươi mới",isLightHud:!1,wallTint:16777215,floorTint:16777215,coveColor:2831942,bgColor:724759},cyber:{id:"cyber",label:"Cyber Tech",isLightHud:!1,wallTint:6452366,floorTint:8754344,coveColor:988970,bgColor:330004},light:{id:"light",label:"Sáng tối giản",isLightHud:!0,wallTint:16711422,floorTint:16317180,coveColor:4674921,bgColor:14870768},gold:{id:"gold",label:"Hoàng kim",isLightHud:!1,wallTint:8156267,floorTint:10392969,coveColor:1841431,bgColor:1183500}},Wy=[{color:"#38bdf8",label:"Xanh Cyan"},{color:"#10b981",label:"Xanh Ngọc"},{color:"#f59e0b",label:"Vàng Gold"},{color:"#818cf8",label:"Tím Indigo"},{color:"#f43f5e",label:"Đỏ Rose"}],Qs={theme:"fresh",accent:"#38bdf8",fontScale:1,hudOpacity:88,brandName:"MRT SOFT HUB",wallColor:"#ffffff",floorColor:"#ffffff",deskColor:"#f3f6fa",chairColor:"#ffffff",trimColor:"#d9b87a",ceilingGlowColor:"#f9fcff",showGlass:!0,showPlants:!0,showCarpet:!0,showLounge:!0,showWallArt:!0,showAmbientStrips:!0,showBubbles:!0,showServerRack:!0,showCoffeeBar:!0,showCctv:!0,showFlycam:!0,showLockers:!0,showClocks:!0,autoWalkLeader:!0},Jd="mrt_soft_hub_settings_v1";function Nh(n){return`#${Number(n).toString(16).padStart(6,"0")}`}function $y(){try{const n=localStorage.getItem(Jd);if(!n)return{...Qs};const t=JSON.parse(n);return{...Qs,...t,theme:Js[t.theme]?t.theme:Qs.theme}}catch{return{...Qs}}}function Xy({windowEl:n,onApply:t,onReturnPodium:e}){let i=$y();const s=Array.from(n.querySelectorAll("[data-set-tab]")),o={colors:n.querySelector("#set-tab-colors"),decor:n.querySelector("#set-tab-decor"),equip:n.querySelector("#set-tab-equip")},r=n.querySelector("#set-themes"),a=n.querySelector("#set-accents"),l=Array.from(n.querySelectorAll("[data-font-scale]")),c=n.querySelector("#set-opacity"),h=n.querySelector("#set-opacity-val"),d=n.querySelector("#set-brand"),u=n.querySelector("#col-wall"),p=n.querySelector("#col-floor"),v=n.querySelector("#col-desk"),M=n.querySelector("#col-chair"),m=n.querySelector("#col-trim"),f=n.querySelector("#col-ceiling"),b=n.querySelector("#chk-glass"),x=n.querySelector("#chk-plants"),g=n.querySelector("#chk-carpet"),T=n.querySelector("#chk-lounge"),A=n.querySelector("#chk-wall-art"),w=n.querySelector("#chk-ambient-strips"),S=n.querySelector("#chk-bubbles"),_=n.querySelector("#chk-server-rack"),y=n.querySelector("#chk-coffee-bar"),R=n.querySelector("#chk-cctv"),L=n.querySelector("#chk-flycam"),D=n.querySelector("#chk-lockers"),U=n.querySelector("#chk-clocks"),H=n.querySelector("#chk-autowalk"),V=n.querySelector("#btn-return-podium"),z=n.querySelector("#btn-reset-settings");for(const K of s)K.addEventListener("click",()=>{const F=K.dataset.setTab;for(const nt of s)nt.classList.toggle("active",nt===K);Object.entries(o).forEach(([nt,Mt])=>{Mt==null||Mt.classList.toggle("hidden",nt!==F)})});Object.values(Js).forEach(K=>{const F=document.createElement("button");F.type="button",F.className="set-theme-btn",F.dataset.themeId=K.id,F.textContent=K.label,F.addEventListener("click",()=>{i.theme=K.id,i.wallColor=Nh(K.wallTint),i.floorColor=Nh(K.floorTint),J()}),r.appendChild(F)}),Wy.forEach(K=>{const F=document.createElement("button");F.type="button",F.className="accent-dot-btn",F.dataset.accentColor=K.color,F.title=K.label,F.style.background=K.color,F.addEventListener("click",()=>{i.accent=K.color,J()}),a.appendChild(F)});function O(){for(const K of r.querySelectorAll(".set-theme-btn"))K.classList.toggle("active",K.dataset.themeId===i.theme);for(const K of a.querySelectorAll(".accent-dot-btn"))K.classList.toggle("active",K.dataset.accentColor===i.accent);for(const K of l)K.classList.toggle("active",Number(K.dataset.fontScale)===i.fontScale);c.value=String(i.hudOpacity),h.textContent=`${i.hudOpacity}%`,d.value=i.brandName,u&&(u.value=i.wallColor),p&&(p.value=i.floorColor),v&&(v.value=i.deskColor),M&&(M.value=i.chairColor),m&&(m.value=i.trimColor),f&&(f.value=i.ceilingGlowColor),b.checked=i.showGlass,x.checked=i.showPlants,g&&(g.checked=i.showCarpet),T&&(T.checked=i.showLounge),A&&(A.checked=i.showWallArt),w&&(w.checked=i.showAmbientStrips),S.checked=i.showBubbles,_&&(_.checked=i.showServerRack),y&&(y.checked=i.showCoffeeBar),R&&(R.checked=i.showCctv),L&&(L.checked=i.showFlycam),D&&(D.checked=i.showLockers),U&&(U.checked=i.showClocks),H.checked=i.autoWalkLeader}function X(){const K=document.documentElement,F=Js[i.theme]||Js.fresh,nt=(i.hudOpacity/100).toFixed(2);K.style.setProperty("--accent-cyan",i.accent),K.style.setProperty("--ui-scale",String(i.fontScale)),F.isLightHud?(document.body.classList.add("theme-light"),K.style.setProperty("--bg-glass",`rgba(248, 250, 252, ${nt})`),K.style.setProperty("--bg-glass-hover","rgba(226, 232, 240, 0.96)"),K.style.setProperty("--border-glass","rgba(15, 23, 42, 0.16)"),K.style.setProperty("--text-main","#0f172a"),K.style.setProperty("--text-muted","#475569")):(document.body.classList.remove("theme-light"),K.style.setProperty("--bg-glass",`rgba(11, 17, 29, ${nt})`),K.style.setProperty("--bg-glass-hover","rgba(25, 38, 58, 0.94)"),K.style.setProperty("--border-glass","rgba(148, 215, 255, 0.28)"),K.style.setProperty("--text-main","#f8fafc"),K.style.setProperty("--text-muted","#cbd5e1"))}function J(){O(),X();try{localStorage.setItem(Jd,JSON.stringify(i))}catch{}t==null||t({...i,themeCfg:Js[i.theme]})}for(const K of l)K.addEventListener("click",()=>{i.fontScale=Number(K.dataset.fontScale),J()});c.addEventListener("input",()=>{i.hudOpacity=Number(c.value),J()}),d.addEventListener("input",()=>{i.brandName=d.value.trim()||"MRT SOFT HUB",J()});const q=[[u,"wallColor"],[p,"floorColor"],[v,"deskColor"],[M,"chairColor"],[m,"trimColor"],[f,"ceilingGlowColor"]];for(const[K,F]of q)K==null||K.addEventListener("input",()=>{i[F]=K.value,J()});const gt=[[b,"showGlass"],[x,"showPlants"],[g,"showCarpet"],[T,"showLounge"],[A,"showWallArt"],[w,"showAmbientStrips"],[S,"showBubbles"],[_,"showServerRack"],[y,"showCoffeeBar"],[R,"showCctv"],[L,"showFlycam"],[D,"showLockers"],[U,"showClocks"],[H,"autoWalkLeader"]];for(const[K,F]of gt)K==null||K.addEventListener("change",()=>{i[F]=K.checked,J()});return V.addEventListener("click",()=>{e==null||e()}),z.addEventListener("click",()=>{i={...Qs},J()}),{init:()=>J(),getSettings:()=>({...i})}}const Qd="mrt_cit_voice_cfg_v1",xa={enabled:!0,speed:1.05,autoReadSupreme:!0,autoReadAgent:!0,autoReadStage:!1};function Yy(){try{const n=localStorage.getItem(Qd);return n?{...xa,...JSON.parse(n)}:{...xa}}catch{return{...xa}}}function Xs(n){try{localStorage.setItem(Qd,JSON.stringify(n))}catch{}}const Ys=[Ve,...Ei];function qy({windowEl:n,onStateChange:t,getLatestConversationTurns:e}){const i=document.getElementById("voice-status-badge"),s=document.getElementById("voice-engine-info"),o=document.getElementById("voice-dir-path"),r=document.getElementById("btn-voice-start"),a=document.getElementById("btn-voice-stop"),l=document.getElementById("btn-voice-refresh"),c=document.getElementById("btn-close-voice"),h=document.getElementById("voice-agent-roster"),d=document.getElementById("btn-voice-reset-roster"),u=document.getElementById("voice-speed"),p=document.getElementById("voice-speed-val"),v=document.getElementById("chk-voice-supreme"),M=document.getElementById("chk-voice-agent"),m=document.getElementById("chk-voice-stage"),f=document.getElementById("voice-test-form"),b=document.getElementById("voice-test-input"),x=document.getElementById("btn-voice-speak"),g=document.getElementById("btn-voice-cancel"),T=document.getElementById("btn-voice-convo"),A=document.getElementById("voice-speaking-status"),w=document.getElementById("voice-audio-player"),S=Yy();let _={installed:!1,serverReachable:!1,ready:!1,status:"offline",voices:[],health:null,dir:"E:\\New\\SOFT\\cit voice"},y=null,R=null,L=null;function D(){return!!(n&&!n.classList.contains("hidden"))}function U(){t==null||t({isOpen:D(),ready:_.ready,status:_.status,enabled:S.enabled})}function H(){if(!h)return;const pt=_.voices||[];h.innerHTML=Ys.map(ht=>{const N=Je(ht.stationIndex),Bt=ec(pt,N.gender),Y=ur(ht.stationIndex,pt),yt=N.gender==="female"?"♀ Nữ":"♂ Nam",ut=ht.stationIndex===ve?"Điều hành":ht.dept.shortName,Nt=Nr.map(P=>`<option value="${P.id}" ${P.id===N.modelId?"selected":""}>${P.name}</option>`).join(""),At=Bt.length>0?Bt.map(P=>`<option value="${P.id}" ${P.id===Y?"selected":""}>${P.name||P.id} (${N.genderLabel})</option>`).join(""):`<option value="${N.voiceId}" selected>${N.voiceId} (${N.genderLabel})</option>`;return`
        <div class="voice-roster-row">
          <div class="voice-roster-top">
            <span class="voice-roster-name">${ht.name}</span>
            <span class="voice-roster-role">${ut} • ${ht.role}</span>
            <span class="gender-pill ${N.gender}">${yt}</span>
            <button type="button" class="mini-ctrl-btn voice-play-agent" data-test-station="${ht.stationIndex}" title="Nghe ${ht.name} báo cáo nhiệm vụ" ${_.ready?"":"disabled"}>▶</button>
          </div>
          <div class="voice-roster-mission">${N.mission}</div>
          <div class="voice-roster-selects">
            <select data-model-station="${ht.stationIndex}" title="Chọn AI Model cho ${ht.name}">${Nt}</select>
            <select data-voice-station="${ht.stationIndex}" title="Chọn giọng ${N.genderLabel} cho ${ht.name}">${At}</select>
          </div>
        </div>
      `}).join("");for(const ht of h.querySelectorAll("[data-model-station]"))ht.addEventListener("change",()=>{xr(Number(ht.dataset.modelStation),{modelId:ht.value})});for(const ht of h.querySelectorAll("[data-voice-station]"))ht.addEventListener("change",()=>{xr(Number(ht.dataset.voiceStation),{voiceId:ht.value})});for(const ht of h.querySelectorAll("[data-test-station]"))ht.addEventListener("click",()=>{const N=Number(ht.dataset.testStation),Bt=Ys.find(ut=>ut.stationIndex===N)||Ve,Y=Je(N),yt=`Xin chào, tôi là ${Bt.name}, phụ trách ${Bt.role}, vận hành bằng mô hình ${Y.model.name}. Nhiệm vụ cụ thể của tôi là ${Y.mission}.`;nt(N,yt,!0)})}function V(){var pt;if(i){if(i.classList.remove("online","loading","offline"),_.ready?(i.classList.add("online"),i.textContent="● ĐÃ KẾT NỐI"):_.status==="loading"||_.status==="starting"?(i.classList.add("loading"),i.textContent=_.status==="loading"?"◐ ĐANG NẠP MODEL...":"◐ ĐANG KHỞI ĐỘNG..."):(i.classList.add("offline"),i.textContent="○ CHƯA BẬT"),o&&(o.textContent=_.dir||"E:\\New\\SOFT\\cit voice"),s)if(_.ready&&_.health){const ht=_.health,N=ht.sample_rate?`${Math.round(ht.sample_rate/1e3)} kHz`:"";s.textContent=`${ht.engine||"CIT Voice Studio"} • ${N} • ${(_.voices||[]).length} giọng đọc`}else _.status==="loading"||_.status==="starting"?s.textContent=((pt=_.health)==null?void 0:pt.message)||"Đang tải VieNeu-TTS vào RAM, vui lòng chờ vài giây...":_.installed?s.textContent="Sẵn sàng khởi động CIT Voice Studio tại cổng 8001":s.textContent="Không tìm thấy thư mục E:\\New\\SOFT\\cit voice (.venv)";r&&(r.disabled=_.ready||_.status==="starting"),a&&(a.disabled=!_.managedByHub),x&&(x.disabled=!_.ready),T&&(T.disabled=!_.ready),H(),U()}}function z(){L&&clearInterval(L);const pt=_.status==="starting"||_.status==="loading"?2500:2e4;L=setInterval(()=>{(D()||_.status==="starting"||_.status==="loading")&&O()},pt)}async function O(){try{const pt=await fetch("/api/voice/status"),ht=await pt.json();if(pt.ok&&ht.ok!==!1){const N=_.status;_=ht,V(),N!==_.status&&z()}}catch{_.ready=!1,_.status="offline",V()}return _}async function X(){A&&(A.textContent="Đang khởi động CIT Voice Studio (lần đầu nạp model ~15–30s)...");try{const pt=await fetch("/api/voice/start",{method:"POST",headers:{"Content-Type":"application/json"},body:"{}"}),ht=await pt.json();if(!pt.ok||ht.ok===!1)throw new Error(ht.error||`HTTP ${pt.status}`);_=ht,V(),z(),A&&(A.textContent=ht.ready?"CIT Voice Studio đã sẵn sàng phát giọng nói!":"Đã bật máy chủ CIT Voice — đang nạp mô hình giọng nói...")}catch(pt){A&&(A.textContent=`Lỗi bật server: ${pt.message}`)}}async function J(){gt();try{_=await(await fetch("/api/voice/stop",{method:"POST",headers:{"Content-Type":"application/json"},body:"{}"})).json(),V(),A&&(A.textContent="Đã tắt máy chủ CIT Voice.")}catch(pt){A&&(A.textContent=`Lỗi dừng server: ${pt.message}`)}}function q(){R&&(URL.revokeObjectURL(R),R=null)}function gt(){y&&(y.abort(),y=null),w&&(w.pause(),w.removeAttribute("src"),w.load()),q(),A&&(A.textContent="Đã dừng phát âm thanh.")}async function K(pt,ht,N){if(!_.ready&&(await O(),!_.ready))return!1;y&&y.abort();const Bt=new AbortController;y=Bt,A&&(A.textContent=`Đang tổng hợp giọng "${N}"...`);try{const Y=await fetch(pt,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(ht),signal:Bt.signal});if(!Y.ok){const Nt=await Y.json().catch(()=>({}));throw new Error(Nt.error||`HTTP ${Y.status}`)}const yt=await Y.blob();if(Bt.signal.aborted)return!1;q(),R=URL.createObjectURL(yt),w&&(w.src=R,w.onended=()=>{A&&(A.textContent=`Đã đọc xong (${N}).`)},await w.play().catch(()=>{A&&(A.textContent=`Đã tạo audio (${N}) — bấm ▶ trên trình phát để nghe.`)}));const ut=Y.headers.get("X-Duration-Seconds");return A&&(A.textContent=ut?`Đang phát: ${N} (${ut}s • Giọng AI)`:`Đang phát: ${N} (Giọng AI)`),!0}catch(Y){return(Y==null?void 0:Y.name)==="AbortError"||A&&(A.textContent=`Lỗi tạo giọng: ${Y.message}`),!1}finally{y===Bt&&(y=null)}}function F(pt,{voiceId:ht="Hải Đăng",speakerLabel:N="Leader MRT"}={}){const Bt=String(pt||"").trim();return Bt?K("/api/voice/speak",{text:Bt,voice_id:ht,speed:S.speed,format:"wav"},N):Promise.resolve(!1)}function nt(pt,ht,N=!1){if(!N&&(!S.enabled||!_.ready))return Promise.resolve(!1);const Bt=Number(pt),Y=Ys.find(At=>At.stationIndex===Bt)||Ve,yt=Je(Bt),ut=ur(Bt,_.voices),Nt=Bt===ve?"Leader MRT":Y.name;return F(ht,{voiceId:ut,speakerLabel:`${Nt} • ${yt.model.name} (${ut} • ${yt.genderLabel})`})}function Mt(pt,ht=!1){return nt(ve,pt,ht)}function lt(pt,ht,N=!1){const Bt=String(pt||"").toLowerCase(),Y=Ys.find(yt=>yt.name.toLowerCase()===Bt);return nt(Y?Y.stationIndex:0,ht,N)}function Ct(pt){if(!Array.isArray(pt)||pt.length===0)return Promise.resolve(!1);const ht=pt.map(N=>{let Bt=Number.isInteger(N.stationIndex)?N.stationIndex:null;if(Bt===null||Bt<0){const Y=String(N.speaker||"").toLowerCase(),yt=Ys.find(ut=>Y.includes(ut.name.toLowerCase()));Bt=yt?yt.stationIndex:ve}return{speaker:N.speaker||"AI",text:N.text,voice_id:N.voice_id||ur(Bt,_.voices)}});return K("/api/voice/conversation",{turns:ht,silence_duration:.35,speed:S.speed,format:"wav"},`Hội thoại ${ht.length} AI Agent`)}function Pt(pt){if(!n)return;const ht=typeof pt=="boolean"?pt:n.classList.contains("hidden");if(n.classList.toggle("hidden",!ht),ht){n.classList.remove("minimized");const N=document.getElementById("btn-min-voice");N&&(N.textContent="–"),O()}U()}function Ht(pt){S.enabled=!!pt,Xs(S),S.enabled||gt(),U()}function $t(){u&&(u.value=String(S.speed)),p&&(p.textContent=`${Number(S.speed).toFixed(2)}x`),v&&(v.checked=!!S.autoReadSupreme),M&&(M.checked=!!S.autoReadAgent),m&&(m.checked=!!S.autoReadStage),u==null||u.addEventListener("input",()=>{S.speed=Number(u.value)||1.05,p&&(p.textContent=`${S.speed.toFixed(2)}x`),Xs(S)}),v==null||v.addEventListener("change",()=>{S.autoReadSupreme=v.checked,Xs(S)}),M==null||M.addEventListener("change",()=>{S.autoReadAgent=M.checked,Xs(S)}),m==null||m.addEventListener("change",()=>{S.autoReadStage=m.checked,Xs(S)}),r==null||r.addEventListener("click",X),a==null||a.addEventListener("click",J),l==null||l.addEventListener("click",O),c==null||c.addEventListener("click",()=>Pt(!1)),g==null||g.addEventListener("click",gt),d==null||d.addEventListener("click",()=>{dy(),H()}),f==null||f.addEventListener("submit",pt=>{pt.preventDefault();const ht=b==null?void 0:b.value.trim();ht&&Mt(ht,!0)}),T==null||T.addEventListener("click",()=>{const pt=(e==null?void 0:e())||[];if(pt.length===0){A&&(A.textContent="Chưa có lượt hội thoại nào giữa các AI Agent.");return}Ct(pt)}),qd(()=>H()),O(),z()}return{init:$t,toggle:Pt,startServer:X,stopServer:J,refreshStatus:O,speak:F,speakAsStation:nt,speakAsLeader:Mt,speakAsAgent:lt,playConversation:Ct,stopSpeaking:gt,setAutoEnabled:Ht,getAvailableVoices:()=>[..._.voices||[]],getState:()=>({..._,config:{...S}})}}const tu="mrt_report_screen_cfg_v1",Uh=[{id:"dark-tech",label:"Tối Công Nghệ"},{id:"exec-white",label:"Nền Trắng Chữ Đỏ"},{id:"champagne-luxury",label:"Kính Champagne"},{id:"emerald-ops",label:"Xanh Vận Hành"}],jy=["#38bdf8","#dc2626","#f59e0b","#10b981","#818cf8"],ir=["sm","md","lg"],Ky={sm:"Nhỏ",md:"Vừa",lg:"Rộng"},fs={title:"BÁO CÁO TIẾN ĐỘ DỰ ÁN — MRT SOFT HUB",theme:"dark-tech",accent:"#38bdf8",size:"md",layout:"2col",fontScale:1,opacity:.92,showKpis:!0,showStages:!0,showAgents:!0,showOutputs:!0,showMemo:!0,memo:""};function Zy(){try{const n=localStorage.getItem(tu);return n?{...fs,...JSON.parse(n)}:{...fs}}catch{return{...fs}}}function Ma(n){try{localStorage.setItem(tu,JSON.stringify(n))}catch{}}function Oe(n){return String(n||"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}function Jy({windowEl:n,onStateChange:t,onSelectDepartment:e,onSpeakReport:i,getRealProjects:s}){const o=document.getElementById("rep-header-title"),r=document.getElementById("btn-rep-customize"),a=document.getElementById("btn-rep-size"),l=document.getElementById("btn-close-report"),c=document.getElementById("rep-custom-panel"),h=document.getElementById("rep-cfg-title"),d=document.getElementById("rep-cfg-themes"),u=document.getElementById("rep-cfg-accents"),p=Array.from(document.querySelectorAll("[data-rep-layout]")),v=Array.from(document.querySelectorAll("[data-rep-scale]")),M=document.getElementById("rep-cfg-opacity"),m=document.getElementById("rep-cfg-opacity-val"),f=document.getElementById("chk-rep-kpi"),b=document.getElementById("chk-rep-stages"),x=document.getElementById("chk-rep-agents"),g=document.getElementById("chk-rep-outputs"),T=document.getElementById("chk-rep-memo"),A=document.getElementById("btn-rep-reset"),w=document.getElementById("rep-hero"),S=document.getElementById("rep-sec-kpi"),_=document.getElementById("rep-kpi-grid"),y=document.getElementById("rep-sec-stages"),R=document.getElementById("rep-stages-list"),L=document.getElementById("rep-sec-agents"),D=document.getElementById("rep-agents-list"),U=document.getElementById("rep-sec-outputs"),H=document.getElementById("rep-outputs-list"),V=document.getElementById("rep-sec-memo"),z=document.getElementById("rep-memo-input"),O=document.getElementById("btn-rep-speak"),X=document.getElementById("btn-rep-export"),J=document.getElementById("rep-updated-at");let q=Zy(),gt=null,K=null,F=!1,nt="";function Mt(){return!!(n&&!n.classList.contains("hidden"))}function lt(){if(n){for(const Y of Uh)n.classList.remove(`theme-${Y.id}`);n.classList.add(`theme-${q.theme}`);for(const Y of ir)n.classList.remove(`size-${Y}`);n.classList.add(`size-${q.size}`),n.classList.toggle("layout-1col",q.layout==="1col"),n.classList.toggle("layout-2col",q.layout!=="1col"),n.style.setProperty("--rep-accent",q.accent),n.style.setProperty("--rep-font-scale",String(q.fontScale)),n.style.setProperty("--rep-bg-alpha",String(q.opacity)),o&&(o.textContent=q.title||fs.title),a&&(a.textContent=Ky[q.size]||"Vừa"),S==null||S.classList.toggle("hidden",!q.showKpis),y==null||y.classList.toggle("hidden",!q.showStages),L==null||L.classList.toggle("hidden",!q.showAgents),U==null||U.classList.toggle("hidden",!q.showOutputs),V==null||V.classList.toggle("hidden",!q.showMemo)}}function Ct(){h&&(h.value=q.title),z&&document.activeElement!==z&&(z.value=q.memo||""),M&&(M.value=String(Math.round(q.opacity*100))),m&&(m.textContent=`${Math.round(q.opacity*100)}%`),f&&(f.checked=!!q.showKpis),b&&(b.checked=!!q.showStages),x&&(x.checked=!!q.showAgents),g&&(g.checked=!!q.showOutputs),T&&(T.checked=!!q.showMemo);for(const Y of(d==null?void 0:d.querySelectorAll("[data-rep-theme]"))||[])Y.classList.toggle("active",Y.dataset.repTheme===q.theme);for(const Y of(u==null?void 0:u.querySelectorAll("[data-rep-accent]"))||[])Y.classList.toggle("active",Y.dataset.repAccent===q.accent);for(const Y of p)Y.classList.toggle("active",Y.dataset.repLayout===q.layout);for(const Y of v)Y.classList.toggle("active",Number(Y.dataset.repScale)===Number(q.fontScale))}function Pt(Y){q={...q,...Y},Ma(q),lt(),Ct()}function Ht(Y,yt,ut,Nt=!1){var _t,Ut;if(!Y||!Mt())return;const At=typeof s=="function"?s()||[]:[],P=At.find(it=>{var bt;return it.slug===((bt=Y.project)==null?void 0:bt.slug)})||At[0]||null,E=P?`${P.slug}:${(P.outputs||[]).length}:${P.lastBuildAt||""}`:"none",G=Math.round((Y.overallProgress??0)*100),Z=Math.round((Y.stageProgress??0)*100),rt=`${(_t=Y.project)==null?void 0:_t.slug}:${Y.stageIndex}:${Z}:${G}:${Y.version}:${Y.paused}:${ut}:${(Y.warrantyTickets||[]).length}:${E}:${((Ut=yt==null?void 0:yt.latestMessage)==null?void 0:Ut.id)||""}`;if(!Nt&&rt===nt)return;nt=rt;const et=Y.project||{},mt=Y.currentDept||Ae[0],at=Y.stageStatus.filter(it=>it==="done").length;if(w){const it=ut?'<span class="rep-status-tag crit">CẢNH BÁO P1</span>':Y.paused?'<span class="rep-status-tag warn">TẠM DỪNG</span>':`<span class="rep-status-tag good">ĐANG CHẠY • BƯỚC ${Y.stageIndex+1}/6</span>`;w.innerHTML=`
        <div class="rep-hero-top">
          <div>
            <div class="rep-proj-title">${Oe(et.name||"SmartPOS Bán Hàng")}</div>
            <div class="rep-proj-meta">${Oe((et.platformLabels||["Android","Windows"]).join(" + "))} • ${Oe(Y.version||"v1.0.0")} • Bảo hành ${et.warrantyMonths||24} tháng</div>
          </div>
          <div class="rep-hero-right">
            ${it}
            <div class="rep-hero-pct">${G}%</div>
          </div>
        </div>
        <div class="rep-bar-track"><div class="rep-bar-fill" style="width:${G}%"></div></div>
      `}if(_){const it=(Y.warrantyTickets||[]).length;_.innerHTML=`
        <div class="rep-kpi-card">
          <div class="rep-kpi-label">Tiến độ tổng</div>
          <div class="rep-kpi-val">${G}%</div>
          <div class="rep-kpi-sub">${at}/6 phòng ban xong</div>
        </div>
        <div class="rep-kpi-card">
          <div class="rep-kpi-label">Phòng ban hiện tại</div>
          <div class="rep-kpi-val">${Oe(mt.shortName)}</div>
          <div class="rep-kpi-sub">Tiến độ bước: ${Z}%</div>
        </div>
        <div class="rep-kpi-card">
          <div class="rep-kpi-label">Đội ngũ AI</div>
          <div class="rep-kpi-val">19 AI</div>
          <div class="rep-kpi-sub">Leader MRT + 18 Agent</div>
        </div>
        <div class="rep-kpi-card">
          <div class="rep-kpi-label">Xưởng Thật / SLA</div>
          <div class="rep-kpi-val">${At.length} app</div>
          <div class="rep-kpi-sub">${it>0?`${it} ticket bảo hành`:"SLA 99.98% Ổn định"}</div>
        </div>
      `}if(R){R.innerHTML=Ae.map((it,bt)=>{const ft=Y.stageStatus[bt],xt=ft==="done"?100:ft==="active"?Z:0,vt=it.stations[0],Dt=yr[vt],Vt=Je(vt),ct=ft==="done"?"HOÀN TẤT":ft==="active"?`${xt}%`:"CHỜ";return`
          <button type="button" class="rep-stage-row ${ft}" data-rep-dept="${bt}" title="Bấm để xem phòng ban ${Oe(it.name)}">
            <div class="rep-stage-head">
              <span class="rep-stage-name">${Oe(it.name)}</span>
              <span class="rep-stage-pill ${ft}">${ct}</span>
            </div>
            <div class="rep-stage-sub">${Oe((Dt==null?void 0:Dt.name)||"")} • ${Oe(Vt.model.name)} (${Oe(Vt.voiceId)})</div>
            <div class="rep-stage-bar"><div class="rep-stage-bar-fill ${ft}" style="width:${xt}%"></div></div>
          </button>
        `}).join("");for(const it of R.querySelectorAll("[data-rep-dept]"))it.addEventListener("click",()=>{e==null||e(Number(it.dataset.repDept))})}if(D){Je(ve);const it=[ve,...mt.stations||[0,1,2]];D.innerHTML=it.map(bt=>{const ft=bt===ve,xt=ft?{name:"Leader MRT"}:yr[bt],vt=Je(bt),Dt=ft?`Điều phối ${mt.name}`:vt.mission;return`
            <div class="rep-agent-item">
              <div class="rep-agent-top">
                <strong>${Oe((xt==null?void 0:xt.name)||"")}</strong>
                <span class="gender-pill ${vt.gender}">${vt.gender==="female"?"♀ Nữ":"♂ Nam"}</span>
                <span class="rep-model-tag">${Oe(vt.model.name)}</span>
              </div>
              <div class="rep-agent-desc">${Oe(Dt)} • Giọng: <em>${Oe(vt.voiceId)}</em></div>
            </div>
          `}).join("")}if(H){const it=((P==null?void 0:P.outputs)||[]).map(ft=>`<div class="rep-out-item built">✅ [${Oe(ft.platform.toUpperCase())}] ${Oe(ft.file)} (${Oe(ft.status)})</div>`),bt=(Y.activeLogs||[]).slice(-3).reverse().map(ft=>`<div class="rep-out-item log">• ${Oe(ft)}</div>`);H.innerHTML=it.length>0||bt.length>0?[...it,...bt].join(""):'<div class="rep-out-item log">Đang thu thập dữ liệu sản phẩm & log...</div>'}J&&(J.textContent=`Cập nhật: ${new Date().toLocaleTimeString("vi-VN",{hour12:!1})}`)}function $t(){var E,G;const Y=gt;if(!Y)return"Hệ thống MRT SOFT HUB đang sẵn sàng báo cáo.";const yt=Math.round((Y.overallProgress??0)*100),ut=Math.round((Y.stageProgress??0)*100),Nt=Y.stageStatus.filter(Z=>Z==="done").length,At=Y.currentDept||Ae[0],P=(E=q.memo)!=null&&E.trim()?` Ghi chú quản lý: ${q.memo.trim()}.`:"";return`Báo cáo tiến độ dự án ${((G=Y.project)==null?void 0:G.name)||"SmartPOS"}. Tiến độ tổng đạt ${yt} phần trăm, đã hoàn thành ${Nt} trên 6 phòng ban. Hiện tại bộ phận ${At.name} đang xử lý đạt ${ut} phần trăm.${P}`}function pt(){var G,Z,rt,et;const Y=gt,yt=((G=Y==null?void 0:Y.project)==null?void 0:G.name)||"MRT-Project",ut=Math.round(((Y==null?void 0:Y.overallProgress)??0)*100),Nt=[`# ${q.title}`,`- **Thời gian xuất**: ${new Date().toLocaleString("vi-VN")}`,`- **Dự án**: ${yt} (${(Y==null?void 0:Y.version)||"v1.0.0"})`,`- **Nền tảng**: ${(((Z=Y==null?void 0:Y.project)==null?void 0:Z.platformLabels)||[]).join(", ")}`,`- **Tiến độ tổng**: ${ut}%`,"","## Tiến độ 6 phòng ban",...Ae.map((mt,at)=>{var it;const _t=((it=Y==null?void 0:Y.stageStatus)==null?void 0:it[at])||"pending",Ut=_t==="done"?100:_t==="active"?Math.round(((Y==null?void 0:Y.stageProgress)??0)*100):0;return`- **${mt.name}**: ${Ut}% (${_t})`})];(rt=q.memo)!=null&&rt.trim()&&Nt.push("","## Ghi chú chỉ đạo",q.memo.trim());const At=new Blob([Nt.join(`
`)],{type:"text/markdown;charset=utf-8"}),P=URL.createObjectURL(At),E=document.createElement("a");E.href=P,E.download=`bao-cao-tien-do-${((et=Y==null?void 0:Y.project)==null?void 0:et.slug)||"mrt-soft-hub"}.md`,document.body.appendChild(E),E.click(),E.remove(),setTimeout(()=>URL.revokeObjectURL(P),1e3)}function ht(Y){if(!n)return;const yt=typeof Y=="boolean"?Y:n.classList.contains("hidden");if(n.classList.toggle("hidden",!yt),yt){n.classList.remove("minimized");const ut=document.getElementById("btn-min-report");ut&&(ut.textContent="–"),gt&&Ht(gt,K,F,!0)}t==null||t(yt)}function N(Y,yt,ut){gt=Y,K=yt,F=ut,Ht(Y,yt,ut,!1)}function Bt(){if(d){d.innerHTML=Uh.map(Y=>`<button type="button" class="mini-ctrl-btn" data-rep-theme="${Y.id}">${Y.label}</button>`).join("");for(const Y of d.querySelectorAll("[data-rep-theme]"))Y.addEventListener("click",()=>Pt({theme:Y.dataset.repTheme}))}if(u){u.innerHTML=jy.map(Y=>`<button type="button" class="accent-dot" data-rep-accent="${Y}" style="background:${Y}" title="Màu ${Y}"></button>`).join("");for(const Y of u.querySelectorAll("[data-rep-accent]"))Y.addEventListener("click",()=>Pt({accent:Y.dataset.repAccent}))}for(const Y of p)Y.addEventListener("click",()=>Pt({layout:Y.dataset.repLayout}));for(const Y of v)Y.addEventListener("click",()=>Pt({fontScale:Number(Y.dataset.repScale)||1}));h==null||h.addEventListener("input",()=>{Pt({title:h.value||fs.title})}),M==null||M.addEventListener("input",()=>{Pt({opacity:Number(M.value)/100})}),f==null||f.addEventListener("change",()=>Pt({showKpis:f.checked})),b==null||b.addEventListener("change",()=>Pt({showStages:b.checked})),x==null||x.addEventListener("change",()=>Pt({showAgents:x.checked})),g==null||g.addEventListener("change",()=>Pt({showOutputs:g.checked})),T==null||T.addEventListener("change",()=>Pt({showMemo:T.checked})),z==null||z.addEventListener("input",()=>{q={...q,memo:z.value},Ma(q)}),A==null||A.addEventListener("click",()=>{q={...fs},Ma(q),lt(),Ct(),gt&&Ht(gt,K,F,!0)}),r==null||r.addEventListener("click",()=>{const Y=c==null?void 0:c.classList.toggle("hidden");r.classList.toggle("active",!Y)}),a==null||a.addEventListener("click",()=>{const Y=ir.indexOf(q.size),yt=ir[(Y+1)%ir.length];Pt({size:yt})}),l==null||l.addEventListener("click",()=>ht(!1)),O==null||O.addEventListener("click",()=>i==null?void 0:i($t())),X==null||X.addEventListener("click",pt),lt(),Ct()}return{init:Bt,toggle:ht,open:()=>ht(!0),close:()=>ht(!1),update:N,isOpen:Mt,buildVoiceSummary:$t}}async function Ui(n,t={}){const e=await fetch(n,{headers:{"Content-Type":"application/json"},...t}),i=await e.json();if(!e.ok||i.ok===!1)throw new Error(i.error||`HTTP ${e.status}`);return i}function Qy(){return Ui("/api/factory/status")}function tx(){return Ui("/api/factory/projects")}function ex(n){return Ui("/api/factory/scaffold",{method:"POST",body:JSON.stringify(n)})}function eu(n){return Ui("/api/factory/build",{method:"POST",body:JSON.stringify({slug:n})})}function nx({slug:n,visibility:t="private",repoName:e=null}){return Ui("/api/factory/github-push",{method:"POST",body:JSON.stringify({slug:n,visibility:t,repoName:e})})}function nu(n){return Ui("/api/factory/open-folder",{method:"POST",body:JSON.stringify({slug:n})})}function ix({slug:n,platform:t}){return Ui("/api/factory/launch-test",{method:"POST",body:JSON.stringify({slug:n,platform:t})})}const sx=document.getElementById("app"),Mi=document.getElementById("tooltip"),br=document.getElementById("inspector"),ox=document.getElementById("inspector-badge"),rx=document.getElementById("inspector-title"),ax=document.getElementById("inspector-role"),lx=document.getElementById("inspector-metrics"),cx=document.getElementById("inspector-desc"),Ci=document.getElementById("inspector-preview"),Cl=Ci.getContext("2d"),Bh=document.getElementById("agent-chat-section"),iu=document.getElementById("agent-doing"),su=document.getElementById("agent-task"),hx=document.getElementById("agent-peers"),ba=document.getElementById("agent-chat-history"),dx=document.getElementById("agent-chat-form"),Oh=document.getElementById("input-agent-question"),ux=Array.from(document.querySelectorAll(".quick-q-btn")),fx=document.getElementById("live-clock"),px=document.getElementById("header-project-name"),mx=document.getElementById("header-version"),gx=document.getElementById("header-status-dot"),Sa=document.getElementById("ops-status-pill"),vx=document.getElementById("pipeline-bar"),_x=document.getElementById("pipeline-steps"),Ea=document.getElementById("studio-drawer"),yx=document.getElementById("btn-min-studio"),xx=document.getElementById("btn-min-inspector"),Mx=document.getElementById("btn-open-studio"),bx=document.getElementById("btn-close-studio"),Sx=document.getElementById("btn-open-agents"),Ex=document.getElementById("btn-open-factory"),ou=Array.from(document.querySelectorAll(".tab-btn")),Tx=document.getElementById("tab-create"),wx=document.getElementById("tab-pipeline"),Ax=document.getElementById("tab-agents"),Cx=document.getElementById("tab-factory"),kh=document.getElementById("chk-real-disk"),Fh=document.getElementById("factory-tools"),Ta=document.getElementById("factory-active-card"),si=document.getElementById("btn-real-build"),Rx=document.getElementById("btn-open-folder"),zh=document.getElementById("sel-gh-vis"),wa=document.getElementById("btn-push-github"),qs=document.getElementById("factory-console"),Aa=document.getElementById("factory-projects-list"),ps=document.getElementById("build-toast"),Hh=document.getElementById("build-toast-badge"),Gh=document.getElementById("build-toast-title"),Vh=document.getElementById("build-toast-summary"),Ca=document.getElementById("build-toast-links"),Ra=document.getElementById("btn-close-build-toast"),Pa=document.getElementById("btn-toast-open-folder"),Ia=document.getElementById("btn-toast-open-factory"),Px=document.getElementById("template-chips"),Rl=document.getElementById("project-form"),ru=document.getElementById("input-proj-name"),au=document.getElementById("input-proj-desc"),lu=document.getElementById("input-warranty"),cu=document.getElementById("btn-sim-pause"),hu=Array.from(document.querySelectorAll(".speed-btn")),Ix=document.getElementById("btn-warranty-ticket"),Wh=document.getElementById("stage-stepper"),Lx=document.getElementById("artifacts-list"),$h=document.getElementById("agent-feed"),Dx=document.getElementById("directive-form"),Xh=document.getElementById("input-directive"),du=document.getElementById("agent-ticker"),Nx=document.getElementById("agent-ticker-text"),uu=document.getElementById("btn-lighting"),Ux=document.getElementById("lighting-label"),fu=document.getElementById("btn-supreme"),Bx=document.getElementById("btn-header-supreme"),La=document.getElementById("supreme-window"),Ox=document.getElementById("btn-min-supreme"),kx=document.getElementById("btn-close-supreme"),Fx=document.getElementById("supreme-chips"),pu=document.getElementById("supreme-form"),Sr=document.getElementById("supreme-input"),Yh=document.getElementById("supreme-history"),mu=document.getElementById("btn-youtube"),ms=document.getElementById("btn-voice"),zx=document.getElementById("voice-window"),gs=document.getElementById("btn-report"),Hx=document.getElementById("report-window"),Da=document.getElementById("btn-agent-speak"),Na=document.getElementById("btn-agent-run-task"),sr=document.getElementById("inspector-agent-gender"),rs=document.getElementById("sel-inspector-model"),as=document.getElementById("sel-inspector-voice"),gu=document.getElementById("btn-settings"),fr=document.getElementById("settings-window"),Gx=document.getElementById("btn-min-settings"),Vx=document.getElementById("btn-close-settings"),Wx=document.querySelector(".hud-title"),$x=document.getElementById("btn-inspector-yt"),vu=document.getElementById("btn-flycam"),Xx=document.getElementById("flycam-hud"),Yx=document.getElementById("flycam-telemetry-text"),_u=document.getElementById("btn-follow"),yu=document.getElementById("btn-orbit"),xu=document.getElementById("btn-alert"),qx=document.getElementById("alert-label"),jx=document.getElementById("btn-reset"),Kx=document.getElementById("inspector-close"),Zx=document.getElementById("btn-back-overview"),Mu=Array.from(document.querySelectorAll("[data-preset]")),Fe=new r_({antialias:!0,powerPreference:"high-performance"});Fe.setPixelRatio(Math.min(window.devicePixelRatio,2));Fe.setSize(window.innerWidth,window.innerHeight);Fe.toneMapping=id;Fe.toneMappingExposure=1.05;Fe.shadowMap.enabled=!0;Fe.shadowMap.type=ed;sx.appendChild(Fe.domElement);const un=new a_;un.background=new Gt(724759);function bu(){const n=window.innerWidth/Math.max(1,window.innerHeight);return n<1.55?Xt.clamp(48+(1.55-n)*24,48,64):48}const ke=new nn(bu(),window.innerWidth/window.innerHeight,.1,60),Su=new I(0,3.85,7.65),Eu=new I(0,1.85,-3.5);ke.position.copy(Su);const Me=new I_(ke,Fe.domElement);Me.target.copy(Eu);Me.enableDamping=!0;Me.dampingFactor=.065;Me.minDistance=1.2;Me.maxDistance=14;Me.minPolarAngle=.18;Me.maxPolarAngle=Math.PI/2-.03;Me.autoRotateSpeed=.55;Me.update();const Tu=new S_(15792639,15130838,1.55);un.add(Tu);const fn=new w_(16775920,1.45);fn.position.set(-3.8,5.1,4.2);fn.castShadow=!0;fn.shadow.mapSize.set(2048,2048);fn.shadow.camera.near=.5;fn.shadow.camera.far=18;fn.shadow.camera.left=-9;fn.shadow.camera.right=9;fn.shadow.camera.top=7.5;fn.shadow.camera.bottom=-7.5;fn.shadow.bias=-5e-4;un.add(fn);const nc=new Cs(16120831,.68,18,1.3);nc.position.set(-5.5,4.5,2);const ic=new Cs(16120831,.68,18,1.3);ic.position.set(5.5,4.5,2);un.add(nc,ic);const Er=new Cs(3718648,.25,12,1.5);Er.position.set(-5.4,2.8,-5.2);const Tr=new Cs(2282478,.4,15,1.4);Tr.position.set(-.3,2.8,-4.6);const wr=new Cs(3718648,.25,12,1.5);wr.position.set(5.2,2.8,-5.2);un.add(Er,Tr,wr);const ie=sy(mo[0]),Ce=Dy(ie.getState()),vo=q_(),oi=ey(vo),_o=ly(vo),ee=Cy(vo),$n=xy(vo,ee.worldPos),vs=Sy(vo);un.add(oi.group);un.add(_o.group);un.add(ee.group);un.add($n.group);un.add(vs.group);const Jx=[..._o.interactables,...ee.interactables,...$n.interactables,...vs.interactables],Pl=new Map;for(const n of[...ee.interactables,...$n.interactables])n.userData.isAgent&&!Pl.has(n.userData.stationIndex)&&Pl.set(n.userData.stationIndex,n);const Il={overview:{pos:Su.clone(),target:Eu.clone()},led:{pos:new I(-.3,2.75,.4),target:new I(-.3,2.78,-6.82)},devs:{pos:new I(-4.2,1.95,4.6),target:new I(.4,1.05,.2)},top:{pos:new I(0,5.05,6.2),target:new I(0,.8,-1.2)},mrt:{pos:new I(.65,1.9,-1.65),target:new I(0,1.38,-4.15)}};let cn=null,re=null,to=!1,Sn=!1;const ui=new Map,qh=new I,jh=new I;function Xn(n){Sn=typeof n=="boolean"?n:!Sn,vu.classList.toggle("active",Sn),Xx.classList.toggle("hidden",!Sn),Sn?(cn=null,Ls(!1),Ts(""),Me.enabled=!1):Me.enabled=!0}function lo(n,t,e=.85){cn={startPos:ke.position.clone(),endPos:n.clone(),startTarget:Me.target.clone(),endTarget:t.clone(),elapsed:0,duration:e}}function Ts(n){for(const t of Mu)t.classList.toggle("active",t.dataset.preset===n)}function Ti(n){if(Sn&&Xn(!1),Ls(!1),n==="mrt"){const e=new I,i=new I;ee.getLiveCameraView(e,i),Ts("mrt"),lo(e,i);return}const t=Il[n];t&&(Ts(n),lo(t.pos,t.target))}function Bi(n){const t=$n.deptAnchors[n];t&&(Sn&&Xn(!1),Ts(""),lo(t.focusPos,t.focusTarget,.9))}function Qx(n){const t=Pl.get(n);t&&zu(t)}Me.addEventListener("start",()=>{cn=null});let Ar=0,js=0,We=!1,or=!1;function wu(n){Tu.intensity=Xt.lerp(1.55,.26,n),fn.intensity=Xt.lerp(1.45,.18,n),nc.intensity=Xt.lerp(.68,.12,n),ic.intensity=Xt.lerp(.68,.12,n);const t=We?1.35:1,e=We?16007006:3718648;Er.color.setHex(e),Tr.color.setHex(We?16478597:2282478),wr.color.setHex(e),Er.intensity=Xt.lerp(.25,2.3*t,n),Tr.intensity=Xt.lerp(.4,3.4*t,n),wr.intensity=Xt.lerp(.25,2.3*t,n),Fe.toneMappingExposure=Xt.lerp(1.12,1.16,n),oi.setLightingMode(n),_o.setLightingMode(n),$n.setLightingMode(n)}function Au(n){Ar=n?1:0,uu.classList.toggle("active",n),Ux.textContent=n?"Ban đêm":"Ban ngày"}function Cu(){Au(!(Ar>.5))}function tM(){to=!to,_u.classList.toggle("active",to),to&&Bi(ie.getState().stageIndex)}function Ru(){or=!or,Me.autoRotate=or,yu.classList.toggle("active",or)}function Pu(n){We=!!n,xu.classList.toggle("alert-active",We),qx.textContent=We?"Cảnh báo P1":"Bình thường",gx.classList.toggle("alert",We),Sa.textContent=We?"ALERT DETECTED":"SYSTEM HEALTHY",Sa.classList.toggle("status-alert",We),Sa.classList.toggle("status-healthy",!We),re&&Is(re)}function eM(){Pu(!We)}function Rs(n){for(const t of ou)t.classList.toggle("active",t.dataset.tab===n);Tx.classList.toggle("hidden",n!=="create"),wx.classList.toggle("hidden",n!=="pipeline"),Ax.classList.toggle("hidden",n!=="agents"),Cx.classList.toggle("hidden",n!=="factory")}const yo=Gy(),nM=Xy({windowEl:fr,onApply:n=>{var t;Wx.textContent=n.brandName,_o.setBrandSign(n.brandName,n.accent),oi.setBiophilicVisible(n.showPlants),oi.applySpaceTheme(n.themeCfg),oi.applyCustomColors(n),oi.applyDecorConfig(n),vs.setEquipmentVisible(n),n.showFlycam===!1&&Sn&&Xn(!1),$n.setGlassVisible(n.showGlass),$n.setBubblesVisible(n.showBubbles),ee.setAutoWalk(n.autoWalkLeader),(t=n.themeCfg)!=null&&t.bgColor&&un.background.setHex(n.themeCfg.bgColor)},onReturnPodium:()=>{ee.returnToPodium()}});nM.init();function sc(n){const t=typeof n=="boolean"?n:fr.classList.contains("hidden");fr.classList.toggle("hidden",!t),gu.classList.toggle("active",t),t&&yo.unminimize(fr,Gx)}const co=Vy({windowEl:document.getElementById("yt-window"),onStateChange:n=>{mu.classList.toggle("active",n)}}),Te=qy({windowEl:zx,onStateChange:n=>{ms==null||ms.classList.toggle("active",n.isOpen||n.ready)},getLatestConversationTurns:()=>(Ce.getState().messages||[]).filter(t=>t.fromStation>=0).slice(-4).map(t=>({stationIndex:t.fromStation,speaker:t.fromName,text:t.text}))});Te.init();let Ll=null;const oo=[];function Ur(n){const t=typeof n=="boolean"?n:La.classList.contains("hidden");La.classList.toggle("hidden",!t),fu.classList.toggle("active",t),t&&(yo.unminimize(La,Ox),setTimeout(()=>Sr.focus(),40))}function Iu(){if(oo.length===0){Yh.innerHTML='<div class="receipt-card"><div class="receipt-mrt">Sẵn sàng nhận lệnh tối cao của bạn. Mọi chỉ đạo sẽ được thực thi ngay lập tức qua Leader MRT.</div></div>';return}Yh.innerHTML=oo.map(n=>`
      <div class="receipt-card">
        <div class="receipt-head">
          <span>★ ${n.prompt}</span>
          <span>${n.timeStr}</span>
        </div>
        <ul class="receipt-steps">${n.executedSteps.map(t=>`<li>✅ ${t}</li>`).join("")}</ul>
        <div class="receipt-mrt">🤖 ${n.mrtReply}</div>
      </div>`).join("")}function Lu(n){const t=Hy(n,{startProject:e=>{Nu(e,!0)},jumpToStage:e=>{ie.jumpToStage(e),ee.isAutoWalkEnabled()&&ee.walkToDepartment(e),$e(!0)},triggerWarranty:()=>{const e=ie.triggerWarrantyTicket();return Ce.onWarrantyTicket(e,ie.getState()),ee.isAutoWalkEnabled()&&ee.walkToDepartment(5),$e(!0),e},setSpeed:e=>{ie.setSpeed(e),$e(!0)},setPaused:e=>{ie.setPaused(e),$e(!0)},setAlertMode:e=>{Pu(e)},setNightMode:e=>{Au(e)},setFlycam:e=>{Xn(e)},openYoutube:e=>{co.open(e)},closeYoutube:()=>{co.close()},openVoice:e=>{Te.toggle(!0),Te.setAutoEnabled(!0),e&&!Te.getState().ready&&Te.startServer()},setVoiceEnabled:e=>{Te.setAutoEnabled(e)},toggleReport:e=>{xo.toggle(e)},applyPreset:e=>{Ti(e)},dispatchViaMrt:(e,i,s)=>{s!==null&&ie.getState().stageIndex!==s&&ie.jumpToStage(s);const o=Ce.broadcastDirective(e,ie.getState());return Yn(!0),o==null?void 0:o.followUp}});t&&(Ll=t,oo.unshift(t),oo.length>10&&oo.pop(),Iu(),$e(!0),Te.getState().config.autoReadSupreme&&t.mrtReply&&Te.speakAsLeader(t.mrtReply))}Ny.forEach(n=>{const t=document.createElement("button");t.type="button",t.className="supreme-chip",t.textContent=n,t.addEventListener("click",()=>Lu(n)),Fx.appendChild(t)});Iu();pu.addEventListener("submit",n=>{n.preventDefault();const t=Sr.value.trim();t&&(Sr.value="",Lu(t))});Sr.addEventListener("keydown",n=>{(n.ctrlKey||n.metaKey)&&n.key==="Enter"&&(n.preventDefault(),pu.requestSubmit())});fu.addEventListener("click",()=>Ur());Bx.addEventListener("click",()=>Ur());kx.addEventListener("click",()=>Ur(!1));function Oi(n){const t=typeof n=="boolean"?n:Ea.classList.contains("hidden");Ea.classList.toggle("hidden",!t),t&&yo.unminimize(Ea,yx)}function Du(n){ru.value=n.name,au.value=n.description,lu.value=String(n.warrantyMonths);const t=Rl.querySelectorAll('input[name="platform"]');for(const e of t)e.checked=n.platforms.includes(e.value)}mo.forEach(n=>{const t=document.createElement("button");t.type="button",t.className="tpl-chip",t.textContent=n.label,t.addEventListener("click",()=>Du(n)),Px.appendChild(t)});Du(mo[0]);const iM=Ae.map((n,t)=>{const e=document.createElement("button");return e.type="button",e.className="pipe-step",e.style.setProperty("--step-color",n.color),e.innerHTML=`<span>${n.shortName}</span><div class="pipe-progress"><div class="pipe-progress-fill"></div></div>`,e.addEventListener("click",()=>{ie.jumpToStage(t),ee.isAutoWalkEnabled()&&ee.walkToDepartment(t),Bi(t),$e(!0)}),_x.appendChild(e),{btn:e,fill:e.querySelector(".pipe-progress-fill")}});let Kh="",Zh="";function Yn(n=!1){const t=Ce.getState(),e=t.latestMessage;e&&(Nx.textContent=`${e.fromName} → ${e.toName}: "${e.text}"`);const i=(e==null?void 0:e.id)||"";if(!(!n&&i===Zh)){Zh=i,$h.innerHTML=t.messages.slice().reverse().map(s=>{const o=s.fromStation>=0?`<button type="button" data-focus-station="${s.fromStation}">${s.fromName}</button>`:s.fromName,r=s.toStation>=0?`<button type="button" data-focus-station="${s.toStation}">${s.toName}</button>`:s.toName;return`
        <div class="feed-msg" style="--msg-color: ${s.fromColor||"#38bdf8"}">
          <div class="feed-msg-head">
            <span class="feed-route">${o} → ${r}</span>
            <span class="feed-time">${s.timeStr}</span>
          </div>
          <div class="feed-text">${s.text}</div>
        </div>`}).join("");for(const s of $h.querySelectorAll("[data-focus-station]"))s.addEventListener("click",()=>{Qx(Number(s.dataset.focusStation))})}}function $e(n=!1){const t=ie.getState();px.textContent=`${t.project.name} (${t.project.platformLabels.join(" + ")})`,mx.textContent=t.version,Ae.forEach((i,s)=>{const o=iM[s],r=t.stageStatus[s];o.btn.classList.toggle("active",r==="active"),o.btn.classList.toggle("done",r==="done");const a=r==="done"?100:r==="active"?Math.round(t.stageProgress*100):0;o.fill.style.width=`${a}%`}),Yn(n),xo.update(t,Ce.getState(),We);const e=`${t.project.slug}:${t.stageIndex}:${t.version}:${t.paused}:${t.speed}:${t.warrantyTickets.length}`;if(!(!n&&e===Kh)){Kh=e,cu.textContent=t.paused?"Tiếp tục":"Tạm dừng";for(const i of hu)i.classList.toggle("active",Number(i.dataset.speed)===t.speed);Wh.innerHTML=t.project.stageDetails.map((i,s)=>{const o=t.stageStatus[s],r=Ae[s],a=o==="done"?"HOÀN TẤT":o==="active"?"ĐANG CHẠY":"CHỜ",l=i.deliverables.slice(0,3).map(c=>`<li>${c}</li>`).join("");return`
        <div class="stage-card ${o}" data-stage-idx="${s}">
          <div class="stage-card-head">
            <span>${r.name}</span>
            <span class="stage-card-status">${a}</span>
          </div>
          <div class="stage-card-summary">${i.summary}</div>
          <ul class="stage-deliverables">${l}</ul>
        </div>`}).join("");for(const i of Wh.querySelectorAll(".stage-card"))i.addEventListener("click",()=>{const s=Number(i.dataset.stageIdx);ie.jumpToStage(s),ee.isAutoWalkEnabled()&&ee.walkToDepartment(s),Bi(s),$e(!0)});Lx.innerHTML=t.artifacts.map(i=>`
      <div class="artifact-item ${i.ready?"ready":""}">
        <span>${i.name}</span>
        <span>${i.ready?"SẴN SÀNG":"CHỜ"}</span>
      </div>`).join("")}}function Nu(n,t=!1){const e=ie.startProject(n);ie.setPaused(!1),Ce.resetForProject(e),yo.unminimize(vx,document.getElementById("btn-min-pipeline")),ee.isAutoWalkEnabled()&&ee.walkToDepartment(0),Oi(!0),Rs("factory"),kh&&(kh.checked=!0),$e(!0),t||Bi(0),rM(n)}Rl.addEventListener("submit",n=>{n.preventDefault();const t=Array.from(Rl.querySelectorAll('input[name="platform"]:checked')).map(e=>e.value);t.length===0&&t.push("android"),Nu({name:ru.value,platforms:t,description:au.value,warrantyMonths:Number(lu.value)})});let Jt=null,ri=[];const xo=Jy({windowEl:Hx,onStateChange:n=>{gs==null||gs.classList.toggle("active",n)},onSelectDepartment:n=>{Bi(n),ee.isAutoWalkEnabled()&&ee.walkToDepartment(n)},onSpeakReport:n=>{Te.speakAsLeader(n,!0)},getRealProjects:()=>ri});xo.init();function Pe(n){const t=Array.isArray(n)?n:[n],e=qs.textContent==="Sẵn sàng ghi mã nguồn ra ổ cứng & biên dịch..."?"":qs.textContent+`
`;qs.textContent=(e+t.join(`
`)).split(`
`).slice(-40).join(`
`),qs.scrollTop=qs.scrollHeight}async function sM(n,t){if(n)try{if(await navigator.clipboard.writeText(n),t){const e=t.textContent;t.textContent="✓ Đã copy",setTimeout(()=>{t.textContent=e},1500)}}catch{Pe(`[COPY] Đường dẫn: ${n}`)}}async function oM(n,t,e){if(t==="web"&&e){const i=`${window.location.origin}${e}`;window.open(i,"_blank","noopener"),Pe(`[TEST WEB] Đã mở bản chạy thử tại ${i}`);return}try{Pe(`[TEST ${t.toUpperCase()}] Đang mở bản dựng để kiểm thử...`);const i=await ix({slug:n,platform:t});Pe(`[TEST] ${i.message}`),i.action==="open_url"&&i.testUrl&&window.open(`${window.location.origin}${i.testUrl}`,"_blank","noopener")}catch(i){Pe(`[LỖI TEST] ${i.message}`)}}function Uu(n,t,e="build-out-card"){const i=t.sizeBytes>0?`${Math.round(t.sizeBytes/1024)} KB`:t.status,s=t.platform==="web"&&t.testUrl?`${window.location.origin}${t.testUrl}`:"",o=s||t.fullPath||t.file,r=t.platform==="web"?"🌐 Mở Web Test":t.platform==="windows"?"▶ Chạy thử .EXE":"📱 Mở / Cài APK";return`
    <div class="${e}">
      <div class="build-out-head">
        <span>${t.platform.toUpperCase()} • ${t.status}</span>
        <span>${i}</span>
      </div>
      <div class="build-out-path">${t.fullPath||t.file}</div>
      ${s?`<a class="build-out-url" href="${s}" target="_blank" rel="noopener">${s}</a>`:""}
      <div class="build-out-actions">
        <button type="button" class="mini-ctrl-btn send-btn" data-test-slug="${n}" data-test-plat="${t.platform}" data-test-url="${t.testUrl||""}">${r}</button>
        <button type="button" class="mini-ctrl-btn" data-copy-path="${o}">📋 Copy đường dẫn</button>
        ${t.testUrl&&t.platform!=="web"?`<a class="mini-ctrl-btn" href="${t.testUrl}" download>⬇ Tải về</a>`:""}
      </div>
    </div>
  `}function Bu(n){if(n){for(const t of n.querySelectorAll("[data-test-slug]"))t.addEventListener("click",()=>{oM(t.dataset.testSlug,t.dataset.testPlat,t.dataset.testUrl)});for(const t of n.querySelectorAll("[data-copy-path]"))t.addEventListener("click",()=>{sM(t.dataset.copyPath,t)})}}let Ou="";function Dl(n,t){var o;if(!ps||!n)return;const e=!!n.ok,i=n.slug||"";Ou=i,ps.classList.toggle("toast-err",!e),Hh&&(Hh.textContent=e?"✅ BUILD HOÀN TẤT":"⚠ BUILD CÓ LỖI"),Gh&&(Gh.textContent=t||((o=n.meta)==null?void 0:o.name)||i),Vh&&(Vh.textContent=e?`Đã đóng gói xong tại ${n.projectDir}. Chọn nền tảng bên dưới để chạy test hoặc copy đường dẫn:`:"Quá trình build gặp cảnh báo/lỗi. Mở Xưởng Thật để xem chi tiết log.");const s=n.outputs||[];if(Ca&&(Ca.innerHTML=s.length>0?s.map(r=>Uu(i,r,"build-out-card")).join(""):`<div class="build-out-path">${n.projectDir||""}</div>`,Bu(Ca)),ps.classList.remove("hidden"),e&&Te.getState().ready){const r=s.map(a=>a.platform).join(" và ");Te.speakAsLeader(`Đã build hoàn tất phần mềm ${t||i} cho ${r}. Sếp có thể bấm chạy test hoặc mở đường dẫn ngay trên màn hình.`,!1)}}Ra==null||Ra.addEventListener("click",()=>{ps==null||ps.classList.add("hidden")});Pa==null||Pa.addEventListener("click",async()=>{const n=Ou||(Jt==null?void 0:Jt.slug);if(n)try{await nu(n)}catch(t){Pe(`[LỖI] ${t.message}`)}});Ia==null||Ia.addEventListener("click",()=>{Oi(!0),Rs("factory"),Ps()});function Mo(){if(!Jt){Ta.innerHTML='<div class="factory-card-title">Chưa chọn dự án trên ổ cứng</div><div class="factory-card-path">Tạo dự án mới ở tab "Tạo Dự Án" hoặc chọn bên dưới.</div>';return}const n=(Jt.outputs||[]).map(e=>Uu(Jt.slug,e,"factory-out-row")).join(""),t=Jt.githubUrl?`<a class="factory-gh-link" href="${Jt.githubUrl}" target="_blank" rel="noopener">GitHub: ${Jt.githubUrl}</a>`:"";Ta.innerHTML=`
    <div class="factory-card-title">${Jt.name}</div>
    <div class="factory-card-path">${Jt.projectDir||""}</div>
    ${n||'<div class="factory-card-outputs">Mã nguồn đã sẵn sàng — bấm ⚡ Build Thật</div>'}
    ${t}
  `,Bu(Ta)}function ku(){if(ri.length===0){Aa.innerHTML='<div class="factory-card-path">Chưa có dự án nào trong projects/</div>';return}Aa.innerHTML=ri.map(n=>`
      <button type="button" class="factory-proj-item ${(Jt==null?void 0:Jt.slug)===n.slug?"active":""}" data-real-slug="${n.slug}">
        <strong>${n.name}</strong> (${(n.platforms||[]).join(", ")})
      </button>`).join("");for(const n of Aa.querySelectorAll("[data-real-slug]"))n.addEventListener("click",()=>{const t=ri.find(e=>e.slug===n.dataset.realSlug);t&&(Jt=t,Mo(),ku())})}async function Ps(){var n,t,e,i,s,o,r;try{const[a,l]=await Promise.all([Qy(),tx()]),c=[[".NET "+(((n=a.dotnet)==null?void 0:n.version)||""),(t=a.dotnet)==null?void 0:t.ok],["Android SDK",(e=a.androidSdk)==null?void 0:e.ok],[(i=a.github)!=null&&i.user?`GH: ${a.github.user}`:"GitHub CLI",(s=a.github)==null?void 0:s.ok],["Node "+(((o=a.node)==null?void 0:o.version)||""),(r=a.node)==null?void 0:r.ok]];if(Fh.innerHTML=c.map(([h,d])=>`<span class="tool-pill ${d?"":"off"}">${d?"✓":"✕"} ${h}</span>`).join(""),ri=l.projects||[],Jt!=null&&Jt.slug){const h=ri.find(d=>d.slug===Jt.slug);h&&(Jt=h)}else ri.length>0&&(Jt=ri[0]);Mo(),ku()}catch(a){Fh.innerHTML=`<span class="tool-pill off">Factory API offline: ${a.message}</span>`}}async function rM(n){const t=si.textContent;try{si.disabled=!0,si.textContent="⏳ Đang Build Thật...",Pe(`[FACTORY] Đang tiếp nhận yêu cầu & khởi tạo mã nguồn thật cho "${n.name}"...`);const e=await ex(n);Pe(e.logs),Jt={...e.meta,projectDir:e.projectDir},Mo(),ie.jumpToStage(1),ee.isAutoWalkEnabled()&&ee.walkToDepartment(1),$e(!0),Pe("[FACTORY] Chuyển sang Phòng Xây dựng — Đang biên dịch thật trên máy..."),ie.jumpToStage(2),ee.isAutoWalkEnabled()&&ee.walkToDepartment(2),$e(!0);const i=await eu(e.slug);Pe(i.logs),Jt={...i.meta,projectDir:i.projectDir},i.ok&&(ie.jumpToStage(4),ee.isAutoWalkEnabled()&&ee.walkToDepartment(4)),Ce.broadcastDirective(`Đã tạo & build thật "${n.name}" lưu tại ${i.projectDir} (${i.outputs.map(s=>s.file).join(", ")})`,ie.getState()),Yn(!0),$e(!0),await Ps(),Dl(i,n.name)}catch(e){Pe(`[LỖI] ${e.message}`),Dl({ok:!1,slug:n.name,projectDir:"",outputs:[]},n.name)}finally{si.disabled=!1,si.textContent=t}}si.addEventListener("click",async()=>{if(Jt)try{si.disabled=!0,Pe(`[BUILD] Đang build lại ${Jt.slug}...`);const n=await eu(Jt.slug);Pe(n.logs),Jt={...n.meta,projectDir:n.projectDir},Mo(),await Ps(),Dl(n,Jt.name)}catch(n){Pe(`[LỖI BUILD] ${n.message}`)}finally{si.disabled=!1}});Rx.addEventListener("click",async()=>{if(Jt)try{const n=await nu(Jt.slug);Pe(`[EXPLORER] Đã mở thư mục: ${n.projectDir}`)}catch(n){Pe(`[LỖI] ${n.message}`)}});wa.addEventListener("click",async()=>{if(Jt)try{wa.disabled=!0,Pe(`[GITHUB] Đang đẩy "${Jt.slug}" lên GitHub (${zh.value})...`);const n=await nx({slug:Jt.slug,visibility:zh.value});Pe(n.logs),Jt={...n.meta,projectDir:Jt.projectDir},Mo(),Ce.broadcastDirective(`Đã đẩy dự án "${Jt.name}" lên GitHub: ${n.githubUrl||"thành công"}`,ie.getState()),Yn(!0),await Ps()}catch(n){Pe(`[LỖI GITHUB] ${n.message}`)}finally{wa.disabled=!1}});Ex.addEventListener("click",()=>{Oi(!0),Rs("factory"),Ps()});Ps();Dx.addEventListener("submit",n=>{n.preventDefault();const t=Xh.value.trim();if(!t)return;const e=ie.getState();Ce.broadcastDirective(t,e),ee.isAutoWalkEnabled()&&ee.walkToDepartment(e.stageIndex),Xh.value="",Yn(!0)});Mx.addEventListener("click",()=>Oi());bx.addEventListener("click",()=>Oi(!1));Sx.addEventListener("click",()=>{du.classList.remove("hidden"),Oi(!0),Rs("agents"),Yn(!0)});du.addEventListener("click",n=>{n.target.closest("#btn-close-ticker")||(Oi(!0),Rs("agents"),Yn(!0))});for(const n of ou)n.addEventListener("click",()=>Rs(n.dataset.tab));cu.addEventListener("click",()=>{const n=ie.getState().paused;ie.setPaused(!n),$e(!0)});for(const n of hu)n.addEventListener("click",()=>{ie.setSpeed(Number(n.dataset.speed)),$e(!0)});Ix.addEventListener("click",()=>{const n=ie.triggerWarrantyTicket();Ce.onWarrantyTicket(n,ie.getState()),ee.isAutoWalkEnabled()&&ee.walkToDepartment(5),$e(!0),Bi(5)});function oc(n){const t=ui.get(n)||[];ba.innerHTML=t.map(e=>`<div class="chat-bubble ${e.who}">${e.text}</div>`).join(""),ba.scrollTop=ba.scrollHeight}function Fu(n){if(!re||!re.userData.isAgent)return;const t=re.userData.stationIndex,e=Ce.askAgent(t,n,ie.getState()),i=ui.get(t)||[];i.push({who:"user",text:n}),i.push({who:"agent",text:e.reply}),ui.set(t,i.slice(-10)),oc(t),Yn(!0),Te.getState().config.autoReadAgent&&(e!=null&&e.reply)&&Te.speakAsStation(t,e.reply)}Da==null||Da.addEventListener("click",()=>{if(!re||!re.userData.isAgent)return;const n=re.userData.stationIndex,e=[...ui.get(n)||[]].reverse().find(o=>o.who==="agent"),i=Ce.getAgentStatus(n,ie.getState()),s=(e==null?void 0:e.text)||i.currentAction;Te.speakAsStation(n,s,!0)});Na==null||Na.addEventListener("click",()=>{if(!re||!re.userData.isAgent)return;const n=re.userData.stationIndex,t=Ce.runAgentTask(n,ie.getState()),e=ui.get(n)||[];e.push({who:"agent",text:t.report}),ui.set(n,e.slice(-10)),oc(n),Yn(!0),Is(re),Te.speakAsStation(n,t.speechText,!0)});function aM(n){const t=Je(n);if(sr&&(sr.classList.remove("male","female"),sr.classList.add(t.gender),sr.textContent=t.gender==="female"?"♀ Nữ":"♂ Nam"),rs&&(rs.innerHTML=Nr.map(e=>`<option value="${e.id}" ${e.id===t.modelId?"selected":""}>${e.name}</option>`).join("")),as){const e=Te.getAvailableVoices(),i=ec(e,t.gender),s=ur(n,e);as.innerHTML=i.length>0?i.map(o=>`<option value="${o.id}" ${o.id===s?"selected":""}>${o.name||o.id} (${t.genderLabel})</option>`).join(""):`<option value="${t.voiceId}" selected>${t.voiceId} (${t.genderLabel})</option>`}}rs==null||rs.addEventListener("change",()=>{!re||!re.userData.isAgent||(xr(re.userData.stationIndex,{modelId:rs.value}),Is(re))});as==null||as.addEventListener("change",()=>{!re||!re.userData.isAgent||(xr(re.userData.stationIndex,{voiceId:as.value}),Is(re))});qd(()=>{re!=null&&re.userData.isAgent&&!br.classList.contains("hidden")&&Is(re)});for(const n of ux)n.addEventListener("click",()=>{Fu(n.dataset.q)});dx.addEventListener("submit",n=>{n.preventDefault();const t=Oh.value.trim();t&&(Oh.value="",Fu(t))});function Is(n){const t=n.userData,e=ie.getState();ox.textContent=t.kind,rx.textContent=t.title,ax.textContent=t.role,cx.textContent=t.desc;const i=t.getMetrics(We,e,Ce);if(lx.innerHTML=i.map(s=>`
      <div class="metric-card">
        <div class="metric-label">${s.label}</div>
        <div class="metric-value ${s.tone}">${s.value}</div>
      </div>`).join(""),t.isAgent){const s=Ce.getAgentStatus(t.stationIndex,e);iu.textContent=s.currentAction,su.textContent=s.concreteMission||s.assignedTask,hx.textContent=s.workingWith,aM(t.stationIndex),Bh.classList.remove("hidden"),ui.has(t.stationIndex)||ui.set(t.stationIndex,[{who:"agent",text:`Xin chào! Mình là ${s.name} (${s.code} • ${s.modelName}). Hiện mình ${s.currentAction.toLowerCase()}.`}]),oc(t.stationIndex)}else Bh.classList.add("hidden");t.canvas&&(Cl.clearRect(0,0,Ci.width,Ci.height),Cl.drawImage(t.canvas,0,0,Ci.width,Ci.height))}function zu(n){if(n.userData.isFlycam){Xn(!0);return}Sn&&Xn(!1),re=n,Mi.classList.add("hidden"),Is(n),br.classList.remove("hidden"),yo.unminimize(br,xx),Ts(""),lo(n.userData.focusPos,n.userData.focusTarget,.85)}function Ls(n=!0){re=null,br.classList.add("hidden"),n&&(Sn&&Xn(!1),Ts("overview"),lo(Il.overview.pos,Il.overview.target,.85))}const Jh=new C_,Ua=new Et;let Nl={x:0,y:0},Cr=null;function Hu(n,t){const e=Fe.domElement.getBoundingClientRect();Ua.x=(n-e.left)/e.width*2-1,Ua.y=-((t-e.top)/e.height)*2+1,Jh.setFromCamera(Ua,ke);const i=Jh.intersectObjects(Jx,!1);if(i.length>0){const s=i[0].object;if(Cr=s,Fe.domElement.style.cursor="pointer",s.userData.isAgent){const o=Ce.getAgentStatus(s.userData.stationIndex,ie.getState());Mi.innerHTML=`${s.userData.title}<small>${o.currentAction}</small>`}else Mi.innerHTML=`${s.userData.title}<small>${s.userData.kind} • Bấm để phóng to</small>`;Mi.style.left=`${n}px`,Mi.style.top=`${t}px`,Mi.classList.remove("hidden")}else Cr=null,Fe.domElement.style.cursor="grab",Mi.classList.add("hidden")}Fe.domElement.addEventListener("pointermove",n=>{Hu(n.clientX,n.clientY)});Fe.domElement.addEventListener("pointerdown",n=>{Nl={x:n.clientX,y:n.clientY}});Fe.domElement.addEventListener("pointerup",n=>{Math.hypot(n.clientX-Nl.x,n.clientY-Nl.y)>5||(Hu(n.clientX,n.clientY),Cr&&zu(Cr))});for(const n of Mu)n.addEventListener("click",()=>Ti(n.dataset.preset));uu.addEventListener("click",Cu);gu.addEventListener("click",()=>sc());Vx.addEventListener("click",()=>sc(!1));mu.addEventListener("click",()=>co.toggle());ms==null||ms.addEventListener("click",()=>Te.toggle());gs==null||gs.addEventListener("click",()=>xo.toggle());$x.addEventListener("click",()=>co.open());vu.addEventListener("click",()=>Xn());_u.addEventListener("click",tM);yu.addEventListener("click",Ru);xu.addEventListener("click",eM);jx.addEventListener("click",()=>Ls(!0));Kx.addEventListener("click",()=>Ls(!0));Zx.addEventListener("click",()=>Ls(!0));window.addEventListener("keydown",n=>{var e;const t=(e=document.activeElement)==null?void 0:e.tagName;if(t==="INPUT"||t==="TEXTAREA"||t==="SELECT"){n.key==="Escape"&&document.activeElement.blur();return}n.key==="1"?Ti("overview"):n.key==="2"?Ti("led"):n.key==="3"?Ti("devs"):n.key==="4"?Ti("top"):n.key.toLowerCase()==="m"?Ti("mrt"):n.key.toLowerCase()==="p"?Ur():n.key.toLowerCase()==="t"?sc():n.key.toLowerCase()==="y"?co.toggle():n.key.toLowerCase()==="v"?Te.toggle():n.key.toLowerCase()==="r"?xo.toggle():n.key.toLowerCase()==="f"?Xn():n.key.toLowerCase()==="n"?Cu():n.code==="Space"?(n.preventDefault(),Ru()):n.key==="Escape"&&Ls(!0)});window.addEventListener("resize",()=>{ke.fov=bu(),ke.aspect=window.innerWidth/window.innerHeight,ke.updateProjectionMatrix(),Fe.setSize(window.innerWidth,window.innerHeight)});const Qh=new A_;let Ba=0,Oa=0;function lM(n){return n<.5?4*n*n*n:1-Math.pow(-2*n+2,3)/2}function Gu(){requestAnimationFrame(Gu);const n=Math.min(Qh.getDelta(),.1),t=Qh.getElapsedTime(),e=ie.update(n),i=ie.getState();Ce.update(n,i,e);const s=Ce.getState();if(e&&(ee.isAutoWalkEnabled()&&ee.walkToDepartment(i.stageIndex),to&&!re&&Bi(i.stageIndex),Te.getState().config.autoReadStage&&Te.speakAsLeader(`Chuyển sang giai đoạn ${i.stageIndex+1}: ${i.currentDept.name}.`)),Math.abs(js-Ar)>.001&&(js=Xt.lerp(js,Ar,Math.min(1,n*5.5)),wu(js)),Sn){vs.getFlycamView(qh,jh),ke.position.lerp(qh,Math.min(1,n*8)),Me.target.lerp(jh,Math.min(1,n*6)),ke.lookAt(Me.target);const r=vs.getTelemetry();Yx.textContent=`REC • FLYCAM-01 • ALT ${r.y}m • ${i.currentDept.shortName.toUpperCase()} • MRT SOFT HUB`}else{if(cn){cn.elapsed+=n;const r=Math.min(1,cn.elapsed/cn.duration),a=lM(r);ke.position.lerpVectors(cn.startPos,cn.endPos,a),Me.target.lerpVectors(cn.startTarget,cn.endTarget,a),r>=1&&(cn=null)}Me.update(),ke.position.x=Xt.clamp(ke.position.x,-8.3,8.3),ke.position.y=Xt.clamp(ke.position.y,.7,5.05),ke.position.z=Xt.clamp(ke.position.z,-6.3,7.65),Me.target.x=Xt.clamp(Me.target.x,-7.8,7.8),Me.target.y=Xt.clamp(Me.target.y,.3,4.4),Me.target.z=Xt.clamp(Me.target.z,-6.85,6.5)}const o=new Date;if(oi.updateClocks(o),oi.updateDecor(t),fx.textContent=o.toLocaleTimeString("vi-VN",{hour12:!1}),_o.update(t,n,We,i,s,Ll),ee.update(t,n,We,i,s,$n.deptAnchors,Ll),$n.update(t,n,We,i,s,Ce),vs.update(t,n,i,js),Oa+=n,(Oa>=.25||e)&&(Oa=0,$e(e)),re&&(Ba+=n,Ba>=.35)){Ba=0;const r=re.userData.canvas;if(r&&Cl.drawImage(r,0,0,Ci.width,Ci.height),re.userData.isAgent){const a=Ce.getAgentStatus(re.userData.stationIndex,i);iu.textContent=a.currentAction,su.textContent=a.assignedTask}}Fe.render(un,ke)}$e(!0);wu(0);ee.isAutoWalkEnabled()&&ee.walkToDepartment(0);Gu();
