import React from "react";

class Pass extends React.Component {

    refreshPage = () => {
        window.location.reload(false);
    }
    render() {
        return (
            <div>
                <div className="correct"><h2>You passed</h2></div>  
                <div className="correct"><span id="span">&#10004;</span></div>
                <br /> <button className="button" onClick={this.refreshPage}>Restart</button>
            </div>
        )
    }
}

export default Pass;