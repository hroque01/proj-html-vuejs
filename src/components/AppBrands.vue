<script>
export default {
    name: "AppBrands",
    data() {
        return {
            brands: [
                {
                    img: '/brand-1-200x67.jpg'
                },
                {
                    img: '/brand-7-200x67.jpg'
                },
                {
                    img: '/brand-3-200x67.jpg'
                },
                {
                    img: '/brand-4-200x67.jpg'
                },
                {
                    img: '/brand-5-200x67.jpg'
                },
            ],
            helps: [
                {
                    number: "1.",
                    title: 'Learn to delegate',
                    text: "Pellentesque pellentesque montes, pellentesque rutrum enim nisl purus posuere senectus. Cras ultricies ligula sed magna dictum porta. Lorem ipsum dolor sit amet.",
                    learn: "Learn more"
                },
                {
                    number: "2.",
                    title: 'Reduce labor costs',
                    text: "Vestibulum ante ipsum primis in faucibus orci luctus etultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper.",
                    learn: "Learn more"
                }
            ]
        }
    }
}
</script>

<template>
    <section class="brand">
        <div class="container-larger">
            <p class="-coloredFlamingo">Trusted by this amazing brands</p>
            <div class="brands">
                <div v-for="( brand, index) in brands" :key="index">
                    <img :src="brand.img" alt="">
                </div>
            </div>

            <div class="bottom-service">
                <div class="bottom-service-right">
                    <img src="/icon-2-2x-200x127.png" alt="">
                    <h1>Professional who works to help with your business.</h1>
                    <p>Donest est tristique eu massa pallentesque non sit sit donec. Proin aucto est vehicula</p>
                    <button class="button btn_orange">
                        What is a VA exactly?
                    </button>
                </div>
                <div class="info-img">
                    <img src="/info-8-2x-600x610.png" alt="">
                </div>
            </div>
            <div class="card-skill">
                <div class="single-card" v-for="(help, index) in helps" :key="index">
                    <div class="d-flex justify-content-between">
                        <h2> {{ help.number }}</h2>
                        <div class="paragraph-skilled">
                            <h4> {{ help.title }}</h4>
                            <div> {{ help.text }}</div>
                            <div class="learn">
                                <a href="">
                                    {{ help.learn }}
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
@use '../styles/partials/variables.scss' as *;
@use '../styles/general.scss' as *;

.container-larger {

    .-coloredFlamingo {
        color: $flamingo;
        text-align: center;
    }

    .brands {
        display: flex;
        justify-content: center;
        margin-bottom: 5%;
    }

    .info-img {
        display: flex;
        justify-content: end;
        margin-right: 5%;
        padding: 5% 0;

        img {
            width: 95%;
        }
    }

    .bottom-service {
        display: flex;
        justify-content: center;
        gap: 15px;

        .bottom-service-right {
            color: $color-bg;
            width: 33%;
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

            button {
                color: $font-white;
                background-color: $flamingo;
            }

            .btn_orange {
                background-color: $flamingo;
                font-weight: bold;
                padding: 5px;
                color: $font-white;
                transition-duration: 0.4s;
                -webkit-transition-duration: 0.4s;
                border: 10px solid $flamingo;

                &:hover {
                    color: $color-bg;
                    background-color: white;
                }
            }
        }
    }

    .card-skill {
        display: flex;
        padding: 40px 100px;
        gap: 30px;

        .single-card {
            color: $font-white;
            padding: 70px;
            border-radius: 5px;
            background-color: #000545;
        }

        .paragraph-skilled {
            margin-left: 1rem;
        }

        .learn {
            margin-top: 5%;

            a {
                font-weight: bold;
                color: $flamingo;
                text-decoration: underline;
            }
        }

    }
}
</style>