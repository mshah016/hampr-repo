export default function JournalPage() {
    function checkpoint() {
        console.log("button clicked");
    }
    return (
        <>
            <div className="main">
                <div className="title">
                    <h1>HaMPR Daily Journals</h1>
                </div>
                <div className="journal">
                    <textarea className="text" placeholder="Enter joural entry here">
                    </textarea>
                </div>
                <div className="submit">
                    <button type="button" onClick ={() => checkpoint()}>Submit</button>
                </div>
            </div>
        </>
    )
}