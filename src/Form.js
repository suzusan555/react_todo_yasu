import { useState } from "react";

export const Form = ({onAddLang}) => {
  const [text, setText] = useState('');

  const submitFrom = (event) => {
    event.preventDefault();
    onAddLang(text);
  }
  return (
    <div>
      <h4>新しい言語追加</h4>
      <form onSubmit={submitFrom}>
        <div>
          <input
          type="text"
          value={ text }
          onChange={(e) => setText(e.target.value)} />
        </div>
        <div>
          <button>追加</button>
        </div>
      </form>
    </div>
  )
}
