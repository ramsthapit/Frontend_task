# Hamro Saman

A modern React + Redux product dashboard built using the DummyJSON API. It features pagination, category-based filtering, and enhanced error handling — making it a clean and functional UI for exploring fake e-commerce data.

### Live Demo

You can visit the site at:
https://frontend-task-roan.vercel.app/

## Available Scripts

- Product listing with pagination (10 per page)
- Category filter using dropdown
- Redux state management with @reduxjs/toolkit
- Creative error handling with contextual messages and icons
- Loading indicator during async fetches
- UI built with Tailwind CSS
- Clean and modular file structure

## Technologies Used

- React – Frontend library
- Redux Toolkit – State management
- Tailwind CSS – Utility-first CSS framework
- React Icons – Icon support for UI controls
- DummyJSON API – Fake REST API for product data

## Getting Started

### 1. Clone the repo

git clone https://github.com/ramsthapit/Frontend_task.git
cd Frontend_task

### 2. Install dependencies

npm install

### 3. Start the development server

npm start

## API Reference

Get all products:
https://dummyjson.com/products?limit=10&skip=0&select=title,category,rating,price

Get products by category:
https://dummyjson.com/products/category/:category

Get all categories:
https://dummyjson.com/products/categories
