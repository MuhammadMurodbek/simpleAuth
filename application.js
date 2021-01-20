var signIn = document.getElementById('signIn');
var backBtn = document.getElementById('backBtn');
var firstLoginPage = document.getElementById('firstLoginPage');
var firstImgPage = document.getElementById('firstImgPage');
var secondLoginPage = document.getElementById('secondLoginPage');
var secondImgPage = document.getElementById('secondImgPage');
var logConFirst = document.getElementById('logConFirst');
var logConSecond = document.getElementById('logConSecond');

window.secondImgPage.setAttribute('style','transform: translateX(100%); opacity:0.5');
window.secondLoginPage.setAttribute('style','transform: translateX(-100%); opacity:0.5');
window.logConFirst.setAttribute('style','z-index: 5');
window.logConSecond.setAttribute('style','z-index: 3');

signIn.addEventListener('click', function(){
    window.logConSecond.setAttribute('style','z-index: 5');
    window.logConFirst.setAttribute('style','z-index: 3');
	firstLoginPage.setAttribute('style','transform: translateY(-100%); transition-duration: 1s; opacity:0.5');
	firstImgPage.setAttribute('style','transform: translateY(-100%); transition-duration: 1s; opacity:0.5');
	window.secondImgPage.setAttribute('style','left:0; opacity:1; transition-duration: 1s');
    window.secondLoginPage.setAttribute('style','right:0; opacity:1; transition-duration: 1s');
});	

backBtn.addEventListener('click',function(){
	window.logConFirst.setAttribute('style','z-index: 5');
	window.logConSecond.setAttribute('style','z-index: 3');
	window.secondImgPage.setAttribute('style','transform: translateX(100%); transition-duration: 1s; opacity:0.5');
	window.secondLoginPage.setAttribute('style','transform: translateX(-100%); transition-duration: 1s ;opacity:0.5');
	firstLoginPage.setAttribute('style','top:0; transition-duration: 1s; opacity:1');
	firstImgPage.setAttribute('style','top:0; transition-duration: 1s; opacity:1');
});