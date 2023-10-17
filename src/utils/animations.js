export const generals = {
    initial: { y: -20, opacity: 0 },
    animate: { y: 0, opacity: 1 },
    exit: { opacity: 0, y: 20, transition: { duration: 0.5 } },
}

export const menu = {
    initial: { y: "calc(100%)" },
    animate: {
        y: "0",
        transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] },
    },
    exit: {
        y: "calc(100%)",
        transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] },
    },
}

export const navfloating = {
    initial: { y: -20, opacity: 0 },
    animate: { y: 0, opacity: 1 },
    exit: { y: 20, opacity: 0 },
}

export const about = {
    initial: { x: 20, opacity: 0 },
    animate: {
        x: "0",
        opacity: 1,
        transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] },
    },
    exit: {
        x: 20,
        opacity: 0,
        transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] },
    },
}

export const home = {
    initial: { x: -20, opacity: 0 },
    animate: {
        x: 0,
        opacity: 1,
        transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] },
    },
    exit: {
        x: -20,
        opacity: 0,
        transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] },
    },
}