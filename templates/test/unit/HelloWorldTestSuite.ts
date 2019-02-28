
import { suite, test } from 'mocha-typescript';
import * as assert from 'assert';

const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);

import {helloWorld} from '../../';

@suite()
class HelloWorldTestSuite {
    @test()
    async tst(): Promise<void> {
        assert.strictEqual(helloWorld(), true);
    }
}