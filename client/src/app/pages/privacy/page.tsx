
const PrivacyPolicy = () => {
  return (
    <div className="flex flex-col justify-center items-center w-full py-8">
      <h1 className="text-primarypink text-7xl text-center">Privacy Policy</h1>
      <div className="w-11/12 md:w-3/4 pt-8">
        <p className="py-4">Effective Date: [Insert Date]</p>

        <p className="py-4">
          Welcome to HornyNeighbour ("we," "our," "us"). We value your privacy and are
          committed to protecting your personal information. This Privacy Policy explains
          how we collect, use, disclose, and safeguard your information when you visit
          our website [Insert Website URL] (the "Site"). Please read this policy
          carefully. If you do not agree with the terms of this privacy policy, please do
          not access the site.
        </p>

        <h2 className="text-lg pt-4">Information We Collect</h2>
        <p className="text-sm">
          We may collect information about you in a variety of ways. The information we
          may collect on the Site includes:
        </p>
        <ul className="list-disc pl-5 space-y-2">
          <li>
            <strong>Personal Data:</strong> Personally identifiable information, such as
            your name, shipping address, email address, and telephone number, and
            demographic information, such as your age, gender, hometown, and interests,
            that you voluntarily give to us when you register with the Site or when you
            choose to participate in various activities related to the Site.
          </li>
          <li>
            <strong>Derivative Data:</strong> Information our servers automatically
            collect when you access the Site, such as your IP address, your browser type,
            your operating system, your access times, and the pages you have viewed
            directly before and after accessing the Site.
          </li>
          <li>
            <strong>Financial Data:</strong> Financial information, such as data related
            to your payment method (e.g., valid credit card number, card brand,
            expiration date) that we may collect when you purchase, order, return,
            exchange, or request information about our services from the Site.
          </li>
          <li>
            <strong>Data from Social Networks:</strong> User information from social
            networking sites, such as [Social Media Sites], including your name, your
            social network username, location, gender, birth date, email address, profile
            picture, and public data for contacts, if you connect your account to such
            social networks.
          </li>
        </ul>

        <h2 className="text-lg pt-4">Use of Your Information</h2>
        <p className="text-sm">
          We use the information we collect in the following ways:
        </p>
        <ul className="list-disc pl-5 space-y-2">
          <li>To personalize your experience on the Site</li>
          <li>To improve our website based on your feedback</li>
          <li>To improve customer service and respond to your inquiries</li>
          <li>To process transactions efficiently</li>
          <li>
            To send periodic emails regarding your order or other products and services
          </li>
          <li>To administer a contest, promotion, survey, or other site feature</li>
        </ul>

        <h2 className="text-lg pt-4">Disclosure of Your Information</h2>
        <p className="text-sm">
          We may share information we have collected about you in certain situations:
        </p>
        <ul className="list-disc pl-5 space-y-2">
          <li>
            <strong>By Law or to Protect Rights:</strong> If we believe the release of
            information about you is necessary to respond to legal process, to
            investigate or remedy potential violations of our policies, or to protect the
            rights, property, and safety of others, we may share your information as
            permitted or required by any applicable law, rule, or regulation.
          </li>
          <li>
            <strong>Third-Party Service Providers:</strong> We may share your information
            with third parties that perform services for us or on our behalf, including
            payment processing, data analysis, email delivery, hosting services, customer
            service, and marketing assistance.
          </li>
          <li>
            <strong>Marketing Communications:</strong> With your consent, or with an
            opportunity for you to withdraw consent, we may share your information with
            third parties for marketing purposes, as permitted by law.
          </li>
          <li>
            <strong>Business Transfers:</strong> We may share or transfer your
            information in connection with, or during negotiations of, any merger, sale
            of company assets, financing, or acquisition of all or a portion of our
            business to another company.
          </li>
        </ul>

        <h2 className="text-lg pt-4">Security of Your Information</h2>
        <p className="text-sm">
          We use administrative, technical, and physical security measures to help
          protect your personal information. While we have taken reasonable steps to
          secure the personal information you provide to us, please be aware that despite
          our efforts, no security measures are perfect or impenetrable, and no method of
          data transmission can be guaranteed against any interception or other type of
          misuse.
        </p>

        <h2 className="text-lg pt-4">Policy for Children</h2>
        <p className="text-sm">
          We do not knowingly solicit information from or market to children under the
          age of 18. If we learn that we have collected personal information from a child
          under age 18 without verification of parental consent, we will delete that
          information as quickly as possible.
        </p>

        <h2 className="text-lg pt-4">Changes to This Privacy Policy</h2>
        <p className="text-sm">
          We may update this Privacy Policy from time to time. We will notify you of any
          changes by updating the "Effective Date" of this Privacy Policy. You are
          encouraged to review this Privacy Policy periodically to stay informed of
          updates.
        </p>

        <h2 className="text-lg pt-4">Contact Us</h2>
        <p className="text-sm">
          If you have questions or comments about this Privacy Policy, please contact us.
        </p>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
