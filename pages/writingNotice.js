import { useState } from 'react';
import styled from 'styled-components';

/*
공고 : announcement
id (PK, 공고 번호)
title (공고 제목) -> 제목
content (공고 내용) -> 상세 내용 
// create_time
// update_time
kind(게시판 종류) ->  인턴, 채용, 대외활동, 공모전, 동아리 
recruitment(모집 인원)
start_date(시작 기간) -> 접수기간/모집기간 
end_date(종료 기간)
period(활동 기간 (일 수)) -> 숫자만 
url(홈페이지) -> 웹사이트 주소 
 */

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  align-items: center;
  justify-content: center;
`;

const StringInput = styled.input``;
const ContentInput = styled.textarea``;

const InputDiv = styled.div`
  display: flex;
  margin: 0px 0px 10px 0px;
`;

const WhatInput = styled.p``;

const SubmitBtn = styled.button`
  cursor: pointer;
`;

const KindInput = styled.input``;

const NumberInput = styled.input``;

const InputContents = ({ name, input }) => {
  return (
    <InputDiv>
      <WhatInput>{name}</WhatInput>
      {input}
    </InputDiv>
  );
};

const KindDiv = () => {
  return (
    <>
      <KindInput type="radio" name="kind" />
      <KindInput type="radio" name="kind" />
      <KindInput type="radio" name="kind" />
      <KindInput type="radio" name="kind" />
    </>
  );
};

export default function WritingNotice() {
  const [input, setInput] = useState({
    id: 0,
    title: '',
    content: '',
    kind: '',
    recruitment: 0,
    start_date: '',
    end_date: '',
    period: 0,
    url: '',
  });

  const onClickSubmit = () => {
    console.log(input);
  };

  return (
    <Container>
      <InputContents name="제목" input={<StringInput />} />
      <InputContents name="내용" input={<ContentInput />} />
      <InputContents name="게시판 종류" input={<KindDiv />} />
      <InputContents name="모집인원" input={<NumberInput />} />
      <InputContents name="접수기간" />
      <InputContents name="활동일수" input={<NumberInput />} />
      <InputContents name="홈페이지" input={<StringInput />} />
      <SubmitBtn onClick={onClickSubmit} />
    </Container>
  );
}
