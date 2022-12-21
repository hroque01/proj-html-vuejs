<script>
export default {
    name: "AppSkilled",
    data() {
        return {
            skills: [
                {
                    number: "1",
                    text: "Pellentesque pellentesque montes, pellentesque rutrum enim nisl purus posuere senectus.",
                    learn: "learn more"
                },
                {
                    number: "2",
                    text: "Vitae blandit aliquet donec at nunc risus, enim,ultricies. Risus egestas nisl nisl convallis purus.",
                    learn: "learn more"
                },
                {
                    number: "3",
                    text: "Quam diam vitae sagittis, non eget. Massa lectus cursus ut vita tempus viverra farnes dapibus",
                    learn: "learn more"
                },
            ]
        }
    }
}
</script>

<template>
    <section>
        <p>Donec est tristique eu massa pellentesque.</p>
        <h1>Highly-skilled, independent professional freelancer.</h1>
    </section>

</template>

<style lang="scss" scoped>
@use '../styles/partials/variables.scss' as *;
@use '../styles/general.scss' as *;
</style>