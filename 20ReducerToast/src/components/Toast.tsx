import "./Toast.css";
import { motion } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";

interface Props {
    show: boolean;
    content: string;
    close: () => void;
}

const Toast: React.FC<Props> = ({ show, content, close }) => {
    const toastRef: React.RefObject<HTMLDivElement> = useRef(null);
    const [xpos, setXpos] = useState(-2000);

    useEffect(() => {
        close();

        if (show) {
            setXpos(0);
        } else {
            const timer = setTimeout(() => {
                setXpos(-2000);
            }, 1500);

            return () => {
                clearTimeout(timer);
            };
        }
    }, [show]);

    return (
        <motion.div
            animate={{
                x: xpos,
                y: 0,
                scale: 1,
                rotate: 0,
            }}
            ref={toastRef}
            className="toast"
        >
            {content}
        </motion.div>
    );
};

export default Toast;
