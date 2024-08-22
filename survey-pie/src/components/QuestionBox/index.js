import Desc from "../Desc";
import Title from "../Title";
import Body from "../Body";
import ActionButtons from "../ActionButtons";
import styled from "styled-components";

function QuestionBox({ question, questionLength, step, answer, setAnswer }) {
  return (
    <QuestionBoxWrapper>
      <Title>{question.title}</Title>
      <Desc>{question.desc}</Desc>
      <Body
        type={question.type}
        answer={answer}
        setAnswer={setAnswer}
        options={question.options}
      />
      <ActionButtons questionLength={questionLength} step={step} />
    </QuestionBoxWrapper>
  );
}

const QuestionBoxWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

export default QuestionBox;
