<template>
  <div>
    <v-row>
      <v-col align="center">
        <v-card max-width="800" elevation="10">
          <v-toolbar color="primary" flat dark>
            <v-toolbar-title class="text-h5">Your Hosts</v-toolbar-title>
          </v-toolbar>
          <v-row justify="center">
            <v-col align="center" class="pa-5">
              <v-img max-width="350" class="rounded" eager :src="fam" alt="Neil Dziadulewicz"></v-img>
            </v-col>
            <v-col class="d-flex justify-center align-center">
              <ul style="list-style-type: none; position: relative;" class="pa-0 ma-0">
                <li>
                  <p class="text-h4">Neil Dziadulewicz</p>
                </li>
                <li>
                  <v-text-field value="neildziad@yahoo.com" readonly filled>
                    <template v-slot:prepend>
                      <v-btn icon color="primary" href="mailto:neildziad@yahoo.com"><v-icon>mdi-at</v-icon></v-btn>
                    </template>
                  </v-text-field>
                </li>
                <li>
                  <v-text-field value="(414) 722-9924" readonly filled>
                    <template v-slot:prepend>
                      <v-btn icon color="primary" href="tel:4147229924"><v-icon>mdi-phone</v-icon></v-btn>
                    </template>
                  </v-text-field>
                </li>
              </ul>
            </v-col>
          </v-row>
          <v-toolbar color="secondary" flat dark>
            <v-toolbar-title class="text-h5">Inquiry Form</v-toolbar-title>
          </v-toolbar>
          <div class="pa-5 text-left">
  <!--          <iframe sandbox="allow-scripts allow-popups allow-forms allow-same-origin" width="100%" height="660px" style="border: 0; overflow: hidden; overflow-x: auto;" src="https://forms.helpdesk.com?licenseID=1810057983&contactFormID=3b4737cb-0842-419f-99ca-2fa42491b02f">    Your browser does not allow embedded content.  </iframe>-->
            <v-row>
              <v-col>
                <h4>Camp Flambeau Inquiry</h4>
                <p>Leave your name, email, preferred dates, and any questions you'd like to be answered and we'll get back to you ASAP!</p>
              </v-col>
            </v-row>
            <contact-form @notif="notification"></contact-form>
          </div>
        </v-card>
      </v-col>
    </v-row>
    <notification-bar ref="notif"></notification-bar>
  </div>
</template>

<script>
import ContactForm from "@/components/ContactForm";
import NotificationBar from "@/components/NotificationBar";
export default {
  name: "Contact",
  components: {NotificationBar, ContactForm},
  data: () => {
    return {
      fam: require('../assets/fam.jpg'),
    }
  },
  methods: {
    notification(msg) {
      this.$refs.notif.notification(msg);
    }
  }
}
</script>

<style scoped>

</style>