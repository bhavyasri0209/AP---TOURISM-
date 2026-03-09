const locations = [
    // Districts (existing entries remain unchanged)
    {
        name: "Anantapur",
        type: "district",
        description: "Known for its historical temples and drought-resistant agriculture",
        imageUrl: "https://upload.wikimedia.org/wikipedia/commons/1/12/15th_century_Bugga_Ramalingeswara_temple%2C_Tadipatri%2C_Andhra_Pradesh%2C_India_-_193.jpg",
    },
    {
        name: "Chittoor",
        type: "district",
        description: "Home to the famous Tirupati temple and Horsley Hills",
        imageUrl: "https://resources.thomascook.in/images/holidays/sightSeeing/chittoor.jpeg ",
    },
    {
        name: "East Godavari",
        type: "district",
        description: "Known as the 'Rice Bowl of Andhra Pradesh'",
        imageUrl: "https://images.unsplash.com/photo-1642182887529-df52def152b6?q=80&w=1931&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
        name: "Guntur",
        type: "district",
        description: "Famous for chili cultivation and historical sites",
        imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaRJlC6djquAhD2v6P5YyT-We7oKtLbfnsbQ&s",
    },
    {
        name: "Krishna district",
        type: "district",
        description: "Cultural hub with Vijayawada as its headquarters",
        imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYkz4N3jT37zMCWX5-h64mytFhV7F2zjQnVw&s",
    },
    {
        name: "Kurnool",
        type: "district",
        description: "Historical capital of Andhra State",
        imageUrl: "https://upload.wikimedia.org/wikipedia/commons/9/93/Kurnool_fort%2CAP_-_panoramio.jpg",
    },
    {
        name: "Prakasam district",
        type: "district",
        description: "Known for its extensive coastline",
        imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ00KyiRwgecmQTUYLX6hq9K1yL2MdRf_Qmqw&s",
    },
    {
        name: "Nellore",
        type: "district",
        description: "Famous for aquaculture and temples",
        imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxyXra03NZX3NHHVQLCG8SDc3uURUdO1XaGg&s",
    },
    {
        name: "Srikakulam",
        type: "district",
        description: "Rich in Buddhist heritage",
        imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBK7lxQE1qjz4BYr1LdZ1ukRVd3j_v1lcohA&s",
    },
    {
        name: "Visakhapatnam",
        type: "district",
        description: "Major port city with beautiful beaches",
        imageUrl: "https://s7ap1.scene7.com/is/image/incredibleindia/visakhapatnam-andhra-pradesh-city-2-hero?qlt=82&ts=1726744436128",
    },
    {
        name: "Vizianagaram",
        type: "district",
        description: "Known for its historical fort",
        imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5FhDEL8rCeP3NH6JzkfkGBRhUXi-hmGsAIg&s",
    },
    {
        name: "West Godavari",
        type: "district",
        description: "Known as 'Rice Bowl of India'",
        imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGuYisfsTNIQOxYqA4xjVkZFLJEcyGWAb4UQ&s",
    },
    {
        name: "YSR Kadapa",
        type: "district",
        description: "Rich in mineral resources",
        imageUrl: "https://upload.wikimedia.org/wikipedia/commons/6/62/200_years_memorable_pylon.jpg",
    },

    // Famous Places (existing entries)
    {
        name: "Tirumala Temple",
        type: "religious",
        district: "Chittoor",
        description: "World's richest temple dedicated to Lord Venkateswara",
        imageUrl: "https://images.unsplash.com/photo-1741003412854-bd4b264c4af3?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
        name: "Araku Valley",
        type: "natural",
        district: "Visakhapatnam",
        description: "Beautiful hill station known for coffee plantations",
        imageUrl: "https://images.unsplash.com/photo-1717585163315-02e3f0a96584?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGFyYWt1JTIwdmFsbGV5fGVufDB8fDB8fHww",
    },
    {
        name: "Lepakshi Temple",
        type: "historical",
        district: "Anantapur",
        description: "Ancient temple with remarkable mural paintings",
        imageUrl: "https://images.unsplash.com/photo-1701121696225-7bbcd7877a46?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
        name: "Borra Caves",
        type: "natural",
        district: "Visakhapatnam",
        description: "Deepest caves in India with stunning formations",
        imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQieG3jBCgtRNcNYTgscOCGe4FiukjwudJjOg&s",
    },
    {
        name: "Undavalli Caves",
        type: "historical",
        district: "Guntur",
        description: "4-story cave temples carved out of solid sandstone",
        imageUrl: "https://magikindia.com/wp-content/uploads/2026/06/undavalli-caves-4-1024x683.jpg",
    },
    {
        name: "Gandikota",
        type: "historical",
        district: "YSR Kadapa",
        description: "Grand Canyon of India with historic fort",
        imageUrl: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/15/4a/20/f2/grand-canyon-of-india.jpg?w=1200&h=1200&s=1",
    },
    {
        name: "Pulicat Lake",
        type: "natural",
        district: "Nellore",
        description: "Second largest brackish water lake in India",
        imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMfndgrmVeaRkjOTcaOXswom4bE3xtbChBbA&s",
    },
    {
        name: "Belum Caves",
        type: "natural",
        district: "Kurnool",
        description: "Second longest caves in Indian subcontinent",
        imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Belum_Caves_061.JPG/640px-Belum_Caves_061.JPG",
    },
    {
        name: "Amaravati Stupa",
        type: "historical",
        district: "Guntur",
        description: "Ancient Buddhist site with rich history",
        imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDKOiUXZXt4rpa8mYZK80heF3G1wHDzgneaw&s",
    },
    {
        name: "Konaseema",
        type: "natural",
        district: "East Godavari",
        description: "Beautiful delta region with backwaters",
        imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/Prabhalu_Festival.jpg/1200px-Prabhalu_Festival.jpg",
    },
    {
        name: "Horsley Hills",
        type: "natural",
        district: "Chittoor",
        description: "Beautiful hill station with pleasant climate",
        imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0jSYueo-SdsmTLrxSo5DDLP0Jc97lTKtX_g&s",
    },
    {
        name: "Simhachalam Temple",
        type: "religious",
        district: "Visakhapatnam",
        description: "Ancient temple dedicated to Lord Narasimha",
        imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS82_tRSwBRMju8VJyqdL989-QIApCF7aOp2w&s",
    },
    {
        name: "Srisailam Temple",
        type: "religious",
        district: "Kurnool",
        description: "One of the 12 Jyotirlinga temples of Lord Shiva",
        imageUrl: "https://srisailamtourism.com/images/places-to-visit/headers/bhramaramba-devi-temple-srisailam-entry-fee-timings-holidays-reviews-header.jpg",
    },
    {
        name: "RK Beach",
        type: "natural",
        district: "Visakhapatnam",
        description: "Popular beach with submarine museum",
        imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnAyqfU91PLE4S_NDvupQKThnudljbemJsGQ&s",
    },
    {
        name: "Ahobilam",
        type: "religious",
        district: "Kurnool",
        description: "Sacred site with nine temples dedicated to Lord Narasimha",
        imageUrl: "https://upload.wikimedia.org/wikipedia/commons/4/4c/Upper_Ahobilam_temple_Gopuram_02.jpg",
    },
    {
        name: "Talakona Waterfall",
        type: "natural",
        district: "Chittoor",
        description: "Highest waterfall in Andhra Pradesh",
        imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7MOK1zr8u8slQGW0WudK_7ypuyCbiH6yVcQ&s",
    },
    {
        name: "Bhavani Island",
        type: "natural",
        district: "Krishna",
        description: "River island with recreational facilities",
        imageUrl: "https://media-cdn.tripadvisor.com/media/photo-s/10/22/9c/2e/tree-top-rooms.jpg",
    },
    {
        name: "Kondapalli Fort",
        type: "historical",
        district: "Krishna",
        description: "13th-century fort known for wooden toys",
        imageUrl: "https://s7ap1.scene7.com/is/image/incredibleindia/3-kondapalli-fort-guntur-andhra-pradesh-attr-about?qlt=82&ts=1726743674033",
    },
    {
        name: "Etikoppaka",
        type: "cultural",
        district: "Visakhapatnam",
        description: "Village famous for wooden toy craft",
        imageUrl: "https://lsmedia.linker-cdn.net/282256/2021/7101297.jpeg?width=1200&height=1125",
    },
    {
        name: "Dindi",
        type: "natural",
        district: "East Godavari",
        description: "Scenic backwater destination",
        imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6-xXBwqfNOo8F1hW4y4yVzjGBc7B2qKMFZw&s",
    },
    {
        name: "Penchalakona Temple",
        type: "religious",
        district: "Nellore",
        description: "Ancient temple surrounded by seven hills",
        imageUrl: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/12/3e/02/19/penchalakona-temple.jpg?w=900&h=500&s=1",
    },
    {
        name: "Coringa Wildlife Sanctuary",
        type: "natural",
        district: "East Godavari",
        description: "Second largest mangrove forest in India",
        imageUrl: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/19/71/95/9a/snapseed-01-largejpg.jpg?w=900&h=-1&s=1",
    },
    {
        name: "Sri Kalahasti Temple",
        type: "religious",
        district: "Chittoor",
        description: "Famous temple for Rahu-Ketu prayers",
        imageUrl: "https://upload.wikimedia.org/wikipedia/commons/9/98/Sri_Kala_Hasti.jpg",
    },

    // Additional Places
    {
        name: "Annavaram Temple",
        type: "religious",
        district: "East Godavari",
        description: "Temple dedicated to Lord Satyanarayana Swamy on Ratnagiri Hill",
        imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/A_Hindu_temple_at_Annavaram_Andhra_Pradesh.jpg/640px-A_Hindu_temple_at_Annavaram_Andhra_Pradesh.jpg",
    },
    {
        name: "Nagarjunakonda",
        type: "historical",
        district: "Guntur",
        description: "Ancient Buddhist settlement now an island museum",
        imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5OCb15dwp4YCRHlKQf-CzacWdpBQ9e6sGGg&s",
    },
    {
        name: "Lambasingi",
        type: "natural",
        district: "Visakhapatnam",
        description: "Known as the 'Kashmir of Andhra Pradesh' for its cool climate",
        imageUrl: "https://indianetzone.wordpress.com/wp-content/uploads/2019/08/l6.jpg?w=940",
    },
    {
        name: "Yaganti Temple",
        type: "religious",
        district: "Kurnool",
        description: "Ancient cave temple with unique growing Nandi statue",
        imageUrl: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/11/22/74/5a/download-5-largejpg.jpg?w=600&h=400&s=1",
    },
    {
        name: "Maredumilli",
        type: "natural",
        district: "East Godavari",
        description: "Eco-tourism destination with dense forests and waterfalls",
        imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqW_wyfD1scTz8VqS416BsPOOALeMW93vY1g&s",
    },
    {
        name: "Chandragiri Fort",
        type: "historical",
        district: "Chittoor",
        description: "Medieval fort with beautiful palace architecture",
        imageUrl: "https://s7ap1.scene7.com/is/image/incredibleindia/chandragiri-fort-tirupati-andhra-pradesh-1-new-attr-hero?qlt=82&ts=1726743424057",
    },
    {
        name: "Suryalanka Beach",
        type: "natural",
        district: "Guntur",
        description: "Pristine beach known for its golden sands",
        imageUrl: "https://assets.thehansindia.com/h-upload/2020/01/24/256851-suryalanka-beach.webp",
    },
    {
        name: "Kanaka Durga Temple",
        type: "religious",
        district: "Krishna",
        description: "Famous temple dedicated to Goddess Durga on Indrakeeladri hill",
        imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMUkEEiXRzp20pehPb9BkgHJl1QBqnyV4sNQ&s",
    }
];

const famousPlaces = {
    "Anantapur": [
        {
            name: "Lepakshi Temple",
            description: "Ancient temple known for its exquisite murals and architecture",
            imageUrl: "https://upload.wikimedia.org/wikipedia/commons/0/0a/Front_side_of_Veerabhadra_Temple%2C_Lepakshi.jpg"
        },
        {
            name: "Penna Dam",
            description: "Major irrigation project with scenic views",
            imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxRvIVhI_wK1DqexEyKUbYi5iP9qHQI3rQhw&s"
        }
    ],
    "Chittoor": [
        {
            name: "Tirumala Temple",
            description: "One of the most visited religious sites in the world",
            imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrkmVYZ9Echgiu4HQn0QStzZ7q9ZLjF0Q1-A&s"
        },
        {
            name: "Horsley Hills",
            description: "Beautiful hill station with panoramic views",
            imageUrl: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiIuL0mhkibUM45BkO2wYHpoHGB1wvsBP0lEXN85s2xVjttLnXGnJzKWrp-odnllVfQW1bVVA0Sk0x93hyphenhyphenO4a3GT_3O3Ekv8dzsmgACQimG1eZorp85fxOZA58a5TBdh1lIa3X07Ix5r0Xc/"
        }
    ],
    "East Godavari": [
        {
            name: "Konaseema",
            description: "Beautiful delta region with scenic backwaters",
            imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQr4M4_4u6wT5lSYHQ4LMuyY4UOa_C3pw6ZQQ&s"
        },
        {
            name: "Coringa Wildlife Sanctuary",
            description: "Second largest mangrove forest in India",
            imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9slIXvJ-ayJ1l-uqHzVUIMLcEmXO40pOEYQ&s"
        }
    ],
    "Guntur": [
        {
            name: "Undavalli Caves",
            description: "Ancient rock-cut caves with beautiful architecture",
            imageUrl: "https://www.trawell.in/admin/images/upload/249844204UndavalliCaves_Main.jpg"
        },
        {
            name: "Amaravati Stupa",
            description: "Historic Buddhist site with rich heritage",
            imageUrl: "https://travel-blog.happyeasygo.com/wp-content/uploads/2020/04/Amaravati-Stupa.jpg"
        }
    ],
    "Krishna": [
        {
            name: "Bhavani Island",
            description: "Scenic river island with recreational activities",
            imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSydAWE_9fzZrP2QQX6jkKYKF6R-XRDHZv2wg&s"
        },
        {
            name: "Kondapalli Fort",
            description: "Historic fort known for traditional toy making",
            imageUrl: "https://i0.wp.com/rashminotes.com/wp-content/uploads/2019/09/k3.png?fit=1503%2C929&ssl=1"
        }
    ],
    "Kurnool": [
        {
            name: "Belum Caves",
            description: "Second longest cave system in Indian subcontinent",
            imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ89c_XhcIj8NAoHuTtrKEl24rfbEi3ZBTgWg&s"
        },
        {
            name: "Srisailam Temple",
            description: "Ancient temple dedicated to Lord Shiva",
            imageUrl: "https://media.assettype.com/outlooktraveller%2F2024-07%2Fde3b5fc9-0fbf-41f2-ad04-d11a18b85b24%2Fshutterstock_1009388953.jpg"
        }
    ],
    "Prakasam": [
        {
            name: "Chirala Beach",
            description: "Beautiful beach with pristine waters",
            imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSD3ANgCmQGhtsCj1hZ7WnjBPEXO-xm405uVg&s"
        },
        {
            name: "Chandravanka Temple",
            description: "Historic temple with unique architecture",
            imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLV8wnOAFeiI4r1983V3XViS1_po4_Li5-wA&s"
        }
    ],
    "Nellore": [
        {
            name: "Pulicat Lake",
            description: "Second largest brackish water lagoon in India",
            imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMfndgrmVeaRkjOTcaOXswom4bE3xtbChBbA&s"
        },
        {
            name: "Penchalakona Temple",
            description: "Ancient temple surrounded by seven hills",
            imageUrl: "https://historicalplacesandtemples.wordpress.com/wp-content/uploads/2016/10/penchalakoma.jpg?w=1200"
        }
    ],
    "Srikakulam": [
        {
            name: "Arasavalli Sun Temple",
            description: "Ancient temple dedicated to Sun God",
            imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTN2CNKCN0nYL6wEu_IUN6X3Y79ysq1qMMl0A&s"
        },
        {
            name: "Kalingapatnam Beach",
            description: "Historic port town with beautiful beach",
            imageUrl: "https://www.realjourneytravels.com/wp-content/uploads/Port-Kalingapatnam-beach-Kalingapatnam.jpg"
        }
    ],
    "Visakhapatnam": [
        {
            name: "RK Beach",
            description: "Popular beach with submarine museum",
            imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqTnqNGtd7-okROi9-yF93jGdR9eOcb8CQzA&s"
        },
        {
            name: "Araku Valley",
            description: "Beautiful hill station with coffee plantations",
            imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnFOzufe1VM5g5HYtfho70gFDXVBnG1r2Few&s"
        }
    ],
    "Vizianagaram": [
        {
            name: "Vizianagaram Fort",
            description: "Historic fort with rich heritage",
            imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsnJc_7k-FpwPdc_J8iOv2wzzhDovYeMA4PwYPsEMe-F3vXhoTIB1UOmw2VN5A8J3kmRA&usqp=CAU"
        },
        {
            name: "Ramatheertham Temple",
            description: "Ancient temple on hilltop",
            imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRishjSCLT3gR8Yg0rA6VS8GEdBdyGG584FJQ&s"
        }
    ],
    "West Godavari": [
        {
            name: "Kolleru Lake",
            description: "Largest freshwater lake in India",
            imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiV-s9fIzjl0cmZTVLHffUWcpjcuY55XgWHw&s"
        },
        {
            name: "Dwaraka Tirumala",
            description: "Famous temple known as Chinna Tirumala",
            imageUrl: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEitj6Gz-2V-C83L_BROBrPQviDLSgLVIWFsnakZ1tzMwp6oTSHwpH7Zr7MMEPRRiqPQOYlZN1R7qp1avGgphPo9T-VmRmuy6_TJW6Au9Gg6Q8HIZK52k-U-3GpLsqgrNFEsIkv1hM0cmGFX/s640/Temple-dwarka-tirumala.jpg"
        }
    ],
    "YSR Kadapa": [
        {
            name: "Gandikota",
            description: "Grand Canyon of India",
            imageUrl: "https://masalabox.co.in/wp-content/uploads/2019/09/rsz_gandikota_rocks.jpg"
        },
        {
            name: "Vontimitta Temple",
            description: "Historic temple with beautiful architecture",
            imageUrl: "https://upload.wikimedia.org/wikipedia/commons/1/19/Sri_Kodanda_Rama_Swamy_Temple%2C_Vontimitta%2C_Kadapa.jpg"
        }
    ]
};

const famousFoods = {
    "Anantapur": [
        {
            name: "Rayalaseema Ragi Sangati",
            description: "Traditional millet ball dish served with spicy curry",
            imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQojHuU5094UZzd_rOrv17df1a-DQmp1jx36A&s"
        },
        {
            name: "Groundnut Chutney",
            description: "Spicy peanut chutney, a local specialty",
            imageUrl: "https://www.indianhealthyrecipes.com/wp-content/uploads/2020/12/peanut-chutney-ground-nut-chutney.jpg"
        }
    ],
    "Chittoor": [
        {
            name: "Tirupati Laddu",
            description: "Famous sweet prasadam from Tirumala temple",
            imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQP6TWxdzC_1UlixepdNecbsbPt_enS4AtpoQ&s"
        },
        {
            name: "Pulihora",
            description: "Traditional tamarind rice",
            imageUrl: "https://aahaaramonline.com/wp-content/uploads/2019/04/Andhra_Nuvvula_Chintapandu_Pulihora_1.jpg"
        }
    ],
    "East Godavari": [
        {
            name: "Pulasa Fish Curry",
            description: "Special fish curry with unique taste",
            imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4kFnPQCMhxF3VNXF7mfBS5Qdt-hxqLGw25Q&s"
        },
        {
            name: "Coconut Rice",
            description: "Traditional rice dish with coconut",
            imageUrl: "https://www.indianhealthyrecipes.com/wp-content/uploads/2021/05/coconut-rice-recipe.jpg"
        }
    ],
    "Guntur": [
        {
            name: "Guntur Chilli Chicken",
            description: "Spicy chicken dish with famous Guntur chilies",
            imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReFsJVLXntUTtujLlCm9NgisHuvY7N1jPFJA&s"
        },
        {
            name: "Gongura Pachadi",
            description: "Traditional chutney made from sorrel leaves",
            imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAmaUwHT7_5NZlVuEjT8EgGCdpZ4oGPirA5g&s"
        }
    ],
    "Krishna": [
        {
            name: "Pesarattu",
            description: "Green gram dosa with special chutney",
            imageUrl: "https://www.kannammacooks.com/wp-content/uploads/pesarattu.jpg"
        },
        {
            name: "Gutti Vankaya Curry",
            description: "Stuffed eggplant curry",
            imageUrl: "https://cakeworkorange.com/wp-content/uploads/2020/11/stuffed-brinjal-curry-1-500x375.jpg"
        }
    ],
    "Kurnool": [
        {
            name: "Ragi Sankati",
            description: "Traditional millet balls",
            imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQojHuU5094UZzd_rOrv17df1a-DQmp1jx36A&s"
        },
        {
            name: "Natukodi Pulusu",
            description: "Country chicken curry",
            imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReFsJVLXntUTtujLlCm9NgisHuvY7N1jPFJA&s"
        }
    ],
    "Prakasam": [
        {
            name: "Ulava Charu",
            description: "Horse gram soup",
            imageUrl: "https://everydaynourishingfoods.com/wp-content/uploads/2019/12/Ulavacharu_recipe.jpg"
        },
        {
            name: "Fish Pulusu",
            description: "Traditional fish curry",
            imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4kFnPQCMhxF3VNXF7mfBS5Qdt-hxqLGw25Q&s"
        }
    ],
    "Nellore": [
        {
            name: "Nellore Fish Curry",
            description: "Famous spicy fish curry",
            imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4kFnPQCMhxF3VNXF7mfBS5Qdt-hxqLGw25Q&s"
        },
        {
            name: "Chicken Biryani",
            description: "Special Nellore style biryani",
            imageUrl: "https://recipe30.com/wp-content/uploads/2023/03/chicken-Biryani.jpg"
        }
    ],
    "Srikakulam": [
        {
            name: "Pulasa Fish Curry",
            description: "Special curry with Pulasa fish",
            imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCU-HQdVgQa8pwtL-9S6H4gWze_p0dzbRxbA&s"
        },
        {
            name: "Pesarattu",
            description: "Green gram dosa",
            imageUrl: "https://www.kannammacooks.com/wp-content/uploads/pesarattu.jpg"
        }
    ],
    "Visakhapatnam": [
        {
            name: "Bamboo Chicken",
            description: "Tribal style chicken cooked in bamboo",
            imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQse380Cc7Q3rGD80NHl6kN9hnZ2yLYE2yNLQ&s "
        },
        {
            name: "Madugula Halwa",
            description: "Traditional sweet dish",
            imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvi97u2S_9hu-d3Cxy0q4Dk612i01UqdKyCQ&s"
        }
    ],
    "Vizianagaram": [
        {
            name: "Vizianagaram Cakes",
            description: "Famous local sweet",
            imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyISfu6Vfp-Yx-_IbR2eqAqmRmUJQxw1q6YQ&s"
        },
        {
            name: "Pulihora",
            description: "Traditional tamarind rice",
            imageUrl: "https://aahaaramonline.com/wp-content/uploads/2019/04/Andhra_Nuvvula_Chintapandu_Pulihora_1.jpg"
        }
    ],
    "West Godavari": [
        {
            name: "Godavari Fish Curry",
            description: "Special fish curry",
            imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3j8fuLmfmK4kG2pFsSORsjja4GLlFhE9Isw&s"
        },
        {
            name: "Pootharekulu",
            description: "Traditional sweet made of rice starch",
            imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNTrbuokpSOT2Pl8lGYyys5DzaW5y9FjcKgg&s"
        }
    ],
    "YSR Kadapa": [
        {
            name: "Kadapa Karam",
            description: "Special spicy powder",
            imageUrl: "https://b.zmtcdn.com/data/pictures/4/20935314/f1e791678faf9e28ba18e19f48e4f0dc_o2_featured_v2.jpg?fit=around|960:500&crop=960:500;*,*"
        },
        {
            name: "Ragi Sangati",
            description: "Traditional millet balls",
            imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQojHuU5094UZzd_rOrv17df1a-DQmp1jx36A&s"
        }
    ]
};
