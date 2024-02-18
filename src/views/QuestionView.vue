<template>
    <div>
        <h1 class="text-4xl font-bold text-center mt-10">Question View</h1>
        <p class="text-xl font-bold text-center mt-5">Please select an answer to the question below</p>
        <p class="text-xl font-bold text-center mt-5">Question 1</p>
        <p class="text-xl font-bold text-center mt-5 text-secondary">{{ currentQuestion.question }}</p>
        <div class="flex flex-col w-48 mx-auto justify-center gap-4 mt-5">
            <AnswerButton @answer-selected="answerSelected($event)" v-for="option in currentQuestion.answers"
                :answer="option" :key="option" />
        </div>
    </div>
</template>

<script>
import AnswerButton from '@/components/AnswerButton.vue';
export default {
    name: 'QuestionView',
    components: {
        AnswerButton
    },
    data() {
        return {
            quizId: null,
            questionId: null,
            questions: {
                1: {
                    question: 'What is the capital of France?',
                    answers: [
                        'Paris',
                        'London',
                        'Berlin',
                        'Madrid'
                    ]
                },
                2: {
                    question: 'What is the capital of Spain?',
                    answers: [
                        'Paris',
                        'London',
                        'Berlin',
                        'Madrid'
                    ]
                },
                3: {
                    question: 'What is the capital of Germany?',
                    answers: [
                        'Paris',
                        'London',
                        'Berlin',
                        'Madrid'
                    ]
                },
                4: {
                    question: 'What is the capital of England?',
                    answers: [
                        'Paris',
                        'London',
                        'Berlin',
                        'Madrid'
                    ]
                },
                5: {
                    question: 'What is the capital of Italy?',
                    answers: [
                        'Paris',
                        'London',
                        'Berlin',
                        'Madrid',
                        'Rome'
                    ]
                }
            },
            currentQuestion: {
                question: '',
                answers: []
            }
        }
    },
    created() {
        this.getIds();
    },
    methods: {
        answerSelected(answer) {
            console.log(answer);
            console.log(this.questionId);
            switch (Number(this.questionId)) {
                case 1:
                    if (answer === 'Paris') {
                        this.correctAnswer();
                    } else {
                        this.incorrectAnswer();
                    }
                    break;
                case 2:
                    if (answer === 'Madrid') {
                        this.correctAnswer();
                    } else {
                        this.incorrectAnswer();
                    }
                    break;
                case 3:
                    if (answer === 'Berlin') {
                        this.correctAnswer();
                    } else {
                        this.incorrectAnswer();
                    }
                    break;
                case 4:
                    if (answer === 'London') {
                        this.correctAnswer();
                    } else {
                        this.incorrectAnswer();
                    }
                    break;
                case 5:
                    if (answer === 'Rome') {
                        this.correctAnswer();
                    } else {
                        this.incorrectAnswer();
                    }
                    break;
                default:
                    break;
            }
        },
        correctAnswer() {
            // Logic for correct answer
            //check if on last question
            if (Number(this.questionId) === 5) {
                this.$router.push(`/quiz/${this.quizId}/results/passed`);
            } else {
                this.$router.push(`/quiz/${this.quizId}/question/${Number(this.questionId) + 1}`);
            }
        },
        incorrectAnswer() {
            this.$router.push(`/quiz/${this.quizId}/results/failed`);
        },
        getIds() {
            this.quizId = this.$route.params.id;
            this.questionId = this.$route.params.questionId;
            if (!this.quizId || !this.questionId) {
                this.$router.push('/');
            }
            this.currentQuestion = this.questions[this.questionId];
        }
    },
    watch: {
        '$route': 'getIds'
    }
}
</script>

<style></style>