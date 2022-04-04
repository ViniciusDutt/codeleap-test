import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    background: var(--background);
`;
export const Header = styled.div`
    width: 800px;
    padding: 28px 32px;
    background: var(--primary);
`;
export const Content = styled.div`
    display: flex;
    flex-direction: column;
    gap: 32px;
    width: 800px;
    padding: 48px 32px;
    background: var(--secondary);
`;