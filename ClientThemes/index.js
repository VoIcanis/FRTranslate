(function(r,t,a,e){"use strict";var o;const i=t.findByProps("setShouldSyncAppearanceSettings"),s=t.find(function(n){return n.default?.canUseClientThemes}),d=t.findByProps("updateBackgroundGradientPreset"),{ClientThemesMobileExperiment:u}=t.findByProps("ClientThemesMobileExperiment");(o=e.storage).isEnabled??(o.isEnabled=!1),u.getCurrentConfig().hasClientThemes=!0,i.setShouldSyncAppearanceSettings(!1),e.storage.theme&&e.storage.isEnabled&&d.updateBackgroundGradientPreset(e.storage.theme),s.default={...s.default};const c=[a.instead("setShouldSyncAppearanceSettings",i,function(){return!e.storage.isEnabled}),a.instead("canUseClientThemes",s.default,function(){return!0}),a.after("updateMobilePendingThemeIndex",d,function(n){e.storage.isEnabled=n[0]>1}),a.after("updateBackgroundGradientPreset",d,function(n){e.storage.theme=n[0]})],f=function(){for(const n of c)n()};return r.onUnload=f,r})({},vendetta.metro,vendetta.patcher,vendetta.plugin);
