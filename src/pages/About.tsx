import { motion } from 'framer-motion';
import { Code2, Heart, Zap, Users, Target, BookOpen } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const About = () => {
  const stats = [
    { label: 'Articles Published', value: '50+', icon: BookOpen },
    { label: 'Community Members', value: '1000+', icon: Users },
    { label: 'Years of Experience', value: '5+', icon: Target },
    { label: 'Coffee Consumed', value: '∞', icon: Heart },
  ];

  const values = [
    {
      icon: Code2,
      title: 'Clean Code',
      description: 'I believe in writing code that\'s not just functional, but readable, maintainable, and elegant.'
    },
    {
      icon: Zap,
      title: 'Innovation',
      description: 'Staying at the forefront of technology, exploring new tools and methodologies to solve complex problems.'
    },
    {
      icon: Users,
      title: 'Community',
      description: 'Building a supportive community where developers can learn, share, and grow together.'
    },
    {
      icon: Heart,
      title: 'Passion',
      description: 'Driven by genuine love for coding and helping others discover the joy of programming.'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              Hi, I'm{' '}
              <span className="gradient-text">Rayan</span>
            </h1>
            <p className="text-xl lg:text-2xl text-muted-foreground mb-8 leading-relaxed">
              A passionate developer and educator on a mission to make AI development 
              accessible and exciting for everyone.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/blog">
                <Button className="btn-hero px-8 py-3">
                  Read My Articles
                </Button>
              </Link>
              <Link to="/subscribe">
                <Button variant="outline" className="px-8 py-3">
                  Join the Community
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="flex justify-center mb-4">
                  <div className="p-3 bg-primary/10 rounded-full">
                    <stat.icon className="h-8 w-8 text-primary" />
                  </div>
                </div>
                <div className="text-3xl lg:text-4xl font-bold text-foreground mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl lg:text-5xl font-bold mb-6">
                My <span className="gradient-text">Story</span>
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-8" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="prose prose-lg max-w-none text-muted-foreground space-y-6"
            >
              <p className="text-lg leading-relaxed">
                My journey into the world of programming began over 5 years ago when I wrote my first 
                "Hello, World!" program. What started as curiosity quickly became a passion that has 
                shaped my entire career and life philosophy.
              </p>
              
              <p className="text-lg leading-relaxed">
                Throughout my career, I've worked on everything from small startups to enterprise 
                applications, always with a focus on clean, efficient code and user-centered design. 
                But what truly excites me is the intersection of artificial intelligence and practical 
                development.
              </p>
              
              <p className="text-lg leading-relaxed">
                CodeFlare was born from my desire to share this excitement with others. I believe that 
                AI development shouldn't be intimidating or exclusive. Through tutorials, real-world 
                examples, and community discussions, I aim to make these powerful technologies 
                accessible to developers at every level.
              </p>
              
              <p className="text-lg leading-relaxed">
                When I'm not coding or writing, you'll find me exploring new technologies, contributing 
                to open source projects, or enjoying a good cup of coffee while reading the latest 
                research papers.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-5xl font-bold mb-6">
              What I <span className="gradient-text">Believe In</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-8" />
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center p-6 rounded-lg bg-card border border-border hover:shadow-lg transition-shadow"
              >
                <div className="flex justify-center mb-4">
                  <div className="p-3 bg-primary/10 rounded-full">
                    <value.icon className="h-8 w-8 text-primary" />
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-4">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Let's <span className="gradient-text">Connect</span>
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Have a question, want to collaborate, or just want to chat about code? 
              I'd love to hear from you!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/subscribe">
                <Button className="btn-hero px-8 py-3">
                  Join the Community
                </Button>
              </Link>
              <Button variant="outline" className="px-8 py-3">
                Send me an Email
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;
