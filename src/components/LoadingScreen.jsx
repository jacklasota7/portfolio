import { useEffect, useState } from "react";

export const LoadingScreen = ({ onComplete }) => {
    const [progress, setProgress] = useState(0);
    const [typedText, setTypedText] = useState("");
    const totalBlocks = 20; // Number of blocks in the loading bar
    const typeText = "// Jack Lasota's Portfolio";

    // Typewriter effect
    useEffect(() => {
        let index = 0;
        const typeInterval = setInterval(() => {
            setTypedText(typeText.substring(0, index));
            index++;
            if (index > typeText.length) {
                clearInterval(typeInterval);
            }
        }, 60);
        return () => clearInterval(typeInterval);
    }, []);

    // Progress bar effect
    useEffect(() => {
        let percent = 0;
        const interval = setInterval(() => {
            setProgress(percent);
            percent++;
            if (percent > 100) {
                clearInterval(interval);
                setTimeout(() => {
                    onComplete();
                }, 500);
            }
        }, 30);
        return () => clearInterval(interval);
    }, [onComplete]);

    // Calculate how many blocks to fill
    const filledBlocks = Math.round((progress / 100) * totalBlocks);

    return (
        <div className="fixed inset-0 z-50 bg-black text-white flex flex-col items-center justify-center">
            <div className="w-full max-w-[340px] px-4 flex flex-col items-center">
                {/* Relative wrapper for bar and typewriter text */}
                <div className="relative w-full flex flex-col items-center">
                    {/* Typewriter text: absolute center on sm+, normal on mobile */}
                    <div className="mb-4 text-2xl font-mono font-extrabold tracking-wide text-center w-full sm:w-max sm:absolute sm:left-1/2 sm:-translate-x-1/2 sm:top-0">
                        {typedText}<span className="animate-blink ml-1">|</span>
                    </div>
                    {/* Spacer for mobile so bar doesn't overlap text */}
                    <div className="hidden sm:block" style={{height: '32px'}}></div>
                    <div className="flex w-full justify-between items-center mb-2 mt-4 sm:mt-8">
                        <span className="font-mono text-lg sm:text-2xl font-extrabold tracking-widest" style={{letterSpacing: '0.2em'}}>LOADING...</span>
                        <span className="font-mono text-lg sm:text-2xl font-extrabold">{progress}%</span>
                    </div>
                    <div className="w-full h-10 flex items-center border-4 border-white bg-white/5" style={{boxSizing: 'border-box'}}>
                        {/* Render blocks */}
                        {Array.from({ length: totalBlocks }).map((_, i) => (
                            <div
                                key={i}
                                className={`h-7 mx-[2px] ${i < filledBlocks ? 'bg-white' : 'bg-transparent'} border-none`}
                                style={{ width: 12 }}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};