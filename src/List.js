import React, { useReducer } from "react";

const reducer = (state, action) => {
  switch (action.type) {
    case "INCREMENT":
      return { count: state.count + 1, ShowText: state.ShowText };
    case "toggleShowText":
      return { count: state.count, ShowText: !state.ShowText };
    default:
      return state;
  }
};
function List() {
  const [state, dispatch] = useReducer(reducer, { count: 0, ShowText: true});
  // const [count,setCount]=useState(0)
  // const [ShowText,setShowText]=useState(true)
  return (
    <div>
      <h1>{state.count}</h1>
      <button
        onClick={() => {
          dispatch({type:"INCREMENT"})
          dispatch({type:"toggleShowText"})
          // setCount(count+1);
          // setShowText(ShowText)
        }}
      >
        chick here
      </button>
      {state.ShowText && <p>This is a text</p>}
    </div>
  );
}

export default List