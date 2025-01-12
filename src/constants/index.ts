import { LoginFormFieldsProps, RegisterFormFieldsProps } from "@/lib/definitions";
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";

export const nav = [
  {
    id: 1,
    text: "Home",
    href: "/",
  },
  {
    id: 2,
    text: "Feature",
    href: "/feature",
  },
  {
    id: 3,
    text: "Integration",
    href: "/integration",
  },
  {
    id: 4,
    text: "Pricing",
    href: "/pricing",
  },
  {
    id: 5,
    text: "Blog",
    href: "/post",
  },
];

export const brands = [
  {
    id: 1,
    src: "/home/brands/brand-1.png",
    alt: "The brand image 1"
  },
  {
    id: 2,
    src: "/home/brands/brand-2.png",
    alt: "The brand image 2"
  },
  {
    id: 3,
    src: "/home/brands/brand-3.png",
    alt: "The brand image 3"
  },
  {
    id: 4,
    src: "/home/brands/brand-4.png",
    alt: "The brand image 4"
  },
  {
    id: 5,
    src: "/home/brands/brand-5.png",
    alt: "The brand image 5"
  },
  {
    id: 6,
    src: "/home/brands/brand-2.png",
    alt: "The brand image 6"
  },
]
export const services = [
  {
    id: 1,
    src: "/home/services/services-icon-1.png",
    alt: "services icon",
    title: "Compliance simplified",
    text: "Unit streamlines compliance so you can make your business at top.",
    transitionDelay: .3
  },
  {
    id: 2,
    src: "/home/services/services-icon-2.png",
    alt: "services icon",
    title: "Flexible & customizable",
    text: "Offer unique features and terms that work for your customers.",
    transitionDelay: .4
  },
  {
    id: 3,
    src: "/home/services/services-icon-3.png",
    alt: "services icon",
    title: "Built for scale",
    text: "Access a fast, reliable, and secure platform that is trusted",
    transitionDelay: .5
  },
];

export const steps = [
  {
    id: 1,
    title: "Sign up & load funds",
    text: "Verify your company and load funds to your Spendesk wallet from your existing bank account.",
  },
  {
    id: 2,
    title: "Set your spending rules",
    text: "Define teams, approval workflows, spending policies, and card limits that work for you.",
  },
  {
    id: 3,
    title: "Invite your team",
    text: "Employees can request funds, pay securely, and submit receipts in a snap with the Spendesk app.",
  },
];

export const movingIcons = [
  {
    id: 1,
    src: "/home/mov-sec/approval-icon.png",
    left: 57,
    top: 39,
    translateX: 500,
    translateY: 110,
    title: "Approval",
    zIndex: 10,
    alt: "The approval icon",
    elStartOffset: 2,
    elEndOffset: 10,
  },
  {
    id: 2,
    src: "/home/mov-sec/budget-icon.png",
    left: 60,
    top: 39,
    translateX: 500,
    translateY: 0,
    title: "Budget",
    zIndex: 5,
    alt: "The budget icon",
    // opacity: 0,
    elStartOffset: 2,
    elEndOffset: 8,
  },
  {
    id: 3,
    src: "/home/mov-sec/invoice-icon.png",
    left: 60,
    top: 29,
    translateX: 500,
    translateY: -90,
    title: "Invoice",
    zIndex: 5,
    alt: "The invoice icon",
    elStartOffset: 2,
    elEndOffset: 10,
  },
  {
    id: 4,
    src: "/home/mov-sec/payment-icon.png",
    right: 47,
    top: 39,
    translateX: -500,
    translateY: 110,
    title: "Payment",
    zIndex: 10,
    alt: "The payment icon",
    elStartOffset: 2,
    elEndOffset: 10,
  },
  {
    id: 5,
    src: "/home/mov-sec/report-icon.png",
    right: 50,
    top: 29,
    translateX: -500,
    translateY: -90,
    title: "Report",
    zIndex: 5,
    alt: "The report icon",
    elStartOffset: 2,
    elEndOffset: 10,
  },
  {
    id: 6,
    src: "/home/mov-sec/treasury-icon.png",
    right: 50,
    top: 39,
    translateX: -500,
    translateY: 0,
    title: "Treasury",
    zIndex: 5,
    alt: "The treasury icon",
    // opacity: 0,
    elStartOffset: 2,
    elEndOffset: 8,
  },

];

export const testimonial = [
  {
    id: 1,
    title:
      "We're loving it. This is simply unbelievable! I like it more and more each day because it makes my life a lot easier.",
    src: "/home/testimonial/testimonial-1.png",
    alt: "Testimonial image 1",
    name: "David",
    position: "General Manager",
    quote: "/home/testimonial/quotes.png",
  },
  {
    id: 2,
    title:
      "We're loving it. This is simply unbelievable! I like it more and more each day because it makes my life a lot easier.",
    src: "/home/testimonial/testimonial-2.png",
    alt: "Testimonial image 2",
    name: "Casey Kaspol",
    position: "General Manager",
    quote: "/home/testimonial/quotes.png",
  },
  {
    id: 3,
    title:
      "We're loving it. This is simply unbelievable! I like it more and more each day because it makes my life a lot easier.",
    src: "/home/testimonial/testimonial-1.png",
    alt: "Testimonial image 1",
    name: "Casey Kaspol",
    position: "General Manager",
    quote: "/home/testimonial/quotes.png",
  },
];

export const footerLinks = [
  {
    id: 1,
    title: "Main Page",
    links: [
      {
        id: 1,
        link: "Home",
        href: "/home",
      },
      {
        id: 2,
        link: "Feature",
        href: "/feature",
      },
      {
        id: 3,
        link: "Pricing",
        href: "/pricing",
      },
      {
        id: 4,
        link: "Integration",
        href: "/integration",
      },
    ],
  },
  {
    id: 2,
    title: "Company",
    links: [
      {
        id: 1,
        link: "About us",
        href: "/about-us",
      },
      {
        id: 2,
        link: "Careers",
        href: "/careers",
      },
      {
        id: 3,
        link: "Contact",
        href: "/contact",
      },
      {
        id: 4,
        link: "Blog",
        href: "/blog",
      },
      {
        id: 5,
        link: "FAQ",
        href: "/faq",
      },
    ],
  },
  {
    id: 3,
    title: "Utilities",
    links: [
      {
        id: 1,
        link: "Log in",
        href: "/log-in",
      },
      {
        id: 2,
        link: "Sign Up",
        href: "/sign-up",
      },
      {
        id: 3,
        link: "Style Guide",
        href: "/style-guide",
      },
      {
        id: 4,
        link: "Licenses",
        href: "/licenses",
      },
    ],
  },
];

export const featureBrands = [
  {
    id: 1,
    title: "Papertrail for every transaction",
    src: "/common/mark.png",
    alt: "The mark icon",
  },
  {
    id: 2,
    title: "No more audit nightmares",
    src: "/common/mark.png",
    alt: "The mark icon",
  },
  {
    id: 3,
    title: "All at the same place",
    src: "/common/mark.png",
    alt: "The mark icon",
  },
  {
    id: 4,
    title: "Accounting made easy",
    src: "/common/mark.png",
    alt: "The mark icon",
  },
  {
    id:5,
    title: "Papertrail for every transaction",
    src: "/common/mark.png",
    alt: "The mark icon",
  },
  {
    id:6,
    title: "Papertrail for every transaction",
    src: "/common/mark.png",
    alt: "The mark icon",
  },
  {
    id:7,
    title: "Papertrail for every transaction",
    src: "/common/mark.png",
    alt: "The mark icon",
  },
  {
    id:8,
    title: "Papertrail for every transaction",
    src: "/common/mark.png",
    alt: "The mark icon",
  },

]

export const exploreFeatures = [
  {
    id: 1,
    icon: "/feature/explore/explore-feature-1.png",
    title: "Digitise expense reports",
    text: "Create an expense reimbursement policy that staff can't help but follow. You set the rules and spending limits.",
    alt: "The feature explored list item icon",
  },
  {
    id: 2,
    icon: "/feature/explore/explore-feature-2.png",
    title: "Automate receipt capture",
    text: "Requesters can track their invoice the whole way. Finance teams and budget owners have complete oversight of all requests.",
    alt: "The feature explored list item icon",
  },
  {
    id: 3,
    icon: "/feature/explore/explore-feature-3.png",
    title: "Reconcile & report",
    text: "Any team member or supplier can submit an invoice by directly email, file upload, or by taking a photo with their phone.",
    alt: "The feature explored list item icon",
  },
  {
    id: 4,
    icon: "/feature/explore/explore-feature-4.png",
    title: "Digitise expense reports",
    text: "Create an expense reimbursement policy that staff can’t help but follow. You set the rules and spending limits.",
    alt: "The feature explored list item icon",
  },
  {
    id: 5,
    icon: "/feature/explore/explore-feature-5.png",
    title: "Reconcile & report",
    text: "Any team member or supplier can submit an invoice by directly email, file upload, or by taking a photo with their phone.",
    alt: "The feature explored list item icon",
  },
  {
    id: 6,
    icon: "/feature/explore/explore-feature-6.png",
    title: "Automate receipt capture",
    text: "Requesters can track their invoice the whole way. Finance teams and budget owners have complete oversight of all requests.",
    alt: "The feature explored list item icon",
  },
]

export const featureTestimonial = [

  {
    id: 1,
    src: "/feature/testimonial/feature-testimonial-1.jpg",
    alt: "feature testimonial image"
  },
  {
    id: 2,
    src: "/feature/testimonial/feature-testimonial-2.jpg",
    alt: "feature testimonial image"
  },
  {
    id: 3,
    src: "/feature/testimonial/feature-testimonial-5.jpg",
    alt: "feature testimonial image"
  },
  {
    id: 4,
    src: "/feature/testimonial/feature-testimonial-3.jpg",
    alt: "feature testimonial image"
  },

  {
    id: 5,
    src: "/feature/testimonial/feature-testimonial-2.jpg",
    alt: "feature testimonial image"
  },

  
  {
    id: 6,
    src: "/feature/testimonial/feature-testimonial-1.jpg",
    alt: "feature testimonial image"
  },
  {
    id: 7,
    src: "/feature/testimonial/feature-testimonial-2.jpg",
    alt: "feature testimonial image"
  },
  {
    id: 8,
    src: "/feature/testimonial/feature-testimonial-5.jpg",
    alt: "feature testimonial image"
  },
  {
    id: 9,
    src: "/feature/testimonial/feature-testimonial-3.jpg",
    alt: "feature testimonial image"
  },

  {
    id: 10,
    src: "/feature/testimonial/feature-testimonial-2.jpg",
    alt: "feature testimonial image"
  },
  

]

export const managementAccordion = [
  {
    id: 1,
    title: "Employees",
    text: "There are many variations of passages of Lorem ipsum available, but the majority have suffered alternation in some form, by injected humour, or randomized words which don't look even slightly believable",
  },
  {
    id: 2,
    title: "Managers",
    text: "There are many variations of passages of Lorem ipsum available, but the majority have suffered alternation in some form, by injected humour, or randomized words which don't look even slightly believable",
  },
  {
    id: 3,
    title: "Finance & Accounting",
    text: "There are many variations of passages of Lorem ipsum available, but the majority have suffered alternation in some form, by injected humour, or randomized words which don't look even slightly believable",
  },
  {
    id: 4,
    title: "Finance & Accounting",
    text: "There are many variations of passages of Lorem ipsum available, but the majority have suffered alternation in some form, by injected humour, or randomized words which don't look even slightly believable",
  },
];

export const featuresteps = [
  {
    id: 1,
    title: "Add employees",
    text: "Invite the employees who can submit expenses to your company. All they need is to download our app to get started."
  },
  {
    id: 2,
    title: "Review & Approve",
    text: "Once the expense is submitted, you can review and approve it right from your dashboard."
  },
  {
    id: 3,
    title: "Pay your employee",
    text: "Once the expense is approved, you can pay your employee with a single click, providing instant confirmation and payment at the same time."
  },
]

export const physicalCards = [
  {
    id: 1,
    label: "Trusted user",
    value: "9.4k",
    text: "Lorem ipsum dolor sit amet. Aut autem maxime et consequuntur"
  },
  {
    id: 2,
    label: "Rating",
    value: "99%",
    text: "Lorem ipsum dolor sit amet. Aut autem maxime et consequuntur"
  },
  {
    id: 3,
    label: "Fund",
    value: "$4.3M",
    text: "Lorem ipsum dolor sit amet. Qui eaque illum sit saepe repellat aut omnis repellat in cupiditate galisum."
  },
]

export const blogs = [
  {
    id: 1,
    title: "Do startups valuations matter for investment returns?",
    src: "/feature/posts/post-image-1.jpg",
    url: "do-startups-valuations-matter-for-investment-returns",
    label: "Company Announcement",
    author: "Mat Mursmark",
    authorsImage: "/feature/posts/authors-image-1.png",
    position: "Senior Product Designer",
    date: "March 19, 2024"
  },
  {
    id: 2,
    title: "12 powerful integrations & addons to grow your business",
    src: "/feature/posts/post-image-2.jpg",
    url: "12-powerful-valuations-addons-to-grow-your-business",
    label: "Company Finance tools & tech",
    author: "Sarah Lin",
    authorsImage: "/feature/posts/authors-image-1.png",
    position: "Marketing Specialist",
    date: "November 3, 2024"
    
  },
  {
    id: 3,
    title: "10 top spend management software solutions for 2024",
    src: "/feature/posts/post-image-3.jpg",
    url: "10-top-spend-management-software-solutions-for-2024",
    label: "Expense management",
    author: "David Chen",
    authorsImage: "/feature/posts/authors-image-1.png",
    position: "Financial Analyst",
    date: "May 10, 2024"
  },
  {
    id: 4,
    title: "Do startups valuations matter for investments",
    src: "/feature/posts/post-image-4.jpg",
    url: "do-startups-valuations-matter-for-investments",
    label: "Company Announcement",
    author: "Anna Lee",
    authorsImage: "/feature/posts/authors-image-1.png",
    position: "Content Strategist",
    date: "April 27, 2024"
  }
];

export const mediaIcons = [
  {
    id: 1,
    icon: Facebook,
    href: "https://www.facebook.com",
  },
  {
    id: 2,
    icon: Twitter,
    href: "https://x.com",
  },
  {
    id: 3,
    icon: Linkedin,
    href: "https://www.linkedin.com",
  },
  {
    id: 4,
    icon: Instagram,
    href: "https://www.instagram.com/",
  },
];

export const integration = [
  {
    id: 1,
    src: "/integration/hero-icon-1.png",
    title: "Pricing Generator",
    text: "Generate multi-currencies prices at current exchange rate in one click"
  },
  {
    id: 2,
    src: "/integration/hero-icon-2.png",
    title: "Invoice & Customer Uploader",
    text: "Bulk upload of all your Invoice and Customer data to your  account"
  },
  {
    id: 3,
    src: "/integration/hero-icon-3.png",
    title: "Retail",
    text: "Create an online store to sell your products with AI"
  },
  {
    id: 4,
    src: "/integration/hero-icon-4.png",
    title: "",
    text: ""
  },
]

export const integrationCalendars = [
  {
    id: 2,
    src: "/integration/integration-features/int-feature-image-1.png",
    width: 49,
    height: 40,
    title: "Google",
    text: "Enable your integration while use the above integration to maximise your products growth.",
  },
  {
    id: 3,
    src: "/integration/integration-features/int-feature-image-2.png",
    width: 40,
    height: 40,
    title: "Office 365",
    text: "Enable your integration while use the above integration to maximise your products growth",
  },
  {
    id: 4,
    src: "/integration/integration-features/int-feature-image-3.png",
    width: 40,
    height: 40,
    title: "Apple Calender",
    text: "Enable your integration while use the above integration to maximise your products growth",
  },
];

export const integrationCalendarsSecond = [
  {
    id: 1,
    src: "/integration/integration-features/int-feature-image-4.png",
    width: 40,
    height: 40,
    title: "Todolist",
    text: "Enable your integration while use the above integration to maximise your products growth",
  },
  {
    id: 2,
    src: "/integration/integration-features/int-feature-image-5.png",
    width: 42,
    height: 40,
    title: "Google Tasks",
    text: "Enable your integration while use the above integration to maximise your products growth",
  },
  {
    id: 3,
    src: "/integration/integration-features/int-feature-image-6.png",
    width: 40,
    height: 40,
    title: "Microsoft To Do",
    text: "Enable your integration while use the above integration to maximise your products growth",
  },
  {
    id: 4,
    src: "/integration/integration-features/int-feature-image-3.png",
    width: 42,
    height: 40,
    title: "Outlook Email",
    text: "Enable your integration while use the above integration to maximise your products growth",
  },
  {
    id: 5,
    src: "/integration/integration-features/int-feature-image-2.png",
    width: 40,
    height: 40,
    title: "Zapier",
    text: "Enable your integration while use the above integration to maximise your products growth",
  },
  {
    id: 6,
    src: "/integration/integration-features/int-feature-image-1.png",
    width: 49,
    height: 40,
    title: "Gmail",
    text: "Enable your integration while use the above integration to maximise your products growth",
  },
  {
    id: 7,
    src: "/integration/integration-features/int-feature-image-5.png",
    width: 42,
    height: 40,
    title: "Notion",
    text: "Enable your integration while use the above integration to maximise your products growth",
  },
  {
    id: 8,
    src: "/integration/integration-features/int-feature-image-7.png",
    width: 40,
    height: 40,
    title: "Monday.com",
    text: "Enable your integration while use the above integration to maximise your products growth",
  },
]

export const videoConference = [
  {
    id: 1,
    src: "/integration/integration-features/int-feature-image-1.png",
    width: 49,
    height: 40,
    title: "Zoom",
    text: "Enable your integration while use the above integration to maximise your products growth",
  },
  {
    id: 2,
    src: "/integration/integration-features/int-feature-image-6.png",
    width: 40,
    height: 40,
    title: "Google Meet",
    text: "Enable your integration while use the above integration to maximise your products growth",
  },
  {
    id: 3,
    src: "/integration/integration-features/int-feature-image-4.png",
    width: 40,
    height: 40,
    title: "Microsoft Teams",
    text: "Enable your integration while use the above integration to maximise your products growth",
  },
]

export const faqAccodion = [
  {
    id: 1,
    title: "Do you have a free trial?",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat."
  },
  {
    id: 2,
    title: "DDo you offer any early startup discounts?",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat."
  },
  {
    id: 3,
    title: "Can I get a discount if I commit yearly?",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat."
  },
  {
    id: 4,
    title: "How long does it takes to get results?",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat."
  },
  {
    id: 5,
    title: "How do i do when i have a question?",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat."
  },
  {
    id: 6,
    title: "How will i be kept informed of my case?",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat."
  },
]

export const pricingOptions = [
  {
    id: 1,
    yearlyPrice: "Free",
    monthlyPrice: "Free",
    type: "Starter",
    billType: "Free for forever",
    discount: undefined,
    included: [
      {
        id: 1,
        text: "Unlimited ideas & features",
        icon: "/common/mark.png"
      },
      {
        id: 2,
        text: "Unlimited feedback",
        icon: "/common/mark.png"
      },
      {
        id: 3,
        text: "AI Suggestions",
        icon: "/common/mark.png"
      },
      {
        id: 4,
        text: "CRM integration",
        icon: "/common/mark.png"
      },
      {
        id: 5,
        text: "Manage feedback from Slack & Hubspot",
        icon: "/common/mark.png"
      }, 
      {
        id: 6,
        text: "Dedicated Slack Channel",
        icon: "/common/mark.png"
      }
    ]
  },
  {
    id: 2,
    monthlyPrice: 30,
    yearlyPrice: 16,
    type: "Pro",
    billType: "Billed annually",
    discount: 20,
    included: [
      {
        id: 1,
        text: "Unlimited ideas & features",
        icon: "/common/mark.png"
      },
      {
        id: 2,
        text: "Unlimited feedback",
        icon: "/common/mark.png"
      },
      {
        id: 3,
        text: "AI Suggestions",
        icon: "/common/mark.png"
      },
      {
        id: 4,
        text: "CRM integration",
        icon: "/common/mark.png"
      },
      {
        id: 5,
        text: "Manage feedback from Slack & Hubspot",
        icon: "/common/mark.png"
      }, 
      {
        id: 6,
        text: "Dedicated Slack Channel",
        icon: "/common/mark.png"
      }
    ]
  },
  {
    id: 3,
    monthlyPrice: 40,
    yearlyPrice: 30,
    type: "Enterprise",
    billType: "Billed annually",
    discount: 20,
    included: [
      {
        id: 1,
        text: "Unlimited ideas & features",
        icon: "/common/mark.png"
      },
      {
        id: 2,
        text: "Unlimited feedback",
        icon: "/common/mark.png"
      },
      {
        id: 3,
        text: "AI Suggestions",
        icon: "/common/mark.png"
      },
      {
        id: 4,
        text: "CRM integration",
        icon: "/common/mark.png"
      },
      {
        id: 5,
        text: "Manage feedback from Slack & Hubspot",
        icon: "/common/mark.png"
      }, 
      {
        id: 6,
        text: "Dedicated Slack Channel",
        icon: "/common/mark.png"
      }
    ]
  },
]

export const loginForm: LoginFormFieldsProps[]  = [
  {
    id: 1,
    label: "Email",
    placeholder: "Enter your email",
    type: "text",
    name: "email"
  },
  {
    id: 2,
    label: "Choose password",
    placeholder: "Enter your password",
    type: "text",
    name: "password"
  }
]

export const signUpForm: RegisterFormFieldsProps[] = [
  {
    id: 1,
    label: "First name*",
    placeholder: "John",
    type: "text",
    name: "firstName"
  },
  {
    id: 2,
    label: "Last name*",
    placeholder: "Doe",
    type: "text",
    name: "lastName"
  },
  {
    id: 3,
    label: "Email",
    placeholder: "Enter your email",
    type: "text",
    name: "email"
  },
  {
    id: 4,
    label: "Choose password",
    placeholder: "Minimum 8 characters",
    type: "text",
    name: "password"
  },
]