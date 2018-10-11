# Flux

Flux将一个应用分成四个部分：

* View： 视图层
* Action（动作）：视图层发出的消息（比如mouseClick）
* Dispatcher（派发器）：用来接收Actions、执行回调函数
* Store（数据层）：用来存放应用的状态，一旦发生变动，就提醒Views要更新页面

![](https://github.com/facebook/flux/blob/master/docs/img/flux-diagram-white-background.png)

### 相关链接

[flux](https://github.com/facebook/flux)   
[Flux 架构入门教程](http://www.ruanyifeng.com/blog/2016/01/flux.html)