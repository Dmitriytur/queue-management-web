<template>
  <b-container>
    <b-row align-h="start">
      <b-col v-for="slot in slots" v-bind:key="slot.id">
        <button type="button" class="btn btn-info slotBtn"  data-toggle="popover" :title="slot.client.login" data-trigger="focus" id="copyButton"  data-placement="top" :data-content="slot.clientDetails"  v-if="slot.client">{{slot.startTime}}</button>
        <button type="button" class="btn btn-secondary slotBtn" disabled  v-if="!slot.client && slot != selectedSlot" @click="select(slot)">{{slot.startTime}}</button>
      </b-col>
    </b-row>
  </b-container>
</template>


<script>
import $ from "jquery";

export default {
  props: ["slots"],
  data() {
    return {
      selectedSlot: {}
    };
  },
  methods: {
    select(slot) {
      this.selectedSlot = slot;
      this.$emit("slotSelected", slot);
    },
    unSelect(slot) {
      this.selectedSlot = {};
    }
  },
  mounted() {
    $(function() {
      $('[data-toggle="popover"]').popover();
    });
  }
};
</script>

<style>
.slotBtn {
  margin: 5px 0 5px 0;
}
</style>