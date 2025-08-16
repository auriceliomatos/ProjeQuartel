/** @type {import('next').NextConfig} */
const nextConfig = {
  // Configurações para compatibilidade com Vercel
  experimental: {
    esmExternals: true,
  },
  // Configurações de build
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback = {
        fs: false,
        net: false,
        tls: false,
      };
    }
    return config;
  },
  // Configurações de imagens
  images: {
    domains: ['i.im.ge', 'www.ceara.gov.br', 'www.bombeiros.ce.gov.br'],
    unoptimized: true,
  },
  // Configurações de headers
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
