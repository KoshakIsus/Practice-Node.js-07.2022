const pathDB = "./private/database.db";
const db = require('better-sqlite3')(pathDB);

class DataProcessing {
    getFeeds() {
        let query = `
            SELECT userName, userFeed, userRate
            FROM feeds
            ORDER BY userRate DESC`;
        let rows = db.prepare(query).all();
        return rows;
    }
    insertFeed(name, feed, userRate) {
        let values = { name:name, feed:feed, userRate:userRate};
        let query = `
            INSERT INTO feeds (userName,userFeed,userRate)
            VALUES (@name, @feed, @userRate)`;
        db.prepare(query).run(values);
    }
}

module.exports = new DataProcessing();
