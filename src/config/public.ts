export const svg_height = 50;
export const svg_width = 50;
export const svg_fill = "#1682d9";
export const svg_stroke = "#1682d9";

export interface svgType {
  fill?: string;
  stroke?: string;
  width?: number;
  height?: number;
}

export interface responseType {
  msg?: string;
  code?: number;
  data?: any;
  rows?: any;
  total?: number;
}

export const menuLinks = [
  { href: "/", label: "首页" },
  { href: "/tool", label: "工具" },
  { href: "/information", label: "资讯" },
  { href: "/course", label: "教程" },
  { href: "/prompt", label: "提示" }
];
