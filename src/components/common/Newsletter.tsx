import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Check, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { toast } from 'sonner';

interface NewsletterProps {
  variant?: 'default' | 'compact' | 'hero';
  className?: string;
}

const Newsletter = ({ variant = 'default', className = '' }: NewsletterProps) => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubscribed(true);
      setIsLoading(false);
      toast.success('Welcome to the CodeFlare community!');
      setEmail('');
    }, 1500);
  };

  if (variant === 'compact') {
    return (
      <div className={`${className}`}>
        {isSubscribed ? (
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="flex items-center gap-2 text-green-600 dark:text-green-400"
          >
            <Check className="h-5 w-5" />
            <span className="text-sm font-medium">Subscribed!</span>
          </motion.div>
        ) : (
          <form onSubmit={handleSubmit} className="flex gap-2">
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 min-w-0"
              disabled={isLoading}
            />
            <Button
              type="submit"
              size="sm"
              disabled={isLoading || !email}
              className="shrink-0"
            >
              {isLoading ? (
                <div className="h-4 w-4 border-2 border-current border-t-transparent rounded-full animate-spin" />
              ) : (
                <Mail className="h-4 w-4" />
              )}
            </Button>
          </form>
        )}
      </div>
    );
  }

  return (
    <div className={`bg-gradient-to-r from-primary/10 via-accent/10 to-secondary/10 rounded-2xl p-8 ${className}`}>
      <div className="text-center max-w-2xl mx-auto">
        <div className="flex justify-center mb-4">
          <div className="p-3 bg-primary/10 rounded-full">
            <Mail className="h-8 w-8 text-primary" />
          </div>
        </div>
        
        <h3 className="text-2xl font-bold mb-4">
          Stay in the <span className="gradient-text">Loop</span>
        </h3>
        
        <p className="text-muted-foreground mb-6">
          Get the latest AI development insights, coding tutorials, and exclusive content 
          delivered directly to your inbox. Join {variant === 'hero' ? '1000+' : 'our'} developers 
          who are already part of the CodeFlare community.
        </p>

        {isSubscribed ? (
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="flex flex-col items-center gap-4"
          >
            <div className="p-4 bg-green-100 dark:bg-green-900/30 rounded-full">
              <Check className="h-8 w-8 text-green-600 dark:text-green-400" />
            </div>
            <div className="text-center">
              <h4 className="text-xl font-semibold text-green-600 dark:text-green-400 mb-2">
                Welcome to the Community!
              </h4>
              <p className="text-muted-foreground">
                Check your inbox for a confirmation email and get ready for some awesome content.
              </p>
            </div>
          </motion.div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <div className="relative flex-1">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  type="email"
                  placeholder="Enter your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="pl-10"
                  disabled={isLoading}
                  required
                />
              </div>
              <Button
                type="submit"
                disabled={isLoading || !email}
                className="btn-hero group px-6 py-2"
              >
                {isLoading ? (
                  <div className="flex items-center gap-2">
                    <div className="h-4 w-4 border-2 border-current border-t-transparent rounded-full animate-spin" />
                    <span>Subscribing...</span>
                  </div>
                ) : (
                  <div className="flex items-center gap-2">
                    <span>Subscribe</span>
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </div>
                )}
              </Button>
            </div>
            
            <p className="text-xs text-muted-foreground">
              No spam, ever. Unsubscribe anytime with one click.
            </p>
          </form>
        )}
      </div>
    </div>
  );
};

export default Newsletter;
