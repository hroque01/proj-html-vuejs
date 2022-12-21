<script>
export default {
    name: "App",
}
</script>

<template>
    <section class="jumbotron">
        <div class="container">
            <!-- Jumbotron text -->
            <div class="JumboText">
                <h1>Indeperident professional who works remotely to help with your business.</h1>
                <p>Mauris aliquam libero, fermentum quis eros, massa sagittis. Lectus mattis elit purus venenatis.</p>
                <button class="button">What is a VA excatly?</button>
            </div>

            <!-- Image -->
            <div class="info-image">
                <img src="/info-5-400x444.jpg" alt="">
            </div>

            <!-- Buttons Folder and $39 on right -->
            <div class="little-buttons-right">
                <div class="buttons-icon ">
                    <a href="#" class="-coloredGrey">
                        <font-awesome-icon icon="fa-solid fa-folder" />
                        <h6>Demos</h6>
                    </a>
                </div>
                <div class="buttons-dollars">
                    <div class="-coloredGreen">
                        <h6>&#36;</h6>
                        <h3>39</h3>
                    </div>
                    <h6 class="-coloredGrey">On Sale</h6>
                </div>
            </div>

        </div>
    </section>
</template>

<style lang="scss">
@use '../styles/general.scss' as *;
@use '../styles/partials/variables.scss' as *;

.jumbotron {
    position: relative;
    color: $font-white;
    background-color: $color-bg;

    .container {
        display: flex;

        .JumboText {
            width: 35%;
            margin-left: 13%;
            text-align: center;

            h1 {
                padding-top: 2rem;
            }

            p {
                margin: 50px 0;
            }
        }

        .info-image {
            margin: 0 5%;
        }

        .little-buttons-right {

            display: flex;
            flex-direction: column;
            gap: 1rem;
            position: absolute;
            right: 0;
            top: 0;

            .-coloredGrey {
                color: #33475b;
            }

            .-coloredGreen {
                color: #71c085;
            }

            .buttons-dollars {
                width: 80px;
                height: 80px;
                padding: 10px;
                border-radius: 5px;
                background-color: white;
                text-align: center;
                cursor: pointer;

                h6 {
                    position: absolute;
                }

            }

            .buttons-icon {
                width: 80px;
                height: 80px;
                display: flex;
                justify-content: center;
                align-items: center;
                text-align: center;
                padding: 10px;
                border-radius: 5px;
                background-color: white;
            }
        }


    }


}
</style>