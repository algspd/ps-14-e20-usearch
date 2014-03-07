for(var i = 0; i < 22; i++) { var scriptId = 'u' + i; window[scriptId] = document.getElementById(scriptId); }

$axure.eventManager.pageLoad(
function (e) {

});
gv_vAlignTable['u3'] = 'center';gv_vAlignTable['u21'] = 'center';gv_vAlignTable['u12'] = 'center';
u8.style.cursor = 'pointer';
$axure.eventManager.click('u8', function(e) {

if (true) {

SetWidgetFormText('u8', '');

}
});

$axure.eventManager.blur('u8', function(e) {

if (true) {

SetGlobalVariableValue('busqueda', GetWidgetText('u8'));

}
});
u19.tabIndex = 0;

u19.style.cursor = 'pointer';
$axure.eventManager.click('u19', function(e) {

if (true) {

    self.location.href="resources/reload.html#" + encodeURI($axure.globalVariableProvider.getLinkUrl($axure.pageData.url));

}
});
gv_vAlignTable['u19'] = 'top';gv_vAlignTable['u10'] = 'center';document.getElementById('u17_img').tabIndex = 0;

u17.style.cursor = 'pointer';
$axure.eventManager.click('u17', function(e) {

if (true) {

    self.location.href="resources/reload.html#" + encodeURI($axure.globalVariableProvider.getLinkUrl($axure.pageData.url));

}
});
gv_vAlignTable['u5'] = 'center';gv_vAlignTable['u1'] = 'center';document.getElementById('u9_img').tabIndex = 0;

u9.style.cursor = 'pointer';
$axure.eventManager.click('u9', function(e) {

if ((GetGlobalVariableValue('busqueda')) != ('')) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Busqueda_1.html');

}
});
document.getElementById('u20_img').tabIndex = 0;

u20.style.cursor = 'pointer';
$axure.eventManager.click('u20', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Listado_Completo_1.html');

}
});
gv_vAlignTable['u15'] = 'top';gv_vAlignTable['u16'] = 'top';document.getElementById('u6_img').tabIndex = 0;

u6.style.cursor = 'pointer';
$axure.eventManager.click('u6', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Carrito.html');

}
});
gv_vAlignTable['u18'] = 'center';gv_vAlignTable['u7'] = 'center';