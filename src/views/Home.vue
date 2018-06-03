<template>
  <main>
  <v-container fluid>
    <v-layout row>
      <v-flex xs12 sm12 md12 lg12 xl12>
        <v-parallax height="400" src="../../static/assets/background.jpg">
          <v-layout align-center>
          <v-flex>
            <div class="title mb-3">Je suis Anana étudiant passionné par l'informatique et en particulier par le développement full-stack Rails/Vuejs. J'habite tout près de Genève</div>
          </v-flex>
        </v-layout>
        </v-parallax>
      </v-flex>
    </v-layout>

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
    <v-jumbotron id="compétences" height="200px">
      <v-container fill-height>
        <v-layout align-center>
          <v-flex>
            <div class="title mb-3">Mes compétences</div>
          </v-flex>
        </v-layout>
      </v-container>
    </v-jumbotron>
    <v-layout row>
      <v-flex xs12>
        <v-container fluid grid-list-md>
          <v-layout row wrap>
            <v-flex v-for="skill in skills" :key="skill">
              <v-progress-circular :size="150" :width="30" :rotate="-90" :value="skill.value"
                :color="colors[skill.name.toLowerCase()]">
                {{ skill.name }}
              </v-progress-circular>
            </v-flex>
          </v-layout>
        </v-container>
      </v-flex>
    </v-layout>
  </v-container>
  </main>
</template>

<script>
export default {
  data () {
    return {
      repos: {},
      skills: [
        {
          name: 'Ruby',
          value: 85
        },
        {
          name: 'Go',
          value: 65
        },
        {
          name: 'Javascript',
          value: 70
        },
        {
          name: 'Crystal',
          value: 60
        },
        {
          name: 'Python',
          value: 50
        }
      ],
      colors: {
        'ruby': 'red',
        'python': 'blue',
        'html': 'amber',
        'crystal': 'cyan',
        'go': 'blue accent-4',
        'javascript': 'lime',
        'java': 'deep-orange'
      }
    }
  },
  mounted () {
    this.$http.get('https://api.github.com/users/ananagame/repos').then(
      data => {
        // Filter the forks
        this.repos = data.body.filter(repo => !repo.fork)
        // Iterate the repos
        for (let i = 0; i < this.repos.length; i++) {
          // Choose a color for the repo with the language
          this.repos[i].color = this.repos[i].language == null ? 'grey lighten-1'
            : this.colors[this.repos[i].language.toLowerCase()]
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

div {
  text-align: center;
}
</style>
