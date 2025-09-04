'use client';

import { AnimatePresence, motion } from "motion/react";
import { usePathname } from "next/navigation";

interface ClientTransitionProps {
    children: React.ReactNode;
}

const ClientTransition = (props: ClientTransitionProps) => {
    const pathname = usePathname();

    return (
        <AnimatePresence mode="wait">
            <motion.div
                key={pathname}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
            >
                {props.children}
            </motion.div>
        </AnimatePresence>
    );
}

export default ClientTransition;