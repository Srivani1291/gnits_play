import React from "react";

import Thead from "./thead";
import Tbody from "./tbody";

class Table extends React.Component{
    constructor(){
        super();
        this.values = [
        ['Tony Stark','Iron Man','Avengers'],
        ['Peter','Spider Man','Avengers'],
        ['Parker','Bat Man','Justice League']
    ];

    this.headers=['Name','Alias','Team'];
    }
    render(){
        return(
            <table>
                <Thead values={this.headers}/>
                <Tbody values={this.values}/>
            </table>
        )
    }
}

export default Table;