import styled from 'styled-components';

type Props = {
    outlineButton?: boolean
}

export const Container = styled.button<Props>`
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    width: 128px;
    height: 32px;
    font-size: 1rem;
    font-weight: bold;
    text-transform: uppercase;
    color: ${(props) => (props.outlineButton ? 'var(--primary)' : 'var(--secondary)')};
    background: ${(props) => (props.outlineButton ? 'transparent' : 'var(--primary)')};
    border: ${(props) => (props.outlineButton ? '1px solid var(--primary)' : 'none')};

    :disabled {
        color: var(--terciary);
        background: var(--muted);
        cursor: not-allowed;
    }
`;