<template>
    <div>
        <div v-for="post in posts" :key="post.id" class="post">
            <h3>{{ post.text }}</h3>
            <small>Posted by: {{ post.user }}</small>
            <div class="comments">
                <h4>Comments:</h4>
                <ul>
                    <li v-for="comment in post.comments" :key="comment.id">
                        {{ comment.text }} - <small>{{ comment.user }}</small>
                    </li>
                </ul>
            </div>
        </div>
        <div v-if="loading" class="loading">Loading...</div>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    data() {
        return {
            posts: [],
            nextPage: 1,
            loading: false,
            endReached: false,
        };
    },
    methods: {
        async fetchPosts() {
            if (this.loading || this.endReached) return;

            this.loading = true;
            try {
              const response = await axios.get(`posts/?page=${this.nextPage}`);
              
              
                 console.log('API Response:', response.data); // Debug log
            if (response.data.results) {
                this.posts.push(...response.data.results); // For paginated response
            } else {
                this.posts.push(...response.data); // For non-paginated response
            }
              this.nextPage++;
                if (!response.data.next) {
                    this.endReached = true;
                }
            } catch (error) {
                console.error('Failed to fetch posts:', error);
            } finally {
                this.loading = false;
            }
        },
        handleScroll() {
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            const windowHeight = window.innerHeight || document.documentElement.clientHeight;
            const documentHeight = document.documentElement.scrollHeight;

            if (scrollTop + windowHeight >= documentHeight - 10) {
                this.fetchPosts();
            }
        },
    },
    created() {
        this.fetchPosts();
        window.addEventListener('scroll', this.handleScroll);
    },
    beforeDestroy() {
        window.removeEventListener('scroll', this.handleScroll);
    },
};
</script>

<style>
.post {
    margin: 10px 0;
    padding: 10px;
    border: 1px solid #ccc;
}
.comments {
    margin-top: 10px;
    padding-left: 20px;
}
.loading {
    text-align: center;
    margin: 20px 0;
}
</style>
