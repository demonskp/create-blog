<script setup>
import { ElMessageBox } from "element-plus";
import { ref } from "vue";
import { useRouter } from "vue-router";
import { gameApi } from "../../../api";
import LinkItem from "./LinkItem.vue";
const spellArr = ref([]);

const score = ref(0);
const leftArr = ref([]);
const rightArr = ref([]);
const leftSelect = ref("");
const rightSelect = ref("");
const rightCheckMap = ref({});
const router = useRouter();

init();

function mixArr(arr) {
  let left = [];
  let right = [];

  arr.forEach((item) => {
    left.push({ name: item.char, alive: true });
    right.push({ name: item.pinyin, alive: true });
  });

  left.sort(() => 0.5 - Math.random());
  right.sort(() => 0.5 - Math.random());

  return {
    left,
    right,
  };
}

function createCheckMap(arr) {
  const result = {};
  arr.forEach((item) => {
    result[item.char] = item.pinyin;
  });

  return result;
}

async function init() {
  const wordsItem = await gameApi.queryPinyinWords("连连看");
  spellArr.value = wordsItem?.words.slice(0, 16) || [];

  if (!spellArr.value.length) {
    await ElMessageBox.alert("请先配置词库", {
      "confirm-button-text": "去配置",
    });
    router.push({ name: "game-settings" });
    return;
  }

  const { left, right } = mixArr(spellArr.value);
  leftArr.value = left;
  rightArr.value = right;
  rightCheckMap.value = createCheckMap(spellArr.value);
  score.value = 0;
  leftSelect.value = "";
  rightSelect.value = "";
}

function itemClickHandle(item, type) {
  if (type === "left") {
    leftSelect.value = item.name;
  }
  if (type === "right") {
    rightSelect.value = item.name;
  }
  checkRight();
}

function checkRight() {
  const key = leftSelect.value;
  const val = rightSelect.value;

  if (rightCheckMap.value[key] === val) {
    leftArr.value.map((item) => {
      if (item.name === key) {
        item.alive = false;
      }
    });
    rightArr.value.map((item) => {
      if (item.name === val) {
        item.alive = false;
      }
    });
    score.value = score.value + 10;
    if (!leftArr.value.filter((item) => item.alive).length) {
      setTimeout(() => {
        alert("恭喜你取得胜利");
        init();
      });
    }
  }
}
</script>
<template>
  <div class="link-game">
    <div class="game-title">
      <div class="main-title">文字连连看</div>
      <div>得分：{{ score }}</div>
    </div>
    <div class="game-playground">
      <div class="game-pad">
        <LinkItem
          v-for="(item, index) in leftArr"
          :isSelect="leftSelect === item.name"
          :key="item.name + index"
          :item="item"
          @click="itemClickHandle(item, 'left')"
        />
      </div>
      <div class="game-pad">
        <LinkItem
          v-for="(item, index) in rightArr"
          :isSelect="rightSelect === item.name"
          :key="item.name + index"
          :item="item"
          @click="itemClickHandle(item, 'right')"
        />
      </div>
    </div>
  </div>
</template>
<style lang="less" scoped>
.link-game {
  background: #000;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
  height: 100vh;
  overflow: hidden;

  .game-title {
    color: #fff;
    margin: 50px 0;
    text-align: center;
    .main-title {
      font-size: 40px;
      font-weight: bold;
      color: transparent;
      background-image: repeating-linear-gradient(
        135deg,
        transparent 0,
        transparent 1px,
        white 2px,
        white 4px
      );
      -webkit-background-clip: text;
    }
  }

  .game-playground {
    display: flex;
    justify-content: space-between;
    width: 800px;
    .game-pad {
      flex: 1;
      margin: 0 5px;
      background: #fff;
      border-radius: 8px;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-around;
    }
  }
}
</style>
