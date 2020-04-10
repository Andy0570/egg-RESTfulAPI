module.exports = app => {
  const mongoose = app.mongoose;

  const AttachmentSchema = new mongoose.Schema({
    extname: { type: String }, // 文件扩展名称
    url: { type: String }, // 文件完整 URL 路径名称
    filename: { type: String }, // 文件名称
    extra: { type: String }, // 图片描述信息
    createdAt: { type: Date, default: Date.now },
  });

  return mongoose.model('Attachment', AttachmentSchema);
};
