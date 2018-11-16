<template>
  <div id="app">
    <notifications position="top center"></notifications>

    <header>
      <b-navbar type="dark" variant="primary" class="pl-1">
        <b-navbar-brand>
          <b-btn v-b-toggle.leftnav="" variant="primary" size="">
            <font-awesome-icon icon="bars" />
          </b-btn>
          Cloudmesh 4
        </b-navbar-brand>
      </b-navbar>
    </header>

    <main class="d-flex h-100">
      <b-collapse id="leftnav" visible="" class="flex-shrink-1 align-self-stretch no-animation">
        <b-nav class="h-100" vertical="">
          <left-nav></left-nav>
        </b-nav>
      </b-collapse>

      <b-container fluid="" class="p-4 align-self-start">
        <router-view/>
      </b-container>
    </main>
    
  </div>
</template>

<script>
  import LeftNav from './components/LeftNav.vue'
  
  export default {
    components:{
        'left-nav': LeftNav
    }
  }
</script>
