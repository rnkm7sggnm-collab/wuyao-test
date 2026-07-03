# 《雾窑》GitHub Pages 发布说明

目标文件：

```text
prototype/wuyao_chapter1_v0_3.html
```

根目录已新增：

```text
index.html
```

发布后可以用仓库主页地址进入试玩：

```text
https://你的用户名.github.io/你的仓库名/
```

也可以直接访问原型文件：

```text
https://你的用户名.github.io/你的仓库名/prototype/wuyao_chapter1_v0_3.html
```

## 发布步骤

1. 在 GitHub 创建一个公开仓库。
2. 在本地项目目录初始化 Git。
3. 提交当前文件。
4. 添加 GitHub 远程仓库。
5. 推送到 GitHub。
6. 打开仓库 Settings -> Pages。
7. Source 选择 `Deploy from a branch`。
8. Branch 选择 `main`，目录选择 `/root`。
9. 等待 GitHub Pages 构建完成。

## 本地命令模板

把下面的仓库地址替换成你自己的：

```bash
git init
git add .
git commit -m "Publish Wuyao prototype"
git branch -M main
git remote add origin https://github.com/你的用户名/你的仓库名.git
git push -u origin main
```

## 注意

- 当前项目是纯静态 HTML，不需要后端。
- `index.html` 只是入口，会自动跳转到当前试玩原型。
- `.nojekyll` 用来让 GitHub Pages 按普通静态文件方式发布。
