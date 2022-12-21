<script>
export default {
    name: "App",
}
</script>

<template>
    <section class="jumbotron">
        <div class="container">
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
            <div>
                <img src="/info-5-400x444.jpg" alt="">
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
}
</style>