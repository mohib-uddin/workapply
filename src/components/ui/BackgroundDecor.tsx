import bgEllipse from "@/assets/bg-ellipse.svg";

export function BackgroundDecor() {
    return (
        <div
            className="absolute left-1/2 -translate-x-1/2 top-[25vh] w-[80vw] h-[80vw] pointer-events-none"
        >
            <img
                src={bgEllipse}
                alt=""
                className="block w-full h-full object-contain"
            />
        </div>
    );
}
