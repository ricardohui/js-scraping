import { Builder, By, until, Key, Option } from 'selenium-webdriver';

(async function main() {
  const url =
    'https://www.apple.com/hk/shop/product/MU8H2BX/A/smart-keyboard-folio-for-129-inch-ipad-pro-3rd-generation-british-english';
  const expectedTitle = 'Buy iPad Pro Smart Keyboard Folio - Apple (HK)';
  const dropdown_xpath = 'select#dimensionLanguage';
  const checkAnotherStore_xpath =
    "//button[contains(text(), 'Check another store')]";
  const checkAvailability_xpath =
    "//button[contains(text(), 'Check availability')]";
  const option_xpath = "//option[contains(text(), 'US English')]";
  const locationBar_xpath = '//input[@name="query"]';
  const search_xpath =
    "//button[@type='submit' and @id='as-retailavailabilitysearch-searchbutton']";
  let driver = await new Builder()
    .forBrowser('firefox')
    .setFirefoxOptions(Option)
    .build();
  try {
    await driver.get(url);
    // await driver.findElement(By.name('q')).sendKeys('webdriver', Key.RETURN);
    await driver.wait(until.titleIs(expectedTitle), 1000);
    await driver.findElement(By.css(dropdown_xpath)).click();
    await driver.findElement(By.xpath(option_xpath)).click();
    await driver.findElement(By.xpath(checkAvailability_xpath)).click();
    await driver.findElement(By.xpath(locationBar_xpath)).sendKeys('Hong Kong');
    await driver.findElement(By.xpath(search_xpath)).click();
  } finally {
    await driver.quit();
  }
})();
