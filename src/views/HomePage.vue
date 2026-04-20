<template>
  <main class="home-page">
    <!-- 上半部分：左 Hero，右 项目+团队lkl -->
    <section class="top-layout">
      <!-- 左边 Herolkl -->
      <div class="hero">
        <div class="hero-content">
          <h1>
            BUILDING THE FUTURE:<br />
            WECHAT MINI-PROGRAMS,<br />
            WEB DEV & AI MODELS<br />
            BY STUDENTS
          </h1>

          <p>
            Leading student team delivering innovative solutions
            for business and school.
          </p>
        </div>

        <div class="hero-image">
          Hero 图片区域
        </div>
      </div>

      <!-- 右边侧栏lkl -->
      <aside class="side-panel">
        <section class="side-card">
          <h2>Featured Projects</h2>

          <div class="mini-project-list">
            <div class="mini-project-card">项目 1</div>
            <div class="mini-project-card">项目 2</div>
            <div class="mini-project-card">项目 3</div>
          </div>
        </section>

        <section class="side-card">
          <h2>Meet the Team</h2>

          <div class="team-list">
            <div class="team-card">成员 1</div>
            <div class="team-card">成员 2</div>
            <div class="team-card">成员 3</div>
            <div class="team-card">成员 4</div>
          </div>
        </section>
      </aside>
    </section>

    <!-- Hero 下面：Serviceslkl -->
    <section class="services">
      <h2>Services</h2>

      <div class="service-list">
        <div class="service-card">
          <h3>WECHAT MINI-PROGRAMS</h3>
          <p>微信小程序开发、校园助手、信息查询系统。</p>
        </div>

        <div class="service-card">
          <h3>WEB DEVELOPMENT</h3>
          <p>企业官网、响应式页面、前后端分离项目。</p>
        </div>

        <div class="service-card">
          <h3>LARGE MODEL APPLICATIONS</h3>
          <p>AI 聊天机器人、大模型应用、智能问答系统。</p>
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

/* 上半部分：2/3 + 1/3 */
.top-layout {
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 32px;
  align-items: stretch;
}

/* 左边 Hero */
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

/* 右侧项目和团队 */
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

.mini-project-list {
  display: grid;
  grid-template-columns: 1fr;
  gap: 12px;
}

.mini-project-card {
  height: 80px;
  border-radius: 16px;
  background: #eef2ff;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #374151;
}

.team-list {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 12px;
}

.team-card {
  height: 80px;
  border-radius: 16px;
  background: #f3f4f6;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #374151;
}

/* Services 在 Hero 下面，占满整行 */
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

.service-list {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
}

.service-card {
  min-height: 160px;
  padding: 28px;
  border-radius: 24px;
  background: #f9fafb;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.05);
}

.service-card h3 {
  margin: 0 0 16px;
  font-size: 22px;
  color: #111827;
}

.service-card p {
  margin: 0;
  font-size: 16px;
  line-height: 1.6;
  color: #4b5563;
}

/* 适配小屏幕 */
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
    grid-template-columns: 1fr;
  }
}
</style>