import Link from "next/link";

interface NavButtonProps {
  text: string,
  active?: boolean,
  url: string,
  position: 'left' | 'right',
};

function NavButton(props: NavButtonProps) {
  const { text, active, url, position } = props;

  return (
    <Link href={url}>
      <div 
        className={`w-24 ${position == 'left' ? 'bg-gradient-to-r' : 'bg-gradient-to-l'}  ${active ? '' : 'hover:from-white/10 hover:to-transparent'} px-2 py-2 rounded-full flex items-center justify-center body text-on-surface cursor-pointer`}
      >
        {text}
      </div>
    </Link>
  );
};

export default NavButton;