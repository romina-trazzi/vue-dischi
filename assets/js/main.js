/* Attraverso una chiamata Ajax all’Api di boolean avremo a disposizione 
una decina di dischi musicali.
Servendoci di Vue JS stampiamo tutto a schermo.
In questo momento non è importante la parte graﬁca.
Bonus: Creare una select con i seguenti generi: pop, rock, metal e jazz. 
In base a cosa scegliamo nella select vedremo i corrispondenti cd. */



let app = new Vue ({
    el: "#app",
    data : {
        dischiList: [] 
    },
    mounted () {  
        axios.get("https://flynn.boolean.careers/exercises/api/array/music").then(response => {  
            // console.log(response)
            const theDisco = response.data.response;  // otteniamo i dati di risposta e li salviamo nell'array            
            this.dischiList = theDisco;
            console.log(this.dischiList);
        })
        .catch(error => {
            console.log("Error " + error) // gestiamo l'errore

        })
        
    }
})



