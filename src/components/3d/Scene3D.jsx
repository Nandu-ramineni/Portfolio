import { useRef } from "react"
import { useFrame } from "@react-three/fiber"
import { Sphere, Box, Torus, Cylinder } from "@react-three/drei"
import  * as THREE from "three"

export default function Scene3D() {
    const sphereRef = useRef(null)
    const boxRef = useRef(null)
    const torusRef = useRef(null)
    const cylinderRef = useRef(null)
    const codeBoxRef = useRef(null)
    const reactLogoRef = useRef(null)

    useFrame((state) => {
        const time = state.clock.getElapsedTime()

        if (sphereRef.current) {
            sphereRef.current.rotation.x = time * 0.2
            sphereRef.current.rotation.y = time * 0.3
            sphereRef.current.position.y = Math.sin(time) * 0.5
        }

        if (boxRef.current) {
            boxRef.current.rotation.x = time * 0.1
            boxRef.current.rotation.z = time * 0.15
            boxRef.current.position.x = Math.cos(time * 0.5) * 2
        }

        if (torusRef.current) {
            torusRef.current.rotation.y = time * 0.4
            torusRef.current.position.z = Math.sin(time * 0.3) * 1
        }

        if (cylinderRef.current) {
            cylinderRef.current.rotation.x = time * 0.3
            cylinderRef.current.rotation.y = time * 0.2
            cylinderRef.current.position.x = Math.sin(time * 0.4) * 1.5
            cylinderRef.current.position.y = Math.cos(time * 0.6) * 0.8
        }

        if (codeBoxRef.current) {
            codeBoxRef.current.rotation.y = time * 0.25
            codeBoxRef.current.rotation.z = time * 0.1
            codeBoxRef.current.position.z = Math.cos(time * 0.4) * 2
        }

        if (reactLogoRef.current) {
            reactLogoRef.current.rotation.y = time * 0.5
            reactLogoRef.current.position.y = Math.sin(time * 0.8) * 0.3
        }
    })

    return (
        <>
            {/* Ambient lighting */}
            <ambientLight intensity={0.2} />
            <pointLight position={[10, 10, 10]} intensity={0.5} color="#0891b2" />
            <pointLight position={[-10, -10, -10]} intensity={0.3} color="#a16207" />
            <spotLight position={[0, 10, 0]} intensity={0.4} color="#0891b2" angle={0.3} />

            {/* Floating geometric shapes */}
            <Sphere ref={sphereRef} args={[0.5, 32, 32]} position={[-2, 0, -2]}>
                <meshStandardMaterial color="#0891b2" transparent opacity={0.3} wireframe />
            </Sphere>

            <Box ref={boxRef} args={[0.8, 0.8, 0.8]} position={[2, 1, -1]}>
                <meshStandardMaterial color="#a16207" transparent opacity={0.2} wireframe />
            </Box>

            <Torus ref={torusRef} args={[0.6, 0.2, 16, 32]} position={[0, -1, -3]}>
                <meshStandardMaterial color="#0891b2" transparent opacity={0.25} wireframe />
            </Torus>

            {/* Database cylinder representing backend */}
            <Cylinder ref={cylinderRef} args={[0.3, 0.3, 1.2, 8]} position={[-3, 2, -1]}>
                <meshStandardMaterial color="#10b981" transparent opacity={0.3} wireframe />
            </Cylinder>

            {/* Code block representation */}
            <Box ref={codeBoxRef} args={[1.2, 0.8, 0.2]} position={[3, -1, -2]}>
                <meshStandardMaterial color="#8b5cf6" transparent opacity={0.25} wireframe />
            </Box>

            {/* React logo-inspired torus */}
            <Torus ref={reactLogoRef} args={[0.8, 0.1, 8, 16]} position={[-1, 1, -4]} rotation={[Math.PI / 4, 0, 0]}>
                <meshStandardMaterial color="#61dafb" transparent opacity={0.4} wireframe />
            </Torus>

            {/* Additional smaller tech elements */}
            <Box args={[0.2, 0.2, 0.2]} position={[1, 2, -3]}>
                <meshStandardMaterial color="#f59e0b" transparent opacity={0.6} />
            </Box>

            <Sphere args={[0.15, 16, 16]} position={[-2, -2, -1]}>
                <meshStandardMaterial color="#ef4444" transparent opacity={0.5} />
            </Sphere>

            {/* Enhanced particle system with more tech-like distribution */}
            <points>
                <bufferGeometry>
                    <bufferAttribute
                        attach="attributes-position"
                        count={150}
                        array={new Float32Array(Array.from({ length: 450 }, () => (Math.random() - 0.5) * 12))}
                        itemSize={3}
                    />
                </bufferGeometry>
                <pointsMaterial size={0.03} color="#0891b2" transparent opacity={0.7} />
            </points>

            {/* Additional particle layer for depth */}
            <points>
                <bufferGeometry>
                    <bufferAttribute
                        attach="attributes-position"
                        count={80}
                        array={new Float32Array(Array.from({ length: 240 }, () => (Math.random() - 0.5) * 8))}
                        itemSize={3}
                    />
                </bufferGeometry>
                <pointsMaterial size={0.02} color="#a16207" transparent opacity={0.5} />
            </points>
        </>
    )
}
