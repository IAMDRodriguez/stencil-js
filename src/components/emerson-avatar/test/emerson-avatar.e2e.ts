import { newE2EPage } from '@stencil/core/testing';

describe('emerson-avatar', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<emerson-avatar></emerson-avatar>');

    const element = await page.find('emerson-avatar');
    expect(element).toHaveClass('hydrated');
  });
  
  it('renders default avatar when src is not provided', async () => {
    const page = await newE2EPage();
    await page.setContent(`<emerson-avatar></emerson-avatar>`);

    const avatar = await page.find('emerson-avatar');
    const image = await avatar.find('img');

    expect(image.getAttribute('src')).toContain('generic-avatar.png');
  });

  it('renders custom avatar when src is provided', async () => {
    const page = await newE2EPage();
    await page.setContent(`<emerson-avatar src="https://example.com/avatar.jpg"></emerson-avatar>`);

    const avatar = await page.find('emerson-avatar');
    const image = await avatar.find('img');

    expect(image.getAttribute('src')).toContain('https://example.com/avatar.jpg');
  });
});

