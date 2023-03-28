const Button = ({ name_btn, padding, handleBtn}) => {
    
    return (
        <button
            className={`text-primary-200 rounded-md border border-primary-200 ${padding} 
                hover:bg-primary-200 hover:bg-opacity-20`}
            onClick={handleBtn}>
            {name_btn}
        </button>
    );
}

export default Button;