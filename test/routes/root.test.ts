import { test } from 'tap'
import { build } from '../helper'


test('health check route', async (t) => {
  const app = await build(t)

  const res = await app.inject({
    url: '/health'
  })

  t.equal(res.statusCode, 200)
  t.equal(res.body, 'OK', 'Helth check OK')
})

test('openapi route', async (t) => {
  const app = await build(t)
  const res = await app.inject({
    url: '/openapi'
  })

  t.equal(res.statusCode, 200, 'statusCode 200')
  t.equal(res.headers['content-type'], 'application/json; charset=utf-8', 'Content-Type application/json')
  const checkData = {
    info: {
      title: "Factory Digital Movies Backend API",
    }
  }
  const data = await res.json();
  t.has(data, checkData, 'info->title are right')
  t.equal(data.openapi, '3.0.3', 'OpenAPI version')
})
