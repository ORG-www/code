<template>
  <div class="movie-details">
    <!-- Left Block: Ratings -->
    <div class="ratings-grid">
      <h2>Ratings</h2>
      <div v-for="(rating, index) in movie.Ratings" :key="index" class="rating-item">
        <strong>{{ rating.Source }}</strong>
        <p>{{ rating.Value }}</p>
      </div>
    </div>

    <!-- Right Block: Details Grid -->
    <div class="details-grid">
      <h2>Details</h2>
      <div class="detail-item" v-for="(detail, index) in formattedDetails" :key="index">
        <strong>{{ detail.label }}</strong>
        <p>{{ detail.value }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MovieDetails",
  props: {
    movie: {
      type: Object,
      required: true,
    },
  },
  computed: {
    // Format the remaining details into a label-value pair for the grid
    formattedDetails() {
      return [
        { label: "Metascore", value: this.movie.Metascore || "N/A" },
        { label: "IMDB Rating", value: `${this.movie.imdbRating} (${this.movie.imdbVotes} votes)` || "N/A" },
        { label: "Box Office", value: this.movie.BoxOffice || "N/A" },
        { label: "DVD Release", value: this.movie.DVD !== "N/A" ? this.movie.DVD : "N/A" },
        { label: "Production", value: this.movie.Production !== "N/A" ? this.movie.Production : "N/A" },
        { label: "Website", value: this.movie.Website !== "N/A" ? this.movie.Website : "N/A" },
      ];
    },
  },
};
</script>

<style scoped>
.movie-details {
  display: flex;
  gap: 20px;
  margin-top: 20px;
  color: #e0e0e0;
}


.ratings-grid {
  flex: 1;
  padding: 20px;
  border-radius: 5px;
}

.ratings-grid h2 {
  margin-top: 0;
  color: #76c7c0;
}

.rating-item {
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
  padding: 10px 0;
}

.rating-item strong {
  color: white;
}

.rating-item p {
  color: #ccc;
}


.details-grid {
  flex: 1;
  padding: 20px;
  border-radius: 5px;
}

.details-grid h2 {
  margin-top: 0;
  color: #76c7c0;
}

.detail-item {
  display: grid;
  grid-template-columns: 1fr 2fr;
  align-items: center;
  padding: 10px 0;
 
}

.detail-item strong {
  color: white;
}

.detail-item p {
  color: #ccc;
  margin: 0;
  text-align: right;
}

.details-grid a {
  color: #76c7c0;
  text-decoration: none;
}

.details-grid a:hover {
  text-decoration: underline;
}
</style>
