const eventIdHash = {}
function promiseBtnInit(el, binding, vnode) {
  const externalProps = vnode.ctx.vnode.props
  const uid = vnode.ctx.uid
  const innerProps = vnode.ctx.props
  let func
  if (eventIdHash[uid]) {
    func = eventIdHash[uid]
  } else {
    func = externalProps.onClick
    eventIdHash[uid] = func
  }
  if (externalProps.onClick) {
    externalProps.onClick = () => {
      innerProps.loading = true
      const run = func()
      if (run && run.then) {
        run.finally(() => {
          innerProps.loading = false
        })
      } else {
        innerProps.loading = false
        console.error('promise-btn的click事件处理函数应返回promise')
      }
    }
  }
}
const vPromiseBtn = {
  mounted: (el, binding, vnode) => {
    promiseBtnInit(el, binding, vnode)
  },
  updated(el, binding, vnode) {
    promiseBtnInit(el, binding, vnode)
  },
  unmounted(el, binding, vnode) {
    const uid = vnode.ctx.uid
    delete eventIdHash[uid]
  },
}
export const promiseButton = {
  install(app) {
    app.directive('PromiseBtn', vPromiseBtn)
  },
  directive: vPromiseBtn,
}
