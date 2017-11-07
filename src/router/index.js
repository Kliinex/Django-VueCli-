import Vue from 'vue'
import Router from 'vue-router'

// Containers
import Full from '@/containers/Full'

// Views
import Accueil from '@/views/Accueil'
import Formulaire from '@/views/projet/Formulaire'
import Recherche from '@/views/projet/Recherche'

Vue.use(Router)

export default new Router({
  mode: 'hash',
  linkActiveClass: 'open active',
  scrollBehavior: () => ({ y: 0 }),
  routes: [
    {
      path: '/',
      redirect: '/accueil',
      name: 'Home',
      component: Full,
      children: [
        {
          path: 'accueil',
          name: 'Accueil',
          component: Accueil
        },
        {
          path: 'projet-nouveau',
          name: 'Création',
          component: Formulaire
        },
        {
          path: 'projet-recherche',
          name: 'Recherche',
          component: Recherche
        }
      ]
    }
  ]
})
