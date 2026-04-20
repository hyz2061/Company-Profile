<template>
  <main class="home-page">
    <!-- 首页主视觉lkl -->
    <section class="hero section-box">
      <div class="hero-text">
        <p class="tag">Hero Section</p>
        <h1>BUILDING THE FUTURE</h1>
        <p>这里放首页大标题、副标题和介绍文字</p>
      </div>

      <div class="hero-image">
        图片区域
      </div>
    </section>

    <!-- 服务模块 lkl-->
    <section class="services section-box">
      <h2>Services</h2>

      <div class="card-list">
        <div class="card">微信小程序</div>
        <div class="card">Web 开发</div>
        <div class="card">AI 大模型应用</div>
      </div>
    </section>

    <!-- 项目展示模块 lkl-->
    <section class="projects section-box">
      <h2>Featured Projects</h2>

      <div class="card-list">
        <div class="card">项目 1</div>
        <div class="card">项目 2</div>
        <div class="card">项目 3</div>
      </div>
    </section>

    <!-- 团队模块lkl -->
    <section class="team section-box">
      <h2>Meet the Team</h2>

      <div class="card-list">
        <div class="card">成员 1</div>
        <div class="card">成员 2</div>
        <div class="card">成员 3</div>
      </div>
    </section>
  </main>
</template>

<style scoped>
.home-page {
  width: 100%;
  min-height: 100vh;
  background: #f5f6fa;
  padding: 40px 80px;
  box-sizing: border-box;
}

.section-box {
  margin-bottom: 40px;
  padding: 40px;
  border: 2px dashed #999;
  border-radius: 20px;
  background: white;
}

.hero {
  min-height: 420px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 40px;
  background: linear-gradient(120deg, #a8edea, #fed6e3);
}

.hero-text {
  flex: 1;
}

.hero-text h1 {
  font-size: 48px;
  margin: 20px 0;
}

.hero-image {
  flex: 1;
  height: 260px;
  border: 2px dashed #666;
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.tag {
  font-weight: bold;
  color: #555;
}

.card-list {
  display: flex;
  gap: 24px;
  margin-top: 24px;
}

.card {
  flex: 1;
  height: 140px;
  border: 2px dashed #aaa;
  border-radius: 16px;
  background: #f0f2f5;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
}
</style>