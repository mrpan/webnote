#Object.create
对象创建
```js
Object.create(proto[, propertiesObject])

```
常用于js继承
```js
ol.inherits = function(childCtor, parentCtor) {
  childCtor.prototype = Object.create(parentCtor.prototype);
  childCtor.prototype.constructor = childCtor;
};

function ParentClass(a, b) { }
ParentClass.prototype.foo = function(a) { }

function ChildClass(a, b, c) {
// Call parent constructor
 ParentClass.call(this, a, b);
}
ol.inherits(ChildClass, ParentClass);

var child = new ChildClass('a', 'b', 'see');
child.foo(); // This works.
```