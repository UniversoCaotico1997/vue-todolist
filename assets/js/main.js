
// Descrizione:
// Rifare l'esercizio della to do list. Questa volta però ogni todo sarà un oggetto, formato da due proprietà:
// text, una stringa che indica il testo del todo
// done, un booleano (true/false) che indica se il todo è stato fatto oppure no


// MILESTONE 1
// Stampare all'interno di una lista, un item per ogni todo. 
   // Se la proprietà done è uguale a true, visualizzare il testo del todo sbarrato.


// MILESTONE 2
// Visualizzare a fianco ad ogni item  una "x": cliccando su di essa, il todo viene rimosso dalla lista.


// MILESTONE 3
// Predisporre un campo di input testuale e un pulsante "aggiungi": 
   //cliccando sul pulsante, il testo digitato viene letto e utilizzato per creare un nuovo todo, che quindi viene aggiunto alla lista dei todo esistenti.


// Bonus:
// 1- oltre al click sul pulsante, intercettare anche il tasto ENTER per aggiungere il todo alla lista
// 2- cliccando sul testo dell'item, invertire il valore della proprietà done del todo corrispondente (se done era uguale a false, impostare true e viceversa)








const { createApp } = Vue

  createApp({
    data() {
      return {
        newTask:[],
        error:false,
        tasks:[
            {
             text:`Fare la spesa`,
             done:true   
            },
            {
             text:`Andare in palsetra`,
             done:false  
            },
            {
             text:`Portare fuori il cane`,
             done:true   
            },
            {
              text:`Vedere amici`,
              done:false  
            },
            {
              text:`Andare dal Barbiere`,
              done:true   
            },     
        ] 
      }
    },
    methods:{
        addTask(){
          
            // console.log(`ho cliccato`);
            // console.log(this.newTask); 
            const userTask = {
              text:this.newTask,
              done:false
            }
            // console.log(userTask);


            // Non consentire l 'aggiunta di task vuota o minore di 5 caratteri 
            
            if (this.newTask.length < 5 ) {
                this.error = true
            } else {
              this.error = false
              // pusho la task 
              this.tasks.unshift(userTask)

              // Svuota imput 
              this.newTask = "";
            }
            
          },
        done(index){
            // console.log(`ho cliccato`, index);
            this.tasks.splice(index, 1);
        }
    }
  }).mount('#app')

  // se la task non è un booleano vero
    // sbarra la task
    // if (task == true) {
        // this.task
        
    // }