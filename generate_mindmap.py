import json

# Read the knowledge base
with open('E:/Kimi_Project/浙工大光学/data_knowledge_base.json', 'r', encoding='utf-8') as f:
    kb = json.load(f)

formulas = {f['id']: f for f in kb['formulas']}
knowledge = {k['id']: k for k in kb['knowledge']}

# Group by chapter and topic
from collections import defaultdict
structure = defaultdict(lambda: defaultdict(list))
for f in kb['formulas']:
    structure[f['chapter']][f['topic']].append(f)
for k in kb['knowledge']:
    # knowledge items also have chapter and topic
    pass  # we'll handle knowledge separately

# Build mindmap
node_id_counter = 1
def make_id(prefix):
    global node_id_counter
    nid = f"{prefix}_{node_id_counter:03d}"
    node_id_counter += 1
    return nid

mindmap = {
    "id": "root_001",
    "name": "浙工大光学考研公式手册",
    "type": "root",
    "expanded": True,
    "children": []
}

# Define chapter order and topics for geometry optics
geo_topics = [
    ("基本定律", ["基本定律", "光波", "反射与折射", "费马原理", "成像概念"]),
    ("近轴光学", ["近轴光学"]),
    ("理想光学系统", ["理想光学系统"]),
    ("平面与平面系统", ["平面与平面系统"]),
    ("光阑与光束限制", ["光阑与景深"]),
    ("像差理论", ["像差理论"]),
    ("典型光学系统", ["眼睛与视觉", "放大镜与显微镜", "望远镜", "摄影系统", "透镜"]),
]

phy_topics = [
    ("电磁理论基础", ["电磁理论"]),
    ("光的波动方程", ["波动方程"]),
    ("光的干涉", ["干涉"]),
    ("光的衍射", ["衍射"]),
    ("光的偏振", ["偏振"]),
]

def build_branch(name, topic_groups, chapter_name):
    branch = {
        "id": make_id("branch"),
        "name": name,
        "type": "category",
        "expanded": False,
        "children": []
    }
    for section_name, topics in topic_groups:
        section = {
            "id": make_id("section"),
            "name": section_name,
            "type": "category",
            "expanded": False,
            "children": []
        }
        # collect formulas and knowledge for these topics
        for topic in topics:
            # Formulas for this topic in this chapter
            topic_formulas = [f for f in kb['formulas'] if f['chapter'] == chapter_name and f['topic'] == topic]
            # Knowledge for this topic in this chapter
            topic_knowledge = [k for k in kb['knowledge'] if k['chapter'] == chapter_name and k['topic'] == topic]
            
            if topic_formulas or topic_knowledge:
                # Create a topic node if there are multiple topics in this section or if it's a direct leaf
                if len(topics) > 1:
                    topic_node = {
                        "id": make_id("topic"),
                        "name": topic,
                        "type": "category",
                        "expanded": False,
                        "children": []
                    }
                else:
                    topic_node = section
                    topic_node["children"] = []
                
                # Add knowledge nodes
                for kn in topic_knowledge:
                    k_node = {
                        "id": make_id("knowledge"),
                        "name": kn['title'],
                        "type": "knowledge",
                        "knowledge_id": kn['id'],
                        "children": []
                    }
                    topic_node["children"].append(k_node)
                
                # Add formula nodes
                for fm in topic_formulas:
                    f_node = {
                        "id": make_id("formula"),
                        "name": fm['name'],
                        "type": "formula",
                        "formula_id": fm['id'],
                        "latex": fm['latex'],
                        "children": []
                    }
                    topic_node["children"].append(f_node)
                
                if len(topics) > 1:
                    section["children"].append(topic_node)
        
        if section["children"]:
            branch["children"].append(section)
    return branch

# Build geometry optics branch
geo_branch = build_branch("几何光学", geo_topics, "几何光学")
mindmap["children"].append(geo_branch)

# Build physical optics branch
phy_branch = build_branch("物理光学", phy_topics, "物理光学")
mindmap["children"].append(phy_branch)

# --- Quick Access Design ---

quick_access = {
    "high_frequency": {
        "title": "高频公式",
        "icon": "🔥",
        "description": "考研最常考的10个公式",
        "items": [
            {"name": "折射定律", "formula_id": "formula_001", "reason": "几何光学基础，必考"},
            {"name": "高斯公式", "formula_id": "formula_015", "reason": "理想系统成像核心公式"},
            {"name": "牛顿公式", "formula_id": "formula_014", "reason": "焦点坐标成像公式"},
            {"name": "垂轴放大率", "formula_id": "formula_006", "reason": "放大率计算基础"},
            {"name": "拉格朗日-赫姆霍兹不变量", "formula_id": "formula_009", "reason": "系统特征量"},
            {"name": "光强叠加公式", "formula_id": "formula_067", "reason": "干涉计算基础"},
            {"name": "杨氏双缝条纹间距", "formula_id": "formula_071", "reason": "干涉经典实验"},
            {"name": "单缝夫琅禾费衍射光强", "formula_id": "formula_086", "reason": "衍射基础公式"},
            {"name": "光栅方程", "formula_id": "formula_092", "reason": "光栅核心公式"},
            {"name": "马吕斯定律", "formula_id": "formula_101", "reason": "偏振光强计算"},
        ]
    },
    "confusions": {
        "title": "易混淆对比",
        "icon": "⚖️",
        "description": "对比辨析，避免丢分",
        "pairs": [
            {
                "title": "高斯公式 vs 牛顿公式",
                "formula_a": "formula_015",
                "formula_b": "formula_014",
                "diff": "高斯公式以主点为原点(1/f'=1/l'-1/l)；牛顿公式以焦点为原点(xx'=ff')。高斯公式更常用，牛顿公式在知道焦点位置时更简便。",
                "tags": ["理想光学系统", "成像公式"]
            },
            {
                "title": "等厚干涉 vs 等倾干涉",
                "formula_a": "formula_073",
                "formula_b": "formula_079",
                "diff": "等厚干涉：固定入射角，光程差由厚度决定（劈尖、牛顿环）。等倾干涉：固定厚度，光程差由入射角决定（薄膜、迈克尔逊）。条纹形状和级次分布不同。",
                "tags": ["干涉", "薄膜"]
            },
            {
                "title": "瑞利分辨率 vs 道威分辨率",
                "formula_a": "formula_051",
                "formula_b": "formula_052",
                "diff": "瑞利判据：σ=0.61λ/NA。道威判据：σ=0.5λ/NA。道威更符合实际显微镜的分辨能力。",
                "tags": ["显微镜", "分辨率"]
            },
            {
                "title": "增透膜 vs 增反膜",
                "formula_a": "formula_077",
                "formula_b": "formula_078",
                "diff": "增透膜：2nh=(m+1/2)λ，反射相消、透射增强。增反膜：2nh=mλ，反射增强、透射相消。两者光学厚度条件相差λ/4。",
                "tags": ["薄膜干涉", "应用"]
            },
            {
                "title": "四分之一波片 vs 二分之一波片",
                "formula_a": "formula_107",
                "formula_b": "formula_108",
                "diff": "λ/4波片：产生π/2相位差，线→圆（45°时）。λ/2波片：产生π相位差，线→线（振动方向关于光轴对称），圆→圆（旋向反转）。",
                "tags": ["偏振", "波片"]
            },
            {
                "title": "o光 vs e光",
                "knowledge_a": "knowledge_121",
                "diff": "o光：振动方向垂直于主平面，折射率n_o恒定，遵守折射定律。e光：振动方向平行于主平面，折射率随方向变化，一般不遵守折射定律。",
                "tags": ["双折射", "晶体"]
            }
        ]
    },
    "chapter_jump": {
        "title": "章节速查",
        "icon": "📑",
        "description": "快速跳转到某章节",
        "chapters": [
            {"name": "几何光学", "sub_chapters": ["基本定律", "近轴光学", "理想光学系统", "平面与平面系统", "光阑与光束限制", "像差理论", "典型光学系统"]},
            {"name": "物理光学", "sub_chapters": ["电磁理论基础", "光的波动方程", "光的干涉", "光的衍射", "光的偏振"]}
        ]
    }
}

output = {
    "mindmap": mindmap,
    "quick_access": quick_access,
    "meta": {
        "version": "1.0",
        "created_date": "2026-06-14",
        "total_formulas": len(kb['formulas']),
        "total_knowledge": len(kb['knowledge']),
        "source": "data_knowledge_base.json"
    }
}

with open('E:/Kimi_Project/浙工大光学/data_formula_mindmap.json', 'w', encoding='utf-8') as f:
    json.dump(output, f, ensure_ascii=False, indent=2)

print("File generated successfully!")
print(f"Total formulas: {len(kb['formulas'])}")
print(f"Total knowledge: {len(kb['knowledge'])}")
