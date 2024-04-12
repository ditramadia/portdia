import { useRouter } from "next/navigation";
import { useState } from "react";

interface NavToggleProps {
  active: "work" | "about",
};

function NavToggle(props: NavToggleProps) {
  const { active } = props;
  const router = useRouter();
  const [activeState, setActiveState] = useState<"work" | "about">(active);

  const handleNavigate = (destination: 'work' | 'about') => {
    if (activeState === destination) return;
    setActiveState(destination);
    setTimeout(() => {
      router.push(destination === 'work' ? '/' : '/about');
    }, 500)
  }

  return (
    <div className="relative w-fit mt-1 flex gap-1 glass-blur px-2 py-2 rounded-full">
      <div className={`absolute -top-1 left-9 w-8 h-1 bg-white rounded-full transition-transform ease-in-out duration-500 ${activeState === 'about' ? 'translate-x-[100px]' : 'translate-x-0'}`}>
        <div className="absolute -inset-2 bg-tertiary rounded-full blur-xl" />
      </div>
      <div className={`absolute top-2 left-2 w-24 h-10 bg-white/10 rounded-full transition-transform ease-in-out duration-500 ${activeState === 'about' ? 'translate-x-[100px]' : 'translate-x-0'}`} />
      <div 
        className={`w-24 bg-gradient-to-r ${activeState === 'work' ? '' : 'hover:from-white/10 hover:to-transparent'} px-2 py-2 rounded-full flex items-center justify-center body text-on-surface cursor-pointer`}
        onClick={() => handleNavigate('work')}
      >
        Work
      </div>
      <div 
        className={`w-24 bg-gradient-to-l ${activeState === 'about' ? '' : 'hover:from-white/10 hover:to-transparent'} px-2 py-2 rounded-full flex items-center justify-center body text-on-surface cursor-pointer`}
        onClick={() => handleNavigate('about')}
      >
        About
      </div>
    </div>
  );
};

export default NavToggle;