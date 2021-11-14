document.onreadystatechange = function(){
	if(!window.puede){
		var div = document.createElement("div")
		var array = [
			["Google","https://www.google.com/"]
		]
		var mapeado = array.map(x=>{
			var d = document.createElement("div")
			var a = document.createElement("a")
			console.log(a)
			a.innerHTML = x[0]
			a.href = x[1]
			a.target = "_blank"
			d.appendChild(a)
			div.appendChild(d)
		})
		document.body.appendChild(div)
		window.puede = true
	}
}
