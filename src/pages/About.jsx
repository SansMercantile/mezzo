import React from 'react';
import { Helmet } from 'react-helmet';
import PageWrapper from '@/components/PageWrapper';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Heart, Cpu, GitBranch, ArrowRight, Quote, Target, Eye, Users } from 'lucide-react';

const About = () => {
  const pillars = [
    {
      icon: Heart,
      title: 'Emotional Resonance',
      description: 'At its core, Mezzo Anima is about connection — preserving the psycho-emotional identity of loved ones, ensuring their essence lives on in meaningful ways.',
      color: 'glow-pink',
    },
    {
      icon: Cpu,
      title: 'Affective AI',
      description: 'Exploring the frontier of artificial intelligence that understands and responds to human emotion, creating systems that truly empathize and connect.',
      color: 'glow-blue',
    },
    {
      icon: GitBranch,
      title: 'Open Collaboration',
      description: 'An open-core initiative on GitHub, inviting the world to build technology that resonates with the soul and serves humanity.',
      color: 'glow-cyan',
    },
  ];

  const timeline = [
    {
      year: 'Origins',
      title: 'A Dream Born from Resilience',
      description: 'From a childhood shaped by profound transitions, the seed of an idea was planted — that technology could bridge the gap between loss and connection.',
    },
    {
      year: 'Vision',
      title: 'Bridging Emotion & Technology',
      description: 'The realization that AI could do more than compute — it could understand, empathize, and preserve the essence of what makes us human.',
    },
    {
      year: 'Mission',
      title: 'Building the Future',
      description: 'Today, Mezzo Anima is an open invitation to innovators, dreamers, and developers to shape the future of affective AI together.',
    },
  ];

  const values = [
    {
      icon: Target,
      title: 'Purpose-Driven',
      description: 'Every line of code serves the mission of preserving human consciousness and emotional depth.',
    },
    {
      icon: Eye,
      title: 'Transparency',
      description: 'Open-source at heart. Our processes, decisions, and technology are visible to all.',
    },
    {
      icon: Users,
      title: 'Community-First',
      description: 'Built by the community, for the community. Every voice matters in shaping our direction.',
    },
  ];

  return (
    <>
      <Helmet>
        <title>About - MEZZO: Anima</title>
        <meta name="description" content="Learn about the vision and inspiration behind Mezzo Anima, a project bridging emotion and technology." />
      </Helmet>

      {/* Hero Section */}
      <div className="relative hero-gradient overflow-hidden">
        <PageWrapper className="pt-32 md:pt-40">
          <div className="max-w-4xl mx-auto text-center mb-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-surface-light border border-glow-pink/20 mb-6"
            >
              <span className="text-sm font-display tracking-wider text-muted-text">OUR STORY</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="font-display text-4xl md:text-6xl font-bold mb-6 leading-tight"
            >
              <span className="text-white">The Vision Behind</span>
              <br />
              <span className="gradient-text text-glow-pink">Mezzo Anima</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl text-muted-text max-w-2xl mx-auto leading-relaxed"
            >
              Born from personal dreams and a deep longing for connection, 
              inspired by life's most profound transitions. This is more than technology — it's a bridge between hearts.
            </motion.p>
          </div>

          {/* Quote */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto mb-24"
          >
            <div className="glass-card p-8 md:p-12 relative">
              <Quote className="absolute top-6 left-6 h-8 w-8 text-glow-blue/20" />
              <blockquote className="text-xl md:text-2xl text-light-text/90 leading-relaxed italic pl-8">
                "From the depths of loss, we found the courage to build something that ensures 
                no one's essence is ever truly lost. Mezzo Anima is our answer to the most 
                human of fears — being forgotten."
              </blockquote>
            </div>
          </motion.div>
        </PageWrapper>
      </div>

      {/* Three Pillars */}
      <div className="relative">
        <PageWrapper>
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-4">
                Three Pillars of Innovation
              </h2>
              <p className="text-muted-text max-w-2xl mx-auto">
                Our foundation rests on the intersection of emotion, intelligence, and collaboration.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8 mb-24">
              {pillars.map((pillar, index) => (
                <motion.div
                  key={pillar.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15 }}
                  className="glass-card-hover p-8"
                >
                  <div className={`w-14 h-14 rounded-2xl bg-${pillar.color}/10 flex items-center justify-center mb-6`}>
                    <pillar.icon className={`h-7 w-7 text-${pillar.color}`} />
                  </div>
                  <h3 className="font-display text-xl font-bold text-light-text mb-3">
                    {pillar.title}
                  </h3>
                  <p className="text-muted-text leading-relaxed">
                    {pillar.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </PageWrapper>
      </div>

      {/* Timeline */}
      <div className="relative bg-surface/30">
        <PageWrapper>
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-4">
                Our Journey
              </h2>
              <p className="text-muted-text max-w-2xl mx-auto">
                From inspiration to innovation — the path that brought us here.
              </p>
            </motion.div>

            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-glow-blue/50 via-glow-purple/50 to-glow-cyan/50" />

              {timeline.map((item, index) => (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  className={`relative flex items-start mb-12 last:mb-0 ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-8 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-gradient-accent z-10 shadow-glow-blue" />

                  {/* Content */}
                  <div className={`ml-16 md:ml-0 md:w-1/2 ${
                    index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'
                  }`}>
                    <span className="font-display text-sm tracking-wider text-glow-blue">
                      {item.year}
                    </span>
                    <h3 className="font-display text-xl font-bold text-light-text mt-1 mb-2">
                      {item.title}
                    </h3>
                    <p className="text-muted-text leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </PageWrapper>
      </div>

      {/* Values */}
      <div className="relative">
        <PageWrapper>
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-4">
                Our Values
              </h2>
              <p className="text-muted-text max-w-2xl mx-auto">
                The principles that guide every decision we make.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8 mb-16">
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15 }}
                  className="text-center"
                >
                  <div className="w-14 h-14 rounded-2xl bg-surface-light border border-glow-blue/10 flex items-center justify-center mx-auto mb-4">
                    <value.icon className="h-7 w-7 text-glow-blue" />
                  </div>
                  <h3 className="font-display text-lg font-bold text-light-text mb-2">
                    {value.title}
                  </h3>
                  <p className="text-muted-text leading-relaxed">
                    {value.description}
                  </p>
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
              <p className="text-xl text-light-text mb-6">Discover the heart of the project.</p>
              <Button asChild size="lg" className="group">
                <Link to="/core" className="flex items-center gap-2 px-8 py-4 font-display tracking-wider">
                  <span>Explore the Core</span>
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

export default About;