在工作中对于 css 中常使用到 after 和 before

##概念
CSS 中，::before 创建一个伪元素，其将成为匹配选中的元素的第一个子元素。常通过 content 属性来为一个元素添加修饰性的内容。此元素默认为行内元素。

CSS 伪元素::after 用来创建一个伪元素，作为已选中元素的最后一个子元素。通常会配合 content 属性来为该元素添加装饰内容。这个虚拟元素默认是行内元素。

下面通过例子对 after 和 before 进行学习

1、在元素前后添加内容
[test.html](./test.html)

2、给div框创建箭头

[test.html](./test.html)