import Header from '../component/Header'
import Footer from '../component/Footer'

export default function FairPlayPolicy() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main className="max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-center mb-12">Fair Play Policy</h1>

     
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Introduction</h2>
          <p className="text-gray-700 leading-relaxed">
            At Cricket Opinio, we are committed to ensuring a fair, transparent, and enjoyable
            experience for all participants. Our Fair Play Policy is designed to uphold the
            integrity of our platform by promoting a level playing field, discouraging fraudulent
            behavior, and protecting the interests of our users.
          </p>
        </section>

        
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-6">Fair Play Guidelines</h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-green-600 mb-2">Skill-Based Competitions:</h3>
              <p className="text-gray-700 leading-relaxed">
                Cricket Opinio operates as a skill-based platform where success is determined by knowledge,
                strategy, and experience. We discourage any attempts to manipulate or game the system.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-green-600 mb-2">Single Account Per User:</h3>
              <p className="text-gray-700 leading-relaxed">
                Users are allowed to create only one account. Multiple accounts for the same individual
                are strictly prohibited and will lead to disqualification and account suspension.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-green-600 mb-2">Anti-Collusion:</h3>
              <p className="text-gray-700 leading-relaxed">
                Collusion between users to manipulate the outcomes of contests is strictly forbidden.
                Any detected collusion will result in the immediate disqualification of involved users.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-green-600 mb-2">No Automated Tools:</h3>
              <p className="text-gray-700 leading-relaxed">
                The use of bots, scripts, or any other automated tools to participate in contests
                is prohibited. All entries must be made manually by the user.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-green-600 mb-2">Accurate Information:</h3>
              <p className="text-gray-700 leading-relaxed">
                Users are required to provide accurate personal and payment information.
                Misrepresentation or falsification of details will result in account suspension.
              </p>
            </div>
          </div>
        </section>

     
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-6">User Conduct</h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-green-600 mb-2">Respectful Interaction:</h3>
              <p className="text-gray-700 leading-relaxed">
                Users must interact respectfully with each other. Abusive language,
                harassment, or any form of misconduct will not be tolerated.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-green-600 mb-2">Compliance with Rules:</h3>
              <p className="text-gray-700 leading-relaxed">
                All users must adhere to the rules and regulations outlined for each contest.
                Failure to comply may lead to penalties, including forfeiture of winnings.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-green-600 mb-2">Fraud Prevention:</h3>
              <p className="text-gray-700 leading-relaxed">
                Cricket Opinio employs advanced monitoring systems to detect and prevent
                fraudulent activities. Any suspicious activity will be investigated,
                and appropriate action will be taken.
              </p>
            </div>
          </div>
        </section>

        
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-6">Reporting Violations</h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-green-600 mb-2">User Reporting:</h3>
              <p className="text-gray-700 leading-relaxed">
                We encourage users to report any suspicious or unfair activities.
                Reports can be made via our support channels, and all reports will be thoroughly investigated.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-green-600 mb-2">Action on Violations:</h3>
              <p className="text-gray-700 leading-relaxed">
                Depending on the severity of the violation, actions may include warnings,
                suspension, or permanent banning of accounts. All decisions made by Cricket
                Opinio in this regard are final.
              </p>
            </div>
          </div>
        </section>

   
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-6">Transparency</h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-green-600 mb-2">Contest Integrity:</h3>
              <p className="text-gray-700 leading-relaxed">
                Cricket Opinio ensures that all contest results are determined fairly and
                transparently. We provide clear and accurate information regarding the rules,
                scoring systems, and results of each contest.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-green-600 mb-2">Payouts:</h3>
              <p className="text-gray-700 leading-relaxed">
                All winnings are calculated accurately and paid out promptly. Users have
                the right to raise concerns about any discrepancies within a specified period.
              </p>
            </div>
          </div>
        </section>

        
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Updates to the Fair Play Policy</h2>
          <p className="text-gray-700 leading-relaxed">
            Cricket Opinio reserves the right to update or modify this Fair Play Policy at any
            time. Users will be notified of significant changes, and continued use of the
            platform implies acceptance of the updated policy.
          </p>
        </section>
      </main>

      <Footer />
    </div>
  )
}