import React from "react";

export const ContentContainerTitle: React.FC<{
  text: string;
  children?: React.ReactNode;
}> = (props) => {
  return (
    <header className="flex justify-between pt-4 pb-8">
      <h1 className="pl-8 text-4xl font-extrabold text-violet-600 underline">
        {props.text}
      </h1>
      <div className="pr-8">{props.children}</div>
    </header>
  );
};
