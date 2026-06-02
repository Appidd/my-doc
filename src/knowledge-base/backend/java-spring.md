# Java 与 Spring Boot 后端开发要点

Java 适合承载稳定、可维护、多人协作的业务系统。对全栈开发来说，掌握 Java 不只是会写接口，更重要的是理解分层设计、事务边界、数据一致性、接口安全和线上问题排查。

## 核心能力地图

| 方向 | 关键能力 | 项目落地点 |
| --- | --- | --- |
| Java 基础 | 集合、泛型、异常、反射、注解、Stream | 编写清晰稳定的业务逻辑 |
| Spring Boot | Controller、Service、Repository、配置管理 | 快速搭建 RESTful API |
| 数据访问 | MyBatis、JPA、分页、动态查询 | 后台管理系统、订单、库存、用户模块 |
| 事务控制 | `@Transactional`、传播机制、回滚规则 | 支付、积分、库存扣减、审核流程 |
| 安全认证 | JWT、Session、权限校验、接口签名 | 管理端登录、角色权限、小程序用户认证 |
| 工程质量 | 参数校验、统一响应、统一异常、日志追踪 | 降低联调成本，提升可维护性 |

## 常见分层结构

```text
controller  接收请求、参数校验、返回响应
service     承载业务流程和事务边界
repository  负责数据访问和持久化
domain      业务模型、枚举、值对象
config      跨域、拦截器、权限、第三方配置
```

这种结构的价值在于让接口、业务和数据访问职责清晰。当前端需要调整页面字段或交互流程时，后端也能快速定位修改范围，避免把所有逻辑堆在 Controller 中。

## RESTful API 示例

```java
@RestController
@RequestMapping("/api/articles")
public class ArticleController {
    private final ArticleService articleService;

    public ArticleController(ArticleService articleService) {
        this.articleService = articleService;
    }

    @PostMapping
    public ApiResult<Long> create(@Valid @RequestBody ArticleCreateRequest request) {
        return ApiResult.success(articleService.create(request));
    }

    @GetMapping("/{id}")
    public ApiResult<ArticleDetailResponse> detail(@PathVariable Long id) {
        return ApiResult.success(articleService.detail(id));
    }
}
```

接口设计重点：

- 入参使用 DTO，避免直接暴露数据库实体。
- 输出使用统一响应结构，便于前端统一处理成功、失败和错误码。
- 业务逻辑放在 Service，Controller 只负责协议层。
- 关键操作记录日志，方便线上追踪。

## 事务与一致性

业务系统中经常会遇到“一个操作影响多张表”的场景，例如积分兑换商品：

1. 校验用户积分是否足够。
2. 扣减用户积分。
3. 扣减商品库存。
4. 创建兑换订单。
5. 写入积分流水。

这类流程应把事务边界放在 Service 层：

```java
@Transactional(rollbackFor = Exception.class)
public Long exchangeGoods(ExchangeRequest request) {
    userPointService.deduct(request.getUserId(), request.getPoint());
    goodsStockService.lockStock(request.getGoodsId(), request.getCount());
    Long orderId = orderService.createExchangeOrder(request);
    pointLogService.record(request.getUserId(), orderId, request.getPoint());
    return orderId;
}
```

全栈开发需要能从页面交互一路追到数据变化：按钮点击、接口请求、服务端校验、数据库写入、异常回滚，这条链路越清晰，定位问题越快。

## 面试高频关注点

- `ArrayList` 和 `LinkedList` 的适用场景。
- HashMap 的扩容机制和线程安全问题。
- Spring Bean 生命周期与依赖注入。
- `@Transactional` 失效场景，例如同类内部方法调用。
- MyBatis 的一级缓存、动态 SQL 和 N+1 查询问题。
- 如何设计一个登录态、权限控制和接口防刷方案。
- 如何定位接口慢、数据库慢、偶发空指针或并发问题。

## 实战总结

对求职展示来说，Java 能增强“全栈可落地”的可信度。全栈开发者如果能说清楚接口设计、事务、权限、日志、数据库查询优化和 AI 应用接入方式，就不仅是会写页面或接口，而是具备从业务入口到数据落库、再到智能化增强的完整交付能力。
