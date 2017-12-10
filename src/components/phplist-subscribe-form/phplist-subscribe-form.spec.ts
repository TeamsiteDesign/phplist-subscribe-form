import { render } from '@stencil/core/testing';
import { PhplistSubscribeForm } from './phplist-subscribe-form';

describe('phplist-subscribe-form', () => {
  it('should build', () => {
    expect(new PhplistSubscribeForm()).toBeTruthy();
  });
  it('invalid when empty email', () => {
      let form = new PhplistSubscribeForm();
      form.validate();
      expect(form.valid).toEqual(false);
  });
  it('invalid when email not equal to confirm email', () => {
        let form = new PhplistSubscribeForm();
        form.email = 'test@test.com';
        form.confirmEmail = 'test2@test.com';
        form.validate();
        expect(form.valid).toEqual(false);
  });
  it('valid when email matches confirm email', () => {
      let form = new PhplistSubscribeForm();
      form.email = 'test@test.com';
      form.confirmEmail = 'test@test.com';
      form.validate();
      expect(form.valid).toEqual(true);
  });
  it('isEmpty', () => {
      let form = new PhplistSubscribeForm();
      expect(form.isEmpty('')).toEqual(true);
      expect(form.isEmpty('test')).toEqual(false);
  });
  it('isNotEmpty', () => {
      let form = new PhplistSubscribeForm();
      expect(form.isNotEmpty('')).toEqual(false);
      expect(form.isNotEmpty('test')).toEqual(true);
  });
  describe('rendering', () => {
    beforeEach(async () => {
      await render({
        components: [PhplistSubscribeForm],
        html: '<phplist-subscribe-form></phplist-subscribe-form>'
      });
    });
  });
});