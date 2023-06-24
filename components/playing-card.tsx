import Card from "./card";
import { AnimateSharedLayout, motion } from "framer-motion";
import classNames from "classnames";
import { useState } from "react";

const items = [
  {
    name: "react",
    summary: "构建高效、灵活且可组合的用户界面。",
  },
  {
    name: "vue",
    summary: "快速开发响应式的现代Web应用程序。",
  },
  {
    name: "ts/js",
    summary: "世界上用的最多，最广的语言。",
  },
  {
    name: "node",
    summary: "高效构建可伸缩的服务器端和网络应用程序。",
  },
  {
    name: "flutter",
    summary: "高效地构建跨平台的美观流畅的移动应用程序。",
  },
  {
    name: "css3",
    summary: "样式化和美化网页内容及布局。",
  },
];

export default function PlayingCard({ className }: { className?: string }) {
  const [selectedItem, setSelectedItem] = useState<
    typeof items[number] | undefined
  >();

  return (
    <Card
      className={classNames(
        "flex flex-col justify-between  bg-red-100/20 px-4",
        className
      )}
    >
      <h1 className="mb-2 text-red-500/60">在玩什么</h1>
      <div className="flex flex-wrap items-center space-x-4 px-4">
        <AnimateSharedLayout>
          {items.map((item) => {
            const selected = selectedItem?.name === item.name;
            return (
              <div
                key={item.name}
                className={classNames(
                  "relative cursor-pointer transition-colors",
                  `hover:text-${item.name}`,
                  {
                    "text-white": selected,
                    "hover:text-white": selected,
                  }
                )}
                onClick={() => {
                  setSelectedItem(selected ? undefined : item);
                }}
              >
                {selected ? (
                  <motion.div
                    className={classNames(
                      "absolute -inset-1 -z-10 rounded",
                      `bg-${item.name}`
                    )}
                    layoutId="selected-background"
                  />
                ) : undefined}
                {item.name}
              </div>
            );
          })}
        </AnimateSharedLayout>
      </div>
      <div className="mt-3 overflow-hidden rounded-xl border border-gray-400/20 bg-white/40 p-4 dark:border-white/30 dark:bg-black/30 sm:h-24">
        <p className="opacity-70 transition-all">
          {selectedItem?.summary ?? <>徜徉人世间，追逐太阳光。</>}
        </p>
      </div>
    </Card>
  );
}
