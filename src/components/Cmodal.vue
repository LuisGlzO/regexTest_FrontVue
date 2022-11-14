<template>
    <div>
      <b-modal  ref="my-modal" @hidden="get_close" @shown="get_Data" :size="Modal.Size" hide-footer>
        <template v-slot:modal-header="{}">
          <h5 class="modal-title" id="exampleModalLabel">{{Modal.Titulo}}</h5>
          <!-- Emulate built in modal header close button action -->
          <b-button size="sm" class="btn close close-2 "  @click="hideModal()">
            <i class="fas fa-times-circle"></i>
          </b-button>
        </template>
  
        <div class="modal-body">
          <div>
            <slot name="Form">
            </slot>
          </div>
        </div>
        
        <Cbtnsave :pBoton='pBoton'></Cbtnsave>
      </b-modal>
   
    </div>
  </template>
  
  <script>
  
    export default {
      props:['pModal','pBoton'],
      data() {
        return {
          Modal:{ 
            Titulo:'Nuevo',
            Size:'xl',//xl,lg,sm
          },
          Id:0,
          Objeto:{}
        }
      },
      methods: {
        showModal(Id,Objeto) {
          this.$refs['my-modal'].show();
          this.Id=Id;
          this.Objeto=Objeto;
        },
        hideModal() {
          this.$refs['my-modal'].hide()
        },
        toggleModal() {
          // We pass the ID of the button that we want to return focus to
          // when the modal has hidden
          this.$refs['my-modal'].toggle('#toggle-btn');  
        },
        get_Data(){
          //cuando abre modal hacer accion
          this.bus.$emit('Desbloqueo',false);
          this.bus.$emit('Recupera',this.Id,this.Objeto);
        },
        get_close(){
          //cuando se cierra hacer accion
          let objList={
            // Paginacion:true,
            // pag:this.page,
          }
          this.bus.$emit('List',objList);
        }
      },
      created()
      {
        this.bus.$off('NuevoModal');
        this.bus.$off('CloseModal');
        //this.bus.$off('Recupera');
          
        //valores recibidos de otras ventanas
        if(this.pModal!=undefined){
          if(this.pModal.Titulo!=undefined){this.Modal.Titulo=this.pModal.Titulo;}
          if(this.pModal.Size!=undefined){this.Modal.Size=this.pModal.Size;}
        }
  
        this.bus.$on('NuevoModal',(Id,obj)=> {     
          this.showModal(Id,obj);
          if(Id>0)
          {
            if(this.pModal.Titulo!=undefined){this.Modal.Titulo=this.pModal.Titulo;}else{
            this.Modal.Titulo='Editar';}
          }else{
            if(this.pModal.Titulo!=undefined){this.Modal.Titulo=this.pModal.Titulo;}else{
            this.Modal.Titulo='Nuevo';}
          }
        });
  
        this.bus.$on('CloseModal',(data,Id)=> {
          this.hideModal();
        });
      },
    }
  </script>