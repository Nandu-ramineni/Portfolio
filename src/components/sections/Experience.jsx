import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, MapPin } from "lucide-react"
import { Calendar01Icon } from "hugeicons-react"

const experiences = [
    {
        title: "Fullstack Developer",
        logo: "https://media.licdn.com/dms/image/v2/D560BAQHbPRov2bSb5w/company-logo_200_200/company-logo_200_200/0/1719219564099/redstring_invisible_thread_logo?e=2147483647&v=beta&t=saAOc8wcwHpU6ahtib_pbnC4xIBUQQv1ZR2BtlBJ9UY",
        company: "Redstring",
        location: "Remote",
        period: "Oct 2024 - Mar 2025",
        description:
            "Spearheaded the development of Startup for Startups, a team-building web application, by designing a responsive frontend using React, Tailwind CSS, and ShadCN, and implementing a high-performance backend with NodeJs, Express, and Redis.",
        technologies: ["React", "Node.js", "MongoDB", "Redis", "Serverless", "security best practices"],
        achievements: [
            "Reduced application load time by 40%",
            "Implemented CI/CD pipeline reducing deployment time by 60%",
            "Spearheaded the development of application.",
        ],
    },
    {
        title: "Web Developer",
        logo: "https://media.licdn.com/dms/image/v2/D4D0BAQG6qo9Hvwuukg/company-logo_100_100/company-logo_100_100/0/1720792761425?e=1759968000&v=beta&t=m7RYNx3upPLLJZ7yASZ3o0cwbyBvAsMi3HQnxTLW_iQ",
        company: "Health Puls Connect",
        location: "Remote",
        period: "2020 - 2022",
        description:
            "Built MVP from scratch using modern web technologies. Collaborated with design team to create intuitive user experiences.",
        technologies: ["Next.js", "TypeScript", "MongoDB", "Vercel"],
        achievements: [
            "Developed core platform features used by 10K+ users",
            "Optimized database queries improving performance by 50%",
            "Integrated third-party APIs and payment systems",
        ],
    },
    
]

export default function ExperienceSection() {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: "-100px" })

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.3,
            },
        },
    }

    const cardVariants = {
        hidden: { x: -50, opacity: 0 },
        visible: {
            x: 0,
            opacity: 1,
            transition: {
                type: "spring",
                stiffness: 100,
                damping: 15,
            },
        },
    }

    return (
        <section id="experience" className="py-20 relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    ref={ref}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    variants={containerVariants}
                    className="space-y-12"
                >
                    <motion.div variants={cardVariants} className="text-center">
                        <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary mb-4">Professional Experience</h2>
                        <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
                            A journey through innovative projects and collaborative teams, building scalable solutions.
                        </p>
                    </motion.div>

                    <div className="relative">
                        {/* Timeline line */}
                        <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary to-accent transform md:-translate-x-1/2" />

                        <div className="space-y-12">
                            {experiences.map((exp, index) => (
                                <motion.div
                                    key={index}
                                    variants={cardVariants}
                                    className={`relative flex items-center ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
                                >
                                    {/* Timeline dot */}
                                    <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-primary rounded-full transform md:-translate-x-1/2 z-10 animate-pulse-glow" />

                                    <div className={`w-full md:w-1/2 ${index % 2 === 0 ? "md:pr-8" : "md:pl-8"}`}>
                                        <motion.div
                                            whileHover={{ scale: 1.02, rotateY: index % 2 === 0 ? 2 : -2 }}
                                            className="ml-12 md:ml-0"
                                        >
                                            <Card className="p-6 bg-card/50 backdrop-blur-sm border-primary/20 hover:border-primary/40 transition-all duration-300">
                                                <div className="space-y-4">
                                                    <div className="flex items-start space-x-4">
                                                        <div>
                                                        {exp.logo && (
                                                            <img src={exp.logo} alt={`${exp.company} logo`} className="h-10 w-10 object-contain mt-2 rounded-md" />
                                                        )}
                                                    </div>
                                                    <div>
                                                        <h3 className="font-heading text-xl font-semibold text-primary">{exp.title}</h3>
                                                        <p className="font-body text-lg font-medium text-foreground">{exp.company}</p>
                                                        <div className="flex flex-wrap items-center gap-4 mt-2 text-sm text-muted-foreground">
                                                            <div className="flex items-center gap-1">
                                                                <Calendar01Icon className="h-4 w-4" />
                                                                {exp.period}
                                                            </div>
                                                            <div className="flex items-center gap-1">
                                                                <MapPin className="h-4 w-4" />
                                                                {exp.location}
                                                            </div>
                                                        </div>
                                                    </div>
                                                    </div>

                                                    <p className="font-body text-muted-foreground text-pretty">{exp.description}</p>

                                                    <div className="space-y-3">
                                                        <div>
                                                            <h4 className="font-body text-sm font-medium text-foreground mb-2">Key Achievements:</h4>
                                                            <ul className="space-y-1">
                                                                {exp.achievements.map((achievement, i) => (
                                                                    <li key={i} className="font-body text-sm text-muted-foreground flex items-start">
                                                                        <span className="text-primary mr-2">•</span>
                                                                        {achievement}
                                                                    </li>
                                                                ))}
                                                            </ul>
                                                        </div>

                                                        <div className="flex flex-wrap gap-2">
                                                            {exp.technologies.map((tech) => (
                                                                <Badge key={tech} variant="secondary" className="text-xs">
                                                                    {tech}
                                                                </Badge>
                                                            ))}
                                                        </div>
                                                    </div>
                                                </div>
                                            </Card>
                                        </motion.div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
