import Card from "./card";

import classNames from "classnames";

export default function ContactCard({ className }: { className?: string }) {
  return (
    <Card
      className={classNames(
        "flex flex-col justify-between bg-blue-100/20 px-4",
        className
      )}
    >
      <h1 className="mb-2 text-blue-500/70">我在这里</h1>
      <div className="mt-10 flex items-center space-x-5 self-end">
        <a href="https://twitter.com/gejialun88">Twitter</a>
        <a href="https://github.com/geallenboy">Github</a>
        <a href="mailto:15189648817@163.com">email</a>
      </div>
    </Card>
  );
}
