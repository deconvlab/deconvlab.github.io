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



### Condition ###
At first glance, solving both unknown convolution components from a given signal seems to be unattainable, which is apparently true for general deconvolution problem. However, if we know the observation is an outcome of convolution between short and sparse signals, then perhaps surprisingly, once all of the following conditions are satisfied, then short-and-sparse deconvolution turns out to becomes a well posed problem.

1. *Short*: the short pattern is enough short compares to the observed signal. 
2. *Incoherence*: all the shifts of the short pattern are not close to each other in $\ell^2$ distance.
3. *Sparse*: The density of the support of sparse map is sufficiently low. 

There is a catch here, if we push the condition to extreme, say if the pattern is so short and the map is sparse enough that most of the patterns are not overlapping, then short-and-sparse deconvolution problem becomes trivial----which simply boils down to looking for the isolated short signal as the ground troth short pattern. This extreme case does not apply to most of the practical scenarios, and a well designed algorithm should be able to solve short-and-sparse deconvolution even under other more complicated, non-trivial cases.

### Solutions ###
It is important to clarify what the "solutions" means in short-and-sparse deconvolution. Let us consider a noiseless model case where the observations signal $\mathbf y$ is exactly convolution of two signals: the short $\mathbf a_0$, and the sparse $\mathbf x_0$, as

\\[ \mathbf y = \mathbf a_0 * \mathbf x_0 \\]





## Algorithm ##





|            Sphere           |           Subspace          |
|:---------------------------:|:---------------------------:|
| ![](/assets/fig_Staus1.png) | ![](/assets/fig_Staus2.png) | 
{:style="width:400px; height:200px"}






<A href="#heading-section-1">Section One</A>
