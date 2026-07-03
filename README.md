# 《雾窑》林知夏玩家线思维导图资料

本目录生成了《雾窑》里“林知夏玩家线”的思维导图、流程图和变量表，供后续剧情策划、Markmap 预览、Mermaid 预览和交互分支梳理使用。

## 生成文件

| 文件 | 用途 |
|---|---|
| `docs/林知夏玩家线思维导图.md` | Markmap 兼容的 Markdown 思维导图源文件，适合查看林知夏玩家线的完整结构。 |
| `docs/林知夏玩家线思维导图.html` | 已导出的 Markmap HTML，可直接用浏览器打开预览。 |
| `docs/林知夏玩家线流程图.mmd` | Mermaid `flowchart TD` 流程图源文件，展示六章选择如何连接到五个结局。 |
| `docs/林知夏玩家线流程图.svg` | 已导出的 Mermaid SVG，可直接打开或导入文档。 |
| `docs/林知夏玩家线变量表.md` | Markdown 变量表，整理 8 个核心变量的含义、变化条件和结局影响。 |
| `docs/mmdc-puppeteer-config.json` | Mermaid CLI 导出时使用的 Puppeteer 配置，避免部分本地浏览器沙箱问题。 |
| `README.md` | 本说明文件。 |

## 如何预览 Markmap 思维导图

如果本机已经安装 `markmap-cli`，可以运行：

```bash
markmap docs/林知夏玩家线思维导图.md -o docs/林知夏玩家线思维导图.html
```

然后用浏览器打开：

```bash
docs/林知夏玩家线思维导图.html
```

本次已成功生成：

```bash
docs/林知夏玩家线思维导图.html
```

如果不能安装依赖，可以复制 `docs/林知夏玩家线思维导图.md` 的内容到在线 Markmap 编辑器预览。

推荐在线预览方式：

- 打开 <https://markmap.js.org/repl>
- 粘贴 `docs/林知夏玩家线思维导图.md`
- 直接查看思维导图

## 如何预览 Mermaid 流程图

如果本机已经安装 `@mermaid-js/mermaid-cli`，可以运行：

```bash
mmdc -i docs/林知夏玩家线流程图.mmd -o docs/林知夏玩家线流程图.svg
```

如果遇到本地 Chromium 沙箱问题，可以使用本项目已生成的配置：

```bash
mmdc -p docs/mmdc-puppeteer-config.json -i docs/林知夏玩家线流程图.mmd -o docs/林知夏玩家线流程图.svg
```

本次已成功生成：

```bash
docs/林知夏玩家线流程图.svg
```

如果不能安装依赖，可以复制 `docs/林知夏玩家线流程图.mmd` 的内容到在线 Mermaid 编辑器预览。

推荐在线预览方式：

- 打开 <https://mermaid.live>
- 粘贴 `docs/林知夏玩家线流程图.mmd`
- 导出 SVG 或 PNG

## 可选安装命令

如果当前环境允许安装 Node.js 全局依赖，可以运行：

```bash
npm install -g markmap-cli @mermaid-js/mermaid-cli
```

安装后可导出：

```bash
markmap docs/林知夏玩家线思维导图.md -o docs/林知夏玩家线思维导图.html
mmdc -i docs/林知夏玩家线流程图.mmd -o docs/林知夏玩家线流程图.svg
```

## 使用建议

- `林知夏玩家线思维导图.md` 用于总览角色线、章节、变量、证物和结局。
- `林知夏玩家线流程图.mmd` 用于检查玩家选择如何流向 A/B/C/D/E 五个结局。
- `林知夏玩家线变量表.md` 用于后续做剧情系统、条件判断或分支脚本。
- 如果继续扩写章节对白，建议先锁定变量变化，再补写场景文本。

## GitHub Pages 试玩发布

当前仓库根目录已添加 `index.html`，会自动进入：

```text
prototype/wuyao_chapter1_v0_3.html
```

发布到 GitHub Pages 后，可以访问：

```text
https://你的用户名.github.io/你的仓库名/
```

具体发布步骤见：

```text
GITHUB_PAGES_DEPLOY.md
```
