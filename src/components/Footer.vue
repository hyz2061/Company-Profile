<!-- 王英泽 -->
<template>
  <footer class="footer">
    <div class="footer-container">
        <!-- 上半部分 -->
      <div class="footer-content">
            <!-- 左侧邮箱 -->
        <div class="footer-left">
          <h3 class="footer-logo">combinilen<br>Hub</h3>
          <p class="footer-email">anvapilot@combinilen.hub</p>
        </div>
            <!-- 功能链接 -->
        <div class="footer-center">
          <div class="footer-links">
            <a href="#" class="footer-link" @click.prevent="handleLinkClick('Gontest')">Contact</a>
            <a href="#" class="footer-link" @click.prevent="handleLinkClick('Contact')">
              <span class="link-icon">📞</span> Contact
            </a>
            <a href="#" class="footer-link" @click.prevent="handleLinkClick('Email')">
              <span class="link-icon">✉️</span> Email
            </a>
          </div>
        </div>
            <!-- 右侧链接 -->
        <div class="footer-right">
          <div class="social-section">
            <h4 class="social-title">go out</h4>
            <div class="social-links">
              <a href="#" class="social-link" @click.prevent="handleSocialClick('Facebook')">
                <span class="social-icon">a</span>
              </a>
              <a href="#" class="social-link" @click.prevent="handleSocialClick('Instagram')">
                <span class="social-icon">b</span>
              </a>
              <a href="#" class="social-link" @click.prevent="handleSocialClick('Twitter')">
                <span class="social-icon">c</span>
              </a>
            </div>
          </div>
        </div>
      </div>
      <!-- 下半部分 -->
      <div class="footer-bottom">
        <!-- 自动获取年份 -->
        <p class="footer-copyright">
          Copyright © {{ new Date().getFullYear() }} anvapilot
        </p>
      </div>
    </div>
  </footer>
</template>

<script setup>
// 父组件监听组件
const emit = defineEmits(['link-click', 'social-click'])
// 点击事件
const handleLinkClick = (link) => {
  emit('link-click', link)
}
// 同上
const handleSocialClick = (platform) => {
  emit('social-click', platform)
}
</script>

<style scoped>
.footer {
  background: #1a1a1a;
  color: white;
  padding: 40px 40px 20px;
  font-family: 'Poppins', sans-serif;
}

.footer-container {
  max-width: 1200px;
  margin: 0 auto;
}

.footer-content {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 30px;
  flex-wrap: wrap;
  gap: 30px;
}

.footer-left {
  flex: 1;
  min-width: 200px;
}

.footer-logo {
  font-size: 24px;
  font-weight: 700;
  color: white;
  margin: 0 0 10px 0;
  line-height: 1.2;
}

.footer-email {
  color: #888;
  font-size: 14px;
  margin: 0;
}

.footer-center {
  flex: 1;
  min-width: 200px;
}

.footer-links {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.footer-link {
  color: white;
  text-decoration: none;
  font-size: 14px;
  transition: color 0.3s ease;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 8px;
}

.footer-link:hover {
  color: #667eea;
}

.link-icon {
  font-size: 16px;
}

.footer-right {
  flex: 1;
  min-width: 200px;
  display: flex;
  justify-content: flex-end;
}

.social-section {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.social-title {
  color: white;
  font-size: 14px;
  font-weight: 600;
  margin: 0;
  text-transform: none;
}

.social-links {
  display: flex;
  gap: 15px;
  align-items: center;
}

.social-link {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background: #333;
  color: white;
  text-decoration: none;
  font-size: 14px;
  font-weight: 600;
  transition: all 0.3s ease;
  cursor: pointer;
}

.social-link:hover {
  background: #667eea;
  transform: translateY(-2px);
}

.footer-bottom {
  border-top: 1px solid #333;
  padding-top: 20px;
  text-align: center;
}

.footer-copyright {
  color: #888;
  font-size: 13px;
  margin: 0;
}
</style>
