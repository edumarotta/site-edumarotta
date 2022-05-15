import styled from 'styled-components';


export const Container = styled.main`
    background-color: var(--background);
    width: 940px;
    margin: 0 auto;
    padding-bottom: 3rem;

    .card {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        margin-top: 50px;

    }

    .title{
        color: var(--green);
        font-weight: 600;
        width: 6rem;
        padding-top: 1rem;
        
    }

    .personal-details-value{
        color: var(--white)
    }

    .teste {
        margin-top: 5rem;
    }

    .personal-details-status{
        background-color:var(--green);
        color: var(--white);
        font-weight: bold;
        text-align: center;
        border-radius: 20px;
        margin-left: 3rem;
        padding-left: 2rem;
        padding-right: 2rem;
 
    }


    h3{
        margin-top: 5rem;
        color: var(--white);
        
    }

    .title-skills{
        margin-top: 1rem;
        color: var(--white);
        
    }

    .details-about{
        display: flex;
        justify-content: space-between;
    }

    .margem{
        margin-left: 20px;
    }

    .buttons-interest {
        display: flex;
        justify-content: space-between;
        padding-top: 1rem;

    }

    .button-interest{
        width: 5rem;
        height: 5rem;
        border-radius: 10px;
        box-shadow: 2px;
        background: var(--background-cards);
        margin-left: 1.5rem;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25);
    }


    .buttons-interest:nth-child(odd){
        margin-top: 1.5rem;
        
    }
    
    .icons{
        margin-top: 50%;
        margin-left: 50%;
        margin-top: 20%;
        width: 40px;
        height: 40px;
    }

    

`