import Card from "./card";
import { useState } from "react";
import classNames from "classnames";
import SvgAIGC from "./svgs/aigc";
import SvgAIGf from "./svgs/aigf";

const items = [
  {
    name: "aiGift",
    icon: <SvgAIGf />,
    url: "#",
    title: "aiGift",
    summary: <>aiGift：一款人工智能的礼物。</>,
  },
  {
    name: "caigc",
    icon: <SvgAIGC />,
    url: "#",
    title: "caigc",
    summary: <>caigc：一款人工智能网站。</>,
  },
];

export default function DoingCard({ className }: { className?: string }) {
  const [selectedItem, setSelectedItem] = useState<
    typeof items[number] | undefined
  >();

  return (
    <Card
      className={classNames(
        "flex flex-col justify-between bg-green-100/20 px-4 ",
        className
      )}
    >
      <h1 className="mb-2 text-green-500/60">在做什么</h1>
      <div className="mt-2 flex flex-col">
        {items.map((item) => {
          return (
            <a
              key={item.name}
              className="mt-2 flex items-center overflow-hidden rounded-xl border border-gray-400/20 bg-white/40 p-4  dark:border-white/30 dark:bg-black/30"
              href={item.url}
            >
              {item.icon}
              <div className="ml-3 flex flex-col">
                <h2 className="">{item.title}</h2>
                <p className="text-sm opacity-60">{item.summary}</p>
              </div>
            </a>
          );
        })}
      </div>
    </Card>
  );
}
