<template>
  <div class="animated fadeIn">
    <div class="row">
      <div class="col-md-12">
        <div class="debut">
          <b-card header="Accueil">
            <div class="row">
              <div class="col-sm-6 col-lg-3">
                <b-card>
                  <div class="h1 text-muted text-right mb-4">
                    <i class="icon-exclamation"></i>
                  </div>
                  <div class="h4 m-0">2</div>
                  <div>Projet en attente</div>
                </b-card>
              </div><!--/.col-->
              <div class="col-sm-6 col-lg-3">
                <b-card>
                  <div class="h1 text-muted text-right mb-4">
                    <i class="icon-fire"></i>
                  </div>
                  <div class="h4 m-0">9</div>
                  <div>Projet en cours</div>
                </b-card>
              </div><!--/.col-->
              <div class="col-sm-6 col-lg-3">
                <b-card>
                  <div class="h1 text-muted text-right mb-4">
                    <i class="icon-chemistry"></i>
                  </div>
                  <div class="h4 m-0">2</div>
                  <div>Projet en recette</div>
                </b-card>
              </div><!--/.col-->
              <div class="col-sm-6 col-lg-3">
                <b-card>
                  <div class="h1 text-muted text-right mb-4">
                    <i class="icon-briefcase"></i>
                  </div>
                  <div class="h4 m-0">34</div>
                  <div>Projet fini</div>
                </b-card>
              </div><!--/.col-->
            </div><!--/.row-->
            <br/>

            <b-table class="table-outline mb-0" hover responsive outline
              :items="tableItems"
              :fields="tableFields"
              head-variant="default"
              >
              <template slot="project" scope="item">
                <div class="project">
                  <div>{{item.value.name}}</div>
                </div>
              </template>
              <template slot="user" scope="item">
                <div>{{item.value.name}}</div>
                <div class="small text-muted">
                  <span>
                    {{item.value.metier}}
                  </span>
                </div>
              </template>
              <template slot="usage" scope="item">
                <div class="clearfix">
                  <div class="float-left">
                    <strong>{{item.value.value}}%</strong>
                  </div>
                  <div class="float-right" v-if="dateEtat(item.value)===1">
                    <small class="text-muted">{{item.value.begin}}</small>
                  </div>
                  <div  class="float-right" v-else-if="dateEtat(item.value)===2">
                    <small class="text-muted">{{item.value.begin}}</small>
                    <small class="text-muted"> | {{item.value.end}}</small>
                  </div>
                  <div  class="float-right" v-else-if="dateEtat(item.value)===3">
                    <small class="text-muted">{{item.value.end}}</small>
                  </div>
                </div>
                <b-progress class="progress-xs" v-model="item.value.value" :variant="variant(item.value.value)"></b-progress>
              </template>
              <template slot="payment" scope="item">
                <i :class="item.value.icon" style="font-size:24px"></i>
              </template>
              <template slot="activity" scope="item">
                <div class="small text-muted">Last login</div>
                <strong>{{item.value}}</strong>
              </template>
            </b-table>
          </b-card>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Callout } from '../components/'

export default {
  name: 'dashboard',
  components: {
    Callout
  },
  data: function () {
    return {
      tableItems: [
        {
          project: { name: 'Projet 1' },
          user: { name: 'Yiorgos Avraamu', metier: 'Développeur éditique' },
          usage: { value: 50, begin: '05/06/2017', end: '05/07/2017', etat: 'Développement' },
          payment: { name: 'Mastercard', icon: 'fa fa-cc-mastercard' },
          activity: '10 sec ago'
        },
        {
          project: { name: 'Projet 2' },
          user: { name: 'Avram Tarasios', metier: 'Développeur éditique' },
          usage: { value: 0, begin: '05/06/2017', etat: 'Attente' },
          payment: { name: 'Visa', icon: 'fa fa-cc-visa' },
          activity: '5 minutes ago'
        }
      ],
      tableFields: {
        project: {
          label: 'Projet'
        },
        user: {
          label: 'Utilisateur'
        },
        usage: {
          label: 'Avancement'
        },
        payment: {
          label: 'Payment method',
          class: 'text-center'
        },
        activity: {
          label: 'Activity'
        }
      }
    }
  },
  methods: {
    variant (value) {
      let $variant
      if (value <= 25) {
        $variant = 'info'
      } else if (value > 25 && value <= 50) {
        $variant = 'success'
      } else if (value > 50 && value <= 75) {
        $variant = 'warning'
      } else if (value > 75 && value <= 100) {
        $variant = 'danger'
      }
      return $variant
    },
    dateEtat (item) {
      let $dateEtat
      console.log(item.begin)
      console.log(item.end)
      if (item.begin && !item.end) {
        $dateEtat = 1
      } else if (item.begin && item.end) {
        $dateEtat = 2
      } else if (!item.begin && item.end) {
        $dateEtat = 3
      }
      console.log('result = ' + $dateEtat)
      return $dateEtat
    }
  }
}
</script>
