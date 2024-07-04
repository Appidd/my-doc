# css动画以及相关属性
## 偏移与动画
### transition 过渡

1. 允许元素在状态改变时平滑过渡到新的样式
2. 只有数值类属性可以使用（width, height, left, top, border, radius, opacity, color transform属性等）

```css
transition: CSSpropertyName duration timing-function delay;

/* 默认值 */
transition: all 0 ease 0;

/* 举例1 一个属性 */
transition: width 500ms linear;

/* 举例2 多个属性 */
transition: width 500ms linear, height 1000ms linear;
```

transition是一个缩写属性，其四个参数对应下方四个属性。
#### transition完整写法
##### transition-property 
规定设置过渡效果的 CSS 属性的名称。

1. none 没有属性参与过渡效果
2. all 所有属性都参与过渡效果
3. propertys 可规定一个或多个css数值属性参与过渡效果，多个属性用逗号或空格隔开！！

##### transition-duration
规定完成过渡效果需要多少秒（s）或毫秒（ms）。1s === 1000ms

##### transition-timing-function
规定速度效果的速度曲线。

1. linear 匀速动画，等同于cubic-bezier(0, 0, 1, 1)
2. ease 默认，慢入慢出，等同于cubic-bezier(0.25, 0.1, 0.25, 1)
3. ease-in 慢入，等同于cubic-bezier(0.42, 0, 1, 1)
4. ease-out 慢出，等同于cubic-bezier(0, 0, 0.58, 1)
5. ease-in-out 慢入慢出，等同于cubic-bezier(0.42, 0, 0.58, 1)
6. [cubic-bezier](#hHgy6)(x1, y1, x2, y2) 三次贝塞尔曲线，x取值为0-1之间的数值，y的取值一般没有限制 
7. steps(stepsTimes, [jumpDirection]) 步骤，stepsTimes 步骤数，[jumpDirection]跳过阶段，可设置为start和end，默认end

##### transition-delay
定义过渡效果何时开始。单位为秒（s）或毫秒（ms）

### animation 动画
注意：

1. 只有数值类属性可以使用（width, height, left, top, border, radius, opacity, color transform属性等）
2. 相比于transition，animation可以实现更复杂的动画效果。

文字也可以实现animation！！！模拟打字机效果
```html
<html>
  <head>
    <style>
      /** css模拟打字机效果 **/
      div::after {
        content: '';
        animation: 5s test linear infinite;
      }

      @keyframes test {
        0% {
          content: 'hi';
        }
        10% {
          content: 'hi，';
        }
        20% {
          content: 'hi，zaoshang';
        }
        30% {
          content: 'hi，zaosh';
        }
        40% {
          content: 'hi，';
        }
        50% {
          content: 'hi，早上';
        }
        60% {
          content: 'hi，早上好';
        }
        70% {
          content: 'hi，早上好啊';
        }
        80% {
          content: 'hi，早上好啊！';
        }
        90% {
          content: 'hi，早上好啊！(#^.^#)';
        }
        100% {
          content: '';
        }
      }
    </style>
  </head>
  <body>
    <div></div>
  </body>
</html>
```

#### animation属性简写
animation：动画名称 动画时长 动画运动速度 延迟时间 执行次数 往返动画
animation：动画名称 动画时长 （有这两个即可以完成动画，其它未设置，有默认值）
```css
div {
    animation: move 3s linear 3s infinite;
}

/* 关键帧动画 */
@keyframes move {
    0% {}
    45% {}
    80% {}
    100% {}
}

@keyframes go {
    from {}
    to {}
}

@keyframes end {
    to {}
}
```

#### animation详细属性
```css
/* 设置关键帧的名称为xx */
animation-name : xx;

/* 动画持续时间为5s/5000ms */
animation-duration: 5s;

/* 动画函数
linear 匀速
ease （默认）低速开始—>加速—>结束前减速   、
ease-in 以低速开始
ease-out 以低速结束
ease-in-out 以低速开始和结束。
cubic-bezier(x1, y1, x2, y2)
steps 步骤
*/
animation-timing-function: linear;

/* 动画等待5s/5000ms后开始 */
animation-delay: 5s;

/* 动画播放次数为1次,无限次infinite */
animatiom-iteration-count: 1;

/* 
nomal（默认）-执行完一次之后回到起点继续执行下一次
alternate-往返动画，执行完一次之后往回执行下一次
reverse-反向执行
*/
animation-direction: alternate;

/* 动画结束的最后一帧元素的状态
none-不做任何改变
forwards-让元素结束状态保持动画最后一帧的样式
backwards-让元素等待状态的时候显示动画第一帧的样式
both-等待状态显示第一帧，结束状态保持最后一帧
*/
animation-fill-mode: none;

/* 设置动画是否暂停
running-执行动画
paused-暂停动画
*/
animation-play-state: running;
```
在动画过程中，可能CPU, GPU渲染时出现动画抖动的问题，但没人真正知道问题的所在。但是有解决这个问题的方法：在动画的父元素中加入 backface-visibility: hidden;
或许高版本的浏览器已经优化了这个问题。

使用js触发动画
```javascript
// 假设 animation-el 是一个设置了animation属性的class类
const div = document.getElementById("test")
div.classList.add('animation-el')
```

### transform 变形与偏移
使用transform对元素进行变形或偏移，不会影响页面的布局，是提高页面性能的方法之一。

#### 偏移原点
```css
transform-origin:; 
```
#### 偏移属性
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>transform</title>
    <style>
        /* transform相关的知识 */
        .item {
            width: 200px;
            height: 200px;
            background-color: #000;
            border: 1px solid red;
            float: left;
            position: absolute;
            color: #fff;
            text-align: center;
            line-height: 200px;
        }
        .item {
            /* animation: change 5s linear infinite; */
        }
        /* transform属性效果可视化 */
        @keyframes change {
            to {
                /* transform: skewX(100deg); */
            }
        }
        .itemTransform {
            /* 
                默认值，不进行转换
            */
            /* transform: none; */

            /* 
                旋转（物体不会拉伸） 单位deg
                rotate(0deg) 以中心点转动-rotateZ也是
                rotateX(0deg) 以X轴转动
                rotateY(0deg) 以y轴转动
                rotateZ(0deg)	以z轴转动
            */
            /* transform: rotate(45deg); */

            /* 
                平移
                translate(x, y) 设置x,y轴的移动
                translate3d(x, y, z) 设置x,y,z轴的移动
                translateX(x)设置x轴的移动（水平）
                translateY(y)设置y轴的移动（垂直）
                translateZ(z)设置z轴的移动(目前还不知它的实际用途)
            */
            /* transform: translate(10px, 10px); */

            /* 
                缩放 
                取值：
                1 == 100%（不变） 
                1.5 === 150%（放大） 
                0.5 == 50%（缩小）
                scale(x,y)
                scale3d(x,y,z)
                scaleX(x) 宽度缩放
                scaleY(y) 高度缩放
                scaleZ(z) 暂时不理解
            */
            /* transform: scale(1.5, 2); */

            /* 
                倾斜(视角的倾斜，物体会有拉伸感) 单位deg
                skew(x,y)
                skewX(x)
                skewY(y)
            */
            /* transform: skew(10deg, 10deg); */

            /* 
                透视视图 需要完善！！！
                perspective(n)
            */
            /* transform: perspective(10px); */
        }
        
    </style>
</head>
<body>
    <div class="item itemTransform">1</div>
</body>
</html>
```

### 附录：
#### 贝塞尔曲线
贝塞尔曲线是用于实现各类光滑的曲线，css的贝塞尔曲线函数是为了让css动画的过渡效果更加灵活和平滑。

canvasAPI中也有贝塞尔曲线的封装函数，他就可以用于实现曲线线条
![image.png](https://cdn.nlark.com/yuque/0/2024/png/43474211/1717555591981-79218464-929e-44c6-8573-c59a8fae16cc.png#averageHue=%23fefefe&clientId=u984b5c8e-793a-4&from=paste&height=475&id=u80108543&originHeight=475&originWidth=1673&originalType=binary&ratio=1&rotation=0&showTitle=false&size=51323&status=done&style=none&taskId=u1abb831c-e80a-44dd-8fbd-2090cf56023&title=&width=1673)

##### 一次贝塞尔曲线
##### 二次贝塞尔曲线
##### 三次贝塞尔曲线
##### 高阶贝塞尔曲线


##### 可视化操作三次贝塞尔曲线
[https://cubic-bezier.com/](https://cubic-bezier.com/)
#### steps 步骤
