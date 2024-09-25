<template>
  <v-navigation-drawer v-bind="$attrs" app temporary width="300">

    <v-list density="compact" nav>
      <div v-for="(item, index) in itens" :key="index">
        <v-list-item 
          :to="item.url" 
          v-if="!item.items"
          :title="item.titulo"
          :prepend-icon="item.icone"
        ></v-list-item>
  
        <v-list-group v-if="item.items">
          <template v-slot:activator="{props}">
            <v-list-item 
              v-bind="props"
              :title="item.titulo"
              :prepend-icon="item.icone"
            ></v-list-item>
          </template>
  
          <div v-for="(subitem, si) in item.items" :key="index+'_'+si">
            <v-list-item 
              v-if="!subitem.items"
              :to="subitem.url" 
              :title="subitem.titulo"
              :append-icon="subitem.icone"
            ></v-list-item>
  
            <v-list-group v-if="subitem.items">
              <template v-slot:activator="{props}">
                <v-list-item 
                  v-bind="props"
                  :to="subitem.url" 
                  :title="subitem.titulo"
                  :append-icon="subitem.icone"
                ></v-list-item>
              </template>
              <div v-for="(subitem2, si2) in subitem.items" :key="index+'_'+si+'_'+si2">
                <v-list-item 
                  :to="subitem2.url" 
                  :title="subitem2.titulo"
                  :prepend-icon="subitem2.icone"
                ></v-list-item>
              </div>
            </v-list-group>
          </div>
        </v-list-group>
      </div>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      itens: [],
      drawer: false
    };
  },
  methods: {
    buscarMenu () {
      axios.post('/menu', {}).then((response) => {return JSON.parse(JSON.stringify(response.data));})
        .then((menu) => {
          this.itens = menu;
        });
    }
  }
};
</script>
