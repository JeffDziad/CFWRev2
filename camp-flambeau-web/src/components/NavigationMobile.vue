<template>
  <div id="header">
    <v-btn icon x-large style="position: absolute; z-index: 10" @click="nav_drawer = !nav_drawer">
      <v-icon>mdi-menu</v-icon>
    </v-btn>
    <transition mode="in-out" enter-active-class="animate__animated animate__fadeInDown"
                leave-active-class="animate__animated animate__fadeOutUp">
      <div v-show="nav_drawer" id="nav_menu">
        <v-btn absolute icon x-large style="position: relative" @click="nav_drawer = !nav_drawer">
          <v-icon>mdi-close</v-icon>
        </v-btn>
        <v-row>
          <v-col align="center">
            <v-row>
              <v-hover v-slot="{hover}" style="cursor: inherit;">
                <v-col>

                  <div class="d-inline">
                    <v-btn rounded outlined :width="nav_btn_size" :height="nav_btn_size" to="/rates" class="page_btn"
                           @click="closeDrawer">
                      <transition mode="in-out" enter-active-class="animate__animated animate__fadeIn">
                        <v-img v-show="!hover" :src="rates" class="page_icon"></v-img>
                      </transition>
                      <transition mode="in-out" enter-active-class="animate__animated animate__fadeIn">
                        <v-img v-show="hover" :src="rates_hover" class="page_icon-hover"></v-img>
                      </transition>
                    </v-btn>
                    <v-card shaped class="mt-3" style="border: #f17105 solid 2px !important;" color="primary" @click="closeDrawer"
                            width="150">
                      <router-link to="/rates" class="white--text text-decoration-none"><span>Rates and Terms</span>
                      </router-link>
                    </v-card>
                  </div>


                </v-col>
              </v-hover>
            </v-row>
          </v-col>
          <v-col align="center">
            <v-row>
              <v-hover v-slot="{hover}" style="cursor: inherit;">
                <v-col>

                  <div class="d-inline">
                    <v-btn rounded outlined :width="nav_btn_size" :height="nav_btn_size" to="/cottages" class="page_btn"
                           @click="closeDrawer">
                      <transition mode="in-out" enter-active-class="animate__animated animate__fadeIn">
                        <v-img v-show="!hover" :src="cottages" class="page_icon"></v-img>
                      </transition>
                      <transition mode="in-out" enter-active-class="animate__animated animate__fadeIn">
                        <v-img v-show="hover" :src="cottages_hover" class="page_icon-hover"></v-img>
                      </transition>
                    </v-btn>
                    <v-card shaped class="mt-3" style="border: #f17105 solid 2px !important;" color="primary" @click="closeDrawer"
                            width="150">
                      <router-link to="/cottages"  class="white--text text-decoration-none"><span>Cottages</span>
                      </router-link>
                    </v-card>
                  </div>


                </v-col>
              </v-hover>
            </v-row>
          </v-col>
          <v-col align="center">
            <v-row>
              <v-hover v-slot="{hover}" style="cursor: inherit;">
                <v-col>

                  <div class="d-inline">
                    <v-btn rounded outlined :width="nav_btn_size" :height="nav_btn_size" to="/contact" class="page_btn"
                           @click="closeDrawer">
                      <transition mode="in-out" enter-active-class="animate__animated animate__fadeIn">
                        <v-img v-show="!hover" :src="contact" class="page_icon"></v-img>
                      </transition>
                      <transition mode="in-out" enter-active-class="animate__animated animate__fadeIn">
                        <v-img v-show="hover" :src="contact_hover" class="page_icon-hover"></v-img>
                      </transition>
                    </v-btn>
                    <v-card shaped class="mt-3" style="border: #f17105 solid 2px !important;" color="primary" @click="closeDrawer"
                            width="150">
                      <router-link to="/contact" class="white--text text-decoration-none"><span>Contact Us!</span>
                      </router-link>
                    </v-card>
                  </div>

                </v-col>
              </v-hover>
            </v-row>
          </v-col>
          <v-col align="center">
            <v-row>
              <v-hover v-slot="{hover}" style="cursor: inherit;">
                <v-col>

                  <div class="d-inline">
                    <v-btn rounded outlined :width="nav_btn_size" :height="nav_btn_size" to="/activities"
                           class="page_btn" @click="closeDrawer">
                      <transition mode="in-out" enter-active-class="animate__animated animate__fadeIn">
                        <v-img v-show="!hover" :src="activities" class="page_icon"></v-img>
                      </transition>
                      <transition mode="in-out" enter-active-class="animate__animated animate__fadeIn">
                        <v-img v-show="hover" :src="activities_hover" class="page_icon-hover"></v-img>
                      </transition>
                    </v-btn>
                    <v-card shaped class="mt-3" style="border: #f17105 solid 2px !important;" color="primary" @click="closeDrawer"
                            width="150">
                      <router-link to="/activities" class="white--text text-decoration-none"><span>Activities</span>
                      </router-link>
                    </v-card>
                  </div>

                </v-col>
              </v-hover>
            </v-row>
          </v-col>
        </v-row>
      </div>
    </transition>
    <v-container fill-height fluid>
      <v-row justify="center">
        <v-col ref="logo_col" align="center" style="position: relative; margin-top: 200px; transition: all 2s;">
          <logo @logo_clicked="logo_click"></logo>
          <transition enter-active-class="animate__animated animate__zoomInUp"
                      leave-active-class="animate__animated animate__zoomOut">
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
      if (this.$router.currentRoute.name.toUpperCase() === 'HOME') {
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
    resized: function () {
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
  background-color: rgba(136, 136, 136, 0.2);
  backdrop-filter: blur(30px);
  z-index: 10;
  box-shadow: 0px 10px 77px 4px rgba(0, 0, 0, 0.75);
  -webkit-box-shadow: 0px 10px 77px 4px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 0px 10px 77px 4px rgba(0, 0, 0, 0.75);
}

.page_label {
  margin-top: 10px;
  cursor: pointer;
}
</style>