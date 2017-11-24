#HTTP访问控制（CORS）

当一个资源从与该资源本身所在的服务器不同的域或端口请求一个资源时，资源会发起一个跨域 HTTP 请求。
 
比如，站点 http://domain-a.com 的某 HTML 页面通过 <img> 的 src 请求 http://domain-b.com/image.jpg。网络上的许多页面都会加载来自不同域的CSS样式表，图像和脚本等资源。
出于安全考虑，浏览器会限制从脚本内发起的跨域HTTP请求。例如，XMLHttpRequest 和 Fetch 遵循同源策略。因此，使用 XMLHttpRequest或 Fetch 的Web应用程序只能将HTTP请求发送到其自己的域。为了改进Web应用程序，开发人员要求浏览器厂商允许跨域请求.

跨域资源共享（ CORS ）机制允许 Web 应用服务器进行跨域访问控制，从而使跨域数据传输得以安全进行。浏览器支持在 API 容器中（例如 XMLHttpRequest 或 Fetch ）使用 CORS，以降低跨域 HTTP 请求所带来的风险。

IE9中jquery ajax 兼容性问题

ie8和ie9使用XDomainRequest

参考https://github.com/jaubourg/ajaxHooks/blob/master/src/xdr.js