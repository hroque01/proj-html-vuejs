<script>
export default {
    name: "AppNavBar",
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
                    icon: true,
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

    <div class="container-header">
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
                    <ul class="m-0"> <!-- Bootstrap class for margin -->
                        <li class="navigation" v-for="(link, index) in links" :key="index">
                            <a :class="{ active: link.current }" :href="link.url">
                                {{ link.text }}
                            </a>
                            <span v-show="link.icon" class="chevron">
                                <font-awesome-icon icon="fa-solid fa-chevron-down" />
                            </span>
                        </li>
                    </ul>
                </nav>
            </div>

            <!-- Consulting -->
            <div class="consultation">
                <div class="call-center">
                    <a href="#">
                        <font-awesome-icon icon="fa-solid fa-headset" />
                        <span> 1.800.123.4567 </span>
                    </a>
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
@use '../styles/general.scss' as *;

.container-header {
    margin-left: 20px;
}

.header-nav {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1.875rem;
    color: $font-white;

    .nav-left {

        display: flex;
        align-items: center;

        nav {

            margin-left: 5rem;

            ul {
                display: flex;
                gap: 1.25rem;
            }

            .navigation {

                a {
                    font-weight: bold;
                    color: $font-white;

                    &.active,
                    &:hover {
                        padding-bottom: 15px;
                        border-bottom: 2px solid $font-white;
                    }
                }

            }

            .chevron {
                font-size: 13px;
                padding-left: 10px;
            }
        }


    }

    .consultation {
        display: flex;
        align-items: center;
        gap: 1.25rem;

        .call-center {

            a {
                font-weight: bold;
                color: $font-white;

                &:hover {
                    color: lightgrey;
                }
            }
        }

    }


}
</style>