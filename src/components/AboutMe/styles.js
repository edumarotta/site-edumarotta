import styled from 'styled-components';


export const Container = styled.main`
    background-color: var(--background);
    width: 940px;
    margin: 0 auto;

    .card {
        height: 5rem;
        width: 5rem;
        
        border-radius: 0.55rem;
        background-color: var(--background-cards);
        
        margin: 0 auto;
        margin-top: 3.12rem;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25);
        

        .infoIcon{
            margin-top: 1rem;
            margin-left: 1rem;
        }

  
    }
    h2{
        color: var(--white);
        font-size: 2.25rem;
        margin-top: 1.5rem;
        text-align: center;
    }
    .linha-1{
        width: 8rem;
        border: 1px solid var(--green);
        margin: 0 auto;
        margin-top: 1rem;

    }

    .linha-2{
        width: 5rem;
        border: 1px solid var(--green);
        margin: 0 auto;
        margin-top: .6rem;

    }
    .destaque {
        color:var(--green);

    }
    .resume{
        margin-top: 3.4rem;
        color: var(--white);
        line-height:18.77px;
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



    h3{
        margin-top: 5rem;
        color: var(--white);
        
    }

    .details-about{
        display: flex;
        justify-content: space-between;
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

    

`