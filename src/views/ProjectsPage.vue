<template>
  <main class="projects-page">
    <!-- 页面标题和介绍 -->
    <section class="hero">
      <div class="hero-content">
        <h1 class="hero-title">Our Projects</h1>
        <p class="hero-subtitle">
          <!-- 页面介绍文案 -->
          Explore our innovative projects and creative solutions
        </p>
      </div>
      <div class="hero-image">
        Hero 图片位置
      </div>
    </section>

    <!-- 项目展示区域 -->
    <section class="projects-grid">
      <div class="projects-container">
        <!-- 卡片 1 -->
        <div class="project-card">
          <div class="project-image">
            <!-- 项目配图 -->
            Project Image
          </div>
          <div class="project-info">
            <h3 class="project-title">Project Title 1</h3>
            <p class="project-desc">
              <!-- 项目描述 -->
              Brief description of the project goes here
            </p>
            <div class="project-tags">
              <!-- 项目标签 -->
              <span class="tag">a </span>
              <span class="tag">b </span>
            </div>
            <div class="project-actions">
              <Button type="primary">View Details</Button>
            </div>
          </div>
        </div>

        <!-- 卡片2 -->
        <div class="project-card">
          <div class="project-image">
            Project Image
          </div>
          <div class="project-info">
            <h3 class="project-title">Project Title 2</h3>
            <p class="project-desc">
              Brief description of the project goes here
            </p>
            <div class="project-tags">
              <span class="tag">c </span>
              <span class="tag">d </span>
            </div>
            <div class="project-actions">
              <Button type="primary">View Details</Button>
            </div>
          </div>
        </div>

        <!-- 卡片3 -->
        <div class="project-card">
          <div class="project-image">
            Project Image
          </div>
          <div class="project-info">
            <h3 class="project-title">Project Title 3</h3>
            <p class="project-desc">
              Brief description of the project goes here
            </p>
            <div class="project-tags">
              <span class="tag">e </span>
              <span class="tag">f </span>
            </div>
            <div class="project-actions">
              <Button type="primary">View Details</Button>
            </div>
          </div>
        </div>

        
      </div>
    </section>

    <!-- 特色项目区域-->
    <section class="featured-section">
      <div class="featured-container">
        <h2 class="section-title">Featured Projects</h2>
        <div class="featured-grid">
          <!-- 特色项目展示 -->
          <div class="featured-card">
            Featured Project 1
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup>
import { ref } from 'vue';
import Button from '../components/Button.vue';


</script>

<style scoped>
/* 页面基础样式 */
.projects-page {
  width: 100%;
  min-height: 100vh;
  padding: 40px 80px;
  box-sizing: border-box;
  background: #f5f6fa;
}

/* Hero 区域 */
.hero {
  min-height: 380px;
  padding: 48px;
  border-radius: 28px;
  background: linear-gradient(120deg, #a8edea, #fed6e3, #9face6);
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 40px;
  box-shadow: 0 12px 30px rgba(0, 0, 0, 0.08);
  margin-bottom: 40px;
}

.hero-content {
  flex: 1;
}

.hero-title {
  font-size: 48px;
  line-height: 1.15;
  margin: 0 0 24px;
  color: #111827;
  letter-spacing: 1px;
}

.hero-subtitle {
  font-size: 20px;
  line-height: 1.6;
  color: #374151;
  margin: 0;
}

.hero-image {
  flex: 1;
  height: 240px;
  border: 2px dashed #666;
  border-radius: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #555;
  background: rgba(255, 255, 255, 0.35);
}

/* 项目网格区域 */
.projects-grid {
  margin-bottom: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 500px;
}

.projects-container {
  display: grid;
  grid-template-columns: repeat(3, minmax(300px, 350px));
  gap: 28px;
  justify-content: center;
  align-items: stretch;
}

/* 项目卡片 */
.project-card {
  background: #ffffff;
  border-radius: 24px;
  overflow: hidden;
  box-shadow: 0 10px 24px rgba(0, 0, 0, 0.08);
  transition: all 0.35s ease;
  cursor: pointer;
}

.project-card:hover {
  transform: translateY(-12px) scale(1.02);
  box-shadow: 0 18px 36px rgba(0, 0, 0, 0.16);
}

.project-image {
  width: 100%;
  height: 200px;
  background: #e5e7eb;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #6b7280;
  font-weight: 500;
}

.project-info {
  padding: 24px;
}

.project-title {
  font-size: 22px;
  color: #111827;
  margin: 0 0 12px;
  line-height: 1.3;
}

.project-desc {
  font-size: 15px;
  color: #6b7280;
  margin: 0 0 16px;
  line-height: 1.6;
}

.project-tags {
  display: flex;
  gap: 8px;
  margin-bottom: 16px;
  flex-wrap: wrap;
}

.tag {
  padding: 6px 14px;
  background: #e0f2fe;
  color: #0369a1;
  border-radius: 20px;
  font-size: 13px;
  font-weight: 500;
}

.project-actions {
  display: flex;
  gap: 12px;
}

/* 特色项目区域 */
.featured-section {
  padding: 40px;
  border-radius: 28px;
  background: #ffffff;
  box-shadow: 0 10px 24px rgba(0, 0, 0, 0.08);
}

.section-title {
  font-size: 32px;
  color: #111827;
  margin: 0 0 24px;
}

.featured-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 24px;
}

.featured-card {
  min-height: 200px;
  background: #f9fafb;
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #6b7280;
  font-weight: 500;
}

/* 小屏幕适配 */
@media (max-width: 1200px) {
  .projects-container {
    grid-template-columns: repeat(2, minmax(300px, 350px));
  }
}

@media (max-width: 800px) {
  .projects-page {
    padding: 24px;
  }

  .hero {
    flex-direction: column;
    align-items: flex-start;
  }

  .hero-title {
    font-size: 36px;
  }

  .projects-container {
    grid-template-columns: minmax(280px, 1fr);
  }

  .projects-grid {
    min-height: auto;
  }
}
</style>
