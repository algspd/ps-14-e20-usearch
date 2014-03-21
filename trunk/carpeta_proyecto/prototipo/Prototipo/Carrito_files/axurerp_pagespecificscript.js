for(var i = 0; i < 67; i++) { var scriptId = 'u' + i; window[scriptId] = document.getElementById(scriptId); }

$axure.eventManager.pageLoad(
function (e) {

if (true) {

;

SetGlobalVariableValue('item1', GetWidgetText('u46'));

SetGlobalVariableValue('item2', GetWidgetText('u47'));

SetGlobalVariableValue('item3', GetWidgetText('u48'));

SetGlobalVariableValue('money1', '' + (GetGlobalVariableValue('item1') * 20) + '');

SetGlobalVariableValue('money2', '' + (GetGlobalVariableValue('item2') * 30) + '');

SetGlobalVariableValue('money3', '' + (GetGlobalVariableValue('item3') * 25) + '');

SetWidgetFormText('u58', '' + (GetNum(GetGlobalVariableValue('item1')) + GetNum(GetGlobalVariableValue('item2')) + GetNum(GetGlobalVariableValue('item3'))) + '');

SetWidgetFormText('u59', '' + (GetNum(GetGlobalVariableValue('money1')) + GetNum(GetGlobalVariableValue('money2')) + GetNum(GetGlobalVariableValue('money3'))) + '');

}

});
gv_vAlignTable['u21'] = 'top';gv_vAlignTable['u25'] = 'top';gv_vAlignTable['u27'] = 'top';gv_vAlignTable['u23'] = 'top';document.getElementById('u62_img').tabIndex = 0;

u62.style.cursor = 'pointer';
$axure.eventManager.click('u62', function(e) {

if ((GetGlobalVariableValue('busqueda')) != ('')) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Busqueda_1.html');

}
});
gv_vAlignTable['u7'] = 'center';gv_vAlignTable['u19'] = 'top';
u49.style.cursor = 'pointer';
$axure.eventManager.click('u49', function(e) {

if (true) {

SetGlobalVariableValue('item1', GetWidgetText('u46'));

SetGlobalVariableValue('item2', GetWidgetText('u47'));

SetGlobalVariableValue('item3', GetWidgetText('u48'));

SetGlobalVariableValue('money1', '' + (GetGlobalVariableValue('item1') * 20) + '');

SetGlobalVariableValue('money2', '' + (GetGlobalVariableValue('item2') * 30) + '');

SetGlobalVariableValue('money3', '' + (GetGlobalVariableValue('item3') * 25) + '');

SetWidgetFormText('u58', '' + (GetNum(GetGlobalVariableValue('item1')) + GetNum(GetGlobalVariableValue('item2')) + GetNum(GetGlobalVariableValue('item3'))) + '');

SetWidgetFormText('u59', '' + (GetNum(GetGlobalVariableValue('money1')) + GetNum(GetGlobalVariableValue('money2')) + GetNum(GetGlobalVariableValue('money3'))) + '');

}
});
gv_vAlignTable['u11'] = 'center';gv_vAlignTable['u41'] = 'center';gv_vAlignTable['u17'] = 'top';gv_vAlignTable['u45'] = 'center';gv_vAlignTable['u66'] = 'center';gv_vAlignTable['u2'] = 'center';gv_vAlignTable['u43'] = 'center';gv_vAlignTable['u3'] = 'top';gv_vAlignTable['u39'] = 'top';gv_vAlignTable['u31'] = 'top';
u61.style.cursor = 'pointer';
$axure.eventManager.click('u61', function(e) {

if (true) {

SetWidgetFormText('u61', '');

}
});

$axure.eventManager.blur('u61', function(e) {

if (true) {

SetGlobalVariableValue('busqueda', GetWidgetText('u61'));

}
});
gv_vAlignTable['u35'] = 'top';document.getElementById('u65_img').tabIndex = 0;

u65.style.cursor = 'pointer';
$axure.eventManager.click('u65', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Listado_Completo_1.html');

}
});

u5.style.cursor = 'pointer';
$axure.eventManager.click('u5', function(e) {

if (true) {

}
});
u12.tabIndex = 0;

u12.style.cursor = 'pointer';
$axure.eventManager.click('u12', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Home_Cliente.html');

}
});
gv_vAlignTable['u12'] = 'top';gv_vAlignTable['u9'] = 'center';document.getElementById('u42_img').tabIndex = 0;

u42.style.cursor = 'pointer';
$axure.eventManager.click('u42', function(e) {

if (true) {

	SetPanelVisibility('u0','','none',500);

}
});
gv_vAlignTable['u33'] = 'top';gv_vAlignTable['u63'] = 'center';gv_vAlignTable['u37'] = 'top';document.getElementById('u10_img').tabIndex = 0;

u10.style.cursor = 'pointer';
$axure.eventManager.click('u10', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Home_Cliente.html');

}
});
document.getElementById('u40_img').tabIndex = 0;

u40.style.cursor = 'pointer';
$axure.eventManager.click('u40', function(e) {

if (true) {

	SetPanelVisibility('u0','','none',500);

}
});
gv_vAlignTable['u14'] = 'center';document.getElementById('u44_img').tabIndex = 0;

u44.style.cursor = 'pointer';
$axure.eventManager.click('u44', function(e) {

if (true) {

	SetPanelVisibility('u0','','none',500);

}
});
gv_vAlignTable['u29'] = 'top';
u4.style.cursor = 'pointer';
$axure.eventManager.click('u4', function(e) {

if (true) {

}
});
