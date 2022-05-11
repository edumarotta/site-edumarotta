import styled from "styled-components";
import imgBg from './img-home.jpg';

export const Container = styled.main`
    background-image: url(${imgBg});
    height:43.75rem;

    .content{
        width: 940px;
        margin: 0 auto;
    }
    .me{
        border-radius: 50%;
        width: 12,75rem;
        height: 12.75rem;
        margin-top: 50px;
        margin-left: 42%;
        border: var(--green);
        transform: scale(1);
	    animation: pulse 2s infinite;
    }

    @keyframes pulse {
	0% {
		transform: scale(0.95);
		box-shadow: 0 0 0 0 var(--green);
	}

	70% {
		transform: scale(1);
		box-shadow: 0 0 0 20px var(--green);
	}

	100% {
		transform: scale(0.95);
		box-shadow: 0 0 0 0 var(--green);
	}
}

    .card{
        background-color: var(--dark-grey);
        width:340px;
        height:350px;
        border-radius: 20px;
       
        margin-top: -80px;
        margin-left: 35%;
        

    }
    .name{
        padding-top: 100px;
        text-transform: uppercase;
        color: var(--white);
        margin-left: 55px;
        font-size: 2rem;
        font-weight: 600;
        
    }

    .office{
        text-transform: uppercase;
        color: var(--white);
        margin-left: 55px;
        margin-top: 10px;

    }

    td{
        width: 200px;
        padding-top: 100px;
        margin: 0 auto;
        display: flex;
        justify-content: space-around;
    }



`