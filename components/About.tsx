import React from "react";
import { motion } from "framer-motion";

type Props = {};

function About({}: Props) {
  return (
    <motion.div
    initial={{ opacity: 0 }}
    transition={{ duration: 1.5 }}
    whileInView={{ opacity: 1,  }}

    
    className="flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center ">



      {" "}
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl ">
        {" "}
        About
      </h3>
      <motion.img
        initial={{ x: -200, opacity: 0 }}
        transition={{ duration: 1.2 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        src="\bahriaauditorium04.jpg"
        className="-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-95 xl:w-[200px] xl:h-[300px]"
      />
      <div

className="space-y-10 px-0 md:px-10
    "
      >
        <h4 className="text-4xl font-semibold">
          Here is a{" "}
          <span className="underline decoration-[#f7ab0a] ">Little</span>{" "}
          background
        </h4>
        <p className="text-base">
          Finance professional with over 9 years of extensive experience in
          finance, administration & accounting in Chartered Accountancy Firm,
          Corporate Law and Tax Consultancy Firm, NGO & Services industry with
          the strong ability to make the tangible connection between business
          and its financial performance. Proficient in leading finance team,
          presenting strategies, capital budgeting and MIS reporting. Proven
          ability to improve operations, impact business growth & maximize
          profits through contributions in financial management, cost reductions
          & productivity improvements. A key member of the management team of a
          growing entrepreneurial company and an excellent communicator with
          demonstrated capabilities of contributing significantly.
        </p>
      </div>
    </motion.div>
  );
}

export default About;
