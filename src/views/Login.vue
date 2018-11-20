<template>
  <div>
    <el-form :model="form" label-width="100px">
      <el-form-item label="用户名" prop="id">
        <el-input v-model="form.id"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="secret">
        <el-input v-model="form.secret"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="login">login</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import axios from 'axios';
// import fetch from '@/api/fetch';

export default {
  name: 'login',
  data() {
    return {
      form: {
        id: '',
        secret: ''
      }
    };
  },
  methods: {
    login() {
      axios.post('/api/login').then((res) => {
        console.log(res);
        this.$router.push('/')
      });
    }
  }
};
</script>

<style lang="scss" module>

</style>
