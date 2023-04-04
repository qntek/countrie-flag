function Button({ children, onClick, className = '' }) {
	const classes = 'btn appearance-none px-8 py-1 rounded-sm shadow-md h-8'.concat(' ',
		className
	);
	return (
		<button type="button" onClick={onClick} className={classes}>
			{children}
		</button>
	);
}

export default Button;
