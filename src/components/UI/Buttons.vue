<template>
  <div class="button__wrapper m-10">
    <button
      class="button__btn"
      :disabled="getSelectorNumber === 1 || getSelectorNumber === 0"
      v-if="!isEnding"
      @click="prevNumber"
    >
      Назад
    </button>
    <button
      class="button__btn"
      v-if="getSelectorNumber < 10 && !isEnding"
      @click="nextNumber"
    >
      Вперёд
    </button>
    <button
      class="button__btn"
      v-if="getSelectorNumber === 10 && !isEnding"
      @click="onEnding"
    >
      Закончить
    </button>
    <button class="button__btn" v-if="isEnding" @click="onRefresh">
      Начать заново?
    </button>
  </div>
</template>
<script>
import { ref, computed } from "vue";
export default {
  props: {
    selectorNumber: {
      type: Number,
      default: 0,
    },
  },
  emits: ["onChangeClick", "onRefreshing"],
  setup(props, { emit }) {
    const isEnding = ref(false);
    const onEnding = () => {
      isEnding.value = true;
    };
    const getSelectorNumber = computed(() => {
      return props.selectorNumber;
    });
    const prevNumber = () => {
      emit("onChangeClick", props.selectorNumber - 1);
    };
    const nextNumber = () => {
      emit("onChangeClick", props.selectorNumber + 1);
    };
    const onRefresh = () => {
      emit("onRefreshing");
      isEnding.value = false;
    };
    return {
      getSelectorNumber,
      isEnding,
      onEnding,
      prevNumber,
      nextNumber,
      onRefresh,
    };
  },
};
</script>
<style></style>
