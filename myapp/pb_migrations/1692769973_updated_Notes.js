/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("yruehtadm4wrc88")

  // remove
  collection.schema.removeField("no5i6bsk")

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("yruehtadm4wrc88")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "no5i6bsk",
    "name": "DateOfCreation",
    "type": "date",
    "required": false,
    "unique": false,
    "options": {
      "min": "",
      "max": ""
    }
  }))

  return dao.saveCollection(collection)
})
