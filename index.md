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
*Repeating defect signature of an STM image for superconductor NaFeAs*
{: style="float:right; height:170px; width:170px; margin:2px 2px 0 0; font-size: 60%"}

Many signals and datasets in a wide range of area can be effectively expressed as superposition of short and repeating pattern.  Data of the nature is modeled as the convolution between a **short** event pattern and a **sparse** event occurrence map. Therefore, applications involving in information discovery from these signals oftentimes are treated as to decompose both short and sparse components simultaneously, even when both components are unknown.  
{: style="width:473px"}

We call this problem **short-and-sparse deconvolution**.
{: style="width:473px"}




## Examples ##
Signals of short-and-sparse model arise naturally in a wide range of practical applications. Depending on its context, the short pattern can be realized in vastly different ways, including the excite pattern of a triggered event, the impulse function of a linear system, or simply the reoccurring pattern from a structural data. Meanwhile, the occurrence map is usually signaling the appearance of such short pattern over the domain of the signal, which in most cases resides in either temporal or spatial domain sparingly. 

In order to see how signals in practice fit into short-and-sparse convolution model, we will begin with introducing scenarios where the signal can be characterized as an outcome of convolution between short and sparse:



### Neuron electric pulses ###
Neurons communicate with each other using electric pulses. It is hypothesized that most of the sensory and cortical  neurons transmit information through the frequency of firing pulses [[1]](/#references), while in more complicated organization such as the brain, neurons communicate through the temporal patterns of bitstream of pulses [[2]](/#references). Meanwhile The firing patterns may depend on cellular organization, varies among the regions of the brain according to the roles they play. Thus it is important to extract both the pattern of neural excitation pulses (the short event signal) and its occurrence timing (the sparse map) in order to improve our understanding on nervous system. 

![fig2](/assets/fig_neuron_spikes.png)
<figcaption>Calcium ions Ca<sup>2+</sup> generate various intracellular signals which control key functions ubiquitously in all neurons. In order to probe the neuron firing pattern, neuroscientists utilize chemical fluorescent calcium indicators to signal the activation of neuron via fluorescent microscope <a href="/#references">[3]</a>.</figcaption>



### Defects in crystal ###
In a periodic crystalline structure, the positions of atoms or molecules occur on repeating fixed distances. However, the arrangement in most crystalline materials is not perfect, where the regular patterns are interrupted by defects / vacancies / impurities [[4]](/#references). Characterization of these atomic defects including the pattern (the short event signal) and the defect locations (the sparse map) is important for fundamental understanding of the bulk electronic and mechanical properties for the material, which has wide range of applications in study of semiconductor, superconductor, etc.

![fig3](/assets/fig_crystal.png)
<figcaption>The microscopic image of high temperature superconductor polycrystalline NaFeAs under transmission electron microscope (TEM). The superconductivity of iron-based material is often directly related to a nematic state where the symmetry of crystal is broken, therefore it is of great interest for researchers in material science  to study its defect pattern and structure.   <a href="/#references">[5]</a>.</figcaption>



### Natural image deblurring ###
Image deblurring is a classical problem in natural image processing, where the goal is to remove the blurring artifact when taking an image in natural scenes cause by defocus aberration or motion blur from imaging devices (i.e. cameras). It is commonly acknowledged that many natural images are mainly consists of smooth subsections and sharp edges, meaning that the gradient of natural images tend of be spatially sparse [[6]](/#references). The blurring procedure on an image affects mostly on the parts of image with edges; therefore, the gradient of the blurry image can be effectively modeled as convolution between the short blurring kernel (the short event pattern) and the sparse gradients of the original sharp image (the sparse map). The deblurring of naturally image can be done via removing this blurring kernel utilizing the sparsity prior on image gradient.     

![fig4](/assets/fig_deblurring.png)
<figcaption>An natural image is taken when the camera undergoes rapid movement, causing aperture </figcaption>


## Algorithm Overview ##
In fact, the algorithm for solving SaS deconvolution is surprisingly intuitive but effective. Let us assume the variable for short pattern as $\mathbf a$, and the variable for sparse map as $\mathbf x$, then to find the ground truth signal pairs $(\mathbf a_0, \mathbf x_0)$, one can simply minimize the follo problem:

\\[ \min_{\mathbf a\in\mathbb S^{p-1},\mathbf x\in\mathbb R^n} \lambda \|\mathbf x\|_1 \\]


## Code Package ##
1. For Matlab code of real data experiments, please clone from: [sbd/ipalm](https://github.com/sbdsphere/sbd-ipalm)
2. Execute the following code in Matlab console  

		$ sbd_example


## Papers ##




#### References ####

{:.ref}
[1]. Hubel, David H., and Torsten N. Wiesel. "Receptive fields of single neurones in the cat's striate cortex." *The Journal of physiology* 148.3 (1959): 574-591.

{:.ref}
[2]. Gerstner, Wulfram, et al. "Neural codes: firing rates and beyond." *Proceedings of the National Academy of Sciences* 94.24 (1997): 12740-12741.

{:.ref}
[3]. Stosiek, Christoph, et al. "In vivo two-photon calcium imaging of neuronal networks." *Proceedings of the National Academy of Sciences* 100.12 (2003): 7319-7324.

{:.ref}
[4]. Mura, Toshio. Micromechanics of defects in solids. Springer Science & Business Media, 2013.

{:.ref}
[5]. Rosenthal, Ethan P., et al. "Visualization of electron nematicity and unidirectional antiferroic fluctuations at high temperatures in NaFeAs." *Nature physics* 10.3 (2014): 225.

{:.ref}
[6]. Levin, Anat, et al. "Image and depth from a conventional camera with a coded aperture." *ACM transactions on graphics* 26.3 (2007): 70.



