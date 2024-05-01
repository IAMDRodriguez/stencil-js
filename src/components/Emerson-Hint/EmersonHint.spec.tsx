import { SpecPage, newSpecPage } from '@stencil/core/testing';
import { EmersonHint } from './EmersonHint';

describe('EmersonHint', () => {
    let page: SpecPage = null;
    let component = null;
    let mockMessage = 'Unity Test Mock';

    beforeEach(async () => {
        page = await newSpecPage({
            components: [EmersonHint],
            html: `<emerson-hint darkmode="false"></emerson-hint>`,
        });

        component = page.rootInstance;
    });

    it('should throw an error when darkmode prop is not set', async () => {
        await expect(async () => {
            page = await newSpecPage({
                components: [EmersonHint],
                html: `
                    <emerson-hint>
                        horizontal
                    ></emerson-hint>
                `,
            });
        }).rejects.toThrow(`You must set the darkmode prop in ${component.constructor.name} component.`);
    });

    it('throws an error when both vertical and horizontal are passed', async () => {
        await expect(async () => {
            page = await newSpecPage({
                components: [EmersonHint],
                html: `
                    <emerson-hint
                        horizontal
                        vertical
                        darkmode
                    ></emerson-hint>
                `,
            });
        }).rejects.toThrow(`You cannot have both vertical and horizontal props set to true in ${component.constructor.name} component.`);
    });

    it('should throw an error when withlink is true and link is not set', async () => {
        await expect(async () => {
            page = await newSpecPage({
                components: [EmersonHint],
                html: `
                    <emerson-hint
                        withlink
                        darkmode
                    ></emerson-hint>
                `,
            });
        }).rejects.toThrow(`You must set the link prop in ${component.constructor.name} component if withlink is true.`);
    });


    it('renders correctly with default props', async () => {
        expect(page.root).toEqualHtml(`
        <emerson-hint darkmode="false">
            <div id="${component._id}" class="wrapper hint__lightmode">
                <div class="hint__horizontal">
                    <div class="pro__hint__light hint__horizontal">
                        <div class="display__none">
                        </div>
                        <div class="slot__light">
                        </div>
                        <div class="closable__link__container">
                        </div>
                    </div>
                </div>
            </div>
        </emerson-hint>
        `);
    });

    it('should remove the hint element when _handleClose is called', () => {
        const emersonHint = new EmersonHint();
    
        const hintElement = document.createElement('div');
        hintElement.id = emersonHint['_id'];
    
        document.body.appendChild(hintElement);
    
        emersonHint['_handleClose']();
    
        expect(document.getElementById(emersonHint['_id'])).toBeNull();
    });

    it('should renders the title when withtitle is true', async () => {
        const mockPage = await newSpecPage({
            components: [EmersonHint],
            html: `
            <emerson-hint
            withtitle
            darkmode
            >${mockMessage}</emerson-hint>
            `,
        });

        expect(mockPage.root).toEqualHtml(`
        <emerson-hint darkmode="" withtitle="">
        <div class="hint__darkmode wrapper" id="${mockPage.rootInstance._id}">
          <div class="hint__horizontal hint__with__title">
            <div class="hint__horizontal pro__hint__dark">
              <div>
                Pro tip:
              </div>
              <div class="slot__dark">
                Unity Test Mock
              </div>
              <div class="closable__link__container"></div>
            </div>
          </div>
        </div>
        </emerson-hint>
        `);
    });

    it('renders correctly with custom props', async () => {
        const mockPage = await newSpecPage({
            components: [EmersonHint],
            html: `
                <emerson-hint
                    vertical="true"
                    darkmode="true"
                    withtitle="true"
                    withimage="true"
                    closable="true"
                >${mockMessage}</emerson-hint>
            `,
        });
        
        expect(mockPage.root).toEqualHtml(`
            <emerson-hint closable=\"true\" darkmode=\"true\" vertical=\"true\" withimage=\"true\" withtitle=\"true\">
                <div class=\"hint__darkmode wrapper\" id=\"${mockPage.rootInstance._id}\">
                    <div class=\"hint__closable hint__vertical hint__with__image hint__with__title\">
                    <div class=\"hint__vertical pro__hint__dark\">
                        <div class=\"pro__hint__closable\">
                        Pro tip:
                        <div class=\"hint__closable\">
                            <div class=\"close\">
                            <img src=\"../../assets/icons/close.svg\">
                            </div>
                        </div>
                        </div>
                        <div class=\"center\">
                        <img src=\"../../assets/icons/hint.svg\">
                        </div>
                        <div class=\"slot__dark\">
                        Unity Test Mock
                        </div>
                        <div class=\"closable__link__container\"></div>
                    </div>
                    </div>
                </div>
            </emerson-hint>
        `)
    });
});