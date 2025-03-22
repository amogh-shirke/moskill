"use client"

import { useEffect } from "react"
import Image from "next/image"
import { motion, useAnimation } from "framer-motion"
import { Button } from "@/src/components/ui/button"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/src/components/ui/accordion"
import { QuotePopup } from "@/src/components/quote-form"
import { CheckCircle, Phone, Star } from "lucide-react"
import { useRouter } from "next/navigation"
import { Metadata } from "next"

type ProductData = {
  name: string
  tagline: string
  heroImage: string
  overview: string
  features: string[]
  specifications: {
    frameMaterial: string
    meshMaterial: string
    meshColor: string[]
    usage: string[]
    maxSize: string
  }
  images: string[]
  faqs: { question: string; answer: string }[]
}


function extractYouTubeVideoId(url: string): string {
  const regex = /(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/;
  const match = url.match(regex);
  return match ? match[1] : "";
}


const productData: { [key: string]: ProductData } = {
  "horizontal-mosquito-net": {
    name: "Horizontal Mosquito Net",
    tagline: "Elegant and space-efficient insect protection for large openings",
    heroImage: "https://res.cloudinary.com/du3er2t49/image/upload/v1741181646/uploads/f8wajlcca6zd3y6dswor.webp",
    overview:
      "The Horizontal Mosquito Net is an elegant and space-efficient solution for keeping insects out while maintaining ventilation and natural light. It is best suited for large openings such as balconies, French windows, sliding and openable doors and windows. This retractable net system operates smoothly on a horizontal track, making it a user-friendly and stylish choice for modern homes, offices, and commercial spaces.",
    features: [
      "Retractable Design: Slides horizontally with minimal effort, easy to open and close",
      "Premium Material: High-quality aluminum frame with special polyester mesh",
      "Child & Pet Safety: Smooth and safe design to prevent injuries",
      "Weatherproof & Dust-Resistant: Ideal for all climates",
      "Customizable Size & Finish: Various colors, dimensions, and frame finishes available",
      "Maximum Airflow & Visibility: Ensures a comfortable living experience",
      "Fits Minimum Size & Matches Color: Can be customized to fit even the smallest windows and match existing color schemes",
      "Single Track Installation: Can be fitted on a single track and cover the entire window",
      "Universal Compatibility: Can be installed on any type of window"
    ],
    specifications: {
      frameMaterial: "Aluminum (Powder-coated/Anodized/Wooden Finish)",
      meshMaterial: "High-quality polyester",
      meshColor: ["Black", "Grey"],
      usage: ["French windows", "Sliding doors", "Balconies", "Patios"],
      maxSize: "Up to 20 feet center opening",
    },
    images: [
      "https://res.cloudinary.com/du3er2t49/image/upload/v1741181644/uploads/ruf55x4qkeotzumixwmz.webp",
      "https://res.cloudinary.com/du3er2t49/image/upload/v1741181648/uploads/t5qz8jc0ige3jfjndbx5.webp",
      "https://res.cloudinary.com/du3er2t49/image/upload/v1741181642/uploads/ugokmsqkcnk7by6uevw2.webp",
    ],
    faqs: [
      {
        question: "How easy is it to operate the horizontal mosquito net?",
        answer:
          "The horizontal mosquito net is designed for effortless operation. It slides smoothly along its track, allowing you to open or close it with minimal effort. The net can be easily operated with one hand, making it convenient for users of all ages.",
      },
      {
        question: "Can the horizontal mosquito net be customized to fit my specific window or door size?",
        answer:
          "Yes, our horizontal mosquito nets are fully customizable. We take precise measurements of your windows or doors to ensure a perfect fit. The nets can be tailored to various sizes, up to 20 feet for center-opening designs, accommodating even the largest openings.",
      },
      {
        question: "What maintenance is required for the horizontal mosquito net?",
        answer:
          "Maintenance for our horizontal mosquito nets is minimal. Regular dusting with a soft brush or vacuum cleaner attachment is usually sufficient. For deeper cleaning, you can gently wipe the mesh with a damp cloth and mild soap solution. The tracks should be kept clean and free of debris to ensure smooth operation.",
      },
      {
        question: "How durable is the mesh used in the horizontal mosquito net?",
        answer:
          "We use high-quality polyester mesh that is designed for durability and longevity. The mesh is resistant to tearing and weathering, ensuring that it maintains its effectiveness against insects while withstanding daily use and environmental factors.",
      },
      {
        question: "Can the horizontal mosquito net be installed on all types of windows and doors?",
        answer:
          "Our horizontal mosquito nets are versatile and can be installed all types of windows and doors, including sliding doors, French windows, and large balcony openings. During the consultation, our experts will assess your specific requirements and recommend the best installation method for your space.",
      },
    ],
  },

  "vertical-mosquito-net": {
    name: "Vertical Mosquito Net",
    tagline: "Effortless and sleek mosquito protection for windows and doors",
    heroImage: "https://res.cloudinary.com/du3er2t49/image/upload/v1741181659/uploads/moobiiaxxjq6fxzsh6qd.webp",
    overview:
      "The Vertical Mosquito Net is designed for easy operation and seamless integration into modern interiors. Ideal for windows and small openings, this net features a rolling mechanism that allows you to pull it down when needed and retract it effortlessly when not in use. Its durable mesh ensures long-term protection against insects while allowing natural airflow.",
    features: [
      "Smooth Rolling Mechanism: Effortless pull-down and retract functionality",
      "Space-Saving Design: Perfect for compact window spaces",
      "Durable and Lightweight: High-quality aluminum frame and robust mesh",
      "Customizable Sizes: Available for various window and door dimensions",
      "Maintains Airflow: Keeps insects out while ensuring ventilation",
      "Weather-Resistant: Suitable for all seasons and climate conditions",
    ],
    specifications: {
      frameMaterial: "Aluminum (Powder-coated/Anodized/Wooden Finish)",
      meshMaterial: "High-quality polyester",
      meshColor: ["Black", "Grey"],
      usage: ["Windows", "Small balconies", "Openable doors"],
      maxSize: "Up to 5 feet width and 6 feet height",
    },
    images: [
      "https://res.cloudinary.com/du3er2t49/image/upload/v1741181657/uploads/syzbxk2ps2hxphu2du77.webp",
      "https://res.cloudinary.com/du3er2t49/image/upload/v1741181655/uploads/enadthf13xqb90jaci2y.webp",
      "https://res.cloudinary.com/du3er2t49/image/upload/v1741181661/uploads/raabwdqi56xxlrvtmtai.webp",
    ],
    faqs: [
      {
        question: "Can the vertical mosquito net be used for all types of windows?",
        answer:
          "Yes, our vertical mosquito nets are designed to fit a variety of windows, including sliding, casement, and fixed windows. We customize the net to match your specific window dimensions for a seamless fit.",
      },
      {
        question: "Is the mesh of the vertical mosquito net durable?",
        answer:
          "Absolutely. The high-quality polyester mesh is resistant to wear and tear, ensuring long-lasting insect protection while maintaining clarity and airflow.",
      },
      {
        question: "How do I clean and maintain my vertical mosquito net?",
        answer:
          "Regular dusting with a soft cloth or a vacuum cleaner is recommended. For a deeper clean, gently wipe the mesh with a damp cloth and mild soap. Keep the rolling mechanism free of debris for smooth operation.",
      },
      {
        question: "Can the vertical mosquito net be installed on doors?",
        answer:
          "Yes, the vertical mosquito net is suitable for openable doors, provided they fall within the size specifications. Our team can assess and customize the installation for the best fit.",
      },
      {
        question: "Is the installation process complicated?",
        answer:
          "Not at all! Our professional installation ensures a quick and hassle-free setup. The net is securely mounted on the window or door frame for smooth and long-term functionality.",
      },
    ],
  },
  "bird-netting": {
    name: "Bird Netting",
    tagline: "Strong and durable protection against birds for open spaces",
    heroImage: "https://res.cloudinary.com/du3er2t49/image/upload/v1741181634/uploads/z81lhge6mnjkvcdmu0f2.webp",
    overview:
      "Bird Netting is an effective solution to prevent birds from entering residential, commercial, and industrial spaces. Designed to be nearly invisible from a distance, this netting helps maintain cleanliness by keeping birds away from balconies, terraces, windows, and open spaces. Made from high-quality, weather-resistant material, our bird netting provides long-term protection while allowing proper airflow and visibility.",
    features: [
      "Durable and weather-resistant material for long-term use",
      "Nearly invisible design that does not obstruct views",
      "Prevents bird-related damage and hygiene issues",
      "Custom-fit for various installations, including balconies and terraces",
      "Allows unrestricted airflow and natural light",
      "Easy to maintain and clean",
    ],
    specifications: {
      frameMaterial: "N/A (Installed with hooks and anchors)",
      meshMaterial: "High-strength UV-stabilized polyethylene",
      meshColor: ["Transparent", "Black", "White"],
      usage: ["Balconies", "Terraces", "Windows", "Industrial spaces", "Warehouses"],
      maxSize: "Customizable as per requirement",
    },
    images: [
      "https://res.cloudinary.com/du3er2t49/image/upload/v1741181636/uploads/oucruqkspskmkl3arytc.webp",
      "https://res.cloudinary.com/du3er2t49/image/upload/v1741181638/uploads/ghjrnxpw4w3nqrcviqko.webp",
      "https://res.cloudinary.com/du3er2t49/image/upload/v1741181639/uploads/gxx3vq7dzye6sdatwvjd.webp",
    ],
    faqs: [
      {
        question: "Is bird netting safe for birds?",
        answer:
          "Yes, our bird netting is designed to keep birds away without harming them. The material prevents birds from entering protected areas while ensuring their safety.",
      },
      {
        question: "Can bird netting withstand harsh weather conditions?",
        answer:
          "Yes, the netting is made from UV-stabilized polyethylene, which is weather-resistant and durable, making it suitable for long-term outdoor use.",
      },
      {
        question: "How is bird netting installed?",
        answer:
          "Our team installs the net using hooks, anchors, and cables to ensure a secure and long-lasting fit. The installation is non-intrusive and does not damage walls or surfaces.",
      },
      {
        question: "Can bird netting be removed and reinstalled?",
        answer:
          "Yes, the netting can be removed if necessary and reinstalled as required. However, professional assistance is recommended for proper handling.",
      },
      {
        question: "Does bird netting block airflow or sunlight?",
        answer:
          "No, bird netting is designed to be lightweight and porous, allowing natural airflow and sunlight while keeping birds out.",
      },
    ],
  },

  "invisible-grills": {
    name: "Invisible Grills",
    tagline: "Modern and secure alternative to traditional safety grills",
    heroImage: "https://res.cloudinary.com/du3er2t49/image/upload/v1741181649/uploads/y0qo2q7qdtvzsryfuhyy.webp",
    overview:
      "Invisible Grills provide a sleek and modern safety solution for balconies, windows, and open areas. Made from high-strength stainless steel cables, these grills offer maximum safety without obstructing the view. Designed for residential and commercial properties, invisible grills provide security while maintaining aesthetic appeal. They are rust-resistant, lightweight (putting less weight on windows), easy to maintain, and highly durable, making them an ideal alternative to bulky iron grills.",
    features: [
      "Unobstructed panoramic view with a minimalist design",
      "High-tensile strength stainless steel cables for maximum safety",
      "Rust-resistant, weatherproof, and lightweight for less strain on windows",
      "Customizable installation for balconies, windows, and open areas",
      "Low maintenance and easy to clean",
      "Child and pet-friendly design with no sharp edges",
    ],
    specifications: {
      frameMaterial:
        "Aluminum strong profile with high-tensile stainless steel cables",
      meshMaterial: "SS 304/316 - 2.5 mm Nylon Coated Wire (Imported)",
      meshColor: ["Metallic Silver"],
      usage: [
        "Balconies",
        "Windows",
        "High-rise apartments",
        "Penthouse",
        "Commercial spaces",
      ],
      maxSize: "Customizable as per requirement",
    },
    images: [
      "https://res.cloudinary.com/du3er2t49/image/upload/v1741181650/uploads/sqpxgppb2vja11aamxek.webp",
      "https://res.cloudinary.com/du3er2t49/image/upload/v1741181652/uploads/k5wewqochsnwjr3q0w3d.webp",
      "https://res.cloudinary.com/du3er2t49/image/upload/v1741181653/uploads/vzns2zucqldv3vjpptpl.webp",
    ],
    faqs: [
      {
        question: "Are invisible grills strong enough to ensure safety?",
        answer:
          "Yes, our invisible grills use high-tensile strength stainless steel cables and strong aluminium profile that can withstand high pressure, ensuring safety for residents.",
      },
      {
        question: "Can invisible grills be installed on all types of balconies and windows?",
        answer:
          "Yes, invisible grills are customizable and can be installed on different types of balconies, windows, and open spaces, regardless of size.",
      },
      {
        question: "How do invisible grills compare to traditional iron grills?",
        answer:
          "Invisible grills offer the same level of safety as traditional grills but with a modern, unobstructed design that does not block views.",
      },
      {
        question: "Are invisible grills rust-resistant?",
        answer:
          "Yes, the stainless steel cables are coated to prevent rusting and corrosion, making them suitable for long-term outdoor use.",
      },
      {
        question:"What are the specifications of the SS 304 nylon-coated wire system?",
        answer:"The SS 304 system consists of a 2.5 mm nylon-coated imported wire with a 2-inch vertical spacing between wires. It includes aluminum top and bottom sections with a white powder-coated cover profile, plastic rollers, SS 304 washers and fixing screws, and SS 316 four-way stiffeners. For installation, SS 304 - 3” concrete fasteners are used for RCC structures or as per requirements, along with aluminum rivets for securing the cover to the section."
      }
    ],
  },
  "honeycomb-mosquito-net-pleated": {
    name: "Honeycomb with Mosquito Net Pleated",
    tagline: "Dual-layer protection with style and efficiency",
    heroImage: "https://res.cloudinary.com/du3er2t49/image/upload/v1741712812/skzepp6cgdtgdwgmpbhz.webp",
    overview:
      "The Honeycomb with Mosquito Net Pleated is an innovative solution that combines the benefits of a pleated mosquito net with a stylish honeycomb structure. It offers dual-layer protection against insects and enhances privacy while maintaining natural airflow. Ideal for large windows, doors, and balconies, this system ensures a modern aesthetic with high functionality.",
    features: [
      "Dual-Layer Protection: Combines a pleated mosquito net with a honeycomb structure",
      "Superior Insulation: Regulates temperature while keeping insects out",
      "Stylish & Modern: Enhances aesthetics with a sleek, contemporary look",
      "Smooth Operation: Effortless opening and closing mechanism",
      "Customizable Sizes: Available in various dimensions to fit different spaces",
      "Durable & Weatherproof: Resistant to dust, moisture, and wear",
    ],
    specifications: {
      frameMaterial: "Aluminum (Powder-coated/Anodized Finish)",
      meshMaterial: "Premium polyester pleated mesh",
      meshColor: ["Black", "Grey"],
      usage: ["Balconies", "French windows", "Sliding doors"],
      maxSize: "Up to 20 feet width",
    },
    images: [
      "https://res.cloudinary.com/du3er2t49/image/upload/v1741712849/zlni97b0u2tvks95gjxe.webp",
      "https://res.cloudinary.com/du3er2t49/image/upload/v1741712925/rx3uqiygslcixwz4t1xt.webp",
      "https://youtu.be/eBYmMT8qTTI?si=ahm0g-Ju5z5uYJf8",
    ],
    faqs: [
      {
        question: "What makes the honeycomb with mosquito net pleated unique?",
        answer:
          "It combines a pleated mosquito net with a honeycomb structure for added insulation, privacy, and insect protection.",
      },
      {
        question: "Is it suitable for all weather conditions?",
        answer:
          "Yes, the materials used are weather-resistant, ensuring durability and efficiency throughout the year.",
      },
      {
        question: "Can I customize the size and color?",
        answer: "Yes, it is available in custom sizes and different mesh colors to match your interior.",
      },
      {
        question: "How easy is it to clean and maintain?",
        answer:
          "It requires minimal maintenance. Regular dusting and occasional cleaning with a damp cloth are enough to keep it in great condition.",
      },
      {
        question: "Can this net be installed on sliding doors?",
        answer: "Yes, it is designed for sliding doors, large windows, and balconies.",
      },
    ],
  },
  "aluminium-mosquito-net-safety": {
    name: "Aluminium Mosquito Net with Safety",
    tagline: "Strong and secure mosquito protection for homes and offices",
    heroImage: "https://res.cloudinary.com/du3er2t49/image/upload/v1741711320/tocowgofj837fnfipceh.webp",
    overview:
      "The Aluminium Mosquito Net with Safety is designed for enhanced security and durability while keeping insects out. Made with a high-strength aluminum frame and a finely woven stainless steel mesh, it provides superior protection against mosquitoes, dust, and external elements. Ideal for residential and commercial spaces, this net ensures maximum airflow without compromising safety.",
    features: [
      "High-Strength Aluminum Frame: Rust-resistant and long-lasting",
      "Stainless Steel Mesh: Strong and secure against insects and intruders",
      "Child & Pet Safe: Durable design ensures added safety",
      "Clear Visibility & Ventilation: Allows fresh air without obstruction",
      "Customizable Designs: Available in various sizes and finishes",
      "Weather & Corrosion Resistant: Ideal for all climates",
    ],
    specifications: {
      frameMaterial: "Aluminum (Powder-coated/Anodized Finish)",
      meshMaterial: "Stainless steel (SS316)",
      meshColor: ["Black", "Grey"],
      usage: ["Windows", "Doors", "Balconies", "Commercial buildings"],
      maxSize: "Custom sizes available",
    },
    images: [
      "https://res.cloudinary.com/du3er2t49/image/upload/v1741712343/pnvv5tvxabra4kwk29zi.jpg ",
      "https://res.cloudinary.com/du3er2t49/image/upload/v1741711320/tocowgofj837fnfipceh.webp ",
      "https://youtu.be/IelhTi6ByF4?si=9i-yNRJdbUQpCasv ",
    ],
    faqs: [
      {
        question: "How strong is the aluminum mosquito net?",
        answer:
          "The aluminum frame combined with stainless steel mesh provides high durability, making it strong enough to resist external impact.",
      },
      {
        question: "Is the net rust-proof and weather-resistant?",
        answer:
          "Yes, the aluminum frame is powder-coated to prevent rusting, and the stainless steel mesh is resistant to corrosion and weather conditions.",
      },
      {
        question: "Can I install this net on my office windows?",
        answer: "Yes, it is suitable for both residential and commercial spaces, including office windows and doors.",
      },
      {
        question: "Does the net block airflow or visibility?",
        answer: "No, the fine mesh ensures excellent ventilation and clear visibility while keeping insects out.",
      },
      {
        question: "Is professional installation required?",
        answer: "It is recommended for best results, but it can also be installed DIY with proper guidance.",
      },
    ],
  },
}

export default function ProductPage({ params }: { params: { product: string } }) {
  const router = useRouter()
  const product = productData[params.product]
  const controls = useAnimation()

  useEffect(() => {
    controls.start({ opacity: 1, y: 0 })
  }, [controls])

  if (!product) {
    return <div>Product not found</div>
  }

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden md:py-32">
        <div className="absolute inset-0 z-0">
          <Image
            src={product.heroImage || "/placeholder.svg"}
            alt={product.name}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 z-10 bg-black/60" />
        </div>
        <div className="container relative z-20 px-4 mx-auto">
          <div className="max-w-3xl text-white">
            <motion.h1
              className="mb-6 text-5xl font-bold md:text-6xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              {product.name}
            </motion.h1>
            <motion.p
              className="mb-8 text-xl md:text-2xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {product.tagline}
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <Button size="lg" variant="gradient" onClick={() => router.push("/contact")}>
                Get a Free Quote
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Product Overview */}
      <section className="py-20 bg-white">
        <div className="container px-4 mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={controls}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="mb-8 text-4xl font-bold text-center">Product Overview</h2>
            <p className="mb-12 text-xl leading-relaxed text-gray-600">{product.overview}</p>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={controls} transition={{ duration: 0.8, delay: 0.2 }}>
            <h3 className="mb-8 text-3xl font-bold text-center">Key Features</h3>
            <div className="grid grid-cols-1 gap-8 mb-12 md:grid-cols-2">
              {product.features.map((feature, index) => (
                <div key={index} className="flex items-start p-6 rounded-lg shadow-md bg-gray-50">
                  <CheckCircle className="flex-shrink-0 w-6 h-6 mt-1 mr-4 text-primary" />
                  <p className="text-lg">{feature}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Product Images */}
      <section className="py-20 bg-gray-100">
        <div className="container px-4 mx-auto">
          <h2 className="mb-12 text-4xl font-bold text-center">See It in Action</h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {product.images.map((media, index) => {
              const isVideo =
                media.trim().toLowerCase().endsWith(".mp4") ||
                media.trim().toLowerCase().endsWith(".webm") ||
                media.trim().toLowerCase().includes("youtube.com") ||
                media.trim().toLowerCase().includes("youtu.be")

              return (
                <motion.div
                  key={index}
                  className="overflow-hidden rounded-lg shadow-lg"
                  initial={{ opacity: 0, y: 20 }}
                  animate={controls}
                  transition={{ duration: 0.8, delay: 0.2 * index }}
                >
                  {isVideo ? (
                    media.includes("youtube.com") || media.includes("youtu.be") ? (
                      <iframe
                        src={`https://www.youtube.com/embed/${extractYouTubeVideoId(media)}?autoplay=1&mute=1`}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        className="object-cover w-full h-64"
                        width={600}
                        height={400}
                      />
                    ) : (
                      <video
                        src={media}
                        controls
                        autoPlay
                        muted
                        className="object-cover w-full h-64"
                        width={600}
                        height={400}
                      />
                    )
                  ) : (
                    <Image
                      src={media || "/placeholder.svg"}
                      alt={`${product.name} - Image ${index + 1}`}
                      width={600}
                      height={400}
                      className="object-cover w-full h-64"
                    />
                  )}
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Product Specifications */}
      <section className="py-20 bg-white">
        <div className="container px-4 mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={controls} transition={{ duration: 0.8 }}>
            <h2 className="mb-12 text-4xl font-bold text-center">Product Specifications</h2>
            <div className="max-w-3xl p-8 mx-auto rounded-lg shadow-md bg-gray-50">
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <div>
                  <p className="mb-2 text-lg">
                    <strong>Frame Material:</strong> {product.specifications.frameMaterial}
                  </p>
                  <p className="mb-2 text-lg">
                    <strong>Mesh Material:</strong> {product.specifications.meshMaterial}
                  </p>
                  <p className="mb-2 text-lg">
                    <strong>Mesh Color:</strong> {product.specifications.meshColor.join(", ")}
                  </p>
                </div>
                <div>
                  <p className="mb-2 text-lg">
                    <strong>Ideal Usage:</strong> {product.specifications.usage.join(", ")}
                  </p>
                  <p className="mb-2 text-lg">
                    <strong>Maximum Size:</strong> {product.specifications.maxSize}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us? */}
      <section className="py-20 text-white bg-gradient-to-r from-pink-500 to-purple-600">
        <div className="container px-4 mx-auto">
          <h2 className="mb-12 text-4xl font-bold text-center">Why Choose Moskill?</h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <motion.div
              className="p-8 rounded-lg bg-white/10 backdrop-blur-sm"
              initial={{ opacity: 0, y: 20 }}
              animate={controls}
              transition={{ duration: 0.8 }}
            >
              <h3 className="mb-4 text-2xl font-bold">Quality Assurance</h3>
              <p className="text-lg">
                We use only the highest quality materials to ensure durability and long-lasting performance.
              </p>
            </motion.div>
            <motion.div
              className="p-8 rounded-lg bg-white/10 backdrop-blur-sm"
              initial={{ opacity: 0, y: 20 }}
              animate={controls}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h3 className="mb-4 text-2xl font-bold">Expert Installation</h3>
              <p className="text-lg">
                Our skilled technicians ensure perfect fitting and professional installation every time.
              </p>
            </motion.div>
            <motion.div
              className="p-8 rounded-lg bg-white/10 backdrop-blur-sm"
              initial={{ opacity: 0, y: 20 }}
              animate={controls}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <h3 className="mb-4 text-2xl font-bold">Customer Satisfaction</h3>
              <p className="text-lg">
                With over a decade of experience, we've built a reputation for excellence and customer trust.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="container px-4 mx-auto">
          <h2 className="mb-12 text-4xl font-bold text-center">What Our Customers Say</h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                name: "John Doe",
                comment:
                  "The horizontal mosquito net from Moskill has been a game-changer for our balcony. We can now enjoy the outdoors without worrying about insects.",
                rating: 5,
              },
              {
                name: "Jane Smith",
                comment:
                  "Excellent product and installation service. The team was professional and the quality of the net is outstanding.",
                rating: 5,
              },
              {
                name: "Mike Johnson",
                comment:
                  "We've tried other mosquito nets before, but Moskill's product is by far the best in terms of durability and ease of use.",
                rating: 4,
              },
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                className="p-8 rounded-lg shadow-lg bg-gray-50"
                initial={{ opacity: 0, y: 20 }}
                animate={controls}
                transition={{ duration: 0.8, delay: 0.2 * index }}
              >
                <div className="flex items-center mb-4">
                  {Array(5)
                    .fill(0)
                    .map((_, i) => (
                      <Star
                        key={i}
                        size={20}
                        className={i < testimonial.rating ? "text-yellow-500 fill-yellow-500" : "text-gray-300"}
                      />
                    ))}
                </div>
                <p className="mb-4 text-lg italic text-gray-600">"{testimonial.comment}"</p>
                <p className="text-lg font-bold">{testimonial.name}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20 bg-gray-100">
        <div className="container px-4 mx-auto">
          <h2 className="mb-12 text-4xl font-bold text-center">Frequently Asked Questions</h2>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={controls}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto"
          >
            <Accordion type="single" collapsible className="space-y-4">
              {product.faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="bg-white rounded-lg shadow-md">
                  <AccordionTrigger className="px-6 py-4 text-lg font-semibold">{faq.question}</AccordionTrigger>
                  <AccordionContent className="px-6 pb-4 text-gray-600">{faq.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </section>

      {/* Contact & Quote Request */}
      <section className="py-20 text-white bg-gradient-to-r from-pink-500 to-purple-600">
        <div className="container px-4 mx-auto text-center">
          <h2 className="mb-8 text-4xl font-bold">Ready to Get Started?</h2>
          <p className="max-w-2xl mx-auto mb-12 text-xl">
            Contact us today for a free consultation and quote. Let our experts help you find the perfect solution for
            your home or business.
          </p>
          <div className="flex flex-col items-center justify-center gap-6 sm:flex-row">
            <Button size="lg" variant="secondary" onClick={() => router.push("/contact")} className="px-8 py-4 text-lg">
              Request a Free Quote
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="flex items-center px-8 py-4 text-lg text-white border-white bg-white/20 backdrop-blur-sm hover:bg-white/30"
            >
              <Phone className="mr-2" /> Call Us: 9768872724
            </Button>
          </div>
        </div>
      </section>

      <QuotePopup />
    </div>
  )
}

