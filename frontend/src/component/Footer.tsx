import facebook from '../assets/facebook.png'
import instagram from '../assets/instagram.png'
import twitter from '../assets/twitter.png'
import youtube from '../assets/youtube.png'
import paytm from '../assets/paytm.png'
import amazonpay from '../assets/amazonpay.png'
import upi from '../assets/upi.png'
import bank from '../assets/bank.png'
import logo from '../assets/Group13.png'

export default function Footer() {
  return (
    <footer className="bg-[#0E233C] text-white py-8 px-8">
      <div className="max-w-7xl mx-auto">
        {/* Main Footer Content */}
        <div className="flex justify-between items-start mb-8">
          <div>
            <img src={logo} alt="Cricket Opinio Logo" className="w-24 h-24 rounded-2xl" />
          </div>
          {/* Company Information */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-[#E5B94D]">Company Information</h3>
            <ul className="space-y-2">
              <li><a href="/terms" className="hover:text-gray-300">Terms & Conditions</a></li>
              <li><a href="/privacy" className="hover:text-gray-300">Privacy Policy</a></li>
              <li><a href="/withdrawal" className="hover:text-gray-300">Withdrawal Policy</a></li>
              <li><a href="/fairplay" className="hover:text-gray-300">Fairplay Policy</a></li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-[#E5B94D]">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="/about" className="hover:text-gray-300">About Us</a></li>
              <li><a href="/faqs" className="hover:text-gray-300">FAQs</a></li>
              <li><a href="/blog" className="hover:text-gray-300">Blog</a></li>
              <li><a href="/help" className="hover:text-gray-300">Help Center</a></li>
              <li><a href="/refer" className="hover:text-gray-300">Refer & Earn</a></li>
            </ul>
          </div>

          {/* Social Media & Payment Methods */}
          <div className="space-y-8">
            {/* Social Media */}
            <div>
              <h3 className="text-xl font-semibold mb-4 text-[#E5B94D]">Social Media</h3>
              <div className="flex space-x-4">
                <a href="#" className="hover:opacity-80"><img src={facebook} alt="Facebook" className="w-8 h-8" /></a>
                <a href="#" className="hover:opacity-80"><img src={instagram} alt="Instagram" className="w-8 h-8" /></a>
                <a href="#" className="hover:opacity-80"><img src={twitter} alt="Twitter" className="w-8 h-8" /></a>
                <a href="#" className="hover:opacity-80"><img src={youtube} alt="YouTube" className="w-8 h-8" /></a>
              </div>
            </div>

            {/* Payment Methods */}
            <div>
              <h3 className="text-xl font-semibold mb-4 text-[#E5B94D]">Payment Methods</h3>
              <div className="flex space-x-4">
                <img src={paytm} alt="Paytm" className="h-8" />
                <img src={amazonpay} alt="Amazon Pay" className="h-8" />
                <img src={upi} alt="UPI" className="h-8" />
                <img src={bank} alt="Bank Transfer" className="h-8" />
              </div>
            </div>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="text-center text-sm text-gray-400 mb-4">
          This game may be habit-forming or financially risky. Play Responsibly.
        </div>

        {/* Copyright */}
        <div className="text-center text-sm text-gray-400 ">
          © 2024 Cricket Opinio. All rights reserved
        </div>
      </div>
    </footer>
  )
}