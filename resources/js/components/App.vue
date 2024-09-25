<template>
  <v-layout>
    <v-app-bar app color="#20467B" dark>
      <v-app-bar-nav-icon variant="text" @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>
        Blank Laravel VUE
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <logout></logout>
    </v-app-bar>
    
    <v-main>
      <router-view></router-view>
    </v-main>
    
    <v-footer app color="#20467B" width="100%">
      <span class="white--text">&copy; Todos os direitos reservados</span>
      <v-spacer></v-spacer>
      <span class="white--text">Versão: 1.0.0_00</span>
    </v-footer>
    
    <menu-component ref="menucomponent" v-model="drawer"></menu-component>
  </v-layout>
</template>

<script>
import MenuComponent from './Menu.vue';

export default {
  data() {
    return {
      drawer: false
    };
  },
  mounted () {
    this.$refs.menucomponent.buscarMenu();
  },
  components: {
    MenuComponent
  }
};
</script>
