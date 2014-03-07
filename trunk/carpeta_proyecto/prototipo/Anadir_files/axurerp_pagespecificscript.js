for(var i = 0; i < 29; i++) { var scriptId = 'u' + i; window[scriptId] = document.getElementById(scriptId); }

$axure.eventManager.pageLoad(
function (e) {

if (true) {

;

}

});
gv_vAlignTable['u27'] = 'center';gv_vAlignTable['u8'] = 'center';u6.tabIndex = 0;

u6.style.cursor = 'pointer';
$axure.eventManager.click('u6', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Home_Admin.html');

}
});
gv_vAlignTable['u6'] = 'top';gv_vAlignTable['u13'] = 'top';gv_vAlignTable['u14'] = 'top';gv_vAlignTable['u15'] = 'top';document.getElementById('u4_img').tabIndex = 0;

u4.style.cursor = 'pointer';
$axure.eventManager.click('u4', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Home_Admin.html');

}
});
gv_vAlignTable['u1'] = 'center';gv_vAlignTable['u10'] = 'center';gv_vAlignTable['u11'] = 'top';gv_vAlignTable['u12'] = 'top';document.getElementById('u26_img').tabIndex = 0;

u26.style.cursor = 'pointer';
$axure.eventManager.click('u26', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Listado_Completo_1.html');

}
});
gv_vAlignTable['u3'] = 'center';gv_vAlignTable['u23'] = 'center';
u25.style.cursor = 'pointer';
$axure.eventManager.click('u25', function(e) {

if (true) {

	self.location.href="javascript:history.back()";

}
});

u20.style.cursor = 'pointer';
$axure.eventManager.click('u20', function(e) {

if (true) {

	self.location.href="javascript:history.back()";

}
});
gv_vAlignTable['u5'] = 'center';document.getElementById('u22_img').tabIndex = 0;

u22.style.cursor = 'pointer';
$axure.eventManager.click('u22', function(e) {

if ((GetGlobalVariableValue('busqueda')) != ('')) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Busqueda.html');

}
});

u21.style.cursor = 'pointer';
$axure.eventManager.click('u21', function(e) {

if (true) {

SetWidgetFormText('u21', '');

}
});

$axure.eventManager.blur('u21', function(e) {

if (true) {

SetGlobalVariableValue('busqueda', GetWidgetText('u21'));

}
});
