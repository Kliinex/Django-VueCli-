<template>
  <div class="app">
    <AppHeader/>
    <div class="app-body">
      <Sidebar :navItems="nav"/>
      <main class="main">
        <div class="container-fluid">
          <router-view></router-view>
        </div>
      </main>
    </div>
  </div>
</template>

<script>
import nav from '../_nav'
import { Header as AppHeader, Sidebar } from '../components/'

export default {
  name: 'full',
  components: {
    AppHeader,
    Sidebar
  },
  data () {
    return {
      nav: nav.items
    }
  },
  computed: {
    name () {
      return this.$route.name
    }
  }
}
</script>
