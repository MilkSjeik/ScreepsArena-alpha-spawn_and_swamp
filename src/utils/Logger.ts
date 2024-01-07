"use strict";

/** Logging class
 * General class to print log messages depending on the log level:
 * - Debug
 * - Info
 * - Warning
 * - Error
 */

class Log {
  static debug(callingModule: string, message: string) {
    console.log(`[D] ${callingModule}: ${message}`);
  }
  static info(callingModule: string, message: string) {
    console.log(`[I] ${callingModule}: ${message}`);
  }
  static warn(callingModule: string, message: string) {
    console.log(`[W] ${callingModule}: ${message}`);
  }
  static error(callingModule: string, message: string) {
    console.log(`[E] ${callingModule}: ${message}`);
  }
}

export default Log;
