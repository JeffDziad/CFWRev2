<template>
  <v-form v-model="form" ref="form">
    <v-row>
      <v-col>
        <v-text-field :disabled="fieldDis.name" v-model="form_data.name" :rules="rules.name" label="Name" required filled></v-text-field>
      </v-col>
      <v-col>
        <v-text-field :disabled="fieldDis.email" v-model="form_data.email" :rules="rules.email"  label="E-mail" required filled></v-text-field>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <v-menu ref="startDateMenu" v-model="startDateMenu" :close-on-content-click="false" :return-value.sync="form_data.startDate" transition="scale-transition" offset-y min-width="auto" >
          <template v-slot:activator="{on,attrs}">
            <v-text-field :disabled="fieldDis.startDate"  filled v-model="form_data.startDate" label="Start Date" prepend-icon="mdi-calendar" readonly v-bind="attrs" v-on="on" hint="*Optional" persistent-hint placeholder="No date selected." persistent-placeholder clearable></v-text-field>
          </template>
          <v-date-picker v-model="form_data.startDate" no-title scrollable>
            <v-spacer></v-spacer>
            <v-btn text color="primary" @click="startDateMenu = false">
              Cancel
            </v-btn>
            <v-btn text color="primary" @click="$refs.startDateMenu.save(form_data.startDate)">
              OK
            </v-btn>
          </v-date-picker>
        </v-menu>
      </v-col>
      <v-col>
        <v-menu ref="endDateMenu" v-model="endDateMenu" :close-on-content-click="false" :return-value.sync="form_data.endDate" transition="scale-transition" offset-y min-width="auto">
          <template v-slot:activator="{on,attrs}">
            <v-text-field :disabled="fieldDis.endDate"  filled v-model="form_data.endDate" label="End Date" prepend-icon="mdi-calendar" readonly v-bind="attrs" v-on="on" hint="*Optional" persistent-hint placeholder="No date selected." persistent-placeholder clearable></v-text-field>
          </template>
          <v-date-picker v-model="form_data.endDate" no-title scrollable>
            <v-spacer></v-spacer>
            <v-btn text color="primary" @click="endDateMenu = false">
              Cancel
            </v-btn>
            <v-btn text color="primary" @click="$refs.endDateMenu.save(form_data.endDate)">
              OK
            </v-btn>
          </v-date-picker>
        </v-menu>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <v-textarea :disabled="fieldDis.message" filled v-model="form_data.message" label="Message" placeholder="Your message goes here!" persistent-placeholder no-resize counter :rules="rules.message"></v-textarea>
      </v-col>
    </v-row>
    <v-row class="ma-0 pa-0">
      <v-col>
        <v-btn block color="primary" :disabled="submitDis" @click="submitForm" :loading="loading">Send Inquiry</v-btn>
      </v-col>
    </v-row>
  </v-form>
</template>

<script>
export default {
  name: "ContactForm",
  data: () => {
    return {
      form: false,
      loading: false,
      submitDis: false,
      form_data: {
        name: "",
        email: "",
        startDate: null,
        endDate: null,
        message: "",
      },
      startDateMenu: false,
      endDateMenu: false,
      rules: {
        name: [v => !!v || 'Name is required!',],
        email: [
          v => !!v || 'Email is required!',
          v => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) || 'Please enter a valid email!',
        ],
        message: [v => v.length > 0 || 'A message is required!'],
      },
      fieldDis: {
        name: false,
        email: false,
        startDate: false,
        endDate: false,
        message: false,
      }
    }
  },
  computed: {

  },
  methods: {
    async submitForm() {
      this.$refs.form.validate();
      if(this.form) {
        // Post request
        this.loading = true;
        this.disableFields();
        let result = false;
        await this.axios.post('/submit/inquiry', this.form_data)
            .then(function (res) {
              if(res.status === 200) {
                result = true;
              }
            })
            .catch(function () {
              result = false;
            });
        if(result) {
          this.$emit('notif', 'Success! Your inquiry has been sent.');
          this.loading = false;
          this.submitDis = true;
        } else {
          this.failed();
        }
      } else {
        this.loading = false;
        this.enableFields();
      }
    },
    disableFields() {
      for (let key in this.fieldDis) {
        this.fieldDis[key] = true;
      }
    },
    enableFields() {
      for (let key in this.fieldDis) {
        this.fieldDis[key] = false;
      }
    },
    failed() {
      this.$emit('notif', 'There was a problem submitting your inquiry. Please try again later.');
      this.loading = false;
      this.enableFields();
    }
  }
}
</script>

<style scoped>

</style>