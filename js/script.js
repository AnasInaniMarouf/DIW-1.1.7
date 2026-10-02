let contenedorCajas = document.getElementById("contenedorCajas");

//alert("hola");

let caja, checkBox;

let arrayJuguetes = ["Pelota", "Cama", "Peluche", "Cuerda de morder", "Rascador"];
let arrayAnimales = ["gatos", "perros", "conejos"];

for (let i = 1; i <= 12; i++) {

    caja = document.createElement("div");
    caja.className = "cajas";

    checkBox = document.createElement("input");
    checkBox.type = "checkbox";
    checkBox.className = "checks"
    
    //caja.append("Juguete " + i);
    caja.append(arrayJuguetes[Math.floor(Math.random() * 4)] + " para " + arrayAnimales[Math.floor(Math.random() * 3)]);
    caja.appendChild(document.createElement("br"));
    caja.appendChild(document.createElement("br"));
    caja.appendChild(checkBox);

    contenedorCajas.appendChild(caja);
}

document.getElementById("botonAñadirCarrito").addEventListener("click", () => {

    let cont = 0;

    for(i of document.getElementsByClassName("checks")) {
        
        if(i.checked) {
            cont++;
        }
    }

    alert("Numero de juguetes comprados: " + cont);
})