<template>
  <main class="home min-h-screen" aria-labelledby="main-title">
    <div class="header m-auto text-center py-12">
      <img class="m-auto" :src="$withBase('/big_logo.png')" alt="big_logo" />
      <h1>Delft <strong class="font-bold">Open</strong> Hardware</h1>
    </div>
    <!-- <Content class="theme-default-content custom"/> -->
    <!-- <p>{{items}}</p> -->
    <div class="grid md:grid-flow-col grid-flow-row md:grid-cols-2 grid-rows-2 gap-3 py-4">
      <div v-for="i in items" class="">
        <!-- <div class="text-center"v-if="i.level == 1">
        <h1>{{i.title}}</h1>
        <h3>{{i.description}}</h3>
      </div>-->
        <div
          style="cursor: pointer; background-color: white"
          class="p-4 border-primary rounded-lg w-full shadow-lg bg-white p-6 rounded-lg duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-100"
          v-if="i.level == 2 && i.title"
        >
          <router-link :to="i.relativePath">
            <h2 class="border-0">{{ i.title }}</h2>
          </router-link>
          <p>{{ i.description }}</p>
        </div>
        <div v-else></div>
      </div>
    </div>
  </main>
</template>

<script>
import jsonContents from "../../contents.data.json";

export default {
  // components: { NavLink },
  data() {
    return {
      items: jsonContents.contents,
    };
  },
  computed: {
    // data () {
    //   return  jsonContents.content;
    // },

    actionLink() {
      return {
        link: this.data.actionLink,
        text: this.data.actionText,
      };
    },
  },
};
</script>


