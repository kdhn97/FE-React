import styled from "styled-components";
import { useRecoilValue } from "recoil";
// import testState from "../../stores/test/atom";
import testWithComma from "../../stores/test/testWithComma";

function CompletionPage() {
  const test = useRecoilValue(testWithComma);
  return <CompletionPageWrapper>{test}</CompletionPageWrapper>;
}
const CompletionPageWrapper = styled.div``;
export default CompletionPage;
