import React, { useCallback, useEffect, useState } from 'react';
import styled from '@emotion/styled';

const PuzzleContainer = styled.div`
  display: flex;
  flex-direction: column;
  border: 3px solid black;
  width: 400px;
  height: 400px;
  margin: 0 auto;
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
  width: 100%;
  height: 100%;
  padding: 2rem;
  border: 1px solid darkgrey;

  font-size: 1.5rem;
  color: dimgray;
  background-color: oldlace;
`;

const ZeroPiece = styled.div`
  width: 100%;
  height: 100%;
  padding: 1.8rem;
  text-align: center;
`;

const KEY_LEFT = 37;
const KEY_UP = 38;
const KEY_RIGHT = 39;
const KEY_DOWN = 40;

function PuzzlePractice() {
  const [puzzle, setPuzzle] = useState([
    [4, 1, 2],
    [7, 0, 3],
    [8, 5, 6],
  ]);
  const [initialIndex, setInitialIndex] = useState({row: 1, col: 1});

  const movePuzzle = useCallback((e) => {
    const keyCode = e.keyCode;

    const {row, col} = initialIndex;

    if (isNotBoundary(keyCode, row, col)) {
      return;
    }

    const clonePuzzle = cloneDeep(puzzle);

    if (keyCode === KEY_LEFT) {
      [clonePuzzle[row][col], clonePuzzle[row][col + 1]] = [
        clonePuzzle[row][col + 1],
        clonePuzzle[row][col],
      ];

      setPuzzle(clonePuzzle);
      setInitialIndex(prev => ({...prev, col: prev.col + 1}));
    } else if (keyCode === KEY_UP) {
      [clonePuzzle[row][col], clonePuzzle[row + 1][col]] = [
        clonePuzzle[row + 1][col],
        clonePuzzle[row][col],
      ];

      setPuzzle(clonePuzzle);
      setInitialIndex(prev => ({...prev, row: prev.row + 1}));
    } else if (keyCode === KEY_RIGHT) {
      [clonePuzzle[row][col], clonePuzzle[row][col - 1]] = [
        clonePuzzle[row][col - 1],
        clonePuzzle[row][col],
      ];

      setPuzzle(clonePuzzle);
      setInitialIndex(prev => ({...prev, col: prev.col - 1}));
    } else if (keyCode === KEY_DOWN) {
      [clonePuzzle[row][col], clonePuzzle[row - 1][col]] = [
        clonePuzzle[row - 1][col],
        clonePuzzle[row][col],
      ];

      setPuzzle(clonePuzzle);
      setInitialIndex(prev => ({...prev, row: prev.row - 1}));
    }
  }, [puzzle, initialIndex]);

  const cloneDeep = (array2d) => {
    return array2d.map(arr => [...arr])
      .reduce((a, b) => a.concat([b]), []);
  };

  const isNotBoundary = (keyCode, row, col) => {
    if (keyCode === KEY_LEFT) {
      return col + 1 >= 3;
    } else if (keyCode === KEY_UP) {
      return row + 1 >= 3;
    } else if (keyCode === KEY_RIGHT) {
      return col - 1 < 0;
    } else if (keyCode === KEY_DOWN) {
      return row - 1 < 0;
    }
  };

  useEffect(() => {
    document.body.style.overflowY = 'hidden';
    document.body.addEventListener('keydown', movePuzzle);
    return () => {
      document.body.style.overflowY = 'auto';
      document.body.removeEventListener('keydown', movePuzzle);
    };
  }, [movePuzzle]);

  return (
    <PuzzleContainer>
      {
        puzzle.map((rowData, i) =>
          <Row key={i}>
            {
              rowData.map((piece, j) =>
                piece
                  ? <Col key={j}><Piece>{piece}</Piece></Col>
                  : <Col key={j}><ZeroPiece /></Col>
              )
            }
          </Row>
        )
      }
    </PuzzleContainer>
  );
}

export default PuzzlePractice;