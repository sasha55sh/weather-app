import React, { FC } from "react";

const Footer: FC<{ className?: string }> = ({ className }) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className={`${className} text-redBrown bg-slateBlue/10 p-4 text-center`}
    >
      Weather App © {currentYear} by Oleksandra Shapovaliuk. All rights reserved
    </footer>
  );
};

export default Footer;
