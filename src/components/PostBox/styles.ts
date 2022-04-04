import styled from 'styled-components';

export const NewPost = styled.div`
    display: flex;
    flex-direction: column;
    padding: 24px 32px;
    border: 1px solid var(--outline);

    h1 {
        margin-bottom: 32px;
    }

    input {
        margin-bottom: 18px;
    }

    button {
        margin-top: 32px;
        align-self: flex-end
    }
`;