import { expect } from 'chai';

import { FRONTFACE_CCW, FRONTFACE_CW } from '../../../src/platform/graphics/constants.js';
import { NullGraphicsDevice } from '../../../src/platform/graphics/null/null-graphics-device.js';

describe('Front face render state', function () {

    it('defaults to FRONTFACE_CCW after initializeRenderState', function () {
        const canvas = {};
        const device = new NullGraphicsDevice(canvas);
        device.initializeRenderState();
        expect(device.frontFace).to.equal(FRONTFACE_CCW);
    });

    it('setFrontFace updates device state on NullGraphicsDevice', function () {
        const canvas = {};
        const device = new NullGraphicsDevice(canvas);
        device.initializeRenderState();
        device.setFrontFace(FRONTFACE_CW);
        expect(device.frontFace).to.equal(FRONTFACE_CW);
    });

});
