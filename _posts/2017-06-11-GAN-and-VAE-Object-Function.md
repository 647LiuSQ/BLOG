---
layout: distill
title:  GAN and VAE Object Function
date: 2017-06-11 00:00:00
description: Some finding from <a href="https://arxiv.org/abs/1606.05908" target="_blank" rel="noopener">VAE Tutorial</a> and GAN papers.
authors:
  - name: Shiqi Liu
---
<p>VAE corresponds to the <em>traditional probability learning philosophy</em> : <strong>Maximum Likelihood Principle</strong> (Corresponding to Empirical KL-divergence) and <strong>Maximum A Posterior Principle</strong> Implemented by Approximate Inference Approaches.</p>
<p>GAN corresponds to the <em>new emerging probability learning philosophy</em> : Minimize a bounch of new <strong>Probability Similarity Metrics</strong> Implemented by Implicit Learning Approaches.</p>
<p>Recently, there are a lot of researches focused on uniting the two novel generative model: GAN and VAE. Those works provides their understanding with several rebuilt models regarding GAN and VAE.</p>
<p>Here we try to understand and memorize those models by their <strong>equivalent object functions</strong> under those probability learning philosophy.</p>
<p>Some common sense for notation: D is the discriminator, G is the Generator, Q is auxiliary encoder, De is the decoder, En is the encoder.</p>
<h1 id="original-gan">Original GAN</h1>
<img src="../../../assets/img/OriginalGAN.jpg" width=600 title="This is an example image">
<h1 id="ipm-gan">IPM GAN</h1>
<img src="../../../assets/img/IPMGAN.jpg" width=600 title="This is an example image">
<h2 id="wgan">WGAN</h2>
<img src="../../../assets/img/WGAN.jpg" width=600  title="This is an example image">
<h2 id="blgan">BLGAN</h2>
<img src="../../../assets/img/BLGAN.jpg" width=600  title="This is an example image">
<h1 id="info-gan">INFO GAN</h1>
<img src="../../../assets/img/InfoGAN.jpg" width=600  title="This is an example image">
<h1 id="ae">AE</h1>
<img src="../../../assets/img/AE.jpg" width=600  title="This is an example image">
<h1 id="vae">VAE</h1>
<img src="../../../assets/img/VAE1.jpg" width=600  title="This is an example image">
<h2 id="condtional-vae">Condtional VAE</h2>
<img src="../../../assets/img/CVAE1.jpg" width=600  title="This is an example image">
