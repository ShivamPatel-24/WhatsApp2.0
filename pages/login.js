import Head from 'next/head'
import styled from 'styled-components';
import {Button} from '@material-ui/core'
import {auth, provider} from '../Firebase'

export default function Login() {

    const signIn = () => {
        auth.signInWithPopup(provider).catch(alert);
    }

    return (
        <Container>
            <Head>
                <title>Login</title>
            </Head>
        
            <LoginContainer>
                <Logo src="https://assets.stickpng.com/thumbs/580b57fcd9996e24bc43c543.png" />
                <Button onClick={signIn} variant="outlined">Sign in with Google</Button>
            </LoginContainer>
        </Container>
    );
}

const Container = styled.div`
    display: grid;
    place-items: center;
    height: 100vh;
    background-color: whitesmoke;
`;

const LoginContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding: 100px;
    align-items: center;
    background-color: white;
    border-radius: 5px;
    box-shadow: 0 4px 14px -3px rgb(0, 0, 0, 0.8);
`;

const Logo = styled.img`
    height: 200px;
    width: 200px;
    margin-bottom: 50px;
`;