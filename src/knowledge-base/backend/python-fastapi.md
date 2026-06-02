# Python 与 FastAPI 服务开发

Python 适合快速构建脚本工具、数据处理服务、自动化任务和轻量级 Web API。对全栈开发来说，Python 的价值在于提高交付效率：能写接口、能处理数据、能做自动化、能快速验证业务想法。

## 适用场景

| 场景 | 技术选择 | 价值 |
| --- | --- | --- |
| 接口服务 | FastAPI、Pydantic、Uvicorn | 快速构建类型清晰的 REST API |
| 数据处理 | Pandas、OpenPyXL、CSV | 处理报表、导入导出、运营数据 |
| 自动化脚本 | Requests、Schedule、Click | 定时同步、批量生成、巡检脚本 |
| 爬取与解析 | HTTPX、BeautifulSoup | 抓取公开页面、整理资料 |
| AI 工具接入 | SDK、向量库、Prompt 编排 | 扩展智能问答、内容生成能力 |

## FastAPI 基础结构

```text
app/
  main.py
  routers/
    users.py
    articles.py
  schemas/
    user.py
  services/
    article_service.py
  repositories/
    article_repository.py
```

## 接口示例

```python
from fastapi import FastAPI
from pydantic import BaseModel, Field

app = FastAPI(title="resume-fullstack-api")


class ArticleCreateRequest(BaseModel):
    title: str = Field(min_length=1, max_length=100)
    content: str = Field(min_length=1)


@app.post("/api/articles")
def create_article(request: ArticleCreateRequest):
    return {
        "code": 0,
        "message": "success",
        "data": {
            "title": request.title,
            "status": "draft"
        }
    }
```

FastAPI 的优势：

- 类型提示清晰，接口字段更容易维护。
- Pydantic 自动做参数校验。
- 自动生成 OpenAPI 文档，方便前后端联调。
- 开发速度快，适合中后台、内部工具和原型验证。

## 数据处理示例

```python
import pandas as pd

df = pd.read_excel("orders.xlsx")
summary = (
    df.groupby("status")["amount"]
    .sum()
    .reset_index()
    .sort_values("amount", ascending=False)
)
summary.to_excel("order-summary.xlsx", index=False)
```

在业务项目中，Python 可以承担很多“提高效率”的工作：

- 批量处理运营表格。
- 导出用户、订单、活动报名数据。
- 自动生成接口 Mock 数据。
- 检查图片、Markdown、链接等资源是否缺失。
- 生成日报、周报或项目统计信息。

## 与前端联动

全栈开发不是把所有技术都写到极深，而是能让链路跑通：

1. 前端页面发起请求。
2. Python 服务完成参数校验。
3. Service 处理业务逻辑。
4. Repository 读写数据库。
5. 返回统一响应结构。
6. 前端根据错误码、状态码展示交互。

这种能力适合中小团队快速交付，也适合在大团队里承担工具平台、数据后台、管理端接口等工作。

## 面试表达建议

- Python 用于脚本、数据处理、接口服务和自动化，不只停留在语法层。
- FastAPI 可用于快速搭建内部工具接口，提升前后端联调效率。
- 能结合前端页面、接口文档、数据库表结构一起设计功能。
- 对文件处理、报表导入导出、定时任务和日志排查有实际理解。
