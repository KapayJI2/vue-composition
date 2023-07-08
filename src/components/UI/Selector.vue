<template>
  <div class="selector-wrapper mx-10">
    <div class="selectors-lists" v-for="user in usersList" :key="user.id">
      <input
        type="button"
        :value="user.id"
        @click="onSelect"
        :class="{
          isSelected: user.id <= selectorNumber,
          isFocused: user.id === selectorNumber,
        }"
        class="selector my-10"
        :style="{
          width: `${width}px`,
          height: `${height}px`,
          fontSize: `${fontSize}px`,
        }"
      />
      <div class="selector-label">
        <label
          :style="{
            fontSize: `12px`,
          }"
          :for="user.id"
          >{{ user.username }}</label
        >
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    width: {
      type: Number,
      default: 40,
    },
    height: {
      type: Number,
      default: 40,
    },
    fontSize: {
      type: Number,
      default: 14,
    },
    usersList: {
      type: Array,
      required: true,
      default: [],
    },
    // selectingUsers: {
    //   type: Set,
    //   required: true,
    // },
    selectorNumber: {
      type: Number,
      default: 0,
    },
  },
  emits: ["onSelect"],
  setup(_, { emit }) {
    const onSelect = (e) => {
      emit("onSelect", e.target.value);
    };

    return {
      onSelect,
    };
  },
};
</script>
<style>
.isSelected {
  color: #000;
  background-color: rgb(221, 189, 47) !important;
  border: 1px solid rgb(221, 189, 47) !important;
}
.isFocused {
  color: #fff;
  background: rgb(15, 194, 164) !important;
  border: 1px solid rgb(15, 194, 164) !important;
  box-shadow: 0 0 15px rgba(15, 194, 164, 1) !important;
}
</style>
