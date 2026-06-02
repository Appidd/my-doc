# 数据库与 SQL 设计

数据库能力是全栈开发的关键分水岭。页面上的列表、筛选、审核、库存、订单、权限，最终都会落到表结构、索引、事务和查询性能上。

## 常见业务表设计

以内容平台为例，常见表包括：

| 表 | 作用 | 关键字段 |
| --- | --- | --- |
| `user` | 用户信息 | `id`、`nickname`、`phone`、`status` |
| `article` | 文章内容 | `id`、`title`、`author_id`、`audit_status` |
| `comment` | 评论 | `id`、`article_id`、`user_id`、`content` |
| `goods` | 商品 | `id`、`name`、`stock`、`point_price` |
| `order` | 订单 | `id`、`user_id`、`status`、`amount` |
| `operation_log` | 操作日志 | `id`、`operator_id`、`action`、`created_at` |

设计原则：

- 主键统一使用无业务含义的 `id`。
- 状态字段使用枚举值，前后端约定清晰。
- 高频筛选字段建立索引，例如 `status`、`created_at`、`user_id`。
- 重要操作写日志，方便审计和问题追踪。
- 删除优先考虑软删除，避免误删影响追溯。

## 索引与查询优化

后台管理系统经常有复杂筛选：

```sql
SELECT id, title, audit_status, created_at
FROM article
WHERE audit_status = 1
  AND author_id = 10001
  AND created_at >= '2026-01-01'
ORDER BY created_at DESC
LIMIT 20 OFFSET 0;
```

可以考虑建立组合索引：

```sql
CREATE INDEX idx_article_author_status_time
ON article(author_id, audit_status, created_at);
```

优化思路：

- 先看 `WHERE`、`ORDER BY`、`LIMIT`。
- 高频查询优先建立组合索引。
- 避免在索引字段上使用函数导致索引失效。
- 分页深度过大时，考虑游标分页。
- 只查询必要字段，避免 `SELECT *`。

## 事务与并发

库存扣减是典型并发问题：

```sql
UPDATE goods
SET stock = stock - 1
WHERE id = 10 AND stock > 0;
```

如果影响行数为 0，说明库存不足。相比先查再改，这种写法更适合并发扣减场景。

业务上还要考虑：

- 同一个用户是否允许重复参与活动。
- 积分扣减和订单创建是否必须同时成功。
- 审核状态流转是否允许回退。
- 支付回调是否具备幂等处理。

## Redis 常见用途

| 场景 | 用法 |
| --- | --- |
| 登录态 | 缓存 token 与用户信息 |
| 验证码 | 设置短期过期时间 |
| 热点数据 | 缓存首页配置、文章榜单 |
| 防重复提交 | 短期锁或幂等 key |
| 计数 | 浏览量、点赞量、活动参与数 |

Redis 不是为了替代数据库，而是为了降低热点压力、改善响应速度、处理短期状态。

## 全栈开发的数据库表达

简历或面试中可以这样表达：

- 能根据页面筛选、排序、分页需求反推表结构和索引设计。
- 能理解接口慢查询的定位方式，配合后端使用日志、SQL、执行计划排查。
- 熟悉事务、幂等、库存扣减、状态流转等常见业务问题。
- 能在前端、接口、数据库之间建立完整的问题定位链路。
