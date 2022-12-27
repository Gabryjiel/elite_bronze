import React from "react";

export const MainContainer: React.FC<{ children: React.ReactNode }> = (
  props
) => {
  return (
    <main className="flex h-full w-full bg-neutral-900 pr-8">
      {props.children}
    </main>
  );
};
