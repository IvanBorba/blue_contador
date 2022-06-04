const Display = ({ text }) => {
  return <h1>{text}</h1>;
};

export default Display;

// O exemplo abaixo está sem desconstruir as props:

// const Display = (props) => {
//   return <h1>{props.text}</h1>;
// };

// export default Display;
