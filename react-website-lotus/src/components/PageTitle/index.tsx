import { Title, Subtitle } from "./styles";
import { motion } from "framer-motion";

export interface PageTitleProps {
  title?: string;
  subtitle?: string;
}

function PageTitle({ title, subtitle }: PageTitleProps) {
  return (
    <motion.div
      initial={{ x: 60, opacity: 0 }}
      animate={{ x: -10, opacity: 2 }}
      transition={{ ease: "easeInOut", duration: 1.4 }}
    >
      <Title>{title}</Title>
      <Subtitle>{subtitle}</Subtitle>
    </motion.div>
  );
}

export default PageTitle;
