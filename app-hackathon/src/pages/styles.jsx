import styled from 'styled-components';

export const Container = styled.div`
         display: flex;
         flex-direction: column;
         justify-content: center;
         align-items: center;

         .input-text {
           border: 2px solid #456879;
           border-radius: 10px;
           height: 22px;
           width: 230px;
         }

         .player-container {
           margin: 2rem;
         }

         .button-submit {
           margin-top: 1rem;
           background-color: var(--color-primary-dark);
           border: none;
           color: white;
           padding: 1.4rem;
           border-radius: 8px;
         }

         .login-box {
           margin-top: 8rem;
         }

         .input-box {
           margin-top: 8rem;
         }

         .button-input-a {
           background-color: var(--color-primary-dark);
           border: none;
           color: white;
           padding: 1.4rem;
           border-radius: 8px;
           margin-left: 1rem;
         }

         .submit-line{
           margin: 2rem;
         }

         .select-archive {
           display: flex;
           flex-direction: column;
           justify-content: center;
           align-items: center;
         }
       `;
