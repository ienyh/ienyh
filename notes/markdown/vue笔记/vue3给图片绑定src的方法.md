# Vue3 给图片绑定 src 的方法

今天学习 vue 碰到的坑，好无语，记录一下过程省的以后再出现。

首先当我们给 `<img/>` 标签绑定 `src` 的时候，首先你可能这么写：

```vue
<template>
	<img class="icon-img" v-if="icon" :src="iconURL" />
</template>
<script>
export default {
  name: "Collection",
  data() {
    return {
      iconURL: "../../../assets/icons/icon-1.png",
    };
  },
}
</script>
```

注意其实这么写是绑定失败的，因为 vue 会把相对地址解析为一个字符串，而非一个地址，这就导致图片加载是失败的；相反，如果你写网络路径就不会有任何问题。

---

那么怎么解决这个问题呢，可以这么写:

```vue
iconURL: require(`../../../assets/icons/${this.icon}.png`),
```

这样就不会有任何问题了。

