import styled from 'styled-components';

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-left: 10px;
  max-width: 350px;
`;

export const ContactItem = styled.p`
  font-size: 20px;
`;
export const Contact = styled.li`
  // margin-top: 20px;
  flex-wrap: nowrap;
  justify-content: space-between;
  display: flex;
  align-items: baseline;
  justify-content: space-around;
  gap: 10px;
`;

export const DeleteButton = styled.button`
  width: 80px;
  font-size: 20px;
  padding: 3px;
  background-color: transparent;
  border: 1px solid #9a98988a;
  border-radius: 12px;
  background-color: #dda0dd;
  :hover {
    background-color: #ba55d3;
  }
`;
export const P = styled.p`
  font-size: 20px;
`;
export const Span = styled.span`
  font-size: 20px;
`;
