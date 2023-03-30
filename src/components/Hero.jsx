import { motion } from "framer-motion";
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";
import myImage from "../assets/images/profile.jpg"; // import your image

const Hero = () => {
  const handleDownload = (url) => {
    window.location.href = url;
  };

  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div
        className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#915EFF]' />
          <div className='w-1 sm:h-80 h-40 violet-gradient' />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className='text-[#915EFF]'>Yeabsira Ashenafi</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
          I am a junior full Stack software developer
relocating to Addis Ababa. I bring
more than eight months experience writing
JavaScript and more than eight months
experience in the technology industry. With a deep understanding of front-
end and back-end technologies, I am committed
to delivering high-quality, scalable, and
maintainable code.
            {/* <br className='sm:block hidden' />
            interfaces and web applications */}
          </p>
          {/* <img src={myImage} alt="My Image" width="200" height="300" style={{ float: "right", marginRight: "20px" }} /> */}

          <button
            className='bg-[#915EFF] text-white py-2 px-4 rounded'
            onClick={() =>
              handleDownload("https://drive.google.com/file/d/1e86bEPqpQmzXODh2WU9MHM5QNxDYBALZ/view?usp=sharing")
            }
          >
            Download Resume
          </button>
        </div>
      </div>

      <ComputersCanvas />


      <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
      {/* <img src={myImage} alt="My Imge" width="200" height="300" style={{ float: "right", marginRight: "20px" }} /> */}

        <a href='#about'>
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className='w-3 h-3 rounded-full bg-secondary mb-1'
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
