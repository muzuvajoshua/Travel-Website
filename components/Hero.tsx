import Image from "next/image";
import Button from "./Button";

const Hero = () => {
  return (
    <section className="max-container padding-container flex flex-col gap-20 py-10 pb-32 md:gap-28 lg:py-20 xl:flex-row">
      <div className="hero-map" />

      {/* left hand side of my hero section */}
      <div className="relative z-20 flex flex-1 flex-col xl:w-1/2">
        <Image
          src="/camp.svg"
          alt="camp"
          width={50}
          height={50}
          className="absolute top-[-30px] left-[-5px]  w-10 lg:w-[50px]"
        />
        <h1 className="bold-52 lg:bold-88 text-white">Gerenge Focus Camp Site</h1>
        <p className="regular-16 mt-6 text-gray-30 xl:max-w-[520px]">
        Escape the hustle and bustle of city life and immerse yourself in the serene beauty of Gerenge Camp Site. 
        Nestled near the tranquil shores of a picturesque lake, this hidden gem offers the perfect retreat for nature lovers and peace seekers. 
        The calming ambiance, surrounded by lush greenery and the soothing sound of gentle waves, creates an idyllic setting for relaxation, reflection, or adventure. 
        Whether you’re enjoying a quiet evening under the stars or exploring the natural wonders nearby, Gerenge Camp Site promises an unforgettable experience away from the chaos of town.
        </p>
        <div className="my-11 flex flex-wrap gap-5">
          <div className="flex items-center gap-2">
            {Array(5)
              .fill(1)
              .map((_, i) => (
                <Image
                  key={i}
                  src="/star.svg"
                  alt="star"
                  width={24}
                  height={24}
                />
              ))}
          </div>
          <p className="bold-16 lg:bold-20  text-blue-70">
            198{" "}
            <span className="regular-16 lg:regular-20 ml-1">
              Excellent Reviews
            </span>
          </p>
        </div>
        <div className="flex flex-col w-full gap-3 sm:flex-row">
          <Button type="button" title="Download Now" variant="btn_green" />
          <Button
            type="button"
            title="How We Work"
            icon="/play.svg"
            variant="btn_white_text"
          />
        </div>
      </div>

      <div className="relative flex flex-1 items-start ">
        <div className="relative z-20 flex w-[286px] flex-col gap-8 rounded-3xl bg-green-90 px-7 py-8 ">
          <div className="flex flex-col">
            <div className="flexBetween">
              <p className="regular-16 text-gray-20 ">Location</p>
              <Image src="/close.svg" alt="close" width={24} height={24} />
            </div>
            <p className="bold-20 text-white">Gerenge, Entebbe</p>
          </div>

          <div className="flexBetween">
            <div className="flex flex-col">
              <p className="regular-16 block text-gray-20">Distance</p>
              <p className="bold-20 text-white">173.28 km</p>
            </div>
            <div className="flex flex-col">
              <p className="regular-16 block text-gray-20">Elevation</p>
              <p className="bold-20 text-white">2.040 km</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
