

## user


| 参数      | 类型   | 是否必填 | 最大长度 | 描述     | 示例值 |
| --------- | ------ | -------- | -------- | -------- | ------ |
| mobile    | String | 是       |          | 手机号码 |        |
| password  | String | 是       |          | 密码     |        |
| realName  | String | 是       |          | 真实姓名 |        |
| role      | String |          |          | 角色     |        |
| avatar    | Date   |          |          | 头像     |        |
| extra     | mixed  |          |          |          |        |
| createdAt | Date   |          |          | 创建时间 |        |



```js
// user
// router.get('/api/user', controller.user.index)
// router.get('/api/user/:id', controller.user.show)
// router.post('/api/user', controller.user.create)
// router.put('/api/user/:id', controller.user.update)
// router.delete('/api/user/:id', controller.user.destroy)
router.delete('/api/user', controller.user.removes);
router.resources('user', '/api/user', controller.user);
```





## role


| 参数      | 类型   | 是否必填 | 最大长度 | 描述     | 示例值 |
| --------- | ------ | -------- | -------- | -------- | ------ |
| name      | String | 是       |          | 角色名称 |        |
| access    | String | 是       |          |          |        |
| extra     | String |          |          |          |        |
| createdAt | Date   |          |          | 创建时间 |        |



```js
// role
// router.get('/api/role', controller.role.index)
// router.get('/api/role/:id', controller.role.show)
// router.post('/api/role', controller.role.create)
// router.put('/api/role/:id', controller.role.update)
// router.delete('/api/role/:id', controller.role.destroy)
router.delete('/api/role', controller.role.removes);
router.resources('role', '/api/role', controller.role);


```



### 接口调用示例



```bash
# 创建角色
curl --request POST http://localhost:7001/api/role \
     --data '{"name":"role1","access":"access1"}' \
     --header 'Content-Type:application/json; charset=UTF-8'

{
	"code": 0,
	"data": {
		"__v": 0,
		"name": "role1",
		"_id": "5def3fc6d5940a7e1ec64739",
		"createdAt": "2019-12-10T06:48:38.268Z",
		"access": "access1"
	},
	"msg": "请求成功"
}

# 获取单个角色
curl http://localhost:7001/api/role/5def3fc6d5940a7e1ec64739

{
	"code": 0,
	"data": {
		"_id": "5def3fc6d5940a7e1ec64739",
		"name": "role1",
		"__v": 0,
		"createdAt": "2019-12-10T06:48:38.268Z",
		"access": "access1"
	},
	"msg": "请求成功"
}

# 修改角色
curl --request PUT http://localhost:7001/api/role/5def3fc6d5940a7e1ec64739 \
     --data '{"name":"role2","access":"access2"}' \
     --header 'Content-Type:application/json; charset=UTF-8'
     
{
	"code": 0,
	"data": null,
	"msg": "请求成功"
}

# 删除单个角色
curl --request DELETE http://localhost:7001/api/role/5def3fc6d5940a7e1ec64739

{
	"code": 0,
	"data": null,
	"msg": "请求成功"
}

# 获取所有角色（分页/模糊）
curl http://localhost:7001/api/role \
     --get --data 'currentPage=1&pageSize=3&isPaging=YES&search=role1'
     
{
	"code": 0,
	"data": {
		"count": 2,
		"list": [{
			"access": "access1",
			"createdAt": "2019-12-10 15:27:11",
			"__v": 0,
			"name": "role10",
			"_id": "5def48cfd5940a7e1ec64743",
			"key": 0
		}, {
			"access": "access1",
			"createdAt": "2019-12-10 15:25:39",
			"__v": 0,
			"name": "role1",
			"_id": "5def4873d5940a7e1ec6473a",
			"key": 1
		}],
		"pageSize": 3,
		"currentPage": 1
	},
	"msg": "请求成功"
}

# 删除所选角色
curl --request DELETE http://localhost:7001/api/role \
     --data '{"id":"5def48cfd5940a7e1ec64743,5def48c8d5940a7e1ec64742"}' \
     --header 'Content-Type:application/json; charset=UTF-8'
     
{
	"code": 0,
	"data": null,
	"msg": "请求成功"
}
```














### Attachment

| 参数      | 类型   | 是否必填 | 最大长度 | 描述     | 示例值 |
| --------- | ------ | -------- | -------- | -------- | ------ |
| extname   | String |          |          |          |        |
| url       | String |          |          | 链接     |        |
| filename  | String |          |          | 文件名   |        |
| extra     | String |          |          |          |        |
| createdAt | Date   |          |          | 创建时间 |        |





