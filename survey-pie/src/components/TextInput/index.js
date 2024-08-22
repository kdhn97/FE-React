import styled from "styled-components";

function TextInput({ answer, setAnswer, options }) {
  return (
    <Input
      type="text"
      value={answer}
      onChange={(e) => {
        setAnswer(e.target.value);
      }}
      placeholder={options.placeholder}
    />
  );
}

const Input = styled.input`
  border: 1px solid #e0e0e0;
  box-sizing: border-box;
  border-radius: 5px;
  font-size: 10px;
  line-height: 21px;
  padding: 12px 18px;
  width: 100%;
`;

export default TextInput;