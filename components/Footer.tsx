import FoxLogo from "./FoxLogo";

const footerLinks = {
  Company: ["About Us", "How It Works", "Why Solar Fox", "Careers"],
  Services: ["Residential Cleaning", "Commercial Panels", "Post-Install Clean", "Recurring Plans"],
  "Service Areas": ["Phoenix, AZ", "Tucson, AZ", "San Diego, CA", "Las Vegas, NV"],
  Support: ["FAQ", "Contact Us", "Satisfaction Guarantee", "Privacy Policy"],
};

export default function Footer() {
  return (
    <footer className="bg-[#060d18] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-6 gap-10 mb-12">
          {/* Brand column */}
          <div className="lg:col-span-2">
            <a href="#" className="flex items-center gap-3 mb-4">
              <FoxLogo size={36} variant="dark" />
              <div className="flex flex-col leading-tight">
                <span className="font-bold text-white text-base tracking-tight">Solar Fox</span>
                <span className="text-orange-400 text-xs font-semibold tracking-widest uppercase">Services</span>
              </div>
            </a>
            <p className="text-white/40 text-sm leading-relaxed max-w-xs mb-6">
              Smart route-based solar panel cleaning. Efficient for us, affordable for you.
            </p>
            {/* Social links */}
            <div className="flex gap-3">
              {["facebook", "instagram", "twitter", "linkedin"].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="w-9 h-9 rounded-full bg-white/5 border border-white/10 hover:border-orange-500/40 hover:bg-orange-500/10 flex items-center justify-center text-white/40 hover:text-orange-400 transition-all text-xs font-bold"
                  aria-label={social}
                >
                  {social[0].toUpperCase()}
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([group, links]) => (
            <div key={group}>
              <h4 className="text-white font-semibold text-sm mb-4 tracking-wide">{group}</h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-white/40 hover:text-white text-sm transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/25 text-sm">
            © {new Date().getFullYear()} Solar Fox Services. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-white/25 hover:text-white/50 text-sm transition-colors">Privacy Policy</a>
            <a href="#" className="text-white/25 hover:text-white/50 text-sm transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
