class DateUtils {
    /**
     * 获取当前时间
     * @returns 当前时间
     */
    static now(): Date {
      return new Date();
    }
  
    /**
     * 格式化日期为字符串
     * @param date 日期对象
     * @param format 格式化字符串（如 "yyyy-MM-dd HH:mm:ss"）
     * @returns 格式化后的字符串
     */
    static format(date: Date, format: string = "yyyy-MM-dd HH:mm:ss"): string {
      const pad = (n: number) => (n < 10 ? "0" + n : n);
      return format
        .replace("yyyy", date.getFullYear().toString())
        .replace("MM", pad(date.getMonth() + 1))
        .replace("dd", pad(date.getDate()))
        .replace("HH", pad(date.getHours()))
        .replace("mm", pad(date.getMinutes()))
        .replace("ss", pad(date.getSeconds()));
    }
  
    /**
     * 计算两个日期之间的天数差
     * @param date1 日期1
     * @param date2 日期2
     * @returns 天数差
     */
    static diffDays(date1: Date, date2: Date): number {
      const diffTime = Math.abs(date2.getTime() - date1.getTime());
      return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    }
  
    /**
     * 判断是否为闰年
     * @param year 年份
     * @returns 是否为闰年
     */
    static isLeapYear(year: number): boolean {
      return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
    }
  }