import Card from "./card";

import { EnvelopeIcon } from "@heroicons/react/24/solid";
import { Github, Twitter } from "@icons-pack/react-simple-icons";

import classNames from "classnames";

export default function ContactCard({ className }: { className?: string }) {
  return (
    <Card
      className={classNames(
        "flex flex-col justify-between bg-blue-100/20 px-4 ",
        className
      )}
    >
      <h1 className="mb-2 text-blue-500/70">我在这里</h1>
      <div className="mt-10 flex items-center space-x-5 self-end">
        <a href="https://twitter.com/gejialun88">
          <Twitter className="h-6 w-6 hover:text-[#1DA1F2]" />
        </a>
        <a href="https://github.com/geallenboy">
          <Github className="h-6 w-6 hover:text-purple-500" />
        </a>
        <a href="mailto:gejialun88@gmail.com">
          <EnvelopeIcon className="h-7 w-7 hover:text-green-500" />
        </a>
      </div>
    </Card>
  );
}
