import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { GraduationCap, Award, BookOpen } from "lucide-react"

const education = [
    {
        degree: "MSc in Computing (AI)",
        institution: "Dublin City University",
        period: "2025 - 2026",
        gpa: "-",
        description:
            "Currently pursuing a Master's degree in Artificial Intelligence with a focus on researching the ethical implications of AI technologies. This program emphasizes advanced AI methodologies, ethical considerations, and their applications in real-world scenarios.",
        courses: [
            "Advanced Algorithms",
            "Machine Learning",
            "Data Management and Visualization",
            "Data Analytics and Mining",
            "Machine Translation",
        ],
        logo: "https://www.dcu.ie/sites/default/files/styles/widescreen_television/public/media/2018/03/29/dcu_logo_stacked_slate_yellow.png.webp?itok=3aAgeqTT",
    },
    {
        degree: "Bachelor's of Technology in AI",
        institution: "Parul University",
        period: "",
        gpa: "8.0/10.0",
        description:
            "Earned a Bachelor's degree in Artificial Intelligence, gaining a comprehensive foundation in Artificial Intelligence, Machine Learning, software development, data structures, and system design.",
        courses: [
            "Data Structures",
            "Web Development",
            "Operating Systems",
            "Computer Networks",
            "Cloud Computing",
            "Database Management Systems",
            "System Design",
        ],
        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPCHjG27sntLiUM5jTbv7e39XvpXJnulLvxw&s",
    },
]

const certifications = [
    {
        name: "AWS Certified Solutions Architect",
        issuer: "Amazon Web Services",
        year: "2023",
        icon: Award,
    },
    {
        name: "Google Cloud Professional Developer",
        issuer: "Google Cloud",
        year: "2022",
        icon: Award,
    },
    {
        name: "React Advanced Certification",
        issuer: "Meta",
        year: "2021",
        icon: Award,
    },
]

export default function EducationSection() {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: "-100px" })

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
            },
        },
    }

    const cardVariants = {
        hidden: { y: 50, opacity: 0, rotateX: -10 },
        visible: {
            y: 0,
            opacity: 1,
            rotateX: 0,
            transition: {
                type: "spring",
                stiffness: 100,
                damping: 15,
            },
        },
    }

    return (
        <section id="education" className="py-20 relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    ref={ref}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    variants={containerVariants}
                    className="space-y-12"
                >
                    <motion.div variants={cardVariants} className="text-center">
                        <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary mb-4">
                            Education & Certifications
                        </h2>
                        <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
                            Continuous learning and academic excellence in computer science and software development.
                        </p>
                    </motion.div>

                    {/* Education */}
                    <div className="space-y-8">
                        <motion.h3 variants={cardVariants} className="font-heading text-2xl font-semibold text-primary text-center">
                            Academic Background
                        </motion.h3>

                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                            {education.map((edu, index) => (
                                <motion.div
                                    key={index}
                                    variants={cardVariants}
                                    whileHover={{ scale: 1.02, rotateY: 3 }}
                                    className="perspective-1000"
                                >
                                    <Card className="p-6 bg-card/50 backdrop-blur-sm border-primary/20 hover:border-primary/40 transition-all duration-300 h-full">
                                        <div className="space-y-4">
                                            <div className="flex items-start  gap-4">
                                                <div className=" rounded-full bg-primary/10 mt-2">
                                                    <img src={edu.logo} alt={edu.institution} className="h-10 w-10 text-primary rounded-md" />
                                                </div>
                                                <div className="flex-1">
                                                    <h4 className="font-heading text-xl font-semibold text-primary">{edu.degree}</h4>
                                                    <p className="font-body text-foreground font-medium">{edu.institution}</p>
                                                    <div className="flex items-center gap-4 mt-1 text-sm text-muted-foreground">
                                                        <span>{edu.period}</span>
                                                        <span>GPA: {edu.gpa}</span>
                                                    </div>
                                                </div>
                                            </div>

                                            <p className="font-body text-muted-foreground text-pretty">{edu.description}</p>

                                            <div>
                                                <h5 className="font-body text-sm font-medium text-foreground mb-2">Key Courses:</h5>
                                                <div className="flex flex-wrap gap-2">
                                                    {edu.courses.map((course) => (
                                                        <Badge key={course} variant="outline" className="text-xs">
                                                            {course}
                                                        </Badge>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    </Card>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Certifications */}
                    {/* <div className="space-y-8">
                        <motion.h3 variants={cardVariants} className="font-heading text-2xl font-semibold text-primary text-center">
                            Professional Certifications
                        </motion.h3>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {certifications.map((cert, index) => (
                                <motion.div
                                    key={index}
                                    variants={cardVariants}
                                    whileHover={{ scale: 1.05, rotateZ: 2 }}
                                    className="perspective-1000"
                                >
                                    <Card className="p-6 bg-card/50 backdrop-blur-sm border-primary/20 hover:border-primary/40 transition-all duration-300 text-center">
                                        <div className="space-y-3">
                                            <div className="flex justify-center">
                                                <div className="p-3 rounded-full bg-accent/10">
                                                    <cert.icon className="h-8 w-8 text-accent" />
                                                </div>
                                            </div>
                                            <div>
                                                <h4 className="font-heading text-lg font-semibold text-primary">{cert.name}</h4>
                                                <p className="font-body text-muted-foreground">{cert.issuer}</p>
                                                <p className="font-body text-sm text-muted-foreground">{cert.year}</p>
                                            </div>
                                        </div>
                                    </Card>
                                </motion.div>
                            ))}
                        </div>
                    </div> */}
                </motion.div>
            </div>
        </section>
    )
}
