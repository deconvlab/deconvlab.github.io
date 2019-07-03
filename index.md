---
layout: page
ketex: true
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

Many signals and datasets in a wide range of area can be effectively expressed as superposition of short and repeating pattern.  Data of the nature can be modeled as the convolution between a **short** event pattern and a **sparse** event occurrence map. Therefore, applications involving in information discovery from these signals oftentimes are treated as to decompose both *short and sparse* components *simultaneously*, even when both components are unknown.  
{: style="width:473px; text-align:justify"}

We call this problem **short-and-sparse deconvolution**.
{: style="width:470px; text-align:justify"}


## Examples ##
Signals with short-and-sparse model arise naturally in a wide range of pactical applications. Depending on its context, the short pattern can be realized in vastly different ways, while the sparse map is usually signalling the occurance of short pattern in the temporal or spatial domain. For instance, the short pattern can of the result of: 
{: style="text-align:justify"} 
* Event occurance pattern
* Point-spread-funciton of sensor
* Repeating pattern in structure
{: style="text-align:justify"}  

In the following, we would like to present serveral  examples that exhibits strong distiction of short-and-sparse model. 

### Neuron excitation pattern ###
Neuron 

### Natural image deblurring ###

### Defects of superconductor ###


## Code Package ##
1. For Matlab code of real data experiments, please clone from: [sbd/ipalm](https://github.com/sbdsphere/sbd-ipalm)
2. Execute the following code in Matlab console  

		>> sbd_example


## Algorithm Overview ##
In fact, the algorithm for solving SaS deconvolution is surprisingly intuitive but effective. Let us assume the variable for short pattern as $\mathbf a$, and the variable for sparse map as $\mathbf x$, then to find the ground truth signal pairs $(\mathbf a_0, \mathbf x_0)$, one can simply minimize the follo problem:

\\[ \min_{\mathbf a\in\mathbb S^{p-1},\mathbf x\in\mathbb R^n} \lambda \|\mathbf x\|_1 \\]


## Papers ##

## Upcoming ##


#### References ####

