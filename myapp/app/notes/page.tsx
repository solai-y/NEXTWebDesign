import { create } from "domain";
import CreateNote from "./CreateNote";
// "/Users/solaiymeyapan/Documents/GitHub/NEXTWebDesign/myapp/app/notes/CreateNote"

async function getNotes() {
    const res = await fetch('http://127.0.0.1:8090/api/collections/Notes/records?page=1&perPage=30', {cache: 'no-store'});// the cache no store is to ensure that the items are refreshed every time info is pulled from the database
    const data = await res.json();
    // above line converts the data into json
    return data?.items as any[];
    // the above line returns the data as an array

}

export default async function NotePage(){

    const notes = await getNotes();// waits for a note to be available
    return (
        <div>
            <h1>Notes</h1>
            <div>
                {
                    notes?.map((note)=>{
                        return <Note key={note.id} note={note} />
                    })
                }
            </div>
            <CreateNote />
        </div>
    );

}

function Note({note}: any) {
    const {id, Title, Content, created} = note || {};
    return (
        <a href={`notes/${id}`}>
            <div>
                <h2>{Title}</h2>
                <h5>{Content}</h5>
                <p>{created}</p>
            </div>
        </a>
    )
}