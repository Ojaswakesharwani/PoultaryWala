// src/i18n.js
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: {
          // --- Existing ---
          home_title: "Welcome to our website",
          about_title: "About Us",
          services_title: "Our Services",
          explore_title: "Explore",
          future_title: "Future Plans",
          presence_title: "Our Presence",
          footer_text: "All rights reserved",

          // --- New (nested home section) ---
          home: {
            tagline: "India’s No.1 Poultry Trading Hub",
            subTagline: "Smart Trading • Secure Deals • Strong Network",
            heading: "Transforming Poultry Trading with Technology",
            subtext:
              "India’s first organized B2B platform for contract broiler trading – Connecting verified poultry traders.",
            registerText: "For getting latest updates, register yourself:",
            registerBtn: "Register Now",
            appBtn: "Get App"
          },
          about: {
            heading: "About Us",
            description:
              "Poultrywala by Ninjafarm is India’s first organized B2B digital marketplace for live broiler poultry trading. We connect contract poultry farming companies with verified poultry traders to enable seamless, secure, transparent, and reliable transactions.",
            features: {
              verified: "Verified Profiles",
              trading: "Real Time Trading",
              contracts: "Digital Contracts",
              rates: "Daily Rates",
              order: "Order Poultry",
            },
            imageAlt: "About Poultrywala",
          },
          explore: {
        title: "Explore Poultry Traders",
        subtitle: "Compare trusted suppliers, check today’s prices, and connect instantly.",
        whyUseTitle: "Why Use Explore?",
        whyUseText: "The Explore section gives you real-time prices from verified poultry traders. Compare suppliers, check ratings, and connect directly with confidence.",
        whyChooseTitle: "Why Choose Verified Traders?",
        
        card1Title: "Trust & Security",
        card1Desc: "Every trader is verified to ensure secure and reliable trading.",
        card2Title: "Fair Pricing",
        card2Desc: "Real-time market rates without hidden charges or middlemen.",
        card3Title: "Nationwide Network",
        card3Desc: "Connect with farmers and traders across multiple states in India.",
        card4Title: "Quality Checked",
        card4Desc: "Strict quality checks before every dispatch for healthy poultry.",
        card5Title: "Instant Connections",
        card5Desc: "Chat and connect instantly with verified suppliers & buyers.",
        card6Title: "Growth Opportunities",
        card6Desc: "Expand your poultry business by reaching thousands of buyers daily.",

        ctaTitle: "Be a Part of India’s Trusted Poultry Marketplace",
        ctaText: "Whether you are a supplier or a buyer, join our growing network and connect with verified partners today.",

        traderTitle: "Register as a Trader",
        traderText: "List your company, showcase daily prices, and reach thousands of buyers.",
        traderBtn: "Register as Trader",

        buyerTitle: "Register as a Buyer",
        buyerText: "Access verified traders, compare rates instantly, and connect directly.",
        buyerBtn: "Register as Buyer",

        verified1: "All traders are government-verified for authenticity.",
        verified2: "Transparent daily poultry prices updated in real-time.",
        verified3: "Direct farmer-to-buyer connections without middlemen.",
        verified4: "Secure payments with trusted partners.",
        verified5: "Fast & reliable delivery across India.",
        verified6: "Quality-controlled poultry before every dispatch."
      },
      services: {
        heroTitle: "Poultrywala – Connecting",
        heroHighlight: "Traders & Farmers",
        heroSubtitle: "Buy and sell broiler hens directly from trusted traders & farmers. Verified profiles, transparent rates & quality-controlled deliveries.",
        ourServices: "Our Services",
      
        card1Title: "Trading Platform",
        card1Desc: "Seamless connection between buyers & traders with verified profiles for trustworthy deals.",
      
        card2Title: "Quality Control",
        card2Desc: "Every batch checked for quality before delivery, ensuring only the best poultry reaches you.",
      
        card3Title: "Delivery Network",
        card3Desc: "Fast deliveries from nearest verified farms with real-time tracking.",
      
        networkTitle: "Farmers & Traders Network",
        networkText: "We connect buyers to thousands of farmers & traders across India. Find the nearest verified poultry source at transparent rates.",
        cities: ["Delhi", "Mumbai", "Lucknow", "Hyderabad", "Kolkata", "Jaipur", "Chennai", "Bengaluru"],
      
        ctaTitle: "Ready to Start Trading?",
        ctaText: "Join thousands of farmers & traders who trust Poultrywala for reliable poultry trading.",
        ctaBtn: "Register Now"
      },
      // ✅ Future Section (ReviewsSection)
      future_title: "Future of",
      future_highlight: "Poultry Trading",
      future_steps: {
        signUp: "Sign Up",
        verify: "Get Verified",
        connect: "Connect & Trade",
        track: "Track Deliveries"
      },
      future_reviews_count: "Reviews",
      future_highlight_name: "Aditya Sinha",
      future_highlight_review: "Poultrywala helped us double our trade efficiency.",
      future_highlight_info: "Verified Trader • Serving 10+ Cities",
      future_reviews: [
        { name: "Aditya Satisfaction", rating: "5.0" },
        { name: "Selena Ray", rating: "4.0" },
        { name: "Vikram Mishra", rating: "4.0" },
        { name: "Rahul Sharma", rating: "4.5" },
        { name: "Priya Verma", rating: "5.0" }
      ],
      presence_title: "Comming Soon Our Android App",
      presence_realtime: "Real Time Trading",
      presence_verified: "Verified Profiles",
      presence_online: "Online Profiles",
      presence_reviews: "All Reviews",
      presence_contracts: "Digital Contracts",

      registration_title: "Registration Form",
      registration_name: "Name",
      registration_phone: "10-digit number",
      registration_email: "Email",
      registration_state: "--Select State--",
      registration_city: "--Select City--",
      registration_role: "--Select Role--",
      registration_buyer: "Buyer",
      registration_seller: "Seller",
      registration_submit: "Submit",
      registration_submitting: "Submitting...",

      footer_contact_us: "Contact Us",
      footer_registered_office: "Registered Office:",
      footer_company_name: "Ninjafarm Services Private Limited",
      footer_address: "Registered Address – Amalner Dist Jalgaon, Maharashtra – 425401",
      footer_get_in_touch: "Get in Touch",
      footer_phone: "Phone",
      footer_email: "Email",
      footer_website: "Website",
      footer_enquiry_section: "Enquiry Section",
      footer_traders_contract: "For Traders and Contract Companies",
      footer_rights: "© 2025 Poultrywala | All Rights Reserved",
      footer_legal: "Legal",
      footer_privacy_policy: "Privacy Policy",
      footer_terms_conditions: "Terms & Conditions",
      footer_seller_policy: "Seller/Trader Policy",
      footer_payment_refund: "Payment & Refund Policy",

      "future_reviews": {
          "0": {
            "name": "Ramesh Yadav ",
            "fullReview": "Very good service, now it is easier to sell eggs and chickens.",
            "info": "Village Poultry Farmer, Uttar Pradesh"
          },
          "1": {
            "name": "Savitri Devi ",
            "fullReview": "Earlier we had to go to the market, now we are directly connected to buyers online.",
            "info": "Poultry Farm Owner, Maharashtra"
          },
          "2": {
            "name": "Hari Singh ",
            "fullReview": "This helps me understand rates and demand, very beneficial for my farm.",
            "info": "Dairy & Poultry Farmer, Punjab"
          },
          "3": {
            "name": "Lakhan Lal ",
            "fullReview": "We get payments on time and everything is transparent, I am very satisfied.",
            "info": "Poultry Farmer, Bihar"
          },
          "4": {
            "name": "Meena Bai ",
            "fullReview": "Now the selling process has become easier and safer.",
            "info": "Village Woman Farmer, Madhya Pradesh"
          }
        },
        

       
           navbar: {
             home: "Home",
             services: "Services",
             explore: "Explore"
           },
        

     "terms": {
    "title": "Terms and Conditions of usage of Poultrywala Platform",
    "effective_date": "Effective Date: 01/08/2025",
    "platform_owner": "Platform Owner: Ninjafarm Services Private Limited (“Company”)",
    "platform": "Platform: Poultrywala (web and mobile application)",
    "intro": "These Terms and Conditions (“Terms”) govern your use of the Poultrywala platform as a Contract Poultry Farming Company or Individual Seller (“Seller,” “you,” or “your”). By registering on or using the platform, you agree to abide by these Terms.",

    "section1_title": "1. Seller Eligibility and Onboarding",
    "section1_point1": "You must be a legally registered entity or individual with the necessary licenses, permissions, and compliance as per applicable laws.",
    "section1_point2": "You agree to provide accurate, complete, and verifiable information during registration and onboarding.",
    "section1_point3": "Ninjafarm reserves the right to approve, reject, or suspend your account at its sole discretion.",

    "section2_title": "2. Product Listings",
    "section2_point1": "You shall list poultry products (e.g., broilers, chickens) with correct information including quantity, breed, Average body weight, price, health status, and delivery timelines.",
    "section2_point2": "Misrepresentation of product details is strictly prohibited. Any false claims may lead to account suspension or legal action.",
    "section2_point3": "You are solely responsible for ensuring your listed products meet the health, safety, and legal standards applicable in your region.",
    "section2_point4": "You must sale quality birds on platform that meets health standards, if false quality information and poor injured birds listed and sales and more than 5% mortality happens during transport within limited time within 6hrs a seller will be liable for action and account suspension will happen after repetitive complaints.",

    "section3_title": "3. Pricing and Commissions",
    "section3_point1": "Sellers must display fair market prices.",
    "section3_point2": "Ninjafarm may charge a platform fee or commission for each successful transaction. The applicable fees will be communicated and agreed upon during onboarding.",
    "section3_point3": "Prices must be inclusive of all applicable charges unless otherwise specified.",
    "section3_point4": "Ninjafarm Services Private Limited will take payment of goods from buyer on behalf of seller and same will be settled to sellers within decided time period after deducting commission, charges, taxes and after completion of delivery of birds to buyer successfully.",

    "section4_title": "4. Order Fulfillment",
    "section4_point1": "Once a trader (buyer) places an order, the Seller is obligated to fulfill it within the committed time and quantity.",
    "section4_point2": "Any failure to deliver on time, under-supply, or delivery of substandard products may result in penalties, refund obligations, or delisting.",

    "section5_title": "5. Refunds and Disputes",
    "section5_point1": "Sellers must cooperate in good faith in case of refund requests or disputes.",
    "section5_point2": "In case of quality issues or non-delivery, the Company may initiate refunds to the buyer and recover the amount from the Seller.",
    "section5_point3": "Disputes will be resolved through a structured internal process, and the Company’s decision will be final.",

    "section6_title": "6. Compliance with Laws",
    "section6_point1": "Sellers must comply with all applicable local, state, and national laws including those relating to livestock trade, animal welfare, taxes, and food safety.",
    "section6_point2": "Sellers are responsible for managing their own GST and tax filings as applicable.",

    "section7_title": "7. Payments and Settlements",
    "section7_point1": "Payments will be processed to Seller’s registered bank account after deducting applicable fees, taxes, and any refunds/penalties.",
    "section7_point2": "Settlement timelines will be communicated transparently on the platform.",

    "section8_title": "8. Platform Usage Guidelines",
    "section8_point1": "Sellers must not misuse the platform for fraudulent, illegal, or unethical activities.",
    "section8_point2": "Abusive behavior towards buyers, staff, or misuse of the Poultrywala brand is grounds for immediate termination.",
    "section8_point3": "Sellers agree not to bypass the platform for offline transactions with Poultrywala buyers.",

    "section9_title": "9. Intellectual Property",
    "section9_point1": "All logos, trademarks, designs, and platform content belong to Ninjafarm Services Private Limited.",
    "section9_point2": "Sellers must not use the Poultrywala name or logo without written permission.",

    "section10_title": "10. Account Suspension or Termination",
    "section10_point1": "The Company reserves the right to suspend or permanently terminate any seller account in case of:",
    "section10_point2": "Repeated order issues",
    "section10_point3": "Fraudulent activity",
    "section10_point4": "Violation of these Terms",
    "section10_point5": "Legal non-compliance",
    "section10_point6": "Terminated Sellers may not re-register without express written consent.",

    "section11_title": "11. Limitation of Liability",
    "section11_point1": "The Company provides the platform “as is” and makes no warranties regarding uninterrupted service or guaranteed sales.",
    "section11_point2": "Ninjafarm Services Private Limited is not liable for any direct or indirect damages arising from seller listings, performance, or disputes with buyers.",

    "section12_title": "12. Amendments",
    "section12_point": "These Terms may be updated from time to time. Continued use of the platform after updates constitutes acceptance of the revised Terms.",

    "section13_title": "13. Governing Law",
    "section13_point": "These Terms are governed by the laws of India. Any disputes will be subject to the jurisdiction of courts in [Insert City/State].",

    "section14_title": "14. Contact Information",
    "contact_name": "Ninjafarm Services Private Limited",
    "contact_email": "Email: support@ninjafarm.in",
    "contact_phone": "Phone: 9834512510",
    "contact_address": "Registered Address: Amalner Dist Jalgaon Maharashtra India 425401"
  }
      
      

      

      

        },
      },
      hi: {
        translation: {
          home_title: "हमारी वेबसाइट पर आपका स्वागत है",
          about_title: "हमारे बारे में",
          services_title: "हमारी सेवाएँ",
          explore_title: "खोजें",
          future_title: "भविष्य की योजनाएँ",
          presence_title: "हमारी उपस्थिति",
          footer_text: "सभी अधिकार सुरक्षित",

          home: {
            tagline: "भारत का नं.1 पोल्ट्री ट्रेडिंग हब",
            subTagline: "स्मार्ट ट्रेडिंग • सुरक्षित डील्स • मजबूत नेटवर्क",
            heading: "तकनीक के साथ पोल्ट्री ट्रेडिंग में बदलाव",
            subtext:
              "भारत का पहला संगठित B2B प्लेटफॉर्म कॉन्ट्रैक्ट ब्रॉयलर ट्रेडिंग के लिए – सत्यापित पोल्ट्री व्यापारियों को जोड़ना।",
            registerText: "नवीनतम अपडेट पाने के लिए, पंजीकरण करें:",
            registerBtn: "अभी रजिस्टर करें",
            appBtn: "ऐप प्राप्त करें"
          },
          about: {
            heading: "हमारे बारे में",
            description:
              "निंजाफार्म का पोल्ट्रीवाला भारत का पहला संगठित B2B डिजिटल मार्केटप्लेस है, जो लाइव ब्रॉयलर पोल्ट्री ट्रेडिंग के लिए है। हम कॉन्ट्रैक्ट पोल्ट्री फार्मिंग कंपनियों को सत्यापित पोल्ट्री व्यापारियों से जोड़ते हैं ताकि लेन-देन सहज, सुरक्षित, पारदर्शी और विश्वसनीय हों।",
            features: {
              verified: "सत्यापित प्रोफाइल",
              trading: "रियल टाइम ट्रेडिंग",
              contracts: "डिजिटल कॉन्ट्रैक्ट",
              rates: "डेली रेट्स",
              order: "पोल्ट्री ऑर्डर करें",
            },
            imageAlt: "पोल्ट्रीवाला के बारे में",
          },
          explore: {
        title: "पोल्ट्री व्यापारियों का अन्वेषण करें",
        subtitle: "विश्वसनीय सप्लायर्स की तुलना करें, आज की कीमतें देखें और तुरंत जुड़ें।",
        whyUseTitle: "Explore का उपयोग क्यों करें?",
        whyUseText: "Explore सेक्शन आपको सत्यापित पोल्ट्री व्यापारियों से रीयल-टाइम दाम देता है। सप्लायर्स की तुलना करें, रेटिंग देखें और आत्मविश्वास से सीधे जुड़ें।",
        whyChooseTitle: "सत्यापित व्यापारियों को क्यों चुनें?",

        card1Title: "भरोसा और सुरक्षा",
        card1Desc: "हर व्यापारी को सुरक्षित और विश्वसनीय ट्रेडिंग के लिए सत्यापित किया गया है।",
        card2Title: "उचित मूल्य",
        card2Desc: "रीयल-टाइम बाजार दरें, बिना किसी छुपे शुल्क या बिचौलियों के।",
        card3Title: "राष्ट्रीय नेटवर्क",
        card3Desc: "भारत के कई राज्यों में किसानों और व्यापारियों से जुड़ें।",
        card4Title: "गुणवत्ता जांच",
        card4Desc: "हर डिस्पैच से पहले सख्त गुणवत्ता जांच।",
        card5Title: "तुरंत कनेक्शन",
        card5Desc: "सत्यापित सप्लायर्स और खरीदारों से तुरंत जुड़ें।",
        card6Title: "विकास के अवसर",
        card6Desc: "हजारों खरीदारों तक पहुंचकर अपना पोल्ट्री बिजनेस बढ़ाएं।",

        ctaTitle: "भारत के विश्वसनीय पोल्ट्री मार्केटप्लेस का हिस्सा बनें",
        ctaText: "चाहे आप सप्लायर हों या खरीदार, हमारे बढ़ते नेटवर्क से जुड़ें और सत्यापित पार्टनर्स से जुड़ें।",

        traderTitle: "व्यापारी के रूप में रजिस्टर करें",
        traderText: "अपनी कंपनी लिस्ट करें, रोजाना कीमतें दिखाएं और हजारों खरीदारों तक पहुंचें।",
        traderBtn: "व्यापारी के रूप में रजिस्टर करें",

        buyerTitle: "खरीदार के रूप में रजिस्टर करें",
        buyerText: "सत्यापित व्यापारियों तक पहुंचें, तुरंत रेट्स की तुलना करें और सीधे जुड़ें।",
        buyerBtn: "खरीदार के रूप में रजिस्टर करें",

        verified1: "सभी व्यापारी प्रामाणिकता के लिए सरकारी रूप से सत्यापित हैं।",
        verified2: "रीयल-टाइम में अपडेटेड पारदर्शी दैनिक पोल्ट्री कीमतें।",
        verified3: "किसानों से सीधे खरीदारों तक, बिना बिचौलियों के।",
        verified4: "विश्वसनीय पार्टनर्स के साथ सुरक्षित भुगतान।",
        verified5: "भारत भर में तेज़ और भरोसेमंद डिलीवरी।",
        verified6: "हर डिस्पैच से पहले गुणवत्ता नियंत्रित पोल्ट्री।"
      },
      services: {
        heroTitle: "पोल्ट्रीवाला – जोड़ता है",
        heroHighlight: "व्यापारियों और किसानों को",
        heroSubtitle: "विश्वसनीय व्यापारियों और किसानों से सीधे ब्रॉयलर मुर्गियां खरीदें और बेचें। सत्यापित प्रोफाइल, पारदर्शी दरें और गुणवत्ता-नियंत्रित डिलीवरी।",
        ourServices: "हमारी सेवाएं",
      
        card1Title: "ट्रेडिंग प्लेटफ़ॉर्म",
        card1Desc: "खरीदारों और व्यापारियों के बीच निर्बाध कनेक्शन, भरोसेमंद सौदों के लिए सत्यापित प्रोफाइल।",
      
        card2Title: "गुणवत्ता नियंत्रण",
        card2Desc: "डिलीवरी से पहले हर खेप की गुणवत्ता की जाँच की जाती है ताकि केवल सर्वश्रेष्ठ पोल्ट्री ही आप तक पहुँचे।",
      
        card3Title: "डिलीवरी नेटवर्क",
        card3Desc: "निकटतम सत्यापित फ़ार्म से तेज़ डिलीवरी और रियल-टाइम ट्रैकिंग।",
      
        networkTitle: "किसानों और व्यापारियों का नेटवर्क",
        networkText: "हम पूरे भारत में हजारों किसानों और व्यापारियों से खरीदारों को जोड़ते हैं। पारदर्शी दरों पर निकटतम सत्यापित पोल्ट्री स्रोत खोजें।",
        cities: ["दिल्ली", "मुंबई", "लखनऊ", "हैदराबाद", "कोलकाता", "जयपुर", "चेन्नई", "बेंगलुरु"],
      
        ctaTitle: "क्या आप ट्रेडिंग शुरू करने के लिए तैयार हैं?",
        ctaText: "उन हजारों किसानों और व्यापारियों से जुड़ें जो पोल्ट्रीवाला पर भरोसा करते हैं।",
        ctaBtn: "अभी रजिस्टर करें"
      },
      future_title: "भविष्य",
      future_highlight: "पोल्ट्री व्यापार का",
      future_steps: {
        signUp: "साइन अप करें",
        verify: "सत्यापित हों",
        connect: "कनेक्ट करें और व्यापार करें",
        track: "डिलीवरी ट्रैक करें"
      },
      future_reviews_count: "समीक्षाएँ",
      future_highlight_name: "आदित्य सिन्हा",
      future_highlight_review: "पोल्ट्रीवाला ने हमारी व्यापार क्षमता को दोगुना कर दिया।",
      future_highlight_info: "सत्यापित व्यापारी • 10+ शहरों में सेवा",
      future_reviews: [
        { name: "आदित्य संतोष", rating: "5.0" },
        { name: "सेलेना रे", rating: "4.0" },
        { name: "विक्रम मिश्रा", rating: "4.0" },
        { name: "राहुल शर्मा", rating: "4.5" },
        { name: "प्रिया वर्मा", rating: "5.0" }
      ],
      presence_title: "हमारा एंड्रॉइड ऐप जल्दी ही आ रहा है!",
      presence_realtime: "रियल टाइम ट्रेडिंग",
      presence_verified: "वेरिफाइड प्रोफाइल",
      presence_online: "ऑनलाइन प्रोफाइल",
      presence_reviews: "सभी समीक्षाएँ",
      presence_contracts: "डिजिटल कॉन्ट्रैक्ट्स",

      registration_title: "पंजीकरण फॉर्म",
      registration_name: "नाम",
      registration_phone: "10 अंकों का मोबाइल नंबर",
      registration_email: "ईमेल",
      registration_state: "--राज्य चुनें--",
      registration_city: "--शहर चुनें--",
      registration_role: "--भूमिका चुनें--",
      registration_buyer: "खरीदार",
      registration_seller: "विक्रेता",
      registration_submit: "जमा करें",
      registration_submitting: "जमा हो रहा है...",

      footer_contact_us: "संपर्क करें",
      footer_registered_office: "पंजीकृत कार्यालय:",
      footer_company_name: "निंजाफार्म सर्विसेज प्राइवेट लिमिटेड",
      footer_address: "पंजीकृत पता – अमलनेर जिला जलगांव, महाराष्ट्र – 425401",
      footer_get_in_touch: "संपर्क में रहें",
      footer_phone: "फ़ोन",
      footer_email: "ईमेल",
      footer_website: "वेबसाइट",
      footer_enquiry_section: "पूछताछ अनुभाग",
      footer_traders_contract: "व्यापारियों और अनुबंध कंपनियों के लिए",
      footer_rights: "© 2025 पोल्ट्रीवाला | सर्वाधिकार सुरक्षित",
      footer_legal: "कानूनी जानकारी",
      footer_privacy_policy: "गोपनीयता नीति",
      footer_terms_conditions: "नियम और शर्तें",
      footer_seller_policy: "विक्रेता/व्यापारी नीति",
      footer_payment_refund: "भुगतान और रिफंड नीति",

      "future_reviews": {
          "0": {
            "name": "रामेश यादव ",
            "fullReview": "बहुत अच्छी सेवा है, अब अंडे और मुर्गे बेचना आसान हो गया है।",
            "info": "गाँव के पोल्ट्री किसान, उत्तर प्रदेश"
          },
          "1": {
            "name": "सावित्री देवी ",
            "fullReview": "पहले हमें बाजार जाना पड़ता था, अब सीधे ऑनलाइन खरीदार से जुड़ गए हैं।",
            "info": "पोल्ट्री फ़ार्म मालिक, महाराष्ट्र"
          },
          "2": {
            "name": "हरी सिंह ",
            "fullReview": "रेट और मांग समझने में मदद मिलती है, फार्म के लिए बहुत फायदेमंद है।",
            "info": "डेयरी और पोल्ट्री किसान, पंजाब"
          },
          "3": {
            "name": "लखन लाल ",
            "fullReview": "समय पर भुगतान मिलता है और सब कुछ पारदर्शी है, हम बहुत खुश हैं।",
            "info": "पोल्ट्री किसान, बिहार"
          },
          "4": {
            "name": "मीना बाई ",
            "fullReview": "अब बेचने की प्रक्रिया आसान और सुरक्षित हो गई है।",
            "info": "गाँव की महिला किसान, मध्य प्रदेश"
          }
        },
        

          navbar: {
            home: "होम",
            services: "सेवाएं",
            explore: "खोजें"
          },


          
  "terms": {
    "title": "पोल्ट्रीवाला प्लेटफ़ॉर्म के उपयोग की नियम और शर्तें",
    "effective_date": "प्रभावी तिथि: 01/08/2025",
    "platform_owner": "प्लेटफ़ॉर्म स्वामी: निंजाफार्म सर्विसेज प्राइवेट लिमिटेड (“कंपनी”)",
    "platform": "प्लेटफ़ॉर्म: पोल्ट्रीवाला (वेब और मोबाइल एप्लिकेशन)",
    "intro": "ये नियम और शर्तें (“नियम”) पोल्ट्रीवाला प्लेटफ़ॉर्म के आपके उपयोग को नियंत्रित करती हैं, चाहे आप कॉन्ट्रैक्ट पोल्ट्री फार्मिंग कंपनी हों या व्यक्तिगत विक्रेता (“विक्रेता”, “आप”). प्लेटफ़ॉर्म पर रजिस्टर करने या उपयोग जारी रखने पर आप इन नियमों का पालन करने के लिए सहमत होते हैं।",

    "section1_title": "1. विक्रेता पात्रता और ऑनबोर्डिंग",
    "section1_point1": "आपके पास कानूनी रूप से आवश्यक लाइसेंस, अनुमति और अनुपालन होना चाहिए तथा आप एक पंजीकृत संस्था या व्यक्ति होने चाहिए।",
    "section1_point2": "आप पंजीकरण और ऑनबोर्डिंग के दौरान सटीक, पूर्ण और सत्यापित जानकारी प्रदान करने के लिए सहमत हैं।",
    "section1_point3": "निंजाफार्म अपने विवेकानुसार आपके खाते को स्वीकृत, अस्वीकृत या निलंबित करने का अधिकार रखता है।",

    "section2_title": "2. उत्पाद सूचीकरण",
    "section2_point1": "आपको पोल्ट्री उत्पादों (जैसे ब्रॉयलर, चिकन) की सही जानकारी जैसे मात्रा, नस्ल, औसत वजन, कीमत, स्वास्थ्य स्थिति और डिलीवरी समय सीमा के साथ सूचीकरण करना होगा।",
    "section2_point2": "उत्पाद विवरण में गलत जानकारी देना सख्त वर्जित है। किसी भी प्रकार की गलत जानकारी पर आपका खाता निलंबित किया जा सकता है या कानूनी कार्रवाई हो सकती है।",
    "section2_point3": "आप यह सुनिश्चित करने के लिए पूर्ण रूप से जिम्मेदार हैं कि आपके सूचीबद्ध उत्पाद आपके क्षेत्र में लागू स्वास्थ्य, सुरक्षा और कानूनी मानकों को पूरा करते हैं।",
    "section2_point4": "आपको प्लेटफ़ॉर्म पर केवल गुणवत्तापूर्ण पक्षी बेचने होंगे। यदि गलत गुणवत्ता जानकारी, घायल पक्षी, या खराब गुणवत्ता के कारण 6 घंटे के भीतर परिवहन के दौरान 5% से अधिक मृत्यु होती है, तो विक्रेता पर कार्रवाई की जाएगी और बार-बार शिकायत मिलने पर खाता निलंबित कर दिया जाएगा।",

    "section3_title": "3. मूल्य निर्धारण और कमीशन",
    "section3_point1": "विक्रेताओं को उचित बाजार मूल्य प्रदर्शित करना आवश्यक है।",
    "section3_point2": "प्रत्येक सफल लेन-देन पर निंजाफार्म प्लेटफ़ॉर्म शुल्क या कमीशन ले सकता है। यह शुल्क आपको ऑनबोर्डिंग के दौरान सूचित और सहमति के बाद लागू होगा।",
    "section3_point3": "कीमतें सभी लागू शुल्कों सहित होनी चाहिए, जब तक कि अलग से उल्लेख न किया गया हो।",
    "section3_point4": "निंजाफार्म खरीदार से विक्रेता की ओर से भुगतान प्राप्त करेगा और कमीशन, शुल्क, कर एवं सफल डिलीवरी के बाद शेष राशि विक्रेता को निर्धारित समय सीमा में भेजेगा।",

    "section4_title": "4. ऑर्डर पूर्ति",
    "section4_point1": "एक बार खरीदार (ट्रेडर) द्वारा ऑर्डर देने के बाद, विक्रेता समय और मात्रा की प्रतिबद्धता के अनुसार ऑर्डर पूरा करने के लिए बाध्य है।",
    "section4_point2": "समय पर डिलीवरी न करने, कम मात्रा देने, या घटिया गुणवत्ता के उत्पाद देने पर दंड, रिफंड या डीलिस्टिंग हो सकती है।",

    "section5_title": "5. रिफंड और विवाद",
    "section5_point1": "विक्रेताओं को किसी भी रिफंड अनुरोध या विवाद की स्थिति में सद्भावपूर्वक सहयोग करना होगा।",
    "section5_point2": "यदि गुणवत्ता संबंधी समस्या या डिलीवरी न हो, तो कंपनी खरीदार को रिफंड कर सकती है और संबंधित राशि विक्रेता से वसूल सकती है।",
    "section5_point3": "विवाद एक संरचित आंतरिक प्रक्रिया के माध्यम से हल किए जाएंगे, और कंपनी का निर्णय अंतिम होगा।",

    "section6_title": "6. कानूनों का अनुपालन",
    "section6_point1": "विक्रेताओं को सभी स्थानीय, राज्य और राष्ट्रीय कानूनों का पालन करना आवश्यक है, जिनमें पशु कल्याण, पोल्ट्री व्यापार, कर और खाद्य सुरक्षा शामिल हैं।",
    "section6_point2": "विक्रेता अपने स्वयं के जीएसटी और कर दाखिलों के लिए जिम्मेदार हैं।",

    "section7_title": "7. भुगतान और निपटान",
    "section7_point1": "सभी शुल्क, कर और किसी भी रिफंड/दंड को घटाकर भुगतान विक्रेता के पंजीकृत बैंक खाते में भेजा जाएगा।",
    "section7_point2": "निपटान समय सीमा प्लेटफ़ॉर्म पर पारदर्शी रूप से बताई जाएगी।",

    "section8_title": "8. प्लेटफ़ॉर्म उपयोग दिशानिर्देश",
    "section8_point1": "विक्रेता प्लेटफ़ॉर्म का उपयोग किसी भी धोखाधड़ी, अवैध या अनैतिक गतिविधि के लिए नहीं कर सकते।",
    "section8_point2": "खरीदारों, कर्मचारियों या ब्रांड के प्रति अपमानजनक व्यवहार पर तुरंत खाता समाप्त किया जा सकता है।",
    "section8_point3": "विक्रेता प्लेटफ़ॉर्म को बायपास कर ऑफ़लाइन लेन-देन नहीं कर सकते।",

    "section9_title": "9. बौद्धिक संपदा",
    "section9_point1": "सभी लोगो, ट्रेडमार्क, डिज़ाइन और प्लेटफ़ॉर्म सामग्री निंजाफार्म सर्विसेज प्राइवेट लिमिटेड की संपत्ति हैं।",
    "section9_point2": "विक्रेता बिना लिखित अनुमति के पोल्ट्रीवाला का नाम या लोगो उपयोग नहीं कर सकते।",

    "section10_title": "10. खाता निलंबन या समाप्ति",
    "section10_point1": "निम्न स्थितियों में कंपनी विक्रेता का खाता निलंबित या स्थायी रूप से समाप्त कर सकती है:",
    "section10_point2": "बार-बार ऑर्डर समस्याएँ",
    "section10_point3": "धोखाधड़ी गतिविधि",
    "section10_point4": "नियमों का उल्लंघन",
    "section10_point5": "कानूनी अनुपालन न होना",
    "section10_point6": "खाता समाप्त होने पर विक्रेता कंपनी की लिखित अनुमति के बिना पुनः पंजीकरण नहीं कर सकते।",

    "section11_title": "11. दायित्व की सीमा",
    "section11_point1": "कंपनी प्लेटफ़ॉर्म 'जैसा है' के आधार पर प्रदान करती है और बिना रुकावट सेवा या गारंटीड बिक्री का कोई दावा नहीं करती।",
    "section11_point2": "किसी भी प्रत्यक्ष या अप्रत्यक्ष नुकसान, विक्रेता सूची, प्रदर्शन या खरीदार विवादों के लिए निंजाफार्म जिम्मेदार नहीं होगा।",

    "section12_title": "12. संशोधन",
    "section12_point": "कंपनी समय-समय पर इन नियमों को अपडेट कर सकती है। अपडेट के बाद प्लेटफ़ॉर्म का उपयोग जारी रखना नए नियमों की स्वीकृति माना जाएगा।",

    "section13_title": "13. प्रभार्य कानून",
    "section13_point": "ये नियम भारत के कानूनों द्वारा शासित हैं। किसी भी विवाद का निपटारा [शहर/राज्य] के न्यायालयों में किया जाएगा।",

    "section14_title": "14. संपर्क जानकारी",
    "contact_name": "निंजाफार्म सर्विसेज प्राइवेट लिमिटेड",
    "contact_email": "ईमेल: support@ninjafarm.in",
    "contact_phone": "फ़ोन: 9834512510",
    "contact_address": "पंजीकृत पता: अमलनेर जिला जलगांव, महाराष्ट्र, भारत 425401"
  }


       
      
      
      


        },
      },
      mr: {
        translation: {
          home_title: "आमच्या वेबसाइटवर आपले स्वागत आहे",
          about_title: "आमच्याबद्दल",
          services_title: "आमच्या सेवा",
          explore_title: "अन्वेषण करा",
          future_title: "भविष्य योजना",
          presence_title: "आमची उपस्थिती",
          footer_text: "सर्व हक्क राखीव",

          home: {
            tagline: "भारताचे नं.1 पोल्ट्री ट्रेडिंग हब",
            subTagline: "स्मार्ट ट्रेडिंग • सुरक्षित व्यवहार • मजबूत नेटवर्क",
            heading: "तंत्रज्ञानासह पोल्ट्री ट्रेडिंगमध्ये बदल",
            subtext:
              "भारताचे पहिले संघटित B2B प्लॅटफॉर्म कॉन्ट्रॅक्ट ब्रॉयलर ट्रेडिंगसाठी – प्रमाणित पोल्ट्री व्यापार्‍यांना जोडणारे.",
            registerText: "नवीनतम अपडेट मिळवण्यासाठी, नोंदणी करा:",
            registerBtn: "आत्ता नोंदणी करा",
            appBtn: "अॅप मिळवा"
          },
          about: {
            heading: "आमच्याबद्दल",
            description:
              "निंजाफार्मद्वारे पोल्ट्रीवाला हा भारताचा पहिला संघटित B2B डिजिटल मार्केटप्लेस आहे जो लाइव्ह ब्रॉयलर पोल्ट्री ट्रेडिंगसाठी आहे. आम्ही कॉन्ट्रॅक्ट पोल्ट्री फार्मिंग कंपन्यांना प्रमाणित पोल्ट्री व्यापाऱ्यांशी जोडतो ज्यामुळे व्यवहार सहज, सुरक्षित, पारदर्शक आणि विश्वसनीय होतात.",
            features: {
              verified: "सत्यापित प्रोफाइल",
              trading: "रिअल टाइम ट्रेडिंग",
              contracts: "डिजिटल कॉन्ट्रॅक्ट",
              rates: "दैनंदिन दर",
              order: "पोल्ट्री ऑर्डर करा",
            },
            imageAlt: "पोल्ट्रीवाला बद्दल",
          },
          explore: {
        title: "पोल्ट्री व्यापाऱ्यांचा शोध घ्या",
        subtitle: "विश्वसनीय पुरवठादारांची तुलना करा, आजचे दर पहा आणि त्वरित कनेक्ट व्हा.",
        whyUseTitle: "Explore का वापर करावा?",
        whyUseText: "Explore विभाग तुम्हाला सत्यापित पोल्ट्री व्यापाऱ्यांकडून रिअल-टाइम दर देतो. पुरवठादारांची तुलना करा, रेटिंग पहा आणि थेट कनेक्ट व्हा.",
        whyChooseTitle: "सत्यापित व्यापाऱ्यांना का निवडावे?",

        card1Title: "विश्वास आणि सुरक्षा",
        card1Desc: "प्रत्येक व्यापाऱ्याची सुरक्षित आणि विश्वासार्ह ट्रेडिंगसाठी पडताळणी केली आहे.",
        card2Title: "योग्य किंमत",
        card2Desc: "रिअल-टाइम बाजार दर, कोणतेही लपलेले शुल्क किंवा दलालांशिवाय.",
        card3Title: "राष्ट्रीय नेटवर्क",
        card3Desc: "भारतभरातील शेतकरी आणि व्यापाऱ्यांशी जोडा.",
        card4Title: "गुणवत्ता तपासणी",
        card4Desc: "प्रत्येक डिलिव्हरीपूर्वी कठोर गुणवत्ता तपासणी.",
        card5Title: "त्वरित संपर्क",
        card5Desc: "सत्यापित पुरवठादार आणि खरेदीदारांशी त्वरित जोडा.",
        card6Title: "विकासाची संधी",
        card6Desc: "हजारो खरेदीदारांपर्यंत पोहोचून तुमचा पोल्ट्री व्यवसाय वाढवा.",

        ctaTitle: "भारतातील विश्वसनीय पोल्ट्री मार्केटप्लेसचा भाग व्हा",
        ctaText: "तुम्ही पुरवठादार असाल किंवा खरेदीदार, आमच्या वाढत्या नेटवर्कशी जोडा.",

        traderTitle: "व्यापारी म्हणून नोंदणी करा",
        traderText: "तुमची कंपनी सूचीबद्ध करा, दररोजचे दर दाखवा आणि हजारो खरेदीदारांपर्यंत पोहोचा.",
        traderBtn: "व्यापारी म्हणून नोंदणी करा",

        buyerTitle: "खरेदीदार म्हणून नोंदणी करा",
        buyerText: "सत्यापित व्यापाऱ्यांपर्यंत पोहोचा, त्वरित दर तुलना करा आणि थेट जोडा.",
        buyerBtn: "खरेदीदार म्हणून नोंदणी करा",

        verified1: "सर्व व्यापारी सरकारकडून प्रमाणित आहेत.",
        verified2: "रिअल-टाइममध्ये अपडेट होणारे पारदर्शक दररोजचे पोल्ट्री दर.",
        verified3: "शेतकऱ्यांकडून थेट खरेदीदारांपर्यंत, कोणत्याही दलालांशिवाय.",
        verified4: "विश्वसनीय पार्टनर्ससोबत सुरक्षित पेमेंट.",
        verified5: "भारतभर जलद आणि विश्वासार्ह डिलिव्हरी.",
        verified6: "प्रत्येक डिलिव्हरीपूर्वी गुणवत्ता तपासलेली पोल्ट्री."
      },
      services: {
        heroTitle: "पोल्ट्रीवाला – जोडतो",
        heroHighlight: "व्यापारी आणि शेतकरी",
        heroSubtitle: "विश्वसनीय व्यापारी आणि शेतकऱ्यांकडून थेट ब्रॉयलर कोंबड्या खरेदी व विक्री करा. सत्यापित प्रोफाइल, पारदर्शक दर आणि गुणवत्ता नियंत्रित डिलिव्हरी.",
        ourServices: "आमच्या सेवा",
      
        card1Title: "ट्रेडिंग प्लॅटफॉर्म",
        card1Desc: "खरेदीदार आणि व्यापाऱ्यांमधील विश्वासार्ह सौद्यांसाठी सत्यापित प्रोफाइलसह अखंड कनेक्शन.",
      
        card2Title: "गुणवत्ता नियंत्रण",
        card2Desc: "डिलिव्हरीपूर्वी प्रत्येक खेप तपासली जाते जेणेकरून फक्त सर्वोत्तम पोल्ट्रीच तुमच्यापर्यंत पोहोचेल.",
      
        card3Title: "डिलिव्हरी नेटवर्क",
        card3Desc: "सर्वात जवळच्या सत्यापित शेतातून जलद डिलिव्हरी आणि रिअल-टाइम ट्रॅकिंग.",
      
        networkTitle: "शेतकरी आणि व्यापारी नेटवर्क",
        networkText: "आम्ही भारतातील हजारो शेतकरी आणि व्यापाऱ्यांशी खरेदीदारांना जोडतो. पारदर्शक दरात जवळचा सत्यापित पोल्ट्री स्रोत शोधा.",
        cities: ["दिल्ली", "मुंबई", "लखनऊ", "हैदराबाद", "कोलकाता", "जयपूर", "चेन्नई", "बेंगळुरू"],
      
        ctaTitle: "ट्रेडिंग सुरू करण्यास तयार आहात का?",
        ctaText: "हजारो शेतकरी आणि व्यापाऱ्यांमध्ये सामील व्हा जे पोल्ट्रीवालावर विश्वास ठेवतात.",
        ctaBtn: "आता नोंदणी करा"
      },
      future_title: "भविष्य",
       future_highlight: "पोल्ट्री व्यापाराचे",
       future_steps: {
         signUp: "साइन अप करा",
         verify: "सत्यापित व्हा",
         connect: "जोडा आणि व्यापार करा",
         track: "डिलिव्हरी ट्रॅक करा"
       },
       future_reviews_count: "पुनरावलोकने",
       future_highlight_name: "आदित्य सिन्हा",
       future_highlight_review: "पोल्ट्रीवाला मुळे आमची व्यापार क्षमता दुप्पट झाली.",
       future_highlight_info: "सत्यापित व्यापारी • 10+ शहरांत सेवा",
       future_reviews: [
         { name: "आदित्य समाधान", rating: "5.0" },
         { name: "सेलेना रे", rating: "4.0" },
         { name: "विक्रम मिश्रा", rating: "4.0" },
         { name: "राहुल शर्मा", rating: "4.5" },
         { name: "प्रिया वर्मा", rating: "5.0" }
       ],
       presence_title: "आमचं अँड्रॉइड अ‍ॅप लवकरच येत आहे!",
       presence_realtime: "रिअल टाइम ट्रेडिंग",
       presence_verified: "प्रमाणित प्रोफाइल",
       presence_online: "ऑनलाइन प्रोफाइल",
       presence_reviews: "सर्व पुनरावलोकने",
       presence_contracts: "डिजिटल करार",

       registration_title: "नोंदणी फॉर्म",
       registration_name: "नाव",
       registration_phone: "१० अंकी मोबाईल क्रमांक",
       registration_email: "ईमेल",
       registration_state: "--राज्य निवडा--",
       registration_city: "--शहर निवडा--",
       registration_role: "--भूमिका निवडा--",
       registration_buyer: "खरेदीदार",
       registration_seller: "विक्रेता",
       registration_submit: "सबमिट करा",
       registration_submitting: "सबमिट होत आहे...",

       footer_contact_us: "संपर्क साधा",
       footer_registered_office: "नोंदणीकृत कार्यालय:",
       footer_company_name: "निंजाफार्म सर्व्हिसेस प्रायव्हेट लिमिटेड",
       footer_address: "नोंदणीकृत पत्ता – अमळनेर जिल्हा जळगाव, महाराष्ट्र – 425401",
       footer_get_in_touch: "संपर्कात रहा",
       footer_phone: "फोन",
       footer_email: "ईमेल",
       footer_website: "वेबसाईट",
       footer_enquiry_section: "चौकशी विभाग",
       footer_traders_contract: "व्यापारी आणि करार कंपन्यांसाठी",
        footer_rights: "© 2025 पोल्ट्रीवाला | सर्व हक्क राखीव",
        footer_legal: "कायदेशीर माहिती",
      footer_privacy_policy: "गोपनीयता धोरण",
      footer_terms_conditions: "नियम आणि अटी",
      footer_seller_policy: "विक्रेता/व्यापारी धोरण",
      footer_payment_refund: "पेमेंट आणि परतावा धोरण",

       "future_reviews": {
          "0": {
            "name": "रामेश यादव",
            "fullReview": "खूप चांगली सेवा आहे, आता अंडी आणि कोंबडी विकणे सोपे झाले आहे.",
            "info": "गावातील पोल्ट्री शेतकरी, उत्तर प्रदेश"
          },
          "1": {
            "name": "सावित्री देवी",
            "fullReview": "आधी आम्हाला बाजारात जावे लागायचे, आता थेट खरेदीदारांशी ऑनलाइन जोडले गेलो आहोत.",
            "info": "पोल्ट्री फार्म मालक, महाराष्ट्र"
          },
          "2": {
            "name": "हरी सिंह ",
            "fullReview": "दर आणि मागणी समजायला मदत होते, शेतासाठी खूप फायदेशीर आहे.",
            "info": "दुग्ध व पोल्ट्री शेतकरी, पंजाब"
          },
          "3": {
            "name": "लखन लाल",
            "fullReview": "वेळेवर पैसे मिळतात आणि सर्व काही पारदर्शक आहे, आम्ही खूप समाधानी आहोत.",
            "info": "पोल्ट्री शेतकरी, बिहार"
          },
          "4": {
            "name": "मीना बाई",
            "fullReview": "आता विक्रीची प्रक्रिया सोपी आणि सुरक्षित झाली आहे.",
            "info": "गावातील महिला शेतकरी, मध्य प्रदेश"
          }
        },
        

      
           navbar: {
             home: "मुख्यपृष्ठ",
             services: "सेवा",
             explore: "एक्सप्लोर करा"
           },


           
  "terms": {
    "title": "पोल्ट्रीवाला प्लॅटफॉर्मच्या वापराच्या अटी व शर्ती",
    "effective_date": "प्रभावी तारीख: 01/08/2025",
    "platform_owner": "प्लॅटफॉर्म मालक: निंजाफार्म सर्व्हिसेस प्रायव्हेट लिमिटेड (“कंपनी”)",
    "platform": "प्लॅटफॉर्म: पोल्ट्रीवाला (वेब आणि मोबाइल अनुप्रयोग)",
    "intro": "या अटी व शर्ती (“अटी”) पोल्ट्रीवाला प्लॅटफॉर्मचा तुमचा वापर नियंत्रित करतात. तुम्ही करार पोल्ट्री फार्मिंग कंपनी किंवा वैयक्तिक विक्रेता (“विक्रेता”, “आपण”) असलात तरी प्लॅटफॉर्मवर नोंदणी करून किंवा वापर सुरू ठेवून तुम्ही या अटी मान्य करता.",

    "section1_title": "1. विक्रेता पात्रता आणि ऑनबोर्डिंग",
    "section1_point1": "तुम्ही कायदेशीररित्या आवश्यक परवाने, अनुमती आणि इतर अनुपालनांसह नोंदणीकृत संस्था किंवा वैयक्तिक व्यक्ती असणे आवश्यक आहे.",
    "section1_point2": "नोंदणी आणि ऑनबोर्डिंग दरम्यान अचूक, पूर्ण आणि सत्य माहिती देणे आवश्यक आहे.",
    "section1_point3": "निंजाफार्म आपल्या विवेकाधिकाराने खाते मंजूर, नाकारू किंवा निलंबित करू शकते.",

    "section2_title": "2. उत्पादन सूचीकरण",
    "section2_point1": "तुम्ही पोल्ट्री उत्पादने (उदा. ब्रॉयलर, कोंबड्या) योग्य माहितींसह सूचीबद्ध करावीत — प्रमाण, जात, सरासरी वजन, किंमत, आरोग्य स्थिती आणि डिलिव्हरी वेळ.",
    "section2_point2": "उत्पादनाच्या तपशीलात चुकीची माहिती देणे पूर्णपणे प्रतिबंधित आहे. अशा खोट्या माहितीसाठी खाते निलंबित केले जाऊ शकते किंवा कायदेशीर कारवाई होऊ शकते.",
    "section2_point3": "उत्पादने आरोग्य, सुरक्षा आणि स्थानिक कायद्यांनुसार आहेत याची संपूर्ण जबाबदारी विक्रेत्याची आहे.",
    "section2_point4": "तुम्ही केवळ गुणवत्तापूर्ण पक्षी विकणे आवश्यक आहे. चुकीची गुणवत्ता माहिती, जखमी पक्षी किंवा खराब पक्षी असल्यास, आणि 6 तासांच्या आत वाहतुकीदरम्यान 5% पेक्षा अधिक मृत्यू झाल्यास विक्रेत्यावर कारवाई केली जाईल आणि वारंवार तक्रारी आल्यास खाते निलंबित केले जाईल.",

    "section3_title": "3. किंमत आणि कमिशन",
    "section3_point1": "विक्रेत्यांनी उचित बाजारभाव दर्शवावा.",
    "section3_point2": "प्रत्येक यशस्वी व्यवहारासाठी निंजाफार्म प्लॅटफॉर्म फी किंवा कमिशन आकारू शकते. ऑनबोर्डिंगदरम्यान याबाबत माहिती व सहमती घेतली जाईल.",
    "section3_point3": "किंमती सर्व लागू शुल्कांसह असाव्यात, जोपर्यंत वेगळे नमूद केलेले नाही.",
    "section3_point4": "निंजाफार्म खरेदीदाराकडून विक्रेत्याच्या वतीने पैसे घेईल आणि कमिशन, शुल्क, कर व यशस्वी डिलिव्हरीनंतर शिल्लक रक्कम निश्चित कालावधीत विक्रेत्याला पाठवील.",

    "section4_title": "4. ऑर्डर पूर्णता",
    "section4_point1": "खरेदीदाराने ऑर्डर दिल्यानंतर विक्रेत्याने वचनबद्ध वेळेत आणि प्रमाणात ऑर्डर पूर्ण करणे आवश्यक आहे.",
    "section4_point2": "वेळेत डिलिव्हरी न करणे, कमी प्रमाण देणे किंवा खराब गुणवत्ता दिल्यास दंड, रिफंड किंवा डिलिस्टिंग होऊ शकते.",

    "section5_title": "5. रिफंड आणि वाद",
    "section5_point1": "वाद किंवा रिफंड विनंतीच्या बाबतीत विक्रेत्याने प्रामाणिक सहकार्य करणे आवश्यक आहे.",
    "section5_point2": "गुणवत्ता समस्या किंवा डिलिव्हरी न झाल्यास कंपनी खरेदीदाराला रिफंड करू शकते आणि ती रक्कम विक्रेत्याकडून वसूल करू शकते.",
    "section5_point3": "वाद कंपनीच्या अंतर्गत प्रक्रियेद्वारे सोडवले जातील आणि कंपनीचा निर्णय अंतिम असेल.",

    "section6_title": "6. कायदेपालन",
    "section6_point1": "विक्रेत्यांनी सर्व स्थानिक, राज्य आणि राष्ट्रीय कायद्यांचे पालन करणे आवश्यक आहे, ज्यात पशुसंवर्धन, पोल्ट्री व्यापार, कर आणि खाद्य सुरक्षा समाविष्ट आहे.",
    "section6_point2": "विक्रेता स्वतःच्या जीएसटी आणि कर फाइलिंगसाठी जबाबदार आहे.",

    "section7_title": "7. पेमेंट आणि सेटलमेंट",
    "section7_point1": "सर्व शुल्क, कर आणि कोणत्याही दंड/रिफंड वजा करून पेमेंट विक्रेत्याच्या नोंदणीकृत खात्यावर पाठविले जाईल.",
    "section7_point2": "सेटलमेंट वेळ प्लॅटफॉर्मवर पारदर्शकपणे कळविले जाईल.",

    "section8_title": "8. प्लॅटफॉर्म वापर नियम",
    "section8_point1": "प्लॅटफॉर्मचा गैरवापर, फसवणूक, बेकायदेशीर किंवा अनैतिक कृतींसाठी वापर करू नये.",
    "section8_point2": "खरेदीदार, कर्मचारी किंवा ब्रँडविरुद्ध अपमानास्पद वर्तनावर खाते तात्काळ रद्द केले जाऊ शकते.",
    "section8_point3": "प्लॅटफॉर्मला बायपास करून ऑफलाइन व्यवहार करणे पूर्णपणे निषिद्ध आहे.",

    "section9_title": "9. बौद्धिक संपदा",
    "section9_point1": "सर्व लोगो, ट्रेडमार्क, डिझाईन आणि प्लॅटफॉर्मवरील सामग्री निंजाफार्म सर्व्हिसेस प्रा. लि. ची मालमत्ता आहे.",
    "section9_point2": "लिखित परवानगीशिवाय विक्रेत्याने पोल्ट्रीवाला नाव किंवा लोगो वापरू नये.",

    "section10_title": "10. खाते निलंबन किंवा समाप्ती",
    "section10_point1": "खालील परिस्थितींमध्ये कंपनी खाते निलंबित किंवा समाप्त करू शकते:",
    "section10_point2": "वारंवार ऑर्डर समस्या",
    "section10_point3": "फसवणूक",
    "section10_point4": "अटींचे उल्लंघन",
    "section10_point5": "कायदेशीर नियमांचे पालन न करणे",
    "section10_point6": "खाते समाप्त झाल्यास, लिखित परवानगीशिवाय पुन्हा नोंदणी करता येणार नाही.",

    "section11_title": "11. जबाबदारीची मर्यादा",
    "section11_point1": "कंपनी प्लॅटफॉर्म 'जशास तसे' उपलब्ध करून देते आणि अखंड सेवा किंवा हमीदार विक्रीचे कोणतेही वचन देत नाही.",
    "section11_point2": "विक्रेत्याच्या सूची, कामगिरी किंवा खरेदीदारांसोबत उद्भवलेल्या वादांमुळे होणाऱ्या कोणत्याही प्रत्यक्ष किंवा अप्रत्यक्ष नुकसानीसाठी कंपनी जबाबदार नाही.",

    "section12_title": "12. सुधारणा",
    "section12_point": "कंपनी वेळोवेळी अटी अपडेट करू शकते. अपडेटनंतर प्लॅटफॉर्मचा वापर सुरू ठेवणे म्हणजे नवीन अटी स्वीकृत असल्याचे समजले जाईल.",

    "section13_title": "13. लागू कायदा",
    "section13_point": "या अटी भारताच्या कायद्यांनुसार नियंत्रित केल्या जातील. कोणताही वाद [शहर/राज्य] येथील न्यायालयांत निकाली काढला जाईल.",

    "section14_title": "14. संपर्क माहिती",
    "contact_name": "निंजाफार्म सर्व्हिसेस प्रायव्हेट लिमिटेड",
    "contact_email": "ईमेल: support@ninjafarm.in",
    "contact_phone": "फोन: 9834512510",
    "contact_address": "नोंदणीकृत पत्ता: अमळनेर, जळगाव जिल्हा, महाराष्ट्र, भारत 425401"
  }


      
       
       


           

        },
      },
      ta: {
        translation: {
          home_title: "எங்கள் இணையதளத்திற்கு வரவேற்கிறோம்",
          about_title: "எங்களை பற்றி",
          services_title: "எங்கள் சேவைகள்",
          explore_title: "ஆராயுங்கள்",
          future_title: "எதிர்கால திட்டங்கள்",
          presence_title: "எங்கள் இருப்பிடம்",
          footer_text: "அனைத்து உரிமைகளும் பாதுகாக்கப்பட்டவை",

          home: {
            tagline: "இந்தியாவின் நம்பர்.1 கோழி வர்த்தக மையம்",
            subTagline: "ஸ்மார்ட் வர்த்தகம் • பாதுகாப்பான ஒப்பந்தங்கள் • வலுவான நெட்வொர்க்",
            heading: "தொழில்நுட்பத்துடன் கோழி வர்த்தகத்தை மாற்றுகிறது",
            subtext:
              "இந்தியாவின் முதல் ஒழுங்கமைக்கப்பட்ட B2B தளம் ஒப்பந்த ப்ராய்லர் வர்த்தகத்திற்காக – சரிபார்க்கப்பட்ட கோழி வர்த்தகர்களை இணைக்கும்.",
            registerText: "சமீபத்திய புதுப்பிப்புகளை பெற, பதிவு செய்யவும்:",
            registerBtn: "இப்போது பதிவு செய்யவும்",
          },
          about: {
            heading: "எங்களை பற்றி",
            description:
              "நிஞ்ஜாஃபார்ம் வழங்கும் Poultrywala என்பது இந்தியாவின் முதல் ஒழுங்கமைக்கப்பட்ட B2B டிஜிட்டல் சந்தையாகும், இது நேரடி ப்ராய்லர் கோழி வர்த்தகத்திற்காக உள்ளது. எங்களால் ஒப்பந்த கோழி பண்ணை நிறுவனங்கள் சரிபார்க்கப்பட்ட வர்த்தகர்களுடன் இணைக்கப்படுகின்றன, இதன் மூலம் பரிவர்த்தனைகள் தடையில்லாமல், பாதுகாப்பாக, வெளிப்படையாக, நம்பகமாக நடைபெறும்.",
            features: {
              verified: "சரிபார்க்கப்பட்ட ப்ரொஃபைல்கள்",
              trading: "உண்மைக் கால வர்த்தகம்",
              contracts: "டிஜிட்டல் ஒப்பந்தங்கள்",
              rates: "தினசரி விகிதங்கள்",
              order: "கோழி ஆர்டர் செய்யவும்",
            },
            imageAlt: "Poultrywala பற்றி",
          },
          explore: {
        title: "கோழி வியாபாரிகளை ஆராயுங்கள்",
        subtitle: "நம்பகமான சப்ளையர்களை ஒப்பிடுங்கள், இன்றைய விலைகளை சரிபார்க்கவும், உடனடியாக இணைக.",
        whyUseTitle: "Explore ஏன் பயன்படுத்த வேண்டும்?",
        whyUseText: "Explore பகுதி உங்களுக்கு சரிபார்க்கப்பட்ட கோழி வியாபாரிகளிடமிருந்து நேரடி விலைகளை வழங்குகிறது. சப்ளையர்களை ஒப்பிடுங்கள், மதிப்பீடுகளை சரிபார்க்கவும் மற்றும் நேரடியாக இணைக.",
        whyChooseTitle: "சரிபார்க்கப்பட்ட வியாபாரிகளை ஏன் தேர்வு செய்ய வேண்டும்?",

        card1Title: "நம்பிக்கை மற்றும் பாதுகாப்பு",
        card1Desc: "ஒவ்வொரு வியாபாரியும் பாதுகாப்பான மற்றும் நம்பகமான வர்த்தகத்திற்காக சரிபார்க்கப்பட்டவர்.",
        card2Title: "நியாயமான விலை",
        card2Desc: "மறைக்கப்பட்ட கட்டணங்கள் அல்லது நடுவிலாளிகளின்றி நேரடி சந்தை விலைகள்.",
        card3Title: "தேசிய நெட்வொர்க்",
        card3Desc: "இந்தியாவின் பல மாநிலங்களில் உள்ள விவசாயிகள் மற்றும் வியாபாரிகளுடன் இணைக.",
        card4Title: "தரச் சோதனை",
        card4Desc: "ஒவ்வொரு அனுப்புதலுக்கும் முன் கடுமையான தரச் சோதனை.",
        card5Title: "உடனடி இணைப்பு",
        card5Desc: "சரிபார்க்கப்பட்ட சப்ளையர்கள் மற்றும் வாங்குபவர்களுடன் உடனடியாக இணையுங்கள்.",
        card6Title: "வளர்ச்சி வாய்ப்புகள்",
        card6Desc: "ஆயிரக்கணக்கான வாங்குபவர்களை அடைந்து உங்கள் கோழி வணிகத்தை விரிவாக்குங்கள்.",

        ctaTitle: "இந்தியாவின் நம்பகமான கோழி சந்தையின் ஒரு பகுதியாகுங்கள்",
        ctaText: "நீங்கள் சப்ளையராக இருந்தாலும் அல்லது வாங்குபவராக இருந்தாலும், எங்கள் வளர்ந்து வரும் நெட்வொர்க்கில் இணையுங்கள்.",

        traderTitle: "வியாபாரியாக பதிவு செய்யுங்கள்",
        traderText: "உங்கள் நிறுவனத்தை பட்டியலிடுங்கள், தினசரி விலைகளை காட்டுங்கள் மற்றும் ஆயிரக்கணக்கான வாங்குபவர்களை அடையுங்கள்.",
        traderBtn: "வியாபாரியாக பதிவு செய்யுங்கள்",

        buyerTitle: "வாங்குபவராக பதிவு செய்யுங்கள்",
        buyerText: "சரிபார்க்கப்பட்ட வியாபாரிகளை அணுகவும், விலைகளை உடனடியாக ஒப்பிடுங்கள் மற்றும் நேரடியாக இணையுங்கள்.",
        buyerBtn: "வாங்குபவராக பதிவு செய்யுங்கள்",

        verified1: "அனைத்து வியாபாரிகளும் அரசால் சரிபார்க்கப்பட்டவர்கள்.",
        verified2: "உண்மையான நேரத்தில் புதுப்பிக்கப்படும் வெளிப்படையான தினசரி கோழி விலை.",
        verified3: "நடுவிலாளிகள் இன்றி விவசாயிகளிடமிருந்து நேரடியாக வாங்குபவர்களுக்கு.",
        verified4: "நம்பகமான கூட்டாளர்களுடன் பாதுகாப்பான கட்டணங்கள்.",
        verified5: "இந்திய முழுவதும் விரைவான மற்றும் நம்பகமான டெலிவரி.",
        verified6: "ஒவ்வொரு அனுப்புதலுக்கும் முன் தரக் கட்டுப்படுத்தப்பட்ட கோழி."
      },
      services: {
        heroTitle: "போல்ட்ரிவாலா – இணைக்கும்",
        heroHighlight: "வியாபாரிகள் மற்றும் விவசாயிகள்",
        heroSubtitle: "நம்பகமான வியாபாரிகள் மற்றும் விவசாயிகளிடமிருந்து நேரடியாக பிராய்லர் கோழிகளை வாங்கவும் விற்கவும். சரிபார்க்கப்பட்ட சுயவிவரங்கள், வெளிப்படையான விலை மற்றும் தரக் கட்டுப்பாட்டுடன் கூடிய விநியோகங்கள்.",
        ourServices: "எங்கள் சேவைகள்",
      
        card1Title: "வர்த்தக தளம்",
        card1Desc: "வாங்குபவர்கள் மற்றும் வியாபாரிகளுக்கு இடையிலான நம்பகமான ஒப்பந்தங்களுக்கு சரிபார்க்கப்பட்ட சுயவிவரங்களுடன் தளர்வான இணைப்பு.",
      
        card2Title: "தரக் கட்டுப்பாடு",
        card2Desc: "விநியோகத்திற்கு முன் ஒவ்வொரு தொகுதியும் பரிசோதிக்கப்படுகிறது, சிறந்த கோழி மட்டுமே உங்களை அடையுமாறு உறுதி செய்கிறது.",
      
        card3Title: "விநியோக வலைப்பின்னல்",
        card3Desc: "அருகிலுள்ள சரிபார்க்கப்பட்ட பண்ணைகளில் இருந்து விரைவான விநியோகங்கள் மற்றும் நேரடி கண்காணிப்பு.",
      
        networkTitle: "விவசாயிகள் மற்றும் வியாபாரிகள் வலைப்பின்னல்",
        networkText: "இந்தியாவில் ஆயிரக்கணக்கான விவசாயிகள் மற்றும் வியாபாரிகளுடன் வாங்குபவர்களை நாங்கள் இணைக்கிறோம். வெளிப்படையான விலைகளில் அருகிலுள்ள சரிபார்க்கப்பட்ட கோழி ஆதாரத்தை கண்டறியுங்கள்.",
        cities: ["டெல்லி", "மும்பை", "லக்னோ", "ஹைதராபாத்", "கொல்கத்தா", "ஜெய்ப்பூர்", "சென்னை", "பெங்களூரு"],
      
        ctaTitle: "வர்த்தகம் தொடங்க தயாரா?",
        ctaText: "நம்பகமான கோழி வர்த்தகத்திற்காக போல்ட்ரிவாலாவை நம்பும் ஆயிரக்கணக்கான விவசாயிகள் மற்றும் வியாபாரிகளில் சேரவும்.",
        ctaBtn: "இப்போது பதிவு செய்க"
      },
      future_title: "எதிர்காலம்",
       future_highlight: "கோழி வர்த்தகத்தின்",
       future_steps: {
         signUp: "பதிவு செய்யவும்",
         verify: "சரிபார்க்கப்படுக",
         connect: "இணைந்து வர்த்தகம் செய்யவும்",
         track: "டெலிவரி கண்காணிக்கவும்"
       },
       future_reviews_count: "விமர்சனங்கள்",
       future_highlight_name: "ஆதித்யா சின்ஹா",
       future_highlight_review: "போல்ட்ரிவாலா எங்கள் வியாபார திறனை இரட்டிப்பு செய்தது.",
       future_highlight_info: "சரிபார்க்கப்பட்ட வர்த்தகர் • 10+ நகரங்களில் சேவை",
       future_reviews: [
         { name: "ஆதித்யா திருப்தி", rating: "5.0" },
         { name: "செலினா ரே", rating: "4.0" },
         { name: "விக்ரம் மிஷ்ரா", rating: "4.0" },
         { name: "ராஹுல் ஷர்மா", rating: "4.5" },
         { name: "ப்ரியா வர்மா", rating: "5.0" }
       ],
       presence_title: "10K+ பதிவிறக்கங்கள் Android & iOS-இல்",
       presence_realtime: "உடனடி வர்த்தகம்",
       presence_verified: "சரிபார்க்கப்பட்ட சுயவிவரங்கள்",
       presence_online: "ஆன்லைன் சுயவிவரங்கள்",
       presence_reviews: "அனைத்து விமர்சனங்கள்",
       presence_contracts: "டிஜிட்டல் ஒப்பந்தங்கள்",


       registration_title: "பதிவு படிவம்",
       registration_name: "பெயர்",
       registration_phone: "10 இலக்க எண்",
       registration_email: "மின்னஞ்சல்",
       registration_state: "--மாநிலத்தை தேர்வுசெய்க--",
       registration_city: "--நகரத்தை தேர்வுசெய்க--",
       registration_role: "--பாத்திரத்தை தேர்வுசெய்க--",
       registration_buyer: "வாங்குபவர்",
       registration_seller: "விற்குபவர்",
       registration_submit: "சமர்ப்பிக்கவும்",
       registration_submitting: "சமர்ப்பிக்கப்பட்டு கொண்டிருக்கிறது...",

       footer_contact_us: "எங்களை தொடர்பு கொள்ள",
       footer_registered_office: "பதிவு செய்யப்பட்ட அலுவலகம்:",
       footer_company_name: "நிஞ்சாஃபார்ம் சர்வீசஸ் பிரைவேட் லிமிடெட்",
       footer_address: "பதிவு செய்யப்பட்ட முகவரி – அமல்னேர், ஜல்கான் மாவட்டம், மகாராஷ்டிரா – 425401",
       footer_get_in_touch: "தொடர்பில் இருங்கள்",
       footer_phone: "தொலைபேசி",
       footer_email: "மின்னஞ்சல்",
       footer_website: "இணையதளம்",
       footer_enquiry_section: "வினவல் பிரிவு",
       footer_traders_contract: "வர்த்தகர்கள் மற்றும் ஒப்பந்த நிறுவனங்களுக்கு",
       footer_rights: "© 2025 போல்ட்ரிவாலா | அனைத்து உரிமைகளும் பாதுகாக்கப்பட்டவை",


            navbar: {
              home: "முகப்பு",
              services: "சேவைகள்",
              explore: "ஆராய்க"
            }
       
       
       
       



        },
      },
    },
    lng: "en", // default language
    fallbackLng: "en",
    interpolation: { escapeValue: false },
  });

export default i18n;
