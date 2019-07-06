---
layout: page
title: Background
permalink: /background/
ketex: true
---

## Short-and-Sparse Deconvolution ##
The short-and-sparse deconvolution observed signal $\mathbf{y}$ as combination of short event signals $\mathbf{a}_i$. Each $i$-th signal activates at different time/location map as $\mathbf{x}_i$. 

\\[ \mathbf{y} = \sum_{i=1}^K \mathbf{a_0}_i * \mathbf{x_0}_i \\]

where $\ast$ is the *convolution operator*, defined as

\\[ \mathbf{y}(i,j)=\sum_{p,q}\mathbf{a_0}(p,q) \cdot \mathbf{x_0}(i-p,j-q) \\]


It is worth noting that the notion of *short and sparse* signal components can be realized with a more concrete description. Basically, we say the event pattern is short when comparing it to the overall signal length, in which the length difference should be up to order of magnitude. On the other hand, it would be easier to understand the sparsity of map as number of overlapping patterns at one location. When there is only one occurrence of pattern in each location, the sparsity of map is low and the overall signal is consists of non-overlapping patterns; in this case the short-and-sparse deconvolution problem becomes exceptionally trivial---as to find an isolated pattern that exists in the signal. In our context, the sparsity of map is considered higher then this trivial scenario, in which the overlapping number is greater then one, and may be growing once the length of the short pattern increases.


## Symmetry Solutions ##
Interstingly, there is a intutive but important finding for SaS deconvolution: there are *multple symmetric solutions* to this problem.

For example, consider the following examples:

[image]



## Algorithm ##
To our knowledge, there is a natural effective, and general purpose method for short-and-sparse deconvolution problem, which is via solving the following optimization problem:

$$ \mathrm{min}_{\mathbf a\in\mathbb S^{p-1}, \mathbf x\in\mathbb R^n} \lambda \|\mathbf x\|_1 + \frac12 \|\mathbf a \ast \mathbf x - \mathbf y\|_2^2 $$
 
We call this formulation as *blinear Lasso*


|            Sphere           |           Subspace          |
|:---------------------------:|:---------------------------:|
| ![](/assets/fig_Staus1.png) | ![](/assets/fig_Staus2.png) | 
{:style="width:400px; height:200px"}






<A href="#heading-section-1">Section One</A>
