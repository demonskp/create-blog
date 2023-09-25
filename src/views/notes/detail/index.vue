<script setup>
// eslint-disable-next-line prettier/prettier
import { notesMap } from "@/datas/notes";
import { useRoute } from "vue-router";

const route = useRoute();
const id = route.params.id;

const detail = notesMap[id]
console.log(id, detail)
const NotesCom = detail.component

</script>
<template>
  <component :is="NotesCom" />
</template>
