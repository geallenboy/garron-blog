import Card from "./card";
import Image from "next/image";
import { CameraIcon, EnvelopeIcon } from "@heroicons/react/24/solid";
import {
  Javascript,
  ReactJs,
  Nodedotjs,
  Flutter,
  Typescript,
} from "@icons-pack/react-simple-icons";
import { AnimateSharedLayout, motion } from "framer-motion";
import classNames from "classnames";
import { useState } from "react";

const items = [
  {
    name: "typescript",
    icon: <Typescript className="h-6 w-6" />,
    summary:
      "TypeScript, 最常使用的编程语言, 常搭配使用的有 Node / React / Tailwind 。",
  },
  {
    name: "Javascript",
    icon: <Javascript className="h-6 w-6" />,
    summary: "Javascript 。",
  },
  {
    name: "Nodedotjs",
    icon: <Nodedotjs className="h-6 w-6" />,
    summary: "Nodedotjs, 偶尔也弄弄设计, 但不太熟。",
  },
  {
    name: "flutter",
    icon: <Flutter className="h-7 w-7" />,
    summary: "Flutter, 尝试学习过很多次, 每次都是照着教程弄一遍就放弃了。",
  },
  {
    name: "reactJs",
    icon: <ReactJs className="h-7 w-7" />,
    summary: "ReactJs, 尝试学习过很多次, 每次都是照着教程弄一遍就放弃了。",
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
      <div className="flex items-center space-x-4 px-4">
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
                {item.icon}
              </div>
            );
          })}
        </AnimateSharedLayout>
      </div>
      <div className="mt-3 overflow-hidden rounded-xl border border-gray-400/20 bg-white/40 p-4 dark:border-white/30 dark:bg-black/30 sm:h-24">
        <p className="opacity-70 transition-all">
          {selectedItem?.summary ?? <>我来人间一趟, 我要看看太阳。</>}
        </p>
      </div>
    </Card>
  );
}
