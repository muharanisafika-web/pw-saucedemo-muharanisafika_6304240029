\# Playwright E2E Testing - SauceDemo



Repository ini berisi pengujian otomatis (End-to-End Testing) pada aplikasi \[SauceDemo](https://www.saucedemo.com/) menggunakan Playwright.



\## Teknologi yang Digunakan



\- Node.js

\- Playwright

\- JavaScript

\- Git dan GitHub

\- GitHub Actions



\## Cara Menjalankan Test di Lokal



\### 1. Clone Repository



```bash

git clone https://github.com/muharanisafika-web/pw-saucedemo-muharanisafika\_6304240029.git

```



\### 2. Masuk ke Folder Proyek



```bash

cd pw-saucedemo-muharanisafika\_6304240029

```



\### 3. Install Dependencies



```bash

npm install

```



\### 4. Install Browser Playwright



```bash

npx playwright install

```



\### 5. Atur Password SauceDemo



Sebelum menjalankan test, atur environment variable pada PowerShell:



```powershell

$env:SAUCE\_PASSWORD="secret\_sauce"

```



\### 6. Jalankan Seluruh Test



```bash

npx playwright test

```



\### 7. Jalankan Test pada Browser Tertentu



\*\*Chromium:\*\*

```bash

npx playwright test --project=chromium

```



\*\*Firefox:\*\*

```bash

npx playwright test --project=firefox

```



\*\*WebKit:\*\*

```bash

npx playwright test --project=webkit

```



\### 8. Tampilkan HTML Report



```bash

npx playwright show-report

```



\## Struktur Folder



```text

pw-saucedemo/

|-- .github/

|   |-- workflows/

|       |-- playwright.yml

|-- pages/

|   |-- LoginPage.js

|   |-- InventoryPage.js

|   |-- CartPage.js

|   |-- CheckoutPage.js

|-- tests/

|   |-- 01-login-pertama.spec.js

|   |-- checkout.spec.js

|   |-- fixtures.js

|   |-- problem-user.spec.js

|-- playwright.config.js

|-- package.json

|-- package-lock.json

|-- README.md

```



\## GitHub Actions Status



!\[Playwright Tests](https://github.com/muharanisafika-web/pw-saucedemo-muharanisafika\_6304240029/actions/workflows/playwright.yml/badge.svg)



Pengujian otomatis dijalankan menggunakan GitHub Actions dengan strategi matrix pada tiga browser, yaitu Chromium, Firefox, dan WebKit.

