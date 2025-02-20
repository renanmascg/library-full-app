const config = {
  env: {
    imagekit: {
      publicKey: process.env.NEXT_PUBLIC_IMAGEKIT_PUBLIC_KEY!,
      urlEndpoint: process.env.NEXT_PUBLIC_IMAGEKIT_ENDPOINT!,
      privateKey: process.env.IMAGEKIT_PRIVATE_KEY!,
    },
    apiEndpoint: process.env.NEXT_PUBLIC_API_ENDPOINT!,
    databaseUrl: process.env.DATABASE_URL,
    upstash: {
      redisUrl: process.env.UPSTASH_REDIS_URL,
      redisToken: process.env.UPSTASH_REDIS_TOKEN,
      qstashUrl: process.env.QSTASH_URL,
      qstashToken: process.env.QSTASH_TOKEN,
    },

  },
};

export default config;
