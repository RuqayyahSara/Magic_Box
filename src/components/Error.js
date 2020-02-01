import React from "react";
class Error extends React.Component {
    refreshPage = () => {
        window.location.reload(false);
    }
    render() {
        return (
            <div>
                <div className="wrong"><h2>You failed</h2></div>
                <div className="wrong"><span>&#10008;</span></div>
                <h2> Enter the correct input</h2><br/><br/>
            </div>
        )
    }
}

export default Error;