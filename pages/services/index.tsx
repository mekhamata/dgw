import Head from "next/head";
import Image from "next/image";
import styles from "./index.module.css";
import ContainerCom from "../../components/container";
import AboutImage from "../../components/svgs/AboutImage";
import ServiceImage from "../../components/svgs/ServicesImage";
import { Slide, Fade } from "react-awesome-reveal";
import IconComponent from "../../components/iconComponent";

// export default function Home() {
const Services = () => {
  return (
    <>
      <Head>
        <title>שירותים - DGW</title>
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
            <ServiceImage width={400} height={400} />
          </div>
        </div>
      </section>
      <section>
        <svg
          id="wave"
          style={{
            transform: `rotate(0deg)`,
            transition: `0.3s`,
            marginTop: `-5%`,
          }}
          viewBox="0 0 1440 100"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="sw-gradient-0-1" x1="0" x2="0" y1="1" y2="0">
              <stop stop-color="rgba(8, 139, 201, 1)" offset="0%"></stop>
              <stop stop-color="rgba(8, 139, 201, 1)" offset="100%"></stop>
            </linearGradient>
          </defs>
          <path
            style={{ transform: `translate(0, 0px)`, opacity: 1 }}
            fill="url(#sw-gradient-0-1)"
            d="M0,10L48,20C96,30,192,50,288,55C384,60,480,50,576,41.7C672,33,768,27,864,20C960,13,1056,7,1152,13.3C1248,20,1344,40,1440,41.7C1536,43,1632,27,1728,21.7C1824,17,1920,23,2016,35C2112,47,2208,63,2304,61.7C2400,60,2496,40,2592,31.7C2688,23,2784,27,2880,30C2976,33,3072,37,3168,46.7C3264,57,3360,73,3456,70C3552,67,3648,43,3744,36.7C3840,30,3936,40,4032,38.3C4128,37,4224,23,4320,15C4416,7,4512,3,4608,8.3C4704,13,4800,27,4896,26.7C4992,27,5088,13,5184,15C5280,17,5376,33,5472,33.3C5568,33,5664,17,5760,11.7C5856,7,5952,13,6048,16.7C6144,20,6240,20,6336,20C6432,20,6528,20,6624,21.7C6720,23,6816,27,6864,28.3L6912,30L6912,100L6864,100C6816,100,6720,100,6624,100C6528,100,6432,100,6336,100C6240,100,6144,100,6048,100C5952,100,5856,100,5760,100C5664,100,5568,100,5472,100C5376,100,5280,100,5184,100C5088,100,4992,100,4896,100C4800,100,4704,100,4608,100C4512,100,4416,100,4320,100C4224,100,4128,100,4032,100C3936,100,3840,100,3744,100C3648,100,3552,100,3456,100C3360,100,3264,100,3168,100C3072,100,2976,100,2880,100C2784,100,2688,100,2592,100C2496,100,2400,100,2304,100C2208,100,2112,100,2016,100C1920,100,1824,100,1728,100C1632,100,1536,100,1440,100C1344,100,1248,100,1152,100C1056,100,960,100,864,100C768,100,672,100,576,100C480,100,384,100,288,100C192,100,96,100,48,100L0,100Z"
          ></path>
        </svg>
        <div
          className={styles.container}
          style={{ background: "#088bc9", marginTop: `-2px` }}
        >
          <Fade>
            <ContainerCom>
              <div className={styles.whatWeDo}>
                <div className={styles.sectionDarkTitle}>
                  <h1>השירותים שלנו</h1>
                </div>
                <div className={`${styles.whySpecWe}`}>
                  <div className="text-white lg:text-2xl md:text-s text-center">
                    זה הכוח שאתם צוברים ברגע שמחליטים להצטרף...
                  </div>
                  <ul className={styles.cardsList}>
                    <li>
                      <div className={styles.cardContainer}>
                        <div className={styles.cardContainerInside}>
                          <div className={styles.cardContainerInsideBg}>
                            <div className={styles.cardIcon}>
                              <IconComponent
                                name="globe"
                                type="fas"
                                className=""
                              />
                            </div>
                            <div className={`${styles.cardTitle} text-sky-900`}>
                              בניית אתרים
                            </div>
                            <div className={styles.cardDesc}>
                              <p>
                                אנו שואפים להיות היעד הראשון שלך. אנו מספקים לך
                                שירות בניית אתרים מקצועי באמצעות המפתחים
                                המקצועיים והיעילים ביותר כדי להעניק לך שירות
                                מקצועי ואיכות בו זמנית.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className={styles.cardContainer}>
                        <div className={styles.cardContainerInside}>
                          <div className={styles.cardContainerInsideBg}>
                            <div className={styles.cardIcon}>
                              <IconComponent
                                name="basket-shopping"
                                type="fas"
                                className=""
                              />
                            </div>
                            <div className={`${styles.cardTitle} text-sky-900`}>
                              בניית חנות מסחרית
                            </div>
                            <div className={styles.cardDesc}>
                              <p>
                                מחפשים דרך יעילה לפתח את העסק שלכם ולהגדיל את
                                המכירות? עיצוב חנות מקוונת הוא הפתרון שאתם
                                צריכים, מכיוון שהצוות שלנו פועל להפיץ את הפעילות
                                שלכם ולהפוך אותה ממטה חנות לפעילות מקוונת
                                באינטרנט.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>

                    <li>
                      <div className={styles.cardContainer}>
                        <div className={styles.cardContainerInside}>
                          <div className={styles.cardContainerInsideBg}>
                            <div className={styles.cardIcon}>
                              <IconComponent
                                name="palette"
                                type="fas"
                                className=""
                              />
                            </div>
                            <div className={`${styles.cardTitle} text-sky-900`}>
                              עיצוב אתרים
                            </div>
                            <div className={styles.cardDesc}>
                              <p>
                                המקצועיות וההצלחה של העסק שלך תלויות בעיקר
                                באיכות וברעיון הזהות הארגונית שלך ובעיצוב לוגו
                                מקצועי שעוזר לך ליצור מותג שמשתרש בראש הקהל שלך
                                מהר יותר.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className={styles.cardContainer}>
                        <div className={styles.cardContainerInside}>
                          <div className={styles.cardContainerInsideBg}>
                            <div className={styles.cardIcon}>
                              <IconComponent
                                name="server"
                                type="fas"
                                className=""
                              />
                            </div>
                            <div className={`${styles.cardTitle} text-sky-900`}>
                              אחסון אתרים
                            </div>
                            <div className={styles.cardDesc}>
                              <p>
                                אחסון בענן הוא סוג מתקדם של אחסון אתרים בו אתר
                                אחד מתארח ביותר משרת אחד בו זמנית על מנת להבטיח
                                שהאתר יעבוד ביעילות וללא השבתה.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className={styles.cardContainer}>
                        <div className={styles.cardContainerInside}>
                          <div className={styles.cardContainerInsideBg}>
                            <div className={styles.cardIcon}>
                              <IconComponent
                                name="wand-magic-sparkles"
                                type="fas"
                                className=""
                              />
                            </div>
                            <div className={`${styles.cardTitle} text-sky-900`}>
                              מיתוג עסקי
                            </div>
                            <div className={styles.cardDesc}>
                              <p>
                                אנו מציעים לך עיצוב זהות עסקית שעוזרת לך לשכנע
                                לקוחות באיכות העסק שלך לפני שאתה פונה אליהם.
                                אנחנו בDGW מקפידים ליצור זהות מסחרית במקצועיות
                                ויצירתיות התורמים להשקת מותגים מדהימים.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className={styles.cardContainer}>
                        <div className={styles.cardContainerInside}>
                          <div className={styles.cardContainerInsideBg}>
                            <div className={styles.cardIcon}>
                              <IconComponent
                                name="check"
                                type="fas"
                                className=""
                              />
                            </div>
                            <div className={`${styles.cardTitle} text-sky-900`}>
                              אופטימיזציה SEO
                            </div>
                            <div className={styles.cardDesc}>
                              <p>
                                ארכיון אתרים במנועי חיפוש באמצעות מומחי ארכיון,
                                בנוסף להסבר כיצד לאחסן אתרים בארכיון בגוגל
                                והוספת האתר שלך כדי לעזור לו להופיע במנועי
                                החיפוש של גוגל, וכן הכנת האתר (אופטימיזציה
                                למנועי חיפוש) לעלות לתוצאות הראשונות ב דף תוצאות
                                החיפוש.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                  </ul>
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
            <linearGradient id="sw-gradient-4" x1="0" x2="0" y1="1" y2="0">
              <stop stop-color="rgba(8, 139, 201, 1)" offset="0%"></stop>
              <stop stop-color="rgba(8, 139, 201, 1)" offset="100%"></stop>
            </linearGradient>
          </defs>
          <path
            style={{ transform: `translate(0, 0px)`, opacity: 1 }}
            fill="url(#sw-gradient-4)"
            d="M0,15L34.3,20C68.6,25,137,35,206,55C274.3,75,343,105,411,102.5C480,100,549,65,617,52.5C685.7,40,754,50,823,45C891.4,40,960,20,1029,15C1097.1,10,1166,20,1234,27.5C1302.9,35,1371,40,1440,57.5C1508.6,75,1577,105,1646,105C1714.3,105,1783,75,1851,60C1920,45,1989,45,2057,55C2125.7,65,2194,85,2263,92.5C2331.4,100,2400,95,2469,85C2537.1,75,2606,60,2674,57.5C2742.9,55,2811,65,2880,60C2948.6,55,3017,35,3086,32.5C3154.3,30,3223,45,3291,55C3360,65,3429,70,3497,65C3565.7,60,3634,45,3703,42.5C3771.4,40,3840,50,3909,55C3977.1,60,4046,60,4114,72.5C4182.9,85,4251,110,4320,102.5C4388.6,95,4457,55,4526,42.5C4594.3,30,4663,45,4731,65C4800,85,4869,110,4903,122.5L4937.1,135L4937.1,150L4902.9,150C4868.6,150,4800,150,4731,150C4662.9,150,4594,150,4526,150C4457.1,150,4389,150,4320,150C4251.4,150,4183,150,4114,150C4045.7,150,3977,150,3909,150C3840,150,3771,150,3703,150C3634.3,150,3566,150,3497,150C3428.6,150,3360,150,3291,150C3222.9,150,3154,150,3086,150C3017.1,150,2949,150,2880,150C2811.4,150,2743,150,2674,150C2605.7,150,2537,150,2469,150C2400,150,2331,150,2263,150C2194.3,150,2126,150,2057,150C1988.6,150,1920,150,1851,150C1782.9,150,1714,150,1646,150C1577.1,150,1509,150,1440,150C1371.4,150,1303,150,1234,150C1165.7,150,1097,150,1029,150C960,150,891,150,823,150C754.3,150,686,150,617,150C548.6,150,480,150,411,150C342.9,150,274,150,206,150C137.1,150,69,150,34,150L0,150Z"
          ></path>
        </svg>
      </section>
      <section>
        <svg
          id="wave"
          style={{
            transform: `rotate(0deg)`,
            transition: `0.3s`,
            marginTop: `-10%`,
          }}
          viewBox="0 0 1440 150"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="sw-gradient-5" x1="0" x2="0" y1="1" y2="0">
              <stop stop-color="rgba(3, 221, 248, 1)" offset="0%"></stop>
              <stop stop-color="rgba(3, 221, 248, 1)" offset="100%"></stop>
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
          style={{ background: "#03ddf8", marginTop: `-2px` }}
        >
          <Fade>
            <ContainerCom>
              <div className={styles.whatWeDo}>
                <div
                  className={styles.sectionDarkTitle}
                  style={{ color: "#133241" }}
                >
                  <h2>טכנולוגיה מתקדמת</h2>
                </div>
                <div
                  className={`${styles.whySpecWe}`}
                  style={{ textAlign: "center" }}
                >
                  <div className="text-white lg:text-2xl md:text-s">
                    בחרנו עבורכם את מיטב הטכנולוגיות המשומשות בבניית אתרי
                    אינטרנט מקצועיים, אכותיים ומתקדמים...
                  </div>
                  <div>
                    <ul className={styles.technoList}>
                      <li>
                        <div className={styles.techContainer}>
                          <Image
                            alt="React"
                            src="/about/react.png"
                            width={100}
                            height={100}
                          />
                        </div>
                      </li>
                      <li>
                        <div className={styles.techContainer}>
                          <Image
                            alt="React"
                            src="/about/nodejs.png"
                            width={100}
                            height={100}
                          />
                        </div>
                      </li>
                      <li>
                        <div className={styles.techContainer}>
                          <Image
                            alt="React"
                            src="/about/php.png"
                            width={100}
                            height={100}
                          />
                        </div>
                      </li>
                      <li>
                        <div className={styles.techContainer}>
                          <Image
                            alt="React"
                            src="/about/css3.png"
                            width={100}
                            height={100}
                          />
                        </div>
                      </li>
                      <li>
                        <div className={styles.techContainer}>
                          <Image
                            alt="React"
                            src="/about/html5.png"
                            width={100}
                            height={100}
                          />
                        </div>
                      </li>
                      <li>
                        <div className={styles.techContainer}>
                          <Image
                            alt="React"
                            src="/about/mongodb.png"
                            width={100}
                            height={100}
                          />
                        </div>
                      </li>
                      <li>
                        <div className={styles.techContainer}>
                          <Image
                            alt="React"
                            src="/about/mysql.png"
                            width={100}
                            height={100}
                          />
                        </div>
                      </li>
                      <li>
                        <div className={styles.techContainer}>
                          <Image
                            alt="React"
                            src="/about/linux.png"
                            width={100}
                            height={100}
                          />
                        </div>
                      </li>
                    </ul>
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
              <stop stop-color="rgba(3, 221, 248, 1)" offset="0%"></stop>
              <stop stop-color="rgba(3, 221, 248, 1)" offset="100%"></stop>
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
export default Services;
