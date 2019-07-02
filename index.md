---
layout: page
mathjax: true
---


**Short-and-Sparse Deconvolution**  
{: style="color:gray; font-size:210%; text-align: left; font-family:"Goudy Old Style"; margin-top:-35px; margin-bottom:0px" }
---finding repeated patterns in signals  
{: style="color:gray; font-size:160%; text-align: right; font-family:"Goudy Old Style"; margin-bottom:10px"}
------------------------------------------------------------
{: style="height:2px; color:#d0d0d0; background-color:#d0d0d0; margin-bottom:15px"}


![fig1](/assets/fig_realdata_rec.png)
Defect signature of an STM image for superconductor NaFeAs
{: style="float:right; height:170px; width:170px; margin:2px 2px 0 0; font-size: 60%; text-align: center"}

Many signals appear in nature and in science can be effectively expressed as a sequence of repetitively occurring short pattern, which can be modeled as the convolution between a **short** event pattern and a **sparse** event occurrence map. Applications involving in information discovery from this type of signals oftentimes can be treated as to decompose both the short and the *sparse* convolving components simultaneously.  
{: style="width:470px; text-align:justify"}

We call this problem **Short-and-Sparse (SaS) deconvolution**.
{: style="width:470px; text-align:justify"}


## Examples ##
SaS deconvolution is related to the following problems:
* *Pattern recognition:*
* *Sensor denoising:*
* *Filtering of transient noise:* 


## Code Package ##
1. For Matlab code of real data experiments, please clone from: [sbd/ipalm](https://github.com/sbdsphere/sbd-ipalm)
2. Execute the following code in Matlab console  

		>> sbd_example


## Algorithm Overview ##
In fact, the algorithm for solving SaS deconvolution is surprisingly intuitive but effective. Let us assume the variable for short pattern as $\mathbf a$, and the variable for sparse map as $\mathbf x$, then to find the ground truth signal pairs $(\mathbf a_0, \mathbf x_0)$, one can simply minimize the follo problem:

$$ \min_{\mathbf a\in\mathbb S^{p-1},\mathbf x\in\mathbb R^n} \lambda \|\mathbf x\|_1 $$


## Papers ##

## Upcoming ##

