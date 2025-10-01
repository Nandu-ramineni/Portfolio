import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Github, Play } from "lucide-react"
import Img1 from "@/assets/projects/Img1.png"
import Img2 from "@/assets/projects/Img2.png"
import Img3 from "@/assets/projects/Img3.png"
import Img4 from "@/assets/projects/Img4.png"
import Img5 from "@/assets/projects/Img5.png"
import Img6 from "@/assets/projects/Img6.png"
const projects = [
    {
        title: "Freelance Marketplace",
        description: "A platform connecting freelancers with clients, featuring job listings, proposals, and secure payments.",
        image: Img6,
        technologies: ["React", "Node.js", "Express", "MongoDB", "Stripe","microservices","docker","kubernetes"],
        features: ["Job listings", "Proposal management", "Secure payments", "User profiles","client profiles"],
        github: "https://github.com/Nandu-ramineni/freelance-marketplace",
        demo: "#",
        category: "Full Stack",
    },
    {
        title: "Food Delivery App",
        description:
            "Introducing My Food Order & Delivery Platform! This innovative platform, built with React, Redux, Node.js, and MongoDB, is designed to offer seamless user experiences from browsing to order completion. It boasts secure JWT authentication, ensuring user data is protected, and integrates Razorpay for smooth and reliable transactions.🎯 User Experience: Customers can effortlessly browse menus, customize orders, and track deliveries in real-time.👨‍🍳 Vendor Management: Vendors have robust tools to manage their menus, track orders, and engage with customers efficiently.📊 Admin Control: Admins have full oversight with detailed analytics, user management, and vendor coordination, all through an intuitive dashboard.Explore it on GitHub and experience the live demo for a hands-on feel of this comprehensive solution.",
        image: Img1,
        technologies: ["React Js", "MongoDB", "Redux", "Node.js", "Express.js", "Razorpay","JWT"],
        features: ["Real-time order tracking", "Payment processing", "Admin dashboard", "Profile management", "Vendor management"],
        github: "https://github.com/Nandu-ramineni/FoodDelivery",
        demo: "https://yummz.netlify.app/",
        category: "Full Stack",
    },
    {
        title: "Streaming Application",
        description:
            "A feature-rich streaming application built with the MERN stack, utilizing AWS S3 for secure storage and CloudFront for fast content delivery. Includes user authentication via Firebase and JWT, seamless payments with Razorpay, and comprehensive admin settings for managing users, subscriptions, and content. Designed for a smooth and engaging user experience across all devices.",
        image: Img2,
        technologies: ["AWS S3", "CloudFront", "Razorpay", "Socket.io", "Firebase", "MERN Stack"],
        features: ["Video streaming", "User authentication", "Payment integration", "Admin dashboard","subscription management"],
        github: "https://github.com/Nandu-ramineni/Streaming-Application",
        demo: "https://github.com/Nandu-ramineni/Streaming-Application",
        category: "Cloud",
    },
    {
        title: "AI Chat Application",
        description:
            "Real-time chat application with AI integration, featuring natural language processing and smart responses.",
        image: Img3,
        technologies: ["Node.js", "Socket.io", "OpenAI API", "MongoDB", "React", "gemini"],
        features: ["Real-time messaging", "AI responses", "User authentication", "Chat history", "Smart notifications"],
        github: "https://github.com/Nandu-ramineni/Chat_AI",
        demo: "https://aigemini.netlify.app/",
        category: "AI Full Stack",
    },
    {
        title: "File Sharing Platform",
        description: " File Sharing App: Elevate Your File Sharing Journey! 📚. Explore a revolutionary MERN-based platform designed to transform your File Sharing. File Sharing App offers diverse file sharing oppurtunities. 🌟💻",
        image: Img4,
        technologies: ["React.js", "Express.js", "MongoDB", "Redis", "Multipart", "Multer"],
        features: ["File upload", "File download", "Progress tracking", "File sharing", "User authentication"],
        github: "https://github.com/Nandu-ramineni/file_sharing",
        demo: "https://filesend.netlify.app/",
        category: "Full Stack",
    },
    {
        title: "MediDiagnose",
        description: "AI-powered medical diagnosis platform offering personalized Health assessments.",
        image: Img5,
        technologies: ["React", "Django", "Python", "SQLite", "TensorFlow", "scikit-learn", "Pandas"],
        features: ["Automated Diagnosis", "Personalized recommendations", "User-Friendly Interface", "Real-Time Analysis"," Secure Data Handling"],
        github: "https://github.com/Nandu-ramineni/MediDiagnose-using-Machine-Learning",
        demo: "https://github.com/Nandu-ramineni/MediDiagnose-using-Machine-Learning",
        category: "AI/ML",
    },
    
]

const categories = ["All", "Full Stack", "Frontend", "Data Visualization", "Mobile"]

export default function ProjectsSection() {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: "-100px" })
    const [selectedCategory, setSelectedCategory] = useState("All")
    const [selectedProject, setSelectedProject] = useState(null)

    const filteredProjects =
        selectedCategory === "All" ? projects : projects.filter((project) => project.category === selectedCategory)

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
            },
        },
    }

    const cardVariants = {
        hidden: { y: 50, opacity: 0, scale: 0.9 },
        visible: {
            y: 0,
            opacity: 1,
            scale: 1,
            transition: {
                type: "spring",
                stiffness: 100,
                damping: 15,
            },
        },
    }

    return (
        <section id="projects" className="py-20 relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    ref={ref}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    variants={containerVariants}
                    className="space-y-12"
                >
                    <motion.div variants={cardVariants} className="text-center">
                        <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary mb-4">Featured Projects</h2>
                        <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
                            A showcase of innovative solutions and creative implementations across various technologies.
                        </p>
                    </motion.div>

                    {/* Category Filter */}
                    <motion.div variants={cardVariants} className="flex flex-wrap justify-center gap-2">
                        {categories.map((category) => (
                            <Button
                                key={category}
                                variant={selectedCategory === category ? "default" : "outline"}
                                size="sm"
                                onClick={() => setSelectedCategory(category)}
                                className="transition-all duration-300"
                            >
                                {category}
                            </Button>
                        ))}
                    </motion.div>

                    {/* Projects Grid */}
                    <motion.div variants={containerVariants} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {filteredProjects.map((project, index) => (
                            <motion.div
                                key={project.title}
                                variants={cardVariants}
                                whileHover={{ y: -10, rotateY: 5 }}
                                className="perspective-1000"
                            >
                                <Card
                                    className="overflow-hidden bg-card/50 backdrop-blur-sm border-primary/20 hover:border-primary/40 transition-all duration-300 group cursor-pointer"
                                    onClick={() => setSelectedProject(project)}
                                >
                                    {/* Project Image */}
                                    <div className="relative overflow-hidden">
                                        <img
                                            src={project.image || "/placeholder.svg"}
                                            alt={project.title}
                                            className="w-full h-48 object-cover object-top transition-transform duration-300 group-hover:scale-110"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                        <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                            <div className="flex gap-2">
                                                <Button size="sm" variant="secondary" asChild>
                                                    <a href={project.demo} target="_blank" rel="noopener noreferrer">
                                                        <Play className="h-4 w-4 mr-1" />
                                                        Demo
                                                    </a>
                                                </Button>
                                                <Button size="sm" variant="outline" asChild>
                                                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                                                        <Github className="h-4 w-4 mr-1" />
                                                        Code
                                                    </a>
                                                </Button>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Project Content */}
                                    <div className="p-4 space-y-4">
                                        <div>
                                            <div className="flex items-center justify-between mb-2">
                                                <h3 className="font-heading text-xl font-semibold text-primary">{project.title}</h3>
                                                <Badge variant="secondary" className="text-xs">
                                                    {project.category}
                                                </Badge>
                                            </div>
                                            <p className="font-body text-muted-foreground text-sm text-pretty line-clamp-2">
                                                {project.description}
                                            </p>
                                        </div>

                                        <div>
                                            <h4 className="font-body text-sm font-medium text-foreground mb-2">Key Features:</h4>
                                            <ul className="space-y-1">
                                                {project.features.map((feature, i) => (
                                                    <li key={i} className="font-body text-xs text-muted-foreground flex items-start">
                                                        <span className="text-primary mr-2">•</span>
                                                        {feature}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>

                                        <div className="flex flex-wrap gap-1">
                                            {project.technologies.map((tech) => (
                                                <Badge key={tech} variant="outline" className="text-xs">
                                                    {tech}
                                                </Badge>
                                            ))}
                                        </div>
                                    </div>
                                </Card>
                            </motion.div>
                        ))}
                    </motion.div>
                </motion.div>
            </div>

            {/* Dialog popup for project details */}
            <Dialog open={!!selectedProject} onOpenChange={(open) => !open && setSelectedProject(null)}>
                <DialogContent className="md:max-w-5xl max-h-[90vh] overflow-y-auto">
                    {selectedProject && (
                        <>
                            <DialogHeader>
                                <div className="flex items-center justify-between mb-2">
                                    <DialogTitle className="text-2xl font-heading">{selectedProject.title}</DialogTitle>
                                    <Badge variant="secondary" className="mr-6">{selectedProject.category}</Badge>
                                </div>
                            </DialogHeader>

                            <div className="space-y-6">
                                {/* Project Image */}
                                <div className="relative overflow-hidden rounded-lg">
                                    <img
                                        src={selectedProject.image || "/placeholder.svg"}
                                        alt={selectedProject.title}
                                        className="w-full h-auto object-cover"
                                    />
                                </div>

                                {/* Full Description */}
                                <div>
                                    <h3 className="font-heading text-lg font-semibold mb-2">Description</h3>
                                    <DialogDescription className="font-body text-base text-muted-foreground">
                                        {selectedProject.description}
                                    </DialogDescription>
                                </div>

                                {/* Key Features */}
                                <div>
                                    <h3 className="font-heading text-lg font-semibold mb-3">Key Features</h3>
                                    <ul className="space-y-2">
                                        {selectedProject.features.map((feature, i) => (
                                            <li key={i} className="font-body text-sm text-muted-foreground flex items-start">
                                                <span className="text-primary mr-2 font-bold">•</span>
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {/* Technologies */}
                                <div>
                                    <h3 className="font-heading text-lg font-semibold mb-3">Technologies Used</h3>
                                    <div className="flex flex-wrap gap-2">
                                        {selectedProject.technologies.map((tech) => (
                                            <Badge key={tech} variant="outline">
                                                {tech}
                                            </Badge>
                                        ))}
                                    </div>
                                </div>

                                {/* Action Buttons */}
                                <div className="flex gap-3 pt-4">
                                    <Button asChild className="flex-1">
                                        <a href={selectedProject.demo} target="_blank" rel="noopener noreferrer">
                                            <Play className="h-4 w-4 mr-2" />
                                            View Demo
                                        </a>
                                    </Button>
                                    <Button variant="outline" asChild className="flex-1 bg-transparent">
                                        <a href={selectedProject.github} target="_blank" rel="noopener noreferrer">
                                            <Github className="h-4 w-4 mr-2" />
                                            View Code
                                        </a>
                                    </Button>
                                </div>
                            </div>
                        </>
                    )}
                </DialogContent>
            </Dialog>
        </section>
    )
}
