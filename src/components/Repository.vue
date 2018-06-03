<template>
  <v-flex xs12>
    <v-card>
      <v-card-title primary-title>
        <div class="headline"><a :href="repo.html_url" style="text-decoration:none;">{{ repo.name }}</a></div>
        <div>{{ repo.description }}</div>
      </v-card-title>
      <v-card-actions>
        <v-chip :color="repo.color" text-color="white" v-if="repo.language != null">{{ repo.language }}</v-chip>
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
