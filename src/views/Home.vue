<template>
  <div>
    <el-button type="info" @click="logout">退出</el-button>
  </div>
</template>

<script>
export default {
  name: 'Home',
}
</script>

<script setup>
import { useRouter } from 'vue-router'
const router = useRouter()
function logout() {
  sessionStorage.removeItem('session')
  router.push('/login')
}
</script>

<style></style>
