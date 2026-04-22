<template>
  <main class="page">
    <!-- HERO -->
    <section class="hero">
      <div class="hero-left">
        <h1>OUR CORE SPECIALTIES:<br />Build Your Ideas</h1>
      </div>

      <div class="hero-right">
        <div class="hero-visual">AI / 手机 / 服务器图示</div>
      </div>
    </section>

    <!-- 主体内容 -->
    <section class="content">
      <!-- 左侧 -->
      <div class="main">
        <!-- Services -->
        <section class="card">
          <h2>OUR CORE SPECIALTIES:</h2>

          <div class="services">
            <div class="service">
              <h3>WECHAT MINI-PROGRAMS</h3>
              <p>小程序开发 / 校园系统</p>
            </div>

            <div class="service">
              <h3>WEB DEVELOPMENT</h3>
              <p>官网 / 前后端开发</p>
            </div>
          </div>
        </section>

        <!-- AI 模块 -->
        <section class="card ai">
          <h2>LARGE MODEL APPLICATIONS</h2>
          <div class="ai-box">AI 图示区域</div>
        </section>

        <!-- 流程 -->
        <section class="card">
          <h2>SERVICE PROCESS</h2>

          <div class="process">
            <div class="step">AI Analysis</div>
            <div class="step">Algorithm</div>
            <div class="step">Production</div>
            <div class="step">QA</div>
            <div class="step">Iteration</div>
          </div>
        </section>
      </div>

      <!-- 右侧 -->
      <aside class="sidebar">
        <div class="card">
          <h3>CLIENT TESTIMONIALS</h3>
          <div class="testimonial">“评价内容...”</div>
          <div class="testimonial">“评价内容...”</div>
          <div class="testimonial">“评价内容...”</div>
        </div>

        <div class="card">
          <h3>GET A QUOTE</h3>
          <input placeholder="Name" />
          <input placeholder="Email" />
          <textarea placeholder="Message"></textarea>
          <button>GET QUOTE</button>
        </div>
      </aside>
    </section>

    <!-- Footer -->
    <footer class="footer">
      <div>combinilen Hub</div>
      <div>Contact | Email</div>
    </footer>
  </main>
</template>

<style scoped>
.page {
  padding: 40px;
  background: #f5f6fa;
}

/* HERO */
.hero {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 80px;
  border-radius: 24px;
  background: linear-gradient(120deg, #a8edea, #fed6e3, #9face6);
  margin-bottom: 32px;
}

.hero-left h1 {
  font-size: 42px;
}

.hero-visual {
  width: 220px;
  height: 180px;
  background: rgba(255,255,255,0.5);
  border-radius: 20px;
}

/* 主体 */
.content {
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 24px;
}

.card {
  background: #fff;
  padding: 24px;
  border-radius: 20px;
  margin-bottom: 24px;
}

/* services */
.services {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
}

.service {
  background: #f3f4f6;
  padding: 16px;
  border-radius: 16px;
}

/* AI */
.ai-box {
  height: 160px;
  background: #eef2ff;
  border-radius: 16px;
}

/* 流程 */
.process {
  display: flex;
  justify-content: space-between;
}

.step {
  background: #e5e7eb;
  padding: 10px 14px;
  border-radius: 20px;
}

/* sidebar */
.sidebar input,
.sidebar textarea {
  width: 100%;
  margin-bottom: 10px;
  padding: 8px;
}

.sidebar button {
  width: 100%;
  padding: 10px;
  background: #2563eb;
  color: white;
  border: none;
  border-radius: 8px;
}

/* footer */
.footer {
  margin-top: 40px;
  padding: 24px;
  background: #111827;
  color: white;
  display: flex;
  justify-content: space-between;
}
</style>