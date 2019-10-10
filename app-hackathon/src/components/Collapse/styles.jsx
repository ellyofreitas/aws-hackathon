import styled from 'styled-components';

export const Container = styled.div`
  .collapse {
    display: none;
    padding: 0.75rem 1.25rem;
    border-right: 1px solid rgba(0, 0, 0, 0.125);
    border-left: 1px solid rgba(0, 0, 0, 0.125);
    border-bottom: 1px solid rgba(0, 0, 0, 0.125);
    overflow: hidden;
    background-color: lightgray;
    margin: -0.1rem 0.5rem;

    .player {
      margin-top: 0.7rem;
      width: 100%;
    }

    &__transcription {
      padding: 0.5rem;
      font-size: 1.2rem;
    }
  }
`;
