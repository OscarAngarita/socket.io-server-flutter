const Band = require("./band");


class Bands {

    constructor() {
        this._bands = [];
    }

    addBand(band = new Band()) {
        this._bands.push(band);
    }

    getBands(){
        return this._bands;
    }

    deleteBand(id = '') {
        this._bands = this._bands.filter(band => band.id !== id);
        return this._bands;
    }

    voteBand(id = '') {
        this._bands = this._bands.map(band => {
            
            if(band.id === id) {
                band.votes++;
                return band;
            } else {
                return band;
            }
        });
    }

}


module.exports = Bands;