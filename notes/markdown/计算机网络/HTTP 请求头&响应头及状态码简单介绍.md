<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->

- [HTTP 请求头/响应头及状态码简单介绍](#http-%E8%AF%B7%E6%B1%82%E5%A4%B4%E5%93%8D%E5%BA%94%E5%A4%B4%E5%8F%8A%E7%8A%B6%E6%80%81%E7%A0%81%E7%AE%80%E5%8D%95%E4%BB%8B%E7%BB%8D)
  - [一、HTTP 请求头/响应头](#%E4%B8%80http-%E8%AF%B7%E6%B1%82%E5%A4%B4%E5%93%8D%E5%BA%94%E5%A4%B4)
    - [1.1 HTTP 请求头](#11-http-%E8%AF%B7%E6%B1%82%E5%A4%B4)
    - [1.2 HTTP 响应头](#12-http-%E5%93%8D%E5%BA%94%E5%A4%B4)
  - [二、HTTP 状态码](#%E4%BA%8Chttp-%E7%8A%B6%E6%80%81%E7%A0%81)
    - [2.1 `2XX`](#21-2xx)
    - [2.2 `3XX`](#22-3xx)
    - [2.3 `4XX`](#23-4xx)
    - [2.4 `5XX`](#24-5xx)
  - [三、参考](#%E4%B8%89%E5%8F%82%E8%80%83)
  - [四、总结 & Last](#%E5%9B%9B%E6%80%BB%E7%BB%93--last)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

# HTTP 请求头/响应头及状态码简单介绍

> **坚持，记笔记 😀, 加油!**

## 一、HTTP 请求头/响应头

### 1.1 HTTP 请求头

一个 HTTP 请求报文包括：**请求头**、**请求空行**、**请求体**
| Header | 第二列 | 示例 |
|:------:|:------:|:------:|
|`Accept`|指定客户端能够接收的内容类型|`Accept: text/plain, text/html`|

### 1.2 HTTP 响应头

响应报文与请求报文一样，都由三个部分组成（响应行,响应头,响应体）。

## 二、HTTP 状态码

**HTTP 状态码**（<font face="Monaco">HTTP Status Code</font>）是用以表示网页服务器超文本传输协议**响应状态**的 3 位数字代码。所有状态码被分为五类，状态码的第一个数字代表了响应的五种状态之一，总的来说分为五种：

| 分类  |         状态码英文描述          |          分类描述          |
| :---: | :-----------------------------: | :------------------------: |
| `1XX` |   Information (信息性状态码)    |     接收的请求正在请求     |
| `2XX` |      Success (成功状态码)       |      请求正常处理完毕      |
| `3XX` |   Redirection (重定向状态码)    | 需要进行附加操作以完成请求 |
| `4XX` | Client Error (客户端错误状态码) |     服务器无法处理请求     |
| `5XX` | Server Error (服务器错误状态码) |     服务器处理请求出错     |

下面介绍常用的几种状态码

### 2.1 `2XX`

- `200 OK` 请求成功，表示从客户端发送给服务器的请求被正常处理并返回；
- `204 No Content` 请求成功，但没有资源可以返回；
- `206 Partial Content` 表示客户端进行了范围请求，并且服务器成功执行了这部分的 `GET` 请求，响应报文中包含由`Content-Range`指定范围的实体内容。

### 2.2 `3XX`

- `301 Move Permanently` **永久性重定向**，表示请求的资源被分配了新的 URL，之后应使用更改的 URL；
- `302 Found` **临时性重定向**，表示请求的资源被分配了新的 URL，希望本次访问使用新的 URL；_这里 `301` 和 `302` 的小区别前者是永久移动，后者是临时移动（之后可能还会更改 URL）_；
- `303 See Other` 表示请求的资源被分配了新的 URL，应使用 `GET` 方法定向获取请求的资源;_`302` 与 `303` 的区别：后者明确表示客户端应当采用 `GET` 方式获取资源_；
- `304 Not Modified` 表示在客户端采用带条件的访问某资源时，服务端找到了资源，但是这个请求的条件不符合。跟重定向无关；
- `307 Temporary Redirect` **临时性重定向**，在 `GET`、`HEAD` 这些幂等的请求方式上，`302`、`303`、`307` 没啥区别，而对于 `POST` 就不同了，大部分浏览器 都会 `302` 会将 `POST` 请求转为 `GET`，而 `303` 是规范强制规定将 `POST` 转为 `GET` 请求，请求地址为 `header` 头中的 `Location`，`307` 则不一样，规范要求浏览器继续向 `Location` 的地址 `POST` 内容（关于`302`、`303`和`307 `的区别更详细的介绍参见[关于 HTTP 307 状态码](https://zhangzifan.com/http-307-code.html)）。

### 2.3 `4XX`

- `400 bad request` 表示请求报文中存在语法错误；
- `401 unauthorized` 未经许可，需要通过 HTTP 认证；
- `403 forbidden` 服务器拒绝该次访问（访问权限出现问题）；
- `404 not found` 表示服务器上无法找到请求的资源，除此之外，也可以在服务器拒绝请求但不想给拒绝原因时使用。

### 2.4 `5XX`

- `500 internal server error` 表示服务器在执行请求时发生了错误，也有可能是 web 应用存在的 bug 或某些临时的错误时；
- `503 service unavailable` 表示服务器暂时处于超负载或正在进行停机维护，无法处理请求；

## 三、参考

<!-- [常用的 HTTP 状态码（面试常被问……）](https://blog.csdn.net/beyond150/article/details/102128827) -->

## 四、总结 & Last

如果有任何疑问欢迎在评论区友好交流呦 😆。

> [**@Javascript HTTP 请求头及状态码简单介绍**](https://blog.csdn.net/qq_45265059)，欢迎关注[**我**](https://blog.csdn.net/qq_45265059)呦 😆，还有我的<font face="Hack">**Github**[**@ienyh**](https://github.com/ienyh)<font>一起学习哈哈哈 👨‍💻
