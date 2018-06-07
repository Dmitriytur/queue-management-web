<template>
  <b-container>
    <b-row align-h="start">
      <b-col v-for="slot in slots" v-bind:key="slot.id">
        <button type="button" class="btn btn-secondary slotBtn" disabled v-if="slot.client">{{slot.startTime}}</button>
        <button type="button" class="btn btn-success slotBtn"  v-if="!slot.client && slot != selectedSlot" @click="select(slot)">{{slot.startTime}}</button>
        <button type="button" class="btn btn-warning slotBtn" v-if="!slot.client && slot == selectedSlot" @click="unSelect(slot)">{{slot.startTime}}</button>
      </b-col>
    </b-row>
  </b-container>
</template>


<script>
  export default {
    props: ["slots"],
    data() {
      return {
        selectedSlot: {}
      }
    },
    methods: {
      select(slot) {
        this.selectedSlot = slot;
        this.$emit("slotSelected", slot);
      },
      unSelect(slot) {
        this.selectedSlot = {}
      }
    }
  };
</script>

<style>
  .slotBtn {
    margin: 5px 0 5px 0;
  }
</style>