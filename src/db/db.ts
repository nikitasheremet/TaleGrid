export let db: IDBDatabase;

export async function openDB() {
  console.log("Opening database...");
  await new Promise((resolve, reject) => {
    const request = indexedDB.open("talegrid", 3);
    request.onerror = (event) => {
      console.error("Why didn't you allow my web app to use IndexedDB?!");
      reject(null);
    };
    request.onupgradeneeded = (event) => {
      db = request.result;

      try {
        db.createObjectStore("universes", { keyPath: "id" });

        const tableObjectStore = db.createObjectStore("tables", {
          keyPath: "id",
        });
        tableObjectStore.createIndex("universeId", "universeId", {
          unique: false,
        });

        const columnObjectStore = db.createObjectStore("columns", {
          keyPath: "id",
        });
        columnObjectStore.createIndex("tableId", "tableId", { unique: false });

        const rowObjectStore = db.createObjectStore("rows", {
          keyPath: "id",
        });
        rowObjectStore.createIndex("tableId", "tableId", { unique: false });

        const cellObjectStore = db.createObjectStore("cells", {
          keyPath: "id",
        });
        cellObjectStore.createIndex("rowId", "rowId", { unique: false });
        cellObjectStore.createIndex("columnId", "columnId", { unique: false });
      } catch (e) {
        console.error(e);
      }
    };
    request.onsuccess = (event) => {
      if (!db) {
        db = request.result;
      }
      db.onerror = (event) => {
        // Generic error handler for all errors targeted at this database's
        // requests!
        console.error(`Database error:`);
      };
      console.log("Database opened successfully!");
      resolve(null);
    };
  });
}
