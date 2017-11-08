<template>
  <div class="animated fadeIn">
    <div class="row">
      <div class="col-md-12">
        <div class="debut">
          <b-card>
            <div slot="header">
              <strong>Nouveau projet</strong>
            </div>
            <b-form-fieldset
              label="Nom du projet"
              :label-cols="3"
              :horizontal="true">
              <b-form-input type="text" placeholder="Nom du projet..."></b-form-input>
            </b-form-fieldset>
            <b-form-fieldset
              label="Description"
              :label-cols="3"
              :horizontal="true">
              <b-form-input :textarea="true" :rows="3" placeholder="Description..."></b-form-input>
            </b-form-fieldset>
            <b-form-fieldset
              label="Version cible"
              :label-cols="3"
              :horizontal="true">
              <b-form-select
                :plain="true"
                :options="['Option 1', 'Option 2', 'Option 3']"
                value="Option 1">
              </b-form-select>
            </b-form-fieldset>
            <b-form-fieldset
              label="Date de livraison cible"
              :label-cols="3"
              :horizontal="true">
              <b-form-input type="text" placeholder="jj/mm/aaaa"></b-form-input>
            </b-form-fieldset>
            <b-form-fieldset
              label="Temps jour/homme"
              :label-cols="3"
              :horizontal="true">
              <b-form-input type="number" value="0"></b-form-input>
            </b-form-fieldset>
            <hr>
            <strong>Document éditique</strong>
            <b-form-fieldset
              label="Select"
              :label-cols="3"
              :horizontal="true">
              <b-form-select
                :plain="true"
                :multiple="true"
                :options="[
                  {
                    text: 'Please select some item',
                    value: null
                  },
                  {
                    text: 'This is First option',
                    value: 'a'
                  }, {
                    text: 'Default Selected Option',
                    value: 'b'
                  }, {
                    text: 'This is another option',
                    value: 'c'
                  }, {
                    text: 'This one is disabled',
                    value: 'd',
                    disabled: true
                  }]"
                :value="[null,'c']">
              </b-form-select>
            </b-form-fieldset>
            <hr>
            <strong>Personne</strong>
            <b-form-fieldset
              label="Pilote"
              :label-cols="3"
              :horizontal="true">
              <b-form-input type="text" placeholder="Pilote..."></b-form-input>
            </b-form-fieldset>
            <b-form-fieldset
              label="MOA"
              :label-cols="3"
              :horizontal="true">
              <b-form-input type="text" placeholder="MOA..."></b-form-input>
            </b-form-fieldset>
            <b-form-fieldset
              label="MOE"
              :label-cols="3"
              :horizontal="true">
              <b-form-input type="text" placeholder="MOE..."></b-form-input>
            </b-form-fieldset>
            <b-form-fieldset
              label="Développeur éditique"
              :label-cols="3"
              :horizontal="true">
              <b-form-input type="text" placeholder="Développeur éditique..."></b-form-input>
            </b-form-fieldset>
            <hr>
            <strong>Informations complémentaires</strong>
            <b-form-fieldset
              label="Couloir de recette"
              :label-cols="3"
              :horizontal="true">
              <b-form-select
                :plain="true"
                :options="['Option 1', 'Option 2', 'Option 3']"
                value="Option 1">
              </b-form-select>
            </b-form-fieldset>
            <b-form-fieldset
              label="Parametrage GDF"
              :label-cols="3"
              :horizontal="true">
              <b-form-input type="text" placeholder="jj/mm/aaaa"></b-form-input>
            </b-form-fieldset>
            <b-form-fieldset
              label="Parametrage ADF"
              :label-cols="3"
              :horizontal="true">
              <b-form-input type="text" placeholder="jj/mm/aaaa"></b-form-input>
            </b-form-fieldset>
            <b-form-fieldset
              label="Documents"
              :label-cols="3"
              :horizontal="true">
                <b-form-file :plain="true" :multiple="true"></b-form-file>
            </b-form-fieldset>
            <b-form-fieldset
              label="Commentaire"
              :label-cols="3"
              :horizontal="true">
              <b-form-input :textarea="true" :rows="3" placeholder="Commentaire..."></b-form-input>
            </b-form-fieldset>
            <div slot="footer">
              <b-button type="submit" size="sm" variant="primary"><i class="fa fa-dot-circle-o"></i> Valider</b-button>
              <b-button type="reset" size="sm" variant="danger"><i class="fa fa-ban"></i> Annuler</b-button>
            </div>
          </b-card>
        </div>
      </div>
    </div><!--/.row-->
  </div>
</template>

<script>
export default {
  name: 'formulaire',
  methods: {
    click () {
      // do nothing
    }
  }
}
</script>
