<template>
  <v-container style="max-width: 1120px;">
    <v-row>
      <v-col align="center">
        <v-card max-width="1100" elevation="10">
          <v-toolbar color="primary" flat dark>
            <v-toolbar-title>VRBO Calendar</v-toolbar-title>
            <v-spacer></v-spacer>
            <span class="float-right" style="font-size: 12px;">(updated every 2 hours)</span>
          </v-toolbar>
          <v-tabs centered grow active-class="tab_active">
            <v-tab class="tab_btn">Loyola</v-tab>
            <v-tab class="tab_btn">Marquette</v-tab>
            <v-tab-item>
              <!-- Loyola -->
              <iframe src="https://calendar.google.com/calendar/embed?height=600&wkst=1&bgcolor=%23ffffff&ctz=America%2FChicago&title&showTitle=0&showCalendars=1&src=MGoyNzFhMmg1ZXRvdm9rN2Q3YmNsbmgxMWFiamMyMm9AaW1wb3J0LmNhbGVuZGFyLmdvb2dsZS5jb20&color=%238E24AA" style="width: 100%;" height="700" frameborder="0" scrolling="no" class="pt-1"></iframe>
              <v-col><p class="mt-3 text-h3 text-left orange-grad white--text">&nbsp;Loyola Links:</p></v-col>
              <v-row class="ma-5 mt-0">
                <v-col cols="12" md="6" sm="12" align="right">
                  <v-card elevation="10" min-height="300" class="link_card d-flex align-center vrbo_logo" @click="redirect('https://www.vrbo.com/2304851?noDates=true&unitId=2870995')">
                    <v-img :src="vrbo_logo"></v-img>
                  </v-card>
                </v-col>
                <v-col cols="12" md="6" sm="12">
                  <v-card elevation="10" min-height="300" class="link_card d-flex align-center" @click="redirect('https://www.rentwisconsincabins.com/rental/camp-flambeau-fence-lake-cottage-ebxpjerxw9')">
                    <v-img :src="rwc_bg" style="position: absolute; z-index: 0; width: 100%; height: 100%;"></v-img>
                    <v-img :src="rwc_logo" style="position: relative; z-index: 0;"></v-img>
                  </v-card>
                </v-col>
              </v-row>
            </v-tab-item>
            <v-tab-item>
              <!-- Marquette -->
              <iframe src="https://calendar.google.com/calendar/embed?height=600&wkst=1&bgcolor=%23ffffff&ctz=America%2FChicago&showTitle=0&src=NXQ4bGx2YmNuOW1rOGd2Njcwam0xaHM1cjRsYXRjc2JAaW1wb3J0LmNhbGVuZGFyLmdvb2dsZS5jb20&color=%23795548" style="width: 100%;" height="700" frameborder="0" scrolling="no" class="pt-1"></iframe>
              <v-col><p class="mt-3 text-h3 text-left orange-grad white--text">&nbsp;Marquette Links:</p></v-col>
              <v-row class="ma-5 mt-0">
                <v-col cols="12" md="6" sm="12" align="right">
                  <v-card elevation="10" min-height="300" class="link_card d-flex align-center vrbo_logo" @click="redirect('https://www.vrbo.com/2137295?noDates=true&unitId=2701831')">
                    <v-img :src="vrbo_logo"></v-img>
                  </v-card>
                </v-col>
                <v-col cols="12" md="6" sm="12">
                  <v-card elevation="10" min-height="300" class="link_card d-flex align-center" @click="redirect('https://www.rentwisconsincabins.com/rental/camp-flambeau-camp-flambeau-g86lvzqxz4')">
                    <v-img :src="rwc_bg" style="position: absolute; z-index: 0; width: 100%; height: 100%;"></v-img>
                    <v-img :src="rwc_logo" style="position: relative; z-index: 0;"></v-img>
                  </v-card>
                </v-col>
              </v-row>
            </v-tab-item>
          </v-tabs>
        </v-card>
      </v-col>
    </v-row>
  </v-container>

</template>

<script>
export default {
  name: "Rates",
  data: () => {
    return {
      vrbo_logo: require('./../assets/Rates/vrbo.png'),
      rwc_logo: require('./../assets/Rates/rwc.png'),
      rwc_bg: require('./../assets/Rates/rwc_bg.jpg'),
    }
  },
  methods: {
    redirect(url) {
      window.open(url, '_blank');
    }
  }
}
</script>

<style scoped lang="scss">
.tab_btn {
  border-bottom: solid black 2px;
}
.tab_active {
  background-color: rgba(146,0,0, 0.1);
  border-bottom: none;
}

.vrbo_logo {
  background-color: #0E214B;
}

.link_card {
  animation-duration: 1s;
  animation-iteration-count: 1;
  animation-fill-mode: forwards;
  animation-name: skew-reverse;
  animation-timing-function: ease;
}

.link_card:hover {
  animation-name: skew;
  animation-timing-function: ease;
}

@keyframes skew {
  from {
    transform: scale(1);
  }
  to {
    transform: scale(1.05);
  }
}

@keyframes skew-reverse {
  from {
    transform: scale(1.05);
  }
  to {
    transform: scale(1);
  }
}
</style>