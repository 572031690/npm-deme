/*
 * @Author: mjh
 * @Date: 2023-03-19 20:48:27
 * @LastEditors: mjh
 * @LastEditTime: 2023-03-19 20:48:32
 * @Description: 
 */
import * as components from "./index";
declare module "@vue/runtime-core" {
  export interface GlobalComponents {
    EaButton: typeof components.Button;
    EaIcon: typeof components.Icon;
  }
}
export {};
