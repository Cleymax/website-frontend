<template>
  <v-app id="inspire">
    <v-toolbar fixed dense>
      <v-avatar size="30" color="grey lighten-4">
        <img src="https://avatars1.githubusercontent.com/u/15371828?s=88&v=4" height="35" alt="logo">
      </v-avatar>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-sm-and-down">
      <v-btn flat @click="$vuetify.goTo('#presentation')">Présentation</v-btn>
        <v-btn flat @click="$vuetify.goTo('#projects')">Mes projets</v-btn>
        <v-btn flat>Compétences</v-btn>
        <v-btn flat>Me contacter</v-btn>
      </v-toolbar-items>
    </v-toolbar>

    <v-content>
      <router-view></router-view>
    </v-content>

    <v-footer class="pa-3">
      <v-spacer></v-spacer>
      <div>ananagame &copy; {{ new Date().getFullYear() }}</div>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  data () {

  }
}
</script>
