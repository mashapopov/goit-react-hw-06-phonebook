import { H2 } from './Section.styled';
import PropTypes from 'prop-types';

export const Section = ({ title, children }) => {
  return (
    <>
      <H2>{title}</H2>
      {children}
    </>
  );
};

Section.protoType = {
  title: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired,
};
