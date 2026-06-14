module.exports = {
  "metadata": {
    "title": "浙工大光学选择题题库",
    "description": "从光学笔记和课后习题中提取设计的选择题和概念判断题",
    "total_questions": 70,
    "geo_optics_count": 37,
    "phy_optics_count": 33,
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
    }
  ]
};
