import { FC } from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import { motion } from 'framer-motion';

import 'react-vertical-timeline-component/style.min.css';
import { styles } from '../styles';
import { experiences } from '../constants';
import { SectionWrapper } from '../hoc';
import { textVariant } from '../utils/motion';

type TExperienceCard = {
    experience: {
        title: string;
        company_name: string;
        icon: string;
        iconBg: string;
        date: string;
        points: string[];
    }
};

const ExperienceCard: FC<TExperienceCard> = ({ experience }) => {
    return (
        <VerticalTimelineElement
            contentStyle={{
                background: '#1d1836',
                color: '#fff'
            }}
            contentArrowStyle={{
                borderRight: '7px solid #232631'
            }}
            date={experience.date}
            iconStyle={{ background: experience.iconBg }}
            icon={<div className='flex justify-center items-center w-full h-full'>
                <img src={experience.icon} alt={experience.title} className='w-[60%] h-[60%] object-contain' />
            </div>}
        >
            <div>
                <h3 className='text-white text-[24px] font-bold'>{experience.title}</h3>
                <p className='text-secondary text-[16px] font-semibold m-0'>{experience.company_name}</p>

                <ul className='mt-5 list-disc ml-5 space-y-2'>
                    {experience.points.map((p, index) => (
                        <li
                            key={`experience-p-${index}`}
                            className='text-white-100 text-[14px] pl-1 tracking-wider'
                        >{p}</li>
                    ))}
                </ul>
            </div>
        </VerticalTimelineElement>
    );
};

const Experience = () => {
    return (
        <>
            <motion.div variants={textVariant(0.5)}>
                <p className={styles.sectionSubText}>What have I done so far?</p>
                <h2 className={styles.sectionHeadText}>Experience.</h2>
            </motion.div>

            <div className="mt-20 flex flex-col">
                <VerticalTimeline>
                    {
                        experiences.map((e, index) => <ExperienceCard key={index} experience={e} />)
                    }
                </VerticalTimeline>
            </div>
        </>
    )
}

export default SectionWrapper(Experience, "experience");