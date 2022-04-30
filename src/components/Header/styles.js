import styled from "styled-components"

export const Container = styled.header`
    background-color: var(--dark-grey);
    height: 4rem;
`

export const Menu = styled.div`
    width: 940px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;

    .logo{
        font-size: 2.5rem;
        color: var(--green);
        font-family: 'Zilla Slab';
        font-weight: 600;
        text-align: center;
       
    }
    .menu{
        display:flex;
        justify-content:space-between;
        margin-top: 1.5rem;
        
    }
    tr{
        margin-left: 2rem;
        color:var(--white);
        text-transform: uppercase;
    }
    a{
        color: var(--white);
        transition: 0.8s;
    }

    a:hover{
        color: var(--green)
    }


`