(function(o,L){"use strict";const t=L.findByProps("SLOWMODE_VALUES"),O=t.SLOWMODE_VALUES;let E=[];for(let n=0;n<=21600;n++)(n<=60&&n<120||n>=120&&n%60===0&&n<=3600||n>=7200&&n%3600===0)&&E.push(n);t.SLOWMODE_VALUES=E;const S=function(){return t.SLOWMODE_VALUES=O};return o.onUnload=S,o})({},vendetta.metro);
