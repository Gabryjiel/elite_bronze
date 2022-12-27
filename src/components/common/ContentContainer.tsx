import React from "react";

export const ContentContainer: React.FC<{ children: React.ReactNode }> = (
  props
) => {
  return (
    <section className="h-full w-11/12 py-6">
      <div className="flex h-full flex-col overflow-hidden rounded-xl bg-zinc-800 shadow-2xl">
        {props.children}
      </div>
    </section>
  );
};
