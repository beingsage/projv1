// import facebook from '../assets/facebook.png'
// import instagram from '../assets/instagram.png'
// import twitter from '../assets/twitter.png'
// import youtube from '../assets/youtube.png'
// import paytm from '../assets/paytm.png'
// import amazonpay from '../assets/amazonpay.png'
// import upi from '../assets/upi.png'
// import bank from '../assets/bank.png'
// import logo from '../assets/Group13.png'
import logo2 from '../assets/logo22.png'
import { FloatingDock } from '../components/ui/floating-dock'
import { 
  IconBrandFacebook, 
  IconBrandInstagram, 
  IconBrandTwitter, 
  IconBrandYoutube 
} from '@tabler/icons-react'


export default function Footer() {
  const socialMediaItems = [
    {
      title: "Facebook",
      icon: <IconBrandFacebook className="h-full w-full text-white hover:text-blue-600" />,
      href: "#facebook"
    },
    {
      title: "Instagram",
      icon: <IconBrandInstagram className="h-full w-full text-white hover:text-pink-600" />,
      href: "#instagram"
    },
    {
      title: "Twitter",
      icon: <IconBrandTwitter className="h-full w-full text-white hover:text-blue-400" />,
      href: "#twitter"
    },
    {
      title: "YouTube",
      icon: <IconBrandYoutube className="h-full w-full text-white hover:text-red-600" />,
      href: "#youtube"
    }
  ];

  return (
    <footer className="bg-[#2D2D2D] text-white py-8 px-8">
      <div className="max-w-7xl mx-auto">
        {/* Main Footer Content */}
        <div className="flex justify-between items-start mb-8">
          <div>
            <img src={logo2} alt="Cricket Opinio Logo" className="w-24 h-24 rounded-2xl" />
          </div>
          {/* Company Information */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-[#E5B94D]">Company Information</h3>
            <ul className="space-y-2">
              <li><a href="/terms-conditions" className="hover:text-gray-300">Terms & Conditions</a></li>
              <li><a href="/privacy-policy" className="hover:text-gray-300">Privacy Policy</a></li>
              <li><a href="/fair-play-policy" className="hover:text-gray-300">Fairplay Policy</a></li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-[#E5B94D]">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="/install" className="hover:text-gray-300">Install App</a></li>
            </ul>
          </div>

          {/* Social Media & Payment Methods */}
          <div className="space-y-8">
            {/* Social Media with Floating Dock */}
            <div>
              <h3 className="text-xl font-semibold mb-4 text-[#E5B94D]">Social Media</h3>
              <FloatingDock 
                items={socialMediaItems}
                desktopClassName="bg-transparent dark:bg-transparent"
                mobileClassName="relative"
              />
            </div>

            {/* Payment Methods */}
            {/* <div>
              <h3 className="text-xl font-semibold mb-4 text-[#E5B94D]">Payment Methods</h3>
              <div className="flex space-x-4">
                <img src={paytm} alt="Paytm" className="h-8" />
                <img src={amazonpay} alt="Amazon Pay" className="h-8" />
                <img src={upi} alt="UPI" className="h-8" />
                <img src={bank} alt="Bank Transfer" className="h-8" />
              </div>
            </div> */}
          </div>
        </div>

        {/* Disclaimer */}
        <div className="text-center text-sm text-gray-400 mb-4">
          This game may be habit-forming or financially risky. Play Responsibly.
        </div>

        {/* Copyright */}
        <div className="text-center text-sm text-gray-400">
          © 2024 Cricket Opinio. All rights reserved
        </div>
      </div>
    </footer>
  )
}