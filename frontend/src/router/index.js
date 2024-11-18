import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import MovieView from "../views/MovieView.vue";
import PostListView from "../components/PostList.vue";



const routes = [
  {
    path: "/",
    name: "movie",
    component: MovieView,
  },

  {
    path: '/posts',
    name: 'posts',
    component: PostListView, 
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router
