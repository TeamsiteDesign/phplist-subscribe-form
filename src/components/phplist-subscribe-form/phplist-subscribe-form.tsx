import { Component, Prop , Element, State } from '@stencil/core';

@Component({
  tag: 'phplist-subscribe-form',
  styleUrl: 'phplist-subscribe-form.scss',
  shadow: true
})
export class PhplistSubscribeForm {

  @Prop() action: string;

  email: string;
  confirmEmail: string;

  error: string;
  @State() valid: boolean;

  form: null;

  @Element() el: HTMLElement;

  getForm(){
    return this.el.shadowRoot.querySelector("form");
  }

  submit(event){
    event.preventDefault();
    if(this.validate()){
      this.getForm().submit();
    }
  }

  validate(){
    this.valid = true;
    this.error = '';
    if(!this.validateEmail()){
      this.valid = false;
    }
    return this.valid;
  }

  validateEmail(){
    if(this.isEmpty(this.email)){
      this.error ="Email is required.";
      return false;
    }
    if(this.isEmpty(this.confirmEmail)){
      this.error = "Confirm email is required.";
      return false;
    }
    if (this.email !== this.confirmEmail) {
      this.error = "The Email Addresses you entered do not match";
      return false;
    }
    return true;
  }

  isEmpty(value){
    return typeof value === 'undefined' || value === '';
  }

  isNotEmpty(value){
    return !this.isEmpty(value);
  }

  componentWillLoad() {
      this.valid = true;
  }

  changedEmail(event){
    this.email = event.target.value;
  }

  changedConfirmEmail(event){
    this.confirmEmail = event.target.value;
  }

  render() {
    return (
        <div class="container">
          <form method="post" name="subscribeform" action={this.action}>
            <div>
              <div class="form-label">Email</div>
              <div class="form-body-box">
                <input type="text" name="email" maxlength="40" value={this.email} onInput={() => this.changedEmail(event)}/>
              </div>
              <div class="form-label">Confirm your email address</div>
              <div class="form-body-box">
                <input type="text" name="emailconfirm" maxlength="40" value={this.confirmEmail} onInput={() => this.changedConfirmEmail(event)}/>
              </div>
              <div class="checkbox-container">
                <span><input type="checkbox" name="htmlemail" value="1" checked /></span>
                <span>Receive emails with pictures and text (uncheck for text-only)</span>
              </div>
              <input type="hidden" name="list[3]" value="signup"/>
              <input type="hidden" name="VerificationCodeX" value="" maxlength="20"/>
              <input type="hidden" name="subscribe" value="Subscribe"/>
              <div class="alert alert-danger" style={{ display: this.valid ? 'none' : 'block' }}>{this.error}</div>
              <div class="submit-container">
                <button type="button" class="submit-button" onClick={(event) => this.submit(event)}>Subscribe</button>
              </div>
            </div>
          </form>
        </div>
    );
  }
}
