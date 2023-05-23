
'use client'
import {  motion , AnimatePresence } from 'framer-motion';
import {useState , useEffect} from 'react'

 function SpotLightItem({ children }) {
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
          background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, hsla(180,90%,70%,0.35) 0%,transparent 10%,transparent) fixed`
        }}
      ></motion.div>
      <div className="relative z-10">{children}</div>
    </div>
  );
}
const CardContentDummy = () => {
  return (
    <div className="p-6">
      <h2 className="font-semibold text-zinc-100">This is a card</h2>
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
		const updateMousePosition = (ev) => {
			setMousePosition({ x: ev.clientX, y: ev.clientY });
		};
		window.addEventListener("mousemove", updateMousePosition);
		return () => {
			window.removeEventListener("mousemove", updateMousePosition);
		};
	}, []);
	return mousePosition;
};
 function CardsFirst()  {
  const boxes = [
  {
    id: "12",
    child: <CardContentDummy />
  },
  {
    id: "22",
    child: <CardContentDummy />
  },
  {
    id: "32",
    child: <CardContentDummy />
  },
  {
    id: "42",
    child: <CardContentDummy />
  },
  {
    id: "52",
    child: <CardContentDummy />
  },
  {
    id: "62",
    child: <CardContentDummy />
  },
  {
    id: "72",
    child: <CardContentDummy />
  },
  {
    id: "82",
    child: <CardContentDummy />
  },
  {
    id: "83",
    child: <CardContentDummy />
  }
];
  return (
    <div className="relative bg-zinc-900 p-8">
      <div className="relative z-10 grid md:grid-cols-2 lg:grid-cols-3 gap-4 text-base">
        {boxes.map((box) => (
          <SpotLightItem key={box.id}>{box.child}</SpotLightItem>
        ))}
      </div>
    </div>
  );
};
export default CardsFirst 



