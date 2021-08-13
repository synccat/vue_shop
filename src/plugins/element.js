import { ElButton, ElForm, ElFormItem, ElInput } from 'element-plus'
import lang from 'element-plus/lib/locale/lang/zh-cn'
import { setLocale } from 'element-plus/lib/locale'

export default (app) => {
  setLocale(lang)
  app.use(ElButton)
  app.use(ElForm)
  app.use(ElFormItem)
  app.use(ElInput)
}
