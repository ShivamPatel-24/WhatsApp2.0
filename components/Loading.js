import {Circle} from 'better-react-spinkit';

function Loading(props) {
    return (
        <center style={styles}>
            <div>
                <img src="https://assets.stickpng.com/thumbs/580b57fcd9996e24bc43c543.png" 
                    alt=""
                    height={200}
                    style={{marginBottom: 10}} 
                />
                <Circle color="#3CBC28" size={60}/>
            </div>
            
        </center>
    );
}

export default Loading;

const styles = {
    display: "grid",
    placeItems: "center",
    height: "100vh"
}