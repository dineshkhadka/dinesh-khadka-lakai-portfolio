import Head from "next/head";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <>
      <Head>
        <title>Dinesh Khadka Lakai</title>
        <meta
          name="description"
          content="The personal portfolio of Front-end developer Dinesh Lakai Khadka."
        />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Barlow:ital,wght@0,400;0,500;0,700;1,400;1,700&family=Space+Grotesk:wght@700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Navbar />
      <main className="main">
        <section className="hero" id="about">
          <div className="container">
            <header className="hero__header">
              <h1 className="hero__title">Dinesh Khadka Lakai</h1>
              <span className="hero__subtitle">Frontend Developer</span>
            </header>

            <div className="hero__description entry-content">
              <p>
                I am a Frontend Developer &amp; UI/UX designer located in
                Kathmandu working as a frontend developer for{" "}
                <strong>6 Years</strong>. I design and develop robust, beautiful
                and accessible websites for various industries.
              </p>
            </div>

            <footer className="hero__footer">
              <div className="hero__buttons">
                <a
                  href="mailto:dineshlakai@gmail.com"
                  className="btn btn--primary"
                >
                  View Github
                </a>
                <a
                  href="/dinesh-khadka-lakai.pdf"
                  className="btn btn--link"
                  target="_blank"
                  rel="noopener"
                >
                  Resume
                </a>
              </div>
            </footer>
          </div>
        </section>

        <section className="works" id="work">
          <div className="container">
            <header className="works__header">
              <h2 className="works__title">Work</h2>
            </header>

            <div className="works__inner">
              <article className="work">
                <header className="work__header">
                  <h3 className="work__title">Lastdoor Solutions</h3>
                  <span className="work__details">
                    Frontend Developer / Wordpress Developer (2019 - 2022)
                  </span>
                </header>

                <div className="work__description entry-content">
                  <p>
                    Primarily worked on building website using the specs and
                    handovers from designers. Built pixel-perfect websites that
                    gracefully adhere to the screen size are accessible and
                    using the cross browser compatible codes.
                  </p>
                  <p>
                    Used wordpress extensively to build the backend using the
                    internally developed toolset.
                  </p>
                </div>
              </article>
              <article className="work">
                <header className="work__header">
                  <h3 className="work__title">Tech101 Pvt. Ltd.</h3>
                  <span className="work__details">
                    Frontend Developer (2016 - 2019)
                  </span>
                </header>

                <div className="work__description entry-content">
                  <p>
                    Worked as a frontend developer and UI/UX designer where I
                    had the responsibility to talk straight with the clients and
                    form a design of the website and as well as build it.
                  </p>
                  <p>
                    Used vue.js to add interactivity to the website and when
                    working on the backend used wordpress to add a straight
                    forward dynamic website
                  </p>
                </div>
              </article>
            </div>
          </div>
        </section>
        <section className="contact" id="contact">
          <div className="container">
            <h3 className="contact__title">
              I'm always looking for new challenges and oppurtunities
            </h3>

            <a href="mailto:dineshlakai+website@gmail.com" className="btn">
              Drop me a line
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
