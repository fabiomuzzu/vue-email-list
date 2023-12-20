const { createApp } = Vue

createApp({
    data() {
      return {
        email: [],
      }
    },
    created(){
        for(i=0; i<10; i++){
            axios.get('https://flynn.boolean.careers/exercises/api/random/mail').then((email) => {
                this.email.push(email.data.response);
            });
        }
    },
}).mount('#app')