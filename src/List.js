import React from "react";

const LANGUAGES = [
  'java',
  'C++',
  'PHP',
  'Go',
  'Ruby'
];

export class List extends React.Component {
  render() {
    const { title } = this.props;
    return(
      <div>
        {
          LANGUAGES.map((lang,index) => {
            return (
              <div key={index}>{lang}</div>
            )
          })
        }
      </div>
    )
  }
}

export default List;
