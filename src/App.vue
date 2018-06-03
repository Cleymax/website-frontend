<template>
  <v-app id="inspire">
    <v-toolbar fixed dense>
      <v-avatar size="30" color="grey lighten-4">
        <img src="https://avatars1.githubusercontent.com/u/15371828?s=88&v=4" height="35" alt="logo">
      </v-avatar>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-xs-only">
        <v-btn flat @click="$vuetify.goTo('#presentation')">Présentation</v-btn>
        <v-btn flat @click="$vuetify.goTo('#projects')">Mes projets</v-btn>
        <v-btn flat @click="$vuetify.goTo('#compétences')">Compétences</v-btn>
      </v-toolbar-items>
      <v-menu
        transition="slide-y-transition"
        class="hidden-sm-and-up"
        open-on-hover
        offset-y>
        <v-toolbar-side-icon slot="activator"></v-toolbar-side-icon>
        <v-list>
          <v-list-tile @click="$vuetify.goTo('#presentation')">
            <v-list-tile-title>Présentation</v-list-tile-title>
          </v-list-tile>
          <v-list-tile @click="$vuetify.goTo('#projects')">
            <v-list-tile-title>Mes projets</v-list-tile-title>
          </v-list-tile>
          <v-list-tile @click="$vuetify.goTo('#compétences')">
            <v-list-tile-title>Compétences</v-list-tile-title>
          </v-list-tile>
        </v-list>
      </v-menu>
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
