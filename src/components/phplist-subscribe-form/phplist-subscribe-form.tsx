import { Component } from '@stencil/core';

@Component({
  tag: 'phplist-subscribe-form',
  styleUrl: 'phplist-subscribe-form.scss'
})
export class PhplistSubscribeForm {

  render() {
    return (
      <div>
        <form method=post name="subscribeform" action="https://www.the-clown.com/lists/?p=subscribe&id=2">
          <div>
            <input type="hidden" name="formtoken" value="19ebe60baf0b60ef7cfb37536fb38459" />
            <div class="required padding-bottom-5">Email</div>
            <div class="form-body-box width-100 overflow-hidden">
              <input type="text" name="email" class="width-100" maxlength="40"/>
            </div>
            <script type="text/javascript">addFieldToCheck("email","Email");</script>
            <div class="required padding-bottom-5 margin-top-10">Confirm your email address</div>
            <div class="form-body-box width-100 overflow-hidden">
              <input type="text" name="emailconfirm" class="width-100" maxlength="40"/>
            </div>
            <script language="Javascript" type="text/javascript">addFieldToCheck("emailconfirm","Confirm your email address");</script>
            <div class="padding-top-15">
              <span class="attributeinput"><input type=checkbox name="htmlemail" value="1" checked="true"  /></span>
              <span class="attributename">Receive emails with pictures and text (uncheck for text-only)</span>
            </div>
            <input type="hidden" name="list[3]" value="signup"/>
              <div style="display:none"><input type="text" name="VerificationCodeX" value="" size="20"/></div>
              <p><input type="submit" name="subscribe" value="Subscribe" onClick="return checkform();"/></p>
          </div>
        </form>
      </div>
    );
  }
}
