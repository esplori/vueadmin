import { get, post } from '@/utils/axios.js'
import contextPath from '@/config/context-path.js'

export async function getCateApi (data) {
  const url = `${contextPath}/tbk/getCate`
  const options = {}
  return get(url, data, options)
}

export async function insertCateApi (data) {
  const url = `${contextPath}/tbk/insertCate`
  const options = { showLoading: true }
  return post(url, data, options)
}