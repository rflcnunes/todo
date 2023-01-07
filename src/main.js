import Vue from "vue";
import App from "./App.vue";
import router from "./router";

// Atoms
import TheButton from "@/components/atoms/TheButton.vue";
import TheInput from "@/components/atoms/TheInput.vue";
import TheTypography from "@/components/atoms/TheTypography.vue";

Vue.component("TheButton", TheButton);
Vue.component("TheInput", TheInput);
Vue.component("TheTypography", TheTypography);

// Molecules
import TheItem from "@/components/molecules/TheItem.vue";
import TheForm from "@/components/molecules/TheForm.vue";

Vue.component("TheItem", TheItem);
Vue.component("TheForm", TheForm);

// Organisms
import TheList from "@/components/organisms/TheList.vue";
import TheListFinished from "@/components/organisms/TheListFinished.vue";

Vue.component("TheList", TheList);
Vue.component("TheListFinished", TheListFinished);

Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
