---
layout: page
ketex: true
---

**Short-and-Sparse Deconvolution**  
{: style="color:gray; font-size:210%; text-align: left; font-family:"Goudy Old Style"; margin-top:-35px; margin-bottom:0px" }
---finding repeated patterns in signals  
{: style="color:gray; font-size:160%; text-align: right; font-family:"Goudy Old Style"; margin-bottom:10px"}
--------------------------------------------------------
{: style="height:2px; color:#d0d0d0; background-color:#d0d0d0; margin-bottom:15px"}


![fig1](/assets/fig_realdata_rec.png)
*Repeating defect signature of an STM image for superconductor NaFeAs*
{: style="float:right; height:27%; width:27%; margin:2px 0 0 10px; font-size: 60%"}

Many signals and datasets in a wide range of area can be effectively expressed as superposition of short and repeating pattern.  Data of the nature is modeled as the convolution between a **short** event pattern and a **sparse** event occurrence map. Therefore, applications involving in information discovery from these signals oftentimes are treated as to decompose both short and sparse components simultaneously, even when both components are unknown.  

We call this problem **short-and-sparse deconvolution**.


## Examples ##

Signals of short-and-sparse model arise naturally in a wide range of practical applications. Depending on its context, the short pattern can be realized in vastly different ways, including the excite pattern of a triggered event, the impulse function of a linear system, or simply the reoccurring pattern from a structural data. Meanwhile, the occurrence map is usually signaling the appearance of such short pattern over the domain of the signal, which in most cases resides in either temporal or spatial domain sparingly. 

In order to see how signals in practice fit into short-and-sparse convolution model, we will begin with introducing scenarios where the signal can be characterized as an outcome of convolution between short and sparse:


### Neuron electric pulses ###

Neurons communicate with each other using electric pulses. It is hypothesized that most of the sensory and cortical  neurons transmit information through the frequency of firing pulses [[1]](/#references), while in more complicated organization such as the brain, neurons communicate through the temporal patterns of bitstream of pulses [[2]](/#references). Meanwhile the firing patterns may depend on cellular organization, varies among the regions of the brain according to the roles they play. Thus it is important to extract both the pattern of neural excitation pulses (the short event signal) and its occurrence timing (the sparse map) in order to improve our understanding on nervous system. 

![fig2](/assets/fig_neuron_spikes.png)
<figcaption>Calcium ions Ca<sup>2+</sup> generate various intracellular signals which control key functions ubiquitously in all neurons. In order to probe the neuron firing pattern, neuroscientists utilize chemical fluorescent calcium indicators to signal the activation of neuron via fluorescent microscope <a href="/#references">[3]</a>.</figcaption>



### Defects in crystal ###

In a periodic crystalline structure, the positions of atoms or molecules occur on repeating fixed distances. However, the arrangement in most crystalline materials is not perfect, where the regular patterns are interrupted by defects / vacancies / impurities [[4]](/#references). Characterization of these atomic defects including the pattern (the short event signal) and the defect locations (the sparse map) is important for fundamental understanding of the bulk electronic and mechanical properties for the material, which has wide range of applications in study of semiconductor, superconductor, etc.

![fig3](/assets/fig_crystal.png)
<figcaption>The microscopic image of high temperature superconductor polycrystalline NaFeAs under transmission electron microscope (TEM). The superconductivity of iron-based material is often directly related to a nematic state where the symmetry of crystal is broken, therefore it is of great interest for researchers in material science  to study its defect pattern and structure.   <a href="/#references">[5]</a>.</figcaption>



### Natural image deblurring ###

Image deblurring is a classical problem in natural image processing, where the goal is to remove the blurring artifact when taking an image in natural scenes cause by defocus aberration or motion blur from imaging devices (i.e. cameras). It is commonly acknowledged that many natural images are mainly consists of smooth subsections and sharp edges, meaning that the gradient of natural images tends to be spatially sparse [[6]](/#references). The blurring procedure on an image affects mostly on the parts of image with edges; therefore, the gradient of the blurry image can be effectively modeled as convolution between the short blurring kernel (the short event pattern) and the sparse gradients of the original sharp image (the sparse map). Deblurring of natural image can be done via removing this blurring kernel with utilization of  the sparsity prior on image gradient.     

![fig4](/assets/fig_deblurring.png)
<figcaption>An natural image is taken while the camera  undergoing rapid movement, causing a blurring effect on the received image with the blur kernel shaped as the moving trajectory. In most of such cases the blur kernel is unknown, thus the blind deconvolution procedure is required to restore the high resolution image.  </figcaption>



## Algorithm Overview ##

Short-and-sparse deconvolution can be solved via surprisingly intuitive and simple algorithm, the algorithm finds one of the "symmetric solutions"---the shifted and scaled variant of the ground truth short and sparse components.


###  Symmetric Solutions ###

Write the ground truth signal pair as the short  $\mathbf a_0 \in\mathbb R^p$ and the sparse $ \mathbf x_0\in\mathbb R^n$ $(p\ll n)$, where the observation $\mathbf y$ is the noiseless convolution between the two signals, namely 

\\[\mathbf y = \mathbf a_0*\mathbf x_0. \tag{1} \\] 

Then due to the intrinsic ambiguity of the short-and-sparse deconvolution, there will be multiple possibilities for the convolution of a short and sparse pairs forms $\mathbf y$ besids $\mathbf a_0*\mathbf x_0$. More importantly, these different signal pairs can be specified as the shifted and scaled version of ground truth $(\mathbf a_0, \mathbf x_0)$

![img5](/assets/fig_conv.png)
{: style="width:80%; display:block; margin:auto; margin-top:-1em; margin-bottom:1em"}
<figcaption> The observation $\mathbf y$ (left) is the convolution of ground truth signals $(\mathbf a_0, \mathbf x_0)$ (right, top). If we shift the short $\mathbf a_0$ to the left, and the sparse $\mathbf x_0$ to the right by the same distance, the convolution of the new pair of signal (right, bot) also generates $\mathbf y$. </figcaption>

Because of this ambiguity, it is impossible for us to find out the exact generating $(\mathbf a_0, \mathbf x_0)$ solely dependent on the observation $\mathbf y$. Nevertheless, in most of the applications, we are willing to know the shape of the short signal, or the pattern of the sparsity map; while the exact scaling of signals and the timing / location of the map is not quite interested. Hence we would glad to accept any shifts and scaled version of $(\mathbf a_0, \mathbf x_0)$ as the solution to short-and-sparse deconvolution, these are called as the symmetric solutions.  


### Formulation ###

To find the shifted and scaled variation of $\mathbf a_0\in\mathbb R^p$ and $\mathbf x_0\in\mathbb R^n$, the algorithm optimize two variables, the short pattern $\mathbf a\in\mathbb R^{3p}$ and the sparsity map $\mathbf x\in\mathbb R^{n+2p}$, with respect to  minimizing the objective that consists both (i). the sparsity of $\mathbf x$, and (ii). the data infidelity between observation $\mathbf y$ and the convolution $\mathbf a *\mathbf x$:


\\[ \min_{\mathbf a\in\mathbb S^{3p-1},\, \mathbf x\in\mathbb R^{n+2p}} \overbrace{\lambda \lVert\mathbf x\rVert_1}^{\text{sparsity}} + \overbrace{\tfrac12  \lVert\mathbf a*\mathbf x - \mathbf y\rVert_2^2}^{\text{data fidelity}}. \tag{2}  \\]

It is fairly straight forward, but because of the symmetric solutions, there is some important detail need to be taken care of during minimization:

1. *Sphere*: The algorithm asks to optimize the problem with the short variable $\mathbf a$ stays on $\ell^2$-sphere, enforcing $\lVert \mathbf a\rVert_2=1$. Of course, the actual $\mathbf a_0$ may not have unit norm, which, due the the ambiguity, is something we will never know.

2. *Zero Padding*: The algorithm optimize the  variables $\mathbf a,\mathbf x$ on a higher dimensional space, to accommodate all possible shifted $(\mathbf a_0, \mathbf x_0)$ as  good solutions. If the ground truth $\mathbf a_0$ has length $p$, then it is advised to optimize $\mathbf a$ of length $p+2p$, and similarly for $\mathbf x$ of length $n+2p$. Accordingly, the corresponding observation signal $\mathbf y$ should be zero padded on two sides depending on the assumed length of $\mathbf a_0$ during optimization.


### Minimizing Algorithm ###

The problem $(2)$ is a non-convex problem. The landscape of the objective is forged by the symmetric solutions---shifts of $(\mathbf a_0, \mathbf x_0)$. More importantly, all of the local minimizers of the landscape within some certain region are exactly the shifts, meaning that if we set up the algorithm correctly then the short-and-sparse deconvolution can be solved via minimizing $(2)$.

1. *Initialization*: Knowing that the solutions are the shifts of $\mathbf a_0$ and $\mathbf x_0$ suggests it would be better starts the minimization with initializer $(\mathbf a^{(0)}, \mathbf x^{(0)})$ closer to the set of shifts. Thus, it is adviced to set the $\mathbf a^{(0)}$ as a normalized  chunk of data $\mathbf y$ (which indeed will be closer to the solutions compares to, say,  a random vector), and the  $\mathbf x^{(0)}$ as the minimizer of $(2)$ with fixed $\mathbf a = \mathbf a^{(0)}$ 

	* $\mathbf a^{(0)} = [ \overbrace{0,\ldots,\, 0}^p, \mathbf y_1,\ldots \mathbf y_{p} , \overbrace{0,\ldots,\, 0}^p] \,/ \,\lVert[\mathbf y_1,\ldots,\,\mathbf y_p]\rVert_2$.  

	* $\mathbf x^{(0)} = \mathrm{argmin}_{\mathbf x} \,\lambda \lVert x\rVert_1 + \tfrac12\lVert \mathbf a^{(0)}*\mathbf x - \mathbf y \rVert_2^2 $  

2. *Minimization*: Starting from the initializer, performing conventional alternation gradient descent on both variables $\mathbf a$ and $\mathbf x$ suffices to solve the problem. Here, the notion of gradient on $\mathbf a$ is Riemmanian, which is nothing special but the conventional gradient defined over spherical domain. Also, the penalty variable in $(2)$, $\lambda$, can be set according to the sparsity level $ \theta$ of the true map $\mathbf x_0$, such that $\lambda \lessapprox 1/\sqrt{p\theta}$.



## Code Package ##

The solver of short-and-sparse deconvolution (Matlab) can be downloaded from the following github link: 

[https://github.com/sbdsphere/sbd-ipalm](https://github.com/sbdsphere/sbd-ipalm) 
{:style="text-align:center"}

To exercise the test code, please execute the following code in Matlab console:

	$ sbd_example



## Resources ##

* Paper: 
	* Theories on short-and-sparse deconvolution: [[Short Version](http://proceedings.mlr.press/v97/kuo19a/kuo19a.pdf)]  [[Long Version](https://arxiv.org/pdf/1901.00256.pdf)]
	* Algorithms and applications: [To appear]

* Other media:
	* Introduction on short-and-sparse deconvolution: [[slides](/assets/slides_SaSD.pdf)] [[poster](/assets/poster_SaSD.pdf)]  



-------------------------------------------------------
{: style="height:2px; color:#aaa; background-color:#aaa; margin-top: 3em; margin-bottom:-0.2em"}

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



