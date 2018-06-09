<template>
  <div>
    <b-btn variant="info" @click="showModal('notification' + queueId)">Notify
      <i class="fas fa-envelope"></i>
    </b-btn>
    <b-modal :ref="'notification' + queueId" size="lg" title="Send notificaion" @ok="hadleOk">
       <b-form-group>
        <label>Message:</label>
        <b-form-textarea  v-model="message"  :rows="3"></b-form-textarea>
      </b-form-group>
    </b-modal>
  </div>
</template>


<script>
import { sendNotification } from "@/utils/api";
import VueNotifications from "vue-notifications";

export default {
  props: ["queueId"],
  data() {
    return {
      message: ""
    };
  },
  methods: {
    showModal(ref) {
      this.$refs[ref].show();
    },
    hadleOk() {
      sendNotification(this.queueId, this.message)
        .then(response => {
          this.showSuccessMsg();
        })
        .catch(err => {
          this.showErrorMsg();
        });
    }
  },
  notifications: {
    showSuccessMsg: {
      type: VueNotifications.types.success,
      title: "Success",
      message: "Notifications were successfully sent!"
    },
    showErrorMsg: {
      type: VueNotifications.types.error,
      title: "Error",
      message: "An error appeared while sending notifications"
    }
  }
};
</script>
