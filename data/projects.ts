/**
 * 项目数据源 —— 想替换成自己的项目，只改这个文件就够了。
 * 每个项目会自动生成首页卡片和 /projects/[slug] 详情页。
 */

export type Category = "数据" | "运营" | "AI" | "产品" | "实验";

export type Project = {
  slug: string;
  title: string;
  subtitle: string;
  category: Category;
  year?: string;
  role: string;
  team?: string;
  status?: string;
  summary: string;
  cover: string;
  tags: string[];
  highlights: { value: string; label: string }[];
  stack: string[];
  story: { title: string; body: string }[];
  links?: { label: string; href: string }[];
};

const cover = (name: string) => `/covers/${name}.jpg`;

export const projects: Project[] = [
  {
    slug: "sparks",
    title: "Sparks",
    subtitle: "用留存 × 业绩的交叉视角，把专项分析做成可复用的看板体系",
    category: "数据",
    year: "2026.08 – 11",
    role: "专项分析负责人",
    status: "已落地 · 团队推广",
    summary:
      "成立 Sparks 专项分析，从留存和业绩的交叉维度重做分析框架，并把结论分层输出为内部、全国晾晒与区域 BP 三层看板。",
    cover: cover("sparks"),
    tags: ["留存 × 业绩", "看板体系", "数据闭环"],
    highlights: [
      { value: "3 层", label: "看板分层输出" },
      { value: "1 套", label: "团队推广模板" },
      { value: "闭环", label: "区域数据验证" },
    ],
    stack: ["SQL", "BI 看板", "飞书多维表格", "数据验证"],
    story: [
      {
        title: "背景",
        body: "留存和业绩长期被分开看：看留存的人不解释业绩，看业绩的人不追留存。区域之间的分析口径和动作也不一致，专项结论很难沉淀成可复用的东西。",
      },
      {
        title: "做法",
        body: "成立 Sparks 专项分析，用「留存 × 业绩」的交叉维度重建分析框架。结论不做成一份报告，而是分层输出为三套看板：内部看板看过程，全国晾晒看板做横向对比，区域 BP 看板落到可执行动作。同时对接区域做数据验证，把后端分析结果反馈给前端 BP，持续追踪具体情况。",
      },
      {
        title: "结果",
        body: "形成了从总部视角到区域动作的闭环，看板达到作品级效果，模板被选作整个团队推广的模板。专项分析第一次从「一次性汇报」变成了「可以持续运行的机制」。",
      },
    ],
  },
  {
    slug: "uee",
    title: "UEE 培训项目",
    subtitle: "从 buddy 匹配到全国 AC/DC 培训，把一套复杂机制跑通并推动改革",
    category: "运营",
    year: "2026.08 – 11",
    role: "项目运营负责人",
    status: "已完成 · 推动机制改革",
    summary:
      "负责 buddy 匹配和全国 AC/DC 培训运营，用司龄、职级、业绩表现与 buddy 匹配率搭评估模型，定位机制漏洞并推动改革。",
    cover: cover("uee"),
    tags: ["Buddy 机制", "培训运营", "机制改革"],
    highlights: [
      { value: "全国", label: "AC / DC 培训覆盖" },
      { value: "4 维", label: "项目评估模型" },
      { value: "改革", label: "机制优化落地" },
    ],
    stack: ["项目管理", "培训体系", "Buddy 机制", "飞书"],
    story: [
      {
        title: "背景",
        body: "全国 AC/DC 培训依赖 buddy 机制运转，但流程环节多、职责边界模糊。培训做了多少可以统计，做得怎么样却说不清楚。",
      },
      {
        title: "做法",
        body: "负责 buddy 匹配和全国 AC/DC 培训的日常运营，同时用司龄、职级、业绩表现和 buddy 匹配率四个维度搭建项目评估框架。评估的目的不是打分，而是定位机制里哪些环节是冗余的、哪些环节实际上没有产生效果。",
      },
      {
        title: "结果",
        body: "识别出机制繁复的漏洞，向上反馈并整合资源，推动机制改革。培训运营从「靠人盯流程」变成有数据依据的评估与迭代，也让我第一次完整走通了从执行到机制设计的路径。",
      },
    ],
  },
  {
    slug: "attrition",
    title: "周度离职分析",
    subtitle: "从一段文字到一张图：让人员流动在每周一被一眼看懂",
    category: "数据",
    year: "2026.08 – 11",
    role: "数据分析 / BP 协同",
    status: "常态化运行",
    summary:
      "把每周离职分析从文字描述重做成一图流，分析框架从四象限迭代到六象限，并沉淀为月度离职专项看板。",
    cover: cover("attrition"),
    tags: ["一图流", "六象限", "人员流动"],
    highlights: [
      { value: "每周", label: "一图流输出" },
      { value: "6 象限", label: "分析框架迭代" },
      { value: "月度", label: "专项分析看板" },
    ],
    stack: ["SQL", "BI 看板", "Excel", "区域 BP 协同"],
    story: [
      {
        title: "背景",
        body: "离职分析最初是一段段文字描述：信息密度低，区域之间难以横向比较，看完也很难直接指向一个动作。每周一都在重复同样的人工整理。",
      },
      {
        title: "做法",
        body: "把每周一的离职人员统计和分析重做成一图流：分析框架从四象限迭代到六象限，按分区标注重点关注对象；对接全国各区域 BP 收集离职信息反馈，再向上形成一图流，直接向老板汇报。",
      },
      {
        title: "结果",
        body: "每月沉淀一份离职专项分析的月度看板，人员流动和配置决策有了稳定的数据输入。分析的重心也从「描述发生了什么」转向「提示接下来该关注谁」。",
      },
    ],
  },
  {
    slug: "ai-arena",
    title: "AI 项目大赛",
    subtitle: "两个 Demo：先统一数据口径，再一键生成分层看板",
    category: "AI",
    year: "2026.08 – 11",
    role: "独立开发",
    status: "参赛作品 · 未整合",
    summary:
      "参赛的两个 Demo：一个把各区域数据清洗成统一的总部口径，另一个基于统一口径一键生成分层分析看板。",
    cover: cover("ai-arena"),
    tags: ["数据标准化", "自动看板", "风险预警"],
    highlights: [
      { value: "2 个", label: "参赛 Demo" },
      { value: "1 套", label: "总部数据口径" },
      { value: "4 级", label: "分层分析视角" },
    ],
    stack: ["LLM API", "Python", "数据清洗", "看板生成"],
    story: [
      {
        title: "背景",
        body: "日常数据治理里最耗时的不是分析，而是对齐：各区域的数据口径不一致，横向对比之前往往要先花大量时间清洗。看板本身也依赖人工重复搭建。",
      },
      {
        title: "做法",
        body: "做了两个 Demo。第一个是数据标准化层，把不同区域的数据清洗成统一的总部口径，方便运营和横向对比；第二个基于统一口径一键生成分析看板，支持总部看区域、区域看门店、门店看个人的分层视角，并加入数据可视化与风险预警。",
      },
      {
        title: "结果",
        body: "受限于公司 API 接口，两个 Demo 没有进一步整合，目前作为参赛作品。但在总部和上海地区做试点验证是可行的 —— 口径统一之后，分析效率的提升是立竿见影的。",
      },
    ],
  },
];

export const categories: ("全部" | Category)[] = ["全部", "数据", "运营", "AI"];
