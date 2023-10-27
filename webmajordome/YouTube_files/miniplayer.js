(function(g){var window=this;'use strict';var fpb=function(a,b){g.U.call(this,{I:"button",Ma:["ytp-miniplayer-expand-watch-page-button","ytp-button","ytp-miniplayer-button-top-left"],W:{title:"{{title}}","data-tooltip-target-id":"ytp-miniplayer-expand-watch-page-button","aria-keyshortcuts":"i","data-title-no-tooltip":"{{data-title-no-tooltip}}"},V:[{I:"svg",W:{height:"24px",version:"1.1",viewBox:"0 0 24 24",width:"24px"},V:[{I:"g",W:{fill:"none","fill-rule":"evenodd",stroke:"none","stroke-width":"1"},V:[{I:"g",W:{transform:"translate(12.000000, 12.000000) scale(-1, 1) translate(-12.000000, -12.000000) "},
V:[{I:"path",W:{d:"M19,19 L5,19 L5,5 L12,5 L12,3 L5,3 C3.89,3 3,3.9 3,5 L3,19 C3,20.1 3.89,21 5,21 L19,21 C20.1,21 21,20.1 21,19 L21,12 L19,12 L19,19 Z M14,3 L14,5 L17.59,5 L7.76,14.83 L9.17,16.24 L19,6.41 L19,10 L21,10 L21,3 L14,3 Z",fill:"#fff","fill-rule":"nonzero"}}]}]}]}]});this.J=a;this.Sa("click",this.onClick,this);this.updateValue("title",g.LU(a,"Agrandir","i"));this.update({"data-title-no-tooltip":"Agrandir"});g.wb(this,g.FU(b.Ec(),this.element))},gpb=function(a){g.U.call(this,{I:"div",
S:"ytp-miniplayer-ui"});this.pg=!1;this.player=a;this.T(a,"minimized",this.Bh);this.T(a,"onStateChange",this.BR)},hpb=function(a){g.yV.call(this,a);
this.B=new g.QK(this);this.j=new gpb(this.player);this.j.hide();g.rU(this.player,this.j.element,4);a.rg()&&(this.load(),g.Fu(a.getRootNode(),"ytp-player-minimized",!0))};
g.w(fpb,g.U);fpb.prototype.onClick=function(){this.J.Qa("onExpandMiniplayer")};g.w(gpb,g.U);g.k=gpb.prototype;
g.k.kO=function(){this.tooltip=new g.TX(this.player,this);g.L(this,this.tooltip);g.rU(this.player,this.tooltip.element,4);this.tooltip.scale=.6;this.fd=new g.eW(this.player);g.L(this,this.fd);this.vk=new g.U({I:"div",S:"ytp-miniplayer-scrim"});g.L(this,this.vk);this.vk.Fa(this.element);this.T(this.vk.element,"click",this.kJ);var a=new g.U({I:"button",Ma:["ytp-miniplayer-close-button","ytp-button"],W:{"aria-label":"Fermer"},V:[g.sG()]});g.L(this,a);a.Fa(this.vk.element);this.T(a.element,"click",this.Gp);
a=new fpb(this.player,this);g.L(this,a);a.Fa(this.vk.element);this.Yu=new g.U({I:"div",S:"ytp-miniplayer-controls"});g.L(this,this.Yu);this.Yu.Fa(this.vk.element);this.T(this.Yu.element,"click",this.kJ);var b=new g.U({I:"div",S:"ytp-miniplayer-button-container"});g.L(this,b);b.Fa(this.Yu.element);a=new g.U({I:"div",S:"ytp-miniplayer-play-button-container"});g.L(this,a);a.Fa(this.Yu.element);var c=new g.U({I:"div",S:"ytp-miniplayer-button-container"});g.L(this,c);c.Fa(this.Yu.element);this.bZ=new g.fX(this.player,
this,!1);g.L(this,this.bZ);this.bZ.Fa(b.element);b=new g.eX(this.player,this);g.L(this,b);b.Fa(a.element);this.nextButton=new g.fX(this.player,this,!0);g.L(this,this.nextButton);this.nextButton.Fa(c.element);this.Fj=new g.MX(this.player,this);g.L(this,this.Fj);this.Fj.Fa(this.vk.element);this.Sc=new g.kX(this.player,this);g.L(this,this.Sc);g.rU(this.player,this.Sc.element,4);this.UI=new g.U({I:"div",S:"ytp-miniplayer-buttons"});g.L(this,this.UI);g.rU(this.player,this.UI.element,4);a=new g.U({I:"button",
Ma:["ytp-miniplayer-close-button","ytp-button"],W:{"aria-label":"Fermer"},V:[g.sG()]});g.L(this,a);a.Fa(this.UI.element);this.T(a.element,"click",this.Gp);a=new g.U({I:"button",Ma:["ytp-miniplayer-replay-button","ytp-button"],W:{"aria-label":"Fermer"},V:[g.jva()]});g.L(this,a);a.Fa(this.UI.element);this.T(a.element,"click",this.Y8);this.T(this.player,"presentingplayerstatechange",this.Wd);this.T(this.player,"appresize",this.Kb);this.T(this.player,"fullscreentoggled",this.Kb);this.Kb()};
g.k.show=function(){this.zf=new g.qu(this.ow,null,this);this.zf.start();this.pg||(this.kO(),this.pg=!0);0!==this.player.getPlayerState()&&g.U.prototype.show.call(this);this.Sc.show();this.player.unloadModule("annotations_module")};
g.k.hide=function(){this.zf&&(this.zf.dispose(),this.zf=void 0);g.U.prototype.hide.call(this);this.player.rg()||(this.pg&&this.Sc.hide(),this.player.loadModule("annotations_module"))};
g.k.ya=function(){this.zf&&(this.zf.dispose(),this.zf=void 0);g.U.prototype.ya.call(this)};
g.k.Gp=function(){this.player.stopVideo();this.player.Qa("onCloseMiniplayer")};
g.k.Y8=function(){this.player.playVideo()};
g.k.kJ=function(a){if(a.target===this.vk.element||a.target===this.Yu.element)g.NL(this.player.Sb())?this.player.pauseVideo():this.player.playVideo()};
g.k.Bh=function(){g.Fu(this.player.getRootNode(),"ytp-player-minimized",this.player.rg())};
g.k.Ye=function(){this.Sc.Kc();this.Fj.Kc()};
g.k.ow=function(){this.Ye();this.zf&&this.zf.start()};
g.k.Wd=function(a){g.TG(a.state,32)&&this.tooltip.hide()};
g.k.Kb=function(){g.wX(this.Sc,0,this.player.qb().getPlayerSize().width,!1);g.lX(this.Sc)};
g.k.BR=function(a){this.player.rg()&&(0===a?this.hide():this.show())};
g.k.Ec=function(){return this.tooltip};
g.k.Kg=function(){return!1};
g.k.wg=function(){return!1};
g.k.nm=function(){return!1};
g.k.hK=function(){};
g.k.Is=function(){};
g.k.Xy=function(){};
g.k.pn=function(){return null};
g.k.zH=function(){return null};
g.k.CN=function(){return new g.Ce(0,0)};
g.k.Ok=function(){return new g.Nr(0,0,0,0)};
g.k.handleGlobalKeyDown=function(){return!1};
g.k.handleGlobalKeyUp=function(){return!1};
g.k.Gw=function(a,b,c,d,e){var f=0,h=d=0,l=g.as(a);if(b){c=g.Au(b,"ytp-prev-button")||g.Au(b,"ytp-next-button");var m=g.Au(b,"ytp-play-button"),n=g.Au(b,"ytp-miniplayer-expand-watch-page-button");c?f=h=12:m?(b=g.Zr(b,this.element),h=b.x,f=b.y-12):n&&(h=g.Au(b,"ytp-miniplayer-button-top-left"),f=g.Zr(b,this.element),b=g.as(b),h?(h=8,f=f.y+40):(h=f.x-l.width+b.width,f=f.y-20))}else h=c-l.width/2,d=25+(e||0);b=this.player.qb().getPlayerSize().width;e=f+(e||0);l=g.re(h,0,b-l.width);e?(a.style.top=e+"px",
a.style.bottom=""):(a.style.top="",a.style.bottom=d+"px");a.style.left=l+"px"};
g.k.showControls=function(){};
g.k.Wp=function(){};
g.k.Zl=function(){return!1};
g.k.rF=function(){};
g.k.XA=function(){};
g.k.Fr=function(){};
g.k.Er=function(){};
g.k.Hu=function(){};
g.k.Ks=function(){};
g.k.XE=function(){};g.w(hpb,g.yV);g.k=hpb.prototype;g.k.onVideoDataChange=function(){if(this.player.getVideoData()){var a=this.player.getVideoAspectRatio(),b=16/9;a=a>b+.1||a<b-.1;g.Fu(this.player.getRootNode(),"ytp-rounded-miniplayer-not-regular-wide-video",a)}};
g.k.create=function(){g.yV.prototype.create.call(this);this.B.T(this.player,"videodatachange",this.onVideoDataChange);this.onVideoDataChange()};
g.k.wl=function(){return!1};
g.k.load=function(){this.player.hideControls();this.j.show()};
g.k.unload=function(){this.player.showControls();this.j.hide()};g.xV("miniplayer",hpb);})(_yt_player);
