<template>
  <div class="animated fadeIn">
    <div class="row">
      <div class="col-md-12">
        <div class="debut">
          <b-card>
            <div slot="header">
              <strong>Basic Form</strong> Elements
            </div>
            <b-form-fieldset
              description="Let us know your full name."
              label="Enter your name"
              :label-cols="3"
              :horizontal="true">
              <b-form-input type="text"></b-form-input>
            </b-form-fieldset>
            <b-form-fieldset
              label="Static"
              :label-cols="3"
              :horizontal="true">
              <b-form-input-static type="text" value="Username"></b-form-input-static>
            </b-form-fieldset>
            <b-form-fieldset
              description="This is a help text"
              label="Text Input"
              :label-cols="3"
              :horizontal="true">
              <b-form-input type="text" placeholder="Text"></b-form-input>
            </b-form-fieldset>
            <b-form-fieldset
              description="Please enter your email"
              label="Email Input"
              :label-cols="3"
              :horizontal="true">
              <b-form-input type="email" placeholder="Enter your email"></b-form-input>
            </b-form-fieldset>
            <b-form-fieldset
              description="Please enter a complex password"
              label="Password Input"
              :label-cols="3"
              :horizontal="true">
              <b-form-input type="password" placeholder="Enter your password"></b-form-input>
            </b-form-fieldset>
            <b-form-fieldset
              label="Disabled Input"
              :label-cols="3"
              :horizontal="true">
              <b-form-input type="text" :disabled="true" placeholder="Disabled"></b-form-input>
            </b-form-fieldset>
            <b-form-fieldset
              label="Textarea"
              :label-cols="3"
              :horizontal="true">
              <b-form-input :textarea="true" :rows="9" placeholder="Content.."></b-form-input>
            </b-form-fieldset>
            <b-form-fieldset
              label="Select"
              :label-cols="3"
              :horizontal="true">
              <b-form-select
                :plain="true"
                :options="['Please select','Option 1', 'Option 2', 'Option 3']"
                value="Please select">
              </b-form-select>
            </b-form-fieldset>
            <b-form-fieldset
              label="Select large"
              :label-cols="3"
              :horizontal="true">
              <b-form-select
                size="lg"
                :plain="true"
                :options="['Please select','Option 1', 'Option 2', 'Option 3']"
                value="Please select">
              </b-form-select>
            </b-form-fieldset>
            <b-form-fieldset
              label="Select small"
              :label-cols="3"
              :horizontal="true">
              <b-form-select
                size="sm"
                :plain="true"
                :options="['Please select','Option 1', 'Option 2', 'Option 3']"
                value="Please select">
              </b-form-select>
            </b-form-fieldset>
            <b-form-fieldset
              label="Disabled select"
              :label-cols="3"
              :horizontal="true">
              <b-form-select
                :plain="true"
                :options="['Please select','Option 1', 'Option 2', 'Option 3']"
                :disabled="true"
                value="Please select">
              </b-form-select>
            </b-form-fieldset>
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
            <b-form-fieldset
              label="Radios"
              :label-cols="3"
              :horizontal="true">
              <b-form-radio
                :plain="true"
                :options="[
                  {text: 'Option 1 ',value: '1'},
                  {text: 'Option 2 ',value: '2'},
                  {text: 'Option 3 ',value: '3'}
                ]"
                value="1"
                stacked></b-form-radio>
            </b-form-fieldset>
            <b-form-fieldset
              label="Radios - custom"
              :label-cols="3"
              :horizontal="true">
              <b-form-radio
                :options="[
                  {text: 'Option 1',value: '1'},
                  {text: 'Option 2',value: '2'},
                  {text: 'Option 3',value: '3'}
                ]"
                value="1"
                stacked></b-form-radio>
            </b-form-fieldset>
            <b-form-fieldset
              label="Inline radios"
              :label-cols="3"
              :horizontal="true">
              <b-form-radio
                :plain="true"
                :options="[
                  {text: 'Option 1 ',value: '1'},
                  {text: 'Option 2 ',value: '2'},
                  {text: 'Option 3 ',value: '3'}
                ]"
                value="1"></b-form-radio>
            </b-form-fieldset>
            <b-form-fieldset
              label="Inline radios - custom"
              :label-cols="3"
              :horizontal="true">
              <b-form-radio
                :options="[
                  {text: 'Option 1',value: '1'},
                  {text: 'Option 2',value: '2'},
                  {text: 'Option 3',value: '3'}
                ]"
                value="1"></b-form-radio>
            </b-form-fieldset>
            <b-form-fieldset
              label="Checkboxes"
              :label-cols="3"
              :horizontal="true">
                <b-form-checkbox :plain="true" value="1">Option 1</b-form-checkbox><br>
                <b-form-checkbox :plain="true" value="2">Option 2</b-form-checkbox><br>
                <b-form-checkbox :plain="true" value="3">Option 3</b-form-checkbox><br>
            </b-form-fieldset>
            <b-form-fieldset
              label="Inline checkboxes"
              :label-cols="3"
              :horizontal="true">
                <b-form-checkbox :plain="true" value="1">Option 1</b-form-checkbox>
                <b-form-checkbox :plain="true" value="2">Option 2</b-form-checkbox>
                <b-form-checkbox :plain="true" value="3">Option 3</b-form-checkbox>
            </b-form-fieldset>
            <b-form-fieldset
              label="Checkboxes - custom"
              :label-cols="3"
              :horizontal="true">
                <b-form-checkbox value="1">Option 1</b-form-checkbox><br>
                <b-form-checkbox value="2">Option 2</b-form-checkbox><br>
                <b-form-checkbox value="3">Option 3</b-form-checkbox><br>
            </b-form-fieldset>
            <b-form-fieldset
              label="Inline checkboxes - custom"
              :label-cols="3"
              :horizontal="true">
                <b-form-checkbox value="1">Option 1</b-form-checkbox>
                <b-form-checkbox value="2">Option 2</b-form-checkbox>
                <b-form-checkbox value="3">Option 3</b-form-checkbox>
            </b-form-fieldset>
            <b-form-fieldset
              label="File input"
              :label-cols="3"
              :horizontal="true">
                <b-form-file :plain="true"></b-form-file>
            </b-form-fieldset>
            <b-form-fieldset
              label="Multiple file input"
              :label-cols="3"
              :horizontal="true">
                <b-form-file :plain="true" :multiple="true"></b-form-file>
            </b-form-fieldset>
            <div slot="footer">
              <b-button type="submit" size="sm" variant="primary"><i class="fa fa-dot-circle-o"></i> Submit</b-button>
              <b-button type="reset" size="sm" variant="danger"><i class="fa fa-ban"></i> Reset</b-button>
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
