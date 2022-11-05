<script setup>
import CourseItem from "./CourseItem/index.vue";
import vueIcon from "../../assets/images/vue.svg";

const courseList = [
  {
    url: "https://www.jianshu.com/c/ca239b650143",
    title: "ECMAScript",
    subTitle: "规范解读",
    backImg:
      "https://ultimatecourses.com/assets/course/react/basics-46f680402a83e5d266bf96416961873b37a425ef9585831638f783ab26c6b48e.jpg",
    poster:
      "https://ultimatecourses.com/assets/category/javascript-58bb09245e2abeaf56f7db48e86fa4454c2f316a4c6c71aadaa2bdf3b206ab95.svg",
    updateTime: "2022.10.29",
    count: 4,
    creater: {
      name: "demonskp",
      avatar: "https://avatars.githubusercontent.com/u/25999019?v=4",
      link: "https://github.com/demonskp",
    },
  },
  {
    url: "",
    title: "React",
    subTitle: "源码解读",
    backImg:
      "https://ultimatecourses.com/assets/course/react/basics-46f680402a83e5d266bf96416961873b37a425ef9585831638f783ab26c6b48e.jpg",
    poster:
      "https://ultimatecourses.com/assets/category/react-d70ee2dc77a69c09d8eec8578ebba8c0b1eb5c1288c330c384d3674bc7e38409.svg",
    updateTime: "2022.10.29",
    count: 0,
    creater: {
      name: "demonskp",
      avatar: "https://avatars.githubusercontent.com/u/25999019?v=4",
      link: "https://github.com/demonskp",
    },
  },
  {
    url: "",
    title: "Vue3",
    subTitle: "源码解读",
    backImg:
      "https://ultimatecourses.com/assets/course/react/basics-46f680402a83e5d266bf96416961873b37a425ef9585831638f783ab26c6b48e.jpg",
    poster: vueIcon,
    updateTime: "2022.10.29",
    count: 0,
    creater: {
      name: "demonskp",
      avatar: "https://avatars.githubusercontent.com/u/25999019?v=4",
      link: "https://github.com/demonskp",
    },
  },
];
</script>

<template>
  <main>
    <header>
      <div class="nav-wrap">
        <div class="nav-bar">
          <router-link to="/game" class="nav-bar-item">游戏</router-link>
          <router-link to="/" class="nav-bar-item">教程</router-link>
          <router-link to="/" class="nav-bar-item">笔记</router-link>
          <router-link to="/" class="nav-bar-item">猫猫</router-link>
          <router-link to="/" class="nav-bar-item">简历</router-link>
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
