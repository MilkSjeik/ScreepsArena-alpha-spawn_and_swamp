"use strict";

enum LogLevel {
  DEBUG = 0,
  INFO = 1,
  WARN = 2,
  ERROR = 3,
}

export { LogLevel };

/** Logging class
 * General class to print log messages depending on the log level:
 * - Debug
 * - Info
 * - Warning
 * - Error
 */

class Log {
  static logLevel: LogLevel;

  // Methods
  static debug(callingModule: string, message: string) {
    if (this.logLevel === LogLevel.DEBUG) {
      console.log(`[D] ${callingModule}: ${message}`);
    }
  }
  static info(callingModule: string, message: string) {
    if (this.logLevel >= LogLevel.INFO) {
      console.log(`[I] ${callingModule}: ${message}`);
    }
  }
  static warn(callingModule: string, message: string) {
    if (this.logLevel >= LogLevel.WARN) {
      console.log(`[W] ${callingModule}: ${message}`);
    }
  }
  static error(callingModule: string, message: string) {
    if (this.logLevel >= LogLevel.ERROR) {
      console.log(`[E] ${callingModule}: ${message}`);
    }
  }
}

export default Log;
