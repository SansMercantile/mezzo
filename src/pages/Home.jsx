import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import PageWrapper from '@/components/PageWrapper';
import Typewriter from '@/components/Typewriter';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const Home = () => {
  return (
    <>
      <Helmet>
        <title>MEZZO: Anima - The Heart of Innovation</title>
        <meta name="description" content="A personal journey into the heart of innovation, bridging the emotional and technological with affective AI." />
      </Helmet>
      <PageWrapper>
        <div className="text-center flex flex-col items-center justify-center min-h-[60vh]">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h1 className="font-orbitron text-4xl md:text-6xl font-bold text-glow-blue text-glow-blue mb-4">
              MEZZO: ANIMA
            </h1>
            <Typewriter
              el="h2"
              className="font-orbitron text-xl md:text-3xl text-light-text mb-8"
              text="A Journey Into the Heart of Innovation."
              delay={500}
            />
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 2.5 }}
              className="max-w-3xl mx-auto text-light-text/80 text-lg md:text-xl mb-12"
            >
              From a childhood shaped by resilience, a vision was born to bridge the emotional and the technological. This is Mezzo Anima.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 3 }}
            >
              <Button asChild size="lg">
                <Link to="/about" className="flex items-center space-x-2">
                  <span>Begin the Journey</span>
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </PageWrapper>
    </>
  );
};

export default Home;