import React from "react";

import { Typography } from "@material-tailwind/react";

const LINKS = [
  {
    title: "About Vi",
    items: [
      "About Us",
      "Vodafone Idea Corp",
      "Vodafone Idea Foundation",
      "Vodafone Group",
      "Aditya Birla Group",
      "Investor Relations",
      "News & Media",
      "Career",
      "Vi App",
      "Vi Stores Near Me",
      "Vi Business",
      "Home Broadband",
      "GIGAnet",
      "Vi VoLTE",
      "Go Green",
      "Vi MiFi",
      "eSIM",
      "WiFi Calling",
      "5G",
      "Blog",
    ],
  },

  {
    title: "more from Vi",
    items: [
      "Postpaid Connection",
      "Prepaid Connection",
      "Port Number to Vi / MNP",
      "Free SIM Delivery",
      "Track your SIM Delivery",
      "Fancy Number",
      "Individual Plans",
      "Family Plans",
      "REDX",
      "Prepaid to Postpaid",
      "Portable WiFi",
      "Best Postpaid Plans",
      "Best Prepaid Plans",
      "Hero Unlimited Plans",
      "Unlimited Plans",
      "Data Plans",
      "SMS Packs",
      "Caller Tunes Packs",
      "Value Added Services",
      "Service Validity Plans",
      "Disney+ Hotstar Plans",
      "Amazon Prime Offer",
      "Sony LIV offers",
      "Online Recharge",
      "Postpaid Bill Payment",
      "Sun NXT offers",
    ],
  },
  {
    title: "explore on Vi app",
    items: [
      " Vi Hungama Music",
      "Vi Games",
      "Vi Movies & TV",
      "Vi Jobs & Education",
      "Vi Services",
      "Vi Hero Unlimited",
      "Vi WiFi Calling",
      "International Roaming",
      "Callertunes",
      "Order Prepaid SIM",
      "Order Postpaid SIM",
      "Order VIP Number",
      "Port to Vi",
      "Order Portable WiFi Router",
      "Recharge for Self/Others",
      "Gift a recharge",
      "Pay Bill for Self/Others",
      "Cashback Offers",
      "Rewards Store",
      "Vi Tuesdays",
      "Help & Support",
      "My Account",
    ],
  },

  {
    title: "regulatory & quick access",
    items: [
      "Telemarketing Registration",
      "Privacy Policy",
      "Terms of Service",
      "Notices",
      "Prepaid TRAI mandate",
      "Postpaid TRAI mandate",
      "Warning & Fraudulent",
      "Security Awareness",
      "DND Complaints",
      "DND Registration",
      "Disaster Management",
      "Responsible Disclosure Policy",
      "Register for Online Refund",
      "Network Troubleshooting",
      "Short Code & USSD Info",
      "Block SIM Online",
      "UPI Recharge",
      "Postpaid ISD Call Rates",
      "Prepaid ISD Call Rates",
      "Mobile Internet",
      "Sitemap",
    ],
  },
];

const soicial_links = [
  "./group-66.svg",
  "./group-75.svg",
  "./group-76.svg",
  "./youtube.svg",
  "./group-59.svg",
];

const h3 = document.querySelectorAll("h3");
h3.forEach((item) => {
  item.style.fontWeight = "bold";
});

export default function Footer() {
  return (
    <footer className="relative w-full bg-[#fdf8f0] pt-32 space-y-6  pb-20">
      <div className="mx-auto w-full max-w-7xl px-8">
        <div className="flex flex-row gap-12 justify-center ">
          <div className="mb-6 pr-10 space-y-4 ">
            <img src="./vi-logo.svg" alt="logo" className=" h-12 w-12 mr-8" />
            <h1 className="text-[20px] font-bold"> Vodafone Idea Limited</h1>
            <p className="text-[13px] font-normal">
              vodafone Idea Limited is an Aditya Birla Group <br /> and Vodafone
              Group partnership. The Company
              <br /> provides pan India Voice and Data services
              <br /> across 2G, 3G and 4G platform
            </p>
            <div className="flex flex-row gap-5">
              {soicial_links.map((icon, i) => (
                <img src={icon} key={i} alt={i} />
              ))}
            </div>
          </div>

          {LINKS.map(({ title, items }) => (
            <ul key={title}>
              <Typography
                variant="small"
                className="mb-3 font-bold text-[16px] text-black pb-5"
              >
                {title}
              </Typography>
              {items.map((link) => (
                <li key={link}>
                  <Typography
                    as="a"
                    href="#"
                    color="gray"
                    className="py-1.5 font-normal transition-colors hover:text-blue-gray-900 text-[14px]"
                  >
                    {link}
                  </Typography>
                </li>
              ))}
            </ul>
          ))}
        </div>
      </div>

      <div className=" bg-[#fcf3e7] px-40 text-[10px] py-5">
        This website uses own third-party cookies.Find out more about usage in
        our <span className=" underline"> Privacy Policy</span> page. Copyright
        Reserved with Vodafone Idea Limited (formerly Idea Cellular Limited).{" "}
        <br /> Vodafone Idea Limited (Formerly Idea Cellular Limited), An Aditya
        Birla Group & Vodafone partnership, Suman Towers, Plot No.18, Sector 11,
        Gandhinagar – 382011, Gujarat.CIN L32100GJ1996PLC030976, T: +91-79 6671
        4000, F: +91-79 2323 2251
      </div>

      <div className=" mx-40 space-y-6">
        <h2>Our Other Important Offerings:</h2>

        <h3>Recharge Offers:</h3>
        <p>
          Vi brings you the best{" "}
          <span className=" underline"> mobile recharge</span> offers with
          unlimited calling and daily data for seamless connectivity. Avail
          exclusive online recharge offers via the Vi App or website and enjoy a
          world full of benefits such as Short/Long-Term Validity, Unlimited
          Night Data, Data Rollover, Data Delight, access to multiple OTTs, and
          much more with Vi online recharge offers.
        </p>
        <ul style={{ listStyleType: "square", paddingLeft: "40px" }}>
          <li>Recharge via the Vi App to avail App exclusive offers</li>
          <li>
            Check the Recharge offers on the{" "}
            <span className=" underline"> Cashback Offers </span>page
          </li>
          <li>
            Head to the Prepaid Plans page and click on pack details for offers
            such as extra data, free OTT subscriptions, etc.
          </li>
          <li>
            Browse through Vi App Homepage to find out about festive recharge
            offers, and Spin the Wheel
          </li>
        </ul>
        <h3>Bill Payment Offers</h3>
        <p>
          Pay bills online and avail postpaid bill payment offers with Cred Pay,
          Amazon Pay, Paytm, MobiKwik, LazyPay, etc. Vi postpaid bill offers
          include assured cashbacks and other discounts on eligible
          transactions. Cashback would be credited to respective UPI wallets or
          via scratch cards. Enrol for autopay to automatically{" "}
          <span className=" underline">pay postpaid bills online.</span>
        </p>

        <h3>Caller Tunes Download</h3>
        <p>
          Vi Caller tunes are a unique way to keep callers engaged with
          entertaining songs/music/movie dialogues or customized tunes. Browse
          through trending songs or the latest viral hits and set your favorite
          songs as <span className=" underline">callertunes</span>.Go to the
          music store for a vast repository of songs/dialogues across genres and
          select a caller tune of your preference.
        </p>

        <h3>Games</h3>

        <p>
          <span className=" underline">Play games online</span> across
          categories such as action games, board games, fantasy, matches,
          tournaments, trending free games, etc. on the Vi App. Participate in
          online games and win exciting rewards or vouchers. Check out Game of
          the Day on the Vi App and play free online games for fun. Play VIP
          tournaments with a daily pass and win big!
        </p>

        <h3>Movies and TV</h3>
        <p>
          Watch free movies online via <span className=" underline"></span>Vi
          Movies & TVon the Vi App. Select from latest online movies, shows,
          trending TV channels, News, Short films, Kids Shows, and more. Vi
          Movies & TV is also a one stop free live TV app with access to 350+
          Live TV channels. Enjoy curated content in different languages from
          across partner OTT platforms such as Hungama, Pocket Films, Shemaroo,
          etc. via the Vi.
        </p>

        <h3>Music on Vi App</h3>
        <p>
          With an active Gold subscription,
          <span className=" underline">listen songs online</span> via Hungama
          Music on the Vi App. With an extensive collection of playlists from
          Latest Hits, Weekly Charts, Devotional songs to K-pop specials, there
          is something for every mood. Play music online, listen to
          entertaining/educational podcasts, and watch music videos with Vi
          Hungama Music on the Vi App.
        </p>

        <h3>5G</h3>

        <p>
          Get ready to experience the potential of the Vi 5G network in India
          with 5G live at select places in Pune and Delhi. Seamless connectivity
          with Vi 5G ready SIM.
        </p>
        <h3>Jobs</h3>
        <p>
          <span className=" underline">Vi Job </span>sis the fastest way to
          search jobs online, apply and quickly get an interview slot, to land
          your dream job. Search for part-time jobs, work-from-home jobs, and
          other job vacancies in a preferred location with Job Hai & Apna Jobs
          on the Vi App. Move ahead of the queue and increase the chances of
          finding jobs online.
        </p>

        <h3>Education</h3>
        <p className=" ">
          <span className=" underline">Learn spoken English</span>with
          English-speaking courses via Enguru on the Vi App. Check all topic
          categories and improve your English with English Online Classes.
          Prepare for state and central government jobs with free mock tests and
          online test series via Pariksha on the Vi App. Select an exam category
          and learn with easy-to-understand online recorded videos.
        </p>
      </div>
    </footer>
  );
}
