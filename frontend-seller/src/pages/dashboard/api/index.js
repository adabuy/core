import { useStore } from "vuex";
import { computed } from "vue";

const dashboardAPI = () => {
  const store = useStore();

  const fetchProductData = async (params) =>
    await store.dispatch("dashboard/fetchProductData", params);

  const createProduct = async (params) =>
    await store.dispatch("dashboard/createProduct", params);

  const createSlot = async (params) =>
    await store.dispatch("dashboard/createSlot", params);

  const getProducts = async (params) =>
    await store.dispatch("dashboard/getProducts", params);

  const getSlots = async (params) =>
    await store.dispatch("dashboard/getSlots", params);

  const setupLucid = async (data) =>
    await store.dispatch("dashboard/setupLucid", data);

  const sleep = (timeInMs) =>
    new Promise((resolve) => setTimeout(() => resolve(false), timeInMs));

  return {
    getProductsData: computed(() => store.getters["dashboard/getProductsData"]),
    getSlotsData: computed(() => store.getters["dashboard/getSlotsData"]),
    getLucid: computed(() => store.getters["dashboard/getLucid"]), 
    fetchProductData,
    createProduct,
    getProducts,
    createSlot,
    setupLucid,
    getSlots,
    sleep,
  };
};

export default dashboardAPI;
