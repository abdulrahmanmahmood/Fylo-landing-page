const Landing = () => {
  return (
    <section className="bg-[#1c2230]">
      <div className="container  ">
        <div className="element-center flex-col pt-[200px]">
          <div className="w-[750px] max-w-full ">
            <img
              src="/src/assets/images/illustration-intro.png"
              alt="landing page"
              className="w-full h-fit"
            />
          </div>
          <div className="text-white text-center">
            <h1 className="text-[30px] md:text-[40px] font-semibold mb-[15px] ">
              All your files in one secure location, <br />
              accessible anywhere.
            </h1>
            <p className="font-normal text-lg px-[15px] md:w-[600px] max-w-full md:mx-auto mb-[30px]">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem
              cupiditate ullam voluptatem beatae rem in omnis ut molestiae
              soluta, fugit rerum suscipit.
            </p>
            <a
              href="/"
              className=" btn w-[280px] rounded-[30px] h-[60px] element-center mx-auto font-medium"
            >
              Get Started
            </a>
          </div>
        </div>
      </div>
      <div className="w-full h-[200px]">
        <img
          src="src/assets/images/bg-curvy-desktop.svg"
          alt="img"
          className="w-full h-full"
        />
      </div>
    </section>
  );
};

export default Landing;
