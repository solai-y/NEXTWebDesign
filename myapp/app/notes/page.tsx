import { create } from "domain";

async function getNotes() {
    const res = await fetch('http://127.0.0.1:8090/api/collections/Notes/records?page=1&perPage=30');
    const data = await res.json();
    // above line converts the data into json
    return data?.items as any[];
    // the above line returns the data as an array

}

export default async function NotesPage(){

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
        </div>
    );

}

function Note({note}: any) {
    const {id, Title, Content, created} = note || {};
    return (
        <a href={"notes/${id}"}>
            <div>
                <h2>{Title}</h2>
                <h5>{Content}</h5>
                <p>{created}</p>
            </div>
        </a>
    )
}