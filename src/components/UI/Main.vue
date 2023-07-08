<template>
  <div>
    <div class="m-10 t-col-black">JSON Placeholder</div>
    <div class="main-container__body">
      <div class="main-container__body-content">
        <div>
          ID:
          <span class="main-container__body-content-info">{{
            userDataSelect.id
          }}</span>
        </div>
        <div>
          Name:
          <span class="main-container__body-content-info">{{
            userDataSelect.name
          }}</span>
        </div>
        <div>
          Email:
          <span class="main-container__body-content-info">{{
            userDataSelect.email
          }}</span>
        </div>
        <div>
          Phone:
          <span class="main-container__body-content-info">{{
            userDataSelect.phone
          }}</span>
        </div>
        <div>
          Website:
          <span class="main-container__body-content-info">{{
            userDataSelect.website
          }}</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { computed } from "vue";
export default {
  props: {
    usersData: {
      type: Object,
      require: true,
    },
  },
  components: {},
  setup(props) {
    const userDataSelect = computed(() => {
      return props.usersData;
    });
    return {
      userDataSelect,
    };
  },
};
</script>
<style></style>
