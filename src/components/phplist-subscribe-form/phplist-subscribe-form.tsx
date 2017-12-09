import { Component, Prop , Element } from '@stencil/core';

@Component({
  tag: 'phplist-subscribe-form',
  styleUrl: 'phplist-subscribe-form.scss',
  shadow: true
})
export class PhplistSubscribeForm {

  @Prop() action: string;
  @Prop() token: string;

  email: string;
  confirmEmail: string;

  form: null;

  @Element() el: HTMLElement;

  getForm(){
    return this.el.querySelector("form");
  }

  submit(){
    if(this.checkform()){
      this.getForm().submit();
    }
  }

  checkform(){
    let isValid = true;
    if(!this.validateEmail()){
      isValid = false;
    }
    return isValid;
  }

  validateEmail(){
    if(this.email === ''){
      alert("Email is required.");
      return false;
    }
    if(this.confirmEmail === ''){
      alert("Email is required.");
      return false;
    }
    if (this.email !== this.confirmEmail) {
      alert("The Email Addresses you entered do not match");
      return false;
    }
    return true;
  }

  render() {
    return (
        <div class="container">
          <form method="post" name="subscribeform" action={this.action}>
            <div>
              <input type="hidden" name="formtoken" value={this.token} />
              <div class="form-label">Email</div>
              <div class="form-body-box">
                <input type="text" maxlength="40" value={this.email}/>
              </div>
              <div class="form-label">Confirm your email address</div>
              <div class="form-body-box">
                <input type="text" maxlength="40" value={this.confirmEmail} />
              </div>
              <div class="checkbox-container">
                <span><input type="checkbox" name="htmlemail" value="1" checked /></span>
                <span>Receive emails with pictures and text (uncheck for text-only)</span>
              </div>
              <input type="hidden" name="list[3]" value="signup"/>
              <input type="hidden" name="VerificationCodeX" value="" maxlength="20"/>
              <div class="submit-container">
                <button class="submit-button" type="submit" name="subscribe" value="Subscribe" onClick={() => this.checkform()}/>
              </div>
            </div>
          </form>
        </div>
    );
  }
}
