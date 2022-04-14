<template>
  <div id="header">
    <v-btn icon x-large style="position: absolute; z-index: 2" @click="nav_drawer = !nav_drawer"><v-icon>mdi-menu</v-icon></v-btn>
    <transition mode="in-out" enter-active-class="animate__animated animate__fadeInDown" leave-active-class="animate__animated animate__fadeOutUp">
      <div v-show="nav_drawer" id="nav_menu">
        <v-btn absolute icon x-large style="position: relative" @click="nav_drawer = !nav_drawer"><v-icon>mdi-close</v-icon></v-btn>
        <v-row>
          <v-col align="center">
            <v-row>
              <v-col>
                <v-hover v-slot="{hover}">
                  <div class="d-inline">
                    <v-btn rounded outlined :width="nav_btn_size" :height="nav_btn_size" to="/rates" class="page_btn" @click="closeDrawer">
                      <transition mode="in-out" enter-active-class="animate__animated animate__fadeIn">
                        <v-img v-show="!hover" :src="rates"></v-img>
                      </transition>
                      <transition mode="in-out" enter-active-class="animate__animated animate__fadeIn">
                        <v-img v-show="hover" :src="rates_hover"></v-img>
                      </transition>
                    </v-btn>
                    <router-link to="/rates">
                      <v-card shaped class="white--text page_label" style="border: #f17105 solid 2px !important;" color="primary" width="150" @click="closeDrawer"><span>Rates and Terms</span></v-card>
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
                    <v-btn rounded outlined :width="nav_btn_size" :height="nav_btn_size" to="/cottages" class="page_btn" @click="closeDrawer">
                      <transition mode="in-out" enter-active-class="animate__animated animate__fadeIn">
                        <v-img v-show="!hover" :src="cottages"></v-img>
                      </transition>
                      <transition mode="in-out" enter-active-class="animate__animated animate__fadeIn">
                        <v-img v-show="hover" :src="cottages_hover"></v-img>
                      </transition>
                    </v-btn>
                    <router-link to="/cottages">
                      <v-card shaped class="white--text page_label" style="border: #f17105 solid 2px !important;" color="primary" width="150" @click="closeDrawer"><span>Cottages</span></v-card>
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
                    <v-btn rounded outlined :width="nav_btn_size" :height="nav_btn_size" to="/contact" class="page_btn" @click="closeDrawer">
                      <transition mode="in-out" enter-active-class="animate__animated animate__fadeIn">
                        <v-img v-show="!hover" :src="contact"></v-img>
                      </transition>
                      <transition mode="in-out" enter-active-class="animate__animated animate__fadeIn">
                        <v-img v-show="hover" :src="contact_hover"></v-img>
                      </transition>
                    </v-btn>
                    <router-link to="/contact">
                      <v-card shaped class="white--text page_label" style="border: #f17105 solid 2px !important;" color="primary" width="150" @click="closeDrawer"><span>Contact Us!</span></v-card>
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
                    <v-btn rounded outlined :width="nav_btn_size" :height="nav_btn_size" to="/activities" class="page_btn" @click="closeDrawer">
                      <transition mode="in-out" enter-active-class="animate__animated animate__fadeIn">
                        <v-img v-show="!hover" :src="activities"></v-img>
                      </transition>
                      <transition mode="in-out" enter-active-class="animate__animated animate__fadeIn">
                        <v-img v-show="hover" :src="activities_hover"></v-img>
                      </transition>
                    </v-btn>
                    <router-link to="/activities">
                      <v-card shaped class="white--text page_label" style="border: #f17105 solid 2px !important;" color="primary" width="150" @click="closeDrawer"><span>Activities</span></v-card>
                    </router-link>
                  </div>
                </v-hover>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </div>
    </transition>
    <v-container fill-height fluid>
      <v-row justify="center">
        <v-col ref="logo_col" align="center" style="position: relative; margin-top: 200px; transition: all 2s;">
          <logo @logo_clicked="logo_click"></logo>
          <transition enter-active-class="animate__animated animate__zoomInUp" leave-active-class="animate__animated animate__zoomOut">
            <div ref="subtitle" v-show="atHome">
              <logo-subtitle :enable_svg="false"></logo-subtitle>
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
  name: "NavigationMobile",
  components: {
    Logo,
    LogoSubtitle
  },
  props: ['resized'],
  data: () => {
    return {
      atHome: false,
      nav_drawer: false,
      nav_btn_size: 130,
      nav_icon_size: 120,
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
  methods: {
    closeDrawer() {
      this.nav_drawer = false;
      this.page_click();
    },
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
  },
}
</script>

<style scoped>
#nav_menu {
  padding: 10px;
  position: absolute;
  width: 100%;
  background-color: rgba(136,136,136,0.2);
  backdrop-filter: blur(30px);
  z-index: 5;
  box-shadow: 0px 10px 77px 4px rgba(0,0,0,0.75);
  -webkit-box-shadow: 0px 10px 77px 4px rgba(0,0,0,0.75);
  -moz-box-shadow: 0px 10px 77px 4px rgba(0,0,0,0.75);
}

.page_label {
  margin-top: 10px;
  cursor: pointer;
}
</style>