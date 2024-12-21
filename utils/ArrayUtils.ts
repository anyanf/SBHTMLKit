class ArrayUtils {
    /**
     * 判断数组是否为空
     * @param arr 输入数组
     * @returns 是否为空
     */
    static isEmpty<T>(arr: T[]): boolean {
      return !arr || arr.length === 0;
    }
  
    /**
     * 获取数组的长度
     * @param arr 输入数组
     * @returns 数组长度
     */
    static size<T>(arr: T[]): number {
      return arr.length;
    }
  
    /**
     * 判断数组是否包含指定元素
     * @param arr 输入数组
     * @param item 目标元素
     * @returns 是否包含
     */
    static contains<T>(arr: T[], item: T): boolean {
      return arr.includes(item);
    }
  
    /**
     * 移除数组中的指定元素
     * @param arr 输入数组
     * @param item 目标元素
     * @returns 移除后的数组
     */
    static remove<T>(arr: T[], item: T): T[] {
      return arr.filter(i => i !== item);
    }
  
    /**
     * 数组去重
     * @param arr 输入数组
     * @returns 去重后的数组
     */
    static unique<T>(arr: T[]): T[] {
      return [...new Set(arr)];
    }
  
    /**
     * 合并多个数组
     * @param arrays 多个数组
     * @returns 合并后的数组
     */
    static merge<T>(...arrays: T[][]): T[] {
      return arrays.flat();
    }
  }