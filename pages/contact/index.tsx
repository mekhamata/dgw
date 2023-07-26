import Head from "next/head";
import Image from "next/image";
import styles from "./index.module.css";
import ContainerCom from "../../components/container";
import ContactImage from "../../components/svgs/ContactImage";
import { Slide, Fade } from "react-awesome-reveal";
import IconComponent from "../../components/iconComponent";
import NavLink from "../../components/NavLink";
import emailjs from "@emailjs/browser";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import validator from "validator";

// export default function Home() {
const Contact = () => {
  const notify = (msg: string, type: string) => {
    toast.dismiss();
    if (type === "success") {
      return toast.success(
        <div style={{ textAlign: "center", direction: "rtl" }}>{msg}</div>,
        {
          theme: "colored",
        }
      );
    } else {
      return toast.error(
        <div style={{ textAlign: "center", direction: "rtl" }}>{msg}</div>,
        {
          theme: "colored",
        }
      );
    }
  };
  const [from_email, setFromEmail] = useState("");
  const [full_name, setFull_name] = useState("");
  const [message, setMessage] = useState("");
  const [subject, setSubject] = useState("");
  const [phone, setPhone] = useState("");
  const [sendStatus, setSendStatus] = useState(false);
  const sendForm = () => {
    setSendStatus(true);
    if (
      validator.isAlpha(full_name, "he", {
        ignore: " ",
      }) ||
      validator.isAlpha(full_name, "en-US", {
        ignore: " ",
      })
    ) {
      console.log("valid name");
    } else {
      notify(`השם מכיל אותיות בעברית או בלועזית בלבד!`, "error");
      setSendStatus(false);
      return;
    }
    ////
    if (validator.isEmail(from_email)) {
      console.log("valid email");
    } else {
      // alert("Enter valid Email!");
      notify(`הדוא"ל אינו תקין!`, "error");
      setSendStatus(false);
      return;
    }
    ///
    if (validator.isMobilePhone(phone, ["he-IL"])) {
      console.log("valid phone");
    } else {
      notify(`הטלפון צריך להיות ישראלי מ 10 ספרות!`, "error");
      setSendStatus(false);
      return;
    }
    ///
    if (subject.trim() != "") {
      if (
        validator.isAlphanumeric(subject, "he", {
          ignore: " ,.?:@()[]-_",
        }) ||
        validator.isAlphanumeric(subject, "en-US", {
          ignore: " ,.?:@()[]-_",
        })
      ) {
        console.log("valid subject");
      } else {
        notify(`הנושא יכול להכיל אותיות בעברית, בלועזית.`, "error");
        setSendStatus(false);
        return;
      }
    }
    ///
    if (
      validator.isAlphanumeric(message, "he", {
        ignore: ` ,.?:@()[]-_(\r\n|\r|\n)`,
      }) ||
      validator.isAlphanumeric(message, "en-US", {
        ignore: ` ,.?:@()[]-_(\r\n|\r|\n)`,
      })
    ) {
      console.log("valid message");
    } else {
      notify(`ההודעה יכולה להכיל אותיות בעברית, בלועזית.`, "error");
      setSendStatus(false);
      return;
    }

    var templateParams = {
      from_name: full_name,
      to_name: "mikha matta",
      message: message,
      subject: subject,
      from_email: from_email,
      phone: phone,
    };

    emailjs
      .send(
        "service_y0z1qup",
        "template_dm1k45s",
        templateParams,
        `${process.env.NEXT_PUBLIC_EMAILJS_PRIVATE}`
      )
      .then(
        function (response) {
          notify(`קיבלנו את הפניה שלך! נחזור אליך בהקדם אפשרי.`, "success");
          setFromEmail("");
          setFull_name("");
          setPhone("");
          setSubject("");
          setMessage("");
          setSendStatus(false);
        },
        function (error) {
          setSendStatus(false);
          notify(`בעיה בשליחת הטופס, נא להתקשר טלפונית.`, "error");
        }
      );
  };
  return (
    <>
      <Head>
        <title>צרו קשר - DGW</title>
        <meta
          name="description"
          content="DGW – דיגיטל וויב הינה חברה המתמחה בעיצוב ופיתוח אתרי אינטרנט ומערכות אינטרנט משולבות. ל- DGW יש יותר מ-15 שנות ניסיון במתן שירותי תכנות מקצועיים."
        />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://dgw.co.il/" />
        <meta property="og:title" content="ראשי - DGW" />
        <meta
          property="og:description"
          content="DGW – דיגיטל וויב הינה חברה המתמחה בעיצוב ופיתוח אתרי אינטרנט ומערכות אינטרנט משולבות. ל- DGW יש יותר מ-15 שנות ניסיון במתן שירותי תכנות מקצועיים."
        />
        <meta
          property="og:image"
          content="https://dgw.co.il/_next/image?url=%2Flogo3.png&w=256&q=75"
        />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://dgw.co.il/" />
        <meta property="twitter:title" content="ראשי - DGW" />
        <meta
          property="twitter:description"
          content="DGW – דיגיטל וויב הינה חברה המתמחה בעיצוב ופיתוח אתרי אינטרנט ומערכות אינטרנט משולבות. ל- DGW יש יותר מ-15 שנות ניסיון במתן שירותי תכנות מקצועיים."
        />
        <meta
          property="twitter:image"
          content="https://dgw.co.il/_next/image?url=%2Flogo3.png&w=256&q=75"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section>
        <div className={styles.container}>
          <div className={styles.aboutImage}>
            <ContactImage width={400} height={400} />
          </div>
        </div>
      </section>
      <section>
        <svg
          id="wave"
          style={{
            transform: `rotate(0deg)`,
            transition: `0.3s`,
            marginTop: `-3%`,
          }}
          viewBox="0 0 1440 150"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="sw-gradient-5" x1="0" x2="0" y1="1" y2="0">
              <stop stop-color="rgba(13, 97, 137, 1)" offset="0%"></stop>
              <stop stop-color="rgba(13, 97, 137, 1)" offset="100%"></stop>
            </linearGradient>
          </defs>
          <path
            style={{ transform: `translate(0, 0px)`, opacity: 1 }}
            fill="url(#sw-gradient-5)"
            d="M0,15L34.3,20C68.6,25,137,35,206,55C274.3,75,343,105,411,102.5C480,100,549,65,617,52.5C685.7,40,754,50,823,45C891.4,40,960,20,1029,15C1097.1,10,1166,20,1234,27.5C1302.9,35,1371,40,1440,57.5C1508.6,75,1577,105,1646,105C1714.3,105,1783,75,1851,60C1920,45,1989,45,2057,55C2125.7,65,2194,85,2263,92.5C2331.4,100,2400,95,2469,85C2537.1,75,2606,60,2674,57.5C2742.9,55,2811,65,2880,60C2948.6,55,3017,35,3086,32.5C3154.3,30,3223,45,3291,55C3360,65,3429,70,3497,65C3565.7,60,3634,45,3703,42.5C3771.4,40,3840,50,3909,55C3977.1,60,4046,60,4114,72.5C4182.9,85,4251,110,4320,102.5C4388.6,95,4457,55,4526,42.5C4594.3,30,4663,45,4731,65C4800,85,4869,110,4903,122.5L4937.1,135L4937.1,150L4902.9,150C4868.6,150,4800,150,4731,150C4662.9,150,4594,150,4526,150C4457.1,150,4389,150,4320,150C4251.4,150,4183,150,4114,150C4045.7,150,3977,150,3909,150C3840,150,3771,150,3703,150C3634.3,150,3566,150,3497,150C3428.6,150,3360,150,3291,150C3222.9,150,3154,150,3086,150C3017.1,150,2949,150,2880,150C2811.4,150,2743,150,2674,150C2605.7,150,2537,150,2469,150C2400,150,2331,150,2263,150C2194.3,150,2126,150,2057,150C1988.6,150,1920,150,1851,150C1782.9,150,1714,150,1646,150C1577.1,150,1509,150,1440,150C1371.4,150,1303,150,1234,150C1165.7,150,1097,150,1029,150C960,150,891,150,823,150C754.3,150,686,150,617,150C548.6,150,480,150,411,150C342.9,150,274,150,206,150C137.1,150,69,150,34,150L0,150Z"
          ></path>
        </svg>
        <div
          className={styles.container}
          style={{ background: "#0d6189", marginTop: `-2px` }}
        >
          <Fade>
            <ContainerCom>
              <div className={styles.whatWeDo}>
                <div className={styles.sectionDarkTitle}>
                  <h1>צרו קשר</h1>
                </div>
                <div
                  className={`${styles.whySpecWe}`}
                  style={{ textAlign: "center" }}
                >
                  <div className="text-white lg:text-2xl md:text-s">
                    נשמח לענות על השאלות שלכם בכל עת..
                  </div>
                  <div className={styles.contactContainer}>
                    <div className={styles.contactText}>
                      <ul>
                        <li>
                          <NavLink
                            href="mailto:support@dgw.co.il"
                            className={styles.contactLinks}
                            activeClassName=""
                          >
                            <IconComponent
                              name="envelope"
                              type="fas"
                              className={styles.contactLinksIcons}
                            />
                            support@dgw.co.il
                          </NavLink>
                        </li>
                        <li>
                          <NavLink
                            href="tel:0547379277"
                            className={styles.contactLinks}
                            activeClassName=""
                          >
                            <IconComponent
                              name="phone"
                              type="fas"
                              className={styles.contactLinksIcons}
                            />
                            054-7379277
                          </NavLink>
                        </li>
                        <li>
                          <NavLink
                            href="https://wa.link/62zvnv"
                            target="_blank"
                            className={styles.contactLinks}
                            activeClassName=""
                          >
                            <IconComponent
                              name="whatsapp"
                              type="fab"
                              className={styles.contactLinksIcons}
                            />
                            054-7379277
                          </NavLink>
                        </li>
                        <li>
                          <NavLink
                            href="https://www.instagram.com/dgw.co.il/"
                            className={styles.contactLinks}
                            activeClassName=""
                            target="_blank"
                          >
                            <IconComponent
                              name="instagram"
                              type="fab"
                              className={styles.contactLinksIcons}
                            />
                            עקבו אחרינו באינסטאגרם
                          </NavLink>
                        </li>
                        <li>
                          <NavLink
                            href=""
                            className={styles.contactLinks}
                            activeClassName=""
                            target="_blank"
                          >
                            <IconComponent
                              name="linkedin"
                              type="fab"
                              className={styles.contactLinksIcons}
                            />
                            עקבו אחרינו בלינקד-אין
                          </NavLink>
                        </li>
                      </ul>
                    </div>
                    <div className={styles.contactForm}>
                      <form
                        // onSubmit={handleSubmit}
                        className="rounded-lg flex flex-col"
                      >
                        <label
                          htmlFor="fullname"
                          className="text-white font-light"
                        >
                          שם מלא
                          <span className="text-red-500">*</span>
                        </label>
                        <div className="relative">
                          <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                            <svg
                              fill="none"
                              stroke="currentColor"
                              stroke-width="1.5"
                              className="w-5 h-5 text-gray-500 dark:text-gray-400"
                              viewBox="0 0 24 24"
                              xmlns="http://www.w3.org/2000/svg"
                              aria-hidden="true"
                            >
                              <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                              ></path>
                            </svg>
                          </div>
                          <input
                            type="text"
                            className="bg-gray-50 border border-gray-300 text-sky-900 text-sm rounded-lg focus:ring-sky-900 focus:border-sky-900 block w-full pr-10 p-2.5  border-sky-900 placeholder-gray-400 focus:ring-sky-900 focus:border-sky-900"
                            placeholder="שמך המלא/ שם החברה"
                            onChange={(e) => setFull_name(e.target.value)}
                            value={full_name}
                          />
                        </div>

                        <label
                          htmlFor="email"
                          className="text-white font-light mt-2"
                        >
                          דוא"ל
                          <span className="text-red-500">*</span>
                        </label>
                        <div className="relative">
                          <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                            <svg
                              aria-hidden="true"
                              className="w-5 h-5 text-gray-500 dark:text-gray-400"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                              <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                            </svg>
                          </div>
                          <input
                            type="email"
                            className="bg-gray-50 border border-gray-300 text-sky-900 text-sm rounded-lg focus:ring-sky-900 focus:border-sky-900 block w-full pr-10 p-2.5  border-sky-900 placeholder-gray-400 focus:ring-sky-900 focus:border-sky-900"
                            placeholder="name@example.com"
                            onChange={(e) => setFromEmail(e.target.value)}
                            value={from_email}
                          />
                        </div>
                        <label
                          htmlFor="phone"
                          className="text-white font-light mt-2"
                        >
                          טלפון
                          <span className="text-red-500">*</span>
                        </label>
                        <div className="relative">
                          <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                            <svg
                              aria-hidden="true"
                              className="w-5 h-5 text-gray-500 dark:text-gray-400"
                              fill="currentColor"
                              viewBox="0 0 512 512"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              {/*! Font Awesome Free 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. */}
                              <path d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z" />
                            </svg>
                          </div>
                          <input
                            type="email"
                            className="bg-gray-50 border border-gray-300 text-sky-900 text-sm rounded-lg focus:ring-sky-900 focus:border-sky-900 block w-full pr-10 p-2.5  border-sky-900 placeholder-gray-400 focus:ring-sky-900 focus:border-sky-900"
                            placeholder="050xxxxxxx"
                            onChange={(e) => setPhone(e.target.value)}
                            value={phone}
                          />
                        </div>

                        <label
                          htmlFor="message"
                          className="text-white font-light mt-2"
                        >
                          נושא
                        </label>
                        <div className="relative">
                          <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                            <svg
                              fill="none"
                              className="w-5 h-5 text-gray-500 dark:text-gray-400"
                              stroke="currentColor"
                              stroke-width="1.5"
                              viewBox="0 0 24 24"
                              xmlns="http://www.w3.org/2000/svg"
                              aria-hidden="true"
                            >
                              <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125"
                              ></path>
                            </svg>
                          </div>
                          <input
                            type="text"
                            className="bg-gray-50 border border-gray-300 text-sky-900 text-sm rounded-lg focus:ring-sky-900 focus:border-sky-900 block w-full pr-10 p-2.5  border-sky-900 placeholder-gray-400 focus:ring-sky-900 focus:border-sky-900"
                            placeholder="נושא..."
                            onChange={(e) => setSubject(e.target.value)}
                            value={subject}
                          />
                        </div>

                        <label
                          htmlFor="message"
                          className="text-white font-light mt-2"
                        >
                          הודעה<span className="text-red-500">*</span>
                        </label>
                        <div className="relative">
                          <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                            <svg
                              fill="none"
                              stroke="currentColor"
                              className="w-5 h-5 text-gray-500 dark:text-gray-400 opacity-50"
                              stroke-width="1.5"
                              viewBox="0 0 24 24"
                              xmlns="http://www.w3.org/2000/svg"
                              aria-hidden="true"
                            >
                              <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z"
                              ></path>
                            </svg>
                          </div>
                          <textarea
                            id="message"
                            rows={4}
                            className="bg-gray-50 border border-gray-300 text-sky-900 text-sm rounded-lg focus:ring-sky-900 focus:border-sky-900 block w-full pr-10 p-2.5  border-sky-900 placeholder-gray-400 focus:ring-sky-900 focus:border-sky-900"
                            placeholder="השאירו הודעה..."
                            onChange={(e) => setMessage(e.target.value)}
                            value={message}
                          ></textarea>
                        </div>

                        <div className="flex flex-row items-center justify-start mt-3">
                          <button
                            type="button"
                            disabled={sendStatus}
                            onClick={() => {
                              sendForm();
                            }}
                            className={`${
                              !sendStatus
                                ? "bg-sky-900 hover:bg-sky-500 hover:border-sky-900 border-sky-500"
                                : "bg-red-400 hover:border-red-400 border-red-400"
                            }  text-white font-bold py-2 px-4 border-b-4   rounded`}
                          >
                            שלח/י
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </ContainerCom>
          </Fade>
        </div>
        <svg
          id="wave4"
          style={{
            transform: `rotate(180deg)`,
            transition: `0.3s`,
            marginTop: `-2px`,
          }}
          viewBox="0 0 1440 150"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="sw-gradient-5" x1="0" x2="0" y1="1" y2="0">
              <stop stop-color="rgba(13, 97, 137, 1)" offset="0%"></stop>
              <stop stop-color="rgba(13, 97, 137, 1)" offset="100%"></stop>
            </linearGradient>
          </defs>
          <path
            style={{ transform: `translate(0, 0px)`, opacity: 1 }}
            fill="url(#sw-gradient-5)"
            d="M0,15L34.3,20C68.6,25,137,35,206,55C274.3,75,343,105,411,102.5C480,100,549,65,617,52.5C685.7,40,754,50,823,45C891.4,40,960,20,1029,15C1097.1,10,1166,20,1234,27.5C1302.9,35,1371,40,1440,57.5C1508.6,75,1577,105,1646,105C1714.3,105,1783,75,1851,60C1920,45,1989,45,2057,55C2125.7,65,2194,85,2263,92.5C2331.4,100,2400,95,2469,85C2537.1,75,2606,60,2674,57.5C2742.9,55,2811,65,2880,60C2948.6,55,3017,35,3086,32.5C3154.3,30,3223,45,3291,55C3360,65,3429,70,3497,65C3565.7,60,3634,45,3703,42.5C3771.4,40,3840,50,3909,55C3977.1,60,4046,60,4114,72.5C4182.9,85,4251,110,4320,102.5C4388.6,95,4457,55,4526,42.5C4594.3,30,4663,45,4731,65C4800,85,4869,110,4903,122.5L4937.1,135L4937.1,150L4902.9,150C4868.6,150,4800,150,4731,150C4662.9,150,4594,150,4526,150C4457.1,150,4389,150,4320,150C4251.4,150,4183,150,4114,150C4045.7,150,3977,150,3909,150C3840,150,3771,150,3703,150C3634.3,150,3566,150,3497,150C3428.6,150,3360,150,3291,150C3222.9,150,3154,150,3086,150C3017.1,150,2949,150,2880,150C2811.4,150,2743,150,2674,150C2605.7,150,2537,150,2469,150C2400,150,2331,150,2263,150C2194.3,150,2126,150,2057,150C1988.6,150,1920,150,1851,150C1782.9,150,1714,150,1646,150C1577.1,150,1509,150,1440,150C1371.4,150,1303,150,1234,150C1165.7,150,1097,150,1029,150C960,150,891,150,823,150C754.3,150,686,150,617,150C548.6,150,480,150,411,150C342.9,150,274,150,206,150C137.1,150,69,150,34,150L0,150Z"
          ></path>
        </svg>
      </section>
    </>
  );
};
export default Contact;
