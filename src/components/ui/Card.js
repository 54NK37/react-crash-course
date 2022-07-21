import classes from './Card.module.css'

// custom wrapper css which may be used for any components
// props.children : to handle elements passed between tags
// ref metupitem.js for example
function Card(props)
{   
    return <div className={classes.card}>{props.children}</div>

}

export default Card