import styled from 'styled-components';
import { useState } from 'react';
import { List } from "./List";
import { Form } from "./Form";
import { LANGUEGES } from "./const/Langages";

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 24px 64px 0;
  border-bottom: 1px solid #E0E0E0;
`

const HeaderUl = styled.ul`
  display: flex;
  margin: 0;
  padding: 0;
`

const HeaderLi = styled.li`
  list-style: none;
  padding: 4px 2px;
  cursor: pointer;
  border-bottom: ${props => props.focused ? '2px solid #F44336' : 'none'};
`

function App() {
  const [tab, setTab] = useState('list');

  const [langs, setLangs] = useState(LANGUEGES);

  const addLang = (lang) => {
    setLangs([...langs, lang]);
    setTab('list');
  }

  return (
    <div>
      <Header>
        <HeaderUl>
          <HeaderLi focused={ tab === 'list' } onClick={() => setTab('list')}>リスト</HeaderLi>
          <HeaderLi focused={ tab === 'form' } onClick={() => setTab('form')}>フォーム</HeaderLi>
        </HeaderUl>
      </Header>
      <hr />
      {
        tab === 'list' ? <List langs={langs}/> : <Form onAddLang={addLang} />
      }
    </div>
  );
}

export default App;
