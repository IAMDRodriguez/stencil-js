import { newSpecPage } from '@stencil/core/testing';
import { EmersonSkeleton } from '../emerson-skeleton';

describe('emerson-skeleton', () => {
  it('should render a rectangle skeleton with default size and no animation', async () => {
    const page = await newSpecPage({
      components: [EmersonSkeleton],
      html: '<emerson-skeleton variant="rectangle"></emerson-skeleton>',
    });

    expect(page.root).toEqualHtml(`
      <emerson-skeleton variant="rectangle">
        <mock:shadow-root>
          <div class="skeleton">
            <div class="skeleton-rectangle"></div>
          </div>
        </mock:shadow-root>
      </emerson-skeleton>
    `);
  });

  it('should render a circle skeleton with specified size and animation', async () => {
    const page = await newSpecPage({
      components: [EmersonSkeleton],
      html: '<emerson-skeleton variant="circle" width="50px" height="50px" animation></emerson-skeleton>',
    });

    expect(page.root).toEqualHtml(`
      <emerson-skeleton variant="circle" width="50px" height="50px" animation>
        <mock:shadow-root>
          <div class="skeleton">
            <div class="skeleton-circle shimmer" style="width: 50px; height: 50px;"></div>
          </div>
        </mock:shadow-root>
      </emerson-skeleton>
    `);
  });

  it('should render a text skeleton with default size and no animation', async () => {
    const page = await newSpecPage({
      components: [EmersonSkeleton],
      html: '<emerson-skeleton variant="text"></emerson-skeleton>',
    });

    expect(page.root).toEqualHtml(`
      <emerson-skeleton variant="text">
        <mock:shadow-root>
          <div class="skeleton">
            <div class="skeleton-text"></div>
          </div>
        </mock:shadow-root>
      </emerson-skeleton>
    `);
  });

  it('should render a rounded skeleton with default size and no animation', async () => {
    const page = await newSpecPage({
      components: [EmersonSkeleton],
      html: '<emerson-skeleton variant="rounded"></emerson-skeleton>',
    });

    expect(page.root).toEqualHtml(`
      <emerson-skeleton variant="rounded">
        <mock:shadow-root>
          <div class="skeleton">
            <div class="skeleton-rounded"></div>
          </div>
        </mock:shadow-root>
      </emerson-skeleton>
    `);
  });

  it('should render a default skeleton with default size and no animation', async () => {
    const page = await newSpecPage({
      components: [EmersonSkeleton],
      html: '<emerson-skeleton></emerson-skeleton>',
    });

    expect(page.root).toEqualHtml(`
      <emerson-skeleton>
        <mock:shadow-root>
          <div class="skeleton">
            <div class="skeleton-rectangle"></div>
          </div>
        </mock:shadow-root>
      </emerson-skeleton>
    `);
  });

});
