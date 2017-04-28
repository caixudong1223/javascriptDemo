<template>
    <div class="title">
        <p>{{titlename}}</p>
    </div>
</template>

<script>
    export default {
        props: ['titlename']

    }
</script>

<style scoped>
    .title{
        width: 100%;
    }

    .title p{
        height: 2rem;
        line-height: 2rem;
        text-align: center;
        font-size: 1rem;
        background-color: #fff;
        color: #7EC0EE
    }
</style>