---
layout: page
title: About
permalink: /about/
mathjax: true
---

### Short-and-Sparse Deconvolution ###
The sparse blind deconvolution observed signal $\mathbf{y}$ as combination of short event signals $\mathbf{a}_i$. Each $i$-th signal activates at different time/location map as $\mathbf{x}_i$. 
$$ \mathbf{y} = \sum_{i=1}^K \mathbf{a_0}_i * \mathbf{x_0}_i $$

where $\ast$ is the *convolution operator*, defined as

$$ \mathbf{y}(i,j)=\sum_{p,q}\mathbf{a_0}(p,q) \cdot \mathbf{x_0}(i-p,j-q) $$


### Symmetry Solutions ###
Interstingly, there is a intutive but important finding for SaS deconvolution: there are *multple symmetric solutions* to this problem.

For example, consider the following examples:

[image]



### Algorithm ###
To our knowledge, there is a natural effective, and general purpose method for short-and-sparse deconvolution problem, which is via solving the following optimization problem:

$$ \mathrm{min}_{\mathbf a\in\mathbb S^{p-1}, \mathbf x\in\mathbb R^n} \lambda \|\mathbf x\|_1 + \frac12 \|\mathbf a \ast \mathbf x - \mathbf y\|_2^2 $$
 
We call this formulation as *blinear Lasso*


|            Sphere           |           Subspace          |
|:---------------------------:|:---------------------------:|
| ![](/assets/fig_Staus1.png) | ![](/assets/fig_Staus2.png) | 
{:style="width:400px; height:200px"}






<A href="#heading-section-1">Section One</A>
