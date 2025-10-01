import React from "react"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter, Loader } from "lucide-react"
import { Mail01Icon, MapPinpoint01Icon } from "hugeicons-react"
import emailjs from "emailjs-com"
import { toast } from "sonner"
const service_id = import.meta.env.VITE_SERVICE_ID
const template_id = import.meta.env.VITE_TEMPLATE_ID
const user_id = import.meta.env.VITE_USER_ID

export default function ContactSection() {
    const ref = useRef(null)
    const [loading, setLoading] = useState(false)
    const isInView = useInView(ref, { once: true, margin: "-100px" })
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    })

    const handleSubmit = (e) => {
        e.preventDefault()
        setLoading(true)
        emailjs
            .send(
                service_id,
                template_id,
                formData,
                user_id
            )
            .then(() => {
                toast("Message sent successfully!", { description: "We will get back to you soon." })
                setFormData({ name: "", email: "", subject: "", message: "" })
            })
            .catch((error) => {
                toast("Failed to send message.", { description: "Please try again later.", variant: "error" })
                console.error("EmailJS error:", error)
            })
            .finally(() => {
                setLoading(false)
            })
    }

    const handleChange = (e) => {
        setFormData((prev) => ({
            ...prev,
            [e.target.name]: e.target.value,
        }))
    }

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

    const contactInfo = [
        {
            icon: Mail01Icon,
            label: "Email",
            value: "nanduramineni2233@gmail.com",
            href: "mailto:nanduramineni2233@gmail.com",
        },
        {
            icon: Phone,
            label: "Phone",
            value: "+353 870393277",
            href: "tel:+353870393277",
        },
        {
            icon: MapPinpoint01Icon,
            label: "Location",
            value: "Dublin, Ireland",
            href: "https://www.google.com/maps/place/Dublin,+Ireland",
        },
    ]

    const socialLinks = [
        { icon: Github, href: "https://github.com/Nandu-ramineni", label: "GitHub" },
        { icon: Linkedin, href: "https://www.linkedin.com/in/nandu-ramineni-85a226251/", label: "LinkedIn" },
        { icon: Twitter, href: "https://twitter.com/NanduRamineni", label: "Twitter" },
    ]

    return (
        <section id="contact" className="py-20 relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    ref={ref}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    variants={containerVariants}
                    className="space-y-12"
                >
                    <motion.div variants={cardVariants} className="text-center">
                        <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary mb-4">Let's Work Together</h2>
                        <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
                            Ready to bring your ideas to life? Let's discuss your next project and create something amazing together.
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        {/* Contact Information */}
                        <motion.div variants={cardVariants} className="space-y-8">
                            <div>
                                <h3 className="font-heading text-2xl font-semibold text-primary mb-6">Get In Touch</h3>
                                <p className="font-body text-muted-foreground text-pretty mb-8">
                                    I'm always interested in new opportunities and exciting projects. Whether you have a question or just
                                    want to say hi, feel free to reach out!
                                </p>
                            </div>

                            <div className="space-y-4">
                                {contactInfo.map((info, index) => (
                                    <motion.a
                                        key={index}
                                        href={info.href}
                                        className="flex items-center gap-4 p-4 rounded-lg bg-card/50 backdrop-blur-sm border border-primary/20 hover:border-primary/40 transition-all duration-300 group"
                                        whileHover={{ scale: 1.02, x: 10 }}
                                    >
                                        <div className="p-3 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors">
                                            <info.icon className="h-5 w-5 text-primary" />
                                        </div>
                                        <div>
                                            <p className="font-body text-sm text-muted-foreground">{info.label}</p>
                                            <p className="font-body font-medium text-foreground">{info.value}</p>
                                        </div>
                                    </motion.a>
                                ))}
                            </div>

                            <div>
                                <h4 className="font-heading text-lg font-semibold text-primary mb-4">Follow Me</h4>
                                <div className="flex gap-4">
                                    {socialLinks.map((social, index) => (
                                        <motion.a
                                            key={index}
                                            href={social.href}
                                            className="p-3 rounded-full bg-card/50 backdrop-blur-sm border border-primary/20 hover:border-primary/40 transition-all duration-300"
                                            whileHover={{ scale: 1.1, rotate: 5 }}
                                            whileTap={{ scale: 0.95 }}
                                            aria-label={social.label}
                                        >
                                            <social.icon className="h-5 w-5 text-primary" />
                                        </motion.a>
                                    ))}
                                </div>
                            </div>
                        </motion.div>

                        {/* Contact Form */}
                        <motion.div variants={cardVariants}>
                            <Card className="p-8 bg-card/50 backdrop-blur-sm border-primary/20 hover:border-primary/40 transition-all duration-300">
                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <div>
                                            <label htmlFor="name" className="block font-body text-sm font-medium text-foreground mb-2">
                                                Name
                                            </label>
                                            <Input
                                                id="name"
                                                name="name"
                                                value={formData.name}
                                                onChange={handleChange}
                                                placeholder="Your name"
                                                required
                                                className="bg-background/50"
                                            />
                                        </div>
                                        <div>
                                            <label htmlFor="email" className="block font-body text-sm font-medium text-foreground mb-2">
                                                Email
                                            </label>
                                            <Input
                                                id="email"
                                                name="email"
                                                type="email"
                                                value={formData.email}
                                                onChange={handleChange}
                                                placeholder="your.email@example.com"
                                                required
                                                className="bg-background/50"
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label htmlFor="subject" className="block font-body text-sm font-medium text-foreground mb-2">
                                            Subject
                                        </label>
                                        <Input
                                            id="subject"
                                            name="subject"
                                            value={formData.subject}
                                            onChange={handleChange}
                                            placeholder="Project inquiry"
                                            required
                                            className="bg-background/50"
                                        />
                                    </div>

                                    <div>
                                        <label htmlFor="message" className="block font-body text-sm font-medium text-foreground mb-2">
                                            Message
                                        </label>
                                        <Textarea
                                            id="message"
                                            name="message"
                                            value={formData.message}
                                            onChange={handleChange}
                                            placeholder="Tell me about your project..."
                                            rows={6}
                                            required
                                            className="bg-background/50 resize-none"
                                        />
                                    </div>

                                    <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                                        <Button
                                            type="submit"
                                            size="lg"
                                            className="w-full animate-pulse-glow"
                                            disabled={loading}
                                        >
                                            {loading ? (
                                                // Loader Icon
                                                <Loader className="mr-2 h-5 w-5 animate-spin" />
                                            ) : (
                                                // Send Icon
                                                <Send className="mr-2 h-5 w-5" />
                                            )}

                                            {loading ? "Sending..." : "Send Message"}
                                        </Button>
                                    </motion.div>

                                </form>
                            </Card>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
