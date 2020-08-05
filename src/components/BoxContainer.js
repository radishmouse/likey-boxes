import React from 'react';
import Box from './Box';

class BoxContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            likes: []
        }
    }
    render() {
        return (
            <div class="boxes-app">
                <h1>Boxes!</h1>
                <h2>Total: {
                    this.state.likes.reduce((total, howMany) => total + howMany, 0)
                }</h2>
                <button onClick={this._addBox}>Add Box</button>
                <div className="container">
                    {this.state.likes.map((howMany, index) => (
                            <Box 
                                key={index} 
                                count={howMany}
                                index={index}
                                handleAdd={this._updateLikes}
                                handleRemove={this._removeBox}
                            />
                        )
                    )}
                </div>
            </div>
        );
    }
    _addBox = () => {
        this.setState({
            likes: [...this.state.likes, 0]
        }, () =>{
            console.log('added a like')
        })
    }
    _updateLikes = (boxIndex) => {
        this.setState({
            likes: this.state.likes.map((howMany, i) => {
                if (i === boxIndex) {
                    return howMany + 1;
                } else {
                    return howMany;
                }
            })
        })
    }
    _removeBox = (boxIndex) => {
        this.setState({
            likes: this.state.likes.filter((howMany, i) => {
                return i !== boxIndex;
                // if (i === boxIndex) {
                    // return false; // don't include in next version of state
                // } else {
                    // return true;
                // }
            })
        });
    }
}

export default BoxContainer;