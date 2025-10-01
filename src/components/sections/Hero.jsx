import { motion } from "framer-motion"
import { ArrowDown, Github, Linkedin, Mail, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Github01Icon, Linkedin01Icon, Mail01Icon } from "hugeicons-react"
import Hero from "@/assets/Hero1.jpg"

export default function HeroSection() {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.3,
            },
        },
    }

    const itemVariants = {
        hidden: { y: 50, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                type: "spring",
                stiffness: 100,
                damping: 10,
            },
        },
    }

    return (
        <section id="home" className="min-h-screen flex items-center justify-center relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="grid lg:grid-cols-2 gap-12 items-center"
                >
                    <motion.div variants={itemVariants} className="relative flex justify-center lg:justify-start">
                        <div className="relative">
                            {/* 3D animated background behind image */}
                            <div className="absolute inset-0 -m-8">
                                <div className="w-full h-full relative">
                                    <motion.div
                                        className="absolute top-4 left-4 w-16 h-16 border-2 border-primary/30 rounded-lg"
                                        animate={{
                                            rotate: [0, 360],
                                            scale: [1, 1.1, 1],
                                        }}
                                        transition={{
                                            duration: 8,
                                            repeat: Number.POSITIVE_INFINITY,
                                            ease: "linear",
                                        }}
                                    />
                                    <motion.div
                                        className="absolute top-8 right-0 w-12 h-12 bg-secondary/20 rounded-full"
                                        animate={{
                                            y: [0, -20, 0],
                                            x: [0, 10, 0],
                                        }}
                                        transition={{
                                            duration: 6,
                                            repeat: Number.POSITIVE_INFINITY,
                                            ease: "easeInOut",
                                        }}
                                    />
                                    <motion.div
                                        className="absolute bottom-0 left-8 w-8 h-8 border border-accent/40"
                                        animate={{
                                            rotate: [0, -360],
                                            scale: [1, 0.8, 1],
                                        }}
                                        transition={{
                                            duration: 10,
                                            repeat: Number.POSITIVE_INFINITY,
                                            ease: "linear",
                                        }}
                                    />
                                    <motion.div
                                        className="absolute bottom-4 right-4 w-6 h-6 bg-primary/30 rounded-sm"
                                        animate={{
                                            rotate: [45, 405],
                                            y: [0, -15, 0],
                                        }}
                                        transition={{
                                            duration: 7,
                                            repeat: Number.POSITIVE_INFINITY,
                                            ease: "easeInOut",
                                        }}
                                    />
                                </div>
                            </div>

                            {/* Profile image */}
                            <motion.div
                                className="relative z-10 w-64 h-64 md:w-[28rem] md:h-[28rem] rounded-xl overflow-hidden border-2 border-primary/20 shadow-2xl mt-20 md:mt-0"
                                whileHover={{ scale: 1.05 }}
                                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                            >
                                <img
                                    src={Hero}
                                    alt="Fullstack Developer"
                                    width={420}
                                    height={420}
                                    className="w-full h-full object-cover rounded-xl"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
                            </motion.div>
                        </div>
                    </motion.div>

                    {/* Content section */}
                    <motion.div variants={itemVariants} className="space-y-8 text-center lg:text-left">
                        <div className="inline-flex items-center px-3 py-1.5 rounded-full bg-transparent border mb-2 self-start">
                                <Sparkles className="h-4 w-4 text-emerald-600 mr-2" />
                                <span className="text-sm font-medium text-emerald-800 ">Available for Work</span>
                            </div>
                        <div className="space-y-4">
                            <motion.h1
                                className="font-heading text-6xl  font-bold text-balance"
                                style={{
                                    background: "linear-gradient(135deg, #0891b2, #a16207)",
                                    WebkitBackgroundClip: "text",
                                    WebkitTextFillColor: "transparent",
                                    backgroundClip: "text",
                                }}
                            >
                                Hi, I'm <br /> Nandu Ramineni
                            </motion.h1>
                            <motion.p className="font-body text-base  text-muted-foreground max-w-6xl text-pretty">
                                Versatile Full Stack (MERN) Developer  with a passion for creating seamless digital experiences. Proficient in building robust web applications and crafting visually compelling designs that resonate with users. Dedicated to delivering innovative solutions that merge functionality with aesthetics.
                            </motion.p>
                        </div>

                        <motion.div variants={itemVariants} className="flex flex-wrap justify-center lg:justify-start gap-4">
                            <a href="mailto:nanduramineni2233@gmail.com" target="_blank" rel="noopener noreferrer">
                                <Button size="lg" className="animate-pulse-glow">
                                <Mail01Icon className="mr-2 h-5 w-5" />
                                Get In Touch
                            </Button>
                            </a>
                            <a href="https://github.com/Nandu-ramineni" target="_blank" rel="noopener noreferrer">
                                <Button variant="outline" size="lg">
                                <Github01Icon className="mr-2 h-5 w-5" />
                                View Work
                            </Button>
                            </a>
                        </motion.div>

                        <motion.div variants={itemVariants} className="flex justify-center lg:justify-start space-x-6">
                            {[
                                { icon: Github01Icon, href: "https://github.com/Nandu-ramineni", label: "GitHub" },
                                { icon: Linkedin01Icon, href: "https://www.linkedin.com/in/nandu-ramineni-85a226251/", label: "LinkedIn" },
                                { icon: Mail01Icon, href: "mailto:nanduramineni2233@gmail.com", label: "Email" },
                            ].map(({ icon: Icon, href, label }) => (
                                <motion.a
                                    key={label}
                                    href={href}
                                    className="p-3 rounded-full bg-card hover:bg-primary/10 transition-colors"
                                    whileHover={{ scale: 1.1, rotate: 5 }}
                                    whileTap={{ scale: 0.95 }}
                                    aria-label={label}
                                >
                                    <Icon className="h-6 w-6 text-primary" />
                                </motion.a>
                            ))}
                        </motion.div>
                    </motion.div>
                </motion.div>
            </div>

            {/* Scroll indicator */}
            <motion.div
                className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
                animate={{ y: [0, 10, 0] }}
                transition={{ repeat: Number.POSITIVE_INFINITY, duration: 2 }}
            >
                <ArrowDown className="h-6 w-6 text-primary" />
            </motion.div>
        </section>
    )
}
