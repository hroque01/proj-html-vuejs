<script>
export default {
    name: "AppHeader",
    data() {
        return {
            links: [
                {
                    text: "Home",
                    url: '#',
                    current: true,
                },
                {
                    text: "About",
                    url: '#',
                    current: false,
                },
                {
                    text: "Services",
                    url: '#',
                    current: false,
                },
                {
                    text: "Journal",
                    url: '#',
                    current: false,
                },
                {
                    text: "Contact",
                    url: '#',
                    current: false,
                },
            ]

        }
    }
}
</script>

<template>

    <div class="container">
        <div class="header-nav">
            <a href="#">
                <img src="/logo.png" alt=""> <!-- this is the img logo-->
            </a>
        </div>

        <nav>
            <ul>
                <li v-for="(link, index) in links" :key="index">
                    <a :href="links.url">
                        {{ link.text }}
                    </a>
                </li>
            </ul>
        </nav>

    </div>

</template>

<style lang="scss" scoped>
@use '../styles/partials/variables.scss' as *;
</style>