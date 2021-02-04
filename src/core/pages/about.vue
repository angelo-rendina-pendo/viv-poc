<template>
    <div>
        <h2>About</h2>
        Another Core page.
        <button @click="click">
            Fidget says {{ clicks }} clicks!
        </button>
        <button @click="like">
            Plugin has {{ likes }} likes!
        </button>
    </div>
</template>

<script>
import Plugin from 'viv-plugin';

export default {
    computed: {
        clicks () {
            return this.$store.getters['fidget/clicks'];
        },
        likes () {
            return Plugin.$store.getters['likes/likes'];
        }
    },
    methods: {
        click () {
            this.$store.dispatch('fidget/click');
        },
        like () {
            Plugin.$store.dispatch('likes/like');
        }
    }
};
</script>
