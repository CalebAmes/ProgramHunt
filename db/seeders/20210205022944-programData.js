'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('Programs', [
        { name: 'TermScout', thumbnail: 'https://ph-files.imgix.net/d1b11524-b6d5-4aaf-909b-3e78a15be364.gif?auto=format&auto=compress&codec=mozjpeg&cs=strip&w=100&h=100&fit=crop', bio: 'Free reviews and ratings on top SaaS contracts', description: 'Signing bad contracts is the worst. TermScout uses NLP + human attorneys to analyze more than 600 data points in common SaaS agreements and rates them based on customer favorability. Less negotiating, less legal, less confusion. Stop signing bad contracts!', userId: 1, video: 'https://www.youtube.com/embed/5VZqtosRzFk', image: null, likes: 0, createdAt: new Date(), updatedAt: new Date() },
        { name: 'WellSpeak', thumbnail: 'https://ph-files.imgix.net/3dd55835-9c74-4481-8644-a2b5624e13d9.gif?auto=format&auto=compress&codec=mozjpeg&cs=strip&w=100&h=100&fit=crop', bio: 'Practice English and be confident', description: 'WellSpeak is a mobile app that helps you to become confident in your English speaking skills. AI and smart algorithms will help you with pronunciation and show how easy it is to speak like a native 😎', userId: 1, video: 'https://www.youtube.com/embed/RboKQ9WpBb0', image: null, likes: 0, createdAt: new Date(), updatedAt: new Date() },
        { name: 'Appy Pie Chatbot', thumbnail: 'https://ph-files.imgix.net/3beb153b-08d8-4fb7-b153-4e6508f97353.png?auto=format&auto=compress&codec=mozjpeg&cs=strip&w=100&h=100&fit=crop', bio: 'Create intelligent answer bots without any coding', description: 'Appy Pie Chatbot Builder is a cloud based software that lets you create custom answer bots without any coding and add it to your website in minutes. Start with easy templates and customize your answer bot with an intuitive drag-n-drop interface. Get Started.', userId: 1, video: 'https://www.youtube.com/embed/qplfnkm0zh4', image: null, likes: 0, createdAt: new Date(), updatedAt: new Date() },
        { name: 'Scan Thing', thumbnail: 'https://ph-files.imgix.net/0c0f9d4d-a260-48a7-9fc9-14b747c5bcc5.png?auto=format&auto=compress&codec=mozjpeg&cs=strip&w=100&h=100&fit=crop', bio: 'Quickest way to capture and save anything around you', description: `Scan anything: objects, people, pets, text, books, and documents. Scan Thing uses cutting-edge machine learning and computer-vision algorithms. You don't need internet access, an account, or a bioscription. There's no data collection, no ads, and no nonsense.`, userId: 1, video: 'https://www.youtube.com/embed/9fBZG7nxt34', image: null, likes: 0, createdAt: new Date(), updatedAt: new Date() },
        { name: 'Planmesh', thumbnail: 'https://ph-files.imgix.net/06eab0b2-3398-4d8d-902e-5ea866697369.png?auto=format&auto=compress&codec=mozjpeg&cs=strip&w=100&h=100&fit=crop', bio: 'The easiest way to plan with friends', description: `Plan the things you love to do with your friends both online and in person. Make plans with friends, share plans, see what others are up to, and keep track of upcoming events. Plan get-togethers, brunch, study sessions, your next date, you name it!`, userId: 2, video: 'https://www.youtube.com/embed/BOE6i4bhToI', image: null, likes: 0, createdAt: new Date(), updatedAt: new Date() },
        { name: 'Kumu', thumbnail: 'https://ph-files.imgix.net/573a8c55-bc51-40e5-ad56-452384bd98c9.png?auto=format&auto=compress&codec=mozjpeg&cs=strip&w=100&h=100&fit=crop', bio: 'Beautifully organize complex data into relationship maps', description: `Kumu makes it easy to organize complex data into relationship maps that are beautiful to look at and a pleasure to use. Whether you are mapping people, systems, or concepts in general, if you are focused on relationships we've got you covered.`, userId: 2, video: null, image: 'https://ph-files.imgix.net/0fcc1f59-ff94-47aa-8d92-1ebabee23fd5.jpeg?auto=format&auto=compress&codec=mozjpeg&cs=strip&w=477.7562862669245&h=380&fit=max', likes: 0, createdAt: new Date(), updatedAt: new Date() },
        { name: 'Removal.ai', thumbnail: 'https://ph-files.imgix.net/f5f7c49d-cba0-4b24-8c6d-743995e27998.gif?auto=format&auto=compress&codec=mozjpeg&cs=strip&w=100&h=100&fit=crop', bio: 'API for bulk image background removal', description: `Remove background from image using Artificial Intelligence. Best solution for eCommerce, web design or any design projects. ✅ Remove Background in 1-Click. ✅ Bulk Image Processing. ✅ High-Resolution Output. ✅ Scaleable with API access. ✅ Fast, Secure & FREE!`, userId: 2, video: 'https://www.youtube.com/embed/9I4DMr5XWpI', image: null, likes: 0, createdAt: new Date(), updatedAt: new Date() },
        { name: 'Public APIs 3.0', thumbnail: 'https://ph-files.imgix.net/0fb3b895-0c90-4221-a270-63174030fc3a.png?auto=format&auto=compress&codec=mozjpeg&cs=strip&w=100&h=100&fit=crop', bio: 'A collection of public APIs for your next project', description: `A collective list of more than 1000 Free Public and Open REST APIs for developers like movie APIs, Anime APIs, weather APIs, music APIs, games and comics APIs, currency APIs, sports APIs, science APIs, open data APIs, etc.`, userId: 2, video: null, image: 'https://ph-files.imgix.net/dca09215-1ab8-4a7c-8e5b-8080a6a1fc25.png?auto=format&auto=compress&codec=mozjpeg&cs=strip&w=686.5746549560853&h=380&fit=max', likes: 0, createdAt: new Date(), updatedAt: new Date() },
        { name: 'Upscale 2.0 by Sticker Mule', thumbnail: 'https://ph-files.imgix.net/c651120f-9f4a-4799-808c-f9e9909cd3e3.gif?auto=format&auto=compress&codec=mozjpeg&cs=strip&w=100&h=100&fit=crop', bio: 'Increase the resolution of any graphic or photo, instantly', description: `Automatically transform images 8x their original size without a loss in quality.`, userId: 3, video: 'https://www.youtube.com/embed/8PCQrRkDRmA', image: null, likes: 0, createdAt: new Date(), updatedAt: new Date() },
        { name: 'Facet', thumbnail: 'https://ph-files.imgix.net/58bf578f-8220-4bad-97f1-a2af047b65b4.gif?auto=format&auto=compress&codec=mozjpeg&cs=strip&w=100&h=100&fit=crop', bio: 'Content-aware image editing in your browser', description: 'Facet is building the future of AI-assistive creative work. Our mission is to empower professional creatives and teams to collaborate seamlessly on art direction and spend less time pushing pixels.', userId: 3, video: null, image: 'https://ph-files.imgix.net/537f671d-52ec-42d5-8f13-089941222700.gif?auto=format&auto=compress&codec=mozjpeg&cs=strip&w=635&h=380&fit=max', likes: 0, createdAt: new Date(), updatedAt: new Date() },
        { name: 'Soundwise', thumbnail: 'https://ph-files.imgix.net/d5cb68bc-8f68-405f-859b-9627a53f95a5.gif?auto=format&auto=compress&codec=mozjpeg&cs=strip&w=100&h=100&fit=crop', bio: 'Sell audio directly to listeners with secure mobile delivery', description: `Sell audiobooks, podcasts, audio courses & music under one roof: 📱securely deliver paid audio on mobile, 💰charge bioscription, rental, & one-time fees, 🎧bundle & sell streaming library, 💌 build email list with audio, ♻️ auto-convert Youtube channel into podcasts`, userId: 3, video: 'https://www.youtube.com/embed/JGNb5SxzfkU', image: null, likes: 0, createdAt: new Date(), updatedAt: new Date() },
        { name: 'Chat for VSCode', thumbnail: 'https://ph-files.imgix.net/351d2fd4-e077-4c3d-81c5-d49ce23a046a.png?auto=format&auto=compress&codec=mozjpeg&cs=strip&w=100&h=100&fit=crop', bio: 'Chat with your Slack and Discord teams from within VS Code', description: 'This Visual Studio Code extension allows to easily chat with Slack and Discord directly from the IDEA without the need to change windows or apps.', userId: 3, video: null, image: 'https://ph-files.imgix.net/86917bbf-125d-4695-9e5f-4040b69abf11.gif?auto=format&auto=compress&codec=mozjpeg&cs=strip&w=608&h=380&fit=max', likes: 0, createdAt: new Date(), updatedAt: new Date() },
        { name: 'Scrum Study Cards', thumbnail: 'https://ph-files.imgix.net/679d713f-c9cb-4230-a9ac-2ddbeda386a4.png?auto=format&auto=compress&codec=mozjpeg&cs=strip&w=100&h=100&fit=crop', bio: 'An easy to understand overview of the Scrum framework', description: 'An easy to understand overview of the Scrum framework via a set of portable study cards covering everything you need to know about Scrum.', userId: 4, video: null, image: 'https://ph-files.imgix.net/597b14a4-e63b-4d6b-99e9-39dbba908e2b.png?auto=format&auto=compress&codec=mozjpeg&cs=strip&w=635&h=380&fit=max', likes: 0, createdAt: new Date(), updatedAt: new Date() },
        { name: 'webshot', thumbnail: 'https://ph-files.imgix.net/3f3887ff-bd2f-4020-ba0c-9c5d1785f255.png?auto=format&auto=compress&codec=mozjpeg&cs=strip&w=100&h=100&fit=crop', bio: 'Instantly create a wireframe for any website', description: 'Instantly create a mockup for any website. Paste the page URL and instantly generate a wireframe image of the site or your favorite websites in full-page resolution (3000 x 2000 pixels) with the background color of your choice.', userId: 4, video: null, image: 'https://ph-files.imgix.net/bd8e27d4-9de3-4840-8813-82ada7eb5d37.jpeg?auto=format&auto=compress&codec=mozjpeg&cs=strip&w=760&h=380&fit=max', likes: 0, createdAt: new Date(), updatedAt: new Date() },
        { name: 'Process Street 3.0', thumbnail: 'https://ph-files.imgix.net/d4196c31-fd53-40d7-813a-67462be171fa.gif?auto=format&auto=compress&codec=mozjpeg&cs=strip&w=100&h=100&fit=crop', bio: 'Simple process and workflow management for teams', description: 'We’re excited to announce Process Street 3.0, a major new milestone in our mission to help businesses make their recurring work fun, fast and faultless.', userId: 4, video: 'https://www.youtube.com/embed/Ow0086yLROw', image: null, likes: 0, createdAt: new Date(), updatedAt: new Date() },
        { name: 'Capsule', thumbnail: 'https://ph-files.imgix.net/1a616191-67bf-4ab1-a576-c06b076eafc5.png?auto=format&auto=compress&codec=mozjpeg&cs=strip&w=100&h=100&fit=crop', bio: 'Visually collaborate on top of any website', description: 'With Capsule you can collaborate and leave feedback directly on top of any website. Just one click to comment, and another to share it with the world! We automatically organize your feedback in the dashboard. Click —> Comment —> Share & repeat!', userId: 4, video: null, image: 'https://ph-files.imgix.net/f1c33f0e-781a-4f3c-9ceb-e1e66f723f60.png?auto=format&auto=compress&codec=mozjpeg&cs=strip&w=635&h=380&fit=max', likes: 0, createdAt: new Date(), updatedAt: new Date() },
        { name: 'Slack Theme for VSCode', thumbnail: 'https://ph-files.imgix.net/7ba3114b-8dcb-4486-adea-9a23339115a0.png?auto=format&auto=compress&codec=mozjpeg&cs=strip&w=100&h=100&fit=crop', bio: 'Theme for VSCode like Slack', description: 'Color scheme inspired by the Slack default themes to customize your Visual Studio Code setup.', userId: 5, video: null, image: 'https://ph-files.imgix.net/cbc3044f-7b03-4653-8422-763b9d8472e3.png?auto=format&auto=compress&codec=mozjpeg&cs=strip&w=779.3877551020408&h=380&fit=max', likes: 0, createdAt: new Date(), updatedAt: new Date() },
        { name: 'DIY UX Audit', thumbnail: 'https://ph-files.imgix.net/49e2dd48-63a8-487f-96e1-74e190fe775e.gif?auto=format&auto=compress&codec=mozjpeg&cs=strip&w=100&h=100&fit=crop', bio: 'Uncover 90% of the usability issues on your website', description: 'With this templated UX audit checklist, you can uncover 90% of the usability issues on your website or app. It includes over 100 unique criteria & is totally free!', userId: 5, video: 'https://www.youtube.com/embed/U0zvYWaMbZ0', image: null, likes: 0, createdAt: new Date(), updatedAt: new Date() },
        { name: 'Bernie Sits', thumbnail: 'https://ph-files.imgix.net/01944bb8-95d0-4cc9-a144-d290eab5d2eb.png?auto=format&auto=compress&codec=mozjpeg&cs=strip&w=100&h=100&fit=crop', bio: 'Put Bernie Sanders in places using Google Maps street view', description: `Just enter ANY address and it’ll put Bernie Sanders in the photo.`, userId: 5, video: null, image: 'https://ph-files.imgix.net/9e2c20aa-6a5c-45bd-a8ce-91e42834ad1f.png?auto=format&auto=compress&codec=mozjpeg&cs=strip&w=380&h=380&fit=max', likes: 0, createdAt: new Date(), updatedAt: new Date() },
        { name: 'Motherboard Dashboards', thumbnail: 'https://ph-files.imgix.net/09742d69-7e2a-458c-9a6e-2835a477893f.gif?auto=format&auto=compress&codec=mozjpeg&cs=strip&w=100&h=100&fit=crop', bio: 'Fully coded design solution for web-applications creating', description: 'Universal widgets, charts and ready-to-use screens collected and coded. Get perfectly coded website or web-application with helpful tools included. Package includes HTML, CSS, JavaScript code and Figma sources.', userId: 5, video: null, image: 'https://ph-files.imgix.net/a49b51b0-de7c-4346-b535-14cc83462713.png?auto=format&auto=compress&codec=mozjpeg&cs=strip&w=635.0974930362117&h=380&fit=max', likes: 0, createdAt: new Date(), updatedAt: new Date() }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('Programs', null, {});
  }
};