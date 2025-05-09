import Footer from "@/components/Landing/Footer"
import NavBar from "@/components/Landing/NavBar"

export default function PrivacyPolicy() {
    return (
      <div className="min-h-screen text-gray-200 pt-[20vh]">
        <NavBar />
        <div className="container mx-auto px-4 py-8 max-w-3xl">
          <div className="mx-auto">
            <h1 className="text-3xl font-bold text-center mb-2 text-white">Privacy Policy</h1>
            <p className="text-center mb-8 text-gray-400">Last updated January 01, 2025</p>
  
            <div className="mb-8">
              <p>
                This Privacy Notice for FriendsCodes ("we," "us," or "our"), describes how and why we might access,
                collect, store, use, and/or share ("process") your personal information when you use our services
                ("Services"), including when you:
              </p>
              <ul className="list-disc pl-6 mt-2 text-gray-300">
                <li>
                  Visit our website at{" "}
                  <a href="https://friendscodes.app" className="text-blue-400 hover:text-blue-300 hover:underline">
                    https://friendscodes.app
                  </a>
                  , or any website of ours that links to this Privacy Notice
                </li>
                <li>
                  Use FriendsCodes. A referral-sharing platform that allows users to seamlessly manage, organize, and
                  share their own referrals while redeeming offers from others.
                </li>
                <li>Engage with us in other related ways, including any sales, marketing, or events</li>
              </ul>
              <p className="mt-4">
                Questions or concerns? Reading this Privacy Notice will help you understand your privacy rights and
                choices. We are responsible for making decisions about how your personal information is processed. If you
                do not agree with our policies and practices, please do not use our Services. If you still have any
                questions or concerns, please contact us at{" "}
                <a href="mailto:hello@friendscodes.app" className="text-blue-400 hover:text-blue-300 hover:underline">
                  hello@friendscodes.app
                </a>
                .
              </p>
            </div>
  
            <div className="mb-8">
              <h2 className="text-2xl font-bold mb-4 text-white">SUMMARY OF KEY POINTS</h2>
              <p>
                This summary provides key points from our Privacy Notice, but you can find out more details about any of
                these topics by clicking the link following each key point or by using our table of contents below to find
                the section you are looking for.
              </p>
  
              <p className="mt-2">
                <strong className="text-white">What personal information do we process?</strong> When you visit, use, or
                navigate our Services, we may process personal information depending on how you interact with us and the
                Services, the choices you make, and the products and features you use. Learn more about personal
                information you disclose to us.
              </p>
  
              <p className="mt-2">
                <strong className="text-white">Do we process any sensitive personal information?</strong> Some of the
                information may be considered "special" or "sensitive" in certain jurisdictions, for example your racial
                or ethnic origins, sexual orientation, and religious beliefs. We do not process sensitive personal
                information.
              </p>
  
              <p className="mt-2">
                <strong className="text-white">Do we collect any information from third parties?</strong> We do not
                collect any information from third parties.
              </p>
  
              <p className="mt-2">
                <strong className="text-white">How do we process your information?</strong> We process your information to
                provide, improve, and administer our Services, communicate with you, for security and fraud prevention,
                and to comply with law. We may also process your information for other purposes with your consent. We
                process your information only when we have a valid legal reason to do so. Learn more about how we process
                your information.
              </p>
  
              <p className="mt-2">
                <strong className="text-white">
                  In what situations and with which parties do we share personal information?
                </strong>{" "}
                We may share information in specific situations and with specific third parties. Learn more about when and
                with whom we share your personal information.
              </p>
  
              <p className="mt-2">
                <strong className="text-white">How do we keep your information safe?</strong> We have adequate
                organizational and technical processes and procedures in place to protect your personal information.
                However, no electronic transmission over the internet or information storage technology can be guaranteed
                to be 100% secure, so we cannot promise or guarantee that hackers, cybercriminals, or other unauthorized
                third parties will not be able to defeat our security and improperly collect, access, steal, or modify
                your information. Learn more about how we keep your information safe.
              </p>
  
              <p className="mt-2">
                <strong className="text-white">What are your rights?</strong> Depending on where you are located
                geographically, the applicable privacy law may mean you have certain rights regarding your personal
                information. Learn more about your privacy rights.
              </p>
  
              <p className="mt-2">
                <strong className="text-white">How do you exercise your rights?</strong> The easiest way to exercise your
                rights is by visiting{" "}
                <a href="mailto:hello@friendscodes.app" className="text-blue-400 hover:text-blue-300 hover:underline">
                  hello@friendscodes.app
                </a>
                , or by contacting us. We will consider and act upon any request in accordance with applicable data
                protection laws.
              </p>
  
              <p className="mt-2">
                <strong className="text-white">
                  Want to learn more about what we do with any information we collect?
                </strong>{" "}
                Review the Privacy Notice in full.
              </p>
            </div>
  
            <div className="mb-8">
              <h2 className="text-2xl font-bold mb-4 text-white">TABLE OF CONTENTS</h2>
              <ol className="list-decimal pl-6 text-gray-300">
                <li>
                  <a href="#section1" className="text-blue-400 hover:text-blue-300 hover:underline">
                    WHAT INFORMATION DO WE COLLECT?
                  </a>
                </li>
                <li>
                  <a href="#section2" className="text-blue-400 hover:text-blue-300 hover:underline">
                    HOW DO WE PROCESS YOUR INFORMATION?
                  </a>
                </li>
                <li>
                  <a href="#section3" className="text-blue-400 hover:text-blue-300 hover:underline">
                    WHAT LEGAL BASES DO WE RELY ON TO PROCESS YOUR PERSONAL INFORMATION?
                  </a>
                </li>
                <li>
                  <a href="#section4" className="text-blue-400 hover:text-blue-300 hover:underline">
                    WHEN AND WITH WHOM DO WE SHARE YOUR PERSONAL INFORMATION?
                  </a>
                </li>
                <li>
                  <a href="#section5" className="text-blue-400 hover:text-blue-300 hover:underline">
                    HOW DO WE HANDLE YOUR SOCIAL LOGINS?
                  </a>
                </li>
                <li>
                  <a href="#section6" className="text-blue-400 hover:text-blue-300 hover:underline">
                    HOW LONG DO WE KEEP YOUR INFORMATION?
                  </a>
                </li>
                <li>
                  <a href="#section7" className="text-blue-400 hover:text-blue-300 hover:underline">
                    HOW DO WE KEEP YOUR INFORMATION SAFE?
                  </a>
                </li>
                <li>
                  <a href="#section8" className="text-blue-400 hover:text-blue-300 hover:underline">
                    DO WE COLLECT INFORMATION FROM MINORS?
                  </a>
                </li>
                <li>
                  <a href="#section9" className="text-blue-400 hover:text-blue-300 hover:underline">
                    WHAT ARE YOUR PRIVACY RIGHTS?
                  </a>
                </li>
                <li>
                  <a href="#section10" className="text-blue-400 hover:text-blue-300 hover:underline">
                    CONTROLS FOR DO-NOT-TRACK FEATURES
                  </a>
                </li>
                <li>
                  <a href="#section11" className="text-blue-400 hover:text-blue-300 hover:underline">
                    DO UNITED STATES RESIDENTS HAVE SPECIFIC PRIVACY RIGHTS?
                  </a>
                </li>
                <li>
                  <a href="#section12" className="text-blue-400 hover:text-blue-300 hover:underline">
                    DO WE MAKE UPDATES TO THIS NOTICE?
                  </a>
                </li>
                <li>
                  <a href="#section13" className="text-blue-400 hover:text-blue-300 hover:underline">
                    HOW CAN YOU CONTACT US ABOUT THIS NOTICE?
                  </a>
                </li>
                <li>
                  <a href="#section14" className="text-blue-400 hover:text-blue-300 hover:underline">
                    HOW CAN YOU REVIEW, UPDATE, OR DELETE THE DATA WE COLLECT FROM YOU?
                  </a>
                </li>
              </ol>
            </div>
  
            <div id="section1" className="mb-8">
              <h2 className="text-2xl font-bold mb-4 text-white">1. WHAT INFORMATION DO WE COLLECT?</h2>
              <h3 className="text-xl font-semibold mb-2 text-gray-100">Personal information you disclose to us</h3>
              <p className="italic mb-2 text-gray-400">
                In Short: We collect personal information that you provide to us.
              </p>
  
              <p>
                We collect personal information that you voluntarily provide to us when you register on the Services,
                express an interest in obtaining information about us or our products and Services, when you participate
                in activities on the Services, or otherwise when you contact us.
              </p>
  
              <p className="mt-2">
                <strong className="text-white">Personal Information Provided by You.</strong> The personal information
                that we collect depends on the context of your interactions with us and the Services, the choices you
                make, and the products and features you use. The personal information we collect may include the
                following:
              </p>
              <ul className="list-disc pl-6 mt-1 text-gray-300">
                <li>names</li>
                <li>email addresses</li>
                <li>usernames</li>
              </ul>
  
              <p className="mt-2">
                <strong className="text-white">Sensitive Information.</strong> We do not process sensitive information.
              </p>
  
              <p className="mt-2">
                <strong className="text-white">Social Media Login Data.</strong> We may provide you with the option to
                register with us using your existing social media account details, like your Facebook, X, or other social
                media account. If you choose to register in this way, we will collect certain profile information about
                you from the social media provider, as described in the section called "HOW DO WE HANDLE YOUR SOCIAL
                LOGINS?" below.
              </p>
  
              <p className="mt-2">
                All personal information that you provide to us must be true, complete, and accurate, and you must notify
                us of any changes to such personal information.
              </p>
  
              <h3 className="text-xl font-semibold mt-4 mb-2 text-gray-100">Information automatically collected</h3>
              <p className="italic mb-2 text-gray-400">
                In Short: Some information — such as your Internet Protocol (IP) address and/or browser and device
                characteristics — is collected automatically when you visit our Services.
              </p>
  
              <p>
                We automatically collect certain information when you visit, use, or navigate the Services. This
                information does not reveal your specific identity (like your name or contact information) but may include
                device and usage information, such as your IP address, browser and device characteristics, operating
                system, language preferences, referring URLs, device name, country, location, information about how and
                when you use our Services, and other technical information. This information is primarily needed to
                maintain the security and operation of our Services, and for our internal analytics and reporting
                purposes.
              </p>
  
              <p className="mt-2">The information we collect includes:</p>
              <ul className="list-disc pl-6 mt-1 text-gray-300">
                <li>
                  <strong className="text-white">Log and Usage Data.</strong> Log and usage data is service-related,
                  diagnostic, usage, and performance information our servers automatically collect when you access or use
                  our Services and which we record in log files. Depending on how you interact with us, this log data may
                  include your IP address, device information, browser type, and settings and information about your
                  activity in the Services (such as the date/time stamps associated with your usage, pages and files
                  viewed, searches, and other actions you take such as which features you use), device event information
                  (such as system activity, error reports (sometimes called "crash dumps"), and hardware settings).
                </li>
                <li>
                  <strong className="text-white">Device Data.</strong> We collect device data such as information about
                  your computer, phone, tablet, or other device you use to access the Services. Depending on the device
                  used, this device data may include information such as your IP address (or proxy server), device and
                  application identification numbers, location, browser type, hardware model, Internet service provider
                  and/or mobile carrier, operating system, and system configuration information.
                </li>
                <li>
                  <strong className="text-white">Location Data.</strong> We collect location data such as information
                  about your device's location, which can be either precise or imprecise. How much information we collect
                  depends on the type and settings of the device you use to access the Services. For example, we may use
                  GPS and other technologies to collect geolocation data that tells us your current location (based on
                  your IP address). You can opt out of allowing us to collect this information either by refusing access
                  to the information or by disabling your Location setting on your device. However, if you choose to opt
                  out, you may not be able to use certain aspects of the Services.
                </li>
              </ul>
  
              <p className="mt-2">
                <strong className="text-white">Google API</strong>
                <br />
                Our use of information received from Google APIs will adhere to Google API Services User Data Policy,
                including the Limited Use requirements.
              </p>
            </div>
  
            <div id="section2" className="mb-8">
              <h2 className="text-2xl font-bold mb-4 text-white">2. HOW DO WE PROCESS YOUR INFORMATION?</h2>
              <p className="italic mb-2 text-gray-400">
                In Short: We process your information to provide, improve, and administer our Services, communicate with
                you, for security and fraud prevention, and to comply with law. We may also process your information for
                other purposes with your consent.
              </p>
  
              <p>
                We process your personal information for a variety of reasons, depending on how you interact with our
                Services, including:
              </p>
              <ul className="list-disc pl-6 mt-1 text-gray-300">
                <li>
                  To facilitate account creation and authentication and otherwise manage user accounts. We may process
                  your information so you can create and log in to your account, as well as keep your account in working
                  order.
                </li>
                <li>
                  To deliver and facilitate delivery of services to the user. We may process your information to provide
                  you with the requested service.
                </li>
                <li>
                  To save or protect an individual's vital interest. We may process your information when necessary to
                  save or protect an individual's vital interest, such as to prevent harm.
                </li>
              </ul>
            </div>
  
            <div id="section3" className="mb-8">
              <h2 className="text-2xl font-bold mb-4 text-white">
                3. WHAT LEGAL BASES DO WE RELY ON TO PROCESS YOUR INFORMATION?
              </h2>
              <p className="italic mb-2 text-gray-400">
                In Short: We only process your personal information when we believe it is necessary and we have a valid
                legal reason (i.e., legal basis) to do so under applicable law, like with your consent, to comply with
                laws, to provide you with services to enter into or fulfill our contractual obligations, to protect your
                rights, or to fulfill our legitimate business interests.
              </p>
  
              <p>
                <strong className="text-white">If you are located in the EU or UK, this section applies to you.</strong>
              </p>
  
              <p>
                The General Data Protection Regulation (GDPR) and UK GDPR require us to explain the valid legal bases we
                rely on in order to process your personal information. As such, we may rely on the following legal bases
                to process your personal information:
              </p>
              <ul className="list-disc pl-6 mt-1 text-gray-300">
                <li>
                  <strong className="text-white">Consent.</strong> We may process your information if you have given us
                  permission (i.e., consent) to use your personal information for a specific purpose. You can withdraw
                  your consent at any time. Learn more about withdrawing your consent.
                </li>
                <li>
                  <strong className="text-white">Performance of a Contract.</strong> We may process your personal
                  information when we believe it is necessary to fulfill our contractual obligations to you, including
                  providing our Services or at your request prior to entering into a contract with you.
                </li>
                <li>
                  <strong className="text-white">Legal Obligations.</strong> We may process your information where we
                  believe it is necessary for compliance with our legal obligations, such as to cooperate with a law
                  enforcement body or regulatory agency, exercise or defend our legal rights, or disclose your information
                  as evidence in litigation in which we are involved.
                </li>
                <li>
                  <strong className="text-white">Vital Interests.</strong> We may process your information where we
                  believe it is necessary to protect your vital interests or the vital interests of a third party, such as
                  situations involving potential threats to the safety of any person.
                </li>
              </ul>
  
              <p className="mt-4">
                <strong className="text-white">If you are located in Canada, this section applies to you.</strong>
              </p>
  
              <p>
                We may process your information if you have given us specific permission (i.e., express consent) to use
                your personal information for a specific purpose, or in situations where your permission can be inferred
                (i.e., implied consent). You can withdraw your consent at any time.
              </p>
  
              <p className="mt-2">
                In some exceptional cases, we may be legally permitted under applicable law to process your information
                without your consent, including, for example:
              </p>
              <ul className="list-disc pl-6 mt-1 text-gray-300">
                <li>
                  If collection is clearly in the interests of an individual and consent cannot be obtained in a timely
                  way
                </li>
                <li>For investigations and fraud detection and prevention</li>
                <li>For business transactions provided certain conditions are met</li>
                <li>
                  If it is contained in a witness statement and the collection is necessary to assess, process, or settle
                  an insurance claim
                </li>
                <li>For identifying injured, ill, or deceased persons and communicating with next of kin</li>
                <li>
                  If we have reasonable grounds to believe an individual has been, is, or may be victim of financial abuse
                </li>
                <li>
                  If it is reasonable to expect collection and use with consent would compromise the availability or the
                  accuracy of the information and the collection is reasonable for purposes related to investigating a
                  breach of an agreement or a contravention of the laws of Canada or a province
                </li>
                <li>
                  If disclosure is required to comply with a subpoena, warrant, court order, or rules of the court
                  relating to the production of records
                </li>
                <li>
                  If it was produced by an individual in the course of their employment, business, or profession and the
                  collection is consistent with the purposes for which the information was produced
                </li>
                <li>If the collection is solely for journalistic, artistic, or literary purposes</li>
                <li>If the information is publicly available and is specified by the regulations</li>
              </ul>
            </div>
  
            <div id="section4" className="mb-8">
              <h2 className="text-2xl font-bold mb-4 text-white">
                4. WHEN AND WITH WHOM DO WE SHARE YOUR PERSONAL INFORMATION?
              </h2>
              <p className="italic mb-2 text-gray-400">
                In Short: We may share information in specific situations described in this section and/or with the
                following third parties.
              </p>
  
              <p>We may need to share your personal information in the following situations:</p>
              <ul className="list-disc pl-6 mt-1 text-gray-300">
                <li>
                  <strong className="text-white">Business Transfers.</strong> We may share or transfer your information in
                  connection with, or during negotiations of, any merger, sale of company assets, financing, or
                  acquisition of all or a portion of our business to another company.
                </li>
              </ul>
            </div>
  
            <div id="section5" className="mb-8">
              <h2 className="text-2xl font-bold mb-4 text-white">5. HOW DO WE HANDLE YOUR SOCIAL LOGINS?</h2>
              <p className="italic mb-2 text-gray-400">
                In Short: If you choose to register or log in to our Services using a social media account, we may have
                access to certain information about you.
              </p>
  
              <p>
                Our Services offer you the ability to register and log in using your third-party social media account
                details (like your Facebook or X logins). Where you choose to do this, we will receive certain profile
                information about you from your social media provider. The profile information we receive may vary
                depending on the social media provider concerned, but will often include your name, email address, friends
                list, and profile picture, as well as other information you choose to make public on such a social media
                platform.
              </p>
  
              <p className="mt-2">
                We will use the information we receive only for the purposes that are described in this Privacy Notice or
                that are otherwise made clear to you on the relevant Services. Please note that we do not control, and are
                not responsible for, other uses of your personal information by your third-party social media provider. We
                recommend that you review their privacy notice to understand how they collect, use, and share your
                personal information, and how you can set your privacy preferences on their sites and apps.
              </p>
            </div>
  
            <div id="section6" className="mb-8">
              <h2 className="text-2xl font-bold mb-4 text-white">6. HOW LONG DO WE KEEP YOUR INFORMATION?</h2>
              <p className="italic mb-2 text-gray-400">
                In Short: We keep your information for as long as necessary to fulfill the purposes outlined in this
                Privacy Notice unless otherwise required by law.
              </p>
  
              <p>
                We will only keep your personal information for as long as it is necessary for the purposes set out in
                this Privacy Notice, unless a longer retention period is required or permitted by law (such as tax,
                accounting, or other legal requirements). No purpose in this notice will require us keeping your personal
                information for longer than the period of time in which users have an account with us.
              </p>
  
              <p className="mt-2">
                When we have no ongoing legitimate business need to process your personal information, we will either
                delete or anonymize such information, or, if this is not possible (for example, because your personal
                information has been stored in backup archives), then we will securely store your personal information and
                isolate it from any further processing until deletion is possible.
              </p>
            </div>
  
            <div id="section7" className="mb-8">
              <h2 className="text-2xl font-bold mb-4 text-white">7. HOW DO WE KEEP YOUR INFORMATION SAFE?</h2>
              <p className="italic mb-2 text-gray-400">
                In Short: We aim to protect your personal information through a system of organizational and technical
                security measures.
              </p>
  
              <p>
                We have implemented appropriate and reasonable technical and organizational security measures designed to
                protect the security of any personal information we process. However, despite our safeguards and efforts
                to secure your information, no electronic transmission over the Internet or information storage technology
                can be guaranteed to be 100% secure, so we cannot promise or guarantee that hackers, cybercriminals, or
                other unauthorized third parties will not be able to defeat our security and improperly collect, access,
                steal, or modify your information. Although we will do our best to protect your personal information,
                transmission of personal information to and from our Services is at your own risk. You should only access
                the Services within a secure environment.
              </p>
            </div>
  
            <div id="section8" className="mb-8">
              <h2 className="text-2xl font-bold mb-4 text-white">8. DO WE COLLECT INFORMATION FROM MINORS?</h2>
              <p className="italic mb-2 text-gray-400">
                In Short: We do not knowingly collect data from or market to children under 18 years of age.
              </p>
  
              <p>
                We do not knowingly collect, solicit data from, or market to children under 18 years of age, nor do we
                knowingly sell such personal information. By using the Services, you represent that you are at least 18 or
                that you are the parent or guardian of such a minor and consent to such minor dependent's use of the
                Services. If we learn that personal information from users less than 18 years of age has been collected,
                we will deactivate the account and take reasonable measures to promptly delete such data from our records.
                If you become aware of any data we may have collected from children under age 18, please contact us at{" "}
                <a href="mailto:jorim.soika@gmx.de" className="text-blue-400 hover:text-blue-300 hover:underline">
                  jorim.soika@gmx.de
                </a>
                .
              </p>
            </div>
  
            <div id="section9" className="mb-8">
              <h2 className="text-2xl font-bold mb-4 text-white">9. WHAT ARE YOUR PRIVACY RIGHTS?</h2>
              <p className="italic mb-2 text-gray-400">
                In Short: Depending on your state of residence in the US or in some regions, such as the European Economic
                Area (EEA), United Kingdom (UK), Switzerland, and Canada, you have rights that allow you greater access to
                and control over your personal information. You may review, change, or terminate your account at any time,
                depending on your country, province, or state of residence.
              </p>
  
              <p>
                In some regions (like the EEA, UK, Switzerland, and Canada), you have certain rights under applicable data
                protection laws. These may include the right (i) to request access and obtain a copy of your personal
                information, (ii) to request rectification or erasure; (iii) to restrict the processing of your personal
                information; (iv) if applicable, to data portability; and (v) not to be subject to automated
                decision-making. In certain circumstances, you may also have the right to object to the processing of your
                personal information. You can make such a request by contacting us by using the contact details provided
                in the section "HOW CAN YOU CONTACT US ABOUT THIS NOTICE?" below.
              </p>
  
              <p className="mt-2">
                We will consider and act upon any request in accordance with applicable data protection laws.
              </p>
  
              <p className="mt-2">
                If you are located in the EEA or UK and you believe we are unlawfully processing your personal
                information, you also have the right to complain to your Member State data protection authority or UK data
                protection authority.
              </p>
  
              <p className="mt-2">
                If you are located in Switzerland, you may contact the Federal Data Protection and Information
                Commissioner.
              </p>
  
              <p className="mt-2">
                <strong className="text-white">Withdrawing your consent:</strong> If we are relying on your consent to
                process your personal information, which may be express and/or implied consent depending on the applicable
                law, you have the right to withdraw your consent at any time. You can withdraw your consent at any time by
                contacting us by using the contact details provided in the section "HOW CAN YOU CONTACT US ABOUT THIS
                NOTICE?" below.
              </p>
  
              <p className="mt-2">
                However, please note that this will not affect the lawfulness of the processing before its withdrawal nor,
                when applicable law allows, will it affect the processing of your personal information conducted in
                reliance on lawful processing grounds other than consent.
              </p>
  
              <p className="mt-2">
                <strong className="text-white">Opting out of marketing and promotional communications:</strong> You can
                unsubscribe from our marketing and promotional communications at any time by clicking on the unsubscribe
                link in the emails that we send, replying "STOP" or "UNSUBSCRIBE" to the SMS messages that we send, or by
                contacting us using the details provided in the section "HOW CAN YOU CONTACT US ABOUT THIS NOTICE?" below.
                You will then be removed from the marketing lists. However, we may still communicate with you — for
                example, to send you service-related messages that are necessary for the administration and use of your
                account, to respond to service requests, or for other non-marketing purposes.
              </p>
  
              <h3 className="text-xl font-semibold mt-4 mb-2 text-gray-100">Account Information</h3>
              <p>
                If you would at any time like to review or change the information in your account or terminate your
                account, you can:
              </p>
              <ul className="list-disc pl-6 mt-1 text-gray-300">
                <li>Contact us using the contact information provided.</li>
              </ul>
  
              <p className="mt-2">
                Upon your request to terminate your account, we will deactivate or delete your account and information
                from our active databases. However, we may retain some information in our files to prevent fraud,
                troubleshoot problems, assist with any investigations, enforce our legal terms and/or comply with
                applicable legal requirements.
              </p>
  
              <p className="mt-2">
                If you have questions or comments about your privacy rights, you may email us at{" "}
                <a href="mailto:hello@friendscodes.app" className="text-blue-400 hover:text-blue-300 hover:underline">
                  hello@friendscodes.app
                </a>
                .
              </p>
            </div>
  
            <div id="section10" className="mb-8">
              <h2 className="text-2xl font-bold mb-4 text-white">10. CONTROLS FOR DO-NOT-TRACK FEATURES</h2>
              <p>
                Most web browsers and some mobile operating systems and mobile applications include a Do-Not-Track ("DNT")
                feature or setting you can activate to signal your privacy preference not to have data about your online
                browsing activities monitored and collected. At this stage, no uniform technology standard for recognizing
                and implementing DNT signals has been finalized. As such, we do not currently respond to DNT browser
                signals or any other mechanism that automatically communicates your choice not to be tracked online. If a
                standard for online tracking is adopted that we must follow in the future, we will inform you about that
                practice in a revised version of this Privacy Notice.
              </p>
  
              <p className="mt-2">
                California law requires us to let you know how we respond to web browser DNT signals. Because there
                currently is not an industry or legal standard for recognizing or honoring DNT signals, we do not respond
                to them at this time.
              </p>
            </div>
  
            <div id="section11" className="mb-8">
              <h2 className="text-2xl font-bold mb-4 text-white">
                11. DO UNITED STATES RESIDENTS HAVE SPECIFIC PRIVACY RIGHTS?
              </h2>
              <p className="italic mb-2 text-gray-400">
                In Short: If you are a resident of, you may have the right to request access to and receive details about
                the personal information we maintain about you and how we have processed it, correct inaccuracies, get a
                copy of, or delete your personal information. You may also have the right to withdraw your consent to our
                processing of your personal information. These rights may be limited in some circumstances by applicable
                law. More information is provided below.
              </p>
  
              <h3 className="text-xl font-semibold mt-4 mb-2 text-gray-100">
                Categories of Personal Information We Collect
              </h3>
              <p>We have collected the following categories of personal information in the past twelve (12) months:</p>
  
              <div className="overflow-x-auto mt-4">
                <table className="min-w-full border-collapse">
                  <thead>
                    <tr className="bg-[#1a1a2e] text-white">
                      <th className="border border-gray-700 px-4 py-2 text-left rounded-tl-md">Category</th>
                      <th className="border border-gray-700 px-4 py-2 text-left">Examples</th>
                      <th className="border border-gray-700 px-4 py-2 text-left rounded-tr-md">Collected</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="bg-[#13131f]">
                      <td className="border border-gray-700 px-4 py-2">A. Identifiers</td>
                      <td className="border border-gray-700 px-4 py-2">
                        Contact details, such as real name, alias, postal address, telephone or mobile contact number,
                        unique personal identifier, online identifier, Internet Protocol address, email address, and
                        account name
                      </td>
                      <td className="border border-gray-700 px-4 py-2">NO</td>
                    </tr>
                    <tr className="bg-[#0f0f1a]">
                      <td className="border border-gray-700 px-4 py-2">
                        B. Protected classification characteristics under state or federal law
                      </td>
                      <td className="border border-gray-700 px-4 py-2">
                        Gender, age, date of birth, race and ethnicity, national origin, marital status, and other
                        demographic data
                      </td>
                      <td className="border border-gray-700 px-4 py-2">NO</td>
                    </tr>
                    <tr className="bg-[#13131f]">
                      <td className="border border-gray-700 px-4 py-2">C. Commercial information</td>
                      <td className="border border-gray-700 px-4 py-2">
                        Transaction information, purchase history, financial details, and payment information
                      </td>
                      <td className="border border-gray-700 px-4 py-2">NO</td>
                    </tr>
                    <tr className="bg-[#0f0f1a]">
                      <td className="border border-gray-700 px-4 py-2">D. Biometric information</td>
                      <td className="border border-gray-700 px-4 py-2">Fingerprints and voiceprints</td>
                      <td className="border border-gray-700 px-4 py-2">NO</td>
                    </tr>
                    <tr className="bg-[#13131f]">
                      <td className="border border-gray-700 px-4 py-2">E. Internet or other similar network activity</td>
                      <td className="border border-gray-700 px-4 py-2">
                        Browsing history, search history, online behavior, interest data, and interactions with our and
                        other websites, applications, systems, and advertisements
                      </td>
                      <td className="border border-gray-700 px-4 py-2">NO</td>
                    </tr>
                    <tr className="bg-[#0f0f1a]">
                      <td className="border border-gray-700 px-4 py-2">F. Geolocation data</td>
                      <td className="border border-gray-700 px-4 py-2">Device location</td>
                      <td className="border border-gray-700 px-4 py-2">NO</td>
                    </tr>
                    <tr className="bg-[#13131f]">
                      <td className="border border-gray-700 px-4 py-2">
                        G. Audio, electronic, sensory, or similar information
                      </td>
                      <td className="border border-gray-700 px-4 py-2">
                        Images and audio, video or call recordings created in connection with our business activities
                      </td>
                      <td className="border border-gray-700 px-4 py-2">NO</td>
                    </tr>
                    <tr className="bg-[#0f0f1a]">
                      <td className="border border-gray-700 px-4 py-2">
                        H. Professional or employment-related information
                      </td>
                      <td className="border border-gray-700 px-4 py-2">
                        Business contact details in order to provide you our Services at a business level or job title,
                        work history, and professional qualifications if you apply for a job with us
                      </td>
                      <td className="border border-gray-700 px-4 py-2">NO</td>
                    </tr>
                    <tr className="bg-[#13131f]">
                      <td className="border border-gray-700 px-4 py-2">I. Education Information</td>
                      <td className="border border-gray-700 px-4 py-2">Student records and directory information</td>
                      <td className="border border-gray-700 px-4 py-2">NO</td>
                    </tr>
                    <tr className="bg-[#0f0f1a]">
                      <td className="border border-gray-700 px-4 py-2">
                        J. Inferences drawn from collected personal information
                      </td>
                      <td className="border border-gray-700 px-4 py-2">
                        Inferences drawn from any of the collected personal information listed above to create a profile
                        or summary about, for example, an individual's preferences and characteristics
                      </td>
                      <td className="border border-gray-700 px-4 py-2">NO</td>
                    </tr>
                    <tr className="bg-[#13131f]">
                      <td className="border border-gray-700 px-4 py-2 rounded-bl-md">
                        K. Sensitive personal Information
                      </td>
                      <td className="border border-gray-700 px-4 py-2"></td>
                      <td className="border border-gray-700 px-4 py-2 rounded-br-md">NO</td>
                    </tr>
                  </tbody>
                </table>
              </div>
  
              <p className="mt-4">
                We may also collect other personal information outside of these categories through instances where you
                interact with us in person, online, or by phone or mail in the context of:
              </p>
              <ul className="list-disc pl-6 mt-1 text-gray-300">
                <li>Receiving help through our customer support channels;</li>
                <li>Participation in customer surveys or contests; and</li>
                <li>Facilitation in the delivery of our Services and to respond to your inquiries.</li>
              </ul>
  
              <h3 className="text-xl font-semibold mt-4 mb-2 text-gray-100">Sources of Personal Information</h3>
              <p>Learn more about the sources of personal information we collect in "WHAT INFORMATION DO WE COLLECT?"</p>
  
              <h3 className="text-xl font-semibold mt-4 mb-2 text-gray-100">How We Use and Share Personal Information</h3>
              <p>
                Learn more about how we use your personal information in the section, "HOW DO WE PROCESS YOUR
                INFORMATION?"
              </p>
  
              <p className="mt-2">
                <strong className="text-white">Will your information be shared with anyone else?</strong>
              </p>
  
              <p>
                We may disclose your personal information with our service providers pursuant to a written contract
                between us and each service provider. Learn more about how we disclose personal information to in the
                section, "WHEN AND WITH WHOM DO WE SHARE YOUR PERSONAL INFORMATION?"
              </p>
  
              <p className="mt-2">
                We may use your personal information for our own business purposes, such as for undertaking internal
                research for technological development and demonstration. This is not considered to be "selling" of your
                personal information.
              </p>
  
              <p className="mt-2">
                We have not disclosed, sold, or shared any personal information to third parties for a business or
                commercial purpose in the preceding twelve (12) months. We will not sell or share personal information in
                the future belonging to website visitors, users, and other consumers.
              </p>
  
              <h3 className="text-xl font-semibold mt-4 mb-2 text-gray-100">Your Rights</h3>
              <p>
                You have rights under certain US state data protection laws. However, these rights are not absolute, and
                in certain cases, we may decline your request as permitted by law. These rights include:
              </p>
              <ul className="list-disc pl-6 mt-1 text-gray-300">
                <li>Right to know whether or not we are processing your personal data</li>
                <li>Right to access your personal data</li>
                <li>Right to correct inaccuracies in your personal data</li>
                <li>Right to request the deletion of your personal data</li>
                <li>Right to obtain a copy of the personal data you previously shared with us</li>
                <li>Right to non-discrimination for exercising your rights</li>
                <li>
                  Right to opt out of the processing of your personal data if it is used for targeted advertising, the
                  sale of personal data, or profiling in furtherance of decisions that produce legal or similarly
                  significant effects ("profiling")
                </li>
              </ul>
  
              <h3 className="text-xl font-semibold mt-4 mb-2 text-gray-100">How to Exercise Your Rights</h3>
              <p>
                To exercise these rights, you can contact us by visiting{" "}
                <a href="mailto:hello@friendscodes.app" className="text-blue-400 hover:text-blue-300 hover:underline">
                  hello@friendscodes.app
                </a>
                , by emailing us at{" "}
                <a href="mailto:hello@friendscodes.app" className="text-blue-400 hover:text-blue-300 hover:underline">
                  hello@friendscodes.app
                </a>
                , or by referring to the contact details at the bottom of this document.
              </p>
  
              <p className="mt-2">
                Under certain US state data protection laws, you can designate an authorized agent to make a request on
                your behalf. We may deny a request from an authorized agent that does not submit proof that they have been
                validly authorized to act on your behalf in accordance with applicable laws.
              </p>
  
              <h3 className="text-xl font-semibold mt-4 mb-2 text-gray-100">Request Verification</h3>
              <p>
                Upon receiving your request, we will need to verify your identity to determine you are the same person
                about whom we have the information in our system. We will only use personal information provided in your
                request to verify your identity or authority to make the request. However, if we cannot verify your
                identity from the information already maintained by us, we may request that you provide additional
                information for the purposes of verifying your identity and for security or fraud-prevention purposes.
              </p>
  
              <p className="mt-2">
                If you submit the request through an authorized agent, we may need to collect additional information to
                verify your identity before processing your request and the agent will need to provide a written and
                signed permission from you to submit such request on your behalf.
              </p>
            </div>
  
            <div id="section12" className="mb-8">
              <h2 className="text-2xl font-bold mb-4 text-white">12. DO WE MAKE UPDATES TO THIS NOTICE?</h2>
              <p className="italic mb-2 text-gray-400">
                In Short: Yes, we will update this notice as necessary to stay compliant with relevant laws.
              </p>
  
              <p>
                We may update this Privacy Notice from time to time. The updated version will be indicated by an updated
                "Revised" date at the top of this Privacy Notice. If we make material changes to this Privacy Notice, we
                may notify you either by prominently posting a notice of such changes or by directly sending you a
                notification. We encourage you to review this Privacy Notice frequently to be informed of how we are
                protecting your information.
              </p>
            </div>
  
            <div id="section13" className="mb-8">
              <h2 className="text-2xl font-bold mb-4 text-white">13. HOW CAN YOU CONTACT US ABOUT THIS NOTICE?</h2>
              <p>
                If you have questions or comments about this notice, you may contact our Data Protection Officer (DPO) by
                email at{" "}
                <a href="mailto:jorim.soika@gmx.de" className="text-blue-400 hover:text-blue-300 hover:underline">
                  jorim.soika@gmx.de
                </a>
                , or contact us by post at:
              </p>
  
              <address className="mt-2 not-italic text-gray-300">
                FriendsCodes
                <br />
                Data Protection Officer
                <br />
                Danziger Straße 61
                <br />
                Berlin, Berlin 10435
                <br />
                Germany
              </address>
            </div>
  
            <div id="section14" className="mb-8">
              <h2 className="text-2xl font-bold mb-4 text-white">
                14. HOW CAN YOU REVIEW, UPDATE, OR DELETE THE DATA WE COLLECT FROM YOU?
              </h2>
              <p>
                Based on the applicable laws of your country or state of residence in the US, you may have the right to
                request access to the personal information we collect from you, details about how we have processed it,
                correct inaccuracies, or delete your personal information. You may also have the right to withdraw your
                consent to our processing of your personal information. These rights may be limited in some circumstances
                by applicable law. To request to review, update, or delete your personal information, please visit:{" "}
                <a href="mailto:hello@friendscodes.app" className="text-blue-400 hover:text-blue-300 hover:underline">
                  hello@friendscodes.app
                </a>
                .
              </p>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    )
  }
  
  