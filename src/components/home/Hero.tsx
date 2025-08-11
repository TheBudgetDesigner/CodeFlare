import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, Code2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import heroImage from '@/assets/hero-bg.jpg';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img 
          src={heroImage} 
          alt="CodeFlare Hero" 
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background/90 to-primary/20" />
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ 
            x: [0, 30, 0],
            y: [0, -20, 0],
            rotate: [0, 5, 0]
          }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-20 left-10 text-primary/30"
        >
          <Code2 className="h-12 w-12 icon-float" />
        </motion.div>
        
        <motion.div
          animate={{ 
            x: [0, -20, 0],
            y: [0, 15, 0]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute top-40 right-20 text-accent/40"
        >
          <Sparkles className="h-8 w-8 icon-pulse" />
        </motion.div>

        <motion.div
          animate={{ 
            x: [0, 25, 0],
            y: [0, -25, 0]
          }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute bottom-40 left-1/4 text-primary-glow/30"
        >
          <div className="w-6 h-6 bg-accent/40 rounded-full icon-bounce" />
        </motion.div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-6"
          >
            <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-accent/10 text-accent border border-accent/20">
              <Sparkles className="w-4 h-4 mr-2 icon-pulse" />
              Welcome to CodeFlare
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-6 leading-tight"
          >
            I'm{' '}
            <span className="gradient-text">Rayan</span>.{' '}
            <br className="hidden sm:block" />
            I teach you to{' '}
            <span className="text-accent">code</span>,{' '}
            <span className="text-primary-glow">flop</span>, and{' '}
            <span className="gradient-text">win</span>{' '}
            with AI.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-lg sm:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed"
          >
            From failing at my first "Hello World" to building AI bots at 12. 
            Join Us of If you want learn to code through real stories, 
            epic fails, and breakthrough moments.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          >
            <Link to="/journey">
              <button className="relative overflow-hidden px-8 py-4 bg-gradient-to-r from-accent to-primary text-white font-semibold rounded-2xl transition-all duration-500 hover:rounded-full hover:scale-110 hover:shadow-glow group flex items-center gap-2">
                <span className="relative z-10 transition-all duration-300 group-hover:scale-110">Start My Journey</span>
                <ArrowRight className="w-5 h-5 relative z-10 group-hover:scale-110 transition-transform" />
                <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute inset-0 rounded-2xl transition-all duration-300 group-hover:scale-110 group-hover:blur-sm opacity-70 bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
                <div className="absolute inset-0 rounded-2xl">
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                </div>
              </button>
            </Link>
            
            <Link to="/blog">
              <button className="relative overflow-hidden px-8 py-4 bg-gradient-to-r from-accent to-primary text-white font-semibold rounded-2xl transition-all duration-500 hover:rounded-full hover:scale-110 hover:shadow-glow group">
                <span className="relative z-10 transition-all duration-300 group-hover:scale-110">Read Stories</span>
                <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute inset-0 rounded-2xl transition-all duration-300 group-hover:scale-110 group-hover:blur-sm opacity-70 bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
                <div className="absolute inset-0 rounded-2xl">
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                </div>
              </button>
            </Link>
            
            <Link to="/subscribe">
              <button className="px-8 py-4 bg-gradient-to-r from-accent to-primary text-white font-semibold rounded-2xl transition-colors duration-300">
                Subscribe Now
              </button>
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="mt-12 text-sm text-muted-foreground"
          >
            <p>
              📚 Latest: "How I built my first AI bot (and why it failed spectacularly)"
            </p>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-6 h-10 border-2 border-muted-foreground/30 rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-1 h-3 bg-accent rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;