(function () {
  const I18N = {
    "nav.home": { en: "Home", zh: "首页" },
    "nav.blog": { en: "Blog", zh: "博客" },
    "nav.publications": { en: "Publications", zh: "论文发表" },
    "nav.others": { en: "Miscellaneous", zh: "其他" },

    "home.name": { en: "Shiqi Liu", zh: "刘仕琪" },

    "home.intro": {
      en: `I am currently pursuing a Ph.D. in Intelligent Science and Technology at Huazhong University of Science and Technology, advised by Prof. Yihua Tan. I received the Master's Degree in Applied Mathematics from Xi'an Jiaotong University, advised by Prof. <a href="https://scholar.google.com/citations?user=an6w-64AAAAJ&hl=zh-CN">Deyu Meng</a>.`,
      zh: `我目前正在华中科技大学智能科学与技术专业攻读博士学位，导师为谭毅华教授。我于西安交通大学获得应用数学硕士学位，导师为 <a href="https://scholar.google.com/citations?user=an6w-64AAAAJ&hl=zh-CN">孟德宇</a> 教授。`
    },
    "home.prior": {
      en: `Prior to that, I received the Bachelor’s Degree in Math and Applied Math(Honor Science Program and Special Class for Gifted Young) from Xi’an Jiaotong University.`,
      zh: `在此之前，我于西安交通大学获得数学与应用数学专业学士学位（拔尖计划 / 少年班）。`
    },
    "home.ri_title": { en: "Current Research Interests", zh: "当前研究方向" },
    "home.ri": {
      en: `My research focuses on how to enable agents to <strong>autonomously generate emotions</strong>, allowing them to pursue <strong>high-level goals—such as survival, human well-being, social connectedness, happiness, a sense of control, and self-identity</strong>—while discovering and generating goals and dynamically regulating the priorities of <strong>lower-level goals, including task completion, exploration, energy homeostasis, social homeostasis, and safety</strong>. Ultimately, I aim to develop a foundation for agents and embodied intelligence to integrate into human life and achieve long-term autonomous operation in complex and changing environments, particularly when faced with multiple autonomous goals that may compete or even conflict with one another (e.g., self-preservation versus promoting human well-being).`,
      zh: `我的研究聚焦于如何让智能体<strong>自主生成情绪</strong>，使其在追求<strong>高层目标——如生存、人类福祉、社会连接、幸福感、掌控感与自我认同</strong>——的同时，发现并生成目标，并动态调节<strong>低层目标的优先级，包括任务完成、探索、能量稳态、社会稳态与安全</strong>。最终，我旨在为智能体与具身智能融入人类生活奠定基础，使其在复杂多变的环境中、尤其是面对多个可能相互竞争甚至冲突的自主目标（例如自我保护与增进人类福祉）时，实现长期的自主运行。`
    },
    "home.et_title": { en: "Emotion Theory", zh: "情绪理论" },
    "home.et": {
      en: `My work is grounded in a goal-directed theory of emotion, which posits that the core mechanism underlying emotion generation is a goal-directed control cycle. Each cycle involves detecting discrepancies between the current state and a desired goal state, followed by selecting strategies or actions that can reduce those discrepancies. Multiple goal-directed cycles may operate simultaneously and compete for control of behavior. From this perspective, the fundamental distinction between emotional and non-emotional decision-making lies not in the underlying decision-making mechanism itself, but in the value of the goals involved. Emotional responses arise when goals that are particularly important to the individual are activated, threatened, or substantially obstructed.`,
      zh: `我的工作以目标导向的情绪理论为基础，该理论认为情绪生成的核心机制是一个目标导向的控制循环。每个循环都包含检测当前状态与期望目标状态之间的偏差，随后选择能够减小这些偏差的策略或行为；多个目标导向循环可能同时运行，并争夺对行为的控制权。从这个角度看，情绪决策与非情绪决策的根本区别不在于决策机制本身，而在于所涉及目标的价值。当对个体尤为重要目标被激活、受到威胁或严重受阻时，便会产生情绪反应。`
    },
    "home.past_title": { en: "Past Research Directions", zh: "以往研究方向" },
    "home.past": {
      en: `My previous research has also spanned a range of topics, including multimodal large language models, interpretability, generative models, self-paced learning, Bayesian learning, generalization, remote sensing, and image fusion.`,
      zh: `我以往的研究还涉及多个方向，包括多模态大语言模型、可解释性、生成模型、自步学习、贝叶斯学习、泛化、遥感以及图像融合。`
    },
    "home.news": { en: "News", zh: "新闻动态" },
    "home.news1": {
      en: `I would like to express my sincere gratitude to the School of Mathematics and Statistics of Xi’an Jiaotong University for bestowing upon me the Excellent Master Thesis Award.`,
      zh: `谨向西安交通大学数学与统计学院授予我优秀硕士学位论文奖表示衷心感谢。`
    },
    "home.news2": {
      en: `I would like to express my sincere gratitude to the School of Mathematics and Statistics of Xi’an Jiaotong University for bestowing upon me the Excellent Bachelor Thesis Award.`,
      zh: `谨向西安交通大学数学与统计学院授予我优秀学士学位论文奖表示衷心感谢。`
    },
    "home.pubs": { en: "Selected Publications", zh: "代表性论文" },

    "pub.title": { en: "Publications", zh: "论文发表" },

    "others.title": { en: "Miscellaneous", zh: "其他" },
    "others.awards": { en: "Awards", zh: "荣誉奖项" },
    "others.award1": { en: "National Award Graduate Scholarship, 2018", zh: "硕士国家奖学金，2018" },
    "others.award2": { en: "National Second Prize in China Undergraduate Mathematical Contest in Modeling, 2014", zh: "全国大学生数学建模竞赛国家二等奖，2014" },
    "others.services": { en: "Academic Services", zh: "学术服务" },
    "others.jrev": { en: "Journal Reviewer: ", zh: "期刊审稿人：" },
    "others.crev": { en: "Conference Reviewer: ", zh: "会议审稿人：" },
    "others.patents": { en: "Patents", zh: "专利" },
    "others.patent1": { en: "Emotion recognition method and system via deep learning model and long-short memory network.", zh: "基于深度学习模型与长短期记忆网络的情绪识别方法及系统" },
    "others.patent2": { en: "Change Detection Method of Remote Sensing Image via Invariant Object.", zh: "基于不变目标的遥感图像变化检测方法" },
    "others.patent3": { en: "A Usability Evaluation Method for Geometric Quality of Optical Remote Sensing Images.", zh: "一种光学遥感图像几何质量可用性评价方法" },
    "others.patent4": { en: "Usability-Oriented Quality Evaluation Method of Remote Sensing Image.", zh: "面向可用性的遥感图像质量评价方法" },
    "others.patent5": { en: "Quantitative Evaluation Method of Remote Sensing Image regarding Cloud and Shadow.", zh: "针对云与阴影的遥感图像定量评价方法" },
    "others.patent6": { en: "Remote Sensing Sample Classification Method Via Transfer Learning and Bag of Visual Words.", zh: "基于迁移学习与词袋模型的遥感样本分类方法" },
    "others.patent7": { en: "Annotation Method for Remote Sensing Samples via Combined Transfer Learning.", zh: "基于组合迁移学习的遥感样本标注方法" },
    "others.patent8": { en: "Annotation Method of Remote Sensing Samples via 3D Point Cloud.", zh: "基于三维点云的遥感样本标注方法" },
    "others.patent9": { en: "Remote Sensing Image Sample Migration Method.", zh: "遥感图像样本迁移方法" },
    "others.patent10": { en: "Automatic Color Uniform Method of Remote Sensing Image Via Poisson Editing.", zh: "基于泊松编辑的遥感图像自动匀色方法" },
    "others.patent11": { en: "A Dog Bark Detection and Monitoring Method, System, and Electronic Device", zh: "一种狗叫声检测监听方法、系统及电子设备" },
    "others.patent12": { en: "A Partial-Label Learning Based Dog Bark Emotion Recognition Method, System, and Electronic Device", zh: "基于偏标签学习的狗叫声情感识别方法、系统及电子设备" },
    "others.personal": { en: "Personal", zh: "个人" },
    "others.personal_game": {
      en: `I like the computer game <a href="https://civilization.com/">civilization 6</a>. I also like reading`,
      zh: `我喜欢玩电脑游戏 <a href="https://civilization.com/">《文明 6》</a>，也喜欢阅读`
    },

    "news.master_title": { en: "News_master", zh: "优秀硕士学位论文奖" },
    "news.bachelor_title": { en: "News_bachelor", zh: "优秀学士学位论文奖" }
  };

  function applyLanguage(lang) {
    document.documentElement.setAttribute("lang", lang);
    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      const key = el.getAttribute("data-i18n");
      if (I18N[key] && I18N[key][lang]) {
        el.textContent = I18N[key][lang];
      }
    });
    document.querySelectorAll("[data-i18n-html]").forEach(function (el) {
      const key = el.getAttribute("data-i18n-html");
      if (I18N[key] && I18N[key][lang]) {
        el.innerHTML = I18N[key][lang];
      }
    });
    document.querySelectorAll("#lang-toggle").forEach(function (el) {
      el.textContent = lang === "zh" ? "EN" : "中文";
    });
  }

  function toggleLanguage() {
    const current = localStorage.getItem("lang") || "en";
    const next = current === "zh" ? "en" : "zh";
    localStorage.setItem("lang", next);
    applyLanguage(next);
  }

  const lang = localStorage.getItem("lang") || "en";
  applyLanguage(lang);

  document.querySelectorAll("#lang-toggle").forEach(function (el) {
    el.addEventListener("click", toggleLanguage);
  });
})();
