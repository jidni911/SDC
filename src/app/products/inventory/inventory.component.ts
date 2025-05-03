import { Component } from '@angular/core';

import * as XLSX from 'xlsx';
import * as FileSaver from 'file-saver';

import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.scss']
})
export class InventoryComponent {
  searchQuery = '';
  selectedCategory = '';
  currentPage = 1;
  pageSize = 5;
  sortKey = '';
  sortAsc = true;


  // form = { name: '', category: '', price: 0, stock: 0 };

  categories = ['Bicycles', 'Helmets', 'Gloves', 'Lights', 'Accessories'];

  inventory = [
    {id : 1, name: 'Mountain Bike', category: 'Bicycles', price: 750, stock: 12 },
    { id : 2, name: 'Road Helmet', category: 'Helmets', price: 45, stock: 5 },
    { id : 3, name: 'Winter Gloves', category: 'Gloves', price: 25, stock: 0 },
    { id : 4, name: 'LED Tail Light', category: 'Lights', price: 15, stock: 60 },
    { id : 5, name: 'Bike Pump', category: 'Accessories', price: 30, stock: 2 },
    { id : 6, name: 'Chain Lube', category: 'Accessories', price: 10, stock: 15 },
    { id : 7, name: 'Full-Face Helmet', category: 'Helmets', price: 80, stock: 1 },
  ];

  filteredInventory() {
    let list = this.inventory.filter(item => {
      const matchesName = item.name.toLowerCase().includes(this.searchQuery.toLowerCase());
      const matchesCategory = this.selectedCategory ? item.category === this.selectedCategory : true;
      return matchesName && matchesCategory;
    });

    if (this.sortKey) {
      list = list.sort((a, b) => {
        let valA: any, valB: any;
        switch (this.sortKey) {
          case 'name':
            valA = a[this.sortKey];
            valB = b[this.sortKey];
            break;
          case 'category':
            valA = a[this.sortKey];
            valB = b[this.sortKey];
            break;
          case 'price':
            valA = a[this.sortKey];
            valB = b[this.sortKey];
            break;
          case 'stock':
            valA = a[this.sortKey];
            valB = b[this.sortKey];
            break;
        }

            // valA = a[this.sortKey];
            // valB = b[this.sortKey];
        return (valA < valB ? -1 : 1) * (this.sortAsc ? 1 : -1);
      });
    }

    return list;
  }

  paginatedInventory() {
    const start = (this.currentPage - 1) * this.pageSize;
    return this.filteredInventory().slice(start, start + this.pageSize);
  }

  totalPages(): number[] {
    const count = Math.ceil(this.filteredInventory().length / this.pageSize);
    return Array.from({ length: count }, (_, i) => i + 1);
  }

  prevPage() {
    if (this.currentPage > 1) this.currentPage--;
  }

  nextPage() {
    if (this.currentPage < this.totalPages().length) this.currentPage++;
  }

  goToPage(page: number) {
    this.currentPage = page;
  }

  clearFilters() {
    this.searchQuery = '';
    this.selectedCategory = '';
  }

  sortBy(key: string) {
    if (this.sortKey === key) {
      this.sortAsc = !this.sortAsc;
    } else {
      this.sortKey = key;
      this.sortAsc = true;
    }
  }

  getStockStatus(stock: number): string {
    if (stock === 0) return 'Out of Stock';
    if (stock < 5) return 'Low Stock';
    return 'In Stock';
  }

  getStockClass(stock: number): string {
    if (stock === 0) return 'badge bg-danger';
    if (stock < 5) return 'badge bg-warning text-dark';
    return 'badge bg-success';
  }

  // openModal() {
  //   this.selectedProduct = null;
  //   this.form = { name: '', category: '', price: 0, stock: 0 };
  //   this.modalOpen = true;
  // }

  // editProduct(product: any) {
  //   this.selectedProduct = product;
  //   this.form = { ...product };
  //   this.modalOpen = true;
  // }

  // closeModal() {
  //   this.modalOpen = false;
  // }

  // saveProduct() {
  //   if (this.selectedProduct) {
  //     Object.assign(this.selectedProduct, this.form);
  //   } else {
  //     this.inventory.push({ ...this.form });
  //   }
  //   this.closeModal();
  // }






exportToExcel(): void {
  const exportData = this.filteredInventory().map(item => ({
    Name: item.name,
    Category: item.category,
    Price: item.price,
    Stock: item.stock,
    Status: this.getStockStatus(item.stock),
  }));

  const worksheet: XLSX.WorkSheet = XLSX.utils.json_to_sheet(exportData);
  const workbook: XLSX.WorkBook = { Sheets: { 'Inventory': worksheet }, SheetNames: ['Inventory'] };
  const excelBuffer: any = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' });
  const data: Blob = new Blob([excelBuffer], { type: 'application/octet-stream' });
  FileSaver.saveAs(data, `Inventory_${new Date().toISOString().slice(0,10)}.xlsx`);
}


exportToPDF(): void {
  const doc = new jsPDF();

  doc.text('Inventory Report', 14, 15);

  autoTable(doc, {
    startY: 20,
    head: [['Name', 'Category', 'Price', 'Stock', 'Status']],
    body: this.filteredInventory().map(item => [
      item.name,
      item.category,
      item.price,
      item.stock,
      this.getStockStatus(item.stock),
    ])
  });

  doc.save(`Inventory_${new Date().toISOString().slice(0,10)}.pdf`);
}


}