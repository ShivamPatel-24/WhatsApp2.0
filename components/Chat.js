import {Avatar } from '@material-ui/core/'
import styled from 'styled-components';


function Chat({ id, user}) {
    return (
        <Container>
            <UserAvatar />
            <p>Recipient's email</p>
        </Container>
    );
}

export default Chat;


const Container = styled.div`
    display: flex;
    align-items: center;
    cursor: pointer;
    padding: 15px;
    word-wrap: break-word;

    :hover{
        background-color: #e9eaeb;
    }
`;

const UserAvatar = styled(Avatar)`
    margin: 5px;
    margin-right: 15px;
`;
