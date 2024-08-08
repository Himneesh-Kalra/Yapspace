import { useEffect, useRef } from "react";
import useGetmessages from "../../hooks/useGetmessages"
import MessageSkeleton from "../skeletons/MessageSkeleton";
import Message from "./Message"



const Messages = () => {
    const {messages,loading}=useGetmessages();
    const lastmessageRef=useRef();
    useEffect(()=>{
        lastmessageRef.current?.scrollIntoView({behavior:"smooth"})
    })
    console.log("messages:",messages);
    return (
        <div className="px-4 flex-1 overflow-auto">

            {!loading && messages.length>0 && messages.map((message)=>(
                <div key={message._id}
                    ref={lastmessageRef}
                >
                    <Message message={message} />
                </div>
            ))}

            {loading && [...Array(3)].map((_, idx) => <MessageSkeleton key={idx} />)}

            {!loading && messages.length === 0 && (
				<p className='text-center'>Send a message to start the conversation</p>
			)}

        </div>
    )
}

export default Messages