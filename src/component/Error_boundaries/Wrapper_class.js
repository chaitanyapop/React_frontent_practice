import React from "react";

class Wrapper_class extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            flag: false
        };
    }

    static getDerivedStateFromError(error) {
        console.log("I am here 1");
        return { error:error, flag: true };// this will update the state automatically
    }

    componentDidCatch(error, errorInfo) {
        console.log("I am here 2");
        console.log("Error caught by error boundary", error, errorInfo); // component did catch is mainly used for logging purpose
    }

    render() {
        console.log("Rendering Wrapper_class");

        if (this.state.flag) {
            console.log(this.state.flag)
            return (
                <div>
                    <p>The error has been occurred and caught by error boundary, the error is: {this.state.error.message}</p>
                </div>
            );
        }
        return this.props.children;
    }
}

export default Wrapper_class;
