const axios = require('axios');
const cheerio = require('cheerio');

// Function to fetch HTML content of a webpage
async function fetchHTML(url) {
    try {
        const { data } = await axios.get(url);
        return data;
    } catch (error) {
        console.error("Error fetching HTML:", error);
        return null;
    }
}

// Function to scrape chiropractor information
async function scrapeChiropractors() {
    const url = 'https://www.chirodirectory.com/chiropractors/WA/Tacoma'; // Replace 'example.com' with the actual website URL
    const html = await fetchHTML(url);
    if (!html) return;

    const $ = cheerio.load(html);
    const chiropractors = [];

    // Adjust the CSS selectors according to the structure of the website you're scraping
    $('div.result').each((index, element) => {
        const name = $(element).find('main').text().trim();
        const address = $(element).find('span.sml').text().trim();

        chiropractors.push({
            name,
            address
        });
    });

    return chiropractors;
}

// Example usage
scrapeChiropractors()
    .then(chiropractors => {
        console.log("Chiropractors in Western Washington region:");
        chiropractors.forEach((chiropractor, index) => {
            console.log(`#${index + 1}:`);
            console.log(`Name: ${chiropractor.name}`);
            console.log(`Address: ${chiropractor.address}`);
            console.log("----------");
        });
    })
    .catch(error => console.error("Error scraping:", error));
