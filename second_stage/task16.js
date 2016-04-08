/**
 * aqiData，存储用户输入的空气指数数据
 * 示例格式：
 * aqiData = {
 *    "北京": 90,
 *    "上海": 40
 * };
 */
//function trim(str){ //删除左右两端的空格
　　    // return str.replace(/(^\s*)|(\s*$)/g, "");
//}

var aqiData = {};
/**
 * 从用户输入中获取数据，向aqiData中增加一条数据
 * 然后渲染aqi-list列表，增加新增的数据
 */
function addAqiData() {
  var cityData = document.getElementById('aqi-city-input').value.trim();
  var airData = document.getElementById('aqi-value-input').value.trim();
  var regExp1 = /^[A-Za-z\u4E00-\u9FA5]+$/;
  var regExp2 = /^\d+$/;
  
  if (regExp1.test(cityData)&&regExp2.test(airData)) {
    aqiData[cityData] = airData;    
  }
  else{
    alert("请输入正确的格式，输入的城市名必须为中英文字符，空气质量指数必须为整数")
  }
}

/**
 * 渲染aqi-table表格,从aqiData中提取数据
 */
function renderAqiList() {
  var table = document.getElementById('aqi-table');
  table.innerHTML = "";
  for (var cityData in aqiData){
    airData = aqiData[cityData]
    if (table.children.length === 0) {
      var tr = document.createElement("tr");
      tr.innerHTML = "<td>"+"城市"+"</td>"+"<td>"+"空气质量"+"</td>"+"<td>"+"操作"+"</td>";
      table.appendChild(tr);
   }
    var tr_add = document.createElement("tr");
    tr_add.innerHTML = "<td>"+cityData+"</td>"+"<td>"+airData+"</td>"+"<td>"+"<a href='javascript:;'>"+"删除"+"</a>"+"</td>";
    table.appendChild(tr_add);
  } 
}



/**
 * 点击add-btn时的处理逻辑
 * 获取用户输入，更新数据，并进行页面呈现的更新
 */
function addBtnHandle() {
  addAqiData();
  renderAqiList();
}


/**
 * 点击各个删除按钮的时候的处理逻辑
 * 获取哪个城市数据被删，删除数据，更新表格显示
 */
function delBtnHandle(a) {
  var tr = a.parentNode.parentNode;
  var cityData = tr.children[0].innerHTML;
  delete aqiData[cityData];
  renderAqiList();
}

function init() {

  // 在这下面给add-btn绑定一个点击事件，点击时触发addBtnHandle函数
  var add = document.getElementById('add-btn')
  if (add) {
    add.addEventListener("click", addBtnHandle,false);
  }
  
  // 想办法给aqi-table中的所有删除按钮绑定事件，触发delBtnHandle函数
  
  
  

  var table = document.getElementById("aqi-table");

  table.addEventListener("click", function(e) {
    if (e.target && e.target.nodeName === "A") {
      delBtnHandle(e.target);
    }
  })
}

  

  


init();
