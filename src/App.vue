<template>
  <!-- <div class="container"> -->
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <router-link class="navbar-brand" to="/listar">Home</router-link> |
      <router-link class="navbar-brand" to="/about">About</router-link>
      <router-link class="navbar-brand" to="/crear">Crear</router-link> 
      <!-- <router-link class="navbar-brand" to="/editar">Editar</router-link> -->
      <!-- <router-link class="navbar-brand" to="/listar">Listar</router-link> -->
    </nav>
    <router-view/>
  <!-- </div> -->
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
