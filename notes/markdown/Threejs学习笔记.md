# Three.js

> Three.js 学习笔记，来自：
>
> - [https://gitchat.csdn.net/columnTopic/5b320731bebc3c4bd7e725cb?utm_source=juhe](https://gitchat.csdn.net/columnTopic/5b320731bebc3c4bd7e725cb?utm_source=juhe)
> - [https://blog.csdn.net/qq_30100043/article/category/7003591?utm_source=juhe](https://blog.csdn.net/qq_30100043/article/category/7003591?utm_source=juhe)
> - http://www.webgl3d.cn/Three.js/
> - [https://zhuanlan.zhihu.com/p/95463367](https://zhuanlan.zhihu.com/p/95463367)

## 前面

### 什么是 WebGL？

WebGL（Web 图形库）是一种 JavaScript API，用于在任何兼容的 Web 浏览器中呈现交互式 3D 和 2D 图形，而无需使用插件。WebGL 通过引入一个与 OpenGL ES 2.0 紧密相符合的 API，可以在 HTML5 `<canvas>` 元素中使用（简介引自 MDN）。

以我的理解，WebGL 给我们提供了一系列的图形接口，能够让我们通过 JavaScript 去使用 GPU 来进行浏览器图形渲染的工具。

### 什么是 Three.js？

Three.js 是一款 webGL 框架，由于其易用性被广泛应用。Three.js 在 WebGL 的 API 接口基础上，又进行的一层封装。它是由居住在西班牙巴塞罗那的程序员 Ricardo Cabbello Miguel 所开发，他更为人知的网名是 Mr.doob。

Three.js 以简单、直观的方式封装了 3D 图形编程中常用的对象。Three.js 在开发中使用了很多图形引擎的高级技巧，极大地提高了性能。另外，由于内置了很多常用对象和极易上手的工具，Three.js 的功能也非常强大。最后，Three.js 还是完全开源的，你可以在 GitHub 上找到它的源代码，并且有很多人贡献代码，帮助 Mr.doob 一起维护这个框架。

#### WEBGL 和 Three.js 的关系

WebGL 原生 API 是一种非常低级的接口，而且还需要一些数学和图形学的相关技术。对于没有相关基础的人来说，入门真的很难，Three.js 将入门的门槛降低了一大截，对 WebGL 进行封装，简化我们创建三维动画场景的过程。只要你有一定的 JavaScript 基础，有一定的前端经验，我坚信，用不了多长时间，三维制作会变得很简单。

> 用最简单的一句话概括：WebGL 和 Three.js 的关系，相当于 JavaScript 和 jQuery 的关系。

#### 功能概述

Three.js 作为 WebGL 框架中的佼佼者，由于它的易用性和扩展性，使得它能够满足大部分的开发需求，Three.js 的具体功能如下：

1. **Three.js 掩盖了 3D 渲染的细节**：Three.js 将 WebGL 原生 API 的细节抽象化，将 3D 场景拆解为网格、材质和光源（即它内置了图形编程常用的一些对象种类）。
2. **面向对象**：开发者可以使用上层的 JavaScript 对象，而不是仅仅调用 JavaScript 函数。
3. **功能非常丰富**：Three.js 除封装了 WebGL 原始 API 之外，Three.js 还包含了许多实用的内置对象，可以方便地应用于游戏开发、动画制作、幻灯片制作、髙分辨率模型和一些特殊的视觉效果制作。
4. **速度很快**：Three.js 采用了 3D 图形最佳实践来保证在不失可用性的前提下，保持极高的性能。
5. **支持交互**：WebGL 本身并不提供拾取（Picking）功能（即是否知道鼠标正处于某个物体上）。而 Three.js 则固化了拾取支持，这就使得你可以轻松为你的应用添加交互功能。
6. **包含数学库**：Three.js 拥有一个强大易用的数学库，你可以在其中进行矩阵、投影和矢量运算。
7. **内置文件格式支持**：你可以使用流行的 3D 建模软件导出文本格式的文件，然后使用 Three.js 加载，也可以使用 Three.js 自己的 JSON 格式或二进制格式。
8. **扩展性很强**：为 Three.js 添加新的特性或进行自定义优化是很容易的事情。如果你需要某个特殊的数据结构，那么只需要封装到 Three.js 即可。
9. **支持HTML5 Canvas**：Three.js 不但支持 WebGL，而且还支持使用 Canvas2D、Css3D 和 SVG 进行渲染。在未兼容 WebGL 的环境中可以回退到其它的解决方案。

### 😀 Hello Three.js!

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>😀 Hello Three.js!</title>
    <style>
      body {
        margin: 0;
      }
      canvas {
        width:100%;
        height: 100%;
        display: block;
      }
    </style>
  </head>
  <body onload="init()">
    <script src="https://cdn.bootcss.com/three.js/92/three.js"></script>
    <script>
      function init () {
        const scene = new THREE.Scene(); // 实例化场景
        
        const light = new THREE.SpotLight(0xffffff);
        light.position.set(20, 20, 20);
        scene.add(light); // 添加点光源

        const camera = new THREE.PerspectiveCamera(
          45,
          window.innerWidth / window.innerHeight,
          1,
          200
        ); // 实例化一个透视相机（视野，显示口的宽高比，近裁剪面，远裁剪面）
        camera.position.set(1, 1, 15);

        const geometry = new THREE.BoxGeometry(4, 4, 4); // 创建几何体
        const material = new THREE.MeshStandardMaterial({ color: 0xffffff });
        const mesh = new THREE.Mesh(geometry, material);
        mesh.rotation.x = 0.3;
        scene.add(mesh);

        const renderer = new THREE.WebGLRenderer();
        renderer.setSize(window.innerWidth, window.innerHeight); // 设置宽和高
        document.body.appendChild(renderer.domElement); // 添加到 dom
        renderer.render(scene, camera);

        function animate () {
          requestAnimationFrame(animate); // 循环调用函数
          mesh.rotation.x += 0.01; // 每帧网格模型的沿 x 轴旋转 0.01 弧度
          mesh.rotation.y += 0.01; // 每帧网格模型的沿 y 轴旋转 0.02 弧度
          renderer.render(scene, camera); //渲染界面
        }
        animate();
      }
    </script>
  </body>
</html>

```

![image-20210729095537890](D:\chenyh\ienyh\resourses\hellothreejs.png)

### 😆 Start

使用 Three.js 显示创建的内容，我们必须需要的三大件是：**渲染器**、**相机**和**场景**。

3D 应用的组件结构，图片来自 [discoverthreejs.com](https://link.juejin.cn/?target=https%3A%2F%2Fdiscoverthreejs.com%2Fbook%2Ffirst-steps%2Ffirst-scene%2F)

![image.png](D:\chenyh\ienyh\resourses\threejs-struct.jpg)



Three.js 应用架构，图片来自 [threejsfundamentals.org](https://link.juejin.cn/?target=https%3A%2F%2Fthreejsfundamentals.org%2Fthreejs%2Flessons%2Fthreejs-fundamentals.html)

![image.png](D:\chenyh\ienyh\resourses\threejs-struct-2.jpg)

认识 WebGL 的坐标系统，图片来自 [https://gitchat.csdn.net/columnTopic/5b320b4abebc3c4bd7e7283a?utm_source=juhe](https://gitchat.csdn.net/columnTopic/5b320b4abebc3c4bd7e7283a?utm_source=juhe)

![threejs01](D:\chenyh\ienyh\resourses\threejs01.jpg)

### requestAnimationFrame()

`requestAnimationFrame()` 参数是将要被调用函数的函数名，`requestAnimationFrame()` 调用一个函数不是立即调用而是向浏览器发起一个执行某函数的请求， 什么时候会执行由浏览器决定，一般默认保持 60FPS 的频率，大约每 16.7ms 调用一次 `requestAnimationFrame()` 方法指定的函数，60FPS 是理想的情况下，如果渲染的场景比较复杂或者说硬件性能有限可能会低于这个频率。

## Renderer 渲染器

```javascript
const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
```

| 参数      | 值                                               |
| --------- | ------------------------------------------------ |
| antialias | 是否执行抗锯齿。默认为**false**.                 |
| alpha     | canvas 是否包含 alpha (透明度)。默认为 **false** |

## Scene 场景

> 我们都知道 DOM 的结构是树形结构的，Three.js 也遵循这样的理念，将所有可以添加到场景内的结构梳理成了一种树形的结构，方便我们能够更好的理解 Three.js。

### THREE.Object3D

在 Three.js 中，为了方便操作，将所有 3D 对象共同的内容抽象成了一个基类，就是 `THREE.Object3D`

```javascript
obj instanceof THREE.Object3D // 继承至返回 true 否则返回 false
```

### 修改 3D 对象的位置，大小和转向

#### 1、位置

我们可以通过设置模型的 `position` 属性来修改模型的当前位置

- 单独设置每个方向的属性:

  ```javascript
  mesh.position.x = 3; // 将模型的位置调整到x正轴距离原点为 3 的位置。
  mesh.position.y += 5; // 将模型的y轴位置以当前的位置向上移动 5 个单位。
  mesh.position.z -= 6;
  ```

- `mesh.position.set()` 一次性设置所有方向上的属性

  ```javascript
  mesh.position.set(3, 5, -6);  // 直接将模型的位置设置在 x 轴为 3，y 轴为 5，z 轴为 -6 的位置
  ```

- `mesh` 的 `position` 属性是一个 `THREE.Vector3` 三维向量对象

  ```javascript
  mesh.position = new THREE.Vector3(3, 5, -6); // 上面的设置位置也可以通过这样设置。
  ```

#### 2、大小

通过设置模型的 scale 属性来调整大小

- 单独设置每个方向的缩放:

  ```javascript
  mesh.scale.x = 2; // 模型沿x轴放大一倍
  mesh.scale.y = 0.5; // 模型沿y轴缩小一倍
  mesh.scale.z = 1; // 模型沿z轴保持不变
  ```

- `mesh.scale.set()` 设置所有大小属性

  ```javascript
  mesh.scale.set(2, 2, 2); // 每个方向等比放大一倍
  mesh.scale.set(0.5, 0.5, 0.5); // 每个方向等比缩小一倍
  ```

- `mesh` 的 `scale` 属性也是一个 `THREE.Vector3` 三维向量对象

  ```javascript
  mesh.scale = new THREE.Vector3(2, 2, 2); // 每个方向都放大一倍
  ```

#### 3、转向

设置模型的 rotation 属性进行旋转

> **注意**：旋转的单位**是弧度而不是角度**

- 单独设置每个轴的旋转

  ```javascript
  mesh.rotation.x = Math.PI; //模型沿 x 旋转 180 度
  mesh.rotation.y = Math.PI * 2; //模型沿 y 轴旋转 360 度，跟没旋转一样的效果。。。
  mesh.rotation.z = - Math.PI / 2; //模型沿 z 轴逆时针旋转 90 度
  ```

- 使用 `mesh.rotation.set()` 方法重新赋值

  ```javascript
  mesh.rotation.set(Math.PI, 0, - Math.PI / 2); // 旋转效果和第一种显示的效果相同
  ```

  正常模型的旋转方式是按照 XYZ 依次旋转的，如果你想先旋转其他轴，可以设置第四个参数（*string*），有可能的情况为：YZX、ZXY、XZY、YXZ 和 ZYX。

  ```javascript
  mesh.rotation.set(Math.PI, 0, - Math.PI / 2, "YZX"); // 先沿 y 轴旋转 180 度，再沿 z 轴旋转 0 度，最后沿 x 轴逆时针旋转 90 度
  ```

- 模型的 `rotation` 属性其实是一个欧拉角对象 `THREE.Euler`

  ```javascript
  mesh.rotation = new THREE.Euler(Math.PI, 0, - Math.PI / 2, "YZX"); 
  ```

## Geometry 几何体

Geometry 和 BufferGeometry

- BufferGeometry 存储的都是一些原始的数据，性能比 Geometry 高，很适合存储一些放入场景内不需要再额外操作的模型。
- Geometry 的优势刚好相反，Geometry 比 BufferGeometry 更友好，使用了 Three.js 提供的 `THREE.Vector3` 或者 `THREE.Color` 这样的对象来存储数据（顶点位置、面、颜色等），这些对象易于阅读和编辑，但效率低于 BufferGeometry 使用的类型化数组。

Geometry 和 BufferGeometry 这两种几何体类型可以互转

- `Geometry` => `BufferGeometry`

  ```javascript
  const geo = new THREE.Geometry(); 
  const bufferGeo = geo.fromBufferGeometry(geometry);
  ```

- `BufferGeometry` => `Geometry`

  ```javascript
  const bufferGeo = new THREE.BufferGeometry(); 
  const geo = bufferGeo.fromGeometry(bufferGeometry);
  ```

### Three 内置的几何体

#### 🧊 立方体 BoxGeometry 和 BoxBufferGeometry

```javascript
BoxGeometry(width, height, depth, widthSegments, heightSegments, depthSegments); // BoxGeometry 构造函数
```

- width {number} 沿 X 轴的宽度，默认值为1
- height {number} 沿 Y 轴的高度，默认值为1
- depth {number} 沿 Z 轴的深度，默认值为1
- widthSegments {number} 可选，沿着边的宽度的分割面的数量。默认值为1
- heightSegments {number} 可选，沿着边的高度的分割面的数量。默认值为1
- depthSegments {number} 可选，沿着边的深度的分割面的数量。缺省值是1

```javascript
const geometry = new THREE.BoxGeometry(8, 8, 8); // 创建几何体
const material = new THREE.MeshStandardMaterial({ color: 0xffffff });
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);
```

#### 🟡 圆 CircleGeometry 和 CircleBufferGeometry

#### 🔺 圆锥 ConeGeometry 和 ConeBufferGeometry

#### 🔋 圆柱 CylinderGeometry 和 CylinderBufferGeometry

#### ⚽ 球 SphereGeometry 和 SphereBufferGeometry

#### ⬜ 平面 PlaneGeometry 和 SphereBufferGeometry

```javascript
PlaneGeometry(width, height, widthSegments, heightSegments); // PlaneGeometry 构造函数
```

- width {number} 沿 X 轴的宽度。默认值为1
- height {number} 沿着 Y 轴的高度。默认值为1
- widthSegments {number} 宽度的分段数，可选。默认值为1
- heightSegments {number} 高度的分段数，可选。默认值为1

```javascript
const planeGeometry = new THREE.PlaneGeometry(15, 1, 32);
const planeMaterial = new THREE.MeshBasicMaterial({ color: 0xf0f0f0, side: THREE.DoubleSide });
const plane = new THREE.Mesh(planeGeometry, planeMaterial);
scene.add(plane);
```

#### ⚪ 圆环 TorusGeometry 和 TorusBufferGeometry

#### 文本几何体 TextGeometry



```javascript
const loader = new THREE.FontLoader();
loader.load(
  "three/examples/fonts/helvetiker_regular.typeface.json", 
  font => {
    const fontGeometry = new THREE.TextGeometry("Hello Three.js", {
      font: font,
      size: 80,
      height: 5,
      curveSegments: 12,
      bevelEnabled: true,
      bevelThickness: 10,
      bevelSize: 8,
      bevelSegments: 5,
    });
    console.log(fontGeometry);
  }
);
```





### 📑 常用方法

`Geometry` 和 `BufferGeomety` 内置了一些常用的方法

#### 🔹 `center()`

此方法为居中方法，可以根据边界框居中几何图形。

#### 🔹 `computeBoundingBox()`

此方法可以计算几何的边界框，方法调用后，会更新 `Geometry.boundingBox` 属性，我们可以通过 `Geometry.boundingBox` 属性获取到一个包围几何体的立方体的每个轴向的最大值和最小值。

#### 🔹 `dispose()`

将几何体从内存中删除，这个方法必须记得使用。如果频繁的删除模型，一定要记得将几何体从内存中删除掉。

## Material 材质

Material 材质，就是就是物体看起来是什么质地，材质可以看成是材料和质感的结合。

在渲染程序中，它是表面各种可视属性的结合，这些可视属性是指表面的**色彩**、**纹理**、**光滑度**、**透明度**、**反射率**、**折射率**、**发光度**等。

### 1、基本属性和方法

#### 🔹 `needsUpdate`

如果修改了 Material 内的内容，需要将 `needsUpdate` 属性设置为 `true`，Three.js 会在下一帧里将修改内容同步到 WebGL 的显存内。切记不要在 `requestAnimationFrame()` 方法内更新，会浪费性能，只需要在更新 Material 属性后设置一次即可。

#### 🔹 `side`

定义当前**面的哪个方向**会被渲染：

- `THREE.FrontSide` 默认值，只渲染正面；
- `THREE.BackSide` 只渲染背面；
- `THREE.DoubleSide` 正面和背面都会渲染。

####  🔹 `transparent`

定义了材质**是否可以透明**，当设置此属性为 `true `后，可以通过设置 `opacity` 来调整透明度，默认为 `false`。

对于透明需要材质进行特殊处理，在不透明的物体渲染完成后再渲染透明物体。

#### 🔹 `opacity`

定义材质的**透明度**，必须将材质的 `transparent` 设置为 `true` 才可使透明度管用。取值范围为 `0.0` 到 `1.0`。默认值是 `1.0`，也就是默认不透明。

#### 🔹 `map`

配置当前材质的纹理贴图，是一个 `THREE.Texture` 对象，这是大部分材质都会有的属性，只有个别材质如 `LineBasicMaterial`（线材质）等没有这个属性。

##### 配置纹理贴图

1. 使用 `THREE.TextureLoader` 进行生成纹理对象

```javascript
const texture = new THREE.TextureLoader().load("./assets/texture01.jpg");
material.map = texture
```

2. 直接进行实例化一个 `THREE.Texture` 对象：该构造函数的参数可以是 `img`、`canvas` 和 `video`

```javascript
const texture = new THREE.Texture(canvas);
material.map = texture; // 将纹理赋值给材质
```

#### 🔹 `wireframe`

**是否将模型渲染成线框**，默认为 `false`。个别材质没有这个属性。

#### 🔹 `repeat`

纹理在整个表面水平方向和垂直方向重复多少次，也会受纹理重复设置的影响，设置方式为：

```javascript
const texture = new THREE.TextureLoader().load("textures/water.jpg");
texture.wrapS = THREE.RepeatWrapping; // 设置水平方向无限循环
texture.wrapT = THREE.RepeatWrapping; // 设置垂直方向无限循环
texture.repeat.set(4, 4); // 水平方向和垂直方向都重复四次
```

#### 🔹 `dispose()`

用于将材质从内存中删除，在不需要使用当前材质时使用，但不会将材质的纹理贴图删除，如果需要将纹理贴图也删除，需要调用 `material.map.dispose()`。

### 2、设置颜色的方法

```javascript
const material = new THREE.MeshBasicMaterial({color:0x00ffff}); //设置初始的颜色为浅蓝色
material.color.set(0xff00ff); // 将颜色修改为紫色
```

我们也可以直接赋值一个新的 `THREE.Color` 对象

```javascript
material.color = new THREE.Color(0xff00ff);
```

我们可以通过 `new THREE.Color` 创建一个颜色对象，Three.js 支持的颜色书写方式比较丰富，如：

```javascript
// 直接传入十六进制数或者字符串
const color = new THREE.Color(0xff0000);
const color = new THREE.Color("#ff0000");

// RGB 字符串
const color = new THREE.Color("rgb(255, 0, 0)");
const color = new THREE.Color("rgb(100%, 0%, 0%)");

// 支持一百四十多中颜色名称
const color = new THREE.Color('skyblue');

// HSL 字符串
const color = new THREE.Color("hsl(0, 100%, 50%)");

// 支持 RGB 值设置在 0 到 1 之间的方式
const color = new THREE.Color(1, 0, 0);

material.color = color;
```

### 3、添加光

MeshBasicMaterial 不会受光的影响，即使有光也不会影响它的效果，有些材质会受到光源的影响。

这里先加上光，测试下面各种材质的效果

```javascript
// 创建灯光
function initLight() {
    const light = new THREE.DirectionalLight(0xffffff); // 添加了一个白色的平行光
    light.position.set(20, 50, 50); // 设置光的方向
    scene.add(light); // 添加到场景
    // 添加一个全局环境光
    scene.add(new THREE.AmbientLight(0x222222));
}
```

### 4、内置常用材质

#### 🔹 MeshBasicMaterial 基础材质

为几何体赋予一种简单的颜色，或者显示几何体的线框

#### 🔹 MeshNormalMaterial 法向材质

根据物体表面的法向量计算颜色

#### 🔹 LineBasicMaterial 线条材质

可以用于 THREE.Line 几何体，从而创建着色的直线

#### 🔹 LineDashedMaterial 虚线材质

类似与基础材质，但可以创建虚线效果

#### 🔹 MeshLambertMaterial 兰伯特材质

这种材质会对光有反应，但是不会出现高光，可以模拟一些粗糙的材质的物体，比如木头或者石头。

#### 🔹 MeshPhongMaterial 高光材质

这种材质具有高光效果，可以模拟一些光滑的物体的材质效果，比如油漆面，瓷瓦等光滑物体。

#### 🔹 MeshStandardMaterial 基于物理的渲染（PBR）材质

这种材质基于物理的渲染（PBR）材质，生成的材质效果更佳，但是相应也占用更多的计算量。这种材质我们可以定义它的粗糙度来确定反光效果，经常用于模拟金属的质感，使金属质感更加真实。

```javascript
geometry = new THREE.BoxGeometry(2, 2, 2); // 创建几何体
material = new THREE.MeshPhongMaterial({ color: 0x00ffff }); // 创建材质
material.metalness = 0.1; // 设置的值的范围为 0-1，值越小，材质越光滑，高光越明显
material.metalnessMap = 0.1; // 设置的值的范围为 0-1，值越大，越有生锈金属的质感，值越小反光越清晰
mesh = new THREE.Mesh(geometry, material); // 创建网格
scene.add(mesh); // 将网格添加到场景
```

## Light 光照

### Light()

不同种类的光照，实例化时，可以接受两个传值，分别是

***Light(color: Integer, intensity: Float)*** 

注意，并不是直接调用该构造函数（而是使用派生类之一）。

- **光照颜色**（默认值是 `0xffffff` 白色）
- **光照强度**（默认值是 `1.0` ）。

Light 实例的方法：

- ***light.copy(source: Light): Light***

  从 *source* 复制 *color*, *intensity* 的属性值到当前光源对象中

- ***light.toJSON(meta: Object): Object***

  以 JSON 格式返回光数据

```javascript
const light = new THREE.DirectionalLight(0xffffff, 1.0); // 添加了一个白色的平行光
light.color.set(0x000000); // 将光照的颜色修改为黑色
light.intensity = 2.0; // 光照的强度改为默认的两倍
scene.add(light); // 添加光到场景中
```

### 常用的几种光照

#### 🔹 AmbientLight 环境全局光

环境光是经过多次反射而来的光，环境光源放出的光线被认为来自任何方向，物体无论法向量如何，都将表现为同样的明暗程度。

> **环境光通常不会单独使用，通过使用多种光源能够实现更真实的光效**

```javascript
const ambientLight = new THREE.AmbientLight(0x222222); // 创建了一个环境全局光
```

#### 🔹 DirectionalLight 平行光

平行光是以特定的方向发射的光。它产生的光都是**平行的**状态，主要用于模拟太阳光线。

平行光没有衰减，被平行光照亮的整个区域接受到的光强是一样的。

```javascript
const directionLight = new THREE.DirectionalLight(0xffffff); // 添加了一个白色的平行光
```

#### 🔹 PointLight 点光源

点光源在传播过程中有衰弱，接近点光源光就强一些，远离点光源光就弱一些

实例化点光源支持四个参数：**光照颜色**、**光照强度**、**照射范围**和**衰减度**

```javascript
const pointLight = new THREE.PointLight(0xff0000, 1, 100, 2); // 创建一个白色的点光源
```

#### 🔹 SpotLight 聚光灯光源

类似舞台上的聚光灯效果，光源的光线从一个锥体中射出，在被照射的物体上产生聚光的效果。聚光灯在传播过程是有衰弱的。

```javascript
const spotLight = new THREE.SpotLight(0xffffff); // 创建一个白色光照
```

#### 🔹 HemisphereLight 室外光源

这个光源主要是为了模拟在户外的环境光效果，比如在蓝天绿地的户外，模型下面会显示出来绿色的环境光，而上方则会受到蓝天的影响而颜色偏蓝。

实例化室外光源支持三个参数：**天空的颜色**，**地面的颜色**，和**光的强度**。

```javascript
const hemisphereLight = new THREE.HemisphereLight(0xffffbb, 0x080820, 1);
```

### 添加阴影效果

> 不是所有的光源都能够产生阴影，只有一部分光源可以，例如通过 `THREE.PointLight` (点光源)、`THREE.SpotLight` (聚光源)和 `THREE.DirectionalLight` (平行光光源)定义的光源是能够产生阴影的。

1. 首先，需要设置渲染器可以渲染阴影效果：

```javascript
renderer.shadowMap.enabled = true;
```

2. 实例化灯光时，需要设置灯光渲染阴影：

```javascript
directionalLight = new THREE.DirectionalLight("#ffffff");
directionalLight.castShadow = true; // 设置平行光投射投影
```

3. 最后，还需要设置哪些模型需要**产生阴影 `castShadow`** 和哪些模型可以**接收阴影 `receiveShadow`**

```javascript
geometry.castShadow = true; // 开启阴影

// 创建平面
const planeGeometry = new THREE.PlaneGeometry(50, 50); // 宽、高
const planeMaterial = new THREE.MeshLambertMaterial({ color: 0xf0f0f0, side: THREE.DoubleSide }); // 注意这里平面的材质一定要可以接受光的影响
const planeMesh = new THREE.Mesh(planeGeometry, planeMaterial);
planeMesh.receiveShadow = true;
scene.add(planeMesh);
```

## Camera 照相机

我们常用的相机有**正交相机** `OrthographicCamera` 和**透视相机** `PerspectiveCamera` 两种，用于来捕获场景内显示的物体模型。

相机都继承自 `THREE.Object3D` 对象，所以 `position` 位置属性、`rotation` 旋转和 `scale` 缩放属性，都可以直接对相机对象设置。还可以使用 `add()` 方法，给相机对象添加子类，移动相机它的子类也会跟随着一块移动。

### Camera 的通用属性

#### 🔹 `target` 焦点属性和 `lookAt()` 方法

`target` 和 `lookAt()` 都是**调整相机的朝向**，可以设置一个 `THREE.Vector3`（三维向量）点的位置

```javascript
camera.target = new THREE.Vector3(0, 0, 0); // 朝向原点
camera.lookAt(new THREE.Vector3(0, 0, 0));
```

我们也可以将相机的朝向改为模型网格 mesh 的 position，如果物体的位置发生了变化，相机的焦点方向也会跟随变动：

```javascript
const mesh = new THREE.Mesh(geometry, material);
camera.target = mesh.position;
camera.lookAt(mesh.position);
```

#### 🔹 `getWorldDirection()`

可以获取当前位置到 `target` 位置的世界中的方向。方向也可以使用 `THREE.Vector3` 对象表示，所以该方法**返回一个三维向量**。

### 常用的 Camera 对象

#### 🔹 OrthographicCamera 正交相机

使用正交相机 OrthographicCamera 渲染出来的场景，所有的物体和模型都按照它**固有的尺寸和精度显示**，一般使用在工业要求精度或者 2D 平面中，因为它能完整的显示物体应有的尺寸。

![OrthographicCamera](D:\chenyh\ienyh\resourses\OrthographicCamera.jpg)

只要确定 top、left、right、bottom、near 和 far 六个值，我们就能确定当前相机捕获场景的区域，在这个区域外面的内容不会被渲染

```javascript
const camera = new THREE.OrthographicCamera(left, right, top, bottom, near, far);
```

正常情况**相机显示的内容**需要和**窗口显示的内容**为**同比例**才能够显示没有被拉伸变形的效果：

```javascript
const frustumSize = 1000; // 设置显示相机前方 1000 高的内容
const aspect = window.innerWidth / window.innerHeight; // 计算场景的宽高比
const orthographicCamera = new THREE.OrthographicCamera(
  frustumSize * aspect / - 2, 
  frustumSize * aspect / 2, 
  frustumSize / 2, 
  frustumSize / - 2, 
  1, 
  2000
); // 根据比例计算出 left，top，right，bottom 的值
```

正交相机定义后可以动态修改属性，但修改完以后需要**调用相机 `updateProjectionMatrix()` 方法来更新相机显存里面的内容**

```javascript
const frustumSize = 1000; // 设置显示相机前方 1000 高的内容
const aspect = window.innerWidth / window.innerHeight; // 计算场景的宽高比
const orthographicCamera = new THREE.OrthographicCamera(); // 实例化一个空的正交相机
orthographicCamera.left = frustumSize * aspect / - 2; // 设置 left 的值
orthographicCamera.right = frustumSize * aspect / 2; // 设置 right 的值
orthographicCamera.top = frustumSize / 2; // 设置 top 的值
orthographicCamera.bottom = frustumSize / - 2; // 设置 bottom 的值
orthographicCamera.near = 1; // 设置 near 的值
orthographicCamera.far = 2000; // 设置 far 的值

orthographicCamera.updateProjectionMatrix(); // 注意：最后一定要调用该方法进行更新
```

由于**浏览器的窗口可以随意修改**，我们有时候需要**监听浏览器窗口的变化**，然后**获取到最新的宽高比**，再**重新设置**相关属性：

```javascript
// 写到监听方法里
const aspect = window.innerWidth / window.innerHeight;   // 重新获取场景的宽高比
orthographicCamera.left = frustumSize * aspect / - 2;    // 设置 left 的值
orthographicCamera.right = frustumSize * aspect / 2;     // 设置 right 的值
orthographicCamera.top = frustumSize / 2;                // 设置 top 的值
orthographicCamera.bottom = frustumSize / - 2;           // 设置 bottom 的值
orthographicCamera.updateProjectionMatrix();             // 注意：一定要调用该方法进行更新
renderer.setSize(window.innerWidth, window.innerHeight); // 显示区域尺寸变了，我们也需要修改渲染器的比例
```

#### 🔹 PerspectiveCamera 透视相机

透视相机是最常用的也是模拟人眼视角的一种相机，它所渲染生成的页面是一种**近大远小**的效果。

![PerspectiveCamera](D:\chenyh\ienyh\resourses\PerspectiveCamera.jpg)

1. 首先，我们需要确定一个 `fov` 值（见上图右边部分），这个值是用来**确定相机前方的垂直视角**，像人眼一样，**角度越大，视野越大，我们能够查看的内容就越多**。
2. 我们又确定了一个**渲染的宽高比** `aspect`，这个宽高比最好设置成**页面显示区域的宽高比**，这样我们查看生成画面才不会出现拉伸变形的效果，这时，我们可以确定前面生成内容的范围是一个四棱锥的区域。
3. 我们需要确定的就是相机渲染范围的最小值 `near` 和最大值 `far`，注意，这两个值都是**距离相机的距离**（*确定完数值后，相机会显示的范围就是一个近小远大的四棱柱的范围，我们能够看到的内容都是在这个范围内的*）

```javascript
const camera = new THREE.PerspectiveCamera(45,  window.innerWidth / window.innerHeight, 0.1, 200); // 创建 PerspectiveCamera 相机（fov，aspect，near，far）
```

定义后同样可以动态修改属性，注意修改完以后**调用相机的 `updateProjectionMatrix()` 方法来更新**

```javascript
const camera = new THREE.PerspectiveCamera(45,  window.innerWidth / window.innerHeight, 0.1, 200); // 创建相机（fov，aspect，near，far）

perspectiveCamera.fov = 75; // 修改 fov
perspectiveCamera.aspect = window.innerWidth/window.innerHeight; // 修改 aspect
perspectiveCamera.near = 100; // 修改 near
perspectiveCamera.far = 500; // 修改 far

perspectiveCamera.updateProjectionMatrix(); // 更新
```

同样的，由于**浏览器的窗口可以随意修改**，需要**监听浏览器窗口的变化**，然后**获取到最新的宽高比**，再**重新设置**相关属性：

```javascript
function onWindowResize () {
    camera.aspect = window.innerWidth / window.innerHeight; // 重新设置宽高比 aspect
    camera.updateProjectionMatrix(); // 更新相机
    renderer.setSize(window.innerWidth, window.innerHeight); // 更新渲染器渲染页面大小
}
window.onresize = onWindowResize;
```

## Points 粒子

### Sprite 精灵

### Points 粒子

粒子和精灵的效果是一样的，它们之间的区别是，如果当前场景内的精灵过多的话，就会出现性能问题。粒子的作用就是为解决很多精灵而出现的，我们可以使用粒子去模型数量很多的效果，比如下雨，下雪等，数量很多的时候就适合使用粒子来创建，相应的，提高性能的损失就是失去了对单个精灵的操作，所有的粒子的效果都是一样。总的来说：

- 粒子就是提高性能减少的一些自由度
- 而精灵就是为了自由度而损失了一些性能

#### 创建粒子

粒子 `THREE.Points` 和精灵 `THREE.Sprite` 还有网格 `THREE.Mesh` 都属于 `THREE.Object3D` 的一个扩展

但是粒子有一些特殊的情况就是 `THREE.Points` 是它们粒子个体的父元素，它的位置设置也是基于 `THREE.Points` 位置而定位，而修改 `THREE.Points` 的 `scale` 属性只会修改掉粒子个体的位置

下面是通过球体几何体创建的一个最简单的粒子特效（**选用其他任何几何体均可，包括自己生成的几何体**）

```javascript
// 初始化粒子
function initPoints () {
  const sphereGeometry = new THREE.SphereGeometry(5, 24, 16); // 球
  const sphereMaterial = new THREE.PointsMaterial({ color: 0xff00ff });
  const spherePoints = new THREE.Points(sphereGeometry, sphereMaterial);
  scene.add(spherePoints);
}
```

另外，使用一个空的几何体，将自己创建的顶点坐标放入，也可以实现一组粒子的创建。如果我们需要单独设置每一个粒子的颜色，可以给 `geometry` 的 `colors` 数组添加相应数量的颜色：

```javascript
for (let i = 0; i < 10000; i++) {
  const star = new THREE.Vector3();
  // THREE.Math.randFloatSpread 在区间内随机浮动* - 范围 / 2 *到* 范围 / 2 *内随机取值。
  star.x = THREE.Math.randFloatSpread(2000);
  star.y = THREE.Math.randFloatSpread(2000);
  star.z = THREE.Math.randFloatSpread(2000);
  starsGeometry.vertices.push(star);

  starsGeometry.colors.push(new THREE.Color("rgb(" + Math.random() * 255 + ", " + Math.random() * 255 + ", " + Math.random() * 255 + ")")); // 添加一个随机的颜色
}
```

#### THREE.PointsMaterial 粒子的样式

通过设置 `THREE.PointsMaterial` 属性去设置粒子的样式

▫️ `color` 属性设置颜色：

```javascript
const sphereMaterial = new THREE.PointsMaterial({ color: 0xff00ff }); // 设置了颜色
```

▫️ `size` 属性设置粒子的尺寸：

```javascript
const pointsMaterial = new THREE.PointsMaterial({ color: 0xff00ff, size: 4 }); // 粒子的尺寸改为原来的四倍
pointsMaterial.size = 4; // 或者直接设置属性
```

▫️ 设置纹理：

```javascript
const pointsMaterial = new THREE.PointsMaterial({ color: 0xff00ff, map: texture });
```

▫ 设置 `lights` 属性为 `true`，让粒子受光照影响（默认粒子是不受光照影响的）

```javascript
const pointsMaterial = new THREE.PointsMaterial({ color: 0xff00ff, lights: true }); // 开启受光照影响
pointsMaterial.lights = true; // 或者直接设置属性
```

▫ 设置粒子不受到距离的影响产生近大远小的效果

```javascript
const pointsMaterial = new THREE.PointsMaterial({ color: 0xff00ff, sizeAttenuation: false }); // 关闭粒子的显示效果受距离影响
pointsMaterial.sizeAttenuation = false; // 或者直接设置属性
```

## Controls 相机控制器

从官网下载的代码包里可以发现有很多的相机控制器，文件夹地址为：`/examples/js/controls/`，里面的文件插件都是和控制相机和控制模型相关的插件

- DeviceOrientationControls：陀螺仪相机控制器，实现移动端陀螺仪控制相机。
- DragControls：控制鼠标拖拽移动物体的功能。
- EditorControls：实现相机的旋转、缩放、平移功能，相对于 OrbitControls 的功能差不少，不建议使用。
- FirstPersonControls：第一视角相机控制器。
- FlyControls：飞行相机控制器。
- OrbitControls：轨道控制器。
- OrthographicTrackballControls：正交轨迹球控制器——正交相机使用的轨迹球控制器。
- TrackballControls：轨迹球控制器——透视相机使用的轨迹球控制器。
- PointerLockControls：鼠标锁定相机控制器。
- TransformControls：控制模型位置、缩放、旋转的控制器。
- VRControls：实现 VR 双屏相机控制器。

下面重点介绍三种常用的相机控制器

### OrbitControls

使用 OrbitControls 控制器我们可以**实现旋转、缩放、平移等功能**

#### 操作方法

- **围绕焦点旋转**：使用鼠标左键拖拽；
- **放大和缩小**：使用鼠标中键按住拖拽或者鼠标中键滑动滚轮；
- **平移相机**：按住鼠标右键拖拽或者使用键盘的上下左右键。

#### 引入

1. 首先，将插件文件引入到项目中（注意路径修改）

   ```html
   <script src="../js/controls/OrbitControls.js"></script>
   ```

2. 然后，通过相机和渲染器的 Dom 对象实例化相机

   ```javascript
   const orbitControl = new THREE.OrbitControls(camera, renderer.domElement);
   ```

3. 最后，在每一帧渲染里面更新相机的位置

   ```javascript
   function render () {
     orbitControl.update();
     renderer.render(scene, camera);
   }
   ```

#### 属性和方法

##### 属性

OrbitControls 控制器最大的优势就是有丰富的配置项，供我们修改来实现项目中的需求

| 属性               | 描述                                                         |
| :----------------- | :----------------------------------------------------------- |
| enabled            | 是否开启当前控制器，默认值是 True，如果设置为 False，将无法通过操作修改相机。 |
| target             | 控制器的焦点位置，是一个 `THREE.Vector3` 对象，默认是 `(0, 0, 0)` |
| minDistance        | 相机距离焦点的最近距离，默认值是0。 此属性适用于透视相机 PerspectiveCamera。 |
| maxDistance        | 相机距离焦点的最远距离，默认值是 Infinity（无限远）， 此属性适用于透视相机 PerspectiveCamera。 |
| minZoom            | 相机距离焦点的最近距离，默认值是 0，此属性适用于正交相机 OrthographicCamera。 |
| maxZoom            | 相机距离焦点的最远距离，默认值是 Infinity（无限远），此属性适用于正交相机 OrthographicCamera。 |
| minPolarAngle      | 相机位置和焦点与焦点和最上方组成的最小夹角限制，默认值是 0。 |
| maxPolarAngle      | 相机位置和焦点与焦点和最上方组成的最大夹角限制，默认值是 `Math.PI`，也就是 180 度角。 |
| minAzimuthAngle    | 当前相机沿水平方向顺时针旋转的弧度，默认值是 `- Infinity`。  |
| maxAzimuthAngle    | 当前相机沿水平方向逆时针旋转的弧度，默认值是 `Infinity`。    |
| enableDamping      | 是否开启拖拽惯性移动，即拖拽停止相机会有缓慢停止的距离移动，默认值是  false。 |
| dampingFactor      | 拖拽惯性移动的阻力，默认值是 0.25。                          |
| enableZoom         | 是否开启缩放操作，默认值是 true。                            |
| zoomSpeed          | 缩放速度，默认值是 1.0。                                     |
| enableRotate       | 是否开启相机绕焦点旋转操作，默认值是 true。                  |
| rotateSpeed        | 旋转速度，默认值是 1.0。                                     |
| enablePan          | 是否开启相机平移操作，默认值是 true。                        |
| panSpeed           | 平移的速度，默认值是 1.0。                                   |
| screenSpacePanning | 修改相机平移的方向，默认值是 false，即沿 x 轴正负方向和 y 轴正负方向移动。可选值是 true，可以修改为沿 x 轴正负方向和 y 轴正负方向移动。 |
| keyPanSpeed        | 键盘上下左右键移动相机的速度，默认值是 7.0。                 |
| autoRotate         | 当前相机是否自动旋转，默认值是 false，不自动旋转。           |
| autoRotateSpeed    | 自动旋转的速度，默认值是 2.0，即渲染满 60 帧的情况下 30 秒旋转 360 度。 |
| enableKeys         | 是否开启键盘控制先机平移，默认值是 true。                    |

##### `update()`

OrbitControls 控制器更新相机的方法，需要在每一帧里面调用。

##### `reset()`

重置方法，相机回到初始位置。

##### `dispose()`

销毁当前实例化的 OrbitControls 控制器。

##### change 回调

控制器修改了相机，将会产生一个回调:

```javascript
orbitControl.addEventListener('change', () => {
	console.log("camera changed");
});
```

### TrackballControls

TrackballControls 控制器比 OrbitControls 控制器更自由，TrackballControls 控制器能够沿焦点进行球形旋转，没有死角，但比 OrbitControls 控制器少一些相关的功能配置。

> 注意，透视相机和正交相机使用的不是一个插件，此插件为透视相机使用，如果是正交相机请使用 OrthographicTrackballControls。

#### 操作方法

使用 TrackballControls 控制器我们**可以实现旋转、缩放、平移等功能**

- **围绕焦点旋转**：使用鼠标左键拖拽；
- **放大和缩小**：使用鼠标中键按住拖拽或者鼠标中键滑动滚轮；
- **平移相机**：按住鼠标右键拖拽或者使用键盘的上下左右键。

#### 引入

1. 首先，将插件文件引入到项目中

   ```html
   <script src="../js/controls/TrackballControls.js"></script>
   ```

2. 然后，通过相机和渲染器的 Dom 对象实例化相机

   ```javascript
   const trackballControl = new THREE.TrackballControls(camera, renderer.domElement);
   ```

3. 最后，在每一帧渲染里面更新相机的位置

   ```javascript
   function render () {
     trackballControl.update();
     renderer.render(scene, camera);
   }
   ```

#### 属性和方法

##### 属性

| 属性                 | 描述                                                         |
| :------------------- | :----------------------------------------------------------- |
| enabled              | 是否开启当前控制器，默认值是 true，如果设置为 false，将无法通过操作修改相机。 |
| rotateSpeed          | 控制相机旋转速度，默认值是 3.0。                             |
| zoomSpeed            | 控制相机缩放速度，默认值是 1.2。                             |
| panSpeed             | 控制相机平移速度，默认值是 0.3。                             |
| noRotate             | 关闭相机旋转，默认 false，开启。                             |
| noZoom               | 关闭相机缩放，默认 false，开启。                             |
| noPan                | 关闭相机移动，默认 false 开启。                              |
| staticMoving         | 关闭拖拽惯性移动 默认值 False，开启。                        |
| dynamicDampingFactor | 拖拽惯性移动阻力，默认值是 0.2。                             |
| minDistance          | 相机距离焦点的最近距离，默认值是 0。                         |
| maxDistance          | 相机距离焦点的最远距离，默认值是 Infinity（无限远）。        |

##### `update()`

OrbitControls 控制器更新相机的方法，需要在每一帧里面调用。

##### `reset()`

重置方法，相机回到初始位置。

##### `dispose()`

销毁当前实例化的 OrbitControls 控制器。

##### change 回调

控制器修改了相机，将会产生一个回调:

```javascript
trackballControl.addEventListener('change', () => {
	console.log("camera changed");
});
```

### DeviceOrientationControls

DeviceOrientationControls **只兼容含有陀螺仪的移动端**，可以通过获取设备的陀螺仪状态来控制相机的朝向。

#### 引入

1. 首先，将插件文件引入到项目中（注意路径修改）

   ```html
   <script src="../js/controls/DeviceOrientationControls.js"></script>
   ```

2. 然后，通过相机对象实例化相机控制器对象

   ```javascript
   const deviceOrientationControls = new THREE.DeviceOrientationControls(camera);
   ```

3. 最后，在每一帧渲染里面更新相机的位置

   ```javascript
   function render () {
     deviceOrientationControls.update();
     renderer.render(scene, camera);
   }
   ```

#### 属性方法

#####  `Enabled` 

- true: 控制器会更新相机的位置
- false: 无法更新相机位置

##### `dispose()` 

```javascript
deviceOrientationControls.dispose(); // 销毁当前控制器
```

## AxesHelper

用于简单模拟 3 个坐标轴的对象：红色代表 X 轴，绿色代表 Y 轴，蓝色代表 Z 轴。

***AxesHelper(size: number)*** 

size (可选参数) 表示代表轴的线段长度，默认为 **1**

```javascript
const axexHelper =  new THREE.AxesHelper(20); 
```

> 注意可能之前版本是叫 *AxisHelper* 现在重命名为 *AxesHelper*

## Loaders 加载模型到 Three.js

市面上的 3D 模型有上百种，每一种格式都有不同的用途，不同的功能和复杂程度。尽管 Three.js 提供了很多的加载器，但选择正确的格式和工作流程将为以后的工作节省大量时间和成本。

> 官方推荐我们使用的 3D 模型的格式为 glTF，由于 glTF 专注于传输，因此它的传输和解析的速度都很快。glTF 模型的功能包括**网格、材质、纹理、蒙皮、骨骼、变形动画、骨骼动画、灯光以及相机**。
>
> 如果当前的首选不是 glTF 格式，那么推荐使用 Three.js 定期维护并且流行的格式 FBX、OBJ 或者 COLLADA 格式，Three.js 也有自己独有的 JSON 格式。

### Three.js 的 JSON 格式

这里的 JSON 格式指的是 Three.js 可以将其**转换为场景 3D 对象**的 JSON 格式模型。这种格式内部一般**必有的四项**为：

- ***metadata*：当前模型的相关信息以及生成的工具信息；**
- ***geometries*：存储当前模型所使用的几何体的数组；**
- ***materials*：存储当前模型所使用的材质的数组；**
- ***object*：当前模型的结构以及标示所应用到的材质和几何体标示。**

所有的**模型网格**，**几何体**和**材质**都有一个固定的 ***UUID*** 标识符，在 JSON 格式中**均通过 *UUID* 引用**。

#### 1、3D 对象转成 JSON

Three.js 给我们提供了一个 `toJSON()` 的方法：用于将 `THREE.Object3D` 对象都可以转成 JSON 字符串保存成为文件（我们不能直接将对象转成 JSON，因为 JSON 无法保存函数，所以需要使用 Three.js 提供的 `toJSON()` 方法）

```javascript
const meshJSONObj = mesh.toJSON(); // 将一个模型网格转成 JSON 对象
const sceneJSONObj = scene.toJSON(); // 将整个场景的内容转换成为 JSON 对象
const sceneJSONStr = JSON.stringify(sceneJSONObj); // 将 JSON 对象转换成 JSON 字符串
```

#### 2、使用 Three.ObjectLoader 加载 JSON 模型

使用 Three.js 内置的对象 `THREE.ObjectLoader` 加载模型。

- **直接加载 Three.js 生成的 JSON 对象**（使用 `THREE.ObjectLoader` 实例的 `parse()` 方法）：

```javascript
const sceneJSONObj = scene.toJSON(); // 将整个场景的内容转换成为 JSON 对象
const loader = new THREE.ObjectLoader(); // 实例化 ObjectLoader 对象
const scene = loader.parse(sceneJSONObj); // 将 json 对象再转换成 3D 对象
```

- **加载外部的 JSON 文件**（使用 `THREE.ObjectLoader` 实例的 `load()` 方法）

```javascript
const loader = new THREE.ObjectLoader(); // 实例化 ObjectLoader 对象
// 加载模型，并在回调中将生成的模型对象添加到场景中
loader.load("./scene.json", group => {
    scene.add(group);
});
```

### glTF 格式文件导入

glTF 格式的 3D 格式文件是官方推荐的使用格式，这种格式的文件我们可以在 [Sketchfab 官网](https://sketchfab.com/)下载，这是一个国外比较知名的模型网站。

加载 glTF 模型的流程：

1. 首先，将 GLTFLoader 加载器插件引入到页面，**插件在官方包的 `/examples/js/loaders/` 文件夹中**，一些文件的导入插件都在这个文件夹内(根据具体路径修改导入的路径)

   ```html
   <script src="../js/loaders/GLTFLoader.js"></script>
   ```

2. 然后创建一个加载器

   ```javascript
   const GLTFLoader = new THREE.GLTFLoader();
   ```

3. 使用加载器加载模型，并调节一下模型大小在场景内展示

   ```javascript
   GLTFLoader.load('./scene.gltf', gltf => {
       gltf.scene.scale.set(1, 1, 1);
       scene.add(gltf.scene);
   });
   ```

### FBX 模型导入

FBX 最大的用途是，在诸如 Max、Maya、Softimage 等软件间**进行模型、材质、动作和摄影机信息的互导**，这样就可以发挥 Max 和 Maya 等软件的优势。可以说 FBX 是最好的互导方案。

加载 FBX 模型的流程：

1. 首先我们需要导入 FBXLoader 插件，并且还需要额外增加一个解析二进制文件的插件 `inflate.min.js`，不导入该文件的话，除了一些字符串存储的 FBX 格式，别的格式都会报错：

   ```html
   <script src="../js/loaders/inflate.min.js"></script>
   <script src="../js/loaders/FBXLoader.js"></script>
   ```

2. 创建 FBX 加载器

   ```javascript
   const FBXLoader = new THREE.FBXLoader();
   ```

3. 修改模型大小，并设置每个模型网格可以投射阴影

   ```javascript
   FBXLoader.load('./demo.fbx', fbx => {
     fbx.scale.set(.1,.1,.1);
     fbx.traverse(item => {
       if(item instanceof THREE.Mesh){
         item.castShadow = true;
         item.receiveShadow = true;
       }
     });
     scene.add(fbx);
   });
   ```

### OBJ 格式模型导入

> OBJ 文件是 3D 模型文件格式。由 Alias|Wavefront 公司为 3D 建模和动画软件 Advanced Visualizer 开发的一种标准，适合用于 3D 软件模型之间的互导，也可以通过 Maya 读写。
>
> OBJ 文件是一种文本文件，可以直接用写字板打开进行查看和编辑修改，但不包含动画、材质特性、贴图路径、动力学、粒子等信息。
>
> OBJ 文件的导出通常会和 MTL 格式一同导出，MTL 作为 OBJ 文件的附属文件，有着 OBJ 文件需要的贴图材质，所以，我们通常使用时，将它们两个文件*(MTL & OBJ)*一同导入。

导入 OBJ 模型的流程：

1. OBJLoader 插件和 MTLLoader 插件引入页面

   ```html
   <script src="../js/loaders/OBJLoader.js"></script>
   <script src="../js/loaders/MTLLoader.js"></script>
   ```

2. 创建一个 MTL 加载器

   ```javascript
   const MTLLoader = new THREE.MTLLoader(); // 创建 MTL 加载器
   MTLLoader.setPath('../js/models/obj/'); // 设置文件路径
   ```

3. 如有需要，还可以设置纹理文件夹地址

   ```javascript
   MTLLoader.setTexturePath('../js/models/obj/'); // 设置纹理文件路径
   ```

4. 加载 MTL 文件，并在文件加载成功后，创建 OBJLoader 并设置对象应用当前的材质：

   ```javascript
   // 加载 mtl 文件
   MTLLoader.load('./test.mtl', material => {
     const objLoader = new THREE.OBJLoader(); // 创建 OBJ 加载器
     objLoader.setMaterials(material); // 设置当前加载的纹理
     objLoader.setPath('../js/models/obj/');
     objLoader.load('female02.obj', object => {
       // 添加阴影
       object.traverse(item => {
         if (item instanceof THREE.Mesh) {
           item.castShadow = true;
           item.receiveShadow = true;
         }
       });
       object.scale.set(3, 3, 3); // 设置大小缩放
       scene.add(object);
     })
   });
   ```


### COLLADA 模型导入

COLLADA 是一个开放的标准，最初用于 3D 软件数据交换，由 SCEA 发起，现在则被许多著名厂家（如 Autodesk、XSI 等）支持。COLLADA 不仅仅可以用于建模工具之间的数据交换，也可以作为场景描述语言用于小规模的实时渲染。

**COLLADA DOM** 拥有丰富的内容用于表现场景中的各种元素，从多边形几何体到摄像机无所不包。我们可以通过 COLLADA DOM 库来进行场景文件的读取与处理操作。

1. 引入 ColladaLoader 插件

   ```html
   <script src="../js/loaders/ColladaLoader.js"></script>
   ```

2. 实例化 ColladaLoader 对象

   ```javascript
   const colladaLoader = new THREE.ColladaLoader();
   ```

3. 修改模型大小，并设置每个模型网格可以投射阴影

   ```javascript
   colladaLoader.load('../js/models/collada/elf.dae', collada => {
     // 添加阴影
     collada.scene.traverse(item => {
       if (item instanceof THREE.Mesh) {
         item.castShadow = true;
         item.receiveShadow = true;
       }
     });
     collada.scene.scale.set(5, 5, 5); // 设置大小缩放
     scene.add(collada.scene);
   });
   ```

### 注意事项

#### 1.如何知道，加载完成的模型需要将哪部分导入到场景？

一般情况下都是将自身导入，比如 FBX，OBJ，JSON 等，还有一种，会在里面生成一个可导入 scene 属性，如 glTF 和 COLLADA 文件。如果导入哪部分你无法确定，你可以把模型对象打印到控制台查看，然后尝试往场景内导入。

#### 2.导入到场景内的模型无法查看，而且也没有报错，为什么？

这种情况可能由多种情况造成的，一般主要有下面两种情况：

- 模型太小或者太大，这种情况可以尝试放大一千倍或者缩小一千倍来查看效果。
- 模型的位置太偏，根本不在相机照射范围内，这种问题我们可以将模型居中到相机照射的焦点位置查看

## Three.js 动画

动画一般可以分为两种：一种是变形动画，另一种是骨骼动画。

### 变形动画

变形动画，**通过修改当前模型的顶点位置来实现**。

比如，一个动画需要变动十次才可以实现，那么我们需要为当前模型的每一个顶点定义每一次所在的位置，Three.js 通过这一次次的修改实现了动画的整个流程。

首先，创建模型的几何体，并为几何体 `morphTargets` 赋值两个变形目标。`morphTargets` **是一个数组**，我们可以为其增加多个变形目标。在给 `morphTargets` 添加变形目标时，需要为其定义一个名称和相关的顶点，这个顶点数据必须和默认的模型的顶点数据保持一致，设置完后，我们需要调用 geometry 的 `computeMorphNormals()` 进行更新，代码如下：

```javascript
const cubeGeometry = new THREE.BoxGeometry(4, 4, 4);

// 创建两个影响立方体的变形目标
const cubeTarget1 = new THREE.BoxGeometry(2, 10, 2);
const cubeTarget2 = new THREE.BoxGeometry(8, 2, 8);

// 将两个geometry的顶点放入到立方体的morphTargets里面
cubeGeometry.morphTargets[0] = {name: 'target1', vertices: cubeTarget1.vertices};
cubeGeometry.morphTargets[1] = {name: 'target2', vertices: cubeTarget2.vertices};
cubeGeometry.computeMorphNormals();
```



### 骨骼动画

实现骨骼动画，我们需要生成一个与模型相关的骨架。骨架中的骨骼与骨骼之间存在关联，模型的每一个要动的顶点需要设置影响它的骨骼以及骨骼对顶点的影响度。

> 和变形动画相比，骨骼动画更复杂一些，但又有更多的灵活性。使用变形动画，我们需要把所有的每一次的变动都存在一个顶点数组中，而骨骼动画，只需要设置骨骼的相关信息，就可以实现更多的动画。

### 两种动画的区别

变形动画主要用于精度要求高的动画，比如人物的面部表情。其优点是动画的展现效果很到位，缺点就是扩展性不强，只能执行设置好的相关动画。

骨骼动画主要用于精度要求相对低一些，但需要丰富多样的动画的场合，就比如人物的走动，攻击防御等动画，我们可以通过一套骨骼，修改相应骨骼的位置信息直接实现相应的效果。它没有变形动画的精度高，但可以实现多种多样的效果。

> **总结：**我们可以根据项目的需求来设置不同的动画，就比如一个人物模型，说话我们使用变形动画去实现，而肢体动作使用骨骼动画去实现。

### 导入模型动画

### Tween.js



## Raycaster 场景交互

浏览器是一个 2D 视口，而 Three.js 展示的是 3D 场景。场景交互时，需要在二维平面中控制三维场景的模型，那如何将 2D 视口的 x 和 y 坐标转换成 Three.js 场景中的 3D 坐标呢？

好在 Three.js 已经有了解决相关问题的方案，那就是 `THREE.Raycaster` 射线，用于鼠标拾取（计算出鼠标移过的三维空间中的对象）等。

![raycaster](D:\chenyh\ienyh\resourses\Raycaster.jpg)

### THREE.Raycaster

#### 构造函数

`THREE.Raycaster` 构造函数包含了四个参数：

- `origin`：**光线投射的原点矢量**；
- `direction`：**光线投射的方向矢量**，应该是被归一化的；
- `near`：**投射近点**，用来限定返回比 `near` 要远的结果。`near` 不能为负数，缺省为 `0`；
- `far`：**投射远点**，用来限定返回比 `far` 要近的结果。`far` 不能比 `near` 小，缺省为无穷大。

```javascript
const raycaster = new THREE.Raycaster(origin, direction, near, far);
```

#### 属性

`THREE.Raycaster` 的属性可以在实例化对象后有修改需求时再修改。除了上面提到的 `origin`、`direction`、`near`、`far` 四个属性外，我们还有可能用到另一个属性：

- `linePrecision`：**射线和线相交的精度**，浮点数类型。

#### 方法

##### `set()`

可以重新设置射线的原点和方向，从而更新射线位置。

```javascript
raycaster.set(origin，direction)
```

参数 origin 用来设置射线新的原点矢量位置，direction 用来设置基于原点位置的射线的方向矢量。

##### `setFromCamera()`

使用当前相机和界面的 2D 坐标设置射线的位置和方向。

```javascript
raycaster.setFromCamera(coords, camera);
```

参数 coords 表示鼠标的二维坐标，在归一化的设备坐标（NDC）中，也就是 X 和 Y 分量，应该介于 -1 和 1 之间。camera 表示射线起点处的相机，即把射线起点设置在该相机位置处。

点击事件大多通过鼠标触发，我们用鼠标点击显示区域的位置和当前场景使用的相机对象调用此对象，Three.js 会为我们计算出当前射线的位置。

##### `intersectObject()` & `intersectObjects()`

两个方法用来检查射线和物体之间的所有交叉点数据。

如果检测射线和一个对象是否相交，推荐使用 `intersectObject()`，如果判断的是这个对象的子对象，那推荐使用 `intersectObjects()`，将 3D 对象的 `children` 属性传入。

**两个方法的返回值均为交叉点对象数组**，如果射线与场景内的模型没有相交，将返回一个空数组，否则，将返回一个按**从近到远顺序**排列的对象数组

###### 参数

- *raycaster.intersectObject(object, recursive, optionalTarget)*
- *raycaster.intersectObjects(array, recursive, optionalTarget)*

参数 object，用来检测和射线相交的物体。如果 recursive 设置为 true，还会向下继续检查所有后代，否则只检查该对象本身，缺省值为 false。optionalTarget 为可选参数，用于设置放置结果的数组，如果缺省，则将会实例化一个新数组，并将获取到的数据放入其中。

`intersectObject()` 和 `intersectObjects()` 的区别在于第一个参数。intersectObject 的第一个参数为 3D 对象，而 intersectObjects 需要传入一个由 3D 对象组成的数组。

###### 返回值

如果射线与场景内的模型没有相交，将返回一个空数组，否则，将返回一个按从近到远顺序排列的对象数组，数组中每个对象的内容为：

```javascript
[{ distance, point, face, faceIndex, indices, object }, ...]
```

- distance：射线的起点到相交点的距离；
- point：在世界坐标中的交叉点；
- face：相交的面；
- faceIndex：相交的面的索引；
- indices：组成相交面的顶点索引；
- object：相交的对象。

#### example

```javascript
const threeDom = document.querySelector("#three");
const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
renderer.shadowMap.enabled = true;
renderer.setSize(threeDom.offsetWidth, threeDom.offsetHeight, false);
threeDom.appendChild(renderer.domElement);

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 4000);
camera.position.set(10, 40, 50);

const boxGroup = new THREE.Group();
const geometry = new THREE.BoxGeometry(30, 3, 30);
for (let i = 0; i < 20; i++) {
  const material = new THREE.MeshBasicMaterial({ color: 0x373d41});
  const cube = new THREE.Mesh(geometry, material);
  cube.position.set(0, i * 3, 0);
  cube.index = i; // 设置 cube 额外属性记录 index
  cube.isFloat = false; // 设置 cube 额外属性记录 是否浮动 isFloat
  boxGroup.add(cube);
}
scene.add(boxGroup);

let beforeX, beforeY, afterX, afterY;
threeDom.addEventListener('mousedown', e => {
  [ beforeX, beforeY ] = [ e.offsetX, e.offsetY ];
});

threeDom.addEventListener('mouseup', e => {
  [ afterX, afterY ] = [ e.offsetX, e.offsetY ];
});

const raycaster = new THREE.Raycaster();
const mouse = new THREE.Vector2();
threeDom.addEventListener("click", (event) => {
  if (beforeX === afterX && beforeY === afterY) {
    mouse.x = (event.offsetX / threeDom.offsetWidth) * 2 - 1;
    mouse.y = - (event.offsetY / threeDom.offsetHeight) * 2 + 1;
    raycaster.setFromCamera(mouse, camera); // 更新鼠标和射线位置
    const intersects = raycaster.intersectObjects(scene.children, true);
    if (intersects.length > 0 && Reflect.has(intersects[0].object, "index")) {
      boxGroup.children[this.currentHeightLight].material.color.set(0x373d41);
      this.currentHeightLight = this.changeHighLight(intersects[0].object); // 设置高亮方法
      const boxes = boxGroup.children;
      for (let i = 0; i < boxes.length; i++) {
        if (i >= this.currentHeightLight + 1 && !boxes[i].isFloat) {
          boxes[i].isFloat = true;
          boxes[i].position.y += 3;
        }
        if (i < this.currentHeightLight + 1 && boxes[i].isFloat) {
          boxes[i].isFloat = false;
          boxes[i].position.y -= 3;
        }
      }
    }
  }
});

// 添加 background
const plane = new THREE.PlaneGeometry(1000, 1000);
const planeMaterial = new THREE.MeshPhongMaterial({ color: 0x000066, side: THREE.DoubleSide });
const planeMesh = new THREE.Mesh(plane, planeMaterial);
planeMesh.rotation.x = Math.PI * 1 / 2;
planeMesh.position.set(0, -8, -8);
planeMesh.receiveShadow = true;
scene.add(planeMesh);
// 添加灯光
scene.add(new THREE.AmbientLight(0x222244, 1.5));
const light = new THREE.DirectionalLight({ color: 0x222244 });
light.castShadow = true;
light.position.set(8, 8, 10);
scene.add(light);
// 引入相机控制器
const controls = new OrbitControls(camera, renderer.domElement);

scene.add(new THREE.AxesHelper(80));

const stats = new ThreeStats.Stats();
stats.domElement.style.position = 'absolute';
stats.domElement.style.top = '0px';
stats.domElement.style.left = '0px';
threeDom.appendChild(stats.domElement);

// 设置一个动画函数
const animate = function () {
  // 一秒钟调用 60 次，也就是以每秒 60 帧的频率来绘制场景。
  requestAnimationFrame(animate);
  // cube.rotation.y += 0.01;
  stats.update();
  controls.update();
  renderer.render(scene, camera);
};
animate();

window.addEventListener("resize", () => {
  camera.aspect = threeDom.offsetWidth / threeDom.offsetHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(threeDom.offsetWidth, threeDom.offsetHeight)
});
```

## 核心对象

### 欧拉角

欧拉角通过在每个轴指定旋转的弧度和指定旋转轴的先后顺序来进行旋转变换。

**每个 3D 对象的 rotation 属性都是一个欧拉角对象。**

```javascript
const euler = new THREE.Euler(0, 1, 1.57, 'XYZ');
```

**前三个值分别代表每个轴上旋转的弧度，第四个值是应用旋转的顺序。**默认为“XYZ”，这意味着对象将首先围绕其 X 轴旋转，然后围绕其 Y 轴旋转，最后围绕其 Z 轴旋转。可能的值有 YZX、ZXY、XZY、YXZ、ZYX，注意**必须大写**。

可以使用 `set()` 方法重新设置

```
euler.set(Math.PI, 0, - Math.PI / 2, "YZX"); // 
```



