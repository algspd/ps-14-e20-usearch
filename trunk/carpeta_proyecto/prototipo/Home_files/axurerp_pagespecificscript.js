for(var i = 0; i < 23; i++) { var scriptId = 'u' + i; window[scriptId] = document.getElementById(scriptId); }

$axure.eventManager.pageLoad(
function (e) {

if (IsValueNumeric(GetGlobalVariableValue('items'))) {

SetWidgetRichText('u18', '<p style="text-align:left;"><span style="font-family:Arial;font-size:14px;font-weight:bold;font-style:normal;text-decoration:none;color:#333333;">' + (GetGlobalVariableValue('items')) + '</span></p>');

}
else
if (true) {

SetGlobalVariableValue('items', '0');

SetWidgetRichText('u18', '<p style="text-align:left;"><span style="font-family:Arial;font-size:14px;font-weight:bold;font-style:normal;text-decoration:none;color:#333333;">' + (GetGlobalVariableValue('items')) + '</span></p>');

}

});
gv_vAlignTable['u3'] = 'center';gv_vAlignTable['u21'] = 'center';document.getElementById('u12_img').tabIndex = 0;

u12.style.cursor = 'pointer';
$axure.eventManager.click('u12', function(e) {

if ((GetGlobalVariableValue('busqueda')) != ('')) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Busqueda.html');

}
});
gv_vAlignTable['u15'] = 'center';u8.tabIndex = 0;

u8.style.cursor = 'pointer';
$axure.eventManager.click('u8', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Anadir.html');

}
});
gv_vAlignTable['u8'] = 'top';gv_vAlignTable['u19'] = 'top';gv_vAlignTable['u10'] = 'center';u22.tabIndex = 0;

u22.style.cursor = 'pointer';
$axure.eventManager.click('u22', function(e) {

if (true) {

    self.location.href="resources/reload.html#" + encodeURI($axure.globalVariableProvider.getLinkUrl($axure.pageData.url));

}
});
gv_vAlignTable['u22'] = 'top';gv_vAlignTable['u5'] = 'center';gv_vAlignTable['u1'] = 'center';document.getElementById('u9_img').tabIndex = 0;

u9.style.cursor = 'pointer';
$axure.eventManager.click('u9', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Carrito.html');

}
});
document.getElementById('u20_img').tabIndex = 0;

u20.style.cursor = 'pointer';
$axure.eventManager.click('u20', function(e) {

if (true) {

    self.location.href="resources/reload.html#" + encodeURI($axure.globalVariableProvider.getLinkUrl($axure.pageData.url));

}
});
document.getElementById('u6_img').tabIndex = 0;

u6.style.cursor = 'pointer';
$axure.eventManager.click('u6', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Anadir.html');

}
});

u11.style.cursor = 'pointer';
$axure.eventManager.click('u11', function(e) {

if (true) {

SetWidgetFormText('u11', '');

}
});

$axure.eventManager.blur('u11', function(e) {

if (true) {

SetGlobalVariableValue('busqueda', GetWidgetText('u11'));

}
});
gv_vAlignTable['u13'] = 'center';gv_vAlignTable['u18'] = 'top';gv_vAlignTable['u7'] = 'center';