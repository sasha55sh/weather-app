import React, { FC } from "react";
import Link from "next/link";

const HeaderComponent: FC<{ className?: string }> = ({ className }) => {
  return (
    <header
      className={`${className} p-4 text-redBrown bg-slateBlue/10 text-2xl font-bold`}
    >
      <Link href="/">
        <p>WEATHER APP</p>
      </Link>
    </header>
  );
};

export default HeaderComponent;
