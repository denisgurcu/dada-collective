import React, { useRef, useState, useEffect } from "react";
import gsap from "gsap";
import { motion, useScroll, useInView } from "framer-motion";
import Button from "../components/Button";
import "./WhatWeDo.css";

const services = [
    {
        title: "Branding",
        color: "var(--color-red)",
        details: "Logo design, visual identity, brand guidelines, tone of voice",
    },
    {
        title: "Web Design",
        color: "var(--color-yellow)",
        details: "Responsive layouts, UI/UX design, prototyping",
    },
    {
        title: "Web Development",
        color: "var(--color-blue)",
        details: "Front-end, animations, CMS integration, React/GSAP",
    },
    {
        title: "Motion Design",
        color: "var(--color-pink)",
        details: "Animated assets, transitions, reels, scroll-based effects",
    },
    {
        title: "Creative Strategy",
        color: "var(--color-green)",
        details: "Concepting, art direction, cross-platform storytelling",
    },
];

const containerVariants = {
    hidden: {},
    show: {},
};

const itemVariants = {
    hidden: (i) => ({ opacity: 0, y: 50 }),
    show: (i) => ({
        opacity: 1,
        y: 0,
        transition: {
            ease: "easeOut",
            duration: 0.8,
            delay: i * 0.15,
        },
    }),
};

const WhatWeDo = () => {
    const sectionRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"],
    });

    const [scrollDir, setScrollDir] = useState("down");
    const [revealButton, setRevealButton] = useState(false);

    useEffect(() => {
        let lastY = window.scrollY;
        const handleScroll = () => {
            const currentY = window.scrollY;
            setScrollDir(currentY > lastY ? "down" : "up");
            lastY = currentY;
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        return scrollYProgress.on("change", (v) => {
            console.log("📌 scroll progress:", v.toFixed(3));
            setRevealButton(v > 0.8 && v < 0.98); // show only in middle portion of section
        });
    }, [scrollYProgress]);

    const handleMouseEnter = (e, index) => {
        gsap.to(e.currentTarget, {
            y: "-1vw",
            backgroundColor: services[index].color,
            duration: 0.3,
        });
        gsap.to(e.currentTarget.querySelector(".details"), {
            opacity: 1,
            x: 0,
            duration: 0.3,
        });
    };

    const handleMouseLeave = (e) => {
        gsap.to(e.currentTarget, {
            y: "0",
            backgroundColor: "var(--color-warm-gray)",
            duration: 0.3,
        });
        gsap.to(e.currentTarget.querySelector(".details"), {
            opacity: 0,
            x: 20,
            duration: 0.3,
        });
    };

    

    return (
        <motion.section
            className="what-we-do_wrapper"
            ref={sectionRef}
            variants={containerVariants}
            initial="hidden"    
            whileInView="show"
            viewport={{ once: false, amount: 0.1 }}
        >
            <motion.h2
                className="what-we-do_title"
                custom={scrollDir === "down" ? 0 : services.length}
                variants={itemVariants}
            >
                WHAT WE DO
            </motion.h2>

            <motion.div className="what-we-do_container" variants={containerVariants}>
                {services.map((service, index) => {
                    const customIndex =
                        scrollDir === "down" ? index + 1 : services.length - index;

                    return (
                        <motion.div
                            key={index}
                            className="service-card-wrapper"
                            custom={scrollDir === "down" ? index + 1 : services.length - index}
                            variants={itemVariants}
                        >
                            <div
                                className={`service-card ${index === services.length - 1 ? "last" : ""
                                    }`}
                                onMouseEnter={(e) => handleMouseEnter(e, index)}
                                onMouseLeave={handleMouseLeave}
                            >
                                <p>{service.title}</p>
                                <span className="details">{service.details}</span>
                            </div>
                        </motion.div>
                    );
                })}
            </motion.div>
            <motion.div
                className="view-services-mask-wrapper"
                custom={scrollDir === "down" ? services.length + 1 : 0}
                variants={itemVariants}
            >
                <Button label="View Services" />
            </motion.div>


        </motion.section>
    );
};

export default WhatWeDo;
