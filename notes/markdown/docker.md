# Docker



>[跟胖哥一起学Docker](http://jspang.com/detailed?id=75#toc213)
>
>[Docker和虚拟机的对比](https://www.cnblogs.com/jie-fang/p/10279629.html)

docker version

```bash
Client:
 Version:         1.13.1
 API version:     1.26
 Package version: docker-1.13.1-205.git7d71120.el7.centos.x86_64
 Go version:      go1.10.3
 Git commit:      7d71120/1.13.1
 Built:           Wed Apr 28 13:37:12 2021
 OS/Arch:         linux/amd64

Server:
 Version:         1.13.1
 API version:     1.26 (minimum version 1.12)
 Package version: docker-1.13.1-205.git7d71120.el7.centos.x86_64
 Go version:      go1.10.3
 Git commit:      7d71120/1.13.1
 Built:           Wed Apr 28 13:37:12 2021
 OS/Arch:         linux/amd64
 Experimental:    false
```

docker image 

输入 `docker image` 命令后，会出现对于 Image 操作的所有命令和提示（算帮助信息吧）。

```bash
Usage:  docker image COMMAND

Manage images

Options:
      --help   Print usage

Commands:
  build       Build an image from a Dockerfile
  history     Show the history of an image
  import      Import the contents from a tarball to create a filesystem image
  inspect     Display detailed information on one or more images
  load        Load an image from a tar archive or STDIN
  ls          List images
  prune       Remove unused images
  pull        Pull an image or a repository from a registry
  push        Push an image or a repository to a registry
  rm          Remove one or more images
  save        Save one or more images to a tar archive (streamed to STDOUT by default)
  tag         Create a tag TARGET_IMAGE that refers to SOURCE_IMAGE

Run 'docker image COMMAND --help' for more information on a command.
```

## 镜像和容器概念和区别

镜像像是一个包含了 OS 文件系统和应用的对象，类似虚拟机的模板（比如 Window 10 镜像）。如果你是一个开发 者，可以把镜像看成面向对象编程中的只读类(read-only Class)。

容器和镜像几乎一模一样，唯一的区别是镜像是只读的，而容器上面有一个可读写层。所以 **容器 = 镜像 + 读写层**。

![](https://newimg.jspang.com/Docker4_ContainerAndImages.jpg)

## 容器

### 创建一个新容器

```bash
docker container run <image name>
```

### 查看容器的相关命令

```bash
docker container ls
```

如果要查看所有容器，包含已经停止的容器，可以加一个 `-a` 参数

```bash
docker container ls -a
```

输入命令后，就会显示出当前已经存在的容器，并且会列出对应的信息。

- CONTAINER ID : 容器对应的ID，这个是唯一的
- IMAGE : 使用的镜像名称，显示不同
- COMMAND : 执行的相关命令
- CREATED: 创建的时间
- STATUS: 目前镜像的状态，一般会有两种状态 Up 和 Exited.
- PORTS: 协议和端口
- NAMES: 容器的名称，名字是 Docker 随机生成的

### 停止容器

```bash
docker container stop <name or ID>
```

当容器停止后，再使用查看命令进行查看，你会发现没有任何容器。

### 删除容器

当我们停止容器之后，容器并没有删除，而只是停止掉了。这时候你可以使用下面的命令删除容器。

```bash
docker container rm <name or ID>
```

### 总结

- 容器的创建：docker container run nginx 简写方法 docker run nginx
- 容器的列出(up): docker container ls 简写方法 docker ps
- 容器的列出（up和exit）：docker container ls -a 简写方法 docker ps -a
- 容器的停止 ： docker container stop 简写方法 docker stop
- 容器的删除：docker container rm 简写方法 docker rm

![](https://newimg.jspang.com/Docker4_Container_shell.png)

## 镜像

### 获取镜像的三个基本途径

- 从网络社区直接拉取，在 Docker 里这种社区叫做 `Registry` (登记处)的意思。`pull from registry`
- 从 Dockerfile 构建一个镜像，这种像是 DIY 一个镜像，但是整个构建过程是需要联网，因为需要西在基础镜像，然后根据基础镜像进行构建 `build from Dockerfile`
- 自有文件的导入，可以从本地导入已经构建好的镜像文件，在没有网络的时候可以用。这个文件是通过 已有的镜像导出来的压缩包，然后就可以进行使用了。

总结：三种方法中最简单的是第一种，一条命令就可以完成。最复杂的是用 Dockerfile 进行构建，因为要写很多批处理命令  `Shell`，但这正式 Docker 的魅力所在，也是我们必须要掌握的。

镜像社区也叫做Image registry（镜像登记处），是拉取和下载镜像的网站，你也可以通过Dockerfile制作镜像，让所有人使用，类似Docker Image专属的简单版GitHub。

> - dockerhub：https://hub.docker.com/ Docker 官方社区，在使用 Docker 时默认的拉取网站。
> - Quay：https://quay.io/ 这个是Liunx Red Hat 的旗下一个第三方 Docker 社区。

### 拉取镜像

```bash
docker image pull wordpress
```

如果是第一次拉取镜像是需要下载过程的，需要下载很多依赖的基础镜像。具体快慢会和网速有关。

```bash
docker pull wordpress:php7.3-fpm-alpine # 选择指定版本
```

### 查看现有镜像

```bash
docker image ls
```

查看具体镜像信息

```bash
docker image inspect <IMAGE ID>
```

### 删除镜像

```bash
docker image rm <IMAGE ID>
```

需要注意的是，当有容器在使用镜像时，是没有办法被删除的。即使容器是停止掉的，依然是没办法删除的。

### 导入和导出镜像

这节学一下镜像的导入和导出，在工作中经常使用。比如公司来了一个新同事，也会Docker，你正好自己制作了一个公司内部的镜像，就可以把你机器上的镜像导出给他。他拿到镜像之后直接导入，就可以进行开发了，好处是你们的开发环境基本统一了。

还有一种情况，就是生产环境中的服务器是不允许随便上网的，这时候你就需要在一台能上网的电脑上，做好镜像后，直接把镜像导出，供服务器使用。

#### 导出

```bash
docker image save
```

在导出之前，你最好到一个好找的路径下面，比如我这里就选择了 D 盘，使用 `mkdir` 命令创建一个文件夹，进入文件后输入下面的命令。比如现在要导出镜像中的 `busybox` 镜像，可以这样写命令。

```bash
docker image save busybox:latest -o mybusybox.image
```

解读上面的命令，`save` 是导出/保存的意思，`busybox:latest` 是镜像名称 + 版本号，`-o` 代表输出，`mybusybox.image` 是导出后镜像的名字。

命令执行完成后，可以看到在执行命令所在的目录下就会多出一个 `mybusybox.image` 的文件，这就是刚才导出的镜像了。

#### 导入

先删除掉本机已有的 `busybox` 镜像。

```bash
docker image rm busybox
```

删除后直接导入镜像。

```bash
docker image load -i .\mybusybox.image
```

执行完命令之后，再使用 `docker image ls` 命令查看，`busybox` 镜像已经回来了。

这节主要讲解了 Docker 镜像的导入和导出，这种操作是完全可以离线的。虽然个人使用的并不多，但是在工作中还是经常使用的。

