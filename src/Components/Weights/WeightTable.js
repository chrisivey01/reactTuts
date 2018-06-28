import React from 'react'

export default class WeightTable extends React.Component {

    render() {
        return(
        <div>
            <table>
                <tbody>
                    <tr>
                        <td style={{float:'left'}}>Forty Fives</td>
                        <td>{this.props.fortyFives}</td>
                    </tr>
                    <tr>
                        <td style={{float:'left'}}>Twenty Fives</td>
                        <td>{this.props.twentyFives}</td>
                    </tr>
                    <tr>
                        <td style={{float:'left'}}>Tens</td>
                        <td>{this.props.tens}</td>
                    </tr>
                    <tr>
                        <td style={{float:'left'}}>Fives</td>
                        <td>{this.props.fives}</td>
                    </tr>
                    <tr>
                        <td style={{float:'left'}}>Two Point fives</td>
                        <td>{this.props.twoPointFives}</td>
                    </tr>
                    <tr>
                        <td style={{float:'left'}}>Left Over</td>
                        <td>{this.props.leftOver}</td>
                    </tr>
                </tbody>
            </table>
        </div>
        )
    }
}

