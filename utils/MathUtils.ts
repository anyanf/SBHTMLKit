class MathUtils {
    /**
     * 计算两个数的和
     * @param a 数字1
     * @param b 数字2
     * @returns 和
     */
    static sum(a: number, b: number): number {
      return a + b;
    }
  
    /**
     * 计算两个数的差
     * @param a 数字1
     * @param b 数字2
     * @returns 差
     */
    static subtract(a: number, b: number): number {
      return a - b;
    }
  
    /**
     * 计算两个数的乘积
     * @param a 数字1
     * @param b 数字2
     * @returns 乘积
     */
    static multiply(a: number, b: number): number {
      return a * b;
    }
  
    /**
     * 计算两个数的商
     * @param a 数字1
     * @param b 数字2
     * @returns 商
     */
    static divide(a: number, b: number): number {
      if (b === 0) {
        throw new Error("除数不能为0");
      }
      return a / b;
    }
  
    /**
     * 生成指定范围内的随机数
     * @param min 最小值
     * @param max 最大值
     * @returns 随机数
     */
    static random(min: number, max: number): number {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }
  }