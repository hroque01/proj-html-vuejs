<script>
export default {
    name: "AppSkilled",
    data() {
        return {
            skills: [
                {
                    number: "1.",
                    text: "Pellentesque pellentesque montes, pellentesque rutrum enim nisl purus posuere senectus.",
                    learn: "Learn more"
                },
                {
                    number: "2.",
                    text: "Vitae blandit aliquet donec at nunc risus, enim,ultricies. Risus egestas nisl nisl convallis purus.",
                    learn: "Learn more"
                },
                {
                    number: "3.",
                    text: "Quam diam vitae sagittis, non eget. Massa lectus cursus ut vita tempus viverra farnes dapibus",
                    learn: "Learn more"
                },
            ]
        }
    }
}
</script>

<template>
    <section class="skills">
        <p>Donec est tristique eu massa pellentesque.</p>
        <div class="container-larger">
            <h1>Highly-skilled, independent professional freelancer.</h1>
            <button class="button btn_orange">
                What is a VA exactly?
            </button>
            <div class="card-skill">
                <div class="single-card rounded" v-for="(skilled, index) in skills" :key="index">
                    <div class="d-flex justify-content-between">
                        <h2> {{ skilled.number }}</h2>
                        <div class="paragraph-skilled">
                            <div> {{ skilled.text }}</div>
                            <div class="learn">
                                <a href="">
                                    {{ skilled.learn }}
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

.skills {
    background-color: $color-bg;
    background-image: url("/info-bg-3.svg");
    background-repeat: no-repeat;
    background-position: bottom;
}


p {
    display: flex;
    justify-content: center;
    color: $font-white;
    padding-top: 5%;
}

.container-larger {
    display: flex;
    flex-direction: column;
    align-items: center;
    color: $font-white;
    margin: 0 10%;
    padding: 1%;

    .button {
        color: $font-white;
        background-color: $flamingo;
        margin-bottom: 3%;
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

    h1 {
        width: 50%;
        text-align: center;
        padding-bottom: 5%;
    }

    .card-skill {
        display: flex;
        padding: 40px;
        gap: 40px;

        .single-card {
            padding: 35px;
            background-color: #000545;
        }

        .paragraph-skilled {
            margin-left: 1rem;
        }

        .learn {
            margin-top: 15%;

            a {
                font-weight: bold;
                color: $flamingo;
                text-decoration: underline;
            }
        }

    }
}
</style>