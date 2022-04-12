import styled from 'styled-components';
import {Avatar, IconButton, Button} from '@material-ui/core/'
import ChatIcon from '@material-ui/icons/Chat'
import MoreVertIcon from '@material-ui/icons/MoreVert';
import SearchIcon from '@material-ui/icons/Search';
import * as EmailValidator from "email-validator"
import { auth, db } from '../firebase';
import {useAuthState} from "react-firebase-hooks/auth";
import {useCollection} from "react-firebase-hooks/firestore";
import Chat from "./Chat"

function Sidebar(props) {
    const [user] = useAuthState(auth);
    const userRef = db.collection("chats").where('users', 'array-contains', user.email);
    const [chatSnapshot] = useCollection(userRef)

    const createChat = () => {
        
        const input = prompt("Please enter an email address for the user you wish to chat with");

        if (!input) return null;
        if (EmailValidator.validate(input) && !chatAlreadyExists(input) && input !== user.email){
            // add chat to the chatDb if it doesn't already exists
            db.collection('chats').add({
                users: [user.email, input]
            })
        }
    } 

    function chatAlreadyExists(recipient) {
        !!chatSnapshot?.docs.find(
            (chat) => chat.data().users.find((user) => user === recipient)?.length > 0
        );
    }

    return (
        <Container>
            <Header>
                <UserAvatar src={user.photoURL} onClick= {() => auth.signOut() }/>
                    <IconContainer>
                        <IconButton>
                            <ChatIcon />
                        </IconButton>
                        <IconButton>
                            <MoreVertIcon />
                        </IconButton>
                        
                    </IconContainer>
            </Header>

            <Search>
                <SearchIcon />
                <SearchInput placeholder="SEARCH IN CHATS"/>
            </Search>

            <SearchbarButton onClick={createChat}>Start a new chat</SearchbarButton>

            {chatSnapshot?.docs.map(chat => (
                <Chat id={chat.id} key={chat.id} users={chat.data().users}/>
            ))}
        </Container>
    );
}

export default Sidebar;

const Container = styled.div``; 

const Header = styled.div`
    display: flex;
    position: sticky;
    top: 0;
    background-color: #fff;
    z-index: 1;
    justify-content: space-between;
    align-items: center;
    height: 80px;
    padding: 15px;
    border-bottom: 1px solid whitesmoke;
`; 

const UserAvatar = styled(Avatar)`
    cursor: pointer;

    :hover{
        opacity: 0.8;
    }
`;

const IconContainer = styled.div``;

const Search = styled.div`
    display: flex;
    align-items: center;
    padding: 15px;
    border-radius: 2px;
`;

const SearchInput = styled.input`
    flex: 1;
    border: none;
    outline-width: 0;
    font-size: 15px;
`;

const SearchbarButton = styled(Button)`
    width: 100%;
    font-Size: 15px;
    
    &&&{
        border-top: 1px solid whitesmoke;
        border-bottom: 1px solid whitesmoke;
    }
`;