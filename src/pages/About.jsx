import React from 'react';
import { Helmet } from 'react-helmet';
import PageWrapper from '@/components/PageWrapper';
import Typewriter from '@/components/Typewriter';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Heart, Cpu, GitBranch } from 'lucide-react';

const About = () => {
  const features = [
    {
      icon: Heart,
      title: "Emotional Resonance",
      description: "At its core, Mezzo Anima is about connection, preserving the psycho-emotional identity of loved ones.",
    },
    {
      icon: Cpu,
      title: "Affective AI",
      description: "Exploring the frontier of artificial intelligence that understands and responds to human emotion.",
    },
    {
      icon: GitBranch,
      title: "Open Collaboration",
      description: "An open-core initiative on GitHub, inviting the world to build technology that resonates with the soul.",
    },
  ];

  return (
    <>
      <Helmet>
        <title>About - MEZZO: Anima</title>
        <meta name="description" content="Learn about the vision and inspiration behind Mezzo Anima, a project bridging emotion and technology." />
      </Helmet>
      <PageWrapper>
        <div className="text-center mb-16">
          <Typewriter
            el="h1"
            className="font-orbitron text-3xl md:text-5xl font-bold text-glow-blue text-glow-blue mb-4"
            text="The Vision"
          />
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="max-w-3xl mx-auto text-light-text/80 text-lg"
          >
            Mezzo Anima is born from personal dreams and a deep longing for connection, inspired by life's most profound transitions.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 + 1 }}
              className="bg-card-bg p-8 rounded-lg border border-glow-blue/20 shadow-lg hover:shadow-glow-blue transition-shadow duration-300"
            >
              <feature.icon className="h-10 w-10 text-glow-blue mb-4" />
              <h3 className="font-orbitron text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-light-text/70">{feature.description}</p>
            </motion.div>
          ))}
        </div>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="text-center"
        >
          <p className="text-xl mb-6">Discover the heart of the project.</p>
          <Button asChild size="lg" variant="secondary">
            <Link to="/core">Explore the Core</Link>
          </Button>
        </motion.div>
      </PageWrapper>
    </>
  );
};

export default About;