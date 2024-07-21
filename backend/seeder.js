import { Product } from "./models/index.js";

const products = [
  {
    id: 1,
    name: "PlayStation 5",
    description:
      "PlayStation 5 (PS5) is a home video game console developed by Sony Interactive Entertainment. Announced in 2019 as the successor to the PlayStation 4, the PS5 was released on November 12, 2020 in Australia, Japan, New Zealand, North America, Singapore, and South Korea, and November 19, 2020 onwards in other major markets except China and India.",
    price: "49999.00",
    countInStock: 15,
    imageUrl: "https://m.media-amazon.com/images/I/619BkvKW35L._SL1500_.jpg",
    rating: 4.7,
    numReviews: 1200,
  },
  {
    id: 2,
    name: "Iphone 12",
    description:
      "Welcome to a new era of iPhone. Beautifully bright 6.1-inch Super Retina XDR display.1 Ceramic Shield with 4x better drop performance.2 Incredible low-light photography with Night mode on all cameras. Cinema-grade Dolby Vision video recording, editing, and playback. Powerful A14 Bionic chip. And new MagSafe accessories for easy attach and faster wireless charging.3 Let the fun begin.",
    price: "69900.00",
    countInStock: 10,
    imageUrl: "https://m.media-amazon.com/images/I/71ZOtNdaZCL._SL1500_.jpg",
    rating: 4.6,
    numReviews: 980,
  },
  {
    id: 3,
    name: "Cannon EOS-1D",
    description:
      "The EOS-1D X combines speed with image quality, to create the next generation camera for professionals. Full frame 18 megapixel sensor with Dual “DIGIC 5+” processors sets the standard, and up to 12 frames per second shooting takes it beyond.",
    price: "470000.00",
    countInStock: 5,
    imageUrl: "https://m.media-amazon.com/images/I/719x4MGrhRL._SL1037_.jpg",
    rating: 4.8,
    numReviews: 150,
  },
  {
    id: 4,
    name: "Amazon Echo",
    description:
      "It is capable of voice interaction, music playback, making to-do lists, setting alarms, streaming podcasts, playing audiobooks, and providing weather, traffic, sports, and other real-time information, such as news. Alexa can also control several smart devices using itself as a home automation system.",
    price: "4499.00",
    countInStock: 25,
    imageUrl: "https://m.media-amazon.com/images/I/61H16Iw9AYL._SL1000_.jpg",
    rating: 4.5,
    numReviews: 2000,
  },
  {
    id: 5,
    name: "Audio Technica Headphones",
    description:
      "Outfitted with 45mm large-aperture dynamic drivers and an over-ear, closed-back design, the ATH-M50x headphones deliver clarity, deep bass, and extended bandwidth (15 Hz to 28 kHz) while isolating you from outside sounds.",
    price: "12999.00",
    countInStock: 4,
    imageUrl: "https://m.media-amazon.com/images/I/71HlB-gf46L._SL1500_.jpg",
    rating: 4.3,
    numReviews: 300,
  },
  {
    id: 6,
    name: "JBL FLIP 4",
    description:
      "JBL Flip 4 is the next generation in the award-winning Flip series; it is a portable Bluetooth speaker that delivers surprisingly powerful stereo sound. This compact speaker is powered by a 3000mAh rechargeable Li-ion battery that offers up to 12 hours of continuous, high-quality audio playtime.",
    price: "7999.00",
    countInStock: 10,
    imageUrl: "https://m.media-amazon.com/images/I/71xKmsQ9XsL._SL1500_.jpg",
    rating: 4.4,
    numReviews: 450,
  },
  {
    id: 7,
    name: "Samsung Galaxy S21",
    description:
      "Samsung Galaxy S21 features a 6.2-inch Dynamic AMOLED 2X display, Exynos 2100 processor, and a triple camera setup with a 64MP telephoto lens.",
    price: "69999.00",
    countInStock: 8,
    imageUrl: "https://m.media-amazon.com/images/I/81kfA-GtWwL._SL1500_.jpg",
    rating: 4.6,
    numReviews: 850,
  },
  {
    id: 8,
    name: "Google Nest Hub",
    description:
      "Google Nest Hub helps you stay entertained and connected with a 7-inch touchscreen display, Google Assistant built-in, and hands-free control of your smart home devices.",
    price: "7999.00",
    countInStock: 12,
    imageUrl:
      "https://rukminim2.flixcart.com/image/832/832/kylvr0w0/speaker/t/b/l/-original-imagasvdkghfmpkb.jpeg?q=70&crop=false",
    rating: 4.5,
    numReviews: 600,
  },
  {
    id: 9,
    name: "Sony WH-1000XM4",
    description:
      "Sony WH-1000XM4 wireless noise-canceling headphones deliver exceptional sound quality, comfort, and industry-leading noise cancellation.",
    price: "24990.00",
    countInStock: 6,
    imageUrl: "https://m.media-amazon.com/images/I/71o8Q5XJS5L._SL1500_.jpg",
    rating: 4.7,
    numReviews: 1100,
  },
  {
    id: 10,
    name: "Apple MacBook Pro",
    description:
      "Apple MacBook Pro features a 13.3-inch Retina display, M1 chip, 8GB RAM, and 256GB SSD for powerful performance and seamless multitasking.",
    price: "122900.00",
    countInStock: 5,
    imageUrl: "https://m.media-amazon.com/images/I/71an9eiBxpL._SL1500_.jpg",
    rating: 4.8,
    numReviews: 900,
  },
  {
    id: 11,
    name: "Fitbit Versa 4",
    description:
      "Fitbit Versa 4 is a smartwatch that offers 24/7 heart rate monitoring, built-in GPS, and up to 6 days of battery life.",
    price: "19999.00",
    countInStock: 20,
    imageUrl: "https://m.media-amazon.com/images/I/61GD5fmd0XL._SL1500_.jpg",
    rating: 3.7,
    numReviews: 3135,
  },
  {
    id: 12,
    name: "Nikon D850",
    description:
      "Nikon D850 is a high-resolution DSLR camera with a 45.7-megapixel sensor, EXPEED 5 image processor, and 4K UHD video recording capabilities.",
    price: "274999.00",
    countInStock: 3,
    imageUrl: "https://m.media-amazon.com/images/I/81WtQ64-SOL._SL1500_.jpg",
    rating: 4.9,
    numReviews: 120,
  },
  {
    id: 13,
    name: "Sony PlayStation VR2",
    description:
      "Sony PlayStation VR2 offers an immersive virtual reality gaming experience with a 5.7-inch OLED display, 3D audio, and a 120Hz refresh rate.",
    price: "57999.00",
    countInStock: 7,
    imageUrl: "https://m.media-amazon.com/images/I/517CoPDzOpL._SL1500_.jpg",
    rating: 4.6,
    numReviews: 500,
  },
  {
    id: 14,
    name: "Dell XPS 13",
    description:
      "Dell XPS 13 features a 13.4-inch FHD+ display, Intel Core i7 processor, 16GB RAM, and 512GB SSD, offering powerful performance in a sleek design.",
    price: "149999.00",
    countInStock: 4,
    imageUrl: "https://m.media-amazon.com/images/I/71e-hCPWmYL._SL1500_.jpg",
    rating: 4.7,
    numReviews: 350,
  },
  {
    id: 15,
    name: "Logitech MX Master 3",
    description:
      "Logitech MX Master 3 is an advanced wireless mouse with ultra-fast scrolling, ergonomic design, and customizable buttons for enhanced productivity.",
    price: "9999.00",
    countInStock: 15,
    imageUrl: "https://m.media-amazon.com/images/I/61ni3t1ryQL._SL1500_.jpg",
    rating: 4.6,
    numReviews: 750,
  },
  {
    id: 16,
    name: "Samsung Galaxy Watch 3",
    description:
      "Samsung Galaxy Watch 3 is a smartwatch with advanced health monitoring features, a rotating bezel, and a sleek design.",
    price: "29990.00",
    countInStock: 10,
    imageUrl: "https://m.media-amazon.com/images/I/61ftRB6KycL._SL1500_.jpg",
    rating: 4.5,
    numReviews: 500,
  },
  {
    id: 17,
    name: "Bose QuietComfort 35 II",
    description:
      "Bose QuietComfort 35 II are wireless noise-canceling headphones with Alexa voice control and up to 20 hours of battery life.",
    price: "25499.00",
    countInStock: 8,
    imageUrl: "https://m.media-amazon.com/images/I/51QeS0jkx-L._SL1500_.jpg",
    rating: 4.7,
    numReviews: 950,
  },
  {
    id: 18,
    name: "HP Spectre x360",
    description:
      "HP Spectre x360 is a 2-in-1 laptop with a 13.3-inch 4K UHD touchscreen display, Intel Core i7 processor, 16GB RAM, and 512GB SSD.",
    price: "129999.00",
    countInStock: 6,
    imageUrl: "https://m.media-amazon.com/images/I/71XQ3QqOfbL._SL1500_.jpg",
    rating: 4.6,
    numReviews: 300,
  },
  {
    id: 19,
    name: "DJI Mavic Air 2",
    description:
      "DJI Mavic Air 2 is a foldable drone with a 48MP camera, 4K video recording, 34-minute flight time, and advanced obstacle avoidance.",
    price: "84999.00",
    countInStock: 4,
    imageUrl: "https://m.media-amazon.com/images/I/4133JEo5CzL.jpg",
    rating: 4.7,
    numReviews: 220,
  },
  {
    id: 20,
    name: "Microsoft Surface Pro 7",
    description:
      "Microsoft Surface Pro 7 is a versatile 2-in-1 laptop with a 12.3-inch touchscreen display, Intel Core i5 processor, 8GB RAM, and 128GB SSD.",
    price: "89999.00",
    countInStock: 7,
    imageUrl: "https://m.media-amazon.com/images/I/51L40XTsN+L._SL1500_.jpg",
    rating: 4.5,
    numReviews: 400,
  },
];

try {
  Product.bulkCreate(products);

  console.log(` ☑ data seeding success`);

  process.exit();
} catch (error) {
  console.error(` ❌ error ${error}`);
  process.exit(1);
}
