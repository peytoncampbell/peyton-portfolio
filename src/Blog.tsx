import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { BLOG_POSTS } from './data';

const fadeInUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

function SectionHeading({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return (
    <motion.h2
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-50px' }}
      variants={fadeInUp}
      className={`text-4xl md:text-5xl font-bold mb-14 text-white section-heading-bar ${className}`}
    >
      {children}
    </motion.h2>
  );
}

export default function Blog() {
  return (
    <section className="py-24 relative" id="blog">
      <div className="container mx-auto px-6">
        <SectionHeading>
          Latest <span className="gradient-text">Blog Posts</span>
        </SectionHeading>
        
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {BLOG_POSTS.map((post, index) => (
            <motion.article
              key={index}
              variants={fadeInUp}
              className="glass-premium rounded-2xl overflow-hidden group hover:scale-[1.02] transition-all duration-300"
            >
              <div className="p-7 h-full flex flex-col">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs text-cyan-400 font-mono">{post.date}</span>
                  <span className="text-xs text-slate-500">{post.readTime}</span>
                </div>
                
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors duration-300">
                  {post.title}
                </h3>
                
                <p className="text-slate-400 text-sm mb-5 flex-grow leading-relaxed">
                  {post.excerpt}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-5">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs text-slate-500 font-mono bg-slate-800/50 px-2 py-1 rounded-md"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
                
                <a
                  href={post.href}
                  className="inline-flex items-center text-sm font-bold text-cyan-400 hover:text-white transition-colors duration-300 mt-auto"
                >
                  Read more <ArrowRight size={16} className="ml-1" />
                </a>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}