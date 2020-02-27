
exports.up = function(knex) {
  return knex.schema.createTable('cohorts', function(tbl){
      tbl.increments()
       
      tbl
  })
};

exports.down = function(knex) {
  
};
