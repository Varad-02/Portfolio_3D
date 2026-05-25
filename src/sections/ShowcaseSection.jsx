import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP} from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const ShowcaseSection = () => {
    const sectionRef = useRef(null);
    const project1Ref = useRef(null);
    const project2Ref = useRef(null);
    const project3Ref = useRef(null);

    useGSAP(() => {
        // Animation for the main section
        gsap.fromTo(
            sectionRef.current,
            { opacity: 0 },
            { opacity: 1, duration: 1.5 }
        );

        // Animations for each app showcase
        const projects = [project1Ref.current, project2Ref.current, project3Ref.current];

        projects.forEach((card, index) => {
            gsap.fromTo(
                card,
                {
                    y: 50,
                    opacity: 0,
                },
                {
                    y: 0,
                    opacity: 1,
                    duration: 1,
                    delay: 0.3 * (index + 1),
                    scrollTrigger: {
                        trigger: card,
                        start: "top bottom-=100",
                    },
                }
            );
        });
    }, []);

    return (
        <section id="work" ref={sectionRef} className="app-showcase">
            <div className="w-full">
                <div className="showcaselayout">
                    <div className="first-project-wrapper" ref={project1Ref}>
                        <div className="image-wrapper">
                            <img src="/images/projectno1.jpg" alt="Ryde App Interface" />
                        </div>
                        <div className="text-content">
                            <h2>
                                Bookified, an AI-powered platform for real-time voice conversations with your books
                            </h2>
                            <p className="text-white-50 md:text-xl">
                                An app built with Next.js, Vapi, MongoDB, & TailwindCSS for a fast,
                                user-friendly experience.
                            </p>
                        </div>
                    </div>

                    <div className="project-list-wrapper overflow-hidden">
                        <div className="project" ref={project2Ref}>
                            <div className="image-wrapper bg-[#ffe6ff]">

                                <img
                                    src="/images/projectno22.png"
                                    alt="Library Management Platform"
                                />
                            </div>
                            <h2>Dev Event - The Event Management Platform</h2>
                        </div>

                        <div className="project" ref={project3Ref}>
                            <div className="image-wrapper bg-[#FFE7EB]">
                                <img src="/images/projectno32.png" alt="YC Directory App" />
                            </div>
                            <h2>Jarvis – Movie App</h2>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ShowcaseSection;