<script setup lang="ts">
    defineProps<{
        msg: string;
    }>();
</script>

<template>
    <div class="greetings">
        <h1 class="green">{{ msg }}</h1>
        <h3>
            <a
                href="https://vitejs.dev/"
                target="_blank"
                rel="noopener"
            >
                Vite
            </a>
            +
            <a
                href="https://vuejs.org/"
                target="_blank"
                rel="noopener"
            >
                Vue 3
            </a>
            +
            <a
                href="https://echarts.apache.org/handbook/zh/get-started/"
                target="_blank"
            >
                echarts
            </a>
            . What's next?
        </h3>
    </div>
</template>

<style scoped>
    h1 {
        font-weight: 500;
        font-size: 2.6rem;
        top: -10px;
    }

    h3 {
        font-size: 1.2rem;
    }

    .greetings h1,
    .greetings h3 {
        text-align: center;
    }

    @media (min-width: 1024px) {
        .greetings h1,
        .greetings h3 {
            text-align: left;
        }
    }
</style>
