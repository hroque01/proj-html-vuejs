<script>
export default {
    name: "AppFooter",
    data() {
        return {
            toggle: true,
        }
    }
}
</script>

<template>
    <section class="container-larger">
        <div class="info">
            <h2>Independent professional who works remotely to help with your business.</h2>
        </div>
        <button class="button btn_white">
            What is a VA exactly?
        </button>
        <p class="copyright"> &copy; Copyright 2012 - 2020 | Avada Theme by <span class="flamingo"> ThemeFusion </span>|
            All Rights
            Reserved | Powered by
            <span class="flamingo">WordPress </span>
        </p>
        <div class="live-chat">
            <div class="container-chat d-flex justify-content-end px-4 py-6"> <!-- Bootstrap class -->
                <div class="chat border" v-show="toggle">
                    <img src="/logo.png" alt="">
                    <p>This is a free HubSpot live chat. You can create your own chat flows and engage your costumers
                        with
                        Avada
                        & Hubspot!
                    </p>
                </div>
            </div>
            <div class="d-flex justify-content-end p-4"> <!-- Bootstrap class -->
                <div class="border rounded-circle" @click='toggle = !toggle'>
                    <font-awesome-icon icon="fa-solid fa-message" />
                </div>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
@use '../styles/partials/variables.scss' as *;
@use '../styles/general.scss' as *;

.container-larger {
    color: $font-white;
    padding: 0 6%;

    .info {
        width: 60%;
    }

    button {
        margin: 2rem 0;
    }

    .btn_white {
        background-color: white;
        font-weight: bold;
        padding: 5px;
        color: $color-bg;
        transition-duration: 0.4s;
        -webkit-transition-duration: 0.4s;
        border: 10px solid white;

        &:hover {
            color: $font-white;
            background-color: $color-bg;
        }
    }

    .flamingo {
        color: $flamingo;
        cursor: pointer;
    }

    .copyright {
        margin: 0;
        font-size: 10px;
        padding-bottom: 100px;
    }

    .live-chat {
        display: flex;
        flex-direction: column;
        position: absolute;
        right: 0;
        bottom: 0;

        .container-chat {
            position: relative;
        }

        .chat {
            width: 25%;
            background-color: white;
            color: $color-bg;
            padding: 20px;
            border-radius: 5px;

            img {
                position: absolute;
                top: -30px;
                right: 108px;
                width: 50px;
            }
        }

        .rounded-circle {
            width: 50px;
            display: flex;
            text-align: center;
            justify-content: center;
            height: 50px;
            align-items: center;
            background-color: $flamingo;
            cursor: pointer;
        }
    }



}
</style>