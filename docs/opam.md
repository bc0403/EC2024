# 理想运算放大器及其应用电路

::: info

**9.** **理想运算放大器及其应用电路**（建议6学时）

9.1 运算放大器基础

​    9.1.1 运算放大器的结构及其电路符号

​    9.1.2 运算放大器的理想模型

9.2 运算放大器基本应用电路

​    9.2.1 反相和同相接法电路

​    9.2.2 常用运算放大器应用电路（包括线性和非线性应用电路）

:::

::: tip

理想运放特性、同相接法与反相接法的电路分析、运算放大器的应用及电路分析（信号运算、处理与发生）、有限开环增益及分析。

* 掌握 “虚短”、“虚断”的概念即可以分析理想运算放大器电路

:::



# 习题及参考解答

## 知识点1：理想运放的特性

1、关于理想的运算放大器，下列陈述不正确的是 ________ 。

A. 输出阻抗趋于零           	B. 开环放大增益趋于无穷大

C. 输入阻抗趋于无穷大       D. 闭环差模增益趋于无穷大

> D

2、理想运放的两个输入端可以看成 “ 虚短 ” 是因为 ________ ，“ 虚断 ” 是因为 ________ 。

A．差模增益趋于无穷大       B．输入阻抗趋于无穷大

C．输出阻抗趋于零           	D．共模抑制比趋于无穷大

> A  B



## 知识点2：运算放大器的应用及电路分析

1、欲将方波电压转换成三角波电压，应选用 ________ 。

A. 对数运算电路				B. 加减运算电路

C. 微分运算电路				D. 积分运算电路

> D

2、求解下图所示电路的运算关系。

<img src="./opam.assets/14-2-2.png" alt="14-2-2" style="zoom:50%;" />

> 设 $R_3$、$R_4$、$R_5$ 的公共点为 M。
>
> 利用虚短、虚断，列出基尔霍夫定律方程如下：
>
> $\frac{{{v_{i1}}}}{{{R_1}}} + \frac{{{v_{i2}}}}{{{R_2}}} = \frac{{ - {v_M}}}{{{R_3}}}$ 
>
> $\frac{{{v_M}}}{{{R_3}}} + \frac{{{v_M}}}{{{R_5}}} = \frac{{{v_o} - {v_M}}}{{{R_4}}}$ 
>
> 利用上述两个方程，得到：
>
> ${v_o} =  - {R_3}{R_4}(\frac{1}{{{R_3}}} + \frac{1}{{{R_4}}} + \frac{1}{{{R_5}}})(\frac{{{v_{i1}}}}{{{R_1}}} + \frac{{{v_{i2}}}}{{{R_2}}}) =  - ({R_3} + {R_4} + \frac{{{R_3}{R_4}}}{{{R_5}}})(\frac{{{v_{i1}}}}{{{R_1}}} + \frac{{{v_{i2}}}}{{{R_2}}})$ 

3、如下图所示电路，其输出电压与输入电压的关系近似为 ________ 。

<img src="./opam.assets/14-2-3.png" alt="14-2-3" style="zoom: 60%;" />

A. $10{v_{I1}} + 10{v_{I2}} + {v_{I3}}$ 				B. $10{v_{I1}} - 10{v_{I2}} - {v_{I3}}$ 

C. $-10{v_{I1}} + 10{v_{I2}} + {v_{I3}}$ 			 D. $-10{v_{I1}} - 10{v_{I2}} - {v_{I3}}$ 

> C

4、下列哪个电路是由理想运放器构成的微分电路 ________ 。

A. <img src="./opam.assets/14-2-4-A.png" alt="14-2-4-A" style="zoom: 40%;" />		B. <img src="./opam.assets/14-2-4-B.png" alt="14-2-4-B" style="zoom:40%;" /> 

C. <img src="./opam.assets/14-2-4-C.png" alt="14-2-4-C" style="zoom: 33%;" />		D. <img src="./opam.assets/14-2-4-D.png" alt="14-2-4-D" style="zoom:33%;" /> 

> A

5、以下运算放大器中，哪一个实现积分功能 ________ 。

A. <img src="./opam.assets/14-2-7-A.png" alt="14-2-7-A" style="zoom:33%;" />			B. <img src="./opam.assets/14-2-7-B.png" alt="14-2-7-B" style="zoom:33%;" /> 

C. <img src="./opam.assets/14-2-7-C.png" alt="14-2-7-C" style="zoom: 33%;" />				 D. <img src="./opam.assets/14-2-7-D.png" alt="14-2-7-D" style="zoom:33%;" />

> C

6、写出如下图所示电路输出电压的表达式 ${v_O} = f\left( {{v_{I1}} + {v_{I2}} + {v_{I3}}} \right)$ 。

<img src="./opam.assets/14-2-5.png" alt="14-2-5" style="zoom: 60%;" />

> ​		$∵υ_{O1} = υ_{I1},  υ_{O2} = υ_{I2},  υ_{O3} = υ_{I3}$ 
>
> ​		$∴v_O = \frac{{{R_2}//{R_3}}}{{{R_1} + {R_2}//{R_3}}} \cdot {v_{I1}} + \frac{{{R_1}//{R_3}}}{{{R_2} + {R_1}//{R_3}}} \cdot {v_{I2}} + \frac{{{R_1}//{R_2}}}{{{R_3} + {R_1}//{R_2}}} \cdot {v_{I3}}$ 
>
> ​		或 ${v_O} = \left( {{R_1}{\rm{//}}{R_2}{\rm{//}}{R_3}} \right)\left( {\frac{{{v_{I1}}}}{{{R_{\rm{1}}}}}{\rm{ + }}\frac{{{v_{I{\rm{2}}}}}}{{{R_{\rm{2}}}}}{\rm{ + }}\frac{{{v_{I{\rm{3}}}}}}{{{R_{\rm{3}}}}}} \right)$ 
>
> ​		或 ${v_O} = \frac{{\frac{{{v_{I1}}}}{{{R_{\rm{1}}}}}{\rm{ + }}\frac{{{v_{I{\rm{2}}}}}}{{{R_{\rm{2}}}}}{\rm{ + }}\frac{{{v_{I{\rm{3}}}}}}{{{R_{\rm{3}}}}}}}{{\frac{{\rm{1}}}{{{R_{\rm{1}}}}}{\rm{ + }}\frac{{\rm{1}}}{{{R_{\rm{2}}}}}{\rm{ + }}\frac{{\rm{1}}}{{{R_{\rm{3}}}}}}}{\rm{ = }}\frac{{{R_{\rm{2}}}{R_{\rm{3}}}{v_{I1}}{\rm{ + }}{R_{\rm{1}}}{R_{\rm{3}}}{v_{I{\rm{2}}}}{\rm{ + }}{R_{\rm{1}}}{R_{\rm{2}}}{v_{I{\rm{3}}}}}}{{{R_{\rm{2}}}{R_{\rm{3}}}{\rm{ + }}{R_{\rm{1}}}{R_{\rm{3}}}{\rm{ + }}{R_{\rm{1}}}{R_{\rm{2}}}}}$ 
>
> 【注】利用线性叠加原理分析

7、推导下图所示电路的运算关系。

<img src="./opam.assets/14-2-6.png" alt="14-2-6" style="zoom: 35%;" />

> 两级电路
>
> 第一级：
>
> ${I_{R1}} = \frac{{{v_{I1}} - {v_{I2}}}}{{{R_1}}}$ 		方向从上往下
>
> ${v_{o1}} = {v_{I1}} + {I_{R1}}{R_2} = {v_{I1}} + \frac{{{v_{I1}} - {v_{I2}}}}{{{R_1}}}{R_2}$ 
>
> ${v_{o2}} = {v_{I2}} - {I_{R1}}R2={v_{I2}} - \frac{{{v_{I1}} - {v_{I2}}}}{{{R_1}}}{R_2}$ 
>
> 第二级是差动放大器，故而
>
> ${v_o} = \frac{{{R_4}}}{{{R_3}}}({v_{o2}} - {v_{o1}}) = \frac{{{R_4}}}{{{R_3}}}\left( {1 + \frac{{2{R_2}}}{{R1}}} \right)({v_{I2}} - {v_{I1}})$ 

8、如下图所示电路，设电源电压、各电阻阻值和三极管 $\beta$ 均已知，求输出电压 $V_o$ 的表达式。

<img src="./opam.assets/14-2-8.png" alt="14-2-8" style="zoom:60%;" />

> ${V_{ + A1}} = {V_{ - A1}} = \frac{{{V_{CC}}}}{2}$ 
>
> $I_C=\frac{V_{CC}-V_{CC}/2}{R_C}=\frac{V_{CC}}{2R_C}$ 
>
> $\frac{{{V_2} - {V_1}}}{{{R_1}}} = \frac{{{V_1} - {V_B}}}{{{R_1}}} = {I_B}$ 
>
> $\therefore {V_1} = {I_B}{R_1} + {V_B},{\rm{ }}{V_2} = 2{I_B}{R_1} + {V_B}$ 
>
> $\frac{{{V_O} - {V_{ - A2}}}}{{{R_2}}} = \frac{{{V_{ - A2}} - {V_{OA3}}}}{{{R_2}}},{\rm{  }}\frac{{{V_{OA3}} - {V_{ - A3}}}}{{{R_3}}} = \frac{{{V_{ - A3}}}}{{{R_3}}}$ 
>
> ${V_{ - A2}} = {V_{ + A2}} = {V_2},{\rm{  }}{V_{ - A3}} = {V_{ + A3}} = {V_1}$ 
>
> 化简得到：
>
> ${V_O} = 2{I_B}{R_1} = \frac{{{V_{CC}}{R_1}}}{{\beta {R_C}}}$ 
>
> 【注】$V_2 - V_1 = I_B R_1$；$V_o = 2(V_2 - V_1)$

9、设下图为理想集成运放，$u_1=0.5{\rm V}$，负载电阻 $R_L$ 上的电压 $u_o=$ ________ ，电流 $i_L=$ ________ 。

<img src="./opam.assets/14-2-9.png" alt="14-2-9" style="zoom:50%;" />

> -1V      -0.1mA。inverting结构，增益$-2$ 

10、下图所示电路中，电压增益 $v_o/v_i$ 的幅度是 ________ dB。

<img src="./opam.assets/14-2-10.png" alt="14-2-10" style="zoom:50%;" />

> 20

11、如下图所示电路，当电路中各个电阻的阻值相等时，求电路增益 $A=v_o/v_i$ 。

<img src="./opam.assets/14-2-11.png" alt="14-2-11" style="zoom: 50%;" />

> 设从左至右的R排列为1-6，流过的电流分别对应1-6
>
> 则 ${i_1} = {i_2} = {i_3}$，${i_4} = {i_2} + {i_3} = 2{i_1}$ 
>
> 又 ${i_4}R + {i_3}R = {i_5}R$ 
>
> 即 ${i_4} + {i_3} = {i_5} = 3{i_1}$ 
>
> ${i_6} = {i_4} + {i_5} = 5{i_1}$ 
>
> ${v_I} = {i_1}R$ 
>
> ${v_O} =  - ({i_2}R + {i_4}R + {i_6}R) =  - 8{i_1}R$ 
>
> $A = \frac{{{v_O}}}{{{v_I}}} =  - 8{\rm{V}}/{\rm{V}}$ 

12、一个反向运算放大器如下图所示，其电压增益为 −4，且所用电阻的总和为 100 kΩ ，则 $R_1$ = ________ ，$R_2$ =  ________ 。

<img src="./opam.assets/14-2-12.png" alt="14-2-12" style="zoom:50%;" />

> 20 kΩ      80 kΩ。$R_2/R_1 = 4$

13、如下图所示运算放大器组成的应用电路，求

(1)  中频增益 $A_u=\frac{u_o}{u_{i2}-u_{i1}}$​ 的表达式（用符号表示）。

(2)  最大中频增益 $A_{umax}$ 和 最小中频增益 $A_{umin}$。

<img src="./opam.assets/14-2-13.png" alt="14-2-13" style="zoom:60%;" />

> (1)  $A_u=\frac{\vec{U_o}}{\vec{U_{i2}}-\vec{U_{i1}}}=\frac{{\vec{U_{o2}}-\vec{U_{o1}}}}{\vec{U_{i2}}-\vec{U_{i1}}} \times \frac{\vec{U_o}}{\vec{U_{o2}}-\vec{U_{o1}}}=A_{u1} \times A_{u2}$ 
>
> ​	  其中
>
> ​	  	$A_{u1}=\frac{i_G(R_2+R_G+R_2)}{\vec{U_{i2}}-\vec{U_{i1}}}=\frac{(\frac{\vec{U_{i2}}-\vec{U_{i1}}}{R_G})(R_G+2R_2)}{\vec{U_{i2}}-\vec{U_{i1}}}=(1+\frac{2R_2}{R_G})$		($R_G=R_1+R_W$) 
>
> ​	  	$A_{u2}=\frac{\vec{U_o}}{\vec{U_{o2}}-\vec{U_{o1}}}=\frac{R_4}{R_3}$	
>
> ​	  故
>
> ​	  	$A_u=A_{u1} \times A_{u2}=\frac{R_4}{R_3}(1+\frac{2R_2}{R_G})$ 
>
> (2)  	$R_{Gmax}=10{\rm k \Omega}$ ，$R_{Gmin}=1{\rm k \Omega}$ 
>
> ​	  	$A_{umin}=\frac{R_4}{R_3}(1+\frac{2R_2}{R_Gmax})=5 \times (1+\frac{2 \times 20}{10})=25$ 
>
> ​	  	$A_{umax}=\frac{R_4}{R_3}(1+\frac{2R_2}{R_Gmin})=5 \times (1+\frac{2 \times 20}{1})=205$ 

14、已知某电路输入电压和输出电压的波形如下图所示，该电路可能是 ________ 。

<img src="./opam.assets/14-2-14.png" alt="14-2-14" style="zoom: 33%;" />

A. 积分电路			B. 微分电路			C. 过零比较器			D. 迟滞比较器

> A

15、如下图所示电路，A1 ~ A5 均为理想运放，当开关 S1 打开以后，电路处于稳态情况下输出电压 $v_o=$ ________ ；当开关闭合时，$v_o=$ ________ 。

<img src="./opam.assets/14-2-15.png" alt="14-2-15" style="zoom:50%;" />

> 0 V         -6 V。（1）A1out, 2V;  A4out, $2\times -1.5=-3V$; A5-, -2V; A5out, $-2 + 1\times 2 = 0V$; （2）A4out, 0V, A5out, $-2 - 2\times 2 = -6V$; 

16、配置下图所示电路中所有电阻的阻值，使电路增益 $A=v_o/v_i=-50$ 。实验能提供阻值小于等于 100 kΩ 的任意电阻，图中每个电阻符号只对应一个电阻，要求使放大器的输入电阻最大，同时要求选择的电阻规格的种类最少，以简化工艺，降低成本。

<img src="./opam.assets/14-2-16.png" alt="14-2-16" style="zoom: 33%;" />

> <img src="./opam.assets/image-20221006202535021.png" alt="image-20221006202535021" style="zoom:40%;" />
>
> $R_i=R_1$，取 $R_1=100{\rm k \Omega}$ 
>
> $v_o=-i_2R_2-i_4R_4$ 
>
> $v_i=R_1i_1$ 
>
> $i_1=i_2=\frac{v_i}{R_1}$ 
>
> ${i_3} =  - \frac{{{R_2}}}{{{R_3}}}{i_2}$ 
>
> ${i_4} = {i_2} - {i_3} = \frac{{{R_2} + {R_3}}}{{{R_1}{R_3}}}{v_i}$ 
>
> ${v_o} =  - \frac{{{R_2}{R_3} + {R_2}{R_4} + {R_3}{R_4}}}{{{R_3}}}{v_i}$ 
>
> $\therefore A = \frac{{{v_o}}}{{{v_i}}} =  - \frac{{{R_2}{R_3} + {R_2}{R_4} + {R_3}{R_4}}}{{{R_1}{R_3}}} =  - 50$ 
>
> ${R_2} + {R_4} + \frac{{{R_2}{R_4}}}{{{R_3}}} = 5000$ 
>
> 取 $R_2=100{\rm k \Omega}$，$R_4=100{\rm k \Omega}$，$R_3=2.08{\rm k \Omega}$。

17、由理想运放组成的电路如下图所示，其输出电压 $v_o$ 与输入电压 $v_{i1}$、$v_{i2}$ 的关系为 ________ 。

A. $v_o=8(v_{i1}+v_{i2})$ 				B. $v_o=8(v_{i1}-v_{i2})$ 

C. $v_o=8(v_{i2}-v_{i1})$ 				D. $v_o=4(v_{i1}+v_{i2})$ 

<img src="./opam.assets/image-20240107220007360.png" alt="image-20240107220007360" style="zoom:30%;" />

> C。叠加定理，只考虑 $v_{i1}$, $v_o = v_{i1}\times (-8)$；只考虑 $v_{i2}$, $v_o = v_{i2}\times \frac{8}{9} \times (1+8)= v_{i2}\times 8$ 

18、下图为运算放大器的两种基本电路，若图中的 $R_1$ 均为 $1{\rm k \Omega}$，$R_2$ 均为 $5{\rm k \Omega}$，则图（a）和图（b）电路的输入电阻分别为 ________ 和 ________ 。

<img src="./opam.assets/14-2-18.png" alt="14-2-18" style="zoom: 40%;" />

> 1 kΩ         无穷大

19、电路如下图所示，其中运算放大器均为理想运算放大器。

(1)  计算该电路的输出电压与输入电压的运算关系；

(2)  计算该电路的输出电阻。

<img src="./opam.assets/14-2-19.png" alt="14-2-19" style="zoom:40%;" />

> $\frac{{{v_{i1}} - {v_{i4}}}}{{{R_1}}} + \frac{{{v_{i2}} - {v_{i4}}}}{{{R_1}}} + \frac{{{v_{i3}} - {v_{i4}}}}{{{R_1}}} = \frac{{{v_{i4}}}}{{{R_2}}}$ 
>
> ${v_{i4}} = \frac{{{R_2}}}{{{R_1} + {\rm{3}}{R_2}}}\left( {{v_{i1}} + {v_{i2}} + {v_{i3}}} \right)$ 
>
> ${v_o} = \frac{{{v_{i4}}}}{{{R_3}}} \times \left( {{R_2} + {R_3}} \right) = \frac{{{R_2}}}{{{R_1} + {\rm{3}}{R_2}}}\left( {{v_{i1}} + {v_{i2}} + {v_{i3}}} \right)\frac{{{R_2} + {R_3}}}{{{R_3}}} = {\rm{10}}\left( {{v_{i1}} + {v_{i2}} + {v_{i3}}} \right)$ 
>
> $R_o=0{\rm k \Omega}$ 

20、试用一个理想运算放大器实现运算电路 $v_o=15v_1+6v_2$ ，要求画出电路，并确定电路元件参数。

> 实现电路如下图所示：
>
> <img src="./opam.assets/image-20221006202552372.png" alt="image-20221006202552372" style="zoom:50%;" />
>
> ${v_o} = \left( {1 + \frac{{{R_f}}}{{{R_4}}}} \right)\left( {\frac{{{R_1}//{R_2}//{R_3}}}{{{R_1}}}{v_1} + \frac{{{R_1}//{R_2}//{R_3}}}{{{R_2}}}{v_2}} \right)$ 
>
> 当满足 ${R_1}//{R_2}//{R_3} = {R_4}//{R_f}$ 时，有
>
> ${v_o} = \frac{{{R_f}}}{{{R_1}}}{v_1} + \frac{{{R_f}}}{{{R_2}}}{v_2}$ 
>
> 则要求 $\frac{{{R_f}}}{{{R_1}}} = 15,{\rm{ }}\frac{{{R_f}}}{{{R_2}}} = 6$ 
>
> 选取 ${R_f} = 30{\rm{ k}}\Omega ,{\rm{ }}{R_1} = 2{\rm{ k}}\Omega ,{\rm{ }}{R_2} = 5{\rm{ k}}\Omega ,{\rm{ }}{R_3} = 3{\rm{ k}}\Omega$ 

21、如下图所示放大电路中，已知 $A_1$、$A_2$ 均为理想运算放大器，$R_1=R_2$。

(1)	推导负载电流 $i_L$ 的表达式；

(2)	若要求 $i_L=\frac{v_i}{R}$，$R_3$ 的值应满足什么关系？

<img src="./opam.assets/14-2-21.png" alt="14-2-21" style="zoom:50%;" />

> (1)	运放 $A_1$ 的输出电压
>
> ​		${v_{{\rm{o1}}}} =  - \frac{{{R_2}}}{{{R_1}}}{v_{\rm{i}}} - \frac{{{R_2}}}{{{R_3}}}{v_{\rm{o}}} =  - {v_{\rm{i}}} - \frac{{{R_2}}}{{{R_3}}}{v_{\rm{o}}}$ 
>
> ​		运放 $A_2$ 的输出电压
>
> ​		${v_{{\rm{o2}}}} =  - \frac{{{R_2}}}{{{R_1}}}{v_{{\rm{o1}}}} =  - {v_{{\rm{o1}}}} = {v_{\rm{i}}} + \frac{{{R_2}}}{{{R_3}}}{v_{\rm{o}}}$ 
>
> ​		由于虚地，${i_{\rm{3}}} = \frac{{{v_{\rm{o}}}}}{{{R_3}}}$ 
>
> ​		而 ${i_{\rm{R}}} = \frac{{{v_{{\rm{o2}}}} - {v_{\rm{o}}}}}{R} = \frac{{{v_{\rm{i}}}}}{R} + \frac{{{R_2} - {R_3}}}{{R{R_3}}}{v_{\rm{o}}}$ 
>
> ​		于是 ${i_{\rm{L}}} = {i_{\rm{R}}} - {i_3} = \frac{{{v_{\rm{i}}}}}{R} + \frac{{{R_2} - {R_3} - R}}{{R{R_3}}}{v_{\rm{o}}} = \frac{{{v_{\rm{i}}}}}{R} + \frac{{{R_2} - {R_3} - R}}{{R{R_3}}} \cdot {i_L}{R_L}$ 
>
> ​		可解出负载电流 ${i_{\rm{L}}} = \frac{{{v_{\rm{i}}}}}{{R - \frac{{{R_L}}}{{{R_3}}}({R_2} - {R_3} - R)}}$ 
>
> (2)	欲使 ${i_{\rm{L}}} = \frac{{{v_{\rm{i}}}}}{R}$，必须使 ${R_2} - {R_3} - R = 0$ ，即 $R_3$ 的值应满足
>
> ​		${R_3} = {R_2} - R$ 

22、求由理想运放组成的如下电路的电压增益 $v_o/v_i$ 。

<img src="./opam.assets/image-20221006202317675.png" alt="image-20221006202317675" style="zoom:50%;" />

> 分别列出运放 1 反相输入端的节点电流方程
>
> ​		$\frac{{{v_i}}}{{{R_1}}} + \frac{{{v_{o1}}}}{{{R_2}}} + \frac{{{v_o}}}{{{R_3}}} = 0$ 
>
> 由理想运放假设可知
>
> ​		${v_{o1}} = \frac{{{R_4}}}{{{R_4} + {R_5}}}{v_o}$ 
>
> 整理后得到
>
> ​		$\frac{{{v_o}}}{{{v_i}}} =  - \frac{{{R_2}{R_3}\left( {{R_4} + {R_5}} \right)}}{{{R_1}\left( {{R_2}{R_4} + {R_2}{R_5} + {R_3}{R_4}} \right)}}$ 
