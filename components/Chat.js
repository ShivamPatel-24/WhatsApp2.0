import {Avatar } from '@material-ui/core/'
import styled from 'styled-components';
import getReceipentEmail from '../utils/getReceiptEmail';
import { auth, db } from '../Firebase'
import {useAuthState} from "react-firebase-hooks/auth";
import { useCollection } from 'react-firebase-hooks/firestore';


function Chat({ id, users}) {

    const [user] = useAuthState(auth);

    const [recipientSnapshot] = useCollection(
        db.collection("users").where('email', '==', getReceipentEmail(users, user))
    )

    const recipient = recipientSnapshot?.docs?.[0]?.data();
    const recipientEmail = getReceipentEmail(users, user);

    return (
        <Container>
            {recipient ? 
                <UserAvatar src={recipient?.photoURL}/> :
               (<UserAvatar>{recipientEmail[0]}</UserAvatar>)
            } 
            <p>{recipientEmail}</p>
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
