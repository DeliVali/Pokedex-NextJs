import createNextIntlPlugin from 'next-intl/plugin';
const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        formats: ["image/avif", "image/webp"],
        remotePatterns: [
          {
            protocol: "https",
            hostname: "raw.githubusercontent.com",
            port: "",
            pathname: "/PokeAPI/sprites/master/sprites/pokemon/**",
          },
        ],
      },
};

export default withNextIntl(nextConfig);

