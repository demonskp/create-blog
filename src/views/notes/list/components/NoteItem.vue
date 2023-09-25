<script setup>
import { defineProps } from 'vue'

const props = defineProps({
  item: {
    type: Object,
    default(){
      return {
        id: String,
        title: String,
        description: String,
        createTime: String,
      }
    }
  }
})

const item = props.item;

</script>

<template>
  <div>
    <router-link :to="`/notes/detail/${item.id}`">
      <div>{{ item.title }}</div>
    </router-link>
    <div>{{ item.description }}</div>
    <div>{{ item.createTime }}</div>
  </div>
</template>