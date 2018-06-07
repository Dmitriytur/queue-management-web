<template>
  <div v-if="node">
    <a class="btn btn-primary" style="margin-bottom:10px" data-toggle="collapse"  v-bind:href="'#' + node.id" role="button" aria-expanded="false" v-bind:aria-controls="node.id" @click="handleClick()" >
      <i v-if="!isLeaf()" class="fas fa-chevron-down"></i> {{ node.value }} <i v-if="isLeaf()" class="fas fa-chevron-right"></i>
    </a>
    <div v-if="node.options && node.options.length" class="collapse" v-bind:id="node.id">
      <div class="tree-node">
        <node v-for="child in node.options" v-bind:node="child" v-bind:key="child.id"></node>
      </div>
    </div>
  </div>
</template>

<script>
import EventBus from "@/utils/event-bus";

export default {
  name: "node",
  props: {
    node: Object
  },
  methods: {
    handleClick() {
      if (this.isLeaf()) {
        EventBus.$emit("leafSelected", this.node.id);
      }
    },
    isLeaf() {
      return this.node && !(this.node.options && this.node.options.length > 0);
    }
  }
};
</script>

<style>
.tree-node {
  margin: 10px 0 0 15px;
}
</style>
