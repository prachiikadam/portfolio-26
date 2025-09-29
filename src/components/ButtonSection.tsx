import  AnimatedButton  from "./AnimatedButton";



export default function ButtonSection() {
    return (
        <div className="text-white">
            <AnimatedButton >
                Hire Me
                <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    stroke="white"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                >
                    <polygon points="22 2 15 22 11 13 2 9 22 2" />
                    <line x1="22" y1="2" x2="11" y2="13" />
                </svg>
            </AnimatedButton>
            <AnimatedButton>View Projects
                <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                >
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                    <polyline points="14 2 14 8 20 8" />
                </svg>
            </AnimatedButton>
        </div>
    )

}
