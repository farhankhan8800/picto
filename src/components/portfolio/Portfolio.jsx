import Projects from "./Projects";

const projectData = [
  {
    id: 1,
    image:
      "https://pbs.twimg.com/profile_images/1085124177198239744/OEyiKVEz_400x400.jpg",
    category: "FreeKaaMaal Cashback Platform",
    title: "Product Admin Dashboard",
    description:
      "I worked on FreeKaaMaal, one of India’s leading cashback and affiliate platforms with millions of active users. My contribution focused on building the cashback wallet system, integrating affiliate tracking (Postback / S2S / Pixel), automating reward validation flows, and developing internal revenue & performance dashboards. I also implemented dynamic offer management and merchant listing modules to ensure users get accurate cashback and merchants get proper tracking. The goal was to create a seamless, reliable and scalable cashback experience for users across the platform.",
    link: "#!",
  },
  {
    id: 2,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIj11S7RpPqar-G8wKjPIA7GwYGw06OjiIlg&s",
    category: "Woost Influencer Platform",
    title: "Webapp Platform IOS & Android Apps",
    description:
      "At Woost, I worked on building a complete influencer marketing platform where brands and creators connect for campaigns. I developed the campaign workflow system, creator application & approval flow, dynamic offer pages, tracking links, and performance-based payout logic. I also integrated analytics to measure engagement, clicks, sales, and ROI for each influencer, enabling brands to make data-driven decisions. The platform was designed to automate collaboration, simplify campaign management, and scale influencer-driven growth efficiently.",
    link: "#!",
  },
  {
    id: 3,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMFPqfHpxVi3F6EGE0w16Nfm_HyVg974B61A&w=400&h=400",
    category: "Herbal Wellness E-commerce",
    title: "Entire E-commerce Platform",
    description:
      "I worked on HerbalMax, a wellness and herbal products e-commerce platform focused on premium, science-backed formulations. My role included building the product catalog system, subscription/auto-refill ordering, secure checkout flow, and customer account dashboard. I also optimized the website for mobile performance, improved product detail UI for better trust-building, and implemented reviews, dosage guides, and ingredient transparency sections. The result was a fast, clean, and conversion-focused shopping experience designed to increase customer confidence and repeat sales.",
    link: "#!",
  },
  {
    id: 4,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnpN0RLBhiPhfrqdlJD6NxLQmqdzFABhPUMw&w=400&h=400",
    category: "STRCH Performance Clothing",
    title: "Entire E-commerce Platform",
    description:
      "worked on Stretch, a performance-focused clothing e-commerce brand built around comfort, fit, and everyday usability. I developed the complete online storefront with a clean product browsing experience, size/fit guide system, and seamless checkout flow. I optimized product pages with lifestyle imagery, fabric breakdown details, and variant/size selection to improve conversions. The platform was built for speed, mobile-first usability, and a smooth add-to-cart journey, helping the brand enhance trust and boost repeat purchases..",
    link: "#!",
  },
  {
    id: 5,
    image: "https://theaxio.com/logowhite.png",
    category: "AXIO Lifestyle Brand",
    title: "Product Admin Dashboard || Android & IOS Apps",
    description:
      "I designed the brand identity, typography system, tone of voice, UI/UX of the online store, and implemented the backend architecture for product management, order flow, and inventory. The storefront is optimized for mobile-first shopping, fast performance, and a seamless checkout journey..",
    link: "#!",
  },
];

const Portfolio = () => {
  return (
    <div
      className="content mt-10 md:mt-15 xl:mt-25 mb-10 md:mb-25 max-xxl:p-2"
      id="portfolio"
    >
      <div className="xl:mb-17.5 mb-5">
        <div className="max-sm:px-2 text-center mx-auto max-w-144.25">
          <p className="section-title ">Portfolio</p>
          <p className="font-normal text-[18px] max-sm:text-[14px] pt-6 text-gray-400">
            Here's a selection of my recent work, showcasing my skills in
            creating user-centric and visually appealing interfaces.
          </p>
        </div>
      </div>
      <div className="mx-auto flex justify-center">
        <div className="grid xl:grid-cols-3 md:grid-cols-2 gap-6">
          {projectData.map((data, index) => (
            <Projects data={data} key={index} />
          ))}
        </div>
      </div>
      <div className="text-center">
        <a
          href="#!"
          className="btn btn-primary py-3 px-6 mt-12.5 text-center text-[16px] font-semibold"
        >
          More Project
        </a>
      </div>
    </div>
  );
};

export default Portfolio;
