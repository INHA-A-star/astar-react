import React from 'react';
import styled from '@emotion/styled';

const PuzzleContainer = styled.div`
  display: flex;
  flex-direction: column;
  border: 3px solid black;
  width: 400px;
  height: 400px;

  margin-bottom: 1rem;
  padding: 0.5rem;
`;

const Row = styled.div`
  display: flex;
  width: 100%;
  flex-grow: 1;
`;

const Col = styled.div`
  width: 25%;
  flex-grow: 1;
  margin: 0.2rem;
`;

const Piece = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;

  border: 1px solid darkgrey;

  background-color: oldlace;
`;

const ZeroPiece = styled.div`
  width: 100%;
  height: 100%;

  text-align: center;
`;

function Puzzle({puzzle}) {
  return (
    <PuzzleContainer>
      {
        puzzle.map((rowData, i) =>
          <Row key={i}>
            {
              rowData.map((piece, j) =>
                piece
                  ? <Col key={j}><Piece><div>{piece}</div></Piece></Col>
                  : <Col key={j}><ZeroPiece /></Col>
              )
            }
          </Row>
        )
      }
    </PuzzleContainer>
  );
}

export default Puzzle;