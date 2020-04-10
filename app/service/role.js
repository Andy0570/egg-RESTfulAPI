const Service = require('egg').Service;

class RoleService extends Service {
  // create======================================================================================================>
  async create(payload) {
    return this.ctx.model.Role.create(payload);
  }

  // destroy======================================================================================================>
  async destroy(_id) {
    const { ctx, service } = this;
    const role = await ctx.service.role.find(_id);
    if (!role) {
      ctx.throw(404, 'role not found');
    }
    return ctx.model.Role.findByIdAndRemove(_id);
  }

  // update======================================================================================================>
  async update(_id, payload) {
    const { ctx, service } = this;
    const role = await ctx.service.role.find(_id);
    if (!role) {
      ctx.throw(404, 'role not found');
    }
    return ctx.model.Role.findByIdAndUpdate(_id, payload);
  }

  // show======================================================================================================>
  async show(_id) {
    const role = await this.ctx.service.role.find(_id);
    if (!role) {
      this.ctx.throw(404, 'role not found');
    }
    return this.ctx.model.Role.findById(_id);
  }

  // index======================================================================================================>
  async index(payload) {
    const { currentPage, pageSize, isPaging, search } = payload;
    let res = [];
    let count = 0;
    let skip = (Number(currentPage) - 1) * Number(pageSize || 10);
    // 是否分页返回
    if (isPaging) {
      if (search) {
        res = await this.ctx.model.Role.find({ name: { $regex: search } })
          .skip(skip)
          .limit(Number(pageSize || 10))
          .sort({ createdAt: -1 })
          .exec();
        count = res.length;
      } else {
        res = await this.ctx.model.Role.find({})
          .skip(skip)
          .limit(Number(pageSize || 10))
          .sort({ createdAt: -1 })
          .exec();
        count = await this.ctx.model.Role.count({}).exec();
      }
    } else {
      if (search) {
        res = await this.ctx.model.Role.find({ name: { $regex: search } })
          .sort({ createdAt: -1 })
          .exec();
        count = res.length;
      } else {
        res = await this.ctx.model.Role.find({})
          .sort({ createdAt: -1 })
          .exec();
        count = await this.ctx.model.Role.count({}).exec();
      }
    }
    // 整理数据源 -> Ant Design Pro
    // map() 对数组中的每一项运行给定函数，返回每次函数调用结果组成的数组。
    let data = res.map((element, index) => {
      // `Object.assign()`：原生实现了很多第三方库的混合（Mixin）方法。
      const jsonObject = Object.assign({}, element._doc);
      jsonObject.key = index;
      jsonObject.createdAt = this.ctx.helper.formatTime(element.createdAt); // 格式化时间
      return jsonObject;
    });

    return {
      count: count,
      list: data,
      pageSize: Number(pageSize),
      currentPage: Number(currentPage),
    };
  }

  // removes======================================================================================================>
  async removes(values) {
    return this.ctx.model.Role.remove({ _id: { $in: values } });
  }

  // Commons======================================================================================================>
  async find(id) {
    return this.ctx.model.Role.findById(id);
  }
}

module.exports = RoleService;
