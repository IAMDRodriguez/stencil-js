import { newSpecPage } from '@stencil/core/testing';
import { BadgeComponent } from '../badge-component';

describe('emerson-badge-component', () => {
  it('should render a standard badge with default position', async () => {
    const page = await newSpecPage({
      components: [BadgeComponent],
      html: '<emerson-badge-component text="1" color="primary" variant="standard"></emerson-badge-component>',
    });
    expect(page.root).toEqualHtml(`
      <emerson-badge-component text="1" color="primary" variant="standard">
        <mock:shadow-root>
          <div class="badge">
            <span class="count primary topRight" style="background-color: none;">1</span>
            <slot></slot>
          </div>
        </mock:shadow-root>
      </emerson-badge-component>
    `);
  });

  it('should render a dot badge with specified position', async () => {
    const page = await newSpecPage({
      components: [BadgeComponent],
      html: '<emerson-badge-component text=" " color="warning" variant="dot" position="bottomLeft"></emerson-badge-component>',
    });
    expect(page.root).toEqualHtml(`
      <emerson-badge-component text=" " color="warning" variant="dot" position="bottomLeft">
        <mock:shadow-root>
          <div class="badge">
            <span class="dot-badge bottomLeft" style="background-color: #F79429;"></span>
            <slot></slot>
          </div>
        </mock:shadow-root>
      </emerson-badge-component>
    `);
  });

  it('should render without badge for variant other than standard or dot', async () => {
    const page = await newSpecPage({
      components: [BadgeComponent],
      html: '<emerson-badge-component text=" " color="secondary" variant="invalid"></emerson-badge-component>',
    });
    expect(page.root).toEqualHtml(`
      <emerson-badge-component text=" " color="secondary" variant="invalid">
        <mock:shadow-root>
          <div class="badge">
            <slot></slot>
          </div>
        </mock:shadow-root>
      </emerson-badge-component>
    `);
  });

  it('should render without badge for variant  standard and other color', async () => {
    const page = await newSpecPage({
      components: [BadgeComponent],
      html: '<emerson-badge-component text="1" color="invalid" variant="standard"></emerson-badge-component>',
    });
    expect(page.root).toEqualHtml(`
      <emerson-badge-component text="1" color="invalid" variant="standard">
        <mock:shadow-root>
          <div class="badge">
            <span class="count topRight" style="background-color: none;">1</span>
            <slot></slot>
          </div>
        </mock:shadow-root>
      </emerson-badge-component>
    `);
  });

  it('should render a dot badge with specified position with other color', async () => {
    const page = await newSpecPage({
      components: [BadgeComponent],
      html: '<emerson-badge-component text=" " color="invalid" variant="dot" position="bottomLeft"></emerson-badge-component>',
    });
    expect(page.root).toEqualHtml(`
      <emerson-badge-component text=" " color="invalid" variant="dot" position="bottomLeft">
        <mock:shadow-root>
          <div class="badge">
            <span class="dot-badge bottomLeft" style="background-color: none;"></span>
            <slot></slot>
          </div>
        </mock:shadow-root>
      </emerson-badge-component>
    `);
  });

});
