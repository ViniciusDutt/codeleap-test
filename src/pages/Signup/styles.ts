import { Button } from 'components';
import styled from 'styled-components';

export const Container = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background: var(--background)
`;
export const Content = styled.div`
    width: 500px;
    display: flex;
    flex-direction: column;
    padding: 28px 32px;
    background: var(--secondary);

    h1 {
        margin-bottom: 32px;
    }

    button {
        margin-top: 24px;
        align-self: flex-end
    }
`;