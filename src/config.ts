const env = import.meta.env;

export const site = {
  name:        env.PORTFOLIO_NAME        || 'Your Name',
  role:        env.PORTFOLIO_ROLE        || 'Software Engineer',
  description: env.PORTFOLIO_DESCRIPTION || 'Software engineer focused on learning systems, developer tooling, and thoughtful product engineering.',
  email:       env.PORTFOLIO_EMAIL       || 'your@email.com',
  github:      env.PORTFOLIO_GITHUB      || 'https://github.com/your-handle',
  linkedin:    env.PORTFOLIO_LINKEDIN    || 'https://linkedin.com/in/your-profile',
} as const;
