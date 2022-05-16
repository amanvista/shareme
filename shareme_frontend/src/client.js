import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = sanityClient({
//   projectId: process.env.REACT_APP_SANITY_PROJECT_ID,
  projectId: 'agxndw73',
  dataset: 'production',
  apiVersion: '2021-11-16',
  useCdn: true,
//   token: process.env.REACT_APP_SANITY_TOKEN,
  token :'skLUjYN6QYYmJtg7Ew17fOytCsPpaRWkj13ujaAHAtBqsfakSwyiKPBNqRFLtKZKSqDtaOMPho2J96U1DPpBpUaWFh8jCqpH0K8Nz0iaQtGVDYUYWAmpKGMuZNgVDb0KceFf0HuZHnoMOGfVq7a9dpg3hADAZhDMmv7TnUenZCQjLEt7lHqR'

});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);
