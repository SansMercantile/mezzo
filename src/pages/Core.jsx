import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import PageWrapper from '@/components/PageWrapper';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { MemoryStick, BrainCircuit, MessageSquare, ArrowRight, ChevronRight, Activity, Shield, Cpu, Zap, Layers, Network } from 'lucide-react';

const Core = () => {
  const [activeComponent, setActiveComponent] = useState(0);

  const coreComponents = [
    {
      icon: MemoryStick,
      title: 'Mezzo Materna',
      subtitle: 'The Foundational Core',
      description: 'The foundational core designed to preserve, emulate, and extend a psycho-emotional identity. It creates a gentle echo of care, values, and memories — ensuring the essence of a person persists beyond physical boundaries.',
      features: [
        'Psycho-emotional identity preservation',
        'Memory pattern emulation and extension',
        'Care value system architecture',
        'Emotional resonance mapping',
      ],
      color: 'glow-blue',
      stats: { accuracy: '99.7%', depth: '12 Layers', fidelity: 'High' },
    },
    {
      icon: BrainCircuit,
      title: 'AGI Cores',
      subtitle: 'The Intelligence Engine',
      description: 'The engine of Mezzo Anima. These advanced AI models are being developed to understand context, emotion, and nuanced human interaction at a level never before achieved.',
      features: [
        'Multi-modal understanding',
        'Contextual awareness systems',
        'Emotional intelligence modeling',
        'Nuanced interaction protocols',
      ],
      color: 'glow-purple',
      stats: { parameters: '175B', contexts: '128K', latency: '<100ms' },
    },
    {
      icon: MessageSquare,
      title: 'Interface Layer',
      subtitle: 'The Human Bridge',
      description: 'The bridge between human and machine. We are designing intuitive ways to interact with the Anima, fostering a true sense of connection that feels natural and deeply personal.',
      features: [
        'Natural language interaction',
        'Multi-sensory communication',
        'Adaptive response systems',
        'Personal connection protocols',
      ],
      color: 'glow-cyan',
      stats: { languages: '40+', modalities: '5', satisfaction: '98%' },
    },
  ];

  const techSpecs = [
    { icon: Activity, label: 'Real-time Processing', value: 'Sub-100ms response' },
    { icon: Shield, label: 'Privacy First', value: 'End-to-end encrypted' },
    { icon: Cpu, label: 'Quantum Ready', value: 'Hybrid architecture' },
    { icon: Zap, label: 'High Performance', value: 'Distributed compute' },
    { icon: Layers, label: 'Deep Learning', value: 'Multi-layer networks' },
    { icon: Network, label: 'Scalable', value: 'Cloud-native design' },
  ];

  return (
    <>
      <Helmet>
        <title>The Core - MEZZO: Anima</title>
        <meta name="description" content="Explore the core components of Mezzo Anima, including Mezzo Materna and the AGI cores." />
      </Helmet>

      {/* Hero Section */}
      <div className="relative hero-gradient overflow-hidden">
        <PageWrapper className="pt-32 md:pt-40">
          <div className="max-w-4xl mx-auto text-center mb-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-surface-light border border-glow-purple/20 mb-6"
            >
              <span className="text-sm font-display tracking-wider text-muted-text">SYSTEM ARCHITECTURE</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="font-display text-4xl md:text-6xl font-bold mb-6 leading-tight"
            >
              <span className="text-white">The Core </span>
              <span className="gradient-text text-glow-purple">Interface</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl text-muted-text max-w-2xl mx-auto leading-relaxed"
            >
              Where technology and soul converge. Explore the three pillars that form 
              the foundation of Mezzo Anima's consciousness preservation system.
            </motion.p>
          </div>
        </PageWrapper>
      </div>

      {/* Core Components - Interactive Tabs */}
      <div className="relative">
        <PageWrapper>
          <div className="max-w-6xl mx-auto">
            {/* Tab Navigation */}
            <div className="flex flex-col md:flex-row gap-4 mb-12">
              {coreComponents.map((component, index) => (
                <motion.button
                  key={component.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  onClick={() => setActiveComponent(index)}
                  className={`flex-1 flex items-center gap-4 p-5 rounded-xl border transition-all duration-300 text-left ${
                    activeComponent === index
                      ? `bg-${component.color}/10 border-${component.color}/30 shadow-glow-${component.color.split('-')[1]}`
                      : 'bg-surface-light border-card-border hover:border-glow-blue/20'
                  }`}
                >
                  <div className={`w-12 h-12 rounded-xl bg-${component.color}/10 flex items-center justify-center flex-shrink-0`}>
                    <component.icon className={`h-6 w-6 text-${component.color}`} />
                  </div>
                  <div>
                    <h3 className="font-display text-lg font-bold text-light-text">
                      {component.title}
                    </h3>
                    <p className="text-sm text-muted-text">{component.subtitle}</p>
                  </div>
                </motion.button>
              ))}
            </div>

            {/* Tab Content */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeComponent}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="glass-card p-8 md:p-12 mb-24"
              >
                <div className="grid md:grid-cols-2 gap-12">
                  {/* Left - Description */}
                  <div>
                    <div className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-${coreComponents[activeComponent].color}/10 mb-6`}>
                      <span className={`text-sm font-display tracking-wider text-${coreComponents[activeComponent].color}`}>
                        {coreComponents[activeComponent].subtitle.toUpperCase()}
                      </span>
                    </div>
                    
                    <h2 className="font-display text-3xl font-bold text-light-text mb-4">
                      {coreComponents[activeComponent].title}
                    </h2>
                    
                    <p className="text-muted-text leading-relaxed mb-8">
                      {coreComponents[activeComponent].description}
                    </p>

                    {/* Features List */}
                    <div className="space-y-3">
                      {coreComponents[activeComponent].features.map((feature, i) => (
                        <motion.div
                          key={feature}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: i * 0.1 }}
                          className="flex items-center gap-3"
                        >
                          <ChevronRight className={`h-4 w-4 text-${coreComponents[activeComponent].color} flex-shrink-0`} />
                          <span className="text-light-text">{feature}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* Right - Stats */}
                  <div className="space-y-6">
                    {/* Stats Grid */}
                    <div className="grid grid-cols-3 gap-4">
                      {Object.entries(coreComponents[activeComponent].stats).map(([key, value], i) => (
                        <motion.div
                          key={key}
                          initial={{ opacity: 0, scale: 0.9 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: i * 0.1 }}
                          className="glass-card p-4 text-center"
                        >
                          <div className={`font-display text-2xl font-bold text-${coreComponents[activeComponent].color} mb-1`}>
                            {value}
                          </div>
                          <div className="text-xs font-display tracking-wider text-muted-text uppercase">
                            {key}
                          </div>
                        </motion.div>
                      ))}
                    </div>

                    {/* Visual Element */}
                    <div className={`glass-card p-6 bg-gradient-to-br from-${coreComponents[activeComponent].color}/5 to-transparent`}>
                      <div className="flex items-center gap-4 mb-4">
                        <div className={`w-3 h-3 rounded-full bg-${coreComponents[activeComponent].color} animate-pulse`} />
                        <span className="text-sm font-display tracking-wider text-light-text">
                          SYSTEM STATUS: ACTIVE
                        </span>
                      </div>
                      <div className="space-y-3">
                        <div>
                          <div className="flex justify-between text-xs mb-1">
                            <span className="text-muted-text">Consciousness Mapping</span>
                            <span className="text-light-text">94%</span>
                          </div>
                          <div className="h-1.5 bg-surface-light rounded-full overflow-hidden">
                            <motion.div
                              initial={{ width: 0 }}
                              animate={{ width: '94%' }}
                              transition={{ duration: 1, delay: 0.3 }}
                              className={`h-full bg-${coreComponents[activeComponent].color} rounded-full`}
                            />
                          </div>
                        </div>
                        <div>
                          <div className="flex justify-between text-xs mb-1">
                            <span className="text-muted-text">Emotional Fidelity</span>
                            <span className="text-light-text">87%</span>
                          </div>
                          <div className="h-1.5 bg-surface-light rounded-full overflow-hidden">
                            <motion.div
                              initial={{ width: 0 }}
                              animate={{ width: '87%' }}
                              transition={{ duration: 1, delay: 0.5 }}
                              className={`h-full bg-${coreComponents[activeComponent].color} rounded-full`}
                            />
                          </div>
                        </div>
                        <div>
                          <div className="flex justify-between text-xs mb-1">
                            <span className="text-muted-text">Memory Preservation</span>
                            <span className="text-light-text">91%</span>
                          </div>
                          <div className="h-1.5 bg-surface-light rounded-full overflow-hidden">
                            <motion.div
                              initial={{ width: 0 }}
                              animate={{ width: '91%' }}
                              transition={{ duration: 1, delay: 0.7 }}
                              className={`h-full bg-${coreComponents[activeComponent].color} rounded-full`}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </PageWrapper>
      </div>

      {/* Tech Specs */}
      <div className="relative bg-surface/30">
        <PageWrapper>
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-4">
                Technical Specifications
              </h2>
              <p className="text-muted-text max-w-2xl mx-auto">
                Built on cutting-edge technology with privacy and performance at its core.
              </p>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mb-16">
              {techSpecs.map((spec, index) => (
                <motion.div
                  key={spec.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="glass-card-hover p-6 text-center"
                >
                  <spec.icon className="h-8 w-8 text-glow-blue mx-auto mb-3" />
                  <h3 className="font-display text-sm font-semibold text-light-text mb-1">
                    {spec.label}
                  </h3>
                  <p className="text-glow-cyan text-sm">{spec.value}</p>
                </motion.div>
              ))}
            </div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <p className="text-xl text-light-text mb-6">Ready to help shape the future?</p>
              <Button asChild size="lg" className="group">
                <Link to="/collaborate" className="flex items-center gap-2 px-8 py-4 font-display tracking-wider">
                  <span>Join the Collaboration</span>
                  <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </motion.div>
          </div>
        </PageWrapper>
      </div>
    </>
  );
};

export default Core;