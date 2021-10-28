const Directory = require('./Directory')
const Document = require('./Document')

Directory.hasMany(Document, { onDelete: 'cascade' });

module.exports = async () => {
    try {
        await Directory.sync();
        await Document.sync();
    }
    catch (error) {
        console.log('Error while create table: ', error);
    }
}