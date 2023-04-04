import { MockModel } from '../../../database/test/support/mock.model';
import { Bid } from '../../schema/bid.schema';
import { bidStub } from '../stubs/bid.stub';

export class BidModel extends MockModel<Bid> {
  protected entityStub = bidStub();
}
