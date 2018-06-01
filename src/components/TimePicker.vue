<template>
  <input type="text" name="dates" class="form-control pull-right">
</template>


<script>

export default {
  mounted() {
    $('input[name="dates"]').daterangepicker();
  }
}

</script>

