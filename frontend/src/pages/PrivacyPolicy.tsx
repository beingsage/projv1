import Header from '../component/Header'
import Footer from '../component/Footer'

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main className="max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-center mb-12">Privacy Policy</h1>

       
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Introduction</h2>
          <p className="text-green-600 mb-4">Overview: <span className="text-gray-700">Cricket Opinio is committed to protecting the privacy of its users. This Privacy Policy outlines the types of personal information collected, how it is used, shared, and protected.</span></p>
          <p className="text-green-600">Consent: <span className="text-gray-700">By using our website, you consent to the terms of this Privacy Policy.</span></p>
        </section>

        
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Information Collection</h2>
          <div className="space-y-4">
            <p>
              <span className="text-green-600">Personal Information:</span>
              <span className="text-gray-700"> We collect personal data such as your name, email address, phone number, and payment details when you register, make transactions, or interact with our services.</span>
            </p>
            <p>
              <span className="text-green-600">Non-Personal Information:</span>
              <span className="text-gray-700"> We also collect non-personal data like IP addresses, browser type, and usage patterns through cookies and similar technologies.</span>
            </p>
          </div>
        </section>

      
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Use of Information</h2>
          <div className="space-y-4">
            <p>
              <span className="text-green-600">Service Delivery:</span>
              <span className="text-gray-700"> Personal information is primarily used to provide and improve our services, including processing transactions, personalizing user experience, and sending updates.</span>
            </p>
            <p>
              <span className="text-green-600">Marketing:</span>
              <span className="text-gray-700"> With your consent, we may use your information to send promotional materials, newsletters, and special offers.</span>
            </p>
            <p>
              <span className="text-green-600">Legal Compliance:</span>
              <span className="text-gray-700"> We may also use your data to comply with legal obligations or to protect our rights.</span>
            </p>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Information Sharing</h2>
          <div className="space-y-4">
            <p>
              <span className="text-green-600">Third-Party Services:</span>
              <span className="text-gray-700">  We may share your information with third-party service
providers for payment processing, customer support, and analytics, ensuring they
adhere to strict confidentiality.</span>
            </p>
            <p>
              <span className="text-green-600">Legal Requirements:</span>
              <span className="text-gray-700">  Information may be disclosed to comply with legal processes
              or to respond to lawful requests from public authorities.</span>
            </p>
            
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Data Security</h2>
          <div className="space-y-4">
            <p>
              <span className="text-green-600">Security Measures:</span>
              <span className="text-gray-700">  We employ robust security measures, including encryption and
              access controls, to protect your data from unauthorized access or disclosure.</span>
            </p>
            <p>
              <span className="text-green-600">User Responsibility:</span>
              <span className="text-gray-700">   Users are responsible for keeping their passwords confidential
              and for securing their accounts.</span>
            </p>   
          </div>
        </section>


        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Data Retention</h2>
          <div className="space-y-4">
            <p>
              <span className="text-green-600">Retention Period:</span>
              <span className="text-gray-700">   We retain your data as long as necessary for the purposes
              outlined in this policy or as required by law.</span>
            </p>
            <p>
              <span className="text-green-600">Deletion Requests:</span>
              <span className="text-gray-700">  You can request the deletion of your personal data by
              contacting us, subject to certain legal restrictions.</span>
            </p>   
          </div>
        </section>


        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">User Rights</h2>
          <div className="space-y-4">
            <p>
              <span className="text-green-600">Access and Correction:</span>
              <span className="text-gray-700"> Users have the right to access and correct their personal
              data held by us.</span>
            </p>
            <p>
              <span className="text-green-600">Opt-Out:</span>
              <span className="text-gray-700">   Users can opt-out of receiving marketing communications at any time by
              following the unsubscribe link in our emails.</span>
            </p>   
          </div>
        </section>


        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Cookies and Tracking Technologies</h2>
          <div className="space-y-4">
            <p>
              <span className="text-green-600">Cookies: </span>
              <span className="text-gray-700">We use cookies to improve your experience on our website. You can
              manage your cookie preferences through your browser settings.</span>
            </p>
            <p>
              <span className="text-green-600">Analytics:</span>
              <span className="text-gray-700">   We use third-party analytics tools to understand how our services are
              used and to enhance user experience.</span>
            </p>   
          </div>
        </section>


        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Updates to This Policy</h2>
          <div className="space-y-4">
            <p>
              <span className="text-green-600">Changes:</span>
              <span className="text-gray-700"> We may update this Privacy Policy from time to time. Changes will be
              posted on this page, and the "Last Updated" date will be revised accordingly.</span>
            </p>
            <p>
              <span className="text-green-600">Notification:</span>
              <span className="text-gray-700">   Significant changes will be communicated to users via email or a
              prominent notice on our website.</span>
            </p>   
          </div>
        </section>



        
        
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
          <p>
            <span className="text-green-600">Inquiries:</span>
            <span className="text-gray-700"> For any questions or concerns regarding this Privacy Policy, please contact us at </span>
            <a href="mailto:support@cricketopinio.com" className="text-[#8B0000] hover:underline">support@cricketopinio.com</a>
          </p>
        </section>
      </main>

      <Footer />
    </div>
  )
}