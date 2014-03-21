for(var i = 0; i < 32; i++) { var scriptId = 'u' + i; window[scriptId] = document.getElementById(scriptId); }

$axure.eventManager.pageLoad(
function (e) {

if (true) {

;

}

});
document.getElementById('u27_img').tabIndex = 0;

u27.style.cursor = 'pointer';
$axure.eventManager.click('u27', function(e) {

if ((GetGlobalVariableValue('busqueda')) != ('')) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Busqueda.html');

}
});
gv_vAlignTable['u28'] = 'center';gv_vAlignTable['u8'] = 'center';document.getElementById('u30_img').tabIndex = 0;

u30.style.cursor = 'pointer';
$axure.eventManager.click('u30', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Listado_Completo.html');

}
});
u6.tabIndex = 0;

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
gv_vAlignTable['u1'] = 'center';gv_vAlignTable['u10'] = 'center';gv_vAlignTable['u11'] = 'top';gv_vAlignTable['u12'] = 'top';
u26.style.cursor = 'pointer';
$axure.eventManager.click('u26', function(e) {

if (true) {

SetWidgetFormText('u26', '');

}
});

$axure.eventManager.blur('u26', function(e) {

if (true) {

SetGlobalVariableValue('busqueda', GetWidgetText('u26'));

}
});
gv_vAlignTable['u3'] = 'center';document.getElementById('u23_img').tabIndex = 0;

u23.style.cursor = 'pointer';
$axure.eventManager.click('u23', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Anadir.html');

}
});
gv_vAlignTable['u24'] = 'center';u25.tabIndex = 0;

u25.style.cursor = 'pointer';
$axure.eventManager.click('u25', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Anadir.html');

}
});
gv_vAlignTable['u25'] = 'top';gv_vAlignTable['u5'] = 'center';
u22.style.cursor = 'pointer';
$axure.eventManager.click('u22', function(e) {

if (true) {

	self.location.href="javascript:history.back()";

}
});

u21.style.cursor = 'pointer';
$axure.eventManager.click('u21', function(e) {

if (true) {

	self.location.href="javascript:history.back()";

}
});
gv_vAlignTable['u31'] = 'center';