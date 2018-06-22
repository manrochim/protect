function disableCtrlKeyCombination(e){
//list all CTRL + key combinations you want to disable
var forbiddenKeys = new Array("a", "s", "c", "u");
var key;
var isCtrl;
if(window.event){
key = window.event.keyCode; //IE
if(window.event.ctrlKey)
isCtrl = true;
else
isCtrl = false;
}else{
key = e.which;     //firefox
if(e.ctrlKey)
isCtrl = true;
else
isCtrl = false;
}
//if ctrl is pressed check if other key is in forbidenKeys array
if(isCtrl){
for (i = 0; i < forbiddenKeys.length; i++){
//case-insensitive comparation
if (forbiddenKeys[i].toLowerCase() == String.fromCharCode(key).toLowerCase()){
//alert("Key combination CTRL + "
//+ String.fromCharCode(key)
//+ " has been disabled.");                                   
return false;}
}
}
return true;}

<!--
function mouseDown(e) {
 var shiftPressed=0;
 var evt = e?e:window.event;
 if (parseInt(navigator.appVersion)>3) {
  if (document.layers && navigator.appName=="Netscape")
       shiftPressed=(evt.modifiers-0>3);
  else shiftPressed=evt.shiftKey;
  if (shiftPressed) {
  alert ('Shift-click is disabled.')
   return false;
  }
 }
 return true;
}
if (parseInt(navigator.appVersion)>3) {
 document.onmousedown = mouseDown;
 if (document.layers && navigator.appName=="Netscape") 
  document.captureEvents(Event.MOUSEDOWN);
}
//-->