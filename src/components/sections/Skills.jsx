import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Card } from "@/components/ui/card"
import Html from "@/assets/html.png"
import css from "@/assets/css.png"
import tailwind from "@/assets/tailwind.png"
import react from "@/assets/react.png"
import nextjs from "@/assets/next.png"
import js from "@/assets/js.png"
import ts from "@/assets/ts.png"
import photoshop from "@/assets/ps.png"
import seo from "@/assets/seo.png"
import java from "@/assets/java.png"
import node from "@/assets/node.png"
import graph from "@/assets/graph.png"
import express from "@/assets/express.png"
import micro from "@/assets/micro.png"
import post from "@/assets/post.png"
import mongo from "@/assets/mongo.png"
import rest from "@/assets/rest.png"
import redis from "@/assets/redis.png"
import cicd from "@/assets/cicd.png"
import github from "@/assets/git.png"
import docker from "@/assets/docker.png"
import aws from "@/assets/aws.png"
import vercel from "@/assets/vercel.png"
import netlify from "@/assets/netlify.png"
const skills = [
    {
        category: "Frontend",
        technologies: [
            { name: "HTML5", image: Html },
            { name: "CSS3", image: css },
            { name: "Tailwind", image: tailwind },
            { name: "React", image: react },
            { name: "Next.js", image: nextjs },
            { name: "JavaScript", image: js },
            { name: "TypeScript", image: ts },
            { name: "Photoshop", image: photoshop },
            { name: "SEO", image: seo },
        ],
    },
    {
        category: "Backend",
        technologies: [
            { name: "Node.js", image: node },
            { name: "Java", image: java },
            { name: "Express.js", image: express },
            { name: "Microservices", image: micro },
            { name: "PostgreSQL", image: post },
            { name: "MongoDB", image: mongo },
            { name: "GraphQL", image: graph },
            { name: "REST APIs", image: rest },
            { name: "Redis", image: redis },
        ],
    },
    {
        category: "DevOps & Tools",
        technologies: [
            { name: "CI/CD", image: cicd },
            { name: "Git", image: github },
            { name: "Docker", image: docker },
            { name: "AWS", image: aws },
            { name: "Vercel", image: vercel },
            { name: "Netlify", image: netlify },
        ],
    },
]

export default function SkillsSection() {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: "-100px" })

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
                delayChildren: 0.2,
            },
        },
    }

    const cardVariants = {
        hidden: {
            y: 60,
            opacity: 0,
            rotateX: -15,
            scale: 0.9,
        },
        visible: {
            y: 0,
            opacity: 1,
            rotateX: 0,
            scale: 1,
            transition: {
                type: "spring",
                stiffness: 120,
                damping: 20,
                duration: 0.8,
            },
        },
    }

    const techVariants = {
        hidden: {
            opacity: 0,
            scale: 0.8,
            y: 20,
        },
        visible: (i) => ({
            opacity: 1,
            scale: 1,
            y: 0,
            transition: {
                delay: i * 0.1,
                type: "spring",
                stiffness: 150,
                damping: 25,
            },
        }),
    }

    const glowVariants = {
        initial: {
            boxShadow: "0 0 0 rgba(59, 130, 246, 0)",
        },
        hover: {
            boxShadow: "0 0 30px rgba(59, 130, 246, 0.3), 0 0 60px rgba(59, 130, 246, 0.1)",
            transition: { duration: 0.3 },
        },
    }

    return (
        <section id="skills" className="py-24 relative overflow-hidden">
            {/* Background gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />

            {/* Animated background elements */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl animate-pulse" />
                <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-accent/10 rounded-full blur-3xl animate-pulse delay-1000" />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <motion.div
                    ref={ref}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    variants={containerVariants}
                    className="space-y-16"
                >
                    {/* Header */}
                    <motion.div variants={cardVariants} className="text-center">
                        <motion.div
                            initial={{ scale: 0.5, opacity: 0 }}
                            animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0.5, opacity: 0 }}
                            transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
                            className="inline-block mb-4"
                        >
                            <div className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                                <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary mb-4">Technical Skills</h2>

                            </div>
                        </motion.div>
                        <motion.p
                            className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed"
                            initial={{ y: 20, opacity: 0 }}
                            animate={isInView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
                            transition={{ delay: 0.3, duration: 0.6 }}
                        >
                            Strong proficiency across the full development stack with a focus on modern technologies and best practices.
                        </motion.p>
                    </motion.div>

                    {/* Skills Grid */}
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
                        {skills.map((skillCategory, categoryIndex) => (
                            <motion.div key={skillCategory.category} variants={cardVariants} whileHover="hover" className="group">
                                <motion.div variants={glowVariants} initial="initial" whileHover="hover" className="h-full">
                                    <Card className="p-8 h-full bg-card/80 backdrop-blur-xl border-2 border-primary/20 hover:border-primary/40 transition-all duration-500 group-hover:shadow-2xl group-hover:shadow-primary/10">
                                        {/* Category Header */}
                                        <div className="mb-8">
                                            <motion.h3
                                                className="text-2xl font-bold text-primary mb-2 font-mono"
                                                whileHover={{ scale: 1.05 }}
                                                transition={{ type: "spring", stiffness: 300 }}
                                            >
                                                {skillCategory.category}
                                            </motion.h3>
                                            <div className="h-1 w-16 bg-gradient-to-r from-primary to-accent rounded-full" />
                                        </div>

                                        {/* Technologies Grid */}
                                        <motion.div
                                            className="grid grid-cols-3 gap-4"
                                            initial="hidden"
                                            animate={isInView ? "visible" : "hidden"}
                                        >
                                            {skillCategory.technologies.map((tech, techIndex) => (
                                                <motion.div
                                                    key={tech.name}
                                                    custom={techIndex}
                                                    variants={techVariants}
                                                    whileHover={{
                                                        scale: 1.1,
                                                        rotate: [0, -5, 5, 0],
                                                        transition: { duration: 0.3 },
                                                    }}
                                                    whileTap={{ scale: 0.95 }}
                                                    className="group/tech cursor-pointer"
                                                >
                                                    <div className="flex flex-col items-center p-4 rounded-xl bg-muted/50 hover:bg-primary/10 transition-all duration-300 border border-transparent hover:border-primary/30">
                                                        {/* Image */}
                                                        <img src={tech.image} alt={tech.name} className="h-10 w-auto mb-2" />
                                                        {/* Name */}
                                                        <span className="text-xs font-medium text-center text-foreground/80 group-hover/tech:text-primary transition-colors duration-300 leading-tight">
                                                            {tech.name}
                                                        </span>
                                                    </div>
                                                </motion.div>
                                            ))}
                                        </motion.div>

                                        {/* Category Stats */}
                                        {/* <motion.div
                                            className="mt-8 pt-6 border-t border-primary/20"
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                                            transition={{ delay: categoryIndex * 0.2 + 0.8 }}
                                        >
                                            <div className="flex justify-between items-center text-sm">
                                                <span className="text-muted-foreground">Technologies</span>
                                                <motion.span
                                                    className="font-bold text-primary"
                                                    initial={{ scale: 0 }}
                                                    animate={isInView ? { scale: 1 } : { scale: 0 }}
                                                    transition={{
                                                        delay: categoryIndex * 0.2 + 1,
                                                        type: "spring",
                                                        stiffness: 200,
                                                    }}
                                                >
                                                    {skillCategory.technologies.length}+
                                                </motion.span>
                                            </div>
                                        </motion.div> */}
                                    </Card>
                                </motion.div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Bottom CTA */}
                    <motion.div variants={cardVariants} className="text-center">
                        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="inline-block">
                            <div className="px-8 py-4 bg-gradient-to-r from-primary to-accent rounded-full text-primary-foreground font-semibold shadow-lg hover:shadow-xl transition-all duration-300">
                                Always Learning, Always Growing 🚀
                            </div>
                        </motion.div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    )
}
