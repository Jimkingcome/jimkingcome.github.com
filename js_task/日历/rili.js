var aDatas=[
    "春",
"夏",
"秋",
"冬",
"我",
"不",
"知",
"道",
"说",
"什",
"啊",
"完"
];
//数组逗号
window.onload=function(){
	var oDiv=document.getElementById('tab');
	var aUl=oDiv.getElementsByTagName('ul')[0];
	var aIl=aUl.getElementsByTagName('li');
	var aTxt=oDiv.getElementsByTagName('div')[0];
    
    var i=0;

	for ( i=0; i<aIl.length;i++){
		aIl[i].index=i;
		aIl[i].onmouseover=function  () {
			for (var i = aIl.length - 1; i >= 0; i--) {
				aIl[i].className='';
			};
			this.className='active';
			aTxt.innerHTML="<h2>"+(this.index+1)+'月活动</h2><p>'+aDatas[this.index]+'</p>';
		};

	};
};