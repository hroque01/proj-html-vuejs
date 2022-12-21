<script>
export default {
    name: "AppServicesVue",
    data() {
        return {
            services: [
                {
                    title: "Answering phone calls",
                    text: "Elementum posuere mauris, ac ultricies eu orci massa at id tincidunt"
                },
                {
                    title: "Basic call entry",
                    text: "Elementum posuere mauris, ac ultricies eu orci massa at id tincidunt"
                },
                {
                    title: "Organizing calendar",
                    text: "Elementum posuere mauris, ac ultricies eu orci massa at id tincidunt"
                },
                {
                    title: "Book travels",
                    text: "Elementum posuere mauris, ac ultricies eu orci massa at id tincidunt"
                }
            ]
        }
    }

}
</script>

<template>
    <div class="container-larger">
        <h6>Aviable Services</h6>
        <div>
            <ul class="d-flex p-0"> <!-- bootstrap  class-->
                <li class="cards" v-for="(service, index) in services" :key="index">
                    <h3>{{ service.title }}</h3>
                    <p>{{ service.text }}</p>
                </li>
            </ul>
        </div>
        <div class="bottom-service">
            <div class="info-img">
                <img src="/info-5-2x-600x648.png" alt="">
            </div>
            <div class="bottom-service-right">
                <img src="/icon-1-2x-200x155.png" alt="">
                <h1>Find the ultimate virtual assistant for your business</h1>
                <p>Donest est tristique eu massa pallentesque non sit sit donec. Proin aucto est vehicula</p>
                <button class="button">
                    What is a VA exactly?
                </button>
            </div>
        </div>

    </div>
</template>

<style lang="scss" scoped>
@use '../styles/partials/variables.scss' as *;
@use '../styles/general.scss' as *;

.container-larger {
    margin: 0 10%;
    padding: 3%;

    h6 {
        color: $flamingo;
        padding-bottom: 1.25rem;
    }

    .cards {
        color: $color-bg;
        padding: 40px;

        &:nth-child(1),
        &:nth-child(4) {
            border-top: 3px solid #f1f2f5;

            h3 {
                width: 80%;
            }
        }

        &:nth-child(2) {
            border-top: 3px solid #f1f2f5;
            border-left: 3px solid #f1f2f5;
        }

        &:nth-child(3) {
            border-top: 3px solid #f1f2f5;
            border-left: 3px solid #f1f2f5;
            border-right: 3px solid #f1f2f5;
        }

        h3 {
            padding-bottom: 10px;
        }
    }

    .info-img {
        padding: 5% 0;

        img {
            width: 85%;
        }
    }

    .bottom-service {
        display: flex;


        .bottom-service-right {
            color: $color-bg;
            width: 45%;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            text-align: center;

            h1 {
                padding-top: 3%;
                padding-bottom: 3%;
            }

            p {
                padding-bottom: 3%;
            }
        }

    }
}
</style>