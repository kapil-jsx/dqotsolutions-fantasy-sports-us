// // Disable right-click
// document.addEventListener('contextmenu', (e) => e.preventDefault());

// function ctrlShiftKey(e, keyCode) {
//   return e.ctrlKey && e.shiftKey && e.keyCode === keyCode.charCodeAt(0);
// }

// document.onkeydown = (e) => {
//   // Disable F12, Ctrl + Shift + I, Ctrl + Shift + J, Ctrl + U
//   if (
//     event.keyCode === 123 ||
//     ctrlShiftKey(e, 'I') ||
//     ctrlShiftKey(e, 'J') ||
//     ctrlShiftKey(e, 'C') ||
//     (e.ctrlKey && e.keyCode === 'U'.charCodeAt(0))
//   )
//     return false;
// };
// if (window.location.hash == '#start-a-project') {
//     console.log('777');

//     $('#start_new_project').show();
// }
//         if (window.location.hash === '#start-a-project') {
//             console.log(326);

//             $('#start_new_project').show();
//         }

(function ($) {
    $(function () {
        $(document).off("click.bs.tab.data-api", '[data-hover="tab"]');
        $(document).on(
            "mouseenter.bs.tab.data-api",
            '[data-toggle="tab"], [data-hover="tab"]',
            function () {
                $(this).tab("show");
            }
        );
    });
})(jQuery);

$(document).ready(function () {
    $(".all_menu_tabs a").mouseover(function () {
        var text = $(this).text();
        var trimText = text.trim();

        // Mobile App Development
        if (trimText === "IPhone") {
            $("#DescTitleSrervice").text("iPhone App Development Company ");
            $("#DescTextSrervice").text(
                "Our expert iOS developers work with the latest tools and technologies to create user-friendly, user-centric, and visually powerful iPhone applications. We believe in turning your conceptual ideas into reality according to your specific requirements."
            );
        }
        if (trimText === "Android") {
            $("#DescTitleSrervice").text("Android App Development Company");
            $("#DescTextSrervice").text(
                "Our expert Android application developers and designers are dedicated to create engaging, user-centric, and visually stunning applications from the ground up. Leveraging the latest technologies and best practices, we believe in providing cutting-edge Android app development services that captivate your users."
            );
        }
        if (trimText === "Hybrid") {
            $("#DescTitleSrervice").text(
                "Hybrid Mobile App Development Company"
            );
            $("#DescTextSrervice").text(
                "Experts at Dqot Solutions are highly experienced in developing a feature-rich hybrid mobile app development that works well on both Android and iOS devices. We ensure to create an application exactly like your imagination."
            );
        }
        if (trimText === "React Native") {
            $("#DescTitleSrervice").text(
                "Popular React Native App Development Company"
            );
            $("#DescTextSrervice").text(
                "React Native is a famous cross-platform framework for developing native mobile apps using JavaScript. Dqot Solutions has a large number of expert react native developers who can build high performing and scalable mobile apps. This framework ensures to develop a cost-effective, high quality, iOS and Android Application simultaneously using the same codebase."
            );
        }
        if (trimText === "Flutter") {
            $("#DescTitleSrervice").text("Flutter App Development Company");
            $("#DescTextSrervice").text(
                "Dqot Solutions is a famous flutter application development company, by using Google’s famous cross-platform application. Using Fluter’s single codebase our developers can create a highly scalable and fast application for both Android and iOS devices."
            );
        }

        //  Web Development
        if (trimText === "React JS") {
            $("#DescTitleSrervice").text("React. js Web Development Company");
            $("#DescTextSrervice").text(
                "PHP is a famous computer language for creating websites. Dqot Solution works on the PHP language to create a website that works properly and loads quickly. These websites are user-friendly and are easy to use on computers, tablets, and phones."
            );
        }
        if (trimText === "PHP") {
            $("#DescTitleSrervice").text("PHP Website Development Company");
            $("#DescTextSrervice").text(
                "Our expert Android application developers and designers are dedicated to create engaging, user-centric, and visually stunning applications from the ground up. Leveraging the latest technologies and best practices, we believe in providing cutting-edge Android app development services that captivate your users."
            );
        }
        if (trimText === "CakePHP") {
            $("#DescTitleSrervice").text("Cake PHP Web development Company");
            $("#DescTextSrervice").text(
                "Cake PHP is a computer language used to create websites quickly, developers at Dqot Solution have expertise in this language. We use this website on client’s demand to create a secured, modern, and easy to use good website that loads fast. We make sure that the website developed on Cake PHP works well on all devices like phones, tablets, and computers."
            );
        }
        if (trimText === "WordPress") {
            $("#DescTitleSrervice").text("Wordpress Web development Company");
            $("#DescTextSrervice").text(
                "Doqt Solutions has expertise in developing visually appealing and functional websites using WordPress. Our developers are ready to build custom wordpress sites based on your business needs. We offer various services like search engine optimization services, and e-commerce integration."
            );
        }
        if (trimText === "Laravel") {
            $("#DescTitleSrervice").text("Laravel Website Development Company");
            $("#DescTextSrervice").text(
                "Dqot Solution has expertise in developing a high-performance website using Laravel, a powerful PHP framework. We create on-demand Laravel applications with various features, cutting-edge security, and scalable architecture. Our Laravel developers can enhance the digital presence of all the clients from e-commerce platforms to complex business systems. "
            );
        }

        if (trimText === "Codeigniter") {
            $("#DescTitleSrervice").text(
                "Codeigniter Website Development Company"
            );
            $("#DescTextSrervice").text(
                "Dqot Solutions can help you build scalable websites using CodeIgniter, a popular PHP framework. With our developers' expertise in CodeIgniter, we can build on-demand websites that fulfill the unique requirements of businesses. Our developers can provide user-friendly, secure, and high-performance solutions for all projects, from small websites to complex business applications."
            );
        }
        if (trimText === ".NET Development") {
            $("#DescTitleSrervice").text(".Net Website Development Company");
            $("#DescTextSrervice").text(
                "Experts at Dqot Solutions have expertise in building scalable and robust websites using Microsoft's .NET framework. We deliver highly secured and highly scalable website development solutions for e-commerce platforms to enterprise-level solutions. Believe in our expertise to gain your online presence with .NET development."
            );
        }
        if (trimText === "Node JS") {
            $("#DescTitleSrervice").text("Node.js Website Development Company");
            $("#DescTextSrervice").text(
                "Dqot Solution specializes in developing fast, scalable and efficient web applications using Node.js. Our expert developers impose the power of Node.js to create real-time, data-intensive websites and APIs. From e-commerce platforms to real-time data streaming solutions, we offer high-performance Node.js applications developed to your unique business needs."
            );
        }
        if (trimText === "Angular JS") {
            $("#DescTitleSrervice").text(
                "Angular.js Website Development Company"
            );
            $("#DescTextSrervice").text(
                "Dqot Solutions specializes in using the Angular framework to create reliable, scalable and user-friendly web applications. We deliver an outstanding experience through the use of experienced professionals, adherence to best practices, and a customer-focused approach to meeting business needs through the use of innovative Angular.js solutions."
            );
        }
        if (trimText === "Python") {
            $("#DescTitleSrervice").text("Python Website Development Company");
            $("#DescTextSrervice").text(
                "Experts at Dqot Solutions are highly experienced in developing a Python based website. Our developers ensure to deliver a highly scalable, secured, high-performance, and user-friendly website development solution with the help of the python language. Our developers use the latest updates given by Python to provide modern solutions to website development."
            );
        }
        if (trimText === "Shopify") {
            $("#DescTitleSrervice").text("Shopify Website Development Company");
            $("#DescTextSrervice").text(
                "Dqot Solutions is a leading company that builds online stores using Shopify. We help businesses create beautiful, easy-to-use websites to sell products through their digital presence. Our team of experts designs, sets up, and customizes Shopify stores to fit each client's unique needs."
            );
        }

        //  Web Development
        if (trimText === "React JS") {
            $("#DescTitleSrervice").text("React. js Web Development Company");
            $("#DescTextSrervice").text(
                "PHP is a famous computer language for creating websites. Dqot Solution works on the PHP language to create a website that works properly and loads quickly. These websites are user-friendly and are easy to use on computers, tablets, and phones."
            );
        }
        if (trimText === "PHP") {
            $("#DescTitleSrervice").text("PHP Website Development Company");
            $("#DescTextSrervice").text(
                "Our expert Android application developers and designers are dedicated to create engaging, user-centric, and visually stunning applications from the ground up. Leveraging the latest technologies and best practices, we believe in providing cutting-edge Android app development services that captivate your users."
            );
        }
        if (trimText === "CakePHP") {
            $("#DescTitleSrervice").text("Cake PHP Web development Company");
            $("#DescTextSrervice").text(
                "Cake PHP is a computer language used to create websites quickly, developers at Dqot Solution have expertise in this language. We use this website on client’s demand to create a secured, modern, and easy to use good website that loads fast. We make sure that the website developed on Cake PHP works well on all devices like phones, tablets, and computers."
            );
        }
        if (trimText === "Wordpress") {
            $("#DescTitleSrervice").text("Wordpress Web development Company");
            $("#DescTextSrervice").text(
                "Doqt Solutions has expertise in developing visually appealing and functional websites using WordPress. Our developers are ready to build custom wordpress sites based on your business needs. We offer various services like search engine optimization services, and e-commerce integration. "
            );
        }
        if (trimText === "WordPress") {
            $("#DescTitleSrervice").text("Wordpress Web development Company");
            $("#DescTextSrervice").text(
                "Doqt Solutions has expertise in developing visually appealing and functional websites using WordPress. Our developers are ready to build custom wordpress sites based on your business needs. We offer various services like search engine optimization services, and e-commerce integration."
            );
        }
        if (trimText === "Laravel") {
            $("#DescTitleSrervice").text("Laravel Website Development Company");
            $("#DescTextSrervice").text(
                "Dqot Solution has expertise in developing a high-performance website using Laravel, a powerful PHP framework. We create on-demand Laravel applications with various features, cutting-edge security, and scalable architecture. Our Laravel developers can enhance the digital presence of all the clients from e-commerce platforms to complex business systems. "
            );
        }

        //  Designing
        if (trimText === "Android App Design") {
            $("#DescTitleSrervice").text(
                "Android App Design Development Company"
            );
            $("#DescTextSrervice").text(
                "Dqot Solutions is a famous Android App Design and Development Company. Designers at dqot Solutions can create designs for different Android devices like mobiles, wider screens like tablets, computers, laptops, and wearables like smartwatches. Our designers are experts in developing Android App Designs with different design tools like Figma, Sketch, Zeplin, and Wondershare Mockitt."
            );
        }
        if (trimText === "iOS App Design") {
            $("#DescTitleSrervice").text("iOS App Design Development Company");
            $("#DescTextSrervice").text(
                "Doqt Solutions is a famous iOS app development and development company. Apple Watch, Mac, iPad and iPhone are just a few of the iOS devices our designers can design for. They specialize in creating user-friendly iOS app designs with programs such as Marvel, Zeplin, Sketch and Figma. The designers at dqot Solutions specialize in stylish and user-friendly products that follow Apple’s design requirements. Their expertise in iOS app development allows them to realize your app concepts, assuring a smooth and enjoyable experience across all Apple devices."
            );
        }
        if (trimText === "Web Design") {
            $("#DescTitleSrervice").text("Web Design Development Company");
            $("#DescTextSrervice").text(
                "Dqot Solutions has expert website designers who are proficient in various computer languages like PHP, laravel, React,js, Word press, .NET, Node,js, and many more. Our designers ensure to create a scalable and easy-to-use and fast loading website based on the requirements of the businesses."
            );
        }
        if (trimText === "Logo Design") {
            $("#DescTitleSrervice").text("Logo Design Services");
            $("#DescTextSrervice").text(
                "Logo Designers at Dqot Solutions are expert in providing professional logo design services. We provide unique and eye-catching logo design services for your brand. Our designers make sure to work closely with you to understand your business perspective and design an innovative logo that can connect with your target audience."
            );
        }
        if (trimText === "Video Design") {
            $("#DescTitleSrervice").text("Video Design Company");
            $("#DescTextSrervice").text(
                "Dqot Solutions provides the best video design services as per the requirements of the businesses. We have a specialization in creating engaging videos for the business. Our designers are expert in using graphics, animations, and effects to bring your brand message to life."
            );
        }
        if (trimText === "Graphics Design") {
            $("#DescTitleSrervice").text("Graphic Design Company");
            $("#DescTextSrervice").text(
                "Graphic Designers at Dqot Solutions have an expertise in tools like Adobe Photoshop, Illustrator, Indesign to deliver the best experience to our partnered businesses. Designers are experts in working with digital pens to create accurate on-demand designs. "
            );
        }

        //  Ecommerce
        if (trimText === "SEO (Search Engine Optimization)") {
            $("#DescTitleSrervice").text(
                "SEO (Search Engine Optimization) Service Provider"
            );
            $("#DescTextSrervice").text(
                "Dqot Solution is a leading SEO provider that can enhance the online visibility of your brand. Our SEO experts ensure to improve the ranking of your website with proper on-page and off-page optimization. We make sure to make your website SEO-friendly to increase the brand value of your business."
            );
        }
        if (trimText === "SMO ( Social Media Optimization )") {
            $("#DescTitleSrervice").text("SMO ( Social Media Optimization )");
            $("#DescTextSrervice").text(
                "Looking for experts to manage your brand's social media pages and increase social engagement? Dqot Solutions has got you covered. We provide Social Media Optimization Services to increase the engagement and reach of your brand content to your targeted audience."
            );
        }
        if (trimText === "Google Ads") {
            $("#DescTitleSrervice").text("Google Ads Services");
            $("#DescTextSrervice").text(
                "Google Ads is the best technique to reach your targeted market and increase the sale of your brand. Dqot Solutions can provide you with trusted experts to run Google Ads as it requires significant time and skills to produce a competitive strategy for the marketplace."
            );
        }
        if (trimText === "Meta Ads") {
            $("#DescTitleSrervice").text("Meta Ads Service Provider");
            $("#DescTextSrervice").text(
                "Meta Ads Services providers like Dqot Solutions help businesses promote their products on Instagram, Facebook, and other Meta Platforms. Our experts have relevant experience in creating compelling ad campaigns filtered to your target audience. We optimize ads for better engagement, conversions, and reach to increase the real results."
            );
        }
        if (trimText === "Branding") {
            $("#DescTitleSrervice").text("Branding Services");
            $("#DescTextSrervice").text(
                "Branding services help businesses create a strong, recognizable brand identity. Professionals at Dqot Solutions develop a unique brand name, logo, color scheme, and messaging. We ensure brand consistency across all marketing materials. Strong branding helps companies stand out, connect with customers, and build brand loyalty."
            );
        }
        if (trimText === "Content Marketing") {
            $("#DescTitleSrervice").text("Content Marketing Services");
            $("#DescTextSrervice").text(
                "Nowadays, content marketing is bringing a great impact on the popularization of the brands. Content Marketing Experts at Dqot Solutions not only understands the importance of content marketing but use unique approaches to use content marketing to attract the highest-quality leads possible. "
            );
        }
        if (trimText === "Ecommerce SEO") {
            $("#DescTitleSrervice").text("Ecommerce SEO Services");
            $("#DescTextSrervice").text(
                "Every brand wants to showcase their products on the top searches and shopping results. SEO experts at Dqot Solutions can help you in featuring your products to the natural searches of Google. Knowing how popular Ecommerce websites like Amazon works, we optimize ecommerce websites  to achieve higher sales volumes."
            );
        }

        // Maintenance and Testing
        if (trimText === "Android App Maintenance") {
            $("#DescTitleSrervice").text("Android App Maintenance Services");
            $("#DescTextSrervice").text(
                "Professionals at Dqot Solutions are experts in maintaining Android Application. We make sure to keep your application updated with the latest technology and running smoothly. Moreover we fix the bugs and keep the application compatible with the current version of Android applications."
            );
        }
        if (trimText === "iOS App Maintenance") {
            $("#DescTitleSrervice").text("iOS App Maintenance Services");
            $("#DescTextSrervice").text(
                "It is important to provide regular maintenance to the iOS application to ensure security and the overall user experience. Developers at Dqot Solutions provide ongoing support  in fixing bugs and issues. The application must be updated based on the current iOS versions to keep it running smoothly."
            );
        }
        if (trimText === "Website Maintenance") {
            $("#DescTitleSrervice").text("Website Maintenance Services");
            $("#DescTextSrervice").text(
                "Dqot Solutions has a specialization in providing website maintenance services for all the frameworks like PHP, Node.js, React.js, Word press, and many more. It is crucial to regularly update the website to keep it running smoothly and for the fast loading of the websites to improve user-experience."
            );
        }
        if (trimText === "Manual Application Testing") {
            $("#DescTitleSrervice").text("Manual Application Testing ");
            $("#DescTextSrervice").text(
                "Manual Application Testing is very important as it rectifies all the bugs and issues before it reaches the market. Testers at Dqot Solutions are specialized in manual testing and have specialization in providing bug free applications to the clients."
            );
        }
        if (trimText === "Manual Web Testing") {
            $("#DescTitleSrervice").text("Manual Web Testing");
            $("#DescTextSrervice").text(
                "Testing a website is important to reduce its leading time and to make sure it runs smoothly. Web Testers at Dqot Solutions are experts in identifying all the bugs and get it rectified before reaching the target market of the brand."
            );
        }
        if (trimText === "Automation Testing") {
            $("#DescTitleSrervice").text("Automation Testing Services");
            $("#DescTextSrervice").text(
                "Testing can also be automated with the help of tools and scripts to automatically test the softwares without the need of manual testing. Dqot Solutions can provide you the best services for automation testing to improve efficiency of testing over manual testing."
            );
        }

        // Software Development
        if (trimText === "Custom CRM") {
            $("#DescTitleSrervice").text(
                "Custom CRM Software Development Services"
            );
            $("#DescTextSrervice").text(
                "Dqot Solutions can provide custom CRM Software Development Services to build customized customer relationship management systems. Our developers create a CRM solution specific to your business needs. This specialized software helps manage sales, interaction, customer data, and support more effectively than generic CRM tools."
            );
        }
        if (trimText === "SaaS Software") {
            $("#DescTitleSrervice").text("SaaS Software Development Services");
            $("#DescTextSrervice").text(
                "Dqot Solutions has an expertise in developing a web based SaaS software to provide an affordable, scalable solution with automatic updates and maintenance included. Moreover, our developers create cloud-hosted applications that can be accessed from any device with an internet connection."
            );
        }
        if (trimText === "HR Management") {
            $("#DescTitleSrervice").text("HR Management Software Development");
            $("#DescTextSrervice").text(
                "Developers at Dqot Solutions can create customized tools to manage the human resource process efficiently. HR Management application is used to manage employee data, recruitment, benefits, payroll, training, and performance reviews. These tools improve efficiency, automate HR tasks, and provide a centralized HR management system."
            );
        }
        if (trimText === "Inventory Management") {
            $("#DescTitleSrervice").text(
                "Inventory Management Software Development"
            );
            $("#DescTextSrervice").text(
                "Dqot Solutions develops custom Inventory Management Software to manage inventory tracking. This software monitors stock levels, locations, and movements for your business. It automates receiving, restocking, and ordering to maximize efficiency. Dqot Solutions' inventory management tools prevent stockouts and overstocking issues."
            );
        }
        if (trimText === "Custom Mobile App") {
            $("#DescTitleSrervice").text(
                "Custom Mobile App Development Company"
            );
            $("#DescTextSrervice").text(
                "Experts at Dqot Solutions are experienced in developing a Custom Mobile App Development. We can create an innovative and a scalable application on various platforms like Flutter,  React Native, and React.js. We provide app Android, iOS, and native mobile app development solutions. "
            );
        }
        if (trimText === "Custom Web") {
            $("#DescTitleSrervice").text("Custom Web Development Company");
            $("#DescTextSrervice").text(
                "Our web developers are experts in creating a scalable and user-friendly website as per your requirement. Our experts have a specialization in various languages like wordpress, PHP, Laravel, and all the languages as per your requirements. We can provide website development solutions from a basic website to an advanced website. "
            );
        }
        if (trimText === "Web To Print Software") {
            $("#DescTitleSrervice").text(
                "Web To Print Software Development Company"
            );
            $("#DescTextSrervice").text(
                "A Web to Print Software Development Company like Dqot Solutions creates online design and ordering platforms. Their software allows customers to customize and order printed materials like business cards, marketing collateral, and brochures. Web to Print solutions streamline the ordering process and automate print workflows."
            );
        }

        //  Sports and Gaming
        if (trimText === "Fantasy Sports App") {
            $("#DescTitleIndustries").text(
                "Fantasy Sports App Development Company"
            );
            $("#DescTextIndustries").text(
                "Dqot Solutions is a leading Fantasy Sports Application Development Company. We ensure to provide the best Sports Application with robust features integrated in the application to improve the user experience and provide the best virtual gaming experience to them. "
            );
        }
        if (trimText === "Fantasy Cricket App") {
            $("#DescTitleIndustries").text(
                "Fantasy Cricket App Development Game"
            );
            $("#DescTextIndustries").text(
                "Nowadays, almost all people are cricket lovers. So, Dqot Solutions can provide you with cutting-edge solutions to build a feature-rich fantasy cricket app development. Our developers ensure to turn your imaginary cricket application into reality."
            );
        }
        //  if(trimText === "Color Prediction Game") {
        //   $('#DescTitleIndustries').text("Color Prediction Game Development Company");
        //   $('#DescTextIndustries').text("Dqot Solutions is one of the best Colour Prediction Game Development Company in the UK, USA, India, Dubai, Kuwait, and Saudi Arabia. Our developers are expert in creating a Color Prediction game application for both Android and iOS devices. We make sure to use modern technology to provide smooth functioning to the gamers.");
        //  }
        if (trimText === "Sports Streaming App") {
            $("#DescTitleIndustries").text("Sports Streaming App");
            $("#DescTextIndustries").text(
                "Dqot Solutions is an innovative sports Streaming Application service provider. Their apps enable cross-platform streaming of events, highlights, news and presentations. For all sports fans gaming apps developed by us offer a multi-streaming experience with multiplayer, DVR, and connectivity capabilities."
            );
        }
        if (trimText === "Sports Scorecard Web App") {
            $("#DescTitleIndustries").text(
                "Sports Scorecard Web App Development"
            );
            $("#DescTextIndustries").text(
                "Dqot Solutions develops innovative Sports Scorecard Web Apps to track game scores. Their apps provide real-time scoring updates across multiple sports. The scorecards include comprehensive stats, player info, and game highlights, giving fans an engaging way to follow their favorite teams."
            );
        }
        if (trimText === "Sports News Web App") {
            $("#DescTitleIndustries").text("Sports News Web App Development");
            $("#DescTextIndustries").text(
                "Developers at Dqot Solutions can create an application for Android and iOS devices. Our developers are experts in developing a Sports news application on different frameworks like Flutter, React Native, and React.js. These applications provide "
            );
        }
        if (trimText === "AR/ VR Game App") {
            $("#DescTitleIndustries").text("AR/ VR Game App");
            $("#DescTextIndustries").text(
                "Dqot Solutions has an expertise in building an AR/VR Gaming Application. We can create various types ofAR/VR games for you like Sports, Adventure, Exergames, and Role Playing. Our developers make sure to develop a hybrid application that is accessible for both iOS and Android Users. "
            );
        }
        if (trimText === "3D Game App") {
            $("#DescTitleIndustries").text("3D Game App Development");
            $("#DescTextIndustries").text(
                "Dqot Solutions is a leading mobile and web games software development company. Our developers are experts in various animation gaming platforms like Blender, Unity, Maya, and Max. We make sure to build a gaming application exactly like your expectations."
            );
        }

        //Healthcare and Fitness
        if (trimText === "Telemedicine App") {
            $("#DescTitleIndustries").text(
                "Telemedicine App Development Company"
            );
            $("#DescTextIndustries").text(
                "Developers at Dqot Solutions are experts in developing cutting-edge solutions for telemedicine app development. These applications provide various features to the patients and the doctors to streamline the process. We can build healthcare apps with modern UI and technologies."
            );
        }
        if (trimText === "Pharmacy App") {
            $("#DescTitleIndustries").text("Pharmacy App Development ");
            $("#DescTextIndustries").text(
                "Pharmacy Application plays an important role in the modern times, as these applications provide a digital excess to all types of pharmacy needs. Specialists at Dqot Solutions can develop a robust Pharmacy Application."
            );
        }
        if (trimText === "Wearable Fitness Tracking App") {
            $("#DescTitleIndustries").text(
                "Wearable Fitness Tracking App Development"
            );
            $("#DescTextIndustries").text(
                "Experts at Dqot Solutions are specialized in developing a Wearable Fitness Tracking Application. Fitness Tracking Apps developed by us can track the heart rate, blood pressure, and various other things at just a one click."
            );
        }
        if (trimText === "Diet and Nutrition App") {
            $("#DescTitleIndustries").text(
                "Diet and Nutrition App Development"
            );
            $("#DescTextIndustries").text(
                "Every other person is looking for a proper diet plan to stay healthy and fit. So, Dqot Solutions has experts who can create an application for diet and nutrition. Here doctors will be able to suggest the best diet plan based on the health conditions of the person."
            );
        }

        //On Demand
        if (trimText === "On Demand Grocery Delivery") {
            $("#DescTitleIndustries").text(
                "On Demand Grocery Delivery Application Development"
            );
            $("#DescTextIndustries").text(
                "Dqot Solutions has proficient developers who can develop On Demand Grocery Delivery Application. This application allows people to order groceries online and get it delivered at home conveniently and quickly. "
            );
        }
        if (trimText === "On Demand Taxi Booking") {
            $("#DescTitleIndustries").text(
                "On Demand Taxi Booking App Development"
            );
            $("#DescTextIndustries").text(
                "Taxi Booking Application is the most used application as it allows people to book taxis online for any location without moving from one place to another. Experts at Dqot Solutions are proficient in developing On Demand Taxi Booking Application to resolve the traveling problems of the people. "
            );
        }
        if (trimText === "On Demand House Cleaning") {
            $("#DescTitleIndustries").text(
                "On Demand House Cleaning App Development"
            );
            $("#DescTextIndustries").text(
                "Dqot Solution develops on demand house cleaning applications that allow customers to book house cleaning services virtually. You can book cleaners and have them at home to clean your space and make it look beautiful. We make sure to develop an application with multiple features integrated in the house cleaning application. "
            );
        }
        if (trimText === "On Demand Doctor App") {
            $("#DescTitleIndustries").text("On Demand Doctor App Development");
            $("#DescTextIndustries").text(
                "Experts at Dqot Solutions have an expertise in developing an on demand doctor application that allows patients to consult with the doctors virtually. Our developers ensure to incorporate various features like the tracking of your appointment, availability of the slots, and many more features. "
            );
        }
        if (trimText === "On Demand Food Delivery") {
            $("#DescTitleIndustries").text(
                "On Demand Food Delivery App Development"
            );
            $("#DescTextIndustries").text(
                "Dqot solutions specializes in developing on-demand food delivery applications. These apps connect customers with local restaurants, allowing them to browse menus, place orders, and pay online. With a user-friendly interface and seamless integration, these apps provide a convenient food ordering experience."
            );
        }
        if (trimText === "On Demand Car Wash App") {
            $("#DescTitleIndustries").text(
                "On Demand Car Wash App Development"
            );
            $("#DescTextIndustries").text(
                "Dqot Solutions has an expertise in building on-demand car wash applications. These applications provide people with various options of the car washing agents allowing them to review their previous works. We can build a feature rich car washing application to provide convenience in cleaning cars. "
            );
        }
        if (trimText === "On Demand Laundry App") {
            $("#DescTitleIndustries").text("On Demand Laundry App Development");
            $("#DescTextIndustries").text(
                "We can promise to build a feature rich on demand laundry app development. These applications connect customers with the laundry vendors from their nearby area to ensure flexibility in convenience in booking laundry services virtually."
            );
        }
        if (trimText === "On Demand Tutor Finder") {
            $("#DescTitleIndustries").text(
                "On Demand Tutor Finder App Development"
            );
            $("#DescTextIndustries").text(
                "Dqot Solutions can develop a modern on-demand tutor finder application to streamline the process for the customers. This application can allow customers to find the best tutor for themselves. You can even connect with the tutors and clarify your doubts with this application."
            );
        }
        if (trimText === "On Demand Plumber Finder") {
            $("#DescTitleIndustries").text(
                "On Demand Plumber Finder App Development"
            );
            $("#DescTextIndustries").text(
                "Developers at Dqot Solutions are proficient in developing on-demand plumber finder applications. These applications allow users to connect with the plumbers near their location, allowing them to search for services they are providing and they can even check their reviews."
            );
        }
        if (trimText === "On Demand Car Rental App") {
            $("#DescTitleIndustries").text(
                "On Demand Car Rental App Development"
            );
            $("#DescTextIndustries").text(
                "Dqot solutions develops on-demand car rental apps that allow users to rent vehicles conveniently through their smartphones. These apps provide a seamless experience, enabling users to search for available cars, book rentals, and unlock vehicles with their phones. With real-time tracking and secure payment gateways, these apps offer a hassle-free car rental solution for modern mobility needs."
            );
        }
        if (trimText === "On Demand Renewable Energy Software") {
            $("#DescTitleIndustries").text(
                "On Demand Renewable Energy Software Development"
            );
            $("#DescTextIndustries").text(
                "Dqot Solutions builds on-demand renewable energy apps that allow users to access real-time racking, analysis, and  optimization of solar, wing, and other renewable energy. The advanced algorithms used in these platforms maximize energy generations and efficiency. "
            );
        }

        //Top Industries
        if (trimText === "Real Estate App") {
            $("#DescTitleIndustries").text("Real Estate App Development");
            $("#DescTextIndustries").text(
                "Dqot Solutions can develop real estate applications with robust features like various property displays, nearby location, secured payments, and virtual calling facilities. These apps provide a seamless experience, to the people looking for a property to buy or on a rent."
            );
        }
        if (trimText === "Transport Automotive") {
            $("#DescTitleIndustries").text(
                "Transport Automotive App Development"
            );
            $("#DescTextIndustries").text(
                "Developers at Dqot Solutions can build Transport Automotive App Development. These applications streamline logistics and fleet management with real-time vehicle tracking and route optimization. We also ensure to build user-friendly apps that have features like vehicle maintenance scheduling."
            );
        }
        if (trimText === "Crypto Currency") {
            $("#DescTitleIndustries").text("Cryptocurrency App Development");
            $("#DescTextIndustries").text(
                "Dqot Solutions is a leading crypto currency app development company. We ensure to build an application that provides successful and scalable app development solutions to the customers. This application is beneficial in various ways like it increases brand awareness, easiest & faster transactions, highly secure and scalable infrastructure."
            );
        }
        if (trimText === "Food and Restaurant") {
            $("#DescTitleIndustries").text(
                "Food and Restaurant App Development Company"
            );
            $("#DescTextIndustries").text(
                "Dqot Solutions is a leading food and restaurant app development company that connects customers with various nearby restaurants, it also provides menus, delivery facilities, and various food options to the customers. We make sure to develop a modern UI design for the applications to make it user-friendly."
            );
        }
        if (trimText === "Education") {
            $("#DescTitleIndustries").text("Education App Development Company");
            $("#DescTextIndustries").text(
                "Dqot Solutions is a famous Education App Development Company. We make sure to incorporate various features like doubt solving sessions, live classes, chatbots to connect with the teachers. Moreover, we prioritize making the user-interface scalable and user-friendly."
            );
        }
        if (trimText === "Banking and Finance") {
            $("#DescTitleIndustries").text(
                "Banking and Finance App Development Company"
            );
            $("#DescTextIndustries").text(
                "Developers at Dqot Solutions have an expertise in developing banking and finance applications. These apps provide real-time tracking of our personalized account, access transactions history, and secured payment facilities. The user-friendly interface and robust backend ensure a seamless experience for banking and finance applications."
            );
        }
        if (trimText === "Media and Entertainment") {
            $("#DescTitleIndustries").text(
                "Media and Entertainment App Development Company"
            );
            $("#DescTextIndustries").text(
                "Developers at Dqot Solutions are experts in developing media and entertainment applications with various features like movie streaming, series streaming, multiple options, multiple payment options to improve the experience of the customers. Our developers make sure to make user-friendly UI for the media and entertainment applications."
            );
        }
        if (trimText === "Travel App") {
            $("#DescTitleIndustries").text("Travel App Development Company");
            $("#DescTextIndustries").text(
                "Dqot Solutions has specialization in Travel App Development. We make sure to build an application that provides multiple features to the users like weather forecasting, booking, navigation, trip reviews, and many more. Our developers can create a scalable and user-friendly application."
            );
        }
        if (trimText === "Smart Home Manager App") {
            $("#DescTitleIndustries").text(
                "Smart Home Manager App Development Company"
            );
            $("#DescTextIndustries").text(
                "Dqot Solutions is a famous Smart Home Manager App Development Company. Our developers make sure to build an application that provides features to manage the modern homes with innovative designs and equipment."
            );
        }
        if (trimText === "Block Chain") {
            $("#DescTitleIndustries").text(
                "BlockChain App Development Company"
            );
            $("#DescTextIndustries").text(
                "Dqot solutions is a leading blockchain app development company. Our experts make sure to build secure, decentralized applications leveraging blockchain technology for various industries. Their blockchain apps ensure data transparency, immutability, and trustless transactions."
            );
        }
        if (trimText === "Astrology App") {
            $("#DescTitleIndustries").text("Astrology App Development Company");
            $("#DescTextIndustries").text(
                "Experts at Dqot solutions are experts in developing astrology applications. They build user-friendly apps for horoscope readings, zodiac predictions, and astrological consultations. Their apps provide personalized astrological insights to users."
            );
        }

        if (trimText === "Logistic App") {
            $("#DescTitleIndustries").text("Logistic App Development");
            $("#DescTextIndustries").text(
                "Dqot Solutions has expertise to develop cross platform logistic applications. These applications allow customers to track the location of the vehicle feature via GPS location, parcel booking facilities for the customers, and many more features available. User interface of the application developed by us is modern and user-friendly."
            );
        }
        if (trimText === "Dating App") {
            $("#DescTitleIndustries").text("Dating App Development");
            $("#DescTextIndustries").text(
                "Our experts at Dqot Solutions are proficient in building a Dating Application with multiple features. This application allows customers to connect with each other with multiple options like video and voice calling to understand the person well. We make sure to make the user interface innovative and quirky that connect with the theme of the dating application."
            );
        }
        if (trimText === "Social Networking") {
            $("#DescTitleIndustries").text("Social Networking App Development");
            $("#DescTextIndustries").text(
                "Dqot Solutions can help you to create social networking applications like Facebook, Instagram and many more. These applications allow you to connect with various new people and connect with friends from far off places. These applications can also help customers to increase their business."
            );
        }
        if (trimText === "Ecommerce Web App") {
            $("#DescTitleIndustries").text("Ecommerce Web App Development");
            $("#DescTextIndustries").text(
                "Dqot Solutions is a leading software development company that has expertise in developing Ecommerce Web Applications with scalable and user friendly interface. We make sure to build an ecommerce application like Amazon, Flipkart that has robust features like multiple and secured payments."
            );
        }

        var swiper = new Swiper(".home_portfolio", {
                loop: !0,
                autoplay: { delay: 1500, disableOnInteraction: !1 },
                pagination: { el: ".swiper-pagination", clickable: !0 },
                breakpoints: {
                    0: { slidesPerView: 1 },
                    640: { slidesPerView: 2 },
                    768: { slidesPerView: 2 },
                    1024: { slidesPerView: 3 },
                },
                navigation: {
                    nextEl: ".swiper-button-next",
                    prevEl: ".swiper-button-prev",
                },
            }),
            swiper = new Swiper(".industry_mobile_swiper", {
                slidesPerView: 2,
                spaceBetween: 10,
                loop: !0,
                autoplay: { delay: 2500, disableOnInteraction: !1 },
                pagination: { el: ".swiper-pagination", clickable: !0 },
                breakpoints: {
                    0: { slidesPerView: 2 },
                    640: { slidesPerView: 2 },
                    768: { slidesPerView: 3 },
                    1024: { slidesPerView: 3 },
                },
            }),
            swiper = new Swiper(".co-working-review-slider", {
                slidesPerView: 4,
                spaceBetween: 10,
                loop: !0,
                autoplay: { delay: 2500, disableOnInteraction: !1 },
                // pagination: { el: ".swiper-pagination", clickable: !0 },
                breakpoints: {
                    0: { slidesPerView: 2 },
                    640: { slidesPerView: 2 },
                    768: { slidesPerView: 3 },
                    992: { slidesPerView: 2 },
                    1200: { slidesPerView: 3 },
                },
            });

        //  AI Based Application
        if (trimText === "Trip Planner App") {
            $("#DescTitleIndustries").text("Trip Planner App Development");
            $("#DescTextIndustries").text(
                "Developers at Dqot Solutions are experts in developing a trip planning application. This trip planning application has various features like travel booking, hotel booking, destination to visit, and nearby tourist places. We can build a cross platform trip planning application that works on both iOS and Android Apps."
            );
        }
        if (trimText === "Face Recognition App") {
            $("#DescTitleIndustries").text("Face Recognition App Development");
            $("#DescTextIndustries").text(
                "Dqot solutions develops cutting-edge face recognition apps. These apps support advanced computer vision and machine learning algorithms. They enable secure authentication, surveillance, and personalized user experiences."
            );
        }
        if (trimText === "Chatbot") {
            $("#DescTitleIndustries").text("Chatbots Development Services");
            $("#DescTextIndustries").text(
                "Dqot Solutions is a no1 Chatbot development company. Chatbots allow users to connect with the companies or brands to resolve or clarify their doubts. We make sure to make the process of connecting with the brands convenient and faster."
            );
        }

        //Technologies
        if (trimText === "Front End Development") {
            $("#DescTitleIndustries").text("Front End Development Services");
            $("#DescTextIndustries").text(
                "We at Dqot Solutions can provide you with Front End Development Services for the websites and the applications. Our developers are well versed with various languages like Wordpress, HTML, CSS, JavaScript, JSX, React.js, Node,js and TypeScript."
            );
        }
        if (trimText === "Backend Development") {
            $("#DescTitleIndustries").text("Backend Development Services");
            $("#DescTextIndustries").text(
                "Experts at Dqot Solutions are proficient in backend development for the websites and the application. We can do backend for both Android and iOS applications. Our developers are proficient in frameworks like Laravel, React NAtive, Flutter, Django, CakePHP, and many more."
            );
        }
        if (trimText === "Cloud Computing") {
            $("#DescTitleIndustries").text("Cloud Computing Services");
            $("#DescTextIndustries").text(
                "Dqot solutions offers robust cloud computing services. They provide scalable and secure cloud infrastructure solutions. Their services include cloud migration, cloud app development, and cloud management. Supporting leading cloud platforms for seamless cloud adoption."
            );
        }
        if (trimText === "Database Management") {
            $("#DescTitleIndustries").text(
                "Database Management Development Services"
            );
            $("#DescTextIndustries").text(
                "Dqot Solutions has an expertise in developing a database for the management of the various works. These databases can be used to manage the work of the Hr and it also streamlines the data of the company or any brand. These databases are used to manage the data in various fields."
            );
        }
        if (trimText === "Salesforce") {
            $("#DescTitleIndustries").text("Salesforce Development Services");
            $("#DescTextIndustries").text(
                "Dqot solutions offers comprehensive Salesforce development services. They customize and integrate Salesforce CRM solutions for businesses. Their services include Salesforce app development, data migration, and process automation. Driving efficiency and productivity through tailored Salesforce implementations."
            );
        }

        //Hire Dedicated
        if (trimText === "Hire Flutter Developer") {
            $("#DescTitleHire").text("Hire Flutter Developer");
            $("#DescTextHire").text(
                "Hire Flutter Developer from Dqot Solutions to get app development services from us. Our service providers are available in various countries like Dubai, UAE, Kuwait, India, the UK, USA, and various other countries."
            );
        }
        if (trimText === "Hire WordPress Developer") {
            $("#DescTitleHire").text("Hire Wordpress Developer");
            $("#DescTextHire").text(
                "Wordpress Developers at Dqot Solution are experts in providing development services to various countries like India, UAE, Kuwait, Dubai, CHia, Chicago, and more countries. Our developers can provide development services for iOS, Android, and cross platform app development."
            );
        }
        if (trimText === "Hire IPhone App Developer") {
            $("#DescTitleHire").text("Hire iOS App Developer");
            $("#DescTextHire").text(
                "Dqot Solutions promises you to provide the opportunity to hire talented iOS app developers. Our developers can provide robust development solutions for both iOS applications and websites. We provide development solutions for almost all countries like Kuwait, Saudi Arabia, UAE, Dubai, aUK, USA, India, CHina, Spain and many more."
            );
        }
        if (trimText === "Hire Mobile App Developer") {
            $("#DescTitleHire").text("Hire Android App Developer");
            $("#DescTextHire").text(
                "Dqot Solutions provides you an opportunity to hire Android App Developers for India, Dubai, UAE, Kuwait, Spain, China, USA, UK, and many other countries. Our developers can provide website and app development solutions for Android users."
            );
        }
        if (trimText === "Hire Digital Marketer") {
            $("#DescTitleHire").text("Hire Digital Marketer");
            $("#DescTextHire").text(
                "Hire Digital Marketer from Dqot Solutions to get the engagement on your website and application. We provide digital marketing services in countries like India, UK, USA, Kuwait, Dubai, UAE, Saudi Arabia, and many more."
            );
        }

        if (trimText === "Angular JS Hire Developer") {
            $("#DescTitleHire").text("Hire Angular JS Developer");
            $("#DescTextHire").text(
                "Angular JS Developers at Dqot Solutions have a strong expertise in Javascript, Typescript, and an Angular framework. Our Angular JS developers are highly experienced in feature-rich web development solutions. Our developers provide web development services in various countries like Dubai, Kuwait, India, and many more."
            );
        }
        if (trimText === "Hire Codelgniter Developer") {
            $("#DescTitleHire").text("Hire Codeigniter Developer");
            $("#DescTextHire").text(
                "Dqot Solutions provide multi skilled Codeigniter developers to provide the best web development services. Our Codeigniter developers are expert in using powerful features of thi PHp framework, ensuring efficient development process and delivery of high quality solutions in countries like the UK, USA, Kuwait, Dubia, UAE, Saudi Arabia, and many more."
            );
        }
        if (trimText === "Hire Node JS Developer") {
            $("#DescTitleHire").text("Hire Node JS Developer");
            $("#DescTextHire").text(
                "Hire Node Js Developers from Dqot Solution a leading software company. We can help you to create cutting -edge web development solutions by breaking the power of server-side javascript with our Skilled Nodejs developers. We provide development solutions for India, UK, USA, Kuwait, China, Dubai, Brazil, Philippines, Canada, and many more."
            );
        }
        if (trimText === "Hire .NET Developer") {
            $("#DescTitleHire").text("Hire .NET Developer");
            $("#DescTextHire").text(
                "Dqot Solutions has highly experienced and skilled .NET developers to fulfill the app development services as per your needs. Our developers are experienced working with the latest Microsoft technologies, including .NET Core, .NET Framework, ASP.NET, Azure and Entity Framework."
            );
        }
        if (trimText === "Hire Python Developer") {
            $("#DescTitleHire").text("Hire Python Developer");
            $("#DescTextHire").text(
                "Hire Python Developers from Dqot Solutions to get the feature-rich development solutions. Our developers are well versed with using the latest technologies, we provide services in various countries like USA, UK, UAE, Canada, Brazil, and many more."
            );
        }
        if (trimText === "Hire Django Developer") {
            $("#DescTitleHire").text("Hire Django Developer");
            $("#DescTextHire").text(
                "Dqot Solutions can provide web development solutions to China, Dubai, Brazil, Philippines, Netherlands, London. Our Django developers provide the best feature-rich solutions for the web development hassle free."
            );
        }
        if (trimText === "Hire Drupal Developer") {
            $("#DescTitleHire").text("Hire Drupal Developer");
            $("#DescTextHire").text(
                "Dqot Solutions has highly experienced Drupal Developers. We have expertise in developing scalable, robust, and content-rich websites. We provide web development solutions to enhance the visibility of your business."
            );
        }
        if (trimText === "Hire Magento Developer") {
            $("#DescTitleHire").text("Hire Magento Developer");
            $("#DescTextHire").text(
                "Magento Developers are experts and highly experienced in developing web applications. We have expertise in developing feature-rich, saleable, and robust applications to enhance the digital experience of your business. We provide development solutions across the world."
            );
        }

        //Web App Cloning
        if (trimText === "App Like Dream 11") {
            $("#DescTitleHire").text("App Like Dream 11");
            $("#DescTextHire").text(
                "The market of Fantasy Sports is growing with the increase in the excitement of the people for the sports. Developers at Dqot Solutions make sure to build an app like Dream 11 for the Fantasy Sports business. "
            );
        }
        if (trimText === "App Like Uber") {
            $("#DescTitleHire").text("App Like Uber");
            $("#DescTextHire").text(
                "Experts at Dqot Solutions can build a taxi booking application like uber. Recently, the market of taxi booking applications is rising due to the higher demand of the taxis in the market. We make sure to provide features like multiple payment options, contact details of the driers, availability of the driver."
            );
        }
        if (trimText === "App Like Zomato") {
            $("#DescTitleHire").text("App Like Zomato");
            $("#DescTextHire").text(
                "Dqot Solutions has experts who can develop a food booking application like Zomato. These applications allow customers to check the menus of the various restaurants and get them delivered at home easily and conveniently. "
            );
        }

        //UAE
        if (trimText === "Dubai") {
            $("#DescTitleCountries").text("App Development Company in Dubai");
            $("#DescTextCountries").text(
                "Dqot Solutions provides app development, web development, web designing, and digital marketing services in Dubai. Our developers are expert with various technologies and framework for the development and the digital marketing services. "
            );
        }
        if (trimText === "Abu Dhabi") {
            $("#DescTitleCountries").text(
                "App Development Company in Abu Dhabi"
            );
            $("#DescTextCountries").text(
                "Dqot Solutions provides app development, web development, web designing, and digital marketing services in Abu Dhabi. Our developers are expert with various frameworks like Laravel, Django, and React Native, and many more used for the development process. "
            );
        }

        //INDIA
        if (trimText === "Jaipur") {
            $("#DescTitleCountries").text("App Development Company in Jaipur");
            $("#DescTextCountries").text(
                "Dqot Solutions provides app development, web development, web designing, and digital marketing services in Jaipur. Our developers are expert with various technologies and framework for the development and the digital marketing services."
            );
        }
        if (trimText === "Delhi") {
            $("#DescTitleCountries").text("App Development Company in Delhi");
            $("#DescTextCountries").text(
                "Dqot Solutions provides app development, web development, web designing, and digital marketing services in Delhi. Our developers are expert with various technologies and framework for the development and the digital marketing services."
            );
        }
        if (trimText === "Mumbai") {
            $("#DescTitleCountries").text("App Development Company in Mumbai");
            $("#DescTextCountries").text(
                "Dqot Solutions provides app development, web development, web designing, and digital marketing services in Mumbai. Our developers are expert with various technologies and framework for the development and the digital marketing services. "
            );
        }
        if (trimText === "Ahmedabad") {
            $("#DescTitleCountries").text(
                "App Development Company in Ahmedabad"
            );
            $("#DescTextCountries").text(
                "Dqot Solutions provides app development, web development, web designing, and digital marketing services in Ahmedabad. Our developers are expert with various technologies and framework for the development and the digital marketing services."
            );
        }

        //Australia
        if (trimText === "Sydney") {
            $("#DescTitleCountries").text("App Development Company in Sydney");
            $("#DescTextCountries").text(
                "Dqot Solutions provides app development, web development, web designing, and digital marketing services in Sydney. Our developers are expert with various technologies and framework for the development and the digital marketing services."
            );
        }
        if (trimText === "Melbourne") {
            $("#DescTitleCountries").text(
                "App Development Company in Melbourne"
            );
            $("#DescTextCountries").text(
                "Dqot Solutions provides app development, web development, web designing, and digital marketing services in Melbourne. Our developers are expert with various technologies and framework for the development and the digital marketing services. "
            );
        }

        //USA
        if (trimText === "New York") {
            $("#DescTitleCountries").text(
                "App Development Company in New York"
            );
            $("#DescTextCountries").text(
                "Dqot Solutions provides app development, web development, web designing, and digital marketing services in New York. Our developers are expert with various technologies and framework for the development and the digital marketing services."
            );
        }
        if (trimText === "Los Angeles") {
            $("#DescTitleCountries").text(
                "App Development Company in Los Angeles"
            );
            $("#DescTextCountries").text(
                "Dqot Solutions provides app development, web development, web designing, and digital marketing services in Los Angeles. Our developers are expert with various technologies and framework for the development and the digital marketing services."
            );
        }
        if (trimText === "Chicago") {
            $("#DescTitleCountries").text("App Development Company in Chicago");
            $("#DescTextCountries").text(
                "Dqot Solutions provides app development, web development, web designing, and digital marketing services in Chicago. Our developers are expert with various technologies and framework for the development and the digital marketing services."
            );
        }

        //UK
        if (trimText === "London") {
            $("#DescTitleCountries").text("App Development Company in London");
            $("#DescTextCountries").text(
                "Dqot Solutions provides app development, web development, web designing, and digital marketing services in London. Our developers are expert with various technologies and framework for the development and the digital marketing services."
            );
        }

        //USA
        if (trimText === "Brazil") {
            $("#DescTitleCountries").text("App Development Company in Brazil");
            $("#DescTextCountries").text(
                "Dqot Solutions provides app development, web development, web designing, and digital marketing services in Brazil. Our developers are expert with various technologies and framework for the development and the digital marketing services. "
            );
        }
        if (trimText === "Philippines") {
            $("#DescTitleCountries").text(
                "App Development Company in Philippines"
            );
            $("#DescTextCountries").text(
                "Dqot Solutions provides app development, web development, web designing, and digital marketing services in the Philippines. Our developers are expert with various technologies and framework for the development and the digital marketing services. "
            );
        }
        if (trimText === "Canada") {
            $("#DescTitleCountries").text("App Development Company in Canada");
            $("#DescTextCountries").text(
                "Dqot Solutions provides app development, web development, web designing, and digital marketing services in Canada. Our developers are expert with various technologies and framework for the development and the digital marketing services."
            );
        }
        if (trimText === "Netherlands") {
            $("#DescTitleCountries").text(
                "App Development Company in Netherlands"
            );
            $("#DescTextCountries").text(
                "Dqot Solutions provides app development, web development, web designing, and digital marketing services in the Netherlands. Our developers are expert with various technologies and framework for the development and the digital marketing services."
            );
        }
    });
});

document.addEventListener("DOMContentLoaded", function () {
    var swiper = new Swiper(".home_portfolio", {
            loop: false,
            autoplay: { delay: 1500, disableOnInteraction: !1 },
            pagination: { el: ".swiper-pagination", clickable: !0 },
            breakpoints: {
                0: { slidesPerView: 1 },
                640: { slidesPerView: 2 },
                768: { slidesPerView: 2 },
                1024: { slidesPerView: 3 },
            },
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
            },
        }),
        swiper = new Swiper(".industry_mobile_swiper", {
            slidesPerView: 2,
            spaceBetween: 10,
            loop: false,
            autoplay: { delay: 2500, disableOnInteraction: !1 },
            pagination: { el: ".swiper-pagination", clickable: !0 },
            breakpoints: {
                0: { slidesPerView: 2 },
                640: { slidesPerView: 2 },
                768: { slidesPerView: 3 },
                1024: { slidesPerView: 3 },
            },
        }),
        swiper = new Swiper(".co-working-review-slider", {
            slidesPerView: 4,
            spaceBetween: 10,
            loop: !0,
            autoplay: { delay: 2500, disableOnInteraction: !1 },
            // pagination: { el: ".swiper-pagination", clickable: !0 },
            breakpoints: {
                0: { slidesPerView: 2 },
                640: { slidesPerView: 2 },
                768: { slidesPerView: 3 },
                1024: { slidesPerView: 3 },
            },
        }),
        swiper = new Swiper(".journey_swiper", {
            slidesPerView: 1,
            spaceBetween: 10,
            loop: !0,
            autoplay: { delay: 2500, disableOnInteraction: !1 },
            pagination: { el: ".swiper-pagination", clickable: !0 },
            breakpoints: {
                0: { slidesPerView: 1 },
                640: { slidesPerView: 1 },
                768: { slidesPerView: 2 },
                1024: { slidesPerView: 3 },
            },
        }),
        swiper = new Swiper(".dqotlife_swiper", {
            slidesPerView: 1,
            spaceBetween: 10,
            loop: !0,
            pagination: { el: ".swiper-pagination", clickable: !0 },
            breakpoints: {
                0: { slidesPerView: 1 },
                640: { slidesPerView: 1 },
                768: { slidesPerView: 1 },
                1024: { slidesPerView: 3 },
            },
        }),
        swiper = new Swiper(".fantasy_services", {
            slidesPerView: 2,
            spaceBetween: 30,
            autoplay: { delay: 2500, disableOnInteraction: !1 },
            loop: !0,
            pagination: { el: ".swiper-pagination", clickable: !0 },
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
            },
            breakpoints: {
                0: { slidesPerView: 1 },
                640: { slidesPerView: 2 },
                768: { slidesPerView: 2 },
                1024: { slidesPerView: 2 },
            },
        }),
        swiper = new Swiper(".fantasy_apps-slider", {
            slidesPerView: 4,
            spaceBetween: 100,
            autoplay: { delay: 2500, disableOnInteraction: !1 },
            loop: !0,
            pagination: { el: ".swiper-pagination", clickable: !0 },
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
            },
            breakpoints: {
                0: { slidesPerView: 2 },
                768: { slidesPerView: 4 },
            },
        }),
        swiper = new Swiper(".wordpress-guarantee-slider", {
            slidesPerView: 4,
            spaceBetween: 30,
            autoplay: { delay: 2500, disableOnInteraction: !1 },
            loop: !0,
            pagination: { el: ".swiper-pagination", clickable: !0 },
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
            },
            breakpoints: {
                0: { slidesPerView: 1 },
                768: { slidesPerView: 2 },
                1024: { slidesPerView: 4 },
            },
        }),
        swiper = new Swiper(".industries-slider", {
            slidesPerView: 3,
            spaceBetween: 0,
            autoplay: { delay: 2500, disableOnInteraction: !1 },
            loop: !0,
            pagination: { el: ".swiper-pagination", clickable: !0 },
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
            },
            breakpoints: {
                0: { slidesPerView: 1 },
                768: { slidesPerView: 3 },
            },
        }),
        swiper = new Swiper(".case_study-slider", {
            slidesPerView: 3,
            spaceBetween: 10,
            autoplay: { delay: 2500, disableOnInteraction: !1 },
            loop: !0,
            pagination: { el: ".swiper-pagination", clickable: !0 },
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
            },
            breakpoints: {
                0: { slidesPerView: 1 },
                768: { slidesPerView: 2 },
                1200: { slidesPerView: 3 },
            },
        }),
        swiper = new Swiper(".fantasy_card-slider", {
            slidesPerView: 4,
            spaceBetween: 10,
            autoplay: { delay: 2500, disableOnInteraction: !1 },
            loop: !0,
            pagination: { el: ".swiper-pagination", clickable: !0 },
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
            },
            breakpoints: {
                0: { slidesPerView: 1 },
                480: { slidesPerView: 2 },
                768: { slidesPerView: 3 },
                1200: { slidesPerView: 4 },
            },
        }),
        swiper = new Swiper(".new-hire-slider", {
            slidesPerView: 4,
            spaceBetween: 10,
            autoplay: { delay: 2500, disableOnInteraction: !1 },
            loop: !0,
            pagination: { el: ".swiper-pagination", clickable: !0 },
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
            },
            breakpoints: {
                0: { slidesPerView: 1 },
                480: { slidesPerView: 2 },
                768: { slidesPerView: 3 },
                1200: { slidesPerView: 4 },
            },
        }),
        swiper = new Swiper(".carwash_apps-slider", {
            slidesPerView: 4,
            spaceBetween: 50,
            autoplay: { delay: 2500, disableOnInteraction: !1 },
            loop: !0,
            pagination: { el: ".swiper-pagination", clickable: !0 },
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
            },
            breakpoints: {
                0: { slidesPerView: 2 },
                768: { slidesPerView: 4 },
            },
        }),
        swiper = new Swiper(".fantasy_demo-slider", {
            slidesPerView: 4,
            spaceBetween: 40,
            autoplay: { delay: 2500, disableOnInteraction: !1 },
            loop: !0,
            pagination: { el: ".swiper-pagination", clickable: !0 },
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
            },
            breakpoints: {
                0: { slidesPerView: 1 },
                768: { slidesPerView: 2 },
                1400: { slidesPerView: 5 },
                3000: { slidesPerView: 8 },
            },
        }),
        swiper = new Swiper(".fantasy_clients-slider", {
            slidesPerView: 3,
            spaceBetween: 30,
            autoplay: { delay: 2500, disableOnInteraction: !1 },
            loop: !0,
            pagination: { el: ".swiper-pagination", clickable: !0 },
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
            },
            breakpoints: {
                0: { slidesPerView: 1 },
                640: { slidesPerView: 1 },
                768: { slidesPerView: 2 },
                1400: { slidesPerView: 3 },
            },
        }),
        swiper = new Swiper(".fantasy_sports", {
            slidesPerView: 3,
            autoplay: { delay: 2500, disableOnInteraction: !1 },
            loop: !0,
            pagination: { el: ".swiper-pagination", clickable: !0 },
            breakpoints: {
                0: { slidesPerView: 1 },
                640: { slidesPerView: 2 },
                768: { slidesPerView: 2 },
                1024: { slidesPerView: 3 },
            },
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
            },
        }),
        swiper = new Swiper(".client_say", {
            slidesPerView: 3,
            spaceBetween: 30,
            autoplay: { delay: 2500, disableOnInteraction: !1 },
            loop: !0,
            pagination: { el: ".swiper-pagination", clickable: !0 },
            breakpoints: {
                0: { slidesPerView: 1 },
                640: { slidesPerView: 2 },
                768: { slidesPerView: 3 },
                1024: { slidesPerView: 3 },
            },
        }),
        swiper = new Swiper(".insight_swiper", {
            slidesPerView: 3,
            spaceBetween: 30,
            autoplay: { delay: 2500, disableOnInteraction: !1 },
            loop: !0,
            pagination: { el: ".swiper-pagination", clickable: !0 },
            breakpoints: {
                0: { slidesPerView: 1 },
                640: { slidesPerView: 2 },
                768: { slidesPerView: 3 },
                1024: { slidesPerView: 3 },
            },
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
            },
        }),
        swiper = new Swiper(".servies_mobile_slider", {
            slidesPerView: 3,
            spaceBetween: 30,
            loop: !0,
            autoplay: { delay: 3e3, disableOnInteraction: !1 },
            pagination: { el: ".swiper-pagination", clickable: !0 },
            breakpoints: {
                0: { slidesPerView: 1 },
                640: { slidesPerView: 2 },
                768: { slidesPerView: 3 },
                1024: { slidesPerView: 3 },
            },
        }),
        swiper = new Swiper(".white_label_sports", {
            slidesPerView: 2,
            spaceBetween: 30,
            loop: !0,
            autoplay: { delay: 3e3, disableOnInteraction: !1 },
            pagination: { el: ".swiper-pagination", clickable: !0 },
            breakpoints: {
                0: { slidesPerView: 1 },
                640: { slidesPerView: 2 },
                768: { slidesPerView: 2 },
                1024: { slidesPerView: 2 },
            },
        }),
        swiper = new Swiper(".our_value_slider", {
            slidesPerView: 2,
            spaceBetween: 30,
            loop: !0,
            autoplay: { delay: 3e3, disableOnInteraction: !1 },
            pagination: { el: ".swiper-pagination", clickable: !0 },
            breakpoints: {
                0: { slidesPerView: 1 },
                640: { slidesPerView: 1 },
                768: { slidesPerView: 1 },
                1024: { slidesPerView: 1 },
            },
        }),
        swiper = new Swiper(".our_teamm_slider", {
            slidesPerView: 2,
            spaceBetween: 30,
            loop: !0,
            autoplay: { delay: 3e3, disableOnInteraction: !1 },
            pagination: { el: ".swiper-pagination", clickable: !0 },
            breakpoints: {
                0: { slidesPerView: 1 },
                640: { slidesPerView: 2 },
                768: { slidesPerView: 4 },
                1024: { slidesPerView: 4 },
            },
        }),
        swiper = new Swiper(".all_address_slider", {
            slidesPerView: 2,
            spaceBetween: 30,
            loop: !0,
            autoplay: { delay: 3e3, disableOnInteraction: !1 },
            pagination: { el: ".swiper-pagination", clickable: !0 },
            breakpoints: {
                0: { slidesPerView: 1 },
                640: { slidesPerView: 2 },
                768: { slidesPerView: 3 },
                1024: { slidesPerView: 3 },
            },
        }),
        swiper = new Swiper(".dqotlife", {
            slidesPerView: 3,
            spaceBetween: 30,
            loop: !0,
            autoplay: { delay: 3e3, disableOnInteraction: !1 },
            pagination: { el: ".swiper-pagination", clickable: !0 },
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
            },
            breakpoints: {
                0: { slidesPerView: 1 },
                640: { slidesPerView: 2 },
                768: { slidesPerView: 2 },
                1024: { slidesPerView: 3 },
            },
        }),
        swiper = new Swiper(".portfolio-new-slider", {
            slidesPerView: 1,
            spaceBetween: 0,
            loop: !0,
            autoplay: { delay: 2500, disableOnInteraction: !1 },
            pagination: {
                el: ".portfolio-new-slider-pagination",
                dynamicBullets: true,
                dynamicMainBullets: 4,
            },
            navigation: {
                nextEl: ".portfolio-new-slider-next",
                prevEl: ".portfolio-new-slider-prev",
            },
            breakpoints: {
                0: { slidesPerView: 1 },
                640: { slidesPerView: 1 },
                768: { slidesPerView: 1 },
                1024: { slidesPerView: 1 },
            },
        }),
        swiper = new Swiper(".astrology-trusted-new-slider", {
            slidesPerView: 4,
            spaceBetween: 20,
            loop: !0,
            autoplay: { delay: 2500, disableOnInteraction: !1 },
            pagination: {
                el: ".astrology-trusted-new-slider-pagination",
                dynamicBullets: true,
                dynamicMainBullets: 4,
            },
            navigation: {
                nextEl: ".astrology-trusted-new-slider-next",
                prevEl: ".astrology-trusted-new-slider-prev",
            },
            breakpoints: {
                0: { slidesPerView: 1 },
                640: { slidesPerView: 2 },
                768: { slidesPerView: 3 },
                1024: { slidesPerView: 4 },
            },
        }),
        swiper = new Swiper(".shopifyindustrypage-slider1", {
            slidesPerView: 7,
            spaceBetween: 20,
            loop: !0,
            autoplay: { delay: 2500, disableOnInteraction: !1 },
            pagination: {
                el: ".astrology-trusted-new-slider-pagination",
                dynamicBullets: true,
                dynamicMainBullets: 4,
            },
            navigation: {
                nextEl: ".astrology-trusted-new-slider-next",
                prevEl: ".astrology-trusted-new-slider-prev",
            },
            breakpoints: {
                0: { slidesPerView: 2 },
                640: { slidesPerView: 2 },
                768: { slidesPerView: 3 },
                1024: { slidesPerView: 7 },
            },
        }),
        swiper = new Swiper(".shopify-development-portfolio-sec-card-slider", {
            slidesPerView: 4,
            spaceBetween: 20,
            loop: !0,
            autoplay: { delay: 2500, disableOnInteraction: !1 },
            pagination: {
                el: ".astrology-trusted-new-slider-pagination",
                dynamicBullets: true,
                dynamicMainBullets: 4,
            },
            navigation: {
                nextEl: ".astrology-trusted-new-slider-next",
                prevEl: ".astrology-trusted-new-slider-prev",
            },
            breakpoints: {
                0: { slidesPerView: 1 },
                576: { slidesPerView: 2 },
                768: { slidesPerView: 3 },
                1024: { slidesPerView: 3 },
                1200: { slidesPerView: 4 },
            },
        }),
        swiper = new Swiper(".industry-sec-slider11", {
            slidesPerView: 3,
            spaceBetween: 10,
            loop: !0,
            autoplay: { delay: 2500, disableOnInteraction: !1 },
            pagination: {
                el: ".astrology-trusted-new-slider-pagination",
                dynamicBullets: true,
                dynamicMainBullets: 4,
            },
            navigation: {
                nextEl: ".astrology-trusted-new-slider-next",
                prevEl: ".astrology-trusted-new-slider-prev",
            },
            breakpoints: {
                0: { slidesPerView: 1 },
                680: { slidesPerView: 2 },
                768: { slidesPerView: 2 },
                1024: { slidesPerView: 2 },
                1200: { slidesPerView: 3 },
            },
        }),
        swiper = new Swiper(".newhome-trusted-new-slider", {
            slidesPerView: 4,
            spaceBetween: 20,
            loop: !0,
            autoplay: { delay: 2500, disableOnInteraction: !1 },
            pagination: {
                el: ".newhome-trusted-new-slider-pagination",
                dynamicBullets: true,
                dynamicMainBullets: 4,
            },
            navigation: {
                nextEl: ".portfolio-new-slider-next",
                prevEl: ".portfolio-new-slider-prev",
            },
            breakpoints: {
                0: { slidesPerView: 1 },
                450: { slidesPerView: 2 },
                640: { slidesPerView: 2 },
                768: { slidesPerView: 3 },
                1024: { slidesPerView: 3 },
            },
        }),
        swiper = new Swiper(".happy_clients-trusted-new-slider", {
            slidesPerView: 4,
            spaceBetween: 20,
            loop: !0,
            autoplay: { delay: 2500, disableOnInteraction: !1 },
            pagination: {
                el: ".happy_clients-trusted-new-slider-pagination",
                dynamicBullets: true,
                dynamicMainBullets: 4,
            },
            navigation: {
                nextEl: ".portfolio-new-slider-next",
                prevEl: ".portfolio-new-slider-prev",
            },
            breakpoints: {
                0: { slidesPerView: 1 },
                640: { slidesPerView: 2 },
                768: { slidesPerView: 3 },
                1024: { slidesPerView: 4 },
            },
        }),
        swiper = new Swiper(".home-trusted-new-slider", {
            slidesPerView: 4,
            spaceBetween: 20,
            loop: !0,
            autoplay: { delay: 2500, disableOnInteraction: !1 },
            pagination: {
                el: ".home-trusted-new-slider-pagination",
                dynamicBullets: true,
                dynamicMainBullets: 4,
            },
            navigation: {
                nextEl: ".portfolio-new-slider-next",
                prevEl: ".portfolio-new-slider-prev",
            },
            breakpoints: {
                0: { slidesPerView: 1 },
                640: { slidesPerView: 2 },
                768: { slidesPerView: 3 },
                1024: { slidesPerView: 3 },
            },
        }),
        swiper = new Swiper(".client-testimonials-slider", {
            slidesPerView: 3,
            spaceBetween: 30,
            loop: !0,
            autoplay: { delay: 3e3, disableOnInteraction: !1 },
            pagination: {
                el: ".client-testimonials-slider-pagination",
                clickable: !0,
            },
            navigation: {
                nextEl: ".client-testimonials-slider-next",
                prevEl: ".client-testimonials-slider-prev",
            },
            breakpoints: {
                0: { slidesPerView: 1 },
                640: { slidesPerView: 2 },
                1024: { slidesPerView: 3 },
            },
        }),
        swiper = new Swiper(".dqot-blog-slider", {
            slidesPerView: 3,
            spaceBetween: 30,
            loop: !0,
            autoplay: { delay: 3e3, disableOnInteraction: !1 },
            pagination: { el: ".dqot-blog-slider-pagination", clickable: !0 },
            navigation: {
                nextEl: ".dqot-blog-slider-next",
                prevEl: ".dqot-blog-slider-prev",
            },
            breakpoints: {
                0: { slidesPerView: 1 },
                640: { slidesPerView: 2 },
                1024: { slidesPerView: 3 },
            },
        }),
        swiper = new Swiper(".dqot-home-service-slider", {
            slidesPerView: 3,
            spaceBetween: 30,
            loop: !0,
            autoplay: { delay: 3e3, disableOnInteraction: !1 },
            navigation: {
                nextEl: ".dqot-home-service-slider-next",
                prevEl: ".dqot-home-service-slider-prev",
            },
            breakpoints: {
                0: { slidesPerView: 1 },
                640: { slidesPerView: 2 },
                1024: { slidesPerView: 3 },
            },
        }),
        swiper = new Swiper(".dqot-home-service-chip-slider", {
            slidesPerView: "auto",
            spaceBetween: 10,
            mousewheel: true,
            grabCursor: true,
            loop: !0,
            autoplay: { delay: 3e3, disableOnInteraction: !1 },
        }),
        swiper = new Swiper(".dqot-industery-slider", {
            slidesPerView: 1,
            spaceBetween: 0,
            loop: !0,
            // autoplay: { delay: 3e3, disableOnInteraction: !1 },
            navigation: {
                nextEl: ".dqot-industery-slider-next",
                prevEl: ".dqot-industery-slider-prev",
            },
        });
    var swiper = new Swiper(".banner_right_slider", {
        direction: "vertical",
        slidesPerView: 7,
        mousewheel: true,
        grabCursor: true,
        spaceBetween: 15,
        loop: true,
        autoplay: { delay: 3e3, disableOnInteraction: !1 },
        breakpoints: {
            0: {
                direction: "horizontal",
                slidesPerView: 1,
            },
            640: {
                direction: "horizontal",
                slidesPerView: 2,
            },
            992: {
                direction: "horizontal",
                slidesPerView: 3,
            },
            1200: {
                direction: "vertical",
                slidesPerView: 5,
            },
        },
    });
    (swiper = new Swiper(".expanding-across-border-slider", {
        slidesPerView: 4,
        spaceBetween: 30,
        loop: !0,
        autoplay: { delay: 3e3, disableOnInteraction: !1 },
        navigation: {
            nextEl: ".expanding-across-border-slider-next",
            prevEl: ".expanding-across-border-slider-prev",
        },
        breakpoints: {
            0: { slidesPerView: 1 },
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
        },
    })),
        (swiper = new Swiper(".awards", {
            slidesPerView: 3,
            spaceBetween: 30,
            loop: !0,
            autoplay: { delay: 3e3, disableOnInteraction: !1 },
            pagination: { el: ".swiper-pagination", clickable: !0 },
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
            },
            breakpoints: {
                0: { slidesPerView: 1 },
                640: { slidesPerView: 2 },
                768: { slidesPerView: 3 },
                1024: { slidesPerView: 4 },
            },
        })),
        (swiper = new Swiper(".review_main_slider", {
            slidesPerView: 2,
            spaceBetween: 0,
            loop: !0,
            autoplay: { delay: 1000, disableOnInteraction: !1 },
            pagination: { el: ".swiper-pagination", clickable: !0 },
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
            },
            // breakpoints: {
            //     0: { slidesPerView: 1 },
            //     640: { slidesPerView: 2 },
            //     768: { slidesPerView: 3 },
            //     1024: { slidesPerView: 5 },
            // },
        }));
    // swiper = new Swiper(".review_main_slider", {
    //     slidesPerView: 3,
    //     spaceBetween: 30,
    //     loop: !0,
    //     autoplay: { delay: 3e3, disableOnInteraction: !1 },
    //     pagination: { el: ".swiper-pagination", clickable: !0 },
    //     navigation: {
    //         nextEl: ".swiper-button-next",
    //         prevEl: ".swiper-button-prev",
    //     },
    //     breakpoints: {
    //         0: { slidesPerView: 1 },
    //         640: { slidesPerView: 2 },
    //         768: { slidesPerView: 3 },
    //         1024: { slidesPerView: 5 },
    //     },
    // });

    var swiper = new Swiper(".successswiper", {
        slidesPerView: 1,
        spaceBetween: 30,
        centeredSlides: true,
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
        loop: true,
        pagination: {
            el: ".swiper-pagination",
        },
    });

    var swiper = new Swiper(".energy_swiper", {
        slidesPerView: 1,
        spaceBetween: 30,
        centeredSlides: true,
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
        loop: true,
        pagination: {
            el: ".swiper-pagination",
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });

    var swiper = new Swiper(".other_fantasy", {
        slidesPerView: 3,
        spaceBetween: 30,
        loop: true,
        pagination: {
            el: ".swiper-pagination",
        },
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
        breakpoints: {
            0: {
                slidesPerView: 1,
                spaceBetween: 20,
            },
            640: {
                slidesPerView: 2,
                spaceBetween: 20,
            },
            768: {
                slidesPerView: 2,
                spaceBetween: 40,
            },
            1024: {
                slidesPerView: 3,
                spaceBetween: 50,
            },
        },
    });

    var swiper = new Swiper(".service_swiper_main", {
        slidesPerView: 3,
        spaceBetween: 30,
        loop: true,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
        breakpoints: {
            0: {
                slidesPerView: 1,
                spaceBetween: 20,
            },
            640: {
                slidesPerView: 2,
                spaceBetween: 20,
            },
            768: {
                slidesPerView: 2,
                spaceBetween: 40,
            },
            1024: {
                slidesPerView: 3,
                spaceBetween: 50,
            },
        },
    });
    var swiper = new Swiper(".our_client_swiper_", {
        slidesPerView: 3,
        spaceBetween: 20,
        loop: true,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
        breakpoints: {
            0: {
                slidesPerView: 1,
                spaceBetween: 20,
            },
            640: {
                slidesPerView: 2,
                spaceBetween: 20,
            },
            768: {
                slidesPerView: 4,
                spaceBetween: 40,
            },
            1024: {
                slidesPerView: 5,
                spaceBetween: 50,
            },
        },
    });
    var swiper = new Swiper(".telemedice_work_slider", {
        slidesPerView: 3,
        spaceBetween: 20,
        loop: true,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
        breakpoints: {
            0: {
                slidesPerView: 1,
                spaceBetween: 20,
            },
            640: {
                slidesPerView: 2,
                spaceBetween: 20,
            },
            768: {
                slidesPerView: 2,
                spaceBetween: 40,
            },
            1024: {
                slidesPerView: 3,
                spaceBetween: 50,
            },
        },
    });
    var swiper = new Swiper(".minatravel_slider", {
        slidesPerView: 3,
        spaceBetween: 20,
        loop: true,
        // pagination: {
        //   el: ".swiper-pagination",
        //   clickable: true,
        // },
        // navigation: {
        //   nextEl: ".swiper-button-next",
        //   prevEl: ".swiper-button-prev",
        // },
        autoplay: {
            delay: 1000,
            disableOnInteraction: false,
        },
        breakpoints: {
            0: {
                slidesPerView: 1,
                spaceBetween: 20,
            },
            640: {
                slidesPerView: 2,
                spaceBetween: 20,
            },
            768: {
                slidesPerView: 2,
                spaceBetween: 40,
            },
            1024: {
                slidesPerView: 5,
                spaceBetween: 50,
            },
        },
    });

    var swiper = new Swiper(".shopify-banner-slider", {
        slidesPerView: 1,
        spaceBetween: 0,
        loop: true,
        autoplay: {
            delay: 2000,
            disableOnInteraction: false,
        },
        navigation: {
            nextEl: ".shopify-banner-slider-next",
            prevEl: ".shopify-banner-slider-prev",
        },
    });
});

const header = document.querySelector(".new_header"),
    toggleClass = "is-sticky";
window.addEventListener("scroll", () => {
    let e = window.pageYOffset;
    e > 150
        ? header.classList.add(toggleClass)
        : header.classList.remove(toggleClass);
});
var counter = document.querySelectorAll(".counter");
window.addEventListener(
    "load",
    function () {
        counter.forEach(function (e, i) {
            var s = counter[i].getAttribute("data-count-start"),
                n = counter[i].getAttribute("data-count-end");
            setInterval(function () {
                if (++s > n) return !1;
                counter[i].innerText = s;
            }, counter[i].getAttribute("data-speed"));
        });
    },
    !1
),
    // AOS.init();
    // var mybutton = document.getElementById("scrollbtn");
    // function scrollFunction() {
    //     document.body.scrollTop > 20 || document.documentElement.scrollTop > 20
    //         ? (mybutton.style.display = "flex")
    //         : (mybutton.style.display = "none");
    // }

    document.addEventListener("DOMContentLoaded", function () {
        var mybutton = document.getElementById("scrollbtn");
        function scrollFunction() {
            if (
                document.body.scrollTop > 20 ||
                document.documentElement.scrollTop > 20
            ) {
                mybutton.style.display = "flex";
            } else {
                mybutton.style.display = "none";
            }
        }
    });

function topFunction() {
    (document.body.scrollTop = 0), (document.documentElement.scrollTop = 0);
}
function myFloting() {
    document.getElementById("flotingMenu").classList.toggle("open");
}
function closepopup() {
    document.getElementById("flotingMenu").classList.remove("open");
}
window.onscroll = function () {
    scrollFunction();
};
const stages = [
    { roundId: "requirements_round", cardId: "requirements_card" },
    { roundId: "design_round", cardId: "design_card" },
    { roundId: "develop_round", cardId: "develop_card" },
    { roundId: "test_round", cardId: "test_card" },
    { roundId: "deploy_round", cardId: "deploy_card" },
    { roundId: "reveiw_round", cardId: "reveiw_card" },
];

function toggleSearch() {
    console.log("Toggle function called");
    var e = document.getElementById("searchInput"),
        i = document.getElementById("searchIcon"),
        s = document.getElementById("closeIcon");
    "none" === e.style.display || "" === e.style.display
        ? (console.log("Showing search input and close icon"),
          (e.style.display = "block"),
          (i.style.display = "none"),
          (s.style.display = "block"))
        : (console.log("Hiding search input and showing search icon"),
          //   (e.style.display = "none"),
          (i.style.display = "none"));
    //   (s.style.display = "none"));
}
function toggleSearchtwo() {
    console.log("Toggle function called");
    var e = document.getElementById("searchInputtwo"),
        i = document.getElementById("searchIcontwo"),
        s = document.getElementById("closeIcontwo");
    "none" === e.style.display || "" === e.style.display
        ? (console.log("Showing search input and close icon"),
          (e.style.display = "block"),
          (i.style.display = "none"),
          (s.style.display = "block"))
        : (console.log("Hiding search input and showing search icon"),
          //   (e.style.display = "none"),
          (i.style.display = "none"));
    //   (s.style.display = "none"));
}
function showhidefunction() {
    var e = document.getElementById("business_bx"),
        i = document.getElementById("carreir_bx");
    "none" === i.style.display || "" === i.style.display
        ? (console.log(""),
          (i.style.display = "block"),
          (e.style.display = "none"))
        : (console.log(""),
          (i.style.display = "none"),
          (e.style.display = "block"));
}
// stages.forEach((e) => {
//     let i = document.getElementById(e.roundId),
//         s = document.getElementById(e.cardId);
//     i.addEventListener("mouseover", function () {
//         s.classList.add("hovered");
//     }),
//         i.addEventListener("mouseout", function () {
//             s.classList.remove("hovered");
//         });
// }),

document.addEventListener("DOMContentLoaded", function () {
    stages.forEach((e) => {
        let i = document.getElementById(e.roundId),
            s = document.getElementById(e.cardId);

        if (i && s) {
            i.addEventListener("mouseover", function () {
                s.classList.add("hovered");
            });

            i.addEventListener("mouseout", function () {
                s.classList.remove("hovered");
            });
        } else {
            console.warn(
                `Element not found: roundId=${e.roundId}, cardId=${e.cardId}`
            );
        }
    });
});

// stages.forEach((e) => {
//     let i = document.getElementById(e.roundId),
//         s = document.getElementById(e.cardId);

//     if (i && s) {  // Ensure both elements exist before proceeding
//         i.addEventListener("mouseover", function () {
//             s.classList.add("hovered");
//         });

//         i.addEventListener("mouseout", function () {
//             s.classList.remove("hovered");
//         });
//     } else {
//         console.warn(`Element not found: roundId=${e.roundId}, cardId=${e.cardId}`);
//     }
// });

// document.addEventListener("DOMContentLoaded", function () {
//     let e = document.getElementById("typing-text"),
//         i = document.getElementById("india_animation");
//     function s(e, i) {
//         let s = 0,
//             n = 0,
//             l = !0;
//         !(function t() {
//             if (l) {
//                 let a = i[s],
//                     o = a.charAt(n);
//                 "" === o
//                     ? ((l = !1), setTimeout(t, 1e3))
//                     : ((e.innerHTML += o), n++, setTimeout(t, 100));
//             } else if ("" === e.innerHTML)
//                 (n = 0),
//                     (l = !0),
//                     (s = (s + 1) % i.length),
//                     setTimeout(t, 1e3);
//             else {
//                 let r = e.innerHTML;
//                 (e.innerHTML = r.slice(0, -1)), setTimeout(t, 40);
//             }
//         })();
//     }
//     s(e, [
//         "",
//         "Fantasy Sports App Development",
//         "Cryptography",
//         "Ecommarce Website",
//         "Mobile App Development",
//         "Web Developement",
//     ]),
//         s(i, ["India", "USA", "UK", "CANADA", "UAE", "Australia"]);
// });

document.addEventListener("DOMContentLoaded", function () {
    let e = document.getElementById("typing-text"),
        i = document.getElementById("india_animation");

    if (!e || !i) {
        console.warn("One or both elements not found:", { e, i });
        return; // Stop execution if elements are missing
    }

    function s(e, i) {
        let s = 0,
            n = 0,
            l = !0;
        (function t() {
            if (l) {
                let a = i[s],
                    o = a.charAt(n);
                "" === o
                    ? ((l = !1), setTimeout(t, 1000))
                    : ((e.innerHTML += o), n++, setTimeout(t, 100));
            } else if ("" === e.innerHTML) {
                (n = 0),
                    (l = !0),
                    (s = (s + 1) % i.length),
                    setTimeout(t, 1000);
            } else {
                let r = e.innerHTML;
                (e.innerHTML = r.slice(0, -1)), setTimeout(t, 40);
            }
        })();
    }

    s(e, [
        "",
        "Fantasy Sports App Development",
        "Cryptography",
        "Ecommerce Website",
        "Mobile App Development",
        "Web Development",
    ]);

    s(i, ["India", "USA", "UK", "CANADA", "UAE", "Australia"]);
});

// document.getElementById('countryCode').addEventListener('change', function() {
//     document.getElementById('phone-input').focus();
// });

document.addEventListener("DOMContentLoaded", function () {
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
        anchor.addEventListener("click", function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute("href")).scrollIntoView({
                behavior: "smooth",
            });
        });
    });

    // Intersection Observer for animations
    const animateElements = document.querySelectorAll(
        ".fade-in-up, .scale-in, .slide-in-left, .slide-in-right"
    );

    const observerOptions = {
        root: null,
        rootMargin: "0px",
        threshold: 0.1,
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                const delay = entry.target.dataset.delay
                    ? parseInt(entry.target.dataset.delay)
                    : 0;
                setTimeout(() => {
                    entry.target.classList.add("animate");
                }, delay);
                observer.unobserve(entry.target); // Stop observing once animated
            }
        });
    }, observerOptions);
});
