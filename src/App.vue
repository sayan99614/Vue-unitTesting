<template>
  <HeaderComponent />
  <router-view></router-view>
</template>

<script>
import HeaderComponent from "../src/testingproject/components/HeaderComponent";
export default {
  components: {
    HeaderComponent,
  },
};
</script>

<style scoped></style>

<!-- <template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <HelloWorld msg="Welcome to Your Vue.js App" />
  <ApiCall />
  <TransitionsComp />
  <PopOverChecking />
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import ApiCall from "./components/ApiCall.vue";
import TransitionsComp from "./components/TransitionsComp.vue";
import PopOverChecking from "./components/PopOverChecking.vue";
export default {
  name: "App",
  components: {
    HelloWorld,
    ApiCall,
    TransitionsComp,
    PopOverChecking,
  },
  data: () => ({
    popoverOpen: false,
  }),
  methods: {
    togglePopover(event) {
      event.stopPropagation();
      this.popoverOpen = !this.popoverOpen;
    },
    closePopover() {
      this.popoverOpen = false;
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

body {
  background-color: #e2e2e2;
}
</style> -->
