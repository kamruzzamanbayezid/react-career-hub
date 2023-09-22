
const Footer = () => {
      return (
            <div>
                  <div className="bg-[black] text-[#FFF] py-32">
                        <footer className="footer max-w-7xl mx-auto lg:p-0 p-4">
                              <aside>
                                    <p className="text-3xl font-extrabold mb-3">CareerHub</p>
                                    <p>There are many variations of passages of Lorem Ipsum , but the majority have suffered alteration in some form.</p>
                                    <img className="cursor-pointer" src="../../../public/assets/icons/social.png" alt="" />
                              </aside>
                              <nav>
                                    <header className="footer-title">Services</header>
                                    <a className="link link-hover">Branding</a>
                                    <a className="link link-hover">Design</a>
                                    <a className="link link-hover">Marketing</a>
                                    <a className="link link-hover">Advertisement</a>
                              </nav>
                              <nav>
                                    <header className="footer-title">Company</header>
                                    <a className="link link-hover">About us</a>
                                    <a className="link link-hover">Contact</a>
                                    <a className="link link-hover">Jobs</a>
                                    <a className="link link-hover">Press kit</a>
                              </nav>
                              <nav>
                                    <header className="footer-title">Legal</header>
                                    <a className="link link-hover">Terms of use</a>
                                    <a className="link link-hover">Privacy policy</a>
                                    <a className="link link-hover">Cookie policy</a>
                              </nav>
                        </footer>
                  </div>
            </div>
      );
};

export default Footer;