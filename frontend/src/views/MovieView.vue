<template>
  <div class="movie-view">
    <MovieHeader :movie="movie" />
    <MovieDetails :movie="movie" />
  </div>
</template>

<script>
import axios from "axios";
import MovieHeader from "../components/MovieHeader.vue";
import MovieDetails from "../components/MovieDetails.vue";

export default {
  name: "MovieView",
  components: {
    MovieHeader,
    MovieDetails,
  },
  data() {
    return {
      movie: {}, // Data fetched from the API
    };
  },
  async created() {
    try {
      const response = await axios.get(
        "http://www.omdbapi.com/?i=tt3896198&apikey=d2132124"
      );
    
     console.log("API Response:", response.data);
      this.movie = response.data;
    } catch (error) {
      console.error("Failed to fetch movie data:", error);
    }
     finally {
        this.loading = false;
     }
  },
};
</script>

<style scoped>
.movie-view {
  font-family: Arial, sans-serif;
  color: white;
  background-color: #141414;
}
</style>
