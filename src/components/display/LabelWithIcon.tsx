interface LabelWithIconProps {
  icon: React.ReactElement,
  text: string
}

const LabelWithIcon = (props: LabelWithIconProps) => {
  const { icon, text } = props;

  return (
    <div className="relative flex flex-col gap-4 items-center">
      <div className="absolute -z-10 -top-[50%] w-96 h-48 rounded-[100%] bg-tertiary/10 blur-3xl" />
      <div className="text-tertiary">
        {icon}
      </div>
      <h2 className="text-center bold-l text-dim">{text}</h2>
    </div>
  );
};

export default LabelWithIcon;