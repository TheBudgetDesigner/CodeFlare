import { motion } from 'framer-motion';
import { ArrowRight, BookOpen, TrendingUp, AlertTriangle, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { FloatingCard, GlassCard, TiltCard, NeonCard } from '@/components/ui/uiverse-cards';
import { Link } from 'react-router-dom';

const FeaturedContent = () => {
  const featuredCards = [
    {
      icon: BookOpen,
      title: 'My Coding Journey',
      description: 'From zero to AI developer - see the complete timeline of my failures and wins.',
      link: '/journey',
      color: 'text-primary',
    },
    {
      icon: AlertTriangle,
      title: 'Epic Fails (Flop Zone)',
      description: 'Learn from my biggest coding disasters and what they taught me.',
      link: '/flop-zone',
      color: 'text-accent',
    },
    {
      icon: TrendingUp,
      title: 'Latest Blog Posts',
      description: 'Fresh insights, tutorials, and stories from the coding trenches.',
      link: '/blog',
      color: 'text-primary-glow',
    },
    {
      icon: Mail,
      title: 'Weekly Newsletter',
      description: 'Get coding tips, AI insights, and motivation delivered to your inbox.',
      link: '/subscribe',
      color: 'text-accent',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Start Your{' '}
            <span className="gradient-text">Coding Adventure</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Dive into real stories, practical tips, and honest insights about learning to code in the AI era.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ staggerChildren: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {featuredCards.map((card, index) => {
            return (
              <motion.div 
                key={index} 
                variants={cardVariants}
                transition={{ duration: 0.6, ease: "easeOut" }}
              >
                <Link to={card.link}>
                  <Card className="group cursor-pointer h-full bg-card border border-border transition-all duration-300 hover:bg-background/80 hover:backdrop-blur-lg hover:border-accent/20 hover:scale-105 hover:shadow-2xl">
                    <CardHeader>
                      <div className="flex items-center space-x-3 mb-4">
                        <div className={`p-3 rounded-xl bg-muted ${card.color} group-hover:scale-110 transition-transform duration-300`}>
                          <card.icon className="h-6 w-6" />
                        </div>
                      </div>
                      <CardTitle className="text-xl font-bold group-hover:text-accent transition-colors duration-300">
                        {card.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-muted-foreground text-sm leading-relaxed mb-4">
                        {card.description}
                      </CardDescription>
                      <div className="flex items-center text-sm text-accent group-hover:translate-x-2 transition-all duration-300">
                        <span className="font-medium">Explore</span>
                        <ArrowRight className="h-4 w-4 ml-2 group-hover:scale-110 transition-transform duration-300" />
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedContent;