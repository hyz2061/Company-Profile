<template>
  <main class="about-page">
    <!-- 上面部分 -->
    <section class="hero">
        <div class="title-box"><h1 class="hero-title">MEET THE COMBINILEN <br />VISIONARIES</h1></div>
        <div class="hero-image">
          Hero 图片区域
        </div>
    </section>
    <!-- 下面部分 -->
     <section class="main-content">
        <div class="two-columns">
            <div class="left-columns">
                <section class="card">
                    <h2 >OUR STORY:</h2>
                    <h3 >Leading Student Innovation</h3>
                    <div class="card-content">
                        <p ></p>
                        <p ></p>
                        <p ></p>
                    </div>
                </section>
                <section class="card">
                    <h2 >OUR MISSION:</h2>
                    <h3 >Developing Futures</h3>
                    <div class="card-content">
                        <p ></p>
                        <p ></p>
                        <p ></p>
                    </div>
                </section>
                <section class="card">
                    <h2 >Our Values:</h2>
                    <div class="list">
                        <ui class="items">
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                        </ui>
                    </div>
                </section>
            </div>
            <div class="right-columns">
                <div class="right-card">
                    <h2>OUR ADVISGRS</h2>
                <div class="team-list">
                  <div class="team-card">成员 1</div>
                  <div class="team-card">成员 2</div>
                  <div class="team-card">成员 3</div>
                </div>
                </div>
                <div class="right-card2">
                    <h2>OUR ACHIEVEMENTS</h2>
                    <div class="achievement-content">
                        <ul>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
     </section>
  </main>
</template> 

<style scoped>
.about-page {
  width: 1350px;
  width: 90%;
  margin: 0 auto;
  padding: 20px;
  box-sizing: border-box;
  background: #f5f6fa;
}
.hero{
    text-align: center;
    height: 500px;
    padding: 40px 0;
    border-radius: 24px;
    background: linear-gradient(120deg, #a8edea, #fed6e3, #9face6);
}
.hero-title {
  font-size: 48px;
  line-height: 1.15;
  margin: 0;
  color: #111827;
  letter-spacing: 1px;
  text-align: left;
  padding-top: 60px;
  padding-left: 50px;
}
.hero-image {
  height: 330px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.main-content{
    width: 1350px;
    width: 100%;
    margin: 20px 0;
    padding: 0;
}
.two-columns{
    display: flex;
    gap: 30px;
    align-items: stretch;
}
.left-columns{
    flex: 1.3;
    background-color: #f5f6fa;
    display: flex;
    flex-direction: column;
    gap: 20px;
    border-radius: 22px;
}
.right-columns{
    flex: 0.7;
    background-color: #caddef;
    height: 900px;
    display: flex;
    flex-direction: column;
    gap: 20px;
    border-radius: 22px;
}
.card {
  background: #ffffff;
  padding: 24px;
  border-radius: 20px;
  margin-bottom: 24px;
}

.card h2 {
  font-size: 48px;
  line-height: 1.15;
  margin-bottom: 0;
  color: #111827;
  letter-spacing: 1px;
  text-align: left;
  padding-top: 20px;
  padding-bottom: 10px;
  padding-left: 50px;
  margin-top: -10px;
}

.card h3 {
  font-size: 38px;
  line-height: 1.15;
  margin: 0 12px;
  margin-top: 0;
  margin-bottom: 0;
  color: #111827;
  letter-spacing: 1px;
  text-align: left;
  padding-left: 50px;
}

.card_content {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.card p{
  height: 40px;
  border-radius: 8px;
}
.list{
  padding-left: 55px;
}
.list li{
  height: 40px;
  border-radius: 6px;
}
.right-card,
.right-card2{
    padding: 20px;
    background-color: #f6f9fc;
    border-radius: 16px;
    margin: 16px;
    width: 80%;
    margin-left: auto;
    margin-right: auto;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
}
.right-card h2,
.right-card2 h2{
    font-size: 36px;
    margin-top: 5px;
    margin-bottom: 16px;
    color: #111827;
}
.team-list{
    display: flex;
    flex-direction: column;
    gap: 16px;
}
.team-card{
  height: 80px;
  border-radius: 16px;
  background: #f3f4f6;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #374151;
}
.team-card:hover {
  transform: translateY(-8px) scale(1.05);
  background: #e0f2fe;
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.14);
}

.team-card:hover .avatar {
  transform: rotate(8deg) scale(1.1);
  transition: all 0.3s ease;
}
.achievement-content li{
    height: 60px;
}

</style>