import request from '@/utils/request'

const getNameList = (query?: any) => {
  return request({
    url: '/api/aigc/nameList',
    method: 'get',
    params: query,
  })
}

const getNameDetail = (id: any) => {
  return request({
    url: `/api/aigc/name/${id}`,
    method: 'get',
  })
}
/**
 *
 * @returns 查询1，2层级
 */
const getListTree = () => {
  return request({
    url: `/api/aigc/listTree`,
    method: 'get',
  })
}
/**
 *
 * @returns 查询1，2，3层级
 */
const getlistTreeAll = () => {
  return request({
    url: '/api/aigc/listTreeAll',
    method: 'get',
  })
}

export { getListTree, getNameList, getNameDetail, getlistTreeAll }
