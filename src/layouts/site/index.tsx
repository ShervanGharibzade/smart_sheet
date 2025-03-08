"use client";

import Menu from "./menu";

const SiteLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div>
      <Menu />
      {children}
    </div>
  );
};

export default SiteLayout;
