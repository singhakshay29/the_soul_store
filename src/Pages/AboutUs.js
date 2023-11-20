import { Flex, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import about from "../assets/about.avif";
import aboutbanner from "../assets/about-doodlebanner.webp";
import brand from "../assets/brandsbanner.png";
import NavRes from "../Components/NavRes";

export default function AboutUs() {
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 1100);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 1100);
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <>
      {isSmallScreen && <NavRes />}
      <Flex style={{ flexDirection: "column" }}>
        <Flex className="aboutus1">
          <Text className="aboutt1">
            Our ‘About Us’ page would like to thank you from the bottom of its
            heart for visiting.
            <br />
            It doesn‘t get a lot of attention usually, as people are busy
            surfing other, ‘cooler’ pages. The fact that you voluntarily decided
            to come here means a lot. Honestly. *sniff sniff*
          </Text>
        </Flex>
        <Flex style={{ margin: "0 4rem", flexDirection: "column" }}>
          <Flex style={{ justifyContent: "center" }}>
            <img src={about} height="250px" width="250px" alt="" />
          </Flex>
          <Flex
            style={{
              margin: "0 4rem",
              textAlign: "center",
              flexDirection: "column",
            }}>
            <Text className="about2h">
              We are your favourite, online store.
            </Text>
            <Text className="about2p">
              We create and curate stunning designs and print them on all sorts
              of equally stunning products- from t-shirts to phone covers to
              backpacks to boxers to mugs to socks to badges to pins to hoodies
              and many, many more! Our funky products are designed and printed
              specifically to spread happiness, right down to the bottom of your
              ‘soul’. A recent study by our internal, self-funded, fashion
              forward (and totally unbiased) team showed that if you buy from
              www.thesouledstore.com, it increases your lifespan by 7.5%. So if
              you’re looking for great products, with even greater deals and
              discounts, you’ve come to the right place!
            </Text>
          </Flex>
        </Flex>
        <Flex className="aboutus1" style={{ flexDirection: "column" }}>
          <Text className="about3h">Why we’re called ‘The Souled Store’</Text>
          <Text className="aboutt1">
            For starters, it makes for a great pun on the word ‘sold’, since we
            ‘sell' stuff. Smart, right? But more importantly, The Souled Store
            was born out of the idea of loving what you do - “following your
            soul”. Our philosophy is that life is short. Don’t spend it doing
            something you don’t like. There are too many Monday mornings, and
            you can’t go dreading every single one of them. We, at The Souled
            Store, love what we do- designs, products, marketing, and everything
            in between. Our goal is to give everyone something they'll love,
            something they can use to express themselves, and, simply put,
            something to put a smile on their face. So, whether it's
            superheroes, TV shows, pop culture, music, sports, or quirky, funny
            stuff you're looking for, we have something for everyone. Because
            each person is a special snowflake (whether or not they believe it),
            and they deserve only the most insane merchandise available out
            there! So, if you relate to the feeling, and believe in following
            one's heart (soul), hop along on this wonderful journey of ours, and
            help us spread the love!
          </Text>
        </Flex>
        <Flex style={{ justifyContent: "center" }}>
          <img src={aboutbanner} alt="" width="100%" />
        </Flex>
        <Flex className="aboutus1" style={{ flexDirection: "column" }}>
          <Text className="about3h">The Team</Text>
          <Text className="aboutt1">
            We’re a bunch of comic book loving, lame joke cracking, and slightly
            weird but largely likeable people. We love what we do, and don’t
            take ourselves too seriously. This company was started by 4 people,
            with a cupboard full of clothes (probably the size of your
            wardrobe). We’ve now grown to over 150 people, and graduated from
            cupboards to warehouses, but really, that’s all that’s changed.
            We’re still childishly excited about everything we do- from the
            random post-it wall, to the unnecessary instructions outside the
            bathroom door, the board game sessions, and the pot-luck lunches.
            And we try and ensure that this philosophy resonates with all those
            who come and join our family. So, if you’re bored of your current
            desk job and believe that ‘work’ does not necessarily have to be a
            bad word, look no further. We’d love to have you on our team!
          </Text>
        </Flex>
        <Flex style={{ justifyContent: "center", flexDirection: "column" }}>
          <Text className="about2h">Featured By</Text>
          <img src={brand} alt="" height="10%" />
        </Flex>
      </Flex>
    </>
  );
}
