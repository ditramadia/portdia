import NavButton from "../atom/NavButton";

interface NavToggleProps {
  active: "work" | "about",
};

function NavToggle(props: NavToggleProps) {
  const { active } = props;

  return (
    <div className="relative w-fit mt-1 flex gap-1 glass-blur px-1 py-1 rounded-full">
      {/* <div className="absolute -top-1 left-8 z-10 w-10 h-1 bg-white" /> */}
      {/* <div className="absolute top-1 left-1 z-10 w-24 h-10 bg-white/10 rounded-full" /> */}
      <NavButton text="Work" url="/" position="left" active={active === "work"} />
      <NavButton text="About" url="/about" position="right" active={active === "about"} />
    </div>
  );
};

export default NavToggle;