var Yn={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},Zn={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},$c=0,cl=1,Wc=2;var hl=1,da=2,mn=3,An=0,De=1,tn=2,Rn=0,li=1,ul=2,dl=3,fl=4,Xc=5,Hn=100,qc=101,Yc=102,Zc=103,Jc=104,Kc=200,jc=201,Qc=202,th=203,Or=204,Br=205,eh=206,nh=207,ih=208,sh=209,rh=210,ah=211,oh=212,lh=213,ch=214,fa=0,pa=1,ma=2,ci=3,ga=4,_a=5,ya=6,xa=7,pl=0,hh=1,uh=2,In=0,dh=1,fh=2,ph=3,va=4,mh=5,gh=6,_h=7;var ml=300,_i=301,yi=302,Ma=303,ba=304,sr=306,kr=1e3,Vn=1001,zr=1002,je=1003,yh=1004;var rr=1005;var on=1006,Sa=1007;var Jn=1008;var hn=1009,gl=1010,_l=1011,as=1012,Ea=1013,Kn=1014,gn=1015,os=1016,wa=1017,Ta=1018,ls=1020,yl=35902,xl=35899,vl=1021,Ml=1022,en=1023,$i=1026,cs=1027,bl=1028,Aa=1029,Sl=1030,Ca=1031;var Ra=1033,ar=33776,or=33777,lr=33778,cr=33779,Ia=35840,Pa=35841,La=35842,Da=35843,Ua=36196,Na=37492,Fa=37496,Oa=37808,Ba=37809,ka=37810,za=37811,Va=37812,Ha=37813,Ga=37814,$a=37815,Wa=37816,Xa=37817,qa=37818,Ya=37819,Za=37820,Ja=37821,Ka=36492,ja=36494,Qa=36495,to=36283,eo=36284,no=36285,io=36286;var Rs=2300,Vr=2301,Nr=2302,Jo=2400,Ko=2401,jo=2402;var xh=3200,vh=3201;var El=0,Mh=1,Pn="",Se="srgb",hi="srgb-linear",Is="linear",ie="srgb";var ai=7680;var Qo=519,bh=512,Sh=513,Eh=514,wl=515,wh=516,Th=517,Ah=518,Ch=519,tl=35044;var Tl="300 es",an=2e3,Ps=2001;var fn=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){let n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){let n=this._listeners;if(n===void 0)return;let s=n[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let n=e[t.type];if(n!==void 0){t.target=this;let s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,t);t.target=null}}},Te=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],yc=1234567,ws=Math.PI/180,ui=180/Math.PI;function xi(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Te[i&255]+Te[i>>8&255]+Te[i>>16&255]+Te[i>>24&255]+"-"+Te[t&255]+Te[t>>8&255]+"-"+Te[t>>16&15|64]+Te[t>>24&255]+"-"+Te[e&63|128]+Te[e>>8&255]+"-"+Te[e>>16&255]+Te[e>>24&255]+Te[n&255]+Te[n>>8&255]+Te[n>>16&255]+Te[n>>24&255]).toLowerCase()}function Gt(i,t,e){return Math.max(t,Math.min(e,i))}function Al(i,t){return(i%t+t)%t}function td(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function ed(i,t,e){return i!==t?(e-i)/(t-i):0}function Ts(i,t,e){return(1-e)*i+e*t}function nd(i,t,e,n){return Ts(i,t,1-Math.exp(-e*n))}function id(i,t=1){return t-Math.abs(Al(i,t*2)-t)}function sd(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function rd(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function ad(i,t){return i+Math.floor(Math.random()*(t-i+1))}function od(i,t){return i+Math.random()*(t-i)}function ld(i){return i*(.5-Math.random())}function cd(i){i!==void 0&&(yc=i);let t=yc+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function hd(i){return i*ws}function ud(i){return i*ui}function dd(i){return(i&i-1)===0&&i!==0}function fd(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function pd(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function md(i,t,e,n,s){let r=Math.cos,a=Math.sin,o=r(e/2),l=a(e/2),c=r((t+n)/2),d=a((t+n)/2),h=r((t-n)/2),f=a((t-n)/2),p=r((n-t)/2),_=a((n-t)/2);switch(s){case"XYX":i.set(o*d,l*h,l*f,o*c);break;case"YZY":i.set(l*f,o*d,l*h,o*c);break;case"ZXZ":i.set(l*h,l*f,o*d,o*c);break;case"XZX":i.set(o*d,l*_,l*p,o*c);break;case"YXY":i.set(l*p,o*d,l*_,o*c);break;case"ZYZ":i.set(l*_,l*p,o*d,o*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Hi(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Le(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}var hr={DEG2RAD:ws,RAD2DEG:ui,generateUUID:xi,clamp:Gt,euclideanModulo:Al,mapLinear:td,inverseLerp:ed,lerp:Ts,damp:nd,pingpong:id,smoothstep:sd,smootherstep:rd,randInt:ad,randFloat:od,randFloatSpread:ld,seededRandom:cd,degToRad:hd,radToDeg:ud,isPowerOfTwo:dd,ceilPowerOfTwo:fd,floorPowerOfTwo:pd,setQuaternionFromProperEuler:md,normalize:Le,denormalize:Hi},lt=class i{constructor(t=0,e=0){i.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Gt(this.x,t.x,e.x),this.y=Gt(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=Gt(this.x,t,e),this.y=Gt(this.y,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Gt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Gt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*s+t.x,this.y=r*s+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Qe=class{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,a,o){let l=n[s+0],c=n[s+1],d=n[s+2],h=n[s+3],f=r[a+0],p=r[a+1],_=r[a+2],S=r[a+3];if(o===0){t[e+0]=l,t[e+1]=c,t[e+2]=d,t[e+3]=h;return}if(o===1){t[e+0]=f,t[e+1]=p,t[e+2]=_,t[e+3]=S;return}if(h!==S||l!==f||c!==p||d!==_){let m=1-o,u=l*f+c*p+d*_+h*S,E=u>=0?1:-1,y=1-u*u;if(y>Number.EPSILON){let w=Math.sqrt(y),v=Math.atan2(w,u*E);m=Math.sin(m*v)/w,o=Math.sin(o*v)/w}let g=o*E;if(l=l*m+f*g,c=c*m+p*g,d=d*m+_*g,h=h*m+S*g,m===1-o){let w=1/Math.sqrt(l*l+c*c+d*d+h*h);l*=w,c*=w,d*=w,h*=w}}t[e]=l,t[e+1]=c,t[e+2]=d,t[e+3]=h}static multiplyQuaternionsFlat(t,e,n,s,r,a){let o=n[s],l=n[s+1],c=n[s+2],d=n[s+3],h=r[a],f=r[a+1],p=r[a+2],_=r[a+3];return t[e]=o*_+d*h+l*p-c*f,t[e+1]=l*_+d*f+c*h-o*p,t[e+2]=c*_+d*p+o*f-l*h,t[e+3]=d*_-o*h-l*f-c*p,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,s=t._y,r=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(n/2),d=o(s/2),h=o(r/2),f=l(n/2),p=l(s/2),_=l(r/2);switch(a){case"XYZ":this._x=f*d*h+c*p*_,this._y=c*p*h-f*d*_,this._z=c*d*_+f*p*h,this._w=c*d*h-f*p*_;break;case"YXZ":this._x=f*d*h+c*p*_,this._y=c*p*h-f*d*_,this._z=c*d*_-f*p*h,this._w=c*d*h+f*p*_;break;case"ZXY":this._x=f*d*h-c*p*_,this._y=c*p*h+f*d*_,this._z=c*d*_+f*p*h,this._w=c*d*h-f*p*_;break;case"ZYX":this._x=f*d*h-c*p*_,this._y=c*p*h+f*d*_,this._z=c*d*_-f*p*h,this._w=c*d*h+f*p*_;break;case"YZX":this._x=f*d*h+c*p*_,this._y=c*p*h+f*d*_,this._z=c*d*_-f*p*h,this._w=c*d*h-f*p*_;break;case"XZY":this._x=f*d*h-c*p*_,this._y=c*p*h-f*d*_,this._z=c*d*_+f*p*h,this._w=c*d*h+f*p*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],s=e[4],r=e[8],a=e[1],o=e[5],l=e[9],c=e[2],d=e[6],h=e[10],f=n+o+h;if(f>0){let p=.5/Math.sqrt(f+1);this._w=.25/p,this._x=(d-l)*p,this._y=(r-c)*p,this._z=(a-s)*p}else if(n>o&&n>h){let p=2*Math.sqrt(1+n-o-h);this._w=(d-l)/p,this._x=.25*p,this._y=(s+a)/p,this._z=(r+c)/p}else if(o>h){let p=2*Math.sqrt(1+o-n-h);this._w=(r-c)/p,this._x=(s+a)/p,this._y=.25*p,this._z=(l+d)/p}else{let p=2*Math.sqrt(1+h-n-o);this._w=(a-s)/p,this._x=(r+c)/p,this._y=(l+d)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Gt(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,s=t._y,r=t._z,a=t._w,o=e._x,l=e._y,c=e._z,d=e._w;return this._x=n*d+a*o+s*c-r*l,this._y=s*d+a*l+r*o-n*c,this._z=r*d+a*c+n*l-s*o,this._w=a*d-n*o-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);let n=this._x,s=this._y,r=this._z,a=this._w,o=a*t._w+n*t._x+s*t._y+r*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=a,this._x=n,this._y=s,this._z=r,this;let l=1-o*o;if(l<=Number.EPSILON){let p=1-e;return this._w=p*a+e*this._w,this._x=p*n+e*this._x,this._y=p*s+e*this._y,this._z=p*r+e*this._z,this.normalize(),this}let c=Math.sqrt(l),d=Math.atan2(c,o),h=Math.sin((1-e)*d)/c,f=Math.sin(e*d)/c;return this._w=a*h+this._w*f,this._x=n*h+this._x*f,this._y=s*h+this._y*f,this._z=r*h+this._z*f,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},B=class i{constructor(t=0,e=0,n=0){i.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(xc.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(xc.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(t){let e=this.x,n=this.y,s=this.z,r=t.x,a=t.y,o=t.z,l=t.w,c=2*(a*s-o*n),d=2*(o*e-r*s),h=2*(r*n-a*e);return this.x=e+l*c+a*h-o*d,this.y=n+l*d+o*c-r*h,this.z=s+l*h+r*d-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Gt(this.x,t.x,e.x),this.y=Gt(this.y,t.y,e.y),this.z=Gt(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=Gt(this.x,t,e),this.y=Gt(this.y,t,e),this.z=Gt(this.z,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Gt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,s=t.y,r=t.z,a=e.x,o=e.y,l=e.z;return this.x=s*l-r*o,this.y=r*a-n*l,this.z=n*o-s*a,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return wo.copy(this).projectOnVector(t),this.sub(wo)}reflect(t){return this.sub(wo.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Gt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},wo=new B,xc=new Qe,kt=class i{constructor(t,e,n,s,r,a,o,l,c){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,l,c)}set(t,e,n,s,r,a,o,l,c){let d=this.elements;return d[0]=t,d[1]=s,d[2]=o,d[3]=e,d[4]=r,d[5]=l,d[6]=n,d[7]=a,d[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],d=n[4],h=n[7],f=n[2],p=n[5],_=n[8],S=s[0],m=s[3],u=s[6],E=s[1],y=s[4],g=s[7],w=s[2],v=s[5],I=s[8];return r[0]=a*S+o*E+l*w,r[3]=a*m+o*y+l*v,r[6]=a*u+o*g+l*I,r[1]=c*S+d*E+h*w,r[4]=c*m+d*y+h*v,r[7]=c*u+d*g+h*I,r[2]=f*S+p*E+_*w,r[5]=f*m+p*y+_*v,r[8]=f*u+p*g+_*I,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],d=t[8];return e*a*d-e*o*c-n*r*d+n*o*l+s*r*c-s*a*l}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],d=t[8],h=d*a-o*c,f=o*l-d*r,p=c*r-a*l,_=e*h+n*f+s*p;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);let S=1/_;return t[0]=h*S,t[1]=(s*c-d*n)*S,t[2]=(o*n-s*a)*S,t[3]=f*S,t[4]=(d*e-s*l)*S,t[5]=(s*r-o*e)*S,t[6]=p*S,t[7]=(n*l-c*e)*S,t[8]=(a*e-n*r)*S,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,a,o){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+t,-s*c,s*l,-s*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(To.makeScale(t,e)),this}rotate(t){return this.premultiply(To.makeRotation(-t)),this}translate(t,e){return this.premultiply(To.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}},To=new kt;function Cl(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function Wi(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Rh(){let i=Wi("canvas");return i.style.display="block",i}var vc={};function Xi(i){i in vc||(vc[i]=!0,console.warn(i))}function Ih(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}var Mc=new kt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),bc=new kt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function gd(){let i={enabled:!0,workingColorSpace:hi,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===ie&&(s.r=Tn(s.r),s.g=Tn(s.g),s.b=Tn(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===ie&&(s.r=Gi(s.r),s.g=Gi(s.g),s.b=Gi(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Pn?Is:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return Xi("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return Xi("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[hi]:{primaries:t,whitePoint:n,transfer:Is,toXYZ:Mc,fromXYZ:bc,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:Se},outputColorSpaceConfig:{drawingBufferColorSpace:Se}},[Se]:{primaries:t,whitePoint:n,transfer:ie,toXYZ:Mc,fromXYZ:bc,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:Se}}}),i}var jt=gd();function Tn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Gi(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var Ri,Hr=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{Ri===void 0&&(Ri=Wi("canvas")),Ri.width=t.width,Ri.height=t.height;let s=Ri.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),n=Ri}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=Wi("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=Tn(r[a]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Tn(e[n]/255)*255):e[n]=Tn(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},_d=0,qi=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:_d++}),this.uuid=xi(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):e instanceof VideoFrame?t.set(e.displayHeight,e.displayWidth,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(Ao(s[a].image)):r.push(Ao(s[a]))}else r=Ao(s);n.url=r}return e||(t.images[this.uuid]=n),n}};function Ao(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Hr.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var yd=0,Co=new B,Fe=class i extends fn{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=Vn,s=Vn,r=on,a=Jn,o=en,l=hn,c=i.DEFAULT_ANISOTROPY,d=Pn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:yd++}),this.uuid=xi(),this.name="",this.source=new qi(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new lt(0,0),this.repeat=new lt(1,1),this.center=new lt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new kt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=d,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Co).x}get height(){return this.source.getSize(Co).y}get depth(){return this.source.getSize(Co).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let n=t[e];if(n===void 0){console.warn(`THREE.Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){console.warn(`THREE.Texture.setValues(): property '${e}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==ml)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case kr:t.x=t.x-Math.floor(t.x);break;case Vn:t.x=t.x<0?0:1;break;case zr:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case kr:t.y=t.y-Math.floor(t.y);break;case Vn:t.y=t.y<0?0:1;break;case zr:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};Fe.DEFAULT_IMAGE=null;Fe.DEFAULT_MAPPING=ml;Fe.DEFAULT_ANISOTROPY=1;var pe=class i{constructor(t=0,e=0,n=0,s=1){i.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*s+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r,l=t.elements,c=l[0],d=l[4],h=l[8],f=l[1],p=l[5],_=l[9],S=l[2],m=l[6],u=l[10];if(Math.abs(d-f)<.01&&Math.abs(h-S)<.01&&Math.abs(_-m)<.01){if(Math.abs(d+f)<.1&&Math.abs(h+S)<.1&&Math.abs(_+m)<.1&&Math.abs(c+p+u-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let y=(c+1)/2,g=(p+1)/2,w=(u+1)/2,v=(d+f)/4,I=(h+S)/4,L=(_+m)/4;return y>g&&y>w?y<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(y),s=v/n,r=I/n):g>w?g<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(g),n=v/s,r=L/s):w<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(w),n=I/r,s=L/r),this.set(n,s,r,e),this}let E=Math.sqrt((m-_)*(m-_)+(h-S)*(h-S)+(f-d)*(f-d));return Math.abs(E)<.001&&(E=1),this.x=(m-_)/E,this.y=(h-S)/E,this.z=(f-d)/E,this.w=Math.acos((c+p+u-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Gt(this.x,t.x,e.x),this.y=Gt(this.y,t.y,e.y),this.z=Gt(this.z,t.z,e.z),this.w=Gt(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=Gt(this.x,t,e),this.y=Gt(this.y,t,e),this.z=Gt(this.z,t,e),this.w=Gt(this.w,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Gt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Gr=class extends fn{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:on,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new pe(0,0,t,e),this.scissorTest=!1,this.viewport=new pe(0,0,t,e);let s={width:t,height:e,depth:n.depth},r=new Fe(s);this.textures=[];let a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(t={}){let e={minFilter:on,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n,this.textures[s].isArrayTexture=this.textures[s].image.depth>1;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let s=Object.assign({},t.textures[e].image);this.textures[e].source=new qi(s)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},pn=class extends Gr{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},Ls=class extends Fe{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=je,this.minFilter=je,this.wrapR=Vn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var $r=class extends Fe{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=je,this.minFilter=je,this.wrapR=Vn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Gn=class{constructor(t=new B(1/0,1/0,1/0),e=new B(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(nn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(nn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=nn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,nn):nn.fromBufferAttribute(r,a),nn.applyMatrix4(t.matrixWorld),this.expandByPoint(nn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),pr.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),pr.copy(n.boundingBox)),pr.applyMatrix4(t.matrixWorld),this.union(pr)}let s=t.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,nn),nn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(vs),mr.subVectors(this.max,vs),Ii.subVectors(t.a,vs),Pi.subVectors(t.b,vs),Li.subVectors(t.c,vs),Un.subVectors(Pi,Ii),Nn.subVectors(Li,Pi),ni.subVectors(Ii,Li);let e=[0,-Un.z,Un.y,0,-Nn.z,Nn.y,0,-ni.z,ni.y,Un.z,0,-Un.x,Nn.z,0,-Nn.x,ni.z,0,-ni.x,-Un.y,Un.x,0,-Nn.y,Nn.x,0,-ni.y,ni.x,0];return!Ro(e,Ii,Pi,Li,mr)||(e=[1,0,0,0,1,0,0,0,1],!Ro(e,Ii,Pi,Li,mr))?!1:(gr.crossVectors(Un,Nn),e=[gr.x,gr.y,gr.z],Ro(e,Ii,Pi,Li,mr))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,nn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(nn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(vn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),vn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),vn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),vn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),vn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),vn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),vn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),vn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(vn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},vn=[new B,new B,new B,new B,new B,new B,new B,new B],nn=new B,pr=new Gn,Ii=new B,Pi=new B,Li=new B,Un=new B,Nn=new B,ni=new B,vs=new B,mr=new B,gr=new B,ii=new B;function Ro(i,t,e,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){ii.fromArray(i,r);let o=s.x*Math.abs(ii.x)+s.y*Math.abs(ii.y)+s.z*Math.abs(ii.z),l=t.dot(ii),c=e.dot(ii),d=n.dot(ii);if(Math.max(-Math.max(l,c,d),Math.min(l,c,d))>o)return!1}return!0}var xd=new Gn,Ms=new B,Io=new B,Yi=class{constructor(t=new B,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):xd.setFromPoints(t).getCenter(n);let s=0;for(let r=0,a=t.length;r<a;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Ms.subVectors(t,this.center);let e=Ms.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(Ms,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Io.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Ms.copy(t.center).add(Io)),this.expandByPoint(Ms.copy(t.center).sub(Io))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},Mn=new B,Po=new B,_r=new B,Fn=new B,Lo=new B,yr=new B,Do=new B,di=class{constructor(t=new B,e=new B(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Mn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=Mn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Mn.copy(this.origin).addScaledVector(this.direction,e),Mn.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){Po.copy(t).add(e).multiplyScalar(.5),_r.copy(e).sub(t).normalize(),Fn.copy(this.origin).sub(Po);let r=t.distanceTo(e)*.5,a=-this.direction.dot(_r),o=Fn.dot(this.direction),l=-Fn.dot(_r),c=Fn.lengthSq(),d=Math.abs(1-a*a),h,f,p,_;if(d>0)if(h=a*l-o,f=a*o-l,_=r*d,h>=0)if(f>=-_)if(f<=_){let S=1/d;h*=S,f*=S,p=h*(h+a*f+2*o)+f*(a*h+f+2*l)+c}else f=r,h=Math.max(0,-(a*f+o)),p=-h*h+f*(f+2*l)+c;else f=-r,h=Math.max(0,-(a*f+o)),p=-h*h+f*(f+2*l)+c;else f<=-_?(h=Math.max(0,-(-a*r+o)),f=h>0?-r:Math.min(Math.max(-r,-l),r),p=-h*h+f*(f+2*l)+c):f<=_?(h=0,f=Math.min(Math.max(-r,-l),r),p=f*(f+2*l)+c):(h=Math.max(0,-(a*r+o)),f=h>0?r:Math.min(Math.max(-r,-l),r),p=-h*h+f*(f+2*l)+c);else f=a>0?-r:r,h=Math.max(0,-(a*f+o)),p=-h*h+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,h),s&&s.copy(Po).addScaledVector(_r,f),p}intersectSphere(t,e){Mn.subVectors(t.center,this.origin);let n=Mn.dot(this.direction),s=Mn.dot(Mn)-n*n,r=t.radius*t.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,a,o,l,c=1/this.direction.x,d=1/this.direction.y,h=1/this.direction.z,f=this.origin;return c>=0?(n=(t.min.x-f.x)*c,s=(t.max.x-f.x)*c):(n=(t.max.x-f.x)*c,s=(t.min.x-f.x)*c),d>=0?(r=(t.min.y-f.y)*d,a=(t.max.y-f.y)*d):(r=(t.max.y-f.y)*d,a=(t.min.y-f.y)*d),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),h>=0?(o=(t.min.z-f.z)*h,l=(t.max.z-f.z)*h):(o=(t.max.z-f.z)*h,l=(t.min.z-f.z)*h),n>l||o>s)||((o>n||n!==n)&&(n=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,Mn)!==null}intersectTriangle(t,e,n,s,r){Lo.subVectors(e,t),yr.subVectors(n,t),Do.crossVectors(Lo,yr);let a=this.direction.dot(Do),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Fn.subVectors(this.origin,t);let l=o*this.direction.dot(yr.crossVectors(Fn,yr));if(l<0)return null;let c=o*this.direction.dot(Lo.cross(Fn));if(c<0||l+c>a)return null;let d=-o*Fn.dot(Do);return d<0?null:this.at(d/a,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},le=class i{constructor(t,e,n,s,r,a,o,l,c,d,h,f,p,_,S,m){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,l,c,d,h,f,p,_,S,m)}set(t,e,n,s,r,a,o,l,c,d,h,f,p,_,S,m){let u=this.elements;return u[0]=t,u[4]=e,u[8]=n,u[12]=s,u[1]=r,u[5]=a,u[9]=o,u[13]=l,u[2]=c,u[6]=d,u[10]=h,u[14]=f,u[3]=p,u[7]=_,u[11]=S,u[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){let e=this.elements,n=t.elements,s=1/Di.setFromMatrixColumn(t,0).length(),r=1/Di.setFromMatrixColumn(t,1).length(),a=1/Di.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,s=t.y,r=t.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(s),c=Math.sin(s),d=Math.cos(r),h=Math.sin(r);if(t.order==="XYZ"){let f=a*d,p=a*h,_=o*d,S=o*h;e[0]=l*d,e[4]=-l*h,e[8]=c,e[1]=p+_*c,e[5]=f-S*c,e[9]=-o*l,e[2]=S-f*c,e[6]=_+p*c,e[10]=a*l}else if(t.order==="YXZ"){let f=l*d,p=l*h,_=c*d,S=c*h;e[0]=f+S*o,e[4]=_*o-p,e[8]=a*c,e[1]=a*h,e[5]=a*d,e[9]=-o,e[2]=p*o-_,e[6]=S+f*o,e[10]=a*l}else if(t.order==="ZXY"){let f=l*d,p=l*h,_=c*d,S=c*h;e[0]=f-S*o,e[4]=-a*h,e[8]=_+p*o,e[1]=p+_*o,e[5]=a*d,e[9]=S-f*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){let f=a*d,p=a*h,_=o*d,S=o*h;e[0]=l*d,e[4]=_*c-p,e[8]=f*c+S,e[1]=l*h,e[5]=S*c+f,e[9]=p*c-_,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){let f=a*l,p=a*c,_=o*l,S=o*c;e[0]=l*d,e[4]=S-f*h,e[8]=_*h+p,e[1]=h,e[5]=a*d,e[9]=-o*d,e[2]=-c*d,e[6]=p*h+_,e[10]=f-S*h}else if(t.order==="XZY"){let f=a*l,p=a*c,_=o*l,S=o*c;e[0]=l*d,e[4]=-h,e[8]=c*d,e[1]=f*h+S,e[5]=a*d,e[9]=p*h-_,e[2]=_*h-p,e[6]=o*d,e[10]=S*h+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(vd,t,Md)}lookAt(t,e,n){let s=this.elements;return Ve.subVectors(t,e),Ve.lengthSq()===0&&(Ve.z=1),Ve.normalize(),On.crossVectors(n,Ve),On.lengthSq()===0&&(Math.abs(n.z)===1?Ve.x+=1e-4:Ve.z+=1e-4,Ve.normalize(),On.crossVectors(n,Ve)),On.normalize(),xr.crossVectors(Ve,On),s[0]=On.x,s[4]=xr.x,s[8]=Ve.x,s[1]=On.y,s[5]=xr.y,s[9]=Ve.y,s[2]=On.z,s[6]=xr.z,s[10]=Ve.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],d=n[1],h=n[5],f=n[9],p=n[13],_=n[2],S=n[6],m=n[10],u=n[14],E=n[3],y=n[7],g=n[11],w=n[15],v=s[0],I=s[4],L=s[8],M=s[12],x=s[1],R=s[5],T=s[9],C=s[13],U=s[2],N=s[6],O=s[10],$=s[14],V=s[3],tt=s[7],ht=s[11],gt=s[15];return r[0]=a*v+o*x+l*U+c*V,r[4]=a*I+o*R+l*N+c*tt,r[8]=a*L+o*T+l*O+c*ht,r[12]=a*M+o*C+l*$+c*gt,r[1]=d*v+h*x+f*U+p*V,r[5]=d*I+h*R+f*N+p*tt,r[9]=d*L+h*T+f*O+p*ht,r[13]=d*M+h*C+f*$+p*gt,r[2]=_*v+S*x+m*U+u*V,r[6]=_*I+S*R+m*N+u*tt,r[10]=_*L+S*T+m*O+u*ht,r[14]=_*M+S*C+m*$+u*gt,r[3]=E*v+y*x+g*U+w*V,r[7]=E*I+y*R+g*N+w*tt,r[11]=E*L+y*T+g*O+w*ht,r[15]=E*M+y*C+g*$+w*gt,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],a=t[1],o=t[5],l=t[9],c=t[13],d=t[2],h=t[6],f=t[10],p=t[14],_=t[3],S=t[7],m=t[11],u=t[15];return _*(+r*l*h-s*c*h-r*o*f+n*c*f+s*o*p-n*l*p)+S*(+e*l*p-e*c*f+r*a*f-s*a*p+s*c*d-r*l*d)+m*(+e*c*h-e*o*p-r*a*h+n*a*p+r*o*d-n*c*d)+u*(-s*o*d-e*l*h+e*o*f+s*a*h-n*a*f+n*l*d)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],d=t[8],h=t[9],f=t[10],p=t[11],_=t[12],S=t[13],m=t[14],u=t[15],E=h*m*c-S*f*c+S*l*p-o*m*p-h*l*u+o*f*u,y=_*f*c-d*m*c-_*l*p+a*m*p+d*l*u-a*f*u,g=d*S*c-_*h*c+_*o*p-a*S*p-d*o*u+a*h*u,w=_*h*l-d*S*l-_*o*f+a*S*f+d*o*m-a*h*m,v=e*E+n*y+s*g+r*w;if(v===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let I=1/v;return t[0]=E*I,t[1]=(S*f*r-h*m*r-S*s*p+n*m*p+h*s*u-n*f*u)*I,t[2]=(o*m*r-S*l*r+S*s*c-n*m*c-o*s*u+n*l*u)*I,t[3]=(h*l*r-o*f*r-h*s*c+n*f*c+o*s*p-n*l*p)*I,t[4]=y*I,t[5]=(d*m*r-_*f*r+_*s*p-e*m*p-d*s*u+e*f*u)*I,t[6]=(_*l*r-a*m*r-_*s*c+e*m*c+a*s*u-e*l*u)*I,t[7]=(a*f*r-d*l*r+d*s*c-e*f*c-a*s*p+e*l*p)*I,t[8]=g*I,t[9]=(_*h*r-d*S*r-_*n*p+e*S*p+d*n*u-e*h*u)*I,t[10]=(a*S*r-_*o*r+_*n*c-e*S*c-a*n*u+e*o*u)*I,t[11]=(d*o*r-a*h*r-d*n*c+e*h*c+a*n*p-e*o*p)*I,t[12]=w*I,t[13]=(d*S*s-_*h*s+_*n*f-e*S*f-d*n*m+e*h*m)*I,t[14]=(_*o*s-a*S*s-_*n*l+e*S*l+a*n*m-e*o*m)*I,t[15]=(a*h*s-d*o*s+d*n*l-e*h*l-a*n*f+e*o*f)*I,this}scale(t){let e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),s=Math.sin(e),r=1-n,a=t.x,o=t.y,l=t.z,c=r*a,d=r*o;return this.set(c*a+n,c*o-s*l,c*l+s*o,0,c*o+s*l,d*o+n,d*l-s*a,0,c*l-s*o,d*l+s*a,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,a){return this.set(1,n,r,0,t,1,a,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){let s=this.elements,r=e._x,a=e._y,o=e._z,l=e._w,c=r+r,d=a+a,h=o+o,f=r*c,p=r*d,_=r*h,S=a*d,m=a*h,u=o*h,E=l*c,y=l*d,g=l*h,w=n.x,v=n.y,I=n.z;return s[0]=(1-(S+u))*w,s[1]=(p+g)*w,s[2]=(_-y)*w,s[3]=0,s[4]=(p-g)*v,s[5]=(1-(f+u))*v,s[6]=(m+E)*v,s[7]=0,s[8]=(_+y)*I,s[9]=(m-E)*I,s[10]=(1-(f+S))*I,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){let s=this.elements,r=Di.set(s[0],s[1],s[2]).length(),a=Di.set(s[4],s[5],s[6]).length(),o=Di.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],sn.copy(this);let c=1/r,d=1/a,h=1/o;return sn.elements[0]*=c,sn.elements[1]*=c,sn.elements[2]*=c,sn.elements[4]*=d,sn.elements[5]*=d,sn.elements[6]*=d,sn.elements[8]*=h,sn.elements[9]*=h,sn.elements[10]*=h,e.setFromRotationMatrix(sn),n.x=r,n.y=a,n.z=o,this}makePerspective(t,e,n,s,r,a,o=an,l=!1){let c=this.elements,d=2*r/(e-t),h=2*r/(n-s),f=(e+t)/(e-t),p=(n+s)/(n-s),_,S;if(l)_=r/(a-r),S=a*r/(a-r);else if(o===an)_=-(a+r)/(a-r),S=-2*a*r/(a-r);else if(o===Ps)_=-a/(a-r),S=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=d,c[4]=0,c[8]=f,c[12]=0,c[1]=0,c[5]=h,c[9]=p,c[13]=0,c[2]=0,c[6]=0,c[10]=_,c[14]=S,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,s,r,a,o=an,l=!1){let c=this.elements,d=2/(e-t),h=2/(n-s),f=-(e+t)/(e-t),p=-(n+s)/(n-s),_,S;if(l)_=1/(a-r),S=a/(a-r);else if(o===an)_=-2/(a-r),S=-(a+r)/(a-r);else if(o===Ps)_=-1/(a-r),S=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=d,c[4]=0,c[8]=0,c[12]=f,c[1]=0,c[5]=h,c[9]=0,c[13]=p,c[2]=0,c[6]=0,c[10]=_,c[14]=S,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}},Di=new B,sn=new le,vd=new B(0,0,0),Md=new B(1,1,1),On=new B,xr=new B,Ve=new B,Sc=new le,Ec=new Qe,ln=class i{constructor(t=0,e=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let s=t.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],d=s[9],h=s[2],f=s[6],p=s[10];switch(e){case"XYZ":this._y=Math.asin(Gt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-d,p),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Gt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(Gt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,p),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Gt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,p),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Gt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-d,c),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-Gt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-d,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Sc.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Sc,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Ec.setFromEuler(this),this.setFromQuaternion(Ec,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};ln.DEFAULT_ORDER="XYZ";var Zi=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},bd=0,wc=new B,Ui=new Qe,bn=new le,vr=new B,bs=new B,Sd=new B,Ed=new Qe,Tc=new B(1,0,0),Ac=new B(0,1,0),Cc=new B(0,0,1),Rc={type:"added"},wd={type:"removed"},Ni={type:"childadded",child:null},Uo={type:"childremoved",child:null},be=class i extends fn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:bd++}),this.uuid=xi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new B,e=new ln,n=new Qe,s=new B(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new le},normalMatrix:{value:new kt}}),this.matrix=new le,this.matrixWorld=new le,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Zi,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Ui.setFromAxisAngle(t,e),this.quaternion.multiply(Ui),this}rotateOnWorldAxis(t,e){return Ui.setFromAxisAngle(t,e),this.quaternion.premultiply(Ui),this}rotateX(t){return this.rotateOnAxis(Tc,t)}rotateY(t){return this.rotateOnAxis(Ac,t)}rotateZ(t){return this.rotateOnAxis(Cc,t)}translateOnAxis(t,e){return wc.copy(t).applyQuaternion(this.quaternion),this.position.add(wc.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Tc,t)}translateY(t){return this.translateOnAxis(Ac,t)}translateZ(t){return this.translateOnAxis(Cc,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(bn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?vr.copy(t):vr.set(t,e,n);let s=this.parent;this.updateWorldMatrix(!0,!1),bs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?bn.lookAt(bs,vr,this.up):bn.lookAt(vr,bs,this.up),this.quaternion.setFromRotationMatrix(bn),s&&(bn.extractRotation(s.matrixWorld),Ui.setFromRotationMatrix(bn),this.quaternion.premultiply(Ui.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Rc),Ni.child=t,this.dispatchEvent(Ni),Ni.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(wd),Uo.child=t,this.dispatchEvent(Uo),Uo.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),bn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),bn.multiply(t.parent.matrixWorld)),t.applyMatrix4(bn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Rc),Ni.child=t,this.dispatchEvent(Ni),Ni.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){let a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(bs,t,Sd),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(bs,Ed,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){let n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,d=l.length;c<d;c++){let h=l[c];r(t.shapes,h)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(t.materials,this.material[l]));s.material=o}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];s.animations.push(r(t.animations,l))}}if(e){let o=a(t.geometries),l=a(t.materials),c=a(t.textures),d=a(t.images),h=a(t.shapes),f=a(t.skeletons),p=a(t.animations),_=a(t.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),d.length>0&&(n.images=d),h.length>0&&(n.shapes=h),f.length>0&&(n.skeletons=f),p.length>0&&(n.animations=p),_.length>0&&(n.nodes=_)}return n.object=s,n;function a(o){let l=[];for(let c in o){let d=o[c];delete d.metadata,l.push(d)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let s=t.children[n];this.add(s.clone())}return this}};be.DEFAULT_UP=new B(0,1,0);be.DEFAULT_MATRIX_AUTO_UPDATE=!0;be.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var rn=new B,Sn=new B,No=new B,En=new B,Fi=new B,Oi=new B,Ic=new B,Fo=new B,Oo=new B,Bo=new B,ko=new pe,zo=new pe,Vo=new pe,zn=class i{constructor(t=new B,e=new B,n=new B){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),rn.subVectors(t,e),s.cross(rn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){rn.subVectors(s,e),Sn.subVectors(n,e),No.subVectors(t,e);let a=rn.dot(rn),o=rn.dot(Sn),l=rn.dot(No),c=Sn.dot(Sn),d=Sn.dot(No),h=a*c-o*o;if(h===0)return r.set(0,0,0),null;let f=1/h,p=(c*l-o*d)*f,_=(a*d-o*l)*f;return r.set(1-p-_,_,p)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,En)===null?!1:En.x>=0&&En.y>=0&&En.x+En.y<=1}static getInterpolation(t,e,n,s,r,a,o,l){return this.getBarycoord(t,e,n,s,En)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,En.x),l.addScaledVector(a,En.y),l.addScaledVector(o,En.z),l)}static getInterpolatedAttribute(t,e,n,s,r,a){return ko.setScalar(0),zo.setScalar(0),Vo.setScalar(0),ko.fromBufferAttribute(t,e),zo.fromBufferAttribute(t,n),Vo.fromBufferAttribute(t,s),a.setScalar(0),a.addScaledVector(ko,r.x),a.addScaledVector(zo,r.y),a.addScaledVector(Vo,r.z),a}static isFrontFacing(t,e,n,s){return rn.subVectors(n,e),Sn.subVectors(t,e),rn.cross(Sn).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return rn.subVectors(this.c,this.b),Sn.subVectors(this.a,this.b),rn.cross(Sn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return i.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,s=this.b,r=this.c,a,o;Fi.subVectors(s,n),Oi.subVectors(r,n),Fo.subVectors(t,n);let l=Fi.dot(Fo),c=Oi.dot(Fo);if(l<=0&&c<=0)return e.copy(n);Oo.subVectors(t,s);let d=Fi.dot(Oo),h=Oi.dot(Oo);if(d>=0&&h<=d)return e.copy(s);let f=l*h-d*c;if(f<=0&&l>=0&&d<=0)return a=l/(l-d),e.copy(n).addScaledVector(Fi,a);Bo.subVectors(t,r);let p=Fi.dot(Bo),_=Oi.dot(Bo);if(_>=0&&p<=_)return e.copy(r);let S=p*c-l*_;if(S<=0&&c>=0&&_<=0)return o=c/(c-_),e.copy(n).addScaledVector(Oi,o);let m=d*_-p*h;if(m<=0&&h-d>=0&&p-_>=0)return Ic.subVectors(r,s),o=(h-d)/(h-d+(p-_)),e.copy(s).addScaledVector(Ic,o);let u=1/(m+S+f);return a=S*u,o=f*u,e.copy(n).addScaledVector(Fi,a).addScaledVector(Oi,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},Ph={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Bn={h:0,s:0,l:0},Mr={h:0,s:0,l:0};function Ho(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}var $t=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Se){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,jt.colorSpaceToWorking(this,e),this}setRGB(t,e,n,s=jt.workingColorSpace){return this.r=t,this.g=e,this.b=n,jt.colorSpaceToWorking(this,s),this}setHSL(t,e,n,s=jt.workingColorSpace){if(t=Al(t,1),e=Gt(e,0,1),n=Gt(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=Ho(a,r,t+1/3),this.g=Ho(a,r,t),this.b=Ho(a,r,t-1/3)}return jt.colorSpaceToWorking(this,s),this}setStyle(t,e=Se){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Se){let n=Ph[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Tn(t.r),this.g=Tn(t.g),this.b=Tn(t.b),this}copyLinearToSRGB(t){return this.r=Gi(t.r),this.g=Gi(t.g),this.b=Gi(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Se){return jt.workingToColorSpace(Ae.copy(this),t),Math.round(Gt(Ae.r*255,0,255))*65536+Math.round(Gt(Ae.g*255,0,255))*256+Math.round(Gt(Ae.b*255,0,255))}getHexString(t=Se){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=jt.workingColorSpace){jt.workingToColorSpace(Ae.copy(this),e);let n=Ae.r,s=Ae.g,r=Ae.b,a=Math.max(n,s,r),o=Math.min(n,s,r),l,c,d=(o+a)/2;if(o===a)l=0,c=0;else{let h=a-o;switch(c=d<=.5?h/(a+o):h/(2-a-o),a){case n:l=(s-r)/h+(s<r?6:0);break;case s:l=(r-n)/h+2;break;case r:l=(n-s)/h+4;break}l/=6}return t.h=l,t.s=c,t.l=d,t}getRGB(t,e=jt.workingColorSpace){return jt.workingToColorSpace(Ae.copy(this),e),t.r=Ae.r,t.g=Ae.g,t.b=Ae.b,t}getStyle(t=Se){jt.workingToColorSpace(Ae.copy(this),t);let e=Ae.r,n=Ae.g,s=Ae.b;return t!==Se?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(Bn),this.setHSL(Bn.h+t,Bn.s+e,Bn.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Bn),t.getHSL(Mr);let n=Ts(Bn.h,Mr.h,e),s=Ts(Bn.s,Mr.s,e),r=Ts(Bn.l,Mr.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Ae=new $t;$t.NAMES=Ph;var Td=0,$n=class extends fn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Td++}),this.uuid=xi(),this.name="",this.type="Material",this.blending=li,this.side=An,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Or,this.blendDst=Br,this.blendEquation=Hn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new $t(0,0,0),this.blendAlpha=0,this.depthFunc=ci,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Qo,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ai,this.stencilZFail=ai,this.stencilZPass=ai,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==li&&(n.blending=this.blending),this.side!==An&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Or&&(n.blendSrc=this.blendSrc),this.blendDst!==Br&&(n.blendDst=this.blendDst),this.blendEquation!==Hn&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==ci&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Qo&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ai&&(n.stencilFail=this.stencilFail),this.stencilZFail!==ai&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==ai&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let a=[];for(let o in r){let l=r[o];delete l.metadata,a.push(l)}return a}if(e){let r=s(t.textures),a=s(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}},Ds=class extends $n{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new $t(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ln,this.combine=pl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};var _e=new B,br=new lt,Ad=0,Ge=class{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Ad++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=tl,this.updateRanges=[],this.gpuType=gn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)br.fromBufferAttribute(this,e),br.applyMatrix3(t),this.setXY(e,br.x,br.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)_e.fromBufferAttribute(this,e),_e.applyMatrix3(t),this.setXYZ(e,_e.x,_e.y,_e.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)_e.fromBufferAttribute(this,e),_e.applyMatrix4(t),this.setXYZ(e,_e.x,_e.y,_e.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)_e.fromBufferAttribute(this,e),_e.applyNormalMatrix(t),this.setXYZ(e,_e.x,_e.y,_e.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)_e.fromBufferAttribute(this,e),_e.transformDirection(t),this.setXYZ(e,_e.x,_e.y,_e.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Hi(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Le(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Hi(e,this.array)),e}setX(t,e){return this.normalized&&(e=Le(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Hi(e,this.array)),e}setY(t,e){return this.normalized&&(e=Le(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Hi(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Le(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Hi(e,this.array)),e}setW(t,e){return this.normalized&&(e=Le(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Le(e,this.array),n=Le(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=Le(e,this.array),n=Le(n,this.array),s=Le(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=Le(e,this.array),n=Le(n,this.array),s=Le(s,this.array),r=Le(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==tl&&(t.usage=this.usage),t}};var Us=class extends Ge{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var Ns=class extends Ge{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var Ke=class extends Ge{constructor(t,e,n){super(new Float32Array(t),e,n)}},Cd=0,Ze=new le,Go=new be,Bi=new B,He=new Gn,Ss=new Gn,Me=new B,Cn=class i extends fn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Cd++}),this.uuid=xi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Cl(t)?Ns:Us)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new kt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Ze.makeRotationFromQuaternion(t),this.applyMatrix4(Ze),this}rotateX(t){return Ze.makeRotationX(t),this.applyMatrix4(Ze),this}rotateY(t){return Ze.makeRotationY(t),this.applyMatrix4(Ze),this}rotateZ(t){return Ze.makeRotationZ(t),this.applyMatrix4(Ze),this}translate(t,e,n){return Ze.makeTranslation(t,e,n),this.applyMatrix4(Ze),this}scale(t,e,n){return Ze.makeScale(t,e,n),this.applyMatrix4(Ze),this}lookAt(t){return Go.lookAt(t),Go.updateMatrix(),this.applyMatrix4(Go.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Bi).negate(),this.translate(Bi.x,Bi.y,Bi.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let s=0,r=t.length;s<r;s++){let a=t[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Ke(n,3))}else{let n=Math.min(t.length,e.count);for(let s=0;s<n;s++){let r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Gn);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new B(-1/0,-1/0,-1/0),new B(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){let r=e[n];He.setFromBufferAttribute(r),this.morphTargetsRelative?(Me.addVectors(this.boundingBox.min,He.min),this.boundingBox.expandByPoint(Me),Me.addVectors(this.boundingBox.max,He.max),this.boundingBox.expandByPoint(Me)):(this.boundingBox.expandByPoint(He.min),this.boundingBox.expandByPoint(He.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Yi);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new B,1/0);return}if(t){let n=this.boundingSphere.center;if(He.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){let o=e[r];Ss.setFromBufferAttribute(o),this.morphTargetsRelative?(Me.addVectors(He.min,Ss.min),He.expandByPoint(Me),Me.addVectors(He.max,Ss.max),He.expandByPoint(Me)):(He.expandByPoint(Ss.min),He.expandByPoint(Ss.max))}He.getCenter(n);let s=0;for(let r=0,a=t.count;r<a;r++)Me.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(Me));if(e)for(let r=0,a=e.length;r<a;r++){let o=e[r],l=this.morphTargetsRelative;for(let c=0,d=o.count;c<d;c++)Me.fromBufferAttribute(o,c),l&&(Bi.fromBufferAttribute(t,c),Me.add(Bi)),s=Math.max(s,n.distanceToSquared(Me))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ge(new Float32Array(4*n.count),4));let a=this.getAttribute("tangent"),o=[],l=[];for(let L=0;L<n.count;L++)o[L]=new B,l[L]=new B;let c=new B,d=new B,h=new B,f=new lt,p=new lt,_=new lt,S=new B,m=new B;function u(L,M,x){c.fromBufferAttribute(n,L),d.fromBufferAttribute(n,M),h.fromBufferAttribute(n,x),f.fromBufferAttribute(r,L),p.fromBufferAttribute(r,M),_.fromBufferAttribute(r,x),d.sub(c),h.sub(c),p.sub(f),_.sub(f);let R=1/(p.x*_.y-_.x*p.y);isFinite(R)&&(S.copy(d).multiplyScalar(_.y).addScaledVector(h,-p.y).multiplyScalar(R),m.copy(h).multiplyScalar(p.x).addScaledVector(d,-_.x).multiplyScalar(R),o[L].add(S),o[M].add(S),o[x].add(S),l[L].add(m),l[M].add(m),l[x].add(m))}let E=this.groups;E.length===0&&(E=[{start:0,count:t.count}]);for(let L=0,M=E.length;L<M;++L){let x=E[L],R=x.start,T=x.count;for(let C=R,U=R+T;C<U;C+=3)u(t.getX(C+0),t.getX(C+1),t.getX(C+2))}let y=new B,g=new B,w=new B,v=new B;function I(L){w.fromBufferAttribute(s,L),v.copy(w);let M=o[L];y.copy(M),y.sub(w.multiplyScalar(w.dot(M))).normalize(),g.crossVectors(v,M);let R=g.dot(l[L])<0?-1:1;a.setXYZW(L,y.x,y.y,y.z,R)}for(let L=0,M=E.length;L<M;++L){let x=E[L],R=x.start,T=x.count;for(let C=R,U=R+T;C<U;C+=3)I(t.getX(C+0)),I(t.getX(C+1)),I(t.getX(C+2))}}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Ge(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let f=0,p=n.count;f<p;f++)n.setXYZ(f,0,0,0);let s=new B,r=new B,a=new B,o=new B,l=new B,c=new B,d=new B,h=new B;if(t)for(let f=0,p=t.count;f<p;f+=3){let _=t.getX(f+0),S=t.getX(f+1),m=t.getX(f+2);s.fromBufferAttribute(e,_),r.fromBufferAttribute(e,S),a.fromBufferAttribute(e,m),d.subVectors(a,r),h.subVectors(s,r),d.cross(h),o.fromBufferAttribute(n,_),l.fromBufferAttribute(n,S),c.fromBufferAttribute(n,m),o.add(d),l.add(d),c.add(d),n.setXYZ(_,o.x,o.y,o.z),n.setXYZ(S,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let f=0,p=e.count;f<p;f+=3)s.fromBufferAttribute(e,f+0),r.fromBufferAttribute(e,f+1),a.fromBufferAttribute(e,f+2),d.subVectors(a,r),h.subVectors(s,r),d.cross(h),n.setXYZ(f+0,d.x,d.y,d.z),n.setXYZ(f+1,d.x,d.y,d.z),n.setXYZ(f+2,d.x,d.y,d.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Me.fromBufferAttribute(t,e),Me.normalize(),t.setXYZ(e,Me.x,Me.y,Me.z)}toNonIndexed(){function t(o,l){let c=o.array,d=o.itemSize,h=o.normalized,f=new c.constructor(l.length*d),p=0,_=0;for(let S=0,m=l.length;S<m;S++){o.isInterleavedBufferAttribute?p=l[S]*o.data.stride+o.offset:p=l[S]*d;for(let u=0;u<d;u++)f[_++]=c[p++]}return new Ge(f,d,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,s=this.attributes;for(let o in s){let l=s[o],c=t(l,n);e.setAttribute(o,c)}let r=this.morphAttributes;for(let o in r){let l=[],c=r[o];for(let d=0,h=c.length;d<h;d++){let f=c[d],p=t(f,n);l.push(p)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let l in n){let c=n[l];t.data.attributes[l]=c.toJSON(t.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],d=[];for(let h=0,f=c.length;h<f;h++){let p=c[h];d.push(p.toJSON(t.data))}d.length>0&&(s[l]=d,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(t.data.boundingSphere=o.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone());let s=t.attributes;for(let c in s){let d=s[c];this.setAttribute(c,d.clone(e))}let r=t.morphAttributes;for(let c in r){let d=[],h=r[c];for(let f=0,p=h.length;f<p;f++)d.push(h[f].clone(e));this.morphAttributes[c]=d}this.morphTargetsRelative=t.morphTargetsRelative;let a=t.groups;for(let c=0,d=a.length;c<d;c++){let h=a[c];this.addGroup(h.start,h.count,h.materialIndex)}let o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},Pc=new le,si=new di,Sr=new Yi,Lc=new B,Er=new B,wr=new B,Tr=new B,$o=new B,Ar=new B,Dc=new B,Cr=new B,Ce=class extends be{constructor(t=new Cn,e=new Ds){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(s,t);let o=this.morphTargetInfluences;if(r&&o){Ar.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let d=o[l],h=r[l];d!==0&&($o.fromBufferAttribute(h,t),a?Ar.addScaledVector($o,d):Ar.addScaledVector($o.sub(e),d))}e.add(Ar)}return e}raycast(t,e){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Sr.copy(n.boundingSphere),Sr.applyMatrix4(r),si.copy(t.ray).recast(t.near),!(Sr.containsPoint(si.origin)===!1&&(si.intersectSphere(Sr,Lc)===null||si.origin.distanceToSquared(Lc)>(t.far-t.near)**2))&&(Pc.copy(r).invert(),si.copy(t.ray).applyMatrix4(Pc),!(n.boundingBox!==null&&si.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,si)))}_computeIntersections(t,e,n){let s,r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,d=r.attributes.uv1,h=r.attributes.normal,f=r.groups,p=r.drawRange;if(o!==null)if(Array.isArray(a))for(let _=0,S=f.length;_<S;_++){let m=f[_],u=a[m.materialIndex],E=Math.max(m.start,p.start),y=Math.min(o.count,Math.min(m.start+m.count,p.start+p.count));for(let g=E,w=y;g<w;g+=3){let v=o.getX(g),I=o.getX(g+1),L=o.getX(g+2);s=Rr(this,u,t,n,c,d,h,v,I,L),s&&(s.faceIndex=Math.floor(g/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let _=Math.max(0,p.start),S=Math.min(o.count,p.start+p.count);for(let m=_,u=S;m<u;m+=3){let E=o.getX(m),y=o.getX(m+1),g=o.getX(m+2);s=Rr(this,a,t,n,c,d,h,E,y,g),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let _=0,S=f.length;_<S;_++){let m=f[_],u=a[m.materialIndex],E=Math.max(m.start,p.start),y=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let g=E,w=y;g<w;g+=3){let v=g,I=g+1,L=g+2;s=Rr(this,u,t,n,c,d,h,v,I,L),s&&(s.faceIndex=Math.floor(g/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let _=Math.max(0,p.start),S=Math.min(l.count,p.start+p.count);for(let m=_,u=S;m<u;m+=3){let E=m,y=m+1,g=m+2;s=Rr(this,a,t,n,c,d,h,E,y,g),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}};function Rd(i,t,e,n,s,r,a,o){let l;if(t.side===De?l=n.intersectTriangle(a,r,s,!0,o):l=n.intersectTriangle(s,r,a,t.side===An,o),l===null)return null;Cr.copy(o),Cr.applyMatrix4(i.matrixWorld);let c=e.ray.origin.distanceTo(Cr);return c<e.near||c>e.far?null:{distance:c,point:Cr.clone(),object:i}}function Rr(i,t,e,n,s,r,a,o,l,c){i.getVertexPosition(o,Er),i.getVertexPosition(l,wr),i.getVertexPosition(c,Tr);let d=Rd(i,t,e,n,Er,wr,Tr,Dc);if(d){let h=new B;zn.getBarycoord(Dc,Er,wr,Tr,h),s&&(d.uv=zn.getInterpolatedAttribute(s,o,l,c,h,new lt)),r&&(d.uv1=zn.getInterpolatedAttribute(r,o,l,c,h,new lt)),a&&(d.normal=zn.getInterpolatedAttribute(a,o,l,c,h,new B),d.normal.dot(n.direction)>0&&d.normal.multiplyScalar(-1));let f={a:o,b:l,c,normal:new B,materialIndex:0};zn.getNormal(Er,wr,Tr,f.normal),d.face=f,d.barycoord=h}return d}var Ji=class i extends Cn{constructor(t=1,e=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let l=[],c=[],d=[],h=[],f=0,p=0;_("z","y","x",-1,-1,n,e,t,a,r,0),_("z","y","x",1,-1,n,e,-t,a,r,1),_("x","z","y",1,1,t,n,e,s,a,2),_("x","z","y",1,-1,t,n,-e,s,a,3),_("x","y","z",1,-1,t,e,n,s,r,4),_("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new Ke(c,3)),this.setAttribute("normal",new Ke(d,3)),this.setAttribute("uv",new Ke(h,2));function _(S,m,u,E,y,g,w,v,I,L,M){let x=g/I,R=w/L,T=g/2,C=w/2,U=v/2,N=I+1,O=L+1,$=0,V=0,tt=new B;for(let ht=0;ht<O;ht++){let gt=ht*R-C;for(let Lt=0;Lt<N;Lt++){let Xt=Lt*x-T;tt[S]=Xt*E,tt[m]=gt*y,tt[u]=U,c.push(tt.x,tt.y,tt.z),tt[S]=0,tt[m]=0,tt[u]=v>0?1:-1,d.push(tt.x,tt.y,tt.z),h.push(Lt/I),h.push(1-ht/L),$+=1}}for(let ht=0;ht<L;ht++)for(let gt=0;gt<I;gt++){let Lt=f+gt+N*ht,Xt=f+gt+N*(ht+1),Zt=f+(gt+1)+N*(ht+1),vt=f+(gt+1)+N*ht;l.push(Lt,Xt,vt),l.push(Xt,Zt,vt),V+=6}o.addGroup(p,V,M),p+=V,f+=$}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function vi(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function Re(i){let t={};for(let e=0;e<i.length;e++){let n=vi(i[e]);for(let s in n)t[s]=n[s]}return t}function Id(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function Rl(i){let t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:jt.workingColorSpace}var Lh={clone:vi,merge:Re},Pd=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Ld=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,cn=class extends $n{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Pd,this.fragmentShader=Ld,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=vi(t.uniforms),this.uniformsGroups=Id(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?e.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[s]={type:"m4",value:a.toArray()}:e.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}},Fs=class extends be{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new le,this.projectionMatrix=new le,this.projectionMatrixInverse=new le,this.coordinateSystem=an,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},kn=new B,Uc=new lt,Nc=new lt,Ee=class extends Fs{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=ui*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(ws*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return ui*2*Math.atan(Math.tan(ws*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){kn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(kn.x,kn.y).multiplyScalar(-t/kn.z),kn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(kn.x,kn.y).multiplyScalar(-t/kn.z)}getViewSize(t,e){return this.getViewBounds(t,Uc,Nc),e.subVectors(Nc,Uc)}setViewOffset(t,e,n,s,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(ws*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,e-=a.offsetY*n/c,s*=a.width/l,n*=a.height/c}let o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},ki=-90,zi=1,Wr=class extends be{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Ee(ki,zi,t,e);s.layers=this.layers,this.add(s);let r=new Ee(ki,zi,t,e);r.layers=this.layers,this.add(r);let a=new Ee(ki,zi,t,e);a.layers=this.layers,this.add(a);let o=new Ee(ki,zi,t,e);o.layers=this.layers,this.add(o);let l=new Ee(ki,zi,t,e);l.layers=this.layers,this.add(l);let c=new Ee(ki,zi,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,s,r,a,o,l]=e;for(let c of e)this.remove(c);if(t===an)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Ps)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,l,c,d]=this.children,h=t.getRenderTarget(),f=t.getActiveCubeFace(),p=t.getActiveMipmapLevel(),_=t.xr.enabled;t.xr.enabled=!1;let S=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,a),t.setRenderTarget(n,2,s),t.render(e,o),t.setRenderTarget(n,3,s),t.render(e,l),t.setRenderTarget(n,4,s),t.render(e,c),n.texture.generateMipmaps=S,t.setRenderTarget(n,5,s),t.render(e,d),t.setRenderTarget(h,f,p),t.xr.enabled=_,n.texture.needsPMREMUpdate=!0}},Os=class extends Fe{constructor(t=[],e=_i,n,s,r,a,o,l,c,d){super(t,e,n,s,r,a,o,l,c,d),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},Xr=class extends pn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new Os(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Ji(5,5,5),r=new cn({name:"CubemapFromEquirect",uniforms:vi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:De,blending:Rn});r.uniforms.tEquirect.value=e;let a=new Ce(s,r),o=e.minFilter;return e.minFilter===Jn&&(e.minFilter=on),new Wr(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e=!0,n=!0,s=!0){let r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,s);t.setRenderTarget(r)}},wn=class extends be{constructor(){super(),this.isGroup=!0,this.type="Group"}},Dd={type:"move"},Ki=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new wn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new wn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new B,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new B),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new wn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new B,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new B),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(let S of t.hand.values()){let m=e.getJointPose(S,n),u=this._getHandJoint(c,S);m!==null&&(u.matrix.fromArray(m.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,u.jointRadius=m.radius),u.visible=m!==null}let d=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],f=d.position.distanceTo(h.position),p=.02,_=.005;c.inputState.pinching&&f>p+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&f<=p-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Dd)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new wn;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},Bs=class i{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new $t(t),this.density=e}clone(){return new i(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}};var ks=class extends be{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ln,this.environmentIntensity=1,this.environmentRotation=new ln,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}};var Wo=new B,Ud=new B,Nd=new kt,Je=class{constructor(t=new B(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let s=Wo.subVectors(n,e).cross(Ud.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){let n=t.delta(Wo),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||Nd.getNormalMatrix(t),s=this.coplanarPoint(Wo).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},ri=new Yi,Fd=new lt(.5,.5),Ir=new B,ji=class{constructor(t=new Je,e=new Je,n=new Je,s=new Je,r=new Je,a=new Je){this.planes=[t,e,n,s,r,a]}set(t,e,n,s,r,a){let o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=an,n=!1){let s=this.planes,r=t.elements,a=r[0],o=r[1],l=r[2],c=r[3],d=r[4],h=r[5],f=r[6],p=r[7],_=r[8],S=r[9],m=r[10],u=r[11],E=r[12],y=r[13],g=r[14],w=r[15];if(s[0].setComponents(c-a,p-d,u-_,w-E).normalize(),s[1].setComponents(c+a,p+d,u+_,w+E).normalize(),s[2].setComponents(c+o,p+h,u+S,w+y).normalize(),s[3].setComponents(c-o,p-h,u-S,w-y).normalize(),n)s[4].setComponents(l,f,m,g).normalize(),s[5].setComponents(c-l,p-f,u-m,w-g).normalize();else if(s[4].setComponents(c-l,p-f,u-m,w-g).normalize(),e===an)s[5].setComponents(c+l,p+f,u+m,w+g).normalize();else if(e===Ps)s[5].setComponents(l,f,m,g).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),ri.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),ri.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(ri)}intersectsSprite(t){ri.center.set(0,0,0);let e=Fd.distanceTo(t.center);return ri.radius=.7071067811865476+e,ri.applyMatrix4(t.matrixWorld),this.intersectsSphere(ri)}intersectsSphere(t){let e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let s=e[n];if(Ir.x=s.normal.x>0?t.max.x:t.min.x,Ir.y=s.normal.y>0?t.max.y:t.min.y,Ir.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Ir)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var zs=class extends Fe{constructor(t,e,n=Kn,s,r,a,o=je,l=je,c,d=$i,h=1){if(d!==$i&&d!==cs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let f={width:t,height:e,depth:h};super(f,s,r,a,o,l,d,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new qi(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}},Vs=class extends Fe{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}};var $e=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){console.warn("THREE.Curve: .getPoint() not implemented.")}getPointAt(t,e){let n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],n,s=this.getPoint(0),r=0;e.push(0);for(let a=1;a<=t;a++)n=this.getPoint(a/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){let n=this.getLengths(),s=0,r=n.length,a;e?a=e:a=t*n[r-1];let o=0,l=r-1,c;for(;o<=l;)if(s=Math.floor(o+(l-o)/2),c=n[s]-a,c<0)o=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===a)return s/(r-1);let d=n[s],f=n[s+1]-d,p=(a-d)/f;return(s+p)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);let a=this.getPoint(s),o=this.getPoint(r),l=e||(a.isVector2?new lt:new B);return l.copy(o).sub(a).normalize(),l}getTangentAt(t,e){let n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e=!1){let n=new B,s=[],r=[],a=[],o=new B,l=new le;for(let p=0;p<=t;p++){let _=p/t;s[p]=this.getTangentAt(_,new B)}r[0]=new B,a[0]=new B;let c=Number.MAX_VALUE,d=Math.abs(s[0].x),h=Math.abs(s[0].y),f=Math.abs(s[0].z);d<=c&&(c=d,n.set(1,0,0)),h<=c&&(c=h,n.set(0,1,0)),f<=c&&n.set(0,0,1),o.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let p=1;p<=t;p++){if(r[p]=r[p-1].clone(),a[p]=a[p-1].clone(),o.crossVectors(s[p-1],s[p]),o.length()>Number.EPSILON){o.normalize();let _=Math.acos(Gt(s[p-1].dot(s[p]),-1,1));r[p].applyMatrix4(l.makeRotationAxis(o,_))}a[p].crossVectors(s[p],r[p])}if(e===!0){let p=Math.acos(Gt(r[0].dot(r[t]),-1,1));p/=t,s[0].dot(o.crossVectors(r[0],r[t]))>0&&(p=-p);for(let _=1;_<=t;_++)r[_].applyMatrix4(l.makeRotationAxis(s[_],p*_)),a[_].crossVectors(s[_],r[_])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}},Qi=class extends $e{constructor(t=0,e=0,n=1,s=1,r=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(t,e=new lt){let n=e,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);let o=this.aStartAngle+t*r,l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let d=Math.cos(this.aRotation),h=Math.sin(this.aRotation),f=l-this.aX,p=c-this.aY;l=f*d-p*h+this.aX,c=f*h+p*d+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},qr=class extends Qi{constructor(t,e,n,s,r,a){super(t,e,n,n,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}};function Il(){let i=0,t=0,e=0,n=0;function s(r,a,o,l){i=r,t=o,e=-3*r+3*a-2*o-l,n=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,c){s(a,o,c*(o-r),c*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,c,d,h){let f=(a-r)/c-(o-r)/(c+d)+(o-a)/d,p=(o-a)/d-(l-a)/(d+h)+(l-o)/h;f*=d,p*=d,s(a,o,f,p)},calc:function(r){let a=r*r,o=a*r;return i+t*r+e*a+n*o}}}var Pr=new B,Xo=new Il,qo=new Il,Yo=new Il,Yr=class extends $e{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new B){let n=e,s=this.points,r=s.length,a=(r-(this.closed?0:1))*t,o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:l===0&&o===r-1&&(o=r-2,l=1);let c,d;this.closed||o>0?c=s[(o-1)%r]:(Pr.subVectors(s[0],s[1]).add(s[0]),c=Pr);let h=s[o%r],f=s[(o+1)%r];if(this.closed||o+2<r?d=s[(o+2)%r]:(Pr.subVectors(s[r-1],s[r-2]).add(s[r-1]),d=Pr),this.curveType==="centripetal"||this.curveType==="chordal"){let p=this.curveType==="chordal"?.5:.25,_=Math.pow(c.distanceToSquared(h),p),S=Math.pow(h.distanceToSquared(f),p),m=Math.pow(f.distanceToSquared(d),p);S<1e-4&&(S=1),_<1e-4&&(_=S),m<1e-4&&(m=S),Xo.initNonuniformCatmullRom(c.x,h.x,f.x,d.x,_,S,m),qo.initNonuniformCatmullRom(c.y,h.y,f.y,d.y,_,S,m),Yo.initNonuniformCatmullRom(c.z,h.z,f.z,d.z,_,S,m)}else this.curveType==="catmullrom"&&(Xo.initCatmullRom(c.x,h.x,f.x,d.x,this.tension),qo.initCatmullRom(c.y,h.y,f.y,d.y,this.tension),Yo.initCatmullRom(c.z,h.z,f.z,d.z,this.tension));return n.set(Xo.calc(l),qo.calc(l),Yo.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new B().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function Fc(i,t,e,n,s){let r=(n-t)*.5,a=(s-e)*.5,o=i*i,l=i*o;return(2*e-2*n+r+a)*l+(-3*e+3*n-2*r-a)*o+r*i+e}function Od(i,t){let e=1-i;return e*e*t}function Bd(i,t){return 2*(1-i)*i*t}function kd(i,t){return i*i*t}function As(i,t,e,n){return Od(i,t)+Bd(i,e)+kd(i,n)}function zd(i,t){let e=1-i;return e*e*e*t}function Vd(i,t){let e=1-i;return 3*e*e*i*t}function Hd(i,t){return 3*(1-i)*i*i*t}function Gd(i,t){return i*i*i*t}function Cs(i,t,e,n,s){return zd(i,t)+Vd(i,e)+Hd(i,n)+Gd(i,s)}var Hs=class extends $e{constructor(t=new lt,e=new lt,n=new lt,s=new lt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new lt){let n=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(Cs(t,s.x,r.x,a.x,o.x),Cs(t,s.y,r.y,a.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Zr=class extends $e{constructor(t=new B,e=new B,n=new B,s=new B){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new B){let n=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(Cs(t,s.x,r.x,a.x,o.x),Cs(t,s.y,r.y,a.y,o.y),Cs(t,s.z,r.z,a.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Gs=class extends $e{constructor(t=new lt,e=new lt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new lt){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new lt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Jr=class extends $e{constructor(t=new B,e=new B){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new B){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new B){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},$s=class extends $e{constructor(t=new lt,e=new lt,n=new lt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new lt){let n=e,s=this.v0,r=this.v1,a=this.v2;return n.set(As(t,s.x,r.x,a.x),As(t,s.y,r.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Kr=class extends $e{constructor(t=new B,e=new B,n=new B){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new B){let n=e,s=this.v0,r=this.v1,a=this.v2;return n.set(As(t,s.x,r.x,a.x),As(t,s.y,r.y,a.y),As(t,s.z,r.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Ws=class extends $e{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new lt){let n=e,s=this.points,r=(s.length-1)*t,a=Math.floor(r),o=r-a,l=s[a===0?a:a-1],c=s[a],d=s[a>s.length-2?s.length-1:a+1],h=s[a>s.length-3?s.length-1:a+2];return n.set(Fc(o,l.x,c.x,d.x,h.x),Fc(o,l.y,c.y,d.y,h.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new lt().fromArray(s))}return this}},el=Object.freeze({__proto__:null,ArcCurve:qr,CatmullRomCurve3:Yr,CubicBezierCurve:Hs,CubicBezierCurve3:Zr,EllipseCurve:Qi,LineCurve:Gs,LineCurve3:Jr,QuadraticBezierCurve:$s,QuadraticBezierCurve3:Kr,SplineCurve:Ws}),jr=class extends $e{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){let n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new el[n](e,t))}return this}getPoint(t,e){let n=t*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let a=s[r]-n,o=this.curves[r],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,e)}r++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let n=0,s=this.curves.length;n<s;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){let e=[],n;for(let s=0,r=this.curves;s<r.length;s++){let a=r[s],o=a.isEllipseCurve?t*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?t*a.points.length:t,l=a.getPoints(o);for(let c=0;c<l.length;c++){let d=l[c];n&&n.equals(d)||(e.push(d),n=d)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){let s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(new el[s.type]().fromJSON(s))}return this}},fi=class extends jr{constructor(t){super(),this.type="Path",this.currentPoint=new lt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){let n=new Gs(this.currentPoint.clone(),new lt(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,s){let r=new $s(this.currentPoint.clone(),new lt(t,e),new lt(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(t,e,n,s,r,a){let o=new Hs(this.currentPoint.clone(),new lt(t,e),new lt(n,s),new lt(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(t){let e=[this.currentPoint.clone()].concat(t),n=new Ws(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,s,r,a){let o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+o,e+l,n,s,r,a),this}absarc(t,e,n,s,r,a){return this.absellipse(t,e,n,n,s,r,a),this}ellipse(t,e,n,s,r,a,o,l){let c=this.currentPoint.x,d=this.currentPoint.y;return this.absellipse(t+c,e+d,n,s,r,a,o,l),this}absellipse(t,e,n,s,r,a,o,l){let c=new Qi(t,e,n,s,r,a,o,l);if(this.curves.length>0){let h=c.getPoint(0);h.equals(this.currentPoint)||this.lineTo(h.x,h.y)}this.curves.push(c);let d=c.getPoint(1);return this.currentPoint.copy(d),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}},ts=class extends fi{constructor(t){super(t),this.uuid=xi(),this.type="Shape",this.holes=[]}getPointsHoles(t){let e=[];for(let n=0,s=this.holes.length;n<s;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){let s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let s=t.holes[e];this.holes.push(new fi().fromJSON(s))}return this}};function $d(i,t,e=2){let n=t&&t.length,s=n?t[0]*e:i.length,r=Dh(i,0,s,e,!0),a=[];if(!r||r.next===r.prev)return a;let o,l,c;if(n&&(r=Zd(i,t,r,e)),i.length>80*e){o=1/0,l=1/0;let d=-1/0,h=-1/0;for(let f=e;f<s;f+=e){let p=i[f],_=i[f+1];p<o&&(o=p),_<l&&(l=_),p>d&&(d=p),_>h&&(h=_)}c=Math.max(d-o,h-l),c=c!==0?32767/c:0}return Xs(r,a,e,o,l,c,0),a}function Dh(i,t,e,n,s){let r;if(s===of(i,t,e,n)>0)for(let a=t;a<e;a+=n)r=Oc(a/n|0,i[a],i[a+1],r);else for(let a=e-n;a>=t;a-=n)r=Oc(a/n|0,i[a],i[a+1],r);return r&&es(r,r.next)&&(Ys(r),r=r.next),r}function pi(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(es(e,e.next)||fe(e.prev,e,e.next)===0)){if(Ys(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function Xs(i,t,e,n,s,r,a){if(!i)return;!a&&r&&tf(i,n,s,r);let o=i;for(;i.prev!==i.next;){let l=i.prev,c=i.next;if(r?Xd(i,n,s,r):Wd(i)){t.push(l.i,i.i,c.i),Ys(i),i=c.next,o=c.next;continue}if(i=c,i===o){a?a===1?(i=qd(pi(i),t),Xs(i,t,e,n,s,r,2)):a===2&&Yd(i,t,e,n,s,r):Xs(pi(i),t,e,n,s,r,1);break}}}function Wd(i){let t=i.prev,e=i,n=i.next;if(fe(t,e,n)>=0)return!1;let s=t.x,r=e.x,a=n.x,o=t.y,l=e.y,c=n.y,d=Math.min(s,r,a),h=Math.min(o,l,c),f=Math.max(s,r,a),p=Math.max(o,l,c),_=n.next;for(;_!==t;){if(_.x>=d&&_.x<=f&&_.y>=h&&_.y<=p&&Es(s,o,r,l,a,c,_.x,_.y)&&fe(_.prev,_,_.next)>=0)return!1;_=_.next}return!0}function Xd(i,t,e,n){let s=i.prev,r=i,a=i.next;if(fe(s,r,a)>=0)return!1;let o=s.x,l=r.x,c=a.x,d=s.y,h=r.y,f=a.y,p=Math.min(o,l,c),_=Math.min(d,h,f),S=Math.max(o,l,c),m=Math.max(d,h,f),u=nl(p,_,t,e,n),E=nl(S,m,t,e,n),y=i.prevZ,g=i.nextZ;for(;y&&y.z>=u&&g&&g.z<=E;){if(y.x>=p&&y.x<=S&&y.y>=_&&y.y<=m&&y!==s&&y!==a&&Es(o,d,l,h,c,f,y.x,y.y)&&fe(y.prev,y,y.next)>=0||(y=y.prevZ,g.x>=p&&g.x<=S&&g.y>=_&&g.y<=m&&g!==s&&g!==a&&Es(o,d,l,h,c,f,g.x,g.y)&&fe(g.prev,g,g.next)>=0))return!1;g=g.nextZ}for(;y&&y.z>=u;){if(y.x>=p&&y.x<=S&&y.y>=_&&y.y<=m&&y!==s&&y!==a&&Es(o,d,l,h,c,f,y.x,y.y)&&fe(y.prev,y,y.next)>=0)return!1;y=y.prevZ}for(;g&&g.z<=E;){if(g.x>=p&&g.x<=S&&g.y>=_&&g.y<=m&&g!==s&&g!==a&&Es(o,d,l,h,c,f,g.x,g.y)&&fe(g.prev,g,g.next)>=0)return!1;g=g.nextZ}return!0}function qd(i,t){let e=i;do{let n=e.prev,s=e.next.next;!es(n,s)&&Nh(n,e,e.next,s)&&qs(n,s)&&qs(s,n)&&(t.push(n.i,e.i,s.i),Ys(e),Ys(e.next),e=i=s),e=e.next}while(e!==i);return pi(e)}function Yd(i,t,e,n,s,r){let a=i;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&sf(a,o)){let l=Fh(a,o);a=pi(a,a.next),l=pi(l,l.next),Xs(a,t,e,n,s,r,0),Xs(l,t,e,n,s,r,0);return}o=o.next}a=a.next}while(a!==i)}function Zd(i,t,e,n){let s=[];for(let r=0,a=t.length;r<a;r++){let o=t[r]*n,l=r<a-1?t[r+1]*n:i.length,c=Dh(i,o,l,n,!1);c===c.next&&(c.steiner=!0),s.push(nf(c))}s.sort(Jd);for(let r=0;r<s.length;r++)e=Kd(s[r],e);return e}function Jd(i,t){let e=i.x-t.x;if(e===0&&(e=i.y-t.y,e===0)){let n=(i.next.y-i.y)/(i.next.x-i.x),s=(t.next.y-t.y)/(t.next.x-t.x);e=n-s}return e}function Kd(i,t){let e=jd(i,t);if(!e)return t;let n=Fh(e,i);return pi(n,n.next),pi(e,e.next)}function jd(i,t){let e=t,n=i.x,s=i.y,r=-1/0,a;if(es(i,e))return e;do{if(es(i,e.next))return e.next;if(s<=e.y&&s>=e.next.y&&e.next.y!==e.y){let h=e.x+(s-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(h<=n&&h>r&&(r=h,a=e.x<e.next.x?e:e.next,h===n))return a}e=e.next}while(e!==t);if(!a)return null;let o=a,l=a.x,c=a.y,d=1/0;e=a;do{if(n>=e.x&&e.x>=l&&n!==e.x&&Uh(s<c?n:r,s,l,c,s<c?r:n,s,e.x,e.y)){let h=Math.abs(s-e.y)/(n-e.x);qs(e,i)&&(h<d||h===d&&(e.x>a.x||e.x===a.x&&Qd(a,e)))&&(a=e,d=h)}e=e.next}while(e!==o);return a}function Qd(i,t){return fe(i.prev,i,t.prev)<0&&fe(t.next,i,i.next)<0}function tf(i,t,e,n){let s=i;do s.z===0&&(s.z=nl(s.x,s.y,t,e,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,ef(s)}function ef(i){let t,e=1;do{let n=i,s;i=null;let r=null;for(t=0;n;){t++;let a=n,o=0;for(let c=0;c<e&&(o++,a=a.nextZ,!!a);c++);let l=e;for(;o>0||l>0&&a;)o!==0&&(l===0||!a||n.z<=a.z)?(s=n,n=n.nextZ,o--):(s=a,a=a.nextZ,l--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;n=a}r.nextZ=null,e*=2}while(t>1);return i}function nl(i,t,e,n,s){return i=(i-e)*s|0,t=(t-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function nf(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function Uh(i,t,e,n,s,r,a,o){return(s-a)*(t-o)>=(i-a)*(r-o)&&(i-a)*(n-o)>=(e-a)*(t-o)&&(e-a)*(r-o)>=(s-a)*(n-o)}function Es(i,t,e,n,s,r,a,o){return!(i===a&&t===o)&&Uh(i,t,e,n,s,r,a,o)}function sf(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!rf(i,t)&&(qs(i,t)&&qs(t,i)&&af(i,t)&&(fe(i.prev,i,t.prev)||fe(i,t.prev,t))||es(i,t)&&fe(i.prev,i,i.next)>0&&fe(t.prev,t,t.next)>0)}function fe(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function es(i,t){return i.x===t.x&&i.y===t.y}function Nh(i,t,e,n){let s=Dr(fe(i,t,e)),r=Dr(fe(i,t,n)),a=Dr(fe(e,n,i)),o=Dr(fe(e,n,t));return!!(s!==r&&a!==o||s===0&&Lr(i,e,t)||r===0&&Lr(i,n,t)||a===0&&Lr(e,i,n)||o===0&&Lr(e,t,n))}function Lr(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function Dr(i){return i>0?1:i<0?-1:0}function rf(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&Nh(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function qs(i,t){return fe(i.prev,i,i.next)<0?fe(i,t,i.next)>=0&&fe(i,i.prev,t)>=0:fe(i,t,i.prev)<0||fe(i,i.next,t)<0}function af(i,t){let e=i,n=!1,s=(i.x+t.x)/2,r=(i.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function Fh(i,t){let e=il(i.i,i.x,i.y),n=il(t.i,t.x,t.y),s=i.next,r=t.prev;return i.next=t,t.prev=i,e.next=s,s.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function Oc(i,t,e,n){let s=il(i,t,e);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function Ys(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function il(i,t,e){return{i,x:t,y:e,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function of(i,t,e,n){let s=0;for(let r=t,a=e-n;r<e;r+=n)s+=(i[a]-i[r])*(i[r+1]+i[a+1]),a=r;return s}var sl=class{static triangulate(t,e,n=2){return $d(t,e,n)}},oi=class i{static area(t){let e=t.length,n=0;for(let s=e-1,r=0;r<e;s=r++)n+=t[s].x*t[r].y-t[r].x*t[s].y;return n*.5}static isClockWise(t){return i.area(t)<0}static triangulateShape(t,e){let n=[],s=[],r=[];Bc(t),kc(n,t);let a=t.length;e.forEach(Bc);for(let l=0;l<e.length;l++)s.push(a),a+=e[l].length,kc(n,e[l]);let o=sl.triangulate(n,s);for(let l=0;l<o.length;l+=3)r.push(o.slice(l,l+3));return r}};function Bc(i){let t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function kc(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}var Zs=class i extends Cn{constructor(t=new ts([new lt(.5,.5),new lt(-.5,.5),new lt(-.5,-.5),new lt(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];let n=this,s=[],r=[];for(let o=0,l=t.length;o<l;o++){let c=t[o];a(c)}this.setAttribute("position",new Ke(s,3)),this.setAttribute("uv",new Ke(r,2)),this.computeVertexNormals();function a(o){let l=[],c=e.curveSegments!==void 0?e.curveSegments:12,d=e.steps!==void 0?e.steps:1,h=e.depth!==void 0?e.depth:1,f=e.bevelEnabled!==void 0?e.bevelEnabled:!0,p=e.bevelThickness!==void 0?e.bevelThickness:.2,_=e.bevelSize!==void 0?e.bevelSize:p-.1,S=e.bevelOffset!==void 0?e.bevelOffset:0,m=e.bevelSegments!==void 0?e.bevelSegments:3,u=e.extrudePath,E=e.UVGenerator!==void 0?e.UVGenerator:lf,y,g=!1,w,v,I,L;u&&(y=u.getSpacedPoints(d),g=!0,f=!1,w=u.computeFrenetFrames(d,!1),v=new B,I=new B,L=new B),f||(m=0,p=0,_=0,S=0);let M=o.extractPoints(c),x=M.shape,R=M.holes;if(!oi.isClockWise(x)){x=x.reverse();for(let nt=0,j=R.length;nt<j;nt++){let K=R[nt];oi.isClockWise(K)&&(R[nt]=K.reverse())}}function C(nt){let K=10000000000000001e-36,J=nt[0];for(let ut=1;ut<=nt.length;ut++){let it=ut%nt.length,dt=nt[it],zt=dt.x-J.x,Bt=dt.y-J.y,P=zt*zt+Bt*Bt,b=Math.max(Math.abs(dt.x),Math.abs(dt.y),Math.abs(J.x),Math.abs(J.y)),G=K*b*b;if(P<=G){nt.splice(it,1),ut--;continue}J=dt}}C(x),R.forEach(C);let U=R.length,N=x;for(let nt=0;nt<U;nt++){let j=R[nt];x=x.concat(j)}function O(nt,j,K){return j||console.error("THREE.ExtrudeGeometry: vec does not exist"),nt.clone().addScaledVector(j,K)}let $=x.length;function V(nt,j,K){let J,ut,it,dt=nt.x-j.x,zt=nt.y-j.y,Bt=K.x-nt.x,P=K.y-nt.y,b=dt*dt+zt*zt,G=dt*P-zt*Bt;if(Math.abs(G)>Number.EPSILON){let q=Math.sqrt(b),et=Math.sqrt(Bt*Bt+P*P),Y=j.x-zt/q,Rt=j.y+dt/q,ct=K.x-P/et,Tt=K.y+Bt/et,At=((ct-Y)*P-(Tt-Rt)*Bt)/(dt*P-zt*Bt);J=Y+dt*At-nt.x,ut=Rt+zt*At-nt.y;let st=J*J+ut*ut;if(st<=2)return new lt(J,ut);it=Math.sqrt(st/2)}else{let q=!1;dt>Number.EPSILON?Bt>Number.EPSILON&&(q=!0):dt<-Number.EPSILON?Bt<-Number.EPSILON&&(q=!0):Math.sign(zt)===Math.sign(P)&&(q=!0),q?(J=-zt,ut=dt,it=Math.sqrt(b)):(J=dt,ut=zt,it=Math.sqrt(b/2))}return new lt(J/it,ut/it)}let tt=[];for(let nt=0,j=N.length,K=j-1,J=nt+1;nt<j;nt++,K++,J++)K===j&&(K=0),J===j&&(J=0),tt[nt]=V(N[nt],N[K],N[J]);let ht=[],gt,Lt=tt.concat();for(let nt=0,j=U;nt<j;nt++){let K=R[nt];gt=[];for(let J=0,ut=K.length,it=ut-1,dt=J+1;J<ut;J++,it++,dt++)it===ut&&(it=0),dt===ut&&(dt=0),gt[J]=V(K[J],K[it],K[dt]);ht.push(gt),Lt=Lt.concat(gt)}let Xt;if(m===0)Xt=oi.triangulateShape(N,R);else{let nt=[],j=[];for(let K=0;K<m;K++){let J=K/m,ut=p*Math.cos(J*Math.PI/2),it=_*Math.sin(J*Math.PI/2)+S;for(let dt=0,zt=N.length;dt<zt;dt++){let Bt=O(N[dt],tt[dt],it);St(Bt.x,Bt.y,-ut),J===0&&nt.push(Bt)}for(let dt=0,zt=U;dt<zt;dt++){let Bt=R[dt];gt=ht[dt];let P=[];for(let b=0,G=Bt.length;b<G;b++){let q=O(Bt[b],gt[b],it);St(q.x,q.y,-ut),J===0&&P.push(q)}J===0&&j.push(P)}}Xt=oi.triangulateShape(nt,j)}let Zt=Xt.length,vt=_+S;for(let nt=0;nt<$;nt++){let j=f?O(x[nt],Lt[nt],vt):x[nt];g?(I.copy(w.normals[0]).multiplyScalar(j.x),v.copy(w.binormals[0]).multiplyScalar(j.y),L.copy(y[0]).add(I).add(v),St(L.x,L.y,L.z)):St(j.x,j.y,0)}for(let nt=1;nt<=d;nt++)for(let j=0;j<$;j++){let K=f?O(x[j],Lt[j],vt):x[j];g?(I.copy(w.normals[nt]).multiplyScalar(K.x),v.copy(w.binormals[nt]).multiplyScalar(K.y),L.copy(y[nt]).add(I).add(v),St(L.x,L.y,L.z)):St(K.x,K.y,h/d*nt)}for(let nt=m-1;nt>=0;nt--){let j=nt/m,K=p*Math.cos(j*Math.PI/2),J=_*Math.sin(j*Math.PI/2)+S;for(let ut=0,it=N.length;ut<it;ut++){let dt=O(N[ut],tt[ut],J);St(dt.x,dt.y,h+K)}for(let ut=0,it=R.length;ut<it;ut++){let dt=R[ut];gt=ht[ut];for(let zt=0,Bt=dt.length;zt<Bt;zt++){let P=O(dt[zt],gt[zt],J);g?St(P.x,P.y+y[d-1].y,y[d-1].x+K):St(P.x,P.y,h+K)}}}H(),Z();function H(){let nt=s.length/3;if(f){let j=0,K=$*j;for(let J=0;J<Zt;J++){let ut=Xt[J];Mt(ut[2]+K,ut[1]+K,ut[0]+K)}j=d+m*2,K=$*j;for(let J=0;J<Zt;J++){let ut=Xt[J];Mt(ut[0]+K,ut[1]+K,ut[2]+K)}}else{for(let j=0;j<Zt;j++){let K=Xt[j];Mt(K[2],K[1],K[0])}for(let j=0;j<Zt;j++){let K=Xt[j];Mt(K[0]+$*d,K[1]+$*d,K[2]+$*d)}}n.addGroup(nt,s.length/3-nt,0)}function Z(){let nt=s.length/3,j=0;pt(N,j),j+=N.length;for(let K=0,J=R.length;K<J;K++){let ut=R[K];pt(ut,j),j+=ut.length}n.addGroup(nt,s.length/3-nt,1)}function pt(nt,j){let K=nt.length;for(;--K>=0;){let J=K,ut=K-1;ut<0&&(ut=nt.length-1);for(let it=0,dt=d+m*2;it<dt;it++){let zt=$*it,Bt=$*(it+1),P=j+J+zt,b=j+ut+zt,G=j+ut+Bt,q=j+J+Bt;qt(P,b,G,q)}}}function St(nt,j,K){l.push(nt),l.push(j),l.push(K)}function Mt(nt,j,K){ee(nt),ee(j),ee(K);let J=s.length/3,ut=E.generateTopUV(n,s,J-3,J-2,J-1);D(ut[0]),D(ut[1]),D(ut[2])}function qt(nt,j,K,J){ee(nt),ee(j),ee(J),ee(j),ee(K),ee(J);let ut=s.length/3,it=E.generateSideWallUV(n,s,ut-6,ut-3,ut-2,ut-1);D(it[0]),D(it[1]),D(it[3]),D(it[1]),D(it[2]),D(it[3])}function ee(nt){s.push(l[nt*3+0]),s.push(l[nt*3+1]),s.push(l[nt*3+2])}function D(nt){r.push(nt.x),r.push(nt.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return cf(e,n,t)}static fromJSON(t,e){let n=[];for(let r=0,a=t.shapes.length;r<a;r++){let o=e[t.shapes[r]];n.push(o)}let s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new el[s.type]().fromJSON(s)),new i(n,t.options)}},lf={generateTopUV:function(i,t,e,n,s){let r=t[e*3],a=t[e*3+1],o=t[n*3],l=t[n*3+1],c=t[s*3],d=t[s*3+1];return[new lt(r,a),new lt(o,l),new lt(c,d)]},generateSideWallUV:function(i,t,e,n,s,r){let a=t[e*3],o=t[e*3+1],l=t[e*3+2],c=t[n*3],d=t[n*3+1],h=t[n*3+2],f=t[s*3],p=t[s*3+1],_=t[s*3+2],S=t[r*3],m=t[r*3+1],u=t[r*3+2];return Math.abs(o-d)<Math.abs(a-c)?[new lt(a,1-l),new lt(c,1-h),new lt(f,1-_),new lt(S,1-u)]:[new lt(o,1-l),new lt(d,1-h),new lt(p,1-_),new lt(m,1-u)]}};function cf(i,t,e){if(e.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){let r=i[n];e.shapes.push(r.uuid)}else e.shapes.push(i.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}var mi=class i extends Cn{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};let r=t/2,a=e/2,o=Math.floor(n),l=Math.floor(s),c=o+1,d=l+1,h=t/o,f=e/l,p=[],_=[],S=[],m=[];for(let u=0;u<d;u++){let E=u*f-a;for(let y=0;y<c;y++){let g=y*h-r;_.push(g,-E,0),S.push(0,0,1),m.push(y/o),m.push(1-u/l)}}for(let u=0;u<l;u++)for(let E=0;E<o;E++){let y=E+c*u,g=E+c*(u+1),w=E+1+c*(u+1),v=E+1+c*u;p.push(y,g,v),p.push(g,w,v)}this.setIndex(p),this.setAttribute("position",new Ke(_,3)),this.setAttribute("normal",new Ke(S,3)),this.setAttribute("uv",new Ke(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}};var Wn=class extends $n{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new $t(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new $t(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=El,this.normalScale=new lt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ln,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};var Qr=class extends $n{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=xh,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},ta=class extends $n{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function Ur(i,t){return!i||i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function hf(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}var gi=class{constructor(t,e,n,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,s=e[n],r=e[n-1];n:{t:{let a;e:{i:if(!(t<s)){for(let o=n+2;;){if(s===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=s,s=e[++n],t<s)break t}a=e.length;break e}if(!(t>=r)){let o=e[1];t<o&&(n=2,r=o);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=e[--n-1],t>=r)break t}a=n,n=0;break e}break n}for(;n<a;){let o=n+a>>>1;t<e[o]?a=o:n=o+1}if(s=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s;for(let a=0;a!==s;++a)e[a]=n[r+a];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},ea=class extends gi{constructor(t,e,n,s){super(t,e,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Jo,endingEnd:Jo}}intervalChanged_(t,e,n){let s=this.parameterPositions,r=t-2,a=t+1,o=s[r],l=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case Ko:r=t,o=2*e-n;break;case jo:r=s.length-2,o=e+s[r]-s[r+1];break;default:r=t,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Ko:a=t,l=2*n-e;break;case jo:a=1,l=n+s[1]-s[0];break;default:a=t-1,l=e}let c=(n-e)*.5,d=this.valueSize;this._weightPrev=c/(e-o),this._weightNext=c/(l-n),this._offsetPrev=r*d,this._offsetNext=a*d}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,d=this._offsetPrev,h=this._offsetNext,f=this._weightPrev,p=this._weightNext,_=(n-e)/(s-e),S=_*_,m=S*_,u=-f*m+2*f*S-f*_,E=(1+f)*m+(-1.5-2*f)*S+(-.5+f)*_+1,y=(-1-p)*m+(1.5+p)*S+.5*_,g=p*m-p*S;for(let w=0;w!==o;++w)r[w]=u*a[d+w]+E*a[c+w]+y*a[l+w]+g*a[h+w];return r}},na=class extends gi{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,d=(n-e)/(s-e),h=1-d;for(let f=0;f!==o;++f)r[f]=a[c+f]*h+a[l+f]*d;return r}},ia=class extends gi{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t){return this.copySampleValue_(t-1)}},We=class{constructor(t,e,n,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Ur(e,this.TimeBufferType),this.values=Ur(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:Ur(t.times,Array),values:Ur(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(n.interpolation=s)}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new ia(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new na(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new ea(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case Rs:e=this.InterpolantFactoryMethodDiscrete;break;case Vr:e=this.InterpolantFactoryMethodLinear;break;case Nr:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Rs;case this.InterpolantFactoryMethodLinear:return Vr;case this.InterpolantFactoryMethodSmooth:return Nr}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]*=t}return this}trim(t,e){let n=this.times,s=n.length,r=0,a=s-1;for(;r!==s&&n[r]<t;)++r;for(;a!==-1&&n[a]>e;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let a=null;for(let o=0;o!==r;o++){let l=n[o];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,l),t=!1;break}if(a!==null&&a>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,l,a),t=!1;break}a=l}if(s!==void 0&&hf(s))for(let o=0,l=s.length;o!==l;++o){let c=s[o];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===Nr,r=t.length-1,a=1;for(let o=1;o<r;++o){let l=!1,c=t[o],d=t[o+1];if(c!==d&&(o!==1||c!==t[0]))if(s)l=!0;else{let h=o*n,f=h-n,p=h+n;for(let _=0;_!==n;++_){let S=e[h+_];if(S!==e[f+_]||S!==e[p+_]){l=!0;break}}}if(l){if(o!==a){t[a]=t[o];let h=o*n,f=a*n;for(let p=0;p!==n;++p)e[f+p]=e[h+p]}++a}}if(r>0){t[a]=t[r];for(let o=r*n,l=a*n,c=0;c!==n;++c)e[l+c]=e[o+c];++a}return a!==t.length?(this.times=t.slice(0,a),this.values=e.slice(0,a*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,s=new n(this.name,t,e);return s.createInterpolant=this.createInterpolant,s}};We.prototype.ValueTypeName="";We.prototype.TimeBufferType=Float32Array;We.prototype.ValueBufferType=Float32Array;We.prototype.DefaultInterpolation=Vr;var Xn=class extends We{constructor(t,e,n){super(t,e,n)}};Xn.prototype.ValueTypeName="bool";Xn.prototype.ValueBufferType=Array;Xn.prototype.DefaultInterpolation=Rs;Xn.prototype.InterpolantFactoryMethodLinear=void 0;Xn.prototype.InterpolantFactoryMethodSmooth=void 0;var sa=class extends We{constructor(t,e,n,s){super(t,e,n,s)}};sa.prototype.ValueTypeName="color";var ra=class extends We{constructor(t,e,n,s){super(t,e,n,s)}};ra.prototype.ValueTypeName="number";var aa=class extends gi{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-e)/(s-e),c=t*o;for(let d=c+o;c!==d;c+=4)Qe.slerpFlat(r,0,a,c-o,a,c,l);return r}},Js=class extends We{constructor(t,e,n,s){super(t,e,n,s)}InterpolantFactoryMethodLinear(t){return new aa(this.times,this.values,this.getValueSize(),t)}};Js.prototype.ValueTypeName="quaternion";Js.prototype.InterpolantFactoryMethodSmooth=void 0;var qn=class extends We{constructor(t,e,n){super(t,e,n)}};qn.prototype.ValueTypeName="string";qn.prototype.ValueBufferType=Array;qn.prototype.DefaultInterpolation=Rs;qn.prototype.InterpolantFactoryMethodLinear=void 0;qn.prototype.InterpolantFactoryMethodSmooth=void 0;var oa=class extends We{constructor(t,e,n,s){super(t,e,n,s)}};oa.prototype.ValueTypeName="vector";var Fr={enabled:!1,files:{},add:function(i,t){this.enabled!==!1&&(this.files[i]=t)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}},la=class{constructor(t,e,n){let s=this,r=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.abortController=new AbortController,this.itemStart=function(d){o++,r===!1&&s.onStart!==void 0&&s.onStart(d,a,o),r=!0},this.itemEnd=function(d){a++,s.onProgress!==void 0&&s.onProgress(d,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(d){s.onError!==void 0&&s.onError(d)},this.resolveURL=function(d){return l?l(d):d},this.setURLModifier=function(d){return l=d,this},this.addHandler=function(d,h){return c.push(d,h),this},this.removeHandler=function(d){let h=c.indexOf(d);return h!==-1&&c.splice(h,2),this},this.getHandler=function(d){for(let h=0,f=c.length;h<f;h+=2){let p=c[h],_=c[h+1];if(p.global&&(p.lastIndex=0),p.test(d))return _}return null},this.abort=function(){return this.abortController.abort(),this.abortController=new AbortController,this}}},Oh=new la,ns=class{constructor(t){this.manager=t!==void 0?t:Oh,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){let n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}};ns.DEFAULT_MATERIAL_NAME="__DEFAULT";var Vi=new WeakMap,ca=class extends ns{constructor(t){super(t)}load(t,e,n,s){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);let r=this,a=Fr.get(`image:${t}`);if(a!==void 0){if(a.complete===!0)r.manager.itemStart(t),setTimeout(function(){e&&e(a),r.manager.itemEnd(t)},0);else{let h=Vi.get(a);h===void 0&&(h=[],Vi.set(a,h)),h.push({onLoad:e,onError:s})}return a}let o=Wi("img");function l(){d(),e&&e(this);let h=Vi.get(this)||[];for(let f=0;f<h.length;f++){let p=h[f];p.onLoad&&p.onLoad(this)}Vi.delete(this),r.manager.itemEnd(t)}function c(h){d(),s&&s(h),Fr.remove(`image:${t}`);let f=Vi.get(this)||[];for(let p=0;p<f.length;p++){let _=f[p];_.onError&&_.onError(h)}Vi.delete(this),r.manager.itemError(t),r.manager.itemEnd(t)}function d(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),Fr.add(`image:${t}`,o),r.manager.itemStart(t),o.src=t,o}};var Ks=class extends ns{constructor(t){super(t)}load(t,e,n,s){let r=new Fe,a=new ca(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(t,function(o){r.image=o,r.needsUpdate=!0,e!==void 0&&e(r)},n,s),r}},is=class extends be{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new $t(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}},js=class extends is{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(be.DEFAULT_UP),this.updateMatrix(),this.groundColor=new $t(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}},Zo=new le,zc=new B,Vc=new B,ha=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new lt(512,512),this.mapType=hn,this.map=null,this.mapPass=null,this.matrix=new le,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ji,this._frameExtents=new lt(1,1),this._viewportCount=1,this._viewports=[new pe(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera,n=this.matrix;zc.setFromMatrixPosition(t.matrixWorld),e.position.copy(zc),Vc.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Vc),e.updateMatrixWorld(),Zo.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Zo,e.coordinateSystem,e.reversedDepth),e.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Zo)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},rl=class extends ha{constructor(){super(new Ee(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(t){let e=this.camera,n=ui*2*t.angle*this.focus,s=this.mapSize.width/this.mapSize.height*this.aspect,r=t.distance||e.far;(n!==e.fov||s!==e.aspect||r!==e.far)&&(e.fov=n,e.aspect=s,e.far=r,e.updateProjectionMatrix()),super.updateMatrices(t)}copy(t){return super.copy(t),this.focus=t.focus,this}},Qs=class extends is{constructor(t,e,n=0,s=Math.PI/3,r=0,a=2){super(t,e),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(be.DEFAULT_UP),this.updateMatrix(),this.target=new be,this.distance=n,this.angle=s,this.penumbra=r,this.decay=a,this.map=null,this.shadow=new rl}get power(){return this.intensity*Math.PI}set power(t){this.intensity=t/Math.PI}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.angle=t.angle,this.penumbra=t.penumbra,this.decay=t.decay,this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}};var tr=class extends Fs{constructor(t=-1,e=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-t,a=n+t,o=s+e,l=s-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,d=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=d*this.view.offsetY,l=o-d*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},al=class extends ha{constructor(){super(new tr(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},ss=class extends is{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(be.DEFAULT_UP),this.updateMatrix(),this.target=new be,this.shadow=new al}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}};var ua=class extends Ee{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}},er=class{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let e=performance.now();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}};var Pl="\\[\\]\\.:\\/",uf=new RegExp("["+Pl+"]","g"),Ll="[^"+Pl+"]",df="[^"+Pl.replace("\\.","")+"]",ff=/((?:WC+[\/:])*)/.source.replace("WC",Ll),pf=/(WCOD+)?/.source.replace("WCOD",df),mf=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Ll),gf=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Ll),_f=new RegExp("^"+ff+pf+mf+gf+"$"),yf=["material","materials","bones","map"],ol=class{constructor(t,e,n){let s=n||he.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},he=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(uf,"")}static parseTrackName(t){let e=_f.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);yf.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===e||o.uuid===e)return o;let l=n(o.children);if(l)return l}return null},s=n(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)t[e++]=n[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=e.objectIndex;switch(n){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let d=0;d<t.length;d++)if(t[d].name===c){c=d;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(c!==void 0){if(t[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let a=t[s];if(a===void 0){let c=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",t);return}let o=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?o=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};he.Composite=ol;he.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};he.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};he.prototype.GetterByBindingType=[he.prototype._getValue_direct,he.prototype._getValue_array,he.prototype._getValue_arrayElement,he.prototype._getValue_toArray];he.prototype.SetterByBindingTypeAndVersioning=[[he.prototype._setValue_direct,he.prototype._setValue_direct_setNeedsUpdate,he.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[he.prototype._setValue_array,he.prototype._setValue_array_setNeedsUpdate,he.prototype._setValue_array_setMatrixWorldNeedsUpdate],[he.prototype._setValue_arrayElement,he.prototype._setValue_arrayElement_setNeedsUpdate,he.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[he.prototype._setValue_fromArray,he.prototype._setValue_fromArray_setNeedsUpdate,he.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var w_=new Float32Array(1);var Hc=new le,nr=class{constructor(t,e,n=0,s=1/0){this.ray=new di(t,e),this.near=n,this.far=s,this.camera=null,this.layers=new Zi,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return Hc.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Hc),this}intersectObject(t,e=!0,n=[]){return ll(t,this,n,e),n.sort(Gc),n}intersectObjects(t,e=!0,n=[]){for(let s=0,r=t.length;s<r;s++)ll(t[s],this,n,e);return n.sort(Gc),n}};function Gc(i,t){return i.distance-t.distance}function ll(i,t,e,n){let s=!0;if(i.layers.test(t.layers)&&i.raycast(t,e)===!1&&(s=!1),s===!0&&n===!0){let r=i.children;for(let a=0,o=r.length;a<o;a++)ll(r[a],t,e,!0)}}var rs=class{constructor(t=1,e=0,n=0){this.radius=t,this.phi=e,this.theta=n}set(t,e,n){return this.radius=t,this.phi=e,this.theta=n,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Gt(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,n){return this.radius=Math.sqrt(t*t+e*e+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,n),this.phi=Math.acos(Gt(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}};var ir=class extends fn{constructor(t,e=null){super(),this.object=t,this.domElement=e,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(t){if(t===void 0){console.warn("THREE.Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=t}disconnect(){}dispose(){}update(){}};function Dl(i,t,e,n){let s=xf(n);switch(e){case vl:return i*t;case bl:return i*t/s.components*s.byteLength;case Aa:return i*t/s.components*s.byteLength;case Sl:return i*t*2/s.components*s.byteLength;case Ca:return i*t*2/s.components*s.byteLength;case Ml:return i*t*3/s.components*s.byteLength;case en:return i*t*4/s.components*s.byteLength;case Ra:return i*t*4/s.components*s.byteLength;case ar:case or:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case lr:case cr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Pa:case Da:return Math.max(i,16)*Math.max(t,8)/4;case Ia:case La:return Math.max(i,8)*Math.max(t,8)/2;case Ua:case Na:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Fa:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Oa:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Ba:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case ka:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case za:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case Va:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case Ha:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case Ga:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case $a:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case Wa:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case Xa:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case qa:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case Ya:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case Za:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case Ja:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case Ka:case ja:case Qa:return Math.ceil(i/4)*Math.ceil(t/4)*16;case to:case eo:return Math.ceil(i/4)*Math.ceil(t/4)*8;case no:case io:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function xf(i){switch(i){case hn:case gl:return{byteLength:1,components:1};case as:case _l:case os:return{byteLength:2,components:1};case wa:case Ta:return{byteLength:2,components:4};case Kn:case Ea:case gn:return{byteLength:4,components:1};case yl:case xl:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"180"}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="180");function ou(){let i=null,t=!1,e=null,n=null;function s(r,a){e(r,a),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function Mf(i){let t=new WeakMap;function e(o,l){let c=o.array,d=o.usage,h=c.byteLength,f=i.createBuffer();i.bindBuffer(l,f),i.bufferData(l,c,d),o.onUploadCallback();let p;if(c instanceof Float32Array)p=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)p=i.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?p=i.HALF_FLOAT:p=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=i.SHORT;else if(c instanceof Uint32Array)p=i.UNSIGNED_INT;else if(c instanceof Int32Array)p=i.INT;else if(c instanceof Int8Array)p=i.BYTE;else if(c instanceof Uint8Array)p=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:h}}function n(o,l,c){let d=l.array,h=l.updateRanges;if(i.bindBuffer(c,o),h.length===0)i.bufferSubData(c,0,d);else{h.sort((p,_)=>p.start-_.start);let f=0;for(let p=1;p<h.length;p++){let _=h[f],S=h[p];S.start<=_.start+_.count+1?_.count=Math.max(_.count,S.start+S.count-_.start):(++f,h[f]=S)}h.length=f+1;for(let p=0,_=h.length;p<_;p++){let S=h[p];i.bufferSubData(c,S.start*d.BYTES_PER_ELEMENT,d,S.start,S.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=t.get(o);l&&(i.deleteBuffer(l.buffer),t.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let d=t.get(o);(!d||d.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=t.get(o);if(c===void 0)t.set(o,e(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}var bf=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Sf=`#ifdef USE_ALPHAHASH
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
#endif`,Ef=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,wf=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Tf=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Af=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Cf=`#ifdef USE_AOMAP
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
#endif`,Rf=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,If=`#ifdef USE_BATCHING
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
#endif`,Pf=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Lf=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Df=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Uf=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Nf=`#ifdef USE_IRIDESCENCE
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
#endif`,Ff=`#ifdef USE_BUMPMAP
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
#endif`,Of=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Bf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,kf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,zf=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Vf=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Hf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Gf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,$f=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Wf=`#define PI 3.141592653589793
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
} // validated`,Xf=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,qf=`vec3 transformedNormal = objectNormal;
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
#endif`,Yf=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Zf=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Jf=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Kf=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,jf="gl_FragColor = linearToOutputTexel( gl_FragColor );",Qf=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,tp=`#ifdef USE_ENVMAP
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
#endif`,ep=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,np=`#ifdef USE_ENVMAP
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
#endif`,ip=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,sp=`#ifdef USE_ENVMAP
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
#endif`,rp=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,ap=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,op=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,lp=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,cp=`#ifdef USE_GRADIENTMAP
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
}`,hp=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,up=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,dp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,fp=`uniform bool receiveShadow;
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
#endif`,pp=`#ifdef USE_ENVMAP
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
#endif`,mp=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,gp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,_p=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,yp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,xp=`PhysicalMaterial material;
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
#endif`,vp=`struct PhysicalMaterial {
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
}`,Mp=`
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
#endif`,bp=`#if defined( RE_IndirectDiffuse )
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
#endif`,Sp=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Ep=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,wp=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Tp=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ap=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Cp=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Rp=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Ip=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Pp=`#if defined( USE_POINTS_UV )
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
#endif`,Lp=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Dp=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Up=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Np=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Fp=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Op=`#ifdef USE_MORPHTARGETS
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
#endif`,Bp=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,kp=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,zp=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Vp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Hp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Gp=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,$p=`#ifdef USE_NORMALMAP
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
#endif`,Wp=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Xp=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,qp=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Yp=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Zp=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Jp=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Kp=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,jp=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Qp=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,tm=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,em=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,nm=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,im=`#if NUM_SPOT_LIGHT_COORDS > 0
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
		float depth = unpackRGBAToDepth( texture2D( depths, uv ) );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			return step( depth, compare );
		#else
			return step( compare, depth );
		#endif
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow( sampler2D shadow, vec2 uv, float compare ) {
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			float hard_shadow = step( distribution.x, compare );
		#else
			float hard_shadow = step( compare, distribution.x );
		#endif
		if ( hard_shadow != 1.0 ) {
			float distance = compare - distribution.x;
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
#endif`,sm=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,rm=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,am=`float getShadowMask() {
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
}`,om=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,lm=`#ifdef USE_SKINNING
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
#endif`,cm=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,hm=`#ifdef USE_SKINNING
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
#endif`,um=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,dm=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,fm=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,pm=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,mm=`#ifdef USE_TRANSMISSION
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
#endif`,gm=`#ifdef USE_TRANSMISSION
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
#endif`,_m=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ym=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,xm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,vm=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Mm=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,bm=`uniform sampler2D t2D;
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
}`,Sm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Em=`#ifdef ENVMAP_TYPE_CUBE
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
}`,wm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Tm=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Am=`#include <common>
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
}`,Cm=`#if DEPTH_PACKING == 3200
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
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Rm=`#define DISTANCE
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
}`,Im=`#define DISTANCE
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
}`,Pm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Lm=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Dm=`uniform float scale;
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
}`,Um=`uniform vec3 diffuse;
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
}`,Nm=`#include <common>
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
}`,Fm=`uniform vec3 diffuse;
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
}`,Om=`#define LAMBERT
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
}`,Bm=`#define LAMBERT
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
}`,km=`#define MATCAP
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
}`,zm=`#define MATCAP
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
}`,Vm=`#define NORMAL
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
}`,Hm=`#define NORMAL
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
}`,Gm=`#define PHONG
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
}`,$m=`#define PHONG
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
}`,Wm=`#define STANDARD
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
}`,Xm=`#define STANDARD
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
}`,qm=`#define TOON
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
}`,Ym=`#define TOON
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
}`,Zm=`uniform float size;
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
}`,Jm=`uniform vec3 diffuse;
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
}`,Km=`#include <common>
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
}`,jm=`uniform vec3 color;
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
}`,Qm=`uniform float rotation;
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
}`,tg=`uniform vec3 diffuse;
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
}`,Wt={alphahash_fragment:bf,alphahash_pars_fragment:Sf,alphamap_fragment:Ef,alphamap_pars_fragment:wf,alphatest_fragment:Tf,alphatest_pars_fragment:Af,aomap_fragment:Cf,aomap_pars_fragment:Rf,batching_pars_vertex:If,batching_vertex:Pf,begin_vertex:Lf,beginnormal_vertex:Df,bsdfs:Uf,iridescence_fragment:Nf,bumpmap_pars_fragment:Ff,clipping_planes_fragment:Of,clipping_planes_pars_fragment:Bf,clipping_planes_pars_vertex:kf,clipping_planes_vertex:zf,color_fragment:Vf,color_pars_fragment:Hf,color_pars_vertex:Gf,color_vertex:$f,common:Wf,cube_uv_reflection_fragment:Xf,defaultnormal_vertex:qf,displacementmap_pars_vertex:Yf,displacementmap_vertex:Zf,emissivemap_fragment:Jf,emissivemap_pars_fragment:Kf,colorspace_fragment:jf,colorspace_pars_fragment:Qf,envmap_fragment:tp,envmap_common_pars_fragment:ep,envmap_pars_fragment:np,envmap_pars_vertex:ip,envmap_physical_pars_fragment:pp,envmap_vertex:sp,fog_vertex:rp,fog_pars_vertex:ap,fog_fragment:op,fog_pars_fragment:lp,gradientmap_pars_fragment:cp,lightmap_pars_fragment:hp,lights_lambert_fragment:up,lights_lambert_pars_fragment:dp,lights_pars_begin:fp,lights_toon_fragment:mp,lights_toon_pars_fragment:gp,lights_phong_fragment:_p,lights_phong_pars_fragment:yp,lights_physical_fragment:xp,lights_physical_pars_fragment:vp,lights_fragment_begin:Mp,lights_fragment_maps:bp,lights_fragment_end:Sp,logdepthbuf_fragment:Ep,logdepthbuf_pars_fragment:wp,logdepthbuf_pars_vertex:Tp,logdepthbuf_vertex:Ap,map_fragment:Cp,map_pars_fragment:Rp,map_particle_fragment:Ip,map_particle_pars_fragment:Pp,metalnessmap_fragment:Lp,metalnessmap_pars_fragment:Dp,morphinstance_vertex:Up,morphcolor_vertex:Np,morphnormal_vertex:Fp,morphtarget_pars_vertex:Op,morphtarget_vertex:Bp,normal_fragment_begin:kp,normal_fragment_maps:zp,normal_pars_fragment:Vp,normal_pars_vertex:Hp,normal_vertex:Gp,normalmap_pars_fragment:$p,clearcoat_normal_fragment_begin:Wp,clearcoat_normal_fragment_maps:Xp,clearcoat_pars_fragment:qp,iridescence_pars_fragment:Yp,opaque_fragment:Zp,packing:Jp,premultiplied_alpha_fragment:Kp,project_vertex:jp,dithering_fragment:Qp,dithering_pars_fragment:tm,roughnessmap_fragment:em,roughnessmap_pars_fragment:nm,shadowmap_pars_fragment:im,shadowmap_pars_vertex:sm,shadowmap_vertex:rm,shadowmask_pars_fragment:am,skinbase_vertex:om,skinning_pars_vertex:lm,skinning_vertex:cm,skinnormal_vertex:hm,specularmap_fragment:um,specularmap_pars_fragment:dm,tonemapping_fragment:fm,tonemapping_pars_fragment:pm,transmission_fragment:mm,transmission_pars_fragment:gm,uv_pars_fragment:_m,uv_pars_vertex:ym,uv_vertex:xm,worldpos_vertex:vm,background_vert:Mm,background_frag:bm,backgroundCube_vert:Sm,backgroundCube_frag:Em,cube_vert:wm,cube_frag:Tm,depth_vert:Am,depth_frag:Cm,distanceRGBA_vert:Rm,distanceRGBA_frag:Im,equirect_vert:Pm,equirect_frag:Lm,linedashed_vert:Dm,linedashed_frag:Um,meshbasic_vert:Nm,meshbasic_frag:Fm,meshlambert_vert:Om,meshlambert_frag:Bm,meshmatcap_vert:km,meshmatcap_frag:zm,meshnormal_vert:Vm,meshnormal_frag:Hm,meshphong_vert:Gm,meshphong_frag:$m,meshphysical_vert:Wm,meshphysical_frag:Xm,meshtoon_vert:qm,meshtoon_frag:Ym,points_vert:Zm,points_frag:Jm,shadow_vert:Km,shadow_frag:jm,sprite_vert:Qm,sprite_frag:tg},mt={common:{diffuse:{value:new $t(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new kt},alphaMap:{value:null},alphaMapTransform:{value:new kt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new kt}},envmap:{envMap:{value:null},envMapRotation:{value:new kt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new kt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new kt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new kt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new kt},normalScale:{value:new lt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new kt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new kt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new kt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new kt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new $t(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new $t(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new kt},alphaTest:{value:0},uvTransform:{value:new kt}},sprite:{diffuse:{value:new $t(16777215)},opacity:{value:1},center:{value:new lt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new kt},alphaMap:{value:null},alphaMapTransform:{value:new kt},alphaTest:{value:0}}},_n={basic:{uniforms:Re([mt.common,mt.specularmap,mt.envmap,mt.aomap,mt.lightmap,mt.fog]),vertexShader:Wt.meshbasic_vert,fragmentShader:Wt.meshbasic_frag},lambert:{uniforms:Re([mt.common,mt.specularmap,mt.envmap,mt.aomap,mt.lightmap,mt.emissivemap,mt.bumpmap,mt.normalmap,mt.displacementmap,mt.fog,mt.lights,{emissive:{value:new $t(0)}}]),vertexShader:Wt.meshlambert_vert,fragmentShader:Wt.meshlambert_frag},phong:{uniforms:Re([mt.common,mt.specularmap,mt.envmap,mt.aomap,mt.lightmap,mt.emissivemap,mt.bumpmap,mt.normalmap,mt.displacementmap,mt.fog,mt.lights,{emissive:{value:new $t(0)},specular:{value:new $t(1118481)},shininess:{value:30}}]),vertexShader:Wt.meshphong_vert,fragmentShader:Wt.meshphong_frag},standard:{uniforms:Re([mt.common,mt.envmap,mt.aomap,mt.lightmap,mt.emissivemap,mt.bumpmap,mt.normalmap,mt.displacementmap,mt.roughnessmap,mt.metalnessmap,mt.fog,mt.lights,{emissive:{value:new $t(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Wt.meshphysical_vert,fragmentShader:Wt.meshphysical_frag},toon:{uniforms:Re([mt.common,mt.aomap,mt.lightmap,mt.emissivemap,mt.bumpmap,mt.normalmap,mt.displacementmap,mt.gradientmap,mt.fog,mt.lights,{emissive:{value:new $t(0)}}]),vertexShader:Wt.meshtoon_vert,fragmentShader:Wt.meshtoon_frag},matcap:{uniforms:Re([mt.common,mt.bumpmap,mt.normalmap,mt.displacementmap,mt.fog,{matcap:{value:null}}]),vertexShader:Wt.meshmatcap_vert,fragmentShader:Wt.meshmatcap_frag},points:{uniforms:Re([mt.points,mt.fog]),vertexShader:Wt.points_vert,fragmentShader:Wt.points_frag},dashed:{uniforms:Re([mt.common,mt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Wt.linedashed_vert,fragmentShader:Wt.linedashed_frag},depth:{uniforms:Re([mt.common,mt.displacementmap]),vertexShader:Wt.depth_vert,fragmentShader:Wt.depth_frag},normal:{uniforms:Re([mt.common,mt.bumpmap,mt.normalmap,mt.displacementmap,{opacity:{value:1}}]),vertexShader:Wt.meshnormal_vert,fragmentShader:Wt.meshnormal_frag},sprite:{uniforms:Re([mt.sprite,mt.fog]),vertexShader:Wt.sprite_vert,fragmentShader:Wt.sprite_frag},background:{uniforms:{uvTransform:{value:new kt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Wt.background_vert,fragmentShader:Wt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new kt}},vertexShader:Wt.backgroundCube_vert,fragmentShader:Wt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Wt.cube_vert,fragmentShader:Wt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Wt.equirect_vert,fragmentShader:Wt.equirect_frag},distanceRGBA:{uniforms:Re([mt.common,mt.displacementmap,{referencePosition:{value:new B},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Wt.distanceRGBA_vert,fragmentShader:Wt.distanceRGBA_frag},shadow:{uniforms:Re([mt.lights,mt.fog,{color:{value:new $t(0)},opacity:{value:1}}]),vertexShader:Wt.shadow_vert,fragmentShader:Wt.shadow_frag}};_n.physical={uniforms:Re([_n.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new kt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new kt},clearcoatNormalScale:{value:new lt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new kt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new kt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new kt},sheen:{value:0},sheenColor:{value:new $t(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new kt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new kt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new kt},transmissionSamplerSize:{value:new lt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new kt},attenuationDistance:{value:0},attenuationColor:{value:new $t(0)},specularColor:{value:new $t(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new kt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new kt},anisotropyVector:{value:new lt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new kt}}]),vertexShader:Wt.meshphysical_vert,fragmentShader:Wt.meshphysical_frag};var so={r:0,b:0,g:0},Mi=new ln,eg=new le;function ng(i,t,e,n,s,r,a){let o=new $t(0),l=r===!0?0:1,c,d,h=null,f=0,p=null;function _(y){let g=y.isScene===!0?y.background:null;return g&&g.isTexture&&(g=(y.backgroundBlurriness>0?e:t).get(g)),g}function S(y){let g=!1,w=_(y);w===null?u(o,l):w&&w.isColor&&(u(w,1),g=!0);let v=i.xr.getEnvironmentBlendMode();v==="additive"?n.buffers.color.setClear(0,0,0,1,a):v==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||g)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(y,g){let w=_(g);w&&(w.isCubeTexture||w.mapping===sr)?(d===void 0&&(d=new Ce(new Ji(1,1,1),new cn({name:"BackgroundCubeMaterial",uniforms:vi(_n.backgroundCube.uniforms),vertexShader:_n.backgroundCube.vertexShader,fragmentShader:_n.backgroundCube.fragmentShader,side:De,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),d.geometry.deleteAttribute("normal"),d.geometry.deleteAttribute("uv"),d.onBeforeRender=function(v,I,L){this.matrixWorld.copyPosition(L.matrixWorld)},Object.defineProperty(d.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(d)),Mi.copy(g.backgroundRotation),Mi.x*=-1,Mi.y*=-1,Mi.z*=-1,w.isCubeTexture&&w.isRenderTargetTexture===!1&&(Mi.y*=-1,Mi.z*=-1),d.material.uniforms.envMap.value=w,d.material.uniforms.flipEnvMap.value=w.isCubeTexture&&w.isRenderTargetTexture===!1?-1:1,d.material.uniforms.backgroundBlurriness.value=g.backgroundBlurriness,d.material.uniforms.backgroundIntensity.value=g.backgroundIntensity,d.material.uniforms.backgroundRotation.value.setFromMatrix4(eg.makeRotationFromEuler(Mi)),d.material.toneMapped=jt.getTransfer(w.colorSpace)!==ie,(h!==w||f!==w.version||p!==i.toneMapping)&&(d.material.needsUpdate=!0,h=w,f=w.version,p=i.toneMapping),d.layers.enableAll(),y.unshift(d,d.geometry,d.material,0,0,null)):w&&w.isTexture&&(c===void 0&&(c=new Ce(new mi(2,2),new cn({name:"BackgroundMaterial",uniforms:vi(_n.background.uniforms),vertexShader:_n.background.vertexShader,fragmentShader:_n.background.fragmentShader,side:An,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=w,c.material.uniforms.backgroundIntensity.value=g.backgroundIntensity,c.material.toneMapped=jt.getTransfer(w.colorSpace)!==ie,w.matrixAutoUpdate===!0&&w.updateMatrix(),c.material.uniforms.uvTransform.value.copy(w.matrix),(h!==w||f!==w.version||p!==i.toneMapping)&&(c.material.needsUpdate=!0,h=w,f=w.version,p=i.toneMapping),c.layers.enableAll(),y.unshift(c,c.geometry,c.material,0,0,null))}function u(y,g){y.getRGB(so,Rl(i)),n.buffers.color.setClear(so.r,so.g,so.b,g,a)}function E(){d!==void 0&&(d.geometry.dispose(),d.material.dispose(),d=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(y,g=1){o.set(y),l=g,u(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(y){l=y,u(o,l)},render:S,addToRenderList:m,dispose:E}}function ig(i,t){let e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=f(null),r=s,a=!1;function o(x,R,T,C,U){let N=!1,O=h(C,T,R);r!==O&&(r=O,c(r.object)),N=p(x,C,T,U),N&&_(x,C,T,U),U!==null&&t.update(U,i.ELEMENT_ARRAY_BUFFER),(N||a)&&(a=!1,g(x,R,T,C),U!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(U).buffer))}function l(){return i.createVertexArray()}function c(x){return i.bindVertexArray(x)}function d(x){return i.deleteVertexArray(x)}function h(x,R,T){let C=T.wireframe===!0,U=n[x.id];U===void 0&&(U={},n[x.id]=U);let N=U[R.id];N===void 0&&(N={},U[R.id]=N);let O=N[C];return O===void 0&&(O=f(l()),N[C]=O),O}function f(x){let R=[],T=[],C=[];for(let U=0;U<e;U++)R[U]=0,T[U]=0,C[U]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:R,enabledAttributes:T,attributeDivisors:C,object:x,attributes:{},index:null}}function p(x,R,T,C){let U=r.attributes,N=R.attributes,O=0,$=T.getAttributes();for(let V in $)if($[V].location>=0){let ht=U[V],gt=N[V];if(gt===void 0&&(V==="instanceMatrix"&&x.instanceMatrix&&(gt=x.instanceMatrix),V==="instanceColor"&&x.instanceColor&&(gt=x.instanceColor)),ht===void 0||ht.attribute!==gt||gt&&ht.data!==gt.data)return!0;O++}return r.attributesNum!==O||r.index!==C}function _(x,R,T,C){let U={},N=R.attributes,O=0,$=T.getAttributes();for(let V in $)if($[V].location>=0){let ht=N[V];ht===void 0&&(V==="instanceMatrix"&&x.instanceMatrix&&(ht=x.instanceMatrix),V==="instanceColor"&&x.instanceColor&&(ht=x.instanceColor));let gt={};gt.attribute=ht,ht&&ht.data&&(gt.data=ht.data),U[V]=gt,O++}r.attributes=U,r.attributesNum=O,r.index=C}function S(){let x=r.newAttributes;for(let R=0,T=x.length;R<T;R++)x[R]=0}function m(x){u(x,0)}function u(x,R){let T=r.newAttributes,C=r.enabledAttributes,U=r.attributeDivisors;T[x]=1,C[x]===0&&(i.enableVertexAttribArray(x),C[x]=1),U[x]!==R&&(i.vertexAttribDivisor(x,R),U[x]=R)}function E(){let x=r.newAttributes,R=r.enabledAttributes;for(let T=0,C=R.length;T<C;T++)R[T]!==x[T]&&(i.disableVertexAttribArray(T),R[T]=0)}function y(x,R,T,C,U,N,O){O===!0?i.vertexAttribIPointer(x,R,T,U,N):i.vertexAttribPointer(x,R,T,C,U,N)}function g(x,R,T,C){S();let U=C.attributes,N=T.getAttributes(),O=R.defaultAttributeValues;for(let $ in N){let V=N[$];if(V.location>=0){let tt=U[$];if(tt===void 0&&($==="instanceMatrix"&&x.instanceMatrix&&(tt=x.instanceMatrix),$==="instanceColor"&&x.instanceColor&&(tt=x.instanceColor)),tt!==void 0){let ht=tt.normalized,gt=tt.itemSize,Lt=t.get(tt);if(Lt===void 0)continue;let Xt=Lt.buffer,Zt=Lt.type,vt=Lt.bytesPerElement,H=Zt===i.INT||Zt===i.UNSIGNED_INT||tt.gpuType===Ea;if(tt.isInterleavedBufferAttribute){let Z=tt.data,pt=Z.stride,St=tt.offset;if(Z.isInstancedInterleavedBuffer){for(let Mt=0;Mt<V.locationSize;Mt++)u(V.location+Mt,Z.meshPerAttribute);x.isInstancedMesh!==!0&&C._maxInstanceCount===void 0&&(C._maxInstanceCount=Z.meshPerAttribute*Z.count)}else for(let Mt=0;Mt<V.locationSize;Mt++)m(V.location+Mt);i.bindBuffer(i.ARRAY_BUFFER,Xt);for(let Mt=0;Mt<V.locationSize;Mt++)y(V.location+Mt,gt/V.locationSize,Zt,ht,pt*vt,(St+gt/V.locationSize*Mt)*vt,H)}else{if(tt.isInstancedBufferAttribute){for(let Z=0;Z<V.locationSize;Z++)u(V.location+Z,tt.meshPerAttribute);x.isInstancedMesh!==!0&&C._maxInstanceCount===void 0&&(C._maxInstanceCount=tt.meshPerAttribute*tt.count)}else for(let Z=0;Z<V.locationSize;Z++)m(V.location+Z);i.bindBuffer(i.ARRAY_BUFFER,Xt);for(let Z=0;Z<V.locationSize;Z++)y(V.location+Z,gt/V.locationSize,Zt,ht,gt*vt,gt/V.locationSize*Z*vt,H)}}else if(O!==void 0){let ht=O[$];if(ht!==void 0)switch(ht.length){case 2:i.vertexAttrib2fv(V.location,ht);break;case 3:i.vertexAttrib3fv(V.location,ht);break;case 4:i.vertexAttrib4fv(V.location,ht);break;default:i.vertexAttrib1fv(V.location,ht)}}}}E()}function w(){L();for(let x in n){let R=n[x];for(let T in R){let C=R[T];for(let U in C)d(C[U].object),delete C[U];delete R[T]}delete n[x]}}function v(x){if(n[x.id]===void 0)return;let R=n[x.id];for(let T in R){let C=R[T];for(let U in C)d(C[U].object),delete C[U];delete R[T]}delete n[x.id]}function I(x){for(let R in n){let T=n[R];if(T[x.id]===void 0)continue;let C=T[x.id];for(let U in C)d(C[U].object),delete C[U];delete T[x.id]}}function L(){M(),a=!0,r!==s&&(r=s,c(r.object))}function M(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:L,resetDefaultState:M,dispose:w,releaseStatesOfGeometry:v,releaseStatesOfProgram:I,initAttributes:S,enableAttribute:m,disableUnusedAttributes:E}}function sg(i,t,e){let n;function s(c){n=c}function r(c,d){i.drawArrays(n,c,d),e.update(d,n,1)}function a(c,d,h){h!==0&&(i.drawArraysInstanced(n,c,d,h),e.update(d,n,h))}function o(c,d,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,d,0,h);let p=0;for(let _=0;_<h;_++)p+=d[_];e.update(p,n,1)}function l(c,d,h,f){if(h===0)return;let p=t.get("WEBGL_multi_draw");if(p===null)for(let _=0;_<c.length;_++)a(c[_],d[_],f[_]);else{p.multiDrawArraysInstancedWEBGL(n,c,0,d,0,f,0,h);let _=0;for(let S=0;S<h;S++)_+=d[S]*f[S];e.update(_,n,1)}}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function rg(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let I=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(I.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(I){return!(I!==en&&n.convert(I)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(I){let L=I===os&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(I!==hn&&n.convert(I)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&I!==gn&&!L)}function l(I){if(I==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";I="mediump"}return I==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",d=l(c);d!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",d,"instead."),c=d);let h=e.logarithmicDepthBuffer===!0,f=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),p=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),S=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),u=i.getParameter(i.MAX_VERTEX_ATTRIBS),E=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),y=i.getParameter(i.MAX_VARYING_VECTORS),g=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),w=_>0,v=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:h,reversedDepthBuffer:f,maxTextures:p,maxVertexTextures:_,maxTextureSize:S,maxCubemapSize:m,maxAttributes:u,maxVertexUniforms:E,maxVaryings:y,maxFragmentUniforms:g,vertexTextures:w,maxSamples:v}}function ag(i){let t=this,e=null,n=0,s=!1,r=!1,a=new Je,o=new kt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f){let p=h.length!==0||f||n!==0||s;return s=f,n=h.length,p},this.beginShadows=function(){r=!0,d(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,f){e=d(h,f,0)},this.setState=function(h,f,p){let _=h.clippingPlanes,S=h.clipIntersection,m=h.clipShadows,u=i.get(h);if(!s||_===null||_.length===0||r&&!m)r?d(null):c();else{let E=r?0:n,y=E*4,g=u.clippingState||null;l.value=g,g=d(_,f,y,p);for(let w=0;w!==y;++w)g[w]=e[w];u.clippingState=g,this.numIntersection=S?this.numPlanes:0,this.numPlanes+=E}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function d(h,f,p,_){let S=h!==null?h.length:0,m=null;if(S!==0){if(m=l.value,_!==!0||m===null){let u=p+S*4,E=f.matrixWorldInverse;o.getNormalMatrix(E),(m===null||m.length<u)&&(m=new Float32Array(u));for(let y=0,g=p;y!==S;++y,g+=4)a.copy(h[y]).applyMatrix4(E,o),a.normal.toArray(m,g),m[g+3]=a.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=S,t.numIntersection=0,m}}function og(i){let t=new WeakMap;function e(a,o){return o===Ma?a.mapping=_i:o===ba&&(a.mapping=yi),a}function n(a){if(a&&a.isTexture){let o=a.mapping;if(o===Ma||o===ba)if(t.has(a)){let l=t.get(a).texture;return e(l,a.mapping)}else{let l=a.image;if(l&&l.height>0){let c=new Xr(l.height);return c.fromEquirectangularTexture(i,a),t.set(a,c),a.addEventListener("dispose",s),e(c.texture,a.mapping)}else return null}}return a}function s(a){let o=a.target;o.removeEventListener("dispose",s);let l=t.get(o);l!==void 0&&(t.delete(o),l.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}var us=4,Bh=[.125,.215,.35,.446,.526,.582],Ei=20,Ul=new tr,kh=new $t,Nl=null,Fl=0,Ol=0,Bl=!1,Si=(1+Math.sqrt(5))/2,hs=1/Si,zh=[new B(-Si,hs,0),new B(Si,hs,0),new B(-hs,0,Si),new B(hs,0,Si),new B(0,Si,-hs),new B(0,Si,hs),new B(-1,1,-1),new B(1,1,-1),new B(-1,1,1),new B(1,1,1)],lg=new B,oo=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100,r={}){let{size:a=256,position:o=lg}=r;Nl=this._renderer.getRenderTarget(),Fl=this._renderer.getActiveCubeFace(),Ol=this._renderer.getActiveMipmapLevel(),Bl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,n,s,l,o),e>0&&this._blur(l,0,0,e),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Gh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Hh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Nl,Fl,Ol),this._renderer.xr.enabled=Bl,t.scissorTest=!1,ro(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===_i||t.mapping===yi?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Nl=this._renderer.getRenderTarget(),Fl=this._renderer.getActiveCubeFace(),Ol=this._renderer.getActiveMipmapLevel(),Bl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:on,minFilter:on,generateMipmaps:!1,type:os,format:en,colorSpace:hi,depthBuffer:!1},s=Vh(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Vh(t,e,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=cg(r)),this._blurMaterial=hg(r,t,e)}return s}_compileMaterial(t){let e=new Ce(this._lodPlanes[0],t);this._renderer.compile(e,Ul)}_sceneToCubeUV(t,e,n,s,r){let l=new Ee(90,1,e,n),c=[1,-1,1,1,1,1],d=[1,1,1,-1,-1,-1],h=this._renderer,f=h.autoClear,p=h.toneMapping;h.getClearColor(kh),h.toneMapping=In,h.autoClear=!1,h.state.buffers.depth.getReversed()&&(h.setRenderTarget(s),h.clearDepth(),h.setRenderTarget(null));let S=new Ds({name:"PMREM.Background",side:De,depthWrite:!1,depthTest:!1}),m=new Ce(new Ji,S),u=!1,E=t.background;E?E.isColor&&(S.color.copy(E),t.background=null,u=!0):(S.color.copy(kh),u=!0);for(let y=0;y<6;y++){let g=y%3;g===0?(l.up.set(0,c[y],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+d[y],r.y,r.z)):g===1?(l.up.set(0,0,c[y]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+d[y],r.z)):(l.up.set(0,c[y],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+d[y]));let w=this._cubeSize;ro(s,g*w,y>2?w:0,w,w),h.setRenderTarget(s),u&&h.render(m,l),h.render(t,l)}m.geometry.dispose(),m.material.dispose(),h.toneMapping=p,h.autoClear=f,t.background=E}_textureToCubeUV(t,e){let n=this._renderer,s=t.mapping===_i||t.mapping===yi;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Gh()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Hh());let r=s?this._cubemapMaterial:this._equirectMaterial,a=new Ce(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=t;let l=this._cubeSize;ro(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(a,Ul)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let s=this._lodPlanes.length;for(let r=1;r<s;r++){let a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=zh[(s-r-1)%zh.length];this._blur(t,r-1,r,a,o)}e.autoClear=n}_blur(t,e,n,s,r){let a=this._pingPongRenderTarget;this._halfBlur(t,a,e,n,s,"latitudinal",r),this._halfBlur(a,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,a,o){let l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let d=3,h=new Ce(this._lodPlanes[s],c),f=c.uniforms,p=this._sizeLods[n]-1,_=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*Ei-1),S=r/_,m=isFinite(r)?1+Math.floor(d*S):Ei;m>Ei&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Ei}`);let u=[],E=0;for(let I=0;I<Ei;++I){let L=I/S,M=Math.exp(-L*L/2);u.push(M),I===0?E+=M:I<m&&(E+=2*M)}for(let I=0;I<u.length;I++)u[I]=u[I]/E;f.envMap.value=t.texture,f.samples.value=m,f.weights.value=u,f.latitudinal.value=a==="latitudinal",o&&(f.poleAxis.value=o);let{_lodMax:y}=this;f.dTheta.value=_,f.mipInt.value=y-n;let g=this._sizeLods[s],w=3*g*(s>y-us?s-y+us:0),v=4*(this._cubeSize-g);ro(e,w,v,3*g,2*g),l.setRenderTarget(e),l.render(h,Ul)}};function cg(i){let t=[],e=[],n=[],s=i,r=i-us+1+Bh.length;for(let a=0;a<r;a++){let o=Math.pow(2,s);e.push(o);let l=1/o;a>i-us?l=Bh[a-i+us-1]:a===0&&(l=0),n.push(l);let c=1/(o-2),d=-c,h=1+c,f=[d,d,h,d,h,h,d,d,h,h,d,h],p=6,_=6,S=3,m=2,u=1,E=new Float32Array(S*_*p),y=new Float32Array(m*_*p),g=new Float32Array(u*_*p);for(let v=0;v<p;v++){let I=v%3*2/3-1,L=v>2?0:-1,M=[I,L,0,I+2/3,L,0,I+2/3,L+1,0,I,L,0,I+2/3,L+1,0,I,L+1,0];E.set(M,S*_*v),y.set(f,m*_*v);let x=[v,v,v,v,v,v];g.set(x,u*_*v)}let w=new Cn;w.setAttribute("position",new Ge(E,S)),w.setAttribute("uv",new Ge(y,m)),w.setAttribute("faceIndex",new Ge(g,u)),t.push(w),s>us&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function Vh(i,t,e){let n=new pn(i,t,e);return n.texture.mapping=sr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function ro(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function hg(i,t,e){let n=new Float32Array(Ei),s=new B(0,1,0);return new cn({name:"SphericalGaussianBlur",defines:{n:Ei,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Yl(),fragmentShader:`

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
		`,blending:Rn,depthTest:!1,depthWrite:!1})}function Hh(){return new cn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Yl(),fragmentShader:`

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
		`,blending:Rn,depthTest:!1,depthWrite:!1})}function Gh(){return new cn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Yl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Rn,depthTest:!1,depthWrite:!1})}function Yl(){return`

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
	`}function ug(i){let t=new WeakMap,e=null;function n(o){if(o&&o.isTexture){let l=o.mapping,c=l===Ma||l===ba,d=l===_i||l===yi;if(c||d){let h=t.get(o),f=h!==void 0?h.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==f)return e===null&&(e=new oo(i)),h=c?e.fromEquirectangular(o,h):e.fromCubemap(o,h),h.texture.pmremVersion=o.pmremVersion,t.set(o,h),h.texture;if(h!==void 0)return h.texture;{let p=o.image;return c&&p&&p.height>0||d&&p&&s(p)?(e===null&&(e=new oo(i)),h=c?e.fromEquirectangular(o):e.fromCubemap(o),h.texture.pmremVersion=o.pmremVersion,t.set(o,h),o.addEventListener("dispose",r),h.texture):null}}}return o}function s(o){let l=0,c=6;for(let d=0;d<c;d++)o[d]!==void 0&&l++;return l===c}function r(o){let l=o.target;l.removeEventListener("dispose",r);let c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:a}}function dg(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let s=e(n);return s===null&&Xi("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function fg(i,t,e,n){let s={},r=new WeakMap;function a(h){let f=h.target;f.index!==null&&t.remove(f.index);for(let _ in f.attributes)t.remove(f.attributes[_]);f.removeEventListener("dispose",a),delete s[f.id];let p=r.get(f);p&&(t.remove(p),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function o(h,f){return s[f.id]===!0||(f.addEventListener("dispose",a),s[f.id]=!0,e.memory.geometries++),f}function l(h){let f=h.attributes;for(let p in f)t.update(f[p],i.ARRAY_BUFFER)}function c(h){let f=[],p=h.index,_=h.attributes.position,S=0;if(p!==null){let E=p.array;S=p.version;for(let y=0,g=E.length;y<g;y+=3){let w=E[y+0],v=E[y+1],I=E[y+2];f.push(w,v,v,I,I,w)}}else if(_!==void 0){let E=_.array;S=_.version;for(let y=0,g=E.length/3-1;y<g;y+=3){let w=y+0,v=y+1,I=y+2;f.push(w,v,v,I,I,w)}}else return;let m=new(Cl(f)?Ns:Us)(f,1);m.version=S;let u=r.get(h);u&&t.remove(u),r.set(h,m)}function d(h){let f=r.get(h);if(f){let p=h.index;p!==null&&f.version<p.version&&c(h)}else c(h);return r.get(h)}return{get:o,update:l,getWireframeAttribute:d}}function pg(i,t,e){let n;function s(f){n=f}let r,a;function o(f){r=f.type,a=f.bytesPerElement}function l(f,p){i.drawElements(n,p,r,f*a),e.update(p,n,1)}function c(f,p,_){_!==0&&(i.drawElementsInstanced(n,p,r,f*a,_),e.update(p,n,_))}function d(f,p,_){if(_===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,p,0,r,f,0,_);let m=0;for(let u=0;u<_;u++)m+=p[u];e.update(m,n,1)}function h(f,p,_,S){if(_===0)return;let m=t.get("WEBGL_multi_draw");if(m===null)for(let u=0;u<f.length;u++)c(f[u]/a,p[u],S[u]);else{m.multiDrawElementsInstancedWEBGL(n,p,0,r,f,0,S,0,_);let u=0;for(let E=0;E<_;E++)u+=p[E]*S[E];e.update(u,n,1)}}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=d,this.renderMultiDrawInstances=h}function mg(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(e.calls++,a){case i.TRIANGLES:e.triangles+=o*(r/3);break;case i.LINES:e.lines+=o*(r/2);break;case i.LINE_STRIP:e.lines+=o*(r-1);break;case i.LINE_LOOP:e.lines+=o*r;break;case i.POINTS:e.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function gg(i,t,e){let n=new WeakMap,s=new pe;function r(a,o,l){let c=a.morphTargetInfluences,d=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,h=d!==void 0?d.length:0,f=n.get(o);if(f===void 0||f.count!==h){let M=function(){I.dispose(),n.delete(o),o.removeEventListener("dispose",M)};f!==void 0&&f.texture.dispose();let p=o.morphAttributes.position!==void 0,_=o.morphAttributes.normal!==void 0,S=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],u=o.morphAttributes.normal||[],E=o.morphAttributes.color||[],y=0;p===!0&&(y=1),_===!0&&(y=2),S===!0&&(y=3);let g=o.attributes.position.count*y,w=1;g>t.maxTextureSize&&(w=Math.ceil(g/t.maxTextureSize),g=t.maxTextureSize);let v=new Float32Array(g*w*4*h),I=new Ls(v,g,w,h);I.type=gn,I.needsUpdate=!0;let L=y*4;for(let x=0;x<h;x++){let R=m[x],T=u[x],C=E[x],U=g*w*4*x;for(let N=0;N<R.count;N++){let O=N*L;p===!0&&(s.fromBufferAttribute(R,N),v[U+O+0]=s.x,v[U+O+1]=s.y,v[U+O+2]=s.z,v[U+O+3]=0),_===!0&&(s.fromBufferAttribute(T,N),v[U+O+4]=s.x,v[U+O+5]=s.y,v[U+O+6]=s.z,v[U+O+7]=0),S===!0&&(s.fromBufferAttribute(C,N),v[U+O+8]=s.x,v[U+O+9]=s.y,v[U+O+10]=s.z,v[U+O+11]=C.itemSize===4?s.w:1)}}f={count:h,texture:I,size:new lt(g,w)},n.set(o,f),o.addEventListener("dispose",M)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,e);else{let p=0;for(let S=0;S<c.length;S++)p+=c[S];let _=o.morphTargetsRelative?1:1-p;l.getUniforms().setValue(i,"morphTargetBaseInfluence",_),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",f.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",f.size)}return{update:r}}function _g(i,t,e,n){let s=new WeakMap;function r(l){let c=n.render.frame,d=l.geometry,h=t.get(l,d);if(s.get(h)!==c&&(t.update(h),s.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),s.get(l)!==c&&(e.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){let f=l.skeleton;s.get(f)!==c&&(f.update(),s.set(f,c))}return h}function a(){s=new WeakMap}function o(l){let c=l.target;c.removeEventListener("dispose",o),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:a}}var lu=new Fe,$h=new zs(1,1),cu=new Ls,hu=new $r,uu=new Os,Wh=[],Xh=[],qh=new Float32Array(16),Yh=new Float32Array(9),Zh=new Float32Array(4);function fs(i,t,e){let n=i[0];if(n<=0||n>0)return i;let s=t*e,r=Wh[s];if(r===void 0&&(r=new Float32Array(s),Wh[s]=r),t!==0){n.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,i[a].toArray(r,o)}return r}function ye(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function xe(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function co(i,t){let e=Xh[t];e===void 0&&(e=new Int32Array(t),Xh[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function yg(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function xg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ye(e,t))return;i.uniform2fv(this.addr,t),xe(e,t)}}function vg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(ye(e,t))return;i.uniform3fv(this.addr,t),xe(e,t)}}function Mg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ye(e,t))return;i.uniform4fv(this.addr,t),xe(e,t)}}function bg(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(ye(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),xe(e,t)}else{if(ye(e,n))return;Zh.set(n),i.uniformMatrix2fv(this.addr,!1,Zh),xe(e,n)}}function Sg(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(ye(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),xe(e,t)}else{if(ye(e,n))return;Yh.set(n),i.uniformMatrix3fv(this.addr,!1,Yh),xe(e,n)}}function Eg(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(ye(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),xe(e,t)}else{if(ye(e,n))return;qh.set(n),i.uniformMatrix4fv(this.addr,!1,qh),xe(e,n)}}function wg(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function Tg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ye(e,t))return;i.uniform2iv(this.addr,t),xe(e,t)}}function Ag(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ye(e,t))return;i.uniform3iv(this.addr,t),xe(e,t)}}function Cg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ye(e,t))return;i.uniform4iv(this.addr,t),xe(e,t)}}function Rg(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function Ig(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ye(e,t))return;i.uniform2uiv(this.addr,t),xe(e,t)}}function Pg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ye(e,t))return;i.uniform3uiv(this.addr,t),xe(e,t)}}function Lg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ye(e,t))return;i.uniform4uiv(this.addr,t),xe(e,t)}}function Dg(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?($h.compareFunction=wl,r=$h):r=lu,e.setTexture2D(t||r,s)}function Ug(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||hu,s)}function Ng(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||uu,s)}function Fg(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||cu,s)}function Og(i){switch(i){case 5126:return yg;case 35664:return xg;case 35665:return vg;case 35666:return Mg;case 35674:return bg;case 35675:return Sg;case 35676:return Eg;case 5124:case 35670:return wg;case 35667:case 35671:return Tg;case 35668:case 35672:return Ag;case 35669:case 35673:return Cg;case 5125:return Rg;case 36294:return Ig;case 36295:return Pg;case 36296:return Lg;case 35678:case 36198:case 36298:case 36306:case 35682:return Dg;case 35679:case 36299:case 36307:return Ug;case 35680:case 36300:case 36308:case 36293:return Ng;case 36289:case 36303:case 36311:case 36292:return Fg}}function Bg(i,t){i.uniform1fv(this.addr,t)}function kg(i,t){let e=fs(t,this.size,2);i.uniform2fv(this.addr,e)}function zg(i,t){let e=fs(t,this.size,3);i.uniform3fv(this.addr,e)}function Vg(i,t){let e=fs(t,this.size,4);i.uniform4fv(this.addr,e)}function Hg(i,t){let e=fs(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function Gg(i,t){let e=fs(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function $g(i,t){let e=fs(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function Wg(i,t){i.uniform1iv(this.addr,t)}function Xg(i,t){i.uniform2iv(this.addr,t)}function qg(i,t){i.uniform3iv(this.addr,t)}function Yg(i,t){i.uniform4iv(this.addr,t)}function Zg(i,t){i.uniform1uiv(this.addr,t)}function Jg(i,t){i.uniform2uiv(this.addr,t)}function Kg(i,t){i.uniform3uiv(this.addr,t)}function jg(i,t){i.uniform4uiv(this.addr,t)}function Qg(i,t,e){let n=this.cache,s=t.length,r=co(e,s);ye(n,r)||(i.uniform1iv(this.addr,r),xe(n,r));for(let a=0;a!==s;++a)e.setTexture2D(t[a]||lu,r[a])}function t0(i,t,e){let n=this.cache,s=t.length,r=co(e,s);ye(n,r)||(i.uniform1iv(this.addr,r),xe(n,r));for(let a=0;a!==s;++a)e.setTexture3D(t[a]||hu,r[a])}function e0(i,t,e){let n=this.cache,s=t.length,r=co(e,s);ye(n,r)||(i.uniform1iv(this.addr,r),xe(n,r));for(let a=0;a!==s;++a)e.setTextureCube(t[a]||uu,r[a])}function n0(i,t,e){let n=this.cache,s=t.length,r=co(e,s);ye(n,r)||(i.uniform1iv(this.addr,r),xe(n,r));for(let a=0;a!==s;++a)e.setTexture2DArray(t[a]||cu,r[a])}function i0(i){switch(i){case 5126:return Bg;case 35664:return kg;case 35665:return zg;case 35666:return Vg;case 35674:return Hg;case 35675:return Gg;case 35676:return $g;case 5124:case 35670:return Wg;case 35667:case 35671:return Xg;case 35668:case 35672:return qg;case 35669:case 35673:return Yg;case 5125:return Zg;case 36294:return Jg;case 36295:return Kg;case 36296:return jg;case 35678:case 36198:case 36298:case 36306:case 35682:return Qg;case 35679:case 36299:case 36307:return t0;case 35680:case 36300:case 36308:case 36293:return e0;case 36289:case 36303:case 36311:case 36292:return n0}}var zl=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Og(e.type)}},Vl=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=i0(e.type)}},Hl=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(t,e[o.id],n)}}},kl=/(\w+)(\])?(\[|\.)?/g;function Jh(i,t){i.seq.push(t),i.map[t.id]=t}function s0(i,t,e){let n=i.name,s=n.length;for(kl.lastIndex=0;;){let r=kl.exec(n),a=kl.lastIndex,o=r[1],l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){Jh(e,c===void 0?new zl(o,i,t):new Vl(o,i,t));break}else{let h=e.map[o];h===void 0&&(h=new Hl(o),Jh(e,h)),e=h}}}var ds=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){let r=t.getActiveUniform(e,s),a=t.getUniformLocation(e,r.name);s0(r,a,this)}}setValue(t,e,n,s){let r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){let s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,a=e.length;r!==a;++r){let o=e[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,s)}}static seqWithValue(t,e){let n=[];for(let s=0,r=t.length;s!==r;++s){let a=t[s];a.id in e&&n.push(a)}return n}};function Kh(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}var r0=37297,a0=0;function o0(i,t){let e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=s;a<r;a++){let o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}var jh=new kt;function l0(i){jt._getMatrix(jh,jt.workingColorSpace,i);let t=`mat3( ${jh.elements.map(e=>e.toFixed(4))} )`;switch(jt.getTransfer(i)){case Is:return[t,"LinearTransferOETF"];case ie:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function Qh(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),r=(i.getShaderInfoLog(t)||"").trim();if(n&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let o=parseInt(a[1]);return e.toUpperCase()+`

`+r+`

`+o0(i.getShaderSource(t),o)}else return r}function c0(i,t){let e=l0(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function h0(i,t){let e;switch(t){case dh:e="Linear";break;case fh:e="Reinhard";break;case ph:e="Cineon";break;case va:e="ACESFilmic";break;case gh:e="AgX";break;case _h:e="Neutral";break;case mh:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var ao=new B;function u0(){jt.getLuminanceCoefficients(ao);let i=ao.x.toFixed(4),t=ao.y.toFixed(4),e=ao.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function d0(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ur).join(`
`)}function f0(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function p0(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(t,s),a=r.name,o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:i.getAttribLocation(t,a),locationSize:o}}return e}function ur(i){return i!==""}function tu(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function eu(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var m0=/^[ \t]*#include +<([\w\d./]+)>/gm;function Gl(i){return i.replace(m0,_0)}var g0=new Map;function _0(i,t){let e=Wt[t];if(e===void 0){let n=g0.get(t);if(n!==void 0)e=Wt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Gl(e)}var y0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function nu(i){return i.replace(y0,x0)}function x0(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function iu(i){let t=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function v0(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===hl?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===da?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===mn&&(t="SHADOWMAP_TYPE_VSM"),t}function M0(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case _i:case yi:t="ENVMAP_TYPE_CUBE";break;case sr:t="ENVMAP_TYPE_CUBE_UV";break}return t}function b0(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case yi:t="ENVMAP_MODE_REFRACTION";break}return t}function S0(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case pl:t="ENVMAP_BLENDING_MULTIPLY";break;case hh:t="ENVMAP_BLENDING_MIX";break;case uh:t="ENVMAP_BLENDING_ADD";break}return t}function E0(i){let t=i.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function w0(i,t,e,n){let s=i.getContext(),r=e.defines,a=e.vertexShader,o=e.fragmentShader,l=v0(e),c=M0(e),d=b0(e),h=S0(e),f=E0(e),p=d0(e),_=f0(r),S=s.createProgram(),m,u,E=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(ur).join(`
`),m.length>0&&(m+=`
`),u=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(ur).join(`
`),u.length>0&&(u+=`
`)):(m=[iu(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+d:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ur).join(`
`),u=[iu(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+d:"",e.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==In?"#define TONE_MAPPING":"",e.toneMapping!==In?Wt.tonemapping_pars_fragment:"",e.toneMapping!==In?h0("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Wt.colorspace_pars_fragment,c0("linearToOutputTexel",e.outputColorSpace),u0(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(ur).join(`
`)),a=Gl(a),a=tu(a,e),a=eu(a,e),o=Gl(o),o=tu(o,e),o=eu(o,e),a=nu(a),o=nu(o),e.isRawShaderMaterial!==!0&&(E=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,u=["#define varying in",e.glslVersion===Tl?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Tl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+u);let y=E+m+a,g=E+u+o,w=Kh(s,s.VERTEX_SHADER,y),v=Kh(s,s.FRAGMENT_SHADER,g);s.attachShader(S,w),s.attachShader(S,v),e.index0AttributeName!==void 0?s.bindAttribLocation(S,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(S,0,"position"),s.linkProgram(S);function I(R){if(i.debug.checkShaderErrors){let T=s.getProgramInfoLog(S)||"",C=s.getShaderInfoLog(w)||"",U=s.getShaderInfoLog(v)||"",N=T.trim(),O=C.trim(),$=U.trim(),V=!0,tt=!0;if(s.getProgramParameter(S,s.LINK_STATUS)===!1)if(V=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,S,w,v);else{let ht=Qh(s,w,"vertex"),gt=Qh(s,v,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(S,s.VALIDATE_STATUS)+`

Material Name: `+R.name+`
Material Type: `+R.type+`

Program Info Log: `+N+`
`+ht+`
`+gt)}else N!==""?console.warn("THREE.WebGLProgram: Program Info Log:",N):(O===""||$==="")&&(tt=!1);tt&&(R.diagnostics={runnable:V,programLog:N,vertexShader:{log:O,prefix:m},fragmentShader:{log:$,prefix:u}})}s.deleteShader(w),s.deleteShader(v),L=new ds(s,S),M=p0(s,S)}let L;this.getUniforms=function(){return L===void 0&&I(this),L};let M;this.getAttributes=function(){return M===void 0&&I(this),M};let x=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return x===!1&&(x=s.getProgramParameter(S,r0)),x},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(S),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=a0++,this.cacheKey=t,this.usedTimes=1,this.program=S,this.vertexShader=w,this.fragmentShader=v,this}var T0=0,$l=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(t);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new Wl(t),e.set(t,n)),n}},Wl=class{constructor(t){this.id=T0++,this.code=t,this.usedTimes=0}};function A0(i,t,e,n,s,r,a){let o=new Zi,l=new $l,c=new Set,d=[],h=s.logarithmicDepthBuffer,f=s.vertexTextures,p=s.precision,_={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function S(M){return c.add(M),M===0?"uv":`uv${M}`}function m(M,x,R,T,C){let U=T.fog,N=C.geometry,O=M.isMeshStandardMaterial?T.environment:null,$=(M.isMeshStandardMaterial?e:t).get(M.envMap||O),V=$&&$.mapping===sr?$.image.height:null,tt=_[M.type];M.precision!==null&&(p=s.getMaxPrecision(M.precision),p!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",p,"instead."));let ht=N.morphAttributes.position||N.morphAttributes.normal||N.morphAttributes.color,gt=ht!==void 0?ht.length:0,Lt=0;N.morphAttributes.position!==void 0&&(Lt=1),N.morphAttributes.normal!==void 0&&(Lt=2),N.morphAttributes.color!==void 0&&(Lt=3);let Xt,Zt,vt,H;if(tt){let ne=_n[tt];Xt=ne.vertexShader,Zt=ne.fragmentShader}else Xt=M.vertexShader,Zt=M.fragmentShader,l.update(M),vt=l.getVertexShaderID(M),H=l.getFragmentShaderID(M);let Z=i.getRenderTarget(),pt=i.state.buffers.depth.getReversed(),St=C.isInstancedMesh===!0,Mt=C.isBatchedMesh===!0,qt=!!M.map,ee=!!M.matcap,D=!!$,nt=!!M.aoMap,j=!!M.lightMap,K=!!M.bumpMap,J=!!M.normalMap,ut=!!M.displacementMap,it=!!M.emissiveMap,dt=!!M.metalnessMap,zt=!!M.roughnessMap,Bt=M.anisotropy>0,P=M.clearcoat>0,b=M.dispersion>0,G=M.iridescence>0,q=M.sheen>0,et=M.transmission>0,Y=Bt&&!!M.anisotropyMap,Rt=P&&!!M.clearcoatMap,ct=P&&!!M.clearcoatNormalMap,Tt=P&&!!M.clearcoatRoughnessMap,At=G&&!!M.iridescenceMap,st=G&&!!M.iridescenceThicknessMap,xt=q&&!!M.sheenColorMap,Ft=q&&!!M.sheenRoughnessMap,It=!!M.specularMap,_t=!!M.specularColorMap,Ht=!!M.specularIntensityMap,F=et&&!!M.transmissionMap,ot=et&&!!M.thicknessMap,ft=!!M.gradientMap,Et=!!M.alphaMap,rt=M.alphaTest>0,Q=!!M.alphaHash,Ct=!!M.extensions,Vt=In;M.toneMapped&&(Z===null||Z.isXRRenderTarget===!0)&&(Vt=i.toneMapping);let oe={shaderID:tt,shaderType:M.type,shaderName:M.name,vertexShader:Xt,fragmentShader:Zt,defines:M.defines,customVertexShaderID:vt,customFragmentShaderID:H,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:p,batching:Mt,batchingColor:Mt&&C._colorsTexture!==null,instancing:St,instancingColor:St&&C.instanceColor!==null,instancingMorph:St&&C.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:Z===null?i.outputColorSpace:Z.isXRRenderTarget===!0?Z.texture.colorSpace:hi,alphaToCoverage:!!M.alphaToCoverage,map:qt,matcap:ee,envMap:D,envMapMode:D&&$.mapping,envMapCubeUVHeight:V,aoMap:nt,lightMap:j,bumpMap:K,normalMap:J,displacementMap:f&&ut,emissiveMap:it,normalMapObjectSpace:J&&M.normalMapType===Mh,normalMapTangentSpace:J&&M.normalMapType===El,metalnessMap:dt,roughnessMap:zt,anisotropy:Bt,anisotropyMap:Y,clearcoat:P,clearcoatMap:Rt,clearcoatNormalMap:ct,clearcoatRoughnessMap:Tt,dispersion:b,iridescence:G,iridescenceMap:At,iridescenceThicknessMap:st,sheen:q,sheenColorMap:xt,sheenRoughnessMap:Ft,specularMap:It,specularColorMap:_t,specularIntensityMap:Ht,transmission:et,transmissionMap:F,thicknessMap:ot,gradientMap:ft,opaque:M.transparent===!1&&M.blending===li&&M.alphaToCoverage===!1,alphaMap:Et,alphaTest:rt,alphaHash:Q,combine:M.combine,mapUv:qt&&S(M.map.channel),aoMapUv:nt&&S(M.aoMap.channel),lightMapUv:j&&S(M.lightMap.channel),bumpMapUv:K&&S(M.bumpMap.channel),normalMapUv:J&&S(M.normalMap.channel),displacementMapUv:ut&&S(M.displacementMap.channel),emissiveMapUv:it&&S(M.emissiveMap.channel),metalnessMapUv:dt&&S(M.metalnessMap.channel),roughnessMapUv:zt&&S(M.roughnessMap.channel),anisotropyMapUv:Y&&S(M.anisotropyMap.channel),clearcoatMapUv:Rt&&S(M.clearcoatMap.channel),clearcoatNormalMapUv:ct&&S(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Tt&&S(M.clearcoatRoughnessMap.channel),iridescenceMapUv:At&&S(M.iridescenceMap.channel),iridescenceThicknessMapUv:st&&S(M.iridescenceThicknessMap.channel),sheenColorMapUv:xt&&S(M.sheenColorMap.channel),sheenRoughnessMapUv:Ft&&S(M.sheenRoughnessMap.channel),specularMapUv:It&&S(M.specularMap.channel),specularColorMapUv:_t&&S(M.specularColorMap.channel),specularIntensityMapUv:Ht&&S(M.specularIntensityMap.channel),transmissionMapUv:F&&S(M.transmissionMap.channel),thicknessMapUv:ot&&S(M.thicknessMap.channel),alphaMapUv:Et&&S(M.alphaMap.channel),vertexTangents:!!N.attributes.tangent&&(J||Bt),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!N.attributes.color&&N.attributes.color.itemSize===4,pointsUvs:C.isPoints===!0&&!!N.attributes.uv&&(qt||Et),fog:!!U,useFog:M.fog===!0,fogExp2:!!U&&U.isFogExp2,flatShading:M.flatShading===!0&&M.wireframe===!1,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:h,reversedDepthBuffer:pt,skinning:C.isSkinnedMesh===!0,morphTargets:N.morphAttributes.position!==void 0,morphNormals:N.morphAttributes.normal!==void 0,morphColors:N.morphAttributes.color!==void 0,morphTargetsCount:gt,morphTextureStride:Lt,numDirLights:x.directional.length,numPointLights:x.point.length,numSpotLights:x.spot.length,numSpotLightMaps:x.spotLightMap.length,numRectAreaLights:x.rectArea.length,numHemiLights:x.hemi.length,numDirLightShadows:x.directionalShadowMap.length,numPointLightShadows:x.pointShadowMap.length,numSpotLightShadows:x.spotShadowMap.length,numSpotLightShadowsWithMaps:x.numSpotLightShadowsWithMaps,numLightProbes:x.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:M.dithering,shadowMapEnabled:i.shadowMap.enabled&&R.length>0,shadowMapType:i.shadowMap.type,toneMapping:Vt,decodeVideoTexture:qt&&M.map.isVideoTexture===!0&&jt.getTransfer(M.map.colorSpace)===ie,decodeVideoTextureEmissive:it&&M.emissiveMap.isVideoTexture===!0&&jt.getTransfer(M.emissiveMap.colorSpace)===ie,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===tn,flipSided:M.side===De,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionClipCullDistance:Ct&&M.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ct&&M.extensions.multiDraw===!0||Mt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()};return oe.vertexUv1s=c.has(1),oe.vertexUv2s=c.has(2),oe.vertexUv3s=c.has(3),c.clear(),oe}function u(M){let x=[];if(M.shaderID?x.push(M.shaderID):(x.push(M.customVertexShaderID),x.push(M.customFragmentShaderID)),M.defines!==void 0)for(let R in M.defines)x.push(R),x.push(M.defines[R]);return M.isRawShaderMaterial===!1&&(E(x,M),y(x,M),x.push(i.outputColorSpace)),x.push(M.customProgramCacheKey),x.join()}function E(M,x){M.push(x.precision),M.push(x.outputColorSpace),M.push(x.envMapMode),M.push(x.envMapCubeUVHeight),M.push(x.mapUv),M.push(x.alphaMapUv),M.push(x.lightMapUv),M.push(x.aoMapUv),M.push(x.bumpMapUv),M.push(x.normalMapUv),M.push(x.displacementMapUv),M.push(x.emissiveMapUv),M.push(x.metalnessMapUv),M.push(x.roughnessMapUv),M.push(x.anisotropyMapUv),M.push(x.clearcoatMapUv),M.push(x.clearcoatNormalMapUv),M.push(x.clearcoatRoughnessMapUv),M.push(x.iridescenceMapUv),M.push(x.iridescenceThicknessMapUv),M.push(x.sheenColorMapUv),M.push(x.sheenRoughnessMapUv),M.push(x.specularMapUv),M.push(x.specularColorMapUv),M.push(x.specularIntensityMapUv),M.push(x.transmissionMapUv),M.push(x.thicknessMapUv),M.push(x.combine),M.push(x.fogExp2),M.push(x.sizeAttenuation),M.push(x.morphTargetsCount),M.push(x.morphAttributeCount),M.push(x.numDirLights),M.push(x.numPointLights),M.push(x.numSpotLights),M.push(x.numSpotLightMaps),M.push(x.numHemiLights),M.push(x.numRectAreaLights),M.push(x.numDirLightShadows),M.push(x.numPointLightShadows),M.push(x.numSpotLightShadows),M.push(x.numSpotLightShadowsWithMaps),M.push(x.numLightProbes),M.push(x.shadowMapType),M.push(x.toneMapping),M.push(x.numClippingPlanes),M.push(x.numClipIntersection),M.push(x.depthPacking)}function y(M,x){o.disableAll(),x.supportsVertexTextures&&o.enable(0),x.instancing&&o.enable(1),x.instancingColor&&o.enable(2),x.instancingMorph&&o.enable(3),x.matcap&&o.enable(4),x.envMap&&o.enable(5),x.normalMapObjectSpace&&o.enable(6),x.normalMapTangentSpace&&o.enable(7),x.clearcoat&&o.enable(8),x.iridescence&&o.enable(9),x.alphaTest&&o.enable(10),x.vertexColors&&o.enable(11),x.vertexAlphas&&o.enable(12),x.vertexUv1s&&o.enable(13),x.vertexUv2s&&o.enable(14),x.vertexUv3s&&o.enable(15),x.vertexTangents&&o.enable(16),x.anisotropy&&o.enable(17),x.alphaHash&&o.enable(18),x.batching&&o.enable(19),x.dispersion&&o.enable(20),x.batchingColor&&o.enable(21),x.gradientMap&&o.enable(22),M.push(o.mask),o.disableAll(),x.fog&&o.enable(0),x.useFog&&o.enable(1),x.flatShading&&o.enable(2),x.logarithmicDepthBuffer&&o.enable(3),x.reversedDepthBuffer&&o.enable(4),x.skinning&&o.enable(5),x.morphTargets&&o.enable(6),x.morphNormals&&o.enable(7),x.morphColors&&o.enable(8),x.premultipliedAlpha&&o.enable(9),x.shadowMapEnabled&&o.enable(10),x.doubleSided&&o.enable(11),x.flipSided&&o.enable(12),x.useDepthPacking&&o.enable(13),x.dithering&&o.enable(14),x.transmission&&o.enable(15),x.sheen&&o.enable(16),x.opaque&&o.enable(17),x.pointsUvs&&o.enable(18),x.decodeVideoTexture&&o.enable(19),x.decodeVideoTextureEmissive&&o.enable(20),x.alphaToCoverage&&o.enable(21),M.push(o.mask)}function g(M){let x=_[M.type],R;if(x){let T=_n[x];R=Lh.clone(T.uniforms)}else R=M.uniforms;return R}function w(M,x){let R;for(let T=0,C=d.length;T<C;T++){let U=d[T];if(U.cacheKey===x){R=U,++R.usedTimes;break}}return R===void 0&&(R=new w0(i,x,M,r),d.push(R)),R}function v(M){if(--M.usedTimes===0){let x=d.indexOf(M);d[x]=d[d.length-1],d.pop(),M.destroy()}}function I(M){l.remove(M)}function L(){l.dispose()}return{getParameters:m,getProgramCacheKey:u,getUniforms:g,acquireProgram:w,releaseProgram:v,releaseShaderCache:I,programs:d,dispose:L}}function C0(){let i=new WeakMap;function t(a){return i.has(a)}function e(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,l){i.get(a)[o]=l}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function R0(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function su(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function ru(){let i=[],t=0,e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function a(h,f,p,_,S,m){let u=i[t];return u===void 0?(u={id:h.id,object:h,geometry:f,material:p,groupOrder:_,renderOrder:h.renderOrder,z:S,group:m},i[t]=u):(u.id=h.id,u.object=h,u.geometry=f,u.material=p,u.groupOrder=_,u.renderOrder=h.renderOrder,u.z=S,u.group=m),t++,u}function o(h,f,p,_,S,m){let u=a(h,f,p,_,S,m);p.transmission>0?n.push(u):p.transparent===!0?s.push(u):e.push(u)}function l(h,f,p,_,S,m){let u=a(h,f,p,_,S,m);p.transmission>0?n.unshift(u):p.transparent===!0?s.unshift(u):e.unshift(u)}function c(h,f){e.length>1&&e.sort(h||R0),n.length>1&&n.sort(f||su),s.length>1&&s.sort(f||su)}function d(){for(let h=t,f=i.length;h<f;h++){let p=i[h];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:o,unshift:l,finish:d,sort:c}}function I0(){let i=new WeakMap;function t(n,s){let r=i.get(n),a;return r===void 0?(a=new ru,i.set(n,[a])):s>=r.length?(a=new ru,r.push(a)):a=r[s],a}function e(){i=new WeakMap}return{get:t,dispose:e}}function P0(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new B,color:new $t};break;case"SpotLight":e={position:new B,direction:new B,color:new $t,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new B,color:new $t,distance:0,decay:0};break;case"HemisphereLight":e={direction:new B,skyColor:new $t,groundColor:new $t};break;case"RectAreaLight":e={color:new $t,position:new B,halfWidth:new B,halfHeight:new B};break}return i[t.id]=e,e}}}function L0(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new lt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new lt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new lt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}var D0=0;function U0(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function N0(i){let t=new P0,e=L0(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new B);let s=new B,r=new le,a=new le;function o(c){let d=0,h=0,f=0;for(let M=0;M<9;M++)n.probe[M].set(0,0,0);let p=0,_=0,S=0,m=0,u=0,E=0,y=0,g=0,w=0,v=0,I=0;c.sort(U0);for(let M=0,x=c.length;M<x;M++){let R=c[M],T=R.color,C=R.intensity,U=R.distance,N=R.shadow&&R.shadow.map?R.shadow.map.texture:null;if(R.isAmbientLight)d+=T.r*C,h+=T.g*C,f+=T.b*C;else if(R.isLightProbe){for(let O=0;O<9;O++)n.probe[O].addScaledVector(R.sh.coefficients[O],C);I++}else if(R.isDirectionalLight){let O=t.get(R);if(O.color.copy(R.color).multiplyScalar(R.intensity),R.castShadow){let $=R.shadow,V=e.get(R);V.shadowIntensity=$.intensity,V.shadowBias=$.bias,V.shadowNormalBias=$.normalBias,V.shadowRadius=$.radius,V.shadowMapSize=$.mapSize,n.directionalShadow[p]=V,n.directionalShadowMap[p]=N,n.directionalShadowMatrix[p]=R.shadow.matrix,E++}n.directional[p]=O,p++}else if(R.isSpotLight){let O=t.get(R);O.position.setFromMatrixPosition(R.matrixWorld),O.color.copy(T).multiplyScalar(C),O.distance=U,O.coneCos=Math.cos(R.angle),O.penumbraCos=Math.cos(R.angle*(1-R.penumbra)),O.decay=R.decay,n.spot[S]=O;let $=R.shadow;if(R.map&&(n.spotLightMap[w]=R.map,w++,$.updateMatrices(R),R.castShadow&&v++),n.spotLightMatrix[S]=$.matrix,R.castShadow){let V=e.get(R);V.shadowIntensity=$.intensity,V.shadowBias=$.bias,V.shadowNormalBias=$.normalBias,V.shadowRadius=$.radius,V.shadowMapSize=$.mapSize,n.spotShadow[S]=V,n.spotShadowMap[S]=N,g++}S++}else if(R.isRectAreaLight){let O=t.get(R);O.color.copy(T).multiplyScalar(C),O.halfWidth.set(R.width*.5,0,0),O.halfHeight.set(0,R.height*.5,0),n.rectArea[m]=O,m++}else if(R.isPointLight){let O=t.get(R);if(O.color.copy(R.color).multiplyScalar(R.intensity),O.distance=R.distance,O.decay=R.decay,R.castShadow){let $=R.shadow,V=e.get(R);V.shadowIntensity=$.intensity,V.shadowBias=$.bias,V.shadowNormalBias=$.normalBias,V.shadowRadius=$.radius,V.shadowMapSize=$.mapSize,V.shadowCameraNear=$.camera.near,V.shadowCameraFar=$.camera.far,n.pointShadow[_]=V,n.pointShadowMap[_]=N,n.pointShadowMatrix[_]=R.shadow.matrix,y++}n.point[_]=O,_++}else if(R.isHemisphereLight){let O=t.get(R);O.skyColor.copy(R.color).multiplyScalar(C),O.groundColor.copy(R.groundColor).multiplyScalar(C),n.hemi[u]=O,u++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=mt.LTC_FLOAT_1,n.rectAreaLTC2=mt.LTC_FLOAT_2):(n.rectAreaLTC1=mt.LTC_HALF_1,n.rectAreaLTC2=mt.LTC_HALF_2)),n.ambient[0]=d,n.ambient[1]=h,n.ambient[2]=f;let L=n.hash;(L.directionalLength!==p||L.pointLength!==_||L.spotLength!==S||L.rectAreaLength!==m||L.hemiLength!==u||L.numDirectionalShadows!==E||L.numPointShadows!==y||L.numSpotShadows!==g||L.numSpotMaps!==w||L.numLightProbes!==I)&&(n.directional.length=p,n.spot.length=S,n.rectArea.length=m,n.point.length=_,n.hemi.length=u,n.directionalShadow.length=E,n.directionalShadowMap.length=E,n.pointShadow.length=y,n.pointShadowMap.length=y,n.spotShadow.length=g,n.spotShadowMap.length=g,n.directionalShadowMatrix.length=E,n.pointShadowMatrix.length=y,n.spotLightMatrix.length=g+w-v,n.spotLightMap.length=w,n.numSpotLightShadowsWithMaps=v,n.numLightProbes=I,L.directionalLength=p,L.pointLength=_,L.spotLength=S,L.rectAreaLength=m,L.hemiLength=u,L.numDirectionalShadows=E,L.numPointShadows=y,L.numSpotShadows=g,L.numSpotMaps=w,L.numLightProbes=I,n.version=D0++)}function l(c,d){let h=0,f=0,p=0,_=0,S=0,m=d.matrixWorldInverse;for(let u=0,E=c.length;u<E;u++){let y=c[u];if(y.isDirectionalLight){let g=n.directional[h];g.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),g.direction.sub(s),g.direction.transformDirection(m),h++}else if(y.isSpotLight){let g=n.spot[p];g.position.setFromMatrixPosition(y.matrixWorld),g.position.applyMatrix4(m),g.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),g.direction.sub(s),g.direction.transformDirection(m),p++}else if(y.isRectAreaLight){let g=n.rectArea[_];g.position.setFromMatrixPosition(y.matrixWorld),g.position.applyMatrix4(m),a.identity(),r.copy(y.matrixWorld),r.premultiply(m),a.extractRotation(r),g.halfWidth.set(y.width*.5,0,0),g.halfHeight.set(0,y.height*.5,0),g.halfWidth.applyMatrix4(a),g.halfHeight.applyMatrix4(a),_++}else if(y.isPointLight){let g=n.point[f];g.position.setFromMatrixPosition(y.matrixWorld),g.position.applyMatrix4(m),f++}else if(y.isHemisphereLight){let g=n.hemi[S];g.direction.setFromMatrixPosition(y.matrixWorld),g.direction.transformDirection(m),S++}}}return{setup:o,setupView:l,state:n}}function au(i){let t=new N0(i),e=[],n=[];function s(d){c.camera=d,e.length=0,n.length=0}function r(d){e.push(d)}function a(d){n.push(d)}function o(){t.setup(e)}function l(d){t.setupView(e,d)}let c={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:o,setupLightsView:l,pushLight:r,pushShadow:a}}function F0(i){let t=new WeakMap;function e(s,r=0){let a=t.get(s),o;return a===void 0?(o=new au(i),t.set(s,[o])):r>=a.length?(o=new au(i),a.push(o)):o=a[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}var O0=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,B0=`uniform sampler2D shadow_pass;
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
}`;function k0(i,t,e){let n=new ji,s=new lt,r=new lt,a=new pe,o=new Qr({depthPacking:vh}),l=new ta,c={},d=e.maxTextureSize,h={[An]:De,[De]:An,[tn]:tn},f=new cn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new lt},radius:{value:4}},vertexShader:O0,fragmentShader:B0}),p=f.clone();p.defines.HORIZONTAL_PASS=1;let _=new Cn;_.setAttribute("position",new Ge(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let S=new Ce(_,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=hl;let u=this.type;this.render=function(v,I,L){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||v.length===0)return;let M=i.getRenderTarget(),x=i.getActiveCubeFace(),R=i.getActiveMipmapLevel(),T=i.state;T.setBlending(Rn),T.buffers.depth.getReversed()===!0?T.buffers.color.setClear(0,0,0,0):T.buffers.color.setClear(1,1,1,1),T.buffers.depth.setTest(!0),T.setScissorTest(!1);let C=u!==mn&&this.type===mn,U=u===mn&&this.type!==mn;for(let N=0,O=v.length;N<O;N++){let $=v[N],V=$.shadow;if(V===void 0){console.warn("THREE.WebGLShadowMap:",$,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;s.copy(V.mapSize);let tt=V.getFrameExtents();if(s.multiply(tt),r.copy(V.mapSize),(s.x>d||s.y>d)&&(s.x>d&&(r.x=Math.floor(d/tt.x),s.x=r.x*tt.x,V.mapSize.x=r.x),s.y>d&&(r.y=Math.floor(d/tt.y),s.y=r.y*tt.y,V.mapSize.y=r.y)),V.map===null||C===!0||U===!0){let gt=this.type!==mn?{minFilter:je,magFilter:je}:{};V.map!==null&&V.map.dispose(),V.map=new pn(s.x,s.y,gt),V.map.texture.name=$.name+".shadowMap",V.camera.updateProjectionMatrix()}i.setRenderTarget(V.map),i.clear();let ht=V.getViewportCount();for(let gt=0;gt<ht;gt++){let Lt=V.getViewport(gt);a.set(r.x*Lt.x,r.y*Lt.y,r.x*Lt.z,r.y*Lt.w),T.viewport(a),V.updateMatrices($,gt),n=V.getFrustum(),g(I,L,V.camera,$,this.type)}V.isPointLightShadow!==!0&&this.type===mn&&E(V,L),V.needsUpdate=!1}u=this.type,m.needsUpdate=!1,i.setRenderTarget(M,x,R)};function E(v,I){let L=t.update(S);f.defines.VSM_SAMPLES!==v.blurSamples&&(f.defines.VSM_SAMPLES=v.blurSamples,p.defines.VSM_SAMPLES=v.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),v.mapPass===null&&(v.mapPass=new pn(s.x,s.y)),f.uniforms.shadow_pass.value=v.map.texture,f.uniforms.resolution.value=v.mapSize,f.uniforms.radius.value=v.radius,i.setRenderTarget(v.mapPass),i.clear(),i.renderBufferDirect(I,null,L,f,S,null),p.uniforms.shadow_pass.value=v.mapPass.texture,p.uniforms.resolution.value=v.mapSize,p.uniforms.radius.value=v.radius,i.setRenderTarget(v.map),i.clear(),i.renderBufferDirect(I,null,L,p,S,null)}function y(v,I,L,M){let x=null,R=L.isPointLight===!0?v.customDistanceMaterial:v.customDepthMaterial;if(R!==void 0)x=R;else if(x=L.isPointLight===!0?l:o,i.localClippingEnabled&&I.clipShadows===!0&&Array.isArray(I.clippingPlanes)&&I.clippingPlanes.length!==0||I.displacementMap&&I.displacementScale!==0||I.alphaMap&&I.alphaTest>0||I.map&&I.alphaTest>0||I.alphaToCoverage===!0){let T=x.uuid,C=I.uuid,U=c[T];U===void 0&&(U={},c[T]=U);let N=U[C];N===void 0&&(N=x.clone(),U[C]=N,I.addEventListener("dispose",w)),x=N}if(x.visible=I.visible,x.wireframe=I.wireframe,M===mn?x.side=I.shadowSide!==null?I.shadowSide:I.side:x.side=I.shadowSide!==null?I.shadowSide:h[I.side],x.alphaMap=I.alphaMap,x.alphaTest=I.alphaToCoverage===!0?.5:I.alphaTest,x.map=I.map,x.clipShadows=I.clipShadows,x.clippingPlanes=I.clippingPlanes,x.clipIntersection=I.clipIntersection,x.displacementMap=I.displacementMap,x.displacementScale=I.displacementScale,x.displacementBias=I.displacementBias,x.wireframeLinewidth=I.wireframeLinewidth,x.linewidth=I.linewidth,L.isPointLight===!0&&x.isMeshDistanceMaterial===!0){let T=i.properties.get(x);T.light=L}return x}function g(v,I,L,M,x){if(v.visible===!1)return;if(v.layers.test(I.layers)&&(v.isMesh||v.isLine||v.isPoints)&&(v.castShadow||v.receiveShadow&&x===mn)&&(!v.frustumCulled||n.intersectsObject(v))){v.modelViewMatrix.multiplyMatrices(L.matrixWorldInverse,v.matrixWorld);let C=t.update(v),U=v.material;if(Array.isArray(U)){let N=C.groups;for(let O=0,$=N.length;O<$;O++){let V=N[O],tt=U[V.materialIndex];if(tt&&tt.visible){let ht=y(v,tt,M,x);v.onBeforeShadow(i,v,I,L,C,ht,V),i.renderBufferDirect(L,null,C,ht,v,V),v.onAfterShadow(i,v,I,L,C,ht,V)}}}else if(U.visible){let N=y(v,U,M,x);v.onBeforeShadow(i,v,I,L,C,N,null),i.renderBufferDirect(L,null,C,N,v,null),v.onAfterShadow(i,v,I,L,C,N,null)}}let T=v.children;for(let C=0,U=T.length;C<U;C++)g(T[C],I,L,M,x)}function w(v){v.target.removeEventListener("dispose",w);for(let L in c){let M=c[L],x=v.target.uuid;x in M&&(M[x].dispose(),delete M[x])}}}var z0={[fa]:pa,[ma]:ya,[ga]:xa,[ci]:_a,[pa]:fa,[ya]:ma,[xa]:ga,[_a]:ci};function V0(i,t){function e(){let F=!1,ot=new pe,ft=null,Et=new pe(0,0,0,0);return{setMask:function(rt){ft!==rt&&!F&&(i.colorMask(rt,rt,rt,rt),ft=rt)},setLocked:function(rt){F=rt},setClear:function(rt,Q,Ct,Vt,oe){oe===!0&&(rt*=Vt,Q*=Vt,Ct*=Vt),ot.set(rt,Q,Ct,Vt),Et.equals(ot)===!1&&(i.clearColor(rt,Q,Ct,Vt),Et.copy(ot))},reset:function(){F=!1,ft=null,Et.set(-1,0,0,0)}}}function n(){let F=!1,ot=!1,ft=null,Et=null,rt=null;return{setReversed:function(Q){if(ot!==Q){let Ct=t.get("EXT_clip_control");Q?Ct.clipControlEXT(Ct.LOWER_LEFT_EXT,Ct.ZERO_TO_ONE_EXT):Ct.clipControlEXT(Ct.LOWER_LEFT_EXT,Ct.NEGATIVE_ONE_TO_ONE_EXT),ot=Q;let Vt=rt;rt=null,this.setClear(Vt)}},getReversed:function(){return ot},setTest:function(Q){Q?Z(i.DEPTH_TEST):pt(i.DEPTH_TEST)},setMask:function(Q){ft!==Q&&!F&&(i.depthMask(Q),ft=Q)},setFunc:function(Q){if(ot&&(Q=z0[Q]),Et!==Q){switch(Q){case fa:i.depthFunc(i.NEVER);break;case pa:i.depthFunc(i.ALWAYS);break;case ma:i.depthFunc(i.LESS);break;case ci:i.depthFunc(i.LEQUAL);break;case ga:i.depthFunc(i.EQUAL);break;case _a:i.depthFunc(i.GEQUAL);break;case ya:i.depthFunc(i.GREATER);break;case xa:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Et=Q}},setLocked:function(Q){F=Q},setClear:function(Q){rt!==Q&&(ot&&(Q=1-Q),i.clearDepth(Q),rt=Q)},reset:function(){F=!1,ft=null,Et=null,rt=null,ot=!1}}}function s(){let F=!1,ot=null,ft=null,Et=null,rt=null,Q=null,Ct=null,Vt=null,oe=null;return{setTest:function(ne){F||(ne?Z(i.STENCIL_TEST):pt(i.STENCIL_TEST))},setMask:function(ne){ot!==ne&&!F&&(i.stencilMask(ne),ot=ne)},setFunc:function(ne,xn,dn){(ft!==ne||Et!==xn||rt!==dn)&&(i.stencilFunc(ne,xn,dn),ft=ne,Et=xn,rt=dn)},setOp:function(ne,xn,dn){(Q!==ne||Ct!==xn||Vt!==dn)&&(i.stencilOp(ne,xn,dn),Q=ne,Ct=xn,Vt=dn)},setLocked:function(ne){F=ne},setClear:function(ne){oe!==ne&&(i.clearStencil(ne),oe=ne)},reset:function(){F=!1,ot=null,ft=null,Et=null,rt=null,Q=null,Ct=null,Vt=null,oe=null}}}let r=new e,a=new n,o=new s,l=new WeakMap,c=new WeakMap,d={},h={},f=new WeakMap,p=[],_=null,S=!1,m=null,u=null,E=null,y=null,g=null,w=null,v=null,I=new $t(0,0,0),L=0,M=!1,x=null,R=null,T=null,C=null,U=null,N=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),O=!1,$=0,V=i.getParameter(i.VERSION);V.indexOf("WebGL")!==-1?($=parseFloat(/^WebGL (\d)/.exec(V)[1]),O=$>=1):V.indexOf("OpenGL ES")!==-1&&($=parseFloat(/^OpenGL ES (\d)/.exec(V)[1]),O=$>=2);let tt=null,ht={},gt=i.getParameter(i.SCISSOR_BOX),Lt=i.getParameter(i.VIEWPORT),Xt=new pe().fromArray(gt),Zt=new pe().fromArray(Lt);function vt(F,ot,ft,Et){let rt=new Uint8Array(4),Q=i.createTexture();i.bindTexture(F,Q),i.texParameteri(F,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(F,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Ct=0;Ct<ft;Ct++)F===i.TEXTURE_3D||F===i.TEXTURE_2D_ARRAY?i.texImage3D(ot,0,i.RGBA,1,1,Et,0,i.RGBA,i.UNSIGNED_BYTE,rt):i.texImage2D(ot+Ct,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,rt);return Q}let H={};H[i.TEXTURE_2D]=vt(i.TEXTURE_2D,i.TEXTURE_2D,1),H[i.TEXTURE_CUBE_MAP]=vt(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),H[i.TEXTURE_2D_ARRAY]=vt(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),H[i.TEXTURE_3D]=vt(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),Z(i.DEPTH_TEST),a.setFunc(ci),K(!1),J(cl),Z(i.CULL_FACE),nt(Rn);function Z(F){d[F]!==!0&&(i.enable(F),d[F]=!0)}function pt(F){d[F]!==!1&&(i.disable(F),d[F]=!1)}function St(F,ot){return h[F]!==ot?(i.bindFramebuffer(F,ot),h[F]=ot,F===i.DRAW_FRAMEBUFFER&&(h[i.FRAMEBUFFER]=ot),F===i.FRAMEBUFFER&&(h[i.DRAW_FRAMEBUFFER]=ot),!0):!1}function Mt(F,ot){let ft=p,Et=!1;if(F){ft=f.get(ot),ft===void 0&&(ft=[],f.set(ot,ft));let rt=F.textures;if(ft.length!==rt.length||ft[0]!==i.COLOR_ATTACHMENT0){for(let Q=0,Ct=rt.length;Q<Ct;Q++)ft[Q]=i.COLOR_ATTACHMENT0+Q;ft.length=rt.length,Et=!0}}else ft[0]!==i.BACK&&(ft[0]=i.BACK,Et=!0);Et&&i.drawBuffers(ft)}function qt(F){return _!==F?(i.useProgram(F),_=F,!0):!1}let ee={[Hn]:i.FUNC_ADD,[qc]:i.FUNC_SUBTRACT,[Yc]:i.FUNC_REVERSE_SUBTRACT};ee[Zc]=i.MIN,ee[Jc]=i.MAX;let D={[Kc]:i.ZERO,[jc]:i.ONE,[Qc]:i.SRC_COLOR,[Or]:i.SRC_ALPHA,[rh]:i.SRC_ALPHA_SATURATE,[ih]:i.DST_COLOR,[eh]:i.DST_ALPHA,[th]:i.ONE_MINUS_SRC_COLOR,[Br]:i.ONE_MINUS_SRC_ALPHA,[sh]:i.ONE_MINUS_DST_COLOR,[nh]:i.ONE_MINUS_DST_ALPHA,[ah]:i.CONSTANT_COLOR,[oh]:i.ONE_MINUS_CONSTANT_COLOR,[lh]:i.CONSTANT_ALPHA,[ch]:i.ONE_MINUS_CONSTANT_ALPHA};function nt(F,ot,ft,Et,rt,Q,Ct,Vt,oe,ne){if(F===Rn){S===!0&&(pt(i.BLEND),S=!1);return}if(S===!1&&(Z(i.BLEND),S=!0),F!==Xc){if(F!==m||ne!==M){if((u!==Hn||g!==Hn)&&(i.blendEquation(i.FUNC_ADD),u=Hn,g=Hn),ne)switch(F){case li:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case ul:i.blendFunc(i.ONE,i.ONE);break;case dl:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case fl:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}else switch(F){case li:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case ul:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case dl:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case fl:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}E=null,y=null,w=null,v=null,I.set(0,0,0),L=0,m=F,M=ne}return}rt=rt||ot,Q=Q||ft,Ct=Ct||Et,(ot!==u||rt!==g)&&(i.blendEquationSeparate(ee[ot],ee[rt]),u=ot,g=rt),(ft!==E||Et!==y||Q!==w||Ct!==v)&&(i.blendFuncSeparate(D[ft],D[Et],D[Q],D[Ct]),E=ft,y=Et,w=Q,v=Ct),(Vt.equals(I)===!1||oe!==L)&&(i.blendColor(Vt.r,Vt.g,Vt.b,oe),I.copy(Vt),L=oe),m=F,M=!1}function j(F,ot){F.side===tn?pt(i.CULL_FACE):Z(i.CULL_FACE);let ft=F.side===De;ot&&(ft=!ft),K(ft),F.blending===li&&F.transparent===!1?nt(Rn):nt(F.blending,F.blendEquation,F.blendSrc,F.blendDst,F.blendEquationAlpha,F.blendSrcAlpha,F.blendDstAlpha,F.blendColor,F.blendAlpha,F.premultipliedAlpha),a.setFunc(F.depthFunc),a.setTest(F.depthTest),a.setMask(F.depthWrite),r.setMask(F.colorWrite);let Et=F.stencilWrite;o.setTest(Et),Et&&(o.setMask(F.stencilWriteMask),o.setFunc(F.stencilFunc,F.stencilRef,F.stencilFuncMask),o.setOp(F.stencilFail,F.stencilZFail,F.stencilZPass)),it(F.polygonOffset,F.polygonOffsetFactor,F.polygonOffsetUnits),F.alphaToCoverage===!0?Z(i.SAMPLE_ALPHA_TO_COVERAGE):pt(i.SAMPLE_ALPHA_TO_COVERAGE)}function K(F){x!==F&&(F?i.frontFace(i.CW):i.frontFace(i.CCW),x=F)}function J(F){F!==$c?(Z(i.CULL_FACE),F!==R&&(F===cl?i.cullFace(i.BACK):F===Wc?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):pt(i.CULL_FACE),R=F}function ut(F){F!==T&&(O&&i.lineWidth(F),T=F)}function it(F,ot,ft){F?(Z(i.POLYGON_OFFSET_FILL),(C!==ot||U!==ft)&&(i.polygonOffset(ot,ft),C=ot,U=ft)):pt(i.POLYGON_OFFSET_FILL)}function dt(F){F?Z(i.SCISSOR_TEST):pt(i.SCISSOR_TEST)}function zt(F){F===void 0&&(F=i.TEXTURE0+N-1),tt!==F&&(i.activeTexture(F),tt=F)}function Bt(F,ot,ft){ft===void 0&&(tt===null?ft=i.TEXTURE0+N-1:ft=tt);let Et=ht[ft];Et===void 0&&(Et={type:void 0,texture:void 0},ht[ft]=Et),(Et.type!==F||Et.texture!==ot)&&(tt!==ft&&(i.activeTexture(ft),tt=ft),i.bindTexture(F,ot||H[F]),Et.type=F,Et.texture=ot)}function P(){let F=ht[tt];F!==void 0&&F.type!==void 0&&(i.bindTexture(F.type,null),F.type=void 0,F.texture=void 0)}function b(){try{i.compressedTexImage2D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function G(){try{i.compressedTexImage3D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function q(){try{i.texSubImage2D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function et(){try{i.texSubImage3D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Y(){try{i.compressedTexSubImage2D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Rt(){try{i.compressedTexSubImage3D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function ct(){try{i.texStorage2D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Tt(){try{i.texStorage3D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function At(){try{i.texImage2D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function st(){try{i.texImage3D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function xt(F){Xt.equals(F)===!1&&(i.scissor(F.x,F.y,F.z,F.w),Xt.copy(F))}function Ft(F){Zt.equals(F)===!1&&(i.viewport(F.x,F.y,F.z,F.w),Zt.copy(F))}function It(F,ot){let ft=c.get(ot);ft===void 0&&(ft=new WeakMap,c.set(ot,ft));let Et=ft.get(F);Et===void 0&&(Et=i.getUniformBlockIndex(ot,F.name),ft.set(F,Et))}function _t(F,ot){let Et=c.get(ot).get(F);l.get(ot)!==Et&&(i.uniformBlockBinding(ot,Et,F.__bindingPointIndex),l.set(ot,Et))}function Ht(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),d={},tt=null,ht={},h={},f=new WeakMap,p=[],_=null,S=!1,m=null,u=null,E=null,y=null,g=null,w=null,v=null,I=new $t(0,0,0),L=0,M=!1,x=null,R=null,T=null,C=null,U=null,Xt.set(0,0,i.canvas.width,i.canvas.height),Zt.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:Z,disable:pt,bindFramebuffer:St,drawBuffers:Mt,useProgram:qt,setBlending:nt,setMaterial:j,setFlipSided:K,setCullFace:J,setLineWidth:ut,setPolygonOffset:it,setScissorTest:dt,activeTexture:zt,bindTexture:Bt,unbindTexture:P,compressedTexImage2D:b,compressedTexImage3D:G,texImage2D:At,texImage3D:st,updateUBOMapping:It,uniformBlockBinding:_t,texStorage2D:ct,texStorage3D:Tt,texSubImage2D:q,texSubImage3D:et,compressedTexSubImage2D:Y,compressedTexSubImage3D:Rt,scissor:xt,viewport:Ft,reset:Ht}}function H0(i,t,e,n,s,r,a){let o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new lt,d=new WeakMap,h,f=new WeakMap,p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(P,b){return p?new OffscreenCanvas(P,b):Wi("canvas")}function S(P,b,G){let q=1,et=Bt(P);if((et.width>G||et.height>G)&&(q=G/Math.max(et.width,et.height)),q<1)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap||typeof VideoFrame<"u"&&P instanceof VideoFrame){let Y=Math.floor(q*et.width),Rt=Math.floor(q*et.height);h===void 0&&(h=_(Y,Rt));let ct=b?_(Y,Rt):h;return ct.width=Y,ct.height=Rt,ct.getContext("2d").drawImage(P,0,0,Y,Rt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+et.width+"x"+et.height+") to ("+Y+"x"+Rt+")."),ct}else return"data"in P&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+et.width+"x"+et.height+")."),P;return P}function m(P){return P.generateMipmaps}function u(P){i.generateMipmap(P)}function E(P){return P.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:P.isWebGL3DRenderTarget?i.TEXTURE_3D:P.isWebGLArrayRenderTarget||P.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function y(P,b,G,q,et=!1){if(P!==null){if(i[P]!==void 0)return i[P];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let Y=b;if(b===i.RED&&(G===i.FLOAT&&(Y=i.R32F),G===i.HALF_FLOAT&&(Y=i.R16F),G===i.UNSIGNED_BYTE&&(Y=i.R8)),b===i.RED_INTEGER&&(G===i.UNSIGNED_BYTE&&(Y=i.R8UI),G===i.UNSIGNED_SHORT&&(Y=i.R16UI),G===i.UNSIGNED_INT&&(Y=i.R32UI),G===i.BYTE&&(Y=i.R8I),G===i.SHORT&&(Y=i.R16I),G===i.INT&&(Y=i.R32I)),b===i.RG&&(G===i.FLOAT&&(Y=i.RG32F),G===i.HALF_FLOAT&&(Y=i.RG16F),G===i.UNSIGNED_BYTE&&(Y=i.RG8)),b===i.RG_INTEGER&&(G===i.UNSIGNED_BYTE&&(Y=i.RG8UI),G===i.UNSIGNED_SHORT&&(Y=i.RG16UI),G===i.UNSIGNED_INT&&(Y=i.RG32UI),G===i.BYTE&&(Y=i.RG8I),G===i.SHORT&&(Y=i.RG16I),G===i.INT&&(Y=i.RG32I)),b===i.RGB_INTEGER&&(G===i.UNSIGNED_BYTE&&(Y=i.RGB8UI),G===i.UNSIGNED_SHORT&&(Y=i.RGB16UI),G===i.UNSIGNED_INT&&(Y=i.RGB32UI),G===i.BYTE&&(Y=i.RGB8I),G===i.SHORT&&(Y=i.RGB16I),G===i.INT&&(Y=i.RGB32I)),b===i.RGBA_INTEGER&&(G===i.UNSIGNED_BYTE&&(Y=i.RGBA8UI),G===i.UNSIGNED_SHORT&&(Y=i.RGBA16UI),G===i.UNSIGNED_INT&&(Y=i.RGBA32UI),G===i.BYTE&&(Y=i.RGBA8I),G===i.SHORT&&(Y=i.RGBA16I),G===i.INT&&(Y=i.RGBA32I)),b===i.RGB&&(G===i.UNSIGNED_INT_5_9_9_9_REV&&(Y=i.RGB9_E5),G===i.UNSIGNED_INT_10F_11F_11F_REV&&(Y=i.R11F_G11F_B10F)),b===i.RGBA){let Rt=et?Is:jt.getTransfer(q);G===i.FLOAT&&(Y=i.RGBA32F),G===i.HALF_FLOAT&&(Y=i.RGBA16F),G===i.UNSIGNED_BYTE&&(Y=Rt===ie?i.SRGB8_ALPHA8:i.RGBA8),G===i.UNSIGNED_SHORT_4_4_4_4&&(Y=i.RGBA4),G===i.UNSIGNED_SHORT_5_5_5_1&&(Y=i.RGB5_A1)}return(Y===i.R16F||Y===i.R32F||Y===i.RG16F||Y===i.RG32F||Y===i.RGBA16F||Y===i.RGBA32F)&&t.get("EXT_color_buffer_float"),Y}function g(P,b){let G;return P?b===null||b===Kn||b===ls?G=i.DEPTH24_STENCIL8:b===gn?G=i.DEPTH32F_STENCIL8:b===as&&(G=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===Kn||b===ls?G=i.DEPTH_COMPONENT24:b===gn?G=i.DEPTH_COMPONENT32F:b===as&&(G=i.DEPTH_COMPONENT16),G}function w(P,b){return m(P)===!0||P.isFramebufferTexture&&P.minFilter!==je&&P.minFilter!==on?Math.log2(Math.max(b.width,b.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?b.mipmaps.length:1}function v(P){let b=P.target;b.removeEventListener("dispose",v),L(b),b.isVideoTexture&&d.delete(b)}function I(P){let b=P.target;b.removeEventListener("dispose",I),x(b)}function L(P){let b=n.get(P);if(b.__webglInit===void 0)return;let G=P.source,q=f.get(G);if(q){let et=q[b.__cacheKey];et.usedTimes--,et.usedTimes===0&&M(P),Object.keys(q).length===0&&f.delete(G)}n.remove(P)}function M(P){let b=n.get(P);i.deleteTexture(b.__webglTexture);let G=P.source,q=f.get(G);delete q[b.__cacheKey],a.memory.textures--}function x(P){let b=n.get(P);if(P.depthTexture&&(P.depthTexture.dispose(),n.remove(P.depthTexture)),P.isWebGLCubeRenderTarget)for(let q=0;q<6;q++){if(Array.isArray(b.__webglFramebuffer[q]))for(let et=0;et<b.__webglFramebuffer[q].length;et++)i.deleteFramebuffer(b.__webglFramebuffer[q][et]);else i.deleteFramebuffer(b.__webglFramebuffer[q]);b.__webglDepthbuffer&&i.deleteRenderbuffer(b.__webglDepthbuffer[q])}else{if(Array.isArray(b.__webglFramebuffer))for(let q=0;q<b.__webglFramebuffer.length;q++)i.deleteFramebuffer(b.__webglFramebuffer[q]);else i.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&i.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&i.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let q=0;q<b.__webglColorRenderbuffer.length;q++)b.__webglColorRenderbuffer[q]&&i.deleteRenderbuffer(b.__webglColorRenderbuffer[q]);b.__webglDepthRenderbuffer&&i.deleteRenderbuffer(b.__webglDepthRenderbuffer)}let G=P.textures;for(let q=0,et=G.length;q<et;q++){let Y=n.get(G[q]);Y.__webglTexture&&(i.deleteTexture(Y.__webglTexture),a.memory.textures--),n.remove(G[q])}n.remove(P)}let R=0;function T(){R=0}function C(){let P=R;return P>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+P+" texture units while this GPU supports only "+s.maxTextures),R+=1,P}function U(P){let b=[];return b.push(P.wrapS),b.push(P.wrapT),b.push(P.wrapR||0),b.push(P.magFilter),b.push(P.minFilter),b.push(P.anisotropy),b.push(P.internalFormat),b.push(P.format),b.push(P.type),b.push(P.generateMipmaps),b.push(P.premultiplyAlpha),b.push(P.flipY),b.push(P.unpackAlignment),b.push(P.colorSpace),b.join()}function N(P,b){let G=n.get(P);if(P.isVideoTexture&&dt(P),P.isRenderTargetTexture===!1&&P.isExternalTexture!==!0&&P.version>0&&G.__version!==P.version){let q=P.image;if(q===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(q.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{H(G,P,b);return}}else P.isExternalTexture&&(G.__webglTexture=P.sourceTexture?P.sourceTexture:null);e.bindTexture(i.TEXTURE_2D,G.__webglTexture,i.TEXTURE0+b)}function O(P,b){let G=n.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&G.__version!==P.version){H(G,P,b);return}e.bindTexture(i.TEXTURE_2D_ARRAY,G.__webglTexture,i.TEXTURE0+b)}function $(P,b){let G=n.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&G.__version!==P.version){H(G,P,b);return}e.bindTexture(i.TEXTURE_3D,G.__webglTexture,i.TEXTURE0+b)}function V(P,b){let G=n.get(P);if(P.version>0&&G.__version!==P.version){Z(G,P,b);return}e.bindTexture(i.TEXTURE_CUBE_MAP,G.__webglTexture,i.TEXTURE0+b)}let tt={[kr]:i.REPEAT,[Vn]:i.CLAMP_TO_EDGE,[zr]:i.MIRRORED_REPEAT},ht={[je]:i.NEAREST,[yh]:i.NEAREST_MIPMAP_NEAREST,[rr]:i.NEAREST_MIPMAP_LINEAR,[on]:i.LINEAR,[Sa]:i.LINEAR_MIPMAP_NEAREST,[Jn]:i.LINEAR_MIPMAP_LINEAR},gt={[bh]:i.NEVER,[Ch]:i.ALWAYS,[Sh]:i.LESS,[wl]:i.LEQUAL,[Eh]:i.EQUAL,[Ah]:i.GEQUAL,[wh]:i.GREATER,[Th]:i.NOTEQUAL};function Lt(P,b){if(b.type===gn&&t.has("OES_texture_float_linear")===!1&&(b.magFilter===on||b.magFilter===Sa||b.magFilter===rr||b.magFilter===Jn||b.minFilter===on||b.minFilter===Sa||b.minFilter===rr||b.minFilter===Jn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(P,i.TEXTURE_WRAP_S,tt[b.wrapS]),i.texParameteri(P,i.TEXTURE_WRAP_T,tt[b.wrapT]),(P===i.TEXTURE_3D||P===i.TEXTURE_2D_ARRAY)&&i.texParameteri(P,i.TEXTURE_WRAP_R,tt[b.wrapR]),i.texParameteri(P,i.TEXTURE_MAG_FILTER,ht[b.magFilter]),i.texParameteri(P,i.TEXTURE_MIN_FILTER,ht[b.minFilter]),b.compareFunction&&(i.texParameteri(P,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(P,i.TEXTURE_COMPARE_FUNC,gt[b.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===je||b.minFilter!==rr&&b.minFilter!==Jn||b.type===gn&&t.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||n.get(b).__currentAnisotropy){let G=t.get("EXT_texture_filter_anisotropic");i.texParameterf(P,G.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,s.getMaxAnisotropy())),n.get(b).__currentAnisotropy=b.anisotropy}}}function Xt(P,b){let G=!1;P.__webglInit===void 0&&(P.__webglInit=!0,b.addEventListener("dispose",v));let q=b.source,et=f.get(q);et===void 0&&(et={},f.set(q,et));let Y=U(b);if(Y!==P.__cacheKey){et[Y]===void 0&&(et[Y]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,G=!0),et[Y].usedTimes++;let Rt=et[P.__cacheKey];Rt!==void 0&&(et[P.__cacheKey].usedTimes--,Rt.usedTimes===0&&M(b)),P.__cacheKey=Y,P.__webglTexture=et[Y].texture}return G}function Zt(P,b,G){return Math.floor(Math.floor(P/G)/b)}function vt(P,b,G,q){let Y=P.updateRanges;if(Y.length===0)e.texSubImage2D(i.TEXTURE_2D,0,0,0,b.width,b.height,G,q,b.data);else{Y.sort((st,xt)=>st.start-xt.start);let Rt=0;for(let st=1;st<Y.length;st++){let xt=Y[Rt],Ft=Y[st],It=xt.start+xt.count,_t=Zt(Ft.start,b.width,4),Ht=Zt(xt.start,b.width,4);Ft.start<=It+1&&_t===Ht&&Zt(Ft.start+Ft.count-1,b.width,4)===_t?xt.count=Math.max(xt.count,Ft.start+Ft.count-xt.start):(++Rt,Y[Rt]=Ft)}Y.length=Rt+1;let ct=i.getParameter(i.UNPACK_ROW_LENGTH),Tt=i.getParameter(i.UNPACK_SKIP_PIXELS),At=i.getParameter(i.UNPACK_SKIP_ROWS);i.pixelStorei(i.UNPACK_ROW_LENGTH,b.width);for(let st=0,xt=Y.length;st<xt;st++){let Ft=Y[st],It=Math.floor(Ft.start/4),_t=Math.ceil(Ft.count/4),Ht=It%b.width,F=Math.floor(It/b.width),ot=_t,ft=1;i.pixelStorei(i.UNPACK_SKIP_PIXELS,Ht),i.pixelStorei(i.UNPACK_SKIP_ROWS,F),e.texSubImage2D(i.TEXTURE_2D,0,Ht,F,ot,ft,G,q,b.data)}P.clearUpdateRanges(),i.pixelStorei(i.UNPACK_ROW_LENGTH,ct),i.pixelStorei(i.UNPACK_SKIP_PIXELS,Tt),i.pixelStorei(i.UNPACK_SKIP_ROWS,At)}}function H(P,b,G){let q=i.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(q=i.TEXTURE_2D_ARRAY),b.isData3DTexture&&(q=i.TEXTURE_3D);let et=Xt(P,b),Y=b.source;e.bindTexture(q,P.__webglTexture,i.TEXTURE0+G);let Rt=n.get(Y);if(Y.version!==Rt.__version||et===!0){e.activeTexture(i.TEXTURE0+G);let ct=jt.getPrimaries(jt.workingColorSpace),Tt=b.colorSpace===Pn?null:jt.getPrimaries(b.colorSpace),At=b.colorSpace===Pn||ct===Tt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,b.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,b.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,At);let st=S(b.image,!1,s.maxTextureSize);st=zt(b,st);let xt=r.convert(b.format,b.colorSpace),Ft=r.convert(b.type),It=y(b.internalFormat,xt,Ft,b.colorSpace,b.isVideoTexture);Lt(q,b);let _t,Ht=b.mipmaps,F=b.isVideoTexture!==!0,ot=Rt.__version===void 0||et===!0,ft=Y.dataReady,Et=w(b,st);if(b.isDepthTexture)It=g(b.format===cs,b.type),ot&&(F?e.texStorage2D(i.TEXTURE_2D,1,It,st.width,st.height):e.texImage2D(i.TEXTURE_2D,0,It,st.width,st.height,0,xt,Ft,null));else if(b.isDataTexture)if(Ht.length>0){F&&ot&&e.texStorage2D(i.TEXTURE_2D,Et,It,Ht[0].width,Ht[0].height);for(let rt=0,Q=Ht.length;rt<Q;rt++)_t=Ht[rt],F?ft&&e.texSubImage2D(i.TEXTURE_2D,rt,0,0,_t.width,_t.height,xt,Ft,_t.data):e.texImage2D(i.TEXTURE_2D,rt,It,_t.width,_t.height,0,xt,Ft,_t.data);b.generateMipmaps=!1}else F?(ot&&e.texStorage2D(i.TEXTURE_2D,Et,It,st.width,st.height),ft&&vt(b,st,xt,Ft)):e.texImage2D(i.TEXTURE_2D,0,It,st.width,st.height,0,xt,Ft,st.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){F&&ot&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Et,It,Ht[0].width,Ht[0].height,st.depth);for(let rt=0,Q=Ht.length;rt<Q;rt++)if(_t=Ht[rt],b.format!==en)if(xt!==null)if(F){if(ft)if(b.layerUpdates.size>0){let Ct=Dl(_t.width,_t.height,b.format,b.type);for(let Vt of b.layerUpdates){let oe=_t.data.subarray(Vt*Ct/_t.data.BYTES_PER_ELEMENT,(Vt+1)*Ct/_t.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,rt,0,0,Vt,_t.width,_t.height,1,xt,oe)}b.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,rt,0,0,0,_t.width,_t.height,st.depth,xt,_t.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,rt,It,_t.width,_t.height,st.depth,0,_t.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else F?ft&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,rt,0,0,0,_t.width,_t.height,st.depth,xt,Ft,_t.data):e.texImage3D(i.TEXTURE_2D_ARRAY,rt,It,_t.width,_t.height,st.depth,0,xt,Ft,_t.data)}else{F&&ot&&e.texStorage2D(i.TEXTURE_2D,Et,It,Ht[0].width,Ht[0].height);for(let rt=0,Q=Ht.length;rt<Q;rt++)_t=Ht[rt],b.format!==en?xt!==null?F?ft&&e.compressedTexSubImage2D(i.TEXTURE_2D,rt,0,0,_t.width,_t.height,xt,_t.data):e.compressedTexImage2D(i.TEXTURE_2D,rt,It,_t.width,_t.height,0,_t.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):F?ft&&e.texSubImage2D(i.TEXTURE_2D,rt,0,0,_t.width,_t.height,xt,Ft,_t.data):e.texImage2D(i.TEXTURE_2D,rt,It,_t.width,_t.height,0,xt,Ft,_t.data)}else if(b.isDataArrayTexture)if(F){if(ot&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Et,It,st.width,st.height,st.depth),ft)if(b.layerUpdates.size>0){let rt=Dl(st.width,st.height,b.format,b.type);for(let Q of b.layerUpdates){let Ct=st.data.subarray(Q*rt/st.data.BYTES_PER_ELEMENT,(Q+1)*rt/st.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Q,st.width,st.height,1,xt,Ft,Ct)}b.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,st.width,st.height,st.depth,xt,Ft,st.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,It,st.width,st.height,st.depth,0,xt,Ft,st.data);else if(b.isData3DTexture)F?(ot&&e.texStorage3D(i.TEXTURE_3D,Et,It,st.width,st.height,st.depth),ft&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,st.width,st.height,st.depth,xt,Ft,st.data)):e.texImage3D(i.TEXTURE_3D,0,It,st.width,st.height,st.depth,0,xt,Ft,st.data);else if(b.isFramebufferTexture){if(ot)if(F)e.texStorage2D(i.TEXTURE_2D,Et,It,st.width,st.height);else{let rt=st.width,Q=st.height;for(let Ct=0;Ct<Et;Ct++)e.texImage2D(i.TEXTURE_2D,Ct,It,rt,Q,0,xt,Ft,null),rt>>=1,Q>>=1}}else if(Ht.length>0){if(F&&ot){let rt=Bt(Ht[0]);e.texStorage2D(i.TEXTURE_2D,Et,It,rt.width,rt.height)}for(let rt=0,Q=Ht.length;rt<Q;rt++)_t=Ht[rt],F?ft&&e.texSubImage2D(i.TEXTURE_2D,rt,0,0,xt,Ft,_t):e.texImage2D(i.TEXTURE_2D,rt,It,xt,Ft,_t);b.generateMipmaps=!1}else if(F){if(ot){let rt=Bt(st);e.texStorage2D(i.TEXTURE_2D,Et,It,rt.width,rt.height)}ft&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,xt,Ft,st)}else e.texImage2D(i.TEXTURE_2D,0,It,xt,Ft,st);m(b)&&u(q),Rt.__version=Y.version,b.onUpdate&&b.onUpdate(b)}P.__version=b.version}function Z(P,b,G){if(b.image.length!==6)return;let q=Xt(P,b),et=b.source;e.bindTexture(i.TEXTURE_CUBE_MAP,P.__webglTexture,i.TEXTURE0+G);let Y=n.get(et);if(et.version!==Y.__version||q===!0){e.activeTexture(i.TEXTURE0+G);let Rt=jt.getPrimaries(jt.workingColorSpace),ct=b.colorSpace===Pn?null:jt.getPrimaries(b.colorSpace),Tt=b.colorSpace===Pn||Rt===ct?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,b.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,b.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Tt);let At=b.isCompressedTexture||b.image[0].isCompressedTexture,st=b.image[0]&&b.image[0].isDataTexture,xt=[];for(let Q=0;Q<6;Q++)!At&&!st?xt[Q]=S(b.image[Q],!0,s.maxCubemapSize):xt[Q]=st?b.image[Q].image:b.image[Q],xt[Q]=zt(b,xt[Q]);let Ft=xt[0],It=r.convert(b.format,b.colorSpace),_t=r.convert(b.type),Ht=y(b.internalFormat,It,_t,b.colorSpace),F=b.isVideoTexture!==!0,ot=Y.__version===void 0||q===!0,ft=et.dataReady,Et=w(b,Ft);Lt(i.TEXTURE_CUBE_MAP,b);let rt;if(At){F&&ot&&e.texStorage2D(i.TEXTURE_CUBE_MAP,Et,Ht,Ft.width,Ft.height);for(let Q=0;Q<6;Q++){rt=xt[Q].mipmaps;for(let Ct=0;Ct<rt.length;Ct++){let Vt=rt[Ct];b.format!==en?It!==null?F?ft&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Ct,0,0,Vt.width,Vt.height,It,Vt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Ct,Ht,Vt.width,Vt.height,0,Vt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):F?ft&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Ct,0,0,Vt.width,Vt.height,It,_t,Vt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Ct,Ht,Vt.width,Vt.height,0,It,_t,Vt.data)}}}else{if(rt=b.mipmaps,F&&ot){rt.length>0&&Et++;let Q=Bt(xt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,Et,Ht,Q.width,Q.height)}for(let Q=0;Q<6;Q++)if(st){F?ft&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,0,0,xt[Q].width,xt[Q].height,It,_t,xt[Q].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,Ht,xt[Q].width,xt[Q].height,0,It,_t,xt[Q].data);for(let Ct=0;Ct<rt.length;Ct++){let oe=rt[Ct].image[Q].image;F?ft&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Ct+1,0,0,oe.width,oe.height,It,_t,oe.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Ct+1,Ht,oe.width,oe.height,0,It,_t,oe.data)}}else{F?ft&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,0,0,It,_t,xt[Q]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,Ht,It,_t,xt[Q]);for(let Ct=0;Ct<rt.length;Ct++){let Vt=rt[Ct];F?ft&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Ct+1,0,0,It,_t,Vt.image[Q]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Ct+1,Ht,It,_t,Vt.image[Q])}}}m(b)&&u(i.TEXTURE_CUBE_MAP),Y.__version=et.version,b.onUpdate&&b.onUpdate(b)}P.__version=b.version}function pt(P,b,G,q,et,Y){let Rt=r.convert(G.format,G.colorSpace),ct=r.convert(G.type),Tt=y(G.internalFormat,Rt,ct,G.colorSpace),At=n.get(b),st=n.get(G);if(st.__renderTarget=b,!At.__hasExternalTextures){let xt=Math.max(1,b.width>>Y),Ft=Math.max(1,b.height>>Y);et===i.TEXTURE_3D||et===i.TEXTURE_2D_ARRAY?e.texImage3D(et,Y,Tt,xt,Ft,b.depth,0,Rt,ct,null):e.texImage2D(et,Y,Tt,xt,Ft,0,Rt,ct,null)}e.bindFramebuffer(i.FRAMEBUFFER,P),it(b)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,q,et,st.__webglTexture,0,ut(b)):(et===i.TEXTURE_2D||et>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&et<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,q,et,st.__webglTexture,Y),e.bindFramebuffer(i.FRAMEBUFFER,null)}function St(P,b,G){if(i.bindRenderbuffer(i.RENDERBUFFER,P),b.depthBuffer){let q=b.depthTexture,et=q&&q.isDepthTexture?q.type:null,Y=g(b.stencilBuffer,et),Rt=b.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ct=ut(b);it(b)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ct,Y,b.width,b.height):G?i.renderbufferStorageMultisample(i.RENDERBUFFER,ct,Y,b.width,b.height):i.renderbufferStorage(i.RENDERBUFFER,Y,b.width,b.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Rt,i.RENDERBUFFER,P)}else{let q=b.textures;for(let et=0;et<q.length;et++){let Y=q[et],Rt=r.convert(Y.format,Y.colorSpace),ct=r.convert(Y.type),Tt=y(Y.internalFormat,Rt,ct,Y.colorSpace),At=ut(b);G&&it(b)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,At,Tt,b.width,b.height):it(b)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,At,Tt,b.width,b.height):i.renderbufferStorage(i.RENDERBUFFER,Tt,b.width,b.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Mt(P,b){if(b&&b.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,P),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let q=n.get(b.depthTexture);q.__renderTarget=b,(!q.__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),N(b.depthTexture,0);let et=q.__webglTexture,Y=ut(b);if(b.depthTexture.format===$i)it(b)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,et,0,Y):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,et,0);else if(b.depthTexture.format===cs)it(b)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,et,0,Y):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,et,0);else throw new Error("Unknown depthTexture format")}function qt(P){let b=n.get(P),G=P.isWebGLCubeRenderTarget===!0;if(b.__boundDepthTexture!==P.depthTexture){let q=P.depthTexture;if(b.__depthDisposeCallback&&b.__depthDisposeCallback(),q){let et=()=>{delete b.__boundDepthTexture,delete b.__depthDisposeCallback,q.removeEventListener("dispose",et)};q.addEventListener("dispose",et),b.__depthDisposeCallback=et}b.__boundDepthTexture=q}if(P.depthTexture&&!b.__autoAllocateDepthBuffer){if(G)throw new Error("target.depthTexture not supported in Cube render targets");let q=P.texture.mipmaps;q&&q.length>0?Mt(b.__webglFramebuffer[0],P):Mt(b.__webglFramebuffer,P)}else if(G){b.__webglDepthbuffer=[];for(let q=0;q<6;q++)if(e.bindFramebuffer(i.FRAMEBUFFER,b.__webglFramebuffer[q]),b.__webglDepthbuffer[q]===void 0)b.__webglDepthbuffer[q]=i.createRenderbuffer(),St(b.__webglDepthbuffer[q],P,!1);else{let et=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Y=b.__webglDepthbuffer[q];i.bindRenderbuffer(i.RENDERBUFFER,Y),i.framebufferRenderbuffer(i.FRAMEBUFFER,et,i.RENDERBUFFER,Y)}}else{let q=P.texture.mipmaps;if(q&&q.length>0?e.bindFramebuffer(i.FRAMEBUFFER,b.__webglFramebuffer[0]):e.bindFramebuffer(i.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer===void 0)b.__webglDepthbuffer=i.createRenderbuffer(),St(b.__webglDepthbuffer,P,!1);else{let et=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Y=b.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,Y),i.framebufferRenderbuffer(i.FRAMEBUFFER,et,i.RENDERBUFFER,Y)}}e.bindFramebuffer(i.FRAMEBUFFER,null)}function ee(P,b,G){let q=n.get(P);b!==void 0&&pt(q.__webglFramebuffer,P,P.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),G!==void 0&&qt(P)}function D(P){let b=P.texture,G=n.get(P),q=n.get(b);P.addEventListener("dispose",I);let et=P.textures,Y=P.isWebGLCubeRenderTarget===!0,Rt=et.length>1;if(Rt||(q.__webglTexture===void 0&&(q.__webglTexture=i.createTexture()),q.__version=b.version,a.memory.textures++),Y){G.__webglFramebuffer=[];for(let ct=0;ct<6;ct++)if(b.mipmaps&&b.mipmaps.length>0){G.__webglFramebuffer[ct]=[];for(let Tt=0;Tt<b.mipmaps.length;Tt++)G.__webglFramebuffer[ct][Tt]=i.createFramebuffer()}else G.__webglFramebuffer[ct]=i.createFramebuffer()}else{if(b.mipmaps&&b.mipmaps.length>0){G.__webglFramebuffer=[];for(let ct=0;ct<b.mipmaps.length;ct++)G.__webglFramebuffer[ct]=i.createFramebuffer()}else G.__webglFramebuffer=i.createFramebuffer();if(Rt)for(let ct=0,Tt=et.length;ct<Tt;ct++){let At=n.get(et[ct]);At.__webglTexture===void 0&&(At.__webglTexture=i.createTexture(),a.memory.textures++)}if(P.samples>0&&it(P)===!1){G.__webglMultisampledFramebuffer=i.createFramebuffer(),G.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,G.__webglMultisampledFramebuffer);for(let ct=0;ct<et.length;ct++){let Tt=et[ct];G.__webglColorRenderbuffer[ct]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,G.__webglColorRenderbuffer[ct]);let At=r.convert(Tt.format,Tt.colorSpace),st=r.convert(Tt.type),xt=y(Tt.internalFormat,At,st,Tt.colorSpace,P.isXRRenderTarget===!0),Ft=ut(P);i.renderbufferStorageMultisample(i.RENDERBUFFER,Ft,xt,P.width,P.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ct,i.RENDERBUFFER,G.__webglColorRenderbuffer[ct])}i.bindRenderbuffer(i.RENDERBUFFER,null),P.depthBuffer&&(G.__webglDepthRenderbuffer=i.createRenderbuffer(),St(G.__webglDepthRenderbuffer,P,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(Y){e.bindTexture(i.TEXTURE_CUBE_MAP,q.__webglTexture),Lt(i.TEXTURE_CUBE_MAP,b);for(let ct=0;ct<6;ct++)if(b.mipmaps&&b.mipmaps.length>0)for(let Tt=0;Tt<b.mipmaps.length;Tt++)pt(G.__webglFramebuffer[ct][Tt],P,b,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,Tt);else pt(G.__webglFramebuffer[ct],P,b,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,0);m(b)&&u(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Rt){for(let ct=0,Tt=et.length;ct<Tt;ct++){let At=et[ct],st=n.get(At),xt=i.TEXTURE_2D;(P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(xt=P.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(xt,st.__webglTexture),Lt(xt,At),pt(G.__webglFramebuffer,P,At,i.COLOR_ATTACHMENT0+ct,xt,0),m(At)&&u(xt)}e.unbindTexture()}else{let ct=i.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(ct=P.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(ct,q.__webglTexture),Lt(ct,b),b.mipmaps&&b.mipmaps.length>0)for(let Tt=0;Tt<b.mipmaps.length;Tt++)pt(G.__webglFramebuffer[Tt],P,b,i.COLOR_ATTACHMENT0,ct,Tt);else pt(G.__webglFramebuffer,P,b,i.COLOR_ATTACHMENT0,ct,0);m(b)&&u(ct),e.unbindTexture()}P.depthBuffer&&qt(P)}function nt(P){let b=P.textures;for(let G=0,q=b.length;G<q;G++){let et=b[G];if(m(et)){let Y=E(P),Rt=n.get(et).__webglTexture;e.bindTexture(Y,Rt),u(Y),e.unbindTexture()}}}let j=[],K=[];function J(P){if(P.samples>0){if(it(P)===!1){let b=P.textures,G=P.width,q=P.height,et=i.COLOR_BUFFER_BIT,Y=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Rt=n.get(P),ct=b.length>1;if(ct)for(let At=0;At<b.length;At++)e.bindFramebuffer(i.FRAMEBUFFER,Rt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+At,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,Rt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+At,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,Rt.__webglMultisampledFramebuffer);let Tt=P.texture.mipmaps;Tt&&Tt.length>0?e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Rt.__webglFramebuffer[0]):e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Rt.__webglFramebuffer);for(let At=0;At<b.length;At++){if(P.resolveDepthBuffer&&(P.depthBuffer&&(et|=i.DEPTH_BUFFER_BIT),P.stencilBuffer&&P.resolveStencilBuffer&&(et|=i.STENCIL_BUFFER_BIT)),ct){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Rt.__webglColorRenderbuffer[At]);let st=n.get(b[At]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,st,0)}i.blitFramebuffer(0,0,G,q,0,0,G,q,et,i.NEAREST),l===!0&&(j.length=0,K.length=0,j.push(i.COLOR_ATTACHMENT0+At),P.depthBuffer&&P.resolveDepthBuffer===!1&&(j.push(Y),K.push(Y),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,K)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,j))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),ct)for(let At=0;At<b.length;At++){e.bindFramebuffer(i.FRAMEBUFFER,Rt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+At,i.RENDERBUFFER,Rt.__webglColorRenderbuffer[At]);let st=n.get(b[At]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,Rt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+At,i.TEXTURE_2D,st,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Rt.__webglMultisampledFramebuffer)}else if(P.depthBuffer&&P.resolveDepthBuffer===!1&&l){let b=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[b])}}}function ut(P){return Math.min(s.maxSamples,P.samples)}function it(P){let b=n.get(P);return P.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function dt(P){let b=a.render.frame;d.get(P)!==b&&(d.set(P,b),P.update())}function zt(P,b){let G=P.colorSpace,q=P.format,et=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||G!==hi&&G!==Pn&&(jt.getTransfer(G)===ie?(q!==en||et!==hn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",G)),b}function Bt(P){return typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement?(c.width=P.naturalWidth||P.width,c.height=P.naturalHeight||P.height):typeof VideoFrame<"u"&&P instanceof VideoFrame?(c.width=P.displayWidth,c.height=P.displayHeight):(c.width=P.width,c.height=P.height),c}this.allocateTextureUnit=C,this.resetTextureUnits=T,this.setTexture2D=N,this.setTexture2DArray=O,this.setTexture3D=$,this.setTextureCube=V,this.rebindTextures=ee,this.setupRenderTarget=D,this.updateRenderTargetMipmap=nt,this.updateMultisampleRenderTarget=J,this.setupDepthRenderbuffer=qt,this.setupFrameBufferTexture=pt,this.useMultisampledRTT=it}function G0(i,t){function e(n,s=Pn){let r,a=jt.getTransfer(s);if(n===hn)return i.UNSIGNED_BYTE;if(n===wa)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Ta)return i.UNSIGNED_SHORT_5_5_5_1;if(n===yl)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===xl)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===gl)return i.BYTE;if(n===_l)return i.SHORT;if(n===as)return i.UNSIGNED_SHORT;if(n===Ea)return i.INT;if(n===Kn)return i.UNSIGNED_INT;if(n===gn)return i.FLOAT;if(n===os)return i.HALF_FLOAT;if(n===vl)return i.ALPHA;if(n===Ml)return i.RGB;if(n===en)return i.RGBA;if(n===$i)return i.DEPTH_COMPONENT;if(n===cs)return i.DEPTH_STENCIL;if(n===bl)return i.RED;if(n===Aa)return i.RED_INTEGER;if(n===Sl)return i.RG;if(n===Ca)return i.RG_INTEGER;if(n===Ra)return i.RGBA_INTEGER;if(n===ar||n===or||n===lr||n===cr)if(a===ie)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===ar)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===or)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===lr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===cr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===ar)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===or)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===lr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===cr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Ia||n===Pa||n===La||n===Da)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Ia)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Pa)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===La)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Da)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Ua||n===Na||n===Fa)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Ua||n===Na)return a===ie?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Fa)return a===ie?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Oa||n===Ba||n===ka||n===za||n===Va||n===Ha||n===Ga||n===$a||n===Wa||n===Xa||n===qa||n===Ya||n===Za||n===Ja)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Oa)return a===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Ba)return a===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===ka)return a===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===za)return a===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Va)return a===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Ha)return a===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Ga)return a===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===$a)return a===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Wa)return a===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Xa)return a===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===qa)return a===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Ya)return a===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Za)return a===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Ja)return a===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Ka||n===ja||n===Qa)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===Ka)return a===ie?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===ja)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Qa)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===to||n===eo||n===no||n===io)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===to)return r.COMPRESSED_RED_RGTC1_EXT;if(n===eo)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===no)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===io)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===ls?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}var $0=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,W0=`
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

}`,Xl=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let n=new Vs(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new cn({vertexShader:$0,fragmentShader:W0,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Ce(new mi(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},ql=class extends fn{constructor(t,e){super();let n=this,s=null,r=1,a=null,o="local-floor",l=1,c=null,d=null,h=null,f=null,p=null,_=null,S=typeof XRWebGLBinding<"u",m=new Xl,u={},E=e.getContextAttributes(),y=null,g=null,w=[],v=[],I=new lt,L=null,M=new Ee;M.viewport=new pe;let x=new Ee;x.viewport=new pe;let R=[M,x],T=new ua,C=null,U=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(H){let Z=w[H];return Z===void 0&&(Z=new Ki,w[H]=Z),Z.getTargetRaySpace()},this.getControllerGrip=function(H){let Z=w[H];return Z===void 0&&(Z=new Ki,w[H]=Z),Z.getGripSpace()},this.getHand=function(H){let Z=w[H];return Z===void 0&&(Z=new Ki,w[H]=Z),Z.getHandSpace()};function N(H){let Z=v.indexOf(H.inputSource);if(Z===-1)return;let pt=w[Z];pt!==void 0&&(pt.update(H.inputSource,H.frame,c||a),pt.dispatchEvent({type:H.type,data:H.inputSource}))}function O(){s.removeEventListener("select",N),s.removeEventListener("selectstart",N),s.removeEventListener("selectend",N),s.removeEventListener("squeeze",N),s.removeEventListener("squeezestart",N),s.removeEventListener("squeezeend",N),s.removeEventListener("end",O),s.removeEventListener("inputsourceschange",$);for(let H=0;H<w.length;H++){let Z=v[H];Z!==null&&(v[H]=null,w[H].disconnect(Z))}C=null,U=null,m.reset();for(let H in u)delete u[H];t.setRenderTarget(y),p=null,f=null,h=null,s=null,g=null,vt.stop(),n.isPresenting=!1,t.setPixelRatio(L),t.setSize(I.width,I.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(H){r=H,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(H){o=H,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(H){c=H},this.getBaseLayer=function(){return f!==null?f:p},this.getBinding=function(){return h===null&&S&&(h=new XRWebGLBinding(s,e)),h},this.getFrame=function(){return _},this.getSession=function(){return s},this.setSession=async function(H){if(s=H,s!==null){if(y=t.getRenderTarget(),s.addEventListener("select",N),s.addEventListener("selectstart",N),s.addEventListener("selectend",N),s.addEventListener("squeeze",N),s.addEventListener("squeezestart",N),s.addEventListener("squeezeend",N),s.addEventListener("end",O),s.addEventListener("inputsourceschange",$),E.xrCompatible!==!0&&await e.makeXRCompatible(),L=t.getPixelRatio(),t.getSize(I),S&&"createProjectionLayer"in XRWebGLBinding.prototype){let pt=null,St=null,Mt=null;E.depth&&(Mt=E.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,pt=E.stencil?cs:$i,St=E.stencil?ls:Kn);let qt={colorFormat:e.RGBA8,depthFormat:Mt,scaleFactor:r};h=this.getBinding(),f=h.createProjectionLayer(qt),s.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),g=new pn(f.textureWidth,f.textureHeight,{format:en,type:hn,depthTexture:new zs(f.textureWidth,f.textureHeight,St,void 0,void 0,void 0,void 0,void 0,void 0,pt),stencilBuffer:E.stencil,colorSpace:t.outputColorSpace,samples:E.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}else{let pt={antialias:E.antialias,alpha:!0,depth:E.depth,stencil:E.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,e,pt),s.updateRenderState({baseLayer:p}),t.setPixelRatio(1),t.setSize(p.framebufferWidth,p.framebufferHeight,!1),g=new pn(p.framebufferWidth,p.framebufferHeight,{format:en,type:hn,colorSpace:t.outputColorSpace,stencilBuffer:E.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}g.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),vt.setContext(s),vt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function $(H){for(let Z=0;Z<H.removed.length;Z++){let pt=H.removed[Z],St=v.indexOf(pt);St>=0&&(v[St]=null,w[St].disconnect(pt))}for(let Z=0;Z<H.added.length;Z++){let pt=H.added[Z],St=v.indexOf(pt);if(St===-1){for(let qt=0;qt<w.length;qt++)if(qt>=v.length){v.push(pt),St=qt;break}else if(v[qt]===null){v[qt]=pt,St=qt;break}if(St===-1)break}let Mt=w[St];Mt&&Mt.connect(pt)}}let V=new B,tt=new B;function ht(H,Z,pt){V.setFromMatrixPosition(Z.matrixWorld),tt.setFromMatrixPosition(pt.matrixWorld);let St=V.distanceTo(tt),Mt=Z.projectionMatrix.elements,qt=pt.projectionMatrix.elements,ee=Mt[14]/(Mt[10]-1),D=Mt[14]/(Mt[10]+1),nt=(Mt[9]+1)/Mt[5],j=(Mt[9]-1)/Mt[5],K=(Mt[8]-1)/Mt[0],J=(qt[8]+1)/qt[0],ut=ee*K,it=ee*J,dt=St/(-K+J),zt=dt*-K;if(Z.matrixWorld.decompose(H.position,H.quaternion,H.scale),H.translateX(zt),H.translateZ(dt),H.matrixWorld.compose(H.position,H.quaternion,H.scale),H.matrixWorldInverse.copy(H.matrixWorld).invert(),Mt[10]===-1)H.projectionMatrix.copy(Z.projectionMatrix),H.projectionMatrixInverse.copy(Z.projectionMatrixInverse);else{let Bt=ee+dt,P=D+dt,b=ut-zt,G=it+(St-zt),q=nt*D/P*Bt,et=j*D/P*Bt;H.projectionMatrix.makePerspective(b,G,q,et,Bt,P),H.projectionMatrixInverse.copy(H.projectionMatrix).invert()}}function gt(H,Z){Z===null?H.matrixWorld.copy(H.matrix):H.matrixWorld.multiplyMatrices(Z.matrixWorld,H.matrix),H.matrixWorldInverse.copy(H.matrixWorld).invert()}this.updateCamera=function(H){if(s===null)return;let Z=H.near,pt=H.far;m.texture!==null&&(m.depthNear>0&&(Z=m.depthNear),m.depthFar>0&&(pt=m.depthFar)),T.near=x.near=M.near=Z,T.far=x.far=M.far=pt,(C!==T.near||U!==T.far)&&(s.updateRenderState({depthNear:T.near,depthFar:T.far}),C=T.near,U=T.far),T.layers.mask=H.layers.mask|6,M.layers.mask=T.layers.mask&3,x.layers.mask=T.layers.mask&5;let St=H.parent,Mt=T.cameras;gt(T,St);for(let qt=0;qt<Mt.length;qt++)gt(Mt[qt],St);Mt.length===2?ht(T,M,x):T.projectionMatrix.copy(M.projectionMatrix),Lt(H,T,St)};function Lt(H,Z,pt){pt===null?H.matrix.copy(Z.matrixWorld):(H.matrix.copy(pt.matrixWorld),H.matrix.invert(),H.matrix.multiply(Z.matrixWorld)),H.matrix.decompose(H.position,H.quaternion,H.scale),H.updateMatrixWorld(!0),H.projectionMatrix.copy(Z.projectionMatrix),H.projectionMatrixInverse.copy(Z.projectionMatrixInverse),H.isPerspectiveCamera&&(H.fov=ui*2*Math.atan(1/H.projectionMatrix.elements[5]),H.zoom=1)}this.getCamera=function(){return T},this.getFoveation=function(){if(!(f===null&&p===null))return l},this.setFoveation=function(H){l=H,f!==null&&(f.fixedFoveation=H),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=H)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(T)},this.getCameraTexture=function(H){return u[H]};let Xt=null;function Zt(H,Z){if(d=Z.getViewerPose(c||a),_=Z,d!==null){let pt=d.views;p!==null&&(t.setRenderTargetFramebuffer(g,p.framebuffer),t.setRenderTarget(g));let St=!1;pt.length!==T.cameras.length&&(T.cameras.length=0,St=!0);for(let D=0;D<pt.length;D++){let nt=pt[D],j=null;if(p!==null)j=p.getViewport(nt);else{let J=h.getViewSubImage(f,nt);j=J.viewport,D===0&&(t.setRenderTargetTextures(g,J.colorTexture,J.depthStencilTexture),t.setRenderTarget(g))}let K=R[D];K===void 0&&(K=new Ee,K.layers.enable(D),K.viewport=new pe,R[D]=K),K.matrix.fromArray(nt.transform.matrix),K.matrix.decompose(K.position,K.quaternion,K.scale),K.projectionMatrix.fromArray(nt.projectionMatrix),K.projectionMatrixInverse.copy(K.projectionMatrix).invert(),K.viewport.set(j.x,j.y,j.width,j.height),D===0&&(T.matrix.copy(K.matrix),T.matrix.decompose(T.position,T.quaternion,T.scale)),St===!0&&T.cameras.push(K)}let Mt=s.enabledFeatures;if(Mt&&Mt.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&S){h=n.getBinding();let D=h.getDepthInformation(pt[0]);D&&D.isValid&&D.texture&&m.init(D,s.renderState)}if(Mt&&Mt.includes("camera-access")&&S){t.state.unbindTexture(),h=n.getBinding();for(let D=0;D<pt.length;D++){let nt=pt[D].camera;if(nt){let j=u[nt];j||(j=new Vs,u[nt]=j);let K=h.getCameraImage(nt);j.sourceTexture=K}}}}for(let pt=0;pt<w.length;pt++){let St=v[pt],Mt=w[pt];St!==null&&Mt!==void 0&&Mt.update(St,Z,c||a)}Xt&&Xt(H,Z),Z.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:Z}),_=null}let vt=new ou;vt.setAnimationLoop(Zt),this.setAnimationLoop=function(H){Xt=H},this.dispose=function(){}}},bi=new ln,X0=new le;function q0(i,t){function e(m,u){m.matrixAutoUpdate===!0&&m.updateMatrix(),u.value.copy(m.matrix)}function n(m,u){u.color.getRGB(m.fogColor.value,Rl(i)),u.isFog?(m.fogNear.value=u.near,m.fogFar.value=u.far):u.isFogExp2&&(m.fogDensity.value=u.density)}function s(m,u,E,y,g){u.isMeshBasicMaterial||u.isMeshLambertMaterial?r(m,u):u.isMeshToonMaterial?(r(m,u),h(m,u)):u.isMeshPhongMaterial?(r(m,u),d(m,u)):u.isMeshStandardMaterial?(r(m,u),f(m,u),u.isMeshPhysicalMaterial&&p(m,u,g)):u.isMeshMatcapMaterial?(r(m,u),_(m,u)):u.isMeshDepthMaterial?r(m,u):u.isMeshDistanceMaterial?(r(m,u),S(m,u)):u.isMeshNormalMaterial?r(m,u):u.isLineBasicMaterial?(a(m,u),u.isLineDashedMaterial&&o(m,u)):u.isPointsMaterial?l(m,u,E,y):u.isSpriteMaterial?c(m,u):u.isShadowMaterial?(m.color.value.copy(u.color),m.opacity.value=u.opacity):u.isShaderMaterial&&(u.uniformsNeedUpdate=!1)}function r(m,u){m.opacity.value=u.opacity,u.color&&m.diffuse.value.copy(u.color),u.emissive&&m.emissive.value.copy(u.emissive).multiplyScalar(u.emissiveIntensity),u.map&&(m.map.value=u.map,e(u.map,m.mapTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap,e(u.alphaMap,m.alphaMapTransform)),u.bumpMap&&(m.bumpMap.value=u.bumpMap,e(u.bumpMap,m.bumpMapTransform),m.bumpScale.value=u.bumpScale,u.side===De&&(m.bumpScale.value*=-1)),u.normalMap&&(m.normalMap.value=u.normalMap,e(u.normalMap,m.normalMapTransform),m.normalScale.value.copy(u.normalScale),u.side===De&&m.normalScale.value.negate()),u.displacementMap&&(m.displacementMap.value=u.displacementMap,e(u.displacementMap,m.displacementMapTransform),m.displacementScale.value=u.displacementScale,m.displacementBias.value=u.displacementBias),u.emissiveMap&&(m.emissiveMap.value=u.emissiveMap,e(u.emissiveMap,m.emissiveMapTransform)),u.specularMap&&(m.specularMap.value=u.specularMap,e(u.specularMap,m.specularMapTransform)),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest);let E=t.get(u),y=E.envMap,g=E.envMapRotation;y&&(m.envMap.value=y,bi.copy(g),bi.x*=-1,bi.y*=-1,bi.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(bi.y*=-1,bi.z*=-1),m.envMapRotation.value.setFromMatrix4(X0.makeRotationFromEuler(bi)),m.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=u.reflectivity,m.ior.value=u.ior,m.refractionRatio.value=u.refractionRatio),u.lightMap&&(m.lightMap.value=u.lightMap,m.lightMapIntensity.value=u.lightMapIntensity,e(u.lightMap,m.lightMapTransform)),u.aoMap&&(m.aoMap.value=u.aoMap,m.aoMapIntensity.value=u.aoMapIntensity,e(u.aoMap,m.aoMapTransform))}function a(m,u){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,u.map&&(m.map.value=u.map,e(u.map,m.mapTransform))}function o(m,u){m.dashSize.value=u.dashSize,m.totalSize.value=u.dashSize+u.gapSize,m.scale.value=u.scale}function l(m,u,E,y){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,m.size.value=u.size*E,m.scale.value=y*.5,u.map&&(m.map.value=u.map,e(u.map,m.uvTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap,e(u.alphaMap,m.alphaMapTransform)),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest)}function c(m,u){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,m.rotation.value=u.rotation,u.map&&(m.map.value=u.map,e(u.map,m.mapTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap,e(u.alphaMap,m.alphaMapTransform)),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest)}function d(m,u){m.specular.value.copy(u.specular),m.shininess.value=Math.max(u.shininess,1e-4)}function h(m,u){u.gradientMap&&(m.gradientMap.value=u.gradientMap)}function f(m,u){m.metalness.value=u.metalness,u.metalnessMap&&(m.metalnessMap.value=u.metalnessMap,e(u.metalnessMap,m.metalnessMapTransform)),m.roughness.value=u.roughness,u.roughnessMap&&(m.roughnessMap.value=u.roughnessMap,e(u.roughnessMap,m.roughnessMapTransform)),u.envMap&&(m.envMapIntensity.value=u.envMapIntensity)}function p(m,u,E){m.ior.value=u.ior,u.sheen>0&&(m.sheenColor.value.copy(u.sheenColor).multiplyScalar(u.sheen),m.sheenRoughness.value=u.sheenRoughness,u.sheenColorMap&&(m.sheenColorMap.value=u.sheenColorMap,e(u.sheenColorMap,m.sheenColorMapTransform)),u.sheenRoughnessMap&&(m.sheenRoughnessMap.value=u.sheenRoughnessMap,e(u.sheenRoughnessMap,m.sheenRoughnessMapTransform))),u.clearcoat>0&&(m.clearcoat.value=u.clearcoat,m.clearcoatRoughness.value=u.clearcoatRoughness,u.clearcoatMap&&(m.clearcoatMap.value=u.clearcoatMap,e(u.clearcoatMap,m.clearcoatMapTransform)),u.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=u.clearcoatRoughnessMap,e(u.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),u.clearcoatNormalMap&&(m.clearcoatNormalMap.value=u.clearcoatNormalMap,e(u.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(u.clearcoatNormalScale),u.side===De&&m.clearcoatNormalScale.value.negate())),u.dispersion>0&&(m.dispersion.value=u.dispersion),u.iridescence>0&&(m.iridescence.value=u.iridescence,m.iridescenceIOR.value=u.iridescenceIOR,m.iridescenceThicknessMinimum.value=u.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=u.iridescenceThicknessRange[1],u.iridescenceMap&&(m.iridescenceMap.value=u.iridescenceMap,e(u.iridescenceMap,m.iridescenceMapTransform)),u.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=u.iridescenceThicknessMap,e(u.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),u.transmission>0&&(m.transmission.value=u.transmission,m.transmissionSamplerMap.value=E.texture,m.transmissionSamplerSize.value.set(E.width,E.height),u.transmissionMap&&(m.transmissionMap.value=u.transmissionMap,e(u.transmissionMap,m.transmissionMapTransform)),m.thickness.value=u.thickness,u.thicknessMap&&(m.thicknessMap.value=u.thicknessMap,e(u.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=u.attenuationDistance,m.attenuationColor.value.copy(u.attenuationColor)),u.anisotropy>0&&(m.anisotropyVector.value.set(u.anisotropy*Math.cos(u.anisotropyRotation),u.anisotropy*Math.sin(u.anisotropyRotation)),u.anisotropyMap&&(m.anisotropyMap.value=u.anisotropyMap,e(u.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=u.specularIntensity,m.specularColor.value.copy(u.specularColor),u.specularColorMap&&(m.specularColorMap.value=u.specularColorMap,e(u.specularColorMap,m.specularColorMapTransform)),u.specularIntensityMap&&(m.specularIntensityMap.value=u.specularIntensityMap,e(u.specularIntensityMap,m.specularIntensityMapTransform))}function _(m,u){u.matcap&&(m.matcap.value=u.matcap)}function S(m,u){let E=t.get(u).light;m.referencePosition.value.setFromMatrixPosition(E.matrixWorld),m.nearDistance.value=E.shadow.camera.near,m.farDistance.value=E.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function Y0(i,t,e,n){let s={},r={},a=[],o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(E,y){let g=y.program;n.uniformBlockBinding(E,g)}function c(E,y){let g=s[E.id];g===void 0&&(_(E),g=d(E),s[E.id]=g,E.addEventListener("dispose",m));let w=y.program;n.updateUBOMapping(E,w);let v=t.render.frame;r[E.id]!==v&&(f(E),r[E.id]=v)}function d(E){let y=h();E.__bindingPointIndex=y;let g=i.createBuffer(),w=E.__size,v=E.usage;return i.bindBuffer(i.UNIFORM_BUFFER,g),i.bufferData(i.UNIFORM_BUFFER,w,v),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,y,g),g}function h(){for(let E=0;E<o;E++)if(a.indexOf(E)===-1)return a.push(E),E;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(E){let y=s[E.id],g=E.uniforms,w=E.__cache;i.bindBuffer(i.UNIFORM_BUFFER,y);for(let v=0,I=g.length;v<I;v++){let L=Array.isArray(g[v])?g[v]:[g[v]];for(let M=0,x=L.length;M<x;M++){let R=L[M];if(p(R,v,M,w)===!0){let T=R.__offset,C=Array.isArray(R.value)?R.value:[R.value],U=0;for(let N=0;N<C.length;N++){let O=C[N],$=S(O);typeof O=="number"||typeof O=="boolean"?(R.__data[0]=O,i.bufferSubData(i.UNIFORM_BUFFER,T+U,R.__data)):O.isMatrix3?(R.__data[0]=O.elements[0],R.__data[1]=O.elements[1],R.__data[2]=O.elements[2],R.__data[3]=0,R.__data[4]=O.elements[3],R.__data[5]=O.elements[4],R.__data[6]=O.elements[5],R.__data[7]=0,R.__data[8]=O.elements[6],R.__data[9]=O.elements[7],R.__data[10]=O.elements[8],R.__data[11]=0):(O.toArray(R.__data,U),U+=$.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,T,R.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function p(E,y,g,w){let v=E.value,I=y+"_"+g;if(w[I]===void 0)return typeof v=="number"||typeof v=="boolean"?w[I]=v:w[I]=v.clone(),!0;{let L=w[I];if(typeof v=="number"||typeof v=="boolean"){if(L!==v)return w[I]=v,!0}else if(L.equals(v)===!1)return L.copy(v),!0}return!1}function _(E){let y=E.uniforms,g=0,w=16;for(let I=0,L=y.length;I<L;I++){let M=Array.isArray(y[I])?y[I]:[y[I]];for(let x=0,R=M.length;x<R;x++){let T=M[x],C=Array.isArray(T.value)?T.value:[T.value];for(let U=0,N=C.length;U<N;U++){let O=C[U],$=S(O),V=g%w,tt=V%$.boundary,ht=V+tt;g+=tt,ht!==0&&w-ht<$.storage&&(g+=w-ht),T.__data=new Float32Array($.storage/Float32Array.BYTES_PER_ELEMENT),T.__offset=g,g+=$.storage}}}let v=g%w;return v>0&&(g+=w-v),E.__size=g,E.__cache={},this}function S(E){let y={boundary:0,storage:0};return typeof E=="number"||typeof E=="boolean"?(y.boundary=4,y.storage=4):E.isVector2?(y.boundary=8,y.storage=8):E.isVector3||E.isColor?(y.boundary=16,y.storage=12):E.isVector4?(y.boundary=16,y.storage=16):E.isMatrix3?(y.boundary=48,y.storage=48):E.isMatrix4?(y.boundary=64,y.storage=64):E.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",E),y}function m(E){let y=E.target;y.removeEventListener("dispose",m);let g=a.indexOf(y.__bindingPointIndex);a.splice(g,1),i.deleteBuffer(s[y.id]),delete s[y.id],delete r[y.id]}function u(){for(let E in s)i.deleteBuffer(s[E]);a=[],s={},r={}}return{bind:l,update:c,dispose:u}}var lo=class{constructor(t={}){let{canvas:e=Rh(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:d="default",failIfMajorPerformanceCaveat:h=!1,reversedDepthBuffer:f=!1}=t;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=a;let _=new Uint32Array(4),S=new Int32Array(4),m=null,u=null,E=[],y=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=In,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let g=this,w=!1;this._outputColorSpace=Se;let v=0,I=0,L=null,M=-1,x=null,R=new pe,T=new pe,C=null,U=new $t(0),N=0,O=e.width,$=e.height,V=1,tt=null,ht=null,gt=new pe(0,0,O,$),Lt=new pe(0,0,O,$),Xt=!1,Zt=new ji,vt=!1,H=!1,Z=new le,pt=new B,St=new pe,Mt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},qt=!1;function ee(){return L===null?V:1}let D=n;function nt(A,k){return e.getContext(A,k)}try{let A={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:d,failIfMajorPerformanceCaveat:h};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"180"}`),e.addEventListener("webglcontextlost",ft,!1),e.addEventListener("webglcontextrestored",Et,!1),e.addEventListener("webglcontextcreationerror",rt,!1),D===null){let k="webgl2";if(D=nt(k,A),D===null)throw nt(k)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(A){throw console.error("THREE.WebGLRenderer: "+A.message),A}let j,K,J,ut,it,dt,zt,Bt,P,b,G,q,et,Y,Rt,ct,Tt,At,st,xt,Ft,It,_t,Ht;function F(){j=new dg(D),j.init(),It=new G0(D,j),K=new rg(D,j,t,It),J=new V0(D,j),K.reversedDepthBuffer&&f&&J.buffers.depth.setReversed(!0),ut=new mg(D),it=new C0,dt=new H0(D,j,J,it,K,It,ut),zt=new og(g),Bt=new ug(g),P=new Mf(D),_t=new ig(D,P),b=new fg(D,P,ut,_t),G=new _g(D,b,P,ut),st=new gg(D,K,dt),ct=new ag(it),q=new A0(g,zt,Bt,j,K,_t,ct),et=new q0(g,it),Y=new I0,Rt=new F0(j),At=new ng(g,zt,Bt,J,G,p,l),Tt=new k0(g,G,K),Ht=new Y0(D,ut,K,J),xt=new sg(D,j,ut),Ft=new pg(D,j,ut),ut.programs=q.programs,g.capabilities=K,g.extensions=j,g.properties=it,g.renderLists=Y,g.shadowMap=Tt,g.state=J,g.info=ut}F();let ot=new ql(g,D);this.xr=ot,this.getContext=function(){return D},this.getContextAttributes=function(){return D.getContextAttributes()},this.forceContextLoss=function(){let A=j.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){let A=j.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return V},this.setPixelRatio=function(A){A!==void 0&&(V=A,this.setSize(O,$,!1))},this.getSize=function(A){return A.set(O,$)},this.setSize=function(A,k,W=!0){if(ot.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}O=A,$=k,e.width=Math.floor(A*V),e.height=Math.floor(k*V),W===!0&&(e.style.width=A+"px",e.style.height=k+"px"),this.setViewport(0,0,A,k)},this.getDrawingBufferSize=function(A){return A.set(O*V,$*V).floor()},this.setDrawingBufferSize=function(A,k,W){O=A,$=k,V=W,e.width=Math.floor(A*W),e.height=Math.floor(k*W),this.setViewport(0,0,A,k)},this.getCurrentViewport=function(A){return A.copy(R)},this.getViewport=function(A){return A.copy(gt)},this.setViewport=function(A,k,W,X){A.isVector4?gt.set(A.x,A.y,A.z,A.w):gt.set(A,k,W,X),J.viewport(R.copy(gt).multiplyScalar(V).round())},this.getScissor=function(A){return A.copy(Lt)},this.setScissor=function(A,k,W,X){A.isVector4?Lt.set(A.x,A.y,A.z,A.w):Lt.set(A,k,W,X),J.scissor(T.copy(Lt).multiplyScalar(V).round())},this.getScissorTest=function(){return Xt},this.setScissorTest=function(A){J.setScissorTest(Xt=A)},this.setOpaqueSort=function(A){tt=A},this.setTransparentSort=function(A){ht=A},this.getClearColor=function(A){return A.copy(At.getClearColor())},this.setClearColor=function(){At.setClearColor(...arguments)},this.getClearAlpha=function(){return At.getClearAlpha()},this.setClearAlpha=function(){At.setClearAlpha(...arguments)},this.clear=function(A=!0,k=!0,W=!0){let X=0;if(A){let z=!1;if(L!==null){let at=L.texture.format;z=at===Ra||at===Ca||at===Aa}if(z){let at=L.texture.type,yt=at===hn||at===Kn||at===as||at===ls||at===wa||at===Ta,wt=At.getClearColor(),bt=At.getClearAlpha(),Nt=wt.r,Ot=wt.g,Pt=wt.b;yt?(_[0]=Nt,_[1]=Ot,_[2]=Pt,_[3]=bt,D.clearBufferuiv(D.COLOR,0,_)):(S[0]=Nt,S[1]=Ot,S[2]=Pt,S[3]=bt,D.clearBufferiv(D.COLOR,0,S))}else X|=D.COLOR_BUFFER_BIT}k&&(X|=D.DEPTH_BUFFER_BIT),W&&(X|=D.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),D.clear(X)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",ft,!1),e.removeEventListener("webglcontextrestored",Et,!1),e.removeEventListener("webglcontextcreationerror",rt,!1),At.dispose(),Y.dispose(),Rt.dispose(),it.dispose(),zt.dispose(),Bt.dispose(),G.dispose(),_t.dispose(),Ht.dispose(),q.dispose(),ot.dispose(),ot.removeEventListener("sessionstart",dn),ot.removeEventListener("sessionend",dc),ti.stop()};function ft(A){A.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),w=!0}function Et(){console.log("THREE.WebGLRenderer: Context Restored."),w=!1;let A=ut.autoReset,k=Tt.enabled,W=Tt.autoUpdate,X=Tt.needsUpdate,z=Tt.type;F(),ut.autoReset=A,Tt.enabled=k,Tt.autoUpdate=W,Tt.needsUpdate=X,Tt.type=z}function rt(A){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function Q(A){let k=A.target;k.removeEventListener("dispose",Q),Ct(k)}function Ct(A){Vt(A),it.remove(A)}function Vt(A){let k=it.get(A).programs;k!==void 0&&(k.forEach(function(W){q.releaseProgram(W)}),A.isShaderMaterial&&q.releaseShaderCache(A))}this.renderBufferDirect=function(A,k,W,X,z,at){k===null&&(k=Mt);let yt=z.isMesh&&z.matrixWorld.determinant()<0,wt=Yu(A,k,W,X,z);J.setMaterial(X,yt);let bt=W.index,Nt=1;if(X.wireframe===!0){if(bt=b.getWireframeAttribute(W),bt===void 0)return;Nt=2}let Ot=W.drawRange,Pt=W.attributes.position,Jt=Ot.start*Nt,se=(Ot.start+Ot.count)*Nt;at!==null&&(Jt=Math.max(Jt,at.start*Nt),se=Math.min(se,(at.start+at.count)*Nt)),bt!==null?(Jt=Math.max(Jt,0),se=Math.min(se,bt.count)):Pt!=null&&(Jt=Math.max(Jt,0),se=Math.min(se,Pt.count));let me=se-Jt;if(me<0||me===1/0)return;_t.setup(z,X,wt,W,bt);let ce,ae=xt;if(bt!==null&&(ce=P.get(bt),ae=Ft,ae.setIndex(ce)),z.isMesh)X.wireframe===!0?(J.setLineWidth(X.wireframeLinewidth*ee()),ae.setMode(D.LINES)):ae.setMode(D.TRIANGLES);else if(z.isLine){let Ut=X.linewidth;Ut===void 0&&(Ut=1),J.setLineWidth(Ut*ee()),z.isLineSegments?ae.setMode(D.LINES):z.isLineLoop?ae.setMode(D.LINE_LOOP):ae.setMode(D.LINE_STRIP)}else z.isPoints?ae.setMode(D.POINTS):z.isSprite&&ae.setMode(D.TRIANGLES);if(z.isBatchedMesh)if(z._multiDrawInstances!==null)Xi("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),ae.renderMultiDrawInstances(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount,z._multiDrawInstances);else if(j.get("WEBGL_multi_draw"))ae.renderMultiDraw(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount);else{let Ut=z._multiDrawStarts,ue=z._multiDrawCounts,te=z._multiDrawCount,ke=bt?P.get(bt).bytesPerElement:1,Ci=it.get(X).currentProgram.getUniforms();for(let ze=0;ze<te;ze++)Ci.setValue(D,"_gl_DrawID",ze),ae.render(Ut[ze]/ke,ue[ze])}else if(z.isInstancedMesh)ae.renderInstances(Jt,me,z.count);else if(W.isInstancedBufferGeometry){let Ut=W._maxInstanceCount!==void 0?W._maxInstanceCount:1/0,ue=Math.min(W.instanceCount,Ut);ae.renderInstances(Jt,me,ue)}else ae.render(Jt,me)};function oe(A,k,W){A.transparent===!0&&A.side===tn&&A.forceSinglePass===!1?(A.side=De,A.needsUpdate=!0,fr(A,k,W),A.side=An,A.needsUpdate=!0,fr(A,k,W),A.side=tn):fr(A,k,W)}this.compile=function(A,k,W=null){W===null&&(W=A),u=Rt.get(W),u.init(k),y.push(u),W.traverseVisible(function(z){z.isLight&&z.layers.test(k.layers)&&(u.pushLight(z),z.castShadow&&u.pushShadow(z))}),A!==W&&A.traverseVisible(function(z){z.isLight&&z.layers.test(k.layers)&&(u.pushLight(z),z.castShadow&&u.pushShadow(z))}),u.setupLights();let X=new Set;return A.traverse(function(z){if(!(z.isMesh||z.isPoints||z.isLine||z.isSprite))return;let at=z.material;if(at)if(Array.isArray(at))for(let yt=0;yt<at.length;yt++){let wt=at[yt];oe(wt,W,z),X.add(wt)}else oe(at,W,z),X.add(at)}),u=y.pop(),X},this.compileAsync=function(A,k,W=null){let X=this.compile(A,k,W);return new Promise(z=>{function at(){if(X.forEach(function(yt){it.get(yt).currentProgram.isReady()&&X.delete(yt)}),X.size===0){z(A);return}setTimeout(at,10)}j.get("KHR_parallel_shader_compile")!==null?at():setTimeout(at,10)})};let ne=null;function xn(A){ne&&ne(A)}function dn(){ti.stop()}function dc(){ti.start()}let ti=new ou;ti.setAnimationLoop(xn),typeof self<"u"&&ti.setContext(self),this.setAnimationLoop=function(A){ne=A,ot.setAnimationLoop(A),A===null?ti.stop():ti.start()},ot.addEventListener("sessionstart",dn),ot.addEventListener("sessionend",dc),this.render=function(A,k){if(k!==void 0&&k.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(w===!0)return;if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),k.parent===null&&k.matrixWorldAutoUpdate===!0&&k.updateMatrixWorld(),ot.enabled===!0&&ot.isPresenting===!0&&(ot.cameraAutoUpdate===!0&&ot.updateCamera(k),k=ot.getCamera()),A.isScene===!0&&A.onBeforeRender(g,A,k,L),u=Rt.get(A,y.length),u.init(k),y.push(u),Z.multiplyMatrices(k.projectionMatrix,k.matrixWorldInverse),Zt.setFromProjectionMatrix(Z,an,k.reversedDepth),H=this.localClippingEnabled,vt=ct.init(this.clippingPlanes,H),m=Y.get(A,E.length),m.init(),E.push(m),ot.enabled===!0&&ot.isPresenting===!0){let at=g.xr.getDepthSensingMesh();at!==null&&So(at,k,-1/0,g.sortObjects)}So(A,k,0,g.sortObjects),m.finish(),g.sortObjects===!0&&m.sort(tt,ht),qt=ot.enabled===!1||ot.isPresenting===!1||ot.hasDepthSensing()===!1,qt&&At.addToRenderList(m,A),this.info.render.frame++,vt===!0&&ct.beginShadows();let W=u.state.shadowsArray;Tt.render(W,A,k),vt===!0&&ct.endShadows(),this.info.autoReset===!0&&this.info.reset();let X=m.opaque,z=m.transmissive;if(u.setupLights(),k.isArrayCamera){let at=k.cameras;if(z.length>0)for(let yt=0,wt=at.length;yt<wt;yt++){let bt=at[yt];pc(X,z,A,bt)}qt&&At.render(A);for(let yt=0,wt=at.length;yt<wt;yt++){let bt=at[yt];fc(m,A,bt,bt.viewport)}}else z.length>0&&pc(X,z,A,k),qt&&At.render(A),fc(m,A,k);L!==null&&I===0&&(dt.updateMultisampleRenderTarget(L),dt.updateRenderTargetMipmap(L)),A.isScene===!0&&A.onAfterRender(g,A,k),_t.resetDefaultState(),M=-1,x=null,y.pop(),y.length>0?(u=y[y.length-1],vt===!0&&ct.setGlobalState(g.clippingPlanes,u.state.camera)):u=null,E.pop(),E.length>0?m=E[E.length-1]:m=null};function So(A,k,W,X){if(A.visible===!1)return;if(A.layers.test(k.layers)){if(A.isGroup)W=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(k);else if(A.isLight)u.pushLight(A),A.castShadow&&u.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||Zt.intersectsSprite(A)){X&&St.setFromMatrixPosition(A.matrixWorld).applyMatrix4(Z);let yt=G.update(A),wt=A.material;wt.visible&&m.push(A,yt,wt,W,St.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||Zt.intersectsObject(A))){let yt=G.update(A),wt=A.material;if(X&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),St.copy(A.boundingSphere.center)):(yt.boundingSphere===null&&yt.computeBoundingSphere(),St.copy(yt.boundingSphere.center)),St.applyMatrix4(A.matrixWorld).applyMatrix4(Z)),Array.isArray(wt)){let bt=yt.groups;for(let Nt=0,Ot=bt.length;Nt<Ot;Nt++){let Pt=bt[Nt],Jt=wt[Pt.materialIndex];Jt&&Jt.visible&&m.push(A,yt,Jt,W,St.z,Pt)}}else wt.visible&&m.push(A,yt,wt,W,St.z,null)}}let at=A.children;for(let yt=0,wt=at.length;yt<wt;yt++)So(at[yt],k,W,X)}function fc(A,k,W,X){let z=A.opaque,at=A.transmissive,yt=A.transparent;u.setupLightsView(W),vt===!0&&ct.setGlobalState(g.clippingPlanes,W),X&&J.viewport(R.copy(X)),z.length>0&&dr(z,k,W),at.length>0&&dr(at,k,W),yt.length>0&&dr(yt,k,W),J.buffers.depth.setTest(!0),J.buffers.depth.setMask(!0),J.buffers.color.setMask(!0),J.setPolygonOffset(!1)}function pc(A,k,W,X){if((W.isScene===!0?W.overrideMaterial:null)!==null)return;u.state.transmissionRenderTarget[X.id]===void 0&&(u.state.transmissionRenderTarget[X.id]=new pn(1,1,{generateMipmaps:!0,type:j.has("EXT_color_buffer_half_float")||j.has("EXT_color_buffer_float")?os:hn,minFilter:Jn,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:jt.workingColorSpace}));let at=u.state.transmissionRenderTarget[X.id],yt=X.viewport||R;at.setSize(yt.z*g.transmissionResolutionScale,yt.w*g.transmissionResolutionScale);let wt=g.getRenderTarget(),bt=g.getActiveCubeFace(),Nt=g.getActiveMipmapLevel();g.setRenderTarget(at),g.getClearColor(U),N=g.getClearAlpha(),N<1&&g.setClearColor(16777215,.5),g.clear(),qt&&At.render(W);let Ot=g.toneMapping;g.toneMapping=In;let Pt=X.viewport;if(X.viewport!==void 0&&(X.viewport=void 0),u.setupLightsView(X),vt===!0&&ct.setGlobalState(g.clippingPlanes,X),dr(A,W,X),dt.updateMultisampleRenderTarget(at),dt.updateRenderTargetMipmap(at),j.has("WEBGL_multisampled_render_to_texture")===!1){let Jt=!1;for(let se=0,me=k.length;se<me;se++){let ce=k[se],ae=ce.object,Ut=ce.geometry,ue=ce.material,te=ce.group;if(ue.side===tn&&ae.layers.test(X.layers)){let ke=ue.side;ue.side=De,ue.needsUpdate=!0,mc(ae,W,X,Ut,ue,te),ue.side=ke,ue.needsUpdate=!0,Jt=!0}}Jt===!0&&(dt.updateMultisampleRenderTarget(at),dt.updateRenderTargetMipmap(at))}g.setRenderTarget(wt,bt,Nt),g.setClearColor(U,N),Pt!==void 0&&(X.viewport=Pt),g.toneMapping=Ot}function dr(A,k,W){let X=k.isScene===!0?k.overrideMaterial:null;for(let z=0,at=A.length;z<at;z++){let yt=A[z],wt=yt.object,bt=yt.geometry,Nt=yt.group,Ot=yt.material;Ot.allowOverride===!0&&X!==null&&(Ot=X),wt.layers.test(W.layers)&&mc(wt,k,W,bt,Ot,Nt)}}function mc(A,k,W,X,z,at){A.onBeforeRender(g,k,W,X,z,at),A.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),z.onBeforeRender(g,k,W,X,A,at),z.transparent===!0&&z.side===tn&&z.forceSinglePass===!1?(z.side=De,z.needsUpdate=!0,g.renderBufferDirect(W,k,X,z,A,at),z.side=An,z.needsUpdate=!0,g.renderBufferDirect(W,k,X,z,A,at),z.side=tn):g.renderBufferDirect(W,k,X,z,A,at),A.onAfterRender(g,k,W,X,z,at)}function fr(A,k,W){k.isScene!==!0&&(k=Mt);let X=it.get(A),z=u.state.lights,at=u.state.shadowsArray,yt=z.state.version,wt=q.getParameters(A,z.state,at,k,W),bt=q.getProgramCacheKey(wt),Nt=X.programs;X.environment=A.isMeshStandardMaterial?k.environment:null,X.fog=k.fog,X.envMap=(A.isMeshStandardMaterial?Bt:zt).get(A.envMap||X.environment),X.envMapRotation=X.environment!==null&&A.envMap===null?k.environmentRotation:A.envMapRotation,Nt===void 0&&(A.addEventListener("dispose",Q),Nt=new Map,X.programs=Nt);let Ot=Nt.get(bt);if(Ot!==void 0){if(X.currentProgram===Ot&&X.lightsStateVersion===yt)return _c(A,wt),Ot}else wt.uniforms=q.getUniforms(A),A.onBeforeCompile(wt,g),Ot=q.acquireProgram(wt,bt),Nt.set(bt,Ot),X.uniforms=wt.uniforms;let Pt=X.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(Pt.clippingPlanes=ct.uniform),_c(A,wt),X.needsLights=Ju(A),X.lightsStateVersion=yt,X.needsLights&&(Pt.ambientLightColor.value=z.state.ambient,Pt.lightProbe.value=z.state.probe,Pt.directionalLights.value=z.state.directional,Pt.directionalLightShadows.value=z.state.directionalShadow,Pt.spotLights.value=z.state.spot,Pt.spotLightShadows.value=z.state.spotShadow,Pt.rectAreaLights.value=z.state.rectArea,Pt.ltc_1.value=z.state.rectAreaLTC1,Pt.ltc_2.value=z.state.rectAreaLTC2,Pt.pointLights.value=z.state.point,Pt.pointLightShadows.value=z.state.pointShadow,Pt.hemisphereLights.value=z.state.hemi,Pt.directionalShadowMap.value=z.state.directionalShadowMap,Pt.directionalShadowMatrix.value=z.state.directionalShadowMatrix,Pt.spotShadowMap.value=z.state.spotShadowMap,Pt.spotLightMatrix.value=z.state.spotLightMatrix,Pt.spotLightMap.value=z.state.spotLightMap,Pt.pointShadowMap.value=z.state.pointShadowMap,Pt.pointShadowMatrix.value=z.state.pointShadowMatrix),X.currentProgram=Ot,X.uniformsList=null,Ot}function gc(A){if(A.uniformsList===null){let k=A.currentProgram.getUniforms();A.uniformsList=ds.seqWithValue(k.seq,A.uniforms)}return A.uniformsList}function _c(A,k){let W=it.get(A);W.outputColorSpace=k.outputColorSpace,W.batching=k.batching,W.batchingColor=k.batchingColor,W.instancing=k.instancing,W.instancingColor=k.instancingColor,W.instancingMorph=k.instancingMorph,W.skinning=k.skinning,W.morphTargets=k.morphTargets,W.morphNormals=k.morphNormals,W.morphColors=k.morphColors,W.morphTargetsCount=k.morphTargetsCount,W.numClippingPlanes=k.numClippingPlanes,W.numIntersection=k.numClipIntersection,W.vertexAlphas=k.vertexAlphas,W.vertexTangents=k.vertexTangents,W.toneMapping=k.toneMapping}function Yu(A,k,W,X,z){k.isScene!==!0&&(k=Mt),dt.resetTextureUnits();let at=k.fog,yt=X.isMeshStandardMaterial?k.environment:null,wt=L===null?g.outputColorSpace:L.isXRRenderTarget===!0?L.texture.colorSpace:hi,bt=(X.isMeshStandardMaterial?Bt:zt).get(X.envMap||yt),Nt=X.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,Ot=!!W.attributes.tangent&&(!!X.normalMap||X.anisotropy>0),Pt=!!W.morphAttributes.position,Jt=!!W.morphAttributes.normal,se=!!W.morphAttributes.color,me=In;X.toneMapped&&(L===null||L.isXRRenderTarget===!0)&&(me=g.toneMapping);let ce=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,ae=ce!==void 0?ce.length:0,Ut=it.get(X),ue=u.state.lights;if(vt===!0&&(H===!0||A!==x)){let Pe=A===x&&X.id===M;ct.setState(X,A,Pe)}let te=!1;X.version===Ut.__version?(Ut.needsLights&&Ut.lightsStateVersion!==ue.state.version||Ut.outputColorSpace!==wt||z.isBatchedMesh&&Ut.batching===!1||!z.isBatchedMesh&&Ut.batching===!0||z.isBatchedMesh&&Ut.batchingColor===!0&&z.colorTexture===null||z.isBatchedMesh&&Ut.batchingColor===!1&&z.colorTexture!==null||z.isInstancedMesh&&Ut.instancing===!1||!z.isInstancedMesh&&Ut.instancing===!0||z.isSkinnedMesh&&Ut.skinning===!1||!z.isSkinnedMesh&&Ut.skinning===!0||z.isInstancedMesh&&Ut.instancingColor===!0&&z.instanceColor===null||z.isInstancedMesh&&Ut.instancingColor===!1&&z.instanceColor!==null||z.isInstancedMesh&&Ut.instancingMorph===!0&&z.morphTexture===null||z.isInstancedMesh&&Ut.instancingMorph===!1&&z.morphTexture!==null||Ut.envMap!==bt||X.fog===!0&&Ut.fog!==at||Ut.numClippingPlanes!==void 0&&(Ut.numClippingPlanes!==ct.numPlanes||Ut.numIntersection!==ct.numIntersection)||Ut.vertexAlphas!==Nt||Ut.vertexTangents!==Ot||Ut.morphTargets!==Pt||Ut.morphNormals!==Jt||Ut.morphColors!==se||Ut.toneMapping!==me||Ut.morphTargetsCount!==ae)&&(te=!0):(te=!0,Ut.__version=X.version);let ke=Ut.currentProgram;te===!0&&(ke=fr(X,k,z));let Ci=!1,ze=!1,xs=!1,de=ke.getUniforms(),qe=Ut.uniforms;if(J.useProgram(ke.program)&&(Ci=!0,ze=!0,xs=!0),X.id!==M&&(M=X.id,ze=!0),Ci||x!==A){J.buffers.depth.getReversed()&&A.reversedDepth!==!0&&(A._reversedDepth=!0,A.updateProjectionMatrix()),de.setValue(D,"projectionMatrix",A.projectionMatrix),de.setValue(D,"viewMatrix",A.matrixWorldInverse);let Ne=de.map.cameraPosition;Ne!==void 0&&Ne.setValue(D,pt.setFromMatrixPosition(A.matrixWorld)),K.logarithmicDepthBuffer&&de.setValue(D,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(X.isMeshPhongMaterial||X.isMeshToonMaterial||X.isMeshLambertMaterial||X.isMeshBasicMaterial||X.isMeshStandardMaterial||X.isShaderMaterial)&&de.setValue(D,"isOrthographic",A.isOrthographicCamera===!0),x!==A&&(x=A,ze=!0,xs=!0)}if(z.isSkinnedMesh){de.setOptional(D,z,"bindMatrix"),de.setOptional(D,z,"bindMatrixInverse");let Pe=z.skeleton;Pe&&(Pe.boneTexture===null&&Pe.computeBoneTexture(),de.setValue(D,"boneTexture",Pe.boneTexture,dt))}z.isBatchedMesh&&(de.setOptional(D,z,"batchingTexture"),de.setValue(D,"batchingTexture",z._matricesTexture,dt),de.setOptional(D,z,"batchingIdTexture"),de.setValue(D,"batchingIdTexture",z._indirectTexture,dt),de.setOptional(D,z,"batchingColorTexture"),z._colorsTexture!==null&&de.setValue(D,"batchingColorTexture",z._colorsTexture,dt));let Ye=W.morphAttributes;if((Ye.position!==void 0||Ye.normal!==void 0||Ye.color!==void 0)&&st.update(z,W,ke),(ze||Ut.receiveShadow!==z.receiveShadow)&&(Ut.receiveShadow=z.receiveShadow,de.setValue(D,"receiveShadow",z.receiveShadow)),X.isMeshGouraudMaterial&&X.envMap!==null&&(qe.envMap.value=bt,qe.flipEnvMap.value=bt.isCubeTexture&&bt.isRenderTargetTexture===!1?-1:1),X.isMeshStandardMaterial&&X.envMap===null&&k.environment!==null&&(qe.envMapIntensity.value=k.environmentIntensity),ze&&(de.setValue(D,"toneMappingExposure",g.toneMappingExposure),Ut.needsLights&&Zu(qe,xs),at&&X.fog===!0&&et.refreshFogUniforms(qe,at),et.refreshMaterialUniforms(qe,X,V,$,u.state.transmissionRenderTarget[A.id]),ds.upload(D,gc(Ut),qe,dt)),X.isShaderMaterial&&X.uniformsNeedUpdate===!0&&(ds.upload(D,gc(Ut),qe,dt),X.uniformsNeedUpdate=!1),X.isSpriteMaterial&&de.setValue(D,"center",z.center),de.setValue(D,"modelViewMatrix",z.modelViewMatrix),de.setValue(D,"normalMatrix",z.normalMatrix),de.setValue(D,"modelMatrix",z.matrixWorld),X.isShaderMaterial||X.isRawShaderMaterial){let Pe=X.uniformsGroups;for(let Ne=0,Eo=Pe.length;Ne<Eo;Ne++){let ei=Pe[Ne];Ht.update(ei,ke),Ht.bind(ei,ke)}}return ke}function Zu(A,k){A.ambientLightColor.needsUpdate=k,A.lightProbe.needsUpdate=k,A.directionalLights.needsUpdate=k,A.directionalLightShadows.needsUpdate=k,A.pointLights.needsUpdate=k,A.pointLightShadows.needsUpdate=k,A.spotLights.needsUpdate=k,A.spotLightShadows.needsUpdate=k,A.rectAreaLights.needsUpdate=k,A.hemisphereLights.needsUpdate=k}function Ju(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return v},this.getActiveMipmapLevel=function(){return I},this.getRenderTarget=function(){return L},this.setRenderTargetTextures=function(A,k,W){let X=it.get(A);X.__autoAllocateDepthBuffer=A.resolveDepthBuffer===!1,X.__autoAllocateDepthBuffer===!1&&(X.__useRenderToTexture=!1),it.get(A.texture).__webglTexture=k,it.get(A.depthTexture).__webglTexture=X.__autoAllocateDepthBuffer?void 0:W,X.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(A,k){let W=it.get(A);W.__webglFramebuffer=k,W.__useDefaultFramebuffer=k===void 0};let Ku=D.createFramebuffer();this.setRenderTarget=function(A,k=0,W=0){L=A,v=k,I=W;let X=!0,z=null,at=!1,yt=!1;if(A){let bt=it.get(A);if(bt.__useDefaultFramebuffer!==void 0)J.bindFramebuffer(D.FRAMEBUFFER,null),X=!1;else if(bt.__webglFramebuffer===void 0)dt.setupRenderTarget(A);else if(bt.__hasExternalTextures)dt.rebindTextures(A,it.get(A.texture).__webglTexture,it.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){let Pt=A.depthTexture;if(bt.__boundDepthTexture!==Pt){if(Pt!==null&&it.has(Pt)&&(A.width!==Pt.image.width||A.height!==Pt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");dt.setupDepthRenderbuffer(A)}}let Nt=A.texture;(Nt.isData3DTexture||Nt.isDataArrayTexture||Nt.isCompressedArrayTexture)&&(yt=!0);let Ot=it.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(Ot[k])?z=Ot[k][W]:z=Ot[k],at=!0):A.samples>0&&dt.useMultisampledRTT(A)===!1?z=it.get(A).__webglMultisampledFramebuffer:Array.isArray(Ot)?z=Ot[W]:z=Ot,R.copy(A.viewport),T.copy(A.scissor),C=A.scissorTest}else R.copy(gt).multiplyScalar(V).floor(),T.copy(Lt).multiplyScalar(V).floor(),C=Xt;if(W!==0&&(z=Ku),J.bindFramebuffer(D.FRAMEBUFFER,z)&&X&&J.drawBuffers(A,z),J.viewport(R),J.scissor(T),J.setScissorTest(C),at){let bt=it.get(A.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_CUBE_MAP_POSITIVE_X+k,bt.__webglTexture,W)}else if(yt){let bt=k;for(let Nt=0;Nt<A.textures.length;Nt++){let Ot=it.get(A.textures[Nt]);D.framebufferTextureLayer(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0+Nt,Ot.__webglTexture,W,bt)}}else if(A!==null&&W!==0){let bt=it.get(A.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,bt.__webglTexture,W)}M=-1},this.readRenderTargetPixels=function(A,k,W,X,z,at,yt,wt=0){if(!(A&&A.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let bt=it.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&yt!==void 0&&(bt=bt[yt]),bt){J.bindFramebuffer(D.FRAMEBUFFER,bt);try{let Nt=A.textures[wt],Ot=Nt.format,Pt=Nt.type;if(!K.textureFormatReadable(Ot)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!K.textureTypeReadable(Pt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}k>=0&&k<=A.width-X&&W>=0&&W<=A.height-z&&(A.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+wt),D.readPixels(k,W,X,z,It.convert(Ot),It.convert(Pt),at))}finally{let Nt=L!==null?it.get(L).__webglFramebuffer:null;J.bindFramebuffer(D.FRAMEBUFFER,Nt)}}},this.readRenderTargetPixelsAsync=async function(A,k,W,X,z,at,yt,wt=0){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let bt=it.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&yt!==void 0&&(bt=bt[yt]),bt)if(k>=0&&k<=A.width-X&&W>=0&&W<=A.height-z){J.bindFramebuffer(D.FRAMEBUFFER,bt);let Nt=A.textures[wt],Ot=Nt.format,Pt=Nt.type;if(!K.textureFormatReadable(Ot))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!K.textureTypeReadable(Pt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let Jt=D.createBuffer();D.bindBuffer(D.PIXEL_PACK_BUFFER,Jt),D.bufferData(D.PIXEL_PACK_BUFFER,at.byteLength,D.STREAM_READ),A.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+wt),D.readPixels(k,W,X,z,It.convert(Ot),It.convert(Pt),0);let se=L!==null?it.get(L).__webglFramebuffer:null;J.bindFramebuffer(D.FRAMEBUFFER,se);let me=D.fenceSync(D.SYNC_GPU_COMMANDS_COMPLETE,0);return D.flush(),await Ih(D,me,4),D.bindBuffer(D.PIXEL_PACK_BUFFER,Jt),D.getBufferSubData(D.PIXEL_PACK_BUFFER,0,at),D.deleteBuffer(Jt),D.deleteSync(me),at}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(A,k=null,W=0){let X=Math.pow(2,-W),z=Math.floor(A.image.width*X),at=Math.floor(A.image.height*X),yt=k!==null?k.x:0,wt=k!==null?k.y:0;dt.setTexture2D(A,0),D.copyTexSubImage2D(D.TEXTURE_2D,W,0,0,yt,wt,z,at),J.unbindTexture()};let ju=D.createFramebuffer(),Qu=D.createFramebuffer();this.copyTextureToTexture=function(A,k,W=null,X=null,z=0,at=null){at===null&&(z!==0?(Xi("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),at=z,z=0):at=0);let yt,wt,bt,Nt,Ot,Pt,Jt,se,me,ce=A.isCompressedTexture?A.mipmaps[at]:A.image;if(W!==null)yt=W.max.x-W.min.x,wt=W.max.y-W.min.y,bt=W.isBox3?W.max.z-W.min.z:1,Nt=W.min.x,Ot=W.min.y,Pt=W.isBox3?W.min.z:0;else{let Ye=Math.pow(2,-z);yt=Math.floor(ce.width*Ye),wt=Math.floor(ce.height*Ye),A.isDataArrayTexture?bt=ce.depth:A.isData3DTexture?bt=Math.floor(ce.depth*Ye):bt=1,Nt=0,Ot=0,Pt=0}X!==null?(Jt=X.x,se=X.y,me=X.z):(Jt=0,se=0,me=0);let ae=It.convert(k.format),Ut=It.convert(k.type),ue;k.isData3DTexture?(dt.setTexture3D(k,0),ue=D.TEXTURE_3D):k.isDataArrayTexture||k.isCompressedArrayTexture?(dt.setTexture2DArray(k,0),ue=D.TEXTURE_2D_ARRAY):(dt.setTexture2D(k,0),ue=D.TEXTURE_2D),D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,k.flipY),D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,k.premultiplyAlpha),D.pixelStorei(D.UNPACK_ALIGNMENT,k.unpackAlignment);let te=D.getParameter(D.UNPACK_ROW_LENGTH),ke=D.getParameter(D.UNPACK_IMAGE_HEIGHT),Ci=D.getParameter(D.UNPACK_SKIP_PIXELS),ze=D.getParameter(D.UNPACK_SKIP_ROWS),xs=D.getParameter(D.UNPACK_SKIP_IMAGES);D.pixelStorei(D.UNPACK_ROW_LENGTH,ce.width),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,ce.height),D.pixelStorei(D.UNPACK_SKIP_PIXELS,Nt),D.pixelStorei(D.UNPACK_SKIP_ROWS,Ot),D.pixelStorei(D.UNPACK_SKIP_IMAGES,Pt);let de=A.isDataArrayTexture||A.isData3DTexture,qe=k.isDataArrayTexture||k.isData3DTexture;if(A.isDepthTexture){let Ye=it.get(A),Pe=it.get(k),Ne=it.get(Ye.__renderTarget),Eo=it.get(Pe.__renderTarget);J.bindFramebuffer(D.READ_FRAMEBUFFER,Ne.__webglFramebuffer),J.bindFramebuffer(D.DRAW_FRAMEBUFFER,Eo.__webglFramebuffer);for(let ei=0;ei<bt;ei++)de&&(D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,it.get(A).__webglTexture,z,Pt+ei),D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,it.get(k).__webglTexture,at,me+ei)),D.blitFramebuffer(Nt,Ot,yt,wt,Jt,se,yt,wt,D.DEPTH_BUFFER_BIT,D.NEAREST);J.bindFramebuffer(D.READ_FRAMEBUFFER,null),J.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else if(z!==0||A.isRenderTargetTexture||it.has(A)){let Ye=it.get(A),Pe=it.get(k);J.bindFramebuffer(D.READ_FRAMEBUFFER,ju),J.bindFramebuffer(D.DRAW_FRAMEBUFFER,Qu);for(let Ne=0;Ne<bt;Ne++)de?D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,Ye.__webglTexture,z,Pt+Ne):D.framebufferTexture2D(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,Ye.__webglTexture,z),qe?D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,Pe.__webglTexture,at,me+Ne):D.framebufferTexture2D(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,Pe.__webglTexture,at),z!==0?D.blitFramebuffer(Nt,Ot,yt,wt,Jt,se,yt,wt,D.COLOR_BUFFER_BIT,D.NEAREST):qe?D.copyTexSubImage3D(ue,at,Jt,se,me+Ne,Nt,Ot,yt,wt):D.copyTexSubImage2D(ue,at,Jt,se,Nt,Ot,yt,wt);J.bindFramebuffer(D.READ_FRAMEBUFFER,null),J.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else qe?A.isDataTexture||A.isData3DTexture?D.texSubImage3D(ue,at,Jt,se,me,yt,wt,bt,ae,Ut,ce.data):k.isCompressedArrayTexture?D.compressedTexSubImage3D(ue,at,Jt,se,me,yt,wt,bt,ae,ce.data):D.texSubImage3D(ue,at,Jt,se,me,yt,wt,bt,ae,Ut,ce):A.isDataTexture?D.texSubImage2D(D.TEXTURE_2D,at,Jt,se,yt,wt,ae,Ut,ce.data):A.isCompressedTexture?D.compressedTexSubImage2D(D.TEXTURE_2D,at,Jt,se,ce.width,ce.height,ae,ce.data):D.texSubImage2D(D.TEXTURE_2D,at,Jt,se,yt,wt,ae,Ut,ce);D.pixelStorei(D.UNPACK_ROW_LENGTH,te),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,ke),D.pixelStorei(D.UNPACK_SKIP_PIXELS,Ci),D.pixelStorei(D.UNPACK_SKIP_ROWS,ze),D.pixelStorei(D.UNPACK_SKIP_IMAGES,xs),at===0&&k.generateMipmaps&&D.generateMipmap(ue),J.unbindTexture()},this.initRenderTarget=function(A){it.get(A).__webglFramebuffer===void 0&&dt.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?dt.setTextureCube(A,0):A.isData3DTexture?dt.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?dt.setTexture2DArray(A,0):dt.setTexture2D(A,0),J.unbindTexture()},this.resetState=function(){v=0,I=0,L=null,J.reset(),_t.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return an}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=jt._getDrawingBufferColorSpace(t),e.unpackColorSpace=jt._getUnpackColorSpace()}};var du=8.4;function Jl(i,t=()=>{},e={id:"329"}){let n=[],s=[],r=137,a=()=>(r=r*1664525+1013904223>>>0,r/4294967296),o=new Ks().load(e.image||"assets/ceiling-study.webp",()=>t());o.colorSpace=Se,o.anisotropy=8;let l=new Wn({map:o,color:16777215,roughness:.89,metalness:.015,emissive:0}),c=new Wn({color:7628368,roughness:.87,metalness:.04});function d(y){let g=y.attributes.position,w=y.attributes.uv;for(let v=0;v<g.count;v++)w.setXY(v,g.getX(v)/du+.5,g.getY(v)/du+.5);return w.needsUpdate=!0,y}function h(y,g,w,v,I,L={}){let M=new ts;if(y.forEach((V,tt)=>tt?M.lineTo(...V):M.moveTo(...V)),M.closePath(),L.hole){let V=new fi;L.hole.forEach((tt,ht)=>ht?V.lineTo(...tt):V.moveTo(...tt)),V.closePath(),M.holes.push(V)}let x=d(new Zs(M,{depth:w,bevelEnabled:!0,bevelThickness:L.bevel??.007,bevelSize:L.bevel??.007,bevelSegments:2,curveSegments:12,steps:1}));if(L.warp){let V=x.attributes.position;for(let tt=0;tt<V.count;tt++)V.setZ(tt,V.getZ(tt)+L.warp(V.getX(tt),V.getY(tt)));V.needsUpdate=!0,x.computeVertexNormals()}let R=new B;x.computeBoundingBox(),x.boundingBox.getCenter(R),x.translate(-R.x,-R.y,-R.z);let T=new Ce(x,[l.clone(),c]);T.position.set(R.x,R.y,g+R.z),T.castShadow=!0,T.receiveShadow=!0,T.userData={cat:v,name:I,paintPolygon:y.map(([V,tt])=>[V-R.x,tt-R.y,w+(L.warp?L.warp(V,tt):0)-R.z]),artPolygon:y},i.add(T),s.push(T);let C=Math.atan2(R.y,R.x),U=Math.hypot(R.x,R.y),N=L.spread??(v===6?2.25:v===5?1.6:1.1),O=[-.65,.45,1.15,1.8,2.6,3.4,4.3][v],$=new B(Math.cos(C)*N,Math.sin(C)*N,O+(a()-.5)*.3);return U<.08&&$.set(0,0,O),n.push({obj:T,base:T.position.clone(),rotation:T.rotation.clone(),delta:$,spin:(a()-.5)*.16,cat:v}),T}let f=y=>[[-y,-y],[y,-y],[y,y],[-y,y]];function p(y,g,w,v,I,L,M,x,R={}){return h([[y,g],[w,g],[w,v],[y,v]],I,L,M,x,R)}function _(y,g,w,v,I,L,M){for(let x=0;x<4;x++)for(let R=0;R<I;R++){let T=-y+R*2*y/I,C=-y+(R+1)*2*y/I,U=[[T,y],[C,y],[C/y*g,g],[T/y*g,g]],N=x*Math.PI/2;U=U.map(([O,$])=>[O*Math.cos(N)-$*Math.sin(N),O*Math.sin(N)+$*Math.cos(N)]),h(U,w,v,L,`${M} \xB7 ${["\u5317","\u897F","\u5357","\u4E1C"][x]}${String(R+1).padStart(2,"0")}`,{bevel:.004,spread:1.1+x*.03,warp:L===1?((O,$)=>(Math.max(Math.abs(O),Math.abs($))-g)/(y-g)*1.2):null})}}function S(y,g,w,v,I,L=72){let M=Array.from({length:L},(x,R)=>[Math.cos(R*Math.PI*2/L)*y,Math.sin(R*Math.PI*2/L)*y]);return h(M,g,w,v,I,{bevel:.005,spread:.25})}function m(y,g,w,v,I,L,M,x,{cx:R=0,cy:T=0,seg:C=12,spread:U}={}){let N=[];for(let O=0;O<=C;O++){let $=w+(v-w)*O/C;N.push([R+Math.cos($)*g,T+Math.sin($)*g])}for(let O=C;O>=0;O--){let $=w+(v-w)*O/C;N.push([R+Math.cos($)*y,T+Math.sin($)*y])}return h(N,I,L,M,x,{bevel:.004,spread:U})}function u(y){let g=y==="407",w=e.relief||{},v=w.center??(g?1.46:.63),I=4.2,L=6;for(let M=0;M<L;M++)for(let x=0;x<L;x++){let R=I*2/L;p(-I+x*R,-I+M*R,-I+(x+1)*R,-I+(M+1)*R,-.65,.16,3,`\u4E95\u5FC3\u5F69\u7ED8\u5E95\u7247 \xB7 ${M*L+x+1}`,{bevel:.002,spread:.44})}_(4.2,4.03,-.38,.13,28,0,"\u56FE\u7248\u5916\u7F18\u8BBE\u8BA1\u753B\u7247"),_(4.03,3.72,-.3,.12,24,1,g?"\u98DE\u5929\u8863\u5E26\u5916\u7F18\u753B\u7247":"\u5916\u4FA7\u7F20\u679D\u753B\u7247"),_(3.72,3.48,-.26,.115,24,2,g?"\u73AF\u7ED5\u5377\u8349\u753B\u7247":"\u5185\u4FA7\u7F20\u679D\u753B\u7247");for(let M=0;M<4;M++){let x=M%2?4.03:-4.03,R=M<2?4.03:-4.03,T=M===0?-Math.PI/2:M===1?Math.PI:M===2?0:Math.PI/2;for(let C=0;C<8;C++)m(.04,g?1.3:1.85,T+C*Math.PI/16,T+(C+1)*Math.PI/16,-.24,.12,4,`${g?"\u89D2\u9685\u5F69\u7ED8":"\u56DB\u9685\u82B1\u53F6"} \xB7 ${M+1}\u89D2\u7B2C${C+1}\u8BBE\u8BA1\u7247`,{cx:x,cy:R,seg:10,spread:2.05})}if(g){let M=w.lotus??4.04,x=w.middle??2.73,R=w.petals??8;for(let T=0;T<R;T++){let C=T/R*Math.PI*2,U=Math.PI*2/R;m(v,x,C,C+U,-.22,.14,5,`\u5185\u5C42\u83B2\u74E3\u5F69\u7ED8 \xB7 ${T+1}\u8BBE\u8BA1\u7247`,{seg:20,spread:1.35}),m(x,M,C,C+U,-.3,.13,5,`\u5916\u5C42\u83B2\u74E3\u5F69\u7ED8 \xB7 ${T+1}\u8BBE\u8BA1\u7247`,{seg:24,spread:2.2});for(let N=0;N<3;N++)m(x+.12+N*.15,x+.18+N*.15,C+.02,C+U-.02,-.12+N*.005,.025,5,`\u83B2\u74E3\u7EBF\u8272\u7EC6\u8282 \xB7 ${T+1}-${N+1}`,{seg:12,spread:2.25})}for(let T=0;T<3;T++)m(v*.3,v,T*Math.PI*2/3,(T+1)*Math.PI*2/3,-.08,.18,6,`\u4E09\u5154\u73AF\u7ED5\u753B\u7247 \xB7 ${T+1}`,{seg:28,spread:1});S(v*.3,.11,.13,6,"\u5171\u8033\u4E2D\u5FC3\u753B\u7247",60)}else{let M=w.lotus??2.61,x=w.middle??1.35,R=9;for(let T=0;T<R;T++){let C=T/R*Math.PI*2,U=Math.PI*2/R;m(x,M,C,C+U,-.25,.15,5,`\u4E5D\u74E3\u4E3B\u82B1\u5916\u5C42 \xB7 ${T+1}\u8BBE\u8BA1\u753B\u7247`,{seg:19,spread:1.8}),m(v,x,C,C+U,-.12,.17,5,`\u5185\u5C42\u83B2\u74E3 \xB7 ${T+1}\u8BBE\u8BA1\u753B\u7247`,{seg:17,spread:1.15});for(let N=0;N<2;N++)m(x+.1+N*.17,x+.16+N*.17,C+.02,C+U-.02,-.055+N*.005,.025,5,`\u83B2\u74E3\u53E0\u6655\u7EC6\u90E8 \xB7 ${T+1}-${N+1}`,{seg:12,spread:1.95})}S(v,.075,.18,6,"\u4E2D\u592E\u83B2\u5FC3\u753B\u7247",64);for(let T=0;T<3;T++)for(let C=0;C<32;C++){let U=M+(3.65-M)*T/3,N=M+(3.65-M)*(T+1)/3;m(U,N,C*Math.PI/16,(C+1)*Math.PI/16,-.36+T*.015,.08,T===2?1:2,`\u7F20\u679D\u83B2\u82B1\u5F69\u7ED8 \xB7 ${T+1}-${C+1}\u8BBE\u8BA1\u7247`,{seg:8,spread:1.75+T*.15})}}}function E(){let y=e.relief||{},g=4.2;for(let C=0;C<6;C++)for(let U=0;U<6;U++){let N=g/3;p(-g+U*N,-g+C*N,-g+(U+1)*N,-g+(C+1)*N,-.66,.15,3,`\u4E34\u6479\u56FE\u7248\u5E95\u7247 \xB7 ${C*6+U+1}`,{bevel:.002,spread:.46})}_(4.2,4.07,1.15,.13,32,0,"\u5916\u7F18\u5782\u89D2\u8BBE\u8BA1\u753B\u7247"),_(4.07,3.75,-.05,.15,28,1,"\u5E37\u5E54\u5916\u5C42\u8BBE\u8BA1\u753B\u7247"),_(3.75,3.09,-.07,.15,32,1,"\u9C7C\u9CDE\u5782\u5E54\u8BBE\u8BA1\u753B\u7247"),_(3.09,2.61,-.17,.14,24,2,"\u66F2\u7EBF\u8FB9\u9970\u8BBE\u8BA1\u753B\u7247"),_(2.61,2.18,-.29,.13,28,2,"\u83F1\u683C\u8FB9\u9970\u8BBE\u8BA1\u753B\u7247"),_(2.18,2.13,-.33,.12,24,2,"\u4E95\u5FC3\u5185\u7F18\u8BBE\u8BA1\u753B\u7247");let w=([C,U])=>[(C/1080-.5)*8.4,(.5-U/1066)*8.4],v=[[[360,284],[466,272],[579,281],[565,347],[509,370],[459,354],[430,327],[373,340]],[[576,271],[685,283],[733,346],[726,422],[677,423],[638,369],[589,362],[548,322]],[[733,350],[801,398],[808,499],[776,564],[732,548],[712,490],[726,442]],[[731,560],[802,573],[808,684],[755,748],[672,747],[663,703],[719,655]],[[586,699],[672,704],[731,756],[714,805],[601,804],[537,776],[539,737]],[[428,684],[493,708],[519,772],[479,808],[375,797],[339,747],[352,707]],[[266,488],[317,507],[360,580],[361,678],[318,714],[274,680],[261,574]],[[282,336],[343,312],[399,339],[369,392],[335,441],[312,503],[266,492],[267,409]]];function I(C,U,N){let O=[];for(let $=0;$<C.length;$++){let V=C[$],tt=C[($+1)%C.length],ht=N?V[0]>=U:V[0]<=U,gt=N?tt[0]>=U:tt[0]<=U;if(ht&&O.push(V),ht!==gt){let Lt=(U-V[0])/(tt[0]-V[0]);O.push([U,V[1]+(tt[1]-V[1])*Lt])}}return O}v.forEach((C,U)=>{let N=Math.min(...C.map($=>$[0])),O=Math.max(...C.map($=>$[0]));for(let $=0;$<3;$++){let V=I(I(C,N+(O-N)*$/3,!0),N+(O-N)*($+1)/3,!1);V.length>2&&h(V.map(w),-.42,.12,4,`\u98DE\u5929\u5F69\u7ED8 \xB7 ${U+1}\u7EC4\u7B2C${$+1}\u8BBE\u8BA1\u7247`,{bevel:.004,spread:2.05})}}),[[281,280,355,321],[321,291,400,319],[743,280,799,338],[754,313,801,369],[773,695,808,755],[725,762,793,805],[280,747,340,797],[274,681,315,744],[389,370,446,401],[651,373,699,403],[694,662,731,706],[374,674,407,713],[274,443,303,487],[780,513,808,552],[488,764,530,805],[543,279,577,310]].forEach((C,U)=>h([[C[0],C[1]],[C[2],C[1]],[C[2],C[3]],[C[0],C[3]]].map(w),-.46,.07,4,`\u98DE\u5929\u95F4\u6D41\u52A8\u7EB9\u6837 \xB7 ${U+1}\u8BBE\u8BA1\u7247`,{bevel:.003,spread:1.85}));let M=y.center??.51,x=y.middle??.91,R=y.lotus??1.35,T=y.petals??8;for(let C=0;C<T;C++){let U=C*Math.PI*2/T,N=Math.PI*2/T;m(M,x,U,U+N,-.24,.13,5,`\u5185\u5C42\u83B2\u74E3\u5F69\u7ED8 \xB7 ${C+1}\u8BBE\u8BA1\u7247`,{seg:16,spread:1.15}),m(x,R,U,U+N,-.33,.12,5,`\u5916\u5C42\u83B2\u74E3\u5F69\u7ED8 \xB7 ${C+1}\u8BBE\u8BA1\u7247`,{seg:20,spread:1.8});for(let O=0;O<3;O++)m(x+.06+O*.08,x+.1+O*.08,U+.015,U+N-.015,-.12+O*.003,.025,5,`\u83B2\u74E3\u7EBF\u8272\u7EC6\u8282 \xB7 ${C+1}-${O+1}`,{seg:12,spread:1.85})}for(let C=0;C<3;C++)m(M*.3,M,C*Math.PI*2/3,(C+1)*Math.PI*2/3,-.06,.15,6,`\u4E09\u5154\u73AF\u7ED5\u753B\u7247 \xB7 ${C+1}`,{seg:24,spread:.85});S(M*.3,.09,.13,6,"\u5171\u8033\u4E2D\u5FC3\u753B\u7247",56)}if(String(e.id||"329")==="329"){_(4.2,3.82,1.24,.15,18,0,"\u5916\u7F18\u753B\u5E26"),_(3.82,3.77,1.23,.1,18,0,"\u5916\u7F18\u7EC6\u8FB9"),_(3.77,2.89,-.05,.15,3,1,"\u4F0E\u4E50\u98DE\u5929\u753B\u7247"),_(2.89,2.83,-.04,.12,24,2,"\u5377\u8349\u5916\u6846"),_(2.83,2.39,-.18,.16,22,2,"\u5782\u5E54\u53F6\u7EB9"),_(2.39,2.14,-.23,.12,18,2,"\u8054\u73E0\u56E2\u82B1\u7EB9\u7247"),_(2.14,2.04,-.28,.13,24,2,"\u5FCD\u51AC\u5377\u8349"),_(2.04,2,-.34,.12,24,2,"\u5185\u7F18\u82B1\u8FB9");let y=2;for(let v=0;v<4;v++)for(let I=0;I<4;I++)p(-y+I*y/2,-y+v*y/2,-y+(I+1)*y/2,-y+(v+1)*y/2,-.6,.15,3,`\u9752\u84DD\u4E95\u5FC3\u5E95\u7247 \xB7 ${v*4+I+1}`,{bevel:.002,spread:.5});let g=.91;for(let v=0;v<4;v++){let I=v%2?y:-y,L=v<2?y:-y,M=v===0?-Math.PI/2:v===1?Math.PI:v===2?0:Math.PI/2;for(let x=0;x<7;x++)m(.1,g,M+x*Math.PI/14,M+(x+1)*Math.PI/14,-.39,.1,4,`\u89D2\u9685\u56E2\u82B1 \xB7 ${v+1}\u89D2\u7B2C${x+1}\u74E3`,{cx:I,cy:L,seg:8,spread:1.6})}[[[-.99,2.33],[-.48,2.45],[.22,2.34],[.9,2.09],[1.06,1.76],[.72,1.6],[.19,1.58],[-.25,1.57],[-.8,1.76],[-1.12,2.01]],[[1.57,1.09],[2.02,.99],[2.35,.54],[2.35,0],[2.17,-.58],[1.85,-1],[1.51,-.9],[1.45,-.32],[1.52,.25],[1.4,.77]],[[.88,-1.5],[.98,-1.9],[.55,-2.35],[.05,-2.41],[-.55,-2.28],[-1.07,-1.96],[-1.09,-1.62],[-.73,-1.48],[-.13,-1.54],[.37,-1.46]],[[-1.51,-1.05],[-1.99,-.92],[-2.35,-.39],[-2.4,.16],[-2.13,.81],[-1.75,1.1],[-1.48,.8],[-1.48,.25],[-1.53,-.34],[-1.39,-.73]]].forEach((v,I)=>h(v.map(([L,M])=>[L*.79,M*.79]),-.39,.095,5,`\u6301\u82B1\u98DE\u5929 \xB7 ${["\u5317","\u4E1C","\u5357","\u897F"][I]}`,{bevel:.008,spread:2.05}));for(let v=0;v<4;v++){let I=v*Math.PI/2;[[-1.2,.85,-.7,1.38],[-.7,1.15,-.15,1.55],[.15,1.25,.65,1.6],[.8,.85,1.35,1.25]].forEach((M,x)=>{let R=[[M[0],M[1]],[M[2],M[1]],[M[2],M[3]],[M[0],M[3]]].map(([T,C])=>[(T*Math.cos(I)-C*Math.sin(I))*.79,(T*Math.sin(I)+C*Math.cos(I))*.79]);h(R,-.43,.06,5,`\u6D41\u4E91\u753B\u7247 \xB7 ${v+1}-${x+1}`,{bevel:.003,spread:1.8})})}S(1.06,-.39,.07,6,"\u83B2\u82B1\u5B8C\u6574\u5E95\u76D8");for(let v=0;v<14;v++){let I=v*Math.PI*2/14;m(.83,1.06,I,I+Math.PI*2/14,-.28,.105,6,`\u5377\u4E91\u83B2\u7F18 \xB7 ${v+1}`,{seg:10,spread:2.05}),m(.51,.83,I+.006,I+Math.PI*2/14-.006,-.19,.12,6,`\u590D\u5408\u5377\u74E3 \xB7 ${v+1}`,{seg:12,spread:1.55}),m(.25,.51,I+.004,I+Math.PI*2/14-.004,-.08,.12,6,`\u8272\u8F6E\u5185\u74E3 \xB7 ${v+1}`,{seg:10,spread:1.1});for(let L=0;L<3;L++)m(.53+L*.078,.555+L*.078,I+.035,I+Math.PI*2/14-.035,-.035+L*.002,.018,6,`\u83B2\u74E3\u53E0\u6655\u7EB9 \xB7 ${v+1}-${L+1}`,{seg:8,spread:1.55})}S(.25,.055,.14,6,"\u4E2D\u592E\u83B2\u84EC");for(let v=0;v<14;v++){let I=v*Math.PI*2/14,L=Math.cos(I)*.17,M=Math.sin(I)*.17,x=Array.from({length:12},(R,T)=>[L+Math.cos(T*Math.PI/6)*.027,M+Math.sin(T*Math.PI/6)*.027]);h(x,.2,.016,6,`\u83B2\u84EC\u7C7D \xB7 ${v+1}`,{bevel:.004,spread:.45})}for(let v=0;v<4;v++){let I=v*Math.PI/2;for(let L=0;L<31;L++){let M=-2.05+L*.137,x=2.105,R=M*Math.cos(I)-x*Math.sin(I),T=M*Math.sin(I)+x*Math.cos(I),C=Array.from({length:10},(U,N)=>[R+.025*Math.cos(N*Math.PI/5),T+.025*Math.sin(N*Math.PI/5)]);h(C,-.09,.035,2,`\u8054\u73E0\u6D6E\u70B9 \xB7 ${v*31+L+1}`,{bevel:.006,spread:1.35})}}}else String(e.id)==="407"?E():u(String(e.id));return{parts:n,pickables:s,texture:o,paint:l,dispose(){let y=new Set,g=new Set([l,c]);for(let w of n){y.add(w.obj.geometry);for(let v of w.obj.material)g.add(v);i.remove(w.obj)}for(let w of y)w.dispose();for(let w of g)w.dispose();o.dispose()}}}var ho=class{constructor(){this.domElement=document.createElement("canvas"),this.ctx=this.domElement.getContext("2d",{alpha:!1}),this.shadowMap={},this.info={render:{triangles:0,calls:0}},this.cache=new WeakMap,this.ratio=1,this.width=1,this.height=1,this.isSoftware=!0,this.last=0}setPixelRatio(t){this.ratio=Math.min(t,1.3)}setSize(t,e){this.width=t,this.height=e,this.domElement.width=Math.round(t*this.ratio),this.domElement.height=Math.round(e*this.ratio)}render(t,e){t.updateMatrixWorld(),e.updateMatrixWorld();let n=this.ctx,s=this.width,r=this.height;n.setTransform(this.ratio,0,0,this.ratio,0,0),n.fillStyle="#0d2423",n.fillRect(0,0,s,r);let a=n.createRadialGradient(s*.48,r*.5,0,s*.48,r*.5,s*.65);a.addColorStop(0,"#28473d"),a.addColorStop(1,"#0d2423"),n.fillStyle=a,n.fillRect(0,0,s,r);let o=new le().multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),l=new le,c=new kt,d=new B(-.45,.65,1).normalize(),h=new B(.8,-.7,.5).normalize(),f=[];function p(_,S,m,u){let E=u[3]*_+u[7]*S+u[11]*m+u[15];return[(u[0]*_+u[4]*S+u[8]*m+u[12])/E*s*.5+s*.5,-(u[1]*_+u[5]*S+u[9]*m+u[13])/E*r*.5+r*.5,(u[2]*_+u[6]*S+u[10]*m+u[14])/E]}t.traverse(_=>{if(!_.isMesh||!_.visible||_.userData.ground)return;let S=_.parent;for(;S;){if(!S.visible)return;S=S.parent}let m=_.geometry,u=Array.isArray(_.material)?_.material:[_.material];if(!m?.attributes.position||!u[0])return;let E=this.cache.get(m);if(!E){let R=m.attributes.position;E={p:R.array,n:m.attributes.normal?.array,idx:m.index?.array,count:m.index?m.index.count:R.count,groups:m.groups},this.cache.set(m,E)}l.multiplyMatrices(o,_.matrixWorld),c.getNormalMatrix(_.matrixWorld);let y=l.elements,g=c.elements,w=E.p,v=new Float32Array(w.length);for(let R=0;R<w.length;R+=3){let T=p(w[R],w[R+1],w[R+2],y);v[R]=T[0],v[R+1]=T[1],v[R+2]=T[2]}let I=_.userData.paintPolygon,L=_.userData.artPolygon,M=u[0].map?.image,x=I&&M?.complete&&M.width;if(x){let R=I.map(C=>p(...C,y)),T=.62+.35*Math.max(0,g[2]*d.x+g[5]*d.y+g[8]*d.z);f.push({poly:R,z:R.reduce((C,U)=>C+U[2],0)/R.length,img:M,art:L,light:T})}for(let R=0;R<E.count;R+=3){let T=E.groups.find(D=>R>=D.start&&R<D.start+D.count),C=u[T?.materialIndex||0]||u[0];if(x&&(T?.materialIndex||0)===0)continue;let U=(E.idx?E.idx[R]:R)*3,N=(E.idx?E.idx[R+1]:R+1)*3,O=(E.idx?E.idx[R+2]:R+2)*3,$=v[U],V=v[U+1],tt=v[N],ht=v[N+1],gt=v[O],Lt=v[O+1],Xt=(tt-$)*(Lt-V)-(ht-V)*(gt-$);if(Xt>=0&&C.side!==tn||Math.max($,tt,gt)<0||Math.min($,tt,gt)>s||Math.max(V,ht,Lt)<0||Math.min(V,ht,Lt)>r||Math.abs(Xt)<.04)continue;let Zt=0,vt=0,H=1;if(E.n){let D=E.n;Zt=(D[U]+D[N]+D[O])/3,vt=(D[U+1]+D[N+1]+D[O+1])/3,H=(D[U+2]+D[N+2]+D[O+2])/3}let Z=g[0]*Zt+g[3]*vt+g[6]*H,pt=g[1]*Zt+g[4]*vt+g[7]*H,St=g[2]*Zt+g[5]*vt+g[8]*H,Mt=Math.hypot(Z,pt,St)||1,qt=.43+.7*Math.max(0,(Z*d.x+pt*d.y+St*d.z)/Mt)+.18*Math.max(0,(Z*h.x+pt*h.y+St*h.z)/Mt),ee=(C.color||new $t(11184025)).clone().multiplyScalar(qt).convertLinearToSRGB();f.push({poly:[[$,V],[tt,ht],[gt,Lt]],z:(v[U+2]+v[N+2]+v[O+2])/3,c:`rgb(${Math.min(255,ee.r*255)|0},${Math.min(255,ee.g*255)|0},${Math.min(255,ee.b*255)|0})`})}}),f.sort((_,S)=>S.z-_.z);for(let _ of f){let S=_.poly;n.beginPath(),n.moveTo(S[0][0],S[0][1]);for(let $=1;$<S.length;$++)n.lineTo(S[$][0],S[$][1]);if(n.closePath(),!_.img){n.fillStyle=_.c,n.fill();continue}let m=S.length,u=[0,Math.floor(m/3),Math.floor(m*2/3)],E=u.map($=>[(_.art[$][0]/8.4+.5)*_.img.width,(.5-_.art[$][1]/8.4)*_.img.height]),y=u.map($=>S[$]),[g,w,v]=E,I=g[0]*(w[1]-v[1])+w[0]*(v[1]-g[1])+v[0]*(g[1]-w[1]);if(Math.abs(I)<.001&&(u[1]=1,u[2]=m-1,E=u.map($=>[(_.art[$][0]/8.4+.5)*_.img.width,(.5-_.art[$][1]/8.4)*_.img.height]),y=u.map($=>S[$]),[g,w,v]=E,I=g[0]*(w[1]-v[1])+w[0]*(v[1]-g[1])+v[0]*(g[1]-w[1])),Math.abs(I)<.001)continue;let[L,M,x]=y,R=(L[0]*(w[1]-v[1])+M[0]*(v[1]-g[1])+x[0]*(g[1]-w[1]))/I,T=(L[1]*(w[1]-v[1])+M[1]*(v[1]-g[1])+x[1]*(g[1]-w[1]))/I,C=(L[0]*(v[0]-w[0])+M[0]*(g[0]-v[0])+x[0]*(w[0]-g[0]))/I,U=(L[1]*(v[0]-w[0])+M[1]*(g[0]-v[0])+x[1]*(w[0]-g[0]))/I,N=(L[0]*(w[0]*v[1]-v[0]*w[1])+M[0]*(v[0]*g[1]-g[0]*v[1])+x[0]*(g[0]*w[1]-w[0]*g[1]))/I,O=(L[1]*(w[0]*v[1]-v[0]*w[1])+M[1]*(v[0]*g[1]-g[0]*v[1])+x[1]*(g[0]*w[1]-w[0]*g[1]))/I;n.save(),n.clip(),n.transform(R,T,C,U,N,O),n.drawImage(_.img,0,0),n.restore(),_.light<1&&(n.save(),n.clip(),n.fillStyle=`rgba(8,20,16,${Math.max(0,1-_.light)*.45})`,n.fillRect(0,0,s,r),n.restore())}this.info.render.triangles=f.length,this.info.render.calls=f.length}dispose(){}};var fu={type:"change"},jl={type:"start"},mu={type:"end"},uo=new di,pu=new Je,Z0=Math.cos(70*hr.DEG2RAD),ve=new B,Oe=2*Math.PI,re={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Kl=1e-6,fo=class extends ir{constructor(t,e=null){super(t,e),this.state=re.NONE,this.target=new B,this.cursor=new B,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Yn.ROTATE,MIDDLE:Yn.DOLLY,RIGHT:Yn.PAN},this.touches={ONE:Zn.ROTATE,TWO:Zn.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new B,this._lastQuaternion=new Qe,this._lastTargetPosition=new B,this._quat=new Qe().setFromUnitVectors(t.up,new B(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new rs,this._sphericalDelta=new rs,this._scale=1,this._panOffset=new B,this._rotateStart=new lt,this._rotateEnd=new lt,this._rotateDelta=new lt,this._panStart=new lt,this._panEnd=new lt,this._panDelta=new lt,this._dollyStart=new lt,this._dollyEnd=new lt,this._dollyDelta=new lt,this._dollyDirection=new B,this._mouse=new lt,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=K0.bind(this),this._onPointerDown=J0.bind(this),this._onPointerUp=j0.bind(this),this._onContextMenu=r_.bind(this),this._onMouseWheel=e_.bind(this),this._onKeyDown=n_.bind(this),this._onTouchStart=i_.bind(this),this._onTouchMove=s_.bind(this),this._onMouseDown=Q0.bind(this),this._onMouseMove=t_.bind(this),this._interceptControlDown=a_.bind(this),this._interceptControlUp=o_.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}connect(t){super.connect(t),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(fu),this.update(),this.state=re.NONE}update(t=null){let e=this.object.position;ve.copy(e).sub(this.target),ve.applyQuaternion(this._quat),this._spherical.setFromVector3(ve),this.autoRotate&&this.state===re.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(n)&&isFinite(s)&&(n<-Math.PI?n+=Oe:n>Math.PI&&(n-=Oe),s<-Math.PI?s+=Oe:s>Math.PI&&(s-=Oe),n<=s?this._spherical.theta=Math.max(n,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+s)/2?Math.max(n,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{let a=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=a!=this._spherical.radius}if(ve.setFromSpherical(this._spherical),ve.applyQuaternion(this._quatInverse),e.copy(this.target).add(ve),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let a=null;if(this.object.isPerspectiveCamera){let o=ve.length();a=this._clampDistance(o*this._scale);let l=o-a;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),r=!!l}else if(this.object.isOrthographicCamera){let o=new B(this._mouse.x,this._mouse.y,0);o.unproject(this.object);let l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=l!==this.object.zoom;let c=new B(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(o),this.object.updateMatrixWorld(),a=ve.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;a!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(a).add(this.object.position):(uo.origin.copy(this.object.position),uo.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(uo.direction))<Z0?this.object.lookAt(this.target):(pu.setFromNormalAndCoplanarPoint(this.object.up,this.target),uo.intersectPlane(pu,this.target))))}else if(this.object.isOrthographicCamera){let a=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),a!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>Kl||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Kl||this._lastTargetPosition.distanceToSquared(this.target)>Kl?(this.dispatchEvent(fu),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?Oe/60*this.autoRotateSpeed*t:Oe/60/60*this.autoRotateSpeed}_getZoomScale(t){let e=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*e)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,e){ve.setFromMatrixColumn(e,0),ve.multiplyScalar(-t),this._panOffset.add(ve)}_panUp(t,e){this.screenSpacePanning===!0?ve.setFromMatrixColumn(e,1):(ve.setFromMatrixColumn(e,0),ve.crossVectors(this.object.up,ve)),ve.multiplyScalar(t),this._panOffset.add(ve)}_pan(t,e){let n=this.domElement;if(this.object.isPerspectiveCamera){let s=this.object.position;ve.copy(s).sub(this.target);let r=ve.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*r/n.clientHeight,this.object.matrix),this._panUp(2*e*r/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(e*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,e){if(!this.zoomToCursor)return;this._performCursorZoom=!0;let n=this.domElement.getBoundingClientRect(),s=t-n.left,r=e-n.top,a=n.width,o=n.height;this._mouse.x=s/a*2-1,this._mouse.y=-(r/o)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let e=this.domElement;this._rotateLeft(Oe*this._rotateDelta.x/e.clientHeight),this._rotateUp(Oe*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let e=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(Oe*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),e=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(-Oe*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),e=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(Oe*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),e=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(-Oe*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),e=!0;break}e&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{let e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._rotateStart.set(n,s)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{let e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panStart.set(n,s)}}_handleTouchStartDolly(t){let e=this._getSecondPointerPosition(t),n=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(n*n+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{let n=this._getSecondPointerPosition(t),s=.5*(t.pageX+n.x),r=.5*(t.pageY+n.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let e=this.domElement;this._rotateLeft(Oe*this._rotateDelta.x/e.clientHeight),this._rotateUp(Oe*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{let e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panEnd.set(n,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){let e=this._getSecondPointerPosition(t),n=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(n*n+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);let a=(t.pageX+e.x)*.5,o=(t.pageY+e.y)*.5;this._updateZoomParameters(a,o)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId){this._pointers.splice(e,1);return}}_isTrackingPointer(t){for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId)return!0;return!1}_trackPointer(t){let e=this._pointerPositions[t.pointerId];e===void 0&&(e=new lt,this._pointerPositions[t.pointerId]=e),e.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){let e=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[e]}_customWheelEvent(t){let e=t.deltaMode,n={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(e){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}};function J0(i){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(i.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(i)&&(this._addPointer(i),i.pointerType==="touch"?this._onTouchStart(i):this._onMouseDown(i)))}function K0(i){this.enabled!==!1&&(i.pointerType==="touch"?this._onTouchMove(i):this._onMouseMove(i))}function j0(i){switch(this._removePointer(i),this._pointers.length){case 0:this.domElement.releasePointerCapture(i.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(mu),this.state=re.NONE;break;case 1:let t=this._pointers[0],e=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:e.x,pageY:e.y});break}}function Q0(i){let t;switch(i.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case Yn.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(i),this.state=re.DOLLY;break;case Yn.ROTATE:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=re.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=re.ROTATE}break;case Yn.PAN:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=re.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=re.PAN}break;default:this.state=re.NONE}this.state!==re.NONE&&this.dispatchEvent(jl)}function t_(i){switch(this.state){case re.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(i);break;case re.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(i);break;case re.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(i);break}}function e_(i){this.enabled===!1||this.enableZoom===!1||this.state!==re.NONE||(i.preventDefault(),this.dispatchEvent(jl),this._handleMouseWheel(this._customWheelEvent(i)),this.dispatchEvent(mu))}function n_(i){this.enabled!==!1&&this._handleKeyDown(i)}function i_(i){switch(this._trackPointer(i),this._pointers.length){case 1:switch(this.touches.ONE){case Zn.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(i),this.state=re.TOUCH_ROTATE;break;case Zn.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(i),this.state=re.TOUCH_PAN;break;default:this.state=re.NONE}break;case 2:switch(this.touches.TWO){case Zn.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(i),this.state=re.TOUCH_DOLLY_PAN;break;case Zn.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(i),this.state=re.TOUCH_DOLLY_ROTATE;break;default:this.state=re.NONE}break;default:this.state=re.NONE}this.state!==re.NONE&&this.dispatchEvent(jl)}function s_(i){switch(this._trackPointer(i),this.state){case re.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(i),this.update();break;case re.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(i),this.update();break;case re.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(i),this.update();break;case re.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(i),this.update();break;default:this.state=re.NONE}}function r_(i){this.enabled!==!1&&i.preventDefault()}function a_(i){i.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function o_(i){i.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}var Ql=(i,t,e)=>Math.max(t,Math.min(e,i));function gu(i,{cave:t={id:"329"},onSelect:e=()=>{},onReady:n=()=>{}}={}){let s=new ks;s.background=new $t(861219),s.fog=new Bs(861219,.023);let r=new Ee(37,1,.1,100);r.position.set(7.9,-8.9,13.9);let a;try{a=new lo({antialias:!0,alpha:!1,powerPreference:"high-performance"})}catch{a=new ho}a.setPixelRatio(Math.min(devicePixelRatio,1.6)),a.outputColorSpace=Se,a.toneMapping=va,a.toneMappingExposure=1.05,a.shadowMap.enabled=!0,a.shadowMap.type=da,a.domElement.className="zaojing-canvas",a.domElement.setAttribute("aria-label","\u6709\u539A\u5EA6\u4E0E\u72EC\u7ACB\u90E8\u4EF6\u7684\u4E09\u7EF4\u85FB\u4E95\u6A21\u578B\uFF0C\u53EF\u62D6\u52A8\u65CB\u8F6C\uFF0C\u6EDA\u8F6E\u7F29\u653E\uFF0C\u70B9\u51FB\u90E8\u4EF6\u67E5\u770B"),i.prepend(a.domElement);let o=new fo(r,a.domElement);o.enableDamping=!0,o.dampingFactor=.09,o.enablePan=!1,o.minDistance=8,o.maxDistance=30,o.target.set(0,0,0),o.maxPolarAngle=Math.PI,o.rotateSpeed=.55;let l=new wn;l.rotation.z=.09,s.add(l),s.add(new js(14873311,1059633,1.8));let c=new ss(16771792,2.4);c.position.set(-6,8,12),c.castShadow=!0,c.shadow.mapSize.set(1536,1536),c.shadow.camera.left=-8,c.shadow.camera.right=8,c.shadow.camera.top=8,c.shadow.camera.bottom=-8,c.shadow.normalBias=.045,c.shadow.bias=-2e-4,s.add(c);let d=new ss(8703966,1.4);d.position.set(7,-5,4),s.add(d);let h=new Qs(16771257,85,35,.29,.65,1.2);h.position.set(4,5,9),s.add(h,h.target),h.target.position.set(0,0,0);let f=new Ce(new mi(80,80),new Wn({color:795682,roughness:.94}));f.userData.ground=!0,f.position.z=-2,f.receiveShadow=!0,s.add(f);let p=!0,_=!0,S=0,m=0,u=null,E=0,y=!1,g=!1,w=null,v=Jl(l,()=>p=!0,t),I=v.parts,L=v.pickables,M=new nr,x=new lt(2,2),R=null,T=0,C=document.createElement("div");C.className="beam-overlay",C.innerHTML='<svg viewBox="0 0 1000 650" preserveAspectRatio="none"><defs><linearGradient id="shaft" x1="1" y1="0" x2=".2" y2="1"><stop stop-color="#f1d9a7" stop-opacity="0"/><stop offset=".7" stop-color="#f1d9a7" stop-opacity=".12"/><stop offset="1" stop-color="#f9eac2" stop-opacity=".3"/></linearGradient><radialGradient id="pool"><stop stop-color="#fff3c9" stop-opacity=".25"/><stop offset="1" stop-color="#fff3c9" stop-opacity="0"/></radialGradient></defs><path id="beamPath" fill="url(#shaft)"/><ellipse id="beamPool" rx="140" ry="90" fill="url(#pool)"/></svg>',i.append(C);let U=0,N=0;a.domElement.addEventListener("pointermove",vt=>{let H=a.domElement.getBoundingClientRect(),Z=(vt.clientX-H.left)/H.width,pt=(vt.clientY-H.top)/H.height;x.set(Z*2-1,1-pt*2);let St=Z*1e3,Mt=pt*650;C.classList.add("on"),C.querySelector("#beamPath").setAttribute("d",`M 980 -90 L ${St-100} ${Mt+30} Q ${St} ${Mt+100} ${St+100} ${Mt+30} Z`),C.querySelector("#beamPool").setAttribute("cx",St),C.querySelector("#beamPool").setAttribute("cy",Mt),U=(Z-.5)*8,N=(.5-pt)*8,h.target.position.set(U,N,-.2),p=!0,T=performance.now()}),a.domElement.addEventListener("pointerleave",()=>{x.set(2,2),C.classList.remove("on"),p=!0}),a.domElement.addEventListener("pointerdown",vt=>R={x:vt.clientX,y:vt.clientY}),a.domElement.addEventListener("pointerup",vt=>{if(R&&Math.hypot(vt.clientX-R.x,vt.clientY-R.y)<6){M.setFromCamera(x,r);let H=M.intersectObjects(L.filter(Z=>Z.visible),!1);H[0]&&(O(H[0].object.userData.cat),e(H[0].object.userData.cat,H[0].object.userData.name))}R=null});function O(vt){E=vt,I.forEach(H=>{H.obj.visible=!y||H.cat===vt}),p=!0}function $(vt){for(let H of I){let Z=H.cat*.025,pt=Ql((vt-Z)/(1-Z),0,1);H.obj.position.copy(H.base).addScaledVector(H.delta,pt),H.obj.rotation.copy(H.rotation),H.obj.rotation.x+=H.spin*pt,H.obj.rotation.y+=H.spin*pt*.5}p=!0}function V(vt,H=!1){m=Ql(vt,0,1),H?(S=m,$(S),u=null):u={start:performance.now(),from:S,to:m,duration:m>S?1650:1550,cameraFrom:r.position.clone(),cameraTo:r.position.clone().setLength(m>.5?25.5:18.3),lookFrom:o.target.clone(),lookTo:new B(0,0,m>.5?1.1:0)},p=!0}function tt(){let vt=i.clientWidth,H=i.clientHeight;!vt||!H||(r.aspect=vt/H,r.updateProjectionMatrix(),a.setSize(vt,H,!1),p=!0)}let ht=new ResizeObserver(tt);ht.observe(i);let gt=new IntersectionObserver(vt=>{_=vt[0].isIntersecting,_&&(p=!0)},{rootMargin:"120px"});gt.observe(i),o.addEventListener("change",()=>p=!0);let Lt,Xt=new er;function Zt(){if(Lt=requestAnimationFrame(Zt),!_||a.isSoftware&&performance.now()-(a.last||0)<48)return;a.isSoftware&&(a.last=performance.now());let vt=o.update();if(u){let H=Ql((performance.now()-u.start)/u.duration,0,1),Z=H<.7?1-Math.pow(1-H/.8,4):1+Math.sin((H-.7)/.3*Math.PI)*.018;Z=H===1?1:Math.min(1.04,Z),S=hr.lerp(u.from,u.to,Z),r.position.lerpVectors(u.cameraFrom,u.cameraTo,1-Math.pow(1-H,3)),o.target.lerpVectors(u.lookFrom,u.lookTo,1-Math.pow(1-H,3)),o.update(),$(S),H===1&&(S=u.to,$(S),u=null,i.dispatchEvent(new CustomEvent("explode-complete",{detail:{value:S}})))}if(!(!p&&!vt)){if(performance.now()-T<250){M.setFromCamera(x,r);let H=M.intersectObjects(L.filter(Z=>Z.visible),!1)[0]?.object;H!==w&&(w&&(Array.isArray(w.material)?w.material[0]:w.material).emissive&&(Array.isArray(w.material)?w.material[0]:w.material).emissive.setHex(0),w=H,H&&(Array.isArray(H.material)?H.material[0]:H.material).emissive&&(Array.isArray(H.material)?H.material[0]:H.material).emissive.setHex(2373932),a.domElement.style.cursor=H?"pointer":"grab")}a.render(s,r),p=!1}}return tt(),Zt(),n(I.length,a.info),{explode:V,select:O,isolate(vt){y=vt,O(E)},reset(){y=!1,O(0),V(0),r.position.set(7.9,-8.9,13.9),o.target.set(0,0,0),o.update(),g=!1,p=!0},top(){return g=!g,r.position.set(g?.01:7.9,g?.01:-8.9,g?18:13.9),o.target.set(0,0,0),o.update(),p=!0,g},zoom(vt){r.position.multiplyScalar(vt),o.update(),p=!0},get count(){return I.length},setCave(vt){t=vt||{id:"329"},u=null,w=null,E=0,y=!1,g=!1,S=0,m=0,x.set(2,2),v.dispose(),v=Jl(l,()=>p=!0,t),I=v.parts,L=v.pickables,r.position.set(7.9,-8.9,13.9),o.target.set(0,0,0),o.update(),$(0),p=!0,a.domElement.setAttribute("aria-label",`${t.title||"\u85FB\u4E95\u56FE\u7248"}\u7684\u7ACB\u4F53\u8BBE\u8BA1\u6F14\u7ECE\uFF0C\u53EF\u62D6\u52A8\u65CB\u8F6C\u3001\u7F29\u653E\u548C\u62C6\u89E3\u89C2\u5BDF`),n(I.length,a.info)},destroy(){cancelAnimationFrame(Lt),ht.disconnect(),gt.disconnect(),o.dispose(),v.dispose(),f.geometry.dispose(),f.material.dispose(),a.dispose(),a.domElement.remove(),C.remove()}}}function _u(i,t={id:"329",image:"assets/ceiling-study.webp"}){let e=t,n=y=>document.querySelector(y),s=n("#restorationBoard"),r=n("#pieceTray"),a=3,o=null,l=new Set,c=[],d,h,f=["\u5916\u7F18\u3001\u4F0E\u4E50\u4E0E\u89D2\u82B1","\u98DE\u5929\u4E0E\u5C42\u5C42\u8FB9\u9970","\u56E2\u82B1\u4E0E\u9752\u84DD\u4E95\u5FC3","\u56DE\u65CB\u8863\u5E26\u4E0E\u6D41\u4E91","\u590D\u5408\u83B2\u82B1\u4E0E\u83B2\u84EC","\u6D41\u4E91\u4E0E\u98DE\u5929\u8863\u5E26","\u89D2\u9685\u56E2\u82B1\u4E0E\u8FB9\u9970","\u5916\u56F4\u4F0E\u4E50\u4E0E\u5377\u8349","\u5916\u7F18\u4E0E\u56DB\u62AB\u753B\u5E26"];function p(y){return a===3?(e.puzzleNames||f)[y]:`\u7B2C ${Math.floor(y/a)+1} \u884C\u3001\u7B2C ${y%a+1} \u5217\u7684\u7EB9\u6837`}function _(y,g){y.style.backgroundImage=`url('${e.image||"assets/ceiling-study.webp"}')`,y.style.backgroundSize=`${a*100}% ${a*100}%`,y.style.backgroundPosition=`${g%a/(a-1)*100}% ${Math.floor(g/a)/(a-1)*100}%`}function S(y){_(n("#piecePreview"),y),n("#pieceDetailText").textContent=p(y)+"\u3002\u89C2\u5BDF\u8FB9\u7F18\u7EBF\u6761\u7684\u63A5\u7EED\uFF0C\u627E\u5230\u5B83\u5728\u6574\u5E45\u56FE\u6848\u4E2D\u7684\u4F4D\u7F6E\u3002"}function m(y){l.has(y)||(o=y,r.querySelectorAll(".puzzle-piece").forEach(g=>{g.classList.toggle("selected",+g.dataset.piece===y),g.setAttribute("aria-pressed",+g.dataset.piece===y)}),S(y),n("#gameStatus").textContent="\u753B\u7247\u5DF2\u9009\u4E2D\uFF0C\u70B9\u51FB\u753B\u677F\u4E2D\u7684\u5BF9\u5E94\u7A7A\u4F4D\uFF0C\u4E5F\u53EF\u4EE5\u76F4\u63A5\u62D6\u5165\u3002")}function u(y){if(o===null){n("#gameStatus").textContent="\u5148\u4ECE\u53F3\u4FA7\u9009\u62E9\u4E00\u679A\u753B\u7247\u3002";return}if(l.has(y))return;if(y!==o){let v=s.children[y];v.classList.remove("wrong"),v.offsetWidth,v.classList.add("wrong"),n("#gameStatus").textContent="\u8FB9\u7F18\u8FD8\u6CA1\u6709\u63A5\u4E0A\u3002\u770B\u770B\u7EBF\u6761\u7684\u65B9\u5411\uFF0C\u518D\u8BD5\u4E00\u4E2A\u4F4D\u7F6E\u3002";return}let g=o;l.add(g);let w=s.children[g];_(w,g),w.classList.add("placed"),w.setAttribute("aria-label",`\u7B2C${g+1}\u683C\uFF0C\u5DF2\u5F52\u4F4D`),w.textContent="",r.querySelector(`[data-piece="${g}"]`)?.remove(),o=null,n("#progress").textContent=`${l.size} / ${a*a}`,n("#progressBar").style.width=l.size/(a*a)*100+"%",n("#gameStatus").textContent="\u8854\u63A5\u6B63\u786E\u3002\u7EE7\u7EED\u89C2\u5BDF\u4E0B\u4E00\u7247\u7684\u7EB9\u5E26\u4E0E\u8863\u5E26\u3002",l.size===a*a&&(s.classList.add("complete"),n("#gameStatus").classList.add("win"),n("#gameStatus").textContent=e.puzzleComplete||"\u4E00\u65B9\u5929\u7A7A\uFF0C\u91CD\u65B0\u5B8C\u6574\u3002\u73B0\u5728\u80FD\u770B\u89C1\u83B2\u5FC3\u3001\u56DB\u8EAB\u98DE\u5929\u3001\u56DB\u89D2\u56E2\u82B1\u4E0E\u5916\u56F4\u7684\u5341\u4E8C\u4F0E\u4E50\u76F8\u4E92\u56F4\u7ED5\u3002",i("\u62FC\u5408\u5B8C\u6210 \xB7 \u4E00\u65B9\u5929\u7A7A\uFF0C\u5F52\u4E8E\u5B8C\u6574"),r.innerHTML='<div class="tray-complete"><span>\u2733</span><strong>\u5929\u7A7A\u5DF2\u5B8C\u6574</strong><p>\u6BCF\u4E00\u6761\u7EBF\uFF0C\u90FD\u627E\u5230\u4E86\u76F8\u90BB\u7684\u65B9\u5411\u3002</p></div>')}function E(){clearTimeout(d),clearTimeout(h),l=new Set,o=null,s.className="restoration-board",s.style.setProperty("--grid",a),s.style.setProperty("--puzzle-art",`url("${e.image||"assets/ceiling-study.webp"}")`),document.querySelector(".game-toolbar .panel-kicker").textContent=`REASSEMBLE / ${e.id||"329"}`,r.style.setProperty("--grid",a),s.innerHTML="",r.innerHTML="",n("#progress").textContent=`0 / ${a*a}`,n("#progressBar").style.width="0%",n("#boardLevel").textContent=`${a} \xD7 ${a}`,n("#gameStatus").classList.remove("win"),n("#gameStatus").textContent=e.id==="407"?"\u4ECE\u4E09\u5154\u5171\u8033\u7684\u4E95\u5FC3\u5F00\u59CB\uFF0C\u6216\u89C2\u5BDF\u83B2\u74E3\u4E0E\u98DE\u5929\u8863\u5E26\u7684\u63A5\u7EED\u3002":e.id==="390"?"\u4ECE\u4E2D\u592E\u83B2\u82B1\u5F00\u59CB\uFF0C\u7559\u610F\u5468\u56F4\u7F20\u679D\u5C0F\u83B2\u82B1\u7684\u63A5\u7EED\u3002":"\u4ECE\u4E2D\u592E\u83B2\u5FC3\u5F00\u59CB\uFF0C\u6216\u8BD5\u7740\u63A5\u7EED\u5916\u56F4\u7684\u7EB9\u5E26\u3002",n("#piecePreview").style.backgroundImage="none",n("#pieceDetailText").textContent="\u70B9\u9009\u4E00\u679A\u753B\u7247\uFF0C\u653E\u5927\u89C2\u5BDF\u5B83\u7684\u7EBF\u6761\u4E0E\u8272\u5F69\u3002",c=Array.from({length:a*a},(y,g)=>g);for(let y=c.length-1;y>0;y--){let g=Math.floor(Math.random()*(y+1));[c[y],c[g]]=[c[g],c[y]]}for(let y=0;y<a*a;y++){let g=document.createElement("button");g.className="board-slot",g.textContent=String(y+1).padStart(2,"0"),g.setAttribute("aria-label",`\u653E\u5165\u7B2C${y+1}\u683C`),g.addEventListener("click",()=>u(y)),g.addEventListener("dragover",w=>{w.preventDefault(),g.classList.add("drag-over")}),g.addEventListener("dragleave",()=>g.classList.remove("drag-over")),g.addEventListener("drop",w=>{w.preventDefault(),g.classList.remove("drag-over"),u(y)}),s.append(g)}for(let y of c){let g=document.createElement("button");g.className="puzzle-piece",g.dataset.piece=y,g.draggable=!0,g.setAttribute("aria-label",`\u9009\u62E9\u753B\u7247${y+1}`),g.setAttribute("aria-pressed","false"),_(g,y),g.addEventListener("click",()=>m(y)),g.addEventListener("dragstart",w=>{m(y),w.dataTransfer.effectAllowed="move",w.dataTransfer.setData("text/plain",String(y)),g.classList.add("dragging")}),g.addEventListener("dragend",()=>g.classList.remove("dragging")),r.append(g)}}return n("#hint").onclick=()=>{if(l.size===a*a)return;let y=o??c.find(g=>!l.has(g));m(y),s.querySelectorAll(".hinted").forEach(g=>g.classList.remove("hinted")),s.children[y].classList.add("hinted"),n("#gameStatus").textContent="\u7559\u610F\u4EAE\u8D77\u7684\u7A7A\u4F4D\uFF0C\u5C06\u9009\u4E2D\u7684\u753B\u7247\u62D6\u5165\u6216\u70B9\u51FB\u8BE5\u4F4D\u7F6E\u3002",clearTimeout(d),d=setTimeout(()=>s.children[y]?.classList.remove("hinted"),4500)},n("#referencePeek").onclick=()=>{s.classList.add("peek"),clearTimeout(h),h=setTimeout(()=>s.classList.remove("peek"),3200)},n("#restartHunt").onclick=E,document.querySelectorAll("[data-grid]").forEach(y=>y.onclick=()=>{a=+y.dataset.grid,document.querySelectorAll("[data-grid]").forEach(g=>{g.classList.toggle("active",g===y),g.setAttribute("aria-pressed",g===y)}),E()}),E(),{setCave(y){e=y,E()}}}var yu={"329":[{name:"\u4E95\u5FC3\u9752",hex:"#7c9ea7",region:"\u84DD\u8272\u4E95\u5FC3\u80CC\u666F",meaning:"\u4EE5\u9752\u84DD\u7684\u5F00\u9614\u611F\u886C\u6258\u4E3B\u4F53\u3002",method:"\u5728\u6240\u793A\u56FE\u7248\u6807\u8BB0\u70B9\u5468\u56F47\xD77\u50CF\u7D20\u53D6RGB\u4E2D\u4F4D\u6570\uFF0C\u4FDD\u7559\u5C4F\u5E55\u8272\u503C\u3002",point:[.58616,.75635],kind:"\u8BBE\u8BA1\u547D\u540D\u4E0E\u8272\u5F69\u8054\u60F3",sourceType:"\u516C\u5F00\u56FE\u7248\u53D6\u8272"},{name:"\u83B2\u74E3\u6D45\u767D",hex:"#cdc1b7",region:"\u5916\u5C42\u6D45\u8272\u83B2\u74E3",meaning:"\u67D4\u548C\u7559\u767D\u8BA9\u82B1\u74E3\u5C42\u6B21\u66F4\u6E05\u695A\u3002",method:"\u5728\u6240\u793A\u56FE\u7248\u6807\u8BB0\u70B9\u5468\u56F47\xD77\u50CF\u7D20\u53D6RGB\u4E2D\u4F4D\u6570\uFF0C\u4FDD\u7559\u5C4F\u5E55\u8272\u503C\u3002",point:[.51841,.32287],kind:"\u8BBE\u8BA1\u547D\u540D\u4E0E\u8272\u5F69\u8054\u60F3",sourceType:"\u516C\u5F00\u56FE\u7248\u53D6\u8272"},{name:"\u83B2\u84EC\u7EFF",hex:"#7a946f",region:"\u4E2D\u592E\u83B2\u84EC",meaning:"\u501F\u4E2D\u5FC3\u7EFF\u8272\u5F62\u6210\u5B81\u9759\u7684\u89C6\u89C9\u505C\u987F\u3002",method:"\u5728\u6240\u793A\u56FE\u7248\u6807\u8BB0\u70B9\u5468\u56F47\xD77\u50CF\u7D20\u53D6RGB\u4E2D\u4F4D\u6570\uFF0C\u4FDD\u7559\u5C4F\u5E55\u8272\u503C\u3002",point:[.47128,.50972],kind:"\u8BBE\u8BA1\u547D\u540D\u4E0E\u8272\u5F69\u8054\u60F3",sourceType:"\u516C\u5F00\u56FE\u7248\u53D6\u8272"},{name:"\u8863\u5E26\u8D6D",hex:"#943f31",region:"\u98DE\u5929\u7EA2\u8D6D\u8863\u5E26",meaning:"\u7528\u6E29\u6696\u8272\u70B9\u51FA\u56DE\u65CB\u7684\u65B9\u5411\u3002",method:"\u5728\u6240\u793A\u56FE\u7248\u6807\u8BB0\u70B9\u5468\u56F47\xD77\u50CF\u7D20\u53D6RGB\u4E2D\u4F4D\u6570\uFF0C\u4FDD\u7559\u5C4F\u5E55\u8272\u503C\u3002",point:[.7894,.55306],kind:"\u8BBE\u8BA1\u547D\u540D\u4E0E\u8272\u5F69\u8054\u60F3",sourceType:"\u516C\u5F00\u56FE\u7248\u53D6\u8272"},{name:"\u8F6E\u5ED3\u58A8",hex:"#493c42",region:"\u98DE\u5929\u6DF1\u8272\u8F6E\u5ED3",meaning:"\u7528\u4E8E\u63CF\u7EBF\uFF0C\u5F3A\u5316\u5C0F\u5C3A\u5BF8\u56FE\u6848\u8FA8\u8BC6\u3002",method:"\u5728\u6240\u793A\u56FE\u7248\u6807\u8BB0\u70B9\u5468\u56F47\xD77\u50CF\u7D20\u53D6RGB\u4E2D\u4F4D\u6570\uFF0C\u4FDD\u7559\u5C4F\u5E55\u8272\u503C\u3002",point:[.41384,.19581],kind:"\u8BBE\u8BA1\u547D\u540D\u4E0E\u8272\u5F69\u8054\u60F3",sourceType:"\u516C\u5F00\u56FE\u7248\u53D6\u8272"},{name:"\u5185\u74E3\u84DD",hex:"#3d6589",region:"\u83B2\u82B1\u84DD\u8272\u5185\u74E3",meaning:"\u4E0E\u6D45\u8272\u82B1\u74E3\u5F62\u6210\u51B7\u6696\u5BF9\u6BD4\u3002",method:"\u5728\u6240\u793A\u56FE\u7248\u6807\u8BB0\u70B9\u5468\u56F47\xD77\u50CF\u7D20\u53D6RGB\u4E2D\u4F4D\u6570\uFF0C\u4FDD\u7559\u5C4F\u5E55\u8272\u503C\u3002",point:[.60383,.62033],kind:"\u8BBE\u8BA1\u547D\u540D\u4E0E\u8272\u5F69\u8054\u60F3",sourceType:"\u516C\u5F00\u56FE\u7248\u53D6\u8272"},{name:"\u8FB9\u89D2\u91D1",hex:"#ba9656",region:"\u89D2\u82B1\u6696\u8272\u82B1\u7F18",meaning:"\u6E29\u6696\u70B9\u7F00\u4FDD\u7559\u8FB9\u89D2\u7684\u4E30\u5BCC\u611F\u3002",method:"\u5728\u6240\u793A\u56FE\u7248\u6807\u8BB0\u70B9\u5468\u56F47\xD77\u50CF\u7D20\u53D6RGB\u4E2D\u4F4D\u6570\uFF0C\u4FDD\u7559\u5C4F\u5E55\u8272\u503C\u3002",point:[.17084,.96413],kind:"\u8BBE\u8BA1\u547D\u540D\u4E0E\u8272\u5F69\u8054\u60F3",sourceType:"\u516C\u5F00\u56FE\u7248\u53D6\u8272"},{name:"\u4E91\u7EB9\u7070",hex:"#99a8a8",region:"\u6D41\u4E91\u6D45\u7070\u8272\u57DF",meaning:"\u4EE5\u8F83\u8F7B\u7684\u7070\u8C03\u5E73\u8861\u6D53\u8272\u4E3B\u4F53\u3002",method:"\u5728\u6240\u793A\u56FE\u7248\u6807\u8BB0\u70B9\u5468\u56F47\xD77\u50CF\u7D20\u53D6RGB\u4E2D\u4F4D\u6570\uFF0C\u4FDD\u7559\u5C4F\u5E55\u8272\u503C\u3002",point:[.50663,.10762],kind:"\u8BBE\u8BA1\u547D\u540D\u4E0E\u8272\u5F69\u8054\u60F3",sourceType:"\u516C\u5F00\u56FE\u7248\u53D6\u8272"}],"407":[{name:"\u83B2\u5FC3\u7EFF",hex:"#646e59",region:"\u4E34\u6479\u56FE\u4E2D\u592E\u83B2\u5FC3\u80CC\u666F",meaning:"\u4EE5\u4E2D\u5FC3\u7EFF\u8272\u7EC4\u7EC7\u4E09\u5154\u7684\u5FAA\u73AF\u5173\u7CFB\u3002",method:"\u5728\u6240\u793A\u56FE\u7248\u6807\u8BB0\u70B9\u5468\u56F47\xD77\u50CF\u7D20\u53D6RGB\u4E2D\u4F4D\u6570\uFF0C\u4FDD\u7559\u5C4F\u5E55\u8272\u503C\u3002",point:[.47822,.52019],kind:"\u8BBE\u8BA1\u547D\u540D\u4E0E\u8272\u5F69\u8054\u60F3",sourceType:"1954\u5E74\u4E34\u6479\u56FE\u7248\u53D6\u8272"},{name:"\u5E37\u5E54\u9752",hex:"#80897f",region:"\u4E34\u6479\u56FE\u5916\u7F18\u9752\u7EFF\u53F6\u5F62",meaning:"\u8BA9\u8FB9\u6846\u4FDD\u6301\u6E05\u723D\u7684\u751F\u957F\u611F\u3002",method:"\u5728\u6240\u793A\u56FE\u7248\u6807\u8BB0\u70B9\u5468\u56F47\xD77\u50CF\u7D20\u53D6RGB\u4E2D\u4F4D\u6570\uFF0C\u4FDD\u7559\u5C4F\u5E55\u8272\u503C\u3002",point:[.86006,.09859],kind:"\u8BBE\u8BA1\u547D\u540D\u4E0E\u8272\u5F69\u8054\u60F3",sourceType:"1954\u5E74\u4E34\u6479\u56FE\u7248\u53D6\u8272"},{name:"\u5185\u74E3\u7C73\u8910",hex:"#958872",region:"\u4E34\u6479\u56FE\u5185\u5C42\u6D45\u8272\u83B2\u74E3",meaning:"\u7528\u6D45\u5E95\u7A81\u51FA\u5154\u8EAB\u4E0E\u7EC6\u7EBF\u3002",method:"\u5728\u6240\u793A\u56FE\u7248\u6807\u8BB0\u70B9\u5468\u56F47\xD77\u50CF\u7D20\u53D6RGB\u4E2D\u4F4D\u6570\uFF0C\u4FDD\u7559\u5C4F\u5E55\u8272\u503C\u3002",point:[.52641,.4216],kind:"\u8BBE\u8BA1\u547D\u540D\u4E0E\u8272\u5F69\u8054\u60F3",sourceType:"1954\u5E74\u4E34\u6479\u56FE\u7248\u53D6\u8272"},{name:"\u98DE\u5929\u8D6D",hex:"#664a36",region:"\u4E34\u6479\u56FE\u98DE\u5929\u7EA2\u8272\u8863\u5E26",meaning:"\u4EE5\u6696\u8272\u5F3A\u8C03\u56DE\u65CB\u4E0E\u52A8\u611F\u3002",method:"\u5728\u6240\u793A\u56FE\u7248\u6807\u8BB0\u70B9\u5468\u56F47\xD77\u50CF\u7D20\u53D6RGB\u4E2D\u4F4D\u6570\uFF0C\u4FDD\u7559\u5C4F\u5E55\u8272\u503C\u3002",point:[.65246,.60751],kind:"\u8BBE\u8BA1\u547D\u540D\u4E0E\u8272\u5F69\u8054\u60F3",sourceType:"1954\u5E74\u4E34\u6479\u56FE\u7248\u53D6\u8272"},{name:"\u5916\u74E3\u6DF1\u58A8",hex:"#282627",region:"\u4E34\u6479\u56FE\u6DF1\u8272\u5916\u5C42\u83B2\u74E3",meaning:"\u6DF1\u6D45\u5BF9\u6BD4\u8BA9\u4E3B\u4F53\u8F6E\u5ED3\u66F4\u96C6\u4E2D\u3002",method:"\u5728\u6240\u793A\u56FE\u7248\u6807\u8BB0\u70B9\u5468\u56F47\xD77\u50CF\u7D20\u53D6RGB\u4E2D\u4F4D\u6570\uFF0C\u4FDD\u7559\u5C4F\u5E55\u8272\u503C\u3002",point:[.64411,.49108],kind:"\u8BBE\u8BA1\u547D\u540D\u4E0E\u8272\u5F69\u8054\u60F3",sourceType:"1954\u5E74\u4E34\u6479\u56FE\u7248\u53D6\u8272"},{name:"\u8FB9\u9970\u84DD",hex:"#5c6374",region:"\u4E34\u6479\u56FE\u83F1\u683C\u8FB9\u9970\u84DD\u8272",meaning:"\u4EE5\u84DD\u8272\u70B9\u7F00\u6253\u7834\u5355\u4E00\u690D\u7269\u8272\u7CFB\u3002",method:"\u5728\u6240\u793A\u56FE\u7248\u6807\u8BB0\u70B9\u5468\u56F47\xD77\u50CF\u7D20\u53D6RGB\u4E2D\u4F4D\u6570\uFF0C\u4FDD\u7559\u5C4F\u5E55\u8272\u503C\u3002",point:[.62465,.20939],kind:"\u8BBE\u8BA1\u547D\u540D\u4E0E\u8272\u5F69\u8054\u60F3",sourceType:"1954\u5E74\u4E34\u6479\u56FE\u7248\u53D6\u8272"},{name:"\u5185\u74E3\u8910",hex:"#887961",region:"\u4E34\u6479\u56FE\u5185\u5C42\u83B2\u74E3",meaning:"\u6C89\u9759\u7684\u8910\u8C03\u4F5C\u4E3A\u7EB9\u6837\u8FC7\u6E21\u3002",method:"\u5728\u6240\u793A\u56FE\u7248\u6807\u8BB0\u70B9\u5468\u56F47\xD77\u50CF\u7D20\u53D6RGB\u4E2D\u4F4D\u6570\uFF0C\u4FDD\u7559\u5C4F\u5E55\u8272\u503C\u3002",point:[.57646,.53615],kind:"\u8BBE\u8BA1\u547D\u540D\u4E0E\u8272\u5F69\u8054\u60F3",sourceType:"1954\u5E74\u4E34\u6479\u56FE\u7248\u53D6\u8272"},{name:"\u8FB9\u6846\u7070\u8910",hex:"#636757",region:"\u4E34\u6479\u56FE\u6696\u8272\u88C5\u9970\u8FB9\u5E26",meaning:"\u4EE5\u6E29\u6696\u7EC6\u7EBF\u8FDE\u63A5\u5185\u5916\u5C42\u6B21\u3002",method:"\u5728\u6240\u793A\u56FE\u7248\u6807\u8BB0\u70B9\u5468\u56F47\xD77\u50CF\u7D20\u53D6RGB\u4E2D\u4F4D\u6570\uFF0C\u4FDD\u7559\u5C4F\u5E55\u8272\u503C\u3002",point:[.17331,.13991],kind:"\u8BBE\u8BA1\u547D\u540D\u4E0E\u8272\u5F69\u8054\u60F3",sourceType:"1954\u5E74\u4E34\u6479\u56FE\u7248\u53D6\u8272"}],"390":[{name:"\u6D45\u5E95\u7EFF",hex:"#c3cfb2",region:"\u4E95\u5FC3\u6D45\u7EFF\u8272\u80CC\u666F",meaning:"\u4EE5\u8F7B\u67D4\u5E95\u8272\u7ED9\u7F20\u679D\u7559\u51FA\u7A7A\u95F4\u3002",method:"\u5728\u6240\u793A\u56FE\u7248\u6807\u8BB0\u70B9\u5468\u56F47\xD77\u50CF\u7D20\u53D6RGB\u4E2D\u4F4D\u6570\uFF0C\u4FDD\u7559\u5C4F\u5E55\u8272\u503C\u3002",point:[.16153,.14499],kind:"\u8BBE\u8BA1\u547D\u540D\u4E0E\u8272\u5F69\u8054\u60F3",sourceType:"\u516C\u5F00\u56FE\u7248\u53D6\u8272"},{name:"\u83B2\u74E3\u84DD",hex:"#8fa3c6",region:"\u4E2D\u592E\u83B2\u82B1\u84DD\u8272\u5185\u74E3",meaning:"\u51B7\u8272\u82B1\u74E3\u886C\u6258\u83B2\u5FC3\u4E0E\u6696\u53F6\u3002",method:"\u5728\u6240\u793A\u56FE\u7248\u6807\u8BB0\u70B9\u5468\u56F47\xD77\u50CF\u7D20\u53D6RGB\u4E2D\u4F4D\u6570\uFF0C\u4FDD\u7559\u5C4F\u5E55\u8272\u503C\u3002",point:[.40675,.39761],kind:"\u8BBE\u8BA1\u547D\u540D\u4E0E\u8272\u5F69\u8054\u60F3",sourceType:"\u516C\u5F00\u56FE\u7248\u53D6\u8272"},{name:"\u83B2\u5FC3\u6D45\u7EFF",hex:"#a7bd96",region:"\u4E2D\u592E\u5706\u5F62\u83B2\u5FC3",meaning:"\u4E3A\u653E\u5C04\u82B1\u5F62\u4FDD\u7559\u5B89\u9759\u4E2D\u5FC3\u3002",method:"\u5728\u6240\u793A\u56FE\u7248\u6807\u8BB0\u70B9\u5468\u56F47\xD77\u50CF\u7D20\u53D6RGB\u4E2D\u4F4D\u6570\uFF0C\u4FDD\u7559\u5C4F\u5E55\u8272\u503C\u3002",point:[.51982,.51719],kind:"\u8BBE\u8BA1\u547D\u540D\u4E0E\u8272\u5F69\u8054\u60F3",sourceType:"\u516C\u5F00\u56FE\u7248\u53D6\u8272"},{name:"\u53F6\u5F62\u8D6D\u7EA2",hex:"#9f4930",region:"\u76D8\u830E\u4E4B\u95F4\u7684\u8D6D\u7EA2\u53F6\u5F62",meaning:"\u501F\u6696\u53F6\u7684\u8DC3\u52A8\u611F\u5F3A\u8C03\u690D\u7269\u751F\u957F\u3002",method:"\u5728\u6240\u793A\u56FE\u7248\u6807\u8BB0\u70B9\u5468\u56F47\xD77\u50CF\u7D20\u53D6RGB\u4E2D\u4F4D\u6570\uFF0C\u4FDD\u7559\u5C4F\u5E55\u8272\u503C\u3002",point:[.70191,.05531],kind:"\u8BBE\u8BA1\u547D\u540D\u4E0E\u8272\u5F69\u8054\u60F3",sourceType:"\u516C\u5F00\u56FE\u7248\u53D6\u8272"},{name:"\u82B1\u74E3\u6DF1\u8910",hex:"#463e3c",region:"\u4E2D\u592E\u6DF1\u8272\u5916\u5C42\u83B2\u74E3",meaning:"\u7528\u4E8E\u4E3B\u7EB9\u6216\u63CF\u7EBF\uFF0C\u4FDD\u6301\u56FE\u5F62\u8FA8\u8BC6\u3002",method:"\u5728\u6240\u793A\u56FE\u7248\u6807\u8BB0\u70B9\u5468\u56F47\xD77\u50CF\u7D20\u53D6RGB\u4E2D\u4F4D\u6570\uFF0C\u4FDD\u7559\u5C4F\u5E55\u8272\u503C\u3002",point:[.48018,.23916],kind:"\u8BBE\u8BA1\u547D\u540D\u4E0E\u8272\u5F69\u8054\u60F3",sourceType:"\u516C\u5F00\u56FE\u7248\u53D6\u8272"},{name:"\u679D\u830E\u8910",hex:"#665049",region:"\u76D8\u66F2\u679D\u830E\u7684\u7EBF\u6761",meaning:"\u7528\u8FDE\u7EED\u7EBF\u8272\u8FDE\u63A5\u72EC\u7ACB\u82B1\u5F62\u3002",method:"\u5728\u6240\u793A\u56FE\u7248\u6807\u8BB0\u70B9\u5468\u56F47\xD77\u50CF\u7D20\u53D6RGB\u4E2D\u4F4D\u6570\uFF0C\u4FDD\u7559\u5C4F\u5E55\u8272\u503C\u3002",point:[.32893,.06129],kind:"\u8BBE\u8BA1\u547D\u540D\u4E0E\u8272\u5F69\u8054\u60F3",sourceType:"\u516C\u5F00\u56FE\u7248\u53D6\u8272"},{name:"\u5C0F\u82B1\u6D45\u84DD",hex:"#9eb1c7",region:"\u76D8\u830E\u5C0F\u83B2\u9644\u8FD1\u7684\u84DD\u8272\u74E3\u53F6",meaning:"\u4EE5\u5C0F\u9762\u79EF\u84DD\u8272\u70B9\u4EAE\u8FDE\u7EED\u7EB9\u5E26\u3002",method:"\u5728\u6240\u793A\u56FE\u7248\u6807\u8BB0\u70B9\u5468\u56F47\xD77\u50CF\u7D20\u53D6RGB\u4E2D\u4F4D\u6570\uFF0C\u4FDD\u7559\u5C4F\u5E55\u8272\u503C\u3002",point:[.04993,.19133],kind:"\u8BBE\u8BA1\u547D\u540D\u4E0E\u8272\u5F69\u8054\u60F3",sourceType:"\u516C\u5F00\u56FE\u7248\u53D6\u8272"},{name:"\u82B1\u7F18\u7C73\u767D",hex:"#c6c6ab",region:"\u82B1\u5F62\u8FB9\u7F18\u7684\u6D45\u8272\u7EBF",meaning:"\u901A\u8FC7\u7EC6\u6D45\u7EBF\u5206\u79BB\u76F8\u8FD1\u8272\u5757\u3002",method:"\u5728\u6240\u793A\u56FE\u7248\u6807\u8BB0\u70B9\u5468\u56F47\xD77\u50CF\u7D20\u53D6RGB\u4E2D\u4F4D\u6570\uFF0C\u4FDD\u7559\u5C4F\u5E55\u8272\u503C\u3002",point:[.81498,.59193],kind:"\u8BBE\u8BA1\u547D\u540D\u4E0E\u8272\u5F69\u8054\u60F3",sourceType:"\u516C\u5F00\u56FE\u7248\u53D6\u8272"}]};var po={title:"\u6545\u5BAB\u535A\u7269\u9662 \xB7 \u4F5B\u6559\u7F8E\u672F\u4E2D\u7684\u83B2\u82B1\u610F\u8C61\u7814\u7A76",url:"https://www.dpm.org.cn/journal/259116.html"},c_={title:"\u8D75\u71D5\u6797\u8BBF\u8C08 \xB7 \u4E09\u5154\u5171\u8033\u7684\u5FAA\u73AF\u4E0E\u751F\u606F\u5BD3\u610F",url:"https://www.chinanews.com/dxw/2026/07-26/10666763.shtml"},xu={title:"\u6545\u5BAB\u535A\u7269\u9662 \xB7 \u7F20\u679D\u7EB9\u7684\u751F\u751F\u4E0D\u606F\u4E0E\u5409\u5E86\u610F\u8C61\uFF08\u901A\u7528\u7EB9\u6837\u53C2\u8003\uFF09",url:"https://www.dpm.org.cn/ancient/special/180910.html"},vu={title:"\u4E2D\u56FD\u4E1D\u7EF8\u535A\u7269\u9986 \xB7 \u8054\u73E0\u7EB9\u7684\u7ED3\u6784\u4E0E\u591A\u5143\u6587\u5316\u89E3\u91CA",url:"https://www.chinasilkmuseum.com/zggd/info_21.aspx?itemid=2281"},h_={title:"\u6545\u5BAB\u535A\u7269\u9662 \xB7 \u5FCD\u51AC\u7EB9\u7684\u5F62\u6001\u4E0E\u4F7F\u7528\u8BED\u5883",url:"https://www.dpm.org.cn/lemmas/241975.html"},u_={329:{lotus:["\u6E05\u51C0\u65E0\u67D3","\u6587\u5316\u5BD3\u610F","\u83B2\u82B1\u5728\u4F5B\u6559\u827A\u672F\u4E2D\u627F\u8F7D\u6E05\u51C0\u4E0E\u51C0\u571F\u7684\u610F\u8C61\u3002\u7B2C329\u7A9F\u7684\u4E2D\u5FC3\u83B2\u82B1\uFF0C\u6B63\u5904\u5728\u8FD9\u4E00\u6587\u5316\u8BED\u5883\u4E2D\u3002","\u613F\u5728\u7EB7\u6270\u4E2D\u4FDD\u6301\u5185\u5FC3\u6E05\u660E\u3002",po],wheel:["\u751F\u673A\u6C47\u805A","\u7EB9\u6837\u5BC4\u610F","\u83B2\u84EC\u4E0E\u5C42\u5C42\u5185\u74E3\u5F62\u6210\u5B55\u80B2\u3001\u73AF\u62B1\u7684\u89C6\u89C9\u4E2D\u5FC3\u3002\u672C\u6B21\u63D0\u53D6\u4FDD\u7559\u8FD9\u79CD\u5411\u5FC3\u5173\u7CFB\uFF0C\u5BC4\u6258\u6210\u957F\u4E0E\u79EF\u84C4\u529B\u91CF\u7684\u795D\u613F\u3002","\u613F\u6BCF\u4E00\u4EFD\u5FAE\u5C0F\u529B\u91CF\uFF0C\u90FD\u80FD\u6162\u6162\u6C47\u805A\u3002"],rosette:["\u82B1\u5F00\u5706\u878D","\u7EB9\u6837\u5BC4\u610F","\u591A\u5C42\u82B1\u74E3\u7531\u4E2D\u5FC3\u5411\u5916\u8212\u5C55\uFF0C\u590D\u5408\u56E2\u82B1\u53C8\u5C06\u4E0D\u540C\u82B1\u5F62\u7EC4\u7EC7\u5728\u4E00\u8D77\u3002\u518D\u8BBE\u8BA1\u53D6\u82B1\u5F00\u3001\u76F8\u5BB9\u4E4B\u610F\uFF0C\u8868\u8FBE\u4E30\u76C8\u4E0E\u5706\u878D\u3002","\u613F\u751F\u6D3B\u4E30\u76C8\uFF0C\u4E5F\u4E3A\u4E0D\u540C\u7684\u4E8B\u7269\u7559\u51FA\u7A7A\u95F4\u3002"],cloud:["\u81EA\u5728\u8212\u5C55","\u6587\u5316\u8BED\u5883\u4E0E\u5BC4\u610F","\u6D41\u4E91\u4E0E\u98DE\u5929\u5171\u540C\u8425\u9020\u4F5B\u56FD\u5929\u7A7A\u7684\u610F\u5883\u3002\u9999\u6302\u4EE5\u8212\u5C55\u56DE\u65CB\u7684\u4E91\u7EBF\uFF0C\u5BC4\u6258\u4ECE\u5BB9\u3001\u81EA\u5982\u7684\u751F\u6D3B\u5FC3\u613F\u3002","\u613F\u884C\u6B62\u4ECE\u5BB9\uFF0C\u5FC3\u5883\u5F00\u9614\u3002"],ribbon:["\u8F7B\u76C8\u81EA\u5728","\u6587\u5316\u8BED\u5883\u4E0E\u5BC4\u610F","\u98DE\u5929\u7684\u6563\u82B1\u4E0E\u4E50\u821E\u5C5E\u4E8E\u5929\u754C\u4F9B\u517B\u56FE\u666F\uFF0C\u98D8\u5E26\u8868\u73B0\u98DE\u884C\u7684\u52A8\u52BF\u3002\u672C\u8BBE\u8BA1\u63D0\u53D6\u8863\u5E26\uFF0C\u8868\u8FBE\u8F7B\u76C8\u3001\u8212\u5C55\u7684\u5FC3\u613F\u3002","\u613F\u5411\u5F80\u4E4B\u4E8B\uFF0C\u53EF\u4EE5\u8F7B\u5FEB\u5730\u542F\u7A0B\u3002"],corner:["\u82B1\u5F00\u76F8\u6620","\u6784\u56FE\u5BC4\u610F","\u56DB\u9685\u82B1\u5F62\u671D\u5411\u4E2D\u5FC3\uFF0C\u4E0E\u4E3B\u82B1\u76F8\u4E92\u547C\u5E94\u3002\u9999\u6302\u7531\u8FD9\u79CD\u5F7C\u6B64\u7167\u5E94\u7684\u6784\u56FE\uFF0C\u5BC4\u6258\u966A\u4F34\u4E0E\u548C\u7F8E\u7684\u795D\u613F\u3002","\u613F\u5F7C\u6B64\u7167\u5E94\uFF0C\u5404\u81EA\u7EFD\u653E\u3002"],beads:["\u76F8\u8FDE\u6210\u5706","\u6587\u5316\u8BED\u5883\u4E0E\u5BC4\u610F","\u8054\u73E0\u7EB9\u4F53\u73B0\u53E4\u4EE3\u88C5\u9970\u827A\u672F\u4E2D\u7684\u6587\u5316\u4EA4\u6D41\uFF0C\u5176\u8C61\u5F81\u5728\u7814\u7A76\u4E2D\u6709\u591A\u79CD\u89E3\u91CA\u3002\u672C\u8BBE\u8BA1\u4ECE\u5706\u73E0\u76F8\u8FDE\u3001\u56F4\u5408\u7684\u5F62\u6001\u51FA\u53D1\uFF0C\u5BC4\u6258\u4EBA\u4E0E\u4EBA\u4E4B\u95F4\u7684\u8054\u7ED3\u3002","\u613F\u91CD\u8981\u7684\u4EBA\u4E0E\u4E8B\uFF0C\u957F\u4E45\u76F8\u8FDE\u3002",vu],vine:["\u751F\u957F\u7EF5\u5EF6","\u4F20\u7EDF\u7EB9\u6837\u53C2\u8003","\u8FDE\u7EED\u679D\u8513\u5728\u4F20\u7EDF\u7F20\u679D\u7EB9\u4E2D\u5E38\u88AB\u8D4B\u4E88\u751F\u751F\u4E0D\u606F\u3001\u5409\u5E86\u4E4B\u610F\u3002\u8FD9\u91CC\u4EE5\u8FD9\u4E00\u901A\u7528\u7EB9\u6837\u610F\u8C61\u4E3A\u53C2\u8003\uFF0C\u5C06\u5377\u66F2\u830E\u53F6\u8F6C\u8BD1\u4E3A\u5EF6\u7EED\u4E0E\u97E7\u6027\u7684\u795D\u613F\uFF0C\u5E76\u975E\u8BA4\u5B9A\u7B2C329\u7A9F\u6709\u552F\u4E00\u56FA\u5B9A\u91CA\u4E49\u3002","\u613F\u751F\u957F\u6709\u65F6\uFF0C\u524D\u8DEF\u4E0D\u65AD\u3002",xu]},407:{rabbits:["\u751F\u751F\u4E0D\u606F","\u7814\u7A76\u89E3\u91CA","\u6566\u714C\u7814\u7A76\u8005\u8D75\u71D5\u6797\u5C06\u4E09\u5154\u5FAA\u73AF\u8FFD\u9010\u89E3\u91CA\u4E3A\u5F80\u590D\u5FAA\u73AF\u3001\u7E41\u884D\u751F\u606F\u3002\u4E09\u8033\u5171\u7528\u53C8\u8BA9\u4E09\u53EA\u5154\u5F7C\u6B64\u76F8\u63A5\uFF0C\u672C\u9999\u6302\u627F\u63A5\u751F\u606F\u76F8\u7EED\u7684\u795D\u613F\u3002","\u613F\u751F\u673A\u4E0D\u65AD\uFF0C\u4E5F\u613F\u5F7C\u6B64\u76F8\u4F34\u3002",c_],lotus4:["\u6E05\u51C0\u7EFD\u653E","\u6587\u5316\u8BED\u5883\u4E0E\u5BC4\u610F","\u83B2\u82B1\u5728\u4F5B\u6559\u827A\u672F\u4E2D\u662F\u51C0\u571F\u4E4B\u82B1\u3002\u56DB\u5C42\u516B\u5411\u82B1\u74E3\u627F\u6258\u4E09\u5154\uFF0C\u9999\u6302\u4FDD\u7559\u5C42\u5C42\u5C55\u5F00\u7684\u7ED3\u6784\uFF0C\u5BC4\u6258\u6E05\u51C0\u3001\u8212\u5C55\u7684\u795D\u613F\u3002","\u613F\u5FC3\u6709\u6E05\u51C0\uFF0C\u5411\u5916\u7EFD\u653E\u3002",po],petalRing:["\u5706\u878D\u76F8\u4F34","\u6784\u56FE\u5BC4\u610F","\u516B\u5411\u83B2\u74E3\u73AF\u7ED5\u4E2D\u5FC3\uFF0C\u4F7F\u4E09\u5154\u4E0E\u82B1\u5F62\u6210\u4E3A\u76F8\u4E92\u627F\u6258\u7684\u6574\u4F53\u3002\u7A7A\u5FC3\u82B1\u73AF\u7531\u6B64\u5BC4\u6258\u76F8\u4F34\u3001\u76F8\u5BB9\u7684\u5FC3\u613F\u3002","\u613F\u76F8\u805A\u65F6\u4EB2\u8FD1\uFF0C\u5404\u81EA\u4E5F\u6709\u8212\u5C55\u7684\u7A7A\u95F4\u3002"],ribbon:["\u8F7B\u5FEB\u5411\u524D","\u6587\u5316\u8BED\u5883\u4E0E\u5BC4\u610F","\u516B\u8EAB\u98DE\u5929\u73AF\u83B2\u800C\u884C\uFF0C\u5F69\u5E26\u3001\u5929\u82B1\u4E0E\u83B2\u5FC3\u4E09\u5154\u540C\u5411\u56DE\u65CB\u3002\u672C\u8BBE\u8BA1\u4EE5\u8863\u5E26\u7684\u6D41\u52A8\u7EBF\u6761\uFF0C\u8868\u8FBE\u8F7B\u5FEB\u524D\u884C\u3002","\u613F\u811A\u6B65\u8F7B\u76C8\uFF0C\u5411\u5FC3\u4E4B\u6240\u5411\u524D\u884C\u3002"],beads:["\u76F8\u8FDE\u76F8\u5B88","\u6587\u5316\u8BED\u5883\u4E0E\u5BC4\u610F","\u8054\u73E0\u7EB9\u5177\u6709\u8DE8\u6587\u5316\u4F20\u64AD\u7684\u5386\u53F2\uFF0C\u5176\u8C61\u5F81\u5E76\u65E0\u5355\u4E00\u516C\u8BA4\u89E3\u91CA\u3002\u8FD9\u91CC\u53D6\u8FDE\u7EED\u73E0\u70B9\u76F8\u63A5\u3001\u56F4\u5408\u7684\u5F62\u5F0F\uFF0C\u8F6C\u8BD1\u51FA\u73CD\u89C6\u5173\u7CFB\u3001\u5F7C\u6B64\u76F8\u5B88\u7684\u795D\u613F\u3002","\u613F\u73CD\u89C6\u7684\u5173\u7CFB\uFF0C\u59CB\u7EC8\u76F8\u8FDE\u3002",vu],diamondBand:["\u6709\u5E8F\u76F8\u5408","\u6784\u56FE\u5BC4\u610F","\u83F1\u683C\u5355\u5143\u8FDE\u7EED\u94FA\u6392\uFF0C\u5185\u90E8\u82B1\u9970\u5F7C\u6B64\u8854\u63A5\u3002\u672C\u8BBE\u8BA1\u501F\u89C4\u6574\u800C\u76F8\u63A5\u7684\u7ED3\u6784\uFF0C\u8868\u8FBE\u534F\u8C03\u3001\u76F8\u5408\u7684\u5FC3\u613F\u3002","\u613F\u65E5\u5E38\u6709\u5E8F\uFF0C\u4E0E\u6240\u7231\u76F8\u5408\u3002"],honeysuckle:["\u575A\u97E7\u7EF5\u957F","\u6587\u5316\u8BED\u5883\u4E0E\u5BC4\u610F","\u5FCD\u51AC\u4EE5\u5377\u66F2\u679D\u53F6\u6784\u6210\u8FDE\u7EED\u7684\u690D\u7269\u88C5\u9970\uFF0C\u5728\u5357\u5317\u671D\u81F3\u968B\u5510\u4F5B\u6559\u827A\u672F\u4E2D\u5E7F\u6CDB\u4F7F\u7528\u3002\u672C\u9879\u76EE\u53D6\u679D\u53F6\u4F38\u5C55\u3001\u7EF5\u5EF6\u76F8\u63A5\u7684\u5F62\u6001\uFF0C\u8868\u8FBE\u575A\u97E7\u4E0E\u957F\u4E45\u751F\u957F\u3002","\u613F\u5E38\u6000\u97E7\u6027\uFF0C\u751F\u957F\u4E0D\u606F\u3002",h_]},390:{lotus9:["\u6E05\u51C0\u5B89\u7136","\u6587\u5316\u8BED\u5883\u4E0E\u5BC4\u610F","\u83B2\u82B1\u627F\u8F7D\u4F5B\u6559\u827A\u672F\u4E2D\u7684\u6E05\u51C0\u3001\u51C0\u571F\u610F\u8C61\u3002\u4E5D\u74E3\u91CD\u83B2\u7684\u5185\u5916\u5C42\u76F8\u4E92\u5C55\u5F00\uFF0C\u672C\u8BBE\u8BA1\u4EE5\u6B64\u5BC4\u6258\u5185\u5FC3\u5B89\u7136\u3002","\u613F\u5904\u55A7\u56A3\u4E4B\u4E2D\uFF0C\u4ECD\u6709\u4E00\u65B9\u6E05\u51C0\u3002",po],smallLotus:["\u82B1\u5F00\u76F8\u4F34","\u7EB9\u6837\u5BC4\u610F","\u76D8\u830E\u4E0A\u7684\u5C0F\u83B2\u4E0E\u4E2D\u592E\u5927\u83B2\u76F8\u547C\u5E94\u3002\u5C06\u5C0F\u83B2\u8F6C\u6210\u82B1\u73AF\u540E\uFF0C\u672C\u9999\u6302\u4EE5\u76F8\u4E92\u8FDE\u63A5\u7684\u82B1\u5F62\uFF0C\u5BC4\u6258\u5171\u540C\u6210\u957F\u3002","\u613F\u8EAB\u8FB9\u6709\u82B1\u5F00\uFF0C\u4E5F\u6709\u76F8\u4F34\u7684\u4EBA\u3002"],lotusVine:["\u8FDE\u7EF5\u751F\u606F","\u4F20\u7EDF\u7EB9\u6837\u53C2\u8003","\u7F20\u679D\u7EB9\u4EE5\u8FDE\u7EED\u7684\u830E\u8513\u8FDE\u63A5\u82B1\u53F6\uFF0C\u5728\u4F20\u7EDF\u88C5\u9970\u4E2D\u5E38\u6709\u751F\u751F\u4E0D\u606F\u3001\u5409\u5E86\u7684\u610F\u8C61\u3002\u672C\u9999\u6302\u7ED3\u5408\u7B2C390\u7A9F\u76D8\u830E\u76F8\u7EED\u7684\u7ED3\u6784\uFF0C\u5BC4\u6258\u7F8E\u597D\u7EF5\u5EF6\uFF1B\u8FD9\u4E00\u5BC4\u610F\u53C2\u8003\u901A\u7528\u7EB9\u6837\u4F20\u7EDF\u3002","\u613F\u7F8E\u597D\u76F8\u7EED\uFF0C\u751F\u673A\u957F\u5B58\u3002",xu],pearlLotus:["\u6E05\u51C0\u76F8\u8FDE","\u7EB9\u6837\u5BC4\u610F","\u83B2\u82B1\u7684\u6E05\u51C0\u610F\u8C61\u4E0E\u8054\u73E0\u7684\u8FDE\u7EED\u7ED3\u6784\u7EC4\u5408\u4E3A\u9576\u8FB9\u3002\u9999\u6302\u501F\u4E8C\u8005\u8868\u8FBE\u5FC3\u5883\u6E05\u660E\u3001\u5173\u7CFB\u76F8\u8FDE\u7684\u795D\u613F\u3002","\u613F\u5FC3\u5883\u6E05\u660E\uFF0C\u7275\u6302\u6709\u56DE\u5E94\u3002",po],drapery:["\u5B89\u7136\u6709\u4F9D","\u6784\u56FE\u5BC4\u610F","\u5E37\u5E54\u4EE5\u5C42\u53E0\u3001\u5782\u60AC\u7684\u5F62\u5F0F\u56F4\u5408\u4E95\u5FC3\u3002\u9999\u6302\u4ECE\u8FD9\u79CD\u56F4\u5408\u7A7A\u95F4\u7684\u6784\u56FE\uFF0C\u8F6C\u8BD1\u51FA\u5B89\u5B9A\u3001\u6709\u6240\u4F9D\u9760\u7684\u5FC3\u613F\u3002","\u613F\u6240\u884C\u4E4B\u5904\uFF0C\u90FD\u6709\u5B89\u5B9A\u7684\u5F52\u5C5E\u3002"],cornerLotus:["\u76F8\u6620\u6210\u548C","\u6784\u56FE\u5BC4\u610F","\u89D2\u9685\u82B1\u53F6\u4E0E\u4E2D\u592E\u5927\u83B2\u76F8\u547C\u5E94\uFF0C\u4F7F\u4E0D\u540C\u5927\u5C0F\u7684\u82B1\u5F62\u5F7C\u6B64\u534F\u8C03\u3002\u672C\u8BBE\u8BA1\u7531\u6B64\u8868\u8FBE\u5404\u6709\u59FF\u6001\u3001\u76F8\u6620\u6210\u548C\u3002","\u613F\u5404\u81EA\u751F\u957F\uFF0C\u4E5F\u80FD\u5F7C\u6B64\u6210\u5168\u3002"]}},d_={329:[["\u6F84\u660E\u5F00\u9614","\u7B2C329\u7A9F\u7684\u6DE1\u84DD\u4E95\u5FC3\u5177\u6709\u5929\u7A7A\u610F\u8C61\u3002\u8FD9\u4E00\u53D6\u6837\u8272\u627F\u63A5\u5929\u7A7A\u8BED\u5883\uFF0C\u5BC4\u6258\u5F00\u9614\u4E0E\u6F84\u660E\u3002","\u613F\u5FC3\u5883\u5F00\u9614\uFF0C\u6240\u89C1\u6F84\u660E\u3002","\u53D6\u8272\u90E8\u4F4D\u7684\u6587\u5316\u8BED\u5883"],["\u6E05\u51C0\u81EA\u6301","\u53D6\u81EA\u83B2\u74E3\u7684\u6D45\u8272\uFF0C\u627F\u63A5\u83B2\u82B1\u7684\u6E05\u51C0\u610F\u8C61\uFF0C\u7528\u4E8E\u8868\u8FBE\u67D4\u548C\u800C\u81EA\u6301\u7684\u5FC3\u613F\u3002","\u613F\u4FDD\u6709\u6E05\u51C0\uFF0C\u4E5F\u4FDD\u6709\u81EA\u5DF1\u3002","\u83B2\u82B1\u610F\u8C61\u7684\u5F53\u4EE3\u5BC4\u610F"],["\u751F\u673A\u6E10\u957F","\u7EFF\u8272\u6765\u81EA\u5B55\u80B2\u83B2\u5B50\u7684\u83B2\u84EC\u3002\u672C\u8BBE\u8BA1\u501F\u8FD9\u4E00\u751F\u547D\u5F62\u6001\uFF0C\u5BC4\u6258\u6162\u6162\u79EF\u84C4\u3001\u751F\u673A\u6E10\u957F\u3002","\u613F\u6BCF\u4E00\u6B65\u6210\u957F\uFF0C\u90FD\u6709\u65B0\u7684\u751F\u673A\u3002","\u53D6\u8272\u90E8\u4F4D\u7684\u5F53\u4EE3\u5BC4\u610F"],["\u70ED\u5FF1\u5411\u524D","\u53D6\u81EA\u98DE\u5929\u8863\u5E26\u7684\u6696\u8D6D\u8272\uFF0C\u7ED3\u5408\u56DE\u65CB\u7684\u8863\u5E26\u52A8\u52BF\uFF0C\u8868\u8FBE\u70ED\u5FF1\u4E0E\u884C\u52A8\u7684\u5FC3\u613F\u3002","\u613F\u5E26\u7740\u70ED\u5FF1\uFF0C\u5411\u524D\u4E00\u6B65\u3002","\u8272\u5F69\u4E0E\u52A8\u52BF\u7684\u5F53\u4EE3\u5BC4\u610F"],["\u7B03\u5B9A\u81EA\u5B88","\u6DF1\u8272\u52FE\u7EBF\u4FDD\u6301\u56FE\u5F62\u8F6E\u5ED3\uFF0C\u672C\u8BBE\u8BA1\u4EE5\u8FD9\u4E00\u7A33\u5B9A\u7684\u89C6\u89C9\u8FB9\u754C\uFF0C\u5BC4\u6258\u7B03\u5B9A\u3001\u81EA\u5B88\u3002","\u613F\u5FC3\u6709\u6240\u5B9A\uFF0C\u4E0D\u5931\u81EA\u5DF1\u7684\u8FB9\u754C\u3002","\u8272\u5F69\u8868\u8FBE\u7684\u5F53\u4EE3\u5BC4\u610F"],["\u5B89\u5B9A\u4E13\u6CE8","\u5185\u74E3\u7684\u84DD\u8272\u6536\u62E2\u5728\u83B2\u5FC3\u5468\u56F4\u3002\u672C\u8BBE\u8BA1\u501F\u6C89\u9759\u8272\u8C03\u4E0E\u5411\u5FC3\u7ED3\u6784\uFF0C\u8868\u8FBE\u5B89\u5B9A\u548C\u4E13\u6CE8\u3002","\u613F\u5FC3\u6709\u6240\u5411\uFF0C\u4E13\u6CE8\u5F53\u4E0B\u3002","\u8272\u5F69\u4E0E\u6784\u56FE\u7684\u5F53\u4EE3\u5BC4\u610F"],["\u6E29\u6696\u76F8\u6620","\u53D6\u81EA\u89D2\u82B1\u7684\u6696\u91D1\u8272\u57DF\uFF0C\u7ED3\u5408\u89D2\u82B1\u4E0E\u4E2D\u5FC3\u76F8\u4E92\u547C\u5E94\u7684\u5173\u7CFB\uFF0C\u8868\u8FBE\u6E29\u6696\u76F8\u5F85\u3002","\u613F\u5FAE\u5C0F\u7684\u6E29\u6696\uFF0C\u4E5F\u80FD\u5F7C\u6B64\u7167\u4EAE\u3002","\u53D6\u8272\u90E8\u4F4D\u7684\u5F53\u4EE3\u5BC4\u610F"],["\u4ECE\u5BB9\u81EA\u5728","\u6D45\u7070\u53D6\u81EA\u8212\u5C55\u7684\u6D41\u4E91\uFF0C\u627F\u63A5\u4E91\u7EBF\u7684\u56DE\u65CB\u4E0E\u7559\u767D\uFF0C\u5BC4\u6258\u4ECE\u5BB9\u3001\u81EA\u5982\u3002","\u613F\u4E0D\u75BE\u4E0D\u5F90\uFF0C\u884C\u6B62\u81EA\u5728\u3002","\u53D6\u8272\u90E8\u4F4D\u7684\u5F53\u4EE3\u5BC4\u610F"]],407:[["\u751F\u606F\u76F8\u7EED","\u7EFF\u8272\u53D6\u81EA\u4E09\u5154\u6240\u5728\u7684\u83B2\u5FC3\u3002\u672C\u7EC4\u8272\u5F69\u5BC4\u610F\u627F\u63A5\u4E09\u5154\u5FAA\u73AF\u3001\u751F\u751F\u4E0D\u606F\u7684\u7814\u7A76\u89E3\u91CA\u3002","\u613F\u751F\u673A\u957F\u5B58\uFF0C\u7F8E\u597D\u76F8\u7EED\u3002","\u4E09\u5154\u7814\u7A76\u89E3\u91CA\u7684\u8272\u5F69\u8F6C\u8BD1"],["\u575A\u97E7\u751F\u957F","\u53D6\u81EA\u5E37\u5E54\u4E2D\u7684\u9752\u7EFF\u53F6\u5F62\uFF0C\u672C\u8BBE\u8BA1\u7ED3\u5408\u690D\u7269\u7684\u8FDE\u7EED\u4F38\u5C55\uFF0C\u5BC4\u6258\u575A\u97E7\u800C\u5B89\u7A33\u7684\u6210\u957F\u3002","\u613F\u67D4\u97E7\u6709\u529B\uFF0C\u5411\u7740\u65B0\u751F\u3002","\u690D\u7269\u5F62\u6001\u7684\u5F53\u4EE3\u5BC4\u610F"],["\u6E29\u67D4\u76F8\u4F34","\u7C73\u8910\u53D6\u81EA\u4E34\u6479\u83B2\u82B1\u7684\u6D45\u8272\u5185\u74E3\uFF0C\u627F\u63A5\u83B2\u82B1\u6E05\u51C0\u610F\u8C61\uFF0C\u4EE5\u67D4\u548C\u8272\u8C03\u5BC4\u6258\u5305\u5BB9\u3001\u76F8\u4F34\u3002","\u613F\u6E29\u67D4\u76F8\u5F85\uFF0C\u5B89\u9759\u76F8\u4F34\u3002","\u8272\u5F69\u8868\u8FBE\u7684\u5F53\u4EE3\u5BC4\u610F"],["\u8F7B\u5FEB\u524D\u884C","\u53D6\u81EA\u98DE\u5929\u6696\u8D6D\u8863\u5E26\uFF0C\u7ED3\u5408\u8863\u5E26\u4E0E\u83B2\u5FC3\u7684\u5FAA\u73AF\u52A8\u52BF\uFF0C\u5BC4\u6258\u884C\u52A8\u4E0E\u524D\u884C\u3002","\u613F\u6B65\u5C65\u8F7B\u5FEB\uFF0C\u6240\u884C\u6709\u5149\u3002","\u8272\u5F69\u4E0E\u52A8\u52BF\u7684\u5F53\u4EE3\u5BC4\u610F"],["\u6C89\u9759\u81EA\u6301","\u6DF1\u58A8\u6765\u81EA\u5916\u5C42\u83B2\u74E3\uFF0C\u627F\u63A5\u83B2\u82B1\u7684\u4E3B\u9898\u3002\u672C\u8BBE\u8BA1\u7528\u6DF1\u8272\u7684\u6C89\u9759\u611F\uFF0C\u8868\u8FBE\u5185\u5FC3\u81EA\u6301\u3002","\u613F\u6C89\u9759\u6709\u529B\uFF0C\u4E0D\u60E7\u7EB7\u6270\u3002","\u83B2\u82B1\u610F\u8C61\u4E0E\u8272\u5F69\u7684\u5F53\u4EE3\u5BC4\u610F"],["\u6709\u5E8F\u5E73\u548C","\u53D6\u81EA\u8FDE\u7EED\u83F1\u683C\u8FB9\u9970\u7684\u7070\u84DD\uFF0C\u672C\u8BBE\u8BA1\u7ED3\u5408\u8FB9\u9970\u7684\u89C4\u6574\u8282\u594F\uFF0C\u5BC4\u6258\u79E9\u5E8F\u4E0E\u5E73\u548C\u3002","\u613F\u65E5\u5E38\u6709\u5E8F\uFF0C\u5FC3\u5883\u5E73\u548C\u3002","\u8272\u5F69\u4E0E\u6784\u56FE\u7684\u5F53\u4EE3\u5BC4\u610F"],["\u6E29\u6696\u4E30\u76C8","\u5185\u74E3\u8910\u8272\u5C42\u5C42\u56F4\u7ED5\u83B2\u5FC3\uFF0C\u672C\u8BBE\u8BA1\u7531\u6696\u8272\u4E0E\u82B1\u74E3\u5C42\u53E0\uFF0C\u8868\u8FBE\u4E30\u76C8\u3001\u5305\u5BB9\u7684\u5FC3\u613F\u3002","\u613F\u5FC3\u6709\u6E29\u6696\uFF0C\u751F\u6D3B\u4E30\u76C8\u3002","\u8272\u5F69\u4E0E\u82B1\u5F62\u7684\u5F53\u4EE3\u5BC4\u610F"],["\u76F8\u8FDE\u76F8\u5B88","\u7070\u8910\u6765\u81EA\u8854\u63A5\u5185\u5916\u7684\u88C5\u9970\u8FB9\u5E26\u3002\u672C\u8BBE\u8BA1\u501F\u8FDE\u7EED\u8FB9\u754C\uFF0C\u5BC4\u6258\u957F\u4E45\u76F8\u8FDE\u7684\u5FC3\u613F\u3002","\u613F\u76F8\u8FDE\u7684\u7275\u6302\uFF0C\u957F\u4E45\u6709\u4F9D\u3002","\u53D6\u8272\u90E8\u4F4D\u7684\u5F53\u4EE3\u5BC4\u610F"]],390:[["\u65B0\u751F\u8212\u5C55","\u6D45\u7EFF\u53D6\u81EA\u7F20\u679D\u4E4B\u95F4\u7684\u80CC\u666F\uFF0C\u672C\u8BBE\u8BA1\u7ED3\u5408\u690D\u7269\u5411\u5916\u5EF6\u4F38\u7684\u59FF\u6001\uFF0C\u8868\u8FBE\u65B0\u751F\u3001\u8212\u5C55\u3002","\u613F\u751F\u547D\u5E38\u65B0\uFF0C\u81EA\u5728\u8212\u5C55\u3002","\u690D\u7269\u8BED\u5883\u7684\u5F53\u4EE3\u5BC4\u610F"],["\u6E05\u51C0\u5B89\u7136","\u53D6\u81EA\u4E2D\u592E\u83B2\u82B1\u7684\u84DD\u8272\u5185\u74E3\uFF0C\u627F\u63A5\u83B2\u82B1\u7684\u6E05\u51C0\u610F\u8C61\uFF0C\u4EE5\u67D4\u548C\u84DD\u8272\u8868\u8FBE\u5B89\u7136\u3002","\u613F\u5FC3\u6709\u6E05\u51C0\uFF0C\u65E5\u5E38\u5B89\u7136\u3002","\u83B2\u82B1\u610F\u8C61\u7684\u5F53\u4EE3\u5BC4\u610F"],["\u751F\u673A\u840C\u53D1","\u7EFF\u8272\u6765\u81EA\u4E2D\u592E\u83B2\u5FC3\uFF0C\u672C\u8BBE\u8BA1\u7ED3\u5408\u83B2\u82B1\u5B55\u80B2\u4E0E\u5C55\u5F00\u7684\u5F62\u6001\uFF0C\u5BC4\u6258\u65B0\u751F\u840C\u53D1\u3002","\u613F\u65B0\u7684\u53EF\u80FD\uFF0C\u6162\u6162\u751F\u957F\u3002","\u53D6\u8272\u90E8\u4F4D\u7684\u5F53\u4EE3\u5BC4\u610F"],["\u84EC\u52C3\u5411\u4E0A","\u6696\u8D6D\u7EA2\u53D6\u81EA\u4F38\u5C55\u7684\u53F6\u5F62\uFF0C\u672C\u8BBE\u8BA1\u4EE5\u53F6\u7247\u52A8\u52BF\u4E0E\u6696\u8272\u8868\u8FBE\u84EC\u52C3\u3001\u5411\u4E0A\u3002","\u613F\u5E38\u6709\u70ED\u671B\uFF0C\u84EC\u52C3\u5411\u4E0A\u3002","\u8272\u5F69\u4E0E\u690D\u7269\u5F62\u6001\u7684\u5F53\u4EE3\u5BC4\u610F"],["\u6C89\u7740\u575A\u5B9A","\u6DF1\u8910\u6784\u6210\u4E2D\u592E\u82B1\u74E3\u7684\u575A\u5B9E\u8F6E\u5ED3\uFF0C\u672C\u8BBE\u8BA1\u501F\u6DF1\u8272\u7684\u7A33\u5B9A\u611F\uFF0C\u5BC4\u6258\u6C89\u7740\u3001\u575A\u5B9A\u3002","\u613F\u811A\u4E0B\u6709\u6839\uFF0C\u5FC3\u4E2D\u6709\u5B9A\u3002","\u8272\u5F69\u8868\u8FBE\u7684\u5F53\u4EE3\u5BC4\u610F"],["\u8FDE\u7EF5\u76F8\u7EED","\u8910\u8272\u53D6\u81EA\u8FDE\u63A5\u5C0F\u83B2\u7684\u76D8\u830E\uFF0C\u5BD3\u610F\u627F\u63A5\u8FDE\u7EED\u679D\u830E\u7684\u751F\u957F\u5173\u7CFB\uFF0C\u8868\u8FBE\u7F8E\u597D\u76F8\u7EED\u3002","\u613F\u5584\u610F\u76F8\u8FDE\uFF0C\u7F8E\u597D\u4E0D\u65AD\u3002","\u7F20\u679D\u5F62\u6001\u7684\u5F53\u4EE3\u5BC4\u610F"],["\u8F7B\u76C8\u81EA\u5728","\u6D45\u84DD\u6765\u81EA\u76D8\u830E\u9644\u8FD1\u7684\u5C0F\u74E3\u53F6\uFF0C\u672C\u8BBE\u8BA1\u7ED3\u5408\u5C0F\u82B1\u8212\u5C55\u7684\u59FF\u6001\uFF0C\u5BC4\u6258\u8F7B\u76C8\u3001\u81EA\u5728\u3002","\u613F\u8F7B\u76C8\u751F\u957F\uFF0C\u4FDD\u6709\u81EA\u5728\u3002","\u8272\u5F69\u4E0E\u82B1\u5F62\u7684\u5F53\u4EE3\u5BC4\u610F"],["\u6E05\u96C5\u4ECE\u5BB9","\u7C73\u767D\u53D6\u81EA\u82B1\u7F18\u6D45\u7EBF\uFF0C\u627F\u63A5\u83B2\u82B1\u7684\u6E05\u51C0\u610F\u8C61\uFF0C\u4EE5\u8F7B\u67D4\u8272\u8C03\u8868\u8FBE\u6E05\u96C5\u3001\u4ECE\u5BB9\u3002","\u613F\u7B80\u5355\u6E05\u96C5\uFF0C\u4ECE\u5BB9\u81EA\u5F97\u3002","\u83B2\u82B1\u610F\u8C61\u7684\u5F53\u4EE3\u5BC4\u610F"]]};function Mu(i){for(let t of i.motifs){let e=u_[i.id][t.key];if(!e)throw Error("Missing motif meaning "+i.id+"/"+t.key);let[n,s,r,a,o]=e;t.symbol=n,t.meaningKind=s,t.meaning=r,t.wish=a,o&&!t.sources.some(l=>l.url===o.url)&&t.sources.push(o)}i.colors.forEach((t,e)=>{let[n,s,r,a]=d_[i.id][e];Object.assign(t,{symbol:n,meaning:s,wish:r,meaningBasis:a,kind:"\u56FE\u7248\u53D6\u8272\u4E0E\u5F53\u4EE3\u5BC4\u610F"})})}var bu={title:"\u6566\u714C\u7814\u7A76\u9662 \xB7 \u7B2C329\u7A9F\u83B2\u82B1\u98DE\u5929\u85FB\u4E95",url:"https://www.dha.ac.cn/info/1425/3577.htm"},Su={title:"\u6E05\u534E\u5927\u5B66\u7F8E\u672F\u56FE\u4E66\u9986 \xB7 \u7B2C329\u7A9F\u56FE\u7248",url:"https://lib.tsinghua.edu.cn/arts/info/1034/2018.htm"},Eu={title:"\u6E05\u534E\u5927\u5B66\u7F8E\u672F\u56FE\u4E66\u9986 \xB7 \u7B2C390\u7A9F\u56FE\u6848\u91CA\u8BFB",url:"https://lib.tsinghua.edu.cn/arts/info/1034/2020.htm"},wu={title:"\u6570\u5B57\u6566\u714C \xB7 \u7B2C390\u7A9F",url:"https://www.e-dunhuang.com/cave/10.0001/0001.0001.0390"},Tu={title:"\u4E2D\u56FD\u7F8E\u672F\u9986 \xB7 \u7B2C407\u7A9F1954\u5E74\u4E34\u6479\u56FE\u7248",url:"https://www.namoc.cn/namoc/xinwen/202503/f47d55c8b41a4723bd35621fbe2e2ec4.shtml"},Au={title:"\u300A\u6566\u714C\u7814\u7A76\u300B2020\u5E74\u7B2C4\u671F \xB7 \u7B2C407\u7A9F\u56FE\u7248\u8BF4\u660E",url:"https://dlbs.liberal.ntu.edu.tw/en/search/search_detail.jsp?seq=599456"},Cu={title:"\u65E0\u9521\u535A\u7269\u9662 \xB7 \u7B2C407\u7A9F\u4E09\u5154\u83B2\u82B1\u7EB9\u85FB\u4E95",url:"https://www.wxmuseum.cn/News/Details/5ad667a0-66ef-479b-a7e3-58271e56a28b"},Ln=(i,t,e,n,s,r,a,o,l)=>({key:i,name:t,location:e,meaning:n,meaningKind:s,extract:r,why:a,point:o,sources:l}),jn=(...i)=>Ln(...i,[bu,Su]),ps=(...i)=>Ln(...i,[Eu,wu]),un=[{id:"329",title:"\u83B2\u82B1\u98DE\u5929\u85FB\u4E95",era:"\u521D\u5510",subtitle:"\u83B2\u74E3\u4E0E\u6D41\u4E91\u76F8\u95F4\uFF0C\u98DE\u5929\u73AF\u83B2\u56DE\u65CB\u3002",image:"assets/ceiling-study.webp",reference:"assets/cave329-core.webp",original:"assets/reference329.jpg",scope:"\u7B2C329\u7A9F\uFF1A\u5168\u5E45\u7A9F\u9876\u53C2\u8003\u91CD\u7ED8\u3002\u4E09\u7EF4\u539A\u5EA6\u4E0E\u62C6\u7247\u4E3A\u8BBE\u8BA1\u6F14\u7ECE\u3002",imageLabel:"\u5168\u5E45\u7A9F\u9876 \xB7 \u53C2\u8003\u91CD\u7ED8",sourceLabel:"\u4E95\u5FC3\u516C\u5F00\u56FE\u7248 \xB7 \u6E05\u534E\u5927\u5B66\u7F8E\u672F\u56FE\u4E66\u9986",intro:"\u5341\u56DB\u5377\u74E3\u4E0E\u5377\u4E91\u4EA4\u66FF\u56F4\u7ED5\u83B2\u5FC3\uFF0C\u56DB\u8EAB\u6267\u82B1\u98DE\u5929\u73AF\u83B2\u56DE\u65CB\u3002\u8FD9\u91CC\u4ECE\u4E2D\u5FC3\u653E\u5C04\u3001\u8863\u5E26\u56DE\u65CB\u4E0E\u8FB9\u9970\u56F4\u5408\u7684\u5173\u7CFB\u5F00\u59CB\u89C2\u5BDF\u3002",sources:[bu,Su],centerKeys:["lotus","wheel","rosette","none"],overlayKeys:["cloud","ribbon","corner","beads","vine"],defaultCenter:"lotus",defaultOverlays:["cloud","beads"],layers:[["\u5916\u7F18","\u5916\u7F18\u753B\u5E26 \xB7 \u7A9F\u9876\u7684\u8FB9\u754C","\u6700\u5916\u56F4\u7684\u8FDE\u7EED\u88C5\u9970\u753B\u5E26\u56F4\u51FA\u7A9F\u9876\u8FB9\u754C\uFF0C\u8FDE\u63A5\u56DB\u62AB\u4E0E\u4E2D\u5FC3\u4E95\u5FC3\u3002"],["\u4F0E\u4E50","\u4F0E\u4E50\u98DE\u5929 \xB7 \u5929\u7A7A\u4E2D\u7684\u4E50\u821E","\u56DB\u62AB\u6709\u5341\u4E8C\u8EAB\u4F0E\u4E50\u98DE\u5929\u3002\u4E50\u5668\u4E0E\u98D8\u5E26\u8425\u9020\u73AF\u7ED5\u7684\u5929\u4E50\u610F\u5883\u3002"],["\u8FB9\u9970","\u5C42\u5C42\u8FB9\u9970 \xB7 \u7EB9\u6837\u7684\u8FC7\u6E21","\u5377\u8349\u3001\u8054\u73E0\u4E0E\u5782\u89D2\u7B49\u7EB9\u5E26\u5C42\u5C42\u56F4\u5408\uFF0C\u8BA9\u89C6\u7EBF\u9010\u6E10\u8F6C\u5411\u4E2D\u5FC3\u3002"],["\u9752\u7A7A","\u9752\u84DD\u4E95\u5FC3 \xB7 \u5929\u7A7A\u7684\u5E95\u8272","\u6DE1\u84DD\u4E95\u5FC3\u886C\u6258\u83B2\u82B1\u3001\u98DE\u5929\u4E0E\u6D41\u4E91\uFF0C\u5F62\u6210\u5F00\u9614\u7684\u5929\u7A7A\u610F\u8C61\u3002"],["\u89D2\u82B1","\u56DB\u9685\u56E2\u82B1 \xB7 \u547C\u5E94\u83B2\u5FC3","\u56DB\u89D2\u5404\u4EE5\u56DB\u5206\u4E4B\u4E00\u56E2\u82B1\u5C55\u5F00\uFF0C\u547C\u5E94\u4E2D\u592E\u56E2\u82B1\u7684\u653E\u5C04\u8282\u594F\u3002"],["\u98DE\u5929","\u6267\u82B1\u98DE\u5929 \xB7 \u73AF\u83B2\u56DE\u65CB","\u56DB\u8EAB\u6267\u82B1\u98DE\u5929\u9006\u65F6\u9488\u73AF\u7ED5\u83B2\u82B1\uFF0C\u8863\u5E26\u4E0E\u6D41\u4E91\u5F3A\u5316\u56DE\u65CB\u52A8\u52BF\u3002"],["\u83B2\u5FC3","\u590D\u5408\u83B2\u82B1 \xB7 \u85FB\u4E95\u7684\u4E2D\u5FC3","\u5341\u56DB\u5377\u74E3\u83B2\u4E0E\u5341\u56DB\u6735\u5377\u4E91\u7EB9\u76F8\u95F4\u73AF\u7ED5\uFF0C\u7EFF\u8272\u83B2\u84EC\u70B9\u7ED8\u767D\u8272\u83B2\u7C7D\u3002"]],layerMotifs:["beads","ribbon","vine","cloud","corner","ribbon","lotus"],puzzleNames:["\u5916\u7F18\u4E0E\u89D2\u82B1","\u4F0E\u4E50\u4E0E\u8FB9\u9970","\u5916\u7F18\u4E0E\u89D2\u82B1","\u98DE\u5929\u4E0E\u6D41\u4E91","\u590D\u5408\u83B2\u82B1\u4E0E\u83B2\u84EC","\u98DE\u5929\u4E0E\u6D41\u4E91","\u89D2\u82B1\u4E0E\u5916\u7F18","\u4F0E\u4E50\u4E0E\u8FB9\u9970","\u89D2\u82B1\u4E0E\u5916\u7F18"],puzzleComplete:"\u83B2\u5FC3\u3001\u56DB\u8EAB\u98DE\u5929\u4E0E\u56DB\u89D2\u56E2\u82B1\u91CD\u65B0\u76F8\u63A5\u3002\u8BD5\u7740\u5728\u7EB9\u6837\u6863\u6848\u4E2D\u627E\u5230\u5404\u90E8\u5206\u7684\u63D0\u53D6\u65B9\u6CD5\u3002",motifs:[jn("lotus","\u5341\u56DB\u5377\u74E3\u83B2","\u4E95\u5FC3\u4E2D\u592E\u7684\u590D\u5408\u83B2\u82B1","\u83B2\u82B1\u5728\u6B64\u4F5B\u6559\u8BED\u5883\u4E2D\u627F\u8F7D\u51C0\u571F\u610F\u8C61\u3002","\u6587\u5316\u542B\u4E49","\u4FDD\u7559\u5341\u56DB\u74E3\u7684\u653E\u5C04\u8282\u594F\uFF0C\u63D0\u53D6\u5377\u74E3\u8F6E\u5ED3\uFF0C\u51CF\u5C11\u74E3\u5185\u7EBF\u6761\u3002","\u4E2D\u5FC3\u7ED3\u6784\u6E05\u6670\uFF0C\u7F29\u5C0F\u540E\u4ECD\u80FD\u8BC6\u522B\uFF0C\u9002\u5408\u4F5C\u4E3A\u9999\u6302\u4E3B\u4F53\u3002",[.5,.5]),jn("wheel","\u83B2\u84EC\u4E0E\u65CB\u8F6C\u5185\u74E3","\u4E2D\u592E\u83B2\u84EC\u53CA\u4EA4\u66FF\u8272\u5185\u74E3","\u4EE5\u73AF\u7ED5\u4E0E\u65CB\u8F6C\u8868\u8FBE\u805A\u5408\u611F\uFF0C\u662F\u672C\u9879\u76EE\u5BF9\u6784\u56FE\u7684\u5F53\u4EE3\u8054\u60F3\u3002","\u8BBE\u8BA1\u8054\u60F3","\u622A\u53D6\u4E2D\u592E\u83B2\u84EC\u548C\u5185\u74E3\uFF0C\u91CD\u65B0\u6574\u7406\u6210\u53EF\u72EC\u7ACB\u4F7F\u7528\u7684\u65CB\u8F6C\u5355\u5143\u3002","\u8BA9\u9999\u6302\u4FDD\u7559\u85FB\u4E95\u7684\u89C6\u89C9\u4E2D\u5FC3\uFF0C\u9002\u5408\u5C0F\u5C3A\u5BF8\u4E0E\u5C11\u8272\u5370\u5236\u3002",[.5,.5]),jn("rosette","\u590D\u5408\u56E2\u82B1\u518D\u8BBE\u8BA1","\u4ECE\u4E2D\u592E\u83B2\u82B1\u7684\u591A\u5C42\u6784\u56FE\u51FA\u53D1","\u628A\u5C42\u53E0\u82B1\u74E3\u8F6C\u8BD1\u4E3A\u4E30\u76C8\u3001\u5C55\u5F00\u7684\u89C6\u89C9\u611F\u53D7\u3002","\u8BBE\u8BA1\u8054\u60F3","\u501F\u9274\u591A\u5C42\u653E\u5C04\u5173\u7CFB\uFF0C\u91CD\u65B0\u8BBE\u8BA1\u5341\u4E8C\u5411\u51E0\u4F55\u56E2\u82B1\uFF0C\u4E0D\u79F0\u4F5C\u539F\u56FE\u590D\u523B\u3002","\u63D0\u4F9B\u66F4\u7B80\u6D01\u7684\u82B1\u5F62\u9009\u62E9\uFF0C\u548C\u539F\u578B\u5377\u74E3\u5F62\u6210\u4E0D\u540C\u5BC6\u5EA6\u3002",[.5,.5]),jn("cloud","\u56DE\u65CB\u5377\u4E91","\u83B2\u74E3\u4E4B\u95F4\u4E0E\u98DE\u5929\u5468\u56F4\u7684\u6D41\u4E91","\u6D41\u4E91\u53C2\u4E0E\u5929\u7A7A\u4E0E\u73AF\u7ED5\u52A8\u52BF\u7684\u8425\u9020\u3002\u9999\u6302\u4E2D\u7684\u8F7B\u76C8\u611F\u662F\u8BBE\u8BA1\u8054\u60F3\u3002","\u6587\u5316\u542B\u4E49","\u4ECE\u5377\u66F2\u8F6E\u5ED3\u4E2D\u63D0\u53D6\u5F27\u7EBF\uFF0C\u5408\u5E76\u7EC6\u788E\u7EBF\u6BB5\uFF0C\u518D\u6309\u56DB\u5411\u6392\u5217\u3002","\u8BA9\u4E2D\u5FC3\u82B1\u5F62\u4E0E\u5916\u7F18\u81EA\u7136\u8FC7\u6E21\uFF0C\u53EF\u4F5C\u4E3A\u4F4E\u6D53\u5EA6\u53E0\u52A0\u7EB9\u3002",[.34,.16]),jn("ribbon","\u98DE\u5929\u8863\u5E26","\u56DB\u8EAB\u6267\u82B1\u98DE\u5929\u8212\u5C55\u7684\u957F\u5DFE","\u8863\u5E26\u8868\u73B0\u98DE\u5929\u7684\u8FD0\u52A8\u65B9\u5411\u3002\u81EA\u7531\u4E0E\u8212\u5C55\u662F\u672C\u9879\u76EE\u7684\u89C6\u89C9\u8054\u60F3\u3002","\u8BBE\u8BA1\u8054\u60F3","\u53EA\u63D0\u53D6\u957F\u5DFE\u7684S\u5F62\u56DE\u65CB\u7EBF\uFF0C\u4E0D\u628A\u7B80\u5316\u8863\u5E26\u5F53\u4F5C\u5B8C\u6574\u98DE\u5929\u5F62\u8C61\u3002","\u7528\u8FDE\u7EED\u66F2\u7EBF\u589E\u52A0\u52A8\u52BF\uFF0C\u907F\u514D\u5C0F\u5C3A\u5BF8\u4EBA\u7269\u5931\u53BB\u8FA8\u8BC6\u3002",[.47,.23]),jn("corner","\u56DB\u9685\u56E2\u82B1","\u65B9\u5F62\u4E95\u5FC3\u7684\u56DB\u4E2A\u89D2\u90E8","\u89D2\u82B1\u4E0E\u83B2\u5FC3\u76F8\u547C\u5E94\uFF0C\u5EFA\u7ACB\u4E2D\u5FC3\u4E0E\u56DB\u89D2\u7684\u6784\u56FE\u5173\u7CFB\u3002","\u6587\u5316\u542B\u4E49","\u622A\u53D6\u56DB\u5206\u4E4B\u4E00\u82B1\u5F62\uFF0C\u6574\u7406\u82B1\u74E3\u8F6E\u5ED3\uFF0C\u5728\u9999\u6302\u56DB\u89D2\u91CD\u590D\u3002","\u9002\u5408\u65B9\u5F62\u6216\u516B\u89D2\u8F6E\u5ED3\uFF0C\u8865\u5145\u8FB9\u89D2\u5E76\u4FDD\u6301\u4E2D\u5FC3\u7559\u767D\u3002",[.1,.1]),jn("beads","\u8054\u73E0\u8FB9\u9970","\u4E95\u5FC3\u5916\u56F4\u7684\u8FDE\u7EED\u8054\u73E0\u7EB9\u5E26","\u8FDE\u7EED\u5706\u70B9\u5F62\u6210\u56F4\u5408\u8282\u594F\uFF0C\u9999\u6302\u501F\u6B64\u628A\u5206\u6563\u7EB9\u6837\u7EC4\u7EC7\u5728\u4E00\u8D77\u3002","\u8BBE\u8BA1\u8054\u60F3","\u5C06\u8FDE\u7EED\u5706\u73E0\u8F6C\u4E3A\u5747\u5300\u70B9\u5217\uFF0C\u4E0E\u4E24\u6761\u7EC6\u7EBF\u7EC4\u6210\u8FB9\u6846\u3002","\u7F29\u5C0F\u540E\u4ECD\u7136\u6E05\u6670\uFF0C\u80FD\u628A\u81EA\u7531\u7EC4\u5408\u7684\u56FE\u5F62\u7EC4\u7EC7\u5728\u540C\u4E00\u8FB9\u754C\u5185\u3002",null),jn("vine","\u5377\u8349\u8FB9\u9970","\u4E95\u5FC3\u5916\u56F4\u7684\u5377\u8349\u7EB9\u5E26","\u8FDE\u7EED\u5377\u66F2\u7684\u690D\u7269\u5F62\u6001\u5E26\u6765\u751F\u957F\u4E0E\u5EF6\u7EED\u7684\u89C6\u89C9\u8054\u60F3\u3002","\u8BBE\u8BA1\u8054\u60F3","\u63D0\u53D6\u5377\u66F2\u830E\u7EBF\u548C\u5BF9\u751F\u53F6\u5F62\uFF0C\u8C03\u6574\u4E3A\u53EF\u5E73\u94FA\u91CD\u590D\u7684\u5355\u5143\u3002","\u4F5C\u4E3A\u7EC6\u8FB9\u9970\u4FDD\u7559\u690D\u7269\u66F2\u7EBF\uFF0C\u907F\u514D\u4E0E\u4E2D\u5FC3\u83B2\u82B1\u4E89\u593A\u5C42\u6B21\u3002",null)]},{id:"407",title:"\u4E09\u5154\u5171\u8033\u85FB\u4E95",era:"\u968B\u4EE3",subtitle:"\u4E09\u5154\u8FFD\u9010\u5171\u7528\u4E09\u8033\uFF0C\u83B2\u82B1\u5C42\u5C42\u73AF\u7ED5\u3002",image:"assets/cave407-study.webp",reference:"assets/cave407-core.webp",original:"assets/cave407-original.png",scope:"\u7B2C407\u7A9F\uFF1A\u6BB5\u6587\u6770\u3001\u674E\u590D1954\u5E74\u4E34\u6479\u56FE\u7248\uFF0C\u6566\u714C\u7814\u7A76\u9662\u85CF\u3002\u4E09\u7EF4\u539A\u5EA6\u4E0E\u62C6\u7247\u4E3A\u8BBE\u8BA1\u6F14\u7ECE\u3002",imageLabel:"\u85FB\u4E95\u4E34\u6479 \xB7 1954\u5E74",sourceLabel:"1954\u5E74\u4E34\u6479\u56FE\u7248 \xB7 \u4E2D\u56FD\u7F8E\u672F\u9986\u516C\u5F00",intro:"\u4E2D\u5FC3\u4E09\u5154\u5FAA\u73AF\u76F8\u9010\uFF0C\u5171\u7528\u4E09\u53EA\u8033\u6735\u3002\u5B83\u540C\u65F6\u63D0\u4F9B\u52A8\u7269\u8F6E\u5ED3\u3001\u5171\u7528\u5F62\u4E0E\u65CB\u8F6C\u6784\u56FE\u7684\u89C2\u5BDF\u7EBF\u7D22\uFF0C\u9002\u5408\u53D1\u5C55\u5177\u6709\u8DA3\u5473\u6027\u7684\u9999\u6302\u7EC4\u5408\u3002",sources:[Au,Cu,Tu],centerKeys:["rabbits","lotus4","none"],overlayKeys:["petalRing","ribbon","beads","diamondBand","honeysuckle"],defaultCenter:"rabbits",defaultOverlays:["petalRing","beads"],layers:[["\u5916\u7F18","\u5916\u7F18\u753B\u7247 \xB7 \u56FE\u7248\u8FB9\u754C","\u6CBF\u4E34\u6479\u4F5C\u54C1\u7684\u8FB9\u7F18\u5206\u7247\uFF0C\u4FDD\u7559\u5B8C\u6574\u56FE\u7248\u8303\u56F4\u3002"],["\u5E37\u5E54","\u5782\u89D2\u5E37\u5E54 \xB7 \u5C42\u53E0\u7684\u5916\u6846","\u4E09\u89D2\u5782\u89D2\u4E0E\u5706\u8936\u5C42\u5C42\u56F4\u5408\u4E95\u5FC3\uFF0C\u5F62\u6210\u4E30\u5BCC\u7684\u5916\u7F18\u3002"],["\u8FB9\u9970","\u83F1\u683C\u8FB9\u9970 \xB7 \u8FDE\u7EED\u7684\u7EB9\u5E26","\u83F1\u683C\u82B1\u9970\u6CBF\u56DB\u8FB9\u91CD\u590D\uFF0C\u4E0E\u5185\u4FA7\u5377\u66F2\u8FB9\u5E26\u8854\u63A5\u3002"],["\u5E95\u7247","\u4E95\u5FC3\u5F69\u7ED8 \xB7 \u4FDD\u7559\u5B8C\u6574\u753B\u9762","\u5B8C\u6574\u5E95\u7247\u4FDD\u7559\u4E09\u5154\u3001\u83B2\u82B1\u3001\u516B\u8EAB\u98DE\u5929\u548C\u8FB9\u5E26\u4E4B\u95F4\u7684\u6240\u6709\u753B\u9762\u3002"],["\u98DE\u5929","\u98DE\u5929\u4E0E\u8863\u5E26 \xB7 \u73AF\u83B2\u800C\u884C","\u516B\u8EAB\u98DE\u5929\u59FF\u6001\u5404\u5F02\uFF0C\u8863\u5E26\u4E0E\u6D41\u4E91\u6CBF\u4E2D\u592E\u83B2\u82B1\u5468\u56F4\u56DE\u65CB\u3002"],["\u83B2\u74E3","\u56DB\u5C42\u516B\u74E3\u83B2\u82B1 \xB7 \u65CB\u8F6C\u7684\u82B1\u5F62","\u516B\u5411\u82B1\u74E3\u5F62\u6210\u591A\u5C42\u7ED3\u6784\uFF0C\u73AF\u7ED5\u83B2\u5FC3\u7684\u4E09\u5154\u3002"],["\u4E09\u5154","\u4E09\u5154\u5171\u8033 \xB7 \u5171\u7528\u5F62\u7684\u6784\u56FE","\u4E09\u5154\u9006\u65F6\u9488\u5FAA\u73AF\u5954\u8DD1\uFF0C\u5171\u7528\u4E09\u8033\uFF0C\u6BCF\u53EA\u4ECE\u89C6\u89C9\u4E0A\u4ECD\u5177\u6709\u4E24\u8033\u3002"]],layerMotifs:["diamondBand","honeysuckle","diamondBand","rabbits","ribbon","lotus4","rabbits"],puzzleNames:["\u98DE\u5929\u8863\u5E26\u4E0E\u83B2\u7F18","\u5916\u5C42\u83B2\u74E3","\u8863\u5E26\u4E0E\u83B2\u7F18","\u590D\u5408\u83B2\u74E3","\u4E09\u5154\u5171\u8033","\u590D\u5408\u83B2\u74E3","\u8863\u5E26\u4E0E\u83B2\u7F18","\u5916\u5C42\u83B2\u74E3","\u98DE\u5929\u8863\u5E26\u4E0E\u83B2\u7F18"],puzzleComplete:"\u4E09\u5154\u4E0E\u5C42\u5C42\u83B2\u74E3\u91CD\u65B0\u73AF\u7ED5\u5728\u4E00\u8D77\u3002\u89C2\u5BDF\u4E09\u53EA\u8033\u6735\u5982\u4F55\u540C\u65F6\u5C5E\u4E8E\u4E09\u53EA\u5154\u5B50\u3002",motifs:[Ln("rabbits","\u4E09\u5154\u5171\u8033","\u4E95\u5FC3\u4E2D\u592E\u5706\u5F62\u533A\u57DF","\u539F\u56FE\u8FD0\u7528\u4E09\u5154\u5171\u7528\u4E09\u8033\u7684\u6784\u56FE\u3002\u9999\u6302\u4E2D\u7684\u5171\u4EAB\u3001\u966A\u4F34\u542B\u4E49\u662F\u5F53\u4EE3\u8BBE\u8BA1\u8054\u60F3\u3002","\u8BBE\u8BA1\u8054\u60F3","\u4FDD\u7559\u4E09\u4E2A\u5154\u8EAB\u3001\u4E09\u53EA\u5171\u7528\u8033\u4E0E120\u5EA6\u5FAA\u73AF\u5173\u7CFB\uFF0C\u7B80\u5316\u6BDB\u53D1\u548C\u7EC6\u90E8\u3002","\u5171\u7528\u5F62\u517C\u5177\u8FA8\u8BC6\u5EA6\u548C\u89C6\u89C9\u8DA3\u5473\uFF0C\u8BA9\u53C2\u4E0E\u8005\u901A\u8FC7\u89C2\u5BDF\u53D1\u73B0\u56FE\u5F62\u5173\u7CFB\u3002",[.5,.5],[]),Ln("lotus4","\u5C42\u53E0\u83B2\u82B1","\u4E09\u5154\u5916\u4FA7\u7684\u591A\u5C42\u83B2\u82B1","\u83B2\u82B1\u662F\u4F5B\u6559\u88C5\u9970\u4E2D\u7684\u5E38\u89C1\u5F62\u8C61\uFF1B\u5177\u4F53\u5C42\u6570\u4E0E\u5F62\u6001\u4EE5\u672C\u7A9F\u56FE\u7248\u548C\u7814\u7A76\u8BF4\u660E\u4E3A\u51C6\u3002","\u6587\u5316\u542B\u4E49","\u63D0\u53D6\u5185\u5916\u5C42\u82B1\u74E3\u8F6E\u5ED3\uFF0C\u4EE5\u56DB\u5C42\u51E0\u4F55\u82B1\u5F62\u91CD\u65B0\u7EC4\u7EC7\uFF0C\u4E0D\u6A21\u62DF\u892A\u8272\u3002","\u5C42\u53E0\u8F6E\u5ED3\u80FD\u5355\u72EC\u4F5C\u4E3B\u4F53\uFF0C\u4E5F\u80FD\u6258\u4F4F\u4E09\u5154\u4E2D\u5FC3\u3002",[.5,.28],[]),Ln("petalRing","\u73AF\u5F62\u83B2\u74E3","\u56F4\u7ED5\u4E2D\u592E\u4E09\u5154\u7684\u83B2\u74E3\u5708","\u8FD9\u91CC\u501F\u73AF\u7ED5\u5173\u7CFB\u8868\u8FBE\u805A\u5408\u4E0E\u76F8\u4F34\uFF0C\u5C5E\u4E8E\u672C\u9879\u76EE\u7684\u7EC4\u5408\u8054\u60F3\u3002","\u8BBE\u8BA1\u8054\u60F3","\u4FDD\u7559\u516B\u5411\u653E\u5C04\u4E0E\u74E3\u5C16\u671D\u5916\u7684\u7279\u5F81\uFF0C\u5F62\u6210\u7A7A\u5FC3\u82B1\u73AF\u3002","\u4E3A\u52A8\u7269\u4E3B\u4F53\u7559\u51FA\u4F4D\u7F6E\uFF0C\u907F\u514D\u82B1\u74E3\u906E\u4F4F\u5171\u8033\u7ED3\u6784\u3002",[.5,.17],[]),Ln("ribbon","\u98DE\u5929\u8863\u5E26","\u65B9\u5F62\u4E95\u5FC3\u5185\u7684\u516B\u8EAB\u98DE\u5929\u8863\u5E26","\u957F\u5DFE\u63CF\u7ED8\u8FD0\u52A8\u65B9\u5411\uFF1B\u8F7B\u5FEB\u4E0E\u8212\u5C55\u662F\u518D\u8BBE\u8BA1\u7684\u89C6\u89C9\u8868\u8FBE\u3002","\u8BBE\u8BA1\u8054\u60F3","\u63D0\u53D6\u4E34\u6479\u56FE\u4E2D\u8863\u5E26\u7684\u56DE\u8F6C\u5F27\u7EBF\uFF0C\u4EE5\u56DB\u5411\u66F2\u7EBF\u7B80\u5316\u6392\u5217\u3002","\u548C\u4E09\u5154\u65CB\u8F6C\u65B9\u5411\u5F62\u6210\u547C\u5E94\uFF0C\u4F5C\u4E3A\u8F83\u8F7B\u7684\u53E0\u52A0\u5C42\u3002",[.09,.12],[]),Ln("beads","\u8054\u73E0\u5F0F\u8FB9\u6846\u518D\u8BBE\u8BA1","\u4F9D\u636E\u85FB\u4E95\u8FDE\u7EED\u8FB9\u9970\u4F5C\u7EC4\u5408\u7EC3\u4E60","\u5747\u5300\u73E0\u70B9\u8BA9\u5206\u6563\u7684\u5143\u7D20\u5177\u6709\u5171\u540C\u8FB9\u754C\uFF0C\u8425\u9020\u8FDE\u8D2F\u7684\u88C5\u9970\u8282\u594F\u3002","\u8BBE\u8BA1\u8054\u60F3","\u4EE5\u8FDE\u7EED\u5706\u70B9\u91CD\u6784\u8FB9\u6846\uFF0C\u4E3A\u4E34\u6479\u56FE\u7248\u7684\u8FDE\u7EED\u8FB9\u9970\u63D0\u4F9B\u66F4\u8F7B\u7684\u8FB9\u6846\u9009\u62E9\u3002","\u63D0\u4F9B\u6E05\u695A\u3001\u8F7B\u5DE7\u7684\u5916\u7F18\uFF0C\u9002\u5408\u4E0D\u540C\u9999\u6302\u8F6E\u5ED3\u3002",null,[]),Ln("diamondBand","\u83F1\u683C\u8FB9\u9970","\u4E34\u6479\u56FE\u7248\u4E2D\u56F4\u7ED5\u65B9\u5F62\u4E95\u5FC3\u7684\u83F1\u683C\u7EB9\u5E26","\u83F1\u683C\u7684\u91CD\u590D\u6784\u6210\u89C4\u6574\u8282\u594F\uFF0C\u79E9\u5E8F\u611F\u4E3A\u672C\u9879\u76EE\u7684\u8BBE\u8BA1\u8868\u8FBE\u3002","\u8BBE\u8BA1\u8054\u60F3","\u63D0\u53D6\u83F1\u683C\u548C\u5185\u90E8\u82B1\u9970\u7684\u7ED3\u6784\uFF0C\u7B80\u5316\u7EC6\u8282\u540E\u8FDE\u7EED\u91CD\u590D\u3002","\u628A\u65B9\u5F62\u8FDE\u7EED\u7EB9\u5E26\u8F6C\u6210\u9002\u5408\u5C0F\u4EA7\u54C1\u7684\u88C5\u9970\u73AF\u3002",null,[]),Ln("honeysuckle","\u5FCD\u51AC\u7EB9\u8FB9\u9970","\u6587\u732E\u8BB0\u5F55\u7684\u85FB\u4E95\u5916\u56F4\u7EB9\u5E26","\u672C\u9879\u76EE\u501F\u5377\u66F2\u53F6\u5F62\u8868\u8FBE\u751F\u957F\u4E0E\u5EF6\u7EED\uFF0C\u4E0D\u5C06\u6B64\u8054\u60F3\u5F53\u4F5C\u552F\u4E00\u5386\u53F2\u89E3\u91CA\u3002","\u8BBE\u8BA1\u8054\u60F3","\u4FDD\u7559\u5377\u66F2\u53F6\u74E3\u4E0E\u8FDE\u7EED\u830E\u7EBF\uFF0C\u91CD\u7EC4\u4E3A\u7EC6\u7EBF\u91CD\u590D\u5355\u5143\u3002","\u8865\u5145\u52A8\u7269\u3001\u82B1\u5F62\u4EE5\u5916\u7684\u690D\u7269\u88C5\u9970\uFF0C\u4FBF\u4E8E\u81EA\u7531\u53E0\u52A0\u3002",null,[])]},{id:"390",title:"\u83B2\u82B1\u7F20\u679D\u85FB\u4E95",era:"\u968B\u4EE3\u665A\u671F",subtitle:"\u4E5D\u74E3\u91CD\u83B2\u4E3A\u5FC3\uFF0C\u76D8\u830E\u5341\u4E8C\u83B2\u76F8\u63A5\u3002",image:"assets/cave390-core.webp",reference:"assets/cave390-core.webp",original:"assets/cave390-original.png",scope:"\u7B2C390\u7A9F\uFF1A\u5C55\u793A\u4E95\u5FC3\u83B2\u82B1\u4E0E\u7F20\u679D\u56FE\u7248\uFF0C\u5F53\u524D\u56FE\u7248\u4E0D\u542B\u5B8C\u6574\u5916\u56F4\u5E37\u5E54\u3002\u6D6E\u96D5\u539A\u5EA6\u4E0E\u62C6\u7247\u4E3A\u8BBE\u8BA1\u6F14\u7ECE\u3002",imageLabel:"\u4E95\u5FC3\u5F69\u7ED8 \xB7 \u516C\u5F00\u56FE\u7248",sourceLabel:"\u4E95\u5FC3\u516C\u5F00\u56FE\u7248 \xB7 \u6E05\u534E\u5927\u5B66\u7F8E\u672F\u56FE\u4E66\u9986",intro:"\u4E2D\u592E\u91CD\u74E3\u4E5D\u74E3\u83B2\u82B1\u4E0E\u76D8\u830E\u4E0A\u7684\u5341\u4E8C\u6735\u5C0F\u83B2\u82B1\u76F8\u4E92\u547C\u5E94\u3002\u9009\u53D6\u82B1\u3001\u53F6\u4E0E\u8FDE\u7EED\u830E\u7EBF\uFF0C\u63A2\u7D22\u4E0D\u4F9D\u8D56\u4EBA\u7269\u56FE\u6848\u7684\u690D\u7269\u5F0F\u9999\u6302\u3002",sources:[Eu,wu],centerKeys:["lotus9","smallLotus","none"],overlayKeys:["lotusVine","pearlLotus","drapery","cornerLotus"],defaultCenter:"lotus9",defaultOverlays:["lotusVine"],layers:[["\u5916\u7F18","\u56FE\u7248\u5916\u7F18 \xB7 \u53D6\u666F\u7684\u8FB9\u754C","\u6CBF\u5F53\u524D\u4E95\u5FC3\u56FE\u7248\u53EF\u89C1\u7684\u753B\u5E45\u8FB9\u754C\u62C6\u7247\uFF0C\u672A\u8865\u753B\u56FE\u7248\u4E4B\u5916\u7684\u5E37\u5E54\u3002"],["\u5916\u679D","\u5916\u4FA7\u7F20\u679D \xB7 \u8FDE\u7EED\u7684\u751F\u957F\u7EBF","\u5916\u4FA7\u76D8\u830E\u5C06\u5C0F\u83B2\u82B1\u4E0E\u53F6\u5F62\u88C5\u9970\u8FDE\u63A5\u4E3A\u8FDE\u7EED\u753B\u9762\u3002"],["\u5185\u679D","\u5185\u4FA7\u7F20\u679D \xB7 \u73AF\u7ED5\u83B2\u82B1","\u76D8\u66F2\u7684\u679D\u830E\u8FDE\u63A5\u4E2D\u592E\u82B1\u5F62\u4E0E\u56DB\u5468\u5C0F\u83B2\uFF0C\u5F62\u6210\u8FDE\u7EED\u5173\u7CFB\u3002"],["\u5E95\u8272","\u4E95\u5FC3\u5E95\u8272 \xB7 \u7EB9\u6837\u7684\u7559\u767D","\u6D45\u8272\u80CC\u666F\u886C\u6258\u6DF1\u8272\u83B2\u74E3\u3001\u84DD\u8272\u5185\u74E3\u4E0E\u8D6D\u7EA2\u53F6\u5F62\u3002"],["\u82B1\u53F6","\u56DB\u9685\u82B1\u53F6 \xB7 \u8854\u63A5\u65B9\u5706","\u56DB\u89D2\u53EF\u89C1\u5C0F\u83B2\u3001\u53F6\u7247\u4E0E\u76D8\u830E\uFF0C\u662F\u5B8C\u6574\u690D\u7269\u6784\u56FE\u7684\u4E00\u90E8\u5206\u3002"],["\u83B2\u74E3","\u590D\u5408\u83B2\u74E3 \xB7 \u4E5D\u5411\u653E\u5C04","\u4E2D\u592E\u91CD\u74E3\u4E5D\u74E3\u5927\u83B2\u82B1\u5C42\u5C42\u5C55\u5F00\uFF0C\u660E\u6697\u4E0E\u8272\u5757\u589E\u5F3A\u8F6E\u5ED3\u3002"],["\u83B2\u5FC3","\u4E2D\u592E\u83B2\u5FC3 \xB7 \u6784\u56FE\u7684\u8D77\u70B9","\u5706\u5F62\u83B2\u5FC3\u5C45\u4E2D\uFF0C\u4E0E\u73AF\u7ED5\u82B1\u74E3\u5171\u540C\u5F62\u6210\u4E3B\u4F53\u3002"]],layerMotifs:["pearlLotus","lotusVine","lotusVine","lotus9","cornerLotus","lotus9","smallLotus"],puzzleNames:["\u76D8\u830E\u4E0E\u5C0F\u83B2","\u5C0F\u83B2\u4E0E\u53F6\u7247","\u76D8\u830E\u4E0E\u5C0F\u83B2","\u5916\u83B2\u74E3\u4E0E\u7F20\u679D","\u4E5D\u74E3\u91CD\u83B2\u4E0E\u83B2\u5FC3","\u5916\u83B2\u74E3\u4E0E\u7F20\u679D","\u5C0F\u83B2\u4E0E\u53F6\u7247","\u7F20\u679D\u4E0E\u5C0F\u83B2","\u5C0F\u83B2\u4E0E\u53F6\u7247"],puzzleComplete:"\u4E2D\u592E\u5927\u83B2\u82B1\u4E0E\u76D8\u830E\u5C0F\u83B2\u91CD\u65B0\u76F8\u63A5\u3002\u770B\u770B\u8FDE\u7EED\u7684\u679D\u830E\u5982\u4F55\u628A\u5341\u4E8C\u6735\u5C0F\u83B2\u7EC4\u7EC7\u5728\u4E00\u8D77\u3002",motifs:[ps("lotus9","\u4E5D\u74E3\u91CD\u83B2","\u4E95\u5FC3\u4E2D\u592E\u7684\u91CD\u74E3\u4E5D\u74E3\u5927\u83B2\u82B1","\u83B2\u82B1\u5728\u4F5B\u6559\u88C5\u9970\u8BED\u5883\u4E2D\u5177\u6709\u91CD\u8981\u5730\u4F4D\u3002\u6B64\u5904\u7740\u91CD\u8868\u73B0\u82B1\u5F62\u672C\u8EAB\u3002","\u6587\u5316\u542B\u4E49","\u4FDD\u7559\u4E5D\u5411\u653E\u5C04\u4E0E\u5185\u5916\u5C42\u5173\u7CFB\uFF0C\u4EE5\u7B80\u5316\u82B1\u74E3\u91CD\u7ED8\u4E3B\u4F53\u3002","\u4E5D\u5411\u8282\u594F\u533A\u522B\u4E8E\u7B2C329\u7A9F\u5341\u56DB\u5377\u74E3\uFF0C\u8BA9\u4E0D\u540C\u6765\u6E90\u4FDD\u6301\u53EF\u8FA8\u7279\u5F81\u3002",[.5,.5]),ps("smallLotus","\u5C0F\u83B2\u82B1\u73AF\u518D\u8BBE\u8BA1","\u4E2D\u592E\u83B2\u82B1\u5468\u56F4\u76D8\u830E\u4E0A\u7684\u5341\u4E8C\u6735\u5C0F\u83B2\u4E4B\u4E00","\u76F8\u4E92\u8FDE\u63A5\u7684\u5C0F\u83B2\u5F62\u6210\u8FDE\u7EED\u7684\u690D\u7269\u753B\u9762\u3002\u76F8\u4F34\u4E0E\u751F\u957F\u662F\u672C\u9879\u76EE\u7684\u8054\u60F3\u3002","\u8BBE\u8BA1\u8054\u60F3","\u4EE5\u5C0F\u83B2\u4E3A\u57FA\u672C\u5355\u5143\uFF0C\u6309\u5341\u4E8C\u5411\u91CD\u65B0\u7EC4\u5408\u4E3A\u5C0F\u83B2\u82B1\u73AF\uFF0C\u5C5E\u4E8E\u4E8C\u6B21\u6392\u5217\u3002","\u628A\u5916\u56F4\u5C0F\u83B2\u8F6C\u4E3A\u8F7B\u5DE7\u82B1\u73AF\uFF0C\u63D0\u4F9B\u533A\u522B\u4E8E\u4E2D\u592E\u5927\u83B2\u7684\u4E3B\u4F53\u6837\u5F0F\u3002",[.54,.1]),ps("lotusVine","\u7F20\u679D\u83B2\u7EB9","\u8FDE\u63A5\u5341\u4E8C\u6735\u5C0F\u83B2\u7684\u76D8\u66F2\u830E\u7EBF","\u76D8\u830E\u5C06\u591A\u6735\u83B2\u82B1\u8054\u7CFB\u8D77\u6765\uFF0C\u5EF6\u7EED\u4E0E\u751F\u957F\u4E3A\u9999\u6302\u7684\u5F53\u4EE3\u8BBE\u8BA1\u8054\u60F3\u3002","\u8BBE\u8BA1\u8054\u60F3","\u63D0\u53D6\u5F2F\u66F2\u4E3B\u830E\u3001\u5C0F\u83B2\u4E0E\u53F6\u7247\uFF0C\u51CF\u53BB\u7EB9\u7406\u540E\u7EC4\u6210\u53EF\u8FDE\u7EED\u62FC\u63A5\u7684\u5355\u5143\u3002","\u8BA9\u9999\u6302\u80FD\u7EC4\u5408\u690D\u7269\u5F62\u6001\uFF0C\u964D\u4F4E\u4E2D\u5FC3\u5927\u56E2\u82B1\u7684\u89C6\u89C9\u5BC6\u5EA6\u3002",[.24,.22]),ps("pearlLotus","\u83B2\u82B1\u8054\u73E0\u7EB9","\u6E05\u534E\u56FE\u7248\u8BF4\u660E\u8BB0\u8F7D\u7684\u5E37\u5E54\u9576\u8FB9\uFF0C\u4E95\u5FC3\u56FE\u7248\u672A\u5448\u73B0","\u83B2\u82B1\u4E0E\u5706\u73E0\u4EA4\u66FF\u7684\u9576\u8FB9\uFF0C\u5C06\u8FDE\u7EED\u8282\u594F\u5E26\u5165\u9999\u6302\u7684\u5916\u6846\u3002","\u8BBE\u8BA1\u8054\u60F3","\u6309\u82B1\u6735\u4E0E\u5706\u73E0\u4EA4\u66FF\u7684\u7ED3\u6784\u4F5C\u539F\u521B\u8FB9\u9970\u7EC3\u4E60\uFF0C\u4E0D\u79F0\u4F5C\u5916\u56F4\u539F\u7EB9\u590D\u523B\u3002","\u628A\u82B1\u5F62\u548C\u8FDE\u7EED\u70B9\u7EBF\u7ED3\u5408\uFF0C\u4F5C\u4E3A\u53EF\u72EC\u7ACB\u8C03\u6574\u7684\u5916\u6846\u3002",null),ps("drapery","\u5E37\u5E54\u8936\u7EB9","\u6587\u732E\u8BB0\u8F7D\u7684\u7A9F\u9876\u5916\u56F4\u5E37\u5E54\uFF0C\u5F53\u524D\u4E95\u5FC3\u56FE\u7248\u4E0D\u542B\u6B64\u533A\u57DF","\u5E37\u5E54\u662F\u56F4\u5408\u7A7A\u95F4\u7684\u88C5\u9970\u5F62\u5F0F\uFF0C\u9999\u6302\u4E2D\u7684\u5C42\u53E0\u611F\u662F\u8BBE\u8BA1\u8868\u8FBE\u3002","\u8BBE\u8BA1\u8054\u60F3","\u5C06\u5782\u60AC\u8936\u7EB9\u91CD\u7ED8\u4E3A\u89C4\u5219\u5F27\u7EBF\u4E0E\u5782\u89D2\uFF0C\u51CF\u5C11\u6210\u5757\u8272\u9762\u3002","\u4FDD\u7559\u5EFA\u7B51\u88C5\u9970\u7684\u5C42\u6B21\uFF0C\u8BA9\u690D\u7269\u4E3B\u4F53\u5916\u7F18\u66F4\u6709\u8282\u594F\u3002",null),ps("cornerLotus","\u89D2\u9685\u82B1\u53F6\u518D\u8BBE\u8BA1","\u4E95\u5FC3\u56DB\u89D2\u7684\u76D8\u830E\u3001\u82B1\u6735\u4E0E\u53F6\u5F62","\u56DB\u89D2\u82B1\u53F6\u5EF6\u7EED\u6574\u4F53\u690D\u7269\u6784\u56FE\uFF0C\u5728\u8FB9\u89D2\u547C\u5E94\u4E2D\u592E\u82B1\u5F62\u3002","\u8BBE\u8BA1\u8054\u60F3","\u4ECE\u89D2\u90E8\u82B1\u53F6\u7EC4\u5408\u4E2D\u53D6\u5F62\uFF0C\u91CD\u7EC4\u4E3A\u56DB\u89D2\u53EF\u91CD\u590D\u7684\u5355\u5143\u3002","\u7528\u8F83\u5C0F\u82B1\u53F6\u586B\u5145\u8FB9\u89D2\uFF0C\u7559\u51FA\u4E3B\u4F53\u547C\u5438\u7A7A\u95F4\u3002",[.14,.14])]}];for(let i of un){if(i.id==="407"){for(let e of i.motifs)e.sources=[Au,Cu,Tu];i.motifs.find(e=>e.key==="lotus4").name="\u56DB\u5C42\u516B\u74E3\u83B2\u82B1",i.motifs.find(e=>e.key==="lotus4").meaning="\u516B\u5411\u591A\u5C42\u83B2\u82B1\u627F\u6258\u83B2\u5FC3\u4E09\u5154\uFF0C\u7EC4\u7EC7\u4E95\u5FC3\u7684\u89C6\u89C9\u4E2D\u5FC3\u3002",i.motifs.find(e=>e.key==="rabbits").point=[.5,.505],i.motifs.find(e=>e.key==="lotus4").point=[.5,.36],i.motifs.find(e=>e.key==="petalRing").point=[.5,.35],i.motifs.find(e=>e.key==="ribbon").point=[.3,.36],i.motifs.find(e=>e.key==="diamondBand").point=[.5,.215]}i.colors=yu[i.id]||[],Mu(i);let t=i.colors.map(e=>e.hex);i.palettes=t.length?[{name:"\u56FE\u7248\u8272\u5F69",colors:[t[0],t[1],t[2],t[3]]},{name:"\u6D45\u5E95\u8F6C\u8BD1",colors:["#eee9d9",t[0],t[4],t[3]]},{name:"\u6DF1\u5E95\u8F6C\u8BD1",colors:[t[4],t[0],"#eee9d9",t[3]]}]:[]}var ge=i=>un.find(t=>t.id===String(i))||un[0],Dn=(i,t)=>ge(i).motifs.find(e=>e.key===t)||{key:t,name:"\u7559\u767D\u4E2D\u5FC3",location:"\u7531\u4F60\u4FDD\u7559\u7684\u7A7A\u767D",symbol:"\u7559\u767D\u81EA\u5982",meaning:"\u7559\u767D\u8BA9\u56FE\u6848\u4E4B\u95F4\u4FDD\u6709\u7A7A\u95F4\uFF0C\u5728\u9999\u6302\u4E2D\u5BC4\u6258\u4ECE\u5BB9\u4E0E\u81EA\u7531\u3002",wish:"\u613F\u7ED9\u81EA\u5DF1\u7559\u4E00\u65B9\u81EA\u5728\u3002",meaningKind:"\u5F53\u4EE3\u5BC4\u610F",extract:"\u8BA9\u5916\u56F4\u7EB9\u6837\u6210\u4E3A\u89C6\u89C9\u4E3B\u4F53\u3002",why:"\u51CF\u5C11\u56FE\u5F62\u5BC6\u5EA6\uFF0C\u4FDD\u7559\u6750\u8D28\u4E0E\u8272\u5F69\u3002",point:null,sources:[]};var we=(i,t)=>Array.from({length:i},(e,n)=>t(n)).join("");function Ru(i,t){let[e,n,s,r]=t,a=(o=9,l=74)=>`${we(o,c=>`<g transform="rotate(${c*360/o})"><path d="M0 -8 C-21 -29 -25 -53 0 -${l} C25 -53 21 -29 0 -8Z" fill="${n}" stroke="${s}" stroke-width="1.05"/><path d="M0 -14 Q-9 -39 0 -${l-10} Q10 -39 0 -14Z" fill="${r}" fill-opacity=".52" stroke="${s}" stroke-width=".6"/><path d="M0 -19 V-${l-17}" stroke="${e}" fill="none" stroke-width="1"/></g>`)}<circle r="15" fill="${r}" stroke="${s}" stroke-width="1.3"/><circle r="10" fill="${e}" stroke="${s}" stroke-width=".7"/>${we(7,c=>`<circle cx="${Math.cos(c*6.283/7)*6}" cy="${Math.sin(c*6.283/7)*6}" r="1.2" fill="${n}"/>`)}`;if(i==="rabbits"){let o=[-27,-36],l=[44.67691454,-5.3826859],c=we(3,h=>`<g data-shared-ear="true" data-head-pair="${h}-${(h+1)%3}" transform="rotate(${h*120})"><path d="M${o.join(" ")} C-6 -35 23 -20 ${l.join(" ")} C18 -14 -7 -27 ${o.join(" ")}Z" fill="${n}" stroke="${s}" stroke-width=".9" stroke-linejoin="round"/><path d="M-16 -31 Q8 -22 34 -10" fill="none" stroke="${r}" stroke-width=".6"/></g>`),d=we(3,h=>`<g data-hare="${h}" data-ears="${(h+2)%3},${h}" transform="rotate(${h*120})" fill="${n}" stroke="${s}" stroke-width="1" stroke-linecap="round" stroke-linejoin="round">
   <path d="M-10 -48 Q-16 -34 -29 -25 L-46 -16 Q-50 -15 -49 -18 L-33 -30 -21 -45Z"/>
   <path d="M-2 -50 Q-8 -35 -21 -26 L-39 -17 Q-43 -16 -42 -19 L-27 -30 -14 -46Z"/>
   <path d="M34 -67 Q49 -67 55 -65 Q61 -67 66 -72 Q69 -74 71 -71 L63 -63 Q52 -51 35 -53Z"/>
   <path d="M28 -66 Q48 -67 47 -54 Q44 -45 34 -43 L46 -36 Q51 -35 57 -41 L64 -46 Q68 -48 70 -46 Q65 -40 60 -35 Q52 -29 45 -31 L26 -43 Q19 -51 22 -60Z"/>
   <path d="M-37 -35 Q-39 -37 -35 -40 Q-36 -46 -31 -49 Q-25 -52 -21 -48 L-13 -53 C0 -65 17 -76 34 -75 C45 -74 50 -68 50 -62 L55 -65 Q58 -66 57 -62 L52 -58 C45 -49 26 -50 13 -52 Q0 -52 -13 -40 Q-17 -36 -21 -34 Q-25 -28 -31 -30 Q-34 -31 -37 -35Z"/>
   <path d="M-16 -45 Q-4 -55 9 -58 M34 -66 Q41 -62 37 -55" fill="none" stroke="${r}" stroke-width=".75"/>
   <path d="M-29.7 -41.5 L-28.3 -42" fill="none" stroke="${e}" stroke-width=".85"/>
   <path d="M-36.5 -35.6 L-37 -35" stroke="${e}" stroke-width=".8"/>
  </g>`);return`<circle r="86" fill="none" stroke="${s}" stroke-width=".75"/><circle r="82" fill="none" stroke="${r}" stroke-width=".45"/><g transform="scale(.82)">${c}${d}</g>`}return i==="lotus4"?we(4,o=>`<g transform="rotate(${o*11.25}) scale(${1-o*.18})">${a(8,80)}</g>`):i==="lotus9"?`<g>${a(9,81)}</g><g transform="rotate(20) scale(.63)">${a(9,80)}</g>`:i==="smallLotus"?we(12,o=>`<g transform="rotate(${o*30}) translate(0 -68) scale(.24)">${a(7,72)}</g>`)+`<g transform="scale(.37)">${a(9,75)}</g>`:i==="petalRing"?we(8,o=>`<g transform="rotate(${o*45}) translate(0 -101)"><path d="M0 13 Q-25 -7 0 -27 Q25 -7 0 13Z" fill="${n}" fill-opacity=".45" stroke="${s}" stroke-width=".8"/><path d="M0 4 V-15" stroke="${r}" stroke-width=".7"/></g>`):i==="diamondBand"?we(4,o=>`<g transform="rotate(${o*90}) translate(0 -107)"><path d="M-86 0 H86" fill="none" stroke="${s}" stroke-width=".7"/>${we(9,l=>`<g transform="translate(${l*19-76} 0)"><path d="M0 -9 L9 0 0 9 -9 0Z" fill="${n}" fill-opacity=".3" stroke="${s}" stroke-width=".7"/><circle r="2" fill="${r}"/></g>`)}</g>`):i==="honeysuckle"?we(4,o=>`<g transform="rotate(${o*90}) translate(0 -109)">${we(6,l=>`<g transform="translate(${l*25-62.5} 0) scale(.8)"><path d="M-13 8 Q-3 7 0 -5 Q2 -22 -6 -22 Q-13 -21 -8 -12 Q-23 -27 -25 -13 Q-25 -4 -10 -1 Q-23 -7 -25 3 Q-22 14 -13 8 M0 -5 Q4 -23 12 -19 Q18 -14 7 -5 Q24 -14 25 -3 Q24 9 7 5 Q15 14 4 18 Q-3 13 0 -5Z" fill="${n}" stroke="${s}" stroke-width=".9"/><path d="M-15 12 Q0 7 15 12" stroke="${r}" fill="none" stroke-width="1"/></g>`)}</g>`):i==="lotusVine"?we(4,o=>`<g transform="rotate(${o*90}) translate(0 -98)"><path d="M-86 2 C-64 -26 -24 26 0 0 S57 -26 85 2" fill="none" stroke="${s}" stroke-width="1.3"/>${[-58,0,58].map((l,c)=>`<g transform="translate(${l} ${c===1?-2:1}) scale(.22)">${a(7,66)}</g><path d="M${l+6} 7 Q${l+25} 19 ${l+23} 0 Q${l+11} -3 ${l+6} 7Z" fill="${r}" fill-opacity=".7" stroke="${s}" stroke-width=".7"/>`).join("")}</g>`):i==="pearlLotus"?`<circle r="112" fill="none" stroke="${s}" stroke-width=".7"/><circle r="119" fill="none" stroke="${s}" stroke-width=".7"/>${we(60,o=>`<circle cx="${Math.cos(o*6.283/60)*115.5}" cy="${Math.sin(o*6.283/60)*115.5}" r="1.45" fill="${r}"/>`)}${we(12,o=>`<g transform="rotate(${o*30}) translate(0 -100) scale(.16)">${a(7,70)}</g>`)}`:i==="drapery"?we(4,o=>`<g transform="rotate(${o*90}) translate(0 -103)"><path d="M-87 -12 H87 M-87 -8 H87" stroke="${s}" fill="none" stroke-width=".8"/>${we(10,l=>`<g transform="translate(${l*17-76.5} 0)"><path d="M-9 -7 Q-6 4 0 19 Q6 4 9 -7Z" fill="${n}" fill-opacity=".35" stroke="${s}" stroke-width=".8"/><path d="M-5 -4 L0 10 5 -4" fill="none" stroke="${r}" stroke-width=".8"/><circle cy="20" r="1.6" fill="${r}"/></g>`)}</g>`):i==="cornerLotus"?we(4,o=>`<g transform="rotate(${o*90}) translate(-91 -91) rotate(135) scale(.38)">${a(9,75)}<path d="M0 3 Q-18 28 0 52 Q19 29 0 3Z" fill="${r}" stroke="${s}"/></g>`):""}var Iu={label:"\u300A\u6566\u714C\u9999\u836F\u65B9\u4E0E\u5510\u4EE3\u9999\u6587\u5316\u300B \xB7 S.4329 \u718F\u8863\u65B9",url:"https://nhuwebfile.nhu.edu.tw/UploadedFiles/2023/3/0bb08e93-5c87-4d23-8e66-6c24981f2230.pdf"},Pu=[{id:"sanhui",cave:"407",name:"\u4E09\u56DE",family:"\u6696\u6728 \xB7 \u6811\u8102",color:"#c58164",notes:[["\u6C89\u9999\u8C03","\u4E3B\u8C03","\u8F83\u6DF1\u7684\u6696\u6728\u6C14\u606F\uFF0C\u7ED9\u9999\u6C14\u4E00\u4E2A\u6C89\u7A33\u7684\u5E95\u3002"],["\u4E73\u9999\u8C03","\u8F85\u8C03","\u6E05\u4EAE\u7684\u6811\u8102\u6C14\u606F\uFF0C\u63D0\u8D77\u6728\u9999\uFF0C\u8BA9\u6574\u4F53\u4E0D\u663E\u539A\u91CD\u3002"]],impression:"\u9760\u8FD1\u65F6\u5148\u95FB\u5230\u6E05\u4EAE\u7684\u6811\u8102\u6C14\u606F\uFF0C\u518D\u6162\u6162\u611F\u5230\u6E29\u6696\u7684\u6728\u9999\u3002",connection:"\u4E09\u53EA\u5154\u5B50\u5171\u7528\u4E09\u8033\uFF0C\u56F4\u7740\u83B2\u5FC3\u5FAA\u73AF\u8FFD\u9010\uFF0C\u5916\u5708\u8FD8\u6709\u6367\u9999\u7089\u7684\u98DE\u5929\u3002\u540D\u5B57\u53D6\u81EA\u753B\u9762\u7684\u56DE\u65CB\uFF1B\u6C89\u9999\u4E0E\u4E73\u9999\u7684\u642D\u914D\u53C2\u8003\u4E86\u5510\u4EE3\u6CD5\u95E8\u5BFA\u51FA\u571F\u7684\u5408\u9999\u5B9E\u7269\u3002",wish:"\u5F7C\u6B64\u76F8\u4F34\uFF0C\u751F\u606F\u76F8\u7EED\u3002",sources:[{label:"\u6566\u714C\u7814\u7A76\u9662 \xB7 \u7B2C407\u7A9F\u4E09\u5154\u83B2\u82B1\u7EB9\u85FB\u4E95",url:"https://www.dha.ac.cn/info/1425/3569.htm"},{label:"\u6CD5\u95E8\u5BFA\u5510\u4EE3\u4F9B\u9999\u6210\u5206\u7814\u7A76 \xB7 PNAS",url:"https://pmc.ncbi.nlm.nih.gov/articles/PMC9173757/"}]},{id:"qingluo",cave:"390",name:"\u9752\u7EDC",family:"\u9752\u53F6 \xB7 \u6839\u830E",color:"#a5ba91",notes:[["\u9752\u83B2\u53F6\u8C03","\u4E3B\u8C03","\u6E05\u7EFF\u7684\u53F6\u9999\uFF0C\u8BA9\u4EBA\u60F3\u5230\u521A\u6298\u5F00\u7684\u4E00\u6BB5\u82B1\u830E\u3002"],["\u7518\u677E\u8C03","\u8F85\u8C03","\u4E00\u70B9\u5E72\u71E5\u7684\u6839\u830E\u6C14\u606F\uFF0C\u8BA9\u9752\u53F6\u9999\u6709\u4E86\u6E29\u548C\u7684\u5E95\u3002"]],impression:"\u5148\u662F\u6E05\u7EFF\u7684\u53F6\u9999\uFF0C\u8D34\u8FD1\u95FB\uFF0C\u8FD8\u6709\u4E00\u70B9\u5E72\u71E5\u7684\u8349\u6728\u6839\u830E\u6C14\u606F\u3002",connection:"\u7B2C390\u7A9F\u7684\u76D8\u830E\u628A\u5341\u4E8C\u6735\u5C0F\u83B2\u8FDE\u5728\u4E00\u8D77\uFF0C\u300C\u7EDC\u300D\u53D6\u81EA\u679D\u830E\u76F8\u8FDE\u7684\u6784\u56FE\u3002\u83B2\u53F6\u8C03\u662F\u5BF9\u690D\u7269\u7EB9\u6837\u7684\u60F3\u8C61\uFF0C\u7518\u677E\u5219\u53D6\u610F\u4E8E\u6566\u714C\u5199\u5377\u4E2D\u7684\u718F\u8863\u65B9\u3002",wish:"\u5F7C\u6B64\u76F8\u8FDE\uFF0C\u5404\u81EA\u751F\u957F\u3002",sources:[{label:"\u6E05\u534E\u5927\u5B66\u7F8E\u672F\u56FE\u4E66\u9986 \xB7 \u7B2C390\u7A9F\u85FB\u4E95\u56FE\u7248",url:"https://lib.tsinghua.edu.cn/arts/info/1034/2020.htm"},Iu]},{id:"yunlian",cave:"329",name:"\u4E91\u83B2",family:"\u6DE1\u82B1 \xB7 \u67D4\u6728",color:"#b8c9d2",notes:[["\u6DE1\u83B2\u82B1\u8C03","\u4E3B\u8C03","\u8F7B\u6DE1\u7684\u82B1\u9999\uFF0C\u547C\u5E94\u6DE1\u84DD\u4E95\u5FC3\u4E0E\u73AF\u83B2\u800C\u98DE\u7684\u8863\u5E26\u3002"],["\u767D\u6A80\u8C03","\u8F85\u8C03","\u67D4\u548C\u5FAE\u6696\u7684\u6728\u9999\uFF0C\u5728\u8F7B\u82B1\u9999\u4E4B\u540E\u7559\u4E00\u70B9\u6696\u610F\u3002"]],impression:"\u83B2\u82B1\u6C14\u606F\u8F7B\u8F7B\u5E26\u8FC7\uFF0C\u968F\u540E\u7559\u4E0B\u4E00\u70B9\u67D4\u548C\u3001\u5FAE\u6696\u7684\u6A80\u6728\u6C14\u606F\u3002",connection:"\u7B2C329\u7A9F\u7684\u83B2\u74E3\u4E0E\u5377\u4E91\u4EA4\u9519\uFF0C\u56DB\u8EAB\u98DE\u5929\u73AF\u83B2\u800C\u884C\u3002\u6DE1\u82B1\u9999\u547C\u5E94\u5F00\u9614\u7684\u5929\u7A7A\u610F\u8C61\uFF0C\u767D\u6A80\u53D6\u610F\u4E8E\u6566\u714C\u718F\u8863\u65B9\uFF0C\u8BA9\u8FD9\u6B3E\u9999\u5728\u8F7B\u76C8\u4E4B\u5916\u7559\u4E00\u70B9\u6696\u610F\u3002",wish:"\u5FC3\u5883\u6F84\u660E\uFF0C\u81EA\u5728\u8212\u5C55\u3002",sources:[{label:"\u6566\u714C\u7814\u7A76\u9662 \xB7 \u7B2C329\u7A9F\u83B2\u82B1\u98DE\u5929\u85FB\u4E95",url:"https://www.dha.ac.cn/info/1425/3577.htm"},Iu]}],ms=i=>Pu.find(t=>t.cave===String(i))||Pu[2];var Lu=[["motif","01 \u7EB9\u6837\u53E0\u52A0"],["color","02 \u81EA\u7531\u914D\u8272"],["parts","03 \u7EC4\u4EF6\u7EC4\u5408"],["scent","04 \u5BF9\u5E94\u9999\u578B"]];var f_=[["\u9752\u9EDB\u7C73\u91D1",["#365f59","#a8bca3","#dac9a0","#c29d72"]],["\u6731\u7802\u6708\u767D",["#85473e","#eee9d9","#d5b66c","#d3a696"]],["\u975B\u9752\u674F\u9EC4",["#344b68","#d5b66c","#eee9d9","#829c82"]],["\u96FE\u7D2B\u85D5\u7C89",["#615d76","#d3a696","#eee9d9","#b9b5c6"]],["\u6708\u767D\u77F3\u7EFF",["#eee9d9","#365f59","#ad7955","#829c82"]],["\u8D6D\u77F3\u5B54\u96C0",["#885f48","#6fabb0","#dac9a0","#d5b66c"]]],mo=(i="329")=>{let t=ge(i);return{caveId:t.id,center:t.defaultCenter,overlays:[...t.defaultOverlays],colors:[...t.palettes?.[0]?.colors||f_[0][1]],shape:"octagon",material:"linen",cord:"loop",tassel:!0,size:82,rotation:0,overlayOpacity:75}},p_={lotus:"\u5341\u56DB\u5377\u74E3",wheel:"\u83B2\u84EC\u8272\u8F6E",rosette:"\u590D\u5408\u56E2\u82B1",none:"\u7559\u767D\u4E2D\u5FC3",cloud:"\u56DE\u65CB\u5377\u4E91",ribbon:"\u98DE\u5929\u8863\u5E26",corner:"\u56DB\u9685\u89D2\u82B1",beads:"\u8054\u73E0\u8FB9\u9970",vine:"\u5FCD\u51AC\u5377\u8349"};function Be(i,t){return Array.from({length:i},(e,n)=>t(n)).join("")}function Qn(i,t){let[e,n,s,r]=t,a=o=>`<circle r="${o}" fill="none" stroke="${s}" stroke-width=".8"/>`;return i==="lotus"?`${Be(14,o=>`<g transform="rotate(${o*360/14})"><path d="M0 -9 C-19 -22 -25 -47 -13 -65 Q-7 -77 0 -81 Q8 -72 14 -64 C26 -46 18 -23 0 -9Z" fill="${n}" stroke="${s}" stroke-width=".9"/><path d="M0 -17 C-10 -34 -14 -55 0 -71 C13 -54 10 -34 0 -17Z" fill="${r}" fill-opacity=".42" stroke="${s}" stroke-width=".6"/><path d="M0 -23 Q-9 -43 0 -63 M0 -23 Q9 -43 0 -63" fill="none" stroke="${e}" stroke-width=".8"/><path d="M-11 -61 Q-5 -51 0 -53 Q6 -55 5 -62 Q3 -68 -2 -63" fill="none" stroke="${s}" stroke-width="1.2"/></g>`)}<circle r="19" fill="${r}" stroke="${s}" stroke-width="1.3"/>${a(13)}<g fill="${e}"><circle r="2"/>${Be(7,o=>`<circle cx="${Math.cos(o*6.283/7)*9}" cy="${Math.sin(o*6.283/7)*9}" r="1.7"/>`)}</g>`:i==="wheel"?`${Be(14,o=>`<g transform="rotate(${o*360/14})"><path d="M0 0 Q-50 -25 -28 -69 Q-4 -87 20 -69 Q-14 -55 0 0Z" fill="${o%2?n:r}" stroke="${s}" stroke-width="1"/><path d="M-22 -67 Q-22 -36 0 -12" fill="none" stroke="${e}" stroke-width="1"/><path d="M-18 -70 Q-2 -76 12 -69" stroke="${s}" fill="none"/></g>`)}<circle r="23" fill="${e}" stroke="${s}"/>${a(18)}${Be(12,o=>`<circle cx="${Math.cos(o*6.283/12)*12}" cy="${Math.sin(o*6.283/12)*12}" r="2" fill="${r}"/>`)}<circle r="5" fill="${n}"/>`:i==="rosette"?Be(2,o=>`<g transform="rotate(${o*15}) scale(${o?.64:1})">${Be(12,l=>`<g transform="rotate(${l*30})"><path d="M0 -10 C-27 -34 -19 -59 0 -79 C20 -59 26 -34 0 -10Z" fill="${o?r:n}" stroke="${s}" stroke-width="1"/><path d="M0 -18 L0 -65 M-10 -52 L0 -42 10 -52" fill="none" stroke="${e}" stroke-width="1"/></g>`)}</g>`)+`<circle r="12" fill="${e}" stroke="${s}"/>${a(7)}`:i==="cloud"?Be(4,o=>`<g transform="rotate(${o*90}) translate(0 -99) scale(.68)"><path d="M-49 7 C-24 13 -32 -11 -12 -8 C-16 -30 16 -32 18 -14 C36 -27 58 -4 38 8 C21 19 9 -1 -5 8 C-24 24 -44 19 -53 10" fill="${n}" fill-opacity=".36" stroke="${s}" stroke-width="1.7"/><path d="M-33 8 Q-15 14 -13 2 C-11 -7 -1 -6 1 1 C8 12 24 -4 33 3 M-5 -11 Q5 -25 14 -12" fill="none" stroke="${r}" stroke-width="1.5"/></g>`):i==="ribbon"?Be(4,o=>`<g transform="rotate(${o*90+16})"><path d="M-102 -23 C-132 -88 -51 -123 -24 -92 C-5 -71 -35 -62 -45 -79 C-55 -99 -4 -118 32 -102 Q52 -94 74 -105 C48 -78 10 -86 -9 -74 C-38 -50 -61 -64 -58 -82 C-53 -106 -104 -100 -104 -64 Q-108 -44 -102 -23Z" fill="${n}" fill-opacity=".5" stroke="${s}" stroke-width="1.1"/><path d="M-104 -33 C-121 -93 -65 -115 -38 -91 S-46 -64 -48 -81 S1 -109 53 -99" fill="none" stroke="${r}" stroke-width="1.3"/></g>`):i==="corner"?Be(4,o=>`<g transform="rotate(${o*90}) translate(-101 -101) rotate(135) scale(.44)">${Be(7,l=>`<g transform="rotate(${l*15-45})"><path d="M0 0 Q-17 -38 0 -69 Q18 -36 0 0Z" fill="${l%2?r:n}" stroke="${s}" stroke-width="1.7"/><path d="M0 -10 V-55" stroke="${e}" stroke-width="1"/></g>`)}<circle r="9" fill="${s}"/></g>`):i==="beads"?`${a(116)}${a(110)}${Be(84,o=>`<circle cx="${Math.cos(o*6.283/84)*113}" cy="${Math.sin(o*6.283/84)*113}" r="1.3" fill="${r}"/>`)}`:i==="vine"?Be(4,o=>`<g transform="rotate(${o*90}) translate(0 -106)"><path d="M-70 0 Q-35 -18 0 0 T70 0" fill="none" stroke="${s}" stroke-width="1.1"/>${Be(7,l=>`<g transform="translate(${l*20-60} 0) rotate(${l%2?180:0})"><path d="M0 0 Q-15 -26 -19 -13 Q-19 -4 0 0 Q9 -25 15 -18 Q24 -9 0 0" fill="${n}" stroke="${s}" stroke-width=".7"/></g>`)}</g>`):Ru(i,t)}var Du={octagon:"M-58 -126 H58 L126 -58 V58 L58 126 H-58 L-126 58 V-58Z",square:"M-97 -124 H97 Q124 -124 124 -97 V97 Q124 124 97 124 H-97 Q-124 124 -124 97 V-97 Q-124 -124 -97 -124Z",round:"M0 -126 A126 126 0 1 1 -.01 -126Z",diamond:"M0 -136 Q7 -136 12 -130 L130 -12 Q142 0 130 12 L12 130 Q0 142 -12 130 L-130 12 Q-142 0 -130 -12 L-12 -130 Q-7 -136 0 -136Z"},m_=0;function go(i,t=!0){let[e,n,s,r]=i.colors,a=Du[i.shape],o=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 420 570"><metadata>${Kt(JSON.stringify(g_(i)))}</metadata><defs><linearGradient id="face" x2="1" y2="1"><stop stop-color="${e}"/><stop offset="1" stop-color="${e}" stop-opacity=".88"/></linearGradient><linearGradient id="shine"><stop stop-color="#fff" stop-opacity=".16"/><stop offset=".45" stop-color="#fff" stop-opacity="0"/><stop offset="1" stop-color="#000" stop-opacity=".17"/></linearGradient><pattern id="weave" width="3" height="3" patternUnits="userSpaceOnUse"><path d="M0 .6 H3 M.6 0 V3" stroke="${s}" stroke-opacity=".13" stroke-width=".45"/></pattern><clipPath id="outline"><path d="${a}"/></clipPath></defs>${t?`<g fill="none" stroke="${s}" stroke-linecap="round"><path d="M201 176 C186 109 176 31 211 24 C247 28 231 123 218 176" stroke="#132e29" stroke-width="7"/><path d="M201 176 C186 109 176 31 211 24 C247 28 231 123 218 176" stroke-width="4"/>${i.cord==="double"?'<path d="M194 176 C173 107 166 25 210 17 C254 24 245 118 225 176" stroke-width="2.5"/>':""}</g>${i.cord==="bead"?`<g fill="${r}" stroke="${s}"><circle cx="210" cy="126" r="11"/><circle cx="210" cy="145" r="6"/></g>`:""}`:""}<g transform="translate(210 310)"><path d="${a}" transform="translate(0 5)" fill="#152e29" stroke="${r}" stroke-width="3"/><path d="${a}" fill="url(#face)" stroke="${s}" stroke-width="1.5"/><g clip-path="url(#outline)">${i.material==="linen"?`<path d="${a}" fill="url(#weave)"/>`:i.material==="paper"?`<path d="${a}" fill="${s}" fill-opacity=".06"/>`:""}<g opacity="${i.overlayOpacity/100}">${i.overlays.map(c=>Qn(c,i.colors)).join("")}</g><g transform="rotate(${i.rotation}) scale(${i.size/100})">${Qn(i.center,i.colors)}</g><path d="${a}" fill="url(#shine)" opacity="${i.material==="ceramic"?.8:.22}"/></g><path d="${a}" transform="scale(.955)" fill="none" stroke="${s}" stroke-width=".65" stroke-dasharray="${i.material==="linen"?"1.2 2":"0"}" opacity=".75"/><circle cy="-116" r="4.5" fill="#1c342e" stroke="${s}" stroke-width="1.4"/><text y="103" text-anchor="middle" font-family="Georgia,serif" font-size="5" letter-spacing="3" fill="${s}">Y I Y U \xB7 ${(i.caveId||"329").split("").join(" ")}</text></g>${t&&i.tassel?`<g transform="translate(210 440)"><path d="M0 -5 V24" stroke="${s}" stroke-width="3"/><circle cy="26" r="5" fill="${r}" stroke="${s}"/>${Be(19,c=>`<path d="M${(c-9)*.6} 30 Q${(c-9)*1.2} 52 ${(c-9)*1.2} ${83-Math.abs(c-9)*.5}" fill="none" stroke="${c%3?n:s}" stroke-width="1.1"/>`)}<path d="M-7 35 H7 M-7 38 H7" stroke="${r}" stroke-width="2"/></g>`:""}</svg>`,l="s"+ ++m_;return o.replace(/id="(face|shine|weave|outline)"/g,(c,d)=>`id="${d}-${l}"`).replace(/url\(#(face|shine|weave|outline)\)/g,(c,d)=>`url(#${d}-${l})`)}var Kt=i=>String(i).replace(/[&<>"']/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&apos;"})[t]),tc=["\u5E95\u8272","\u4E3B\u7EB9","\u63CF\u7EBF / \u6302\u7EF3","\u70B9\u7F00"],gs=(i,t)=>Dn(i,t)?.name||p_[t]||t;function ec(i,t){return ge(i).colors.find(e=>e.hex.toLowerCase()===t.toLowerCase())||{name:"\u81EA\u9009\u8272",hex:t,region:"\u7531\u4F60\u81EA\u4E3B\u9009\u62E9",symbol:"\u968F\u5FC3\u8868\u8FBE",meaning:"\u8FD9\u4E00\u8272\u627F\u8F7D\u4F60\u7684\u4E2A\u4EBA\u9009\u62E9\uFF0C\u53EF\u4EE5\u8868\u8FBE\u559C\u6B22\u7684\u60C5\u7EEA\u4E0E\u5FC3\u613F\u3002",wish:"\u613F\u8FD9\u4E00\u8272\uFF0C\u8868\u8FBE\u6B64\u523B\u7684\u4F60\u3002",meaningBasis:"\u4E2A\u4EBA\u914D\u8272",method:"\u81EA\u5B9A\u4E49\u8272\u503C\uFF0C\u4E0D\u5C5E\u4E8E\u672C\u7A9F\u56FE\u50CF\u91C7\u6837\u3002"}}function g_(i){let t=ms(i.caveId);return{title:"\u4E00\u9685 \xB7 \u85FB\u4E95\u9999\u6302\u8BBE\u8BA1\u7A3F",caveId:i.caveId||"329",source:ge(i.caveId||"329").title,motifs:[i.center,...i.overlays].filter(e=>e!=="none").map(e=>{let n=Dn(i.caveId||"329",e);return{key:e,name:gs(i.caveId||"329",e),symbol:n?.symbol||"",meaning:n?.meaning||"",wish:n?.wish||"",meaningKind:n?.meaningKind||"\u5F53\u4EE3\u5BC4\u610F",extraction:n?.extract||""}}),colors:i.colors.map(e=>{let n=ec(i.caveId||"329",e);return{name:n.name,hex:e,sourceArea:n.region,symbol:n.symbol,meaning:n.meaning,wish:n.wish,meaningBasis:n.meaningBasis,method:n.method}}),scent:{id:t.id,name:t.name,inspirationCave:t.cave,notes:t.notes.map(([e,n])=>({name:e,role:n})),wish:t.wish,notice:"\u5F53\u4EE3\u9999\u578B\u63D0\u6848\uFF0C\u5F85\u6253\u6837\uFF1B\u975E\u5386\u53F2\u914D\u65B9\u3002"},notice:"\u7EB9\u6837\u4E3A\u51E0\u4F55\u8F6C\u8BD1\uFF0C\u8272\u540D\u4E0E\u8272\u5F69\u8054\u60F3\u4E3A\u8BBE\u8BA1\u547D\u540D\uFF0C\u975E\u6587\u7269\u539F\u59CB\u989C\u6599\u68C0\u6D4B\u3002"}}function Uu({caveId:i="329",onCaveChange:t=()=>{},onLearn:e=()=>{}}={}){let n=T=>document.querySelector(T),s=mo(i),r="motif",a=0,o=!1,l=!1,c=[],d=s.center,h=new Map;try{let T=JSON.parse(localStorage.getItem("yiyu-designs-v2")||localStorage.getItem("yiyu-designs-v1")||"[]");c=Array.isArray(T)?T.slice(0,4).map(C=>({...mo(C.caveId||"329"),...C,caveId:C.caveId||"329"})):[]}catch{}let f=n("#productAssembly");n("#wear .section-head h2").innerHTML="\u8FD9\u4E00\u679A\u9999\u6302\uFF0C<br>\u6709\u4F60\u7684\u9009\u62E9\uFF0C\u4E5F\u6709\u5B83\u7684\u6765\u5904\u3002",n("#wear .section-desc").innerHTML="\u9009\u7EB9\u6837\u3001\u914D\u989C\u8272\uFF0C\u4E86\u89E3\u8FD9\u4E00\u7A9F\u5BF9\u5E94\u7684\u9999\u3002",n(".product-panel").innerHTML=`<p class="panel-kicker">YOUR PATTERN / YOUR EVERYDAY</p><div class="studio-title"><h3>\u4E00\u9685 \xB7 \u9999\u6302\u8BBE\u8BA1\u53F0</h3><span>LIVE STUDIO</span></div><div class="studio-cave-switch"><label for="studioCave">\u7EB9\u6837\u6765\u6E90</label><select id="studioCave" aria-label="\u9009\u62E9\u9999\u6302\u6765\u6E90\u85FB\u4E95">${un.map(T=>`<option value="${T.id}">\u7B2C${T.id}\u7A9F \xB7 ${Kt(T.title)}</option>`).join("")}</select></div><div class="studio-tabs" role="tablist" aria-label="\u9999\u6302\u8BBE\u8BA1\u6B65\u9AA4">${Lu.map(([T,C])=>`<button role="tab" id="tab-${T}" data-studio-tab="${T}" aria-controls="studioControls">${C}</button>`).join("")}</div><button type="button" class="studio-scent-shortcut" id="openScent" aria-controls="studioControls"></button><div id="studioControls" role="tabpanel"></div><div class="composition-story" id="compositionStory" aria-live="polite"></div><div class="studio-footer"><button class="outline-btn" id="randomDesign">\u7075\u611F\u7EC4\u5408 \u21BB</button><button class="outline-btn" id="saveDesign">\u6536\u85CF\u8FD9\u4E00\u6B3E \uFF0B</button><button class="text-link" id="resetDesign">\u91CD\u7F6E</button></div><div class="studio-export"><button class="primary" id="downloadPattern">\u4E0B\u8F7D\u77E2\u91CF SVG \u2193</button><button class="outline-btn" id="downloadPNG">\u9AD8\u6E05 PNG \u2193</button></div><div id="savedDesigns"></div><p class="small-note">\u7EB9\u6837\u4E3A\u4F9D\u636E\u85FB\u4E95\u5143\u7D20\u7684\u51E0\u4F55\u8F6C\u8BD1\u3002\u5143\u7D20\u5BD3\u610F\u6CE8\u660E\u6587\u5316\u4F9D\u636E\uFF0C\u8272\u5F69\u5BC4\u610F\u7ED3\u5408\u53D6\u8272\u90E8\u4F4D\u4E0E\u5F53\u4EE3\u795D\u613F\u3002\u6750\u8D28\u4E3A\u6548\u679C\u6A21\u62DF\uFF0C\u5B9E\u4F53\u9700\u53E6\u884C\u6253\u6837\u3002</p>`,n(".product-stage").insertAdjacentHTML("beforeend",'<div class="preview-tools"><button id="productExplode">\u7ED3\u6784\u62C6\u89E3 \uFF0B</button><button id="scentToggle">\u67E5\u770B\u9999\u82AF \u2197</button><button id="flatPreview">\u6B63\u89C6\u56FE \u2197</button></div><div class="design-recipe" id="designRecipe"></div>'),n(".product-caption").textContent="\u6982\u5FF5\u5C3A\u5BF8\u7EA6 70 \xD7 70 mm \xB7 \u53EF\u66FF\u6362\u9999\u82AF \xB7 \u6750\u6599\u5F85\u6253\u6837",n(".product-side-label").textContent="YOUR COMPOSITION / \u5B9E\u65F6\u8BBE\u8BA1\u9884\u89C8";function p(){return ge(s.caveId)}function _(T){return`<svg viewBox="-140 -140 280 280" aria-hidden="true">${Qn(T,s.colors)}</svg>`}function S(T=document){T.querySelectorAll("[data-learn-motif]").forEach(C=>C.onclick=()=>e(C.dataset.learnMotif))}function m(){let T=[s.center,...s.overlays].filter(C=>C!=="none").map(C=>Dn(s.caveId,C)).filter(Boolean);n("#compositionStory").innerHTML=`<p class="story-heading">\u8FD9\u679A\u9999\u6302\u7684\u5BD3\u610F <span>\u7B2C${s.caveId}\u7A9F</span></p>${T.length?T.map(C=>`<button class="story-motif" data-learn-motif="${C.key}"><span>${Kt(C.name)}<em>${Kt(C.symbol)}</em></span><small>${Kt(C.wish)}<i>${Kt(C.meaningKind)}</i></small><b>\u2197</b></button>`).join(""):'<p class="story-empty">\u5F53\u524D\u7559\u767D\u3002\u9009\u4E00\u4E2A\u7EB9\u6837\uFF0C\u8BA9\u6545\u4E8B\u4ECE\u8FD9\u91CC\u5F00\u59CB\u3002</p>'}<div class="chosen-color-meaning">${s.colors.map((C,U)=>{let N=ec(s.caveId,C);return`<p><i style="background:${C}"></i><span>${["\u5E95\u8272","\u4E3B\u7EB9","\u63CF\u7EBF","\u70B9\u7F00"][U]} \xB7 ${Kt(N.name)}</span><small><b>${Kt(N.symbol)}</b>${Kt(N.wish)}</small></p>`}).join("")}</div>`,S(n("#compositionStory"))}function u(){let T=ms(s.caveId);n("#openScent").hidden=r==="scent",n("#openScent").innerHTML=`<span>\u5F53\u524D\u9999\u578B \xB7 <b>${T.name}</b></span><span>\u67E5\u770B\u9999\u578B\u89E3\u8BFB \u2192</span>`,n(".piece-scent>span").textContent=`\u53EF\u66FF\u6362\u9999\u82AF \xB7 ${T.name}`,n(".product-caption").textContent=`\u9999\u82AF \xB7 ${T.name} / ${T.family}\u3000\uFF5C\u3000\u7EA6 70 \xD7 70 mm \xB7 \u5F85\u6253\u6837`,n("#tagObject").innerHTML=go(s),n(".hanging-cord").style.display="none",n(".piece-back").style.background=s.colors[0],n(".piece-back").style.borderColor=s.colors[2],n("#studioCave").value=s.caveId,n("#designRecipe").innerHTML=`<strong>${Kt(gs(s.caveId,s.center))}</strong><span>\u7B2C${s.caveId}\u7A9F \xB7 ${s.overlays.map(C=>Kt(gs(s.caveId,C))).join(" / ")||"\u7EAF\u51C0\u7559\u767D"}</span><div>${s.colors.map(C=>`<i style="background:${C}"></i>`).join("")}</div>`,f.classList.toggle("exploded",o),f.classList.toggle("core-open",l),n("#productExplode").textContent=o?"\u5408\u62E2\u9999\u6302 \u2212":"\u7ED3\u6784\u62C6\u89E3 \uFF0B",n("#scentToggle").textContent=l?"\u6536\u56DE\u9999\u82AF \u2199":"\u67E5\u770B\u9999\u82AF \u2197",m(),h.set(s.caveId,structuredClone(s))}function E(){let T=Dn(s.caveId,d);return T?`<div class="motif-context"><div><strong>${Kt(T.name)}</strong><span>${Kt(T.location)}</span></div><div class="focus-symbol"><b>${Kt(T.symbol)}</b><small>${Kt(T.meaningKind)}</small></div><p><small>\u5BD3\u610F\u89E3\u8BFB</small>${Kt(T.meaning)}</p><p class="focus-wish">${Kt(T.wish)}</p><p><small>\u63D0\u53D6\u65B9\u5F0F</small>${Kt(T.extract)}</p><button class="text-link" data-learn-motif="${T.key}">\u4E86\u89E3\u6765\u6E90\u4E0E\u63D0\u53D6 \u2197</button></div>`:""}function y(){let T=ec(s.caveId,s.colors[a]);return`<p class="studio-color-current">\u5F53\u524D\u8C03\u6574\uFF1A<strong>${tc[a]}</strong> <span>\xB7 ${Kt(T.name)}</span></p><div class="color-context"><i style="background:${T.hex}"></i><div><strong>${Kt(T.name)} <small>${T.hex.toUpperCase()}</small></strong><p>\u53D6\u8272\u4F4D\u7F6E\uFF1A${Kt(T.region)}</p><p class="focus-color-symbol">\u5BD3\u610F \xB7 ${Kt(T.symbol)}</p><p>${Kt(T.meaning)}</p><p class="focus-wish">${Kt(T.wish)}</p><small class="color-meaning-basis">${Kt(T.meaningBasis||"\u5F53\u4EE3\u5BC4\u610F")}</small><p class="color-method">${Kt(T.method)}</p></div></div>`}function g(){if(n("#openScent").hidden=r==="scent",document.querySelectorAll("[data-studio-tab]").forEach(T=>{let C=T.dataset.studioTab===r;T.setAttribute("aria-selected",C),T.tabIndex=C?0:-1}),n("#studioControls").setAttribute("aria-labelledby",`tab-${r}`),r==="motif"&&(n("#studioControls").innerHTML=`<div class="control-heading"><span>\u4E3B\u4F53\u7EB9\u6837</span><small>\u6765\u81EA\u7B2C${s.caveId}\u7A9F / \u5355\u9009</small></div><div class="motif-options">${p().centerKeys.map(T=>`<button data-center="${T}" aria-pressed="${s.center===T}" class="motif-option ${s.center===T?"active":""}">${T==="none"?'<span class="empty-motif">\u25CB</span>':_(T)}<span class="motif-name">${Kt(gs(s.caveId,T))}</span><small class="option-meaning">${Kt(Dn(s.caveId,T).symbol)}</small></button>`).join("")}</div><div class="control-heading"><span>\u53E0\u52A0\u7EB9\u6837</span><small>\u53EF\u591A\u9009 / \u540C\u65F6\u9009\u62E9\u7EB9\u6837\u5BD3\u610F</small></div><div class="overlay-options">${p().overlayKeys.map(T=>`<button data-overlay="${T}" aria-pressed="${s.overlays.includes(T)}" class="overlay-option ${s.overlays.includes(T)?"active":""}">${_(T)}<span class="overlay-caption"><strong>${Kt(gs(s.caveId,T))}</strong><small>${Kt(Dn(s.caveId,T).symbol)}</small></span><b>${s.overlays.includes(T)?"\u2713":"\uFF0B"}</b></button>`).join("")}</div>${E()}<div class="studio-sliders"><label>\u4E3B\u4F53\u5927\u5C0F <output id="sizeVal">${s.size}%</output><input type="range" id="motifSize" min="45" max="112" value="${s.size}"></label><label>\u4E3B\u4F53\u65CB\u8F6C <output id="rotationVal">${s.rotation}\xB0</output><input type="range" id="motifRotation" min="0" max="360" value="${s.rotation}"></label><label>\u53E0\u52A0\u6D53\u5EA6 <output id="opacityVal">${s.overlayOpacity}%</output><input type="range" id="overlayOpacity" min="15" max="100" value="${s.overlayOpacity}"></label></div>`,document.querySelectorAll("[data-center]").forEach(T=>T.onclick=()=>{s.center=T.dataset.center,d=s.center,u(),g()}),document.querySelectorAll("[data-overlay]").forEach(T=>T.onclick=()=>{let C=T.dataset.overlay;s.overlays=s.overlays.includes(C)?s.overlays.filter(U=>U!==C):[...s.overlays,C],d=C,u(),g()}),S(n("#studioControls")),[["motifSize","size","sizeVal","%"],["motifRotation","rotation","rotationVal","\xB0"],["overlayOpacity","overlayOpacity","opacityVal","%"]].forEach(([T,C,U,N])=>n("#"+T).oninput=O=>{s[C]=+O.target.value,n("#"+U).textContent=O.target.value+N,u()})),r==="color"){let T=p().colors,C=p().palettes;n("#studioControls").innerHTML=`<div class="control-heading"><span>01 \u5148\u9009\u8C03\u6574\u533A\u57DF</span></div><div class="color-zones">${tc.map((U,N)=>`<button data-zone="${N}" aria-pressed="${a===N}" class="${a===N?"active":""}"><i style="background:${s.colors[N]}"></i>${U}</button>`).join("")}</div><div class="control-heading"><span>02 \u4E3A\u300C${tc[a]}\u300D\u9009\u8272</span><small>\u7B2C${s.caveId}\u7A9F \xB7 ${T.length} \u8272</small></div><div class="tone-library">${T.map(U=>`<button data-tone="${U.hex}" aria-label="\u4F7F\u7528${Kt(U.name)}" aria-pressed="${s.colors[a]===U.hex}" class="${s.colors[a]===U.hex?"active":""}"><i style="background:${U.hex}"></i><span>${Kt(U.name)}</span><small class="tone-meaning">${Kt(U.symbol)}</small></button>`).join("")}</div><div id="colorContext">${y()}</div><label class="custom-color">\u81EA\u5B9A\u4E49\u989C\u8272 <input type="color" id="customTone" value="${s.colors[a]}" aria-label="\u81EA\u5B9A\u4E49\u5F53\u524D\u533A\u57DF\u989C\u8272"><output id="hexValue">${s.colors[a].toUpperCase()}</output></label><div class="control-heading"><span>\u4E5F\u53EF\u4EE5\u4ECE\u4E00\u7EC4\u914D\u8272\u5F00\u59CB</span><small>\u540C\u4E00\u8272\u5E93\u7684\u5F53\u4EE3\u642D\u914D</small></div><div class="palette-library">${C.map(({name:U,colors:N},O)=>`<button data-set="${O}"><span>${N.map($=>`<i style="background:${$}"></i>`).join("")}</span><small>${Kt(U)}</small></button>`).join("")}</div><p class="color-scope-note">\u8272\u503C\u53D6\u81EA\u516C\u5F00\u6570\u5B57\u56FE\u7248\uFF0C\u7ECF\u533A\u57DF\u91C7\u6837\u4E0E\u8BBE\u8BA1\u6574\u7406\u3002\u8272\u540D\u6309\u90E8\u4F4D\u547D\u540D\uFF0C\u5BC4\u8BED\u627F\u63A5\u7EB9\u6837\u8BED\u5883\u4E0E\u5F53\u4EE3\u795D\u613F\uFF0CRGB\u4E0D\u4F5C\u989C\u6599\u9274\u5B9A\u3002</p>`,document.querySelectorAll("[data-zone]").forEach(U=>U.onclick=()=>{a=+U.dataset.zone,g()}),document.querySelectorAll("[data-tone]").forEach(U=>U.onclick=()=>{s.colors[a]=U.dataset.tone,u(),g()}),n("#customTone").oninput=U=>{s.colors[a]=U.target.value,n("#hexValue").textContent=U.target.value.toUpperCase(),u(),document.querySelector(`[data-zone="${a}"] i`).style.background=U.target.value,n("#colorContext").innerHTML=y()},document.querySelectorAll("[data-set]").forEach(U=>U.onclick=()=>{s.colors=[...C[+U.dataset.set].colors],u(),g()})}if(r==="scent"){let T=ms(s.caveId);n("#studioControls").innerHTML=`<div class="scent-studio"><p class="scent-kicker">\u4E00\u9685 \xB7 \u95FB\u89C1\u85FB\u4E95</p><h4>\u4E00\u7A9F\u4E00\u9999</h4><p class="scent-intro">\u9999\u578B\u968F\u5F53\u524D\u85FB\u4E95\u81EA\u52A8\u5339\u914D\u3002\u5207\u6362\u4E0A\u65B9\u6D1E\u7A9F\u5373\u53EF\u67E5\u770B\u53E6\u4E00\u6B3E\u9999\u3002</p><article class="scent-dossier" style="--scent-tone:${T.color}" aria-live="polite"><header><p>\u7B2C${T.cave}\u7A9F \xB7 \u5BF9\u5E94\u9999\u578B</p><h5>${T.name}<span>${T.family}</span></h5></header><p class="scent-impression">${T.impression}</p><dl class="scent-notes" aria-label="\u9999\u8C03\u642D\u914D">${T.notes.map(([C,U,N])=>`<div><dt><small>${U}</small>${C}</dt><dd>${N}</dd></div>`).join("")}</dl><section class="scent-context"><h6>\u4E3A\u4EC0\u4E48\u8FD9\u6837\u914D\uFF1F</h6><p>${T.connection}</p></section><div class="scent-wish"><span>\u8BBE\u8BA1\u5BC4\u610F</span><strong>${T.wish}</strong></div><details class="scent-sources"><summary>\u67E5\u770B\u9999\u6750\u4E0E\u7EB9\u6837\u51FA\u5904</summary>${T.sources.map(C=>`<a href="${C.url}" target="_blank" rel="noopener noreferrer">${C.label} \u2197</a>`).join("")}</details><p class="scent-scope">\u5F53\u4EE3\u9999\u578B\u63D0\u6848\uFF1B\u6240\u5217\u4E3A\u6C14\u5473\u65B9\u5411\uFF0C\u5B9E\u9645\u9999\u6C14\u4EE5\u6253\u6837\u4E3A\u51C6\u3002</p></article></div>`}if(r==="parts"){let T=(C,U,N)=>`<div class="control-heading"><span>${C}</span></div><div class="component-options">${N.map(([O,$])=>`<button data-property="${U}" data-value="${O}" aria-pressed="${s[U]===O}" class="${s[U]===O?"active":""}">${$}</button>`).join("")}</div>`;n("#studioControls").innerHTML=T("\u9999\u6302\u8F6E\u5ED3","shape",[["octagon","\u516B\u89D2\u4E95\u6846"],["square","\u5706\u89D2\u65B9\u7247"],["round","\u5706\u5F62\u56E2\u6247"],["diamond","\u83F1\u5F62\u82B1\u7B3A"]])+T("\u8868\u9762\u8D28\u611F","material",[["linen","\u4E9A\u9EBB\u7EC7\u9762"],["paper","\u78E8\u7802\u7EB8\u9762"],["ceramic","\u91C9\u611F\u8868\u9762"]])+T("\u6302\u7EF3\u7EC4\u5408","cord",[["loop","\u5355\u73AF\u7EC6\u7EF3"],["double","\u53CC\u73AF\u6302\u7EF3"],["bead","\u73E0\u9970\u6302\u7EF3"]])+`<div class="control-heading"><span>\u4E0B\u7F18\u914D\u4EF6</span></div><button class="tassel-option ${s.tassel?"active":""}" id="tasselChoice" aria-pressed="${s.tassel}">\u7EC6\u7A57\u6D41\u82CF <span>${s.tassel?"\u5DF2\u6DFB\u52A0 \u2713":"\u6DFB\u52A0 \uFF0B"}</span></button><p class="component-note">\u8F6E\u5ED3\u4E0E\u914D\u4EF6\u4E3A\u5F53\u4EE3\u7ED3\u6784\u8BBE\u8BA1\uFF0C\u53EF\u6309\u4F7F\u7528\u65B9\u5F0F\u81EA\u7531\u9009\u62E9\u3002\u6587\u5316\u7EB9\u6837\u7684\u51FA\u5904\u968F\u8BBE\u8BA1\u7A3F\u4FDD\u7559\uFF0C\u6750\u6599\u4E0E\u9999\u82AF\u8FD8\u9700\u5B9E\u7269\u6253\u6837\u3002</p>`,document.querySelectorAll("[data-property]").forEach(C=>C.onclick=()=>{s[C.dataset.property]=C.dataset.value,u(),g()}),n("#tasselChoice").onclick=()=>{s.tassel=!s.tassel,u(),g()}}}function w(T){s.caveId!==String(T)&&(h.set(s.caveId,structuredClone(s)),s=structuredClone(h.get(String(T))||mo(String(T))),d=s.center,o=!1,l=!1,f.style.transform="",u(),g())}n("#studioCave").onchange=T=>{w(T.target.value),t(s.caveId)},document.querySelectorAll("[data-studio-tab]").forEach(T=>{T.onclick=()=>{r=T.dataset.studioTab,g()},T.onkeydown=C=>{if(C.key==="ArrowRight"||C.key==="ArrowLeft"){C.preventDefault();let U=Lu.map(([N])=>N);r=U[(U.indexOf(r)+(C.key==="ArrowRight"?1:U.length-1))%U.length],g(),n("#tab-"+r).focus()}}}),n("#openScent").onclick=()=>{r="scent",g(),n("#tab-scent").focus()},n("#productExplode").onclick=()=>{o=!o,l=!1,f.style.transform="",u()},n("#scentToggle").onclick=()=>{l=!l,o=!1,f.style.transform="",u()};let v=!1;n("#flatPreview").onclick=()=>{v=!v,f.classList.toggle("flat",v),f.style.transform="",n("#flatPreview").textContent=v?"\u7ACB\u4F53\u56FE \u2197":"\u6B63\u89C6\u56FE \u2197"};let I=n("#productStage");I.addEventListener("pointermove",T=>{if(v||o||l||T.pointerType==="touch"||matchMedia("(prefers-reduced-motion: reduce)").matches)return;let C=I.getBoundingClientRect();f.style.transform=`translate(-50%,-50%) rotateY(${(T.clientX-C.left-C.width/2)/C.width*20-8}deg) rotateX(${-(T.clientY-C.top-C.height/2)/C.height*10+5}deg)`}),I.addEventListener("pointerleave",()=>f.style.transform=""),n("#randomDesign").onclick=()=>{let T=p(),C=T.centerKeys.filter(U=>U!=="none");s.center=C[Math.floor(Math.random()*C.length)],d=s.center,s.overlays=T.overlayKeys.filter(()=>Math.random()>.55),s.colors=[...T.palettes[Math.floor(Math.random()*T.palettes.length)].colors],s.shape=Object.keys(Du)[Math.floor(Math.random()*4)],u(),g()},n("#resetDesign").onclick=()=>{s=mo(s.caveId),d=s.center,o=!1,l=!1,u(),g()};function L(){n("#savedDesigns").innerHTML=c.length?`<div class="control-heading"><span>\u6211\u7684\u7075\u611F\u67B6</span><small>\u672C\u6D4F\u89C8\u5668\u4FDD\u5B58 \xB7 \u6700\u591A 4 \u6B3E</small></div><div class="saved-designs">${c.map((T,C)=>`<button data-saved="${C}" aria-label="\u8F7D\u5165\u6536\u85CF\u8BBE\u8BA1${C+1}">${go(T)}<span>\u7B2C${T.caveId}\u7A9F \xB7 ${ms(T.caveId).name} \u2197</span></button>`).join("")}</div>`:"",document.querySelectorAll("[data-saved]").forEach(T=>T.onclick=()=>{let C=structuredClone(c[+T.dataset.saved]);w(C.caveId),s=C,d=s.center,u(),g(),t(s.caveId),R("\u5DF2\u8F7D\u5165\u6536\u85CF\u7684\u7EB9\u6837\u4E0E\u914D\u8272\uFF0C\u9999\u578B\u6309\u6D1E\u7A9F\u5339\u914D")})}n("#saveDesign").onclick=()=>{c.unshift(structuredClone(s)),c=c.slice(0,4);try{localStorage.setItem("yiyu-designs-v2",JSON.stringify(c)),R("\u5DF2\u6536\u85CF\uFF0C\u6587\u5316\u6765\u6E90\u968F\u8BBE\u8BA1\u4E00\u540C\u4FDD\u7559")}catch{R("\u5DF2\u52A0\u5165\u5F53\u524D\u9875\u9762\u7075\u611F\u67B6\uFF0C\u6D4F\u89C8\u5668\u672A\u5141\u8BB8\u6301\u4E45\u4FDD\u5B58")}L()};function M(T,C){let U=URL.createObjectURL(T),N=document.createElement("a");N.href=U,N.download=`\u4E00\u9685-\u7B2C${s.caveId}\u7A9F-${gs(s.caveId,s.center)}-${ms(s.caveId).name}.${C}`,N.style.display="none",document.body.append(N),N.click(),N.remove(),R(`\u5DF2\u751F\u6210 ${C.toUpperCase()}\uFF0C\u8BF7\u67E5\u770B\u6D4F\u89C8\u5668\u4E0B\u8F7D`),setTimeout(()=>URL.revokeObjectURL(U),3e3)}n("#downloadPattern").onclick=()=>M(new Blob([go(s)],{type:"image/svg+xml"}),"svg"),n("#downloadPNG").onclick=()=>{let T=new Blob([go(s)],{type:"image/svg+xml"}),C=URL.createObjectURL(T),U=new Image;U.onload=()=>{let N=document.createElement("canvas");N.width=2100,N.height=2850,N.getContext("2d").drawImage(U,0,0,2100,2850),N.toBlob(O=>{O&&M(O,"png")}),URL.revokeObjectURL(C)},U.onerror=()=>{URL.revokeObjectURL(C),R("\u56FE\u7247\u5BFC\u51FA\u5931\u8D25\uFF0C\u8BF7\u4F7F\u7528 SVG \u4E0B\u8F7D")},U.src=C};let x;function R(T){n("#toast").textContent=T,n("#toast").classList.add("show"),clearTimeout(x),x=setTimeout(()=>n("#toast").classList.remove("show"),3200)}return u(),g(),L(),{setCave:w,chooseMotif(T){let C=p();C.centerKeys.includes(T)?s.center=T:C.overlayKeys.includes(T)&&!s.overlays.includes(T)&&s.overlays.push(T),d=T,r="motif",u(),g()},setTone(T){s.colors[0]=T,a=0,r="color",u(),g()}}}var Yt=i=>document.querySelector(i),Ie=i=>String(i??"").replace(/[&<>"']/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[t]),nc=i=>i.map(t=>`<a href="${t.url}" target="_blank" rel="noopener">${Ie(t.title)} \u2197</a>`).join("");function Nu({caveId:i="329",onChange:t=()=>{},onUse:e=()=>{},onNavigate:n=()=>{}}={}){let s=i,r="motifs",a=ge(s).defaultCenter,o=0;Yt("#home").insertAdjacentHTML("afterend",'<section class="collection" id="collection"><div class="section-head"><div><p class="eyebrow">CHOOSE YOUR SKY</p><h2>\u5148\u6311\u4E00\u5E45\uFF0C<br>\u6211\u4EEC\u6162\u6162\u770B\u3002</h2></div><p class="section-desc">\u8FD9\u4E09\u5E45\u85FB\u4E95\uFF0C\u6765\u81EA\u968B\u4EE3\u4E0E\u521D\u5510\u3002<br>\u9009\u4E00\u5E45\u559C\u6B22\u7684\uFF0C\u5148\u8BA4\u8BC6\u5B83\uFF0C\u518D\u52A8\u624B\u8BD5\u8BD5\u3002</p></div><div class="cave-gallery" id="caveGallery"></div><p class="collection-note">\u672C\u9875\u91C7\u7528\u516C\u5F00\u4E95\u5FC3\u56FE\u7248\uFF0C\u5176\u4E2D407\u7A9F\u4E3A1954\u5E74\u4E34\u6479\u4F5C\u54C1\u3002\u540E\u7EED\u7ACB\u4F53\u5C55\u793A\u4F7F\u7528\u7684\u56FE\u7248\u4E0E\u8BBE\u8BA1\u5904\u7406\u53E6\u6709\u6807\u6CE8\u3002</p></section>'),Yt("#wear").insertAdjacentHTML("beforebegin",`<section class="culture-study" id="patterns"><div class="section-head"><div><p class="eyebrow">03 \u2014 KNOW WHAT YOU CHOOSE</p><h2>\u770B\u6E05\u7EB9\u6837\uFF0C\u4E5F\u770B\u6E05\u989C\u8272\u3002</h2></div><p class="section-desc">\u5148\u9009\u7EB9\u6837\u6216\u539F\u8272\uFF0C\u518D\u5BF9\u7167\u56FE\u7248\u4F4D\u7F6E\u4E0E\u8BF4\u660E\u3002</p></div><div class="study-context"><span id="studySource"></span><select id="studyCave" aria-label="\u9009\u62E9\u89E3\u8BFB\u7684\u6765\u6E90\u85FB\u4E95">${un.map(E=>`<option value="${E.id}">\u7B2C${E.id}\u7A9F \xB7 ${E.title}</option>`).join("")}</select></div><div class="study-tabs" role="tablist" aria-label="\u6587\u5316\u6863\u6848\u7C7B\u522B"><button id="studyMotifs" role="tab" aria-selected="true" aria-controls="studyPanel">\u7EB9\u6837\u89E3\u8BFB</button><button id="studyColors" role="tab" aria-selected="false" aria-controls="studyPanel">\u539F\u8272\u89E3\u8BFB</button></div><div id="studyPanel" role="tabpanel" aria-labelledby="studyMotifs"></div></section>`),Yt("#explore .section-head").insertAdjacentHTML("afterend",`<div class="explore-choice"><label for="exploreCave">\u5F53\u524D\u85FB\u4E95</label><select id="exploreCave">${un.map(E=>`<option value="${E.id}">\u7B2C${E.id}\u7A9F \xB7 ${E.title}</option>`).join("")}</select><a href="#story" class="back-to-story">\u8BA4\u8BC6\u8FD9\u4E00\u7A9F \u2197</a><a href="#patterns">\u770B\u7EB9\u6837\u4E0E\u53D6\u8272\u6863\u6848 \u2197</a></div>`),Yt("#layerDesc").insertAdjacentHTML("afterend",'<button class="text-link layer-learn" id="layerLearn">\u4E86\u89E3\u8FD9\u7EC4\u5143\u7D20\u7684\u63D0\u53D6 \u2197</button>'),Yt("#studyCave").onchange=E=>t(E.target.value),Yt("#exploreCave").onchange=E=>t(E.target.value);function l(){Yt("#caveGallery").innerHTML=un.map(E=>`<article class="cave-entry ${E.id===s?"selected":""}"><button class="cave-art-button" data-cave="${E.id}" aria-pressed="${E.id===s}" aria-label="\u9009\u62E9\u7B2C${E.id}\u7A9F${E.title}"><img src="${E.reference}" alt="${E.title}\uFF0C${E.sourceLabel}" loading="lazy"><span class="cave-era">${E.era}</span><span class="cave-index">${E.id}</span></button><div class="cave-entry-title"><h3>${E.title}</h3><button data-cave="${E.id}" class="cave-select">${E.id===s?"\u8BA4\u8BC6\u8FD9\u4E00\u7A9F \u2192":"\u9009\u5B83\uFF0C\u53BB\u770B\u770B \u2197"}</button></div><p>${E.subtitle}</p><small>${E.id==="407"?"1954\u5E74\u4E34\u6479\u56FE\u7248":"\u516C\u5F00\u4E95\u5FC3\u56FE\u7248"}</small></article>`).join(""),document.querySelectorAll("[data-cave]").forEach(E=>E.onclick=()=>{t(E.dataset.cave),n("story")})}let c=new Map,d=E=>String(E+1).padStart(2,"0");function h(E,y,g){return`<figure class="study-original"><div class="study-plate"><img src="${E.reference}" alt="\u7B2C${E.id}\u7A9F${Ie(E.sourceLabel)}">${y?`<span class="source-point study-map-point" aria-hidden="true" style="left:${y[0]*100}%;top:${y[1]*100}%"><i></i><b>${g.number}</b></span>`:""}</div><figcaption><strong>${y?`<span class="study-ref-number">${g.number}</span> ${Ie(g.region)}`:"\u56FE\u7248\u4E0A\u65E0\u72EC\u7ACB\u5B9A\u4F4D"}</strong><small>${Ie(y?E.sourceLabel:"\u8FD9\u4E00\u7EB9\u6837\u4F9D\u636E\u7ED3\u6784\u6216\u6587\u732E\u4F5C\u8BBE\u8BA1\u8F6C\u8BD1\uFF0C\u5F53\u524D\u56FE\u7248\u672A\u6807\u6CE8\u5B8C\u6574\u4F4D\u7F6E\u3002")}</small></figcaption></figure>`}function f(){let E=ge(s),y=r==="motifs",g=E.palettes[2].colors,w=y?Dn(s,a):E.colors[o]||E.colors[0],v=y?E.motifs.findIndex(N=>N.key===w.key):o,I=d(v),L=y?w.location:w.region;Yt("#studySource").textContent=`\u7B2C${s}\u7A9F \xB7 ${E.title} \xB7 ${E.era}`,Yt("#studyCave").value=s,Yt("#exploreCave").value=s;for(let[N,O]of[[Yt("#studyMotifs"),y],[Yt("#studyColors"),!y]])N.setAttribute("aria-selected",O),N.tabIndex=O?0:-1;let M=Yt("#studyPanel");M.setAttribute("aria-labelledby",y?"studyMotifs":"studyColors");let x=y?E.motifs:E.colors,R=x.map((N,O)=>{let $=O===v;return`<button type="button" data-study-choice="${O}" aria-pressed="${$}" aria-controls="studyDetail"><span class="study-choice-index">${d(O)}</span>${y?`<svg class="study-thumb" viewBox="-145 -145 290 290" aria-hidden="true">${Qn(N.key,g)}</svg>`:`<span class="study-chip" style="--study-swatch:${N.hex}" aria-hidden="true"></span>`}<span class="study-choice-text"><strong>${Ie(N.name)}</strong>${y?"":`<small>${Ie(N.region)}</small>`}</span><span class="study-choice-status" aria-hidden="true">${$?"\u2713":"\u203A"}</span></button>`}).join(""),T=y?[["\u6587\u5316\u89E3\u8BFB",w.meaning,w.meaningKind],["\u5982\u4F55\u8F6C\u6210\u7EB9\u6837",w.extract],["\u4E3A\u4EC0\u4E48\u9009\u7528",w.why]]:[["\u8272\u5F69\u89E3\u8BFB",w.meaning,w.meaningBasis],["\u600E\u4E48\u53D6\u8272",w.method,"\u8272\u503C\u53D6\u81EA\u56FE\u7248\uFF0C\u4E0D\u7B49\u4E8E\u58C1\u753B\u539F\u59CB\u989C\u6599\u68C0\u6D4B\u3002"]],C=nc(y&&w.sources?.length?w.sources:E.sources);M.innerHTML=`<div class="study-workbench"><aside class="study-options" id="studyOptions" aria-label="${y?"\u7EB9\u6837\u9009\u9879":"\u539F\u8272\u9009\u9879"}"><div class="study-options-head"><h3>01 \u9009${y?"\u7EB9\u6837":"\u539F\u8272"}</h3><span>${x.length} \u9879</span></div><div class="study-choice-list" role="group" aria-label="${y?"\u9009\u62E9\u7EB9\u6837":"\u9009\u62E9\u539F\u8272"}">${R}</div></aside><article class="study-detail" id="studyDetail" aria-labelledby="studyDetailTitle"><header class="study-detail-header"><div><p class="study-detail-kicker">02 \u67E5\u770B\u89E3\u8BFB <span>\u7B2C${s}\u7A9F</span></p><h3 id="studyDetailTitle" tabindex="-1"><span class="study-ref-number">${I}</span>${Ie(w.name)}</h3></div><button class="study-return" id="studyReturn">\u2191 \u56DE\u5230\u9009\u9879</button></header><p class="study-current-region"><strong>${y?"\u539F\u578B\u4F4D\u7F6E":"\u53D6\u8272\u90E8\u4F4D"}</strong> ${Ie(L)}</p><div class="study-detail-grid"><div class="study-visual">${h(E,w.point,{number:I,region:L})}${y?`<div class="study-design-preview"><svg viewBox="-145 -145 290 290" role="img" aria-label="${Ie(w.name)}\u7684\u5E73\u9762\u518D\u8BBE\u8BA1">${Qn(w.key,g)}</svg><div><strong>\u5E73\u9762\u518D\u8BBE\u8BA1</strong><small>\u4ECE\u539F\u578B\u63D0\u53D6\u8F6E\u5ED3\u4E0E\u7ED3\u6784</small>${w.key==="rabbits"?'<button type="button" id="highlightEars" aria-pressed="false">\u70B9\u4EAE\u4E09\u53EA\u5171\u7528\u8033</button>':""}</div></div>`:""}</div><div class="study-reading">${y?"":`<div class="study-color-summary"><span class="study-chip" style="--study-swatch:${w.hex}" aria-hidden="true"></span><div><strong>${Ie(w.name)}</strong><code>${Ie(w.hex.toUpperCase())}</code></div></div>`}<section class="study-key-meaning"><span>${Ie(y?w.meaningKind:"\u8272\u5F69\u5BC4\u610F")}</span><strong>${Ie(w.symbol)}</strong><p>${Ie(w.wish)}</p></section><dl class="study-explainer">${T.map(([N,O,$])=>`<div><dt>${N}</dt><dd>${Ie(O)}${$?`<small>${Ie($)}</small>`:""}</dd></div>`).join("")}</dl><button class="primary study-use" id="studyUse">${y?"\u5C06\u6B64\u7EB9\u6837\u7528\u4E8E\u9999\u6302":"\u8BBE\u4E3A\u9999\u6302\u5E95\u8272"} <span>\u2192</span></button><details class="study-sources"><summary>\u67E5\u770B\u56FE\u7248\u4E0E\u8D44\u6599\u6765\u6E90</summary>${C}</details></div></div></article></div>`,M.querySelectorAll("[data-study-choice]").forEach(N=>N.onclick=()=>{let O=+N.dataset.studyChoice,$=Yt("#studyOptions").scrollTop;y?a=x[O].key:o=O,f(),matchMedia("(max-width: 800px)").matches?(Yt("#studyDetailTitle").focus({preventScroll:!0}),Yt("#studyDetail").scrollIntoView({block:"start"})):(Yt("#studyPanel").scrollTop=0,Yt("#studyOptions").scrollTop=$,M.querySelector(`[data-study-choice="${O}"]`).focus({preventScroll:!0}))}),Yt("#studyReturn").onclick=()=>{M.querySelector('[data-study-choice][aria-pressed="true"]').focus({preventScroll:!0}),Yt("#studyOptions").scrollIntoView({block:"start"})},Yt("#studyUse").onclick=()=>y?e(s,w.key):e(s,null,w.hex);let U=Yt("#highlightEars");U&&(U.onclick=()=>{let N=U.getAttribute("aria-pressed")!=="true";U.setAttribute("aria-pressed",N),U.closest(".study-design-preview").classList.toggle("show-ears",N),U.textContent=N?"\u5DF2\u70B9\u4EAE \xB7 \u518D\u70B9\u6536\u8D77":"\u70B9\u4EAE\u4E09\u53EA\u5171\u7528\u8033"})}function p(E){r=E,f(),Yt("#studyPanel").scrollTop=0}Yt("#studyMotifs").onclick=()=>p("motifs"),Yt("#studyColors").onclick=()=>p("colors");for(let E of[Yt("#studyMotifs"),Yt("#studyColors")])E.onkeydown=y=>{["ArrowLeft","ArrowRight","Home","End"].includes(y.key)&&(y.preventDefault(),p(y.key==="Home"?"motifs":y.key==="End"||r==="motifs"?"colors":"motifs"),Yt(r==="motifs"?"#studyMotifs":"#studyColors").focus())};function _(){let E=ge(s);Yt("#archive .archive-grid").innerHTML=`<h2>\u8FD8\u60F3\u591A\u4E86\u89E3\u4E00\u70B9\uFF1F</h2><div><p>${E.intro}</p><p class="small-note">${E.scope} \u9999\u6302\u56FE\u5F62\u4E3A\u51E0\u4F55\u8F6C\u8BD1\uFF0C\u8272\u540D\u4E0E\u8272\u5F69\u8054\u60F3\u4E3A\u9879\u76EE\u8BBE\u8BA1\u8BF4\u660E\u3002</p><div class="archive-sources">${nc(E.sources)}</div><button class="plain-btn" id="openCurrentSource">\u67E5\u770B\u539F\u578B\u56FE\u7248\u4E0E\u5BF9\u7167 \u2197</button></div><div class="project-purpose"><div><h3>\u8FD9\u4EFD\u63D0\u6848\uFF0C\u5E0C\u671B\u4EA4\u7ED9\u8C01\uFF1F</h3><p>\u62DF\u9762\u5411\u6566\u714C\u7814\u7A76\u9662\u7684\u6587\u5316\u5F18\u626C\u4E0E\u516C\u4F17\u6559\u80B2\u573A\u666F\uFF1A\u8BA9\u521D\u6B21\u63A5\u89E6\u85FB\u4E95\u7684\u89C2\u4F17\uFF0C\u5148\u8BA4\u8BC6\u6D1E\u7A9F\u4E0E\u56FE\u6848\uFF0C\u518D\u901A\u8FC7\u4E92\u52A8\u89C2\u5BDF\uFF0C\u5C1D\u8BD5\u628A\u7EB9\u6837\u5E26\u5165\u65E5\u5E38\u8BBE\u8BA1\u3002</p><small>\u76EE\u524D\u4E3A\u8BFE\u7A0B\u7814\u7A76\u4E0E\u4F53\u9A8C\u539F\u578B\uFF0C\u5C1A\u672A\u83B7\u5F97\u673A\u6784\u59D4\u6258\u6216\u5408\u4F5C\u6388\u6743\u3002</small></div><div><h3>\u4ECE\u8BA4\u8BC6\uFF0C\u5230\u52A8\u624B\u505A</h3><p>\u9009\u4E00\u7A9F \u2192 \u8BFB\u65F6\u4EE3\u4E0E\u56FE\u6848 \u2192 \u89C2\u62C6\u89E3\u3001\u62FC\u7EB9\u6837 \u2192 \u8BC6\u5143\u7D20\u4E0E\u989C\u8272 \u2192 \u5236\u4E00\u679A\u9999\u6302\u3002\u4EE5\u6765\u6E90\u53EF\u67E5\u7684\u6587\u5316\u5185\u5BB9\u8FDE\u63A5\u7EBF\u4E0A\u4F53\u9A8C\u4E0E\u5B9E\u4F53\u6253\u6837\u3002</p><small>\u540E\u7EED\u9700\u8FDB\u4E00\u6B65\u6838\u5BF9\u6587\u5316\u91CA\u8BFB\u3001\u56FE\u7248\u4F7F\u7528\u8BB8\u53EF\uFF0C\u5E76\u9A8C\u8BC1\u9999\u6302\u6750\u6599\u4E0E\u5236\u4F5C\u5DE5\u827A\u3002</small></div></div>`,Yt("#openCurrentSource").onclick=S}function S(){let E=ge(s),y=Yt("#sourceDialog");y.innerHTML=`<button id="sourceClose" class="modal-close" aria-label="\u5173\u95ED\u539F\u578B\u6863\u6848">\xD7</button><p class="eyebrow">DUNHUANG \xB7 CAVE ${s} / ${E.era}</p><h2>${E.title}</h2><img src="${E.reference}" alt="${E.sourceLabel}"><p>${E.sourceLabel}\u3002${E.scope}</p>${s==="407"?`<h3>\u58C1\u753B\u539F\u72B6\u4E95\u5FC3\u5C40\u90E8 \xB7 \u5BF9\u7167</h3><img src="${E.original}" alt="\u7B2C407\u7A9F\u58C1\u753B\u539F\u72B6\u4E09\u5154\u4E95\u5FC3\u5C40\u90E8\uFF0C\u6566\u714C\u7814\u7A76\u9662\u4F9B\u56FE"><p>\u539F\u72B6\u4E95\u5FC3\u5C40\u90E8\u4E0E1954\u5E74\u4E34\u6479\u4F5C\u54C1\u7684\u8303\u56F4\u3001\u8272\u5F69\u4E0D\u540C\u3002\u672C\u7EC4\u8272\u5E93\u53D6\u81EA\u4E0A\u65B9\u4E34\u6479\u56FE\u7248\u3002</p>`:s==="329"?'<h3>\u5B8C\u6574\u7A9F\u9876\u516C\u5F00\u56FE\u7248 \xB7 \u5BF9\u7167</h3><img src="assets/cave329.jpg" alt="\u6566\u714C\u7814\u7A76\u9662\u516C\u5F00\u7684\u7B2C329\u7A9F\u5B8C\u6574\u7A9F\u9876\u56FE\u7248"><p>\u6A21\u578B\u91C7\u7528\u53C2\u8003\u91CD\u7ED8\uFF0C\u7EB9\u6837\u6863\u6848\u4E0E\u53D6\u8272\u4F7F\u7528\u516C\u5F00\u4E95\u5FC3\u56FE\u7248\u3002</p>':""}<div class="source-links">${nc(E.sources)}</div>`,Yt("#sourceClose").onclick=()=>y.close(),y.showModal()}Yt("#sourceOpen").onclick=S,Yt("#sourceDialog").addEventListener("click",E=>{if(E.target===Yt("#sourceDialog")){let y=E.target.getBoundingClientRect();(E.clientX<y.left||E.clientX>y.right||E.clientY<y.top||E.clientY>y.bottom)&&E.target.close()}});function m(E){c.set(s,{key:a,tone:o}),s=ge(E).id,{key:a,tone:o}=c.get(s)||{key:ge(s).defaultCenter,tone:0},l(),f(),Yt("#studyPanel").scrollTop=0,_()}function u(E){r="motifs",a=ge(s).motifs.some(y=>y.key===E)?E:ge(s).defaultCenter,f(),n("patterns"),Yt("#patterns").scrollTop=0,Yt("#studyPanel").scrollTop=0}return m(s),{setCave:m,openElement:u}}var __={title:"\u6566\u714C\u7814\u7A76\u9662\uFF5C\u7B2C329\u7A9F\u83B2\u82B1\u98DE\u5929\u85FB\u4E95",url:"https://www.dha.ac.cn/info/1425/3577.htm"},y_={title:"\u6566\u714C\u7814\u7A76\u9662\uFF5C\u7B2C407\u7A9F\u4E09\u5154\u83B2\u82B1\u85FB\u4E95",url:"https://www.dha.ac.cn/info/1425/3569.htm"},x_={title:"\u6570\u5B57\u6566\u714C\uFF5C\u7B2C390\u7A9F",url:"https://www.e-dunhuang.com/cave/10.0001/0001.0001.0390"},v_={title:"\u6E05\u534E\u5927\u5B66\u7F8E\u672F\u56FE\u4E66\u9986\uFF5C\u7B2C390\u7A9F\u85FB\u4E95",url:"https://lib.tsinghua.edu.cn/arts/info/1034/2020.htm"},M_={title:"\u4E2D\u56FD\u7F8E\u672F\u9986\uFF5C\u6BB5\u6587\u6770\u3001\u674E\u590D1954\u5E74\u4E34\u6479\u4F5C\u54C1",url:"https://www.namoc.cn/namoc/zhanlan/202503/96c51873e97e4de3b930bedbcb8176f8.shtml"};var _s={329:{question:"\u83B2\u82B1\u5468\u56F4\uFF0C\u98DE\u5929\u6B63\u5F80\u54EA\u91CC\u98DE\uFF1F",era:"\u521D\u5510 \xB7 \u83AB\u9AD8\u7A9F\u7B2C329\u7A9F",period:"\u5510 618\u2014907\u5E74 \xB7 \u672C\u7A9F\u5F00\u51FF\u4E8E\u521D\u5510",lede:"\u5148\u770B\u83B2\u82B1\uFF0C\u518D\u987A\u7740\u8863\u5E26\u5F80\u5916\u627E\u3002\u56DB\u8EAB\u98DE\u5929\u56F4\u7740\u83B2\u82B1\u56DE\u65CB\uFF0C\u5377\u4E91\u7A7F\u63D2\u5176\u95F4\uFF0C\u8BA9\u9759\u6B62\u7684\u753B\u9762\u6709\u4E86\u6D41\u52A8\u7684\u65B9\u5411\u3002",context:"\u8FD9\u5EA7\u6D1E\u7A9F\u7684\u7A9F\u9876\u5448\u8986\u6597\u5F62\uFF1A\u56DB\u9762\u659C\u5761\u5411\u4E0A\u6536\u62E2\uFF0C\u4E2D\u592E\u7559\u4E0B\u65B9\u5F62\u4E95\u5FC3\u3002\u83B2\u82B1\u548C\u6DE1\u84DD\u5E95\u8272\u5171\u540C\u8425\u9020\u4F5B\u6559\u8BED\u5883\u4E2D\u7684\u51C0\u571F\u4E0E\u5929\u7A7A\u610F\u8C61\u3002",plate:"\u6B64\u5904\u770B\u7684\u662F\u516C\u5F00\u4E95\u5FC3\u56FE\u7248\uFF1B\u56DB\u62AB\u4F0E\u4E50\u7B49\u5916\u56F4\u753B\u9762\u4E0D\u5728\u8FD9\u5F20\u56FE\u91CC\u3002",image:"assets/cave329-core.webp",credit:"\u4E95\u5FC3\u516C\u5F00\u56FE\u7248 \xB7 \u6E05\u534E\u5927\u5B66\u7F8E\u672F\u56FE\u4E66\u9986",details:[{name:"\u83B2\u4E0E\u4E91\uFF0C\u76F8\u95F4\u5C55\u5F00",text:"\u5341\u56DB\u4E2A\u5377\u74E3\u4E0E\u5341\u56DB\u6735\u5377\u4E91\u76F8\u95F4\u73AF\u7ED5\u3002\u8BA4\u51FA\u8FD9\u4E2A\u8282\u594F\uFF0C\u5C31\u66F4\u5BB9\u6613\u627E\u5230\u83B2\u82B1\u7684\u8FB9\u754C\u3002",point:[.5,.36]},{name:"\u987A\u7740\u8863\u5E26\uFF0C\u770B\u89C1\u56DE\u65CB",text:"\u56DB\u8EAB\u6267\u82B1\u98DE\u5929\u9006\u65F6\u9488\u73AF\u83B2\u98DE\u884C\u3002\u7559\u610F\u957F\u5DFE\u4E0E\u4E91\u6C14\uFF0C\u5B83\u4EEC\u628A\u8FD0\u52A8\u65B9\u5411\u753B\u4E86\u51FA\u6765\u3002",point:[.47,.21]},{name:"\u56DB\u89D2\u5E76\u6CA1\u6709\u7A7A\u7740",text:"\u56DB\u89D2\u5404\u6709\u56DB\u5206\u4E4B\u4E00\u56E2\u82B1\uFF0C\u4E0E\u4E2D\u592E\u83B2\u82B1\u547C\u5E94\uFF0C\u8BA9\u5706\u5F62\u82B1\u5FC3\u5B89\u653E\u5728\u65B9\u5F62\u4E95\u5FC3\u91CC\u3002",point:[.1,.1]}],compare:"\u5377\u74E3\u3001\u5377\u4E91\u76F8\u95F4\uFF0C\u56DB\u8EAB\u98DE\u5929\u73AF\u83B2\u56DE\u65CB\u3002",comparisonLabel:"\u6CBF\u7740\u8863\u5E26\uFF0C\u770B\u56DE\u65CB",modern:"\u6863\u6848\u4E2D\u7684\u4E95\u5FC3\u56FE\u7248\u5E2E\u52A9\u6211\u4EEC\u8FA8\u8BA4\u7EC6\u8282\uFF1B\u7AD9\u5185\u7ACB\u4F53\u5C55\u793A\u53E6\u7528\u4E86\u5168\u5E45\u53C2\u8003\u91CD\u7ED8\u3002\u4E8C\u8005\u7684\u753B\u9762\u8303\u56F4\u4E0E\u5236\u4F5C\u65B9\u5F0F\u4E0D\u540C\uFF0C\u89C2\u770B\u65F6\u53EF\u4EE5\u5728\u539F\u578B\u6863\u6848\u91CC\u5BF9\u7167\u3002",sources:[__,{title:"\u6570\u5B57\u6566\u714C\uFF5C\u7B2C329\u7A9F\u6D1E\u7A9F\u6863\u6848",url:"https://www.e-dunhuang.com/cave/10.0001/0001.0001.0329"},{title:"\u6E05\u534E\u5927\u5B66\u7F8E\u672F\u56FE\u4E66\u9986\uFF5C\u7B2C329\u7A9F\u516C\u5F00\u56FE\u7248",url:"https://lib.tsinghua.edu.cn/arts/info/1034/2018.htm"}]},407:{question:"\u4E09\u53EA\u5154\u5B50\uFF0C\u4E3A\u4EC0\u4E48\u53EA\u6709\u4E09\u53EA\u8033\u6735\uFF1F",era:"\u968B\u4EE3 \xB7 \u83AB\u9AD8\u7A9F\u7B2C407\u7A9F",period:"\u968B 581\u2014618\u5E74 \xB7 \u672C\u7A9F\u5F00\u51FF\u4E8E\u968B\u4EE3",lede:"\u4E4D\u770B\u6BCF\u53EA\u5154\u5B50\u90FD\u6709\u4E24\u53EA\u8033\u6735\uFF0C\u4ED4\u7EC6\u6570\u5374\u53EA\u6709\u4E09\u53EA\u3002\u76F8\u90BB\u4E24\u5154\u5171\u7528\u4E00\u8033\uFF0C\u4E09\u4E2A\u5154\u8EAB\u8FDE\u6210\u8FFD\u9010\u7684\u5706\u73AF\u3002",context:"\u8FD9\u5E45\u85FB\u4E95\u4F4D\u4E8E\u8986\u6597\u5F62\u7A9F\u9876\u4E2D\u592E\u3002\u4E09\u5154\u5C45\u83B2\u5FC3\uFF0C\u5916\u6709\u56DB\u5C42\u516B\u74E3\u83B2\u82B1\u4E0E\u516B\u8EAB\u98DE\u5929\uFF0C\u89C6\u7EBF\u4ECE\u4E2D\u5FC3\u7684\u5DE7\u601D\uFF0C\u4E00\u76F4\u5EF6\u4F38\u5230\u5C42\u5C42\u8FB9\u9970\u3002",plate:"\u8FD9\u91CC\u4F7F\u7528\u6BB5\u6587\u6770\u3001\u674E\u590D1954\u5E74\u7684\u4E34\u6479\u4F5C\u54C1\uFF1B\u968B\u4EE3\u662F\u539F\u4F5C\u5E74\u4EE3\uFF0C1954\u5E74\u662F\u4E34\u6479\u5E74\u4EE3\u3002",image:"assets/cave407-core.webp",credit:"1954\u5E74\u4E34\u6479 \xB7 \u6BB5\u6587\u6770\u3001\u674E\u590D \xB7 \u6566\u714C\u7814\u7A76\u9662\u85CF \xB7 \u4E2D\u56FD\u7F8E\u672F\u9986\u516C\u5F00",details:[{name:"\u5148\u6570\u4E09\u53EA\u5171\u7528\u8033",text:"\u4E09\u8033\u56F4\u6210\u4E09\u89D2\u5F62\uFF0C\u6BCF\u4E00\u8033\u7531\u76F8\u90BB\u4E24\u5154\u5171\u7528\u3002\u5B83\u7684\u8DA3\u5473\u9996\u5148\u6765\u81EA\u53EF\u89C2\u5BDF\u7684\u6784\u56FE\u5173\u7CFB\u3002",point:[.5,.505]},{name:"\u4E09\u5154\u4E4B\u5916\uFF0C\u83B2\u82B1\u5C42\u5C42\u5F00",text:"\u56DB\u5C42\u516B\u74E3\u83B2\u82B1\u73AF\u7ED5\u4E09\u5154\u3002\u7531\u5185\u5F80\u5916\u770B\uFF0C\u82B1\u74E3\u7684\u65B9\u5411\u4E0E\u989C\u8272\u4EA4\u66FF\uFF0C\u6784\u6210\u73AF\u7ED5\u7684\u8282\u594F\u3002",point:[.5,.36]},{name:"\u518D\u627E\u516B\u8EAB\u98DE\u5929",text:"\u4E95\u5FC3\u4E2D\u7684\u516B\u8EAB\u98DE\u5929\u59FF\u6001\u5404\u5F02\uFF0C\u8863\u5E26\u6CBF\u83B2\u82B1\u5468\u56F4\u56DE\u8F6C\uFF0C\u4E0E\u4E2D\u592E\u4E09\u5154\u76F8\u4E92\u547C\u5E94\u3002",point:[.3,.36]}],compare:"\u4E09\u5154\u5171\u8033\u5C45\u4E2D\uFF0C\u83B2\u82B1\u3001\u98DE\u5929\u5C42\u5C42\u73AF\u7ED5\u3002",comparisonLabel:"\u4ECE\u4E09\u5154\uFF0C\u770B\u5171\u7528\u5F62",modern:"1954\u5E74\uFF0C\u6BB5\u6587\u6770\u4E0E\u674E\u590D\u5C06\u7B2C407\u7A9F\u85FB\u4E95\u4E34\u6479\u4E3A\u7ED8\u753B\u4F5C\u54C1\uFF0C\u4F5C\u54C1\u73B0\u85CF\u6566\u714C\u7814\u7A76\u9662\u3002\u4ECA\u5929\u5728\u5C4F\u5E55\u4E0A\u89C2\u770B\u7684\u8FD9\u4E00\u56FE\u7248\uFF0C\u5448\u73B0\u7684\u662F\u8FD9\u4EF6\u4E34\u6479\u4F5C\u54C1\u3002",sources:[y_,M_],note:"\u4E09\u5154\u56FE\u6848\u7684\u6765\u6E90\u4E0E\u5BD3\u610F\u4ECD\u6709\u7814\u7A76\u8BA8\u8BBA\u3002\u7F51\u7AD9\u4FDD\u7559\u53EF\u8FA8\u8BA4\u7684\u5171\u8033\u7ED3\u6784\uFF0C\u9999\u6302\u4E2D\u7684\u201C\u76F8\u4F34\u201D\u7B49\u795D\u613F\u5C5E\u4E8E\u6211\u4EEC\u7684\u5F53\u4EE3\u5BC4\u610F\u3002"},390:{question:"\u987A\u7740\u679D\u830E\uFF0C\u627E\u627E\u5468\u56F4\u7684\u5C0F\u83B2\u82B1\u3002",era:"\u968B\u4EE3\u665A\u671F \xB7 \u83AB\u9AD8\u7A9F\u7B2C390\u7A9F",period:"\u968B 581\u2014618\u5E74 \xB7 \u672C\u7A9F\u5F00\u51FF\u4E8E\u968B\u4EE3\u665A\u671F",lede:"\u4ECE\u4E2D\u592E\u5927\u83B2\u82B1\u51FA\u53D1\uFF0C\u6CBF\u76D8\u66F2\u7684\u830E\u7EBF\u770B\u4E00\u5708\uFF1A\u5341\u4E8C\u6735\u5C0F\u83B2\u5F7C\u6B64\u76F8\u8FDE\u3002\u8FD9\u91CC\u7684\u4E3B\u89D2\uFF0C\u662F\u690D\u7269\u672C\u8EAB\u7684\u751F\u957F\u59FF\u6001\u3002",context:"\u4E2D\u592E\u662F\u91CD\u74E3\u4E5D\u74E3\u5927\u83B2\u82B1\uFF0C\u56DB\u5468\u4EE5\u76D8\u830E\u4E32\u8054\u5C0F\u83B2\u3002\u4E0E\u5E38\u89C1\u7684\u7AE5\u5B50\u3001\u98DE\u5929\u6216\u5B9D\u73E0\u4E95\u5FC3\u4E0D\u540C\uFF0C\u8FD9\u4E00\u7A9F\u66F4\u7740\u91CD\u8868\u73B0\u82B1\u5F62\uFF0C\u80FD\u770B\u5230\u968B\u4EE3\u85FB\u4E95\u7684\u53E6\u4E00\u79CD\u9762\u8C8C\u3002",plate:"\u5F53\u524D\u56FE\u7248\u53EA\u5C55\u793A\u4E95\u5FC3\uFF0C\u5916\u56F4\u5E37\u5E54\u6CA1\u6709\u5305\u542B\u5728\u5185\uFF1B\u7AD9\u5185\u4E0D\u4F1A\u628A\u672A\u663E\u793A\u7684\u90E8\u5206\u5F53\u4F5C\u539F\u56FE\u8865\u5168\u3002",image:"assets/cave390-core.webp",credit:"\u4E95\u5FC3\u516C\u5F00\u56FE\u7248 \xB7 \u6E05\u534E\u5927\u5B66\u7F8E\u672F\u56FE\u4E66\u9986",details:[{name:"\u4E5D\u74E3\u91CD\u83B2\uFF0C\u5148\u627E\u5230\u4E2D\u5FC3",text:"\u4E2D\u592E\u5927\u83B2\u5448\u4E5D\u5411\u653E\u5C04\uFF0C\u82B1\u74E3\u5185\u5916\u76F8\u53E0\u3002\u5B83\u4E0E\u7B2C329\u7A9F\u7684\u5341\u56DB\u5377\u74E3\uFF0C\u5177\u6709\u4E0D\u540C\u7684\u8282\u594F\u3002",point:[.5,.5]},{name:"\u5341\u4E8C\u6735\u5C0F\u83B2\uFF0C\u600E\u6837\u8FDE\u8D77\u6765",text:"\u5C0F\u83B2\u901A\u8FC7\u76D8\u66F2\u7684\u830E\u7EBF\u8FDE\u6210\u4E00\u7247\u3002\u628A\u5B83\u770B\u4F5C\u8FDE\u7EED\u7684\u690D\u7269\u7F51\u7EDC\uFF0C\u6BD4\u9010\u6735\u770B\u82B1\u66F4\u5BB9\u6613\u8BFB\u61C2\u6574\u4F53\u3002",point:[.54,.1]},{name:"\u679D\u53F6\u4E5F\u628A\u56DB\u89D2\u63A5\u4F4F",text:"\u56DB\u89D2\u7684\u82B1\u3001\u53F6\u4E0E\u76D8\u830E\u5EF6\u7EED\u6574\u5E45\u690D\u7269\u6784\u56FE\uFF0C\u8FDE\u63A5\u65B9\u5F62\u8FB9\u754C\u548C\u5706\u5F62\u5927\u83B2\u3002",point:[.14,.14]}],compare:"\u4E5D\u74E3\u91CD\u83B2\u5C45\u4E2D\uFF0C\u76D8\u830E\u8FDE\u63A5\u5341\u4E8C\u6735\u5C0F\u83B2\u3002",comparisonLabel:"\u987A\u7740\u679D\u830E\uFF0C\u770B\u8FDE\u63A5",modern:"\u6570\u5B57\u6566\u714C\u8BB0\u5F55\u672C\u7A9F\u5F00\u51FF\u4E8E\u968B\u4EE3\u665A\u671F\uFF0C\u6D1E\u7A9F\u540E\u6765\u8FD8\u7ECF\u5386\u8FC7\u91CD\u4FEE\u3002\u6D1E\u7A9F\u7684\u5EFA\u9020\u5E74\u4EE3\u3001\u540E\u671F\u91CD\u4FEE\u4E0E\u4ECA\u5929\u56FE\u7248\u7684\u5236\u4F5C\uFF0C\u662F\u9700\u8981\u5206\u5F00\u8BA4\u8BC6\u7684\u51E0\u5C42\u65F6\u95F4\u3002",sources:[x_,v_]}};var ic=[{title:"\u6566\u714C\u7814\u7A76\u9662\uFF5C\u7B2C57\u7A9F\uFF1A\u5EFA\u7B51\u5F62\u5F0F\u4E0E\u98DE\u5929\u4F9B\u517B",url:"https://www.dha.ac.cn/info/1425/3695.htm"},{title:"\u6566\u714C\u7814\u7A76\u9662\uFF5C\u968B\u4EE3\u58C1\u753B\u5149\u8272\u8868\u73B0\u7684\u8BB2\u5EA7\u6458\u8981",url:"https://www.dha.ac.cn/info/1109/2547.htm"}],sc={407:{takeaway:"\u4E09\u5154\u5171\u7528\u4E09\u8033\uFF0C\u83B2\u82B1\u4E0E\u98DE\u5929\u4E00\u8D77\u56DE\u65CB\u3002",facts:[["\u539F\u4F5C\u65F6\u4EE3","\u968B\u4EE3"],["\u83B2\u82B1\u7ED3\u6784","\u56DB\u5C42 \xB7 \u516B\u74E3"],["\u4E95\u5FC3\u98DE\u5929","\u516B\u8EAB"],["\u4E2D\u5FC3\u5DE7\u601D","\u4E09\u5154 \xB7 \u4E09\u8033"]],chapters:[{title:"\u5148\u628A\u5B83\u653E\u56DE\u968B\u4EE3\u7684\u6D1E\u7A9F",text:"407\u7A9F\u4E3B\u5BA4\u4E3A\u8986\u6597\u9876\uFF0C\u56DB\u62AB\u7ED8\u6709\u5343\u4F5B\u4E0E\u5782\u5E54\uFF0C\u897F\u58C1\u8BBE\u5185\u5916\u4E24\u5C42\u4F5B\u9F9B\u3002\u4E09\u5154\u85FB\u4E95\u5728\u8FD9\u5957\u793C\u4F5B\u7A7A\u95F4\u7684\u9876\u90E8\uFF0C\u548C\u5468\u56F4\u58C1\u753B\u3001\u4F5B\u9F9B\u5171\u540C\u6784\u6210\u89C2\u770B\u73AF\u5883\u3002"},{title:"\u83B2\u82B1\u4E0E\u98DE\u5929\uFF0C\u4E3A\u4EC0\u4E48\u76F8\u4F34",text:"\u83B2\u82B1\u662F\u4F5B\u6559\u827A\u672F\u4E2D\u7684\u91CD\u8981\u5F62\u8C61\u3002\u6B64\u7A9F\u98DE\u5929\u6216\u6301\u82B1\u3001\u6216\u6258\u82B1\u76D8\u3001\u6216\u6367\u9999\u7089\uFF0C\u56F4\u7ED5\u83B2\u82B1\u98DE\u884C\uFF1B\u8FD9\u4E9B\u59FF\u6001\u53EF\u4EE5\u8054\u7CFB\u4F9B\u517B\u6D3B\u52A8\u6765\u7406\u89E3\u3002\u8863\u5E26\u4E0E\u4E91\u6C14\u4E5F\u8BA9\u753B\u9762\u6709\u4E86\u5171\u540C\u7684\u65B9\u5411\u3002"},{title:"\u5171\u8033\u7684\u5DE7\u601D\uFF0C\u548C\u4ECA\u5929\u7684\u5BC4\u610F",text:"\u4E09\u53EA\u8033\u6735\u7EC4\u6210\u7B49\u8FB9\u4E09\u89D2\u5F62\uFF0C\u76F8\u90BB\u4E24\u5154\u5171\u7528\u4E00\u8033\uFF0C\u662F\u80FD\u4ECE\u753B\u9762\u786E\u8BA4\u7684\u7ED3\u6784\u3002\u5B83\u7684\u6E90\u6D41\u548C\u5BD3\u610F\u4ECD\u6709\u8BA8\u8BBA\uFF1B\u9999\u6302\u4E2D\u7684\u201C\u76F8\u4F34\u3001\u5171\u4EAB\u201D\u662F\u672C\u9879\u76EE\u7684\u5F53\u4EE3\u5BC4\u610F\uFF0C\u4E0D\u662F\u5DF2\u786E\u5B9A\u7684\u53E4\u4EE3\u552F\u4E00\u542B\u4E49\u3002"}],eraNote:"\u968B\u4EE3\u4E3A581\u2014618\u5E74\u3002\u8FD9\u91CC\u6807\u6CE8\u671D\u4EE3\u8303\u56F4\uFF0C\u4E0D\u5C06\u5B83\u5F53\u4F5C407\u7A9F\u7684\u5177\u4F53\u5F00\u7A9F\u5E74\u4EFD\u3002",outer:"\u83F1\u683C\u83B2\u82B1\u7EB9\u4E0E\u5782\u5E54\u5C42\u5C42\u56F4\u5408\uFF0C\u758F\u5BC6\u4EA4\u66FF\u3002",culture:"\u52A8\u7269\u7EB9\u7684\u5171\u8033\u5DE7\u601D\uFF0C\u4E0E\u83B2\u82B1\u3001\u98DE\u5929\u4F9B\u517B\u5171\u5B58\u3002",motion:"\u5154\u5B50\u3001\u98DE\u5929\u548C\u5929\u82B1\u540C\u5411\u56DE\u65CB\uFF0C\u5E26\u52A8\u6574\u65B9\u4E95\u5FC3\u3002",center:"\u4E09\u5154\u7F6E\u4E8E\u56DB\u5C42\u516B\u74E3\u83B2\u82B1\u4E2D\u592E\uFF0C\u4E09\u8033\u7EC4\u6210\u4E09\u89D2\u5F62\u3002",rhythm:"\u7531\u5C0F\u5C0F\u83B2\u5FC3\u5411\u5916\u5C42\u5C42\u6269\u5C55\uFF0C\u518D\u88AB\u65B9\u5F62\u8FB9\u9970\u6536\u62E2\u3002"},390:{takeaway:"\u4E5D\u74E3\u5927\u83B2\u5C45\u4E2D\uFF0C\u76D8\u66F2\u82B1\u830E\u4E32\u8D77\u5341\u4E8C\u6735\u5C0F\u83B2\u3002",facts:[["\u539F\u4F5C\u65F6\u4EE3","\u968B\u4EE3\u665A\u671F"],["\u4E2D\u592E\u83B2\u82B1","\u91CD\u74E3 \xB7 \u4E5D\u74E3"],["\u5916\u56F4\u5C0F\u83B2","\u5341\u4E8C\u6735"],["\u4E3B\u8981\u7EBF\u7D22","\u76D8\u830E\u76F8\u8FDE"]],chapters:[{title:"\u540C\u5C5E\u968B\u4EE3\uFF0C\u4E5F\u6709\u53E6\u4E00\u79CD\u9762\u8C8C",text:"390\u7A9F\u5F00\u51FF\u4E8E\u968B\u4EE3\u665A\u671F\uFF0C\u4E3B\u5BA4\u91C7\u7528\u8986\u6597\u9876\uFF0C\u897F\u58C1\u8BBE\u4F5B\u9F9B\uFF0C\u56DB\u62AB\u7ED8\u5343\u4F5B\u3002\u6570\u5B57\u6566\u714C\u8BB0\u8F7D\u6D1E\u7A9F\u540E\u6765\u66FE\u7ECF\u91CD\u4FEE\uFF1B\u5F00\u7A9F\u3001\u91CD\u4FEE\u4E0E\u4ECA\u5929\u56FE\u7248\u7684\u5236\u4F5C\uFF0C\u9700\u8981\u5206\u5F00\u8BA4\u8BC6\u3002"},{title:"\u628A\u82B1\u4E0E\u679D\u53F6\u653E\u5230\u4E2D\u5FC3",text:"\u91CD\u74E3\u4E5D\u74E3\u5927\u83B2\u7684\u56DB\u5468\uFF0C\u76D8\u830E\u8FDE\u63A5\u5341\u4E8C\u6735\u5C0F\u83B2\u3002\u4E95\u5FC3\u4E0E\u56DB\u89D2\u6CA1\u6709\u5E38\u89C1\u7684\u5316\u751F\u7AE5\u5B50\u3001\u98DE\u5929\u6216\u5B9D\u73E0\uFF0C\u7740\u91CD\u8868\u73B0\u82B1\u5F62\u3002\u8FD9\u8BF4\u7684\u662F\u4E95\u5FC3\u6784\u56FE\uFF0C\u4E0D\u4EE3\u8868390\u7A9F\u5176\u4ED6\u90E8\u4F4D\u6CA1\u6709\u98DE\u5929\u3002"},{title:"\u4ECE\u82B1\u830E\uFF0C\u518D\u770B\u5230\u5E37\u5E54",text:"\u6587\u732E\u8FD8\u4ECB\u7ECD\u4E86\u52A0\u5BBD\u7684\u5E37\u5E54\u9576\u8FB9\u3001\u83B2\u82B1\u8054\u73E0\u7EB9\u4E0E\u5BCC\u6709\u8D28\u611F\u7684\u8936\u7EB9\u3002\u672C\u9875\u56FE\u7248\u53EA\u5C55\u793A\u4E95\u5FC3\uFF0C\u5916\u56F4\u672A\u5448\u73B0\uFF1B\u9999\u6302\u4E2D\u76F8\u5173\u8FB9\u9970\u4F9D\u636E\u6587\u5B57\u8D44\u6599\u4F5C\u8BBE\u8BA1\u8F6C\u8BD1\uFF0C\u5E76\u6807\u660E\u6765\u6E90\u3002"}],eraNote:"\u91C7\u7528\u6570\u5B57\u6566\u714C\u672C\u7A9F\u6863\u6848\u7684\u201C\u968B\u4EE3\u665A\u671F\u201D\u65AD\u4EE3\uFF0C\u4E0D\u8865\u5199\u672A\u7ECF\u786E\u8BA4\u7684\u5177\u4F53\u5F00\u7A9F\u5E74\u3002",outer:"\u5916\u56F4\u5E37\u5E54\u9576\u8FB9\u52A0\u5BBD\uFF0C\u9970\u83B2\u82B1\u8054\u73E0\u7EB9\uFF1B\u672C\u9875\u56FE\u7248\u672A\u5305\u542B\u3002",culture:"\u5728\u4F5B\u6559\u6D1E\u7A9F\u91CC\uFF0C\u4EE5\u83B2\u82B1\u672C\u8EAB\u7684\u5F62\u6001\u6210\u4E3A\u4E95\u5FC3\u4E3B\u89D2\u3002",motion:"\u5927\u5C0F\u82B1\u91CD\u590D\u3001\u76D8\u830E\u8FDE\u7EED\u76F8\u63A5\uFF0C\u5448\u73B0\u690D\u7269\u5F0F\u7684\u8282\u594F\u3002",center:"\u91CD\u74E3\u4E5D\u74E3\u5927\u83B2\u4E3A\u5FC3\uFF0C\u5468\u56F4\u76D8\u830E\u7F00\u5341\u4E8C\u6735\u5C0F\u83B2\u3002",rhythm:"\u5927\u82B1\u3001\u5C0F\u82B1\u4E0E\u830E\u53F6\u76F8\u8FDE\uFF0C\u5728\u65B9\u5F62\u8303\u56F4\u5185\u5F62\u6210\u8FDE\u7EED\u753B\u9762\u3002"},329:{takeaway:"\u5341\u56DB\u5377\u74E3\u4E0E\u5377\u4E91\u76F8\u95F4\uFF0C\u56DB\u8EAB\u98DE\u5929\u73AF\u83B2\u800C\u884C\u3002",facts:[["\u539F\u4F5C\u65F6\u4EE3","\u521D\u5510"],["\u4E2D\u5FC3\u8282\u594F","\u5341\u56DB\u5377\u74E3"],["\u4E95\u5FC3\u98DE\u5929","\u56DB\u8EAB"],["\u56DB\u62AB\u4F0E\u4E50\u5929","\u5171\u5341\u4E8C\u8EAB"]],chapters:[{title:"\u653E\u56DE\u521D\u5510\u7684\u51C0\u571F\u56FE\u50CF\u4E2D",text:"329\u7A9F\u5EFA\u4E8E\u521D\u5510\uFF0C\u4E3B\u5BA4\u4E3A\u8986\u6597\u9876\u3002\u5357\u58C1\u963F\u5F25\u9640\u7ECF\u53D8\u7ED8\u6709\u6C60\u6C34\u3001\u697C\u9601\u4E0E\u4E50\u821E\uFF1B\u62AC\u5934\u518D\u770B\u85FB\u4E95\uFF0C\u83B2\u82B1\u4E0E\u98DE\u5929\u4FBF\u4E0E\u56DB\u58C1\u7684\u51C0\u571F\u56FE\u50CF\u8054\u7CFB\u8D77\u6765\u3002\u6570\u5B57\u6566\u714C\u8FD8\u8BB0\u5F55\u4E86\u540E\u4EE3\u91CD\u4FEE\u3002"},{title:"\u4E3A\u4EC0\u4E48\u7528\u84DD\u8272\u886C\u6258\u83B2\u82B1",text:"\u6566\u714C\u7814\u7A76\u9662\u5C06\u6DE1\u84DD\u4E95\u5FC3\u89E3\u91CA\u4E3A\u5929\u7A7A\uFF0C\u5C06\u4E2D\u5FC3\u83B2\u82B1\u8054\u7CFB\u897F\u65B9\u51C0\u571F\u3002\u5341\u56DB\u4E2A\u5377\u74E3\u4E0E\u5341\u56DB\u6735\u5377\u4E91\u76F8\u95F4\uFF0C\u4F7F\u83B2\u82B1\u672C\u8EAB\u4E5F\u6709\u65CB\u8F6C\u611F\uFF1B\u8272\u5F69\u4E0E\u5F62\u72B6\u4E00\u8D77\u8425\u9020\u8FD9\u7247\u60F3\u8C61\u4E2D\u7684\u5929\u7A7A\u3002"},{title:"\u4ECE\u56DB\u8EAB\u98DE\u5929\uFF0C\u770B\u5230\u5341\u4E8C\u8EAB\u4F0E\u4E50\u5929",text:"\u4E95\u5FC3\u56DB\u8EAB\u6267\u82B1\u98DE\u5929\u9006\u65F6\u9488\u73AF\u83B2\u56DE\u65CB\u3002\u518D\u5411\u5916\uFF0C\u56DB\u62AB\u5404\u6709\u4E09\u8EAB\u4F0E\u4E50\u5929\uFF0C\u624B\u6301\u4E50\u5668\u73AF\u7ED5\u85FB\u4E95\u3002\u4E2D\u5FC3\u7684\u82B1\u3001\u6D41\u4E91\u3001\u8863\u5E26\u548C\u5916\u56F4\u4E50\u821E\uFF0C\u5171\u540C\u7EC4\u7EC7\u89C2\u770B\u7684\u65B9\u5411\u3002"}],eraNote:"\u521D\u5510\u662F\u5510\u4EE3\u7684\u4E00\u4E2A\u5206\u671F\u3002\u6D1E\u7A9F\u7684\u540E\u4EE3\u91CD\u4FEE\u8BB0\u5F55\uFF0C\u4E0D\u7B49\u4E8E\u85FB\u4E95\u5168\u90E8\u91CD\u7ED8\uFF1B\u8FD9\u91CC\u4E0D\u4F5C\u8FD9\u79CD\u63A8\u65AD\u3002",outer:"\u5377\u8349\u3001\u8054\u73E0\u3001\u5782\u89D2\u4E0E\u5E37\u5E54\u4E4B\u5916\uFF0C\u56DB\u62AB\u7ED8\u5341\u4E8C\u8EAB\u4F0E\u4E50\u5929\u3002",culture:"\u84DD\u5E95\u8054\u7CFB\u5929\u7A7A\uFF0C\u83B2\u82B1\u8054\u7CFB\u51C0\u571F\uFF0C\u4E50\u821E\u98DE\u5929\u5448\u73B0\u4F9B\u517B\u3002",motion:"\u98DE\u5929\u8863\u5E26\u4E0E\u5377\u4E91\u5171\u540C\u9006\u65F6\u9488\u56DE\u65CB\uFF0C\u5185\u5916\u5F7C\u6B64\u547C\u5E94\u3002",center:"\u5341\u56DB\u5377\u74E3\u4E0E\u5341\u56DB\u6735\u5377\u4E91\u4EA4\u66FF\u73AF\u7ED5\u83B2\u5FC3\u3002",rhythm:"\u653E\u5C04\u7684\u83B2\u82B1\u3001\u56DB\u8EAB\u98DE\u5929\u4E0E\u56DB\u89D2\u56E2\u82B1\uFF0C\u8FDE\u63A5\u4E2D\u5FC3\u548C\u65B9\u9685\u3002"}},rc=[{key:"center",label:"\u4E2D\u5FC3\u753B\u4EC0\u4E48",title:"\u5148\u770B\u4E2D\u5FC3\uFF0C\u4E09\u7A9F\u5404\u6709\u4E3B\u89D2\u3002",summary:"407\u7A9F\u5148\u5438\u5F15\u4F60\u770B\u4E09\u5154\uFF0C390\u7A9F\u770B\u5927\u83B2\u4E0E\u5C0F\u83B2\uFF0C329\u7A9F\u770B\u5377\u74E3\u548C\u5377\u4E91\u3002\u90FD\u753B\u83B2\u82B1\uFF0C\u5374\u9009\u62E9\u4E86\u4E0D\u540C\u7684\u89C6\u89C9\u4E2D\u5FC3\u3002"},{key:"rhythm",label:"\u753B\u9762\u600E\u6837\u7EC4\u7EC7",title:"\u540C\u662F\u65B9\u5F62\u4E95\u5FC3\uFF0C\u7EC4\u7EC7\u65B9\u5F0F\u4E0D\u540C\u3002",summary:"\u53EF\u4EE5\u6BD4\u8F83\u5C42\u5C42\u5305\u56F4\u3001\u690D\u7269\u8FDE\u7EED\u548C\u4E2D\u5FC3\u653E\u5C04\u4E09\u79CD\u89C2\u770B\u7EBF\u7D22\u3002\u5B83\u4EEC\u662F\u672C\u9879\u76EE\u5BF9\u753B\u9762\u7ED3\u6784\u7684\u89C2\u5BDF\uFF0C\u4E0D\u662F\u56FA\u5B9A\u7684\u65F6\u4EE3\u5206\u7C7B\u3002"},{key:"motion",label:"\u52A8\u611F\u4ECE\u54EA\u6765",title:"\u52A8\u611F\u53EF\u4EE5\u6765\u81EA\u8FFD\u9010\uFF0C\u4E5F\u53EF\u4EE5\u6765\u81EA\u8FDE\u63A5\u3002",summary:"407\u7A9F\u7684\u52A8\u7269\u4E0E\u98DE\u5929\u540C\u5411\u56DE\u65CB\uFF0C390\u7A9F\u4F9D\u9760\u76D8\u830E\u76F8\u8FDE\uFF0C329\u7A9F\u628A\u5377\u4E91\u3001\u8863\u5E26\u4E0E\u98DE\u5929\u7684\u65B9\u5411\u7ED3\u5408\u8D77\u6765\u3002"},{key:"outer",label:"\u5916\u56F4\u5982\u4F55\u6536\u675F",title:"\u522B\u53EA\u770B\u4E2D\u95F4\uFF0C\u8FB9\u9970\u4E5F\u5728\u7EC4\u7EC7\u7A7A\u95F4\u3002",summary:"\u83F1\u683C\u3001\u5E37\u5E54\u3001\u8054\u73E0\u3001\u5377\u8349\u628A\u4E2D\u5FC3\u56FE\u6848\u8FDE\u63A5\u5230\u7A9F\u9876\u56DB\u62AB\u3002390\u7A9F\u7684\u5916\u56F4\u4F9D\u636E\u6587\u732E\u8BF4\u660E\uFF0C\u5F53\u524D\u4E95\u5FC3\u56FE\u7248\u6CA1\u6709\u663E\u793A\u8FD9\u4E00\u533A\u57DF\u3002"},{key:"culture",label:"\u6587\u5316\u610F\u8C61",title:"\u88C5\u9970\u56FE\u6848\uFF0C\u539F\u672C\u5C5E\u4E8E\u793C\u4F5B\u7A7A\u95F4\u3002",summary:"\u83B2\u82B1\u3001\u98DE\u5929\u3001\u4E91\u6C14\u548C\u5E37\u5E54\u90FD\u9700\u8981\u653E\u56DE\u6D1E\u7A9F\u4E2D\u7406\u89E3\u3002\u9999\u6302\u53EF\u4EE5\u63D0\u53D6\u5F62\u6001\uFF0C\u4F46\u8FD8\u5E94\u4FDD\u7559\u5B83\u4EEC\u5728\u539F\u753B\u4E2D\u7684\u540D\u5B57\u548C\u8BED\u5883\u3002"}],Fu=[{title:"\u6566\u714C\u7814\u7A76\u9662\uFF5C\u673A\u6784\u6CBF\u9769",url:"https://www.dha.ac.cn/jggk/jgsz/zssydw/dhyjy.htm"},{title:"\u4E2D\u56FD\u7F8E\u672F\u9986\uFF5C1954\u5E74\u4E09\u5154\u85FB\u4E95\u4E34\u6479\u4F5C\u54C1",url:"https://www.namoc.cn/namoc/zhanlan/202503/96c51873e97e4de3b930bedbcb8176f8.shtml"},{title:"\u6545\u5BAB\u535A\u7269\u9662\uFF5C20\u4E16\u7EAA90\u5E74\u4EE3\u6566\u714C\u6570\u5B57\u5316\u7814\u7A76",url:"https://www.dpm.org.cn/study_detail/100202.html"},{title:"\u6566\u714C\u7814\u7A76\u9662\uFF5C2006\u5E74\u6570\u5B57\u4E2D\u5FC3\u4E0E2016\u5E74\u8D44\u6E90\u5E93",url:"https://www.dha.ac.cn/info/1194/2351.htm"},{title:"\u6566\u714C\u7814\u7A76\u9662\uFF5C\u6587\u7269\u4FDD\u62A4\u4E0E\u6570\u5B57\u8BB0\u5F55\u5DE5\u4F5C",url:"https://www.dha.ac.cn/info/1018/5733.htm"}],ac=[{year:"\u968B \u2192 \u521D\u5510",short:"\u753B\u5728\u7A9F\u9876",title:"\u5148\u6709\u6D1E\u7A9F\u91CC\u7684\u5F69\u7ED8\u4E0E\u4EF0\u671B\u3002",text:"407\u3001390\u4E0E329\u7A9F\u7684\u85FB\u4E95\uFF0C\u5206\u522B\u6765\u81EA\u968B\u4EE3\u3001\u968B\u4EE3\u665A\u671F\u4E0E\u521D\u5510\u3002\u5B83\u4EEC\u539F\u672C\u4E0E\u4F5B\u9F9B\u3001\u58C1\u753B\u5171\u540C\u6784\u6210\u4F5B\u6559\u7A7A\u95F4\uFF0C\u89C2\u4F17\u662F\u5728\u6D1E\u7A9F\u91CC\u62AC\u5934\u89C2\u770B\u3002",why:"\u4ECA\u5929\u628A\u7EB9\u6837\u5355\u72EC\u63D0\u53D6\u51FA\u6765\u4E4B\u524D\uFF0C\u9700\u8981\u5148\u8BA4\u8BC6\u5B83\u7684\u65F6\u4EE3\u3001\u4F4D\u7F6E\u4E0E\u6587\u5316\u8BED\u5883\u3002",kind:"original"},{year:"1944",short:"\u4FDD\u62A4\u4E0E\u7814\u7A76",title:"\u6709\u4EBA\u7559\u4E0B\u6765\uFF0C\u5F00\u59CB\u957F\u671F\u5B88\u62A4\u3002",text:"\u56FD\u7ACB\u6566\u714C\u827A\u672F\u7814\u7A76\u6240\u6210\u7ACB\uFF0C\u662F\u6566\u714C\u7814\u7A76\u9662\u7684\u524D\u8EAB\u3002\u4FDD\u62A4\u3001\u7814\u7A76\u4E0E\u4E34\u6479\u7B49\u5DE5\u4F5C\u9010\u6E10\u7EC4\u7EC7\u8D77\u6765\uFF1B\u4ECA\u5929\u80FD\u770B\u5230\u7684\u56FE\u50CF\uFF0C\u80CC\u540E\u6709\u957F\u671F\u8BB0\u5F55\u4E0E\u7EF4\u62A4\u3002",why:"\u8FD9\u4E00\u8282\u70B9\u5C5E\u4E8E\u83AB\u9AD8\u7A9F\u6574\u4F53\u4FDD\u62A4\u53F2\uFF0C\u4E0D\u662F\u4E09\u5EA7\u85FB\u4E95\u5404\u81EA\u7684\u4FEE\u590D\u5E74\u4EFD\u3002",kind:"care"},{year:"1954",short:"\u4E34\u6479\u7684\u8BB0\u5F55",title:"\u4E00\u7B14\u4E00\u7B14\uFF0C\u628A\u85FB\u4E95\u8BB0\u5F55\u4E0B\u6765\u3002",text:"\u6BB5\u6587\u6770\u3001\u674E\u590D\u521B\u4F5C\u4E86\u300A\u7B2C407\u7A9F\u4E09\u5154\u98DE\u5929\u85FB\u4E95\u300B\u4E34\u6479\u4F5C\u54C1\uFF0C\u73B0\u85CF\u6566\u714C\u7814\u7A76\u9662\u3002\u672C\u7F51\u7AD9407\u7A9F\u4E3B\u56FE\u91C7\u7528\u8FD9\u4EF6\u4E34\u6479\u4F5C\u54C1\u7684\u516C\u5F00\u56FE\u7248\u3002",why:"\u968B\u4EE3\u662F\u85FB\u4E95\u539F\u4F5C\u5E74\u4EE3\uFF0C1954\u5E74\u662F\u4E34\u6479\u4F5C\u54C1\u5E74\u4EE3\u3002\u4E34\u6479\u548C\u7167\u7247\u662F\u4E0D\u540C\u7684\u8BB0\u5F55\u65B9\u5F0F\u3002",kind:"copy"},{year:"1993\u20141996",short:"\u6570\u5B57\u5316\u63A2\u7D22",title:"\u4ECE\u76F8\u673A\u548C\u626B\u63CF\uFF0C\u63A2\u7D22\u6570\u5B57\u6863\u6848\u3002",text:"\u6566\u714C\u58C1\u753B\u8BA1\u7B97\u673A\u5B58\u8D2E\u4E0E\u7BA1\u7406\u7CFB\u7EDF\u7814\u7A76\u4EE5\u7B2C45\u7A9F\u4E3A\u8BD5\u70B9\uFF0C\u63A2\u7D22\u6444\u5F71\u6D4B\u91CF\u3001\u626B\u63CF\u3001\u51E0\u4F55\u6821\u6B63\u548C\u8272\u5F69\u5904\u7406\u3002\u6570\u5B57\u5316\u7684\u8D77\u70B9\uFF0C\u662F\u5C3D\u53EF\u80FD\u6E05\u695A\u3001\u5B8C\u6574\u5730\u8BB0\u5F55\u3002",why:"\u8FD9\u91CC\u4ECB\u7ECD\u6574\u4F53\u6570\u5B57\u5316\u8FDB\u7A0B\uFF1B\u8BD5\u70B9\u662F\u7B2C45\u7A9F\uFF0C\u4E0D\u628A\u5B83\u5199\u6210\u672C\u9879\u76EE\u4E09\u7A9F\u7684\u626B\u63CF\u65F6\u95F4\u3002",kind:"digital"},{year:"2006 \u2192 2016",short:"\u4ECE\u4FDD\u5B58\u5230\u5171\u4EAB",title:"\u6570\u5B57\u8BB0\u5F55\uFF0C\u4E5F\u8BA9\u66F4\u591A\u4EBA\u6709\u673A\u4F1A\u770B\u89C1\u3002",text:"2006\u5E74\u6570\u5B57\u4E2D\u5FC3\u6210\u7ACB\uFF0C2014\u5E74\u66F4\u540D\u4E3A\u6587\u7269\u6570\u5B57\u5316\u7814\u7A76\u6240\u30022016\u5E745\u67081\u65E5\uFF0C\u201C\u6570\u5B57\u6566\u714C\u201D\u8D44\u6E90\u5E93\u4E0A\u7EBF\uFF0C\u516C\u4F17\u53EF\u4EE5\u5728\u7EBF\u6D4F\u89C8\u6D1E\u7A9F\u9AD8\u6E05\u56FE\u50CF\u4E0E\u5168\u666F\u3002",why:"\u5728\u7EBF\u5C55\u793A\u62D3\u5C55\u4E86\u89C2\u770B\u7684\u65B9\u5F0F\uFF1B\u56FE\u50CF\u91C7\u96C6\u3001\u4E34\u6479\u3001\u4FDD\u62A4\u4E0E\u7814\u7A76\u4ECD\u5404\u6709\u4F5C\u7528\u3002",kind:"share"},{year:"\u4ECA\u5929 \xB7 \u672C\u63D0\u6848",short:"\u8D70\u8FDB\u65E5\u5E38",title:"\u5148\u8BA4\u8BC6\u6765\u5904\uFF0C\u518D\u505A\u81EA\u5DF1\u7684\u9009\u62E9\u3002",text:"\u4E00\u9685\u5C1D\u8BD5\u628A\u6587\u5316\u5BFC\u89C8\u3001\u56FE\u6848\u5C42\u6B21\u6F14\u793A\u3001\u62FC\u56FE\u548C\u9999\u6302\u7EC4\u5408\u8FDE\u63A5\u8D77\u6765\u3002\u53C2\u4E0E\u8005\u5148\u4E86\u89E3\u7EB9\u6837\uFF0C\u518D\u51B3\u5B9A\u4FDD\u7559\u4EC0\u4E48\u3001\u600E\u6837\u642D\u914D\uFF0C\u6700\u540E\u901A\u8FC7\u5B9E\u4F53\u6253\u6837\u9A8C\u8BC1\u3002",why:"\u56FE\u7248\u3001\u4E34\u6479\u3001\u53C2\u8003\u91CD\u7ED8\u548C\u5F53\u4EE3\u5BC4\u610F\u5206\u522B\u8BF4\u660E\u3002\u5F53\u524D\u662F\u8BFE\u7A0B\u63D0\u6848\u4E0E\u4F53\u9A8C\u539F\u578B\u3002",kind:"design"}],Ou=[["\u8986\u6597\u9876","\u50CF\u5012\u6263\u7684\u65B9\u6597\uFF0C\u56DB\u9762\u659C\u5761\u5411\u4E2D\u592E\u6536\u62E2\u7684\u7A9F\u9876\u3002"],["\u4E95\u5FC3","\u85FB\u4E95\u4E2D\u592E\u7684\u4E3B\u8981\u56FE\u6848\u533A\u57DF\uFF0C\u5728\u8FD9\u4E09\u7A9F\u4E2D\u5448\u65B9\u5F62\u3002"],["\u98DE\u5929","\u4F5B\u6559\u7F8E\u672F\u4E2D\u7684\u5929\u4EBA\u5F62\u8C61\uFF0C\u4EE5\u6563\u82B1\u3001\u6563\u9999\u6216\u594F\u4E50\u7B49\u65B9\u5F0F\u4F9B\u517B\u3002"],["\u7F20\u679D","\u76D8\u66F2\u76F8\u8FDE\u7684\u830E\u7EBF\uFF0C\u628A\u82B1\u4E0E\u53F6\u7EC4\u7EC7\u6210\u8FDE\u7EED\u7EB9\u6837\u3002"],["\u8054\u73E0","\u50CF\u4E00\u4E32\u5706\u73E0\u76F8\u63A5\u7684\u8FDE\u7EED\u8FB9\u9970\u3002"],["\u5E37\u5E54","\u4EE5\u5782\u60AC\u7EC7\u7269\u4E0E\u8936\u7EB9\u4E3A\u610F\u8C61\u7684\u88C5\u9970\uFF0C\u53C2\u4E0E\u56F4\u5408\u9876\u90E8\u7A7A\u95F4\u3002"]];var Bu={329:[{label:"\u521D\u5510\u4E0E\u51C0\u571F",summary:"\u628A\u7A9F\u9876\u548C\u56DB\u58C1\u4E00\u8D77\u770B\uFF0C\u624D\u80FD\u770B\u89C1\u5B8C\u6574\u7684\u51C0\u571F\u56FE\u50CF\u3002",focus:"\u8986\u6597\u9876\u7684\u4E2D\u592E\u4E95\u5FC3",visual:"center",tip:"\u5148\u8BA4\u51FA\u4E2D\u592E\u4E95\u5FC3\uFF0C\u518D\u60F3\u8C61\u62AC\u5934\u770B\u5230\u85FB\u4E95\u3001\u8F6C\u8EAB\u770B\u5230\u56DB\u58C1\u58C1\u753B\u7684\u89C6\u89D2\u3002"},{label:"\u84DD\u5E95\u4E0E\u83B2\u82B1",summary:"\u6DE1\u84DD\u50CF\u5929\u7A7A\uFF0C\u83B2\u82B1\u6307\u5411\u51C0\u571F\u3002",focus:"\u4E2D\u592E\u83B2\u82B1\u4E0E\u6DE1\u84DD\u4E95\u5FC3",visual:"plate",point:[.5,.5],tip:"\u5148\u770B\u4E95\u5FC3\u7684\u84DD\u5E95\uFF0C\u518D\u770B\u56F4\u7ED5\u83B2\u5FC3\u4EA4\u66FF\u51FA\u73B0\u7684\u5377\u74E3\u4E0E\u5377\u4E91\u3002"},{label:"\u98DE\u5929\u4E0E\u4F0E\u4E50",summary:"\u4E95\u5FC3\u6709\u56DB\u8EAB\u6267\u82B1\u98DE\u5929\uFF0C\u5916\u56F4\u56DB\u62AB\u53E6\u6709\u5341\u4E8C\u8EAB\u4F0E\u4E50\u5929\u3002",focus:"\u4ECE\u4E95\u5FC3\u770B\u5411\u56DB\u62AB",visual:"slopes",tip:"\u4E2D\u592E\u662F\u4E95\u5FC3\uFF1B\u7740\u8272\u90E8\u5206\u6307\u5411\u5916\u56F4\u7684\u56DB\u9762\u659C\u5761\u3002\u5341\u4E8C\u8EAB\u4F0E\u4E50\u5929\u5206\u5E03\u5728\u56DB\u62AB\uFF0C\u6BCF\u62AB\u4E09\u8EAB\u3002"}],407:[{label:"\u968B\u4EE3\u4E0E\u793C\u4F5B",summary:"\u4E09\u5154\u85FB\u4E95\u4F4D\u4E8E\u793C\u4F5B\u7A7A\u95F4\u7684\u9876\u90E8\uFF0C\u4E0E\u4F5B\u9F9B\u548C\u58C1\u753B\u76F8\u547C\u5E94\u3002",focus:"\u8986\u6597\u9876\u7684\u4E2D\u592E\u4E95\u5FC3",visual:"center",tip:"\u56FE\u4E2D\u6DF1\u8272\u65B9\u6846\u662F\u4E95\u5FC3\uFF0C\u56DB\u5468\u659C\u62AB\u5411\u8FD9\u91CC\u6536\u62E2\u3002"},{label:"\u83B2\u82B1\u4E0E\u98DE\u5929",summary:"\u56F4\u7ED5\u83B2\u82B1\u7684\u98DE\u5929\u6709\u6301\u82B1\u3001\u6258\u76D8\u548C\u6367\u7089\u7B49\u4F9B\u517B\u59FF\u6001\u3002",focus:"\u83B2\u82B1\u5916\u7684\u98DE\u5929",visual:"plate",detail:2,tip:"\u6CBF\u4E2D\u5FC3\u83B2\u82B1\u5411\u5916\u770B\uFF0C\u6807\u8BB0\u63D0\u793A\u98DE\u5929\u6240\u5728\u7684\u73AF\u7ED5\u533A\u57DF\u3002"},{label:"\u4E09\u5154\u5171\u8033",summary:"\u4E09\u53EA\u5154\u5B50\u5171\u7528\u4E09\u53EA\u8033\u6735\uFF0C\u6BCF\u4E00\u8033\u8FDE\u63A5\u4E24\u53EA\u5154\u5B50\u3002",focus:"\u4E2D\u592E\u7684\u4E09\u5154",visual:"plate",detail:0,tip:"\u4ECE\u4E2D\u592E\u6570\u4E09\u53EA\u8033\u6735\uFF0C\u518D\u987A\u7740\u8033\u6735\u8FFD\u8E2A\u76F8\u90BB\u5154\u5B50\u7684\u5173\u7CFB\u3002"}],390:[{label:"\u968B\u665A\u671F\u4E0E\u6D1E\u7A9F",summary:"\u968B\u4EE3\u665A\u671F\u7684390\u7A9F\uFF0C\u540C\u6837\u5728\u8986\u6597\u9876\u4E2D\u592E\u5E03\u7F6E\u85FB\u4E95\u3002",focus:"\u8986\u6597\u9876\u7684\u4E2D\u592E\u4E95\u5FC3",visual:"center",tip:"\u5148\u8FA8\u8BA4\u9876\u90E8\u4E2D\u592E\u7684\u4F4D\u7F6E\uFF0C\u518D\u628A\u4E95\u5FC3\u653E\u56DE\u4F5B\u9F9B\u4E0E\u58C1\u753B\u56F4\u5408\u7684\u7A7A\u95F4\u3002"},{label:"\u91CD\u83B2\u4E0E\u76D8\u830E",summary:"\u4E5D\u74E3\u5927\u83B2\u5C45\u4E2D\uFF0C\u76D8\u66F2\u7684\u82B1\u830E\u628A\u5341\u4E8C\u6735\u5C0F\u83B2\u8FDE\u5728\u4E00\u8D77\u3002",focus:"\u76D8\u830E\u4E0A\u7684\u5C0F\u83B2\u82B1",visual:"plate",detail:1,tip:"\u4ECE\u6807\u8BB0\u5904\u7684\u5C0F\u83B2\u51FA\u53D1\uFF0C\u987A\u7740\u679D\u830E\u770B\u82B1\u6735\u5982\u4F55\u76F8\u8FDE\u3002"},{label:"\u5E37\u5E54\u4E0E\u8FB9\u9970",summary:"\u4E95\u5FC3\u4E4B\u5916\u8FD8\u6709\u5E37\u5E54\u9576\u8FB9\uFF0C\u6587\u732E\u8BB0\u8F7D\u5176\u4E0A\u9970\u6709\u83B2\u82B1\u8054\u73E0\u7EB9\u3002",focus:"\u4E95\u5FC3\u5916\u56F4\u7684\u88C5\u9970\u4F4D\u7F6E",visual:"slopes",tip:"\u7740\u8272\u90E8\u5206\u7528\u4E8E\u63D0\u793A\u4E95\u5FC3\u5916\u56F4\u3002\u73B0\u6709\u516C\u5F00\u56FE\u7248\u53EA\u5C55\u793A\u4E95\u5FC3\uFF0C\u56FE\u793A\u4E0D\u8FD8\u539F\u5E37\u5E54\u7684\u5177\u4F53\u7EB9\u6837\u3002"}]};var yn=i=>document.querySelector(i),ku=i=>i.map(t=>Math.max(0,Math.min(100,(5*t-.5)/4*100))).join("% ")+"%",b_=i=>[...new Map(i.map(t=>[t.url,t])).values()].map(t=>`<a href="${t.url}" target="_blank" rel="noopener noreferrer">${t.title} \u2197</a>`).join(""),wi=[["meet","\u8BA4\u8BC6\u8FD9\u4E00\u7A9F"],["culture","\u65F6\u4EE3\u4E0E\u6587\u5316"],["compare","\u968B\u5510\u5BF9\u7167"],["today","\u524D\u4E16\u4ECA\u751F"]],S_=(i,t)=>`<svg class="culture-roof" viewBox="0 0 420 286" role="img" aria-label="${i?"\u56DB\u62AB\u53CA\u4E95\u5FC3\u5916\u56F4\u7684\u4F4D\u7F6E":"\u8986\u6597\u9876\u4E2D\u592E\u4E95\u5FC3\u7684\u4F4D\u7F6E"}\u793A\u610F"><path d="M15 14H405V272H15Z" fill="${i?"#d7a88c":"#e5e6d8"}" stroke="#a49e83"/><path d="M15 14L137 87M405 14L283 87M15 272L137 199M405 272L283 199" fill="none" stroke="${i?"#805446":"#9aa38d"}"/><rect x="137" y="87" width="146" height="112" fill="${i?"#f5f0e0":"#234239"}" stroke="${i?"#805446":"#6d8a72"}"/><text x="210" y="148" text-anchor="middle" fill="${i?"#344b40":"#fff8e7"}" font-size="21">\u4E95\u5FC3</text><text x="210" y="244" text-anchor="middle" fill="#294238" font-size="17">\u56DB\u62AB \xB7 \u5411\u4E2D\u592E\u6536\u62E2\u7684\u659C\u9762</text><g transform="translate(${i?"210 49":"262 109"})"><circle r="15" fill="#8c412f" stroke="#fff7e5" stroke-width="2"/><text y="5" text-anchor="middle" fill="#fffaf0" font-size="12" font-weight="700">${t}</text></g></svg>`;function zu({caveId:i,onChange:t,onNavigate:e}){let n=new URL(location.href).searchParams.get("read"),s=i,r=wi.some(u=>u[0]===n)?n:"meet",a=0,o="center",l=0,c=0,d=!1;yn("#collection").insertAdjacentHTML("afterend",`<section id="story" class="heritage"><div class="heritage-heading"><div><p class="eyebrow">\u6587\u5316\u5BFC\u89C8 \xB7 \u4ECE\u4E00\u7A9F\u5F00\u59CB</p><h2>\u5148\u8BA4\u8BC6\u5B83\uFF0C\u518D\u52A8\u624B\u8BD5\u8BD5\u3002</h2></div><label class="heritage-picker">\u5207\u6362\u6D1E\u7A9F<select id="heritageCave" aria-label="\u9009\u62E9\u8981\u4E86\u89E3\u7684\u85FB\u4E95">${un.map(u=>`<option value="${u.id}">\u7B2C${u.id}\u7A9F \xB7 ${u.era}</option>`).join("")}</select></label></div><div class="heritage-tabs" role="tablist" aria-label="\u85FB\u4E95\u6587\u5316\u4ECB\u7ECD">${wi.map(([u,E],y)=>`<button id="heritage-${u}" role="tab" aria-selected="${u===r}" aria-controls="heritagePanel" data-story-tab="${u}"><span>0${y+1}</span> ${E}</button>`).join("")}</div><div id="heritagePanel" role="tabpanel" tabindex="0"></div></section>`),yn("#heritageCave").onchange=u=>{d=!0;try{t(u.target.value)}finally{d=!1}};let h=[...document.querySelectorAll("[data-story-tab]")];function f(u){r=u;let E=new URL(location.href);E.searchParams.set("read",r),history.replaceState(history.state,"",E),_(),yn("#heritagePanel").focus({preventScroll:!0})}h.forEach((u,E)=>{u.onclick=()=>f(u.dataset.storyTab),u.onkeydown=y=>{if(["ArrowLeft","ArrowRight","Home","End"].includes(y.key)){y.preventDefault();let g=y.key==="Home"?0:y.key==="End"?3:(E+(y.key==="ArrowRight"?1:3))%4;f(h[g].dataset.storyTab),h[g].focus()}}});let p=(u,E="\u8D44\u6599\u6765\u6E90")=>`<details class="heritage-sources"><summary>${E} <span>\uFF0B</span></summary><div>${b_(u)}</div></details>`;function _(){let u=ge(s),E=_s[s],y=sc[s],g=yn("#heritagePanel");if(yn("#heritageCave").value=s,h.forEach(w=>{let v=w.dataset.storyTab===r;w.setAttribute("aria-selected",v),w.tabIndex=v?0:-1}),g.setAttribute("aria-labelledby","heritage-"+r),g.scrollTop=0,r==="meet")g.innerHTML=`<div class="heritage-meet"><figure class="heritage-figure"><div class="heritage-plate"><img src="${E.image}" alt="\u7B2C${s}\u7A9F${u.title}\uFF0C${E.credit}">${E.details.map((w,v)=>`<button class="heritage-pin ${v===a?"active":""}" data-detail="${v}" style="left:${w.point[0]*100}%;top:${w.point[1]*100}%" aria-label="\u89C2\u5BDF${w.name}" aria-pressed="${v===a}">${v+1}</button>`).join("")}</div><figcaption>${E.credit}</figcaption><p class="heritage-plate-note">${E.plate}</p></figure><article class="heritage-reading"><p class="heritage-era">\u83AB\u9AD8\u7A9F\u7B2C${s}\u7A9F <span>${u.era}</span></p><h3>${E.question}</h3><p class="heritage-takeaway"><span>\u5148\u8BB0\u4F4F\u8FD9\u4E00\u70B9</span><strong>${y.takeaway}</strong></p><p class="heritage-lede">${E.lede}</p><dl class="heritage-facts">${y.facts.map(([w,v])=>`<div><dt>${w}</dt><dd>${v}</dd></div>`).join("")}</dl><div class="heritage-detail"><p class="heritage-small-label">\u70B9\u6570\u5B57\uFF0C\u653E\u5927\u770B\u7EC6\u8282</p><div class="heritage-detail-choices">${E.details.map((w,v)=>`<button data-detail="${v}" class="${a===v?"active":""}" aria-pressed="${a===v}"><span>${v+1}</span>${w.name}</button>`).join("")}</div><div class="heritage-detail-body"><div class="heritage-detail-crop" id="heritageDetailCrop" role="img" aria-label="${E.details[a].name}\u7684\u56FE\u7248\u5C40\u90E8\u653E\u5927" style="background-image:url('${E.image}');background-position:${ku(E.details[a].point)}"></div><p id="heritageDetailCopy" aria-live="polite">${E.details[a].text}</p></div></div>${p(E.sources)}</article></div>`,g.querySelectorAll("[data-detail]").forEach(w=>w.onclick=()=>{a=+w.dataset.detail,g.querySelectorAll("[data-detail]").forEach(v=>{let I=+v.dataset.detail===a;v.classList.toggle("active",I),v.setAttribute("aria-pressed",I)}),yn("#heritageDetailCopy").textContent=E.details[a].text,yn("#heritageDetailCrop").style.backgroundPosition=ku(E.details[a].point),yn("#heritageDetailCrop").setAttribute("aria-label",E.details[a].name+"\u7684\u56FE\u7248\u5C40\u90E8\u653E\u5927")});else if(r==="culture"){let I=function(){let L=w[c],M=y.chapters[c],x="0"+(c+1),R=L.point||E.details[L.detail]?.point,T=L.visual==="plate"?`<div class="culture-plate-photo"><img src="${E.image}" alt="\u7B2C${s}\u7A9F\u4E95\u5FC3\u56FE\u7248"><span class="culture-map-pin" style="left:${R[0]*100}%;top:${R[1]*100}%" aria-hidden="true">${x}</span></div>`:S_(L.visual==="slopes",x);yn("#cultureReading").innerHTML=`<article class="culture-article" aria-labelledby="cultureTopicTitle"><div class="culture-read-heading"><span class="culture-number">${x}</span><h3 id="cultureTopicTitle">${M.title}</h3></div><p class="culture-keyline"><span>\u5148\u770B\u91CD\u70B9</span><strong>${L.summary}</strong></p><p class="culture-copy">${M.text}</p><div class="culture-look"><strong>\u5BF9\u7167\u56FE\u770B</strong><p>${L.tip}</p></div>${c===0?`<details class="culture-extra culture-era"><summary>\u65F6\u4EE3\u4E0E\u6D1E\u7A9F\u8BF4\u660E</summary><p>\u4E2D\u56FD\u5EFA\u7B51\u9876\u90E8\u7684\u85FB\u4E95\u5F62\u5F0F\u88AB\u5F15\u5165\u4F5B\u6559\u77F3\u7A9F\uFF0C\u4E0E\u83B2\u82B1\u3001\u98DE\u5929\u548C\u5E37\u5E54\u7B49\u56FE\u50CF\u7ED3\u5408\uFF0C\u7EC4\u7EC7\u4EBA\u4EEC\u62AC\u5934\u6240\u89C1\u7684\u7A7A\u95F4\u3002</p><p>${y.eraNote}</p></details>`:""}</article><figure class="culture-visual"><div class="culture-visual-heading"><span class="culture-number">${x}</span><strong>${L.focus}</strong></div><div class="culture-visual-frame">${T}</div><figcaption>${L.visual==="plate"?E.credit:"\u8986\u6597\u9876\u4F4D\u7F6E\u793A\u610F \xB7 \u975E\u6D1E\u7A9F\u6D4B\u7ED8\u56FE"}</figcaption></figure>`,v.forEach((C,U)=>{C.setAttribute("aria-pressed",U===c),C.querySelector(".culture-topic-state").textContent=U===c?"\u2713":"\u203A"})},w=Bu[s];g.innerHTML=`<div class="culture-reader"><div class="culture-reader-head"><span>\u7B2C${s}\u7A9F \xB7 ${u.era}</span><p>\u9009\u62E9\u4E00\u6761\u7EBF\u7D22\uFF0C\u56FE\u793A\u4F1A\u540C\u6B65\u6807\u51FA\u8981\u770B\u7684\u5730\u65B9\u3002</p></div><div class="culture-topic-list" role="group" aria-label="\u9009\u62E9\u65F6\u4EE3\u4E0E\u6587\u5316\u4E3B\u9898">${w.map((L,M)=>`<button type="button" data-culture-topic="${M}" aria-pressed="${M===c}" aria-controls="cultureReading"><span class="culture-number">0${M+1}</span><strong>${L.label}</strong><span class="culture-topic-state" aria-hidden="true">${M===c?"\u2713":"\u203A"}</span></button>`).join("")}</div><div id="cultureReading" class="culture-reading"></div><div class="culture-reference"><details class="culture-extra"><summary>\u770B\u61C2\u8FD9\u4E9B\u8BCD</summary><dl>${Ou.map(([L,M])=>`<div><dt>${L}</dt><dd>${M}</dd></div>`).join("")}</dl></details>${p([...E.sources,...ic])}</div></div>`;let v=[...g.querySelectorAll("[data-culture-topic]")];v.forEach((L,M)=>{L.onclick=()=>{c=M,I()},L.onkeydown=x=>{["ArrowLeft","ArrowRight","Home","End"].includes(x.key)&&(x.preventDefault(),c=x.key==="Home"?0:x.key==="End"?w.length-1:(M+(x.key==="ArrowRight"?1:w.length-1))%w.length,I(),v[c].focus())}}),I()}else if(r==="compare"){let w=rc.find(v=>v.key===o);g.innerHTML=`<div class="heritage-section-intro"><p class="heritage-overline">\u4E24\u4E2A\u968B\u4EE3\u4F8B\u5B50 \xB7 \u4E00\u4E2A\u521D\u5510\u4F8B\u5B50</p><h3>${w.title}</h3><p>${w.summary}</p></div><div class="heritage-dimensions" role="group" aria-label="\u9009\u62E9\u6BD4\u8F83\u7EF4\u5EA6">${rc.map(v=>`<button data-dimension="${v.key}" aria-pressed="${v.key===o}" class="${v.key===o?"active":""}">${v.label}</button>`).join("")}</div><div class="heritage-comparison">${["407","390","329"].map(v=>{let I=ge(v),L=_s[v],M=sc[v];return`<article class="heritage-compare-card"><div class="comparison-era"><strong>${I.era}</strong><span>\u7B2C${v}\u7A9F</span></div><button class="comparison-image" data-compare-cave="${v}" aria-label="\u8BA4\u8BC6\u7B2C${v}\u7A9F${I.title}"><img src="${L.image}" alt="\u7B2C${v}\u7A9F${I.title}\uFF0C${L.credit}" loading="lazy"><span>\u8BA4\u8BC6\u8FD9\u4E00\u7A9F \u2197</span></button><h4>${I.title}</h4><p class="comparison-finding">${M[o]}</p><small>${v==="407"?"\u56FE\u793A\u4E3A1954\u5E74\u4E34\u6479\u4F5C\u54C1":"\u56FE\u793A\u4E3A\u516C\u5F00\u4E95\u5FC3\u56FE\u7248"}</small></article>`}).join("")}</div><aside class="heritage-comparison-note"><strong>\u968B\u5510\u7684\u53D8\u5316\uFF0C\u600E\u6837\u770B\u624D\u51C6\u786E\uFF1F</strong><p>407\u7A9F\u4E0E390\u7A9F\u540C\u5C5E\u968B\u4EE3\uFF0C\u5374\u5DF2\u5206\u522B\u7A81\u51FA\u52A8\u7269\u5171\u8033\u4E0E\u76D8\u830E\u82B1\u5F62\u3002\u521D\u5510329\u7A9F\u53C8\u4EE5\u5377\u4E91\u3001\u8863\u5E26\u548C\u4E50\u821E\u7EC4\u7EC7\u56DE\u65CB\u3002\u968B\u4EE3\u4E5F\u6709\u9C9C\u660E\u7684\u5149\u8272\u8868\u73B0\uFF0C\u4E0D\u80FD\u7B80\u5355\u6982\u62EC\u4E3A\u201C\u968B\u6734\u7D20\u3001\u5510\u534E\u4E3D\u201D\u3002<b>\u8FD9\u91CC\u6BD4\u8F83\u7684\u662F\u4E09\u5EA7\u6D1E\u7A9F\uFF0C\u4E0D\u4EE3\u8868\u4E24\u4E2A\u65F6\u4EE3\u7684\u5168\u90E8\u9762\u8C8C\u3002</b></p></aside>${p([..._s[407].sources,..._s[390].sources,..._s[329].sources,...ic],"\u6BD4\u8F83\u4F9D\u636E")}`,g.querySelectorAll("[data-dimension]").forEach(v=>v.onclick=()=>{o=v.dataset.dimension,_(),g.querySelector(`[data-dimension="${o}"]`).focus({preventScroll:!0})}),g.querySelectorAll("[data-compare-cave]").forEach(v=>v.onclick=()=>{v.dataset.compareCave===s?f("meet"):t(v.dataset.compareCave)})}else{let w=ac[l],v=w.kind==="original"?`<figure class="history-image"><img src="${s==="407"?u.original:E.image}" alt="${s==="407"?"\u7B2C407\u7A9F\u58C1\u753B\u539F\u72B6\u4E95\u5FC3\u5C40\u90E8\uFF0C\u6566\u714C\u7814\u7A76\u9662\u4F9B\u56FE":E.credit}"><figcaption>${s==="407"?"\u7B2C407\u7A9F\u58C1\u753B\u539F\u72B6\u4E95\u5FC3\u5C40\u90E8\uFF0C\u4E0E\u4E3B\u56FE\u4E34\u6479\u4F5C\u54C1\u7684\u8303\u56F4\u4E0D\u540C\u3002":E.credit}</figcaption></figure>`:w.kind==="copy"?'<figure class="history-image"><img src="assets/cave407-core.webp" alt="\u6BB5\u6587\u6770\u3001\u674E\u590D1954\u5E74\u7B2C407\u7A9F\u4E09\u5154\u98DE\u5929\u85FB\u4E95\u4E34\u6479\u4F5C\u54C1"><figcaption>\u6BB5\u6587\u6770\u3001\u674E\u590D \xB7 \u7B2C407\u7A9F\u4E09\u5154\u98DE\u5929\u85FB\u4E95 \xB7 1954\u5E74\u4E34\u6479 \xB7 \u6566\u714C\u7814\u7A76\u9662\u85CF</figcaption></figure>':w.kind==="design"?`<figure class="history-image history-design"><svg viewBox="-150 -150 300 300" role="img" aria-label="\u7B2C${s}\u7A9F${u.title}\u5143\u7D20\u7684\u9999\u6302\u5E73\u9762\u518D\u8BBE\u8BA1">${Qn(u.defaultCenter,u.palettes[2].colors)}</svg><figcaption>\u7B2C${s}\u7A9F\u5143\u7D20 \xB7 \u672C\u9879\u76EE\u5E73\u9762\u518D\u8BBE\u8BA1</figcaption></figure>`:`<div class="history-methods">${(w.kind==="care"?[["\u4FDD\u62A4","\u5173\u6CE8\u58C1\u753B\u4E0E\u6D1E\u7A9F\u7684\u4FDD\u5B58"],["\u7814\u7A76","\u8FA8\u8BA4\u56FE\u50CF\u4E0E\u5386\u53F2\u4FE1\u606F"],["\u4E34\u6479","\u901A\u8FC7\u89C2\u5BDF\u548C\u624B\u7ED8\u8BB0\u5F55"]]:[["\u91C7\u96C6","\u8BB0\u5F55\u56FE\u50CF\u4E0E\u7A7A\u95F4\u4FE1\u606F"],["\u6574\u7406","\u6821\u6B63\u3001\u62FC\u63A5\u4E0E\u5EFA\u7ACB\u6863\u6848"],["\u5C55\u793A","\u4E3A\u7814\u7A76\u548C\u516C\u4F17\u89C2\u770B\u63D0\u4F9B\u5165\u53E3"]]).map(([I,L],M)=>`<div><span>0${M+1}</span><strong>${I}</strong><p>${L}</p></div>`).join("")}</div>`;g.innerHTML=`<div class="heritage-section-intro history-intro"><div><p class="heritage-overline">\u524D\u4E16\u4ECA\u751F \xB7 ${E.era}</p><h3>\u4ECA\u5929\u80FD\u770B\u6E05\u4E00\u7B14\uFF0C<br>\u80CC\u540E\u662F\u8BB8\u591A\u4EBA\u7684\u5DE5\u4F5C\u3002</h3></div><p>\u4ECE\u5F69\u7ED8\u3001\u4FDD\u62A4\u548C\u4E34\u6479\uFF0C\u5230\u6570\u5B57\u8BB0\u5F55\u4E0E\u516C\u4F17\u4F20\u64AD\u3002<br>\u6CBF\u7740\u65F6\u95F4\u7EBF\uFF0C\u770B\u770B\u8FD9\u4E9B\u56FE\u50CF\u600E\u6837\u8D70\u5230\u6211\u4EEC\u773C\u524D\u3002</p></div><div class="heritage-history"><nav class="history-stops" aria-label="\u9009\u62E9\u5386\u53F2\u8282\u70B9">${ac.map((I,L)=>`<button data-history="${L}" aria-pressed="${L===l}" class="${L===l?"active":""}"><span>${I.year}</span><strong>${I.short}</strong><i>\u2197</i></button>`).join("")}</nav><article class="history-entry" aria-live="polite"><p class="history-date">${w.year}</p><h4>${w.title}</h4><p class="history-main">${w.text}</p><div class="history-entry-bottom">${v}<div class="history-why"><span>\u8FD9\u4E00\u6BB5\uFF0C\u7559\u4E0B\u4E86\u4EC0\u4E48\uFF1F</span><p>${w.why}</p>${w.kind==="design"?'<button class="primary" id="storyExplore">\u8FDB\u5165\u56FE\u6848\u5C42\u6B21\u6F14\u793A \u2192</button>':""}</div></div></article></div><p class="history-scope">1944\u5E74\u4EE5\u540E\u4ECB\u7ECD\u7684\u662F\u83AB\u9AD8\u7A9F\u4FDD\u62A4\u4E0E\u4F20\u64AD\u7684\u6574\u4F53\u8FDB\u7A0B\uFF1B1954\u5E74\u4E34\u6479\u4F5C\u54C1\u5BF9\u5E94407\u7A9F\u3002\u5B83\u4EEC\u5E76\u975E\u4E09\u7A9F\u5404\u81EA\u5B8C\u6574\u7684\u4FEE\u590D\u5E74\u8868\u3002</p>${p([...E.sources,...Fu],"\u65F6\u95F4\u7EBF\u4E0E\u56FE\u7248\u6765\u6E90")}`,g.querySelectorAll("[data-history]").forEach(I=>I.onclick=()=>{l=+I.dataset.history,_(),g.querySelector(`[data-history="${l}"]`).focus({preventScroll:!0})}),yn("#storyExplore")?.addEventListener("click",()=>e("explore"))}document.dispatchEvent(new Event("page-navigation-update"))}function S(u){let E=d&&r==="culture";s=u,a=0,l=0,c=0,E?_():f("meet")}function m(){let u=wi.findIndex(E=>E[0]===r);return{context:`\u6587\u5316\u5BFC\u89C8 ${u+1} / 4`,previousLabel:u?"\u4E0A\u4E00\u8282 \xB7 "+wi[u-1][1]:"\u8FD4\u56DE\u9009\u7A9F",nextLabel:u===3?"\u53BB\u4E92\u52A8 \xB7 \u7ACB\u4F53\u62C6\u89E3":"\u4E0B\u4E00\u6B65 \xB7 "+wi[u+1][1],previous:()=>u?f(wi[u-1][0]):e("collection"),next:()=>u===3?e("explore"):f(wi[u+1][0])}}return _(),{setCave:S,navigation:m}}var Xe=[["home","\u542F\u7A0B","\u4E00\u65B9\u5929\u7A7A"],["collection","\u9009","\u9009\u62E9\u85FB\u4E95"],["story","\u8BFB","\u8BA4\u8BC6\u8FD9\u4E00\u7A9F"],["explore","\u89C2","\u7ACB\u4F53\u62C6\u89E3"],["play","\u62FC","\u7EB9\u6837\u62FC\u5408"],["patterns","\u8BC6","\u5143\u7D20\u4E0E\u8272\u5F69"],["wear","\u5236","\u5B9A\u5236\u9999\u6302"],["archive","\u6E90","\u6587\u5316\u6765\u5904"]],Vu;function _o(i){Vu?.go(i)}function Hu({getLocalNavigation:i=()=>null}={}){let t=Xe.map(([h])=>document.getElementById(h)),e=document.createElement("div");e.className="page-navigation",e.setAttribute("aria-label","\u9875\u9762\u5207\u6362"),e.innerHTML=`<button class="page-prev" aria-label="\u4E0A\u4E00\u9875"><span>\u2190</span><b>\u4E0A\u4E00\u9875</b></button><div class="page-position"><span class="page-count"></span><nav class="page-steps" aria-label="\u65C5\u7A0B\u6B65\u9AA4">${Xe.map(([h,f,p],_)=>`<button data-page="${h}" aria-label="\u7B2C${_+1}\u9875\uFF1A${p}"><i></i><span>${f}</span></button>`).join("")}</nav><span class="page-current"></span></div><button class="page-next"><b></b><span>\u2192</span></button>`,document.body.append(e),document.body.classList.add("paged-site");let n="",s=-1,r=new Map,a=h=>Xe.some(f=>f[0]===h)?h:"home";function o(h,{focus:f=!0}={}){if(h=a(h),h===n)return;n&&r.set(n,document.getElementById(n).scrollTop),s=Xe.findIndex(S=>S[0]===h),n=h,t.forEach((S,m)=>{let u=Xe[m][0]===h;S.hidden=!u,S.inert=!u,S.classList.toggle("current-page",u),S.classList.remove("page-enter")});let p=t[s];p.scrollTop=r.get(h)||0,p.classList.add("page-enter"),document.body.dataset.page=h,document.body.classList.toggle("page-dark",p.classList.contains("dark")),document.querySelectorAll('.nav a[href^="#"]').forEach(S=>{S.hash==="#"+h||h==="story"&&S.hash==="#collection"?S.setAttribute("aria-current","page"):S.removeAttribute("aria-current")}),e.querySelectorAll("[data-page]").forEach(S=>{S.dataset.page===h?S.setAttribute("aria-current","step"):S.removeAttribute("aria-current")}),e.querySelector(".page-count").textContent=`${String(s+1).padStart(2,"0")} / ${String(Xe.length).padStart(2,"0")}`,l();let _=p.querySelector("h1,h2");_&&(_.id=_.id||`page-title-${h}`,p.setAttribute("aria-labelledby",_.id),f&&(_.tabIndex=-1,_.focus({preventScroll:!0}))),window.dispatchEvent(new Event("resize"))}function l(){if(s<0)return;let h=i(n);e.querySelector(".page-current").textContent=h?.context||Xe[s][2],e.querySelector(".page-prev").disabled=s===0,e.querySelector(".page-prev b").textContent=h?.previousLabel||"\u4E0A\u4E00\u9875",e.querySelector(".page-prev").setAttribute("aria-label",h?.previousLabel||"\u4E0A\u4E00\u9875");let f=h?.nextLabel||(s===Xe.length-1?"\u56DE\u5230\u9996\u9875":`\u4E0B\u4E00\u9875 \xB7 ${Xe[s+1][2]}`);e.querySelector(".page-next b").textContent=f,e.querySelector(".page-next").setAttribute("aria-label",f)}document.addEventListener("page-navigation-update",l);function c(h){if(h=a(h),h!==n){let f=new URL(location.href);f.hash=h,history.pushState({page:h},"",f),o(h)}}Vu={go:c},document.addEventListener("click",h=>{let f=h.target.closest('a[href^="#"]');if(!f||h.defaultPrevented||h.button!==0||h.metaKey||h.ctrlKey||h.shiftKey||h.altKey)return;let p=f.hash.slice(1);Xe.some(_=>_[0]===p)&&(h.preventDefault(),c(p))}),e.querySelector(".page-prev").onclick=()=>{let h=i(n);h?h.previous():s>0&&c(Xe[s-1][0])},e.querySelector(".page-next").onclick=()=>{let h=i(n);h?h.next():c(Xe[(s+1)%Xe.length][0])},e.querySelectorAll("[data-page]").forEach(h=>h.onclick=()=>c(h.dataset.page));let d=()=>o(location.hash.slice(1));window.addEventListener("popstate",d),window.addEventListener("hashchange",d),document.querySelector(".hero-bottom>a").textContent="\u8FDB\u5165\u7ACB\u4F53\u62C6\u89E3 \u2192",t.forEach(h=>{let f=h.querySelector("h1,h2");f&&(f.id=f.id||`page-title-${h.id}`,h.setAttribute("aria-labelledby",f.id))}),o(location.hash.slice(1),{focus:!1})}var Dt=i=>document.querySelector(i),oc=i=>[...document.querySelectorAll(i)],Qt=ge(new URL(location.href).searchParams.get("cave")||"329"),yo=Qt.layers,lc=0,Ti=!1,Mo=0,Ue;function Wu(){Dt("#layerList").innerHTML=yo.map((i,t)=>`<button class="layer-choice ${t===0?"active":""}" data-layer="${t}" aria-pressed="${t===0}"><b>0${t+1}</b><span>${i[0]}</span><i>\u2197</i></button>`).join(""),oc(".layer-choice").forEach(i=>i.onclick=()=>ys(+i.dataset.layer))}Wu();function ys(i,t){lc=i,oc(".layer-choice").forEach((e,n)=>{e.classList.toggle("active",n===i),e.setAttribute("aria-pressed",n===i)}),Dt("#layerIndex").textContent=`0${i+1} / 07`,Dt("#layerTitle").textContent=yo[i][1],Dt("#layerDesc").textContent=yo[i][2],t&&(Dt("#sceneCaption").textContent="\u5DF2\u9009\u90E8\u4EF6 / "+t),Ue?.select(i)}ys(0);try{Ue=gu(Dt("#stage"),{cave:Qt,onSelect:(i,t)=>ys(i,t),onReady:i=>{Dt("#partCount").textContent=`${i} \u4E2A\u8BBE\u8BA1\u62C6\u7247`,Dt("#sceneLoading")?.remove()}})}catch(i){Dt("#sceneLoading").innerHTML="\u4E09\u7EF4\u573A\u666F\u6682\u672A\u8F7D\u5165\u3002\u8BF7\u4F7F\u7528\u652F\u6301 WebGL \u7684\u6D4F\u89C8\u5668\u540E\u91CD\u8BD5\u3002",console.error("3D scene:",i)}oc(".layer-choice").forEach(i=>i.onclick=()=>ys(+i.dataset.layer));function bo(i){Mo=i,Dt("#explodeRange").value=i,Dt("#explodeValue").textContent=Math.round(i)+"%",Dt("#explodeBtn").textContent=i>50?"\u91CD\u65B0\u805A\u5408 \u2199":"\u77AC\u95F4\u7206\u70B8\u62C6\u89E3 \u2733",Dt("#sceneCaption").textContent=i>50?"\u62C6\u89E3\u5F62\u6001 \xB7 \u70B9\u51FB\u90E8\u4EF6\u67E5\u770B\u6863\u6848":"\u5B8C\u6574\u5F62\u6001 \xB7 \u62D6\u52A8\u73AF\u89C6 / \u6EDA\u8F6E\u7F29\u653E"}function cc(){if(!Ue)return;Ti=!1,Ue.isolate(!1),Dt("#isolate").textContent="\u5355\u72EC\u89C2\u5BDF\u8FD9\u7EC4\u90E8\u4EF6 \uFF0B";let i=Mo>50?0:100;Ue.explode(i/100),bo(i),i===100&&!matchMedia("(prefers-reduced-motion: reduce)").matches&&(Dt("#sceneFlash").classList.remove("flash"),Dt("#sceneFlash").offsetWidth,Dt("#sceneFlash").classList.add("flash"))}Dt("#explodeBtn").onclick=cc;Dt("#replayBlast").onclick=()=>{Ue?.explode(0,!0),Mo=0,cc()};Dt("#explodeRange").oninput=i=>{let t=+i.target.value;Ue?.explode(t/100,!0),bo(t)};Dt("#resetView").onclick=()=>{Ue?.reset(),Ti=!1,bo(0),ys(0),Dt("#isolate").textContent="\u5355\u72EC\u89C2\u5BDF\u8FD9\u7EC4\u90E8\u4EF6 \uFF0B",Dt("#viewToggle").textContent="\u5207\u6362\u4FEF\u89C6 \u2197"};Dt("#viewToggle").onclick=()=>{Dt("#viewToggle").textContent=Ue?.top()?"\u8FD4\u56DE\u659C\u89C6 \u2197":"\u5207\u6362\u4FEF\u89C6 \u2197"};Dt("#zoomIn").onclick=()=>Ue?.zoom(.88);Dt("#zoomOut").onclick=()=>Ue?.zoom(1.14);Dt("#isolate").onclick=()=>{Ti=!Ti,Ue?.isolate(Ti),Dt("#isolate").textContent=Ti?"\u663E\u793A\u5168\u90E8\u90E8\u4EF6 \uFF0B":"\u5355\u72EC\u89C2\u5BDF\u8FD9\u7EC4\u90E8\u4EF6 \uFF0B"};Dt("#stage").addEventListener("keydown",i=>{i.target===Dt("#stage")&&(i.code==="Space"&&(i.preventDefault(),cc()),(i.key==="+"||i.key==="=")&&Ue?.zoom(.9),i.key==="-"&&Ue?.zoom(1.1))});var Ai=Dt("#heroArt"),Gu;Ai.addEventListener("pointermove",i=>{if(matchMedia("(prefers-reduced-motion: reduce)").matches||i.pointerType==="touch")return;cancelAnimationFrame(Gu);let t=Ai.getBoundingClientRect(),e=i.clientX,n=i.clientY;Gu=requestAnimationFrame(()=>{Ai.style.setProperty("--hy",`${(e-t.left-t.width/2)/t.width*13}deg`),Ai.style.setProperty("--hx",`${-(n-t.top-t.height/2)/t.height*11}deg`)})});Ai.addEventListener("pointerleave",()=>{Ai.style.setProperty("--hy","0deg"),Ai.style.setProperty("--hx","0deg")});var E_=_u(uc,Qt),xo,hc=Nu({caveId:Qt.id,onChange:vo,onNavigate:_o,onUse:(i,t,e)=>{vo(i),t&&xo.chooseMotif(t),e&&xo.setTone(e),_o("wear"),uc(t?"\u5DF2\u5C06\u5143\u7D20\u5E26\u5165\u9999\u6302\uFF0C\u5E76\u4FDD\u7559\u6765\u6E90\u8BF4\u660E":"\u5DF2\u5C06\u56FE\u7248\u53D6\u8272\u5E94\u7528\u5230\u5E95\u8272")}}),Xu=zu({caveId:Qt.id,onChange:vo,onNavigate:_o});xo=Uu({caveId:Qt.id,onCaveChange:vo,onLearn:i=>hc.openElement(i)});Dt("#layerLearn").onclick=()=>hc.openElement(Qt.layerMotifs[lc]);function qu(){Dt("#heroArt").classList.add("swapping");let i=Dt(".hero-square img");i.src=Qt.reference,i.alt=`\u7B2C${Qt.id}\u7A9F${Qt.title}\uFF0C${Qt.sourceLabel}`,i.onload=()=>Dt("#heroArt").classList.remove("swapping"),Dt(".hero-top span:last-child").textContent=`DUNHUANG \xB7 CAVE ${Qt.id}`,Dt(".hero-meta").innerHTML=`<span>\u539F\u578B / \u83AB\u9AD8\u7A9F\u7B2C${Qt.id}\u7A9F</span><span>\u65F6\u4EE3 / ${Qt.era}</span>`,Dt(".hero-label.hl1").textContent=Qt.id==="407"?"1954\u5E74\u4E34\u6479\u56FE\u7248":"\u516C\u5F00\u4E95\u5FC3\u56FE\u7248",Dt(".hero-label.hl2").textContent=Qt.title,Dt(".stage-top>span").innerHTML=`<i></i> \u7B2C${Qt.id}\u7A9F \xB7 ${Qt.title}`,Dt("#explore .method-note").textContent=Qt.scope,Dt("#explore .section-desc").innerHTML="\u6240\u9009\u56FE\u7248\u5BF9\u4F4D\uFF0C\u4E03\u7EC4\u6D6E\u96D5\u753B\u7247\u9010\u5C42\u5C55\u5F00\u3002<br>\u62D6\u52A8\u73AF\u89C6\uFF0C\u70B9\u51FB\u62C6\u89E3\uFF0C\u518D\u4E86\u89E3\u6BCF\u4E00\u7EC4\u7EB9\u6837\u3002",Dt("#play .section-desc").innerHTML=`\u4ECE\u82B1\u74E3\u3001\u8863\u5E26\u4E0E\u8FB9\u7EBF\u7684\u63A5\u7EED\u5BFB\u627E\u7EBF\u7D22\u3002<br>\u62FC\u5408\u7B2C${Qt.id}\u7A9F${Qt.title}\u7684\u6240\u793A\u56FE\u7248\u3002`,Dt("#play .small-note").textContent=`\u62FC\u5408\u4F7F\u7528\u4E0E\u5F53\u524D\u7ACB\u4F53\u5C55\u793A\u4E00\u81F4\u7684\u56FE\u7248\u3002${Qt.imageLabel}\u3002`,Dt(".game-toolbar .panel-kicker").textContent=`REASSEMBLE / ${Qt.id}`,Dt(".quick-controls>span").textContent="\u56FE\u7248\u6D6E\u96D5 \xB7 \u8BBE\u8BA1\u62C6\u7247 \xB7 \u52A8\u6001\u5149\u7167"}function vo(i){let t=ge(i);if(t.id===Qt.id)return;Qt=t,yo=Qt.layers,lc=0,Ti=!1,Mo=0,Ue?.setCave(Qt),E_.setCave(Qt),hc.setCave(Qt.id),xo?.setCave(Qt.id),Xu.setCave(Qt.id),Wu(),ys(0),bo(0),Dt("#isolate").textContent="\u5355\u72EC\u89C2\u5BDF\u8FD9\u7EC4\u90E8\u4EF6 \uFF0B",Dt("#viewToggle").textContent="\u5207\u6362\u4FEF\u89C6 \u2197",qu();let e=new URL(location.href);e.searchParams.set("cave",Qt.id),history.replaceState(null,"",e),uc(`\u73B0\u5728\u770B\u7B2C${Qt.id}\u7A9F\uFF0C\u540E\u9762\u7684\u62FC\u56FE\u4E0E\u9999\u6302\u4E5F\u6362\u597D\u4E86`)}qu();Hu({getLocalNavigation:i=>i==="story"?Xu.navigation():null});var $u;function uc(i){Dt("#toast").textContent=i,Dt("#toast").classList.add("show"),clearTimeout($u),$u=setTimeout(()=>Dt("#toast").classList.remove("show"),3500)}
/*! For license information please see app.js.LEGAL.txt */
