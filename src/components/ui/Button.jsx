const Button = ({ name_btn, padding_left_right, padding_top_bottom }) => {
    
    return (
        <button
            className={`text-primary-200 rounded-md border border-primary-200 
                px-${padding_left_right} py-${padding_top_bottom} hover:bg-primary-200 hover:bg-opacity-20`}>
            {name_btn}
        </button>
    );
}
 
export default Button;