import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import PageWrapper from '@/components/PageWrapper';
import Typewriter from '@/components/Typewriter';
import { Button } from '@/components/ui/button';
import { ArrowRight, Sparkles, Brain, Heart, Zap } from 'lucide-react';

const Home = () => {
  const features = [
    {
      icon: Brain,
      title: 'Consciousness Preservation',
      description: 'Advanced AI systems that capture and preserve the essence of human consciousness.',
      color: 'glow-blue',
    },
    {
      icon: Heart,
      title: 'Emotional Intelligence',
      description: 'Technology that understands and responds to human emotions with genuine empathy.',
      color: 'glow-pink',
    },
    {
      icon: Zap,
      title: 'Quantum Integration',
      description: 'Cutting-edge quantum computing for unprecedented processing capabilities.',
      color: 'glow-cyan',
    },
  ];

  return (
    <>
      <Helmet>
        <title>MEZZO: Anima - The Future of Consciousness Preservation</title>
        <meta name="description" content="Preserving human consciousness through advanced AI technology. MEZZO Anima bridges the gap between emotion and artificial intelligence." />
      </Helmet>
      
      {/* Hero Section */}
      <div className="relative min-h-screen flex items-center justify-center hero-gradient overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-glow-blue/10 rounded-full blur-[100px] animate-float" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-glow-purple/10 rounded-full blur-[100px] animate-float" style={{ animationDelay: '2s' }} />
        </div>

        <PageWrapper className="relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-surface-light border border-glow-blue/20 mb-8"
            >
              <Sparkles className="h-4 w-4 text-glow-blue" />
              <span className="text-sm font-display tracking-wider text-muted-text">
                NEXT-GEN CONSCIOUSNESS PRESERVATION
              </span>
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="font-display text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight"
            >
              <span className="text-white">Preserve the </span>
              <span className="gradient-text text-glow-blue">Essence</span>
              <br />
              <span className="text-white">of Human </span>
              <span className="gradient-text text-glow-purple">Consciousness</span>
            </motion.h1>

            {/* Typewriter Subtitle */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="mb-8"
            >
              <Typewriter
                el="p"
                className="text-xl md:text-2xl text-muted-text max-w-3xl mx-auto leading-relaxed"
                text="Where advanced AI meets the depth of human emotion. Building technology that resonates with the soul."
                delay={1000}
              />
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.2 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
            >
              <Button asChild size="lg" className="group">
                <Link to="/about" className="flex items-center gap-2 px-8 py-4 text-lg font-display tracking-wider">
                  <span>Begin the Journey</span>
                  <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button asChild variant="secondary" size="lg">
                <Link to="/core" className="px-8 py-4 text-lg font-display tracking-wider">
                  Explore the Core
                </Link>
              </Button>
            </motion.div>

            {/* Feature Cards */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.6 }}
              className="grid md:grid-cols-3 gap-6 mt-20"
            >
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.8 + index * 0.1 }}
                  className="glass-card-hover p-6 text-left"
                >
                  <div className={`w-12 h-12 rounded-xl bg-${feature.color}/10 flex items-center justify-center mb-4`}>
                    <feature.icon className={`h-6 w-6 text-${feature.color}`} />
                  </div>
                  <h3 className="font-display text-lg font-semibold text-light-text mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-muted-text text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </PageWrapper>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 2.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <div className="w-6 h-10 rounded-full border-2 border-glow-blue/30 flex justify-center pt-2">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
              className="w-1.5 h-1.5 rounded-full bg-glow-blue"
            />
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default Home;