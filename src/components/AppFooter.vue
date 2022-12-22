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
        <button class="button">
            What is a VA excatly?
        </button>
        <p class="copyright"> &copy; Copyright 2012 - 2020 | Avada Theme by <span class="flamingo"> ThemeFusion </span>|
            All Rights
            Reserved | Powered by
            <span class="flamingo">WordPress </span>
        </p>
        <div class="live-chat">
            <div class="d-flex justify-content-end px-4 py-6"> <!-- Bootstrap class -->
                <div class="chat" v-show="toggle">
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
    background-image: url('/home-bg-3.svg');
    color: $font-white;
    padding: 0 6%;

    .info {
        width: 60%;
    }

    button {
        margin: 2rem 0;
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

        .chat {
            width: 25%;
            background-color: white;
            color: $color-bg;
            padding: 20px;
            border-radius: 5px;
        }

        .rounded-circle {
            width: 50px;
            display: flex;
            text-align: center;
            justify-content: center;
            height: 50px;
            align-items: center;
            background-color: $flamingo;
        }
    }



}
</style>