for(var i = 0; i < 68; i++) { var scriptId = 'u' + i; window[scriptId] = document.getElementById(scriptId); }

$axure.eventManager.pageLoad(
function (e) {

if (true) {

;

SetGlobalVariableValue('item1', GetWidgetText('u53'));

SetGlobalVariableValue('item2', GetWidgetText('u54'));

SetGlobalVariableValue('item3', GetWidgetText('u55'));

SetGlobalVariableValue('money1', '' + (GetGlobalVariableValue('item1') * 20) + '');

SetGlobalVariableValue('money2', '' + (GetGlobalVariableValue('item2') * 30) + '');

SetGlobalVariableValue('money3', '' + (GetGlobalVariableValue('item3') * 25) + '');

SetWidgetFormText('u65', '' + (GetNum(GetGlobalVariableValue('item1')) + GetNum(GetGlobalVariableValue('item2')) + GetNum(GetGlobalVariableValue('item3'))) + '');

SetWidgetFormText('u66', '' + (GetNum(GetGlobalVariableValue('money1')) + GetNum(GetGlobalVariableValue('money2')) + GetNum(GetGlobalVariableValue('money3'))) + '');

}

});
gv_vAlignTable['u51'] = 'center';gv_vAlignTable['u16'] = 'center';gv_vAlignTable['u46'] = 'center';gv_vAlignTable['u38'] = 'top';gv_vAlignTable['u32'] = 'top';gv_vAlignTable['u7'] = 'center';gv_vAlignTable['u30'] = 'top';gv_vAlignTable['u34'] = 'top';u17.tabIndex = 0;

u17.style.cursor = 'pointer';
$axure.eventManager.click('u17', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Anadir.html');

}
});
gv_vAlignTable['u17'] = 'top';
u49.style.cursor = 'pointer';
$axure.eventManager.click('u49', function(e) {

if (true) {

SetWidgetFormText('u49', '');

}
});

$axure.eventManager.blur('u49', function(e) {

if (true) {

SetGlobalVariableValue('busqueda', GetWidgetText('u49'));

}
});
gv_vAlignTable['u11'] = 'center';document.getElementById('u15_img').tabIndex = 0;

u15.style.cursor = 'pointer';
$axure.eventManager.click('u15', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Anadir.html');

}
});
document.getElementById('u45_img').tabIndex = 0;

u45.style.cursor = 'pointer';
$axure.eventManager.click('u45', function(e) {

if (true) {

	SetPanelVisibility('u0','','none',500);

}
});
gv_vAlignTable['u36'] = 'top';gv_vAlignTable['u2'] = 'center';gv_vAlignTable['u22'] = 'top';document.getElementById('u43_img').tabIndex = 0;

u43.style.cursor = 'pointer';
$axure.eventManager.click('u43', function(e) {

if (true) {

	SetPanelVisibility('u0','','none',500);

}
});
gv_vAlignTable['u3'] = 'top';document.getElementById('u47_img').tabIndex = 0;

u47.style.cursor = 'pointer';
$axure.eventManager.click('u47', function(e) {

if (true) {

	SetPanelVisibility('u0','','none',500);

}
});
gv_vAlignTable['u20'] = 'top';document.getElementById('u50_img').tabIndex = 0;

u50.style.cursor = 'pointer';
$axure.eventManager.click('u50', function(e) {

if ((GetGlobalVariableValue('busqueda')) != ('')) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Busqueda.html');

}
});
gv_vAlignTable['u28'] = 'top';gv_vAlignTable['u24'] = 'top';
u4.style.cursor = 'pointer';
$axure.eventManager.click('u4', function(e) {

if (true) {

}
});
gv_vAlignTable['u26'] = 'top';
u56.style.cursor = 'pointer';
$axure.eventManager.click('u56', function(e) {

if (true) {

SetGlobalVariableValue('item1', GetWidgetText('u53'));

SetGlobalVariableValue('item2', GetWidgetText('u54'));

SetGlobalVariableValue('item3', GetWidgetText('u55'));

SetGlobalVariableValue('money1', '' + (GetGlobalVariableValue('item1') * 20) + '');

SetGlobalVariableValue('money2', '' + (GetGlobalVariableValue('item2') * 30) + '');

SetGlobalVariableValue('money3', '' + (GetGlobalVariableValue('item3') * 25) + '');

SetWidgetFormText('u65', '' + (GetNum(GetGlobalVariableValue('item1')) + GetNum(GetGlobalVariableValue('item2')) + GetNum(GetGlobalVariableValue('item3'))) + '');

SetWidgetFormText('u66', '' + (GetNum(GetGlobalVariableValue('money1')) + GetNum(GetGlobalVariableValue('money2')) + GetNum(GetGlobalVariableValue('money3'))) + '');

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

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Home.html');

}
});
gv_vAlignTable['u12'] = 'top';gv_vAlignTable['u9'] = 'center';gv_vAlignTable['u42'] = 'top';gv_vAlignTable['u48'] = 'center';document.getElementById('u10_img').tabIndex = 0;

u10.style.cursor = 'pointer';
$axure.eventManager.click('u10', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Home.html');

}
});
gv_vAlignTable['u40'] = 'top';gv_vAlignTable['u14'] = 'center';gv_vAlignTable['u44'] = 'center';