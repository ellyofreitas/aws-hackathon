import styled from 'styled-components';

export const Container = styled.div`
.btn-upload-item {
    display: flex;
    justify-content: center;
    
    background-color: var(--color-primary-dark);
    padding: 1rem 1.25rem;
    border: 1px solid #00000020;
    border-radius: .25rem .25rem 0 .25rem;
    margin: 1rem .5rem 0 .5rem;
    cursor: pointer;

    &:active {
        background-color: #006885;
    }
}

.svg-icon-upload {
    height: 3.6rem;
    width: 3.6rem;
    fill: #FFF;
}
`