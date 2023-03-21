import Button from "./ui/Button";
import Project from "./Project";

const ListProjects = () => {
    return (
        <>
            <h2>Other Noteworthy Projects</h2>
            <p>view the archive</p>
            <Project title={'proj1'} descp={'loremlskdjfskdlfj skdjf'} list_tools={['react']} />
            <Button name_btn='Show Less' padding_left_right={20} padding_top_bottom={20}/>
        </>
    );
}
 
export default ListProjects;