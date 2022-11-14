<template>
    <div class="container">
        <div class="row">
            
            <div class="col-lg-3"></div>
            <div class="col-lg-6" style="width: 18rem;">
                <div>
                    <h3>UPLOAD YOUR IMAGE </h3>  
                </div>
                <div >
                    <form class="form-horizontal">
                        <div class="form-group">
                        <label for=""></label>
                        <img v-if="Img" ref="imagenpreview"  class="mr-2" width="200" height="200" :src="Img" >
                        <input type="file" @change="uploadImage($event)" class="form-control-file" name="" id="" placeholder="Choose file" aria-describedby="fileHelpId">
                        <small id="fileHelpId" class="form-text text-muted"></small>
                        </div>
                        <div class="form-group">
                        <label for="title">Title</label>
                        <input type="text" v-model="post.title"
                            class="form-control" name="title" id="title" aria-describedby="helpId" placeholder="Image title">
                        <small id="helpId" class="form-text text-muted"></small>
                        </div>
                        <div class="form-group">
                        <label for="description">Description</label>
                        <input type="text" v-model="post.description"
                            class="form-control" name="description" id="description" aria-describedby="helpId" placeholder="Image description">
                        <small id="helpId" class="form-text text-muted"></small>
                        </div>
                        <div class="btn-group" role="group" aria-label="">
                            <button type="button" class="btn btn-primary" @click="save()">Upload</button>
                            <button type="button" class="btn btn-danger">Cancel</button>
                        </div>
                    </form>
                </div>
            </div>
            <div class="col-lg-3"></div>
        </div>
    </div>
</template>

<script>
import axios from "axios";

export default {
    data(){
        return{
            post:{
                title: '',
                description: '',
                image: null
            },
            Img:null,
            urlApi:"post",
        }
    },
    methods:{
        save(){
            let formData = new FormData();

            formData.set('title',    this.post.title);
            formData.set('description', this.post.description);
            // formData.set('image', this.post.image);
            // formData.set('fileImg', this.post.image);

            formData.append('image',this.post.image);

            axios.post('http://127.0.0.1:8000/api/posts', formData, {
                headers: {"Content-Type": "multipart/form-data",},
				})
				.then((response) => {
                    console.log(response);
                    window.location.href='listar';
				})
				.catch((error) => {
					console.log(error);
				});





                // console.log(formData.get('file'));

            // fetch('http://127.0.0.1:8000/api/posts', {
            //     method: 'POST',
            //     body: formData,
            // })
            // .then(respuesta=>respuesta.json())
            // .then(datosRespuesta=>{
            //     console.log(datosRespuesta);
            //     console.log("AWEBO!");
            // });

        },
        uploadImage(e) {
            var file = e.target.files[0]
				var reader = new FileReader()
				// var that = this
				reader.readAsDataURL(file)
				reader.onload= e =>{this.Img = e.target.result;}

                this.post.image = e.target.files[0]
        }
    }
}
</script>