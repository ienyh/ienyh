# css 中的 posititon 属性

## 文档流布局的概念

> 将窗体自上而下分成一行行，并在每行中按从左至右的顺序排放元素，即为文档流。每个非浮动块级元素都独占一行，浮动元素则按规定浮在行的一端。若当前行容不下，则另起新行再浮动。内联元素也不会独占一行。几乎所有元素(包括块级，内联和列表元素）均可生成子行，用于摆放子元素。有三种情况将使得元素脱离文档流而存在，分别是**浮动**、**绝对定位**、**固定定位**

## position

`position` 的作用就是将元素在网页中定位，`position` 的设定值分为这么几种：

- `static`
- `absolute`
- `relative`
- `fixed`
- `sticky`

下面我们按照这几个设定值分别来说明

### 1、static

HTML 里所有的元素的 `position` 默认值都是 static。static 会跟随 HTML 排版的流程（flow）移动。

**top、bottom、left、right 等属性都不会生效**。

![img](D:\chenyh\ienyh\resourses\6842E1AAD2A8AAF7EE9E404375DD40C4.jpg)

### 2、absolute

absolute 元素会固定在其所设定的位置，不会跟随 HTML 排版的流程移动。但其会跟随页面的滚动而移动。

如果 absolute 元素嵌套在一个 absolute 元素内，其 top、bottom、left、right 将会根据父元素（除 static 元素，即相对于**除 static 定位以外**的第一个父元素进行定位）的位置来相对定位。

![image-20210704135230385](D:\chenyh\ienyh\resourses\image-20210704135230385.png)

### 3、relative

> 相对自己文档流中的原始位置定位，**不会脱离文档流**，并且**它的位移不会对周围的元素有任何的影响**

relative 和 static 很相似，都会跟随 HTML 排版的流程而移动。

而它比 static 多了 top、bottom、left、right 的设定。

![image-20210704153900716](D:\chenyh\ienyh\resourses\image-20210704153900716.png)

**在 relative 元素里面的 absolute 元素会根据 relative 的位置去定位**，而 static 则不会。

![image-20210704153910140](D:\chenyh\ienyh\resourses\image-20210704153910140.png)

### 4、fixed

> 相对浏览器定位，**会脱离文档流**

fixed 会定位到屏幕中的固定位置，不会跟随页面的滚动而移动。

![image-20210704142936602](D:\chenyh\ienyh\resourses\image-20210704142936602.png)

如果fixed 元素**没有设定** top、bottom、left、right 属性的话，fixed 将会根据 relative 去定位。

![image-20210704152818771](D:\chenyh\ienyh\resourses\image-20210704152818771.png)

可是如果 fixed 元素**有设定 top、bottom、left、right 属性**的话，即使是放在 relative 元素里，fixed 也还是会根据页面，就是 body 去定位，也不会根据 relative 定位。

![image-20210704152834946](D:\chenyh\ienyh\resourses\image-20210704152834946.png)

### 5、sticky

sticky 元素会在滚动过程中，当贴到顶部的时候，固定在顶部，贴在顶部的原因是将其 top 属性设置为 0，所以当它的 top 与上方相距为 0 时将会触发。

![image-20210704153345889](D:\chenyh\ienyh\resourses\image-20210704153345889.png)

目前还有一些主流的浏览器不支持 sticky，IE 浏览器的所有版本均不支持。

## 引用

> 笔记来自于
>
> - [https://www.bilibili.com/video/BV1iE411W7ug](https://www.bilibili.com/video/BV1iE411W7ug)
> - [https://blog.csdn.net/qq_33248299/article/details/72617027](https://blog.csdn.net/qq_33248299/article/details/72617027)

