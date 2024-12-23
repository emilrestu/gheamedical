const { SitemapStream, streamToPromise } = require('sitemap');
const { writeFileSync } = require('fs');
const path = require('path');

const hostname = 'https://gheamedical.com/';
const filePath = path.join(__dirname, '../public/sitemap.xml');

const pages = [
    { url: '/', changefreq: 'monthly', priority: 1.0 },
    { url: 'about-us', changefreq: 'monthly', priority: 0.7 },
    { url: 'services', changefreq: 'monthly', priority: 0.8 },
    { url: 'services/personal-service', changefreq: 'monthly', priority: 0.3 },
    { url: 'services/personal-service-assistance', changefreq: 'monthly', priority: 0.3 },
    { url: 'services/child-services/', changefreq: 'monthly', priority: 0.3 },
    { url: 'services/service-for-the-elderly/', changefreq: 'monthly', priority: 0.3 },
    { url: 'services/service-for-all-ages/', changefreq: 'monthly', priority: 0.3 },
    { url: 'services/alzheimers-service/', changefreq: 'monthly', priority: 0.3 },
    { url: 'book-now', changefreq: 'monthly', priority: 0.9 },
    { url: 'contact-us', changefreq: 'monthly', priority: 0.6 },
    { url: 'privacy-policy', changefreq: 'monthly', priority: 0.2 },
    { url: 'terms-conditions', changefreq: 'monthly', priority: 0.2 },
    // Add more pages here
];

// Create a SitemapStream
const sitemap = new SitemapStream({ hostname });

// Manually write each URL to the sitemap
pages.forEach((page) => sitemap.write(page));

// End the sitemap stream
sitemap.end();

// Convert the sitemap to XML and write it to a file
streamToPromise(sitemap)
    .then((data) => {
        writeFileSync(filePath, data.toString());
        console.log('Sitemap created successfully at', filePath);
    })
    .catch((err) => {
        console.error('Error creating sitemap:', err);
    });
