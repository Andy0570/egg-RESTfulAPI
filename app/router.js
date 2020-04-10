'use strict';
/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);

  // role
  // router.get('/api/role', controller.role.index)
  // router.get('/api/role/:id', controller.role.show)
  // router.post('/api/role', controller.role.create)
  // router.put('/api/role/:id', controller.role.update)
  // router.delete('/api/role/:id', controller.role.destroy)
  router.delete('/api/role', controller.role.removes);
  router.resources('role', '/api/role', controller.role);

  // user
  // router.get('/api/user', controller.user.index)
  // router.get('/api/user/:id', controller.user.show)
  // router.post('/api/user', controller.user.create)
  // router.put('/api/user/:id', controller.user.update)
  // router.delete('/api/user/:id', controller.user.destroy)
  router.delete('/api/user', controller.user.removes);
  router.resources('user', '/api/user', controller.user);

  // userAccess
  router.post('/api/user/access/login', controller.userAccess.login);
  router.get(
    '/api/user/access/current',
    app.jwt,
    controller.userAccess.current
  );
  router.get('/api/user/access/logout', controller.userAccess.logout);
  router.put(
    '/api/user/access/resetPsw',
    app.jwt,
    controller.userAccess.resetPsw
  );

  // upload
  router.get('/api/upload', controller.upload.index);
  router.get('/api/upload/:id', controller.upload.show);
  router.post('/api/upload', controller.upload.create);
  router.post('/api/upload/url', controller.upload.url); // 通过 url 链接上传？？？
  router.post('/api/uploads', controller.upload.multiple); // 多文件上传？？？
  router.put('/api/upload/:id/extra', controller.upload.extra); // 添加图片描述
  // router.put('/api/upload/:id', controller.upload.update)
  router.post('/api/upload/:id', controller.upload.update); // Ant Design Pro
  router.delete('/api/upload/:id', controller.upload.destroy);
  router.delete('/api/upload', controller.upload.removes);
  // router.resources('upload', '/api/upload', controller.upload)
};
