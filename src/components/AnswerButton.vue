<template>
    <button @click="onClick" class="btn btn-primary">{{ answer }}</button>
</template>

<script>
export default {
    name: 'AnswerButton',
    props: {
        answer: {
            type: String,
            required: true
        }
    },
    methods: {
        onClick() {
            this.$emit('answer-selected', this.answer);
        }
    }
}
</script>

<style></style>