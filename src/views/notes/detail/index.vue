<script setup>
import { toRefs } from "vue";
import { useRoute } from "vue-router";
import AvaterInfo from './components/AvaterInfo.vue'

const route = useRoute();

const { title, createTime, tags } = toRefs(route.meta || {})

console.log(route.meta)

</script>
<template>
  <div class="markdown-wrap">
    <div class="title">{{ title }}</div>
    <AvaterInfo :time="createTime" />
    <router-view />
    <div v-if="tags && tags.length" class="tag_wrap">
      <span>标签：</span>
      <router-link v-for="tag in tags" :key="tag" class="tag" :to="`/notes?tag=${tag}`">{{ tag }}</router-link>
    </div>
  </div>
</template>
<style>
@import url('@/assets/css/markdown.css');
</style>
<style lang="less" scoped>
.markdown-wrap {
  padding: 0 24px;

  .title {
    font-size: 30px;
    font-weight: 700;
    word-break: break-word;
    margin-top: 20px;
  }

  .tag_wrap {
    margin-bottom: 24px;

    .tag {
      background-color: #f7f8fa;
      color: #515767;
      padding: 4px 6px;
      font-size: 14px;
      border-radius: 4px;
      margin-right: 4px;

      cursor: pointer;
    }
  }
}
</style>
