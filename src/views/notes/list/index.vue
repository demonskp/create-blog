<script setup>
import {notes} from "@/datas/notes";
import NoteItem from './components/NoteItem.vue'
</script>
<template>
  <div>
    <NoteItem v-for="item in notes" :key="item.id" :item="item" />
  </div>
</template>
