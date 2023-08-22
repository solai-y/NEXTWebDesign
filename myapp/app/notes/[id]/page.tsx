async function getNote(noteID: string) {
    const res = await fetch(
            "http://127.0.0.1:8090/api/collections/Notes/records/${noteID}", 
            {
                next: {revalidate: 10},
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
            <div className={style.note}>
                <h3>{note.title}</h3>
                <h5>{note.content}</h5>
                <p>{note.created}</p>
            </div>
        </div>
    )
}