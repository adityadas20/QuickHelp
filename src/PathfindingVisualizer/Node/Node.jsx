import React, { Component } from 'react';

import './Node.css';
import './temp.css'

export default class Node extends Component {
    render() {
        const {
            col,
            isFinish,
            isStart,
            isWall,
            onMouseDown,
            onMouseEnter,
            onMouseUp,
            row,
        } = this.props;
        const extraClassName = isFinish
            ? 'node-finish'
            : isStart
                ? 'node-start'
                : isWall
                    ? 'node-wall'
                    : '';



        if (extraClassName == 'node-finish') {
            return (<div style={{
                display: 'inline-block'

            }}
                className='hospital'>
            </div>);
        }
        else if (extraClassName == 'node-start') {
            return (<div style={{
                display: 'inline-block'
            }}
                className="lady" >
                {/* <PregnantWomanIcon></PregnantWomanIcon> */}
            </div>);
        }
        else if (extraClassName == 'node-wall') {
            return (<div style={{
                display: 'inline-block'
            }}
                id={`node-${row}-${col}`}
                className="report"
                // className={`node ${extraClassName}`}
                onMouseDown={() => onMouseDown(row, col)}
                onMouseEnter={() => onMouseEnter(row, col)}
                onMouseUp={() => onMouseUp()}>
                {/* <ReportProblemIcon></ReportProblemIcon> */}
            </div>);
        }
        else {
            return (
                <div
                    style={{ display: "inline-block" }}
                    id={`node-${row}-${col}`}
                    className="grass"
                    // className={`node ${extraClassName}`}
                    onMouseDown={() => onMouseDown(row, col)}
                    onMouseEnter={() => onMouseEnter(row, col)}
                    onMouseUp={() => onMouseUp()}
                >
                    {/* <GrassIcon className="grassIcon"></GrassIcon> */}
                </div >
            );
            // </div>
            // );
        }
    }
}

/*import React, { Component } from 'react'
import PregnantWomanIcon from '@mui/icons-material/PregnantWoman';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import './temp.css'

import './Node.css';


export default class Node extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        const { isFinish, isStart } = this.props;
        const extraClassName = isFinish
            ? 'node-finish'
            : isStart
                ? 'node-start'
                : '';
        if (extraClassName == 'node-finish')
            return <div style={{
                display: 'inline',
                // VerticalAlign: 'text-bottom',
                // BoxSizing: 'inherit',
                // textAlign: 'center',
                // AlignItems: 'center'
            }
            } ><LocalHospitalIcon display="inline-block" className='hola'></LocalHospitalIcon> </div>

        else if (extraClassName == 'node-start')
            return <div style={{
                display: 'inline'
            }}><PregnantWomanIcon></PregnantWomanIcon></div>

        return <div className={`node ${extraClassName}`}></div>
    }
}
export const DEFAULT_NODE = {
    row: 0,
    col: 0,
};*/