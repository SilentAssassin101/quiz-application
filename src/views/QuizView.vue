<template>
    <main>
        <h1 class="text-4xl font-bold text-center mt-10">Quiz View</h1>
        <p class="text-xl font-bold text-center mt-5">Please click the button below when you are ready to begin!</p>
        <div class="flex justify-center">
            <button @click="startQuiz" class="btn btn-primary mt-5">Start Quiz</button>
        </div>
    </main>
</template>

<script>
export default {
    name: 'QuizView',
    components: {
    },
    data() {
        return {
            quizId: null
        }
    },
    created() {
        this.quizId = this.$route.params.id;
        if (!this.quizId) {
            this.$router.push('/');
        }
    },
    methods: {
        startQuiz() {
            if (!this.quizId) {
                this.$router.push('/');
                return;
            }
            this.$router.push(`/quiz/${this.quizId}/question/1`);
        }
    }
}
</script>

<style></style>