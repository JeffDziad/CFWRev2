<template>
  <v-container>
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
            </v-tab-item>
            <v-tab-item>
              <!-- Marquette -->
              <iframe src="https://calendar.google.com/calendar/embed?height=600&wkst=1&bgcolor=%23ffffff&ctz=America%2FChicago&showTitle=0&src=NXQ4bGx2YmNuOW1rOGd2Njcwam0xaHM1cjRsYXRjc2JAaW1wb3J0LmNhbGVuZGFyLmdvb2dsZS5jb20&color=%23795548" style="width: 100%;" height="700" frameborder="0" scrolling="no" class="pt-1"></iframe>
            </v-tab-item>
          </v-tabs>
        </v-card>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" md="6" sm="12" align="right">
        <v-card min-height="300" ></v-card>
      </v-col>
      <v-col cols="12" md="6" sm="12">
        <v-card min-height="300"></v-card>
      </v-col>
    </v-row>

  </v-container>

</template>

<script>
export default {
  name: "Rates"
}
</script>

<style scoped>
.tab_btn {
  border-bottom: solid black 2px;
}
.tab_active {
  background-color: rgba(146,0,0, 0.1);
  border-bottom: none;
}
</style>