import { FC } from 'react';
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from '../styles';
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

import { SectionWrapper } from '../hoc';
import ServiceCard from './components/ServiceCard';

type TServiceCard = {
    index: number;
    title: string;
    icon?: string;
};

// const ServiceCard: FC<TServiceCard> = ({ index, title, icon }) => {
//     return (
//         <Tilt className="xs:w-[250px] w-full">
//             <motion.div
//                 variants={fadeIn('right', 'spring', 0.5 * index, 1)}
//                 className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
//             >
//                 <motion.div
//                     animate={{
//                         max: 45,
//                         scale: 1,
//                         speed: 450
//                     }}
//                     className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
//                 >
//                     <img src={icon} alt={title} className='w-16 h-16 object-contain' />
//                     <h3 className="text-white text-[20px] font-bold text-center">{title}</h3>
//                 </motion.div>
//             </motion.div>
//         </Tilt>
//     )
// }

const About = () => {
    return (
        <>
            <motion.div variants={textVariant(0.5)}>
                <p className={styles.sectionSubText}>Introduction</p>
                <h2 className={styles.sectionHeadText}>Overview.</h2>

                <motion.p
                    variants={fadeIn('up', '', 0.1, 1)}
                    className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
                >
                    I'm a skilled Software Engineer with experience in Typescript and Javascript, and expertise
                    in libraries and frameworks like React, Node.js, and Three.js. I'm a quick learner and collaborate closely
                    with clients to create efficient, scalable, and user-friendly solutions that solve real-world problems.
                    Let's work together to bring your ideas to life!
                </motion.p>
            </motion.div>

            <div className="mt-20 flex flex-wrap gap-10">
                {services.map((s, index) => <ServiceCard key={s.title} index={index} {...s} />)}
            </div>
        </>
    )
}

const MyComp = () => {
    return <SectionWrapper Component={About} idName='about' />;
};

export default MyComp;