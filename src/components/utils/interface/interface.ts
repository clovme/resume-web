import {LineStyle, Position} from "./type.ts";

export interface ILineBox {
    size?: string;          // 线的大小
    lineStyle?: LineStyle;  // 线的样式
    color?: string;         // 线的颜色
    position?: Position;    // 画线的位置
    margin?: string;        // 边距
}

export interface ITitleContent {
    time?: string,
    title?: string,
    name?: string,
    content?: string,
    margin?: number
}

export interface ITabsLabel {
    title: string,      // 标题
    option: boolean,    // 是否可操作
    modelValue: boolean,// 结果
    index: number       // 当前元素在列表中的索引
}

export interface IRichText {
    id?: string;            // id
    height?: string;        // 编辑器高度
    placeholder?: string;   // 输入框提示
    modelValue?: string;    // v-model
}
