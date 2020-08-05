import React from 'react';

class Box extends React.Component {
    render() {
        return (
            <div className="box"
            >
                Likes: {this.props.count}
                <button
                    onClick={() => {
                        this.props.handleAdd(this.props.index)
                    }}
                >😍</button>
                <button
                    onClick={() => {
                        this.props.handleRemove(this.props.index)
                    }}
                >💥</button>
            </div>
        );
    }
}

export default Box;