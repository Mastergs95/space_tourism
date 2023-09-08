import { motion } from 'framer-motion'

const Welcome = () => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.25 }}
        animate={{ x: 300 }}
        transition={{ type: 'spring', stiffness: 70, duration: 500 }}
      >
        <div className="w-100 ml-40 -translate-x-[300px]">
          <h5 className="head-5 uppercase text-primary">
            So, you want to travel to space
          </h5>
          <h1 className="head-1 uppercase text-secondary">Space</h1>
          <p className="body-text text-primary">
            Let’s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we’ll give you a truly out of this
            world experience!
          </p>
        </div>
      </motion.div>
      <motion.div
        animate={{ y: 200 }}
        transition={{ type: 'spring', stiffness: 70, duration: 500 }}
      >
        <div className="flex justify-center">
          <button
            type="button"
            className="rounded-full bg-white w-[270px] h-[270px] head-4 uppercase hover:ring-[50px] ring-gray-500 transition-all duration-300 -translate-y-[200px]"
          >
            Explore
          </button>
        </div>
      </motion.div>
    </>
  )
}

export default Welcome
