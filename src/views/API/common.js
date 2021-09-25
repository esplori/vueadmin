import {post} from '@/utils/axios.js'
import contextPath from '@/config/context-path.js'

export async function loginApi (data) {
  const url = `${contextPath}/account/login`
  const options = {}
  return post(url, data, options)
}
export async function logoutApi (data) {
  const url = `${contextPath}/account/logout`
  const options = {}
  return post(url, data, options)
}
export async function registerApi (data) {
  const url = `${contextPath}/account/register`
  const options = {}
  return post(url, data, options)
}
