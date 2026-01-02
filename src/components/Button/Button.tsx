
import styles from "./Button.module.css";

// Here the styles object contains CSS class names defined in Button.module.css and styles has become a class name. 
// 

type Props = {
    variant?: "primary" | "secondary";
    children: React.ReactNode;
    onClick?: () => void;               // The ? indicates that this prop is optional
    type? : "button" | "submit";

};

export function Button({variant = "primary", children, onClick, type = "button"} : Props) {

    const className = variant === "primary" ? styles.primary : styles.secondary;

    return (
        <button type = {type} className={`${styles.base} ${className}`} onClick={onClick}>
            {children}
        </button>
    );

    // The className is used to apply CSS classes to the button element.

}