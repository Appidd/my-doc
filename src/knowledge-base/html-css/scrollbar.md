关于本文，转自 公众号iCSS 前端趣闻授权
作者：@SbCo
原文：https://mp.weixin.qq.com/s/vPDwmHw6UusEsLKgQwsEXw
## 前言
介绍了现代 CSS 中的新特性 ——scrollbar-color 和 scrollbar-width，可以通过这两个属性控制滚动条的颜色和宽度。scrollbar-color 可以设置滚动条的轨道和滑块颜色，而 scrollbar-width 只支持设置滚动条的宽度为系统默认、瘦版或隐藏。这两个属性的应用使得控制滚动条样式更加简单和标准化。

Chrome 在 121 版本开始，原生支持了两个滚动条样式相关的样式 scrollbar-color 和 scrollbar-width。
要知道，在此前，虽然有 ::-webkit-scrollbar 规范可以控制滚动条，可是，::-webkit-scrollbar 是非标准特性，在 MDN 文档中都明确了不应该在生产环境使用它。
MDN - ::-webkit-scrollbar Non-standard: This feature is non-standard and is not on a standards track. Do not use it on production sites facing the Web: it will not work for every user. There may also be large incompatibilities between implementations and the behavior may change in the future.
而 scrollbar-color 和 scrollbar-width 是官方标准，在 CSS Scrollbars Styling Module Level 1 规范中被提出。
本文，我们就将一起学习看看这两个属性的使用。
#### scrollbar-color 设置滚动条颜色
顾名思义，scrollbar-color 就是用于设置滚动条颜色的。
不过有意思的是，一个完整的滚动条，其实是有多个小组件组成的，所以能设置的颜色其实也有很多。
以非标准规范 ::-webkit-scrollbar 为例，它将滚动条拆分成了这么多个部分：
![](https://cdn.nlark.com/yuque/0/2024/webp/314561/1716179168607-e635289f-ca5e-4795-a242-c33cad5a328c.webp#averageHue=%231d1e24&clientId=u385c7618-7caf-4&from=paste&id=u0126d189&originHeight=520&originWidth=710&originalType=url&ratio=1&rotation=0&showTitle=false&status=done&style=none&taskId=u0560de7c-e917-4327-ab87-594f80688b2&title=)
当然，新规范没有这么复杂，我们简化上述的图，可以得到这么一张图：
![](https://cdn.nlark.com/yuque/0/2024/webp/314561/1716179168709-2b500b78-1890-4474-afaa-9d3666d75845.webp#averageHue=%23f4f4f3&clientId=u385c7618-7caf-4&from=paste&id=ufeb0158e&originHeight=129&originWidth=270&originalType=url&ratio=1&rotation=0&showTitle=false&status=done&style=none&taskId=u1a602e23-4ede-40d1-a59b-b6aaa652871&title=)
而 scrollbar-color 能够设置的，正是上图中的 track 和 thumb 的颜色：

- 轨道（track）是指滚动条，其一般是固定的而不管滚动位置的背景。
- 滑块（thumb）是指滚动条通常漂浮在轨道的顶部上的移动部分。

简单举个例子:
``` vue
<div class="scroll-box">
   <p>
     Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis quaerat ipsam fugit fugiat cupiditate asperiores neque libero natus atque, suscipit 
 error esse inventore numquam molestiae quas laborum eius debitis cum?
     Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis quaerat ipsam fugit fugiat cupiditate asperiores neque libero natus atque, suscipit 
 error esse inventore numquam molestiae quas laborum eius debitis cum?
     ...
   </p>
 </div>
```
``` vue
.scroll-box {
     border: 1px solid #666;
     overflow: scroll;
 }
```
正常而言，当 `<p>` 标签内的内容足够多，溢出到开始滚动，则滚动条样式为：
![](https://cdn.nlark.com/yuque/0/2024/webp/314561/1716179168635-61cc00c1-0f1c-42ea-943f-cef12d2d03a7.webp#averageHue=%23eeeee5&clientId=u385c7618-7caf-4&from=paste&id=ue83a4949&originHeight=454&originWidth=320&originalType=url&ratio=1&rotation=0&showTitle=false&status=done&style=none&taskId=ufcb9b58e-da82-4fbd-a148-7003fb7e6f0&title=)
此时，我们可以通过 scrollbar-color 设置滚动条的轨道颜色和滑块颜色：
``` vue
.scroll-box {
     border: 1px solid #666;
     overflow: scroll;
     scrollbar-color: #fff #000;
     // OR
     scrollbar-color: #000 #fff;
 }
```
则，样式表现如下：
![](https://cdn.nlark.com/yuque/0/2024/webp/314561/1716179168717-12650ed5-6415-415f-a314-b0f17feb69e2.webp#averageHue=%23e3dfd3&clientId=u385c7618-7caf-4&from=paste&id=u6a2e958e&originHeight=577&originWidth=1080&originalType=url&ratio=1&rotation=0&showTitle=false&status=done&style=none&taskId=ud1dfb31e-0c9a-4fbb-b7bc-69ce37076f3&title=)
看图就非常好理解了，简单而言 scrollbar-color: #000 #fff，需要设置两个颜色，将第一种颜色应用于滚动条滑块，第二种颜色应用于滚动条轨道。
当然，上图是在 Windows 操作系统下的样式表现，我再补充一张在 macOS/iOS 操作系统下的样式表现效果：
![](https://cdn.nlark.com/yuque/0/2024/webp/314561/1716179168779-2b1d406d-0501-4106-9a01-9ba07d124d54.webp#averageHue=%23eae8e7&clientId=u385c7618-7caf-4&from=paste&id=u0fd5303f&originHeight=670&originWidth=1080&originalType=url&ratio=1&rotation=0&showTitle=false&status=done&style=none&taskId=u0d0ab5fe-1d87-4048-9d24-09939801ee0&title=)
由于 macOS/iOS 操作系统默认情况下，即便容器内是可滚动的，也不会显示滚动条，上述效果都是在 Hover 状态或者滚动状态下的效果。
并且，值得注意的是，大家可以发现，macOS/iOS 操作系统下滚动条轨道是透明的，无法被设置颜色，只能设置滚动条滑块的颜色。
完整的 DEMO，你可以戳这里：Scrollbar-color Demo：https://codepen.io/Chokcoco/pen/GRLQzYB?editors=1100
当然，值得注意的是。很多人看中文版的 MDN 文档（2024-04-06），会看到除了直接设置两个颜色值，以及上面的 auto 关键字，规范还提供了 light 和 dark 关键字：
``` vue
{
   /* Keyword values */
   scrollbar-color: auto;
   scrollbar-color: dark;
   scrollbar-color: light;
 }
```
在我实测过后，发现实际没有任何浏览器（用户代理）目前支持 light 和 dark 关键字。
中文文档存在一定的滞后性，还是推荐大家直接看英文文档：
![](https://cdn.nlark.com/yuque/0/2024/webp/314561/1716179168998-b9bc4dfd-0a15-43fd-966f-22ed9bc9f3b1.webp#averageHue=%23f3f2f2&clientId=u385c7618-7caf-4&from=paste&id=u0a8e46e0&originHeight=349&originWidth=1080&originalType=url&ratio=1&rotation=0&showTitle=false&status=done&style=none&taskId=ue3eb0b34-4d50-47f8-947e-99d47705c9f&title=)
#### scrollbar-width 设置滚动条粗细
了解完 scrollbar-color 后，我们再来看看 scrollbar-width。这个从名字也很好理解，设置滚动条的宽度。
那是否和我们想象的一样，可以任意设置滚动条的宽度，甚至乎，可以定制化的设置滑块和轨道的宽度？
遗憾的是，在 CSS Scrollbars Styling Module Level 1 一期滚动条规范中，这个属性的功能被设置的非常弱。
不要说分别设置滑块和轨道的宽度，scrollbar-width 目前甚至不支持接受一个宽度数值。
什么意思呢？也就是，当前 scrollbar-width 只接收 3 个关键字：
``` vue
{
   /* Keyword values */
   scrollbar-width: auto;
   scrollbar-width: thin;
   scrollbar-width: none;
 }
```

- scrollbar-width: auto：系统默认的滚动条宽度。
- scrollbar-width: thin：系统提供的瘦滚动条宽度，或者比默认滚动条宽度更窄的宽度
- scrollbar-width: none：不显示滚动条，但是该元素依然可以滚动

简单示意图如下：
![](https://cdn.nlark.com/yuque/0/2024/webp/314561/1716179169067-9646ddc6-0300-4a2f-854d-b351dd27af00.webp#averageHue=%23dbd9d1&clientId=u385c7618-7caf-4&from=paste&id=u63ad4c53&originHeight=431&originWidth=1080&originalType=url&ratio=1&rotation=0&showTitle=false&status=done&style=none&taskId=u932db85e-1666-4e4d-b1a1-a6fad801982&title=)
完整的 DEMO，你可以戳这里：Scrollbar-width Demo：https://codepen.io/Chokcoco/pen/eYoVxqd?editors=1100
#### 总结一下
可以看到，其实就目前 scrollbar-width 而言，其能力还是属于比较鸡肋的。相对正常的样式，仅仅多了一种瘦版样式选择以及提供了无滚动条模式。
当然，整个 scrollbar-color 和 scrollbar-width 相较于非标准的 ::-webkit-scrollbar 规范已经是非常大的一步跨越。只是其功能的丰富性和全面性还需要等待。
