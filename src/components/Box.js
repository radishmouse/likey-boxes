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
                ><span role="img" aria-label="thumbs up">👍</span></button>
                <button
                    onClick={() => {
                        this.props.handleRemove(this.props.index)
                    }}
                ><span role="img" aria-label="boom">💥</span></button>
            </div>
        );
    }
}

export default Box;