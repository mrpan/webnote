javascript 创建svg元素
```javascript

 var svg =document.getElementById('limit-svg');
 var newElement = document.createElementNS("http://www.w3.org/2000/svg", 'g');
 newElement.setAttribute("id","zoomandpan")
document.getElementById('limit-svg').appendChild(newElement);
```