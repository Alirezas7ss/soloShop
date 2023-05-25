/** @type {import('next').NextConfig} */
const nextConfig = {
    i18n: {
        localeDetection: false, 
        locales: ["ir", "fa"], 
        defaultLocale: "ir"     
      },
      images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'cdn.suitdirect.co.uk',
            port: '',
          },
        ],
      },

}

module.exports = nextConfig
