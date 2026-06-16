import { CONTACT } from "../constants";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <div className="border-t border-stone-900 pb-20">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -50 }}
        transition={{ duration: 0.5 }}
        className="my-10 text-center text-4xl"
      >
        Get in Touch
      </motion.h2>

      <div className="flex flex-col items-center text-center tracking-tighter">
        <motion.p
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -50 }}
          transition={{ duration: 0.8 }}
          className="my-2"
        >
          <a
            href="https://www.google.com/maps/search/?api=1&query=YOUR_ADDRESS_HERE"
            target="_blank"
            rel="noopener noreferrer"
            className="my-2 text-stone-300 hover:text-white transition"
          >
            {CONTACT.address}
          </a>
        </motion.p>

        <motion.p
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -50 }}
          transition={{ duration: 0.8 }}
          className="my-2"
        >
          <a
            href={`tel:${CONTACT.phoneNo}`}
            className="my-2 hover:text-white transition"
          >
            {CONTACT.phoneNo}
          </a>
        </motion.p>

        <a
          href={`mailto:${CONTACT.email}`}
          className="mt-3 border-b border-stone-400 hover:text-white transition"
        >
          {CONTACT.email}
        </a>
      </div>
    </div>
  );
};

export default Contact;
