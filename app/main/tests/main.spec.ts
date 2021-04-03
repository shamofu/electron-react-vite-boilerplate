import getApp from './getapp'

jest.setTimeout(60000)
let app

afterEach(async () => {
  if (app && app.isRunning()) {
    return await app.stop()
  }
})
beforeEach(async () => {
  app = getApp()
  return await app.start()
})

test('application title', async () => {
  expect(await app.client.getTitle()).toBe('Electron-React-Vite-Boilerplate')
})

test('go to Start', async () => {
  const foo = await app.client.$('a#start')
  await foo.click()
  const bar = await app.client.$('h1')
  expect(await bar.getText()).toBe('Electron + React + Vite')
})
