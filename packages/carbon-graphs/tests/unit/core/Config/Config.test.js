'use strict';

import BaseConfig from '../../../../src/js/core/BaseConfig';
import errors from '../../../../src/js/helpers/errors';

describe('BaseConfig', () => {
  let config = null;
  beforeEach(() => {
    config = new BaseConfig();
  });
  it('creates interfaces when consumed', () => {
    expect(typeof config.getConfig).toEqual('function');
    expect(typeof config.setInput).toEqual('function');
    expect(typeof config.validateInput).toEqual('function');
    expect(typeof config.clone).toEqual('function');
  });
  it('throws error when getInput is called without being implemented', () => {
    expect(() => {
      config.getConfig();
    }).toThrowError(errors.THROW_MSG_CONFIG_GET_CONFIG_NOT_IMPLEMENTED);
  });
  it('throws error when setInput is called without being implemented', () => {
    expect(() => {
      config.setInput();
    }).toThrowError(errors.THROW_MSG_CONFIG_SET_INPUT_NOT_IMPLEMENTED);
  });
  it('throws error when validateInput is called without being implemented', () => {
    expect(() => {
      config.validateInput();
    }).toThrowError(errors.THROW_MSG_CONFIG_VALIDATE_INPUT_NOT_IMPLEMENTED);
  });
  it('throws error when clone is called without being implemented', () => {
    expect(() => {
      config.clone();
    }).toThrowError(errors.THROW_MSG_CONFIG_CLONE_INPUT_NOT_IMPLEMENTED);
  });
});
