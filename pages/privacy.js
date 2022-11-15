import Head from "next/head";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <>
      <Head>
        <title>Stratus - Privacy Policy</title>
        <meta
          name="description"
          content="The personal portfolio of Front-end developer Dinesh Lakai Khadka."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <main className="main">
        <section className="works">
          <div className="container">
            <header className="works__header">
              <h2 className="works__title">Stratus - Privacy Policy</h2>
            </header>

            <div className="works__inner">
              <article className="work">
                <div className="entry-content">
                  <p>Data we recieve from the user:</p>
                  <ul>
                    <li>- User allowed location data</li>
                    <li>- City name as provided by the user</li>
                  </ul>
                  <p>
                    While we use this data to provide you with weather and place
                    data from https://open-meteo.com/en and/or https://openweathermap.org/. We do not
                    store any of the data provided by the user and the data itself are proxied through our server.
                  </p>
                  
                  <p>
                    This will mean that non of the information you provide can be directly linked to you by any of the third party services we utilize.
                  </p>

                </div>
              </article>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
