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
            <div class="nav-left">
                <!-- Logo -->
                <div class="logo">
                    <a href="#">
                        <img src="/logo.png" alt=""> <!-- this is the img logo-->
                    </a>
                </div>

                <!-- Navigation -->
                <nav>
                    <ul>
                        <li class="navigation" v-for="(link, index) in links" :key="index">
                            <a :href="link.url">
                                {{ link.text }}
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>

            <!-- Consulting -->
            <div class="consultation">
                <div class="call-center">
                    <font-awesome-icon icon="fa-solid fa-headset" />
                    <span> 1.800.123.4567 </span>
                </div>
                <!-- Button -->
                <button class="button btn_white">
                    Get a free consultation
                </button>
            </div>
        </div>
    </div>

</template>

<style lang="scss" scoped>
@use '../styles/partials/variables.scss' as *;

.header-nav {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1.875rem;
    color: $font-white;

    .nav-left {

        display: flex;
        align-items: center;

        ul {
            display: flex;
            gap: 1.25rem;
        }

        .navigation {

            a {
                color: $font-white;
            }

        }
    }

    .consultation {
        display: flex;
        gap: 1.25rem;
    }


}
</style>