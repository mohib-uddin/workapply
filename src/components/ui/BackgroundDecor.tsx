import { motion } from "motion/react";
import bgEllipse from "@/assets/bg-ellipse.svg";

export function BackgroundDecor() {
    return (
        <div className="absolute inset-x-0 top-0 pointer-events-none overflow-hidden h-screen flex justify-center">
            <motion.div
                className="relative w-[120vw] sm:w-[100vw] lg:w-[80vw] aspect-square flex items-center justify-center top-[25vh]"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{
                    opacity: [0.6, 0.8, 0.6],
                    scale: [1, 1.05, 1],
                    rotate: [0, 360],
                    x: [0, 15, -15, 0],
                    y: [0, -15, 15, 0]
                }}
                transition={{
                    opacity: { duration: 10, repeat: Infinity, ease: "easeInOut" },
                    scale: { duration: 15, repeat: Infinity, ease: "easeInOut" },
                    rotate: { duration: 180, repeat: Infinity, ease: "linear" },
                    x: { duration: 20, repeat: Infinity, ease: "easeInOut" },
                    y: { duration: 25, repeat: Infinity, ease: "easeInOut" }
                }}
            >
                <img
                    src={bgEllipse}
                    alt=""
                    className="block w-full h-full object-contain filter blur-[1px] lg:blur-[2px]"
                />
            </motion.div>
        </div>
    );
}
