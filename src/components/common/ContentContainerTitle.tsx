export const ContentContainerTitle: React.FC<{ text: string }> = (props) => {
  return (
    <h1 className="pl-8 text-4xl font-extrabold text-violet-600 underline">
      {props.text}
    </h1>
  );
};
