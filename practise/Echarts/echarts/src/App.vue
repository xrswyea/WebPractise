<script setup lang="ts">
    import { RouterLink, RouterView } from "vue-router";
    import HelloWorld from "./components/HelloWorld.vue";
</script>

<template>
    <header>
        <img
            alt="Vue logo"
            class="logo"
            src="@/assets/logo.svg"
            width="125"
            height="125"
        />

        <div class="wrapper">
            <HelloWorld msg="echarts图表演示" />

            <nav>
                <RouterLink to="/">Home</RouterLink>
                <RouterLink to="/bar">柱状图</RouterLink>
                <RouterLink to="/pie">饼状图</RouterLink>
                <RouterLink to="/line">折线图</RouterLink>
                <RouterLink to="/scatter">散点图</RouterLink>
                <RouterLink to="/candlerStick">k线图</RouterLink>
                <RouterLink to="/radar">雷达图</RouterLink>
                <RouterLink to="/funnel">漏斗图</RouterLink>
                <RouterLink to="/gauge">仪表盘</RouterLink>
                <RouterLink to="/tree">树状图</RouterLink>
                <RouterLink to="/chinaMap">中国地图</RouterLink>
            </nav>
        </div>
    </header>

    <RouterView />
</template>

<style scoped>
    header {
        line-height: 1.5;
        max-height: 100vh;
    }

    .logo {
        display: block;
        margin: 0 auto 2rem;
    }

    nav {
        width: 100%;
        font-size: 12px;
        text-align: center;
        margin-top: 2rem;
    }

    nav a.router-link-exact-active {
        color: var(--color-text);
    }

    nav a.router-link-exact-active:hover {
        background-color: transparent;
    }

    nav a {
        display: inline-block;
        padding: 0 1rem;
        border-left: 1px solid var(--color-border);
    }

    nav a:first-of-type {
        border: 0;
    }

    @media (min-width: 1024px) {
        header {
            display: flex;
            place-items: center;
            padding-right: calc(var(--section-gap) / 2);
        }

        .logo {
            margin: 0 2rem 0 0;
        }

        header .wrapper {
            display: flex;
            place-items: flex-start;
            flex-wrap: wrap;
        }

        nav {
            text-align: left;
            margin-left: -1rem;
            font-size: 1rem;

            padding: 1rem 0;
            margin-top: 1rem;
        }
    }
</style>
