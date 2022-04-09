import styled from 'styled-components';
import {Avatar, IconButton, Button} from '@material-ui/core/'
import Chat from '@material-ui/icons/Chat'
import MoreVertIcon from '@material-ui/icons/MoreVert';
import SearchIcon from '@material-ui/icons/Search';
import * as EmailValidator from "email-validator"

function Sidebar(props) {

    const createChat = () => {
        const input = prompt("Please enter an email address for the user you wish to chat with");

        if (!input) return null;
        if (EmailValidator.validate(input)){
            // add chat to the db
        }
    }

    return (
        <Container>
            <Header>
                <UserAvatar />
                    <IconContainer>
                        <IconButton>
                            <Chat />
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
    padding: 20px;
    border-radius: 2px;
`;

const SearchInput = styled.input`
    flex: 1;
    border: none;
    outline-width: 0;
    font-size: 20px;
`;

const SearchbarButton = styled(Button)`
    width: 100%;
    font-Size: 20px;
    
    &&&{
        border-top: 1px solid whitesmoke;
        border-bottom: 1px solid whitesmoke;
    }
`;