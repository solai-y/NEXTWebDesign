'use client';

import {useState} from 'react';

export default function CreateNote() {
    const [Title, setTitle] = useState('');
    const [Content, SetContent] = useState('');

    const create = async () => {
        await fetch('http://127.0.0.1:8090/api/collections/Notes/records',
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                }, 
                body: JSON.stringify({
                    Title,
                    Content,
                }),
            }
        );
        SetContent('');
        setTitle('');
    }
    
    return (
        <form onSubmit={create}>
            <h3>Create Note</h3>
            <input type="text" placeholder='title' value={Title} onChange={(e)=>setTitle(e.target.value)}/>
            <textarea placeholder='content' value={Content} onChange={(e)=>SetContent(e.target.value)}></textarea>
            <button type="submit">Create Note</button>
        </form>
    );  
}