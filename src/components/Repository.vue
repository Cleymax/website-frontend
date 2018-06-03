<template>
  <v-flex xs12>
    <v-card :color="repo.color" class="white--text">
      <v-card-title primary-title>
        <div class="headline">{{ repo.name }}</div>
        <div>{{ repo.description }}</div>
      </v-card-title>
      <v-card-actions>
        <v-btn flat dark :href="repo.html_url">Voir sur Github</v-btn>
        <v-spacer></v-spacer>
        {{ repo.stargazers_count }}<v-icon>favorite</v-icon>
        {{ repo.forks_count }}<v-icon>call_split</v-icon>
      </v-card-actions>
    </v-card>
  </v-flex>
</template>

<script>
export default {
  props: ['repo']
}
</script>
