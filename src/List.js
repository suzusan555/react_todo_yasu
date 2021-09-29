const LANGUEGES = [
  'java',
  'C++',
  'PHP',
  'Go',
  'Ruby'
];

export const List = () => {
  return (
    <div>
      {
        LANGUEGES.map((lang,index) => {
          return (
            <div key={index}>{ lang }</div>
          )
        })
      }
    </div>
  )
}

export default List;
