import { useStore } from "vuex";
import { computed } from "vue";

const dashboardAPI = () => {
  const store = useStore();

  const fetchProductData = async (params) =>
    await store.dispatch("dashboard/fetchProductData", params);

  const createProduct = async (params) =>
    await store.dispatch("dashboard/createProduct", params);

  const deployTx = async (params) =>
    await store.dispatch("dashboard/deployTx", params);

  const createImages = async (params) =>
    await store.dispatch("dashboard/createImages", params);

  const createOrder = async (params) =>
    await store.dispatch("dashboard/createOrder", params);

  const deploy = async (params) =>
    await store.dispatch("dashboard/deploy", params);

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
    deploy,
    getProducts,
    createOrder,
    setupLucid,
    createImages,
    getSlots,
    deployTx,
    sleep,
  };
};

export default dashboardAPI;
