<template>
    <div>
        <h2>About</h2>
        Another Core page.
        <button @click="click">
            Fidget says {{ clicks }} clicks!
        </button>
    </div>
</template>

<script>
export default {
    computed: {
        clicks () {
            return this.$store.getters['fidget/clicks'];
        }
    },
    methods: {
        click () {
            this.$store.dispatch('fidget/click');
        }
    }
};
</script>
