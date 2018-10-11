# Mobx

简单、可扩展的状态管理，它通过透明的函数响应式编程(transparently applying functional reactive programming - TFRP)使得状态管理变得简单和可扩展。MobX背后的哲学很简单:

任何源自应用状态的东西都应该自动地获得。

其中包括UI、数据序列化、服务器通讯，等等。

![](https://cn.mobx.js.org/flow.png)

React 和 MobX 是一对强力组合。React 通过提供机制把应用状态转换为可渲染组件树并对其进行渲染。而MobX提供机制来存储和更新应用状态供 React 使用。

对于应用开发中的常见问题，React 和 MobX 都提供了最优和独特的解决方案。React 提供了优化UI渲染的机制， 这种机制就是通过使用虚拟DOM来减少昂贵的DOM变化的数量。MobX 提供了优化应用状态与 React 组件同步的机制，这种机制就是使用响应式虚拟依赖状态图表，它只有在真正需要的时候才更新并且永远保持是最新的。

### 相关链接
[mobx](https://github.com/mobxjs/mobx)   
[mobx-react](https://github.com/mobxjs/mobx-react)
