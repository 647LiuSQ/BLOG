---
layout: page
permalink: /socialpapers/
title: Social Science
display_categories: [generative models, machine autonomy, interpretable machine learning, scene understanding]
description: 
horizontal: false
nav: true
importance: 10
---

<div class="projects">
  {% if site.enable_project_categories and page.display_categories %}
  <!-- Display categorized projects -->
    {% for category in page.display_categories %}
      <h2 class="category">{{category}}</h2>
      {% assign categorized_projects = site.projects | where: "category", category %}
      {% assign sorted_projects = categorized_projects | sort: "importance" %}
      <!-- Generate cards for each project -->
      {% if page.horizontal %}
        <div class="container">
          <div class="row row-cols-2">
          {% for project in sorted_projects %}
            {% include projects_horizontal.html %}
          {% endfor %}
          </div>
        </div>
      {% else %}
        <div class="grid">
          {% for project in sorted_projects %}
            {% include projects.html %}
          {% endfor %}
        </div>
      {% endif %}
    {% endfor %}

  {% else %}
  <!-- Display projects without categories -->
    {% assign sorted_projects = site.projects | sort: "importance" %}
    <!-- Generate cards for each project -->
    {% if page.horizontal %}
      <div class="container">
        <div class="row row-cols-2">
        {% for project in sorted_projects %}
          {% include projects_horizontal.html %}
        {% endfor %}
        </div>
      </div>
    {% else %}
      <div class="grid">
        {% for project in sorted_projects %}
          {% include projects.html %}
        {% endfor %}
      </div>
    {% endif %}

  {% endif %}


<div>

    <h3>Awards</h3>
	<div>
        <ul>
            <li>National Award Graduate Scholarship, 2018</li>
            <li>National Second Prize in China Undergraduate Mathematical Contest in Modeling, 2014</li>
        </ul>    
	</div>
    <h3>Academic Services</h3>
	<div>
        <ul>
            <div>Journal Reviewer: </div>
            <li>Pattern Recognition(PR)</li>
            <li>IEEE Transactions on Neural Networks and Learning Systems(TNNLS)</li>
            <li>IEEE Transactions on Circuits and Systems for Video Technology(TCSVT)</li>
            <li>IEEE Transactions on Multimedia(TMM)</li>
            <li>Engineering Applications of Artificial Intelligence(EAAI)</li>
            <div>Conference Reviewer: </div>
            <li>Uncertainty in Artificial Intelligence(UAI 2023)</li>
        </ul>
	</div>
    <h3>Patents</h3>
        <ul>
        <div>
        <li>CN109271964B(on sale with technology transfer).<a href="https://patents.google.com/patent/CN109271964B/en?inventor=%E5%88%98%E4%BB%95%E7%90%AA&oq=%E5%88%98%E4%BB%95%E7%90%AAEmotion"> Emotion recognition method and system via deep learning model and long-short memory network.</a></li>
        <li>CN114937211B.<a href="https://patents.google.com/patent/CN114937211B/en?oq=CN114937211B"> Change Detection Method of Remote Sensing Image via Invariant Object.</a></li>
        <li>CN114937211B.<a href="https://patents.google.com/patent/CN114937211B/en?oq=CN114937211B"> A Usability Evaluation Method for Geometric Quality of Optical Remote Sensing Images.</a></li>
        <li>CN114937038B.<a href="https://patents.google.com/patent/CN114937038B/en?oq=CN114937038B"> Usability-Oriented Quality Evaluation Method of Remote Sensing Image.</a></li>
        <li>CN115082452B.<a href="https://patents.google.com/patent/CN115082452B/en?oq=CN115082452B"> Quantitative Evaluation Method of Remote Sensing Image regarding Cloud and Shadow.</a></li>
        <li>CN115661504A.<a href="https://patents.google.com/patent/CN115661504A/en?oq=CN115661504A"> Remote Sensing Sample Classification Method Via Transfer Learning and Bag of Visual Words.</a></li>
        <li>CN115439710A.<a href="https://patents.google.com/patent/CN115439710A/en?oq=CN115439710A"> Annotation Method for Remote Sensing Samples via Combined Transfer Learning.</a></li>
        <li>CN115269896A.<a href="https://patents.google.com/patent/CN115269896A/en?oq=CN115269896A"> Annotation Method of Remote Sensing Samples via 3D Point Cloud.</a></li>
        <li>CN113936227A.<a href="https://patents.google.com/patent/CN113936227A/en?oq=CN113936227A"> Remote Sensing Image Sample Migration Method.</a></li>
        <li>CN113850734A.<a href="https://patents.google.com/patent/CN113850734A/en?oq=CN113850734A"> Automatic Color Uniform Method of Remote Sensing Image Via Poisson Editing.</a></li>
        </div>
        </ul>
	<h3>Personal</h3>
        <div>I sometimes post random thoughts in Chinese on <a href="https://www.zhihu.com/people/liu-shi-qi-11-24">Zhihu(知乎)</a>.</div>
		<div>I like the computer game <a href="https://civilization.com/">civilization 6</a>. I also like reading <ul>
            <li><a href="https://www.microsoft.com/en-us/research/uploads/prod/2006/01/Bishop-Pattern-Recognition-and-Machine-Learning-2006.pdf">PRML</a>, by Christopher Bishop,</li>
            <li><a href="https://cs.nyu.edu/~mohri/mlbook/">Foundations of Machine Learning</a>, by Mehryar Mohri,</li>
            <li><a href="http://www.deeplearningbook.org/">Deep Learning</a>, by Ian Goodfellow,</li>
            <li><a href="http://coltech.vnu.edu.vn/~thainp/books/Wiley_-_2006_-_Elements_of_Information_Theory_2nd_Ed.pdf">Elements of Information Theory, 2nd Edition</a>, by Thomas M. Cover,</li>
            <li><a href="https://en.wikipedia.org/wiki/The_Book_of_Why">The Book of Why</a>, by Judea Pearl.</li>
            </ul>
        </div>
        <h3>Friends</h3>
        <div>
        <ul>
            <li><a href="https://www.linkedin.com/in/yuxiang-gao-268084114/">Yuxiang Gao</a></li>
            <li><a href="http://www.yangze.tech/">Ze Yang</a></li>
            <li><a href="https://michaelglhx.github.io/BridgeBlog/">Lihao Guo</a></li>
            <li><a href="https://oerrol.github.io/">Hao Song</a></li>
            <li><a href="https://zijiejin.github.io/">Zijie Jin</a></li>
            <li><a href="https://www.math.ucsd.edu/~zim022/">Zilu Ma</a></li>
            <li><a href="https://u.osu.edu/xianyu/">Xian Yu</a></li>
            <li><a href="https://www.researchgate.net/profile/Yuan-Gao-248?_iepl%5BgeneralViewId%5D=lt1Pp1ePgnMsspNHLUQjPUVz5aUClApnjnf3&_iepl%5Bcontexts%5D%5B0%5D=searchReact&_iepl%5BviewId%5D=qDWEGyVHDS3V5gMtftg0ZP2NC4OM3fQWNU0V&_iepl%5BsearchType%5D=researcher&_iepl%5Bdata%5D%5BcountMoreThan20%5D=1&_iepl%5Bdata%5D%5BinteractedWithPosition1%5D=1&_iepl%5Bdata%5D%5BwithoutEnrichment%5D=1&_iepl%5Bposition%5D=1&_iepl%5BrgKey%5D=AC%3A20962476&_iepl%5BinteractionType%5D=profileView">Yuan Gao</a></li>
            <li><a href="https://scholar.google.com/citations?hl=en&user=2kSyD_EAAAAJ">Sheng Liu</a></li>
            <li><a href="https://www.jiongzhu.net/">Jiong Zhu</a></li>
            <li><a href="https://www.linkedin.com/in/dancju/">Nerddan</a></li>
            <li><a href="https://math.cornell.edu/tianhao-xian">Tianhao Xian</a></li>
            <li><a href="https://math.uchicago.edu/~yang/">Jincheng Yang</a></li>
            <li><a href="https://www.linkedin.com/in/haodong-sun-1344301a3/">Haodong Sun</a></li>
        </ul>
        </div>
</div>
