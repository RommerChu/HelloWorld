let city = prompt ("Enter your city")
let key = /W3S/i
let result = key.ignoreCase

if (city == "Brampton"){
	console.log ("Chinguacousy Park")
}

else if (city =="Mississauga") {
	console.log ("Square One")
}

else if (city == "Toronto"){
	console.log ("CN Tower")
}

else if (city == "GTA"){
	console.log ("BMO soccer field")
}

else {
	console.log ("Not enough information")
}