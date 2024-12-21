class StringUtils {
  /**
   * 判断字符串是否为空或仅包含空格
   * @param str 输入字符串
   * @returns 是否为空
   */
  static isEmpty(str: string | null | undefined): boolean {
    return !str || str.trim().length === 0;
  }

  /**
   * 去除字符串两端的空格
   * @param str 输入字符串
   * @returns 去除空格后的字符串
   */
  static trim(str: string): string {
    return str.trim();
  }

  /**
   * 将字符串转换为大写
   * @param str 输入字符串
   * @returns 大写字符串
   */
  static toUpperCase(str: string): string {
    return str.toUpperCase();
  }

  /**
   * 将字符串转换为小写
   * @param str 输入字符串
   * @returns 小写字符串
   */
  static toLowerCase(str: string): string {
    return str.toLowerCase();
  }

  /**
   * 判断字符串是否以指定前缀开头
   * @param str 输入字符串
   * @param prefix 前缀
   * @returns 是否以指定前缀开头
   */
  static startsWith(str: string, prefix: string): boolean {
    return str.startsWith(prefix);
  }

  /**
   * 判断字符串是否以指定后缀结尾
   * @param str 输入字符串
   * @param suffix 后缀
   * @returns 是否以指定后缀结尾
   */
  static endsWith(str: string, suffix: string): boolean {
    return str.endsWith(suffix);
  }
}