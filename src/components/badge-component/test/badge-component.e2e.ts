import { newE2EPage } from '@stencil/core/testing';

describe('emerson-badge-component', () => {
  it('renders standard badge with default position', async () => {
    const page = await newE2EPage();
    await page.setContent('<emerson-badge-component text="1" color="primary" variant="standard"></emerson-badge-component>');


    await page.waitForChanges();

    const badge = await page.find('emerson-badge-component');
    expect(badge).not.toBeNull();
    expect(badge).toHaveAttribute('variant')
    expect(badge).toHaveClass('hydrated');

    const badgeInnerHtml = await page.evaluate(() => document.querySelector('emerson-badge-component').shadowRoot.innerHTML);
    expect(badgeInnerHtml).toContain('<span class="count primary topRight">1</span>');
  });
});
