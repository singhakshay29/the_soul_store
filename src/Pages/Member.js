import React from "react";
import bgMember from "../assets/membackground_web.jpeg";
import { Flex, Text } from "@chakra-ui/react";
import { FaCrown } from "react-icons/fa";
import early from "../assets/earlyacces.jpg";
import free from "../assets/freedelivery.webp";
import ship from "../assets/shipping.webp";
import NavRes from "../Components/NavRes";
import dis from "../assets/discount.webp";
import useWindowSize from "../Components/useWindowSize";

export default function Member() {
  const isSmallScreen = useWindowSize();
  return (
    <>
      {isSmallScreen && <NavRes />}

      <img src={bgMember} alt="" height="30%" width="100%" />

      <Flex className="bigTextMem">
        <svg
          data-v-185b4889=""
          xmlns="http://www.w3.org/2000/svg"
          id="Group_1557"
          width="240.056"
          height="102.157"
          viewBox="0 0 220.056 82.157">
          <path
            data-v-185b4889=""
            id="Path_1043"
            d="M-220.694 162.314c0-3.515-1.427-4.939-4.569-4.939h-2.837v9.925h2.735c3.778 0 4.671-1.535 4.671-4.986z"
            transform="translate(377.509 -149.049)"
            class="cls-1"></path>{" "}
          <path
            data-v-185b4889=""
            id="Path_1044"
            d="M-327.113 158.431h-.338c-.436 4.284-1.528 11.373-2.584 17.892h5.478c-1.013-6.516-1.992-13.785-2.556-17.892z"
            transform="translate(375.779 -149.031)"
            class="cls-1"></path>{" "}
          <path
            data-v-185b4889=""
            id="Path_1045"
            d="M-220.043 180.653c0-4.507-1.329-6.433-5.423-6.433h-2.634v12.606h3.243c3.165 0 4.814-1.507 4.814-6.173z"
            transform="translate(377.509 -148.763)"
            class="cls-1"></path>{" "}
          <path
            data-v-185b4889=""
            id="Path_1046"
            d="M-359.177 187.933c-3.066 0-4.11-2.525-4.367-6.192h-10.128c.218 7.583 3.532 13.771 14.393 13.771 10.023 0 14.339-5.882 14.339-13.265 0-7.509-3.515-11.034-11.793-15.2-4.857-2.428-5.854-3.747-5.854-6.305 0-2.492 1.02-3.972 3.3-3.972 2.914 0 3.483 2.673 3.654 5.784h9.88c-.086-6.858-3.064-13.362-13.471-13.362-8.849 0-13.517 5.011-13.517 12.65 0 6.565 2.929 9.944 10.686 13.949 5.254 2.693 6.808 4.51 6.808 7.6.005 2.535-.953 4.542-3.93 4.542z"
            transform="translate(375.038 -149.188)"
            class="cls-2"></path>{" "}
          <path
            data-v-185b4889=""
            id="Path_1047"
            d="M-331.128 185.1h8.149l1.566 9.561h10.659l-8.923-44.662H-334.1l-8.811 44.662h10.263zm3.9-26.523h.338c.564 4.107 1.543 11.376 2.557 17.892h-5.478c1.051-6.522 2.142-13.611 2.579-17.895z"
            transform="translate(375.56 -149.174)"
            class="cls-2"></path>{" "}
          <path
            data-v-185b4889=""
            id="Path_1048"
            d="M-290.88 194.657l9.76-44.662h-10.591l-2.8 17.489c-.911 5.661-2.015 11.663-2.473 16.984h-.295c-.461-5.156-1.306-11.389-2.261-17.113l-2.927-17.361h-10.878l9.67 44.662z"
            transform="translate(376.062 -149.174)"
            class="cls-2"></path>{" "}
          <path
            data-v-185b4889=""
            id="Path_1049"
            d="M-252.816 186.37h-15.308v-10.642h13.524v-8.353h-13.523v-8.984h14.137v-8.4h-24.2v44.662h24.172z"
            transform="translate(376.659 -149.174)"
            class="cls-2"></path>{" "}
          <path
            data-v-185b4889=""
            id="Path_1050"
            d="M-209.382 181.4c0-6.633-3.334-9.453-6.536-10.729 2.773-1.019 5.326-3.635 5.326-9.214 0-7.378-4.461-11.464-12.464-11.464h-14.855v44.662h14.511c8.632.002 14.018-4.399 14.018-13.255zm-18.557-23.9h2.841c3.142 0 4.569 1.425 4.569 4.939 0 3.451-.893 4.981-4.676 4.981h-2.735zm0 29.737v-12.606h2.639c4.093 0 5.423 1.926 5.423 6.433 0 4.666-1.648 6.173-4.818 6.173z"
            transform="translate(377.342 -149.174)"
            class="cls-2"></path>{" "}
          <path
            data-v-185b4889=""
            id="Rectangle_1581"
            d="M0 0H10.263V44.662H0z"
            transform="translate(172.805 0.82)"
            class="cls-2"></path>{" "}
          <path
            data-v-185b4889=""
            id="Path_1051"
            d="M-176.438 195.511c3.509 0 6.839-.89 8.769-4.365a30.8 30.8 0 0 0 .373 3.525h7.543V169.1h-14.657v8.058h4.391v2.857c0 4.815-.931 7.426-4.048 7.426-3.69 0-4.6-4.013-4.6-14.752 0-10.392.932-15.4 4.757-15.4 3.39 0 3.693 3.2 3.8 5.375h10.27c-.11-3.482-1.12-13.46-13.738-13.46-9.746 0-15.853 5.717-15.853 23.413-.001 16.211 4.082 22.894 12.993 22.894z"
            transform="translate(378.165 -149.188)"
            class="cls-2"></path>{" "}
          <path
            data-v-185b4889=""
            id="Path_1052"
            d="M-177.773 211.585c-.152 1.147-.546 3.02-1 5.32h2.09c-.465-2.386-.836-4.129-1.031-5.32z"
            transform="translate(378.346 -148.129)"
            class="cls-2"></path>{" "}
          <path
            data-v-185b4889=""
            id="Path_1053"
            d="M-375.015 201.135v29.329h220.056v-29.329zm9.4 21.234c-2.684 0-3.992-1.955-3.992-6.567 0-4.5 1.521-6.308 4.093-6.308 2.715 0 4.01 2.008 4.01 6.334.004 4.557-1.236 6.541-4.108 6.541zm13.881-.215h-2.43c-2.661-7.344-3.134-8.666-3.3-9.238h-.018c.093 1.536.095 3.371.095 5.6v3.635h-2.009v-12.459h2.534c2.576 6.888 3.072 8.2 3.222 8.812h.018c-.107-1.5-.111-3.332-.111-5.374v-3.438h1.994zm11.686 0l-.621-3.136h-2.884l-.618 3.136h-2.229l2.886-12.463h2.9l2.917 12.463zm10.049 0h-6.282v-12.462h2.235v10.559h4.264zm7.974 0h-6.283v-12.462h2.235v10.559h4.264zm9.06-5.069h-1.335v5.069h-2.235v-12.462h3.749a3.379 3.379 0 0 1 3.6 3.708c-.002 2.407-1.4 3.686-3.776 3.686zm12.73 1.962v.5a14.571 14.571 0 0 0 .168 2.61h-2.159a10.3 10.3 0 0 1-.214-2.631v-.454c0-1.666-.383-2.229-1.792-2.229h-.956v5.314h-2.22v-12.465h3.817c2.266 0 3.549 1.181 3.549 3.406a2.8 2.8 0 0 1-1.615 2.837c.968.452 1.424 1.272 1.424 3.113zm5.921 3.321c-2.683 0-3.991-1.955-3.991-6.567 0-4.5 1.521-6.308 4.092-6.308 2.716 0 4.01 2.008 4.01 6.334.003 4.558-1.236 6.542-4.109 6.542zm9.3-.215h-3.075v-12.461h3.248c3.205 0 4.45 2.055 4.45 5.976 0 4.208-1.193 6.487-4.623 6.487zm14.339-3.839c0 2.237-.873 4.056-3.883 4.056-2.964 0-3.827-1.711-3.827-4.057v-8.623h2.238v8.575c0 1.021.253 2.232 1.625 2.232 1.327 0 1.612-1.021 1.612-2.218v-8.589h2.234zm6.005 4.054c-3.544 0-3.95-3.113-3.95-6.462 0-4.036 1.183-6.413 4.083-6.413 3.305 0 3.561 2.834 3.611 3.832h-2.207c-.035-.424-.064-1.94-1.44-1.94-1.4 0-1.741 1.716-1.741 4.568 0 2.349.234 4.555 1.68 4.555 1.33 0 1.437-1.5 1.492-1.982h2.223c-.054.631-.292 3.843-3.75 3.843zm12.361-10.724h-2.662v10.509h-2.235v-10.508h-2.663v-1.954h7.561zm4.752 10.722c-2.865 0-3.738-1.836-3.817-3.7h2.222c.108 1.032.522 1.943 1.662 1.943 1.1 0 1.506-.689 1.506-1.615 0-1.024-.5-1.62-2.08-2.372-2.135-1.014-2.97-1.91-2.97-3.762a3.207 3.207 0 0 1 3.538-3.364c2.8 0 3.5 1.9 3.532 3.519h-2.186c-.072-.712-.255-1.761-1.385-1.761-.883 0-1.277.574-1.277 1.42 0 .9.4 1.317 1.861 2 2.235 1.033 3.239 2.038 3.239 4.124.002 1.95-1.211 3.569-3.844 3.569zm7.631-.211h-2.25v-2.825h2.25zm10.393 0h-6.419v-12.463h6.392v1.954h-4.189v3.034h4v1.936h-4v3.619h4.491zm6.965 0h-2.6l-3.095-12.463h2.4l1.142 5.288c.361 1.658.706 3.5.855 4.805h.037c.15-1.265.606-3.128.955-4.76l1.1-5.333h2.335zm11.043 0h-6.419v-12.463h6.393v1.954h-4.189v3.034h4v1.936h-4v3.619h4.491zm9.169-3.107v.5a14.671 14.671 0 0 0 .168 2.61h-2.158a10.243 10.243 0 0 1-.215-2.631v-.454c0-1.666-.382-2.229-1.792-2.229h-.956v5.314h-2.219v-12.466h3.816c2.265 0 3.549 1.181 3.549 3.406a2.8 2.8 0 0 1-1.616 2.837c.968.452 1.426 1.272 1.426 3.113zm6.692-1.677a1.107 1.107 0 0 0-.072.42v4.364h-2.235v-4.411a.894.894 0 0 0-.087-.4l-3.14-7.65h2.493c.7 1.954 1.551 4.359 1.921 5.725.456-1.531 1.314-3.865 1.942-5.725h2.356zm11.325 4.784h-3.073v-12.463h3.246c3.207 0 4.451 2.055 4.451 5.976.003 4.208-1.19 6.487-4.621 6.487zm12 0l-.621-3.136h-2.883l-.618 3.136h-2.239l2.886-12.463h2.9l2.914 12.463zm6.989-4.364v4.364h-2.235v-4.411a.894.894 0 0 0-.087-.4l-3.14-7.65h2.492c.7 1.954 1.552 4.359 1.922 5.725.456-1.531 1.314-3.865 1.942-5.725h2.356l-3.177 7.679a1.106 1.106 0 0 0-.072.418zm4.708 4.366h-2.25v-2.825h2.25z"
            transform="translate(375.015 -148.306)"
            class="cls-2"></path>{" "}
          <path
            data-v-185b4889=""
            id="Path_1054"
            d="M-187.51 211.375h-.817v8.783h.8c1.744 0 2.344-1.312 2.344-4.655-.003-2.867-.536-4.128-2.327-4.128z"
            transform="translate(378.184 -148.132)"
            class="cls-2"></path>{" "}
          <path
            data-v-185b4889=""
            id="Path_1055"
            d="M-208.839 211.327h-1.261v3.534h1.046c1.347 0 1.874-.58 1.874-1.84a1.487 1.487 0 0 0-1.659-1.694z"
            transform="translate(377.814 -148.133)"
            class="cls-2"></path>{" "}
          <path
            data-v-185b4889=""
            id="Path_1056"
            d="M-365.69 211.211c-1.334 0-1.754 1.622-1.754 4.4 0 2.956.448 4.715 1.756 4.715 1.377 0 1.771-1.628 1.771-4.711 0-2.896-.419-4.404-1.773-4.404z"
            transform="translate(375.144 -148.135)"
            class="cls-2"></path>{" "}
          <path
            data-v-185b4889=""
            id="Path_1057"
            d="M-342.682 211.585c-.151 1.147-.546 3.02-1 5.32h2.092c-.465-2.386-.838-4.129-1.033-5.32z"
            transform="translate(375.547 -148.129)"
            class="cls-2"></path>{" "}
          <path
            data-v-185b4889=""
            id="Path_1058"
            d="M-295.58 211.211c-1.333 0-1.753 1.622-1.753 4.4 0 2.956.447 4.715 1.755 4.715 1.378 0 1.771-1.628 1.771-4.711 0-2.896-.419-4.404-1.773-4.404z"
            transform="translate(376.334 -148.135)"
            class="cls-2"></path>{" "}
          <path
            data-v-185b4889=""
            id="Path_1059"
            d="M-314.108 211.327h-1.209v3.8h1.089c1.239 0 1.787-.612 1.787-1.928 0-1.252-.644-1.872-1.667-1.872z"
            transform="translate(376.028 -148.133)"
            class="cls-2"></path>{" "}
          <path
            data-v-185b4889=""
            id="Path_1060"
            d="M-286.509 211.375h-.817v8.783h.8c1.744 0 2.344-1.312 2.344-4.655-.002-2.867-.534-4.128-2.327-4.128z"
            transform="translate(376.504 -148.132)"
            class="cls-2"></path>{" "}
          <path
            data-v-185b4889=""
            id="Path_1061"
            d="M-305.085 211.327h-1.266v3.534h1.047c1.346 0 1.874-.58 1.874-1.84a1.487 1.487 0 0 0-1.655-1.694z"
            transform="translate(376.181 -148.133)"
            class="cls-2"></path>
        </svg>
      </Flex>
      <Flex className="bigText2Mem ">
        <Text className="bigText22Mem">Fun Facts</Text>
      </Flex>
      <Flex style={{ alignItems: "center", justifyContent: "center" }}>
        <Flex
          style={{
            margin: "10px",
            borderBottom: "2px solid #e76a52 ",
            padding: "10px",
          }}>
          <Text className="memberText" style={{ marginRight: "20px" }}>
            Membership Benefits
          </Text>
          <FaCrown
            style={{
              color: "#e76a52",
              fontSize: "2.2vw",
            }}
          />
        </Flex>
      </Flex>
      <Flex
        style={{
          flexDirection: "column",
          alignItems: "center",
          margin: "20px",
          flexWrap: "wrap",
        }}>
        <Flex
          style={{
            justifyContent: "space-evenly",
            width: "100%",
            flexWrap: "wrap",
          }}>
          <Flex>
            <img src={dis} alt="" width="135px" height="140px" />
            <Flex className="memberbox">
              <Text className="memberText2">BIG DISCOUNT</Text>
              <Text className="memberText3">
                Save big on ALL products every day. Why wait for a sale?
              </Text>
            </Flex>
          </Flex>
          <Flex>
            <img src={early} alt="" width="135px" height="140px" />
            <Flex className="memberbox">
              <Text className="memberText2">EARLY ACCESS </Text>
              <Text className="memberText3">
                Get your hands on select products and designs before others do.
              </Text>
            </Flex>
          </Flex>
        </Flex>
        <Flex
          style={{
            justifyContent: "space-evenly",
            width: "100%",
            flexWrap: "wrap",
          }}>
          <Flex>
            <img src={free} alt="" width="135px" height="140px" />
            <Flex className="memberbox">
              <Text className="memberText2">FREE DELIVERY</Text>
              <Text className="memberText3">
                Our shipping charges are on us.
              </Text>
            </Flex>
          </Flex>
          <Flex>
            <img src={ship} alt="" width="135px" height="140px" />
            <Flex className="memberbox">
              <Text className="memberText2">PRIORITISED SHIPPING </Text>
              <Text className="memberText3">
                We ship your orders before everyone else’s.
              </Text>
            </Flex>
          </Flex>
        </Flex>
        <Flex className="mem2container">
          <Flex className="heading1">BECOME A MEMBER</Flex>
          <Flex style={{ justifyContent: "space-evenly", flexWrap: "wrap" }}>
            <Flex className="memCardbox">
              <Flex style={{ width: "100%", alignContent: "center" }}>
                <Text className="cardTextHeading">MOST POPULAR</Text>
              </Flex>
              <Text className="cardTextCon ">12 Months</Text>
              <Text style={{ fontSize: "18px" }}>(₹ 16.5/ Month)</Text>
              <Text
                style={{
                  fontSize: "25px",
                  color: "#161b24",
                  fontWeight: "800",
                }}>
                ₹ 199
              </Text>
            </Flex>
            <Flex className="memCardbox">
              <Text className="cardTextCon mT20p ">3 Months</Text>
              <Text style={{ fontSize: "18px" }}>(₹ 49.6/ Month)</Text>
              <Text
                style={{
                  fontSize: "25px",
                  color: "#161b24",
                  fontWeight: "800",
                }}>
                ₹ 149
              </Text>
            </Flex>
            <Flex className="memCardbox">
              <Text className="cardTextCon mT20p ">1 Months</Text>
              <Text style={{ fontSize: "18px" }}>(₹ 99/ Month)</Text>
              <Text
                style={{
                  fontSize: "25px",
                  color: "#161b24",
                  fontWeight: "800",
                }}>
                ₹ 99
              </Text>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </>
  );
}
