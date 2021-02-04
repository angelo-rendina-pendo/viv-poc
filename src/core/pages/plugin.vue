<template>
    <div>
        <h2>Plugin</h2>
        This is a Core page, but the content below comes from Plugin!
        <div id="plugin-mount"></div>
    </div>
</template>

<script>
import Plugin from 'viv-plugin';

export default {
    data () {
        return {
            plugin: null
        };
    },
    mounted () {
        document.getElementById('plugin-mount').replaceWith(Plugin.$el);
    }
};
</script>
