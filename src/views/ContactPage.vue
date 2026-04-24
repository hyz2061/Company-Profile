<template>
  <div class="contact-container">
    <div class="brand-section">
      <div class="logo">
        <img src="/public/favicon.svg">
        <div class="logo-text">
          <h1>{{ companyName }}</h1>
          <p>{{ companyEnglishName }}</p >
        </div>
      </div>
    </div>

    <div class="info-section">
      <div class="contact-item">电话：{{ phone }}</div>
      <div class="contact-item">邮箱：{{ email }}</div>
      <div class="contact-item">地址：{{ address }}</div>
      <div class="divider-line"></div>
    </div>
  </div>

  <div class="footer-message">
    <h3>留言反馈</h3>
    <textarea 
      v-model="msgContent" 
      placeholder="请输入您的留言内容..." 
      class="msg-input"
    ></textarea>
    <button class="submit-btn" @click="sendMsg">提交留言</button>

    <div class="msg-list">
      <div class="msg-item" v-for="(item, index) in msgList" :key="index">
        {{ item }}
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const companyName = "公司";
const companyEnglishName = "COMPANY";
const phone = "xxxxxxxxxxx";
const email = "xxxxxxxxxxxx";
const address = "xxxxxxxxxxxxxxx";

const msgContent = ref('')
const msgList = ref([])

const sendMsg = () => {
  const text = msgContent.value.trim()
  if (!text) {
    alert('请输入留言内容')
    return
  }
  msgList.value.push(text)
  msgContent.value = ''
}
</script>

<style scoped>
.contact-container {
  display: flex;
  width: 100%;
  height: 100vh; 
}

.brand-section {
  width: 38%;
  background: linear-gradient(120deg, #a8edea, #fed6e3, #9face6);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
}

.logo {
  display: flex;
  align-items: center;
  gap: 16px;
}

.logo-icon {
  width: 120px;
  height: 120px;
  object-fit: contain;
}

.logo-text h1 {
  font-size: 64px;
  font-weight: normal;
  margin: 0;
}

.logo-text p {
  font-size: 24px;
  text-align: center;
  letter-spacing: 2px;
  margin: 0;
}

.info-section {
  flex: 1;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 120px;
}

.contact-item {
  font-size: 36px;
  margin: 24px 0;
  color: #222;
}

.divider-line {
  width: 100%;
  height: 1px;
  background-color: #b8f0d8;
  margin-top: 40px;
}

.footer-message {
  width: 100vw;
  margin-left: calc(-50vw + 50%);
  background: #f8f9fa;
  padding: 30px 50px;
  box-sizing: border-box;
  border-top: 2px solid #3fa679;
}

.footer-message h3 {
  font-size: 28px;
  color: #333;
  margin: 0 0 15px 0;
}

.msg-input {
  width: 100%;
  height: 120px;
  padding: 15px;
  font-size: 18px;
  border: 1px solid #ccc;
  border-radius: 6px;
  resize: none;
  box-sizing: border-box;
}

.submit-btn {
  margin-top: 15px;
  padding: 10px 30px;
  font-size: 18px;
  background: #334ec8;
  color: #fff;
  border: none;
  border-radius: 6px;
  cursor: pointer;
}

.msg-list {
  margin-top: 25px;
}
.msg-item {
  padding: 12px 16px;
  background: #fff;
  border-radius: 4px;
  margin-bottom: 10px;
  font-size: 16px;
  color: #444;
  border-left: 4px solid #9face6;
}

@media (max-width: 768px) {
   .contact-container {
     flex-direction: column;
   }
   .brand-section {
     width: 100%;
     padding: 60px 20px;
   }
   .logo-text h1 {
     font-size: 36px;
   }
   .logo-text p {
     font-size: 18px;
   }
   .info-section {
     width: 100%;
     padding: 40px 20px;
   }
   .contact-item {
     font-size: 20px;
     margin: 16px 0;
   }
   .footer-message {
     padding: 20px 15px;
   }
   .footer-message h3 {
     font-size: 22px;
   }
 }
</style>