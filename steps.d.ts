/// <reference types='codeceptjs' />
type steps_file = typeof import('./steps_file.js');
type login_page = typeof import('./pages/login_page.js');

declare namespace CodeceptJS {
  interface SupportObject { I: I, current: any, login_page: login_page }
  interface Methods extends Appium {}
  interface I extends ReturnType<steps_file> {}
  namespace Translation {
    interface Actions {}
  }
}
