import { useEffect, useState } from "react";

const GoToTheTop = () => {
    const [isVisible, setIsVisible] = useState(false);
    
    const toggleVisibility = () => {
        if (window.pageYOffset > 300) {
        setIsVisible(true);
        } else {
        setIsVisible(false);
        }
    };
    
    const scrollToTop = () => {
        window.scrollTo({
        top: 0,
        behavior: "smooth"
        });
    };
    
    useEffect(() => {
        window.addEventListener("scroll", toggleVisibility);
    }, []);
    
    return (
        <div className="fixed bottom-10 right-5">
        {isVisible && (
            <div onClick={scrollToTop} className="transition-all hover:scale-110 flex justify-center items-center bg-white h-16 w-16 rounded-full cursor-pointer shadow-lg border border-slate-300">
            <i className="text-2xl text-blue-accent-700 fa-solid fa-angle-up"></i>
            </div>
        )}
        </div>
    );
};
    
export default GoToTheTop;