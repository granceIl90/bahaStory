// bahaStory.js

const stories = [
    {
        title: "The Two Martyrs",
        author: "Baha'u'llah",
        content: "Once upon a time, in Persia, there were two brothers who were followers of the Bahá'í Faith. They were steadfast in their belief despite facing severe persecution. One day, they were arrested and brought before the authorities. Despite being given the chance to renounce their faith, they remained steadfast and were ultimately executed for their beliefs. Their bravery and faith inspired many others to embrace the Bahá'í Faith."
    },
    {
        title: "The Secret of Divine Civilization",
        author: "Abdu'l-Bahá",
        content: "In 'The Secret of Divine Civilization', Abdu'l-Bahá lays out his vision for the future of society. He emphasizes the importance of education, justice, and unity in building a prosperous and peaceful world. The book provides insights into the principles of the Bahá'í Faith and offers guidance on how individuals and communities can work towards social progress and spiritual growth."
    },
    // Add more stories here
];

function getRandomStory() {
    const randomIndex = Math.floor(Math.random() * stories.length);
    return stories[randomIndex];
}

module.exports = {
    getRandomStory
};
