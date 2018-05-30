---
layout: page
title: About
permalink: /about/
mathjax: true
---
---
### 1. Formulate the problem:
The sparse blind deconvolution observed signal $\mathbf{Y}$ as combination of short event signals $\mathbf{A}_i$. Each $i$-th signal activates at different time/location map as $\mathbf{X}_i$. 

$$
\mathbf{Y} = \sum_{i=1}^K \mathbf{A}_i*\mathbf{X}_i + \mathbf{E}
$$

where $\ast$ is the *convolution operator*, defined as

$$
  \mathbf{Y}(i,j)=\sum_{p,q}\mathbf{A}(p,q) \cdot \mathbf{X}(i-p,j-q) 
$$ 



Sphere            |  Subspace
:-------------------------:|:-------------------------:
![](/assets/fig_Staus1.png) | ![](/assets/fig_Staus2.png)
{:style="width:400px; height:200px"}



