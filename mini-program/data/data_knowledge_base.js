module.exports = {
  "source": "专业课笔记本.pdf (pages 2-110)",
  "extraction_date": "2026-06-14",
  "formulas": [
    {
      "id": "formula_001",
      "name": "折射定律",
      "latex": "n \\sin I = n' \\sin I'",
      "description": "入射光线、反射光线和法线在同一平面内，入射角正弦与折射角正弦之比等于两种介质折射率之比",
      "chapter": "几何光学",
      "topic": "反射与折射",
      "variables": {
        "n": "入射介质折射率",
        "I": "入射角",
        "n'": "折射介质折射率",
        "I'": "折射角"
      }
    },
    {
      "id": "formula_002",
      "name": "反射定律",
      "latex": "I = -I''",
      "description": "反射角等于入射角，符号相反表示在法线两侧",
      "chapter": "几何光学",
      "topic": "反射与折射",
      "variables": {
        "I": "入射角",
        "I''": "反射角"
      }
    },
    {
      "id": "formula_003",
      "name": "全反射临界角",
      "latex": "\\sin I_m = \\frac{n'}{n}",
      "description": "光从光密介质射向光疏介质时，折射角为90°时的入射角",
      "chapter": "几何光学",
      "topic": "反射与折射",
      "variables": {
        "I_m": "临界角",
        "n": "光密介质折射率",
        "n'": "光疏介质折射率"
      }
    },
    {
      "id": "formula_004",
      "name": "费马原理光程",
      "latex": "S = nl = \\frac{cl}{v} = ct",
      "description": "光在介质中传播的几何路程与折射率的乘积，等于光以真空速度传播相同时间所走过的距离",
      "chapter": "几何光学",
      "topic": "费马原理",
      "variables": {
        "S": "光程",
        "n": "折射率",
        "l": "几何路程",
        "c": "真空中光速",
        "v": "介质中光速",
        "t": "传播时间"
      }
    },
    {
      "id": "formula_005",
      "name": "球面折射物像位置关系",
      "latex": "\\frac{n'}{l'} - \\frac{n}{l} = \\frac{n' - n}{r}",
      "description": "单球面折射的物像位置公式，适用于近轴光线",
      "chapter": "几何光学",
      "topic": "近轴光学",
      "variables": {
        "n": "物方折射率",
        "n'": "像方折射率",
        "l": "物距",
        "l'": "像距",
        "r": "球面曲率半径"
      }
    },
    {
      "id": "formula_006",
      "name": "垂轴放大率",
      "latex": "\\beta = \\frac{y'}{y} = \\frac{n l'}{n' l}",
      "description": "像高与物高之比，决定像的放大缩小和正倒",
      "chapter": "几何光学",
      "topic": "近轴光学",
      "variables": {
        "\\beta": "垂轴放大率",
        "y'": "像高",
        "y": "物高",
        "n": "物方折射率",
        "n'": "像方折射率",
        "l": "物距",
        "l'": "像距"
      }
    },
    {
      "id": "formula_007",
      "name": "轴向放大率",
      "latex": "\\alpha = \\frac{dl'}{dl} = \\frac{n'}{n} \\beta^2",
      "description": "像点沿光轴移动量与物点沿光轴移动量之比",
      "chapter": "几何光学",
      "topic": "近轴光学",
      "variables": {
        "\\alpha": "轴向放大率",
        "dl'": "像点移动量",
        "dl": "物点移动量",
        "n": "物方折射率",
        "n'": "像方折射率",
        "\\beta": "垂轴放大率"
      }
    },
    {
      "id": "formula_008",
      "name": "角放大率",
      "latex": "\\gamma = \\frac{u'}{u} = \\frac{n}{n' \\beta}",
      "description": "共轭光线与光轴夹角之比，表示光学系统会聚或发散光束的能力",
      "chapter": "几何光学",
      "topic": "近轴光学",
      "variables": {
        "\\gamma": "角放大率",
        "u'": "像方孔径角",
        "u": "物方孔径角",
        "n": "物方折射率",
        "n'": "像方折射率",
        "\\beta": "垂轴放大率"
      }
    },
    {
      "id": "formula_009",
      "name": "拉格朗日-赫姆霍兹不变量",
      "latex": "J = n u y = n' u' y'",
      "description": "近轴光学中，沿光轴传播的光束其nuy乘积保持不变",
      "chapter": "几何光学",
      "topic": "近轴光学",
      "variables": {
        "J": "拉赫不变量",
        "n": "折射率",
        "u": "孔径角",
        "y": "物高",
        "n'": "像方折射率",
        "u'": "像方孔径角",
        "y'": "像高"
      }
    },
    {
      "id": "formula_010",
      "name": "阿贝不变量",
      "latex": "Q = n'\\left(\\frac{1}{r} - \\frac{1}{l'}\\right) = n\\left(\\frac{1}{r} - \\frac{1}{l}\\right)",
      "description": "单球面折射中不随光线方向变化的量",
      "chapter": "几何光学",
      "topic": "近轴光学",
      "variables": {
        "Q": "阿贝不变量",
        "n": "物方折射率",
        "n'": "像方折射率",
        "l": "物距",
        "l'": "像距",
        "r": "球面半径"
      }
    },
    {
      "id": "formula_011",
      "name": "球面反射镜成像",
      "latex": "\\frac{1}{l'} + \\frac{1}{l} = \\frac{2}{r}",
      "description": "球面反射镜的物像位置关系，n'=-n",
      "chapter": "几何光学",
      "topic": "近轴光学",
      "variables": {
        "l": "物距",
        "l'": "像距",
        "r": "球面曲率半径"
      }
    },
    {
      "id": "formula_012",
      "name": "共轴球面系统过渡公式",
      "latex": "l_{k+1} = l_k' - d_k",
      "description": "前一面的像距到下一面物距的过渡关系，d为两面顶点间距",
      "chapter": "几何光学",
      "topic": "近轴光学",
      "variables": {
        "l_{k+1}": "第k+1面物距",
        "l_k'": "第k面像距",
        "d_k": "第k到k+1面间距"
      }
    },
    {
      "id": "formula_013",
      "name": "共轴系统总垂轴放大率",
      "latex": "\\beta = \\beta_1 \\beta_2 \\cdots \\beta_k",
      "description": "共轴球面系统总垂轴放大率等于各面垂轴放大率之积",
      "chapter": "几何光学",
      "topic": "近轴光学",
      "variables": {
        "\\beta": "总垂轴放大率",
        "\\beta_i": "第i面垂轴放大率"
      }
    },
    {
      "id": "formula_014",
      "name": "牛顿公式",
      "latex": "x x' = f f'",
      "description": "以焦点为原点的物像位置关系，适用于理想光学系统",
      "chapter": "几何光学",
      "topic": "理想光学系统",
      "variables": {
        "x": "物点到物方焦点的距离",
        "x'": "像点到像方焦点的距离",
        "f": "物方焦距",
        "f'": "像方焦距"
      }
    },
    {
      "id": "formula_015",
      "name": "高斯公式",
      "latex": "\\frac{1}{f'} = \\frac{1}{l'} - \\frac{1}{l}",
      "description": "以主点为原点的物像位置关系，最常用的理想光学系统成像公式",
      "chapter": "几何光学",
      "topic": "理想光学系统",
      "variables": {
        "f'": "像方焦距",
        "l": "物距（以物方主点为原点）",
        "l'": "像距（以像方主点为原点）"
      }
    },
    {
      "id": "formula_016",
      "name": "理想光学系统垂轴放大率",
      "latex": "\\beta = -\\frac{f}{x} = -\\frac{x'}{f'} = \\frac{n l'}{n' l}",
      "description": "理想光学系统的垂轴放大率，与物像位置及焦距有关",
      "chapter": "几何光学",
      "topic": "理想光学系统",
      "variables": {
        "\\beta": "垂轴放大率",
        "f": "物方焦距",
        "f'": "像方焦距",
        "x": "物点到物方焦点距离",
        "x'": "像点到像方焦点距离",
        "l": "物距",
        "l'": "像距"
      }
    },
    {
      "id": "formula_017",
      "name": "理想光学系统轴向放大率",
      "latex": "\\alpha = \\frac{n'}{n} \\beta^2",
      "description": "理想光学系统轴向放大率与垂轴放大率平方成正比",
      "chapter": "几何光学",
      "topic": "理想光学系统",
      "variables": {
        "\\alpha": "轴向放大率",
        "n": "物方折射率",
        "n'": "像方折射率",
        "\\beta": "垂轴放大率"
      }
    },
    {
      "id": "formula_018",
      "name": "理想光学系统角放大率",
      "latex": "\\gamma = \\frac{\\tan U'}{\\tan U} = \\frac{n}{n' \\beta}",
      "description": "理想光学系统角放大率，望远镜中视觉放大率等于角放大率",
      "chapter": "几何光学",
      "topic": "理想光学系统",
      "variables": {
        "\\gamma": "角放大率",
        "U": "物方孔径角",
        "U'": "像方孔径角",
        "n": "物方折射率",
        "n'": "像方折射率",
        "\\beta": "垂轴放大率"
      }
    },
    {
      "id": "formula_019",
      "name": "放大率关系",
      "latex": "\\alpha \\gamma = \\beta",
      "description": "三种放大率之间的基本关系",
      "chapter": "几何光学",
      "topic": "理想光学系统",
      "variables": {
        "\\alpha": "轴向放大率",
        "\\gamma": "角放大率",
        "\\beta": "垂轴放大率"
      }
    },
    {
      "id": "formula_020",
      "name": "理想光学系统拉赫公式",
      "latex": "n y \\tan U = n' y' \\tan U'",
      "description": "理想光学系统中拉格朗日不变量的推广形式",
      "chapter": "几何光学",
      "topic": "理想光学系统",
      "variables": {
        "n": "物方折射率",
        "y": "物高",
        "U": "物方孔径角",
        "n'": "像方折射率",
        "y'": "像高",
        "U'": "像方孔径角"
      }
    },
    {
      "id": "formula_021",
      "name": "两焦距关系",
      "latex": "\\frac{f'}{f} = -\\frac{n'}{n}",
      "description": "理想光学系统物方焦距与像方焦距的关系",
      "chapter": "几何光学",
      "topic": "理想光学系统",
      "variables": {
        "f'": "像方焦距",
        "f": "物方焦距",
        "n": "物方折射率",
        "n'": "像方折射率"
      }
    },
    {
      "id": "formula_022",
      "name": "光学间隔",
      "latex": "\\Delta = d - f_1' + f_2",
      "description": "两个光组之间的光学间隔，用于组合系统计算",
      "chapter": "几何光学",
      "topic": "理想光学系统",
      "variables": {
        "\\Delta": "光学间隔",
        "d": "两光组主点间距",
        "f_1'": "第一光组像方焦距",
        "f_2": "第二光组物方焦距"
      }
    },
    {
      "id": "formula_023",
      "name": "组合系统焦距",
      "latex": "f' = -\\frac{f_1' f_2'}{\\Delta}",
      "description": "两个光组组合后的等效焦距",
      "chapter": "几何光学",
      "topic": "理想光学系统",
      "variables": {
        "f'": "组合系统像方焦距",
        "f_1'": "第一光组像方焦距",
        "f_2'": "第二光组像方焦距",
        "\\Delta": "光学间隔"
      }
    },
    {
      "id": "formula_024",
      "name": "光焦度",
      "latex": "\\Phi = \\frac{1}{f'}",
      "description": "光学系统会聚或发散能力的度量，单位为屈光度(D)",
      "chapter": "几何光学",
      "topic": "理想光学系统",
      "variables": {
        "\\Phi": "光焦度",
        "f'": "像方焦距"
      }
    },
    {
      "id": "formula_025",
      "name": "密接薄透镜组光焦度",
      "latex": "\\Phi = \\Phi_1 + \\Phi_2",
      "description": "两个紧密接触的薄透镜组合后的总光焦度",
      "chapter": "几何光学",
      "topic": "理想光学系统",
      "variables": {
        "\\Phi": "总光焦度",
        "\\Phi_1": "第一透镜光焦度",
        "\\Phi_2": "第二透镜光焦度"
      }
    },
    {
      "id": "formula_026",
      "name": "节点角放大率",
      "latex": "\\gamma = +1",
      "description": "节点处角放大率等于1，入射光线与出射光线平行",
      "chapter": "几何光学",
      "topic": "理想光学系统",
      "variables": {
        "\\gamma": "角放大率"
      }
    },
    {
      "id": "formula_027",
      "name": "平面镜成像放大率",
      "latex": "\\beta = +1",
      "description": "平面镜成正立等大虚像，放大率为1",
      "chapter": "几何光学",
      "topic": "平面与平面系统",
      "variables": {
        "\\beta": "垂轴放大率"
      }
    },
    {
      "id": "formula_028",
      "name": "平面镜旋转特性",
      "latex": "\\Delta\\theta' = 2\\Delta\\theta",
      "description": "平面镜转动α角时，反射光线方向改变2α角",
      "chapter": "几何光学",
      "topic": "平面与平面系统",
      "variables": {
        "\\Delta\\theta'": "反射光线改变角度",
        "\\Delta\\theta": "平面镜转动角度"
      }
    },
    {
      "id": "formula_029",
      "name": "双平面镜出射角",
      "latex": "\\beta = 2\\alpha",
      "description": "双平面镜夹角为α时，出射光线与入射光线的夹角为2α",
      "chapter": "几何光学",
      "topic": "平面与平面系统",
      "variables": {
        "\\beta": "出射光线与入射光线夹角",
        "\\alpha": "双平面镜夹角"
      }
    },
    {
      "id": "formula_030",
      "name": "平行平板侧向位移",
      "latex": "\\Delta T = d \\sin I_1 \\left(1 - \\frac{\\cos I_1}{n \\cos I_2}\\right)",
      "description": "光线通过平行平板后产生的侧向位移",
      "chapter": "几何光学",
      "topic": "平面与平面系统",
      "variables": {
        "\\Delta T": "侧向位移",
        "d": "平板厚度",
        "I_1": "入射角",
        "I_2": "折射角",
        "n": "平板折射率"
      }
    },
    {
      "id": "formula_031",
      "name": "平行平板轴向位移",
      "latex": "\\Delta L = d \\left(1 - \\frac{1}{n}\\right)",
      "description": "近轴条件下光线通过平行平板后的轴向位移",
      "chapter": "几何光学",
      "topic": "平面与平面系统",
      "variables": {
        "\\Delta L": "轴向位移",
        "d": "平板厚度",
        "n": "平板折射率"
      }
    },
    {
      "id": "formula_032",
      "name": "折射棱镜偏向角",
      "latex": "\\delta = I_1 + I_2' - \\alpha",
      "description": "折射棱镜的偏向角等于两个折射面偏折角之和减去棱镜顶角",
      "chapter": "几何光学",
      "topic": "平面与平面系统",
      "variables": {
        "\\delta": "偏向角",
        "I_1": "第一面入射角",
        "I_2'": "第二面出射角",
        "\\alpha": "棱镜顶角"
      }
    },
    {
      "id": "formula_033",
      "name": "最小偏向角",
      "latex": "\\sin\\frac{\\delta_m + \\alpha}{2} = n \\sin\\frac{\\alpha}{2}",
      "description": "对称光路时偏向角最小，常用于测量折射率",
      "chapter": "几何光学",
      "topic": "平面与平面系统",
      "variables": {
        "\\delta_m": "最小偏向角",
        "\\alpha": "棱镜顶角",
        "n": "棱镜折射率"
      }
    },
    {
      "id": "formula_034",
      "name": "光楔偏向角",
      "latex": "\\delta = \\alpha (n - 1)",
      "description": "顶角很小的折射棱镜的偏向角近似公式",
      "chapter": "几何光学",
      "topic": "平面与平面系统",
      "variables": {
        "\\delta": "偏向角",
        "\\alpha": "光楔顶角",
        "n": "折射率"
      }
    },
    {
      "id": "formula_035",
      "name": "渐晕系数",
      "latex": "K = \\frac{D_{\\omega}}{D}",
      "description": "轴外点光束宽度与轴上点光束宽度之比，K≥50%为可用",
      "chapter": "几何光学",
      "topic": "光阑与景深",
      "variables": {
        "K": "渐晕系数",
        "D_{\\omega}": "轴外点光束直径",
        "D": "轴上点光束直径"
      }
    },
    {
      "id": "formula_036",
      "name": "远景景深",
      "latex": "\\Delta_1 = \\frac{P^2 \\varepsilon}{2a - P \\varepsilon}",
      "description": "能成清晰像的最远物面到对准平面的距离",
      "chapter": "几何光学",
      "topic": "光阑与景深",
      "variables": {
        "\\Delta_1": "远景景深",
        "P": "对准平面距离",
        "\\varepsilon": "人眼极限分辨角",
        "a": "入瞳半径"
      }
    },
    {
      "id": "formula_037",
      "name": "近景景深",
      "latex": "\\Delta_2 = \\frac{P^2 \\varepsilon}{2a + P \\varepsilon}",
      "description": "能成清晰像的最近物面到对准平面的距离",
      "chapter": "几何光学",
      "topic": "光阑与景深",
      "variables": {
        "\\Delta_2": "近景景深",
        "P": "对准平面距离",
        "\\varepsilon": "人眼极限分辨角",
        "a": "入瞳半径"
      }
    },
    {
      "id": "formula_038",
      "name": "总景深",
      "latex": "\\Delta = \\Delta_1 + \\Delta_2 = \\frac{4aP^2\\varepsilon}{4a^2 - P^2\\varepsilon^2}",
      "description": "远景景深与近景景深之和",
      "chapter": "几何光学",
      "topic": "光阑与景深",
      "variables": {
        "\\Delta": "总景深",
        "\\Delta_1": "远景景深",
        "\\Delta_2": "近景景深",
        "a": "入瞳半径",
        "P": "对准平面距离",
        "\\varepsilon": "人眼极限分辨角"
      }
    },
    {
      "id": "formula_039",
      "name": "入瞳直径与孔径角",
      "latex": "\\tan U = \\frac{a}{P} = \\frac{D}{2P}",
      "description": "物方孔径角与入瞳直径和对准平面距离的关系",
      "chapter": "几何光学",
      "topic": "光阑与景深",
      "variables": {
        "U": "物方孔径角",
        "a": "入瞳半径",
        "P": "对准平面距离",
        "D": "入瞳直径"
      }
    },
    {
      "id": "formula_040",
      "name": "轴向球差",
      "latex": "\\delta L = L' - l'",
      "description": "轴上点不同孔径角光线成像位置与近轴像点的轴向偏差",
      "chapter": "几何光学",
      "topic": "像差理论",
      "variables": {
        "\\delta L": "轴向球差",
        "L'": "实际光线像距",
        "l'": "近轴光线像距"
      }
    },
    {
      "id": "formula_041",
      "name": "垂轴球差",
      "latex": "\\delta T' = \\delta L' \\tan U'",
      "description": "轴向球差在高斯像面上产生的弥散斑半径",
      "chapter": "几何光学",
      "topic": "像差理论",
      "variables": {
        "\\delta T'": "垂轴球差",
        "\\delta L'": "轴向球差",
        "U'": "像方孔径角"
      }
    },
    {
      "id": "formula_042",
      "name": "波像差与几何像差关系",
      "latex": "W = \\int n \\sin U \\cdot \\delta L \\, dU",
      "description": "实际波面与理想波面在出瞳处的光程差",
      "chapter": "几何光学",
      "topic": "像差理论",
      "variables": {
        "W": "波像差",
        "n": "折射率",
        "U": "孔径角",
        "\\delta L": "轴向球差"
      }
    },
    {
      "id": "formula_043",
      "name": "瑞利判据",
      "latex": "W < \\frac{\\lambda}{4}",
      "description": "当波像差小于四分之一波长时，认为成像完善",
      "chapter": "几何光学",
      "topic": "像差理论",
      "variables": {
        "W": "波像差",
        "\\lambda": "波长"
      }
    },
    {
      "id": "formula_044",
      "name": "位置色差",
      "latex": "\\Delta L_{FC}' = L_F' - L_C'",
      "description": "F光与C光的近轴像点位置之差",
      "chapter": "几何光学",
      "topic": "像差理论",
      "variables": {
        "\\Delta L_{FC}'": "位置色差",
        "L_F'": "F光像距",
        "L_C'": "C光像距"
      }
    },
    {
      "id": "formula_045",
      "name": "波色差",
      "latex": "W_{FC} = W_F - W_C = \\sum (D - d) \\Delta n",
      "description": "F光与C光在出瞳处的波面光程差",
      "chapter": "几何光学",
      "topic": "像差理论",
      "variables": {
        "W_{FC}": "波色差",
        "D": "光线在介质中的几何路程",
        "d": "近轴光线路程",
        "\\Delta n": "介质色散"
      }
    },
    {
      "id": "formula_046",
      "name": "眼睛调节能力",
      "latex": "A = R - P = \\frac{1}{l_r} - \\frac{1}{l_p}",
      "description": "眼睛远点与近点倒数之差，单位为屈光度(D)",
      "chapter": "几何光学",
      "topic": "眼睛与视觉",
      "variables": {
        "A": "调节能力",
        "R": "远点屈光度",
        "P": "近点屈光度",
        "l_r": "远点距离",
        "l_p": "近点距离"
      }
    },
    {
      "id": "formula_047",
      "name": "眼睛视角分辨率",
      "latex": "\\varepsilon = \\frac{0.006}{f_{eye}} \\times 206265''",
      "description": "人眼能分辨的最小视角，约1角分",
      "chapter": "几何光学",
      "topic": "眼睛与视觉",
      "variables": {
        "\\varepsilon": "视角分辨率",
        "f_{eye}": "眼睛焦距"
      }
    },
    {
      "id": "formula_048",
      "name": "放大镜视觉放大率",
      "latex": "\\Gamma = \\frac{250}{f'}",
      "description": "眼睛调焦在无限远时，放大镜的视觉放大率（f'单位为mm）",
      "chapter": "几何光学",
      "topic": "放大镜与显微镜",
      "variables": {
        "\\Gamma": "视觉放大率",
        "f'": "放大镜焦距(mm)"
      }
    },
    {
      "id": "formula_049",
      "name": "显微镜总视觉放大率",
      "latex": "\\Gamma = \\beta_{obj} \\cdot \\Gamma_{eye} = \\frac{250\\Delta}{f_{obj}' f_{eye}'}",
      "description": "显微镜物镜垂轴放大率与目镜视觉放大率之积",
      "chapter": "几何光学",
      "topic": "放大镜与显微镜",
      "variables": {
        "\\Gamma": "总视觉放大率",
        "\\beta_{obj}": "物镜垂轴放大率",
        "\\Gamma_{eye}": "目镜视觉放大率",
        "\\Delta": "光学筒长",
        "f_{obj}'": "物镜焦距",
        "f_{eye}'": "目镜焦距"
      }
    },
    {
      "id": "formula_050",
      "name": "显微镜数值孔径",
      "latex": "NA = n \\sin u",
      "description": "显微镜物方孔径角的正弦与物方介质折射率之积",
      "chapter": "几何光学",
      "topic": "放大镜与显微镜",
      "variables": {
        "NA": "数值孔径",
        "n": "物方介质折射率",
        "u": "物方孔径角"
      }
    },
    {
      "id": "formula_051",
      "name": "显微镜分辨率（瑞利）",
      "latex": "\\sigma = \\frac{0.61\\lambda}{NA}",
      "description": "瑞利判据下显微镜能分辨的最小距离",
      "chapter": "几何光学",
      "topic": "放大镜与显微镜",
      "variables": {
        "\\sigma": "分辨极限",
        "\\lambda": "波长",
        "NA": "数值孔径"
      }
    },
    {
      "id": "formula_052",
      "name": "显微镜分辨率（道威）",
      "latex": "\\sigma = \\frac{0.5\\lambda}{NA} = \\frac{0.5\\lambda}{n \\sin u}",
      "description": "道威判据下显微镜能分辨的最小距离，更符合实际",
      "chapter": "几何光学",
      "topic": "放大镜与显微镜",
      "variables": {
        "\\sigma": "分辨极限",
        "\\lambda": "波长",
        "NA": "数值孔径",
        "n": "折射率",
        "u": "孔径角"
      }
    },
    {
      "id": "formula_053",
      "name": "显微镜有效放大率",
      "latex": "500NA \\leq \\Gamma \\leq 1000NA",
      "description": "满足人眼分辨要求的最小和合适视觉放大率范围",
      "chapter": "几何光学",
      "topic": "放大镜与显微镜",
      "variables": {
        "\\Gamma": "视觉放大率",
        "NA": "数值孔径"
      }
    },
    {
      "id": "formula_054",
      "name": "望远镜视觉放大率",
      "latex": "\\Gamma = -\\frac{f_{obj}'}{f_{eye}'} = \\frac{1}{\\beta}",
      "description": "望远镜角放大率等于物镜焦距与目镜焦距之比",
      "chapter": "几何光学",
      "topic": "望远镜",
      "variables": {
        "\\Gamma": "视觉放大率",
        "f_{obj}'": "物镜焦距",
        "f_{eye}'": "目镜焦距",
        "\\beta": "垂轴放大率"
      }
    },
    {
      "id": "formula_055",
      "name": "望远镜分辨率",
      "latex": "\\varphi = \\frac{1.22\\lambda}{D}",
      "description": "望远镜最小分辨角，与入瞳直径成反比",
      "chapter": "几何光学",
      "topic": "望远镜",
      "variables": {
        "\\varphi": "最小分辨角",
        "\\lambda": "波长",
        "D": "入瞳直径"
      }
    },
    {
      "id": "formula_056",
      "name": "望远镜有效放大率",
      "latex": "\\Gamma = \\frac{D}{2.3}",
      "description": "望远镜出瞳直径约2.3mm时对应的有效放大率",
      "chapter": "几何光学",
      "topic": "望远镜",
      "variables": {
        "\\Gamma": "有效放大率",
        "D": "入瞳直径(mm)"
      }
    },
    {
      "id": "formula_057",
      "name": "摄影物镜分辨率",
      "latex": "N = \\frac{1475}{F}",
      "description": "理论分辨率与光圈数的关系（线对/mm）",
      "chapter": "几何光学",
      "topic": "摄影系统",
      "variables": {
        "N": "分辨率(lp/mm)",
        "F": "光圈数(f/D)"
      }
    },
    {
      "id": "formula_058",
      "name": "像面照度",
      "latex": "E' = \\frac{1}{4} \\pi \\tau L \\left(\\frac{D}{f'}\\right)^2 \\cos^4 \\omega'",
      "description": "摄影物镜像面上的照度公式",
      "chapter": "几何光学",
      "topic": "摄影系统",
      "variables": {
        "E'": "像面照度",
        "\\tau": "透过率",
        "L": "景物亮度",
        "D": "入瞳直径",
        "f'": "焦距",
        "\\omega'": "像方视场角"
      }
    },
    {
      "id": "formula_059",
      "name": "立体视觉半径",
      "latex": "L_{max} = \\frac{b}{\\theta_{min}} \\approx 1200 \\, \\text{m}",
      "description": "人眼能产生立体视觉的最远距离",
      "chapter": "几何光学",
      "topic": "眼睛与视觉",
      "variables": {
        "L_{max}": "立体视觉半径",
        "b": "两眼瞳距(约62mm)",
        "\\theta_{min}": "体视锐度(约10'')"
      }
    },
    {
      "id": "formula_060",
      "name": "立体视觉阈",
      "latex": "\\Delta L = \\frac{L^2 \\theta}{b}",
      "description": "双眼能分辨的两点间最小距离",
      "chapter": "几何光学",
      "topic": "眼睛与视觉",
      "variables": {
        "\\Delta L": "立体视觉阈",
        "L": "观察距离",
        "\\theta": "体视锐度",
        "b": "瞳距"
      }
    },
    {
      "id": "formula_061",
      "name": "麦克斯韦方程组微分形式",
      "latex": "\\nabla \\cdot \\mathbf{D} = \\rho, \\quad \\nabla \\cdot \\mathbf{B} = 0, \\quad \\nabla \\times \\mathbf{E} = -\\frac{\\partial \\mathbf{B}}{\\partial t}, \\quad \\nabla \\times \\mathbf{H} = \\mathbf{j} + \\frac{\\partial \\mathbf{D}}{\\partial t}",
      "description": "描述电磁场基本规律的微分方程组",
      "chapter": "物理光学",
      "topic": "电磁理论",
      "variables": {
        "\\mathbf{D}": "电位移",
        "\\mathbf{B}": "磁感应强度",
        "\\mathbf{E}": "电场强度",
        "\\mathbf{H}": "磁场强度",
        "\\rho": "电荷密度",
        "\\mathbf{j}": "电流密度"
      }
    },
    {
      "id": "formula_062",
      "name": "波动方程",
      "latex": "\\nabla^2 \\mathbf{E} - \\varepsilon\\mu \\frac{\\partial^2 \\mathbf{E}}{\\partial t^2} = 0",
      "description": "均匀各向同性介质中电磁场的波动方程",
      "chapter": "物理光学",
      "topic": "电磁理论",
      "variables": {
        "\\mathbf{E}": "电场强度",
        "\\varepsilon": "介电常数",
        "\\mu": "磁导率"
      }
    },
    {
      "id": "formula_063",
      "name": "光速与介质常数关系",
      "latex": "v = \\frac{1}{\\sqrt{\\varepsilon\\mu}} = \\frac{c}{\\sqrt{\\varepsilon_r \\mu_r}} = \\frac{c}{n}",
      "description": "介质中光速由介电常数和磁导率决定",
      "chapter": "物理光学",
      "topic": "电磁理论",
      "variables": {
        "v": "介质中光速",
        "c": "真空中光速",
        "\\varepsilon": "介电常数",
        "\\mu": "磁导率",
        "\\varepsilon_r": "相对介电常数",
        "\\mu_r": "相对磁导率",
        "n": "折射率"
      }
    },
    {
      "id": "formula_064",
      "name": "折射率与介质常数",
      "latex": "n = \\sqrt{\\varepsilon_r \\mu_r} \\approx \\sqrt{\\varepsilon_r}",
      "description": "光学介质折射率近似等于相对介电常数的平方根",
      "chapter": "物理光学",
      "topic": "电磁理论",
      "variables": {
        "n": "折射率",
        "\\varepsilon_r": "相对介电常数",
        "\\mu_r": "相对磁导率"
      }
    },
    {
      "id": "formula_065",
      "name": "平面简谐波",
      "latex": "E(z,t) = A \\cos(kz - \\omega t + \\varphi_0)",
      "description": "沿z轴传播的平面简谐电磁波",
      "chapter": "物理光学",
      "topic": "波动方程",
      "variables": {
        "E": "电场强度",
        "A": "振幅",
        "k": "波数",
        "z": "传播距离",
        "\\omega": "角频率",
        "t": "时间",
        "\\varphi_0": "初相位"
      }
    },
    {
      "id": "formula_066",
      "name": "波数与波长关系",
      "latex": "k = \\frac{2\\pi}{\\lambda} = \\frac{\\omega}{v}",
      "description": "波数表示单位长度内相位的变化",
      "chapter": "物理光学",
      "topic": "波动方程",
      "variables": {
        "k": "波数",
        "\\lambda": "波长",
        "\\omega": "角频率",
        "v": "波速"
      }
    },
    {
      "id": "formula_067",
      "name": "光强叠加公式",
      "latex": "I = I_1 + I_2 + 2\\sqrt{I_1 I_2} \\cos \\delta",
      "description": "两束相干光叠加后的总光强，第三项为干涉项",
      "chapter": "物理光学",
      "topic": "干涉",
      "variables": {
        "I": "总光强",
        "I_1": "第一束光强",
        "I_2": "第二束光强",
        "\\delta": "相位差"
      }
    },
    {
      "id": "formula_068",
      "name": "相位差与光程差",
      "latex": "\\delta = \\frac{2\\pi}{\\lambda} \\Delta L = k \\Delta L",
      "description": "相位差等于光程差除以波长乘以2π",
      "chapter": "物理光学",
      "topic": "干涉",
      "variables": {
        "\\delta": "相位差",
        "\\lambda": "波长",
        "\\Delta L": "光程差",
        "k": "波数"
      }
    },
    {
      "id": "formula_069",
      "name": "干涉相长条件",
      "latex": "\\Delta L = m\\lambda \\quad (m = 0, \\pm 1, \\pm 2, \\ldots)",
      "description": "光程差为波长的整数倍时，光强最大",
      "chapter": "物理光学",
      "topic": "干涉",
      "variables": {
        "\\Delta L": "光程差",
        "\\lambda": "波长",
        "m": "干涉级次"
      }
    },
    {
      "id": "formula_070",
      "name": "干涉相消条件",
      "latex": "\\Delta L = \\left(m + \\frac{1}{2}\\right)\\lambda \\quad (m = 0, \\pm 1, \\pm 2, \\ldots)",
      "description": "光程差为半波长的奇数倍时，光强最小",
      "chapter": "物理光学",
      "topic": "干涉",
      "variables": {
        "\\Delta L": "光程差",
        "\\lambda": "波长",
        "m": "干涉级次"
      }
    },
    {
      "id": "formula_071",
      "name": "杨氏双缝条纹间距",
      "latex": "\\Delta x = \\frac{\\lambda D}{d}",
      "description": "杨氏双缝干涉中相邻亮纹或暗纹之间的距离",
      "chapter": "物理光学",
      "topic": "干涉",
      "variables": {
        "\\Delta x": "条纹间距",
        "\\lambda": "波长",
        "D": "双缝到屏幕距离",
        "d": "双缝间距"
      }
    },
    {
      "id": "formula_072",
      "name": "杨氏双缝亮纹位置",
      "latex": "x_m = \\frac{m\\lambda D}{d}",
      "description": "第m级亮纹在屏幕上的位置",
      "chapter": "物理光学",
      "topic": "干涉",
      "variables": {
        "x_m": "第m级亮纹位置",
        "m": "干涉级次",
        "\\lambda": "波长",
        "D": "缝屏距离",
        "d": "缝间距"
      }
    },
    {
      "id": "formula_073",
      "name": "等厚干涉光程差",
      "latex": "\\Delta L = 2nh\\cos\\theta_2 + \\frac{\\lambda}{2}",
      "description": "薄膜等厚干涉中计入半波损失的光程差",
      "chapter": "物理光学",
      "topic": "干涉",
      "variables": {
        "\\Delta L": "光程差",
        "n": "薄膜折射率",
        "h": "薄膜厚度",
        "\\theta_2": "薄膜内折射角"
      }
    },
    {
      "id": "formula_074",
      "name": "劈尖干涉条纹间距",
      "latex": "\\Delta x = \\frac{\\lambda}{2n\\alpha}",
      "description": "空气劈尖干涉中相邻条纹的间距，α为劈尖夹角",
      "chapter": "物理光学",
      "topic": "干涉",
      "variables": {
        "\\Delta x": "条纹间距",
        "\\lambda": "波长",
        "n": "介质折射率",
        "\\alpha": "劈尖夹角"
      }
    },
    {
      "id": "formula_075",
      "name": "牛顿环暗环半径",
      "latex": "r_m = \\sqrt{mR\\lambda}",
      "description": "反射光牛顿环第m级暗环的半径（有半波损失）",
      "chapter": "物理光学",
      "topic": "干涉",
      "variables": {
        "r_m": "第m级暗环半径",
        "m": "级次",
        "R": "平凸透镜曲率半径",
        "\\lambda": "波长"
      }
    },
    {
      "id": "formula_076",
      "name": "牛顿环亮环半径",
      "latex": "r_m = \\sqrt{\\left(m + \\frac{1}{2}\\right)R\\lambda}",
      "description": "反射光牛顿环第m级亮环的半径",
      "chapter": "物理光学",
      "topic": "干涉",
      "variables": {
        "r_m": "第m级亮环半径",
        "m": "级次",
        "R": "曲率半径",
        "\\lambda": "波长"
      }
    },
    {
      "id": "formula_077",
      "name": "增透膜条件",
      "latex": "2nh = \\left(m + \\frac{1}{2}\\right)\\lambda",
      "description": "薄膜光学厚度为半波长奇数倍时反射相消、透射增强",
      "chapter": "物理光学",
      "topic": "干涉",
      "variables": {
        "n": "薄膜折射率",
        "h": "薄膜厚度",
        "\\lambda": "波长",
        "m": "级次"
      }
    },
    {
      "id": "formula_078",
      "name": "增反膜条件",
      "latex": "2nh = m\\lambda",
      "description": "薄膜光学厚度为波长整数倍时反射增强、透射相消",
      "chapter": "物理光学",
      "topic": "干涉",
      "variables": {
        "n": "薄膜折射率",
        "h": "薄膜厚度",
        "\\lambda": "波长",
        "m": "级次"
      }
    },
    {
      "id": "formula_079",
      "name": "等倾干涉亮环条件",
      "latex": "2nh\\cos\\theta_2 = m\\lambda",
      "description": "等倾干涉中同一入射角对应同一级干涉环",
      "chapter": "物理光学",
      "topic": "干涉",
      "variables": {
        "n": "薄膜折射率",
        "h": "薄膜厚度",
        "\\theta_2": "薄膜内折射角",
        "m": "级次",
        "\\lambda": "波长"
      }
    },
    {
      "id": "formula_080",
      "name": "迈克尔逊干涉仪光程差",
      "latex": "\\Delta L = 2d\\cos i_1",
      "description": "迈克尔逊干涉仪两臂光程差与反射镜位移和入射角的关系",
      "chapter": "物理光学",
      "topic": "干涉",
      "variables": {
        "\\Delta L": "光程差",
        "d": "反射镜位移",
        "i_1": "入射角"
      }
    },
    {
      "id": "formula_081",
      "name": "多光束干涉透射光强",
      "latex": "I_T = \\frac{I_0}{1 + \\frac{4R}{(1-R)^2}\\sin^2\\frac{\\delta}{2}}",
      "description": "法布里-珀罗干涉仪中透射光强与反射率和相位差的关系",
      "chapter": "物理光学",
      "topic": "干涉",
      "variables": {
        "I_T": "透射光强",
        "I_0": "入射光强",
        "R": "反射率",
        "\\delta": "相邻光束相位差"
      }
    },
    {
      "id": "formula_082",
      "name": "法布里-珀罗条纹半宽度",
      "latex": "\\varepsilon = \\frac{2(1-R)}{\\sqrt{R}}",
      "description": "表征条纹锐度的量，R越大条纹越锐",
      "chapter": "物理光学",
      "topic": "干涉",
      "variables": {
        "\\varepsilon": "半宽度",
        "R": "反射率"
      }
    },
    {
      "id": "formula_083",
      "name": "法布里-珀罗色分辨本领",
      "latex": "R_\\lambda = \\frac{\\lambda}{\\Delta\\lambda} = mN\\frac{\\pi\\sqrt{R}}{1-R}",
      "description": "能分辨的最小波长差与波长之比，与干涉级次和精细度有关",
      "chapter": "物理光学",
      "topic": "干涉",
      "variables": {
        "R_\\lambda": "色分辨本领",
        "\\lambda": "波长",
        "\\Delta\\lambda": "最小可分辨波长差",
        "m": "干涉级次",
        "N": "精细度"
      }
    },
    {
      "id": "formula_084",
      "name": "条纹可见度",
      "latex": "K = \\frac{I_{max} - I_{min}}{I_{max} + I_{min}}",
      "description": "干涉条纹对比度，范围0到1",
      "chapter": "物理光学",
      "topic": "干涉",
      "variables": {
        "K": "可见度",
        "I_{max}": "最大光强",
        "I_{min}": "最小光强"
      }
    },
    {
      "id": "formula_085",
      "name": "相干长度",
      "latex": "L_c = \\frac{\\lambda^2}{\\Delta\\lambda}",
      "description": "光源能够产生干涉的最大光程差",
      "chapter": "物理光学",
      "topic": "干涉",
      "variables": {
        "L_c": "相干长度",
        "\\lambda": "中心波长",
        "\\Delta\\lambda": "谱线宽度"
      }
    },
    {
      "id": "formula_086",
      "name": "单缝夫琅禾费衍射光强",
      "latex": "I = I_0 \\left(\\frac{\\sin\\alpha}{\\alpha}\\right)^2, \\quad \\alpha = \\frac{\\pi a \\sin\\theta}{\\lambda}",
      "description": "单缝夫琅禾费衍射的光强分布公式",
      "chapter": "物理光学",
      "topic": "衍射",
      "variables": {
        "I": "衍射光强",
        "I_0": "中央最大光强",
        "\\alpha": "衍射因子",
        "a": "缝宽",
        "\\theta": "衍射角",
        "\\lambda": "波长"
      }
    },
    {
      "id": "formula_087",
      "name": "单缝衍射极小条件",
      "latex": "a\\sin\\theta = m\\lambda \\quad (m = \\pm 1, \\pm 2, \\ldots)",
      "description": "单缝夫琅禾费衍射暗纹位置条件",
      "chapter": "物理光学",
      "topic": "衍射",
      "variables": {
        "a": "缝宽",
        "\\theta": "衍射角",
        "m": "暗纹级次",
        "\\lambda": "波长"
      }
    },
    {
      "id": "formula_088",
      "name": "单缝衍射半角宽度",
      "latex": "\\Delta\\theta = \\frac{\\lambda}{a}",
      "description": "中央亮纹的半角宽度，与缝宽成反比",
      "chapter": "物理光学",
      "topic": "衍射",
      "variables": {
        "\\Delta\\theta": "半角宽度",
        "\\lambda": "波长",
        "a": "缝宽"
      }
    },
    {
      "id": "formula_089",
      "name": "矩孔衍射光强",
      "latex": "I = I_0 \\left(\\frac{\\sin\\alpha}{\\alpha}\\right)^2 \\left(\\frac{\\sin\\beta}{\\beta}\\right)^2",
      "description": "矩孔夫琅禾费衍射为两个垂直方向单缝衍射的乘积",
      "chapter": "物理光学",
      "topic": "衍射",
      "variables": {
        "I": "衍射光强",
        "I_0": "中央光强",
        "\\alpha": "x方向衍射因子",
        "\\beta": "y方向衍射因子"
      }
    },
    {
      "id": "formula_090",
      "name": "圆孔衍射艾里斑",
      "latex": "\\theta = 1.22 \\frac{\\lambda}{D}",
      "description": "圆孔夫琅禾费衍射第一暗环对应的角半径（瑞利判据）",
      "chapter": "物理光学",
      "topic": "衍射",
      "variables": {
        "\\theta": "艾里斑角半径",
        "\\lambda": "波长",
        "D": "圆孔直径"
      }
    },
    {
      "id": "formula_091",
      "name": "多缝衍射光强",
      "latex": "I = I_0 \\left(\\frac{\\sin\\alpha}{\\alpha}\\right)^2 \\left(\\frac{\\sin N\\beta}{\\sin\\beta}\\right)^2",
      "description": "多缝夫琅禾费衍射光强=单缝衍射因子×多缝干涉因子",
      "chapter": "物理光学",
      "topic": "衍射",
      "variables": {
        "I": "衍射光强",
        "I_0": "中央光强",
        "\\alpha": "衍射因子",
        "\\beta": "干涉因子",
        "N": "缝数"
      }
    },
    {
      "id": "formula_092",
      "name": "光栅方程",
      "latex": "d(\\sin\\theta_i + \\sin\\theta_m) = m\\lambda",
      "description": "光栅主极大的位置条件，d为光栅常数",
      "chapter": "物理光学",
      "topic": "衍射",
      "variables": {
        "d": "光栅常数",
        "\\theta_i": "入射角",
        "\\theta_m": "第m级衍射角",
        "m": "衍射级次",
        "\\lambda": "波长"
      }
    },
    {
      "id": "formula_093",
      "name": "光栅角色散",
      "latex": "D_\\theta = \\frac{d\\theta}{d\\lambda} = \\frac{m}{d\\cos\\theta}",
      "description": "单位波长变化引起的衍射角变化",
      "chapter": "物理光学",
      "topic": "衍射",
      "variables": {
        "D_\\theta": "角色散",
        "m": "衍射级次",
        "d": "光栅常数",
        "\\theta": "衍射角"
      }
    },
    {
      "id": "formula_094",
      "name": "光栅线色散",
      "latex": "D_l = \\frac{dl}{d\\lambda} = \\frac{m f}{d\\cos\\theta}",
      "description": "单位波长变化在焦面上引起的线距离变化",
      "chapter": "物理光学",
      "topic": "衍射",
      "variables": {
        "D_l": "线色散",
        "m": "衍射级次",
        "f": "焦距",
        "d": "光栅常数",
        "\\theta": "衍射角"
      }
    },
    {
      "id": "formula_095",
      "name": "光栅色分辨本领",
      "latex": "R = \\frac{\\lambda}{\\Delta\\lambda} = mN",
      "description": "光栅能分辨的最小波长差，与级次和总缝数成正比",
      "chapter": "物理光学",
      "topic": "衍射",
      "variables": {
        "R": "分辨本领",
        "\\lambda": "波长",
        "\\Delta\\lambda": "最小可分辨波长差",
        "m": "衍射级次",
        "N": "总缝数"
      }
    },
    {
      "id": "formula_096",
      "name": "光栅自由光谱范围",
      "latex": "\\Delta\\lambda = \\frac{\\lambda}{m}",
      "description": "第m级光谱不重叠的最大波长范围",
      "chapter": "物理光学",
      "topic": "衍射",
      "variables": {
        "\\Delta\\lambda": "自由光谱范围",
        "\\lambda": "波长",
        "m": "衍射级次"
      }
    },
    {
      "id": "formula_097",
      "name": "菲涅尔半波带半径",
      "latex": "\\rho_m = \\sqrt{m\\lambda \\frac{Rb}{R+b}}",
      "description": "菲涅尔圆孔衍射中第m个半波带的半径",
      "chapter": "物理光学",
      "topic": "衍射",
      "variables": {
        "\\rho_m": "第m半波带半径",
        "m": "半波带序数",
        "\\lambda": "波长",
        "R": "光源到孔距离",
        "b": "孔到屏幕距离"
      }
    },
    {
      "id": "formula_098",
      "name": "菲涅尔波带片焦距",
      "latex": "\\frac{1}{R} + \\frac{1}{b} = \\frac{m\\lambda}{\\rho_m^2} = \\frac{1}{f}",
      "description": "菲涅尔波带片类似于透镜的成像公式",
      "chapter": "物理光学",
      "topic": "衍射",
      "variables": {
        "R": "物距",
        "b": "像距",
        "f": "波带片焦距",
        "\\lambda": "波长",
        "\\rho_m": "第m环半径"
      }
    },
    {
      "id": "formula_099",
      "name": "闪耀光栅方程",
      "latex": "2d\\sin\\theta_b = m\\lambda_b",
      "description": "闪耀光栅中光垂直入射到刻槽斜面时的光栅方程",
      "chapter": "物理光学",
      "topic": "衍射",
      "variables": {
        "d": "光栅常数",
        "\\theta_b": "闪耀角",
        "m": "衍射级次",
        "\\lambda_b": "闪耀波长"
      }
    },
    {
      "id": "formula_100",
      "name": "布拉格公式",
      "latex": "2d\\sin\\theta = m\\lambda",
      "description": "X射线在晶体中衍射的条件，d为晶面间距",
      "chapter": "物理光学",
      "topic": "衍射",
      "variables": {
        "d": "晶面间距",
        "\\theta": "布拉格角",
        "m": "衍射级次",
        "\\lambda": "波长"
      }
    },
    {
      "id": "formula_101",
      "name": "马吕斯定律",
      "latex": "I = I_0 \\cos^2\\theta",
      "description": "线偏振光通过偏振片后光强与夹角的关系",
      "chapter": "物理光学",
      "topic": "偏振",
      "variables": {
        "I": "透射光强",
        "I_0": "入射光强",
        "\\theta": "偏振方向与透振方向夹角"
      }
    },
    {
      "id": "formula_102",
      "name": "偏振度",
      "latex": "P = \\frac{I_{max} - I_{min}}{I_{max} + I_{min}}",
      "description": "部分偏振光偏振程度的度量",
      "chapter": "物理光学",
      "topic": "偏振",
      "variables": {
        "P": "偏振度",
        "I_{max}": "最大光强",
        "I_{min}": "最小光强"
      }
    },
    {
      "id": "formula_103",
      "name": "布儒斯特角",
      "latex": "\\tan\\theta_B = \\frac{n_2}{n_1}",
      "description": "反射光为完全线偏振时的入射角，此时反射光与折射光垂直",
      "chapter": "物理光学",
      "topic": "偏振",
      "variables": {
        "\\theta_B": "布儒斯特角",
        "n_1": "入射介质折射率",
        "n_2": "折射介质折射率"
      }
    },
    {
      "id": "formula_104",
      "name": "菲涅尔公式s波反射率",
      "latex": "r_s = \\frac{n_1\\cos\\theta_1 - n_2\\cos\\theta_2}{n_1\\cos\\theta_1 + n_2\\cos\\theta_2} = -\\frac{\\sin(\\theta_1 - \\theta_2)}{\\sin(\\theta_1 + \\theta_2)}",
      "description": "s波（垂直分量）在界面的振幅反射率",
      "chapter": "物理光学",
      "topic": "偏振",
      "variables": {
        "r_s": "s波振幅反射率",
        "n_1": "入射介质折射率",
        "n_2": "折射介质折射率",
        "\\theta_1": "入射角",
        "\\theta_2": "折射角"
      }
    },
    {
      "id": "formula_105",
      "name": "菲涅尔公式p波反射率",
      "latex": "r_p = \\frac{n_2\\cos\\theta_1 - n_1\\cos\\theta_2}{n_2\\cos\\theta_1 + n_1\\cos\\theta_2} = \\frac{\\tan(\\theta_1 - \\theta_2)}{\\tan(\\theta_1 + \\theta_2)}",
      "description": "p波（平行分量）在界面的振幅反射率",
      "chapter": "物理光学",
      "topic": "偏振",
      "variables": {
        "r_p": "p波振幅反射率",
        "n_1": "入射介质折射率",
        "n_2": "折射介质折射率",
        "\\theta_1": "入射角",
        "\\theta_2": "折射角"
      }
    },
    {
      "id": "formula_106",
      "name": "波片相位延迟",
      "latex": "\\delta = \\frac{2\\pi}{\\lambda}(n_o - n_e)d",
      "description": "线偏振光通过波片后o光和e光产生的相位差",
      "chapter": "物理光学",
      "topic": "偏振",
      "variables": {
        "\\delta": "相位延迟",
        "\\lambda": "波长",
        "n_o": "o光折射率",
        "n_e": "e光折射率",
        "d": "波片厚度"
      }
    },
    {
      "id": "formula_107",
      "name": "四分之一波片",
      "latex": "d = \\frac{\\lambda}{4|n_o - n_e|}",
      "description": "产生π/2相位差（光程差λ/4）的波片厚度",
      "chapter": "物理光学",
      "topic": "偏振",
      "variables": {
        "d": "波片厚度",
        "\\lambda": "波长",
        "n_o": "o光折射率",
        "n_e": "e光折射率"
      }
    },
    {
      "id": "formula_108",
      "name": "二分之一波片",
      "latex": "d = \\frac{\\lambda}{2|n_o - n_e|}",
      "description": "产生π相位差（光程差λ/2）的波片厚度",
      "chapter": "物理光学",
      "topic": "偏振",
      "variables": {
        "d": "波片厚度",
        "\\lambda": "波长",
        "n_o": "o光折射率",
        "n_e": "e光折射率"
      }
    },
    {
      "id": "formula_109",
      "name": "全波片",
      "latex": "d = \\frac{\\lambda}{|n_o - n_e|}",
      "description": "产生2π相位差（光程差λ）的波片厚度",
      "chapter": "物理光学",
      "topic": "偏振",
      "variables": {
        "d": "波片厚度",
        "\\lambda": "波长",
        "n_o": "o光折射率",
        "n_e": "e光折射率"
      }
    },
    {
      "id": "formula_110",
      "name": "旋光角度",
      "latex": "\\theta = \\alpha l",
      "description": "线偏振光通过旋光物质后振动面旋转的角度",
      "chapter": "物理光学",
      "topic": "偏振",
      "variables": {
        "\\theta": "旋转角",
        "\\alpha": "旋光率",
        "l": "物质厚度"
      }
    },
    {
      "id": "formula_111",
      "name": "法拉第旋转角",
      "latex": "\\theta = V B l",
      "description": "磁致旋光中振动面旋转角与磁感应强度和光程的关系",
      "chapter": "物理光学",
      "topic": "偏振",
      "variables": {
        "\\theta": "旋转角",
        "V": "维尔德常数",
        "B": "磁感应强度",
        "l": "光程长度"
      }
    },
    {
      "id": "formula_112",
      "name": "两个垂直振动合成",
      "latex": "\\frac{x^2}{A_1^2} + \\frac{y^2}{A_2^2} - \\frac{2xy}{A_1 A_2}\\cos\\delta = \\sin^2\\delta",
      "description": "两个频率相同、方向垂直的简谐振动合成轨迹方程",
      "chapter": "物理光学",
      "topic": "偏振",
      "variables": {
        "x,y": "位移坐标",
        "A_1,A_2": "两方向振幅",
        "\\delta": "相位差"
      }
    },
    {
      "id": "formula_113",
      "name": "彗差",
      "latex": "K_T' = \frac{1}{2n'u'} \\sum S_{II}",
      "description": "弧矢彗差：彗星状拖尾，与孔径和视场都有关。不满足等晕条件时产生。",
      "chapter": "几何光学",
      "topic": "像差理论",
      "variables": {
        "K_T'": "弧矢彗差",
        "n'": "像方折射率",
        "u'": "像方孔径角",
        "S_{II}": "第二赛德和数"
      }
    },
    {
      "id": "formula_114",
      "name": "像散",
      "latex": "x_{ts}' - x_s' = \frac{1}{n'u'^2} \\sum S_{III}",
      "description": "子午焦点与弧矢焦点不重合，细光束像差。与视场平方成正比。",
      "chapter": "几何光学",
      "topic": "像差理论",
      "variables": {
        "x_{ts}'": "子午焦点到高斯像面距离",
        "x_s'": "弧矢焦点到高斯像面距离",
        "n'": "像方折射率",
        "u'": "像方孔径角",
        "S_{III}": "第三赛德和数"
      }
    },
    {
      "id": "formula_115",
      "name": "场曲",
      "latex": "x_p' = \frac{1}{2n'u'^2} \\sum S_{IV}",
      "description": "平面物体成弯曲像面（匹兹伐面），与视场平方成正比。",
      "chapter": "几何光学",
      "topic": "像差理论",
      "variables": {
        "x_p'": "匹兹伐场曲",
        "n'": "像方折射率",
        "u'": "像方孔径角",
        "S_{IV}": "第四赛德和数"
      }
    },
    {
      "id": "formula_116",
      "name": "畸变",
      "latex": "q = \frac{\beta - \beta_0}{\beta_0} \times 100\\%",
      "description": "放大率随视场变化，形状失真但不改变清晰度。枕形或桶形畸变。",
      "chapter": "几何光学",
      "topic": "像差理论",
      "variables": {
        "q": "相对畸变",
        "\beta": "实际放大率",
        "\beta_0": "近轴放大率"
      }
    },
    {
      "id": "formula_117",
      "name": "正弦差",
      "latex": "OSC = \frac{\\sin U' / \\sin u' - \beta}{\beta}",
      "description": "不满足正弦条件时，近轴区与边缘区放大率不一致。正弦差为0表示满足等晕条件。",
      "chapter": "几何光学",
      "topic": "像差理论",
      "variables": {
        "OSC": "正弦差",
        "U'": "边缘光线像方孔径角",
        "u'": "近轴光线像方孔径角",
        "\beta": "垂轴放大率"
      }
    },
    {
      "id": "formula_118",
      "name": "倍率色差",
      "latex": "\\Delta y_{FC}' = y_F' - y_C' = \frac{1}{n'u'} \\sum C_{II}",
      "description": "F光与C光的垂轴放大率不同，造成不同颜色像的大小差异。",
      "chapter": "几何光学",
      "topic": "像差理论",
      "variables": {
        "\\Delta y_{FC}'": "倍率色差",
        "y_F'": "F光像高",
        "y_C'": "C光像高",
        "n'": "像方折射率",
        "u'": "像方孔径角",
        "C_{II}": "第二色差和数"
      }
    }
  ],
  "knowledge": [
    {
      "id": "knowledge_001",
      "title": "光波的基本性质",
      "content": "可见光波长范围约380nm-780nm，在真空中传播速度c=3×10⁸m/s，介质中速度v=c/n。折射率是波长的函数，单色光具有单一波长，复色光由多种单色光组成。",
      "chapter": "几何光学",
      "topic": "光波",
      "related_formulas": [
        "formula_001",
        "formula_003"
      ]
    },
    {
      "id": "knowledge_002",
      "title": "光源与发光点",
      "content": "光源是能够辐射光能的物体，分为自发光体和被照亮物体。发光点是辐射光能量的几何点，是理想化模型。",
      "chapter": "几何光学",
      "topic": "光波",
      "related_formulas": []
    },
    {
      "id": "knowledge_003",
      "title": "光线、波面与光束",
      "content": "光线是代表光传播方向的几何线。波面是振动位相相同的点构成的曲面。光束是与波面对应的法线束，分为平行光束、发散光束、会聚光束和像散光束。",
      "chapter": "几何光学",
      "topic": "光波",
      "related_formulas": []
    },
    {
      "id": "knowledge_004",
      "title": "直线传播定律",
      "content": "在各向同性的均匀介质中，光沿直线传播。",
      "chapter": "几何光学",
      "topic": "基本定律",
      "related_formulas": []
    },
    {
      "id": "knowledge_005",
      "title": "独立传播定律",
      "content": "不同光源发出的光在空间相遇时，各自独立传播互不干扰。",
      "chapter": "几何光学",
      "topic": "基本定律",
      "related_formulas": []
    },
    {
      "id": "knowledge_006",
      "title": "光路可逆原理",
      "content": "光线传播路径是可逆的，若将光线反向，它将沿原路径返回。",
      "chapter": "几何光学",
      "topic": "基本定律",
      "related_formulas": []
    },
    {
      "id": "knowledge_007",
      "title": "全反射",
      "content": "光从光密介质射向光疏介质时，当入射角大于临界角时，光线全部反射回原介质，不发生折射。应用于光纤和棱镜。",
      "chapter": "几何光学",
      "topic": "反射与折射",
      "related_formulas": [
        "formula_003"
      ]
    },
    {
      "id": "knowledge_008",
      "title": "费马原理",
      "content": "光在传播中沿着光程为极值（极小、极大或恒定）的路径传播。光程是几何路程与折射率的乘积。",
      "chapter": "几何光学",
      "topic": "费马原理",
      "related_formulas": [
        "formula_004"
      ]
    },
    {
      "id": "knowledge_009",
      "title": "马吕斯定律",
      "content": "光线始终与波面正交，同一波面上各点到某参考点的光程相等。",
      "chapter": "几何光学",
      "topic": "费马原理",
      "related_formulas": []
    },
    {
      "id": "knowledge_010",
      "title": "完善成像条件",
      "content": "入射波面是球面波时出射波面也是球面波；入射是同心光束时出射也是同心光束；物点及其像点之间任意两条光路的光程相等。",
      "chapter": "几何光学",
      "topic": "成像概念",
      "related_formulas": []
    },
    {
      "id": "knowledge_011",
      "title": "实物与虚物、实像与虚像",
      "content": "实物/实像由实际光线相交会聚形成；虚物/虚像由光线的延长线相交所形成。虚物通常由前一个光学系统所成的实像作为后续系统的物。",
      "chapter": "几何光学",
      "topic": "成像概念",
      "related_formulas": []
    },
    {
      "id": "knowledge_012",
      "title": "共轴光学系统",
      "content": "若光学系统中各光学元件表面的曲率中心在一条直线上，则该系统为共轴光学系统，这条连线称为光轴。",
      "chapter": "几何光学",
      "topic": "成像概念",
      "related_formulas": []
    },
    {
      "id": "knowledge_013",
      "title": "球面折射符号规则",
      "content": "物距L、像距L'、孔径角U/U'、入射高度h等参数的符号规则：以光传播方向为正，光轴以上为正，顺时针转向为正。",
      "chapter": "几何光学",
      "topic": "近轴光学",
      "related_formulas": [
        "formula_005"
      ]
    },
    {
      "id": "knowledge_014",
      "title": "球差",
      "content": "当光线以不同孔径角入射时，同一物点成像在不同位置，这种现象称为球差。近轴区才能成完善像。",
      "chapter": "几何光学",
      "topic": "近轴光学",
      "related_formulas": [
        "formula_040"
      ]
    },
    {
      "id": "knowledge_015",
      "title": "近轴区完善成像",
      "content": "在近轴区（小孔径角），轴上物点成完善像，该像点称为高斯像点。近轴区中L'仅是l的函数，不随U变化。",
      "chapter": "几何光学",
      "topic": "近轴光学",
      "related_formulas": [
        "formula_005"
      ]
    },
    {
      "id": "knowledge_016",
      "title": "垂轴放大率",
      "content": "像的大小与物的大小之比。β>0成正像，β<0成倒像；|β|>1为放大像，|β|<1为缩小像。L与l'同号时物像在系统同侧，虚实相反。",
      "chapter": "几何光学",
      "topic": "近轴光学",
      "related_formulas": [
        "formula_006"
      ]
    },
    {
      "id": "knowledge_017",
      "title": "轴向放大率",
      "content": "物点沿光轴微小移动时像点移动量与物点移动量之比。轴向放大率恒为正，说明物点沿轴向移动时像点沿同方向移动。",
      "chapter": "几何光学",
      "topic": "近轴光学",
      "related_formulas": [
        "formula_007"
      ]
    },
    {
      "id": "knowledge_018",
      "title": "角放大率",
      "content": "一对共轭光线与光轴夹角之比。角放大率只与共轭点位置有关，与孔径角无关，表示折射面会聚或发散光束的能力。",
      "chapter": "几何光学",
      "topic": "近轴光学",
      "related_formulas": [
        "formula_008"
      ]
    },
    {
      "id": "knowledge_019",
      "title": "三种放大率关系",
      "content": "垂轴放大率、轴向放大率和角放大率满足αγ=β。",
      "chapter": "几何光学",
      "topic": "近轴光学",
      "related_formulas": [
        "formula_007",
        "formula_008",
        "formula_009"
      ]
    },
    {
      "id": "knowledge_020",
      "title": "拉格朗日-赫姆霍兹不变量",
      "content": "nuy=n'u'y'在光学系统中保持不变，是光学系统的重要特征量，用于分析光束限制和能量传递。",
      "chapter": "几何光学",
      "topic": "近轴光学",
      "related_formulas": [
        "formula_009"
      ]
    },
    {
      "id": "knowledge_021",
      "title": "球面反射镜",
      "content": "反射球面成像公式可由折射公式令n'=-n得到。当物点位于球心时，l=r，l'=r，β=α=-1，γ=1。",
      "chapter": "几何光学",
      "topic": "近轴光学",
      "related_formulas": [
        "formula_011"
      ]
    },
    {
      "id": "knowledge_022",
      "title": "共轴球面系统过渡关系",
      "content": "前一面的像空间是其后一面的物空间；折射率、角度、孔径高的过渡关系确保光线能依次追迹。",
      "chapter": "几何光学",
      "topic": "近轴光学",
      "related_formulas": [
        "formula_012",
        "formula_013"
      ]
    },
    {
      "id": "knowledge_023",
      "title": "理想光学系统",
      "content": "高斯光学：在任意大的空间中，任意宽的光束都能够成完善像。由点对应点、直线对应直线、平面对应平面的共线成像理论描述。",
      "chapter": "几何光学",
      "topic": "理想光学系统",
      "related_formulas": []
    },
    {
      "id": "knowledge_024",
      "title": "理想光学系统成像性质",
      "content": "光轴上的物点对应光轴上的像点；垂直于光轴的同一平面内各部分具有相同放大率；已知两对共轭面或一对共轭面加两对共轭点可确定系统成像。",
      "chapter": "几何光学",
      "topic": "理想光学系统",
      "related_formulas": []
    },
    {
      "id": "knowledge_025",
      "title": "基点与基面",
      "content": "理想光学系统用一对主点H、H'，一对焦点F、F'，一对节点J、J'来表示。主面上垂轴放大率为+1。",
      "chapter": "几何光学",
      "topic": "理想光学系统",
      "related_formulas": [
        "formula_016"
      ]
    },
    {
      "id": "knowledge_026",
      "title": "图解法求像",
      "content": "平行于光轴入射的光线过像方焦点；过物方焦点的光线平行于光轴出射；倾斜平行光会聚于像方焦面上一点；共轭光线在主面上投射高度相等。",
      "chapter": "几何光学",
      "topic": "理想光学系统",
      "related_formulas": []
    },
    {
      "id": "knowledge_027",
      "title": "高斯公式与牛顿公式",
      "content": "高斯公式以主点为原点，牛顿公式以焦点为原点。两者都是理想光学系统的核心成像公式。",
      "chapter": "几何光学",
      "topic": "理想光学系统",
      "related_formulas": [
        "formula_014",
        "formula_015"
      ]
    },
    {
      "id": "knowledge_028",
      "title": "光组过渡公式",
      "content": "多光组组合时，前一光组的像距到后一光组物距的过渡关系为l_{k+1}=l_k'-d_k，光学间隔Δ=d-f'_1+f_2。",
      "chapter": "几何光学",
      "topic": "理想光学系统",
      "related_formulas": [
        "formula_022",
        "formula_023"
      ]
    },
    {
      "id": "knowledge_029",
      "title": "组合系统放大率",
      "content": "整个系统的放大率等于各光组放大率的乘积。",
      "chapter": "几何光学",
      "topic": "理想光学系统",
      "related_formulas": [
        "formula_013"
      ]
    },
    {
      "id": "knowledge_030",
      "title": "光学系统节点",
      "content": "角放大率等于+1的一对共轭点称为节点。当n=n'时节点与主点重合；当n≠n'时节点不与主点重合。",
      "chapter": "几何光学",
      "topic": "理想光学系统",
      "related_formulas": [
        "formula_026"
      ]
    },
    {
      "id": "knowledge_031",
      "title": "正切计算法",
      "content": "多光组组合时，令tgU₁=h₁/f'₁，依次计算各面高度和角度，用于求组合系统焦距和主点位置。",
      "chapter": "几何光学",
      "topic": "理想光学系统",
      "related_formulas": []
    },
    {
      "id": "knowledge_032",
      "title": "远摄型光组",
      "content": "正光组+负光组组合，焦距大于光组的筒长，应用于长焦距镜头设计。",
      "chapter": "几何光学",
      "topic": "理想光学系统",
      "related_formulas": []
    },
    {
      "id": "knowledge_033",
      "title": "反远距型光组",
      "content": "负光组+正光组组合，工作距比焦距长，应用于小焦距系统。",
      "chapter": "几何光学",
      "topic": "理想光学系统",
      "related_formulas": []
    },
    {
      "id": "knowledge_034",
      "title": "望远系统",
      "content": "无焦系统（Φ=0），由两个正光组组成，物镜焦距大于目镜焦距。视觉放大率等于角放大率。",
      "chapter": "几何光学",
      "topic": "望远镜",
      "related_formulas": [
        "formula_024",
        "formula_054"
      ]
    },
    {
      "id": "knowledge_035",
      "title": "显微镜系统",
      "content": "物镜+目镜，两者焦距都较小，光学间隔较大。物体放在物方焦面以外靠近焦点处。",
      "chapter": "几何光学",
      "topic": "放大镜与显微镜",
      "related_formulas": [
        "formula_049"
      ]
    },
    {
      "id": "knowledge_036",
      "title": "透镜分类",
      "content": "正透镜（会聚透镜）光焦度为正；负透镜（发散透镜）光焦度为负。按形状分为双凸、平凸、弯月等。",
      "chapter": "几何光学",
      "topic": "透镜",
      "related_formulas": [
        "formula_024"
      ]
    },
    {
      "id": "knowledge_037",
      "title": "透镜焦距公式",
      "content": "厚透镜焦距与折射率、两球面曲率半径及厚度有关。当厚度d变化时，双凸透镜可变为发散透镜。",
      "chapter": "几何光学",
      "topic": "透镜",
      "related_formulas": []
    },
    {
      "id": "knowledge_038",
      "title": "平面镜成像",
      "content": "平面镜是唯一能够成完善像的最简单的光学元件。放大率β=+1，像与物完全对称于平面镜。奇数次反射成镜像，偶数次反射成一致像。",
      "chapter": "几何光学",
      "topic": "平面与平面系统",
      "related_formulas": [
        "formula_027"
      ]
    },
    {
      "id": "knowledge_039",
      "title": "光学杠杆",
      "content": "利用平面镜转动特性测量微小角度或位移，放大倍数与光路长度有关。",
      "chapter": "几何光学",
      "topic": "平面与平面系统",
      "related_formulas": [
        "formula_028"
      ]
    },
    {
      "id": "knowledge_040",
      "title": "双平面镜",
      "content": "出射光线与入射光线的夹角只取决于双平面镜的夹角α，β=2α，与入射角无关。",
      "chapter": "几何光学",
      "topic": "平面与平面系统",
      "related_formulas": [
        "formula_029"
      ]
    },
    {
      "id": "knowledge_041",
      "title": "平行平板",
      "content": "光线经平行平板后方向不变，是无焦度元件。产生侧向位移和轴向位移，不能成完善像。",
      "chapter": "几何光学",
      "topic": "平面与平面系统",
      "related_formulas": [
        "formula_030",
        "formula_031"
      ]
    },
    {
      "id": "knowledge_042",
      "title": "反射棱镜",
      "content": "一次反射棱镜、二次反射棱镜、三次反射棱镜（斯密特棱镜）等。应用：转折光路、转像、倒像、分光。",
      "chapter": "几何光学",
      "topic": "平面与平面系统",
      "related_formulas": []
    },
    {
      "id": "knowledge_043",
      "title": "屋脊棱镜",
      "content": "保持原棱镜的出射光轴方向，使垂直于主截面的方向倒转，从而使像与物完全一致。屋脊棱镜相当于两个反射面。",
      "chapter": "几何光学",
      "topic": "平面与平面系统",
      "related_formulas": []
    },
    {
      "id": "knowledge_044",
      "title": "立方角锥棱镜",
      "content": "光线以任意方向从底面入射，经三个直角面依次反射后，出射光线始终与入射光线平行。棱镜绕顶点旋转时出射方向不变。",
      "chapter": "几何光学",
      "topic": "平面与平面系统",
      "related_formulas": []
    },
    {
      "id": "knowledge_045",
      "title": "棱镜展开",
      "content": "棱镜的等效作用等于平面镜加平行平板。按反射面顺序翻转主截面180°可得等效平行平板。",
      "chapter": "几何光学",
      "topic": "平面与平面系统",
      "related_formulas": []
    },
    {
      "id": "knowledge_046",
      "title": "折射棱镜",
      "content": "偏向角δ=I₁+I₂'-α。最小偏向角时满足对称光路，可用于精确测量折射率。",
      "chapter": "几何光学",
      "topic": "平面与平面系统",
      "related_formulas": [
        "formula_032",
        "formula_033"
      ]
    },
    {
      "id": "knowledge_047",
      "title": "光楔",
      "content": "折射角很小的折射棱镜。偏向角δ≈α(n-1)。双光楔可用于测量微小角度和位移。",
      "chapter": "几何光学",
      "topic": "平面与平面系统",
      "related_formulas": [
        "formula_034"
      ]
    },
    {
      "id": "knowledge_048",
      "title": "孔径光阑",
      "content": "限制进入光学系统的成像光束口径的光阑。位置对轴上点光宽度无区别，但对轴外点光束限制影响较大。",
      "chapter": "几何光学",
      "topic": "光阑与景深",
      "related_formulas": []
    },
    {
      "id": "knowledge_049",
      "title": "视场光阑",
      "content": "限制成像范围的光阑。入射窗是视场光阑关于前面光学系统的像，出射窗是视场光阑关于后面光学系统的像。",
      "chapter": "几何光学",
      "topic": "光阑与景深",
      "related_formulas": []
    },
    {
      "id": "knowledge_050",
      "title": "入瞳与出瞳",
      "content": "入瞳是孔径光阑对前面光学系统所成的像；出瞳是孔径光阑对后面光学系统所成的像。出瞳应与眼瞳重合。",
      "chapter": "几何光学",
      "topic": "光阑与景深",
      "related_formulas": []
    },
    {
      "id": "knowledge_051",
      "title": "渐晕",
      "content": "轴外点光束被透镜边框拦截的现象。渐晕光阑使轴外点照度降低。渐晕系数K=Dω/D≥50%为可用。",
      "chapter": "几何光学",
      "topic": "光阑与景深",
      "related_formulas": [
        "formula_035"
      ]
    },
    {
      "id": "knowledge_052",
      "title": "景深",
      "content": "光学系统能获得清晰像的物方空间深度范围。包括远景深度和近景深度。",
      "chapter": "几何光学",
      "topic": "光阑与景深",
      "related_formulas": [
        "formula_036",
        "formula_037",
        "formula_038"
      ]
    },
    {
      "id": "knowledge_053",
      "title": "光瞳衔接原则",
      "content": "望远镜的出瞳应与眼睛的入瞳重合，否则会发生光瞳切割，视场中出现黑暗部分。",
      "chapter": "几何光学",
      "topic": "光阑与景深",
      "related_formulas": []
    },
    {
      "id": "knowledge_054",
      "title": "远心光路",
      "content": "孔径光阑位于物镜像方焦面上，使入瞳位于无穷远，轴外点主光线平行于光轴。用于测量以消除调焦误差。",
      "chapter": "几何光学",
      "topic": "光阑与景深",
      "related_formulas": []
    },
    {
      "id": "knowledge_055",
      "title": "场镜",
      "content": "和像平面重合或很靠近的透镜，作用是压低光线，减小后续光路通光口径，实现光瞳衔接。",
      "chapter": "几何光学",
      "topic": "光阑与景深",
      "related_formulas": []
    },
    {
      "id": "knowledge_056",
      "title": "像差产生原因",
      "content": "实际像与理想像之间的差异称为像差。产生原因：孔径过大和视场过大。小孔径小视场成像无像差。",
      "chapter": "几何光学",
      "topic": "像差理论",
      "related_formulas": []
    },
    {
      "id": "knowledge_057",
      "title": "几何像差分类",
      "content": "单色像差：球差、彗差、像散、场曲、畸变、正弦差。色差：位置色差、倍率色差。",
      "chapter": "几何光学",
      "topic": "像差理论",
      "related_formulas": []
    },
    {
      "id": "knowledge_058",
      "title": "球差",
      "content": "轴上点发出的同心光束经光学系统后不再是同心光束，不同入射高度的光线交光轴于不同位置。单透镜无法校正球差。",
      "chapter": "几何光学",
      "topic": "像差理论",
      "related_formulas": [
        "formula_040",
        "formula_041"
      ]
    },
    {
      "id": "knowledge_059",
      "title": "球差校正",
      "content": "正负透镜组合才有可能校正球差。对于含初级和二级球差的系统，当边缘带球差为0时，0.707带有最大剩余球差。",
      "chapter": "几何光学",
      "topic": "像差理论",
      "related_formulas": [
        "formula_040"
      ]
    },
    {
      "id": "knowledge_060",
      "title": "波像差",
      "content": "实际波面与理想波面在出瞳处的光程差。波像差为孔径的函数，几何像差大时波像差也大。W<λ/4时认为成像完善。",
      "chapter": "几何光学",
      "topic": "像差理论",
      "related_formulas": [
        "formula_042",
        "formula_043"
      ]
    },
    {
      "id": "knowledge_061",
      "title": "消像差原则",
      "content": "主要像差应校正到接收器不能察觉的程度。目视系统用e光校正单色像差，F光和C光校正色差。",
      "chapter": "几何光学",
      "topic": "像差理论",
      "related_formulas": []
    },
    {
      "id": "knowledge_062",
      "title": "眼睛结构",
      "content": "眼睛由角膜、前室、水晶体、后室、视网膜组成。水晶体曲率半径40-70mm可调节，瞳孔直径2-8mm。",
      "chapter": "几何光学",
      "topic": "眼睛与视觉",
      "related_formulas": []
    },
    {
      "id": "knowledge_063",
      "title": "眼睛调节能力",
      "content": "眼睛远点与近点倒数之差为调节能力，单位屈光度(D)。明视距离为250mm。",
      "chapter": "几何光学",
      "topic": "眼睛与视觉",
      "related_formulas": [
        "formula_046"
      ]
    },
    {
      "id": "knowledge_064",
      "title": "眼睛缺陷与校正",
      "content": "近视眼：远点在眼前有限距离，用负透镜校正；远视眼：远点在眼后，用正透镜校正；散光：用水晶面不对称校正。",
      "chapter": "几何光学",
      "topic": "眼睛与视觉",
      "related_formulas": []
    },
    {
      "id": "knowledge_065",
      "title": "眼睛分辨率",
      "content": "视网膜上最小鉴别距离约0.006mm，对应视角约1角分。",
      "chapter": "几何光学",
      "topic": "眼睛与视觉",
      "related_formulas": [
        "formula_047"
      ]
    },
    {
      "id": "knowledge_066",
      "title": "眼睛景深",
      "content": "眼睛调节在某一对准平面时，不必调节能同时看清前后某距离的物体的范围。",
      "chapter": "几何光学",
      "topic": "眼睛与视觉",
      "related_formulas": []
    },
    {
      "id": "knowledge_067",
      "title": "立体视觉",
      "content": "双眼观察产生立体视觉。不同距离物体对应不同视差角。体视锐度约10''，经训练可达5''。立体视觉半径约1200m。",
      "chapter": "几何光学",
      "topic": "眼睛与视觉",
      "related_formulas": [
        "formula_059",
        "formula_060"
      ]
    },
    {
      "id": "knowledge_068",
      "title": "放大镜",
      "content": "放大镜视觉放大率取决于观察条件。眼睛调焦在无限远时Γ=250/f'；调焦在明视距离时Γ=250/f'+1。",
      "chapter": "几何光学",
      "topic": "放大镜与显微镜",
      "related_formulas": [
        "formula_048"
      ]
    },
    {
      "id": "knowledge_069",
      "title": "显微镜光束限制",
      "content": "生物显微镜中物镜框是孔径光阑，分划板是视场光阑，目镜常是渐晕光阑。测量显微镜用物方远心光路。",
      "chapter": "几何光学",
      "topic": "放大镜与显微镜",
      "related_formulas": []
    },
    {
      "id": "knowledge_070",
      "title": "显微镜分辨率",
      "content": "瑞利判断：σ=0.61λ/NA；道威判断：σ=0.5λ/NA。分辨率与数值孔径成正比，与波长成反比。",
      "chapter": "几何光学",
      "topic": "放大镜与显微镜",
      "related_formulas": [
        "formula_050",
        "formula_051",
        "formula_052"
      ]
    },
    {
      "id": "knowledge_071",
      "title": "显微镜有效放大率",
      "content": "500NA≤Γ≤1000NA。低于500NA时细节无法分辨；高于1000NA时为无效放大。",
      "chapter": "几何光学",
      "topic": "放大镜与显微镜",
      "related_formulas": [
        "formula_053"
      ]
    },
    {
      "id": "knowledge_072",
      "title": "望远镜结构",
      "content": "开普勒望远镜：物镜和目镜均为正，中间成实像，可加分划板。伽利略望远镜：物镜正、目镜负，中间不成实像。",
      "chapter": "几何光学",
      "topic": "望远镜",
      "related_formulas": [
        "formula_054"
      ]
    },
    {
      "id": "knowledge_073",
      "title": "望远镜分辨率与放大率关系",
      "content": "φ=1.22λ/D，Γ=D/2.3为有效放大率。放大率满足φΓ=60''为眼极限分辨角。",
      "chapter": "几何光学",
      "topic": "望远镜",
      "related_formulas": [
        "formula_055",
        "formula_056"
      ]
    },
    {
      "id": "knowledge_074",
      "title": "目镜参数",
      "content": "目镜主要参数：放大率、视场角、镜目距、工作距离。镜目距与焦距之比为相对镜目距。视度调节±5屈光度。",
      "chapter": "几何光学",
      "topic": "望远镜",
      "related_formulas": []
    },
    {
      "id": "knowledge_075",
      "title": "摄影系统特性",
      "content": "摄影物镜光学特性：焦距、相对孔径(D/f')、视场角。焦距决定成像大小，相对孔径决定照度和分辨率，视场角决定成像范围。",
      "chapter": "几何光学",
      "topic": "摄影系统",
      "related_formulas": [
        "formula_057",
        "formula_058"
      ]
    },
    {
      "id": "knowledge_076",
      "title": "摄影分辨率",
      "content": "经验公式：N=1475/F。分辨率与光圈数成反比。大视场物镜像面照度按cos⁴ω'衰减。",
      "chapter": "几何光学",
      "topic": "摄影系统",
      "related_formulas": [
        "formula_057",
        "formula_058"
      ]
    },
    {
      "id": "knowledge_077",
      "title": "变焦物镜",
      "content": "变倍比M=f_max/f_min。变焦过程中保持像面位置和焦距连续变化。",
      "chapter": "几何光学",
      "topic": "摄影系统",
      "related_formulas": []
    },
    {
      "id": "knowledge_078",
      "title": "投影系统",
      "content": "基本参数：垂轴放大率、焦距、视场角、相对孔径。照明系统拉赫不变量应大于投影系统拉赫不变量。",
      "chapter": "几何光学",
      "topic": "摄影系统",
      "related_formulas": []
    },
    {
      "id": "knowledge_079",
      "title": "照明方式",
      "content": "临界照明：光源直接照明，不均匀。柯勒照明：光源成像在入瞳处，均匀照明。",
      "chapter": "几何光学",
      "topic": "摄影系统",
      "related_formulas": []
    },
    {
      "id": "knowledge_080",
      "title": "麦克斯韦方程组",
      "content": "积分形式：高斯电定律、高斯磁定律、法拉第定律、安培-麦克斯韦定律。微分形式描述空间各点场的关系。",
      "chapter": "物理光学",
      "topic": "电磁理论",
      "related_formulas": [
        "formula_061"
      ]
    },
    {
      "id": "knowledge_081",
      "title": "物质方程",
      "content": "各向同性介质中D=εE，B=μH，j=σE。线性介质极化强度与电场成正比。透明介质ρ=0,j=0。",
      "chapter": "物理光学",
      "topic": "电磁理论",
      "related_formulas": []
    },
    {
      "id": "knowledge_082",
      "title": "电磁波速度",
      "content": "真空中c=1/√(ε₀μ₀)，介质中v=c/n。折射率n=√(εᵣμᵣ)≈√εᵣ。",
      "chapter": "物理光学",
      "topic": "电磁理论",
      "related_formulas": [
        "formula_063",
        "formula_064"
      ]
    },
    {
      "id": "knowledge_083",
      "title": "均匀介质与各向同性",
      "content": "均匀介质：折射率不随空间位置变化。各向同性介质：同一点沿各方向性质相同。无色散介质：极化特性与频率无关。",
      "chapter": "物理光学",
      "topic": "电磁理论",
      "related_formulas": []
    },
    {
      "id": "knowledge_084",
      "title": "平面简谐波",
      "content": "E(z,t)=Acos(kz-ωt+φ₀)。空间周期λ，时间周期T，频率ν=1/T，角频率ω=2πν。波数k=2π/λ=ω/v。",
      "chapter": "物理光学",
      "topic": "波动方程",
      "related_formulas": [
        "formula_065",
        "formula_066"
      ]
    },
    {
      "id": "knowledge_085",
      "title": "三维平面波",
      "content": "沿任意方向传播时E=Acos(k·r-ωt)。波矢k的大小为2π/λ，方向为传播方向。",
      "chapter": "物理光学",
      "topic": "波动方程",
      "related_formulas": []
    },
    {
      "id": "knowledge_086",
      "title": "复数表示",
      "content": "E=Ae^(i(k·r-ωt))=Ae^(ik·r)·e^(-iωt)。空间相位因子e^(ik·r)和时间相位因子e^(-iωt)分离。复振幅Ã=Ae^(ik·r)。",
      "chapter": "物理光学",
      "topic": "波动方程",
      "related_formulas": []
    },
    {
      "id": "knowledge_087",
      "title": "球面波与柱面波",
      "content": "球面波：E=(A/r)e^(±i(kr-ωt))，发散取+，会聚取-。柱面波振幅按1/√r衰减。",
      "chapter": "物理光学",
      "topic": "波动方程",
      "related_formulas": []
    },
    {
      "id": "knowledge_088",
      "title": "光的干涉条件",
      "content": "相干条件：频率相同、振动方向相同、相位差恒定。普通光源为扩展光源，各点独立发光。",
      "chapter": "物理光学",
      "topic": "干涉",
      "related_formulas": []
    },
    {
      "id": "knowledge_089",
      "title": "干涉光强公式",
      "content": "I=I₁+I₂+2√(I₁I₂)cosδ。当δ=2mπ时Imax=(√I₁+√I₂)²；当δ=(2m+1)π时Imin=(√I₁-√I₂)²。",
      "chapter": "物理光学",
      "topic": "干涉",
      "related_formulas": [
        "formula_067",
        "formula_068",
        "formula_069",
        "formula_070"
      ]
    },
    {
      "id": "knowledge_090",
      "title": "条纹可见度",
      "content": "K=(Imax-Imin)/(Imax+Imin)。K=1时可见度最好；K=0时无干涉。影响因素：振幅比、光源大小、非单色性。",
      "chapter": "物理光学",
      "topic": "干涉",
      "related_formulas": [
        "formula_084"
      ]
    },
    {
      "id": "knowledge_091",
      "title": "光源临界宽度",
      "content": "光源宽度b<λR/d时可见度较好。R为光源到双缝距离，d为双缝间距。",
      "chapter": "物理光学",
      "topic": "干涉",
      "related_formulas": []
    },
    {
      "id": "knowledge_092",
      "title": "相干长度与相干范围",
      "content": "相干长度L_c=λ²/Δλ，是能够发生干涉的最大光程差。相干长度越长，干涉性越好。",
      "chapter": "物理光学",
      "topic": "干涉",
      "related_formulas": [
        "formula_085"
      ]
    },
    {
      "id": "knowledge_093",
      "title": "杨氏双缝干涉",
      "content": "条纹间距Δx=λD/d。光源移动时条纹移动方向与光源移动方向相反。若光源在S₁S₂垂直平分线上，中央亮纹在中心。",
      "chapter": "物理光学",
      "topic": "干涉",
      "related_formulas": [
        "formula_071",
        "formula_072"
      ]
    },
    {
      "id": "knowledge_094",
      "title": "菲涅尔双棱镜与劳埃德镜",
      "content": "双棱镜将一束光分成两束相干光。劳埃德镜在反射时产生半波损失（π相位突变），使中央变为暗纹。",
      "chapter": "物理光学",
      "topic": "干涉",
      "related_formulas": []
    },
    {
      "id": "knowledge_095",
      "title": "半波损失",
      "content": "光从光疏介质射向光密介质反射时产生π相位突变，附加λ/2光程差。两束光都反射或都不反射时不影响相位差。",
      "chapter": "物理光学",
      "topic": "干涉",
      "related_formulas": []
    },
    {
      "id": "knowledge_096",
      "title": "等厚干涉",
      "content": "固定入射角，光程差仅由厚度决定。空气劈尖：Δx=λ/(2nα)。牛顿环：r_m²=mRλ。",
      "chapter": "物理光学",
      "topic": "干涉",
      "related_formulas": [
        "formula_073",
        "formula_074",
        "formula_075"
      ]
    },
    {
      "id": "knowledge_097",
      "title": "等倾干涉",
      "content": "固定厚度，光程差仅由入射角决定。同一入射角对应同一级干涉环，为同心圆。级次内高外低。",
      "chapter": "物理光学",
      "topic": "干涉",
      "related_formulas": [
        "formula_079"
      ]
    },
    {
      "id": "knowledge_098",
      "title": "薄膜干涉应用",
      "content": "增透膜：2nh=(m+1/2)λ。增反膜：2nh=mλ。反射率取决于折射率匹配和膜层设计。",
      "chapter": "物理光学",
      "topic": "干涉",
      "related_formulas": [
        "formula_077",
        "formula_078"
      ]
    },
    {
      "id": "knowledge_099",
      "title": "迈克尔逊干涉仪",
      "content": "光程差ΔL=2dcosi₁。改变d时条纹吞吐。补偿板消除色散。可用于测量波长、长度和折射率。",
      "chapter": "物理光学",
      "topic": "干涉",
      "related_formulas": [
        "formula_080"
      ]
    },
    {
      "id": "knowledge_100",
      "title": "法布里-珀罗干涉仪",
      "content": "多光束干涉，高反射率时条纹极锐。色分辨本领R_λ=mN·π√R/(1-R)。应用于光谱分析和激光谐振腔。",
      "chapter": "物理光学",
      "topic": "干涉",
      "related_formulas": [
        "formula_081",
        "formula_082",
        "formula_083"
      ]
    },
    {
      "id": "knowledge_101",
      "title": "菲涅尔衍射与夫琅禾费衍射",
      "content": "菲涅尔衍射：光源或屏幕到障碍物距离有限。夫琅禾费衍射：光源和屏幕都在无限远（或透镜实现）。",
      "chapter": "物理光学",
      "topic": "衍射",
      "related_formulas": []
    },
    {
      "id": "knowledge_102",
      "title": "菲涅尔半波带法",
      "content": "将波面分成若干个半波带，相邻半波带到考察点的光程差为λ/2，相位差为π。奇数个半波带亮，偶数个暗。",
      "chapter": "物理光学",
      "topic": "衍射",
      "related_formulas": [
        "formula_097"
      ]
    },
    {
      "id": "knowledge_103",
      "title": "菲涅尔波带片",
      "content": "遮挡偶数或奇数半波带，使剩余半波带同相叠加，起会聚作用。焦距f=ρ_m²/(mλ)。",
      "chapter": "物理光学",
      "topic": "衍射",
      "related_formulas": [
        "formula_098"
      ]
    },
    {
      "id": "knowledge_104",
      "title": "单缝夫琅禾费衍射",
      "content": "光强I=I₀(sinα/α)²，α=(πa sinθ)/λ。暗纹条件：a sinθ=mλ。中央亮纹宽度约为其他亮纹的两倍。",
      "chapter": "物理光学",
      "topic": "衍射",
      "related_formulas": [
        "formula_086",
        "formula_087",
        "formula_088"
      ]
    },
    {
      "id": "knowledge_105",
      "title": "矩孔衍射",
      "content": "矩孔衍射为两个垂直方向单缝衍射的乘积。光强分布由两个sinc函数相乘得到。",
      "chapter": "物理光学",
      "topic": "衍射",
      "related_formulas": [
        "formula_089"
      ]
    },
    {
      "id": "knowledge_106",
      "title": "圆孔衍射与艾里斑",
      "content": "圆孔衍射第一暗环角半径θ=1.22λ/D。艾里斑能量约占总能量的84%。瑞利判据以此作为分辨极限。",
      "chapter": "物理光学",
      "topic": "衍射",
      "related_formulas": [
        "formula_090"
      ]
    },
    {
      "id": "knowledge_107",
      "title": "多缝衍射",
      "content": "光强=单缝衍射因子×多缝干涉因子。主极大位置由光栅方程决定，次极大数目=N-2，极小数目=N-1。",
      "chapter": "物理光学",
      "topic": "衍射",
      "related_formulas": [
        "formula_091"
      ]
    },
    {
      "id": "knowledge_108",
      "title": "缺级现象",
      "content": "当干涉主极大与衍射极小重合时出现缺级。缺级条件：d/a=k，第k,2k,3k...级缺级。",
      "chapter": "物理光学",
      "topic": "衍射",
      "related_formulas": []
    },
    {
      "id": "knowledge_109",
      "title": "光栅方程",
      "content": "d(sinθ_i+sinθ_m)=mλ。正入射时简化为d sinθ=mλ。光栅方程决定各级主极大的位置。",
      "chapter": "物理光学",
      "topic": "衍射",
      "related_formulas": [
        "formula_092"
      ]
    },
    {
      "id": "knowledge_110",
      "title": "光栅色散",
      "content": "角色散D_θ=m/(d cosθ)，线色散D_l=mf/(d cosθ)。级次越高，色散越大。0级主极大无法分光。",
      "chapter": "物理光学",
      "topic": "衍射",
      "related_formulas": [
        "formula_093",
        "formula_094"
      ]
    },
    {
      "id": "knowledge_111",
      "title": "光栅分辨本领",
      "content": "R=λ/Δλ=mN。与衍射级次和总缝数成正比。N增大时主极大更锐，分辨能力更强。",
      "chapter": "物理光学",
      "topic": "衍射",
      "related_formulas": [
        "formula_095"
      ]
    },
    {
      "id": "knowledge_112",
      "title": "光栅自由光谱范围",
      "content": "Δλ=λ/m。第m级光谱不与相邻级次重叠的最大波长范围。级次越高，自由光谱范围越小。",
      "chapter": "物理光学",
      "topic": "衍射",
      "related_formulas": [
        "formula_096"
      ]
    },
    {
      "id": "knowledge_113",
      "title": "闪耀光栅",
      "content": "将干涉零级与衍射中央极大分开，使能量集中在某一级光谱上。闪耀条件：2d sinθ_b=mλ_b。",
      "chapter": "物理光学",
      "topic": "衍射",
      "related_formulas": [
        "formula_099"
      ]
    },
    {
      "id": "knowledge_114",
      "title": "晶体衍射",
      "content": "X射线在晶体中衍射满足布拉格公式2d sinθ=mλ。d为晶面间距，θ为布拉格角。",
      "chapter": "物理光学",
      "topic": "衍射",
      "related_formulas": [
        "formula_100"
      ]
    },
    {
      "id": "knowledge_115",
      "title": "光的偏振态",
      "content": "五种偏振态：线偏振光、圆偏振光、椭圆偏振光、自然光（非偏振光）、部分偏振光。",
      "chapter": "物理光学",
      "topic": "偏振",
      "related_formulas": []
    },
    {
      "id": "knowledge_116",
      "title": "线偏振光与圆偏振光",
      "content": "线偏振光可分解为两个同相或反相的垂直振动。圆偏振光可分解为两个振幅相等、相位差±π/2的垂直振动。",
      "chapter": "物理光学",
      "topic": "偏振",
      "related_formulas": [
        "formula_112"
      ]
    },
    {
      "id": "knowledge_117",
      "title": "偏振片",
      "content": "利用二向色性产生线偏振光，可作起偏器和检偏器。马吕斯定律：I=I₀cos²θ。",
      "chapter": "物理光学",
      "topic": "偏振",
      "related_formulas": [
        "formula_101"
      ]
    },
    {
      "id": "knowledge_118",
      "title": "五种偏振光通过偏振片",
      "content": "线偏振光：光强按cos²θ变化，有消光。圆偏振光：光强减半，不变化。椭圆偏振光：有极大极小，无消光。自然光：光强减半。部分偏振光：有极大极小，无消光。",
      "chapter": "物理光学",
      "topic": "偏振",
      "related_formulas": [
        "formula_101",
        "formula_102"
      ]
    },
    {
      "id": "knowledge_119",
      "title": "偏振度",
      "content": "P=(Imax-Imin)/(Imax+Imin)。线偏振光P=1；圆偏振光和自然光P=0；椭圆偏振光和部分偏振光0<P<1。",
      "chapter": "物理光学",
      "topic": "偏振",
      "related_formulas": [
        "formula_102"
      ]
    },
    {
      "id": "knowledge_120",
      "title": "双折射",
      "content": "各向异性晶体中，光分解为o光和e光。o光遵守折射定律，e光一般不遵守。光轴方向无双折射。",
      "chapter": "物理光学",
      "topic": "偏振",
      "related_formulas": []
    },
    {
      "id": "knowledge_121",
      "title": "o光与e光",
      "content": "o光：振动方向垂直于主平面，折射率n_o恒定。e光：振动方向平行于主平面，折射率随方向变化。",
      "chapter": "物理光学",
      "topic": "偏振",
      "related_formulas": []
    },
    {
      "id": "knowledge_122",
      "title": "正晶体与负晶体",
      "content": "正晶体（如石英）：n_e>n_o，e光传播速度小于o光。负晶体（如方解石）：n_e<n_o，e光传播速度大于o光。",
      "chapter": "物理光学",
      "topic": "偏振",
      "related_formulas": []
    },
    {
      "id": "knowledge_123",
      "title": "双折射棱镜",
      "content": "罗雄棱镜、沃拉斯顿棱镜、尼科尔棱镜等。利用双折射分离o光和e光，或产生偏振光。",
      "chapter": "物理光学",
      "topic": "偏振",
      "related_formulas": []
    },
    {
      "id": "knowledge_124",
      "title": "波片",
      "content": "利用双折射产生o光和e光的光程差，改变偏振态。波片不改变光强，只改变相位。",
      "chapter": "物理光学",
      "topic": "偏振",
      "related_formulas": [
        "formula_106"
      ]
    },
    {
      "id": "knowledge_125",
      "title": "四分之一波片",
      "content": "产生π/2相位差。线偏振光入射时，若振动方向与光轴成45°则出射圆偏振光；否则出射椭圆偏振光。圆偏振光入射时出射线偏振光。",
      "chapter": "物理光学",
      "topic": "偏振",
      "related_formulas": [
        "formula_107"
      ]
    },
    {
      "id": "knowledge_126",
      "title": "二分之一波片",
      "content": "产生π相位差。线偏振光入射时出射仍为线偏振光，但振动方向关于光轴对称。圆偏振光入射时旋向反转。",
      "chapter": "物理光学",
      "topic": "偏振",
      "related_formulas": [
        "formula_108"
      ]
    },
    {
      "id": "knowledge_127",
      "title": "全波片",
      "content": "产生2π相位差。不改变偏振态，只改变相位参考。",
      "chapter": "物理光学",
      "topic": "偏振",
      "related_formulas": [
        "formula_109"
      ]
    },
    {
      "id": "knowledge_128",
      "title": "偏振光检验",
      "content": "用偏振片和波片组合可检验五种偏振光。关键是区分圆偏振光与自然光、椭圆偏振光与部分偏振光。",
      "chapter": "物理光学",
      "topic": "偏振",
      "related_formulas": []
    },
    {
      "id": "knowledge_129",
      "title": "偏振光干涉",
      "content": "线偏振光通过波片后产生相位差，再通过检偏器产生干涉。波片厚度不均时可形成明暗相间的条纹。",
      "chapter": "物理光学",
      "topic": "偏振",
      "related_formulas": []
    },
    {
      "id": "knowledge_130",
      "title": "色偏振",
      "content": "多种波长的光入射时，转动偏振片屏上颜色变化，这是偏振光干涉的结果。",
      "chapter": "物理光学",
      "topic": "偏振",
      "related_formulas": []
    },
    {
      "id": "knowledge_131",
      "title": "旋光",
      "content": "线偏振光通过旋光物质后振动面旋转θ=αl。左旋和右旋由物质结构决定。石英有左右旋两种。",
      "chapter": "物理光学",
      "topic": "偏振",
      "related_formulas": [
        "formula_110"
      ]
    },
    {
      "id": "knowledge_132",
      "title": "法拉第效应",
      "content": "磁致旋光：磁场使介质产生旋光性，旋转角θ=VBl。旋转方向与磁场方向有关，与光传播方向无关。可用于光隔离器。",
      "chapter": "物理光学",
      "topic": "偏振",
      "related_formulas": [
        "formula_111"
      ]
    },
    {
      "id": "knowledge_133",
      "title": "克尔效应与泡克尔斯效应",
      "content": "克尔效应：电场导致各向同性介质产生双折射，Δn∝E²。泡克尔斯效应：某些晶体在外电场下产生双折射，Δn∝E。",
      "chapter": "物理光学",
      "topic": "偏振",
      "related_formulas": []
    },
    {
      "id": "knowledge_134",
      "title": "菲涅尔公式",
      "content": "s波和p波在界面反射和折射的振幅比。rs=-sin(θ₁-θ₂)/sin(θ₁+θ₂)，rp=tan(θ₁-θ₂)/tan(θ₁+θ₂)。",
      "chapter": "物理光学",
      "topic": "偏振",
      "related_formulas": [
        "formula_104",
        "formula_105"
      ]
    },
    {
      "id": "knowledge_135",
      "title": "布儒斯特角",
      "content": "tanθ_B=n₂/n₁。入射角为布儒斯特角时，p波反射率为0，反射光为纯s波线偏振光。反射光与折射光垂直。",
      "chapter": "物理光学",
      "topic": "偏振",
      "related_formulas": [
        "formula_103"
      ]
    },
    {
      "id": "knowledge_136",
      "title": "半波损失分析",
      "content": "正入射时：光疏到光密反射有π相位突变（半波损失）。掠入射时：s波和p波均有π相位突变。",
      "chapter": "物理光学",
      "topic": "偏振",
      "related_formulas": []
    },
    {
      "id": "knowledge_137",
      "title": "斯托克斯关系",
      "content": "r²+tt'=1。振幅反射率和透射率满足能量守恒和光路可逆关系。",
      "chapter": "物理光学",
      "topic": "偏振",
      "related_formulas": []
    },
    {
      "id": "knowledge_138",
      "title": "垂直振动合成",
      "content": "两个频率相同、方向垂直的简谐振动合成轨迹为椭圆。相位差δ=0或π时为直线；δ=±π/2且A₁=A₂时为圆。",
      "chapter": "物理光学",
      "topic": "偏振",
      "related_formulas": [
        "formula_112"
      ]
    },
    {
      "id": "knowledge_139",
      "title": "椭圆旋向",
      "content": "sinδ>0为右旋（迎着光看顺时针），sinδ<0为左旋。圆偏振光和椭圆偏振光都有确定的旋向。",
      "chapter": "物理光学",
      "topic": "偏振",
      "related_formulas": []
    },
    {
      "id": "knowledge_140",
      "title": "倾斜入射矩孔衍射",
      "content": "入射光倾斜时，衍射图样中心移至θ=θ₀方向，半角宽Δθ=λ/(a cosθ₀)。",
      "chapter": "物理光学",
      "topic": "衍射",
      "related_formulas": []
    },
    {
      "id": "knowledge_141",
      "title": "正弦差",
      "content": "不满足正弦条件时，近轴区与边缘区放大率不一致。正弦差为0表示满足等晕条件。",
      "chapter": "几何光学",
      "topic": "像差理论",
      "related_formulas": [
        "formula_117"
      ]
    },
    {
      "id": "knowledge_142",
      "title": "倍率色差",
      "content": "F光与C光的垂轴放大率不同，造成不同颜色像的大小差异。",
      "chapter": "几何光学",
      "topic": "像差理论",
      "related_formulas": [
        "formula_118"
      ]
    }
  ]
};
