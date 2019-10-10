import styled from 'styled-components';

export const Container = styled.div `
.side-nav {
    font-size: 1.6rem;
    text-align: center;
    list-style: none;
    padding: 0;
    margin-top: 3.5rem;
    
    &__item {
        
       &:hover {
           background-color: var(--color-primary-dark);
       }
   
        &-active {
            background-color: var(--color-primary-dark);
        }
    }

    &--link {
        display: block;
        color: var(--color-grey-light-1);
        text-decoration: none;
        text-transform: uppercase;
        padding: 1.5rem 3rem;
    }
}

.bottom-options {
    display: flex;
    justify-content: center;
    text-align: center;
    padding: 2rem;

    &__svg-icon--add {
        margin-left: .8rem;
        fill: #FFF;
        height: 15px;
        width: 15px;
    }

}
`