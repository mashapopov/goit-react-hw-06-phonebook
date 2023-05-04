import PropTypes from 'prop-types';
import { Li, Button, Ul, P, Span } from './contact.styled';
import { deleteContacts } from '../../redux/contactsSlice';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';

export const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts.contacts);
  const filter = useSelector(state => state.filters.filter);

  const filteredContacts = contacts.filter(({ name }) =>
    name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <Ul className="ContactList">
      {filteredContacts.map(({ id, name, number }) => (
        <Li key={id} className="ContactList__item">
          <P className="ContactList__text">{name}:</P>
          <Span className="ContactList__span">{number}</Span>
          <Button
            type="button"
            className="ContactList__btn"
            onClick={() => dispatch(deleteContacts(id))}
          >
            Удалить
          </Button>
        </Li>
      ))}
    </Ul>
  );
};

ContactList.protoType = {
  contacts: PropTypes.object.isRequired,
  onContactsDelete: PropTypes.func.isRequired,
};
