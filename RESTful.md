###RESTful API 设计最佳实践
#每个资源使用两个URL

资源集合用一个URL，具体某个资源用一个URL：
```javascript

/employees         #资源集合的URL
/employees/56      #具体某个资源的URL

```
#用名词代替动词表示资源
```javascript
GET /employees
GET /employees?state=external
POST /employees
PUT /employees/56
```
#用HTTP方法操作资源

使用URL指定你要用的资源。使用HTTP方法来指定怎么处理这个资源。使用四种HTTP方法POST，GET，PUT，DELETE可以提供CRUD功能（创建，获取，更新，删除）。

获取：使用GET方法获取资源。GET请求从不改变资源的状态。无副作用。GET方法是幂等的。GET方法具有只读的含义。因此，你可以完美的使用缓存。
创建：使用POST创建新的资源。
更新：使用PUT更新现有资源。
删除：使用DELETE删除现有资源。

#推荐用复数名词
```javascript
/employees
/employees/21
```

#使用HTTP状态码
参考维基https://en.wikipedia.org/wiki/List_of_HTTP_status_codes

#返回有用的错误提示
#使用小驼峰命名法
#提供分页信息

以上参考http://blog.jobbole.com/112710/