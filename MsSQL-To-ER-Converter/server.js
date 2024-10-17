const sql = require("mssql");
const express = require("express");
const cors = require("cors");
const path = require("path");

const app = express();
app.use(cors());
app.use(express.static(path.join(__dirname, "public")));

// Veritabanı bağlantı ayarları
const config = {
  user: "usernamr",
  password: "pass",
  server: "server",
  database: "db",
  options: {
    encrypt: true,
    trustServerCertificate: true,
  },
};

// Şema verisini döndüren API endpoint'i
app.get("/schema", async (req, res) => {
  try {
    await sql.connect(config);
    const result = await sql.query(`
      SELECT 
        TABLE_SCHEMA,
        TABLE_NAME,
        COLUMN_NAME,
        DATA_TYPE,
        CHARACTER_MAXIMUM_LENGTH,
        IS_NULLABLE,
        COLUMN_DEFAULT
      FROM 
        INFORMATION_SCHEMA.COLUMNS
      ORDER BY 
        TABLE_SCHEMA,
        TABLE_NAME,
        ORDINAL_POSITION;
    `);
    res.json(result.recordset);
  } catch (err) {
    console.error(err);
    res.status(500).send("Veritabanı sorgusu başarısız oldu");
  }
});

// İlişkileri döndüren yeni API endpoint'i
app.get("/relationships", async (req, res) => {
  try {
    await sql.connect(config);
    const result = await sql.query(`
      SELECT 
        fk.name AS ForeignKeyName,
        tp.name AS ParentTable,
        cp.name AS ParentColumn,
        tr.name AS ReferencedTable,
        cr.name AS ReferencedColumn
      FROM 
        sys.foreign_keys AS fk
      INNER JOIN sys.tables AS tp ON fk.parent_object_id = tp.object_id
      INNER JOIN sys.tables AS tr ON fk.referenced_object_id = tr.object_id
      INNER JOIN sys.foreign_key_columns AS fkc ON fk.object_id = fkc.constraint_object_id
      INNER JOIN sys.columns AS cp ON fkc.parent_column_id = cp.column_id AND fkc.parent_object_id = cp.object_id
      INNER JOIN sys.columns AS cr ON fkc.referenced_column_id = cr.column_id AND fkc.referenced_object_id = cr.object_id
      ORDER BY 
        ParentTable, ReferencedTable;
    `);
    res.json(result.recordset);
  } catch (err) {
    console.error(err);
    res.status(500).send("Veritabanı sorgusu başarısız oldu");
  }
});

// Sunucuyu başlatma
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Sunucu ${PORT} portunda çalışıyor`);
});
