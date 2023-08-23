async function getNote(noteID: string) {
    const res = await fetch(
            `http://127.0.0.1:8090/api/collections/Notes/records/${noteID}`, // use back ticks for dynamic fetching
            {
                next: {revalidate: 10}, // to get it to automatically check again every 10 seconds
            }
    );
    const data = await res.json();
    return data;
}

export default async function NotePage({params}: any) {
    const note = await getNote(params.id);
    return (
        <div>
            <h1>Notes/{note.id}</h1>
            <div>
                <h3>{note.Title}</h3>
                <h5>{note.Content}</h5>
                <p>{note.created}</p>
            </div>
        </div>
    )
}