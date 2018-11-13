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
// import fetch from '@/api/fetch';
import axios from 'axios';

export default {
  name: 'login',
  data() {
    return {
      form: {
        id: '',
        secret: ''
      }
    }
  },
  methods: {
    login() {
      axios('get', `/api/users/whatever?client_id=${this.form.id}&client_secret=${this.form.secret}`).then((res) => {
        console.log(res);
      })
    }
  }
};
</script>

<style lang="scss" module>

</style>

