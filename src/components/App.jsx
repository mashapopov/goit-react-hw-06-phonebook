import { Wrapper } from './App.styled';
import { ContactList } from './ContactList/ContactList';
import { ContactForm } from './ContactForm/ContactForm';
import { Section } from './Section/Section';
import { Filter } from './Filter/Filter';

export function App() {
  return (
    <Wrapper className="Reviews">
      <Section title={'Phonebook'}>
        <ContactForm />
      </Section>

      <Section title={'Contacts'}>
        <Filter />

        <ContactList />
      </Section>
    </Wrapper>
  );
}
