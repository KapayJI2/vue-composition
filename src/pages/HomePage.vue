<template>
  <div class="main-container__wrapper">
    <div v-if="!isLoading">
      <Main :usersData="getData" />
      <Selector
        :width="50"
        :height="50"
        :fontSize="18"
        @onSelect="handleSelectClick"
        :usersList="getAllUsers"
        :selectorNumber="selectorNumber"
      />
      <Buttons
        :selectorNumber="selectorNumber"
        @onRefreshing="handleRefreshAll"
        @onChangeClick="handleSelectClick"
      />
    </div>
    <div v-else>
      <Spinner />
    </div>
  </div>
</template>
<script>
import Main from "@/components/UI/Main";
import Selector from "@/components/UI/Selector";
import Spinner from "@/components/UI/Spinner";
import Buttons from "@/components/UI/Buttons";
import { ref, onMounted, computed } from "vue";
import { useStore } from "vuex";
export default {
  components: {
    Main,
    Spinner,
    Selector,
    Buttons,
  },
  setup() {
    const store = useStore();
    const data = ref({});
    const isLoading = ref(true);
    const selectorNumber = ref(0);
    // const selectingUsers = ref(new Set());
    onMounted(async () => {
      await fetch("https://jsonplaceholder.typicode.com/users")
        .then((response) => response.json())
        .then((json) => store.dispatch("setUsers", json));
      data.value = store.getters.getUserData(1);
      isLoading.value = false;
    });
    const getData = computed(() => {
      return data.value;
    });
    const getAllUsers = computed(() => {
      return store.getters.getAllUsers;
    });
    const handleSelectClick = (number) => {
      // selectingUsers.value.add(Number(`${number}`));
      data.value = store.getters.getUserData(Number(number));
      selectorNumber.value = Number(`${number}`);
    };
    const handleRefreshAll = () => {
      // data.value = store.getters.getUserData(1);
      // selectingUsers.value.clear();
      // selectorNumber.value = 0;
      location.reload();
    };
    return {
      getData,
      data,
      isLoading,
      handleSelectClick,
      getAllUsers,
      // selectingUsers,
      selectorNumber,
      handleRefreshAll,
    };
  },
};
</script>
