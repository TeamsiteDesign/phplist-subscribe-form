import { render } from '@stencil/core/testing';
import { PhplistSubscribeForm } from './phplist-subscribe-form';

describe('phplist-subscribe-form', () => {
  it('should build', () => {
    expect(new PhplistSubscribeForm()).toBeTruthy();
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