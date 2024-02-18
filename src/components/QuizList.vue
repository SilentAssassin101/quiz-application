<template>
    <ul tabindex="0" class="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        <ListItem v-for="quiz in quizList" :key="quiz.id" :quiz="quiz" />
    </ul>
</template>

<script>
import ListItem from './ListItem.vue';

export default {
    name: 'QuizList',
    components: {
        ListItem
    },
    props: {
        quizList: {
            type: Array,
            default: () => []
        }
    }
}
</script>

<style></style>