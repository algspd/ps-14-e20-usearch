for(var i = 0; i < 31; i++) { var scriptId = 'u' + i; window[scriptId] = document.getElementById(scriptId); }

$axure.eventManager.pageLoad(
function (e) {

if (true) {

SetWidgetRichText('u29', '<p style="text-align:left;"><span style="font-family:Arial;font-size:14px;font-weight:bold;font-style:normal;text-decoration:none;color:#333333;">' + (GetGlobalVariableValue('items')) + '</span></p>');

}

});
gv_vAlignTable['u16'] = 'top';gv_vAlignTable['u17'] = 'top';
u28.style.cursor = 'pointer';
$axure.eventManager.click('u28', function(e) {

if (true) {

	self.location.href="javascript:history.back()";

}
});
gv_vAlignTable['u29'] = 'top';gv_vAlignTable['u8'] = 'center';gv_vAlignTable['u30'] = 'top';u6.tabIndex = 0;

u6.style.cursor = 'pointer';
$axure.eventManager.click('u6', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Home.html');

}
});
gv_vAlignTable['u6'] = 'top';gv_vAlignTable['u15'] = 'top';gv_vAlignTable['u13'] = 'center';gv_vAlignTable['u14'] = 'top';document.getElementById('u4_img').tabIndex = 0;

u4.style.cursor = 'pointer';
$axure.eventManager.click('u4', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Home.html');

}
});
gv_vAlignTable['u1'] = 'center';document.getElementById('u26_img').tabIndex = 0;

u26.style.cursor = 'pointer';
$axure.eventManager.click('u26', function(e) {

if ((GetGlobalVariableValue('busqueda')) != ('')) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Busqueda.html');

}
});
gv_vAlignTable['u10'] = 'center';gv_vAlignTable['u3'] = 'center';document.getElementById('u9_img').tabIndex = 0;

u9.style.cursor = 'pointer';
$axure.eventManager.click('u9', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Carrito.html');

}
});
gv_vAlignTable['u27'] = 'center';
u24.style.cursor = 'pointer';
$axure.eventManager.click('u24', function(e) {

if (true) {

	self.location.href="javascript:history.back()";

}
});

u25.style.cursor = 'pointer';
$axure.eventManager.click('u25', function(e) {

if (true) {

SetWidgetFormText('u25', '');

}
});

$axure.eventManager.blur('u25', function(e) {

if (true) {

SetGlobalVariableValue('busqueda', GetWidgetText('u25'));

}
});
gv_vAlignTable['u18'] = 'top';gv_vAlignTable['u5'] = 'center';