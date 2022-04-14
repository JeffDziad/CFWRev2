<template>
  <div id="header">
    <v-container fill-height fluid>
      <v-row justify="center">
        <v-col>
          <v-row>
            <v-col align="center">
              <v-row>
                <v-col>
                  <v-hover v-slot="{hover}">
                    <div class="d-inline">
                      <v-btn rounded outlined :width="nav_btn_size" :height="nav_btn_size" to="/rates" class="page_btn" @click="page_click">
                        <transition mode="in-out" enter-active-class="animate__animated animate__fadeIn">
                          <v-img v-show="!hover" :src="rates"></v-img>
                        </transition>
                        <transition mode="in-out" enter-active-class="animate__animated animate__fadeIn">
                          <v-img v-show="hover" :src="rates_hover"></v-img>
                        </transition>
                      </v-btn>
                      <router-link to="/rates">
                        <v-card shaped class="white--text page_label" style="border: #f17105 solid 2px !important;" color="primary" width="150" @click="page_click"><span>Rates and Terms</span></v-card>
                      </router-link>
                    </div>
                  </v-hover>
                </v-col>
              </v-row>
            </v-col>
            <v-col align="center">
              <v-row>
                <v-col>
                  <v-hover v-slot="{hover}">
                    <div class="d-inline">
                      <v-btn rounded outlined :width="nav_btn_size" :height="nav_btn_size" to="/cottages" class="page_btn" @click="page_click">
                        <transition mode="in-out" enter-active-class="animate__animated animate__fadeIn">
                          <v-img v-show="!hover" :src="cottages"></v-img>
                        </transition>
                        <transition mode="in-out" enter-active-class="animate__animated animate__fadeIn">
                          <v-img v-show="hover" :src="cottages_hover"></v-img>
                        </transition>
                      </v-btn>
                      <router-link to="/cottages">
                        <v-card shaped class="white--text page_label" style="border: #f17105 solid 2px !important;" color="primary" width="150" @click="page_click"><span>Cottages</span></v-card>
                      </router-link>
                    </div>
                  </v-hover>
                </v-col>
              </v-row>
            </v-col>
          </v-row>
        </v-col>
        <v-col ref="logo_col" align="center" style="position: relative; margin-top: 200px; transition: all 2s;">
          <logo @logo_clicked="logo_click"></logo>
        </v-col>
        <v-col align="center">
          <v-row>
            <v-col align="center">
              <v-row>
                <v-col>
                  <v-hover v-slot="{hover}">
                    <div class="d-inline">
                      <v-btn rounded outlined :width="nav_btn_size" :height="nav_btn_size" to="/contact" class="page_btn" @click="page_click">
                        <transition mode="in-out" enter-active-class="animate__animated animate__fadeIn">
                          <v-img v-show="!hover" :src="contact"></v-img>
                        </transition>
                        <transition mode="in-out" enter-active-class="animate__animated animate__fadeIn">
                          <v-img v-show="hover" :src="contact_hover"></v-img>
                        </transition>
                      </v-btn>
                      <router-link to="/contact">
                        <v-card shaped class="white--text page_label" style="border: #f17105 solid 2px !important;" color="primary" width="150" @click="page_click"><span>Contact Us!</span></v-card>
                      </router-link>
                    </div>
                  </v-hover>
                </v-col>
              </v-row>
            </v-col>
            <v-col align="center">
              <v-row>
                <v-col>
                  <v-hover v-slot="{hover}">
                    <div class="d-inline">
                      <v-btn rounded outlined :width="nav_btn_size" :height="nav_btn_size" to="/activities" class="page_btn" @click="page_click">
                        <transition mode="in-out" enter-active-class="animate__animated animate__fadeIn">
                          <v-img v-show="!hover" :src="activities"></v-img>
                        </transition>
                        <transition mode="in-out" enter-active-class="animate__animated animate__fadeIn">
                          <v-img v-show="hover" :src="activities_hover"></v-img>
                        </transition>
                      </v-btn>
                      <router-link to="/activities">
                        <v-card shaped class="white--text page_label" style="border: #f17105 solid 2px !important;" color="primary" width="150" @click="page_click"><span>Activities</span></v-card>
                      </router-link>
                    </div>
                  </v-hover>
                </v-col>
              </v-row>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
      <v-row class="d-flex justify-center align-center">
        <v-col align="center">
          <transition enter-active-class="animate__animated animate__slideInRight" leave-active-class="animate__animated animate__slideOutLeft">
            <div ref="subtitle" v-show="atHome" style="">
              <logo-subtitle :enable_svg="true"></logo-subtitle>
            </div>
          </transition>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import Logo from "@/components/Logo";
import LogoSubtitle from "@/components/LogoSubtitle";

export default {
  name: "NavigationDesktop",
  components: {LogoSubtitle, Logo},
  props: ['resized'],
  data: () => {
    return {
      nav_btn_size: 130,
      nav_icon_size: 120,
      atHome: false,
      activities: require('../assets/icons/page_icons/activities.png'),
      activities_hover: require('../assets/icons/page_icons/activities_hover.png'),
      cottages: require('../assets/icons/page_icons/cabins.png'),
      cottages_hover: require('../assets/icons/page_icons/cabins_hover.png'),
      contact: require('../assets/icons/page_icons/contact.png'),
      contact_hover: require('../assets/icons/page_icons/contact_hover.png'),
      rates: require('../assets/icons/page_icons/rates.png'),
      rates_hover: require('../assets/icons/page_icons/rates_hover.png')
    }
  },
  computed: {

  },
  methods: {
    logo_click() {
      this.$refs.logo_col.style.marginTop = '200px';
      this.atHome = true;
    },
    page_click() {
      this.$refs.logo_col.style.marginTop = '0px';
      this.atHome = false;
    },
    checkForHome() {
      if(this.$router.currentRoute.name.toUpperCase() === 'HOME') {
        this.logo_click();
      } else {
        this.page_click();
      }
    }
  },
  mounted() {
    this.checkForHome();
  },
  watch: {
    resized: function() {
      this.checkForHome();
    }
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Bungee&display=swap');

.page_btn {
  border: rgba(0, 0, 0, 0) solid 2px;
}

.page_label {
  margin-top: 10px;
}
</style>