'use strict';

import { GraphContent } from '../../../../src/js/core';
import errors from '../../../../src/js/helpers/errors';

describe('GraphContent - when consumed', () => {
  let content = null;
  beforeEach(() => {
    content = new GraphContent();
  });
  it('creates interfaces', () => {
    expect(typeof content.load).toEqual('function');
    expect(typeof content.unload).toEqual('function');
    expect(typeof content.resize).toEqual('function');
    expect(typeof content.redraw).toEqual('function');
  });
  it('throws error when load is called without being implemented', () => {
    expect(() => {
      content.load();
    }).toThrowError(errors.THROW_MSG_CONTENT_LOAD_NOT_IMPLEMENTED);
  });
  it('throws error when unload is called without being implemented', () => {
    expect(() => {
      content.unload();
    }).toThrowError(errors.THROW_MSG_CONTENT_UNLOAD_NOT_IMPLEMENTED);
  });
  it('throws error when resize is called without being implemented', () => {
    expect(() => {
      content.resize();
    }).toThrowError(errors.THROW_MSG_CONTENT_RESIZE_NOT_IMPLEMENTED);
  });
  it('throws error when redraw is called without being implemented', () => {
    expect(() => {
      content.redraw();
    }).toThrowError(errors.THROW_MSG_CONTENT_REDRAW_NOT_IMPLEMENTED);
  });
});
