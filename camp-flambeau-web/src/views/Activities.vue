<template>
  <v-row>
    <v-col align="center">
      <v-card max-width="800" elevation="10">
        <v-container>
          <v-col><p class="text-h3 text-left red-grad white--text">&nbsp;Activities</p></v-col>
          <p class="text-left indent px-5">
            This quiet cabin in Northern Wisconsin is ideally located at the edge of a crystal-clear, all-sports recreation lake. Enjoy time with family and friends with fishing, swimming, boating and paddling on Fence Lake! From our private pier, you can explore the lake and its connecting bodies of water on a scenic 10-lake chain through the pristine Northwoods. The surrounding area is peppered with ATV and snowmobile trails, hiking and biking trails, and other outdoor activities. If you up for a little excitement, Camp Flambeau is only 4 miles from Lake of the Torches Casino!
          </p>
          <div>
            <v-img eager :src="chain_img" width="400"></v-img>
            <span class="font-italic">Map of the Fence lake chain.</span>
          </div>
          <br>
          <p class="text-left indent px-5">
            Nearby, you can play tennis or shoot hoops on some well-kept outdoor sport courts. This Northwoods cottage is also close to excellent local shopping and dining in Minocqua, Woodruff and Lac du Flambeau — all within just 15 minutes’ drive. We especially recommend trying out one of Wisconsin’s famous and historic supper clubs. Other popular attractions in the region include the Lake of Torches Casino, Fred Sheer’s Lumberjack Show, the Island City Antique Market, the Wildwood Wildlife Park and Nature Center, and the Waswagoning Indian Village
          </p>
          <v-col><p class="text-h3 text-left orange-grad white--text">&nbsp;Local Attractions</p></v-col>
          <v-row v-for="(img, index) in activiy_imgs" :key="index" class="pa-5">
            <v-col v-if="index % 2 === 0" class="d-flex align-center justify-center">
              <div style="position: relative;">
                <p class="text-h5 font-weight-bold">{{img.title}}</p>
                <a :href="img.address_url" target="_blank" class=""><p>{{img.address}}</p></a>
              </div>
            </v-col>
            <v-col>
              <v-img width="400" :src="img.src" class="rounded"></v-img>
            </v-col>
            <v-col v-if="index % 2 !== 0" class="d-flex align-center justify-center">
              <div style="position: relative;">
                <p class="text-h5 font-weight-bold">{{img.title}}</p>
                <a :href="img.address_url" target="_blank" class=""><p>{{img.address}}</p></a>
              </div>
            </v-col>
          </v-row>
          <v-col><p class="text-h3 text-left yellow-grad white--text">&nbsp;Helpful Links</p></v-col>
          <v-row>
            <v-col>
              <v-list-item v-for="(link, i) in web_links" :key="i" :href="link.url" target="_blank">
                <v-list-item-title><span class="font-weight-bold text-decoration-underline">{{link.str}}</span></v-list-item-title>
              </v-list-item>
            </v-col>
          </v-row>
        </v-container>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: "Activities",
  data: function() {
    return {
      web_links: [
        {str: "Attractions near Minocqua", url: "https://www.tripadvisor.com/Attractions-g60100-Activities-Minocqua_Wisconsin.html"},
        {str: "Fence Lake Chain", url: "https://dnr.wi.gov/lakes/lakepages/LakeDetail.aspx?wbic=2323000"},
        {str: "Attractions near Lac Du Flambeau", url: "https://www.tripadvisor.com/Attractions-g60019-Activities-Lac_du_Flambeau_Wisconsin.html"},
        {str: "Winter Activities near Minocqua", url: "https://www.minocqua.org/things-to-do/outdoor-activities/trail-reports/"},
        {str: "Snowmobile Trails at your doorstep", url: "https://www.hornshoe.org/"},
      ],
      activiy_imgs: [
        {src: require('../assets/Activities/casino.jpg'), title: 'Lake of the Torches Casino', address: '510 Old Abe Rd, Lac Du Flambeau, WI 54538', address_url: 'https://goo.gl/maps/uUNnp3nSsjyCM1CN7'},
        {src: require('../assets/Activities/indian_village.jpg'), title: 'Waswagoning Indian Village', address: '2750 County Road H, Lac Du Flambeau, WI 54538', address_url: 'https://goo.gl/maps/eFZDxhDb3aNTrLTN6'},
        {src: require('../assets/Activities/lumberjack.jpeg'), title: "Fred Sheer's Lumberjack Show", address: '15640 W County Road B, Hayward, WI 54843', address_url: 'https://goo.gl/maps/739eoYw4LjpfYtGRA'},
        {src: require('../assets/Activities/shopping.jpg'), title: 'Minocqua Shopping', address: 'Minocqua, WI', address_url: 'https://goo.gl/maps/J6u1wGzfQDCM5zzK9'},
        {src: require('../assets/Activities/supper_club.webp'), title: 'Little Bohemia Supper Club', address: '142 US-51, Manitowish Waters, WI 54545', address_url: 'https://g.page/little-bohemia-lodge?share'},
        {src: require('../assets/Activities/zoo.jpg'), title: 'Wildwood Wildlife Park and Nature Center', address: '10094 State Highway 70, Minocqua, WI 54548', address_url: 'https://g.page/wildwood-wildlife-park?share'},
      ],
      chain_img: require('../assets/Activities/chain.jpg')
    }
  }
}
</script>

<style scoped>
.indent {
  text-indent: 50px;
}
</style>