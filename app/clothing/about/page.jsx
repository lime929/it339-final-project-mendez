import Link from 'next/link';
import { FaShippingFast, FaHeadset } from 'react-icons/fa'; 
import AboutHero from "../../components/AboutHero";
import MissionImage from '@/assets/images/mission.jpg';
import ShippingImage from '@/assets/images/shipping.jpg';
import Image from 'next/image';

export const metadata = {
  title: "About | White Rabbit Co.",
  description: "Learn about White Rabbit Co. - our mission, shipping policy, and FAQ for gothic alternative fashion lovers.",
};

export default function AboutPage() {
  return (
     <main className="min-h-screen bg-zinc-950 text-zinc-100 pb-20 px-4 md:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Hero */}
       <AboutHero />

        {/* Mission */}
        <section className="mb-24">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 border-b border-zinc-800 pb-6">
            Our Mission
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg text-zinc-300 leading-relaxed mb-6">
                White Rabbit Co. celebrates gothic, alternative, and witchy fashion. Our main goal as a business is to provide alternative people with clothes that allow them to fully express themselves. It can be hard for us to find pieces of clothing that feels like it represents our true style, this is where we come in. We aim to empower alternative souls with unique pieces that blend dark elegance and modern edge. 
              </p>
              <ul className="space-y-3 text-zinc-400 list-disc pl-5">
                <li>Vegan & cruelty-free materials</li>
                <li>Inclusive sizing (XS-4XL)</li>
                <li>Supporting underground artists & scenes</li>
                <li>LGBTQ+ owned & operated</li>
              </ul>
            </div>
            <div className="relative h-64 md:h-80 bg-gradient-to-br from-zinc-900/50 to-black rounded-2xl ring-1 ring-zinc-800 p-8 flex items-center justify-center">
                 <Image
                        src={MissionImage}
                        alt="Crystals and Pin with eye in middle"
                        fill
                        sizes="100vw"
                        className="object-cover"
                        priority
                      />
            </div>
          </div>
        </section>

        {/* Shipping Policy */}
        <section className="mb-24">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 border-b border-zinc-800 pb-6 flex items-center gap-3">
            <FaShippingFast className="text-[#ff5483]" />
            Shipping Policy
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">Domestic (US)</h3>
              <ul className="space-y-2 text-zinc-400 mb-8 list-disc pl-5">
                <li>USPS First Class: 3-5 days ($5+, free over $100)</li>
                <li>Priority Mail: 1-3 days ($10+)</li>
                <li>Processing: 1-3 business days</li>
              </ul>
              <h3 className="text-2xl font-bold mb-4">International</h3>
              <p className="text-zinc-400 mb-4">Worldwide via USPS/DHL. Duties/taxes responsibility of recipient.</p>
              <ul className="space-y-2 text-zinc-400 list-disc pl-5">
                <li>7-21 days (EU/Canada faster)</li>
                <li>Tracking included</li>
              </ul>
            </div>
          <div className="relative overflow-hidden rounded-3xl ring-1 ring-zinc-800 shadow-2xl">
            <Image
              src={ShippingImage}
              alt="Dark gothic shipping background"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />

          <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/90" />

  <div className="relative p-12 md:p-16">
    <h4 className="text-2xl md:text-2xl font-bold mb-6 text-white drop-shadow-lg">
      Shipping Tracking
    </h4>
    <Link
      href="#"
      className="inline-flex items-center gap-2 bg-zinc-900/90 hover:bg-white/10 backdrop-blur-sm px-8 py-4 rounded-2xl font-bold text-base md:text-lg border border-white/20 hover:border-white/40 hover:shadow-2xl transition-all duration-300 text-white"
    >
      Track Order 
      <FaShippingFast className="w-6 h-6 md:w-7 md:h-7 text-[#ff5483]" />
    </Link>
        </div>
      </div>
      </div>
        </section>

        {/* FAQ */}
        <section>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 border-b border-zinc-800 pb-6 flex items-center gap-3">
            <FaHeadset className="text-[#ff5483]" />
            FAQ
          </h2>
          <div className="space-y-6 max-w-3xl mx-auto">
            <details className="group">
              <summary className="cursor-pointer font-semibold text-zinc-200 hover:text-white py-4 px-6 bg-zinc-900/50 rounded-xl ring-1 ring-zinc-800 hover:ring-zinc-700 transition-all group-open:bg-zinc-800">
                How long until my order ships?
              </summary>
              <div className="p-5 pt-4 text-zinc-400 leading-relaxed bg-zinc-900/30 rounded-b-xl">
                We take 1-3 business days for processing to occur, please be patient. Additionally, holidays will usually add 2-3 days onto expected arrival times. US: 3-7 days total. International: 7-21 days. 
              </div>
            </details>
            <details className="group">
              <summary className="cursor-pointer font-semibold text-zinc-200 hover:text-white py-4 px-6 bg-zinc-900/50 rounded-xl ring-1 ring-zinc-800 hover:ring-zinc-700 transition-all group-open:bg-zinc-800">
                What payments do you accept?
              </summary>
              <div className="p-5 pt-4 text-zinc-400 leading-relaxed bg-zinc-900/30 rounded-b-xl">
                We accept all major cards including, PayPal, Apple Pay, Afterpay, Klarna. We always use Secure checkout via Stripe/Shopify.
              </div>
            </details>
            <details className="group">
              <summary className="cursor-pointer font-semibold text-zinc-200 hover:text-white py-4 px-6 bg-zinc-900/50 rounded-xl ring-1 ring-zinc-800 hover:ring-zinc-700 transition-all group-open:bg-zinc-800">
                Returns & Exchanges?
              </summary>
              <div className="p-5 pt-4 text-zinc-400 leading-relaxed bg-zinc-900/30 rounded-b-xl">
                Returns are accepted if they are sent within 14 days for unwashed/unworn items. We also provide a free US returns label for orders over $100. Email us for more info at contact@whiterabbitco.com.
              </div>
            </details>
            <details className="group">
              <summary className="cursor-pointer font-semibold text-zinc-200 hover:text-white py-4 px-6 bg-zinc-900/50 rounded-xl ring-1 ring-zinc-800 hover:ring-zinc-700 transition-all group-open:bg-zinc-800">
                Damaged or missing items?
              </summary>
              <div className="p-5 pt-4 text-zinc-400 leading-relaxed bg-zinc-900/30 rounded-b-xl">
                Please report any damaged or missing items within 7 days with photos. Based on the situation we will provide a full replacement or refund and free return shipping.
              </div>
            </details>
          </div>
        </section>

        {/* Contact */}
        <section className="mt-24 pt-20 border-t border-zinc-800 text-center">
          <h3 className="text-2xl font-bold mb-6 text-zinc-200 underline">Questions?</h3>
          <p className="mb-8 max-w-md mx-auto text-zinc-300">
            Email us at <span className="text-[#ff5483]">contact@whiterabbitco.com</span> or DM us <span className="text-[#ff5483]">@whiterabbitco</span>
          </p>
        </section>
      </div>
    </main>
  );
}

