import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { personalInfo, stats } from '../data/portfolio';
import CountUp from 'react-countup';

function AnimatedCounter({ end, duration = 2, suffix = "" }: { end: number; duration?: number; suffix?: string }) {
  return (
    <CountUp
      end={end}
      duration={duration}
      separator=","
      suffix={suffix}
      preserveValue
    />
  );
}

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  const skills = [
    { name: "Data Analysis & Querying", level: 95 },
    { name: "Business Intelligence", level: 92 },
    { name: "Process Optimization", level: 90 },
    { name: "Cloud Analytics", level: 88 },
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="max-w-6xl mx-auto"
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold gradient-text mb-6">
              About Me
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Bridging the gap between complex data and strategic business decisions
            </p>
          </motion.div>

          {/* Stats Section */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                className="glass-card text-center group hover:scale-105 transition-transform duration-300"
                variants={itemVariants}
                whileHover={{ y: -5 }}
              >
                <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">
                  {isInView && (
                    <AnimatedCounter
                      end={parseInt(stat.value)}
                      suffix={stat.suffix}
                      duration={2 + index * 0.2}
                    />
                  )}
                </div>
                <p className="text-sm text-muted-foreground font-medium">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </motion.div>

          {/* Main Content Grid */}
          <div className="max-w-4xl mx-auto">
            {/* About Text */}
            <motion.div variants={itemVariants} className="space-y-12">
              <div className="grid md:grid-cols-2 gap-12 items-start">
                <div className="space-y-6">
                  <h3 className="text-2xl font-display font-semibold mb-4">
                    Business Analyst & Data Specialist
                  </h3>

                  <div className="prose prose-lg max-w-none text-muted-foreground space-y-4 text-justify">
                    <p className="leading-relaxed">
                      With over 4 years of experience, I specialize in transforming data into actionable insights 
                      that drive business growth and operational efficiency. My expertise lies in the banking 
                      and healthcare domains, where I've successfully optimized complex processes and 
                      delivered scalable analytical solutions.
                    </p>

                    <p className="leading-relaxed">
                      I am proficient in a robust stack including SQL, Python, Power BI, and Cloud platforms 
                      like AWS and Azure. My approach combines technical rigor with strong stakeholder 
                      collaboration, ensuring that every data solution aligns perfectly with strategic objectives 
                      and user needs.
                    </p>

                    <p className="leading-relaxed">
                      Holding a Master of Science in Management Information Systems, I bring a structured 
                      analytical mindset to every project, whether it's building enterprise-scale dashboards 
                      or establishing robust data governance frameworks.
                    </p>
                  </div>
                </div>

                {/* Skills Progress Bars */}
                <div className="glass-card space-y-6">
                  <h4 className="text-xl font-semibold mb-6 flex items-center gap-2">
                    <div className="w-2 h-8 bg-primary rounded-full" />
                    Core Expertise
                  </h4>
                  <div className="space-y-6">
                    {skills.map((skill, index) => (
                      <motion.div
                        key={skill.name}
                        className="space-y-3"
                        initial={{ opacity: 0, x: -20 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ delay: 0.5 + index * 0.1 }}
                      >
                        <div className="flex justify-between text-sm font-medium">
                          <span>{skill.name}</span>
                          <span className="text-primary">{skill.level}%</span>
                        </div>
                        <div className="w-full bg-muted rounded-full h-2.5 overflow-hidden">
                          <motion.div
                            className="h-full bg-gradient-primary rounded-full shadow-[0_0_15px_rgba(59,130,246,0.5)]"
                            initial={{ width: 0 }}
                            animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
                            transition={{ duration: 1.5, ease: "easeOut", delay: 0.5 + index * 0.1 }}
                          />
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}