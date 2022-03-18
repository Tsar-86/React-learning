import React from 'react';
import Dialogs from "./Dialogs";
import {sendMessageCreator, updateNewMessageBodyCreator} from '../../redux/dialogs-reducer'; 

const DialogsContainer = (props) => {
    
    let state = props.store.getState().dialogsPage;

    // let dialogsElements = state.dialogs.map( d => <DialogItem name={d.name} id={d.id} />  );
    // let messagesElements = state.messages.map( m => <Message message={m.message}/> );
    // let newMessageBody = state.newMessageBody;
    
    let sendMessage = () => {
        props.store.dispatch(sendMessageCreator());
    }

    let updateNewMessageBody = (body) => {
        props.store.dispatch(updateNewMessageBodyCreator(body));
    }

    return ( <Dialogs sendMessage={sendMessage}  
                      updateNewMessageBody={updateNewMessageBody} 
                      dialogsPage={state} /> )
}

export default DialogsContainer;