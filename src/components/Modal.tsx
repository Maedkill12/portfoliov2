import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useSnapshot } from "valtio";
import state from "../store";

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
};

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
  const snap = useSnapshot(state);
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className={`fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black/70 z-10`}
        >
          <motion.div
            initial={{ y: -50 }}
            animate={{ y: 0 }}
            exit={{ y: -50 }}
            onClick={(e) => e.stopPropagation()}
            className={`bg-white rounded-lg shadow-lg p-6 relative`}
            style={{ backgroundColor: snap.palette.background }}
          >
            <button
              onClick={onClose}
              className={`absolute top-0 right-0 m-4 text-white hover:text-gray-700 rounded-full p-2 w-10 h-10 border-2`}
              style={{
                borderColor: snap.palette.primary,
                backgroundColor: snap.palette.backgroundHeader,
              }}
            >
              X
            </button>
            <div className="mt-12">{children}</div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Modal;
