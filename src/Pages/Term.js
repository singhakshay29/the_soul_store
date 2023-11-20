import { Flex } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import NavRes from "../Components/NavRes";

export default function Term() {
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
      <Flex style={{ padding: "40px 80px", flexDirection: "column" }}>
        <Flex className="term">TERMS & CONDITIONS</Flex>
        <Flex className="termtext">
          The domain name www.thesouledstore.com (“Website”) is a site operated
          by The Souled Store Pvt. Ltd., a company incorporated under laws of
          India with our registered office at 224 Tantia Jogani Industrial
          Estate, JR Boricha Marg, Lower Parel (East), Mumbai 400 011
          (“Company/The Souled Store”).
        </Flex>
        <Flex className="termtext">
          The Souled Store enables the world's artists to earn money from their
          artwork by making it immediately and easily available for sale as a
          variety of products - without giving up control of their rights. We
          understand the importance of representing one's work with quality and
          respect, and we also believe it is essential that all The Souled Store
          users respect copyright. Whether you’re an artist, a customer, or just
          casually browsing the Website, please respect the copyright of all the
          works you see or buy on The Souled Store.
        </Flex>

        <Flex className="termtext">
          By using the services on the www.thesouledstore.com, you are agreeing
          to the following terms of service, conditions, policies, etc. (“Terms
          of Service”) including those available by hyperlink, with The Souled
          Store, which may be updated by us from time to time. Please check this
          page regularly to take notice of any changes we may have made to the
          Terms of Service.
        </Flex>

        <Flex className="termtext">
          We reserve the right to review and withdraw or amend the services
          without notice. If you do not agree with its terms, kindly do not use
          this Website.
        </Flex>
        <Flex className="termtext">
          The Souled Store provides a range of services including but not
          limited to, enabling you to publish, sell, comment on, promote, and
          purchase art related products; interact with other members; and
          receive the benefits of The Souled Store's product production service
          including payment processing, transaction handling, product
          manufacturing, packaging, order fulfilment, and customer service.
        </Flex>
        <Flex className="term">CONTENT & COPYRIGHT POLICY</Flex>

        <Flex className="termtext">
          You understand that all information, images, pictures, data, text,
          music, sound, photographs, graphics, video, messages, or other
          materials, whether publicly posted or privately transmitted, is the
          exclusive work and property of the person from whom such Content
          originated. The Souled Store does not claim any permanent ownership of
          your Content. You retain copyright and any other rights you already
          hold in Content which you submit, post, upload, display, or sell on or
          through The Souled Store. When you submit, post, upload, display, or
          sell Content, you grant The Souled Store a perpetual, irrevocable,
          worldwide, royalty-free, and non-exclusive (and sub-licensable)
          license to use and archive the Content in accordance with or as
          reasonably contemplated by this Agreement.
        </Flex>

        <Flex className="termtext">
          The Souled Store cannot always manually screen Content before it is
          displayed on the Website, and occasionally members may inadvertently
          or deliberately submit and display content that breaches this
          Agreement. Inappropriate Content includes, but is not limited to,
          Content that infringes the copyright or other intellectual property
          rights of any person or company, or that defames or vilifies any
          person, people, races, religion or religious group, is obscene,
          pornographic, indecent, harassing, threatening, harmful, invasive of
          privacy or publicity rights, abusive, inflammatory, or otherwise
          objectionable. The Souled Store reserves the right to review, and if
          necessary, remove any Content from the Website or to cancel your
          account at its sole discretion, either because that content breaches
          this Agreement, or any applicable laws, or otherwise.
        </Flex>
        <Flex className="termtext">
          This means that you, and not The Souled Store, are entirely
          responsible for all Content that you upload for sale as products,
          post, email, transmit or otherwise make available via The Souled
          Store. The Souled Store does not control the Content posted via The
          Souled Store services and, as such, does not guarantee the accuracy,
          integrity or quality of such Content. You understand that by using The
          Souled Store’s services, you may be exposed to Content that is
          offensive, indecent or objectionable. Under no circumstances will The
          Souled Store be liable in any way for any Content, including, but not
          limited to, any errors or omissions in any Content, or any loss or
          damage of any kind incurred as a result of the use of any Content
          posted, emailed, transmitted or otherwise made available via The
          Souled Store.
        </Flex>
        <Flex className="termtext">
          You understand that you will be exposed to Content from a variety of
          The Souled Store users and that The Souled Store is not responsible
          for the accuracy, usefulness, safety, or intellectual property rights
          of or relating to such Content. You further understand and acknowledge
          that you may be exposed to Content that is inaccurate, offensive,
          indecent, or objectionable, and you agree to waive, and hereby do
          waive, any legal or equitable rights or remedies you have or may have
          against The Souled Store with respect thereto, and agree to defend,
          indemnify and hold harmless The Souled Store, its parent corporation,
          its subsidiaries, its employees, its licensors, and their respective
          officers, directors, employees, and agents to the fullest extent
          allowed by law regarding all matters related to your use of The Souled
          Store service.
        </Flex>

        <Flex className="termtext">
          While we try to offer reliable data, we cannot promise that the
          Content and postings on Website will always be accurate and
          up-to-date. You will be responsible for ensuring that your posts are
          accurate and do not include misleading information. You agree that you
          will not hold us responsible for inaccuracies in any postings on the
          Website.
        </Flex>
        <Flex className="termtext">
          The Souled Store and its designees shall have the right (but not the
          obligation) in their sole discretion to pre-screen, refuse, or remove
          any Content that is available via the Website. Without limiting the
          foregoing, The Souled Store and its designees shall have the right to
          remove any Content that violates the Terms of Service or is otherwise
          objectionable. You agree that you must evaluate, and bear all risks
          associated with, the use of any Content, including any reliance on the
          accuracy, completeness, or usefulness of such Content. In this regard,
          you acknowledge that you may not rely on any Content created by The
          Souled Store or submitted to The Souled Store, including, without
          limitation, information about The Souled Store collaborations, posts,
          or in any other part of the Website.
        </Flex>

        <Flex className="termtext">
          You acknowledge, consent and agree that The Souled Store may access,
          preserve, and disclose your account information and Content if
          required to do so by law or in good faith belief that such access,
          preservation, or disclosure is reasonably necessary to: (i) comply
          with legal processes; (ii) enforce the Terms of Service; (iii) respond
          to claims that any Content violates the rights of third parties; (iv)
          respond to your requests for customer service; or (v) protect the
          rights, property, or personal safety of The Souled Store, its users,
          and the public. By using services of The Souled Store, you agree to
          receiving promotional or information content relevant to The Souled
          Store through the medium of SMS or Email or both. Once you place an
          order with us, you automatically get subscribed to our order related
          Whatsapp notifications.
        </Flex>

        <Flex className="termtext">
          Without limiting other remedies, we may limit, suspend, or terminate
          our service and user accounts, prohibit access to the Website, delay
          or remove hosted Content, and take technical and legal steps to keep
          users off the Website if we think that they are creating problems,
          possible legal liabilities, or acting inconsistently with the letter
          or spirit of our the Terms of Service. The Souled Store also reserves
          the right to cancel unconfirmed accounts or accounts that have been
          inactive for extended periods of time, without providing any prior
          notice, and at its sole discretion.
        </Flex>

        <Flex className="term">LIABILITY</Flex>

        <Flex className="termtext">
          You will not hold The Souled Store responsible for other users'
          Content, actions or inactions, or collaborations. We have no control
          over and do not guarantee the quality, safety, or legality of
          collaborations advertised, the truth or accuracy of users' Content,
          the ability of parties to deliver on collaborations, or that the
          parties will actually complete a transaction. We cannot guarantee
          continuous or secure access to our services, and operation of the
          Website may be interfered with by numerous factors outside of our
          control. Accordingly, to the extent legally permitted, we exclude all
          implied warranties, terms, and conditions related to use thereof. We
          are not liable for any loss of money, goodwill, or reputation, or any
          special, indirect, or consequential damages arising out of your use of
          the Website and services. Some jurisdictions do not allow the
          disclaimer of warranties or exclusion of damages, so such disclaimers
          and exclusions may not apply to you.
        </Flex>

        <Flex className="termtext">
          You must ensure that your access to the Website and The Souled Store
          Service is not illegal or prohibited by laws that apply to you. You
          must take your own precautions to ensure that the process you employ
          for accessing The Souled Store's service does not expose you to the
          risk of viruses, malicious computer code, or other forms of
          interference which may damage own computer system. We do not accept
          responsibility for any interference or damage to any computer system
          that arises in connection with your use of the Website or any linked
          website.
        </Flex>

        <Flex className="termtext">
          We do not accept liability for any losses arising directly or
          indirectly from a failure to provide any service, corruption to or
          loss of data, errors or interruptions, any suspension or
          discontinuance of service, or any transmissions by others in
          contravention of the registered members' obligations as set out in
          these Terms of Service. You acknowledge that we may not be able to
          confirm the identity of other registered users or prevent them acting
          under false pretences or in a manner that infringes the rights of any
          person.
        </Flex>

        <Flex className="term">TRADEMARKS</Flex>

        <Flex className="termtext">
          If you use any of our trademarks in reference to our products or
          services, you must include a statement attributing that trade mark to
          us, and only after securing prior written permission from The Souled
          Store to do so, which may be given, or refused, at its sole
          discretion, and subject to any terms or conditions it may deem fit.
          You must not use any of our trademarks in or as the whole or part of
          your own trademarks; in connection with activities, products or
          services which are not ours; in a manner which may be confusing,
          misleading or deceptive; or in a manner that disparages us or our
          information, products, or services (including this Website), or in a
          manner that implies any kind of any association/affiliation with The
          Souled Store.
        </Flex>

        <Flex className="term">TERMINATION OF ACCOUNT</Flex>

        <Flex className="termtext">
          The Souled Store may terminate your access to all or any part of its
          services at any time, with or without cause, with or without notice,
          effective immediately. You may terminate your use of the service at
          any time. However, you shall continue to be bound by all provisions of
          these Terms of Service, which shall survive termination, including,
          without limitation, ownership provisions, warranty disclaimers,
          indemnity, and limitations of liability.
        </Flex>

        <Flex className="termtext">
          The Souled Store will terminate your access to the site if you are
          determined to be, in The Souled Store's sole discretion, a repeat
          infringer of the Content & Copyright Policy and/or these Terms of
          Service.{" "}
        </Flex>

        <Flex className="termtext">
          If you use any of our trademarks in reference to our products or
          services, you must include a statement attributing that trade mark to
          us, and only after securing prior written permission from The Souled
          Store to do so, which may be given, or refused, at its sole
          discretion, and subject to any terms or conditions it may deem fit.
          You must not use any of our trademarks in or as the whole or part of
          your own trademarks; in connection with activities, products or
          services which are not ours; in a manner which may be confusing,
          misleading or deceptive; or in a manner that disparages us or our
          information, products, or services (including this Website), or in a
          manner that implies any kind of any association/affiliation with The
          Souled Store.
        </Flex>

        <Flex className="termtext">
          The Souled Store may, but shall not be obligated to, give you one
          warning if you have violated these Terms of Service prior to
          termination of your account.
        </Flex>

        <Flex className="termtext">
          By accepting the terms and conditions, the user consents to pay The
          Souled Store the complete amount for the order placed by them from The
          Souled Store. However, The Souled Store does not control the amount
          charged to the user by their bank related to the their purchase from
          The Souled Store, to which The Souled Store disclaims any liability in
          this regard.{" "}
        </Flex>
      </Flex>
    </>
  );
}
