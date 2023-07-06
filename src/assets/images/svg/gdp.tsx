import { svg_fill, svg_height, svg_stroke, svg_width, svgType } from '@/config/public';

export default function SvgGdp({
  fill = svg_fill,
  stroke = svg_stroke,
  width = svg_width,
  height = svg_height
}: svgType) {
  return (
    <svg
      fill={fill}
      stroke={stroke}
      height={height}
      width={width}
      viewBox="0 0 1024 1024"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M86.528 908.8h132.608v-328.192l-131.072 102.4-1.536 225.792zM307.2 518.656v388.608h126.464v-372.736L364.544 473.6 307.2 518.656z m220.672 95.744v292.864h126.464V517.12c0-0.512-126.464 94.208-126.464 97.28z m320-256l-99.328 81.408v466.944h131.072V387.072l-31.744-28.672z"></path>
      <path d="M942.592 119.808h-214.528c-8.192 0-11.264 9.728-4.608 14.336l88.064 81.408-276.992 230.4-179.2-148.992-267.264 210.432V588.8l265.728-209.408 180.736 150.528 321.536-270.336-1.536-1.536L935.936 332.8c4.608 4.608 12.8 1.536 12.8-6.144V126.464c1.536-3.072-3.072-8.192-6.144-6.656z"></path>
    </svg>
  );
}
