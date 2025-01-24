/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['7cf5aabc-b328-4d8e-96cb-c39c9ba07793.selstorage.ru'] // Добавьте ваш домен сюда
  },
  output: 'export',

  async rewrites() {
    return [
      {
        source: '/api/:path*', // Это будет проксировать запросы с /api/
        destination: 'http://90.156.157.111:8000/:path*' // Это будет передавать запросы на сервер
      }
    ];
  }
};

module.exports = nextConfig;
