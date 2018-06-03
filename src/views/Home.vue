<template>
  <main>
  <v-container fluid>
    <v-layout row>
      <v-flex xs12 sm12 md12 lg12 xl12>
        <v-parallax height="400" src="https://proxy.duckduckgo.com/iu/?u=http%3A%2F%2Fairlines-airports.com%2Fwp-content%2Fuploads%2F2016%2F07%2FSwitzerland-Geneva.jpg&f=1">
          <v-layout column align-center justify-center>
            <h4 style="font-size: 30px">Étudiant passionné par le développement web & software</h4>
          </v-layout>
        </v-parallax>
      </v-flex>
    </v-layout>

    <v-jumbotron id="presentation">
      <v-container fill-height>
        <v-layout align-center>
          <v-flex>
            <div class="title mb-3">Je suis Anana étudiant passionné par l'informatique et en particulier par le développement full-stack Rails/Vuejs. J'habite tout près de Genève</div>
            <v-btn large color="primary" class="mx-0">Voir sur Github</v-btn>
            <v-btn href="https://discordapp.com/" flat>Discord tag Anana#1189</v-btn>
          </v-flex>
        </v-layout>
      </v-container>
    </v-jumbotron>
    <v-divider></v-divider>
    <v-layout row id="projects">
      <v-flex xs12>
        <v-container fluid grid-list-md>
          <v-layout row wrap>
            <v-flex v-for="repo in repos" :key="repo.id" xs12 sm6 md4 lg3 xl2>
              <repository :repo="repo"></repository>
            </v-flex>
          </v-layout>
        </v-container>
      </v-flex>
    </v-layout>
    <v-divider></v-divider>
  </v-container>
  </main>
</template>

<script>
export default {
  data () {
    return {
      repos: {},
      colors: {
        'ruby': 'red darken-4',
        'python': 'blue darken-3',
        'html': 'orange darken-3',
        'crystal': 'deep-purple accent-1',
        'go': 'blue accent-4',
        'javascript': 'yellow darken-2',
        'java': 'orange darken-2',
        'css': 'deep-purple darken-4',
        'vue': 'indigo darken-4'
      }
    }
  },
  mounted () {
    this.$http.get('https://api.github.com/users/ananagame/repos').then(
      data => {
        this.repos = data.body.filter(repo => !repo.fork)
        for (let i = 0; i < this.repos.length; i++) {
          if (this.repos[i].language == null) {
            this.repos[i].color = 'grey lighten-1'
          } else {
            this.repos[i].color = this.colors[this.repos[i].language.toLowerCase()]
          }
        }
      },
      error => {
        console.log(error)
      }
    )
  }
}
</script>

<style>
main > div.container {
  padding: 0;
}
</style>
