<template>
    <div>
        <div id="navbar">
            <router-link
                v-for="link in links"
                :key="link.to"
                :to="link.to"
                class="navbar-link">
                {{ link.name }}
            </router-link>
        </div>
        <h1>Vue in Vue</h1>
        <router-view />
    </div>
</template>

<script>
export default {
    computed: {
        links () {
            return [
                { name: 'Home', to: '/' },
                { name: 'Plugin', to: '/plugin' },
                { name: 'About', to: '/about' }
            ];
        }
    }
};
</script>

<style>
html {
    background-color: aliceblue;
}

#navbar {
    display: flex;
}

.navbar-link {
    padding: 4px 8px;
}

</style>
