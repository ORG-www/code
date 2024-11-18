


<template>
    <div id="app">
        <!-- Navbar placeholder -->
        <header>
            <h1>TMDb</h1>
        </header>

        <!-- Router View for dynamic pages -->
        <router-view />
    </div>
</template>

<script>
export default {
    name: 'App',
};
</script>

<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: white;
    background-color: #141414;
    min-height: 100vh;
    margin: 0;
}
header {
    background-color: #0d253f;
    padding: 20px;
    color: white;
    text-align: center;
    font-size: 20px;
}
</style>

