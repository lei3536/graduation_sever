let BaseDao = require('../base/BaseDao');

class HotDao extends BaseDao {
    constructor() {
        // 设置主键名称，默认id。autoPK主键是否自增长
        super({primaryKey: 'hot_id', tableName: 'hot', autoPK: true});
    }
}

module.exports = HotDao;