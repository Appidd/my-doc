# 概念介绍
## 抽象
在软件领域中，抽象是一种**提炼核心本质（建模与概念化）**、**隐藏无关细节**、**简化复杂性**、**构建层次化结构**、促进代码**复用**和**模块化**的设计方法。通过抽象，程序员可以将复杂的问题简化为更易管理和理解的部分，可以帮助程序员专注于关键概念。
**抽象的核心就是统一反应现实世界的概念和行为并构建业务数据模型（即建模与概念化）**，如[基础数据中的概念介绍](https://plugin-v3.medcrab.com/common/base-data/getting-started.html)。
**常见的抽象方式包括使用数据结构、函数、类、接口、组件以及模块等来封装代码**，隐藏内部实现细节。通过适当的抽象，程序可以更加灵活和可扩展。
例如，在悬壶小程序中，代表的账户以及金额提现模块，可以抽象出一个账户类(Account)，该类封装了代表身份信息、账户余额、明细、提现等核心属性和操作，并通过特定的设计模式（如单例模式）将该类的实例在多个页面共享，从而避免账户相关操作散乱在各页面不便于维护管理和迭代。
## 封装
**封装是抽象的重要实现手段**。通过封装，相关数据和操作被组织到一起，形成一个独立的单元（如数据结构、函数、类、模块、组件或包），对外仅暴露必要的接口（如方法、属性、事件），而将内部实现细节隐藏起来。这样，外部代码只需与接口交互，无需了解内部的具体工作方式，增强了代码的模块化和低耦合性。封装实现了“**高内聚、低耦合**”的原则，使得各部分代码职责分明，易于理解和修改。
## 分层（层次化）
软件设计的**分层与逐步细化是抽象的递进过程**。程序中的抽象不是一次性完成的，而是通过多个层次逐渐建立起来。高层次的抽象提供宏观视角，定义整体架构和主要组成部分（产生框架、模块、设计模式等）；随着设计深入，这些抽象被进一步细化为更具体的子组件和实现细节。
这种分层结构使得大型软件项目能够按照功能模块或业务逻辑进行组织，每个层级的组件专注于解决特定的问题，同时依赖于下一层提供的服务。例如，操作系统中可能有文件系统、内存管理、进程调度等多个抽象层次。
## 面向对象编程（OOP）
面向对象编程主要包含**封装、继承、多态**三大原则。
**继承**：是面向对象编程中的一个重要机制，允许一个类（子类或派生类）从另一个类（基类或父类）继承已有的属性和方法，从而形成类的层次结构。继承旨在实现代码重用、支持“is-a”关系（JavaScript 中通过 `instanceof`关键词判断）以及实现多态；
**多态**：同一个行为（方法）在不同对象或实例上触发调用时，会引发不同的行为；多态是实现灵活、可扩展软件设计的关键，有助于降低代码耦合度，适应不断变化的需求。

- **编译时多态（静态多态）**：通过函数重载或运算符重载实现，编译器在编译阶段就能确定调用哪个方法；
- **运行时多态（动态多态）**：通过接口（interface）实现，实际调用的方法在运行时根据对象的实际类型动态决定。
## 面向过程编程（POP）
相较于面向对象，面向过程编程思想的区别：

- **过程（函数）作为基本单元**：每个过程负责完成一项特定的任务或计算。过程通常接受输入参数，执行特定的操作，并可能返回结果。程序的执行流程可以通过调用不同的函数并按照逻辑顺序排列这些调用来组织；
- 程序结构以功能划分为主：函数通常按照其完成的功能进行分类和命名，如排序函数、查找函数、打印函数等。程序的总体逻辑通过函数间的调用关系来体现，通常表现为一种线性的控制流或简单的条件分支与循环结构；
- **模块化以函数为基础**：面向过程编程也提倡模块化设计，但这里的模块主要是指一组相关的函数以及它们所需的数据结构的集合。通过将相关的函数组织到一起（如放在同一源文件或通过头文件包含<比如 C 语言>），可以实现一定程度的代码复用和降低复杂性；
- **重点在于算法和逻辑实现**：面向过程编程强调对问题求解算法和控制逻辑的直接实现，设计良好的过程（函数）应具有良好的内聚性，即每个函数只做一件事，并且做得好；
- **适用场景与局限性**：面向过程编程适用于小型、简单、过程性强、不需要高度抽象或复杂对象交互的项目，尤其在对性能要求较高、需要精细控制内存和资源的应用中表现出优势。
> 在目前前端业务项目中，绝大多数业务处理逻辑都是面向过程编程。

## 函数式编程
与面向过程类似，都是通过函数来组织和解决问题，但它们在编程思维、数据处理、状态管理、副作用控制、程序结构等方面存在显著差异，适用于不同的应用场景和编程需求，区别在于：

- **编程思维与问题解决方式**
   - 面向过程编程：关注于如何将问题分解为一系列步骤（过程），并按顺序执行这些步骤以解决问题；
   - 函数式编程：关注于如何通过数学函数的概念来表达计算，将问题视为函数的组合和变换。
- **数据与状态管理**
   - 面向过程编程：通常允许并使用可变状态。数据可以被多个函数共享和直接修改，函数内部或全局变量可以保持状态并在不同函数调用之间持续存在；
   - 函数式编程：强调不可变数据和无副作用。数据被视为不可变值，每次操作都会产生新的数据，而不是修改原有数据。函数应避免改变外部状态，每次调用都应基于相同的输入产生相同的输出，使得函数易于推理和并行化。
- **函数角色与性质**
   - 面向过程编程：函数（过程）主要作为执行任务的步骤，可以有副作用（如修改全局状态、输出到屏幕、网络通信等）。函数的结果不仅取决于输入，还可能受到外部状态的影响；
   - 函数式编程：函数被视为数学意义上的纯函数，其结果仅取决于输入参数，不依赖于任何外部状态，也不产生除返回值以外的副作用。
- **程序结构与控制流**
   - 面向过程编程：通常依赖于显式的控制结构（如循环、条件语句、goto等）来组织程序逻辑。程序执行路径可能因条件判断和状态变化而变得复杂；
   - 函数式编程：倾向于使用高阶函数（如map、filter、reduce等）和函数组合来表达控制流。递归是处理迭代问题的常见手段，程序结构往往更偏向声明式，关注“做什么”而非“怎么做”。
> 在我们的项目应用中，函数式编程体现最直接的是数学运算库 [Big.js](https://mikemcl.github.io/big.js/#toS) 或其扩展 [CrabNumber](https://plugin-v3.medcrab.com/common/utils/getting-started.html#%E6%95%B0%E5%AD%A6%E8%BF%90%E7%AE%97%E5%8F%8A%E9%87%91%E9%A2%9D%E5%A4%84%E7%90%86)，数字解析或运算时，函数只要求接受一个关于数字的输入，并返回一个解析或运算结果，**对于相同的输入，永远都有一个确定的输出**，其核心只需要解决运算精度及效率问题即可。

## 扩展：面向领域编程
# 软件领域的分层和抽象思想
## 必要性
前后端应用都跑在计算机上，计算机从硬件到操作系统，再到上层库都是有清晰架构设计与分层的，应用程序作为最上层的一环也是嵌入在整个大架构图里的。
虽然操作系统和各类基础库屏蔽了底层实现，让业务可以仅关心业务逻辑，大大解放了生产力，但一款应用必然是底层操作系统与业务层代码协同才能运行的，从应用程序往下有一套逻辑井然的架构分层设计，如果到了业务层没有很好的架构设计，技术抽象是一团乱麻，很难想象这样形成的整体运行环境是健康的。
业务模块的抽象设计应当类似计算机基础的架构设计，从需求分析出发，设计有哪些业务子模块，并定义这些子模块的职责与子模块之间的关系。子模块的设计取决于业务的特性，子模块间的分层取决于业务的拓展能力。
例如，一个绘图软件设计时只要需要组件子系统与布局子系统，它们之间互相独立，也能无缝结合。对于[ BI 软件](https://baike.baidu.com/item/BI%E8%BD%AF%E4%BB%B6/5673806)来说，就增加了筛选联动与通用数据查询的概念，因此对应的也会增加筛选联动模型、数据模型、图形语法这几个子模块，并按照其作用关系上下分层：
![](https://cdn.nlark.com/yuque/0/2024/webp/38412621/1713947519122-67a8439b-bab3-4962-bcf7-dfde1661e045.webp#averageHue=%23b5aaa7&clientId=u5c2cd1c5-4934-4&from=paste&height=279&id=u3048261a&originHeight=365&originWidth=1080&originalType=url&ratio=1&rotation=0&showTitle=false&status=done&style=none&taskId=u5194c992-f5ef-45f2-b8fe-f769c2a92b8&title=&width=826)
如果分层清晰而准确，可以看出这两个业务上层具有相同的抽象，即最上层都是组件与布局的结合，而筛选联动与数据查询，以及从数据模型映射到图元关系的映射功能都属于附加项，这些项移除了也不影响系统的运行。如果不这么设计，可能就理不清系统之间的相似点与差异点，导致功能耦合，要维护一个大系统可能要时刻关系各模块之间的相互影响，这样的系统即不清晰，也不够可拓展，关键是要维护它的成本也高。
## 可行性
前端交互虽然多而杂，但这不构成不需要分层架构抽象设计的理由。对计算机基础设计来说，也面临着多种多样的输入设备与输出设备，进而产生的标准输入输出的抽象，那么前端也应当如此。
例如，一个通用架构的计算机，使上面可以运行任何开发者软件，且软件之间可以相互独立，也可以相互调用，系统还不容易产生 BUG。从这个角度来看，计算机的底层架构设计对前端架构设计是有参考意义的，大体上来说，计算机通过硬件、操作系统、软件这个三个分层解决这个问题；硬件方面，通过 CPU、存储、输入输出设备的抽象解决了计算、存储、拓展的三个基本能力；再细分来看，CPU 也仅仅支持了三个基本能力：数学计算、条件控制、子函数；对于操作系统，它不需要知道软件具体是怎么执行的，提供一些基本范式统一软件的行为以及提供一些基础的系统调用封装给上层的语言进行二次封装。这使得计算机底层设计既是稳定的，设计因素也是可枚举的，同时拥有了强大的拓展能力。
![](https://cdn.nlark.com/yuque/0/2024/jpeg/38412621/1713949092385-7118d35d-9be4-4d85-937a-996ff8f6b259.jpeg)
前端的特点在于用户输入的触点非常多，但这不妨碍我们抽象标准输入接口，比如用户点击按钮或者输入框是输入，那键盘快捷键也是一种输入方式，URL 参数也是一种输入方式，在业务前置的表单也是一种输入方式，如果输入方式很多，对标准输入的**抽象就变得重要，使业务代码的实际复杂度不至于膨胀到用户使用的复杂度那么高**。
不止输入触点多，前端系统的功能组合也非常多，比如图形绘制软件，画布可以放任意数量的组件，每个组件有任意多的配置，组件之间还可以相互影响。这种系统属于开放式系统，用户很容易试出开发者都未曾想到过的功能组合，有些时候开发者都惊叹这些新的组合竟然能一起工作！用户会感叹软件能力的强大，但开发者不能真的把这些功能组合一一尝试来解决冲突，必须通过合理的分层抽象来保证功能组合的稳定性。
## 必然性
目前市场上的绝大部分的产品代码实际早就处于一系列架构分层中，也就是编程语言与框架。编程语言与框架会自带一些**设计模式**，以减少混用代码范式带来的沟通成本，其实架构设计本身也要解决代码一致性问题，所以这些内容都是架构设计的一环。
> 例如：在 Egg.js 框架中约定，中间件、插件、路由、控制器和服务分层组织代码，并由框架的统一入口加载和初始化。

前端框架带来的数据驱动特性本身就很大程度上解决了前端代码在复杂应用下可维护问题，大大降低了过程代码带来的复杂度。React 或 Vue 框架本身也起到了类似操作系统的操作，即定义上层组件（软件规格）的规格，为组件渲染和事件响应抹平浏览器差异（硬件差异），并提供组件渲染调度功能（软件调度）。同时也提供了组件间变量传递（进程通信），让组件与组件间通信符合统一的接口。
![57b6cf64-7ae7-47fa-9f30-45b805ebc0af.jpg](https://cdn.nlark.com/yuque/0/2024/jpeg/38412621/1714099104055-1c0d1c66-5061-4074-827b-196952c345c7.jpeg#averageHue=%23f6f6f6&clientId=u521b2045-55c2-4&from=paste&height=484&id=ud80c78c4&originHeight=484&originWidth=793&originalType=binary&ratio=1&rotation=0&showTitle=false&size=32096&status=done&style=none&taskId=u0b67e692-175a-47da-a572-b536143bd7a&title=&width=793)
对于前端组件的抽象和设计，没有必要把每个组件都类比到进程来设计，也就是说，组件与组件之间不用都通过通信方式工作。比较合适的类比粒度是模块，把一个大模块抽象为组件，模块与模块间互相不依赖，用数据通信来交流。小粒度组件就做成状态无关的元件（如 Vue 中的函数式组件），注意相似功能的组件接口尽量保持一致，这样就能体验到类似**多态**的好处。
## 没有绝对的分层
分层是架构设计的重点，但一个模块在分层的位置可能会随着业务迭代而变化，类比到操作系统和前端分别举一个例子：
例一：语音输入现在由各个软件自行提供，背后的语音识别与解析能力可能来自各大公司的 AI 中台，或者一些提供 AI 能力的云服务。但语音输入能力成熟后，很可能会成为操作系统内置能力，因为语音输入与键盘输入都属于标准输入，只是语音输入难度更大，操作系统短期难以内置，所以目前发展在各个上层应用里，而且随着产品业务的迭代，需要对其拓展时，因为内置在底层不方便拓展，只能在更上层实现了。
例二：当在前端使用位置服务时，有两种方案，使用浏览器宿主提供的 [Geolocation API](https://developer.mozilla.org/zh-CN/docs/Web/API/Geolocation) 可以获取简单的位置信息，或者使用第三方提供的地理位置解决方案。针对第二种更为上层的实现，可以根据需要提供各种 API（如地理位置解析、路线规划等），也可能更加复杂，如增加鉴权机制。
### 合理分层
业务分层与硬件、操作系统不同的是，业务分层中，几乎所有层都方便修改与拓展，因此如果遇到分层不合理的设计，最好将其移动到应该归属的层。
### 优化分层
合理的分层可能是一个不断演进的过程，等新模块稳定后再移动到其归属所在层可能更好，因为从上层挪到底层意味着更多被模块共享使用，就像我们不会轻易把软件层某个包提供的函数内置到编程语言一样，也不会随意把编程语言实现的函数内置到操作系统内置的系统调用。
举一个前端组件的例子，如果一个项目中已经有了一套组件元信息描述，最好先让其在业务代码里跑一段时间，观察一下元信息定义的属性哪些有缺失，哪些是不必要的，等业务稳定一段时间后，再把这套元信息运行时代码抽成一个通用组件提供给本业务，甚至其他业务使用。但即便这个能力沉淀到了通用包，也不代表它就是永远不能被迭代的。所以要慎重抽象，但抽象后也要敢于质疑和挑战。
## 没有绝对的抽象
计算机把一切都理解为数据。计算结果是数据，执行程序的代码也是数据，所以 CPU 只要专注于对数据的计算，再加上存储与输入输出，就可以完成一切工作；Unix操作系统中，把一切都抽象为文件，即一切皆文件，使文件、进程、线程、socket 等管理都抽象为文件的 API，且都拥有特定的 “文件路径”，比如你甚至可以通过 `/proc`访问到进程文件夹，`ls`可以看到所有运行的进程。
当然进程不是文件，这只是说明了 Unix 的一种抽象哲学，即 “文件” 本身就是一种抽象，开发者可以用理解文件的方式理解一切事物，这带来了理解成本的降低，也使许多代码模式可以不关心具体资源类型。但这样做的争议点在于，并不是一切资源都适合抽象成文件，比如输入输出中的显示器，它作为一个呈现五彩缤纷像素点的载体，实在难以用文件系统来统一描述。
所以，**抽象的方式是无尽的，哪种更好取决于业务如何变化**，不用过于纠结完美的抽象，就连 Unix 一切皆文件的最基础抽象都备受争议，业务抽象的稳定性肯定会更差，也更需要随着需求变化而调整。
## 优点
从软件构建的角度上讲，相较于堆砌杂乱的可运行代码，通过分层设计、抽象封装组件和功能能带来的优点有：

- **简化复杂性**：通过抽象和封装，可以隐藏实现细节，使得代码更易于理解和维护；
- **提高可重用性**：抽象和封装可以将功能封装成独立的模块或类，可以在不同的地方重复使用；
- **降低耦合度**：通过封装对象的内部实现细节，可以降低不同模块之间的依赖关系；
- **提高扩展性**：通过抽象和封装，可以更容易地扩展系统的功能，而不需要修改现有的代码；
- **提高安全性**：通过封装关键数据和方法，可以控制对其访问的权限，以及方便进行单元测试。
# 设计模式——特殊场景的宏观抽象
设计模式是面向对象编程中**针对常见问题和场景总结**出的最佳实践和解决方案，或者说，**设计模式是一种编程经验**，实际应用过程中可能会存在变体或相互组合作用的情况。它们描述了如何在特定上下文中应用OOP原则（如封装、继承、多态等）来解决设计和架构层面的问题，提高代码的可复用性、可扩展性和可维护性。
软件领域成熟的设计模式分为**创建型、结构型、行为型**三大类共 23 种。
:::tips

- 创建型模式：创建对象的同时隐藏创建逻辑的方式；
- 结构型模式：关注类和对象的组合，简化系统的设计；
- 行为型模式：关注对象之间的通信，增加灵活性。
:::
![](https://cdn.nlark.com/yuque/0/2024/jpeg/38412621/1714275378302-1ec443fc-1e79-4616-a015-ef36dc437707.jpeg)
## 设计模式的六大原则
:::tips
六大原则也可以用六个字替换：**高内聚低耦合**。

- **高**层不直接依赖底层：依赖倒置原则
- **内**部修改关闭，外部开放扩展：开闭原则
- **聚**合单一功能：单一原则
- **低**知识接口，对外接口简单：迪米特法则
- **耦**合多个接口，不如隔离拆分：接口隔离原则
- **合**并复用，子类可以替换父类：里氏替换原则
:::
### 单一职责原则（Single Responsibility Principle, SRP）
**原则表述**：一个类（或模块、函数）应当只有一个引起它变化的原因。换句话说，一个类应该只有一个职责，即只做一件事，并把它做好。
**目的与意义**：通过保持类的功能单一、职责明确，避免类承担过多职责而导致的复杂性和耦合度增加，提高代码的可读性、可维护性和可测试性。当需求发生变化时，修改影响范围小，降低代码的脆弱性。
### 开闭原则（Open-Closed Principle, OCP）
**原则表述**：软件实体（类、模块、函数等）应当对扩展开放，对修改关闭。即允许在不修改原有代码的基础上扩展其功能。
**目的与意义**：通过抽象化和封装，使得软件系统在面对需求变化时，能够通过增加新代码（扩展）而不是修改已有代码（修改）来应对。这有助于保护已有代码的稳定性和避免引入新错误，同时提升系统的可扩展性和适应性。
### 里氏替换原则（Liskov Substitution Principle, LSP）
**原则表述**：任何基类（父类）的实例都能够被其子类的实例所替换，且在程序逻辑上不会产生错误或异常，使用者无需了解对象的具体类型。
**目的与意义**：保证继承关系中父类和子类的契约一致性，使得在继承体系中，子类可以安全地替换其父类出现在任何需要父类的地方。这增强了代码的健壮性和可复用性，降低了模块间的耦合度。
### 依赖倒置原则（Dependency Inversion Principle, DIP）
**原则表述**：

   - 高层模块不应依赖于低层模块，两者都应该依赖于抽象。
   - 抽象不应依赖于细节，细节应该依赖于抽象。

**目的与意义**：通过依赖于抽象而非具体实现，使得高层模块与低层模块解耦，使得系统易于扩展和维护。具体表现为：使用接口或抽象类来定义模块间的交互协议，具体实现类实现这些接口或继承抽象类。这样，模块间的依赖关系基于稳定的抽象接口，而非易变的具体实现，从而提高了系统的可扩展性和可维护性。
### 接口隔离原则（Interface Segregation Principle, ISP）
**原则表述**：客户端不应被迫依赖于它不使用的方法。一个类对另一个类的依赖应该建立在最小的接口之上。
**目的与意义**：避免使用过于臃肿的“胖接口”，通过将大接口拆分为更小、更具体的接口，使得客户端仅依赖于自己需要的方法。这样可以降低耦合度，提高接口的灵活性，防止因无关接口的改变而影响到客户端，同时也使得接口更易于理解和实现。
### 迪米特法则（Law of Demeter, LoD）/ 最少知识原则（Principle of Least Knowledge）
**原则表述**：一个对象应当对其它对象有尽可能少的了解。也就是说，一个对象应当只与它的直接朋友（直接交互的对象）通信，而不应与“陌生人”（间接交互的对象）通信。
**目的与意义**：限制对象之间的交互范围，降低系统的耦合度，提高模块的内聚性。遵循迪米特法则可以使系统更易于理解和维护，因为每个模块只需关注与自己密切相关的对象，而不必关心系统中其它对象的内部细节，减少了模块间的相互影响。
## 创建型模式
### [单例模式（Singleton）](https://mp.weixin.qq.com/s/MBEuFH4iEYwaxvltcC1H2Q)
**意图**：确保一个类只有一个实例，并提供一个全局访问点。单例模式通常包含延迟初始化以及防止多次实例化的机制。
**场景**：需要频繁创建和销毁的对象、创建对象时耗时过多或消耗资源过多的对象、频繁访问数据库或文件的对象、需要进行复杂的初始化操作的对象。
```typescript
// @medcrab-common/base-data/src/cache/idxdb/db.ts
// http://git.medcrab.com/saas-html/medcrab-common/blob/prod/basedata/packages/base-data/src/cache/idxdb/db.ts

import { CrabBaseData } from './CrabBaseData'

let db: CrabBaseData

/** 获取数据库实例。 */
export default function getBaseDataDB() {
  return db || (db = new CrabBaseData())
}
```
### [工厂方法模式（Factory Method）](https://mp.weixin.qq.com/s/UQlKdpOn-v2wgk24htMVyg)
**意图**：定义了一个用于创建对象的接口，但让子类决定实例化哪一个类。工厂方法使一个类的实例化延迟到其子类。
**场景**：当一个类不知道它所创建的对象的确切类，或者当类希望其子类指定所创建的对象时。
```typescript
// @medcrab-common/base-data/src/request/index.ts
// http://git.medcrab.com/saas-html/medcrab-common/blob/prod/basedata/packages/base-data/src/request/index.ts

import { Platform, Platforms } from '../Platform'
import { FetchHttpClient } from './FetchHttpClient'
import { HttpClient } from './HttpClient'
import { UniHttpClient } from './UniHttpClient'
import { WxHttpClient } from './WxHttpClient'
import { XhrHttpClient } from './XhrHttpClient'

export type { HttpRequest } from './HttpClient'

let clientCache: Map<Platforms, HttpClient>

export default function getHttpClient(): HttpClient {
  // 定义不同平台的请求库（子类）类型
	let Client: { prototype: HttpClient; new (): HttpClient }
	const platform = Platform.envName
  // 判断是否有缓存请求方案
	if (clientCache?.has(platform)) {
		const cache = clientCache.get(platform)
		if (cache) return cache
	}
  // 选择平台请求库方案
	switch (platform) {
		case Platforms.Browser:
		case Platforms.WebWorker:
			Client = FetchHttpClient.support() ? FetchHttpClient : XhrHttpClient
			break
		case Platforms.UniApp:
			Client = UniHttpClient
			break
		case Platforms.WechatMP:
			Client = WxHttpClient
			break
		case Platforms.Node:
		case Platforms.Unknown:
		default:
			throw new Error('没有内置的可用的 Http 客户端。')
	}
  // 创建（实例化）目标平台的请求库
	const client = new Client()
  // 缓存
	if (!clientCache) clientCache = new Map()
	clientCache.set(platform, client)
	return client
}
```
### [抽象工厂模式（Abstract Factory）](https://mp.weixin.qq.com/s/4sNlrITaAEVSlpPwhxZnRg)
**意图**：提供一个创建一系列相关或相互依赖对象的接口，而无需指定它们具体的类。
**场景**：系统的产品有多于一个的产品族，而系统只消费某一个产品族，或者系统依赖于抽象层。
```typescript
// @medcrab-common/base-data/src/request/HttpClient.ts
// http://git.medcrab.com/saas-html/medcrab-common/blob/prod/basedata/packages/base-data/src/request/HttpClient.ts

/**
 * 用于跨平台的 HttpClient，定义了统一标准的请求处理行为；
 * 不同平台的实现方案实现该抽象类即可。
 */
export abstract class HttpClient {

	/**
	 * 抽象方法：
   * 不同平台实现请求发送的核心逻辑，该类定义的其他方法如 `get`, `post` 都是基于该实现。
	 */
	public abstract send(request: HttpRequest): Promise<HttpResponse>

	/** 发起一个 GET 请求 */
	public get(url: string): Promise<HttpResponse>
	public get(url: string, options: HttpRequest): Promise<HttpResponse>
	public get(url: string, options?: HttpRequest): Promise<HttpResponse> {
		return this.send({
			...options,
			method: 'GET',
			url
		})
	}

	/** 发起一个 POST 请求 */
	public post(url: string): Promise<HttpResponse>
	public post(url: string, options: HttpRequest): Promise<HttpResponse>
	public post(url: string, options?: HttpRequest): Promise<HttpResponse> {
		return this.send({
			...options,
			method: 'POST',
			url
		})
	}

	/** 发起一个 DELETE 请求 */
	public delete(url: string): Promise<HttpResponse>
	public delete(url: string, options: HttpRequest): Promise<HttpResponse>
	public delete(url: string, options?: HttpRequest): Promise<HttpResponse> {
		return this.send({
			...options,
			method: 'DELETE',
			url
		})
	}
}
```
```typescript
// @medcrab-common/base-data/src/request/FetchHttpClient.ts
// http://git.medcrab.com/saas-html/medcrab-common/blob/prod/basedata/packages/base-data/src/request/FetchHttpClient.ts

import { AbortError, HttpError, TimeoutError } from '../errors'
import { HttpClient, HttpRequest, HttpResponse } from './HttpClient'
import { doFetchXhrContent } from './utils'

export class FetchHttpClient extends HttpClient {
	public static support() {
		return typeof fetch !== 'undefined'
	}

	public constructor() {
		super()
	}

	/** @inheritDoc */
	public async send(request: HttpRequest): Promise<HttpResponse> {
		// Check that abort was not signaled before calling send
		if (request.abortSignal && request.abortSignal.aborted) {
			throw new AbortError()
		}

		if (!request.method) {
			throw new Error('No method defined.')
		}
		if (!request.url) {
			throw new Error('No url defined.')
		}

		const abortController = new AbortController()

		let error: any
		// Hook our abortSignal into the abort controller
		const onOuterSignalAborted = () => {
			abortController.abort()
			error = new AbortError()
		}
		if (request.abortSignal) {
			request.abortSignal.addEventListener('abort', onOuterSignalAborted)
		}

		// If a timeout has been passed in, setup a timeout to call abort
		// Type needs to be any to fit window.setTimeout and NodeJS.setTimeout
		let timeoutId: any = null
		if (request.timeout) {
			const msTimeout = request.timeout
			timeoutId = setTimeout(() => {
				abortController.abort()
				error = new TimeoutError()
			}, msTimeout)
		}

		let response: Response
		try {
			const { url, content: body } = doFetchXhrContent(request)
			response = await fetch(url, {
				body,
				cache: 'no-cache',
				credentials: request.withCredentials === true ? 'include' : 'same-origin',
				headers: {
					// 'Content-Type': 'text/plain;charset=UTF-8',
					'Content-Type': 'application/json;charset=UTF-8',
					'X-Requested-With': 'XMLHttpRequest',
					...request.headers
				},
				method: request.method,
				mode: 'cors',
				redirect: 'follow',
				signal: abortController.signal
			})
		} catch (e) {
			if (error) {
				throw error
			}
			throw e
		} finally {
			if (timeoutId) {
				clearTimeout(timeoutId)
			}
			if (request.abortSignal) {
				// request.abortSignal.onabort = null
				request.abortSignal.removeEventListener('abort', onOuterSignalAborted)
			}
		}

		if (!response.ok) {
			throw new HttpError(response.statusText, response.status)
		}

		const payload = await deserializeContent(response, request.responseType)

		return new HttpResponse(response.status, response.statusText, payload)
	}
}
```
```typescript
// @medcrab-common/base-data/src/request/FetchHttpClient.ts
// http://git.medcrab.com/saas-html/medcrab-common/blob/prod/basedata/packages/base-data/src/request/FetchHttpClient.ts

import { AbortError, HttpError, TimeoutError } from '../errors'
import { HttpClient, HttpRequest, HttpResponse, HttpResponseContent } from './HttpClient'

export class WxHttpClient extends HttpClient {
	public static support() {
		return typeof wx !== 'undefined'
	}

	constructor() {
		super()
	}

  /** @inheritDoc */
	public send(request: HttpRequest): Promise<HttpResponse> {
		// Check that abort was not signaled before calling send
		if (request.abortSignal && request.abortSignal.aborted) {
			return Promise.reject(new AbortError())
		}

		if (!request.method) {
			return Promise.reject(new Error('No method defined.'))
		}
		if (!request.url) {
			return Promise.reject(new Error('No url defined.'))
		}

		return new Promise<HttpResponse>((resolve, reject) => {
			const conf: WechatMiniprogram.RequestOption = {
				url: request.url!,
				data: request.content,
				method: (request.method || 'GET').toUpperCase() as WechatMiniprogram.RequestOption['method'],
				header: {
					// Tell auth middleware to 401 instead of redirecting
					'X-Requested-With': 'XMLHttpRequest',
					//'Content-Type': 'application/x-www-form-urlencoded',
					'Content-Type': 'application/json;charset=UTF-8',
					...request.headers
				},
				responseType: request.responseType === 'arraybuffer' || request.responseType === 'blob' ? 'arraybuffer' : 'text',
				dataType: '其他',
				timeout: request.timeout
			}

			conf.success = ({ data, statusCode }) => {
				if (statusCode >= 200 && statusCode < 300) {
					let content: HttpResponseContent = data
					if (request.responseType === 'json' && typeof data === 'string') {
						try {
							content = JSON.parse(data as string)
						} catch {
							// do nothing
						}
					}
					resolve(new HttpResponse(statusCode, 'OK', content))
				} else {
					reject(new HttpError('wx.request fail.', statusCode))
				}
			}
			conf.fail = ({ errMsg }) => {
				let err: Error
				if ((errMsg + '').toUpperCase().indexOf('TIMEOUT') !== -1) {
					err = new TimeoutError(errMsg)
				} else {
					err = new HttpError(errMsg, -1)
				}
				reject(err)
			}
			conf.complete = () => {
				if (request.abortSignal) {
					request.abortSignal.onabort = null
				}
			}

			if (request.abortSignal) {
				request.abortSignal.onabort = () => {
					if (reqTask) {
						reqTask.abort()
					}
					reject(new AbortError())
				}
			}
			const reqTask = wx.request(conf)
		})
	}
}
```
### [原型模式（Prototype）](https://mp.weixin.qq.com/s/-vWgJJxTyAlqOkLrxBWNBg)
**意图**：使用原型实例指定待创建对象的类型，并通过复制这个原型来创建新的对象。
**场景**：当创建新对象成本较大（如初始化复杂、耗时或消耗资源）时，通过复制已有对象来创建新对象；或者系统中存在大量相似对象，而这些对象的大部分属性都相同。
```javascript
// The shared prototype object.
var P = {};
Big.prototype = P;

P.times = P.mul = function (y) {
  var c,
    x = this,
    Big = x.constructor,
    xc = x.c,
    yc = (y = new Big(y)).c,
    a = xc.length,
    b = yc.length,
    i = x.e,
    j = y.e;

  // Determine sign of result.
  y.s = x.s == y.s ? 1 : -1;

  // Return signed 0 if either 0.
  if (!xc[0] || !yc[0]) {
    y.c = [y.e = 0];
    return y;
  }

  // Initialise exponent of result as x.e + y.e.
  y.e = i + j;

  // If array xc has fewer digits than yc, swap xc and yc, and lengths.
  if (a < b) {
    c = xc;
    xc = yc;
    yc = c;
    j = a;
    a = b;
    b = j;
  }

  // Initialise coefficient array of result with zeros.
  for (c = new Array(j = a + b); j--;) c[j] = 0;

  // Multiply.

  // i is initially xc.length.
  for (i = b; i--;) {
    b = 0;

    // a is yc.length.
    for (j = a + i; j > i;) {

      // Current sum of products at this digit position, plus carry.
      b = c[j] + yc[i] * xc[j - i - 1] + b;
      c[j--] = b % 10;

      // carry
      b = b / 10 | 0;
    }

    c[j] = b;
  }

  // Increment result exponent if there is a final carry, otherwise remove leading zero.
  if (b) ++y.e;
  else c.shift();

  // Remove trailing zeros.
  for (i = c.length; !c[--i];) c.pop();
  y.c = c;

  return y;
}
```
### [建造者模式（Builder）](https://mp.weixin.qq.com/s/AK1JzKqwqT91yNXKBUuzSA)
**意图**：将一个复杂对象的构建与它的表示分离，使得同样的构建过程可以创建不同的表示。
**场景**：对象的创建过程非常复杂，需要很多步骤，或者有许多可选参数，或者对象的内部表示对外部客户不透明。
所谓构建与表示分离，就是指一个对象并不是简单的 new 就可以实例化出来的，如果可以，那就是构建与表示一体。比如有一个类 A，就是指 A 只能描述，而不能通过 new A() 实例化，将实例化工作通过建造者 Builder 实现，这样同样一个构建过程可以创建不同的 A 实例。
```javascript
// builder.js

class Phone {
  constructor() {
    this.vender = '' // 厂家
    this.brand = ''  // 品牌
    this.model = ''  // 型号
    this.os = ''     // 系统
  }
}

export class PhoneBuilder {
  setVender(s) {
    const phone = this.phone || (this.phone = new Phone())
    phone.vender = s
    return this
  }
  setBrand(s){ /** [CODE] */ }
  setModel(s){ /** [CODE] */ }
  setOS(s){ /** [CODE] */ }
  get() { return this.phone }
}

// usage
const builder = PhoneBuilder()
const meta60 = builder.setModel('Meta 60').setVender('Huawei').get()
const iphon12 = builder.setModel('爱疯12').setVender('Apple').get()
```
```javascript
const obj = {
  name:'张三',
  age:'20',
  department:'人力资源部门'
}

class Person {
  constructor(obj){
    this.name = obj.name
    this.age = obj.age
    this.department = obj.department
  }

  work() {}
  play() {}
  sing() {}
}

const person = new Person(obj)
// 相较于直接在对象`obj`上定义属性（包括函数），可以节约更多内存成本
// const obj = {
//   name:'张三',
//   age:'20',
//   department:'人力资源部门',
//   work() {},
//   play() {},
//   sing() {}
// }
```

## 结构型模式
### [代理模式（Proxy）](https://mp.weixin.qq.com/s/81hRJ3p1TwxuI4uVevCHDg)
**意图**：为其他对象提供一种代理以控制对这个对象的访问。
**场景**：远程代理（为位于不同地址空间的对象提供本地代理）、虚拟代理（按需延迟加载大资源）、保护代理（控制对原始对象的访问权限或触发一些其他副作用<操作>）。
```javascript
// cookie.js
export function get(name) { /** CODE */ }
export function set(name, value) { /** CODE */ }

// storage.js
export function get(name) { /** CODE */ }
export function set(name, value) { /** CODE */ }

// memory.js
export function get(name) { /** CODE */ }
export function set(name, value) { /** CODE */ }

// 代理存储的存取行为
// index.js
import * as cookie from './cookie'
import * as storage from './storage'
import * as memory from './memory'

export function get(name) { /** CODE */ }
export function set(name, value) { /** CODE */ }
```
```javascript
// cookie.js
export function get(name) { /** CODE */ }
export function set(name, value) { /** CODE */ }

// storage.js
export function get(name) { /** CODE */ }
export function set(name, value) { /** CODE */ }

// memory.js
export function get(name) { /** CODE */ }
export function set(name, value) { /** CODE */ }

// db.js
export default class DB { /** CODE */ }

// 代理存储的存取行为
// index.js
import * as cookie from './cookie'
import * as storage from './storage'
import * as memory from './memory'
import DB from './db'

export function get(name) { /** CODE */ }
export function set(name, value) {
  if (useCookie) return cookie.set(name, value)
  else if (useDB) {
    const db = new DB()
    db.connect().set(name, value)
    queueMicrotask(() => db.close())
  }
}
```
保护代理例子：Vue3 中的响应式 API reactive/ref，通过调用或修改它们定义的代理对象的值，带来的作用是实现双向数据绑定，满足视图和数据之间的同步；
### [组合模式（Composite）](https://mp.weixin.qq.com/s/_kZx10rO5kfOj33TsGv7YA)
**意图**：将对象组合成树形结构以表示“部分-整体”的层次结构，使得用户对单个对象和组合对象的使用具有一致性。
**场景**：想表示对象的部分-整体层次结构；希望用户忽略组合对象与单个对象的不同，统一地使用组合结构中的所有对象。
例如，Vue 中的组件构建模式，如按钮、图标等是较细粒度的组件，但这些组件通过组合也可以组成一个新的图标按钮，或者通过 Mixin 或 Hooks 扩展可以派生出其他更复杂的组件。
![](https://cdn.nlark.com/yuque/0/2024/webp/38412621/1714377286975-cd84eb81-88df-41cd-a4a4-352ec84e44f9.webp#averageHue=%23f6f6f6&clientId=uab310fb3-8411-4&from=paste&height=312&id=u188fdc87&originHeight=460&originWidth=1080&originalType=url&ratio=1&rotation=0&showTitle=false&status=done&style=none&taskId=u76c0fcc7-1dee-4a57-8358-a8de1960d37&title=&width=732)
###  [适配器模式（Adapter）](https://mp.weixin.qq.com/s/gyfD0ZY50Ysw-CSaRphaCQ)
**意图**：将一个类的接口转换成客户期望的另一个接口，使得原本不兼容的类可以一起工作。
**场景**：系统需要使用现有的类，而这些类的接口不符合系统的需求；想要创建一个可以重复使用的类，用于与一些彼此之间没有太大关联的一些类一起工作。
### [装饰器模式（Decorator）](https://mp.weixin.qq.com/s/2Uml6--24xQGCJ-2KMGJpQ)
**意图**：动态地给一个对象添加一些额外的职责。装饰器提供了比继承更有弹性的替代方案。
**场景**：在不影响其他对象的情况下，以动态、透明的方式给单个对象添加职责。
### [外观模式（Facade）](https://mp.weixin.qq.com/s/yZlimVwEjEp9rdS5GB9nBw)
**意图**：为子系统中的一组接口提供一个统一的高层接口，使子系统更容易使用。
**场景**：为复杂的子系统提供一个简化的接口；客户程序与抽象类的实现部分之间存在着很大的依赖性。
### [享元模式（Flyweight）](https://mp.weixin.qq.com/s/s6g9BDqPYYgZTM8w-I5Xow)
**意图**：运用共享技术有效地支持大量细粒度的对象。
**场景**：系统中有大量相似对象；对象的大部分状态都可以外部化；对象的创建成本较高，但存储成本较低。
### [桥接模式（Bridge）](https://mp.weixin.qq.com/s/8_--YCHgGPtYRzADQytUpQ)
**意图**：将抽象部分与它的实现部分分离，使它们都可以独立地变化。
**场景**：当一个系统需要在多种形态之间切换时，或者如果一个系统的部分和整体都需要独立进行扩展时。
## 行为型模式
### [观察者模式（Observer）](https://mp.weixin.qq.com/s/VIIbKEf-qWfaYdaD7wWCWA)
**意图**：定义了对象之间的一对多依赖关系，当一个对象的状态发生改变时，所有依赖于它的对象都会得到通知并被自动更新。
**场景**：当一个对象的改变需要同时改变其他对象，而且它不知道具体有多少对象需要改变时。
例如，前端中的事件调度就是一个典型的观察者模式的体现，如 [EventTarget](https://developer.mozilla.org/zh-CN/docs/Web/API/EventTarget/EventTarget), Node.js [EventEmitter](https://nodejs.org/download/docs/v14.12.0/api/events.html#events_class_eventemitter)。
### [策略模式（Strategy）](https://mp.weixin.qq.com/s/_5eyY3zmcQhQkLoX_wRc8A)
**意图**：定义了一系列算法，并将每一个算法封装起来，使它们可以相互替换。策略模式让算法的变化独立于使用它的客户。
**场景**：许多相关类仅仅是行为有异，需要使用一个共同的接口，而使用继承无法达到这种效果时。
```typescript
import { Platform, Platforms } from '../Platform'

// export abstract class HttpClient {
export class HttpClient {

	/**
	 * 抽象方法：
   * 不同平台实现请求发送的核心逻辑，该类定义的其他方法如 `get`, `post` 都是基于该实现。
	 */
	// public abstract send(request: HttpRequest): Promise<HttpResponse>
	public send(request: HttpRequest): Promise<HttpResponse> {
    let sendCore: (req: HttpRequest) => Promise<HttpResponse>
    switch (Platform.envName) {
  		case Platforms.Browser:
  		case Platforms.WebWorker:
    		sendCore = XhrHttpClient.send
  			break
  		case Platforms.UniApp:
  			sendCore = UniHttpClient.send
  			break
  		case Platforms.WechatMP:
  			sendCore = WxHttpClient.send
  			break
  		case Platforms.Node:
  		case Platforms.Unknown:
  		default:
  			throw new Error('没有内置的可用的 Http 客户端。')
  	}
    return sendCore(request)
  }

	/** 发起一个 GET 请求 */
	public get(url: string): Promise<HttpResponse>
	public get(url: string, options: HttpRequest): Promise<HttpResponse>
	public get(url: string, options?: HttpRequest): Promise<HttpResponse> {
		return this.send({
			...options,
			method: 'GET',
			url
		})
	}

	/** 发起一个 POST 请求 */
	public post(url: string): Promise<HttpResponse>
	public post(url: string, options: HttpRequest): Promise<HttpResponse>
	public post(url: string, options?: HttpRequest): Promise<HttpResponse> {
		return this.send({
			...options,
			method: 'POST',
			url
		})
	}

	/** 发起一个 DELETE 请求 */
	public delete(url: string): Promise<HttpResponse>
	public delete(url: string, options: HttpRequest): Promise<HttpResponse>
	public delete(url: string, options?: HttpRequest): Promise<HttpResponse> {
		return this.send({
			...options,
			method: 'DELETE',
			url
		})
	}
}
```
### [模板方法模式（Template Method）](https://mp.weixin.qq.com/s/P7xWe3ltXizfPeU400GZNg)
**意图**：定义一个操作中的算法骨架，而将一些步骤延迟到子类中。模板方法使得子类可以在不改变算法结构的情况下，重新定义算法中的某些步骤。
**场景**：一次性实现一个算法的不变部分，并将可变的行为留给子类来实现。
示例一：通过类（class）实现的例子有[3.2.3抽象工厂模式（Abstract Factory）](#GVcNB)中的示例；
示例二：
```typescript
// @medcrab-common/base-data/src/service/BaseDataService.ts
// http://git.medcrab.com/saas-html/medcrab-common/blob/prod/basedata/packages/base-data/src/service/BaseDataService.ts

/** 基础数据的数据存取及事件调度服务的核心逻辑。*/
export class BaseDataService<T, I> {
  // [CODE] ...

  public constructor(core: ServiceCoreHandler<T>, initValue?: I) {
		const { promise, resolve, reject } = withPromiseResolvers<T, Error>()
		this._async = promise
		this._async.catch(noop) // 避免 Promise Uncaught Error.

		const self = this
		// self._initData = initValue!
		self.data = initValue as any

		useMicrotask(() => {
			let hasTriggerService = false
			const hooks: IServiceHooks<T> = { // 【访问者模式的体现】
				setData(data) {
					hasTriggerService = true
					self._syncAndDispatch(data)
					return data
				},
				hasLoaded() {
					return self._successed
				}
			}
			Promise.resolve(core(hooks))
				.then(
					(r) => {
						if (!hasTriggerService) {
							// 如果忘记派发事件，则在这里取最终值
							self._syncAndDispatch(r)
						}
						resolve(r)
						self._asyncCompleted = true
					},
					(err: Error) => {
						hasTriggerService = true
						console.error('[BaseData] 服务执行过程中出现错误。', err)
						self.emitFail(err)
						reject(err)
						self._asyncCompleted = true
					}
				)
				.catch((serviceErr) => {
					console.error('[BaseData] 服务执行正常结束，但在内部处理后续数据状态时出现错误：', serviceErr)
				})
				.finally(() => {
					// 检测在具体的Service中是否有触发事件，没有触发可能是编码问题
					if (!hasTriggerService && Platform.DEV) {
						console.warn('[BaseData] 是否未在服务 %o 中同步数据。', core)
					}
					self.emitComplete()
				})
		})
	}
  
  public async(): Promise<IDataSuccessed<T, I>> {}
  public asyncWithState(): Promise<TDataWithStates<T, I>> {}
  public withCallback(callback: (arg: IDataSuccessed<T, I>) => void) {}
  public withStateCallback(callback: (arg: TDataWithStates<T, I>) => void) {}
  // [CODE] ...
}




// ------------------------- usage 1 -------------------------
// @medcrab-common/base-data/src/service/dic.ts
// http://git.medcrab.com/saas-html/medcrab-common/blob/prod/basedata/packages/base-data/src/service/dic.ts
import { BaseDataService } from './BaseDataService'

export function getDics<I>(type: string, options?: IBaseDataOption<I>) {
	const latest = options?.latest
	const { dicAdapter, dicDetailAdapter } = getCacheAdapter()
	const service = new BaseDataService<DicArray, I>(async function getDicServiceCore({ setData, hasLoaded }) {
		// dic
		let dic = await dicAdapter.get(type)
		if (!dic || latest) {
			// try load all `Dic`
			const { newVersion: dicNewVer, request: reqDic } = await getApi(API_DIC, latest)
			if (!dic || dicNewVer) {
				const dics = await reqDic<DicPlain[]>().then((r) => r || [])
				useIdleCallback(() => dicAdapter.set(dics))
				dic = dics.find((e) => e.type === type)
			}
		}
		if (!dic) {
			throw new NotFoundError(`未找到关于数据字典 "${type}" 的配置数据。`)
		}
		// dic-detail
		const dicDetails = await dicDetailAdapter.get(dic.dicId)
		if (dicDetails.length) {
			setData(dicDetails)
			if (!latest) {
				return dicDetails
			}
		}
		// try load all `DicDetail`
		const { newVersion: detailNewVer, request: reqDetail } = await getApi(API_DIC_DETAIL, latest)
		if (!hasLoaded() || detailNewVer) {
			const details = await reqDetail<DicDetailPlain[]>().then((r) => r || [])
			useIdleCallback(() => dicDetailAdapter.set(details))
			const founds = details.filter((e) => e.dicId === dic!.dicId)
			if (founds.length) {
				return setData(founds)
			}
		}
		if (!dicDetails.length) {
			throw new NotFoundError(`未找到关于数据字典 "${type}" 的详情配置数据。`)
		}
		return dicDetails
	}, getServiceInitData(options, [] as I))
	return service2Hooks(service)
}

// ------------------------- usage 2 -------------------------
// @medcrab-common/base-data/src/service/pca.ts
// http://git.medcrab.com/saas-html/medcrab-common/blob/prod/basedata/packages/base-data/src/service/pca.ts
export function getProvinces<I>(options?: IBaseDataOption<I>) {
	const latest = options?.latest
	const service = new BaseDataService<ProvinceArray, I>(async function getProvincesServiceCore({ setData, hasLoaded }) {
		const { provinceAdapter } = getCacheAdapter()
		const list = await provinceAdapter.get()
		if (list.length) {
			setData(list)
			if (!latest) {
				return list
			}
		}
		const { newVersion, request } = await getApi(API_PROVINCE, latest)
		if (!hasLoaded() || newVersion) {
			const serverList = await request<ProvincePlain[]>().then((r) => r || [])
			if (serverList.length) {
				useIdleCallback(() => provinceAdapter.set(serverList))
				return setData(serverList)
			}
		}
		if (!list.length) {
			throw new NotFoundError('未找到省份数据。')
		}
		return list
	}, getServiceInitData(options, [] as I))
	return service2Hooks(service)
}
```
### [访问者模式（Visitor）](https://mp.weixin.qq.com/s/QE1MovBK8wvQY9XbqPYuoQ)
**意图**：表示一个作用于某对象结构中的各元素的操作。它使你可以在不改变各元素类的前提下定义作用于这些元素的新操作。
**场景**：一个对象结构包含很多类对象，它们有不同的接口，而你想对这些对象实施一些依赖于其具体类的操作。
示例：见上模板方法模式中注释标记。
###  [中介者模式（Mediator）](https://mp.weixin.qq.com/s/w35WOPSR2Ahf3CRFDEFTgw)
**意图**：用一个中介对象来封装一系列的对象交互。中介者使各对象不需要显式地相互引用，从而使其耦合松散，而且可以独立地改变它们之间的交互。
**场景**：对象之间存在复杂的引用关系，导致它们之间的依赖关系结构混乱且难以理解。
### [命令模式（Command）](https://mp.weixin.qq.com/s/DloRG0jwO_WbI_pEyFPHiQ)
**意图**：将一个请求封装为一个对象，从而使你可用不同的请求对客户进行参数化；对请求排队或记录请求日志，以及支持可撤销的操作。
**场景**：需要将请求调用者和请求接收者解耦；需要支持请求的撤销操作；需要支持事务性的操作。
### [迭代器模式（Iterator）](https://mp.weixin.qq.com/s/1FQ11IdggN1xYLyCv85Oyw)
**意图**：提供一种方法顺序访问一个聚合对象的各个元素，而又不暴露其内部的表示。
**场景**：需要为聚合对象提供多种遍历方式；支持以不同的方式遍历一个聚合对象。
### [责任链模式（Chain of Responsibility）](https://mp.weixin.qq.com/s/TPPTgyrJrd0MigWLV0DXpg)
**意图**：使多个对象都有机会处理请求，从而避免请求的发送者和接收者之间的耦合关系。将这些对象连成一条链，并沿着这条链传递该请求，直到有一个对象处理它为止。
**场景**：有多个对象可以处理同一个请求，但具体由哪个对象处理请求在运行时确定；在不明确指定接收者的情况下，向多个对象中的一个提交一个请求。
### [状态模式（State）](https://mp.weixin.qq.com/s/XSR401_iu5jfQBZaEM4MPg)
**意图**：允许对象在其内部状态改变时改变其行为。对象看起来似乎修改了它的类。
**场景**：一个对象的行为取决于它的状态，并且它必须在运行时刻根据状态改变它的行为。
### [备忘录模式（Memento）](https://mp.weixin.qq.com/s/6g1negmL_Q9Ga8mowGByNQ)
**意图**：在不破坏封装性的前提下，捕获一个对象的内部状态，并在该对象之外保存这个状态。这样以后就可将该对象恢复到原先保存的状态。
**场景**：需要保存一个对象在某一个时刻的状态，以便在需要时恢复对象；如果用接口来让其他对象直接访问对象的状态，将会暴露对象的实现细节。
###  [解释器模式（Interpreter）](https://mp.weixin.qq.com/s/wWz7qDONzOP9qlT10IyDtg)
**意图**：给定一个语言，定义它的文法的一种表示，并定义一个解释器，该解释器使用该表示来解释语言中的句子。
**场景**：当有一个语言需要解释执行，并且你可将该语言中的句子表示为一个抽象语法树时。
# 抽象粒度——抽象的核心思维模式
软件设计中的抽象粒度是指在分解问题、设计模块或组件时，决定每个部分的**复杂度和独立性的程度**。合理的抽象粒度过大或过小都可能导致设计上的问题，如过度抽象可能引入不必要的复杂性，而粒度过小则可能导致重复代码和低效的模块间通信。
以下是在分析和设计时考虑抽象粒度的一些关键步骤和原则：
## 理解需求

- **深入理解业务需求**：首先，确保对整个系统的需求有清晰的理解，包括业务流程、用户交互、性能要求等；
- **考虑未来变化**：评估哪些部分最有可能随时间变化，这些通常是需要更高抽象层次的地方。
## 识别变化点

- **识别核心功能与变化因素**：通过分析，识别出系统中的核心功能以及可能变化的部分。变化频繁的领域通常需要更高的抽象级别来隔离变化。
## 划分模块和组件

- **单一职责原则**：每个模块或组件应该只负责一个功能，这样可以减少耦合，提高复用性；
- **高内聚低耦合**：确保模块内部元素紧密相关（高内聚），同时减少模块间的依赖（低耦合）；
- **模块化设计**：根据功能和逻辑关系将系统划分为多个模块，每个模块都是一个相对独立的单元。
## 设定合适的抽象层级

- **逐步细化**：从高层次的抽象开始，逐步向下细化到实现细节。在细化过程中，持续评估粒度是否合适；
- **可测试性和可维护性**：设计时考虑如何使模块易于测试和维护，这通常意味着适度的抽象和清晰的接口。
## 评估和迭代

- **反馈循环**：设计不是一次性的，需要根据实现过程中的反馈不断调整粒度；
- **代码审查和重构**：通过代码审查发现粒度不当的地方，并适时进行重构以优化设计。
## 实践和经验

- **学习和借鉴**：参考已有的设计模式和最佳实践，了解在类似场景下如何成功管理抽象粒度；
- **实践经验**：实际编程和项目经验对于掌握合适粒度的设计至关重要，实践中不断积累和学习。
# 前端中的组件设计
## 组件分类

- UI组件
   - 基础组件：如按钮、图标、输入框、标签、表格、下拉菜单等（@medcrab/medcrab-base-ui）；
   - 复合组件：多个基础组件的组合，如按钮菜单、表单等；
   - 业务组件：在纯UI组件的基础上含有特定的业务交互逻辑或与服务器有数据交换，如：@medcrab/medcrab-business-ui。
- SDK/工具库
   - 框架类：如 [Vue](https://cn.vuejs.org)、Reac、Angular、[uni-app](https://uniapp.dcloud.net.cn/)、[wx-mp](https://developers.weixin.qq.com/miniprogram/dev/framework/) 等；
   - 工具类：如 [Lodash](https://www.lodashjs.com/)、[Big.js](https://mikemcl.github.io/big.js)、[Day.js](https://dayjs.fenxianglu.cn/) 等；
   - 服务类：[ca-sdk-miniprogram](https://plugin-v3.medcrab.com/plugins/ca-sdk-miniprogram/getting-started.html)、[@medcrab-common/base-data](https://plugin-v3.medcrab.com/common/base-data/getting-started.html)、第三方支付API 等。
## 明确关注点（概要设计）

- **What**：要实现什么功能、解决什么问题，设计原则参见[3.1.1单一职责原则（Single Responsibility Principle, SRP）](#ZMvX2)；
- **Where**：功能适用的场景、平台；
- **How**：期望的结果是什么以及考虑在当下的技术栈下如何实现，必要情况下应对关键技术难点进行调研。
> 具体示例详见[基础设计详细设计](https://medcrab.yuque.com/gaan8x/gtn44f/kklrga11fxw9x1q0#lqvgn)。

## 接口设计（输入输出）
这里的接口并非特指（如 TypeScript 中的 interface），而是一个表示设计的组件与外部调用者直接进行数据和行为交互方式的宽泛概念，包括程序中的**参数、属性、插槽、返回值、事件**等。

- **抽象统一与变化**：这是组件设计的核心，明确统一和变化是设计一个合理、健壮的组件的前提。统一部分是组件需要完成的主体和核心工作，即需要解决的核心问题；变化部分是组件面临的不同业务场景带来的不同输入以及需要应对的问题；
- **最小暴露原则**：只对外暴露必要的属性和方法，隐藏内部实现细节，减少外部对组件内部的依赖，原则参见[3.1.6迪米特法则（Law of Demeter, LoD）/ 最少知识原则（Principle of Least Knowledge）](#WSYRH)；
- **灵活性与可配置性**：根据需要设计丰富的参数（Props/Slots/Returns等），允许使用者自定义外观和行为；
- **命名规范**：组件和API的命名应直观、描述性强，遵循项目内的命名约定，使得开发者能够快速理解其用途；
- **接口一致性**：确保所有组件的API在参数命名、类型、行为上保持一致，减少学习成本；
- **类型安全与文档**：使用 TypeScript 等工具为组件定义类型，增强代码的健壮性和可维护性；提供清晰的组件文档，包括使用方法、属性列表、事件说明和示例代码。
## 通信方式（数据交互）
JavaScript 中：

- **函数参数与返回值**：JavaScript中处理输入、输出的最基本编程单元；
- **全局成员**：挂载在当前运行时宿主环境下，如：浏览器中 window/self（新的页面生命周期下之前的全局挂载将失效），微信小程序中与 uni-app 中的 globalData，nodejs 中的 global；
- **全局缓存**：如：cookie，localStorage/sessionStorage，indexDB，wx.getStorage，uni.getStorage，SQLite 等。其存取的操作过程一般需要通过设计手段来严格管理数据的存取入口，否则不易监控数据的流向和接口维护；
- **Callback/Promise**：用于解决异步通信的编程方式。在调用时，只需定义好在不同条件分支下需要执行的函数体即可（不一定都会执行），区别在于，Promise 是一套同意标准的异步编程方案，而回调函数一般是组件或 SDK 提供方根据设计需要自行定义的一些列参数列表。
- **Event/Pub-Sub**：也是用于解决异步通信的编程方式，但在程序设计思想上与 Callback/Promise 不同。直白的说，Callback/Promise 的编程方式只有在执行某个操作后才会选择性执行回调或 Promise 定义的函数体（定量），而 Event/Pub-Sub 的编程方式是在事先就可以订阅多个某操作的副作用（不定量）。相关设计模式参见[3.4.1观察者模式（Observer）](#OEXas)。

Vue 中：

- **父组件 -> 子组件**
   - props/slots；
   - 通过 ref 调用子组件实例；
   - 父组件使用 provide 给下级组件注入数据。
- **子组件 -> 父组件**
   - emits；
   - 通过 $parent/$root 访问父级或根组件实例；
   - 子组件通过 inject 使用上级组件注入(provide) 的数据。
- **状态管理**：Pinia/Vuex 等数据状态管理组件；
- **路由参数**：通过 params 或 query 传递数据。


## 模块化运用
前端模块化是一种编程实践，旨在通过将大型的前端应用程序分解为一系列小型、可管理的代码单元（即模块）来改善代码的组织结构、可维护性和可重用性。我们需要从业务和编码两个角度来理解模块化：
**业务模块化**：即如何根据需求去抽象和设计软件，具体详见[4抽象粒度——抽象的核心思维模式](#SXPlh)。
**编码模块化**：现代前端开发更倾向于使用ES6模块系统，它提供了内置的模块隔离和导入导出机制，更加高效和易于管理，详见[ES6 Module](https://es6.ruanyifeng.com/#docs/module)。直白的说，在 ES6 Module 中，一个文件就是一个模块，了解模块内部的运行机制和构成，可以帮助我们更好的组织和书写代码。
```javascript
 (function(root, factory) {
   if (typeof define === 'function' && define.amd) {
     // AMD
     define('myModule', [], factory);
   } else if (typeof exports === 'object') {
     // CommonJS
     module.exports = factory();
   } else {
     // 浏览器全局变量
     root.myModule = factory();
   }
 })(this, function() {
   var message = 'default message of myModule.'
   return function() {
     console.log('Hello, world!' + message);
   };
 });
```
在这个例子中，模块内容被包裹在一个立即执行的函数（**IIFE**）中，形成了独立的作用域，从而实现了变量和函数的隔离（**闭包**）。通过将需要公开的成员挂载到 window 或其他全局对象上，实现了模块间的通信。

```javascript
/// a.js
// 无法通过 window.catName 访问，因为除了 export 的成员，
// 其他成员都是一个独立作用域函数内的内部常量。
const catName = 'Tom'
export let name = catName
export function changeName(newName) {
  name = newName
}

/// b.js
import { name } from 'a.js'
console.log(name) // "Tom"


/// c.js
// ES Module 导入的不是一个真正的值，而是这个值的内存引用，即使这个值是值类型；
// 因此，导入的成员也是“单例的”
import { name, changeName } from 'a.js'
changeName('Jerry')
console.log(name) // "Jerry"
```
扩展：[CommonJS(Node.js) 和 ES Module 的区别](https://es6.ruanyifeng.com/#docs/module-loader)。
## 性能优化
简单的说，要程序跑得快，必须在程序运行时的**时间复杂度**和**空间复杂度**上达到一个平衡，即消耗较小的内存空间较快的完成一个程序单元的运行。
### 交互、构建优化
#### 减少HTTP请求

- **合并文件**：将CSS、JavaScript和其他静态资源合并成较少的文件，减少HTTP请求的数量；
- **图片合并**：使用CSS精灵（sprites）或雪碧图合并多个小图标；
- **使用图标字体**（Icon Fonts）：代替图片来显示图标；
- **减少API请求**：通过合并请求，并对 API 响应进行服务端 Gzip 压缩。
#### 压缩资源

- **压缩CSS和JavaScript**：使用工具如Gzip、UglifyJS或Terser进行压缩，减少文件大小；
- **优化图片**：使用适当的文件格式（如WebP）、压缩图片。
#### 缓存利用

- **设置HTTP缓存**：通过设置Cache-Control和ETag等HTTP头，利用浏览器缓存；
- **持久缓存**：使用 Cookie, Storage, IndexDB, SQLite 等缓存接口。
#### 延迟加载

- **懒加载**：只在需要时加载图像或其他资源；
- **预加载**：浏览器中使用`<link rel="preload">`或`<link rel="prefetch">`来预先加载重要资源，uni-app 中使用 [preloadPage](https://uniapp.dcloud.net.cn/api/preload-page.html#preloadpage) 预加载页面，微信小程序使用 [preloadWebview](https://developers.weixin.qq.com/miniprogram/dev/api/base/performance/wx.preloadWebview.html) 来预加载下个页面。
#### 代码优化

- **避免阻塞渲染**：将 JavaScript 放在`<body>`底部，或使用 `<link rel="async">`或`<link rel="defer">`属性；
- **减少DOM操作**：尽量减少对DOM的操作，特别是在页面渲染过程中，可使用 [DocumentFragment](https://developer.mozilla.org/zh-CN/docs/Web/API/DocumentFragment) 在内存中构建并一次性插入；
- **使用Service Worker**：通过新开独立线程来执行耗时操作密集型计算任务，详见：[Worker介绍](https://developer.mozilla.org/zh-CN/docs/Learn/JavaScript/Asynchronous/Introducing_workers)、[Service Worker API](https://developer.mozilla.org/zh-CN/docs/Web/API/Service_Worker_API)。
#### 减少重绘和回流

- **避免不必要的样式更改**：在动画和布局计算中避免触发重绘和回流；
- **使用CSS3动画和硬件加速**：利用GPU进行动画渲染。
#### 代码结构

- **模块化**：使用ES6模块或CommonJS，按需加载（懒加载）模块；
- **代码分割**：在SPA中，根据路由分割代码，只加载当前页面所需的代码。
### 编码优化
#### 减少全局变量
使用局部变量，减少对全局命名空间的污染，使用 IIFE 立即执行函数来隔离变量。
```javascript
function loadImage(type) {
  const img = new Image()
  img.onload = function() { /**/ }
  img.url = (function() {
    /* other code... */
    let img = ''
    if (type === 1) img = 'http://img.com/a.jpg'
    else if (type === 2) img = 'http://img.com/b.jpg'
    else img = 'http://img.com/c.jpg'
    return img
  })()
}
```
#### 避免冗余的条件检查
重构条件语句，减少不必要的检查。
```javascript
// 避免重复取值
let el
if ((el = document.querySelector('.el')) && el.classList.has('my-input')) {}
// 不推荐 ↓
if (document.querySelector('.el') && document.querySelector('.el').classList.has('my-input')) {}


// 简单或已知的判断前置
const isApp = true
if (isApp || document.querySelector('.el')) {}
// 不推荐 ↓
if (document.querySelector('.el') || isApp) {}
```
#### 缓存计算结果
对昂贵的计算结果进行缓存，避免重复计算。
```javascript
let result
export function calc() {
  if (!result) {
    // Do something...
    retsult = { /**/ }
  }
  return result
}
```
#### 选择合适的数据结构
Array/Set 适用于存储有序的数据列表，而 Object/Map 适用于存储一系列的键值对(Key-Value pairs)。

- 利用 Set 对数组去重，对于数组中的引用类型元素，比较是否相同时根据引用的内存地址，而非形似；
```javascript
function dedupe(array) {
  return Array.from(new Set(array));
}
```

- 利用 Object/Map 快速获取数据，键值对的数据查找比有序列表效率高得多；
```typescript
interface User {
  id: string
  name: string
  amount: number
}
// 将数组转换为对象，可以根据唯一键值`id`快速提取数据
function arr2Obj(arr: User[]) {
  const obj: Record<User['id'], User> = {}
  arr.forEach((u) => obj[u.id] = u)
  return obj
}

const userMap = arr2Obj([/* 很多用户数据 */])
const user1 = userMap['user-1-id']
const user2 = userMap['user-2-id']
```
#### 选择合适的算法/方法
理解你要使用函数的真实含义和意图，避免不必要的开销和不可预知的问题。
例如下面例子中，本身意图是想循环数组，变更数组元素（对象）的内部值，但使用了 map 方法去循环数组，map 方法具有一个返回值（数组），即使在代码中没有声明返回值的引用，但在内存中实际是占用了一定的空间。
```javascript
cosnt arr = [/* ... */]
arr.map((e) => { // 这里应使用 `forEach`，`map`会生成一个新的数组
  e.amount = CrabNumber(e.amount).div(1000).toNumber()
})
```
[常用的数组实例方法](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array)：
查找：_**indexOf, findIndex, find, filter, includes, some, every**_
修改：_**reverse, splice, sort, push, pop, unshift, shift**_
构建：_**slice, map, join, concat**_
#### 避免阻塞主线程
可以将不是很紧急或对执行时机没有特殊要求的操作延迟执行。

- [setTimeout](https://developer.mozilla.org/zh-CN/docs/Web/API/setTimeout#delay)：不传入延迟毫秒数，在下一个事件循环执行任务；
- [queueMicrotask](https://developer.mozilla.org/zh-CN/docs/Web/API/queueMicrotask)：往微任务队列中插入一个任务，即在当前调用堆栈的同步代码执行完成后立即执行其注册的任务；
- [Promise.then/catch](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise/then#onfulfilled)：执行时机与 queueMicrotask 相同；
- [requestIdleCallback](https://developer.mozilla.org/zh-CN/docs/Web/API/Window/requestIdleCallback)：在浏览器空闲时执行任务；
- [requestAnimationFrame](https://developer.mozilla.org/zh-CN/docs/Web/API/window/requestAnimationFrame)：在浏览器下一次重绘前执行任务；
- [Worker API](https://developer.mozilla.org/zh-CN/docs/Web/API/Web_Workers_API)：在新开得后台线程执行任务，可以与当前浏览器主线程通信。

示例1：【基础数据】在空闲时间缓存数据，不必等待或干扰主线程的正常数据获取。
![image.png](https://cdn.nlark.com/yuque/0/2024/png/38412621/1715061857487-2764f574-84cd-44a6-b30f-29167db2738b.png#averageHue=%2323201f&clientId=u0d39d8ae-b5ce-4&from=paste&height=535&id=u26d57025&originHeight=535&originWidth=1249&originalType=binary&ratio=1&rotation=0&showTitle=false&size=104662&status=done&style=none&taskId=u5b8dbb6d-ca0b-4597-aac9-48828028db7&title=&width=1249)
示例2：将消息提示（在条件分支里执行DOM构建出现卡顿）放置到程序末尾执行，预防界面渲染卡顿。![image.png](https://cdn.nlark.com/yuque/0/2024/png/38412621/1715063191332-b458d8ca-9817-448f-9b76-f4781fce9e17.png#averageHue=%232a2e37&clientId=u0d39d8ae-b5ce-4&from=paste&height=448&id=u3095262e&originHeight=448&originWidth=1471&originalType=binary&ratio=1&rotation=0&showTitle=false&size=180899&status=done&style=none&taskId=ub8fe4591-42b8-4a62-965d-c9677740eb0&title=&width=1471)
示例3：后置拦截，使用微任务获取同步代码中的所有操作
```javascript
class Collector {
  constructor() {
    queueMicrotask(() => console.log('已收集的数据', this))
  }
  setName(name) { this.name = name }
  setAge(age) { this.age = age }
  setFav(fav) { this.fav = fav }
}

var c1 = new Collector()
c1.setName('a')
c1.setAge(18)	// 已收集的数据 {name: 'a', age: 18}

var c2 = new Collector()
c2.setName('b') // 已收集的数据 {name: 'b'}
```
#### 内存管理

- [WeakMap](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/WeakMap)/[WeakSet](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/WeakSet)：保持对对象的弱引用，放置内存泄漏和垃圾回收不及时，以及可以防止循环引用；
```typescript
type ElResizeCallback = (entry: ResizeObserverEntry) => void
type El = Element | undefined

export class ElResizeObserver {
	private observer: ResizeObserver
	private cbs: WeakMap<Element, ElResizeCallback>
	constructor() {
		this.cbs = new WeakMap()
		this.observer = new ResizeObserver((entries) => {
			entries.forEach((entry) => this.cbs.get(entry.target)?.(entry))
		})
	}

	public observe(el: El, cb: ElResizeCallback, options?: ResizeObserverOptions) {
		if (el) {
			this.observer.observe(el, options)
			this.cbs.set(el, cb)
		}
	}

	public unobserve(el: El) {
		if (el) {
			this.observer.unobserve(el)
			this.cbs.delete(el)
		}
	}

	public disconnect() {
		this.observer.disconnect()
	}
}

```
- 合理使用对象引用
   - 引用类型数据（对象、数组、函数、Map、Set等）的真实值在内存空间是分配到堆空间的，栈空间存储的是堆空间的内存地址，而代码中的变量或常量名就是指向栈空间中存储的地址（这个存储地址在程序中页脚做**引用**）；
   - 引用类型数据的实例化（开辟堆内存空间）一般是通过 `new`关键字或通过 `[]``{}`等语法来实现，引用类型数据的赋值操作只是标记变量或常量名指向哪个堆内存地址而已。
```javascript
var arr = [1, 2, 3]
var arr2 = arr	// 赋值操作：将 arr 的内存地址复制一份给 arr2
console.log(arr === arr2) // true

var arrLike = [1, 2, 3]
console.log(arrLike === arr) // false
```

```javascript
// 代码片段一
const arr = []
for (let i = 0; i < 100000; i++) {
  arr[i] = { name: 'Name' }
}

// 代码片段二
const obj = { name: 'Name' }
const arr2 = []
for (let i = 0; i < 100000; i++) {
  arr2[i] = obj
}

// 片段一和片段二分别执行所消耗的内存空间谁更小？
```
# Vue3组件
## 编码结构
### 单文件组件（SFC）
Vue SFC 是一个框架指定的文件格式，因此必须交由 `@vue/compiler-sf` 编译为标准的 JavaScript 和 CSS，一个编译后的 SFC 是一个标准的 JavaScript(ES) 模块。SFC 中的`<template>`模板会预编译为 VNode 树，`<style>`标签一般会在开发时注入成原生的 `<style>` 标签以支持热更新，而生产环境下它们会被抽取、合并成单独的 CSS 文件。
当然，在一些轻量级场景下使用 SFC 会显得有些杀鸡用牛刀。因此 Vue 同样也可以在无构建步骤的情况下以纯 JavaScript 方式使用（如：defineComponent）。
更多资料：[Vue SFC](https://cn.vuejs.org/guide/scaling-up/sfc.html#introduction)。

```vue
<script setup>
  import { ref } from 'vue'
  const greeting = ref('Hello World!')
</script>

<template>
  <p class="greeting">{{ greeting }}</p>
</template>

<style>
.greeting {
  color: red;
  font-weight: bold;
}
</style>
```
### API接口（defineComponent）
在定义 Vue 组件时提供类型推导的辅助函数，通过 JavaScript 编程、tsx/jsx 等方式构建模板灵活性更高的组件。
更多资料：[API](https://cn.vuejs.org/api/general.html#definecomponent)。
```tsx
export default defineComponent({
  name: 'CrabTable',
  inheritAttrs: false,
  props: crabTableProps(),
  setup(props, { slots, attrs, expose }) {
    // 表格导出实例内容
    const exposed: CrabTableExposed = {
      setPagination,
      request() {
        // 兼容处理：外部调用此方法刷新数据时，可能修改了分页参数，需要等待内部分页参数同步完成后再发起请求
        nextTick(doRequest)
      }
    }
    expose(exposed)

    // OTHER CODE...

    return () => {
      return (
        <div ref={tableWrapper} class="crab-table-wrapper">
          <Table
            {...{
              ...mergeProps(
                {
                  class: {
                    'crab-table': true,
                    'crab-empty-last-right-border': !state.dataSource.length,
                    'crab-table-bordered-cell': props.borderedCell
                  }
                },
                attrs
              ),
              ...omit(props, ['autoHeight', 'autoLoad', 'bordered', 'request', 'title', 'filter', 'onConfirmEdit', 'changedTipOnCancelEdit', 'expandAccordion']),
              dataSource: state.dataSource,
              bordered: props.bordered || props.borderedCell,
              loading: state.loading,
              pagination: false,
              size: tableSize.value,
              scroll: tableScroll.value,
              expandedRowKeys: state.expandedRowKeys,
              onExpandedRowsChange(keys) {
                const ks = keys.slice()
                if (props.expandAccordion && ks.length > 1) {
                  ks.splice(0, ks.length - 1)
                }
                state.expandedRowKeys = ks
                props.onExpandedRowsChange?.(ks)
              }
            }}
            >
            {{
              ...slots,
              emptyText: slots.emptyText || (() => h(CrabEmpty)),
              title: tableTitleSlot,
              bodyCell: tableBodyCellSlot
            }}
          </Table>
          {props.pagination ? (
          props.request ? (
            <CrabPagination
              v-show={state.total > 0}
              v-models={[
                [state.pageIndex, 'current'],
                [state.pageSize, 'pageSize']
              ]}
              total={state.total}
              onChange={onPagerChange}
              {...pagerRestProps.value}
              />
          ) : (
            <CrabPagination v-show={!!pagerProps.value.total} {...pagerProps.value} />
          )
        ) : null}
        </div>
      )
    }
  }
})
```
### 函数式组件（Functional Component）
函数式组件是一种定义自身没有任何状态的组件的方式。它们很像纯函数：接收 props，返回 vnodes。函数式组件在渲染过程中不会创建组件实例 (也就是说，没有 this)，也不会触发常规的组件生命周期钩子。
更多资料：[Vue 函数式组件介绍](https://cn.vuejs.org/guide/extras/render-function.html#functional-components)。
```tsx
import type { FunctionalComponent } from 'vue'
import { install } from '../utils'
import type { CrabVNodeProps } from './interface'

const VNode: FunctionalComponent<CrabVNodeProps> = (props) => props.vnode
VNode.displayName = 'CrabVNode'
VNode.props = { vnode: { required: true } }

export const CrabVNode = install(VNode)
export default CrabVNode

```
## 核心：渲染函数
详细资料：[渲染函数API](https://cn.vuejs.org/api/render-function.html#h)。
## 组件通信
父传子：

- props 属性绑定传值；
- 父组件中使用 ref 调用子组件实例；
- 父组件中使用 provide；

子传父：

- emits 事件通知；
- 子组件中使用 $parent/$root 访问父组件实例；
- 子组件中使用 inject。
