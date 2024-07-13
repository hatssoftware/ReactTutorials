import "./Toast.css";
import { motion } from "framer-motion";
import React from "react";

// kazda
interface Props {
    show: boolean;
    content: string;
}

const Toast: React.FC<Props> = ({ show, content }) => {
    let xpos = -200;
    if (show) {
        xpos = 0;
    } else if (!show) {
        xpos = -200;
    }

    return (
        <motion.div
            animate={{
                x: xpos,
                y: 0,
                scale: 1,
                rotate: 0,
            }}
        >
            {content}
        </motion.div>
    );
};

export default Toast;
