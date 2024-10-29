"use client";

import { useState } from 'react';
import dynamic from 'next/dynamic'; // Import dynamic
import Image from 'next/image';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import styles from '../styles/Home.module.css';

//eslint-disable react/no-unescaped-entities

// Dynamically import the Carousel only on the client side
const Carousel = dynamic(() => import('react-multi-carousel'), { ssr: false });
import 'react-multi-carousel/lib/styles.css';

export default function HomePage() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const router = useRouter();

  const [activeTab, setActiveTab] = useState('research');

  const handleSignUp = () => router.push('/signup');
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const researchItems = [
    'Accurate financial data on 100,000+ global public companies',
    'Company revenue and profit segments & KPIs',
    'Analyst estimates, price targets & ratings',
    'Utilize cutting-edge AI to build summaries, models and visualizations',
    'Transcripts',
    'Filings',
    'Dividend history',
    'Insider and institutional ownership',
  ];

  const toolsItems = [
    'AI assistant',
    'Stock screener',
    'Data visualizations',
    'DCF modelling',
    'Portfolio and watchlist dashboarding',
    'Notifications',
    'Competitor comparisons',
    'Upload documents',
    'Earnings calendar',
  ];

  const currentItems = activeTab === 'research' ? researchItems : toolsItems;

  const responsive = {
    superLargeDesktop: { breakpoint: { max: 4000, min: 1024 }, items: 5 },
    desktop: { breakpoint: { max: 1024, min: 768 }, items: 4 },
    tablet: { breakpoint: { max: 768, min: 464 }, items: 3 },
    mobile: { breakpoint: { max: 464, min: 0 }, items: 2 },
  };

  const logos = [
    '/images/delorean.png',
    '/images/mckinsey.png',
    '/images/rvc.png',
    '/images/stoller.png',
    '/images/svn.png',
    '/images/td.png',
    '/images/woodlock.png',
    '/images/baskin.png',
  ];

  return (
    <>
      <Head>
        <title>FinChat – The Future of Investment Research</title>
        <meta name="description" content="Seamlessly manage financial conversations with ease and security." />
        <link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&display=swap" rel="stylesheet" />
      </Head>

      <div className={isDarkMode ? styles.dark : styles.light}>
        <nav className={styles.navbar}>
          <div className={styles.logo}>
            <Link href="/">
              <Image src={isDarkMode ? "/images/logo-dark.png" : "/images/logo.png"} alt="FinChat Logo" width={150} height={50} />
            </Link>
          </div>

          <ul className={styles.navLinks}>
            <li><Link href="/pricing">Pricing</Link></li>
            <li><Link href="/api">API</Link></li>
            <li><Link href="/login">Login</Link></li>
            <li><button className={styles.signupButton} onClick={handleSignUp}>Sign Up Free</button></li>
            <li>
              <button className={styles.toggleButton} onClick={() => setIsDarkMode(!isDarkMode)}>
                <Image src={isDarkMode ? "/images/idea-light.png" : "/images/idea.png"} alt="Toggle Dark Mode" width={30} height={30} />
              </button>
            </li>
          </ul>
        </nav>

        <header className={styles.hero}>
          <div className={styles.heroContent}>
            <span className={styles.badge}>FinChat v4 is now live! 🎉</span>
            <h1 className={styles.heroText}>The future of investment research, powered by AI.</h1>

            <div className={styles.boxContainer}>
              <div className={styles.clickableBox} onClick={openModal}>Write me a slide deck outline for ASML.</div>
              <div className={styles.clickableBox} onClick={openModal}>Provide Costco&apos;s EV/EBITDA ratio.</div>
              <div className={styles.clickableBox} onClick={openModal}>How is EQB Inc managing its loan losses as of late?</div>
              <div className={styles.clickableBox} onClick={openModal}>What has Airbnb management said about profitability over the last few earnings calls?</div>
            </div>
          </div>

          <div className={styles.searchContainer}>
            <div className={styles.searchWrapper}>
              <input type="text" placeholder="Search your next investment idea..." className={styles.searchBar} />
            </div>
          </div>
        </header>

       {/* New Section with Overlay */}
        <div className={styles.animatedSection}>
          <Image
            src="/images/lvmh-chart.png"
            alt="LVMH Chart"
            className={styles.leftImage}
            width={400}
            height={500}
          />
          <Image
            src="/images/notifications.png"
            alt="Notifications"
            className={styles.rightImage}
            width={350}
            height={350}
          />
          <Image
            src="/images/table2.png"
            alt="Table Overlay"
            className={styles.tableOverlayImage}
            width={280}
            height={280}
          />
          <h1 className={styles.animatedHeading}>
            The new standard for fundamental research.
          </h1>
        </div>


        <div className={styles.betterDataSection}>
          <div className={styles.betterDataWrapper}>
            <Image src="/images/table.png" alt="Data Table" width={500} height={300} className={styles.betterDataImage} />
            <div className={styles.betterDataText}>
              <h2>Better data for better decisions.</h2>
              <p><span className={styles.highlight}>Institutional-quality data</span> that&apos;s been verified by human equity analysts. Our trusted, in-depth information helps you capitalize on opportunities.</p>
              <div className={styles.badges}>
                <span>Financials and estimates by S&P Market Intelligence</span>
                <span>Segments and KPIs by FinChat Verified Data</span>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.sectionWithCircleLight}>
          <div className={styles.contentWrapper}>
            <h1>Your own AI assistant.</h1>
            <p>
              <span>Turn data into a discussion</span> with the power of AI. Investigate companies in depth with
              consistently rigorous, detailed data. Verified for accuracy.
            </p>
            <button className={styles.ctaButton}>Start Chatting Now</button>
            <div className={styles.circle}></div>
          </div>
        </div>


        <div className={styles.sectionImproved}>
          <img
            src="/images/customizable-mockup.png"
            alt="Customizable Switch Mockup"
            className={styles.switchImage}
          />
          <div className={styles.textContent}>
            <h1>Your own customizable terminal.</h1>
            <p>
              <span>Easily track what matters to you.</span> Our intuitive platform gives you
              the flexibility to customize your experience and auto-save your research.
            </p>
          </div>
        </div>



        <div className={styles.finChatComparison}>
          <div className={styles.finChatText}>
            <h1>FinChat v. LLMs</h1>
            <p>FinanceBench is the industry standard for evaluating LLM&apos;s on financial questions.</p>
          </div>

          <div className={styles.finChatImageContainer}>
            <Image 
              src="/images/finance-bench-graph.png" 
              alt="FinChat Comparison" 
              className={styles.finChatImage} 
              width={500} 
              height={300} 
            />
          </div>
        </div>

        <div className={styles.investorsSection}>
          <h1>Built for investors, by investors.</h1>

          <div className={styles.tabs}>
            <button
              className={activeTab === 'research' ? styles.active : ''}
              onClick={() => setActiveTab('research')}
            >
              Company Research
            </button>
            <button
              className={activeTab === 'tools' ? styles.active : ''}
              onClick={() => setActiveTab('tools')}
            >
              Tools
            </button>
          </div>

          <ul className={styles.itemsList}>
            {currentItems.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>

        <div className={styles.sponsorsSection}>
          <h1 className={styles.sponsorsHeading}>Meet Our Sponsors</h1>
        </div>

        <div className={styles.carouselContainer}>
          <Carousel responsive={responsive} infinite autoPlay autoPlaySpeed={3000}>
            {logos.map((src, index) => (
              <div key={index} className={styles.carouselImage}>
                <Image src={src} alt={`Logo ${index + 1}`} width={150} height={100} objectFit="contain" />
              </div>
            ))}
          </Carousel>
        </div>

        {isModalOpen && (
          <div className={styles.modalOverlay} onClick={closeModal}>
            <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
              <h2>Sign Up to Continue</h2>
              <p>Please sign up to access this feature.</p>
              <button className={styles.ctaButton} onClick={handleSignUp}>Sign Up Free</button>
              <button className={styles.closeButton} onClick={closeModal}>Close</button>
            </div>
          </div>
        )}

        {/* Newsletter Section */}
        <footer className={styles.footer}>
          <div className={styles.newsletter}>
            <h2>Stay informed with our newsletter.</h2>
            <p>Weekly earnings, insights, research & news.</p>
            <form className={styles.newsletterForm}>
              <input
                type="email"
                placeholder="Enter your email"
                aria-label="Enter your email"
                required
              />
              <button type="submit">Subscribe</button>
            </form>
          </div>

          <div className={styles.footerLinks}>
            <div className={styles.footerColumn}>
              <h3>Company</h3>
              <ul>
                <li><Link href="#">Careers</Link></li>
                <li><Link href="#">LinkedIn</Link></li>
                <li><Link href="#">Twitter/X</Link></li>
                <li><Link href="#">Contact</Link></li>
              </ul>
            </div>

            <div className={styles.footerColumn}>
              <h3>Product</h3>
              <ul>
                <li><Link href="#">Pricing</Link></li>
                <li><Link href="#">Enterprise</Link></li>
              </ul>
            </div>

            <div className={styles.footerColumn}>
              <h3>Resources</h3>
              <ul>
                <li><Link href="#">Affiliate</Link></li>
                <li><Link href="#">Blog</Link></li>
                <li><Link href="#">Newsletter</Link></li>
              </ul>
            </div>
          </div>

          <div className={styles.footerCopyright}>
            <p>Privacy Policy | Terms of Service</p>
            <p>&copy; 2024 Stratosphere Technology Inc. All rights reserved.</p>
          </div>
        </footer>



      </div>
    </>
  );
}
