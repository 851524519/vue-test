/**
 * Author: fanqiang
 * Date: 2020年7月21日14:17:32
 * Description: 封装的公共 loading, 应用的时候需要引入 showLoading 和 hideLoading。
 * Use: 需要在App.vue中新建一个id为 loading 的 div,如需图片请将图片放到assets中
 */

let loadingCount = 0

const startLoading = () => {
  const loading = document.getElementById('loading')
  if (loading !== null && loading !== undefined) {
    loading.style.display = 'flex'
  }
}

const endLoading = () => {
  const loading = document.getElementById('loading')
  if (loading !== null && loading !== undefined) {
    loading.style.display = 'none'
  }
}

export const showLoading = () => {
  console.log('showloading' + loadingCount)
  if (loadingCount === 0) {
    startLoading()
  }
  loadingCount += 1
}

export const hideLoading = () => {
  console.log('hideloading' + loadingCount)

  if (loadingCount <= 0) {
    return
  }
  loadingCount -= 1
  if (loadingCount === 0) {
    endLoading()
  }
}
