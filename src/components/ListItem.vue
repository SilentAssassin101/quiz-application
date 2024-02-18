<template>
    <li>
        <RouterLink :to="'/quiz/' + quiz.id">{{ quiz.title }}</RouterLink>
    </li>
</template>

<script>
export default {
    name: 'ListItem',
    components: {
    },
    props: {
        quiz: {
            type: Object,
            default: () => { }
        }
    }
}
</script>

<style lang="scss" scoped></style>