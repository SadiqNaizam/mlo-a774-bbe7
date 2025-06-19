import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Link } from 'react-router-dom';

const TermsAndConditionsPage = () => {
  console.log('TermsAndConditionsPage loaded');

  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <Header />
      <main className="flex-grow container mx-auto py-8 px-4 md:px-6 flex justify-center">
        <Card className="w-full max-w-4xl shadow-lg">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-center">Terms and Conditions</CardTitle>
          </CardHeader>
          <CardContent>
            <ScrollArea className="h-[calc(100vh-280px)] p-1 pr-4"> {/* Adjusted height for better fit */}
              <div className="space-y-6 text-muted-foreground">
                <p className="text-sm">Last updated: {new Date().toLocaleDateString()}</p>

                <section>
                  <h2 className="text-xl font-semibold mb-2 text-foreground">1. Introduction</h2>
                  <p>
                    Welcome to MyApp ("Company", "we", "our", "us")! These Terms and Conditions ("Terms") govern your use of our website located at [Your Website URL] (together or individually "Service") operated by MyApp.
                  </p>
                  <p>
                    Our Privacy Policy also governs your use of our Service and explains how we collect, safeguard and disclose information that results from your use of our web pages. Please read it here: <Link to="/privacy-policy" className="text-primary hover:underline">Privacy Policy</Link>.
                  </p>
                  <p>
                    Your agreement with us includes these Terms and our Privacy Policy (“Agreements”). You acknowledge that you have read and understood Agreements, and agree to be bound of them.
                  </p>
                  <p>
                    If you do not agree with (or cannot comply with) Agreements, then you may not use the Service, but please let us know by emailing at [Your Contact Email] so we can try to find a solution. These Terms apply to all visitors, users and others who wish to access or use Service.
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-semibold mb-2 text-foreground">2. Communications</h2>
                  <p>
                    By using our Service, you agree to subscribe to newsletters, marketing or promotional materials and other information we may send. However, you may opt out of receiving any, or all, of these communications from us by following the unsubscribe link or by emailing at [Your Contact Email].
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-semibold mb-2 text-foreground">3. Accounts</h2>
                  <p>
                    When you create an account with us, you guarantee that you are above the age of 18, and that the information you provide us is accurate, complete, and current at all times. Inaccurate, incomplete, or obsolete information may result in the immediate termination of your account on Service.
                  </p>
                  <p>
                    You are responsible for maintaining the confidentiality of your account and password, including but not limited to the restriction of access to your computer and/or account. You agree to accept responsibility for any and all activities or actions that occur under your account and/or password, whether your password is with our Service or a third-party service. You must notify us immediately upon becoming aware of any breach of security or unauthorized use of your account.
                  </p>
                </section>
                
                <section>
                  <h2 className="text-xl font-semibold mb-2 text-foreground">4. Intellectual Property</h2>
                  <p>
                    Service and its original content (excluding Content provided by users), features and functionality are and will remain the exclusive property of MyApp and its licensors. Service is protected by copyright, trademark, and other laws of both the [Your Country] and foreign countries. Our trademarks may not be used in connection with any product or service without the prior written consent of MyApp.
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-semibold mb-2 text-foreground">5. Termination</h2>
                  <p>
                    We may terminate or suspend your account and bar access to Service immediately, without prior notice or liability, under our sole discretion, for any reason whatsoever and without limitation, including but not limited to a breach of Terms.
                  </p>
                  <p>
                    If you wish to terminate your account, you may simply discontinue using Service. All provisions of Terms which by their nature should survive termination shall survive termination, including, without limitation, ownership provisions, warranty disclaimers, indemnity and limitations of liability.
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-semibold mb-2 text-foreground">6. Governing Law</h2>
                  <p>
                    These Terms shall be governed and construed in accordance with the laws of [Your Jurisdiction], without regard to its conflict of law provisions.
                  </p>
                  <p>
                    Our failure to enforce any right or provision of these Terms will not be considered a waiver of those rights. If any provision of these Terms is held to be invalid or unenforceable by a court, the remaining provisions of these Terms will remain in effect. These Terms constitute the entire agreement between us regarding our Service and supersede and replace any prior agreements we might have had between us regarding Service.
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-semibold mb-2 text-foreground">7. Changes To Service</h2>
                  <p>
                    We reserve the right to withdraw or amend our Service, and any service or material we provide via Service, in our sole discretion without notice. We will not be liable if for any reason all or any part of Service is unavailable at any time or for any period. From time to time, we may restrict access to some parts of Service, or the entire Service, to users, including registered users.
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-semibold mb-2 text-foreground">8. Amendments To Terms</h2>
                  <p>
                    We may amend Terms at any time by posting the amended terms on this site. It is your responsibility to review these Terms periodically. Your continued use of the Platform following the posting of revised Terms means that you accept and agree to the changes. You are expected to check this page frequently so you are aware of any changes, as they are binding on you.
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-semibold mb-2 text-foreground">9. Disclaimer Of Warranty</h2>
                  <p>
                    THESE SERVICES ARE PROVIDED BY COMPANY ON AN "AS IS" AND "AS AVAILABLE" BASIS. COMPANY MAKES NO REPRESENTATIONS OR WARRANTIES OF ANY KIND, EXPRESS OR IMPLIED, AS TO THE OPERATION OF THEIR SERVICES, OR THE INFORMATION, CONTENT OR MATERIALS INCLUDED THEREIN. YOU EXPRESSLY AGREE THAT YOUR USE OF THESE SERVICES, THEIR CONTENT, AND ANY SERVICES OR ITEMS OBTAINED FROM US IS AT YOUR SOLE RISK.
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-semibold mb-2 text-foreground">10. Limitation Of Liability</h2>
                  <p>
                    EXCEPT AS PROHIBITED BY LAW, YOU WILL HOLD US AND OUR OFFICERS, DIRECTORS, EMPLOYEES, AND AGENTS HARMLESS FOR ANY INDIRECT, PUNITIVE, SPECIAL, INCIDENTAL, OR CONSEQUENTIAL DAMAGE, HOWEVER IT ARISES (INCLUDING ATTORNEYS' FEES AND ALL RELATED COSTS AND EXPENSES OF LITIGATION AND ARBITRATION, OR AT TRIAL OR ON APPEAL, IF ANY, WHETHER OR NOT LITIGATION OR ARBITRATION IS INSTITUTED), WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE, OR OTHER TORTIOUS ACTION, OR ARISING OUT OF OR IN CONNECTION WITH THIS AGREEMENT, INCLUDING WITHOUT LIMITATION ANY CLAIM FOR PERSONAL INJURY OR PROPERTY DAMAGE, ARISING FROM THIS AGREEMENT AND ANY VIOLATION BY YOU OF ANY FEDERAL, STATE, OR LOCAL LAWS, STATUTES, RULES, OR REGULATIONS, EVEN IF COMPANY HAS BEEN PREVIOUSLY ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
                  </p>
                </section>
                
                <section>
                  <h2 className="text-xl font-semibold mb-2 text-foreground">11. Contact Us</h2>
                  <p>
                    Please send your feedback, comments, requests for technical support by email: [Your Contact Email].
                  </p>
                </section>
              </div>
            </ScrollArea>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
};

export default TermsAndConditionsPage;