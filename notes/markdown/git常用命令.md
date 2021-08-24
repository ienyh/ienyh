# Git 常用命令

## 1、初始化 git

```bash
git init
```

## 2、查看当前文件的状态

```bash
git status
```

## 3、缓存区

### 添加至缓存区

```bash
git add <文件> # 添加指定文件
git add . # 添加当前所有文件夹
```

### 删除缓存区文件

```bash
git restore --staged <文件>
git reset HEAD <文件>
```

## 4、提交 commit

```bash
git commit [-m,-am] '提交信息' # -am 省略 git add 步骤
```

## 5、查看提交记录日志 log

```bash
git log
```

使内容成一行显示：

```bash
git log --pretty=oneline
```

查看文件与仓库的文件内容区别

```bash
git diff HEAD -- <文件>
```

版本回退

```bash
git reset --hard HEAD^ # 回退一个版本
git reset --hard HEAD^^ # HEAD^^ 回退两个版本
git reset --hard HEAD~2 # HEAD~2 回退两个版本
git reset --hard 唯一标识 # 跳转至唯一标识所在版本
```

+ 9，查看所有的日志：git reflog
+ 10，显示本地仓库文件目录：git ls-files
+ 11，拉取文件 git checkout
+ 删除本地仓库文件的方式：
  + 在工作目录中删除文件 
  + git add 添加删除的目录至缓存区
  + 提交删除
+ 通过git rm 删除
  + git rm <文件>
+ 添加远程仓库
  + git remote add ‘名称’ 仓库地址
+ 第一次推送到远程仓库
  + git push -u ‘名称’ master
  + 其他推送 git push
+ git 分支操作
  + git checkout branch 切换到指定分支
  + git branch 查看所有分支，并标记当前所在分支
  + 创建分支
    + git checkout -b new_branch 新建分支并切换到新建分支
  + 合并分支
    + git merge branch 合并分支  必须先切到主分支上
  + 重命名分支
    + git branch -m |-M oldbranch newbranch   -M强制重命名(会删掉一开始存在的分支)
  + 删除分支
    + git branch -d branch 
+ 查看本地分支加远程
  - git branch -a
+ 推送本地分支至远程
  + git push origin newbranch
+ 删除远程分支（保留本地分支）
  + git push origin :remotebranch
+ 拉取远程分支，在本地创建分支
  + git checkout -b local_branch origin/remote_branch
+ 获取远程分支最新转态
  + git fetch
+ --graph 已图标的形式显示

## 6、标签管理

### 添加一个标签

```bash
git tag tag_name # 不添加默认信息 为最后一次提交的描述信息
```

### 给指定版本添加标签

```bash
git tag tage_name '唯一标识'
git tag tag_name -m '信息'
```

### 删除一个标签

```bash
git tag -d tage_name 
```

- git push origin tage_name 推送标签至仓库
- git push origin --tags  推送所有标签
- git push origin :refs/tages/tag_name 删除远程仓库的一个标签

## 7、远程仓库

### 连接远程仓库

```bash
git remote add origin git@github.com:yourName/repositoryname.git
git remote add origin https://github.com/yourName/repositoryname.git
```

### 查看远程仓库

```bash
git remote -v
```

### 修改远程仓库

```bash
git remote set-url origin <remote-url>
```

### 删除指定的远程仓库

```bash
git remote rm origin
```

