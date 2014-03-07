for(var i = 0; i < 78; i++) { var scriptId = 'u' + i; window[scriptId] = document.getElementById(scriptId); }

$axure.eventManager.pageLoad(
function (e) {

});
gv_vAlignTable['u21'] = 'top';gv_vAlignTable['u51'] = 'top';gv_vAlignTable['u25'] = 'top';gv_vAlignTable['u55'] = 'top';document.getElementById('u68_img').tabIndex = 0;

u68.style.cursor = 'pointer';
$axure.eventManager.click('u68', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Carrito.html');

}
});
document.getElementById('u76_img').tabIndex = 0;

u76.style.cursor = 'pointer';
$axure.eventManager.click('u76', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Listado_Completo_1.html');

}
});
gv_vAlignTable['u27'] = 'top';gv_vAlignTable['u8'] = 'center';gv_vAlignTable['u23'] = 'top';document.getElementById('u62_img').tabIndex = 0;

u62.style.cursor = 'pointer';
$axure.eventManager.click('u62', function(e) {

if (true) {

SetGlobalVariableValue('items', '' + (GetNum(GetGlobalVariableValue('items')) + 1) + '');

	self.location.href="resources/reload.html#" + encodeURI($axure.globalVariableProvider.getLinkUrl($axure.pageData.url));


}
});
gv_vAlignTable['u53'] = 'top';gv_vAlignTable['u1'] = 'center';gv_vAlignTable['u3'] = 'center';gv_vAlignTable['u67'] = 'center';document.getElementById('u60_img').tabIndex = 0;

u60.style.cursor = 'pointer';
$axure.eventManager.click('u60', function(e) {

if (true) {

SetGlobalVariableValue('items', '' + (GetNum(GetGlobalVariableValue('items')) + 1) + '');

	self.location.href="resources/reload.html#" + encodeURI($axure.globalVariableProvider.getLinkUrl($axure.pageData.url));


}
});
document.getElementById('u64_img').tabIndex = 0;

u64.style.cursor = 'pointer';
$axure.eventManager.click('u64', function(e) {

if (true) {

SetGlobalVariableValue('items', '' + (GetNum(GetGlobalVariableValue('items')) + 1) + '');

	self.location.href="resources/reload.html#" + encodeURI($axure.globalVariableProvider.getLinkUrl($axure.pageData.url));


}
});
gv_vAlignTable['u19'] = 'top';gv_vAlignTable['u49'] = 'top';gv_vAlignTable['u11'] = 'top';gv_vAlignTable['u41'] = 'top';document.getElementById('u71_img').tabIndex = 0;

u71.style.cursor = 'pointer';
$axure.eventManager.click('u71', function(e) {

if ((GetGlobalVariableValue('busqueda')) != ('')) {

    self.location.href="resources/reload.html#" + encodeURI($axure.globalVariableProvider.getLinkUrl($axure.pageData.url));

}
});
gv_vAlignTable['u15'] = 'top';gv_vAlignTable['u45'] = 'top';gv_vAlignTable['u75'] = 'top';document.getElementById('u66_img').tabIndex = 0;

u66.style.cursor = 'pointer';
$axure.eventManager.click('u66', function(e) {

if (true) {

SetGlobalVariableValue('items', '' + (GetNum(GetGlobalVariableValue('items')) + 1) + '');

	self.location.href="resources/reload.html#" + encodeURI($axure.globalVariableProvider.getLinkUrl($axure.pageData.url));


}
});
gv_vAlignTable['u57'] = 'top';gv_vAlignTable['u13'] = 'top';gv_vAlignTable['u43'] = 'top';gv_vAlignTable['u17'] = 'top';gv_vAlignTable['u47'] = 'top';u6.tabIndex = 0;

u6.style.cursor = 'pointer';
$axure.eventManager.click('u6', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Home_Cliente.html');

}
});
gv_vAlignTable['u6'] = 'top';gv_vAlignTable['u77'] = 'center';gv_vAlignTable['u39'] = 'top';gv_vAlignTable['u69'] = 'center';gv_vAlignTable['u31'] = 'top';gv_vAlignTable['u61'] = 'center';gv_vAlignTable['u35'] = 'top';gv_vAlignTable['u65'] = 'center';gv_vAlignTable['u5'] = 'center';gv_vAlignTable['u33'] = 'top';gv_vAlignTable['u72'] = 'center';gv_vAlignTable['u63'] = 'center';gv_vAlignTable['u37'] = 'top';
u70.style.cursor = 'pointer';
$axure.eventManager.click('u70', function(e) {

if (true) {

SetWidgetFormText('u70', '');

}
});

$axure.eventManager.blur('u70', function(e) {

if (true) {

SetGlobalVariableValue('busqueda', GetWidgetText('u70'));

}
});
gv_vAlignTable['u74'] = 'top';gv_vAlignTable['u29'] = 'top';gv_vAlignTable['u59'] = 'top';document.getElementById('u4_img').tabIndex = 0;

u4.style.cursor = 'pointer';
$axure.eventManager.click('u4', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Home_Cliente.html');

}
});
