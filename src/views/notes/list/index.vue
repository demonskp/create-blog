<script setup>
import {notes} from "@/datas/notes";
import { computed, toRefs } from "vue";
import { useRoute } from "vue-router";
import NoteItem from './components/NoteItem.vue'

const route = useRoute();

const list = computed(()=>{
  const { tag={} } = toRefs(route.query || {});
  let result = notes;
  if(tag.value !==undefined && tag.value !== null) {
    result = result.filter((item)=>item.tags?.find(tagStr=>tagStr === tag.value));
  }

  return result
})

</script>
<template>
  <div>
    <NoteItem v-for="item in list" :key="item.id" :item="item" />
  </div>
</template>
