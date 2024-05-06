import { newE2EPage } from '@stencil/core/testing';


describe('EmersonSkeleton e2e tests', () => {
  it('should render a rectangle skeleton with default size and no animation', async () => {
    const page = await newE2EPage();
    await page.setContent('<emerson-skeleton variant="rectangle"></emerson-skeleton>');

    const skeleton = await page.find('emerson-skeleton');
    expect(skeleton).not.toBeNull();
    expect(skeleton).toHaveAttribute('variant')
    expect(skeleton).toHaveClass('hydrated');


    const skeletonContent = await page.evaluate(() => document.querySelector('emerson-skeleton').shadowRoot.innerHTML);
    expect(skeletonContent).toContain('<div class="skeleton-rectangle"></div>');
  });

  it('should render a circle skeleton with specified size and animation', async () => {
    const page = await newE2EPage();
    await page.setContent('<emerson-skeleton variant="circle" width="50px" height="50px" animation></emerson-skeleton>');

    const skeleton = await page.find('emerson-skeleton');
    expect(skeleton).not.toBeNull();

    const skeletonContent = await page.evaluate(() => document.querySelector('emerson-skeleton').shadowRoot.innerHTML);
    expect(skeletonContent).toContain('<div class="skeleton-circle shimmer" style="width: 50px; height: 50px;"></div>');
  });

  it('should render a text skeleton with default size and no animation', async () => {
    const page = await newE2EPage();
    await page.setContent('<emerson-skeleton variant="text"></emerson-skeleton>');

    const skeleton = await page.find('emerson-skeleton');
    expect(skeleton).not.toBeNull();

    const skeletonContent = await page.evaluate(() => document.querySelector('emerson-skeleton').shadowRoot.innerHTML);
    expect(skeletonContent).toContain('<div class="skeleton-text"></div>');
  });

});
