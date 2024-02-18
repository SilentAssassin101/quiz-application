import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import QuizView from '../views/QuizView.vue'
import QuestionView from '../views/QuestionView.vue'
import PassedView from '../views/PassedView.vue'
import FailedView from '../views/FailedView.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/quiz/:id?',
      name: 'quiz',
      component: QuizView
    },
    {
      path: '/quiz/:id/question/:questionId?',
      name: 'question',
      component: QuestionView
    },
    {
      path: '/quiz/:id/results/passed',
      name: 'passedview',
      component: PassedView
    },
    {
      path: '/quiz/:id/results/failed',
      name: 'failedview',
      component: FailedView
    }
  ]
})

export default router
