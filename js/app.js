var showHide = function(event){
	var tabSelected = event.target.dataset.tabSelected;
	var code =document.getElementById("code");
	var pull =document.getElementById("pull");
	var projects =document.getElementById("projects");
	var wiki =document.getElementById("wiki");
	var insights =document.getElementById("insights");
	var settings =document.getElementById("settings");
	if(tabSelected=== 'tabCode'){
		code.setAttribute("class", "content show");
		pull.setAttribute("class", "content hide");
		projects.setAttribute("class", "content hide");
		wiki.setAttribute("class", "content hide");
		insights.setAttribute("class", "content hide");
		settings.setAttribute("class", "content hide");
	} else if ( tabSelected==='tabPull'){
		pull.setAttribute("class", "content show");
	    code.setAttribute("class", "content hide");
		projects.setAttribute("class", "content hide");
		wiki.setAttribute("class", "content hide");
		insights.setAttribute("class", "content hide");
		settings.setAttribute("class", "content hide");
	}else if ( tabSelected==='tabProyects'){
		projects.setAttribute("class", "content show");
		pull.setAttribute("class", "content hide");
		code.setAttribute("class", "content hide");
		wiki.setAttribute("class", "content hide");
		insights.setAttribute("class", "content hide");
		settings.setAttribute("class", "content hide");
	}else if ( tabSelected==='tabWiki'){
		wiki.setAttribute("class", "content show");
		pull.setAttribute("class", "content hide");
		projects.setAttribute("class", "content hide");
		code.setAttribute("class", "content hide");
		insights.setAttribute("class", "content hide");
		settings.setAttribute("class", "content hide");
	}else if ( tabSelected==='tabInsights'){
		insights.setAttribute("class", "content show");
		pull.setAttribute("class", "content hide");
		projects.setAttribute("class", "content hide");
		wiki.setAttribute("class", "content hide");
		code.setAttribute("class", "content hide");
		settings.setAttribute("class", "content hide");
	}else if ( tabSelected==='tabSettings'){
		settings.setAttribute("class", "content show");
		pull.setAttribute("class", "content hide");
		projects.setAttribute("class", "content hide");
		wiki.setAttribute("class", "content hide");
		insights.setAttribute("class", "content hide");
		code.setAttribute("class", "content hide");
	}
}
var loadWebPage =  function() {
	var tabElements = document.getElementsByClassName("tab");
	for(var i =0; i< tabElements.length;i++) {
		tabElements[i].addEventListener("click", showHide);
	}
}

loadWebPage();