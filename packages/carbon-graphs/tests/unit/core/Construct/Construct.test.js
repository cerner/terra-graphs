'use strict';

import Construct from '../../../../src/js/core/Construct';
import errors from '../../../../src/js/helpers/errors';

describe('Construct', () => {
  let content = null;
  beforeEach(() => {
    content = new Construct();
  });
  describe('when consumed', () => {
    it('creates interfaces when consumed', () => {
      expect(typeof content.generate).toEqual('function');
      expect(typeof content.loadContent).toEqual('function');
      expect(typeof content.unloadContent).toEqual('function');
      expect(typeof content.resize).toEqual('function');
      expect(typeof content.destroy).toEqual('function');
    });
    it('throws error when generate is called without being implemented', () => {
      expect(() => {
        content.generate();
      }).toThrowError(
        errors.THROW_MSG_CONSTRUCT_GENERATE_NOT_IMPLEMENTED,
      );
    });
    it('throws error when load is called without being implemented', () => {
      expect(() => {
        content.loadContent();
      }).toThrowError(errors.THROW_MSG_CONSTRUCT_LOAD_NOT_IMPLEMENTED);
    });
    it('throws error when unload is called without being implemented', () => {
      expect(() => {
        content.unloadContent();
      }).toThrowError(errors.THROW_MSG_CONSTRUCT_UNLOAD_NOT_IMPLEMENTED);
    });
    it('throws error when resize is called without being implemented', () => {
      expect(() => {
        content.resize();
      }).toThrowError(errors.THROW_MSG_CONSTRUCT_RESIZE_NOT_IMPLEMENTED);
    });
    it('throws error when destroy is called without being implemented', () => {
      expect(() => {
        content.destroy();
      }).toThrowError(errors.THROW_MSG_CONSTRUCT_DESTROY_NOT_IMPLEMENTED);
    });
  });
});
