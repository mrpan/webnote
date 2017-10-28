错误：
This request has been blocked; the content must be served over HTTPS

解决方法：
<meta http-equiv="Content-Security-Policy" content="upgrade-insecure-requests">

可以在相应的页面的<head>里加上这句代码，意思是自动将http的不安全请求升级为https