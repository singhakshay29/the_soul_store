import { Flex } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import NavRes from "../Components/NavRes";

export default function Policy() {
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 1100);
  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 1100);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
    // eslint-disable-next-line
  }, []);
  return (
    <>
      {isSmallScreen && <NavRes />}
      <Flex style={{ flexDirection: "column" }}>
        <Flex className="privacyflex1">
          <Flex className="privacyh1">Introduction</Flex>
        </Flex>
        <Flex className="termtextprivacy">
          The domain name www.thesouledstore.com (“Website”) is a site operated
          by The Souled Store Pvt. Ltd., a company incorporated under laws of
          India with our registered office at 224 Tantia Jogani Industrial
          Estate, JR Boricha Marg, Lower Parel (East), Mumbai 400 011
          (“Company/The Souled Store”).
        </Flex>

        <Flex className="termtextprivacy">
          The Souled Store is committed to ensuring that your privacy is
          protected. Should we ask you to provide any information by which you
          can be identified when using this Platform, be rest assured that it
          will only be used strictly in accordance with this Policy.
        </Flex>

        <Flex className="termtextprivacy">
          Please note that our Policy is subject to change at any time, and we
          may not be able to provide you prior notice. To ensure you are up to
          date with the Policy, please review this page periodically. This
          Policy applies to current and former visitors and customers of our
          Platform. By visiting and/or using our Platform, you are accepting and
          consenting to the practices described in this Policy.
        </Flex>

        <Flex className="privacyflex1">
          <Flex className="privacyh1">What information do we collect?</Flex>
        </Flex>
        <Flex className="termtextprivacy">
          We learn, collect, and store your personal information (that we
          consider necessary) when you use our Platform. We use this information
          to provide you with a safe, efficient, smooth, and customised
          experience, which includes, without limitation, displaying content
          such as recommended products that might interest you and communicating
          with you about your orders, new products, and latest promotional
          offers. This allows us to provide specific services and features that
          most likely meet your needs, customise our Platform to make your
          experience safer and easier, and enable third parties to carry out
          technical, logistical, and other functions on our behalf.
        </Flex>

        <Flex className="termtextprivacy">
          1) Information you provide us We receive and store the information you
          explicitly provide to us. This includes personal information such as
          your user name along with your password, your name, address, telephone
          number, e-mail address and other contact information, date of birth,
          gender, financial information such as bank account information,
          credit/debit card or other payment instrument details and any other
          information that you provide during your time on the Platform. You may
          choose not to provide certain information, but this could prevent you
          from taking full advantage of our Platform’s various features.
        </Flex>

        <Flex className="termtextprivacy">
          2) Information collected automatically Whenever you interact with our
          Platform, we automatically receive, record, and analyse information
          from your browser or device, which includes, without limitation, your
          IP address, geolocation data, device identification, “cookie”
          information, the type of browser and/or device you’re using to access
          our Platform, information about your mobile device, including a unique
          identifier for your device and purchase history; which we sometimes
          aggregate with similar information from other customers to create
          features such as best-selling products, products you viewed or
          searched for, products you may like. We may also use browser data such
          as cookies, flash cookies, or similar data on certain parts of our
          Platform. We may use software tools such as JavaScript to measure and
          collect session information, including page response times, download
          errors, length of visits to certain pages, page interaction
          information (such as scrolling, clicks, and mouse-overs), and methods
          used to browse away from the page. We use this information for
          internal analysis and to provide you with location-based services,
          such as advertising, search results, and other personalised content,
          to give you the best possible shopping experience on our Platform.
        </Flex>
        <Flex className="termtextprivacy">
          3) Information from other sources We may receive information about you
          from third parties, such as social media services, commercially
          available sources, and business partners. If you access our Platform
          through a social media service or connect a service on our Platform to
          a social media service, the information we collect may include but is
          not limited to your user name, profile picture, email address, friends
          list and any other information associated with that social media
          service, which the social media service has the right to share with us
          and any other information or content you have made public in
          connection with that social media service. Whenever you access the
          Platform or contact us through social media services, you authorise us
          to collect, store, analyse and use such information in accordance with
          this Policy.
        </Flex>

        <Flex className="privacyflex1">
          <Flex className="privacyh1">How do we use cookies?</Flex>
        </Flex>
        <Flex className="termtextprivacy">
          A cookie is a small file that we, after obtaining your permission,
          transfer to your computer’s hard drive through your web browser. This
          file helps us recognise your browser and respond to you as an
          individual, as well as provide personalised features and
          advertisements based on your needs, likes, dislikes and behaviour on
          our Platform. You can choose to accept or decline cookies. The help
          menu on most browsers will tell you how to prevent the browser from
          accepting new cookies and deleting/ disabling existing cookies.
          However, disabling/ deleting our cookies could prevent you from taking
          full advantage of our Platform’s various features.
        </Flex>

        <Flex className="privacyflex1">
          <Flex className="privacyh1">What choices do you have? </Flex>
        </Flex>
        <Flex className="termtextprivacy">
          1) You can add, correct, update, modify or review your personal
          information on a regular basis. However, whenever you update
          information, we usually keep a copy of the previous version for our
          records.
        </Flex>
        <Flex className="termtextprivacy">
          2) If you do not want to receive emails or messages from us, please
          get in touch with our customer care team to de-list your e-mail ID.
        </Flex>
        <Flex className="termtextprivacy">
          3) You can choose to not provide your personal information or consent
          for usage of your personal information, subsequently withdraw your
          consent or ask for deletion of your personal information. However,
          this might not allow you to take full advantage of the features of our
          Platform.
        </Flex>
        <Flex className="termtextprivacy">
          4) You can choose to delete your account from your iOS device by
          visiting 'My Account' section on the app. However, this might not
          allow you to take full advantage of the features of our Platform.
        </Flex>

        <Flex className="privacyflex1">
          <Flex className="privacyh1">
            Who should I contact with my grievances regarding this Privacy
            Policy?
          </Flex>
        </Flex>
        <Flex className="termtextprivacy">
          If you have any questions or feedback regarding this Policy, you may
          contact us using the information below:
        </Flex>

        <Flex className="termtextprivacy">Name: Leora P</Flex>
        <Flex className="termtextprivacy">Contact Number: 022 68493328</Flex>
        <Flex className="termtextprivacy">
          Email: grievanceofficer@thesouledstore.com{" "}
        </Flex>
        <Flex className="termtextprivacy">
          Timing: Monday to Saturday- 10 am to 6 pm
        </Flex>
      </Flex>
    </>
  );
}
