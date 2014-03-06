for(var i = 0; i < 71; i++) { var scriptId = 'u' + i; window[scriptId] = document.getElementById(scriptId); }

$axure.eventManager.pageLoad(
function (e) {

if (true) {

SetWidgetRichText('u11', '<p style="text-align:left;"><span style="font-family:Arial;font-size:14px;font-weight:bold;font-style:normal;text-decoration:none;color:#333333;">' + (GetGlobalVariableValue('items')) + '</span></p>');

}

});
gv_vAlignTable['u21'] = 'top';gv_vAlignTable['u51'] = 'center';gv_vAlignTable['u25'] = 'top';gv_vAlignTable['u55'] = 'center';document.getElementById('u46_img').tabIndex = 0;

u46.style.cursor = 'pointer';
$axure.eventManager.click('u46', function(e) {

if (true) {

SetGlobalVariableValue('items', '' + (GetNum(GetGlobalVariableValue('items')) + 1) + '');

	self.location.href="resources/reload.html#" + encodeURI($axure.globalVariableProvider.getLinkUrl($axure.pageData.url));


}
});
gv_vAlignTable['u31'] = 'top';document.getElementById('u38_img').tabIndex = 0;

u38.style.cursor = 'pointer';
$axure.eventManager.click('u38', function(e) {

if (true) {

	SetPanelVisibility('u64','','none',500);

}
});
gv_vAlignTable['u23'] = 'top';gv_vAlignTable['u62'] = 'center';gv_vAlignTable['u53'] = 'center';gv_vAlignTable['u1'] = 'center';gv_vAlignTable['u27'] = 'top';gv_vAlignTable['u66'] = 'center';gv_vAlignTable['u8'] = 'center';
u60.style.cursor = 'pointer';
$axure.eventManager.click('u60', function(e) {

if (true) {

SetWidgetFormText('u60', '');

}
});

$axure.eventManager.blur('u60', function(e) {

if (true) {

SetGlobalVariableValue('busqueda', GetWidgetText('u60'));

}
});
gv_vAlignTable['u17'] = 'top';gv_vAlignTable['u19'] = 'top';gv_vAlignTable['u49'] = 'center';gv_vAlignTable['u11'] = 'top';gv_vAlignTable['u41'] = 'center';gv_vAlignTable['u45'] = 'center';document.getElementById('u36_img').tabIndex = 0;

u36.style.cursor = 'pointer';
$axure.eventManager.click('u36', function(e) {

if (true) {

	SetPanelVisibility('u64','','none',500);

}
});
document.getElementById('u58_img').tabIndex = 0;

u58.style.cursor = 'pointer';
$axure.eventManager.click('u58', function(e) {

if (true) {

SetGlobalVariableValue('items', '' + (GetNum(GetGlobalVariableValue('items')) + 1) + '');

	self.location.href="resources/reload.html#" + encodeURI($axure.globalVariableProvider.getLinkUrl($axure.pageData.url));


}
});
gv_vAlignTable['u37'] = 'center';gv_vAlignTable['u13'] = 'center';gv_vAlignTable['u43'] = 'center';gv_vAlignTable['u3'] = 'center';gv_vAlignTable['u47'] = 'center';
u68.style.cursor = 'pointer';
$axure.eventManager.click('u68', function(e) {

if (true) {

	SetPanelVisibility('u64','hidden','none',500);

}
});
document.getElementById('u50_img').tabIndex = 0;

u50.style.cursor = 'pointer';
$axure.eventManager.click('u50', function(e) {

if (true) {

SetGlobalVariableValue('items', '' + (GetNum(GetGlobalVariableValue('items')) + 1) + '');

	self.location.href="resources/reload.html#" + encodeURI($axure.globalVariableProvider.getLinkUrl($axure.pageData.url));


}
});
document.getElementById('u54_img').tabIndex = 0;

u54.style.cursor = 'pointer';
$axure.eventManager.click('u54', function(e) {

if (true) {

SetGlobalVariableValue('items', '' + (GetNum(GetGlobalVariableValue('items')) + 1) + '');

	self.location.href="resources/reload.html#" + encodeURI($axure.globalVariableProvider.getLinkUrl($axure.pageData.url));


}
});
gv_vAlignTable['u39'] = 'center';
u69.style.cursor = 'pointer';
$axure.eventManager.click('u69', function(e) {

if (true) {

	SetPanelVisibility('u64','hidden','none',500);

}
});
document.getElementById('u4_img').tabIndex = 0;

u4.style.cursor = 'pointer';
$axure.eventManager.click('u4', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Home.html');

}
});
u6.tabIndex = 0;

u6.style.cursor = 'pointer';
$axure.eventManager.click('u6', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Home.html');

}
});
gv_vAlignTable['u6'] = 'top';document.getElementById('u61_img').tabIndex = 0;

u61.style.cursor = 'pointer';
$axure.eventManager.click('u61', function(e) {

if ((GetGlobalVariableValue('busqueda')) != ('')) {

    self.location.href="resources/reload.html#" + encodeURI($axure.globalVariableProvider.getLinkUrl($axure.pageData.url));

}
});
gv_vAlignTable['u35'] = 'top';gv_vAlignTable['u5'] = 'center';document.getElementById('u12_img').tabIndex = 0;

u12.style.cursor = 'pointer';
$axure.eventManager.click('u12', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Anadir.html');

}
});
document.getElementById('u9_img').tabIndex = 0;

u9.style.cursor = 'pointer';
$axure.eventManager.click('u9', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Carrito.html');

}
});
document.getElementById('u42_img').tabIndex = 0;

u42.style.cursor = 'pointer';
$axure.eventManager.click('u42', function(e) {

if (true) {

	SetPanelVisibility('u64','','none',500);

}
});
gv_vAlignTable['u33'] = 'top';gv_vAlignTable['u67'] = 'top';gv_vAlignTable['u57'] = 'center';gv_vAlignTable['u10'] = 'center';document.getElementById('u40_img').tabIndex = 0;

u40.style.cursor = 'pointer';
$axure.eventManager.click('u40', function(e) {

if (true) {

	SetPanelVisibility('u64','','none',500);

}
});
gv_vAlignTable['u70'] = 'top';u14.tabIndex = 0;

u14.style.cursor = 'pointer';
$axure.eventManager.click('u14', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Anadir.html');

}
});
gv_vAlignTable['u14'] = 'top';gv_vAlignTable['u29'] = 'top';gv_vAlignTable['u59'] = 'center';