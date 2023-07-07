"use client"
import {
  AnimatePresence,
  motion,
  animate,
  useMotionTemplate,
  useMotionValue,
  useTransform
} from "framer-motion";
import {
  Dialog,
  ModalOverlay,
  Modal,
  Button,
  Heading
} from "react-aria-components";
import { useState } from "react";

// Wrap React Aria modal components so they support framer-motion values.
const MotionModal = motion(Modal);
const MotionModalOverlay = motion(ModalOverlay);

const inertiaTransition = {
  type: "inertia",
  bounceStiffness: 300,
  bounceDamping: 40,
  timeConstant: 300
};

const staticTransition = {
  duration: 0.5,
  ease: [0.32, 0.72, 0, 1]
};


const SHEET_MARGIN = 34;
const SHEET_RADIUS = 12;

function AppleSidebar() {
    let [isOpen, setOpen] = useState(false);
  let h = window.innerHeight - SHEET_MARGIN;
  let y = useMotionValue(h);
  let bgOpacity = useTransform(y, [0, h], [0.4, 0]);
  let bg = useMotionTemplate`rgba(0, 0, 0, ${bgOpacity})`;

 

  return (
    <div>
          <Button
        className="text-blue-600 text-lg font-semibold my-8 outline-none rounded data-[pressed]:text-blue-700 data-[focus-visible]:ring"
        onPress={() => setOpen(true)}
      >
        Open sheet
      </Button>
      <AnimatePresence>
        {isOpen && (
          <MotionModalOverlay
            // Force the modal to be open when AnimatePresence renders it.
            isOpen
            onOpenChange={setOpen}
            className="fixed inset-0 z-10"
            style={{ backgroundColor: bg }}
          >
            <MotionModal
              className="bg-white absolute bottom-0 w-full  rounded-t-xl shadow-lg"
              initial={{ y: h }}
              animate={{ y: 0 }}
              exit={{ y: h }}
              transition={staticTransition}
              style={{
                y,
                top: SHEET_MARGIN,
                // Extra padding at the bottom to account for rubber band scrolling.
                paddingBottom: window.screen.height
              }}
              drag="y"
              dragConstraints={{ top: 0 }}
              onDragEnd={(e, { offset, velocity }) => {
                if (offset.y > window.innerHeight * 0.75 || velocity.y > 10) {
                  setOpen(false);
                } else {
                  animate(y, 0, { ...inertiaTransition, min: 0, max: 0 });
                }
              }}
            >
              {/* drag affordance */}
              <div className="mx-auto w-12 mt-2 h-1.5 rounded-full bg-gray-400" />
              <Dialog className="px-4 pb-4 outline-none">
                <div className="flex justify-end">
                  <Button
                    className="text-blue-600 text-lg font-semibold mb-8 outline-none rounded data-[pressed]:text-blue-700 data-[focus-visible]:ring"
                    onPress={() => setOpen(false)}
                  >
                    Done
                  </Button>
                </div>
                <Heading className="text-3xl font-semibold mb-4">
                  Modal sheet
                </Heading>
                {/* prettier-ignore */}
                <p className="text-lg mb-4">
                  This is a dialog with a custom modal overlay built with <a className="text-blue-600" href="https://react-spectrum.adobe.com/react-aria/react-aria-components.html">React Aria Components</a> and <a className="text-blue-600" href="https://www.framer.com/motion/">Framer Motion</a>.
                </p>
                <p className="text-lg">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Aenean sit amet nisl blandit, pellentesque eros eu,
                  scelerisque eros. Sed cursus urna at nunc lacinia dapibus.
                </p>
              </Dialog>
            </MotionModal>
          </MotionModalOverlay>
        )}
      </AnimatePresence>
    </div>
  )
}

export default AppleSidebar