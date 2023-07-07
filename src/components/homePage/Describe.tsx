'use client'
import {  motion , AnimatePresence } from 'framer-motion';
import {useState , useEffect} from 'react'
import { Icons } from '../icons';
interface RootLayoutProps {
  children: React.ReactNode
}
 function SpotLightItem({ children }: RootLayoutProps) {
  const mousePosition = useMousePosition();
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative overflow-hidden border border-zinc-800 backdrop-blur"
    >
      <AnimatePresence>
        {isHovered && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            layoutId="spotlight"
            className="absolute inset-0 z-0 overflow-hidden bg-fixed"
            style={{
              background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, hsla(220,50%,80%,0.035) 0%,transparent 10%,transparent) fixed`
            }}
          ></motion.div>
        )}
      </AnimatePresence>
      <motion.div
        className="absolute inset-0 z-0 overflow-hidden bg-fixed"
        style={{
          clipPath: `polygon(0% 0%, 0% 100%, calc(0% + 1px) 100%, calc(0% + 1px) calc(0% + 1px), calc(100% - 1px) calc(0% + 1px), calc(100% - 1px) calc(100% - 1px), calc(0% + 1px) calc(100% - 1px), calc(0% + 1px) 100%, 100% 100%, 100% 0%)`,
          background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, red ,transparent 10%,transparent) fixed`
        }}
      ></motion.div>
      <div className="relative z-10">{children}</div>
    </div>
  );
}
const CardContentDummy = ({box}: any) => {
  return (
    <div className="p-6">
      <div className='flex justify-around '>
        <h2 className="font-semibold flex mt-5 justify-center item-center text-zinc-100">{box.title}</h2>
        {box.icon}
      </div>
      <p className="my-4 text-sm text-zinc-400">
        Leverage agile frameworks to provide a robust synopsis for high level
        overviews. Iterative approaches to corporate strategy foster
        collaborative thinking to further the overall value proposition.
        Organically grow the holistic world view of disruptive innovation via
        workplace diversity and empowerment.
      </p>
      <a href="#" className="text-sm font-medium text-zinc-200 underline">
        Click Here
      </a>
    </div>
  );
};
const useMousePosition = () => {
	const [mousePosition, setMousePosition] = useState({
		x: null,
		y: null,
	});
	useEffect(() => {
		const updateMousePosition = (ev: any) => {
			setMousePosition({ x: ev.clientX, y: ev.clientY });
		};
		window.addEventListener("mousemove", updateMousePosition);
		return () => {
			window.removeEventListener("mousemove", updateMousePosition);
		};
	}, []);
	return mousePosition;
};
 function Describe()  {
  const boxes = [
  {
    id: "12",
    
    title: "انتخاب کن",
    href: '/',
    description: "",
    icon: <Icons.coatIcon />
  },
  {
    id: "22",
    
    title: "تن بزن",
    href: '/',
    description: "",
    icon: <Icons.mirrorIcon  />

  },
  {
    id: "32",
    
    title: "سفارش بده",
    href: '/',
    description: "",
    icon: <Icons.tieIcon  />

  },
  
];
  return (
    <div className="relative bg-zinc-900/30 backdrop-blur-md p-8">
       
      <div className="relative  grid md:grid-cols-2 lg:grid-cols-3 gap-4 text-base">
        {boxes.map((box) => (
          <SpotLightItem key={box.id}><CardContentDummy box={box} /></SpotLightItem>
        ))}
      </div>
    </div>
  );
};
export default Describe 
