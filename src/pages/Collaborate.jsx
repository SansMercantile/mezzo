import React from 'react';
import { Helmet } from 'react-helmet';
import PageWrapper from '@/components/PageWrapper';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Github, Code, Users, ArrowRight, BookOpen, Bug, Lightbulb, GitPullRequest, MessageCircle, Heart, Star, GitFork } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';

const Collaborate = () => {
  const { toast } = useToast();

  const handleFeatureClick = (feature) => {
    toast({
      title: "🚧 Feature In Progress",
      description: `${feature} isn't implemented yet — but don't worry! You can request it in your next prompt! 🚀`,
    });
  };

  const waysToContribute = [
    {
      icon: Bug,
      title: 'Report Issues',
      description: 'Help us identify and fix bugs. Every report makes Mezzo Anima stronger.',
      action: 'View Issues',
    },
    {
      icon: GitPullRequest,
      title: 'Submit Pull Requests',
      description: 'Contribute code, improve features, and help shape the architecture.',
      action: 'Start Contributing',
    },
    {
      icon: BookOpen,
      title: 'Improve Documentation',
      description: 'Great docs empower everyone. Help us make Mezzo Anima accessible to all.',
      action: 'Read the Docs',
    },
    {
      icon: Lightbulb,
      title: 'Propose Features',
      description: 'Share your vision. The best ideas come from the community.',
      action: 'Share Ideas',
    },
  ];

  const communityStats = [
    { icon: Star, label: 'Stars', value: 'Growing' },
    { icon: GitFork, label: 'Forks', value: 'Open' },
    { icon: Users, label: 'Contributors', value: 'Global' },
    { icon: MessageCircle, label: 'Discussions', value: 'Active' },
  ];

  return (
    <>
      <Helmet>
        <title>Collaborate - MEZZO: Anima</title>
        <meta name="description" content="Join the open-core initiative on GitHub and help build technology that resonates with the soul." />
      </Helmet>

      {/* Hero Section */}
      <div className="relative hero-gradient overflow-hidden">
        <PageWrapper className="pt-32 md:pt-40">
          <div className="max-w-4xl mx-auto text-center mb-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-surface-light border border-glow-cyan/20 mb-6"
            >
              <span className="text-sm font-display tracking-wider text-muted-text">OPEN SOURCE</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="font-display text-4xl md:text-6xl font-bold mb-6 leading-tight"
            >
              <span className="text-white">Let's Build </span>
              <span className="gradient-text text-glow-cyan">Together</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl text-muted-text max-w-2xl mx-auto leading-relaxed"
            >
              Mezzo Anima is an open invitation to innovators, dreamers, and developers. 
              Your contribution can help shape the future of affective AI.
            </motion.p>
          </div>
        </PageWrapper>
      </div>

      {/* GitHub Card */}
      <div className="relative">
        <PageWrapper>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto mb-24"
          >
            <div className="glass-card p-8 md:p-12 relative overflow-hidden">
              {/* Background decoration */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-glow-blue/5 rounded-full blur-[80px]" />
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-glow-purple/5 rounded-full blur-[80px]" />
              
              <div className="relative z-10 flex flex-col items-center text-center">
                <div className="w-20 h-20 rounded-2xl bg-surface-light border border-glow-blue/20 flex items-center justify-center mb-6">
                  <Github className="h-10 w-10 text-light-text" />
                </div>
                <h2 className="font-display text-3xl md:text-4xl font-bold text-light-text mb-4">
                  Open-Core on GitHub
                </h2>
                <p className="text-muted-text max-w-xl mb-8 leading-relaxed">
                  The entire project is available for you to explore, fork, and contribute to. 
                  Dive into the code, propose new features, or help us solve complex challenges.
                </p>
                <Button asChild size="lg" className="group">
                  <a
                    href="https://github.com/SansMercantile/mezzo-anima"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-8 py-4 font-display tracking-wider"
                  >
                    <Github className="h-5 w-5" />
                    <span>Explore on GitHub</span>
                    <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </a>
                </Button>
              </div>
            </div>
          </motion.div>
        </PageWrapper>
      </div>

      {/* Ways to Contribute */}
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
                Ways to Contribute
              </h2>
              <p className="text-muted-text max-w-2xl mx-auto">
                Whether you're a developer, designer, or dreamer — there's a place for you.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-6 mb-24">
              {waysToContribute.map((way, index) => (
                <motion.div
                  key={way.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="glass-card-hover p-8"
                >
                  <div className="flex items-start gap-5">
                    <div className="w-12 h-12 rounded-xl bg-glow-cyan/10 flex items-center justify-center flex-shrink-0">
                      <way.icon className="h-6 w-6 text-glow-cyan" />
                    </div>
                    <div>
                      <h3 className="font-display text-xl font-bold text-light-text mb-2">
                        {way.title}
                      </h3>
                      <p className="text-muted-text leading-relaxed mb-4">
                        {way.description}
                      </p>
                      <button
                        onClick={() => handleFeatureClick(way.title)}
                        className="text-glow-cyan font-display text-sm tracking-wider hover:text-glow-blue transition-colors flex items-center gap-1"
                      >
                        {way.action}
                        <ArrowRight className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </PageWrapper>
      </div>

      {/* Community Stats */}
      <div className="relative">
        <PageWrapper>
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-4">
                Community
              </h2>
              <p className="text-muted-text max-w-2xl mx-auto">
                Join a growing community of builders and visionaries.
              </p>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
              {communityStats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="glass-card p-6 text-center"
                >
                  <stat.icon className="h-8 w-8 text-glow-blue mx-auto mb-3" />
                  <div className="font-display text-lg font-bold text-light-text mb-1">
                    {stat.value}
                  </div>
                  <div className="text-xs font-display tracking-wider text-muted-text uppercase">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </PageWrapper>
      </div>

      {/* For Developers & Community Cards */}
      <div className="relative bg-surface/30">
        <PageWrapper>
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 mb-16">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="glass-card-hover p-8"
              >
                <div className="w-14 h-14 rounded-2xl bg-glow-purple/10 flex items-center justify-center mb-6">
                  <Code className="h-7 w-7 text-glow-purple" />
                </div>
                <h3 className="font-display text-2xl font-bold text-light-text mb-3">
                  For Developers
                </h3>
                <p className="text-muted-text leading-relaxed mb-6">
                  Check out our contribution guidelines, pick up an issue, or submit a pull request. 
                  We welcome contributions of all sizes — from typo fixes to major features.
                </p>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-2 text-sm text-light-text">
                    <div className="w-1.5 h-1.5 rounded-full bg-glow-purple" />
                    Clean, well-documented codebase
                  </div>
                  <div className="flex items-center gap-2 text-sm text-light-text">
                    <div className="w-1.5 h-1.5 rounded-full bg-glow-purple" />
                    Comprehensive API documentation
                  </div>
                  <div className="flex items-center gap-2 text-sm text-light-text">
                    <div className="w-1.5 h-1.5 rounded-full bg-glow-purple" />
                    Active maintainer support
                  </div>
                </div>
                <Button variant="secondary" onClick={() => handleFeatureClick('Contribution Guide')} className="font-display tracking-wider">
                  Contribution Guide
                </Button>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="glass-card-hover p-8"
              >
                <div className="w-14 h-14 rounded-2xl bg-glow-cyan/10 flex items-center justify-center mb-6">
                  <Users className="h-7 w-7 text-glow-cyan" />
                </div>
                <h3 className="font-display text-2xl font-bold text-light-text mb-3">
                  For Community
                </h3>
                <p className="text-muted-text leading-relaxed mb-6">
                  Join the discussion, share your ideas, and help us build a community around ethical 
                  and empathetic AI. Your perspective matters.
                </p>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-2 text-sm text-light-text">
                    <div className="w-1.5 h-1.5 rounded-full bg-glow-cyan" />
                    Open discussions and forums
                  </div>
                  <div className="flex items-center gap-2 text-sm text-light-text">
                    <div className="w-1.5 h-1.5 rounded-full bg-glow-cyan" />
                    Regular community events
                  </div>
                  <div className="flex items-center gap-2 text-sm text-light-text">
                    <div className="w-1.5 h-1.5 rounded-full bg-glow-cyan" />
                    Direct input on roadmap
                  </div>
                </div>
                <Button variant="secondary" onClick={() => handleFeatureClick('Discussion Forum')} className="font-display tracking-wider">
                  Join Discussion
                </Button>
              </motion.div>
            </div>

            {/* Final CTA */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="glass-card p-8 md:p-12 max-w-2xl mx-auto">
                <Heart className="h-10 w-10 text-glow-pink mx-auto mb-4" />
                <h3 className="font-display text-2xl font-bold text-light-text mb-3">
                  Every Contribution Matters
                </h3>
                <p className="text-muted-text mb-6 leading-relaxed">
                  Whether it's a line of code, a bug report, or a bold idea — your contribution 
                  helps build technology that resonates with the soul.
                </p>
                <Button asChild size="lg" className="group">
                  <a
                    href="https://github.com/SansMercantile/mezzo-anima"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 font-display tracking-wider"
                  >
                    <Github className="h-5 w-5" />
                    <span>Start on GitHub</span>
                    <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </a>
                </Button>
              </div>
            </motion.div>
          </div>
        </PageWrapper>
      </div>
    </>
  );
};

export default Collaborate;