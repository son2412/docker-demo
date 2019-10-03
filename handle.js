exports.insertDocuments = function(db, callback) {
  const collection = db.collection("users");
  collection.insertMany(
    [
      { id: 1, name: "Son", roles: [{ slug: "admin" }] },
      { id: 2, name: "Huong", roles: [{ slug: "superadmin" }] }
    ],
    function(err, result) {
      console.log("Insert success");
      callback(result);
    }
  );
};

exports.findDocuments = function(db, callback) {
  const collection = db.collection("users");
  collection.find({}).toArray(function(err, users) {
    console.log(users);
    callback(users);
  });
};

exports.updateDocument = function(db, callback) {
  const collection = db.collection("users");
  collection.updateOne({ id: 1 }, { $set: { name: "Van" } }, function(
    err,
    result
  ) {
    callback(result);
  });
};

exports.removeDocument = function(db, callback) {
  const collection = db.collection("users");
  collection.deleteOne({ id: 1 }, function(err, result) {
    callback(result);
  });
};

exports.config = function() {
  
}
