import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/layout/Header'; // Custom component
import Footer from '../../components/layout/Footer'; // Custom component
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'; // shadcn/ui
import { ScrollArea } from '@/components/ui/scroll-area'; // shadcn/ui

const PrivacyPolicyPage: React.FC = () => {
  console.log('PrivacyPolicyPage loaded');

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-grow container mx-auto py-8 px-4 md:px-6">
        <Card className="w-full max-w-3xl mx-auto shadow-lg">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-center">Privacy Policy</CardTitle>
          </CardHeader>
          <CardContent>
            <ScrollArea className="h-[calc(100vh-300px)] md:h-[calc(100vh-350px)] pr-4"> {/* Adjust height as needed */}
              <div className="space-y-6 text-muted-foreground">
                <section>
                  <h2 className="text-xl font-semibold text-foreground mb-2">1. Introduction</h2>
                  <p>
                    Welcome to MyApp! We are committed to protecting your personal information and your right to privacy.
                    If you have any questions or concerns about this privacy notice, or our practices with regards to your
                    personal information, please contact us at privacy@myapp.com.
                  </p>
                  <p className="mt-2">
                    This privacy notice describes how we might use your information if you:
                  </p>
                  <ul className="list-disc list-inside ml-4 mt-1">
                    <li>Visit our website at myapp.com</li>
                    <li>Engage with us in other related ways, including any sales, marketing, or events</li>
                  </ul>
                  <p className="mt-2">
                    In this privacy notice, if we refer to:
                  </p>
                  <ul className="list-disc list-inside ml-4 mt-1">
                    <li><strong>"Website,"</strong> we are referring to any website of ours that references or links to this policy</li>
                    <li><strong>"Services,"</strong> we are referring to our Website, and other related services, including any sales, marketing, or events</li>
                  </ul>
                  <p className="mt-2">
                    The purpose of this privacy notice is to explain to you in the clearest way possible what information we
                    collect, how we use it, and what rights you have in relation to it. If there are any terms in this
                    privacy notice that you do not agree with, please discontinue use of our Services immediately.
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-semibold text-foreground mb-2">2. Information We Collect</h2>
                  <p>
                    We collect personal information that you voluntarily provide to us when you register on the Services,
                    express an interest in obtaining information about us or our products and Services, when you participate
                    in activities on the Services or otherwise when you contact us.
                  </p>
                  <p className="mt-2">
                    The personal information that we collect depends on the context of your interactions with us and the
                    Services, the choices you make and the products and features you use. The personal information we collect
                    may include the following:
                  </p>
                  <ul className="list-disc list-inside ml-4 mt-1">
                    <li><strong>Personal Information Provided by You.</strong> We collect names; email addresses; passwords; contact preferences; and other similar information.</li>
                    <li><strong>Payment Data.</strong> We may collect data necessary to process your payment if you make purchases, such as your payment instrument number (such as a credit card number), and the security code associated with your payment instrument. All payment data is stored by our payment processor and you should review its privacy policies and contact the payment processor directly to respond to your questions.</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-xl font-semibold text-foreground mb-2">3. How We Use Your Information</h2>
                  <p>
                    We use personal information collected via our Services for a variety of business purposes described below.
                    We process your personal information for these purposes in reliance on our legitimate business interests,
                    in order to enter into or perform a contract with you, with your consent, and/or for compliance with our
                    legal obligations.
                  </p>
                   <ul className="list-disc list-inside ml-4 mt-1">
                    <li>To facilitate account creation and logon process.</li>
                    <li>To post testimonials.</li>
                    <li>Request feedback.</li>
                    <li>To enable user-to-user communications.</li>
                    <li>To manage user accounts.</li>
                    <li>To send administrative information to you.</li>
                    <li>To protect our Services.</li>
                    <li>To enforce our terms, conditions and policies for business purposes, to comply with legal and regulatory requirements or in connection with our contract.</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-xl font-semibold text-foreground mb-2">4. Sharing Your Information</h2>
                  <p>
                    We may process or share your data that we hold based on the following legal basis:
                  </p>
                  <ul className="list-disc list-inside ml-4 mt-1">
                    <li><strong>Consent:</strong> We may process your data if you have given us specific consent to use your personal information for a specific purpose.</li>
                    <li><strong>Legitimate Interests:</strong> We may process your data when it is reasonably necessary to achieve our legitimate business interests.</li>
                    <li><strong>Performance of a Contract:</strong> Where we have entered into a contract with you, we may process your personal information to fulfill the terms of our contract.</li>
                    <li><strong>Legal Obligations:</strong> We may disclose your information where we are legally required to do so in order to comply with applicable law, governmental requests, a judicial proceeding, court order, or legal process.</li>
                  </ul>
                </section>
                
                <section>
                  <h2 className="text-xl font-semibold text-foreground mb-2">5. Your Privacy Rights</h2>
                  <p>
                    In some regions (like the European Economic Area and UK), you have certain rights under applicable data protection laws. These may include the right (i) to request access and obtain a copy of your personal information, (ii) to request rectification or erasure; (iii) to restrict the processing of your personal information; and (iv) if applicable, to data portability. In certain circumstances, you may also have the right to object to the processing of your personal information.
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-semibold text-foreground mb-2">6. Updates to This Notice</h2>
                  <p>
                    We may update this privacy notice from time to time. The updated version will be indicated by an updated
                    "Revised" date and the updated version will be effective as soon as it is accessible. We encourage you to
                    review this privacy notice frequently to be informed of how we are protecting your information.
                  </p>
                  <p className="mt-2">Last revised: {new Date().toLocaleDateString()}</p>
                </section>

                <section>
                  <h2 className="text-xl font-semibold text-foreground mb-2">7. Contact Us</h2>
                  <p>
                    If you have questions or comments about this notice, you may email us at privacy@myapp.com or by post to:
                  </p>
                  <p className="mt-2">
                    MyApp Inc.<br />
                    123 Privacy Lane<br />
                    Your City, State, ZIP Code<br />
                    United States
                  </p>
                </section>
                 <p className="text-center mt-8">
                    Go back to <Link to="/" className="text-primary hover:underline">Sign Up</Link> or <Link to="/login" className="text-primary hover:underline">Login</Link>.
                </p>
              </div>
            </ScrollArea>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
};

export default PrivacyPolicyPage;