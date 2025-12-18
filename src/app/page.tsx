"use client"

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleApple from '@/components/navbar/NavbarStyleApple/NavbarStyleApple';
import HeroSplitAvatars from '@/components/sections/hero/HeroSplitAvatars';
import ProductCardTwo from '@/components/sections/product/ProductCardTwo';
import MediaAbout from '@/components/sections/about/MediaAbout';
import PricingCardOne from '@/components/sections/pricing/PricingCardOne';
import MetricCardOne from '@/components/sections/metrics/MetricCardOne';
import TestimonialCardFifteen from '@/components/sections/testimonial/TestimonialCardFifteen';
import FaqSplitText from '@/components/sections/faq/FaqSplitText';
import ContactInline from '@/components/sections/contact/ContactInline';
import FooterCard from '@/components/sections/footer/FooterCard';
import { Coffee, Star, Sparkles, Heart, TrendingUp, Users, Globe, Award, Box, Instagram, Twitter, Facebook } from "lucide-react";

export default function CoffeesGopPage() {
  return (
    <ThemeProvider
      defaultButtonVariant="directional-hover"
      defaultTextAnimation="entrance-slide"
      borderRadius="sharp"
      contentWidth="large"
      sizing="largeSizeExtraLargeSpacing"
      background="noiseGradient"
      cardStyle="gradient-bordered"
      primaryButtonStyle="diagonal-gradient"
      secondaryButtonStyle="outline"
      headingFontWeight="normal"
    >
      <div id="nav" data-section="nav">
        <NavbarStyleApple
          brandName="CoffeesGop"
          logoSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34my1kGeblbsCcwUUCcjBY9WFkg/uploaded-1766065819975-obtnu49h.jpg"
          logoAlt="CoffeesGop Coffee Brand Logo"
          navItems={[
            { name: "Home", id: "hero" },
            { name: "Products", id: "products" },
            { name: "About", id: "about" },
            { name: "Menu", id: "pricing" },
            { name: "Contact", id: "contact" }
          ]}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroSplitAvatars
          title="Experience Premium Coffee"
          description="Discover the finest hand-roasted coffee beans from around the world. Every cup tells a story of excellence, passion, and craftsmanship."
          tag="Coffee Excellence"
          tagIcon={Coffee}
          avatars={[
            { src: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34my1kGeblbsCcwUUCcjBY9WFkg/uploaded-1766065825361-zxt8hoda.jpg", alt: "Coffee lover 1" },
            { src: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34my1kGeblbsCcwUUCcjBY9WFkg/uploaded-1766065826590-wxxy622o.jpg", alt: "Coffee lover 2" },
            { src: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34my1kGeblbsCcwUUCcjBY9WFkg/uploaded-1766065827715-g9ejs5cl.jpg", alt: "Coffee lover 3" },
            { src: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34my1kGeblbsCcwUUCcjBY9WFkg/uploaded-1766065828763-7lc6a3pt.jpg", alt: "Coffee lover 4" },
            { src: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34my1kGeblbsCcwUUCcjBY9WFkg/uploaded-1766065829658-39vvkvjq.jpg", alt: "Coffee lover 5" }
          ]}
          avatarText="Join 5000+ coffee enthusiasts"
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34my1kGeblbsCcwUUCcjBY9WFkg/uploaded-1766065821486-4korfg8p.jpg"
          imageAlt="Premium coffee shop atmosphere"
          imagePosition="right"
          buttons={[
            { text: "Explore Our Coffee", href: "products" },
            { text: "Learn More", href: "about" }
          ]}
        />
      </div>

      <div id="products" data-section="products">
        <ProductCardTwo
          title="Featured Coffee Selection"
          description="Our handpicked collection of premium single-origin and blended coffees"
          tag="Best Sellers"
          tagIcon={Star}
          products={[
            {
              id: "1",
              brand: "CoffeesGop",
              name: "Ethiopian Yirgacheffe",
              price: "$18.99",
              rating: 5,
              reviewCount: "2.3k",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34my1kGeblbsCcwUUCcjBY9WFkg/uploaded-1766065830712-xwlfy0ar.jpg",
              imageAlt: "Ethiopian Yirgacheffe coffee"
            },
            {
              id: "2",
              brand: "CoffeesGop",
              name: "Colombian Supremo",
              price: "$16.99",
              rating: 5,
              reviewCount: "1.8k",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34my1kGeblbsCcwUUCcjBY9WFkg/uploaded-1766065831740-4sp6e59f.jpg",
              imageAlt: "Colombian Supremo coffee"
            },
            {
              id: "3",
              brand: "CoffeesGop",
              name: "Brazilian Santos",
              price: "$15.99",
              rating: 4,
              reviewCount: "1.5k",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34my1kGeblbsCcwUUCcjBY9WFkg/uploaded-1766065832914-e8i7ab5u.jpg",
              imageAlt: "Brazilian Santos coffee"
            },
            {
              id: "4",
              brand: "CoffeesGop",
              name: "Kenyan AA",
              price: "$19.99",
              rating: 5,
              reviewCount: "2.1k",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34my1kGeblbsCcwUUCcjBY9WFkg/uploaded-1766065833905-o85g15oy.jpg",
              imageAlt: "Kenyan AA coffee"
            }
          ]}
          gridVariant="uniform-all-items-equal"
          animationType="slide-up"
          containerStyle="default"
          textboxLayout="default"
          useInvertedBackground="noInvert"
          buttons={[
            { text: "View All Products", href: "#" }
          ]}
        />
      </div>

      <div id="about" data-section="about">
        <MediaAbout
          title="Craft Your Perfect Cup"
          description="At CoffeesGop, we believe every coffee bean has a story. We source directly from sustainable farms, roast in small batches, and deliver freshness to your doorstep. Our passion for quality drives everything we do."
          tag="About Us"
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34my1kGeblbsCcwUUCcjBY9WFkg/uploaded-1766065834990-r1xo8hza.jpg"
          imageAlt="Premium coffee beans close-up"
          useInvertedBackground="noInvert"
          buttons={[
            { text: "Our Story", href: "#" },
            { text: "Shop Now", href: "products" }
          ]}
        />
      </div>

      <div id="pricing" data-section="pricing">
        <PricingCardOne
          title="Our Coffee Menu"
          description="Choose from our selection of premium coffee blends and single-origin varieties"
          tag="Premium Selection"
          tagIcon={Coffee}
          plans={[
            {
              id: "espresso",
              badge: "Classic",
              badgeIcon: Sparkles,
              price: "$3.99",
              subtitle: "Bold and concentrated",
              features: [
                "Double shot espresso",
                "Rich crema",
                "Perfect for your morning"
              ]
            },
            {
              id: "cappuccino",
              badge: "Most Popular",
              badgeIcon: Heart,
              price: "$5.49",
              subtitle: "Creamy and balanced",
              features: [
                "Double shot espresso",
                "Steamed milk",
                "Perfect foam layer"
              ]
            },
            {
              id: "latte",
              badge: "Silky Smooth",
              badgeIcon: Sparkles,
              price: "$5.99",
              subtitle: "Smooth and creamy",
              features: [
                "Double shot espresso",
                "Steamed milk",
                "Light foam"
              ]
            },
            {
              id: "americano",
              badge: "Pure",
              badgeIcon: Sparkles,
              price: "$4.49",
              subtitle: "Strong and smooth",
              features: [
                "Double shot espresso",
                "Hot water",
                "Full-bodied flavor"
              ]
            }
          ]}
          animationType="slide-up"
          containerStyle="default"
          textboxLayout="default"
          useInvertedBackground="noInvert"
        />
      </div>

      <div id="metrics" data-section="metrics">
        <MetricCardOne
          title="Our Coffee Impact"
          description="Trusted by thousands of coffee lovers worldwide"
          tag="By The Numbers"
          tagIcon={TrendingUp}
          metrics={[
            {
              id: "1",
              value: "50K+",
              title: "Happy Customers",
              description: "Coffee lovers who trust our brand",
              icon: Users
            },
            {
              id: "2",
              value: "25",
              title: "Countries",
              description: "We source beans from around the world",
              icon: Globe
            },
            {
              id: "3",
              value: "99%",
              title: "Satisfaction",
              description: "Customer satisfaction rate",
              icon: Award
            },
            {
              id: "4",
              value: "15K",
              title: "Bags Shipped",
              description: "Monthly coffee deliveries",
              icon: Box
            }
          ]}
          gridVariant="uniform-all-items-equal"
          animationType="slide-up"
          containerStyle="default"
          textboxLayout="default"
          useInvertedBackground="noInvert"
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardFifteen
          testimonial="CoffeesGop transformed my morning routine. The freshness and quality of each cup is exceptional. I can't imagine starting my day without their coffee anymore. Simply the best."
          rating={5}
          author="Sarah Mitchell, Coffee Enthusiast"
          avatars={[
            { src: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34my1kGeblbsCcwUUCcjBY9WFkg/uploaded-1766065835929-tp75ml8x.jpg", alt: "Sarah" },
            { src: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34my1kGeblbsCcwUUCcjBY9WFkg/uploaded-1766065837029-88wvn0n1.jpg", alt: "Customer 2" },
            { src: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34my1kGeblbsCcwUUCcjBY9WFkg/uploaded-1766065838204-q1nl25xr.jpg", alt: "Customer 3" },
            { src: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34my1kGeblbsCcwUUCcjBY9WFkg/uploaded-1766065839134-hr96eydp.jpg", alt: "Customer 4" },
            { src: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34my1kGeblbsCcwUUCcjBY9WFkg/uploaded-1766065840295-kx01qym3.jpg", alt: "Customer 5" },
            { src: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34my1kGeblbsCcwUUCcjBY9WFkg/uploaded-1766065841177-8bhpqn1g.jpg", alt: "Customer 6" }
          ]}
          useInvertedBackground="noInvert"
        />
      </div>

      <div id="faq" data-section="faq">
        <FaqSplitText
          sideTitle="Frequently Asked Questions"
          sideDescription="Everything you need to know about our coffee and service"
          faqs={[
            {
              id: "1",
              title: "How fresh is your coffee?",
              content: "Our coffee is roasted fresh in small batches and shipped within 48 hours. Each bag includes a roast date to ensure you get the freshest coffee possible."
            },
            {
              id: "2",
              title: "Do you offer subscriptions?",
              content: "Yes! We offer monthly coffee subscriptions with flexible plans. You can customize your selection, adjust frequency, and cancel anytime."
            },
            {
              id: "3",
              title: "What's your return policy?",
              content: "We stand behind our quality. If you're not completely satisfied, we'll replace your order or provide a full refund within 30 days."
            },
            {
              id: "4",
              title: "Where do you source your beans?",
              content: "We source directly from sustainable farms in Ethiopia, Colombia, Brazil, Kenya, and other premium coffee-growing regions around the world."
            },
            {
              id: "5",
              title: "Do you offer sample packs?",
              content: "Absolutely! Our sample pack includes four different single-origin coffees, perfect for discovering your favorite."
            }
          ]}
          textPosition="left"
          useInvertedBackground="noInvert"
          animationType="smooth"
          showCard={true}
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactInline
          text="Ready to upgrade your coffee experience?"
          inputPlaceholder="Enter your email"
          buttonText="Subscribe"
          useInvertedBackground="noInvert"
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterCard
          logoText="CoffeesGop"
          copyrightText="© 2025 CoffeesGop. All rights reserved."
          socialLinks={[
            { icon: Instagram, href: "https://instagram.com", ariaLabel: "Instagram" },
            { icon: Twitter, href: "https://twitter.com", ariaLabel: "Twitter" },
            { icon: Facebook, href: "https://facebook.com", ariaLabel: "Facebook" }
          ]}
        />
      </div>
    </ThemeProvider>
  );
}