import { motion } from 'framer-motion'

const Destination = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >
      <div className="">Destination</div>
    </motion.div>
  )
}

export default Destination
