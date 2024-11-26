import Header from '../component/Header'
import Footer from '../component/Footer'

export default function TermsConditions() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main className="max-w-4xl mx-auto px-4 py-8 sm:px-6 sm:py-12">
        <h1 className="text-3xl sm:text-4xl font-bold text-center mb-8 sm:mb-12">Terms & Conditions</h1>

        
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Introduction</h2>
          <p className="text-gray-700 leading-relaxed">
            Welcome to Cricket Opinio. These Terms and Conditions govern your use of our
            website and services. By accessing or using our website, you agree to comply with
            and be bound by these terms. If you do not agree with these terms, please do not
            use our website.
          </p>
        </section>

        
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-6">Use of the Website</h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-green-600 mb-2">Eligibility:</h3>
              <p className="text-gray-700 leading-relaxed">
                You must be at least 18 years old to use our website.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-green-600 mb-2">User Accounts:</h3>
              <p className="text-gray-700 leading-relaxed">
                You are responsible for maintaining the confidentiality of your account
                information and for all activities that occur under your account.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-green-600 mb-2">Prohibited Activities:</h3>
              <p className="text-gray-700 leading-relaxed">
                You agree not to engage in any illegal, fraudulent, or harmful activities,
                including but not limited to spamming, hacking, or manipulating data.
              </p>
            </div>
          </div>
        </section>

     
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-6">Predictions and Content</h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-green-600 mb-2">Accuracy of Predictions:</h3>
              <p className="text-gray-700 leading-relaxed">
                While we strive to provide accurate predictions and analysis, we make no
                guarantees about their accuracy or reliability. Use the information at your own risk.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-green-600 mb-2">Content Ownership:</h3>
              <p className="text-gray-700 leading-relaxed">
                All content on our website, including text, graphics, and predictions,
                is owned by Cricket Opinio and protected by intellectual property laws.
                You may not reproduce, distribute, or create derivative works without our express permission.
              </p>
            </div>
          </div>
        </section>

        
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-6">User Responsibilities</h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-green-600 mb-2">Account Security:</h3>
              <p className="text-gray-700 leading-relaxed">
                You are responsible for keeping your login details secure and notifying us
                of any unauthorized use of your account.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-green-600 mb-2">Content Submission:</h3>
              <p className="text-gray-700 leading-relaxed">
                If you submit content (e.g., comments, predictions) to our website, you grant
                us a non-exclusive, royalty-free license to use, modify, and display such content.
              </p>
            </div>
          </div>
        </section>

      
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-6">Limitation of Liability</h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-green-600 mb-2">Disclaimer of Warranties:</h3>
              <p className="text-gray-700 leading-relaxed">
                Our website and services are provided "as is" without any warranties of any kind,
                either express or implied.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-green-600 mb-2">Limitation of Liability:</h3>
              <p className="text-gray-700 leading-relaxed">
                In no event shall Cricket Opinio be liable for any indirect, incidental,
                special, or consequential damages arising out of or in connection with your
                use of our website.
              </p>
            </div>
          </div>
        </section>

       
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Changes to Terms</h2>
          <p className="text-gray-700 leading-relaxed">
            We reserve the right to update or modify these Terms and Conditions at any time.
            Changes will be effective immediately upon posting on our website. Your continued
            use of the website following any changes signifies your acceptance of the revised terms.
          </p>
        </section>

        
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Governing Law</h2>
          <p className="text-gray-700 leading-relaxed">
            These Terms and Conditions are governed by and construed in accordance with the
            laws of [Your Country]. Any disputes arising out of or related to these terms shall be
            subject to the exclusive jurisdiction of the courts in [Your Jurisdiction].
          </p>
        </section>

     
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
          <p className="text-gray-700 leading-relaxed">
            If you have any questions or concerns about these Terms and Conditions, please
            contact us at [Your Contact Information].
          </p>
        </section>
      </main>

      <Footer />
    </div>
  )
}