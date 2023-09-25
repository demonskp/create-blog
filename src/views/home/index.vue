<script setup>
import CourseItem from "./CourseItem/index.vue";
import courseList from "@/datas/courses";
</script>

<template>
  <main>
    <header>
      <div class="nav-wrap">
        <div class="nav-bar">
          <router-link to="/game" class="nav-bar-item">游戏</router-link>
          <router-link to="/" class="nav-bar-item">教程</router-link>
          <router-link to="/notes" class="nav-bar-item">笔记</router-link>
          <router-link to="/" class="nav-bar-item">猫猫</router-link>
          <router-link to="/" class="nav-bar-item">关于</router-link>
        </div>
      </div>
      <div class="introduction">
        <div>aaaa</div>
      </div>
    </header>
    <div class="content">
      <div class="content-title">
        <div class="content-title-main">主题文章</div>
        <div class="content-title-sub">一些系列文章</div>
      </div>
      <div class="course-list">
        <CourseItem v-for="item in courseList" :key="item.title" :item="item" />
      </div>
    </div>
    <div class="my-site-ref"></div>
  </main>
</template>
<style lang="less" scoped>
header {
  width: 100%;
  height: 70vh;
  background: linear-gradient(
      140deg,
      rgba(177, 0, 255, 0.6),
      rgba(69, 23, 113, 0.8),
      rgba(71, 14, 126, 0.8),
      rgba(177, 0, 255, 0.6)
    ),
    url(https://images.unsplash.com/photo-1464802686167-b939a6910659) center
      center no-repeat;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;

  .nav-wrap {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .nav-bar {
    margin-top: 10vh;
    display: inline-flex;
    align-items: center;
    background: rgba(255, 255, 255, 0.1);
    border-radius: 4px;

    .nav-bar-item {
      width: 120px;
      padding: 15px 0;
      display: flex;
      justify-content: center;
      align-items: center;
      color: white;
      font-size: 1.2rem;
      line-height: 1.8rem;

      &:hover {
        background-color: rgba(255, 255, 255, 0.1);
      }
    }
  }

  .introduction {
    width: 1000px;
    height: 40vh;
    position: absolute;
    left: 0;
    right: 0;
    margin: 0 auto;
    bottom: -20vh;

    background-color: #fff;
    border-radius: 4px;

    padding: 15px;

    box-shadow: 0 4px 8px rgb(0 0 0 / 10%);
  }
}

.content {
  margin-top: 20vh;
  padding: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  position: relative;

  .content-title {
    color: #545e6f;
    .content-title-main {
      font-size: 26px;
    }
    .content-title-sub {
      font-size: 16px;
      margin-top: 5px;
    }
  }

  .course-list {
    width: 1080px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin-top: 40px;
  }

  &::before {
    content: "";
    z-index: 2;
    bottom: -80px;
    position: absolute;
    right: 0;
    border-top: 80px solid #fff;
    border-bottom: 0px;
    border-left: 50vw solid transparent;
    border-right: 50vw solid transparent;
  }
}

.my-site-ref {
  background: linear-gradient(140deg, #740ba3, #3d1662, #3d1662, #740ba3);
  min-height: 40vh;
  padding: 80px;
}
</style>
