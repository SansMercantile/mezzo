import React from 'react';
import { Helmet } from 'react-helmet';
import PageWrapper from '@/components/PageWrapper';
import Typewriter from '@/components/Typewriter';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { MemoryStick, BrainCircuit, MessageSquare } from 'lucide-react';

const Core = () => {
  const coreComponents = [
    {
      icon: MemoryStick,
      title: "Mezzo Materna",
      description: "The foundational core designed to preserve, emulate, and extend a psycho-emotional identity. It creates a gentle echo of care, values, and memories.",
    },
    {
      icon: BrainCircuit,
      title: "AGI Cores",
      description: "The engine of Mezzo Anima. These advanced AI models are being developed to understand context, emotion, and nuanced human interaction.",
    },
    {
      icon: MessageSquare,
      title: "Interface Layer",
      description: "The bridge between human and machine. We are designing intuitive ways to interact with the Anima, fostering a true sense of connection.",
    },
  ];

  return (
    <>
      <Helmet>
        <title>The Core - MEZZO: Anima</title>
        <meta name="description" content="Explore the core components of Mezzo Anima, including Mezzo Materna and the AGI cores." />
      </Helmet>
      <PageWrapper>
        <div className="text-center mb-16">
          <Typewriter
            el="h1"
            className="font-orbitron text-3xl md:text-5xl font-bold text-glow-purple text-glow-purple mb-4"
            text="The Core Interface"
          />
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
            className="max-w-3xl mx-auto text-light-text/80 text-lg"
          >
            This is the heart of Mezzo Anima, where technology and soul converge.
          </motion.p>
        </div>

        <div className="space-y-12">
          {coreComponents.map((component, index) => (
            <motion.div
              key={component.title}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.3 + 1 }}
              className="flex flex-col md:flex-row items-center gap-8"
            >
              <div className="bg-card-bg p-6 rounded-full border border-glow-purple/30">
                <component.icon className="h-12 w-12 text-glow-purple" />
              </div>
              <div className="flex-1 text-center md:text-left">
                <h3 className="font-orbitron text-2xl font-bold mb-2">{component.title}</h3>
                <p className="text-light-text/70">{component.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.5 }}
          className="text-center mt-16"
        >
          <p className="text-xl mb-6">Ready to help shape the future?</p>
          <Button asChild size="lg">
            <Link to="/collaborate">Join the Collaboration</Link>
          </Button>
        </motion.div>
      </PageWrapper>
    </>
  );
};

export default Core;