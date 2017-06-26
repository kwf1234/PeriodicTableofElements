var last_ID = 1;

function mouseClick(id) {
	var periodNum;
	var groupNum;
	var markLine;
	var grid;
	var last_Grid;
	//清除上一个格子style样式
	last_Grid = document.getElementById(last_ID);
	last_Grid.removeAttribute('style');
	//标记上一个格子
	last_ID = id;
	//清除族序号的加黑
	groupNum = document.getElementsByClassName("GroupNumber");
	for(var i = 0; i < groupNum.length; i++) {
		groupNum[i].style.backgroundColor = "white";;
	}
	//清除周期序号的加黑
	periodNum = document.getElementsByClassName("PeriodNumber");
	for(var i = 0; i < periodNum.length; i++) {
		periodNum[i].style.backgroundColor = "white";
	}
	//清除标记栏的加黑
	markLine = document.getElementsByClassName("Mark_Line");
	for(var i = 0; i < markLine.length; i++) {
		markLine[i].style.backgroundColor = "white";
	}
	//加深格子颜色
	grid = document.getElementById(id);
	grid.style.border = "1px solid black";
	//加黑标记栏
	if(id == 3 || id == 11 || id == 19 || id == 37 || id == 55 || id == 87) {
		markLine = document.getElementById("Alkali_metal");
		markLine.style.backgroundColor = "lightgray";
		grid.style.backgroundColor = "#3fc078";
		grid.style.boxShadow = "0px 0px 5px 3px MediumSeaGreen inset";

	} else if(id == 4 || id == 12 || id == 20 || id == 38 || id == 56 || id == 88) {
		markLine = document.getElementById("Alkali_earth_metal");
		markLine.style.backgroundColor = "lightgray";
		grid.style.backgroundColor = "#6aedb7";
		grid.style.boxShadow = "0px 0px 5px 3px #00FA9A inset";
	} else if(id == 9 || id == 17 || id == 35 || id == 53 || id == 85 || id == 117) {
		markLine = document.getElementById("Halogen");
		markLine.style.backgroundColor = "lightgray";
		grid.style.backgroundColor = "#dfbce1";
		grid.style.boxShadow = "0px 0px 5px 3px #d5a1d7 inset";
	} else if(id == 2 || id == 10 || id == 18 || id == 36 || id == 54 || id == 86 || id == 118) {
		markLine = document.getElementById("Inert_gas");
		markLine.style.backgroundColor = "lightgray";
		grid.style.backgroundColor = "#dfece8";
		grid.style.boxShadow = "0px 0px 5px 3px #d8dfdc inset";
	} else if(id >= 57 && id <= 71) {
		markLine = document.getElementById("Lanthanoid");
		markLine.style.backgroundColor = "lightgray";
		grid.style.backgroundColor = "#9efff9";
		grid.style.boxShadow = "0px 0px 5px 3px #06f2f0 inset";
	} else if(id >= 89 && id <= 103) {
		markLine = document.getElementById("Actinoid");
		markLine.style.backgroundColor = "lightgray";
		grid.style.backgroundColor = "#63dcff";
		grid.style.boxShadow = "0px 0px 5px 3px #21c7fa inset";
	} else if((id >= 21 && id <= 30) || (id >= 39 && id <= 48) || (id >= 72 && id <= 80) || (id >= 104 && id <= 112)) {
		markLine = document.getElementById("Transition_elements");
		markLine.style.backgroundColor = "lightgray";
		grid.style.backgroundColor = "#f1e9c2";
		grid.style.boxShadow = "0px 0px 5px 3px #e2e2ad inset";
	} else if((id >= 5 && id <= 8) || (id >= 14 && id <= 16) || (id >= 33 && id <= 34) || id == 1 || id == 52) {
		markLine = document.getElementById("Nonmetal");
		markLine.style.backgroundColor = "lightgray";
		grid.style.backgroundColor = "#f1d992";
		grid.style.boxShadow = "0px 0px 5px 3px #eeca94 inset";
	} else {
		markLine = document.getElementById("Main_group_metal");
		markLine.style.backgroundColor = "lightgray";
		grid.style.backgroundColor = "#f3c9d0";
		grid.style.boxShadow = "0px 0px 5px 3px #eeb3bd inset";
	}
	//加黑族名
	if(id == 1 || id == 3 || id == 11 || id == 19 || id == 37 || id == 55 || id == 87) {
		groupNum = document.getElementById("IA");
		groupNum.style.backgroundColor = "lightgray";
	} else if(id == 4 || id == 12 || id == 20 || id == 38 || id == 56 || id == 88) {
		groupNum = document.getElementById("IIA");
		groupNum.style.backgroundColor = "lightgray";
	} else if(id == 21 || id == 39 || (id >= 57 && id <= 71) || (id >= 89 && id <= 103)) {
		groupNum = document.getElementById("IB");
		groupNum.style.backgroundColor = "lightgray";
	} else if(id == 22 || id == 40 || id == 72 || id == 104) {
		groupNum = document.getElementById("IIB");
		groupNum.style.backgroundColor = "lightgray";
	} else if(id == 23 || id == 41 || id == 73 || id == 105) {
		groupNum = document.getElementById("IIIB");
		groupNum.style.backgroundColor = "lightgray";
	} else if(id == 24 || id == 42 || id == 74 || id == 106) {
		groupNum = document.getElementById("IVB");
		groupNum.style.backgroundColor = "lightgray";
	} else if(id == 25 || id == 43 || id == 75 || id == 107) {
		groupNum = document.getElementById("VB");
		groupNum.style.backgroundColor = "lightgray";
	} else if(id == 26 || id == 44 || id == 76 || id == 108) {
		groupNum = document.getElementById("VIB");
		groupNum.style.backgroundColor = "lightgray";
	} else if(id == 27 || id == 44 || id == 77 || id == 109) {
		groupNum = document.getElementById("VIIB");
		groupNum.style.backgroundColor = "lightgray";
	} else if((id >= 28 && id <= 30) || (id >= 46 && id <= 48) || (id >= 78 && id <= 80) || (id >= 110 && id <= 112)) {
		groupNum = document.getElementById("VIII");
		groupNum.style.backgroundColor = "lightgray";
	} else if(id == 5 || id == 13 || id == 31 || id == 49 || id == 81 || id == 113) {
		groupNum = document.getElementById("IIIA");
		groupNum.style.backgroundColor = "lightgray";
	} else if(id == 6 || id == 14 || id == 32 || id == 50 || id == 82 || id == 114) {
		groupNum = document.getElementById("IVA");
		groupNum.style.backgroundColor = "lightgray";
	} else if(id == 7 || id == 15 || id == 33 || id == 51 || id == 83 || id == 115) {
		groupNum = document.getElementById("VA");
		groupNum.style.backgroundColor = "lightgray";
	} else if(id == 8 || id == 16 || id == 34 || id == 52 || id == 84 || id == 116) {
		groupNum = document.getElementById("VIA");
		groupNum.style.backgroundColor = "lightgray";
	} else if(id == 9 || id == 17 || id == 35 || id == 53 || id == 85 || id == 117) {
		groupNum = document.getElementById("VIIA");
		groupNum.style.backgroundColor = "lightgray";
	} else if(id == 2 || id == 10 || id == 18 || id == 36 || id == 54 || id == 86 || id == 118) {
		groupNum = document.getElementById("VIIIA");
		groupNum.style.backgroundColor = "lightgray";
	}
	//				加黑周期名
	if(id <= 2) {
		periodNum = document.getElementById("zhouqi1");
		periodNum.style.backgroundColor = "lightgray";
	} else if(id <= 10) {
		periodNum = document.getElementById("zhouqi2");
		periodNum.style.backgroundColor = "lightgray";
	} else if(id <= 18) {
		periodNum = document.getElementById("zhouqi3");
		periodNum.style.backgroundColor = "lightgray";
	} else if(id <= 36) {
		periodNum = document.getElementById("zhouqi4");
		periodNum.style.backgroundColor = "lightgray";
	} else if(id <= 54) {
		periodNum = document.getElementById("zhouqi5");
		periodNum.style.backgroundColor = "lightgray";
	} else if(id <= 86) {
		periodNum = document.getElementById("zhouqi6");
		periodNum.style.backgroundColor = "lightgray";
	} else if(id <= 118) {
		periodNum = document.getElementById("zhouqi7");
		periodNum.style.backgroundColor = "lightgray";
	} else {
		ele.style.backgroundColor = '#' + "ffaaaa";
		ele.style.borderColor = "#000000";
		var groupNum = document.getElementById("zu8");
		groupNum.style.backgroundColor = "lightgray";
		periodNum = document.getElementById("zhouqi4");
		periodNum.style.backgroundColor = "lightgray";
	}
	
	//显示器上显示元素的具体信息font-size: 25px;text-align: right;border:1px solid black;
	$(".Monitor").empty();
	$(".Monitor").append("<div style='width:58px;height:80px;color: black;float: left;'><div style='font-size: 25px;text-align: right;margin-top:2px;margin-right:5px;'>"+id+"</div><div style='font-size: 25px;text-align: right;margin-top:25px;margin-right:5px;'>"+id+"</div><div>");
	
	$.getJSON("data.json", function(json){
		$(".Monitor").append("<div style='width:63px;color: black;float: left;font-size: 70px;text-align: center;' >"+json[id-1].name+"<div>");
		$(".Monitor").append("<div style='width:188px;color: black;float: left;font-size: 25px;text-align: center;' >"+json[id-1].symbol+":"+json[id-1].ename+"<div>");
		$(".Monitor").append("<div style='width:188px;color: black;float: left;font-size: 15px;text-align: left;margin:5px;' >"+"电子排布:"+"<div>");
		$(".Monitor").append("<div style='width:188px;color: black;float: left;font-size: 20px;text-align: center;' >"+json[id-1].electron+"<div>");
});
}