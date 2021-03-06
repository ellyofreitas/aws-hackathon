import styled from 'styled-components';

export const Container = styled.div `
.search {
    display: flex;
    align-items: center;
    justify-content: center;

    &__input {
        font-family: inherit;
        font-size: 1.4rem;
        color: inherit;
        background-color: var(--color-grey-light-2);
        border: none;
        padding: .7rem 2rem;
        border-radius: 100px;
        width: 80%;
        transition: all .2s;
        margin-right: -3.25rem;

        &:focus {
            outline: none;
            width: 90%;
            background-color: var(--color-grey-light-3);
        }
    }

    &__input:focus + &__button {
        background-color: var(--color-grey-light-3);
    }

    &__button {
        border: none;
        background-color: var(--color-grey-light-2);

        &:focus {
            outline: none;
        }

        &:active {
            transform: translateY(2px);
        }
    }

    &__icon {
        height: 1.7rem;
        width: 1.7rem;
        fill: var(--color-grey-dark-3);
    }
}
`;