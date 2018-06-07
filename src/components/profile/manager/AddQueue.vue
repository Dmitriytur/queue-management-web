<template>
  <div>
    <b-btn variant="success" v-b-modal.addQueueModal>Add queue
      <i class="fas fa-plus"></i>
    </b-btn>
    <b-modal id="addQueueModal" title="Add queue" @ok="handleOk()">
      <b-form-group>
        <label>Name:</label>
        <b-form-input type="text" placeholder="Queue name"></b-form-input>
      </b-form-group>
      <b-form-group>
        <label>Date:</label>
        <input type="text" name="dates" class="form-control pull-right">
      </b-form-group>
      <b-form-group>
        <label>From:</label>
        <input type="text" class="form-control datetimepicker-input" data-target="#datetimepicker3" />
        <div class="input-group-append" data-target="#timeFrom" data-toggle="datetimepicker">
          <div class="input-group-text">
            <i class="fa fa-clock-o"></i>
          </div>
        </div>
      </b-form-group>
      <b-form-group>
        <label>To:</label>
        <input type="text" class="form-control datetimepicker-input" data-target="#datetimepicker3" />
        <div class="input-group-append" data-target="#timeTo" data-toggle="datetimepicker">
          <div class="input-group-text">
            <i class="fa fa-clock-o"></i>
          </div>
        </div>
      </b-form-group>
      <b-form-group>
        <label>Description:</label>
        <b-form-textarea :rows="3"></b-form-textarea>
      </b-form-group>
    </b-modal>
  </div>
</template>

<script>
  import VueTimepicker from 'vue2-timepicker'

  export default {
    components: {
      VueTimepicker
    },
    mounted() {
      $('input[name="dates"]').daterangepicker(
        {
          singleDatePicker: true,
          startDate: "06/01/2018",
          endDate: "06/07/2018"
        },
        function (start, end, label) {
          console.log(
            "New date range selected: " +
            start.format("YYYY-MM-DD") +
            " to " +
            end.format("YYYY-MM-DD") +
            " (predefined range: " +
            label +
            ")"
          );
        }
      );
      $('#datetimepicker3').datetimepicker({
        format: 'LT'
      });
    }
  };
</script>