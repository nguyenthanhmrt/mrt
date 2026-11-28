(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const r of o.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&i(r)}).observe(document,{childList:!0,subtree:!0});function t(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerPolicy&&(o.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?o.credentials="include":s.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(s){if(s.ep)return;s.ep=!0;const o=t(s);fetch(s.href,o)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const hc="170",ws={ROTATE:0,DOLLY:1,PAN:2},ys={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Rf=0,Gc=1,Pf=2,Nd=1,Ud=2,Xn=3,_i=0,tn=1,ln=2,gi=0,Ts=1,cl=2,Vc=3,Wc=4,Lf=5,Di=100,If=101,Df=102,Nf=103,Uf=104,kf=200,Bf=201,Of=202,Ff=203,hl=204,dl=205,zf=206,Hf=207,Gf=208,Vf=209,Wf=210,$f=211,Xf=212,Yf=213,qf=214,ul=0,fl=1,pl=2,ks=3,ml=4,gl=5,vl=6,_l=7,kd=0,jf=1,Kf=2,vi=0,Zf=1,Jf=2,Qf=3,Bd=4,ep=5,tp=6,np=7,Od=300,Bs=301,Os=302,yl=303,xl=304,Xr=306,cn=1e3,ki=1001,Ml=1002,Cn=1003,ip=1004,Go=1005,Dn=1006,na=1007,Bi=1008,Jn=1009,Fd=1010,zd=1011,Eo=1012,dc=1013,Fi=1014,Yn=1015,Lo=1016,uc=1017,fc=1018,Fs=1020,Hd=35902,Gd=1021,Vd=1022,An=1023,Wd=1024,$d=1025,As=1026,zs=1027,Xd=1028,pc=1029,Yd=1030,mc=1031,gc=1033,Er=33776,wr=33777,Tr=33778,Ar=33779,bl=35840,Sl=35841,El=35842,wl=35843,Tl=36196,Al=37492,Cl=37496,Rl=37808,Pl=37809,Ll=37810,Il=37811,Dl=37812,Nl=37813,Ul=37814,kl=37815,Bl=37816,Ol=37817,Fl=37818,zl=37819,Hl=37820,Gl=37821,Cr=36492,Vl=36494,Wl=36495,qd=36283,$l=36284,Xl=36285,Yl=36286,sp=3200,op=3201,jd=0,rp=1,di="",mt="srgb",Ws="srgb-linear",Yr="linear",ft="srgb",Qi=7680,$c=519,ap=512,lp=513,cp=514,Kd=515,hp=516,dp=517,up=518,fp=519,ql=35044,Xc="300 es",qn=2e3,Ir=2001;class Xi{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const s=this._listeners[e];if(s!==void 0){const o=s.indexOf(t);o!==-1&&s.splice(o,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const s=i.slice(0);for(let o=0,r=s.length;o<r;o++)s[o].call(this,e);e.target=null}}}const Wt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Yc=1234567;const _o=Math.PI/180,wo=180/Math.PI;function Un(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Wt[n&255]+Wt[n>>8&255]+Wt[n>>16&255]+Wt[n>>24&255]+"-"+Wt[e&255]+Wt[e>>8&255]+"-"+Wt[e>>16&15|64]+Wt[e>>24&255]+"-"+Wt[t&63|128]+Wt[t>>8&255]+"-"+Wt[t>>16&255]+Wt[t>>24&255]+Wt[i&255]+Wt[i>>8&255]+Wt[i>>16&255]+Wt[i>>24&255]).toLowerCase()}function Rt(n,e,t){return Math.max(e,Math.min(t,n))}function vc(n,e){return(n%e+e)%e}function pp(n,e,t,i,s){return i+(n-e)*(s-i)/(t-e)}function mp(n,e,t){return n!==e?(t-n)/(e-n):0}function yo(n,e,t){return(1-t)*n+t*e}function gp(n,e,t,i){return yo(n,e,1-Math.exp(-t*i))}function vp(n,e=1){return e-Math.abs(vc(n,e*2)-e)}function _p(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function yp(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function xp(n,e){return n+Math.floor(Math.random()*(e-n+1))}function Mp(n,e){return n+Math.random()*(e-n)}function bp(n){return n*(.5-Math.random())}function Sp(n){n!==void 0&&(Yc=n);let e=Yc+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Ep(n){return n*_o}function wp(n){return n*wo}function Tp(n){return(n&n-1)===0&&n!==0}function Ap(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function Cp(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function Rp(n,e,t,i,s){const o=Math.cos,r=Math.sin,a=o(t/2),l=r(t/2),c=o((e+i)/2),h=r((e+i)/2),d=o((e-i)/2),u=r((e-i)/2),f=o((i-e)/2),v=r((i-e)/2);switch(s){case"XYX":n.set(a*h,l*d,l*u,a*c);break;case"YZY":n.set(l*u,a*h,l*d,a*c);break;case"ZXZ":n.set(l*d,l*u,a*h,a*c);break;case"XZX":n.set(a*h,l*v,l*f,a*c);break;case"YXY":n.set(l*f,a*h,l*v,a*c);break;case"ZYZ":n.set(l*v,l*f,a*h,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function En(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function dt(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const qe={DEG2RAD:_o,RAD2DEG:wo,generateUUID:Un,clamp:Rt,euclideanModulo:vc,mapLinear:pp,inverseLerp:mp,lerp:yo,damp:gp,pingpong:vp,smoothstep:_p,smootherstep:yp,randInt:xp,randFloat:Mp,randFloatSpread:bp,seededRandom:Sp,degToRad:Ep,radToDeg:wp,isPowerOfTwo:Tp,ceilPowerOfTwo:Ap,floorPowerOfTwo:Cp,setQuaternionFromProperEuler:Rp,normalize:dt,denormalize:En};class Re{constructor(e=0,t=0){Re.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6],this.y=s[1]*t+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Rt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),s=Math.sin(t),o=this.x-e.x,r=this.y-e.y;return this.x=o*i-r*s+e.x,this.y=o*s+r*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Je{constructor(e,t,i,s,o,r,a,l,c){Je.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,s,o,r,a,l,c)}set(e,t,i,s,o,r,a,l,c){const h=this.elements;return h[0]=e,h[1]=s,h[2]=a,h[3]=t,h[4]=o,h[5]=l,h[6]=i,h[7]=r,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,o=this.elements,r=i[0],a=i[3],l=i[6],c=i[1],h=i[4],d=i[7],u=i[2],f=i[5],v=i[8],_=s[0],m=s[3],p=s[6],x=s[1],y=s[4],g=s[7],b=s[2],w=s[5],T=s[8];return o[0]=r*_+a*x+l*b,o[3]=r*m+a*y+l*w,o[6]=r*p+a*g+l*T,o[1]=c*_+h*x+d*b,o[4]=c*m+h*y+d*w,o[7]=c*p+h*g+d*T,o[2]=u*_+f*x+v*b,o[5]=u*m+f*y+v*w,o[8]=u*p+f*g+v*T,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],s=e[2],o=e[3],r=e[4],a=e[5],l=e[6],c=e[7],h=e[8];return t*r*h-t*a*c-i*o*h+i*a*l+s*o*c-s*r*l}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],o=e[3],r=e[4],a=e[5],l=e[6],c=e[7],h=e[8],d=h*r-a*c,u=a*l-h*o,f=c*o-r*l,v=t*d+i*u+s*f;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/v;return e[0]=d*_,e[1]=(s*c-h*i)*_,e[2]=(a*i-s*r)*_,e[3]=u*_,e[4]=(h*t-s*l)*_,e[5]=(s*o-a*t)*_,e[6]=f*_,e[7]=(i*l-c*t)*_,e[8]=(r*t-i*o)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,s,o,r,a){const l=Math.cos(o),c=Math.sin(o);return this.set(i*l,i*c,-i*(l*r+c*a)+r+e,-s*c,s*l,-s*(-c*r+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(ia.makeScale(e,t)),this}rotate(e){return this.premultiply(ia.makeRotation(-e)),this}translate(e,t){return this.premultiply(ia.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<9;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const ia=new Je;function Zd(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function Dr(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Pp(){const n=Dr("canvas");return n.style.display="block",n}const qc={};function fo(n){n in qc||(qc[n]=!0,console.warn(n))}function Lp(n,e,t){return new Promise(function(i,s){function o(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(o,t);break;default:i()}}setTimeout(o,t)})}function Ip(n){const e=n.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function Dp(n){const e=n.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const st={enabled:!0,workingColorSpace:Ws,spaces:{},convert:function(n,e,t){return this.enabled===!1||e===t||!e||!t||(this.spaces[e].transfer===ft&&(n.r=jn(n.r),n.g=jn(n.g),n.b=jn(n.b)),this.spaces[e].primaries!==this.spaces[t].primaries&&(n.applyMatrix3(this.spaces[e].toXYZ),n.applyMatrix3(this.spaces[t].fromXYZ)),this.spaces[t].transfer===ft&&(n.r=Cs(n.r),n.g=Cs(n.g),n.b=Cs(n.b))),n},fromWorkingColorSpace:function(n,e){return this.convert(n,this.workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this.workingColorSpace)},getPrimaries:function(n){return this.spaces[n].primaries},getTransfer:function(n){return n===di?Yr:this.spaces[n].transfer},getLuminanceCoefficients:function(n,e=this.workingColorSpace){return n.fromArray(this.spaces[e].luminanceCoefficients)},define:function(n){Object.assign(this.spaces,n)},_getMatrix:function(n,e,t){return n.copy(this.spaces[e].toXYZ).multiply(this.spaces[t].fromXYZ)},_getDrawingBufferColorSpace:function(n){return this.spaces[n].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(n=this.workingColorSpace){return this.spaces[n].workingColorSpaceConfig.unpackColorSpace}};function jn(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Cs(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}const jc=[.64,.33,.3,.6,.15,.06],Kc=[.2126,.7152,.0722],Zc=[.3127,.329],Jc=new Je().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Qc=new Je().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);st.define({[Ws]:{primaries:jc,whitePoint:Zc,transfer:Yr,toXYZ:Jc,fromXYZ:Qc,luminanceCoefficients:Kc,workingColorSpaceConfig:{unpackColorSpace:mt},outputColorSpaceConfig:{drawingBufferColorSpace:mt}},[mt]:{primaries:jc,whitePoint:Zc,transfer:ft,toXYZ:Jc,fromXYZ:Qc,luminanceCoefficients:Kc,outputColorSpaceConfig:{drawingBufferColorSpace:mt}}});let es;class Np{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{es===void 0&&(es=Dr("canvas")),es.width=e.width,es.height=e.height;const i=es.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=es}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Dr("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const s=i.getImageData(0,0,e.width,e.height),o=s.data;for(let r=0;r<o.length;r++)o[r]=jn(o[r]/255)*255;return i.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(jn(t[i]/255)*255):t[i]=jn(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Up=0;class Jd{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Up++}),this.uuid=Un(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let o;if(Array.isArray(s)){o=[];for(let r=0,a=s.length;r<a;r++)s[r].isDataTexture?o.push(sa(s[r].image)):o.push(sa(s[r]))}else o=sa(s);i.url=o}return t||(e.images[this.uuid]=i),i}}function sa(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Np.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let kp=0;class Zt extends Xi{constructor(e=Zt.DEFAULT_IMAGE,t=Zt.DEFAULT_MAPPING,i=ki,s=ki,o=Dn,r=Bi,a=An,l=Jn,c=Zt.DEFAULT_ANISOTROPY,h=di){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:kp++}),this.uuid=Un(),this.name="",this.source=new Jd(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=o,this.minFilter=r,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Re(0,0),this.repeat=new Re(1,1),this.center=new Re(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Je,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Od)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case cn:e.x=e.x-Math.floor(e.x);break;case ki:e.x=e.x<0?0:1;break;case Ml:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case cn:e.y=e.y-Math.floor(e.y);break;case ki:e.y=e.y<0?0:1;break;case Ml:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Zt.DEFAULT_IMAGE=null;Zt.DEFAULT_MAPPING=Od;Zt.DEFAULT_ANISOTROPY=1;class gt{constructor(e=0,t=0,i=0,s=1){gt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,s){return this.x=e,this.y=t,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,o=this.w,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*s+r[12]*o,this.y=r[1]*t+r[5]*i+r[9]*s+r[13]*o,this.z=r[2]*t+r[6]*i+r[10]*s+r[14]*o,this.w=r[3]*t+r[7]*i+r[11]*s+r[15]*o,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,s,o;const l=e.elements,c=l[0],h=l[4],d=l[8],u=l[1],f=l[5],v=l[9],_=l[2],m=l[6],p=l[10];if(Math.abs(h-u)<.01&&Math.abs(d-_)<.01&&Math.abs(v-m)<.01){if(Math.abs(h+u)<.1&&Math.abs(d+_)<.1&&Math.abs(v+m)<.1&&Math.abs(c+f+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const y=(c+1)/2,g=(f+1)/2,b=(p+1)/2,w=(h+u)/4,T=(d+_)/4,A=(v+m)/4;return y>g&&y>b?y<.01?(i=0,s=.707106781,o=.707106781):(i=Math.sqrt(y),s=w/i,o=T/i):g>b?g<.01?(i=.707106781,s=0,o=.707106781):(s=Math.sqrt(g),i=w/s,o=A/s):b<.01?(i=.707106781,s=.707106781,o=0):(o=Math.sqrt(b),i=T/o,s=A/o),this.set(i,s,o,t),this}let x=Math.sqrt((m-v)*(m-v)+(d-_)*(d-_)+(u-h)*(u-h));return Math.abs(x)<.001&&(x=1),this.x=(m-v)/x,this.y=(d-_)/x,this.z=(u-h)/x,this.w=Math.acos((c+f+p-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Bp extends Xi{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new gt(0,0,e,t),this.scissorTest=!1,this.viewport=new gt(0,0,e,t);const s={width:e,height:t,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Dn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const o=new Zt(s,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);o.flipY=!1,o.generateMipmaps=i.generateMipmaps,o.internalFormat=i.internalFormat,this.textures=[];const r=i.count;for(let a=0;a<r;a++)this.textures[a]=o.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let s=0,o=this.textures.length;s<o;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=i;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,s=e.textures.length;i<s;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Jd(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class zi extends Bp{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class Qd extends Zt{constructor(e=null,t=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=Cn,this.minFilter=Cn,this.wrapR=ki,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Op extends Zt{constructor(e=null,t=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=Cn,this.minFilter=Cn,this.wrapR=ki,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Hi{constructor(e=0,t=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=s}static slerpFlat(e,t,i,s,o,r,a){let l=i[s+0],c=i[s+1],h=i[s+2],d=i[s+3];const u=o[r+0],f=o[r+1],v=o[r+2],_=o[r+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=h,e[t+3]=d;return}if(a===1){e[t+0]=u,e[t+1]=f,e[t+2]=v,e[t+3]=_;return}if(d!==_||l!==u||c!==f||h!==v){let m=1-a;const p=l*u+c*f+h*v+d*_,x=p>=0?1:-1,y=1-p*p;if(y>Number.EPSILON){const b=Math.sqrt(y),w=Math.atan2(b,p*x);m=Math.sin(m*w)/b,a=Math.sin(a*w)/b}const g=a*x;if(l=l*m+u*g,c=c*m+f*g,h=h*m+v*g,d=d*m+_*g,m===1-a){const b=1/Math.sqrt(l*l+c*c+h*h+d*d);l*=b,c*=b,h*=b,d*=b}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=d}static multiplyQuaternionsFlat(e,t,i,s,o,r){const a=i[s],l=i[s+1],c=i[s+2],h=i[s+3],d=o[r],u=o[r+1],f=o[r+2],v=o[r+3];return e[t]=a*v+h*d+l*f-c*u,e[t+1]=l*v+h*u+c*d-a*f,e[t+2]=c*v+h*f+a*u-l*d,e[t+3]=h*v-a*d-l*u-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,s){return this._x=e,this._y=t,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,s=e._y,o=e._z,r=e._order,a=Math.cos,l=Math.sin,c=a(i/2),h=a(s/2),d=a(o/2),u=l(i/2),f=l(s/2),v=l(o/2);switch(r){case"XYZ":this._x=u*h*d+c*f*v,this._y=c*f*d-u*h*v,this._z=c*h*v+u*f*d,this._w=c*h*d-u*f*v;break;case"YXZ":this._x=u*h*d+c*f*v,this._y=c*f*d-u*h*v,this._z=c*h*v-u*f*d,this._w=c*h*d+u*f*v;break;case"ZXY":this._x=u*h*d-c*f*v,this._y=c*f*d+u*h*v,this._z=c*h*v+u*f*d,this._w=c*h*d-u*f*v;break;case"ZYX":this._x=u*h*d-c*f*v,this._y=c*f*d+u*h*v,this._z=c*h*v-u*f*d,this._w=c*h*d+u*f*v;break;case"YZX":this._x=u*h*d+c*f*v,this._y=c*f*d+u*h*v,this._z=c*h*v-u*f*d,this._w=c*h*d-u*f*v;break;case"XZY":this._x=u*h*d-c*f*v,this._y=c*f*d-u*h*v,this._z=c*h*v+u*f*d,this._w=c*h*d+u*f*v;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+r)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],s=t[4],o=t[8],r=t[1],a=t[5],l=t[9],c=t[2],h=t[6],d=t[10],u=i+a+d;if(u>0){const f=.5/Math.sqrt(u+1);this._w=.25/f,this._x=(h-l)*f,this._y=(o-c)*f,this._z=(r-s)*f}else if(i>a&&i>d){const f=2*Math.sqrt(1+i-a-d);this._w=(h-l)/f,this._x=.25*f,this._y=(s+r)/f,this._z=(o+c)/f}else if(a>d){const f=2*Math.sqrt(1+a-i-d);this._w=(o-c)/f,this._x=(s+r)/f,this._y=.25*f,this._z=(l+h)/f}else{const f=2*Math.sqrt(1+d-i-a);this._w=(r-s)/f,this._x=(o+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Rt(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const s=Math.min(1,t/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,s=e._y,o=e._z,r=e._w,a=t._x,l=t._y,c=t._z,h=t._w;return this._x=i*h+r*a+s*c-o*l,this._y=s*h+r*l+o*a-i*c,this._z=o*h+r*c+i*l-s*a,this._w=r*h-i*a-s*l-o*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,s=this._y,o=this._z,r=this._w;let a=r*e._w+i*e._x+s*e._y+o*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=r,this._x=i,this._y=s,this._z=o,this;const l=1-a*a;if(l<=Number.EPSILON){const f=1-t;return this._w=f*r+t*this._w,this._x=f*i+t*this._x,this._y=f*s+t*this._y,this._z=f*o+t*this._z,this.normalize(),this}const c=Math.sqrt(l),h=Math.atan2(c,a),d=Math.sin((1-t)*h)/c,u=Math.sin(t*h)/c;return this._w=r*d+this._w*u,this._x=i*d+this._x*u,this._y=s*d+this._y*u,this._z=o*d+this._z*u,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),o=Math.sqrt(i);return this.set(s*Math.sin(e),s*Math.cos(e),o*Math.sin(t),o*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class D{constructor(e=0,t=0,i=0){D.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(eh.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(eh.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,s=this.z,o=e.elements;return this.x=o[0]*t+o[3]*i+o[6]*s,this.y=o[1]*t+o[4]*i+o[7]*s,this.z=o[2]*t+o[5]*i+o[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,o=e.elements,r=1/(o[3]*t+o[7]*i+o[11]*s+o[15]);return this.x=(o[0]*t+o[4]*i+o[8]*s+o[12])*r,this.y=(o[1]*t+o[5]*i+o[9]*s+o[13])*r,this.z=(o[2]*t+o[6]*i+o[10]*s+o[14])*r,this}applyQuaternion(e){const t=this.x,i=this.y,s=this.z,o=e.x,r=e.y,a=e.z,l=e.w,c=2*(r*s-a*i),h=2*(a*t-o*s),d=2*(o*i-r*t);return this.x=t+l*c+r*d-a*h,this.y=i+l*h+a*c-o*d,this.z=s+l*d+o*h-r*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,s=this.z,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*s,this.y=o[1]*t+o[5]*i+o[9]*s,this.z=o[2]*t+o[6]*i+o[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,s=e.y,o=e.z,r=t.x,a=t.y,l=t.z;return this.x=s*l-o*a,this.y=o*r-i*l,this.z=i*a-s*r,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return oa.copy(this).projectOnVector(e),this.sub(oa)}reflect(e){return this.sub(oa.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Rt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return t*t+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const s=Math.sin(t)*e;return this.x=s*Math.sin(i),this.y=Math.cos(t)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const oa=new D,eh=new Hi;class Io{constructor(e=new D(1/0,1/0,1/0),t=new D(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(yn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(yn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=yn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const o=i.getAttribute("position");if(t===!0&&o!==void 0&&e.isInstancedMesh!==!0)for(let r=0,a=o.count;r<a;r++)e.isMesh===!0?e.getVertexPosition(r,yn):yn.fromBufferAttribute(o,r),yn.applyMatrix4(e.matrixWorld),this.expandByPoint(yn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Vo.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Vo.copy(i.boundingBox)),Vo.applyMatrix4(e.matrixWorld),this.union(Vo)}const s=e.children;for(let o=0,r=s.length;o<r;o++)this.expandByObject(s[o],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,yn),yn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Js),Wo.subVectors(this.max,Js),ts.subVectors(e.a,Js),ns.subVectors(e.b,Js),is.subVectors(e.c,Js),si.subVectors(ns,ts),oi.subVectors(is,ns),wi.subVectors(ts,is);let t=[0,-si.z,si.y,0,-oi.z,oi.y,0,-wi.z,wi.y,si.z,0,-si.x,oi.z,0,-oi.x,wi.z,0,-wi.x,-si.y,si.x,0,-oi.y,oi.x,0,-wi.y,wi.x,0];return!ra(t,ts,ns,is,Wo)||(t=[1,0,0,0,1,0,0,0,1],!ra(t,ts,ns,is,Wo))?!1:($o.crossVectors(si,oi),t=[$o.x,$o.y,$o.z],ra(t,ts,ns,is,Wo))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,yn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(yn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Hn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Hn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Hn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Hn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Hn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Hn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Hn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Hn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Hn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Hn=[new D,new D,new D,new D,new D,new D,new D,new D],yn=new D,Vo=new Io,ts=new D,ns=new D,is=new D,si=new D,oi=new D,wi=new D,Js=new D,Wo=new D,$o=new D,Ti=new D;function ra(n,e,t,i,s){for(let o=0,r=n.length-3;o<=r;o+=3){Ti.fromArray(n,o);const a=s.x*Math.abs(Ti.x)+s.y*Math.abs(Ti.y)+s.z*Math.abs(Ti.z),l=e.dot(Ti),c=t.dot(Ti),h=i.dot(Ti);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}const Fp=new Io,Qs=new D,aa=new D;class qr{constructor(e=new D,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):Fp.setFromPoints(e).getCenter(i);let s=0;for(let o=0,r=e.length;o<r;o++)s=Math.max(s,i.distanceToSquared(e[o]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Qs.subVectors(e,this.center);const t=Qs.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),s=(i-this.radius)*.5;this.center.addScaledVector(Qs,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(aa.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Qs.copy(e.center).add(aa)),this.expandByPoint(Qs.copy(e.center).sub(aa))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Gn=new D,la=new D,Xo=new D,ri=new D,ca=new D,Yo=new D,ha=new D;class jr{constructor(e=new D,t=new D(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Gn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Gn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Gn.copy(this.origin).addScaledVector(this.direction,t),Gn.distanceToSquared(e))}distanceSqToSegment(e,t,i,s){la.copy(e).add(t).multiplyScalar(.5),Xo.copy(t).sub(e).normalize(),ri.copy(this.origin).sub(la);const o=e.distanceTo(t)*.5,r=-this.direction.dot(Xo),a=ri.dot(this.direction),l=-ri.dot(Xo),c=ri.lengthSq(),h=Math.abs(1-r*r);let d,u,f,v;if(h>0)if(d=r*l-a,u=r*a-l,v=o*h,d>=0)if(u>=-v)if(u<=v){const _=1/h;d*=_,u*=_,f=d*(d+r*u+2*a)+u*(r*d+u+2*l)+c}else u=o,d=Math.max(0,-(r*u+a)),f=-d*d+u*(u+2*l)+c;else u=-o,d=Math.max(0,-(r*u+a)),f=-d*d+u*(u+2*l)+c;else u<=-v?(d=Math.max(0,-(-r*o+a)),u=d>0?-o:Math.min(Math.max(-o,-l),o),f=-d*d+u*(u+2*l)+c):u<=v?(d=0,u=Math.min(Math.max(-o,-l),o),f=u*(u+2*l)+c):(d=Math.max(0,-(r*o+a)),u=d>0?o:Math.min(Math.max(-o,-l),o),f=-d*d+u*(u+2*l)+c);else u=r>0?-o:o,d=Math.max(0,-(r*u+a)),f=-d*d+u*(u+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(la).addScaledVector(Xo,u),f}intersectSphere(e,t){Gn.subVectors(e.center,this.origin);const i=Gn.dot(this.direction),s=Gn.dot(Gn)-i*i,o=e.radius*e.radius;if(s>o)return null;const r=Math.sqrt(o-s),a=i-r,l=i+r;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,s,o,r,a,l;const c=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,u=this.origin;return c>=0?(i=(e.min.x-u.x)*c,s=(e.max.x-u.x)*c):(i=(e.max.x-u.x)*c,s=(e.min.x-u.x)*c),h>=0?(o=(e.min.y-u.y)*h,r=(e.max.y-u.y)*h):(o=(e.max.y-u.y)*h,r=(e.min.y-u.y)*h),i>r||o>s||((o>i||isNaN(i))&&(i=o),(r<s||isNaN(s))&&(s=r),d>=0?(a=(e.min.z-u.z)*d,l=(e.max.z-u.z)*d):(a=(e.max.z-u.z)*d,l=(e.min.z-u.z)*d),i>l||a>s)||((a>i||i!==i)&&(i=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,t)}intersectsBox(e){return this.intersectBox(e,Gn)!==null}intersectTriangle(e,t,i,s,o){ca.subVectors(t,e),Yo.subVectors(i,e),ha.crossVectors(ca,Yo);let r=this.direction.dot(ha),a;if(r>0){if(s)return null;a=1}else if(r<0)a=-1,r=-r;else return null;ri.subVectors(this.origin,e);const l=a*this.direction.dot(Yo.crossVectors(ri,Yo));if(l<0)return null;const c=a*this.direction.dot(ca.cross(ri));if(c<0||l+c>r)return null;const h=-a*ri.dot(ha);return h<0?null:this.at(h/r,o)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class _t{constructor(e,t,i,s,o,r,a,l,c,h,d,u,f,v,_,m){_t.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,s,o,r,a,l,c,h,d,u,f,v,_,m)}set(e,t,i,s,o,r,a,l,c,h,d,u,f,v,_,m){const p=this.elements;return p[0]=e,p[4]=t,p[8]=i,p[12]=s,p[1]=o,p[5]=r,p[9]=a,p[13]=l,p[2]=c,p[6]=h,p[10]=d,p[14]=u,p[3]=f,p[7]=v,p[11]=_,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new _t().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,s=1/ss.setFromMatrixColumn(e,0).length(),o=1/ss.setFromMatrixColumn(e,1).length(),r=1/ss.setFromMatrixColumn(e,2).length();return t[0]=i[0]*s,t[1]=i[1]*s,t[2]=i[2]*s,t[3]=0,t[4]=i[4]*o,t[5]=i[5]*o,t[6]=i[6]*o,t[7]=0,t[8]=i[8]*r,t[9]=i[9]*r,t[10]=i[10]*r,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,s=e.y,o=e.z,r=Math.cos(i),a=Math.sin(i),l=Math.cos(s),c=Math.sin(s),h=Math.cos(o),d=Math.sin(o);if(e.order==="XYZ"){const u=r*h,f=r*d,v=a*h,_=a*d;t[0]=l*h,t[4]=-l*d,t[8]=c,t[1]=f+v*c,t[5]=u-_*c,t[9]=-a*l,t[2]=_-u*c,t[6]=v+f*c,t[10]=r*l}else if(e.order==="YXZ"){const u=l*h,f=l*d,v=c*h,_=c*d;t[0]=u+_*a,t[4]=v*a-f,t[8]=r*c,t[1]=r*d,t[5]=r*h,t[9]=-a,t[2]=f*a-v,t[6]=_+u*a,t[10]=r*l}else if(e.order==="ZXY"){const u=l*h,f=l*d,v=c*h,_=c*d;t[0]=u-_*a,t[4]=-r*d,t[8]=v+f*a,t[1]=f+v*a,t[5]=r*h,t[9]=_-u*a,t[2]=-r*c,t[6]=a,t[10]=r*l}else if(e.order==="ZYX"){const u=r*h,f=r*d,v=a*h,_=a*d;t[0]=l*h,t[4]=v*c-f,t[8]=u*c+_,t[1]=l*d,t[5]=_*c+u,t[9]=f*c-v,t[2]=-c,t[6]=a*l,t[10]=r*l}else if(e.order==="YZX"){const u=r*l,f=r*c,v=a*l,_=a*c;t[0]=l*h,t[4]=_-u*d,t[8]=v*d+f,t[1]=d,t[5]=r*h,t[9]=-a*h,t[2]=-c*h,t[6]=f*d+v,t[10]=u-_*d}else if(e.order==="XZY"){const u=r*l,f=r*c,v=a*l,_=a*c;t[0]=l*h,t[4]=-d,t[8]=c*h,t[1]=u*d+_,t[5]=r*h,t[9]=f*d-v,t[2]=v*d-f,t[6]=a*h,t[10]=_*d+u}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(zp,e,Hp)}lookAt(e,t,i){const s=this.elements;return on.subVectors(e,t),on.lengthSq()===0&&(on.z=1),on.normalize(),ai.crossVectors(i,on),ai.lengthSq()===0&&(Math.abs(i.z)===1?on.x+=1e-4:on.z+=1e-4,on.normalize(),ai.crossVectors(i,on)),ai.normalize(),qo.crossVectors(on,ai),s[0]=ai.x,s[4]=qo.x,s[8]=on.x,s[1]=ai.y,s[5]=qo.y,s[9]=on.y,s[2]=ai.z,s[6]=qo.z,s[10]=on.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,o=this.elements,r=i[0],a=i[4],l=i[8],c=i[12],h=i[1],d=i[5],u=i[9],f=i[13],v=i[2],_=i[6],m=i[10],p=i[14],x=i[3],y=i[7],g=i[11],b=i[15],w=s[0],T=s[4],A=s[8],S=s[12],M=s[1],C=s[5],P=s[9],F=s[13],O=s[2],G=s[6],$=s[10],te=s[14],K=s[3],X=s[7],Y=s[11],k=s[15];return o[0]=r*w+a*M+l*O+c*K,o[4]=r*T+a*C+l*G+c*X,o[8]=r*A+a*P+l*$+c*Y,o[12]=r*S+a*F+l*te+c*k,o[1]=h*w+d*M+u*O+f*K,o[5]=h*T+d*C+u*G+f*X,o[9]=h*A+d*P+u*$+f*Y,o[13]=h*S+d*F+u*te+f*k,o[2]=v*w+_*M+m*O+p*K,o[6]=v*T+_*C+m*G+p*X,o[10]=v*A+_*P+m*$+p*Y,o[14]=v*S+_*F+m*te+p*k,o[3]=x*w+y*M+g*O+b*K,o[7]=x*T+y*C+g*G+b*X,o[11]=x*A+y*P+g*$+b*Y,o[15]=x*S+y*F+g*te+b*k,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],s=e[8],o=e[12],r=e[1],a=e[5],l=e[9],c=e[13],h=e[2],d=e[6],u=e[10],f=e[14],v=e[3],_=e[7],m=e[11],p=e[15];return v*(+o*l*d-s*c*d-o*a*u+i*c*u+s*a*f-i*l*f)+_*(+t*l*f-t*c*u+o*r*u-s*r*f+s*c*h-o*l*h)+m*(+t*c*d-t*a*f-o*r*d+i*r*f+o*a*h-i*c*h)+p*(-s*a*h-t*l*d+t*a*u+s*r*d-i*r*u+i*l*h)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],o=e[3],r=e[4],a=e[5],l=e[6],c=e[7],h=e[8],d=e[9],u=e[10],f=e[11],v=e[12],_=e[13],m=e[14],p=e[15],x=d*m*c-_*u*c+_*l*f-a*m*f-d*l*p+a*u*p,y=v*u*c-h*m*c-v*l*f+r*m*f+h*l*p-r*u*p,g=h*_*c-v*d*c+v*a*f-r*_*f-h*a*p+r*d*p,b=v*d*l-h*_*l-v*a*u+r*_*u+h*a*m-r*d*m,w=t*x+i*y+s*g+o*b;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const T=1/w;return e[0]=x*T,e[1]=(_*u*o-d*m*o-_*s*f+i*m*f+d*s*p-i*u*p)*T,e[2]=(a*m*o-_*l*o+_*s*c-i*m*c-a*s*p+i*l*p)*T,e[3]=(d*l*o-a*u*o-d*s*c+i*u*c+a*s*f-i*l*f)*T,e[4]=y*T,e[5]=(h*m*o-v*u*o+v*s*f-t*m*f-h*s*p+t*u*p)*T,e[6]=(v*l*o-r*m*o-v*s*c+t*m*c+r*s*p-t*l*p)*T,e[7]=(r*u*o-h*l*o+h*s*c-t*u*c-r*s*f+t*l*f)*T,e[8]=g*T,e[9]=(v*d*o-h*_*o-v*i*f+t*_*f+h*i*p-t*d*p)*T,e[10]=(r*_*o-v*a*o+v*i*c-t*_*c-r*i*p+t*a*p)*T,e[11]=(h*a*o-r*d*o-h*i*c+t*d*c+r*i*f-t*a*f)*T,e[12]=b*T,e[13]=(h*_*s-v*d*s+v*i*u-t*_*u-h*i*m+t*d*m)*T,e[14]=(v*a*s-r*_*s-v*i*l+t*_*l+r*i*m-t*a*m)*T,e[15]=(r*d*s-h*a*s+h*i*l-t*d*l-r*i*u+t*a*u)*T,this}scale(e){const t=this.elements,i=e.x,s=e.y,o=e.z;return t[0]*=i,t[4]*=s,t[8]*=o,t[1]*=i,t[5]*=s,t[9]*=o,t[2]*=i,t[6]*=s,t[10]*=o,t[3]*=i,t[7]*=s,t[11]*=o,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,s))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),s=Math.sin(t),o=1-i,r=e.x,a=e.y,l=e.z,c=o*r,h=o*a;return this.set(c*r+i,c*a-s*l,c*l+s*a,0,c*a+s*l,h*a+i,h*l-s*r,0,c*l-s*a,h*l+s*r,o*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,s,o,r){return this.set(1,i,o,0,e,1,r,0,t,s,1,0,0,0,0,1),this}compose(e,t,i){const s=this.elements,o=t._x,r=t._y,a=t._z,l=t._w,c=o+o,h=r+r,d=a+a,u=o*c,f=o*h,v=o*d,_=r*h,m=r*d,p=a*d,x=l*c,y=l*h,g=l*d,b=i.x,w=i.y,T=i.z;return s[0]=(1-(_+p))*b,s[1]=(f+g)*b,s[2]=(v-y)*b,s[3]=0,s[4]=(f-g)*w,s[5]=(1-(u+p))*w,s[6]=(m+x)*w,s[7]=0,s[8]=(v+y)*T,s[9]=(m-x)*T,s[10]=(1-(u+_))*T,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,i){const s=this.elements;let o=ss.set(s[0],s[1],s[2]).length();const r=ss.set(s[4],s[5],s[6]).length(),a=ss.set(s[8],s[9],s[10]).length();this.determinant()<0&&(o=-o),e.x=s[12],e.y=s[13],e.z=s[14],xn.copy(this);const c=1/o,h=1/r,d=1/a;return xn.elements[0]*=c,xn.elements[1]*=c,xn.elements[2]*=c,xn.elements[4]*=h,xn.elements[5]*=h,xn.elements[6]*=h,xn.elements[8]*=d,xn.elements[9]*=d,xn.elements[10]*=d,t.setFromRotationMatrix(xn),i.x=o,i.y=r,i.z=a,this}makePerspective(e,t,i,s,o,r,a=qn){const l=this.elements,c=2*o/(t-e),h=2*o/(i-s),d=(t+e)/(t-e),u=(i+s)/(i-s);let f,v;if(a===qn)f=-(r+o)/(r-o),v=-2*r*o/(r-o);else if(a===Ir)f=-r/(r-o),v=-r*o/(r-o);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=h,l[9]=u,l[13]=0,l[2]=0,l[6]=0,l[10]=f,l[14]=v,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,s,o,r,a=qn){const l=this.elements,c=1/(t-e),h=1/(i-s),d=1/(r-o),u=(t+e)*c,f=(i+s)*h;let v,_;if(a===qn)v=(r+o)*d,_=-2*d;else if(a===Ir)v=o*d,_=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-u,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-f,l[2]=0,l[6]=0,l[10]=_,l[14]=-v,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<16;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const ss=new D,xn=new _t,zp=new D(0,0,0),Hp=new D(1,1,1),ai=new D,qo=new D,on=new D,th=new _t,nh=new Hi;class Bn{constructor(e=0,t=0,i=0,s=Bn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,s=this._order){return this._x=e,this._y=t,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const s=e.elements,o=s[0],r=s[4],a=s[8],l=s[1],c=s[5],h=s[9],d=s[2],u=s[6],f=s[10];switch(t){case"XYZ":this._y=Math.asin(Rt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-r,o)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Rt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,o),this._z=0);break;case"ZXY":this._x=Math.asin(Rt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-r,c)):(this._y=0,this._z=Math.atan2(l,o));break;case"ZYX":this._y=Math.asin(-Rt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(u,f),this._z=Math.atan2(l,o)):(this._x=0,this._z=Math.atan2(-r,c));break;case"YZX":this._z=Math.asin(Rt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-d,o)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-Rt(r,-1,1)),Math.abs(r)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(a,o)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return th.makeRotationFromQuaternion(e),this.setFromRotationMatrix(th,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return nh.setFromEuler(this),this.setFromQuaternion(nh,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Bn.DEFAULT_ORDER="XYZ";class _c{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Gp=0;const ih=new D,os=new Hi,Vn=new _t,jo=new D,eo=new D,Vp=new D,Wp=new Hi,sh=new D(1,0,0),oh=new D(0,1,0),rh=new D(0,0,1),ah={type:"added"},$p={type:"removed"},rs={type:"childadded",child:null},da={type:"childremoved",child:null};class Dt extends Xi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Gp++}),this.uuid=Un(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Dt.DEFAULT_UP.clone();const e=new D,t=new Bn,i=new Hi,s=new D(1,1,1);function o(){i.setFromEuler(t,!1)}function r(){t.setFromQuaternion(i,void 0,!1)}t._onChange(o),i._onChange(r),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new _t},normalMatrix:{value:new Je}}),this.matrix=new _t,this.matrixWorld=new _t,this.matrixAutoUpdate=Dt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Dt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new _c,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return os.setFromAxisAngle(e,t),this.quaternion.multiply(os),this}rotateOnWorldAxis(e,t){return os.setFromAxisAngle(e,t),this.quaternion.premultiply(os),this}rotateX(e){return this.rotateOnAxis(sh,e)}rotateY(e){return this.rotateOnAxis(oh,e)}rotateZ(e){return this.rotateOnAxis(rh,e)}translateOnAxis(e,t){return ih.copy(e).applyQuaternion(this.quaternion),this.position.add(ih.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(sh,e)}translateY(e){return this.translateOnAxis(oh,e)}translateZ(e){return this.translateOnAxis(rh,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Vn.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?jo.copy(e):jo.set(e,t,i);const s=this.parent;this.updateWorldMatrix(!0,!1),eo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Vn.lookAt(eo,jo,this.up):Vn.lookAt(jo,eo,this.up),this.quaternion.setFromRotationMatrix(Vn),s&&(Vn.extractRotation(s.matrixWorld),os.setFromRotationMatrix(Vn),this.quaternion.premultiply(os.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(ah),rs.child=e,this.dispatchEvent(rs),rs.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent($p),da.child=e,this.dispatchEvent(da),da.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Vn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Vn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Vn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(ah),rs.child=e,this.dispatchEvent(rs),rs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,s=this.children.length;i<s;i++){const r=this.children[i].getObjectByProperty(e,t);if(r!==void 0)return r}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const s=this.children;for(let o=0,r=s.length;o<r;o++)s[o].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(eo,e,Vp),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(eo,Wp,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const s=this.children;for(let o=0,r=s.length;o<r;o++)s[o].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function o(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=o(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const d=l[c];o(e.shapes,d)}else o(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(o(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(o(e.materials,this.material[l]));s.material=a}else s.material=o(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];s.animations.push(o(e.animations,l))}}if(t){const a=r(e.geometries),l=r(e.materials),c=r(e.textures),h=r(e.images),d=r(e.shapes),u=r(e.skeletons),f=r(e.animations),v=r(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),d.length>0&&(i.shapes=d),u.length>0&&(i.skeletons=u),f.length>0&&(i.animations=f),v.length>0&&(i.nodes=v)}return i.object=s,i;function r(a){const l=[];for(const c in a){const h=a[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const s=e.children[i];this.add(s.clone())}return this}}Dt.DEFAULT_UP=new D(0,1,0);Dt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Dt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Mn=new D,Wn=new D,ua=new D,$n=new D,as=new D,ls=new D,lh=new D,fa=new D,pa=new D,ma=new D,ga=new gt,va=new gt,_a=new gt;class fn{constructor(e=new D,t=new D,i=new D){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,s){s.subVectors(i,t),Mn.subVectors(e,t),s.cross(Mn);const o=s.lengthSq();return o>0?s.multiplyScalar(1/Math.sqrt(o)):s.set(0,0,0)}static getBarycoord(e,t,i,s,o){Mn.subVectors(s,t),Wn.subVectors(i,t),ua.subVectors(e,t);const r=Mn.dot(Mn),a=Mn.dot(Wn),l=Mn.dot(ua),c=Wn.dot(Wn),h=Wn.dot(ua),d=r*c-a*a;if(d===0)return o.set(0,0,0),null;const u=1/d,f=(c*l-a*h)*u,v=(r*h-a*l)*u;return o.set(1-f-v,v,f)}static containsPoint(e,t,i,s){return this.getBarycoord(e,t,i,s,$n)===null?!1:$n.x>=0&&$n.y>=0&&$n.x+$n.y<=1}static getInterpolation(e,t,i,s,o,r,a,l){return this.getBarycoord(e,t,i,s,$n)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(o,$n.x),l.addScaledVector(r,$n.y),l.addScaledVector(a,$n.z),l)}static getInterpolatedAttribute(e,t,i,s,o,r){return ga.setScalar(0),va.setScalar(0),_a.setScalar(0),ga.fromBufferAttribute(e,t),va.fromBufferAttribute(e,i),_a.fromBufferAttribute(e,s),r.setScalar(0),r.addScaledVector(ga,o.x),r.addScaledVector(va,o.y),r.addScaledVector(_a,o.z),r}static isFrontFacing(e,t,i,s){return Mn.subVectors(i,t),Wn.subVectors(e,t),Mn.cross(Wn).dot(s)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,s){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,i,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Mn.subVectors(this.c,this.b),Wn.subVectors(this.a,this.b),Mn.cross(Wn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return fn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return fn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,s,o){return fn.getInterpolation(e,this.a,this.b,this.c,t,i,s,o)}containsPoint(e){return fn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return fn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,s=this.b,o=this.c;let r,a;as.subVectors(s,i),ls.subVectors(o,i),fa.subVectors(e,i);const l=as.dot(fa),c=ls.dot(fa);if(l<=0&&c<=0)return t.copy(i);pa.subVectors(e,s);const h=as.dot(pa),d=ls.dot(pa);if(h>=0&&d<=h)return t.copy(s);const u=l*d-h*c;if(u<=0&&l>=0&&h<=0)return r=l/(l-h),t.copy(i).addScaledVector(as,r);ma.subVectors(e,o);const f=as.dot(ma),v=ls.dot(ma);if(v>=0&&f<=v)return t.copy(o);const _=f*c-l*v;if(_<=0&&c>=0&&v<=0)return a=c/(c-v),t.copy(i).addScaledVector(ls,a);const m=h*v-f*d;if(m<=0&&d-h>=0&&f-v>=0)return lh.subVectors(o,s),a=(d-h)/(d-h+(f-v)),t.copy(s).addScaledVector(lh,a);const p=1/(m+_+u);return r=_*p,a=u*p,t.copy(i).addScaledVector(as,r).addScaledVector(ls,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const eu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},li={h:0,s:0,l:0},Ko={h:0,s:0,l:0};function ya(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class $e{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=mt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,st.toWorkingColorSpace(this,t),this}setRGB(e,t,i,s=st.workingColorSpace){return this.r=e,this.g=t,this.b=i,st.toWorkingColorSpace(this,s),this}setHSL(e,t,i,s=st.workingColorSpace){if(e=vc(e,1),t=Rt(t,0,1),i=Rt(i,0,1),t===0)this.r=this.g=this.b=i;else{const o=i<=.5?i*(1+t):i+t-i*t,r=2*i-o;this.r=ya(r,o,e+1/3),this.g=ya(r,o,e),this.b=ya(r,o,e-1/3)}return st.toWorkingColorSpace(this,s),this}setStyle(e,t=mt){function i(o){o!==void 0&&parseFloat(o)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let o;const r=s[1],a=s[2];switch(r){case"rgb":case"rgba":if(o=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(o[4]),this.setRGB(Math.min(255,parseInt(o[1],10))/255,Math.min(255,parseInt(o[2],10))/255,Math.min(255,parseInt(o[3],10))/255,t);if(o=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(o[4]),this.setRGB(Math.min(100,parseInt(o[1],10))/100,Math.min(100,parseInt(o[2],10))/100,Math.min(100,parseInt(o[3],10))/100,t);break;case"hsl":case"hsla":if(o=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(o[4]),this.setHSL(parseFloat(o[1])/360,parseFloat(o[2])/100,parseFloat(o[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const o=s[1],r=o.length;if(r===3)return this.setRGB(parseInt(o.charAt(0),16)/15,parseInt(o.charAt(1),16)/15,parseInt(o.charAt(2),16)/15,t);if(r===6)return this.setHex(parseInt(o,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=mt){const i=eu[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=jn(e.r),this.g=jn(e.g),this.b=jn(e.b),this}copyLinearToSRGB(e){return this.r=Cs(e.r),this.g=Cs(e.g),this.b=Cs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=mt){return st.fromWorkingColorSpace($t.copy(this),e),Math.round(Rt($t.r*255,0,255))*65536+Math.round(Rt($t.g*255,0,255))*256+Math.round(Rt($t.b*255,0,255))}getHexString(e=mt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=st.workingColorSpace){st.fromWorkingColorSpace($t.copy(this),t);const i=$t.r,s=$t.g,o=$t.b,r=Math.max(i,s,o),a=Math.min(i,s,o);let l,c;const h=(a+r)/2;if(a===r)l=0,c=0;else{const d=r-a;switch(c=h<=.5?d/(r+a):d/(2-r-a),r){case i:l=(s-o)/d+(s<o?6:0);break;case s:l=(o-i)/d+2;break;case o:l=(i-s)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=st.workingColorSpace){return st.fromWorkingColorSpace($t.copy(this),t),e.r=$t.r,e.g=$t.g,e.b=$t.b,e}getStyle(e=mt){st.fromWorkingColorSpace($t.copy(this),e);const t=$t.r,i=$t.g,s=$t.b;return e!==mt?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,t,i){return this.getHSL(li),this.setHSL(li.h+e,li.s+t,li.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(li),e.getHSL(Ko);const i=yo(li.h,Ko.h,t),s=yo(li.s,Ko.s,t),o=yo(li.l,Ko.l,t);return this.setHSL(i,s,o),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,s=this.b,o=e.elements;return this.r=o[0]*t+o[3]*i+o[6]*s,this.g=o[1]*t+o[4]*i+o[7]*s,this.b=o[2]*t+o[5]*i+o[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const $t=new $e;$e.NAMES=eu;let Xp=0;class Yi extends Xi{static get type(){return"Material"}get type(){return this.constructor.type}set type(e){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Xp++}),this.uuid=Un(),this.name="",this.blending=Ts,this.side=_i,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=hl,this.blendDst=dl,this.blendEquation=Di,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new $e(0,0,0),this.blendAlpha=0,this.depthFunc=ks,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=$c,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Qi,this.stencilZFail=Qi,this.stencilZPass=Qi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Ts&&(i.blending=this.blending),this.side!==_i&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==hl&&(i.blendSrc=this.blendSrc),this.blendDst!==dl&&(i.blendDst=this.blendDst),this.blendEquation!==Di&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==ks&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==$c&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Qi&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Qi&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Qi&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(o){const r=[];for(const a in o){const l=o[a];delete l.metadata,r.push(l)}return r}if(t){const o=s(e.textures),r=s(e.images);o.length>0&&(i.textures=o),r.length>0&&(i.images=r)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const s=t.length;i=new Array(s);for(let o=0;o!==s;++o)i[o]=t[o].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class ht extends Yi{static get type(){return"MeshBasicMaterial"}constructor(e){super(),this.isMeshBasicMaterial=!0,this.color=new $e(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Bn,this.combine=kd,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const At=new D,Zo=new Re;class mn{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=ql,this.updateRanges=[],this.gpuType=Yn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let s=0,o=this.itemSize;s<o;s++)this.array[e+s]=t.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Zo.fromBufferAttribute(this,t),Zo.applyMatrix3(e),this.setXY(t,Zo.x,Zo.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)At.fromBufferAttribute(this,t),At.applyMatrix3(e),this.setXYZ(t,At.x,At.y,At.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)At.fromBufferAttribute(this,t),At.applyMatrix4(e),this.setXYZ(t,At.x,At.y,At.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)At.fromBufferAttribute(this,t),At.applyNormalMatrix(e),this.setXYZ(t,At.x,At.y,At.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)At.fromBufferAttribute(this,t),At.transformDirection(e),this.setXYZ(t,At.x,At.y,At.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=En(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=dt(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=En(t,this.array)),t}setX(e,t){return this.normalized&&(t=dt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=En(t,this.array)),t}setY(e,t){return this.normalized&&(t=dt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=En(t,this.array)),t}setZ(e,t){return this.normalized&&(t=dt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=En(t,this.array)),t}setW(e,t){return this.normalized&&(t=dt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=dt(t,this.array),i=dt(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,s){return e*=this.itemSize,this.normalized&&(t=dt(t,this.array),i=dt(i,this.array),s=dt(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,t,i,s,o){return e*=this.itemSize,this.normalized&&(t=dt(t,this.array),i=dt(i,this.array),s=dt(s,this.array),o=dt(o,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=o,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==ql&&(e.usage=this.usage),e}}class tu extends mn{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class nu extends mn{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class at extends mn{constructor(e,t,i){super(new Float32Array(e),t,i)}}let Yp=0;const dn=new _t,xa=new Dt,cs=new D,rn=new Io,to=new Io,Bt=new D;class Ht extends Xi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Yp++}),this.uuid=Un(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Zd(e)?nu:tu)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const o=new Je().getNormalMatrix(e);i.applyNormalMatrix(o),i.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return dn.makeRotationFromQuaternion(e),this.applyMatrix4(dn),this}rotateX(e){return dn.makeRotationX(e),this.applyMatrix4(dn),this}rotateY(e){return dn.makeRotationY(e),this.applyMatrix4(dn),this}rotateZ(e){return dn.makeRotationZ(e),this.applyMatrix4(dn),this}translate(e,t,i){return dn.makeTranslation(e,t,i),this.applyMatrix4(dn),this}scale(e,t,i){return dn.makeScale(e,t,i),this.applyMatrix4(dn),this}lookAt(e){return xa.lookAt(e),xa.updateMatrix(),this.applyMatrix4(xa.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(cs).negate(),this.translate(cs.x,cs.y,cs.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let s=0,o=e.length;s<o;s++){const r=e[s];i.push(r.x,r.y,r.z||0)}this.setAttribute("position",new at(i,3))}else{for(let i=0,s=t.count;i<s;i++){const o=e[i];t.setXYZ(i,o.x,o.y,o.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Io);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new D(-1/0,-1/0,-1/0),new D(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,s=t.length;i<s;i++){const o=t[i];rn.setFromBufferAttribute(o),this.morphTargetsRelative?(Bt.addVectors(this.boundingBox.min,rn.min),this.boundingBox.expandByPoint(Bt),Bt.addVectors(this.boundingBox.max,rn.max),this.boundingBox.expandByPoint(Bt)):(this.boundingBox.expandByPoint(rn.min),this.boundingBox.expandByPoint(rn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new qr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new D,1/0);return}if(e){const i=this.boundingSphere.center;if(rn.setFromBufferAttribute(e),t)for(let o=0,r=t.length;o<r;o++){const a=t[o];to.setFromBufferAttribute(a),this.morphTargetsRelative?(Bt.addVectors(rn.min,to.min),rn.expandByPoint(Bt),Bt.addVectors(rn.max,to.max),rn.expandByPoint(Bt)):(rn.expandByPoint(to.min),rn.expandByPoint(to.max))}rn.getCenter(i);let s=0;for(let o=0,r=e.count;o<r;o++)Bt.fromBufferAttribute(e,o),s=Math.max(s,i.distanceToSquared(Bt));if(t)for(let o=0,r=t.length;o<r;o++){const a=t[o],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)Bt.fromBufferAttribute(a,c),l&&(cs.fromBufferAttribute(e,c),Bt.add(cs)),s=Math.max(s,i.distanceToSquared(Bt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,s=t.normal,o=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new mn(new Float32Array(4*i.count),4));const r=this.getAttribute("tangent"),a=[],l=[];for(let A=0;A<i.count;A++)a[A]=new D,l[A]=new D;const c=new D,h=new D,d=new D,u=new Re,f=new Re,v=new Re,_=new D,m=new D;function p(A,S,M){c.fromBufferAttribute(i,A),h.fromBufferAttribute(i,S),d.fromBufferAttribute(i,M),u.fromBufferAttribute(o,A),f.fromBufferAttribute(o,S),v.fromBufferAttribute(o,M),h.sub(c),d.sub(c),f.sub(u),v.sub(u);const C=1/(f.x*v.y-v.x*f.y);isFinite(C)&&(_.copy(h).multiplyScalar(v.y).addScaledVector(d,-f.y).multiplyScalar(C),m.copy(d).multiplyScalar(f.x).addScaledVector(h,-v.x).multiplyScalar(C),a[A].add(_),a[S].add(_),a[M].add(_),l[A].add(m),l[S].add(m),l[M].add(m))}let x=this.groups;x.length===0&&(x=[{start:0,count:e.count}]);for(let A=0,S=x.length;A<S;++A){const M=x[A],C=M.start,P=M.count;for(let F=C,O=C+P;F<O;F+=3)p(e.getX(F+0),e.getX(F+1),e.getX(F+2))}const y=new D,g=new D,b=new D,w=new D;function T(A){b.fromBufferAttribute(s,A),w.copy(b);const S=a[A];y.copy(S),y.sub(b.multiplyScalar(b.dot(S))).normalize(),g.crossVectors(w,S);const C=g.dot(l[A])<0?-1:1;r.setXYZW(A,y.x,y.y,y.z,C)}for(let A=0,S=x.length;A<S;++A){const M=x[A],C=M.start,P=M.count;for(let F=C,O=C+P;F<O;F+=3)T(e.getX(F+0)),T(e.getX(F+1)),T(e.getX(F+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new mn(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let u=0,f=i.count;u<f;u++)i.setXYZ(u,0,0,0);const s=new D,o=new D,r=new D,a=new D,l=new D,c=new D,h=new D,d=new D;if(e)for(let u=0,f=e.count;u<f;u+=3){const v=e.getX(u+0),_=e.getX(u+1),m=e.getX(u+2);s.fromBufferAttribute(t,v),o.fromBufferAttribute(t,_),r.fromBufferAttribute(t,m),h.subVectors(r,o),d.subVectors(s,o),h.cross(d),a.fromBufferAttribute(i,v),l.fromBufferAttribute(i,_),c.fromBufferAttribute(i,m),a.add(h),l.add(h),c.add(h),i.setXYZ(v,a.x,a.y,a.z),i.setXYZ(_,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let u=0,f=t.count;u<f;u+=3)s.fromBufferAttribute(t,u+0),o.fromBufferAttribute(t,u+1),r.fromBufferAttribute(t,u+2),h.subVectors(r,o),d.subVectors(s,o),h.cross(d),i.setXYZ(u+0,h.x,h.y,h.z),i.setXYZ(u+1,h.x,h.y,h.z),i.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Bt.fromBufferAttribute(e,t),Bt.normalize(),e.setXYZ(t,Bt.x,Bt.y,Bt.z)}toNonIndexed(){function e(a,l){const c=a.array,h=a.itemSize,d=a.normalized,u=new c.constructor(l.length*h);let f=0,v=0;for(let _=0,m=l.length;_<m;_++){a.isInterleavedBufferAttribute?f=l[_]*a.data.stride+a.offset:f=l[_]*h;for(let p=0;p<h;p++)u[v++]=c[f++]}return new mn(u,h,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Ht,i=this.index.array,s=this.attributes;for(const a in s){const l=s[a],c=e(l,i);t.setAttribute(a,c)}const o=this.morphAttributes;for(const a in o){const l=[],c=o[a];for(let h=0,d=c.length;h<d;h++){const u=c[h],f=e(u,i);l.push(f)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const r=this.groups;for(let a=0,l=r.length;a<l;a++){const c=r[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const s={};let o=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let d=0,u=c.length;d<u;d++){const f=c[d];h.push(f.toJSON(e.data))}h.length>0&&(s[l]=h,o=!0)}o&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const r=this.groups;r.length>0&&(e.data.groups=JSON.parse(JSON.stringify(r)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const s=e.attributes;for(const c in s){const h=s[c];this.setAttribute(c,h.clone(t))}const o=e.morphAttributes;for(const c in o){const h=[],d=o[c];for(let u=0,f=d.length;u<f;u++)h.push(d[u].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;const r=e.groups;for(let c=0,h=r.length;c<h;c++){const d=r[c];this.addGroup(d.start,d.count,d.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const ch=new _t,Ai=new jr,Jo=new qr,hh=new D,Qo=new D,er=new D,tr=new D,Ma=new D,nr=new D,dh=new D,ir=new D;class B extends Dt{constructor(e=new Ht,t=new ht){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,r=s.length;o<r;o++){const a=s[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=o}}}}getVertexPosition(e,t){const i=this.geometry,s=i.attributes.position,o=i.morphAttributes.position,r=i.morphTargetsRelative;t.fromBufferAttribute(s,e);const a=this.morphTargetInfluences;if(o&&a){nr.set(0,0,0);for(let l=0,c=o.length;l<c;l++){const h=a[l],d=o[l];h!==0&&(Ma.fromBufferAttribute(d,e),r?nr.addScaledVector(Ma,h):nr.addScaledVector(Ma.sub(t),h))}t.add(nr)}return t}raycast(e,t){const i=this.geometry,s=this.material,o=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Jo.copy(i.boundingSphere),Jo.applyMatrix4(o),Ai.copy(e.ray).recast(e.near),!(Jo.containsPoint(Ai.origin)===!1&&(Ai.intersectSphere(Jo,hh)===null||Ai.origin.distanceToSquared(hh)>(e.far-e.near)**2))&&(ch.copy(o).invert(),Ai.copy(e.ray).applyMatrix4(ch),!(i.boundingBox!==null&&Ai.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Ai)))}_computeIntersections(e,t,i){let s;const o=this.geometry,r=this.material,a=o.index,l=o.attributes.position,c=o.attributes.uv,h=o.attributes.uv1,d=o.attributes.normal,u=o.groups,f=o.drawRange;if(a!==null)if(Array.isArray(r))for(let v=0,_=u.length;v<_;v++){const m=u[v],p=r[m.materialIndex],x=Math.max(m.start,f.start),y=Math.min(a.count,Math.min(m.start+m.count,f.start+f.count));for(let g=x,b=y;g<b;g+=3){const w=a.getX(g),T=a.getX(g+1),A=a.getX(g+2);s=sr(this,p,e,i,c,h,d,w,T,A),s&&(s.faceIndex=Math.floor(g/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{const v=Math.max(0,f.start),_=Math.min(a.count,f.start+f.count);for(let m=v,p=_;m<p;m+=3){const x=a.getX(m),y=a.getX(m+1),g=a.getX(m+2);s=sr(this,r,e,i,c,h,d,x,y,g),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(r))for(let v=0,_=u.length;v<_;v++){const m=u[v],p=r[m.materialIndex],x=Math.max(m.start,f.start),y=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let g=x,b=y;g<b;g+=3){const w=g,T=g+1,A=g+2;s=sr(this,p,e,i,c,h,d,w,T,A),s&&(s.faceIndex=Math.floor(g/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{const v=Math.max(0,f.start),_=Math.min(l.count,f.start+f.count);for(let m=v,p=_;m<p;m+=3){const x=m,y=m+1,g=m+2;s=sr(this,r,e,i,c,h,d,x,y,g),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}}function qp(n,e,t,i,s,o,r,a){let l;if(e.side===tn?l=i.intersectTriangle(r,o,s,!0,a):l=i.intersectTriangle(s,o,r,e.side===_i,a),l===null)return null;ir.copy(a),ir.applyMatrix4(n.matrixWorld);const c=t.ray.origin.distanceTo(ir);return c<t.near||c>t.far?null:{distance:c,point:ir.clone(),object:n}}function sr(n,e,t,i,s,o,r,a,l,c){n.getVertexPosition(a,Qo),n.getVertexPosition(l,er),n.getVertexPosition(c,tr);const h=qp(n,e,t,i,Qo,er,tr,dh);if(h){const d=new D;fn.getBarycoord(dh,Qo,er,tr,d),s&&(h.uv=fn.getInterpolatedAttribute(s,a,l,c,d,new Re)),o&&(h.uv1=fn.getInterpolatedAttribute(o,a,l,c,d,new Re)),r&&(h.normal=fn.getInterpolatedAttribute(r,a,l,c,d,new D),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));const u={a,b:l,c,normal:new D,materialIndex:0};fn.getNormal(Qo,er,tr,u.normal),h.face=u,h.barycoord=d}return h}class pe extends Ht{constructor(e=1,t=1,i=1,s=1,o=1,r=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:s,heightSegments:o,depthSegments:r};const a=this;s=Math.floor(s),o=Math.floor(o),r=Math.floor(r);const l=[],c=[],h=[],d=[];let u=0,f=0;v("z","y","x",-1,-1,i,t,e,r,o,0),v("z","y","x",1,-1,i,t,-e,r,o,1),v("x","z","y",1,1,e,i,t,s,r,2),v("x","z","y",1,-1,e,i,-t,s,r,3),v("x","y","z",1,-1,e,t,i,s,o,4),v("x","y","z",-1,-1,e,t,-i,s,o,5),this.setIndex(l),this.setAttribute("position",new at(c,3)),this.setAttribute("normal",new at(h,3)),this.setAttribute("uv",new at(d,2));function v(_,m,p,x,y,g,b,w,T,A,S){const M=g/T,C=b/A,P=g/2,F=b/2,O=w/2,G=T+1,$=A+1;let te=0,K=0;const X=new D;for(let Y=0;Y<$;Y++){const k=Y*C-F;for(let Z=0;Z<G;Z++){const W=Z*M-P;X[_]=W*x,X[m]=k*y,X[p]=O,c.push(X.x,X.y,X.z),X[_]=0,X[m]=0,X[p]=w>0?1:-1,h.push(X.x,X.y,X.z),d.push(Z/T),d.push(1-Y/A),te+=1}}for(let Y=0;Y<A;Y++)for(let k=0;k<T;k++){const Z=u+k+G*Y,W=u+k+G*(Y+1),N=u+(k+1)+G*(Y+1),j=u+(k+1)+G*Y;l.push(Z,W,j),l.push(W,N,j),K+=6}a.addGroup(f,K,S),f+=K,u+=te}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new pe(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Hs(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const s=n[t][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=s.clone():Array.isArray(s)?e[t][i]=s.slice():e[t][i]=s}}return e}function Kt(n){const e={};for(let t=0;t<n.length;t++){const i=Hs(n[t]);for(const s in i)e[s]=i[s]}return e}function jp(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function iu(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:st.workingColorSpace}const Kp={clone:Hs,merge:Kt};var Zp=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Jp=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class yi extends Yi{static get type(){return"ShaderMaterial"}constructor(e){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Zp,this.fragmentShader=Jp,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Hs(e.uniforms),this.uniformsGroups=jp(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const r=this.uniforms[s].value;r&&r.isTexture?t.uniforms[s]={type:"t",value:r.toJSON(e).uuid}:r&&r.isColor?t.uniforms[s]={type:"c",value:r.getHex()}:r&&r.isVector2?t.uniforms[s]={type:"v2",value:r.toArray()}:r&&r.isVector3?t.uniforms[s]={type:"v3",value:r.toArray()}:r&&r.isVector4?t.uniforms[s]={type:"v4",value:r.toArray()}:r&&r.isMatrix3?t.uniforms[s]={type:"m3",value:r.toArray()}:r&&r.isMatrix4?t.uniforms[s]={type:"m4",value:r.toArray()}:t.uniforms[s]={value:r}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class su extends Dt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new _t,this.projectionMatrix=new _t,this.projectionMatrixInverse=new _t,this.coordinateSystem=qn}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const ci=new D,uh=new Re,fh=new Re;class an extends su{constructor(e=50,t=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=wo*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(_o*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return wo*2*Math.atan(Math.tan(_o*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){ci.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(ci.x,ci.y).multiplyScalar(-e/ci.z),ci.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(ci.x,ci.y).multiplyScalar(-e/ci.z)}getViewSize(e,t){return this.getViewBounds(e,uh,fh),t.subVectors(fh,uh)}setViewOffset(e,t,i,s,o,r){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=o,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(_o*.5*this.fov)/this.zoom,i=2*t,s=this.aspect*i,o=-.5*s;const r=this.view;if(this.view!==null&&this.view.enabled){const l=r.fullWidth,c=r.fullHeight;o+=r.offsetX*s/l,t-=r.offsetY*i/c,s*=r.width/l,i*=r.height/c}const a=this.filmOffset;a!==0&&(o+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(o,o+s,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const hs=-90,ds=1;class Qp extends Dt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new an(hs,ds,e,t);s.layers=this.layers,this.add(s);const o=new an(hs,ds,e,t);o.layers=this.layers,this.add(o);const r=new an(hs,ds,e,t);r.layers=this.layers,this.add(r);const a=new an(hs,ds,e,t);a.layers=this.layers,this.add(a);const l=new an(hs,ds,e,t);l.layers=this.layers,this.add(l);const c=new an(hs,ds,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,s,o,r,a,l]=t;for(const c of t)this.remove(c);if(e===qn)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),o.up.set(0,0,-1),o.lookAt(0,1,0),r.up.set(0,0,1),r.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Ir)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),o.up.set(0,0,1),o.lookAt(0,1,0),r.up.set(0,0,-1),r.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[o,r,a,l,c,h]=this.children,d=e.getRenderTarget(),u=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),v=e.xr.enabled;e.xr.enabled=!1;const _=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,s),e.render(t,o),e.setRenderTarget(i,1,s),e.render(t,r),e.setRenderTarget(i,2,s),e.render(t,a),e.setRenderTarget(i,3,s),e.render(t,l),e.setRenderTarget(i,4,s),e.render(t,c),i.texture.generateMipmaps=_,e.setRenderTarget(i,5,s),e.render(t,h),e.setRenderTarget(d,u,f),e.xr.enabled=v,i.texture.needsPMREMUpdate=!0}}class ou extends Zt{constructor(e,t,i,s,o,r,a,l,c,h){e=e!==void 0?e:[],t=t!==void 0?t:Bs,super(e,t,i,s,o,r,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class em extends zi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];this.texture=new ou(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Dn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new pe(5,5,5),o=new yi({name:"CubemapFromEquirect",uniforms:Hs(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:tn,blending:gi});o.uniforms.tEquirect.value=t;const r=new B(s,o),a=t.minFilter;return t.minFilter===Bi&&(t.minFilter=Dn),new Qp(1,10,this).update(e,r),t.minFilter=a,r.geometry.dispose(),r.material.dispose(),this}clear(e,t,i,s){const o=e.getRenderTarget();for(let r=0;r<6;r++)e.setRenderTarget(this,r),e.clear(t,i,s);e.setRenderTarget(o)}}const ba=new D,tm=new D,nm=new Je;class hi{constructor(e=new D(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,s){return this.normal.set(e,t,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const s=ba.subVectors(i,t).cross(tm.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(ba),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const o=-(e.start.dot(this.normal)+this.constant)/s;return o<0||o>1?null:t.copy(e.start).addScaledVector(i,o)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||nm.getNormalMatrix(e),s=this.coplanarPoint(ba).applyMatrix4(e),o=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(o),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ci=new qr,or=new D;class yc{constructor(e=new hi,t=new hi,i=new hi,s=new hi,o=new hi,r=new hi){this.planes=[e,t,i,s,o,r]}set(e,t,i,s,o,r){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(s),a[4].copy(o),a[5].copy(r),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=qn){const i=this.planes,s=e.elements,o=s[0],r=s[1],a=s[2],l=s[3],c=s[4],h=s[5],d=s[6],u=s[7],f=s[8],v=s[9],_=s[10],m=s[11],p=s[12],x=s[13],y=s[14],g=s[15];if(i[0].setComponents(l-o,u-c,m-f,g-p).normalize(),i[1].setComponents(l+o,u+c,m+f,g+p).normalize(),i[2].setComponents(l+r,u+h,m+v,g+x).normalize(),i[3].setComponents(l-r,u-h,m-v,g-x).normalize(),i[4].setComponents(l-a,u-d,m-_,g-y).normalize(),t===qn)i[5].setComponents(l+a,u+d,m+_,g+y).normalize();else if(t===Ir)i[5].setComponents(a,d,_,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ci.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Ci.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ci)}intersectsSprite(e){return Ci.center.set(0,0,0),Ci.radius=.7071067811865476,Ci.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ci)}intersectsSphere(e){const t=this.planes,i=e.center,s=-e.radius;for(let o=0;o<6;o++)if(t[o].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const s=t[i];if(or.x=s.normal.x>0?e.max.x:e.min.x,or.y=s.normal.y>0?e.max.y:e.min.y,or.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(or)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function ru(){let n=null,e=!1,t=null,i=null;function s(o,r){t(o,r),i=n.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(s),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(o){t=o},setContext:function(o){n=o}}}function im(n){const e=new WeakMap;function t(a,l){const c=a.array,h=a.usage,d=c.byteLength,u=n.createBuffer();n.bindBuffer(l,u),n.bufferData(l,c,h),a.onUploadCallback();let f;if(c instanceof Float32Array)f=n.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?f=n.HALF_FLOAT:f=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=n.SHORT;else if(c instanceof Uint32Array)f=n.UNSIGNED_INT;else if(c instanceof Int32Array)f=n.INT;else if(c instanceof Int8Array)f=n.BYTE;else if(c instanceof Uint8Array)f=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:d}}function i(a,l,c){const h=l.array,d=l.updateRanges;if(n.bindBuffer(c,a),d.length===0)n.bufferSubData(c,0,h);else{d.sort((f,v)=>f.start-v.start);let u=0;for(let f=1;f<d.length;f++){const v=d[u],_=d[f];_.start<=v.start+v.count+1?v.count=Math.max(v.count,_.start+_.count-v.start):(++u,d[u]=_)}d.length=u+1;for(let f=0,v=d.length;f<v;f++){const _=d[f];n.bufferSubData(c,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function o(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(n.deleteBuffer(l.buffer),e.delete(a))}function r(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const h=e.get(a);(!h||h.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:s,remove:o,update:r}}class St extends Ht{constructor(e=1,t=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:s};const o=e/2,r=t/2,a=Math.floor(i),l=Math.floor(s),c=a+1,h=l+1,d=e/a,u=t/l,f=[],v=[],_=[],m=[];for(let p=0;p<h;p++){const x=p*u-r;for(let y=0;y<c;y++){const g=y*d-o;v.push(g,-x,0),_.push(0,0,1),m.push(y/a),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let x=0;x<a;x++){const y=x+c*p,g=x+c*(p+1),b=x+1+c*(p+1),w=x+1+c*p;f.push(y,g,w),f.push(g,b,w)}this.setIndex(f),this.setAttribute("position",new at(v,3)),this.setAttribute("normal",new at(_,3)),this.setAttribute("uv",new at(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new St(e.width,e.height,e.widthSegments,e.heightSegments)}}var sm=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,om=`#ifdef USE_ALPHAHASH
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
#endif`,rm=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,am=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,lm=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,cm=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,hm=`#ifdef USE_AOMAP
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
#endif`,dm=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,um=`#ifdef USE_BATCHING
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
#endif`,fm=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,pm=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,mm=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,gm=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,vm=`#ifdef USE_IRIDESCENCE
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
#endif`,_m=`#ifdef USE_BUMPMAP
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
#endif`,ym=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,xm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Mm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,bm=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Sm=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Em=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,wm=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Tm=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Am=`#define PI 3.141592653589793
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
} // validated`,Cm=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Rm=`vec3 transformedNormal = objectNormal;
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
#endif`,Pm=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Lm=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Im=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Dm=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Nm="gl_FragColor = linearToOutputTexel( gl_FragColor );",Um=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,km=`#ifdef USE_ENVMAP
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
#endif`,Bm=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Om=`#ifdef USE_ENVMAP
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
#endif`,Fm=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,zm=`#ifdef USE_ENVMAP
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
#endif`,Hm=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Gm=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Vm=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Wm=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,$m=`#ifdef USE_GRADIENTMAP
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
}`,Xm=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Ym=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,qm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,jm=`uniform bool receiveShadow;
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
#endif`,Km=`#ifdef USE_ENVMAP
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
#endif`,Zm=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Jm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Qm=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,eg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,tg=`PhysicalMaterial material;
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
#endif`,ng=`struct PhysicalMaterial {
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
}`,ig=`
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
#endif`,sg=`#if defined( RE_IndirectDiffuse )
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
#endif`,og=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,rg=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,ag=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,lg=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,cg=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,hg=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,dg=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,ug=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,fg=`#if defined( USE_POINTS_UV )
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
#endif`,pg=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,mg=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,gg=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,vg=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,_g=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,yg=`#ifdef USE_MORPHTARGETS
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
#endif`,xg=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Mg=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,bg=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Sg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Eg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,wg=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Tg=`#ifdef USE_NORMALMAP
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
#endif`,Ag=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Cg=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Rg=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Pg=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Lg=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Ig=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Dg=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Ng=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Ug=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,kg=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Bg=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Og=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Fg=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,zg=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Hg=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Gg=`float getShadowMask() {
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
}`,Vg=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Wg=`#ifdef USE_SKINNING
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
#endif`,$g=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Xg=`#ifdef USE_SKINNING
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
#endif`,Yg=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,qg=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,jg=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Kg=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Zg=`#ifdef USE_TRANSMISSION
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
#endif`,Jg=`#ifdef USE_TRANSMISSION
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
#endif`,Qg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,e0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,t0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,n0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const i0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,s0=`uniform sampler2D t2D;
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
}`,o0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,r0=`#ifdef ENVMAP_TYPE_CUBE
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
}`,a0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,l0=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,c0=`#include <common>
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
}`,h0=`#if DEPTH_PACKING == 3200
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
}`,d0=`#define DISTANCE
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
}`,u0=`#define DISTANCE
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
}`,f0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,p0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,m0=`uniform float scale;
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
}`,g0=`uniform vec3 diffuse;
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
}`,v0=`#include <common>
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
}`,_0=`uniform vec3 diffuse;
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
}`,y0=`#define LAMBERT
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
}`,x0=`#define LAMBERT
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
}`,M0=`#define MATCAP
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
}`,b0=`#define MATCAP
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
}`,S0=`#define NORMAL
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
}`,E0=`#define NORMAL
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
}`,w0=`#define PHONG
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
}`,T0=`#define PHONG
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
}`,A0=`#define STANDARD
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
}`,C0=`#define STANDARD
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
}`,R0=`#define TOON
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
}`,P0=`#define TOON
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
}`,L0=`uniform float size;
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
}`,I0=`uniform vec3 diffuse;
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
}`,D0=`#include <common>
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
}`,N0=`uniform vec3 color;
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
}`,U0=`uniform float rotation;
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
}`,k0=`uniform vec3 diffuse;
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
}`,et={alphahash_fragment:sm,alphahash_pars_fragment:om,alphamap_fragment:rm,alphamap_pars_fragment:am,alphatest_fragment:lm,alphatest_pars_fragment:cm,aomap_fragment:hm,aomap_pars_fragment:dm,batching_pars_vertex:um,batching_vertex:fm,begin_vertex:pm,beginnormal_vertex:mm,bsdfs:gm,iridescence_fragment:vm,bumpmap_pars_fragment:_m,clipping_planes_fragment:ym,clipping_planes_pars_fragment:xm,clipping_planes_pars_vertex:Mm,clipping_planes_vertex:bm,color_fragment:Sm,color_pars_fragment:Em,color_pars_vertex:wm,color_vertex:Tm,common:Am,cube_uv_reflection_fragment:Cm,defaultnormal_vertex:Rm,displacementmap_pars_vertex:Pm,displacementmap_vertex:Lm,emissivemap_fragment:Im,emissivemap_pars_fragment:Dm,colorspace_fragment:Nm,colorspace_pars_fragment:Um,envmap_fragment:km,envmap_common_pars_fragment:Bm,envmap_pars_fragment:Om,envmap_pars_vertex:Fm,envmap_physical_pars_fragment:Km,envmap_vertex:zm,fog_vertex:Hm,fog_pars_vertex:Gm,fog_fragment:Vm,fog_pars_fragment:Wm,gradientmap_pars_fragment:$m,lightmap_pars_fragment:Xm,lights_lambert_fragment:Ym,lights_lambert_pars_fragment:qm,lights_pars_begin:jm,lights_toon_fragment:Zm,lights_toon_pars_fragment:Jm,lights_phong_fragment:Qm,lights_phong_pars_fragment:eg,lights_physical_fragment:tg,lights_physical_pars_fragment:ng,lights_fragment_begin:ig,lights_fragment_maps:sg,lights_fragment_end:og,logdepthbuf_fragment:rg,logdepthbuf_pars_fragment:ag,logdepthbuf_pars_vertex:lg,logdepthbuf_vertex:cg,map_fragment:hg,map_pars_fragment:dg,map_particle_fragment:ug,map_particle_pars_fragment:fg,metalnessmap_fragment:pg,metalnessmap_pars_fragment:mg,morphinstance_vertex:gg,morphcolor_vertex:vg,morphnormal_vertex:_g,morphtarget_pars_vertex:yg,morphtarget_vertex:xg,normal_fragment_begin:Mg,normal_fragment_maps:bg,normal_pars_fragment:Sg,normal_pars_vertex:Eg,normal_vertex:wg,normalmap_pars_fragment:Tg,clearcoat_normal_fragment_begin:Ag,clearcoat_normal_fragment_maps:Cg,clearcoat_pars_fragment:Rg,iridescence_pars_fragment:Pg,opaque_fragment:Lg,packing:Ig,premultiplied_alpha_fragment:Dg,project_vertex:Ng,dithering_fragment:Ug,dithering_pars_fragment:kg,roughnessmap_fragment:Bg,roughnessmap_pars_fragment:Og,shadowmap_pars_fragment:Fg,shadowmap_pars_vertex:zg,shadowmap_vertex:Hg,shadowmask_pars_fragment:Gg,skinbase_vertex:Vg,skinning_pars_vertex:Wg,skinning_vertex:$g,skinnormal_vertex:Xg,specularmap_fragment:Yg,specularmap_pars_fragment:qg,tonemapping_fragment:jg,tonemapping_pars_fragment:Kg,transmission_fragment:Zg,transmission_pars_fragment:Jg,uv_pars_fragment:Qg,uv_pars_vertex:e0,uv_vertex:t0,worldpos_vertex:n0,background_vert:i0,background_frag:s0,backgroundCube_vert:o0,backgroundCube_frag:r0,cube_vert:a0,cube_frag:l0,depth_vert:c0,depth_frag:h0,distanceRGBA_vert:d0,distanceRGBA_frag:u0,equirect_vert:f0,equirect_frag:p0,linedashed_vert:m0,linedashed_frag:g0,meshbasic_vert:v0,meshbasic_frag:_0,meshlambert_vert:y0,meshlambert_frag:x0,meshmatcap_vert:M0,meshmatcap_frag:b0,meshnormal_vert:S0,meshnormal_frag:E0,meshphong_vert:w0,meshphong_frag:T0,meshphysical_vert:A0,meshphysical_frag:C0,meshtoon_vert:R0,meshtoon_frag:P0,points_vert:L0,points_frag:I0,shadow_vert:D0,shadow_frag:N0,sprite_vert:U0,sprite_frag:k0},Ue={common:{diffuse:{value:new $e(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Je},alphaMap:{value:null},alphaMapTransform:{value:new Je},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Je}},envmap:{envMap:{value:null},envMapRotation:{value:new Je},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Je}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Je}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Je},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Je},normalScale:{value:new Re(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Je},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Je}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Je}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Je}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new $e(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new $e(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Je},alphaTest:{value:0},uvTransform:{value:new Je}},sprite:{diffuse:{value:new $e(16777215)},opacity:{value:1},center:{value:new Re(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Je},alphaMap:{value:null},alphaMapTransform:{value:new Je},alphaTest:{value:0}}},In={basic:{uniforms:Kt([Ue.common,Ue.specularmap,Ue.envmap,Ue.aomap,Ue.lightmap,Ue.fog]),vertexShader:et.meshbasic_vert,fragmentShader:et.meshbasic_frag},lambert:{uniforms:Kt([Ue.common,Ue.specularmap,Ue.envmap,Ue.aomap,Ue.lightmap,Ue.emissivemap,Ue.bumpmap,Ue.normalmap,Ue.displacementmap,Ue.fog,Ue.lights,{emissive:{value:new $e(0)}}]),vertexShader:et.meshlambert_vert,fragmentShader:et.meshlambert_frag},phong:{uniforms:Kt([Ue.common,Ue.specularmap,Ue.envmap,Ue.aomap,Ue.lightmap,Ue.emissivemap,Ue.bumpmap,Ue.normalmap,Ue.displacementmap,Ue.fog,Ue.lights,{emissive:{value:new $e(0)},specular:{value:new $e(1118481)},shininess:{value:30}}]),vertexShader:et.meshphong_vert,fragmentShader:et.meshphong_frag},standard:{uniforms:Kt([Ue.common,Ue.envmap,Ue.aomap,Ue.lightmap,Ue.emissivemap,Ue.bumpmap,Ue.normalmap,Ue.displacementmap,Ue.roughnessmap,Ue.metalnessmap,Ue.fog,Ue.lights,{emissive:{value:new $e(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:et.meshphysical_vert,fragmentShader:et.meshphysical_frag},toon:{uniforms:Kt([Ue.common,Ue.aomap,Ue.lightmap,Ue.emissivemap,Ue.bumpmap,Ue.normalmap,Ue.displacementmap,Ue.gradientmap,Ue.fog,Ue.lights,{emissive:{value:new $e(0)}}]),vertexShader:et.meshtoon_vert,fragmentShader:et.meshtoon_frag},matcap:{uniforms:Kt([Ue.common,Ue.bumpmap,Ue.normalmap,Ue.displacementmap,Ue.fog,{matcap:{value:null}}]),vertexShader:et.meshmatcap_vert,fragmentShader:et.meshmatcap_frag},points:{uniforms:Kt([Ue.points,Ue.fog]),vertexShader:et.points_vert,fragmentShader:et.points_frag},dashed:{uniforms:Kt([Ue.common,Ue.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:et.linedashed_vert,fragmentShader:et.linedashed_frag},depth:{uniforms:Kt([Ue.common,Ue.displacementmap]),vertexShader:et.depth_vert,fragmentShader:et.depth_frag},normal:{uniforms:Kt([Ue.common,Ue.bumpmap,Ue.normalmap,Ue.displacementmap,{opacity:{value:1}}]),vertexShader:et.meshnormal_vert,fragmentShader:et.meshnormal_frag},sprite:{uniforms:Kt([Ue.sprite,Ue.fog]),vertexShader:et.sprite_vert,fragmentShader:et.sprite_frag},background:{uniforms:{uvTransform:{value:new Je},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:et.background_vert,fragmentShader:et.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Je}},vertexShader:et.backgroundCube_vert,fragmentShader:et.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:et.cube_vert,fragmentShader:et.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:et.equirect_vert,fragmentShader:et.equirect_frag},distanceRGBA:{uniforms:Kt([Ue.common,Ue.displacementmap,{referencePosition:{value:new D},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:et.distanceRGBA_vert,fragmentShader:et.distanceRGBA_frag},shadow:{uniforms:Kt([Ue.lights,Ue.fog,{color:{value:new $e(0)},opacity:{value:1}}]),vertexShader:et.shadow_vert,fragmentShader:et.shadow_frag}};In.physical={uniforms:Kt([In.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Je},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Je},clearcoatNormalScale:{value:new Re(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Je},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Je},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Je},sheen:{value:0},sheenColor:{value:new $e(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Je},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Je},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Je},transmissionSamplerSize:{value:new Re},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Je},attenuationDistance:{value:0},attenuationColor:{value:new $e(0)},specularColor:{value:new $e(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Je},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Je},anisotropyVector:{value:new Re},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Je}}]),vertexShader:et.meshphysical_vert,fragmentShader:et.meshphysical_frag};const rr={r:0,b:0,g:0},Ri=new Bn,B0=new _t;function O0(n,e,t,i,s,o,r){const a=new $e(0);let l=o===!0?0:1,c,h,d=null,u=0,f=null;function v(x){let y=x.isScene===!0?x.background:null;return y&&y.isTexture&&(y=(x.backgroundBlurriness>0?t:e).get(y)),y}function _(x){let y=!1;const g=v(x);g===null?p(a,l):g&&g.isColor&&(p(g,1),y=!0);const b=n.xr.getEnvironmentBlendMode();b==="additive"?i.buffers.color.setClear(0,0,0,1,r):b==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,r),(n.autoClear||y)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function m(x,y){const g=v(y);g&&(g.isCubeTexture||g.mapping===Xr)?(h===void 0&&(h=new B(new pe(1,1,1),new yi({name:"BackgroundCubeMaterial",uniforms:Hs(In.backgroundCube.uniforms),vertexShader:In.backgroundCube.vertexShader,fragmentShader:In.backgroundCube.fragmentShader,side:tn,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(b,w,T){this.matrixWorld.copyPosition(T.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),Ri.copy(y.backgroundRotation),Ri.x*=-1,Ri.y*=-1,Ri.z*=-1,g.isCubeTexture&&g.isRenderTargetTexture===!1&&(Ri.y*=-1,Ri.z*=-1),h.material.uniforms.envMap.value=g,h.material.uniforms.flipEnvMap.value=g.isCubeTexture&&g.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(B0.makeRotationFromEuler(Ri)),h.material.toneMapped=st.getTransfer(g.colorSpace)!==ft,(d!==g||u!==g.version||f!==n.toneMapping)&&(h.material.needsUpdate=!0,d=g,u=g.version,f=n.toneMapping),h.layers.enableAll(),x.unshift(h,h.geometry,h.material,0,0,null)):g&&g.isTexture&&(c===void 0&&(c=new B(new St(2,2),new yi({name:"BackgroundMaterial",uniforms:Hs(In.background.uniforms),vertexShader:In.background.vertexShader,fragmentShader:In.background.fragmentShader,side:_i,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=g,c.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,c.material.toneMapped=st.getTransfer(g.colorSpace)!==ft,g.matrixAutoUpdate===!0&&g.updateMatrix(),c.material.uniforms.uvTransform.value.copy(g.matrix),(d!==g||u!==g.version||f!==n.toneMapping)&&(c.material.needsUpdate=!0,d=g,u=g.version,f=n.toneMapping),c.layers.enableAll(),x.unshift(c,c.geometry,c.material,0,0,null))}function p(x,y){x.getRGB(rr,iu(n)),i.buffers.color.setClear(rr.r,rr.g,rr.b,y,r)}return{getClearColor:function(){return a},setClearColor:function(x,y=1){a.set(x),l=y,p(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(x){l=x,p(a,l)},render:_,addToRenderList:m}}function F0(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=u(null);let o=s,r=!1;function a(M,C,P,F,O){let G=!1;const $=d(F,P,C);o!==$&&(o=$,c(o.object)),G=f(M,F,P,O),G&&v(M,F,P,O),O!==null&&e.update(O,n.ELEMENT_ARRAY_BUFFER),(G||r)&&(r=!1,g(M,C,P,F),O!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(O).buffer))}function l(){return n.createVertexArray()}function c(M){return n.bindVertexArray(M)}function h(M){return n.deleteVertexArray(M)}function d(M,C,P){const F=P.wireframe===!0;let O=i[M.id];O===void 0&&(O={},i[M.id]=O);let G=O[C.id];G===void 0&&(G={},O[C.id]=G);let $=G[F];return $===void 0&&($=u(l()),G[F]=$),$}function u(M){const C=[],P=[],F=[];for(let O=0;O<t;O++)C[O]=0,P[O]=0,F[O]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:C,enabledAttributes:P,attributeDivisors:F,object:M,attributes:{},index:null}}function f(M,C,P,F){const O=o.attributes,G=C.attributes;let $=0;const te=P.getAttributes();for(const K in te)if(te[K].location>=0){const Y=O[K];let k=G[K];if(k===void 0&&(K==="instanceMatrix"&&M.instanceMatrix&&(k=M.instanceMatrix),K==="instanceColor"&&M.instanceColor&&(k=M.instanceColor)),Y===void 0||Y.attribute!==k||k&&Y.data!==k.data)return!0;$++}return o.attributesNum!==$||o.index!==F}function v(M,C,P,F){const O={},G=C.attributes;let $=0;const te=P.getAttributes();for(const K in te)if(te[K].location>=0){let Y=G[K];Y===void 0&&(K==="instanceMatrix"&&M.instanceMatrix&&(Y=M.instanceMatrix),K==="instanceColor"&&M.instanceColor&&(Y=M.instanceColor));const k={};k.attribute=Y,Y&&Y.data&&(k.data=Y.data),O[K]=k,$++}o.attributes=O,o.attributesNum=$,o.index=F}function _(){const M=o.newAttributes;for(let C=0,P=M.length;C<P;C++)M[C]=0}function m(M){p(M,0)}function p(M,C){const P=o.newAttributes,F=o.enabledAttributes,O=o.attributeDivisors;P[M]=1,F[M]===0&&(n.enableVertexAttribArray(M),F[M]=1),O[M]!==C&&(n.vertexAttribDivisor(M,C),O[M]=C)}function x(){const M=o.newAttributes,C=o.enabledAttributes;for(let P=0,F=C.length;P<F;P++)C[P]!==M[P]&&(n.disableVertexAttribArray(P),C[P]=0)}function y(M,C,P,F,O,G,$){$===!0?n.vertexAttribIPointer(M,C,P,O,G):n.vertexAttribPointer(M,C,P,F,O,G)}function g(M,C,P,F){_();const O=F.attributes,G=P.getAttributes(),$=C.defaultAttributeValues;for(const te in G){const K=G[te];if(K.location>=0){let X=O[te];if(X===void 0&&(te==="instanceMatrix"&&M.instanceMatrix&&(X=M.instanceMatrix),te==="instanceColor"&&M.instanceColor&&(X=M.instanceColor)),X!==void 0){const Y=X.normalized,k=X.itemSize,Z=e.get(X);if(Z===void 0)continue;const W=Z.buffer,N=Z.type,j=Z.bytesPerElement,ae=N===n.INT||N===n.UNSIGNED_INT||X.gpuType===dc;if(X.isInterleavedBufferAttribute){const ie=X.data,ye=ie.stride,fe=X.offset;if(ie.isInstancedInterleavedBuffer){for(let Ie=0;Ie<K.locationSize;Ie++)p(K.location+Ie,ie.meshPerAttribute);M.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=ie.meshPerAttribute*ie.count)}else for(let Ie=0;Ie<K.locationSize;Ie++)m(K.location+Ie);n.bindBuffer(n.ARRAY_BUFFER,W);for(let Ie=0;Ie<K.locationSize;Ie++)y(K.location+Ie,k/K.locationSize,N,Y,ye*j,(fe+k/K.locationSize*Ie)*j,ae)}else{if(X.isInstancedBufferAttribute){for(let ie=0;ie<K.locationSize;ie++)p(K.location+ie,X.meshPerAttribute);M.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=X.meshPerAttribute*X.count)}else for(let ie=0;ie<K.locationSize;ie++)m(K.location+ie);n.bindBuffer(n.ARRAY_BUFFER,W);for(let ie=0;ie<K.locationSize;ie++)y(K.location+ie,k/K.locationSize,N,Y,k*j,k/K.locationSize*ie*j,ae)}}else if($!==void 0){const Y=$[te];if(Y!==void 0)switch(Y.length){case 2:n.vertexAttrib2fv(K.location,Y);break;case 3:n.vertexAttrib3fv(K.location,Y);break;case 4:n.vertexAttrib4fv(K.location,Y);break;default:n.vertexAttrib1fv(K.location,Y)}}}}x()}function b(){A();for(const M in i){const C=i[M];for(const P in C){const F=C[P];for(const O in F)h(F[O].object),delete F[O];delete C[P]}delete i[M]}}function w(M){if(i[M.id]===void 0)return;const C=i[M.id];for(const P in C){const F=C[P];for(const O in F)h(F[O].object),delete F[O];delete C[P]}delete i[M.id]}function T(M){for(const C in i){const P=i[C];if(P[M.id]===void 0)continue;const F=P[M.id];for(const O in F)h(F[O].object),delete F[O];delete P[M.id]}}function A(){S(),r=!0,o!==s&&(o=s,c(o.object))}function S(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:A,resetDefaultState:S,dispose:b,releaseStatesOfGeometry:w,releaseStatesOfProgram:T,initAttributes:_,enableAttribute:m,disableUnusedAttributes:x}}function z0(n,e,t){let i;function s(c){i=c}function o(c,h){n.drawArrays(i,c,h),t.update(h,i,1)}function r(c,h,d){d!==0&&(n.drawArraysInstanced(i,c,h,d),t.update(h,i,d))}function a(c,h,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,h,0,d);let f=0;for(let v=0;v<d;v++)f+=h[v];t.update(f,i,1)}function l(c,h,d,u){if(d===0)return;const f=e.get("WEBGL_multi_draw");if(f===null)for(let v=0;v<c.length;v++)r(c[v],h[v],u[v]);else{f.multiDrawArraysInstancedWEBGL(i,c,0,h,0,u,0,d);let v=0;for(let _=0;_<d;_++)v+=h[_]*u[_];t.update(v,i,1)}}this.setMode=s,this.render=o,this.renderInstances=r,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function H0(n,e,t,i){let s;function o(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const T=e.get("EXT_texture_filter_anisotropic");s=n.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function r(T){return!(T!==An&&i.convert(T)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(T){const A=T===Lo&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(T!==Jn&&i.convert(T)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&T!==Yn&&!A)}function l(T){if(T==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const d=t.logarithmicDepthBuffer===!0,u=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),f=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),v=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),p=n.getParameter(n.MAX_VERTEX_ATTRIBS),x=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),y=n.getParameter(n.MAX_VARYING_VECTORS),g=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),b=v>0,w=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:o,getMaxPrecision:l,textureFormatReadable:r,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:d,reverseDepthBuffer:u,maxTextures:f,maxVertexTextures:v,maxTextureSize:_,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:x,maxVaryings:y,maxFragmentUniforms:g,vertexTextures:b,maxSamples:w}}function G0(n){const e=this;let t=null,i=0,s=!1,o=!1;const r=new hi,a=new Je,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,u){const f=d.length!==0||u||i!==0||s;return s=u,i=d.length,f},this.beginShadows=function(){o=!0,h(null)},this.endShadows=function(){o=!1},this.setGlobalState=function(d,u){t=h(d,u,0)},this.setState=function(d,u,f){const v=d.clippingPlanes,_=d.clipIntersection,m=d.clipShadows,p=n.get(d);if(!s||v===null||v.length===0||o&&!m)o?h(null):c();else{const x=o?0:i,y=x*4;let g=p.clippingState||null;l.value=g,g=h(v,u,y,f);for(let b=0;b!==y;++b)g[b]=t[b];p.clippingState=g,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=x}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function h(d,u,f,v){const _=d!==null?d.length:0;let m=null;if(_!==0){if(m=l.value,v!==!0||m===null){const p=f+_*4,x=u.matrixWorldInverse;a.getNormalMatrix(x),(m===null||m.length<p)&&(m=new Float32Array(p));for(let y=0,g=f;y!==_;++y,g+=4)r.copy(d[y]).applyMatrix4(x,a),r.normal.toArray(m,g),m[g+3]=r.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,m}}function V0(n){let e=new WeakMap;function t(r,a){return a===yl?r.mapping=Bs:a===xl&&(r.mapping=Os),r}function i(r){if(r&&r.isTexture){const a=r.mapping;if(a===yl||a===xl)if(e.has(r)){const l=e.get(r).texture;return t(l,r.mapping)}else{const l=r.image;if(l&&l.height>0){const c=new em(l.height);return c.fromEquirectangularTexture(n,r),e.set(r,c),r.addEventListener("dispose",s),t(c.texture,r.mapping)}else return null}}return r}function s(r){const a=r.target;a.removeEventListener("dispose",s);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function o(){e=new WeakMap}return{get:i,dispose:o}}class au extends su{constructor(e=-1,t=1,i=1,s=-1,o=.1,r=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=s,this.near=o,this.far=r,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,s,o,r){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=o,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let o=i-e,r=i+e,a=s+t,l=s-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;o+=c*this.view.offsetX,r=o+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(o,r,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const xs=4,ph=[.125,.215,.35,.446,.526,.582],Ni=20,Sa=new au,mh=new $e;let Ea=null,wa=0,Ta=0,Aa=!1;const Li=(1+Math.sqrt(5))/2,us=1/Li,gh=[new D(-Li,us,0),new D(Li,us,0),new D(-us,0,Li),new D(us,0,Li),new D(0,Li,-us),new D(0,Li,us),new D(-1,1,-1),new D(1,1,-1),new D(-1,1,1),new D(1,1,1)];class vh{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,s=100){Ea=this._renderer.getRenderTarget(),wa=this._renderer.getActiveCubeFace(),Ta=this._renderer.getActiveMipmapLevel(),Aa=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const o=this._allocateTargets();return o.depthBuffer=!0,this._sceneToCubeUV(e,i,s,o),t>0&&this._blur(o,0,0,t),this._applyPMREM(o),this._cleanup(o),o}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=xh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=yh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Ea,wa,Ta),this._renderer.xr.enabled=Aa,e.scissorTest=!1,ar(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Bs||e.mapping===Os?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Ea=this._renderer.getRenderTarget(),wa=this._renderer.getActiveCubeFace(),Ta=this._renderer.getActiveMipmapLevel(),Aa=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Dn,minFilter:Dn,generateMipmaps:!1,type:Lo,format:An,colorSpace:Ws,depthBuffer:!1},s=_h(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=_h(e,t,i);const{_lodMax:o}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=W0(o)),this._blurMaterial=$0(o,e,t)}return s}_compileMaterial(e){const t=new B(this._lodPlanes[0],e);this._renderer.compile(t,Sa)}_sceneToCubeUV(e,t,i,s){const a=new an(90,1,t,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,d=h.autoClear,u=h.toneMapping;h.getClearColor(mh),h.toneMapping=vi,h.autoClear=!1;const f=new ht({name:"PMREM.Background",side:tn,depthWrite:!1,depthTest:!1}),v=new B(new pe,f);let _=!1;const m=e.background;m?m.isColor&&(f.color.copy(m),e.background=null,_=!0):(f.color.copy(mh),_=!0);for(let p=0;p<6;p++){const x=p%3;x===0?(a.up.set(0,l[p],0),a.lookAt(c[p],0,0)):x===1?(a.up.set(0,0,l[p]),a.lookAt(0,c[p],0)):(a.up.set(0,l[p],0),a.lookAt(0,0,c[p]));const y=this._cubeSize;ar(s,x*y,p>2?y:0,y,y),h.setRenderTarget(s),_&&h.render(v,a),h.render(e,a)}v.geometry.dispose(),v.material.dispose(),h.toneMapping=u,h.autoClear=d,e.background=m}_textureToCubeUV(e,t){const i=this._renderer,s=e.mapping===Bs||e.mapping===Os;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=xh()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=yh());const o=s?this._cubemapMaterial:this._equirectMaterial,r=new B(this._lodPlanes[0],o),a=o.uniforms;a.envMap.value=e;const l=this._cubeSize;ar(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(r,Sa)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const s=this._lodPlanes.length;for(let o=1;o<s;o++){const r=Math.sqrt(this._sigmas[o]*this._sigmas[o]-this._sigmas[o-1]*this._sigmas[o-1]),a=gh[(s-o-1)%gh.length];this._blur(e,o-1,o,r,a)}t.autoClear=i}_blur(e,t,i,s,o){const r=this._pingPongRenderTarget;this._halfBlur(e,r,t,i,s,"latitudinal",o),this._halfBlur(r,e,i,i,s,"longitudinal",o)}_halfBlur(e,t,i,s,o,r,a){const l=this._renderer,c=this._blurMaterial;r!=="latitudinal"&&r!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,d=new B(this._lodPlanes[s],c),u=c.uniforms,f=this._sizeLods[i]-1,v=isFinite(o)?Math.PI/(2*f):2*Math.PI/(2*Ni-1),_=o/v,m=isFinite(o)?1+Math.floor(h*_):Ni;m>Ni&&console.warn(`sigmaRadians, ${o}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Ni}`);const p=[];let x=0;for(let T=0;T<Ni;++T){const A=T/_,S=Math.exp(-A*A/2);p.push(S),T===0?x+=S:T<m&&(x+=2*S)}for(let T=0;T<p.length;T++)p[T]=p[T]/x;u.envMap.value=e.texture,u.samples.value=m,u.weights.value=p,u.latitudinal.value=r==="latitudinal",a&&(u.poleAxis.value=a);const{_lodMax:y}=this;u.dTheta.value=v,u.mipInt.value=y-i;const g=this._sizeLods[s],b=3*g*(s>y-xs?s-y+xs:0),w=4*(this._cubeSize-g);ar(t,b,w,3*g,2*g),l.setRenderTarget(t),l.render(d,Sa)}}function W0(n){const e=[],t=[],i=[];let s=n;const o=n-xs+1+ph.length;for(let r=0;r<o;r++){const a=Math.pow(2,s);t.push(a);let l=1/a;r>n-xs?l=ph[r-n+xs-1]:r===0&&(l=0),i.push(l);const c=1/(a-2),h=-c,d=1+c,u=[h,h,d,h,d,d,h,h,d,d,h,d],f=6,v=6,_=3,m=2,p=1,x=new Float32Array(_*v*f),y=new Float32Array(m*v*f),g=new Float32Array(p*v*f);for(let w=0;w<f;w++){const T=w%3*2/3-1,A=w>2?0:-1,S=[T,A,0,T+2/3,A,0,T+2/3,A+1,0,T,A,0,T+2/3,A+1,0,T,A+1,0];x.set(S,_*v*w),y.set(u,m*v*w);const M=[w,w,w,w,w,w];g.set(M,p*v*w)}const b=new Ht;b.setAttribute("position",new mn(x,_)),b.setAttribute("uv",new mn(y,m)),b.setAttribute("faceIndex",new mn(g,p)),e.push(b),s>xs&&s--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function _h(n,e,t){const i=new zi(n,e,t);return i.texture.mapping=Xr,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function ar(n,e,t,i,s){n.viewport.set(e,t,i,s),n.scissor.set(e,t,i,s)}function $0(n,e,t){const i=new Float32Array(Ni),s=new D(0,1,0);return new yi({name:"SphericalGaussianBlur",defines:{n:Ni,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:xc(),fragmentShader:`

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
		`,blending:gi,depthTest:!1,depthWrite:!1})}function yh(){return new yi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:xc(),fragmentShader:`

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
		`,blending:gi,depthTest:!1,depthWrite:!1})}function xh(){return new yi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:xc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:gi,depthTest:!1,depthWrite:!1})}function xc(){return`

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
	`}function X0(n){let e=new WeakMap,t=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===yl||l===xl,h=l===Bs||l===Os;if(c||h){let d=e.get(a);const u=d!==void 0?d.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==u)return t===null&&(t=new vh(n)),d=c?t.fromEquirectangular(a,d):t.fromCubemap(a,d),d.texture.pmremVersion=a.pmremVersion,e.set(a,d),d.texture;if(d!==void 0)return d.texture;{const f=a.image;return c&&f&&f.height>0||h&&f&&s(f)?(t===null&&(t=new vh(n)),d=c?t.fromEquirectangular(a):t.fromCubemap(a),d.texture.pmremVersion=a.pmremVersion,e.set(a,d),a.addEventListener("dispose",o),d.texture):null}}}return a}function s(a){let l=0;const c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function o(a){const l=a.target;l.removeEventListener("dispose",o);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function r(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:r}}function Y0(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let s;switch(i){case"WEBGL_depth_texture":s=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=n.getExtension(i)}return e[i]=s,s}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const s=t(i);return s===null&&fo("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function q0(n,e,t,i){const s={},o=new WeakMap;function r(d){const u=d.target;u.index!==null&&e.remove(u.index);for(const v in u.attributes)e.remove(u.attributes[v]);for(const v in u.morphAttributes){const _=u.morphAttributes[v];for(let m=0,p=_.length;m<p;m++)e.remove(_[m])}u.removeEventListener("dispose",r),delete s[u.id];const f=o.get(u);f&&(e.remove(f),o.delete(u)),i.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,t.memory.geometries--}function a(d,u){return s[u.id]===!0||(u.addEventListener("dispose",r),s[u.id]=!0,t.memory.geometries++),u}function l(d){const u=d.attributes;for(const v in u)e.update(u[v],n.ARRAY_BUFFER);const f=d.morphAttributes;for(const v in f){const _=f[v];for(let m=0,p=_.length;m<p;m++)e.update(_[m],n.ARRAY_BUFFER)}}function c(d){const u=[],f=d.index,v=d.attributes.position;let _=0;if(f!==null){const x=f.array;_=f.version;for(let y=0,g=x.length;y<g;y+=3){const b=x[y+0],w=x[y+1],T=x[y+2];u.push(b,w,w,T,T,b)}}else if(v!==void 0){const x=v.array;_=v.version;for(let y=0,g=x.length/3-1;y<g;y+=3){const b=y+0,w=y+1,T=y+2;u.push(b,w,w,T,T,b)}}else return;const m=new(Zd(u)?nu:tu)(u,1);m.version=_;const p=o.get(d);p&&e.remove(p),o.set(d,m)}function h(d){const u=o.get(d);if(u){const f=d.index;f!==null&&u.version<f.version&&c(d)}else c(d);return o.get(d)}return{get:a,update:l,getWireframeAttribute:h}}function j0(n,e,t){let i;function s(u){i=u}let o,r;function a(u){o=u.type,r=u.bytesPerElement}function l(u,f){n.drawElements(i,f,o,u*r),t.update(f,i,1)}function c(u,f,v){v!==0&&(n.drawElementsInstanced(i,f,o,u*r,v),t.update(f,i,v))}function h(u,f,v){if(v===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,f,0,o,u,0,v);let m=0;for(let p=0;p<v;p++)m+=f[p];t.update(m,i,1)}function d(u,f,v,_){if(v===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<u.length;p++)c(u[p]/r,f[p],_[p]);else{m.multiDrawElementsInstancedWEBGL(i,f,0,o,u,0,_,0,v);let p=0;for(let x=0;x<v;x++)p+=f[x]*_[x];t.update(p,i,1)}}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=d}function K0(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(o,r,a){switch(t.calls++,r){case n.TRIANGLES:t.triangles+=a*(o/3);break;case n.LINES:t.lines+=a*(o/2);break;case n.LINE_STRIP:t.lines+=a*(o-1);break;case n.LINE_LOOP:t.lines+=a*o;break;case n.POINTS:t.points+=a*o;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",r);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:i}}function Z0(n,e,t){const i=new WeakMap,s=new gt;function o(r,a,l){const c=r.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=h!==void 0?h.length:0;let u=i.get(a);if(u===void 0||u.count!==d){let M=function(){A.dispose(),i.delete(a),a.removeEventListener("dispose",M)};var f=M;u!==void 0&&u.texture.dispose();const v=a.morphAttributes.position!==void 0,_=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],x=a.morphAttributes.normal||[],y=a.morphAttributes.color||[];let g=0;v===!0&&(g=1),_===!0&&(g=2),m===!0&&(g=3);let b=a.attributes.position.count*g,w=1;b>e.maxTextureSize&&(w=Math.ceil(b/e.maxTextureSize),b=e.maxTextureSize);const T=new Float32Array(b*w*4*d),A=new Qd(T,b,w,d);A.type=Yn,A.needsUpdate=!0;const S=g*4;for(let C=0;C<d;C++){const P=p[C],F=x[C],O=y[C],G=b*w*4*C;for(let $=0;$<P.count;$++){const te=$*S;v===!0&&(s.fromBufferAttribute(P,$),T[G+te+0]=s.x,T[G+te+1]=s.y,T[G+te+2]=s.z,T[G+te+3]=0),_===!0&&(s.fromBufferAttribute(F,$),T[G+te+4]=s.x,T[G+te+5]=s.y,T[G+te+6]=s.z,T[G+te+7]=0),m===!0&&(s.fromBufferAttribute(O,$),T[G+te+8]=s.x,T[G+te+9]=s.y,T[G+te+10]=s.z,T[G+te+11]=O.itemSize===4?s.w:1)}}u={count:d,texture:A,size:new Re(b,w)},i.set(a,u),a.addEventListener("dispose",M)}if(r.isInstancedMesh===!0&&r.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",r.morphTexture,t);else{let v=0;for(let m=0;m<c.length;m++)v+=c[m];const _=a.morphTargetsRelative?1:1-v;l.getUniforms().setValue(n,"morphTargetBaseInfluence",_),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",u.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",u.size)}return{update:o}}function J0(n,e,t,i){let s=new WeakMap;function o(l){const c=i.render.frame,h=l.geometry,d=e.get(l,h);if(s.get(d)!==c&&(e.update(d),s.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){const u=l.skeleton;s.get(u)!==c&&(u.update(),s.set(u,c))}return d}function r(){s=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:o,dispose:r}}class lu extends Zt{constructor(e,t,i,s,o,r,a,l,c,h=As){if(h!==As&&h!==zs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&h===As&&(i=Fi),i===void 0&&h===zs&&(i=Fs),super(null,s,o,r,a,l,h,i,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:Cn,this.minFilter=l!==void 0?l:Cn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const cu=new Zt,Mh=new lu(1,1),hu=new Qd,du=new Op,uu=new ou,bh=[],Sh=[],Eh=new Float32Array(16),wh=new Float32Array(9),Th=new Float32Array(4);function $s(n,e,t){const i=n[0];if(i<=0||i>0)return n;const s=e*t;let o=bh[s];if(o===void 0&&(o=new Float32Array(s),bh[s]=o),e!==0){i.toArray(o,0);for(let r=1,a=0;r!==e;++r)a+=t,n[r].toArray(o,a)}return o}function Nt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function Ut(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function Kr(n,e){let t=Sh[e];t===void 0&&(t=new Int32Array(e),Sh[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function Q0(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function ev(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Nt(t,e))return;n.uniform2fv(this.addr,e),Ut(t,e)}}function tv(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Nt(t,e))return;n.uniform3fv(this.addr,e),Ut(t,e)}}function nv(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Nt(t,e))return;n.uniform4fv(this.addr,e),Ut(t,e)}}function iv(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Nt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),Ut(t,e)}else{if(Nt(t,i))return;Th.set(i),n.uniformMatrix2fv(this.addr,!1,Th),Ut(t,i)}}function sv(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Nt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),Ut(t,e)}else{if(Nt(t,i))return;wh.set(i),n.uniformMatrix3fv(this.addr,!1,wh),Ut(t,i)}}function ov(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Nt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),Ut(t,e)}else{if(Nt(t,i))return;Eh.set(i),n.uniformMatrix4fv(this.addr,!1,Eh),Ut(t,i)}}function rv(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function av(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Nt(t,e))return;n.uniform2iv(this.addr,e),Ut(t,e)}}function lv(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Nt(t,e))return;n.uniform3iv(this.addr,e),Ut(t,e)}}function cv(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Nt(t,e))return;n.uniform4iv(this.addr,e),Ut(t,e)}}function hv(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function dv(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Nt(t,e))return;n.uniform2uiv(this.addr,e),Ut(t,e)}}function uv(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Nt(t,e))return;n.uniform3uiv(this.addr,e),Ut(t,e)}}function fv(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Nt(t,e))return;n.uniform4uiv(this.addr,e),Ut(t,e)}}function pv(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let o;this.type===n.SAMPLER_2D_SHADOW?(Mh.compareFunction=Kd,o=Mh):o=cu,t.setTexture2D(e||o,s)}function mv(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture3D(e||du,s)}function gv(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTextureCube(e||uu,s)}function vv(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture2DArray(e||hu,s)}function _v(n){switch(n){case 5126:return Q0;case 35664:return ev;case 35665:return tv;case 35666:return nv;case 35674:return iv;case 35675:return sv;case 35676:return ov;case 5124:case 35670:return rv;case 35667:case 35671:return av;case 35668:case 35672:return lv;case 35669:case 35673:return cv;case 5125:return hv;case 36294:return dv;case 36295:return uv;case 36296:return fv;case 35678:case 36198:case 36298:case 36306:case 35682:return pv;case 35679:case 36299:case 36307:return mv;case 35680:case 36300:case 36308:case 36293:return gv;case 36289:case 36303:case 36311:case 36292:return vv}}function yv(n,e){n.uniform1fv(this.addr,e)}function xv(n,e){const t=$s(e,this.size,2);n.uniform2fv(this.addr,t)}function Mv(n,e){const t=$s(e,this.size,3);n.uniform3fv(this.addr,t)}function bv(n,e){const t=$s(e,this.size,4);n.uniform4fv(this.addr,t)}function Sv(n,e){const t=$s(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function Ev(n,e){const t=$s(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function wv(n,e){const t=$s(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function Tv(n,e){n.uniform1iv(this.addr,e)}function Av(n,e){n.uniform2iv(this.addr,e)}function Cv(n,e){n.uniform3iv(this.addr,e)}function Rv(n,e){n.uniform4iv(this.addr,e)}function Pv(n,e){n.uniform1uiv(this.addr,e)}function Lv(n,e){n.uniform2uiv(this.addr,e)}function Iv(n,e){n.uniform3uiv(this.addr,e)}function Dv(n,e){n.uniform4uiv(this.addr,e)}function Nv(n,e,t){const i=this.cache,s=e.length,o=Kr(t,s);Nt(i,o)||(n.uniform1iv(this.addr,o),Ut(i,o));for(let r=0;r!==s;++r)t.setTexture2D(e[r]||cu,o[r])}function Uv(n,e,t){const i=this.cache,s=e.length,o=Kr(t,s);Nt(i,o)||(n.uniform1iv(this.addr,o),Ut(i,o));for(let r=0;r!==s;++r)t.setTexture3D(e[r]||du,o[r])}function kv(n,e,t){const i=this.cache,s=e.length,o=Kr(t,s);Nt(i,o)||(n.uniform1iv(this.addr,o),Ut(i,o));for(let r=0;r!==s;++r)t.setTextureCube(e[r]||uu,o[r])}function Bv(n,e,t){const i=this.cache,s=e.length,o=Kr(t,s);Nt(i,o)||(n.uniform1iv(this.addr,o),Ut(i,o));for(let r=0;r!==s;++r)t.setTexture2DArray(e[r]||hu,o[r])}function Ov(n){switch(n){case 5126:return yv;case 35664:return xv;case 35665:return Mv;case 35666:return bv;case 35674:return Sv;case 35675:return Ev;case 35676:return wv;case 5124:case 35670:return Tv;case 35667:case 35671:return Av;case 35668:case 35672:return Cv;case 35669:case 35673:return Rv;case 5125:return Pv;case 36294:return Lv;case 36295:return Iv;case 36296:return Dv;case 35678:case 36198:case 36298:case 36306:case 35682:return Nv;case 35679:case 36299:case 36307:return Uv;case 35680:case 36300:case 36308:case 36293:return kv;case 36289:case 36303:case 36311:case 36292:return Bv}}class Fv{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=_v(t.type)}}class zv{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Ov(t.type)}}class Hv{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const s=this.seq;for(let o=0,r=s.length;o!==r;++o){const a=s[o];a.setValue(e,t[a.id],i)}}}const Ca=/(\w+)(\])?(\[|\.)?/g;function Ah(n,e){n.seq.push(e),n.map[e.id]=e}function Gv(n,e,t){const i=n.name,s=i.length;for(Ca.lastIndex=0;;){const o=Ca.exec(i),r=Ca.lastIndex;let a=o[1];const l=o[2]==="]",c=o[3];if(l&&(a=a|0),c===void 0||c==="["&&r+2===s){Ah(t,c===void 0?new Fv(a,n,e):new zv(a,n,e));break}else{let d=t.map[a];d===void 0&&(d=new Hv(a),Ah(t,d)),t=d}}}class Rr{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){const o=e.getActiveUniform(t,s),r=e.getUniformLocation(t,o.name);Gv(o,r,this)}}setValue(e,t,i,s){const o=this.map[t];o!==void 0&&o.setValue(e,i,s)}setOptional(e,t,i){const s=t[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,t,i,s){for(let o=0,r=t.length;o!==r;++o){const a=t[o],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,s)}}static seqWithValue(e,t){const i=[];for(let s=0,o=e.length;s!==o;++s){const r=e[s];r.id in t&&i.push(r)}return i}}function Ch(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const Vv=37297;let Wv=0;function $v(n,e){const t=n.split(`
`),i=[],s=Math.max(e-6,0),o=Math.min(e+6,t.length);for(let r=s;r<o;r++){const a=r+1;i.push(`${a===e?">":" "} ${a}: ${t[r]}`)}return i.join(`
`)}const Rh=new Je;function Xv(n){st._getMatrix(Rh,st.workingColorSpace,n);const e=`mat3( ${Rh.elements.map(t=>t.toFixed(4))} )`;switch(st.getTransfer(n)){case Yr:return[e,"LinearTransferOETF"];case ft:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function Ph(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),s=n.getShaderInfoLog(e).trim();if(i&&s==="")return"";const o=/ERROR: 0:(\d+)/.exec(s);if(o){const r=parseInt(o[1]);return t.toUpperCase()+`

`+s+`

`+$v(n.getShaderSource(e),r)}else return s}function Yv(n,e){const t=Xv(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function qv(n,e){let t;switch(e){case Zf:t="Linear";break;case Jf:t="Reinhard";break;case Qf:t="Cineon";break;case Bd:t="ACESFilmic";break;case tp:t="AgX";break;case np:t="Neutral";break;case ep:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const lr=new D;function jv(){st.getLuminanceCoefficients(lr);const n=lr.x.toFixed(4),e=lr.y.toFixed(4),t=lr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Kv(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(po).join(`
`)}function Zv(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function Jv(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){const o=n.getActiveAttrib(e,s),r=o.name;let a=1;o.type===n.FLOAT_MAT2&&(a=2),o.type===n.FLOAT_MAT3&&(a=3),o.type===n.FLOAT_MAT4&&(a=4),t[r]={type:o.type,location:n.getAttribLocation(e,r),locationSize:a}}return t}function po(n){return n!==""}function Lh(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Ih(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Qv=/^[ \t]*#include +<([\w\d./]+)>/gm;function jl(n){return n.replace(Qv,t_)}const e_=new Map;function t_(n,e){let t=et[e];if(t===void 0){const i=e_.get(e);if(i!==void 0)t=et[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return jl(t)}const n_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Dh(n){return n.replace(n_,i_)}function i_(n,e,t,i){let s="";for(let o=parseInt(e);o<parseInt(t);o++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+o+" ]").replace(/UNROLLED_LOOP_INDEX/g,o);return s}function Nh(n){let e=`precision ${n.precision} float;
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
	`;return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function s_(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===Nd?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===Ud?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===Xn&&(e="SHADOWMAP_TYPE_VSM"),e}function o_(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case Bs:case Os:e="ENVMAP_TYPE_CUBE";break;case Xr:e="ENVMAP_TYPE_CUBE_UV";break}return e}function r_(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case Os:e="ENVMAP_MODE_REFRACTION";break}return e}function a_(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case kd:e="ENVMAP_BLENDING_MULTIPLY";break;case jf:e="ENVMAP_BLENDING_MIX";break;case Kf:e="ENVMAP_BLENDING_ADD";break}return e}function l_(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function c_(n,e,t,i){const s=n.getContext(),o=t.defines;let r=t.vertexShader,a=t.fragmentShader;const l=s_(t),c=o_(t),h=r_(t),d=a_(t),u=l_(t),f=Kv(t),v=Zv(o),_=s.createProgram();let m,p,x=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v].filter(po).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v].filter(po).join(`
`),p.length>0&&(p+=`
`)):(m=[Nh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(po).join(`
`),p=[Nh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+d:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==vi?"#define TONE_MAPPING":"",t.toneMapping!==vi?et.tonemapping_pars_fragment:"",t.toneMapping!==vi?qv("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",et.colorspace_pars_fragment,Yv("linearToOutputTexel",t.outputColorSpace),jv(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(po).join(`
`)),r=jl(r),r=Lh(r,t),r=Ih(r,t),a=jl(a),a=Lh(a,t),a=Ih(a,t),r=Dh(r),a=Dh(a),t.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===Xc?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Xc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const y=x+m+r,g=x+p+a,b=Ch(s,s.VERTEX_SHADER,y),w=Ch(s,s.FRAGMENT_SHADER,g);s.attachShader(_,b),s.attachShader(_,w),t.index0AttributeName!==void 0?s.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function T(C){if(n.debug.checkShaderErrors){const P=s.getProgramInfoLog(_).trim(),F=s.getShaderInfoLog(b).trim(),O=s.getShaderInfoLog(w).trim();let G=!0,$=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if(G=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,_,b,w);else{const te=Ph(s,b,"vertex"),K=Ph(s,w,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Material Name: `+C.name+`
Material Type: `+C.type+`

Program Info Log: `+P+`
`+te+`
`+K)}else P!==""?console.warn("THREE.WebGLProgram: Program Info Log:",P):(F===""||O==="")&&($=!1);$&&(C.diagnostics={runnable:G,programLog:P,vertexShader:{log:F,prefix:m},fragmentShader:{log:O,prefix:p}})}s.deleteShader(b),s.deleteShader(w),A=new Rr(s,_),S=Jv(s,_)}let A;this.getUniforms=function(){return A===void 0&&T(this),A};let S;this.getAttributes=function(){return S===void 0&&T(this),S};let M=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=s.getProgramParameter(_,Vv)),M},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Wv++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=b,this.fragmentShader=w,this}let h_=0;class d_{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,s=this._getShaderStage(t),o=this._getShaderStage(i),r=this._getShaderCacheForMaterial(e);return r.has(s)===!1&&(r.add(s),s.usedTimes++),r.has(o)===!1&&(r.add(o),o.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new u_(e),t.set(e,i)),i}}class u_{constructor(e){this.id=h_++,this.code=e,this.usedTimes=0}}function f_(n,e,t,i,s,o,r){const a=new _c,l=new d_,c=new Set,h=[],d=s.logarithmicDepthBuffer,u=s.vertexTextures;let f=s.precision;const v={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(S){return c.add(S),S===0?"uv":`uv${S}`}function m(S,M,C,P,F){const O=P.fog,G=F.geometry,$=S.isMeshStandardMaterial?P.environment:null,te=(S.isMeshStandardMaterial?t:e).get(S.envMap||$),K=te&&te.mapping===Xr?te.image.height:null,X=v[S.type];S.precision!==null&&(f=s.getMaxPrecision(S.precision),f!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",f,"instead."));const Y=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,k=Y!==void 0?Y.length:0;let Z=0;G.morphAttributes.position!==void 0&&(Z=1),G.morphAttributes.normal!==void 0&&(Z=2),G.morphAttributes.color!==void 0&&(Z=3);let W,N,j,ae;if(X){const nt=In[X];W=nt.vertexShader,N=nt.fragmentShader}else W=S.vertexShader,N=S.fragmentShader,l.update(S),j=l.getVertexShaderID(S),ae=l.getFragmentShaderID(S);const ie=n.getRenderTarget(),ye=n.state.buffers.depth.getReversed(),fe=F.isInstancedMesh===!0,Ie=F.isBatchedMesh===!0,ke=!!S.map,he=!!S.matcap,ge=!!te,I=!!S.aoMap,Me=!!S.lightMap,z=!!S.bumpMap,_e=!!S.normalMap,ce=!!S.displacementMap,Le=!!S.emissiveMap,Ee=!!S.metalnessMap,L=!!S.roughnessMap,E=S.anisotropy>0,V=S.clearcoat>0,re=S.dispersion>0,q=S.iridescence>0,U=S.sheen>0,se=S.transmission>0,oe=E&&!!S.anisotropyMap,le=V&&!!S.clearcoatMap,we=V&&!!S.clearcoatNormalMap,ee=V&&!!S.clearcoatRoughnessMap,be=q&&!!S.iridescenceMap,xe=q&&!!S.iridescenceThicknessMap,Ce=U&&!!S.sheenColorMap,Pe=U&&!!S.sheenRoughnessMap,Ne=!!S.specularMap,Fe=!!S.specularColorMap,ve=!!S.specularIntensityMap,H=se&&!!S.transmissionMap,Ae=se&&!!S.thicknessMap,ne=!!S.gradientMap,me=!!S.alphaMap,Se=S.alphaTest>0,Te=!!S.alphaHash,Ve=!!S.extensions;let Qe=vi;S.toneMapped&&(ie===null||ie.isXRRenderTarget===!0)&&(Qe=n.toneMapping);const ut={shaderID:X,shaderType:S.type,shaderName:S.name,vertexShader:W,fragmentShader:N,defines:S.defines,customVertexShaderID:j,customFragmentShaderID:ae,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:f,batching:Ie,batchingColor:Ie&&F._colorsTexture!==null,instancing:fe,instancingColor:fe&&F.instanceColor!==null,instancingMorph:fe&&F.morphTexture!==null,supportsVertexTextures:u,outputColorSpace:ie===null?n.outputColorSpace:ie.isXRRenderTarget===!0?ie.texture.colorSpace:Ws,alphaToCoverage:!!S.alphaToCoverage,map:ke,matcap:he,envMap:ge,envMapMode:ge&&te.mapping,envMapCubeUVHeight:K,aoMap:I,lightMap:Me,bumpMap:z,normalMap:_e,displacementMap:u&&ce,emissiveMap:Le,normalMapObjectSpace:_e&&S.normalMapType===rp,normalMapTangentSpace:_e&&S.normalMapType===jd,metalnessMap:Ee,roughnessMap:L,anisotropy:E,anisotropyMap:oe,clearcoat:V,clearcoatMap:le,clearcoatNormalMap:we,clearcoatRoughnessMap:ee,dispersion:re,iridescence:q,iridescenceMap:be,iridescenceThicknessMap:xe,sheen:U,sheenColorMap:Ce,sheenRoughnessMap:Pe,specularMap:Ne,specularColorMap:Fe,specularIntensityMap:ve,transmission:se,transmissionMap:H,thicknessMap:Ae,gradientMap:ne,opaque:S.transparent===!1&&S.blending===Ts&&S.alphaToCoverage===!1,alphaMap:me,alphaTest:Se,alphaHash:Te,combine:S.combine,mapUv:ke&&_(S.map.channel),aoMapUv:I&&_(S.aoMap.channel),lightMapUv:Me&&_(S.lightMap.channel),bumpMapUv:z&&_(S.bumpMap.channel),normalMapUv:_e&&_(S.normalMap.channel),displacementMapUv:ce&&_(S.displacementMap.channel),emissiveMapUv:Le&&_(S.emissiveMap.channel),metalnessMapUv:Ee&&_(S.metalnessMap.channel),roughnessMapUv:L&&_(S.roughnessMap.channel),anisotropyMapUv:oe&&_(S.anisotropyMap.channel),clearcoatMapUv:le&&_(S.clearcoatMap.channel),clearcoatNormalMapUv:we&&_(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ee&&_(S.clearcoatRoughnessMap.channel),iridescenceMapUv:be&&_(S.iridescenceMap.channel),iridescenceThicknessMapUv:xe&&_(S.iridescenceThicknessMap.channel),sheenColorMapUv:Ce&&_(S.sheenColorMap.channel),sheenRoughnessMapUv:Pe&&_(S.sheenRoughnessMap.channel),specularMapUv:Ne&&_(S.specularMap.channel),specularColorMapUv:Fe&&_(S.specularColorMap.channel),specularIntensityMapUv:ve&&_(S.specularIntensityMap.channel),transmissionMapUv:H&&_(S.transmissionMap.channel),thicknessMapUv:Ae&&_(S.thicknessMap.channel),alphaMapUv:me&&_(S.alphaMap.channel),vertexTangents:!!G.attributes.tangent&&(_e||E),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,pointsUvs:F.isPoints===!0&&!!G.attributes.uv&&(ke||me),fog:!!O,useFog:S.fog===!0,fogExp2:!!O&&O.isFogExp2,flatShading:S.flatShading===!0,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:d,reverseDepthBuffer:ye,skinning:F.isSkinnedMesh===!0,morphTargets:G.morphAttributes.position!==void 0,morphNormals:G.morphAttributes.normal!==void 0,morphColors:G.morphAttributes.color!==void 0,morphTargetsCount:k,morphTextureStride:Z,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:S.dithering,shadowMapEnabled:n.shadowMap.enabled&&C.length>0,shadowMapType:n.shadowMap.type,toneMapping:Qe,decodeVideoTexture:ke&&S.map.isVideoTexture===!0&&st.getTransfer(S.map.colorSpace)===ft,decodeVideoTextureEmissive:Le&&S.emissiveMap.isVideoTexture===!0&&st.getTransfer(S.emissiveMap.colorSpace)===ft,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===ln,flipSided:S.side===tn,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:Ve&&S.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ve&&S.extensions.multiDraw===!0||Ie)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return ut.vertexUv1s=c.has(1),ut.vertexUv2s=c.has(2),ut.vertexUv3s=c.has(3),c.clear(),ut}function p(S){const M=[];if(S.shaderID?M.push(S.shaderID):(M.push(S.customVertexShaderID),M.push(S.customFragmentShaderID)),S.defines!==void 0)for(const C in S.defines)M.push(C),M.push(S.defines[C]);return S.isRawShaderMaterial===!1&&(x(M,S),y(M,S),M.push(n.outputColorSpace)),M.push(S.customProgramCacheKey),M.join()}function x(S,M){S.push(M.precision),S.push(M.outputColorSpace),S.push(M.envMapMode),S.push(M.envMapCubeUVHeight),S.push(M.mapUv),S.push(M.alphaMapUv),S.push(M.lightMapUv),S.push(M.aoMapUv),S.push(M.bumpMapUv),S.push(M.normalMapUv),S.push(M.displacementMapUv),S.push(M.emissiveMapUv),S.push(M.metalnessMapUv),S.push(M.roughnessMapUv),S.push(M.anisotropyMapUv),S.push(M.clearcoatMapUv),S.push(M.clearcoatNormalMapUv),S.push(M.clearcoatRoughnessMapUv),S.push(M.iridescenceMapUv),S.push(M.iridescenceThicknessMapUv),S.push(M.sheenColorMapUv),S.push(M.sheenRoughnessMapUv),S.push(M.specularMapUv),S.push(M.specularColorMapUv),S.push(M.specularIntensityMapUv),S.push(M.transmissionMapUv),S.push(M.thicknessMapUv),S.push(M.combine),S.push(M.fogExp2),S.push(M.sizeAttenuation),S.push(M.morphTargetsCount),S.push(M.morphAttributeCount),S.push(M.numDirLights),S.push(M.numPointLights),S.push(M.numSpotLights),S.push(M.numSpotLightMaps),S.push(M.numHemiLights),S.push(M.numRectAreaLights),S.push(M.numDirLightShadows),S.push(M.numPointLightShadows),S.push(M.numSpotLightShadows),S.push(M.numSpotLightShadowsWithMaps),S.push(M.numLightProbes),S.push(M.shadowMapType),S.push(M.toneMapping),S.push(M.numClippingPlanes),S.push(M.numClipIntersection),S.push(M.depthPacking)}function y(S,M){a.disableAll(),M.supportsVertexTextures&&a.enable(0),M.instancing&&a.enable(1),M.instancingColor&&a.enable(2),M.instancingMorph&&a.enable(3),M.matcap&&a.enable(4),M.envMap&&a.enable(5),M.normalMapObjectSpace&&a.enable(6),M.normalMapTangentSpace&&a.enable(7),M.clearcoat&&a.enable(8),M.iridescence&&a.enable(9),M.alphaTest&&a.enable(10),M.vertexColors&&a.enable(11),M.vertexAlphas&&a.enable(12),M.vertexUv1s&&a.enable(13),M.vertexUv2s&&a.enable(14),M.vertexUv3s&&a.enable(15),M.vertexTangents&&a.enable(16),M.anisotropy&&a.enable(17),M.alphaHash&&a.enable(18),M.batching&&a.enable(19),M.dispersion&&a.enable(20),M.batchingColor&&a.enable(21),S.push(a.mask),a.disableAll(),M.fog&&a.enable(0),M.useFog&&a.enable(1),M.flatShading&&a.enable(2),M.logarithmicDepthBuffer&&a.enable(3),M.reverseDepthBuffer&&a.enable(4),M.skinning&&a.enable(5),M.morphTargets&&a.enable(6),M.morphNormals&&a.enable(7),M.morphColors&&a.enable(8),M.premultipliedAlpha&&a.enable(9),M.shadowMapEnabled&&a.enable(10),M.doubleSided&&a.enable(11),M.flipSided&&a.enable(12),M.useDepthPacking&&a.enable(13),M.dithering&&a.enable(14),M.transmission&&a.enable(15),M.sheen&&a.enable(16),M.opaque&&a.enable(17),M.pointsUvs&&a.enable(18),M.decodeVideoTexture&&a.enable(19),M.decodeVideoTextureEmissive&&a.enable(20),M.alphaToCoverage&&a.enable(21),S.push(a.mask)}function g(S){const M=v[S.type];let C;if(M){const P=In[M];C=Kp.clone(P.uniforms)}else C=S.uniforms;return C}function b(S,M){let C;for(let P=0,F=h.length;P<F;P++){const O=h[P];if(O.cacheKey===M){C=O,++C.usedTimes;break}}return C===void 0&&(C=new c_(n,M,S,o),h.push(C)),C}function w(S){if(--S.usedTimes===0){const M=h.indexOf(S);h[M]=h[h.length-1],h.pop(),S.destroy()}}function T(S){l.remove(S)}function A(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:g,acquireProgram:b,releaseProgram:w,releaseShaderCache:T,programs:h,dispose:A}}function p_(){let n=new WeakMap;function e(r){return n.has(r)}function t(r){let a=n.get(r);return a===void 0&&(a={},n.set(r,a)),a}function i(r){n.delete(r)}function s(r,a,l){n.get(r)[a]=l}function o(){n=new WeakMap}return{has:e,get:t,remove:i,update:s,dispose:o}}function m_(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function Uh(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function kh(){const n=[];let e=0;const t=[],i=[],s=[];function o(){e=0,t.length=0,i.length=0,s.length=0}function r(d,u,f,v,_,m){let p=n[e];return p===void 0?(p={id:d.id,object:d,geometry:u,material:f,groupOrder:v,renderOrder:d.renderOrder,z:_,group:m},n[e]=p):(p.id=d.id,p.object=d,p.geometry=u,p.material=f,p.groupOrder=v,p.renderOrder=d.renderOrder,p.z=_,p.group=m),e++,p}function a(d,u,f,v,_,m){const p=r(d,u,f,v,_,m);f.transmission>0?i.push(p):f.transparent===!0?s.push(p):t.push(p)}function l(d,u,f,v,_,m){const p=r(d,u,f,v,_,m);f.transmission>0?i.unshift(p):f.transparent===!0?s.unshift(p):t.unshift(p)}function c(d,u){t.length>1&&t.sort(d||m_),i.length>1&&i.sort(u||Uh),s.length>1&&s.sort(u||Uh)}function h(){for(let d=e,u=n.length;d<u;d++){const f=n[d];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:i,transparent:s,init:o,push:a,unshift:l,finish:h,sort:c}}function g_(){let n=new WeakMap;function e(i,s){const o=n.get(i);let r;return o===void 0?(r=new kh,n.set(i,[r])):s>=o.length?(r=new kh,o.push(r)):r=o[s],r}function t(){n=new WeakMap}return{get:e,dispose:t}}function v_(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new D,color:new $e};break;case"SpotLight":t={position:new D,direction:new D,color:new $e,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new D,color:new $e,distance:0,decay:0};break;case"HemisphereLight":t={direction:new D,skyColor:new $e,groundColor:new $e};break;case"RectAreaLight":t={color:new $e,position:new D,halfWidth:new D,halfHeight:new D};break}return n[e.id]=t,t}}}function __(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Re};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Re};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Re,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let y_=0;function x_(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function M_(n){const e=new v_,t=__(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new D);const s=new D,o=new _t,r=new _t;function a(c){let h=0,d=0,u=0;for(let S=0;S<9;S++)i.probe[S].set(0,0,0);let f=0,v=0,_=0,m=0,p=0,x=0,y=0,g=0,b=0,w=0,T=0;c.sort(x_);for(let S=0,M=c.length;S<M;S++){const C=c[S],P=C.color,F=C.intensity,O=C.distance,G=C.shadow&&C.shadow.map?C.shadow.map.texture:null;if(C.isAmbientLight)h+=P.r*F,d+=P.g*F,u+=P.b*F;else if(C.isLightProbe){for(let $=0;$<9;$++)i.probe[$].addScaledVector(C.sh.coefficients[$],F);T++}else if(C.isDirectionalLight){const $=e.get(C);if($.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){const te=C.shadow,K=t.get(C);K.shadowIntensity=te.intensity,K.shadowBias=te.bias,K.shadowNormalBias=te.normalBias,K.shadowRadius=te.radius,K.shadowMapSize=te.mapSize,i.directionalShadow[f]=K,i.directionalShadowMap[f]=G,i.directionalShadowMatrix[f]=C.shadow.matrix,x++}i.directional[f]=$,f++}else if(C.isSpotLight){const $=e.get(C);$.position.setFromMatrixPosition(C.matrixWorld),$.color.copy(P).multiplyScalar(F),$.distance=O,$.coneCos=Math.cos(C.angle),$.penumbraCos=Math.cos(C.angle*(1-C.penumbra)),$.decay=C.decay,i.spot[_]=$;const te=C.shadow;if(C.map&&(i.spotLightMap[b]=C.map,b++,te.updateMatrices(C),C.castShadow&&w++),i.spotLightMatrix[_]=te.matrix,C.castShadow){const K=t.get(C);K.shadowIntensity=te.intensity,K.shadowBias=te.bias,K.shadowNormalBias=te.normalBias,K.shadowRadius=te.radius,K.shadowMapSize=te.mapSize,i.spotShadow[_]=K,i.spotShadowMap[_]=G,g++}_++}else if(C.isRectAreaLight){const $=e.get(C);$.color.copy(P).multiplyScalar(F),$.halfWidth.set(C.width*.5,0,0),$.halfHeight.set(0,C.height*.5,0),i.rectArea[m]=$,m++}else if(C.isPointLight){const $=e.get(C);if($.color.copy(C.color).multiplyScalar(C.intensity),$.distance=C.distance,$.decay=C.decay,C.castShadow){const te=C.shadow,K=t.get(C);K.shadowIntensity=te.intensity,K.shadowBias=te.bias,K.shadowNormalBias=te.normalBias,K.shadowRadius=te.radius,K.shadowMapSize=te.mapSize,K.shadowCameraNear=te.camera.near,K.shadowCameraFar=te.camera.far,i.pointShadow[v]=K,i.pointShadowMap[v]=G,i.pointShadowMatrix[v]=C.shadow.matrix,y++}i.point[v]=$,v++}else if(C.isHemisphereLight){const $=e.get(C);$.skyColor.copy(C.color).multiplyScalar(F),$.groundColor.copy(C.groundColor).multiplyScalar(F),i.hemi[p]=$,p++}}m>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Ue.LTC_FLOAT_1,i.rectAreaLTC2=Ue.LTC_FLOAT_2):(i.rectAreaLTC1=Ue.LTC_HALF_1,i.rectAreaLTC2=Ue.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=d,i.ambient[2]=u;const A=i.hash;(A.directionalLength!==f||A.pointLength!==v||A.spotLength!==_||A.rectAreaLength!==m||A.hemiLength!==p||A.numDirectionalShadows!==x||A.numPointShadows!==y||A.numSpotShadows!==g||A.numSpotMaps!==b||A.numLightProbes!==T)&&(i.directional.length=f,i.spot.length=_,i.rectArea.length=m,i.point.length=v,i.hemi.length=p,i.directionalShadow.length=x,i.directionalShadowMap.length=x,i.pointShadow.length=y,i.pointShadowMap.length=y,i.spotShadow.length=g,i.spotShadowMap.length=g,i.directionalShadowMatrix.length=x,i.pointShadowMatrix.length=y,i.spotLightMatrix.length=g+b-w,i.spotLightMap.length=b,i.numSpotLightShadowsWithMaps=w,i.numLightProbes=T,A.directionalLength=f,A.pointLength=v,A.spotLength=_,A.rectAreaLength=m,A.hemiLength=p,A.numDirectionalShadows=x,A.numPointShadows=y,A.numSpotShadows=g,A.numSpotMaps=b,A.numLightProbes=T,i.version=y_++)}function l(c,h){let d=0,u=0,f=0,v=0,_=0;const m=h.matrixWorldInverse;for(let p=0,x=c.length;p<x;p++){const y=c[p];if(y.isDirectionalLight){const g=i.directional[d];g.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),g.direction.sub(s),g.direction.transformDirection(m),d++}else if(y.isSpotLight){const g=i.spot[f];g.position.setFromMatrixPosition(y.matrixWorld),g.position.applyMatrix4(m),g.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),g.direction.sub(s),g.direction.transformDirection(m),f++}else if(y.isRectAreaLight){const g=i.rectArea[v];g.position.setFromMatrixPosition(y.matrixWorld),g.position.applyMatrix4(m),r.identity(),o.copy(y.matrixWorld),o.premultiply(m),r.extractRotation(o),g.halfWidth.set(y.width*.5,0,0),g.halfHeight.set(0,y.height*.5,0),g.halfWidth.applyMatrix4(r),g.halfHeight.applyMatrix4(r),v++}else if(y.isPointLight){const g=i.point[u];g.position.setFromMatrixPosition(y.matrixWorld),g.position.applyMatrix4(m),u++}else if(y.isHemisphereLight){const g=i.hemi[_];g.direction.setFromMatrixPosition(y.matrixWorld),g.direction.transformDirection(m),_++}}}return{setup:a,setupView:l,state:i}}function Bh(n){const e=new M_(n),t=[],i=[];function s(h){c.camera=h,t.length=0,i.length=0}function o(h){t.push(h)}function r(h){i.push(h)}function a(){e.setup(t)}function l(h){e.setupView(t,h)}const c={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:a,setupLightsView:l,pushLight:o,pushShadow:r}}function b_(n){let e=new WeakMap;function t(s,o=0){const r=e.get(s);let a;return r===void 0?(a=new Bh(n),e.set(s,[a])):o>=r.length?(a=new Bh(n),r.push(a)):a=r[o],a}function i(){e=new WeakMap}return{get:t,dispose:i}}class S_ extends Yi{static get type(){return"MeshDepthMaterial"}constructor(e){super(),this.isMeshDepthMaterial=!0,this.depthPacking=sp,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class E_ extends Yi{static get type(){return"MeshDistanceMaterial"}constructor(e){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const w_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,T_=`uniform sampler2D shadow_pass;
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
}`;function A_(n,e,t){let i=new yc;const s=new Re,o=new Re,r=new gt,a=new S_({depthPacking:op}),l=new E_,c={},h=t.maxTextureSize,d={[_i]:tn,[tn]:_i,[ln]:ln},u=new yi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Re},radius:{value:4}},vertexShader:w_,fragmentShader:T_}),f=u.clone();f.defines.HORIZONTAL_PASS=1;const v=new Ht;v.setAttribute("position",new mn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new B(v,u),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Nd;let p=this.type;this.render=function(w,T,A){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||w.length===0)return;const S=n.getRenderTarget(),M=n.getActiveCubeFace(),C=n.getActiveMipmapLevel(),P=n.state;P.setBlending(gi),P.buffers.color.setClear(1,1,1,1),P.buffers.depth.setTest(!0),P.setScissorTest(!1);const F=p!==Xn&&this.type===Xn,O=p===Xn&&this.type!==Xn;for(let G=0,$=w.length;G<$;G++){const te=w[G],K=te.shadow;if(K===void 0){console.warn("THREE.WebGLShadowMap:",te,"has no shadow.");continue}if(K.autoUpdate===!1&&K.needsUpdate===!1)continue;s.copy(K.mapSize);const X=K.getFrameExtents();if(s.multiply(X),o.copy(K.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(o.x=Math.floor(h/X.x),s.x=o.x*X.x,K.mapSize.x=o.x),s.y>h&&(o.y=Math.floor(h/X.y),s.y=o.y*X.y,K.mapSize.y=o.y)),K.map===null||F===!0||O===!0){const k=this.type!==Xn?{minFilter:Cn,magFilter:Cn}:{};K.map!==null&&K.map.dispose(),K.map=new zi(s.x,s.y,k),K.map.texture.name=te.name+".shadowMap",K.camera.updateProjectionMatrix()}n.setRenderTarget(K.map),n.clear();const Y=K.getViewportCount();for(let k=0;k<Y;k++){const Z=K.getViewport(k);r.set(o.x*Z.x,o.y*Z.y,o.x*Z.z,o.y*Z.w),P.viewport(r),K.updateMatrices(te,k),i=K.getFrustum(),g(T,A,K.camera,te,this.type)}K.isPointLightShadow!==!0&&this.type===Xn&&x(K,A),K.needsUpdate=!1}p=this.type,m.needsUpdate=!1,n.setRenderTarget(S,M,C)};function x(w,T){const A=e.update(_);u.defines.VSM_SAMPLES!==w.blurSamples&&(u.defines.VSM_SAMPLES=w.blurSamples,f.defines.VSM_SAMPLES=w.blurSamples,u.needsUpdate=!0,f.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new zi(s.x,s.y)),u.uniforms.shadow_pass.value=w.map.texture,u.uniforms.resolution.value=w.mapSize,u.uniforms.radius.value=w.radius,n.setRenderTarget(w.mapPass),n.clear(),n.renderBufferDirect(T,null,A,u,_,null),f.uniforms.shadow_pass.value=w.mapPass.texture,f.uniforms.resolution.value=w.mapSize,f.uniforms.radius.value=w.radius,n.setRenderTarget(w.map),n.clear(),n.renderBufferDirect(T,null,A,f,_,null)}function y(w,T,A,S){let M=null;const C=A.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(C!==void 0)M=C;else if(M=A.isPointLight===!0?l:a,n.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0){const P=M.uuid,F=T.uuid;let O=c[P];O===void 0&&(O={},c[P]=O);let G=O[F];G===void 0&&(G=M.clone(),O[F]=G,T.addEventListener("dispose",b)),M=G}if(M.visible=T.visible,M.wireframe=T.wireframe,S===Xn?M.side=T.shadowSide!==null?T.shadowSide:T.side:M.side=T.shadowSide!==null?T.shadowSide:d[T.side],M.alphaMap=T.alphaMap,M.alphaTest=T.alphaTest,M.map=T.map,M.clipShadows=T.clipShadows,M.clippingPlanes=T.clippingPlanes,M.clipIntersection=T.clipIntersection,M.displacementMap=T.displacementMap,M.displacementScale=T.displacementScale,M.displacementBias=T.displacementBias,M.wireframeLinewidth=T.wireframeLinewidth,M.linewidth=T.linewidth,A.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const P=n.properties.get(M);P.light=A}return M}function g(w,T,A,S,M){if(w.visible===!1)return;if(w.layers.test(T.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&M===Xn)&&(!w.frustumCulled||i.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(A.matrixWorldInverse,w.matrixWorld);const F=e.update(w),O=w.material;if(Array.isArray(O)){const G=F.groups;for(let $=0,te=G.length;$<te;$++){const K=G[$],X=O[K.materialIndex];if(X&&X.visible){const Y=y(w,X,S,M);w.onBeforeShadow(n,w,T,A,F,Y,K),n.renderBufferDirect(A,null,F,Y,w,K),w.onAfterShadow(n,w,T,A,F,Y,K)}}}else if(O.visible){const G=y(w,O,S,M);w.onBeforeShadow(n,w,T,A,F,G,null),n.renderBufferDirect(A,null,F,G,w,null),w.onAfterShadow(n,w,T,A,F,G,null)}}const P=w.children;for(let F=0,O=P.length;F<O;F++)g(P[F],T,A,S,M)}function b(w){w.target.removeEventListener("dispose",b);for(const A in c){const S=c[A],M=w.target.uuid;M in S&&(S[M].dispose(),delete S[M])}}}const C_={[ul]:fl,[pl]:vl,[ml]:_l,[ks]:gl,[fl]:ul,[vl]:pl,[_l]:ml,[gl]:ks};function R_(n,e){function t(){let H=!1;const Ae=new gt;let ne=null;const me=new gt(0,0,0,0);return{setMask:function(Se){ne!==Se&&!H&&(n.colorMask(Se,Se,Se,Se),ne=Se)},setLocked:function(Se){H=Se},setClear:function(Se,Te,Ve,Qe,ut){ut===!0&&(Se*=Qe,Te*=Qe,Ve*=Qe),Ae.set(Se,Te,Ve,Qe),me.equals(Ae)===!1&&(n.clearColor(Se,Te,Ve,Qe),me.copy(Ae))},reset:function(){H=!1,ne=null,me.set(-1,0,0,0)}}}function i(){let H=!1,Ae=!1,ne=null,me=null,Se=null;return{setReversed:function(Te){if(Ae!==Te){const Ve=e.get("EXT_clip_control");Ae?Ve.clipControlEXT(Ve.LOWER_LEFT_EXT,Ve.ZERO_TO_ONE_EXT):Ve.clipControlEXT(Ve.LOWER_LEFT_EXT,Ve.NEGATIVE_ONE_TO_ONE_EXT);const Qe=Se;Se=null,this.setClear(Qe)}Ae=Te},getReversed:function(){return Ae},setTest:function(Te){Te?ie(n.DEPTH_TEST):ye(n.DEPTH_TEST)},setMask:function(Te){ne!==Te&&!H&&(n.depthMask(Te),ne=Te)},setFunc:function(Te){if(Ae&&(Te=C_[Te]),me!==Te){switch(Te){case ul:n.depthFunc(n.NEVER);break;case fl:n.depthFunc(n.ALWAYS);break;case pl:n.depthFunc(n.LESS);break;case ks:n.depthFunc(n.LEQUAL);break;case ml:n.depthFunc(n.EQUAL);break;case gl:n.depthFunc(n.GEQUAL);break;case vl:n.depthFunc(n.GREATER);break;case _l:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}me=Te}},setLocked:function(Te){H=Te},setClear:function(Te){Se!==Te&&(Ae&&(Te=1-Te),n.clearDepth(Te),Se=Te)},reset:function(){H=!1,ne=null,me=null,Se=null,Ae=!1}}}function s(){let H=!1,Ae=null,ne=null,me=null,Se=null,Te=null,Ve=null,Qe=null,ut=null;return{setTest:function(nt){H||(nt?ie(n.STENCIL_TEST):ye(n.STENCIL_TEST))},setMask:function(nt){Ae!==nt&&!H&&(n.stencilMask(nt),Ae=nt)},setFunc:function(nt,Tt,Jt){(ne!==nt||me!==Tt||Se!==Jt)&&(n.stencilFunc(nt,Tt,Jt),ne=nt,me=Tt,Se=Jt)},setOp:function(nt,Tt,Jt){(Te!==nt||Ve!==Tt||Qe!==Jt)&&(n.stencilOp(nt,Tt,Jt),Te=nt,Ve=Tt,Qe=Jt)},setLocked:function(nt){H=nt},setClear:function(nt){ut!==nt&&(n.clearStencil(nt),ut=nt)},reset:function(){H=!1,Ae=null,ne=null,me=null,Se=null,Te=null,Ve=null,Qe=null,ut=null}}}const o=new t,r=new i,a=new s,l=new WeakMap,c=new WeakMap;let h={},d={},u=new WeakMap,f=[],v=null,_=!1,m=null,p=null,x=null,y=null,g=null,b=null,w=null,T=new $e(0,0,0),A=0,S=!1,M=null,C=null,P=null,F=null,O=null;const G=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let $=!1,te=0;const K=n.getParameter(n.VERSION);K.indexOf("WebGL")!==-1?(te=parseFloat(/^WebGL (\d)/.exec(K)[1]),$=te>=1):K.indexOf("OpenGL ES")!==-1&&(te=parseFloat(/^OpenGL ES (\d)/.exec(K)[1]),$=te>=2);let X=null,Y={};const k=n.getParameter(n.SCISSOR_BOX),Z=n.getParameter(n.VIEWPORT),W=new gt().fromArray(k),N=new gt().fromArray(Z);function j(H,Ae,ne,me){const Se=new Uint8Array(4),Te=n.createTexture();n.bindTexture(H,Te),n.texParameteri(H,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(H,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Ve=0;Ve<ne;Ve++)H===n.TEXTURE_3D||H===n.TEXTURE_2D_ARRAY?n.texImage3D(Ae,0,n.RGBA,1,1,me,0,n.RGBA,n.UNSIGNED_BYTE,Se):n.texImage2D(Ae+Ve,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,Se);return Te}const ae={};ae[n.TEXTURE_2D]=j(n.TEXTURE_2D,n.TEXTURE_2D,1),ae[n.TEXTURE_CUBE_MAP]=j(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),ae[n.TEXTURE_2D_ARRAY]=j(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),ae[n.TEXTURE_3D]=j(n.TEXTURE_3D,n.TEXTURE_3D,1,1),o.setClear(0,0,0,1),r.setClear(1),a.setClear(0),ie(n.DEPTH_TEST),r.setFunc(ks),z(!1),_e(Gc),ie(n.CULL_FACE),I(gi);function ie(H){h[H]!==!0&&(n.enable(H),h[H]=!0)}function ye(H){h[H]!==!1&&(n.disable(H),h[H]=!1)}function fe(H,Ae){return d[H]!==Ae?(n.bindFramebuffer(H,Ae),d[H]=Ae,H===n.DRAW_FRAMEBUFFER&&(d[n.FRAMEBUFFER]=Ae),H===n.FRAMEBUFFER&&(d[n.DRAW_FRAMEBUFFER]=Ae),!0):!1}function Ie(H,Ae){let ne=f,me=!1;if(H){ne=u.get(Ae),ne===void 0&&(ne=[],u.set(Ae,ne));const Se=H.textures;if(ne.length!==Se.length||ne[0]!==n.COLOR_ATTACHMENT0){for(let Te=0,Ve=Se.length;Te<Ve;Te++)ne[Te]=n.COLOR_ATTACHMENT0+Te;ne.length=Se.length,me=!0}}else ne[0]!==n.BACK&&(ne[0]=n.BACK,me=!0);me&&n.drawBuffers(ne)}function ke(H){return v!==H?(n.useProgram(H),v=H,!0):!1}const he={[Di]:n.FUNC_ADD,[If]:n.FUNC_SUBTRACT,[Df]:n.FUNC_REVERSE_SUBTRACT};he[Nf]=n.MIN,he[Uf]=n.MAX;const ge={[kf]:n.ZERO,[Bf]:n.ONE,[Of]:n.SRC_COLOR,[hl]:n.SRC_ALPHA,[Wf]:n.SRC_ALPHA_SATURATE,[Gf]:n.DST_COLOR,[zf]:n.DST_ALPHA,[Ff]:n.ONE_MINUS_SRC_COLOR,[dl]:n.ONE_MINUS_SRC_ALPHA,[Vf]:n.ONE_MINUS_DST_COLOR,[Hf]:n.ONE_MINUS_DST_ALPHA,[$f]:n.CONSTANT_COLOR,[Xf]:n.ONE_MINUS_CONSTANT_COLOR,[Yf]:n.CONSTANT_ALPHA,[qf]:n.ONE_MINUS_CONSTANT_ALPHA};function I(H,Ae,ne,me,Se,Te,Ve,Qe,ut,nt){if(H===gi){_===!0&&(ye(n.BLEND),_=!1);return}if(_===!1&&(ie(n.BLEND),_=!0),H!==Lf){if(H!==m||nt!==S){if((p!==Di||g!==Di)&&(n.blendEquation(n.FUNC_ADD),p=Di,g=Di),nt)switch(H){case Ts:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case cl:n.blendFunc(n.ONE,n.ONE);break;case Vc:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Wc:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",H);break}else switch(H){case Ts:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case cl:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case Vc:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Wc:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",H);break}x=null,y=null,b=null,w=null,T.set(0,0,0),A=0,m=H,S=nt}return}Se=Se||Ae,Te=Te||ne,Ve=Ve||me,(Ae!==p||Se!==g)&&(n.blendEquationSeparate(he[Ae],he[Se]),p=Ae,g=Se),(ne!==x||me!==y||Te!==b||Ve!==w)&&(n.blendFuncSeparate(ge[ne],ge[me],ge[Te],ge[Ve]),x=ne,y=me,b=Te,w=Ve),(Qe.equals(T)===!1||ut!==A)&&(n.blendColor(Qe.r,Qe.g,Qe.b,ut),T.copy(Qe),A=ut),m=H,S=!1}function Me(H,Ae){H.side===ln?ye(n.CULL_FACE):ie(n.CULL_FACE);let ne=H.side===tn;Ae&&(ne=!ne),z(ne),H.blending===Ts&&H.transparent===!1?I(gi):I(H.blending,H.blendEquation,H.blendSrc,H.blendDst,H.blendEquationAlpha,H.blendSrcAlpha,H.blendDstAlpha,H.blendColor,H.blendAlpha,H.premultipliedAlpha),r.setFunc(H.depthFunc),r.setTest(H.depthTest),r.setMask(H.depthWrite),o.setMask(H.colorWrite);const me=H.stencilWrite;a.setTest(me),me&&(a.setMask(H.stencilWriteMask),a.setFunc(H.stencilFunc,H.stencilRef,H.stencilFuncMask),a.setOp(H.stencilFail,H.stencilZFail,H.stencilZPass)),Le(H.polygonOffset,H.polygonOffsetFactor,H.polygonOffsetUnits),H.alphaToCoverage===!0?ie(n.SAMPLE_ALPHA_TO_COVERAGE):ye(n.SAMPLE_ALPHA_TO_COVERAGE)}function z(H){M!==H&&(H?n.frontFace(n.CW):n.frontFace(n.CCW),M=H)}function _e(H){H!==Rf?(ie(n.CULL_FACE),H!==C&&(H===Gc?n.cullFace(n.BACK):H===Pf?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):ye(n.CULL_FACE),C=H}function ce(H){H!==P&&($&&n.lineWidth(H),P=H)}function Le(H,Ae,ne){H?(ie(n.POLYGON_OFFSET_FILL),(F!==Ae||O!==ne)&&(n.polygonOffset(Ae,ne),F=Ae,O=ne)):ye(n.POLYGON_OFFSET_FILL)}function Ee(H){H?ie(n.SCISSOR_TEST):ye(n.SCISSOR_TEST)}function L(H){H===void 0&&(H=n.TEXTURE0+G-1),X!==H&&(n.activeTexture(H),X=H)}function E(H,Ae,ne){ne===void 0&&(X===null?ne=n.TEXTURE0+G-1:ne=X);let me=Y[ne];me===void 0&&(me={type:void 0,texture:void 0},Y[ne]=me),(me.type!==H||me.texture!==Ae)&&(X!==ne&&(n.activeTexture(ne),X=ne),n.bindTexture(H,Ae||ae[H]),me.type=H,me.texture=Ae)}function V(){const H=Y[X];H!==void 0&&H.type!==void 0&&(n.bindTexture(H.type,null),H.type=void 0,H.texture=void 0)}function re(){try{n.compressedTexImage2D.apply(n,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function q(){try{n.compressedTexImage3D.apply(n,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function U(){try{n.texSubImage2D.apply(n,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function se(){try{n.texSubImage3D.apply(n,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function oe(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function le(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function we(){try{n.texStorage2D.apply(n,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function ee(){try{n.texStorage3D.apply(n,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function be(){try{n.texImage2D.apply(n,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function xe(){try{n.texImage3D.apply(n,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Ce(H){W.equals(H)===!1&&(n.scissor(H.x,H.y,H.z,H.w),W.copy(H))}function Pe(H){N.equals(H)===!1&&(n.viewport(H.x,H.y,H.z,H.w),N.copy(H))}function Ne(H,Ae){let ne=c.get(Ae);ne===void 0&&(ne=new WeakMap,c.set(Ae,ne));let me=ne.get(H);me===void 0&&(me=n.getUniformBlockIndex(Ae,H.name),ne.set(H,me))}function Fe(H,Ae){const me=c.get(Ae).get(H);l.get(Ae)!==me&&(n.uniformBlockBinding(Ae,me,H.__bindingPointIndex),l.set(Ae,me))}function ve(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),r.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),h={},X=null,Y={},d={},u=new WeakMap,f=[],v=null,_=!1,m=null,p=null,x=null,y=null,g=null,b=null,w=null,T=new $e(0,0,0),A=0,S=!1,M=null,C=null,P=null,F=null,O=null,W.set(0,0,n.canvas.width,n.canvas.height),N.set(0,0,n.canvas.width,n.canvas.height),o.reset(),r.reset(),a.reset()}return{buffers:{color:o,depth:r,stencil:a},enable:ie,disable:ye,bindFramebuffer:fe,drawBuffers:Ie,useProgram:ke,setBlending:I,setMaterial:Me,setFlipSided:z,setCullFace:_e,setLineWidth:ce,setPolygonOffset:Le,setScissorTest:Ee,activeTexture:L,bindTexture:E,unbindTexture:V,compressedTexImage2D:re,compressedTexImage3D:q,texImage2D:be,texImage3D:xe,updateUBOMapping:Ne,uniformBlockBinding:Fe,texStorage2D:we,texStorage3D:ee,texSubImage2D:U,texSubImage3D:se,compressedTexSubImage2D:oe,compressedTexSubImage3D:le,scissor:Ce,viewport:Pe,reset:ve}}function Oh(n,e,t,i){const s=P_(i);switch(t){case Gd:return n*e;case Wd:return n*e;case $d:return n*e*2;case Xd:return n*e/s.components*s.byteLength;case pc:return n*e/s.components*s.byteLength;case Yd:return n*e*2/s.components*s.byteLength;case mc:return n*e*2/s.components*s.byteLength;case Vd:return n*e*3/s.components*s.byteLength;case An:return n*e*4/s.components*s.byteLength;case gc:return n*e*4/s.components*s.byteLength;case Er:case wr:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Tr:case Ar:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Sl:case wl:return Math.max(n,16)*Math.max(e,8)/4;case bl:case El:return Math.max(n,8)*Math.max(e,8)/2;case Tl:case Al:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Cl:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Rl:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Pl:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case Ll:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case Il:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case Dl:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case Nl:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case Ul:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case kl:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case Bl:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case Ol:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case Fl:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case zl:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case Hl:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case Gl:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case Cr:case Vl:case Wl:return Math.ceil(n/4)*Math.ceil(e/4)*16;case qd:case $l:return Math.ceil(n/4)*Math.ceil(e/4)*8;case Xl:case Yl:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function P_(n){switch(n){case Jn:case Fd:return{byteLength:1,components:1};case Eo:case zd:case Lo:return{byteLength:2,components:1};case uc:case fc:return{byteLength:2,components:4};case Fi:case dc:case Yn:return{byteLength:4,components:1};case Hd:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}function L_(n,e,t,i,s,o,r){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Re,h=new WeakMap;let d;const u=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(L,E){return f?new OffscreenCanvas(L,E):Dr("canvas")}function _(L,E,V){let re=1;const q=Ee(L);if((q.width>V||q.height>V)&&(re=V/Math.max(q.width,q.height)),re<1)if(typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&L instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&L instanceof ImageBitmap||typeof VideoFrame<"u"&&L instanceof VideoFrame){const U=Math.floor(re*q.width),se=Math.floor(re*q.height);d===void 0&&(d=v(U,se));const oe=E?v(U,se):d;return oe.width=U,oe.height=se,oe.getContext("2d").drawImage(L,0,0,U,se),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+q.width+"x"+q.height+") to ("+U+"x"+se+")."),oe}else return"data"in L&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+q.width+"x"+q.height+")."),L;return L}function m(L){return L.generateMipmaps}function p(L){n.generateMipmap(L)}function x(L){return L.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:L.isWebGL3DRenderTarget?n.TEXTURE_3D:L.isWebGLArrayRenderTarget||L.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function y(L,E,V,re,q=!1){if(L!==null){if(n[L]!==void 0)return n[L];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+L+"'")}let U=E;if(E===n.RED&&(V===n.FLOAT&&(U=n.R32F),V===n.HALF_FLOAT&&(U=n.R16F),V===n.UNSIGNED_BYTE&&(U=n.R8)),E===n.RED_INTEGER&&(V===n.UNSIGNED_BYTE&&(U=n.R8UI),V===n.UNSIGNED_SHORT&&(U=n.R16UI),V===n.UNSIGNED_INT&&(U=n.R32UI),V===n.BYTE&&(U=n.R8I),V===n.SHORT&&(U=n.R16I),V===n.INT&&(U=n.R32I)),E===n.RG&&(V===n.FLOAT&&(U=n.RG32F),V===n.HALF_FLOAT&&(U=n.RG16F),V===n.UNSIGNED_BYTE&&(U=n.RG8)),E===n.RG_INTEGER&&(V===n.UNSIGNED_BYTE&&(U=n.RG8UI),V===n.UNSIGNED_SHORT&&(U=n.RG16UI),V===n.UNSIGNED_INT&&(U=n.RG32UI),V===n.BYTE&&(U=n.RG8I),V===n.SHORT&&(U=n.RG16I),V===n.INT&&(U=n.RG32I)),E===n.RGB_INTEGER&&(V===n.UNSIGNED_BYTE&&(U=n.RGB8UI),V===n.UNSIGNED_SHORT&&(U=n.RGB16UI),V===n.UNSIGNED_INT&&(U=n.RGB32UI),V===n.BYTE&&(U=n.RGB8I),V===n.SHORT&&(U=n.RGB16I),V===n.INT&&(U=n.RGB32I)),E===n.RGBA_INTEGER&&(V===n.UNSIGNED_BYTE&&(U=n.RGBA8UI),V===n.UNSIGNED_SHORT&&(U=n.RGBA16UI),V===n.UNSIGNED_INT&&(U=n.RGBA32UI),V===n.BYTE&&(U=n.RGBA8I),V===n.SHORT&&(U=n.RGBA16I),V===n.INT&&(U=n.RGBA32I)),E===n.RGB&&V===n.UNSIGNED_INT_5_9_9_9_REV&&(U=n.RGB9_E5),E===n.RGBA){const se=q?Yr:st.getTransfer(re);V===n.FLOAT&&(U=n.RGBA32F),V===n.HALF_FLOAT&&(U=n.RGBA16F),V===n.UNSIGNED_BYTE&&(U=se===ft?n.SRGB8_ALPHA8:n.RGBA8),V===n.UNSIGNED_SHORT_4_4_4_4&&(U=n.RGBA4),V===n.UNSIGNED_SHORT_5_5_5_1&&(U=n.RGB5_A1)}return(U===n.R16F||U===n.R32F||U===n.RG16F||U===n.RG32F||U===n.RGBA16F||U===n.RGBA32F)&&e.get("EXT_color_buffer_float"),U}function g(L,E){let V;return L?E===null||E===Fi||E===Fs?V=n.DEPTH24_STENCIL8:E===Yn?V=n.DEPTH32F_STENCIL8:E===Eo&&(V=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===Fi||E===Fs?V=n.DEPTH_COMPONENT24:E===Yn?V=n.DEPTH_COMPONENT32F:E===Eo&&(V=n.DEPTH_COMPONENT16),V}function b(L,E){return m(L)===!0||L.isFramebufferTexture&&L.minFilter!==Cn&&L.minFilter!==Dn?Math.log2(Math.max(E.width,E.height))+1:L.mipmaps!==void 0&&L.mipmaps.length>0?L.mipmaps.length:L.isCompressedTexture&&Array.isArray(L.image)?E.mipmaps.length:1}function w(L){const E=L.target;E.removeEventListener("dispose",w),A(E),E.isVideoTexture&&h.delete(E)}function T(L){const E=L.target;E.removeEventListener("dispose",T),M(E)}function A(L){const E=i.get(L);if(E.__webglInit===void 0)return;const V=L.source,re=u.get(V);if(re){const q=re[E.__cacheKey];q.usedTimes--,q.usedTimes===0&&S(L),Object.keys(re).length===0&&u.delete(V)}i.remove(L)}function S(L){const E=i.get(L);n.deleteTexture(E.__webglTexture);const V=L.source,re=u.get(V);delete re[E.__cacheKey],r.memory.textures--}function M(L){const E=i.get(L);if(L.depthTexture&&(L.depthTexture.dispose(),i.remove(L.depthTexture)),L.isWebGLCubeRenderTarget)for(let re=0;re<6;re++){if(Array.isArray(E.__webglFramebuffer[re]))for(let q=0;q<E.__webglFramebuffer[re].length;q++)n.deleteFramebuffer(E.__webglFramebuffer[re][q]);else n.deleteFramebuffer(E.__webglFramebuffer[re]);E.__webglDepthbuffer&&n.deleteRenderbuffer(E.__webglDepthbuffer[re])}else{if(Array.isArray(E.__webglFramebuffer))for(let re=0;re<E.__webglFramebuffer.length;re++)n.deleteFramebuffer(E.__webglFramebuffer[re]);else n.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&n.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&n.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let re=0;re<E.__webglColorRenderbuffer.length;re++)E.__webglColorRenderbuffer[re]&&n.deleteRenderbuffer(E.__webglColorRenderbuffer[re]);E.__webglDepthRenderbuffer&&n.deleteRenderbuffer(E.__webglDepthRenderbuffer)}const V=L.textures;for(let re=0,q=V.length;re<q;re++){const U=i.get(V[re]);U.__webglTexture&&(n.deleteTexture(U.__webglTexture),r.memory.textures--),i.remove(V[re])}i.remove(L)}let C=0;function P(){C=0}function F(){const L=C;return L>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+L+" texture units while this GPU supports only "+s.maxTextures),C+=1,L}function O(L){const E=[];return E.push(L.wrapS),E.push(L.wrapT),E.push(L.wrapR||0),E.push(L.magFilter),E.push(L.minFilter),E.push(L.anisotropy),E.push(L.internalFormat),E.push(L.format),E.push(L.type),E.push(L.generateMipmaps),E.push(L.premultiplyAlpha),E.push(L.flipY),E.push(L.unpackAlignment),E.push(L.colorSpace),E.join()}function G(L,E){const V=i.get(L);if(L.isVideoTexture&&ce(L),L.isRenderTargetTexture===!1&&L.version>0&&V.__version!==L.version){const re=L.image;if(re===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(re.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{N(V,L,E);return}}t.bindTexture(n.TEXTURE_2D,V.__webglTexture,n.TEXTURE0+E)}function $(L,E){const V=i.get(L);if(L.version>0&&V.__version!==L.version){N(V,L,E);return}t.bindTexture(n.TEXTURE_2D_ARRAY,V.__webglTexture,n.TEXTURE0+E)}function te(L,E){const V=i.get(L);if(L.version>0&&V.__version!==L.version){N(V,L,E);return}t.bindTexture(n.TEXTURE_3D,V.__webglTexture,n.TEXTURE0+E)}function K(L,E){const V=i.get(L);if(L.version>0&&V.__version!==L.version){j(V,L,E);return}t.bindTexture(n.TEXTURE_CUBE_MAP,V.__webglTexture,n.TEXTURE0+E)}const X={[cn]:n.REPEAT,[ki]:n.CLAMP_TO_EDGE,[Ml]:n.MIRRORED_REPEAT},Y={[Cn]:n.NEAREST,[ip]:n.NEAREST_MIPMAP_NEAREST,[Go]:n.NEAREST_MIPMAP_LINEAR,[Dn]:n.LINEAR,[na]:n.LINEAR_MIPMAP_NEAREST,[Bi]:n.LINEAR_MIPMAP_LINEAR},k={[ap]:n.NEVER,[fp]:n.ALWAYS,[lp]:n.LESS,[Kd]:n.LEQUAL,[cp]:n.EQUAL,[up]:n.GEQUAL,[hp]:n.GREATER,[dp]:n.NOTEQUAL};function Z(L,E){if(E.type===Yn&&e.has("OES_texture_float_linear")===!1&&(E.magFilter===Dn||E.magFilter===na||E.magFilter===Go||E.magFilter===Bi||E.minFilter===Dn||E.minFilter===na||E.minFilter===Go||E.minFilter===Bi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(L,n.TEXTURE_WRAP_S,X[E.wrapS]),n.texParameteri(L,n.TEXTURE_WRAP_T,X[E.wrapT]),(L===n.TEXTURE_3D||L===n.TEXTURE_2D_ARRAY)&&n.texParameteri(L,n.TEXTURE_WRAP_R,X[E.wrapR]),n.texParameteri(L,n.TEXTURE_MAG_FILTER,Y[E.magFilter]),n.texParameteri(L,n.TEXTURE_MIN_FILTER,Y[E.minFilter]),E.compareFunction&&(n.texParameteri(L,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(L,n.TEXTURE_COMPARE_FUNC,k[E.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===Cn||E.minFilter!==Go&&E.minFilter!==Bi||E.type===Yn&&e.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||i.get(E).__currentAnisotropy){const V=e.get("EXT_texture_filter_anisotropic");n.texParameterf(L,V.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,s.getMaxAnisotropy())),i.get(E).__currentAnisotropy=E.anisotropy}}}function W(L,E){let V=!1;L.__webglInit===void 0&&(L.__webglInit=!0,E.addEventListener("dispose",w));const re=E.source;let q=u.get(re);q===void 0&&(q={},u.set(re,q));const U=O(E);if(U!==L.__cacheKey){q[U]===void 0&&(q[U]={texture:n.createTexture(),usedTimes:0},r.memory.textures++,V=!0),q[U].usedTimes++;const se=q[L.__cacheKey];se!==void 0&&(q[L.__cacheKey].usedTimes--,se.usedTimes===0&&S(E)),L.__cacheKey=U,L.__webglTexture=q[U].texture}return V}function N(L,E,V){let re=n.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(re=n.TEXTURE_2D_ARRAY),E.isData3DTexture&&(re=n.TEXTURE_3D);const q=W(L,E),U=E.source;t.bindTexture(re,L.__webglTexture,n.TEXTURE0+V);const se=i.get(U);if(U.version!==se.__version||q===!0){t.activeTexture(n.TEXTURE0+V);const oe=st.getPrimaries(st.workingColorSpace),le=E.colorSpace===di?null:st.getPrimaries(E.colorSpace),we=E.colorSpace===di||oe===le?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,E.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,E.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,we);let ee=_(E.image,!1,s.maxTextureSize);ee=Le(E,ee);const be=o.convert(E.format,E.colorSpace),xe=o.convert(E.type);let Ce=y(E.internalFormat,be,xe,E.colorSpace,E.isVideoTexture);Z(re,E);let Pe;const Ne=E.mipmaps,Fe=E.isVideoTexture!==!0,ve=se.__version===void 0||q===!0,H=U.dataReady,Ae=b(E,ee);if(E.isDepthTexture)Ce=g(E.format===zs,E.type),ve&&(Fe?t.texStorage2D(n.TEXTURE_2D,1,Ce,ee.width,ee.height):t.texImage2D(n.TEXTURE_2D,0,Ce,ee.width,ee.height,0,be,xe,null));else if(E.isDataTexture)if(Ne.length>0){Fe&&ve&&t.texStorage2D(n.TEXTURE_2D,Ae,Ce,Ne[0].width,Ne[0].height);for(let ne=0,me=Ne.length;ne<me;ne++)Pe=Ne[ne],Fe?H&&t.texSubImage2D(n.TEXTURE_2D,ne,0,0,Pe.width,Pe.height,be,xe,Pe.data):t.texImage2D(n.TEXTURE_2D,ne,Ce,Pe.width,Pe.height,0,be,xe,Pe.data);E.generateMipmaps=!1}else Fe?(ve&&t.texStorage2D(n.TEXTURE_2D,Ae,Ce,ee.width,ee.height),H&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,ee.width,ee.height,be,xe,ee.data)):t.texImage2D(n.TEXTURE_2D,0,Ce,ee.width,ee.height,0,be,xe,ee.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){Fe&&ve&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Ae,Ce,Ne[0].width,Ne[0].height,ee.depth);for(let ne=0,me=Ne.length;ne<me;ne++)if(Pe=Ne[ne],E.format!==An)if(be!==null)if(Fe){if(H)if(E.layerUpdates.size>0){const Se=Oh(Pe.width,Pe.height,E.format,E.type);for(const Te of E.layerUpdates){const Ve=Pe.data.subarray(Te*Se/Pe.data.BYTES_PER_ELEMENT,(Te+1)*Se/Pe.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ne,0,0,Te,Pe.width,Pe.height,1,be,Ve)}E.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ne,0,0,0,Pe.width,Pe.height,ee.depth,be,Pe.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,ne,Ce,Pe.width,Pe.height,ee.depth,0,Pe.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Fe?H&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,ne,0,0,0,Pe.width,Pe.height,ee.depth,be,xe,Pe.data):t.texImage3D(n.TEXTURE_2D_ARRAY,ne,Ce,Pe.width,Pe.height,ee.depth,0,be,xe,Pe.data)}else{Fe&&ve&&t.texStorage2D(n.TEXTURE_2D,Ae,Ce,Ne[0].width,Ne[0].height);for(let ne=0,me=Ne.length;ne<me;ne++)Pe=Ne[ne],E.format!==An?be!==null?Fe?H&&t.compressedTexSubImage2D(n.TEXTURE_2D,ne,0,0,Pe.width,Pe.height,be,Pe.data):t.compressedTexImage2D(n.TEXTURE_2D,ne,Ce,Pe.width,Pe.height,0,Pe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Fe?H&&t.texSubImage2D(n.TEXTURE_2D,ne,0,0,Pe.width,Pe.height,be,xe,Pe.data):t.texImage2D(n.TEXTURE_2D,ne,Ce,Pe.width,Pe.height,0,be,xe,Pe.data)}else if(E.isDataArrayTexture)if(Fe){if(ve&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Ae,Ce,ee.width,ee.height,ee.depth),H)if(E.layerUpdates.size>0){const ne=Oh(ee.width,ee.height,E.format,E.type);for(const me of E.layerUpdates){const Se=ee.data.subarray(me*ne/ee.data.BYTES_PER_ELEMENT,(me+1)*ne/ee.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,me,ee.width,ee.height,1,be,xe,Se)}E.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,ee.width,ee.height,ee.depth,be,xe,ee.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,Ce,ee.width,ee.height,ee.depth,0,be,xe,ee.data);else if(E.isData3DTexture)Fe?(ve&&t.texStorage3D(n.TEXTURE_3D,Ae,Ce,ee.width,ee.height,ee.depth),H&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,ee.width,ee.height,ee.depth,be,xe,ee.data)):t.texImage3D(n.TEXTURE_3D,0,Ce,ee.width,ee.height,ee.depth,0,be,xe,ee.data);else if(E.isFramebufferTexture){if(ve)if(Fe)t.texStorage2D(n.TEXTURE_2D,Ae,Ce,ee.width,ee.height);else{let ne=ee.width,me=ee.height;for(let Se=0;Se<Ae;Se++)t.texImage2D(n.TEXTURE_2D,Se,Ce,ne,me,0,be,xe,null),ne>>=1,me>>=1}}else if(Ne.length>0){if(Fe&&ve){const ne=Ee(Ne[0]);t.texStorage2D(n.TEXTURE_2D,Ae,Ce,ne.width,ne.height)}for(let ne=0,me=Ne.length;ne<me;ne++)Pe=Ne[ne],Fe?H&&t.texSubImage2D(n.TEXTURE_2D,ne,0,0,be,xe,Pe):t.texImage2D(n.TEXTURE_2D,ne,Ce,be,xe,Pe);E.generateMipmaps=!1}else if(Fe){if(ve){const ne=Ee(ee);t.texStorage2D(n.TEXTURE_2D,Ae,Ce,ne.width,ne.height)}H&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,be,xe,ee)}else t.texImage2D(n.TEXTURE_2D,0,Ce,be,xe,ee);m(E)&&p(re),se.__version=U.version,E.onUpdate&&E.onUpdate(E)}L.__version=E.version}function j(L,E,V){if(E.image.length!==6)return;const re=W(L,E),q=E.source;t.bindTexture(n.TEXTURE_CUBE_MAP,L.__webglTexture,n.TEXTURE0+V);const U=i.get(q);if(q.version!==U.__version||re===!0){t.activeTexture(n.TEXTURE0+V);const se=st.getPrimaries(st.workingColorSpace),oe=E.colorSpace===di?null:st.getPrimaries(E.colorSpace),le=E.colorSpace===di||se===oe?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,E.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,E.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,le);const we=E.isCompressedTexture||E.image[0].isCompressedTexture,ee=E.image[0]&&E.image[0].isDataTexture,be=[];for(let me=0;me<6;me++)!we&&!ee?be[me]=_(E.image[me],!0,s.maxCubemapSize):be[me]=ee?E.image[me].image:E.image[me],be[me]=Le(E,be[me]);const xe=be[0],Ce=o.convert(E.format,E.colorSpace),Pe=o.convert(E.type),Ne=y(E.internalFormat,Ce,Pe,E.colorSpace),Fe=E.isVideoTexture!==!0,ve=U.__version===void 0||re===!0,H=q.dataReady;let Ae=b(E,xe);Z(n.TEXTURE_CUBE_MAP,E);let ne;if(we){Fe&&ve&&t.texStorage2D(n.TEXTURE_CUBE_MAP,Ae,Ne,xe.width,xe.height);for(let me=0;me<6;me++){ne=be[me].mipmaps;for(let Se=0;Se<ne.length;Se++){const Te=ne[Se];E.format!==An?Ce!==null?Fe?H&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+me,Se,0,0,Te.width,Te.height,Ce,Te.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+me,Se,Ne,Te.width,Te.height,0,Te.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Fe?H&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+me,Se,0,0,Te.width,Te.height,Ce,Pe,Te.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+me,Se,Ne,Te.width,Te.height,0,Ce,Pe,Te.data)}}}else{if(ne=E.mipmaps,Fe&&ve){ne.length>0&&Ae++;const me=Ee(be[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,Ae,Ne,me.width,me.height)}for(let me=0;me<6;me++)if(ee){Fe?H&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+me,0,0,0,be[me].width,be[me].height,Ce,Pe,be[me].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+me,0,Ne,be[me].width,be[me].height,0,Ce,Pe,be[me].data);for(let Se=0;Se<ne.length;Se++){const Ve=ne[Se].image[me].image;Fe?H&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+me,Se+1,0,0,Ve.width,Ve.height,Ce,Pe,Ve.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+me,Se+1,Ne,Ve.width,Ve.height,0,Ce,Pe,Ve.data)}}else{Fe?H&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+me,0,0,0,Ce,Pe,be[me]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+me,0,Ne,Ce,Pe,be[me]);for(let Se=0;Se<ne.length;Se++){const Te=ne[Se];Fe?H&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+me,Se+1,0,0,Ce,Pe,Te.image[me]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+me,Se+1,Ne,Ce,Pe,Te.image[me])}}}m(E)&&p(n.TEXTURE_CUBE_MAP),U.__version=q.version,E.onUpdate&&E.onUpdate(E)}L.__version=E.version}function ae(L,E,V,re,q,U){const se=o.convert(V.format,V.colorSpace),oe=o.convert(V.type),le=y(V.internalFormat,se,oe,V.colorSpace),we=i.get(E),ee=i.get(V);if(ee.__renderTarget=E,!we.__hasExternalTextures){const be=Math.max(1,E.width>>U),xe=Math.max(1,E.height>>U);q===n.TEXTURE_3D||q===n.TEXTURE_2D_ARRAY?t.texImage3D(q,U,le,be,xe,E.depth,0,se,oe,null):t.texImage2D(q,U,le,be,xe,0,se,oe,null)}t.bindFramebuffer(n.FRAMEBUFFER,L),_e(E)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,re,q,ee.__webglTexture,0,z(E)):(q===n.TEXTURE_2D||q>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&q<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,re,q,ee.__webglTexture,U),t.bindFramebuffer(n.FRAMEBUFFER,null)}function ie(L,E,V){if(n.bindRenderbuffer(n.RENDERBUFFER,L),E.depthBuffer){const re=E.depthTexture,q=re&&re.isDepthTexture?re.type:null,U=g(E.stencilBuffer,q),se=E.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,oe=z(E);_e(E)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,oe,U,E.width,E.height):V?n.renderbufferStorageMultisample(n.RENDERBUFFER,oe,U,E.width,E.height):n.renderbufferStorage(n.RENDERBUFFER,U,E.width,E.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,se,n.RENDERBUFFER,L)}else{const re=E.textures;for(let q=0;q<re.length;q++){const U=re[q],se=o.convert(U.format,U.colorSpace),oe=o.convert(U.type),le=y(U.internalFormat,se,oe,U.colorSpace),we=z(E);V&&_e(E)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,we,le,E.width,E.height):_e(E)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,we,le,E.width,E.height):n.renderbufferStorage(n.RENDERBUFFER,le,E.width,E.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function ye(L,E){if(E&&E.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,L),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const re=i.get(E.depthTexture);re.__renderTarget=E,(!re.__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),G(E.depthTexture,0);const q=re.__webglTexture,U=z(E);if(E.depthTexture.format===As)_e(E)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,q,0,U):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,q,0);else if(E.depthTexture.format===zs)_e(E)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,q,0,U):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,q,0);else throw new Error("Unknown depthTexture format")}function fe(L){const E=i.get(L),V=L.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==L.depthTexture){const re=L.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),re){const q=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,re.removeEventListener("dispose",q)};re.addEventListener("dispose",q),E.__depthDisposeCallback=q}E.__boundDepthTexture=re}if(L.depthTexture&&!E.__autoAllocateDepthBuffer){if(V)throw new Error("target.depthTexture not supported in Cube render targets");ye(E.__webglFramebuffer,L)}else if(V){E.__webglDepthbuffer=[];for(let re=0;re<6;re++)if(t.bindFramebuffer(n.FRAMEBUFFER,E.__webglFramebuffer[re]),E.__webglDepthbuffer[re]===void 0)E.__webglDepthbuffer[re]=n.createRenderbuffer(),ie(E.__webglDepthbuffer[re],L,!1);else{const q=L.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,U=E.__webglDepthbuffer[re];n.bindRenderbuffer(n.RENDERBUFFER,U),n.framebufferRenderbuffer(n.FRAMEBUFFER,q,n.RENDERBUFFER,U)}}else if(t.bindFramebuffer(n.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=n.createRenderbuffer(),ie(E.__webglDepthbuffer,L,!1);else{const re=L.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,q=E.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,q),n.framebufferRenderbuffer(n.FRAMEBUFFER,re,n.RENDERBUFFER,q)}t.bindFramebuffer(n.FRAMEBUFFER,null)}function Ie(L,E,V){const re=i.get(L);E!==void 0&&ae(re.__webglFramebuffer,L,L.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),V!==void 0&&fe(L)}function ke(L){const E=L.texture,V=i.get(L),re=i.get(E);L.addEventListener("dispose",T);const q=L.textures,U=L.isWebGLCubeRenderTarget===!0,se=q.length>1;if(se||(re.__webglTexture===void 0&&(re.__webglTexture=n.createTexture()),re.__version=E.version,r.memory.textures++),U){V.__webglFramebuffer=[];for(let oe=0;oe<6;oe++)if(E.mipmaps&&E.mipmaps.length>0){V.__webglFramebuffer[oe]=[];for(let le=0;le<E.mipmaps.length;le++)V.__webglFramebuffer[oe][le]=n.createFramebuffer()}else V.__webglFramebuffer[oe]=n.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){V.__webglFramebuffer=[];for(let oe=0;oe<E.mipmaps.length;oe++)V.__webglFramebuffer[oe]=n.createFramebuffer()}else V.__webglFramebuffer=n.createFramebuffer();if(se)for(let oe=0,le=q.length;oe<le;oe++){const we=i.get(q[oe]);we.__webglTexture===void 0&&(we.__webglTexture=n.createTexture(),r.memory.textures++)}if(L.samples>0&&_e(L)===!1){V.__webglMultisampledFramebuffer=n.createFramebuffer(),V.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,V.__webglMultisampledFramebuffer);for(let oe=0;oe<q.length;oe++){const le=q[oe];V.__webglColorRenderbuffer[oe]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,V.__webglColorRenderbuffer[oe]);const we=o.convert(le.format,le.colorSpace),ee=o.convert(le.type),be=y(le.internalFormat,we,ee,le.colorSpace,L.isXRRenderTarget===!0),xe=z(L);n.renderbufferStorageMultisample(n.RENDERBUFFER,xe,be,L.width,L.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+oe,n.RENDERBUFFER,V.__webglColorRenderbuffer[oe])}n.bindRenderbuffer(n.RENDERBUFFER,null),L.depthBuffer&&(V.__webglDepthRenderbuffer=n.createRenderbuffer(),ie(V.__webglDepthRenderbuffer,L,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(U){t.bindTexture(n.TEXTURE_CUBE_MAP,re.__webglTexture),Z(n.TEXTURE_CUBE_MAP,E);for(let oe=0;oe<6;oe++)if(E.mipmaps&&E.mipmaps.length>0)for(let le=0;le<E.mipmaps.length;le++)ae(V.__webglFramebuffer[oe][le],L,E,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,le);else ae(V.__webglFramebuffer[oe],L,E,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0);m(E)&&p(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(se){for(let oe=0,le=q.length;oe<le;oe++){const we=q[oe],ee=i.get(we);t.bindTexture(n.TEXTURE_2D,ee.__webglTexture),Z(n.TEXTURE_2D,we),ae(V.__webglFramebuffer,L,we,n.COLOR_ATTACHMENT0+oe,n.TEXTURE_2D,0),m(we)&&p(n.TEXTURE_2D)}t.unbindTexture()}else{let oe=n.TEXTURE_2D;if((L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(oe=L.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(oe,re.__webglTexture),Z(oe,E),E.mipmaps&&E.mipmaps.length>0)for(let le=0;le<E.mipmaps.length;le++)ae(V.__webglFramebuffer[le],L,E,n.COLOR_ATTACHMENT0,oe,le);else ae(V.__webglFramebuffer,L,E,n.COLOR_ATTACHMENT0,oe,0);m(E)&&p(oe),t.unbindTexture()}L.depthBuffer&&fe(L)}function he(L){const E=L.textures;for(let V=0,re=E.length;V<re;V++){const q=E[V];if(m(q)){const U=x(L),se=i.get(q).__webglTexture;t.bindTexture(U,se),p(U),t.unbindTexture()}}}const ge=[],I=[];function Me(L){if(L.samples>0){if(_e(L)===!1){const E=L.textures,V=L.width,re=L.height;let q=n.COLOR_BUFFER_BIT;const U=L.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,se=i.get(L),oe=E.length>1;if(oe)for(let le=0;le<E.length;le++)t.bindFramebuffer(n.FRAMEBUFFER,se.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+le,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,se.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+le,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,se.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,se.__webglFramebuffer);for(let le=0;le<E.length;le++){if(L.resolveDepthBuffer&&(L.depthBuffer&&(q|=n.DEPTH_BUFFER_BIT),L.stencilBuffer&&L.resolveStencilBuffer&&(q|=n.STENCIL_BUFFER_BIT)),oe){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,se.__webglColorRenderbuffer[le]);const we=i.get(E[le]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,we,0)}n.blitFramebuffer(0,0,V,re,0,0,V,re,q,n.NEAREST),l===!0&&(ge.length=0,I.length=0,ge.push(n.COLOR_ATTACHMENT0+le),L.depthBuffer&&L.resolveDepthBuffer===!1&&(ge.push(U),I.push(U),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,I)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,ge))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),oe)for(let le=0;le<E.length;le++){t.bindFramebuffer(n.FRAMEBUFFER,se.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+le,n.RENDERBUFFER,se.__webglColorRenderbuffer[le]);const we=i.get(E[le]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,se.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+le,n.TEXTURE_2D,we,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,se.__webglMultisampledFramebuffer)}else if(L.depthBuffer&&L.resolveDepthBuffer===!1&&l){const E=L.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[E])}}}function z(L){return Math.min(s.maxSamples,L.samples)}function _e(L){const E=i.get(L);return L.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function ce(L){const E=r.render.frame;h.get(L)!==E&&(h.set(L,E),L.update())}function Le(L,E){const V=L.colorSpace,re=L.format,q=L.type;return L.isCompressedTexture===!0||L.isVideoTexture===!0||V!==Ws&&V!==di&&(st.getTransfer(V)===ft?(re!==An||q!==Jn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",V)),E}function Ee(L){return typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement?(c.width=L.naturalWidth||L.width,c.height=L.naturalHeight||L.height):typeof VideoFrame<"u"&&L instanceof VideoFrame?(c.width=L.displayWidth,c.height=L.displayHeight):(c.width=L.width,c.height=L.height),c}this.allocateTextureUnit=F,this.resetTextureUnits=P,this.setTexture2D=G,this.setTexture2DArray=$,this.setTexture3D=te,this.setTextureCube=K,this.rebindTextures=Ie,this.setupRenderTarget=ke,this.updateRenderTargetMipmap=he,this.updateMultisampleRenderTarget=Me,this.setupDepthRenderbuffer=fe,this.setupFrameBufferTexture=ae,this.useMultisampledRTT=_e}function I_(n,e){function t(i,s=di){let o;const r=st.getTransfer(s);if(i===Jn)return n.UNSIGNED_BYTE;if(i===uc)return n.UNSIGNED_SHORT_4_4_4_4;if(i===fc)return n.UNSIGNED_SHORT_5_5_5_1;if(i===Hd)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===Fd)return n.BYTE;if(i===zd)return n.SHORT;if(i===Eo)return n.UNSIGNED_SHORT;if(i===dc)return n.INT;if(i===Fi)return n.UNSIGNED_INT;if(i===Yn)return n.FLOAT;if(i===Lo)return n.HALF_FLOAT;if(i===Gd)return n.ALPHA;if(i===Vd)return n.RGB;if(i===An)return n.RGBA;if(i===Wd)return n.LUMINANCE;if(i===$d)return n.LUMINANCE_ALPHA;if(i===As)return n.DEPTH_COMPONENT;if(i===zs)return n.DEPTH_STENCIL;if(i===Xd)return n.RED;if(i===pc)return n.RED_INTEGER;if(i===Yd)return n.RG;if(i===mc)return n.RG_INTEGER;if(i===gc)return n.RGBA_INTEGER;if(i===Er||i===wr||i===Tr||i===Ar)if(r===ft)if(o=e.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(i===Er)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===wr)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Tr)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Ar)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(i===Er)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===wr)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Tr)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Ar)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===bl||i===Sl||i===El||i===wl)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(i===bl)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Sl)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===El)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===wl)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Tl||i===Al||i===Cl)if(o=e.get("WEBGL_compressed_texture_etc"),o!==null){if(i===Tl||i===Al)return r===ft?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(i===Cl)return r===ft?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Rl||i===Pl||i===Ll||i===Il||i===Dl||i===Nl||i===Ul||i===kl||i===Bl||i===Ol||i===Fl||i===zl||i===Hl||i===Gl)if(o=e.get("WEBGL_compressed_texture_astc"),o!==null){if(i===Rl)return r===ft?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Pl)return r===ft?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Ll)return r===ft?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Il)return r===ft?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Dl)return r===ft?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Nl)return r===ft?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Ul)return r===ft?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===kl)return r===ft?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Bl)return r===ft?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Ol)return r===ft?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Fl)return r===ft?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===zl)return r===ft?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Hl)return r===ft?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Gl)return r===ft?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Cr||i===Vl||i===Wl)if(o=e.get("EXT_texture_compression_bptc"),o!==null){if(i===Cr)return r===ft?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Vl)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Wl)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===qd||i===$l||i===Xl||i===Yl)if(o=e.get("EXT_texture_compression_rgtc"),o!==null){if(i===Cr)return o.COMPRESSED_RED_RGTC1_EXT;if(i===$l)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Xl)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Yl)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Fs?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}class D_ extends an{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Be extends Dt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const N_={type:"move"};class Ra{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Be,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Be,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new D,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new D),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Be,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new D,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new D),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let s=null,o=null,r=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){r=!0;for(const _ of e.hand.values()){const m=t.getJointPose(_,i),p=this._getHandJoint(c,_);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const h=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],u=h.position.distanceTo(d.position),f=.02,v=.005;c.inputState.pinching&&u>f+v?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&u<=f-v&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(o=t.getPose(e.gripSpace,i),o!==null&&(l.matrix.fromArray(o.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,o.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(o.linearVelocity)):l.hasLinearVelocity=!1,o.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(o.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=t.getPose(e.targetRaySpace,i),s===null&&o!==null&&(s=o),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(N_)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=o!==null),c!==null&&(c.visible=r!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new Be;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}const U_=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,k_=`
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

}`;class B_{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,i){if(this.texture===null){const s=new Zt,o=e.properties.get(s);o.__webglTexture=t.texture,(t.depthNear!=i.depthNear||t.depthFar!=i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=s}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new yi({vertexShader:U_,fragmentShader:k_,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new B(new St(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class O_ extends Xi{constructor(e,t){super();const i=this;let s=null,o=1,r=null,a="local-floor",l=1,c=null,h=null,d=null,u=null,f=null,v=null;const _=new B_,m=t.getContextAttributes();let p=null,x=null;const y=[],g=[],b=new Re;let w=null;const T=new an;T.viewport=new gt;const A=new an;A.viewport=new gt;const S=[T,A],M=new D_;let C=null,P=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(N){let j=y[N];return j===void 0&&(j=new Ra,y[N]=j),j.getTargetRaySpace()},this.getControllerGrip=function(N){let j=y[N];return j===void 0&&(j=new Ra,y[N]=j),j.getGripSpace()},this.getHand=function(N){let j=y[N];return j===void 0&&(j=new Ra,y[N]=j),j.getHandSpace()};function F(N){const j=g.indexOf(N.inputSource);if(j===-1)return;const ae=y[j];ae!==void 0&&(ae.update(N.inputSource,N.frame,c||r),ae.dispatchEvent({type:N.type,data:N.inputSource}))}function O(){s.removeEventListener("select",F),s.removeEventListener("selectstart",F),s.removeEventListener("selectend",F),s.removeEventListener("squeeze",F),s.removeEventListener("squeezestart",F),s.removeEventListener("squeezeend",F),s.removeEventListener("end",O),s.removeEventListener("inputsourceschange",G);for(let N=0;N<y.length;N++){const j=g[N];j!==null&&(g[N]=null,y[N].disconnect(j))}C=null,P=null,_.reset(),e.setRenderTarget(p),f=null,u=null,d=null,s=null,x=null,W.stop(),i.isPresenting=!1,e.setPixelRatio(w),e.setSize(b.width,b.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(N){o=N,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(N){a=N,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||r},this.setReferenceSpace=function(N){c=N},this.getBaseLayer=function(){return u!==null?u:f},this.getBinding=function(){return d},this.getFrame=function(){return v},this.getSession=function(){return s},this.setSession=async function(N){if(s=N,s!==null){if(p=e.getRenderTarget(),s.addEventListener("select",F),s.addEventListener("selectstart",F),s.addEventListener("selectend",F),s.addEventListener("squeeze",F),s.addEventListener("squeezestart",F),s.addEventListener("squeezeend",F),s.addEventListener("end",O),s.addEventListener("inputsourceschange",G),m.xrCompatible!==!0&&await t.makeXRCompatible(),w=e.getPixelRatio(),e.getSize(b),s.renderState.layers===void 0){const j={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:o};f=new XRWebGLLayer(s,t,j),s.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),x=new zi(f.framebufferWidth,f.framebufferHeight,{format:An,type:Jn,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}else{let j=null,ae=null,ie=null;m.depth&&(ie=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,j=m.stencil?zs:As,ae=m.stencil?Fs:Fi);const ye={colorFormat:t.RGBA8,depthFormat:ie,scaleFactor:o};d=new XRWebGLBinding(s,t),u=d.createProjectionLayer(ye),s.updateRenderState({layers:[u]}),e.setPixelRatio(1),e.setSize(u.textureWidth,u.textureHeight,!1),x=new zi(u.textureWidth,u.textureHeight,{format:An,type:Jn,depthTexture:new lu(u.textureWidth,u.textureHeight,ae,void 0,void 0,void 0,void 0,void 0,void 0,j),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1})}x.isXRRenderTarget=!0,this.setFoveation(l),c=null,r=await s.requestReferenceSpace(a),W.setContext(s),W.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function G(N){for(let j=0;j<N.removed.length;j++){const ae=N.removed[j],ie=g.indexOf(ae);ie>=0&&(g[ie]=null,y[ie].disconnect(ae))}for(let j=0;j<N.added.length;j++){const ae=N.added[j];let ie=g.indexOf(ae);if(ie===-1){for(let fe=0;fe<y.length;fe++)if(fe>=g.length){g.push(ae),ie=fe;break}else if(g[fe]===null){g[fe]=ae,ie=fe;break}if(ie===-1)break}const ye=y[ie];ye&&ye.connect(ae)}}const $=new D,te=new D;function K(N,j,ae){$.setFromMatrixPosition(j.matrixWorld),te.setFromMatrixPosition(ae.matrixWorld);const ie=$.distanceTo(te),ye=j.projectionMatrix.elements,fe=ae.projectionMatrix.elements,Ie=ye[14]/(ye[10]-1),ke=ye[14]/(ye[10]+1),he=(ye[9]+1)/ye[5],ge=(ye[9]-1)/ye[5],I=(ye[8]-1)/ye[0],Me=(fe[8]+1)/fe[0],z=Ie*I,_e=Ie*Me,ce=ie/(-I+Me),Le=ce*-I;if(j.matrixWorld.decompose(N.position,N.quaternion,N.scale),N.translateX(Le),N.translateZ(ce),N.matrixWorld.compose(N.position,N.quaternion,N.scale),N.matrixWorldInverse.copy(N.matrixWorld).invert(),ye[10]===-1)N.projectionMatrix.copy(j.projectionMatrix),N.projectionMatrixInverse.copy(j.projectionMatrixInverse);else{const Ee=Ie+ce,L=ke+ce,E=z-Le,V=_e+(ie-Le),re=he*ke/L*Ee,q=ge*ke/L*Ee;N.projectionMatrix.makePerspective(E,V,re,q,Ee,L),N.projectionMatrixInverse.copy(N.projectionMatrix).invert()}}function X(N,j){j===null?N.matrixWorld.copy(N.matrix):N.matrixWorld.multiplyMatrices(j.matrixWorld,N.matrix),N.matrixWorldInverse.copy(N.matrixWorld).invert()}this.updateCamera=function(N){if(s===null)return;let j=N.near,ae=N.far;_.texture!==null&&(_.depthNear>0&&(j=_.depthNear),_.depthFar>0&&(ae=_.depthFar)),M.near=A.near=T.near=j,M.far=A.far=T.far=ae,(C!==M.near||P!==M.far)&&(s.updateRenderState({depthNear:M.near,depthFar:M.far}),C=M.near,P=M.far),T.layers.mask=N.layers.mask|2,A.layers.mask=N.layers.mask|4,M.layers.mask=T.layers.mask|A.layers.mask;const ie=N.parent,ye=M.cameras;X(M,ie);for(let fe=0;fe<ye.length;fe++)X(ye[fe],ie);ye.length===2?K(M,T,A):M.projectionMatrix.copy(T.projectionMatrix),Y(N,M,ie)};function Y(N,j,ae){ae===null?N.matrix.copy(j.matrixWorld):(N.matrix.copy(ae.matrixWorld),N.matrix.invert(),N.matrix.multiply(j.matrixWorld)),N.matrix.decompose(N.position,N.quaternion,N.scale),N.updateMatrixWorld(!0),N.projectionMatrix.copy(j.projectionMatrix),N.projectionMatrixInverse.copy(j.projectionMatrixInverse),N.isPerspectiveCamera&&(N.fov=wo*2*Math.atan(1/N.projectionMatrix.elements[5]),N.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(u===null&&f===null))return l},this.setFoveation=function(N){l=N,u!==null&&(u.fixedFoveation=N),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=N)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(M)};let k=null;function Z(N,j){if(h=j.getViewerPose(c||r),v=j,h!==null){const ae=h.views;f!==null&&(e.setRenderTargetFramebuffer(x,f.framebuffer),e.setRenderTarget(x));let ie=!1;ae.length!==M.cameras.length&&(M.cameras.length=0,ie=!0);for(let fe=0;fe<ae.length;fe++){const Ie=ae[fe];let ke=null;if(f!==null)ke=f.getViewport(Ie);else{const ge=d.getViewSubImage(u,Ie);ke=ge.viewport,fe===0&&(e.setRenderTargetTextures(x,ge.colorTexture,u.ignoreDepthValues?void 0:ge.depthStencilTexture),e.setRenderTarget(x))}let he=S[fe];he===void 0&&(he=new an,he.layers.enable(fe),he.viewport=new gt,S[fe]=he),he.matrix.fromArray(Ie.transform.matrix),he.matrix.decompose(he.position,he.quaternion,he.scale),he.projectionMatrix.fromArray(Ie.projectionMatrix),he.projectionMatrixInverse.copy(he.projectionMatrix).invert(),he.viewport.set(ke.x,ke.y,ke.width,ke.height),fe===0&&(M.matrix.copy(he.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),ie===!0&&M.cameras.push(he)}const ye=s.enabledFeatures;if(ye&&ye.includes("depth-sensing")){const fe=d.getDepthInformation(ae[0]);fe&&fe.isValid&&fe.texture&&_.init(e,fe,s.renderState)}}for(let ae=0;ae<y.length;ae++){const ie=g[ae],ye=y[ae];ie!==null&&ye!==void 0&&ye.update(ie,j,c||r)}k&&k(N,j),j.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:j}),v=null}const W=new ru;W.setAnimationLoop(Z),this.setAnimationLoop=function(N){k=N},this.dispose=function(){}}}const Pi=new Bn,F_=new _t;function z_(n,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function i(m,p){p.color.getRGB(m.fogColor.value,iu(n)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,x,y,g){p.isMeshBasicMaterial||p.isMeshLambertMaterial?o(m,p):p.isMeshToonMaterial?(o(m,p),d(m,p)):p.isMeshPhongMaterial?(o(m,p),h(m,p)):p.isMeshStandardMaterial?(o(m,p),u(m,p),p.isMeshPhysicalMaterial&&f(m,p,g)):p.isMeshMatcapMaterial?(o(m,p),v(m,p)):p.isMeshDepthMaterial?o(m,p):p.isMeshDistanceMaterial?(o(m,p),_(m,p)):p.isMeshNormalMaterial?o(m,p):p.isLineBasicMaterial?(r(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?l(m,p,x,y):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function o(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===tn&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===tn&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const x=e.get(p),y=x.envMap,g=x.envMapRotation;y&&(m.envMap.value=y,Pi.copy(g),Pi.x*=-1,Pi.y*=-1,Pi.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(Pi.y*=-1,Pi.z*=-1),m.envMapRotation.value.setFromMatrix4(F_.makeRotationFromEuler(Pi)),m.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function r(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,x,y){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*x,m.scale.value=y*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function d(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function u(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,x){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===tn&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=x.texture,m.transmissionSamplerSize.value.set(x.width,x.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function v(m,p){p.matcap&&(m.matcap.value=p.matcap)}function _(m,p){const x=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(x.matrixWorld),m.nearDistance.value=x.shadow.camera.near,m.farDistance.value=x.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function H_(n,e,t,i){let s={},o={},r=[];const a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(x,y){const g=y.program;i.uniformBlockBinding(x,g)}function c(x,y){let g=s[x.id];g===void 0&&(v(x),g=h(x),s[x.id]=g,x.addEventListener("dispose",m));const b=y.program;i.updateUBOMapping(x,b);const w=e.render.frame;o[x.id]!==w&&(u(x),o[x.id]=w)}function h(x){const y=d();x.__bindingPointIndex=y;const g=n.createBuffer(),b=x.__size,w=x.usage;return n.bindBuffer(n.UNIFORM_BUFFER,g),n.bufferData(n.UNIFORM_BUFFER,b,w),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,y,g),g}function d(){for(let x=0;x<a;x++)if(r.indexOf(x)===-1)return r.push(x),x;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(x){const y=s[x.id],g=x.uniforms,b=x.__cache;n.bindBuffer(n.UNIFORM_BUFFER,y);for(let w=0,T=g.length;w<T;w++){const A=Array.isArray(g[w])?g[w]:[g[w]];for(let S=0,M=A.length;S<M;S++){const C=A[S];if(f(C,w,S,b)===!0){const P=C.__offset,F=Array.isArray(C.value)?C.value:[C.value];let O=0;for(let G=0;G<F.length;G++){const $=F[G],te=_($);typeof $=="number"||typeof $=="boolean"?(C.__data[0]=$,n.bufferSubData(n.UNIFORM_BUFFER,P+O,C.__data)):$.isMatrix3?(C.__data[0]=$.elements[0],C.__data[1]=$.elements[1],C.__data[2]=$.elements[2],C.__data[3]=0,C.__data[4]=$.elements[3],C.__data[5]=$.elements[4],C.__data[6]=$.elements[5],C.__data[7]=0,C.__data[8]=$.elements[6],C.__data[9]=$.elements[7],C.__data[10]=$.elements[8],C.__data[11]=0):($.toArray(C.__data,O),O+=te.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,P,C.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function f(x,y,g,b){const w=x.value,T=y+"_"+g;if(b[T]===void 0)return typeof w=="number"||typeof w=="boolean"?b[T]=w:b[T]=w.clone(),!0;{const A=b[T];if(typeof w=="number"||typeof w=="boolean"){if(A!==w)return b[T]=w,!0}else if(A.equals(w)===!1)return A.copy(w),!0}return!1}function v(x){const y=x.uniforms;let g=0;const b=16;for(let T=0,A=y.length;T<A;T++){const S=Array.isArray(y[T])?y[T]:[y[T]];for(let M=0,C=S.length;M<C;M++){const P=S[M],F=Array.isArray(P.value)?P.value:[P.value];for(let O=0,G=F.length;O<G;O++){const $=F[O],te=_($),K=g%b,X=K%te.boundary,Y=K+X;g+=X,Y!==0&&b-Y<te.storage&&(g+=b-Y),P.__data=new Float32Array(te.storage/Float32Array.BYTES_PER_ELEMENT),P.__offset=g,g+=te.storage}}}const w=g%b;return w>0&&(g+=b-w),x.__size=g,x.__cache={},this}function _(x){const y={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(y.boundary=4,y.storage=4):x.isVector2?(y.boundary=8,y.storage=8):x.isVector3||x.isColor?(y.boundary=16,y.storage=12):x.isVector4?(y.boundary=16,y.storage=16):x.isMatrix3?(y.boundary=48,y.storage=48):x.isMatrix4?(y.boundary=64,y.storage=64):x.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",x),y}function m(x){const y=x.target;y.removeEventListener("dispose",m);const g=r.indexOf(y.__bindingPointIndex);r.splice(g,1),n.deleteBuffer(s[y.id]),delete s[y.id],delete o[y.id]}function p(){for(const x in s)n.deleteBuffer(s[x]);r=[],s={},o={}}return{bind:l,update:c,dispose:p}}class G_{constructor(e={}){const{canvas:t=Pp(),context:i=null,depth:s=!0,stencil:o=!1,alpha:r=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1,reverseDepthBuffer:u=!1}=e;this.isWebGLRenderer=!0;let f;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=i.getContextAttributes().alpha}else f=r;const v=new Uint32Array(4),_=new Int32Array(4);let m=null,p=null;const x=[],y=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=mt,this.toneMapping=vi,this.toneMappingExposure=1;const g=this;let b=!1,w=0,T=0,A=null,S=-1,M=null;const C=new gt,P=new gt;let F=null;const O=new $e(0);let G=0,$=t.width,te=t.height,K=1,X=null,Y=null;const k=new gt(0,0,$,te),Z=new gt(0,0,$,te);let W=!1;const N=new yc;let j=!1,ae=!1;const ie=new _t,ye=new _t,fe=new D,Ie=new gt,ke={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let he=!1;function ge(){return A===null?K:1}let I=i;function Me(R,J){return t.getContext(R,J)}try{const R={alpha:!0,depth:s,stencil:o,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${hc}`),t.addEventListener("webglcontextlost",me,!1),t.addEventListener("webglcontextrestored",Se,!1),t.addEventListener("webglcontextcreationerror",Te,!1),I===null){const J="webgl2";if(I=Me(J,R),I===null)throw Me(J)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(R){throw console.error("THREE.WebGLRenderer: "+R.message),R}let z,_e,ce,Le,Ee,L,E,V,re,q,U,se,oe,le,we,ee,be,xe,Ce,Pe,Ne,Fe,ve,H;function Ae(){z=new Y0(I),z.init(),Fe=new I_(I,z),_e=new H0(I,z,e,Fe),ce=new R_(I,z),_e.reverseDepthBuffer&&u&&ce.buffers.depth.setReversed(!0),Le=new K0(I),Ee=new p_,L=new L_(I,z,ce,Ee,_e,Fe,Le),E=new V0(g),V=new X0(g),re=new im(I),ve=new F0(I,re),q=new q0(I,re,Le,ve),U=new J0(I,q,re,Le),Ce=new Z0(I,_e,L),ee=new G0(Ee),se=new f_(g,E,V,z,_e,ve,ee),oe=new z_(g,Ee),le=new g_,we=new b_(z),xe=new O0(g,E,V,ce,U,f,l),be=new A_(g,U,_e),H=new H_(I,Le,_e,ce),Pe=new z0(I,z,Le),Ne=new j0(I,z,Le),Le.programs=se.programs,g.capabilities=_e,g.extensions=z,g.properties=Ee,g.renderLists=le,g.shadowMap=be,g.state=ce,g.info=Le}Ae();const ne=new O_(g,I);this.xr=ne,this.getContext=function(){return I},this.getContextAttributes=function(){return I.getContextAttributes()},this.forceContextLoss=function(){const R=z.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){const R=z.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return K},this.setPixelRatio=function(R){R!==void 0&&(K=R,this.setSize($,te,!1))},this.getSize=function(R){return R.set($,te)},this.setSize=function(R,J,de=!0){if(ne.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}$=R,te=J,t.width=Math.floor(R*K),t.height=Math.floor(J*K),de===!0&&(t.style.width=R+"px",t.style.height=J+"px"),this.setViewport(0,0,R,J)},this.getDrawingBufferSize=function(R){return R.set($*K,te*K).floor()},this.setDrawingBufferSize=function(R,J,de){$=R,te=J,K=de,t.width=Math.floor(R*de),t.height=Math.floor(J*de),this.setViewport(0,0,R,J)},this.getCurrentViewport=function(R){return R.copy(C)},this.getViewport=function(R){return R.copy(k)},this.setViewport=function(R,J,de,ue){R.isVector4?k.set(R.x,R.y,R.z,R.w):k.set(R,J,de,ue),ce.viewport(C.copy(k).multiplyScalar(K).round())},this.getScissor=function(R){return R.copy(Z)},this.setScissor=function(R,J,de,ue){R.isVector4?Z.set(R.x,R.y,R.z,R.w):Z.set(R,J,de,ue),ce.scissor(P.copy(Z).multiplyScalar(K).round())},this.getScissorTest=function(){return W},this.setScissorTest=function(R){ce.setScissorTest(W=R)},this.setOpaqueSort=function(R){X=R},this.setTransparentSort=function(R){Y=R},this.getClearColor=function(R){return R.copy(xe.getClearColor())},this.setClearColor=function(){xe.setClearColor.apply(xe,arguments)},this.getClearAlpha=function(){return xe.getClearAlpha()},this.setClearAlpha=function(){xe.setClearAlpha.apply(xe,arguments)},this.clear=function(R=!0,J=!0,de=!0){let ue=0;if(R){let Q=!1;if(A!==null){const De=A.texture.format;Q=De===gc||De===mc||De===pc}if(Q){const De=A.texture.type,Oe=De===Jn||De===Fi||De===Eo||De===Fs||De===uc||De===fc,ze=xe.getClearColor(),He=xe.getClearAlpha(),Ke=ze.r,Ze=ze.g,Ge=ze.b;Oe?(v[0]=Ke,v[1]=Ze,v[2]=Ge,v[3]=He,I.clearBufferuiv(I.COLOR,0,v)):(_[0]=Ke,_[1]=Ze,_[2]=Ge,_[3]=He,I.clearBufferiv(I.COLOR,0,_))}else ue|=I.COLOR_BUFFER_BIT}J&&(ue|=I.DEPTH_BUFFER_BIT),de&&(ue|=I.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),I.clear(ue)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",me,!1),t.removeEventListener("webglcontextrestored",Se,!1),t.removeEventListener("webglcontextcreationerror",Te,!1),le.dispose(),we.dispose(),Ee.dispose(),E.dispose(),V.dispose(),U.dispose(),ve.dispose(),H.dispose(),se.dispose(),ne.dispose(),ne.removeEventListener("sessionstart",Si),ne.removeEventListener("sessionend",ti),Ei.stop()};function me(R){R.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),b=!0}function Se(){console.log("THREE.WebGLRenderer: Context Restored."),b=!1;const R=Le.autoReset,J=be.enabled,de=be.autoUpdate,ue=be.needsUpdate,Q=be.type;Ae(),Le.autoReset=R,be.enabled=J,be.autoUpdate=de,be.needsUpdate=ue,be.type=Q}function Te(R){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function Ve(R){const J=R.target;J.removeEventListener("dispose",Ve),Qe(J)}function Qe(R){ut(R),Ee.remove(R)}function ut(R){const J=Ee.get(R).programs;J!==void 0&&(J.forEach(function(de){se.releaseProgram(de)}),R.isShaderMaterial&&se.releaseShaderCache(R))}this.renderBufferDirect=function(R,J,de,ue,Q,De){J===null&&(J=ke);const Oe=Q.isMesh&&Q.matrixWorld.determinant()<0,ze=Tf(R,J,de,ue,Q);ce.setMaterial(ue,Oe);let He=de.index,Ke=1;if(ue.wireframe===!0){if(He=q.getWireframeAttribute(de),He===void 0)return;Ke=2}const Ze=de.drawRange,Ge=de.attributes.position;let rt=Ze.start*Ke,yt=(Ze.start+Ze.count)*Ke;De!==null&&(rt=Math.max(rt,De.start*Ke),yt=Math.min(yt,(De.start+De.count)*Ke)),He!==null?(rt=Math.max(rt,0),yt=Math.min(yt,He.count)):Ge!=null&&(rt=Math.max(rt,0),yt=Math.min(yt,Ge.count));const xt=yt-rt;if(xt<0||xt===1/0)return;ve.setup(Q,ue,ze,de,He);let Qt,lt=Pe;if(He!==null&&(Qt=re.get(He),lt=Ne,lt.setIndex(Qt)),Q.isMesh)ue.wireframe===!0?(ce.setLineWidth(ue.wireframeLinewidth*ge()),lt.setMode(I.LINES)):lt.setMode(I.TRIANGLES);else if(Q.isLine){let We=ue.linewidth;We===void 0&&(We=1),ce.setLineWidth(We*ge()),Q.isLineSegments?lt.setMode(I.LINES):Q.isLineLoop?lt.setMode(I.LINE_LOOP):lt.setMode(I.LINE_STRIP)}else Q.isPoints?lt.setMode(I.POINTS):Q.isSprite&&lt.setMode(I.TRIANGLES);if(Q.isBatchedMesh)if(Q._multiDrawInstances!==null)lt.renderMultiDrawInstances(Q._multiDrawStarts,Q._multiDrawCounts,Q._multiDrawCount,Q._multiDrawInstances);else if(z.get("WEBGL_multi_draw"))lt.renderMultiDraw(Q._multiDrawStarts,Q._multiDrawCounts,Q._multiDrawCount);else{const We=Q._multiDrawStarts,zn=Q._multiDrawCounts,ct=Q._multiDrawCount,_n=He?re.get(He).bytesPerElement:1,Ji=Ee.get(ue).currentProgram.getUniforms();for(let sn=0;sn<ct;sn++)Ji.setValue(I,"_gl_DrawID",sn),lt.render(We[sn]/_n,zn[sn])}else if(Q.isInstancedMesh)lt.renderInstances(rt,xt,Q.count);else if(de.isInstancedBufferGeometry){const We=de._maxInstanceCount!==void 0?de._maxInstanceCount:1/0,zn=Math.min(de.instanceCount,We);lt.renderInstances(rt,xt,zn)}else lt.render(rt,xt)};function nt(R,J,de){R.transparent===!0&&R.side===ln&&R.forceSinglePass===!1?(R.side=tn,R.needsUpdate=!0,Ho(R,J,de),R.side=_i,R.needsUpdate=!0,Ho(R,J,de),R.side=ln):Ho(R,J,de)}this.compile=function(R,J,de=null){de===null&&(de=R),p=we.get(de),p.init(J),y.push(p),de.traverseVisible(function(Q){Q.isLight&&Q.layers.test(J.layers)&&(p.pushLight(Q),Q.castShadow&&p.pushShadow(Q))}),R!==de&&R.traverseVisible(function(Q){Q.isLight&&Q.layers.test(J.layers)&&(p.pushLight(Q),Q.castShadow&&p.pushShadow(Q))}),p.setupLights();const ue=new Set;return R.traverse(function(Q){if(!(Q.isMesh||Q.isPoints||Q.isLine||Q.isSprite))return;const De=Q.material;if(De)if(Array.isArray(De))for(let Oe=0;Oe<De.length;Oe++){const ze=De[Oe];nt(ze,de,Q),ue.add(ze)}else nt(De,de,Q),ue.add(De)}),y.pop(),p=null,ue},this.compileAsync=function(R,J,de=null){const ue=this.compile(R,J,de);return new Promise(Q=>{function De(){if(ue.forEach(function(Oe){Ee.get(Oe).currentProgram.isReady()&&ue.delete(Oe)}),ue.size===0){Q(R);return}setTimeout(De,10)}z.get("KHR_parallel_shader_compile")!==null?De():setTimeout(De,10)})};let Tt=null;function Jt(R){Tt&&Tt(R)}function Si(){Ei.stop()}function ti(){Ei.start()}const Ei=new ru;Ei.setAnimationLoop(Jt),typeof self<"u"&&Ei.setContext(self),this.setAnimationLoop=function(R){Tt=R,ne.setAnimationLoop(R),R===null?Ei.stop():Ei.start()},ne.addEventListener("sessionstart",Si),ne.addEventListener("sessionend",ti),this.render=function(R,J){if(J!==void 0&&J.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(b===!0)return;if(R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),J.parent===null&&J.matrixWorldAutoUpdate===!0&&J.updateMatrixWorld(),ne.enabled===!0&&ne.isPresenting===!0&&(ne.cameraAutoUpdate===!0&&ne.updateCamera(J),J=ne.getCamera()),R.isScene===!0&&R.onBeforeRender(g,R,J,A),p=we.get(R,y.length),p.init(J),y.push(p),ye.multiplyMatrices(J.projectionMatrix,J.matrixWorldInverse),N.setFromProjectionMatrix(ye),ae=this.localClippingEnabled,j=ee.init(this.clippingPlanes,ae),m=le.get(R,x.length),m.init(),x.push(m),ne.enabled===!0&&ne.isPresenting===!0){const De=g.xr.getDepthSensingMesh();De!==null&&ta(De,J,-1/0,g.sortObjects)}ta(R,J,0,g.sortObjects),m.finish(),g.sortObjects===!0&&m.sort(X,Y),he=ne.enabled===!1||ne.isPresenting===!1||ne.hasDepthSensing()===!1,he&&xe.addToRenderList(m,R),this.info.render.frame++,j===!0&&ee.beginShadows();const de=p.state.shadowsArray;be.render(de,R,J),j===!0&&ee.endShadows(),this.info.autoReset===!0&&this.info.reset();const ue=m.opaque,Q=m.transmissive;if(p.setupLights(),J.isArrayCamera){const De=J.cameras;if(Q.length>0)for(let Oe=0,ze=De.length;Oe<ze;Oe++){const He=De[Oe];Bc(ue,Q,R,He)}he&&xe.render(R);for(let Oe=0,ze=De.length;Oe<ze;Oe++){const He=De[Oe];kc(m,R,He,He.viewport)}}else Q.length>0&&Bc(ue,Q,R,J),he&&xe.render(R),kc(m,R,J);A!==null&&(L.updateMultisampleRenderTarget(A),L.updateRenderTargetMipmap(A)),R.isScene===!0&&R.onAfterRender(g,R,J),ve.resetDefaultState(),S=-1,M=null,y.pop(),y.length>0?(p=y[y.length-1],j===!0&&ee.setGlobalState(g.clippingPlanes,p.state.camera)):p=null,x.pop(),x.length>0?m=x[x.length-1]:m=null};function ta(R,J,de,ue){if(R.visible===!1)return;if(R.layers.test(J.layers)){if(R.isGroup)de=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(J);else if(R.isLight)p.pushLight(R),R.castShadow&&p.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||N.intersectsSprite(R)){ue&&Ie.setFromMatrixPosition(R.matrixWorld).applyMatrix4(ye);const Oe=U.update(R),ze=R.material;ze.visible&&m.push(R,Oe,ze,de,Ie.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||N.intersectsObject(R))){const Oe=U.update(R),ze=R.material;if(ue&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),Ie.copy(R.boundingSphere.center)):(Oe.boundingSphere===null&&Oe.computeBoundingSphere(),Ie.copy(Oe.boundingSphere.center)),Ie.applyMatrix4(R.matrixWorld).applyMatrix4(ye)),Array.isArray(ze)){const He=Oe.groups;for(let Ke=0,Ze=He.length;Ke<Ze;Ke++){const Ge=He[Ke],rt=ze[Ge.materialIndex];rt&&rt.visible&&m.push(R,Oe,rt,de,Ie.z,Ge)}}else ze.visible&&m.push(R,Oe,ze,de,Ie.z,null)}}const De=R.children;for(let Oe=0,ze=De.length;Oe<ze;Oe++)ta(De[Oe],J,de,ue)}function kc(R,J,de,ue){const Q=R.opaque,De=R.transmissive,Oe=R.transparent;p.setupLightsView(de),j===!0&&ee.setGlobalState(g.clippingPlanes,de),ue&&ce.viewport(C.copy(ue)),Q.length>0&&zo(Q,J,de),De.length>0&&zo(De,J,de),Oe.length>0&&zo(Oe,J,de),ce.buffers.depth.setTest(!0),ce.buffers.depth.setMask(!0),ce.buffers.color.setMask(!0),ce.setPolygonOffset(!1)}function Bc(R,J,de,ue){if((de.isScene===!0?de.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[ue.id]===void 0&&(p.state.transmissionRenderTarget[ue.id]=new zi(1,1,{generateMipmaps:!0,type:z.has("EXT_color_buffer_half_float")||z.has("EXT_color_buffer_float")?Lo:Jn,minFilter:Bi,samples:4,stencilBuffer:o,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:st.workingColorSpace}));const De=p.state.transmissionRenderTarget[ue.id],Oe=ue.viewport||C;De.setSize(Oe.z,Oe.w);const ze=g.getRenderTarget();g.setRenderTarget(De),g.getClearColor(O),G=g.getClearAlpha(),G<1&&g.setClearColor(16777215,.5),g.clear(),he&&xe.render(de);const He=g.toneMapping;g.toneMapping=vi;const Ke=ue.viewport;if(ue.viewport!==void 0&&(ue.viewport=void 0),p.setupLightsView(ue),j===!0&&ee.setGlobalState(g.clippingPlanes,ue),zo(R,de,ue),L.updateMultisampleRenderTarget(De),L.updateRenderTargetMipmap(De),z.has("WEBGL_multisampled_render_to_texture")===!1){let Ze=!1;for(let Ge=0,rt=J.length;Ge<rt;Ge++){const yt=J[Ge],xt=yt.object,Qt=yt.geometry,lt=yt.material,We=yt.group;if(lt.side===ln&&xt.layers.test(ue.layers)){const zn=lt.side;lt.side=tn,lt.needsUpdate=!0,Oc(xt,de,ue,Qt,lt,We),lt.side=zn,lt.needsUpdate=!0,Ze=!0}}Ze===!0&&(L.updateMultisampleRenderTarget(De),L.updateRenderTargetMipmap(De))}g.setRenderTarget(ze),g.setClearColor(O,G),Ke!==void 0&&(ue.viewport=Ke),g.toneMapping=He}function zo(R,J,de){const ue=J.isScene===!0?J.overrideMaterial:null;for(let Q=0,De=R.length;Q<De;Q++){const Oe=R[Q],ze=Oe.object,He=Oe.geometry,Ke=ue===null?Oe.material:ue,Ze=Oe.group;ze.layers.test(de.layers)&&Oc(ze,J,de,He,Ke,Ze)}}function Oc(R,J,de,ue,Q,De){R.onBeforeRender(g,J,de,ue,Q,De),R.modelViewMatrix.multiplyMatrices(de.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),Q.onBeforeRender(g,J,de,ue,R,De),Q.transparent===!0&&Q.side===ln&&Q.forceSinglePass===!1?(Q.side=tn,Q.needsUpdate=!0,g.renderBufferDirect(de,J,ue,Q,R,De),Q.side=_i,Q.needsUpdate=!0,g.renderBufferDirect(de,J,ue,Q,R,De),Q.side=ln):g.renderBufferDirect(de,J,ue,Q,R,De),R.onAfterRender(g,J,de,ue,Q,De)}function Ho(R,J,de){J.isScene!==!0&&(J=ke);const ue=Ee.get(R),Q=p.state.lights,De=p.state.shadowsArray,Oe=Q.state.version,ze=se.getParameters(R,Q.state,De,J,de),He=se.getProgramCacheKey(ze);let Ke=ue.programs;ue.environment=R.isMeshStandardMaterial?J.environment:null,ue.fog=J.fog,ue.envMap=(R.isMeshStandardMaterial?V:E).get(R.envMap||ue.environment),ue.envMapRotation=ue.environment!==null&&R.envMap===null?J.environmentRotation:R.envMapRotation,Ke===void 0&&(R.addEventListener("dispose",Ve),Ke=new Map,ue.programs=Ke);let Ze=Ke.get(He);if(Ze!==void 0){if(ue.currentProgram===Ze&&ue.lightsStateVersion===Oe)return zc(R,ze),Ze}else ze.uniforms=se.getUniforms(R),R.onBeforeCompile(ze,g),Ze=se.acquireProgram(ze,He),Ke.set(He,Ze),ue.uniforms=ze.uniforms;const Ge=ue.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(Ge.clippingPlanes=ee.uniform),zc(R,ze),ue.needsLights=Cf(R),ue.lightsStateVersion=Oe,ue.needsLights&&(Ge.ambientLightColor.value=Q.state.ambient,Ge.lightProbe.value=Q.state.probe,Ge.directionalLights.value=Q.state.directional,Ge.directionalLightShadows.value=Q.state.directionalShadow,Ge.spotLights.value=Q.state.spot,Ge.spotLightShadows.value=Q.state.spotShadow,Ge.rectAreaLights.value=Q.state.rectArea,Ge.ltc_1.value=Q.state.rectAreaLTC1,Ge.ltc_2.value=Q.state.rectAreaLTC2,Ge.pointLights.value=Q.state.point,Ge.pointLightShadows.value=Q.state.pointShadow,Ge.hemisphereLights.value=Q.state.hemi,Ge.directionalShadowMap.value=Q.state.directionalShadowMap,Ge.directionalShadowMatrix.value=Q.state.directionalShadowMatrix,Ge.spotShadowMap.value=Q.state.spotShadowMap,Ge.spotLightMatrix.value=Q.state.spotLightMatrix,Ge.spotLightMap.value=Q.state.spotLightMap,Ge.pointShadowMap.value=Q.state.pointShadowMap,Ge.pointShadowMatrix.value=Q.state.pointShadowMatrix),ue.currentProgram=Ze,ue.uniformsList=null,Ze}function Fc(R){if(R.uniformsList===null){const J=R.currentProgram.getUniforms();R.uniformsList=Rr.seqWithValue(J.seq,R.uniforms)}return R.uniformsList}function zc(R,J){const de=Ee.get(R);de.outputColorSpace=J.outputColorSpace,de.batching=J.batching,de.batchingColor=J.batchingColor,de.instancing=J.instancing,de.instancingColor=J.instancingColor,de.instancingMorph=J.instancingMorph,de.skinning=J.skinning,de.morphTargets=J.morphTargets,de.morphNormals=J.morphNormals,de.morphColors=J.morphColors,de.morphTargetsCount=J.morphTargetsCount,de.numClippingPlanes=J.numClippingPlanes,de.numIntersection=J.numClipIntersection,de.vertexAlphas=J.vertexAlphas,de.vertexTangents=J.vertexTangents,de.toneMapping=J.toneMapping}function Tf(R,J,de,ue,Q){J.isScene!==!0&&(J=ke),L.resetTextureUnits();const De=J.fog,Oe=ue.isMeshStandardMaterial?J.environment:null,ze=A===null?g.outputColorSpace:A.isXRRenderTarget===!0?A.texture.colorSpace:Ws,He=(ue.isMeshStandardMaterial?V:E).get(ue.envMap||Oe),Ke=ue.vertexColors===!0&&!!de.attributes.color&&de.attributes.color.itemSize===4,Ze=!!de.attributes.tangent&&(!!ue.normalMap||ue.anisotropy>0),Ge=!!de.morphAttributes.position,rt=!!de.morphAttributes.normal,yt=!!de.morphAttributes.color;let xt=vi;ue.toneMapped&&(A===null||A.isXRRenderTarget===!0)&&(xt=g.toneMapping);const Qt=de.morphAttributes.position||de.morphAttributes.normal||de.morphAttributes.color,lt=Qt!==void 0?Qt.length:0,We=Ee.get(ue),zn=p.state.lights;if(j===!0&&(ae===!0||R!==M)){const hn=R===M&&ue.id===S;ee.setState(ue,R,hn)}let ct=!1;ue.version===We.__version?(We.needsLights&&We.lightsStateVersion!==zn.state.version||We.outputColorSpace!==ze||Q.isBatchedMesh&&We.batching===!1||!Q.isBatchedMesh&&We.batching===!0||Q.isBatchedMesh&&We.batchingColor===!0&&Q.colorTexture===null||Q.isBatchedMesh&&We.batchingColor===!1&&Q.colorTexture!==null||Q.isInstancedMesh&&We.instancing===!1||!Q.isInstancedMesh&&We.instancing===!0||Q.isSkinnedMesh&&We.skinning===!1||!Q.isSkinnedMesh&&We.skinning===!0||Q.isInstancedMesh&&We.instancingColor===!0&&Q.instanceColor===null||Q.isInstancedMesh&&We.instancingColor===!1&&Q.instanceColor!==null||Q.isInstancedMesh&&We.instancingMorph===!0&&Q.morphTexture===null||Q.isInstancedMesh&&We.instancingMorph===!1&&Q.morphTexture!==null||We.envMap!==He||ue.fog===!0&&We.fog!==De||We.numClippingPlanes!==void 0&&(We.numClippingPlanes!==ee.numPlanes||We.numIntersection!==ee.numIntersection)||We.vertexAlphas!==Ke||We.vertexTangents!==Ze||We.morphTargets!==Ge||We.morphNormals!==rt||We.morphColors!==yt||We.toneMapping!==xt||We.morphTargetsCount!==lt)&&(ct=!0):(ct=!0,We.__version=ue.version);let _n=We.currentProgram;ct===!0&&(_n=Ho(ue,J,Q));let Ji=!1,sn=!1,Ks=!1;const Mt=_n.getUniforms(),Rn=We.uniforms;if(ce.useProgram(_n.program)&&(Ji=!0,sn=!0,Ks=!0),ue.id!==S&&(S=ue.id,sn=!0),Ji||M!==R){ce.buffers.depth.getReversed()?(ie.copy(R.projectionMatrix),Ip(ie),Dp(ie),Mt.setValue(I,"projectionMatrix",ie)):Mt.setValue(I,"projectionMatrix",R.projectionMatrix),Mt.setValue(I,"viewMatrix",R.matrixWorldInverse);const ni=Mt.map.cameraPosition;ni!==void 0&&ni.setValue(I,fe.setFromMatrixPosition(R.matrixWorld)),_e.logarithmicDepthBuffer&&Mt.setValue(I,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(ue.isMeshPhongMaterial||ue.isMeshToonMaterial||ue.isMeshLambertMaterial||ue.isMeshBasicMaterial||ue.isMeshStandardMaterial||ue.isShaderMaterial)&&Mt.setValue(I,"isOrthographic",R.isOrthographicCamera===!0),M!==R&&(M=R,sn=!0,Ks=!0)}if(Q.isSkinnedMesh){Mt.setOptional(I,Q,"bindMatrix"),Mt.setOptional(I,Q,"bindMatrixInverse");const hn=Q.skeleton;hn&&(hn.boneTexture===null&&hn.computeBoneTexture(),Mt.setValue(I,"boneTexture",hn.boneTexture,L))}Q.isBatchedMesh&&(Mt.setOptional(I,Q,"batchingTexture"),Mt.setValue(I,"batchingTexture",Q._matricesTexture,L),Mt.setOptional(I,Q,"batchingIdTexture"),Mt.setValue(I,"batchingIdTexture",Q._indirectTexture,L),Mt.setOptional(I,Q,"batchingColorTexture"),Q._colorsTexture!==null&&Mt.setValue(I,"batchingColorTexture",Q._colorsTexture,L));const Zs=de.morphAttributes;if((Zs.position!==void 0||Zs.normal!==void 0||Zs.color!==void 0)&&Ce.update(Q,de,_n),(sn||We.receiveShadow!==Q.receiveShadow)&&(We.receiveShadow=Q.receiveShadow,Mt.setValue(I,"receiveShadow",Q.receiveShadow)),ue.isMeshGouraudMaterial&&ue.envMap!==null&&(Rn.envMap.value=He,Rn.flipEnvMap.value=He.isCubeTexture&&He.isRenderTargetTexture===!1?-1:1),ue.isMeshStandardMaterial&&ue.envMap===null&&J.environment!==null&&(Rn.envMapIntensity.value=J.environmentIntensity),sn&&(Mt.setValue(I,"toneMappingExposure",g.toneMappingExposure),We.needsLights&&Af(Rn,Ks),De&&ue.fog===!0&&oe.refreshFogUniforms(Rn,De),oe.refreshMaterialUniforms(Rn,ue,K,te,p.state.transmissionRenderTarget[R.id]),Rr.upload(I,Fc(We),Rn,L)),ue.isShaderMaterial&&ue.uniformsNeedUpdate===!0&&(Rr.upload(I,Fc(We),Rn,L),ue.uniformsNeedUpdate=!1),ue.isSpriteMaterial&&Mt.setValue(I,"center",Q.center),Mt.setValue(I,"modelViewMatrix",Q.modelViewMatrix),Mt.setValue(I,"normalMatrix",Q.normalMatrix),Mt.setValue(I,"modelMatrix",Q.matrixWorld),ue.isShaderMaterial||ue.isRawShaderMaterial){const hn=ue.uniformsGroups;for(let ni=0,ii=hn.length;ni<ii;ni++){const Hc=hn[ni];H.update(Hc,_n),H.bind(Hc,_n)}}return _n}function Af(R,J){R.ambientLightColor.needsUpdate=J,R.lightProbe.needsUpdate=J,R.directionalLights.needsUpdate=J,R.directionalLightShadows.needsUpdate=J,R.pointLights.needsUpdate=J,R.pointLightShadows.needsUpdate=J,R.spotLights.needsUpdate=J,R.spotLightShadows.needsUpdate=J,R.rectAreaLights.needsUpdate=J,R.hemisphereLights.needsUpdate=J}function Cf(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return w},this.getActiveMipmapLevel=function(){return T},this.getRenderTarget=function(){return A},this.setRenderTargetTextures=function(R,J,de){Ee.get(R.texture).__webglTexture=J,Ee.get(R.depthTexture).__webglTexture=de;const ue=Ee.get(R);ue.__hasExternalTextures=!0,ue.__autoAllocateDepthBuffer=de===void 0,ue.__autoAllocateDepthBuffer||z.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),ue.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(R,J){const de=Ee.get(R);de.__webglFramebuffer=J,de.__useDefaultFramebuffer=J===void 0},this.setRenderTarget=function(R,J=0,de=0){A=R,w=J,T=de;let ue=!0,Q=null,De=!1,Oe=!1;if(R){const He=Ee.get(R);if(He.__useDefaultFramebuffer!==void 0)ce.bindFramebuffer(I.FRAMEBUFFER,null),ue=!1;else if(He.__webglFramebuffer===void 0)L.setupRenderTarget(R);else if(He.__hasExternalTextures)L.rebindTextures(R,Ee.get(R.texture).__webglTexture,Ee.get(R.depthTexture).__webglTexture);else if(R.depthBuffer){const Ge=R.depthTexture;if(He.__boundDepthTexture!==Ge){if(Ge!==null&&Ee.has(Ge)&&(R.width!==Ge.image.width||R.height!==Ge.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");L.setupDepthRenderbuffer(R)}}const Ke=R.texture;(Ke.isData3DTexture||Ke.isDataArrayTexture||Ke.isCompressedArrayTexture)&&(Oe=!0);const Ze=Ee.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(Ze[J])?Q=Ze[J][de]:Q=Ze[J],De=!0):R.samples>0&&L.useMultisampledRTT(R)===!1?Q=Ee.get(R).__webglMultisampledFramebuffer:Array.isArray(Ze)?Q=Ze[de]:Q=Ze,C.copy(R.viewport),P.copy(R.scissor),F=R.scissorTest}else C.copy(k).multiplyScalar(K).floor(),P.copy(Z).multiplyScalar(K).floor(),F=W;if(ce.bindFramebuffer(I.FRAMEBUFFER,Q)&&ue&&ce.drawBuffers(R,Q),ce.viewport(C),ce.scissor(P),ce.setScissorTest(F),De){const He=Ee.get(R.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_CUBE_MAP_POSITIVE_X+J,He.__webglTexture,de)}else if(Oe){const He=Ee.get(R.texture),Ke=J||0;I.framebufferTextureLayer(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,He.__webglTexture,de||0,Ke)}S=-1},this.readRenderTargetPixels=function(R,J,de,ue,Q,De,Oe){if(!(R&&R.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ze=Ee.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Oe!==void 0&&(ze=ze[Oe]),ze){ce.bindFramebuffer(I.FRAMEBUFFER,ze);try{const He=R.texture,Ke=He.format,Ze=He.type;if(!_e.textureFormatReadable(Ke)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!_e.textureTypeReadable(Ze)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}J>=0&&J<=R.width-ue&&de>=0&&de<=R.height-Q&&I.readPixels(J,de,ue,Q,Fe.convert(Ke),Fe.convert(Ze),De)}finally{const He=A!==null?Ee.get(A).__webglFramebuffer:null;ce.bindFramebuffer(I.FRAMEBUFFER,He)}}},this.readRenderTargetPixelsAsync=async function(R,J,de,ue,Q,De,Oe){if(!(R&&R.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ze=Ee.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Oe!==void 0&&(ze=ze[Oe]),ze){const He=R.texture,Ke=He.format,Ze=He.type;if(!_e.textureFormatReadable(Ke))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!_e.textureTypeReadable(Ze))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(J>=0&&J<=R.width-ue&&de>=0&&de<=R.height-Q){ce.bindFramebuffer(I.FRAMEBUFFER,ze);const Ge=I.createBuffer();I.bindBuffer(I.PIXEL_PACK_BUFFER,Ge),I.bufferData(I.PIXEL_PACK_BUFFER,De.byteLength,I.STREAM_READ),I.readPixels(J,de,ue,Q,Fe.convert(Ke),Fe.convert(Ze),0);const rt=A!==null?Ee.get(A).__webglFramebuffer:null;ce.bindFramebuffer(I.FRAMEBUFFER,rt);const yt=I.fenceSync(I.SYNC_GPU_COMMANDS_COMPLETE,0);return I.flush(),await Lp(I,yt,4),I.bindBuffer(I.PIXEL_PACK_BUFFER,Ge),I.getBufferSubData(I.PIXEL_PACK_BUFFER,0,De),I.deleteBuffer(Ge),I.deleteSync(yt),De}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(R,J=null,de=0){R.isTexture!==!0&&(fo("WebGLRenderer: copyFramebufferToTexture function signature has changed."),J=arguments[0]||null,R=arguments[1]);const ue=Math.pow(2,-de),Q=Math.floor(R.image.width*ue),De=Math.floor(R.image.height*ue),Oe=J!==null?J.x:0,ze=J!==null?J.y:0;L.setTexture2D(R,0),I.copyTexSubImage2D(I.TEXTURE_2D,de,0,0,Oe,ze,Q,De),ce.unbindTexture()},this.copyTextureToTexture=function(R,J,de=null,ue=null,Q=0){R.isTexture!==!0&&(fo("WebGLRenderer: copyTextureToTexture function signature has changed."),ue=arguments[0]||null,R=arguments[1],J=arguments[2],Q=arguments[3]||0,de=null);let De,Oe,ze,He,Ke,Ze,Ge,rt,yt;const xt=R.isCompressedTexture?R.mipmaps[Q]:R.image;de!==null?(De=de.max.x-de.min.x,Oe=de.max.y-de.min.y,ze=de.isBox3?de.max.z-de.min.z:1,He=de.min.x,Ke=de.min.y,Ze=de.isBox3?de.min.z:0):(De=xt.width,Oe=xt.height,ze=xt.depth||1,He=0,Ke=0,Ze=0),ue!==null?(Ge=ue.x,rt=ue.y,yt=ue.z):(Ge=0,rt=0,yt=0);const Qt=Fe.convert(J.format),lt=Fe.convert(J.type);let We;J.isData3DTexture?(L.setTexture3D(J,0),We=I.TEXTURE_3D):J.isDataArrayTexture||J.isCompressedArrayTexture?(L.setTexture2DArray(J,0),We=I.TEXTURE_2D_ARRAY):(L.setTexture2D(J,0),We=I.TEXTURE_2D),I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,J.flipY),I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,J.premultiplyAlpha),I.pixelStorei(I.UNPACK_ALIGNMENT,J.unpackAlignment);const zn=I.getParameter(I.UNPACK_ROW_LENGTH),ct=I.getParameter(I.UNPACK_IMAGE_HEIGHT),_n=I.getParameter(I.UNPACK_SKIP_PIXELS),Ji=I.getParameter(I.UNPACK_SKIP_ROWS),sn=I.getParameter(I.UNPACK_SKIP_IMAGES);I.pixelStorei(I.UNPACK_ROW_LENGTH,xt.width),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,xt.height),I.pixelStorei(I.UNPACK_SKIP_PIXELS,He),I.pixelStorei(I.UNPACK_SKIP_ROWS,Ke),I.pixelStorei(I.UNPACK_SKIP_IMAGES,Ze);const Ks=R.isDataArrayTexture||R.isData3DTexture,Mt=J.isDataArrayTexture||J.isData3DTexture;if(R.isRenderTargetTexture||R.isDepthTexture){const Rn=Ee.get(R),Zs=Ee.get(J),hn=Ee.get(Rn.__renderTarget),ni=Ee.get(Zs.__renderTarget);ce.bindFramebuffer(I.READ_FRAMEBUFFER,hn.__webglFramebuffer),ce.bindFramebuffer(I.DRAW_FRAMEBUFFER,ni.__webglFramebuffer);for(let ii=0;ii<ze;ii++)Ks&&I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,Ee.get(R).__webglTexture,Q,Ze+ii),R.isDepthTexture?(Mt&&I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,Ee.get(J).__webglTexture,Q,yt+ii),I.blitFramebuffer(He,Ke,De,Oe,Ge,rt,De,Oe,I.DEPTH_BUFFER_BIT,I.NEAREST)):Mt?I.copyTexSubImage3D(We,Q,Ge,rt,yt+ii,He,Ke,De,Oe):I.copyTexSubImage2D(We,Q,Ge,rt,yt+ii,He,Ke,De,Oe);ce.bindFramebuffer(I.READ_FRAMEBUFFER,null),ce.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else Mt?R.isDataTexture||R.isData3DTexture?I.texSubImage3D(We,Q,Ge,rt,yt,De,Oe,ze,Qt,lt,xt.data):J.isCompressedArrayTexture?I.compressedTexSubImage3D(We,Q,Ge,rt,yt,De,Oe,ze,Qt,xt.data):I.texSubImage3D(We,Q,Ge,rt,yt,De,Oe,ze,Qt,lt,xt):R.isDataTexture?I.texSubImage2D(I.TEXTURE_2D,Q,Ge,rt,De,Oe,Qt,lt,xt.data):R.isCompressedTexture?I.compressedTexSubImage2D(I.TEXTURE_2D,Q,Ge,rt,xt.width,xt.height,Qt,xt.data):I.texSubImage2D(I.TEXTURE_2D,Q,Ge,rt,De,Oe,Qt,lt,xt);I.pixelStorei(I.UNPACK_ROW_LENGTH,zn),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,ct),I.pixelStorei(I.UNPACK_SKIP_PIXELS,_n),I.pixelStorei(I.UNPACK_SKIP_ROWS,Ji),I.pixelStorei(I.UNPACK_SKIP_IMAGES,sn),Q===0&&J.generateMipmaps&&I.generateMipmap(We),ce.unbindTexture()},this.copyTextureToTexture3D=function(R,J,de=null,ue=null,Q=0){return R.isTexture!==!0&&(fo("WebGLRenderer: copyTextureToTexture3D function signature has changed."),de=arguments[0]||null,ue=arguments[1]||null,R=arguments[2],J=arguments[3],Q=arguments[4]||0),fo('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(R,J,de,ue,Q)},this.initRenderTarget=function(R){Ee.get(R).__webglFramebuffer===void 0&&L.setupRenderTarget(R)},this.initTexture=function(R){R.isCubeTexture?L.setTextureCube(R,0):R.isData3DTexture?L.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?L.setTexture2DArray(R,0):L.setTexture2D(R,0),ce.unbindTexture()},this.resetState=function(){w=0,T=0,A=null,ce.reset(),ve.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return qn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorspace=st._getDrawingBufferColorSpace(e),t.unpackColorSpace=st._getUnpackColorSpace()}}class V_ extends Dt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Bn,this.environmentIntensity=1,this.environmentRotation=new Bn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class W_{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=ql,this.updateRanges=[],this.version=0,this.uuid=Un()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let s=0,o=this.stride;s<o;s++)this.array[e+s]=t.array[i+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Un()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(t,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Un()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const jt=new D;class Nr{constructor(e,t,i,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=i,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,i=this.data.count;t<i;t++)jt.fromBufferAttribute(this,t),jt.applyMatrix4(e),this.setXYZ(t,jt.x,jt.y,jt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)jt.fromBufferAttribute(this,t),jt.applyNormalMatrix(e),this.setXYZ(t,jt.x,jt.y,jt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)jt.fromBufferAttribute(this,t),jt.transformDirection(e),this.setXYZ(t,jt.x,jt.y,jt.z);return this}getComponent(e,t){let i=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(i=En(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=dt(i,this.array)),this.data.array[e*this.data.stride+this.offset+t]=i,this}setX(e,t){return this.normalized&&(t=dt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=dt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=dt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=dt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=En(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=En(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=En(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=En(t,this.array)),t}setXY(e,t,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=dt(t,this.array),i=dt(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this}setXYZ(e,t,i,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=dt(t,this.array),i=dt(i,this.array),s=dt(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=s,this}setXYZW(e,t,i,s,o){return e=e*this.data.stride+this.offset,this.normalized&&(t=dt(t,this.array),i=dt(i,this.array),s=dt(s,this.array),o=dt(o,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=s,this.data.array[e+3]=o,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const s=i*this.data.stride+this.offset;for(let o=0;o<this.itemSize;o++)t.push(this.data.array[s+o])}return new mn(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Nr(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const s=i*this.data.stride+this.offset;for(let o=0;o<this.itemSize;o++)t.push(this.data.array[s+o])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class Mc extends Yi{static get type(){return"SpriteMaterial"}constructor(e){super(),this.isSpriteMaterial=!0,this.color=new $e(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let fs;const no=new D,ps=new D,ms=new D,gs=new Re,io=new Re,fu=new _t,cr=new D,so=new D,hr=new D,Fh=new Re,Pa=new Re,zh=new Re;class pu extends Dt{constructor(e=new Mc){if(super(),this.isSprite=!0,this.type="Sprite",fs===void 0){fs=new Ht;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new W_(t,5);fs.setIndex([0,1,2,0,2,3]),fs.setAttribute("position",new Nr(i,3,0,!1)),fs.setAttribute("uv",new Nr(i,2,3,!1))}this.geometry=fs,this.material=e,this.center=new Re(.5,.5)}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),ps.setFromMatrixScale(this.matrixWorld),fu.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),ms.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&ps.multiplyScalar(-ms.z);const i=this.material.rotation;let s,o;i!==0&&(o=Math.cos(i),s=Math.sin(i));const r=this.center;dr(cr.set(-.5,-.5,0),ms,r,ps,s,o),dr(so.set(.5,-.5,0),ms,r,ps,s,o),dr(hr.set(.5,.5,0),ms,r,ps,s,o),Fh.set(0,0),Pa.set(1,0),zh.set(1,1);let a=e.ray.intersectTriangle(cr,so,hr,!1,no);if(a===null&&(dr(so.set(-.5,.5,0),ms,r,ps,s,o),Pa.set(0,1),a=e.ray.intersectTriangle(cr,hr,so,!1,no),a===null))return;const l=e.ray.origin.distanceTo(no);l<e.near||l>e.far||t.push({distance:l,point:no.clone(),uv:fn.getInterpolation(no,cr,so,hr,Fh,Pa,zh,new Re),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function dr(n,e,t,i,s,o){gs.subVectors(n,t).addScalar(.5).multiply(i),s!==void 0?(io.x=o*gs.x-s*gs.y,io.y=s*gs.x+o*gs.y):io.copy(gs),n.copy(e),n.x+=io.x,n.y+=io.y,n.applyMatrix4(fu)}class mu extends Yi{static get type(){return"LineBasicMaterial"}constructor(e){super(),this.isLineBasicMaterial=!0,this.color=new $e(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Ur=new D,kr=new D,Hh=new _t,oo=new jr,ur=new qr,La=new D,Gh=new D;class $_ extends Dt{constructor(e=new Ht,t=new mu){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[0];for(let s=1,o=t.count;s<o;s++)Ur.fromBufferAttribute(t,s-1),kr.fromBufferAttribute(t,s),i[s]=i[s-1],i[s]+=Ur.distanceTo(kr);e.setAttribute("lineDistance",new at(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const i=this.geometry,s=this.matrixWorld,o=e.params.Line.threshold,r=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),ur.copy(i.boundingSphere),ur.applyMatrix4(s),ur.radius+=o,e.ray.intersectsSphere(ur)===!1)return;Hh.copy(s).invert(),oo.copy(e.ray).applyMatrix4(Hh);const a=o/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,h=i.index,u=i.attributes.position;if(h!==null){const f=Math.max(0,r.start),v=Math.min(h.count,r.start+r.count);for(let _=f,m=v-1;_<m;_+=c){const p=h.getX(_),x=h.getX(_+1),y=fr(this,e,oo,l,p,x);y&&t.push(y)}if(this.isLineLoop){const _=h.getX(v-1),m=h.getX(f),p=fr(this,e,oo,l,_,m);p&&t.push(p)}}else{const f=Math.max(0,r.start),v=Math.min(u.count,r.start+r.count);for(let _=f,m=v-1;_<m;_+=c){const p=fr(this,e,oo,l,_,_+1);p&&t.push(p)}if(this.isLineLoop){const _=fr(this,e,oo,l,v-1,f);_&&t.push(_)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,r=s.length;o<r;o++){const a=s[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=o}}}}}function fr(n,e,t,i,s,o){const r=n.geometry.attributes.position;if(Ur.fromBufferAttribute(r,s),kr.fromBufferAttribute(r,o),t.distanceSqToSegment(Ur,kr,La,Gh)>i)return;La.applyMatrix4(n.matrixWorld);const l=e.ray.origin.distanceTo(La);if(!(l<e.near||l>e.far))return{distance:l,point:Gh.clone().applyMatrix4(n.matrixWorld),index:s,face:null,faceIndex:null,barycoord:null,object:n}}class kt extends Zt{constructor(e,t,i,s,o,r,a,l,c){super(e,t,i,s,o,r,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Fn{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){const i=this.getUtoTmapping(e);return this.getPoint(i,t)}getPoints(e=5){const t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return t}getSpacedPoints(e=5){const t=[];for(let i=0;i<=e;i++)t.push(this.getPointAt(i/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let i,s=this.getPoint(0),o=0;t.push(0);for(let r=1;r<=e;r++)i=this.getPoint(r/e),o+=i.distanceTo(s),t.push(o),s=i;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){const i=this.getLengths();let s=0;const o=i.length;let r;t?r=t:r=e*i[o-1];let a=0,l=o-1,c;for(;a<=l;)if(s=Math.floor(a+(l-a)/2),c=i[s]-r,c<0)a=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,i[s]===r)return s/(o-1);const h=i[s],u=i[s+1]-h,f=(r-h)/u;return(s+f)/(o-1)}getTangent(e,t){let s=e-1e-4,o=e+1e-4;s<0&&(s=0),o>1&&(o=1);const r=this.getPoint(s),a=this.getPoint(o),l=t||(r.isVector2?new Re:new D);return l.copy(a).sub(r).normalize(),l}getTangentAt(e,t){const i=this.getUtoTmapping(e);return this.getTangent(i,t)}computeFrenetFrames(e,t){const i=new D,s=[],o=[],r=[],a=new D,l=new _t;for(let f=0;f<=e;f++){const v=f/e;s[f]=this.getTangentAt(v,new D)}o[0]=new D,r[0]=new D;let c=Number.MAX_VALUE;const h=Math.abs(s[0].x),d=Math.abs(s[0].y),u=Math.abs(s[0].z);h<=c&&(c=h,i.set(1,0,0)),d<=c&&(c=d,i.set(0,1,0)),u<=c&&i.set(0,0,1),a.crossVectors(s[0],i).normalize(),o[0].crossVectors(s[0],a),r[0].crossVectors(s[0],o[0]);for(let f=1;f<=e;f++){if(o[f]=o[f-1].clone(),r[f]=r[f-1].clone(),a.crossVectors(s[f-1],s[f]),a.length()>Number.EPSILON){a.normalize();const v=Math.acos(Rt(s[f-1].dot(s[f]),-1,1));o[f].applyMatrix4(l.makeRotationAxis(a,v))}r[f].crossVectors(s[f],o[f])}if(t===!0){let f=Math.acos(Rt(o[0].dot(o[e]),-1,1));f/=e,s[0].dot(a.crossVectors(o[0],o[e]))>0&&(f=-f);for(let v=1;v<=e;v++)o[v].applyMatrix4(l.makeRotationAxis(s[v],f*v)),r[v].crossVectors(s[v],o[v])}return{tangents:s,normals:o,binormals:r}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class bc extends Fn{constructor(e=0,t=0,i=1,s=1,o=0,r=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=i,this.yRadius=s,this.aStartAngle=o,this.aEndAngle=r,this.aClockwise=a,this.aRotation=l}getPoint(e,t=new Re){const i=t,s=Math.PI*2;let o=this.aEndAngle-this.aStartAngle;const r=Math.abs(o)<Number.EPSILON;for(;o<0;)o+=s;for(;o>s;)o-=s;o<Number.EPSILON&&(r?o=0:o=s),this.aClockwise===!0&&!r&&(o===s?o=-s:o=o-s);const a=this.aStartAngle+e*o;let l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const h=Math.cos(this.aRotation),d=Math.sin(this.aRotation),u=l-this.aX,f=c-this.aY;l=u*h-f*d+this.aX,c=u*d+f*h+this.aY}return i.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class X_ extends bc{constructor(e,t,i,s,o,r){super(e,t,i,i,s,o,r),this.isArcCurve=!0,this.type="ArcCurve"}}function Sc(){let n=0,e=0,t=0,i=0;function s(o,r,a,l){n=o,e=a,t=-3*o+3*r-2*a-l,i=2*o-2*r+a+l}return{initCatmullRom:function(o,r,a,l,c){s(r,a,c*(a-o),c*(l-r))},initNonuniformCatmullRom:function(o,r,a,l,c,h,d){let u=(r-o)/c-(a-o)/(c+h)+(a-r)/h,f=(a-r)/h-(l-r)/(h+d)+(l-a)/d;u*=h,f*=h,s(r,a,u,f)},calc:function(o){const r=o*o,a=r*o;return n+e*o+t*r+i*a}}}const pr=new D,Ia=new Sc,Da=new Sc,Na=new Sc;class Y_ extends Fn{constructor(e=[],t=!1,i="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=i,this.tension=s}getPoint(e,t=new D){const i=t,s=this.points,o=s.length,r=(o-(this.closed?0:1))*e;let a=Math.floor(r),l=r-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/o)+1)*o:l===0&&a===o-1&&(a=o-2,l=1);let c,h;this.closed||a>0?c=s[(a-1)%o]:(pr.subVectors(s[0],s[1]).add(s[0]),c=pr);const d=s[a%o],u=s[(a+1)%o];if(this.closed||a+2<o?h=s[(a+2)%o]:(pr.subVectors(s[o-1],s[o-2]).add(s[o-1]),h=pr),this.curveType==="centripetal"||this.curveType==="chordal"){const f=this.curveType==="chordal"?.5:.25;let v=Math.pow(c.distanceToSquared(d),f),_=Math.pow(d.distanceToSquared(u),f),m=Math.pow(u.distanceToSquared(h),f);_<1e-4&&(_=1),v<1e-4&&(v=_),m<1e-4&&(m=_),Ia.initNonuniformCatmullRom(c.x,d.x,u.x,h.x,v,_,m),Da.initNonuniformCatmullRom(c.y,d.y,u.y,h.y,v,_,m),Na.initNonuniformCatmullRom(c.z,d.z,u.z,h.z,v,_,m)}else this.curveType==="catmullrom"&&(Ia.initCatmullRom(c.x,d.x,u.x,h.x,this.tension),Da.initCatmullRom(c.y,d.y,u.y,h.y,this.tension),Na.initCatmullRom(c.z,d.z,u.z,h.z,this.tension));return i.set(Ia.calc(l),Da.calc(l),Na.calc(l)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){const s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const s=e.points[t];this.points.push(new D().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function Vh(n,e,t,i,s){const o=(i-e)*.5,r=(s-t)*.5,a=n*n,l=n*a;return(2*t-2*i+o+r)*l+(-3*t+3*i-2*o-r)*a+o*n+t}function q_(n,e){const t=1-n;return t*t*e}function j_(n,e){return 2*(1-n)*n*e}function K_(n,e){return n*n*e}function xo(n,e,t,i){return q_(n,e)+j_(n,t)+K_(n,i)}function Z_(n,e){const t=1-n;return t*t*t*e}function J_(n,e){const t=1-n;return 3*t*t*n*e}function Q_(n,e){return 3*(1-n)*n*n*e}function ey(n,e){return n*n*n*e}function Mo(n,e,t,i,s){return Z_(n,e)+J_(n,t)+Q_(n,i)+ey(n,s)}class gu extends Fn{constructor(e=new Re,t=new Re,i=new Re,s=new Re){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=i,this.v3=s}getPoint(e,t=new Re){const i=t,s=this.v0,o=this.v1,r=this.v2,a=this.v3;return i.set(Mo(e,s.x,o.x,r.x,a.x),Mo(e,s.y,o.y,r.y,a.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class ty extends Fn{constructor(e=new D,t=new D,i=new D,s=new D){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=i,this.v3=s}getPoint(e,t=new D){const i=t,s=this.v0,o=this.v1,r=this.v2,a=this.v3;return i.set(Mo(e,s.x,o.x,r.x,a.x),Mo(e,s.y,o.y,r.y,a.y),Mo(e,s.z,o.z,r.z,a.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class vu extends Fn{constructor(e=new Re,t=new Re){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new Re){const i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new Re){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class ny extends Fn{constructor(e=new D,t=new D){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new D){const i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new D){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class _u extends Fn{constructor(e=new Re,t=new Re,i=new Re){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new Re){const i=t,s=this.v0,o=this.v1,r=this.v2;return i.set(xo(e,s.x,o.x,r.x),xo(e,s.y,o.y,r.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class yu extends Fn{constructor(e=new D,t=new D,i=new D){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new D){const i=t,s=this.v0,o=this.v1,r=this.v2;return i.set(xo(e,s.x,o.x,r.x),xo(e,s.y,o.y,r.y),xo(e,s.z,o.z,r.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class xu extends Fn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new Re){const i=t,s=this.points,o=(s.length-1)*e,r=Math.floor(o),a=o-r,l=s[r===0?r:r-1],c=s[r],h=s[r>s.length-2?s.length-1:r+1],d=s[r>s.length-3?s.length-1:r+2];return i.set(Vh(a,l.x,c.x,h.x,d.x),Vh(a,l.y,c.y,h.y,d.y)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const s=e.points[t];this.points.push(s.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){const s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const s=e.points[t];this.points.push(new Re().fromArray(s))}return this}}var Kl=Object.freeze({__proto__:null,ArcCurve:X_,CatmullRomCurve3:Y_,CubicBezierCurve:gu,CubicBezierCurve3:ty,EllipseCurve:bc,LineCurve:vu,LineCurve3:ny,QuadraticBezierCurve:_u,QuadraticBezierCurve3:yu,SplineCurve:xu});class iy extends Fn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){const i=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Kl[i](t,e))}return this}getPoint(e,t){const i=e*this.getLength(),s=this.getCurveLengths();let o=0;for(;o<s.length;){if(s[o]>=i){const r=s[o]-i,a=this.curves[o],l=a.getLength(),c=l===0?0:1-r/l;return a.getPointAt(c,t)}o++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let i=0,s=this.curves.length;i<s;i++)t+=this.curves[i].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let i;for(let s=0,o=this.curves;s<o.length;s++){const r=o[s],a=r.isEllipseCurve?e*2:r.isLineCurve||r.isLineCurve3?1:r.isSplineCurve?e*r.points.length:e,l=r.getPoints(a);for(let c=0;c<l.length;c++){const h=l[c];i&&i.equals(h)||(t.push(h),i=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){const s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,i=this.curves.length;t<i;t++){const s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){const s=e.curves[t];this.curves.push(new Kl[s.type]().fromJSON(s))}return this}}class Br extends iy{constructor(e){super(),this.type="Path",this.currentPoint=new Re,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,i=e.length;t<i;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const i=new vu(this.currentPoint.clone(),new Re(e,t));return this.curves.push(i),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,i,s){const o=new _u(this.currentPoint.clone(),new Re(e,t),new Re(i,s));return this.curves.push(o),this.currentPoint.set(i,s),this}bezierCurveTo(e,t,i,s,o,r){const a=new gu(this.currentPoint.clone(),new Re(e,t),new Re(i,s),new Re(o,r));return this.curves.push(a),this.currentPoint.set(o,r),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),i=new xu(t);return this.curves.push(i),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,i,s,o,r){const a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+a,t+l,i,s,o,r),this}absarc(e,t,i,s,o,r){return this.absellipse(e,t,i,i,s,o,r),this}ellipse(e,t,i,s,o,r,a,l){const c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+c,t+h,i,s,o,r,a,l),this}absellipse(e,t,i,s,o,r,a,l){const c=new bc(e,t,i,s,o,r,a,l);if(this.curves.length>0){const d=c.getPoint(0);d.equals(this.currentPoint)||this.lineTo(d.x,d.y)}this.curves.push(c);const h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class Ec extends Ht{constructor(e=[new Re(0,-.5),new Re(.5,0),new Re(0,.5)],t=12,i=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:i,phiLength:s},t=Math.floor(t),s=Rt(s,0,Math.PI*2);const o=[],r=[],a=[],l=[],c=[],h=1/t,d=new D,u=new Re,f=new D,v=new D,_=new D;let m=0,p=0;for(let x=0;x<=e.length-1;x++)switch(x){case 0:m=e[x+1].x-e[x].x,p=e[x+1].y-e[x].y,f.x=p*1,f.y=-m,f.z=p*0,_.copy(f),f.normalize(),l.push(f.x,f.y,f.z);break;case e.length-1:l.push(_.x,_.y,_.z);break;default:m=e[x+1].x-e[x].x,p=e[x+1].y-e[x].y,f.x=p*1,f.y=-m,f.z=p*0,v.copy(f),f.x+=_.x,f.y+=_.y,f.z+=_.z,f.normalize(),l.push(f.x,f.y,f.z),_.copy(v)}for(let x=0;x<=t;x++){const y=i+x*h*s,g=Math.sin(y),b=Math.cos(y);for(let w=0;w<=e.length-1;w++){d.x=e[w].x*g,d.y=e[w].y,d.z=e[w].x*b,r.push(d.x,d.y,d.z),u.x=x/t,u.y=w/(e.length-1),a.push(u.x,u.y);const T=l[3*w+0]*g,A=l[3*w+1],S=l[3*w+0]*b;c.push(T,A,S)}}for(let x=0;x<t;x++)for(let y=0;y<e.length-1;y++){const g=y+x*e.length,b=g,w=g+e.length,T=g+e.length+1,A=g+1;o.push(b,w,A),o.push(T,A,w)}this.setIndex(o),this.setAttribute("position",new at(r,3)),this.setAttribute("uv",new at(a,2)),this.setAttribute("normal",new at(c,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ec(e.points,e.segments,e.phiStart,e.phiLength)}}class wn extends Ec{constructor(e=1,t=1,i=4,s=8){const o=new Br;o.absarc(0,-t/2,e,Math.PI*1.5,0),o.absarc(0,t/2,e,0,Math.PI*.5),super(o.getPoints(i),s),this.type="CapsuleGeometry",this.parameters={radius:e,length:t,capSegments:i,radialSegments:s}}static fromJSON(e){return new wn(e.radius,e.length,e.capSegments,e.radialSegments)}}class Gs extends Ht{constructor(e=1,t=32,i=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:i,thetaLength:s},t=Math.max(3,t);const o=[],r=[],a=[],l=[],c=new D,h=new Re;r.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let d=0,u=3;d<=t;d++,u+=3){const f=i+d/t*s;c.x=e*Math.cos(f),c.y=e*Math.sin(f),r.push(c.x,c.y,c.z),a.push(0,0,1),h.x=(r[u]/e+1)/2,h.y=(r[u+1]/e+1)/2,l.push(h.x,h.y)}for(let d=1;d<=t;d++)o.push(d,d+1,0);this.setIndex(o),this.setAttribute("position",new at(r,3)),this.setAttribute("normal",new at(a,3)),this.setAttribute("uv",new at(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Gs(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class je extends Ht{constructor(e=1,t=1,i=1,s=32,o=1,r=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:s,heightSegments:o,openEnded:r,thetaStart:a,thetaLength:l};const c=this;s=Math.floor(s),o=Math.floor(o);const h=[],d=[],u=[],f=[];let v=0;const _=[],m=i/2;let p=0;x(),r===!1&&(e>0&&y(!0),t>0&&y(!1)),this.setIndex(h),this.setAttribute("position",new at(d,3)),this.setAttribute("normal",new at(u,3)),this.setAttribute("uv",new at(f,2));function x(){const g=new D,b=new D;let w=0;const T=(t-e)/i;for(let A=0;A<=o;A++){const S=[],M=A/o,C=M*(t-e)+e;for(let P=0;P<=s;P++){const F=P/s,O=F*l+a,G=Math.sin(O),$=Math.cos(O);b.x=C*G,b.y=-M*i+m,b.z=C*$,d.push(b.x,b.y,b.z),g.set(G,T,$).normalize(),u.push(g.x,g.y,g.z),f.push(F,1-M),S.push(v++)}_.push(S)}for(let A=0;A<s;A++)for(let S=0;S<o;S++){const M=_[S][A],C=_[S+1][A],P=_[S+1][A+1],F=_[S][A+1];(e>0||S!==0)&&(h.push(M,C,F),w+=3),(t>0||S!==o-1)&&(h.push(C,P,F),w+=3)}c.addGroup(p,w,0),p+=w}function y(g){const b=v,w=new Re,T=new D;let A=0;const S=g===!0?e:t,M=g===!0?1:-1;for(let P=1;P<=s;P++)d.push(0,m*M,0),u.push(0,M,0),f.push(.5,.5),v++;const C=v;for(let P=0;P<=s;P++){const O=P/s*l+a,G=Math.cos(O),$=Math.sin(O);T.x=S*$,T.y=m*M,T.z=S*G,d.push(T.x,T.y,T.z),u.push(0,M,0),w.x=G*.5+.5,w.y=$*.5*M+.5,f.push(w.x,w.y),v++}for(let P=0;P<s;P++){const F=b+P,O=C+P;g===!0?h.push(O,O+1,F):h.push(O+1,O,F),A+=3}c.addGroup(p,A,g===!0?1:2),p+=A}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new je(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class wc extends je{constructor(e=1,t=1,i=32,s=1,o=!1,r=0,a=Math.PI*2){super(0,e,t,i,s,o,r,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:i,heightSegments:s,openEnded:o,thetaStart:r,thetaLength:a}}static fromJSON(e){return new wc(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Tc extends Ht{constructor(e=[],t=[],i=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:i,detail:s};const o=[],r=[];a(s),c(i),h(),this.setAttribute("position",new at(o,3)),this.setAttribute("normal",new at(o.slice(),3)),this.setAttribute("uv",new at(r,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(x){const y=new D,g=new D,b=new D;for(let w=0;w<t.length;w+=3)f(t[w+0],y),f(t[w+1],g),f(t[w+2],b),l(y,g,b,x)}function l(x,y,g,b){const w=b+1,T=[];for(let A=0;A<=w;A++){T[A]=[];const S=x.clone().lerp(g,A/w),M=y.clone().lerp(g,A/w),C=w-A;for(let P=0;P<=C;P++)P===0&&A===w?T[A][P]=S:T[A][P]=S.clone().lerp(M,P/C)}for(let A=0;A<w;A++)for(let S=0;S<2*(w-A)-1;S++){const M=Math.floor(S/2);S%2===0?(u(T[A][M+1]),u(T[A+1][M]),u(T[A][M])):(u(T[A][M+1]),u(T[A+1][M+1]),u(T[A+1][M]))}}function c(x){const y=new D;for(let g=0;g<o.length;g+=3)y.x=o[g+0],y.y=o[g+1],y.z=o[g+2],y.normalize().multiplyScalar(x),o[g+0]=y.x,o[g+1]=y.y,o[g+2]=y.z}function h(){const x=new D;for(let y=0;y<o.length;y+=3){x.x=o[y+0],x.y=o[y+1],x.z=o[y+2];const g=m(x)/2/Math.PI+.5,b=p(x)/Math.PI+.5;r.push(g,1-b)}v(),d()}function d(){for(let x=0;x<r.length;x+=6){const y=r[x+0],g=r[x+2],b=r[x+4],w=Math.max(y,g,b),T=Math.min(y,g,b);w>.9&&T<.1&&(y<.2&&(r[x+0]+=1),g<.2&&(r[x+2]+=1),b<.2&&(r[x+4]+=1))}}function u(x){o.push(x.x,x.y,x.z)}function f(x,y){const g=x*3;y.x=e[g+0],y.y=e[g+1],y.z=e[g+2]}function v(){const x=new D,y=new D,g=new D,b=new D,w=new Re,T=new Re,A=new Re;for(let S=0,M=0;S<o.length;S+=9,M+=6){x.set(o[S+0],o[S+1],o[S+2]),y.set(o[S+3],o[S+4],o[S+5]),g.set(o[S+6],o[S+7],o[S+8]),w.set(r[M+0],r[M+1]),T.set(r[M+2],r[M+3]),A.set(r[M+4],r[M+5]),b.copy(x).add(y).add(g).divideScalar(3);const C=m(b);_(w,M+0,x,C),_(T,M+2,y,C),_(A,M+4,g,C)}}function _(x,y,g,b){b<0&&x.x===1&&(r[y]=x.x-1),g.x===0&&g.z===0&&(r[y]=b/2/Math.PI+.5)}function m(x){return Math.atan2(x.z,-x.x)}function p(x){return Math.atan2(-x.y,Math.sqrt(x.x*x.x+x.z*x.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Tc(e.vertices,e.indices,e.radius,e.details)}}class Mu extends Br{constructor(e){super(e),this.uuid=Un(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let i=0,s=this.holes.length;i<s;i++)t[i]=this.holes[i].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){const s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,i=this.holes.length;t<i;t++){const s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){const s=e.holes[t];this.holes.push(new Br().fromJSON(s))}return this}}const sy={triangulate:function(n,e,t=2){const i=e&&e.length,s=i?e[0]*t:n.length;let o=bu(n,0,s,t,!0);const r=[];if(!o||o.next===o.prev)return r;let a,l,c,h,d,u,f;if(i&&(o=cy(n,e,o,t)),n.length>80*t){a=c=n[0],l=h=n[1];for(let v=t;v<s;v+=t)d=n[v],u=n[v+1],d<a&&(a=d),u<l&&(l=u),d>c&&(c=d),u>h&&(h=u);f=Math.max(c-a,h-l),f=f!==0?32767/f:0}return To(o,r,t,a,l,f,0),r}};function bu(n,e,t,i,s){let o,r;if(s===xy(n,e,t,i)>0)for(o=e;o<t;o+=i)r=Wh(o,n[o],n[o+1],r);else for(o=t-i;o>=e;o-=i)r=Wh(o,n[o],n[o+1],r);return r&&Zr(r,r.next)&&(Co(r),r=r.next),r}function Gi(n,e){if(!n)return n;e||(e=n);let t=n,i;do if(i=!1,!t.steiner&&(Zr(t,t.next)||Et(t.prev,t,t.next)===0)){if(Co(t),t=e=t.prev,t===t.next)break;i=!0}else t=t.next;while(i||t!==e);return e}function To(n,e,t,i,s,o,r){if(!n)return;!r&&o&&py(n,i,s,o);let a=n,l,c;for(;n.prev!==n.next;){if(l=n.prev,c=n.next,o?ry(n,i,s,o):oy(n)){e.push(l.i/t|0),e.push(n.i/t|0),e.push(c.i/t|0),Co(n),n=c.next,a=c.next;continue}if(n=c,n===a){r?r===1?(n=ay(Gi(n),e,t),To(n,e,t,i,s,o,2)):r===2&&ly(n,e,t,i,s,o):To(Gi(n),e,t,i,s,o,1);break}}}function oy(n){const e=n.prev,t=n,i=n.next;if(Et(e,t,i)>=0)return!1;const s=e.x,o=t.x,r=i.x,a=e.y,l=t.y,c=i.y,h=s<o?s<r?s:r:o<r?o:r,d=a<l?a<c?a:c:l<c?l:c,u=s>o?s>r?s:r:o>r?o:r,f=a>l?a>c?a:c:l>c?l:c;let v=i.next;for(;v!==e;){if(v.x>=h&&v.x<=u&&v.y>=d&&v.y<=f&&Ms(s,a,o,l,r,c,v.x,v.y)&&Et(v.prev,v,v.next)>=0)return!1;v=v.next}return!0}function ry(n,e,t,i){const s=n.prev,o=n,r=n.next;if(Et(s,o,r)>=0)return!1;const a=s.x,l=o.x,c=r.x,h=s.y,d=o.y,u=r.y,f=a<l?a<c?a:c:l<c?l:c,v=h<d?h<u?h:u:d<u?d:u,_=a>l?a>c?a:c:l>c?l:c,m=h>d?h>u?h:u:d>u?d:u,p=Zl(f,v,e,t,i),x=Zl(_,m,e,t,i);let y=n.prevZ,g=n.nextZ;for(;y&&y.z>=p&&g&&g.z<=x;){if(y.x>=f&&y.x<=_&&y.y>=v&&y.y<=m&&y!==s&&y!==r&&Ms(a,h,l,d,c,u,y.x,y.y)&&Et(y.prev,y,y.next)>=0||(y=y.prevZ,g.x>=f&&g.x<=_&&g.y>=v&&g.y<=m&&g!==s&&g!==r&&Ms(a,h,l,d,c,u,g.x,g.y)&&Et(g.prev,g,g.next)>=0))return!1;g=g.nextZ}for(;y&&y.z>=p;){if(y.x>=f&&y.x<=_&&y.y>=v&&y.y<=m&&y!==s&&y!==r&&Ms(a,h,l,d,c,u,y.x,y.y)&&Et(y.prev,y,y.next)>=0)return!1;y=y.prevZ}for(;g&&g.z<=x;){if(g.x>=f&&g.x<=_&&g.y>=v&&g.y<=m&&g!==s&&g!==r&&Ms(a,h,l,d,c,u,g.x,g.y)&&Et(g.prev,g,g.next)>=0)return!1;g=g.nextZ}return!0}function ay(n,e,t){let i=n;do{const s=i.prev,o=i.next.next;!Zr(s,o)&&Su(s,i,i.next,o)&&Ao(s,o)&&Ao(o,s)&&(e.push(s.i/t|0),e.push(i.i/t|0),e.push(o.i/t|0),Co(i),Co(i.next),i=n=o),i=i.next}while(i!==n);return Gi(i)}function ly(n,e,t,i,s,o){let r=n;do{let a=r.next.next;for(;a!==r.prev;){if(r.i!==a.i&&vy(r,a)){let l=Eu(r,a);r=Gi(r,r.next),l=Gi(l,l.next),To(r,e,t,i,s,o,0),To(l,e,t,i,s,o,0);return}a=a.next}r=r.next}while(r!==n)}function cy(n,e,t,i){const s=[];let o,r,a,l,c;for(o=0,r=e.length;o<r;o++)a=e[o]*i,l=o<r-1?e[o+1]*i:n.length,c=bu(n,a,l,i,!1),c===c.next&&(c.steiner=!0),s.push(gy(c));for(s.sort(hy),o=0;o<s.length;o++)t=dy(s[o],t);return t}function hy(n,e){return n.x-e.x}function dy(n,e){const t=uy(n,e);if(!t)return e;const i=Eu(t,n);return Gi(i,i.next),Gi(t,t.next)}function uy(n,e){let t=e,i=-1/0,s;const o=n.x,r=n.y;do{if(r<=t.y&&r>=t.next.y&&t.next.y!==t.y){const u=t.x+(r-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(u<=o&&u>i&&(i=u,s=t.x<t.next.x?t:t.next,u===o))return s}t=t.next}while(t!==e);if(!s)return null;const a=s,l=s.x,c=s.y;let h=1/0,d;t=s;do o>=t.x&&t.x>=l&&o!==t.x&&Ms(r<c?o:i,r,l,c,r<c?i:o,r,t.x,t.y)&&(d=Math.abs(r-t.y)/(o-t.x),Ao(t,n)&&(d<h||d===h&&(t.x>s.x||t.x===s.x&&fy(s,t)))&&(s=t,h=d)),t=t.next;while(t!==a);return s}function fy(n,e){return Et(n.prev,n,e.prev)<0&&Et(e.next,n,n.next)<0}function py(n,e,t,i){let s=n;do s.z===0&&(s.z=Zl(s.x,s.y,e,t,i)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==n);s.prevZ.nextZ=null,s.prevZ=null,my(s)}function my(n){let e,t,i,s,o,r,a,l,c=1;do{for(t=n,n=null,o=null,r=0;t;){for(r++,i=t,a=0,e=0;e<c&&(a++,i=i.nextZ,!!i);e++);for(l=c;a>0||l>0&&i;)a!==0&&(l===0||!i||t.z<=i.z)?(s=t,t=t.nextZ,a--):(s=i,i=i.nextZ,l--),o?o.nextZ=s:n=s,s.prevZ=o,o=s;t=i}o.nextZ=null,c*=2}while(r>1);return n}function Zl(n,e,t,i,s){return n=(n-t)*s|0,e=(e-i)*s|0,n=(n|n<<8)&16711935,n=(n|n<<4)&252645135,n=(n|n<<2)&858993459,n=(n|n<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,n|e<<1}function gy(n){let e=n,t=n;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==n);return t}function Ms(n,e,t,i,s,o,r,a){return(s-r)*(e-a)>=(n-r)*(o-a)&&(n-r)*(i-a)>=(t-r)*(e-a)&&(t-r)*(o-a)>=(s-r)*(i-a)}function vy(n,e){return n.next.i!==e.i&&n.prev.i!==e.i&&!_y(n,e)&&(Ao(n,e)&&Ao(e,n)&&yy(n,e)&&(Et(n.prev,n,e.prev)||Et(n,e.prev,e))||Zr(n,e)&&Et(n.prev,n,n.next)>0&&Et(e.prev,e,e.next)>0)}function Et(n,e,t){return(e.y-n.y)*(t.x-e.x)-(e.x-n.x)*(t.y-e.y)}function Zr(n,e){return n.x===e.x&&n.y===e.y}function Su(n,e,t,i){const s=gr(Et(n,e,t)),o=gr(Et(n,e,i)),r=gr(Et(t,i,n)),a=gr(Et(t,i,e));return!!(s!==o&&r!==a||s===0&&mr(n,t,e)||o===0&&mr(n,i,e)||r===0&&mr(t,n,i)||a===0&&mr(t,e,i))}function mr(n,e,t){return e.x<=Math.max(n.x,t.x)&&e.x>=Math.min(n.x,t.x)&&e.y<=Math.max(n.y,t.y)&&e.y>=Math.min(n.y,t.y)}function gr(n){return n>0?1:n<0?-1:0}function _y(n,e){let t=n;do{if(t.i!==n.i&&t.next.i!==n.i&&t.i!==e.i&&t.next.i!==e.i&&Su(t,t.next,n,e))return!0;t=t.next}while(t!==n);return!1}function Ao(n,e){return Et(n.prev,n,n.next)<0?Et(n,e,n.next)>=0&&Et(n,n.prev,e)>=0:Et(n,e,n.prev)<0||Et(n,n.next,e)<0}function yy(n,e){let t=n,i=!1;const s=(n.x+e.x)/2,o=(n.y+e.y)/2;do t.y>o!=t.next.y>o&&t.next.y!==t.y&&s<(t.next.x-t.x)*(o-t.y)/(t.next.y-t.y)+t.x&&(i=!i),t=t.next;while(t!==n);return i}function Eu(n,e){const t=new Jl(n.i,n.x,n.y),i=new Jl(e.i,e.x,e.y),s=n.next,o=e.prev;return n.next=e,e.prev=n,t.next=s,s.prev=t,i.next=t,t.prev=i,o.next=i,i.prev=o,i}function Wh(n,e,t,i){const s=new Jl(n,e,t);return i?(s.next=i.next,s.prev=i,i.next.prev=s,i.next=s):(s.prev=s,s.next=s),s}function Co(n){n.next.prev=n.prev,n.prev.next=n.next,n.prevZ&&(n.prevZ.nextZ=n.nextZ),n.nextZ&&(n.nextZ.prevZ=n.prevZ)}function Jl(n,e,t){this.i=n,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function xy(n,e,t,i){let s=0;for(let o=e,r=t-i;o<t;o+=i)s+=(n[r]-n[o])*(n[o+1]+n[r+1]),r=o;return s}class bo{static area(e){const t=e.length;let i=0;for(let s=t-1,o=0;o<t;s=o++)i+=e[s].x*e[o].y-e[o].x*e[s].y;return i*.5}static isClockWise(e){return bo.area(e)<0}static triangulateShape(e,t){const i=[],s=[],o=[];$h(e),Xh(i,e);let r=e.length;t.forEach($h);for(let l=0;l<t.length;l++)s.push(r),r+=t[l].length,Xh(i,t[l]);const a=sy.triangulate(i,s);for(let l=0;l<a.length;l+=3)o.push(a.slice(l,l+3));return o}}function $h(n){const e=n.length;e>2&&n[e-1].equals(n[0])&&n.pop()}function Xh(n,e){for(let t=0;t<e.length;t++)n.push(e[t].x),n.push(e[t].y)}class Ac extends Ht{constructor(e=new Mu([new Re(.5,.5),new Re(-.5,.5),new Re(-.5,-.5),new Re(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];const i=this,s=[],o=[];for(let a=0,l=e.length;a<l;a++){const c=e[a];r(c)}this.setAttribute("position",new at(s,3)),this.setAttribute("uv",new at(o,2)),this.computeVertexNormals();function r(a){const l=[],c=t.curveSegments!==void 0?t.curveSegments:12,h=t.steps!==void 0?t.steps:1,d=t.depth!==void 0?t.depth:1;let u=t.bevelEnabled!==void 0?t.bevelEnabled:!0,f=t.bevelThickness!==void 0?t.bevelThickness:.2,v=t.bevelSize!==void 0?t.bevelSize:f-.1,_=t.bevelOffset!==void 0?t.bevelOffset:0,m=t.bevelSegments!==void 0?t.bevelSegments:3;const p=t.extrudePath,x=t.UVGenerator!==void 0?t.UVGenerator:My;let y,g=!1,b,w,T,A;p&&(y=p.getSpacedPoints(h),g=!0,u=!1,b=p.computeFrenetFrames(h,!1),w=new D,T=new D,A=new D),u||(m=0,f=0,v=0,_=0);const S=a.extractPoints(c);let M=S.shape;const C=S.holes;if(!bo.isClockWise(M)){M=M.reverse();for(let he=0,ge=C.length;he<ge;he++){const I=C[he];bo.isClockWise(I)&&(C[he]=I.reverse())}}const F=bo.triangulateShape(M,C),O=M;for(let he=0,ge=C.length;he<ge;he++){const I=C[he];M=M.concat(I)}function G(he,ge,I){return ge||console.error("THREE.ExtrudeGeometry: vec does not exist"),he.clone().addScaledVector(ge,I)}const $=M.length,te=F.length;function K(he,ge,I){let Me,z,_e;const ce=he.x-ge.x,Le=he.y-ge.y,Ee=I.x-he.x,L=I.y-he.y,E=ce*ce+Le*Le,V=ce*L-Le*Ee;if(Math.abs(V)>Number.EPSILON){const re=Math.sqrt(E),q=Math.sqrt(Ee*Ee+L*L),U=ge.x-Le/re,se=ge.y+ce/re,oe=I.x-L/q,le=I.y+Ee/q,we=((oe-U)*L-(le-se)*Ee)/(ce*L-Le*Ee);Me=U+ce*we-he.x,z=se+Le*we-he.y;const ee=Me*Me+z*z;if(ee<=2)return new Re(Me,z);_e=Math.sqrt(ee/2)}else{let re=!1;ce>Number.EPSILON?Ee>Number.EPSILON&&(re=!0):ce<-Number.EPSILON?Ee<-Number.EPSILON&&(re=!0):Math.sign(Le)===Math.sign(L)&&(re=!0),re?(Me=-Le,z=ce,_e=Math.sqrt(E)):(Me=ce,z=Le,_e=Math.sqrt(E/2))}return new Re(Me/_e,z/_e)}const X=[];for(let he=0,ge=O.length,I=ge-1,Me=he+1;he<ge;he++,I++,Me++)I===ge&&(I=0),Me===ge&&(Me=0),X[he]=K(O[he],O[I],O[Me]);const Y=[];let k,Z=X.concat();for(let he=0,ge=C.length;he<ge;he++){const I=C[he];k=[];for(let Me=0,z=I.length,_e=z-1,ce=Me+1;Me<z;Me++,_e++,ce++)_e===z&&(_e=0),ce===z&&(ce=0),k[Me]=K(I[Me],I[_e],I[ce]);Y.push(k),Z=Z.concat(k)}for(let he=0;he<m;he++){const ge=he/m,I=f*Math.cos(ge*Math.PI/2),Me=v*Math.sin(ge*Math.PI/2)+_;for(let z=0,_e=O.length;z<_e;z++){const ce=G(O[z],X[z],Me);ie(ce.x,ce.y,-I)}for(let z=0,_e=C.length;z<_e;z++){const ce=C[z];k=Y[z];for(let Le=0,Ee=ce.length;Le<Ee;Le++){const L=G(ce[Le],k[Le],Me);ie(L.x,L.y,-I)}}}const W=v+_;for(let he=0;he<$;he++){const ge=u?G(M[he],Z[he],W):M[he];g?(T.copy(b.normals[0]).multiplyScalar(ge.x),w.copy(b.binormals[0]).multiplyScalar(ge.y),A.copy(y[0]).add(T).add(w),ie(A.x,A.y,A.z)):ie(ge.x,ge.y,0)}for(let he=1;he<=h;he++)for(let ge=0;ge<$;ge++){const I=u?G(M[ge],Z[ge],W):M[ge];g?(T.copy(b.normals[he]).multiplyScalar(I.x),w.copy(b.binormals[he]).multiplyScalar(I.y),A.copy(y[he]).add(T).add(w),ie(A.x,A.y,A.z)):ie(I.x,I.y,d/h*he)}for(let he=m-1;he>=0;he--){const ge=he/m,I=f*Math.cos(ge*Math.PI/2),Me=v*Math.sin(ge*Math.PI/2)+_;for(let z=0,_e=O.length;z<_e;z++){const ce=G(O[z],X[z],Me);ie(ce.x,ce.y,d+I)}for(let z=0,_e=C.length;z<_e;z++){const ce=C[z];k=Y[z];for(let Le=0,Ee=ce.length;Le<Ee;Le++){const L=G(ce[Le],k[Le],Me);g?ie(L.x,L.y+y[h-1].y,y[h-1].x+I):ie(L.x,L.y,d+I)}}}N(),j();function N(){const he=s.length/3;if(u){let ge=0,I=$*ge;for(let Me=0;Me<te;Me++){const z=F[Me];ye(z[2]+I,z[1]+I,z[0]+I)}ge=h+m*2,I=$*ge;for(let Me=0;Me<te;Me++){const z=F[Me];ye(z[0]+I,z[1]+I,z[2]+I)}}else{for(let ge=0;ge<te;ge++){const I=F[ge];ye(I[2],I[1],I[0])}for(let ge=0;ge<te;ge++){const I=F[ge];ye(I[0]+$*h,I[1]+$*h,I[2]+$*h)}}i.addGroup(he,s.length/3-he,0)}function j(){const he=s.length/3;let ge=0;ae(O,ge),ge+=O.length;for(let I=0,Me=C.length;I<Me;I++){const z=C[I];ae(z,ge),ge+=z.length}i.addGroup(he,s.length/3-he,1)}function ae(he,ge){let I=he.length;for(;--I>=0;){const Me=I;let z=I-1;z<0&&(z=he.length-1);for(let _e=0,ce=h+m*2;_e<ce;_e++){const Le=$*_e,Ee=$*(_e+1),L=ge+Me+Le,E=ge+z+Le,V=ge+z+Ee,re=ge+Me+Ee;fe(L,E,V,re)}}}function ie(he,ge,I){l.push(he),l.push(ge),l.push(I)}function ye(he,ge,I){Ie(he),Ie(ge),Ie(I);const Me=s.length/3,z=x.generateTopUV(i,s,Me-3,Me-2,Me-1);ke(z[0]),ke(z[1]),ke(z[2])}function fe(he,ge,I,Me){Ie(he),Ie(ge),Ie(Me),Ie(ge),Ie(I),Ie(Me);const z=s.length/3,_e=x.generateSideWallUV(i,s,z-6,z-3,z-2,z-1);ke(_e[0]),ke(_e[1]),ke(_e[3]),ke(_e[1]),ke(_e[2]),ke(_e[3])}function Ie(he){s.push(l[he*3+0]),s.push(l[he*3+1]),s.push(l[he*3+2])}function ke(he){o.push(he.x),o.push(he.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes,i=this.parameters.options;return by(t,i,e)}static fromJSON(e,t){const i=[];for(let o=0,r=e.shapes.length;o<r;o++){const a=t[e.shapes[o]];i.push(a)}const s=e.options.extrudePath;return s!==void 0&&(e.options.extrudePath=new Kl[s.type]().fromJSON(s)),new Ac(i,e.options)}}const My={generateTopUV:function(n,e,t,i,s){const o=e[t*3],r=e[t*3+1],a=e[i*3],l=e[i*3+1],c=e[s*3],h=e[s*3+1];return[new Re(o,r),new Re(a,l),new Re(c,h)]},generateSideWallUV:function(n,e,t,i,s,o){const r=e[t*3],a=e[t*3+1],l=e[t*3+2],c=e[i*3],h=e[i*3+1],d=e[i*3+2],u=e[s*3],f=e[s*3+1],v=e[s*3+2],_=e[o*3],m=e[o*3+1],p=e[o*3+2];return Math.abs(a-h)<Math.abs(r-c)?[new Re(r,1-l),new Re(c,1-d),new Re(u,1-v),new Re(_,1-p)]:[new Re(a,1-l),new Re(h,1-d),new Re(f,1-v),new Re(m,1-p)]}};function by(n,e,t){if(t.shapes=[],Array.isArray(n))for(let i=0,s=n.length;i<s;i++){const o=n[i];t.shapes.push(o.uuid)}else t.shapes.push(n.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}class Vi extends Tc{constructor(e=1,t=0){const i=(1+Math.sqrt(5))/2,s=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],o=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,o,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Vi(e.radius,e.detail)}}class Do extends Ht{constructor(e=.5,t=1,i=32,s=1,o=0,r=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:i,phiSegments:s,thetaStart:o,thetaLength:r},i=Math.max(3,i),s=Math.max(1,s);const a=[],l=[],c=[],h=[];let d=e;const u=(t-e)/s,f=new D,v=new Re;for(let _=0;_<=s;_++){for(let m=0;m<=i;m++){const p=o+m/i*r;f.x=d*Math.cos(p),f.y=d*Math.sin(p),l.push(f.x,f.y,f.z),c.push(0,0,1),v.x=(f.x/t+1)/2,v.y=(f.y/t+1)/2,h.push(v.x,v.y)}d+=u}for(let _=0;_<s;_++){const m=_*(i+1);for(let p=0;p<i;p++){const x=p+m,y=x,g=x+i+1,b=x+i+2,w=x+1;a.push(y,g,w),a.push(g,b,w)}}this.setIndex(a),this.setAttribute("position",new at(l,3)),this.setAttribute("normal",new at(c,3)),this.setAttribute("uv",new at(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Do(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class nn extends Ht{constructor(e=1,t=32,i=16,s=0,o=Math.PI*2,r=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:s,phiLength:o,thetaStart:r,thetaLength:a},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));const l=Math.min(r+a,Math.PI);let c=0;const h=[],d=new D,u=new D,f=[],v=[],_=[],m=[];for(let p=0;p<=i;p++){const x=[],y=p/i;let g=0;p===0&&r===0?g=.5/t:p===i&&l===Math.PI&&(g=-.5/t);for(let b=0;b<=t;b++){const w=b/t;d.x=-e*Math.cos(s+w*o)*Math.sin(r+y*a),d.y=e*Math.cos(r+y*a),d.z=e*Math.sin(s+w*o)*Math.sin(r+y*a),v.push(d.x,d.y,d.z),u.copy(d).normalize(),_.push(u.x,u.y,u.z),m.push(w+g,1-y),x.push(c++)}h.push(x)}for(let p=0;p<i;p++)for(let x=0;x<t;x++){const y=h[p][x+1],g=h[p][x],b=h[p+1][x],w=h[p+1][x+1];(p!==0||r>0)&&f.push(y,g,w),(p!==i-1||l<Math.PI)&&f.push(g,b,w)}this.setIndex(f),this.setAttribute("position",new at(v,3)),this.setAttribute("normal",new at(_,3)),this.setAttribute("uv",new at(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new nn(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Kn extends Ht{constructor(e=1,t=.4,i=12,s=48,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:i,tubularSegments:s,arc:o},i=Math.floor(i),s=Math.floor(s);const r=[],a=[],l=[],c=[],h=new D,d=new D,u=new D;for(let f=0;f<=i;f++)for(let v=0;v<=s;v++){const _=v/s*o,m=f/i*Math.PI*2;d.x=(e+t*Math.cos(m))*Math.cos(_),d.y=(e+t*Math.cos(m))*Math.sin(_),d.z=t*Math.sin(m),a.push(d.x,d.y,d.z),h.x=e*Math.cos(_),h.y=e*Math.sin(_),u.subVectors(d,h).normalize(),l.push(u.x,u.y,u.z),c.push(v/s),c.push(f/i)}for(let f=1;f<=i;f++)for(let v=1;v<=s;v++){const _=(s+1)*f+v-1,m=(s+1)*(f-1)+v-1,p=(s+1)*(f-1)+v,x=(s+1)*f+v;r.push(_,m,x),r.push(m,p,x)}this.setIndex(r),this.setAttribute("position",new at(a,3)),this.setAttribute("normal",new at(l,3)),this.setAttribute("uv",new at(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Kn(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class Ye extends Yi{static get type(){return"MeshStandardMaterial"}constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new $e(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new $e(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=jd,this.normalScale=new Re(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Bn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Ql extends Ye{static get type(){return"MeshPhysicalMaterial"}constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Re(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Rt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new $e(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new $e(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new $e(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class Cc extends Dt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new $e(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}class Sy extends Cc{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Dt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new $e(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const Ua=new _t,Yh=new D,qh=new D;class wu{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Re(512,512),this.map=null,this.mapPass=null,this.matrix=new _t,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new yc,this._frameExtents=new Re(1,1),this._viewportCount=1,this._viewports=[new gt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;Yh.setFromMatrixPosition(e.matrixWorld),t.position.copy(Yh),qh.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(qh),t.updateMatrixWorld(),Ua.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ua),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Ua)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const jh=new _t,ro=new D,ka=new D;class Ey extends wu{constructor(){super(new an(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Re(4,2),this._viewportCount=6,this._viewports=[new gt(2,1,1,1),new gt(0,1,1,1),new gt(3,1,1,1),new gt(1,1,1,1),new gt(3,0,1,1),new gt(1,0,1,1)],this._cubeDirections=[new D(1,0,0),new D(-1,0,0),new D(0,0,1),new D(0,0,-1),new D(0,1,0),new D(0,-1,0)],this._cubeUps=[new D(0,1,0),new D(0,1,0),new D(0,1,0),new D(0,1,0),new D(0,0,1),new D(0,0,-1)]}updateMatrices(e,t=0){const i=this.camera,s=this.matrix,o=e.distance||i.far;o!==i.far&&(i.far=o,i.updateProjectionMatrix()),ro.setFromMatrixPosition(e.matrixWorld),i.position.copy(ro),ka.copy(i.position),ka.add(this._cubeDirections[t]),i.up.copy(this._cubeUps[t]),i.lookAt(ka),i.updateMatrixWorld(),s.makeTranslation(-ro.x,-ro.y,-ro.z),jh.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(jh)}}class Xs extends Cc{constructor(e,t,i=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=s,this.shadow=new Ey}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class wy extends wu{constructor(){super(new au(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Ty extends Cc{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Dt.DEFAULT_UP),this.updateMatrix(),this.target=new Dt,this.shadow=new wy}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class Ay{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Kh(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=Kh();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function Kh(){return performance.now()}const Zh=new _t;class Cy{constructor(e,t,i=0,s=1/0){this.ray=new jr(e,t),this.near=i,this.far=s,this.camera=null,this.layers=new _c,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Zh.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Zh),this}intersectObject(e,t=!0,i=[]){return ec(e,this,i,t),i.sort(Jh),i}intersectObjects(e,t=!0,i=[]){for(let s=0,o=e.length;s<o;s++)ec(e[s],this,i,t);return i.sort(Jh),i}}function Jh(n,e){return n.distance-e.distance}function ec(n,e,t,i){let s=!0;if(n.layers.test(e.layers)&&n.raycast(e,t)===!1&&(s=!1),s===!0&&i===!0){const o=n.children;for(let r=0,a=o.length;r<a;r++)ec(o[r],e,t,!0)}}class Qh{constructor(e=1,t=0,i=0){return this.radius=e,this.phi=t,this.theta=i,this}set(e,t,i){return this.radius=e,this.phi=t,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,i){return this.radius=Math.sqrt(e*e+t*t+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(Rt(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class Ry extends Xi{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(){}disconnect(){}dispose(){}update(){}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:hc}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=hc);const ed={type:"change"},Rc={type:"start"},Tu={type:"end"},vr=new jr,td=new hi,Py=Math.cos(70*qe.DEG2RAD),Lt=new D,en=2*Math.PI,pt={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Ba=1e-6;class Ly extends Ry{constructor(e,t=null){super(e,t),this.state=pt.NONE,this.enabled=!0,this.target=new D,this.cursor=new D,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:ws.ROTATE,MIDDLE:ws.DOLLY,RIGHT:ws.PAN},this.touches={ONE:ys.ROTATE,TWO:ys.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new D,this._lastQuaternion=new Hi,this._lastTargetPosition=new D,this._quat=new Hi().setFromUnitVectors(e.up,new D(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Qh,this._sphericalDelta=new Qh,this._scale=1,this._panOffset=new D,this._rotateStart=new Re,this._rotateEnd=new Re,this._rotateDelta=new Re,this._panStart=new Re,this._panEnd=new Re,this._panDelta=new Re,this._dollyStart=new Re,this._dollyEnd=new Re,this._dollyDelta=new Re,this._dollyDirection=new D,this._mouse=new Re,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=Dy.bind(this),this._onPointerDown=Iy.bind(this),this._onPointerUp=Ny.bind(this),this._onContextMenu=Hy.bind(this),this._onMouseWheel=By.bind(this),this._onKeyDown=Oy.bind(this),this._onTouchStart=Fy.bind(this),this._onTouchMove=zy.bind(this),this._onMouseDown=Uy.bind(this),this._onMouseMove=ky.bind(this),this._interceptControlDown=Gy.bind(this),this._interceptControlUp=Vy.bind(this),this.domElement!==null&&this.connect(),this.update()}connect(){this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(ed),this.update(),this.state=pt.NONE}update(e=null){const t=this.object.position;Lt.copy(t).sub(this.target),Lt.applyQuaternion(this._quat),this._spherical.setFromVector3(Lt),this.autoRotate&&this.state===pt.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let i=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(i)&&isFinite(s)&&(i<-Math.PI?i+=en:i>Math.PI&&(i-=en),s<-Math.PI?s+=en:s>Math.PI&&(s-=en),i<=s?this._spherical.theta=Math.max(i,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(i+s)/2?Math.max(i,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let o=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const r=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),o=r!=this._spherical.radius}if(Lt.setFromSpherical(this._spherical),Lt.applyQuaternion(this._quatInverse),t.copy(this.target).add(Lt),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let r=null;if(this.object.isPerspectiveCamera){const a=Lt.length();r=this._clampDistance(a*this._scale);const l=a-r;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),o=!!l}else if(this.object.isOrthographicCamera){const a=new D(this._mouse.x,this._mouse.y,0);a.unproject(this.object);const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),o=l!==this.object.zoom;const c=new D(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(a),this.object.updateMatrixWorld(),r=Lt.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;r!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(r).add(this.object.position):(vr.origin.copy(this.object.position),vr.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(vr.direction))<Py?this.object.lookAt(this.target):(td.setFromNormalAndCoplanarPoint(this.object.up,this.target),vr.intersectPlane(td,this.target))))}else if(this.object.isOrthographicCamera){const r=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),r!==this.object.zoom&&(this.object.updateProjectionMatrix(),o=!0)}return this._scale=1,this._performCursorZoom=!1,o||this._lastPosition.distanceToSquared(this.object.position)>Ba||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Ba||this._lastTargetPosition.distanceToSquared(this.target)>Ba?(this.dispatchEvent(ed),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?en/60*this.autoRotateSpeed*e:en/60/60*this.autoRotateSpeed}_getZoomScale(e){const t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){Lt.setFromMatrixColumn(t,0),Lt.multiplyScalar(-e),this._panOffset.add(Lt)}_panUp(e,t){this.screenSpacePanning===!0?Lt.setFromMatrixColumn(t,1):(Lt.setFromMatrixColumn(t,0),Lt.crossVectors(this.object.up,Lt)),Lt.multiplyScalar(e),this._panOffset.add(Lt)}_pan(e,t){const i=this.domElement;if(this.object.isPerspectiveCamera){const s=this.object.position;Lt.copy(s).sub(this.target);let o=Lt.length();o*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*o/i.clientHeight,this.object.matrix),this._panUp(2*t*o/i.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/i.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/i.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const i=this.domElement.getBoundingClientRect(),s=e-i.left,o=t-i.top,r=i.width,a=i.height;this._mouse.x=s/r*2-1,this._mouse.y=-(o/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(en*this._rotateDelta.x/t.clientHeight),this._rotateUp(en*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateUp(en*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateUp(-en*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateLeft(en*this.rotateSpeed/this.domElement.clientHeight):this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateLeft(-en*this.rotateSpeed/this.domElement.clientHeight):this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._rotateStart.set(i,s)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panStart.set(i,s)}}_handleTouchStartDolly(e){const t=this._getSecondPointerPosition(e),i=e.pageX-t.x,s=e.pageY-t.y,o=Math.sqrt(i*i+s*s);this._dollyStart.set(0,o)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const i=this._getSecondPointerPosition(e),s=.5*(e.pageX+i.x),o=.5*(e.pageY+i.y);this._rotateEnd.set(s,o)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(en*this._rotateDelta.x/t.clientHeight),this._rotateUp(en*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panEnd.set(i,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const t=this._getSecondPointerPosition(e),i=e.pageX-t.x,s=e.pageY-t.y,o=Math.sqrt(i*i+s*s);this._dollyEnd.set(0,o),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const r=(e.pageX+t.x)*.5,a=(e.pageY+t.y)*.5;this._updateZoomParameters(r,a)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new Re,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){const t=e.deltaMode,i={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:i.deltaY*=16;break;case 2:i.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(i.deltaY*=10),i}}function Iy(n){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(n.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(n)&&(this._addPointer(n),n.pointerType==="touch"?this._onTouchStart(n):this._onMouseDown(n)))}function Dy(n){this.enabled!==!1&&(n.pointerType==="touch"?this._onTouchMove(n):this._onMouseMove(n))}function Ny(n){switch(this._removePointer(n),this._pointers.length){case 0:this.domElement.releasePointerCapture(n.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Tu),this.state=pt.NONE;break;case 1:const e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function Uy(n){let e;switch(n.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case ws.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(n),this.state=pt.DOLLY;break;case ws.ROTATE:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=pt.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=pt.ROTATE}break;case ws.PAN:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=pt.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=pt.PAN}break;default:this.state=pt.NONE}this.state!==pt.NONE&&this.dispatchEvent(Rc)}function ky(n){switch(this.state){case pt.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(n);break;case pt.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(n);break;case pt.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(n);break}}function By(n){this.enabled===!1||this.enableZoom===!1||this.state!==pt.NONE||(n.preventDefault(),this.dispatchEvent(Rc),this._handleMouseWheel(this._customWheelEvent(n)),this.dispatchEvent(Tu))}function Oy(n){this.enabled===!1||this.enablePan===!1||this._handleKeyDown(n)}function Fy(n){switch(this._trackPointer(n),this._pointers.length){case 1:switch(this.touches.ONE){case ys.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(n),this.state=pt.TOUCH_ROTATE;break;case ys.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(n),this.state=pt.TOUCH_PAN;break;default:this.state=pt.NONE}break;case 2:switch(this.touches.TWO){case ys.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(n),this.state=pt.TOUCH_DOLLY_PAN;break;case ys.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(n),this.state=pt.TOUCH_DOLLY_ROTATE;break;default:this.state=pt.NONE}break;default:this.state=pt.NONE}this.state!==pt.NONE&&this.dispatchEvent(Rc)}function zy(n){switch(this._trackPointer(n),this.state){case pt.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(n),this.update();break;case pt.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(n),this.update();break;case pt.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(n),this.update();break;case pt.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(n),this.update();break;default:this.state=pt.NONE}}function Hy(n){this.enabled!==!1&&n.preventDefault()}function Gy(n){n.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function Vy(n){n.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function xi(n,e){const t=document.createElement("canvas");return t.width=n,t.height=e,t}function Pc(n){let e=n%2147483647;return e<=0&&(e+=2147483646),()=>(e=e*16807%2147483647,(e-1)/2147483646)}function nd(){const e=xi(1024,1024),t=xi(1024,1024),i=e.getContext("2d"),s=t.getContext("2d"),o=Pc(4207);i.fillStyle="#eceff3",i.fillRect(0,0,1024,1024),s.fillStyle="#808080",s.fillRect(0,0,1024,1024);for(let h=0;h<200;h++){const d=o()*1024,u=o()*1024,f=35+o()*115,v=Math.floor(228+o()*20),_=.04+o()*.04;i.fillStyle=`rgba(${v}, ${v+2}, ${v+4}, ${_})`,i.beginPath(),i.arc(d,u,f,0,Math.PI*2),i.fill()}for(let h=0;h<4200;h++){const d=o()*1024,u=o()*1024,f=1+o()*1.8,v=o()>.5?246:214;i.fillStyle=`rgba(${v}, ${v+1}, ${v+2}, 0.055)`,i.fillRect(d,u,f,f);const _=o()>.5?142:112;s.fillStyle=`rgba(${_}, ${_}, ${_}, 0.08)`,s.fillRect(d,u,f,f)}const r=4,a=2;i.strokeStyle="rgba(182, 190, 200, 0.72)",i.lineWidth=2.5,s.strokeStyle="rgb(44, 44, 44)",s.lineWidth=3;for(let h=1;h<r;h++){const d=1024/r*h;i.beginPath(),i.moveTo(d,0),i.lineTo(d,1024),i.stroke(),s.beginPath(),s.moveTo(d,0),s.lineTo(d,1024),s.stroke()}for(let h=1;h<a;h++){const d=1024/a*h;i.beginPath(),i.moveTo(0,d),i.lineTo(1024,d),i.stroke(),s.beginPath(),s.moveTo(0,d),s.lineTo(1024,d),s.stroke()}const l=new kt(e);l.colorSpace=mt,l.wrapS=cn,l.wrapT=cn,l.anisotropy=8;const c=new kt(t);return c.wrapS=cn,c.wrapT=cn,c.anisotropy=4,{map:l,bumpMap:c}}function Wy(){const e=xi(1024,1024),t=xi(1024,1024),i=e.getContext("2d"),s=t.getContext("2d"),o=Pc(9131);i.fillStyle="#e8edf2",i.fillRect(0,0,1024,1024),s.fillStyle="#686868",s.fillRect(0,0,1024,1024);const r=4,a=1024/r;for(let d=0;d<r;d++)for(let u=0;u<r;u++){const v=232+Math.floor((o()-.5)*6);i.fillStyle=`rgb(${v}, ${v+3}, ${v+6})`,i.fillRect(u*a,d*a,a,a);const _=96+Math.floor(o()*20);s.fillStyle=`rgb(${_}, ${_}, ${_})`,s.fillRect(u*a,d*a,a,a)}const l=["#cbd5e1","#d6ccc2","#94a3b8","#a7c4b5","#e2d9ce"];for(let d=0;d<1600;d++){const u=o()*1024,f=o()*1024,v=1.2+o()*3.2;i.fillStyle=l[Math.floor(o()*l.length)],i.globalAlpha=.25+o()*.25,i.beginPath(),i.arc(u,f,v,0,Math.PI*2),i.fill()}i.globalAlpha=1,i.strokeStyle="rgba(186, 195, 206, 0.72)",i.lineWidth=2.5,s.strokeStyle="rgb(190, 190, 190)",s.lineWidth=3;for(let d=0;d<=r;d++){const u=d*a;i.beginPath(),i.moveTo(u,0),i.lineTo(u,1024),i.stroke(),i.beginPath(),i.moveTo(0,u),i.lineTo(1024,u),i.stroke(),s.beginPath(),s.moveTo(u,0),s.lineTo(u,1024),s.stroke(),s.beginPath(),s.moveTo(0,u),s.lineTo(1024,u),s.stroke()}const c=new kt(e);c.colorSpace=mt,c.wrapS=cn,c.wrapT=cn,c.repeat.set(4.5,3.75),c.anisotropy=8;const h=new kt(t);return h.wrapS=cn,h.wrapT=cn,h.repeat.set(4.5,3.75),{map:c,roughnessMap:h}}function $y(){const e=xi(512,512),t=e.getContext("2d"),i=Pc(5519);t.fillStyle="#d4a373",t.fillRect(0,0,512,512);for(let o=0;o<240;o++){const r=i()*512,a=1+i()*3.5,l=i()>.5?"#c6925e":"#e0b487";t.fillStyle=l,t.globalAlpha=.14+i()*.16,t.fillRect(r,0,a,512)}t.globalAlpha=1;const s=new kt(e);return s.colorSpace=mt,s.wrapS=cn,s.wrapT=cn,s.anisotropy=4,s}function Xy(){const e=xi(512,512),t=xi(512,512),i=e.getContext("2d"),s=t.getContext("2d"),o=10,r=512/o;for(let c=0;c<o;c++){const h=c*r,d=i.createLinearGradient(0,h,0,h+r);d.addColorStop(0,"#181d25"),d.addColorStop(.18,"#28303d"),d.addColorStop(.5,"#313a49"),d.addColorStop(.82,"#242b37"),d.addColorStop(1,"#141920"),i.fillStyle=d,i.fillRect(0,h,512,r);const u=s.createLinearGradient(0,h,0,h+r);u.addColorStop(0,"#262626"),u.addColorStop(.25,"#c8c8c8"),u.addColorStop(.5,"#f2f2f2"),u.addColorStop(.75,"#c8c8c8"),u.addColorStop(1,"#262626"),s.fillStyle=u,s.fillRect(0,h,512,r)}const a=new kt(e);a.colorSpace=mt,a.anisotropy=4;const l=new kt(t);return l.anisotropy=4,{map:a,bumpMap:l}}function Yy(){const e=xi(512,512),t=e.getContext("2d");t.clearRect(0,0,512,512);const i=t.createLinearGradient(0,0,512,512);i.addColorStop(0,"rgba(255, 255, 255, 0.22)"),i.addColorStop(.18,"rgba(224, 247, 255, 0.04)"),i.addColorStop(.45,"rgba(255, 255, 255, 0.16)"),i.addColorStop(.65,"rgba(224, 247, 255, 0.02)"),i.addColorStop(1,"rgba(255, 255, 255, 0.14)"),t.fillStyle=i,t.fillRect(0,0,512,512);const s=Math.round(512*.52),o=Math.round(512*.12),r=t.createLinearGradient(0,s,0,s+o);r.addColorStop(0,"rgba(255, 255, 255, 0.0)"),r.addColorStop(.2,"rgba(241, 248, 255, 0.34)"),r.addColorStop(.5,"rgba(255, 255, 255, 0.44)"),r.addColorStop(.8,"rgba(241, 248, 255, 0.34)"),r.addColorStop(1,"rgba(255, 255, 255, 0.0)"),t.fillStyle=r,t.fillRect(0,s,512,o),t.fillStyle="rgba(255, 255, 255, 0.52)",t.fillRect(0,s+Math.round(o*.22),512,2),t.fillRect(0,s+Math.round(o*.5),512,3),t.fillRect(0,s+Math.round(o*.78),512,2);const a=t.createLinearGradient(0,0,26,0);a.addColorStop(0,"rgba(224, 247, 255, 0.45)"),a.addColorStop(1,"rgba(224, 247, 255, 0)"),t.fillStyle=a,t.fillRect(0,0,26,512);const l=t.createLinearGradient(486,0,512,0);l.addColorStop(0,"rgba(224, 247, 255, 0)"),l.addColorStop(1,"rgba(224, 247, 255, 0.45)"),t.fillStyle=l,t.fillRect(486,0,26,512);const c=new kt(e);return c.colorSpace=mt,c.anisotropy=4,c}function qy(){const n=nd();n.map.repeat.set(3,1.5),n.bumpMap.repeat.set(3,1.5);const e=nd();e.map.repeat.set(2.5,1.5),e.bumpMap.repeat.set(2.5,1.5);const t=Wy(),i=$y(),s=Xy(),o=Yy();return{concreteWallBack:new Ye({map:n.map,bumpMap:n.bumpMap,bumpScale:.008,roughness:.82,metalness:.02}),concreteWallSide:new Ye({map:e.map,bumpMap:e.bumpMap,bumpScale:.008,roughness:.82,metalness:.02}),floor:new Ye({map:t.map,roughnessMap:t.roughnessMap,roughness:.42,metalness:.04}),oakWood:new Ye({map:i,roughness:.56,metalness:.04}),chrome:new Ye({color:15133682,metalness:.9,roughness:.15}),deskTop:new Ye({color:15988474,roughness:.38,metalness:.05}),deskEdge:new Ye({color:13935475,roughness:.52,metalness:.05}),coveSlate:new Ye({color:2831942,roughness:.55,metalness:.18}),matteBlack:new Ye({color:1975600,roughness:.62,metalness:.14}),darkMetal:new Ye({color:3884116,roughness:.4,metalness:.68}),leather:new Ye({map:s.map,bumpMap:s.bumpMap,bumpScale:.022,roughness:.52,metalness:.06}),luminousCeiling:new Ye({color:16777215,emissive:16383231,emissiveIntensity:1.15,roughness:.22,metalness:0}),downlightGlow:new Ye({color:16777215,emissive:15531775,emissiveIntensity:1.5,roughness:.2}),ceramicWhite:new Ye({color:16317180,roughness:.28,metalness:.04}),soilDark:new Ye({color:4140577,roughness:.92,metalness:0}),leafDark:new Ye({color:1409085,roughness:.68,metalness:.02}),leafMid:new Ye({color:2278750,roughness:.62,metalness:.02}),leafLight:new Ye({color:4906624,roughness:.58,metalness:.02}),champagneGold:new Ye({color:14268538,metalness:.88,roughness:.22}),luxuryGlass:new Ql({color:15661567,transparent:!0,opacity:.2,roughness:.03,metalness:.08,clearcoat:1,clearcoatRoughness:.04,ior:1.52,reflectivity:1,specularIntensity:1,depthWrite:!1,side:ln}),luxuryGlassEdge:new Ql({color:12248829,emissive:8246268,emissiveIntensity:.16,transparent:!0,opacity:.48,roughness:.06,metalness:.1,depthWrite:!1}),luxuryGlassSheen:new ht({map:o,transparent:!0,opacity:.42,depthWrite:!1,side:ln})}}function Au(n){let e=n%2147483647;return e<=0&&(e+=2147483646),()=>(e=e*16807%2147483647,(e-1)/2147483646)}function jy(n,e=1,t=101){const i=new Be,s=Au(t),o=.52*e,r=.28*e,a=.21*e,l=new B(new je(r,a,o,20),n.ceramicWhite);l.position.y=o/2,l.castShadow=!0,l.receiveShadow=!0,i.add(l);const c=new B(new Kn(r*.96,.018*e,8,24),n.oakWood);c.rotation.x=Math.PI/2,c.position.y=o-.02*e,i.add(c);const h=new B(new Gs(r*.9,16),n.soilDark);h.rotation.x=-Math.PI/2,h.position.y=o-.03*e,i.add(h);const d=n.oakWood,u=new B(new je(.032*e,.048*e,.95*e,8),d);u.position.y=o+.42*e,u.castShadow=!0,i.add(u);const f=[n.leafDark,n.leafMid,n.leafLight],v=[{angle:0,tilt:.35,h:.55,yOff:.72},{angle:2.1,tilt:.42,h:.62,yOff:.85},{angle:4.3,tilt:.38,h:.52,yOff:.95}];for(const _ of v){const m=new Be;m.position.y=o+_.yOff*e,m.rotation.y=_.angle;const p=new B(new je(.016*e,.026*e,_.h*e,7),d);p.position.set(0,_.h*e/2,.08*e),p.rotation.x=_.tilt,m.add(p);for(let x=0;x<5;x++){const y=(.14+s()*.1)*e,g=new B(new Vi(y,1),f[x%f.length]);g.position.set((s()-.5)*.24*e,(_.h+(s()-.3)*.25)*e,(.18+(s()-.5)*.22)*e),g.scale.set(1.15,.82,1.15),g.castShadow=!0,m.add(g)}i.add(m)}for(let _=0;_<5;_++){const m=new B(new Vi((.18+s()*.08)*e,1),f[(_+1)%f.length]);m.position.set((s()-.5)*.22*e,o+(1.32+s()*.24)*e,(s()-.5)*.22*e),m.scale.set(1.2,.8,1.2),m.castShadow=!0,i.add(m)}return i}function Ky(n,e,t,i=303){const s=new Be,o=Au(i),r=new B(new pe(n,e,.04),new Ye({color:1323805,roughness:.9}));s.add(r);const a=.065,l=.085,c=new B(new pe(n+a*2,a,l),t.oakWood);c.position.y=e/2+a/2;const h=new B(new pe(n+a*2,a,l),t.oakWood);h.position.y=-e/2-a/2;const d=new B(new pe(a,e,l),t.oakWood);d.position.x=-n/2-a/2;const u=new B(new pe(a,e,l),t.oakWood);u.position.x=n/2+a/2,s.add(c,h,d,u);const f=[t.leafDark,t.leafMid,t.leafLight],v=Math.max(5,Math.round(n*4.5)),_=Math.max(6,Math.round(e*4.2)),m=new Vi(.13,1);for(let p=0;p<_;p++)for(let x=0;x<v;x++){const y=-n/2+.14+x/Math.max(1,v-1)*(n-.28)+(o()-.5)*.06,g=-e/2+.14+p/Math.max(1,_-1)*(e-.28)+(o()-.5)*.06,b=new B(m,f[Math.floor(o()*f.length)]);b.position.set(y,g,.045+o()*.035);const w=.72+o()*.55;b.scale.set(w,w*.88,.55+o()*.35),s.add(b)}return s}function id(n,e,t,i){const s=n.createLinearGradient(0,0,0,t),o=new $e("#38bdf8"),r=new $e("#bae6fd"),a=new $e("#fef9c3"),l=new $e("#091326"),c=new $e("#172554"),h=new $e("#1e3a5f"),d=o.clone().lerp(l,i),u=r.clone().lerp(c,i),f=a.clone().lerp(h,i);if(s.addColorStop(0,`#${d.getHexString()}`),s.addColorStop(.58,`#${u.getHexString()}`),s.addColorStop(1,`#${f.getHexString()}`),n.fillStyle=s,n.fillRect(0,0,e,t),i<.65){const m=(1-i/.65)*.85,p=n.createRadialGradient(e*.72,t*.32,10,e*.72,t*.32,220);p.addColorStop(0,`rgba(255, 253, 224, ${m})`),p.addColorStop(.4,`rgba(254, 240, 138, ${m*.45})`),p.addColorStop(1,"rgba(255, 255, 255, 0)"),n.fillStyle=p,n.fillRect(0,0,e,t),n.fillStyle=`rgba(255, 255, 255, ${m*.82})`;const x=[[180,115,78,28],[230,102,58,24],[520,145,92,30],[575,132,62,24],[810,95,75,26]];for(const[y,g,b,w]of x)n.beginPath(),n.ellipse(y,g,b,w,0,0,Math.PI*2),n.fill()}else{n.fillStyle="rgba(226, 232, 240, 0.75)";for(let m=0;m<45;m++){const p=m*197%(e-40)+20,x=m*89%(t*.55)+15;n.fillRect(p,x,2.5,2.5)}}const v=i>.5?"#0f172a":"#94a3b8",_=[[20,120,88],[118,175,102],[232,140,82],[328,210,115],[458,155,94],[568,230,110],[694,148,88],[796,185,116],[926,132,84]];for(const[m,p,x]of _)if(n.fillStyle=v,n.fillRect(m,t-p,x,p),i>.35){n.fillStyle=`rgba(253, 224, 71, ${(i-.35)*.8})`;for(let y=t-p+14;y<t-18;y+=20)for(let g=m+12;g<m+x-14;g+=18)(g+y)%3!==0&&n.fillRect(g,y,7,9)}}function Zy(n){const e=new Be,t=new Ye({color:1976635,roughness:.9}),i=[{xStart:-8.68,xEnd:-7.02},{xStart:7.02,xEnd:8.68}],s=4.92,o=new pe(.058,s,.042);for(const T of i){const A=T.xEnd-T.xStart,S=(T.xStart+T.xEnd)/2,M=new B(new pe(A,s,.016),t);M.position.set(S,.1+s/2,-6.985),e.add(M);for(let C=T.xStart+.06;C<=T.xEnd-.04;C+=.125){const P=new B(o,n.oakWood);P.position.set(C,.1+s/2,-6.96),P.castShadow=!0,P.receiveShadow=!0,e.add(P)}}const r=[[-8.05,0,-6.05,1.05,11],[8.05,0,-6.05,1.05,22],[-8.05,0,6.95,1.12,33],[8.05,0,6.95,1.12,44]];for(const[T,A,S,M,C]of r){const P=jy(n,M,C);P.position.set(T,A,S),e.add(P)}const a=[{x:-8.94,y:2.38,z:1.05,rotY:Math.PI/2,w:1.72,h:2.35,seed:105},{x:8.94,y:2.38,z:-.82,rotY:-Math.PI/2,w:2.05,h:2.35,seed:207},{x:8.94,y:2.38,z:4.75,rotY:-Math.PI/2,w:2.35,h:2.35,seed:309}];for(const T of a){const A=Ky(T.w,T.h,n,T.seed);A.position.set(T.x,T.y,T.z),A.rotation.y=T.rotY,e.add(A)}const l=3.5,c=3,h=document.createElement("canvas");h.width=1024,h.height=600;const d=h.getContext("2d");id(d,h.width,h.height,0);const u=new kt(h);u.colorSpace=mt;const f=new Be;f.position.set(-8.94,2.55,4.65),f.rotation.y=Math.PI/2;const v=new Ye({map:u,emissiveMap:u,emissive:new $e(16777215),emissiveIntensity:.92,roughness:.15}),_=new B(new St(l,c),v);f.add(_);const m=.08,p=new B(new pe(l+.12,.07,m),n.coveSlate);p.position.y=c/2+.03;const x=new B(new pe(l+.12,.09,m+.04),n.oakWood);x.position.y=-c/2-.04;const y=new B(new pe(.07,c,m),n.coveSlate);y.position.x=-l/2-.03;const g=new B(new pe(.07,c,m),n.coveSlate);g.position.x=l/2+.03,f.add(p,x,y,g);for(const T of[-l/6,l/6]){const A=new B(new pe(.045,c,.05),n.coveSlate);A.position.set(T,0,.02),f.add(A)}e.add(f);let b=-1;function w(T){v.emissiveIntensity=qe.lerp(.95,.52,T);const A=Math.round(T*20);A!==b&&(b=A,id(d,h.width,h.height,A/20),u.needsUpdate=!0)}return{group:e,setLightingMode:w}}function ao(n,e,t,i,s){const a=document.createElement("canvas");a.width=512,a.height=340;const l=a.getContext("2d"),c=l.createLinearGradient(0,0,512,340);c.addColorStop(0,t),c.addColorStop(1,i),l.fillStyle=c,l.fillRect(0,0,512,340),l.strokeStyle=s,l.globalAlpha=.28,l.lineWidth=3;for(let d=42;d<=140;d+=32)l.beginPath(),l.arc(512*.78,340*.42,d,0,Math.PI*2),l.stroke();l.globalAlpha=1,l.strokeStyle="rgba(255, 255, 255, 0.25)",l.lineWidth=2,l.strokeRect(18,18,476,304),l.fillStyle=s,l.fillRect(36,98,56,5),l.fillStyle="#f8fafc",l.font="bold 34px Segoe UI, sans-serif",l.fillText(n,36,152),l.fillStyle="#cbd5e1",l.font="600 18px Consolas, monospace",l.fillText(e,36,194);const h=new kt(a);return h.colorSpace=mt,h.anisotropy=4,h}function Jy(n){const e=new Be,t=new Be,i=new Ye({color:1976635,roughness:.92,metalness:.02}),s=new B(new je(1.62,1.62,.008,40),i);s.position.set(0,.004,-4.15),s.receiveShadow=!0;const o=new B(new Do(1.56,1.63,40),n.champagneGold);o.rotation.x=-Math.PI/2,o.position.set(0,.009,-4.15);const r=new B(new pe(8.6,.008,2.8),i);r.position.set(0,.004,6),r.receiveShadow=!0;const a=new B(new pe(8.64,.01,.045),n.champagneGold);a.position.set(0,.006,4.6);const l=new B(new pe(8.64,.01,.045),n.champagneGold);l.position.set(0,.006,7.4),t.add(s,o,r,a,l),e.add(t);const c=new Be,h=new Be;h.position.set(-3.6,0,6.25);const d=new B(new pe(2.46,.08,.86),n.champagneGold);d.position.y=.14,d.castShadow=!0,h.add(d);for(const W of[-1.14,1.14])for(const N of[-.36,.36]){const j=new B(new je(.025,.02,.11,10),n.champagneGold);j.position.set(W,.055,N),h.add(j)}for(let W=-1;W<=1;W++){const N=new B(new pe(.76,.22,.78),n.leather);N.position.set(W*.78,.29,-.02),N.castShadow=!0,N.receiveShadow=!0,h.add(N)}const u=new B(new pe(2.44,.56,.22),n.leather);u.position.set(0,.52,.34),u.castShadow=!0,h.add(u);for(const W of[-1.22,1.22]){const N=new B(new pe(.18,.44,.88),n.leather);N.position.set(W,.38,0),N.castShadow=!0,h.add(N)}const f=new Ye({color:959977,roughness:.75});for(const W of[-.88,.88]){const N=new B(new pe(.32,.28,.11),f);N.position.set(W,.48,.16),N.rotation.z=W<0?.14:-.14,N.rotation.x=-.18,h.add(N)}c.add(h);const v=new Be;v.position.set(-3.6,0,5.15);const _=new B(new pe(1.38,.035,.68),n.oakWood);_.position.y=.18,_.castShadow=!0;const m=new B(new pe(1.42,.022,.72),n.luxuryGlass);m.position.y=.42,m.renderOrder=2;const p=new B(new pe(1.45,.028,.75),n.champagneGold);p.position.y=.395;for(const W of[-.64,.64])for(const N of[-.3,.3]){const j=new B(new je(.02,.02,.4,10),n.champagneGold);j.position.set(W,.2,N),v.add(j)}const x=new B(new je(.055,.075,.16,14),n.ceramicWhite);x.position.set(-.28,.51,0),x.castShadow=!0;const y=new B(new Vi(.09,1),n.leafMid);y.position.set(-.28,.63,0);const g=new B(new pe(.26,.014,.19),n.matteBlack);g.position.set(.25,.44,.04),g.rotation.y=.22,v.add(_,p,m,x,y,g),c.add(v),e.add(c);const b=new Be,w=[{pos:[-4.2,2.65,7.93],rotY:Math.PI,w:1.95,h:1.25,tex:ao("MRT VISION","AI SOFTWARE FACTORY","#0f172a","#1e3a5f","#38bdf8")},{pos:[0,2.65,7.93],rotY:Math.PI,w:2.25,h:1.35,tex:ao("INNOVATE 24/7","ANDROID • WINDOWS • CLOUD","#111827","#064e3b","#10b981")},{pos:[4.2,2.65,7.93],rotY:Math.PI,w:1.95,h:1.25,tex:ao("SLA 99.98%","ENGINEERING EXCELLENCE","#1c1917","#451a03","#f59e0b")},{pos:[-8.94,3.45,-5.85],rotY:Math.PI/2,w:1.65,h:1.05,tex:ao("SHIP FAST","CI/CD • CODE SIGNING","#0f172a","#312e81","#818cf8")},{pos:[8.94,3.45,-5.65],rotY:-Math.PI/2,w:1.65,h:1.05,tex:ao("ZERO BUGS","AUTOMATED E2E QA","#042f2e","#0f172a","#2dd4bf")}];for(const W of w){const N=new Be;N.position.set(...W.pos),N.rotation.y=W.rotY;const j=new B(new pe(W.w+.09,W.h+.09,.036),n.champagneGold);j.castShadow=!0;const ae=new B(new St(W.w,W.h),new Ye({map:W.tex,roughness:.32,metalness:.06}));ae.position.z=.022,N.add(j,ae),b.add(N)}e.add(b);const T=new Be,A=new ht({color:3718648}),S=new B(new pe(15.6,.024,.03),A);S.position.set(0,5.12,-5.84);const M=new B(new pe(15.6,.024,.03),A);M.position.set(0,5.12,6.84);const C=new B(new pe(.03,.024,12.6),A);C.position.set(-7.84,5.12,.5);const P=new B(new pe(.03,.024,12.6),A);P.position.set(7.84,5.12,.5),T.add(S,M,C,P),e.add(T);const F=new Be,O=[];for(let W=0;W<2;W++){const N=new Be;N.position.set(4.65+W*1,0,6.55),N.rotation.y=Math.PI;const j=new B(new pe(.78,2.15,.84),n.matteBlack);j.position.y=1.075,j.castShadow=!0,j.receiveShadow=!0,N.add(j);const ae=new B(new pe(.7,2.02,.02),n.luxuryGlass);ae.position.set(0,1.08,.43),ae.renderOrder=2,N.add(ae);for(const ie of[-.37,.37]){const ye=new B(new pe(.025,2.12,.03),n.champagneGold);ye.position.set(ie,1.07,.425),N.add(ye)}for(let ie=0;ie<8;ie++){const ye=.28+ie*.22,fe=new B(new pe(.64,.14,.03),n.darkMetal);fe.position.set(0,ye,.415),N.add(fe);const Ie=new ht({color:ie%3===0?2278750:3718648}),ke=new B(new pe(.055,.018,.01),Ie);ke.position.set(-.24+ie%2*.08,ye,.435),N.add(ke),O.push({mat:Ie,phase:W*2.1+ie*.75})}F.add(N)}e.add(F);const G=new Be;G.position.set(1.55,0,6.55),G.rotation.y=Math.PI;const $=new B(new pe(1.85,.96,.68),n.oakWood);$.position.y=.48,$.castShadow=!0,$.receiveShadow=!0;const te=new B(new pe(1.92,.05,.74),n.ceramicWhite);te.position.y=.985,te.castShadow=!0;const K=new B(new pe(1.88,.024,.71),n.champagneGold);K.position.y=.94;const X=new B(new pe(.46,.42,.34),n.chrome);X.position.set(-.35,1.22,0),X.castShadow=!0;const Y=new B(new je(.08,.1,.34,14),n.matteBlack);Y.position.set(.18,1.18,.02),Y.castShadow=!0;for(let W=0;W<3;W++){const N=new B(new je(.036,.03,.08,12),n.ceramicWhite);N.position.set(.52+W*.11,1.05,.06),G.add(N)}G.add($,K,te,X,Y),e.add(G);function k(W={}){var N;typeof W.showCarpet=="boolean"&&(t.visible=W.showCarpet),typeof W.showLounge=="boolean"&&(c.visible=W.showLounge),typeof W.showWallArt=="boolean"&&(b.visible=W.showWallArt),typeof W.showAmbientStrips=="boolean"&&(T.visible=W.showAmbientStrips),typeof W.showServerRack=="boolean"&&(F.visible=W.showServerRack),typeof W.showCoffeeBar=="boolean"&&(G.visible=W.showCoffeeBar),W.accent&&A.color.set(W.accent),(N=W.themeCfg)!=null&&N.coveColor&&i.color.setHex(W.themeCfg.isLightHud?3359061:1976635)}function Z(W){if(F.visible)for(const N of O){const j=Math.sin(W*4.5+N.phase);N.mat.color.setHex(j>.2?2278750:j<-.55?16096779:3718648)}}return{group:e,setDecorConfig:k,update:Z}}function Qy(){const e=document.createElement("canvas");e.width=256,e.height=256;const t=e.getContext("2d"),i=256/2,s=256/2,o=256*.46;t.fillStyle="#f8fafc",t.beginPath(),t.arc(i,s,256/2,0,Math.PI*2),t.fill();const r=t.createRadialGradient(i,s,o*.78,i,s,o);r.addColorStop(0,"rgba(255,255,255,0)"),r.addColorStop(1,"rgba(15,23,42,0.08)"),t.fillStyle=r,t.beginPath(),t.arc(i,s,o,0,Math.PI*2),t.fill();for(let l=0;l<60;l++){const c=l/60*Math.PI*2,h=l%5===0,d=h?o*.8:o*.88,u=o*.94;t.strokeStyle=h?"#1e293b":"#94a3b8",t.lineWidth=h?3.5:1.5,t.beginPath(),t.moveTo(i+Math.cos(c)*d,s+Math.sin(c)*d),t.lineTo(i+Math.cos(c)*u,s+Math.sin(c)*u),t.stroke()}const a=new kt(e);return a.colorSpace=mt,a}function ex(n,e){const t=document.createElement("canvas");t.width=256,t.height=64;const i=t.getContext("2d");i.fillStyle="#1e242d",i.fillRect(0,0,256,64),i.strokeStyle="#475569",i.lineWidth=2,i.strokeRect(2,2,252,60),i.fillStyle="#e2e8f0",i.font="bold 22px Segoe UI, sans-serif",i.textAlign="center",i.textBaseline="middle",i.fillText(n,128,23),i.fillStyle="#38bdf8",i.font="600 15px Segoe UI, sans-serif",i.fillText(e,128,46);const s=new kt(t);return s.colorSpace=mt,s}function tx(n){const e=new Be,t=18,i=15,s=5.4,o=.5,r=new St(t,i),a=new B(r,n.floor);a.rotation.x=-Math.PI/2,a.position.set(0,0,o),a.receiveShadow=!0,e.add(a);const l=new B(new St(t,s),n.concreteWallBack);l.position.set(0,s/2,-7),l.receiveShadow=!0,e.add(l);const c=new B(new St(t,s),n.concreteWallBack);c.rotation.y=Math.PI,c.position.set(0,s/2,8),e.add(c);const h=new B(new St(i,s),n.concreteWallSide);h.rotation.y=Math.PI/2,h.position.set(-9,s/2,o),h.receiveShadow=!0,e.add(h);const d=new B(new St(i,s),n.concreteWallSide);d.rotation.y=-Math.PI/2,d.position.set(9,s/2,o),d.receiveShadow=!0,e.add(d);const u=.1,f=n.coveSlate,v=new B(new pe(t,u,.04),f);v.position.set(0,u/2,-6.98);const _=new B(new pe(t,u,.04),f);_.position.set(0,u/2,7.98);const m=new B(new pe(.04,u,i),f);m.position.set(-8.98,u/2,o);const p=new B(new pe(.04,u,i),f);p.position.set(8.98,u/2,o),e.add(v,_,m,p);const x=15.8,y=12.8,g=.5,b=new B(new St(x,y),n.luminousCeiling);b.rotation.x=Math.PI/2,b.position.set(0,5.36,g),e.add(b);const w=5,T=4,A=.055,S=.06;for(let ve=1;ve<w;ve++){const H=-x/2+x/w*ve,Ae=new B(new pe(A,S,y),n.coveSlate);Ae.position.set(H,5.33,g),e.add(Ae)}for(let ve=1;ve<T;ve++){const H=g-y/2+y/T*ve,Ae=new B(new pe(x,S,A),n.coveSlate);Ae.position.set(0,5.33,H),e.add(Ae)}const M=.28,C=s-M/2,P=1.15,F=new B(new pe(P,M,i),n.coveSlate);F.position.set(-9+P/2,C,o);const O=new B(new pe(P,M,i),n.coveSlate);O.position.set(9-P/2,C,o);const G=new B(new pe(t,M,P),n.coveSlate);G.position.set(0,C,-7+P/2);const $=new B(new pe(t,M,P),n.coveSlate);$.position.set(0,C,8-P/2),e.add(F,O,G,$);const te=new Gs(.085,20),K=new Do(.085,.115,20),X=(ve,H)=>{const Ae=new B(te,n.downlightGlow);Ae.rotation.x=Math.PI/2,Ae.position.set(ve,s-M-.004,H);const ne=new B(K,n.darkMetal);ne.rotation.x=Math.PI/2,ne.position.set(ve,s-M-.003,H),e.add(Ae,ne)};for(let ve=0;ve<5;ve++){const H=-5.2+ve*2.85;X(-8.42,H),X(8.42,H)}for(let ve=0;ve<5;ve++){const H=-6+ve*3;X(H,-6.42)}const Y=Qy(),k=new Ye({map:Y,roughness:.35,metalness:.05}),Z=[{z:-4.3,city:"HÀ NỘI",tz:"UTC +7",offsetHours:7},{z:-2.5,city:"TOKYO",tz:"UTC +9",offsetHours:9},{z:-.7,city:"SAN FRANCISCO",tz:"UTC -8",offsetHours:-8}],W=[],N=new Be;for(const ve of Z){const H=new Be;H.position.set(-8.93,2.28,ve.z),H.rotation.y=Math.PI/2;const Ae=new B(new je(.36,.36,.05,36),n.chrome);Ae.rotation.x=Math.PI/2,Ae.castShadow=!0,H.add(Ae);const ne=new B(new Gs(.335,36),k);ne.position.z=.027,H.add(ne);const me=new Be;me.position.z=.032;const Se=new B(new pe(.018,.17,.005),n.matteBlack);Se.position.y=.075,me.add(Se);const Te=new Be;Te.position.z=.036;const Ve=new B(new pe(.012,.24,.005),n.matteBlack);Ve.position.y=.105,Te.add(Ve);const Qe=new Be;Qe.position.z=.04;const ut=new ht({color:959977}),nt=new B(new pe(.006,.26,.004),ut);nt.position.y=.1,Qe.add(nt);const Tt=new B(new je(.014,.014,.015,16),n.matteBlack);Tt.rotation.x=Math.PI/2,Tt.position.z=.042,H.add(me,Te,Qe,Tt);const Jt=ex(ve.city,ve.tz),Si=new Ye({map:Jt,roughness:.45,metalness:.3}),ti=new B(new pe(.46,.115,.018),Si);ti.position.set(0,-.49,.01),H.add(ti),N.add(H),W.push({hourPivot:me,minPivot:Te,secPivot:Qe,offsetHours:ve.offsetHours})}e.add(N);const j=new Be;j.position.set(8.72,0,-3.55);const ae=.52,ie=1.56,ye=2.05,fe=new B(new pe(ae,ie,ye),n.darkMetal);fe.position.y=ie/2,fe.castShadow=!0,fe.receiveShadow=!0,j.add(fe);const Ie=6,ke=4,he=(ye-.14)/Ie,ge=(ie-.14)/ke,I=new Ye({color:6583435,roughness:.36,metalness:.52}),Me=new B(new pe(ae+.04,.035,ye+.04),n.oakWood);Me.position.set(-.01,ie+.018,0),Me.castShadow=!0,j.add(Me);for(let ve=0;ve<Ie;ve++)for(let H=0;H<ke;H++){const Ae=-ye/2+.07+he*(ve+.5),ne=.07+ge*(H+.5),me=new B(new pe(.02,ge-.025,he-.025),I);me.position.set(-ae/2-.008,ne,Ae),j.add(me);const Se=new B(new pe(.015,.055,.016),n.chrome);Se.position.set(-ae/2-.022,ne,Ae+he*.28),j.add(Se)}e.add(j);const z=new Be;z.position.set(8.94,0,1.8),z.rotation.y=-Math.PI/2;const _e=1.75,ce=2.75,Le=.09,Ee=new B(new pe(Le,ce,.14),n.matteBlack);Ee.position.set(-_e/2,ce/2,0);const L=new B(new pe(Le,ce,.14),n.matteBlack);L.position.set(_e/2,ce/2,0);const E=new B(new pe(_e+Le,Le,.14),n.matteBlack);E.position.set(0,ce-Le/2,0);const V=new Ql({color:2503232,roughness:.12,metalness:.1,transmission:.35,transparent:!0,opacity:.88,reflectivity:.85}),re=new B(new pe(_e-Le,ce-Le,.03),V);re.position.set(0,(ce-Le)/2,0);const q=new B(new je(.016,.016,.72,16),n.chrome);q.position.set(-.55,1.15,.055);const U=new B(new St(_e-Le,ce-Le),new ht({color:3885400}));U.position.set(0,(ce-Le)/2,-.025),z.add(U,re,Ee,L,E,q),e.add(z);const se=Zy(n);e.add(se.group);const oe=Jy(n);e.add(oe.group);let le=new $e(16383231),we=0;function ee(ve){const H=ve.getTime()+ve.getTimezoneOffset()*6e4;for(const Ae of W){const ne=new Date(H+Ae.offsetHours*36e5),me=ne.getSeconds()+ne.getMilliseconds()/1e3,Se=ne.getMinutes()+me/60,Te=ne.getHours()%12+Se/60;Ae.secPivot.rotation.z=-(me/60)*Math.PI*2,Ae.minPivot.rotation.z=-(Se/60)*Math.PI*2,Ae.hourPivot.rotation.z=-(Te/12)*Math.PI*2}}function be(ve){we=ve,n.luminousCeiling.emissiveIntensity=qe.lerp(1.15,.07,ve);const H=new $e(1976635);n.luminousCeiling.emissive.copy(le).lerp(H,ve),n.downlightGlow.emissiveIntensity=qe.lerp(1.5,2.2,ve);const Ae=new $e(15531775),ne=new $e(3718648);n.downlightGlow.emissive.copy(Ae).lerp(ne,ve),se.setLightingMode(ve)}function xe(ve){se.group.visible=!!ve}function Ce(ve){ve&&(n.concreteWallBack.color.setHex(ve.wallTint),n.concreteWallSide.color.setHex(ve.wallTint),n.floor.color.setHex(ve.floorTint),n.coveSlate.color.setHex(ve.coveColor))}function Pe(ve){ve&&(ve.wallColor&&(n.concreteWallBack.color.set(ve.wallColor),n.concreteWallSide.color.set(ve.wallColor)),ve.floorColor&&n.floor.color.set(ve.floorColor),ve.deskColor&&n.deskTop.color.set(ve.deskColor),ve.chairColor&&n.leather.color.set(ve.chairColor),ve.trimColor&&n.champagneGold.color.set(ve.trimColor),ve.ceilingGlowColor&&(le.set(ve.ceilingGlowColor),be(we)))}function Ne(ve){ve&&(oe.setDecorConfig(ve),typeof ve.showLockers=="boolean"&&(j.visible=ve.showLockers),typeof ve.showClocks=="boolean"&&(N.visible=ve.showClocks))}function Fe(ve){oe.update(ve)}return{group:e,updateClocks:ee,setLightingMode:be,setBiophilicVisible:xe,applySpaceTheme:Ce,applyCustomColors:Pe,applyDecorConfig:Ne,updateDecor:Fe}}const wt=[{id:"intake",index:0,shortName:"1. Yêu cầu",name:"1. Yêu cầu & BA",badgeLabel:"1. YÊU CẦU & BA",color:"#38bdf8",colorHex:3718648,stations:[0,1,2],summary:"Tiếp nhận mô tả, phân tích nghiệp vụ & thiết kế wireframe UX/UI"},{id:"planning",index:1,shortName:"2. Kế hoạch",name:"2. Kế hoạch & Kiến trúc",badgeLabel:"2. KẾ HOẠCH & KIẾN TRÚC",color:"#818cf8",colorHex:8490232,stations:[3,4,5],summary:"Thiết kế kiến trúc đa nền tảng, chia Sprint & dự trù tài nguyên"},{id:"build",index:2,shortName:"3. Xây dựng",name:"3. Xây dựng & Code",badgeLabel:"3. XÂY DỰNG & CODE",color:"#3b82f6",colorHex:3900150,stations:[9,10,11],summary:"Phát triển mã nguồn Android, Windows, Web/API & tích hợp CI"},{id:"testing",index:3,shortName:"4. Kiểm thử",name:"4. Kiểm thử & QA",badgeLabel:"4. KIỂM THỬ & QA",color:"#f59e0b",colorHex:16096779,stations:[12,13,14],summary:"Kiểm thử tự động E2E, bảo mật OWASP & hiệu năng đa thiết bị"},{id:"release",index:4,shortName:"5. Phân phối",name:"5. Đóng gói & Phân phối",badgeLabel:"5. ĐÓNG GÓI & PHÂN PHỐI",color:"#10b981",colorHex:1096065,stations:[6,7,8],summary:"Ký số bản cài đặt (.AAB, .MSIX/.EXE) & phát hành lên Store/CDN"},{id:"warranty",index:5,shortName:"6. Bảo hành",name:"6. Vận hành & Bảo hành",badgeLabel:"6. VẬN HÀNH & BẢO HÀNH",color:"#14b8a6",colorHex:1357990,stations:[15,16,17],summary:"Giám sát SLA 24/7, tiếp nhận ticket khách hàng & vá lỗi Hotfix"}],Or=[{stationIndex:0,name:"Trang Bùi",role:"Product Owner",deptId:"intake",shirt:1981023,hair:"bob",skin:15843995,glasses:!0,headset:!1},{stationIndex:1,name:"Minh Thư",role:"Business Analyst",deptId:"intake",shirt:1002588,hair:"bun",skin:15119759,glasses:!1,headset:!0},{stationIndex:2,name:"Quốc Anh",role:"UX/UI Researcher",deptId:"intake",shirt:2503224,hair:"short",skin:14395003,glasses:!0,headset:!1},{stationIndex:3,name:"Huy Hoàng",role:"Solution Architect",deptId:"planning",shirt:2635155,hair:"side",skin:14922122,glasses:!0,headset:!1},{stationIndex:4,name:"Tuấn Kiệt",role:"Tech Lead",deptId:"planning",shirt:2042167,hair:"short",skin:14262646,glasses:!1,headset:!0},{stationIndex:5,name:"Hà My",role:"Scrum Master",deptId:"planning",shirt:3223169,hair:"bob",skin:15976096,glasses:!1,headset:!1},{stationIndex:6,name:"Hải Yến",role:"Release Manager",deptId:"release",shirt:413243,hair:"bun",skin:15515804,glasses:!0,headset:!1},{stationIndex:7,name:"Minh Nguyễn",role:"DevOps / CI-CD Eng",deptId:"release",shirt:1120295,hair:"short",skin:14065268,glasses:!1,headset:!0},{stationIndex:8,name:"Đức Võ",role:"Store & Code-Sign Eng",deptId:"release",shirt:417606,hair:"side",skin:14856072,glasses:!1,headset:!1},{stationIndex:9,name:"Phúc Thịnh",role:"Android / Kotlin Lead",deptId:"build",shirt:1982639,hair:"short",skin:14657920,glasses:!1,headset:!0},{stationIndex:10,name:"Bảo Long",role:"Windows / C# Desktop Lead",deptId:"build",shirt:1516884,hair:"side",skin:15251860,glasses:!0,headset:!1},{stationIndex:11,name:"Linh Trần",role:"Backend / Core Lead",deptId:"build",shirt:1920728,hair:"bob",skin:15843995,glasses:!1,headset:!0},{stationIndex:12,name:"Khang Đỗ",role:"QA Automation Lead",deptId:"testing",shirt:4528643,hair:"short",skin:14262904,glasses:!0,headset:!1},{stationIndex:13,name:"Quỳnh Anh",role:"Security / PenTest Eng",deptId:"testing",shirt:3878686,hair:"bun",skin:15910304,glasses:!1,headset:!0},{stationIndex:14,name:"Tài Ngô",role:"Performance QA",deptId:"testing",shirt:7877903,hair:"side",skin:14724228,glasses:!0,headset:!1},{stationIndex:15,name:"Nam Phan",role:"SRE Support Lead",deptId:"warranty",shirt:1265226,hair:"short",skin:14395004,glasses:!1,headset:!0},{stationIndex:16,name:"Vy Trương",role:"Customer Warranty Eng",deptId:"warranty",shirt:1138265,hair:"bob",skin:15778202,glasses:!0,headset:!0},{stationIndex:17,name:"An Phạm",role:"Hotfix & Patch Specialist",deptId:"warranty",shirt:1013358,hair:"side",skin:14922121,glasses:!1,headset:!1}],No=[{id:"smartpos",label:"SmartPOS Bán Hàng",name:"SmartPOS Bán Hàng Đa Chi Nhánh",platforms:["android","windows"],warrantyMonths:24,description:"Quản lý bán hàng tại quầy trên máy Windows (.EXE) và máy POS cầm tay Android (.APK); đồng bộ tồn kho thời gian thực, in hóa đơn nhiệt ESC/POS và quét mã QR thanh toán offline-first."},{id:"delivery",label:"App Android Giao Hàng",name:"ExpressShip Giao Hàng Tức Thời",platforms:["android","web"],warrantyMonths:12,description:"Ứng dụng tài xế Android theo dõi GPS nền, chụp ảnh POD giao hàng, tối ưu lộ trình và trang quản trị điều phối Web Dashboard thời gian thực."},{id:"win-erp",label:"Windows Kế Toán ERP",name:"VietLedger ERP Desktop",platforms:["windows"],warrantyMonths:24,description:"Phần mềm kế toán nội bộ trên Windows 11 (.NET 8 WinUI 3), xuất hóa đơn điện tử, ký số USB Token, phân quyền chi tiết và sao lưu SQLite/PostgreSQL tự động."},{id:"ai-cskh",label:"AI CSKH Đa Nền Tảng",name:"OmniCare AI Assistant Suite",platforms:["android","windows","web","ios"],warrantyMonths:24,description:"Trợ lý CSKH AI đa kênh đồng bộ trên Android, Windows Desktop, iOS và Web; định tuyến ticket tự động, gợi ý câu trả lời RAG và báo cáo SLA theo thời gian thực."}],Ln={android:{label:"Android",stack:"Kotlin + Jetpack Compose + Room DB",buildCmd:"gradle bundleRelease",qaSuite:"Android 14 Emulator E2E + UI Automator",packageExt:".aab / .apk",channel:"Google Play Console & Enterprise MDM",ticketSamples:["Sửa lỗi crash CameraX trên Android 14 Samsung OneUI","Tối ưu thời lượng pin dịch vụ đồng bộ nền WorkManager","Cập nhật SDK thanh toán QR ngân hàng v2.4"]},windows:{label:"Windows",stack:"C# .NET 8 + WinUI 3 / WPF + SQLite",buildCmd:"dotnet publish -c Release -r win-x64",qaSuite:"Windows 11 High-DPI & Print Spooler QA",packageExt:".msix / .exe",channel:"Microsoft Store & Signed Auto-Updater",ticketSamples:["Vá lỗi in hóa đơn khổ 80mm trên Windows 11 24H2","Khắc phục rò rỉ bộ nhớ khi mở nhiều tab báo cáo WinUI","Cập nhật chứng chỉ ký số EV Code Signing"]},web:{label:"Web / Cloud",stack:"TypeScript + Vite + Go/Node API + PostgreSQL",buildCmd:"vite build && docker build",qaSuite:"Playwright E2E + k6 Load + OWASP ZAP",packageExt:"Docker Image",channel:"Kubernetes Production + Global CDN",ticketSamples:["Tối ưu truy vấn báo cáo tồn kho giảm p95 từ 220ms xuống 34ms","Bổ sung giới hạn tốc độ WAF chống spam webhook"]},ios:{label:"iOS",stack:"SwiftUI + CoreData + BackgroundTasks",buildCmd:"xcodebuild -scheme Release archive",qaSuite:"iOS 18 Simulator + XCTest Suite",packageExt:".ipa",channel:"App Store Connect & TestFlight",ticketSamples:["Sửa lỗi bố cục Dynamic Island trên iPhone 16 Pro","Cập nhật quyền thông báo đẩy APNs silent push"]}};function nx(n){return(n||"software-app").normalize("NFD").replace(/[\u0300-\u036f]/g,"").replace(/[^a-zA-Z0-9]+/g,"-").replace(/^-+|-+$/g,"").toLowerCase().slice(0,28)||"software-app"}function ix(n,e){const t=(n||"").split(/[;.\n,]+/).map(s=>s.trim()).filter(s=>s.length>=6);return t.length>=3?t.slice(0,4):[`Nghiệp vụ cốt lõi đa nền tảng (${e.map(s=>{var o;return((o=Ln[s])==null?void 0:o.label)||s}).join(" + ")})`,"Đồng bộ dữ liệu thời gian thực & cơ chế offline-first","Phân quyền bảo mật, nhật ký kiểm toán & báo cáo SLA"]}function sd(n){const e=Array.isArray(n.platforms)&&n.platforms.length>0?n.platforms.filter(v=>Ln[v]):["android","windows"],t=(n.name||"SmartPOS Bán Hàng").trim(),i=nx(t),s=Number(n.warrantyMonths)||24,o=(n.description||No[0].description).trim(),r=ix(o,e),a=e.map(v=>Ln[v].label),l=e.map(v=>`${Ln[v].label}: ${Ln[v].stack}`),c=e.map(v=>Ln[v].buildCmd),h=e.map(v=>Ln[v].qaSuite),d=e.map(v=>Ln[v].channel),u=[{name:`${i}-SRS-v1.pdf`,stage:0,platform:"Docs"},{name:`${i}-Arch-Blueprint.fig`,stage:1,platform:"Design"}];e.includes("android")&&(u.push({name:`${i}-v1.0.0.aab`,stage:4,platform:"Android"}),u.push({name:`${i}-pos-v1.0.0.apk`,stage:4,platform:"Android"})),e.includes("windows")&&(u.push({name:`${i}-win-x64.msix`,stage:4,platform:"Windows"}),u.push({name:`${i}-Setup-x64.exe`,stage:4,platform:"Windows"})),e.includes("web")&&u.push({name:`${i}-web:1.0.0`,stage:4,platform:"Web"}),e.includes("ios")&&u.push({name:`${i}-v1.0.0.ipa`,stage:4,platform:"iOS"}),u.push({name:`${i}-QA-Report.html`,stage:3,platform:"QA"}),u.push({name:`${i}-Warranty-SLA-${s}M.pdf`,stage:5,platform:"SLA"});const f=[{index:0,title:"Tiếp nhận Yêu cầu & Phân tích BA",summary:`Thu thập mô tả cho "${t}" trên ${a.join(" + ")}, tách ${r.length} module nghiệp vụ chính.`,deliverables:[`Tài liệu đặc tả ${i}-SRS-v1.pdf`,...r.map(v=>`User Story: ${v}`)],logs:[`[BA] Khởi tạo hồ sơ dự án: "${t}"`,`[PO] Xác định nền tảng mục tiêu: ${a.join(", ")}`,"[UX] Hoàn thiện wireframe luồng màn hình chính & bảng màu hệ thống"]},{index:1,title:"Lên Kế hoạch & Kiến trúc Hệ thống",summary:`Chọn tech stack (${a.join(" / ")}), lập lịch Sprint & thiết kế DB/API Sync.`,deliverables:[...l,"Biểu đồ kiến trúc Event-Driven & Offline Sync","Kế hoạch 4 Sprint + Ma trận rủi ro kỹ thuật"],logs:[`[ARCH] Chốt kiến trúc: ${l[0]}`,...l[1]?[`[ARCH] Chốt client thứ 2: ${l[1]}`]:[],"[SCRUM] Phân rã backlog 48 story points cho đội Xây dựng & QA"]},{index:2,title:"Xây dựng & Lập trình Đa Nền Tảng",summary:`Biên dịch đồng thời mã nguồn ${a.join(" & ")} với pipeline CI tích hợp liên tục.`,deliverables:[...c.map(v=>`Build Pipeline: ${v}`),"Module đồng bộ API Real-time & mã hóa lưu trữ cục bộ"],logs:[...c.map(v=>`[DEV] Đang chạy: ${v} -> SUCCESS`),"[CORE] Tích hợp Auth SSO & Telemetry Agent hoàn tất"]},{index:3,title:"Kiểm thử Tự động, Bảo mật & Hiệu năng",summary:"Chạy toàn bộ test suite trên giả lập Android/Windows/Web, kiểm tra bảo mật & tải cao.",deliverables:[...h,`Báo cáo chất lượng ${i}-QA-Report.html (Coverage 94.6%)`,"Kiểm định lỗ hổng OWASP Top 10: 0 Critical"],logs:[...h.map(v=>`[QA] ${v} -> 148/148 PASSED`),"[SEC] Quét bảo mật & hiệu năng p95 đạt ngưỡng phát hành"]},{index:4,title:"Đóng gói, Ký số & Phân phối Sản phẩm",summary:`Ký số chứng chỉ phát hành và đẩy gói cài đặt lên ${d.join(" + ")}.`,deliverables:[...u.filter(v=>v.stage===4).map(v=>`Gói phát hành: ${v.name}`),...d.map(v=>`Kênh phân phối: ${v}`)],logs:["[REL] Ký số chứng chỉ doanh nghiệp & kiểm tra checksum SHA-256",...d.map(v=>`[DIST] Xuất bản thành công tới ${v}`)]},{index:5,title:`Vận hành 24/7 & Bảo hành (${s} tháng)`,summary:"Theo dõi sức khỏe production theo SLA 99.98%, tiếp nhận ticket khách hàng và phát hành Hotfix tự động.",deliverables:[`Hợp đồng bảo hành ${s} tháng (SLA 99.98%)`,"Kênh tiếp nhận lỗi 24/7 & cảnh báo Crashlytics/Sentry","Quy trình vá lỗi nóng Hotfix OTA / Auto-Updater < 2 giờ"],logs:[`[SRE] Kích hoạt giám sát Production & bảo hành ${s} tháng`,"[SLA] Uptime 99.98% • Chế độ hỗ trợ khách hàng đang hoạt động"]}];return{name:t,slug:i,platforms:e,platformLabels:a,warrantyMonths:s,description:o,features:r,artifacts:u,stageDetails:f}}function sx(n=No[0]){let e=sd(n),t=0,i=.08,s=1,o=!1,r=0,a=[],l=[...e.stageDetails[0].logs];const c=9.5;function h(x){l.push(x),l.length>14&&(l=l.slice(l.length-14))}function d(x){return e=sd(x),t=0,i=.05,o=!1,r=0,a=[],l=[...e.stageDetails[0].logs],p()}function u(x){const y=Math.max(0,Math.min(5,x));t=y,i=y===5?.5:.12,l=[];for(let g=0;g<=y;g++)for(const b of e.stageDetails[g].logs)h(b);return p()}function f(){t<5&&u(5),r+=1;const x=e.platforms[(r-1)%e.platforms.length],y=Ln[x]||Ln.android,g=y.ticketSamples[(r-1)%y.ticketSamples.length],b=`WAR-${String(100+r)}`,w=`v1.0.${r}`,T={id:b,platform:y.label,title:g,version:w,status:"ĐÃ VÁ HOTFIX",eta:"28 phút"};return a=[T,...a].slice(0,5),h(`[TICKET ${b}] ${y.label}: ${g}`),h(`[HOTFIX ${w}] Đã kiểm thử & đẩy bản vá OTA/Updater thành công`),T}function v(x){o=!!x}function _(x){s=[1,2,4].includes(x)?x:1}function m(x){if(o)return!1;let y=!1;if(t<5){if(i+=x*s/c,i>=1){t+=1,i=t===5?.2:.02,y=!0;for(const g of e.stageDetails[t].logs)h(g)}}else i=Math.min(1,i+x*s/(c*1.5));return y}function p(){const x=t===5&&i>=.99?1:Math.min(1,(t+i)/6),y=wt.map((g,b)=>b<t?"done":b===t?(b===5&&i>=.99,"active"):"pending");return{project:e,stageIndex:t,stageProgress:i,overallProgress:x,stageStatus:y,currentDept:wt[t],currentStageDetail:e.stageDetails[t],activeLogs:[...l],artifacts:e.artifacts.map(g=>({...g,ready:t>g.stage||t===g.stage&&i>=.65})),warrantyTickets:[...a],version:`v1.0.${r}`,paused:o,speed:s}}return{startProject:d,jumpToStage:u,triggerWarrantyTicket:f,setPaused:v,setSpeed:_,update:m,getState:p}}const Cu="mrt_agent_model_voice_v1",tc=[{id:"gemini-2.5-flash-preview-tts",name:"Gemini 2.5 Flash TTS (Nhanh)"},{id:"gemini-2.5-pro-preview-tts",name:"Gemini 2.5 Pro TTS (Cao cấp)"}],nc=[{id:"Kore",name:"Kore — Nữ (Mạnh mẽ, rõ nét)",gender:"female"},{id:"Aoede",name:"Aoede — Nữ (Tự nhiên, truyền cảm)",gender:"female"},{id:"Leda",name:"Leda — Nữ (Trẻ trung, năng lượng)",gender:"female"},{id:"Zephyr",name:"Zephyr — Nữ (Trong trẻo, sáng)",gender:"female"},{id:"Autonoe",name:"Autonoe — Nữ (Ấm áp, thân thiện)",gender:"female"},{id:"Callirrhoe",name:"Callirrhoe — Nữ (Nhẹ nhàng, mượt)",gender:"female"},{id:"Despina",name:"Despina — Nữ (Êm dịu, chuyên nghiệp)",gender:"female"},{id:"Charon",name:"Charon — Nam (Trầm ấm, chuyên nghiệp)",gender:"male"},{id:"Puck",name:"Puck — Nam (Năng động, hoạt bát)",gender:"male"},{id:"Fenrir",name:"Fenrir — Nam (Nhiệt huyết, dứt khoát)",gender:"male"},{id:"Orus",name:"Orus — Nam (Điềm tĩnh, vững chắc)",gender:"male"},{id:"Alnilam",name:"Alnilam — Nam (Chắc chắn, báo cáo)",gender:"male"},{id:"Enceladus",name:"Enceladus — Nam (Dày giọng, sâu)",gender:"male"},{id:"Iapetus",name:"Iapetus — Nam (Rõ ràng, mạch lạc)",gender:"male"},{id:"Schedar",name:"Schedar — Nam (Chững chạc, kỹ thuật)",gender:"male"},{id:"Umbriel",name:"Umbriel — Nam (Êm ái, ổn định)",gender:"male"},{id:"Algenib",name:"Algenib — Nam (Trầm, điềm đạm)",gender:"male"},{id:"Algieba",name:"Algieba — Nam (Mượt, cân bằng)",gender:"male"},{id:"Achird",name:"Achird — Nam (Thân thiện, dễ nghe)",gender:"male"}],Jr=[{id:"gemini-2.5-pro",name:"Gemini 2.5 Pro",provider:"Google",color:"#38bdf8"},{id:"claude-3.7-sonnet",name:"Claude 3.7 Sonnet",provider:"Anthropic",color:"#f59e0b"},{id:"gpt-4.1",name:"GPT-4.1",provider:"OpenAI",color:"#10b981"},{id:"gpt-4o",name:"GPT-4o",provider:"OpenAI",color:"#22d3ee"},{id:"deepseek-r1",name:"DeepSeek-R1",provider:"DeepSeek",color:"#818cf8"},{id:"deepseek-v3",name:"DeepSeek-V3",provider:"DeepSeek",color:"#6366f1"},{id:"qwen-2.5-coder",name:"Qwen2.5-Coder 32B",provider:"Alibaba",color:"#3b82f6"},{id:"gemini-2.5-flash",name:"Gemini 2.5 Flash",provider:"Google",color:"#14b8a6"},{id:"o3-mini",name:"o3-mini",provider:"OpenAI",color:"#a78bfa"},{id:"llama-3.3-70b",name:"Llama 3.3 70B",provider:"Meta",color:"#fb7185"}],od={18:{gender:"male",modelId:"gemini-2.5-pro",voiceId:"Hải Đăng",geminiVoice:"Charon",mission:"Điều phối tổng thể 6 phòng ban, duyệt mốc bàn giao & thực thi lệnh tối cao"},0:{gender:"female",modelId:"gemini-2.5-pro",voiceId:"Mai Anh",geminiVoice:"Kore",mission:"Phân tích mục tiêu kinh doanh, chốt phạm vi & User Story"},1:{gender:"female",modelId:"claude-3.7-sonnet",voiceId:"Trúc Ly",geminiVoice:"Aoede",mission:"Soạn đặc tả SRS, sơ đồ nghiệp vụ & hợp đồng API"},2:{gender:"male",modelId:"gpt-4o",voiceId:"Quốc Tuấn",geminiVoice:"Puck",mission:"Thiết kế Wireframe, UI/UX đa màn hình & Design System"},3:{gender:"male",modelId:"o3-mini",voiceId:"Minh Đức",geminiVoice:"Orus",mission:"Thiết kế kiến trúc hệ thống, Offline-First Sync & Database"},4:{gender:"male",modelId:"deepseek-r1",voiceId:"Thiện Minh",geminiVoice:"Fenrir",mission:"Phân rã module kỹ thuật, chuẩn code & review kiến trúc"},5:{gender:"female",modelId:"gpt-4.1",voiceId:"Đoan Trang",geminiVoice:"Leda",mission:"Lập kế hoạch 4 Sprint, điều phối Kanban & gỡ điểm nghẽn"},6:{gender:"female",modelId:"gemini-2.5-flash",voiceId:"Thùy Dung",geminiVoice:"Zephyr",mission:"Phê duyệt checklist phát hành, Release Notes & Store rollout"},7:{gender:"male",modelId:"qwen-2.5-coder",voiceId:"Phạm Tuyên",geminiVoice:"Alnilam",mission:"Vận hành CI/CD tự động build APK/EXE & tối ưu pipeline"},8:{gender:"male",modelId:"llama-3.3-70b",voiceId:"Đức Trí",geminiVoice:"Enceladus",mission:"Ký số chứng chỉ EV Code Signing, kiểm tra SHA-256 & bảo toàn gói cài"},9:{gender:"male",modelId:"claude-3.7-sonnet",voiceId:"Minh Triết",geminiVoice:"Iapetus",mission:"Lập trình Android Kotlin + Jetpack Compose + SQLite"},10:{gender:"male",modelId:"gpt-4.1",voiceId:"Quang Sơn",geminiVoice:"Schedar",mission:"Lập trình Windows Desktop .NET 10 C# & đóng gói .EXE/.MSIX"},11:{gender:"female",modelId:"deepseek-v3",voiceId:"Ngọc Linh",geminiVoice:"Autonoe",mission:"Xây dựng Backend API, xác thực JWT & đồng bộ dữ liệu thời gian thực"},12:{gender:"male",modelId:"qwen-2.5-coder",voiceId:"Xuân Vĩnh",geminiVoice:"Umbriel",mission:"Viết & chạy kiểm thử tự động E2E đa thiết bị Android & Windows"},13:{gender:"female",modelId:"claude-3.7-sonnet",voiceId:"Quỳnh Anh",geminiVoice:"Callirrhoe",mission:"Kiểm định bảo mật OWASP, rà soát lỗ hổng API & phân quyền"},14:{gender:"male",modelId:"deepseek-r1",voiceId:"Thái Sơn",geminiVoice:"Algenib",mission:"Đo tải hiệu năng 10k RPS, tối ưu độ trễ p95 & bộ nhớ RAM/CPU"},15:{gender:"male",modelId:"gemini-2.5-flash",voiceId:"Thanh Bình",geminiVoice:"Algieba",mission:"Giám sát Production SLA 99.98% 24/7, log & cảnh báo sớm"},16:{gender:"female",modelId:"gpt-4o",voiceId:"Ngọc Huyền",geminiVoice:"Despina",mission:"Tiếp nhận ticket bảo hành, chăm sóc khách hàng & phân loại lỗi"},17:{gender:"male",modelId:"claude-3.7-sonnet",voiceId:"Adam",geminiVoice:"Achird",mission:"Phát triển bản vá nóng Hotfix & phát hành cập nhật OTA"}},Ru=Object.fromEntries(Jr.map(n=>[n.id,n])),ic=new Set;function ox(){if(typeof localStorage>"u")return{};try{const n=localStorage.getItem(Cu);return n?JSON.parse(n):{}}catch{return{}}}let Rs=ox();function Pu(){if(!(typeof localStorage>"u"))try{localStorage.setItem(Cu,JSON.stringify(Rs))}catch{}}function Lu(n){for(const e of ic)try{e(n)}catch{}}function rx(n){return Ru[n]||Jr[0]}function Ft(n){const e=Number(n),t=od[e]||od[0],i=Rs[String(e)]||{},s=i.gender==="female"||i.gender==="male"?i.gender:t.gender,o=i.modelId&&Ru[i.modelId]?i.modelId:t.modelId,r=i.voiceId||t.voiceId,a=i.geminiVoice||t.geminiVoice||(s==="female"?"Kore":"Charon"),l=i.mission||t.mission;return{stationIndex:e,gender:s,genderLabel:s==="female"?"Nữ":"Nam",modelId:o,model:rx(o),voiceId:r,geminiVoice:a,mission:l}}function bs(n,e={}){const t=String(Number(n)),i=Rs[t]||{};return Rs={...Rs,[t]:{...i,...e}},Pu(),Lu(Number(n)),Ft(n)}function ax(){Rs={},Pu(),Lu(-1)}function Iu(n){return typeof n!="function"?()=>{}:(ic.add(n),()=>ic.delete(n))}function Du(n,e){if(!n)return!1;const t=String(n.gender||"").toLowerCase(),i=String(n.description||"").toLowerCase();return e==="female"?t==="female"||t==="nữ"||i.startsWith("nữ"):t==="male"||t==="nam"||i.startsWith("nam")}function Lc(n,e){if(!Array.isArray(n)||n.length===0)return[];const t=n.filter(i=>Du(i,e));return t.length>0?t:n}function Pr(n,e){const t=Ft(n);if(!Array.isArray(e)||e.length===0)return t.voiceId;const i=e.find(r=>r.id===t.voiceId||r.name===t.voiceId);if(i&&Du(i,t.gender))return i.id;const s=Lc(e,t.gender);if(s.length===0)return t.voiceId;const o=Math.abs(Number(n)||0)%s.length;return s[o].id}function Oa(n){const e=Ft(n),t=nc.find(o=>o.id===e.geminiVoice&&o.gender===e.gender);if(t)return t.id;const i=nc.filter(o=>o.gender===e.gender);if(i.length===0)return e.geminiVoice;const s=Math.abs(Number(n)||0)%i.length;return i[s].id}const Qn={cyber:{id:"cyber",label:"Cyber Đêm",bg:"#030812",sideBg:"#040914",cardBg:"rgba(8, 17, 31, 0.92)",subCardBg:"rgba(15, 23, 42, 0.72)",brightCardBg:"#e8eef5",brightText:"#0f172a",headerBg:"rgba(8, 19, 36, 0.92)",accent:"#38bdf8",border:"rgba(56, 189, 248, 0.32)",grid:"rgba(56, 189, 248, 0.09)",text:"#f8fafc",textMuted:"#94a3b8",isLight:!1},"white-red":{id:"white-red",label:"Trắng Đỏ",bg:"#f8fafc",sideBg:"#ffffff",cardBg:"rgba(255, 255, 255, 0.96)",subCardBg:"#fef2f2",brightCardBg:"#fff1f2",brightText:"#7f1d1d",headerBg:"#ffffff",accent:"#dc2626",border:"rgba(220, 38, 38, 0.45)",grid:"rgba(220, 38, 38, 0.08)",text:"#0f172a",textMuted:"#991b1b",isLight:!0},emerald:{id:"emerald",label:"Xanh Ngọc",bg:"#02120e",sideBg:"#041712",cardBg:"rgba(6, 28, 22, 0.92)",subCardBg:"rgba(6, 40, 31, 0.72)",brightCardBg:"#ecfdf5",brightText:"#064e3b",headerBg:"rgba(4, 31, 24, 0.94)",accent:"#10b981",border:"rgba(16, 185, 129, 0.36)",grid:"rgba(16, 185, 129, 0.09)",text:"#ecfdf5",textMuted:"#6ee7b7",isLight:!1},executive:{id:"executive",label:"Hoàng Kim",bg:"#120d08",sideBg:"#171009",cardBg:"rgba(30, 22, 13, 0.92)",subCardBg:"rgba(42, 30, 16, 0.72)",brightCardBg:"#fffbeb",brightText:"#78350f",headerBg:"rgba(36, 25, 14, 0.94)",accent:"#f59e0b",border:"rgba(245, 158, 11, 0.38)",grid:"rgba(245, 158, 11, 0.08)",text:"#fef3c7",textMuted:"#fcd34d",isLight:!1}},lx=[{id:"sdlc",label:"SDLC 6 Bước"},{id:"meeting",label:"Họp & Nghị sự"},{id:"kpi",label:"KPI Tổng quan"},{id:"kanban",label:"Kanban Lớn"}],Vs={opsTheme:"cyber",opsMode:"sdlc",opsTitle:"",opsSubtitle:"",opsAgenda:`1. Rà soát tiến độ 6 phòng ban & mốc bàn giao
2. Kiểm tra kết quả Build Android / Windows / Web
3. Chốt danh sách QA & kế hoạch phát hành`,opsShowLeft:!0,opsShowRight:!0,opsShowRadar:!0,opsShowAiFeed:!0,opsShowDeptGrid:!0,opsBrightness:100,opsTextScale:1};function Uo(n,e,t,i,s,o,r=18,a=2.5){n.strokeStyle=o,n.lineWidth=a,n.beginPath(),n.moveTo(e,t+r),n.lineTo(e,t),n.lineTo(e+r,t),n.moveTo(e+i-r,t),n.lineTo(e+i,t),n.lineTo(e+i,t+r),n.moveTo(e,t+s-r),n.lineTo(e,t+s),n.lineTo(e+r,t+s),n.moveTo(e+i-r,t+s),n.lineTo(e+i,t+s),n.lineTo(e+i,t+s-r),n.stroke()}function Ot(n,e,t,i,s,o="#38bdf8",r="rgba(8, 17, 31, 0.92)",a="rgba(56, 189, 248, 0.25)"){n.fillStyle=r,n.fillRect(e,t,i,s),n.strokeStyle=a,n.lineWidth=1.5,n.strokeRect(e,t,i,s),Uo(n,e,t,i,s,o,12,2)}function cx(n,e,t,i,s,o,r,a,l){var A;const c=Qn[l==null?void 0:l.opsTheme]||Qn.cyber,h=Number(l==null?void 0:l.opsTextScale)||1,d=s?"#f43f5e":c.id==="white-red"?c.accent:((A=o==null?void 0:o.currentDept)==null?void 0:A.color)||c.accent,u=o==null?void 0:o.project,f=(u==null?void 0:u.name)||"SmartPOS Bán Hàng",v=(u==null?void 0:u.platforms)||["android","windows"];n.fillStyle=c.sideBg,n.fillRect(0,0,e,t),n.strokeStyle=c.border,n.lineWidth=2,n.strokeRect(10,10,e-20,t-20),Uo(n,10,10,e-20,t-20,d,26,3.5);const _=22,m=e-_*2;Ot(n,_,_,m,118,d,c.cardBg,c.border),n.fillStyle=d,n.font=`bold ${Math.round(12*h)}px Consolas, monospace`,n.fillText((l==null?void 0:l.opsMode)==="meeting"?"MEETING BRIEFING TARGET":"ACTIVE SOFTWARE PROJECT",_+14,_+24),n.fillStyle=c.text,n.font=`bold ${Math.round(19*h)}px Segoe UI, sans-serif`,n.fillText(f.slice(0,30),_+14,_+54);let p=_+14;v.forEach(S=>{const M=S.toUpperCase(),C=M.length*10+18;n.fillStyle=c.subCardBg,n.fillRect(p,_+72,C,28),n.strokeStyle=d,n.lineWidth=1.5,n.strokeRect(p,_+72,C,28),n.fillStyle=c.text,n.font="bold 12px Consolas, monospace",n.fillText(M,p+9,_+90),p+=C+8});const x=_+132,y=310;Ot(n,_,x,m,y,d,c.cardBg,c.border),n.fillStyle=d,n.font=`bold ${Math.round(13*h)}px Segoe UI, sans-serif`,n.fillText("QUY TRÌNH 6 GIAI ĐOẠN (SDLC PIPELINE)",_+14,x+24),wt.forEach((S,M)=>{const C=x+42+M*43,P=o?o.stageStatus[M]:M===0?"active":"pending",F=P==="done"?1:P==="active"?(o==null?void 0:o.stageProgress)||.3:0,O=P==="done"?"#10b981":P==="active"?c.id==="white-red"?c.accent:S.color:"#64748b";n.fillStyle=P==="active"?c.subCardBg:c.cardBg,n.fillRect(_+14,C,m-28,36),n.strokeStyle=O,n.lineWidth=P==="active"?2:1,n.strokeRect(_+14,C,m-28,36),n.fillStyle=c.text,n.font=`bold ${Math.round(13*h)}px Segoe UI, sans-serif`,n.fillText(S.name,_+24,C+18),n.fillStyle=O,n.font="bold 11px Consolas, monospace";const G=P==="done"?"DONE 100%":P==="active"?`${Math.round(F*100)}%`:"WAIT";n.fillText(G,_+m-94,C+18),n.fillStyle=c.isLight?"#fee2e2":"#0f172a",n.fillRect(_+24,C+25,m-48,5),n.fillStyle=O,n.fillRect(_+24,C+25,(m-48)*F,5)});const g=x+y+14,b=t-g-_;Ot(n,_,g,m,b,d,c.cardBg,c.border),n.fillStyle=d,n.font=`bold ${Math.round(13*h)}px Segoe UI, sans-serif`,n.fillText("LIVE EXECUTION CONSOLE",_+14,g+24),((o==null?void 0:o.activeLogs)||[]).slice(-5).forEach((S,M)=>{const C=S.includes("TICKET")||s;n.fillStyle=C?"#f59e0b":c.isLight?"#1e293b":"#cbd5e1",n.font="11.5px Consolas, monospace",n.fillText(S.slice(0,56),_+14,g+46+M*22)});const T=r==null?void 0:r.latestMessage;T&&(n.fillStyle=d,n.font="bold 11.5px Segoe UI, sans-serif",n.fillText(`[AI ${T.fromName} -> ${T.toName}]: ${T.text.slice(0,42)}`,_+14,g+b-14))}function hx(n,e,t,i,s,o,r,a,l){var x;const c=r==null?void 0:r.project,h=(c==null?void 0:c.name)||"SmartPOS Bán Hàng",d=(r==null?void 0:r.stageIndex)??0;n.fillStyle=t.headerBg,n.fillRect(28,26,e-56,52),n.strokeStyle=t.border,n.strokeRect(28,26,e-56,52),n.strokeStyle=s,n.lineWidth=3,n.beginPath(),n.arc(68,52,16,0,Math.PI*2),n.stroke(),n.fillStyle=s,n.beginPath(),n.arc(68,52,6,0,Math.PI*2),n.fill();const u=((l==null?void 0:l.opsTitle)||"").trim(),f=(l==null?void 0:l.opsMode)==="meeting"?`PHIÊN HỌP ĐIỀU HÀNH // ${h.toUpperCase()}`:(l==null?void 0:l.opsMode)==="kpi"?`BẢNG KPI VẬN HÀNH // ${h.toUpperCase()}`:(l==null?void 0:l.opsMode)==="kanban"?`KANBAN TOÀN CÔNG TY // ${h.toUpperCase()}`:`MRT SOFT HUB // ${h.toUpperCase()}`,v=u?u.toUpperCase():f;n.fillStyle=t.text,n.font=`bold ${Math.round(20*i)}px Segoe UI, sans-serif`,n.fillText(v.slice(0,36),98,60);const _=820;n.fillStyle=o?"rgba(244, 63, 94, 0.24)":t.subCardBg,n.fillRect(_,34,340,36),n.strokeStyle=s,n.strokeRect(_,34,340,36),n.fillStyle=o?"#fb7185":t.text,n.font=`bold ${Math.round(15*i)}px Consolas, monospace`;const m=(l==null?void 0:l.opsMode)==="meeting"?"● CHẾ ĐỘ HỌP • LEADER MRT CHỦ TRÌ":`● BƯỚC ${d+1}/6: ${(((x=r==null?void 0:r.currentDept)==null?void 0:x.shortName)||"").toUpperCase()}`;n.fillText(o?"● ALERT P1 DETECTED":m.slice(0,31),_+14,58);const p=((l==null?void 0:l.opsSubtitle)||"").trim();a!=null&&a.prompt?(n.fillStyle="rgba(245, 158, 11, 0.2)",n.fillRect(1180,34,700,36),n.strokeStyle="#f59e0b",n.strokeRect(1180,34,700,36),n.fillStyle=t.isLight?"#92400e":"#fde68a",n.font="bold 15px Segoe UI, sans-serif",n.fillText(`★ LỆNH TỐI CAO: ${a.prompt.slice(0,56)}`,1196,58)):(n.fillStyle=t.textMuted,n.font=`${Math.round(15*i)}px Consolas, monospace`,n.fillText(p?p.slice(0,62):`19 AI AGENTS  |  PHIÊN BẢN: ${(r==null?void 0:r.version)||"v1.0.0"}  |  BẢO HÀNH: ${(c==null?void 0:c.warrantyMonths)||24} THÁNG`,1185,58))}function dx(n,e,t,i,s,o,r,a,l,c,h,d){var g;const u=o==null?void 0:o.project,f=(o==null?void 0:o.stageIndex)??0,v=Math.round(((o==null?void 0:o.overallProgress)??.1)*100);Ot(n,30,96,810,550,d,c.cardBg,c.border),n.fillStyle=d,n.font=`bold ${Math.round(18*h)}px Segoe UI, sans-serif`,n.fillText("CHƯƠNG TRÌNH NGHỊ SỰ & NỘI DUNG CUỘC HỌP",52,134),n.fillStyle=c.textMuted,n.font=`${Math.round(13*h)}px Consolas, monospace`,n.fillText(`DỰ ÁN: ${((u==null?void 0:u.name)||"SmartPOS").toUpperCase()}  •  CHỦ TRÌ: LEADER MRT`,52,162),((l==null?void 0:l.opsAgenda)||Vs.opsAgenda).split(/\r?\n/).map(b=>b.trim()).filter(Boolean).slice(0,7).forEach((b,w)=>{const T=186+w*62;n.fillStyle=c.subCardBg,n.fillRect(52,T,766,52),n.strokeStyle=c.border,n.lineWidth=1.5,n.strokeRect(52,T,766,52),n.fillStyle=d,n.fillRect(52,T,8,52),n.fillStyle=c.text,n.font=`bold ${Math.round(16*h)}px Segoe UI, sans-serif`,n.fillText(b.slice(0,68),76,T+32)}),Ot(n,856,96,500,550,d,c.cardBg,c.border),n.fillStyle=d,n.font=`bold ${Math.round(16*h)}px Segoe UI, sans-serif`,n.fillText("BÁO CÁO TIẾN ĐỘ 6 PHÒNG BAN",878,132);const m=1106,p=228;n.strokeStyle=c.border,n.lineWidth=14,n.beginPath(),n.arc(m,p,64,0,Math.PI*2),n.stroke(),n.strokeStyle=v>=99?"#10b981":d,n.lineWidth=12,n.beginPath(),n.arc(m,p,64,-Math.PI/2,-Math.PI/2+v/100*Math.PI*2),n.stroke(),n.fillStyle=c.text,n.font="bold 28px Consolas, monospace",n.textAlign="center",n.fillText(`${v}%`,m,p+8),n.fillStyle=c.textMuted,n.font="12px Segoe UI, sans-serif",n.fillText("TIẾN ĐỘ TỔNG",m,p+28),n.textAlign="left",wt.forEach((b,w)=>{const T=316+w*52,A=o?o.stageStatus[w]:"pending",S=A==="done"?100:A==="active"?Math.round(((o==null?void 0:o.stageProgress)||.2)*100):0,M=A==="done"?"#10b981":A==="active"?d:"#64748b";n.fillStyle=c.subCardBg,n.fillRect(878,T,456,42),n.strokeStyle=M,n.lineWidth=A==="active"?2:1,n.strokeRect(878,T,456,42),n.fillStyle=c.text,n.font=`bold ${Math.round(13.5*h)}px Segoe UI, sans-serif`,n.fillText(b.name,892,T+26),n.fillStyle=M,n.font="bold 13px Consolas, monospace",n.fillText(A==="done"?"HOÀN TẤT 100%":A==="active"?`ĐANG CHẠY ${S}%`:"CHỜ",1205,T+26)}),Ot(n,1372,96,516,550,d,c.cardBg,c.border),n.fillStyle=d,n.font=`bold ${Math.round(16*h)}px Segoe UI, sans-serif`,n.fillText("Ý KIẾN THẢO LUẬN 19 AI AGENTS",1394,132);const x=((r==null?void 0:r.messages)||[]).slice(-5);x.length>0?x.forEach((b,w)=>{const T=152+w*74;n.fillStyle=c.subCardBg,n.fillRect(1394,T,472,64),n.strokeStyle=c.border,n.strokeRect(1394,T,472,64),n.fillStyle=c.id==="white-red"?d:b.fromColor||d,n.font=`bold ${Math.round(12.5*h)}px Segoe UI, sans-serif`,n.fillText(`${b.fromName} → ${b.toName}`,1408,T+22),n.fillStyle=c.text,n.font=`${Math.round(12.5*h)}px Segoe UI, sans-serif`,n.fillText((b.text||"").slice(0,58),1408,T+46)}):(n.fillStyle=c.textMuted,n.font="14px Segoe UI, sans-serif",n.fillText("Đang chờ phát biểu đầu tiên từ các trưởng nhóm...",1394,190));const y=((g=o==null?void 0:o.currentStageDetail)==null?void 0:g.deliverables)||[];n.fillStyle=c.brightCardBg,n.fillRect(1394,532,472,96),n.strokeStyle=d,n.lineWidth=2,n.strokeRect(1394,532,472,96),n.fillStyle=c.brightText,n.font="bold 13px Segoe UI, sans-serif",n.fillText(`MỤC TIÊU BƯỚC ${f+1}: ${(y[0]||"Hoàn thiện kiểm thử & phát hành").slice(0,44)}`,1410,566),n.font="12.5px Consolas, monospace",n.fillText(`Wave Sync • ${((u==null?void 0:u.platformLabels)||["Android","Windows"]).join(" + ")}`,1410,600)}function ux(n,e,t,i,s,o,r,a,l,c){const h=o==null?void 0:o.project,d=Math.round(((o==null?void 0:o.overallProgress)??.1)*100),u=((o==null?void 0:o.artifacts)||[]).filter(p=>p.ready).length,f=((o==null?void 0:o.artifacts)||[]).length||6,v=[["TIẾN ĐỘ HOÀN THÀNH",`${d}%`,`Bước ${((o==null?void 0:o.stageIndex)??0)+1}/6 đang chạy`,c],["TRẠNG THÁI SLA",s?"97.20%":"99.98%",s?"Đang xử lý cảnh báo P1":"Hệ thống ổn định",s?"#fb7185":"#10b981"],["ĐỘI NGŨ AI AGENT","19 / 19","Leader MRT + 18 Chuyên gia","#38bdf8"],["GÓI SẢN PHẨM",`${u} / ${f}`,`Phiên bản ${(o==null?void 0:o.version)||"v1.0.0"}`,"#f59e0b"]],_=445;v.forEach(([p,x,y,g],b)=>{const w=30+b*(_+20);Ot(n,w,96,_,178,g,a.cardBg,a.border),n.fillStyle=a.textMuted,n.font=`bold ${Math.round(13*l)}px Consolas, monospace`,n.fillText(p,w+20,128),n.fillStyle=a.id==="white-red"&&b===0?c:g,n.font="bold 54px Consolas, monospace",n.fillText(x,w+20,200),n.fillStyle=a.text,n.font=`${Math.round(13.5*l)}px Segoe UI, sans-serif`,n.fillText(y,w+20,244)}),Ot(n,30,294,1180,352,c,a.cardBg,a.border),n.fillStyle=c,n.font=`bold ${Math.round(16*l)}px Segoe UI, sans-serif`,n.fillText("HIỆU SUẤT & TIẾN ĐỘ TỪNG PHÒNG BAN",52,330),wt.forEach((p,x)=>{const y=352+x*46,g=o?o.stageStatus[x]:"pending",b=g==="done"?100:g==="active"?Math.round(((o==null?void 0:o.stageProgress)||.25)*100):0,w=g==="done"?"#10b981":g==="active"?c:"#64748b";n.fillStyle=a.text,n.font=`bold ${Math.round(14*l)}px Segoe UI, sans-serif`,n.fillText(p.name,52,y+24),n.fillStyle=a.subCardBg,n.fillRect(360,y+6,740,24),n.fillStyle=w,n.fillRect(360,y+6,740*b/100,24),n.strokeStyle=a.border,n.strokeRect(360,y+6,740,24),n.fillStyle=a.text,n.font="bold 14px Consolas, monospace",n.fillText(`${b}%`,1122,y+24)}),Ot(n,1230,294,658,352,c,a.cardBg,a.border),n.fillStyle=c,n.font=`bold ${Math.round(16*l)}px Segoe UI, sans-serif`,n.fillText("THROUGHPUT CI/CD & NỀN TẢNG MỤC TIÊU",1252,330),n.strokeStyle=c,n.lineWidth=3,n.beginPath();for(let p=0;p<=48;p++){const x=1252+p/48*610,y=420+Math.sin(i*2.6+p*.35)*38+Math.cos(i*1.4+p*.7)*14;p===0?n.moveTo(x,y):n.lineTo(x,y)}n.stroke(),((h==null?void 0:h.platformLabels)||["Android","Windows"]).slice(0,3).forEach((p,x)=>{const y=500+x*44;n.fillStyle=a.brightCardBg,n.fillRect(1252,y,614,34),n.strokeStyle=c,n.strokeRect(1252,y,614,34),n.fillStyle=a.brightText,n.font="bold 13.5px Segoe UI, sans-serif",n.fillText(`• NỀN TẢNG MỤC TIÊU ${x+1}: ${p.toUpperCase()} — READY FOR PIPELINE`,1268,y+22)})}function fx(n,e,t,i,s,o,r,a,l,c){const h=(e-60-70)/6;wt.forEach((d,u)=>{var g,b,w;const f=30+u*(h+14),v=96,_=550,m=o?o.stageStatus[u]:"pending",p=m==="done"?100:m==="active"?Math.round(((o==null?void 0:o.stageProgress)||.2)*100):0,x=m==="done"?"#10b981":m==="active"?c:a.border;Ot(n,f,v,h,_,x,a.cardBg,a.border),n.fillStyle=m==="active"?c:a.subCardBg,n.fillRect(f+2,v+2,h-4,48),n.fillStyle=m==="active"?"#ffffff":a.text,n.font=`bold ${Math.round(13.5*l)}px Segoe UI, sans-serif`,n.fillText(`${u+1}. ${d.shortName.toUpperCase()}`,f+12,v+31),n.fillStyle=m==="done"?"#10b981":m==="active"?c:a.textMuted,n.font="bold 14px Consolas, monospace",n.fillText(m==="done"?"HOÀN TẤT 100%":m==="active"?`ĐANG XỬ LÝ ${p}%`:"CHỜ BÀN GIAO",f+14,v+76),d.stations.forEach((T,A)=>{const S=v+96+A*84,M=Ft(T).model;n.fillStyle=a.subCardBg,n.fillRect(f+12,S,h-24,72),n.strokeStyle=x,n.lineWidth=m==="active"?1.8:1,n.strokeRect(f+12,S,h-24,72),n.fillStyle=a.text,n.font=`bold ${Math.round(12.5*l)}px Segoe UI, sans-serif`,n.fillText(`Agent #${T+1} (${M.name})`,f+22,S+25),n.fillStyle=a.textMuted,n.font="11.5px Segoe UI, sans-serif",n.fillText(d.summary.slice(0,30),f+22,S+50)});const y=((w=(b=(g=o==null?void 0:o.project)==null?void 0:g.stageDetails)==null?void 0:b[u])==null?void 0:w.deliverables)||[d.summary];n.fillStyle=a.brightCardBg,n.fillRect(f+12,v+368,h-24,166),n.strokeStyle=x,n.strokeRect(f+12,v+368,h-24,166),n.fillStyle=a.brightText,n.font="bold 12px Consolas, monospace",n.fillText("ĐẦU RA BƯỚC NÀY:",f+22,v+392),y.slice(0,3).forEach((T,A)=>{n.font="12px Segoe UI, sans-serif",n.fillText(`• ${T.slice(0,26)}`,f+22,v+422+A*34)})})}function px(n,e,t,i,s,o,r,a,l){var he,ge;const c=Qn[l==null?void 0:l.opsTheme]||Qn.cyber,h=Number(l==null?void 0:l.opsTextScale)||1,d=((he=o==null?void 0:o.currentDept)==null?void 0:he.color)||c.accent,u=s?"#fb7185":c.id==="white-red"?c.accent:d,f=o==null?void 0:o.project,v=(o==null?void 0:o.stageIndex)??0,_=Math.round(((o==null?void 0:o.overallProgress)??.1)*100);if(n.fillStyle=c.bg,n.fillRect(0,0,e,t),n.strokeStyle=c.border,n.lineWidth=3,n.strokeRect(14,14,e-28,t-28),Uo(n,14,14,e-28,t-28,u,38,5),hx(n,e,c,h,u,s,o,a,l),(l==null?void 0:l.opsMode)==="meeting"){dx(n,e,t,i,s,o,r,a,l,c,h,u);return}if((l==null?void 0:l.opsMode)==="kpi"){ux(n,e,t,i,s,o,l,c,h,u);return}if((l==null?void 0:l.opsMode)==="kanban"){fx(n,e,t,i,s,o,l,c,h,u);return}const m=30,p=92,x=790,y=400;if(Ot(n,m,p,x,y,u,c.cardBg,c.border),(l==null?void 0:l.opsShowRadar)!==!1){n.strokeStyle=c.grid,n.lineWidth=1;for(let E=m+40;E<m+x;E+=48)n.beginPath(),n.moveTo(E,p),n.lineTo(E,p+y),n.stroke();for(let E=p+40;E<p+y;E+=48)n.beginPath(),n.moveTo(m,E),n.lineTo(m+x,E),n.stroke();const I=m+395,Me=p+204;for(let E=50;E<=170;E+=40)n.strokeStyle=c.border,n.lineWidth=2,n.beginPath(),n.arc(I,Me,E,0,Math.PI*2),n.stroke();const z=i*1.1%(Math.PI*2);n.save(),n.translate(I,Me),n.rotate(z);const _e=n.createRadialGradient(0,0,10,0,0,170);_e.addColorStop(0,s?"rgba(244,63,94,0.42)":c.id==="white-red"?"rgba(220,38,38,0.28)":"rgba(34,211,238,0.38)"),_e.addColorStop(1,"rgba(34,211,238,0)"),n.fillStyle=_e,n.beginPath(),n.moveTo(0,0),n.arc(0,0,170,-.45,0),n.closePath(),n.fill(),n.restore();const ce=wt.map((E,V)=>{const re=-Math.PI/2+V/6*Math.PI*2;return{dept:E,x:I+Math.cos(re)*235,y:Me+Math.sin(re)*142}});for(let E=0;E<ce.length;E++){const V=ce[E],re=ce[(E+1)%ce.length];n.strokeStyle=E<v?"rgba(16, 185, 129, 0.55)":c.border,n.lineWidth=2,n.beginPath(),n.moveTo(V.x,V.y),n.lineTo(re.x,re.y),n.stroke(),n.strokeStyle=E===v?u:c.grid,n.lineWidth=E===v?3:1.2,n.beginPath(),n.moveTo(I,Me),n.lineTo(V.x,V.y),n.stroke()}const Le=ce[v],Ee=ce[Math.min(5,v+1)],L=i*.85%1;n.fillStyle=c.isLight?u:"#ffffff",n.beginPath(),n.arc(Le.x+(Ee.x-Le.x)*L,Le.y+(Ee.y-Le.y)*L,5.5,0,Math.PI*2),n.fill(),n.fillStyle=u,n.beginPath(),n.arc(I,Me,16,0,Math.PI*2),n.fill(),n.strokeStyle="#ffffff",n.lineWidth=2,n.stroke(),n.fillStyle=c.text,n.font="bold 12px Consolas, monospace",n.textAlign="center",n.fillText("SDLC HUB",I,Me+32),ce.forEach((E,V)=>{const re=o?o.stageStatus[V]:"pending",q=re==="done"?"#10b981":re==="active"?c.id==="white-red"?u:E.dept.color:"#64748b";n.fillStyle=q,n.beginPath(),n.arc(E.x,E.y,re==="active"?12:8,0,Math.PI*2),n.fill(),n.strokeStyle="#ffffff",n.lineWidth=1.5,n.stroke(),n.fillStyle=re==="active"?c.text:c.textMuted,n.font=`bold ${Math.round(13*h)}px Segoe UI, sans-serif`,n.fillText(E.dept.shortName.toUpperCase(),E.x,E.y-16)}),n.textAlign="left"}else n.fillStyle=u,n.font=`bold ${Math.round(18*h)}px Segoe UI, sans-serif`,n.fillText("CHƯƠNG TRÌNH & GHI CHÚ VẬN HÀNH",m+26,p+42),((l==null?void 0:l.opsAgenda)||Vs.opsAgenda).split(/\r?\n/).filter(Boolean).slice(0,5).forEach((Me,z)=>{n.fillStyle=c.text,n.font=`${Math.round(16*h)}px Segoe UI, sans-serif`,n.fillText(Me.slice(0,68),m+26,p+96+z*54)});const g=836,b=92,w=340,T=265;n.fillStyle=c.brightCardBg,n.fillRect(g,b,w,T),n.strokeStyle=u,n.lineWidth=2.5,n.strokeRect(g,b,w,T),n.fillStyle=c.id==="white-red"?u:"#0f172a",n.fillRect(g,b,w,32),n.fillStyle="#f8fafc",n.font="bold 13px Segoe UI, sans-serif",n.fillText(`GIAI ĐOẠN ${v+1}: ${(((ge=o==null?void 0:o.currentDept)==null?void 0:ge.name)||"").toUpperCase()}`,g+12,b+21);const A=o==null?void 0:o.currentStageDetail;n.fillStyle=c.brightText,n.font=`bold ${Math.round(14*h)}px Segoe UI, sans-serif`,n.fillText(((A==null?void 0:A.title)||"").slice(0,34),g+14,b+60),((A==null?void 0:A.deliverables)||[]).slice(0,5).forEach((I,Me)=>{n.fillStyle=u,n.fillRect(g+14,b+82+Me*34,8,8),n.fillStyle=c.brightText,n.font=`${Math.round(12.5*h)}px Segoe UI, sans-serif`,n.fillText(I.slice(0,42),g+30,b+90+Me*34)});const M=1192,C=92,P=696,F=335,O=10,G=(P-O)/2,$=(F-O*2)/3;(l==null?void 0:l.opsShowDeptGrid)!==!1?wt.forEach((I,Me)=>{const z=Me%2,_e=Math.floor(Me/2),ce=M+z*(G+O),Le=C+_e*($+O),Ee=o?o.stageStatus[Me]:"pending",L=Ee==="done"?100:Ee==="active"?Math.round(((o==null?void 0:o.stageProgress)||.2)*100):0,E=Ee==="active",V=c.id==="white-red"?u:I.color;n.fillStyle=E?c.brightCardBg:c.isLight?"#ffffff":"#dce7f2",n.fillRect(ce,Le,G,$),n.strokeStyle=E?V:Ee==="done"?"#10b981":"#94a3b8",n.lineWidth=E?3.5:1.8,n.strokeRect(ce,Le,G,$),n.fillStyle=E&&c.id==="white-red"?u:E?"#0f172a":"#1e293b",n.fillRect(ce,Le,G,25),n.fillStyle="#f8fafc",n.font="bold 11.5px Consolas, monospace",n.fillText(I.badgeLabel,ce+8,Le+17),n.fillStyle=E?"#ffffff":Ee==="done"?"#34d399":"#cbd5e1",n.fillText(`${L}%`,ce+G-44,Le+17),n.strokeStyle=Ee==="done"?"#10b981":V,n.lineWidth=2.4,n.beginPath();for(let re=0;re<=16;re++){const q=ce+12+re/16*(G-24),U=E?18:7,se=Le+66+Math.sin(i*(E?3.2:1.1)+re*.6+Me)*U;re===0?n.moveTo(q,se):n.lineTo(q,se)}n.stroke(),n.fillStyle=c.brightText,n.font="11px Segoe UI, sans-serif",n.fillText("3 nhân sự đang phụ trách",ce+12,Le+$-10)}):(Ot(n,M,C,P,F,u,c.cardBg,c.border),n.fillStyle=u,n.font=`bold ${Math.round(16*h)}px Segoe UI, sans-serif`,n.fillText("GHI CHÚ & CHỈ ĐẠO ĐIỀU HÀNH",M+20,C+34),((l==null?void 0:l.opsAgenda)||Vs.opsAgenda).split(/\r?\n/).filter(Boolean).slice(0,6).forEach((Me,z)=>{n.fillStyle=c.text,n.font=`${Math.round(15*h)}px Segoe UI, sans-serif`,n.fillText(Me.slice(0,62),M+20,C+78+z*42)}));const te=506,K=142;Ot(n,30,te,540,K,u,c.cardBg,c.border),n.fillStyle=u,n.font="bold 14px Segoe UI, sans-serif",n.fillText("ENGINEERING VELOCITY & CI/CD THROUGHPUT",46,te+24),n.strokeStyle=u,n.lineWidth=2.5,n.beginPath();for(let I=0;I<=50;I++){const Me=46+I/50*508,z=te+84+Math.sin(i*2.8+I*.35)*26+Math.cos(i*1.4+I*.7)*10;I===0?n.moveTo(Me,z):n.lineTo(Me,z)}n.stroke(),Ot(n,586,te,234,K,u,c.cardBg,c.border),n.fillStyle=u,n.font="bold 13px Segoe UI, sans-serif",n.fillText("RELEASE VERSION",600,te+24),n.fillStyle=c.text,n.font="bold 34px Consolas, monospace",n.fillText((o==null?void 0:o.version)||"v1.0.0",600,te+76),n.fillStyle="#10b981",n.font="13px Consolas, monospace",n.fillText(`Speed: ${(o==null?void 0:o.speed)||1}x ${o!=null&&o.paused?"(PAUSED)":"(LIVE)"}`,600,te+114),Ot(n,836,371,340,277,u,c.cardBg,c.border),n.fillStyle=u,n.font="bold 13px Segoe UI, sans-serif",n.fillText((l==null?void 0:l.opsShowAiFeed)!==!1?"TRAO ĐỔI GIỮA CÁC AI AGENT (VI)":"NHẬT KÝ THỰC THI HỆ THỐNG",852,396);const X=(l==null?void 0:l.opsShowAiFeed)!==!1?((r==null?void 0:r.messages)||[]).slice(-4):[];X.length>0?X.forEach((I,Me)=>{const z=420+Me*56;n.fillStyle=c.id==="white-red"?u:I.fromColor||u,n.font="bold 11.5px Segoe UI, sans-serif",n.fillText(`${I.fromName} → ${I.toName}`,852,z),n.fillStyle=c.text,n.font="11.5px Segoe UI, sans-serif";const _e=I.text||"";n.fillText(_e.slice(0,44),852,z+17),_e.length>44&&n.fillText(_e.slice(44,86),852,z+33)}):((o==null?void 0:o.activeLogs)||[]).slice(-7).forEach((Me,z)=>{n.fillStyle=Me.includes("TICKET")?"#f59e0b":c.text,n.font="11.5px Consolas, monospace",n.fillText(Me.slice(0,40),852,424+z*28)});const Y=1192,k=440;Ot(n,Y,k,285,208,u,c.cardBg,c.border);const N=Y+142,j=k+108;n.strokeStyle=c.border,n.lineWidth=14,n.beginPath(),n.arc(N,j,66,0,Math.PI*2),n.stroke(),n.strokeStyle=_>=99?"#10b981":u,n.lineWidth=11,n.beginPath(),n.arc(N,j,66,-Math.PI/2,-Math.PI/2+_/100*Math.PI*2),n.stroke(),n.fillStyle=c.text,n.font="bold 24px Consolas, monospace",n.textAlign="center",n.fillText(`${_}%`,N,j+6),n.font="11px Segoe UI, sans-serif",n.fillStyle=c.textMuted,n.fillText("TIẾN ĐỘ TỔNG",N,j+26),n.textAlign="left";const ae=1492,ie=440,ye=396,fe=208;n.fillStyle=c.brightCardBg,n.fillRect(ae,ie,ye,fe),n.strokeStyle=u,n.lineWidth=2.5,n.strokeRect(ae,ie,ye,fe),n.fillStyle=c.id==="white-red"?u:"#0f172a",n.fillRect(ae,ie,ye,28),n.fillStyle="#f8fafc",n.font="bold 12px Segoe UI, sans-serif",n.fillText("ĐẦU RA NỀN TẢNG MỤC TIÊU",ae+12,ie+19);const Ie=(f==null?void 0:f.platforms)||["android","windows"],ke={android:["ANDROID",".AAB / .APK (Google Play)"],windows:["WINDOWS",".MSIX / .EXE (Win 11 x64)"],web:["WEB / CLOUD","Docker + Kubernetes CDN"],ios:["IOS",".IPA (App Store Connect)"]};Ie.slice(0,4).forEach((I,Me)=>{const[z,_e]=ke[I]||[I.toUpperCase(),"Package"],ce=ie+46+Me*38;n.fillStyle="#ffffff",n.fillRect(ae+14,ce,ye-28,30),n.strokeStyle=v>=4?"#10b981":c.border,n.strokeRect(ae+14,ce,ye-28,30),n.fillStyle=c.brightText,n.font="bold 12px Consolas, monospace",n.fillText(z,ae+24,ce+19),n.fillStyle="#334155",n.font="12px Segoe UI, sans-serif",n.fillText(_e,ae+122,ce+19)})}function mx(n,e,t,i,s,o,r,a,l){var T,A;const c=Qn[l==null?void 0:l.opsTheme]||Qn.cyber,h=Number(l==null?void 0:l.opsTextScale)||1,d=s?"#fb7185":c.id==="white-red"?c.accent:((T=o==null?void 0:o.currentDept)==null?void 0:T.color)||c.accent;n.fillStyle=c.sideBg,n.fillRect(0,0,e,t),n.strokeStyle=c.border,n.lineWidth=2,n.strokeRect(10,10,e-20,t-20),Uo(n,10,10,e-20,t-20,d,26,3.5);const u=22,f=e-u*2,v=14,_=(t-u*2-v*2)/3;let m=u;n.fillStyle=c.brightCardBg,n.fillRect(u,m,f,_),n.strokeStyle=d,n.lineWidth=2,n.strokeRect(u,m,f,_),n.fillStyle=c.id==="white-red"?d:"#0f172a",n.fillRect(u,m,f,30),n.fillStyle="#f8fafc",n.font=`bold ${Math.round(14*h)}px Segoe UI, sans-serif`,n.fillText("SẢN PHẨM ĐẦU RA & GÓI PHÂN PHỐI",u+14,m+20),((o==null?void 0:o.artifacts)||[]).slice(0,5).forEach((S,M)=>{const C=m+44+M*30;n.fillStyle=S.ready?"#059669":"#64748b",n.font="bold 12px Consolas, monospace",n.fillText(S.ready?"[READY]":"[WAIT ]",u+16,C+12),n.fillStyle=c.brightText,n.font="13px Consolas, monospace",n.fillText(S.name,u+86,C+12),n.fillStyle=d,n.fillText(S.platform,u+f-92,C+12)}),m+=_+v,Ot(n,u,m,f,_,d,c.cardBg,c.border),n.fillStyle=d,n.font=`bold ${Math.round(14*h)}px Segoe UI, sans-serif`,n.fillText("BẢNG KANBAN VẬN HÀNH CÔNG TY PHẦN MỀM",u+14,m+24);const x=(f-28-30)/6;wt.forEach((S,M)=>{const C=u+14+M*(x+6),P=m+40,F=o?o.stageStatus[M]:"pending";n.fillStyle=c.subCardBg,n.fillRect(C,P,x,_-54),n.strokeStyle=F==="active"?d:c.border,n.strokeRect(C,P,x,_-54),n.fillStyle=c.text,n.font="bold 10.5px Consolas, monospace",n.fillText(S.shortName.slice(0,10),C+6,P+18);const O=F==="done"?"#059669":F==="active"?d:"#475569";for(let G=0;G<3;G++)n.fillStyle=O,n.fillRect(C+6,P+28+G*28,x-12,20)}),m+=_+v,Ot(n,u,m,f,_,d,c.cardBg,c.border),n.fillStyle=d,n.font=`bold ${Math.round(14*h)}px Segoe UI, sans-serif`,n.fillText("TRUNG TÂM BẢO HÀNH & CHĂM SÓC KHÁCH HÀNG",u+14,m+24);const y=(o==null?void 0:o.warrantyTickets)||[],g=[["THỜI HẠN BẢO HÀNH",`${((A=o==null?void 0:o.project)==null?void 0:A.warrantyMonths)||24} THÁNG`,"#10b981"],["PHIÊN BẢN PATCH",(o==null?void 0:o.version)||"v1.0.0",d],["TICKET ĐÃ XỬ LÝ",`${y.length} HOTFIX`,y.length>0?"#f59e0b":"#10b981"]],b=(f-28-16)/3;g.forEach(([S,M,C],P)=>{const F=u+14+P*(b+8),O=m+42;n.fillStyle=c.subCardBg,n.fillRect(F,O,b,74),n.strokeStyle=c.border,n.strokeRect(F,O,b,74),n.fillStyle=c.textMuted,n.font="11px Consolas, monospace",n.fillText(S,F+10,O+24),n.fillStyle=C,n.font="bold 16px Consolas, monospace",n.fillText(M,F+10,O+52)});const w=y[0];n.fillStyle=w?"#d97706":c.textMuted,n.font="12px Consolas, monospace",n.fillText(w?`Mới nhất: [${w.id}] ${w.title.slice(0,52)}`:"SLA 99.98% • Sẵn sàng tiếp nhận yêu cầu bảo hành & vá lỗi nóng 24/7",u+14,m+_-18)}function gx(n){const e=new Be,t=[],i=-6.82,s=2.8,o=2.85,r=[{id:"led-left",title:"Màn hình LED Trái — Quy trình 6 Giai đoạn",role:"SDLC Pipeline & Live Execution Console",x:-5.65,w:2.15,cw:512,ch:680,render:cx,focusPos:new D(-5.65,2.78,-3.55),focusTarget:new D(-5.65,2.8,i),desc:"Theo dõi tên phần mềm, nền tảng mục tiêu (Android/Windows/Web/iOS), tiến độ 6 bước từ Yêu cầu đến Bảo hành và log thực thi trực tiếp.",getMetrics:(W,N)=>{var j,ae,ie,ye,fe;return[{label:"Dự án",value:((ae=(j=N==null?void 0:N.project)==null?void 0:j.name)==null?void 0:ae.slice(0,20))||"SmartPOS",tone:"good"},{label:"Bước hiện tại",value:((ie=N==null?void 0:N.currentDept)==null?void 0:ie.shortName)||"1. Yêu cầu",tone:"warn"},{label:"Nền tảng",value:((fe=(ye=N==null?void 0:N.project)==null?void 0:ye.platformLabels)==null?void 0:fe.join(", "))||"Android, Win",tone:"good"},{label:"Trạng thái",value:W?"Cảnh báo P1":"Ổn định",tone:W?"crit":"good"}]}},{id:"led-center",title:"Màn hình LED Trung Tâm — Software Factory Core",role:"Điều phối 6 bộ phận & Sản lượng phát triển",x:-.38,w:8.1,cw:1920,ch:675,render:px,focusPos:new D(-.38,2.78,-1.85),focusTarget:new D(-.38,2.8,i),desc:"Radar điều phối 6 bộ phận (18 nhân sự), danh sách đầu ra của giai đoạn hiện tại, tiến độ tổng thể và mục tiêu build Android/Windows/Web.",getMetrics:(W,N)=>{var j,ae;return[{label:"Tiến độ tổng",value:`${Math.round(((N==null?void 0:N.overallProgress)||0)*100)}%`,tone:"good"},{label:"Phiên bản",value:(N==null?void 0:N.version)||"v1.0.0",tone:"good"},{label:"Bộ phận xử lý",value:((j=N==null?void 0:N.currentDept)==null?void 0:j.name)||"1. Yêu cầu & BA",tone:"warn"},{label:"Bảo hành SLA",value:`${((ae=N==null?void 0:N.project)==null?void 0:ae.warrantyMonths)||24} tháng`,tone:"good"}]}},{id:"led-right",title:"Màn hình LED Phải — Đóng gói, Kanban & Bảo hành",role:"Release Artifacts & Customer Warranty Desk",x:5.3,w:2.95,cw:700,ch:680,render:mx,focusPos:new D(5.3,2.78,-3.35),focusTarget:new D(5.3,2.8,i),desc:"Danh sách các gói sản phẩm được tạo ra (.AAB, .MSIX, .EXE, SRS, QA Report), bảng Kanban 6 bước và trung tâm bảo hành 24/7.",getMetrics:(W,N)=>[{label:"Gói sẵn sàng",value:`${((N==null?void 0:N.artifacts)||[]).filter(j=>j.ready).length}/${((N==null?void 0:N.artifacts)||[]).length}`,tone:"good"},{label:"Ticket bảo hành",value:`${((N==null?void 0:N.warrantyTickets)||[]).length} đã vá`,tone:"good"},{label:"Hotfix version",value:(N==null?void 0:N.version)||"v1.0.0",tone:"good"},{label:"SLA Uptime",value:W?"97.20%":"99.98%",tone:W?"crit":"good"}]}],a=[];let l="MRT SOFT HUB",c="#38bdf8";const h=document.createElement("canvas");h.width=1400,h.height=160;const d=h.getContext("2d"),u=new kt(h);u.colorSpace=mt,u.anisotropy=8;const f=6.2,v=.62,_=4.66,m=-.38,p=new B(new pe(f+.14,v+.1,.1),n.matteBlack);p.position.set(m,_,i-.04),p.castShadow=!0,e.add(p);const x=new ht({color:3718648}),y=new B(new pe(f+.14,.018,.11),x);y.position.set(m,_+v/2+.048,i-.036);const g=new B(new pe(f+.14,.018,.11),x);g.position.set(m,_-v/2-.048,i-.036),e.add(y,g);const b=new Ye({map:u,emissiveMap:u,emissive:new $e(16777215),emissiveIntensity:1.38,roughness:.2,metalness:.1}),w=new B(new St(f,v),b);w.position.set(m,_,i+.014),e.add(w);const T=new Xs(3718648,.35,6,1.5);T.position.set(m,_,i+.65),e.add(T);function A(W,N){l=(W||"MRT SOFT HUB").toUpperCase().slice(0,22),c=N||"#38bdf8",d.fillStyle="#060c18",d.fillRect(0,0,1400,160),d.fillStyle="rgba(56, 189, 248, 0.08)";for(let ae=16;ae<1400;ae+=16)for(let ie=12;ie<160;ie+=16)d.fillRect(ae,ie,3,3);Uo(d,18,14,1364,132,c,28,4),d.save(),d.textAlign="center",d.textBaseline="middle";const j=l.length>14?66:84;d.font=`900 ${j}px Segoe UI, system-ui, sans-serif`,d.shadowColor=c,d.shadowBlur=26,d.fillStyle=c,d.fillText(l,700,82),d.shadowBlur=10,d.fillStyle="#f8fafc",d.fillText(l,700,82),d.restore(),u.needsUpdate=!0,x.color.set(c),T.color.set(c)}A(l,c);let S={...Vs},M=0,C=!1,P=null,F=null,O=null,G=0;for(const W of r){const N=document.createElement("canvas");N.width=W.cw,N.height=W.ch;const j=N.getContext("2d");W.render(j,W.cw,W.ch,0,!1,null,null,null,S);const ae=new kt(N);ae.colorSpace=mt,ae.anisotropy=8;const ie=.14,ye=W.w+.1,fe=o+.1,Ie=new B(new pe(ye,fe,ie),n.matteBlack);Ie.position.set(W.x,s,i-ie/2),Ie.castShadow=!0,e.add(Ie);const ke=new Ye({map:ae,emissiveMap:ae,emissive:new $e(16777215),emissiveIntensity:1.12,roughness:.25,metalness:.05}),he=new B(new St(W.w,o),ke);he.position.set(W.x,s,i+.006),he.userData={interactable:!0,kind:"LED VIDEO WALL",id:W.id,title:W.title,role:W.role,desc:W.desc,canvas:N,focusPos:W.focusPos,focusTarget:W.focusTarget,getMetrics:W.getMetrics},e.add(he),t.push(he),a.push({cfg:W,ctx:j,texture:ae,screenMat:ke,housing:Ie,screenMesh:he})}function $(){for(const W of a)W.cfg.render(W.ctx,W.cfg.cw,W.cfg.ch,M,C,P,F,O,S),W.texture.needsUpdate=!0}function te(){const W=qe.clamp((Number(S.opsBrightness)||100)/100,.5,1.65),j=(Qn[S.opsTheme]||Qn.cyber).isLight?.78:1,ae=qe.lerp(1.06,1.42,G)*W*j;for(const ie of a)ie.screenMat.emissiveIntensity=ae;b.emissiveIntensity=qe.lerp(1.38,2.2,G),T.intensity=qe.lerp(.35,1.4,G)}let K=0;function X(W,N,j,ae,ie,ye=null){M=W,C=j,P=ae,F=ie,O=ye,K+=N,!(K<1/15)&&(K=0,$())}function Y(W){G=W,te()}function k(W,N){A(W,N)}function Z(W={}){S={...Vs,...S,...W};const N=a.find(ae=>ae.cfg.id==="led-left"),j=a.find(ae=>ae.cfg.id==="led-right");if(N){const ae=S.opsShowLeft!==!1;N.housing.visible=ae,N.screenMesh.visible=ae}if(j){const ae=S.opsShowRight!==!1;j.housing.visible=ae,j.screenMesh.visible=ae}te(),$()}return{group:e,interactables:t,update:X,setLightingMode:Y,setBrandSign:k,setOpsBoardConfig:Z}}function vx(n,e,t){const i=document.createElement("canvas");i.width=512,i.height=120;const s=i.getContext("2d"),o=new kt(i);o.colorSpace=mt,o.anisotropy=4;const r={canvas:i,ctx:s,tex:o};return Nu(r,n,e,t),r}function Nu(n,e,t,i){const{ctx:s,canvas:o,tex:r}=n;s.clearRect(0,0,o.width,o.height),s.fillStyle="#ffffff",s.beginPath(),s.roundRect(6,6,500,108,16),s.fill();const a=t==="active",l=t==="done";s.strokeStyle="#dc2626",s.lineWidth=a?5:3,s.stroke(),s.textAlign="center",s.textBaseline="middle",s.fillStyle="#dc2626",s.font="bold 27px Segoe UI, sans-serif",s.fillText(e.badgeLabel,256,46);const c=l?100:a?Math.round(i*100):0,h=l?"HOÀN TẤT 100%":a?`ĐANG XỬ LÝ • ${c}%`:"CHỜ BÀN GIAO";s.fillStyle="#b91c1c",s.font="bold 19px Consolas, monospace",s.fillText(h,256,86),s.textAlign="left",s.textBaseline="alphabetic",r.needsUpdate=!0}function _x(n,e,t,i=2){const s=(e||"").split(/\s+/),o=[];let r="";for(const a of s){const l=r?`${r} ${a}`:a;if(n.measureText(l).width>t&&r){if(o.push(r),r=a,o.length===i-1)break}else r=l}if(r&&o.length<i&&o.push(r),o.length===i&&s.join(" ").length>o.join(" ").length){const a=o[i-1];o[i-1]=a.length>3?`${a.slice(0,-3)}...`:`${a}...`}return o}function yx(n,e,t,i){const s=n.width,o=n.height;e.clearRect(0,0,s,o),e.fillStyle="rgba(7, 13, 24, 0.94)",e.beginPath(),e.roundRect(8,6,s-16,o-22,16),e.fill(),e.strokeStyle=i.color||"#38bdf8",e.lineWidth=3,e.stroke(),e.fillStyle=i.color||"#38bdf8",e.fillRect(14,14,7,o-38),e.fillStyle="rgba(7, 13, 24, 0.94)",e.beginPath(),e.moveTo(s/2-12,o-16),e.lineTo(s/2+12,o-16),e.lineTo(s/2,o-2),e.closePath(),e.fill(),e.fillStyle=i.color||"#7dd3fc",e.font="bold 20px Segoe UI, sans-serif",e.fillText(`${i.name} • ${i.modelName||`AI (${i.role})`}`,32,34),e.fillStyle="#f8fafc",e.font="19px Segoe UI, sans-serif",_x(e,i.text,s-52,2).forEach((a,l)=>{e.fillText(a,32,64+l*26)}),t.needsUpdate=!0}function xx(n,e){const t=new Be,i=n.stationIndex*.85,s=new Ye({color:n.skin,roughness:.65,metalness:.02}),o=new Ye({color:n.shirt,roughness:.72,metalness:.05}),r=new Ye({color:1975340,roughness:.78,metalness:.04}),a=new Ye({color:1710623,roughness:.8}),l=new Ye({color:e,emissive:e,emissiveIntensity:.8,roughness:.3}),c=new B(new pe(.28,.1,.22),r);c.position.set(0,.53,.63),c.castShadow=!0,t.add(c);for(const b of[-.085,.085]){const w=new B(new wn(.056,.24,6,10),r);w.rotation.x=Math.PI/2,w.position.set(b,.53,.45),w.castShadow=!0,t.add(w);const T=new B(new wn(.046,.29,6,10),r);T.position.set(b,.27,.31),T.castShadow=!0,t.add(T);const A=new B(new pe(.085,.055,.16),r);A.position.set(b,.03,.27),A.castShadow=!0,t.add(A)}const h=new Be;h.position.set(0,.57,.64),h.rotation.x=-.08;const d=new B(new je(.145,.125,.4,12),o);d.position.y=.2,d.scale.set(1.12,1,.72),d.castShadow=!0,h.add(d);const u=new B(new pe(.042,.06,.012),l);u.position.set(.055,.26,-.095),h.add(u);const f=new Be;f.position.set(0,.44,-.01);const v=new B(new je(.042,.048,.08,10),s);v.position.y=.02,f.add(v);const _=new B(new nn(.105,16,14),s);_.position.y=.115,_.scale.set(.95,1.05,.98),_.castShadow=!0,f.add(_);const m=new B(new nn(.112,14,12,0,Math.PI*2,0,Math.PI*.58),a);if(m.position.set(0,.126,.008),m.rotation.x=.22,f.add(m),n.hair==="bob"){const b=new B(new pe(.21,.16,.1),a);b.position.set(0,.07,.065),f.add(b)}else if(n.hair==="bun"){const b=new B(new nn(.048,10,10),a);b.position.set(0,.16,.115),f.add(b)}if(n.glasses){const b=new Ye({color:988970,roughness:.2,metalness:.6}),w=new B(new pe(.145,.028,.014),b);w.position.set(0,.118,-.1),f.add(w)}if(n.headset){const b=new Ye({color:1976635,roughness:.4,metalness:.5}),w=new B(new Kn(.115,.012,8,18,Math.PI),b);w.position.set(0,.13,0),f.add(w);for(const T of[-.112,.112]){const A=new B(new je(.032,.032,.025,12),b);A.rotation.z=Math.PI/2,A.position.set(T,.115,0),f.add(A)}}h.add(f);const p=b=>{const w=new Be;w.position.set(b*.175,.36,0);const T=new B(new wn(.038,.2,6,8),o);T.position.set(0,-.1,-.06),T.rotation.x=.55,T.castShadow=!0,w.add(T);const A=new Be;A.position.set(0,-.19,-.13);const S=new B(new wn(.032,.2,6,8),s);return S.rotation.x=Math.PI/2-.12,S.position.set(-b*.02,-.01,-.12),S.castShadow=!0,A.add(S),w.add(A),h.add(w),A},x=p(-1),y=p(1);t.add(h);const g=new B(new pe(.46,.85,.52),new ht({visible:!1}));return g.position.set(0,.88,.55),t.add(g),{group:t,hitMesh:g,torsoGroup:h,headGroup:f,leftForearm:x,rightForearm:y,badgeMat:l,empSpec:n,phase:i}}function Mx(n,e,t){const i=new Be,s=[],o=[],r=new D(-.38,2.75,-6.5);for(const M of n){const{dept:C,positions:P}=M,F=new D;P.forEach(k=>F.add(k)),F.divideScalar(P.length);const O=P[0].distanceTo(P[P.length-1])+1.45,G=new D().subVectors(P[P.length-1],P[0]).normalize(),$=Math.atan2(-G.z,G.x),te=new ht({color:C.colorHex,transparent:!0,opacity:.22}),K=new B(new St(O,.1),te);K.rotation.x=-Math.PI/2,K.rotation.z=$,K.position.set(F.x,.008,F.z+.52),i.add(K);const X=new ht({color:C.colorHex,transparent:!0,opacity:.05}),Y=new B(new St(O,1.65),X);Y.rotation.x=-Math.PI/2,Y.rotation.z=$,Y.position.set(F.x,.005,F.z+.15),i.add(Y),s.push({dept:C,strip:K,pad:Y,stripMat:te,padMat:X,center:F.clone()})}const a=new nn(.05,10,10);for(let M=0;M<18;M++){const C=new ht({color:3718648,transparent:!0,opacity:.85}),P=new B(a,C);P.visible=!1,i.add(P),o.push({mesh:P,mat:C,offset:M/18})}const l=[0,1].map(()=>{const M=document.createElement("canvas");M.width=560,M.height=128;const C=M.getContext("2d"),P=new kt(M);P.colorSpace=mt;const F=new Mc({map:P,transparent:!0,depthWrite:!1}),O=new pu(F);return O.scale.set(2.15,.5,1),O.visible=!1,i.add(O),{canvas:M,ctx:C,tex:P,sprite:O,mat:F,lastKey:""}}),c=24,h=new Ht;h.setAttribute("position",new mn(new Float32Array(c*3),3));const d=new mu({color:3718648,transparent:!0,opacity:.85}),u=new $_(h,d);u.visible=!1,i.add(u);const f=[0,1,2,3].map(M=>{const C=new ht({color:16777215,transparent:!0,opacity:.95}),P=new B(new nn(.06,10,10),C);return P.visible=!1,i.add(P),{mesh:P,mat:C,offset:M/4}}),v=new D,_=new D,m=new D,p=new D,x=new D,y=new yu(m,x,p);let g=!0,b=!1;function w(M){if(g=!!M,!g)for(const C of l)C.sprite.visible=!1}function T(M){b=!!M}function A(M){const C=!!M;for(const P of s)P.strip&&(P.strip.visible=C),P.pad&&(P.pad.visible=C)}function S(M,C,P){const F=C.stageIndex,O=C.currentDept,G=new Set(((P==null?void 0:P.activeBubbles)||[]).map(Y=>Y.stationIndex));for(const Y of e){const k=Y.empSpec.deptId===O.id,Z=G.has(Y.empSpec.stationIndex),N=M*(b?.75:k?2.4:1)+Y.phase;if(b)Y.torsoGroup.rotation.x=-.02+Math.sin(N*1.1)*.022,Y.leftForearm.rotation.x=Z?-.22+Math.sin(N*4.2)*.14:-.14,Y.rightForearm.rotation.x=Z?-.26+Math.cos(N*4.5)*.16:-.12,Y.headGroup.rotation.x=Z?-.05:Math.sin(M*.4+Y.phase)*.05,Y.headGroup.rotation.y=Z?Math.sin(M*3.2+Y.phase)*.25:Math.sin(M*.55+Y.phase)*.16;else{Y.torsoGroup.rotation.x=-.08+Math.sin(N*1.1)*.025,Y.leftForearm.rotation.x=Math.sin(N*6.5)*(k?.09:.035),Y.rightForearm.rotation.x=Math.cos(N*7.1)*(k?.09:.035);const j=Math.sin(M*.45+Y.phase);Y.headGroup.rotation.x=Z?-.1:j>.72?-.16:.04,Y.headGroup.rotation.y=Z?Math.sin(M*4.5+Y.phase)*.22:Math.sin(M*.55+Y.phase)*.08}Y.badgeMat.emissiveIntensity=Z?2.6:k?1.8:.45}for(let Y=0;Y<s.length;Y++){const k=s[Y],Z=C.stageStatus[Y];if(Z==="active"){const W=.55+Math.sin(M*4.2)*.25;k.stripMat.color.setHex(k.dept.colorHex),k.stripMat.opacity=W,k.padMat.color.setHex(k.dept.colorHex),k.padMat.opacity=.14+Math.sin(M*4.2)*.05}else Z==="done"?(k.stripMat.color.setHex(1096065),k.stripMat.opacity=.32,k.padMat.color.setHex(1096065),k.padMat.opacity=.04):(k.stripMat.color.setHex(k.dept.colorHex),k.stripMat.opacity=.12,k.padMat.opacity=.015)}const $=n[F],te=n[Math.min(5,F+1)];if($)for(let Y=0;Y<o.length;Y++){const k=o[Y];if(k.mesh.visible=!C.paused,C.paused)continue;const Z=(M*.55+k.offset)%1,W=Y%$.positions.length,N=$.positions[W],j=Y%3===0&&F<5,ae=j?te.positions[W]:r;_.lerpVectors(N,ae,.5),_.y+=j?1.85:2.35;const ie=1-Z;v.set(0,0,0).addScaledVector(N,ie*ie).addScaledVector(_,2*ie*Z).addScaledVector(ae,Z*Z),k.mesh.position.copy(v),k.mesh.position.y+=.95*ie,k.mat.color.setHex(O.colorHex),k.mat.opacity=Math.sin(Z*Math.PI)*.95}const K=g?(P==null?void 0:P.activeBubbles)||[]:[];for(let Y=0;Y<l.length;Y++){const k=l[Y],Z=K[Y];if(!Z||!t[Z.stationIndex]){k.sprite.visible=!1;continue}const W=`${Z.stationIndex}:${Z.text}`;k.lastKey!==W&&(k.lastKey=W,yx(k.canvas,k.ctx,k.tex,Z));const N=t[Z.stationIndex],j=Z.stationIndex===18?N.y+2.54:1.64;k.sprite.visible=!0,k.sprite.position.set(N.x,j+Math.sin(M*3+Y)*.03,N.z+(Z.stationIndex===18?.05:.35)),k.mat.opacity=Math.min(1,Z.ttl*1.4)}const X=P==null?void 0:P.activeLink;if(X&&t[X.fromStation]&&t[X.toStation]){m.copy(t[X.fromStation]).add(new D(0,1.25,.4)),p.copy(t[X.toStation]).add(new D(0,1.25,.4)),x.lerpVectors(m,p,.5),x.y+=1.35;const Y=y.getPoints(c-1),k=h.getAttribute("position");for(let W=0;W<Y.length;W++)k.setXYZ(W,Y[W].x,Y[W].y,Y[W].z);k.needsUpdate=!0;const Z=Math.min(1,X.ttl/.6);d.color.setHex(X.colorHex),d.opacity=.72*Z,u.visible=!0;for(const W of f){const N=(M*1.45+W.offset)%1;y.getPoint(N,W.mesh.position),W.mat.color.setHex(X.colorHex),W.mat.opacity=Math.sin(N*Math.PI)*Z,W.mesh.visible=!0}}else{u.visible=!1;for(const Y of f)Y.mesh.visible=!1}}return{group:i,update:S,setBubblesVisible:w,setMeetingMode:T,setFloorZonesVisible:A}}const bx=Object.fromEntries(wt.map(n=>[n.id,n]));function rd(n,e,t,i,s,o,r,a,l){var x;const c=o==null?void 0:o.project,h=c?c.name:"SmartPOS Bán Hàng",d=c?c.platformLabels.join(" + "):"Android + Windows",u=o?o.stageStatus[s.index]:"active",f=u==="done"?100:u==="active"?Math.round(((o==null?void 0:o.stageProgress)||.2)*100):0,v=(x=c==null?void 0:c.stageDetails)==null?void 0:x[s.index],_=(r==null?void 0:r.currentAction)||s.summary,m=Ft(i.stationIndex);if(s.id==="intake"||s.id==="planning"&&i.stationIndex===5){n.fillStyle="#f1f5f9",n.fillRect(0,0,e,t),n.fillStyle="#0f172a",n.fillRect(0,0,e,34),n.fillStyle=s.color,n.fillRect(12,10,14,14),n.fillStyle="#f8fafc",n.font="bold 13px Segoe UI, sans-serif",n.fillText(`${s.shortName} • ${i.name}`,34,22),n.fillStyle="#ffffff",n.fillRect(14,46,e-28,t-60),n.strokeStyle="#cbd5e1",n.strokeRect(14,46,e-28,t-60),n.fillStyle="#0f172a",n.font="bold 14px Segoe UI, sans-serif",n.fillText(h.slice(0,34),26,72),n.fillStyle="#0284c7",n.font="bold 12px Consolas, monospace",n.fillText(`Nền tảng: ${d} | ${f}%`,26,94),(v?v.deliverables:[s.summary]).slice(0,3).forEach((g,b)=>{n.fillStyle=u==="done"?"#059669":"#334155",n.font="12px Segoe UI, sans-serif",n.fillText(`• ${g.slice(0,48)}`,26,126+b*32)}),n.fillStyle="#0f172a",n.fillRect(14,t-38,e-28,24),n.fillStyle=s.color,n.font="bold 11px Segoe UI, sans-serif",n.fillText(`${m.model.name}: ${_.slice(0,44)}`,22,t-22);return}if(n.fillStyle="#0b1120",n.fillRect(0,0,e,t),n.fillStyle="#131c31",n.fillRect(0,0,e,30),n.fillStyle=s.color,n.fillRect(0,0,6,30),n.fillStyle="#e2e8f0",n.font="bold 12px Consolas, monospace",n.fillText(`${i.role} (${i.name})`,14,19),n.fillStyle=u==="done"?"#34d399":u==="active"?s.color:"#64748b",n.fillText(`${f}%`,e-48,19),s.id==="planning"){n.fillStyle="#94a3b8",n.font="bold 12px Segoe UI, sans-serif",n.fillText(`KIẾN TRÚC: ${h.slice(0,32)}`,16,52);const y=[[34,84,118,52,"UI / Client",d.split("+")[0].trim()],[194,84,124,52,"Core API","Auth & Sync"],[358,84,120,52,"Cloud DB","Offline Cache"],[194,178,124,52,"CI / CD","Auto Sign"]];n.strokeStyle="#38bdf8",n.lineWidth=2,n.beginPath(),n.moveTo(152,110),n.lineTo(194,110),n.moveTo(318,110),n.lineTo(358,110),n.moveTo(256,136),n.lineTo(256,178),n.stroke();for(const[g,b,w,T,A,S]of y)n.fillStyle="#111c33",n.fillRect(g,b,w,T),n.strokeStyle=s.color,n.strokeRect(g,b,w,T),n.fillStyle="#f8fafc",n.font="bold 12px Segoe UI, sans-serif",n.fillText(A,g+10,b+22),n.fillStyle="#94a3b8",n.font="11px Consolas, monospace",n.fillText(S.slice(0,14),g+10,b+40)}else if(s.id==="build"){const y=i.stationIndex===10,g=i.stationIndex===9,b=g?"MainActivity.kt":y?"PosShellWindow.cs":"SyncService.ts";n.fillStyle="#0f172a",n.fillRect(0,30,108,t-30),n.fillStyle="#38bdf8",n.font="11px Consolas, monospace",["src/",`  ${b}`,"  api.ts","  store.db"].forEach((T,A)=>{n.fillStyle=A===1?"#f8fafc":"#64748b",n.fillText(T,8,54+A*20)}),(g?["@Composable fun PosScreen() {","  val state by vm.uiState.collect()","  Scaffold(topBar = { AppBar() }) {","    QrScannerCard(onPay = vm::pay)","  }","}"]:y?["public sealed partial class MainWin {","  private readonly PosSync _sync;","  public async Task PrintReceipt() {","    await EscPosPrinter.FlushAsync();","  }","}"]:["export async function syncOrder(dto) {","  await db.tx(async (trx) => {","    return trx.upsert(dto);","  });","}"]).forEach((T,A)=>{n.fillStyle=A%2===0?"#7dd3fc":"#a7f3d0",n.font="12px Consolas, monospace",n.fillText(T,120,62+A*26)}),n.fillStyle="#1e293b",n.fillRect(120,t-42,e-140,14),n.fillStyle=s.color,n.fillRect(120,t-42,(e-140)*f/100,14),Math.floor(a*2)%2===0&&(n.fillStyle="#38bdf8",n.fillRect(390,174,3,14))}else if(s.id==="testing")n.fillStyle="#fbbf24",n.font="bold 13px Consolas, monospace",n.fillText(`QA SUITE // ${h.slice(0,28)}`,16,54),(v?v.deliverables:["Android E2E","Windows Installer QA"]).slice(0,4).forEach((g,b)=>{const w=u==="done"||u==="active"&&f>=(b+1)*22;n.fillStyle=w?"#10b981":"#f59e0b",n.font="bold 12px Consolas, monospace",n.fillText(w?"[PASS]":"[RUN ]",16,90+b*34),n.fillStyle="#e2e8f0",n.font="12px Segoe UI, sans-serif",n.fillText(g.slice(0,44),76,90+b*34)}),n.fillStyle=l?"#fb7185":"#34d399",n.font="bold 13px Consolas, monospace",n.fillText(l?"BUG ALERT: CHECKING TRACE...":"COVERAGE: 94.6% • 0 CRITICAL",16,t-24);else if(s.id==="release")n.fillStyle="#34d399",n.font="bold 13px Consolas, monospace",n.fillText(`RELEASE & SIGNING // ${(o==null?void 0:o.version)||"v1.0.0"}`,16,54),((o==null?void 0:o.artifacts)||[]).filter(g=>g.stage===4).slice(0,4).forEach((g,b)=>{n.fillStyle="#111c33",n.fillRect(16,74+b*42,e-32,34),n.strokeStyle=g.ready?"#10b981":"#334155",n.strokeRect(16,74+b*42,e-32,34),n.fillStyle="#f8fafc",n.font="12px Consolas, monospace",n.fillText(g.name,26,95+b*42),n.fillStyle=g.ready?"#34d399":"#fbbf24",n.fillText(g.ready?"SIGNED":"BUILDING",e-92,95+b*42)});else{n.fillStyle="#2dd4bf",n.font="bold 13px Consolas, monospace",n.fillText(`BẢO HÀNH & SLA // ${(c==null?void 0:c.warrantyMonths)||24} THÁNG`,16,54);const y=(o==null?void 0:o.warrantyTickets)||[];y.length>0?y.slice(0,3).forEach((g,b)=>{n.fillStyle="#11222b",n.fillRect(16,76+b*48,e-32,40),n.strokeStyle="#14b8a6",n.strokeRect(16,76+b*48,e-32,40),n.fillStyle="#5eead4",n.font="bold 11px Consolas, monospace",n.fillText(`${g.id} • ${g.version} • ${g.status}`,24,93+b*48),n.fillStyle="#e2e8f0",n.font="11px Segoe UI, sans-serif",n.fillText(g.title.slice(0,48),24,110+b*48)}):(n.fillStyle="#34d399",n.font="bold 26px Consolas, monospace",n.fillText("SLA 99.98% HEALTHY",16,120),n.fillStyle="#94a3b8",n.font="12px Segoe UI, sans-serif",n.fillText("Đang giám sát Crashlytics, Sentry & Auto-Updater",16,155),n.fillText(`Phiên bản đang chạy: ${(o==null?void 0:o.version)||"v1.0.0"}`,16,182)),n.strokeStyle=l?"#fb7185":"#2dd4bf",n.lineWidth=2,n.beginPath();for(let g=0;g<=20;g++){const b=16+g/20*(e-32),w=t-42+Math.sin(a*2.5+g*.6)*8;g===0?n.moveTo(b,w):n.lineTo(b,w)}n.stroke()}n.fillStyle="rgba(15, 23, 42, 0.94)",n.fillRect(0,t-26,e,26),n.fillStyle=s.color,n.fillRect(0,t-26,4,26),n.fillStyle="#e2e8f0",n.font="bold 11px Segoe UI, sans-serif",n.fillText(`${m.model.name}: ${_.slice(0,45)}`,12,t-9)}function Sx(n){const e=new Be,t=new B(new je(.032,.038,.06,12),n.chrome);t.position.y=.09,e.add(t);const i=new pe(.024,.022,.3),s=new je(.024,.024,.024,12);for(let c=0;c<5;c++){const h=c/5*Math.PI*2,d=new Be;d.rotation.y=h;const u=new B(i,n.chrome);u.position.set(0,.065,.14),u.rotation.x=.14,u.castShadow=!0,d.add(u);const f=new B(s,n.matteBlack);f.rotation.z=Math.PI/2,f.position.set(0,.024,.27),d.add(f),e.add(d)}const o=new B(new je(.022,.026,.36,14),n.chrome);o.position.y=.26,o.castShadow=!0,e.add(o);const r=.46,a=new B(new pe(.49,.052,.46),n.leather);a.position.set(0,r,.02),a.rotation.x=-.04,a.castShadow=!0,a.receiveShadow=!0,e.add(a);const l=new B(new pe(.47,.56,.045),n.leather);l.position.set(0,.75,.22),l.rotation.x=.14,l.castShadow=!0,l.receiveShadow=!0,e.add(l);for(const c of[-.255,.255]){const h=new B(new pe(.018,.56,.036),n.chrome);h.position.set(c,.75,.22),h.rotation.x=.14,h.castShadow=!0,e.add(h);const d=new B(new pe(.018,.034,.46),n.chrome);d.position.set(c,r,.02),d.rotation.x=-.04,e.add(d);const u=new B(new pe(.032,.022,.34),n.chrome);u.position.set(c,.65,.05),u.castShadow=!0,e.add(u);const f=new B(new pe(.022,.19,.022),n.chrome);f.position.set(c,.56,-.11),f.rotation.x=.16,e.add(f)}return e}function ad(n,e,t,i){const s=new Be,o=n-.06,r=e-.09,a=new B(new pe(o,r,.014),i.luxuryGlass);a.position.y=e/2+.012,a.renderOrder=2,s.add(a);const l=new St(o-.01,r-.01);for(const p of[.008,-.008]){const x=new B(l,i.luxuryGlassSheen);x.position.set(0,e/2+.012,p),p<0&&(x.rotation.y=Math.PI),x.renderOrder=3,s.add(x)}const c=new B(new pe(o,.012,.016),i.luxuryGlassEdge);c.position.set(0,e/2+.012+r/2-.006,0),c.renderOrder=3,s.add(c);const h=new B(new pe(n,.05,.048),i.matteBlack);h.position.y=.025,h.castShadow=!0;const d=new B(new pe(n,.012,.052),i.champagneGold);d.position.y=.054;const u=new B(new pe(n,.032,.036),i.champagneGold);u.position.y=e-.014,u.castShadow=!0;const f=new B(new pe(.028,e,.036),i.champagneGold);f.position.set(-n/2+.014,e/2,0),f.castShadow=!0;const v=new B(new pe(.028,e,.036),i.champagneGold);v.position.set(n/2-.014,e/2,0),v.castShadow=!0;const _=new je(.024,.024,.034,16);for(const p of[-n/2+.055,n/2-.055])for(const x of[.16,e-.16]){const y=new B(_,i.champagneGold);y.rotation.x=Math.PI/2,y.position.set(p,x,0),s.add(y)}const m=new B(new pe(n-.08,.008,.04),new ht({color:t,transparent:!0,opacity:.88}));return m.position.y=e+.005,s.add(h,d,u,f,v,m),s}function Ex(n,e,t){const i=new Be;for(const f of[-.48,.48]){const v=new B(new pe(.048,.09,.052),t.champagneGold);v.position.set(f,e+.035,0),v.castShadow=!0,i.add(v);const _=new B(new je(.014,.014,.062,12),t.champagneGold);_.rotation.x=Math.PI/2,_.position.set(f,e+.035,0),i.add(_)}const s=new B(new pe(1.64,.4,.032),t.champagneGold);s.position.set(0,e+.235,0),s.castShadow=!0,i.add(s);const o=new B(new pe(1.62,.38,.038),t.matteBlack);o.position.set(0,e+.235,0),o.castShadow=!0,i.add(o);const r=new ht({color:14427686}),a=new B(new pe(1.62,.014,.044),r);a.position.set(0,e+.436,0),i.add(a);const l=vx(n,"pending",0),c=new Ye({map:l.tex,emissiveMap:l.tex,emissive:new $e(16777215),emissiveIntensity:.42,roughness:.32,metalness:.06}),h=new St(1.56,.34),d=new B(h,c);d.position.set(0,e+.235,.021),i.add(d);const u=new B(h,c);return u.position.set(0,e+.235,-.021),u.rotation.y=Math.PI,i.add(u),{group:i,badgeData:l,faceMat:c,accentMat:r,dept:n,lastKey:""}}function wx(n){const e=new Be,t=.74,i=.75,s=new B(new pe(9.2,.046,2.5),n.deskTop);s.position.set(0,t-.023,i),s.castShadow=!0,s.receiveShadow=!0,e.add(s);const o=new B(new pe(9.26,.036,2.56),n.oakWood);o.position.set(0,t-.03,i),e.add(o);const r=new B(new pe(9.29,.016,2.59),n.champagneGold);r.position.set(0,t-.048,i),e.add(r);const a=new B(new pe(7.2,.014,.82),n.luxuryGlass);a.position.set(0,t+.007,i),a.renderOrder=2,e.add(a);const l=new B(new pe(6.8,.008,.05),new ht({color:3718648,transparent:!0,opacity:.85}));l.position.set(0,t+.004,i),e.add(l);for(const c of[-3.1,0,3.1]){const h=new B(new je(.24,.32,t-.06,20),n.darkMetal);h.position.set(c,(t-.06)/2,i),h.castShadow=!0,e.add(h);const d=new B(new je(.56,.62,.035,24),n.champagneGold);d.position.set(c,.018,i),d.receiveShadow=!0,e.add(d)}return e}function Tx(n){const e=new Be,t=.74,i=[{x:-3.45,z:.35,w:1.05,d:5.6,legs:[-1.8,.35,2.3]},{x:3.45,z:.35,w:1.05,d:5.6,legs:[-1.8,.35,2.3]},{x:0,z:2.85,w:7.95,d:1.05,legs:[-2.1,0,2.1],isHorizontal:!0}];for(const a of i){const l=new B(new pe(a.w,.044,a.d),n.deskTop);l.position.set(a.x,t-.022,a.z),l.castShadow=!0,l.receiveShadow=!0,e.add(l);const c=new B(new pe(a.w+.04,.02,a.d+.04),n.champagneGold);c.position.set(a.x,t-.046,a.z),e.add(c);for(const h of a.legs){const d=a.isHorizontal?h:a.x,u=a.isHorizontal?a.z:h,f=new B(new je(.11,.14,t-.05,14),n.darkMetal);f.position.set(d,(t-.05)/2,u),f.castShadow=!0,e.add(f);const v=new B(new je(.28,.3,.026,16),n.chrome);v.position.set(d,.013,u),e.add(v)}}const s=new B(new je(.58,.68,.42,24),n.matteBlack);s.position.set(0,.21,.35),s.castShadow=!0;const o=new B(new Kn(.48,.02,10,32),n.champagneGold);o.rotation.x=Math.PI/2,o.position.set(0,.43,.35);const r=new B(new je(.42,.42,.02,24),new ht({color:3718648,transparent:!0,opacity:.72}));return r.position.set(0,.43,.35),e.add(s,o,r),e}function Ax(n){const e=new Be,t=.74,i=.85,s=3.65,o=2.25,r=new Mu;r.absarc(0,0,s,0,Math.PI*2,!1);const a=new Br;a.absarc(0,0,o,0,Math.PI*2,!0),r.holes.push(a);const l=new Ac(r,{depth:.044,bevelEnabled:!0,bevelThickness:.008,bevelSize:.012,bevelSegments:2,curveSegments:48});l.rotateX(Math.PI/2);const c=new B(l,n.deskTop);c.position.set(0,t,i),c.castShadow=!0,c.receiveShadow=!0,e.add(c);const h=new B(new Kn(s+.015,.018,10,64),n.champagneGold);h.rotation.x=Math.PI/2,h.position.set(0,t-.024,i);const d=new B(new Kn(o-.015,.018,10,48),n.champagneGold);d.rotation.x=Math.PI/2,d.position.set(0,t-.024,i),e.add(h,d);const u=new B(new je(1.15,1.15,.022,36),n.luxuryGlass);u.position.set(0,.48,i),u.renderOrder=2;const f=new B(new je(.32,.44,.46,20),n.matteBlack);f.position.set(0,.23,i);const v=new B(new Kn(1.16,.018,10,48),new ht({color:3718648,transparent:!0,opacity:.8}));v.rotation.x=Math.PI/2,v.position.set(0,.49,i),e.add(f,u,v);const _=(s+o)/2;for(let m=0;m<6;m++){const p=m/6*Math.PI*2,x=Math.sin(p)*_,y=i+Math.cos(p)*_,g=new B(new je(.09,.12,t-.04,14),n.darkMetal);g.position.set(x,(t-.04)/2,y),g.castShadow=!0,e.add(g)}return e}function Cx(n,e,t){for(;n.children.length>0;)n.remove(n.children[0]);const i=.74;for(const s of e){const o=-Math.sin(s.rotY),r=-Math.cos(s.rotY),a=s.pos.x+o*.58,l=s.pos.z+r*.58,c=new Be;c.position.set(a,i,l),c.rotation.y=s.rotY;const h=new B(new pe(.28,.012,.19),t.chrome);h.position.set(-.04,.006,0);const d=new B(new pe(.28,.18,.01),t.matteBlack);d.position.set(-.04,.095,-.092),d.rotation.x=.24;const u=new B(new St(.25,.155),new ht({color:959977}));u.position.set(-.04,.096,-.085),u.rotation.x=.24;const f=new B(new je(.036,.042,.022,12),t.matteBlack);f.position.set(.16,.011,-.02);const v=new B(new je(.006,.008,.22,8),t.champagneGold);v.position.set(.16,.12,.01),v.rotation.x=.28;const _=new B(new nn(.012,8,8),new ht({color:1096065}));_.position.set(.16,.22,.042),c.add(h,d,u,f,v,_),n.add(c)}}function Rx(n,e=null){const t=new Be,i=new Be;t.add(i);const s=[],o=[],r=[],a=[],l=new Array(19);e&&(l[18]=e.clone());const c=[{name:"Dãy Sau",zCenter:-1.15,segW:1.48,wingAngle:qe.degToRad(14.5)},{name:"Dãy Trước",zCenter:2.35,segW:1.62,wingAngle:qe.degToRad(15)}],h=.74,d=.036,u=.82;let f=0;for(const k of c){const Z=new Be,W=new B(new pe(k.segW*.42,d,u*.98),n.deskTop);W.position.set(0,h-d/2-.001,k.zCenter),W.receiveShadow=!0,Z.add(W);for(let N=-4;N<=4;N++){const j=f++,ae=Or[j],ie=bx[ae.deptId],ye=Math.abs(N),fe=N===0?0:Math.sign(N),Ie=ye*k.segW,ke=fe*Ie*Math.cos(k.wingAngle),he=k.zCenter-Ie*Math.sin(k.wingAngle),ge=N===0?0:fe*k.wingAngle,I=new Be;I.position.set(ke,0,he),I.rotation.y=ge,l[j]=new D(ke,0,he);const Me=k.segW+(N===0?.04:.08),z=new B(new pe(Me,d,u),n.deskTop);z.position.y=h-d/2,z.castShadow=!0,z.receiveShadow=!0,I.add(z);const _e=new B(new pe(Me,d*.88,.022),n.oakWood);_e.position.set(0,h-d/2,u/2+.008),I.add(_e);const ce=new B(new pe(Me*.92,.045,.06),n.darkMetal);ce.position.set(0,h-.06,.06),I.add(ce);const Le=N===-4?[-Me*.42,Me*.42]:[Me*.42];for(const Se of Le){const Te=new B(new je(.022,.022,h-.06,10),n.chrome);Te.position.set(Se,(h-.06)/2+.02,.06),Te.castShadow=!0,I.add(Te);const Ve=new B(new pe(.04,.026,.64),n.chrome);Ve.position.set(Se,.013,.04),Ve.castShadow=!0,I.add(Ve)}const Ee=new Be;Ee.position.set(0,h,-.2);const L=new B(new pe(.22,.012,.16),n.darkMetal);L.position.set(0,.006,0);const E=new B(new pe(.045,.16,.03),n.darkMetal);E.position.set(0,.08,-.04),Ee.add(L,E);const V=.64,re=.37,q=new B(new pe(V+.022,re+.022,.026),n.matteBlack);q.position.set(0,.28,0),q.castShadow=!0,Ee.add(q);const U=document.createElement("canvas");U.width=512,U.height=296;const se=U.getContext("2d");rd(se,512,296,ae,ie,null,null,j*.7,!1);const oe=new kt(U);oe.colorSpace=mt,oe.anisotropy=4;const le=new Ye({map:oe,emissiveMap:oe,emissive:new $e(16777215),emissiveIntensity:.92,roughness:.22,metalness:.05}),we=new B(new St(V,re),le);we.position.set(0,.28,.015),Ee.add(we),I.add(Ee);const ee=new B(new pe(.58,.004,.28),n.matteBlack);ee.position.set(.02,h+.002,.14);const be=new B(new pe(.36,.01,.12),n.darkMetal);be.position.set(-.03,h+.009,.14);const xe=new B(new pe(.055,.016,.09),n.darkMetal);if(xe.position.set(.22,h+.01,.15),I.add(ee,be,xe),j===9){const Se=new B(new pe(.22,.28,.24),new Ye({color:2450411,roughness:.45}));Se.position.set(.46,h+.14,-.05),Se.castShadow=!0,I.add(Se)}else if(j%3===0){const Se=new B(new je(.036,.032,.095,14),new Ye({color:959977,roughness:.35}));Se.position.set(-.36,h+.048,.08),Se.castShadow=!0,I.add(Se)}if([0,4,8,10,13,16].includes(j)){const Se=new Be;Se.position.set(.42,h,-.18);const Te=new B(new je(.046,.036,.075,12),n.ceramicWhite);Te.position.y=.0375,Te.castShadow=!0,Se.add(Te);const Ve=new B(new Vi(.056,1),n.leafMid);Ve.position.y=.095,Ve.scale.set(1.1,.9,1.1),Se.add(Ve),I.add(Se)}const Ce=new D(0,0,.65).applyAxisAngle(new D(0,1,0),ge),Pe=new D(ke+Ce.x,0,he+Ce.z),Ne=new Be;Ne.position.copy(Pe),Ne.rotation.y=ge,t.add(Ne);const Fe=Sx(n);Fe.position.set(0,0,.01),Ne.add(Fe);const ve=xx(ae,ie.colorHex);ve.group.position.set(0,0,-.65),Ne.add(ve.group),r.push(ve),I.updateMatrixWorld(!0);const H=new D;we.getWorldPosition(H);const Ae=new D(0,0,1).applyAxisAngle(new D(0,1,0),ge),ne=H.clone().addScaledVector(Ae,1.35).add(new D(.32,.38,0)),me={interactable:!0,isAgent:!0,stationIndex:j,kind:`AI AGENT • ${ie.shortName.toUpperCase()}`,id:`dev-${j+1}`,title:`${ae.name} — ${ae.role}`,role:`Bộ phận: ${ie.name} • Bàn #${String(j+1).padStart(2,"0")} (${k.name})`,desc:ie.summary,canvas:U,deptIndex:ie.index,focusPos:ne.clone(),focusTarget:H.clone(),getMetrics:(Se,Te,Ve)=>{var Tt,Jt,Si,ti;const Qe=Ve==null?void 0:Ve.getAgentStatus(j,Te);if(Qe)return[{label:"Model AI",value:Qe.modelName,tone:"good"},{label:"Giọng CIT",value:`${Qe.voiceId} (${Qe.genderLabel})`,tone:"good"},{label:"Trạng thái",value:Qe.stateLabel,tone:Qe.deptStatus==="done"?"good":Qe.deptStatus==="active"?"warn":""},{label:"Nhiệm vụ",value:Qe.role,tone:Se?"crit":"good"}];const ut=Te?Te.stageStatus[ie.index]:"active",nt=ut==="done"?"100%":ut==="active"?`${Math.round(((Te==null?void 0:Te.stageProgress)||.2)*100)}%`:"Đang chờ";return[{label:"Dự án đang chạy",value:((Jt=(Tt=Te==null?void 0:Te.project)==null?void 0:Tt.name)==null?void 0:Jt.slice(0,20))||"SmartPOS",tone:"good"},{label:"Tiến độ giai đoạn",value:nt,tone:ut==="done"?"good":ut==="active"?"warn":""},{label:"Nền tảng",value:((ti=(Si=Te==null?void 0:Te.project)==null?void 0:Si.platformLabels)==null?void 0:ti.join(", "))||"Android, Win",tone:"good"},{label:"Vai trò",value:ae.role,tone:Se?"crit":"good"}]}};we.userData={...me},ve.hitMesh.userData={...me},s.push(we,ve.hitMesh),o.push({idx:j,ctx:se,tex:oe,emp:ae,dept:ie,screenMat:le,offset:j*.9}),a.push({idx:j,seatPivot:Ne,workSeatPos:Pe.clone(),workSeatRotY:ge,targetPos:Pe.clone(),targetRotY:ge,hitMeta:ve.hitMesh.userData}),Z.add(I)}i.add(Z)}const v=wt.map(k=>{const Z=k.stations.map(ae=>l[ae].clone()),W=new D;Z.forEach(ae=>W.add(ae)),W.divideScalar(Z.length);const N=W.z<0?new D(0,2.35,3.65):new D(0,2.25,3.45),j=W.clone().add(N);return j.x=qe.clamp(j.x,-7.2,7.2),j.z=qe.clamp(j.z,-5,7.2),{dept:k,positions:Z,center:W,focusPos:j,focusTarget:W.clone().add(new D(0,.95,-.35))}}),_=Mx(v,r,l);t.add(_.group);const m=new Be,p=[{zCenter:-1.15,segW:1.48,wingAngle:qe.degToRad(14.5),iMid:-1.5,color:3718648},{zCenter:-1.15,segW:1.48,wingAngle:qe.degToRad(14.5),iMid:1.5,color:1096065},{zCenter:2.35,segW:1.62,wingAngle:qe.degToRad(15),iMid:-1.5,color:3900150},{zCenter:2.35,segW:1.62,wingAngle:qe.degToRad(15),iMid:1.5,color:1357990}];for(const k of p){const Z=Math.sign(k.iMid),W=Math.abs(k.iMid)*k.segW,N=Z*W*Math.cos(k.wingAngle),j=k.zCenter-W*Math.sin(k.wingAngle),ae=Z*k.wingAngle,ie=new Be;ie.position.set(N,0,j),ie.rotation.y=ae;const ye=ad(1.66,1.72,k.color,n);ye.rotation.y=Math.PI/2,ye.position.set(0,0,.16),ie.add(ye),m.add(ie)}const x=[{deptIndex:0,x:-4.45,z:-.32,width:3.05,rotY:-qe.degToRad(14.8)},{deptIndex:1,x:0,z:.85,width:3.15,rotY:0},{deptIndex:4,x:4.45,z:-.32,width:3.05,rotY:qe.degToRad(14.8)},{deptIndex:2,x:-4.82,z:2.35,width:3.1,rotY:-qe.degToRad(15)},{deptIndex:3,x:0,z:3.45,width:3.2,rotY:0},{deptIndex:5,x:4.82,z:2.35,width:3.1,rotY:qe.degToRad(15)}],y=[];for(const k of x){const Z=wt[k.deptIndex],W=ad(k.width,1.46,Z.colorHex,n),N=Ex(Z,1.46,n);W.add(N.group),W.position.set(k.x,0,k.z),W.rotation.y=k.rotY,m.add(W),y.push(N)}t.add(m);const g=new Be,b=wx(n),w=Tx(n),T=Ax(n),A=new Be;g.add(b,w,T,A),g.visible=!1,t.add(g);const S={boardroom:(()=>{const k=[];for(let Z=0;Z<8;Z++)k.push({pos:new D(-3.65+Z/7*7.3,0,-.92),rotY:Math.PI});for(let Z=0;Z<8;Z++)k.push({pos:new D(-3.65+Z/7*7.3,0,2.42),rotY:0});return k.push({pos:new D(-5.08,0,.75),rotY:-Math.PI/2}),k.push({pos:new D(5.08,0,.75),rotY:Math.PI/2}),k})(),u_shape:(()=>{const k=[];for(let Z=0;Z<6;Z++)k.push({pos:new D(-4.38,0,-2+Z/5*4.1),rotY:-Math.PI/2});for(let Z=0;Z<6;Z++)k.push({pos:new D(-2.75+Z/5*5.5,0,3.78),rotY:0});for(let Z=0;Z<6;Z++)k.push({pos:new D(4.38,0,2.1-Z/5*4.1),rotY:Math.PI/2});return k})(),roundtable:(()=>{const k=[];for(let Z=0;Z<18;Z++){const W=Z/18*Math.PI*2;k.push({pos:new D(Math.sin(W)*4.18,0,.85+Math.cos(W)*4.18),rotY:W})}return k})()};let M="work",C=!0,P=!0;function F(){const k=S[M];for(const Z of a)k&&k[Z.idx]?(Z.targetPos.copy(k[Z.idx].pos),Z.targetRotY=k[Z.idx].rotY):(Z.targetPos.copy(Z.workSeatPos),Z.targetRotY=Z.workSeatRotY)}function O(k="work",Z={}){M=k==="boardroom"||k==="u_shape"||k==="roundtable"?k:"work",typeof Z.showGlass=="boolean"&&(C=Z.showGlass),typeof Z.showMeetingProps=="boolean"&&(P=Z.showMeetingProps);const N=M!=="work";i.visible=!N,g.visible=N,b.visible=M==="boardroom",w.visible=M==="u_shape",T.visible=M==="roundtable",m.visible=N?!1:C,N&&S[M]?(Cx(A,S[M],n),A.visible=P):A.visible=!1,_.setMeetingMode(N),_.setFloorZonesVisible(!N),F()}let G=0,$=0;function te(k,Z,W,N,j,ae){const ie=Math.min(1,Z*5.2);for(const fe of a){fe.seatPivot.position.distanceToSquared(fe.targetPos)>2e-5?fe.seatPivot.position.lerp(fe.targetPos,ie):fe.seatPivot.position.copy(fe.targetPos);const Ie=(fe.targetRotY-fe.seatPivot.rotation.y+Math.PI*3)%(Math.PI*2)-Math.PI;Math.abs(Ie)>.002?fe.seatPivot.rotation.y+=Ie*ie:fe.seatPivot.rotation.y=fe.targetRotY;const ke=fe.seatPivot.rotation.y,he=-Math.sin(ke),ge=-Math.cos(ke);l[fe.idx].set(fe.seatPivot.position.x+he*.35,0,fe.seatPivot.position.z+ge*.35),M!=="work"?(fe.hitMeta.focusTarget.set(fe.seatPivot.position.x,1.08,fe.seatPivot.position.z),fe.hitMeta.focusPos.set(fe.seatPivot.position.x+he*1.65,1.72,fe.seatPivot.position.z+ge*1.65)):(fe.hitMeta.focusTarget.set(fe.seatPivot.position.x+he*.85,1.02,fe.seatPivot.position.z+ge*.85),fe.hitMeta.focusPos.set(fe.seatPivot.position.x-he*.72+.32,1.4,fe.seatPivot.position.z-ge*.72))}_.update(k,N,j);const ye=qe.lerp(.42,.78,$);for(const fe of y){const Ie=fe.dept.index,ke=N.stageStatus[Ie],he=ke==="done"?100:ke==="active"?Math.round(N.stageProgress*100):0,ge=`${ke}:${he}`;fe.lastKey!==ge&&(fe.lastKey=ge,Nu(fe.badgeData,fe.dept,ke,N.stageProgress)),fe.accentMat.color.setHex(14427686),ke==="active"?fe.faceMat.emissiveIntensity=ye+Math.sin(k*3.6)*.08:ke==="done"?fe.faceMat.emissiveIntensity=ye*.94:fe.faceMat.emissiveIntensity=ye*.85}if(G+=Z,!(G<.35)){G=0;for(const fe of o){const Ie=ae?ae.getAgentStatus(fe.idx,N):null;rd(fe.ctx,512,296,fe.emp,fe.dept,N,Ie,k+fe.offset,W),fe.tex.needsUpdate=!0}}}function K(k){$=k;for(const W of o)W.screenMat.emissiveIntensity=qe.lerp(.88,1.25,k);const Z=qe.lerp(.42,.78,k);for(const W of y)W.faceMat.emissiveIntensity=Z}function X(k){C=!!k,m.visible=M==="work"?C:!1}function Y(k){_.setBubblesVisible(k)}return{group:t,interactables:s,deptAnchors:v,update:te,setLightingMode:K,setGlassVisible:X,setBubblesVisible:Y,setLayoutMode:O}}function Px(n){const e=new Be,t=new B(new je(.09,.09,.025,16),n.matteBlack);t.position.y=-.012,e.add(t);const i=new B(new je(.022,.022,.16,12),n.darkMetal);i.position.y=-.09,e.add(i);const s=new Be;s.position.y=-.18;const o=new B(new pe(.06,.06,.08),n.darkMetal);s.add(o);const r=new Be;r.rotation.x=.42;const a=new B(new je(.058,.065,.24,16),n.deskTop);a.rotation.x=Math.PI/2,a.position.z=.08,a.castShadow=!0,r.add(a);const l=new B(new pe(.13,.04,.25),n.matteBlack);l.position.set(0,.055,.08),r.add(l);const c=new B(new je(.048,.048,.025,16),n.matteBlack);c.rotation.x=Math.PI/2,c.position.z=.205,r.add(c);const h=new B(new Gs(.036,16),new Ye({color:726310,roughness:.1,metalness:.8}));h.position.z=.219,r.add(h);const d=new ht({color:16720452}),u=new B(new nn(.011,8,8),d);return u.position.set(.042,.035,.19),r.add(u),s.add(r),e.add(s),{root:e,swivel:s,recMat:d}}function Lx(n){const e=new Be,t=new B(new pe(.24,.075,.3),n.deskTop);t.castShadow=!0,e.add(t);const i=new B(new pe(.18,.035,.24),n.darkMetal);i.position.y=.048,e.add(i);const s=new ht({color:3718648}),o=new B(new pe(.246,.016,.22),s);o.position.y=.01,e.add(o);const r=[],a=[[-.22,-.22,Math.PI/4,2278750],[.22,-.22,-Math.PI/4,2278750],[-.22,.22,-Math.PI/4,15680580],[.22,.22,Math.PI/4,15680580]],l=new ht({color:13358561,transparent:!0,opacity:.38,side:ln,depthWrite:!1});for(const[p,x,y,g]of a){const b=new B(new pe(.032,.02,.34),n.matteBlack);b.position.set(p*.55,.01,x*.55),b.rotation.y=y,b.castShadow=!0,e.add(b);const w=new B(new je(.032,.035,.042,12),n.darkMetal);w.position.set(p,.025,x),e.add(w);const T=new B(new nn(.012,8,8),new ht({color:g}));T.position.set(p,.004,x),e.add(T);const A=new Be;A.position.set(p,.052,x);const S=new B(new Do(.03,.145,20),l);S.rotation.x=-Math.PI/2,A.add(S);const M=new B(new pe(.28,.004,.022),n.matteBlack);A.add(M),e.add(A),r.push(A)}const c=new Be;c.position.set(0,-.058,-.08);const h=new B(new nn(.044,14,12),n.matteBlack);c.add(h);const d=new B(new je(.024,.024,.03,12),n.chrome);d.rotation.x=Math.PI/2,d.position.z=-.038,c.add(d);const u=new ht({color:16720452}),f=new B(new nn(.009,8,8),u);f.position.set(.028,.02,-.036),c.add(f),e.add(c);const v=new ht({color:3718648,transparent:!0,opacity:.07,side:ln,depthWrite:!1,blending:cl}),_=new B(new wc(.75,2.2,20,1,!0),v);_.position.set(0,-1.16,-.08),e.add(_);const m=new B(new pe(.72,.35,.72),new ht({visible:!1}));return m.userData={interactable:!0,isFlycam:!0,kind:"FLYCAM GIÁM SÁT",id:"flycam-01",title:"Flycam Tuần Tra Tự Động (FLYCAM-01)",role:"Giám sát không gian văn phòng & an ninh 3D"},e.add(m),{drone:e,rotors:r,gimbal:c,droneRecMat:u,scanMat:v,hitMesh:m}}function Ix(n){const e=new Be,t=[],i=[{pos:[-8.35,5.08,5.8],baseYaw:Math.PI*.78},{pos:[8.35,5.08,5.8],baseYaw:-Math.PI*.78},{pos:[-8.35,5.08,-5.8],baseYaw:Math.PI*.24},{pos:[8.35,5.08,-5.8],baseYaw:-Math.PI*.24}],s=new Be,o=i.map((m,p)=>{const x=Px(n);return x.root.position.set(...m.pos),x.swivel.rotation.y=m.baseYaw,s.add(x.root),{...x,baseYaw:m.baseYaw,phase:p*1.4}});e.add(s);const r=Lx(n);e.add(r.drone),t.push(r.hitMesh);const a=new D(0,3.7,1.5),l=new D,c=new D(0,1.4,-2.5),h=new D;function d(m,p){const x=Math.sin(m*.28)*5.6,y=.55+Math.sin(m*.56)*3.1,g=3.65+Math.cos(m*.45)*.26;p.set(x,g,y)}function u(m,p,x,y=0){const g=Math.floor(m*2)%2===0;for(const M of o)M.swivel.rotation.y=M.baseYaw+Math.sin(m*.42+M.phase)*.42,M.recMat.color.setHex(g?16720452:5572628);for(let M=0;M<r.rotors.length;M++)r.rotors[M].rotation.y+=p*(M%2===0?38:-38);d(m,a),d(m+.08,l),r.drone.position.copy(a);const b=l.x-a.x,w=l.z-a.z,T=Math.atan2(-b,-w);r.drone.rotation.y=T,r.drone.rotation.x=-.06,r.drone.rotation.z=qe.clamp(-b*.4,-.14,.14),r.droneRecMat.color.setHex(g?16720452:5572628),r.scanMat.opacity=qe.lerp(.055,.13,y);const S=(((x==null?void 0:x.stageIndex)??0)%3-1)*3.6;c.set(qe.lerp(S,0,.45)+Math.sin(m*.35)*1.4,1.35,-2.2+Math.cos(m*.25)*1.1)}function f(m,p){h.set(0,-.14,-.18).applyEuler(r.drone.rotation),m.copy(r.drone.position).add(h),p.copy(c)}function v(){return{x:a.x.toFixed(1),y:a.y.toFixed(2),z:a.z.toFixed(1)}}function _(m={}){typeof m.showCctv=="boolean"&&(s.visible=m.showCctv),typeof m.showFlycam=="boolean"&&(r.drone.visible=m.showFlycam)}return{group:e,interactables:t,update:u,getFlycamView:f,getTelemetry:v,setEquipmentVisible:_}}const Tn={home:{id:"home",x:0,z:-4.11,y:.08,lookAt:[0,0]},northHub:{id:"northHub",x:0,z:-3.45,y:0},dept0:{id:"dept0",x:-4.1,z:-3.25,y:0,lookAt:[-4.1,-2]},dept1:{id:"dept1",x:0,z:-2.45,y:0,lookAt:[0,-1.15]},dept4:{id:"dept4",x:4.1,z:-3.25,y:0,lookAt:[4.1,-2]},nwCorner:{id:"nwCorner",x:-7.55,z:-3.45,y:0},neCorner:{id:"neCorner",x:7.55,z:-3.45,y:0},swCorner:{id:"swCorner",x:-7.55,z:3.7,y:0},seCorner:{id:"seCorner",x:7.55,z:3.7,y:0},dept2:{id:"dept2",x:-4.55,z:3.75,y:0,lookAt:[-4.4,1.5]},dept3:{id:"dept3",x:0,z:4.18,y:0,lookAt:[0,2.35]},dept5:{id:"dept5",x:4.55,z:3.75,y:0,lookAt:[4.4,1.5]}},Uu=["dept0","dept1","dept2","dept3","dept4","dept5"],Dx=[["home","northHub"],["northHub","dept1"],["northHub","dept0"],["northHub","dept4"],["dept0","nwCorner"],["nwCorner","swCorner"],["swCorner","dept2"],["dept2","dept3"],["dept3","dept5"],["dept5","seCorner"],["seCorner","neCorner"],["neCorner","dept4"]],Fr={};for(const n of Object.keys(Tn))Fr[n]=[];for(const[n,e]of Dx)Fr[n].push(e),Fr[e].push(n);function Nx(n,e){const t=Tn[n]?n:"home",i=Tn[e]?e:"home";if(t===i)return[Tn[i]];const s=[[t]],o=new Set([t]);for(;s.length>0;){const r=s.shift(),a=r[r.length-1];for(const l of Fr[a]||[]){if(o.has(l))continue;const c=[...r,l];if(l===i)return c.slice(1).map(h=>Tn[h]);o.add(l),s.push(c)}}return[Tn[i]]}function ld(n){const e=Uu[n],t=Tn[e]||Tn.home;return t.lookAt?Math.atan2(t.lookAt[0]-t.x,t.lookAt[1]-t.z):0}const Fa=18,Ux=new D(0,0,-4.15);function cd(n,e,t,i,s,o,r,a=null){var v;const l=i==null?void 0:i.project,c=(l==null?void 0:l.name)||"SmartPOS Bán Hàng",h=Math.round(((i==null?void 0:i.overallProgress)??.1)*100),d=((v=i==null?void 0:i.currentDept)==null?void 0:v.name)||"1. Yêu cầu & BA",u=s==null?void 0:s.latestMessage;n.fillStyle="#050c1a",n.fillRect(0,0,e,t),n.strokeStyle=o?"#fb7185":"#f59e0b",n.lineWidth=3,n.strokeRect(8,8,e-16,t-16),n.fillStyle="#0f172a",n.fillRect(10,10,e-20,42),n.fillStyle="#f59e0b",n.font="bold 16px Segoe UI, sans-serif",n.fillText("★ LEADER MRT // BẢNG ĐIỀU HÀNH TRUNG TÂM",22,37),n.fillStyle="#f8fafc",n.font="bold 18px Segoe UI, sans-serif",n.fillText(c.slice(0,34),22,82),n.fillStyle="#38bdf8",n.font="bold 14px Consolas, monospace",n.fillText(`TIẾN ĐỘ TỔNG: ${h}%  |  PHIÊN BẢN: ${(i==null?void 0:i.version)||"v1.0.0"}`,22,110),n.fillStyle="#1e293b",n.fillRect(22,124,e-44,14),n.fillStyle=h>=99?"#10b981":"#f59e0b",n.fillRect(22,124,(e-44)*h/100,14),n.fillStyle="#cbd5e1",n.font="bold 14px Segoe UI, sans-serif",n.fillText(`Bộ phận đang xử lý: ${d}`,22,168),a!=null&&a.prompt?(n.fillStyle="rgba(245, 158, 11, 0.2)",n.fillRect(22,186,e-44,72),n.strokeStyle="#f59e0b",n.lineWidth=2,n.strokeRect(22,186,e-44,72),n.fillStyle="#fde68a",n.font="bold 12.5px Segoe UI, sans-serif",n.fillText("★ LỆNH TỐI CAO ĐANG THỰC THI:",32,208),n.fillStyle="#ffffff",n.font="bold 12.5px Segoe UI, sans-serif",n.fillText(a.prompt.slice(0,52),32,232)):u&&(n.fillStyle="rgba(245, 158, 11, 0.14)",n.fillRect(22,186,e-44,72),n.strokeStyle="rgba(245, 158, 11, 0.5)",n.lineWidth=1.5,n.strokeRect(22,186,e-44,72),n.fillStyle="#fbbf24",n.font="bold 12.5px Segoe UI, sans-serif",n.fillText(`${u.fromName} → ${u.toName}:`,32,208),n.fillStyle="#f8fafc",n.font="12.5px Segoe UI, sans-serif",n.fillText((u.text||"").slice(0,54),32,232));const f=.5+.5*Math.sin(r*4);n.fillStyle=`rgba(245, 158, 11, ${.4+f*.6})`,n.beginPath(),n.arc(e-30,31,7,0,Math.PI*2),n.fill()}function kx(){const n=document.createElement("canvas");n.width=460,n.height=96;const e=n.getContext("2d");e.fillStyle="rgba(11, 17, 29, 0.92)",e.beginPath(),e.roundRect(6,6,448,84,16),e.fill(),e.strokeStyle="#f59e0b",e.lineWidth=3.5,e.stroke(),e.fillStyle="#fbbf24",e.font="bold 24px Segoe UI, sans-serif",e.textAlign="center",e.fillText("★ LEADER MRT — ĐIỀU HÀNH",230,44),e.fillStyle="#7dd3fc",e.font="bold 16px Consolas, monospace",e.fillText("EXECUTIVE AI COMMANDER • 6 PHÒNG BAN",230,72);const t=new kt(n);return t.colorSpace=mt,t}function hd(n,e,t){let i=(e-n+Math.PI)%(Math.PI*2)-Math.PI;return i<-Math.PI&&(i+=Math.PI*2),n+i*t}function Bx(n){const e=new Be,t=new Be;t.position.copy(Ux);const i=new B(new je(1.12,1.2,.08,36),n.coveSlate);i.position.y=.04,i.receiveShadow=!0,i.castShadow=!0,t.add(i);const s=new ht({color:16096779}),o=new B(new Kn(1.13,.015,8,48),s);o.rotation.x=Math.PI/2,o.position.y=.075,t.add(o);const r=new Be;r.position.set(0,.08,.56);const a=new B(new pe(.42,.98,.18),n.oakWood);a.position.y=.49,a.castShadow=!0,a.receiveShadow=!0,r.add(a);const l=new B(new pe(.96,.94,.022),n.luxuryGlass);l.position.set(0,.49,.12),l.renderOrder=2,r.add(l);const c=new B(new pe(.98,.022,.032),n.champagneGold);c.position.set(0,.96,.12);const h=new B(new pe(.98,.026,.034),n.champagneGold);h.position.set(0,.02,.12),r.add(c,h);const d=new Be;d.position.set(0,1,.03),d.rotation.x=-.38;const u=new B(new pe(.92,.032,.52),n.matteBlack);u.castShadow=!0,d.add(u);const f=document.createElement("canvas");f.width=512,f.height=296;const v=f.getContext("2d");cd(v,512,296,null,null,!1,0);const _=new kt(f);_.colorSpace=mt;const m=new Ye({map:_,emissiveMap:_,emissive:new $e(16777215),emissiveIntensity:1,roughness:.22}),p=new B(new St(.84,.46),m);p.rotation.x=-Math.PI/2,p.position.y=.018,d.add(p),r.add(d),t.add(r),e.add(t);const x=new Be;x.position.set(Tn.home.x,Tn.home.y,Tn.home.z);const y=new Ye({color:988970,roughness:.65,metalness:.08}),g=new Ye({color:16317180,roughness:.55}),b=new Ye({color:16096779,emissive:14251782,emissiveIntensity:.35,roughness:.35}),w=new Ye({color:15119500,roughness:.62}),T=new Ye({color:1447967,roughness:.78}),A=new Ye({color:16498468,emissive:16096779,emissiveIntensity:1.4,roughness:.25}),S=xe=>{const Ce=new Be;Ce.position.set(xe,.82,0);const Pe=new B(new wn(.062,.68,6,12),y);Pe.position.y=-.4,Pe.castShadow=!0,Ce.add(Pe);const Ne=new B(new pe(.095,.06,.19),n.matteBlack);return Ne.position.set(0,-.79,.04),Ne.castShadow=!0,Ce.add(Ne),x.add(Ce),Ce},M=S(-.095),C=S(.095),P=new Be;P.position.set(0,.82,0);const F=new B(new je(.165,.14,.52,14),y);F.position.y=.26,F.scale.set(1.16,1,.72),F.castShadow=!0,P.add(F);const O=new B(new pe(.1,.32,.025),g);O.position.set(0,.34,.105),P.add(O);const G=new B(new pe(.042,.28,.018),b);G.position.set(0,.3,.118),P.add(G);const $=new B(new pe(.048,.055,.014),A);$.position.set(.085,.38,.114),P.add($);const te=new Be;te.position.set(0,.56,0);const K=new B(new je(.045,.052,.08,10),w);K.position.y=.02,te.add(K);const X=new B(new nn(.114,18,16),w);X.position.y=.13,X.scale.set(.95,1.06,.98),X.castShadow=!0,te.add(X);const Y=new B(new nn(.12,16,14,0,Math.PI*2,0,Math.PI*.56),T);Y.position.set(0,.142,-.008),Y.rotation.x=-.2,te.add(Y);const k=new B(new pe(.155,.03,.014),new Ye({color:988970,roughness:.2,metalness:.7}));k.position.set(0,.135,.108),te.add(k),P.add(te);const Z=new Be;Z.position.set(-.205,.46,0);const W=new B(new wn(.042,.24,6,8),y);W.position.set(0,-.12,.04),W.rotation.x=-.35,W.castShadow=!0;const N=new B(new wn(.034,.22,6,8),y);N.position.set(.02,-.24,.18),N.rotation.x=-1.08;const j=new B(new pe(.16,.014,.22),n.matteBlack);j.position.set(.04,-.25,.3),j.rotation.x=.42;const ae=new B(new St(.135,.19),new ht({color:3718648}));ae.rotation.x=-Math.PI/2,ae.position.y=.009,j.add(ae),Z.add(W,N,j),P.add(Z);const ie=new Be;ie.position.set(.205,.46,0);const ye=new B(new wn(.042,.24,6,8),y);ye.position.set(0,-.12,.02),ye.rotation.x=-.18,ye.castShadow=!0;const fe=new B(new wn(.034,.22,6,8),y);fe.position.set(-.02,-.27,.08),fe.rotation.x=-.55,ie.add(ye,fe),P.add(ie),x.add(P);const Ie=kx(),ke=new pu(new Mc({map:Ie,transparent:!0,depthWrite:!1}));ke.position.set(0,2.1,0),ke.scale.set(1.85,.39,1),x.add(ke);const he=new D(.65,1.88,-1.75),ge=new D(0,1.38,-4.11),I=new B(new pe(.95,2,.95),new ht({visible:!1}));I.position.set(0,1,0),I.userData={interactable:!0,isAgent:!0,isLeader:!0,stationIndex:Fa,kind:"EXECUTIVE LEADER • AI",id:"leader-mrt",title:"MRT — Leader Điều Hành",role:"CEO AI & Điều phối 6 phòng ban (18 AI Agents)",desc:"Leader MRT trực tiếp đi tới từng phòng ban để giao việc, kiểm tra tiến độ, duyệt chuyển giai đoạn và đảm bảo chất lượng bàn giao.",canvas:f,focusPos:he,focusTarget:ge,getMetrics:(xe,Ce)=>{var Ne;const Pe=Ft(Fa);return[{label:"Model AI",value:Pe.model.name,tone:"good"},{label:"Giọng CIT",value:`${Pe.voiceId} (${Pe.genderLabel})`,tone:"good"},{label:"Di chuyển",value:Le?"Đang đi tới phòng ban":_e===null?"Tại bục chỉ huy":`Giao việc B${_e+1}`,tone:"warn"},{label:"Bộ phận phụ trách",value:((Ne=Ce==null?void 0:Ce.currentDept)==null?void 0:Ne.shortName)||"1. Yêu cầu",tone:xe?"crit":"good"}]}},x.add(I),e.add(x);const Me=x.position;let z="home",_e=null,ce=[],Le=!1,Ee=0,L=0,E=!0,V=1;function re(xe,Ce){if(z===xe&&ce.length===0){_e=Ce,Ee=Ce!==null?ld(Ce):0;return}ce=Nx(z,xe),_e=Ce,Le=ce.length>0}function q(xe){const Ce=Uu[xe];Ce&&re(Ce,xe)}function U(){re("home",null)}function se(xe){E=!!xe}function oe(){return E}function le(xe){V=xe}function we(xe,Ce){const Pe=x.rotation.y,Ne=Math.sin(Pe),Fe=Math.cos(Pe),ve=Math.cos(Pe),H=-Math.sin(Pe);xe.set(qe.clamp(x.position.x+Ne*2.15+ve*.75,-8.1,8.1),1.92,qe.clamp(x.position.z+Fe*2.15+H*.75,-6.1,7.4)),Ce.set(x.position.x,x.position.y+1.32,x.position.z)}let ee=0;function be(xe,Ce,Pe,Ne,Fe,ve,H=null){const Ae=((Fe==null?void 0:Fe.activeBubbles)||[]).some(ne=>ne.stationIndex===Fa);if(Le&&ce.length>0){const ne=ce[0],me=ne.x-x.position.x,Se=ne.z-x.position.z,Te=Math.hypot(me,Se),Qe=2.35*V*(1+(((Ne==null?void 0:Ne.speed)||1)-1)*.35)*Ce;if(Te<=Qe+.03)x.position.x=ne.x,x.position.z=ne.z,x.position.y=ne.y,z=ne.id,ce.shift(),ce.length===0&&(Le=!1,Ee=_e!==null?ld(_e):0);else{const nt=me/Te,Tt=Se/Te;x.position.x+=nt*Qe,x.position.z+=Tt*Qe,x.position.y=qe.lerp(x.position.y,ne.y,Math.min(1,Ce*8)),Ee=Math.atan2(me,Se)}L+=Ce*8.5*V;const ut=Math.sin(L)*.48;M.rotation.x=ut,C.rotation.x=-ut,Z.rotation.x=-ut*.55,ie.rotation.x=ut*.72,P.position.y=.82+Math.abs(Math.sin(L))*.032,x.rotation.y=hd(x.rotation.y,Ee,Math.min(1,Ce*9))}else{if(M.rotation.x=qe.lerp(M.rotation.x,0,Math.min(1,Ce*10)),C.rotation.x=qe.lerp(C.rotation.x,0,Math.min(1,Ce*10)),_e===null&&(ve!=null&&ve[(Ne==null?void 0:Ne.stageIndex)??0])){const me=ve[Ne.stageIndex];Ee=qe.clamp(Math.atan2(me.center.x-x.position.x,me.center.z-x.position.z),-.95,.95)}x.rotation.y=hd(x.rotation.y,Ee,Math.min(1,Ce*5)),P.position.y=.82+Math.sin(xe*2.1)*.008;const ne=Ae||_e!==null;Z.rotation.x=ne?-.22+Math.cos(xe*3.2)*.06:0,ie.rotation.x=Ae?-.45+Math.sin(xe*5.2)*.22:_e!==null?-.28+Math.sin(xe*2.6)*.12:0}te.rotation.y=Ae?Math.sin(xe*4.2)*.16:Math.sin(xe*.7)*.07,A.emissiveIntensity=Ae?2.4:1.1,ke.position.y=2.1+Math.sin(xe*2)*.02,we(he,ge),ee+=Ce,ee>=.35&&(ee=0,cd(v,512,296,Ne,Fe,Pe,xe,H),_.needsUpdate=!0)}return{group:e,interactables:[I],worldPos:Me,walkToDepartment:q,returnToPodium:U,setAutoWalk:se,isAutoWalkEnabled:oe,setWalkSpeed:le,getLiveCameraView:we,update:be}}const Ox=Object.fromEntries(wt.map(n=>[n.id,n])),Fx=["AGENT-PO-01","AGENT-BA-02","AGENT-UX-03","AGENT-ARC-04","AGENT-TL-05","AGENT-SM-06","AGENT-REL-07","AGENT-OPS-08","AGENT-SIG-09","AGENT-AND-10","AGENT-WIN-11","AGENT-BE-12","AGENT-QA-13","AGENT-SEC-14","AGENT-PRF-15","AGENT-SRE-16","AGENT-WAR-17","AGENT-FIX-18"],zx=[[1,2,3],[0,2,4],[0,1,9],[4,5,9,10],[3,5,11],[3,4,12],[7,8,12,15],[6,8,11],[6,7,9,10],[10,11,12,2],[9,11,12,3],[9,10,4,14],[13,14,9,10],[12,14,11,6],[12,13,11],[16,17,6,7],[15,17,12],[15,16,9,10]],vt=18,Ui=Or.map((n,e)=>({...n,code:Fx[e],dept:Ox[n.deptId],peers:zx[e]})),Xt={stationIndex:vt,code:"AGENT-CEO-MRT",name:"MRT",role:"Leader Điều Hành",deptId:"executive",dept:{id:"executive",index:-1,shortName:"Leader MRT",name:"Ban Điều Hành MRT",color:"#f59e0b",colorHex:16096779},peers:[0,3,9,12,6,15]};function bn(n){return n===vt?Xt:Ui[n]}function _r(n=new Date){const e=String(n.getHours()).padStart(2,"0"),t=String(n.getMinutes()).padStart(2,"0"),i=String(n.getSeconds()).padStart(2,"0");return`${e}:${t}:${i}`}function _s(n){var e;return(e=n==null?void 0:n.platformLabels)!=null&&e.length?n.platformLabels.join(" + "):"Android + Windows"}function Hx(n,e){const t=(e==null?void 0:e.name)||"SmartPOS Bán Hàng",i=_s(e),s=(e==null?void 0:e.features)||["Nghiệp vụ lõi","Đồng bộ dữ liệu","Bảo mật"],o=s[0]||"Nghiệp vụ cốt lõi",r=s[1]||"Đồng bộ thời gian thực",a=(e==null?void 0:e.warrantyMonths)||24;switch(n){case 0:return{assignedTask:`Chốt phạm vi sản phẩm "${t}" cho ${i}`,activeAction:`Đang phân rã User Story cho "${o}"`,standbyAction:`Đang rà soát tiêu chí nghiệm thu của "${t}"`};case 1:return{assignedTask:`Viết tài liệu đặc tả SRS & luồng nghiệp vụ "${t}"`,activeAction:`Đang chuẩn hóa đặc tả API & luồng "${r}"`,standbyAction:"Đang cập nhật ma trận yêu cầu cho đội Dev & QA"};case 2:return{assignedTask:`Thiết kế Wireframe & UI/UX đa màn hình (${i})`,activeAction:"Đang vẽ prototype giao diện cảm ứng & desktop",standbyAction:"Đang bàn giao Design Tokens cho Android & Windows"};case 3:return{assignedTask:`Thiết kế kiến trúc hệ thống & đồng bộ dữ liệu "${t}"`,activeAction:"Đang dựng sơ đồ Event-Driven & Offline Sync DB",standbyAction:"Đang review chuẩn kết nối giữa client và server"};case 4:return{assignedTask:`Phân chia module code & chuẩn kỹ thuật cho ${i}`,activeAction:"Đang chia backlog Sprint và giao task cho đội Xây dựng",standbyAction:"Đang hỗ trợ gỡ vướng kỹ thuật cho các AI Dev"};case 5:return{assignedTask:"Điều phối tiến độ 4 Sprint & loại bỏ điểm nghẽn",activeAction:"Đang cân bằng tải công việc giữa 6 bộ phận AI",standbyAction:"Đang theo dõi tốc độ hoàn thành Sprint trên Kanban"};case 6:return{assignedTask:`Quản lý phát hành & phê duyệt bản dựng "${t}"`,activeAction:"Đang kiểm tra checklist phát hành lên Store/CDN",standbyAction:"Đang chuẩn bị ghi chú phát hành Release Notes"};case 7:return{assignedTask:`Vận hành pipeline CI/CD đóng gói tự động (${i})`,activeAction:"Đang chạy build & xuất bản gói cài đặt tự động",standbyAction:"Đang tối ưu cache Docker & thời gian build CI"};case 8:return{assignedTask:"Ký số chứng chỉ doanh nghiệp (.AAB, .MSIX, .EXE)",activeAction:"Đang ký số EV Code Signing & kiểm tra SHA-256",standbyAction:"Đang quản lý kho chứng chỉ Google Play & Windows"};case 9:return{assignedTask:"Lập trình ứng dụng Android (Kotlin + Jetpack Compose)",activeAction:`Đang code màn hình Android & tích hợp "${o}"`,standbyAction:"Đang tối ưu Room DB và xử lý build .APK/.AAB"};case 10:return{assignedTask:"Lập trình phần mềm Windows Desktop (.NET 8 WinUI 3)",activeAction:`Đang code giao diện Windows x64 & module "${r}"`,standbyAction:"Đang tối ưu bộ cài .MSIX/.EXE và in ấn ngoại vi"};case 11:return{assignedTask:"Phát triển Backend API & đồng bộ dữ liệu thời gian thực",activeAction:"Đang viết endpoint đồng bộ & xác thực bảo mật JWT",standbyAction:"Đang tinh chỉnh kết nối PostgreSQL & Redis Cache"};case 12:return{assignedTask:`Chạy kiểm thử tự động E2E cho ${i}`,activeAction:"Đang chạy bộ test giả lập Android 14 & Windows 11",standbyAction:"Đang kiểm tra hồi quy các ca kiểm thử chức năng"};case 13:return{assignedTask:"Kiểm định bảo mật OWASP & phân quyền dữ liệu",activeAction:"Đang quét lỗ hổng API, mã hóa token & quyền truy cập",standbyAction:"Đang rà soát chứng chỉ bảo mật trước khi phát hành"};case 14:return{assignedTask:"Đo kiểm hiệu năng chịu tải & độ trễ p95 hệ thống",activeAction:"Đang bắn tải 10.000 request/s kiểm tra độ ổn định",standbyAction:"Đang phân tích mức tiêu thụ RAM/CPU trên thiết bị"};case 15:return{assignedTask:"Giám sát vận hành production SLA 99.98% 24/7",activeAction:"Đang theo dõi telemetry & log lỗi thời gian thực",standbyAction:"Đang giám sát độ sẵn sàng máy chủ & cảnh báo sớm"};case 16:return{assignedTask:`Tiếp nhận phản hồi & hỗ trợ bảo hành ${a} tháng`,activeAction:"Đang xử lý yêu cầu khách hàng & phân loại ticket",standbyAction:"Đang trực tổng đài chăm sóc khách hàng sau bàn giao"};case 17:default:return{assignedTask:"Phát triển bản vá Hotfix & cập nhật OTA / Auto-Updater",activeAction:"Đang đóng gói bản vá nóng & kiểm tra tương thích ngược",standbyAction:"Đang sẵn sàng vá lỗi khẩn cấp dưới 2 giờ theo SLA"}}}function Gx(n){let e=[],t=[],i=null,s=0,o=0,r=0;function a(y,g,b,w="peer",T=4.6){const A=bn(y),S=bn(g);if(!A||!S)return null;const M=Ft(y),C={id:`msg-${++s}`,timeStr:_r(),fromStation:y,fromCode:A.code,fromName:A.name,fromRole:A.role,fromModelName:M.model.name,fromGender:M.gender,fromVoiceId:M.voiceId,fromColor:A.dept.color,toStation:g,toCode:S.code,toName:S.name,toRole:S.role,toColor:S.dept.color,text:b,kind:w};return e=[...e,C].slice(-40),t=[{stationIndex:y,name:A.name,role:A.role,modelName:M.model.name,color:A.dept.color,text:b,ttl:T}],i={fromStation:y,toStation:g,colorHex:A.dept.colorHex,ttl:Math.min(3.6,T),maxTtl:Math.min(3.6,T)},C}function l(y,g,b=4.2){const w=bn(y);if(!w)return;const T=Ft(y);t=[...t.filter(S=>S.stationIndex!==y).slice(0,1),{stationIndex:y,name:w.name,role:w.role,modelName:T.model.name,color:w.dept.color,text:g,ttl:b}]}function c(y,g){const b=Ft(y);if(y===vt){const G=g==null?void 0:g.project,$=(G==null?void 0:G.name)||"SmartPOS Bán Hàng",te=_s(G),K=Math.round(((g==null?void 0:g.overallProgress)??.1)*100),X=(g==null?void 0:g.currentDept)||wt[0],Y=Xt.peers.map(k=>{const Z=Ui[k];return`${Z.name} (${Z.dept.shortName})`});return{stationIndex:vt,code:Xt.code,name:Xt.name,role:Xt.role,gender:b.gender,genderLabel:b.genderLabel,modelId:b.modelId,modelName:b.model.name,modelProvider:b.model.provider,modelColor:b.model.color,voiceId:b.voiceId,concreteMission:b.mission,deptId:Xt.deptId,deptName:Xt.dept.name,deptColor:Xt.dept.color,deptColorHex:Xt.dept.colorHex,stageIndex:(g==null?void 0:g.stageIndex)??0,deptStatus:"active",progressPct:K,stateLabel:`Đang điều hành tổng thể (${K}%)`,assignedTask:`Điều phối 6 phòng ban (18 AI Agent) hoàn thiện "${$}" (${te})`,currentAction:`Đang chỉ đạo ${X.name} triển khai "${$}" (${K}%)`,workingWith:Y.join(", "),peers:Xt.peers}}const w=Ui[y]||Ui[0],T=g==null?void 0:g.project,A=(g==null?void 0:g.stageIndex)??0,S=g?g.stageStatus[w.dept.index]:"active",M=S==="done"?100:S==="active"?Math.round(((g==null?void 0:g.stageProgress)??.1)*100):0,C=Hx(y,T),P=S==="active"?`Đang thực thi (${M}%)`:S==="done"?"Đã hoàn tất bàn giao (100%)":"Đang chuẩn bị tiếp nhận",F=S==="active"?C.activeAction:S==="done"?`Đã xong phần việc giai đoạn ${w.dept.shortName}, sẵn sàng hỗ trợ chéo`:C.standbyAction,O=w.peers.map(G=>{const $=Ui[G];return`${$.name} (${$.role})`});return{stationIndex:y,code:w.code,name:w.name,role:w.role,gender:b.gender,genderLabel:b.genderLabel,modelId:b.modelId,modelName:b.model.name,modelProvider:b.model.provider,modelColor:b.model.color,voiceId:b.voiceId,concreteMission:b.mission,deptId:w.deptId,deptName:w.dept.name,deptColor:w.dept.color,deptColorHex:w.dept.colorHex,stageIndex:A,deptStatus:S,progressPct:M,stateLabel:P,assignedTask:C.assignedTask,currentAction:F,workingWith:O.join(", "),peers:w.peers}}function h(y){var M,C;const g=y==null?void 0:y.project,b=(g==null?void 0:g.name)||"SmartPOS",w=_s(g),T=(M=g==null?void 0:g.platforms)==null?void 0:M.includes("android"),A=(C=g==null?void 0:g.platforms)==null?void 0:C.includes("windows"),S=(y==null?void 0:y.stageIndex)??0;if(S===0)return[[0,1,`Minh Thư ơi, chốt giúp mình danh sách tính năng cốt lõi cho "${b}" (${w}) nhé.`],[1,2,"Quốc Anh kiểm tra luồng màn hình chính, mình đã tách xong 3 module nghiệp vụ trong SRS."],[2,3,"Anh Huy Hoàng xem trước wireframe nhé, em thiết kế tương thích cả cảm ứng lẫn desktop."]];if(S===1)return[[3,4,`Tuấn Kiệt, mình chốt kiến trúc Offline-First Sync cho "${b}", cậu chia task Sprint nhé.`],[4,9,"Phúc Thịnh chuẩn bị base Kotlin Compose cho bản Android, nhớ đồng bộ API với Linh Trần."],[4,10,"Bảo Long chuẩn bị cấu trúc .NET 8 WinUI 3 cho bản Windows x64 nhé."],[5,12,"Khang Đỗ xem trước kế hoạch 4 Sprint để chuẩn bị bộ test case sớm."]];if(S===2){const P=[[11,9,"Phúc Thịnh ơi, API đồng bộ đơn hàng xong rồi, cậu ghép vào app Android nhé."],[11,10,"Bảo Long kéo endpoint mới về tích hợp cho client Windows desktop luôn nha."],[9,10,"Mình xong luồng quét QR trên Android rồi, đang đối chiếu payload JSON với bản Windows."]];return T||(P[0]=[4,11,`Linh Trần kiểm tra lại tối ưu truy vấn DB cho "${b}" giúp team nhé.`]),A||(P[1]=[9,11,"Bản Android gọi API ổn định ở 18ms rồi, mình đẩy commit lên nhánh chính đây."]),P}return S===3?[[12,9,"Phúc Thịnh ơi, bộ test E2E Android 14 pass 100%, không còn lỗi crash giao diện."],[12,10,"Bảo Long kiểm tra giúp case DPI 150% trên Windows 11, QA vừa xác nhận đạt chuẩn."],[13,11,"Linh Trần yên tâm nhé, mình quét bảo mật OWASP và JWT token đều an toàn."],[14,6,"Chị Hải Yến ơi, hiệu năng p95 đạt 18ms ở mức 10k RPS — sẵn sàng đóng gói phát hành!"]]:S===4?[[6,7,`Minh Nguyễn kích hoạt pipeline đóng gói ${T&&A?".AAB và .MSIX/.EXE":T?".AAB/.APK":".MSIX/.EXE"} cho "${b}" ${y.version} nhé.`],[7,8,"Build xanh 100% rồi Đức Võ ơi, sang bước ký số chứng chỉ phát hành ngay."],[8,6,"Đã ký số EV Code Signing & kiểm tra SHA-256 xong, sẵn sàng đẩy lên Store/CDN."],[6,15,"Nam Phan chuẩn bị tiếp nhận bàn giao bản phát hành để giám sát Production 24/7 nhé."]]:[[15,16,`Hệ thống "${b}" ${y.version} đang chạy ổn định SLA 99.98%, chưa ghi nhận lỗi P1.`],[16,17,`An Phạm giữ sẵn nhánh Hotfix nhé, mình đang trực kênh bảo hành ${(g==null?void 0:g.warrantyMonths)||24} tháng.`],[17,12,"Khang Đỗ hỗ trợ chạy regression nhanh mỗi khi có bản vá bảo hành OTA nha."]]}function d(y,g,b){var A;const w=((A=b==null?void 0:b.project)==null?void 0:A.name)||"SmartPOS";return{1:[vt,3,`Tốt lắm đội BA! Leader MRT duyệt SRS "${w}" — Huy Hoàng bắt đầu Kiến trúc & Sprint nhé.`],2:[vt,9,"Kiến trúc xong! Leader MRT lệnh đội Xây dựng (Android, Windows, Backend) tăng tốc code ngay."],3:[vt,12,"Hoàn tất build! Leader MRT chuyển giao sang Khang Đỗ & đội QA kiểm thử tự động & bảo mật."],4:[vt,6,`QA đạt 100%! Leader MRT phê duyệt Hải Yến đóng gói & ký số phân phối "${w}".`],5:[vt,15,`Chính thức phát hành "${w}" ${b.version}! Nam Phan & đội Bảo hành trực SLA 24/7.`]}[g]||[vt,g*3,`Leader MRT chuyển giai đoạn "${w}".`]}function u(y){var w;e=[],t=[],i=null,o=0,r=0;const g=((w=y==null?void 0:y.project)==null?void 0:w.name)||"SmartPOS",b=_s(y==null?void 0:y.project);a(vt,0,`Leader MRT phát lệnh khởi động "${g}" (${b})! Trang Bùi và đội BA bắt đầu phân tích yêu cầu ngay.`,"handoff",5.2)}function f(y,g,b){if(t=t.map(w=>({...w,ttl:w.ttl-y})).filter(w=>w.ttl>0),i&&(i.ttl-=y,i.ttl<=0&&(i=null)),!(g!=null&&g.paused)){if(b){const w=g.stageIndex,T=Math.max(0,w-1),[A,S,M]=d(T,w,g);a(A,S,M,"handoff",4.8),o=0;return}if(o+=y*((g==null?void 0:g.speed)||1),o>=3.2){o=0;const w=h(g),[T,A,S]=w[r%w.length];r+=1,a(T,A,S,"peer",4.2)}}}function v(y,g,b){var te,K,X;const w=c(y,b),T=bn(y),A=(g||"").trim().toLowerCase(),S=((te=b==null?void 0:b.project)==null?void 0:te.name)||"SmartPOS",M=_s(b==null?void 0:b.project),C=(b==null?void 0:b.currentDept)||wt[0];let P="",F=y===vt?C.stations[0]:T.peers[0];if(y===vt){const Y=Math.round(((b==null?void 0:b.overallProgress)??0)*100);A.includes("nhiệm vụ")||A.includes("vai trò")||A.includes("phụ trách")?P=`Mình là Leader MRT (${T.code}) — người điều hành chung toàn công ty MRT SOFT HUB: điều phối 6 phòng ban, duyệt từng giai đoạn từ Yêu cầu đến Bảo hành.`:A.includes("trao đổi")||A.includes("phối hợp")||A.includes("ai")?P=`Leader MRT đang trao đổi trực tiếp với ${Ui[C.stations[0]].name} (${C.name}) và giám sát đồng bộ cả 6 bộ phận cho "${S}".`:A.includes("qa")||A.includes("kiểm thử")||A.includes("lỗi")?(F=12,P=`Leader MRT đã yêu cầu Khang Đỗ (QA Lead) siết chặt test tự động & bảo mật OWASP cho "${S}" trước khi phát hành.`):A.includes("android")?(F=9,P=`Leader MRT báo cáo mảng Android của "${S}" do Phúc Thịnh dẫn dắt, build .AAB/.APK theo đúng chuẩn Google Play.`):A.includes("windows")?(F=10,P=`Leader MRT báo cáo mảng Windows Desktop (.MSIX/.EXE) của "${S}" do Bảo Long phụ trách, tiến độ đang đồng bộ.`):A.includes("bảo hành")||A.includes("sla")?(F=16,P=`Leader MRT cam kết gói bảo hành ${((K=b==null?void 0:b.project)==null?void 0:K.warrantyMonths)||24} tháng (SLA 99.98%) do Nam Phan & Vy Trương trực 24/7.`):P=`Leader MRT báo cáo tổng thể: Dự án "${S}" (${M}) đã đạt ${Y}%, đang ở bước ${C.name} (${(b==null?void 0:b.version)||"v1.0.0"}).`}else if(!A||A.includes("làm gì")||A.includes("đang làm")||A.includes("việc"))P=`Mình là ${T.name} (${T.role} • ${T.code}). Hiện tại mình ${w.currentAction.toLowerCase()} cho dự án "${S}" (${w.stateLabel}).`;else if(A.includes("nhiệm vụ")||A.includes("vai trò")||A.includes("phụ trách"))P=`Nhiệm vụ chính của mình tại bộ phận ${w.deptName} là: ${w.assignedTask}. Đầu ra phối hợp với ${bn(F).name}.`;else if(A.includes("qa")||A.includes("kiểm thử")||A.includes("lỗi")||A.includes("bug"))F=12,P=`Mình vừa nhắn kiểm tra nhanh với Khang Đỗ (QA Automation Lead) về chất lượng "${S}" — các ca test chính đều đang được theo dõi chặt chẽ.`;else if(A.includes("android"))F=9,P=`Phần Android của "${S}" do Phúc Thịnh phụ trách bằng Kotlin + Jetpack Compose, đang đồng bộ luồng dữ liệu với đội mình.`;else if(A.includes("windows")||A.includes("desktop"))F=10,P="Phần Windows Desktop (.NET 8 WinUI 3 / .MSIX/.EXE) do Bảo Long phụ trách, mình đang phối hợp đồng bộ API & định dạng dữ liệu.";else if(A.includes("bảo hành")||A.includes("sla")||A.includes("hotfix"))F=16,P=`Sau khi phát hành, Vy Trương và An Phạm ở bộ phận Bảo hành (${((X=b==null?void 0:b.project)==null?void 0:X.warrantyMonths)||24} tháng) sẽ trực 24/7 và vá lỗi Hotfix dưới 2 giờ.`;else if(A.includes("trao đổi")||A.includes("phối hợp")||A.includes("ai")||A.includes("team")){const Y=bn(T.peers[0]),k=bn(T.peers[1]??T.peers[0]);P=`Mình đang trao đổi trực tiếp với ${Y.name} (${Y.role}) và ${k.name} (${k.role}) để đồng bộ tiến độ "${S}" trên ${M}.`}else P=`Đã rõ yêu cầu "${g.trim()}"! Mình (${T.name} — ${T.role}) đang ${w.currentAction.toLowerCase()} và sẽ báo lại cho ${bn(F).name}.`;const O={id:`msg-${++s}`,timeStr:_r(),fromStation:-1,fromCode:"USER",fromName:"Bạn (Quản lý)",fromRole:"Chỉ đạo trực tiếp",fromColor:"#f8fafc",toStation:y,toCode:T.code,toName:T.name,toRole:T.role,toColor:T.dept.color,text:(g==null?void 0:g.trim())||"Hỏi trạng thái công việc",kind:"user"},G={id:`msg-${++s}`,timeStr:_r(),fromStation:y,fromCode:T.code,fromName:T.name,fromRole:T.role,fromColor:T.dept.color,toStation:-1,toCode:"USER",toName:"Bạn",toRole:"Phản hồi tiếng Việt",toColor:"#f8fafc",text:P,kind:"reply"};e=[...e,O,G].slice(-40);let $=null;if(F!==y){const Y=bn(F);$=a(y,F,y===vt?`Leader MRT chỉ đạo @${Y.name}: kiểm tra & cập nhật tiến độ "${S}" ngay nhé!`:`@${Y.name}, vừa nhận câu hỏi từ quản lý về "${S}" — xác nhận tiến độ giúp mình nhé!`,"peer",4.5)}return l(y,P,5),{reply:P,userMsg:O,replyMsg:G,peerMessage:$,status:w}}function _(y,g){var C;const b=(y||"").trim();if(!b)return null;const w=(g==null?void 0:g.currentDept)||wt[0],T=w.stations[0],A=bn(T),S={id:`msg-${++s}`,timeStr:_r(),fromStation:-1,fromCode:"USER",fromName:"Bạn (Giám đốc)",fromRole:"Chỉ đạo qua Leader MRT",fromColor:"#f8fafc",toStation:vt,toCode:Xt.code,toName:"Leader MRT",toRole:Xt.role,toColor:Xt.dept.color,text:b,kind:"user"};e=[...e,S].slice(-40);const M=a(vt,T,`Leader MRT tiếp nhận chỉ đạo "${b}"! ${A.name} (${w.shortName}) triển khai ngay cho "${((C=g==null?void 0:g.project)==null?void 0:C.name)||"dự án"}" nhé.`,"directive",5);return{userMsg:S,followUp:M}}function m(y,g){const b=a(vt,16,`Leader MRT kích hoạt ưu tiên SLA cho ${y.id} (${y.platform}): Vy Trương điều phối vá lỗi gấp!`,"warranty",5),w=a(17,12,`An Phạm đã build xong Hotfix ${y.version} cho ${y.id}, Khang Đỗ verify trước khi đẩy OTA!`,"warranty",5.2);return l(vt,`Đang chỉ đạo xử lý khẩn ${y.id} (${y.version})`,4.8),{first:b,second:w}}function p(y,g){var O,G,$,te,K,X,Y;const b=c(y,g),w=bn(y),T=g==null?void 0:g.project,A=(T==null?void 0:T.name)||"SmartPOS Bán Hàng",S=_s(T),M=((te=($=(G=T==null?void 0:T.stageDetails)==null?void 0:G[((O=b.dept)==null?void 0:O.index)??(g==null?void 0:g.stageIndex)??0])==null?void 0:$.deliverables)==null?void 0:te[0])||b.assignedTask,C=`[${b.modelName}] ${b.name} (${b.role}) đang thực thi nhiệm vụ "${b.concreteMission}" cho dự án ${A} (${S}). Đầu ra trọng tâm: ${M}.`,P=`Xin báo cáo, tôi là ${b.name}, dùng mô hình ${b.modelName}. Hiện tôi đang thực hiện nhiệm vụ ${b.concreteMission} cho dự án ${A}.`,F=y===vt?((X=(K=g==null?void 0:g.currentDept)==null?void 0:K.stations)==null?void 0:X[0])??0:((Y=w.peers)==null?void 0:Y[0])??0;return a(y,F,C,"task",5.2),l(y,C,5.2),{stationIndex:y,agentName:b.name,role:b.role,gender:b.gender,modelName:b.modelName,voiceId:b.voiceId,report:C,speechText:P}}u(n);function x(){return{messages:[...e],activeBubbles:[...t],activeLink:i?{...i}:null,latestMessage:e[e.length-1]||null}}return{getAgentStatus:c,update:f,askAgent:v,runAgentTask:p,broadcastDirective:_,onWarrantyTicket:m,resetForProject:u,getState:x}}const Vx=["Tạo phần mềm Android và Windows quản lý kho thông minh, bảo hành 24 tháng","Chuyển sang bước Xây dựng và tăng tốc 4x","Kích hoạt ticket bảo hành và vá lỗi Hotfix ngay","Bật chế độ Ban đêm và khởi động Flycam tuần tra","Gọi Leader MRT báo cáo tổng thể dự án","Bật nhạc YouTube Lofi giải trí cho cả văn phòng"];function Wx(n=new Date){const e=String(n.getHours()).padStart(2,"0"),t=String(n.getMinutes()).padStart(2,"0"),i=String(n.getSeconds()).padStart(2,"0");return`${e}:${t}:${i}`}function $x(n){const e=[];return(n.includes("android")||n.includes("apk")||n.includes("aab")||n.includes("di động"))&&e.push("android"),(n.includes("windows")||n.includes("win")||n.includes("exe")||n.includes("msix")||n.includes("desktop")||n.includes("pc"))&&e.push("windows"),(n.includes("web")||n.includes("cloud")||n.includes("website")||n.includes("saas"))&&e.push("web"),(n.includes("ios")||n.includes("iphone")||n.includes("ipad")||n.includes("ipa"))&&e.push("ios"),e.length>0?e:["android","windows"]}function Xx(n){const e=n.match(/(\d{1,2})\s*tháng/i);if(e){const t=Number(e[1]);if(t>=6&&t<=60)return t}return 24}function Yx(n){let e=n.replace(/(yêu cầu|tạo|làm|xây dựng|phát triển|khởi tạo|thiết kế|viết|build)\s*(dự án|phần mềm|app|ứng dụng|hệ thống)?/gi," ").replace(/(?:^|[\s,.;:]+)(?:android|windows|web|ios|đa nền tảng)(?=$|[\s,.;:]+)/gi," ").replace(/(?:bảo hành\s*\d+\s*tháng)/gi," ").replace(/(?:^|[\s,.;:]+)(?:và|cho|bằng|với|mới|ngay)(?=$|[\s,.;:]+)/gi," ").replace(/[,.;:]+/g," ").replace(/\s+/g," ").trim();return e=e.replace(/^(?:và|cho|bằng|với|mới|ngay)\s+/i,"").trim(),e.length<4?"Dự Án Phần Mềm Tối Cao":e.charAt(0).toUpperCase()+e.slice(1,46)}function qx(n){const e=n.match(/(https?:\/\/(?:www\.)?(?:youtube\.com|youtu\.be|m\.youtube\.com)\/[^\s]+)/i);return e?e[1]:null}let jx=0;function Kx(n,e){var c,h,d,u,f,v,_,m,p,x,y,g,b,w,T,A,S,M,C,P,F,O,G,$,te,K;const t=(n||"").trim();if(!t)return null;const i=t.toLowerCase(),s=[];let o=null;const r=/(tạo|khởi tạo|phát triển|xây dựng phần mềm|làm phần mềm|làm app|tạo app|dự án mới|yêu cầu làm|yêu cầu tạo|viết phần mềm|viết app|build phần mềm|build app|tạo mới)/i.test(i);if(r){const X=$x(i),Y=Xx(t),k=Yx(t);(c=e.startProject)==null||c.call(e,{name:k,platforms:X,description:t,warrantyMonths:Y}),s.push(`Khởi chạy dự án "${k}" (${X.map(Z=>Z.toUpperCase()).join(" + ")}, bảo hành ${Y} tháng)`),o=0}const a=/(chuyển|nhảy|sang bước|sang giai đoạn|tới bước|bước \d|giai đoạn \d|mở bước)/i.test(i);if(!r||a){let X=null;/(bước 1|giai đoạn 1|yêu cầu|phân tích|\bba\b)/i.test(i)&&a?X=0:/(bước 2|giai đoạn 2|kế hoạch|kiến trúc|sprint)/i.test(i)?X=1:/(bước 3|giai đoạn 3|xây dựng|lập trình|\bcode\b)/i.test(i)&&a?X=2:/(bước 4|giai đoạn 4|kiểm thử|\bqa\b|test)/i.test(i)?X=3:/(bước 5|giai đoạn 5|phân phối|đóng gói|release|xuất bản)/i.test(i)?X=4:/(bước 6|giai đoạn 6)/i.test(i)&&(X=5),X!==null&&((h=e.jumpToStage)==null||h.call(e,X),s.push(`Chuyển quy trình sang giai đoạn ${X+1}/6`),o=X)}if(!r&&/(ticket|báo lỗi|vá lỗi|hotfix|kích hoạt bảo hành|xử lý bảo hành)/i.test(i)){const X=(d=e.triggerWarranty)==null?void 0:d.call(e);s.push(`Kích hoạt xử lý bảo hành ${(X==null?void 0:X.id)||""} & vá lỗi Hotfix ${(X==null?void 0:X.version)||""}`.trim()),o=5}if(/(4x|tốc độ 4|tối đa|chạy nhanh|nhanh nhất|tăng tốc)/i.test(i)?((u=e.setSpeed)==null||u.call(e,4),s.push("Đặt tốc độ vận hành 4x")):/(2x|tốc độ 2)/i.test(i)?((f=e.setSpeed)==null||f.call(e,2),s.push("Đặt tốc độ vận hành 2x")):/(1x|tốc độ 1|tốc độ chuẩn)/i.test(i)&&((v=e.setSpeed)==null||v.call(e,1),s.push("Đặt tốc độ vận hành 1x")),/(tạm dừng|ngưng|dừng lại)/i.test(i)?((_=e.setPaused)==null||_.call(e,!0),s.push("Tạm dừng tiến trình mô phỏng")):/(tiếp tục|chạy tiếp|khởi chạy lại)/i.test(i)&&((m=e.setPaused)==null||m.call(e,!1),s.push("Tiếp tục chạy mô phỏng")),/(tắt cảnh báo|hết sự cố|trở lại bình thường|bình thường hóa)/i.test(i)?((p=e.setAlertMode)==null||p.call(e,!1),s.push("Khôi phục trạng thái SYSTEM HEALTHY")):/(bật cảnh báo|cảnh báo p1|báo động|mô phỏng sự cố)/i.test(i)&&((x=e.setAlertMode)==null||x.call(e,!0),s.push("Kích hoạt trạng thái CẢNH BÁO P1 toàn tường LED")),/(ban đêm|tắt đèn|chế độ đêm|ánh sáng đêm)/i.test(i)?((y=e.setNightMode)==null||y.call(e,!0),s.push("Chuyển phòng điều hành sang ánh sáng Ban đêm")):/(ban ngày|bật đèn|chế độ ngày|sáng lên)/i.test(i)&&((g=e.setNightMode)==null||g.call(e,!1),s.push("Chuyển phòng điều hành sang ánh sáng Ban ngày")),/(tắt flycam|thoát flycam|dừng flycam)/i.test(i)?((b=e.setFlycam)==null||b.call(e,!1),s.push("Thoát góc nhìn Flycam về điều khiển tự do")):/(flycam|tuần tra|drone)/i.test(i)&&((w=e.setFlycam)==null||w.call(e,!0),s.push("Bật góc nhìn trực tiếp từ Flycam tuần tra")),/(tắt youtube|đóng youtube|tắt nhạc)/i.test(i))(T=e.closeYoutube)==null||T.call(e),s.push("Đóng trình phát YouTube Mini");else if(/(youtube|nghe nhạc|bật nhạc|lofi|giải trí|synthwave|piano)/i.test(i)){let Y=qx(t);Y||(i.includes("synthwave")?Y="4xDzrJKXOOY":i.includes("piano")?Y="lCOF9LN_Zxs":i.includes("thiên nhiên")?Y="BHACKCNDMW8":Y="jfKfPfyJRdk"),(A=e.openYoutube)==null||A.call(e,Y),s.push("Mở trình phát giải trí YouTube Mini")}(!/(flycam|tuần tra|drone)/i.test(i)||/(tắt flycam|thoát flycam)/i.test(i))&&(/(gọi leader|gọi mrt|leader mrt|báo cáo tổng thể|xem mrt)/i.test(i)?((S=e.applyPreset)==null||S.call(e,"mrt"),s.push("Đưa camera tới Leader MRT & mở báo cáo")):/(màn hình led|tường led|xem led)/i.test(i)?((M=e.applyPreset)==null||M.call(e,"led"),s.push("Đưa camera tới tường LED MRT SOFT HUB")):/(toàn cảnh|quay lại phòng)/i.test(i)?((C=e.applyPreset)==null||C.call(e,"overview"),s.push("Đưa camera về góc nhìn Toàn cảnh")):/(bàn dev|nhân viên|phòng ban)/i.test(i)?((P=e.applyPreset)==null||P.call(e,"devs"),s.push("Đưa camera tới khu vực Bàn Dev")):/(trên cao|từ trên)/i.test(i)&&((F=e.applyPreset)==null||F.call(e,"top"),s.push("Đưa camera lên góc nhìn Trên cao"))),/(tắt giọng nói|tắt cit voice|im lặng|ngừng đọc)/i.test(i)?((O=e.setVoiceEnabled)==null||O.call(e,!1),s.push("Tắt tự động đọc giọng nói AI")):/(bật giọng nói|kết nối cit voice|mở cit voice|bật cit voice|khởi động giọng nói)/i.test(i)&&((G=e.openVoice)==null||G.call(e,!0),s.push("Mở & kết nối CIT Voice Studio")),/(đóng báo cáo|tắt báo cáo|ẩn báo cáo)/i.test(i)?(($=e.toggleReport)==null||$.call(e,!1),s.push("Đóng màn hình Báo cáo Tiến độ")):/(mở báo cáo|màn hình báo cáo|màn hình tiến độ|xem tiến độ|bảng báo cáo)/i.test(i)&&((te=e.toggleReport)==null||te.call(e,!0),s.push("Mở màn hình Báo cáo Tiến độ"));const l=(K=e.dispatchViaMrt)==null?void 0:K.call(e,t,s,o);return s.length===0&&s.push("Truyền lệnh trực tiếp qua Leader MRT tới bộ phận đang vận hành"),{id:`cmd-${++jx}`,timeStr:Wx(),prompt:t,executedSteps:s,mrtReply:(l==null?void 0:l.text)||`Leader MRT đã tiếp nhận & thực thi lệnh tối cao: "${t}".`}}function vs(n,e,t={}){if(!n||!e)return{resetPosition:()=>{}};const{storageKey:i=null}=t;let s=null;function o(){if(!n.style.left||!n.style.top)return;const c=n.getBoundingClientRect(),h=Math.max(12,window.innerWidth-c.width-12),d=Math.max(12,window.innerHeight-c.height-12),u=parseFloat(n.style.left)||c.left,f=parseFloat(n.style.top)||c.top;n.style.left=`${Math.min(h,Math.max(12,u))}px`,n.style.top=`${Math.min(d,Math.max(12,f))}px`}function r(){if(i)try{const c=localStorage.getItem(i);if(!c)return;const h=JSON.parse(c);typeof(h==null?void 0:h.left)=="number"&&typeof(h==null?void 0:h.top)=="number"&&(n.style.left=`${h.left}px`,n.style.top=`${h.top}px`,n.style.right="auto",n.style.bottom="auto",n.style.transform="none",requestAnimationFrame(o))}catch{}}function a(){if(n.style.left="",n.style.top="",n.style.right="",n.style.bottom="",n.style.transform="",i)try{localStorage.removeItem(i)}catch{}}e.addEventListener("pointerdown",c=>{if(c.target.closest("button"))return;const h=n.getBoundingClientRect();s={pointerId:c.pointerId,startX:c.clientX,startY:c.clientY,baseLeft:h.left,baseTop:h.top,offsetX:c.clientX-h.left,offsetY:c.clientY-h.top,moved:!1}}),window.addEventListener("pointermove",c=>{if(!s||c.pointerId!==s.pointerId)return;const h=Math.hypot(c.clientX-s.startX,c.clientY-s.startY);if(!s.moved){if(h<=4)return;s.moved=!0,n.style.left=`${s.baseLeft}px`,n.style.top=`${s.baseTop}px`,n.style.right="auto",n.style.bottom="auto",n.style.transform="none"}const d=n.getBoundingClientRect(),u=Math.max(12,window.innerWidth-d.width-12),f=Math.max(12,window.innerHeight-d.height-12),v=Math.min(u,Math.max(12,c.clientX-s.offsetX)),_=Math.min(f,Math.max(12,c.clientY-s.offsetY));n.style.left=`${v}px`,n.style.top=`${_}px`});const l=c=>{if(!s||c.pointerId!==void 0&&c.pointerId!==s.pointerId)return;const h=s.moved;if(s=null,h&&(n.dataset.justDragged="1",setTimeout(()=>{delete n.dataset.justDragged},90),i))try{localStorage.setItem(i,JSON.stringify({left:parseFloat(n.style.left)||12,top:parseFloat(n.style.top)||12}))}catch{}};return window.addEventListener("pointerup",l),window.addEventListener("pointercancel",l),window.addEventListener("resize",o),r(),{resetPosition:a}}function Zx(){const n=[{el:document.querySelector(".hud-header"),btn:document.getElementById("btn-min-header"),collapseTitle:"Thu nhỏ thanh tiêu đề",expandTitle:"Mở rộng thanh tiêu đề"},{el:document.getElementById("pipeline-bar"),btn:document.getElementById("btn-min-pipeline"),collapseTitle:"Thu nhỏ thanh quy trình 6 bước",expandTitle:"Mở rộng thanh quy trình 6 bước"},{el:document.getElementById("studio-drawer"),btn:document.getElementById("btn-min-studio"),collapseTitle:"Thu nhỏ Studio",expandTitle:"Mở rộng Studio"},{el:document.getElementById("inspector"),btn:document.getElementById("btn-min-inspector"),collapseTitle:"Thu nhỏ bảng chi tiết",expandTitle:"Mở rộng bảng chi tiết"},{el:document.getElementById("supreme-window"),btn:document.getElementById("btn-min-supreme"),collapseTitle:"Thu nhỏ bảng Chỉ đạo tối cao",expandTitle:"Mở rộng bảng Chỉ đạo tối cao"},{el:document.getElementById("settings-window"),btn:document.getElementById("btn-min-settings"),collapseTitle:"Thu nhỏ Tùy chỉnh hệ thống",expandTitle:"Mở rộng Tùy chỉnh hệ thống"},{el:document.getElementById("voice-window"),btn:document.getElementById("btn-min-voice"),collapseTitle:"Thu nhỏ CIT Voice Studio",expandTitle:"Mở rộng CIT Voice Studio"},{el:document.getElementById("report-window"),btn:document.getElementById("btn-min-report"),collapseTitle:"Thu nhỏ Màn hình Báo cáo Tiến độ",expandTitle:"Mở rộng Màn hình Báo cáo Tiến độ"},{el:document.querySelector(".hud-controls"),btn:document.getElementById("btn-min-controls"),collapseTitle:"Thu nhỏ thanh điều khiển",expandTitle:"Mở rộng thanh điều khiển"}];for(const b of n)!b.el||!b.btn||b.btn.addEventListener("click",w=>{w.stopPropagation();const T=b.el.classList.toggle("minimized");b.btn.textContent=T?"+":"–",b.btn.title=T?b.expandTitle:b.collapseTitle});const e=document.getElementById("supreme-window"),t=e==null?void 0:e.querySelector(".supreme-header");e&&t&&vs(e,t);const i=document.getElementById("settings-window"),s=i==null?void 0:i.querySelector(".settings-header");i&&s&&vs(i,s);const o=document.getElementById("voice-window"),r=o==null?void 0:o.querySelector(".voice-header");o&&r&&vs(o,r);const a=document.getElementById("report-window"),l=a==null?void 0:a.querySelector(".report-header");a&&l&&vs(a,l);const c=document.getElementById("agent-ticker"),h=document.getElementById("btn-close-ticker"),d=document.getElementById("btn-toggle-ticker"),u="mrt_aicomms_visible_v1";c&&vs(c,c,{storageKey:"mrt_aicomms_pos_v1"});function f(b){if(!c)return;const w=!!b;c.classList.toggle("hidden",!w),d==null||d.classList.toggle("active",w);try{localStorage.setItem(u,w?"1":"0")}catch{}}try{const b=localStorage.getItem(u);f(b!=="0")}catch{f(!0)}h&&h.addEventListener("click",b=>{b.stopPropagation(),f(!1)}),d==null||d.addEventListener("click",()=>{const b=c==null?void 0:c.classList.contains("hidden");f(b)});const v=document.querySelector(".hud-controls"),_=document.getElementById("ctrl-drag-handle"),m=document.getElementById("btn-orient-controls"),p="mrt_controls_orient_v1";let x={resetPosition:()=>{}};function y(b,w=!1){if(!v)return;const T=!!b;v.classList.toggle("vertical",T),m&&(m.textContent=T?"⇄":"⇅",m.title=T?"Chuyển bảng điều khiển thành hàng ngang":"Chuyển bảng điều khiển thành hàng dọc"),w&&x.resetPosition();try{localStorage.setItem(p,T?"vertical":"horizontal")}catch{}}try{const b=localStorage.getItem(p);y(b==="vertical",!1)}catch{y(!1,!1)}v&&_&&(x=vs(v,_,{storageKey:"mrt_controls_pos_v1"})),m==null||m.addEventListener("click",b=>{b.stopPropagation(),y(!(v!=null&&v.classList.contains("vertical")),!0)});function g(b,w){b&&(b.classList.remove("minimized"),w&&(w.textContent="–"))}return{unminimize:g,setTickerVisible:f,setControlsVertical:y}}const yr=[{id:"jfKfPfyJRdk",label:"Lofi Coding Chill"},{id:"4xDzrJKXOOY",label:"Synthwave Radio"},{id:"lCOF9LN_Zxs",label:"Piano Thư Giãn"},{id:"BHACKCNDMW8",label:"Thiên nhiên 4K"}],xr=/^[a-zA-Z0-9_-]{11}$/;function dd(n){const e=(n||"").trim();if(!e)return null;let t=null;if(xr.test(e))t=e;else try{const i=/^https?:\/\//i.test(e)?e:`https://${e}`,s=new URL(i),o=s.hostname.replace(/^www\./,"").toLowerCase();if(o==="youtu.be"){const r=s.pathname.split("/").filter(Boolean)[0];r&&xr.test(r)&&(t=r)}else if(o==="youtube.com"||o==="m.youtube.com"||o==="music.youtube.com"||o==="youtube-nocookie.com"){const r=s.searchParams.get("v");if(r&&xr.test(r))t=r;else{const a=s.pathname.split("/").filter(Boolean);a.length>=2&&["shorts","live","embed","v"].includes(a[0])&&xr.test(a[1])&&(t=a[1])}}}catch{return null}return t?{videoId:t,embedUrl:`https://www.youtube-nocookie.com/embed/${t}?autoplay=1&rel=0`}:null}function Jx({windowEl:n,onStateChange:e}){const t=n.querySelector(".yt-header"),i=n.querySelector("#btn-min-yt"),s=n.querySelector("#btn-resize-yt"),o=n.querySelector("#btn-close-yt"),r=n.querySelector("#yt-presets"),a=n.querySelector("#yt-url-form"),l=n.querySelector("#yt-url-input"),c=n.querySelector("#yt-status"),h=n.querySelector("#yt-iframe");let d=yr[0].id,u=!1;function f(g,b=""){d=g,h.src=`https://www.youtube-nocookie.com/embed/${g}?autoplay=1&rel=0`,c.textContent=b?`Đang phát: ${b}`:`Đang phát video: ${g}`,c.classList.remove("yt-err");for(const w of r.querySelectorAll(".yt-chip"))w.classList.toggle("active",w.dataset.ytId===g)}yr.forEach(g=>{const b=document.createElement("button");b.type="button",b.className="yt-chip",b.dataset.ytId=g.id,b.textContent=g.label,b.addEventListener("click",()=>{f(g.id,g.label)}),r.appendChild(b)});function v(g){if(u=!0,n.classList.remove("hidden"),n.classList.remove("minimized"),i.textContent="–",g){const b=dd(g);b&&f(b.videoId)}else if(!h.src){const b=yr.find(w=>w.id===d)||yr[0];f(b.id,b.label)}e==null||e(!0)}function _(){u=!1,n.classList.add("hidden"),h.src="",e==null||e(!1)}function m(){u?_():v()}function p(){return u}i.addEventListener("click",g=>{g.stopPropagation();const b=n.classList.toggle("minimized");i.textContent=b?"+":"–",i.title=b?"Mở rộng YouTube Mini":"Thu nhỏ (vẫn phát nhạc)"}),s.addEventListener("click",g=>{g.stopPropagation();const b=n.classList.toggle("yt-large");s.textContent=b?"Nhỏ":"Vừa"}),o.addEventListener("click",g=>{g.stopPropagation(),_()}),a.addEventListener("submit",g=>{g.preventDefault();const b=dd(l.value);if(!b){c.textContent="Link hoặc ID YouTube chưa hợp lệ (hỗ trợ watch?v=, youtu.be/, shorts/, ID 11 ký tự).",c.classList.add("yt-err");return}l.value="",f(b.videoId)});let x=null;t.addEventListener("pointerdown",g=>{if(g.target.closest("button"))return;const b=n.getBoundingClientRect();n.style.left=`${b.left}px`,n.style.top=`${b.top}px`,n.style.right="auto",n.style.bottom="auto",x={offsetX:g.clientX-b.left,offsetY:g.clientY-b.top},t.setPointerCapture(g.pointerId)}),t.addEventListener("pointermove",g=>{if(!x)return;const b=n.getBoundingClientRect(),w=Math.max(12,window.innerWidth-b.width-12),T=Math.max(12,window.innerHeight-b.height-12),A=Math.min(w,Math.max(12,g.clientX-x.offsetX)),S=Math.min(T,Math.max(12,g.clientY-x.offsetY));n.style.left=`${A}px`,n.style.top=`${S}px`});const y=()=>{x=null};return t.addEventListener("pointerup",y),t.addEventListener("pointercancel",y),{open:v,close:_,toggle:m,isOpen:p}}const mo={fresh:{id:"fresh",label:"Tươi mới",isLightHud:!1,wallTint:16777215,floorTint:16777215,coveColor:2831942,bgColor:724759},cyber:{id:"cyber",label:"Cyber Tech",isLightHud:!1,wallTint:6452366,floorTint:8754344,coveColor:988970,bgColor:330004},light:{id:"light",label:"Sáng tối giản",isLightHud:!0,wallTint:16711422,floorTint:16317180,coveColor:4674921,bgColor:14870768},gold:{id:"gold",label:"Hoàng kim",isLightHud:!1,wallTint:8156267,floorTint:10392969,coveColor:1841431,bgColor:1183500}},Qx=[{color:"#38bdf8",label:"Xanh Cyan"},{color:"#10b981",label:"Xanh Ngọc"},{color:"#f59e0b",label:"Vàng Gold"},{color:"#818cf8",label:"Tím Indigo"},{color:"#f43f5e",label:"Đỏ Rose"}],go={theme:"fresh",accent:"#38bdf8",fontScale:1,hudOpacity:88,brandName:"MRT SOFT HUB",wallColor:"#ffffff",floorColor:"#ffffff",deskColor:"#f3f6fa",chairColor:"#ffffff",trimColor:"#d9b87a",ceilingGlowColor:"#f9fcff",showGlass:!0,showPlants:!0,showCarpet:!0,showLounge:!0,showWallArt:!0,showAmbientStrips:!0,showBubbles:!0,showServerRack:!0,showCoffeeBar:!0,showCctv:!0,showFlycam:!0,showLockers:!0,showClocks:!0,autoWalkLeader:!0,roomLayout:"work",showMeetingProps:!0,autoMeetingBoard:!0,autoFocusLayout:!0,...Vs},ku="mrt_soft_hub_settings_v1";function ud(n){return`#${Number(n).toString(16).padStart(6,"0")}`}function eM(){try{const n=localStorage.getItem(ku);if(!n)return{...go};const e=JSON.parse(n);return{...go,...e,theme:mo[e.theme]?e.theme:go.theme}}catch{return{...go}}}function tM({windowEl:n,onApply:e,onReturnPodium:t,onFocusMeeting:i,onFocusOpsBoard:s}){let o=eM();const r=Array.from(n.querySelectorAll("[data-set-tab]")),a={colors:n.querySelector("#set-tab-colors"),decor:n.querySelector("#set-tab-decor"),equip:n.querySelector("#set-tab-equip"),layout:n.querySelector("#set-tab-layout"),opsboard:n.querySelector("#set-tab-opsboard")},l=n.querySelector("#set-themes"),c=n.querySelector("#set-accents"),h=Array.from(n.querySelectorAll("[data-font-scale]")),d=n.querySelector("#set-opacity"),u=n.querySelector("#set-opacity-val"),f=n.querySelector("#set-brand"),v=n.querySelector("#col-wall"),_=n.querySelector("#col-floor"),m=n.querySelector("#col-desk"),p=n.querySelector("#col-chair"),x=n.querySelector("#col-trim"),y=n.querySelector("#col-ceiling"),g=n.querySelector("#chk-glass"),b=n.querySelector("#chk-plants"),w=n.querySelector("#chk-carpet"),T=n.querySelector("#chk-lounge"),A=n.querySelector("#chk-wall-art"),S=n.querySelector("#chk-ambient-strips"),M=n.querySelector("#chk-bubbles"),C=n.querySelector("#chk-server-rack"),P=n.querySelector("#chk-coffee-bar"),F=n.querySelector("#chk-cctv"),O=n.querySelector("#chk-flycam"),G=n.querySelector("#chk-lockers"),$=n.querySelector("#chk-clocks"),te=n.querySelector("#chk-autowalk"),K=n.querySelector("#btn-return-podium"),X=n.querySelector("#btn-reset-settings"),Y=Array.from(n.querySelectorAll("[data-room-layout]")),k=n.querySelector("#chk-meeting-props"),Z=n.querySelector("#chk-auto-meeting-board"),W=n.querySelector("#chk-auto-focus-layout"),N=n.querySelector("#btn-cam-meeting"),j=n.querySelector("#ops-themes"),ae=n.querySelector("#ops-modes"),ie=n.querySelector("#ops-cfg-title"),ye=n.querySelector("#ops-cfg-subtitle"),fe=n.querySelector("#ops-cfg-agenda"),Ie=n.querySelector("#ops-cfg-brightness"),ke=n.querySelector("#ops-cfg-brightness-val"),he=Array.from(n.querySelectorAll("[data-ops-scale]")),ge=n.querySelector("#chk-ops-left"),I=n.querySelector("#chk-ops-right"),Me=n.querySelector("#chk-ops-radar"),z=n.querySelector("#chk-ops-aifeed"),_e=n.querySelector("#chk-ops-deptgrid"),ce=n.querySelector("#btn-cam-opsboard");function Le(U){for(const se of r)se.classList.toggle("active",se.dataset.setTab===U);Object.entries(a).forEach(([se,oe])=>{oe==null||oe.classList.toggle("hidden",se!==U)})}for(const U of r)U.addEventListener("click",()=>{Le(U.dataset.setTab)});Object.values(mo).forEach(U=>{const se=document.createElement("button");se.type="button",se.className="set-theme-btn",se.dataset.themeId=U.id,se.textContent=U.label,se.addEventListener("click",()=>{o.theme=U.id,o.wallColor=ud(U.wallTint),o.floorColor=ud(U.floorTint),V()}),l.appendChild(se)}),Qx.forEach(U=>{const se=document.createElement("button");se.type="button",se.className="accent-dot-btn",se.dataset.accentColor=U.color,se.title=U.label,se.style.background=U.color,se.addEventListener("click",()=>{o.accent=U.color,V()}),c.appendChild(se)}),j&&Object.values(Qn).forEach(U=>{const se=document.createElement("button");se.type="button",se.className="set-theme-btn",se.dataset.opsTheme=U.id,se.textContent=U.label,se.addEventListener("click",()=>{o.opsTheme=U.id,V()}),j.appendChild(se)}),ae&&lx.forEach(U=>{const se=document.createElement("button");se.type="button",se.className="set-theme-btn",se.dataset.opsMode=U.id,se.textContent=U.label,se.addEventListener("click",()=>{o.opsMode=U.id,V()}),ae.appendChild(se)});function Ee(U){const se=o.roomLayout||"work";o.roomLayout=U,o.autoMeetingBoard&&(se==="work"&&U!=="work"?o.opsMode="meeting":se!=="work"&&U==="work"&&o.opsMode==="meeting"&&(o.opsMode="sdlc")),V()}for(const U of Y)U.addEventListener("click",()=>{Ee(U.dataset.roomLayout)});function L(){for(const U of l.querySelectorAll(".set-theme-btn"))U.classList.toggle("active",U.dataset.themeId===o.theme);for(const U of c.querySelectorAll(".accent-dot-btn"))U.classList.toggle("active",U.dataset.accentColor===o.accent);for(const U of h)U.classList.toggle("active",Number(U.dataset.fontScale)===o.fontScale);d.value=String(o.hudOpacity),u.textContent=`${o.hudOpacity}%`,f.value=o.brandName,v&&(v.value=o.wallColor),_&&(_.value=o.floorColor),m&&(m.value=o.deskColor),p&&(p.value=o.chairColor),x&&(x.value=o.trimColor),y&&(y.value=o.ceilingGlowColor),g.checked=o.showGlass,b.checked=o.showPlants,w&&(w.checked=o.showCarpet),T&&(T.checked=o.showLounge),A&&(A.checked=o.showWallArt),S&&(S.checked=o.showAmbientStrips),M.checked=o.showBubbles,C&&(C.checked=o.showServerRack),P&&(P.checked=o.showCoffeeBar),F&&(F.checked=o.showCctv),O&&(O.checked=o.showFlycam),G&&(G.checked=o.showLockers),$&&($.checked=o.showClocks),te.checked=o.autoWalkLeader;for(const U of Y)U.classList.toggle("active",U.dataset.roomLayout===o.roomLayout);if(k&&(k.checked=o.showMeetingProps),Z&&(Z.checked=o.autoMeetingBoard),W&&(W.checked=o.autoFocusLayout),j)for(const U of j.querySelectorAll("[data-ops-theme]"))U.classList.toggle("active",U.dataset.opsTheme===o.opsTheme);if(ae)for(const U of ae.querySelectorAll("[data-ops-mode]"))U.classList.toggle("active",U.dataset.opsMode===o.opsMode);ie&&ie.value!==(o.opsTitle||"")&&(ie.value=o.opsTitle||""),ye&&ye.value!==(o.opsSubtitle||"")&&(ye.value=o.opsSubtitle||""),fe&&fe.value!==(o.opsAgenda||"")&&(fe.value=o.opsAgenda||""),Ie&&(Ie.value=String(o.opsBrightness)),ke&&(ke.textContent=`${o.opsBrightness}%`);for(const U of he)U.classList.toggle("active",Number(U.dataset.opsScale)===Number(o.opsTextScale));ge&&(ge.checked=o.opsShowLeft),I&&(I.checked=o.opsShowRight),Me&&(Me.checked=o.opsShowRadar),z&&(z.checked=o.opsShowAiFeed),_e&&(_e.checked=o.opsShowDeptGrid)}function E(){const U=document.documentElement,se=mo[o.theme]||mo.fresh,oe=(o.hudOpacity/100).toFixed(2);U.style.setProperty("--accent-cyan",o.accent),U.style.setProperty("--ui-scale",String(o.fontScale)),se.isLightHud?(document.body.classList.add("theme-light"),U.style.setProperty("--bg-glass",`rgba(248, 250, 252, ${oe})`),U.style.setProperty("--bg-glass-hover","rgba(226, 232, 240, 0.96)"),U.style.setProperty("--border-glass","rgba(15, 23, 42, 0.16)"),U.style.setProperty("--text-main","#0f172a"),U.style.setProperty("--text-muted","#475569")):(document.body.classList.remove("theme-light"),U.style.setProperty("--bg-glass",`rgba(11, 17, 29, ${oe})`),U.style.setProperty("--bg-glass-hover","rgba(25, 38, 58, 0.94)"),U.style.setProperty("--border-glass","rgba(148, 215, 255, 0.28)"),U.style.setProperty("--text-main","#f8fafc"),U.style.setProperty("--text-muted","#cbd5e1"))}function V(){L(),E();try{localStorage.setItem(ku,JSON.stringify(o))}catch{}e==null||e({...o,themeCfg:mo[o.theme]})}for(const U of h)U.addEventListener("click",()=>{o.fontScale=Number(U.dataset.fontScale),V()});d.addEventListener("input",()=>{o.hudOpacity=Number(d.value),V()}),f.addEventListener("input",()=>{o.brandName=f.value.trim()||"MRT SOFT HUB",V()});const re=[[v,"wallColor"],[_,"floorColor"],[m,"deskColor"],[p,"chairColor"],[x,"trimColor"],[y,"ceilingGlowColor"]];for(const[U,se]of re)U==null||U.addEventListener("input",()=>{o[se]=U.value,V()});const q=[[g,"showGlass"],[b,"showPlants"],[w,"showCarpet"],[T,"showLounge"],[A,"showWallArt"],[S,"showAmbientStrips"],[M,"showBubbles"],[C,"showServerRack"],[P,"showCoffeeBar"],[F,"showCctv"],[O,"showFlycam"],[G,"showLockers"],[$,"showClocks"],[te,"autoWalkLeader"],[k,"showMeetingProps"],[Z,"autoMeetingBoard"],[W,"autoFocusLayout"],[ge,"opsShowLeft"],[I,"opsShowRight"],[Me,"opsShowRadar"],[z,"opsShowAiFeed"],[_e,"opsShowDeptGrid"]];for(const[U,se]of q)U==null||U.addEventListener("change",()=>{o[se]=U.checked,V()});ie==null||ie.addEventListener("input",()=>{o.opsTitle=ie.value,V()}),ye==null||ye.addEventListener("input",()=>{o.opsSubtitle=ye.value,V()}),fe==null||fe.addEventListener("input",()=>{o.opsAgenda=fe.value,V()}),Ie==null||Ie.addEventListener("input",()=>{o.opsBrightness=Number(Ie.value),V()});for(const U of he)U.addEventListener("click",()=>{o.opsTextScale=Number(U.dataset.opsScale),V()});return N==null||N.addEventListener("click",()=>{i==null||i()}),ce==null||ce.addEventListener("click",()=>{s==null||s()}),K.addEventListener("click",()=>{t==null||t()}),X.addEventListener("click",()=>{o={...go},V()}),{init:()=>V(),getSettings:()=>({...o}),openTab:U=>Le(U),setRoomLayout:U=>Ee(U),toggleMeetingQuick:()=>Ee(o.roomLayout==="work"?"boardroom":"work")}}const Bu="mrt_cit_voice_cfg_v1",za={enabled:!0,speed:1.05,autoReadSupreme:!0,autoReadAgent:!0,autoReadStage:!1,engineMode:"auto",geminiModel:tc[0].id,geminiApiKey:"",remoteUrl:""};function nM(){try{const n=localStorage.getItem(Bu);return n?{...za,...JSON.parse(n)}:{...za}}catch{return{...za}}}function Pn(n){try{localStorage.setItem(Bu,JSON.stringify(n))}catch{}}function lo(n){return String(n||"").trim().replace(/\/+$/,"")}function iM(n,e=""){const t=atob(n),i=new Uint8Array(t.length);for(let _=0;_<t.length;_++)i[_]=t.charCodeAt(_);const s=String(e||"").toLowerCase();if(s&&!s.includes("l16")&&!s.includes("pcm")&&(s.includes("wav")||s.includes("mpeg")||s.includes("mp3")||s.includes("ogg")))return new Blob([i],{type:e});const o=s.match(/rate=(\d+)/),r=o?Number(o[1]):24e3,a=1,l=16,c=r*a*(l/8),h=a*(l/8),d=i.length,u=new ArrayBuffer(44+d),f=new DataView(u),v=(_,m)=>{for(let p=0;p<m.length;p++)f.setUint8(_+p,m.charCodeAt(p))};return v(0,"RIFF"),f.setUint32(4,36+d,!0),v(8,"WAVE"),v(12,"fmt "),f.setUint32(16,16,!0),f.setUint16(20,1,!0),f.setUint16(22,a,!0),f.setUint32(24,r,!0),f.setUint32(28,c,!0),f.setUint16(32,h,!0),f.setUint16(34,l,!0),v(36,"data"),f.setUint32(40,d,!0),new Uint8Array(u,44).set(i),new Blob([u],{type:"audio/wav"})}function sM(n){if(typeof window>"u"||!("speechSynthesis"in window))return null;const t=(window.speechSynthesis.getVoices()||[]).filter(a=>String(a.lang||"").toLowerCase().startsWith("vi"));if(t.length===0)return null;const o=n==="female"?["hoaimy","hoài my","linh","mai","anh","ngọc","female","woman","an"]:["namminh","nam minh","minh","tuấn","hải","male","man","nam"];return t.find(a=>{const l=`${a.name} ${a.voiceURI}`.toLowerCase();return o.some(c=>l.includes(c))})||t[0]}const co=[Xt,...Ui];function oM({windowEl:n,onStateChange:e,getLatestConversationTurns:t}){const i=document.getElementById("voice-status-badge"),s=document.getElementById("voice-engine-info"),o=document.getElementById("voice-dir-path"),r=document.getElementById("btn-voice-start"),a=document.getElementById("btn-voice-stop"),l=document.getElementById("btn-voice-refresh"),c=document.getElementById("btn-close-voice"),h=document.getElementById("voice-engine-mode"),d=document.getElementById("voice-gemini-model"),u=document.getElementById("voice-gemini-key"),f=document.getElementById("btn-voice-save-gemini"),v=document.getElementById("voice-remote-url"),_=document.getElementById("btn-voice-connect-url"),m=document.getElementById("voice-agent-roster"),p=document.getElementById("btn-voice-reset-roster"),x=document.getElementById("voice-speed"),y=document.getElementById("voice-speed-val"),g=document.getElementById("chk-voice-supreme"),b=document.getElementById("chk-voice-agent"),w=document.getElementById("chk-voice-stage"),T=document.getElementById("voice-test-form"),A=document.getElementById("voice-test-input"),S=document.getElementById("btn-voice-speak"),M=document.getElementById("btn-voice-cancel"),C=document.getElementById("btn-voice-convo"),P=document.getElementById("voice-speaking-status"),F=document.getElementById("voice-audio-player"),O=nM();let G={installed:!1,serverReachable:!1,ready:!1,status:"offline",voices:[],health:null,dir:"E:\\New\\SOFT\\cit voice"},$=null,te=null,K=null,X=0;const Y=typeof window<"u"&&"speechSynthesis"in window&&typeof SpeechSynthesisUtterance<"u";function k(){return!!(n&&!n.classList.contains("hidden"))}function Z(){const q=O.engineMode||"auto";return q==="cit"?"cit":q==="gemini"?"gemini":q==="browser"?"browser":G.ready?"cit":String(O.geminiApiKey||"").trim()?"gemini":"browser"}function W(){const q=Z();return q==="cit"?!!G.ready:q==="gemini"?!!String(O.geminiApiKey||"").trim():Y}function N(){e==null||e({isOpen:k(),ready:W(),citReady:G.ready,activeEngine:Z(),status:G.status,enabled:O.enabled})}function j(){if(!m)return;const q=G.voices||[],U=Z(),se=W();m.innerHTML=co.map(oe=>{const le=Ft(oe.stationIndex),we=le.gender==="female"?"♀ Nữ":"♂ Nam",ee=oe.stationIndex===vt?"Điều hành":oe.dept.shortName,be=Jr.map(Ce=>`<option value="${Ce.id}" ${Ce.id===le.modelId?"selected":""}>${Ce.name}</option>`).join("");let xe="";if(U==="gemini"){const Ce=nc.filter(Ne=>Ne.gender===le.gender),Pe=Oa(oe.stationIndex);xe=Ce.map(Ne=>`<option value="gemini:${Ne.id}" ${Ne.id===Pe?"selected":""}>✨ ${Ne.id} (${le.genderLabel})</option>`).join("")}else{const Ce=Lc(q,le.gender),Pe=Pr(oe.stationIndex,q);xe=Ce.length>0?Ce.map(Ne=>`<option value="cit:${Ne.id}" ${Ne.id===Pe?"selected":""}>${Ne.name||Ne.id} (${le.genderLabel})</option>`).join(""):`<option value="cit:${le.voiceId}" selected>${le.voiceId} (${le.genderLabel})</option>`}return`
        <div class="voice-roster-row">
          <div class="voice-roster-top">
            <span class="voice-roster-name">${oe.name}</span>
            <span class="voice-roster-role">${ee} • ${oe.role}</span>
            <span class="gender-pill ${le.gender}">${we}</span>
            <button type="button" class="mini-ctrl-btn voice-play-agent" data-test-station="${oe.stationIndex}" title="Nghe ${oe.name} báo cáo nhiệm vụ" ${se?"":"disabled"}>▶</button>
          </div>
          <div class="voice-roster-mission">${le.mission}</div>
          <div class="voice-roster-selects">
            <select data-model-station="${oe.stationIndex}" title="Chọn AI Model cho ${oe.name}">${be}</select>
            <select data-voice-station="${oe.stationIndex}" title="Chọn giọng ${le.genderLabel} cho ${oe.name}">${xe}</select>
          </div>
        </div>
      `}).join("");for(const oe of m.querySelectorAll("[data-model-station]"))oe.addEventListener("change",()=>{bs(Number(oe.dataset.modelStation),{modelId:oe.value})});for(const oe of m.querySelectorAll("[data-voice-station]"))oe.addEventListener("change",()=>{const le=Number(oe.dataset.voiceStation),we=oe.value||"";we.startsWith("gemini:")?bs(le,{geminiVoice:we.slice(7)}):we.startsWith("cit:")?bs(le,{voiceId:we.slice(4)}):bs(le,{voiceId:we})});for(const oe of m.querySelectorAll("[data-test-station]"))oe.addEventListener("click",()=>{const le=Number(oe.dataset.testStation),we=co.find(xe=>xe.stationIndex===le)||Xt,ee=Ft(le),be=`Xin chào, tôi là ${we.name}, phụ trách ${we.role}, vận hành bằng mô hình ${ee.model.name}. Nhiệm vụ cụ thể của tôi là ${ee.mission}.`;ce(le,be,!0)})}function ae(){var le;if(!i)return;const q=Z(),U=W(),se=lo(O.remoteUrl);if(i.classList.remove("online","loading","offline"),G.ready?(i.classList.add("online"),i.textContent=se?"● CIT TUNNEL":"● CIT VOICE"):G.status==="loading"||G.status==="starting"?(i.classList.add("loading"),i.textContent=G.status==="loading"?"◐ ĐANG NẠP MODEL...":"◐ ĐANG KHỞI ĐỘNG..."):q==="gemini"&&String(O.geminiApiKey||"").trim()?(i.classList.add("online"),i.textContent="✨ GEMINI TTS"):q==="browser"&&Y?(i.classList.add("online"),i.textContent="🌐 WEB VOICE"):(i.classList.add("offline"),i.textContent="○ CHƯA SẴN SÀNG"),o&&(o.textContent=se||G.dir||"E:\\New\\SOFT\\cit voice"),s)if(q==="cit"&&G.ready&&G.health){const we=G.health,ee=we.sample_rate?`${Math.round(we.sample_rate/1e3)} kHz`:"48 kHz";s.textContent=`${we.engine||"CIT Voice Studio"} • ${ee} • ${(G.voices||[]).length} giọng (${se?"Tunnel":"Local"})`}else if(G.status==="loading"||G.status==="starting")s.textContent=((le=G.health)==null?void 0:le.message)||"Đang tải VieNeu-TTS vào RAM, vui lòng chờ vài giây...";else if(q==="gemini"){const we=!!String(O.geminiApiKey||"").trim();s.textContent=we?`Đang dùng ${O.geminiModel} (24 kHz • 19 giọng Nam/Nữ theo nhân sự)`:"Hãy dán Gemini API Key ở trên (hoặc chuyển sang Tự động / Web Voice)."}else q==="browser"?s.textContent=Y?"Đang dùng Giọng Nam/Nữ Trình Duyệt (chạy ngay trên web • có thể kết nối CIT / Gemini bất cứ lúc nào).":"Trình duyệt không hỗ trợ SpeechSynthesis.":s.textContent=se?`Không kết nối được CIT Server tại ${se}`:"Chưa bật CIT Voice Local (hoặc hãy dùng Gemini / Web Voice).";const oe=!!se;r&&(r.disabled=oe||G.ready||G.status==="starting"),a&&(a.disabled=oe||!G.managedByHub),S&&(S.disabled=!U),C&&(C.disabled=!U),j(),N()}function ie(){K&&clearInterval(K);const q=G.status==="starting"||G.status==="loading"?2500:2e4;K=setInterval(()=>{(k()||G.status==="starting"||G.status==="loading")&&ye()},q)}async function ye(){const q=lo(O.remoteUrl);try{if(q){const oe=await fetch(`${q}/health`);if(!oe.ok)throw new Error(`HTTP ${oe.status}`);const le=await oe.json(),we=(le==null?void 0:le.status)==="ok";let ee=[];if(we){const be=await fetch(`${q}/voices`);if(be.ok){const xe=await be.json();Array.isArray(xe)&&(ee=xe)}}return G={installed:!0,serverReachable:!0,ready:we,status:(le==null?void 0:le.status)||"ok",managedByHub:!1,dir:q,health:le,voices:ee},ae(),G}const U=await fetch("/api/voice/status"),se=await U.json();if(U.ok&&se.ok!==!1){const oe=G.status;G=se,ae(),oe!==G.status&&ie()}}catch{G.ready=!1,G.serverReachable=!1,G.status="offline",ae()}return G}async function fe(){if(lo(O.remoteUrl)){ye();return}P&&(P.textContent="Đang khởi động CIT Voice Studio (lần đầu nạp model ~15–30s)...");try{const q=await fetch("/api/voice/start",{method:"POST",headers:{"Content-Type":"application/json"},body:"{}"}),U=await q.json();if(!q.ok||U.ok===!1)throw new Error(U.error||`HTTP ${q.status}`);G=U,ae(),ie(),P&&(P.textContent=U.ready?"CIT Voice Studio đã sẵn sàng phát giọng nói!":"Đã bật máy chủ CIT Voice — đang nạp mô hình giọng nói...")}catch(q){P&&(P.textContent=`Lỗi bật server: ${q.message}`)}}async function Ie(){he();try{G=await(await fetch("/api/voice/stop",{method:"POST",headers:{"Content-Type":"application/json"},body:"{}"})).json(),ae(),P&&(P.textContent="Đã tắt máy chủ CIT Voice.")}catch(q){P&&(P.textContent=`Lỗi dừng server: ${q.message}`)}}function ke(){te&&(URL.revokeObjectURL(te),te=null)}function he(){X+=1,$&&($.abort(),$=null),Y&&window.speechSynthesis.cancel(),F&&(F.pause(),F.removeAttribute("src"),F.load()),ke(),P&&(P.textContent="Đã dừng phát âm thanh.")}async function ge(q,U,se="",oe=!1){return ke(),te=URL.createObjectURL(q),F?(F.src=te,F.playbackRate=Number(O.speed)||1.05,P&&(P.textContent=se?`Đang phát: ${U} (${se}s • Giọng AI)`:`Đang phát: ${U} (Giọng AI)`),new Promise(le=>{let we=!1;const ee=be=>{we||(we=!0,le(be))};F.onended=()=>{P&&(P.textContent=`Đã đọc xong (${U}).`),ee(!0)},F.onerror=()=>ee(!1),F.play().then(()=>{oe||ee(!0)}).catch(()=>{P&&(P.textContent=`Đã tạo audio (${U}) — bấm ▶ trên trình phát để nghe.`),ee(!0)})})):!0}async function I(q,U,se){if(!G.ready&&(await ye(),!G.ready))return!1;$&&$.abort();const oe=new AbortController;$=oe,P&&(P.textContent=`Đang tổng hợp CIT Voice "${se}"...`);const le=lo(O.remoteUrl),we=le?`${le}${q==="speak"?"/api/tts/generate":"/api/tts/conversation"}`:`/api/voice/${q}`;try{const ee=await fetch(we,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(U),signal:oe.signal});if(!ee.ok){const Ce=await ee.json().catch(()=>({}));throw new Error(Ce.error||`HTTP ${ee.status}`)}const be=await ee.blob();if(oe.signal.aborted)return!1;const xe=ee.headers.get("X-Duration-Seconds")||"";return await ge(be,se,xe,!1)}catch(ee){return(ee==null?void 0:ee.name)==="AbortError"||P&&(P.textContent=`Lỗi tạo giọng CIT: ${ee.message}`),!1}finally{$===oe&&($=null)}}async function Me(q,U,se,oe=!1){var Ce,Pe,Ne,Fe;const le=String(O.geminiApiKey||"").trim();if(!le)return P&&(P.textContent="Chưa có Gemini API Key. Hãy nhập Key trong cửa sổ 🔊 AI Voice."),!1;$&&$.abort();const we=new AbortController;$=we;const ee=Oa(U),be=O.geminiModel||tc[0].id,xe=`https://generativelanguage.googleapis.com/v1beta/models/${encodeURIComponent(be)}:generateContent?key=${encodeURIComponent(le)}`;P&&(P.textContent=`✨ Đang tổng hợp ${be} (${ee}) cho "${se}"...`);try{const ve=await fetch(xe,{method:"POST",headers:{"Content-Type":"application/json"},signal:we.signal,body:JSON.stringify({contents:[{parts:[{text:`Đọc tự nhiên bằng tiếng Việt rõ ràng, truyền cảm, đúng nhịp điệu chuyên nghiệp: ${q}`}]}],generationConfig:{responseModalities:["AUDIO"],speechConfig:{voiceConfig:{prebuiltVoiceConfig:{voiceName:ee}}}}})}),H=await ve.json().catch(()=>({}));if(!ve.ok){const Se=((Ce=H==null?void 0:H.error)==null?void 0:Ce.message)||`HTTP ${ve.status}`;throw new Error(Se)}const ne=(((Fe=(Ne=(Pe=H==null?void 0:H.candidates)==null?void 0:Pe[0])==null?void 0:Ne.content)==null?void 0:Fe.parts)||[]).find(Se=>{var Te;return(Te=Se==null?void 0:Se.inlineData)==null?void 0:Te.data});if(!ne)throw new Error("Gemini không trả về dữ liệu audio (kiểm tra model TTS hỗ trợ AUDIO).");if(we.signal.aborted)return!1;const me=iM(ne.inlineData.data,ne.inlineData.mimeType);return await ge(me,`${se} • ${ee}`,"",oe)}catch(ve){return(ve==null?void 0:ve.name)==="AbortError"||P&&(P.textContent=`Lỗi Gemini TTS: ${ve.message}`),!1}finally{$===we&&($=null)}}function z(q,U,se){if(!Y)return P&&(P.textContent="Trình duyệt không hỗ trợ đọc giọng nói."),Promise.resolve(!1);const oe=Ft(U),le=X;return window.speechSynthesis.cancel(),new Promise(we=>{const ee=new SpeechSynthesisUtterance(q);ee.lang="vi-VN",ee.rate=Math.min(1.6,Math.max(.7,Number(O.speed)||1.05)),ee.pitch=oe.gender==="female"?1.12:.86;const be=sM(oe.gender);be&&(ee.voice=be),P&&(P.textContent=`🌐 Đang đọc Web Voice (${oe.genderLabel}): ${se}`),ee.onend=()=>{X===le&&P&&(P.textContent=`Đã đọc xong (${se}).`),we(!0)},ee.onerror=()=>we(!1),window.speechSynthesis.speak(ee)})}function _e(q,{voiceId:U="Hải Đăng",speakerLabel:se="Leader MRT",stationIndex:oe=vt}={}){const le=String(q||"").trim();if(!le)return Promise.resolve(!1);const we=Z();return we==="cit"?I("speak",{text:le,voice_id:U,speed:O.speed,format:"wav"},se):we==="gemini"?Me(le,oe,se,!1):z(le,oe,se)}function ce(q,U,se=!1){if(!se&&(!O.enabled||!W()))return Promise.resolve(!1);const oe=Number(q),le=co.find(Ce=>Ce.stationIndex===oe)||Xt,we=Ft(oe),be=Z()==="gemini"?Oa(oe):Pr(oe,G.voices),xe=oe===vt?"Leader MRT":le.name;return _e(U,{voiceId:be,stationIndex:oe,speakerLabel:`${xe} • ${we.model.name} (${be} • ${we.genderLabel})`})}function Le(q,U=!1){return ce(vt,q,U)}function Ee(q,U,se=!1){const oe=String(q||"").toLowerCase(),le=co.find(we=>we.name.toLowerCase()===oe);return ce(le?le.stationIndex:0,U,se)}async function L(q){if(!Array.isArray(q)||q.length===0)return!1;const U=q.map(le=>{let we=Number.isInteger(le.stationIndex)?le.stationIndex:null;if(we===null||we<0){const ee=String(le.speaker||"").toLowerCase(),be=co.find(xe=>ee.includes(xe.name.toLowerCase()));we=be?be.stationIndex:vt}return{stationIndex:we,speaker:le.speaker||"AI",text:le.text,voice_id:le.voice_id||Pr(we,G.voices)}}),se=Z();if(se==="cit")return I("conversation",{turns:U.map(({speaker:le,text:we,voice_id:ee})=>({speaker:le,text:we,voice_id:ee})),silence_duration:.35,speed:O.speed,format:"wav"},`Hội thoại ${U.length} AI Agent`);he();const oe=++X;for(const le of U){if(X!==oe)return!1;const we=Ft(le.stationIndex);if(se==="gemini"){if(!await Me(le.text,le.stationIndex,`${le.speaker} (${we.genderLabel})`,!0)||X!==oe)return!1}else await z(le.text,le.stationIndex,`${le.speaker} (${we.genderLabel})`)}return!0}function E(q){if(!n)return;const U=typeof q=="boolean"?q:n.classList.contains("hidden");if(n.classList.toggle("hidden",!U),U){n.classList.remove("minimized");const se=document.getElementById("btn-min-voice");se&&(se.textContent="–"),ye()}N()}function V(q){O.enabled=!!q,Pn(O),O.enabled||he(),N()}function re(){x&&(x.value=String(O.speed)),y&&(y.textContent=`${Number(O.speed).toFixed(2)}x`),g&&(g.checked=!!O.autoReadSupreme),b&&(b.checked=!!O.autoReadAgent),w&&(w.checked=!!O.autoReadStage),h&&(h.value=O.engineMode||"auto"),d&&(d.value=O.geminiModel||tc[0].id),u&&(u.value=O.geminiApiKey||""),v&&(v.value=O.remoteUrl||""),h==null||h.addEventListener("change",()=>{O.engineMode=h.value,Pn(O),ae()}),d==null||d.addEventListener("change",()=>{O.geminiModel=d.value,Pn(O),ae()}),f==null||f.addEventListener("click",()=>{O.geminiApiKey=((u==null?void 0:u.value)||"").trim(),Pn(O),O.geminiApiKey&&O.engineMode==="browser"&&(O.engineMode="gemini",h&&(h.value="gemini"),Pn(O)),ae(),P&&(P.textContent=O.geminiApiKey?`Đã lưu Gemini API Key (${O.geminiModel}). Sẵn sàng đọc!`:"Đã xóa Gemini API Key khỏi trình duyệt.")}),_==null||_.addEventListener("click",()=>{O.remoteUrl=lo((v==null?void 0:v.value)||""),Pn(O),ye()}),x==null||x.addEventListener("input",()=>{O.speed=Number(x.value)||1.05,y&&(y.textContent=`${O.speed.toFixed(2)}x`),F&&!F.paused&&(F.playbackRate=O.speed),Pn(O)}),g==null||g.addEventListener("change",()=>{O.autoReadSupreme=g.checked,Pn(O)}),b==null||b.addEventListener("change",()=>{O.autoReadAgent=b.checked,Pn(O)}),w==null||w.addEventListener("change",()=>{O.autoReadStage=w.checked,Pn(O)}),r==null||r.addEventListener("click",fe),a==null||a.addEventListener("click",Ie),l==null||l.addEventListener("click",ye),c==null||c.addEventListener("click",()=>E(!1)),M==null||M.addEventListener("click",he),p==null||p.addEventListener("click",()=>{ax(),j()}),T==null||T.addEventListener("submit",q=>{q.preventDefault();const U=A==null?void 0:A.value.trim();U&&Le(U,!0)}),C==null||C.addEventListener("click",()=>{const q=(t==null?void 0:t())||[];if(q.length===0){P&&(P.textContent="Chưa có lượt hội thoại nào giữa các AI Agent.");return}L(q)}),Iu(()=>j()),Y&&(window.speechSynthesis.onvoiceschanged=()=>{Z()==="browser"&&ae()}),ye(),ie()}return{init:re,toggle:E,startServer:fe,stopServer:Ie,refreshStatus:ye,speak:_e,speakAsStation:ce,speakAsLeader:Le,speakAsAgent:Ee,playConversation:L,stopSpeaking:he,setAutoEnabled:V,getAvailableVoices:()=>[...G.voices||[]],getState:()=>({...G,activeEngine:Z(),ready:W(),config:{...O}})}}const Ou="mrt_report_screen_cfg_v1",fd=[{id:"dark-tech",label:"Tối Công Nghệ"},{id:"exec-white",label:"Nền Trắng Chữ Đỏ"},{id:"champagne-luxury",label:"Kính Champagne"},{id:"emerald-ops",label:"Xanh Vận Hành"}],rM=["#38bdf8","#dc2626","#f59e0b","#10b981","#818cf8"],Mr=["sm","md","lg"],aM={sm:"Nhỏ",md:"Vừa",lg:"Rộng"},Ps={title:"BÁO CÁO TIẾN ĐỘ DỰ ÁN — MRT SOFT HUB",theme:"dark-tech",accent:"#38bdf8",size:"md",layout:"2col",fontScale:1,opacity:.92,showKpis:!0,showStages:!0,showAgents:!0,showOutputs:!0,showMemo:!0,memo:""};function lM(){try{const n=localStorage.getItem(Ou);return n?{...Ps,...JSON.parse(n)}:{...Ps}}catch{return{...Ps}}}function Ha(n){try{localStorage.setItem(Ou,JSON.stringify(n))}catch{}}function Gt(n){return String(n||"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}function cM({windowEl:n,onStateChange:e,onSelectDepartment:t,onSpeakReport:i,getRealProjects:s}){const o=document.getElementById("rep-header-title"),r=document.getElementById("btn-rep-customize"),a=document.getElementById("btn-rep-size"),l=document.getElementById("btn-close-report"),c=document.getElementById("rep-custom-panel"),h=document.getElementById("rep-cfg-title"),d=document.getElementById("rep-cfg-themes"),u=document.getElementById("rep-cfg-accents"),f=Array.from(document.querySelectorAll("[data-rep-layout]")),v=Array.from(document.querySelectorAll("[data-rep-scale]")),_=document.getElementById("rep-cfg-opacity"),m=document.getElementById("rep-cfg-opacity-val"),p=document.getElementById("chk-rep-kpi"),x=document.getElementById("chk-rep-stages"),y=document.getElementById("chk-rep-agents"),g=document.getElementById("chk-rep-outputs"),b=document.getElementById("chk-rep-memo"),w=document.getElementById("btn-rep-reset"),T=document.getElementById("rep-hero"),A=document.getElementById("rep-sec-kpi"),S=document.getElementById("rep-kpi-grid"),M=document.getElementById("rep-sec-stages"),C=document.getElementById("rep-stages-list"),P=document.getElementById("rep-sec-agents"),F=document.getElementById("rep-agents-list"),O=document.getElementById("rep-sec-outputs"),G=document.getElementById("rep-outputs-list"),$=document.getElementById("rep-sec-memo"),te=document.getElementById("rep-memo-input"),K=document.getElementById("btn-rep-speak"),X=document.getElementById("btn-rep-export"),Y=document.getElementById("rep-updated-at");let k=lM(),Z=null,W=null,N=!1,j="";function ae(){return!!(n&&!n.classList.contains("hidden"))}function ie(){if(n){for(const z of fd)n.classList.remove(`theme-${z.id}`);n.classList.add(`theme-${k.theme}`);for(const z of Mr)n.classList.remove(`size-${z}`);n.classList.add(`size-${k.size}`),n.classList.toggle("layout-1col",k.layout==="1col"),n.classList.toggle("layout-2col",k.layout!=="1col"),n.style.setProperty("--rep-accent",k.accent),n.style.setProperty("--rep-font-scale",String(k.fontScale)),n.style.setProperty("--rep-bg-alpha",String(k.opacity)),o&&(o.textContent=k.title||Ps.title),a&&(a.textContent=aM[k.size]||"Vừa"),A==null||A.classList.toggle("hidden",!k.showKpis),M==null||M.classList.toggle("hidden",!k.showStages),P==null||P.classList.toggle("hidden",!k.showAgents),O==null||O.classList.toggle("hidden",!k.showOutputs),$==null||$.classList.toggle("hidden",!k.showMemo)}}function ye(){h&&(h.value=k.title),te&&document.activeElement!==te&&(te.value=k.memo||""),_&&(_.value=String(Math.round(k.opacity*100))),m&&(m.textContent=`${Math.round(k.opacity*100)}%`),p&&(p.checked=!!k.showKpis),x&&(x.checked=!!k.showStages),y&&(y.checked=!!k.showAgents),g&&(g.checked=!!k.showOutputs),b&&(b.checked=!!k.showMemo);for(const z of(d==null?void 0:d.querySelectorAll("[data-rep-theme]"))||[])z.classList.toggle("active",z.dataset.repTheme===k.theme);for(const z of(u==null?void 0:u.querySelectorAll("[data-rep-accent]"))||[])z.classList.toggle("active",z.dataset.repAccent===k.accent);for(const z of f)z.classList.toggle("active",z.dataset.repLayout===k.layout);for(const z of v)z.classList.toggle("active",Number(z.dataset.repScale)===Number(k.fontScale))}function fe(z){k={...k,...z},Ha(k),ie(),ye()}function Ie(z,_e,ce,Le=!1){var le,we;if(!z||!ae())return;const Ee=typeof s=="function"?s()||[]:[],L=Ee.find(ee=>{var be;return ee.slug===((be=z.project)==null?void 0:be.slug)})||Ee[0]||null,E=L?`${L.slug}:${(L.outputs||[]).length}:${L.lastBuildAt||""}`:"none",V=Math.round((z.overallProgress??0)*100),re=Math.round((z.stageProgress??0)*100),q=`${(le=z.project)==null?void 0:le.slug}:${z.stageIndex}:${re}:${V}:${z.version}:${z.paused}:${ce}:${(z.warrantyTickets||[]).length}:${E}:${((we=_e==null?void 0:_e.latestMessage)==null?void 0:we.id)||""}`;if(!Le&&q===j)return;j=q;const U=z.project||{},se=z.currentDept||wt[0],oe=z.stageStatus.filter(ee=>ee==="done").length;if(T){const ee=ce?'<span class="rep-status-tag crit">CẢNH BÁO P1</span>':z.paused?'<span class="rep-status-tag warn">TẠM DỪNG</span>':`<span class="rep-status-tag good">ĐANG CHẠY • BƯỚC ${z.stageIndex+1}/6</span>`;T.innerHTML=`
        <div class="rep-hero-top">
          <div>
            <div class="rep-proj-title">${Gt(U.name||"SmartPOS Bán Hàng")}</div>
            <div class="rep-proj-meta">${Gt((U.platformLabels||["Android","Windows"]).join(" + "))} • ${Gt(z.version||"v1.0.0")} • Bảo hành ${U.warrantyMonths||24} tháng</div>
          </div>
          <div class="rep-hero-right">
            ${ee}
            <div class="rep-hero-pct">${V}%</div>
          </div>
        </div>
        <div class="rep-bar-track"><div class="rep-bar-fill" style="width:${V}%"></div></div>
      `}if(S){const ee=(z.warrantyTickets||[]).length;S.innerHTML=`
        <div class="rep-kpi-card">
          <div class="rep-kpi-label">Tiến độ tổng</div>
          <div class="rep-kpi-val">${V}%</div>
          <div class="rep-kpi-sub">${oe}/6 phòng ban xong</div>
        </div>
        <div class="rep-kpi-card">
          <div class="rep-kpi-label">Phòng ban hiện tại</div>
          <div class="rep-kpi-val">${Gt(se.shortName)}</div>
          <div class="rep-kpi-sub">Tiến độ bước: ${re}%</div>
        </div>
        <div class="rep-kpi-card">
          <div class="rep-kpi-label">Đội ngũ AI</div>
          <div class="rep-kpi-val">19 AI</div>
          <div class="rep-kpi-sub">Leader MRT + 18 Agent</div>
        </div>
        <div class="rep-kpi-card">
          <div class="rep-kpi-label">Xưởng Thật / SLA</div>
          <div class="rep-kpi-val">${Ee.length} app</div>
          <div class="rep-kpi-sub">${ee>0?`${ee} ticket bảo hành`:"SLA 99.98% Ổn định"}</div>
        </div>
      `}if(C){C.innerHTML=wt.map((ee,be)=>{const xe=z.stageStatus[be],Ce=xe==="done"?100:xe==="active"?re:0,Pe=ee.stations[0],Ne=Or[Pe],Fe=Ft(Pe),ve=xe==="done"?"HOÀN TẤT":xe==="active"?`${Ce}%`:"CHỜ";return`
          <button type="button" class="rep-stage-row ${xe}" data-rep-dept="${be}" title="Bấm để xem phòng ban ${Gt(ee.name)}">
            <div class="rep-stage-head">
              <span class="rep-stage-name">${Gt(ee.name)}</span>
              <span class="rep-stage-pill ${xe}">${ve}</span>
            </div>
            <div class="rep-stage-sub">${Gt((Ne==null?void 0:Ne.name)||"")} • ${Gt(Fe.model.name)} (${Gt(Fe.voiceId)})</div>
            <div class="rep-stage-bar"><div class="rep-stage-bar-fill ${xe}" style="width:${Ce}%"></div></div>
          </button>
        `}).join("");for(const ee of C.querySelectorAll("[data-rep-dept]"))ee.addEventListener("click",()=>{t==null||t(Number(ee.dataset.repDept))})}if(F){Ft(vt);const ee=[vt,...se.stations||[0,1,2]];F.innerHTML=ee.map(be=>{const xe=be===vt,Ce=xe?{name:"Leader MRT"}:Or[be],Pe=Ft(be),Ne=xe?`Điều phối ${se.name}`:Pe.mission;return`
            <div class="rep-agent-item">
              <div class="rep-agent-top">
                <strong>${Gt((Ce==null?void 0:Ce.name)||"")}</strong>
                <span class="gender-pill ${Pe.gender}">${Pe.gender==="female"?"♀ Nữ":"♂ Nam"}</span>
                <span class="rep-model-tag">${Gt(Pe.model.name)}</span>
              </div>
              <div class="rep-agent-desc">${Gt(Ne)} • Giọng: <em>${Gt(Pe.voiceId)}</em></div>
            </div>
          `}).join("")}if(G){const ee=((L==null?void 0:L.outputs)||[]).map(xe=>`<div class="rep-out-item built">✅ [${Gt(xe.platform.toUpperCase())}] ${Gt(xe.file)} (${Gt(xe.status)})</div>`),be=(z.activeLogs||[]).slice(-3).reverse().map(xe=>`<div class="rep-out-item log">• ${Gt(xe)}</div>`);G.innerHTML=ee.length>0||be.length>0?[...ee,...be].join(""):'<div class="rep-out-item log">Đang thu thập dữ liệu sản phẩm & log...</div>'}Y&&(Y.textContent=`Cập nhật: ${new Date().toLocaleTimeString("vi-VN",{hour12:!1})}`)}function ke(){var E,V;const z=Z;if(!z)return"Hệ thống MRT SOFT HUB đang sẵn sàng báo cáo.";const _e=Math.round((z.overallProgress??0)*100),ce=Math.round((z.stageProgress??0)*100),Le=z.stageStatus.filter(re=>re==="done").length,Ee=z.currentDept||wt[0],L=(E=k.memo)!=null&&E.trim()?` Ghi chú quản lý: ${k.memo.trim()}.`:"";return`Báo cáo tiến độ dự án ${((V=z.project)==null?void 0:V.name)||"SmartPOS"}. Tiến độ tổng đạt ${_e} phần trăm, đã hoàn thành ${Le} trên 6 phòng ban. Hiện tại bộ phận ${Ee.name} đang xử lý đạt ${ce} phần trăm.${L}`}function he(){var V,re,q,U;const z=Z,_e=((V=z==null?void 0:z.project)==null?void 0:V.name)||"MRT-Project",ce=Math.round(((z==null?void 0:z.overallProgress)??0)*100),Le=[`# ${k.title}`,`- **Thời gian xuất**: ${new Date().toLocaleString("vi-VN")}`,`- **Dự án**: ${_e} (${(z==null?void 0:z.version)||"v1.0.0"})`,`- **Nền tảng**: ${(((re=z==null?void 0:z.project)==null?void 0:re.platformLabels)||[]).join(", ")}`,`- **Tiến độ tổng**: ${ce}%`,"","## Tiến độ 6 phòng ban",...wt.map((se,oe)=>{var ee;const le=((ee=z==null?void 0:z.stageStatus)==null?void 0:ee[oe])||"pending",we=le==="done"?100:le==="active"?Math.round(((z==null?void 0:z.stageProgress)??0)*100):0;return`- **${se.name}**: ${we}% (${le})`})];(q=k.memo)!=null&&q.trim()&&Le.push("","## Ghi chú chỉ đạo",k.memo.trim());const Ee=new Blob([Le.join(`
`)],{type:"text/markdown;charset=utf-8"}),L=URL.createObjectURL(Ee),E=document.createElement("a");E.href=L,E.download=`bao-cao-tien-do-${((U=z==null?void 0:z.project)==null?void 0:U.slug)||"mrt-soft-hub"}.md`,document.body.appendChild(E),E.click(),E.remove(),setTimeout(()=>URL.revokeObjectURL(L),1e3)}function ge(z){if(!n)return;const _e=typeof z=="boolean"?z:n.classList.contains("hidden");if(n.classList.toggle("hidden",!_e),_e){n.classList.remove("minimized");const ce=document.getElementById("btn-min-report");ce&&(ce.textContent="–"),Z&&Ie(Z,W,N,!0)}e==null||e(_e)}function I(z,_e,ce){Z=z,W=_e,N=ce,Ie(z,_e,ce,!1)}function Me(){if(d){d.innerHTML=fd.map(z=>`<button type="button" class="mini-ctrl-btn" data-rep-theme="${z.id}">${z.label}</button>`).join("");for(const z of d.querySelectorAll("[data-rep-theme]"))z.addEventListener("click",()=>fe({theme:z.dataset.repTheme}))}if(u){u.innerHTML=rM.map(z=>`<button type="button" class="accent-dot" data-rep-accent="${z}" style="background:${z}" title="Màu ${z}"></button>`).join("");for(const z of u.querySelectorAll("[data-rep-accent]"))z.addEventListener("click",()=>fe({accent:z.dataset.repAccent}))}for(const z of f)z.addEventListener("click",()=>fe({layout:z.dataset.repLayout}));for(const z of v)z.addEventListener("click",()=>fe({fontScale:Number(z.dataset.repScale)||1}));h==null||h.addEventListener("input",()=>{fe({title:h.value||Ps.title})}),_==null||_.addEventListener("input",()=>{fe({opacity:Number(_.value)/100})}),p==null||p.addEventListener("change",()=>fe({showKpis:p.checked})),x==null||x.addEventListener("change",()=>fe({showStages:x.checked})),y==null||y.addEventListener("change",()=>fe({showAgents:y.checked})),g==null||g.addEventListener("change",()=>fe({showOutputs:g.checked})),b==null||b.addEventListener("change",()=>fe({showMemo:b.checked})),te==null||te.addEventListener("input",()=>{k={...k,memo:te.value},Ha(k)}),w==null||w.addEventListener("click",()=>{k={...Ps},Ha(k),ie(),ye(),Z&&Ie(Z,W,N,!0)}),r==null||r.addEventListener("click",()=>{const z=c==null?void 0:c.classList.toggle("hidden");r.classList.toggle("active",!z)}),a==null||a.addEventListener("click",()=>{const z=Mr.indexOf(k.size),_e=Mr[(z+1)%Mr.length];fe({size:_e})}),l==null||l.addEventListener("click",()=>ge(!1)),K==null||K.addEventListener("click",()=>i==null?void 0:i(ke())),X==null||X.addEventListener("click",he),ie(),ye()}return{init:Me,toggle:ge,open:()=>ge(!0),close:()=>ge(!1),update:I,isOpen:ae,buildVoiceSummary:ke}}function hM({modalEl:n,getScreens:e}){const t=n.querySelector("#zoom-title"),i=n.querySelector("#zoom-subtitle"),s=n.querySelector("#zoom-switcher"),o=n.querySelector("#zoom-stage"),r=n.querySelector("#zoom-canvas"),a=r.getContext("2d"),l=n.querySelector("#btn-zoom-out"),c=n.querySelector("#zoom-level-label"),h=n.querySelector("#btn-zoom-in"),d=n.querySelector("#btn-zoom-fit"),u=n.querySelector("#btn-zoom-200"),f=n.querySelector("#btn-zoom-snapshot"),v=n.querySelector("#btn-zoom-close");let _=null,m=1,p=0,x=0,y=!1,g=0,b=0,w=0,T=0,A=0;function S(){r.style.transform=`translate(${p}px, ${x}px) scale(${m})`,c&&(c.textContent=`${Math.round(m*100)}%`)}function M(X){return Math.min(3.5,Math.max(.75,Number(X)||1))}function C(X,Y=!1){m=M(X),(Y||m<=1.01)&&(p=0,x=0),S()}function P(){const X=_==null?void 0:_.canvas;X&&((r.width!==X.width||r.height!==X.height)&&(r.width=X.width,r.height=X.height),a.clearRect(0,0,r.width,r.height),a.drawImage(X,0,0,r.width,r.height))}function F(){if(!s)return;const X=(e==null?void 0:e())||[];s.innerHTML=X.map(Y=>`
        <button type="button" class="mini-ctrl-btn zoom-sw-btn ${(_==null?void 0:_.id)===Y.id?"active":""}" data-zoom-id="${Y.id}">
          ${Y.shortLabel||Y.title}
        </button>`).join("");for(const Y of s.querySelectorAll("[data-zoom-id]"))Y.addEventListener("click",()=>{const k=X.find(Z=>Z.id===Y.dataset.zoomId);k&&O(k)})}function O(X){const Y=(e==null?void 0:e())||[];let k=null;if(typeof X=="string"?k=Y.find(Z=>Z.id===X)||Y[0]||null:X!=null&&X.canvas?k=X:k=Y[0]||null,!(!k||!k.canvas)){if(_=k,t&&(t.textContent=k.title||"Màn hình chi tiết"),i){const Z=`${k.canvas.width}×${k.canvas.height}px`;i.textContent=k.role?`${Z} • ${k.role}`:Z}C(1,!0),F(),P(),n.classList.remove("hidden")}}function G(){n.classList.add("hidden"),y=!1}function $(){return!n.classList.contains("hidden")}function te(X){$()?G():O(X)}function K(X){!$()||!_||(A+=X,!(A<1/15)&&(A=0,P()))}return l==null||l.addEventListener("click",()=>C(m-.25)),h==null||h.addEventListener("click",()=>C(m+.25)),d==null||d.addEventListener("click",()=>C(1,!0)),u==null||u.addEventListener("click",()=>C(2,!1)),v==null||v.addEventListener("click",G),f==null||f.addEventListener("click",()=>{if(!(_!=null&&_.canvas))return;P();const X=document.createElement("a");X.href=r.toDataURL("image/png"),X.download=`${_.id||"mrt-screen"}-hd.png`,X.click()}),n.addEventListener("click",X=>{X.target===n&&G()}),o==null||o.addEventListener("wheel",X=>{X.preventDefault(),X.stopPropagation();const Y=X.deltaY<0?.22:-.22;C(m+Y)},{passive:!1}),o==null||o.addEventListener("pointerdown",X=>{X.button===0&&(y=!0,g=X.clientX,b=X.clientY,w=p,T=x,o.classList.add("dragging"))}),window.addEventListener("pointermove",X=>{y&&(p=w+(X.clientX-g),x=T+(X.clientY-b),S())}),window.addEventListener("pointerup",()=>{y&&(y=!1,o==null||o.classList.remove("dragging"))}),o==null||o.addEventListener("dblclick",()=>{m>1.2?C(1,!0):C(2,!1)}),{open:O,close:G,toggle:te,isOpen:$,update:K}}async function qi(n,e={}){const t=await fetch(n,{headers:{"Content-Type":"application/json"},...e}),i=await t.json();if(!t.ok||i.ok===!1)throw new Error(i.error||`HTTP ${t.status}`);return i}function dM(){return qi("/api/factory/status")}function uM(){return qi("/api/factory/projects")}function fM(n){return qi("/api/factory/scaffold",{method:"POST",body:JSON.stringify(n)})}function Fu(n){return qi("/api/factory/build",{method:"POST",body:JSON.stringify({slug:n})})}function pM({slug:n,visibility:e="private",repoName:t=null}){return qi("/api/factory/github-push",{method:"POST",body:JSON.stringify({slug:n,visibility:e,repoName:t})})}function zu(n){return qi("/api/factory/open-folder",{method:"POST",body:JSON.stringify({slug:n})})}function mM({slug:n,platform:e}){return qi("/api/factory/launch-test",{method:"POST",body:JSON.stringify({slug:n,platform:e})})}const gM=document.getElementById("app"),Ii=document.getElementById("tooltip"),zr=document.getElementById("inspector"),vM=document.getElementById("inspector-badge"),_M=document.getElementById("inspector-title"),yM=document.getElementById("inspector-role"),xM=document.getElementById("inspector-metrics"),MM=document.getElementById("inspector-desc"),Nn=document.getElementById("inspector-preview"),sc=Nn.getContext("2d"),pd=document.getElementById("agent-chat-section"),Hu=document.getElementById("agent-doing"),Gu=document.getElementById("agent-task"),bM=document.getElementById("agent-peers"),Ga=document.getElementById("agent-chat-history"),SM=document.getElementById("agent-chat-form"),md=document.getElementById("input-agent-question"),EM=Array.from(document.querySelectorAll(".quick-q-btn")),wM=document.getElementById("live-clock"),TM=document.getElementById("header-project-name"),AM=document.getElementById("header-version"),CM=document.getElementById("header-status-dot"),Va=document.getElementById("ops-status-pill"),RM=document.getElementById("pipeline-bar"),PM=document.getElementById("pipeline-steps"),Wa=document.getElementById("studio-drawer"),LM=document.getElementById("btn-min-studio"),IM=document.getElementById("btn-min-inspector"),DM=document.getElementById("btn-open-studio"),NM=document.getElementById("btn-close-studio"),UM=document.getElementById("btn-open-agents"),kM=document.getElementById("btn-open-factory"),Vu=Array.from(document.querySelectorAll(".tab-btn")),BM=document.getElementById("tab-create"),OM=document.getElementById("tab-pipeline"),FM=document.getElementById("tab-agents"),zM=document.getElementById("tab-factory"),gd=document.getElementById("chk-real-disk"),vd=document.getElementById("factory-tools"),$a=document.getElementById("factory-active-card"),ui=document.getElementById("btn-real-build"),HM=document.getElementById("btn-open-folder"),_d=document.getElementById("sel-gh-vis"),Xa=document.getElementById("btn-push-github"),ho=document.getElementById("factory-console"),Ya=document.getElementById("factory-projects-list"),Ls=document.getElementById("build-toast"),yd=document.getElementById("build-toast-badge"),xd=document.getElementById("build-toast-title"),Md=document.getElementById("build-toast-summary"),qa=document.getElementById("build-toast-links"),ja=document.getElementById("btn-close-build-toast"),Ka=document.getElementById("btn-toast-open-folder"),Za=document.getElementById("btn-toast-open-factory"),GM=document.getElementById("template-chips"),oc=document.getElementById("project-form"),Wu=document.getElementById("input-proj-name"),$u=document.getElementById("input-proj-desc"),Xu=document.getElementById("input-warranty"),Yu=document.getElementById("btn-sim-pause"),qu=Array.from(document.querySelectorAll(".speed-btn")),VM=document.getElementById("btn-warranty-ticket"),bd=document.getElementById("stage-stepper"),WM=document.getElementById("artifacts-list"),Sd=document.getElementById("agent-feed"),$M=document.getElementById("directive-form"),Ed=document.getElementById("input-directive"),wd=document.getElementById("agent-ticker"),XM=document.getElementById("agent-ticker-text"),ju=document.getElementById("btn-lighting"),YM=document.getElementById("lighting-label"),Ku=document.getElementById("btn-supreme"),qM=document.getElementById("btn-header-supreme"),Ja=document.getElementById("supreme-window"),jM=document.getElementById("btn-min-supreme"),KM=document.getElementById("btn-close-supreme"),ZM=document.getElementById("supreme-chips"),Zu=document.getElementById("supreme-form"),Hr=document.getElementById("supreme-input"),Td=document.getElementById("supreme-history"),Ju=document.getElementById("btn-youtube"),Is=document.getElementById("btn-voice"),JM=document.getElementById("voice-window"),Ds=document.getElementById("btn-report"),QM=document.getElementById("report-window"),Qa=document.getElementById("btn-agent-speak"),el=document.getElementById("btn-agent-run-task"),br=document.getElementById("inspector-agent-gender"),Ss=document.getElementById("sel-inspector-model"),Es=document.getElementById("sel-inspector-voice"),Qu=document.getElementById("btn-settings"),Ns=document.getElementById("btn-meeting-mode"),Ad=document.getElementById("meeting-mode-label"),tl=document.getElementById("btn-ops-board"),nl=document.getElementById("btn-zoom-screen"),il=document.getElementById("btn-inspector-zoom"),sl=document.getElementById("btn-ops-zoom-hd"),eb=document.getElementById("screen-zoom-modal"),Lr=document.getElementById("settings-window"),tb=document.getElementById("btn-min-settings"),nb=document.getElementById("btn-close-settings"),ib=document.querySelector(".hud-title"),sb=document.getElementById("btn-inspector-yt"),ef=document.getElementById("btn-flycam"),ob=document.getElementById("flycam-hud"),rb=document.getElementById("flycam-telemetry-text"),tf=document.getElementById("btn-follow"),nf=document.getElementById("btn-orbit"),sf=document.getElementById("btn-alert"),ab=document.getElementById("alert-label"),lb=document.getElementById("btn-reset"),cb=document.getElementById("inspector-close"),hb=document.getElementById("btn-back-overview"),of=Array.from(document.querySelectorAll("[data-preset]")),zt=new G_({antialias:!0,powerPreference:"high-performance"});zt.setPixelRatio(Math.min(window.devicePixelRatio,2));zt.setSize(window.innerWidth,window.innerHeight);zt.toneMapping=Bd;zt.toneMappingExposure=1.05;zt.shadowMap.enabled=!0;zt.shadowMap.type=Ud;gM.appendChild(zt.domElement);const gn=new V_;gn.background=new $e(724759);function rf(){const n=window.innerWidth/Math.max(1,window.innerHeight);return n<1.55?qe.clamp(48+(1.55-n)*24,48,64):48}const Vt=new an(rf(),window.innerWidth/window.innerHeight,.1,60),af=new D(0,3.85,7.65),lf=new D(0,1.85,-3.5);Vt.position.copy(af);const bt=new Ly(Vt,zt.domElement);bt.target.copy(lf);bt.enableDamping=!0;bt.dampingFactor=.065;bt.minDistance=.45;bt.maxDistance=14;bt.minPolarAngle=.18;bt.maxPolarAngle=Math.PI/2-.03;bt.autoRotateSpeed=.55;bt.update();const cf=new Sy(15792639,15130838,1.55);gn.add(cf);const vn=new Ty(16775920,1.45);vn.position.set(-3.8,5.1,4.2);vn.castShadow=!0;vn.shadow.mapSize.set(2048,2048);vn.shadow.camera.near=.5;vn.shadow.camera.far=18;vn.shadow.camera.left=-9;vn.shadow.camera.right=9;vn.shadow.camera.top=7.5;vn.shadow.camera.bottom=-7.5;vn.shadow.bias=-5e-4;gn.add(vn);const Ic=new Xs(16120831,.68,18,1.3);Ic.position.set(-5.5,4.5,2);const Dc=new Xs(16120831,.68,18,1.3);Dc.position.set(5.5,4.5,2);gn.add(Ic,Dc);const Gr=new Xs(3718648,.25,12,1.5);Gr.position.set(-5.4,2.8,-5.2);const Vr=new Xs(2282478,.4,15,1.4);Vr.position.set(-.3,2.8,-4.6);const Wr=new Xs(3718648,.25,12,1.5);Wr.position.set(5.2,2.8,-5.2);gn.add(Gr,Vr,Wr);const ot=sx(No[0]),Pt=Gx(ot.getState()),ko=qy(),fi=tx(ko),Wi=gx(ko),tt=Bx(ko),kn=Rx(ko,tt.worldPos),Us=Ix(ko);gn.add(fi.group);gn.add(Wi.group);gn.add(tt.group);gn.add(kn.group);gn.add(Us.group);const db=[...Wi.interactables,...tt.interactables,...kn.interactables,...Us.interactables],rc=new Map;for(const n of[...tt.interactables,...kn.interactables])n.userData.isAgent&&!rc.has(n.userData.stationIndex)&&rc.set(n.userData.stationIndex,n);const Oi={overview:{pos:af.clone(),target:lf.clone()},led:{pos:new D(-.38,2.78,-1.55),target:new D(-.38,2.78,-6.82)},devs:{pos:new D(-4.2,1.95,4.6),target:new D(.4,1.05,.2)},top:{pos:new D(0,5.05,6.2),target:new D(0,.8,-1.2)},mrt:{pos:new D(.65,1.9,-1.65),target:new D(0,1.38,-4.15)},meeting:{pos:new D(0,3.65,6.95),target:new D(0,1.05,.4)}};let un=null,Xe=null,vo=!1,pn=!1;const Mi=new Map,Cd=new D,Rd=new D;function On(n){pn=typeof n=="boolean"?n:!pn,ef.classList.toggle("active",pn),ob.classList.toggle("hidden",!pn),pn?(un=null,Zi(!1),bi(""),bt.enabled=!1):bt.enabled=!0}function $i(n,e,t=.85){un={startPos:Vt.position.clone(),endPos:n.clone(),startTarget:bt.target.clone(),endTarget:e.clone(),elapsed:0,duration:t}}function bi(n){for(const e of of)e.classList.toggle("active",e.dataset.preset===n)}function Sn(n){if(pn&&On(!1),Zi(!1),n==="mrt"){const t=new D,i=new D;tt.getLiveCameraView(t,i),bi("mrt"),$i(t,i);return}const e=Oi[n];e&&(bi(n),$i(e.pos,e.target))}function ji(n){const e=kn.deptAnchors[n];e&&(pn&&On(!1),bi(""),$i(e.focusPos,e.focusTarget,.9))}function ub(n){const e=rc.get(n);e&&Ef(e)}bt.addEventListener("start",()=>{un=null});let $r=0,uo=0,Yt=!1,Sr=!1;function hf(n){cf.intensity=qe.lerp(1.55,.26,n),vn.intensity=qe.lerp(1.45,.18,n),Ic.intensity=qe.lerp(.68,.12,n),Dc.intensity=qe.lerp(.68,.12,n);const e=Yt?1.35:1,t=Yt?16007006:3718648;Gr.color.setHex(t),Vr.color.setHex(Yt?16478597:2282478),Wr.color.setHex(t),Gr.intensity=qe.lerp(.25,2.3*e,n),Vr.intensity=qe.lerp(.4,3.4*e,n),Wr.intensity=qe.lerp(.25,2.3*e,n),zt.toneMappingExposure=qe.lerp(1.12,1.16,n),fi.setLightingMode(n),Wi.setLightingMode(n),kn.setLightingMode(n)}function df(n){$r=n?1:0,ju.classList.toggle("active",n),YM.textContent=n?"Ban đêm":"Ban ngày"}function uf(){df(!($r>.5))}function fb(){vo=!vo,tf.classList.toggle("active",vo),vo&&ji(ot.getState().stageIndex)}function ff(){Sr=!Sr,bt.autoRotate=Sr,nf.classList.toggle("active",Sr)}function pf(n){Yt=!!n,sf.classList.toggle("alert-active",Yt),ab.textContent=Yt?"Cảnh báo P1":"Bình thường",CM.classList.toggle("alert",Yt),Va.textContent=Yt?"ALERT DETECTED":"SYSTEM HEALTHY",Va.classList.toggle("status-alert",Yt),Va.classList.toggle("status-healthy",!Yt),Xe&&js(Xe)}function pb(){pf(!Yt)}function Ys(n){for(const e of Vu)e.classList.toggle("active",e.dataset.tab===n);BM.classList.toggle("hidden",n!=="create"),OM.classList.toggle("hidden",n!=="pipeline"),FM.classList.toggle("hidden",n!=="agents"),zM.classList.toggle("hidden",n!=="factory")}let ol=null;const Bo=Zx(),Qr=tM({windowEl:Lr,onApply:n=>{var t;ib.textContent=n.brandName,Wi.setBrandSign(n.brandName,n.accent),Wi.setOpsBoardConfig(n),fi.setBiophilicVisible(n.showPlants),fi.applySpaceTheme(n.themeCfg),fi.applyCustomColors(n),fi.applyDecorConfig(n),Us.setEquipmentVisible(n),n.showFlycam===!1&&pn&&On(!1),kn.setGlassVisible(n.showGlass),kn.setBubblesVisible(n.showBubbles),kn.setLayoutMode(n.roomLayout,{showMeetingProps:n.showMeetingProps,showGlass:n.showGlass});const e=!!(n.roomLayout&&n.roomLayout!=="work");Ns==null||Ns.classList.toggle("active",e),Ad&&(Ad.textContent=e?"🏛 Phòng họp":"🪑 Bàn họp"),e?(tt.setAutoWalk(!1),tt.returnToPodium()):tt.setAutoWalk(n.autoWalkLeader),ol!==null&&ol!==n.roomLayout&&n.autoFocusLayout&&(e?($i(Oi.meeting.pos,Oi.meeting.target,.95),bi("")):Sn("overview")),ol=n.roomLayout,(t=n.themeCfg)!=null&&t.bgColor&&gn.background.setHex(n.themeCfg.bgColor)},onReturnPodium:()=>{tt.returnToPodium()},onFocusMeeting:()=>{pn&&On(!1),Zi(!1),bi(""),$i(Oi.meeting.pos,Oi.meeting.target,.9)},onFocusOpsBoard:()=>{Sn("led")}});Qr.init();function Ro(n,e=null){const t=typeof n=="boolean"?n:Lr.classList.contains("hidden");Lr.classList.toggle("hidden",!t),Qu.classList.toggle("active",t),t&&(Bo.unminimize(Lr,tb),e&&Qr.openTab(e))}const Po=Jx({windowEl:document.getElementById("yt-window"),onStateChange:n=>{Ju.classList.toggle("active",n)}}),Zn=hM({modalEl:eb,getScreens:()=>{var i;const n=[],e=Object.fromEntries(Wi.interactables.map(s=>[s.userData.id,s.userData]));e["led-center"]&&n.push({...e["led-center"],shortLabel:"LED Trung Tâm"}),e["led-left"]&&n.push({...e["led-left"],shortLabel:"LED Trái"}),e["led-right"]&&n.push({...e["led-right"],shortLabel:"LED Phải"});const t=tt.interactables.find(s=>s.userData.canvas);return t&&n.push({...t.userData,shortLabel:"Bục Leader MRT"}),(i=Xe==null?void 0:Xe.userData)!=null&&i.canvas&&!n.some(s=>s.id===Xe.userData.id)&&n.push({...Xe.userData,shortLabel:Xe.userData.title.split("—")[0].trim()}),n}}),Ct=oM({windowEl:JM,onStateChange:n=>{Is==null||Is.classList.toggle("active",n.isOpen||n.ready)},getLatestConversationTurns:()=>(Pt.getState().messages||[]).filter(e=>e.fromStation>=0).slice(-4).map(e=>({stationIndex:e.fromStation,speaker:e.fromName,text:e.text}))});Ct.init();let ac=null;const So=[];function ea(n){const e=typeof n=="boolean"?n:Ja.classList.contains("hidden");Ja.classList.toggle("hidden",!e),Ku.classList.toggle("active",e),e&&(Bo.unminimize(Ja,jM),setTimeout(()=>Hr.focus(),40))}function mf(){if(So.length===0){Td.innerHTML='<div class="receipt-card"><div class="receipt-mrt">Sẵn sàng nhận lệnh tối cao của bạn. Mọi chỉ đạo sẽ được thực thi ngay lập tức qua Leader MRT.</div></div>';return}Td.innerHTML=So.map(n=>`
      <div class="receipt-card">
        <div class="receipt-head">
          <span>★ ${n.prompt}</span>
          <span>${n.timeStr}</span>
        </div>
        <ul class="receipt-steps">${n.executedSteps.map(e=>`<li>✅ ${e}</li>`).join("")}</ul>
        <div class="receipt-mrt">🤖 ${n.mrtReply}</div>
      </div>`).join("")}function gf(n){const e=Kx(n,{startProject:t=>{_f(t,!0)},jumpToStage:t=>{ot.jumpToStage(t),tt.isAutoWalkEnabled()&&tt.walkToDepartment(t),qt(!0)},triggerWarranty:()=>{const t=ot.triggerWarrantyTicket();return Pt.onWarrantyTicket(t,ot.getState()),tt.isAutoWalkEnabled()&&tt.walkToDepartment(5),qt(!0),t},setSpeed:t=>{ot.setSpeed(t),qt(!0)},setPaused:t=>{ot.setPaused(t),qt(!0)},setAlertMode:t=>{pf(t)},setNightMode:t=>{df(t)},setFlycam:t=>{On(t)},openYoutube:t=>{Po.open(t)},closeYoutube:()=>{Po.close()},openVoice:t=>{Ct.toggle(!0),Ct.setAutoEnabled(!0),t&&!Ct.getState().ready&&Ct.startServer()},setVoiceEnabled:t=>{Ct.setAutoEnabled(t)},toggleReport:t=>{Oo.toggle(t)},applyPreset:t=>{Sn(t)},dispatchViaMrt:(t,i,s)=>{s!==null&&ot.getState().stageIndex!==s&&ot.jumpToStage(s);const o=Pt.broadcastDirective(t,ot.getState());return ei(!0),o==null?void 0:o.followUp}});e&&(ac=e,So.unshift(e),So.length>10&&So.pop(),mf(),qt(!0),Ct.getState().config.autoReadSupreme&&e.mrtReply&&Ct.speakAsLeader(e.mrtReply))}Vx.forEach(n=>{const e=document.createElement("button");e.type="button",e.className="supreme-chip",e.textContent=n,e.addEventListener("click",()=>gf(n)),ZM.appendChild(e)});mf();Zu.addEventListener("submit",n=>{n.preventDefault();const e=Hr.value.trim();e&&(Hr.value="",gf(e))});Hr.addEventListener("keydown",n=>{(n.ctrlKey||n.metaKey)&&n.key==="Enter"&&(n.preventDefault(),Zu.requestSubmit())});Ku.addEventListener("click",()=>ea());qM.addEventListener("click",()=>ea());KM.addEventListener("click",()=>ea(!1));function Ki(n){const e=typeof n=="boolean"?n:Wa.classList.contains("hidden");Wa.classList.toggle("hidden",!e),e&&Bo.unminimize(Wa,LM)}function vf(n){Wu.value=n.name,$u.value=n.description,Xu.value=String(n.warrantyMonths);const e=oc.querySelectorAll('input[name="platform"]');for(const t of e)t.checked=n.platforms.includes(t.value)}No.forEach(n=>{const e=document.createElement("button");e.type="button",e.className="tpl-chip",e.textContent=n.label,e.addEventListener("click",()=>vf(n)),GM.appendChild(e)});vf(No[0]);const mb=wt.map((n,e)=>{const t=document.createElement("button");return t.type="button",t.className="pipe-step",t.style.setProperty("--step-color",n.color),t.innerHTML=`<span>${n.shortName}</span><div class="pipe-progress"><div class="pipe-progress-fill"></div></div>`,t.addEventListener("click",()=>{ot.jumpToStage(e),tt.isAutoWalkEnabled()&&tt.walkToDepartment(e),ji(e),qt(!0)}),PM.appendChild(t),{btn:t,fill:t.querySelector(".pipe-progress-fill")}});let Pd="",Ld="";function ei(n=!1){const e=Pt.getState(),t=e.latestMessage;t&&(XM.textContent=`${t.fromName} → ${t.toName}: "${t.text}"`);const i=(t==null?void 0:t.id)||"";if(!(!n&&i===Ld)){Ld=i,Sd.innerHTML=e.messages.slice().reverse().map(s=>{const o=s.fromStation>=0?`<button type="button" data-focus-station="${s.fromStation}">${s.fromName}</button>`:s.fromName,r=s.toStation>=0?`<button type="button" data-focus-station="${s.toStation}">${s.toName}</button>`:s.toName;return`
        <div class="feed-msg" style="--msg-color: ${s.fromColor||"#38bdf8"}">
          <div class="feed-msg-head">
            <span class="feed-route">${o} → ${r}</span>
            <span class="feed-time">${s.timeStr}</span>
          </div>
          <div class="feed-text">${s.text}</div>
        </div>`}).join("");for(const s of Sd.querySelectorAll("[data-focus-station]"))s.addEventListener("click",()=>{ub(Number(s.dataset.focusStation))})}}function qt(n=!1){const e=ot.getState();TM.textContent=`${e.project.name} (${e.project.platformLabels.join(" + ")})`,AM.textContent=e.version,wt.forEach((i,s)=>{const o=mb[s],r=e.stageStatus[s];o.btn.classList.toggle("active",r==="active"),o.btn.classList.toggle("done",r==="done");const a=r==="done"?100:r==="active"?Math.round(e.stageProgress*100):0;o.fill.style.width=`${a}%`}),ei(n),Oo.update(e,Pt.getState(),Yt);const t=`${e.project.slug}:${e.stageIndex}:${e.version}:${e.paused}:${e.speed}:${e.warrantyTickets.length}`;if(!(!n&&t===Pd)){Pd=t,Yu.textContent=e.paused?"Tiếp tục":"Tạm dừng";for(const i of qu)i.classList.toggle("active",Number(i.dataset.speed)===e.speed);bd.innerHTML=e.project.stageDetails.map((i,s)=>{const o=e.stageStatus[s],r=wt[s],a=o==="done"?"HOÀN TẤT":o==="active"?"ĐANG CHẠY":"CHỜ",l=i.deliverables.slice(0,3).map(c=>`<li>${c}</li>`).join("");return`
        <div class="stage-card ${o}" data-stage-idx="${s}">
          <div class="stage-card-head">
            <span>${r.name}</span>
            <span class="stage-card-status">${a}</span>
          </div>
          <div class="stage-card-summary">${i.summary}</div>
          <ul class="stage-deliverables">${l}</ul>
        </div>`}).join("");for(const i of bd.querySelectorAll(".stage-card"))i.addEventListener("click",()=>{const s=Number(i.dataset.stageIdx);ot.jumpToStage(s),tt.isAutoWalkEnabled()&&tt.walkToDepartment(s),ji(s),qt(!0)});WM.innerHTML=e.artifacts.map(i=>`
      <div class="artifact-item ${i.ready?"ready":""}">
        <span>${i.name}</span>
        <span>${i.ready?"SẴN SÀNG":"CHỜ"}</span>
      </div>`).join("")}}function _f(n,e=!1){const t=ot.startProject(n);ot.setPaused(!1),Pt.resetForProject(t),Bo.unminimize(RM,document.getElementById("btn-min-pipeline")),tt.isAutoWalkEnabled()&&tt.walkToDepartment(0),Ki(!0),Ys("factory"),gd&&(gd.checked=!0),qt(!0),e||ji(0),_b(n)}oc.addEventListener("submit",n=>{n.preventDefault();const e=Array.from(oc.querySelectorAll('input[name="platform"]:checked')).map(t=>t.value);e.length===0&&e.push("android"),_f({name:Wu.value,platforms:e,description:$u.value,warrantyMonths:Number(Xu.value)})});let it=null,pi=[];const Oo=cM({windowEl:QM,onStateChange:n=>{Ds==null||Ds.classList.toggle("active",n)},onSelectDepartment:n=>{ji(n),tt.isAutoWalkEnabled()&&tt.walkToDepartment(n)},onSpeakReport:n=>{Ct.speakAsLeader(n,!0)},getRealProjects:()=>pi});Oo.init();function It(n){const e=Array.isArray(n)?n:[n],t=ho.textContent==="Sẵn sàng ghi mã nguồn ra ổ cứng & biên dịch..."?"":ho.textContent+`
`;ho.textContent=(t+e.join(`
`)).split(`
`).slice(-40).join(`
`),ho.scrollTop=ho.scrollHeight}async function gb(n,e){if(n)try{if(await navigator.clipboard.writeText(n),e){const t=e.textContent;e.textContent="✓ Đã copy",setTimeout(()=>{e.textContent=t},1500)}}catch{It(`[COPY] Đường dẫn: ${n}`)}}async function vb(n,e,t){if(e==="web"&&t){const i=`${window.location.origin}${t}`;window.open(i,"_blank","noopener"),It(`[TEST WEB] Đã mở bản chạy thử tại ${i}`);return}try{It(`[TEST ${e.toUpperCase()}] Đang mở bản dựng để kiểm thử...`);const i=await mM({slug:n,platform:e});It(`[TEST] ${i.message}`),i.action==="open_url"&&i.testUrl&&window.open(`${window.location.origin}${i.testUrl}`,"_blank","noopener")}catch(i){It(`[LỖI TEST] ${i.message}`)}}function yf(n,e,t="build-out-card"){const i=e.sizeBytes>0?`${Math.round(e.sizeBytes/1024)} KB`:e.status,s=e.platform==="web"&&e.testUrl?`${window.location.origin}${e.testUrl}`:"",o=s||e.fullPath||e.file,r=e.platform==="web"?"🌐 Mở Web Test":e.platform==="windows"?"▶ Chạy thử .EXE":"📱 Mở / Cài APK";return`
    <div class="${t}">
      <div class="build-out-head">
        <span>${e.platform.toUpperCase()} • ${e.status}</span>
        <span>${i}</span>
      </div>
      <div class="build-out-path">${e.fullPath||e.file}</div>
      ${s?`<a class="build-out-url" href="${s}" target="_blank" rel="noopener">${s}</a>`:""}
      <div class="build-out-actions">
        <button type="button" class="mini-ctrl-btn send-btn" data-test-slug="${n}" data-test-plat="${e.platform}" data-test-url="${e.testUrl||""}">${r}</button>
        <button type="button" class="mini-ctrl-btn" data-copy-path="${o}">📋 Copy đường dẫn</button>
        ${e.testUrl&&e.platform!=="web"?`<a class="mini-ctrl-btn" href="${e.testUrl}" download>⬇ Tải về</a>`:""}
      </div>
    </div>
  `}function xf(n){if(n){for(const e of n.querySelectorAll("[data-test-slug]"))e.addEventListener("click",()=>{vb(e.dataset.testSlug,e.dataset.testPlat,e.dataset.testUrl)});for(const e of n.querySelectorAll("[data-copy-path]"))e.addEventListener("click",()=>{gb(e.dataset.copyPath,e)})}}let Mf="";function lc(n,e){var o;if(!Ls||!n)return;const t=!!n.ok,i=n.slug||"";Mf=i,Ls.classList.toggle("toast-err",!t),yd&&(yd.textContent=t?"✅ BUILD HOÀN TẤT":"⚠ BUILD CÓ LỖI"),xd&&(xd.textContent=e||((o=n.meta)==null?void 0:o.name)||i),Md&&(Md.textContent=t?`Đã đóng gói xong tại ${n.projectDir}. Chọn nền tảng bên dưới để chạy test hoặc copy đường dẫn:`:"Quá trình build gặp cảnh báo/lỗi. Mở Xưởng Thật để xem chi tiết log.");const s=n.outputs||[];if(qa&&(qa.innerHTML=s.length>0?s.map(r=>yf(i,r,"build-out-card")).join(""):`<div class="build-out-path">${n.projectDir||""}</div>`,xf(qa)),Ls.classList.remove("hidden"),t&&Ct.getState().ready){const r=s.map(a=>a.platform).join(" và ");Ct.speakAsLeader(`Đã build hoàn tất phần mềm ${e||i} cho ${r}. Sếp có thể bấm chạy test hoặc mở đường dẫn ngay trên màn hình.`,!1)}}ja==null||ja.addEventListener("click",()=>{Ls==null||Ls.classList.add("hidden")});Ka==null||Ka.addEventListener("click",async()=>{const n=Mf||(it==null?void 0:it.slug);if(n)try{await zu(n)}catch(e){It(`[LỖI] ${e.message}`)}});Za==null||Za.addEventListener("click",()=>{Ki(!0),Ys("factory"),qs()});function Fo(){if(!it){$a.innerHTML='<div class="factory-card-title">Chưa chọn dự án trên ổ cứng</div><div class="factory-card-path">Tạo dự án mới ở tab "Tạo Dự Án" hoặc chọn bên dưới.</div>';return}const n=(it.outputs||[]).map(t=>yf(it.slug,t,"factory-out-row")).join(""),e=it.githubUrl?`<a class="factory-gh-link" href="${it.githubUrl}" target="_blank" rel="noopener">GitHub: ${it.githubUrl}</a>`:"";$a.innerHTML=`
    <div class="factory-card-title">${it.name}</div>
    <div class="factory-card-path">${it.projectDir||""}</div>
    ${n||'<div class="factory-card-outputs">Mã nguồn đã sẵn sàng — bấm ⚡ Build Thật</div>'}
    ${e}
  `,xf($a)}function bf(){if(pi.length===0){Ya.innerHTML='<div class="factory-card-path">Chưa có dự án nào trong projects/</div>';return}Ya.innerHTML=pi.map(n=>`
      <button type="button" class="factory-proj-item ${(it==null?void 0:it.slug)===n.slug?"active":""}" data-real-slug="${n.slug}">
        <strong>${n.name}</strong> (${(n.platforms||[]).join(", ")})
      </button>`).join("");for(const n of Ya.querySelectorAll("[data-real-slug]"))n.addEventListener("click",()=>{const e=pi.find(t=>t.slug===n.dataset.realSlug);e&&(it=e,Fo(),bf())})}async function qs(){var n,e,t,i,s,o,r;try{const[a,l]=await Promise.all([dM(),uM()]),c=[[".NET "+(((n=a.dotnet)==null?void 0:n.version)||""),(e=a.dotnet)==null?void 0:e.ok],["Android SDK",(t=a.androidSdk)==null?void 0:t.ok],[(i=a.github)!=null&&i.user?`GH: ${a.github.user}`:"GitHub CLI",(s=a.github)==null?void 0:s.ok],["Node "+(((o=a.node)==null?void 0:o.version)||""),(r=a.node)==null?void 0:r.ok]];if(vd.innerHTML=c.map(([h,d])=>`<span class="tool-pill ${d?"":"off"}">${d?"✓":"✕"} ${h}</span>`).join(""),pi=l.projects||[],it!=null&&it.slug){const h=pi.find(d=>d.slug===it.slug);h&&(it=h)}else pi.length>0&&(it=pi[0]);Fo(),bf()}catch(a){vd.innerHTML=`<span class="tool-pill off">Factory API offline: ${a.message}</span>`}}async function _b(n){const e=ui.textContent;try{ui.disabled=!0,ui.textContent="⏳ Đang Build Thật...",It(`[FACTORY] Đang tiếp nhận yêu cầu & khởi tạo mã nguồn thật cho "${n.name}"...`);const t=await fM(n);It(t.logs),it={...t.meta,projectDir:t.projectDir},Fo(),ot.jumpToStage(1),tt.isAutoWalkEnabled()&&tt.walkToDepartment(1),qt(!0),It("[FACTORY] Chuyển sang Phòng Xây dựng — Đang biên dịch thật trên máy..."),ot.jumpToStage(2),tt.isAutoWalkEnabled()&&tt.walkToDepartment(2),qt(!0);const i=await Fu(t.slug);It(i.logs),it={...i.meta,projectDir:i.projectDir},i.ok&&(ot.jumpToStage(4),tt.isAutoWalkEnabled()&&tt.walkToDepartment(4)),Pt.broadcastDirective(`Đã tạo & build thật "${n.name}" lưu tại ${i.projectDir} (${i.outputs.map(s=>s.file).join(", ")})`,ot.getState()),ei(!0),qt(!0),await qs(),lc(i,n.name)}catch(t){It(`[LỖI] ${t.message}`),lc({ok:!1,slug:n.name,projectDir:"",outputs:[]},n.name)}finally{ui.disabled=!1,ui.textContent=e}}ui.addEventListener("click",async()=>{if(it)try{ui.disabled=!0,It(`[BUILD] Đang build lại ${it.slug}...`);const n=await Fu(it.slug);It(n.logs),it={...n.meta,projectDir:n.projectDir},Fo(),await qs(),lc(n,it.name)}catch(n){It(`[LỖI BUILD] ${n.message}`)}finally{ui.disabled=!1}});HM.addEventListener("click",async()=>{if(it)try{const n=await zu(it.slug);It(`[EXPLORER] Đã mở thư mục: ${n.projectDir}`)}catch(n){It(`[LỖI] ${n.message}`)}});Xa.addEventListener("click",async()=>{if(it)try{Xa.disabled=!0,It(`[GITHUB] Đang đẩy "${it.slug}" lên GitHub (${_d.value})...`);const n=await pM({slug:it.slug,visibility:_d.value});It(n.logs),it={...n.meta,projectDir:it.projectDir},Fo(),Pt.broadcastDirective(`Đã đẩy dự án "${it.name}" lên GitHub: ${n.githubUrl||"thành công"}`,ot.getState()),ei(!0),await qs()}catch(n){It(`[LỖI GITHUB] ${n.message}`)}finally{Xa.disabled=!1}});kM.addEventListener("click",()=>{Ki(!0),Ys("factory"),qs()});qs();$M.addEventListener("submit",n=>{n.preventDefault();const e=Ed.value.trim();if(!e)return;const t=ot.getState();Pt.broadcastDirective(e,t),tt.isAutoWalkEnabled()&&tt.walkToDepartment(t.stageIndex),Ed.value="",ei(!0)});DM.addEventListener("click",()=>Ki());NM.addEventListener("click",()=>Ki(!1));UM.addEventListener("click",()=>{Ki(!0),Ys("agents"),ei(!0)});wd.addEventListener("click",n=>{wd.dataset.justDragged!=="1"&&(n.target.closest("#btn-close-ticker")||n.target.closest(".drag-grip")||(Ki(!0),Ys("agents"),ei(!0)))});for(const n of Vu)n.addEventListener("click",()=>Ys(n.dataset.tab));Yu.addEventListener("click",()=>{const n=ot.getState().paused;ot.setPaused(!n),qt(!0)});for(const n of qu)n.addEventListener("click",()=>{ot.setSpeed(Number(n.dataset.speed)),qt(!0)});VM.addEventListener("click",()=>{const n=ot.triggerWarrantyTicket();Pt.onWarrantyTicket(n,ot.getState()),tt.isAutoWalkEnabled()&&tt.walkToDepartment(5),qt(!0),ji(5)});function Nc(n){const e=Mi.get(n)||[];Ga.innerHTML=e.map(t=>`<div class="chat-bubble ${t.who}">${t.text}</div>`).join(""),Ga.scrollTop=Ga.scrollHeight}function Sf(n){if(!Xe||!Xe.userData.isAgent)return;const e=Xe.userData.stationIndex,t=Pt.askAgent(e,n,ot.getState()),i=Mi.get(e)||[];i.push({who:"user",text:n}),i.push({who:"agent",text:t.reply}),Mi.set(e,i.slice(-10)),Nc(e),ei(!0),Ct.getState().config.autoReadAgent&&(t!=null&&t.reply)&&Ct.speakAsStation(e,t.reply)}Qa==null||Qa.addEventListener("click",()=>{if(!Xe||!Xe.userData.isAgent)return;const n=Xe.userData.stationIndex,t=[...Mi.get(n)||[]].reverse().find(o=>o.who==="agent"),i=Pt.getAgentStatus(n,ot.getState()),s=(t==null?void 0:t.text)||i.currentAction;Ct.speakAsStation(n,s,!0)});el==null||el.addEventListener("click",()=>{if(!Xe||!Xe.userData.isAgent)return;const n=Xe.userData.stationIndex,e=Pt.runAgentTask(n,ot.getState()),t=Mi.get(n)||[];t.push({who:"agent",text:e.report}),Mi.set(n,t.slice(-10)),Nc(n),ei(!0),js(Xe),Ct.speakAsStation(n,e.speechText,!0)});function yb(n){const e=Ft(n);if(br&&(br.classList.remove("male","female"),br.classList.add(e.gender),br.textContent=e.gender==="female"?"♀ Nữ":"♂ Nam"),Ss&&(Ss.innerHTML=Jr.map(t=>`<option value="${t.id}" ${t.id===e.modelId?"selected":""}>${t.name}</option>`).join("")),Es){const t=Ct.getAvailableVoices(),i=Lc(t,e.gender),s=Pr(n,t);Es.innerHTML=i.length>0?i.map(o=>`<option value="${o.id}" ${o.id===s?"selected":""}>${o.name||o.id} (${e.genderLabel})</option>`).join(""):`<option value="${e.voiceId}" selected>${e.voiceId} (${e.genderLabel})</option>`}}Ss==null||Ss.addEventListener("change",()=>{!Xe||!Xe.userData.isAgent||(bs(Xe.userData.stationIndex,{modelId:Ss.value}),js(Xe))});Es==null||Es.addEventListener("change",()=>{!Xe||!Xe.userData.isAgent||(bs(Xe.userData.stationIndex,{voiceId:Es.value}),js(Xe))});Iu(()=>{Xe!=null&&Xe.userData.isAgent&&!zr.classList.contains("hidden")&&js(Xe)});for(const n of EM)n.addEventListener("click",()=>{Sf(n.dataset.q)});SM.addEventListener("submit",n=>{n.preventDefault();const e=md.value.trim();e&&(md.value="",Sf(e))});function js(n){const e=n.userData,t=ot.getState();vM.textContent=e.kind,_M.textContent=e.title,yM.textContent=e.role,MM.textContent=e.desc;const i=e.getMetrics(Yt,t,Pt);if(xM.innerHTML=i.map(s=>`
      <div class="metric-card">
        <div class="metric-label">${s.label}</div>
        <div class="metric-value ${s.tone}">${s.value}</div>
      </div>`).join(""),e.isAgent){const s=Pt.getAgentStatus(e.stationIndex,t);Hu.textContent=s.currentAction,Gu.textContent=s.concreteMission||s.assignedTask,bM.textContent=s.workingWith,yb(e.stationIndex),pd.classList.remove("hidden"),Mi.has(e.stationIndex)||Mi.set(e.stationIndex,[{who:"agent",text:`Xin chào! Mình là ${s.name} (${s.code} • ${s.modelName}). Hiện mình ${s.currentAction.toLowerCase()}.`}]),Nc(e.stationIndex)}else pd.classList.add("hidden");e.canvas&&(sc.clearRect(0,0,Nn.width,Nn.height),sc.drawImage(e.canvas,0,0,Nn.width,Nn.height))}function Ef(n){if(n.userData.isFlycam){On(!0);return}pn&&On(!1),Xe=n,Ii.classList.add("hidden"),js(n),zr.classList.remove("hidden"),Bo.unminimize(zr,IM),bi(""),$i(n.userData.focusPos,n.userData.focusTarget,.85)}function Zi(n=!0){Xe=null,zr.classList.add("hidden"),n&&(pn&&On(!1),bi("overview"),$i(Oi.overview.pos,Oi.overview.target,.85))}const Id=new Cy,rl=new Re;let cc={x:0,y:0},mi=null;function xb(n){let e=n;for(;e;){if(!e.visible)return!1;e=e.parent}return!0}function Uc(n,e){const t=zt.domElement.getBoundingClientRect();rl.x=(n-t.left)/t.width*2-1,rl.y=-((e-t.top)/t.height)*2+1,Id.setFromCamera(rl,Vt);const i=Id.intersectObjects(db,!1).filter(s=>xb(s.object));if(i.length>0){const s=i[0].object;if(mi=s,zt.domElement.style.cursor="pointer",s.userData.isAgent){const o=Pt.getAgentStatus(s.userData.stationIndex,ot.getState());Ii.innerHTML=`${s.userData.title}<small>${o.currentAction}</small>`}else Ii.innerHTML=`${s.userData.title}<small>${s.userData.kind} • Bấm để phóng to</small>`;Ii.style.left=`${n}px`,Ii.style.top=`${e}px`,Ii.classList.remove("hidden")}else mi=null,zt.domElement.style.cursor="grab",Ii.classList.add("hidden")}zt.domElement.addEventListener("pointermove",n=>{Uc(n.clientX,n.clientY)});zt.domElement.addEventListener("pointerdown",n=>{cc={x:n.clientX,y:n.clientY}});zt.domElement.addEventListener("pointerup",n=>{Math.hypot(n.clientX-cc.x,n.clientY-cc.y)>5||(Uc(n.clientX,n.clientY),mi&&Ef(mi))});zt.domElement.addEventListener("dblclick",n=>{var e;Uc(n.clientX,n.clientY),(e=mi==null?void 0:mi.userData)!=null&&e.canvas&&Zn.open(mi.userData)});for(const n of of)n.addEventListener("click",()=>Sn(n.dataset.preset));ju.addEventListener("click",uf);Qu.addEventListener("click",()=>Ro());Ns==null||Ns.addEventListener("click",()=>{Qr.toggleMeetingQuick()});tl==null||tl.addEventListener("click",()=>{Ro(!0,"opsboard"),Sn("led")});nl==null||nl.addEventListener("click",()=>{var n;Zn.toggle((n=Xe==null?void 0:Xe.userData)!=null&&n.canvas?Xe.userData:"led-center")});il==null||il.addEventListener("click",()=>{var n;(n=Xe==null?void 0:Xe.userData)!=null&&n.canvas&&Zn.open(Xe.userData)});Nn==null||Nn.addEventListener("click",()=>{var n;(n=Xe==null?void 0:Xe.userData)!=null&&n.canvas&&Zn.open(Xe.userData)});sl==null||sl.addEventListener("click",()=>{Zn.open("led-center")});nb.addEventListener("click",()=>Ro(!1));Ju.addEventListener("click",()=>Po.toggle());Is==null||Is.addEventListener("click",()=>Ct.toggle());Ds==null||Ds.addEventListener("click",()=>Oo.toggle());sb.addEventListener("click",()=>Po.open());ef.addEventListener("click",()=>On());tf.addEventListener("click",fb);nf.addEventListener("click",ff);sf.addEventListener("click",pb);lb.addEventListener("click",()=>Zi(!0));cb.addEventListener("click",()=>Zi(!0));hb.addEventListener("click",()=>Zi(!0));window.addEventListener("keydown",n=>{var t,i;const e=(t=document.activeElement)==null?void 0:t.tagName;if(e==="INPUT"||e==="TEXTAREA"||e==="SELECT"){n.key==="Escape"&&document.activeElement.blur();return}if(n.key==="1")Sn("overview");else if(n.key==="2")Sn("led");else if(n.key==="3")Sn("devs");else if(n.key==="4")Sn("top");else if(n.key.toLowerCase()==="m")Sn("mrt");else if(n.key.toLowerCase()==="p")ea();else if(n.key.toLowerCase()==="t")Ro();else if(n.key.toLowerCase()==="b")Qr.toggleMeetingQuick();else if(n.key.toLowerCase()==="o")Ro(!0,"opsboard"),Sn("led");else if(n.key.toLowerCase()==="y")Po.toggle();else if(n.key.toLowerCase()==="z")Zn.toggle((i=Xe==null?void 0:Xe.userData)!=null&&i.canvas?Xe.userData:"led-center");else if(n.key.toLowerCase()==="v")Ct.toggle();else if(n.key.toLowerCase()==="r")Oo.toggle();else if(n.key.toLowerCase()==="f")On();else if(n.key.toLowerCase()==="n")uf();else if(n.code==="Space")n.preventDefault(),ff();else if(n.key==="Escape"){if(Zn.isOpen()){Zn.close();return}Zi(!0)}});window.addEventListener("resize",()=>{Vt.fov=rf(),Vt.aspect=window.innerWidth/window.innerHeight,Vt.updateProjectionMatrix(),zt.setSize(window.innerWidth,window.innerHeight)});const Dd=new Ay;let al=0,ll=0;function Mb(n){return n<.5?4*n*n*n:1-Math.pow(-2*n+2,3)/2}function wf(){requestAnimationFrame(wf);const n=Math.min(Dd.getDelta(),.1),e=Dd.getElapsedTime(),t=ot.update(n),i=ot.getState();Pt.update(n,i,t);const s=Pt.getState();if(t&&(tt.isAutoWalkEnabled()&&tt.walkToDepartment(i.stageIndex),vo&&!Xe&&ji(i.stageIndex),Ct.getState().config.autoReadStage&&Ct.speakAsLeader(`Chuyển sang giai đoạn ${i.stageIndex+1}: ${i.currentDept.name}.`)),Math.abs(uo-$r)>.001&&(uo=qe.lerp(uo,$r,Math.min(1,n*5.5)),hf(uo)),pn){Us.getFlycamView(Cd,Rd),Vt.position.lerp(Cd,Math.min(1,n*8)),bt.target.lerp(Rd,Math.min(1,n*6)),Vt.lookAt(bt.target);const r=Us.getTelemetry();rb.textContent=`REC • FLYCAM-01 • ALT ${r.y}m • ${i.currentDept.shortName.toUpperCase()} • MRT SOFT HUB`}else{if(un){un.elapsed+=n;const r=Math.min(1,un.elapsed/un.duration),a=Mb(r);Vt.position.lerpVectors(un.startPos,un.endPos,a),bt.target.lerpVectors(un.startTarget,un.endTarget,a),r>=1&&(un=null)}bt.update(),Vt.position.x=qe.clamp(Vt.position.x,-8.3,8.3),Vt.position.y=qe.clamp(Vt.position.y,.7,5.05),Vt.position.z=qe.clamp(Vt.position.z,-6.45,7.65),bt.target.x=qe.clamp(bt.target.x,-7.8,7.8),bt.target.y=qe.clamp(bt.target.y,.3,4.4),bt.target.z=qe.clamp(bt.target.z,-6.85,6.5)}const o=new Date;if(fi.updateClocks(o),fi.updateDecor(e),wM.textContent=o.toLocaleTimeString("vi-VN",{hour12:!1}),Wi.update(e,n,Yt,i,s,ac),tt.update(e,n,Yt,i,s,kn.deptAnchors,ac),kn.update(e,n,Yt,i,s,Pt),Us.update(e,n,i,uo),Zn.update(n),ll+=n,(ll>=.25||t)&&(ll=0,qt(t)),Xe&&(al+=n,al>=.35)){al=0;const r=Xe.userData.canvas;if(r&&sc.drawImage(r,0,0,Nn.width,Nn.height),Xe.userData.isAgent){const a=Pt.getAgentStatus(Xe.userData.stationIndex,i);Hu.textContent=a.currentAction,Gu.textContent=a.assignedTask}}zt.render(gn,Vt)}qt(!0);hf(0);tt.isAutoWalkEnabled()&&tt.walkToDepartment(0);wf();
