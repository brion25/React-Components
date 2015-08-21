var React = require('react');

var Image = React.createClass({
    render:function(){
        return (
            <div className="row">
                {this.props.images.map(this.renderImage)}
            </div>
        );
    },
    renderImage : function(image){
        return (
            <div className="col-md-4 col-sm-4">
                <div className="thumbnail">
                    <img className="my-images" src={image.src} alt={image.alt} />
                    <div className="caption">
                        <h3>{image.header}</h3>
                        <p>{image.alt}</p>
                    </div>
                </div>
            </div>
        );
    }
});

module.exports = Image;