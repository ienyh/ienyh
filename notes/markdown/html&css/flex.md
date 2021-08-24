# `Flex` 布局笔记

在 `flex` 容器中默认存在两条轴，水平主轴 *(main axis)*  和垂直的交叉轴 *(cross axis)*，这是默认设置，当然也可以通过修改使垂直方向变为主轴，水平方向变为交叉轴。

`flex` 的属性分为**容器属性**和**项目属性**

### 容器属性

---

首先，实现 `flex` 布局需要先指定一个容器，任何一个容器都可以被指定为 `flex` 布局，这样容器内部的元素就可以使用 `flex` 来进行布局。

```css
.container {
    display: flex | inline-flex;       //可以有两种取值
}
```

分别生成一个块状或行内的 `flex` 容器盒子。简单说来，如果你使用块元素如 `<div>`，你就可以使用 `flex`，而如果你使用行内元素，你可以使用 `inline-flex`。

> **需要注意的是：当设置 `flex` 布局之后，子元素的 `float`、`clear`、`vertical-align` 的属性将会失效。**

有下面六种属性可以设置在容器上，它们分别是：

- `flex-direction`：决定主轴的方向(即项目的排列方向)
- `flex-wrap`：决定容器内项目是否可换行

- `flex-flow`：`flex-direction` 和 `flex-wrap` 的简写形式

- `justify-content`：定义了项目在主轴的对齐方式。

- `align-items`：定义了项目在交叉轴上的对齐方式

- `align-content`：定义了多根轴线的对齐方式，如果项目只有一根轴线，那么该属性将不起作用

#### 1. `flex-direction`

**决定主轴的方向(即项目的排列方向)**

```css
.container {
  display: flex;
  flex-direction: row | row-reverse | column | column-reverse;
}
```

- `row`：默认值，主轴为水平方向，起点在左端。
- `row-reverse`：主轴为水平方向，起点在右端
- `column`：主轴为垂直方向，起点在上沿
- `column-reverse`：主轴为垂直方向，起点在下沿

#### 2. `flex-wrap`

**决定容器内项目是否可换行**

默认情况下，项目都排在主轴线上，使用 `flex-wrap` 可实现项目的换行。

```css
.container {
  display: flex;
  flex-wrap: nowrap | wrap | wrap-reverse;
}
```

- `nowrap`：默认不换行，即当主轴尺寸固定时，当空间不足时，项目尺寸会随之调整而并不会挤到下一行。

- `wrap`：换行，项目主轴总尺寸超出容器时换行，第一行在上方
- `wrap-reverse`：换行，第一行在下方

#### 3. `flex-flow`

**是 `flex-direction` 和 `flex-wrap` 的简写形式**

```css
.container {
  display: flex;
  flex-flow: <flex-direction> || <flex-wrap>;
}
```

默认值为: `flex-flow: row nowrap`

####  4. `justify-content`

**定义了项目在主轴的对齐方式**

```css
.container {
  display: flex;
  justify-content: start | end | center | space-between | space-around;
}
```

- `flex-start`：默认值左对齐

- `end`：右对齐

- `center`：居中

- `space-between`：两端对齐，项目之间的间隔相等，即剩余空间等分成间隙。

- `space-around`：每个项目两侧的间隔相等，所以项目之间的间隔比项目与边缘的间隔大一倍。

- `space-evenly`：可以使每个项目之间和**元素距离边距的距离都相等**，但是兼容性比较差（iphone的SE上不支持，会失效，相当于没有设置）

  `justify-content: space-between` 可以利用伪元素方式，在第一个元素的前边和最后一个元素的后边分别加上一个不占空间的元素，这样就是 7 个元素，相同宽度的间隔空间数量为 6，因为左右两边元素不占空间，这样就用 `space-between` 实现了 `space-evenly` 的效果。

  ```scss
  .container {
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    justify-content: space-between;
    /* justify-content: space-evenly; */
    &:before,
    &:after {
      content: '';
      display: block;
    }
  }
  ```

  

#### 5. `align-items`

**定义了项目在交叉轴上的对齐方式**

```css
.container {
    align-items: flex-start | flex-end | center | baseline | stretch;
}
```

-  `stretch`：默认值，即如果项目未设置高度或者设为 auto，将占满整个容器的高度。
- `flex-start`：交叉轴的起点对齐
- `flex-end`：交叉轴的终点对齐
- `center`：交叉轴的中点对齐
- `baseline`: 项目的第一行文字的基线对齐

#### 6. `align-content`

**定义了多根轴线的对齐方式，如果项目只有一根轴线，那么该属性将不起作用**

```css
.container {
    align-content: flex-start | flex-end | center | space-between | space-around | stretch;
}
```

### 项目属性

---

有六种属性可运用在项目上：

- `order`

- `flex-basis`

- `flex-grow`

- `flex-shrink`

- `flex`

- `align-self`

#### 1. `order`：定义项目在容器中的排列顺序，数值越小，排列越靠前，默认值为 0



#### 2. `flex-basis`：定义了在分配多余空间之前，项目占据的主轴空间，浏览器根据这个属性，计算主轴是否有多余空间



#### 3. `flex-grow`：定义项目的放大比例



#### 4. `flex-shrink`：定义了项目的缩小比例



#### 5. `flex`：`flex-grow`, `flex-shrink` 和 `flex-basis`的简写



#### 6. `align-self`: 允许单个项目有与其他项目不一样的对齐方式

