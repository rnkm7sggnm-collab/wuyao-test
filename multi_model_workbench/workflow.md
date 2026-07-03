# 多模型回答整理工作流

这个工作流用于长期整理 ChatGPT、Gemini、DeepSeek 或其他 AI 的回答，适合故事、视频、AIGC、游戏、工具、App 和交互项目创作。

## 使用流程

1. 打开 `multi_model_workbench/index.html`。
2. 在“我的问题 / 任务目标”里写清楚你要解决的问题。
3. 把不同 AI 的回答复制到对应文本框。
4. 在“我的偏好 / 创作方向”里写你的风格、限制和创作方向。
5. 点击“生成整理文本”。
6. 复制页面下方的 Markdown，或者点击“下载 input.md”。
7. 如果是下载文件，请把 `input.md` 放到 `multi_model_workbench/` 目录。
8. 让 Codex 读取 `multi_model_workbench/input.md`。
9. Codex 会对回答进行对比、去重、融合和重写。
10. Codex 生成最终版 Markdown 和 Word 文档，保存到 `multi_model_workbench/output/`。

## 新手提示

- 每个 AI 的回答可以长，也可以短。
- 如果某个模型没有回答，对应文本框可以留空。
- “我的偏好 / 创作方向”越明确，最终整理结果越贴近你的需求。
- 如果你想要更短的结果，可以写“输出要精简”。
- 如果你想要更适合执行，可以写“保留可操作步骤，删掉空泛建议”。
- 如果你想做故事、视频、游戏或 App，可以写清楚最终用途。

## 建议保存方式

每次处理一个新任务时，可以把下载的文件命名为：

- `input.md`
- `input_story_project.md`
- `input_video_plan.md`
- `input_game_idea.md`
- `input_app_tool.md`

如果要使用 `codex_task_prompt.md` 里的固定指令，推荐仍然保存为 `multi_model_workbench/input.md`。
