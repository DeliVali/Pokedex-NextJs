import React, { ReactNode } from "react";

type LazyLoaderProps = {
  children: ReactNode;
};

const LazyLoader = ({ children }: LazyLoaderProps) => {
  // Your logic here
  return <>{children}</>;
};

export default LazyLoader;
