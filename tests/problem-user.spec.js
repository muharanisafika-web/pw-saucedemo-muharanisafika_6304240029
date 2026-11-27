
import { test, expect, PASSWORD } from './fixtures.js';

const users = ['standard_user', 'problem_user'];

for (const username of users) {
  test(`checkout dengan ${username}`, async ({
    loginPage, inventoryPage, cartPage, checkoutPage,
  }) => {
    // Bug pada problem_user memang diharapkan ditemukan
    test.fail(
      username === 'problem_user',
      'problem_user tidak berhasil melanjutkan checkout ke Overview'
    );

    // Login menggunakan akun yang sedang diuji
    await loginPage.goto();
    await loginPage.login(username, PASSWORD);

    // Urutkan harga dari termurah ke termahal
    await inventoryPage.sortBy('lohi');

    // Tambahkan produk pertama setelah pengurutan
    const namaProduk = await inventoryPage.itemNames.first().textContent();
    await inventoryPage.addToCart(namaProduk);

    // Buka keranjang dan lanjut checkout
    await inventoryPage.openCart();
    await cartPage.checkout();

    // Isi informasi checkout sampai halaman Overview
    await checkoutPage.fillInformation({
      firstName: 'Budi',
      lastName: 'Santoso',
      postalCode: '28711',
    });

    // Pastikan halaman Overview tampil
    await expect(checkoutPage.page.getByTestId('title')).toHaveText('Checkout: Overview');
  });
}
