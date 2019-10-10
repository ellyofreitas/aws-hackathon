import styled from 'styled-components';

export const Container = styled.div `
.user-nav {
    display: flex;
    align-items: center;

    &__user {
        display: flex;
        align-items: center;

        &--photo {
            width: 3.6rem;
            height: 3.6rem;
            border-radius: 50px;
        }
    
        &--name {
            margin-left: 1rem;
        }

        &--expand-icon {
            fill: #21212187;
            margin-left: 1rem;
            width: .8rem;
            height: .8rem;
        }
    }
}   
`