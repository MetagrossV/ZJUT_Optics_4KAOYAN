module.exports = {
  "metadata": {
    "title": "浙工大光学选择题题库",
    "description": "从光学笔记和知识库中提取生成的选择题和概念判断题",
    "total_questions": 305,
    "geo_optics_count": 162,
    "phy_optics_count": 143,
    "created_date": "2026-06-14"
  },
  "questions": [
    {
      "id": "choice_001",
      "question": "在各向同性的均匀介质中，光沿什么方向传播？",
      "options": [
        "A. 沿曲线传播",
        "B. 沿直线传播",
        "C. 沿折线传播",
        "D. 沿任意方向传播"
      ],
      "answer": "B",
      "explanation": "在各向同性的均匀介质中，光线沿直线传播，这是几何光学的基本定律之一。",
      "chapter": "几何光学",
      "topic": "基本定律",
      "difficulty": "easy",
      "knowledge_tags": [
        "geo_001"
      ],
      "wrong_hint": {
        "type": "概念错误",
        "message": "光只有在不均匀介质中才会发生弯曲传播。在均匀介质中，直线传播定律成立。"
      }
    },
    {
      "id": "choice_002",
      "question": "光从光密介质射向光疏介质时，什么现象会发生？",
      "options": [
        "A. 折射角小于入射角",
        "B. 折射角大于入射角",
        "C. 一定发生全反射",
        "D. 光线沿界面传播"
      ],
      "answer": "B",
      "explanation": "根据折射定律n sin I = n' sin I'，当n > n'时，sin I' > sin I，即折射角大于入射角。",
      "chapter": "几何光学",
      "topic": "反射折射",
      "difficulty": "easy",
      "knowledge_tags": [
        "geo_002"
      ],
      "wrong_hint": {
        "type": "概念错误",
        "message": "注意折射定律的方向：从光密到光疏，折射角大于入射角；反之则小于。不要混淆方向。"
      }
    },
    {
      "id": "choice_003",
      "question": "发生全反射的条件是什么？",
      "options": [
        "A. 光从光疏到光密，入射角大于临界角",
        "B. 光从光密到光疏，入射角大于临界角",
        "C. 光从光密到光疏，入射角小于临界角",
        "D. 任何介质组合，入射角足够大即可"
      ],
      "answer": "B",
      "explanation": "全反射发生的条件：①光从光密介质射向光疏介质；②入射角大于临界角。临界角满足sin Im = n'/n。",
      "chapter": "几何光学",
      "topic": "全反射",
      "difficulty": "easy",
      "knowledge_tags": [
        "geo_003"
      ],
      "wrong_hint": {
        "type": "概念错误",
        "message": "全反射必须同时满足两个条件：方向是从光密到光疏，且角度要超过临界角。仅满足一个条件不够。"
      }
    },
    {
      "id": "choice_004",
      "question": "光程的定义是？",
      "options": [
        "A. 光在真空中传播的几何路径",
        "B. 光在介质中传播的几何路径",
        "C. 介质折射率与几何路径长度的乘积",
        "D. 光速与传播时间的乘积"
      ],
      "answer": "C",
      "explanation": "光程S = n·l，即介质折射率与几何路径长度的乘积。它等效于光在真空中传播相同相位变化所需的路程。",
      "chapter": "几何光学",
      "topic": "费马原理",
      "difficulty": "medium",
      "knowledge_tags": [
        "geo_004"
      ],
      "wrong_hint": {
        "type": "概念错误",
        "message": "光程不是单纯的几何路径，也不是光速×时间，而是折射率与几何路径的乘积。"
      }
    },
    {
      "id": "choice_005",
      "question": "完善成像的条件之一是：入射波面是球面波时，出射波面也是？",
      "options": [
        "A. 平面波",
        "B. 球面波",
        "C. 柱面波",
        "D. 任意波面"
      ],
      "answer": "B",
      "explanation": "完善成像条件：入射波面是球面波时，出射波面也是球面波；入射是同心光束时，出射也是同心光束；物点与像点之间任意两条光路的光程相等。",
      "chapter": "几何光学",
      "topic": "完善成像",
      "difficulty": "easy",
      "knowledge_tags": [
        "geo_005"
      ],
      "wrong_hint": {
        "type": "概念错误",
        "message": "完善成像要求保持波面的球面特性，这样光束才能会聚到一点形成像点。"
      }
    },
    {
      "id": "choice_006",
      "question": "在近轴区，轴上物点成完善像，该像点称为？",
      "options": [
        "A. 牛顿像点",
        "B. 高斯像点",
        "C. 拉赫像点",
        "D. 费马像点"
      ],
      "answer": "B",
      "explanation": "在近轴区，轴上物点成完善像，该像点称为'高斯像点'。近轴区也称为高斯光学区。",
      "chapter": "几何光学",
      "topic": "近轴光学",
      "difficulty": "easy",
      "knowledge_tags": [
        "geo_006"
      ],
      "wrong_hint": {
        "type": "概念错误",
        "message": "高斯像点是以数学家高斯命名的，不是牛顿或费马。"
      }
    },
    {
      "id": "choice_007",
      "question": "球面光学系统中，垂轴放大率β>0时，物与像的关系是？",
      "options": [
        "A. 正立像，物像虚实相同",
        "B. 正立像，物像虚实相反",
        "C. 倒立像，物像虚实相同",
        "D. 倒立像，物像虚实相反"
      ],
      "answer": "B",
      "explanation": "垂轴放大率β>0时，y与y'同号，成正立像；L与l'同号，物像在球面系统同侧，虚实相反。",
      "chapter": "几何光学",
      "topic": "放大率",
      "difficulty": "medium",
      "knowledge_tags": [
        "geo_007"
      ],
      "wrong_hint": {
        "type": "符号规则",
        "message": "β>0意味着正立像。同时L与l'同号意味着物像在同一侧，所以虚实相反。注意符号规则的判断。"
      }
    },
    {
      "id": "choice_008",
      "question": "垂轴放大率β、轴向放大率α和角放大率γ之间的关系是？",
      "options": [
        "A. αγ = β",
        "B. αγ = β²",
        "C. α = βγ",
        "D. γ = αβ"
      ],
      "answer": "B",
      "explanation": "三者关系为αγ = β²，这是球面光学系统中三个放大率之间的基本关系式。",
      "chapter": "几何光学",
      "topic": "放大率",
      "difficulty": "medium",
      "knowledge_tags": [
        "geo_008"
      ],
      "wrong_hint": {
        "type": "公式混淆",
        "message": "三个放大率的关系是αγ = β²，不是简单的线性关系。可以通过拉赫不变量来推导记忆。"
      }
    },
    {
      "id": "choice_009",
      "question": "拉赫不变量（拉格朗日-赫姆霍兹不变量）的表达式为？",
      "options": [
        "A. nuy = n'u'y'",
        "B. nuy = 常数",
        "C. n/u = n'/u'",
        "D. y/u = y'/u'"
      ],
      "answer": "A",
      "explanation": "拉赫不变量：J = nuy = n'u'y'，其中n为折射率，u为孔径角，y为物高。它在整个共轴系统中保持不变。",
      "chapter": "几何光学",
      "topic": "拉赫不变量",
      "difficulty": "medium",
      "knowledge_tags": [
        "geo_009"
      ],
      "wrong_hint": {
        "type": "公式混淆",
        "message": "拉赫不变量包含三个因素：折射率n、孔径角u、物高y，形式为nuy=n'u'y'，不要漏掉折射率。"
      }
    },
    {
      "id": "choice_010",
      "question": "理想光学系统中，一对主面的垂轴放大率为？",
      "options": [
        "A. -1",
        "B. 0",
        "C. +1",
        "D. ∞"
      ],
      "answer": "C",
      "explanation": "主面（主平面）的定义是一对共轭面，其垂轴放大率为+1。即物像大小相等，方向相同。",
      "chapter": "几何光学",
      "topic": "理想光学系统",
      "difficulty": "easy",
      "knowledge_tags": [
        "geo_010"
      ],
      "wrong_hint": {
        "type": "概念错误",
        "message": "主面的放大率是+1，不是-1。主面是理想光学系统的重要基面，物像大小相等。"
      }
    },
    {
      "id": "choice_011",
      "question": "高斯公式（以主点为原点）的形式是？",
      "options": [
        "A. 1/l' - 1/l = 1/f'",
        "B. 1/l' + 1/l = 1/f'",
        "C. l·l' = f·f'",
        "D. l'/l = f'/f"
      ],
      "answer": "A",
      "explanation": "高斯公式：1/l' - 1/l = 1/f'，其中l为物距（以主点为原点），l'为像距，f'为像方焦距。",
      "chapter": "几何光学",
      "topic": "理想光学系统",
      "difficulty": "easy",
      "knowledge_tags": [
        "geo_011"
      ],
      "wrong_hint": {
        "type": "公式混淆",
        "message": "高斯公式是1/l' - 1/l = 1/f'，牛顿公式是x·x' = f·f'。注意区分两种公式体系。"
      }
    },
    {
      "id": "choice_012",
      "question": "当光学系统物空间和像空间介质相同时，物方焦距f和像方焦距f'的关系是？",
      "options": [
        "A. f = f'",
        "B. f = -f'",
        "C. f = 2f'",
        "D. f = f'/2"
      ],
      "answer": "B",
      "explanation": "当物方和像方介质相同时，f = -f'。焦距符号相反，大小相等。",
      "chapter": "几何光学",
      "topic": "理想光学系统",
      "difficulty": "medium",
      "knowledge_tags": [
        "geo_012"
      ],
      "wrong_hint": {
        "type": "符号规则",
        "message": "在同一介质中，f = -f'，符号相反。这是由系统对称性决定的。注意符号规则！"
      }
    },
    {
      "id": "choice_013",
      "question": "望远系统的特点是？",
      "options": [
        "A. 焦距为零",
        "B. 光学间隔Δ=0",
        "C. 光焦度φ很大",
        "D. 工作距等于焦距"
      ],
      "answer": "B",
      "explanation": "望远系统是无焦系统，光学间隔Δ=0（两个光组的焦点重合）。其焦距为无穷大，但组合光焦度为零。",
      "chapter": "几何光学",
      "topic": "典型系统",
      "difficulty": "medium",
      "knowledge_tags": [
        "geo_013"
      ],
      "wrong_hint": {
        "type": "概念错误",
        "message": "望远系统的光学间隔Δ=0，不是焦距为零。焦距为无穷大，但光焦度为零。"
      }
    },
    {
      "id": "choice_014",
      "question": "两个密接薄透镜的组合光焦度等于？",
      "options": [
        "A. 两个光焦度之和",
        "B. 两个光焦度之积",
        "C. 两个光焦度之差",
        "D. 两个光焦度之商"
      ],
      "answer": "A",
      "explanation": "密接薄透镜组的光焦度公式：φ = φ₁ + φ₂。即组合光焦度等于各透镜光焦度之和。",
      "chapter": "几何光学",
      "topic": "理想光学系统",
      "difficulty": "easy",
      "knowledge_tags": [
        "geo_014"
      ],
      "wrong_hint": {
        "type": "公式混淆",
        "message": "密接薄透镜的光焦度是相加关系，不是相乘。因为d≈0，所以公式简化为φ=φ₁+φ₂。"
      }
    },
    {
      "id": "choice_015",
      "question": "正透镜（会聚透镜）的光焦度φ为？",
      "options": [
        "A. φ > 0",
        "B. φ < 0",
        "C. φ = 0",
        "D. φ不确定"
      ],
      "answer": "A",
      "explanation": "正透镜（会聚透镜）的光焦度φ > 0，对光线起会聚作用；负透镜（发散透镜）的光焦度φ < 0。",
      "chapter": "几何光学",
      "topic": "透镜",
      "difficulty": "easy",
      "knowledge_tags": [
        "geo_015"
      ],
      "wrong_hint": {
        "type": "概念错误",
        "message": "正透镜光焦度为正，负透镜光焦度为负。光焦度φ=1/f，会聚透镜f>0所以φ>0。"
      }
    },
    {
      "id": "choice_016",
      "question": "平面镜的垂轴放大率β为？",
      "options": [
        "A. -1",
        "B. +1",
        "C. 0",
        "D. ∞"
      ],
      "answer": "B",
      "explanation": "平面镜的垂轴放大率β = +1，成等大正立的像。平面镜是唯一能成完善像的最简单光学元件。",
      "chapter": "几何光学",
      "topic": "平面系统",
      "difficulty": "easy",
      "knowledge_tags": [
        "geo_016"
      ],
      "wrong_hint": {
        "type": "概念错误",
        "message": "平面镜放大率是+1，不是-1。成等大正立像，但左右相反（镜像）。"
      }
    },
    {
      "id": "choice_017",
      "question": "平面镜旋转α角时，反射光线方向改变？",
      "options": [
        "A. α",
        "B. 2α",
        "C. α/2",
        "D. 不变"
      ],
      "answer": "B",
      "explanation": "平面镜旋转的重要特性：当平面镜转动α角时，反射光线方向改变2α角。这是光学杠杆的基本原理。",
      "chapter": "几何光学",
      "topic": "平面系统",
      "difficulty": "medium",
      "knowledge_tags": [
        "geo_017"
      ],
      "wrong_hint": {
        "type": "公式混淆",
        "message": "平面镜旋转时，反射光线改变的角度是镜面旋转角度的2倍，不是1倍。"
      }
    },
    {
      "id": "choice_018",
      "question": "平行平板的轴向位移公式为？",
      "options": [
        "A. ΔL = d(1 - 1/n)",
        "B. ΔL = d(1 + 1/n)",
        "C. ΔL = d·n",
        "D. ΔL = d/n"
      ],
      "answer": "A",
      "explanation": "平行平板的轴向位移：ΔL = d(1 - 1/n) = d(n-1)/n，其中d为平板厚度，n为折射率。像点相对于物点向远离平板方向移动。",
      "chapter": "几何光学",
      "topic": "平面系统",
      "difficulty": "medium",
      "knowledge_tags": [
        "geo_018"
      ],
      "wrong_hint": {
        "type": "公式混淆",
        "message": "平行平板的轴向位移公式是ΔL=d(1-1/n)，注意是减号不是加号。"
      }
    },
    {
      "id": "choice_019",
      "question": "光楔（折射角很小的折射棱镜）的偏向角近似为？",
      "options": [
        "A. δ = α(n-1)",
        "B. δ = α(n+1)",
        "C. δ = α·n",
        "D. δ = α/n"
      ],
      "answer": "A",
      "explanation": "光楔偏向角公式：δ ≈ α(n-1)，其中α为光楔的折射角（顶角），n为折射率。",
      "chapter": "几何光学",
      "topic": "平面系统",
      "difficulty": "medium",
      "knowledge_tags": [
        "geo_019"
      ],
      "wrong_hint": {
        "type": "公式混淆",
        "message": "光楔偏向角是δ=α(n-1)，不是α·n。当α很小时，这个近似公式成立。"
      }
    },
    {
      "id": "choice_020",
      "question": "孔径光阑的作用是？",
      "options": [
        "A. 限制成像范围",
        "B. 限制进入光学系统的成像光束宽度",
        "C. 改变像的方向",
        "D. 产生色散"
      ],
      "answer": "B",
      "explanation": "孔径光阑是限制进入光学系统的成像光束的光孔，它决定了轴上点光束的立体角。",
      "chapter": "几何光学",
      "topic": "光阑",
      "difficulty": "easy",
      "knowledge_tags": [
        "geo_020"
      ],
      "wrong_hint": {
        "type": "概念错误",
        "message": "孔径光阑限制的是光束宽度，不是成像范围。限制成像范围的是视场光阑。"
      }
    },
    {
      "id": "choice_021",
      "question": "入瞳是孔径光阑关于前面光学系统所成的？",
      "options": [
        "A. 实像",
        "B. 虚像",
        "C. 物",
        "D. 焦点"
      ],
      "answer": "A",
      "explanation": "入瞳是孔径光阑关于前面光学系统在物空间所成的像。出瞳是孔径光阑关于后面光学系统在像空间所成的像。",
      "chapter": "几何光学",
      "topic": "光阑",
      "difficulty": "medium",
      "knowledge_tags": [
        "geo_021"
      ],
      "wrong_hint": {
        "type": "概念错误",
        "message": "入瞳是孔径光阑经前面光学系统在物空间成的像，是光学系统对物方呈现的光瞳。"
      }
    },
    {
      "id": "choice_022",
      "question": "在显微镜系统中，孔径光阑一般置于？",
      "options": [
        "A. 目镜上",
        "B. 物镜上",
        "C. 分划板处",
        "D. 出瞳位置"
      ],
      "answer": "B",
      "explanation": "一般显微镜系统中，孔径光阑置于显微物镜上，视场光阑位于一次实像面（分划板）处。",
      "chapter": "几何光学",
      "topic": "典型系统",
      "difficulty": "easy",
      "knowledge_tags": [
        "geo_022"
      ],
      "wrong_hint": {
        "type": "概念错误",
        "message": "显微镜的孔径光阑在物镜上，控制进入系统的光束；目镜往往是渐晕光阑。"
      }
    },
    {
      "id": "choice_023",
      "question": "望远系统中，物镜框作为孔径光阑时，出瞳位于？",
      "options": [
        "A. 物镜前",
        "B. 物镜后",
        "C. 目镜像方焦点之后",
        "D. 系统中间"
      ],
      "answer": "C",
      "explanation": "望远系统中物镜框为孔径光阑，经目镜所成的像即为出瞳，位于目镜像方焦点之后，应与眼睛入瞳重合。",
      "chapter": "几何光学",
      "topic": "典型系统",
      "difficulty": "medium",
      "knowledge_tags": [
        "geo_023"
      ],
      "wrong_hint": {
        "type": "概念错误",
        "message": "出瞳是孔径光阑经后面光学系统所成的像，在望远系统中位于目镜后方。"
      }
    },
    {
      "id": "choice_024",
      "question": "轴上点发出的同心光束经光学系统后不再是同心光束，不同入射高度光线交光轴于不同位置，这种现象称为？",
      "options": [
        "A. 彗差",
        "B. 像散",
        "C. 球差",
        "D. 场曲"
      ],
      "answer": "C",
      "explanation": "球差的定义：轴上点发出的同心光束经系统后不再是同心光束，不同入射高度的光线交光轴于不同位置。δL = L' - l'。",
      "chapter": "几何光学",
      "topic": "像差",
      "difficulty": "easy",
      "knowledge_tags": [
        "geo_024"
      ],
      "wrong_hint": {
        "type": "概念错误",
        "message": "球差是轴上点的像差，与入射高度有关；彗差是轴外点的像差，与视场有关。"
      }
    },
    {
      "id": "choice_025",
      "question": "单透镜能否校正球差？",
      "options": [
        "A. 能",
        "B. 不能",
        "C. 只有在特定条件下能",
        "D. 仅对正透镜能"
      ],
      "answer": "B",
      "explanation": "单透镜无法校正球差，只有正负透镜组合才有可能校正球差。正透镜产生负球差，负透镜产生正球差。",
      "chapter": "几何光学",
      "topic": "像差",
      "difficulty": "medium",
      "knowledge_tags": [
        "geo_025"
      ],
      "wrong_hint": {
        "type": "概念错误",
        "message": "单透镜不能校正球差，必须正负透镜组合才能互相补偿。"
      }
    },
    {
      "id": "choice_026",
      "question": "目视光学系统中，通常对哪种色光校正单色像差？",
      "options": [
        "A. F光（蓝光）",
        "B. e光（黄绿光）",
        "C. C光（红光）",
        "D. D光（钠黄光）"
      ],
      "answer": "B",
      "explanation": "目视光学系统：e光接近人眼敏感的黄绿光，对其校正单色像差；F光校正色差（蓝端）；C光校正色差（红端）。",
      "chapter": "几何光学",
      "topic": "像差",
      "difficulty": "medium",
      "knowledge_tags": [
        "geo_026"
      ],
      "wrong_hint": {
        "type": "概念错误",
        "message": "e光（黄绿光，546nm）接近人眼最敏感波长，用于校正单色像差；F光和C光用于校正色差。"
      }
    },
    {
      "id": "choice_027",
      "question": "畸变描述的是哪种像差？",
      "options": [
        "A. 像点位置偏离",
        "B. 像的放大率随视场变化",
        "C. 不同色光的像点位置不同",
        "D. 光束不再同心"
      ],
      "answer": "B",
      "explanation": "畸变是主光线成像缺陷，表现为像的放大率随视场大小变化，导致像的形状失真（枕形或桶形畸变），但不影响像的清晰度。",
      "chapter": "几何光学",
      "topic": "像差",
      "difficulty": "medium",
      "knowledge_tags": [
        "geo_027"
      ],
      "wrong_hint": {
        "type": "概念错误",
        "message": "畸变是放大率随视场变化导致的形状失真，不是位置色差或球差。"
      }
    },
    {
      "id": "choice_028",
      "question": "放大镜的视觉放大率公式（当眼睛调焦到无限远时）为？",
      "options": [
        "A. Γ = 250/f",
        "B. Γ = D/f",
        "C. Γ = f/250",
        "D. Γ = D·f"
      ],
      "answer": "A",
      "explanation": "当眼睛调焦到无限远（物体放在放大镜前焦面上）时，视觉放大率Γ = 250/f，其中D=250mm为明视距离。",
      "chapter": "几何光学",
      "topic": "典型系统",
      "difficulty": "easy",
      "knowledge_tags": [
        "geo_028"
      ],
      "wrong_hint": {
        "type": "公式混淆",
        "message": "放大镜视觉放大率公式是Γ=250/f（明视距离除以焦距），不是f/250。"
      }
    },
    {
      "id": "choice_029",
      "question": "显微镜的分辨率公式（瑞利判断）为？",
      "options": [
        "A. δ = 0.61λ/NA",
        "B. δ = 0.82λ/NA",
        "C. δ = 1.22λ/NA",
        "D. δ = λ/NA"
      ],
      "answer": "C",
      "explanation": "瑞利判断：δ = 0.61λ/NA（常写作1.22λ/(2NA)）。道威判断更保守：δ = 0.82λ/NA。注意不同教材写法。",
      "chapter": "几何光学",
      "topic": "典型系统",
      "difficulty": "hard",
      "knowledge_tags": [
        "geo_029"
      ],
      "wrong_hint": {
        "type": "公式混淆",
        "message": "瑞利判断是0.61λ/NA，道威判断是0.82λ/NA。注意区分两种判断标准。"
      }
    },
    {
      "id": "choice_030",
      "question": "望远镜的视觉放大率等于？",
      "options": [
        "A. 物镜焦距除以目镜焦距",
        "B. 目镜焦距除以物镜焦距",
        "C. 物镜口径除以目镜口径",
        "D. 角放大率γ"
      ],
      "answer": "A",
      "explanation": "望远镜视觉放大率Γ = -f物/f目（负号表示倒像），开普勒望远镜为正，伽利略望远镜为负。其绝对值等于物镜焦距除以目镜焦距。",
      "chapter": "几何光学",
      "topic": "典型系统",
      "difficulty": "easy",
      "knowledge_tags": [
        "geo_030"
      ],
      "wrong_hint": {
        "type": "公式混淆",
        "message": "望远镜视觉放大率=物镜焦距/目镜焦距，不是反过来的。"
      }
    },
    {
      "id": "choice_031",
      "question": "摄影物镜的F数（光圈数）定义为？",
      "options": [
        "A. f/D",
        "B. D/f",
        "C. f·D",
        "D. D/f²"
      ],
      "answer": "A",
      "explanation": "F数（光圈数）F = f/D，是相对孔径D/f的倒数。F数越小，相对孔径越大，像面照度越高。",
      "chapter": "几何光学",
      "topic": "典型系统",
      "difficulty": "easy",
      "knowledge_tags": [
        "geo_031"
      ],
      "wrong_hint": {
        "type": "公式混淆",
        "message": "F数=f/D，是相对孔径的倒数。不要混淆分子分母。"
      }
    },
    {
      "id": "choice_032",
      "question": "当眼睛调节在无限远时，眼睛的景深范围为？",
      "options": [
        "A. (P, ∞)",
        "B. (-∞, P)",
        "C. (P/2, ∞)",
        "D. (-∞, P/2)"
      ],
      "answer": "C",
      "explanation": "当眼睛调节在无限远时，远景平面在无限远，近景平面在P/2处，整个景深范围为(P/2, ∞)。",
      "chapter": "几何光学",
      "topic": "典型系统",
      "difficulty": "hard",
      "knowledge_tags": [
        "geo_032"
      ],
      "wrong_hint": {
        "type": "概念错误",
        "message": "眼睛调节在无限远时，近景平面在P/2（P为瞳孔中心到网膜距离），不是P或无限远。"
      }
    },
    {
      "id": "choice_033",
      "question": "在无限大各向同性均匀介质中，远离辐射源区域的波动方程为？",
      "options": [
        "A. ∇²E - με∂²E/∂t² = 0",
        "B. ∇²E + με∂²E/∂t² = 0",
        "C. ∇²E = 0",
        "D. ∂²E/∂t² = 0"
      ],
      "answer": "A",
      "explanation": "波动方程：∇²E - με∂²E/∂t² = 0。介质中光速v = 1/√(με)，真空中c = 1/√(μ₀ε₀)。",
      "chapter": "物理光学",
      "topic": "电磁理论",
      "difficulty": "medium",
      "knowledge_tags": [
        "phy_001"
      ],
      "wrong_hint": {
        "type": "公式混淆",
        "message": "波动方程是减号连接，不是加号。这是标准的电磁波波动方程形式。"
      }
    },
    {
      "id": "choice_034",
      "question": "介质折射率n与相对介电常数εr和相对磁导率μr的关系为？",
      "options": [
        "A. n = √(εrμr)",
        "B. n = εrμr",
        "C. n = εr/μr",
        "D. n = √(εr/μr)"
      ],
      "answer": "A",
      "explanation": "折射率n = √(εrμr)。对于非磁性介质，μr≈1，所以n≈√εr。",
      "chapter": "物理光学",
      "topic": "电磁理论",
      "difficulty": "easy",
      "knowledge_tags": [
        "phy_002"
      ],
      "wrong_hint": {
        "type": "公式混淆",
        "message": "n = √(εrμr)，注意是平方根，不是直接乘除。对于光学介质，μr通常近似为1。"
      }
    },
    {
      "id": "choice_035",
      "question": "光干涉的必要条件不包括？",
      "options": [
        "A. 频率相同",
        "B. 振动方向相同",
        "C. 振幅相等",
        "D. 相位差恒定"
      ],
      "answer": "C",
      "explanation": "光干涉的三个必要条件：频率相同、振动方向相同（或有平行分量）、相位差恒定。振幅相等不是必要条件，但振幅相等时条纹可见度最高。",
      "chapter": "物理光学",
      "topic": "干涉",
      "difficulty": "easy",
      "knowledge_tags": [
        "phy_003"
      ],
      "wrong_hint": {
        "type": "概念错误",
        "message": "振幅相等不是干涉的必要条件，干涉条件只要求频率相同、振动方向不垂直、相位差恒定。"
      }
    },
    {
      "id": "choice_036",
      "question": "杨氏双缝干涉中，条纹间距Δx的公式为？",
      "options": [
        "A. λD/d",
        "B. λd/D",
        "C. Dd/λ",
        "D. λD·d"
      ],
      "answer": "A",
      "explanation": "杨氏双缝干涉条纹间距：Δx = λD/d，其中D为缝到屏的距离，d为双缝间距，λ为波长。",
      "chapter": "物理光学",
      "topic": "干涉",
      "difficulty": "easy",
      "knowledge_tags": [
        "phy_004"
      ],
      "wrong_hint": {
        "type": "公式混淆",
        "message": "条纹间距Δx = λD/d，D是缝屏距离，d是缝间距。注意分子分母不要颠倒。"
      }
    },
    {
      "id": "choice_037",
      "question": "劳埃德镜实验中，镜面反射光与直接入射光相比，存在什么差异？",
      "options": [
        "A. 无差异",
        "B. 有半波损失（π相位突变）",
        "C. 强度减半",
        "D. 波长改变"
      ],
      "answer": "B",
      "explanation": "劳埃德镜中，反射光从光疏到光密反射时存在半波损失，即π相位突变。这导致镜面接触点处为暗纹。",
      "chapter": "物理光学",
      "topic": "干涉",
      "difficulty": "medium",
      "knowledge_tags": [
        "phy_005"
      ],
      "wrong_hint": {
        "type": "概念错误",
        "message": "劳埃德镜的关键是半波损失：光疏到光密反射时有π相位突变。这导致条纹整体平移半级。"
      }
    },
    {
      "id": "choice_038",
      "question": "薄膜干涉中，当光从光疏到光密反射时，会发生半波损失的条件是？",
      "options": [
        "A. 只有一种介质界面",
        "B. 仅当n₁ < n₂时",
        "C. 仅当n₁ > n₂时",
        "D. 任何情况下都发生"
      ],
      "answer": "B",
      "explanation": "半波损失发生在光从光疏介质（n较小）射向光密介质（n较大）反射时。若两束光都发生或都不发生半波损失，不影响相位差。",
      "chapter": "物理光学",
      "topic": "干涉",
      "difficulty": "medium",
      "knowledge_tags": [
        "phy_006"
      ],
      "wrong_hint": {
        "type": "概念错误",
        "message": "半波损失的条件是光疏到光密（n₁ < n₂）。只有一束光发生半波损失时才会影响干涉结果。"
      }
    },
    {
      "id": "choice_039",
      "question": "牛顿环反射光中心点为暗纹的原因是？",
      "options": [
        "A. 光程差为零",
        "B. 存在半波损失",
        "C. 干涉相长",
        "D. 光被吸收"
      ],
      "answer": "B",
      "explanation": "牛顿环反射光中心点为暗纹，是因为在空气膜下表面（玻璃-空气界面）反射时有半波损失，导致中心点光程差为λ/2，满足相消条件。",
      "chapter": "物理光学",
      "topic": "干涉",
      "difficulty": "medium",
      "knowledge_tags": [
        "phy_007"
      ],
      "wrong_hint": {
        "type": "概念错误",
        "message": "牛顿环中心h=0，但有半波损失，所以光程差为λ/2，形成暗纹。透射光中心为亮纹。"
      }
    },
    {
      "id": "choice_040",
      "question": "迈克尔逊干涉仪中，移动反射镜距离d，条纹吞吐的数目N与d的关系为？",
      "options": [
        "A. d = Nλ",
        "B. d = Nλ/2",
        "C. d = 2Nλ",
        "D. d = N/λ"
      ],
      "answer": "B",
      "explanation": "迈克尔逊干涉仪中，光往返一次，光程差改变2d。每移动λ/2，条纹吞吐一条。所以d = Nλ/2。",
      "chapter": "物理光学",
      "topic": "干涉",
      "difficulty": "medium",
      "knowledge_tags": [
        "phy_008"
      ],
      "wrong_hint": {
        "type": "公式混淆",
        "message": "注意迈克尔逊干涉仪中光往返两次，所以移动λ/2对应一条条纹变化，d=Nλ/2。"
      }
    },
    {
      "id": "choice_041",
      "question": "法布里-珀罗干涉仪中，当反射率R→1时，条纹的特征是？",
      "options": [
        "A. 条纹变宽，对比度降低",
        "B. 条纹变窄，对比度增高",
        "C. 条纹消失",
        "D. 条纹间距改变"
      ],
      "answer": "B",
      "explanation": "R越大，条纹越细锐（半峰宽越小），峰值对比度越高。这是法布里-珀罗干涉仪高分辨率的原因。",
      "chapter": "物理光学",
      "topic": "干涉",
      "difficulty": "hard",
      "knowledge_tags": [
        "phy_009"
      ],
      "wrong_hint": {
        "type": "概念错误",
        "message": "R增大使条纹变窄变锐，不是变宽。这是多光束干涉的特点，R→1时条纹极细锐。"
      }
    },
    {
      "id": "choice_042",
      "question": "增透膜（减反射膜）的光学厚度应满足？",
      "options": [
        "A. nh = mλ/2",
        "B. nh = (m+1/2)λ/2",
        "C. nh = mλ",
        "D. nh = λ"
      ],
      "answer": "B",
      "explanation": "增透膜条件：nh = (m+1/2)λ/2，即光学厚度为λ/4的奇数倍。此时反射光相消，透射光增强。",
      "chapter": "物理光学",
      "topic": "干涉",
      "difficulty": "medium",
      "knowledge_tags": [
        "phy_010"
      ],
      "wrong_hint": {
        "type": "公式混淆",
        "message": "增透膜是λ/4膜（光学厚度为λ/4的奇数倍），对应(m+1/2)λ/2，不是mλ/2。"
      }
    },
    {
      "id": "choice_043",
      "question": "夫琅和费单缝衍射中，暗纹条件为？",
      "options": [
        "A. a sinθ = mλ",
        "B. a sinθ = (m+1/2)λ",
        "C. d sinθ = mλ",
        "D. a sinθ = λ/2"
      ],
      "answer": "A",
      "explanation": "单缝衍射暗纹条件：a sinθ = mλ（m = ±1, ±2, ...），a为缝宽。注意m≠0。中央明纹宽度是其他明纹宽度的2倍。",
      "chapter": "物理光学",
      "topic": "衍射",
      "difficulty": "easy",
      "knowledge_tags": [
        "phy_011"
      ],
      "wrong_hint": {
        "type": "公式混淆",
        "message": "单缝衍射暗纹是a sinθ=mλ，多缝干涉主极大是d sinθ=mλ。不要混淆缝宽a和缝间距d。"
      }
    },
    {
      "id": "choice_044",
      "question": "夫琅和费圆孔衍射的艾里斑第一暗环满足？",
      "options": [
        "A. D sinθ = 1.22λ",
        "B. D sinθ = λ",
        "C. D sinθ = 2λ",
        "D. D sinθ = 0.61λ"
      ],
      "answer": "A",
      "explanation": "圆孔衍射艾里斑第一暗环：D sinθ = 1.22λ，其中D为圆孔直径。艾里斑半径r₀ = 1.22λf/D。",
      "chapter": "物理光学",
      "topic": "衍射",
      "difficulty": "medium",
      "knowledge_tags": [
        "phy_012"
      ],
      "wrong_hint": {
        "type": "公式混淆",
        "message": "圆孔衍射有1.22因子，这是贝塞尔函数第一个零点的结果。矩形孔没有这个因子。"
      }
    },
    {
      "id": "choice_045",
      "question": "光栅衍射中，缺级现象发生的条件是？",
      "options": [
        "A. d/a = 整数",
        "B. d/a = 分数",
        "C. a/d = 整数",
        "D. a = d"
      ],
      "answer": "A",
      "explanation": "缺级条件：当d/a = m（整数）时，第m, 2m, 3m...级主极大消失。即干涉主极大恰好落在衍射极小上。",
      "chapter": "物理光学",
      "topic": "光栅",
      "difficulty": "medium",
      "knowledge_tags": [
        "phy_013"
      ],
      "wrong_hint": {
        "type": "概念错误",
        "message": "缺级是干涉主极大与衍射极小重合造成的。条件是d/a为整数，即缝间距是缝宽的整数倍。"
      }
    },
    {
      "id": "choice_046",
      "question": "光栅的色分辨本领R等于？",
      "options": [
        "A. kN",
        "B. N/k",
        "C. k/N",
        "D. d/λ"
      ],
      "answer": "A",
      "explanation": "光栅色分辨本领：R = λ/Δλ = kN，其中k为光谱级次，N为光栅总缝数。级次越高、缝数越多，分辨本领越大。",
      "chapter": "物理光学",
      "topic": "光栅",
      "difficulty": "medium",
      "knowledge_tags": [
        "phy_014"
      ],
      "wrong_hint": {
        "type": "公式混淆",
        "message": "分辨本领R=kN，与级次k和总缝数N成正比。不要记反成N/k。"
      }
    },
    {
      "id": "choice_047",
      "question": "光栅的角色散本领Dθ定义为？",
      "options": [
        "A. dθ/dλ = k/(d cosθ)",
        "B. dθ/dλ = d cosθ/k",
        "C. dθ/dλ = k·d·cosθ",
        "D. dθ/dλ = cosθ/(k·d)"
      ],
      "answer": "A",
      "explanation": "角色散本领：Dθ = dθ/dλ = k/(d cosθ)。表示单位波长变化引起的衍射角变化。光栅常数d越小，色散越大。",
      "chapter": "物理光学",
      "topic": "光栅",
      "difficulty": "hard",
      "knowledge_tags": [
        "phy_015"
      ],
      "wrong_hint": {
        "type": "公式混淆",
        "message": "角色散Dθ = k/(d cosθ)，d越小色散越大。注意分母是d cosθ，不是d·cosθ在分子。"
      }
    },
    {
      "id": "choice_048",
      "question": "闪耀光栅中，当入射光垂直于刻槽斜面时，K级闪耀波长满足？",
      "options": [
        "A. 2d sinθb = kλ",
        "B. d sinθb = kλ",
        "C. 2d sinθb = λ",
        "D. d sinθb = λ/2"
      ],
      "answer": "A",
      "explanation": "闪耀光栅：当入射光垂直于刻槽斜面时（α=β=θb），K级闪耀波长满足2d sinθb = kλ，其中θb为闪耀角。",
      "chapter": "物理光学",
      "topic": "光栅",
      "difficulty": "hard",
      "knowledge_tags": [
        "phy_016"
      ],
      "wrong_hint": {
        "type": "公式混淆",
        "message": "闪耀光栅垂直于斜面入射时，光程差为2d sinθb，不是d sinθb。注意是2d sinθb。"
      }
    },
    {
      "id": "choice_049",
      "question": "自然光通过偏振片后，出射光为？",
      "options": [
        "A. 自然光",
        "B. 部分偏振光",
        "C. 线偏振光",
        "D. 圆偏振光"
      ],
      "answer": "C",
      "explanation": "自然光通过偏振片后，只有振动方向与偏振片透振方向一致的分量通过，成为线偏振光，光强变为入射光强的一半。",
      "chapter": "物理光学",
      "topic": "偏振",
      "difficulty": "easy",
      "knowledge_tags": [
        "phy_017"
      ],
      "wrong_hint": {
        "type": "概念错误",
        "message": "偏振片的作用是把自然光变成线偏振光，不是保持自然光或变成圆偏振光。"
      }
    },
    {
      "id": "choice_050",
      "question": "马吕斯定律指出，强度为I₀的线偏振光通过偏振片后，透射光强为？",
      "options": [
        "A. I₀ cosθ",
        "B. I₀ cos²θ",
        "C. I₀ sin²θ",
        "D. I₀ sinθ"
      ],
      "answer": "B",
      "explanation": "马吕斯定律：I = I₀ cos²θ，其中θ为入射光振动方向与偏振片透振方向的夹角。当θ=90°时发生消光。",
      "chapter": "物理光学",
      "topic": "偏振",
      "difficulty": "easy",
      "knowledge_tags": [
        "phy_018"
      ],
      "wrong_hint": {
        "type": "公式混淆",
        "message": "马吕斯定律是cos²θ，不是cosθ。注意是平方关系。"
      }
    },
    {
      "id": "choice_051",
      "question": "波片（波晶片）的作用是？",
      "options": [
        "A. 改变光的传播方向",
        "B. 改变o光和e光的相位差",
        "C. 改变光的频率",
        "D. 吸收某一方向的振动"
      ],
      "answer": "B",
      "explanation": "波片不改变o光和e光的传播方向（对正入射而言），但改变两者的相位差，从而改变出射光的偏振态。",
      "chapter": "物理光学",
      "topic": "偏振",
      "difficulty": "medium",
      "knowledge_tags": [
        "phy_019"
      ],
      "wrong_hint": {
        "type": "概念错误",
        "message": "波片的作用是引入相位差，不是改变方向或频率。双折射使o光和e光产生相位差。"
      }
    },
    {
      "id": "choice_052",
      "question": "λ/4波片能将线偏振光变为圆偏振光的条件是？",
      "options": [
        "A. 入射光振动方向与波片光轴成0°",
        "B. 入射光振动方向与波片光轴成45°",
        "C. 入射光振动方向与波片光轴成90°",
        "D. 任意角度"
      ],
      "answer": "B",
      "explanation": "线偏振光通过λ/4波片变为圆偏振光的条件：入射光振动方向与波片光轴成45°，且o光与e光振幅相等（Ao=Ae）。",
      "chapter": "物理光学",
      "topic": "偏振",
      "difficulty": "medium",
      "knowledge_tags": [
        "phy_020"
      ],
      "wrong_hint": {
        "type": "概念错误",
        "message": "只有入射光振动方向与光轴成45°时，Ao=Ae，经λ/4波片后相位差π/2，才能形成圆偏振光。"
      }
    },
    {
      "id": "choice_053",
      "question": "方解石晶体中，o光和e光的传播特性区别在于？",
      "options": [
        "A. o光沿光轴传播，e光垂直光轴传播",
        "B. o光符合折射定律，e光在各向异性介质中一般不符合普通折射定律",
        "C. o光速度快，e光速度慢",
        "D. o光是线偏振光，e光不是"
      ],
      "answer": "B",
      "explanation": "o光（寻常光）在晶体中各方向传播速度相同，符合普通折射定律；e光（非常光）传播速度随方向变化，一般不符合普通折射定律。",
      "chapter": "物理光学",
      "topic": "偏振",
      "difficulty": "medium",
      "knowledge_tags": [
        "phy_021"
      ],
      "wrong_hint": {
        "type": "概念错误",
        "message": "o光和e光都是线偏振光。区别是o光遵守折射定律，e光在各向异性介质中一般不守恒。速度快慢取决于晶体类型（正/负晶体）。"
      }
    },
    {
      "id": "choice_054",
      "question": "在正晶体（如石英）中，o光和e光沿垂直于光轴方向传播时，传播速度的关系为？",
      "options": [
        "A. v₀ > vₑ",
        "B. v₀ < vₑ",
        "C. v₀ = vₑ",
        "D. 不确定"
      ],
      "answer": "B",
      "explanation": "正晶体中n₀ < nₑ，所以v₀ = c/n₀ > vₑ = c/nₑ。即o光传播速度大于e光。注意：正晶体中nₑ > n₀，e光较慢。",
      "chapter": "物理光学",
      "topic": "偏振",
      "difficulty": "hard",
      "knowledge_tags": [
        "phy_022"
      ],
      "wrong_hint": {
        "type": "概念错误",
        "message": "正晶体中nₑ > n₀（e光折射率大），所以vₑ < v₀。负晶体则相反。注意区分正负晶体！"
      }
    },
    {
      "id": "choice_055",
      "question": "旋光现象是指线偏振光通过某些物质后，振动面发生旋转。旋转角度与什么成正比？",
      "options": [
        "A. 光强",
        "B. 传播距离（晶体厚度）",
        "C. 频率",
        "D. 温度"
      ],
      "answer": "B",
      "explanation": "旋光角度θ = α·l，其中α为旋光系数，l为光在晶体中传播的距离（厚度）。与光强、频率无关（在旋光系数不变的前提下）。",
      "chapter": "物理光学",
      "topic": "偏振",
      "difficulty": "medium",
      "knowledge_tags": [
        "phy_023"
      ],
      "wrong_hint": {
        "type": "概念错误",
        "message": "旋光角度与传播距离成正比（θ=αl），不是与光强成正比。"
      }
    },
    {
      "id": "choice_056",
      "question": "琼斯矩阵法只能用于描述什么光？",
      "options": [
        "A. 自然光",
        "B. 部分偏振光",
        "C. 完全偏振光",
        "D. 任何光"
      ],
      "answer": "C",
      "explanation": "琼斯矩阵法只能用于完全偏振光（线偏振、圆偏振、椭圆偏振）的描述。对于非偏振光（自然光、部分偏振光），需要用斯托克斯矢量或相干矩阵。",
      "chapter": "物理光学",
      "topic": "偏振",
      "difficulty": "medium",
      "knowledge_tags": [
        "phy_024"
      ],
      "wrong_hint": {
        "type": "概念错误",
        "message": "琼斯矩阵法只适用于完全偏振光。自然光和部分偏振光不能用琼斯矩阵直接描述。"
      }
    },
    {
      "id": "choice_057",
      "question": "一束光经偏振片旋转一周，光强不变但有明暗变化，不出现消光，该光为？",
      "options": [
        "A. 自然光",
        "B. 圆偏振光",
        "C. 椭圆偏振光",
        "D. 部分偏振光"
      ],
      "answer": "C",
      "explanation": "椭圆偏振光通过偏振片旋转一周：光强变化（有极大极小），但不出现消光（因为总有分量透过）。圆偏振光光强不变；线偏振光有消光。",
      "chapter": "物理光学",
      "topic": "偏振",
      "difficulty": "hard",
      "knowledge_tags": [
        "phy_025"
      ],
      "wrong_hint": {
        "type": "概念错误",
        "message": "椭圆偏振光有极大极小但不消光；圆偏振光完全不变化；线偏振光有两明两暗且消光；部分偏振光也有极大极小但不消光，需进一步区分。"
      }
    },
    {
      "id": "choice_058",
      "question": "节点是角放大率γ等于多少的一对共轭点？",
      "options": [
        "A. 0",
        "B. +1",
        "C. -1",
        "D. ∞"
      ],
      "answer": "B",
      "explanation": "节点定义为角放大率γ = +1的一对共轭点。当物方和像方介质相同时，节点与主点重合。",
      "chapter": "几何光学",
      "topic": "理想光学系统",
      "difficulty": "medium",
      "knowledge_tags": [
        "geo_033"
      ],
      "wrong_hint": {
        "type": "概念错误",
        "message": "节点γ=+1，不是-1。γ=+1表示通过节点的共轭光线角度相等且同向。"
      }
    },
    {
      "id": "choice_059",
      "question": "反射棱镜中，二次反射棱镜的出射光轴相对于入射光轴偏转的角度为？",
      "options": [
        "A. 等于两个反射面间夹角",
        "B. 等于两个反射面间夹角的2倍",
        "C. 与夹角无关",
        "D. 等于90°"
      ],
      "answer": "B",
      "explanation": "二次反射棱镜中，出射光轴相对于入射光轴偏转的角度是两个反射面间夹角的2倍。这是双平面镜反射的基本性质。",
      "chapter": "几何光学",
      "topic": "平面系统",
      "difficulty": "medium",
      "knowledge_tags": [
        "geo_034"
      ],
      "wrong_hint": {
        "type": "概念错误",
        "message": "二次反射棱镜偏转角是两面夹角的2倍，不是等于夹角本身。"
      }
    },
    {
      "id": "choice_060",
      "question": "光学系统的景深与哪些因素有关？",
      "options": [
        "A. 仅与焦距有关",
        "B. 与入瞳直径、焦距和对准平面距离有关",
        "C. 仅与入瞳直径有关",
        "D. 仅与对准平面距离有关"
      ],
      "answer": "B",
      "explanation": "景深与入瞳直径（孔径）、焦距和对准平面距离都有关。入瞳直径越小、焦距越短、对准平面越远，景深越大。",
      "chapter": "几何光学",
      "topic": "光阑",
      "difficulty": "hard",
      "knowledge_tags": [
        "geo_035"
      ],
      "wrong_hint": {
        "type": "概念错误",
        "message": "景深是多个因素共同作用的结果：孔径越小景深越大，焦距越短景深越大，拍摄距离越远景深越大。"
      }
    },
    {
      "id": "choice_061",
      "question": "相干长度与光源的什么特性有关？",
      "options": [
        "A. 光强",
        "B. 单色性（谱线宽度）",
        "C. 偏振度",
        "D. 传播方向"
      ],
      "answer": "B",
      "explanation": "相干长度ΔLmax = λ²/Δλ，与光源的单色性（谱线宽度Δλ）有关。单色性越好（Δλ越小），相干长度越长。",
      "chapter": "物理光学",
      "topic": "干涉",
      "difficulty": "medium",
      "knowledge_tags": [
        "phy_026"
      ],
      "wrong_hint": {
        "type": "概念错误",
        "message": "相干长度与单色性相关，由ΔLmax=λ²/Δλ决定。单色性越好，相干长度越长。"
      }
    },
    {
      "id": "choice_062",
      "question": "在光栅光谱中，自由光谱范围（不重叠的波长范围）与光谱级次k的关系为？",
      "options": [
        "A. Δλ = λ/k",
        "B. Δλ = λ·k",
        "C. Δλ = k/λ",
        "D. 与k无关"
      ],
      "answer": "A",
      "explanation": "自由光谱范围Δλ = λ/k（或λmax/k），表示第k级光谱中不与其他级次重叠的波长范围。级次越高，自由光谱范围越小。",
      "chapter": "物理光学",
      "topic": "光栅",
      "difficulty": "hard",
      "knowledge_tags": [
        "phy_027"
      ],
      "wrong_hint": {
        "type": "公式混淆",
        "message": "自由光谱范围Δλ=λ/k，级次越高重叠越严重。不要记反成k·λ。"
      }
    },
    {
      "id": "choice_063",
      "question": "布儒斯特角满足的条件是？",
      "options": [
        "A. tanθB = n₁/n₂",
        "B. tanθB = n₂/n₁",
        "C. sinθB = n₂/n₁",
        "D. cosθB = n₂/n₁"
      ],
      "answer": "B",
      "explanation": "布儒斯特角：tanθB = n₂/n₁。此时反射光为完全线偏振光（s分量），振动方向垂直于入射面。",
      "chapter": "物理光学",
      "topic": "偏振",
      "difficulty": "medium",
      "knowledge_tags": [
        "phy_028"
      ],
      "wrong_hint": {
        "type": "公式混淆",
        "message": "布儒斯特角tanθB=n₂/n₁，是折射率之比，不是sin或cos。注意n₂是折射介质，n₁是入射介质。"
      }
    },
    {
      "id": "choice_064",
      "question": "光学系统的光瞳衔接原则要求？",
      "options": [
        "A. 前一系统的出瞳与后一系统的入瞳重合",
        "B. 前一系统的入瞳与后一系统的出瞳重合",
        "C. 两个系统的孔径光阑重合",
        "D. 两个系统的视场光阑重合"
      ],
      "answer": "A",
      "explanation": "光瞳衔接原则：前一系统的出瞳应与后一系统的入瞳重合，否则会发生光瞳切割，视场中出现黑暗部分。",
      "chapter": "几何光学",
      "topic": "光阑",
      "difficulty": "medium",
      "knowledge_tags": [
        "geo_036"
      ],
      "wrong_hint": {
        "type": "概念错误",
        "message": "光瞳衔接是前出瞳对后入瞳，不是反过来。这是保证光束正常通过组合系统的基本原则。"
      }
    },
    {
      "id": "choice_065",
      "question": "远心光路中，孔径光阑位于物镜的什么位置？",
      "options": [
        "A. 物镜前焦面上",
        "B. 物镜像方焦面上",
        "C. 物镜中心",
        "D. 一次实像面上"
      ],
      "answer": "B",
      "explanation": "物方远心光路：孔径光阑位于物镜像方焦面上，使入瞳位于无穷远，轴外点主光线平行于光轴，消除测量误差。",
      "chapter": "几何光学",
      "topic": "光阑",
      "difficulty": "hard",
      "knowledge_tags": [
        "geo_037"
      ],
      "wrong_hint": {
        "type": "概念错误",
        "message": "物方远心光路是将孔径光阑放在物镜像方焦面上，使入瞳在无穷远。不要混淆前焦面和像方焦面。"
      }
    },
    {
      "id": "choice_066",
      "question": "在双缝干涉实验中，若将光源在垂直于双缝连线的方向上移动，则干涉条纹如何移动？",
      "options": [
        "A. 与光源同方向移动",
        "B. 与光源反方向移动",
        "C. 不移动",
        "D. 条纹间距改变"
      ],
      "answer": "B",
      "explanation": "光源移动时，条纹移动方向与光源移动方向相反。光源上移，条纹下移。这是因为光程差补偿的需要。",
      "chapter": "物理光学",
      "topic": "干涉",
      "difficulty": "medium",
      "knowledge_tags": [
        "phy_029"
      ],
      "wrong_hint": {
        "type": "概念错误",
        "message": "条纹移动方向与光源移动方向相反。这是由光程差补偿决定的：光源上移，下缝光程变短，零级亮纹下移。"
      }
    },
    {
      "id": "choice_067",
      "question": "等厚干涉与等倾干涉的区别在于？",
      "options": [
        "A. 等厚干涉薄膜厚度变化，等倾干涉入射角变化",
        "B. 等厚干涉入射角变化，等倾干涉厚度变化",
        "C. 两者没有区别",
        "D. 等厚干涉是双光束，等倾干涉是多光束"
      ],
      "answer": "A",
      "explanation": "等厚干涉：厚度h变化，入射角固定（如劈尖、牛顿环）。等倾干涉：厚度均匀，入射角变化（如薄膜等倾条纹）。",
      "chapter": "物理光学",
      "topic": "干涉",
      "difficulty": "medium",
      "knowledge_tags": [
        "phy_030"
      ],
      "wrong_hint": {
        "type": "概念错误",
        "message": "等厚干涉是厚度变化引起的，等倾干涉是角度变化引起的。这是两者的本质区别。"
      }
    },
    {
      "id": "choice_068",
      "question": "菲涅耳波带片对光强的增强作用是基于？",
      "options": [
        "A. 衍射光互相干涉相消",
        "B. 让奇数半波带或偶数半波带通过，使衍射光干涉相长",
        "C. 吸收所有光能",
        "D. 全反射原理"
      ],
      "answer": "B",
      "explanation": "菲涅耳波带片通过遮挡交替的半波带（如奇数或偶数带），使剩余半波带的衍射光在观察点同相叠加，振幅增强，光强大幅增加。",
      "chapter": "物理光学",
      "topic": "衍射",
      "difficulty": "hard",
      "knowledge_tags": [
        "phy_031"
      ],
      "wrong_hint": {
        "type": "概念错误",
        "message": "波带片是衍射元件，不是吸收或反射元件。通过让同相位半波带通过，实现相长干涉增强。"
      }
    },
    {
      "id": "choice_069",
      "question": "在光栅光谱仪中，光栅常数d越小，则？",
      "options": [
        "A. 角色散越小",
        "B. 角色散越大",
        "C. 分辨本领越小",
        "D. 光谱范围越大"
      ],
      "answer": "B",
      "explanation": "角色散Dθ = k/(d cosθ)，d越小角色散越大。但d减小也会影响光谱范围等其他特性。",
      "chapter": "物理光学",
      "topic": "光栅",
      "difficulty": "medium",
      "knowledge_tags": [
        "phy_032"
      ],
      "wrong_hint": {
        "type": "概念错误",
        "message": "d与角色散成反比：d越小，角色散越大。注意是反比关系，不是正比。"
      }
    },
    {
      "id": "choice_070",
      "question": "尼科尔棱镜利用什么原理产生线偏振光？",
      "options": [
        "A. 双折射和全反射",
        "B. 选择性吸收",
        "C. 散射",
        "D. 衍射"
      ],
      "answer": "A",
      "explanation": "尼科尔棱镜利用双折射使o光和e光分离，再利用全反射将o光反射掉，只让e光透出，从而获得线偏振光。",
      "chapter": "物理光学",
      "topic": "偏振",
      "difficulty": "medium",
      "knowledge_tags": [
        "phy_033"
      ],
      "wrong_hint": {
        "type": "概念错误",
        "message": "尼科尔棱镜是双折射+全反射的组合，不是单纯吸收或散射。o光在胶合层发生全反射，e光透过。"
      }
    },
    {
      "id": "choice_071",
      "question": "关于'光波的基本性质'，以下说法正确的是？",
      "options": [
        "A. 可见光波长范围约380nm-780nm，在真空中传播速度c=3×10⁸m/s，介质中速度v=c/n。折射率是波长的函数，单色光具有单一波长，复色光由多种单色光组",
        "B. 平行平板是汇聚元件",
        "C. 球差是轴外像差",
        "D. 平面镜只能成虚像"
      ],
      "answer": "A",
      "explanation": "光波的基本性质：可见光波长范围约380nm-780nm，在真空中传播速度c=3×10⁸m/s，介质中速度v=c/n。折射率是波长的函数，单色光具有单一波长，复色光由多种单色光组成。",
      "chapter": "几何光学",
      "topic": "光波",
      "difficulty": "medium",
      "knowledge_tags": [
        "knowledge_001"
      ],
      "wrong_hint": {
        "type": "概念错误",
        "message": "请回顾'光波的基本性质'的相关内容。"
      }
    },
    {
      "id": "choice_072",
      "question": "关于'光源与发光点'，以下说法正确的是？",
      "options": [
        "A. 光源是能够辐射光能的物体，分为自发光体和被照亮物体。发光点是辐射光能量的几何点，是理想化模型。",
        "B. 孔径光阑决定视场大小",
        "C. 色差仅由反射引起",
        "D. 反射角大于入射角"
      ],
      "answer": "A",
      "explanation": "光源与发光点：光源是能够辐射光能的物体，分为自发光体和被照亮物体。发光点是辐射光能量的几何点，是理想化模型。",
      "chapter": "几何光学",
      "topic": "光波",
      "difficulty": "medium",
      "knowledge_tags": [
        "knowledge_002"
      ],
      "wrong_hint": {
        "type": "概念错误",
        "message": "请回顾'光源与发光点'的相关内容。"
      }
    },
    {
      "id": "choice_073",
      "question": "关于'光线、波面与光束'，以下说法正确的是？",
      "options": [
        "A. 光线是代表光传播方向的几何线。波面是振动位相相同的点构成的曲面。光束是与波面对应的法线束，分为平行光束、发散光束、会聚光束和像散光束。",
        "B. 实像由光线延长线相交形成",
        "C. 平面镜只能成虚像",
        "D. 球差是轴外像差"
      ],
      "answer": "A",
      "explanation": "光线、波面与光束：光线是代表光传播方向的几何线。波面是振动位相相同的点构成的曲面。光束是与波面对应的法线束，分为平行光束、发散光束、会聚光束和像散光束。",
      "chapter": "几何光学",
      "topic": "光波",
      "difficulty": "medium",
      "knowledge_tags": [
        "knowledge_003"
      ],
      "wrong_hint": {
        "type": "概念错误",
        "message": "请回顾'光线、波面与光束'的相关内容。"
      }
    },
    {
      "id": "choice_074",
      "question": "关于'全反射'，以下说法正确的是？",
      "options": [
        "A. 光从光密介质射向光疏介质时，当入射角大于临界角时，光线全部反射回原介质，不发生折射。应用于光纤和棱镜。",
        "B. 球差是轴外像差",
        "C. 共轴系统各面曲率中心不在同一直线上",
        "D. 虚物由实际光线会聚形成"
      ],
      "answer": "A",
      "explanation": "全反射：光从光密介质射向光疏介质时，当入射角大于临界角时，光线全部反射回原介质，不发生折射。应用于光纤和棱镜。",
      "chapter": "几何光学",
      "topic": "反射与折射",
      "difficulty": "medium",
      "knowledge_tags": [
        "knowledge_007"
      ],
      "wrong_hint": {
        "type": "概念错误",
        "message": "请回顾'全反射'的相关内容。"
      }
    },
    {
      "id": "choice_075",
      "question": "关于'费马原理'，以下说法正确的是？",
      "options": [
        "A. 光在传播中沿着光程为极值（极小、极大或恒定）的路径传播。光程是几何路程与折射率的乘积。",
        "B. 折射角小于入射角（光密到光疏）",
        "C. 孔径光阑决定视场大小",
        "D. 平行平板是汇聚元件"
      ],
      "answer": "A",
      "explanation": "费马原理：光在传播中沿着光程为极值（极小、极大或恒定）的路径传播。光程是几何路程与折射率的乘积。",
      "chapter": "几何光学",
      "topic": "费马原理",
      "difficulty": "medium",
      "knowledge_tags": [
        "knowledge_008"
      ],
      "wrong_hint": {
        "type": "概念错误",
        "message": "请回顾'费马原理'的相关内容。"
      }
    },
    {
      "id": "choice_076",
      "question": "关于'完善成像条件'，以下说法正确的是？",
      "options": [
        "A. 入射波面是球面波时出射波面也是球面波；入射是同心光束时出射也是同心光束；物点及其像点之间任意两条光路的光程相等。",
        "B. 反射角大于入射角",
        "C. 平行平板是汇聚元件",
        "D. 视场光阑决定入射光能量"
      ],
      "answer": "A",
      "explanation": "完善成像条件：入射波面是球面波时出射波面也是球面波；入射是同心光束时出射也是同心光束；物点及其像点之间任意两条光路的光程相等。",
      "chapter": "几何光学",
      "topic": "成像概念",
      "difficulty": "medium",
      "knowledge_tags": [
        "knowledge_010"
      ],
      "wrong_hint": {
        "type": "概念错误",
        "message": "请回顾'完善成像条件'的相关内容。"
      }
    },
    {
      "id": "choice_077",
      "question": "关于'实物与虚物、实像与虚像'，以下说法正确的是？",
      "options": [
        "A. 实物/实像由实际光线相交会聚形成；虚物/虚像由光线的延长线相交所形成。虚物通常由前一个光学系统所成的实像作为后续系统的物。",
        "B. 球差是轴外像差",
        "C. 实像由光线延长线相交形成",
        "D. 视场光阑决定入射光能量"
      ],
      "answer": "A",
      "explanation": "实物与虚物、实像与虚像：实物/实像由实际光线相交会聚形成；虚物/虚像由光线的延长线相交所形成。虚物通常由前一个光学系统所成的实像作为后续系统的物。",
      "chapter": "几何光学",
      "topic": "成像概念",
      "difficulty": "medium",
      "knowledge_tags": [
        "knowledge_011"
      ],
      "wrong_hint": {
        "type": "概念错误",
        "message": "请回顾'实物与虚物、实像与虚像'的相关内容。"
      }
    },
    {
      "id": "choice_078",
      "question": "关于'共轴光学系统'，以下说法正确的是？",
      "options": [
        "A. 若光学系统中各光学元件表面的曲率中心在一条直线上，则该系统为共轴光学系统，这条连线称为光轴。",
        "B. 球差是轴外像差",
        "C. 反射角大于入射角",
        "D. 孔径光阑决定视场大小"
      ],
      "answer": "A",
      "explanation": "共轴光学系统：若光学系统中各光学元件表面的曲率中心在一条直线上，则该系统为共轴光学系统，这条连线称为光轴。",
      "chapter": "几何光学",
      "topic": "成像概念",
      "difficulty": "medium",
      "knowledge_tags": [
        "knowledge_012"
      ],
      "wrong_hint": {
        "type": "概念错误",
        "message": "请回顾'共轴光学系统'的相关内容。"
      }
    },
    {
      "id": "choice_079",
      "question": "关于'球面折射符号规则'，以下说法正确的是？",
      "options": [
        "A. 物距L、像距L'、孔径角U/U'、入射高度h等参数的符号规则：以光传播方向为正，光轴以上为正，顺时针转向为正。",
        "B. 反射角大于入射角",
        "C. 实像由光线延长线相交形成",
        "D. 平面镜只能成虚像"
      ],
      "answer": "A",
      "explanation": "球面折射符号规则：物距L、像距L'、孔径角U/U'、入射高度h等参数的符号规则：以光传播方向为正，光轴以上为正，顺时针转向为正。",
      "chapter": "几何光学",
      "topic": "近轴光学",
      "difficulty": "medium",
      "knowledge_tags": [
        "knowledge_013"
      ],
      "wrong_hint": {
        "type": "概念错误",
        "message": "请回顾'球面折射符号规则'的相关内容。"
      }
    },
    {
      "id": "choice_080",
      "question": "关于'近轴区完善成像'，以下说法正确的是？",
      "options": [
        "A. 在近轴区（小孔径角），轴上物点成完善像，该像点称为高斯像点。近轴区中L'仅是l的函数，不随U变化。",
        "B. 反射角大于入射角",
        "C. 实像由光线延长线相交形成",
        "D. 共轴系统各面曲率中心不在同一直线上"
      ],
      "answer": "A",
      "explanation": "近轴区完善成像：在近轴区（小孔径角），轴上物点成完善像，该像点称为高斯像点。近轴区中L'仅是l的函数，不随U变化。",
      "chapter": "几何光学",
      "topic": "近轴光学",
      "difficulty": "medium",
      "knowledge_tags": [
        "knowledge_015"
      ],
      "wrong_hint": {
        "type": "概念错误",
        "message": "请回顾'近轴区完善成像'的相关内容。"
      }
    },
    {
      "id": "choice_081",
      "question": "关于'垂轴放大率'，以下说法正确的是？",
      "options": [
        "A. 像的大小与物的大小之比。β>0成正像，β<0成倒像；|β|>1为放大像，|β|<1为缩小像。L与l'同号时物像在系统同侧，虚实相反。",
        "B. 近轴区只适用于大孔径光线",
        "C. 平行平板是汇聚元件",
        "D. 虚物由实际光线会聚形成"
      ],
      "answer": "A",
      "explanation": "垂轴放大率：像的大小与物的大小之比。β>0成正像，β<0成倒像；|β|>1为放大像，|β|<1为缩小像。L与l'同号时物像在系统同侧，虚实相反。",
      "chapter": "几何光学",
      "topic": "近轴光学",
      "difficulty": "medium",
      "knowledge_tags": [
        "knowledge_016"
      ],
      "wrong_hint": {
        "type": "概念错误",
        "message": "请回顾'垂轴放大率'的相关内容。"
      }
    },
    {
      "id": "choice_082",
      "question": "关于'轴向放大率'，以下说法正确的是？",
      "options": [
        "A. 物点沿光轴微小移动时像点移动量与物点移动量之比。轴向放大率恒为正，说明物点沿轴向移动时像点沿同方向移动。",
        "B. 色差仅由反射引起",
        "C. 虚物由实际光线会聚形成",
        "D. 实像由光线延长线相交形成"
      ],
      "answer": "A",
      "explanation": "轴向放大率：物点沿光轴微小移动时像点移动量与物点移动量之比。轴向放大率恒为正，说明物点沿轴向移动时像点沿同方向移动。",
      "chapter": "几何光学",
      "topic": "近轴光学",
      "difficulty": "medium",
      "knowledge_tags": [
        "knowledge_017"
      ],
      "wrong_hint": {
        "type": "概念错误",
        "message": "请回顾'轴向放大率'的相关内容。"
      }
    },
    {
      "id": "choice_083",
      "question": "关于'角放大率'，以下说法正确的是？",
      "options": [
        "A. 一对共轭光线与光轴夹角之比。角放大率只与共轭点位置有关，与孔径角无关，表示折射面会聚或发散光束的能力。",
        "B. 视场光阑决定入射光能量",
        "C. 孔径光阑决定视场大小",
        "D. 近轴区只适用于大孔径光线"
      ],
      "answer": "A",
      "explanation": "角放大率：一对共轭光线与光轴夹角之比。角放大率只与共轭点位置有关，与孔径角无关，表示折射面会聚或发散光束的能力。",
      "chapter": "几何光学",
      "topic": "近轴光学",
      "difficulty": "medium",
      "knowledge_tags": [
        "knowledge_018"
      ],
      "wrong_hint": {
        "type": "概念错误",
        "message": "请回顾'角放大率'的相关内容。"
      }
    },
    {
      "id": "choice_084",
      "question": "关于'拉格朗日-赫姆霍兹不变量'，以下说法正确的是？",
      "options": [
        "A. nuy=n'u'y'在光学系统中保持不变，是光学系统的重要特征量，用于分析光束限制和能量传递。",
        "B. 垂轴放大率β<0时成正立像",
        "C. 光在非均匀介质中沿直线传播",
        "D. 实像由光线延长线相交形成"
      ],
      "answer": "A",
      "explanation": "拉格朗日-赫姆霍兹不变量：nuy=n'u'y'在光学系统中保持不变，是光学系统的重要特征量，用于分析光束限制和能量传递。",
      "chapter": "几何光学",
      "topic": "近轴光学",
      "difficulty": "medium",
      "knowledge_tags": [
        "knowledge_020"
      ],
      "wrong_hint": {
        "type": "概念错误",
        "message": "请回顾'拉格朗日-赫姆霍兹不变量'的相关内容。"
      }
    },
    {
      "id": "choice_085",
      "question": "关于'球面反射镜'，以下说法正确的是？",
      "options": [
        "A. 反射球面成像公式可由折射公式令n'=-n得到。当物点位于球心时，l=r，l'=r，β=α=-1，γ=1。",
        "B. 折射角小于入射角（光密到光疏）",
        "C. 共轴系统各面曲率中心不在同一直线上",
        "D. 实像由光线延长线相交形成"
      ],
      "answer": "A",
      "explanation": "球面反射镜：反射球面成像公式可由折射公式令n'=-n得到。当物点位于球心时，l=r，l'=r，β=α=-1，γ=1。",
      "chapter": "几何光学",
      "topic": "近轴光学",
      "difficulty": "medium",
      "knowledge_tags": [
        "knowledge_021"
      ],
      "wrong_hint": {
        "type": "概念错误",
        "message": "请回顾'球面反射镜'的相关内容。"
      }
    },
    {
      "id": "choice_086",
      "question": "关于'共轴球面系统过渡关系'，以下说法正确的是？",
      "options": [
        "A. 前一面的像空间是其后一面的物空间；折射率、角度、孔径高的过渡关系确保光线能依次追迹。",
        "B. 像散是轴上像差",
        "C. 平面镜只能成虚像",
        "D. 视场光阑决定入射光能量"
      ],
      "answer": "A",
      "explanation": "共轴球面系统过渡关系：前一面的像空间是其后一面的物空间；折射率、角度、孔径高的过渡关系确保光线能依次追迹。",
      "chapter": "几何光学",
      "topic": "近轴光学",
      "difficulty": "medium",
      "knowledge_tags": [
        "knowledge_022"
      ],
      "wrong_hint": {
        "type": "概念错误",
        "message": "请回顾'共轴球面系统过渡关系'的相关内容。"
      }
    },
    {
      "id": "choice_087",
      "question": "关于'理想光学系统'，以下说法正确的是？",
      "options": [
        "A. 高斯光学：在任意大的空间中，任意宽的光束都能够成完善像。由点对应点、直线对应直线、平面对应平面的共线成像理论描述。",
        "B. 近轴区只适用于大孔径光线",
        "C. 孔径光阑决定视场大小",
        "D. 反射角大于入射角"
      ],
      "answer": "A",
      "explanation": "理想光学系统：高斯光学：在任意大的空间中，任意宽的光束都能够成完善像。由点对应点、直线对应直线、平面对应平面的共线成像理论描述。",
      "chapter": "几何光学",
      "topic": "理想光学系统",
      "difficulty": "medium",
      "knowledge_tags": [
        "knowledge_023"
      ],
      "wrong_hint": {
        "type": "概念错误",
        "message": "请回顾'理想光学系统'的相关内容。"
      }
    },
    {
      "id": "choice_088",
      "question": "关于'理想光学系统成像性质'，以下说法正确的是？",
      "options": [
        "A. 光轴上的物点对应光轴上的像点；垂直于光轴的同一平面内各部分具有相同放大率；已知两对共轭面或一对共轭面加两对共轭点可确定系统成像。",
        "B. 角放大率γ与孔径角有关",
        "C. 实像由光线延长线相交形成",
        "D. 近轴区只适用于大孔径光线"
      ],
      "answer": "A",
      "explanation": "理想光学系统成像性质：光轴上的物点对应光轴上的像点；垂直于光轴的同一平面内各部分具有相同放大率；已知两对共轭面或一对共轭面加两对共轭点可确定系统成像。",
      "chapter": "几何光学",
      "topic": "理想光学系统",
      "difficulty": "medium",
      "knowledge_tags": [
        "knowledge_024"
      ],
      "wrong_hint": {
        "type": "概念错误",
        "message": "请回顾'理想光学系统成像性质'的相关内容。"
      }
    },
    {
      "id": "choice_089",
      "question": "关于'基点与基面'，以下说法正确的是？",
      "options": [
        "A. 理想光学系统用一对主点H、H'，一对焦点F、F'，一对节点J、J'来表示。主面上垂轴放大率为+1。",
        "B. 折射角小于入射角（光密到光疏）",
        "C. 平行平板是汇聚元件",
        "D. 球差是轴外像差"
      ],
      "answer": "A",
      "explanation": "基点与基面：理想光学系统用一对主点H、H'，一对焦点F、F'，一对节点J、J'来表示。主面上垂轴放大率为+1。",
      "chapter": "几何光学",
      "topic": "理想光学系统",
      "difficulty": "medium",
      "knowledge_tags": [
        "knowledge_025"
      ],
      "wrong_hint": {
        "type": "概念错误",
        "message": "请回顾'基点与基面'的相关内容。"
      }
    },
    {
      "id": "choice_090",
      "question": "关于'图解法求像'，以下说法正确的是？",
      "options": [
        "A. 平行于光轴入射的光线过像方焦点；过物方焦点的光线平行于光轴出射；倾斜平行光会聚于像方焦面上一点；共轭光线在主面上投射高度相等。",
        "B. 角放大率γ与孔径角有关",
        "C. 反射角大于入射角",
        "D. 平面镜只能成虚像"
      ],
      "answer": "A",
      "explanation": "图解法求像：平行于光轴入射的光线过像方焦点；过物方焦点的光线平行于光轴出射；倾斜平行光会聚于像方焦面上一点；共轭光线在主面上投射高度相等。",
      "chapter": "几何光学",
      "topic": "理想光学系统",
      "difficulty": "medium",
      "knowledge_tags": [
        "knowledge_026"
      ],
      "wrong_hint": {
        "type": "概念错误",
        "message": "请回顾'图解法求像'的相关内容。"
      }
    },
    {
      "id": "choice_091",
      "question": "关于'高斯公式与牛顿公式'，以下说法正确的是？",
      "options": [
        "A. 高斯公式以主点为原点，牛顿公式以焦点为原点。两者都是理想光学系统的核心成像公式。",
        "B. 垂轴放大率β<0时成正立像",
        "C. 近轴区只适用于大孔径光线",
        "D. 虚物由实际光线会聚形成"
      ],
      "answer": "A",
      "explanation": "高斯公式与牛顿公式：高斯公式以主点为原点，牛顿公式以焦点为原点。两者都是理想光学系统的核心成像公式。",
      "chapter": "几何光学",
      "topic": "理想光学系统",
      "difficulty": "medium",
      "knowledge_tags": [
        "knowledge_027"
      ],
      "wrong_hint": {
        "type": "概念错误",
        "message": "请回顾'高斯公式与牛顿公式'的相关内容。"
      }
    },
    {
      "id": "choice_092",
      "question": "关于'光组过渡公式'，以下说法正确的是？",
      "options": [
        "A. 多光组组合时，前一光组的像距到后一光组物距的过渡关系为l_{k+1}=l_k'-d_k，光学间隔Δ=d-f'_1+f_2。",
        "B. 色差仅由反射引起",
        "C. 球差是轴外像差",
        "D. 折射角小于入射角（光密到光疏）"
      ],
      "answer": "A",
      "explanation": "光组过渡公式：多光组组合时，前一光组的像距到后一光组物距的过渡关系为l_{k+1}=l_k'-d_k，光学间隔Δ=d-f'_1+f_2。",
      "chapter": "几何光学",
      "topic": "理想光学系统",
      "difficulty": "medium",
      "knowledge_tags": [
        "knowledge_028"
      ],
      "wrong_hint": {
        "type": "概念错误",
        "message": "请回顾'光组过渡公式'的相关内容。"
      }
    },
    {
      "id": "choice_093",
      "question": "关于'光学系统节点'，以下说法正确的是？",
      "options": [
        "A. 角放大率等于+1的一对共轭点称为节点。当n=n'时节点与主点重合；当n≠n'时节点不与主点重合。",
        "B. 孔径光阑决定视场大小",
        "C. 光在非均匀介质中沿直线传播",
        "D. 共轴系统各面曲率中心不在同一直线上"
      ],
      "answer": "A",
      "explanation": "光学系统节点：角放大率等于+1的一对共轭点称为节点。当n=n'时节点与主点重合；当n≠n'时节点不与主点重合。",
      "chapter": "几何光学",
      "topic": "理想光学系统",
      "difficulty": "medium",
      "knowledge_tags": [
        "knowledge_030"
      ],
      "wrong_hint": {
        "type": "概念错误",
        "message": "请回顾'光学系统节点'的相关内容。"
      }
    },
    {
      "id": "choice_094",
      "question": "关于'正切计算法'，以下说法正确的是？",
      "options": [
        "A. 多光组组合时，令tgU₁=h₁/f'₁，依次计算各面高度和角度，用于求组合系统焦距和主点位置。",
        "B. 共轴系统各面曲率中心不在同一直线上",
        "C. 平面镜只能成虚像",
        "D. 视场光阑决定入射光能量"
      ],
      "answer": "A",
      "explanation": "正切计算法：多光组组合时，令tgU₁=h₁/f'₁，依次计算各面高度和角度，用于求组合系统焦距和主点位置。",
      "chapter": "几何光学",
      "topic": "理想光学系统",
      "difficulty": "medium",
      "knowledge_tags": [
        "knowledge_031"
      ],
      "wrong_hint": {
        "type": "概念错误",
        "message": "请回顾'正切计算法'的相关内容。"
      }
    },
    {
      "id": "choice_095",
      "question": "关于'远摄型光组'，以下说法正确的是？",
      "options": [
        "A. 正光组+负光组组合，焦距大于光组的筒长，应用于长焦距镜头设计。",
        "B. 折射角小于入射角（光密到光疏）",
        "C. 虚物由实际光线会聚形成",
        "D. 共轴系统各面曲率中心不在同一直线上"
      ],
      "answer": "A",
      "explanation": "远摄型光组：正光组+负光组组合，焦距大于光组的筒长，应用于长焦距镜头设计。",
      "chapter": "几何光学",
      "topic": "理想光学系统",
      "difficulty": "medium",
      "knowledge_tags": [
        "knowledge_032"
      ],
      "wrong_hint": {
        "type": "概念错误",
        "message": "请回顾'远摄型光组'的相关内容。"
      }
    },
    {
      "id": "choice_096",
      "question": "关于'望远系统'，以下说法正确的是？",
      "options": [
        "A. 无焦系统（Φ=0），由两个正光组组成，物镜焦距大于目镜焦距。视觉放大率等于角放大率。",
        "B. 球差是轴外像差",
        "C. 角放大率γ与孔径角有关",
        "D. 平面镜只能成虚像"
      ],
      "answer": "A",
      "explanation": "望远系统：无焦系统（Φ=0），由两个正光组组成，物镜焦距大于目镜焦距。视觉放大率等于角放大率。",
      "chapter": "几何光学",
      "topic": "望远镜",
      "difficulty": "medium",
      "knowledge_tags": [
        "knowledge_034"
      ],
      "wrong_hint": {
        "type": "概念错误",
        "message": "请回顾'望远系统'的相关内容。"
      }
    },
    {
      "id": "choice_097",
      "question": "关于'显微镜系统'，以下说法正确的是？",
      "options": [
        "A. 物镜+目镜，两者焦距都较小，光学间隔较大。物体放在物方焦面以外靠近焦点处。",
        "B. 像散是轴上像差",
        "C. 平行平板是汇聚元件",
        "D. 球差是轴外像差"
      ],
      "answer": "A",
      "explanation": "显微镜系统：物镜+目镜，两者焦距都较小，光学间隔较大。物体放在物方焦面以外靠近焦点处。",
      "chapter": "几何光学",
      "topic": "放大镜与显微镜",
      "difficulty": "medium",
      "knowledge_tags": [
        "knowledge_035"
      ],
      "wrong_hint": {
        "type": "概念错误",
        "message": "请回顾'显微镜系统'的相关内容。"
      }
    },
    {
      "id": "choice_098",
      "question": "关于'透镜分类'，以下说法正确的是？",
      "options": [
        "A. 正透镜（会聚透镜）光焦度为正；负透镜（发散透镜）光焦度为负。按形状分为双凸、平凸、弯月等。",
        "B. 光在非均匀介质中沿直线传播",
        "C. 色差仅由反射引起",
        "D. 共轴系统各面曲率中心不在同一直线上"
      ],
      "answer": "A",
      "explanation": "透镜分类：正透镜（会聚透镜）光焦度为正；负透镜（发散透镜）光焦度为负。按形状分为双凸、平凸、弯月等。",
      "chapter": "几何光学",
      "topic": "透镜",
      "difficulty": "medium",
      "knowledge_tags": [
        "knowledge_036"
      ],
      "wrong_hint": {
        "type": "概念错误",
        "message": "请回顾'透镜分类'的相关内容。"
      }
    },
    {
      "id": "choice_099",
      "question": "关于'透镜焦距公式'，以下说法正确的是？",
      "options": [
        "A. 厚透镜焦距与折射率、两球面曲率半径及厚度有关。当厚度d变化时，双凸透镜可变为发散透镜。",
        "B. 角放大率γ与孔径角有关",
        "C. 实像由光线延长线相交形成",
        "D. 孔径光阑决定视场大小"
      ],
      "answer": "A",
      "explanation": "透镜焦距公式：厚透镜焦距与折射率、两球面曲率半径及厚度有关。当厚度d变化时，双凸透镜可变为发散透镜。",
      "chapter": "几何光学",
      "topic": "透镜",
      "difficulty": "medium",
      "knowledge_tags": [
        "knowledge_037"
      ],
      "wrong_hint": {
        "type": "概念错误",
        "message": "请回顾'透镜焦距公式'的相关内容。"
      }
    },
    {
      "id": "choice_100",
      "question": "关于'平面镜成像'，以下说法正确的是？",
      "options": [
        "A. 平面镜是唯一能够成完善像的最简单的光学元件。放大率β=+1，像与物完全对称于平面镜。奇数次反射成镜像，偶数次反射成一致像。",
        "B. 孔径光阑决定视场大小",
        "C. 共轴系统各面曲率中心不在同一直线上",
        "D. 视场光阑决定入射光能量"
      ],
      "answer": "A",
      "explanation": "平面镜成像：平面镜是唯一能够成完善像的最简单的光学元件。放大率β=+1，像与物完全对称于平面镜。奇数次反射成镜像，偶数次反射成一致像。",
      "chapter": "几何光学",
      "topic": "平面与平面系统",
      "difficulty": "medium",
      "knowledge_tags": [
        "knowledge_038"
      ],
      "wrong_hint": {
        "type": "概念错误",
        "message": "请回顾'平面镜成像'的相关内容。"
      }
    },
    {
      "id": "choice_101",
      "question": "关于'光学杠杆'，以下说法正确的是？",
      "options": [
        "A. 利用平面镜转动特性测量微小角度或位移，放大倍数与光路长度有关。",
        "B. 反射角大于入射角",
        "C. 折射角小于入射角（光密到光疏）",
        "D. 角放大率γ与孔径角有关"
      ],
      "answer": "A",
      "explanation": "光学杠杆：利用平面镜转动特性测量微小角度或位移，放大倍数与光路长度有关。",
      "chapter": "几何光学",
      "topic": "平面与平面系统",
      "difficulty": "medium",
      "knowledge_tags": [
        "knowledge_039"
      ],
      "wrong_hint": {
        "type": "概念错误",
        "message": "请回顾'光学杠杆'的相关内容。"
      }
    },
    {
      "id": "choice_102",
      "question": "关于'双平面镜'，以下说法正确的是？",
      "options": [
        "A. 出射光线与入射光线的夹角只取决于双平面镜的夹角α，β=2α，与入射角无关。",
        "B. 折射角小于入射角（光密到光疏）",
        "C. 角放大率γ与孔径角有关",
        "D. 球差是轴外像差"
      ],
      "answer": "A",
      "explanation": "双平面镜：出射光线与入射光线的夹角只取决于双平面镜的夹角α，β=2α，与入射角无关。",
      "chapter": "几何光学",
      "topic": "平面与平面系统",
      "difficulty": "medium",
      "knowledge_tags": [
        "knowledge_040"
      ],
      "wrong_hint": {
        "type": "概念错误",
        "message": "请回顾'双平面镜'的相关内容。"
      }
    },
    {
      "id": "choice_103",
      "question": "关于'平行平板'，以下说法正确的是？",
      "options": [
        "A. 光线经平行平板后方向不变，是无焦度元件。产生侧向位移和轴向位移，不能成完善像。",
        "B. 垂轴放大率β<0时成正立像",
        "C. 实像由光线延长线相交形成",
        "D. 反射角大于入射角"
      ],
      "answer": "A",
      "explanation": "平行平板：光线经平行平板后方向不变，是无焦度元件。产生侧向位移和轴向位移，不能成完善像。",
      "chapter": "几何光学",
      "topic": "平面与平面系统",
      "difficulty": "medium",
      "knowledge_tags": [
        "knowledge_041"
      ],
      "wrong_hint": {
        "type": "概念错误",
        "message": "请回顾'平行平板'的相关内容。"
      }
    },
    {
      "id": "choice_104",
      "question": "关于'反射棱镜'，以下说法正确的是？",
      "options": [
        "A. 一次反射棱镜、二次反射棱镜、三次反射棱镜（斯密特棱镜）等。应用：转折光路、转像、倒像、分光。",
        "B. 角放大率γ与孔径角有关",
        "C. 平面镜只能成虚像",
        "D. 虚物由实际光线会聚形成"
      ],
      "answer": "A",
      "explanation": "反射棱镜：一次反射棱镜、二次反射棱镜、三次反射棱镜（斯密特棱镜）等。应用：转折光路、转像、倒像、分光。",
      "chapter": "几何光学",
      "topic": "平面与平面系统",
      "difficulty": "medium",
      "knowledge_tags": [
        "knowledge_042"
      ],
      "wrong_hint": {
        "type": "概念错误",
        "message": "请回顾'反射棱镜'的相关内容。"
      }
    },
    {
      "id": "choice_105",
      "question": "关于'屋脊棱镜'，以下说法正确的是？",
      "options": [
        "A. 保持原棱镜的出射光轴方向，使垂直于主截面的方向倒转，从而使像与物完全一致。屋脊棱镜相当于两个反射面。",
        "B. 虚物由实际光线会聚形成",
        "C. 视场光阑决定入射光能量",
        "D. 色差仅由反射引起"
      ],
      "answer": "A",
      "explanation": "屋脊棱镜：保持原棱镜的出射光轴方向，使垂直于主截面的方向倒转，从而使像与物完全一致。屋脊棱镜相当于两个反射面。",
      "chapter": "几何光学",
      "topic": "平面与平面系统",
      "difficulty": "medium",
      "knowledge_tags": [
        "knowledge_043"
      ],
      "wrong_hint": {
        "type": "概念错误",
        "message": "请回顾'屋脊棱镜'的相关内容。"
      }
    },
    {
      "id": "choice_106",
      "question": "关于'立方角锥棱镜'，以下说法正确的是？",
      "options": [
        "A. 光线以任意方向从底面入射，经三个直角面依次反射后，出射光线始终与入射光线平行。棱镜绕顶点旋转时出射方向不变。",
        "B. 共轴系统各面曲率中心不在同一直线上",
        "C. 近轴区只适用于大孔径光线",
        "D. 反射角大于入射角"
      ],
      "answer": "A",
      "explanation": "立方角锥棱镜：光线以任意方向从底面入射，经三个直角面依次反射后，出射光线始终与入射光线平行。棱镜绕顶点旋转时出射方向不变。",
      "chapter": "几何光学",
      "topic": "平面与平面系统",
      "difficulty": "medium",
      "knowledge_tags": [
        "knowledge_044"
      ],
      "wrong_hint": {
        "type": "概念错误",
        "message": "请回顾'立方角锥棱镜'的相关内容。"
      }
    },
    {
      "id": "choice_107",
      "question": "关于'棱镜展开'，以下说法正确的是？",
      "options": [
        "A. 棱镜的等效作用等于平面镜加平行平板。按反射面顺序翻转主截面180°可得等效平行平板。",
        "B. 共轴系统各面曲率中心不在同一直线上",
        "C. 色差仅由反射引起",
        "D. 垂轴放大率β<0时成正立像"
      ],
      "answer": "A",
      "explanation": "棱镜展开：棱镜的等效作用等于平面镜加平行平板。按反射面顺序翻转主截面180°可得等效平行平板。",
      "chapter": "几何光学",
      "topic": "平面与平面系统",
      "difficulty": "medium",
      "knowledge_tags": [
        "knowledge_045"
      ],
      "wrong_hint": {
        "type": "概念错误",
        "message": "请回顾'棱镜展开'的相关内容。"
      }
    },
    {
      "id": "choice_108",
      "question": "关于'折射棱镜'，以下说法正确的是？",
      "options": [
        "A. 偏向角δ=I₁+I₂'-α。最小偏向角时满足对称光路，可用于精确测量折射率。",
        "B. 反射角大于入射角",
        "C. 角放大率γ与孔径角有关",
        "D. 实像由光线延长线相交形成"
      ],
      "answer": "A",
      "explanation": "折射棱镜：偏向角δ=I₁+I₂'-α。最小偏向角时满足对称光路，可用于精确测量折射率。",
      "chapter": "几何光学",
      "topic": "平面与平面系统",
      "difficulty": "medium",
      "knowledge_tags": [
        "knowledge_046"
      ],
      "wrong_hint": {
        "type": "概念错误",
        "message": "请回顾'折射棱镜'的相关内容。"
      }
    },
    {
      "id": "choice_109",
      "question": "关于'孔径光阑'，以下说法正确的是？",
      "options": [
        "A. 限制进入光学系统的成像光束口径的光阑。位置对轴上点光宽度无区别，但对轴外点光束限制影响较大。",
        "B. 平行平板是汇聚元件",
        "C. 像散是轴上像差",
        "D. 孔径光阑决定视场大小"
      ],
      "answer": "A",
      "explanation": "孔径光阑：限制进入光学系统的成像光束口径的光阑。位置对轴上点光宽度无区别，但对轴外点光束限制影响较大。",
      "chapter": "几何光学",
      "topic": "光阑与景深",
      "difficulty": "medium",
      "knowledge_tags": [
        "knowledge_048"
      ],
      "wrong_hint": {
        "type": "概念错误",
        "message": "请回顾'孔径光阑'的相关内容。"
      }
    },
    {
      "id": "choice_110",
      "question": "关于'视场光阑'，以下说法正确的是？",
      "options": [
        "A. 限制成像范围的光阑。入射窗是视场光阑关于前面光学系统的像，出射窗是视场光阑关于后面光学系统的像。",
        "B. 孔径光阑决定视场大小",
        "C. 折射角小于入射角（光密到光疏）",
        "D. 平行平板是汇聚元件"
      ],
      "answer": "A",
      "explanation": "视场光阑：限制成像范围的光阑。入射窗是视场光阑关于前面光学系统的像，出射窗是视场光阑关于后面光学系统的像。",
      "chapter": "几何光学",
      "topic": "光阑与景深",
      "difficulty": "medium",
      "knowledge_tags": [
        "knowledge_049"
      ],
      "wrong_hint": {
        "type": "概念错误",
        "message": "请回顾'视场光阑'的相关内容。"
      }
    },
    {
      "id": "choice_111",
      "question": "关于'入瞳与出瞳'，以下说法正确的是？",
      "options": [
        "A. 入瞳是孔径光阑对前面光学系统所成的像；出瞳是孔径光阑对后面光学系统所成的像。出瞳应与眼瞳重合。",
        "B. 像散是轴上像差",
        "C. 角放大率γ与孔径角有关",
        "D. 视场光阑决定入射光能量"
      ],
      "answer": "A",
      "explanation": "入瞳与出瞳：入瞳是孔径光阑对前面光学系统所成的像；出瞳是孔径光阑对后面光学系统所成的像。出瞳应与眼瞳重合。",
      "chapter": "几何光学",
      "topic": "光阑与景深",
      "difficulty": "medium",
      "knowledge_tags": [
        "knowledge_050"
      ],
      "wrong_hint": {
        "type": "概念错误",
        "message": "请回顾'入瞳与出瞳'的相关内容。"
      }
    },
    {
      "id": "choice_112",
      "question": "关于'光瞳衔接原则'，以下说法正确的是？",
      "options": [
        "A. 望远镜的出瞳应与眼睛的入瞳重合，否则会发生光瞳切割，视场中出现黑暗部分。",
        "B. 像散是轴上像差",
        "C. 近轴区只适用于大孔径光线",
        "D. 球差是轴外像差"
      ],
      "answer": "A",
      "explanation": "光瞳衔接原则：望远镜的出瞳应与眼睛的入瞳重合，否则会发生光瞳切割，视场中出现黑暗部分。",
      "chapter": "几何光学",
      "topic": "光阑与景深",
      "difficulty": "medium",
      "knowledge_tags": [
        "knowledge_053"
      ],
      "wrong_hint": {
        "type": "概念错误",
        "message": "请回顾'光瞳衔接原则'的相关内容。"
      }
    },
    {
      "id": "choice_113",
      "question": "关于'远心光路'，以下说法正确的是？",
      "options": [
        "A. 孔径光阑位于物镜像方焦面上，使入瞳位于无穷远，轴外点主光线平行于光轴。用于测量以消除调焦误差。",
        "B. 折射角小于入射角（光密到光疏）",
        "C. 色差仅由反射引起",
        "D. 球差是轴外像差"
      ],
      "answer": "A",
      "explanation": "远心光路：孔径光阑位于物镜像方焦面上，使入瞳位于无穷远，轴外点主光线平行于光轴。用于测量以消除调焦误差。",
      "chapter": "几何光学",
      "topic": "光阑与景深",
      "difficulty": "medium",
      "knowledge_tags": [
        "knowledge_054"
      ],
      "wrong_hint": {
        "type": "概念错误",
        "message": "请回顾'远心光路'的相关内容。"
      }
    },
    {
      "id": "choice_114",
      "question": "关于'像差产生原因'，以下说法正确的是？",
      "options": [
        "A. 实际像与理想像之间的差异称为像差。产生原因：孔径过大和视场过大。小孔径小视场成像无像差。",
        "B. 虚物由实际光线会聚形成",
        "C. 反射角大于入射角",
        "D. 孔径光阑决定视场大小"
      ],
      "answer": "A",
      "explanation": "像差产生原因：实际像与理想像之间的差异称为像差。产生原因：孔径过大和视场过大。小孔径小视场成像无像差。",
      "chapter": "几何光学",
      "topic": "像差理论",
      "difficulty": "medium",
      "knowledge_tags": [
        "knowledge_056"
      ],
      "wrong_hint": {
        "type": "概念错误",
        "message": "请回顾'像差产生原因'的相关内容。"
      }
    },
    {
      "id": "choice_115",
      "question": "关于'几何像差分类'，以下说法正确的是？",
      "options": [
        "A. 单色像差：球差、彗差、像散、场曲、畸变、正弦差。色差：位置色差、倍率色差。",
        "B. 像散是轴上像差",
        "C. 实像由光线延长线相交形成",
        "D. 视场光阑决定入射光能量"
      ],
      "answer": "A",
      "explanation": "几何像差分类：单色像差：球差、彗差、像散、场曲、畸变、正弦差。色差：位置色差、倍率色差。",
      "chapter": "几何光学",
      "topic": "像差理论",
      "difficulty": "medium",
      "knowledge_tags": [
        "knowledge_057"
      ],
      "wrong_hint": {
        "type": "概念错误",
        "message": "请回顾'几何像差分类'的相关内容。"
      }
    },
    {
      "id": "choice_116",
      "question": "关于'球差校正'，以下说法正确的是？",
      "options": [
        "A. 正负透镜组合才有可能校正球差。对于含初级和二级球差的系统，当边缘带球差为0时，0.707带有最大剩余球差。",
        "B. 反射角大于入射角",
        "C. 近轴区只适用于大孔径光线",
        "D. 像散是轴上像差"
      ],
      "answer": "A",
      "explanation": "球差校正：正负透镜组合才有可能校正球差。对于含初级和二级球差的系统，当边缘带球差为0时，0.707带有最大剩余球差。",
      "chapter": "几何光学",
      "topic": "像差理论",
      "difficulty": "medium",
      "knowledge_tags": [
        "knowledge_059"
      ],
      "wrong_hint": {
        "type": "概念错误",
        "message": "请回顾'球差校正'的相关内容。"
      }
    },
    {
      "id": "choice_117",
      "question": "关于'波像差'，以下说法正确的是？",
      "options": [
        "A. 实际波面与理想波面在出瞳处的光程差。波像差为孔径的函数，几何像差大时波像差也大。W<λ/4时认为成像完善。",
        "B. 垂轴放大率β<0时成正立像",
        "C. 视场光阑决定入射光能量",
        "D. 角放大率γ与孔径角有关"
      ],
      "answer": "A",
      "explanation": "波像差：实际波面与理想波面在出瞳处的光程差。波像差为孔径的函数，几何像差大时波像差也大。W<λ/4时认为成像完善。",
      "chapter": "几何光学",
      "topic": "像差理论",
      "difficulty": "medium",
      "knowledge_tags": [
        "knowledge_060"
      ],
      "wrong_hint": {
        "type": "概念错误",
        "message": "请回顾'波像差'的相关内容。"
      }
    },
    {
      "id": "choice_118",
      "question": "关于'消像差原则'，以下说法正确的是？",
      "options": [
        "A. 主要像差应校正到接收器不能察觉的程度。目视系统用e光校正单色像差，F光和C光校正色差。",
        "B. 垂轴放大率β<0时成正立像",
        "C. 反射角大于入射角",
        "D. 平行平板是汇聚元件"
      ],
      "answer": "A",
      "explanation": "消像差原则：主要像差应校正到接收器不能察觉的程度。目视系统用e光校正单色像差，F光和C光校正色差。",
      "chapter": "几何光学",
      "topic": "像差理论",
      "difficulty": "medium",
      "knowledge_tags": [
        "knowledge_061"
      ],
      "wrong_hint": {
        "type": "概念错误",
        "message": "请回顾'消像差原则'的相关内容。"
      }
    },
    {
      "id": "choice_119",
      "question": "关于'眼睛结构'，以下说法正确的是？",
      "options": [
        "A. 眼睛由角膜、前室、水晶体、后室、视网膜组成。水晶体曲率半径40-70mm可调节，瞳孔直径2-8mm。",
        "B. 角放大率γ与孔径角有关",
        "C. 视场光阑决定入射光能量",
        "D. 实像由光线延长线相交形成"
      ],
      "answer": "A",
      "explanation": "眼睛结构：眼睛由角膜、前室、水晶体、后室、视网膜组成。水晶体曲率半径40-70mm可调节，瞳孔直径2-8mm。",
      "chapter": "几何光学",
      "topic": "眼睛与视觉",
      "difficulty": "medium",
      "knowledge_tags": [
        "knowledge_062"
      ],
      "wrong_hint": {
        "type": "概念错误",
        "message": "请回顾'眼睛结构'的相关内容。"
      }
    },
    {
      "id": "choice_120",
      "question": "关于'眼睛调节能力'，以下说法正确的是？",
      "options": [
        "A. 眼睛远点与近点倒数之差为调节能力，单位屈光度(D)。明视距离为250mm。",
        "B. 光在非均匀介质中沿直线传播",
        "C. 实像由光线延长线相交形成",
        "D. 垂轴放大率β<0时成正立像"
      ],
      "answer": "A",
      "explanation": "眼睛调节能力：眼睛远点与近点倒数之差为调节能力，单位屈光度(D)。明视距离为250mm。",
      "chapter": "几何光学",
      "topic": "眼睛与视觉",
      "difficulty": "medium",
      "knowledge_tags": [
        "knowledge_063"
      ],
      "wrong_hint": {
        "type": "概念错误",
        "message": "请回顾'眼睛调节能力'的相关内容。"
      }
    },
    {
      "id": "choice_121",
      "question": "关于'眼睛缺陷与校正'，以下说法正确的是？",
      "options": [
        "A. 近视眼：远点在眼前有限距离，用负透镜校正；远视眼：远点在眼后，用正透镜校正；散光：用水晶面不对称校正。",
        "B. 孔径光阑决定视场大小",
        "C. 角放大率γ与孔径角有关",
        "D. 反射角大于入射角"
      ],
      "answer": "A",
      "explanation": "眼睛缺陷与校正：近视眼：远点在眼前有限距离，用负透镜校正；远视眼：远点在眼后，用正透镜校正；散光：用水晶面不对称校正。",
      "chapter": "几何光学",
      "topic": "眼睛与视觉",
      "difficulty": "medium",
      "knowledge_tags": [
        "knowledge_064"
      ],
      "wrong_hint": {
        "type": "概念错误",
        "message": "请回顾'眼睛缺陷与校正'的相关内容。"
      }
    },
    {
      "id": "choice_122",
      "question": "关于'眼睛景深'，以下说法正确的是？",
      "options": [
        "A. 眼睛调节在某一对准平面时，不必调节能同时看清前后某距离的物体的范围。",
        "B. 球差是轴外像差",
        "C. 折射角小于入射角（光密到光疏）",
        "D. 反射角大于入射角"
      ],
      "answer": "A",
      "explanation": "眼睛景深：眼睛调节在某一对准平面时，不必调节能同时看清前后某距离的物体的范围。",
      "chapter": "几何光学",
      "topic": "眼睛与视觉",
      "difficulty": "medium",
      "knowledge_tags": [
        "knowledge_066"
      ],
      "wrong_hint": {
        "type": "概念错误",
        "message": "请回顾'眼睛景深'的相关内容。"
      }
    },
    {
      "id": "choice_123",
      "question": "关于'立体视觉'，以下说法正确的是？",
      "options": [
        "A. 双眼观察产生立体视觉。不同距离物体对应不同视差角。体视锐度约10''，经训练可达5''。立体视觉半径约1200m。",
        "B. 球差是轴外像差",
        "C. 共轴系统各面曲率中心不在同一直线上",
        "D. 近轴区只适用于大孔径光线"
      ],
      "answer": "A",
      "explanation": "立体视觉：双眼观察产生立体视觉。不同距离物体对应不同视差角。体视锐度约10''，经训练可达5''。立体视觉半径约1200m。",
      "chapter": "几何光学",
      "topic": "眼睛与视觉",
      "difficulty": "medium",
      "knowledge_tags": [
        "knowledge_067"
      ],
      "wrong_hint": {
        "type": "概念错误",
        "message": "请回顾'立体视觉'的相关内容。"
      }
    },
    {
      "id": "choice_124",
      "question": "关于'放大镜'，以下说法正确的是？",
      "options": [
        "A. 放大镜视觉放大率取决于观察条件。眼睛调焦在无限远时Γ=250/f'；调焦在明视距离时Γ=250/f'+1。",
        "B. 色差仅由反射引起",
        "C. 近轴区只适用于大孔径光线",
        "D. 角放大率γ与孔径角有关"
      ],
      "answer": "A",
      "explanation": "放大镜：放大镜视觉放大率取决于观察条件。眼睛调焦在无限远时Γ=250/f'；调焦在明视距离时Γ=250/f'+1。",
      "chapter": "几何光学",
      "topic": "放大镜与显微镜",
      "difficulty": "medium",
      "knowledge_tags": [
        "knowledge_068"
      ],
      "wrong_hint": {
        "type": "概念错误",
        "message": "请回顾'放大镜'的相关内容。"
      }
    },
    {
      "id": "choice_125",
      "question": "关于'显微镜光束限制'，以下说法正确的是？",
      "options": [
        "A. 生物显微镜中物镜框是孔径光阑，分划板是视场光阑，目镜常是渐晕光阑。测量显微镜用物方远心光路。",
        "B. 视场光阑决定入射光能量",
        "C. 虚物由实际光线会聚形成",
        "D. 孔径光阑决定视场大小"
      ],
      "answer": "A",
      "explanation": "显微镜光束限制：生物显微镜中物镜框是孔径光阑，分划板是视场光阑，目镜常是渐晕光阑。测量显微镜用物方远心光路。",
      "chapter": "几何光学",
      "topic": "放大镜与显微镜",
      "difficulty": "medium",
      "knowledge_tags": [
        "knowledge_069"
      ],
      "wrong_hint": {
        "type": "概念错误",
        "message": "请回顾'显微镜光束限制'的相关内容。"
      }
    },
    {
      "id": "choice_126",
      "question": "关于'显微镜分辨率'，以下说法正确的是？",
      "options": [
        "A. 瑞利判断：σ=0.61λ/NA；道威判断：σ=0.5λ/NA。分辨率与数值孔径成正比，与波长成反比。",
        "B. 垂轴放大率β<0时成正立像",
        "C. 像散是轴上像差",
        "D. 视场光阑决定入射光能量"
      ],
      "answer": "A",
      "explanation": "显微镜分辨率：瑞利判断：σ=0.61λ/NA；道威判断：σ=0.5λ/NA。分辨率与数值孔径成正比，与波长成反比。",
      "chapter": "几何光学",
      "topic": "放大镜与显微镜",
      "difficulty": "medium",
      "knowledge_tags": [
        "knowledge_070"
      ],
      "wrong_hint": {
        "type": "概念错误",
        "message": "请回顾'显微镜分辨率'的相关内容。"
      }
    },
    {
      "id": "choice_127",
      "question": "关于'显微镜有效放大率'，以下说法正确的是？",
      "options": [
        "A. 500NA≤Γ≤1000NA。低于500NA时细节无法分辨；高于1000NA时为无效放大。",
        "B. 虚物由实际光线会聚形成",
        "C. 反射角大于入射角",
        "D. 视场光阑决定入射光能量"
      ],
      "answer": "A",
      "explanation": "显微镜有效放大率：500NA≤Γ≤1000NA。低于500NA时细节无法分辨；高于1000NA时为无效放大。",
      "chapter": "几何光学",
      "topic": "放大镜与显微镜",
      "difficulty": "medium",
      "knowledge_tags": [
        "knowledge_071"
      ],
      "wrong_hint": {
        "type": "概念错误",
        "message": "请回顾'显微镜有效放大率'的相关内容。"
      }
    },
    {
      "id": "choice_128",
      "question": "关于'望远镜结构'，以下说法正确的是？",
      "options": [
        "A. 开普勒望远镜：物镜和目镜均为正，中间成实像，可加分划板。伽利略望远镜：物镜正、目镜负，中间不成实像。",
        "B. 近轴区只适用于大孔径光线",
        "C. 共轴系统各面曲率中心不在同一直线上",
        "D. 实像由光线延长线相交形成"
      ],
      "answer": "A",
      "explanation": "望远镜结构：开普勒望远镜：物镜和目镜均为正，中间成实像，可加分划板。伽利略望远镜：物镜正、目镜负，中间不成实像。",
      "chapter": "几何光学",
      "topic": "望远镜",
      "difficulty": "medium",
      "knowledge_tags": [
        "knowledge_072"
      ],
      "wrong_hint": {
        "type": "概念错误",
        "message": "请回顾'望远镜结构'的相关内容。"
      }
    },
    {
      "id": "choice_129",
      "question": "关于'望远镜分辨率与放大率关系'，以下说法正确的是？",
      "options": [
        "A. φ=1.22λ/D，Γ=D/2.3为有效放大率。放大率满足φΓ=60''为眼极限分辨角。",
        "B. 近轴区只适用于大孔径光线",
        "C. 实像由光线延长线相交形成",
        "D. 孔径光阑决定视场大小"
      ],
      "answer": "A",
      "explanation": "望远镜分辨率与放大率关系：φ=1.22λ/D，Γ=D/2.3为有效放大率。放大率满足φΓ=60''为眼极限分辨角。",
      "chapter": "几何光学",
      "topic": "望远镜",
      "difficulty": "medium",
      "knowledge_tags": [
        "knowledge_073"
      ],
      "wrong_hint": {
        "type": "概念错误",
        "message": "请回顾'望远镜分辨率与放大率关系'的相关内容。"
      }
    },
    {
      "id": "choice_130",
      "question": "关于'目镜参数'，以下说法正确的是？",
      "options": [
        "A. 目镜主要参数：放大率、视场角、镜目距、工作距离。镜目距与焦距之比为相对镜目距。视度调节±5屈光度。",
        "B. 共轴系统各面曲率中心不在同一直线上",
        "C. 虚物由实际光线会聚形成",
        "D. 视场光阑决定入射光能量"
      ],
      "answer": "A",
      "explanation": "目镜参数：目镜主要参数：放大率、视场角、镜目距、工作距离。镜目距与焦距之比为相对镜目距。视度调节±5屈光度。",
      "chapter": "几何光学",
      "topic": "望远镜",
      "difficulty": "medium",
      "knowledge_tags": [
        "knowledge_074"
      ],
      "wrong_hint": {
        "type": "概念错误",
        "message": "请回顾'目镜参数'的相关内容。"
      }
    },
    {
      "id": "choice_131",
      "question": "关于'摄影系统特性'，以下说法正确的是？",
      "options": [
        "A. 摄影物镜光学特性：焦距、相对孔径(D/f')、视场角。焦距决定成像大小，相对孔径决定照度和分辨率，视场角决定成像范围。",
        "B. 孔径光阑决定视场大小",
        "C. 反射角大于入射角",
        "D. 近轴区只适用于大孔径光线"
      ],
      "answer": "A",
      "explanation": "摄影系统特性：摄影物镜光学特性：焦距、相对孔径(D/f')、视场角。焦距决定成像大小，相对孔径决定照度和分辨率，视场角决定成像范围。",
      "chapter": "几何光学",
      "topic": "摄影系统",
      "difficulty": "medium",
      "knowledge_tags": [
        "knowledge_075"
      ],
      "wrong_hint": {
        "type": "概念错误",
        "message": "请回顾'摄影系统特性'的相关内容。"
      }
    },
    {
      "id": "choice_132",
      "question": "关于'摄影分辨率'，以下说法正确的是？",
      "options": [
        "A. 经验公式：N=1475/F。分辨率与光圈数成反比。大视场物镜像面照度按cos⁴ω'衰减。",
        "B. 球差是轴外像差",
        "C. 近轴区只适用于大孔径光线",
        "D. 虚物由实际光线会聚形成"
      ],
      "answer": "A",
      "explanation": "摄影分辨率：经验公式：N=1475/F。分辨率与光圈数成反比。大视场物镜像面照度按cos⁴ω'衰减。",
      "chapter": "几何光学",
      "topic": "摄影系统",
      "difficulty": "medium",
      "knowledge_tags": [
        "knowledge_076"
      ],
      "wrong_hint": {
        "type": "概念错误",
        "message": "请回顾'摄影分辨率'的相关内容。"
      }
    },
    {
      "id": "choice_133",
      "question": "关于'变焦物镜'，以下说法正确的是？",
      "options": [
        "A. 变倍比M=f_max/f_min。变焦过程中保持像面位置和焦距连续变化。",
        "B. 角放大率γ与孔径角有关",
        "C. 虚物由实际光线会聚形成",
        "D. 垂轴放大率β<0时成正立像"
      ],
      "answer": "A",
      "explanation": "变焦物镜：变倍比M=f_max/f_min。变焦过程中保持像面位置和焦距连续变化。",
      "chapter": "几何光学",
      "topic": "摄影系统",
      "difficulty": "medium",
      "knowledge_tags": [
        "knowledge_077"
      ],
      "wrong_hint": {
        "type": "概念错误",
        "message": "请回顾'变焦物镜'的相关内容。"
      }
    },
    {
      "id": "choice_134",
      "question": "关于'投影系统'，以下说法正确的是？",
      "options": [
        "A. 基本参数：垂轴放大率、焦距、视场角、相对孔径。照明系统拉赫不变量应大于投影系统拉赫不变量。",
        "B. 孔径光阑决定视场大小",
        "C. 实像由光线延长线相交形成",
        "D. 像散是轴上像差"
      ],
      "answer": "A",
      "explanation": "投影系统：基本参数：垂轴放大率、焦距、视场角、相对孔径。照明系统拉赫不变量应大于投影系统拉赫不变量。",
      "chapter": "几何光学",
      "topic": "摄影系统",
      "difficulty": "medium",
      "knowledge_tags": [
        "knowledge_078"
      ],
      "wrong_hint": {
        "type": "概念错误",
        "message": "请回顾'投影系统'的相关内容。"
      }
    },
    {
      "id": "choice_135",
      "question": "关于'照明方式'，以下说法正确的是？",
      "options": [
        "A. 临界照明：光源直接照明，不均匀。柯勒照明：光源成像在入瞳处，均匀照明。",
        "B. 实像由光线延长线相交形成",
        "C. 角放大率γ与孔径角有关",
        "D. 共轴系统各面曲率中心不在同一直线上"
      ],
      "answer": "A",
      "explanation": "照明方式：临界照明：光源直接照明，不均匀。柯勒照明：光源成像在入瞳处，均匀照明。",
      "chapter": "几何光学",
      "topic": "摄影系统",
      "difficulty": "medium",
      "knowledge_tags": [
        "knowledge_079"
      ],
      "wrong_hint": {
        "type": "概念错误",
        "message": "请回顾'照明方式'的相关内容。"
      }
    },
    {
      "id": "choice_136",
      "question": "关于'麦克斯韦方程组'，以下说法正确的是？",
      "options": [
        "A. 积分形式：高斯电定律、高斯磁定律、法拉第定律、安培-麦克斯韦定律。微分形式描述空间各点场的关系。",
        "B. 圆孔衍射艾里斑角半径与孔径成正比",
        "C. 不同波长的光在真空中传播速度不同",
        "D. 夫琅禾费衍射是近场衍射"
      ],
      "answer": "A",
      "explanation": "麦克斯韦方程组：积分形式：高斯电定律、高斯磁定律、法拉第定律、安培-麦克斯韦定律。微分形式描述空间各点场的关系。",
      "chapter": "物理光学",
      "topic": "电磁理论",
      "difficulty": "medium",
      "knowledge_tags": [
        "knowledge_080"
      ],
      "wrong_hint": {
        "type": "概念错误",
        "message": "请回顾'麦克斯韦方程组'的相关内容。"
      }
    },
    {
      "id": "choice_137",
      "question": "关于'物质方程'，以下说法正确的是？",
      "options": [
        "A. 各向同性介质中D=εE，B=μH，j=σE。线性介质极化强度与电场成正比。透明介质ρ=0,j=0。",
        "B. 等厚干涉条纹是同心圆环",
        "C. 圆孔衍射艾里斑角半径与孔径成正比",
        "D. 等倾干涉条纹是平行直线"
      ],
      "answer": "A",
      "explanation": "物质方程：各向同性介质中D=εE，B=μH，j=σE。线性介质极化强度与电场成正比。透明介质ρ=0,j=0。",
      "chapter": "物理光学",
      "topic": "电磁理论",
      "difficulty": "medium",
      "knowledge_tags": [
        "knowledge_081"
      ],
      "wrong_hint": {
        "type": "概念错误",
        "message": "请回顾'物质方程'的相关内容。"
      }
    },
    {
      "id": "choice_138",
      "question": "关于'电磁波速度'，以下说法正确的是？",
      "options": [
        "A. 真空中c=1/√(ε₀μ₀)，介质中v=c/n。折射率n=√(εᵣμᵣ)≈√εᵣ。",
        "B. 单缝衍射中央亮纹宽度与缝宽成正比",
        "C. 可见光波长范围约为100nm-1000nm",
        "D. 等厚干涉条纹是同心圆环"
      ],
      "answer": "A",
      "explanation": "电磁波速度：真空中c=1/√(ε₀μ₀)，介质中v=c/n。折射率n=√(εᵣμᵣ)≈√εᵣ。",
      "chapter": "物理光学",
      "topic": "电磁理论",
      "difficulty": "medium",
      "knowledge_tags": [
        "knowledge_082"
      ],
      "wrong_hint": {
        "type": "概念错误",
        "message": "请回顾'电磁波速度'的相关内容。"
      }
    },
    {
      "id": "choice_139",
      "question": "关于'均匀介质与各向同性'，以下说法正确的是？",
      "options": [
        "A. 均匀介质：折射率不随空间位置变化。各向同性介质：同一点沿各方向性质相同。无色散介质：极化特性与频率无关。",
        "B. 等厚干涉条纹是同心圆环",
        "C. 不同波长的光在真空中传播速度不同",
        "D. o光不遵守折射定律"
      ],
      "answer": "A",
      "explanation": "均匀介质与各向同性：均匀介质：折射率不随空间位置变化。各向同性介质：同一点沿各方向性质相同。无色散介质：极化特性与频率无关。",
      "chapter": "物理光学",
      "topic": "电磁理论",
      "difficulty": "medium",
      "knowledge_tags": [
        "knowledge_083"
      ],
      "wrong_hint": {
        "type": "概念错误",
        "message": "请回顾'均匀介质与各向同性'的相关内容。"
      }
    },
    {
      "id": "choice_140",
      "question": "关于'平面简谐波'，以下说法正确的是？",
      "options": [
        "A. E(z,t)=Acos(kz-ωt+φ₀)。空间周期λ，时间周期T，频率ν=1/T，角频率ω=2πν。波数k=2π/λ=ω/v。",
        "B. 相干光只需要频率相同",
        "C. 等厚干涉条纹是同心圆环",
        "D. 单缝衍射中央亮纹宽度与缝宽成正比"
      ],
      "answer": "A",
      "explanation": "平面简谐波：E(z,t)=Acos(kz-ωt+φ₀)。空间周期λ，时间周期T，频率ν=1/T，角频率ω=2πν。波数k=2π/λ=ω/v。",
      "chapter": "物理光学",
      "topic": "波动方程",
      "difficulty": "medium",
      "knowledge_tags": [
        "knowledge_084"
      ],
      "wrong_hint": {
        "type": "概念错误",
        "message": "请回顾'平面简谐波'的相关内容。"
      }
    },
    {
      "id": "choice_141",
      "question": "关于'三维平面波'，以下说法正确的是？",
      "options": [
        "A. 沿任意方向传播时E=Acos(k·r-ωt)。波矢k的大小为2π/λ，方向为传播方向。",
        "B. 二分之一波片不改变线偏振光方向",
        "C. 四分之一波片产生π相位差",
        "D. 光栅色散与级次无关"
      ],
      "answer": "A",
      "explanation": "三维平面波：沿任意方向传播时E=Acos(k·r-ωt)。波矢k的大小为2π/λ，方向为传播方向。",
      "chapter": "物理光学",
      "topic": "波动方程",
      "difficulty": "medium",
      "knowledge_tags": [
        "knowledge_085"
      ],
      "wrong_hint": {
        "type": "概念错误",
        "message": "请回顾'三维平面波'的相关内容。"
      }
    },
    {
      "id": "choice_142",
      "question": "关于'复数表示'，以下说法正确的是？",
      "options": [
        "A. E=Ae^(i(k·r-ωt))=Ae^(ik·r)·e^(-iωt)。空间相位因子e^(ik·r)和时间相位因子e^(-iωt)分离。复振幅Ã=Ae^(ik·",
        "B. 四分之一波片产生π相位差",
        "C. 等倾干涉条纹是平行直线",
        "D. 夫琅禾费衍射是近场衍射"
      ],
      "answer": "A",
      "explanation": "复数表示：E=Ae^(i(k·r-ωt))=Ae^(ik·r)·e^(-iωt)。空间相位因子e^(ik·r)和时间相位因子e^(-iωt)分离。复振幅Ã=Ae^(ik·r)。",
      "chapter": "物理光学",
      "topic": "波动方程",
      "difficulty": "medium",
      "knowledge_tags": [
        "knowledge_086"
      ],
      "wrong_hint": {
        "type": "概念错误",
        "message": "请回顾'复数表示'的相关内容。"
      }
    },
    {
      "id": "choice_143",
      "question": "关于'球面波与柱面波'，以下说法正确的是？",
      "options": [
        "A. 球面波：E=(A/r)e^(±i(kr-ωt))，发散取+，会聚取-。柱面波振幅按1/√r衰减。",
        "B. 等厚干涉条纹是同心圆环",
        "C. 光在介质中的速度大于真空中的速度",
        "D. 圆孔衍射艾里斑角半径与孔径成正比"
      ],
      "answer": "A",
      "explanation": "球面波与柱面波：球面波：E=(A/r)e^(±i(kr-ωt))，发散取+，会聚取-。柱面波振幅按1/√r衰减。",
      "chapter": "物理光学",
      "topic": "波动方程",
      "difficulty": "medium",
      "knowledge_tags": [
        "knowledge_087"
      ],
      "wrong_hint": {
        "type": "概念错误",
        "message": "请回顾'球面波与柱面波'的相关内容。"
      }
    },
    {
      "id": "choice_144",
      "question": "关于'光的干涉条件'，以下说法正确的是？",
      "options": [
        "A. 相干条件：频率相同、振动方向相同、相位差恒定。普通光源为扩展光源，各点独立发光。",
        "B. 夫琅禾费衍射是近场衍射",
        "C. o光不遵守折射定律",
        "D. 四分之一波片产生π相位差"
      ],
      "answer": "A",
      "explanation": "光的干涉条件：相干条件：频率相同、振动方向相同、相位差恒定。普通光源为扩展光源，各点独立发光。",
      "chapter": "物理光学",
      "topic": "干涉",
      "difficulty": "medium",
      "knowledge_tags": [
        "knowledge_088"
      ],
      "wrong_hint": {
        "type": "概念错误",
        "message": "请回顾'光的干涉条件'的相关内容。"
      }
    },
    {
      "id": "choice_145",
      "question": "关于'干涉光强公式'，以下说法正确的是？",
      "options": [
        "A. I=I₁+I₂+2√(I₁I₂)cosδ。当δ=2mπ时Imax=(√I₁+√I₂)²；当δ=(2m+1)π时Imin=(√I₁-√I₂)²。",
        "B. 可见光波长范围约为100nm-1000nm",
        "C. 等倾干涉条纹是平行直线",
        "D. o光不遵守折射定律"
      ],
      "answer": "A",
      "explanation": "干涉光强公式：I=I₁+I₂+2√(I₁I₂)cosδ。当δ=2mπ时Imax=(√I₁+√I₂)²；当δ=(2m+1)π时Imin=(√I₁-√I₂)²。",
      "chapter": "物理光学",
      "topic": "干涉",
      "difficulty": "medium",
      "knowledge_tags": [
        "knowledge_089"
      ],
      "wrong_hint": {
        "type": "概念错误",
        "message": "请回顾'干涉光强公式'的相关内容。"
      }
    },
    {
      "id": "choice_146",
      "question": "关于'条纹可见度'，以下说法正确的是？",
      "options": [
        "A. K=(Imax-Imin)/(Imax+Imin)。K=1时可见度最好；K=0时无干涉。影响因素：振幅比、光源大小、非单色性。",
        "B. 相干光只需要频率相同",
        "C. 等厚干涉条纹是同心圆环",
        "D. 可见光波长范围约为100nm-1000nm"
      ],
      "answer": "A",
      "explanation": "条纹可见度：K=(Imax-Imin)/(Imax+Imin)。K=1时可见度最好；K=0时无干涉。影响因素：振幅比、光源大小、非单色性。",
      "chapter": "物理光学",
      "topic": "干涉",
      "difficulty": "medium",
      "knowledge_tags": [
        "knowledge_090"
      ],
      "wrong_hint": {
        "type": "概念错误",
        "message": "请回顾'条纹可见度'的相关内容。"
      }
    },
    {
      "id": "choice_147",
      "question": "关于'光源临界宽度'，以下说法正确的是？",
      "options": [
        "A. 光源宽度b<λR/d时可见度较好。R为光源到双缝距离，d为双缝间距。",
        "B. 半波损失发生在光密到光疏反射时",
        "C. o光不遵守折射定律",
        "D. 单缝衍射中央亮纹宽度与缝宽成正比"
      ],
      "answer": "A",
      "explanation": "光源临界宽度：光源宽度b<λR/d时可见度较好。R为光源到双缝距离，d为双缝间距。",
      "chapter": "物理光学",
      "topic": "干涉",
      "difficulty": "medium",
      "knowledge_tags": [
        "knowledge_091"
      ],
      "wrong_hint": {
        "type": "概念错误",
        "message": "请回顾'光源临界宽度'的相关内容。"
      }
    },
    {
      "id": "choice_148",
      "question": "关于'相干长度与相干范围'，以下说法正确的是？",
      "options": [
        "A. 相干长度L_c=λ²/Δλ，是能够发生干涉的最大光程差。相干长度越长，干涉性越好。",
        "B. 等倾干涉条纹是平行直线",
        "C. 光在介质中的速度大于真空中的速度",
        "D. 四分之一波片产生π相位差"
      ],
      "answer": "A",
      "explanation": "相干长度与相干范围：相干长度L_c=λ²/Δλ，是能够发生干涉的最大光程差。相干长度越长，干涉性越好。",
      "chapter": "物理光学",
      "topic": "干涉",
      "difficulty": "medium",
      "knowledge_tags": [
        "knowledge_092"
      ],
      "wrong_hint": {
        "type": "概念错误",
        "message": "请回顾'相干长度与相干范围'的相关内容。"
      }
    },
    {
      "id": "choice_149",
      "question": "关于'杨氏双缝干涉'，以下说法正确的是？",
      "options": [
        "A. 条纹间距Δx=λD/d。光源移动时条纹移动方向与光源移动方向相反。若光源在S₁S₂垂直平分线上，中央亮纹在中心。",
        "B. 相干光只需要频率相同",
        "C. 光栅色散与级次无关",
        "D. 光在介质中的速度大于真空中的速度"
      ],
      "answer": "A",
      "explanation": "杨氏双缝干涉：条纹间距Δx=λD/d。光源移动时条纹移动方向与光源移动方向相反。若光源在S₁S₂垂直平分线上，中央亮纹在中心。",
      "chapter": "物理光学",
      "topic": "干涉",
      "difficulty": "medium",
      "knowledge_tags": [
        "knowledge_093"
      ],
      "wrong_hint": {
        "type": "概念错误",
        "message": "请回顾'杨氏双缝干涉'的相关内容。"
      }
    },
    {
      "id": "choice_150",
      "question": "关于'菲涅尔双棱镜与劳埃德镜'，以下说法正确的是？",
      "options": [
        "A. 双棱镜将一束光分成两束相干光。劳埃德镜在反射时产生半波损失（π相位突变），使中央变为暗纹。",
        "B. 夫琅禾费衍射是近场衍射",
        "C. 不同波长的光在真空中传播速度不同",
        "D. 单缝衍射中央亮纹宽度与缝宽成正比"
      ],
      "answer": "A",
      "explanation": "菲涅尔双棱镜与劳埃德镜：双棱镜将一束光分成两束相干光。劳埃德镜在反射时产生半波损失（π相位突变），使中央变为暗纹。",
      "chapter": "物理光学",
      "topic": "干涉",
      "difficulty": "medium",
      "knowledge_tags": [
        "knowledge_094"
      ],
      "wrong_hint": {
        "type": "概念错误",
        "message": "请回顾'菲涅尔双棱镜与劳埃德镜'的相关内容。"
      }
    },
    {
      "id": "choice_151",
      "question": "关于'半波损失'，以下说法正确的是？",
      "options": [
        "A. 光从光疏介质射向光密介质反射时产生π相位突变，附加λ/2光程差。两束光都反射或都不反射时不影响相位差。",
        "B. 单缝衍射中央亮纹宽度与缝宽成正比",
        "C. 圆孔衍射艾里斑角半径与孔径成正比",
        "D. 二分之一波片不改变线偏振光方向"
      ],
      "answer": "A",
      "explanation": "半波损失：光从光疏介质射向光密介质反射时产生π相位突变，附加λ/2光程差。两束光都反射或都不反射时不影响相位差。",
      "chapter": "物理光学",
      "topic": "干涉",
      "difficulty": "medium",
      "knowledge_tags": [
        "knowledge_095"
      ],
      "wrong_hint": {
        "type": "概念错误",
        "message": "请回顾'半波损失'的相关内容。"
      }
    },
    {
      "id": "choice_152",
      "question": "关于'等厚干涉'，以下说法正确的是？",
      "options": [
        "A. 固定入射角，光程差仅由厚度决定。空气劈尖：Δx=λ/(2nα)。牛顿环：r_m²=mRλ。",
        "B. 夫琅禾费衍射是近场衍射",
        "C. 不同波长的光在真空中传播速度不同",
        "D. 四分之一波片产生π相位差"
      ],
      "answer": "A",
      "explanation": "等厚干涉：固定入射角，光程差仅由厚度决定。空气劈尖：Δx=λ/(2nα)。牛顿环：r_m²=mRλ。",
      "chapter": "物理光学",
      "topic": "干涉",
      "difficulty": "medium",
      "knowledge_tags": [
        "knowledge_096"
      ],
      "wrong_hint": {
        "type": "概念错误",
        "message": "请回顾'等厚干涉'的相关内容。"
      }
    },
    {
      "id": "choice_153",
      "question": "关于'等倾干涉'，以下说法正确的是？",
      "options": [
        "A. 固定厚度，光程差仅由入射角决定。同一入射角对应同一级干涉环，为同心圆。级次内高外低。",
        "B. 二分之一波片不改变线偏振光方向",
        "C. 单缝衍射中央亮纹宽度与缝宽成正比",
        "D. 光栅色散与级次无关"
      ],
      "answer": "A",
      "explanation": "等倾干涉：固定厚度，光程差仅由入射角决定。同一入射角对应同一级干涉环，为同心圆。级次内高外低。",
      "chapter": "物理光学",
      "topic": "干涉",
      "difficulty": "medium",
      "knowledge_tags": [
        "knowledge_097"
      ],
      "wrong_hint": {
        "type": "概念错误",
        "message": "请回顾'等倾干涉'的相关内容。"
      }
    },
    {
      "id": "choice_154",
      "question": "关于'薄膜干涉应用'，以下说法正确的是？",
      "options": [
        "A. 增透膜：2nh=(m+1/2)λ。增反膜：2nh=mλ。反射率取决于折射率匹配和膜层设计。",
        "B. 不同波长的光在真空中传播速度不同",
        "C. 光栅色散与级次无关",
        "D. 相干光只需要频率相同"
      ],
      "answer": "A",
      "explanation": "薄膜干涉应用：增透膜：2nh=(m+1/2)λ。增反膜：2nh=mλ。反射率取决于折射率匹配和膜层设计。",
      "chapter": "物理光学",
      "topic": "干涉",
      "difficulty": "medium",
      "knowledge_tags": [
        "knowledge_098"
      ],
      "wrong_hint": {
        "type": "概念错误",
        "message": "请回顾'薄膜干涉应用'的相关内容。"
      }
    },
    {
      "id": "choice_155",
      "question": "关于'迈克尔逊干涉仪'，以下说法正确的是？",
      "options": [
        "A. 光程差ΔL=2dcosi₁。改变d时条纹吞吐。补偿板消除色散。可用于测量波长、长度和折射率。",
        "B. 光栅色散与级次无关",
        "C. o光不遵守折射定律",
        "D. 四分之一波片产生π相位差"
      ],
      "answer": "A",
      "explanation": "迈克尔逊干涉仪：光程差ΔL=2dcosi₁。改变d时条纹吞吐。补偿板消除色散。可用于测量波长、长度和折射率。",
      "chapter": "物理光学",
      "topic": "干涉",
      "difficulty": "medium",
      "knowledge_tags": [
        "knowledge_099"
      ],
      "wrong_hint": {
        "type": "概念错误",
        "message": "请回顾'迈克尔逊干涉仪'的相关内容。"
      }
    },
    {
      "id": "choice_156",
      "question": "关于'法布里-珀罗干涉仪'，以下说法正确的是？",
      "options": [
        "A. 多光束干涉，高反射率时条纹极锐。色分辨本领R_λ=mN·π√R/(1-R)。应用于光谱分析和激光谐振腔。",
        "B. 单缝衍射中央亮纹宽度与缝宽成正比",
        "C. o光不遵守折射定律",
        "D. 不同波长的光在真空中传播速度不同"
      ],
      "answer": "A",
      "explanation": "法布里-珀罗干涉仪：多光束干涉，高反射率时条纹极锐。色分辨本领R_λ=mN·π√R/(1-R)。应用于光谱分析和激光谐振腔。",
      "chapter": "物理光学",
      "topic": "干涉",
      "difficulty": "medium",
      "knowledge_tags": [
        "knowledge_100"
      ],
      "wrong_hint": {
        "type": "概念错误",
        "message": "请回顾'法布里-珀罗干涉仪'的相关内容。"
      }
    },
    {
      "id": "choice_157",
      "question": "关于'菲涅尔衍射与夫琅禾费衍射'，以下说法正确的是？",
      "options": [
        "A. 菲涅尔衍射：光源或屏幕到障碍物距离有限。夫琅禾费衍射：光源和屏幕都在无限远（或透镜实现）。",
        "B. 半波损失发生在光密到光疏反射时",
        "C. 四分之一波片产生π相位差",
        "D. 夫琅禾费衍射是近场衍射"
      ],
      "answer": "A",
      "explanation": "菲涅尔衍射与夫琅禾费衍射：菲涅尔衍射：光源或屏幕到障碍物距离有限。夫琅禾费衍射：光源和屏幕都在无限远（或透镜实现）。",
      "chapter": "物理光学",
      "topic": "衍射",
      "difficulty": "medium",
      "knowledge_tags": [
        "knowledge_101"
      ],
      "wrong_hint": {
        "type": "概念错误",
        "message": "请回顾'菲涅尔衍射与夫琅禾费衍射'的相关内容。"
      }
    },
    {
      "id": "choice_158",
      "question": "关于'菲涅尔半波带法'，以下说法正确的是？",
      "options": [
        "A. 将波面分成若干个半波带，相邻半波带到考察点的光程差为λ/2，相位差为π。奇数个半波带亮，偶数个暗。",
        "B. 可见光波长范围约为100nm-1000nm",
        "C. 四分之一波片产生π相位差",
        "D. 单缝衍射中央亮纹宽度与缝宽成正比"
      ],
      "answer": "A",
      "explanation": "菲涅尔半波带法：将波面分成若干个半波带，相邻半波带到考察点的光程差为λ/2，相位差为π。奇数个半波带亮，偶数个暗。",
      "chapter": "物理光学",
      "topic": "衍射",
      "difficulty": "medium",
      "knowledge_tags": [
        "knowledge_102"
      ],
      "wrong_hint": {
        "type": "概念错误",
        "message": "请回顾'菲涅尔半波带法'的相关内容。"
      }
    },
    {
      "id": "choice_159",
      "question": "关于'菲涅尔波带片'，以下说法正确的是？",
      "options": [
        "A. 遮挡偶数或奇数半波带，使剩余半波带同相叠加，起会聚作用。焦距f=ρ_m²/(mλ)。",
        "B. 等厚干涉条纹是同心圆环",
        "C. 自然光是非偏振光",
        "D. 四分之一波片产生π相位差"
      ],
      "answer": "A",
      "explanation": "菲涅尔波带片：遮挡偶数或奇数半波带，使剩余半波带同相叠加，起会聚作用。焦距f=ρ_m²/(mλ)。",
      "chapter": "物理光学",
      "topic": "衍射",
      "difficulty": "medium",
      "knowledge_tags": [
        "knowledge_103"
      ],
      "wrong_hint": {
        "type": "概念错误",
        "message": "请回顾'菲涅尔波带片'的相关内容。"
      }
    },
    {
      "id": "choice_160",
      "question": "关于'单缝夫琅禾费衍射'，以下说法正确的是？",
      "options": [
        "A. 光强I=I₀(sinα/α)²，α=(πa sinθ)/λ。暗纹条件：a sinθ=mλ。中央亮纹宽度约为其他亮纹的两倍。",
        "B. 可见光波长范围约为100nm-1000nm",
        "C. o光不遵守折射定律",
        "D. 自然光是非偏振光"
      ],
      "answer": "A",
      "explanation": "单缝夫琅禾费衍射：光强I=I₀(sinα/α)²，α=(πa sinθ)/λ。暗纹条件：a sinθ=mλ。中央亮纹宽度约为其他亮纹的两倍。",
      "chapter": "物理光学",
      "topic": "衍射",
      "difficulty": "medium",
      "knowledge_tags": [
        "knowledge_104"
      ],
      "wrong_hint": {
        "type": "概念错误",
        "message": "请回顾'单缝夫琅禾费衍射'的相关内容。"
      }
    },
    {
      "id": "choice_161",
      "question": "关于'矩孔衍射'，以下说法正确的是？",
      "options": [
        "A. 矩孔衍射为两个垂直方向单缝衍射的乘积。光强分布由两个sinc函数相乘得到。",
        "B. o光不遵守折射定律",
        "C. 相干光只需要频率相同",
        "D. 单缝衍射中央亮纹宽度与缝宽成正比"
      ],
      "answer": "A",
      "explanation": "矩孔衍射：矩孔衍射为两个垂直方向单缝衍射的乘积。光强分布由两个sinc函数相乘得到。",
      "chapter": "物理光学",
      "topic": "衍射",
      "difficulty": "medium",
      "knowledge_tags": [
        "knowledge_105"
      ],
      "wrong_hint": {
        "type": "概念错误",
        "message": "请回顾'矩孔衍射'的相关内容。"
      }
    },
    {
      "id": "choice_162",
      "question": "关于'圆孔衍射与艾里斑'，以下说法正确的是？",
      "options": [
        "A. 圆孔衍射第一暗环角半径θ=1.22λ/D。艾里斑能量约占总能量的84%。瑞利判据以此作为分辨极限。",
        "B. 相干光只需要频率相同",
        "C. 等倾干涉条纹是平行直线",
        "D. 二分之一波片不改变线偏振光方向"
      ],
      "answer": "A",
      "explanation": "圆孔衍射与艾里斑：圆孔衍射第一暗环角半径θ=1.22λ/D。艾里斑能量约占总能量的84%。瑞利判据以此作为分辨极限。",
      "chapter": "物理光学",
      "topic": "衍射",
      "difficulty": "medium",
      "knowledge_tags": [
        "knowledge_106"
      ],
      "wrong_hint": {
        "type": "概念错误",
        "message": "请回顾'圆孔衍射与艾里斑'的相关内容。"
      }
    },
    {
      "id": "choice_163",
      "question": "关于'多缝衍射'，以下说法正确的是？",
      "options": [
        "A. 光强=单缝衍射因子×多缝干涉因子。主极大位置由光栅方程决定，次极大数目=N-2，极小数目=N-1。",
        "B. 圆孔衍射艾里斑角半径与孔径成正比",
        "C. 光栅色散与级次无关",
        "D. 二分之一波片不改变线偏振光方向"
      ],
      "answer": "A",
      "explanation": "多缝衍射：光强=单缝衍射因子×多缝干涉因子。主极大位置由光栅方程决定，次极大数目=N-2，极小数目=N-1。",
      "chapter": "物理光学",
      "topic": "衍射",
      "difficulty": "medium",
      "knowledge_tags": [
        "knowledge_107"
      ],
      "wrong_hint": {
        "type": "概念错误",
        "message": "请回顾'多缝衍射'的相关内容。"
      }
    },
    {
      "id": "choice_164",
      "question": "关于'缺级现象'，以下说法正确的是？",
      "options": [
        "A. 当干涉主极大与衍射极小重合时出现缺级。缺级条件：d/a=k，第k,2k,3k...级缺级。",
        "B. 光在介质中的速度大于真空中的速度",
        "C. 自然光是非偏振光",
        "D. 光栅色散与级次无关"
      ],
      "answer": "A",
      "explanation": "缺级现象：当干涉主极大与衍射极小重合时出现缺级。缺级条件：d/a=k，第k,2k,3k...级缺级。",
      "chapter": "物理光学",
      "topic": "衍射",
      "difficulty": "medium",
      "knowledge_tags": [
        "knowledge_108"
      ],
      "wrong_hint": {
        "type": "概念错误",
        "message": "请回顾'缺级现象'的相关内容。"
      }
    },
    {
      "id": "choice_165",
      "question": "关于'光栅方程'，以下说法正确的是？",
      "options": [
        "A. d(sinθ_i+sinθ_m)=mλ。正入射时简化为d sinθ=mλ。光栅方程决定各级主极大的位置。",
        "B. 夫琅禾费衍射是近场衍射",
        "C. 光栅色散与级次无关",
        "D. 相干光只需要频率相同"
      ],
      "answer": "A",
      "explanation": "光栅方程：d(sinθ_i+sinθ_m)=mλ。正入射时简化为d sinθ=mλ。光栅方程决定各级主极大的位置。",
      "chapter": "物理光学",
      "topic": "衍射",
      "difficulty": "medium",
      "knowledge_tags": [
        "knowledge_109"
      ],
      "wrong_hint": {
        "type": "概念错误",
        "message": "请回顾'光栅方程'的相关内容。"
      }
    },
    {
      "id": "choice_166",
      "question": "关于'光栅色散'，以下说法正确的是？",
      "options": [
        "A. 角色散D_θ=m/(d cosθ)，线色散D_l=mf/(d cosθ)。级次越高，色散越大。0级主极大无法分光。",
        "B. 圆孔衍射艾里斑角半径与孔径成正比",
        "C. 可见光波长范围约为100nm-1000nm",
        "D. 四分之一波片产生π相位差"
      ],
      "answer": "A",
      "explanation": "光栅色散：角色散D_θ=m/(d cosθ)，线色散D_l=mf/(d cosθ)。级次越高，色散越大。0级主极大无法分光。",
      "chapter": "物理光学",
      "topic": "衍射",
      "difficulty": "medium",
      "knowledge_tags": [
        "knowledge_110"
      ],
      "wrong_hint": {
        "type": "概念错误",
        "message": "请回顾'光栅色散'的相关内容。"
      }
    },
    {
      "id": "choice_167",
      "question": "关于'光栅分辨本领'，以下说法正确的是？",
      "options": [
        "A. R=λ/Δλ=mN。与衍射级次和总缝数成正比。N增大时主极大更锐，分辨能力更强。",
        "B. 四分之一波片产生π相位差",
        "C. 夫琅禾费衍射是近场衍射",
        "D. 可见光波长范围约为100nm-1000nm"
      ],
      "answer": "A",
      "explanation": "光栅分辨本领：R=λ/Δλ=mN。与衍射级次和总缝数成正比。N增大时主极大更锐，分辨能力更强。",
      "chapter": "物理光学",
      "topic": "衍射",
      "difficulty": "medium",
      "knowledge_tags": [
        "knowledge_111"
      ],
      "wrong_hint": {
        "type": "概念错误",
        "message": "请回顾'光栅分辨本领'的相关内容。"
      }
    },
    {
      "id": "choice_168",
      "question": "关于'光栅自由光谱范围'，以下说法正确的是？",
      "options": [
        "A. Δλ=λ/m。第m级光谱不与相邻级次重叠的最大波长范围。级次越高，自由光谱范围越小。",
        "B. 圆孔衍射艾里斑角半径与孔径成正比",
        "C. 二分之一波片不改变线偏振光方向",
        "D. 相干光只需要频率相同"
      ],
      "answer": "A",
      "explanation": "光栅自由光谱范围：Δλ=λ/m。第m级光谱不与相邻级次重叠的最大波长范围。级次越高，自由光谱范围越小。",
      "chapter": "物理光学",
      "topic": "衍射",
      "difficulty": "medium",
      "knowledge_tags": [
        "knowledge_112"
      ],
      "wrong_hint": {
        "type": "概念错误",
        "message": "请回顾'光栅自由光谱范围'的相关内容。"
      }
    },
    {
      "id": "choice_169",
      "question": "关于'闪耀光栅'，以下说法正确的是？",
      "options": [
        "A. 将干涉零级与衍射中央极大分开，使能量集中在某一级光谱上。闪耀条件：2d sinθ_b=mλ_b。",
        "B. 可见光波长范围约为100nm-1000nm",
        "C. 相干光只需要频率相同",
        "D. 自然光是非偏振光"
      ],
      "answer": "A",
      "explanation": "闪耀光栅：将干涉零级与衍射中央极大分开，使能量集中在某一级光谱上。闪耀条件：2d sinθ_b=mλ_b。",
      "chapter": "物理光学",
      "topic": "衍射",
      "difficulty": "medium",
      "knowledge_tags": [
        "knowledge_113"
      ],
      "wrong_hint": {
        "type": "概念错误",
        "message": "请回顾'闪耀光栅'的相关内容。"
      }
    },
    {
      "id": "choice_170",
      "question": "关于'晶体衍射'，以下说法正确的是？",
      "options": [
        "A. X射线在晶体中衍射满足布拉格公式2d sinθ=mλ。d为晶面间距，θ为布拉格角。",
        "B. 夫琅禾费衍射是近场衍射",
        "C. 自然光是非偏振光",
        "D. 四分之一波片产生π相位差"
      ],
      "answer": "A",
      "explanation": "晶体衍射：X射线在晶体中衍射满足布拉格公式2d sinθ=mλ。d为晶面间距，θ为布拉格角。",
      "chapter": "物理光学",
      "topic": "衍射",
      "difficulty": "medium",
      "knowledge_tags": [
        "knowledge_114"
      ],
      "wrong_hint": {
        "type": "概念错误",
        "message": "请回顾'晶体衍射'的相关内容。"
      }
    },
    {
      "id": "choice_171",
      "question": "关于'光的偏振态'，以下说法正确的是？",
      "options": [
        "A. 五种偏振态：线偏振光、圆偏振光、椭圆偏振光、自然光（非偏振光）、部分偏振光。",
        "B. 二分之一波片不改变线偏振光方向",
        "C. 圆孔衍射艾里斑角半径与孔径成正比",
        "D. 不同波长的光在真空中传播速度不同"
      ],
      "answer": "A",
      "explanation": "光的偏振态：五种偏振态：线偏振光、圆偏振光、椭圆偏振光、自然光（非偏振光）、部分偏振光。",
      "chapter": "物理光学",
      "topic": "偏振",
      "difficulty": "medium",
      "knowledge_tags": [
        "knowledge_115"
      ],
      "wrong_hint": {
        "type": "概念错误",
        "message": "请回顾'光的偏振态'的相关内容。"
      }
    },
    {
      "id": "choice_172",
      "question": "关于'线偏振光与圆偏振光'，以下说法正确的是？",
      "options": [
        "A. 线偏振光可分解为两个同相或反相的垂直振动。圆偏振光可分解为两个振幅相等、相位差±π/2的垂直振动。",
        "B. 二分之一波片不改变线偏振光方向",
        "C. 等倾干涉条纹是平行直线",
        "D. 夫琅禾费衍射是近场衍射"
      ],
      "answer": "A",
      "explanation": "线偏振光与圆偏振光：线偏振光可分解为两个同相或反相的垂直振动。圆偏振光可分解为两个振幅相等、相位差±π/2的垂直振动。",
      "chapter": "物理光学",
      "topic": "偏振",
      "difficulty": "medium",
      "knowledge_tags": [
        "knowledge_116"
      ],
      "wrong_hint": {
        "type": "概念错误",
        "message": "请回顾'线偏振光与圆偏振光'的相关内容。"
      }
    },
    {
      "id": "choice_173",
      "question": "关于'偏振片'，以下说法正确的是？",
      "options": [
        "A. 利用二向色性产生线偏振光，可作起偏器和检偏器。马吕斯定律：I=I₀cos²θ。",
        "B. 夫琅禾费衍射是近场衍射",
        "C. 不同波长的光在真空中传播速度不同",
        "D. 半波损失发生在光密到光疏反射时"
      ],
      "answer": "A",
      "explanation": "偏振片：利用二向色性产生线偏振光，可作起偏器和检偏器。马吕斯定律：I=I₀cos²θ。",
      "chapter": "物理光学",
      "topic": "偏振",
      "difficulty": "medium",
      "knowledge_tags": [
        "knowledge_117"
      ],
      "wrong_hint": {
        "type": "概念错误",
        "message": "请回顾'偏振片'的相关内容。"
      }
    },
    {
      "id": "choice_174",
      "question": "关于'五种偏振光通过偏振片'，以下说法正确的是？",
      "options": [
        "A. 线偏振光：光强按cos²θ变化，有消光。圆偏振光：光强减半，不变化。椭圆偏振光：有极大极小，无消光。自然光：光强减半。部分偏振光：有极大极小，无消光。",
        "B. 不同波长的光在真空中传播速度不同",
        "C. 等倾干涉条纹是平行直线",
        "D. 半波损失发生在光密到光疏反射时"
      ],
      "answer": "A",
      "explanation": "五种偏振光通过偏振片：线偏振光：光强按cos²θ变化，有消光。圆偏振光：光强减半，不变化。椭圆偏振光：有极大极小，无消光。自然光：光强减半。部分偏振光：有极大极小，无消光。",
      "chapter": "物理光学",
      "topic": "偏振",
      "difficulty": "medium",
      "knowledge_tags": [
        "knowledge_118"
      ],
      "wrong_hint": {
        "type": "概念错误",
        "message": "请回顾'五种偏振光通过偏振片'的相关内容。"
      }
    },
    {
      "id": "choice_175",
      "question": "关于'偏振度'，以下说法正确的是？",
      "options": [
        "A. P=(Imax-Imin)/(Imax+Imin)。线偏振光P=1；圆偏振光和自然光P=0；椭圆偏振光和部分偏振光0<P<1。",
        "B. 光在介质中的速度大于真空中的速度",
        "C. 半波损失发生在光密到光疏反射时",
        "D. 自然光是非偏振光"
      ],
      "answer": "A",
      "explanation": "偏振度：P=(Imax-Imin)/(Imax+Imin)。线偏振光P=1；圆偏振光和自然光P=0；椭圆偏振光和部分偏振光0<P<1。",
      "chapter": "物理光学",
      "topic": "偏振",
      "difficulty": "medium",
      "knowledge_tags": [
        "knowledge_119"
      ],
      "wrong_hint": {
        "type": "概念错误",
        "message": "请回顾'偏振度'的相关内容。"
      }
    },
    {
      "id": "choice_176",
      "question": "关于'双折射'，以下说法正确的是？",
      "options": [
        "A. 各向异性晶体中，光分解为o光和e光。o光遵守折射定律，e光一般不遵守。光轴方向无双折射。",
        "B. o光不遵守折射定律",
        "C. 二分之一波片不改变线偏振光方向",
        "D. 光栅色散与级次无关"
      ],
      "answer": "A",
      "explanation": "双折射：各向异性晶体中，光分解为o光和e光。o光遵守折射定律，e光一般不遵守。光轴方向无双折射。",
      "chapter": "物理光学",
      "topic": "偏振",
      "difficulty": "medium",
      "knowledge_tags": [
        "knowledge_120"
      ],
      "wrong_hint": {
        "type": "概念错误",
        "message": "请回顾'双折射'的相关内容。"
      }
    },
    {
      "id": "choice_177",
      "question": "关于'o光与e光'，以下说法正确的是？",
      "options": [
        "A. o光：振动方向垂直于主平面，折射率n_o恒定。e光：振动方向平行于主平面，折射率随方向变化。",
        "B. 二分之一波片不改变线偏振光方向",
        "C. 夫琅禾费衍射是近场衍射",
        "D. 四分之一波片产生π相位差"
      ],
      "answer": "A",
      "explanation": "o光与e光：o光：振动方向垂直于主平面，折射率n_o恒定。e光：振动方向平行于主平面，折射率随方向变化。",
      "chapter": "物理光学",
      "topic": "偏振",
      "difficulty": "medium",
      "knowledge_tags": [
        "knowledge_121"
      ],
      "wrong_hint": {
        "type": "概念错误",
        "message": "请回顾'o光与e光'的相关内容。"
      }
    },
    {
      "id": "choice_178",
      "question": "关于'正晶体与负晶体'，以下说法正确的是？",
      "options": [
        "A. 正晶体（如石英）：n_e>n_o，e光传播速度小于o光。负晶体（如方解石）：n_e<n_o，e光传播速度大于o光。",
        "B. 光栅色散与级次无关",
        "C. o光不遵守折射定律",
        "D. 二分之一波片不改变线偏振光方向"
      ],
      "answer": "A",
      "explanation": "正晶体与负晶体：正晶体（如石英）：n_e>n_o，e光传播速度小于o光。负晶体（如方解石）：n_e<n_o，e光传播速度大于o光。",
      "chapter": "物理光学",
      "topic": "偏振",
      "difficulty": "medium",
      "knowledge_tags": [
        "knowledge_122"
      ],
      "wrong_hint": {
        "type": "概念错误",
        "message": "请回顾'正晶体与负晶体'的相关内容。"
      }
    },
    {
      "id": "choice_179",
      "question": "关于'双折射棱镜'，以下说法正确的是？",
      "options": [
        "A. 罗雄棱镜、沃拉斯顿棱镜、尼科尔棱镜等。利用双折射分离o光和e光，或产生偏振光。",
        "B. 可见光波长范围约为100nm-1000nm",
        "C. 单缝衍射中央亮纹宽度与缝宽成正比",
        "D. 二分之一波片不改变线偏振光方向"
      ],
      "answer": "A",
      "explanation": "双折射棱镜：罗雄棱镜、沃拉斯顿棱镜、尼科尔棱镜等。利用双折射分离o光和e光，或产生偏振光。",
      "chapter": "物理光学",
      "topic": "偏振",
      "difficulty": "medium",
      "knowledge_tags": [
        "knowledge_123"
      ],
      "wrong_hint": {
        "type": "概念错误",
        "message": "请回顾'双折射棱镜'的相关内容。"
      }
    },
    {
      "id": "choice_180",
      "question": "关于'四分之一波片'，以下说法正确的是？",
      "options": [
        "A. 产生π/2相位差。线偏振光入射时，若振动方向与光轴成45°则出射圆偏振光；否则出射椭圆偏振光。圆偏振光入射时出射线偏振光。",
        "B. 光栅色散与级次无关",
        "C. 等厚干涉条纹是同心圆环",
        "D. 不同波长的光在真空中传播速度不同"
      ],
      "answer": "A",
      "explanation": "四分之一波片：产生π/2相位差。线偏振光入射时，若振动方向与光轴成45°则出射圆偏振光；否则出射椭圆偏振光。圆偏振光入射时出射线偏振光。",
      "chapter": "物理光学",
      "topic": "偏振",
      "difficulty": "medium",
      "knowledge_tags": [
        "knowledge_125"
      ],
      "wrong_hint": {
        "type": "概念错误",
        "message": "请回顾'四分之一波片'的相关内容。"
      }
    },
    {
      "id": "choice_181",
      "question": "关于'二分之一波片'，以下说法正确的是？",
      "options": [
        "A. 产生π相位差。线偏振光入射时出射仍为线偏振光，但振动方向关于光轴对称。圆偏振光入射时旋向反转。",
        "B. 相干光只需要频率相同",
        "C. 光栅色散与级次无关",
        "D. 不同波长的光在真空中传播速度不同"
      ],
      "answer": "A",
      "explanation": "二分之一波片：产生π相位差。线偏振光入射时出射仍为线偏振光，但振动方向关于光轴对称。圆偏振光入射时旋向反转。",
      "chapter": "物理光学",
      "topic": "偏振",
      "difficulty": "medium",
      "knowledge_tags": [
        "knowledge_126"
      ],
      "wrong_hint": {
        "type": "概念错误",
        "message": "请回顾'二分之一波片'的相关内容。"
      }
    },
    {
      "id": "choice_182",
      "question": "关于'偏振光检验'，以下说法正确的是？",
      "options": [
        "A. 用偏振片和波片组合可检验五种偏振光。关键是区分圆偏振光与自然光、椭圆偏振光与部分偏振光。",
        "B. 等倾干涉条纹是平行直线",
        "C. 二分之一波片不改变线偏振光方向",
        "D. 等厚干涉条纹是同心圆环"
      ],
      "answer": "A",
      "explanation": "偏振光检验：用偏振片和波片组合可检验五种偏振光。关键是区分圆偏振光与自然光、椭圆偏振光与部分偏振光。",
      "chapter": "物理光学",
      "topic": "偏振",
      "difficulty": "medium",
      "knowledge_tags": [
        "knowledge_128"
      ],
      "wrong_hint": {
        "type": "概念错误",
        "message": "请回顾'偏振光检验'的相关内容。"
      }
    },
    {
      "id": "choice_183",
      "question": "关于'偏振光干涉'，以下说法正确的是？",
      "options": [
        "A. 线偏振光通过波片后产生相位差，再通过检偏器产生干涉。波片厚度不均时可形成明暗相间的条纹。",
        "B. 光栅色散与级次无关",
        "C. 等厚干涉条纹是同心圆环",
        "D. 自然光是非偏振光"
      ],
      "answer": "A",
      "explanation": "偏振光干涉：线偏振光通过波片后产生相位差，再通过检偏器产生干涉。波片厚度不均时可形成明暗相间的条纹。",
      "chapter": "物理光学",
      "topic": "偏振",
      "difficulty": "medium",
      "knowledge_tags": [
        "knowledge_129"
      ],
      "wrong_hint": {
        "type": "概念错误",
        "message": "请回顾'偏振光干涉'的相关内容。"
      }
    },
    {
      "id": "choice_184",
      "question": "关于'色偏振'，以下说法正确的是？",
      "options": [
        "A. 多种波长的光入射时，转动偏振片屏上颜色变化，这是偏振光干涉的结果。",
        "B. 圆孔衍射艾里斑角半径与孔径成正比",
        "C. 光栅色散与级次无关",
        "D. o光不遵守折射定律"
      ],
      "answer": "A",
      "explanation": "色偏振：多种波长的光入射时，转动偏振片屏上颜色变化，这是偏振光干涉的结果。",
      "chapter": "物理光学",
      "topic": "偏振",
      "difficulty": "medium",
      "knowledge_tags": [
        "knowledge_130"
      ],
      "wrong_hint": {
        "type": "概念错误",
        "message": "请回顾'色偏振'的相关内容。"
      }
    },
    {
      "id": "choice_185",
      "question": "关于'法拉第效应'，以下说法正确的是？",
      "options": [
        "A. 磁致旋光：磁场使介质产生旋光性，旋转角θ=VBl。旋转方向与磁场方向有关，与光传播方向无关。可用于光隔离器。",
        "B. 不同波长的光在真空中传播速度不同",
        "C. 夫琅禾费衍射是近场衍射",
        "D. 四分之一波片产生π相位差"
      ],
      "answer": "A",
      "explanation": "法拉第效应：磁致旋光：磁场使介质产生旋光性，旋转角θ=VBl。旋转方向与磁场方向有关，与光传播方向无关。可用于光隔离器。",
      "chapter": "物理光学",
      "topic": "偏振",
      "difficulty": "medium",
      "knowledge_tags": [
        "knowledge_132"
      ],
      "wrong_hint": {
        "type": "概念错误",
        "message": "请回顾'法拉第效应'的相关内容。"
      }
    },
    {
      "id": "choice_186",
      "question": "关于'克尔效应与泡克尔斯效应'，以下说法正确的是？",
      "options": [
        "A. 克尔效应：电场导致各向同性介质产生双折射，Δn∝E²。泡克尔斯效应：某些晶体在外电场下产生双折射，Δn∝E。",
        "B. o光不遵守折射定律",
        "C. 二分之一波片不改变线偏振光方向",
        "D. 不同波长的光在真空中传播速度不同"
      ],
      "answer": "A",
      "explanation": "克尔效应与泡克尔斯效应：克尔效应：电场导致各向同性介质产生双折射，Δn∝E²。泡克尔斯效应：某些晶体在外电场下产生双折射，Δn∝E。",
      "chapter": "物理光学",
      "topic": "偏振",
      "difficulty": "medium",
      "knowledge_tags": [
        "knowledge_133"
      ],
      "wrong_hint": {
        "type": "概念错误",
        "message": "请回顾'克尔效应与泡克尔斯效应'的相关内容。"
      }
    },
    {
      "id": "choice_187",
      "question": "关于'菲涅尔公式'，以下说法正确的是？",
      "options": [
        "A. s波和p波在界面反射和折射的振幅比。rs=-sin(θ₁-θ₂)/sin(θ₁+θ₂)，rp=tan(θ₁-θ₂)/tan(θ₁+θ₂)。",
        "B. 等倾干涉条纹是平行直线",
        "C. 二分之一波片不改变线偏振光方向",
        "D. 圆孔衍射艾里斑角半径与孔径成正比"
      ],
      "answer": "A",
      "explanation": "菲涅尔公式：s波和p波在界面反射和折射的振幅比。rs=-sin(θ₁-θ₂)/sin(θ₁+θ₂)，rp=tan(θ₁-θ₂)/tan(θ₁+θ₂)。",
      "chapter": "物理光学",
      "topic": "偏振",
      "difficulty": "medium",
      "knowledge_tags": [
        "knowledge_134"
      ],
      "wrong_hint": {
        "type": "概念错误",
        "message": "请回顾'菲涅尔公式'的相关内容。"
      }
    },
    {
      "id": "choice_188",
      "question": "关于'布儒斯特角'，以下说法正确的是？",
      "options": [
        "A. tanθ_B=n₂/n₁。入射角为布儒斯特角时，p波反射率为0，反射光为纯s波线偏振光。反射光与折射光垂直。",
        "B. 二分之一波片不改变线偏振光方向",
        "C. 单缝衍射中央亮纹宽度与缝宽成正比",
        "D. 等厚干涉条纹是同心圆环"
      ],
      "answer": "A",
      "explanation": "布儒斯特角：tanθ_B=n₂/n₁。入射角为布儒斯特角时，p波反射率为0，反射光为纯s波线偏振光。反射光与折射光垂直。",
      "chapter": "物理光学",
      "topic": "偏振",
      "difficulty": "medium",
      "knowledge_tags": [
        "knowledge_135"
      ],
      "wrong_hint": {
        "type": "概念错误",
        "message": "请回顾'布儒斯特角'的相关内容。"
      }
    },
    {
      "id": "choice_189",
      "question": "关于'半波损失分析'，以下说法正确的是？",
      "options": [
        "A. 正入射时：光疏到光密反射有π相位突变（半波损失）。掠入射时：s波和p波均有π相位突变。",
        "B. 等倾干涉条纹是平行直线",
        "C. 半波损失发生在光密到光疏反射时",
        "D. 光在介质中的速度大于真空中的速度"
      ],
      "answer": "A",
      "explanation": "半波损失分析：正入射时：光疏到光密反射有π相位突变（半波损失）。掠入射时：s波和p波均有π相位突变。",
      "chapter": "物理光学",
      "topic": "偏振",
      "difficulty": "medium",
      "knowledge_tags": [
        "knowledge_136"
      ],
      "wrong_hint": {
        "type": "概念错误",
        "message": "请回顾'半波损失分析'的相关内容。"
      }
    },
    {
      "id": "choice_190",
      "question": "关于'斯托克斯关系'，以下说法正确的是？",
      "options": [
        "A. r²+tt'=1。振幅反射率和透射率满足能量守恒和光路可逆关系。",
        "B. 不同波长的光在真空中传播速度不同",
        "C. 相干光只需要频率相同",
        "D. 自然光是非偏振光"
      ],
      "answer": "A",
      "explanation": "斯托克斯关系：r²+tt'=1。振幅反射率和透射率满足能量守恒和光路可逆关系。",
      "chapter": "物理光学",
      "topic": "偏振",
      "difficulty": "medium",
      "knowledge_tags": [
        "knowledge_137"
      ],
      "wrong_hint": {
        "type": "概念错误",
        "message": "请回顾'斯托克斯关系'的相关内容。"
      }
    },
    {
      "id": "choice_191",
      "question": "关于'垂直振动合成'，以下说法正确的是？",
      "options": [
        "A. 两个频率相同、方向垂直的简谐振动合成轨迹为椭圆。相位差δ=0或π时为直线；δ=±π/2且A₁=A₂时为圆。",
        "B. 四分之一波片产生π相位差",
        "C. 等倾干涉条纹是平行直线",
        "D. 单缝衍射中央亮纹宽度与缝宽成正比"
      ],
      "answer": "A",
      "explanation": "垂直振动合成：两个频率相同、方向垂直的简谐振动合成轨迹为椭圆。相位差δ=0或π时为直线；δ=±π/2且A₁=A₂时为圆。",
      "chapter": "物理光学",
      "topic": "偏振",
      "difficulty": "medium",
      "knowledge_tags": [
        "knowledge_138"
      ],
      "wrong_hint": {
        "type": "概念错误",
        "message": "请回顾'垂直振动合成'的相关内容。"
      }
    },
    {
      "id": "choice_192",
      "question": "关于'椭圆旋向'，以下说法正确的是？",
      "options": [
        "A. sinδ>0为右旋（迎着光看顺时针），sinδ<0为左旋。圆偏振光和椭圆偏振光都有确定的旋向。",
        "B. 夫琅禾费衍射是近场衍射",
        "C. 不同波长的光在真空中传播速度不同",
        "D. 圆孔衍射艾里斑角半径与孔径成正比"
      ],
      "answer": "A",
      "explanation": "椭圆旋向：sinδ>0为右旋（迎着光看顺时针），sinδ<0为左旋。圆偏振光和椭圆偏振光都有确定的旋向。",
      "chapter": "物理光学",
      "topic": "偏振",
      "difficulty": "medium",
      "knowledge_tags": [
        "knowledge_139"
      ],
      "wrong_hint": {
        "type": "概念错误",
        "message": "请回顾'椭圆旋向'的相关内容。"
      }
    },
    {
      "id": "choice_193",
      "question": "关于'倾斜入射矩孔衍射'，以下说法正确的是？",
      "options": [
        "A. 入射光倾斜时，衍射图样中心移至θ=θ₀方向，半角宽Δθ=λ/(a cosθ₀)。",
        "B. o光不遵守折射定律",
        "C. 自然光是非偏振光",
        "D. 圆孔衍射艾里斑角半径与孔径成正比"
      ],
      "answer": "A",
      "explanation": "倾斜入射矩孔衍射：入射光倾斜时，衍射图样中心移至θ=θ₀方向，半角宽Δθ=λ/(a cosθ₀)。",
      "chapter": "物理光学",
      "topic": "衍射",
      "difficulty": "medium",
      "knowledge_tags": [
        "knowledge_140"
      ],
      "wrong_hint": {
        "type": "概念错误",
        "message": "请回顾'倾斜入射矩孔衍射'的相关内容。"
      }
    },
    {
      "id": "choice_194",
      "question": "以下哪个公式表示折射定律？",
      "options": [
        "A. n \\sin I = n' \\sin I'",
        "B. W < \\frac{\\lambda}{4}",
        "C. NA = n \\sin u",
        "D. f' = -\\frac{f_1' f_2'}{\\Delta}"
      ],
      "answer": "A",
      "explanation": "折射定律的公式为：n \\sin I = n' \\sin I'",
      "chapter": "几何光学",
      "topic": "反射与折射",
      "difficulty": "medium",
      "knowledge_tags": [
        "formula_001"
      ],
      "wrong_hint": {
        "type": "公式记忆",
        "message": "折射定律的公式是n \\sin I = n' \\sin I'，请重点记忆。"
      }
    },
    {
      "id": "choice_195",
      "question": "以下哪个公式表示反射定律？",
      "options": [
        "A. I = -I''",
        "B. \\Delta_2 = \\frac{P^2 \\varepsilon}{2a + P \\varepsilon}",
        "C. \\beta = \\beta_1 \\beta_2 \\cdots \\beta_k",
        "D. \\tan\\theta_B = \\frac{n_2}{n_1}"
      ],
      "answer": "A",
      "explanation": "反射定律的公式为：I = -I''",
      "chapter": "几何光学",
      "topic": "反射与折射",
      "difficulty": "medium",
      "knowledge_tags": [
        "formula_002"
      ],
      "wrong_hint": {
        "type": "公式记忆",
        "message": "反射定律的公式是I = -I''，请重点记忆。"
      }
    },
    {
      "id": "choice_196",
      "question": "以下哪个公式表示全反射临界角？",
      "options": [
        "A. \\sin I_m = \\frac{n'}{n}",
        "B. d = \\frac{\\lambda}{|n_o - n_e|}",
        "C. a\\sin\\theta = m\\lambda \\quad (m = \\pm 1, \\pm 2, \\ldots)",
        "D. l_{k+1} = l_k' - d_k"
      ],
      "answer": "A",
      "explanation": "全反射临界角的公式为：\\sin I_m = \\frac{n'}{n}",
      "chapter": "几何光学",
      "topic": "反射与折射",
      "difficulty": "medium",
      "knowledge_tags": [
        "formula_003"
      ],
      "wrong_hint": {
        "type": "公式记忆",
        "message": "全反射临界角的公式是\\sin I_m = \\frac{n'}{n}，请重点记忆。"
      }
    },
    {
      "id": "choice_197",
      "question": "以下哪个公式表示费马原理光程？",
      "options": [
        "A. S = nl = \\frac{cl}{v} = ct",
        "B. I = -I''",
        "C. \\theta = \\alpha l",
        "D. 2nh = \\left(m + \\frac{1}{2}\\right)\\lambda"
      ],
      "answer": "A",
      "explanation": "费马原理光程的公式为：S = nl = \\frac{cl}{v} = ct",
      "chapter": "几何光学",
      "topic": "费马原理",
      "difficulty": "medium",
      "knowledge_tags": [
        "formula_004"
      ],
      "wrong_hint": {
        "type": "公式记忆",
        "message": "费马原理光程的公式是S = nl = \\frac{cl}{v} = ct，请重点记忆。"
      }
    },
    {
      "id": "choice_198",
      "question": "以下哪个公式表示球面折射物像位置关系？",
      "options": [
        "A. \\frac{n'}{l'} - \\frac{n}{l} = \\frac{n' - n}{r}",
        "B. r_m = \\sqrt{mR\\lambda}",
        "C. \\Delta = d - f_1' + f_2",
        "D. I = I_0 \\left(\\frac{\\sin\\alpha}{\\alpha}\\right)^2 \\left(\\frac{\\sin\\beta}{\\beta}\\right)^2"
      ],
      "answer": "A",
      "explanation": "球面折射物像位置关系的公式为：\\frac{n'}{l'} - \\frac{n}{l} = \\frac{n' - n}{r}",
      "chapter": "几何光学",
      "topic": "近轴光学",
      "difficulty": "medium",
      "knowledge_tags": [
        "formula_005"
      ],
      "wrong_hint": {
        "type": "公式记忆",
        "message": "球面折射物像位置关系的公式是\\frac{n'}{l'} - \\frac{n}{l} = \\frac{n' - n}{r}，请重点记忆。"
      }
    },
    {
      "id": "choice_199",
      "question": "以下哪个公式表示垂轴放大率？",
      "options": [
        "A. \\beta = \\frac{y'}{y} = \\frac{n l'}{n' l}",
        "B. NA = n \\sin u",
        "C. \\delta L = L' - l'",
        "D. r_s = \\frac{n_1\\cos\\theta_1 - n_2\\cos\\theta_2}{n_1\\cos\\theta_1 + n_2\\cos\\theta_2} = -\\frac{\\sin(\\theta_1 - \\theta_2)}{\\sin(\\theta_1 + \\theta_2)}"
      ],
      "answer": "A",
      "explanation": "垂轴放大率的公式为：\\beta = \\frac{y'}{y} = \\frac{n l'}{n' l}",
      "chapter": "几何光学",
      "topic": "近轴光学",
      "difficulty": "medium",
      "knowledge_tags": [
        "formula_006"
      ],
      "wrong_hint": {
        "type": "公式记忆",
        "message": "垂轴放大率的公式是\\beta = \\frac{y'}{y} = \\frac{n l'}{n' l}，请重点记忆。"
      }
    },
    {
      "id": "choice_200",
      "question": "以下哪个公式表示轴向放大率？",
      "options": [
        "A. \\alpha = \\frac{dl'}{dl} = \\frac{n'}{n} \\beta^2",
        "B. a\\sin\\theta = m\\lambda \\quad (m = \\pm 1, \\pm 2, \\ldots)",
        "C. \\Delta L_{FC}' = L_F' - L_C'",
        "D. r_s = \\frac{n_1\\cos\\theta_1 - n_2\\cos\\theta_2}{n_1\\cos\\theta_1 + n_2\\cos\\theta_2} = -\\frac{\\sin(\\theta_1 - \\theta_2)}{\\sin(\\theta_1 + \\theta_2)}"
      ],
      "answer": "A",
      "explanation": "轴向放大率的公式为：\\alpha = \\frac{dl'}{dl} = \\frac{n'}{n} \\beta^2",
      "chapter": "几何光学",
      "topic": "近轴光学",
      "difficulty": "medium",
      "knowledge_tags": [
        "formula_007"
      ],
      "wrong_hint": {
        "type": "公式记忆",
        "message": "轴向放大率的公式是\\alpha = \\frac{dl'}{dl} = \\frac{n'}{n} \\beta^2，请重点记忆。"
      }
    },
    {
      "id": "choice_201",
      "question": "以下哪个公式表示角放大率？",
      "options": [
        "A. \\gamma = \\frac{u'}{u} = \\frac{n}{n' \\beta}",
        "B. \\beta = +1",
        "C. N = \\frac{1475}{F}",
        "D. \\delta L = L' - l'"
      ],
      "answer": "A",
      "explanation": "角放大率的公式为：\\gamma = \\frac{u'}{u} = \\frac{n}{n' \\beta}",
      "chapter": "几何光学",
      "topic": "近轴光学",
      "difficulty": "medium",
      "knowledge_tags": [
        "formula_008"
      ],
      "wrong_hint": {
        "type": "公式记忆",
        "message": "角放大率的公式是\\gamma = \\frac{u'}{u} = \\frac{n}{n' \\beta}，请重点记忆。"
      }
    },
    {
      "id": "choice_202",
      "question": "以下哪个公式表示拉格朗日-赫姆霍兹不变量？",
      "options": [
        "A. J = n u y = n' u' y'",
        "B. n = \\sqrt{\\varepsilon_r \\mu_r} \\approx \\sqrt{\\varepsilon_r}",
        "C. 500NA \\leq \\Gamma \\leq 1000NA",
        "D. \\alpha = \\frac{dl'}{dl} = \\frac{n'}{n} \\beta^2"
      ],
      "answer": "A",
      "explanation": "拉格朗日-赫姆霍兹不变量的公式为：J = n u y = n' u' y'",
      "chapter": "几何光学",
      "topic": "近轴光学",
      "difficulty": "medium",
      "knowledge_tags": [
        "formula_009"
      ],
      "wrong_hint": {
        "type": "公式记忆",
        "message": "拉格朗日-赫姆霍兹不变量的公式是J = n u y = n' u' y'，请重点记忆。"
      }
    },
    {
      "id": "choice_203",
      "question": "以下哪个公式表示阿贝不变量？",
      "options": [
        "A. Q = n'\\left(\\frac{1}{r} - \\frac{1}{l'}\\right) = n\\left(\\frac{1}{r} - \\frac{1}{l}\\right)",
        "B. \\gamma = +1",
        "C. I = I_0 \\cos^2\\theta",
        "D. r_m = \\sqrt{\\left(m + \\frac{1}{2}\\right)R\\lambda}"
      ],
      "answer": "A",
      "explanation": "阿贝不变量的公式为：Q = n'\\left(\\frac{1}{r} - \\frac{1}{l'}\\right) = n\\left(\\frac{1}{r} - \\frac{1}{l}\\right)",
      "chapter": "几何光学",
      "topic": "近轴光学",
      "difficulty": "medium",
      "knowledge_tags": [
        "formula_010"
      ],
      "wrong_hint": {
        "type": "公式记忆",
        "message": "阿贝不变量的公式是Q = n'\\left(\\frac{1}{r} - \\frac{1}{l'}\\right) = n\\left(\\frac{1}{r} - \\frac{1}{l}\\right)，请重点记忆。"
      }
    },
    {
      "id": "choice_204",
      "question": "以下哪个公式表示球面反射镜成像？",
      "options": [
        "A. \\frac{1}{l'} + \\frac{1}{l} = \\frac{2}{r}",
        "B. J = n u y = n' u' y'",
        "C. \\Gamma = -\\frac{f_{obj}'}{f_{eye}'} = \\frac{1}{\\beta}",
        "D. r_m = \\sqrt{\\left(m + \\frac{1}{2}\\right)R\\lambda}"
      ],
      "answer": "A",
      "explanation": "球面反射镜成像的公式为：\\frac{1}{l'} + \\frac{1}{l} = \\frac{2}{r}",
      "chapter": "几何光学",
      "topic": "近轴光学",
      "difficulty": "medium",
      "knowledge_tags": [
        "formula_011"
      ],
      "wrong_hint": {
        "type": "公式记忆",
        "message": "球面反射镜成像的公式是\\frac{1}{l'} + \\frac{1}{l} = \\frac{2}{r}，请重点记忆。"
      }
    },
    {
      "id": "choice_205",
      "question": "以下哪个公式表示共轴球面系统过渡公式？",
      "options": [
        "A. l_{k+1} = l_k' - d_k",
        "B. r_m = \\sqrt{mR\\lambda}",
        "C. \\Delta\\theta' = 2\\Delta\\theta",
        "D. K = \\frac{I_{max} - I_{min}}{I_{max} + I_{min}}"
      ],
      "answer": "A",
      "explanation": "共轴球面系统过渡公式的公式为：l_{k+1} = l_k' - d_k",
      "chapter": "几何光学",
      "topic": "近轴光学",
      "difficulty": "medium",
      "knowledge_tags": [
        "formula_012"
      ],
      "wrong_hint": {
        "type": "公式记忆",
        "message": "共轴球面系统过渡公式的公式是l_{k+1} = l_k' - d_k，请重点记忆。"
      }
    },
    {
      "id": "choice_206",
      "question": "以下哪个公式表示共轴系统总垂轴放大率？",
      "options": [
        "A. \\beta = \\beta_1 \\beta_2 \\cdots \\beta_k",
        "B. \\delta = I_1 + I_2' - \\alpha",
        "C. r_m = \\sqrt{\\left(m + \\frac{1}{2}\\right)R\\lambda}",
        "D. r_m = \\sqrt{mR\\lambda}"
      ],
      "answer": "A",
      "explanation": "共轴系统总垂轴放大率的公式为：\\beta = \\beta_1 \\beta_2 \\cdots \\beta_k",
      "chapter": "几何光学",
      "topic": "近轴光学",
      "difficulty": "medium",
      "knowledge_tags": [
        "formula_013"
      ],
      "wrong_hint": {
        "type": "公式记忆",
        "message": "共轴系统总垂轴放大率的公式是\\beta = \\beta_1 \\beta_2 \\cdots \\beta_k，请重点记忆。"
      }
    },
    {
      "id": "choice_207",
      "question": "以下哪个公式表示牛顿公式？",
      "options": [
        "A. x x' = f f'",
        "B. K = \\frac{D_{\\omega}}{D}",
        "C. \\sin\\frac{\\delta_m + \\alpha}{2} = n \\sin\\frac{\\alpha}{2}",
        "D. \\varepsilon = \\frac{0.006}{f_{eye}} \\times 206265''"
      ],
      "answer": "A",
      "explanation": "牛顿公式的公式为：x x' = f f'",
      "chapter": "几何光学",
      "topic": "理想光学系统",
      "difficulty": "medium",
      "knowledge_tags": [
        "formula_014"
      ],
      "wrong_hint": {
        "type": "公式记忆",
        "message": "牛顿公式的公式是x x' = f f'，请重点记忆。"
      }
    },
    {
      "id": "choice_208",
      "question": "以下哪个公式表示高斯公式？",
      "options": [
        "A. \\frac{1}{f'} = \\frac{1}{l'} - \\frac{1}{l}",
        "B. \\tan\\theta_B = \\frac{n_2}{n_1}",
        "C. \\Delta\\theta = \\frac{\\lambda}{a}",
        "D. d = \\frac{\\lambda}{|n_o - n_e|}"
      ],
      "answer": "A",
      "explanation": "高斯公式的公式为：\\frac{1}{f'} = \\frac{1}{l'} - \\frac{1}{l}",
      "chapter": "几何光学",
      "topic": "理想光学系统",
      "difficulty": "medium",
      "knowledge_tags": [
        "formula_015"
      ],
      "wrong_hint": {
        "type": "公式记忆",
        "message": "高斯公式的公式是\\frac{1}{f'} = \\frac{1}{l'} - \\frac{1}{l}，请重点记忆。"
      }
    },
    {
      "id": "choice_209",
      "question": "以下哪个公式表示理想光学系统垂轴放大率？",
      "options": [
        "A. \\beta = -\\frac{f}{x} = -\\frac{x'}{f'} = \\frac{n l'}{n' l}",
        "B. \\frac{x^2}{A_1^2} + \\frac{y^2}{A_2^2} - \\frac{2xy}{A_1 A_2}\\cos\\delta = \\sin^2\\delta",
        "C. \\Delta x = \\frac{\\lambda}{2n\\alpha}",
        "D. \\beta = 2\\alpha"
      ],
      "answer": "A",
      "explanation": "理想光学系统垂轴放大率的公式为：\\beta = -\\frac{f}{x} = -\\frac{x'}{f'} = \\frac{n l'}{n' l}",
      "chapter": "几何光学",
      "topic": "理想光学系统",
      "difficulty": "medium",
      "knowledge_tags": [
        "formula_016"
      ],
      "wrong_hint": {
        "type": "公式记忆",
        "message": "理想光学系统垂轴放大率的公式是\\beta = -\\frac{f}{x} = -\\frac{x'}{f'} = \\frac{n l'}{n' l}，请重点记忆。"
      }
    },
    {
      "id": "choice_210",
      "question": "以下哪个公式表示理想光学系统轴向放大率？",
      "options": [
        "A. \\alpha = \\frac{n'}{n} \\beta^2",
        "B. \\sin\\frac{\\delta_m + \\alpha}{2} = n \\sin\\frac{\\alpha}{2}",
        "C. \\Delta\\lambda = \\frac{\\lambda}{m}",
        "D. I = -I''"
      ],
      "answer": "A",
      "explanation": "理想光学系统轴向放大率的公式为：\\alpha = \\frac{n'}{n} \\beta^2",
      "chapter": "几何光学",
      "topic": "理想光学系统",
      "difficulty": "medium",
      "knowledge_tags": [
        "formula_017"
      ],
      "wrong_hint": {
        "type": "公式记忆",
        "message": "理想光学系统轴向放大率的公式是\\alpha = \\frac{n'}{n} \\beta^2，请重点记忆。"
      }
    },
    {
      "id": "choice_211",
      "question": "以下哪个公式表示理想光学系统角放大率？",
      "options": [
        "A. \\gamma = \\frac{\\tan U'}{\\tan U} = \\frac{n}{n' \\beta}",
        "B. \\frac{n'}{l'} - \\frac{n}{l} = \\frac{n' - n}{r}",
        "C. W = \\int n \\sin U \\cdot \\delta L \\, dU",
        "D. L_{max} = \\frac{b}{\\theta_{min}} \\approx 1200 \\, \\text{m}"
      ],
      "answer": "A",
      "explanation": "理想光学系统角放大率的公式为：\\gamma = \\frac{\\tan U'}{\\tan U} = \\frac{n}{n' \\beta}",
      "chapter": "几何光学",
      "topic": "理想光学系统",
      "difficulty": "medium",
      "knowledge_tags": [
        "formula_018"
      ],
      "wrong_hint": {
        "type": "公式记忆",
        "message": "理想光学系统角放大率的公式是\\gamma = \\frac{\\tan U'}{\\tan U} = \\frac{n}{n' \\beta}，请重点记忆。"
      }
    },
    {
      "id": "choice_212",
      "question": "以下哪个公式表示放大率关系？",
      "options": [
        "A. \\alpha \\gamma = \\beta",
        "B. d = \\frac{\\lambda}{|n_o - n_e|}",
        "C. \\Delta L = \\frac{L^2 \\theta}{b}",
        "D. \\Delta\\theta = \\frac{\\lambda}{a}"
      ],
      "answer": "A",
      "explanation": "放大率关系的公式为：\\alpha \\gamma = \\beta",
      "chapter": "几何光学",
      "topic": "理想光学系统",
      "difficulty": "medium",
      "knowledge_tags": [
        "formula_019"
      ],
      "wrong_hint": {
        "type": "公式记忆",
        "message": "放大率关系的公式是\\alpha \\gamma = \\beta，请重点记忆。"
      }
    },
    {
      "id": "choice_213",
      "question": "以下哪个公式表示理想光学系统拉赫公式？",
      "options": [
        "A. n y \\tan U = n' y' \\tan U'",
        "B. \\Gamma = \\beta_{obj} \\cdot \\Gamma_{eye} = \\frac{250\\Delta}{f_{obj}' f_{eye}'}",
        "C. \\Delta T = d \\sin I_1 \\left(1 - \\frac{\\cos I_1}{n \\cos I_2}\\right)",
        "D. r_m = \\sqrt{\\left(m + \\frac{1}{2}\\right)R\\lambda}"
      ],
      "answer": "A",
      "explanation": "理想光学系统拉赫公式的公式为：n y \\tan U = n' y' \\tan U'",
      "chapter": "几何光学",
      "topic": "理想光学系统",
      "difficulty": "medium",
      "knowledge_tags": [
        "formula_020"
      ],
      "wrong_hint": {
        "type": "公式记忆",
        "message": "理想光学系统拉赫公式的公式是n y \\tan U = n' y' \\tan U'，请重点记忆。"
      }
    },
    {
      "id": "choice_214",
      "question": "以下哪个公式表示两焦距关系？",
      "options": [
        "A. \\frac{f'}{f} = -\\frac{n'}{n}",
        "B. 2nh = \\left(m + \\frac{1}{2}\\right)\\lambda",
        "C. \\sin I_m = \\frac{n'}{n}",
        "D. \\Delta_2 = \\frac{P^2 \\varepsilon}{2a + P \\varepsilon}"
      ],
      "answer": "A",
      "explanation": "两焦距关系的公式为：\\frac{f'}{f} = -\\frac{n'}{n}",
      "chapter": "几何光学",
      "topic": "理想光学系统",
      "difficulty": "medium",
      "knowledge_tags": [
        "formula_021"
      ],
      "wrong_hint": {
        "type": "公式记忆",
        "message": "两焦距关系的公式是\\frac{f'}{f} = -\\frac{n'}{n}，请重点记忆。"
      }
    },
    {
      "id": "choice_215",
      "question": "以下哪个公式表示光学间隔？",
      "options": [
        "A. \\Delta = d - f_1' + f_2",
        "B. \\Delta x = \\frac{\\lambda}{2n\\alpha}",
        "C. \\Delta x = \\frac{\\lambda D}{d}",
        "D. I = I_0 \\cos^2\\theta"
      ],
      "answer": "A",
      "explanation": "光学间隔的公式为：\\Delta = d - f_1' + f_2",
      "chapter": "几何光学",
      "topic": "理想光学系统",
      "difficulty": "medium",
      "knowledge_tags": [
        "formula_022"
      ],
      "wrong_hint": {
        "type": "公式记忆",
        "message": "光学间隔的公式是\\Delta = d - f_1' + f_2，请重点记忆。"
      }
    },
    {
      "id": "choice_216",
      "question": "以下哪个公式表示组合系统焦距？",
      "options": [
        "A. f' = -\\frac{f_1' f_2'}{\\Delta}",
        "B. \\Delta = d - f_1' + f_2",
        "C. \\sigma = \\frac{0.61\\lambda}{NA}",
        "D. K = \\frac{D_{\\omega}}{D}"
      ],
      "answer": "A",
      "explanation": "组合系统焦距的公式为：f' = -\\frac{f_1' f_2'}{\\Delta}",
      "chapter": "几何光学",
      "topic": "理想光学系统",
      "difficulty": "medium",
      "knowledge_tags": [
        "formula_023"
      ],
      "wrong_hint": {
        "type": "公式记忆",
        "message": "组合系统焦距的公式是f' = -\\frac{f_1' f_2'}{\\Delta}，请重点记忆。"
      }
    },
    {
      "id": "choice_217",
      "question": "以下哪个公式表示光焦度？",
      "options": [
        "A. \\Phi = \\frac{1}{f'}",
        "B. \\varepsilon = \\frac{0.006}{f_{eye}} \\times 206265''",
        "C. d = \\frac{\\lambda}{2|n_o - n_e|}",
        "D. \\frac{1}{R} + \\frac{1}{b} = \\frac{m\\lambda}{\\rho_m^2} = \\frac{1}{f}"
      ],
      "answer": "A",
      "explanation": "光焦度的公式为：\\Phi = \\frac{1}{f'}",
      "chapter": "几何光学",
      "topic": "理想光学系统",
      "difficulty": "medium",
      "knowledge_tags": [
        "formula_024"
      ],
      "wrong_hint": {
        "type": "公式记忆",
        "message": "光焦度的公式是\\Phi = \\frac{1}{f'}，请重点记忆。"
      }
    },
    {
      "id": "choice_218",
      "question": "以下哪个公式表示密接薄透镜组光焦度？",
      "options": [
        "A. \\Phi = \\Phi_1 + \\Phi_2",
        "B. f' = -\\frac{f_1' f_2'}{\\Delta}",
        "C. \\Gamma = \\beta_{obj} \\cdot \\Gamma_{eye} = \\frac{250\\Delta}{f_{obj}' f_{eye}'}",
        "D. \\beta = +1"
      ],
      "answer": "A",
      "explanation": "密接薄透镜组光焦度的公式为：\\Phi = \\Phi_1 + \\Phi_2",
      "chapter": "几何光学",
      "topic": "理想光学系统",
      "difficulty": "medium",
      "knowledge_tags": [
        "formula_025"
      ],
      "wrong_hint": {
        "type": "公式记忆",
        "message": "密接薄透镜组光焦度的公式是\\Phi = \\Phi_1 + \\Phi_2，请重点记忆。"
      }
    },
    {
      "id": "choice_219",
      "question": "以下哪个公式表示节点角放大率？",
      "options": [
        "A. \\gamma = +1",
        "B. v = \\frac{1}{\\sqrt{\\varepsilon\\mu}} = \\frac{c}{\\sqrt{\\varepsilon_r \\mu_r}} = \\frac{c}{n}",
        "C. k = \\frac{2\\pi}{\\lambda} = \\frac{\\omega}{v}",
        "D. \\Gamma = -\\frac{f_{obj}'}{f_{eye}'} = \\frac{1}{\\beta}"
      ],
      "answer": "A",
      "explanation": "节点角放大率的公式为：\\gamma = +1",
      "chapter": "几何光学",
      "topic": "理想光学系统",
      "difficulty": "medium",
      "knowledge_tags": [
        "formula_026"
      ],
      "wrong_hint": {
        "type": "公式记忆",
        "message": "节点角放大率的公式是\\gamma = +1，请重点记忆。"
      }
    },
    {
      "id": "choice_220",
      "question": "以下哪个公式表示平面镜成像放大率？",
      "options": [
        "A. \\beta = +1",
        "B. \\varepsilon = \\frac{0.006}{f_{eye}} \\times 206265''",
        "C. \\Delta L = 2nh\\cos\\theta_2 + \\frac{\\lambda}{2}",
        "D. W_{FC} = W_F - W_C = \\sum (D - d) \\Delta n"
      ],
      "answer": "A",
      "explanation": "平面镜成像放大率的公式为：\\beta = +1",
      "chapter": "几何光学",
      "topic": "平面与平面系统",
      "difficulty": "medium",
      "knowledge_tags": [
        "formula_027"
      ],
      "wrong_hint": {
        "type": "公式记忆",
        "message": "平面镜成像放大率的公式是\\beta = +1，请重点记忆。"
      }
    },
    {
      "id": "choice_221",
      "question": "以下哪个公式表示平面镜旋转特性？",
      "options": [
        "A. \\Delta\\theta' = 2\\Delta\\theta",
        "B. K = \\frac{I_{max} - I_{min}}{I_{max} + I_{min}}",
        "C. \\sigma = \\frac{0.61\\lambda}{NA}",
        "D. 2d\\sin\\theta_b = m\\lambda_b"
      ],
      "answer": "A",
      "explanation": "平面镜旋转特性的公式为：\\Delta\\theta' = 2\\Delta\\theta",
      "chapter": "几何光学",
      "topic": "平面与平面系统",
      "difficulty": "medium",
      "knowledge_tags": [
        "formula_028"
      ],
      "wrong_hint": {
        "type": "公式记忆",
        "message": "平面镜旋转特性的公式是\\Delta\\theta' = 2\\Delta\\theta，请重点记忆。"
      }
    },
    {
      "id": "choice_222",
      "question": "以下哪个公式表示双平面镜出射角？",
      "options": [
        "A. \\beta = 2\\alpha",
        "B. \\delta T' = \\delta L' \\tan U'",
        "C. 2d\\sin\\theta_b = m\\lambda_b",
        "D. \\theta = 1.22 \\frac{\\lambda}{D}"
      ],
      "answer": "A",
      "explanation": "双平面镜出射角的公式为：\\beta = 2\\alpha",
      "chapter": "几何光学",
      "topic": "平面与平面系统",
      "difficulty": "medium",
      "knowledge_tags": [
        "formula_029"
      ],
      "wrong_hint": {
        "type": "公式记忆",
        "message": "双平面镜出射角的公式是\\beta = 2\\alpha，请重点记忆。"
      }
    },
    {
      "id": "choice_223",
      "question": "以下哪个公式表示平行平板侧向位移？",
      "options": [
        "A. \\Delta T = d \\sin I_1 \\left(1 - \\frac{\\cos I_1}{n \\cos I_2}\\right)",
        "B. \\delta = \\frac{2\\pi}{\\lambda} \\Delta L = k \\Delta L",
        "C. r_p = \\frac{n_2\\cos\\theta_1 - n_1\\cos\\theta_2}{n_2\\cos\\theta_1 + n_1\\cos\\theta_2} = \\frac{\\tan(\\theta_1 - \\theta_2)}{\\tan(\\theta_1 + \\theta_2)}",
        "D. Q = n'\\left(\\frac{1}{r} - \\frac{1}{l'}\\right) = n\\left(\\frac{1}{r} - \\frac{1}{l}\\right)"
      ],
      "answer": "A",
      "explanation": "平行平板侧向位移的公式为：\\Delta T = d \\sin I_1 \\left(1 - \\frac{\\cos I_1}{n \\cos I_2}\\right)",
      "chapter": "几何光学",
      "topic": "平面与平面系统",
      "difficulty": "medium",
      "knowledge_tags": [
        "formula_030"
      ],
      "wrong_hint": {
        "type": "公式记忆",
        "message": "平行平板侧向位移的公式是\\Delta T = d \\sin I_1 \\left(1 - \\frac{\\cos I_1}{n \\cos I_2}\\right)，请重点记忆。"
      }
    },
    {
      "id": "choice_224",
      "question": "以下哪个公式表示平行平板轴向位移？",
      "options": [
        "A. \\Delta L = d \\left(1 - \\frac{1}{n}\\right)",
        "B. R_\\lambda = \\frac{\\lambda}{\\Delta\\lambda} = mN\\frac{\\pi\\sqrt{R}}{1-R}",
        "C. \\delta T' = \\delta L' \\tan U'",
        "D. L_{max} = \\frac{b}{\\theta_{min}} \\approx 1200 \\, \\text{m}"
      ],
      "answer": "A",
      "explanation": "平行平板轴向位移的公式为：\\Delta L = d \\left(1 - \\frac{1}{n}\\right)",
      "chapter": "几何光学",
      "topic": "平面与平面系统",
      "difficulty": "medium",
      "knowledge_tags": [
        "formula_031"
      ],
      "wrong_hint": {
        "type": "公式记忆",
        "message": "平行平板轴向位移的公式是\\Delta L = d \\left(1 - \\frac{1}{n}\\right)，请重点记忆。"
      }
    },
    {
      "id": "choice_225",
      "question": "以下哪个公式表示折射棱镜偏向角？",
      "options": [
        "A. \\delta = I_1 + I_2' - \\alpha",
        "B. I = I_0 \\cos^2\\theta",
        "C. I = -I''",
        "D. \\Delta\\theta = \\frac{\\lambda}{a}"
      ],
      "answer": "A",
      "explanation": "折射棱镜偏向角的公式为：\\delta = I_1 + I_2' - \\alpha",
      "chapter": "几何光学",
      "topic": "平面与平面系统",
      "difficulty": "medium",
      "knowledge_tags": [
        "formula_032"
      ],
      "wrong_hint": {
        "type": "公式记忆",
        "message": "折射棱镜偏向角的公式是\\delta = I_1 + I_2' - \\alpha，请重点记忆。"
      }
    },
    {
      "id": "choice_226",
      "question": "以下哪个公式表示最小偏向角？",
      "options": [
        "A. \\sin\\frac{\\delta_m + \\alpha}{2} = n \\sin\\frac{\\alpha}{2}",
        "B. E(z,t) = A \\cos(kz - \\omega t + \\varphi_0)",
        "C. x x' = f f'",
        "D. NA = n \\sin u"
      ],
      "answer": "A",
      "explanation": "最小偏向角的公式为：\\sin\\frac{\\delta_m + \\alpha}{2} = n \\sin\\frac{\\alpha}{2}",
      "chapter": "几何光学",
      "topic": "平面与平面系统",
      "difficulty": "medium",
      "knowledge_tags": [
        "formula_033"
      ],
      "wrong_hint": {
        "type": "公式记忆",
        "message": "最小偏向角的公式是\\sin\\frac{\\delta_m + \\alpha}{2} = n \\sin\\frac{\\alpha}{2}，请重点记忆。"
      }
    },
    {
      "id": "choice_227",
      "question": "以下哪个公式表示光楔偏向角？",
      "options": [
        "A. \\delta = \\alpha (n - 1)",
        "B. \\Delta L = m\\lambda \\quad (m = 0, \\pm 1, \\pm 2, \\ldots)",
        "C. \\beta = +1",
        "D. A = R - P = \\frac{1}{l_r} - \\frac{1}{l_p}"
      ],
      "answer": "A",
      "explanation": "光楔偏向角的公式为：\\delta = \\alpha (n - 1)",
      "chapter": "几何光学",
      "topic": "平面与平面系统",
      "difficulty": "medium",
      "knowledge_tags": [
        "formula_034"
      ],
      "wrong_hint": {
        "type": "公式记忆",
        "message": "光楔偏向角的公式是\\delta = \\alpha (n - 1)，请重点记忆。"
      }
    },
    {
      "id": "choice_228",
      "question": "以下哪个公式表示渐晕系数？",
      "options": [
        "A. K = \\frac{D_{\\omega}}{D}",
        "B. \\Phi = \\Phi_1 + \\Phi_2",
        "C. W < \\frac{\\lambda}{4}",
        "D. \\sin I_m = \\frac{n'}{n}"
      ],
      "answer": "A",
      "explanation": "渐晕系数的公式为：K = \\frac{D_{\\omega}}{D}",
      "chapter": "几何光学",
      "topic": "光阑与景深",
      "difficulty": "medium",
      "knowledge_tags": [
        "formula_035"
      ],
      "wrong_hint": {
        "type": "公式记忆",
        "message": "渐晕系数的公式是K = \\frac{D_{\\omega}}{D}，请重点记忆。"
      }
    },
    {
      "id": "choice_229",
      "question": "以下哪个公式表示远景景深？",
      "options": [
        "A. \\Delta_1 = \\frac{P^2 \\varepsilon}{2a - P \\varepsilon}",
        "B. I = I_1 + I_2 + 2\\sqrt{I_1 I_2} \\cos \\delta",
        "C. \\beta = 2\\alpha",
        "D. \\frac{1}{l'} + \\frac{1}{l} = \\frac{2}{r}"
      ],
      "answer": "A",
      "explanation": "远景景深的公式为：\\Delta_1 = \\frac{P^2 \\varepsilon}{2a - P \\varepsilon}",
      "chapter": "几何光学",
      "topic": "光阑与景深",
      "difficulty": "medium",
      "knowledge_tags": [
        "formula_036"
      ],
      "wrong_hint": {
        "type": "公式记忆",
        "message": "远景景深的公式是\\Delta_1 = \\frac{P^2 \\varepsilon}{2a - P \\varepsilon}，请重点记忆。"
      }
    },
    {
      "id": "choice_230",
      "question": "以下哪个公式表示近景景深？",
      "options": [
        "A. \\Delta_2 = \\frac{P^2 \\varepsilon}{2a + P \\varepsilon}",
        "B. A = R - P = \\frac{1}{l_r} - \\frac{1}{l_p}",
        "C. \\varphi = \\frac{1.22\\lambda}{D}",
        "D. E' = \\frac{1}{4} \\pi \\tau L \\left(\\frac{D}{f'}\\right)^2 \\cos^4 \\omega'"
      ],
      "answer": "A",
      "explanation": "近景景深的公式为：\\Delta_2 = \\frac{P^2 \\varepsilon}{2a + P \\varepsilon}",
      "chapter": "几何光学",
      "topic": "光阑与景深",
      "difficulty": "medium",
      "knowledge_tags": [
        "formula_037"
      ],
      "wrong_hint": {
        "type": "公式记忆",
        "message": "近景景深的公式是\\Delta_2 = \\frac{P^2 \\varepsilon}{2a + P \\varepsilon}，请重点记忆。"
      }
    },
    {
      "id": "choice_231",
      "question": "以下哪个公式表示总景深？",
      "options": [
        "A. \\Delta = \\Delta_1 + \\Delta_2 = \\frac{4aP^2\\varepsilon}{4a^2 - P^2\\varepsilon^2}",
        "B. r_m = \\sqrt{mR\\lambda}",
        "C. \\Delta L = m\\lambda \\quad (m = 0, \\pm 1, \\pm 2, \\ldots)",
        "D. \\tan U = \\frac{a}{P} = \\frac{D}{2P}"
      ],
      "answer": "A",
      "explanation": "总景深的公式为：\\Delta = \\Delta_1 + \\Delta_2 = \\frac{4aP^2\\varepsilon}{4a^2 - P^2\\varepsilon^2}",
      "chapter": "几何光学",
      "topic": "光阑与景深",
      "difficulty": "medium",
      "knowledge_tags": [
        "formula_038"
      ],
      "wrong_hint": {
        "type": "公式记忆",
        "message": "总景深的公式是\\Delta = \\Delta_1 + \\Delta_2 = \\frac{4aP^2\\varepsilon}{4a^2 - P^2\\varepsilon^2}，请重点记忆。"
      }
    },
    {
      "id": "choice_232",
      "question": "以下哪个公式表示入瞳直径与孔径角？",
      "options": [
        "A. \\tan U = \\frac{a}{P} = \\frac{D}{2P}",
        "B. n \\sin I = n' \\sin I'",
        "C. \\delta = \\frac{2\\pi}{\\lambda}(n_o - n_e)d",
        "D. L_{max} = \\frac{b}{\\theta_{min}} \\approx 1200 \\, \\text{m}"
      ],
      "answer": "A",
      "explanation": "入瞳直径与孔径角的公式为：\\tan U = \\frac{a}{P} = \\frac{D}{2P}",
      "chapter": "几何光学",
      "topic": "光阑与景深",
      "difficulty": "medium",
      "knowledge_tags": [
        "formula_039"
      ],
      "wrong_hint": {
        "type": "公式记忆",
        "message": "入瞳直径与孔径角的公式是\\tan U = \\frac{a}{P} = \\frac{D}{2P}，请重点记忆。"
      }
    },
    {
      "id": "choice_233",
      "question": "以下哪个公式表示轴向球差？",
      "options": [
        "A. \\delta L = L' - l'",
        "B. \\Delta T = d \\sin I_1 \\left(1 - \\frac{\\cos I_1}{n \\cos I_2}\\right)",
        "C. \\beta = \\beta_1 \\beta_2 \\cdots \\beta_k",
        "D. \\Delta_1 = \\frac{P^2 \\varepsilon}{2a - P \\varepsilon}"
      ],
      "answer": "A",
      "explanation": "轴向球差的公式为：\\delta L = L' - l'",
      "chapter": "几何光学",
      "topic": "像差理论",
      "difficulty": "medium",
      "knowledge_tags": [
        "formula_040"
      ],
      "wrong_hint": {
        "type": "公式记忆",
        "message": "轴向球差的公式是\\delta L = L' - l'，请重点记忆。"
      }
    },
    {
      "id": "choice_234",
      "question": "以下哪个公式表示垂轴球差？",
      "options": [
        "A. \\delta T' = \\delta L' \\tan U'",
        "B. a\\sin\\theta = m\\lambda \\quad (m = \\pm 1, \\pm 2, \\ldots)",
        "C. n y \\tan U = n' y' \\tan U'",
        "D. \\theta = \\alpha l"
      ],
      "answer": "A",
      "explanation": "垂轴球差的公式为：\\delta T' = \\delta L' \\tan U'",
      "chapter": "几何光学",
      "topic": "像差理论",
      "difficulty": "medium",
      "knowledge_tags": [
        "formula_041"
      ],
      "wrong_hint": {
        "type": "公式记忆",
        "message": "垂轴球差的公式是\\delta T' = \\delta L' \\tan U'，请重点记忆。"
      }
    },
    {
      "id": "choice_235",
      "question": "以下哪个公式表示波像差与几何像差关系？",
      "options": [
        "A. W = \\int n \\sin U \\cdot \\delta L \\, dU",
        "B. \\beta = \\beta_1 \\beta_2 \\cdots \\beta_k",
        "C. N = \\frac{1475}{F}",
        "D. 500NA \\leq \\Gamma \\leq 1000NA"
      ],
      "answer": "A",
      "explanation": "波像差与几何像差关系的公式为：W = \\int n \\sin U \\cdot \\delta L \\, dU",
      "chapter": "几何光学",
      "topic": "像差理论",
      "difficulty": "medium",
      "knowledge_tags": [
        "formula_042"
      ],
      "wrong_hint": {
        "type": "公式记忆",
        "message": "波像差与几何像差关系的公式是W = \\int n \\sin U \\cdot \\delta L \\, dU，请重点记忆。"
      }
    },
    {
      "id": "choice_236",
      "question": "以下哪个公式表示瑞利判据？",
      "options": [
        "A. W < \\frac{\\lambda}{4}",
        "B. \\Phi = \\frac{1}{f'}",
        "C. \\gamma = \\frac{u'}{u} = \\frac{n}{n' \\beta}",
        "D. E' = \\frac{1}{4} \\pi \\tau L \\left(\\frac{D}{f'}\\right)^2 \\cos^4 \\omega'"
      ],
      "answer": "A",
      "explanation": "瑞利判据的公式为：W < \\frac{\\lambda}{4}",
      "chapter": "几何光学",
      "topic": "像差理论",
      "difficulty": "medium",
      "knowledge_tags": [
        "formula_043"
      ],
      "wrong_hint": {
        "type": "公式记忆",
        "message": "瑞利判据的公式是W < \\frac{\\lambda}{4}，请重点记忆。"
      }
    },
    {
      "id": "choice_237",
      "question": "以下哪个公式表示位置色差？",
      "options": [
        "A. \\Delta L_{FC}' = L_F' - L_C'",
        "B. \\delta = \\frac{2\\pi}{\\lambda} \\Delta L = k \\Delta L",
        "C. \\rho_m = \\sqrt{m\\lambda \\frac{Rb}{R+b}}",
        "D. n \\sin I = n' \\sin I'"
      ],
      "answer": "A",
      "explanation": "位置色差的公式为：\\Delta L_{FC}' = L_F' - L_C'",
      "chapter": "几何光学",
      "topic": "像差理论",
      "difficulty": "medium",
      "knowledge_tags": [
        "formula_044"
      ],
      "wrong_hint": {
        "type": "公式记忆",
        "message": "位置色差的公式是\\Delta L_{FC}' = L_F' - L_C'，请重点记忆。"
      }
    },
    {
      "id": "choice_238",
      "question": "以下哪个公式表示波色差？",
      "options": [
        "A. W_{FC} = W_F - W_C = \\sum (D - d) \\Delta n",
        "B. \\beta = \\beta_1 \\beta_2 \\cdots \\beta_k",
        "C. E' = \\frac{1}{4} \\pi \\tau L \\left(\\frac{D}{f'}\\right)^2 \\cos^4 \\omega'",
        "D. \\nabla \\cdot \\mathbf{D} = \\rho, \\quad \\nabla \\cdot \\mathbf{B} = 0, \\quad \\nabla \\times \\mathbf{E} = -\\frac{\\partial \\mathbf{B}}{\\partial t}, \\quad \\nabla \\times \\mathbf{H} = \\mathbf{j} + \\frac{\\partial \\mathbf{D}}{\\partial t}"
      ],
      "answer": "A",
      "explanation": "波色差的公式为：W_{FC} = W_F - W_C = \\sum (D - d) \\Delta n",
      "chapter": "几何光学",
      "topic": "像差理论",
      "difficulty": "medium",
      "knowledge_tags": [
        "formula_045"
      ],
      "wrong_hint": {
        "type": "公式记忆",
        "message": "波色差的公式是W_{FC} = W_F - W_C = \\sum (D - d) \\Delta n，请重点记忆。"
      }
    },
    {
      "id": "choice_239",
      "question": "以下哪个公式表示眼睛调节能力？",
      "options": [
        "A. A = R - P = \\frac{1}{l_r} - \\frac{1}{l_p}",
        "B. I = I_0 \\left(\\frac{\\sin\\alpha}{\\alpha}\\right)^2, \\quad \\alpha = \\frac{\\pi a \\sin\\theta}{\\lambda}",
        "C. \\theta = \\alpha l",
        "D. \\delta L = L' - l'"
      ],
      "answer": "A",
      "explanation": "眼睛调节能力的公式为：A = R - P = \\frac{1}{l_r} - \\frac{1}{l_p}",
      "chapter": "几何光学",
      "topic": "眼睛与视觉",
      "difficulty": "medium",
      "knowledge_tags": [
        "formula_046"
      ],
      "wrong_hint": {
        "type": "公式记忆",
        "message": "眼睛调节能力的公式是A = R - P = \\frac{1}{l_r} - \\frac{1}{l_p}，请重点记忆。"
      }
    },
    {
      "id": "choice_240",
      "question": "以下哪个公式表示眼睛视角分辨率？",
      "options": [
        "A. \\varepsilon = \\frac{0.006}{f_{eye}} \\times 206265''",
        "B. I = I_0 \\left(\\frac{\\sin\\alpha}{\\alpha}\\right)^2, \\quad \\alpha = \\frac{\\pi a \\sin\\theta}{\\lambda}",
        "C. \\tan U = \\frac{a}{P} = \\frac{D}{2P}",
        "D. a\\sin\\theta = m\\lambda \\quad (m = \\pm 1, \\pm 2, \\ldots)"
      ],
      "answer": "A",
      "explanation": "眼睛视角分辨率的公式为：\\varepsilon = \\frac{0.006}{f_{eye}} \\times 206265''",
      "chapter": "几何光学",
      "topic": "眼睛与视觉",
      "difficulty": "medium",
      "knowledge_tags": [
        "formula_047"
      ],
      "wrong_hint": {
        "type": "公式记忆",
        "message": "眼睛视角分辨率的公式是\\varepsilon = \\frac{0.006}{f_{eye}} \\times 206265''，请重点记忆。"
      }
    },
    {
      "id": "choice_241",
      "question": "以下哪个公式表示放大镜视觉放大率？",
      "options": [
        "A. \\Gamma = \\frac{250}{f'}",
        "B. \\gamma = +1",
        "C. k = \\frac{2\\pi}{\\lambda} = \\frac{\\omega}{v}",
        "D. I = I_0 \\left(\\frac{\\sin\\alpha}{\\alpha}\\right)^2 \\left(\\frac{\\sin\\beta}{\\beta}\\right)^2"
      ],
      "answer": "A",
      "explanation": "放大镜视觉放大率的公式为：\\Gamma = \\frac{250}{f'}",
      "chapter": "几何光学",
      "topic": "放大镜与显微镜",
      "difficulty": "medium",
      "knowledge_tags": [
        "formula_048"
      ],
      "wrong_hint": {
        "type": "公式记忆",
        "message": "放大镜视觉放大率的公式是\\Gamma = \\frac{250}{f'}，请重点记忆。"
      }
    },
    {
      "id": "choice_242",
      "question": "以下哪个公式表示显微镜总视觉放大率？",
      "options": [
        "A. \\Gamma = \\beta_{obj} \\cdot \\Gamma_{eye} = \\frac{250\\Delta}{f_{obj}' f_{eye}'}",
        "B. \\tan\\theta_B = \\frac{n_2}{n_1}",
        "C. \\Delta L = m\\lambda \\quad (m = 0, \\pm 1, \\pm 2, \\ldots)",
        "D. \\alpha = \\frac{dl'}{dl} = \\frac{n'}{n} \\beta^2"
      ],
      "answer": "A",
      "explanation": "显微镜总视觉放大率的公式为：\\Gamma = \\beta_{obj} \\cdot \\Gamma_{eye} = \\frac{250\\Delta}{f_{obj}' f_{eye}'}",
      "chapter": "几何光学",
      "topic": "放大镜与显微镜",
      "difficulty": "medium",
      "knowledge_tags": [
        "formula_049"
      ],
      "wrong_hint": {
        "type": "公式记忆",
        "message": "显微镜总视觉放大率的公式是\\Gamma = \\beta_{obj} \\cdot \\Gamma_{eye} = \\frac{250\\Delta}{f_{obj}' f_{eye}'}，请重点记忆。"
      }
    },
    {
      "id": "choice_243",
      "question": "以下哪个公式表示显微镜数值孔径？",
      "options": [
        "A. NA = n \\sin u",
        "B. W = \\int n \\sin U \\cdot \\delta L \\, dU",
        "C. I = I_0 \\cos^2\\theta",
        "D. 2nh = \\left(m + \\frac{1}{2}\\right)\\lambda"
      ],
      "answer": "A",
      "explanation": "显微镜数值孔径的公式为：NA = n \\sin u",
      "chapter": "几何光学",
      "topic": "放大镜与显微镜",
      "difficulty": "medium",
      "knowledge_tags": [
        "formula_050"
      ],
      "wrong_hint": {
        "type": "公式记忆",
        "message": "显微镜数值孔径的公式是NA = n \\sin u，请重点记忆。"
      }
    },
    {
      "id": "choice_244",
      "question": "以下哪个公式表示显微镜分辨率（瑞利）？",
      "options": [
        "A. \\sigma = \\frac{0.61\\lambda}{NA}",
        "B. I = I_1 + I_2 + 2\\sqrt{I_1 I_2} \\cos \\delta",
        "C. R_\\lambda = \\frac{\\lambda}{\\Delta\\lambda} = mN\\frac{\\pi\\sqrt{R}}{1-R}",
        "D. \\Delta L = 2nh\\cos\\theta_2 + \\frac{\\lambda}{2}"
      ],
      "answer": "A",
      "explanation": "显微镜分辨率（瑞利）的公式为：\\sigma = \\frac{0.61\\lambda}{NA}",
      "chapter": "几何光学",
      "topic": "放大镜与显微镜",
      "difficulty": "medium",
      "knowledge_tags": [
        "formula_051"
      ],
      "wrong_hint": {
        "type": "公式记忆",
        "message": "显微镜分辨率（瑞利）的公式是\\sigma = \\frac{0.61\\lambda}{NA}，请重点记忆。"
      }
    },
    {
      "id": "choice_245",
      "question": "以下哪个公式表示显微镜分辨率（道威）？",
      "options": [
        "A. \\sigma = \\frac{0.5\\lambda}{NA} = \\frac{0.5\\lambda}{n \\sin u}",
        "B. I = I_0 \\left(\\frac{\\sin\\alpha}{\\alpha}\\right)^2, \\quad \\alpha = \\frac{\\pi a \\sin\\theta}{\\lambda}",
        "C. \\frac{1}{l'} + \\frac{1}{l} = \\frac{2}{r}",
        "D. \\rho_m = \\sqrt{m\\lambda \\frac{Rb}{R+b}}"
      ],
      "answer": "A",
      "explanation": "显微镜分辨率（道威）的公式为：\\sigma = \\frac{0.5\\lambda}{NA} = \\frac{0.5\\lambda}{n \\sin u}",
      "chapter": "几何光学",
      "topic": "放大镜与显微镜",
      "difficulty": "medium",
      "knowledge_tags": [
        "formula_052"
      ],
      "wrong_hint": {
        "type": "公式记忆",
        "message": "显微镜分辨率（道威）的公式是\\sigma = \\frac{0.5\\lambda}{NA} = \\frac{0.5\\lambda}{n \\sin u}，请重点记忆。"
      }
    },
    {
      "id": "choice_246",
      "question": "以下哪个公式表示显微镜有效放大率？",
      "options": [
        "A. 500NA \\leq \\Gamma \\leq 1000NA",
        "B. \\Delta_1 = \\frac{P^2 \\varepsilon}{2a - P \\varepsilon}",
        "C. 2nh\\cos\\theta_2 = m\\lambda",
        "D. \\Gamma = \\beta_{obj} \\cdot \\Gamma_{eye} = \\frac{250\\Delta}{f_{obj}' f_{eye}'}"
      ],
      "answer": "A",
      "explanation": "显微镜有效放大率的公式为：500NA \\leq \\Gamma \\leq 1000NA",
      "chapter": "几何光学",
      "topic": "放大镜与显微镜",
      "difficulty": "medium",
      "knowledge_tags": [
        "formula_053"
      ],
      "wrong_hint": {
        "type": "公式记忆",
        "message": "显微镜有效放大率的公式是500NA \\leq \\Gamma \\leq 1000NA，请重点记忆。"
      }
    },
    {
      "id": "choice_247",
      "question": "以下哪个公式表示望远镜视觉放大率？",
      "options": [
        "A. \\Gamma = -\\frac{f_{obj}'}{f_{eye}'} = \\frac{1}{\\beta}",
        "B. \\beta = \\beta_1 \\beta_2 \\cdots \\beta_k",
        "C. \\beta = -\\frac{f}{x} = -\\frac{x'}{f'} = \\frac{n l'}{n' l}",
        "D. 2nh = m\\lambda"
      ],
      "answer": "A",
      "explanation": "望远镜视觉放大率的公式为：\\Gamma = -\\frac{f_{obj}'}{f_{eye}'} = \\frac{1}{\\beta}",
      "chapter": "几何光学",
      "topic": "望远镜",
      "difficulty": "medium",
      "knowledge_tags": [
        "formula_054"
      ],
      "wrong_hint": {
        "type": "公式记忆",
        "message": "望远镜视觉放大率的公式是\\Gamma = -\\frac{f_{obj}'}{f_{eye}'} = \\frac{1}{\\beta}，请重点记忆。"
      }
    },
    {
      "id": "choice_248",
      "question": "以下哪个公式表示望远镜分辨率？",
      "options": [
        "A. \\varphi = \\frac{1.22\\lambda}{D}",
        "B. d(\\sin\\theta_i + \\sin\\theta_m) = m\\lambda",
        "C. I = I_1 + I_2 + 2\\sqrt{I_1 I_2} \\cos \\delta",
        "D. \\frac{1}{R} + \\frac{1}{b} = \\frac{m\\lambda}{\\rho_m^2} = \\frac{1}{f}"
      ],
      "answer": "A",
      "explanation": "望远镜分辨率的公式为：\\varphi = \\frac{1.22\\lambda}{D}",
      "chapter": "几何光学",
      "topic": "望远镜",
      "difficulty": "medium",
      "knowledge_tags": [
        "formula_055"
      ],
      "wrong_hint": {
        "type": "公式记忆",
        "message": "望远镜分辨率的公式是\\varphi = \\frac{1.22\\lambda}{D}，请重点记忆。"
      }
    },
    {
      "id": "choice_249",
      "question": "以下哪个公式表示望远镜有效放大率？",
      "options": [
        "A. \\Gamma = \\frac{D}{2.3}",
        "B. n y \\tan U = n' y' \\tan U'",
        "C. I = I_0 \\left(\\frac{\\sin\\alpha}{\\alpha}\\right)^2 \\left(\\frac{\\sin N\\beta}{\\sin\\beta}\\right)^2",
        "D. x_m = \\frac{m\\lambda D}{d}"
      ],
      "answer": "A",
      "explanation": "望远镜有效放大率的公式为：\\Gamma = \\frac{D}{2.3}",
      "chapter": "几何光学",
      "topic": "望远镜",
      "difficulty": "medium",
      "knowledge_tags": [
        "formula_056"
      ],
      "wrong_hint": {
        "type": "公式记忆",
        "message": "望远镜有效放大率的公式是\\Gamma = \\frac{D}{2.3}，请重点记忆。"
      }
    },
    {
      "id": "choice_250",
      "question": "以下哪个公式表示摄影物镜分辨率？",
      "options": [
        "A. N = \\frac{1475}{F}",
        "B. \\frac{n'}{l'} - \\frac{n}{l} = \\frac{n' - n}{r}",
        "C. \\delta = \\frac{2\\pi}{\\lambda} \\Delta L = k \\Delta L",
        "D. \\sin I_m = \\frac{n'}{n}"
      ],
      "answer": "A",
      "explanation": "摄影物镜分辨率的公式为：N = \\frac{1475}{F}",
      "chapter": "几何光学",
      "topic": "摄影系统",
      "difficulty": "medium",
      "knowledge_tags": [
        "formula_057"
      ],
      "wrong_hint": {
        "type": "公式记忆",
        "message": "摄影物镜分辨率的公式是N = \\frac{1475}{F}，请重点记忆。"
      }
    },
    {
      "id": "choice_251",
      "question": "以下哪个公式表示像面照度？",
      "options": [
        "A. E' = \\frac{1}{4} \\pi \\tau L \\left(\\frac{D}{f'}\\right)^2 \\cos^4 \\omega'",
        "B. N = \\frac{1475}{F}",
        "C. \\Delta x = \\frac{\\lambda}{2n\\alpha}",
        "D. \\beta = -\\frac{f}{x} = -\\frac{x'}{f'} = \\frac{n l'}{n' l}"
      ],
      "answer": "A",
      "explanation": "像面照度的公式为：E' = \\frac{1}{4} \\pi \\tau L \\left(\\frac{D}{f'}\\right)^2 \\cos^4 \\omega'",
      "chapter": "几何光学",
      "topic": "摄影系统",
      "difficulty": "medium",
      "knowledge_tags": [
        "formula_058"
      ],
      "wrong_hint": {
        "type": "公式记忆",
        "message": "像面照度的公式是E' = \\frac{1}{4} \\pi \\tau L \\left(\\frac{D}{f'}\\right)^2 \\cos^4 \\omega'，请重点记忆。"
      }
    },
    {
      "id": "choice_252",
      "question": "以下哪个公式表示立体视觉半径？",
      "options": [
        "A. L_{max} = \\frac{b}{\\theta_{min}} \\approx 1200 \\, \\text{m}",
        "B. \\delta = \\frac{2\\pi}{\\lambda} \\Delta L = k \\Delta L",
        "C. \\frac{1}{f'} = \\frac{1}{l'} - \\frac{1}{l}",
        "D. \\Delta\\lambda = \\frac{\\lambda}{m}"
      ],
      "answer": "A",
      "explanation": "立体视觉半径的公式为：L_{max} = \\frac{b}{\\theta_{min}} \\approx 1200 \\, \\text{m}",
      "chapter": "几何光学",
      "topic": "眼睛与视觉",
      "difficulty": "medium",
      "knowledge_tags": [
        "formula_059"
      ],
      "wrong_hint": {
        "type": "公式记忆",
        "message": "立体视觉半径的公式是L_{max} = \\frac{b}{\\theta_{min}} \\approx 1200 \\, \\text{m}，请重点记忆。"
      }
    },
    {
      "id": "choice_253",
      "question": "以下哪个公式表示立体视觉阈？",
      "options": [
        "A. \\Delta L = \\frac{L^2 \\theta}{b}",
        "B. 2nh\\cos\\theta_2 = m\\lambda",
        "C. \\frac{x^2}{A_1^2} + \\frac{y^2}{A_2^2} - \\frac{2xy}{A_1 A_2}\\cos\\delta = \\sin^2\\delta",
        "D. \\delta L = L' - l'"
      ],
      "answer": "A",
      "explanation": "立体视觉阈的公式为：\\Delta L = \\frac{L^2 \\theta}{b}",
      "chapter": "几何光学",
      "topic": "眼睛与视觉",
      "difficulty": "medium",
      "knowledge_tags": [
        "formula_060"
      ],
      "wrong_hint": {
        "type": "公式记忆",
        "message": "立体视觉阈的公式是\\Delta L = \\frac{L^2 \\theta}{b}，请重点记忆。"
      }
    },
    {
      "id": "choice_254",
      "question": "以下哪个公式表示麦克斯韦方程组微分形式？",
      "options": [
        "A. \\nabla \\cdot \\mathbf{D} = \\rho, \\quad \\nabla \\cdot \\mathbf{B} = 0, \\quad \\nabla \\times \\mathbf{E} = -\\frac{\\partial \\mathbf{B}}{\\partial t}, \\quad \\nabla \\times \\mathbf{H} = \\mathbf{j} + \\frac{\\partial \\mathbf{D}}{\\partial t}",
        "B. W_{FC} = W_F - W_C = \\sum (D - d) \\Delta n",
        "C. \\nabla^2 \\mathbf{E} - \\varepsilon\\mu \\frac{\\partial^2 \\mathbf{E}}{\\partial t^2} = 0",
        "D. \\beta = \\beta_1 \\beta_2 \\cdots \\beta_k"
      ],
      "answer": "A",
      "explanation": "麦克斯韦方程组微分形式的公式为：\\nabla \\cdot \\mathbf{D} = \\rho, \\quad \\nabla \\cdot \\mathbf{B} = 0, \\quad \\nabla \\times \\mathbf{E} = -\\frac{\\partial \\mathbf{B}}{\\partial t}, \\quad \\nabla \\times \\mathbf{H} = \\mathbf{j} + \\frac{\\partial \\mathbf{D}}{\\partial t}",
      "chapter": "物理光学",
      "topic": "电磁理论",
      "difficulty": "medium",
      "knowledge_tags": [
        "formula_061"
      ],
      "wrong_hint": {
        "type": "公式记忆",
        "message": "麦克斯韦方程组微分形式的公式是\\nabla \\cdot \\mathbf{D} = \\rho, \\quad \\nabla \\cdot \\mathbf{B} = 0, \\quad \\nabla \\times \\mathbf{E} = -\\frac{\\partial \\mathbf{B}}{\\partial t}, \\quad \\nabla \\times \\mathbf{H} = \\mathbf{j} + \\frac{\\partial \\mathbf{D}}{\\partial t}，请重点记忆。"
      }
    },
    {
      "id": "choice_255",
      "question": "以下哪个公式表示波动方程？",
      "options": [
        "A. \\nabla^2 \\mathbf{E} - \\varepsilon\\mu \\frac{\\partial^2 \\mathbf{E}}{\\partial t^2} = 0",
        "B. \\Phi = \\Phi_1 + \\Phi_2",
        "C. \\beta = \\beta_1 \\beta_2 \\cdots \\beta_k",
        "D. R_\\lambda = \\frac{\\lambda}{\\Delta\\lambda} = mN\\frac{\\pi\\sqrt{R}}{1-R}"
      ],
      "answer": "A",
      "explanation": "波动方程的公式为：\\nabla^2 \\mathbf{E} - \\varepsilon\\mu \\frac{\\partial^2 \\mathbf{E}}{\\partial t^2} = 0",
      "chapter": "物理光学",
      "topic": "电磁理论",
      "difficulty": "medium",
      "knowledge_tags": [
        "formula_062"
      ],
      "wrong_hint": {
        "type": "公式记忆",
        "message": "波动方程的公式是\\nabla^2 \\mathbf{E} - \\varepsilon\\mu \\frac{\\partial^2 \\mathbf{E}}{\\partial t^2} = 0，请重点记忆。"
      }
    },
    {
      "id": "choice_256",
      "question": "以下哪个公式表示光速与介质常数关系？",
      "options": [
        "A. v = \\frac{1}{\\sqrt{\\varepsilon\\mu}} = \\frac{c}{\\sqrt{\\varepsilon_r \\mu_r}} = \\frac{c}{n}",
        "B. \\Delta x = \\frac{\\lambda D}{d}",
        "C. \\Gamma = \\frac{250}{f'}",
        "D. \\theta = \\alpha l"
      ],
      "answer": "A",
      "explanation": "光速与介质常数关系的公式为：v = \\frac{1}{\\sqrt{\\varepsilon\\mu}} = \\frac{c}{\\sqrt{\\varepsilon_r \\mu_r}} = \\frac{c}{n}",
      "chapter": "物理光学",
      "topic": "电磁理论",
      "difficulty": "medium",
      "knowledge_tags": [
        "formula_063"
      ],
      "wrong_hint": {
        "type": "公式记忆",
        "message": "光速与介质常数关系的公式是v = \\frac{1}{\\sqrt{\\varepsilon\\mu}} = \\frac{c}{\\sqrt{\\varepsilon_r \\mu_r}} = \\frac{c}{n}，请重点记忆。"
      }
    },
    {
      "id": "choice_257",
      "question": "以下哪个公式表示折射率与介质常数？",
      "options": [
        "A. n = \\sqrt{\\varepsilon_r \\mu_r} \\approx \\sqrt{\\varepsilon_r}",
        "B. \\varphi = \\frac{1.22\\lambda}{D}",
        "C. L_{max} = \\frac{b}{\\theta_{min}} \\approx 1200 \\, \\text{m}",
        "D. \\delta L = L' - l'"
      ],
      "answer": "A",
      "explanation": "折射率与介质常数的公式为：n = \\sqrt{\\varepsilon_r \\mu_r} \\approx \\sqrt{\\varepsilon_r}",
      "chapter": "物理光学",
      "topic": "电磁理论",
      "difficulty": "medium",
      "knowledge_tags": [
        "formula_064"
      ],
      "wrong_hint": {
        "type": "公式记忆",
        "message": "折射率与介质常数的公式是n = \\sqrt{\\varepsilon_r \\mu_r} \\approx \\sqrt{\\varepsilon_r}，请重点记忆。"
      }
    },
    {
      "id": "choice_258",
      "question": "以下哪个公式表示平面简谐波？",
      "options": [
        "A. E(z,t) = A \\cos(kz - \\omega t + \\varphi_0)",
        "B. \\Delta L = \\frac{L^2 \\theta}{b}",
        "C. \\nabla^2 \\mathbf{E} - \\varepsilon\\mu \\frac{\\partial^2 \\mathbf{E}}{\\partial t^2} = 0",
        "D. \\beta = +1"
      ],
      "answer": "A",
      "explanation": "平面简谐波的公式为：E(z,t) = A \\cos(kz - \\omega t + \\varphi_0)",
      "chapter": "物理光学",
      "topic": "波动方程",
      "difficulty": "medium",
      "knowledge_tags": [
        "formula_065"
      ],
      "wrong_hint": {
        "type": "公式记忆",
        "message": "平面简谐波的公式是E(z,t) = A \\cos(kz - \\omega t + \\varphi_0)，请重点记忆。"
      }
    },
    {
      "id": "choice_259",
      "question": "以下哪个公式表示波数与波长关系？",
      "options": [
        "A. k = \\frac{2\\pi}{\\lambda} = \\frac{\\omega}{v}",
        "B. \\theta = \\alpha l",
        "C. \\beta = -\\frac{f}{x} = -\\frac{x'}{f'} = \\frac{n l'}{n' l}",
        "D. x x' = f f'"
      ],
      "answer": "A",
      "explanation": "波数与波长关系的公式为：k = \\frac{2\\pi}{\\lambda} = \\frac{\\omega}{v}",
      "chapter": "物理光学",
      "topic": "波动方程",
      "difficulty": "medium",
      "knowledge_tags": [
        "formula_066"
      ],
      "wrong_hint": {
        "type": "公式记忆",
        "message": "波数与波长关系的公式是k = \\frac{2\\pi}{\\lambda} = \\frac{\\omega}{v}，请重点记忆。"
      }
    },
    {
      "id": "choice_260",
      "question": "以下哪个公式表示光强叠加公式？",
      "options": [
        "A. I = I_1 + I_2 + 2\\sqrt{I_1 I_2} \\cos \\delta",
        "B. J = n u y = n' u' y'",
        "C. I = I_0 \\cos^2\\theta",
        "D. P = \\frac{I_{max} - I_{min}}{I_{max} + I_{min}}"
      ],
      "answer": "A",
      "explanation": "光强叠加公式的公式为：I = I_1 + I_2 + 2\\sqrt{I_1 I_2} \\cos \\delta",
      "chapter": "物理光学",
      "topic": "干涉",
      "difficulty": "medium",
      "knowledge_tags": [
        "formula_067"
      ],
      "wrong_hint": {
        "type": "公式记忆",
        "message": "光强叠加公式的公式是I = I_1 + I_2 + 2\\sqrt{I_1 I_2} \\cos \\delta，请重点记忆。"
      }
    },
    {
      "id": "choice_261",
      "question": "以下哪个公式表示相位差与光程差？",
      "options": [
        "A. \\delta = \\frac{2\\pi}{\\lambda} \\Delta L = k \\Delta L",
        "B. \\delta L = L' - l'",
        "C. \\frac{1}{l'} + \\frac{1}{l} = \\frac{2}{r}",
        "D. d(\\sin\\theta_i + \\sin\\theta_m) = m\\lambda"
      ],
      "answer": "A",
      "explanation": "相位差与光程差的公式为：\\delta = \\frac{2\\pi}{\\lambda} \\Delta L = k \\Delta L",
      "chapter": "物理光学",
      "topic": "干涉",
      "difficulty": "medium",
      "knowledge_tags": [
        "formula_068"
      ],
      "wrong_hint": {
        "type": "公式记忆",
        "message": "相位差与光程差的公式是\\delta = \\frac{2\\pi}{\\lambda} \\Delta L = k \\Delta L，请重点记忆。"
      }
    },
    {
      "id": "choice_262",
      "question": "以下哪个公式表示干涉相长条件？",
      "options": [
        "A. \\Delta L = m\\lambda \\quad (m = 0, \\pm 1, \\pm 2, \\ldots)",
        "B. \\Delta L_{FC}' = L_F' - L_C'",
        "C. \\Phi = \\frac{1}{f'}",
        "D. 2d\\sin\\theta = m\\lambda"
      ],
      "answer": "A",
      "explanation": "干涉相长条件的公式为：\\Delta L = m\\lambda \\quad (m = 0, \\pm 1, \\pm 2, \\ldots)",
      "chapter": "物理光学",
      "topic": "干涉",
      "difficulty": "medium",
      "knowledge_tags": [
        "formula_069"
      ],
      "wrong_hint": {
        "type": "公式记忆",
        "message": "干涉相长条件的公式是\\Delta L = m\\lambda \\quad (m = 0, \\pm 1, \\pm 2, \\ldots)，请重点记忆。"
      }
    },
    {
      "id": "choice_263",
      "question": "以下哪个公式表示干涉相消条件？",
      "options": [
        "A. \\Delta L = \\left(m + \\frac{1}{2}\\right)\\lambda \\quad (m = 0, \\pm 1, \\pm 2, \\ldots)",
        "B. A = R - P = \\frac{1}{l_r} - \\frac{1}{l_p}",
        "C. 500NA \\leq \\Gamma \\leq 1000NA",
        "D. \\frac{1}{R} + \\frac{1}{b} = \\frac{m\\lambda}{\\rho_m^2} = \\frac{1}{f}"
      ],
      "answer": "A",
      "explanation": "干涉相消条件的公式为：\\Delta L = \\left(m + \\frac{1}{2}\\right)\\lambda \\quad (m = 0, \\pm 1, \\pm 2, \\ldots)",
      "chapter": "物理光学",
      "topic": "干涉",
      "difficulty": "medium",
      "knowledge_tags": [
        "formula_070"
      ],
      "wrong_hint": {
        "type": "公式记忆",
        "message": "干涉相消条件的公式是\\Delta L = \\left(m + \\frac{1}{2}\\right)\\lambda \\quad (m = 0, \\pm 1, \\pm 2, \\ldots)，请重点记忆。"
      }
    },
    {
      "id": "choice_264",
      "question": "以下哪个公式表示杨氏双缝条纹间距？",
      "options": [
        "A. \\Delta x = \\frac{\\lambda D}{d}",
        "B. K = \\frac{I_{max} - I_{min}}{I_{max} + I_{min}}",
        "C. \\alpha = \\frac{dl'}{dl} = \\frac{n'}{n} \\beta^2",
        "D. \\gamma = +1"
      ],
      "answer": "A",
      "explanation": "杨氏双缝条纹间距的公式为：\\Delta x = \\frac{\\lambda D}{d}",
      "chapter": "物理光学",
      "topic": "干涉",
      "difficulty": "medium",
      "knowledge_tags": [
        "formula_071"
      ],
      "wrong_hint": {
        "type": "公式记忆",
        "message": "杨氏双缝条纹间距的公式是\\Delta x = \\frac{\\lambda D}{d}，请重点记忆。"
      }
    },
    {
      "id": "choice_265",
      "question": "以下哪个公式表示杨氏双缝亮纹位置？",
      "options": [
        "A. x_m = \\frac{m\\lambda D}{d}",
        "B. \\varepsilon = \\frac{0.006}{f_{eye}} \\times 206265''",
        "C. \\theta = V B l",
        "D. \\nabla^2 \\mathbf{E} - \\varepsilon\\mu \\frac{\\partial^2 \\mathbf{E}}{\\partial t^2} = 0"
      ],
      "answer": "A",
      "explanation": "杨氏双缝亮纹位置的公式为：x_m = \\frac{m\\lambda D}{d}",
      "chapter": "物理光学",
      "topic": "干涉",
      "difficulty": "medium",
      "knowledge_tags": [
        "formula_072"
      ],
      "wrong_hint": {
        "type": "公式记忆",
        "message": "杨氏双缝亮纹位置的公式是x_m = \\frac{m\\lambda D}{d}，请重点记忆。"
      }
    },
    {
      "id": "choice_266",
      "question": "以下哪个公式表示等厚干涉光程差？",
      "options": [
        "A. \\Delta L = 2nh\\cos\\theta_2 + \\frac{\\lambda}{2}",
        "B. \\delta = \\frac{2\\pi}{\\lambda}(n_o - n_e)d",
        "C. 2d\\sin\\theta = m\\lambda",
        "D. A = R - P = \\frac{1}{l_r} - \\frac{1}{l_p}"
      ],
      "answer": "A",
      "explanation": "等厚干涉光程差的公式为：\\Delta L = 2nh\\cos\\theta_2 + \\frac{\\lambda}{2}",
      "chapter": "物理光学",
      "topic": "干涉",
      "difficulty": "medium",
      "knowledge_tags": [
        "formula_073"
      ],
      "wrong_hint": {
        "type": "公式记忆",
        "message": "等厚干涉光程差的公式是\\Delta L = 2nh\\cos\\theta_2 + \\frac{\\lambda}{2}，请重点记忆。"
      }
    },
    {
      "id": "choice_267",
      "question": "以下哪个公式表示劈尖干涉条纹间距？",
      "options": [
        "A. \\Delta x = \\frac{\\lambda}{2n\\alpha}",
        "B. \\Phi = \\frac{1}{f'}",
        "C. \\Gamma = \\beta_{obj} \\cdot \\Gamma_{eye} = \\frac{250\\Delta}{f_{obj}' f_{eye}'}",
        "D. W < \\frac{\\lambda}{4}"
      ],
      "answer": "A",
      "explanation": "劈尖干涉条纹间距的公式为：\\Delta x = \\frac{\\lambda}{2n\\alpha}",
      "chapter": "物理光学",
      "topic": "干涉",
      "difficulty": "medium",
      "knowledge_tags": [
        "formula_074"
      ],
      "wrong_hint": {
        "type": "公式记忆",
        "message": "劈尖干涉条纹间距的公式是\\Delta x = \\frac{\\lambda}{2n\\alpha}，请重点记忆。"
      }
    },
    {
      "id": "choice_268",
      "question": "以下哪个公式表示牛顿环暗环半径？",
      "options": [
        "A. r_m = \\sqrt{mR\\lambda}",
        "B. \\beta = -\\frac{f}{x} = -\\frac{x'}{f'} = \\frac{n l'}{n' l}",
        "C. 2d\\sin\\theta_b = m\\lambda_b",
        "D. \\Gamma = -\\frac{f_{obj}'}{f_{eye}'} = \\frac{1}{\\beta}"
      ],
      "answer": "A",
      "explanation": "牛顿环暗环半径的公式为：r_m = \\sqrt{mR\\lambda}",
      "chapter": "物理光学",
      "topic": "干涉",
      "difficulty": "medium",
      "knowledge_tags": [
        "formula_075"
      ],
      "wrong_hint": {
        "type": "公式记忆",
        "message": "牛顿环暗环半径的公式是r_m = \\sqrt{mR\\lambda}，请重点记忆。"
      }
    },
    {
      "id": "choice_269",
      "question": "以下哪个公式表示牛顿环亮环半径？",
      "options": [
        "A. r_m = \\sqrt{\\left(m + \\frac{1}{2}\\right)R\\lambda}",
        "B. \\Gamma = -\\frac{f_{obj}'}{f_{eye}'} = \\frac{1}{\\beta}",
        "C. W < \\frac{\\lambda}{4}",
        "D. \\delta L = L' - l'"
      ],
      "answer": "A",
      "explanation": "牛顿环亮环半径的公式为：r_m = \\sqrt{\\left(m + \\frac{1}{2}\\right)R\\lambda}",
      "chapter": "物理光学",
      "topic": "干涉",
      "difficulty": "medium",
      "knowledge_tags": [
        "formula_076"
      ],
      "wrong_hint": {
        "type": "公式记忆",
        "message": "牛顿环亮环半径的公式是r_m = \\sqrt{\\left(m + \\frac{1}{2}\\right)R\\lambda}，请重点记忆。"
      }
    },
    {
      "id": "choice_270",
      "question": "以下哪个公式表示增透膜条件？",
      "options": [
        "A. 2nh = \\left(m + \\frac{1}{2}\\right)\\lambda",
        "B. d(\\sin\\theta_i + \\sin\\theta_m) = m\\lambda",
        "C. l_{k+1} = l_k' - d_k",
        "D. \\varepsilon = \\frac{2(1-R)}{\\sqrt{R}}"
      ],
      "answer": "A",
      "explanation": "增透膜条件的公式为：2nh = \\left(m + \\frac{1}{2}\\right)\\lambda",
      "chapter": "物理光学",
      "topic": "干涉",
      "difficulty": "medium",
      "knowledge_tags": [
        "formula_077"
      ],
      "wrong_hint": {
        "type": "公式记忆",
        "message": "增透膜条件的公式是2nh = \\left(m + \\frac{1}{2}\\right)\\lambda，请重点记忆。"
      }
    },
    {
      "id": "choice_271",
      "question": "以下哪个公式表示增反膜条件？",
      "options": [
        "A. 2nh = m\\lambda",
        "B. \\alpha = \\frac{n'}{n} \\beta^2",
        "C. D_\\theta = \\frac{d\\theta}{d\\lambda} = \\frac{m}{d\\cos\\theta}",
        "D. \\gamma = +1"
      ],
      "answer": "A",
      "explanation": "增反膜条件的公式为：2nh = m\\lambda",
      "chapter": "物理光学",
      "topic": "干涉",
      "difficulty": "medium",
      "knowledge_tags": [
        "formula_078"
      ],
      "wrong_hint": {
        "type": "公式记忆",
        "message": "增反膜条件的公式是2nh = m\\lambda，请重点记忆。"
      }
    },
    {
      "id": "choice_272",
      "question": "以下哪个公式表示等倾干涉亮环条件？",
      "options": [
        "A. 2nh\\cos\\theta_2 = m\\lambda",
        "B. NA = n \\sin u",
        "C. v = \\frac{1}{\\sqrt{\\varepsilon\\mu}} = \\frac{c}{\\sqrt{\\varepsilon_r \\mu_r}} = \\frac{c}{n}",
        "D. \\delta L = L' - l'"
      ],
      "answer": "A",
      "explanation": "等倾干涉亮环条件的公式为：2nh\\cos\\theta_2 = m\\lambda",
      "chapter": "物理光学",
      "topic": "干涉",
      "difficulty": "medium",
      "knowledge_tags": [
        "formula_079"
      ],
      "wrong_hint": {
        "type": "公式记忆",
        "message": "等倾干涉亮环条件的公式是2nh\\cos\\theta_2 = m\\lambda，请重点记忆。"
      }
    },
    {
      "id": "choice_273",
      "question": "以下哪个公式表示迈克尔逊干涉仪光程差？",
      "options": [
        "A. \\Delta L = 2d\\cos i_1",
        "B. 2d\\sin\\theta_b = m\\lambda_b",
        "C. \\beta = \\beta_1 \\beta_2 \\cdots \\beta_k",
        "D. \\frac{1}{R} + \\frac{1}{b} = \\frac{m\\lambda}{\\rho_m^2} = \\frac{1}{f}"
      ],
      "answer": "A",
      "explanation": "迈克尔逊干涉仪光程差的公式为：\\Delta L = 2d\\cos i_1",
      "chapter": "物理光学",
      "topic": "干涉",
      "difficulty": "medium",
      "knowledge_tags": [
        "formula_080"
      ],
      "wrong_hint": {
        "type": "公式记忆",
        "message": "迈克尔逊干涉仪光程差的公式是\\Delta L = 2d\\cos i_1，请重点记忆。"
      }
    },
    {
      "id": "choice_274",
      "question": "以下哪个公式表示多光束干涉透射光强？",
      "options": [
        "A. I_T = \\frac{I_0}{1 + \\frac{4R}{(1-R)^2}\\sin^2\\frac{\\delta}{2}}",
        "B. l_{k+1} = l_k' - d_k",
        "C. D_l = \\frac{dl}{d\\lambda} = \\frac{m f}{d\\cos\\theta}",
        "D. \\Delta L = 2nh\\cos\\theta_2 + \\frac{\\lambda}{2}"
      ],
      "answer": "A",
      "explanation": "多光束干涉透射光强的公式为：I_T = \\frac{I_0}{1 + \\frac{4R}{(1-R)^2}\\sin^2\\frac{\\delta}{2}}",
      "chapter": "物理光学",
      "topic": "干涉",
      "difficulty": "medium",
      "knowledge_tags": [
        "formula_081"
      ],
      "wrong_hint": {
        "type": "公式记忆",
        "message": "多光束干涉透射光强的公式是I_T = \\frac{I_0}{1 + \\frac{4R}{(1-R)^2}\\sin^2\\frac{\\delta}{2}}，请重点记忆。"
      }
    },
    {
      "id": "choice_275",
      "question": "以下哪个公式表示法布里-珀罗条纹半宽度？",
      "options": [
        "A. \\varepsilon = \\frac{2(1-R)}{\\sqrt{R}}",
        "B. \\Delta L_{FC}' = L_F' - L_C'",
        "C. S = nl = \\frac{cl}{v} = ct",
        "D. \\Delta L = m\\lambda \\quad (m = 0, \\pm 1, \\pm 2, \\ldots)"
      ],
      "answer": "A",
      "explanation": "法布里-珀罗条纹半宽度的公式为：\\varepsilon = \\frac{2(1-R)}{\\sqrt{R}}",
      "chapter": "物理光学",
      "topic": "干涉",
      "difficulty": "medium",
      "knowledge_tags": [
        "formula_082"
      ],
      "wrong_hint": {
        "type": "公式记忆",
        "message": "法布里-珀罗条纹半宽度的公式是\\varepsilon = \\frac{2(1-R)}{\\sqrt{R}}，请重点记忆。"
      }
    },
    {
      "id": "choice_276",
      "question": "以下哪个公式表示法布里-珀罗色分辨本领？",
      "options": [
        "A. R_\\lambda = \\frac{\\lambda}{\\Delta\\lambda} = mN\\frac{\\pi\\sqrt{R}}{1-R}",
        "B. 500NA \\leq \\Gamma \\leq 1000NA",
        "C. I = I_0 \\left(\\frac{\\sin\\alpha}{\\alpha}\\right)^2, \\quad \\alpha = \\frac{\\pi a \\sin\\theta}{\\lambda}",
        "D. \\sigma = \\frac{0.61\\lambda}{NA}"
      ],
      "answer": "A",
      "explanation": "法布里-珀罗色分辨本领的公式为：R_\\lambda = \\frac{\\lambda}{\\Delta\\lambda} = mN\\frac{\\pi\\sqrt{R}}{1-R}",
      "chapter": "物理光学",
      "topic": "干涉",
      "difficulty": "medium",
      "knowledge_tags": [
        "formula_083"
      ],
      "wrong_hint": {
        "type": "公式记忆",
        "message": "法布里-珀罗色分辨本领的公式是R_\\lambda = \\frac{\\lambda}{\\Delta\\lambda} = mN\\frac{\\pi\\sqrt{R}}{1-R}，请重点记忆。"
      }
    },
    {
      "id": "choice_277",
      "question": "以下哪个公式表示条纹可见度？",
      "options": [
        "A. K = \\frac{I_{max} - I_{min}}{I_{max} + I_{min}}",
        "B. 2nh\\cos\\theta_2 = m\\lambda",
        "C. 2nh = \\left(m + \\frac{1}{2}\\right)\\lambda",
        "D. \\sigma = \\frac{0.61\\lambda}{NA}"
      ],
      "answer": "A",
      "explanation": "条纹可见度的公式为：K = \\frac{I_{max} - I_{min}}{I_{max} + I_{min}}",
      "chapter": "物理光学",
      "topic": "干涉",
      "difficulty": "medium",
      "knowledge_tags": [
        "formula_084"
      ],
      "wrong_hint": {
        "type": "公式记忆",
        "message": "条纹可见度的公式是K = \\frac{I_{max} - I_{min}}{I_{max} + I_{min}}，请重点记忆。"
      }
    },
    {
      "id": "choice_278",
      "question": "以下哪个公式表示相干长度？",
      "options": [
        "A. L_c = \\frac{\\lambda^2}{\\Delta\\lambda}",
        "B. d(\\sin\\theta_i + \\sin\\theta_m) = m\\lambda",
        "C. I = I_0 \\left(\\frac{\\sin\\alpha}{\\alpha}\\right)^2, \\quad \\alpha = \\frac{\\pi a \\sin\\theta}{\\lambda}",
        "D. \\Delta\\theta = \\frac{\\lambda}{a}"
      ],
      "answer": "A",
      "explanation": "相干长度的公式为：L_c = \\frac{\\lambda^2}{\\Delta\\lambda}",
      "chapter": "物理光学",
      "topic": "干涉",
      "difficulty": "medium",
      "knowledge_tags": [
        "formula_085"
      ],
      "wrong_hint": {
        "type": "公式记忆",
        "message": "相干长度的公式是L_c = \\frac{\\lambda^2}{\\Delta\\lambda}，请重点记忆。"
      }
    },
    {
      "id": "choice_279",
      "question": "以下哪个公式表示单缝夫琅禾费衍射光强？",
      "options": [
        "A. I = I_0 \\left(\\frac{\\sin\\alpha}{\\alpha}\\right)^2, \\quad \\alpha = \\frac{\\pi a \\sin\\theta}{\\lambda}",
        "B. l_{k+1} = l_k' - d_k",
        "C. \\Gamma = \\beta_{obj} \\cdot \\Gamma_{eye} = \\frac{250\\Delta}{f_{obj}' f_{eye}'}",
        "D. f' = -\\frac{f_1' f_2'}{\\Delta}"
      ],
      "answer": "A",
      "explanation": "单缝夫琅禾费衍射光强的公式为：I = I_0 \\left(\\frac{\\sin\\alpha}{\\alpha}\\right)^2, \\quad \\alpha = \\frac{\\pi a \\sin\\theta}{\\lambda}",
      "chapter": "物理光学",
      "topic": "衍射",
      "difficulty": "medium",
      "knowledge_tags": [
        "formula_086"
      ],
      "wrong_hint": {
        "type": "公式记忆",
        "message": "单缝夫琅禾费衍射光强的公式是I = I_0 \\left(\\frac{\\sin\\alpha}{\\alpha}\\right)^2, \\quad \\alpha = \\frac{\\pi a \\sin\\theta}{\\lambda}，请重点记忆。"
      }
    },
    {
      "id": "choice_280",
      "question": "以下哪个公式表示单缝衍射极小条件？",
      "options": [
        "A. a\\sin\\theta = m\\lambda \\quad (m = \\pm 1, \\pm 2, \\ldots)",
        "B. \\alpha \\gamma = \\beta",
        "C. E' = \\frac{1}{4} \\pi \\tau L \\left(\\frac{D}{f'}\\right)^2 \\cos^4 \\omega'",
        "D. n \\sin I = n' \\sin I'"
      ],
      "answer": "A",
      "explanation": "单缝衍射极小条件的公式为：a\\sin\\theta = m\\lambda \\quad (m = \\pm 1, \\pm 2, \\ldots)",
      "chapter": "物理光学",
      "topic": "衍射",
      "difficulty": "medium",
      "knowledge_tags": [
        "formula_087"
      ],
      "wrong_hint": {
        "type": "公式记忆",
        "message": "单缝衍射极小条件的公式是a\\sin\\theta = m\\lambda \\quad (m = \\pm 1, \\pm 2, \\ldots)，请重点记忆。"
      }
    },
    {
      "id": "choice_281",
      "question": "以下哪个公式表示单缝衍射半角宽度？",
      "options": [
        "A. \\Delta\\theta = \\frac{\\lambda}{a}",
        "B. k = \\frac{2\\pi}{\\lambda} = \\frac{\\omega}{v}",
        "C. \\alpha = \\frac{dl'}{dl} = \\frac{n'}{n} \\beta^2",
        "D. \\sigma = \\frac{0.61\\lambda}{NA}"
      ],
      "answer": "A",
      "explanation": "单缝衍射半角宽度的公式为：\\Delta\\theta = \\frac{\\lambda}{a}",
      "chapter": "物理光学",
      "topic": "衍射",
      "difficulty": "medium",
      "knowledge_tags": [
        "formula_088"
      ],
      "wrong_hint": {
        "type": "公式记忆",
        "message": "单缝衍射半角宽度的公式是\\Delta\\theta = \\frac{\\lambda}{a}，请重点记忆。"
      }
    },
    {
      "id": "choice_282",
      "question": "以下哪个公式表示矩孔衍射光强？",
      "options": [
        "A. I = I_0 \\left(\\frac{\\sin\\alpha}{\\alpha}\\right)^2 \\left(\\frac{\\sin\\beta}{\\beta}\\right)^2",
        "B. I = I_0 \\left(\\frac{\\sin\\alpha}{\\alpha}\\right)^2, \\quad \\alpha = \\frac{\\pi a \\sin\\theta}{\\lambda}",
        "C. \\delta = I_1 + I_2' - \\alpha",
        "D. \\Delta\\theta' = 2\\Delta\\theta"
      ],
      "answer": "A",
      "explanation": "矩孔衍射光强的公式为：I = I_0 \\left(\\frac{\\sin\\alpha}{\\alpha}\\right)^2 \\left(\\frac{\\sin\\beta}{\\beta}\\right)^2",
      "chapter": "物理光学",
      "topic": "衍射",
      "difficulty": "medium",
      "knowledge_tags": [
        "formula_089"
      ],
      "wrong_hint": {
        "type": "公式记忆",
        "message": "矩孔衍射光强的公式是I = I_0 \\left(\\frac{\\sin\\alpha}{\\alpha}\\right)^2 \\left(\\frac{\\sin\\beta}{\\beta}\\right)^2，请重点记忆。"
      }
    },
    {
      "id": "choice_283",
      "question": "以下哪个公式表示圆孔衍射艾里斑？",
      "options": [
        "A. \\theta = 1.22 \\frac{\\lambda}{D}",
        "B. \\Gamma = \\frac{250}{f'}",
        "C. r_s = \\frac{n_1\\cos\\theta_1 - n_2\\cos\\theta_2}{n_1\\cos\\theta_1 + n_2\\cos\\theta_2} = -\\frac{\\sin(\\theta_1 - \\theta_2)}{\\sin(\\theta_1 + \\theta_2)}",
        "D. K = \\frac{I_{max} - I_{min}}{I_{max} + I_{min}}"
      ],
      "answer": "A",
      "explanation": "圆孔衍射艾里斑的公式为：\\theta = 1.22 \\frac{\\lambda}{D}",
      "chapter": "物理光学",
      "topic": "衍射",
      "difficulty": "medium",
      "knowledge_tags": [
        "formula_090"
      ],
      "wrong_hint": {
        "type": "公式记忆",
        "message": "圆孔衍射艾里斑的公式是\\theta = 1.22 \\frac{\\lambda}{D}，请重点记忆。"
      }
    },
    {
      "id": "choice_284",
      "question": "以下哪个公式表示多缝衍射光强？",
      "options": [
        "A. I = I_0 \\left(\\frac{\\sin\\alpha}{\\alpha}\\right)^2 \\left(\\frac{\\sin N\\beta}{\\sin\\beta}\\right)^2",
        "B. d = \\frac{\\lambda}{|n_o - n_e|}",
        "C. \\delta T' = \\delta L' \\tan U'",
        "D. \\Delta\\theta' = 2\\Delta\\theta"
      ],
      "answer": "A",
      "explanation": "多缝衍射光强的公式为：I = I_0 \\left(\\frac{\\sin\\alpha}{\\alpha}\\right)^2 \\left(\\frac{\\sin N\\beta}{\\sin\\beta}\\right)^2",
      "chapter": "物理光学",
      "topic": "衍射",
      "difficulty": "medium",
      "knowledge_tags": [
        "formula_091"
      ],
      "wrong_hint": {
        "type": "公式记忆",
        "message": "多缝衍射光强的公式是I = I_0 \\left(\\frac{\\sin\\alpha}{\\alpha}\\right)^2 \\left(\\frac{\\sin N\\beta}{\\sin\\beta}\\right)^2，请重点记忆。"
      }
    },
    {
      "id": "choice_285",
      "question": "以下哪个公式表示光栅方程？",
      "options": [
        "A. d(\\sin\\theta_i + \\sin\\theta_m) = m\\lambda",
        "B. a\\sin\\theta = m\\lambda \\quad (m = \\pm 1, \\pm 2, \\ldots)",
        "C. \\Gamma = \\frac{250}{f'}",
        "D. \\Delta x = \\frac{\\lambda}{2n\\alpha}"
      ],
      "answer": "A",
      "explanation": "光栅方程的公式为：d(\\sin\\theta_i + \\sin\\theta_m) = m\\lambda",
      "chapter": "物理光学",
      "topic": "衍射",
      "difficulty": "medium",
      "knowledge_tags": [
        "formula_092"
      ],
      "wrong_hint": {
        "type": "公式记忆",
        "message": "光栅方程的公式是d(\\sin\\theta_i + \\sin\\theta_m) = m\\lambda，请重点记忆。"
      }
    },
    {
      "id": "choice_286",
      "question": "以下哪个公式表示光栅角色散？",
      "options": [
        "A. D_\\theta = \\frac{d\\theta}{d\\lambda} = \\frac{m}{d\\cos\\theta}",
        "B. I_T = \\frac{I_0}{1 + \\frac{4R}{(1-R)^2}\\sin^2\\frac{\\delta}{2}}",
        "C. l_{k+1} = l_k' - d_k",
        "D. \\nabla \\cdot \\mathbf{D} = \\rho, \\quad \\nabla \\cdot \\mathbf{B} = 0, \\quad \\nabla \\times \\mathbf{E} = -\\frac{\\partial \\mathbf{B}}{\\partial t}, \\quad \\nabla \\times \\mathbf{H} = \\mathbf{j} + \\frac{\\partial \\mathbf{D}}{\\partial t}"
      ],
      "answer": "A",
      "explanation": "光栅角色散的公式为：D_\\theta = \\frac{d\\theta}{d\\lambda} = \\frac{m}{d\\cos\\theta}",
      "chapter": "物理光学",
      "topic": "衍射",
      "difficulty": "medium",
      "knowledge_tags": [
        "formula_093"
      ],
      "wrong_hint": {
        "type": "公式记忆",
        "message": "光栅角色散的公式是D_\\theta = \\frac{d\\theta}{d\\lambda} = \\frac{m}{d\\cos\\theta}，请重点记忆。"
      }
    },
    {
      "id": "choice_287",
      "question": "以下哪个公式表示光栅线色散？",
      "options": [
        "A. D_l = \\frac{dl}{d\\lambda} = \\frac{m f}{d\\cos\\theta}",
        "B. \\delta = I_1 + I_2' - \\alpha",
        "C. x_m = \\frac{m\\lambda D}{d}",
        "D. \\theta = 1.22 \\frac{\\lambda}{D}"
      ],
      "answer": "A",
      "explanation": "光栅线色散的公式为：D_l = \\frac{dl}{d\\lambda} = \\frac{m f}{d\\cos\\theta}",
      "chapter": "物理光学",
      "topic": "衍射",
      "difficulty": "medium",
      "knowledge_tags": [
        "formula_094"
      ],
      "wrong_hint": {
        "type": "公式记忆",
        "message": "光栅线色散的公式是D_l = \\frac{dl}{d\\lambda} = \\frac{m f}{d\\cos\\theta}，请重点记忆。"
      }
    },
    {
      "id": "choice_288",
      "question": "以下哪个公式表示光栅色分辨本领？",
      "options": [
        "A. R = \\frac{\\lambda}{\\Delta\\lambda} = mN",
        "B. \\delta L = L' - l'",
        "C. \\sin I_m = \\frac{n'}{n}",
        "D. \\rho_m = \\sqrt{m\\lambda \\frac{Rb}{R+b}}"
      ],
      "answer": "A",
      "explanation": "光栅色分辨本领的公式为：R = \\frac{\\lambda}{\\Delta\\lambda} = mN",
      "chapter": "物理光学",
      "topic": "衍射",
      "difficulty": "medium",
      "knowledge_tags": [
        "formula_095"
      ],
      "wrong_hint": {
        "type": "公式记忆",
        "message": "光栅色分辨本领的公式是R = \\frac{\\lambda}{\\Delta\\lambda} = mN，请重点记忆。"
      }
    },
    {
      "id": "choice_289",
      "question": "以下哪个公式表示光栅自由光谱范围？",
      "options": [
        "A. \\Delta\\lambda = \\frac{\\lambda}{m}",
        "B. \\Phi = \\Phi_1 + \\Phi_2",
        "C. n y \\tan U = n' y' \\tan U'",
        "D. \\sin I_m = \\frac{n'}{n}"
      ],
      "answer": "A",
      "explanation": "光栅自由光谱范围的公式为：\\Delta\\lambda = \\frac{\\lambda}{m}",
      "chapter": "物理光学",
      "topic": "衍射",
      "difficulty": "medium",
      "knowledge_tags": [
        "formula_096"
      ],
      "wrong_hint": {
        "type": "公式记忆",
        "message": "光栅自由光谱范围的公式是\\Delta\\lambda = \\frac{\\lambda}{m}，请重点记忆。"
      }
    },
    {
      "id": "choice_290",
      "question": "以下哪个公式表示菲涅尔半波带半径？",
      "options": [
        "A. \\rho_m = \\sqrt{m\\lambda \\frac{Rb}{R+b}}",
        "B. I = I_0 \\left(\\frac{\\sin\\alpha}{\\alpha}\\right)^2 \\left(\\frac{\\sin\\beta}{\\beta}\\right)^2",
        "C. \\tan\\theta_B = \\frac{n_2}{n_1}",
        "D. I = I_0 \\cos^2\\theta"
      ],
      "answer": "A",
      "explanation": "菲涅尔半波带半径的公式为：\\rho_m = \\sqrt{m\\lambda \\frac{Rb}{R+b}}",
      "chapter": "物理光学",
      "topic": "衍射",
      "difficulty": "medium",
      "knowledge_tags": [
        "formula_097"
      ],
      "wrong_hint": {
        "type": "公式记忆",
        "message": "菲涅尔半波带半径的公式是\\rho_m = \\sqrt{m\\lambda \\frac{Rb}{R+b}}，请重点记忆。"
      }
    },
    {
      "id": "choice_291",
      "question": "以下哪个公式表示菲涅尔波带片焦距？",
      "options": [
        "A. \\frac{1}{R} + \\frac{1}{b} = \\frac{m\\lambda}{\\rho_m^2} = \\frac{1}{f}",
        "B. r_p = \\frac{n_2\\cos\\theta_1 - n_1\\cos\\theta_2}{n_2\\cos\\theta_1 + n_1\\cos\\theta_2} = \\frac{\\tan(\\theta_1 - \\theta_2)}{\\tan(\\theta_1 + \\theta_2)}",
        "C. \\Delta L = d \\left(1 - \\frac{1}{n}\\right)",
        "D. \\alpha \\gamma = \\beta"
      ],
      "answer": "A",
      "explanation": "菲涅尔波带片焦距的公式为：\\frac{1}{R} + \\frac{1}{b} = \\frac{m\\lambda}{\\rho_m^2} = \\frac{1}{f}",
      "chapter": "物理光学",
      "topic": "衍射",
      "difficulty": "medium",
      "knowledge_tags": [
        "formula_098"
      ],
      "wrong_hint": {
        "type": "公式记忆",
        "message": "菲涅尔波带片焦距的公式是\\frac{1}{R} + \\frac{1}{b} = \\frac{m\\lambda}{\\rho_m^2} = \\frac{1}{f}，请重点记忆。"
      }
    },
    {
      "id": "choice_292",
      "question": "以下哪个公式表示闪耀光栅方程？",
      "options": [
        "A. 2d\\sin\\theta_b = m\\lambda_b",
        "B. r_s = \\frac{n_1\\cos\\theta_1 - n_2\\cos\\theta_2}{n_1\\cos\\theta_1 + n_2\\cos\\theta_2} = -\\frac{\\sin(\\theta_1 - \\theta_2)}{\\sin(\\theta_1 + \\theta_2)}",
        "C. l_{k+1} = l_k' - d_k",
        "D. \\frac{n'}{l'} - \\frac{n}{l} = \\frac{n' - n}{r}"
      ],
      "answer": "A",
      "explanation": "闪耀光栅方程的公式为：2d\\sin\\theta_b = m\\lambda_b",
      "chapter": "物理光学",
      "topic": "衍射",
      "difficulty": "medium",
      "knowledge_tags": [
        "formula_099"
      ],
      "wrong_hint": {
        "type": "公式记忆",
        "message": "闪耀光栅方程的公式是2d\\sin\\theta_b = m\\lambda_b，请重点记忆。"
      }
    },
    {
      "id": "choice_293",
      "question": "以下哪个公式表示布拉格公式？",
      "options": [
        "A. 2d\\sin\\theta = m\\lambda",
        "B. \\Delta L = m\\lambda \\quad (m = 0, \\pm 1, \\pm 2, \\ldots)",
        "C. J = n u y = n' u' y'",
        "D. I_T = \\frac{I_0}{1 + \\frac{4R}{(1-R)^2}\\sin^2\\frac{\\delta}{2}}"
      ],
      "answer": "A",
      "explanation": "布拉格公式的公式为：2d\\sin\\theta = m\\lambda",
      "chapter": "物理光学",
      "topic": "衍射",
      "difficulty": "medium",
      "knowledge_tags": [
        "formula_100"
      ],
      "wrong_hint": {
        "type": "公式记忆",
        "message": "布拉格公式的公式是2d\\sin\\theta = m\\lambda，请重点记忆。"
      }
    },
    {
      "id": "choice_294",
      "question": "以下哪个公式表示马吕斯定律？",
      "options": [
        "A. I = I_0 \\cos^2\\theta",
        "B. J = n u y = n' u' y'",
        "C. \\Delta L = d \\left(1 - \\frac{1}{n}\\right)",
        "D. d = \\frac{\\lambda}{4|n_o - n_e|}"
      ],
      "answer": "A",
      "explanation": "马吕斯定律的公式为：I = I_0 \\cos^2\\theta",
      "chapter": "物理光学",
      "topic": "偏振",
      "difficulty": "medium",
      "knowledge_tags": [
        "formula_101"
      ],
      "wrong_hint": {
        "type": "公式记忆",
        "message": "马吕斯定律的公式是I = I_0 \\cos^2\\theta，请重点记忆。"
      }
    },
    {
      "id": "choice_295",
      "question": "以下哪个公式表示偏振度？",
      "options": [
        "A. P = \\frac{I_{max} - I_{min}}{I_{max} + I_{min}}",
        "B. d = \\frac{\\lambda}{2|n_o - n_e|}",
        "C. \\varepsilon = \\frac{2(1-R)}{\\sqrt{R}}",
        "D. v = \\frac{1}{\\sqrt{\\varepsilon\\mu}} = \\frac{c}{\\sqrt{\\varepsilon_r \\mu_r}} = \\frac{c}{n}"
      ],
      "answer": "A",
      "explanation": "偏振度的公式为：P = \\frac{I_{max} - I_{min}}{I_{max} + I_{min}}",
      "chapter": "物理光学",
      "topic": "偏振",
      "difficulty": "medium",
      "knowledge_tags": [
        "formula_102"
      ],
      "wrong_hint": {
        "type": "公式记忆",
        "message": "偏振度的公式是P = \\frac{I_{max} - I_{min}}{I_{max} + I_{min}}，请重点记忆。"
      }
    },
    {
      "id": "choice_296",
      "question": "以下哪个公式表示布儒斯特角？",
      "options": [
        "A. \\tan\\theta_B = \\frac{n_2}{n_1}",
        "B. \\gamma = \\frac{u'}{u} = \\frac{n}{n' \\beta}",
        "C. \\Delta L = d \\left(1 - \\frac{1}{n}\\right)",
        "D. 2nh = m\\lambda"
      ],
      "answer": "A",
      "explanation": "布儒斯特角的公式为：\\tan\\theta_B = \\frac{n_2}{n_1}",
      "chapter": "物理光学",
      "topic": "偏振",
      "difficulty": "medium",
      "knowledge_tags": [
        "formula_103"
      ],
      "wrong_hint": {
        "type": "公式记忆",
        "message": "布儒斯特角的公式是\\tan\\theta_B = \\frac{n_2}{n_1}，请重点记忆。"
      }
    },
    {
      "id": "choice_297",
      "question": "以下哪个公式表示菲涅尔公式s波反射率？",
      "options": [
        "A. r_s = \\frac{n_1\\cos\\theta_1 - n_2\\cos\\theta_2}{n_1\\cos\\theta_1 + n_2\\cos\\theta_2} = -\\frac{\\sin(\\theta_1 - \\theta_2)}{\\sin(\\theta_1 + \\theta_2)}",
        "B. n = \\sqrt{\\varepsilon_r \\mu_r} \\approx \\sqrt{\\varepsilon_r}",
        "C. \\sin I_m = \\frac{n'}{n}",
        "D. P = \\frac{I_{max} - I_{min}}{I_{max} + I_{min}}"
      ],
      "answer": "A",
      "explanation": "菲涅尔公式s波反射率的公式为：r_s = \\frac{n_1\\cos\\theta_1 - n_2\\cos\\theta_2}{n_1\\cos\\theta_1 + n_2\\cos\\theta_2} = -\\frac{\\sin(\\theta_1 - \\theta_2)}{\\sin(\\theta_1 + \\theta_2)}",
      "chapter": "物理光学",
      "topic": "偏振",
      "difficulty": "medium",
      "knowledge_tags": [
        "formula_104"
      ],
      "wrong_hint": {
        "type": "公式记忆",
        "message": "菲涅尔公式s波反射率的公式是r_s = \\frac{n_1\\cos\\theta_1 - n_2\\cos\\theta_2}{n_1\\cos\\theta_1 + n_2\\cos\\theta_2} = -\\frac{\\sin(\\theta_1 - \\theta_2)}{\\sin(\\theta_1 + \\theta_2)}，请重点记忆。"
      }
    },
    {
      "id": "choice_298",
      "question": "以下哪个公式表示菲涅尔公式p波反射率？",
      "options": [
        "A. r_p = \\frac{n_2\\cos\\theta_1 - n_1\\cos\\theta_2}{n_2\\cos\\theta_1 + n_1\\cos\\theta_2} = \\frac{\\tan(\\theta_1 - \\theta_2)}{\\tan(\\theta_1 + \\theta_2)}",
        "B. n y \\tan U = n' y' \\tan U'",
        "C. I = I_0 \\cos^2\\theta",
        "D. \\Phi = \\Phi_1 + \\Phi_2"
      ],
      "answer": "A",
      "explanation": "菲涅尔公式p波反射率的公式为：r_p = \\frac{n_2\\cos\\theta_1 - n_1\\cos\\theta_2}{n_2\\cos\\theta_1 + n_1\\cos\\theta_2} = \\frac{\\tan(\\theta_1 - \\theta_2)}{\\tan(\\theta_1 + \\theta_2)}",
      "chapter": "物理光学",
      "topic": "偏振",
      "difficulty": "medium",
      "knowledge_tags": [
        "formula_105"
      ],
      "wrong_hint": {
        "type": "公式记忆",
        "message": "菲涅尔公式p波反射率的公式是r_p = \\frac{n_2\\cos\\theta_1 - n_1\\cos\\theta_2}{n_2\\cos\\theta_1 + n_1\\cos\\theta_2} = \\frac{\\tan(\\theta_1 - \\theta_2)}{\\tan(\\theta_1 + \\theta_2)}，请重点记忆。"
      }
    },
    {
      "id": "choice_299",
      "question": "以下哪个公式表示波片相位延迟？",
      "options": [
        "A. \\delta = \\frac{2\\pi}{\\lambda}(n_o - n_e)d",
        "B. \\sin\\frac{\\delta_m + \\alpha}{2} = n \\sin\\frac{\\alpha}{2}",
        "C. \\Delta x = \\frac{\\lambda D}{d}",
        "D. \\sigma = \\frac{0.61\\lambda}{NA}"
      ],
      "answer": "A",
      "explanation": "波片相位延迟的公式为：\\delta = \\frac{2\\pi}{\\lambda}(n_o - n_e)d",
      "chapter": "物理光学",
      "topic": "偏振",
      "difficulty": "medium",
      "knowledge_tags": [
        "formula_106"
      ],
      "wrong_hint": {
        "type": "公式记忆",
        "message": "波片相位延迟的公式是\\delta = \\frac{2\\pi}{\\lambda}(n_o - n_e)d，请重点记忆。"
      }
    },
    {
      "id": "choice_300",
      "question": "以下哪个公式表示四分之一波片？",
      "options": [
        "A. d = \\frac{\\lambda}{4|n_o - n_e|}",
        "B. \\varepsilon = \\frac{0.006}{f_{eye}} \\times 206265''",
        "C. \\delta T' = \\delta L' \\tan U'",
        "D. R_\\lambda = \\frac{\\lambda}{\\Delta\\lambda} = mN\\frac{\\pi\\sqrt{R}}{1-R}"
      ],
      "answer": "A",
      "explanation": "四分之一波片的公式为：d = \\frac{\\lambda}{4|n_o - n_e|}",
      "chapter": "物理光学",
      "topic": "偏振",
      "difficulty": "medium",
      "knowledge_tags": [
        "formula_107"
      ],
      "wrong_hint": {
        "type": "公式记忆",
        "message": "四分之一波片的公式是d = \\frac{\\lambda}{4|n_o - n_e|}，请重点记忆。"
      }
    },
    {
      "id": "choice_301",
      "question": "以下哪个公式表示二分之一波片？",
      "options": [
        "A. d = \\frac{\\lambda}{2|n_o - n_e|}",
        "B. \\frac{f'}{f} = -\\frac{n'}{n}",
        "C. \\frac{1}{R} + \\frac{1}{b} = \\frac{m\\lambda}{\\rho_m^2} = \\frac{1}{f}",
        "D. d(\\sin\\theta_i + \\sin\\theta_m) = m\\lambda"
      ],
      "answer": "A",
      "explanation": "二分之一波片的公式为：d = \\frac{\\lambda}{2|n_o - n_e|}",
      "chapter": "物理光学",
      "topic": "偏振",
      "difficulty": "medium",
      "knowledge_tags": [
        "formula_108"
      ],
      "wrong_hint": {
        "type": "公式记忆",
        "message": "二分之一波片的公式是d = \\frac{\\lambda}{2|n_o - n_e|}，请重点记忆。"
      }
    },
    {
      "id": "choice_302",
      "question": "以下哪个公式表示全波片？",
      "options": [
        "A. d = \\frac{\\lambda}{|n_o - n_e|}",
        "B. P = \\frac{I_{max} - I_{min}}{I_{max} + I_{min}}",
        "C. \\gamma = \\frac{u'}{u} = \\frac{n}{n' \\beta}",
        "D. \\frac{1}{R} + \\frac{1}{b} = \\frac{m\\lambda}{\\rho_m^2} = \\frac{1}{f}"
      ],
      "answer": "A",
      "explanation": "全波片的公式为：d = \\frac{\\lambda}{|n_o - n_e|}",
      "chapter": "物理光学",
      "topic": "偏振",
      "difficulty": "medium",
      "knowledge_tags": [
        "formula_109"
      ],
      "wrong_hint": {
        "type": "公式记忆",
        "message": "全波片的公式是d = \\frac{\\lambda}{|n_o - n_e|}，请重点记忆。"
      }
    },
    {
      "id": "choice_303",
      "question": "以下哪个公式表示旋光角度？",
      "options": [
        "A. \\theta = \\alpha l",
        "B. \\Delta L = 2nh\\cos\\theta_2 + \\frac{\\lambda}{2}",
        "C. A = R - P = \\frac{1}{l_r} - \\frac{1}{l_p}",
        "D. d(\\sin\\theta_i + \\sin\\theta_m) = m\\lambda"
      ],
      "answer": "A",
      "explanation": "旋光角度的公式为：\\theta = \\alpha l",
      "chapter": "物理光学",
      "topic": "偏振",
      "difficulty": "medium",
      "knowledge_tags": [
        "formula_110"
      ],
      "wrong_hint": {
        "type": "公式记忆",
        "message": "旋光角度的公式是\\theta = \\alpha l，请重点记忆。"
      }
    },
    {
      "id": "choice_304",
      "question": "以下哪个公式表示法拉第旋转角？",
      "options": [
        "A. \\theta = V B l",
        "B. \\delta = \\frac{2\\pi}{\\lambda}(n_o - n_e)d",
        "C. P = \\frac{I_{max} - I_{min}}{I_{max} + I_{min}}",
        "D. \\Delta L = m\\lambda \\quad (m = 0, \\pm 1, \\pm 2, \\ldots)"
      ],
      "answer": "A",
      "explanation": "法拉第旋转角的公式为：\\theta = V B l",
      "chapter": "物理光学",
      "topic": "偏振",
      "difficulty": "medium",
      "knowledge_tags": [
        "formula_111"
      ],
      "wrong_hint": {
        "type": "公式记忆",
        "message": "法拉第旋转角的公式是\\theta = V B l，请重点记忆。"
      }
    },
    {
      "id": "choice_305",
      "question": "以下哪个公式表示两个垂直振动合成？",
      "options": [
        "A. \\frac{x^2}{A_1^2} + \\frac{y^2}{A_2^2} - \\frac{2xy}{A_1 A_2}\\cos\\delta = \\sin^2\\delta",
        "B. \\delta = \\frac{2\\pi}{\\lambda} \\Delta L = k \\Delta L",
        "C. v = \\frac{1}{\\sqrt{\\varepsilon\\mu}} = \\frac{c}{\\sqrt{\\varepsilon_r \\mu_r}} = \\frac{c}{n}",
        "D. W < \\frac{\\lambda}{4}"
      ],
      "answer": "A",
      "explanation": "两个垂直振动合成的公式为：\\frac{x^2}{A_1^2} + \\frac{y^2}{A_2^2} - \\frac{2xy}{A_1 A_2}\\cos\\delta = \\sin^2\\delta",
      "chapter": "物理光学",
      "topic": "偏振",
      "difficulty": "medium",
      "knowledge_tags": [
        "formula_112"
      ],
      "wrong_hint": {
        "type": "公式记忆",
        "message": "两个垂直振动合成的公式是\\frac{x^2}{A_1^2} + \\frac{y^2}{A_2^2} - \\frac{2xy}{A_1 A_2}\\cos\\delta = \\sin^2\\delta，请重点记忆。"
      }
    }
  ]
};
