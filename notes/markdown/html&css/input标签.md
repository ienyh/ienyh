# input



## type



| 属性     | 意义                                         | 例子                                      |
| -------- | -------------------------------------------- | ----------------------------------------- |
| color    | 颜色选择器                                   | `<input type='color'>`                    |
| password | 改格式用于输入密码，输入的数据会变成实心黑球 | `<input type='password'>`                 |
| number   |                                              | `<input type='number' max="100" min="0">` |



### `type="text"`

### `type="password"`

### `type="number"`

该输入框只能输入数字，还可以使用 `list` 设置下拉框选择

- min 最小值
- max 最大值
- step 上下调节的步长
- value 初始数字

### `type="range"`

该输入框用于选取一定范围内的数字，滑动选取。属性与 number 一致

### `type="radio"`

表示单选框，多个多选框必须使用同一个 `name`

特有属性有 `checked` `required` `value`

### `type="email|tel|url"`

代表输入框输入的内容分别为邮箱地址、电话号码、网址。

特有属性有 `list` `maxlength` `pattern` `placeholder` `readonly` `required` `size` `value`

### `type="datetime|datetime-local|date|month|week|time"`

表示输入时间时期等

特有属性有 `list` `max` `min` `readonly` `required` `step` `value`

### `type="color"`

表示获取输入的颜色

### `type="search"`

表示搜索框，并没有什么用

### `type="file"`

表示**上传文件**，特有属性有

- `accept` 
- `required` 

使用此属性时，父元素的表单编码类型必须为可传输文件的 `multipart/form-data`





## value

在输入框中设置一个默认值

## placeholder

设置一段提示文字

## required

要求用户必须输入

## pattern

输入验证的正则表达式

## readonly、disabled

- readonly 显示上**没有**区别，但无法操作输入框，传输表单时输入框里的数据**会**被传输

- disabled 显示上**有**区别，输入框变灰，无法操作输入框，传输表单时输入框里的数据**不会**被传输

## list

下拉框选择

`list` 属性的值是一个 `<datalist>` 元素的 `id` 值，设置后，用户点击输入框时会显示出 `datalist` 中的数据供用户选择。

```html
<input list="namelist">

<datalist>
	<option value="hello"></option>
  <option value="world"></option>
</datalist>
```

