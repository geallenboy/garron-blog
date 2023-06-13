import Card from "./card";
import { AnimateSharedLayout, motion } from "framer-motion";
import classNames from "classnames";
import { useState } from "react";

const items = [
  {
    name: "typescript",
    icon: "",
    summary: "TypeScript, 最常使用的编程语言",
  },
  {
    name: "node",
    icon: "",
    summary: "node",
  },
  {
    name: "flutter",
    icon: "",
    summary: "Flutter",
  },
  {
    name: "react",
    icon: "",
    summary: "react",
  },
  {
    name: "vue",
    icon: "",
    summary: "vue",
  },
  {
    name: "css",
    icon: "",
    summary: "css",
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
            console.log(selectedItem?.name, item.name, selected, 9999);
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
                  console.log(item, 99);
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
