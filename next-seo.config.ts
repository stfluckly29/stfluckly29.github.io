const title = 'Stefan Klein – Engineer';
const description =
  'A developer who likes to hack things up. Dedicated learner, mentor and technical blogger - Stefan Klein';

const SEO = {
  title,
  description,
  canonical: 'https://stfluckly29.github.io/',
  openGraph: {
    type: 'website',
    locale: 'en_IE',
    url: 'https://stfluckly29.github.io/',
    title,
    description,
    images: [
      {
        url: '/static/images/seo.jpg',
        alt: title,
        width: 1200,
        height: 800,
      },
    ],
  },
};

export default SEO;
