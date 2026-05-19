"use client";

import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};
const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const items = [
  { value: "94%", label: "Fewer Missed Calls" },
  { value: "24/7", label: "Always Answering" },
  { value: "48 hrs", label: "Live in Your Clinic" },
  { value: "$12K+", label: "Revenue Recovered / Quarter" },
];

export default function TrustBar() {
  return (
    <div className="relative bg-slate-900 py-6 px-6">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
        variants={stagger}
        className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-0 md:divide-x md:divide-slate-700/60"
      >
        {items.map((item) => (
          <motion.div key={item.label} variants={fadeUp} className="text-center md:px-8">
            <p className="text-2xl font-bold text-teal-400 tracking-tight">{item.value}</p>
            <p className="text-sm text-slate-400 mt-1 leading-snug">{item.label}</p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
