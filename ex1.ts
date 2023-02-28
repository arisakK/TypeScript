export class Utils {
  public static findMax(...args: number[]): number {
    return args.reduce((prev, cur) => cur > prev ? cur : prev);
    };

  public static findMin(...args: number[]): number {
    return  args.reduce((prev, cur) => cur < prev ? cur : prev);
  }

  public static reformatData(x: any): Record<string, any> {
   const s = Object.keys(x).sort().reduce(((prev, cur)=>({
      ...prev,[x[cur].role] : (prev[x[cur].role] || []).concat({nickname: x[cur].name})
    })
    ),{});
    return s;
}
}
export default Utils
