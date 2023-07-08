const fs = require('fs');
const XLSX = require('xlsx');

const readExcelFile = () => {
  const file = './assets/data/data.xlsx';
  const workbook = XLSX.readFile(file);
  const worksheet = workbook.Sheets[workbook.SheetNames[0]];
  const jsonData = XLSX.utils.sheet_to_json(worksheet);

  const columns = worksheet['!range'].e.c + 1;
  const data = {};

  for (let i = 0; i < columns; i++) {
    const column = XLSX.utils.encode_col(i);
    const columnData = jsonData.map((row) => row[column]);

    data[column] = columnData;
  }

  console.log(data);
};

module.exports = readExcelFile;
