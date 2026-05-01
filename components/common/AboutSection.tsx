/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { motion } from "framer-motion";
import { Code2, Brain, Rocket } from "lucide-react";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.3,
    },
  },
};

const cardVariants: any = {
  hidden: { opacity: 0, y: 80, scale: 0.92 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 90,
      damping: 18,
      duration: 0.6,
    },
  },
};

export default function AboutSection() {
  return (
    <div className="min-h-screen bg-dark-card rounded-4xl mt-10 relative overflow-hidden py-24">
      <div className="max-w-7xl mx-auto px-6 ">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <p className="text-indigo-400 uppercase tracking-[4px] text-sm mb-4">
            ABOUT
          </p>

          <h1 className="text-6xl md:text-7xl font-semibold tracking-tighter leading-none text-white">
            Full-Stack Systems and
            <br />
            <span className="text-gradient">AI-Driven Solutions.</span>
          </h1>

          <p className="mt-8 max-w-3xl text-lg text-zinc-300 leading-relaxed">
            Computer Science student with AI specialization focused on building
            full-stack applications and intelligent systems. I design scalable
            backend services, cloud-deployed platforms, and data-driven
            solutions. My work combines software engineering discipline with
            machine learning applications—from REST APIs and database
            architecture to predictive models and IoT systems. Currently
            contributing to production systems at Bitzify.
          </p>
        </motion.div>

        {/* Main Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-6"
        >
          {/* Left Stats Column */}
          <div className="lg:col-span-4 space-y-6">
            <motion.div
              variants={cardVariants}
              className="glass p-8 rounded-3xl card-hover"
            >
              <div className="text-7xl font-bold text-white mb-2">7</div>
              <p className="text-muted">
                featured builds across healthcare, operations, media, and IoT
              </p>
            </motion.div>

            <motion.div
              variants={cardVariants}
              className="glass p-8 rounded-3xl card-hover"
            >
              <div className="text-7xl font-bold text-white mb-2">3</div>
              <p className="text-muted">main lanes: web, backend, mobile</p>
            </motion.div>

            <motion.div
              variants={cardVariants}
              className="glass p-8 rounded-3xl card-hover flex items-center gap-6"
            >
              <div className="text-7xl font-bold text-white">2025</div>
              <p className="text-muted">
                entered production-facing engineering work
              </p>
            </motion.div>
          </div>

          {/* Center Feature Cards */}
          <div className="lg:col-span-5 space-y-6">
            {/* Scalable Backend */}
            <motion.div
              variants={cardVariants}
              whileHover={{ y: -8, scale: 1.02 }}
              className="glass p-8 rounded-3xl card-hover group"
            >
              <div className="flex items-center gap-5 mb-6">
                <div className="w-14 h-14 bg-indigo-500/10 rounded-2xl flex items-center justify-center">
                  <Code2 className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-2xl font-semibold text-white">
                  Scalable Backend Systems
                </h3>
              </div>
              <p className="text-zinc-300">
                Building robust REST APIs with Spring Boot and ASP.NET,
                designing databases that grow with the business, and
                implementing cloud-native architectures.
              </p>
            </motion.div>

            {/* AI & Machine Learning */}
            <motion.div
              variants={cardVariants}
              whileHover={{ y: -8, scale: 1.02 }}
              className="glass p-8 rounded-3xl card-hover group"
            >
              <div className="flex items-center gap-5 mb-6">
                <div className="w-14 h-14 bg-purple-500/10 rounded-2xl flex items-center justify-center">
                  <Brain className="w-8 h-8 text-accent-2" />
                </div>
                <h3 className="text-2xl font-semibold text-white">
                  AI & Machine Learning
                </h3>
              </div>
              <p className="text-zinc-300">
                Integrating predictive models, data analysis, and intelligent
                decision making into full-stack applications. Experience with
                Python, scikit-learn, and real-world ML deployment.
              </p>
            </motion.div>

            {/* Production Ready Code */}
            <motion.div
              variants={cardVariants}
              whileHover={{ y: -8, scale: 1.02 }}
              className="glass p-8 rounded-3xl card-hover group"
            >
              <div className="flex items-center gap-5 mb-6">
                <div className="w-14 h-14 bg-cyan-500/10 rounded-2xl flex items-center justify-center">
                  <Rocket className="w-8 h-8 text-cyan-400" />
                </div>
                <h3 className="text-2xl font-semibold text-white">
                  Production-Ready Code
                </h3>
              </div>
              <p className="text-zinc-300">
                Writing maintainable systems with proper testing, documentation,
                and CI/CD pipelines. Focus on engineering discipline and
                long-term maintainability.
              </p>
            </motion.div>
          </div>

          {/* Right Sidebar */}
          <div className="lg:col-span-3 space-y-6">
            <motion.div
              variants={cardVariants}
              className="glass p-8 rounded-3xl h-fit card-hover"
            >
              <h4 className="uppercase text-xs tracking-widest text-muted mb-6">
                CAPABILITIES
              </h4>
              <div className="space-y-5 text-sm text-zinc-300">
                <p>
                  Building scalable REST APIs and backend services with Spring
                  Boot, ASP.NET, and Node.js.
                </p>
                <p>
                  Designing database systems and data pipelines for production
                  applications.
                </p>
                <p>
                  Developing machine learning models and integrating AI into
                  full-stack systems.
                </p>
                <p>
                  Deploying cloud-based applications on AWS and Azure with
                  containerization.
                </p>
              </div>
              <h4 className="uppercase text-xs tracking-widest text-muted mb-6">
                CAPABILITIES
              </h4>
              <div className="space-y-5 text-sm text-zinc-300">
                <p>
                  Building scalable REST APIs and backend services with Spring
                  Boot, ASP.NET, and Node.js.
                </p>
                <p>
                  Designing database systems and data pipelines for production
                  applications.
                </p>
                <p>
                  Developing machine learning models and integrating AI into
                  full-stack systems.
                </p>
                <p>
                  Deploying cloud-based applications on AWS and Azure with
                  containerization.
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
