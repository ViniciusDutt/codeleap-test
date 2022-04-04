import styled from 'styled-components';

export const Container = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background: rgba(119,119,119,0.8);
    
`;

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    width: 660px;
    background: var(--secondary);
    padding: 28px 32px;
    gap: 48px;

    h1 {
        font-size: 1.375rem;
        font-weight: 400;
    }

    div {
        display: flex;
        justify-content: flex-end;
        align-items: center;
        gap: 1rem;
    }
`;