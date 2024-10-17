## [EN]
# Database Schema Visualization Project

This project aims to visualize the tables and schema of an MSSQL database using JavaScript and Node.js on the web. The server-side connects to the database and retrieves table information, while the client-side displays these tables and relationships visually.

## Table of Contents

- [Features](#features)
- [Requirements](#requirements)
- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Contributing](#contributing)
- [License](#license)

## Features

- **MSSQL Database Connection:** Connects to an MSSQL database using Node.js and retrieves the table schema.
- **API Endpoint:** Creates an API endpoint (`/schema`) with Express.js to provide table data in JSON format.
- **Web Visualization:** Visualizes the database schema using JavaScript and Mermaid.js on the client side.
- **Dynamic Data Processing:** Automatically reflects database changes in the web interface.

## Requirements

- **Node.js:** Version 12.x or higher
- **npm:** Comes with Node.js
- **MSSQL Database:** An MSSQL database is required to run this project.

## Installation

### 1. Clone or Download the Project

```bash
git clone https://github.com/ecevah/Sql-To-ER-Conterters.git
cd database-visualization
```

### 2. Install the Required Modules

```bash
npm install
```

### 3. Configure Database Connection

Update your database connection settings in the `server.js` file:

```javascript
const config = {
    user: 'your_username',
    password: 'your_password',
    server: 'your_server', 
    database: 'your_database',
    options: {
        encrypt: true, 
        trustServerCertificate: true 
    }
};
```

### 4. Start the Server

```bash
node server.js
```

You should see a message indicating the server is running successfully:

```
Server is running on port 3000
```

### 5. Access the Web Interface

Open your browser and go to:

```
http://localhost:3000
```

## Usage

- **Visualize the Database Schema:** The web interface will display the tables and columns of your database as a visual diagram.
- **Table Information:** Each table's column names, data types, and other details will be shown.
- **Diagram Updates:** Any changes made to the database will reflect on the web interface once the server is restarted.

## Project Structure

```bash
MsSQL-To-ER-Converter/
├── server.js           
├── package.json        
├── package-lock.json  
└── public/             
    └── index.html      
```

## Contributing

We welcome contributions! Please follow these steps:

1. **Fork** the repository.
2. Create a new **branch**: `git checkout -b feature/NewFeature`
3. **Commit** your changes: `git commit -am 'Add new feature'`
4. **Push** to the branch: `git push origin feature/NewFeature`
5. Open a **Pull Request**.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.

## Contact

If you have any questions or suggestions, feel free to reach out at [eecevah@gmail.com](mailto:eecevah@gmail.com).

---

Thank you and happy coding!



## [TR]
# Veritabanı Şeması Görselleştirme Projesi

Bu proje, bir MSSQL veritabanının tablolarını ve şemasını JavaScript ve Node.js kullanarak web üzerinde görselleştirmeyi amaçlamaktadır. Sunucu tarafında veritabanına bağlanarak tablo bilgileri alınmakta, istemci tarafında ise bu veriler kullanılarak tablolar ve ilişkileri görsel olarak gösterilmektedir.

## İçindekiler

- [Özellikler](#özellikler)
- [Gereksinimler](#gereksinimler)
- [Kurulum](#kurulum)
- [Kullanım](#kullanım)
- [Proje Yapısı](#proje-yapısı)
- [Katkıda Bulunma](#katkıda-bulunma)
- [Lisans](#lisans)

## Özellikler

- **MSSQL Veritabanı Bağlantısı:** Node.js kullanarak MSSQL veritabanına bağlanır ve tablo şemasını çeker.
- **API Endpoint:** Express.js ile `/schema` endpoint'i oluşturularak tablo verileri JSON formatında sunulur.
- **Web Görselleştirme:** İstemci tarafında JavaScript ve Mermaid.js kullanarak veritabanı şeması görselleştirilir.
- **Dinamik Veri İşleme:** Veritabanındaki değişiklikler otomatik olarak web arayüzüne yansır.

## Gereksinimler

- **Node.js:** 12.x veya üstü
- **npm:** Node.js ile birlikte gelir
- **MSSQL Veritabanı:** Projenin çalışabilmesi için bir MSSQL veritabanına erişiminiz olmalıdır.

## Kurulum

### 1. Projeyi Klonlayın veya İndirin

\`\`\`bash
https://github.com/ecevah/Sql-To-ER-Conterters.git
cd database-visualization
\`\`\`

### 2. Gerekli Modülleri Yükleyin

\`\`\`bash
npm install
\`\`\`

### 3. Veritabanı Bağlantı Bilgilerini Ayarlayın

\`server.js\` dosyasında, veritabanı bağlantı ayarlarını kendi bilgilerinizle güncelleyin:

\`\`\`javascript
const config = {
    user: 'kullanici_adi',
    password: 'sifre',
    server: 'sunucu_adresi', 
    database: 'veritabani_adi',
    options: {
        encrypt: true, // Azure için true olmalı
        trustServerCertificate: true // Yerel bağlantılar için true yapın
    }
};
\`\`\`

### 4. Sunucuyu Başlatın

\`\`\`bash
node server.js
\`\`\`

Sunucunun başarılı bir şekilde çalıştığını belirten mesajı görmelisiniz:

\`\`\`
Sunucu 3000 portunda çalışıyor
\`\`\`

### 5. Web Arayüzüne Erişin

Tarayıcınızda aşağıdaki URL'ye gidin:

\`\`\`
http://localhost:3000
\`\`\`

## Kullanım

- **Veritabanı Şemasını Görüntüleme:** Web arayüzü, veritabanınızın tablolarını ve sütunlarını görsel bir diyagram olarak gösterecektir.
- **Tablo Bilgileri:** Her tablo için sütun isimleri, veri tipleri ve diğer detaylar görüntülenir.
- **Diyagram Güncelleme:** Veritabanında yapılan değişiklikler sunucu yeniden başlatıldığında web arayüzüne yansır.

## Proje Yapısı

```bash
MsSQL-To-ER-Converter/
├── server.js           
├── package.json        
├── package-lock.json  
└── public/             
    └── index.html      
```

## Katkıda Bulunma

Katkılarınızı memnuniyetle karşılıyoruz! Lütfen aşağıdaki adımları takip edin:

1. **Fork** edin.
2. Yeni bir **branch** oluşturun: \`git checkout -b ozellik/YeniOzellik\`
3. Değişikliklerinizi **commit** edin: \`git commit -am 'Yeni özelliği ekle'\`
4. **Branch**'inizi **push** edin: \`git push origin ozellik/YeniOzellik\`
5. Bir **Pull Request** açın.

## Lisans

Bu proje MIT Lisansı ile lisanslanmıştır. Daha fazla bilgi için [LICENSE](LICENSE) dosyasına bakınız.

## İletişim

Herhangi bir sorunuz veya öneriniz varsa, lütfen [eecevah@gmail.com](mailto:eecevah@gmail.com) adresinden bana ulaşın.

---

Teşekkürler ve iyi kodlamalar!
