import { Container } from "./styles";
import React from "react";

interface TooltipProps {
  title: string;
  classname?: string;
  children: React.ReactNode;
}

const Tooltip: React.FC<TooltipProps> = ({
  title,
  classname = "",
  children,
}) => {
  return (
    <Container className={classname}>
      {children}
      <span>{title}</span>
    </Container>
  );
};

export default Tooltip;
