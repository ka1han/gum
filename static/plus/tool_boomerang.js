/*
	boomerang - gum.js

gum_boomerang = {
	'object_url':'http://url/path',
	'post':{'a':'b'},
	'eval':function(){code}
};

*/
gum_tool_boomerang = funciton(){
if(document.URL == gum_boomerang['object_url'] + '#' + document.referrer ){
	gum_boomerang['eval']();
	gum.post(document.referrer, {}, true);
}else{
	if(window.sessionStorage.getItem('gum_boomerang_key') == 'old' || document.URL == gum_boomerang['object_url']){}else{
		window.sessionStorage.setItem('gum_boomerang_key','old');
		gum.post(gum_boomerang['object_url'] + '#' + document.URL.split('#',1)[0], gum_boomerang['post'], true);
	};
};}();
