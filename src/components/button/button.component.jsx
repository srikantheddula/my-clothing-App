
import './button.styles.scss'

const button_types={google:'google-sign-in',
                    inverted:'inverted'}

const Button=({children,buttonType,onClick})=>{
return (
<button onClick={onClick} className={`button-container ${button_types[buttonType]}`}>
    {children}
</button>
)
}

export default Button;