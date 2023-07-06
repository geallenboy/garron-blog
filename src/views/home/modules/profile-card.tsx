import Card from "./card";
import SvgIcon from "./svgs/icon";
import BackgroundGradient from "./background-gradient";
import FlippableCard from "./flippable-card";
import { useCallback, useState } from "react";
import classNames from "classnames";

export default function ProfileCard({ className }: { className?: string }) {
  const [flipped, setFlipped] = useState(false);

  const toggle = useCallback(() => {
    setFlipped(!flipped);
  }, [flipped]);

  return (
    <FlippableCard
      className={classNames("relative", className)}
      front={
        <Card className="flex h-full flex-col items-center justify-center bg-indigo-200/10 py-40 sm:py-20">
          <SvgIcon />
          <p className="relative mt-2 items-end text-xl">garron</p>
          <p className="mt-2 opacity-60">追求梦想，奋斗人生</p>

          <button
            className="absolute right-5 bottom-5 rounded-full border border-gray-400/20 bg-white/40 p-3 dark:border-white/30 dark:bg-black/40"
            onClick={() => toggle()}
          >
            <span className="h-5 w-5 opacity-60">旋转</span>
          </button>
        </Card>
      }
      back={
        <Card className="flex h-full flex-col items-center justify-center bg-violet-200/10">
          <div>
            <p>我在奋斗的路上前行</p>

            <p className="mt-3">满心热忱，满怀梦想， </p>
            <p className="">闯荡世界，勇攀高峰，</p>
            <p className="">不畏挑战，努力追随。</p>

            <p className="mt-3">码字编程，重拾赤子心，</p>
            <p className="">以技术创新，创造意义，</p>
            <p className="">别样风景，别样人生，</p>
            <p className="">只因坚守，不负初心。</p>

            <p className="mt-3">奋斗的身影，投射远方， </p>
            <p className="">梦想的微光，点亮心房，</p>
            <p className="">不放弃，不言败，</p>
            <p className="">在追梦的路上，奋斗不停。</p>
          </div>

          <button
            className="absolute right-5 bottom-5 rounded-full border border-gray-400/20 bg-white/30 p-3 dark:border-white/30 dark:bg-black/40"
            onClick={() => toggle()}
          >
            <span className="h-5 w-5 opacity-60">旋转</span>
          </button>
        </Card>
      }
      flipped={flipped}
    >
      <BackgroundGradient className="bottom-0 right-0 h-36 w-16 bg-green-500/50 duration-500 dark:bg-amber-400/50" />
    </FlippableCard>
  );
}
