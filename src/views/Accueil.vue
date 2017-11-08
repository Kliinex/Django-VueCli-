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
                  <div class="container">
                    <div class="row">
                      <div class="col-6">
                        <div class="h4 m-0">{{tableBcard.pending.label}}</div>
                      </div>
                    </div>
                    <div class="row justify-content-between">
                      <div class="col-6">Projet en attente</div>
                      <div class="col-4">
                        <b-button variant="outline-primary">Afficher</b-button>
                      </div>
                    </div>
                   </div>
                </b-card>
              </div><!--/.col-->
              <div class="col-sm-6 col-lg-3">
                <b-card>
                  <div class="h1 text-muted text-right mb-4">
                    <i class="icon-fire"></i>
                  </div>
                  <div class="container">
                    <div class="row">
                      <div class="col-6">
                        <div class="h4 m-0">{{tableBcard.ongoing.label}}</div>
                      </div>
                    </div>
                    <div class="row justify-content-between">
                      <div class="col-6">Projet en cours</div>
                      <div class="col-4">
                        <b-button variant="outline-primary">Afficher</b-button>
                      </div>
                    </div>
                   </div>
                </b-card>
              </div><!--/.col-->
              <div class="col-sm-6 col-lg-3">
                <b-card>
                  <div class="h1 text-muted text-right mb-4">
                    <i class="icon-chemistry"></i>
                  </div>
                  <div class="container">
                    <div class="row">
                      <div class="col-6">
                        <div class="h4 m-0">{{tableBcard.recipe.label}}</div>
                      </div>
                    </div>
                    <div class="row justify-content-between">
                      <div class="col-6">Projet en recette</div>
                      <div class="col-4">
                        <b-button variant="outline-primary">Afficher</b-button>
                      </div>
                    </div>
                   </div>
                </b-card>
              </div><!--/.col-->
              <div class="col-sm-6 col-lg-3">
                <b-card>
                  <div class="h1 text-muted text-right mb-4">
                    <i class="icon-briefcase"></i>
                  </div>
                  <div class="container">
                    <div class="row">
                      <div class="col-6">
                        <div class="h4 m-0">{{tableBcard.finished.label}}</div>
                      </div>
                    </div>
                    <div class="row justify-content-between">
                      <div class="col-6">Projet fini</div>
                      <div class="col-4">
                        <b-button variant="outline-primary">Afficher</b-button>
                      </div>
                    </div>
                   </div>
                </b-card>
              </div><!--/.col-->
            </div><!--/.row-->
            <br/>
            <b-table class="table-outline mb-0" hover responsive outline
              :items="tableItems"
              :fields="tableFields"
              head-variant="default">

              <template slot="id" scope="item">
                  <strong>{{item.value.id}}</strong>
              </template>
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
              <template slot="lastUpdate" scope="item">
                <div class="small text-muted">{{item.value.user}}</div>
                <strong>{{item.value.update}}</strong>
              </template>
              <template slot="delivery" scope="item">
                <div class="small text-muted">couloir {{item.value.delivery}}</div>
                <strong>{{item.value.version}}</strong>
              </template>
              <template slot="edit" scope="item">
                <div class="actions">
                  <button type="button" class="btn btn-link text-muted" to="projet-nouveau"><i class="icon-settings"></i></button>
                </div>
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
          id: { id: '6' },
          project: { name: 'Projet 1' },
          user: { name: 'Yiorgos Avraamu', metier: 'Développeur éditique' },
          usage: { value: 50, begin: '05/06/2017', end: '05/07/2017', etat: 'Développement' },
          delivery: { version: 'VSI 2018', delivery: 'DV1' },
          lastUpdate: { user: 'Nicolas MENU', update: '01/01/2018' }
        },
        {
          id: { id: '19' },
          project: { name: 'Projet 2' },
          user: { name: 'Avram Tarasios', metier: 'Développeur éditique' },
          usage: { value: 0, begin: '05/06/2017', etat: 'Attente' },
          delivery: {version: 'RAPIDO 6', delivery: 'DV8'},
          lastUpdate: {user: '', update: ''}
        }
      ],
      tableFields: {
        id: {
          label: 'ID'
        },
        project: {
          label: 'Projet'
        },
        user: {
          label: 'Développeur'
        },
        usage: {
          label: 'Avancement'
        },
        lastUpdate: {
          label: 'Derniere modification'
        },
        delivery: {
          label: 'Livraison'
        },
        edit: {
          label: 'Edition'
        }
      },
      tableBcard: {
        pending: {
          label: '651'
        },
        ongoing: {
          label: '844'
        },
        recipe: {
          label: '5'
        },
        finished: {
          label: '61658'
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
      if (item.begin && !item.end) {
        $dateEtat = 1
      } else if (item.begin && item.end) {
        $dateEtat = 2
      } else if (!item.begin && item.end) {
        $dateEtat = 3
      }
      return $dateEtat
    }
  }
}
</script>
