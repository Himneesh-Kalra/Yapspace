import{useAuthContext}from '../../context/AuthContext'
import { extractTime } from '../../utils/extractTime';
import useConversation from '../../zustand/useConversation';
const Message = ({message}) => {
    const {authUser}= useAuthContext();
    const{selectedConversation} =useConversation();
    const formattedTime=extractTime(message.createdAt);
    const fromMe = message.senderId === authUser._id;
    const chatClassname=fromMe ? 'chat-end' :'chat-start';

    const profilePic=fromMe ? authUser.profilePic : selectedConversation?.profilePic

    const bubbleBgColor=fromMe ? 'bg-blue-500' :"";
    return (
        <div className={`chat ${chatClassname}`}>
            <div className="chat-image avatar">
                <div className="w-10 rounded-full">
                    <img src={profilePic} alt="image chat bubble" />
                </div>
            </div>
            <div className={`chat-bubble text-white ${bubbleBgColor}`}>{message.message}</div>
            <div className="chat-footer opacity-50 text-xs flex gap-1 items-center">{formattedTime}</div>
        </div>
    )
}

export default Message