(function(c,p,T){"use strict";var o;(function(t){t[t.BUILT_IN=0]="BUILT_IN",t[t.BUILT_IN_TEXT=1]="BUILT_IN_TEXT",t[t.BUILT_IN_INTEGRATION=2]="BUILT_IN_INTEGRATION",t[t.BOT=3]="BOT",t[t.PLACEHOLDER=4]="PLACEHOLDER"})(o||(o={}));var u;(function(t){t[t.SUB_COMMAND=1]="SUB_COMMAND",t[t.SUB_COMMAND_GROUP=2]="SUB_COMMAND_GROUP",t[t.STRING=3]="STRING",t[t.INTEGER=4]="INTEGER",t[t.BOOLEAN=5]="BOOLEAN",t[t.USER=6]="USER",t[t.CHANNEL=7]="CHANNEL",t[t.ROLE=8]="ROLE",t[t.MENTIONABLE=9]="MENTIONABLE",t[t.NUMBER=10]="NUMBER",t[t.ATTACHMENT=11]="ATTACHMENT"})(u||(u={}));var i;(function(t){t[t.CHAT=1]="CHAT",t[t.USER=2]="USER",t[t.MESSAGE=3]="MESSAGE"})(i||(i={}));const{sendBotMessage:r}=T.findByProps("sendBotMessage"),s=T.findByStoreName("SpotifyStore");let a=[];a.push(p.registerCommand({name:"spotify track",displayName:"spotify track",description:"Send your current Spotify track to chat",displayDescription:"Send your current Spotify track to chat",type:i.CHAT,inputType:o.BUILT_IN_TEXT,applicationId:"-1",options:[],execute(t,e){const n=s.getTrack();return n?{content:`https://open.spotify.com/track/${n.id}?si=0`}:r(e.channel.id,"You're not listening to any music.")}})),a.push(p.registerCommand({name:"spotify album",displayName:"spotify album",description:"Send your current Spotify album to chat",displayDescription:"Send your current Spotify album to chat",type:i.CHAT,inputType:o.BUILT_IN_TEXT,applicationId:"-1",options:[],execute(t,e){const n=s.getTrack();return n?{content:`https://open.spotify.com/album/${n.album.id}?si=0`}:r(e.channel.id,"You're not listening to any music.")}})),a.push(p.registerCommand({name:"spotify artist",displayName:"spotify artist",description:"Send your current Spotify artist to chat",displayDescription:"Send your current Spotify artist to chat",type:i.CHAT,inputType:o.BUILT_IN_TEXT,applicationId:"-1",options:[],execute(t,e){const n=s.getTrack();return n?{content:`${n.artists[0].external_urls.spotify}?si=0`}:r(e.channel.id,"You're not listening to any music.")}}));const y=function(){for(const t of a)t()};return c.onUnload=y,c})({},vendetta.commands,vendetta.metro);
