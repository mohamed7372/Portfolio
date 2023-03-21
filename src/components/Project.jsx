const Project = ({title, descp, list_tools}) => {
    return (
        <>
            <header>
                <i></i>
                <div className="links">
                    <i></i>
                    <i></i>
                </div>
            </header>
            <main>
                <h4>{title}</h4>
                <p>{descp}</p>
                <ul className="list-tools">
                    {list_tools.map(tool => <li>{tool}</li>)}
                </ul>
            </main>
        </>
    );
}
 
export default Project;