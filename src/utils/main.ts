/**
 * 获取接口前缀
 * @param {string} code api, host, origin
 */
export function getAPI(code = 'api') {
  const host: string = import.meta.env.PROD ? import.meta.env.VITE_APP_API_HOST : location.host
  const origin = `${location.protocol}//${host}`
  const basePath = import.meta.env.PROD ? '/' : '/dev-api'
  const api = `${origin}${basePath}` // 基础接口

  switch (code) {
    case 'host':
      return host
    case 'origin':
      return origin
    default:
      return api
  }
}

interface handleTreeType {
  data: any
  id?: string
  pid?: string
  children?: any
  rootId?: number | string
}

/**
 * 构造树型结构数据
 * @param {*} data 数据源
 * @param {*} id id字段 默认 'id'
 * @param {*} parentId 父节点字段 默认 'pid'
 * @param {*} rootId 根Id 默认 0
 */
export const handleTree = ({ data = [], id = 'id', pid = 'pid', rootId = 0 }: handleTreeType) => {
  //对源数据深度克隆
  const cloneData = JSON.parse(JSON.stringify(data))
  //循环所有项
  const treeData = cloneData.filter((father: any) => {
    let branchArr = cloneData.filter((child: any) => {
      //返回每一项的子级数组
      return father[id] === child[pid]
    })
    branchArr.length > 0 ? (father.children = branchArr) : ''
    //返回第一层
    return father[pid] === rootId
  })
  return treeData != '' ? treeData : data
}
