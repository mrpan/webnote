这两天使用了geotools包做了geometry的buffer 以及inserction
#buffer
geometry.buffer
需要注意的是如果要使用米作为缓冲的距离，如果geometry使用的是wgs84坐标，需要将坐标系转换后再缓冲 核心代码如下：
```java
                    Geometry point = (Point) geometry;
                    Point c = point.getCentroid();
                    double x = c.getCoordinate().x;
                    double y = c.getCoordinate().y;

                    String code = "AUTO:42001," + x + "," + y;
                    lambert = CRS.decode(code);
                    MathTransform toTransform = CRS.findMathTransform(WGS, lambert);
                    MathTransform fromTransform = CRS.findMathTransform(lambert, WGS);
                    point = JTS.transform(point, toTransform);
                    // add a buffer
                    Geometry buffer = point.buffer(distance, 30, BufferOp.CAP_ROUND);

                    // go back to WGS 84
                    buffer = JTS.transform(buffer, fromTransform);
```
其中我将坐标系转成了utm(全球通用横轴墨卡托投影)auto:42001
BufferOp.CAP_ROUND 可以定义缓冲样式

#intersects 和intersection
api如下：
public boolean intersects(Geometry g)

public Geometry intersection(Geometry other)

代码如下：
```java
if(gridPolygon.intersects(cGeom)){
     Geometry intersection = cGeom.intersection(gridPolygon);
}
```
