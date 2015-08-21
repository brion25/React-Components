var React = require('react'),
    Thumbnail = require('./thumbnail.jsx');

var Container = React.createClass({
    getInitialState : function(){
        return {
            images : [
                {
                    src : 'https://upload.wikimedia.org/wikipedia/en/d/d2/Juventus_Turin.svg',
                    alt : 'Logo',
                    header : 'Juventus Logo'
                },
                {
                    src : 'https://upload.wikimedia.org/wikipedia/commons/a/a8/Juventus_FC_2012-2013_players_(Shakthar_Donetsk_-_Juventus).jpg',
                    alt : 'Line Up Juventus vs Shakthar Donetsk',
                    header : 'Line Up'
                },
                {
                    src : 'http://www.juventus.co.uk/wordpress/wp-content/uploads/2014/11/maxresdefault1.jpg',
                    alt : '1 of my favorites',
                    header : 'My Favorites'
                }
            ]
        }
    },
    render : function(){
        var images = this.state.images;
        return (
            <div>
                <Thumbnail images={images} />
            </div>
        );
    }
});

module.exports = Container;