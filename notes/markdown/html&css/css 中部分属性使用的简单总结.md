# css 中部分属性使用的简单总结

- [https://www.cnblogs.com/huansky/p/6077166.html](https://www.cnblogs.com/huansky/p/6077166.html)

- [https://www.w3school.com.cn/index.html](https://www.w3school.com.cn/index.html)

## css 选择器优先级

1. `!important` 加在样式属性值后，权重值为 **10000**
2. **内联样式**，如 `style=""`，权重值为 **1000**
3. **ID 选择器**，如 `#content`，权重值为 **100**
4. **类、伪类和属性选择器**，如 `.content` `:hover` 权重值为 **10**
5. **标签选择器和伪元素选择器**，如 `div` `::before` 权重值为 **1**
6. *通用选择器 `*`、子选择器 `>`、相邻选择器 `+`、同胞选择器 `~`**，**权重值为 **0**

## css 变量

### 声明变量

声明变量的时候，变量名前面要加两根连词线（`--`）

```css
body {
  --foo: #7F583F;
  --bar: #F7EFD2;
}
```

各种值都可以放入 CSS 变量。

```css
:root{
  --main-color: #4d4e53;
  --main-bg: rgb(255, 255, 255);
  --logo-border-color: rebeccapurple;

  --header-height: 68px;
  --content-padding: 10px 20px;

  --base-line-height: 1.428571429;
  --transition-duration: .35s;
  --external-link: "external link";
  --margin-top: calc(2vh + 20px);
}
```

变量名大小写敏感，`--header-color` 和 `--Header-Color`是两个不同变量。

### `var()`

`var()`函数用于读取变量。

```css
a {
  color: var(--foo);
  text-decoration-color: var(--bar);
}
```

`var()`函数还可以使用第二个参数，表示变量的默认值。如果该变量不存在，就会使用这个默认值。

```css
color: var(--foo, #7F583F);
```

第二个参数不处理内部的逗号或空格，都视作参数的一部分。

```css
var(--font-stack, "Roboto", "Helvetica");
var(--pad, 10px 15px 20px);
```

`var()` 函数还可以用在变量的声明。

```css
:root {
  --primary-color: red;
  --logo-text: var(--primary-color);
}
```

注意，变量值只能用作属性值，不能用作属性名。

```css
.foo {
  --side: margin-top;
  /* 无效 */
  var(--side): 20px;
}
```

上面代码中，变量 `--side` 用作属性名，这是无效的。

## css 单位

### 绝对长度单位

| 单位 | 名称         | 等价换算                 |
| :--- | :----------- | :----------------------- |
| `cm` | 厘米         | 1 cm = 96px / 2.54       |
| `mm` | 毫米         | 1 mm = 1 / 10 th of 1 cm |
| `Q`  | 四分之一毫米 | 1 Q = 1 / 40 th of 1 cm  |
| `in` | 英寸         | 1 in = 2.54 cm = 96 px   |
| `pc` | 十二点活字   | 1 pc = 1 / 16 th of 1 in |
| `pt` | 点           | 1 pt = 1 / 72 th of 1 in |
| `px` | 像素         | 1 px = 1 / 96 th of 1 in |

### 相对长度单位

| 单位   | 相对于                                                       |
| :----- | :----------------------------------------------------------- |
| `em`   | 在 `font-size` 中使用是相对于父元素的字体大小，在其他属性中使用是相对于自身的字体大小，如 `width` |
| `ex`   | 字符 “x” 的高度                                              |
| `ch`   | 数字 “0” 的宽度                                              |
| `rem`  | 根元素的字体大小                                             |
| `lh`   | 元素的 `line-height`                                         |
| `vw`   | 视窗宽度的 1 %                                               |
| `vh`   | 视窗高度的 1 %                                               |
| `vmin` | 视窗较小尺寸的 1 %                                           |
| `vmax` | 视图大尺寸的 1 %                                             |

## transform

CSS `transform` 属性允许你旋转，缩放，倾斜或平移给定元素。这是通过修改 CSS 视觉格式化模型的坐标空间来实现的。

默认值：`none`，是否继承：`✖️`

```css
transform: none | transform-functions;
```

| 值                                                           | 描述                                    |
| ------------------------------------------------------------ | --------------------------------------- |
| none                                                         | 定义不进行转换。                        |
| matrix(*n*,*n*,*n*,*n*,*n*,*n*)                              | 定义 2D 转换，使用六个值的矩阵。        |
| matrix3d(*n*,*n*,*n*,*n*,*n*,*n*,*n*,*n*,*n*,*n*,*n*,*n*,*n*,*n*,*n*,*n*) | 定义 3D 转换，使用 16 个值的 4x4 矩阵。 |
| translate(*x*,*y*)                                           | 定义 2D 转换。                          |
| translate3d(*x*,*y*,*z*)                                     | 定义 3D 转换。                          |
| translateX(*x*)                                              | 定义转换，只是用 X 轴的值。             |
| translateY(*y*)                                              | 定义转换，只是用 Y 轴的值。             |
| translateZ(*z*)                                              | 定义 3D 转换，只是用 Z 轴的值。         |
| scale(*x*,*y*)                                               | 定义 2D 缩放转换。                      |
| scale3d(*x*,*y*,*z*)                                         | 定义 3D 缩放转换。                      |
| scaleX(*x*)                                                  | 通过设置 X 轴的值来定义缩放转换。       |
| scaleY(*y*)                                                  | 通过设置 Y 轴的值来定义缩放转换。       |
| scaleZ(*z*)                                                  | 通过设置 Z 轴的值来定义 3D 缩放转换。   |
| rotate(*angle*)                                              | 定义 2D 旋转，在参数中规定角度。        |
| rotate3d(*x*,*y*,*z*,*angle*)                                | 定义 3D 旋转。                          |
| rotateX(*angle*)                                             | 定义沿着 X 轴的 3D 旋转。               |
| rotateY(*angle*)                                             | 定义沿着 Y 轴的 3D 旋转。               |
| rotateZ(*angle*)                                             | 定义沿着 Z 轴的 3D 旋转。               |
| skew(*x-angle*,*y-angle*)                                    | 定义沿着 X 和 Y 轴的 2D 倾斜转换。      |
| skewX(*angle*)                                               | 定义沿着 X 轴的 2D 倾斜转换。           |
| skewY(*angle*)                                               | 定义沿着 Y 轴的 2D 倾斜转换。           |
| perspective(*n*)                                             | 为 3D 转换元素定义透视视图。            |

## white-space

white-space 属性设置如何处理元素内的空白。

默认值：`normal`，是否继承：`✔️`

| 值         | 描述                                                         |
| :--------- | ------------------------------------------------------------ |
| `normal`   | 默认。空白会被浏览器忽略。                                   |
| `pre`      | 空白会被浏览器保留。其行为方式类似 HTML 中的 `<pre>` 标签。  |
| `nowrap`   | 文本不会换行，文本会在在同一行上继续，直到遇到 `<br/>` 标签为止。 |
| `pre-wrap` | 保留空白符序列，但是正常地进行换行。                         |
| `pre-line` | 合并空白符序列，但是保留换行符。                             |
| `inherit`  | 规定应该从父元素继承 `white-space` 属性的值。                |

## z-index

z-index 属性设置元素的堆叠顺序。拥有**更高堆叠顺序的元素总是会处于堆叠顺序较低的元素的前面**。

> - 元素可拥有负的 z-index 属性值。
> - Z-index 仅能在定位元素上奏效（例如 `position:absolute;`）

默认值：`auto`，是否继承：`✖️`

| 值        | 描述                                    |
| :-------- | :-------------------------------------- |
| `auto`    | 默认。堆叠顺序与父元素相等。            |
| *number*  | 设置元素的堆叠顺序。                    |
| `inherit` | 规定应该从父元素继承 z-index 属性的值。 |

## user-select

规定是否能选取元素的文本.

在 web 浏览器中，如果您在文本上双击，文本会被选取或高亮显示。此属性用于阻止这种行为。

默认值：`auto`，是否继承：`✖️`

| 值     | 描述                                   |
| :----- | :------------------------------------- |
| `auto` | 默认。如果浏览器允许，则可以选择文本。 |
| `none` | 防止文本选取。                         |
| `text` | 文本可被用户选取。                     |
| `all`  | 单击选取文本，而不是双击。             |

## cursor

`cursor` 属性规定要显示的光标的类型（形状）：该属性定义了鼠标指针放在一个元素边界范围内时所用的光标形状

默认值：`auto`，是否继承：`✔️`

| 值          | 描述                                                         |
| ----------- | ------------------------------------------------------------ |
| *url*       | 需使用的自定义光标的 URL。注释：请在此列表的末端始终定义一种普通的光标，以防没有由 URL 定义的可用光标。 |
| `default`   | 默认光标（通常是一个箭头）                                   |
| `auto`      | 默认。浏览器设置的光标。                                     |
| `crosshair` | 光标呈现为十字线。                                           |
| `pointer`   | 光标呈现为指示链接的指针（一只手）                           |
| `move`      | 此光标指示某对象可被移动。                                   |
| `e-resize`  | 此光标指示矩形框的边缘可被向右（东）移动。                   |
| `ne-resize` | 此光标指示矩形框的边缘可被向上及向右移动（北/东）。          |
| `nw-resize` | 此光标指示矩形框的边缘可被向上及向左移动（北/西）。          |
| `n-resize`  | 此光标指示矩形框的边缘可被向上（北）移动。                   |
| `se-resize` | 此光标指示矩形框的边缘可被向下及向右移动（南/东）。          |
| `sw-resize` | 此光标指示矩形框的边缘可被向下及向左移动（南/西）。          |
| `s-resize`  | 此光标指示矩形框的边缘可被向下移动（南）。                   |
| `w-resize`  | 此光标指示矩形框的边缘可被向左移动（西）。                   |
| `text`      | 此光标指示文本。                                             |
| `wait`      | 此光标指示程序正忙（通常是一只表或沙漏）。                   |
| `help`      | 此光标指示可用的帮助（通常是一个问号或一个气球）。           |

## font

### font-family

`font-family` 可以把多个字体名称作为一个“回退”系统来保存。如果浏览器不支持第一个字体，则会尝试下一个。

默认值：取决于浏览器，是否继承：`✔️`

| 值                             | 描述                                                |
| ------------------------------ | --------------------------------------------------- |
| *family-name* *generic-family* | 用于某个元素的字体族名称或/及类族名称的一个优先表。 |
| `inherit`                      | 规定应该从父元素继承字体系列。                      |

### font-style

默认值：`normal`，是否继承：`✔️`

| 值        | 描述                                   |
| --------- | -------------------------------------- |
| `normal`  | 默认值。浏览器显示一个标准的字体样式。 |
| `italic`  | 浏览器会显示一个斜体的字体样式。       |
| `oblique` | 浏览器会显示一个倾斜的字体样式。       |
| `inherit` | 规定应该从父元素继承字体样式。         |

### font-weight

默认值：`normal`，是否继承：`✔️`

| 值        | 描述                                                        |
| --------- | ----------------------------------------------------------- |
| `normal`  | 默认值。定义标准的字符。                                    |
| `bold`    | 定义粗体字符。                                              |
| `bolder`  | 定义更粗的字符。                                            |
| `lighter` | 定义更细的字符。                                            |
| `inherit` | 规定应该从父元素继承字体的粗细。                            |
| *number*  | 定义由粗到细的字符。400 等同于 normal，而 700 等同于 bold。 |

### font-variant

默认值：`normal`，是否继承：`✔️`

| 值           | 描述                                         |
| ------------ | -------------------------------------------- |
| `normal`     | 默认值。浏览器会显示一个标准的字体。         |
| `small-caps` | 浏览器会显示小型大写字母的字体。             |
| `inherit`    | 规定应该从父元素继承 font-variant 属性的值。 |

### font-stretch

对当前的 font-family 进行**伸缩变形**

默认值：`normal`，是否继承：`✔️`

| 值                                                           | 描述                                                         |
| :----------------------------------------------------------- | :----------------------------------------------------------- |
| `normal`                                                     | 默认值。把缩放比例设置为标准。                               |
| `wider`                                                      | 把伸展比例设置为更进一步的伸展值                             |
| `narrower`                                                   | 把收缩比例设置为更进一步的收缩值                             |
| `ultra-condensed` `extra-condensed` `condensed` `semi-condensed` `semi-expanded` `expanded` `extra-expanded` `ultra-expanded` | 设置 `font-family` 的缩放比例。`ultra-condensed` 是最宽的值，而 `ultra-expanded` 是最窄的值。 |

## background

`background` 简写属性在一个声明中设置所有的背景属性。

### background-color

**设置元素的背景颜色**

> 这种颜色会填充元素的内容、内边距和边框区域，扩展到元素边框的外边界（但不包括外边距）。如果边框有透明部分（如虚线边框），会透过这些透明部分显示出背景色。

默认值：`transparent`，是否继承：`✖️`

| 值            | 描述                                                   |
| :------------ | :----------------------------------------------------- |
| *color_name*  | 规定颜色值为颜色名称的背景颜色（比如 red）。           |
| *hex_number*  | 规定颜色值为十六进制值的背景颜色（比如 #ff0000）。     |
| *rgb_number*  | 规定颜色值为 rgb 代码的背景颜色（比如 rgb(255,0,0)）。 |
| `transparent` | 默认。背景颜色为透明。                                 |
| `inherit`     | 规定应该从父元素继承 background-color 属性的设置。     |

### background-position

**设置背景图像的起始位置**

默认值：`0% 0%`，是否继承：`✖️`

| 值                                                           | 描述                                                         |
| :----------------------------------------------------------- | :----------------------------------------------------------- |
| `top left` `top center` `top right` `center left` `center center` `center right` `bottom left` `bottom center` `bottom right` | 如果您仅规定了一个关键词，那么第二个值将是"center"。默认值：0% 0%。 |
| `x% y%`                                                      | 第一个值是水平位置，第二个值是垂直位置。左上角是 0% 0%。右下角是 100% 100%。如果您仅规定了一个值，另一个值将是 50%。 |
| `xpos ypos`                                                  | 第一个值是水平位置，第二个值是垂直位置。左上角是 0 0。单位是像素 (0px 0px) 或任何其他的 CSS 单位。如果您仅规定了一个值，另一个值将是50%。您可以混合使用 % 和 position 值。 |

### background-repeat

设置**是否及如何重复背景图像**

默认地，背景图像在水平和垂直方向上重复。

> 背景图像的位置是根据 background-position 属性设置的。如果未规定 background-position 属性，图像会被放置在元素的左上角。

默认值：`repeat`，是否继承：`✖️`

| 值        | 描述                                                |
| :-------- | :-------------------------------------------------- |
| repeat    | 默认。背景图像将在垂直方向和水平方向重复。          |
| repeat-x  | 背景图像将在水平方向重复。                          |
| repeat-y  | 背景图像将在垂直方向重复。                          |
| no-repeat | 背景图像将仅显示一次。                              |
| inherit   | 规定应该从父元素继承 background-repeat 属性的设置。 |

## mix-blend-mode

混合模式：mix-blend-mode 属性规定元素的内容应如何与其直接父背景混合

| 值            | 描述                                                         |
| ------------- | ------------------------------------------------------------ |
| `normal`      | 正常模式，混合色的像素会透过所用的颜色显示出来               |
| `multiply`    | 正片叠底模式，查看每个通道中的颜色信息，并将“基色”与“混合色”复合。 |
| `screen`      | 滤色模式，“滤色”模式与“正片叠底”模式正好相反，它将图像的“基色”颜色与“混合色”颜色结合起来产生比两种颜色都浅的第三种颜色 |
| `overlay`     | 叠加模式，“叠加”模式把图像的“基色”颜色与“混合色”颜色相混合产生一种中间色。 |
| `darken`      | 变暗模式，在“变暗”模式中，查看每个通道中的颜色信息，并选择“基色”或“混合色”中较暗的颜色作为“结果色”。 |
| `lighten`     | 变亮模式，在“变亮”模式中，查看每个通道中的颜色信息，并选择“基色”或“混合色”中较亮的颜色作为“结果色”。 |
| `color-dodge` | 颜色减淡模式，在“颜色减淡”模式中，查看每个通道中的颜色信息，并通过减小对比度使基色变亮以反映混合色。与黑色混合则不发生变化。 |
| `color-burn`  | 颜色加深模式，在“颜色加深”模式中，查看每个通道中的颜色信息，并通过增加对比度使基色变暗以反映混合色，如果与白色混合的话将不会产生变化。 |
| `hard-light`  | 强光模式，“强光”模式将产生一种强光照射的效果。如果“混合色”颜色“基色”颜色的像素更亮一些，那么“结果色”颜色将更亮；如果“混合色”颜色比“基色”颜色的像素更暗一些，那么“结果色”将更暗。 |
| `soft-light`  | 柔光模式，柔光”模式会产生一种柔光照射的效果。如果“混合色”颜色比“基色颜色的像素更亮一些，那么“结果色”将更亮；如果“混合色”颜色比“基色”颜色的像素更暗一些，那么“结果色”颜色将更暗，使图像的亮度反差增大。 |
| `difference`  | 差值模式，在“差值”模式中，查看每个通道中的颜色信息，“差值”模式是将从图像中“基色”颜色的亮度值减去“混合色”颜色的亮度值，如果结果为负，则取正值，产生反相效果。 |
| `exclusion`   | 排除模式，“排除”模式与“差值”模式相似，但是具有高对比度和低饱和度的特点。比用“差值”模式获得的颜色要柔和、更明亮一些。 |
| `hue`         | 色相模式，“色相”模式只用“混合色”颜色的色相值进行着色，而使饱和度和亮度值保持不变。 |
| `saturation`  | 饱和度模式，“饱和度”模式的作用方式与“色相”模式相似，它只用“混合色”颜色的饱和度值进行着色，而使色相值和亮度值保持不变。 |
| `color`       | 颜色模式，“颜色”模式能够使用“混合色”颜色的饱和度值和色相值同时进行着色，而使“基色”颜色的亮度值保持不变。“颜色”模式模式可以看成是“饱合度”模式和“色相”模式的综合效果。 |
| `luminosity`  | 亮度模式，“亮度”模式能够使用“混合色”颜色的亮度值进行着色，而保持“基色”颜色的饱和度和色相数值不变。其实就是用“基色”中的“色相”和“饱和度”以及“混合色”的亮度创建“结果色”。 |

| 分类名称         | 混合模式名称                            | 描述                                           |
| ---------------- | --------------------------------------- | ---------------------------------------------- |
| 基础混合模式     | `normal`                                | 利用图层透明度和不透明度来控制与下面的图层混合 |
| 降暗混合模式     | `darken`,`multiply`,`color-burn`        | 减色模式，滤掉图像中高亮色，从而达到图像变暗   |
| 加亮混合模式     | `screen`,`lighten`,`color-dodge`        | 加色模式，滤掉图像中暗色，从而达到图像变亮     |
| 融合混合模式     | `overlay`,`soft-light`,`hard-light`     | 用于不同程度的对上、下两图层的融合             |
| 变异混合模式     | `difference`,`exclusion`,`hard-light`   | 用于制作各种变异的图层混合                     |
| 色彩叠加混合模式 | `hue`,`saturation`,`color`,`luminosity` | 根据图层的色相，饱和度等基本属性，完成图层融合 |

## text

### text-align

**规定元素中的文本的水平对齐方式**

该属性通过指定行框与哪个点对齐，从而设置**块级元素内**文本的水平对齐方式。

- 默认值：
  - 如果 `direction` 属性是 `ltr`，则默认值是 `left`
  - 如果 `direction` 是 `rtl`，则为 `right`

- 是否继承：`✔️`

| 值        | 描述                                         |
| :-------- | :------------------------------------------- |
| `left`    | 把文本排列到左边。                           |
| `right`   | 把文本排列到右边。                           |
| `center`  | 把文本排列到中间。                           |
| `justify` | 实现两端对齐文本效果。                       |
| `inherit` | 规定应该从父元素继承 `text-align` 属性的值。 |

### text-decoration

> **规定添加到文本的修饰**
>
> 允许对文本设置某种效果，如加下划线。如果后代元素没有自己的装饰，祖先元素上设置的装饰会“延伸”到后代元素中。

默认值：`none`，是否继承：`✔️`

| 值             | 描述                                            |
| :------------- | :---------------------------------------------- |
| `none`         | 默认。定义标准的文本。                          |
| `underline`    | 定义文本下的一条线。                            |
| `overline`     | 定义文本上的一条线。                            |
| `line-through` | 定义穿过文本下的一条线。                        |
| `blink`        | 定义闪烁的文本。                                |
| `inherit`      | 规定应该从父元素继承 text-decoration 属性的值。 |

###  text-transform

> **控制文本的大小写**

默认值：`none`，是否继承：`✔️`

| 值           | 描述                                           |
| :----------- | :--------------------------------------------- |
| `none`       | 默认。定义带有小写字母和大写字母的标准的文本。 |
| `capitalize` | 文本中的每个单词以大写字母开头。               |
| `uppercase`  | 定义仅有大写字母。                             |
| `lowercase`  | 定义无大写字母，仅有小写字母。                 |
| `inherit`    | 规定应该从父元素继承 text-transform 属性的值。 |

### text-shadow

**给文本设置阴影**

默认值：`none`，是否继承：`✔️`

```css
text-shadow: h-shadow v-shadow blur color;
```

| 值         | 描述                             |
| :--------- | :------------------------------- |
| *h-shadow* | 必需。水平阴影的位置。允许负值。 |
| *v-shadow* | 必需。垂直阴影的位置。允许负值。 |
| *blur*     | 可选。模糊的距离。               |
| *color*    | 可选。阴影的颜色。               |

### text-indent

属性规定文本块中**首行文本的缩进**

**允许使用负值**。如果使用负值，那么首行会被缩进到左边。

默认值：*not specified*，是否继承：`✔️`

| 值        | 描述                                          |
| :-------- | :-------------------------------------------- |
| *length*  | 定义固定的缩进，默认值：0。                   |
| *%*       | 定义基于父元素宽度的百分比的缩进。            |
| `inherit` | 规定应该从父元素继承 `text-indent` 属性的值。 |

### letter-spacing

增加或减少字符间的空白（字符间距）

定义了在文本字符框之间插入多少空间。由于字符字形通常比其字符框要窄，指定长度值时，会调整字母之间通常的间隔。因此，`normal` 就相当于值为 0。

**允许使用负值**，这会让字母之间挤得更紧。

默认值：`normal`，是否继承：`✔️`

| 值        | 描述                                             |
| :-------- | :----------------------------------------------- |
| `normal`  | 默认。规定字符间没有额外的空间。                 |
| *length*  | 定义字符间的固定空间（允许使用负值）。           |
| `inherit` | 规定应该从父元素继承 `letter-spacing` 属性的值。 |

## list-style

### list-style-type





## backdrop-filter

为一个元素后面区域添加图形效果（如模糊或颜色偏移）。 因为它适用于元素背后的所有元素，为了看到效果，必须使元素或其背景至少部分透明。

默认值：`none`，是否继承：`✖️`

| 值         | 描述                                                         |
| :--------- | :----------------------------------------------------------- |
| `none`     | 默认值，没有效果。                                           |
| *blur(px)* | 给图像设置高斯模糊。"radius"一值设定高斯函数的标准差，或者是屏幕上以多少像素融在一起，所以值越大越模糊； |

## object-fit

用于指定应如何调整 `<img>` 或 `<video>` 的大小以适合其容器。

| 值           | 描述                                                         |
| :----------- | :----------------------------------------------------------- |
| `fill`       | 默认值，调整替换后的内容大小，以填充元素的内容框。如有必要，将拉伸或挤压物体以适应该对象。 |
| `contain`    | 缩放替换后的内容以保持其纵横比，同时将其放入元素的内容框。   |
| `cover`      | 调整替换内容的大小，以在填充元素的整个内容框时保持其长宽比。该对象将被裁剪以适应。 |
| `none`       | 不对替换的内容调整大小。                                     |
| `scale-down` | 调整内容大小就像没有指定内容或包含内容一样（将导致较小的具体对象尺寸） |

 