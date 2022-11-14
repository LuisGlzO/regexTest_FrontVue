<template>
    <div class="container p-4">
        <div class="row">
            <!-- <div class="card-colums"> -->
                <div v-for="post in ListaPosts" :key="post.IdPost" class="card m-4" style="width: 18rem;">
                    <img :src="post.image" class="card-img-top">
                    <div class="card-body">
                        <h5 class="card-title">{{ post.title }}</h5>
                        <p class="card-text">{{ post.description }}</p>
                        <button class="btn btn-primary" @click="openModal()">open (no funciona)</button>
                    </div>
                </div>
            <!-- </div> -->
            
        </div>
        <Modal v-if="showModal" @close="showModal = false"/>
    </div>
</template>

<script>
import Modal from './ModalImagen.vue'
export default {
    name: 'ListaC',
    components:{
        Modal
    },
    data(){
        return{
            ListaPosts:[],
            urlApi:"post",
            showModal: false
        }
    },
    methods:{
        async List(){
            this.ListaPosts = [];
            console.log("hola vue");

            fetch('http://127.0.0.1:8000/api/posts', {method: 'GET'})
            .then(respuesta=>respuesta.json())
            .then((datosRespuesta)=>{
                // console.log(datosRespuesta)
                datosRespuesta.posts.forEach(element => {
                    let obj = {
                        IdPost: element.id, 
                        title: element.title, 
                        description:element.description, 
                        image: 'http://127.0.0.1:8000/' + element.image
                    }
                    this.ListaPosts.push(obj);
                });
                
                console.log(this.ListaPosts);
            })
            .catch(console.log)

        },
        openModal(){
            this.showModal = true;
        },
    },
    created(){
        this.List();
    }
}
</script>