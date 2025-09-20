import React from 'react';
import { Helmet } from 'react-helmet';
import PageWrapper from '@/components/PageWrapper';
import Typewriter from '@/components/Typewriter';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Github, Code, Users } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';

const Collaborate = () => {
  const { toast } = useToast();

  const handleFeatureClick = () => {
    toast({
      title: "🚧 Feature In Progress",
      description: "This feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀",
    });
  };

  return (
    <>
      <Helmet>
        <title>Collaborate - MEZZO: Anima</title>
        <meta name="description" content="Join the open-core initiative on GitHub and help build technology that resonates with the soul." />
      </Helmet>
      <PageWrapper>
        <div className="text-center mb-16">
          <Typewriter
            el="h1"
            className="font-orbitron text-3xl md:text-5xl font-bold text-glow-blue text-glow-blue mb-4"
            text="Let's Build Together"
          />
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
            className="max-w-3xl mx-auto text-light-text/80 text-lg"
          >
            Mezzo Anima is an open invitation to innovators, dreamers, and developers. Your contribution can help shape the future of affective AI.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="bg-card-bg p-8 md:p-12 rounded-lg border border-glow-blue/20 shadow-lg text-center"
        >
          <Github className="h-16 w-16 text-glow-blue mx-auto mb-6" />
          <h2 className="font-orbitron text-3xl font-bold mb-4">Open-Core on GitHub</h2>
          <p className="text-light-text/70 mb-8 max-w-2xl mx-auto">
            The entire project is available for you to explore, fork, and contribute to. Dive into the code, propose new features, or help us solve complex challenges.
          </p>
          <Button asChild size="lg">
            <a href="https://github.com/SansMercantile/mezzo-anima" target="_blank" rel="noopener noreferrer">
              Explore on GitHub
            </a>
          </Button>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 mt-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.5 }}
            className="bg-card-bg p-8 rounded-lg border border-glow-purple/20"
          >
            <Code className="h-10 w-10 text-glow-purple mb-4" />
            <h3 className="font-orbitron text-2xl font-bold mb-2">For Developers</h3>
            <p className="text-light-text/70 mb-4">
              Check out our contribution guidelines, pick up an issue, or submit a pull request.
            </p>
            <Button variant="secondary" onClick={handleFeatureClick}>Contribution Guide</Button>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.7 }}
            className="bg-card-bg p-8 rounded-lg border border-glow-purple/20"
          >
            <Users className="h-10 w-10 text-glow-purple mb-4" />
            <h3 className="font-orbitron text-2xl font-bold mb-2">For Community</h3>
            <p className="text-light-text/70 mb-4">
              Join the discussion, share your ideas, and help us build a community around ethical and empathetic AI.
            </p>
            <Button variant="secondary" onClick={handleFeatureClick}>Join Discussion</Button>
          </motion.div>
        </div>
      </PageWrapper>
    </>
  );
};

export default Collaborate;