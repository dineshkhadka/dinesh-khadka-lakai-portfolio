import Script from "next/script";

export default function Footer() {
  return (
    <>
    <Script
    id="smooth-scroll"
      strategy="afterInteractive"
      dangerouslySetInnerHTML={{
        __html: `
        document.querySelectorAll('a[href^="#"]').forEach(a => {
          a.addEventListener('click', function (e) {
              e.preventDefault();
              var href = this.getAttribute("href");
              var elem = document.querySelector(href)||document.querySelector("a[name="+href.substring(1, href.length)+"]");
              window.scroll({
                  top: elem.offsetTop - 120, 
                  left: 0, 
                  behavior: 'smooth' 
              });
          });
      });
`,
      }}
    />
      <footer className="footer">
        <div className="container">
          <div className="footer__copyright">
            <p>&copy; Dinesh Khadka lakai. All rights reserved</p>
          </div>
          <div className="footer__social">
            <ul className="social-links">
              <li className="">
                <a
                  href="https://github.com/dineshkhadka/"
                  className="social-links__item"
                  target="_blank"
                  rel="noreferrer"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                  </svg>
                  <span className="sr-only">Github Profile</span>
                </a>
              </li>
              <li className="">
                <a
                  href="#"
                  className="social-links__item"
                  target="_blank"
                  rel="noreferrer"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                  </svg>
                  <span className="sr-only">Twitter Profile</span>
                </a>
              </li>
              <li className="">
                <a
                  href="#"
                  className="social-links__item"
                  target="_blank"
                  rel="noreferrer"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                    <rect x="2" y="9" width="4" height="12"></rect>
                    <circle cx="4" cy="4" r="2"></circle>
                  </svg>
                  <span className="sr-only">LinkedIn Profile</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
}
