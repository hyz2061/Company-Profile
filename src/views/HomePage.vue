<template>
  <main class="home-page">
    <!-- 上半部分：左 Hero，右 项目 + 团队lkl -->
    <section class="top-layout">
      <!-- 左边 Hero，占 2/3lkl -->
      <div class="hero">
        <div class="hero-content">
          <h1>
            加油兄弟们<br />
            干了！<br />
            奥利给<br />
            冲冲冲
          </h1>

          <p>
           香香软软的前端小蛋糕们
          </p>
        </div>

        <div class="hero-image">
          Hero 图片区域
        </div>
      </div>

      <!-- 右边，占 1/3lkl -->
      <aside class="side-panel">
        <!-- Featured Projectslkl -->
        <section class="side-card">
          <h2>Featured Projects</h2>

          <div class="mini-project-list">
            <div class="mini-project-card">
              <h3>Campus Assistant</h3>
              <p>微信小程序项目</p>
            </div>

            <div class="mini-project-card">
              <h3>Startup Website</h3>
              <p>响应式官网项目</p>
            </div>

            <div class="mini-project-card">
              <h3>AI Chatbot</h3>
              <p>AI 学习助手项目</p>
            </div>
          </div>
        </section>

        <!-- Meet the Team lkl-->
        <section class="side-card">
          <h2>Meet the Team</h2>

          <div class="team-list">
            <div class="team-card">
              <div class="avatar">龙</div>
              <p>Wang Ming</p>
            </div>

            <div class="team-card">
              <div class="avatar">科</div>
              <p>Li Xiu</p>
            </div>

            <div class="team-card">
              <div class="avatar">霖</div>
              <p>Zhang Ting</p>
            </div>

            <div class="team-card">
              <div class="avatar">6</div>
              <p>Chen Hao</p>
            </div>
          </div>
        </section>
      </aside>
    </section>

    <!-- Services：Hero 下面，三个小方块 lkl-->
    <section class="services">
      <h2>Services</h2>

      <div class="service-list">
        <div class="service-card">
          <div class="service-icon">📱</div>
          <h3>Mini Program</h3>
          <p>微信小程序</p>
        </div>

        <div class="service-card">
          <div class="service-icon">💻</div>
          <h3>Web Dev</h3>
          <p>网站开发</p>
        </div>

        <div class="service-card">
          <div class="service-icon">🤖</div>
          <h3>AI Model</h3>
          <p>大模型应用</p>
        </div>
      </div>
    </section>
  </main>
</template>

<style scoped>
.home-page {
  width: 100%;
  min-height: 100vh;
  padding: 40px 80px;
  box-sizing: border-box;
  background: #f5f6fa;
}

/* 上半部分：左 2/3，右 1/3 */
.top-layout {
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 32px;
  align-items: stretch;
}

/* Hero 区域 */
.hero {
  min-height: 520px;
  padding: 48px;
  border-radius: 28px;
  background: linear-gradient(120deg, #a8edea, #fed6e3, #9face6);
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 40px;
  box-shadow: 0 12px 30px rgba(0, 0, 0, 0.08);
}

.hero-content {
  flex: 1.3;
}

.hero-content h1 {
  font-size: 48px;
  line-height: 1.15;
  margin: 0 0 24px;
  color: #111827;
  letter-spacing: 1px;
}

.hero-content p {
  font-size: 20px;
  line-height: 1.6;
  color: #374151;
}

.hero-image {
  flex: 1;
  height: 280px;
  border: 2px dashed #666;
  border-radius: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #555;
  background: rgba(255, 255, 255, 0.35);
}

/* 右侧 */
.side-panel {
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.side-card {
  flex: 1;
  padding: 24px;
  border-radius: 24px;
  background: #ffffff;
  box-shadow: 0 10px 24px rgba(0, 0, 0, 0.08);
}

.side-card h2 {
  margin: 0 0 16px;
  font-size: 24px;
  color: #111827;
}

/* Featured Projects 卡片 */
.mini-project-list {
  display: grid;
  grid-template-columns: 1fr;
  gap: 14px;
}

.mini-project-card {
  padding: 16px;
  border-radius: 16px;
  background: #eef2ff;
  cursor: pointer;
  transition: all 0.3s ease;
}

.mini-project-card h3 {
  margin: 0 0 6px;
  font-size: 16px;
  color: #111827;
}

.mini-project-card p {
  margin: 0;
  font-size: 14px;
  color: #4b5563;
}

/* 项目卡片 hover 浮动效果 */
.mini-project-card:hover {
  transform: translateY(-8px) scale(1.03);
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.14);
  background: #dbeafe;
}

/* Team */
.team-list {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 14px;
}

.team-card {
  height: 110px;
  border-radius: 16px;
  background: #f3f4f6;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 8px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.avatar {
  width: 42px;
  height: 42px;
  border-radius: 50%;
  background: #111827;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
}

.team-card p {
  margin: 0;
  font-size: 14px;
  color: #374151;
}

/* 成员卡片 hover 动态效果 */
.team-card:hover {
  transform: translateY(-8px) scale(1.05);
  background: #e0f2fe;
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.14);
}

.team-card:hover .avatar {
  transform: rotate(8deg) scale(1.1);
  transition: all 0.3s ease;
}

/* Services */
.services {
  margin-top: 40px;
  padding: 40px;
  border-radius: 28px;
  background: #ffffff;
  box-shadow: 0 10px 24px rgba(0, 0, 0, 0.08);
}

.services h2 {
  margin: 0 0 24px;
  font-size: 32px;
  color: #111827;
}

/* 三个小方块 */
.service-list {
  display: flex;
  gap: 28px;
}

.service-card {
  width: 180px;
  height: 180px;
  border-radius: 24px;
  background: #f9fafb;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 12px;
  cursor: pointer;
  transition: all 0.35s ease;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.05);
}

.service-icon {
  font-size: 36px;
  transition: all 0.35s ease;
}

.service-card h3 {
  margin: 0;
  font-size: 18px;
  color: #111827;
}

.service-card p {
  margin: 0;
  font-size: 14px;
  color: #6b7280;
}

/* Services 小方块 hover 动态效果 */
.service-card:hover {
  transform: translateY(-12px) rotate(1deg) scale(1.06);
  background: linear-gradient(135deg, #dbeafe, #fce7f3);
  box-shadow: 0 18px 36px rgba(0, 0, 0, 0.16);
}

.service-card:hover .service-icon {
  transform: scale(1.25) rotate(-8deg);
}

/* 小屏幕适配 */
@media (max-width: 1000px) {
  .home-page {
    padding: 24px;
  }

  .top-layout {
    grid-template-columns: 1fr;
  }

  .hero {
    flex-direction: column;
    align-items: flex-start;
  }

  .hero-content h1 {
    font-size: 36px;
  }

  .service-list {
    flex-wrap: wrap;
  }

  .service-card {
    width: 100%;
  }
}
</style>