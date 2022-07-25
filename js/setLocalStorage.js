function setStorage(){
	var setName = document.getElementById("name").value;
	var name = localStorage.setItem("nome", setName);
	return name;
}
