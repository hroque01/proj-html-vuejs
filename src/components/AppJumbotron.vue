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
                <h1>
                    Indeperident professional who works remotely to help with your business.
                </h1>
                <p>
                    Mauris aliquam libero, fermentum quis eros, massa sagittis.
                    Lectus mattis elit purus venenatis.
                </p>
                <button class="button">
                    What is a VA excatly?
                </button>
            </div>

            <!-- Image -->
            <div>
                <img src="/info-5-400x444.jpg" alt="">
            </div>

            <!-- Buttons Folder and $39 on right -->
            <div class="little-buttons-right">
                <div class="buttons-icon">
                    <a href="#">
                        <font-awesome-icon icon="fa-solid fa-folder" />
                        <span>DEMOS</span>
                    </a>
                </div>
                <div class="buttons-icon">
                    <a href="#">
                        <font-awesome-icon icon="fa-solid fa-folder" />
                        <span>DEMOS</span>
                    </a>
                </div>
            </div>

        </div>
    </section>
</template>

<style lang="scss">
@use '../styles/general.scss' as *;
@use '../styles/partials/variables.scss' as *;

.jumbotron {
    color: $font-white;
    background-color: $color-bg;

    .container {
        display: flex;
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
</style>