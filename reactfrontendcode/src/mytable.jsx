import React, { Component } from 'react';
import MyColumn from './mycolumn'

class MyTable extends Component {
    state = {  } 
    render() { 
        return (
        <table border="5">
            <tr>
                <MyColumn></MyColumn>
            </tr>

        </table>
        );
    }
}
 
export default MyTable;