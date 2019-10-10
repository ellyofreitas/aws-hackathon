import React, { useState } from 'react';
import { Container } from './styles';

export default function CollapseItem({ data }) {
  const [view, setView] = useState(false);
  function handleClick(e) {
    e.preventDefault();
    setView(!view);
  }
  return (
    <Container>
      <div className="audio-area__list--item" onClick={handleClick}>
        <span>{data.name}</span>
        <span>{Date(data.created_at)}</span>
        <span className="icon-container">
          <svg
            className={`svg-icon-audio--${data.done ? 'success' : 'warning'}`}
          >
            <use
              xlinkHref={`icons.svg#${
                data.done ? 'check-mark' : 'clock-circular-outline'
              }`}
            ></use>
          </svg>
        </span>
      </div>

      <div
        className="collapse"
        style={{
          display: view ? ' block' : 'none'
        }}
      >
        {data.transcription ? (
          <>
            <div className="audio">
              <audio className="player" src={data.url || '#'} controls></audio>
            </div>

            <div className="collapse__transcription">
              <h3>TRANSCRIPTION</h3>
              {data.transcription.results.transcripts[0].transcript}
              <h2>keys:</h2>
              {data.KeyPhrases &&
                data.KeyPhrases.map(e => <span key={e}> {e.Text}</span>)}
            </div>
          </>
        ) : (
          <h1>Sem transcrição</h1>
        )}
      </div>
    </Container>
  );
}
