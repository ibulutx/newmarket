import React, { useState, useEffect } from "react";
import { FaArrowCircleUp } from "react-icons/fa";

const ScrollArrow = () => {
    const [showScroll, setShowScroll] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const handleScroll = () => {
        if (window.pageYOffset > 300) {
            setShowScroll(true);
        } else {
            setShowScroll(false);
        }
    };

    const scrollTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <div className="scroll-arrow">
            {showScroll && (
                <div className="scroll-arrow-icon" onClick={scrollTop}>
                    <FaArrowCircleUp color="#5c9aff" size={50} />
                </div>
            )}
        </div>
    );
};

export default ScrollArrow;