import styled from 'styled-components';

export const Container = styled.div`
  .audio-area__list {
    padding: 2rem;

    &--item {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      align-items: center;
      font-size: 1.2rem;
      background-color: rgba(0, 0, 0, 0.03);
      padding: 1rem 1.25rem;
      border: 1px solid #00000020;
      border-radius: 0.25rem 0.25rem 0 0.25rem;
      margin: 0.5rem 0.5rem 0 0.5rem;
      cursor: pointer;

      p {
        margin: 0;
      }
    }
  }
`;
