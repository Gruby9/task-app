import React from "react";

class Overview extends React.Component {
    constructor(props,) {
        super(props)

    }

    render () {
        return (
            <ul>
                {this.props.title.map((t) => {
                    return <li key={t} ></li>
                })}
            </ul>
        )
    }
}

// function Overview(props) {
//     const arr = []
//     arr.push(props.title)
//     return (
//         <p>{}</p>
//     )
// }

export default Overview