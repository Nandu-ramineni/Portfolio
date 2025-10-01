import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Github01Icon, Linkedin01Icon } from "hugeicons-react"
import { DiCssdeck } from "react-icons/di";
const navItems = [
    { name: "Home", href: "#home" },
    { name: "Skills", href: "#skills" },
    { name: "Experience", href: "#experience" },
    { name: "Education", href: "#education" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
]

const socialItems = [
    {
        name: "GitHub",
        href: "https://github.com/Nandu-ramineni",
        icon: <Github01Icon />
    },
    {
        name: "LinkedIn",
        href: "https://www.linkedin.com/in/nandu-ramineni-85a226251/",
        icon: <Linkedin01Icon />
    },
];


export default function Navigation() {
    const [isOpen, setIsOpen] = useState(false)
    const [activeSection, setActiveSection] = useState("home")
    const [scrolled, setScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50)

            // Update active section based on scroll position
            const sections = navItems.map((item) => item.href.slice(1))
            const current = sections.find((section) => {
                const element = document.getElementById(section)
                if (element) {
                    const rect = element.getBoundingClientRect()
                    return rect.top <= 100 && rect.bottom >= 100
                }
                return false
            })

            if (current) setActiveSection(current)
        }

        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    const scrollToSection = (href) => {
        const element = document.getElementById(href.slice(1))
        if (element) {
            element.scrollIntoView({ behavior: "smooth" })
        }
        setIsOpen(false)
    }

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-background/80 backdrop-blur-md border-b border-border" : "bg-transparent"
                }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    {/* Logo */}
                    <motion.div whileHover={{ scale: 1.05 }} className="font-heading font-bold text-2xl text-primary flex items-center cursor-pointer">
                        <DiCssdeck size="2rem" /> <span className="ml-1">Nandu</span>
                    </motion.div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-8">
                        {navItems.map((item) => (
                            <motion.button
                                key={item.name}
                                onClick={() => scrollToSection(item.href)}
                                className={`relative px-2 py-2 text-base font-semibold transition-colors cursor-pointer ${activeSection === item.href.slice(1) ? "text-primary" : "text-muted-foreground hover:text-foreground"
                                    }`}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                {item.name}
                                {activeSection === item.href.slice(1) && (
                                    <motion.div
                                        layoutId="activeSection"
                                        className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary cursor-pointer"
                                        initial={false}
                                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                                    />
                                )}
                            </motion.button>
                        ))}
                    </div>
                    {/* Social Icons */}
                    <div className="flex items-center space-x-4">
                        {socialItems.map((item) => (
                            <motion.a
                                key={item.name}
                                href={item.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-muted-foreground hover:text-foreground"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                {item.icon}
                            </motion.a>
                        ))}
                    </div>

                    {/* Mobile menu button */}
                    <div className="md:hidden">
                        <Button variant="ghost" size="sm" onClick={() => setIsOpen(!isOpen)} className="text-foreground">
                            {isOpen ? <X size={20} /> : <Menu size={20} />}
                        </Button>
                    </div>
                </div>
            </div>

            {/* Mobile Navigation */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-background/95 backdrop-blur-md border-b border-border"
                    >
                        <div className="px-4 py-4 space-y-2">
                            {navItems.map((item) => (
                                <motion.button
                                    key={item.name}
                                    onClick={() => scrollToSection(item.href)}
                                    className={`block w-full text-left px-3 py-2 text-sm font-medium transition-colors ${activeSection === item.href.slice(1)
                                            ? "text-primary bg-primary/10"
                                            : "text-muted-foreground hover:text-foreground hover:bg-muted"
                                        }`}
                                    whileHover={{ x: 10 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    {item.name}
                                </motion.button>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    )
}
