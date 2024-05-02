import { Component, Fragment, Prop, State, h } from "@stencil/core";

@Component({
    tag: 'emerson-hint',
    styleUrl: 'EmersonHint.scss',
    scoped: true
})
export class EmersonHint {
    private _id = Math.random().toString(36).substring(7);
    @Prop({ mutable: true }) vertical: boolean;
    @Prop({ mutable: true }) horizontal: boolean;
    @Prop({ mutable: true }) darkmode: boolean;
    @Prop({ mutable: true }) withtitle: boolean;
    @Prop({ mutable: true }) withlink: boolean;
    @Prop({ mutable: true }) link: string;    
    @Prop({ mutable: true }) withimage: boolean;
    @Prop({ mutable: true }) closable: boolean;

    @State() private _isVertical: boolean;
    @State() private _isHorizontal: boolean;
    @State() private _isDarkMode: boolean;

    componentWillLoad() {
        this._setVerticalProp(this.vertical);
        this._checkHorizontalVerticalProps(this.vertical, this.horizontal);
        this._checkDarkModeProp(this.darkmode);
        this._checkWithLinksProp(this.withlink);
    }

    private _setVerticalProp(vertical: boolean) {
        if (vertical !== undefined) {
            this._isVertical = true;
            this._isHorizontal = false;
        } else {
            this._isVertical = false;
            this._isHorizontal = true;
        }
    }

    private _checkHorizontalVerticalProps(vertical: boolean, horizontal: boolean) {
        if(vertical && horizontal) {
            throw new Error(`You cannot have both vertical and horizontal props set to true in ${this.constructor.name} component.`);
        }
    }

    private _checkDarkModeProp(darkmode: boolean) {
        if(darkmode === undefined) {
            throw new Error(`You must set the darkmode prop in ${this.constructor.name} component.`);
        } else if(darkmode) {
            this._isDarkMode = true;
        } else {
            this._isDarkMode = false;
        }
    }

    private _checkWithLinksProp(withlink: boolean) {
        if(withlink && !this.link) {
            throw new Error(`You must set the link prop in ${this.constructor.name} component if withlink is true.`);
        }
    }

    private _handleClose() {
        const hint = document.getElementById(this._id);
        hint.remove();
    }

    render() {
        return (
            <Fragment>
                <div id={ this._id } class={{
                    'wrapper': true,
                    'hint__lightmode': !this._isDarkMode,
                    'hint__darkmode': this._isDarkMode,
                }}>
                    <div class={{
                        'hint__with__title': this.withtitle,
                        'hint__with__image': this.withimage,
                        'hint__closable': this.closable
                    }}>
                        <div class={{
                            'pro__hint__dark': this._isDarkMode,
                            'pro__hint__light': !this._isDarkMode,
                            'hint__vertical': this._isVertical,
                            'hint__horizontal': this._isHorizontal,
                        }}>
                            {this.withimage && this._isHorizontal && <img src="../../assets/icons/hint.svg"></img>}

                            <div class={{
                                'pro__hint__closable': this.closable && this._isVertical && this.withtitle,
                                'pro__hint__without__title': this.closable && this._isVertical && !this.withtitle,
                            }}>
                                { this.withtitle && <span class="pro__tip__title">Pro tip:</span> }
                                { this.closable && this._isVertical && <div class="hint__closable">
                                        <div class="close" onClick={() => this._handleClose()}>
                                            <img src="../../assets/icons/close.svg"></img>
                                        </div>
                                    </div>
                                }
                            </div>
                            {this.withimage && this._isVertical && 
                            <div class="center">
                                <img src="../../assets/icons/hint.svg"></img>
                            </div>
                            }
                            <div class={{
                                "slot__dark": this.darkmode, 
                                "slot__light": !this.darkmode
                            }}
                            >
                                <slot></slot>
                            </div>
                            <div class={{
                                "display__none": !this.withlink && !this.closable && !this._isHorizontal,
                                "closable__link__container": this._isHorizontal && (this.withlink || this.closable),
                            }}>
                            {this.withlink && this._isHorizontal && <div class="hint__with__link last__here"><a href={'http://' + this.link}>HERE</a></div>}
                            {this.closable && this._isHorizontal && <div class="hint__closable last__closable">
                                <div class="close" onClick={() => this._handleClose()}>
                                    <img src="../../assets/icons/close.svg"></img>
                                </div>
                            </div>
                            }
                            </div>
                        </div>
                        {this.withlink && this._isVertical && <div class="hint__with__link__vertical"><a href={'http://' + this.link}>HERE</a></div>}
                    </div>
                </div>
            </Fragment>
        )
    }
}