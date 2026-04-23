<template>
  <div class="team-page">
    <!-- 顶部标题渐变区（已删除空白框） -->
    <section class="team-hero">
      <div class="hero-content">
        <h1>THE BRIGHT MINDS OF SUMENG TECHNOLOGY</h1>
      </div>
    </section>

    <!-- 下方白色主体区 -->
    <div class="team-content-wrapper">
      <div class="team-content">
        
        <!-- 左侧：成员卡片 -->
        <section class="team-members">
          <div class="member-card">
            <div class="avatar"></div>
            <div class="info">
              <h3>Wang Jing</h3>
              <p>Position</p>
              <p class="desc">Short description about team member</p>
            </div>
          </div>
          <div class="member-card">
            <div class="avatar"></div>
            <div class="info">
              <h3>Li Tao</h3>
              <p>Position</p>
              <p class="desc">Short description about team member</p>
            </div>
          </div>
          <div class="member-card">
            <div class="avatar"></div>
            <div class="info">
              <h3>Zhang Wei</h3>
              <p>Position</p>
              <p class="desc">Short description about team member</p>
            </div>
          </div>
          <div class="member-card">
            <div class="avatar"></div>
            <div class="info">
              <h3>Wang Ling</h3>
              <p>Position</p>
              <p class="desc">Short description about team member</p>
            </div>
          </div>
          <div class="member-card">
            <div class="avatar"></div>
            <div class="info">
              <h3>Liu Qiang</h3>
              <p>Position</p>
              <p class="desc">Short description about team member</p>
            </div>
          </div>
          <div class="member-card">
            <div class="avatar"></div>
            <div class="info">
              <h3>Zhang Min</h3>
              <p>Position</p>
              <p class="desc">Short description about team member</p>
            </div>
          </div>
        </section>

        <!-- 右侧：边栏（你要加回来的部分） -->
        <aside class="team-sidebar">
          <div class="sidebar-block">
            <h2>JOIN OUR TEAM</h2>
            <div class="join-diagram"></div>
          </div>
          <div class="sidebar-block">
            <h2>TEAM LIFE</h2>
            <div class="life-grid">
              <div class="life-item"></div>
              <div class="life-item"></div>
              <div class="life-item"></div>
              <div class="life-item"></div>
            </div>
          </div>
        </aside>

      </div>
    </div>
  </div>
</template>

<script setup>
</script>

<style scoped>
/* 整体页面 */
.team-page {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

/* 顶部渐变标题区 */
.team-hero {
  width: 100%;
  padding: 120px 80px;
  background: linear-gradient(90deg, #a5f3fc 0%, #fbcfe8 50%, #d8b4fe 100%);
  border-radius: 24px 24px 0 0;
}

.hero-content {
  max-width: 1400px;
  margin: 0 auto;
}

.hero-content h1 {
  font-size: 40px;
  font-weight: 700;
  color: #1a202c;
  margin: 0;
}

/* 下方白色背景 */
.team-content-wrapper {
  flex: 1;
  background: #ffffff;
  padding: 60px 80px;
}

.team-content {
  max-width: 1400px;
  margin: 0 auto;
  display: flex;
  gap: 50px;
}

/* 成员卡片区域 */
.team-members {
  flex: 3;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 40px;
}

.member-card {
  background: #fff;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
}

.avatar {
  width: 100%;
  height: 200px;
  background: #f1f1f1;
}

.info {
  padding: 22px;
}

.info h3 {
  font-size: 18px;
  font-weight: 600;
  margin: 0 0 4px;
}

.info p {
  font-size: 14px;
  color: #666;
  margin: 0 0 8px;
}

.info .desc {
  font-size: 13px;
  color: #999;
  line-height: 1.5;
}

/* 右侧边栏 */
.team-sidebar {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 30px;
}

.sidebar-block {
  background: #f8f9fa;
  padding: 24px;
  border-radius: 16px;
}

.sidebar-block h2 {
  font-size: 20px;
  margin: 0 0 16px;
}

.join-diagram {
  width: 100%;
  height: 160px;
  background: #eee;
  border-radius: 12px;
}

.life-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 12px;
}

.life-item {
  width: 100%;
  height: 90px;
  background: #eee;
  border-radius: 10px;
}
</style>