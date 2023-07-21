import { FC } from 'react';
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

type TProjectCard = {
    index: number;
    project: {
        name: string;
        description: string;
        tags: {
            name: string;
            color: string;
        }[];
        image: string;
        source_code_link: string;
    }
};

const ProjectCard: FC<TProjectCard> = ({ index, project }) => {
    return (
        <motion.div
            variants={fadeIn('up', 'spring', index * 0.5, 1)}
            className=''
        >
            <Tilt
                options={{
                    max: 45,
                    scale: 1,
                    speed: 450
                }}
                className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full"
            >
                <div className='relative w-full h-[230px]'>
                    <img
                        src={project.image}
                        alt={project.name}
                        className='w-full h-full object-cover rounded-2xl'
                    />
                    <div className='absolute inset-0 flex justify-end m-3 card-img_hover'>
                        <div
                            onClick={() => window.open('url?', '_blank')}
                            className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'
                        >
                            <img src={github} alt="github" className='w-1/2 h-1/2 object-contain' />
                        </div>
                    </div>
                </div>

                <div className='mt-5 '>
                    <h3 className='text-white font-bold text-[24px]'>{project.name}</h3>
                    <p className='mt-2 text-secondary text-[14px]'>{project.description}</p>
                </div>
                <div className='mt-4 flex flex-wrap gap-2'>
                    {project.tags.map((t, index) => (
                        <p key={index} className={`text-[14px] ${t.color}`}>#{t.name}</p>
                    ))}
                </div>
            </Tilt>
        </motion.div>
    )
};

const Works = () => {
    return (
        <>
            <motion.div variants={textVariant(0.5)}>
                <p className={styles.sectionSubText}>My Work</p>
                <h2 className={styles.sectionHeadText}>Projects.</h2>
            </motion.div>

            <div className="w-full flex">
                <motion.p
                    variants={fadeIn("down", "", 0.5, 1)}
                    className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
                >
                    Following projects showcase my skills and experience through real-world examples of my work. Each project
                    is briefly described with links to code repositories and live demos in it. It reflects my ability to solve
                    complex problems, work with different technologies, and manage projects efficiently.
                </motion.p>
            </div>

            <div className="mt-20 flex flex-wrap gap-7">
                {
                    projects.map((p, index) => (
                        <ProjectCard key={`project-${index}`} index={index} project={p} />
                    ))
                }
            </div>
        </>
    )
}

export default SectionWrapper(Works, '');