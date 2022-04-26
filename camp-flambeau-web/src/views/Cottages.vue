<template>
  <v-row>
    <v-col align="center">
      <v-card max-width="1000" elevation="10" outlineds style="border-bottom-left-radius: 25px; border-bottom-right-radius: 25px;">
        <v-tabs v-model="cottage_tabs" color="secondary" grow show-arrows active-class="tabs-active">
          <v-tab class="tab-btn">Loyola</v-tab>
          <v-divider vertical></v-divider>
          <v-tab class="tab-btn">Marquette</v-tab>
          <v-divider vertical></v-divider>
          <v-tab class="tab-btn">Shared Info</v-tab>
        </v-tabs>
        <v-tabs-items v-model="cottage_tabs">
          <v-tab-item>
            <v-dialog v-model="loyolaViewer" fullscreen>
              <div style="width: 100%; height: 100%; backdrop-filter: blur(10px); overflow: hidden;">
                <v-btn absolute icon large @click.stop="loyolaViewer = false" style="top: 10px; left: 10px; background-color: #fff; z-index: 3;"><v-icon color="red">mdi-close</v-icon></v-btn>
                <v-row justify="center">
                  <v-col align="center">
                    <v-carousel height="100vh" ref="loyola_viewer_carousel">
                      <v-carousel-item v-for="(item, i) in loyola_imgs" :key="i" style="background-color: rgba(0, 0, 0, 0.15)">
                        <v-img eager :src="item.src" contain style="height: 100%; width: auto;"></v-img>
                      </v-carousel-item>
                    </v-carousel>
                  </v-col>
                </v-row>
              </div>
            </v-dialog>
            <!-- Loyola -->
            <v-carousel hide-delimiters>
              <v-tooltip top>
                <template v-slot:activator="{on, attrs}">
                  <v-btn absolute large icon style="z-index: 2; left: 10px; top: 10px; background-color: white;" @click="loyolaLargeViewer" v-bind="attrs" v-on="on"><v-icon color="black">mdi-resize</v-icon></v-btn>
                </template>
                <span>Fullscreen View</span>
              </v-tooltip>
              <v-carousel-item v-for="(item, i) in loyola_imgs" :key="i" style="background-color: rgba(0, 0, 0, 0.15)">
                <v-img eager :src="item.src" contain style="height: 100%; width: auto;"></v-img>
              </v-carousel-item>
            </v-carousel>
            <v-container class="pa-5">

              <v-row>
                <v-col>
                  <span class="text-h5">Loyola Cottage - <a href="https://www.google.com/maps/search/?api=1&query=45.966897,-89.823322" target="_blank">2413 Goldfinch Ln. Lac du Flambeau, WI 54538</a></span>
                </v-col>
              </v-row>

              <v-row class="ma-5">
                <v-col cols="12" md="6" sm="12" align="right">
                  <v-card elevation="0" min-height="100" max-height="100" class="link_card d-flex align-center">
                    <v-img :src="vrbo_logo" min-height="100" max-height="100" contain @click.prevent.stop="redirect('https://www.vrbo.com/2304851?noDates=true&unitId=2870995')"></v-img>
                  </v-card>
                </v-col>
                <v-col cols="12" md="6" sm="12">
                  <v-card elevation="0" min-height="100" max-height="100" class="link_card d-flex align-center">
                    <v-img :src="rwc_logo" min-height="100" max-height="100" contain @click.prevent.stop="redirect('https://www.rentwisconsincabins.com/rental/camp-flambeau-fence-lake-cottage-ebxpjerxw9')"></v-img>
                  </v-card>
                </v-col>
              </v-row>

              <v-col><p class="text-h3 text-left red-grad white--text">&nbsp;Description</p></v-col>
              <div class="mx-5">
                <p class="text-left indent">
                  Enjoy our rustic, cozy, and clean, 3 season Northwoods cottage with 2 Bedrooms, (1 Queens, 1 Twin/Full Bunkbed and trundle bed, sleeps 6). Dine on the full wrap-around deck with shaded patio furniture.  Prepare your favorite meals in your beautiful, fully equipped kitchen with dishwasher and an ice maker/filtered water refrigerator.  For the chilly nights, enjoy your free standing wood pellet fireplace in living room for added romance!  Gather around the private fire pit ( with free wood), with lawn chairs. As an added bonus, enjoy free streaming TV and high-speed Wi-Fi internet!
                </p>
                <p class="text-left indent">
                  Gather with friends or family to enjoy the fun and refreshing gin clear waters of Fence Lake!  Relish great boating and fishing on this full REC lake, explore connected lakes on the ten lake chain, do some eagle watching, bike or ATV on one of the nearby trails, play tennis or shoot hoops on the private court, or just sit and relax (indoors or out) to enjoy the beautiful view.   Memories are made here!
                </p>
                <p class="text-left indent">
                  Cap off your day with your favorite beverage as you lounge to watch the spectacular sunset!   When you're tuckered out from all the fun and fresh lake air, retreat to this rustic, cozy, and newly remodeled north woods cottage.
                </p>
                <p class="text-left indent">
                  Enjoy cooking out on the full patio with table, charcoal grill, with free charcoal.  Minocqua, Woodruff and Lac du Flambeau are all within 10 minute drive if you prefer to dine out or carry in.  Try one of Wisconsin's famous supper clubs in the area.
                </p>
                <p class="text-left">
                  Guests will enjoy a private pier to dock your personal watercraft!
                </p>
              </div>
              <hr>
              <br>
              <v-col><p class="text-h3 text-left orange-grad white--text">&nbsp;Amenities</p></v-col>
              <v-row>
                <v-col>
                  <v-row v-for="(item, i) in amenities" :key="i" justify="center" align="center">
                    <v-col align="center" class="text-right">
                      {{item.str}}
                    </v-col>
                    <v-col>
                      <v-img :src="item.icon" width="60" class="float-left"></v-img>
                    </v-col>
                  </v-row>
                </v-col>
              </v-row>
              <br>
              <hr>
              <br>
              <v-col><p class="text-h3 text-left yellow-grad white--text">&nbsp;Unique Features</p></v-col>
              <v-row>
                <v-col>
                  <p class="text-left indent">
                    Right on the coveted Fence Lake! Awesome western view of the sunset and of the crystal-clear Fence Lake.  Access to all 10 Lakes on the Fence Lake Chain.  Lighted stairway or tram lift to the pier and dock. House-trained Dogs welcomed.
                  </p>
                </v-col>
              </v-row>
            </v-container>
          </v-tab-item>
          <v-tab-item>
            <!-- Marquette -->
            <v-dialog v-model="marquetteViewer" fullscreen>
              <div style="width: 100%; height: 100%; backdrop-filter: blur(10px); overflow: hidden;">
                <v-btn absolute icon large @click.stop="marquetteViewer = false" style="top: 10px; left: 10px; background-color: #fff; z-index: 3;"><v-icon color="red">mdi-close</v-icon></v-btn>
                <v-row justify="center">
                  <v-col align="center">
                    <v-carousel height="100vh">
                      <v-carousel-item v-for="(item, i) in marquette_imgs" :key="i" style="background-color: rgba(0, 0, 0, 0.15)">
                        <v-img eager :src="item.src" contain style="height: 100%"></v-img>
                      </v-carousel-item>
                    </v-carousel>
                  </v-col>
                </v-row>
              </div>
            </v-dialog>
            <v-carousel hide-delimiters>
              <v-tooltip top>
                <template v-slot:activator="{on, attrs}">
                  <v-btn absolute large icon style="z-index: 2; left: 10px; top: 10px; background-color: white;" @click="marquetteLargeViewer" v-bind="attrs" v-on="on"><v-icon color="black">mdi-resize</v-icon></v-btn>
                </template>
                <span>Fullscreen View</span>
              </v-tooltip>

              <v-carousel-item v-for="(item, i) in marquette_imgs" :key="i" style="background-color: rgba(0, 0, 0, 0.15)">
                <v-img eager :src="item.src" contain style="height: 100%"></v-img>
              </v-carousel-item>
            </v-carousel>
            <v-container class="pa-5">

              <v-row>
                <v-col>
                  <span class="text-h5">Marquette Cottage - <a href="https://goo.gl/maps/UNYoF61ax4BWHErS9" target="_blank">2417 Goldfinch Ln. Lac du Flambeau, WI 54538</a></span>
                </v-col>
              </v-row>

              <v-row class="ma-5">
                <v-col cols="12" md="6" sm="12" align="right">
                  <v-card elevation="0" min-height="100" max-height="100" class="link_card d-flex align-center">
                    <v-img :src="vrbo_logo" min-height="100" max-height="100" contain @click.prevent.stop="redirect('https://www.vrbo.com/2137295?noDates=true&unitId=2701831')"></v-img>
                  </v-card>
                </v-col>
                <v-col cols="12" md="6" sm="12">
                  <v-card elevation="0" min-height="100" max-height="100" class="link_card d-flex align-center">
                    <v-img :src="rwc_logo" min-height="100" max-height="100" contain @click.prevent.stop="redirect('https://www.rentwisconsincabins.com/rental/camp-flambeau-camp-flambeau-g86lvzqxz4')"></v-img>
                  </v-card>
                </v-col>
              </v-row>

              <v-col><p class="text-h3 text-left red-grad white--text">&nbsp;Description</p></v-col>
              <div class="mx-5">
                <p class="text-left indent">
                  Enjoy our rustic, cozy, and clean, 4 season Northwoods cottage with 2 Bedrooms, (1 Queens, 1 Twin/Full Bunkbed and sleeper sofa, sleeps 6). Dine in on a 6-chair dining set or a 4-chair snack bar, or outdoors on your own patio with octagonal picnic table.  Prepare your favorite meals in your beautiful, fully equipped kitchen with dishwasher and an ice maker/filtered water refrigerator.  Gather around the private fire pit (with free wood), with lawn chairs. As an added bonus, enjoy free streaming TV and high-speed Wi-Fi internet!
                </p>
                <p class="text-left indent">
                  Gather with friends or family to enjoy the fun and refreshing gin clear waters of Fence Lake!  Relish great boating and fishing on this full REC lake, explore connected lakes on the ten lake chain, do some eagle watching, bike or ATV on one of the nearby trails, play tennis or shoot hoops on the private court, or just sit and relax (indoors or out) to enjoy the beautiful view.   Memories are made here!
                </p>
                <p class="text-left indent">
                  Cap off your day with your favorite beverage as you lounge to watch the spectacular sunset!   When you're tuckered out from all the fun and fresh lake air, retreat to this rustic, cozy, and newly remodeled north woods cottage.
                </p>
                <p class="text-left indent">
                  Enjoy cooking out on the full patio with table, gas grill.  Minocqua, Woodruff and Lac du Flambeau are all within 10 minute drive if you prefer to dine out or carry in.  Try one of Wisconsin's famous supper clubs in the area.
                </p>
                <p class="text-left">
                  Guests will enjoy a private pier to dock your personal watercraft
                </p>
              </div>
              <hr>
              <br>
              <v-col><p class="text-h3 text-left orange-grad white--text">&nbsp;Amenities</p></v-col>
              <v-row>
                <v-col>
                  <v-row v-for="(item, i) in amenities" :key="i" justify="center" align="center">
                    <v-col align="center" class="text-right">
                      {{item.str}}
                    </v-col>
                    <v-col>
                      <v-img :src="item.icon" width="60" class="float-left"></v-img>
                    </v-col>
                  </v-row>
                </v-col>
              </v-row>
              <br>
              <hr>
              <br>
              <v-col><p class="text-h3 text-left yellow-grad white--text">&nbsp;Unique Features</p></v-col>
              <v-row>
                <v-col>
                  <p class="text-left indent">
                    Right on the coveted Fence Lake! Awesome western view of the sunset and of the crystal-clear Fence Lake.  Access to all 10 Lakes on the Fence Lake Chain.  Lighted stairway or tram lift to the pier and dock. House-trained Dogs welcomed.
                  </p>
                </v-col>
              </v-row>
            </v-container>
          </v-tab-item>
          <v-tab-item>
            <v-dialog v-model="sharedViewer" fullscreen>
              <div style="width: 100%; height: 100%; backdrop-filter: blur(10px); overflow: hidden;">
                <v-btn absolute icon large @click.stop="sharedViewer = false" style="top: 10px; left: 10px; background-color: #fff; z-index: 3;"><v-icon color="red">mdi-close</v-icon></v-btn>
                <v-row justify="center">
                  <v-col align="center">
                    <v-carousel height="100vh">
                      <v-carousel-item v-for="(item, i) in shared_imgs" :key="i" style="background-color: rgba(0, 0, 0, 0.15)">
                        <v-img eager :src="item.src" contain style="height: 100%"></v-img>
                      </v-carousel-item>
                    </v-carousel>
                  </v-col>
                </v-row>
              </div>
            </v-dialog>
            <v-row class="pa-3 pb-0">
              <v-col align="center"><p class="text-h3 text-left red-grad white--text">&nbsp;Shared Spaces</p></v-col>
            </v-row>
            <hr>
            <v-carousel hide-delimiters>
              <v-btn absolute large icon style="z-index: 2; left: 10px; top: 10px; background-color: white;" @click="sharedLargeViewer"><v-icon color="black">mdi-resize</v-icon></v-btn>
              <v-carousel-item v-for="(item, i) in shared_imgs" :key="i" style="background-color: rgba(0, 0, 0, 0.15)">
                <v-img eager :src="item.src" contain style="height: 100%"></v-img>
              </v-carousel-item>
            </v-carousel>
            <hr>
            <v-container>
              <v-row>
                <v-col><p class="text-h3 text-left orange-grad white--text">&nbsp;Find Us!</p></v-col>
              </v-row>

              <div class="mapouter">
                <div class="gmap_canvas">
                  <iframe height="600" style="width: 100%;" id="gmap_canvas" src="https://maps.google.com/maps?q=2413%20goldfinch%20ln%20lac%20du%20flambeau&t=k&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
                </div>
              </div>
            </v-container>
          </v-tab-item>
        </v-tabs-items>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: "Cottages",
  data: function() {
    return {
      vrbo_logo: require('./../assets/Rates/vrbo_tspt.png'),
      rwc_logo: require('./../assets/Rates/rwc.png'),
      loyolaViewer: false,
      marquetteViewer: false,
      sharedViewer: false,
      cottage_tabs: null,
      amenities: [
        {str: "Dogs Allowed", icon: require('../assets/icons/dog.png')},
        {str: "Linens Provided", icon: require('../assets/icons/bed_linens.png')},
        {str: "Well-Furnished Kitchen", icon: require('../assets/icons/kitchen.png')},
        {str: "Drive-through, Indoor Vehicle and Trailer Parking", icon: require('../assets/icons/garage.png')},
        {str: "Wood-pellet Fireplace", icon: require('../assets/icons/fireplace.png')},
        {str: "Outdoor Fire pit with Firewood", icon: require('../assets/icons/campfire.png')},
        {str: "Pier for swimming or docking watercraft", icon: require('../assets/icons/pier.png')},
        {str: "Outdoor Charcoal Grill with free Charcoal and Lighter", icon: require('../assets/icons/grill.png')},
        {str: "ATV/Snowmobile Trail", icon: require('../assets/icons/trail.png')},
        {str: "Shared Paddle Boat for 3 included", icon: require('../assets/icons/paddle_boat.png')},
        {str: "Two Shared Kayaks included", icon: require('../assets/icons/kayak.png')},
        {str: "Dine out patio with picnic table", icon: require('../assets/icons/table.png')},
        {str: "High-speed Wi-Fi Internet", icon: require('../assets/icons/wifi.png')},
        {str: "Free Streaming TV", icon: require('../assets/icons/stream.png')},
        {str: "Washer and Dryer", icon: require('../assets/icons/washing.png')},
      ],
      marquette_imgs: [
        {src: require('../assets/Marquette/1.jpg')},
        {src: require('../assets/Marquette/2.jpg')},
        {src: require('../assets/Marquette/3.jpg')},
        {src: require('../assets/Marquette/4.jpg')},
        {src: require('../assets/Marquette/5.jpg')},
        {src: require('../assets/Marquette/6.jpg')},
        {src: require('../assets/Marquette/7.jpg')},
        {src: require('../assets/Marquette/8.jpg')},
        {src: require('../assets/Marquette/9.jpg')},
        {src: require('../assets/Marquette/10.jpg')},
        {src: require('../assets/Marquette/11.jpg')},
        {src: require('../assets/Marquette/12.jpg')},
        {src: require('../assets/Marquette/13.jpg')},
        {src: require('../assets/Marquette/14.jpg')},
        {src: require('../assets/Marquette/15.jpg')},
        {src: require('../assets/Marquette/16.jpg')},
        {src: require('../assets/Marquette/17.jpg')},
        {src: require('../assets/Marquette/18.jpg')},
        {src: require('../assets/Marquette/19.jpg')},
        {src: require('../assets/Marquette/20.jpg')},
      ],
      loyola_imgs: [
        {src: require('../assets/Loyola/1.jpg')},
        {src: require('../assets/Loyola/2.jpg')},
        {src: require('../assets/Loyola/3.jpg')},
        {src: require('../assets/Loyola/4.jpg')},
        {src: require('../assets/Loyola/5.jpg')},
        {src: require('../assets/Loyola/6.jpg')},
        {src: require('../assets/Loyola/7.jpg')},
        {src: require('../assets/Loyola/8.jpg')},
        {src: require('../assets/Loyola/9.jpg')},
        {src: require('../assets/Loyola/10.jpg')},
        {src: require('../assets/Loyola/11.jpg')},
        {src: require('../assets/Loyola/12.jpg')},
        {src: require('../assets/Loyola/13.jpg')},
        {src: require('../assets/Loyola/14.jpg')},
        {src: require('../assets/Loyola/15.jpg')},
        {src: require('../assets/Loyola/16.jpg')},
        {src: require('../assets/Loyola/17.jpg')},
        {src: require('../assets/Loyola/18.jpg')},
      ],
      shared_imgs: [
        {src: require('../assets/Shared/1.jpg')},
        {src: require('../assets/Shared/2.jpg')},
        {src: require('../assets/Shared/3.jpg')},
        {src: require('../assets/Shared/4.jpg')},
        {src: require('../assets/Shared/5.jpg')},
        {src: require('../assets/Shared/6.jpg')},
        {src: require('../assets/Shared/7.jpg')},
        {src: require('../assets/Shared/8.jpg')},
        {src: require('../assets/Shared/9.jpg')},
      ]
    }
  },
  methods: {
    loyolaLargeViewer() {
      this.loyolaViewer = true;
    },
    marquetteLargeViewer() {
      this.marquetteViewer = true;
    },
    sharedLargeViewer() {
      this.sharedViewer = true;
    },
    redirect(url) {
      window.open(url, '_blank');
    }
  }
}
</script>

<style scoped lang="scss">
.indent {
  text-indent: 50px;
}

.link_card {
  animation-duration: 1s;
  cursor: pointer;
}

.link_card:hover {
  animation-name: floater;
  animation-fill-mode: forwards;
  animation-timing-function: ease-in-out;
  animation-iteration-count: infinite;
}

@keyframes floater {
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-8px);
  }
  100% {
    transform: translateY(0);
  }
}

</style>