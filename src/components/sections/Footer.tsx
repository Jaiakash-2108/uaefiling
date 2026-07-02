import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="w-full bg-[#180F09] text-[#FFFFFF] pt-[80px] pb-[40px] lg:pt-[100px] lg:pb-[50px] px-6">
      <div className="max-w-[1200px] mx-auto">
        
        {/* Top Section: 4 Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-16 lg:mb-20">
          
          {/* Brand Column */}
          <div className="lg:col-span-5 flex flex-col items-start pr-0 lg:pr-12">
            <Link href="/" className="font-serif font-bold text-2xl tracking-tight mb-6 hover:text-[#CF9A35] transition-colors">
              UAE Filing
            </Link>
            <p className="text-[rgba(255,255,255,0.65)] font-sans text-[0.95rem] leading-relaxed">
              The freelance licence specialist that shows you the full cost upfront, matches you to the right free zone, and stays with you from application to your first payment.
            </p>
          </div>

          {/* Services Column */}
          <div className="lg:col-span-2 flex flex-col gap-4">
            <h4 className="font-sans font-semibold text-[0.85rem] tracking-wider uppercase text-[#FFFFFF] mb-2">Services</h4>
            <ul className="flex flex-col gap-3 font-sans text-[0.95rem] text-[rgba(255,255,255,0.65)]">
              <li><Link href="#services" className="hover:text-[#CF9A35] transition-colors">Freelance Licence</Link></li>
              <li><Link href="#services" className="hover:text-[#CF9A35] transition-colors">Residence Visa</Link></li>
              <li><Link href="#services" className="hover:text-[#CF9A35] transition-colors">Bank Account</Link></li>
              <li><Link href="#services" className="hover:text-[#CF9A35] transition-colors">Emirates ID</Link></li>
              <li><Link href="#services" className="hover:text-[#CF9A35] transition-colors">Annual Renewal</Link></li>
            </ul>
          </div>

          {/* Company Column */}
          <div className="lg:col-span-2 flex flex-col gap-4">
            <h4 className="font-sans font-semibold text-[0.85rem] tracking-wider uppercase text-[#FFFFFF] mb-2">Company</h4>
            <ul className="flex flex-col gap-3 font-sans text-[0.95rem] text-[rgba(255,255,255,0.65)]">
              <li><Link href="#why-us" className="hover:text-[#CF9A35] transition-colors">Why Us</Link></li>
              <li><Link href="#process" className="hover:text-[#CF9A35] transition-colors">How It Works</Link></li>
              <li><Link href="#testimonials" className="hover:text-[#CF9A35] transition-colors">Client Reviews</Link></li>
              <li><Link href="#pricing" className="hover:text-[#CF9A35] transition-colors">Pricing</Link></li>
              <li><Link href="#contact" className="hover:text-[#CF9A35] transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Support Column */}
          <div className="lg:col-span-3 flex flex-col gap-4">
            <h4 className="font-sans font-semibold text-[0.85rem] tracking-wider uppercase text-[#FFFFFF] mb-2">Support</h4>
            <ul className="flex flex-col gap-3 font-sans text-[0.95rem] text-[rgba(255,255,255,0.65)]">
              <li><Link href="#faq" className="hover:text-[#CF9A35] transition-colors">FAQ</Link></li>
              <li><Link href="#contact" className="hover:text-[#CF9A35] transition-colors">Free Consultation</Link></li>
              <li><a href="https://wa.me/971500000000" target="_blank" rel="noopener noreferrer" className="hover:text-[#CF9A35] transition-colors">WhatsApp</a></li>
              <li><Link href="#" className="hover:text-[#CF9A35] transition-colors">Privacy Policy</Link></li>
              <li><Link href="#" className="hover:text-[#CF9A35] transition-colors">Terms of Service</Link></li>
            </ul>
          </div>

        </div>

        {/* Bottom Section: Copyright & Trust */}
        <div className="pt-8 border-t border-[rgba(255,255,255,0.1)] flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-0">
          <p className="font-sans text-[0.85rem] text-[rgba(255,255,255,0.5)] text-center lg:text-left">
            © {new Date().getFullYear()} UAE Filing. Made for freelancers in the UAE.
          </p>
          
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3 font-sans text-[0.85rem] text-[rgba(255,255,255,0.7)]">
            <span className="flex items-center gap-2">
              <span>🔒</span> 100% secure
            </span>
            <span className="hidden sm:block text-[rgba(255,255,255,0.2)]">•</span>
            <span className="flex items-center gap-2">
              <span>⭐</span> 500+ clients
            </span>
            <span className="hidden sm:block text-[rgba(255,255,255,0.2)]">•</span>
            <span className="flex items-center gap-2">
              <span>💬</span> WhatsApp support
            </span>
          </div>
        </div>

      </div>
    </footer>
  );
}
