/**
 * @type {import('vite').UserConfig}
 */

const { resolve } = require('path')

const config = {
  build: {
    rollupOptions: {
      input: {
        main: resolve('app', 'renderer', 'index.html')
      }
    }
  }
}

export default config
