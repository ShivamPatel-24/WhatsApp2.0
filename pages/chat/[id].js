import Head from 'next/head'
import styled from 'styled-components';
import Sidebar from '../../components/Sidebar'
import ChatScreen from '../../components/ChatScreen'
import { auth, db } from '../../firebase';
import {useAuthState} from "react-firebase-hooks/auth";

function Chat({ messages, chat}) {

    const [user] = useAuthState(auth);

    return (
        <Container>
            <Head>
                <title>Chat</title>
            </Head>
            <Sidebar /> 
            <ChatContainer>
                <ChatScreen />
            </ChatContainer>
        </Container>
    );
}

export default Chat;

export async function getServerSideProps(context){
    const ref = db.collection("chats").doc(context.query.id);

    // have the messages ready on the server
    const messagesRef = await ref
        .collection("messages")
        .orderBy('timeStamp', 'asc')
        .get()

        const messages = messagesRef.docs.map(doc => ({
            id: doc.id,
            ...doc.data()
        })).map(messages => ({
            ...messages,
            timestamp: messages.timestamp.toDate().gettime()
        }))

        const chatRes = await ref.get();
        const chat = {
            id: chatRes.id,
            ...chatRes.data()
        }

        console.log(messages, chat);

        return {
            props: {
                messages: JSON.stringify(messages),
                chat: chat
            }
        }
}

const Container = styled.div`
    display: flex;
`;

const ChatContainer = styled.div`
    flex: 1;
    overflow: scroll;
    height: 100vh;


    ::-webkit-scroll{
        display: none;
    }

    -ms-overflow-style: none;
    scrollbar-width: none;
`;