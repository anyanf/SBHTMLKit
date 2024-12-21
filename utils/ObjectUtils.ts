class ObjectUtils {
    /**
     * 判断对象是否为空
     * @param obj 输入对象
     * @returns 是否为空
     */
    static isEmpty(obj: object | null | undefined): boolean {
      return !obj || Object.keys(obj).length === 0;
    }
  
    /**
     * 深拷贝对象
     * @param obj 输入对象
     * @returns 深拷贝后的对象
     */
    static deepClone<T>(obj: T): T {
      return JSON.parse(JSON.stringify(obj));
    }
  
    /**
     * 合并多个对象
     * @param objects 多个对象
     * @returns 合并后的对象
     */
    static merge<T extends object>(...objects: T[]): T {
      return Object.assign({}, ...objects);
    }
  
    /**
     * 判断两个对象是否相等
     * @param obj1 对象1
     * @param obj2 对象2
     * @returns 是否相等
     */
    static isEqual(obj1: any, obj2: any): boolean {
      return JSON.stringify(obj1) === JSON.stringify(obj2);
    }
  }