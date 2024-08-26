# THML 核心
## 文档结构
### 元素
> 其他叫法：标签、标记

```html
<a href='actionapp.cn'>action链接</a>
<title>action标题</title>
```
整体：element(元素)

元素 = 起始标记+结束标记+元素内容+元素属性

属性 = 属性名+属性值

属性的分类：
- 局部属性：某些元素特有的属性
- 全局属性：所有元素都支持的属性

```html
<meta charset="utf-8">
```

有些元素没有结束标记，如：img、br、hr、input，这样的元素叫做:**空元素**。

空元素的两种写法：
1. ```<img src="xxx" >```：
2. ```<img src="xxx" />```：

### 元素的嵌套

元素不能相互嵌套

父元素、子元素、祖先元素、后代元素、兄弟元素（拥有同一个父元素的两个元素）

### 标准的文档结构

HTML：页面、HTML文档

```html
<!DOCTYPE html>
```

文档声明：告诉浏览器当前文档使用的HTML标准是HTML5

不写文档声明、将导致浏览器进入怪异的渲染模式，导致页面显示不正常


```html
<html lang="en">
</html>
```
根元素：html，一个页面最多只能一个，并且该元素是其他元素的父元素或者祖先元素。HTML5版本中没有强制要求书写该元素。

lang属性：指定页面使用的语言，如：en、zh-CN、zh-TW、zh-HK、zh-SG、zh-MY、zh-Hans、zh-Hant、zh-Hans-CN、zh-Hant-TW、zh-Hans-HK、zh-Hant-HK、zh-Hans-SG、zh-Hant-SG、zh-Hans-MY、zh-Hant-MY、zh-Hans-CN、zh-Hant-CN、zh-H，cmn-hans是一个全局属性。

```html
<head>

</head>
```
文档头：文档头内部的内容不会显示到页面上。

```html
<meta charset="UTF-8">
```
文档的元数据：附加信息

charset：指定网页内容编码

计算机中，低压电（0-2v）0，高压电（2-5v）1，表示2，使用10这种表示方法基于电子学的基本原理，利用晶体管等电子元件来实现。当晶体管导通时，电流可以流过，这对应于高电压状态（1）；当晶体管截止时，没有电流流过，这对应于低电压状态（0）

计算机中只能存储数字

文字和数字进行对应

比如：a-97，A-64

该字典叫做字符编码表 GB2312、GBK、GB18030、BIG5、UTF-8、UTF-16、UTF-32

刘 - GB2312 - 100001 - GBK - ???

UTF-8（unicode新版本）：万国码，UTF-8编码表

网页标题

```html
<body>
</body>
```
文档体

## 语义化
### 什么是语义化
1. 每一个HTML元素都有自己的含义
a元素：超链接
p元素：段落
h1元素：一级标题

2. 所有元素与展示效果无关 
   
元素展示到页面的效果，应该由css决定。

因为浏览器带有默认的css样式，所以，浏览器会根据元素的语义，来决定元素的展示效果。 

**重要：选择什么元素，取决于内容的含义，而不是显示出的效果**

### 为什么需要语意化
1. 搜索引擎优化（SEO）
   搜索引擎：百度、搜搜、谷歌
 每隔一段时间，搜索引擎会抓取网页，然后根据网页的标题、关键字、内容等，来判断网页的权重。

2. 为了让浏览器理解网页的内容，从而更好的展示给用户
   阅读模式（忽略广告等杂物，只浏览内容）、语音模式（通过语音识别，将网页内容转化为语音）


## 文本元素

HTML中，文本元素有哪些，可以通过搜索HTML5元素周期表来查看。
### 
标题：head

h1 ~ h6：表示一级标题到六级标题
```html
快捷创建方式h$*6>{$级标题}
```
### p

段落，paragraph
> lorem 乱数假文，没有任何实际含义的文本 lorem1 lorem1000

### span【无语义】
没有语义，仅用于样式
> 某些元素在显示时，会独占一行（块级元素），而某些元素不会独占一行，如span等（行级元素）。
> 现在到了HTML5，已经放弃这种说法了
### pre

预格式化文本元素

空白折叠：在源代码中连续空白字符（空格、换行、制表符,会被折叠成一个空格。）

例外：pre元素中的空白字符不会被折叠。

在pre元素内部出现的文本，会显示为原样。

```html
<pre>
  _____
 /     \
(  o o )
 ~ (___) ~
</pre>

```

## 实体字符
实体字符，entity ：在HTML中，有些字符不能直接使用，如：<、>、&、'、"，这时，需要使用实体字符来表示。

实体字符通常用于显示HTML中的特殊字符。

1. 命名实体字符，&单词;：&lt;、&gt;、&amp;、&apos;、&nbsp;、&quot;、
2. &#decimal;：十进制实体字符，如：&#60;、&#62;、&#38;、&#39;、&#34; 

## a元素
超链接

### href属性

hypertext reference，超链接引用，表示超链接的链接地址

1. 跳转地址
2. 跳转锚点(锚链接)
3. 功能链接(点击后，触发某个功能，例如执行js代码)


```html
1. 跳转地址
<a href="http://actionapp.cn">action</a>
2. 跳转锚点
<h2>章节一</h2>
<p>还会发发大水发大水发大水发大水发大水发大水发大水发大水发大水发大水发大水发</p>
<a href="#chapter1">到章节1</a>
<a href="#">回到顶部</a>
(a>{章节$})*6
((h2[id="chapter$"]>{章节$})+p>lorem)*6
3. 功能链接
 <a href="javascript:alter('你好')">执行js代码</a>
 <a href="mailto:1932844332@qq.com">需要安装邮件发送软件（exchange）</a>
 <a href="tel:10086">拨打电话</a>
```

id属性：标识符，表示当前元素的唯一标识符。


### target属性

target属性，表示超链接打开的方式，窗口位置。
1. _self：默认值，表示在当前窗口打开
2. _blank：表示在新窗口打开

## 路径的写法

### 站内资源和站外资源
站内资源：当前网站中的资源，如：图片、css、js、html等

站外资源：当前网站以外的资源，如：图片、css、js、html等

### 绝对路径和相对路径

1. 绝对路径：（站外资源）包含协议、域名、端口、路径、文件名、文件类型

绝对路径的书写格式：

```html
完整路径：协议名：//域名:端口/路径/文件名.文件类型

http://www.actionapp.cn:80/images/logo.png

协议名：https、http、ftp、file等

域名：www.actionapp.cn

端口：80(如果协议是http，端口是80，https默认端口是：443，如果协议是ftp，端口是21，如果协议是file，端口是0)

路径：/images/logo.png

文件名：logo

文件类型：png、jpg、gif、html、css、js、exe、zip等

当跳转目标和当前页面的协议相同时，可以省略协议名

```
2. 相对路径：（站内资源）不包含协议、域名、端口，只包含路径、文件名、文件类型

以./开头，表示当前资源所在目录

可以书写../表示当前资源所在目录的父目录

相对路径中./可以省略，但是../不能省略

```html
<a href="./images/logo.png">
<a href="images/logo.png">

<a href="./../images/logo.png">
<a href="../images/logo.png">
```

## 图片元素

### img元素
image缩写、空元素

src属性：表示图片的链接地址

alt属性：表示图片的替代文本，当图片加载失败时，显示的文本。

```html
<img src="./images/logo.png" alt="logo"/>
```

### 和a标签结合使用

```html
<a href="http://www.actionapp.cn">
 <img src="./images/logo.png" alt="logo"/>
</a>
```

### 和map元素结合使用
map元素：定义一个图片的点击区域，点击区域可以设置不同的链接地址。

```html
 <img usemap="#solar-map" src="logo.png"/>
 <map name="solar-map">
      <area shape="rect" coords="0,0,100,100" href="https://www.baidu.com">
</map>
```

map的子元素：area

shape属性：定义点击区域形状，有：rect、circle、poly、default









