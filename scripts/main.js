     
    
    /*attribut des éléments */
   
    
    
     const pEssai = document.getElementById("essai");
    const input = document.getElementById("input");
    const h1 = document.getElementById("h1");
    const verifier = document.getElementById("check");
    verifier.addEventListener("click", checkInput);
    const indice = document.getElementById("indice");
    const fini = document.getElementById("fini");
    const contener = document.getElementsByClassName("contener")[0];
    let nouvellePartie = document.getElementById("newGame");
    nouvellePartie.addEventListener("click", resetGame);
    const facile = document.getElementById("niveau(easy)");
    const normal = document.getElementById("niveau(medium)");
    const difficile = document.getElementById("niveau(hard)");
    let essaiRestants = 3;
    let randomNbr = Math.floor(Math.random() * 10) + 1 ;
    const userValue = Number(input.value);


    /*ma fonction*/
    function checkInput () {
        
        const userValue = Number(input.value);/*ma valeur de input*/
        
        if (userValue == randomNbr) {


            fini.textContent = "Félicitation tu as trouvé!!!!";
            fini.style.color = "green";
            pEssai.textContent = "";
            indice.disabled = true;
            input.disabled = true;
            verifier.disabled = true;
            nouvellePartie.style.display = "inline-block";
            pEssai.disabled = true;
            
            
        }
        else if (userValue > randomNbr) {

            indice.textContent = "Perdu c'est -";
            
        }
        else {

            indice.textContent = "Perdu c'est +";
            
        } 
        // let nbrEssai = 3;
        essaiRestants-- ;
        
        if (essaiRestants > 0) {

           pEssai.textContent = "Il te reste " + essaiRestants + " essai(s)";
           pEssai.style.color = "red";

           
        }
        else if (userValue != randomNbr){

            pEssai.textContent = "Perdu, c'était " + randomNbr + "  la réponse ! ";
            pEssai.style.color = "red";
            indice.textContent = "";
            input.disabled = true;
            verifier.disabled = true;
            nouvellePartie.style.display = "inline-block";
        }
         input.value = "";
         input.focus ();
    }
    
    

    
    
    let currentLevel = "facile";
    

    function lvl(niveau)  {

        currentLevel = niveau; 
        resetGame();


        if (niveau == facile){

            randomNbr = Math.floor(Math.random() * 10) + 1;
            essaiRestants = 3;
            contener.style.display = "block";
            h1.textContent = "TROUVE LE NOMBRE ENTRE 1 ET 10";
        }
        else if (niveau == normal) {

            randomNbr = Math.floor(Math.random() * 50) + 1;
            essaiRestants = 2;
            contener.style.display = "block";
            h1.textContent = "TROUVE LE NOMBRE ENTRE 1 ET 50";
            
        }
        else if (niveau == difficile) {

            randomNbr = Math.floor(Math.random() * 100) + 1;
            essaiRestants = 1;
            contener.style.display = "block";
            h1.textContent = "TROUVE LE NOMBRE ENTRE 1 ET 100";
            
        }
        

    }
    /*reset la partie*/
    function resetGame () {

        input.disabled = false;
        verifier.disabled = false;
        nouvellePartie.style.display = "none";
        indice.textContent = "";
        pEssai.textContent = "";
        fini.textContent = "";
        input.value = "";
        input.focus();

     if (currentLevel == facile){

             randomNbr = Math.floor(Math.random() * 10 ) + 1 ;
             essaiRestants = 3;
     }
     else if (currentLevel == normal){

             randomNbr = Math.floor(Math.random() * 50 ) + 1 ;
             essaiRestants = 2;
     }
     else if (currentLevel == difficile){

             randomNbr = Math.floor(Math.random() * 100 ) + 1 ;
             essaiRestants = 1;
     }
    }