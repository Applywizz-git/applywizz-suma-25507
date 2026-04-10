import { Suspense, useState, useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Float, Text, Box, Sphere } from '@react-three/drei';
import { motion, useInView } from 'framer-motion';
import { skills } from '../data/portfolio';

interface Skill3DProps {
  position: [number, number, number];
  skill: {
    name: string;
    level: number;
    category: string;
  };
  color: string;
  delay: number;
}

function Skill3D({ position, skill, color, delay }: Skill3DProps) {
  const [hovered, setHovered] = useState(false);

  return (
    <Float speed={1 + delay * 0.5} rotationIntensity={0.3} floatIntensity={0.2}>
      <group 
        position={position}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
      >
        <Box 
          args={hovered ? [0.6, 0.6, 0.6] : [0.5, 0.5, 0.5]}
          rotation={[Math.PI / 4, Math.PI / 4, 0]}
        >
          <meshStandardMaterial 
            color={color} 
            emissive={color} 
            emissiveIntensity={hovered ? 0.3 : 0.1}
            metalness={0.8}
            roughness={0.2}
          />
        </Box>
        
        <Text
          position={[0, -0.8, 0]}
          fontSize={0.12}
          color="white"
          anchorX="center"
          anchorY="middle"
          font="/fonts/inter-bold.woff"
        >
          {skill.name}
        </Text>
        
        <Text
          position={[0, -0.95, 0]}
          fontSize={0.08}
          color="#94a3b8"
          anchorX="center"
          anchorY="middle"
          font="/fonts/inter-regular.woff"
        >
          {skill.level}%
        </Text>
      </group>
    </Float>
  );
}

function SkillsScene() {
  const skillsArray = Object.entries(skills).flatMap(([category, categorySkills]) =>
    categorySkills.slice(0, 2).map(skill => ({ ...skill, category }))
  );

  const colors = ['#3b82f6', '#10b981', '#f59e0b', '#ef4444', '#8b5cf6', '#06b6d4', '#f97316', '#84cc16'];

  const positions: [number, number, number][] = [
    [-2, 1, 0], [2, 1, 0], [-1, -1, 1], [1, -1, 1],
    [-2, 0, -1], [2, 0, -1], [0, 1.5, -0.5], [0, -1.5, -0.5]
  ];

  return (
    <>
      <ambientLight intensity={0.6} />
      <pointLight position={[10, 10, 10]} intensity={0.8} />
      <pointLight position={[-10, -10, -10]} intensity={0.5} />
      
      {skillsArray.slice(0, 8).map((skill, index) => (
        <Skill3D
          key={`${skill.category}-${skill.name}`}
          position={positions[index]}
          skill={skill}
          color={colors[index]}
          delay={index * 0.2}
        />
      ))}
      
      <OrbitControls 
        enableZoom={false}
        enablePan={false}
        autoRotate
        autoRotateSpeed={0.5}
        maxPolarAngle={Math.PI / 1.5}
        minPolarAngle={Math.PI / 3}
      />
    </>
  );
}

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeCategory, setActiveCategory] = useState<string>('Data Analysis & BI');

  const categoryColors = {
    'Data Analysis & BI': 'text-blue-500',
    'Business & Process Analysis': 'text-green-500',
    'Cloud & Data Platforms': 'text-purple-500',
    'Governance & Quality': 'text-orange-500',
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section id="skills" className="py-20 bg-gradient-to-b from-muted/30 to-background">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="max-w-7xl mx-auto"
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold gradient-text mb-6">
              Skills & Expertise
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Technical proficiency in data engineering, business intelligence, and cloud-based analytical frameworks
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-1 gap-12 items-start">
            
            {/* Skills Categories */}
            <motion.div variants={itemVariants} className="order-1 lg:order-2">
              {/* Category Tabs */}
              <div className="flex items-center justify-center gap-8 mb-8">
                {Object.keys(skills).map((category) => (
                  <motion.button
                    key={category}
                    onClick={() => setActiveCategory(category)}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                      activeCategory === category
                        ? 'bg-primary text-white shadow-md'
                        : 'bg-muted/50 text-muted-foreground hover:bg-muted'
                    }`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {category}
                  </motion.button>
                ))}
              </div>

              {/* Skills List */}
              <motion.div 
                className="space-y-4"
                key={activeCategory}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3 }}
              >
                {skills[activeCategory as keyof typeof skills]?.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    className="glass-card group"
                    initial={{ opacity: 0, y: 10 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.02, y: -2 }}
                  >
                    <div className="flex items-center justify-between mb-3">
                      <div>
                        <h4 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                          {skill.name}
                        </h4>
                        <p className="text-xs text-muted-foreground">
                          {skill.category}
                        </p>
                      </div>
                      <div className="text-right">
                        <span className="text-lg font-bold gradient-text">
                          {skill.level}%
                        </span>
                      </div>
                    </div>
                    
                    {/* Progress Ring */}
                    <div className="relative w-full bg-muted rounded-full h-2 overflow-hidden">
                      <motion.div
                        className="h-full bg-gradient-primary rounded-full"
                        initial={{ width: 0 }}
                        animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
                        transition={{ 
                          duration: 1.5, 
                          delay: 0.5 + index * 0.1,
                          ease: "easeOut"
                        }}
                      />
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </div>

          {/* Skills Summary */}
          <motion.div 
            variants={itemVariants}
            className="mt-16 text-center"
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {Object.entries(skills).map(([category, categorySkills], index) => (
                <motion.div
                  key={category}
                  className="glass p-6 rounded-xl"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 1 + index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="text-2xl font-bold gradient-text mb-2">
                    {categorySkills.length}
                  </div>
                  <p className="text-sm text-muted-foreground">
                    {category.split(' & ')[0]} Skills
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}