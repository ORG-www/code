<template>
  <div class="movie-header">
  <div class="cover">
  
    <div class="poster">
      <img :src="movie.Poster" alt="Movie Poster" />
    </div>
    <div class="info">
      <h1>{{ movie.Title }} <span>({{ movie.Year }})</span></h1>
     
      <div class="inline-details">
        <p class="detail">{{ movie.Released }}</p>
        <span class="dot">•</span>
        <p class="detail">{{ movie.Genre }}</p>
        <span class="dot">•</span>
        <p class="detail">{{ movie.Runtime }}</p>
      </div>

      
      <div class="movie-details">
    <h2>Overview</h2>
    <p>{{ movie.Plot }}</p>
    </div>

     
      <div class="details-grid">
        <div class="detail-item" v-for="(person, index) in formattedDetails" :key="index">
          <strong>{{ person.role }}</strong>
          <p>{{ person.name }}</p>
        </div>
      </div>
    </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MovieHeader",
  props: {
    movie: {
      type: Object,
      required: true,
    },
  },
  computed: {
     


    formattedDetails() {
      if (!this.movie.Director || !this.movie.Writer || !this.movie.Actors) {
        return [];
      }

      const directors = this.movie.Director.split(", ").map((name) => ({
        name,
        role: "Director",
      }));

      const writers = this.movie.Writer.split(", ").map((name) => ({
        name,
        role: "Writer",
      }));

      const actors = this.movie.Actors.split(", ").map((name) => ({
        name,
        role: "Actor",
      }));

      return [...directors, ...writers, ...actors];
    },
  },
};
</script>

<style scoped>
.movie-header {
    display: flex;
 flex-direction: column;
  justify-content: center;
  border-bottom: 1px solid var(--primaryColor);
    background-position: left calc((50vw - 170px) - 340px) top;
    background-size: cover;
    background-repeat: no-repeat;
    background-image: url(https://media.themoviedb.org/t/p/w1920_and_h800_multi_faces/aJn9XeesqsrSLKcHfHP4u5985hn.jpg);
}
.cover{
    display: flex;
    flex-wrap: wrap;
    background-image: linear-gradient(to right, rgba(10.5, 31.5, 73.5, 1), rgba(10.5, 31.5, 73.5, 0.84) 50%, rgba(10.5, 31.5, 73.5, 0.84) 100%);

}

.poster img {
  width: 200px;
  border-radius: 10px;
}

.info {
  margin-left: 20px;
  flex: 1;
  display: flex;
  flex-direction: column;
}

.info h1 {
  font-size: 24px;
  margin: 0;
  text-align: left;
  display: flex;
  align-items: center;
  gap: 5px;
}



button {
  padding: 10px 20px;
  background-color: #76c7c0;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.details-grid {
  display: flex;
  flex-wrap: wrap;
  margin-top: 20px;
  gap: 10px;
}

.detail-item {
  flex: 1 1 100px;
  background: rgba(255, 255, 255, 0.1);
  padding: 10px;
  border-radius: 5px;
}

.detail-item strong {
  display: block;
  font-size: 16px;
  color: white;
}

.detail-item p {
  font-size: 14px;
  color: #ccc;
}

.inline-details {
  display: flex;
  align-items: center;
  margin: 10px 0;
  gap: 5px; 
}

.detail {
  font-size: 16px;
  color: white;
  margin: 0;
}

.dot {
  font-size: 20px;
  color: #76c7c0; 
}



</style>
