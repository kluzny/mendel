const BaseStep = require('./step');

class Initialize extends BaseStep {
    /**
     * @param {MendelCache} toolset.cache
     */
    constructor({cache}) {
        super();
        this.cache = cache;
    }

    start() {
        this.cache.on('entryAdded', id => this.pushEntry(id));
        this.cache.entries().forEach(id => this.pushEntry(id));
    }

    pushEntry(entryId) {
        this.emit('done', {entryId});
    }
}

module.exports = Initialize;
