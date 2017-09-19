javascript 创建svg元素
```javascript

 var svg =document.getElementById('limit-svg');
 var newElement = document.createElementNS("http://www.w3.org/2000/svg", 'g');
 newElement.setAttribute("id","zoomandpan")
document.getElementById('limit-svg').appendChild(newElement);
```

绑定事件
```javascript

```svg.addEventListener("mousedown", function(event){
  console.log(event);
  var x =event.clientX;
  var y =event.clientY;
  pt.x =x;
  pt.y =y;
   pan=true;
  var transforms= $("#container").attr("transform"); 
  nowtransforms = getTranslation(transforms);
  flag=0;
});

获取当前tranform matrix
```javascript
var matrix = g.transform.baseVal.consolidate().matrix;
```

获取translate值
```
function getTranslation(transform) {
  // Create a dummy g for calculation purposes only. This will never
  // be appended to the DOM and will be discarded once this function 
  // returns.
  var g = document.createElementNS("http://www.w3.org/2000/svg", "g");
  
  // Set the transform attribute to the provided string value.
  g.setAttributeNS(null, "transform", transform);
  
  // consolidate the SVGTransformList containing all transformations
  // to a single SVGTransform of type SVG_TRANSFORM_MATRIX and get
  // its SVGMatrix. 
  var matrix = g.transform.baseVal.consolidate().matrix;
  console.log(g.transform.baseVal.consolidate())
  // As per definition values e and f are the ones for the translation.
  return [matrix.e, matrix.f];
}
```