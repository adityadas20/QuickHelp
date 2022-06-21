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
            </div>);
        }
        else if (extraClassName == 'node-wall') {
            return (<div style={{
                display: 'inline-block'
            }}
                id={`node-${row}-${col}`}
                className="report"
                onMouseDown={() => onMouseDown(row, col)}
                onMouseEnter={() => onMouseEnter(row, col)}
                onMouseUp={() => onMouseUp()}>
            </div>);
        }
        else {
            return (
                <div
                    style={{ display: "inline-block" }}
                    id={`node-${row}-${col}`}
                    className="grass"
                    onMouseDown={() => onMouseDown(row, col)}
                    onMouseEnter={() => onMouseEnter(row, col)}
                    onMouseUp={() => onMouseUp()}
                >
                </div >
            );
        }
    }
}