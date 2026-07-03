import fs from "node:fs/promises";
import path from "node:path";
import { Presentation, PresentationFile } from "@oai/artifact-tool";

const ROOT = "/Users/heer/Documents/🍑 NO1/multi_model_workbench/output";
const FINAL = path.join(ROOT, "final_multi_model_synthesis_keynote.pptx");
const PREVIEW_DIR = path.join(ROOT, "keynote_preview");
const MONTAGE = path.join(ROOT, "final_multi_model_synthesis_keynote_montage.webp");

const W = 1280;
const H = 720;
const ink = "#111111";
const muted = "#555555";
const panel = "#EDEDED";
const rule = "#B8BCC4";
const highlight = "#FF6B35";

async function writeBlob(filePath, blob) {
  await fs.writeFile(filePath, new Uint8Array(await blob.arrayBuffer()));
}

function addText(slide, text, x, y, w, h, style = {}) {
  const shape = slide.shapes.add({
    geometry: "textbox",
    position: { left: x, top: y, width: w, height: h },
    fill: "none",
    line: { style: "solid", fill: "none", width: 0 },
  });
  shape.text = text;
  shape.text.style = {
    fontFace: "Helvetica Neue",
    fontSize: style.size ?? 22,
    bold: style.bold ?? false,
    color: style.color ?? ink,
    alignment: style.align ?? "left",
    lineSpacing: style.lineSpacing ?? 1.18,
  };
  return shape;
}

function addPanel(slide, x, y, w, h, fill = panel) {
  return slide.shapes.add({
    geometry: "rect",
    position: { left: x, top: y, width: w, height: h },
    fill,
    line: { style: "solid", fill: "none", width: 0 },
  });
}

function addRule(slide, x, y, w, color = rule) {
  slide.shapes.add({
    geometry: "rect",
    position: { left: x, top: y, width: w, height: 2 },
    fill: color,
    line: { style: "solid", fill: "none", width: 0 },
  });
}

function addFooter(slide, index) {
  addText(slide, "《雾窑》多模型融合整理稿", 42, 668, 360, 24, {
    size: 14,
    color: muted,
  });
  addText(slide, String(index).padStart(2, "0"), 1180, 668, 58, 24, {
    size: 14,
    color: muted,
    align: "right",
  });
}

function addTitle(slide, title, subtitle, index) {
  addText(slide, title, 42, 40, 820, 66, { size: 38, bold: true });
  if (subtitle) {
    addText(slide, subtitle, 42, 112, 980, 36, { size: 18, color: muted });
  }
  addRule(slide, 42, 160, 1196);
  addFooter(slide, index);
}

function bulletBlock(slide, items, x, y, w, line = 34, size = 21) {
  items.forEach((item, i) => {
    addText(slide, "•", x, y + i * line + 2, 24, line, { size, color: highlight, bold: true });
    addText(slide, item, x + 30, y + i * line, w - 30, line + 8, { size, color: ink });
  });
}

function labelValue(slide, label, value, x, y, w, h) {
  addPanel(slide, x, y, w, h);
  addText(slide, label, x + 22, y + 20, w - 44, 24, {
    size: 16,
    color: muted,
    bold: true,
  });
  addText(slide, value, x + 22, y + 56, w - 44, h - 72, {
    size: 22,
    color: ink,
  });
}

function makeDeck() {
  const p = Presentation.create({ slideSize: { width: W, height: H } });
  let n = 1;

  let s = p.slides.add();
  s.background.fill = "#FFFFFF";
  addText(s, "雾窑", 42, 76, 620, 96, { size: 74, bold: true });
  addText(s, "本土化封闭空间悬疑互动小游戏故事方案", 48, 190, 760, 42, {
    size: 28,
    color: muted,
  });
  addRule(s, 48, 270, 430, highlight);
  addText(s, "暴雨封村  非遗老宅  旧案复仇  证物推理  多结局", 48, 312, 760, 44, {
    size: 26,
  });
  addPanel(s, 850, 64, 350, 520);
  addText(s, "核心判断", 890, 112, 250, 32, { size: 24, bold: true });
  addText(s, "以青瓷庄旧案为主线，吸收多模型中最适合游戏落地的封闭环境、作恶链、证物系统和结局分支。", 890, 170, 250, 210, {
    size: 24,
    lineSpacing: 1.25,
  });
  addFooter(s, n++);

  s = p.slides.add();
  addTitle(s, "多模型输入被压缩成一个可制作方案", "保留强创作价值，删掉重复和高风险借鉴痕迹。", n);
  labelValue(s, "主骨架", "青瓷庄、窑火旧案、失散之子复仇", 42, 210, 360, 150);
  labelValue(s, "吸收元素", "暴雨封闭、旧案作恶链、证物组合、隐藏秘密", 460, 210, 360, 150);
  labelValue(s, "弱化元素", "童谣预言杀人、全员死亡、复杂密室、假死套路", 878, 210, 360, 150);
  addText(s, "最终方向", 42, 430, 240, 36, { size: 28, bold: true });
  addText(s, "做成 30 至 60 分钟的简易互动悬疑游戏。玩家通过搜证、对话和推理选择，决定真相公开到什么程度。", 42, 480, 990, 72, {
    size: 30,
  });
  addFooter(s, n++);

  s = p.slides.add();
  addTitle(s, "玩家要解决的不是单纯命案，而是二十年前被埋掉的真相", "故事从一场文旅签约晚宴开始，逐步变成旧案审判。", n);
  bulletBlock(s, [
    "地点：南方山区半荒废古村“青瓷庄”。",
    "封闭条件：暴雨、塌方、吊桥冲毁、断电断网。",
    "表面事件：文旅公司准备改造非遗民宿。",
    "真实矛盾：二十年前“窑火事故”其实是杀人毁证。",
    "玩家目标：活下来，查清旧案，阻止复仇继续。"
  ], 72, 220, 1030, 48, 28);
  addFooter(s, n++);

  s = p.slides.add();
  addTitle(s, "青瓷杯底的刻字代替童谣，降低抄袭感", "它们不是死亡预言，而是旧案线索。", n);
  const cups = ["火不是天灾", "账本没有烧完", "尸检报告说谎", "有人抱走了孩子", "活人替死人闭嘴", "窑门还会再开"];
  cups.forEach((cup, i) => {
    const col = i % 3;
    const row = Math.floor(i / 3);
    const x = 80 + col * 390;
    const y = 230 + row * 140;
    addPanel(s, x, y, 315, 88);
    addText(s, cup, x + 24, y + 26, 265, 34, { size: 27, bold: true, align: "center" });
  });
  addText(s, "设计价值：它保留“仪式感”，但功能上服务推理和证物对应，不机械复制经典孤岛审判结构。", 80, 545, 980, 44, { size: 24, color: muted });
  addFooter(s, n++);

  s = p.slides.add();
  addTitle(s, "人物关系围绕旧案责任链展开", "每个角色都有公开身份、隐藏责任和游戏功能。", n);
  const people = [
    ["林知夏", "玩家，外来编剧；父亲留下旧采访笔记。"],
    ["陆怀民", "老村长；掩盖旧案并抱走孩子。"],
    ["周启明", "文旅负责人；挪用公款并借火毁账。"],
    ["陈伯远", "退休法医；伪造尸检结论。"],
    ["沈月娥", "女瓷匠；最大嫌疑人，实际幸存者。"],
    ["陆景川", "本地负责人；何青山之子，当前真凶。"]
  ];
  people.forEach(([name, desc], i) => {
    const col = i % 2;
    const row = Math.floor(i / 2);
    const x = 60 + col * 605;
    const y = 205 + row * 126;
    addText(s, name, x, y, 145, 34, { size: 26, bold: true });
    addText(s, desc, x + 150, y + 2, 390, 56, { size: 21 });
    addRule(s, x, y + 78, 520);
  });
  addFooter(s, n++);

  s = p.slides.add();
  addTitle(s, "二十年前的窑火事故，是所有命案的根", "旧案必须简单、残酷、能被玩家一步步拼出来。", n);
  bulletBlock(s, [
    "何青山发现周启明挪用厂款，也发现陆怀民私卖老窑址利益。",
    "举报前夜，争执导致何青山死亡。",
    "涉案者点燃窑房，制造“窑火失控”的假象。",
    "陈伯远把尸检写成意外烧亡，周启明借火毁账。",
    "陆怀民抱走何青山的儿子，让他以陆景川身份长大。"
  ], 72, 220, 1050, 48, 27);
  addFooter(s, n++);

  s = p.slides.add();
  addTitle(s, "当前三起案件推动玩家逐步接近真相", "每一案都揭开旧案的一层责任。", n);
  labelValue(s, "第一案：账房中毒", "周启明死亡，釉料粉末指向沈月娥；实际是陆景川栽赃。", 55, 220, 360, 230);
  labelValue(s, "第二案：尸检报告", "陈伯远窒息，报告被改成“生前钝器伤”；旧案不再是火灾。", 460, 220, 360, 230);
  labelValue(s, "第三案：祠堂遗言", "陆怀民重伤，临死说“不是她，是孩子”；真正指向陆景川。", 865, 220, 360, 230);
  addText(s, "节奏原则：不追求死亡数量，而让每一案服务旧案还原和嫌疑转移。", 70, 535, 980, 34, { size: 24, color: muted });
  addFooter(s, n++);

  s = p.slides.add();
  addTitle(s, "核心推理链要让玩家觉得自己真的推出来了", "所有关键结论都需要证物组合支撑。", n);
  const chain = [
    "窑火不是天灾",
    "何青山起火前已死",
    "三名关键人物共同掩盖",
    "沈月娥被栽赃",
    "陆景川是何青山之子",
    "当前命案是复仇"
  ];
  chain.forEach((text, i) => {
    const x = 72 + i * 185;
    addPanel(s, x, 278, 145, 120);
    addText(s, String(i + 1), x + 18, 292, 42, 34, { size: 30, bold: true, color: highlight });
    addText(s, text, x + 18, 342, 108, 50, { size: 20, bold: true });
    if (i < chain.length - 1) {
      addText(s, "→", x + 150, 328, 28, 32, { size: 30, color: muted });
    }
  });
  addText(s, "最终问题：真相应该交给法律和活人，还是继续交给火和仇恨？", 72, 510, 930, 42, { size: 30, bold: true });
  addFooter(s, n++);

  s = p.slides.add();
  addTitle(s, "小游戏流程控制在六章内", "每章只有一个调查重点，方便做 Demo。", n);
  const chapters = [
    "抵达青瓷庄",
    "账房尸体",
    "尸检报告",
    "祠堂遗言",
    "废窑暗格",
    "最后对质"
  ];
  chapters.forEach((text, i) => {
    const y = 210 + i * 66;
    addText(s, `0${i + 1}`, 78, y, 55, 34, { size: 24, bold: true, color: highlight });
    addText(s, text, 150, y, 310, 34, { size: 27, bold: true });
    addRule(s, 150, y + 44, 760);
  });
  addText(s, "章节结构从认识人物到最终证物出示，适合点击探索 + 对话 + 推理选择的轻量玩法。", 590, 250, 470, 150, { size: 28 });
  addFooter(s, n++);

  s = p.slides.add();
  addTitle(s, "证物系统可以做得很轻", "用公开信息和隐藏秘密支撑重玩价值。", n);
  labelValue(s, "基础操作", "点击场景获得证物，与人物对话解锁隐藏信息。", 70, 220, 360, 160);
  labelValue(s, "组合示例", "尸检报告 + 采访笔记 = 何青山不是烧死。", 460, 220, 360, 160);
  labelValue(s, "最终对质", "根据证物完整度选择指认、公开、包庇或逃离。", 850, 220, 360, 160);
  bulletBlock(s, [
    "核心证物：六只青瓷杯、烧焦账本、旧汇款单、录音笔、旧照片、出生证明、举报信、采访笔记。",
    "第一版不要做复杂系统，先保证证物能推动剧情和结局分支。"
  ], 90, 470, 1000, 42, 24);
  addFooter(s, n++);

  s = p.slides.add();
  addTitle(s, "四个结局覆盖真相、误判、默许和失败", "结局由证物完整度和最终选择共同决定。", n);
  const endings = [
    ["A 真相公开", "阻止陆景川，旧案重查，废窑成为纪念空间。"],
    ["B 替罪羊", "沈月娥被误认凶手，陆景川离开，复仇未停。"],
    ["C 复仇继续", "玩家知道真凶但证据不足，真相再次被埋。"],
    ["D 坏结局", "连续推理失败，玩家被困在废窑。"]
  ];
  endings.forEach(([name, desc], i) => {
    const col = i % 2;
    const row = Math.floor(i / 2);
    const x = 80 + col * 560;
    const y = 225 + row * 165;
    addText(s, name, x, y, 250, 34, { size: 28, bold: true, color: i === 0 ? highlight : ink });
    addText(s, desc, x, y + 48, 430, 58, { size: 23 });
  });
  addFooter(s, n++);

  s = p.slides.add();
  addTitle(s, "下一步可以直接进入 Demo 拆分", "先把故事做成可玩流程，再扩写对白和场景文本。", n);
  bulletBlock(s, [
    "场景控制在 6 个：堂屋、账房、偏房、祠堂、瓷房、废窑。",
    "NPC 保留 6 个，不再扩充人物。",
    "优先做搜证、对话、证物组合和最终对质。",
    "避免童谣预言杀人和全员死亡，保留青瓷杯底线索。",
    "主题落点：被地方沉默掩埋的真相，如何回到活人面前。"
  ], 80, 220, 1000, 46, 27);
  addFooter(s, n++);

  return p;
}

async function main() {
  await fs.mkdir(ROOT, { recursive: true });
  await fs.mkdir(PREVIEW_DIR, { recursive: true });
  const presentation = makeDeck();

  for (const [index, slide] of presentation.slides.items.entries()) {
    const stem = `slide-${String(index + 1).padStart(2, "0")}`;
    await writeBlob(path.join(PREVIEW_DIR, `${stem}.png`), await presentation.export({ slide, format: "png", scale: 1 }));
    await fs.writeFile(path.join(PREVIEW_DIR, `${stem}.layout.json`), await (await slide.export({ format: "layout" })).text());
  }

  await writeBlob(MONTAGE, await presentation.export({ format: "webp", montage: true, scale: 1 }));
  const pptx = await PresentationFile.exportPptx(presentation);
  await pptx.save(FINAL);
  console.log(FINAL);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
