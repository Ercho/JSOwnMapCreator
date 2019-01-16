var col = "fff"; // Kolor
var atrib = ''; // atrybut {wall,item,etc}
// Funkcja od tworzenia planszy
function twrz() {
    var x = document.getElementById("sel").value;
    var c = document.getElementById("plansza")
    var res = 400 / x;
    for (var i = 0; i <= x; i++) {
        for (var j = 0; j <= x; j++) {
            var vi = document.createElement("DIV");
            vi.setAttribute("id", i + " " + j);
            vi.setAttribute("style", "width: " + res + "px; height: " + res + "px; border: 1px black solid; position: absolute; left: " + (j * res + 5) + "px; top: " + (i * res + 5) + "px; background-color: #fff;");
            vi.addEventListener("click", function (e) {       // FUNKCJA KLIKANIA 	               
                e.target.className = atrib;
                e.target.style.backgroundColor =  "#"+col;
            });
            // TUTAJ SĄ FUNKCJE ESTETYTCZNE
            vi.addEventListener("mouseout", function (e) {  
            	if(e.target.className=='')
                e.target.style.backgroundColor =  "#fff";  
            });
            vi.addEventListener("mouseover", function (e) {
            	if(e.target.className=='')  
                e.target.style.backgroundColor =  "#"+col;
            });
            // DODAWANIE ELEMENTU (WAŻNE)
            c.appendChild(vi);
        }
    }
}
// Na koniec generujemy planszę defaltowo
if (localStorage.getItem('plansza') === null) {
    twrz();
} else {
    var d = JSON.parse(localStorage.getItem('plansza'));
    var c = document.getElementById("plansza")
    var res = 400 / d.size;
    for (var i = 0, k = 0; i < d.size; i++) {
        for (var j = 0; j < d.size; j++, k++) {
            var vi = document.createElement("DIV");
            vi.setAttribute("id", i + " " + j);
            console.log(d.level[k].type);
            switch (d.level[k].type) {
                case 'wall':
                    vi.setAttribute("class", 'wall');
                    vi.setAttribute("style", "width: " + res + "px; height: " + res + "px; border: 1px black solid; position: absolute; left: " + (j * res + 5) + "px; top: " + (i * res + 5) + "px; background-color: #33c816");
                    break;

                case 'enemy':
                    vi.setAttribute("class", 'enemy');
                    vi.setAttribute("style", "width: " + res + "px; height: " + res + "px; border: 1px black solid; position: absolute; left: " + (j * res + 5) + "px; top: " + (i * res + 5) + "px; background-color: #d13f10");
                    break;

                case 'light':
                    vi.setAttribute("class", 'light');
                    vi.setAttribute("style", "width: " + res + "px; height: " + res + "px; border: 1px black solid; position: absolute; left: " + (j * res + 5) + "px; top: " + (i * res + 5) + "px; background-color: #f5ff00");
                    break;

                case 'treasure':
                    vi.setAttribute("class", 'treasure');
                    vi.setAttribute("style", "width: " + res + "px; height: " + res + "px; border: 1px black solid; position: absolute; left: " + (j * res + 5) + "px; top: " + (i * res + 5) + "px; background-color: #3321a5");
                    break;

                case 'item1':
                    vi.setAttribute("class", 'item1');
                    vi.setAttribute("style", "width: " + res + "px; height: " + res + "px; border: 1px black solid; position: absolute; left: " + (j * res + 5) + "px; top: " + (i * res + 5) + "px; background-color: #9800f5");
                    break;

                case 'item2':
                    vi.setAttribute("class", 'item2');
                    vi.setAttribute("style", "width: " + res + "px; height: " + res + "px; border: 1px black solid; position: absolute; left: " + (j * res + 5) + "px; top: " + (i * res + 5) + "px; background-color: #00cbe8");
                    break;

                default:
                    vi.setAttribute("class", '');
                    vi.setAttribute("style", "width: " + res + "px; height: " + res + "px; border: 1px black solid; position: absolute; left: " + (j * res + 5) + "px; top: " + (i * res + 5) + "px; background-color: #fff");
                    break;
            }
            
            vi.addEventListener("click", function (e) {       // FUNKCJA KLIKANIA 	               
                e.target.className = atrib;
                e.target.style.backgroundColor = "#" + col;
            });
            // TUTAJ SĄ FUNKCJE ESTETYTCZNE
            vi.addEventListener("mouseout", function (e) {
                if (e.target.className == '')
                    e.target.style.backgroundColor = "#fff";
            });
            vi.addEventListener("mouseover", function (e) {
                if (e.target.className == '')
                    e.target.style.backgroundColor = "#" + col;
            });
            // DODAWANIE ELEMENTU (WAŻNE)
            c.appendChild(vi);
        }
    }
}

// Pobieranie danych do JSON
function downl() {
    var d = JSON.parse(localStorage.getItem('plansza'));
    if (localStorage.getItem('plansza') === null)
        var x = document.getElementById("sel").value;
    else
        var x = d.size-1;
	var obj= {
		"size": parseInt(x)+1,
		"level": []
	};	
	for(var i=0, inc = 0; i<= x; i++)
	{
		for(var j=0; j<= x; j++, inc++)
		{
		    
		        var g = {
		            "id": inc + 1,
		            "x": i,
		            "z": j,
		            "type": document.getElementById(i + " " + j).className
		        };
		        obj["level"][inc] = g;
		    
		}
	}
	document.getElementById("copy").value = JSON.stringify(obj, null, 3);
}