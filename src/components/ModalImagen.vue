<template>
    <div class="d-block modal-mask">
        <div class="modal-wrapper">
            <div class="modal-container">
                <div class="modal-body">
                    <img class="image" src="http://127.0.0.1:8000/storage/postImages/20221113191815_jpg" alt="">
                </div>
                <div class="modal-footer">
                    <slot name="footer">
                        <button class="custom-btn custom-btn-primary modal-button" @click="$emit('close')">Close</button>
                    </slot>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default{
    name: 'imageC'
}
</script>

<style>
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, .5);
  display: table;
  transition: opacity .3s ease;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}

.modal-container {
  width: 300px;
  margin: 0px auto;
  padding: 20px 30px;
  background-color: #fff;
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, .33);
  transition: all .3s ease;
  font-family: Helvetica, Arial, sans-serif;
}

.modal-enter {
  opacity: 0;
}

.modal-leave-active {
  opacity: 0;
}

.modal-enter .modal-container,
.modal-leave-active .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}

.image{
    position:sticky;
}

/* .modal-body{
    position: fixed;
} */
</style>