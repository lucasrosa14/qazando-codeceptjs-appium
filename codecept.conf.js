const {
  setHeadlessWhen,
  setCommonPlugins
} = require('@codeceptjs/configure');
// turn on headless mode when running with HEADLESS=true environment variable
// export HEADLESS=true && npx codeceptjs run
setHeadlessWhen(process.env.HEADLESS);

// enable all common plugins https://github.com/codeceptjs/configure#setcommonplugins
setCommonPlugins();

const server = require('./server/server.js')

/** @type {CodeceptJS.MainConfig} */

exports.config = {
  output: './output',
  helpers: {
    Appium: {
      platform: 'Android',
      app: 'D:/Pessoal/2023/TrilhaQA/appsqazando/app-release.apk',
      desiredCapabilities: {
        deviceName: 'pixel2',
        platformVersion: '13',
        appPackage: 'com.qazandoapp',
        appActivity: 'MainActivity'
      }
    }
  },
  include: {
    I: './steps_file.js',
    login_page: './pages/login_page.js',
    home_page: './pages/home_page.js'
  },
  mocha: {},
  bootstrap: async () => {
    await server.start()
  },
  teardown: async () => {
    await server.stop()
  },
  timeout: null,
  hooks: [],
  gherkin: {
    features: './features/*.feature',
    steps: ['./step_definitions/steps.js']
  },
  plugins: {
    screenshotOnFail: {
      enabled: true
    },
    tryTo: {
      enabled: true
    },
    retryFailedStep: {
      enabled: false
    },
    retryTo: {
      enabled: true
    },
    eachElement: {
      enabled: true
    },
    pauseOnFail: {}
  },
  stepTimeout: 0,
  stepTimeoutOverride: [{
      pattern: 'wait.*',
      timeout: 0
    },
    {
      pattern: 'amOnPage',
      timeout: 0
    }
  ],
  tests: './steps/*_test.js',
  name: 'codeceptjs-appium-mobile'
}