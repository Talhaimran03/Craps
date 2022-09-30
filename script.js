const immagini = ["img/1.png", "img/2.png", "img/3.png", "img/4.png", "img/5.png", "img/6.png"]
lancio = 0
obiettivo = 0
let random1 = 0
let random2 = 0
const bottone  = document.getElementById("bottone");
function lancioDadi() {
    document.getElementById('bottone').disabled = true; 
    lancio += 1

    let animazione = setInterval(() => {
        random1 = Math.floor(Math.random() * 6) + 1;
        random2 = Math.floor(Math.random() * 6) + 1;
        document.getElementById("image1").src=immagini[random1-1];
        document.getElementById("image2").src=immagini[random2-1];
    }, 30);

    setTimeout(() => {
        clearInterval(animazione);

        document.getElementById("punteggio").innerHTML = "Punteggio: " + (random1 + random2)
        document.getElementById("nTiri").innerHTML = "Numero di tiri: " + lancio
        
        if(lancio == 1){
            if(random1 + random2 == 7 || random1 + random2 == 11){
                document.getElementById("risultato").innerHTML = "Hai vinto!"
                document.getElementById('bottone').disabled = true; 
                lancio = 0
            } else if(random1 + random2 == 2 || random1 + random2 == 3 || random1 + random2 == 12){
                document.getElementById("risultato").innerHTML = "Hai perso!"
                document.getElementById('bottone').disabled = true; 
                lancio = 0
            } else if(random1 + random2 != 1){
                obiettivo = random1 + random2
                document.getElementById("obiettivo").innerHTML = "Obiettivo: "+ obiettivo
                document.getElementById('bottone').disabled = false;
            }
        } else {
            if (obiettivo == (random1 + random2)){
                document.getElementById("risultato").innerHTML = "Hai vinto!"
                document.getElementById('bottone').disabled = true; 
                lancio = 0
            } else if (random1 + random2 == 7){
                document.getElementById("risultato").innerHTML = "Hai perso!"
                document.getElementById('bottone').disabled = true; 
                lancio = 0
            } else {
                document.getElementById('bottone').disabled = false;
            }
        }
    }, 350)
}

function ricomincia() {
    document.getElementById("image1").src="img/dado.png";
    document.getElementById("image2").src="img/dado.png";
    
    document.getElementById('bottone').disabled=false;
    lancio = 0;
    document.getElementById("punteggio").innerHTML = ""
    document.getElementById("nTiri").innerHTML = ""
    document.getElementById("obiettivo").innerHTML = ""
    document.getElementById("risultato").innerHTML = ""
}