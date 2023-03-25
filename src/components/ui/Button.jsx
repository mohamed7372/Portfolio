const Button = ({ name_btn, padding}) => {
    
    return (
        <button
            className={`text-primary-200 rounded-md border border-primary-200 ${padding} 
                hover:bg-primary-200 hover:bg-opacity-20`}>
            {name_btn}
        </button>
    );
}

export default Button;