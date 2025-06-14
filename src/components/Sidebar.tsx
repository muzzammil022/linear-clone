'use client';
import React, { useState, useRef, useEffect } from "react";
import type { Dispatch, SetStateAction } from "react";
import { motion } from "framer-motion";

const Sidebar = () => {
  const [open, setOpen] = useState(true);
  const [selected, setSelected] = useState("Collaborative Documents");
  const videoRef = useRef<HTMLVideoElement>(null);

  // Image mapping for each option
  const imageMapping = {
    "Collaborative Documents": "/CD.png",
    "Inline Comments": "/IC.png",
    "Text-to-issue commands": "/TC.webm"
  };

  // Play video when Text-to-issue commands is selected
  useEffect(() => {
    if (selected === "Text-to-issue commands" && videoRef.current) {
      videoRef.current.play();
    }
  }, [selected]);

  return (
    <div className="flex flex-col lg:flex-row">
      <motion.nav
        layout
        className="shrink-0 bg-transparent p-4 lg:sticky lg:top-0 lg:h-screen"
        style={{
          width: open ? "280px" : "fit-content",
        }}
      >
        <TitleSection open={open} />

        <div className="space-y-2">
          <Option
            title="Collaborative Documents"
            selected={selected}
            setSelected={setSelected}
            open={open}
          />
          <Option
            title="Inline Comments"
            selected={selected}
            setSelected={setSelected}
            open={open}
          />
          <Option
            title="Text-to-issue commands"
            selected={selected}
            setSelected={setSelected}
            open={open}
          />
        </div>

        <ToggleClose open={open} setOpen={setOpen} />
      </motion.nav>

      {/* Image Display Area */}
      <div className="flex-1 p-4 lg:p-8">
        <motion.div
          key={selected}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3 }}
          className="w-full"
        >
          {selected === "Text-to-issue commands" ? (
            <video 
              ref={videoRef}
              src={imageMapping[selected as keyof typeof imageMapping]} 
              className="w-full h-auto rounded-lg"
              loop
              muted
              playsInline
              onError={(e) => {
                console.error('Video failed to load:', e);
              }}
            />
          ) : (
            <img 
              src={imageMapping[selected as keyof typeof imageMapping]} 
              alt={`${selected} preview`}
              className="w-full h-auto rounded-lg"
              onError={(e) => {
                // Fallback if image doesn't exist
                const target = e.target as HTMLImageElement;
                target.src = `https://via.placeholder.com/600x400/333/fff?text=${selected.replace(/\s+/g, '+')}`;
              }}
            />
          )}
        </motion.div>
      </div>
    </div>
  );
};

const Option = ({
  title,
  selected,
  setSelected,
  open,
}: {
  title: string;
  selected: string;
  setSelected: Dispatch<SetStateAction<string>>;
  open: boolean;
}) => {
  const isSelected = selected === title;

  return (
    <motion.button
      layout
      onClick={() => setSelected(title)}
      className={`relative flex h-10 w-full items-center rounded-md transition-colors ${isSelected ? "bg-white/10 text-white" : "text-gray-300 hover:bg-white/5 hover:text-white"}`}
    >
      {open && (
        <motion.span
          layout
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.125 }}
          className="text-sm font-medium px-3 flex items-center gap-2"
        >
          {/* Green dot indicator */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: isSelected ? 1 : 0 }}
            transition={{ duration: 0.2 }}
            className="w-2 h-2 bg-green-500 rounded-full"
          />
          {title}
        </motion.span>
      )}
    </motion.button>
  );
};

const TitleSection = ({ open }: { open: boolean }) => {
  return (
    <div className="mb-4 border-b border-white/20 pb-3">
      <div className="flex cursor-pointer items-center justify-between rounded-md transition-colors hover:bg-white/5">
        <div className="flex items-center gap-2">
          {open && (
            <motion.div
              layout
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.125 }}
              className="px-3"
            >
              <span className="block text-base font-semibold text-white">Ideate and specify what to build next</span>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
};

const ToggleClose = ({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}) => {
  return (
    <motion.button
      layout
      onClick={() => setOpen((pv) => !pv)}
      className="mt-4 w-full border-t border-white/20 transition-colors hover:bg-white/5 lg:absolute lg:bottom-0 lg:left-0 lg:right-0 lg:mt-0"
    >
      <div className="flex items-center p-3">
        {open && (
          <motion.span
            layout
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.125 }}
            className="text-sm font-medium text-gray-300"
         >
          </motion.span>
        )}
      </div>
    </motion.button>
  );
};

export default Sidebar;
