var stop,staticx,img=new Image;function Sakura(t,n,i,a,e){this.x=t,this.y=n,this.s=i,this.r=a,this.fn=e}function getRandom(t){var n,i;switch(t){case"x":n=Math.random()*window.innerWidth;break;case"y":n=Math.random()*window.innerHeight;break;case"s":n=Math.random();break;case"r":n=6*Math.random();break;case"fnx":i=+Math.random()-.5,n=function(t,n){return t+.5*i-1.7};break;case"fny":i=1.5+.7*Math.random(),n=function(t,n){return n+i};break;case"fnr":i=.03*Math.random(),n=function(t){return t+i}}return n}function startSakura(){requestAnimationFrame=window.requestAnimationFrame||window.mozRequestAnimationFrame||window.webkitRequestAnimationFrame||window.msRequestAnimationFrame||window.oRequestAnimationFrame;var t=document.createElement("canvas");staticx=!0,t.height=window.innerHeight,t.width=window.innerWidth,t.setAttribute("style","position: fixed;left: 0;top: 0;pointer-events: none;"),t.setAttribute("id","canvas_sakura"),document.getElementsByTagName("body")[0].appendChild(t);for(var n=t.getContext("2d"),i=new SakuraList,a=0;a<50;a++){var e=getRandom("x"),r=getRandom("y"),s=getRandom("r"),o=getRandom("s"),h=getRandom("fnx"),d=getRandom("fny");randomFnR=getRandom("fnr"),(d=new Sakura(e,r,o,s,{x:h,y:d,r:randomFnR})).draw(n),i.push(d)}stop=requestAnimationFrame(function(){n.clearRect(0,0,t.width,t.height),i.update(),i.draw(n),stop=requestAnimationFrame(arguments.callee)})}function stopp(){var t;staticx?((t=document.getElementById("canvas_sakura")).parentNode.removeChild(t),window.cancelAnimationFrame(stop),staticx=!1):startSakura()}img.src="/images/snow.png",Sakura.prototype.draw=function(t){t.save();this.s;t.translate(this.x,this.y),t.rotate(this.r),t.drawImage(img,0,0,40*this.s,40*this.s),t.restore()},Sakura.prototype.update=function(){this.x=this.fn.x(this.x,this.y),this.y=this.fn.y(this.y,this.y),this.r=this.fn.r(this.r),(this.x>window.innerWidth||this.x<0||this.y>window.innerHeight||this.y<0)&&(this.r=getRandom("fnr"),.4<Math.random()?(this.x=getRandom("x"),this.y=0):(this.x=window.innerWidth,this.y=getRandom("y")),this.s=getRandom("s"),this.r=getRandom("r"))},SakuraList=function(){this.list=[]},SakuraList.prototype.push=function(t){this.list.push(t)},SakuraList.prototype.update=function(){for(var t=0,n=this.list.length;t<n;t++)this.list[t].update()},SakuraList.prototype.draw=function(t){for(var n=0,i=this.list.length;n<i;n++)this.list[n].draw(t)},SakuraList.prototype.get=function(t){return this.list[t]},SakuraList.prototype.size=function(){return this.list.length},window.onresize=function(){document.getElementById("canvas_snow")},img.onload=function(){startSakura()};