<template>
  <v-snackbar v-model="notification_bar">
    {{notification_msg}}
    <template v-slot:action="{attrs}">
      <v-btn color="red" class="white--text" text v-bind="attrs" @click="notification_bar = false"></v-btn>
    </template>
  </v-snackbar>
</template>

<script>
export default {
  name: "NotificationBar",
  data: () => {
    return {
      notification_bar: false,
      notification_msg: "",
    }
  },
  methods: {
    notification(msg) {
      this.notification_msg = msg;
      this.notification_bar = true;
    }
  }
}
</script>

<style scoped>

</style>