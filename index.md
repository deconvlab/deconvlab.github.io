---
layout: page
ketex: true
---

**Short-and-Sparse Deconvolution**  
{: style="color:gray; font-size:210%; text-align: left; font-family:"Goudy Old Style"; margin-top:-35px; margin-bottom:0px" }
---finding repeated patterns in signals  
{: style="color:gray; font-size:160%; text-align: right; font-family:"Goudy Old Style"; margin-bottom:10px"}
----------------------------------------------------------
{: style="height:2px; color:#d0d0d0; background-color:#d0d0d0; margin-bottom:15px"}


![fig1](/assets/fig_realdata_rec.png)
Repeating defect signature of an STM image for superconductor NaFeAs
{: style="float:right; height:170px; width:170px; margin:2px 2px 0 0; font-size: 60%"}

Many signals and datasets in a wide range of area can be effectively expressed as superposition of short and repeating pattern.  Data of the nature is modeled as the convolution between a **short** event pattern and a **sparse** event occurrence map. Therefore, applications involving in information discovery from these signals oftentimes are treated as to decompose both *short and sparse* components *simultaneously*, even when both components are unknown.  
{: style="width:473px"}

We call this problem **short-and-sparse deconvolution**.
{: style="width:473px"}


## Examples ##
Signals of short-and-sparse model arise naturally in a wide range of practical applications. Depending on its context, the short pattern can be realized in vastly different ways, including the excite pattern of a triggered event, the impulse function of a linear system, or simply the reoccurring pattern from a structural data. Meanwhile, the occurrence map is usually signaling the appearance of such short pattern over the domain of the signal, which in most cases resides in either temporal or spatial domain sparingly. 

In order to see how signals in practice fit into short-and-sparse convolution model, we will begin with introducing scenarios where the signal can be characterized as an outcome of convolution between short and sparse:

### Neuron electric pulses ###
Neurons communicate with each other using electric pulses. It is hypothesized that most of the sensory and cortical  neurons transmit information through the frequency of firing pulses [1], while in more complicated organization such as the brain, neurons communicate through the temporal patterns of bitstream of pulses [?]. Meanwhile The firing patterns may depend on cellular organization, varies among the regions of the brain according to the roles they play. Thus it is important to extract both the pattern of neural excitation pulses (the short event signal) and its occurrence timing (the sparse map) in order to improve our understanding on neural system. 

![fig2](/assets/fig_neuron_spikes.png)



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
[1]. Hubel, David H., and Torsten N. Wiesel. "Receptive fields of single neurones in the cat's striate cortex." *The Journal of physiology* 148.3 (1959): 574-591.
{:style="font-size: 80%"}
