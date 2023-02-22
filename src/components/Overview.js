import React from "react";

class Overview extends React.Component {
    constructor(props,) {
        super(props)

        this.state = {
            arr: []
        }

        this.add = this.add.bind(this)
    }

    add(x) {
        this.state.arr.push(x)
    }

    render () {
        return (
            <p>{this.state.arr}</p>
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