<template>
  <el-container :class="$style.container">
    <el-header :class="$style.header">
      <div :class="$style.search">
        <el-autocomplete
          :class="$style.input"
          size="small"
          v-model="searchText"
          :fetch-suggestions="querySearch"
          placeholder="请输入内容">
        </el-autocomplete>
        <el-button
          :class="$style.action"
          type="text"
          icon="el-icon-search">
        </el-button>
      </div>
    </el-header>
    <el-container>
      <el-aside width="200px" :class="$style.aside">Aside</el-aside>
      <el-main :class="$style.main">Main</el-main>
    </el-container>
  </el-container>
</template>

<script>
import axios from 'axios';

export default {
  name: 'home',
  components: {
  },
  data() {
    return {
      searchText: ''
    }
  },
  methods: {
    querySearch(queryString, cb) {
      this.timer && clearTimeout(this.timer);
      this.timer = setTimeout(() => {
        axios.get(`/api/search?repos=${queryString}`).then((res) => {
          console.log(res);
          cb([{ value: 'asdf' }])
        });
      }, 2000);
    }
  }
};
</script>

<style lang="scss" module>
.container {
  height: 100vh;
  overflow: hidden;

  .header {
    display: flex;
    align-items: center;
    color: #fff;
    background-color: #24292e
  }
  .aside {
    background-color: #fff;
  }
  .main {
    background-color: #eee;
  }
}

.header .search {
  .input {
    margin-right: 1em;
  }
  .action {
    i {
      font-size: .15rem;
      color: #fff;
      font-weight: bold;
    }
  }
}
</style>