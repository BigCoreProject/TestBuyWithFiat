import Link from "next/link";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.hero}>
          <div className={styles.heroBackground}>
            <div className={styles.heroBackgroundInner}>
              <Image
                src="/bg.png"
                width={1000}
                height={1500}
                alt="Background"
                quality={100}
                className={styles.gradient}
              />
            </div>
          </div>
          <div className={styles.heroAssetFrame}></div>
          <div className={styles.heroBodyContainer}>
            <div className={styles.heroBody}>
              <h1 className={styles.heroTitle}>
                <span className={styles.heroTitleGradient}>
                  Sinbad Staking Platform
                </span>
              </h1>
              <p>
                Sail the Crypto Seas with Sinbad and unlock the potential of the Sinbad Staking Platform.
              </p>
              <p>
                Join our community and stake your <b>Sinbad</b> tokens to earn lucrative <b>USDT</b> rewards.
              </p>
              <p>
                Explore seamless trading experiences with $Sinbad on DodoEx, the decentralized exchange built on the Polygon network.
              </p>
              <div className={styles.heroCtaContainer}>
                <Link className={styles.heroCta} href="https://app.dodoex.io/swap/network/polygon/137-MATIC/137-Sinbad">
                  Buy $Sinbad Now!
                </Link>
              </div>
              <div className={styles.heroCtaContainer}>
                <Link className={styles.heroCta} href="/about">
                  Explore Sinbad Token
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
