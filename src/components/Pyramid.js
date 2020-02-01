import React from "react";

class Pyramid extends React.Component{
    render(){
        return(
          <div className="pyramid">
          <div className="row-1">
            <div className="square">{this.props.row1}</div>
          </div>

          <div className="row-2">
            <div className="square">{this.props.random}</div>
            <div className="square">{this.props.row2}</div>
          </div>

          <div>
            <div className="square">{this.props.random1}</div>
            <div className="square">{this.props.value}</div>
            <div className="square">{this.props.random2}</div>
          </div>

          </div>
        )
    }
}

export default Pyramid;