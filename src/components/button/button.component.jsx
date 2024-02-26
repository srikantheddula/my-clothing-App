
import './button.styles.scss'

const button_types={google:'google-sign-in',
                    inverted:'inverted'}

const Button=({children,buttonType})=>{
return (
<button className={`button-container ${button_types[buttonType]}`}>
    {children}
</button>
)
}

export default Button;