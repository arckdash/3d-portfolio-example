import { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { staggerContainer } from '../utils/motion';
import { Children } from 'react';

// type Props = (Component: React.ComponentType<object>, idName: string) => () => React.FC;
type Props = {
  Component: React.ComponentType;
  children?: ReactNode;
  idName: string;
};

const SectionWrapper: React.FC<Props> = ({ Component, children, idName }) => {
  // const HOC: React.FC = (): ReactNode => {
  //   return (
  //     <motion.section
  //       variants={staggerContainer(0, 0)}
  //       initial="hidden"
  //       whileInView="show"
  //       viewport={{ once: true, amount: 0.25 }}
  //       className={`${styles.padding} max-w-7xl mx-auto relative z-0`}
  //     >
  //       <span className='hash-span' id={idName}>
  //         &nbsp;
  //       </span>
  //       <Component />
  //     </motion.section>
  //   )
  // };

  // return HOC;
  return (
    <motion.section
      variants={staggerContainer(0, 0)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      className={`${styles.padding} max-w-7xl mx-auto relative z-0`}
    >
      <span className='hash-span' id={idName}>
        &nbsp;
      </span>
      {children}
      <Component />
    </motion.section>
  )
}

export default SectionWrapper;
